import * as THREE from 'three';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

// Rodalies: líneas, estaciones y trenes según horario oficial (GTFS) + retrasos en directo (GTFS-RT vía puente)
const dur = sec => sec < 90 ? Math.round(sec) + ' s' : sec < 5400 ? Math.round(sec / 60) + ' min' : sec < 129600 ? Math.round(sec / 3600) + ' h' : Math.round(sec / 86400) + (window.__L === 'en' ? ' days' : window.__L === 'ca' ? ' dies' : ' días');
const ago = s => window.__L === 'en' ? s + ' ago' : (window.__L === 'ca' ? 'fa ' : 'hace ') + s;
export function initRail(A) {
  const R = window.__ROD__;
  const { scene, camera, goal, cur, invalidate, K, CX, CY, mcs, q, list, clamp, norm, munis } = A;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]);
  const W = (x, y) => [(x - CX) * K, (y - CY) * K];
  const Z = 0.06;

  // ---------- datos ----------
  const SEG = R.segs.map(f => {
    const p = [], c = [0];
    for (let i = 0; i < f.length; i += 2) { const w = W(f[i], f[i + 1]); if (p.length) c.push(c[c.length - 1] + Math.hypot(w[0] - p[p.length - 1][0], w[1] - p[p.length - 1][1])); p.push(w); }
    return { p, c, L: c[c.length - 1] };
  });
  const ST = R.stops.map(([n, x, y, id]) => ({ n, id, w: W(x, y), fams: new Set() }));
  const ROUTES = R.routes.map(([s, l, c]) => ({ s, l, c }));
  // autobuses de sustitución por obras (no son trenes: no van al mapa, solo a las salidas de cada estación)
  const BUSST = new Map();
  (R.bus || []).forEach(([days, name, stops, times]) => { const b = { days: new Set(days), name, stops, times }; stops.forEach((si, i) => { if (i < stops.length - 1) { const a = BUSST.get(si) || []; a.push([b, i]); BUSST.set(si, a); } }); });
  function busesAt(s, from, to) {
    const S = nowState(), k = R.days.indexOf(S.ymd), out = [];
    for (const [b, i] of BUSST.get(s) || []) { if (!b.days.has(k)) continue; const t = b.times[i]; if (t < from || t > to) continue; const L = b.stops[b.stops.length - 1]; out.push({ sm: t, est: t, dl: 0, fam: b.name, dest: ST[L].n, destId: ST[L].id, plat: '', cancel: false, obs: '', live: false, num: '', tid: '', tr: null, bus: true, src: 'bus', bstops: b.stops.slice(i) }); }
    return out;
  }
  const natural = (a, b) => { const pa = a.match(/^R([A-Z]*)(\d*)(.*)$/), pb = b.match(/^R([A-Z]*)(\d*)(.*)$/); return (pa[1] || '').localeCompare(pb[1] || '') || (+pa[2] || 0) - (+pb[2] || 0) || pa[3].localeCompare(pb[3]); };
  const FAM = [...new Set(ROUTES.map(r => r.s))].sort(natural);
  const FC = {}; ROUTES.forEach(r => { if (!FC[r.s]) FC[r.s] = r.c; });
  const PAT = R.pats.map(([stops, t, segs]) => ({ stops, t, segs }));
  const TR = R.trips.map(([day, pat, rt, t0, num], i) => ({ day, pat: PAT[pat], fam: ROUTES[rt].s, c: ROUTES[rt].c, t0, num, tid: R.tids[i] }));
  const famSegs = {}; FAM.forEach(f => (famSegs[f] = new Set()));
  TR.forEach(t => { t.pat.segs.forEach(s => famSegs[t.fam].add(s)); t.pat.stops.forEach(s => ST[s].fams.add(t.fam)); });
  const byDay = R.days.map((_, k) => TR.filter(t => t.day === k));
  const TID = new Map(TR.map(t => [t.tid, t]));
  // proyección (misma que el mapa de población: acimutal equivalente de Datawrapper)
  const PK = [124.87404143965449, 479.9901289885639, 124.62688710863031, 249.99562739146893, 486.739003764725, 248.0364802782304, 2037.1344308355726], RAD = Math.PI / 180, L0 = 3.922 * RAD, P0 = -39.705 * RAD;
  function LL(lon, lat) {
    const lam = lon * RAD + L0, phi = lat * RAD, cp = Math.cos(P0), sp = Math.sin(P0), cph = Math.cos(phi), x = Math.cos(lam) * cph, y = Math.sin(lam) * cph, z = Math.sin(phi);
    const l2 = Math.atan2(y, x * cp - z * sp), p2 = Math.asin(z * cp + x * sp), c = Math.sqrt(2 / (1 + Math.cos(l2) * Math.cos(p2)));
    const rx = c * Math.cos(p2) * Math.sin(l2), ry = c * Math.sin(p2), [kx, tx, ky, ty, x0, y1, S] = PK;
    return W((tx + kx * rx - x0) * S, (y1 - (ty - ky * ry)) * S);
  }
  const SID = new Map(ST.map((s, i) => [s.id, i]));
  // geometría completa de un patrón (para colocar trenes reales sobre la vía)
  function pg(pat) {
    if (pat.g) return pat.g;
    const pts = [], cum = [], stopD = [0]; let acc = 0;
    pat.segs.forEach((si, k) => { const sg = SEG[si]; sg.p.forEach((p, j) => { if (k && !j) return; pts.push(p); cum.push(acc + sg.c[j]); }); acc += sg.L; stopD.push(acc); });
    return (pat.g = { pts, cum, stopD });
  }
  function projOn(g, w, lo, hi) {
    let best = 1e18, bd = 0;
    for (let i = 0; i + 1 < g.pts.length; i++) {
      if (g.cum[i + 1] < lo || g.cum[i] > hi) continue;
      const a = g.pts[i], b = g.pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy || 1e-9;
      const t = Math.max(0, Math.min(1, ((w[0] - a[0]) * dx + (w[1] - a[1]) * dy) / L2)), ex = a[0] + dx * t - w[0], ey = a[1] + dy * t - w[1], e = ex * ex + ey * ey;
      if (e < best) { best = e; bd = g.cum[i] + t * (g.cum[i + 1] - g.cum[i]); }
    }
    return { d: bd, err: Math.sqrt(best) };
  }
  function at(g, d) {
    let lo = 0, hi = g.cum.length - 1; if (d <= 0) return g.pts[0]; if (d >= g.cum[hi]) return g.pts[hi];
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (g.cum[m] <= d) lo = m; else hi = m; }
    const k = (d - g.cum[lo]) / ((g.cum[hi] - g.cum[lo]) || 1), a = g.pts[lo], b = g.pts[hi];
    return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
  }
  const ymd2 = s => `${s.slice(6, 8)}/${s.slice(4, 6)}`;

  // ---------- reloj (hora de Madrid) ----------
  const FMT = new Intl.DateTimeFormat('es-ES', { timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  function madrid(d) { const o = {}; FMT.formatToParts(d).forEach(p => (o[p.type] = p.value)); return { ymd: o.year + o.month + o.day, min: +o.hour * 60 + +o.minute + +o.second / 60 }; }
  let speed = 0, simMin = null, simBase = 0, simAt = 0;
  function nowState() {
    const m = madrid(new Date());
    if (speed === 0 && simMin == null) return { ...m, live: true };
    const t = simMin == null ? m.min : simBase + (speed ? (performance.now() - simAt) / 60000 * speed : 0);
    return { ymd: m.ymd, min: t, live: false };
  }
  const hhmm = m => { m = ((Math.floor(m + 1e-6) % 1440) + 1440) % 1440;   /* hacia abajo: mejor llegar antes que perder el tren */ return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };

  // ---------- tiempo real ----------
  const DEF_RT = 'https://rodalies.erathegameoftime.com';
  const RT = { url: '', delays: new Map(), tu: new Map(), vp: new Map(), alerts: [], ok: 0, okVP: 0, err: '', feedTs: 0 };
  try { const u = new URLSearchParams(location.search).get('rt'); if (u) localStorage.setItem('rod_rt', u); let sv = localStorage.getItem('rod_rt'); if (sv && /jhmuyo\.workers\.dev/.test(sv)) { sv = DEF_RT; localStorage.setItem('rod_rt', sv); } RT.url = sv || DEF_RT; } catch (e) { RT.url = DEF_RT; }
  const get = (base, p) => fetch(base + p, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  const isRod = id => /^51/.test(id || '');
  async function pollRT() {
    if (!RT.url) { renderRT(); return; }
    const base = RT.url.replace(/\/+$/, '');
    // avisos de viajeros: si el puente no tiene base de datos, se vuelve a probar cada 15 min (no cada 20 s)
    if (!RT.repFail || Date.now() - RT.repFail > 15 * 60000) get(base, '/reports.json').then(r => { if (r && Array.isArray(r.items)) { RT.rep = r.items; RT.repSkew = (r.now || Date.now()) - Date.now(); if (r.tipos) RT.tipos = r.tipos; RT.repOk = Date.now(); RT.repFail = 0; } else RT.repFail = Date.now(); }).catch(() => { RT.repFail = Date.now(); RT.repOk = 0; });
    const wantAdif = !RT.adifAt || Date.now() - RT.adifAt > 110000;
    const [tu, vp, al, nt, ad] = await Promise.allSettled([get(base, '/trip_updates.json'), get(base, '/vehicle_positions.json'), get(base, '/alerts.json'), get(base, '/notices.json'), wantAdif ? get(base, '/adif.json') : Promise.reject(0)]);
    if (ad.status === 'fulfilled' && ad.value && ad.value.ok) { RT.adif = ad.value; RT.adifAt = Date.now(); } else if (wantAdif) RT.adifAt = Date.now() - 60000;
    if (tu.status === 'fulfilled') {
      const d = new Map(), m = new Map();
      for (const e of tu.value.entity || []) { const u = e.tripUpdate; if (!u || !u.trip || !isRod(u.trip.tripId)) continue; const id = u.trip.tripId, s0 = (u.stopTimeUpdate || [])[0]; let s = u.delay; if (s == null && s0) s = ((s0.arrival || s0.departure) || {}).delay; if (u.trip.scheduleRelationship === 'CANCELED') s = 'X'; if (s != null) d.set(id, s); m.set(id, { next: s0 ? { sid: s0.stopId, t: +(((s0.arrival || s0.departure) || {}).time || 0) } : null }); }
      RT.delays = d; RT.tu = m; RT.ok = Date.now(); RT.feedTs = +((tu.value.header || {}).timestamp || 0) * 1000; RT.err = '';
    } else RT.err = tu.reason && tu.reason.message || 'sin respuesta';
    if (vp.status === 'fulfilled') {
      const m = new Map(), nowS = Date.now() / 1000;
      for (const e of vp.value.entity || []) {
        const v = e.vehicle; if (!v || !v.trip || !isRod(v.trip.tripId) || !v.position) continue;
        const lab = (v.vehicle && v.vehicle.label) || '', pl = lab.match(/PLATF\.\(([^)]+)\)/), old = RT.vp.get(v.trip.tripId);
        const o = { tid: v.trip.tripId, w: LL(+v.position.longitude, +v.position.latitude), st: v.currentStatus || '', sid: v.stopId || '', ts: +v.timestamp || nowS, label: lab, plat: pl ? pl[1] : '', fam: (lab.split('-')[0] || '').trim(), num: (v.vehicle && v.vehicle.id) || '' };
        o.disp = old ? old.disp : null; m.set(o.tid, o);
      }
      RT.vp = m; RT.okVP = Date.now();
    }
    const out = [];
    // 1) Avisos oficiales de Rodalies de Catalunya (los de su web, al minuto)
    if (nt.status === 'fulfilled' && Array.isArray(nt.value.included)) {
      RT.okNotices = Date.now();
      for (const n of nt.value.included) {
        const fams = new Set((n.lines || []).map(l => l.id).filter(f => FC[f])), tl = (x, l) => { x = x || {}; l = l || window.__L; let t = x[l]; if (l === 'en' && t && (t === x.ca || /\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(t))) t = '';   /* Rodalies a veces copia el catalán en «en»: en inglés se usa el castellano */ return (t || x.es || x.ca || '').trim(); }, best = l => [tl(n.description, l), tl(n.title, l)].sort((a, b) => b.length - a.length)[0], tx = best(), txEs = best('es');   // el título viene recortado: se usa la descripción completa
        if (!tx) continue;
        out.push({ id: 'N' + n.externalId, fams, stops: new Set(), txt: tx, es: txEs, when: (n.date || '') + 'T' + (n.time || ''), src: 'Rodalies', core: n.core || '' });
      }
    }
    // 2) Avisos GTFS-RT de Renfe: solo si el archivo está al día (a veces Renfe lo deja congelado durante días)
    if (al.status === 'fulfilled') {
      const ts = +((al.value.header || {}).timestamp || 0); RT.alertsTs = ts;
      if (Date.now() / 1000 - ts < 6 * 3600) for (const e of al.value.entity || []) {
        const a = e.alert; if (!a) continue; const fams = new Set(), stops = new Set();
        for (const ie of a.informedEntity || []) { if ((ie.routeId || '').startsWith('51')) fams.add(ie.routeId.replace(/^51T\d+/, '')); if (ie.stopId && SID.has(ie.stopId)) stops.add(SID.get(ie.stopId)); }
        if (!fams.size && !stops.size) continue;
        const tr = (a.descriptionText || a.headerText || { translation: [] }).translation || [], tx = ((tr.find(t => t.language === 'es') || tr[0] || {}).text || '').trim();
        const st = +((a.activePeriod || [])[0] || {}).start || 0;
        if (!out.some(x => x.txt === tx)) out.push({ id: e.id, fams, stops, txt: tx, when: st ? new Date(st * 1000).toISOString().slice(0, 19) : '', src: 'Renfe' });
      }
    }
    // 3) Adif (gestor de la vía): incidencias en la infraestructura de Cataluña; a veces llegan antes que el aviso del operador
    if (RT.adif && Date.now() - RT.adifAt < 15 * 60000) for (const [k, it] of (RT.adif.items || []).entries()) {
      const tx = (it.t ? it.t + '. ' : '') + it.txt, fams = new Set(), stops = new Set(), nt2 = norm(tx);
      for (const m of tx.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g)) if (FC[m[1]]) fams.add(m[1]);
      ST.forEach((st, i) => { if (st.fams.size && st.n.length > 4 && nt2.includes(norm(st.n))) { stops.add(i); if (!fams.size) st.fams.forEach(f => fams.add(f)); } });
      if (!out.some(x => x.txt === tx)) out.push({ id: 'A' + k, fams, stops, txt: tx, when: RT.adif.upd || '', src: 'Adif', lvl: it.lvl });
    }
    if (nt.status === 'fulfilled' || al.status === 'fulfilled') { RT.alerts = out.sort((a, b) => (b.when > a.when ? 1 : -1)); try { localNotify(); } catch (e) {} }
    renderRT(); renderAlerts(); lastT = 0; invalidate();
  }
  // sin cobertura (túneles…): durante 10 min se siguen usando los últimos retrasos conocidos, con los trenes avanzando según
  // su horario + ese retraso; la app lo dice («Sin conexión · último dato hace X»). Pasados 10 min, horario puro.
  const feedUp = () => RT.okVP && Date.now() - RT.okVP < 10 * 60000;
  const fresh = () => RT.okVP && Date.now() - RT.okVP < 90000;
  // Renfe a veces deja de publicar Rodalies en su tiempo real (el resto de núcleos sí sale): si según horario deberían
  // circular bastantes trenes y no llega ninguno, no es «sin señal» de cada tren sino un apagón de datos → horario.
  const DOWN = { at: 0, v: false };
  const rtDown = () => {
    if (!feedUp() || RT.vp.size > 0) return false;
    if (Date.now() - DOWN.at > 30000) { DOWN.at = Date.now(); const S = madrid(new Date()), k = R.days.indexOf(S.ymd); let n = 0; if (k >= 0) for (const tr of byDay[k]) { const a = S.min - tr.t0; if (a > tr.pat.t[1] + 2 && a < tr.pat.t[tr.pat.t.length - 2] - 2) n++; } DOWN.v = n >= 6; }
    return DOWN.v;
  };
  const live = () => feedUp() && !rtDown();
  function renderRT() {
    const st = $('#rtst'), m = $('#mode');
    if (m) { const vis = [...famOn].filter(f => { famCov(''); const o = COV.m.get(f); return o && o[0] >= 2; }), np = noPosFams(vis), on = !!live() && nowState().live && !(vis.length && np.length === vis.length); m.classList.toggle('on', on && fresh()); m.classList.toggle('pre', !(on && fresh())); m.textContent = on && !fresh() ? 'Sin conexión' : on ? 'En directo' : PAST.cur ? 'Repaso real' : 'Previsión'; m.classList.toggle('past', !!PAST.cur); const g = $('#rcgrab'); if (g) { let d = g.querySelector('.rdot'); if (!d) { d = document.createElement('b'); d.className = 'rdot'; g.insertBefore(d, g.firstChild); } d.className = 'rdot ' + (PAST.cur ? 'past' : on && fresh() ? 'on' : 'pre'); d.title = m.textContent; } m.title = PAST.cur ? `Retrasos reales de la foto de las ${PAST.cur.sn.t} (se toma una cada 15 min)` : ''; }
    if (!st) return;
    if (!RT.url) st.textContent = RT.err || 'Sin puente: trenes según horario oficial.';
    else if (RT.err) st.textContent = 'No se pudo conectar con el puente (' + RT.err + '). Se usa el horario.';
    else if (live()) st.innerHTML = `Conectado · ${RT.vp.size} trenes con posición real y ${RT.delays.size} con retraso · actualizado a las ${new Date(RT.okVP).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    else if (rtDown()) st.textContent = 'Conectado, pero Renfe no está publicando ahora ninguna posición de Rodalies (el resto de núcleos sí). Mientras tanto, mapa según horario y salidas oficiales de Rodalies.';
    else st.textContent = 'Conectando…';
    const inp = $('#rturl'); if (inp && inp._shown !== RT.url) { inp.value = RT.url; inp._shown = RT.url; }
  }
  $('#rtsave').onclick = () => { let v = $('#rturl').value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/, '').replace(/\/+$/, ''); if (v && !/^https?:\/\//.test(v)) v = 'https://' + v; if (!v) { RT.err = 'pega la dirección de tu puente'; renderRT(); return; } RT.url = v; try { localStorage.setItem('rod_rt', v); } catch (e) {} RT.ok = 0; RT.err = ''; renderRT(); pollRT(); };
  $('#rtoff').onclick = () => { RT.url = DEF_RT; try { localStorage.removeItem('rod_rt'); } catch (e) {} mcs._h = ''; pollRT(); return; RT.url = ''; RT.ok = 0; RT.okVP = 0; RT.delays = new Map(); RT.vp = new Map(); RT.tu = new Map(); RT.alerts = []; renderAlerts(); try { localStorage.setItem('rod_rt', ''); } catch (e) {} renderRT(); invalidate(); };
  setInterval(pollRT, 20000); setTimeout(pollRT, 50);
  // repasar el día: con la hora movida hacia atrás, retrasos reales de la foto de GitHub más cercana (cada 15 min)
  const PAST = { snap: null, key: '' };
  function pastSnap() {
    const S = nowState(); if (S.live || !HIST.hoy || !HIST.hoy.snaps || speed && simMin == null) return null;
    const now = madrid(new Date()).min; if (S.min > now + 1) return null;   // solo hacia atrás
    let best = null; for (const sn of HIST.hoy.snaps) { if (!sn.d) continue; const m = hm2min(sn.t); if (m <= S.min + 1 && (!best || m > best.m)) best = { m, sn }; }
    return best && S.min - best.m <= 25 ? best : null;
  }
  const delayOf = t => { { const w = whyOf(t.num); if (w && w.cx && nowState().live) return 'X'; } const ps = PAST.cur; if (ps) { if (ps.sn.x && ps.sn.x.includes(t.tid)) return 'X'; const d = ps.sn.d[t.tid]; return d == null ? 0 : d; } if (!live()) return null; const v = RT.delays.get(t.tid), p = RT.vp.get(t.tid); if (v === 'X') return v; if (p && p.pre && p.preDl >= 1) return Math.max(typeof v === 'number' ? v : 0, p.preDl * 60); return v == null ? null : v; };   // incluye el retraso estimado de un tren que aún no ha empezado su viaje

  // ---------- líneas ----------
  const famOn = new Set(FAM);
  try { const sv = JSON.parse(localStorage.getItem('rod_lines') || 'null'); if (Array.isArray(sv) && sv.some(f => FAM.includes(f))) { famOn.clear(); sv.forEach(f => FAM.includes(f) && famOn.add(f)); } } catch (e) {}   // el filtro de líneas se recuerda
  const lgeo = new LineSegmentsGeometry(), cgeo = new LineSegmentsGeometry();
  const lmat = new LineMaterial({ vertexColors: true, linewidth: 3.2, depthTest: false, transparent: true });
  const cmat = new LineMaterial({ color: 0xffffff, linewidth: 6, depthTest: false, transparent: true, opacity: 0.9 });
  const lline = new LineSegments2(lgeo, lmat), cline = new LineSegments2(cgeo, cmat);
  cline.renderOrder = 20; lline.renderOrder = 21; lline.frustumCulled = cline.frustumCulled = false;
  scene.add(cline, lline);
  // tramos fuera de Cataluña (sin mapa ni vías de OSM detrás): se dibujan muy suaves salvo que se mire esa línea
  // ¿la estación cae dentro de Cataluña? cálculo geométrico sobre los términos municipales (fiable en cualquier dispositivo)
  function inCat(w) {
    const x = w[0] / K + CX, y = w[1] / K + CY;
    for (const o of munis) {
      if (o._bb === undefined) { let a = 1e9, b = 1e9, c = -1e9, d = -1e9; for (const p of o.rings || []) { const r = p[0] || []; for (let q = 0; q < r.length; q += 2) { if (r[q] < a) a = r[q]; if (r[q] > c) c = r[q]; if (r[q + 1] < b) b = r[q + 1]; if (r[q + 1] > d) d = r[q + 1]; } } o._bb = [a, b, c, d]; }
      const bb = o._bb; if (x < bb[0] || x > bb[2] || y < bb[1] || y > bb[3]) continue;
      for (const p of o.rings || []) { const r = p[0] || []; let ins = false; for (let q = 0, n = r.length, k2 = n - 2; q < n; k2 = q, q += 2) { const yi = r[q + 1], yj = r[k2 + 1]; if ((yi > y) !== (yj > y) && x < (r[k2] - r[q]) * (y - yi) / (yj - yi) + r[q]) ins = !ins; } if (ins) return true; }
    }
    return false;
  }
  let extDone = false;
  function markExt() {
    if (extDone || !munis.length) return; extDone = true;
    ST.forEach(t => { t.ext = !inCat(t.w); });
    SEG.forEach(g => { g.ext = !inCat(g.p[0]) && !inCat(g.p[g.p.length - 1]) && !inCat(g.p[g.p.length >> 1]); });
  }
  const focusF = () => { const f = new Set(famOn.size <= 2 ? famOn : []); try { if (selTrip && selTrip.fam) f.add(selTrip.fam); } catch (e) {} return f; };   // selTrip aún no existe al arrancar
  let lastFocus = '';
  function buildLines() {
    markExt();
    const P = [], C = [], seen = new Set(), col = new THREE.Color(), grey = new THREE.Color('#d2d0d0'), FF = focusF(); lastFocus = [...FF].join();
    for (const f of FAM) {
      if (!famOn.has(f)) continue;
      for (const s of famSegs[f]) {
        if (seen.has(s)) continue; seen.add(s);
        const p = SEG[s].p; col.set(FC[f]); if (SEG[s].ext && !FF.has(f)) col.lerp(grey, 0.55);
        for (let i = 0; i + 1 < p.length; i++) { P.push(p[i][0], p[i][1], Z, p[i + 1][0], p[i + 1][1], Z); C.push(col.r, col.g, col.b, col.r, col.g, col.b); }
      }
    }
    if (!P.length) P.push(0, 0, -50, 0, 0, -50), C.push(0, 0, 0, 0, 0, 0);
    // geometría nueva cada vez: three.js recuerda cuántos tramos tenía la primera y, si luego hay más (p. ej. de «R1» a «Todas»), no dibuja el resto
    const lg = new LineSegmentsGeometry(), cg = new LineSegmentsGeometry(); lg.setPositions(P); lg.setColors(C); cg.setPositions(P);
    const ol = lline.geometry, oc = cline.geometry; lline.geometry = lg; cline.geometry = cg; if (ol) ol.dispose(); if (oc) oc.dispose();
    invalidate();
  }
  buildLines();

  // ---------- puntos (estaciones y trenes) ----------
  const ptMat = (border) => new THREE.ShaderMaterial({
    uniforms: { dpr: { value: Math.min(devicePixelRatio || 1, 2) }, border: { value: new THREE.Color(border) } },
    vertexShader: 'attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }',
    transparent: true, depthTest: false
  });
  // estaciones
  const sGeo = new THREE.BufferGeometry(), NS = ST.length;
  const sPos = new Float32Array(NS * 3), sFill = new Float32Array(NS * 3), sSize = new Float32Array(NS), sBw = new Float32Array(NS);
  ST.forEach((s, i) => { sPos[i * 3] = s.w[0]; sPos[i * 3 + 1] = s.w[1]; sPos[i * 3 + 2] = Z; sFill.set([1, 1, 1], i * 3); sSize[i] = 6; sBw[i] = 1.6; });
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3)); sGeo.setAttribute('fill', new THREE.BufferAttribute(sFill, 3)); sGeo.setAttribute('size', new THREE.BufferAttribute(sSize, 1)); sGeo.setAttribute('bw', new THREE.BufferAttribute(sBw, 1));
  const sMat = ptMat('#1d2330'), sPts = new THREE.Points(sGeo, sMat); sPts.renderOrder = 22; sPts.frustumCulled = false; scene.add(sPts);
  function styleStations() {
    const big = cur.dist < 45;
    const FF = focusF();
    ST.forEach((s, i) => { const on = [...s.fams].some(f => famOn.has(f)), dim = s.ext && ![...s.fams].some(f => FF.has(f)) && i !== selStation; sSize[i] = on ? (i === selStation ? 13 : dim ? 3 : big ? 8 : 5) : 0; sBw[i] = i === selStation ? 3 : 1.6; });
    sGeo.attributes.size.needsUpdate = true; sGeo.attributes.bw.needsUpdate = true;
  }
  // trenes
  const MAXT = 600, tGeo = new THREE.BufferGeometry();
  const tPos = new Float32Array(MAXT * 3), tFill = new Float32Array(MAXT * 3), tSize = new Float32Array(MAXT), tBw = new Float32Array(MAXT);
  tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3)); tGeo.setAttribute('fill', new THREE.BufferAttribute(tFill, 3)); tGeo.setAttribute('size', new THREE.BufferAttribute(tSize, 1)); tGeo.setAttribute('bw', new THREE.BufferAttribute(tBw, 1));
  const tAng = new Float32Array(MAXT); tGeo.setAttribute('ang', new THREE.BufferAttribute(tAng, 1));
  const tMat = new THREE.ShaderMaterial({
    uniforms: { dpr: { value: Math.min(devicePixelRatio || 1, 2) }, border: { value: new THREE.Color('#ffffff') } },
    vertexShader: 'attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }',
    transparent: true, depthTest: false
  });
  const tPts = new THREE.Points(tGeo, tMat); tPts.renderOrder = 24; tPts.frustumCulled = false; scene.add(tPts);
  // anillo de retraso / seleccionado
  const rGeo = new THREE.BufferGeometry(), rPos = new Float32Array(MAXT * 3), rFill = new Float32Array(MAXT * 3), rSize = new Float32Array(MAXT), rBw = new Float32Array(MAXT);
  rGeo.setAttribute('position', new THREE.BufferAttribute(rPos, 3)); rGeo.setAttribute('fill', new THREE.BufferAttribute(rFill, 3)); rGeo.setAttribute('size', new THREE.BufferAttribute(rSize, 1)); rGeo.setAttribute('bw', new THREE.BufferAttribute(rBw, 1));
  const rPts = new THREE.Points(rGeo, ptMat('#ffffff')); rPts.renderOrder = 23; rPts.frustumCulled = false; scene.add(rPts);

  // ---------- posición de un tren ----------
  function onSeg(si, f) {
    const s = SEG[si], d = f * s.L; let lo = 0, hi = s.c.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (s.c[m] <= d) lo = m; else hi = m; }
    const L = s.c[hi] - s.c[lo] || 1, k = (d - s.c[lo]) / L, a = s.p[lo], b = s.p[hi];
    return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
  }
  const ease = f => f * f * (3 - 2 * f) * 0.35 + f * 0.65;
  function posAt(tr, rel) {
    const t = tr.pat.t, n = tr.pat.stops.length, last = t[2 * n - 2];
    if (rel < t[1] - 2 || rel > last + 1) return null;
    if (rel <= t[1]) return { w: ST[tr.pat.stops[0]].w, at: 0, next: 0, moving: false };
    for (let i = 0; i < n - 1; i++) {
      const dep = t[2 * i + 1], arr = t[2 * i + 2], dep2 = t[2 * i + 3];
      if (rel <= arr) { const f = arr > dep ? (rel - dep) / (arr - dep) : 1; return { w: onSeg(tr.pat.segs[i], ease(clamp(f, 0, 1))), at: -1, next: i + 1, prev: i, moving: true }; }
      if (rel <= dep2) return { w: ST[tr.pat.stops[i + 1]].w, at: i + 1, next: i + 1, moving: false };
    }
    return { w: ST[tr.pat.stops[n - 1]].w, at: n - 1, next: n - 1, moving: false };
  }
  function activeTrips(S) {
    const k = R.days.indexOf(S.ymd), out = [];
    if (k < 0) return { k, out };
    const add = (arr, off) => { for (const tr of arr) { if (!famOn.has(tr.fam)) continue; const d = delayOf(tr); if (d === 'X') continue; const dl = (d || 0) / 60, rel = S.min + off - tr.t0 - dl; if (rel < -2 || rel > tr.pat.t[tr.pat.t.length - 2] + 1) continue; const p = posAt(tr, rel); if (p) out.push({ tr, p, rel, dl, live: d != null }); } };
    add(byDay[k], 0); if (k > 0) add(byDay[k - 1], 1440);
    return { k, out };
  }

  // el viaje anterior que está haciendo ese tren (termina en el origen de su próximo viaje): de ahí sale su retraso real
  function prevRun(tr, v, nowMin, k) {
    const o = tr.pat.stops[0], dep0 = v.dep0; let best = null;
    const scan = (arr, off) => { for (const p of arr || []) {
      const st = p.pat.stops, n = st.length; if (st[n - 1] !== o || p === tr) continue;
      const arrO = p.t0 + p.pat.t[2 * (n - 1)] - off; if (arrO > dep0 + 5 || arrO < dep0 - 120) continue;
      const g = pg(p.pat), pr = projOn(g, v.w, -1, 1e9); if (pr.err > 0.6) continue;
      // hora del horario en ese punto del recorrido
      const sd = g.stopD, t = p.pat.t; let i = sd.findIndex(x => x > pr.d); if (i < 0) i = n - 1;
      const ts = i === 0 ? t[1] : t[2 * i - 1] + (sd[i] > sd[i - 1] ? (pr.d - sd[i - 1]) / (sd[i] - sd[i - 1]) : 1) * (t[2 * i] - t[2 * i - 1]);
      const dl = nowMin - (p.t0 + ts - off); if (dl < -5 || dl > 120) continue;
      if (!best || Math.abs(dl) < Math.abs(best.prevDl)) best = { prevTr: p, dPrev: pr.d, prevDl: dl, arrO: arrO + Math.max(0, dl) };
    } };
    scan(byDay[k], 0); if (k > 0) scan(byDay[k - 1], 1440);
    if (!best) return { prevTr: null, preDl: 0 };
    const depEst = Math.max(dep0, best.arrO + 3);   // unos 3 min para dar la vuelta en la estación de origen
    return { ...best, depEst, preDl: Math.max(0, depEst - dep0) };
  }
  // distancia sobre el recorrido donde el horario sitúa al tren tm minutos después de su salida
  function schedD(tr, sd, tm) {
    const t = tr.pat.t, n = sd.length; if (!(tm >= 0)) return tm < 0 ? sd[0] : null;
    for (let i = 0; i < n; i++) {
      if (tm <= t[2 * i + 1]) { if (tm >= t[2 * i] || i === 0) return sd[i]; const a = t[2 * i - 1], b = t[2 * i]; return sd[i - 1] + (sd[i] - sd[i - 1]) * (b > a ? (tm - a) / (b - a) : 1); }
    }
    return sd[n - 1];
  }
  // ---------- trenes reales (posición de Renfe colocada sobre la vía) ----------
  let lastFrameT = performance.now();
  function liveTrains() {
    const out = [], nowS = Date.now() / 1000, now = performance.now(), dt = Math.min(1, (now - lastFrameT) / 1000); lastFrameT = now;
    for (const v of RT.vp.values()) {
      const tr = TID.get(v.tid), fam = tr ? tr.fam : v.fam;
      if (fam && FC[fam] && !famOn.has(fam)) continue;
      const d = RT.delays.get(v.tid), dl = typeof d === 'number' ? d / 60 : 0, age = Math.max(0, nowS - v.ts);
      // ¿se ha movido desde el dato anterior? (para detectar trenes detenidos)
      if (v.mvTs !== v.ts) { if (!v.mvW || Math.hypot(v.w[0] - v.mvW[0], v.w[1] - v.mvW[1]) > 0.025) { v.mvW = v.w; v.mvAt = v.ts; } v.mvTs = v.ts; }
      v.still = v.ts - (v.mvAt || v.ts);
      let w = v.w, idx = -1;
      if (tr) {
        const g = pg(tr.pat), sd = g.stopD;
        if (v.dObs == null || v.obsAt !== v.ts) { const pr = projOn(g, v.w, -1, 1e9); v.dObs = pr.d; v.err = pr.err; v.obsAt = v.ts; }
        // Renfe a veces ya etiqueta el tren con su PRÓXIMO viaje mientras aún va hacia la estación de origen
        // (p. ej. tren Mataró → L'Hospitalet que todavía está llegando a Mataró): no se coloca sobre ese recorrido
        const S0 = nowState(), k0 = R.days.indexOf(S0.ymd), off0 = tr.day === k0 - 1 ? 1440 : 0, dep0 = tr.t0 + tr.pat.t[1] - off0;
        v.pre = S0.min + dl < dep0 - 1 && (v.dObs > sd[0] + 0.35 || v.err > 0.6) && !(v.st === 'STOPPED_AT' && v.sid === ST[tr.pat.stops[0]].id);
        v.dep0 = dep0;
        if (v.pre) {
          v.atStop = -1; v.next = 0; idx = 0; v.disp = null;
          if (v.prevAt !== v.ts) { v.prevAt = v.ts; Object.assign(v, prevRun(tr, v, S0.min, k0)); }
          if (v.prevTr) { const pg2 = pg(v.prevTr.pat); w = at(pg2, v.dPrev); }
        }
        else if (!fresh() && tr) {   // sin conexión: el último dato de Renfe ya es viejo → horario + último retraso conocido
          const S2 = nowState(), k = R.days.indexOf(S2.ymd), off = tr.day === k - 1 ? 1440 : 0, pp = posAt(tr, S2.min + off - tr.t0 - dl);
          if (pp) { w = pp.w; v.est = true; idx = pp.next; v.atStop = pp.moving ? -1 : pp.at; v.next = pp.next; v.before = false; } else { v.atStop = -1; v.next = -1; }
        }
        else if (v.err <= 0.6) {   // ≤ 1,5 km de la vía: se coloca sobre ella
          // la parada siguiente sale de la posición real (Renfe a veces da como stopId la última estación pasada)
          let nx = sd.findIndex(x => x > v.dObs + 0.08); if (nx < 0) nx = sd.length - 1;
          const nearSt = sd.reduce((b, x, k) => (Math.abs(x - v.dObs) < Math.abs(sd[b] - v.dObs) ? k : b), 0);
          v.atStop = Math.abs(sd[nearSt] - v.dObs) < 0.16 ? nearSt : -1;
          { const j = v.st === 'STOPPED_AT' && v.sid ? tr.pat.stops.findIndex(si => ST[si].id === v.sid) : -1; if (j >= 0 && Math.abs(sd[j] - v.dObs) < 0.6) { v.atStop = j; if (nx <= j) nx = Math.min(j + 1, sd.length - 1); } }   // Renfe dice «parado en X»: está en la estación aunque la posición caiga un poco lejos
          v.before = v.atStop >= 0 && v.dObs < sd[v.atStop] - 0.15;   // aún llegando (Renfe a veces dice «parado» antes de llegar)
          v.next = nx; idx = nx;
          let pred = v.dObs;
          if (v.st === 'STOPPED_AT' && v.atStop >= 0) pred = sd[v.atStop];
          else if (nx > 0) {
            // avance estimado desde el último dato de Renfe, pero nunca por delante de lo que marca su horario + su retraso
            // (si no, el tren "corre" hacia la siguiente estación aunque aún esté parado y luego salta atrás con el dato nuevo)
            const run = (tr.pat.t[2 * nx] - tr.pat.t[2 * nx - 1]) * 60, vel = run > 0 ? (sd[nx] - sd[nx - 1]) / run : 0;
            const S2 = nowState(), k2 = R.days.indexOf(S2.ymd), off = tr.day === k2 - 1 ? 1440 : 0, sch = schedD(tr, sd, S2.min + off - tr.t0 - dl);
            let lim = v.dObs + vel * Math.min(age, 60); if (sch != null) lim = Math.min(lim, Math.max(v.dObs, sch));
            pred = Math.max(v.dObs, Math.min(sd[nx] - 0.03, lim));
          }
          // nunca hacia atrás por pequeñas diferencias: se espera a que el dato real le alcance (salvo saltos grandes)
          if (v.disp == null || Math.abs(v.disp - pred) > 1.2) v.disp = pred; else if (pred > v.disp) v.disp += (pred - v.disp) * Math.min(1, dt * 1.5);
          w = at(g, v.disp);
        } else if (v.err > 2) {   // posición de Renfe incoherente (> 5 km de su recorrido): se usa su horario con el retraso
          const S2 = nowState(), k = R.days.indexOf(S2.ymd), off = tr.day === k - 1 ? 1440 : 0, pp = posAt(tr, S2.min + off - tr.t0 - dl);
          if (pp) { w = pp.w; v.est = true; idx = pp.next; } v.atStop = -1; v.next = pp ? pp.next : -1;
        } else { v.atStop = -1; v.next = -1; }
      }
      const stop = v.pre ? '' : v.st === 'STOPPED_AT' && v.atStop >= 0 || v.atStop >= 0 && v.still > 30 ? 'st' : v.still >= 90 && v.atStop < 0 ? 'via' : '';
      out.push({ tr, v, w, stop, p: { w }, fam: fam || '?', c: tr ? tr.c : (FC[fam] || '#6b7385'), dl, live: true, real: true, idx, age, cancel: d === 'X' });
    }
    return out;
  }

  // ---------- bucle ----------
  const DEPS = new Map();
  let selNews = false, selStats = false, selLine = '';
  const BACK = { st: -1 };   // estación desde la que se abrió un tren (para volver al cerrarlo)
  let act = [], lastT = 0, follow = null, selTrip = null, selStation = -1, selAlerts = false, lastCard = 0, lastClock = '';
  function tick(now) {
    const fast = speed > 0 || (live() && simMin == null) || !!selTrip, gap = window.__mapHidden ? 1000 : fast ? 50 : 250;   // sin mapa a la vista basta con recalcular una vez por segundo (batería)
    if (now - lastT < gap) return false;
    lastT = now;
    { const k = [...focusF()].join(); if (k !== lastFocus) { buildLines(); styleStations(); } }
    { const pc = pastSnap(), k = pc ? pc.sn.t : ''; PAST.cur = pc; if (k !== PAST.key) { PAST.key = k; renderRT(); } if (!pc && !nowState().live && !HIST.at) loadHist(); }
    const S = nowState(), useLive = live() && S.live, r = useLive ? { k: R.days.indexOf(S.ymd), out: liveTrains() } : activeTrips(S); act = r.out;
    const col = new THREE.Color(); let n = 0, m = 0;
    for (const a of act) {
      if (n >= MAXT) break;
      tPos[n * 3] = a.p.w[0]; tPos[n * 3 + 1] = a.p.w[1]; tPos[n * 3 + 2] = Z + 0.02;
      let ah = null;
      if (a.real && a.v.pre && a.v.prevTr) ah = at(pg(a.v.prevTr.pat), a.v.dPrev + 0.35);
      else if (a.real && a.tr && !a.v.pre && a.v.err <= 0.6 && a.v.disp != null && !(a.v.st === 'STOPPED_AT' && a.v.atStop >= 0)) ah = at(pg(a.tr.pat), a.v.disp + 0.35);
      else if (!a.real && a.p.moving) { const t = a.tr.pat.t, i = a.p.prev, dep = t[2 * i + 1], arr = t[2 * i + 2], f = arr > dep ? (a.rel - dep) / (arr - dep) : 1; ah = onSeg(a.tr.pat.segs[i], Math.min(1, ease(clamp(f, 0, 1)) + 0.04)); }
      const stopped = a.real ? !!a.stop : !a.p.moving;   // parado: dos rayitas de pausa en vez de flecha
      a.broke = brokenInfo(a);
      if (a.broke) tAng[n] = 85; else if (stopped) tAng[n] = 75; else if (ah) { const p0 = screen(a.p.w), p1 = screen(ah), dx = p1[0] - p0[0], dy = p1[1] - p0[1]; tAng[n] = Math.hypot(dx, dy) > 0.05 ? Math.atan2(dx, -dy) : 99; } else tAng[n] = 99;
      col.set(a.c || a.tr.c); tFill[n * 3] = col.r; tFill[n * 3 + 1] = col.g; tFill[n * 3 + 2] = col.b;
      const sel = a.tr ? a.tr === selTrip : (selTrip && selTrip.vtid === a.v.tid); tSize[n] = sel ? 22 : (cur.dist < 45 ? 17 : 14); tBw[n] = sel ? 3.5 : 2.2;
      // anillos: amarillo latiendo = seleccionado · rojo = detenido en plena vía · naranja = retraso de 5 min o más
      const stuck = a.real && a.stop === 'via' || !!a.broke;
      // seleccionado: anillo del color de su retraso (verde en hora · amarillo leve · naranja moderado · rojo grave)
      const selC = a.cancel || a.broke ? [0.86, 0.15, 0.15] : a.dl > 10 ? [0.86, 0.15, 0.15] : a.dl > 5 ? [0.92, 0.48, 0.05] : a.dl >= 1 ? [0.98, 0.8, 0.08] : [0.09, 0.64, 0.29];
      if (a.live && a.dl >= 5 || sel || stuck) { rPos[m * 3] = a.p.w[0]; rPos[m * 3 + 1] = a.p.w[1]; rPos[m * 3 + 2] = Z + 0.01; rFill.set(sel ? selC : stuck ? [0.86, 0.15, 0.15] : [0.98, 0.45, 0.09], m * 3); rSize[m] = tSize[n] + (sel ? 16 + 5 * Math.sin(now / 220) : stuck ? 10 + 3 * Math.sin(now / 400) : 8); rBw[m] = sel ? 2 : 3; m++; }
      n++;
    }
    tGeo.setDrawRange(0, n); rGeo.setDrawRange(0, m);
    ['position', 'fill', 'size', 'bw'].forEach(k => { tGeo.attributes[k].needsUpdate = true; rGeo.attributes[k].needsUpdate = true; }); tGeo.attributes.ang.needsUpdate = true;
    if (follow) {
      const a = act.find(x => x.tr === follow);
      if (a) {
        let top = 0, bot = innerHeight;
        const mb = mcs.style.display !== 'none' && !mcs.classList.contains('min') ? mcs.getBoundingClientRect() : null, rb = $('#rc').getBoundingClientRect();
        if (innerWidth <= 640) { if (mb) top = mb.bottom; bot = Math.min(bot, rb.top); }
        const want = top + (bot - top) / 2, dy = want - innerHeight / 2, wpp = 2 * goal.dist * Math.tan(17.5 * Math.PI / 180) / innerHeight;
        goal.tx = a.p.w[0] - Math.sin(cur.yaw) * dy * wpp; goal.ty = a.p.w[1] + Math.cos(cur.yaw) * dy * wpp;
      } else if (live() && nowState().live) follow = null;
    }
    // reloj y contador
    const c = hhmm(Math.floor(S.min + 1e-6)); /* como el reloj del móvil: sin redondear */ if (c !== lastClock) { lastClock = c; $('#ctime').textContent = c; }
    $('#ntr').textContent = String(act.length); $('#ntrl').textContent = useLive ? 'trenes de Rodalies con posición real' : 'trenes previstos según el horario'; { const fl = famOn.size < FAM.length ? [...famOn].sort(natural).join(', ') : ''; const cc = $('#ccount'), txt = PAST.cur ? `⏪ ${act.length} trenes con los retrasos reales de las ${PAST.cur.sn.t} · ${Object.values(PAST.cur.sn.d).filter(x => x >= 60).length} iban con retraso` : !S.live && S.min < madrid(new Date()).min - 1 && !speed ? `⏪ Hora pasada según horario${HIST.hoy && HIST.hoy.snaps && HIST.hoy.snaps.some(x => x.d) ? ` · hay retrasos reales desde las ${HIST.hoy.snaps.find(x => x.d).t}` : ' · aún no hay fotos con retrasos reales de hoy'}` : useLive && !fresh() ? `📶 ${'Sin conexión'} · ${'último dato'} ${ago(Math.round((Date.now() - RT.okVP) / 60000) + ' min')} <small class="nopos">· ${'horas con el último retraso conocido'}</small>` : useLive && !act.some(a => a.real) && noPosFams(famOn).length ? `📡 ${'Renfe no da la posición de los trenes ahora'}${fl ? ` <small>· ${esc(fl)}</small>` : ''} <small class="nopos">· ${'horas según el horario oficial'}</small>` : `🚆 ${act.length} ${useLive ? 'trenes con posición real' : 'trenes previstos'}${fl ? ` <small>· ${esc(fl)}</small>` : ''}${useLive && RT.okVP ? (() => { const s = Math.max(0, Math.round((Date.now() - RT.okVP) / 1000)); return ` <small class="fresh${s < 3 ? ' new' : ''}">● ${'actualizado '}${ago(s + ' s')}</small>`; })() : ''}`; if (cc && cc._t !== txt) { cc.innerHTML = txt; cc._t = txt; } }
    const dd = new Date(); $('#cdate').textContent = S.live ? 'hora actual' : (speed ? 'simulación ×' + speed : paused ? 'en pausa' : 'hora elegida');
    if (r.k < 0) $('#src').innerHTML = `<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${ymd2(R.days[0])} al ${ymd2(R.days[R.days.length - 1])}: actualiza la app.`;
    else if (useLive) $('#src').textContent = `En directo · posiciones de Renfe de ${ago(dur(Math.max(0, Date.now() / 1000 - Math.max(...[...RT.vp.values()].map(v => v.ts), 0))))}`;
    else if (rtDown() && S.live) $('#src').innerHTML = '<b style="color:#c2410c">Renfe no publica ahora posiciones de Rodalies:</b> trenes según horario';
    else $('#src').innerHTML = '<b style="color:#c2410c">No es tiempo real:</b> ' + (RT.url ? 'sin conexión con el puente, ' : 'conecta el puente para ver los trenes reales; ') + 'posiciones calculadas con el horario';
    if (S.live) { const v = Math.round(S.min); const sl = $('#tsl'); if (document.activeElement !== sl) sl.value = v < 240 ? v + 1440 : v; }
    { const k = selTrip ? String(selTrip.num || selTrip.vtid || '') : ''; if (k !== tick._sk) { tick._sk = k; renderHome(true); } }
    renderHome();
    if (now - lastCard > 3000 && (selTrip || selStation >= 0 || selAlerts || selStats || selLine)) { lastCard = now; renderCard(); }
    renderRT();
    return true;
  }
  let lastDist = -1;
  // ---------- nombres de municipios (botón junto al buscador, solo con el mapa visto desde arriba) ----------
  let munOn = (() => { try { return localStorage.getItem('rod_mun') === '1'; } catch (e) { return false; } })();
  const mpool = [], mbtn = document.createElement('button');
  mbtn.type = 'button'; mbtn.id = 'mbtn'; mbtn.title = 'Ver los nombres de los municipios'; mbtn.innerHTML = '🏘️<span>Municipios</span>';
  mbtn.onclick = () => { munOn = !munOn; try { localStorage.setItem('rod_mun', munOn ? '1' : ''); } catch (e) {} mbtn.classList.toggle('on', munOn); invalidate(); placeMuniLabels(); };
  mbtn.classList.toggle('on', munOn); document.body.appendChild(mbtn);
  const MSORT = munis.slice().sort((a, b) => b.pop - a.pop);
  // punto de la etiqueta: centro de masas del polígono más grande del municipio (queda dentro del término)
  function anchor(o) {
    if (o._a) return o._a;
    let best = null, bestA = 0;
    for (const poly of o.rings || []) { const r = poly[0]; if (!r) continue; let A = 0, X = 0, Y = 0; for (let q = 0, n = r.length; q < n; q += 2) { const x0 = r[q], y0 = r[q + 1], x1 = r[(q + 2) % n], y1 = r[(q + 3) % n], c = x0 * y1 - x1 * y0; A += c; X += (x0 + x1) * c; Y += (y0 + y1) * c; } if (Math.abs(A) > bestA) { bestA = Math.abs(A); best = [X / (3 * A), Y / (3 * A)]; } }
    return (o._a = best ? [(best[0] - CX) * K, (best[1] - CY) * K] : [o.cx, o.cy]);
  }
  const tier = p => p >= 100000 ? 1 : p >= 20000 ? 2 : p >= 5000 ? 3 : 4, CW = [0, 7.6, 6.7, 6, 5.4], CH = [0, 17, 15, 13, 12];
  const pretty = n => n.replace(/^(.*), (el|la|les|els|los|las)$/i, '$2 $1').replace(/^(.*), l'$/i, "l'$1");
  function placeMuniLabels() {
    const flat = goal.tilt < 0.06 && cur.tilt < 0.08; mbtn.classList.toggle('show', flat);
    let k = 0;
    if (munOn && flat) {
      // obstáculos: rótulos de provincia y nombres de estaciones ya colocados
      const taken = [...document.querySelectorAll('.plab, .slab')].filter(e => e.offsetParent !== null || e.style.display === 'block').map(e => { const b = e.getBoundingClientRect(); return [b.left - 2, b.top - 2, b.right + 2, b.bottom + 2]; }).filter(r => r[2] > r[0]);
      const d = cur.dist, minPop = d > 160 ? 50000 : d > 130 ? 20000 : d > 105 ? 8000 : d > 80 ? 3000 : d > 62 ? 800 : 0;
      for (const o of MSORT) {
        // de lejos solo las ciudades grandes; al acercarse van apareciendo las más pequeñas, hasta verlas todas
        const t = tier(o.pop); if (o.pop < minPop) break;
        const a = anchor(o); _v.set(a[0], a[1], Z).project(camera); if (Math.abs(_v.x) > 1.02 || Math.abs(_v.y) > 1.02) continue;
        const x = (_v.x * 0.5 + 0.5) * innerWidth, y = (-_v.y * 0.5 + 0.5) * innerHeight, nm = pretty(o.name), w = nm.length * CW[t] + 8, h = CH[t];
        const r = [x - w / 2, y - h / 2, x + w / 2, y + h / 2];
        if (taken.some(q => r[0] < q[2] && q[0] < r[2] && r[1] < q[3] && q[1] < r[3])) continue; taken.push(r);
        const el = mpool[k] || (mpool[k] = Object.assign(document.createElement('div'), { className: 'mlab' })); if (!el.isConnected) document.body.appendChild(el);
        if (el._n !== nm) { el.textContent = nm; el._n = nm; } if (el._t !== t) { el.className = 'mlab t' + t; el._t = t; }
        el.style.transform = `translate(${Math.round(x)}px,${Math.round(y)}px) translate(-50%,-50%)`; el.style.display = 'block'; k++;
      }
    }
    for (; k < mpool.length; k++) mpool[k].style.display = 'none';
  }
  // ---------- estadísticas ----------
  const HIST = { at: 0, hoy: null, ayer: null, err: '' };
  const HURL = 'https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/';
  function loadHist() {
    if (Date.now() - HIST.at < 5 * 60000) return; HIST.at = Date.now();
    Promise.all(['hoy', 'ayer', 'hist'].map(n => fetch(HURL + n + '.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null)))
      .then(([h, a, hi]) => { HIST.hoy = h; HIST.ayer = a; HIST.hist = hi; HIST.tr = null; HIST.err = h ? '' : 'sin datos'; if (selStats) { mcs._h = ''; renderCard(); } renderHome(true); });
  }
  // ¿suele ir tarde este tren? retraso típico de cada día (mediana de las fotos) de los últimos 30 días + ayer + hoy
  function dayTr(H0) { const obs = {}; for (const sn of (H0 && H0.snaps) || []) for (const t of sn.r || []) { const m = /^\d+[A-Z](\d+)/.exec(t); if (m) (obs[m[1]] = obs[m[1]] || []).push(Math.max(0, (sn.d && sn.d[t]) || 0) / 60); } const tr = {}; for (const k in obs) { const v = obs[k].sort((a, b) => a - b); tr[k] = Math.round(v[v.length >> 1]); } return tr; }
  function trainHist(num) {
    if (!HIST.tr) { const days = new Map(); for (const d of (HIST.hist && HIST.hist.days) || []) days.set(d.day, d.tr); for (const H0 of [HIST.ayer, HIST.hoy]) if (H0 && H0.day && !days.has(H0.day)) { const t = dayTr(H0); if (Object.keys(t).length) days.set(H0.day, t); } HIST.tr = days; }
    const v = [...HIST.tr.values()].map(tr => tr[String(num)]).filter(x => x != null); if (!v.length) return null;
    return { n: v.length, late: v.filter(x => x >= 5).length, avg: v.reduce((a, b) => a + b, 0) / v.length };
  }
  // gradación por resultado: verde bueno · amarillo regular · naranja malo · rojo muy malo
  const pctCls = p => p >= 90 ? 'g' : p >= 80 ? 'y' : p >= 65 ? 'w' : 'b';
  const PC = { g: '#16a34a', y: '#eab308', w: '#ea7a0c', b: '#dc2626' };
  const dlC = m => m > 10 ? PC.b : m > 5 ? PC.w : m >= 1 ? PC.y : PC.g;
  const fmtMin = m => (m >= 0.05 ? '+' : '') + (Math.round(m * 10) / 10).toString().replace('.', ',') + ' min';
  function bars(rows, max, unit) {   // rows: [{lab, w (0..1), c, val, tip}]
    return `<div class="sbars">${rows.map(r => `<div class="sbar" title="${esc(r.tip || '')}"><span class="sl">${r.lab}</span><span class="st"><i style="width:${Math.max(2, Math.round(r.w * 100))}%;background:${r.c}"></i></span><b class="sv" style="color:${r.c === PC.y ? 'var(--svy,#a16207)' : r.c === PC.w ? 'var(--svw,#c2410c)' : r.c}">${r.val}</b></div>`).join('')}</div>`;
  }
  function lineChart(snaps) {
    snaps = (snaps || []).filter(x => x.n >= 10);   // de madrugada casi no hay trenes: esas fotos no dicen nada
    if (!snaps || snaps.length < 2) { const s0 = snaps && snaps[0]; return s0 ? `<p class="snote">Primera foto del día a las ${s0.t}: ${Math.round(s0.ok / s0.n * 100)} % puntuales de ${s0.n} trenes. El gráfico aparece con la segunda foto.</p>` : '<p class="snote">Aún no hay fotos de hoy.</p>'; }
    // eje horizontal por hora real (los huecos sin fotos se ven como huecos), línea con área y solo el último punto marcado
    const tm = sn => { const [h, m] = sn.t.split(':').map(Number); return h * 60 + m; }, t0 = tm(snaps[0]), t1 = Math.max(t0 + 60, tm(snaps[snaps.length - 1]));
    const W2 = 300, H2 = 112, pad = 24, xs = t => pad + (t - t0) * (W2 - pad - 8) / (t1 - t0), ys = p => 8 + (100 - p) / 100 * (H2 - 26), pc = sn => sn.n ? sn.ok / sn.n * 100 : 100;
    const pts = snaps.map(sn => [xs(tm(sn)), ys(pc(sn)), sn]), P = p => p[0].toFixed(1) + ',' + p[1].toFixed(1);
    const segs = []; let cur = [];   // si faltan más de 45 min de fotos, la línea se corta
    pts.forEach((p, k) => { if (k && tm(p[2]) - tm(pts[k - 1][2]) > 45) { segs.push(cur); cur = []; } cur.push(p); }); segs.push(cur);
    const last = pts[pts.length - 1], hrs = []; for (let h = Math.ceil(t0 / 180) * 3; h * 60 < t1; h += 3) if (h * 60 > t0 + 20) hrs.push(h);
    const avg = Math.round(snaps.reduce((a, sn) => a + sn.ok, 0) / Math.max(1, snaps.reduce((a, sn) => a + sn.n, 0)) * 100);
    return `<svg class="schart" viewBox="0 0 ${W2} ${H2}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del día">
      ${[100, 75, 50, 25].map(p => `<line x1="${pad}" x2="${W2 - 4}" y1="${ys(p)}" y2="${ys(p)}" class="gl"/><text x="2" y="${ys(p) + 3}" class="ax">${p}%</text>`).join('')}
      <line x1="${pad}" x2="${W2 - 4}" y1="${ys(avg)}" y2="${ys(avg)}" class="avg"/>
      ${segs.filter(g => g.length).map(g => `<polygon points="${P([g[0][0], ys(0)])} ${g.map(P).join(' ')} ${P([g[g.length - 1][0], ys(0)])}" class="ar"/><polyline points="${g.map(P).join(' ')}" class="ln"/>`).join('')}
      ${pts.map(([x, y, sn]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" class="hit"><title>${sn.t} · ${Math.round(pc(sn))}% puntuales · ${sn.n} trenes · ${sn.d5} con +5 min · retraso medio ${fmtMin(sn.avg)}${sn.nd ? ` · ${sn.nd} sin dato` : ''}</title></circle>`).join('')}
      <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(last[0], W2 - 30).toFixed(1)}" y="${(last[1] - 7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(pc(last[2]))}%</text>
      ${hrs.map(h => `<text x="${xs(h * 60).toFixed(1)}" y="${H2 - 4}" class="ax" text-anchor="middle">${String(h).padStart(2, '0')}h</text>`).join('')}
      <text x="${pad}" y="${H2 - 4}" class="ax">${snaps[0].t}</text></svg><small class="snote">${'Línea discontinua: media del día'} (${avg}%)</small>`;
  }
  function statsHtml() {
    loadHist();
    const S = nowState(), all = act.filter(a => a.real && live() && S.live), real = all.filter(a => RT.delays.has(a.v.tid)), n = real.length, nd = all.length - n;   // sin dato de retraso: fuera del cálculo
    let h = `<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>×</button><h3>📊 Estadísticas</h3>`;
    if (n) {
      const ok = real.filter(a => a.dl < 3).length, d5 = real.filter(a => a.dl >= 5).length, stuck = real.filter(a => a.stop === 'via').length, p = Math.round(ok / n * 100);
      h += `<small>Ahora mismo · ${n} trenes con retraso publicado por Renfe${nd ? ` · ${nd} sin dato (no se cuentan)` : ''}</small><div class="kpis">
        <div class="kpi ${pctCls(p)}"><b>${p}%</b><span>puntuales</span></div>
        <div class="kpi ${pctCls(100 - d5 / n * 100 * 2)}" title="${Math.round(d5 / n * 100)} % de los trenes"><b>${d5}</b><span>con 5 min<br>o más</span></div>
        <div class="kpi ${stuck === 0 ? 'g' : stuck <= 2 ? 'w' : 'b'}"><b>${stuck}</b><span>detenidos<br>en la vía</span></div></div>`;
      const byF = new Map(); real.forEach(a => { const f = a.fam; const o = byF.get(f) || { n: 0, ok: 0, sum: 0 }; o.n++; o.ok += a.dl < 3; o.sum += Math.max(0, a.dl); byF.set(f, o); });
      const lf = [...byF].filter(([f]) => FC[f]).sort((x, y) => x[1].ok / x[1].n - y[1].ok / y[1].n || y[1].sum / y[1].n - x[1].sum / x[1].n);
      const lfBad = lf.filter(([, o]) => o.ok < o.n), lfOk = lf.filter(([, o]) => o.ok === o.n);
      h += `<h4>Puntualidad por línea ahora</h4>` + (lfBad.length ? '' : '<p class="snote">✓ Todas las líneas van puntuales.</p>') + bars(lfBad.map(([f, o]) => ({ lab: chipL(f), w: o.ok / o.n, c: PC[pctCls(o.ok / o.n * 100)], val: `${Math.round(o.ok / o.n * 100)}% <small>${fmtMin(o.sum / o.n)}</small>`, tip: `${f}: ${o.ok} de ${o.n} trenes puntuales · retraso medio ${fmtMin(o.sum / o.n)}` }))) + (lfOk.length ? `<p class="snote">Puntuales al 100 %: ${lfOk.map(([f]) => chipL(f)).join(' ')}</p>` : '');
      const bySt = new Map(); real.forEach(a => { if (!a.tr || a.v.next == null || a.v.next < 0 || a.v.pre) return; const si = a.tr.pat.stops[a.v.next]; const o = bySt.get(si) || { n: 0, sum: 0 }; o.n++; o.sum += Math.max(0, a.dl); bySt.set(si, o); });
      const top = [...bySt].filter(([, o]) => o.sum / o.n >= 1).sort((x, y) => y[1].sum / y[1].n - x[1].sum / x[1].n).slice(0, 8), mx = top.length ? top[0][1].sum / top[0][1].n : 1;
      h += `<h4>Estaciones con más retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estación</small>` + (top.length ? bars(top.map(([si, o]) => ({ lab: `<span class="sn" data-gs="${si}">${esc(ST[si].n)}</span>`, w: (o.sum / o.n) / mx, c: dlC(o.sum / o.n), val: `${fmtMin(o.sum / o.n)} <small>${o.n} ${o.n === 1 ? 'tren' : 'trenes'}</small>`, tip: `${ST[si].n}: ${o.n} trenes llegando con ${fmtMin(o.sum / o.n)} de media` }))) : '<p class="snote">✓ Ningún tren llega con retraso ahora mismo.</p>');
    } else h += `<p class="snote">Las estadísticas en directo necesitan el puente de tiempo real conectado.</p>`;
    // histórico del día (foto cada 15 min hecha por GitHub, sin servidor propio)
    const H = HIST.hoy;
    h += `<button type="button" class="hmore" data-cols>${COLS.on ? '▾ Quitar columnas del mapa' : '🏙️ Ver el retraso de cada estación en 3D'}</button>`;
    { famCov(''); const cv = [...COV.m].filter(([f, o]) => FC[f] && o[0] >= 3).map(([f, o]) => [f, o[1] / o[0]]).sort((a, b) => a[1] - b[1]);
      if (cv.length && !live()) h += `<h4>${'¿De qué trenes da posición Renfe?'}</h4><small class="snote">${'Ahora no llegan datos en directo de Renfe: el mapa usa el horario.'}</small>`;
      else if (cv.length) h += `<h4>¿De qué trenes da posición Renfe?</h4><small class="snote">De los trenes que según horario circulan ahora, cuántos se ven en directo. Si es bajo, en esa línea el mapa usa el horario y no avisamos de «sin señal».</small>` + bars(cv.slice(0, 8).map(([f, p]) => ({ lab: chipL(f), w: p, c: PC[pctCls(p * 100)], val: `${Math.round(p * 100)}%`, tip: `${f}: ${Math.round(p * 100)} % de los trenes en circulación con posición de Renfe` }))); }
    { const pc = (H0, upTo) => { const sn = (H0 && H0.snaps || []).filter(x => x.n && (!upTo || x.t <= upTo)); const n = sn.reduce((a, x) => a + x.n, 0), ok = sn.reduce((a, x) => a + x.ok, 0); return n ? ok / n * 100 : null; };
      // se compara con ayer HASTA LA MISMA HORA (comparar media mañana con el día entero no sería justo)
      const lastT = ((HIST.hoy && HIST.hoy.snaps) || []).filter(x => x.n).map(x => x.t).pop(), a = pc(HIST.hoy), b = pc(HIST.ayer, lastT), ra = a != null ? Math.round(a) : null, rb = b != null ? Math.round(b) : null;
      if (a != null) h += `<div class="cmp"><span>Hoy <b class="${pctCls(a)}">${Math.round(a)} %</b> puntuales</span>${b != null ? `<span>${lastT ? 'Ayer a esta hora' : 'Ayer'} <b class="${pctCls(b)}">${rb} %</b></span><span>${ra > rb ? '▲ mejor que ayer' : ra < rb ? '▼ peor que ayer' : '= igual que ayer'}</span>` : ''}</div>`; }
    h += `<h4>Hoy, a lo largo del día</h4>`;
    if (H && H.snaps) {
      h += lineChart(H.snaps);
      const sts = Object.entries(H.st || {}).map(([id, o]) => [SID.get(id), o]).filter(([i, o]) => i != null && o.n >= 3).map(([i, o]) => [i, o.sum / o.n / 60, o]).filter(x => x[1] >= 1).sort((a, b) => b[1] - a[1]).slice(0, 8);
      if (sts.length) { const mx = sts[0][1]; h += `<h4>Estaciones con más retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar · al menos 3 mediciones</small>` + bars(sts.map(([i, m, o]) => ({ lab: `<span class="sn" data-gs="${i}">${esc(ST[i].n)}</span>`, w: m / mx, c: dlC(m), val: `${fmtMin(m)} <small>máx +${Math.round(o.max / 60)}</small>`, tip: `${ST[i].n}: ${o.n} mediciones hoy (foto cada 15 min) · ${o.d5} con 5 min o más · peor +${Math.round(o.max / 60)} min` }))); }
      const lns = Object.entries(H.lines || {}).filter(([f, o]) => FC[f] && o.n >= 3).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n);
      if (lns.length) h += `<h4>Líneas hoy</h4>` + bars(lns.map(([f, o]) => ({ lab: chipL(f), w: o.ok / o.n, c: PC[pctCls(o.ok / o.n * 100)], val: `${Math.round(o.ok / o.n * 100)}% <small>${fmtMin(o.sum / o.n / 60)}</small>`, tip: `${f} hoy: ${Math.round(o.ok / o.n * 100)}% de las mediciones puntuales · peor retraso +${Math.round(o.max / 60)} min` })));
      const age = H.upd ? (Date.now() - Date.parse(H.upd)) / 60000 : 0;
      h += `<small class="snote">${age > 40 ? `<b>Última foto ${ago(age < 90 ? Math.round(age) + ' min' : age < 2160 ? Math.round(age / 60) + ' h' : Math.round(age / 1440) + (window.__L === 'en' ? ' days' : window.__L === 'ca' ? ' dies' : ' días'))}</b> (GitHub a veces retrasa las tareas automáticas) · ` : ''}Foto cada 15 min del tiempo real de Renfe · actualizado ${esc((H.upd || '').slice(11, 16))} · ${(H.note || '').includes('Solo cuentan') ? 'solo cuentan los trenes con dato de retraso' : 'las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato'}</small>`;
    } else h += `<p class="snote">${HIST.at ? 'El histórico de hoy aún no está disponible: se va reuniendo cada 15 min.' : 'Cargando…'}</p>`;
    return h + '</div>';
  }
  // ---------- estado de una línea: todos sus trenes ahora, para consultar o contárselo a alguien ----------
  function lineHtml(f) {
    const S = nowState(), A = act.filter(a => (a.fam || (a.tr && a.tr.fam)) === f), real = A.filter(a => a.real), n = A.length;
    const late = A.filter(a => a.dl >= 5).length, ok = A.filter(a => a.dl < 3).length, stuck = A.filter(a => a.stop === 'via' || a.broke).length;
    const al = RT.alerts.filter(a => a.fams.has(f));
    const where = a => { const tr = a.tr; if (!tr) return ''; const v = a.v; if (a.real && v) { const nx = v.next >= 0 ? ST[tr.pat.stops[v.next]].n : ''; return v.atStop >= 0 ? `en ${ST[tr.pat.stops[v.atStop]].n}` : nx ? `hacia ${nx}` : ''; } const p = a.p; return p && p.next != null && p.next >= 0 ? `hacia ${ST[tr.pat.stops[p.next]].n}` : ''; };
    const rows = A.slice().sort((a, b) => b.dl - a.dl).slice(0, 40).map(a => { const tr = a.tr; return `<li class="go${isSel({ num: tr ? tr.num : a.v.num, tid: tr ? tr.tid : a.v.tid }) ? ' sel' : ''}" data-gt="${esc(tr ? tr.num : a.v.num)}|${esc(a.real ? a.v.tid : (tr ? tr.tid : ''))}"><b>${esc(tr ? tr.num : a.v.num)}</b><span>${tr ? dstP(ST[tr.pat.stops[tr.pat.stops.length - 1]].n, f) : ''} <small>${esc(where(a))}</small></span>${a.dl >= 1 ? `<em class="dl ${dlCls(a.dl)}">+${Math.round(a.dl)}</em>` : '<i class="via">en hora</i>'}</li>`; }).join('');
    const cv = famCov(f);
    return `<div class="tc sts" style="--c:${FC[f] || '#1d2330'}"><button class="x" data-cx>×</button><h3>${chipL(f)} Estado de la línea</h3><small>${S.live ? `Ahora · ${n} trenes${real.length < n ? ` (${real.length} con posición de Renfe)` : ''}` : `Según horario a las ${hhmm(S.min)}`}</small>
      <div class="kpis"><div class="kpi ${n ? pctCls(ok / n * 100) : ''}"><b>${n ? Math.round(ok / n * 100) + '%' : '—'}</b><span>puntuales</span></div><div class="kpi ${late ? (late / Math.max(1, n) > 0.2 ? 'b' : 'w') : 'g'}"><b>${late}</b><span>con 5 min<br>o más</span></div><div class="kpi ${stuck ? 'b' : 'g'}"><b>${stuck}</b><span>detenidos</span></div></div>
      ${al.length ? alertHtmlL(al) : '<p class="snote">✓ Sin avisos de Rodalies para esta línea</p>'}${cv < 0.7 ? `<p class="snote">Renfe solo da posición de ${Math.round(cv * 100)} % de los trenes de esta línea: el resto se muestra según horario.</p>` : ''}
      <small style="margin-top:6px">Trenes de más a menos retraso · toca uno para verlo</small><ol>${rows || '<li><span>No hay trenes de esta línea ahora</span></li>'}</ol>
      <div class="rtb"><button type="button" data-share>📤 Compartir estado</button></div></div>`;
  }
  const alertHtmlL = arr => `<div class="al">${arr.slice(0, 3).map(a => `<p>⚠️ ${srcB(a)} ${esc(a.txt)} <small>${whenTxt(a)}</small></p>`).join('')}</div>`;
  // ---------- columnas 3D: retraso medio por estación (hoy, o ahora si aún no hay histórico) ----------
  const COLS = { on: false, mesh: null };
  function colData() {
    const H = HIST.hoy, out = [];
    if (H && H.st) for (const [id, o] of Object.entries(H.st)) { const i = SID.get(id); if (i != null && o.n >= 2) out.push([i, o.sum / o.n / 60, o.n]); }
    if (!out.length) { const m = new Map(); act.forEach(a => { if (!a.real || !a.tr || a.v.next == null || a.v.next < 0 || a.v.pre || !RT.delays.has(a.v.tid)) return; const si = a.tr.pat.stops[a.v.next], o = m.get(si) || [0, 0]; o[0] += Math.max(0, a.dl); o[1]++; m.set(si, o); }); m.forEach((o, i) => out.push([i, o[0] / o[1], o[1]])); }
    return out;
  }
  // grosor de las columnas según el zoom: finas en la ciudad (estaciones juntas), más gruesas de lejos
  const colR = () => Math.min(1, Math.max(0.22, cur.dist / 110));
  function colsRadius() {
    if (!COLS.mesh || !COLS.d) return; const r = colR(); if (Math.abs(r - COLS.r) < 0.04) return; COLS.r = r;
    const M4 = new THREE.Matrix4(); COLS.d.forEach(([i, mn], k) => { M4.makeScale(r, r, 0.3 + Math.min(mn, 40) * 0.3); M4.setPosition(ST[i].w[0], ST[i].w[1], Z); COLS.mesh.setMatrixAt(k, M4); }); COLS.mesh.instanceMatrix.needsUpdate = true; invalidate();
  }
  function buildCols() {
    if (COLS.mesh) { scene.remove(COLS.mesh); COLS.mesh.geometry.dispose(); COLS.mesh.material.dispose(); COLS.mesh = null; }
    if (!COLS.on) { invalidate(); return; }
    const d = colData(); if (!d.length) { toast('Aún no hay datos de retraso por estación'); COLS.on = false; return; }
    const g = new THREE.CylinderGeometry(0.32, 0.32, 1, 16); g.rotateX(Math.PI / 2); g.translate(0, 0, 0.5);
    const m = new THREE.MeshBasicMaterial({ fog: false });
    const mesh = new THREE.InstancedMesh(g, m, d.length), M4 = new THREE.Matrix4(), col = new THREE.Color();
    COLS.d = d; COLS.r = colR();
    d.forEach(([i, mn], k) => { const h = 0.3 + Math.min(mn, 40) * 0.3; M4.makeScale(COLS.r, COLS.r, h); M4.setPosition(ST[i].w[0], ST[i].w[1], Z); mesh.setMatrixAt(k, M4); col.set(mn > 10 ? '#dc2626' : mn > 5 ? '#ea7a0c' : mn >= 1 ? '#eab308' : '#16a34a'); mesh.setColorAt(k, col); });
    mesh.renderOrder = 25; mesh.frustumCulled = false; scene.add(mesh); COLS.mesh = mesh;
    if (goal.tilt < 0.5) goal.tilt = 0.85;   // inclinar para que se vea el volumen
    invalidate();
  }
  const sbtn = document.createElement('button'); sbtn.type = 'button'; sbtn.id = 'sbtn'; sbtn.title = 'Estadísticas de puntualidad'; sbtn.innerHTML = '📊<span>Estadísticas</span>';
  sbtn.onclick = () => { selStats = !selStats; if (selStats) { selNews = selAlerts = false; HIST.at = 0; } /* el tren o la estación que tenías se conservan debajo */ mcs._h = ''; renderCard(); invalidate(); };
  document.body.appendChild(sbtn);
  function frameHook() {
    if ((cur.dist < 45) !== (lastDist < 45)) { lastDist = cur.dist; styleStations(); }
    colsRadius();
    placeStationLabels();
    placeMuniLabels();
  }
  // etiquetas de estaciones al acercarse
  const pool = [];
  const _v = new THREE.Vector3();
  function placeStationLabels() {
    let k = 0;
    if (COLS.on) {   // columnas de retraso: se rotulan las estaciones con más retraso que se ven en pantalla (sin pisarse)
      const d = colData().sort((a, b) => b[1] - a[1]), used = [];
      for (const [i, m] of d) { if (k >= 30) break; _v.set(ST[i].w[0], ST[i].w[1], Z).project(camera); if (_v.z > 1 || Math.abs(_v.x) > 1 || Math.abs(_v.y) > 1) continue; const x = (_v.x * 0.5 + 0.5) * innerWidth, y = (-_v.y * 0.5 + 0.5) * innerHeight; if (used.some(([ux, uy]) => Math.abs(ux - x) < 90 && Math.abs(uy - y) < 18)) continue; used.push([x, y]);
        const el = pool[k] || (pool[k] = Object.assign(document.createElement('div'), { className: 'slab' })); if (!el.isConnected) document.body.appendChild(el); el.textContent = ST[i].n + ' +' + Math.round(m) + '′'; el.dataset.i = i; el.style.display = 'block'; el.style.transform = `translate(${Math.round(x + 8)}px,${Math.round(y - 8)}px)`; k++; }
      for (; k < pool.length; k++) pool[k].style.display = 'none';
      return;
    }
    const show = cur.dist < 30;
    if (show) {
      const cand = [];
      for (let i = 0; i < NS; i++) { if (sSize[i] < 4) continue; _v.set(ST[i].w[0], ST[i].w[1], Z).project(camera); if (_v.z > 1 || Math.abs(_v.x) > 1.05 || Math.abs(_v.y) > 1.05) continue; cand.push([i, (_v.x * 0.5 + 0.5) * innerWidth, (-_v.y * 0.5 + 0.5) * innerHeight]); }
      if (cand.length <= 70) for (const [i, x, y] of cand) { const el = pool[k] || (pool[k] = Object.assign(document.createElement('div'), { className: 'slab' })); if (!el.isConnected) document.body.appendChild(el); el.textContent = ST[i].n; el.dataset.i = i; el.style.display = 'block'; el.style.transform = `translate(${Math.round(x + 8)}px,${Math.round(y - 7)}px)`; k++; }
    }
    for (; k < pool.length; k++) pool[k].style.display = 'none';
  }

  // ---------- tocar / pasar el ratón ----------
  function screen(w) { _v.set(w[0], w[1], Z).project(camera); return [(_v.x * 0.5 + 0.5) * innerWidth, (-_v.y * 0.5 + 0.5) * innerHeight, _v.z]; }
  function nearest(x, y, rt, rs) {
    let best = null, bd = rt * rt;
    for (const a of act) { const [sx, sy, z] = screen(a.p.w); if (z > 1) continue; const d = (sx - x) ** 2 + (sy - y) ** 2; if (d < bd) { bd = d; best = { a }; } }
    if (best) return best;
    bd = rs * rs;
    for (let i = 0; i < NS; i++) { if (!sSize[i]) continue; const [sx, sy, z] = screen(ST[i].w); if (z > 1) continue; const d = (sx - x) ** 2 + (sy - y) ** 2; if (d < bd) { bd = d; best = { s: i }; } }
    return best;
  }
  // ficha apartada con el dedo (deslizar a la izquierda): se queda oculta aunque se actualice cada segundo,
  // hasta que vuelvas a tocar un tren o una estación (en el mapa, en tus paneles o en la búsqueda)
  let CARDHID = false;
  window.__rodHide = () => { CARDHID = true; };
  document.addEventListener('click', e => { if (CARDHID && !e.target.closest('#mcs, canvas')) CARDHID = false; }, true);
  window.__rodTap = (x, y) => {
    let lb = null, ld = 1e9; for (const el of pool) { if (el.style.display === 'none') continue; const r = el.getBoundingClientRect(); if (x >= r.left - 4 && x <= r.right + 4 && y >= r.top - 4 && y <= r.bottom + 4) { const d = Math.abs(y - (r.top + r.bottom) / 2) * 4 + (x - r.left); if (d < ld) { ld = d; lb = el; } } } if (lb) { window.__rodPickStation(+lb.dataset.i); return true; }   // tocar el nombre = tocar la estación
    const h = nearest(x, y, 24, 18);
    if (h && (h.a || h.s != null)) CARDHID = false;
    if (h && (h.a || h.s != null)) BACK.st = -1;
    if (h && h.a) { selNews = false; selAlerts = false; selStats = false; selTrip = h.a.tr || { vtid: h.a.v.tid }; selStation = -1; follow = null; closeHome(); styleStations(); renderCard(); lastT = 0; invalidate(); return true; }
    if (h && h.s != null) { selNews = false; selAlerts = false; selStats = false; selStation = h.s; selTrip = null; follow = null; closeHome(); styleStations(); renderCard(); invalidate(); return true; }
    return false;
  };
  window.__rodHover = (x, y) => {
    const h = nearest(x, y, 14, 10);
    if (h && h.a) { const a = h.a, last = a.tr ? ST[a.tr.pat.stops[a.tr.pat.stops.length - 1]].n : ''; return `<b><span style="color:${a.c}">■</span> ${esc(a.fam || (a.tr && a.tr.fam) || '?')} · tren ${esc(a.tr ? a.tr.num : a.v.num)}</b><small>${last ? 'hacia ' + esc(last) : ''}${a.real ? (a.dl >= 1 ? ` · <b style="color:#c2410c">+${Math.round(a.dl)} min</b>` : ' · puntual') + ' · en directo' : ' · previsto'}</small>`; }
    if (h && h.s != null) return `<b>${esc(ST[h.s].n)}</b><small>${[...ST[h.s].fams].sort(natural).join(' · ')}</small>`;
    return null;
  };
  window.__rodPickStation = i => { BACK.st = -1; CARDHID = false; selNews = selAlerts = selStats = false; selTrip = null; follow = null; selStation = i; closeHome(); styleStations(); mcs._h = ''; renderCard(); invalidate(); };
  { const rc = $('#rc'), fit = () => { const top = rc.getBoundingClientRect().top; document.documentElement.style.setProperty('--mcsmax', Math.max(160, top - 64 - 10) + 'px'); }; try { new ResizeObserver(fit).observe(rc); } catch (e) {} addEventListener('resize', fit); setTimeout(fit, 300); }
  // actualización automática: comprueba si hay versión nueva al abrir y al volver a la app; si la hay, recarga sola una vez
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    let reloaded = false; const had = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (had && !reloaded) { reloaded = true; location.reload(); } });
    navigator.serviceWorker.register('./sw.js').then(r => { r.update().catch(() => {}); document.addEventListener('visibilitychange', () => { if (!document.hidden) r.update().catch(() => {}); }); }).catch(() => {});
  }
  setTimeout(() => { try { loadHist(); } catch (e) {} }, 2500); setInterval(() => { try { HIST.at = 0; loadHist(); } catch (e) {} }, 15 * 60000);   // historial para «¿suele ir tarde?»
  // ---------- modo noche: automático según el móvil, o elegido a mano ----------
  const THEME = { mode: (() => { try { return localStorage.getItem('rod_theme') || 'auto'; } catch (e) { return 'auto'; } })() };
  const mqDark = matchMedia('(prefers-color-scheme: dark)');
  function applyTheme() {
    const dark = THEME.mode === 'dark' || (THEME.mode === 'auto' && mqDark.matches);
    document.documentElement.classList.toggle('dark', dark);
    for (let i = 0; i < NS; i++) sFill.set(dark ? [0.06, 0.08, 0.11] : [1, 1, 1], i * 3); sGeo.attributes.fill.needsUpdate = true;
    sMat.uniforms.border.value.set(dark ? '#e7ebf3' : '#1d2330');
    if (window.__mapTheme) window.__mapTheme(dark);
    tbtn.textContent = THEME.mode === 'auto' ? (dark ? '🌙' : '☀️') : THEME.mode === 'dark' ? '🌙' : '☀️'; tbtn.title = 'Modo noche: ' + ({ auto: 'automático (como el móvil)', dark: 'siempre activado', light: 'desactivado' })[THEME.mode];
    const mc = document.querySelector('meta[name=theme-color]'); if (mc) mc.content = dark ? '#0d1119' : '#eef1f5';
    invalidate();
  }
  const tbtn = document.createElement('button'); tbtn.type = 'button'; tbtn.id = 'tbtn';
  tbtn.onclick = () => { THEME.mode = THEME.mode === 'auto' ? (mqDark.matches ? 'light' : 'dark') : THEME.mode === 'dark' ? 'light' : 'dark'; if ((THEME.mode === 'dark') === mqDark.matches) THEME.mode = 'auto'; try { localStorage.setItem('rod_theme', THEME.mode); } catch (e) {} applyTheme(); toast(tbtn.title); };
  document.body.appendChild(tbtn);
  // canal oficial de avisos de Rodalies en WhatsApp (solo enlace: WhatsApp no ofrece sus mensajes para leerlos desde una web)
  { const wa = document.createElement('a'); wa.id = 'wabtn'; wa.href = 'https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C'; wa.target = '_blank'; wa.rel = 'noopener';
    wa.title = 'Canal de avisos de Rodalies en WhatsApp'; wa.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg><span>Avisos WhatsApp</span>';
    document.body.appendChild(wa); }
  mqDark.addEventListener && mqDark.addEventListener('change', applyTheme);
  applyTheme();
  window.__rodTick = tick; window.__rodFrame = frameHook;
  window.__rodResize = () => { lmat.resolution.set(innerWidth, innerHeight); cmat.resolution.set(innerWidth, innerHeight); };
  window.__rodResize();

  // ---------- fichas ----------
  const stF = { st: -1, f: new Set() };   // filtro de líneas dentro de la ficha de estación
  const stChips = s => { const fs = [...ST[s].fams].sort(natural); return `<div class="sfc">${fs.length > 1 ? `<button type="button" data-sf="" class="${stF.f.size ? '' : 'on'}">Todas</button>` : ''}${fs.map(f => `<button type="button" data-sf="${esc(f)}" class="ln ${stF.f.size && !stF.f.has(f) ? 'off' : ''}${famOn.has(f) ? '' : ' hid'}" style="--c:${FC[f]}">${esc(f)}</button>`).join('')}</div>${fs.some(f => !famOn.has(f)) ? '<small>Las líneas apagadas en el filtro general no se muestran</small>' : ''}`; };
  // destino resaltado con el color de su línea (texto oscuro si el color es claro)
  const fgOn = hex => { const h = (hex || '#6b7385').replace('#', ''), r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16); return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62 ? '#1d2330' : '#fff'; };
  const dstP = (name, fam) => { const c = FC[fam] || '#6b7385'; return `<span class="dst" style="background:${c};color:${fgOn(c)}" title="${esc(fam || '')}">${esc(name)}</span>`; };
  const myIco = i => { const id = ST[i] && ST[i].id; return HOME.st.includes(id) ? '🏠 ' : WORK.st.includes(id) ? '💼 ' : ''; };
  // retrasos con los mismos colores que la urgencia: hasta 5 min leve (amarillo), hasta 10 moderado (naranja), más de 10 grave (rojo)
  const dlCls = m => m > 10 ? 'd-hi' : m > 5 ? 'd-md' : 'd-lo';
  // tren averiado: Rodalies lo dice en un aviso con su número, o lleva 5 min o más detenido en plena vía
  const BROKE = /aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i;
  // motivo del retraso: avisos de Rodalies que citan el número del tren ("… a causa de …")
  const WHY = { ref: null, m: new Map() };
  function whyOf(num) {
    if (WHY.ref !== RT.alerts) { WHY.ref = RT.alerts; WHY.m = new Map(); for (const x of RT.alerts) { if (x.src !== 'Rodalies') continue; const c = x.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i); for (const mm of (x.es || x.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g)) WHY.m.set(mm[1], { why: c ? c[1].trim().replace(/\s+/g, ' ') : '', txt: x.txt, when: x.when, cx: /no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(x.es || x.txt) }); } }
    return WHY.m.get(String(num)) || null;
  }
  const BK = { ref: null, m: new Map() };
  function brokenInfo(a) {
    const num = String(a.tr ? a.tr.num : a.v && a.v.num || ''); if (!num) return null;
    if (BK.ref !== RT.alerts) { BK.ref = RT.alerts; BK.m = new Map(); for (const x of RT.alerts) if (x.src === 'Rodalies' && BROKE.test(x.es || x.txt)) for (const mm of (x.es || x.txt).matchAll(/\b(\d{4,6})\b/g)) BK.m.set(mm[1], x); }
    const al = BK.m.get(num);
    if (al) return { why: 'aviso', txt: al.txt };
    if (a.real && a.stop === 'via' && a.v.still >= 300) return { why: 'via', min: Math.round(a.v.still / 60) };
    return null;
  }
  // ¿es esta salida el tren que tienes seleccionado en el mapa?
  const isSel = x => { try { const t = selTrip; if (!t) return false; return (t.num != null && String(t.num) === String(x.num)) || (x.tid && (t.tid === x.tid || t.vtid === x.tid)); } catch (e) { return false; } };
  const busHtml = (s, S) => { const bs = busesAt(s, S.min - 1, S.min + 240).sort((a, b) => a.est - b.est).slice(0, 6); return bs.length ? `<small style="margin-top:6px">🚌 Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${bs.map(x => `<li><b>${hhmm(x.est)}</b>${chipL(x.fam)}<span>${dstP(x.dest, x.fam)}</span><i class="via">bus</i></li>`).join('')}</ol>` : ''; };
  // ---------- tu tren de cada día y aviso al llegar ----------
  const FAV = (() => { try { return JSON.parse(localStorage.getItem('rod_fav') || '[]'); } catch (e) { return []; } })();
  const saveFav = () => { try { localStorage.setItem('rod_fav', JSON.stringify(FAV)); } catch (e) {} };
  const isFav = tr => !!tr && FAV.some(f => f.num === String(tr.num));
  let ALARM = (() => { try { const a = JSON.parse(localStorage.getItem('rod_alarm') || 'null'); return a && Date.now() - a.at < 4 * 3600e3 ? a : null; } catch (e) { return null; } })();
  const saveAlarm = () => { try { localStorage.setItem('rod_alarm', JSON.stringify(ALARM)); } catch (e) {} };
  const isAlarm = (tr, i) => !!(ALARM && tr && ALARM.num === String(tr.num) && ALARM.sid === ST[tr.pat.stops[i]].id);
  function buzz(title, body) {
    try { window.__vib ? window.__vib() : navigator.vibrate && navigator.vibrate([400, 150, 400, 150, 600]); } catch (e) {}
    toast(title + ' · ' + body);
    if (!document.hidden) return;   // con la app delante basta con vibrar (sin notificación ni sonido)
    if ('Notification' in window && Notification.permission === 'granted') (navigator.serviceWorker && navigator.serviceWorker.getRegistration ? navigator.serviceWorker.getRegistration() : Promise.resolve(null)).then(r => r ? r.showNotification(title, { body, tag: 'alarm', requireInteraction: true, vibrate: [400, 150, 400, 150, 600], icon: 'icons/icon-192.png' }) : new Notification(title, { body })).catch(() => {});
  }
  function checkAlarm() {
    if (!ALARM || ALARM.done) return; const S = nowState(); if (!S.live) return;
    const k = R.days.indexOf(S.ymd), tr = (byDay[k] || []).find(t => String(t.num) === ALARM.num) || (byDay[k - 1] || []).find(t => String(t.num) === ALARM.num); if (!tr) return;
    const i = tr.pat.stops.findIndex(si => ST[si].id === ALARM.sid); if (i < 0) return;
    const d = delayOf(tr), dl = typeof d === 'number' ? Math.max(0, d / 60) : 0, off = tr.day === k - 1 ? 1440 : 0, eta = tr.t0 + tr.pat.t[2 * i] + dl - off;
    if (eta - S.min < -3) { ALARM.done = true; saveAlarm(); return; }   // ya pasó: no avisar tarde
    // en la app: aviso nativo programado 2 min antes, por si la pantalla está bloqueada (se reprograma si cambia el retraso)
    if (window.__schedAt && (ALARM.sch == null || Math.abs(ALARM.sch - eta) >= 0.5)) { ALARM.sch = eta; saveAlarm(); window.__schedAt(7701, `🚉 Llegas a ${ST[tr.pat.stops[i]].n}`, 'Prepárate para bajar' + ` (${hhmm(eta)})`, Date.now() + (eta - 2 - S.min) * 60000); }
    if (eta - S.min <= 2) { ALARM.done = true; saveAlarm(); if (window.__schedOff) window.__schedOff(7701); buzz(`🚉 Llegas a ${ST[tr.pat.stops[i]].n}`, `En unos ${Math.max(0, Math.round(eta - S.min))} min (${hhmm(eta)}) · prepárate para bajar`); }
  }
  // tus trenes de cada día: aviso si van con retraso (una vez al día por tren y retraso)
  // tu tren de cada día: se busca por número y, si ese día cambia, por línea + estación + hora (±10 min) + mismo destino
  function favTrip(f, k) {
    const hm = +f.t.slice(0, 2) * 60 + +f.t.slice(3, 5), arr = byDay[k] || [];
    const at = (tr, i) => tr.t0 + tr.pat.t[2 * i + 1];
    let best = null, bd = 11;
    for (const tr of arr) { const i = tr.pat.stops.findIndex(si => ST[si].id === f.sid); if (i < 0 || i === tr.pat.stops.length - 1) continue;
      const dd = Math.abs(at(tr, i) - hm) + (String(tr.num) === f.num ? -5 : 0) + (tr.fam === f.fam ? 0 : 20) + (f.dest && ST[tr.pat.stops[tr.pat.stops.length - 1]].id !== f.dest ? 3 : 0);
      if (dd < bd) { bd = dd; best = tr; } }
    return best;
  }
  const FAVN = new Set();
  function checkFavs() {
    if (!FAV.length) return; const S = nowState(); if (!S.live) return; const k = R.days.indexOf(S.ymd);
    for (const f of FAV) { const tr = favTrip(f, k); if (!tr) continue; const i = tr.pat.stops.findIndex(si => ST[si].id === f.sid); if (i < 0) continue;
      const dep = tr.t0 + tr.pat.t[2 * i + 1], d = delayOf(tr), dl = typeof d === 'number' ? d / 60 : 0, until = dep - S.min;
      if (until < -2 || until > 60) continue;
      const key = S.ymd + f.num + (d === 'X' ? 'X' : dl >= 10 ? 10 : dl >= 5 ? 5 : 0); if (FAVN.has(key)) continue;
      if (d === 'X' || dl >= 5) { FAVN.add(key); buzz(`⭐ Tu tren de las ${hhmm(dep)} ${d === 'X' ? 'está cancelado' : `va con +${Math.round(dl)} min`}`, `${tr.fam} ${tr.num} desde ${ST[tr.pat.stops[i]].n}${d === 'X' ? '' : ` · saldrá hacia las ${hhmm(dep + dl)}`}`); }
      else if (until <= 20 && !FAVN.has(S.ymd + f.num + 'ok') && RT.vp.has(tr.tid)) { FAVN.add(S.ymd + f.num + 'ok'); toast(`⭐ Tu tren de las ${hhmm(dep)} va en hora`); }
    }
  }
  setInterval(() => { try { checkAlarm(); checkFavs(); } catch (e) {} }, 15000);
  const chipL = f => `<span class="ln" style="--c:${FC[f]}">${esc(f)}</span>`;
  // colores de línea claros (R1, R2N, R4…): texto oscuro en sus etiquetas para que se lean (con blanco no llegan a contraste 3:1)
  { const lum = h => { const m = /^#?([0-9a-f]{6})$/i.exec(h || ''); if (!m) return 0; return [0, 2, 4].map(i => { let v = parseInt(m[1].slice(i, i + 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0); };
    const css = [...new Set(Object.values(FC))].filter(c => lum(c) > 0.3).map(c => `.ln[style*="--c:${c}"],[data-f][style*="--c:${c}"].on,[data-f][style*="--c:${c}"]:not(.off){color:#14203a!important}`).join('');
    if (css) { const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st); } }
  function lateTxt(d, live_) { if (!live_) return '<span class="st sch">Según horario · sin dato en directo</span>'; if (d === 'X') return '<span class="st late">Cancelado</span>'; return d >= 60 ? `<span class="st late ${dlCls(d / 60)}">Retraso de ${Math.round(d / 60)} min</span>` : '<span class="st ok">Puntual</span>'; }
  function peekH() { if (!mcs.classList.contains('peek') || window.__mapHidden || !mcs.getClientRects().length) return; /* oculta (otra pestaña) mide 0: no se toca */ const tc = mcs.querySelector('.tc'); if (!tc) return; const st = tc.querySelector('.st') || tc.querySelector('p'); const top = mcs.getBoundingClientRect().top - mcs.scrollTop; let h = st ? st.getBoundingClientRect().bottom - top + 3 : 150; if (st) { let nx = st.nextElementSibling || (st.parentElement !== tc && st.parentElement.nextElementSibling); if (nx) h = Math.min(h, nx.getBoundingClientRect().top - top - 1); } mcs.style.setProperty('--peekh', Math.round(Math.min(280, Math.max(110, h))) + 'px'); }
  function renderCard() { try { renderCard0(); } finally { if (window.__rodTabSync) window.__rodTabSync(); try { peekH(); } catch (e) {} } }
  function renderCard0() {
    if (!selTrip && selStation < 0 && !selAlerts && !selNews && !selStats && !selLine) { CARDHID = false; mcs.innerHTML = ''; mcs._h = ''; mcs.style.display = 'none'; mcs.classList.remove('peek'); syncCompact(); return; }
    const S = nowState(); let h = ''; const useLive = live() && S.live;
    const alertsFor = (fams, stop) => RT.alerts.filter(a => [...a.fams].some(f => fams.has(f)) || (stop != null && a.stops.has(stop)));
    const alertHtml = arr => arr.length ? `<div class="al">${arr.slice(0, 4).map(a => `<p>⚠️ ${srcB(a)} ${[...a.fams].sort(natural).slice(0, 6).map(chipL).join(' ')} ${esc(a.txt)} <small>${whenTxt(a)}</small></p>`).join('')}${arr.length > 4 ? `<small>y ${arr.length - 4} avisos más</small>` : ''}</div>` : '';
    const la = selTrip && useLive ? act.find(a => a.real && (selTrip.vtid ? a.v.tid === selTrip.vtid : a.tr === selTrip)) : null;
    if (selLine && !selStats && !selNews && !selAlerts && !selTrip && selStation < 0) {
      h = lineHtml(selLine);
    } else if (selStats) {
      h = statsHtml();
    } else if (selNews) {
      h = `<div class="tc" style="--c:#1d2330"><button class="x" data-cx>×</button><h3>Novedades</h3><small>${esc($('#ver').firstChild.textContent)}</small><ul class="chg">${$('#chg').innerHTML || '<li>Versión de prueba</li>'}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> · horarios (GTFS), posición de los trenes y retrasos (GTFS-RT) · <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> · licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) · salidas con vía, cancelaciones y avisos · <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> · incidencias en la infraestructura de Cataluña · <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> · © Adif</li>
        <li><b>OpenStreetMap</b> · trazado de las vías · <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estación.</small></div>`;
    } else if (selAlerts) {
      const arr = RT.alerts.filter(a => [...a.fams].some(f => famOn.has(f)) || !a.fams.size);
      h = `<div class="tc" style="--c:#c2410c"><button class="x" data-cx>×</button><h3>Avisos e incidencias</h3><small>${arr.length} avisos activos para las líneas que tienes visibles</small>${arr.map(a => `<div class="al"><p>${srcB(a)} ${[...a.fams].sort(natural).map(chipL).join(' ')} <small>${whenTxt(a)}</small></p><p>${esc(a.txt)}</p></div>`).join('') || '<p>Sin avisos activos.</p>'}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la vía de Adif (gestor de la infraestructura)${RT.alertsTs && Date.now() / 1000 - RT.alertsTs < 6 * 3600 ? ' y de Renfe' : ` · los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${RT.alertsTs ? new Date(RT.alertsTs * 1000).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : '—'}`}</small></div>`;
    } else if (la) {
      const v = la.v, tr = la.tr, nm = i => esc(ST[tr.pat.stops[i]].n), n = tr ? tr.pat.stops.length : 0, sidx = SID.get(v.sid), sName = sidx != null ? esc(ST[sidx].n) : esc(v.sid);
      const near = tr && v.atStop >= 0 ? nm(v.atStop) : '', nxt = tr && v.next >= 0 ? nm(v.next) : sName, prv = tr && v.next > 0 ? nm(v.next - 1) : '';
      const bk = la.broke || brokenInfo(la);
      const stTxt = bk ? `<b class="stopv">⚠️ ${bk.why === 'aviso' ? 'Tren averiado según Rodalies' : `Posible avería: detenido en la vía desde hace ${bk.min} min`}</b>${tr && prv ? ` · entre ${prv} y <b>${nxt}</b>` : ''}` : la.stop === 'via' && tr ? `<b class="stopv">⏸ Detenido</b> ${prv ? `entre ${prv} y <b>${nxt}</b>` : `antes de <b>${nxt}</b>`} desde hace ${Math.max(1, Math.round(v.still / 60))} min` : v.pre && tr ? (v.prevTr ? `Aún no ha empezado este viaje. Está terminando el tren <b>${esc(v.prevTr.num)}</b> hacia <b>${nm(0)}</b>${v.prevDl >= 1 ? ` con <b>+${Math.round(v.prevDl)} min</b>` : ''}: llega hacia las <b>${hhmm(v.arrO)}</b> y saldría hacia las <b>${hhmm(v.depEst)}</b>${v.preDl >= 1 ? ` (horario ${hhmm(v.dep0)})` : ''}` : `Aún no ha empezado este viaje: va hacia <b>${nm(0)}</b>, de donde sale a las <b>${hhmm(v.dep0 + la.dl)}</b>`) : near && v.before ? `Llegando a <b>${near}</b>` : (v.st === 'STOPPED_AT' || la.stop === 'st') && near ? `Parado en <b>${near}</b>` : near && v.next >= 0 && v.atStop !== v.next ? `Saliendo de <b>${near}</b> hacia <b>${nxt}</b>` : prv ? `Entre ${prv} y <b>${nxt}</b>` : `Hacia <b>${nxt}</b>`;
      const eta = tr && v.next >= 0 && !v.pre ? hhmm(cardEta(tr, v, v.next, tr.t0 + tr.pat.t[2 * v.next] + la.dl)) : '';   // misma hora que la lista de paradas
      const rows = [];
      if (tr) { const i0 = la.idx >= 0 ? la.idx : 0, D = v.pre ? Math.max(la.dl, v.preDl || 0) : la.dl, T = i => tr.t0 + tr.pat.t[i] + D; for (let i = i0; i < n; i++) rows.push(`<li class="${myIco(tr.pat.stops[i]) ? 'mine' : ''}${isAlarm(tr, i) ? ' alm' : ''}"><b>${hhmm(cardEta(tr, v, i, T(i === 0 ? 1 : 2 * i)))}</b><span title="${nm(i)}">${myIco(tr.pat.stops[i])}${nm(i)}</span>${D >= 1 ? `<em class="dl ${dlCls(D)}">${v.pre ? '≈' : ''}+${Math.round(D)}</em>` : ''}${i > 0 ? `<button type="button" class="abtn" data-alarm="${i}" title="${'Avísame 2 min antes de llegar aquí'}">${isAlarm(tr, i) ? '🔔' : '🔕'}</button>` : ''}</li>`); }
      h = `<div class="tc" style="--c:${la.c}"><button class="x" data-cx>×</button><div>${chipL(la.fam)}<b>Tren ${esc(tr ? tr.num : v.num)}</b> <span class="lv">● en directo</span></div>${tr ? `<h3 class="rt"><span class="o" title="${nm(0)}">${nm(0)}</span><span class="ar">→</span>${dstP(ST[tr.pat.stops[n - 1]].n, tr.fam)}</h3>` : ''}
        <p>${stTxt}${eta ? ` · prevista ${eta}` : ''}${v.plat && v.st === 'STOPPED_AT' && near ? ` · <b>vía ${esc(v.plat)}</b>` : ''}</p><p>${v.pre && v.prevTr ? (v.preDl >= 1 ? `<span class="st late">Saldrá con unos ${Math.round(v.preDl)} min de retraso (estimado)</span>` : '<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>') : lateTxt(RT.delays.get(v.tid), RT.delays.has(v.tid))}${(() => { const th = tr && trainHist(tr.num); return th && th.n >= 2 ? `<span class="thist">📊 Últimos ${th.n} días: ${th.late ? `${'en'} <b>${th.late} ${'de'} ${th.n} ${'días'}</b> ${'llevó 5 min o más de retraso'}` : '<b>ningún día con 5 min o más</b>'} · ${'retraso típico'} ${th.avg < 0.5 ? '0' : '+' + Math.round(th.avg)} min</span>` : ''; })()}${(() => { const w = tr && whyOf(tr.num); return w ? `<span class="why" title="${esc(w.txt)}">${w.why ? 'Motivo: ' + esc(w.why) : 'Rodalies ha publicado un aviso de este tren'}</span>` : ''; })()}</p>
        <small>${v.pre ? `Renfe ya le pone el número de su próximo viaje. Posición real enviada ${ago(dur(la.age))}` : v.est ? 'Renfe da una posición que no encaja con su recorrido: se muestra donde debería estar según el horario y su retraso' : `Posición enviada por Renfe ${ago(dur(la.age))}${la.age > 120 ? ' · <b>sin actualizar</b>' : ''}`}</small>
        ${rows.length ? `${la.dl >= 1 || (v.pre && v.preDl >= 1) ? `<small style="margin-top:6px">Horas con el retraso actual</small>` : ''}<ol class="stops">${rows.join('')}</ol>` : ''}${alertHtml(alertsFor(new Set([la.fam])))}
        ${crowdHtml(tr ? tr.num : v.num, '', la.fam)}${tr ? `<div class="rtb two"><button type="button" data-fav>${isFav(tr) ? '⭐ Es tu tren de cada día' : '☆ Mi tren de cada día'}</button><button type="button" data-follow>${follow === tr ? 'Dejar de seguir' : 'Seguir este tren'}</button></div>` : ''}</div>`;
    } else if (selTrip && useLive && !selTrip.pat) {
      h = `<div class="tc" style="--c:#6b7385"><button class="x" data-cx>×</button><h3>Tren ${esc(selTrip.num || selTrip.vtid || '')}</h3><p>Renfe no da ahora la posición de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;
    } else if (selTrip) {
      const tr = selTrip, P = tr.pat, n = P.stops.length, d = delayOf(tr), dl = typeof d === 'number' ? d / 60 : 0, k = R.days.indexOf(S.ymd), off = tr.day === k - 1 ? 1440 : 0;
      const rel = S.min + off - tr.t0 - dl, p = posAt(tr, rel), T = i => tr.t0 + P.t[i] + dl;
      const nm = i => esc(ST[P.stops[i]].n);
      let state = 'Fuera de servicio ahora';
      if (p) state = p.moving ? `Circulando hacia <b>${nm(p.next)}</b> · llega ${hhmm(T(2 * p.next))}` : (p.at === n - 1 ? `Ha llegado a <b>${nm(n - 1)}</b>` : `Parado en <b>${nm(p.at)}</b> · sale ${hhmm(T(2 * p.at + 1))}`);
      const nx = p ? p.next : 0, rows = [];
      for (let i = nx; i < n; i++) rows.push(`<li class="${myIco(P.stops[i]) ? 'mine' : ''}${isAlarm(tr, i) ? ' alm' : ''}"><b>${hhmm(cardEta(tr, null, i, T(2 * i)))}</b><span title="${nm(i)}">${myIco(P.stops[i])}${nm(i)}</span>${dl >= 1 ? `<em class="dl ${dlCls(dl)}">+${Math.round(dl)}</em>` : ''}${i > 0 ? `<button type="button" class="abtn" data-alarm="${i}" title="${'Avísame 2 min antes de llegar aquí'}">${isAlarm(tr, i) ? '🔔' : '🔕'}</button>` : ''}</li>`);
      h = `<div class="tc" style="--c:${tr.c}"><button class="x" data-cx>×</button><div>${chipL(tr.fam)}<b>Tren ${esc(tr.num)}</b> <span class="pv">previsión</span></div><h3 class="rt"><span class="o" title="${nm(0)}">${nm(0)}</span><span class="ar">→</span>${dstP(ST[tr.pat.stops[n - 1]].n, tr.fam)}</h3>
        <p>${state}</p><p>${lateTxt(d, d != null)}${(() => { const th = trainHist(tr.num); return th && th.n >= 2 ? `<span class="thist">📊 Últimos ${th.n} días: ${th.late ? `${'en'} <b>${th.late} ${'de'} ${th.n} ${'días'}</b> ${'llevó 5 min o más de retraso'}` : '<b>ningún día con 5 min o más</b>'} · ${'retraso típico'} ${th.avg < 0.5 ? '0' : '+' + Math.round(th.avg)} min</span>` : ''; })()}</p><small>Sale ${hhmm(tr.t0 + P.t[1])} · llega ${hhmm(tr.t0 + P.t[2 * n - 2])} (horario)</small>
        ${dl >= 1 ? '<small style="margin-top:6px">Horas con el retraso actual</small>' : ''}<ol class="stops">${rows.join('')}</ol>${crowdHtml(tr.num, '', tr.fam)}<div class="rtb two"><button type="button" data-fav>${isFav(tr) ? '⭐ Es tu tren de cada día' : '☆ Mi tren de cada día'}</button><button type="button" data-follow>${follow === tr ? 'Dejar de seguir' : 'Seguir este tren'}</button></div></div>`;
    } else {
      const s = selStation, k = R.days.indexOf(S.ymd), deps = [];
      if (stF.st !== s) { stF.st = s; stF.f.clear(); }
      const okF = f => (!FC[f] || famOn.has(f)) && (!stF.f.size || stF.f.has(f));
      if (k >= 0) {
        const scan = (arr, off) => { for (const tr of arr) { if (!okF(tr.fam)) continue; const i = tr.pat.stops.indexOf(s); if (i < 0 || i === tr.pat.stops.length - 1) continue; const d = delayOf(tr), dl = typeof d === 'number' ? d / 60 : 0, t = tr.t0 + tr.pat.t[2 * i + 1] - off; if (t + dl < S.min - 1 || t > S.min + 360) continue; deps.push({ tr, t, dl, d, on: RT.vp.has(tr.tid), past: S.min > tr.t0 + tr.pat.t[1] - off + 2 }); } };
        scan(byDay[k], 0); if (k > 0) scan(byDay[k - 1], 1440);
      }
      deps.sort((a, b) => a.t + a.dl - b.t - b.dl);
      // salidas oficiales en directo de Rodalies (andén, cancelaciones, observaciones)
      const sid = ST[s].id, OD = DEPS.get(sid);
      const offOk = (useLive || rtDown() && S.live) && RT.url;
      if (offOk && (!OD || Date.now() - OD.at > 30000) && !OD?.loading) {
        DEPS.set(sid, { ...(OD || {}), loading: true, at: OD ? OD.at : 0 });
        get(RT.url.replace(/\/+$/, ''), '/departures.json?stationId=' + sid).then(d => { DEPS.set(sid, { at: Date.now(), d }); if (selStation === s) { mcs._h = ''; renderCard(); } }).catch(() => DEPS.set(sid, { at: Date.now(), err: 1 }));
      }
      const off = offOk && OD && OD.d && Array.isArray(OD.d.trains) && OD.d.trains.length ? OD.d.trains : null;   // vacía: horario
      if (off) {
        const byNum = new Map([...RT.vp.values()].map(v => [String((TID.get(v.tid) || {}).num || v.num), v]));
        // misma hora y mismo retraso que en Ahora (la hora oficial ya lleva el retraso); los que ya pasaron se apagan
        const DF = new Map(departuresFor(s).map(y => [String(y.num), y]));
        const rows = off.filter(x => okF((x.line || {}).id || '')).slice(0, 40).map(x => {
          const num = String(x.commercialNumber || x.technicalNumber || ''), y = DF.get(num), t = y ? hhmm(y.est) : (x.departureDateHourSelectedStation || '').slice(11, 16), f = (x.line || {}).id || '', v = byNum.get(num), d = y ? Math.round(y.dl) * 60 : v ? RT.delays.get(v.tid) : null;
          const old = y && (y.gone || (!y.live && y.est < S.min - 1));
          return `<li class="go${old ? ' old' : ''}${isSel({ num, tid: v ? v.tid : '' }) ? ' sel' : ''}" data-gt="${esc(num)}|${v ? esc(v.tid) : ''}"><b>${esc(t)}</b>${FC[f] ? chipL(f) : `<span class="ln" style="--c:#6b7385">${esc(f || '?')}</span>`}<span>${dstP((x.destinationStation || {}).name || '', f)}${x.trainObservations ? ` · <i>${esc(x.trainObservations)}</i>` : ''}${old ? ` <small class="oldt">${y.gone ? 'ya ha salido' : 'hora pasada · sin dato en directo'}</small>` : ''}</span>${x.trainCancelled ? '<em>cancelado</em>' : typeof d === 'number' && d >= 60 ? `<em class="dl ${dlCls(d / 60)}">+${Math.round(d / 60)}</em>` : ''}${x.platformSelectedStation ? `<i class="via">vía ${esc(x.platformSelectedStation)}</i>` : ''}${v ? '<i class="lvd" title="circulando, posición real">●</i>' : '<i class="lvd ph">●</i>'}</li>`;
        }).join('');
        h = `<div class="tc" style="--c:#1d2330"><button class="x" data-cx>×</button><h3>${esc(ST[s].n)}</h3>${stChips(s)}${crowdHtml('', ST[s].id, '')}
          <small style="margin-top:6px">Próximas salidas oficiales de Rodalies · hora prevista · <span class="lvk">●</span> tren circulando</small>
          <ol>${rows || '<li><span>Rodalies no anuncia salidas ahora mismo</span></li>'}</ol>${busHtml(s, S)}${alertHtml(alertsFor(ST[s].fams, s))}<div class="rtb two"><button type="button" data-sethome="home">🏠 Es mi casa</button><button type="button" data-sethome="work">💼 Es mi trabajo</button></div></div>`;
      } else
      h = `<div class="tc" style="--c:#1d2330"><button class="x" data-cx>×</button><h3>${esc(ST[s].n)}</h3>${stChips(s)}${crowdHtml('', ST[s].id, '')}
        <small style="margin-top:6px">${useLive && RT.url ? 'Cargando salidas oficiales… mientras, ' : ''}Próximas salidas${useLive ? ' · hora prevista con el retraso actual · <span class="lvk">●</span> tren circulando' : ' · previsión según horario (sin tiempo real)'}</small>
        <ol>${deps.slice(0, 40).map(x => `<li class="go${isSel({ num: x.tr.num, tid: x.tr.tid }) ? ' sel' : ''}" data-gt="${esc(x.tr.num)}|${esc(x.tr.tid)}"><b>${hhmm(x.t + x.dl)}</b>${chipL(x.tr.fam)}<span>${dstP(ST[x.tr.pat.stops[x.tr.pat.stops.length - 1]].n, x.tr.fam)}</span>${x.d === 'X' ? '<em>cancelado</em>' : x.dl >= 1 ? `<em class="dl ${dlCls(x.dl)}">+${Math.round(x.dl)}</em>` : ''}${useLive ? (x.on ? '<i class="lvd" title="circulando, posición real">●</i>' : x.past ? '<i class="nos" title="debería haber salido y Renfe no da su posición">sin señal</i>' : '<i class="lvd ph">●</i>') : ''}</li>`).join('') || '<li><span>No hay salidas en las próximas 6 horas</span></li>'}</ol>${busHtml(s, S)}${alertHtml(alertsFor(ST[s].fams, s))}<div class="rtb two"><button type="button" data-sethome="home">🏠 Es mi casa</button><button type="button" data-sethome="work">💼 Es mi trabajo</button></div></div>`;
    }
    const keep = mcs.scrollTop; if (mcs._h !== h) { mcs.innerHTML = h; mcs._h = h; mcs.scrollTop = keep; } mcs.style.display = 'flex'; mcs.classList.toggle('min', CARDHID);
    syncCompact();
    // en el móvil la ficha se puede encoger para ver el mapa (se encoge sola al seguir un tren)
    if (innerWidth <= 640) { const tc = mcs.querySelector('.tc'); if (tc && !tc.querySelector('.mn')) { const b = document.createElement('button'); b.type = 'button'; b.className = 'mn'; b.setAttribute('aria-label', 'Encoger o ampliar la ficha'); b.textContent = mcs.classList.contains('peek') ? '▴' : '▾'; b.onclick = e => { e.stopPropagation(); mcs.classList.toggle('peek'); peekH(); b.textContent = mcs.classList.contains('peek') ? '▴' : '▾'; mcs.scrollTop = 0; }; const x = tc.querySelector('.x'); tc.insertBefore(b, x ? x.nextSibling : tc.firstChild); } } else mcs.classList.remove('peek');
    const rc = $('#rc'); if (innerWidth <= 640 && !rc.classList.contains('min') && !renderCard.done) { renderCard.done = 1; $('#rcgrab').click(); }
    const sm = innerWidth <= 640;
    if (sm) { const ib = $('#inf').getBoundingClientRect().bottom; mcs.style.top = Math.round(ib + 8) + 'px'; mcs.style.width = 'calc(100vw - 76px)'; mcs.style.maxHeight = Math.max(140, $('#rc').getBoundingClientRect().top - ib - 16) + 'px'; }
    else if (innerHeight <= 500) { const ib = $('#inf').getBoundingClientRect().bottom; mcs.style.top = Math.round(ib + 8) + 'px'; mcs.style.width = 'min(290px, 40vw)'; mcs.style.maxHeight = (innerHeight - ib - 20) + 'px'; }
    else { mcs.style.top = ''; mcs.style.width = selStats ? '390px' : '300px'; mcs.style.maxHeight = ''; }
    const x = mcs.querySelector('[data-cx]'); if (x) x.onclick = e => { e.stopPropagation(); renderCard.done = 0; if (selStats || selNews || selAlerts || (selLine && !selTrip && selStation < 0)) { selStats = selNews = selAlerts = false; if (!(selTrip || selStation >= 0)) selLine = ''; mcs._h = ''; renderCard(); invalidate(); return; } /* cerrar estadísticas, avisos o novedades devuelve a la ficha que tenías */
      if (selTrip && BACK.st >= 0) { const b = BACK.st; BACK.st = -1; selTrip = null; follow = null; selStation = b; styleStations(); mcs._h = ''; renderCard(); lastT = 0; invalidate(); return; }   // tren abierto desde una estación: se vuelve a la estación
      BACK.st = -1; selAlerts = false; selNews = false; selStats = false; selTrip = null; selStation = -1; follow = null; styleStations(); renderCard(); lastT = 0; invalidate(); };
    bindCrowd(mcs);
    mcs.querySelectorAll('[data-alarm]').forEach(b => b.onclick = e => { e.stopPropagation(); const tr = selTrip && selTrip.pat ? selTrip : (TID.get(selTrip && selTrip.vtid) || null); if (!tr) return; const i = +b.dataset.alarm, sid = ST[tr.pat.stops[i]].id;
      if (ALARM && ALARM.num === String(tr.num) && ALARM.sid === sid) { ALARM = null; if (window.__schedOff) window.__schedOff(7701); toast('Aviso de llegada quitado'); } else { ALARM = { num: String(tr.num), sid, at: Date.now() }; toast(`🔔 Te aviso 2 min antes de llegar a ${ST[tr.pat.stops[i]].n}`); if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission(); }
      saveAlarm(); mcs._h = ''; renderCard(); });
    { const fb2 = mcs.querySelector('[data-fav]'); if (fb2) fb2.onclick = e => { e.stopPropagation(); const tr = selTrip && selTrip.pat ? selTrip : (TID.get(selTrip && selTrip.vtid) || null); if (!tr) return; const i = FAV.findIndex(f => f.num === String(tr.num));
      if (i >= 0) { FAV.splice(i, 1); toast('Quitado de tus trenes de cada día'); } else { const mine = [...HOME.st, ...WORK.st, ...NEAR.st]; const si = tr.pat.stops.find(x => mine.includes(ST[x].id)) ?? tr.pat.stops[0]; FAV.push({ num: String(tr.num), fam: tr.fam, sid: ST[si].id, dest: ST[tr.pat.stops[tr.pat.stops.length - 1]].id, t: hhmm(tr.t0 + tr.pat.t[2 * tr.pat.stops.indexOf(si) + 1]) }); toast(`⭐ Te avisaré si el ${tr.fam} de las ${FAV[FAV.length - 1].t} desde ${ST[si].n} va con retraso`); if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission(); }
      saveFav(); mcs._h = ''; renderCard(); renderHome(true); }; }
    { const sb = mcs.querySelector('[data-share]'); if (sb) sb.onclick = () => { const f = selLine, A = act.filter(a => (a.fam || (a.tr && a.tr.fam)) === f), late = A.filter(a => a.dl >= 5).sort((a, b) => b.dl - a.dl); const al = RT.alerts.filter(a => a.fams.has(f));
      const txt = `${f} a las ${hhmm(nowState().min)}: ${A.length} trenes, ${late.length} con 5 min o más${late.length ? ' (' + late.slice(0, 4).map(a => `${a.tr ? a.tr.num : a.v.num} +${Math.round(a.dl)}`).join(', ') + ')' : ''}.${al.length ? ' Aviso: ' + al[0].txt : ' Sin avisos.'}`;
      if (navigator.share) navigator.share({ text: txt }).catch(() => {}); else { navigator.clipboard && navigator.clipboard.writeText(txt); toast('Copiado: ' + txt.slice(0, 60) + '…'); } }; }
    { const cb = mcs.querySelector('[data-cols]'); if (cb) cb.onclick = () => { COLS.on = !COLS.on; buildCols(); mcs._h = ''; renderCard(); }; }
    mcs.querySelectorAll('[data-gs]').forEach(e => e.onclick = () => { const i = +e.dataset.gs; selStats = false; window.__rodPickStation(i); Object.assign(goal, { tx: ST[i].w[0], ty: ST[i].w[1], dist: Math.min(goal.dist, 20) }); invalidate(); });
    mcs.querySelectorAll('[data-sf]').forEach(b => b.onclick = e => { e.stopPropagation(); const f = b.dataset.sf; if (!f) stF.f.clear(); else if (stF.f.has(f)) stF.f.delete(f); else stF.f.add(f); mcs._h = ''; renderCard(); });
    mcs.querySelectorAll('[data-gt]').forEach(li => li.onclick = () => { BACK.st = selStation; const [num, tid] = li.dataset.gt.split('|'); const tr = TID.get(tid); goTrain({ num, tid: RT.vp.has(tid) ? tid : '', tr: tr || null }); });
    mcs.querySelectorAll('[data-sethome]').forEach(b => b.onclick = () => setHome(selStation, b.dataset.sethome));
    const fb = mcs.querySelector('[data-follow]'); if (fb) fb.onclick = () => { follow = follow === selTrip ? null : selTrip; if (follow) { goal.dist = Math.min(goal.dist, 22); if (innerWidth <= 640) { mcs.classList.add('peek'); mcs.scrollTop = 0; const rc = $('#rc'); if (!rc.classList.contains('min')) $('#rcgrab').click(); } } else mcs.classList.remove('peek'); mcs._h = ''; renderCard(); invalidate(); };
  }
  window.__rodCard = renderCard;
  // ventana de información plegable (se recuerda) y novedades de la versión
  try { const v = localStorage.getItem('rod_inf'); if (v === 'mini' || v == null) $('#inf').classList.add('mini'); } catch (e) {}   // en el móvil, plegado la primera vez
  $('#inft').onclick = () => { const m = $('#inf').classList.toggle('mini'); try { localStorage.setItem('rod_inf', m ? 'mini' : ''); } catch (e) {} if (selTrip || selStation >= 0 || selAlerts || selNews) { mcs._h = ''; renderCard(); } };
  $('#ver').onclick = () => { selNews = true; selStats = false; selAlerts = false; mcs._h = ''; renderCard(); };
  // ---------- avisos de viajeros ----------
  const CK = { vacio: '🟢', lleno: '🟠', petado: '🔴', parado: '⏸️', calor: '🥵', abordo: '⚠️', gente: '👥', retraso: '⏱️', cancel: '✖️', ascensor: '♿', via: '⚠️' };
  const TK = ['vacio', 'lleno', 'petado', 'parado', 'calor', 'abordo'], SK = ['gente', 'retraso', 'cancel', 'ascensor', 'via'];
  const TIPOS0 = { vacio: 'Va con sitio', lleno: 'Va lleno', petado: 'Muy lleno, cuesta subir', parado: 'Parado sin moverse', calor: 'Sin aire acondicionado', abordo: 'Incidencia a bordo', gente: 'Mucha gente esperando', retraso: 'Anuncian retraso por megafonía', cancel: 'Anuncian tren cancelado', ascensor: 'Ascensor o escalera averiados', via: 'Incidencia en la estación' };
  const tipo = k => (RT.tipos || TIPOS0)[k] || k;
  const repsFor = (num, sid) => (RT.rep || []).filter(r => (num && r.num === String(num) && !r.sid) || (sid && r.sid === String(sid) && !r.num) || (num && sid && r.num === String(num) && r.sid === String(sid)));
  const repAge = r => { const m = Math.round((Date.now() + (RT.repSkew || 0) - r.at) / 60000); return m < 1 ? 'ahora' : ago(m + ' min'); };
  const repMine = (() => { try { return new Set(JSON.parse(localStorage.getItem('rod_votes') || '[]')); } catch (e) { return new Set(); } })();
  function crowdHtml(num, sid, line) {
    if (!RT.url || !RT.repOk) return '';   // solo si el puente tiene la base de datos de avisos
    const list = repsFor(num, sid), keys = num ? TK : SK;
    return `<div class="crowd"><small>👥 Lo que dicen los viajeros${list.length ? '' : ' · nadie ha avisado todavía'}</small>${list.map(r => `<p><span>${CK[r.kind] || '•'} <b>${esc(tipo(r.kind))}</b> <small>${r.up > 1 ? r.up + ' viajeros · ' : ''}${repAge(r)}</small></span>${repMine.has(r.id) ? '<small>✓</small>' : `<button type="button" data-rv="${r.id}:1" title="Lo confirmo">👍</button><button type="button" data-rv="${r.id}:-1" title="Ya no es así">👎</button>`}</p>`).join('')}
      <details><summary>${num ? '¿Vas en este tren? Avisa a los demás' : '¿Estás en la estación? Avisa a los demás'}</summary><div class="ckb">${keys.map(k => `<button type="button" data-rk="${k}" data-rn="${esc(num || '')}" data-rs="${esc(sid || '')}" data-rl="${esc(line || '')}">${CK[k]} ${esc(tipo(k))}</button>`).join('')}</div><small>Anónimo · se borra solo en 90 min · sin texto libre</small></details></div>`;
  }
  async function sendRep(body, path) {
    try {
      const r = await fetch(RT.url.replace(/\/+$/, '') + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const j = await r.json(); if (!j.ok) { toast(j.err || 'No se ha podido enviar'); return; }
      if (j.id) { repMine.add(j.id); try { localStorage.setItem('rod_votes', JSON.stringify([...repMine].slice(-300))); } catch (e) {} }
      toast(path === '/vote' ? 'Gracias, voto guardado' : j.n > 1 ? `Gracias · ya sois ${j.n} avisando de lo mismo` : 'Gracias, aviso enviado');
      const rr = await get(RT.url.replace(/\/+$/, ''), '/reports.json'); if (rr && rr.items) RT.rep = rr.items;
      mcs._h = ''; renderCard(); renderHome(true);
    } catch (e) { toast('Sin conexión con el puente'); }
  }
  function bindCrowd(root) {
    root.querySelectorAll('[data-rk]').forEach(b => b.onclick = e => { e.stopPropagation(); b.disabled = true; sendRep({ kind: b.dataset.rk, num: b.dataset.rn, sid: b.dataset.rs, line: b.dataset.rl }, '/report'); });
    root.querySelectorAll('[data-rv]').forEach(b => b.onclick = e => { e.stopPropagation(); const [id, v] = b.dataset.rv.split(':'); repMine.add(+id); try { localStorage.setItem('rod_votes', JSON.stringify([...repMine].slice(-300))); } catch (e2) {} sendRep({ id: +id, v: +v }, '/vote'); });
  }
  let toastT = 0;
  function toast(t) { let el = $('#toast'); if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); } el.textContent = t; el.className = 'on'; clearTimeout(toastT); toastT = setTimeout(() => { el.className = ''; }, 2600); }
  function srcB(a) { return a.src ? `<b class="asrc ${a.src === 'Adif' ? 'adif' : ''}">${a.src === 'Adif' ? 'Adif · vía' : esc(a.src)}</b>` : ''; }
  function whenTxt(a) {
    if (!a.when) return '';
    const [d, t] = a.when.split('T'), M = madrid(new Date()), today = M.ymd.slice(0, 4) + '-' + M.ymd.slice(4, 6) + '-' + M.ymd.slice(6, 8);
    if (d === today && t) { const m = Math.round(M.min - (+t.slice(0, 2) * 60 + +t.slice(3, 5))); return m < 1 ? 'ahora' : m < 60 ? ago(m + ' min') : `hoy a las ${t.slice(0, 5)}`; }
    return `${d.slice(8, 10)}/${d.slice(5, 7)}${t ? ' ' + t.slice(0, 5) : ''}`;
  }
  function renderAlerts() {
    const el = $('#alr'); if (!el) return;
    const n = RT.alerts.filter(a => [...a.fams].some(f => famOn.has(f))).length;
    el.hidden = !n; el.textContent = `⚠️ ${n}${n === 1 ? ' aviso' : ' avisos'}`;
  }
  { const slot = $('#alrslot'); if (slot) slot.appendChild($('#alr')); }   // los avisos, en el panel de directo junto al reloj
  $('#alr').onclick = () => { selNews = false; selStats = false; selAlerts = true; renderCard(); };
  $('#wcopy').onclick = async () => { const tx = $('#wcode').textContent; try { await navigator.clipboard.writeText(tx); $('#wcopy').textContent = 'Copiado ✓'; } catch (e) { const r = document.createRange(); r.selectNodeContents($('#wcode')); const g = getSelection(); g.removeAllRanges(); g.addRange(r); $('#wcopy').textContent = 'Selecciona y copia'; } setTimeout(() => ($('#wcopy').textContent = 'Copiar código'), 2500); };


  // ---------- MI ESTACIÓN: panel para decidir rápido si salir ya ----------
  const BCN = SID.get('71801');
  function loadDeps(s, cb) {
    const sid = ST[s].id, OD = DEPS.get(sid);
    if (!(feedUp() && RT.url) || OD && (OD.loading || Date.now() - OD.at < 30000)) return;
    DEPS.set(sid, { ...(OD || {}), loading: true, at: OD ? OD.at : 0 });
    get(RT.url.replace(/\/+$/, ''), '/departures.json?stationId=' + sid).then(d => { DEPS.set(sid, { at: Date.now(), d }); cb && cb(); }).catch(() => DEPS.set(sid, { at: Date.now(), err: 1 }));
  }
  const hm2min = t => +t.slice(0, 2) * 60 + +t.slice(3, 5);
  const NUMI = { k: -2, m: null };
  function tripByNum(num) { const k = R.days.indexOf(nowState().ymd); if (NUMI.k !== k) { NUMI.k = k; NUMI.m = new Map(); for (const t of byDay[k] || []) NUMI.m.set(String(t.num), t); } return NUMI.m.get(String(num)) || null; }
  // ¿qué parte de los trenes de cada línea que deberían circular tienen posición de Renfe? (algunas líneas casi nunca la dan)
  const COV = { at: 0, m: new Map() };
  // líneas en las que, según horario, deberían circular trenes y Renfe no da la posición de ninguno
  const noPosFams = fams => { if (!live()) return []; famCov(''); return [...fams].filter(f => { const o = COV.m.get(f); return o && o[0] >= 2 && o[1] === 0; }).sort(natural); };
  function famCov(f) {
    if (Date.now() - COV.at > 60000) { COV.at = Date.now(); COV.m = new Map(); const S = nowState(), k = R.days.indexOf(S.ymd); if (k >= 0) for (const tr of byDay[k]) { const a = S.min - tr.t0; if (a < tr.pat.t[1] + 3 || a > tr.pat.t[tr.pat.t.length - 2] - 3) continue; const o = COV.m.get(tr.fam) || [0, 0]; o[0]++; if (RT.vp.has(tr.tid)) o[1]++; COV.m.set(tr.fam, o); } }
    const o = COV.m.get(f); return o && o[0] >= 3 ? o[1] / o[0] : 1;
  }
  // salida estimada desde la posición REAL del tren (no del retraso que arrastra): los trenes recuperan tiempo entre estaciones
  // ÚNICA regla de horas para un tren con posición real (lista de Ahora, ficha del mapa y tren en el que vas):
  // desde dónde está ahora, el tiempo que le queda según su horario. Si no hay posición fiable: horario + retraso de Renfe
  // (y, en tu estación, la hora oficial de Rodalies). Solo se aplica si no se aleja más de −3/+5 min de esa referencia.
  // ficha del mapa: en tus estaciones manda la hora de la lista de Ahora (Rodalies + posición); en el resto, la regla común
  function cardEta(tr, v, i, ref) {
    const sid = ST[tr.pat.stops[i]].id; if ([...HOME.st, ...WORK.st].includes(sid)) { const x = departuresFor(tr.pat.stops[i]).find(y => String(y.num) === String(tr.num)); if (x && !x.gone) return x.est; }   // en tu estación se enseña la hora de SALIDA, la misma que en Ahora
    return stopEst(tr, v, i, 0, ref);
  }
  function posBase(tr, v) {
    if (!tr || !v || v.pre || v.dObs == null || v.err == null || v.err > 0.6) return null;
    const age = Date.now() / 1000 - v.ts; if (age > 150 || age < -30 || (v.still || 0) >= 90) return null;
    const sd = pg(tr.pat).stopD, T = tr.pat.t; let tpos, j0;
    const j = sd.reduce((b, x, k) => (Math.abs(x - v.dObs) < Math.abs(sd[b] - v.dObs) ? k : b), 0);
    if (Math.abs(sd[j] - v.dObs) < 0.16 || v.atStop === j) { tpos = T[2 * j + 1] ?? T[2 * j]; j0 = j; }   // en una estación: sale ya
    else { const nx = sd.findIndex(x => x > v.dObs); if (nx <= 0) return null; const f = Math.min(1, Math.max(0, (v.dObs - sd[nx - 1]) / ((sd[nx] - sd[nx - 1]) || 1))); tpos = T[2 * nx - 1] + f * (T[2 * nx] - T[2 * nx - 1]); j0 = nx - 1; }
    return { t: madrid(new Date()).min - age / 60, tpos, j0, sd };
  }
  // hora estimada (minutos del día) de llegada (kind 0) o salida (1) en la parada i; ref = la hora de referencia
  function stopEst(tr, v, i, kind, ref) {
    const b = posBase(tr, v); if (!b || i <= b.j0 && !(i === b.j0 && kind === 1)) return ref;
    const T = tr.pat.t, x = b.t + (T[2 * i + kind] ?? T[2 * i]) - b.tpos; if (x - b.t > 45) return ref;
    const r = ((ref % 1440) + 1440) % 1440, d = ((x - r + 720) % 1440 + 1440) % 1440 - 720;   // diferencia con la referencia (sin líos de medianoche)
    return d >= -3 && d <= 5 ? ref + d : ref;
  }
  function posEta(tr, v, i, S) { const b = posBase(tr, v); if (!b) return null; const x = stopEst(tr, v, i, 1, b.t + tr.pat.t[2 * i + 1] - b.tpos); return x - S.min > 30 || x < S.min - 1 ? null : x; }
  function departuresFor(s, useHorario) {
    const S = nowState(), useLive = (live() || rtDown()) && S.live && !useHorario, OD = DEPS.get(ST[s].id), out = [];
    const byNum = new Map([...RT.vp.values()].map(v => [String((TID.get(v.tid) || {}).num || v.num), v]));
    if (useLive && OD && OD.d && Array.isArray(OD.d.trains) && OD.d.trains.length) {   // lista oficial vacía (p. ej. huelga o fallo de Rodalies): se usa el horario
      for (const x of OD.d.trains) {
        const t = (x.departureDateHourSelectedStation || '').slice(11, 16); if (!t) continue;
        const num = String(x.commercialNumber || x.technicalNumber || ''), v = byNum.get(num), d = v ? RT.delays.get(v.tid) : null, dl = Math.max(typeof d === 'number' ? Math.max(0, d / 60) : 0, v && v.pre ? v.preDl || 0 : 0);
        let sm = hm2min(t); if (sm < S.min - 720) sm += 1440;
        // la hora oficial de Rodalies YA es la prevista (lleva segundos y el retraso dentro): no se le vuelve a sumar el retraso de Renfe
        const ss = +(x.departureDateHourSelectedStation || '').slice(17, 19) || 0, ofi = sm + ss / 60, trS = (v && TID.get(v.tid)) || tripByNum(num), iS = trS ? trS.pat.stops.indexOf(s) : -1;
        let sch = iS >= 0 ? (trS.t0 + trS.pat.t[2 * iS + 1]) % 1440 : null; if (sch != null) { while (sch < ofi - 720) sch += 1440; while (sch > ofi + 720) sch -= 1440; if (Math.abs(ofi - sch) > 120) sch = null; }
        let est, dl2;
        if (sch == null) { est = ss || !dl ? ofi : ofi + dl; dl2 = ss ? 0 : dl; }   // sin horario con qué comparar
        else if (ss || Math.abs(ofi - sch) >= 1) { est = ofi; dl2 = Math.max(0, ofi - sch); }   // Rodalies ya da la hora estimada
        else { est = sch + dl; dl2 = dl; }   // Rodalies aún da la hora del horario: se usa el retraso de Renfe
        // coherencia: si Rodalies da una hora de horario (sin segundos) imposible porque el tren aún no ha salido de su origen,
        // se usa la de su horario desde el origen (no puede pasar antes de haber salido)
        let dubious = false;
        if (trS && !v && iS > 0 && !ss) { const kD = R.days.indexOf(S.ymd), offD = trS.day === kD - 1 ? 1440 : trS.day === kD + 1 ? -1440 : 0, d0 = trS.t0 + trS.pat.t[1] - offD; if (S.min < d0) { const minE = d0 + (trS.pat.t[2 * iS + 1] - trS.pat.t[1]); if (minE > est + 1) { est = minE; dubious = true; if (sch != null) dl2 = Math.max(0, est - sch); } } }
        if (sch != null) sm = Math.round(sch);
        // si el tren ya se acerca y su posición dice que llegará antes (hasta 3 min), se adelanta: mejor esperar que perderlo
        if (v && trS && iS >= 0) { const pe = stopEst(trS, v, iS, 1, est); if (pe !== est) { est = Math.max(pe, S.min); if (sch != null) dl2 = Math.max(0, est - sch); } }
        out.push({ dubious, rodLive: !!ss, sm, est, dl: dl2, fam: (x.line || {}).id || '', dest: (x.destinationStation || {}).name || '', destId: (x.destinationStation || {}).id || '', plat: x.platformSelectedStation || '', cancel: !!x.trainCancelled, obs: x.trainObservations || '', live: !!v, num, tid: v ? v.tid : '', tr: (v && TID.get(v.tid)) || tripByNum(num), src: 'oficial' });
      }
    } else {
      const k = R.days.indexOf(S.ymd); if (k < 0) return out;
      const scan = (arr, off) => { for (const tr of arr) { const i = tr.pat.stops.indexOf(s); if (i < 0 || i === tr.pat.stops.length - 1) continue; const d = delayOf(tr), dl = typeof d === 'number' ? Math.max(0, d / 60) : 0, t = tr.t0 + tr.pat.t[2 * i + 1] - off; if (t + dl < S.min - 1 || t > S.min + (S.min > 1080 || S.min < 300 ? 600 : 360)) continue; const L = tr.pat.stops[tr.pat.stops.length - 1]; out.push({ sm: t, est: t + dl, dl, fam: tr.fam, dest: ST[L].n, destId: ST[L].id, plat: '', cancel: d === 'X', obs: '', live: RT.vp.has(tr.tid), num: tr.num, tid: tr.tid, tr, src: 'horario' }); } };
      scan(byDay[k], 0); if (k > 0) scan(byDay[k - 1], 1440); if (k + 1 < R.days.length && S.min > 1080) scan(byDay[k + 1], -1440);   // de noche, también los primeros trenes de mañana
    }
    // trenes que ya deberían haber salido: si Renfe dice que aún no han pasado (van con retraso o parados), siguen en la lista;
    // si ya han pasado, se ven unos minutos como «salió» para poder encontrarlos y tocarlos
    if (useLive) {
      const seen = new Set(out.map(x => x.num)), k = R.days.indexOf(S.ymd);
      const scanR = (arr, off) => { for (const tr of arr || []) { if (seen.has(String(tr.num))) continue; const i = tr.pat.stops.indexOf(s); if (i < 0 || i === tr.pat.stops.length - 1) continue; const t = tr.t0 + tr.pat.t[2 * i + 1] - off; if (t < S.min - 45 || t > S.min + 1) continue; const v = RT.vp.get(tr.tid); if (!v) continue; const d = RT.delays.get(tr.tid), dl = typeof d === 'number' ? Math.max(0, d / 60) : 0, L = tr.pat.stops[tr.pat.stops.length - 1]; out.push({ sm: t, est: t + dl, dl, fam: tr.fam, dest: ST[L].n, destId: ST[L].id, plat: '', cancel: false, obs: '', live: true, num: tr.num, tid: tr.tid, tr, src: 'horario' }); } };
      if (k >= 0) { scanR(byDay[k], 0); if (k > 0) scanR(byDay[k - 1], 1440); }
      for (const x of out) {
        const v = x.tid && RT.vp.get(x.tid), i = x.tr ? x.tr.pat.stops.indexOf(s) : -1;
        x.passed = !!(v && i >= 0 && !v.pre && v.next != null && v.next >= 0 && v.next > i && v.atStop !== i);
        if (!x.passed && x.live && x.est < S.min) { x.est = S.min; x.late = true; }   // aún no ha pasado: llega ya
        if (x.passed) x.gone = true;
      }
    }
    let res = out.filter(x => x.gone ? S.min - x.est < 20 : x.est >= S.min - 0.5).sort((a, b) => a.est - b.est);
    { const g = res.filter(x => x.gone); if (g.length > 2) { const drop = new Set(g.slice(0, g.length - 2)); res = res.filter(x => !drop.has(x)); } }   // como mucho los 2 últimos que salieron
    if (!res.filter(x => !x.gone).length && out.length && out[0].src === 'oficial' && !useHorario) return departuresFor(s, true);
    for (const x of res) { const w = x.num && whyOf(x.num); if (w && w.cx) { x.cancel = true; x.cxWhy = w.txt; } }   // Rodalies avisa de que ese tren no circula
    // «sin señal»: según su horario (y retraso) ya debería estar circulando, pero Renfe no da su posición
    if (live() && S.live) { const k = R.days.indexOf(S.ymd); for (const x of res) { if (x.live || x.cancel || !x.tr) continue; const off = x.tr.day === k - 1 ? 1440 : x.tr.day === k + 1 ? -1440 : 0, dep0 = x.tr.t0 + x.tr.pat.t[1] - off + (x.dl || 0); x.noPos = S.min > dep0 + 3 && !x.rodLive; x.ghost = x.noPos && famCov(x.fam) >= 0.7; } }   // si Rodalies da su hora en directo (con segundos), el tren existe y circula aunque Renfe no dé su posición   // solo en líneas donde Renfe suele dar la posición
    if (!useHorario) { res = res.concat(busesAt(s, S.min - 0.5, S.min + 360)).sort((a, b) => a.est - b.est); }
    // Rodalies solo da unas 2 h de salidas: más allá se completa con el horario oficial (sin repetir trenes)
    // huecos: trenes del horario oficial dentro de la ventana de Rodalies que Rodalies no anuncia (ni como cancelados).
    // Se enseñan avisando («Rodalies no lo anuncia»): mejor saber que según horario pasa uno que ver «Sin trenes»
    if (!useHorario && res.some(x => x.src === 'oficial')) { const offs = out.filter(x => x.src === 'oficial'), lastO = Math.max(...offs.map(x => x.sm)), offN = new Set(offs.map(x => String(x.num))); res = res.concat(departuresFor(s, true).filter(x => !x.gone && x.sm <= lastO && x.est >= S.min - 0.5 && !offN.has(String(x.num))).map(x => Object.assign(x, { unconf: true }))).sort((a, b) => a.est - b.est); }
    if (res.some(x => x.src === 'oficial')) { const last = Math.max(...res.map(x => x.sm)), seen = new Set(res.map(x => x.num)); res = res.concat(departuresFor(s, true).filter(x => x.sm > last && !seen.has(String(x.num)))); }   // lista oficial vacía o caducada → horario + retrasos
    return res;
  }
  // ---------- Casa y Trabajo: dos paneles de referencia ----------
  const mkPlace = (key, ico, name, def) => { const P = { key, ico, name, st: [], i: 0, walk: 10, open: false }; try { const h = JSON.parse(localStorage.getItem('rod_' + key) || 'null'); if (h) Object.assign(P, h); } catch (e) {} if (!P.st.length && def) P.st = def; return P; };
  const HOME = mkPlace('home', '🏠', 'Casa', null), WORK = mkPlace('work', '💼', 'Trabajo', null);
  // 📍 Cerca de ti: estación más cercana según el GPS; al abrir la app es el panel que se ve primero
  const NEAR = { key: 'near', ico: '📍', name: 'Cerca de ti', st: [], i: 0, walk: 0, open: false, dist: {}, fix: 0, err: '' };
  const PLACES = [NEAR, HOME, WORK];
  try { NEAR.homeW = JSON.parse(localStorage.getItem('rod_homew') || 'null'); } catch (e) {}   // tu casa, si está pegada a la estación
  HOME.open = false; WORK.open = false;   // al arrancar, Casa y Trabajo plegados
  function kmUnit(lon, lat) { const a = LL(lon, lat), b = LL(lon, lat + 0.009); return 1 / Math.hypot(b[0] - a[0], b[1] - a[1]); }   // km por unidad del mapa
  function locate(first) {
    if (!navigator.geolocation) { NEAR.err = 'Este navegador no da la ubicación'; renderHome(true); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      const { longitude: lon, latitude: lat } = pos.coords, w = LL(lon, lat), k = kmUnit(lon, lat);
      const c = ST.map((t, i) => [i, Math.hypot(t.w[0] - w[0], t.w[1] - w[1]) * k]).filter(([i]) => ST[i].fams.size).sort((a, b) => a[1] - b[1]);
      const near = c.filter(([, d], j) => j === 0 || d < Math.max(2.5, c[0][1] * 1.6)).slice(0, 3);
      const changed = NEAR.st[0] !== ST[near[0][0]].id;
      NEAR.w = w; NEAR.k = k; NEAR.acc = pos.coords.accuracy != null ? pos.coords.accuracy : 999; NEAR.st = near.map(([i]) => ST[i].id); NEAR.dist = Object.fromEntries(near.map(([i, d]) => [ST[i].id, d])); NEAR.fix = Date.now(); NEAR.err = '';
      if (changed) NEAR.i = 0;
      // en casa o en el trabajo: se abre ese panel en vez de repetir la misma estación
      const at = [HOME, WORK].find(P => P.st.includes(NEAR.st[0]) && NEAR.dist[NEAR.st[0]] < 1.5);
      /* al arrancar todo queda plegado para ver el mapa entero; las estaciones se abren al tocarlas */
      renderHome(true);
    }, e => { NEAR.err = e.code === 1 ? 'Sin permiso de ubicación' : 'No se ha podido obtener la ubicación'; renderHome(true); }, { enableHighAccuracy: false, maximumAge: 60000, timeout: 12000 });
  }
  const walkMin = km => Math.max(1, Math.round(km * 1.3 / 0.08));   // 4,8 km/h y un 30 % más por las calles
  setTimeout(() => locate(true), 400);
  // ---------- ¿vas en un tren? si te mueves por la vía a velocidad de tren, la app lo busca y lo sigue ----------
  const ONB = { fixes: [], tid: '', no: new Map(), shown: '' };
  function onboardCheck() {
    const F = ONB.fixes; if (F.length < 2) return;
    const a = F[F.length - 1], b = F.slice().reverse().find(f => a.t - f.t >= 8000 && a.t - f.t <= 90000); if (!b) return;
    const km = Math.hypot(a.w[0] - b.w[0], a.w[1] - b.w[1]) * a.k, kmh = a.spd != null && a.spd > 0 ? a.spd * 3.6 : km / ((a.t - b.t) / 3600000);
    if (a.acc != null && a.acc > 100) return;   // en túneles el móvil da posiciones de antena, muy imprecisas: no sirven
    // ya vas en un tren: no se cambia a otro por perder el GPS en un túnel (al salir, el móvil y Renfe tardan en ponerse al día).
    // Solo se suelta si tu tren ha terminado el viaje o llevas más de 2 min claramente lejos de él (más de 5 km).
    if (ONB.manual && Date.now() < ONB.manual) return;   // lo elegiste tú: no se cambia solo (90 min)
    if (ONB.tid) {
      if (kmh < 22) return;   // parado en una estación: nunca se cambia de tren (pasan trenes al lado)
      const cur = act.find(t => t.tr && String(t.tr.num) === ONB.tid) || activeTrips(nowState()).out.find(t => t.tr && String(t.tr.num) === ONB.tid);
      if (cur) { const d = Math.hypot(cur.p.w[0] - a.w[0], cur.p.w[1] - a.w[1]) * a.k; if (d <= 5) { ONB.far = 0; return; } if (!ONB.far) ONB.far = a.t; if (a.t - ONB.far < 120000) return; }
      ONB.far = 0;
    }
    if (kmh < 22 || kmh > 200) return;   // andando, en coche parado o dato raro
    const mv = [a.w[0] - b.w[0], a.w[1] - b.w[1]];
    // a 100 km/h un tren hace 1,7 km por minuto y la posición de Renfe llega con 30-60 s de retraso: margen de 2,5 km;
    // si Renfe no da tu tren (o no publica nada), se busca entre los trenes del horario con algo más de margen
    let best = null, bd = 2.5;
    const cands = act.filter(t => t.real), byH = activeTrips(nowState()).out.filter(t => t.tr && !cands.some(c => c.tr && String(c.tr.num) === String(t.tr.num)));
    for (const t of [...cands, ...byH]) {
      if (!t.tr) continue; const lim = t.real ? 2.5 : 3.5; const d = Math.hypot(t.p.w[0] - a.w[0], t.p.w[1] - a.w[1]) * a.k; if (d > Math.min(bd, lim) || best && best.real && !t.real) continue;
      const nx = t.real ? t.v.next : t.p.next; if (nx == null || nx < 0) continue; const ns = ST[t.tr.pat.stops[nx]].w, hv = [ns[0] - t.p.w[0], ns[1] - t.p.w[1]];
      if (hv[0] * mv[0] + hv[1] * mv[1] <= 0) continue;   // va en sentido contrario
      const key = String(t.tr.num); if ((ONB.no.get(key) || 0) > Date.now()) continue;
      bd = d; best = t;
    }
    if (!best) { ONB.cand = null; return; }
    const key = String(best.tr.num); if (ONB.tid === key) return;
    // cambiar de un tren a otro exige confirmarlo en dos lecturas seguidas (≥ 20 s) y buena precisión del GPS
    if (ONB.tid) { if (a.acc != null && a.acc > 50) return; if (!ONB.cand || ONB.cand.k !== key) { ONB.cand = { k: key, t: a.t }; return; } if (a.t - ONB.cand.t < 20000) return; }
    ONB.cand = null; ONB.tid = key;
    selNews = selAlerts = selStats = false; selStation = -1; selTrip = best.tr; follow = best.tr;
    Object.assign(goal, { tx: best.p.w[0], ty: best.p.w[1], dist: Math.min(goal.dist, 22) });
    if (innerWidth <= 640) { mcs.classList.add('peek'); const rc = $('#rc'); if (!rc.classList.contains('min')) $('#rcgrab').click(); }
    { const st = best.tr.pat.stops, nx = best.real ? best.v.next : best.p.next, mine = [...HOME.st, ...WORK.st]; const j = st.findIndex((si, q) => q >= nx && mine.includes(ST[si].id)); if (j > 0 && !(ALARM && ALARM.num === key)) { ALARM = { num: key, sid: ST[st[j]].id, at: Date.now() }; saveAlarm(); } }
    styleStations(); mcs._h = ''; renderCard(); lastT = 0; invalidate();
    let bn = $('#onb'); if (!bn) { bn = document.createElement('div'); bn.id = 'onb'; document.body.appendChild(bn); }
    bn.innerHTML = `🚆 Parece que vas en el <b>${esc(best.tr.fam)} ${esc(best.tr.num)}</b> hacia ${esc(ST[best.tr.pat.stops[best.tr.pat.stops.length - 1]].n)} · lo sigo${ALARM && ALARM.num === key ? ` · te aviso al llegar a ${esc(ST[SID.get(ALARM.sid)].n)}` : ''} <button type="button" data-onb-no>No es este</button><button type="button" data-onb-x>✕</button>`;
    bn.className = 'on';
    bn.querySelector('[data-onb-no]').onclick = () => { ONB.no.set(key, Date.now() + 20 * 60000); ONB.tid = ''; follow = null; selTrip = null; mcs._h = ''; renderCard(); bn.className = ''; };
    bn.querySelector('[data-onb-x]').onclick = () => { bn.className = ''; };
    setTimeout(() => { bn.className = ''; }, 15000);
  }
  if (navigator.geolocation && navigator.geolocation.watchPosition) {
    let wid = null;
    const start = () => { if (wid != null) return; wid = navigator.geolocation.watchPosition(pos => {
        const { longitude: lon, latitude: lat } = pos.coords, f = { t: pos.timestamp || Date.now(), w: LL(lon, lat), k: kmUnit(lon, lat), spd: pos.coords.speed, acc: pos.coords.accuracy };
        ONB.fixes.push(f); ONB.fixes = ONB.fixes.filter(x => f.t - x.t < 120000);
        try { if (nowState().live) onboardCheck(); } catch (e) {}
      }, () => {}, { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 }); };
    const stop = () => { if (wid != null) { navigator.geolocation.clearWatch(wid); wid = null; } };
    setTimeout(start, 3000);   // tras el primer aviso de permiso
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else { ONB.fixes = []; start(); } });
  }
  setInterval(() => { if (!document.hidden && (Date.now() - NEAR.fix > 110000 || PLACES.some(P => P.goAt))) locate(false); }, 30000);   // de camino: ubicación cada 30 s   // casa por defecto: Vilassar de Mar
  const saveP = P => { try { localStorage.setItem('rod_' + P.key, JSON.stringify({ st: P.st, i: P.i, walk: P.walk, open: P.open, hide: P.hide || '', goAt: P.goAt || 0, platAt: P.platAt || 0 })); } catch (e) {} };
  const curSt = P => P.st.length ? SID.get(P.st[P.i] || P.st[0]) : null;
  function dirOf(s, x, ref, refSet) {   // ¿el tren va hacia la estación de referencia o se aleja?
    if (refSet && x.bus) return x.bstops.slice(1).some(j => refSet.has(j)) ? 'to' : 'out';
    if (refSet && x.tr) { const st = x.tr.pat.stops, i = st.indexOf(s); if (i >= 0 && st.slice(i + 1).some(j => refSet.has(j))) return 'to'; }   // para en casa / el trabajo
    if (refSet) { if (x.tr) return 'out'; }
    const d = SID.get(x.destId) ?? ST.findIndex(t => t.n === x.dest); if (d < 0 || d == null || ref == null) return 'otros';
    const dd = i => Math.hypot(ST[i].w[0] - ST[ref].w[0], ST[i].w[1] - ST[ref].w[1]);
    return dd(d) < dd(s) ? 'to' : 'out';
  }
  const mins = m => m < 1 ? 'ahora' : m < 60 ? Math.floor(m) + ' min' : Math.floor(m / 60) + ' h ' + String(Math.floor(m % 60)).padStart(2, '0');
  let homeT = 0;
  const BAD = /sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;
  const SEV3 = /sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i;
  const SEV2 = /huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i;
  const sevOf = a => { const s = a.es || a.txt; return SEV3.test(s) || SEV3.test(a.txt) ? 3 : SEV2.test(s) || SEV2.test(a.txt) || a.lvl >= 2 ? 2 : 1; };
  function placeHtml(P, S, DK) {
    const sidx = curSt(P);
    if (P === NEAR) {
      if (ONB.tid) return '';   // vas en un tren: su ficha sustituye a «Cerca de ti»
      if (sidx == null) return `<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">📍</span><span class="htit"><b>Cerca de ti</b><small>${NEAR.err ? esc(NEAR.err) + ' · toca para reintentar' : 'Buscando tu ubicación…'}</small></span><span class="hchev">⟳</span></button></div>`;
      const at = [HOME, WORK].find(Q => Q.st.includes(NEAR.st[0]) && NEAR.dist[NEAR.st[0]] < 1.5); if (at) return '';   // ya estás en casa / el trabajo
      if (Date.now() - NEAR.fix > 10 * 60000 ) return '';   // ubicación de hace rato (túnel, interior): no se enseña una estación que ya no toca
      P.walk = walkMin(NEAR.dist[P.st[P.i]] || 0);
    }
    if (sidx == null) {
      // si estás cerca de una estación, se ofrece esa con un solo toque
      const ni = NEAR.st.length ? SID.get(NEAR.st[0]) : null, other = P === WORK ? HOME : WORK, useNear = ni != null && !other.st.includes(NEAR.st[0]);
      return `<div class="hplace"><div class="hhead hnew"><span class="hico">${P.ico}</span><span class="htit"><b>${P.name}</b><small>${useNear ? `Estás en <b>${esc(ST[ni].n)}</b>` : 'Elige tu estación'}</small></span>${useNear ? `<button type="button" class="hpick" data-hnear="${P.key}">Usar esta</button>` : ''}<button type="button" class="hpick alt" data-hset="${P.key}">${useNear ? 'Otra…' : 'Elegir'}</button></div></div>`;
    }
    loadDeps(sidx, () => renderHome(true));
    const other = P === NEAR ? null : P === HOME ? WORK : HOME, os = other ? curSt(other) : null, ref = os != null && os !== sidx ? os : BCN;
    const refName = os != null && os !== sidx ? (other === WORK ? 'el trabajo' : 'casa') : 'Barcelona';
    // respeta el filtro de líneas del panel de controles
    const allF = ST[sidx].fams; let fams = new Set([...allF].filter(f => famOn.has(f))), filtered = fams.size < allF.size, offF = false;
    if (!fams.size) { fams = new Set(allF); filtered = false; offF = true; }   // el filtro es de otra línea: tus estaciones siguen mostrando sus trenes
    // lejos de esa estación (o en el panel Cerca de ti): se muestra cuándo sale el tren, sin «sal ya» ni tiempo a pie
    const kmTo = NEAR.w ? Math.hypot(ST[sidx].w[0] - NEAR.w[0], ST[sidx].w[1] - NEAR.w[1]) * NEAR.k : null;
    const gpsOk = kmTo != null && Date.now() - NEAR.fix < 10 * 60000;
    if (P.platAt && Date.now() - P.platAt > 45 * 60000) { P.platAt = 0; saveP(P); }   // «en el andén» dura 45 min como mucho
    const onPlat = P !== NEAR && !!P.platAt;
    const away = P === NEAR || (gpsOk && kmTo > 3 && !P.goAt && !onPlat);
    // ya en la estación o de camino: no tiene sentido «sal en» ni «no llegas»
    const atSt = onPlat || P !== NEAR && gpsOk && kmTo < 0.08 && NEAR.acc <= 40 && !(P === HOME && NEAR.homeW && Math.hypot(NEAR.homeW[0] - NEAR.w[0], NEAR.homeW[1] - NEAR.w[1]) * NEAR.k < 0.05);   // dentro de la estación (no basta con vivir al lado)
    const goMin = P.goAt ? (Date.now() - P.goAt) / 60000 : null; if (goMin != null && (goMin > 60 || atSt)) { P.goAt = 0; saveP(P); }
    const onWay = !atSt && P !== NEAR && !!P.goAt;
    const wayLeft = onWay ? (gpsOk && kmTo <= 3 ? walkMin(kmTo) : Math.max(0, P.walk - goMin)) : 0;
    const depsAll = departuresFor(sidx), deps = depsAll.filter(x => !FC[x.fam] || famOn.has(x.fam) || offF), W = away || atSt ? 0 : onWay ? wayLeft : P.walk;   // tu tiempo a pie lo decides tú (el GPS solo se usa cuando ya has salido)
    const al = RT.alerts.filter(a => [...a.fams].some(f => fams.has(f)) || a.stops && a.stops.has(sidx)), bad = al.some(a => BAD.test(a.es || a.txt));
    const groups = { to: [], out: [], otros: [], all: deps }; const refSet = refName !== 'Barcelona' ? new Set(other.st.map(id => SID.get(id)).filter(i => i != null)) : null;
    deps.forEach(x => groups[dirOf(sidx, x, ref, refSet)].push(x));
    // si el filtro deja sin trenes hacia casa/el trabajo, esa columna usa todas las líneas (es tu trayecto de siempre)
    let toAll = '';
    if (refSet && !groups.to.length && deps.length < depsAll.length) { const extra = depsAll.filter(x => !deps.includes(x) && dirOf(sidx, x, ref, refSet) === 'to'); if (extra.length) { groups.to = extra; toAll = [...new Set(extra.map(x => x.fam))].sort(natural).join(', '); } }
    const label = g => { if (g === 'all') return 'Próximas salidas · todas las direcciones'; const famOf = arr => (arr.find(x => x.fam) || {}).fam; if (g === 'to') return 'Hacia ' + dstP(refName === 'Barcelona' ? 'Barcelona' : ST[ref].n, famOf(groups.to) || [...fams][0]) + (() => { const fs = filtered && !toAll ? [...fams].filter(f => groups.to.some(x => x.fam === f)).sort(natural) : []; return fs.length ? `<span class="hwf" title="${'Filtro de líneas activo'}">${fs.map(chipL).join('')}</span>` : ''; })(); const ds = []; for (const x of groups[g]) if (!ds.some(d => d[0] === x.dest)) ds.push([x.dest, x.fam]); return ds.length ? 'Hacia ' + ds.slice(0, 2).map(([d, f]) => dstP(d, f)).join(' ') : 'Otros'; };
    const pn = PIN.get(P.key);
    if (pn && !depsAll.some(y => String(y.num) === pn && !y.gone)) pinSet(P.key, null);   // ya ha salido o ya no está: se suelta
    const verdict = g => {
      const xp = pn && groups[g].find(y => String(y.num) === pn && !y.gone);
      if (xp && xp.cancel) return { cls: 'v-no', pin: 1, x: xp, big: 'Cancelado', small: `${hhmm(xp.est)} · ${xp.fam} a ${xp.dest}${xp.num ? ' · ' + 'tren\u00a0' + xp.num : ''}`, warn: '' };
      const x = xp || groups[g].find(y => !y.cancel && !y.gone && y.est - S.min >= W);
      if (!x) { const n = groups[g].find(y => !y.cancel); return n && !away ? { cls: 'v-no', big: 'No llegas', small: `El próximo (${hhmm(n.est)}) sale en ${mins(n.est - S.min)}: no da tiempo a pie` } : { cls: 'v-no', big: 'Sin trenes', small: 'No hay salidas próximas en este sentido' }; }
      // color según la prisa: verde = vas sobrado, ámbar = sal pronto, rojo = sal ya
      const slack = x.est - S.min - W, cls = away || atSt ? 'v-info' : onWay ? (slack < 1.5 ? 'v-warn' : 'v-ok') : slack < 1.5 ? 'v-bad' : slack < 5 ? 'v-warn' : 'v-ok';
      const nxtOk = x.ghost ? groups[g].find(y => !y.cancel && !y.ghost && y.live && y.est > x.est) : null;
      if (xp && slack < 0 && !away && !atSt) { const n2 = groups[g].find(y => !y.cancel && !y.gone && !y.ghost && y !== x && y.est - S.min >= W); return { cls: 'v-no', pin: 1, miss: 1, nxt: n2, x, ghost: !!x.ghost, big: 'No llegas a pie', small: `${hhmm(x.est)} · ${x.fam} a ${x.dest}${x.plat ? ' · vía ' + x.plat : ''}${x.num ? ' · ' + 'tren\u00a0' + x.num : ''}`, warn: n2 ? `➡️ ${'El siguiente'}: ${n2.est - S.min - W < 1 ? '¡sal ya!' : 'sal en' + ' ' + mins(n2.est - S.min - W)} · ${hhmm(n2.est)}${n2.arr != null ? ' → ' + hhmm(n2.arr) : ''}${n2.plat ? ' · vía ' + n2.plat : ''}${n2.num ? ' · ' + 'tren\u00a0' + n2.num : ''}` : '' }; }
      return { pin: xp ? 1 : 0, cls, ghost: !!x.ghost, big: away || atSt ? (slack < 1 ? 'Sale ahora' : 'Sale en ' + mins(slack)) : onWay ? (slack < 1.5 ? '¡Date prisa!' : 'Llegas con ' + mins(slack) + ' de margen') : slack < 1.5 ? '¡Sal ya!' : 'Sal en ' + mins(slack), warn: x.unconf ? '⚠️ ' + 'Rodalies no anuncia este tren: hora según el horario oficial' : xp && !x.live && x.rodLive && !x.ghost ? '📡 ' + 'Sin posición de Renfe · hora en directo de Rodalies' : !x.ghost && x.noPos && xp ? '📡 ' + 'Renfe no da su posición: hora según horario' : !x.ghost && x.late && xp ? '⏳ Aún no ha salido de su estación de origen' : x.ghost ? `⚠️ Sin señal de Renfe: puede no pasar${nxtOk ? ` · el siguiente en marcha sale a las ${hhmm(nxtOk.est)}` : ''}` : bad ? '⚠️ Servicio afectado por una incidencia' : '', small: `${x.bus ? '🚌 autobús · ' : ''}${hhmm(x.est)} · ${x.fam} a ${x.dest}${x.plat ? ' · vía ' + x.plat : ''}${x.dl >= 1 ? ` · +${Math.round(x.dl)} min` : ''}${x.arr != null ? ` · llegas a las ${hhmm(x.arr)}` : ''}${x.num ? ' · ' + 'tren\u00a0' + x.num : ''}`, x };
    };
    // hora estimada de llegada a la otra estación (casa / trabajo / Barcelona) con el retraso actual
    const arrSet = refSet || new Set([ref]);
    const arrOf = x => { const tr = x.tr; if (!tr) return null; const st = tr.pat.stops, i = st.indexOf(sidx); if (i < 0) return null; let j = -1; for (let q = i + 1; q < st.length; q++) if (arrSet.has(st[q])) { j = q; break; } if (j < 0) return null; return x.est + (tr.pat.t[2 * j] - tr.pat.t[2 * i + 1]); };
    groups.to.forEach(x => { x.arr = arrOf(x); });
    const g2 = groups.out.length ? 'out' : 'otros', vb = verdict('to'), vo = verdict(g2);
    if (!away && P !== NEAR && vb.x && P === whereAmI()) delayNotify(P, vb.x, ST[sidx].n, W);   // solo del sitio donde estás (no del viaje de vuelta)
    // esperando en el andén: aviso con vibración cuando el próximo tren está a 2 min
    if (atSt || (P === NEAR && NEAR.acc <= 40 && (NEAR.dist[P.st[P.i]] || 9) < 0.08)) for (const x of [vb.x, vo.x].concat(P === NEAR ? [verdict('all').x] : [])) if (x && !x.cancel && x.est - S.min <= 2 && x.est - S.min > -0.5) { const key = 'w' + x.num + '|' + Math.round(x.sm); if (!DN.has(key)) { DN.add(key); buzz(`🚆 Llega tu tren · ${x.fam} a ${x.dest}`, `${Math.round(x.est - S.min) <= 1 ? 'Ya llega' : 'En unos ' + Math.round(x.est - S.min) + ' min'} a ${ST[sidx].n}${x.plat ? ' · vía ' + x.plat : ''}`); } }
    const useLive = live() && S.live;
    const oneLine = fams.size === 1;
    const urg = x => { const t = x.est - S.min; if (away) return x.cancel ? 'cx' : t < 0 ? 'u-miss' : 'u-info'; return x.cancel ? 'cx' : t < W ? 'u-miss' : t < W + 1.5 ? 'u-now' : t < W + 5 ? 'u-soon' : 'u-ok'; };
    // fila: [minutos / hora] [● destino con color de línea · observación] [retraso] [vía]
    const row = x => { if (x.gone) return `<li class="hr u-gone${x.live ? ' on' : ''}${isSel(x) ? ' sel' : ''} go" data-dk="${DK.push(x) - 1}" title="Ya ha salido: toca para ver dónde va"><span class="hrt"><b>${hhmm(x.est)}</b><small>salió ${ago(Math.max(1, Math.round(S.min - x.est)) + ' min')}</small></span><span class="hrd">${dstP((oneLine ? '' : x.fam + ' · ') + x.dest, x.fam)}<small class="hro">tren ${esc(x.num)}</small></span><span class="hrm">${x.dl >= 1 ? `<em class="dl ${dlCls(x.dl)}">+${Math.round(x.dl)}</em>` : ''}</span></li>`;
      const miss = !x.cancel && x.est - S.min < W, r = repsFor(x.num, '');
      return `<li class="hr ${urg(x)}${x.live ? ' on' : ''}${x.ghost ? ' gh' : ''}${isSel(x) ? ' sel' : ''}${pn && String(x.num) === pn ? ' pin' : ''}${FAV.some(f => { const t = favTrip(f, R.days.indexOf(S.ymd)); return t && String(t.num) === String(x.num); }) ? ' fav' : ''} go" style="--lc:${FC[x.fam] || '#6b7385'}" data-dk="${DK.push(x) - 1}" title="${x.cancel ? 'Cancelado' : miss ? 'No llegas a pie' : 'Ver este tren en el mapa'}">`
        + `<span class="hrt"><b>${x.cancel ? '✕' : miss ? hhmm(x.est) : mins(x.est - S.min)}</b><small>${x.cancel ? 'cancelado' : x.late ? 'aún no ha salido' : miss ? 'no llegas' : x.ghost ? '<i class="ghs" title="Debería estar circulando y Renfe no da su posición">sin señal</i>' : hhmm(x.est)}</small></span>`
        + `<span class="hrd">${x.bus ? '<i class="bus" title="Autobús que sustituye al tren por obras">🚌</i>' : ''}${dstP((oneLine ? '' : x.fam + ' · ') + x.dest, x.fam)}${r.length ? `<i class="cr" title="${esc(r.map(y => tipo(y.kind)).join(' · '))}">${r.slice(0, 2).map(y => CK[y.kind]).join('')}</i>` : ''}${x.arr != null ? `<small class="hro hro1">llegas a las ${hhmm(x.arr)}${x.num ? ' · ' + 'tren\u00a0' + esc(x.num) : ''}${(() => { const th = x.num && trainHist(x.num); return th && th.n >= 3 && th.late / th.n >= 0.5 ? ` · <b class="slate">suele ir tarde (${th.late}/${th.n})</b>` : ''; })()}</small>` : ''}${x.obs ? `<small class="hro">${esc(x.obs)}</small>` : ''}${x.unconf ? `<small class="hro unc">${'según horario · Rodalies no lo anuncia'}</small>` : ''}</span>`
        + `<span class="hrm">${!x.cancel && x.dl >= 1 ? `<em class="dl ${dlCls(x.dl)}">+${Math.round(x.dl)}</em>` : ''}${x.plat ? `<i class="via">vía ${esc(x.plat)}</i>` : ''}</span></li>`; };
    const col = (g, v, hk) => `<div class="hcol"><div class="hdir">${label(g)}${hk ? `<button type="button" class="hhide" data-hhide="${P.key}:${hk}" title="${'Ocultar esta dirección'}">✕</button>` : ''}</div><div class="hv ${v.cls}${v.ghost || (v.pin && v.x && v.x.noPos && !noPosFams([v.x.fam]).length) ? ' gh' : ''}${v.x ? ' go' : ''}"${v.miss && v.nxt && v.nxt.num ? ` data-pinnext="${P.key}:${esc(v.nxt.num)}" title="${'Elegir el siguiente'}"` : v.x ? ` data-dk="${DK.push(v.x) - 1}"` : ''}><b>${v.big}</b>${v.pin ? `<button type="button" class="hunpin" data-unpin="${P.key}" title="${'Volver al próximo tren'}">📌 ${'Elegido'} ✕</button>` : ''}<small>${esc(v.small)}</small>${v.pin && v.x && v.x.num ? (w => w ? `<span class="hwhere">📍 ${esc(w)}</span>` : '')(trainWhere(v.x.num)) : ''}${v.warn ? `<span class="hvw">${esc(v.warn)}</span>` : ''}</div><ol>${groups[g].slice(0, (P.more ? (g === 'all' || P.hide ? 20 : 10) : g === 'all' ? 7 : P.hide ? 8 : 4) + groups[g].filter(x => x.gone).length).map(row).join('') || '<li><span>—</span></li>'}</ol></div>`;
    if (P === NEAR) { const va = verdict('all'); var sumN = va.x ? `<span class="nw">${va.big}</span> · <span class="nw"><b>${hhmm(va.x.est)}</b> ${esc(va.x.fam)}</span> a ${esc(va.x.dest)}${va.x.plat ? '<span class="nw">' + ' · vía ' + esc(va.x.plat) + '</span>' : ''}` : va.big; }
    const sum = P === NEAR ? sumN : vb.x ? `<span class="nw">${vb.big}${vb.x.plat ? ' · vía ' + esc(vb.x.plat) : ''}</span> · <span class="nw"><b>${hhmm(vb.x.est)}</b>${vb.x.arr != null ? ` → <span class="lla">llegas a las </span><b>${hhmm(vb.x.arr)}</b>` : ''}</span><span class="lla"> hacia ${esc(refName)}</span>` : 'Sin trenes hacia ' + esc(refName);
    const vp = P === NEAR ? (v => v.pin ? v : null)(verdict('all')) : vb.pin ? vb : vo.pin ? vo : null;
    // tren elegido sin señal de Renfe o cancelado: ficha en gris rayado y el siguiente tren que sí circula
    const vgG = vp ? (P === NEAR ? 'all' : vp === vb ? 'to' : g2) : '', vgBad = !!(vp && (vp.ghost || vp.x.noPos && !noPosFams([vp.x.fam]).length || vp.x.cancel)),   /* si Renfe no da posiciones de toda la línea ya lo dice el aviso general: no se marca este tren */ vgMiss = !!(vp && vp.miss);
    const vgNext = vgBad ? groups[vgG].find(y => !y.cancel && !y.ghost && !y.gone && y.est > vp.x.est - 0.01 && y !== vp.x && y.est - S.min >= (away || atSt ? 0 : W)) : null;
    const sumMiss = vgMiss ? `<span class="nw">${'No llegas a las'} <b>${hhmm(vp.x.est)}</b></span>${vp.nxt ? ` · <span class="nw">${'siguiente'} <b>${hhmm(vp.nxt.est)}</b>${vp.nxt.arr != null ? ` → <b>${hhmm(vp.nxt.arr)}</b>` : ''}</span>` : ''}` : '';
    const sumBad = vgBad ? `<span class="nw">⚠️ ${vp.x.cancel ? 'Cancelado' : vp.ghost ? 'Sin señal' : 'Sin posición'}</span>${vp.x.cancel ? '' : ` · <span class="nw"><b>${hhmm(vp.x.est)}</b>${vp.x.arr != null ? ` → <b>${hhmm(vp.x.arr)}</b>` : ''}</span>`}${vgNext ? ` · <span class="nw">${'siguiente'} <b>${hhmm(vgNext.est)}</b>${vgNext.arr != null ? ` → <b>${hhmm(vgNext.arr)}</b>` : ''}${vgNext.plat ? ' · vía ' + esc(vgNext.plat) : ''}</span>` : ''}` : '';
    return `<div class="hplace ${P.open ? 'open' : ''}${vp ? ' pinned' : ''}${vgBad ? ' pgh' : ''}"><button type="button" class="hhead" data-ht="${P.key}"><span class="hico">${P.ico}</span><span class="htit"><b>${esc(ST[sidx].n)}${vp && vp.x.num ? `<i class="hpn">📌 ${esc(vp.x.num)}</i>` : ''}</b><small class="c${vgBad || vgMiss ? 'warn' : bad ? 'bad' : vb.cls.slice(2)}">${vgBad ? sumBad : vgMiss ? sumMiss : sum}</small>${vp && vp.x && vp.x.num ? (w => w ? `<small class="nofit hwh2">📍 ${esc(w)}</small>` : '')(trainWhere(vp.x.num)) : ''}</span><span class="hchev">▾</span></button>` + (P.open ? `
      <div class="hbody">
        ${P.st.length > 1 ? `<div class="hst">${P.st.map((id, k) => { const i = SID.get(id); return i == null ? '' : `<button type="button" data-hs="${P.key}:${k}" class="${k === P.i ? 'on' : ''}">${esc(ST[i].n)}</button>`; }).join('')}</div>` : ''}
        ${P === NEAR ? `<div class="hwalk">📍 A ${(() => { const d = NEAR.dist[P.st[P.i]] || 0; return d < 1 ? Math.round(d * 100) * 10 + ' m' : d.toFixed(1).replace('.', ',') + ' km'; })()} · unos <b>${P.walk} min</b> a pie</div>` : ''}
        ${onPlat ? `<div class="hwalk away">${'🚉 En el andén · esperando el tren: horas de salida, sin contar el camino · '}<a data-hplat="${P.key}:0">cancelar</a></div>` : atSt ? `<div class="hwalk away">🚉 Estás en la estación: horas de salida del tren · <a data-hnotst="${P.key}">no, estoy en casa</a></div>` : onWay ? `<div class="hwalk away">🚶 De camino · te quedan unos <b>${Math.round(wayLeft)} min</b>${gpsOk && kmTo <= 3 ? ' (según tu ubicación)' : ''} · <a data-hgo="${P.key}:0">cancelar</a></div>` : ''}${away && P !== NEAR ? `<div class="hwalk away">📍 Estás a ${kmTo < 10 ? kmTo.toFixed(1).replace('.', ',') : Math.round(kmTo)} km: horas de salida del tren, sin contar el camino</div>` : ''}<div class="hwalk"${away || atSt || onWay ? ' hidden' : ''}><button type="button" class="hgo" data-hgo="${P.key}:1">🚶 Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${P.key}:1">${'🚉 En el andén'}</button><span class="hstep" title="${'Tiempo que tardas a pie hasta la estación'}">${'Tardo'} <button type="button" data-hw="${P.key}:-1">−</button><b>${P.walk} min</b><button type="button" data-hw="${P.key}:1">+</button> ${'a pie'}</span></div>
        ${(() => { const fs = FAV.filter(f => P.st.includes(f.sid)); if (!fs.length) return ''; return `<div class="hfav">${fs.map(f => { const ft = favTrip(f, R.days.indexOf(S.ymd)), x = ft && deps.find(y => String(y.num) === String(ft.num)); return `⭐ <b>${f.t}</b> ${esc(f.fam)} ${x ? (x.cancel ? '<em class="dl d-hi">cancelado</em>' : x.gone ? 'ya ha salido' : x.dl >= 1 ? `<em class="dl ${dlCls(x.dl)}">+${Math.round(x.dl)}</em> sale a las ${hhmm(x.est)}` : '<b class="okc">en hora</b>') : '<small>hoy no circula o aún falta</small>'}`; }).join('<br>')}</div>`; })()}
        ${filtered && toAll ? `<div class="hflt">Solo ${[...fams].sort(natural).map(chipL).join(' ')} · filtro de líneas activo · hacia ${refName} se muestran ${toAll} (tu filtro no va hasta allí)</div>` : offF ? `<div class="hflt">El filtro (${[...famOn].sort(natural).slice(0, 3).map(chipL).join(' ')}) no pasa por aquí: se ven todas tus líneas</div>` : ''}
        ${al.length ? `<div class="hal ${bad ? 'bad' : ''}${HALOPEN.v ? ' open' : ''}" data-halx>⚠️ ${srcB(al[0])} ${esc(al[0].txt)} <small>${whenTxt(al[0])}</small>${al.length > 1 ? ` <a data-hal>+${al.length - 1} avisos</a>` : ''}</div>` : `<div class="hok">✓ Sin avisos para ${[...fams].sort(natural).join(', ')}</div>`}
        ${(() => { const r = P.st.flatMap(id => repsFor('', id)); return r.length ? `<div class="hcr">${r.slice(0, 3).map(y => `${CK[y.kind]} <b>${esc(tipo(y.kind))}</b> <small>${y.up > 1 ? y.up + ' viajeros · ' : ''}${repAge(y)}</small>`).join('<br>')}</div>` : ''; })()}
        ${P === NEAR ? `<div class="hcols one">${col('all', verdict('all'))}</div>` : (P.hide === 'out' ? `<div class="hcols one">${col('to', vb)}</div><a class="hshow" data-hshow="${P.key}">↺ Mostrar la otra dirección</a>` : P.hide === 'to' ? `<div class="hcols one">${col(g2, vo)}</div><a class="hshow" data-hshow="${P.key}">↺ Mostrar la otra dirección</a>` : `<div class="hcols">${col('to', vb, 'to')}${col(g2, vo, 'out')}</div>`)}
        ${deps.length > (P === NEAR ? 7 : 8) ? `<button type="button" class="hmore" data-hmore="${P.key}">${P.more ? '▴ Menos trenes' : '▾ Más trenes · próximas horas'}</button>` : ''}
        <div class="hsrc"><span class="hsrcT" hidden title="${useLive ? (DEPS.get(ST[sidx].id)?.d ? 'Salidas oficiales de Rodalies en directo' : 'Horario + retrasos mientras cargan las salidas oficiales') : 'Previsión según horario (sin tiempo real)'} · ● = ${'tren circulando'}">${useLive ? (DEPS.get(ST[sidx].id)?.d ? '● oficial en directo' : '● horario + retrasos') : 'según horario'}</span><a data-hmap="${sidx}">🗺️ mapa</a>${P === NEAR ? '<a data-hloc>📍 actualizar</a>' : `<a data-hset="${P.key}">✎ cambiar</a>`}${P === WORK ? `<a data-hdel="work">✕ quitar</a>` : ''}</div>
      </div>` : '') + '</div>';
  }
  // ---------- avisos en el móvil (Web Push a través del puente) ----------
  const PUSH = { on: (() => { try { return localStorage.getItem('rod_push') === '1'; } catch (e) { return false; } })(), busy: false };
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  // líneas de tus estaciones (Casa y Trabajo); en Ajustes puedes quitar las que no te interesan para los avisos
  const ALOFF = new Set((() => { try { return JSON.parse(localStorage.getItem('rod_aloff') || '[]'); } catch (e) { return []; } })());
  const allLines = () => { const lines = new Set(); [...HOME.st, ...WORK.st].forEach(id => { const i = SID.get(id); if (i != null) ST[i].fams.forEach(f => lines.add(f)); }); return [...lines].sort(natural); };
  const pushTarget = () => ({ stations: [...HOME.st, ...WORK.st], lines: allLines().filter(f => !ALOFF.has(f)) });
  const u8 = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));
  async function pushReg() {
    if (!('serviceWorker' in navigator) || !('PushManager' in window) || location.protocol !== 'https:') return null;
    return (await navigator.serviceWorker.getRegistration()) || navigator.serviceWorker.register('./sw.js');
  }
  async function pushSend(sub) { const r = await fetch(RT.url.replace(/\/+$/, '') + '/push/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sub: sub.toJSON(), ...pushTarget() }) }); const j = await r.json(); if (!j.ok) throw new Error(j.err || 'error'); }
  // sin servidor: avisos del propio navegador mientras la app está abierta (o en segundo plano)
  // ¿desde dónde vas a salir? la estación de Casa o Trabajo más cercana a tu última ubicación (hasta 3 h);
  // sin ubicación: por la mañana desde casa y por la tarde desde el trabajo
  function whereAmI() {
    const h = curSt(HOME), w = curSt(WORK); if (h == null || w == null) return h != null ? HOME : w != null ? WORK : null;
    if (NEAR.w && Date.now() - NEAR.fix < 3 * 3600e3) { const d = i => Math.hypot(ST[i].w[0] - NEAR.w[0], ST[i].w[1] - NEAR.w[1]); return d(h) <= d(w) ? HOME : WORK; }
    return new Date().getHours() < 13 ? HOME : WORK;
  }
  // un aviso que habla de un tren concreto o de los trenes «hacia X» solo interesa si va en tu sentido (de donde estás hacia el otro sitio)
  function alertForMe(a) {
    const P = whereAmI(), Q = P === HOME ? WORK : HOME, o = P && curSt(P), d = Q && curSt(Q); if (o == null || d == null) return true;
    const t = (a.es || '') + ' ' + (a.txt || ''), k = R.days.indexOf(nowState().ymd), S = nowState();
    const nums = [...new Set([...t.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(m => m[1]))];
    if (nums.length) return nums.some(n => { const tr = tripByNum(n); if (!tr) return false; const st = tr.pat.stops, io = st.indexOf(o), id = st.indexOf(d); if (io < 0 || id < 0 || io > id) return false; const dep = tr.t0 + tr.pat.t[2 * io + 1]; return dep > S.min - 60 && dep < S.min + 150; });
    const m = t.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);
    if (m) { const nm = m[1].toLowerCase(); const T = ST.findIndex(x => x.n && nm.startsWith(x.n.toLowerCase())); if (T >= 0) { const tr = (byDay[k] || []).find(x => { const st = x.pat.stops; return st[st.length - 1] === T && st.includes(o) && st.includes(d); }); if (tr) { const st = tr.pat.stops; return st.indexOf(o) < st.indexOf(d); } } }
    return true;   // aviso general de la línea
  }
  const LN = { on: (() => { try { return localStorage.getItem('rod_ln') === '1'; } catch (e) { return false; } })(), seen: null };
  function localNotify() {
    const { lines, stations } = pushTarget(), L = new Set(lines), S = new Set(stations.map(id => SID.get(id)));
    const rel = RT.alerts.filter(a => ([...a.fams].some(f => L.has(f)) || [...(a.stops || [])].some(i => S.has(i))) && alertForMe(a));
    if (!LN.seen) { try { LN.seen = new Set(JSON.parse(localStorage.getItem('rod_lnseen') || '[]')); } catch (e) { LN.seen = new Set(); } if (!LN.seen.size) { rel.forEach(a => LN.seen.add(a.id + '|' + a.txt.length)); saveSeen(); return; } }
    const fresh = rel.filter(a => !LN.seen.has(a.id + '|' + a.txt.length)); if (!fresh.length) return;
    fresh.forEach(a => LN.seen.add(a.id + '|' + a.txt.length)); saveSeen();
    if (!LN.on || !('Notification' in window) || Notification.permission !== 'granted') return;
    for (const a of fresh.slice(0, 3)) {
      const title = (a.src === 'Adif' ? 'Adif · vía' : 'Rodalies') + (a.fams.size ? ' · ' + [...a.fams].sort(natural).slice(0, 4).join(' ') : ''), opt = { body: a.txt.slice(0, 240), icon: 'icons/icon-192.png', tag: 'rod-' + a.id };
      (navigator.serviceWorker && navigator.serviceWorker.getRegistration ? navigator.serviceWorker.getRegistration() : Promise.resolve(null)).then(r => r ? r.showNotification(title, opt) : new Notification(title, opt)).catch(() => { try { new Notification(title, opt); } catch (e) {} });
    }
  }
  function saveSeen() { try { localStorage.setItem('rod_lnseen', JSON.stringify([...LN.seen].slice(-400))); } catch (e) {} }
  async function lnToggle() {
    if (LN.on) { LN.on = false; toast('Avisos desactivados'); }
    else {
      if (!('Notification' in window)) { toast(isIOS && !standalone() ? 'En iPhone: Compartir → Añadir a pantalla de inicio y activa los avisos desde la app' : 'Este navegador no permite avisos'); return; }
      const p = await Notification.requestPermission(); if (p !== 'granted') { toast('Sin permiso para avisos: actívalo en los ajustes del navegador'); return; }
      LN.on = true; toast('Listo: te aviso de incidencias en ' + pushTarget().lines.join(', ') + ' mientras la app esté abierta');
    }
    try { localStorage.setItem('rod_ln', LN.on ? '1' : ''); } catch (e) {} renderHome(true);
  }
  async function pushToggle() {
    if (!RT.repOk) return lnToggle();   // el puente no tiene base de datos: avisos locales
    if (PUSH.busy) return; PUSH.busy = true;
    try {
      const reg = await pushReg();
      if (!reg) { toast(isIOS && !standalone() ? 'En iPhone: Compartir → Añadir a pantalla de inicio, abre la app desde ahí y activa los avisos' : 'Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)'); return; }
      await navigator.serviceWorker.ready;
      if (PUSH.on) {
        const sub = await reg.pushManager.getSubscription();
        if (sub) { fetch(RT.url.replace(/\/+$/, '') + '/push/unsubscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ endpoint: sub.endpoint }) }).catch(() => {}); await sub.unsubscribe().catch(() => {}); }
        PUSH.on = false; toast('Avisos desactivados');
      } else {
        if (!RT.url) { toast('Hace falta el puente en directo'); return; }
        const perm = await Notification.requestPermission(); if (perm !== 'granted') { toast('Sin permiso para avisos: actívalo en los ajustes del navegador'); return; }
        const key = (await get(RT.url.replace(/\/+$/, ''), '/push/key')).key;
        const sub = (await reg.pushManager.getSubscription()) || await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: u8(key) });
        await pushSend(sub); PUSH.on = true; toast('Listo: te avisaremos de incidencias en ' + pushTarget().lines.join(', '));
      }
      try { localStorage.setItem('rod_push', PUSH.on ? '1' : ''); } catch (e) {}
    } catch (e) { toast('No se han podido activar los avisos: ' + (e.message || e)); }
    finally { PUSH.busy = false; renderHome(true); }
  }
  async function pushSync() { if (!PUSH.on) return; try { const reg = await pushReg(), sub = reg && await reg.pushManager.getSubscription(); if (sub) await pushSend(sub); } catch (e) {} }
  // móvil: con una ficha abierta, el panel de arriba se reduce a una sola línea; tocándola se despliega
  let infExp = false, lastSel = '';
  function syncCompact() {
    const sel = selTrip ? 't' + (selTrip.tid || selTrip.vtid) : selStation >= 0 ? 's' + selStation : selAlerts ? 'a' : selNews ? 'n' : '';
    if (sel !== lastSel) { infExp = false; lastSel = sel; }
    const on = innerWidth <= 640 && !!sel && !infExp && !document.documentElement.classList.contains('tabmode'), inf = $('#inf');   // con pestañas, Ahora siempre muestra todos tus paneles
    if (inf.classList.contains('compact') !== on) { inf.classList.toggle('compact', on); requestAnimationFrame(() => { if (mcs.style.display !== 'none') { const ib = inf.getBoundingClientRect().bottom; mcs.style.top = Math.round(ib + 8) + 'px'; mcs.style.maxHeight = Math.max(140, $('#rc').getBoundingClientRect().top - ib - 16) + 'px'; } }); }
  }
  // aviso en el móvil: el próximo tren que te conviene va con 10 min o más de retraso (una vez por tren)
  const DN = new Set();
  function delayNotify(P, x, stName, W) {
    if (!(LN.on || PUSH.on) || !('Notification' in window) || Notification.permission !== 'granted') return;
    const S = nowState(), until = x.sm - S.min - W; if (!S.live || x.dl < 10 || until > 40 || DN.has(x.num + '|' + x.sm)) return;
    DN.add(x.num + '|' + x.sm);
    const title = `${P.ico} ${stName} ${P === WORK ? 'hacia casa' : 'hacia el trabajo'}: el de las ${hhmm(x.sm)} va con +${Math.round(x.dl)} min`, body = `${x.fam} a ${x.dest}: saldrá hacia las ${hhmm(x.est)}. Si ibas a cogerlo, puedes salir ${Math.round(x.dl)} min más tarde. (Aviso de tu panel ${P === WORK ? 'Trabajo' : 'Casa'}; se quita con la 🔔.)`;
    (navigator.serviceWorker && navigator.serviceWorker.getRegistration ? navigator.serviceWorker.getRegistration() : Promise.resolve(null)).then(r => r ? r.showNotification(title, { body, tag: 'rd-' + x.num, icon: 'icons/icon-192.png' }) : new Notification(title, { body })).catch(() => { try { new Notification(title, { body }); } catch (e) {} });
  }
  const NOW = { open: false, seen: new Set((() => { try { return JSON.parse(localStorage.getItem('rod_seen') || '[]'); } catch (e) { return []; } })()) };
  document.addEventListener('click', e => { const h = e.target.closest && e.target.closest('[data-nowx]'); if (!h || e.target.closest('a')) return; const ids = h.dataset.nowx ? h.dataset.nowx.split('|') : []; if (!ids.length) return;
    if (h.classList.contains('col')) NOW.open = true; else { NOW.open = false; ids.forEach(i => NOW.seen.add(i)); try { localStorage.setItem('rod_seen', JSON.stringify([...NOW.seen].slice(-200))); } catch (x) {} } renderHome(true); });
  // pestaña Ahora: todos los avisos de tus líneas, completos, y el canal de WhatsApp de Rodalies
  function nowBlock(tg) {
    let lines = tg.lines; if (!lines.length && NEAR.st && NEAR.st.length) { const s = new Set(); NEAR.st.forEach(id => { const i = SID.get(id); if (i != null) ST[i].fams.forEach(f => s.add(f)); }); lines = [...s].sort(natural); }
    const fs = new Set(lines), al = RT.alerts.filter(a => !fs.size || [...a.fams].some(f => fs.has(f)));
    const wa = `<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${'Canal de avisos de Rodalies en WhatsApp'}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`;
    const sv0 = al.reduce((m, a) => Math.max(m, sevOf(a)), 0), ico = sv0 === 3 ? '⛔ ' : sv0 === 2 ? '⚠️ ' : 'ℹ️ ';   // icono además del color (para quien no distingue bien los colores)
    const head = `<div class="hnowh"><span class="hnowl"><b>${al.length ? ico + al.length + (al.length === 1 ? ' aviso' : ' avisos') : '✓ Sin avisos'}</b>${lines.length ? lines.map(chipL).join('') : ''}</span>${wa}</div>`;
    // avisos nuevos se ven enteros; una vez leídos (tocando la cabecera) se recogen en una línea hasta que llegue otro nuevo
    const unseen = al.filter(a => !NOW.seen.has(a.id)), exp = al.length && (NOW.open || unseen.length > 0);
    const sv = al.reduce((m, a) => Math.max(m, sevOf(a)), 0);
    return `<div class="hnow${sv === 3 ? ' bad' : sv === 2 ? ' warn' : sv === 1 ? ' info' : ''}${al.length && !exp ? ' col' : ''}" data-nowx="${esc(al.map(a => a.id).join('|'))}">${head}${reducedHtml(tg, true)}${exp ? al.slice().sort((a, b) => sevOf(b) - sevOf(a)).map(a => `<p class="sv${sevOf(a)}">${srcB(a)} ${esc(a.txt)} <small>${whenTxt(a)}</small></p>`).join('') + `<small class="hnowt">${'Toca aquí para recogerlo'}</small>` : ''}</div>`;
  }
  // Ahora: la línea «Sal en… · vía · hora → hora» siempre en una sola línea; si no cabe, se reduce un poco la letra (mín. 86 %)
  // el tren elegido vale solo para hoy (el mismo número circula cada día): se guarda con la fecha
  const PIN = new Map((() => { try { const d = madrid(new Date()).ymd; return JSON.parse(localStorage.getItem('rod_pin') || '[]').filter(e => e[2] === d).map(e => [e[0], e[1]]); } catch (e) { return []; } })());
  function fitHome() { if (!document.documentElement.classList.contains('tabmode')) return; const L = [...document.querySelectorAll('#home .hhead .htit small:not(.nofit)')]; const sz = (s, k) => { s.style.fontSize = k === 1 ? '' : (s._f0 * k).toFixed(1) + 'px'; s.querySelectorAll('b').forEach(b => b.style.fontSize = k === 1 ? '' : (s._b0 * k).toFixed(1) + 'px'); }; let k = 1; for (const s of L) { s.style.whiteSpace = ''; sz(s, 1); if (!s.clientWidth) continue; s._f0 = parseFloat(getComputedStyle(s).fontSize); const b = s.querySelector('b'); s._b0 = b ? parseFloat(getComputedStyle(b).fontSize) : 0; while (s.scrollWidth > s.clientWidth + 1 && k > 0.86) { k -= 0.02; sz(s, k); } } if (k < 1) for (const s of L) if (s._f0) sz(s, k); for (const s of L) if (s.scrollWidth > s.clientWidth + 1) s.style.whiteSpace = 'normal'; }   /* si ni así cabe, pasa a 2 líneas (la ficha mide lo mismo) */   /* mismo tamaño en todas las fichas */
  addEventListener('resize', () => { try { fitHome(); } catch (e) {} });
  // tren elegido a mano en Ahora (por casa / trabajo / cerca): se guarda hasta que sale
  const deps0 = (k, n) => { const P = k === 'work' ? WORK : k === 'near' ? NEAR : HOME, s = P && curSt(P); return s == null ? null : departuresFor(s).find(y => String(y.num) === String(n)) || null; };
  function pinSet(k, num) { if (num) PIN.set(k, num); else PIN.delete(k); try { const d = madrid(new Date()).ymd; localStorage.setItem('rod_pin', JSON.stringify([...PIN].map(([k, n]) => [k, n, d]))); } catch (e) {} }
  // vas en un tren (detectado por el GPS): ficha con por dónde va y a qué hora llegas
  // ¿dónde está ahora un tren? (para el tren elegido en Ahora)
  function trainWhere(num) {
    const a = act.find(x => x.tr && String(x.tr.num) === String(num)); if (!a) { const t = tripByNum(num), S = nowState(), k = R.days.indexOf(S.ymd); if (!t) return ''; const off = t.day === k - 1 ? 1440 : 0, d0 = t.t0 + t.pat.t[1] - off; return d0 > S.min ? 'Aún no ha salido de ' + ST[t.pat.stops[0]].n + ' (' + hhmm(d0) + ')' : ''; }
    const tr = a.tr, nm = i => ST[tr.pat.stops[i]].n;
    if (a.real) { const v = a.v; if (v.pre) return 'Aún no ha empezado su viaje';
      // mismas reglas que la ficha del mapa, para que nunca digan cosas distintas
      if (v.atStop >= 0 && v.before) return 'Llegando a ' + nm(v.atStop);
      if (v.atStop >= 0 && (v.st === 'STOPPED_AT' || a.stop === 'st')) return (fresh() ? 'Parado en ' : 'Según el último dato: en ') + nm(v.atStop);
      if (!fresh() && v.next > 0) return 'Según el último dato: entre ' + nm(v.next - 1) + ' y ' + nm(v.next);
      if (v.atStop >= 0 && v.next > v.atStop) return 'Saliendo de ' + nm(v.atStop) + ' hacia ' + nm(v.next);
      if (v.atStop >= 0) return 'En ' + nm(v.atStop);
      if (a.stop === 'via' && v.next > 0) return '⏸ ' + 'Detenido entre ' + nm(v.next - 1) + ' y ' + nm(v.next);
      if (v.next > 0) return 'Entre ' + nm(v.next - 1) + ' y ' + nm(v.next);
      return v.next === 0 ? 'Hacia ' + nm(0) : ''; }
    const nx = a.p && a.p.next; return nx > 0 ? 'Según horario: entre ' + nm(nx - 1) + ' y ' + nm(nx) : '';
  }
  // servicio reducido hoy (huelga, obras…): se compara cuántos trenes de tus líneas hay hoy en el horario oficial
  // con un día del mismo tipo (laborable, sábado o festivo/domingo) de los próximos días
  const RED = { k: '', v: null };
  function reducedToday(lines) {
    const S = nowState(), k = R.days.indexOf(S.ymd); if (k < 0 || !lines.length) return null;
    // se cuenta en TU estación (casa, si no trabajo): «por Vilassar de Mar pasan 90 de 190»; si no hay, por líneas
    const WA = whereAmI(), si = (WA && curSt(WA)) ?? curSt(HOME) ?? curSt(WORK), key = S.ymd + lines.join() + si; if (RED.k === key) return RED.v; RED.k = key;
    const fs = new Set(lines), cnt = si != null ? kk => byDay[kk].filter(t => { const i = t.pat.stops.indexOf(si); return i >= 0 && i < t.pat.stops.length - 1; }).length : kk => byDay[kk].filter(t => fs.has(t.fam)).length, typ = ymd => { const d = new Date(+ymd.slice(0, 4), +ymd.slice(4, 6) - 1, +ymd.slice(6)).getDay(); return d === 0 ? 0 : d === 6 ? 6 : 1; };
    const n = cnt(k), ref = Math.max(0, ...R.days.map((d, kk) => kk !== k && typ(d) === typ(S.ymd) ? cnt(kk) : 0));
    RED.v = ref >= 20 && n < ref * 0.8 ? { n, ref, pct: Math.round(n / ref * 100), st: si != null ? ST[si].n : '' } : null; return RED.v;
  }
  function reducedHtml(tg, inline) {
    const lines = tg.lines || [], r = reducedToday(lines); if (!r) return '';
    const strike = RT.alerts.some(a => [...a.fams].some(f => lines.includes(f)) && /huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((a.es || '') + ' ' + a.txt));
    if (inline) return `<div class="hnowred">🗓️ <b>${strike ? 'Servicios mínimos por huelga' : 'Servicio reducido hoy'}</b>: ${r.st ? `${'por'} ${esc(r.st)} ${'pasan'} ${r.n} ${'de'} ${r.ref} ${'trenes'}` : `${r.n} ${'de'} ${r.ref} ${'trenes'}`} (${r.pct} %) · ${'ya incluido en el horario'}</div>`;
    return `<div class="hred">🗓️ <b>${strike ? 'Hoy hay servicios mínimos por huelga' : 'Hoy el servicio es reducido'}</b> · ${'el horario oficial de hoy ya lo incluye'}: ${r.st ? `${'por'} ${esc(r.st)} ${'pasan'} ${r.n} ${'de'} ${r.ref} ${'trenes'}` : `${r.n} ${'de'} ${r.ref} ${'trenes de'} ${lines.join(', ')}`} (${r.pct} % ${'de un día normal'}).</div>`;
  }
  function noPosHtml(tg) {
    const np = noPosFams(tg.lines || []); if (!np.length) return '';
    const empty = [HOME, WORK].some(P => { const i = curSt(P), O = i != null && DEPS.get(ST[i].id); return O && O.d && Array.isArray(O.d.trains) && !O.d.trains.length; });
    return `<div class="hnopos">📡 <b>${'Renfe no da la posición de los trenes de'} ${np.join(', ')}</b> · ${'horas según el horario oficial, sin retrasos en directo'}${empty ? ' · ' + 'Rodalies tampoco anuncia salidas' : ''}. ${'Fíate del panel de la estación.'}</div>`;
  }
  // otros trenes cerca de ti (por si la detección se ha equivocado): se pueden elegir a mano
  function onbAlt(cur) {
    if (!NEAR.w) return []; const k = NEAR.k || 1;
    return act.filter(t => t.tr && t.tr !== cur && t.p && t.p.w && Math.hypot(t.p.w[0] - NEAR.w[0], t.p.w[1] - NEAR.w[1]) * k < 3).sort((x, y) => Math.hypot(x.p.w[0] - NEAR.w[0], x.p.w[1] - NEAR.w[1]) - Math.hypot(y.p.w[0] - NEAR.w[0], y.p.w[1] - NEAR.w[1])).slice(0, 2).map(t => t.tr);
  }
  function onbHtml(S) {
    if (!ONB.tid) return '';
    const t = act.find(x => x.tr && String(x.tr.num) === ONB.tid) || activeTrips(S).out.find(x => x.tr && String(x.tr.num) === ONB.tid); if (!t) return '';
    const tr = t.tr, st = tr.pat.stops, nx = t.real ? t.v.next : t.p.next; if (nx == null || nx < 0) return '';
    const d = delayOf(tr), dl = typeof d === 'number' ? Math.max(0, d / 60) : 0, k = R.days.indexOf(S.ymd), off = tr.day === k - 1 ? 1440 : 0;
    let j = ALARM && ALARM.num === ONB.tid ? st.indexOf(SID.get(ALARM.sid)) : -1; if (j < nx) j = st.length - 1;
    const eta = cardEta(tr, t.real ? t.v : null, j, tr.t0 + tr.pat.t[2 * j] + dl - off), left = eta - S.min, at = t.real && t.v.atStop >= 0 ? t.v.atStop : -1;
    const where = trainWhere(tr.num) || 'Hacia ' + ST[st[nx]].n;
    return `<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">🚆</span><span class="htit"><b>${chipL(tr.fam)} ${'tren\u00a0'}${esc(tr.num)}<i class="hpn onbx" data-onbx title="${'No es este'}">✕</i></b><span class="onbch">${onbAlt(tr).map(t => `<i class="onbalt" data-onbpick="${esc(t.num)}">${'¿Vas en el'} ${esc(t.num)}?</i>`).join('')}</span><small class="nofit cok">${esc(where)} · <span class="nw">${'llegas a'} ${esc(ST[st[j]].n)}</span> <span class="nw">${left >= 1 ? 'en ' + mins(left) + ' · ' : ''}<b>${hhmm(eta)}</b>${dl >= 1 ? ` <em class="dl ${dlCls(dl)}">+${Math.round(dl)}</em>` : ''}</span></small></span><span class="hchev">›</span></button></div>`;
  }
  function renderHome(force) {
    const el = $('#home'); if (!el) return;
    const now = performance.now(); if (!force && now - homeT < 4000) return; homeT = now;
    const S = nowState(), DK = [], tg = pushTarget(), far = P => { const i = curSt(P); return i == null || !NEAR.w ? 1 : Math.hypot(ST[i].w[0] - NEAR.w[0], ST[i].w[1] - NEAR.w[1]); }, ORD = [NEAR, ...[HOME, WORK].sort((a, b) => far(a) - far(b))], html = (document.documentElement.classList.contains('tabmode') ? nowBlock(tg) : reducedHtml(tg)) + noPosHtml(tg) + onbHtml(S) + ORD.map(P => placeHtml(P, S, DK)).join('') + (PLACES.some(P => P.open) && tg.lines.length ? `${(() => { return ''; const srv = !!RT.repOk, on = srv ? PUSH.on : LN.on; return `<div class="hpush"><span>🔔 Avisos de ${tg.lines.join(', ')}<small>${srv ? (on ? 'Activados: incidencias oficiales, de Adif y de viajeros' : 'Te llegan aunque tengas la app cerrada') : (on ? 'Activados mientras la app esté abierta' : 'Incidencias nuevas de tus líneas mientras la app esté abierta')}</small></span><button type="button" data-push class="${on ? 'on' : ''}">${on ? 'Desactivar' : 'Activar'}</button></div>`; })()}` : '');
    el.className = PLACES.some(P => P.open) ? 'open' : '';
    let bell = $('#bell'); if (!bell) { bell = document.createElement('button'); bell.type = 'button'; bell.id = 'bell'; bell.onclick = pushToggle; $('#inf .more').prepend(bell); }   // dentro del desplegable ▾
    { const on = RT.repOk ? PUSH.on : LN.on; bell.hidden = !tg.lines.length; bell.className = on ? 'on' : ''; bell.textContent = (on ? '🔔 Avisos activados · ' : '🔕 Activar avisos de ') + tg.lines.join(', '); bell.title = (on ? 'Avisos activados' : 'Activar avisos') + ' de ' + tg.lines.join(', ') + (RT.repOk ? '' : ' (mientras la app esté abierta)'); }
    if (el._h === html) return; el._h = html; el.innerHTML = html; fitHome();
    { const g = el.querySelector('[data-onbgo]'); if (g) g.onclick = e => { if (e.target.closest('[data-onbx]')) { ONB.no.set(ONB.tid, Date.now() + 20 * 60000); ONB.tid = ''; ONB.manual = 0; follow = null; renderHome(true); return; }
      const pk = e.target.closest('[data-onbpick]'); if (pk) { ONB.no.set(ONB.tid, Date.now() + 20 * 60000); ONB.tid = pk.dataset.onbpick; ONB.manual = Date.now() + 90 * 60000; const t = act.find(x => x.tr && String(x.tr.num) === ONB.tid); if (t) { follow = t.tr; selTrip = t.tr; const st = t.tr.pat.stops, nx = t.real ? t.v.next : t.p.next, mine = [...HOME.st, ...WORK.st], j = st.findIndex((si, q) => q >= nx && mine.includes(ST[si].id)); if (j > 0) { ALARM = { num: ONB.tid, sid: ST[st[j]].id, at: Date.now() }; saveAlarm(); } mcs._h = ''; renderCard(); } renderHome(true); return; } const t = act.find(x => x.tr && String(x.tr.num) === ONB.tid); if (t) { selNews = selAlerts = selStats = false; selStation = -1; selTrip = t.tr; mcs._h = ''; renderCard(); } }; }
    { const lead = [...el.children].find(c => c.classList.contains('hplace') && !c.querySelector('.hnew')); if (lead) lead.classList.add('lead'); }
    const P_ = k => k === 'work' ? WORK : k === 'near' ? NEAR : HOME;
    el.querySelectorAll('[data-hloc]').forEach(b => b.onclick = () => { NEAR.err = ''; locate(true); });
    el.querySelectorAll('[data-ht]').forEach(b => b.onclick = () => { if ($('#inf').classList.contains('compact')) { infExp = true; syncCompact(); return; } const P = P_(b.dataset.ht); P.open = !P.open; saveP(P); renderHome(true); if (selTrip || selStation >= 0 || selAlerts || selNews) { mcs._h = ''; renderCard(); } });
    el.querySelectorAll('[data-hs]').forEach(b => b.onclick = () => { const [k, i] = b.dataset.hs.split(':'), P = P_(k); P.i = +i; saveP(P); renderHome(true); });
    el.querySelectorAll('[data-hw]').forEach(b => b.onclick = () => { const [k, d] = b.dataset.hw.split(':'), P = P_(k); P.walk = clamp(P.walk + +d, 0, 60); saveP(P); renderHome(true); });
    el.querySelectorAll('[data-hmap]').forEach(b => b.onclick = () => { const sidx = +b.dataset.hmap; selNews = selAlerts = selStats = false; selTrip = null; selStation = sidx; closeHome(); styleStations(); Object.assign(goal, { tx: ST[sidx].w[0], ty: ST[sidx].w[1], dist: 18, tilt: Math.max(goal.tilt, 0.5) }); mcs._h = ''; renderCard(); invalidate(); });
    el.querySelectorAll('[data-hset]').forEach(b => b.onclick = () => { pickHome = b.dataset.hset; q.value = ''; q.placeholder = pickHome === 'work' ? 'Escribe la estación del trabajo…' : 'Escribe la estación de casa…'; q.focus(); });
    el.querySelectorAll('[data-hnear]').forEach(b => b.onclick = () => { const i = SID.get(NEAR.st[0]); if (i != null) setHome(i, b.dataset.hnear); });
    el.querySelectorAll('[data-hmore]').forEach(b => b.onclick = () => { const P = P_(b.dataset.hmore); P.more = !P.more; renderHome(true); });
    el.querySelectorAll('[data-hhide]').forEach(b => b.onclick = e => { e.stopPropagation(); const [k, h] = b.dataset.hhide.split(':'), P = P_(k); P.hide = h; saveP(P); renderHome(true); });
    el.querySelectorAll('[data-hshow]').forEach(b => b.onclick = () => { const P = P_(b.dataset.hshow); P.hide = ''; saveP(P); renderHome(true); });
    el.querySelectorAll('[data-hgo]').forEach(b => b.onclick = e => { e.stopPropagation(); const [k, v] = b.dataset.hgo.split(':'), P = P_(k); P.goAt = v === '1' ? Date.now() : 0; if (P.goAt) P.platAt = 0; saveP(P); renderHome(true); });
    el.querySelectorAll('[data-hplat]').forEach(b => b.onclick = e => { e.stopPropagation(); const [k, v] = b.dataset.hplat.split(':'), P = P_(k); P.platAt = v === '1' ? Date.now() : 0; if (P.platAt) P.goAt = 0; saveP(P); renderHome(true); });
    el.querySelectorAll('[data-hnotst]').forEach(b => b.onclick = e => { e.stopPropagation(); NEAR.homeW = NEAR.w; try { localStorage.setItem('rod_homew', JSON.stringify(NEAR.w)); } catch (e2) {} renderHome(true); });
    el.querySelectorAll('[data-hdel]').forEach(b => b.onclick = () => { WORK.st = []; WORK.open = false; saveP(WORK); renderHome(true); pushSync(); });
    el.querySelectorAll('[data-dk]').forEach(b => b.onclick = () => { const x = DK[+b.dataset.dk]; if (b.matches('li.hr') && !x.gone && x.num != null) { const pk = b.closest('.hplace')?.querySelector('[data-ht]')?.dataset.ht; if (pk) { const off = PIN.get(pk) === String(x.num); pinSet(pk, off ? null : String(x.num)); if (off) { if (selTrip && String(selTrip.num) === String(x.num)) { selTrip = null; follow = null; TAB.sk = ''; mcs._h = ''; renderCard(); } } else goTrain(x, true); renderHome(true); return; } } goTrain(x); });   // en pestañas: tocar un tren lo elige y lo deja seguido en el mapa (sin cambiar de pestaña); tocarlo otra vez lo suelta
    el.querySelectorAll('[data-pinnext]').forEach(b => b.onclick = e => { if (e.target.closest('[data-unpin]')) return; const [k, n] = b.dataset.pinnext.split(':'); pinSet(k, n); const x = deps0(k, n); if (x) goTrain(x, true); renderHome(true); });
    el.querySelectorAll('[data-unpin]').forEach(b => b.onclick = e => { e.stopPropagation(); pinSet(b.dataset.unpin, null); renderHome(true); });
    el.querySelectorAll('[data-hal]').forEach(b => b.onclick = () => $('#alr').click());
    // campana pequeña junto a los avisos (en vez de una fila entera)
    bindCrowd(el);
  }
  // tocar una salida → seleccionar ese tren y llevar el mapa hasta él
  function goTrain(x, quiet) {
    if (!x) return;
    const k = R.days.indexOf(nowState().ymd);
    let a = act.find(a => a.real ? (x.tid && a.v.tid === x.tid) || (x.num && String(a.tr ? a.tr.num : a.v.num) === String(x.num)) : (x.tr && a.tr === x.tr) || (x.num && a.tr && String(a.tr.num) === String(x.num)));
    let tr = x.tr || (a && a.tr) || (byDay[k] || []).find(t => String(t.num) === String(x.num));
    selNews = selAlerts = selStats = false; selStation = -1; if (!quiet) closeHome();
    selTrip = a ? (a.tr || { vtid: a.v.tid }) : tr || null;
    if (!selTrip) return;
    if (quiet) TAB.sk = 't' + (selTrip.num || selTrip.vtid);   // seguido en el mapa, pero sin saltar a esa pestaña
    follow = a && a.tr ? a.tr : null;
    if (follow && innerWidth <= 640) { mcs.classList.add('peek'); const rc = $('#rc'); if (!rc.classList.contains('min')) $('#rcgrab').click(); }
    const w = a ? a.p.w : null; if (w) Object.assign(goal, { tx: w[0], ty: w[1], dist: Math.min(goal.dist, 22) });
    styleStations(); mcs._h = ''; renderCard(); lastT = 0; invalidate();
  }
  let pickHome = false;
  q.addEventListener('blur', () => setTimeout(() => { if (pickHome && !q.value.trim()) { pickHome = false; q.placeholder = 'Buscar estación o municipio…'; } }, 600));   // si no eliges nada, el buscador vuelve a ser normal
  function closeHome() { return;   // ya no se pliegan: en el móvil el panel se reduce solo a una línea mientras ves la ficha
    if (innerWidth > 640) return;   // en ordenador los paneles no tapan la ficha
    if (PLACES.some(P => P.open)) { PLACES.forEach(P => { P.open = false; }); renderHome(true); } }   // al elegir otra estación/tren, el panel se pliega para dejar ver la ficha
  function setHome(i, key) { const P = key === 'work' ? WORK : HOME, id = ST[i].id; const town = ST.filter(t => t.fams.size && t !== ST[i] && Math.hypot(t.w[0] - ST[i].w[0], t.w[1] - ST[i].w[1]) < 0.6).map(t => t.id); P.st = [id, ...town].slice(0, 3); P.i = 0; P.open = true; saveP(P); renderHome(true); pushSync(); }

  // ---------- controles ----------
  const lb = $('#lines');
  lb.innerHTML = `<button type="button" class="all" data-f="*">Todas</button>` + FAM.map(f => `<button type="button" style="--c:${FC[f]}" data-f="${f}">${f}</button>`).join('');
  function styleChips() { try { renderHome(true); } catch (e) {} { let lbtn = $('#linebtn'); if (!lbtn) { lbtn = document.createElement('button'); lbtn.type = 'button'; lbtn.id = 'linebtn'; lb.after(lbtn); lbtn.onclick = () => { selLine = [...famOn][0]; selStats = selNews = selAlerts = false; mcs._h = ''; renderCard(); }; } const one = famOn.size === 1 ? [...famOn][0] : ''; lbtn.hidden = !one; if (one) lbtn.innerHTML = `📋 Estado de la ${esc(one)} ahora`; } lb.querySelectorAll('[data-f]').forEach(b => { if (b.dataset.f !== '*') b.classList.toggle('off', !famOn.has(b.dataset.f)); }); }
  lb.querySelectorAll('[data-f]').forEach(b => b.onclick = () => {
    const f = b.dataset.f;
    if (f === '*') FAM.forEach(x => famOn.add(x));
    else if (famOn.size === FAM.length) { famOn.clear(); famOn.add(f); }
    else if (famOn.has(f)) { famOn.delete(f); if (!famOn.size) FAM.forEach(x => famOn.add(x)); }
    else famOn.add(f);
    try { localStorage.setItem('rod_lines', JSON.stringify([...famOn])); } catch (e) {}
    styleChips(); buildLines(); styleStations(); renderAlerts(); lastT = 0; invalidate();
  });
  const spB = [...document.querySelectorAll('[data-sp]')];
  let paused = 0;
  function setSpeed(v) {
    const S = nowState();
    if (v && (speed === v || paused === v)) {          // mismo botón otra vez: pausa / continuar
      if (speed) { simBase = S.min; simMin = S.min; speed = 0; paused = v; }
      else { simAt = performance.now(); speed = v; paused = 0; }
    } else if (v === 0) { speed = 0; simMin = null; paused = 0; }
    else { simBase = S.min; simAt = performance.now(); simMin = S.min; speed = v; paused = 0; }
    spB.forEach(b => { const k = +b.dataset.sp; b.classList.toggle('on', k === (speed || paused) || (!speed && !paused && simMin == null && k === 0)); b.classList.toggle('pz', !!paused && k === paused); b.textContent = k === 0 ? 'Ahora' : (paused === k ? '▶ ×' + k : speed === k ? '⏸ ×' + k : '×' + k); });
    lastT = 0; invalidate();
  }
  spB.forEach(b => b.onclick = () => setSpeed(+b.dataset.sp));
  $('#tsl').oninput = e => { const v = +e.target.value; simBase = v; simMin = v; simAt = performance.now(); if (speed === 0 && !paused) spB.forEach(b => b.classList.remove('on')); lastT = 0; invalidate(); };
  setInterval(() => { if (simMin != null && speed) { const t = simBase + (performance.now() - simAt) / 60000 * speed; if (t > 1560) { simBase = 240; simAt = performance.now(); } } }, 1000);

  // ---------- búsqueda: estaciones y municipios ----------
  window.__rodSearch = txt => {
    const t = norm(txt.trim()); if (!t) { list.style.display = 'none'; list._pick = null; return; }
    const a = [], b = [];
    ST.forEach((s, i) => { if (!s.fams.size) return; const n = norm(s.n); if (n.startsWith(t) || n.includes(' ' + t) || n.includes('-' + t)) a.push(i); else if (n.includes(t)) b.push(i); });
    const ss = a.concat(b).slice(0, 7), ms = munis.filter(o => norm(o.name).startsWith(t)).sort((x, y) => y.pop - x.pop).slice(0, 3);
    const items = ss.map(i => ({ h: `🚉 ${esc(ST[i].n)}<em>${[...ST[i].fams].sort(natural).slice(0, 3).map(f => `<em class="ls" style="background:${FC[f]}">${f}</em>`).join(' ')}</em>`, go: () => { if (pickHome) { const k = pickHome; pickHome = false; q.placeholder = 'Buscar estación o municipio…'; setHome(i, k); return; } selNews = false; selAlerts = false; selStats = false; selStation = i; selTrip = null; follow = null; closeHome(); styleStations(); Object.assign(goal, { tx: ST[i].w[0], ty: ST[i].w[1], dist: Math.min(goal.dist, 20), tilt: Math.max(goal.tilt, 0.5) }); renderCard(); invalidate(); } }))
      .concat(ms.map(o => ({ h: `${esc(o.name)}<em>municipio</em>`, go: () => { Object.assign(goal, { tx: o.cx, ty: o.cy, dist: clamp(o.size * 3 + 14, 14, 60) }); invalidate(); } })));
    list.innerHTML = items.map((x, i) => `<li data-i="${i}">${x.h}</li>`).join('') || '<li class="no">Sin resultados</li>';
    list.style.display = 'block';
    list._pick = i => { if (!items[i]) return; items[i].go(); list.style.display = 'none'; q.value = ''; q.blur(); };
    list.querySelectorAll('li[data-i]').forEach(li => li.onclick = () => list._pick(+li.dataset.i));
  };

  styleChips(); styleStations();
  // ?st=Nombre: abrir directamente una estación (desde Catalunya Survival)
  try {
    const want = new URLSearchParams(location.search).get('st');
    if (want) { const w = norm(want); let best = -1, sc = 0; ST.forEach((s, i) => { if (!s.fams.size) return; const n = norm(s.n); const v = n === w ? 3 : n.startsWith(w) || w.startsWith(n) ? 2 : n.includes(w) || w.includes(n) ? 1 : 0; if (v > sc) { sc = v; best = i; } });
      if (best >= 0) setTimeout(() => { selStation = best; styleStations(); Object.assign(goal, { tx: ST[best].w[0], ty: ST[best].w[1], dist: 18, tilt: 0.5 }); renderCard(); invalidate(); }, 300); }
  } catch (e) {}
  // avisos del panel: recortados a 3 líneas; al tocarlos se ven enteros (y al volver a tocar, se recortan)
  const HALOPEN = { v: false };
  document.addEventListener('click', e => { const h = e.target.closest && e.target.closest('[data-halx]'); if (!h || e.target.closest('a')) return; HALOPEN.v = !HALOPEN.v; renderHome(true); });
  // ficha minimizada: tocarla en cualquier sitio la vuelve a abrir
  mcs.addEventListener('click', e => { if (!mcs.classList.contains('peek') || e.target.closest('button,a,input')) return; e.stopPropagation(); e.preventDefault(); mcs.classList.remove('peek'); const b = mcs.querySelector('.mn'); if (b) b.textContent = '▾'; mcs.scrollTop = 0; }, true);
  // ---------- PESTAÑAS (móvil y app): Ahora · Mapa · Línea · Ajustes ----------
  // En el ordenador se mantiene el diseño con paneles flotantes; en el móvil y en la app, cuatro pestañas abajo.
  const TAB = { on: false, cur: 'now', home: new Map() };
  const tabsMQ = matchMedia('(max-width:640px), (max-height:500px) and (pointer:coarse)');   // móvil, también en horizontal
  const tabbar = document.createElement('nav'); tabbar.id = 'tabs';
  const TABS = [['now', '🕒', 'Ahora'], ['map', '🗺️', 'Mapa'], ['line', '📊', 'Línea'], ['set', '⚙️', 'Ajustes']];
  tabbar.innerHTML = TABS.map(([k, i, l]) => `<button type="button" data-tab="${k}"><span>${i}</span><small>${l}</small></button>`).join('');
  document.body.appendChild(tabbar);
  const tabL = document.createElement('div'); tabL.id = 'tabL'; document.body.appendChild(tabL);
  const tabA = document.createElement('div'); tabA.id = 'tabA'; tabA.className = 'box'; document.body.appendChild(tabA);
  const park = (el, box) => { if (!el) return; if (!TAB.home.has(el)) TAB.home.set(el, [el.parentNode, el.nextSibling]); box.appendChild(el); };
  const unpark = () => { for (const [el, [pa, nx]] of TAB.home) { try { pa.insertBefore(el, nx && nx.parentNode === pa ? nx : null); } catch (e) {} } TAB.home.clear(); };
  function renderLineaBar() {
    const one = famOn.size === 1 ? [...famOn][0] : '', n = RT.alerts.filter(a => [...a.fams].some(f => famOn.has(f))).length;
    const k = [selStats, selAlerts, selLine, selNews, one, n].join('|'); if (tabL._k === k) return; tabL._k = k;
    tabL.innerHTML = `<button type="button" data-tl="stats" class="${selStats ? 'on' : ''}">📊 ${'Puntualidad'}</button><button type="button" data-tl="alr" class="${selAlerts ? 'on' : ''}">⚠️ ${n}${n === 1 ? ' aviso' : ' avisos'}</button>${one ? `<button type="button" data-tl="line" class="${selLine ? 'on' : ''}">📋 ${esc(one)}</button>` : ''}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${'Canal de avisos de Rodalies en WhatsApp'}">💬</a>`;
    tabL.querySelectorAll('[data-tl]').forEach(b => b.onclick = () => { const w = b.dataset.tl; selStats = w === 'stats'; selAlerts = w === 'alr'; selLine = w === 'line' ? one : ''; selNews = false; selTrip = null; selStation = -1; if (selStats) HIST.at = 0; mcs._h = ''; renderCard(); renderLineaBar(); });
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && window.__txt) window.__txt(); });
  // ---------- horario al día: se descarga el más reciente de GitHub (lo genera la tarea de cada noche) ----------
  const PACKURL = 'https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json';
  const todayYmd = () => madrid(new Date()).ymd.replace(/-/g, '');
  function packRefresh() {
    if (navigator.onLine === false || (location.protocol === 'file:' && !/[?&]pack=1/.test(location.search))) return;   // copias locales de prueba: sin descargas
    fetch(PACKURL, { cache: 'no-store' }).then(r => r.ok ? r.text() : null).then(t => {
      if (!t) return; let p; try { p = JSON.parse(t); } catch (e) { return; }
      if (!p || !p.gen || !Array.isArray(p.days) || !p.trips || p.gen <= R.gen) return;
      try { localStorage.setItem('rod_pack', t); } catch (e) { return; }   // sin espacio: se queda con el de dentro
      // ¿cambia el servicio de hoy (huelga, obras, servicios mínimos)? se compara cuántos viajes hay hoy en cada horario
      const d = todayYmd(), kO = R.days.indexOf(d), kN = p.days.indexOf(d), nO = kO < 0 ? 0 : TR.filter(x => x.day === kO).length;
      let nN = 0; if (kN >= 0) for (const x of p.trips) if (x[0] === kN) nN++;   // cada viaje: [día, patrón, ruta, hora, número]
      const changed = kN >= 0 && nO && (Math.abs(nN - nO) / nO > 0.1 || !nN);
      if (kO < 0 || kO >= R.days.length - 2 || changed) { try { sessionStorage.setItem('rod_packmsg', changed ? '1' : ''); } catch (e) {} location.reload(); return; }
      PACKNEW.v = true;   // si no, se aplica al volver a la app
    }).catch(() => {});
  }
  const PACKNEW = { v: false };
  document.addEventListener('visibilitychange', () => { if (document.hidden && PACKNEW.v) { PACKNEW.v = false; PACKNEW.reload = true; } else if (!document.hidden && PACKNEW.reload) location.reload(); });
  try { if (sessionStorage.getItem('rod_packmsg') === '1') { sessionStorage.removeItem('rod_packmsg'); setTimeout(() => toast('🗓️ ' + 'Horario de hoy actualizado: Renfe ha cambiado el servicio (huelga, obras o servicios mínimos)'), 1500); } } catch (e) {}
  setTimeout(packRefresh, 4000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && Date.now() - (packRefresh.at || 0) > 6 * 3600e3) { packRefresh.at = Date.now(); packRefresh(); } });
  packRefresh.at = Date.now();
  // el pie «horario oficial descargado el …» dice de qué día es el horario que se usa de verdad
  if (window.__RODNEW__) { const g = window.__RODNEW__, v = $('#ver'); if (v && v.firstChild && v.firstChild.nodeType === 3) v.firstChild.textContent = v.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/, g.slice(8, 10) + '/' + g.slice(5, 7) + ' ' + g.slice(11, 16)); }   // al volver a la app, por si has cambiado el tamaño de letra del iPhone
  function renderAjustes() {
    unpark();   // primero se devuelven a su sitio los elementos prestados (si no, se borrarían al rehacer la hoja)
    const L = window.__L || 'es', th = THEME.mode;
    tabA.innerHTML = `<h3>${'Ajustes'}</h3>
      <h4>🌐 ${'Idioma'}</h4><div class="seg2">${[['ca', 'Català'], ['es', 'Español'], ['en', 'English']].map(([k, n]) => `<button type="button" data-lang="${k}" class="${L === k ? 'on' : ''}">${n}</button>`).join('')}</div>
      <h4>🌙 ${'Modo noche'}</h4><div class="seg2">${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Oscuro']].map(([k, n]) => `<button type="button" data-th="${k}" class="${th === k ? 'on' : ''}">${n}</button>`).join('')}</div>
      <h4>🔠 ${'Tamaño del texto'}</h4><div class="seg2">${(() => { let v = ''; try { v = localStorage.getItem('rod_big') || ''; } catch (e) {} const cur = v === '1' ? '1' : v === '0' ? '0' : 'a'; return [['a', 'Automático'], ['0', 'Normal'], ['1', 'Grande']].map(([k, n]) => `<button type="button" data-big="${k}" class="${cur === k ? 'on' : ''}">${n}</button>`).join(''); })()}</div>${(() => { let v = ''; try { v = localStorage.getItem('rod_big') || ''; } catch (e) {} return v === '1' || v === '0' ? '' : `<small class="tabAhint">${'Automático sigue el tamaño de letra del iPhone (Ajustes › Pantalla y brillo › Tamaño del texto).'}</small>`; })()}
      <h4>🔔 ${'Avisos'}</h4><div id="tabAbell"></div>${allLines().length ? '' : `<small class="tabAhint">${'Elige tu estación de Casa o Trabajo (pestaña Ahora) para recibir avisos de sus líneas.'}</small>`}${(() => { const ls = allLines(); return ls.length > 1 ? `<small class="tabAhint">${'Líneas de las que quieres avisos:'}</small><div class="alch">${ls.map(f => `<button type="button" data-al="${esc(f)}" class="ln${ALOFF.has(f) ? ' off' : ''}" style="--c:${FC[f]}">${esc(f)}</button>`).join('')}</div>` : ''; })()}
      <h4>📡 ${'Datos en directo'}</h4><div id="tabArt"></div>
      <h4>ℹ️ ${'Información'}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`;
    tabA.querySelectorAll('[data-al]').forEach(b => b.onclick = () => { const f = b.dataset.al, ls = allLines(); if (ALOFF.has(f)) ALOFF.delete(f); else if (ls.filter(x => !ALOFF.has(x)).length > 1) ALOFF.add(f); try { localStorage.setItem('rod_aloff', JSON.stringify([...ALOFF])); } catch (e) {} renderHome(true); renderAjustes(); });
    tabA.querySelectorAll('[data-big]').forEach(b => b.onclick = () => { const k = b.dataset.big; try { if (k === 'a') localStorage.removeItem('rod_big'); else localStorage.setItem('rod_big', k); } catch (e) {} if (window.__txt) window.__txt(); renderAjustes(); renderHome(true); });
    tabA.querySelectorAll('[data-th]').forEach(b => b.onclick = () => { THEME.mode = b.dataset.th; try { localStorage.setItem('rod_theme', THEME.mode); } catch (e) {} applyTheme(); renderAjustes(); });
    park($('#bell'), $('#tabAbell')); park($('#src'), $('#tabArt')); park($('#ver'), $('#tabAinf'));
  }
  function setTab(k) {
    if (!TAB.on) return;
    const was = TAB.cur; TAB.cur = k; document.documentElement.dataset.tab = k; window.__mapHidden = k !== 'map';
    tabbar.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === k));
    if (k === 'line') { if (selTrip || selStation >= 0) TAB.keep = { t: selTrip, s: selStation, sk: TAB.sk }; if (!selStats && !selAlerts && !selLine && !selNews) { selStats = true; HIST.at = 0; } selTrip = null; selStation = -1;   /* «novedades y fuentes» (desde Ajustes) se abre en Línea */ mcs._h = ''; renderCard(); renderLineaBar(); }
    else if (was === 'line') { selStats = selAlerts = selNews = false; selLine = ''; const kp = TAB.keep; TAB.keep = null; if (kp && k === 'map' && !selTrip && selStation < 0) { selTrip = kp.t; selStation = kp.s; TAB.sk = kp.sk; } mcs._h = ''; renderCard(); }
    if (k === 'map') requestAnimationFrame(() => requestAnimationFrame(() => { try { peekH(); } catch (e) {} dispatchEvent(new Event('resize')); }));   // al volver a verse el mapa, se recalcula la altura de la ficha (oculta medía mal)
    if (k === 'set') renderAjustes();
    if (k === 'now') { renderHome(true); requestAnimationFrame(fitHome); }
    lastT = 0; invalidate();
  }
  tabbar.onclick = e => { const b = e.target.closest('[data-tab]'); if (b) setTab(b.dataset.tab); };
  // al abrir un tren o una estación desde Ahora o Ajustes, se pasa al mapa; desde Línea, un tren también lleva al mapa
  window.__rodTabSync = () => { if (!TAB.on) return; const sk = selTrip ? 't' + (selTrip.num || selTrip.vtid) : selStation >= 0 ? 's' + selStation : ''; const nueva = sk !== TAB.sk; TAB.sk = sk; if (sk && nueva && TAB.cur !== 'map') setTab('map'); else if ((selAlerts || selLine || selNews) && TAB.cur !== 'line' && TAB.cur !== 'map') setTab('line'); if (TAB.cur === 'line') renderLineaBar(); };
  function tabMode() {
    const on = tabsMQ.matches || document.documentElement.classList.contains('cap');
    if (on === TAB.on) return; TAB.on = on; document.documentElement.classList.toggle('tabmode', on); if (!on) window.__mapHidden = false;
    if (on) setTab('now'); else { delete document.documentElement.dataset.tab; unpark(); }
  }
  tabsMQ.addEventListener ? tabsMQ.addEventListener('change', tabMode) : tabsMQ.addListener(tabMode);
  tabMode();
  // en Ahora, tus paneles se colocan siempre por encima de los controles (abiertos o cerrados): nada queda tapado
  { const rc = $('#rc'), upd = () => document.documentElement.style.setProperty('--rch', Math.round(rc.getBoundingClientRect().height) + 'px'); if (window.ResizeObserver) new ResizeObserver(upd).observe(rc); upd(); }
  // ---------- iconos propios (sustituyen a los emojis en la interfaz) ----------
  const ICP = { '🏠': '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>', '💼': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',
    '📍': '<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>', '🚆': '<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',
    '🚶': '<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>', '🚉': '<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',
    '⚠️': '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>', '📌': '<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>', '🗓️': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    '📡': '<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>', '🕒': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    '🗺️': '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>', '📊': '<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>', '⚙️': '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    '🌐': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>', '🌙': '<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>', '🔠': '<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',
    '🔔': '<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>', '🔕': '<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>', 'ℹ️': '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    '📋': '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>', '💬': '<path d="M4 5h16v11H9l-5 4z"/>', '⛔': '<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',
    '📶': '<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>', '⏳': '<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>', '🏙️': '<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>', '⭐': '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>' };
  const ICRE = new RegExp('(' + Object.keys(ICP).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')️?', 'g');
  const icoSvg = k => `<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICP[k] || ICP[k + '️'] || ''}</svg></span>`;
  function iconize(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), hits = []; let n;
    while ((n = w.nextNode())) { if (n.parentElement && (n.parentElement.closest('.ico,script,style,textarea,input'))) continue; ICRE.lastIndex = 0; if (ICRE.test(n.nodeValue)) hits.push(n); }
    for (const t of hits) { const sp = document.createElement('span'); sp.innerHTML = esc(t.nodeValue).replace(ICRE, (m, k) => icoSvg(k)); t.replaceWith(...sp.childNodes); }
    return hits.length;
  }
  { const roots = () => ['#home', '#tabs', '#tabA', '#tabL', '#mcs', '#onb', '#toast', '#rc', '#inf', '#mbtn', '#sbtn', '#wabtn', '#bell'].map(q => $(q)).filter(Boolean);
    let busy = false; const run = () => { if (busy) return; busy = true; try { let c = 0; roots().forEach(r => { c += iconize(r); }); if (c && TAB.on) fitHome(); } finally { busy = false; } };
    const mo = new MutationObserver(() => { if (!busy) queueMicrotask(run); }); setTimeout(() => { run(); roots().forEach(r => mo.observe(r, { childList: true, subtree: true, characterData: true })); }, 0); }
  window.__rod = { cardEta, HOME, WORK, ONB, alertForMe, whereAmI, departuresFor, DEPS, tripByNum, delayOf, TID, SID, byDay, get days() { return R.days; }, get hist() { return HIST; }, get past() { return PAST.cur; }, get cols() { return COLS.mesh ? COLS.mesh.count : -1; }, get dist() { return cur.dist; }, get follow() { return follow; }, get selTrip() { return selTrip; }, ST, TR, FAM, act: () => act, setSpeed, RT, pollRT, nowState, posAt, activeTrips, LL, select: tr => { selTrip = tr; renderCard(); } };
}
