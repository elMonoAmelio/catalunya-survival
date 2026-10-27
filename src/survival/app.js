(function () {
'use strict';
const D = window.__SURV__;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const fmtN = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const store = {
  get(k, d) { try { const v = localStorage.getItem('cs_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('cs_' + k, JSON.stringify(v)); } catch (e) {} }
};

const PWA = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
let heading = null, compassOn = false;

// ---------- categorías ----------
const GROUPS = {
  agua: { l: 'Agua', c: '#1f6fd1' },
  comida: { l: 'Comida', c: '#2f8a3b' },
  refugio: { l: 'Refugio', c: '#a8611f' },
  salud: { l: 'Salud', c: '#cf2a3c' },
  seguridad: { l: 'Seguridad', c: '#2e3f8f' },
  salir: { l: 'Salir', c: '#11607d' }
};
const CATS = {
  fuente: { g: 'agua', l: 'Fuente', e: '💧' },
  manantial: { g: 'agua', l: 'Manantial', e: '🌿' },
  super: { g: 'comida', l: 'Supermercado', e: '🛒' },
  tienda: { g: 'comida', l: 'Tienda de alimentación', e: '🥖' },
  mercado: { g: 'comida', l: 'Mercado municipal', e: '🧺' },
  banco_alim: { g: 'comida', l: 'Banco de alimentos o comedor social', e: '🥫' },
  refugio: { g: 'refugio', l: 'Refugio guardado', e: '🏠' },
  refugio_libre: { g: 'refugio', l: 'Refugio libre', e: '🛖' },
  abrigo: { g: 'refugio', l: 'Cabaña o abrigo de montaña', e: '⛺' },
  cubierta: { g: 'refugio', l: 'Cubierta urbana (pérgola, porche)', e: '☂️', minor: true },
  pabellon: { g: 'refugio', l: 'Pabellón o polideportivo municipal', e: '🏟️' },
  civico: { g: 'refugio', l: 'Centro cívico', e: '🏛️' },
  ayto: { g: 'refugio', l: 'Ayuntamiento', e: '🏢' },
  encuentro: { g: 'refugio', l: 'Punto de encuentro de emergencia', e: '🚩' },
  albergue: { g: 'refugio', l: 'Centro de acogida social', e: '🛏️' },
  hospital: { g: 'salud', l: 'Hospital', e: '🏥' },
  cap: { g: 'salud', l: 'Centro de salud o clínica', e: '🩺' },
  farmacia: { g: 'salud', l: 'Farmacia', e: '💊', c: '#8a3fb5' },
  dea: { g: 'salud', l: 'Desfibrilador (DEA)', e: '⚡' },
  policia: { g: 'seguridad', l: 'Policía', e: '👮' },
  bomberos: { g: 'seguridad', l: 'Bomberos', e: '🚒' },
  militar: { g: 'seguridad', l: 'Instalación militar', e: '🪖' },
  puerto: { g: 'salir', l: 'Puerto', e: '⚓' },
  aeropuerto: { g: 'salir', l: 'Aeropuerto o helipuerto', e: '✈️' },
  estacion: { g: 'salir', l: 'Estación de tren (Rodalies, Renfe, FGC)', e: '🚉' },
  metro: { g: 'salir', l: 'Estación de metro', e: 'Ⓜ️', minor: true },
  frontera: { g: 'salir', l: 'Control fronterizo', e: '🛂' },
  collado: { g: 'salir', l: 'Collado o paso de montaña', e: '⛰️' }
};
const counts = {};
D.pois.forEach(p => { counts[p.c] = (counts[p.c] || 0) + 1; });

// ---------- mapa ----------
const map = L.map('map', { zoomControl: false, preferCanvas: false, worldCopyJump: false, minZoom: 7, maxZoom: 19 }).setView([41.75, 1.75], 8);
map.setMaxBounds([[39.8, -1.5], [43.6, 4.6]]);
const ATT = '© <a href="https://www.icgc.cat/">ICGC</a> CC BY · © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ODbL';
const TB = (() => { try { return localStorage.getItem('cs_tilebase'); } catch (e) { return null; } })() || 'https://geoserveis.icgc.cat';
const ICGC = l => `${TB}/servei/catalunya/mapa-base/wmts/${l}/MON3857NW/{z}/{x}/{y}.png`;
const bases = {
  topo: L.tileLayer(ICGC('topografic'), { maxZoom: 19, crossOrigin: true }),
  orto: L.tileLayer(ICGC('orto-hibrida'), { maxZoom: 19, maxNativeZoom: 18, crossOrigin: true }),  // el ICGC no tiene satélite en zoom 19 en muchas zonas
  none: null
};
let baseKey = store.get('base', 'topo');
let tileErrors = 0, tileOk = 0;
Object.values(bases).forEach(b => { if (b) { b.on('tileerror', () => { tileErrors++; checkOffline(); }); b.on('tileload', () => { tileOk++; checkOffline(); }); } });
map.attributionControl.setPrefix(false);
map.attributionControl.addAttribution(ATT);

// contorno municipal sin conexión
const canvasR = L.canvas({ padding: 0.3 });
const muniLayer = L.layerGroup();
D.munis.forEach((m, i) => {
  L.polygon(m.g.map(poly => poly.map(r => r.map(([x, y]) => [y, x]))), { renderer: canvasR, color: '#8b95a3', weight: 0.7, fill: true, fillColor: '#000', fillOpacity: 0, interactive: false }).addTo(muniLayer);
});
function styleMuni() {
  const dark = matchMedia('(prefers-color-scheme: dark)').matches && document.documentElement.dataset.theme !== 'light' || document.documentElement.dataset.theme === 'dark';
  muniLayer.eachLayer(l => l.setStyle({ color: dark ? '#7f8b99' : '#8b95a3' }));
}
function setBase(k) {
  baseKey = k; store.set('base', k); if (!$('#dl').hidden) setTimeout(renderZones, 0);
  Object.values(bases).forEach(b => b && map.removeLayer(b));
  if (bases[k]) bases[k].addTo(map).bringToBack();
  const offline = k === 'none' || isOffline();
  if (offline) { muniLayer.addTo(map); styleMuni(); } else map.removeLayer(muniLayer);
  $$('[data-base]').forEach(b => b.setAttribute('aria-pressed', b.dataset.base === k));
}
function isOffline() { return !navigator.onLine || (tileErrors > 6 && tileOk === 0); }
function checkOffline() {
  const off = isOffline();
  $('#net').textContent = off ? (PWA ? 'Sin conexión: puntos y mapa guardado disponibles' : 'Sin conexión: puntos disponibles, mapa base no') : 'Con conexión';
  $('#net').dataset.state = off ? 'off' : 'on';
  if (off && !map.hasLayer(muniLayer)) { muniLayer.addTo(map); styleMuni(); }
  else if (!off && baseKey !== 'none' && map.hasLayer(muniLayer)) map.removeLayer(muniLayer);
}
addEventListener('online', () => { tileErrors = 0; checkOffline(); }); addEventListener('offline', checkOffline);

// ---------- lluvias fuertes: rieras y zonas inundables ----------
const RISK = {
  r_rieras: { l: 'Ríos, rieras y torrentes', s: 'Sin red · incluye tramos cubiertos', n: () => D.rl.length + D.rv.length },
  r_calles: { l: 'Calles que son rieras', s: 'Sin red', n: () => D.rc.length },
  r_t10: { l: 'Zona inundable frecuente (10 años)', s: 'Oficial · necesita red', n: () => null, lay: 'NZ.Flood.FluvialT10' },
  r_t100: { l: 'Zona inundable de 100 años', s: 'Oficial · necesita red', n: () => null, lay: 'NZ.Flood.FluvialT100' }
};
const riskOn = new Set(store.get('risk', ['r_rieras', 'r_calles']));
const riskLayers = {};
const riskR = L.canvas({ padding: 0.25 });
function dec(a) { const o = []; let x = a[0], y = a[1]; o.push([y / 1e5, x / 1e5]); for (let i = 2; i < a.length; i += 2) { x += a[i]; y += a[i + 1]; o.push([y / 1e5, x / 1e5]); } return o; }
const FLOOD = 'https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones';
// Teselas de 512 px (cada una cubre lo mismo que una de 256 px un zoom por debajo): 4 veces menos peticiones al servidor oficial.
function floodUrl(lay, z, x, y) {
  const S = 40075016.68557849 / 2 ** z, minx = -20037508.342789244 + x * S, maxy = 20037508.342789244 - y * S;
  return `${FLOOD}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=${lay}&STYLES=&CRS=EPSG:3857&BBOX=${minx.toFixed(2)},${(maxy - S).toFixed(2)},${(minx + S).toFixed(2)},${maxy.toFixed(2)}&WIDTH=512&HEIGHT=512&FORMAT=image/png&TRANSPARENT=true`;
}
const FloodLayer = L.TileLayer.extend({ getTileUrl(c) { return floodUrl(this.options.lay, c.z - 1, c.x, c.y); } });
function retryTiles(layer) {
  layer.on('tileerror', e => { const t = e.tile, n = +(t.dataset.r || 0); if (n >= 3 || !navigator.onLine) return; t.dataset.r = n + 1; const src = t.src; setTimeout(() => { t.src = ''; t.src = src; }, 1200 * (n + 1)); });
  return layer;
}
const rw = () => { const z = map.getZoom(); return z < 10 ? 1 : z < 12 ? 1.8 : z < 14 ? 2.6 : 4; };
function riskLayer(k) {
  if (riskLayers[k]) return riskLayers[k];
  if (k === 'r_rieras') riskLayers[k] = buildBuckets();
  else if (k === 'r_calles') riskLayers[k] = L.layerGroup(D.rc.map(([n, a]) => L.polyline(dec(a), { renderer: riskR, color: '#e0182d', weight: rw() + 4, opacity: 0.45, dashArray: '10 7' }).bindTooltip('Calle con nombre de riera o torrente: ' + esc(n), { sticky: true })));
  else riskLayers[k] = retryTiles(new FloodLayer('', { lay: RISK[k].lay, opacity: 0.6, maxZoom: 19, maxNativeZoom: 16, tileSize: 512, zoomOffset: -1, crossOrigin: true, zIndex: 5, attribution: 'Zonas inundables © MITECO / IDEE' }));
  return riskLayers[k];
}
const LINE_MINZ = 11;
function applyRisk() {
  const zOk = map.getZoom() >= LINE_MINZ;
  Object.keys(RISK).forEach(k => { const line = k === 'r_rieras' || k === 'r_calles'; if (riskOn.has(k) && (!line || zOk)) riskLayer(k).addTo(map); else if (riskLayers[k]) map.removeLayer(riskLayers[k]); });
  const hint = $('#riskhint'); if (hint) hint.hidden = zOk || !(riskOn.has('r_rieras') || riskOn.has('r_calles'));
  store.set('risk', [...riskOn]);
  $$('.risk input').forEach(i => (i.checked = riskOn.has(i.value)));
}
// Rieras repartidas en celdas de 0,2°: solo se dibujan las celdas que estás viendo.
const BK = 0.2;
let buckets = null;
function buildBuckets() {
  const g = L.layerGroup(); buckets = {};
  const add = (a, river) => { const k = Math.floor(a[0] / 1e5 / BK) + ':' + Math.floor(a[1] / 1e5 / BK) + (river ? 'r' : ''); (buckets[k] = buckets[k] || { river, ls: [] }).ls.push(a); };
  D.rl.forEach(a => add(a, false)); D.rv.forEach(a => add(a, true));
  Object.values(buckets).forEach(b => { b.layer = null; });
  g.on('add', syncBuckets);
  return g;
}
function syncBuckets() {
  const g = riskLayers.r_rieras; if (!g || !map.hasLayer(g)) return;
  const b = map.getBounds().pad(0.3), x0 = Math.floor(b.getWest() / BK) - 1, x1 = Math.floor(b.getEast() / BK) + 1, y0 = Math.floor(b.getSouth() / BK) - 1, y1 = Math.floor(b.getNorth() / BK) + 1, w = rw();
  for (const [k, bk] of Object.entries(buckets)) {
    const [kx, ky] = k.replace('r', '').split(':').map(Number), vis = kx >= x0 && kx <= x1 && ky >= y0 && ky <= y1;
    if (vis && !bk.layer) { const ll = bk.ls.map(dec), lw = bk.river ? w + 1.5 : w; bk.cas = L.polyline(ll, { renderer: riskR, color: '#fff', weight: lw + 3, opacity: 0.95, interactive: false, smoothFactor: 1.5 }); bk.ln = L.polyline(ll, { renderer: riskR, color: bk.river ? '#b3001b' : '#e0182d', weight: lw, opacity: 1, interactive: false, smoothFactor: 1.5 }); bk.layer = L.layerGroup([bk.cas, bk.ln]); g.addLayer(bk.layer); }
    else if (vis && !g.hasLayer(bk.layer)) g.addLayer(bk.layer);
    else if (!vis && bk.layer && g.hasLayer(bk.layer)) g.removeLayer(bk.layer);
  }
}
map.on('moveend', syncBuckets);
map.on('zoomend', () => { applyRisk(); const w = rw(); if (buckets) Object.values(buckets).forEach(b => { if (!b.layer) return; const lw = b.river ? w + 1.5 : w; b.ln.setStyle({ weight: lw }); b.cas.setStyle({ weight: lw + 3 }); }); if (riskLayers.r_calles) riskLayers.r_calles.eachLayer(l => l.setStyle({ weight: w + 4 })); });
function nearestRiera(lat, lon) {
  let best = 1e18, bi = -1; const c = Math.cos(lat * Math.PI / 180), X = lon * 1e5, Y = lat * 1e5;
  const scan = (a, idx) => { let x = a[0], y = a[1]; for (let i = 0; i < a.length; i += 2) { if (i) { x += a[i]; y += a[i + 1]; } const dx = (x - X) * c, dy = y - Y, d = dx * dx + dy * dy; if (d < best) { best = d; bi = idx; } } };
  D.rl.forEach(a => scan(a, -1)); D.rv.forEach(a => scan(a, -1)); D.rc.forEach(([n, a], i) => scan(a, i));
  return { m: Math.sqrt(best) * 1.1132, calle: bi >= 0 ? D.rc[bi][0] : null };
}
function showRain() {
  ['r_rieras', 'r_calles', 'r_t10', 'r_t100'].forEach(k => riskOn.add(k)); applyRisk();
  nearGroup = 'refugio'; enabled.clear(); MAIN().filter(c => CATS[c].g === 'refugio').forEach(c => enabled.add(c)); applyCats();
  hideMenu(); if (map.getZoom() < 13) { const o = origin(); map.setView([o.lat, o.lon], 14); }
  openSheet('lluvia'); startGPS(false); renderRain();
}
function renderRain() {
  const el = $('#rainnear'); if (!el) return; const o = origin(), r = nearestRiera(o.lat, o.lon);
  el.innerHTML = `El río, riera o torrente más cercano está a <b>${fmtD(r.m)}</b> ${fromTxt(o)}${r.calle ? `: la calle <b>${esc(r.calle)}</b> va sobre una riera` : ''}.`;
}

// ---------- marcadores ----------
const layers = {};
const catColor = k => k.c || GROUPS[k.g].c;
const MAIN = () => Object.keys(CATS).filter(c => !CATS[c].minor);
const enabled = new Set(store.get('cats', MAIN()));
function icon(c) {
  const k = CATS[c];
  return L.divIcon({ className: 'pin', html: `<span style="--g:${(k.c || GROUPS[k.g].c)}">${k.e}</span>`, iconSize: [28, 28], iconAnchor: [14, 14] });
}
const ICONS = {};
Object.keys(CATS).forEach(c => (ICONS[c] = icon(c)));
function clusterIcon(g) {
  return cl => {
    const n = cl.getChildCount(), s = n < 10 ? 30 : n < 100 ? 36 : n < 1000 ? 42 : 48;
    return L.divIcon({ className: 'clu', html: `<span style="--g:${GROUPS[g].c};width:${s}px;height:${s}px">${n < 1000 ? n : (n / 1000).toFixed(1).replace('.', ',') + 'k'}</span>`, iconSize: [s, s] });
  };
}
let onlyPotable = store.get('potable', false);
const isPot = p => p.t.drinking_water === 'yes' || p.t.drinking_water === 'treated';
const passes = p => !onlyPotable || (p.c !== 'fuente' && p.c !== 'manantial') || isPot(p);
function ensureLayer(c) {
  if (layers[c]) return layers[c];
  const g = CATS[c].g;
  const grp = L.markerClusterGroup({ chunkedLoading: true, maxClusterRadius: 48, disableClusteringAtZoom: 16, showCoverageOnHover: false, spiderfyOnMaxZoom: true, iconCreateFunction: clusterIcon(g) });
  const ms = [];
  D.pois.forEach(p => { if (p.c === c && passes(p)) { const mk = L.marker([p.y, p.x], { icon: ICONS[c], keyboard: false }); mk.on('click', () => openDetail(p)); ms.push(mk); } });
  grp.addLayers(ms);
  layers[c] = grp; return grp;
}
function applyCats() {
  Object.keys(CATS).forEach(c => {
    if (enabled.has(c)) ensureLayer(c).addTo(map); else if (layers[c]) map.removeLayer(layers[c]);
  });
  store.set('cats', [...enabled]);
  $$('.cat input:not(#potf)').forEach(i => { if (!i.closest('.risk')) i.checked = enabled.has(i.value); });
  $$('.gh input').forEach(i => { const cs = MAIN().filter(c => CATS[c].g === i.value); i.checked = cs.every(c => enabled.has(c)); i.indeterminate = !i.checked && cs.some(c => enabled.has(c)); });
  renderNear();
}

// ---------- GPS ----------
let gpsWarned = false;
let me = store.get('me', null), meMarker = null, meCircle = null, watchId = null, follow = false;
function startGPS(centre) {
  if (!navigator.geolocation) { toast('Este navegador no da la ubicación.'); return; }
  follow = !!centre;
  if (watchId == null) {
    watchId = navigator.geolocation.watchPosition(pos => {
      me = { lat: pos.coords.latitude, lon: pos.coords.longitude, acc: pos.coords.accuracy, t: Date.now() };
      store.set('me', me); drawMe();
      if (follow) { map.setView([me.lat, me.lon], Math.max(map.getZoom(), 14)); follow = false; }
      renderNear(); refreshSel(); renderMyPos(); renderSun(); if ($('#sheets').dataset.open === 'lluvia') renderRain();
    }, err => {
      if (err.code === 1) { navigator.geolocation.clearWatch(watchId); watchId = null; toast('Sin permiso de ubicación. Actívalo en los ajustes del navegador o usa la chincheta 📍.'); $('#gpsst').textContent = 'GPS sin permiso'; }
      else { if (!gpsWarned) toast('Buscando señal GPS… Si no llega, mantén pulsado el mapa donde estés.'); gpsWarned = true; $('#gpsst').textContent = me ? `Sin señal · última hace ${ago(me.t)}` : 'Buscando señal GPS…'; }
    }, { enableHighAccuracy: true, maximumAge: 15000, timeout: 30000 });
    $('#gpsst').textContent = me ? $('#gpsst').textContent : 'Buscando señal GPS…';
  } else if (me && centre) map.setView([me.lat, me.lon], Math.max(map.getZoom(), 14));
}
function drawMe() {
  if (!me) return;
  const ll = [me.lat, me.lon];
  if (!meMarker) {
    meCircle = L.circle(ll, { radius: me.acc || 30, color: '#2d8cff', weight: 1.5, fillOpacity: 0.14, interactive: false }).addTo(map);
    meMarker = L.marker(ll, { icon: L.divIcon({ className: 'me', html: '<span><i></i></span>', iconSize: [26, 26] }), zIndexOffset: 1000, keyboard: false }).addTo(map);
  } else { meMarker.setLatLng(ll); meCircle.setLatLng(ll).setRadius(me.acc || 30); }
  const old = Date.now() - me.t > STALE;
  if (meMarker._icon) meMarker._icon.classList.toggle('old', old);
  $('#gpsst').textContent = old ? `Última posición: hace ${ago(me.t)}` : `Tu posición ±${Math.round(me.acc || 0)} m`;
}

// ---------- distancias ----------
function hav(a, b, c, d) {
  const R = 6371e3, r = Math.PI / 180, x = (c - a) * r, y = (d - b) * r;
  const h = Math.sin(x / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin(y / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function bearing(a, b, c, d) {
  const r = Math.PI / 180, y = Math.sin((d - b) * r) * Math.cos(c * r), x = Math.cos(a * r) * Math.sin(c * r) - Math.sin(a * r) * Math.cos(c * r) * Math.cos((d - b) * r);
  return (Math.atan2(y, x) / r + 360) % 360;
}
const DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];
const fmtD = m => (m < 1000 ? Math.round(m / 10) * 10 + ' m' : (m / 1000).toLocaleString('es-ES', { maximumFractionDigits: m < 10000 ? 1 : 0 }) + ' km');
const walk = m => { const h = m / 4000; return h < 1 ? Math.max(1, Math.round(h * 60)) + ' min' : h.toLocaleString('es-ES', { maximumFractionDigits: 1 }) + ' h'; };
const STALE = 30 * 60000;
const ago = t => { const m = Math.round((Date.now() - t) / 60000); return m < 60 ? m + ' min' : m < 2880 ? Math.round(m / 60) + ' h' : Math.round(m / 1440) + ' días'; };
function origin() { if (pin) return { lat: pin.lat, lon: pin.lon, gps: false, pin: true }; if (me) return { lat: me.lat, lon: me.lon, gps: true, stale: Date.now() - me.t > STALE }; const c = map.getCenter(); return { lat: c.lat, lon: c.lng, gps: false }; }
const fromTxt = o => (o.pin ? 'de tu chincheta' : o.gps ? (o.stale ? `de tu última posición (hace ${ago(me.t)})` : 'de ti') : 'del centro del mapa');

// ---------- chincheta (posición manual) ----------
let pin = store.get('pin', null), pinMk = null, pinMode = false;
const pinIcon = L.divIcon({ className: 'pinme', html: '<span>📍</span>', iconSize: [36, 36], iconAnchor: [18, 34] });
function drawPin() {
  if (pinMk) { map.removeLayer(pinMk); pinMk = null; }
  $('#pinb').setAttribute('aria-pressed', !!pin);
  if (!pin) return;
  pinMk = L.marker([pin.lat, pin.lon], { icon: pinIcon, draggable: true, zIndexOffset: 1200, keyboard: false, title: 'Tu chincheta' }).addTo(map);
  pinMk.on('dragend', () => { const ll = pinMk.getLatLng(); setPin(ll.lat, ll.lng, true); });
  pinMk.on('click', () => { openSheet('near'); renderNear(); });
}
function setPin(lat, lon, quiet) {
  pin = { lat, lon, t: Date.now() }; store.set('pin', pin); pinMode = false; document.body.classList.remove('pinning');
  drawPin(); renderNear(); refreshSel(); renderMyPos();
  if (!quiet) { toast('Chincheta fijada: las distancias se miden desde aquí'); openSheet('near'); }
}
function clearPin() { pin = null; store.set('pin', null); drawPin(); renderNear(); refreshSel(); renderMyPos(); toast(me ? 'Chincheta quitada: vuelve a usarse el GPS' : 'Chincheta quitada'); }
map.on('click', e => { if (pinMode) setPin(e.latlng.lat, e.latlng.lng); });
map.on('contextmenu', e => setPin(e.latlng.lat, e.latlng.lng));

// ---------- punto seleccionado ----------
let selP = null, selMk = null, selLine = null;
const selIcon = L.divIcon({ className: 'selring', html: '<span></span>', iconSize: [70, 70] });
function highlight(p) {
  selP = p;
  if (!selMk) selMk = L.marker([p.y, p.x], { icon: selIcon, interactive: false, keyboard: false, zIndexOffset: -500 }).addTo(map);
  else selMk.setLatLng([p.y, p.x]).addTo(map);
  refreshSel();
}
function refreshSel() {
  if (selLine) { map.removeLayer(selLine); selLine = null; }
  if (!selP) return;
  const o = origin(); if (!o.gps && !o.pin) return;
  selLine = L.polyline([[o.lat, o.lon], [selP.y, selP.x]], { color: '#f25c19', weight: 3, opacity: 0.9, dashArray: '2 9', lineCap: 'round', interactive: false }).addTo(map);
}
function clearSel() { selP = null; if (selMk) map.removeLayer(selMk); if (selLine) map.removeLayer(selLine); selLine = null; }

// ---------- guardados ----------
let favs = new Set(store.get('favs', []));
const byId = {}; D.pois.forEach(p => (byId[p.id] = p));
function toggleFav(p) { favs.has(p.id) ? favs.delete(p.id) : favs.add(p.id); store.set('favs', [...favs]); renderFavs(); }
function renderFavs() {
  const box = $('#favlist'); if (!box) return; const o = origin();
  const ps = [...favs].map(id => byId[id]).filter(Boolean).map(p => ({ p, d: hav(o.lat, o.lon, p.y, p.x) })).sort((a, b) => a.d - b.d);
  $('#favn').textContent = ps.length;
  box.innerHTML = ps.map(({ p, d }, i) => { const k = CATS[p.c]; return `<li><button type="button" data-fav="${i}"><span class="ic" style="--g:${(k.c || GROUPS[k.g].c)}">${k.e}</span><span class="nm"><b>${esc(p.t.name || k.l)}</b><small>${esc(k.l)}${p.m >= 0 ? ' · ' + esc(D.munis[p.m].n) : ''}</small></span><span class="ds"><b>${fmtD(d)}</b></span></button></li>`; }).join('') || '<li class="empty">Abre un punto y pulsa ☆ Guardar. Se guardan en este navegador, sin conexión.</li>';
  $$('[data-fav]').forEach(el => el.onclick = () => { const it = ps[+el.dataset.fav]; enabled.add(it.p.c); applyCats(); flyTo(it.p); openDetail(it.p); });
}

// ---------- mi posición para el 112 ----------
function nearestMuni(lat, lon) { let b = null, bd = 1e18; D.munis.forEach(m => { const d = hav(lat, lon, m.lat, m.lon); if (d < bd) { bd = d; b = m; } }); return b; }
function renderMyPos() {
  const el = $('#mypos'); if (!el) return; const o = origin();
  if (!o.gps && !o.pin) { el.innerHTML = '<p class="sub">Activa el GPS o pon una chincheta para tener tu posición lista para dictarla.</p>'; return; }
  const m = nearestMuni(o.lat, o.lon), c = `${o.lat.toFixed(5)}, ${o.lon.toFixed(5)}`;
  el.innerHTML = `<div class="coord"><span>${o.pin ? 'Tu chincheta' : 'Tu GPS'}${m ? ' · cerca de ' + esc(m.n) : ''}</span><code id="mycc">${c}</code><button type="button" id="mycpy">Copiar</button></div>`;
  $('#mycpy').onclick = () => copy(c, 'mycc');
}

// ---------- horas de sol (cálculo offline) ----------
function sunTimes(lat, lon, date, alt = -0.833) {
  const noon = new Date(date); noon.setHours(12, 0, 0, 0);
  const r = Math.PI / 180, J = noon.getTime() / 864e5 + 2440587.5, n = Math.round(J - 2451545.0 + 0.0008), Js = n - lon / 360;
  const M = (357.5291 + 0.98560028 * Js) % 360, C = 1.9148 * Math.sin(M * r) + 0.02 * Math.sin(2 * M * r) + 0.0003 * Math.sin(3 * M * r);
  const lam = (M + C + 180 + 102.9372) % 360, Jt = 2451545.0 + Js + 0.0053 * Math.sin(M * r) - 0.0069 * Math.sin(2 * lam * r);
  const sd = Math.sin(lam * r) * Math.sin(23.4397 * r), cd = Math.cos(Math.asin(sd));
  const cw = (Math.sin(alt * r) - Math.sin(lat * r) * sd) / (Math.cos(lat * r) * cd);
  if (cw < -1 || cw > 1) return null;
  const w = Math.acos(cw) / r, toD = j => new Date((j - 2440587.5) * 864e5);
  return { rise: toD(Jt - w / 360), set: toD(Jt + w / 360) };
}
function renderSun() {
  const el = $('#sun'); if (!el) return; const o = origin(), s = sunTimes(o.lat, o.lon, new Date());
  if (!s) { el.hidden = true; return; }
  const f = d => d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), mins = Math.round((s.set - s.rise) / 6e4), now = Date.now();
  const hm = ms => { const m = Math.floor(ms / 6e4); return m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`; };
  const tw = sunTimes(o.lat, o.lon, new Date(), -6), left = s.set - now, dusk = tw && now > s.set && now < tw.set;
  const txt = now < s.rise ? `amanece en ${hm(s.rise - now)}` : left > 0 ? `quedan ${hm(left)} de sol` : dusk ? `anochece: luz hasta ${f(tw.set)}` : 'ya es de noche';
  el.hidden = false; el.textContent = `☀ ${f(s.rise)} – ${f(s.set)} · ${txt}${left > 0 && tw ? ` · luz hasta ${f(tw.set)}` : ''}`; el.title = `Luz total: ${Math.floor(mins / 60)} h ${mins % 60} min (cálculo aproximado, sin relieve)`;
}


// ---------- lo más cercano ----------
let nearGroup = null;
function renderNear() {
  const box = $('#nearlist'); if (!box) return;
  const o = origin();
  const cats = Object.keys(CATS).filter(c => enabled.has(c) && (!nearGroup || CATS[c].g === nearGroup));
  const cs = new Set(cats);
  const best = [];
  for (const p of D.pois) {
    if (!cs.has(p.c) || !passes(p)) continue;
    const d = hav(o.lat, o.lon, p.y, p.x);
    if (best.length < 12 || d < best[best.length - 1].d) { best.push({ p, d }); best.sort((a, b) => a.d - b.d); if (best.length > 12) best.pop(); }
  }
  $('#nearfrom').innerHTML = o.pin ? 'desde tu chincheta · <button type="button" class="lnk" id="unpin">quitarla</button>' : o.gps ? (o.stale ? `desde tu última posición GPS, de hace ${ago(me.t)} · pulsa ◎ para actualizar` : 'desde tu posición GPS') : 'desde el centro del mapa · activa el GPS o pon una chincheta 📍';
  if (o.pin) $('#unpin').onclick = clearPin;
  $('#neartitle').textContent = nearGroup ? 'Lo más cercano · ' + GROUPS[nearGroup].l : 'Lo más cercano';
  box.innerHTML = best.map(({ p, d }, i) => {
    const k = CATS[p.c], b = bearing(o.lat, o.lon, p.y, p.x);
    return `<li><button type="button" data-near="${i}"><span class="ic" style="--g:${(k.c || GROUPS[k.g].c)}">${k.e}</span><span class="nm"><b>${esc(p.t.name || k.l)}</b><small>${p.t.name ? esc(k.l) + (p.m >= 0 ? ' · ' : '') : ''}${p.m >= 0 ? esc(D.munis[p.m].n) : ''}</small></span><span class="ds"><b>${fmtD(d)}</b><small><i class="ar" data-b="${Math.round(b)}" style="transform:rotate(${Math.round(b)}deg)">↑</i> ${DIRS[Math.round(b / 45) % 8]} · ${walk(d)}</small></span></button></li>`;
  }).join('') || '<li class="empty">Activa alguna capa para ver puntos cercanos.</li>';
  applyHeading();
  $$('[data-near]').forEach(el => el.onclick = () => { const it = best[+el.dataset.near]; flyTo(it.p); openDetail(it.p); });
}
let nt = 0; map.on('moveend', () => { if (!me && !pin) { clearTimeout(nt); nt = setTimeout(renderNear, 250); } });

// ---------- ficha ----------
function flyTo(p) {
  const z = Math.max(map.getZoom(), 16), mob = innerWidth < 760;
  const pt = map.project([p.y, p.x], z).add([mob ? 0 : 200, mob ? innerHeight * 0.22 : 0]);
  map.flyTo(map.unproject(pt, z), z, { duration: 0.8 });
}
function waterNote(p) {
  const dw = p.t.drinking_water;
  if (dw === 'no') return '<p class="warn bad">Marcada como <b>no potable</b> en OpenStreetMap.</p>';
  if (dw === 'yes' || dw === 'treated') return '<p class="warn">Marcada como potable en OpenStreetMap, sin verificación oficial. Si dudas, hiérvela o trátala.</p>';
  return '<p class="warn">Potabilidad desconocida. Hierve o trata el agua antes de beberla.</p>';
}
function waterNeed(d) {
  const h = d / 4000, f = v => Math.max(0.1, Math.round(v * 10) / 10).toLocaleString('es-ES');
  return `<div class="h2o"><b>💧 Agua para llegar a pie: ≈ ${f(h * 0.5)}–${f(h * 1)} L</b>
    <small>${walk(d)} en línea recta (el camino real es más largo). Media de una persona caminando con menos de 14 kg de carga: ½ L/h con calor moderado, hasta 1 L/h con calor extremo; con fresco, menos. Bebe a sorbos: no más de 1,4 L por hora ni 11 L al día. Referencia diaria: la Generalitat pide guardar 1,5 L de agua por persona y día en el kit; la EFSA fija 2–2,5 L de agua total al día, contando la de la comida.</small>
    ${h > 8 ? `<small><b>Son unas ${Math.ceil(h / 8)} jornadas</b> contando 8 h de marcha al día: no cargues todo, rellena en fuentes del camino.</small>` : ''}
    <small class="src">Fuentes: <a href="https://home.army.mil/wood/application/files/8416/2765/1794/Heat_Illness_Pocket_Guide.pdf" target="_blank" rel="noopener">Ejército de EE. UU., guía de calor</a> · <a href="https://www.efsa.europa.eu/es/press/news/nda100326" target="_blank" rel="noopener">EFSA</a> · Generalitat (ver Mochila)</small></div>`;
}
function openDetail(p) {
  highlight(p);
  const k = CATS[p.c], t = p.t, o = origin(), d = hav(o.lat, o.lon, p.y, p.x), b = bearing(o.lat, o.lon, p.y, p.x);
  const rows = [];
  const ACC = { yes: 'Público', permissive: 'Permitido', private: 'Privado', customers: 'Solo clientes', no: 'No permitido', destination: 'Solo destino', designated: 'Público', public: 'Público', restricted: 'Restringido', military: 'Militar' };
  const YN = v => (v === 'yes' ? 'Sí' : v === 'no' ? 'No' : v);
  if (p.c === 'policia' && t._pol) rows.push(['Cuerpo', t._pol]);
  if (t.operator && p.c !== 'policia') rows.push(['Gestiona', t.operator]);
  if (t.opening_hours) rows.push(['Horario', t.opening_hours]);
  if (t.ele) rows.push(['Altitud', t.ele + ' m']);
  if (t.capacity) rows.push(['Plazas', t.capacity]);
  if (t.beds) rows.push(['Camas', t.beds]);
  if (t.indoor) rows.push(['En interior', YN(t.indoor)]);
  if (t.access) rows.push(['Acceso', ACC[t.access] || t.access]);
  if (t.fee) rows.push(['Pago', t.fee === 'no' ? 'Gratuito' : t.fee === 'yes' ? 'De pago' : t.fee]);
  if (t.seasonal) rows.push(['Estacional', YN(t.seasonal)]);
  if (p.c === 'dea' && t.indoor === undefined && t.description) rows.push(['Nota', t.description]);
  const addr = [t['addr:street'], t['addr:housenumber']].filter(Boolean).join(' ');
  if (addr) rows.push(['Dirección', addr + (t['addr:city'] ? ', ' + t['addr:city'] : '')]);
  const coord = `${p.y.toFixed(5)}, ${p.x.toFixed(5)}`;
  $('#dt').innerHTML = `
    <button class="x" type="button" data-close aria-label="Cerrar">×</button>
    <div class="dh"><span class="ic big" style="--g:${(k.c || GROUPS[k.g].c)}">${k.e}</span><div><h2>${esc(t.name || k.l)}</h2><p class="sub">${t.name ? esc(k.l) : ''}${p.m >= 0 ? (t.name ? ' · ' : '') + esc(D.munis[p.m].n) + ' (' + esc(({ '08': 'Barcelona', '17': 'Girona', '25': 'Lleida', '43': 'Tarragona' })[D.munis[p.m].pr]) + ')' : (t.name ? ' · ' : '') + 'fuera de Cataluña'}</p></div></div>
    <p class="dist"><b>${fmtD(d)}</b> <i class="ar" data-b="${Math.round(b)}" style="transform:rotate(${Math.round(b)}deg)">↑</i> ${DIRS[Math.round(b / 45) % 8]} ${fromTxt(o)} · ≈ ${walk(d)} a pie en línea recta</p>
    ${p.c === 'fuente' || p.c === 'manantial' ? waterNeed(d) + waterNote(p) : ''}
    ${['super', 'tienda', 'mercado'].includes(p.c) ? '<p class="warn">En una emergencia puede estar cerrado o sin existencias. Si hay reparto organizado, lo anuncian el ayuntamiento o el 112. Coger mercancía sin pagar es delito, y el Código Penal lo castiga más si se aprovecha una catástrofe.</p>' : ''}
    ${p.c === 'banco_alim' ? '<p class="warn">Entidad social de reparto de alimentos. Consulta horarios y requisitos; en emergencias suele coordinarse con el ayuntamiento.</p>' : ''}
    ${p.c === 'estacion' ? `<p><button type="button" class="btn ghost" onclick="__openRod(${esc(JSON.stringify(t.name || ''))})">🚆 Ver trenes de Rodalies aquí</button></p>` : ''}
    ${p.c === 'militar' ? '<p class="warn">Zona militar: acceso restringido. Sirve como referencia; no entres sin autorización.</p>' : ''}
    ${p.c === 'refugio' ? '<p class="warn">Refugio guardado: puede estar cerrado fuera de temporada.</p>' : ''}
    ${['pabellon', 'civico', 'ayto'].includes(p.c) ? '<p class="warn">No es un refugio oficial. En una emergencia, los ayuntamientos pueden habilitar equipamientos como este para acoger o informar a la población: confírmalo con el 112 o con el ayuntamiento.</p>' : ''}
    ${p.c === 'encuentro' ? '<p class="warn">Punto de reunión marcado en OpenStreetMap, normalmente para evacuar un edificio o un recinto concreto.</p>' : ''}
    ${p.c === 'cubierta' ? '<p class="warn">Cubierta urbana: protege de la lluvia o el sol un rato, pero no es un refugio para pasar la noche.</p>' : ''}
    ${p.c === 'abrigo' && t._nd ? '<p class="warn">OpenStreetMap no detalla qué es: puede ser una cabaña, un abrigo de piedra o una simple cubierta.</p>' : ''}
    ${rows.length ? '<dl>' + rows.map(([a, v]) => `<dt>${a}</dt><dd>${esc(v)}</dd>`).join('') + '</dl>' : ''}
    ${t.phone ? `<p class="ph">Teléfono: ${t.phone.split(/\s*[;,/]\s*/).filter(Boolean).map(n => `<a href="tel:${esc(n.replace(/[^+\d]/g, ''))}">${esc(n)}</a>`).join(' · ')}</p>` : ''}
    <div class="coord"><span>Coordenadas</span><code id="cc">${coord}</code><button type="button" id="cpy">Copiar</button></div>
    <div class="acts">${mapLinks(p, t.name || k.l)}<button type="button" class="btn ghost" id="favb">${favs.has(p.id) ? '★ Guardado' : '☆ Guardar'}</button></div>
    <p class="src">Fuente: OpenStreetMap (${esc(p.id)}), datos a ${D.date}. Comprueba la información sobre el terreno.</p>`;
  applyHeading();
  $('#cpy').onclick = () => copy(coord, 'cc');
  $('#favb').onclick = () => { toggleFav(p); $('#favb').textContent = favs.has(p.id) ? '★ Guardado' : '☆ Guardar'; };
  openSheet('dt');
}
const UA = navigator.userAgent, isApple = /iPhone|iPad|iPod|Macintosh/.test(UA), isAndroid = /Android/.test(UA);
function mapLinks(p, name) {
  const q = encodeURIComponent(name), ll = `${p.y},${p.x}`, L1 = [];
  if (isAndroid) L1.push(`<a class="btn" href="geo:${ll}?q=${ll}(${q})">Abrir en app de mapas</a>`);
  if (isApple) L1.push(`<a class="btn" target="_blank" rel="noopener" href="https://maps.apple.com/?daddr=${ll}&dirflg=w&q=${q}">Ir a pie con Apple Mapas</a>`);
  L1.push(`<a class="btn${L1.length ? ' ghost' : ''}" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${ll}&travelmode=walking">Ir a pie con Google Maps</a>`);
  return L1.join('');
}
function copy(s, id) {
  const ok = () => toast('Coordenadas copiadas');
  try { navigator.clipboard.writeText(s).then(ok, () => sel()); } catch (e) { sel(); }
  function sel() { const r = document.createRange(); r.selectNodeContents($('#' + (id || 'cc'))); const g = getSelection(); g.removeAllRanges(); g.addRange(r); toast('Selecciona y copia las coordenadas'); }
}

// ---------- paneles ----------
function openSheet(id) {
  if (id !== 'dt' && $('#sheets').dataset.open === 'dt') clearSel();
  if (id === 'lluvia') renderRain();
  if (id === 'favs') renderFavs(); if (id === 'tel') renderMyPos(); if (id === 'dl') { renderZones(); renderReady(); } if (id === 'inst') renderInstall(); if (id === 'copia') renderExport();
  $$('.sheet').forEach(s => (s.hidden = s.id !== id));
  $('#sheets').hidden = false; $('#sheets').dataset.open = id;
  $('#sheets').classList.toggle('full', ['guia', 'kit', 'tips', 'prep', 'dl', 'inst', 'copia'].includes(id));
}
function closeSheet() { if ($('#sheets').dataset.open === 'dt') clearSel(); $('#sheets').hidden = true; }
$('#sheets').addEventListener('click', e => { if (e.target.closest('[data-close]')) closeSheet(); });

// capas
function buildLayersPanel() {
  $('#cats').innerHTML = Object.keys(GROUPS).map(g => `<fieldset><legend class="gh"><label><input type="checkbox" value="${g}"> <span class="dot" style="--g:${GROUPS[g].c}"></span>${GROUPS[g].l}</label></legend>` +
    Object.keys(CATS).filter(c => CATS[c].g === g).map(c => `<label class="cat"><input type="checkbox" value="${c}"> <span>${CATS[c].e} ${CATS[c].l}</span><em>${fmtN(counts[c] || 0)}</em></label>`).join('') + '</fieldset>').join('');
  const rf = document.createElement('fieldset'); rf.className = 'risk';
  rf.innerHTML = '<legend class="gh"><label><span class="dot" style="--g:#e0182d"></span>🌧️ Lluvias fuertes</label></legend>' + Object.keys(RISK).map(k => { const n = RISK[k].n(); return `<label class="cat"><input type="checkbox" value="${k}"> <span>${RISK[k].l}<small class="rs">${RISK[k].s}</small></span>${n != null ? `<em>${fmtN(n)}</em>` : ''}</label>`; }).join('');
  $('#cats').prepend(rf);
  $$('.risk input').forEach(i => i.onchange = () => { i.checked ? riskOn.add(i.value) : riskOn.delete(i.value); applyRisk(); });
  const pf = document.createElement('label'); pf.className = 'cat pot'; pf.innerHTML = `<input type="checkbox" id="potf"> <span>Solo agua marcada como potable</span><em>${fmtN(D.pois.filter(p => (p.c === 'fuente' || p.c === 'manantial') && isPot(p)).length)}</em>`;
  $('#cats fieldset:not(.risk)').appendChild(pf); $('#potf').checked = onlyPotable;
  $('#potf').onchange = e => { onlyPotable = e.target.checked; store.set('potable', onlyPotable); ['fuente', 'manantial'].forEach(c => { if (layers[c]) { map.removeLayer(layers[c]); delete layers[c]; } }); applyCats(); };
  $$('.cat input:not(#potf)').forEach(i => !i.closest('.risk') && (i.onchange = () => { i.checked ? enabled.add(i.value) : enabled.delete(i.value); applyCats(); }));
  $$('.gh input').forEach(i => i.value in GROUPS && (i.onchange = () => { Object.keys(CATS).filter(c => CATS[c].g === i.value && (!i.checked || !CATS[c].minor)).forEach(c => (i.checked ? enabled.add(c) : enabled.delete(c))); applyCats(); }));
}
$$('[data-base]').forEach(b => b.onclick = () => setBase(b.dataset.base));

// menú inicial
function showNeed(g) {
  nearGroup = g;
  enabled.clear(); MAIN().filter(c => !g || CATS[c].g === g).forEach(c => enabled.add(c));
  // centrar primero en tu posición (chincheta o GPS): así no se dibuja toda Cataluña con miles de puntos
  const z = g ? 14 : 15, here = pin ? [pin.lat, pin.lon] : me ? [me.lat, me.lon] : null;
  if (here && map.getZoom() < z - 1) map.setView(here, z, { animate: false });
  else if (here && !map.getBounds().pad(-0.1).contains(here)) map.setView(here, map.getZoom(), { animate: false });
  applyCats(); hideMenu();
  if (g) { openSheet('near'); startGPS(true); }
  else if (watchId != null && !pin) follow = !me || Date.now() - me.t > STALE;
  if (!g && !here && watchId == null) toast('Consejo: activa el GPS o pon la chincheta 📍 y el mapa se abrirá directamente en tu zona');
}
function hideMenu() { $('#menu').hidden = true; $('#menuback').hidden = false; setTimeout(() => map.invalidateSize(), 50); }
function showMenu() { $('#menu').hidden = false; closeSheet(); }
$$('[data-need]').forEach(b => b.onclick = () => showNeed(b.dataset.need || null));
$$('[data-info]').forEach(b => b.onclick = () => { hideMenu(); openSheet(b.dataset.info); });
$('#home').onclick = showMenu;
function goCat(c) { nearGroup = CATS[c].g; enabled.clear(); enabled.add(c); applyCats(); hideMenu(); openSheet('near'); startGPS(true); }
$$('[data-go]').forEach(b => b.onclick = () => goCat(b.dataset.go));
$('#menuback').onclick = hideMenu;
addEventListener('keydown', e => { if (e.key !== 'Escape') return; if (!res.hidden) { res.hidden = true; return; } if (!$('#pop').hidden) { $('#pop').hidden = true; return; } if (!$('#sheets').hidden) { closeSheet(); return; } if (pinMode) { pinMode = false; document.body.classList.remove('pinning'); toast('Chincheta cancelada'); } });
$('#lay').onclick = () => openSheet('layers');
$('#near-btn').onclick = () => { openSheet('near'); renderNear(); };
$('#gps').onclick = () => startGPS(true);
$('#pinb').onclick = () => { if (pin) { clearPin(); return; } pinMode = !pinMode; document.body.classList.toggle('pinning', pinMode); if (pinMode) closeSheet(); toast(pinMode ? 'Toca el mapa donde estás para poner la chincheta' : 'Chincheta cancelada'); };
$('#zin').onclick = () => map.zoomIn(); $('#zout').onclick = () => map.zoomOut();
$('#menugps').onclick = () => startGPS(false);

// mapa de población (habitantes.html incrustado)
$('#popbtn').onclick = () => {
  const f = $('#popf');
  if (!f.srcdoc) { const b = atob($('#habb64').textContent.trim()), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); f.srcdoc = new TextDecoder().decode(u); }
  $('#rodf').hidden = true; f.hidden = false; $('#pop').hidden = false;
};
const RODURL = 'https://elmonoamelio.github.io/catalunya-survival/rodalies.html';
function openRod(st) {
  const f = $('#rodf'), u = (PWA ? 'rodalies.html' : RODURL) + (st ? '?st=' + encodeURIComponent(st) : '');
  $('#popf').hidden = true; f.hidden = false; $('#pop').hidden = false;
  f.setAttribute('allow', 'geolocation');   // para que Rodalies pueda mostrar la estación más cercana
  if (st || !f.src) requestAnimationFrame(() => (f.src = u));
}
$('#rodbtn').onclick = () => openRod();
window.__openRod = openRod;
$('#popx').onclick = () => { $('#pop').hidden = true; };

// búsqueda
const idx = [];
D.munis.forEach((m, i) => idx.push({ k: 'm', n: m.n, s: norm(m.n), i }));
D.pois.forEach((p, i) => { if (p.t.name) idx.push({ k: 'p', n: p.t.name, s: norm(p.t.name), i }); });
const q = $('#q'), res = $('#res');
q.addEventListener('input', () => {
  const t = norm(q.value.trim()); if (t.length < 2) { res.hidden = true; return; }
  const a = [], b = [];
  for (const it of idx) { if (it.s.startsWith(t)) a.push(it); else if (it.s.includes(t)) b.push(it); if (a.length > 40) break; }
  const sort = (x, y) => (x.k === y.k ? x.n.length - y.n.length : x.k === 'm' ? -1 : 1);
  const r = a.sort(sort).concat(b.sort(sort)).slice(0, 10);
  res.innerHTML = r.map((it, i) => {
    if (it.k === 'm') { const m = D.munis[it.i]; return `<li><button type="button" data-r="${i}"><span class="ic" style="--g:#59636e">📍</span><span class="nm"><b>${esc(m.n)}</b><small>Municipio · ${fmtN(m.p)} hab.</small></span></button></li>`; }
    const p = D.pois[it.i], k = CATS[p.c];
    return `<li><button type="button" data-r="${i}"><span class="ic" style="--g:${(k.c || GROUPS[k.g].c)}">${k.e}</span><span class="nm"><b>${esc(p.t.name)}</b><small>${esc(k.l)}${p.m >= 0 ? ' · ' + esc(D.munis[p.m].n) : ''}</small></span></button></li>`;
  }).join('') || '<li class="empty">Sin resultados</li>';
  res.hidden = false;
  $$('[data-r]').forEach(el => el.onclick = () => {
    const it = r[+el.dataset.r]; res.hidden = true; q.value = it.n; q.blur(); hideMenu();
    if (it.k === 'm') { const m = D.munis[it.i]; map.flyTo([m.lat, m.lon], 13, { duration: 0.8 }); setTimeout(() => { openSheet('near'); renderNear(); }, 900); }
    else { const p = D.pois[it.i]; enabled.add(p.c); applyCats(); flyTo(p); openDetail(p); }
  });
});
q.addEventListener('focus', () => { if (q.value.trim().length >= 2) res.hidden = false; });
document.addEventListener('click', e => { if (!e.target.closest('#search')) res.hidden = true; });

// aviso
let tt = 0;
function toast(s) { const el = $('#toast'); el.textContent = s; el.hidden = false; clearTimeout(tt); tt = setTimeout(() => (el.hidden = true), 3200); }

// ---------- inicio ----------
$('#menucount').textContent = fmtN(D.pois.length);
$$('[data-cnt]').forEach(el => { const g = el.dataset.cnt; el.textContent = fmtN(MAIN().filter(c => CATS[c].g === g).reduce((s, c) => s + (counts[c] || 0), 0)); });
$('#datadate').textContent = D.date;
buildLayersPanel(); setBase(baseKey); applyCats(); applyRisk(); checkOffline();
$$('[data-rain]').forEach(b => b.onclick = showRain);
if (me) drawMe();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', styleMuni);
setInterval(renderSun, 60000);

// ---------- brújula ----------
function applyHeading() { const ns = $('#north svg'); if (ns) ns.style.transform = compassOn && heading != null ? `rotate(${-heading}deg)` : '';
  $$('.ar[data-b]').forEach(el => { const b = +el.dataset.b; el.style.transform = `rotate(${heading == null ? b : b - heading}deg)`; });
  $('#compb').setAttribute('aria-pressed', compassOn);
  const me1 = document.querySelector('.me i'); if (me1) { me1.style.display = heading == null ? 'none' : 'block'; me1.style.transform = `rotate(${heading || 0}deg)`; }
}
let hq = 0;
function onOri(e) {
  let h = null;
  if (typeof e.webkitCompassHeading === 'number') h = e.webkitCompassHeading;
  else if (e.absolute && e.alpha != null) h = 360 - e.alpha;
  if (h == null) return;
  const so = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  heading = (h + so + 360) % 360;
  if (!hq) hq = requestAnimationFrame(() => { hq = 0; applyHeading(); });
}
async function toggleCompass() {
  if (compassOn) { compassOn = false; heading = null; removeEventListener('deviceorientation', onOri); removeEventListener('deviceorientationabsolute', onOri); applyHeading(); toast('Brújula desactivada'); return; }
  try {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const r = await DeviceOrientationEvent.requestPermission(); if (r !== 'granted') { toast('Sin permiso para la brújula'); return; }
    }
  } catch (err) { toast('La brújula necesita la app instalada (https)'); return; }
  compassOn = true;
  addEventListener('deviceorientationabsolute', onOri); addEventListener('deviceorientation', onOri);
  toast('Brújula activa: las flechas ↑ apuntan hacia el punto, con el móvil plano');
  setTimeout(() => { if (compassOn && heading == null) toast('Este dispositivo no da orientación: las flechas indican el rumbo respecto al norte'); }, 4000);
  applyHeading();
}
$('#compb').onclick = toggleCompass;

// ---------- exportar puntos (máx. 100 por archivo, límite de Catalunya Offline) ----------
const XMAX = 100;
const XSETS = [
  { id: 'esencial', t: 'Lo esencial', s: '30 agua · 20 refugio · 20 salud · 15 comida · 10 seguridad · 5 salir', mix: { agua: 30, refugio: 20, salud: 20, comida: 15, seguridad: 10, salir: 5 } },
  { id: 'agua', t: 'Agua', s: 'Las 100 fuentes y manantiales más cercanos', g: 'agua' },
  { id: 'comida', t: 'Comida', s: 'Los 100 puntos de comida más cercanos', g: 'comida' },
  { id: 'refugio', t: 'Refugio', s: 'Los 100 refugios y puntos de acogida más cercanos', g: 'refugio' },
  { id: 'salud', t: 'Salud', s: 'Hospitales, CAP, farmacias y DEA más cercanos', g: 'salud' },
  { id: 'seguridad', t: 'Seguridad', s: 'Policía, bomberos y ejército más cercanos', g: 'seguridad' },
  { id: 'salir', t: 'Salir', s: 'Estaciones, puertos, collados y fronteras más cercanos', g: 'salir' }
];
function nearestOf(groups, n, o) {
  const cs = new Set(Object.keys(CATS).filter(c => groups.includes(CATS[c].g) && !CATS[c].minor)), best = [];
  for (const p of D.pois) { if (!cs.has(p.c)) continue; const d = hav(o.lat, o.lon, p.y, p.x); if (best.length < n || d < best[best.length - 1].d) { best.push({ p, d }); best.sort((a, b) => a.d - b.d); if (best.length > n) best.pop(); } }
  return best;
}
const xesc = v => String(v).replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]);
function pname(p) { const k = CATS[p.c]; return (p.t.name ? p.t.name + ' · ' : '') + k.l; }
function pdesc(p, d) { const m = p.m >= 0 ? D.munis[p.m].n : ''; return [CATS[p.c].l, m, fmtD(d) + ' desde ' + (origin().pin ? 'tu chincheta' : 'tu posición'), p.t.opening_hours ? 'Horario: ' + p.t.opening_hours : ''].filter(Boolean).join(' · '); }
function buildExport(list, fmt, title) {
  if (fmt === 'gpx') return `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="MonkiSoft" xmlns="http://www.topografix.com/GPX/1/1"><metadata><name>${xesc(title)}</name><author><name>MonkiSoft</name></author></metadata>\n` +
    list.map(({ p, d }) => `<wpt lat="${p.y}" lon="${p.x}"><name>${xesc(pname(p))}</name><desc>${xesc(pdesc(p, d))}</desc></wpt>`).join('\n') + '\n</gpx>';
  return `<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>${xesc(title)}</name><atom:author xmlns:atom="http://www.w3.org/2005/Atom"><atom:name>MonkiSoft</atom:name></atom:author>\n` +
    list.map(({ p, d }) => `<Placemark><name>${xesc(pname(p))}</name><description>${xesc(pdesc(p, d))}</description><Point><coordinates>${p.x},${p.y},0</coordinates></Point></Placemark>`).join('\n') + '\n</Document></kml>';
}
async function exportSet(set) {
  const o = origin(), fmt = $('#xfmt').value;
  let list = [];
  if (set.mix) Object.entries(set.mix).forEach(([g, n]) => { list = list.concat(nearestOf([g], n, o)); }); else list = nearestOf([set.g], XMAX, o);
  list = list.slice(0, XMAX);
  if (!list.length) { toast('No hay puntos de esta categoría'); return; }
  const fname = `Survival-${set.t.replace(/\s+/g, '')}-${list.length}.${fmt}`, mime = fmt === 'gpx' ? 'application/gpx+xml' : 'application/vnd.google-earth.kml+xml';
  const file = new File([buildExport(list, fmt, 'Catalunya Survival · ' + set.t)], fname, { type: mime });
  try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: fname }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = fname; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast(`Archivo ${fname} descargado: ábrelo desde Archivos`);
}
function renderExport() {
  const o = origin(); $('#xorg').textContent = o.pin ? 'tu chincheta' : o.gps ? 'tu posición' : 'el centro del mapa';
  $('#xlist').innerHTML = XSETS.map((x, i) => `<li><button type="button" class="xbtn" data-x="${i}"><span><b>${x.t}</b><small>${x.s}</small></span><span class="go">Enviar</span></button></li>`).join('');
  $$('#xlist [data-x]').forEach(b => b.onclick = () => exportSet(XSETS[+b.dataset.x]));
}

// ---------- app instalable y mapa sin red ----------
const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
let swReg = null, deferredInstall = null;
if (PWA && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(r => {
    swReg = r; renderReady();
    r.addEventListener('updatefound', () => { const w = r.installing; w && w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) toast('Nueva versión lista: se aplicará al reabrir la app'); }); });
  }).catch(() => renderReady());
  navigator.serviceWorker.addEventListener('controllerchange', renderReady);
}
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; renderInstall(); });
function renderInstall() {
  const ios = /iPhone|iPad|iPod/.test(UA);
  $('#instst').textContent = standalone ? 'Instalada en este móvil ✓' : PWA ? 'Añádela a la pantalla de inicio' : 'Abre la versión web para instalarla';
  const b = $('#instgo'); b.hidden = !deferredInstall; b.onclick = async () => { deferredInstall.prompt(); await deferredInstall.userChoice.catch(() => {}); deferredInstall = null; renderInstall(); };
  $('#instios').hidden = !ios; $('#instand').hidden = ios;
  $('#instfile').hidden = PWA;
}
const TMAX = 6000, KB_Z = z => (z <= 11 ? 60 : z === 12 ? 78 : z === 13 ? 50 : z <= 15 ? 38 : 15), zoneMB = ts => ts.reduce((a, [z]) => a + KB_Z(z), 0) / 1024, fmtMB = m => m < 1 ? '< 1 MB' : '≈ ' + Math.round(m) + ' MB';
const lon2x = (lon, z) => Math.floor((lon + 180) / 360 * 2 ** z);
const lat2y = (lat, z) => { const r = lat * Math.PI / 180; return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z); };
function tilesFor(b, z0, z1) { const out = []; for (let z = z0; z <= z1; z++) { const x0 = lon2x(b[1], z), x1 = lon2x(b[3], z), y0 = lat2y(b[2], z), y1 = lat2y(b[0], z); for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) out.push([z, x, y]); } return out; }
function around(lat, lon, km) { const dLat = km / 111.32, dLon = km / (111.32 * Math.cos(lat * Math.PI / 180)); return [lat - dLat, lon - dLon, lat + dLat, lon + dLon]; }
function zones() {
  const o = origin(), bb = map.getBounds(), z = map.getZoom();
  const vz0 = Math.min(16, Math.max(7, Math.round(z))), vz1 = Math.min(16, vz0 + 3);
  const here = o.gps || o.pin ? (o.pin ? 'tu chincheta' : 'tu posición') : 'el centro del mapa';
  return [
    { id: 'cat', t: 'Toda Cataluña, vista general', s: 'Zoom 7 a 10: para orientarte entre comarcas', b: [40.5, 0.15, 42.9, 3.35], z: [7, 10] },
    { id: 'near3', t: '3 km alrededor de ' + here, s: 'Zoom 12 a 16: calles, senderos y fuentes', b: around(o.lat, o.lon, 3), z: [12, 16] },
    { id: 'near10', t: '10 km alrededor de ' + here, s: 'Zoom 12 a 16: senderos y fuentes de toda la zona, un día de marcha', b: around(o.lat, o.lon, 10), z: [12, 16] },
    { id: 'near15', t: '15 km alrededor de ' + here, s: 'Zoom 11 a 14: caminos y pueblos', b: around(o.lat, o.lon, 15), z: [11, 14] },
    { id: 'view', t: 'Lo que ves ahora en pantalla', s: `Zoom ${vz0} a ${vz1}`, b: [bb.getSouth(), bb.getWest(), bb.getNorth(), bb.getEast()], z: [vz0, vz1] }
  ].map(zn => { zn.tiles = tilesFor(zn.b, zn.z[0], zn.z[1]); return zn; });
}
let dlJob = null;
async function renderReady() {
  const el = $('#offst'); if (!el) return;
  let n = 0; try { if (window.caches) n = (await (await caches.open('tiles-v1')).keys()).length; } catch (e) {}
  let used = ''; try { const es = await navigator.storage.estimate(); used = ` · ${(es.usage / 1048576).toFixed(0)} MB usados de ${(es.quota / 1073741824).toFixed(1)} GB`; } catch (e) {}
  const ctl = PWA && navigator.serviceWorker && navigator.serviceWorker.controller;
  el.textContent = !PWA ? 'Archivo local: los puntos funcionan sin red, el mapa base no se puede guardar.' : (ctl ? 'App guardada para usar sin red ✓' : 'Guardando la app…') + ` · ${fmtN(n)} teselas de mapa guardadas${used}`;
  const p1 = $('#pstep1'), p2 = $('#pstep2'), ps = $('#prepst');
  if (p1) p1.textContent = standalone ? 'Hecho ✓ · instalada en este móvil' : PWA ? 'Para abrirla sin red, con GPS y brújula' : 'Abre la versión web en el móvil para instalarla';
  if (p2) p2.textContent = n ? `${fmtN(n)} teselas guardadas · toca para añadir zonas` : 'Toda Cataluña y los alrededores de donde estés';
  if (ps) ps.textContent = standalone && n ? `Instalada ✓ · ${fmtN(n)} teselas guardadas` : 'Instalar, mapa sin red y mochila';
  const ch = $('#offchip'); if (ch) ch.textContent = !PWA ? 'Sin red: solo puntos' : ctl ? `Sin red: listo · ${fmtN(n)} teselas` : 'Preparando modo sin red…';
}
async function renderZones() {
  const box = $('#zones'); if (!box) return;
  if (!PWA || !window.caches) { box.innerHTML = '<li class="empty">Guardar mapa sin red solo funciona en la versión instalable (web https). Este archivo local guarda los puntos, no el mapa.</li>'; return; }
  const zs = zones(), lay = baseKey === 'orto' ? 'orto-hibrida' : 'topografic', have = new Set();
  try { (await (await caches.open('tiles-v1')).keys()).forEach(r => { const m = r.url.match(/wmts\/([a-z-]+)\/MON3857NW\/(\d+\/\d+\/\d+)\.png/); if (m && m[1] === lay) have.add(m[2]); }); } catch (e) {}
  const lbl = lay === 'topografic' ? 'mapa topográfico' : 'satélite';
  box.innerHTML = `<li class="empty">Se guarda el <b>${lbl}</b>, el mapa que tienes puesto ahora. Para guardar el otro, cámbialo en Capas.</li>` + zs.map((zn, i) => {
    const n = zn.tiles.length, big = n > TMAX, got = zn.tiles.filter(([z, x, y]) => have.has(z + '/' + x + '/' + y)).length, pc = n ? Math.floor(got / n * 100) : 0, done = n && got / n >= 0.98;
    const st = done ? '<em class="ok">✓ Guardada</em>' : pc ? `<em>${pc} % guardado</em>` : '';
    const bt = big ? 'Demasiado grande' : done ? 'Repasar' : pc ? 'Completar' : 'Guardar';
    return `<li class="zone${done ? ' saved' : ''}"><div><b>${esc(zn.t)}</b><small>${esc(zn.s)} · ${fmtMB(zoneMB(zn.tiles))}${st ? ' · ' + st : ''}</small></div><button type="button" class="btn ${big || done ? 'ghost' : ''}" data-zone="${i}" ${big || dlJob ? 'disabled' : ''}>${bt}</button></li>`;
  }).join('');
  $$('[data-zone]').forEach(b => b.onclick = () => downloadZone(zs[+b.dataset.zone]));
}
async function downloadZone(zn) {
  if (dlJob) return;
  if (!navigator.onLine) { toast('Sin conexión: conecta el móvil para guardar zonas'); return; }
  if (!zn.tiles.length) { toast('No hay nada que guardar con este zoom'); return; }
  const c = await caches.open('tiles-v1'), list = zn.tiles.slice(0, TMAX);
  dlJob = { stop: false, done: 0, err: 0, skip: 0, n: list.length };
  $('#dlbar').hidden = false; $('#dlname').textContent = zn.t; renderZones();
  let i = 0;
  const step = () => { $('#dlprog').value = dlJob.done / dlJob.n; $('#dltxt').textContent = `${fmtN(dlJob.done)} de ${fmtN(dlJob.n)}${dlJob.err ? ' · ' + dlJob.err + ' fallos' : ''}`; };
  async function worker() {
    while (!dlJob.stop && i < list.length) {
      const [z, x, y] = list[i++];
      for (const lay of baseKey === 'orto' ? ['orto-hibrida'] : ['topografic']) {
        const u = `${TB}/servei/catalunya/mapa-base/wmts/${lay}/MON3857NW/${z}/${x}/${y}.png`;
        try { if (await c.match(u)) { dlJob.skip++; } else { const r = await fetch(u, { mode: 'cors' }); if (r.ok) await c.put(u, r); else dlJob.err++; } } catch (e) { dlJob.err++; }
      }
      if (z <= 15) for (const k of ['r_t10', 'r_t100']) if (riskOn.has(k)) { const u = floodUrl(RISK[k].lay, z, x, y); try { if (!(await c.match(u))) { const r = await fetch(u, { mode: 'cors' }); if (r.ok) await c.put(u, r); } } catch (e) {} }
      dlJob.done++; if (dlJob.done % 8 === 0) step();
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  step(); const j = dlJob; dlJob = null;
  toast(j.stop ? 'Descarga detenida' : `Zona guardada: ${fmtN(j.done - j.err)} teselas${j.err ? ', ' + j.err + ' fallos (¿sin red?)' : ''}`);
  $('#dlbar').hidden = true; renderZones(); renderReady();
}
$('#dlstop').onclick = () => { if (dlJob) dlJob.stop = true; };
let clearArm = 0;
$('#dlclear').onclick = async () => {
  if (!clearArm) { clearArm = 1; $('#dlclear').textContent = 'Pulsa otra vez para borrar'; setTimeout(() => { clearArm = 0; $('#dlclear').textContent = 'Borrar mapas guardados'; }, 4000); return; }
  clearArm = 0; try { await caches.delete('tiles-v1'); } catch (e) {} $('#dlclear').textContent = 'Borrar mapas guardados'; toast('Mapas guardados borrados'); renderReady(); renderZones();
};
$('#offbtn').onclick = () => openSheet('dl');
$('#north').onclick = () => toast(compassOn && heading != null ? 'La flecha roja marca el norte real' : 'Norte siempre arriba. Con la brújula 🧭, la flecha roja marca el norte real');
renderInstall(); renderReady();
drawPin(); renderSun(); renderFavs();
window.__cs = { sunTimes, setPin, clearPin, origin, closeSheet, showMenu, hideMenu, openSheet, map, layers, enabled, D, showNeed, openDetail };
window.__ready = true;
})();
