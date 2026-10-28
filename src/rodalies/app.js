import * as THREE from 'three';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { initRail } from './rail.js';

const D = window.__DATA__;
const API = 'https://api.idescat.cat/emex/v1/dades.json?i=f171&tipus=mun';
const $ = s => document.querySelector(s);
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ---------- escena ----------
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeef1f5);
const FOV = 35;
const camera = new THREE.PerspectiveCamera(FOV, 1, 2, 1500);
scene.add(new THREE.HemisphereLight(0xffffff, 0x8a90a0, 1.0));
const sun = new THREE.DirectionalLight(0xffffff, 0.9);
sun.position.set(-40, -70, 90);
scene.add(sun);

const K = 100 / D.w, CX = D.w / 2, CY = D.h / 2;
const munis = [];
const root = new THREE.Group();
scene.add(root);
const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });

for (const m of D.m) {
  const g = new THREE.Group();
  const shapes = [];
  const lines = [];
  let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
  for (const poly of m.g) {
    const rings = poly.map(flat => {
      const pts = [];
      for (let i = 0; i < flat.length; i += 2) pts.push(new THREE.Vector2((flat[i] - CX) * K, (flat[i + 1] - CY) * K));
      if (pts.length > 1 && pts[0].equals(pts[pts.length - 1])) pts.pop();
      return pts;
    }).filter(r => r.length >= 3);
    if (!rings.length) continue;
    const shape = new THREE.Shape(rings[0]);
    for (let i = 1; i < rings.length; i++) shape.holes.push(new THREE.Path(rings[i]));
    shapes.push(shape);
    for (const p of rings[0]) { minx = Math.min(minx, p.x); maxx = Math.max(maxx, p.x); miny = Math.min(miny, p.y); maxy = Math.max(maxy, p.y); }
    for (const r of rings) lines.push(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(r.map(p => new THREE.Vector3(p.x, p.y, 0))), lineMat));
  }
  if (!shapes.length) continue;
  let geo;
  try { geo = new THREE.ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false }); } catch (e) { continue; }
  const mat = new THREE.MeshLambertMaterial({ color: 0xcccccc });
  const mesh = new THREE.Mesh(geo, mat);
  g.add(mesh);
  const og = new THREE.Group(); lines.forEach(l => og.add(l)); og.position.z = 0.04; root.add(og);
  g.scale.z = 0.01;
  root.add(g);
  const o = { og, rings: m.g, inF: true, sel: null, code: m.c, name: m.n, pop: m.p, area: m.a, pr: m.pr, rankP: 0, rankD: 0, group: g, mesh, mat, cx: (minx + maxx) / 2, cy: (miny + maxy) / 2, size: Math.max(maxx - minx, maxy - miny), z: 0.01, zt: 0.01, rank: 0 };
  mesh.userData.m = o;
  munis.push(o);
}
const meshes = munis.map(o => o.mesh);
const shoe = f => { let a = 0; for (let i = 0; i < f.length; i += 2) { const j = (i + 2) % f.length; a += f[i] * f[j + 1] - f[j] * f[i + 1]; } return Math.abs(a) / 2; };
let sumPlan = 0, sumKm = 0; for (const o of munis) { for (const poly of o.rings) sumPlan += shoe(poly[0]) - poly.slice(1).reduce((s, h) => s + shoe(h), 0); sumKm += o.area; }
const kmu = Math.sqrt(sumKm / sumPlan);

// ---------- datos -> altura / color ----------
const PROV = { '08': 'Barcelona', '17': 'Girona', '25': 'Lleida', '43': 'Tarragona' };
const PN = { '08': 'provincia de Barcelona', '17': 'provincia de Girona', '25': 'provincia de Lleida', '43': 'provincia de Tarragona' };
let mode = 'sqrt', metric = 'pop', vscale = 0, total = 0, maxV = 1, minV = 1;
const F = { sqrt: p => Math.sqrt(p), lin: p => p, log: p => Math.log10(Math.max(p, 1)) };
const val = o => (metric === 'pop' ? o.pop : o.pop / o.area);
const ramp = ['#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#b10026', '#5c0020'].map(c => new THREE.Color(c));
function colorAt(t) {
  t = clamp(t, 0, 1) * (ramp.length - 1);
  const i = Math.min(Math.floor(t), ramp.length - 2);
  return ramp[i].clone().lerp(ramp[i + 1], t - i);
}
const fmtV = v => (v >= 100 ? fmt(Math.round(v)) : v.toLocaleString('es-ES', { maximumFractionDigits: 1 }));
function recompute() {
  total = 0;
  for (const o of munis) total += o.pop;
  [...munis].sort((a, b) => b.pop - a.pop).forEach((o, i) => (o.rankP = i + 1));
  [...munis].sort((a, b) => b.pop / b.area - a.pop / a.area).forEach((o, i) => (o.rankD = i + 1));
  applyMetric();
  renderPanels();
}
const GREY = new THREE.Color('#d3d8e2');
const PALE = new THREE.Color('#eceff3');
// ---------- modo noche (la parte del mapa; los paneles van por CSS) ----------
window.__mapTheme = dark => {
  scene.background = new THREE.Color(dark ? 0x0d1119 : 0xeef1f5);
  PALE.set(dark ? '#2b3242' : '#eceff3'); GREY.set(dark ? '#1a1f29' : '#d3d8e2');
  lineMat.color.set(dark ? 0x0d1119 : 0xffffff); lineMat.opacity = dark ? 0.7 : 0.55;
  casing.color.set(dark ? 0x05070b : 0x2a3040); white.color.set(dark ? 0x8a93a6 : 0xffffff);
  for (const o of munis) if (o.base) paint(o);
  invalidate();
};
function paint(o) { o.mat.color.copy(o.base).lerp(PALE, document.documentElement.classList.contains('dark') ? 0.95 : 0.86); if (!o.inF) o.mat.color.lerp(GREY, 0.8); }
function applyMetric() {
  maxV = 1; minV = 1e12;
  for (const o of munis) { const v = val(o); maxV = Math.max(maxV, v); minV = Math.min(minV, v); }
  const l0 = Math.log10(Math.max(minV, 0.01)), l1 = Math.log10(maxV);
  for (const o of munis) { o.base = colorAt((Math.log10(Math.max(val(o), 0.01)) - l0) / (l1 - l0)); paint(o); }
  $('#lmin').textContent = fmtV(minV); $('#lmax').textContent = fmtV(maxV);
  $('#lname').textContent = metric === 'pop' ? 'habitantes' : 'hab./km²';
  setHeights();
}
function setHeights() {
  const f = F[mode], fm = f(maxV), H = 24 * vscale;
  for (const o of munis) o.zt = vscale <= 0.001 ? 0.01 : Math.max(0.12 * Math.min(1, vscale), H * f(val(o)) / fm) * (o.inF ? 1 : 0.1);
  invalidate();
}

// ---------- fronteras provinciales (línea blanca) ----------
const byCode = Object.fromEntries(munis.map(o => [o.code, o]));
const segMeta = [], P = [];
for (const b of D.bd) {
  const A = byCode[b.a], B = byCode[b.b]; if (!A || !B) continue;
  for (let i = 0; i + 3 < b.p.length; i += 2) {
    P.push((b.p[i] - CX) * K, (b.p[i + 1] - CY) * K, 0, (b.p[i + 2] - CX) * K, (b.p[i + 3] - CY) * K, 0);
    segMeta.push(A, B);
  }
}
const bGeo = new LineSegmentsGeometry(); bGeo.setPositions(P);
const casing = new LineMaterial({ color: 0x2a3040, linewidth: 4.4, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
const white = new LineMaterial({ color: 0xffffff, linewidth: 2.4, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6 });
[casing, white].forEach((m, i) => { const l = new LineSegments2(bGeo, m); l.frustumCulled = false; l.renderOrder = 10 + i; scene.add(l); });
function updateBorders() {
  const arr = bGeo.attributes.instanceStart.data.array;
  for (let s = 0; s < segMeta.length; s += 2) {
    const z = Math.max(segMeta[s].z, segMeta[s + 1].z) + 0.12, k = (s / 2) * 6;
    arr[k + 2] = z; arr[k + 5] = z;
  }
  bGeo.attributes.instanceStart.data.needsUpdate = true;
}

// etiquetas de provincia
const labs = {};
for (const pr of Object.keys(PROV)) {
  const os = munis.filter(o => o.pr === pr); let w = 0, x = 0, y = 0, x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const o of os) { w += o.area; x += o.cx * o.area; y += o.cy * o.area; x0 = Math.min(x0, o.cx); x1 = Math.max(x1, o.cx); y0 = Math.min(y0, o.cy); y1 = Math.max(y1, o.cy); }
  const el = document.createElement('div'); el.className = 'plab'; el.textContent = PROV[pr]; el.title = 'Ver solo ' + PN[pr]; el.onclick = () => focusKey('pr:' + pr); document.body.appendChild(el);
  labs[pr] = { el, p: new THREE.Vector3(x / w, y / w, 0), cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, ext: Math.max(x1 - x0, (y1 - y0)), ext2: [x1 - x0, y1 - y0], area: w, name: PROV[pr] };
}
const _v = new THREE.Vector3();
function placeLabels() {
  for (const pr in labs) {
    const L = labs[pr]; _v.copy(L.p).project(camera);
    L.el.style.transform = `translate(-50%,-50%) translate(${(_v.x * 0.5 + 0.5) * innerWidth}px,${(-_v.y * 0.5 + 0.5) * innerHeight}px)`;
  }
}

// ---------- cámara ----------
const cur = { tilt: 0, yaw: 0, dist: 150, tx: 0, ty: 0 };
const goal = { ...cur };
function fitDist() {
  const asp = innerWidth / innerHeight, t = Math.tan(FOV * Math.PI / 360);
  return Math.max(D.h * K * 1.1, 100 * 1.1 / asp) / (2 * t);
}
const northR = document.getElementById('northr');
// brújula: pone el norte arriba y el mapa plano, sin mover ni cambiar el zoom (⌂ en cambio vuelve a ver toda Cataluña)
document.getElementById('north').addEventListener('click', () => { goal.yaw = Math.round(goal.yaw / (2 * Math.PI)) * 2 * Math.PI; goal.tilt = 0; invalidate(); });
function resetView() { Object.assign(goal, { tilt: 0, yaw: 0, dist: fitDist(), tx: 0, ty: 0 }); invalidate(); }
function placeCamera() {
  const { tilt: p, yaw: w, dist: d, tx, ty } = cur;
  camera.position.set(tx + d * Math.sin(p) * Math.sin(w), ty - d * Math.sin(p) * Math.cos(w), d * Math.cos(p));
  camera.up.set(-Math.cos(p) * Math.sin(w), Math.cos(p) * Math.cos(w), Math.sin(p));
  camera.lookAt(tx, ty, 0);
}
let dirty = true, last = performance.now();
const pulses = new Map();
function invalidate() { dirty = true; }
function frame(now) {
  requestAnimationFrame(frame);
  const dt = clamp((now - last) / 1000, 0, 0.05); last = now;
  const a = 1 - Math.exp(-dt * 10);
  let moving = false;
  for (const k of Object.keys(cur)) { const d = goal[k] - cur[k]; if (Math.abs(d) > 1e-4 * (k === 'dist' ? 10 : 1)) { cur[k] += d * a; moving = true; } else cur[k] = goal[k]; }
  for (const o of munis) { const d = o.zt - o.z; if (Math.abs(d) > 0.002) { o.z += d * Math.min(1, a * 0.8); o.group.scale.z = o.z; o.og.position.z = o.z + 0.04; moving = true; } else if (o.z !== o.zt) { o.z = o.zt; o.group.scale.z = o.z; o.og.position.z = o.z + 0.04; } }
  for (const [o, t0] of pulses) { const k = (now - t0) / 1800; if (k >= 1) { pulses.delete(o); refreshEm(o); } else { refreshEm(o, 0.5 * Math.sin(Math.PI * k)); } moving = true; }
  if (window.__rodTick && window.__rodTick(now)) dirty = true;
  if (window.__mapHidden) { dirty = true; return; }   // pestañas sin mapa: no se dibuja (fluidez y batería)
  if (moving || dirty) { northR.style.transform = `rotate(${cur.yaw}rad) scaleY(${(0.55 + 0.45 * Math.cos(cur.tilt)).toFixed(3)})`; { const off = Math.abs(Math.sin(goal.yaw / 2)) < 0.02 && goal.tilt < 0.03; const nb = document.getElementById('north'); if (nb.classList.contains('flat') !== off) { nb.classList.toggle('flat', off); nb.title = off ? 'El norte ya está arriba' : 'Poner el norte arriba y el mapa plano'; } } placeCamera(); updateBorders(); placeLabels(); if (window.__rodFrame) window.__rodFrame(); renderer.render(scene, camera); dirty = moving; $('#tilt').value = Math.round(goal.tilt * 180 / Math.PI); $('#yaw').value = Math.round(((goal.yaw * 180 / Math.PI + 180) % 360 + 360) % 360 - 180); }
}
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); casing.resolution.set(innerWidth, innerHeight); white.resolution.set(innerWidth, innerHeight); if (window.__rodResize) window.__rodResize(); invalidate();
}
addEventListener('resize', () => { resize(); if (sels.length) renderCards(); });

// ---------- interacción ----------
canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const lm = e.deltaMode === 1 ? 16 : 1, dy = e.deltaY * lm;
  if (e.altKey) { const d = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * lm; goal.yaw += d * 0.0035; }
  else if (e.ctrlKey) goal.dist = clamp(goal.dist * Math.exp(dy * 0.01), 6, 400);
  else goal.tilt = clamp(goal.tilt + dy * 0.002, 0, 1.32);
  invalidate();
}, { passive: false });
canvas.addEventListener('contextmenu', e => e.preventDefault());
const pts = new Map(); let drag = null, pinch0 = 0, ang0 = 0, mid0 = 0, lastTap = 0, g2 = null;
canvas.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' && !document.body.classList.contains('used')) { document.body.classList.add('used'); if (sels.length) setTimeout(renderCards, 50); }
  canvas.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pts.size === 1) drag = { rot: e.button === 2 || e.altKey, moved: 0, multi: false, touch: e.pointerType !== 'mouse' };
  if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); ang0 = Math.atan2(b.y - a.y, b.x - a.x); mid0 = (a.y + b.y) / 2; g2 = { mode: null, rot: 0, sc: 0, tl: 0 }; if (drag) drag.multi = true; }
  hideTip();
});
canvas.addEventListener('pointermove', e => {
  const p = pts.get(e.pointerId);
  if (!p) { mouse = { x: e.clientX, y: e.clientY }; hoverQueued || (hoverQueued = requestAnimationFrame(doHover)); return; }
  const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
  if (pts.size === 2) {
    const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
    const an = Math.atan2(b.y - a.y, b.x - a.x), mid = (a.y + b.y) / 2;
    let da = an - ang0; if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
    const dd = pinch0 ? d - pinch0 : 0, dm = mid - mid0, G = g2 || (g2 = { mode: null, rot: 0, sc: 0, tl: 0 });
    G.rot += da; G.sc += dd; G.tl += dm;
    // decide el gesto: zoom por defecto; girar solo con giro claro; inclinar solo si ambos dedos suben o bajan juntos
    if (!G.mode) { if (Math.abs(G.rot) > 0.3) G.mode = 'rotate'; else if (Math.abs(G.tl) > 30 && Math.abs(G.sc) < 18) G.mode = 'tilt'; else if (Math.abs(G.sc) > 12) G.mode = 'zoom'; }
    else if (G.mode === 'zoom' && Math.abs(G.rot) > 0.45) G.mode = 'rotate';
    if (G.mode === 'zoom' || G.mode === 'rotate') { if (pinch0) goal.dist = clamp(goal.dist * pinch0 / d, 6, 400); }
    if (G.mode === 'rotate') { goal.yaw += da; cur.yaw = goal.yaw; }
    if (G.mode === 'tilt') { goal.tilt = clamp(goal.tilt - dm * 0.006, 0, 1.32); cur.tilt = goal.tilt; }
    pinch0 = d; ang0 = an; mid0 = mid; invalidate(); return;
  }
  drag.moved += Math.abs(dx) + Math.abs(dy);
  if (drag.rot || e.altKey) { goal.yaw += dx * 0.005; goal.tilt = clamp(goal.tilt + dy * 0.004, 0, 1.32); cur.yaw = goal.yaw; cur.tilt = goal.tilt; }
  else {
    const wpp = 2 * cur.dist * Math.tan(FOV * Math.PI / 360) / innerHeight, s = Math.sin(cur.yaw), c = Math.cos(cur.yaw), kv = 1 / Math.max(Math.cos(cur.tilt), 0.3);
    goal.tx = clamp(goal.tx - (c * dx) * wpp + (-s * dy) * wpp * kv, -70, 70);
    goal.ty = clamp(goal.ty - (s * dx) * wpp + (c * dy) * wpp * kv, -70, 70);
    cur.tx = goal.tx; cur.ty = goal.ty;
  }
  invalidate();
});
function pick(x, y) { v2.set(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1); ray.setFromCamera(v2, camera); const hit = ray.intersectObjects(meshes, false)[0]; return hit ? hit.object.userData.m : null; }
const up = e => {
  const click = drag && !drag.rot && !drag.multi && drag.moved < (drag.touch ? 12 : 6) && e.type === 'pointerup' && pts.size === 1, touch = drag && drag.touch;
  pts.delete(e.pointerId); pinch0 = 0; g2 = null; if (!pts.size) drag = null;
  if (!click) return;
  if (window.__rodTap && window.__rodTap(e.clientX, e.clientY)) return;
};
canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
canvas.addEventListener('dblclick', resetView);
addEventListener('keydown', e => { if (e.key === 'Alt') canvas.style.cursor = 'move'; });
addEventListener('keyup', e => { if (e.key === 'Alt') canvas.style.cursor = ''; });
addEventListener('blur', () => { canvas.style.cursor = ''; });

const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
let mouse = null, hoverQueued = 0, hovered = null;
function doHover() {
  hoverQueued = 0; if (!mouse || drag) return;
  v2.set(mouse.x / innerWidth * 2 - 1, -(mouse.y / innerHeight) * 2 + 1);
  ray.setFromCamera(v2, camera);
  const o = null;
  if (o !== hovered) { const p = hovered; hovered = o; if (p) refreshEm(p); if (o) refreshEm(o); invalidate(); }
  const rt = window.__rodHover && window.__rodHover(mouse.x, mouse.y); if (rt) { tip.innerHTML = rt; tip.style.display = 'block'; const w = tip.offsetWidth, h = tip.offsetHeight; tip.style.left = clamp(mouse.x + 14, 6, innerWidth - w - 6) + 'px'; tip.style.top = clamp(mouse.y + 14, 6, innerHeight - h - 6) + 'px'; canvas.style.cursor = 'pointer'; } else { hideTip(); canvas.style.cursor = ''; }
}
canvas.addEventListener('pointerleave', () => { mouse = null; if (hovered) { const p = hovered; hovered = null; refreshEm(p); invalidate(); } hideTip(); });
const tip = $('#tip');
function card(o) {
  const d = o.pop / o.area, pc = x => x.toLocaleString('es-ES', { maximumFractionDigits: 2 });
  return `<b>${o.name} <i>${PROV[o.pr]}</i></b><span>${fmt(o.pop)} hab.</span><small>Nº ${o.rankP} de ${munis.length} en población · ${pc(o.pop / total * 100)} % de Cataluña<br>${fmtV(d)} hab./km² (nº ${o.rankD} en densidad) · ${fmtV(o.area)} km²</small>`;
}
function showTip(o, x, y) { tip.innerHTML = card(o); tip.style.display = 'block'; const w = tip.offsetWidth, h = tip.offsetHeight; tip.style.left = clamp(x + 14, 6, innerWidth - w - 6) + 'px'; tip.style.top = clamp(y + 14, 6, innerHeight - h - 6) + 'px'; }
function hideTip() { tip.style.display = 'none'; }

// controles
document.querySelectorAll('[data-metric]').forEach(b => b.onclick = () => { metric = b.dataset.metric; document.querySelectorAll('[data-metric]').forEach(x => x.classList.toggle('on', x === b)); applyMetric(); renderPanels(); });
document.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { mode = b.dataset.mode; document.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('on', x === b)); setHeights(); });
$('#yaw').oninput = e => { goal.yaw = +e.target.value * Math.PI / 180; invalidate(); };
$('#tilt').oninput = e => { goal.tilt = +e.target.value * Math.PI / 180; invalidate(); };
$('#zin').onclick = () => { goal.dist = clamp(goal.dist * 0.75, 6, 400); invalidate(); };
$('#zout').onclick = () => { goal.dist = clamp(goal.dist / 0.75, 6, 400); invalidate(); };
$('#rst').onclick = resetView;

// ---------- selección múltiple / comparador ----------
const COLORS = ['#2563eb', '#059669', '#7c3aed', '#db2777', '#0891b2', '#ca8a04'];
const sels = [];
const outCache = {};
const outMat = c => outCache[c] || (outCache[c] = new THREE.LineBasicMaterial({ color: c }));
function setOutline(o, c) { o.og.children.forEach(l => (l.material = c ? outMat(c) : lineMat)); }
function refreshEm(o, extra = 0) {
  const c = o.mat.emissive;
  if (o === hovered) c.setHex(0x555555); else if (o.sel) c.copy(o.sel.tint); else c.setHex(0);
  if (extra) c.addScalar(extra);
}
function flyTo(os, tilt) {
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const o of os) { x0 = Math.min(x0, o.cx - o.size / 2); x1 = Math.max(x1, o.cx + o.size / 2); y0 = Math.min(y0, o.cy - o.size / 2); y1 = Math.max(y1, o.cy + o.size / 2); }
  const asp = innerWidth / innerHeight, t = Math.tan(FOV * Math.PI / 360);
  const dist = os.length === 1 ? clamp(os[0].size * 3.2 + 14, 14, 120) : clamp(Math.max((y1 - y0) * 1.5, (x1 - x0) * 1.5 / asp) / (2 * t) + 6, 14, 300);
  Object.assign(goal, { tx: (x0 + x1) / 2, ty: (y0 + y1) / 2, dist, tilt: tilt, yaw: 0 }); invalidate();
}
const q = $('#q'), list = $('#list'), mcs = $('#mcs');
function select(o, fly = true) {
  list.style.display = 'none'; q.value = '';
  if (!o.sel) {
    if (sels.length >= 6) removeSel(sels[0].o, true);
    const used = new Set(sels.map(x => x.color)), color = COLORS.find(c => !used.has(c)) || COLORS[0];
    o.sel = { o, color, tint: new THREE.Color(color).multiplyScalar(0.12) }; sels.push(o.sel); setOutline(o, color);
  }
  if (mcs.classList.contains('min')) mcsMin(false);
  pulses.set(o, performance.now()); refreshEm(o);
  if (fly) flyTo([o], Math.max(goal.tilt, 0.9));
  renderCards();
}
function removeSel(o, quiet) {
  const k = sels.indexOf(o.sel); if (k >= 0) sels.splice(k, 1);
  o.sel = null; setOutline(o, null); refreshEm(o); invalidate();
  if (!quiet) renderCards();
}
function drawSil(cv) {
  const dpr = Math.min(devicePixelRatio || 1, 2), w = cv.clientWidth, h = cv.clientHeight;
  cv.width = w * dpr; cv.height = h * dpr;
  const g = cv.getContext('2d'); g.scale(dpr, dpr); g.clearRect(0, 0, w, h);
  const bb = sels.map(s => { let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9; for (const poly of s.o.rings) for (let i = 0; i < poly[0].length; i += 2) { x0 = Math.min(x0, poly[0][i]); x1 = Math.max(x1, poly[0][i]); y0 = Math.min(y0, poly[0][i + 1]); y1 = Math.max(y1, poly[0][i + 1]); } return { x0, x1, y0, y1 }; });
  const ext = Math.max(...bb.map(b => Math.max(b.x1 - b.x0, b.y1 - b.y0))), pxu = (Math.min(w, h) - 22) / ext;
  sels.forEach((s, k) => {
    const b = bb[k], cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
    g.beginPath();
    for (const poly of s.o.rings) for (const r of poly) for (let i = 0; i < r.length; i += 2) { const X = w / 2 + (r[i] - cx) * pxu, Y = h / 2 - (r[i + 1] - cy) * pxu; i ? g.lineTo(X, Y) : g.moveTo(X, Y); if (i === r.length - 2) g.closePath(); }
    g.fillStyle = s.color + '40'; g.fill('evenodd'); g.lineWidth = 1.6; g.strokeStyle = s.color; g.stroke();
  });
  const kmPx = pxu / kmu, nice = [0.5, 1, 2, 5, 10, 20, 50, 100].find(v => v * kmPx >= 28) || 100;
  g.fillStyle = '#6b7385'; g.fillRect(10, h - 12, nice * kmPx, 2); g.font = '10px system-ui'; g.fillText(nice + ' km', 12 + nice * kmPx, h - 8);
}
function renderCards() {
  if (!sels.length) { mcs.innerHTML = ''; mcs.style.display = 'none'; mcsMin(false); return; }
  mcs.style.display = 'flex'; if (innerWidth <= 640) { const ib = $('#inf').getBoundingClientRect().bottom; mcs.style.top = Math.round(ib + 8) + 'px'; mcs.style.maxHeight = Math.max(110, Math.min(innerHeight * ($('#rc').classList.contains('min') ? 0.7 : 0.4), $('#rc').getBoundingClientRect().top - ib - 16)) + 'px'; mcs.style.width = ''; } else if (innerHeight <= 500) { const ib = $('#inf').getBoundingClientRect().bottom; mcs.style.top = Math.round(ib + 8) + 'px'; mcs.style.maxHeight = Math.max(120, innerHeight - ib - 20) + 'px'; mcs.style.width = 'min(290px, 40vw)'; } else { mcs.style.top = ''; mcs.style.maxHeight = ''; mcs.style.width = ''; }
  let h = sels.map((s, i) => { const o = s.o; return `<div class="mc" draggable="true" data-i="${i}" style="--c:${s.color}"><button class="x" data-x="${i}" title="Cerrar">×</button><div class="mh"><i class="dot"></i><b>${o.name}</b><em>${PROV[o.pr]}</em></div><div class="mb">${fmt(o.pop)} hab.</div><small>${fmtV(o.area)} km² · ${fmtV(o.pop / o.area)} hab./km² · nº ${o.rankP} en población</small></div>`; }).join('');
  if (sels.length > 1) {
    const mx = k => Math.max(...sels.map(k)), rows = [['Habitantes', s => s.o.pop, fmt], ['Superficie (km²)', s => s.o.area, fmtV], ['Densidad (hab./km²)', s => s.o.pop / s.o.area, fmtV]];
    h += `<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>` +
      rows.map(([t, f, ff]) => `<div class="cr"><span>${t}</span>${sels.map(s => `<div class="bw"><i style="width:${Math.max(2, f(s) / mx(f) * 100)}%;background:${s.color}"></i><b>${ff(f(s))}</b></div>`).join('')}</div>`).join('');
    if (sels.length === 2) { const [a, b] = sels.map(s => s.o), [P, p] = a.pop >= b.pop ? [a, b] : [b, a], r = (x, y) => (x >= y ? x / y : y / x).toLocaleString('es-ES', { maximumFractionDigits: 1 }); h += `<small class="ratio"><b>${P.name}</b> tiene ${r(P.pop, p.pop)}× los habitantes de <b>${p.name}</b> y ocupa ${r(P.area, p.area)}× ${P.area >= p.area ? 'su superficie' : 'menos superficie'}.</small>`; }
    h += '</div>';
  }
  mcs.innerHTML = h;
  mcs.querySelectorAll('[data-x]').forEach(b => b.onclick = e => { e.stopPropagation(); removeSel(sels[+b.dataset.x].o); });
  mcs.querySelectorAll('.mc').forEach(el => {
    el.onclick = () => flyTo([sels[+el.dataset.i].o], Math.max(goal.tilt, 0.9));
    el.onmouseenter = () => { const o = sels[+el.dataset.i].o; pulses.set(o, performance.now()); };
    el.ondragstart = e => { e.dataTransfer.setData('text/plain', el.dataset.i); el.classList.add('drag'); };
    el.ondragend = () => el.classList.remove('drag');
    el.ondragover = e => { e.preventDefault(); el.classList.add('over'); };
    el.ondragleave = () => el.classList.remove('over');
    el.ondrop = e => { e.preventDefault(); const a = +e.dataTransfer.getData('text/plain'), b = +el.dataset.i; if (a !== b) { const [m] = sels.splice(a, 1); sels.splice(b, 0, m); renderCards(); const sil = $('#sil'); if (sil) sil.classList.add('flash'); } };
  });
  const sil = $('#sil'); if (sil) drawSil(sil);
}
q.addEventListener('input', () => {
  if (window.__rodSearch) { window.__rodSearch(q.value); return; }
  const t = norm(q.value.trim()); if (!t) { list.style.display = 'none'; return; }
  const a = [], b = [];
  for (const o of munis) { const n = norm(o.name); if (n.startsWith(t)) a.push(o); else if (n.includes(t)) b.push(o); }
  const r = a.sort((x, y) => y.pop - x.pop).concat(b.sort((x, y) => y.pop - x.pop)).slice(0, 8);
  list.innerHTML = r.map((o, i) => `<li data-i="${i}">${o.name}<em>${fmt(o.pop)}</em></li>`).join('') || '<li class="no">Sin resultados</li>';
  list.style.display = 'block';
  list.querySelectorAll('li[data-i]').forEach(li => li.onclick = () => select(r[+li.dataset.i]));
  list._r = r;
});
q.addEventListener('keydown', e => { if (e.key === 'Enter' && list._pick) list._pick(0); else if (e.key === 'Enter' && list._r && list._r[0]) select(list._r[0]); if (e.key === 'Escape') { q.value = ''; list.style.display = 'none'; } });
addEventListener('keydown', e => { if (e.key === 'Escape' && e.target !== q) clearFocus(); });
let rto = 0; addEventListener('resize', () => { clearTimeout(rto); rto = setTimeout(() => { const sil = $('#sil'); if (sil) drawSil(sil); }, 120); });

// ---------- foco (los demás se hunden) ----------
let focus = null;
const chip = $('#chip');
function setFocus(os, label, tilt = 0.8) {
  focus = { codes: new Set(os.map(o => o.code)), label };
  munis.forEach(o => { o.inF = focus.codes.has(o.code); paint(o); });
  chip.innerHTML = `<span>Mostrando: <b>${label}</b> · ${os.length}${os.length === 1 ? ' municipio' : ' municipios'}</span><button id="chx" title="Quitar filtro">×</button>`; chip.style.display = 'flex';
  $('#chx').onclick = clearFocus;
  setHeights(); flyTo(os, tilt);
  os.slice(0, 40).forEach(o => pulses.set(o, performance.now()));
}
function clearFocus() { if (!focus) return; focus = null; munis.forEach(o => { o.inF = true; paint(o); }); chip.style.display = 'none'; setHeights(); }


// ---------- panel de datos ----------
let tab = 'prov';
const pc1 = x => x.toLocaleString('es-ES', { maximumFractionDigits: 1 });
function bar(p, cls) { return `<i class="bar ${cls || ''}" style="width:${clamp(p, 0.8, 100)}%"></i>`; }
function getSet(key) {
  const desc = [...munis].sort((a, b) => b.pop - a.pop), dens = [...munis].sort((a, b) => b.pop / b.area - a.pop / a.area), [k, x, y] = key.split(':');
  if (k === 'pr') return [munis.filter(o => o.pr === x), PN[x]];
  if (k === 'top') return x === 'pop' ? [desc.slice(0, 10), '10 con más habitantes'] : [dens.slice(0, 10), '10 más densos'];
  if (k === 'low') return x === 'pop' ? [desc.slice(-10), '10 con menos habitantes'] : [dens.slice(-10), '10 menos densos'];
  if (k === 'size') return [munis.filter(o => o.pop >= +x && o.pop < +y), +y > 1e9 ? `${fmt(+x)} o más habitantes` : +x === 0 ? `menos de ${fmt(+y)} habitantes` : `${fmt(+x)} – ${fmt(+y - 1)} habitantes`];
  if (k === 'n50') { let c = 0, n = 0; for (const o of desc) { c += o.pop; n++; if (c >= total / 2) break; } return [desc.slice(0, n), `la mitad de la población`]; }
  return [[], ''];
}
function focusKey(key) { const [os, label] = getSet(key); if (os.length) setFocus(os, label, key.startsWith('pr:') ? 0.75 : 0.8); }
function renderPanels() {
  const body = null; if (!body) return;
  document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
  const asc = [...munis].sort((a, b) => a.pop - b.pop), desc = [...asc].reverse();
  const totA = munis.reduce((s, o) => s + o.area, 0), lk = o => `<a class="lk" data-code="${o.code}">${o.name}</a>`;
  const li = o => `<li data-code="${o.code}"><span>${o.name}</span><em>${fmt(o.pop)} · ${fmtV(o.pop / o.area)}/km²</em></li>`;
  let h = '';
  if (tab === 'prov') {
    const rows = Object.keys(PROV).map(pr => { const os = munis.filter(o => o.pr === pr), pop = os.reduce((s, o) => s + o.pop, 0), ar = os.reduce((s, o) => s + o.area, 0); return { pr, n: os.length, pop, ar, top: os.reduce((a, b) => (b.pop > a.pop ? b : a)) }; }).sort((a, b) => b.pop - a.pop);
    h = rows.map(r => `<div class="prow" data-focus="pr:${r.pr}"><div class="ph"><b>${PROV[r.pr]} <u>↗</u></b><span>${fmt(r.pop)} hab.</span></div>
      <div class="pl">Población ${pc1(r.pop / total * 100)} %</div>${bar(r.pop / total * 100)}
      <div class="pl">Superficie ${pc1(r.ar / totA * 100)} %</div>${bar(r.ar / totA * 100, 'g')}
      <small>${r.n} municipios · ${fmtV(r.pop / r.ar)} hab./km² · mayor: ${lk(r.top)} (${fmt(r.top.pop)})</small></div>`).join('') +
      `<small class="nt">Pulsa una provincia: el resto de Cataluña se hunde y se queda ella sola. Densidad media: ${fmtV(total / totA)} hab./km².</small>`;
  } else if (tab === 'rank') {
    const dens = [...munis].sort((a, b) => b.pop / b.area - a.pop / a.area), H = (t, k) => `<h4 data-focus="${k}">${t} <u>ver los 10 en el mapa ↗</u></h4>`;
    h = `${H('Más habitantes', 'top:pop')}<ol>${desc.slice(0, 10).map(li).join('')}</ol>${H('Mayor densidad', 'top:dens')}<ol>${dens.slice(0, 10).map(li).join('')}</ol>${H('Menor densidad', 'low:dens')}<ol>${dens.slice(-10).reverse().map(li).join('')}</ol>${H('Menos habitantes', 'low:pop')}<ol>${asc.slice(0, 10).map(li).join('')}</ol>`;
  } else if (tab === 'size') {
    const B = [[0, 100, 'menos de 100'], [100, 500, '100 – 499'], [500, 1000, '500 – 999'], [1000, 5000, '1.000 – 4.999'], [5000, 20000, '5.000 – 19.999'], [20000, 100000, '20.000 – 99.999'], [100000, 1e12, '100.000 o más']];
    h = '<div class="pl">Pulsa un tramo y solo esos municipios se quedan en pie. Gris: % de municipios · rojo: % de población.</div>' + B.map(([a, b, t]) => { const os = munis.filter(o => o.pop >= a && o.pop < b), p = os.reduce((s, o) => s + o.pop, 0); return `<div class="srow" data-focus="size:${a}:${b}"><div class="ph"><b>${t} hab. <u>↗</u></b><span>${os.length} mun. · ${fmt(p)}</span></div>${bar(os.length / munis.length * 100, 'g')}${bar(p / total * 100)}<small>${pc1(os.length / munis.length * 100)} % de los municipios · ${pc1(p / total * 100)} % de la población</small></div>`; }).join('');
  } else {
    let cum = 0, n50 = 0; for (const o of desc) { cum += o.pop; n50++; if (cum >= total / 2) break; }
    const t10 = desc.slice(0, 10).reduce((s, o) => s + o.pop, 0), lt1k = munis.filter(o => o.pop < 1000), lt100 = munis.filter(o => o.pop < 100);
    const med = (asc[Math.floor((asc.length - 1) / 2)].pop + asc[Math.ceil((asc.length - 1) / 2)].pop) / 2, dens = [...munis].sort((a, b) => b.pop / b.area - a.pop / a.area);
    const big = [...munis].sort((a, b) => b.area - a.area), pBCN = munis.filter(o => o.pr === '08'), bcnPop = pBCN.reduce((s, o) => s + o.pop, 0), bcnAr = pBCN.reduce((s, o) => s + o.area, 0), dl = dens[dens.length - 1], bl = big[big.length - 1];
    const f = [
      [`<b>${n50} municipios</b> (${pc1(n50 / munis.length * 100)} %) reúnen la mitad de la población de Cataluña.`, 'n50'],
      [`${lk(desc[0])} concentra el ${pc1(desc[0].pop / total * 100)} % de los habitantes; los 10 mayores suman el ${pc1(t10 / total * 100)} %.`, 'top:pop'],
      [`La provincia de Barcelona tiene el <b>${pc1(bcnPop / total * 100)} %</b> de la población en el <b>${pc1(bcnAr / totA * 100)} %</b> del territorio.`, 'pr:08'],
      [`<b>${lt1k.length} municipios</b> (${pc1(lt1k.length / munis.length * 100)} %) tienen menos de 1.000 habitantes y suman solo el ${pc1(lt1k.reduce((s, o) => s + o.pop, 0) / total * 100)} % de la población.`, 'size:0:1000'],
      [`${lt100.length} municipios tienen menos de 100 habitantes; el más pequeño es ${lk(asc[0])} (${fmt(asc[0].pop)}).`, 'size:0:100'],
      [`Mediana: <b>${fmt(Math.round(med))} hab.</b> por municipio; media: ${fmt(Math.round(total / munis.length))}. Unos pocos gigantes elevan la media.`, ''],
      [`Más denso: ${lk(dens[0])} (${fmtV(dens[0].pop / dens[0].area)} hab./km²). Menos denso: ${lk(dl)} (${fmtV(dl.pop / dl.area)} hab./km²).`, 'top:dens'],
      [`Más extenso: ${lk(big[0])} (${fmtV(big[0].area)} km², ${fmt(big[0].pop)} hab.). Más pequeño: ${lk(bl)} (${fmtV(bl.area)} km²).`, ''],
      [`Superficie total sumada: ${fmt(Math.round(totA))} km²; densidad media ${fmtV(total / totA)} hab./km².`, '']
    ];
    h = '<small class="nt0">Los nombres te llevan al municipio; el resto de la frase, a su grupo en el mapa.</small><ul class="facts">' + f.map(([x, k]) => `<li${k ? ` class="act" data-focus="${k}"` : ''}>${x}${k ? ' <u>↗</u>' : ''}</li>`).join('') + '</ul>';
  }
  body.innerHTML = h;
  body.querySelectorAll('[data-focus]').forEach(e => e.onclick = () => focusKey(e.dataset.focus));
  body.querySelectorAll('[data-code]').forEach(e => e.onclick = ev => { ev.stopPropagation(); select(byCode[e.dataset.code]); });
}
document.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { tab = b.dataset.tab; renderPanels(); $('#dbody').scrollTop = 0; });
// ---------- gestos para apartar paneles (móvil) ----------
const rcEl = $('#rc'), mtab = $('#mcstab');
function rcMin(on) { rcEl.classList.toggle('min', on); $('#rcgrab span').textContent = on ? 'Mostrar controles' : 'Ocultar controles'; if (sels.length) renderCards(); }
function mcsMin(on) { mcs.classList.toggle('min', on); mcs.style.transform = ''; mcs.style.opacity = ''; mtab.classList.toggle('on', on && sels.length > 0); if (on) { mtab.textContent = `▸ ${sels.length} ${sels.length === 1 ? 'ficha' : 'fichas'}`; mtab.style.top = mcs.style.top || '124px'; } }
function swipe(el, { onMove, onEnd, axis }) {
  let s0 = null;
  el.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' || !MQ.matches || e.target.closest('input,button:not(#rcgrab),.seg')) return; s0 = { x: e.clientX, y: e.clientY, id: e.pointerId, lock: null }; });
  addEventListener('pointermove', e => {
    if (!s0 || e.pointerId !== s0.id) return; const dx = e.clientX - s0.x, dy = e.clientY - s0.y;
    if (!s0.lock && Math.hypot(dx, dy) > 10) s0.lock = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    if (s0.lock === axis) { onMove && onMove(dx, dy); }
  });
  const end = e => { if (!s0 || e.pointerId !== s0.id) return; const dx = e.clientX - s0.x, dy = e.clientY - s0.y, l = s0.lock; s0 = null; onEnd(l === axis ? dx : 0, l === axis ? dy : 0, l); };
  addEventListener('pointerup', end, true); addEventListener('pointercancel', end, true);
}
$('#rcgrab').onclick = () => rcMin(!rcEl.classList.contains('min'));
if (innerWidth <= 640 || matchMedia('(max-height:500px) and (pointer:coarse)').matches || document.documentElement.classList.contains('cap')) rcMin(true);   // en el móvil los controles empiezan escondidos
requestAnimationFrame(() => document.documentElement.classList.remove('boot'));   // ya está todo colocado: fuera la pantalla de arranque
const land = () => innerWidth > 640;
swipe(rcEl, { axis: 'y', onEnd: (dx, dy) => { if (land()) return; if (dy > 40 && !rcEl.classList.contains('min')) { const sc = $('#dp.open #dbody'); if (!sc || sc.scrollTop <= 0 || dy > 120) rcMin(true); } else if (dy < -30 && rcEl.classList.contains('min')) rcMin(false); } });
swipe(rcEl, { axis: 'x', onEnd: dx => { if (!land()) return; if (dx > 50) rcMin(true); else if (dx < -30 && rcEl.classList.contains('min')) rcMin(false); } });
swipe(mcs, { axis: 'x', onMove: dx => { if (dx < 0) { mcs.classList.add('sw'); mcs.style.transform = `translateX(${dx}px)`; mcs.style.opacity = Math.max(0.2, 1 + dx / 300); } },
  onEnd: dx => { mcs.classList.remove('sw'); if (dx < -60) { mcsMin(true); if (window.__rodHide && !sels.length) window.__rodHide(); } else { mcs.style.transform = ''; mcs.style.opacity = ''; } } });
mtab.onclick = () => { mcsMin(false); renderCards(); };
$('#dtoggle').onclick = () => { const o = $('#dp').classList.toggle('open'); $('#rc').classList.toggle('dopen', o); $('#dtoggle').textContent = o ? (MQ.matches && innerWidth <= 640 ? '← Controles' : 'En directo ▴') : 'En directo: conectar datos de Renfe ▾'; if (window.__rodCard) window.__rodCard(); };
const MQ = matchMedia('(max-width:640px), (max-height:500px)');
function placeLeg() { const l = $('#leg'); if (MQ.matches) $('#rc').insertBefore(l, $('#dtoggle')); else document.body.appendChild(l); if (sels.length) renderCards(); }
MQ.addEventListener('change', placeLeg); placeLeg();

// ---------- datos en vivo ----------
function applyData(map, ref, upd, live) {
  for (const o of munis) if (map[o.code] != null) o.pop = map[o.code];
  recompute();
  const d = upd ? new Date(upd).toLocaleDateString('es-ES') : '';
  $('#src').innerHTML = `Idescat · Cens anual INE ${ref}${d ? ' · publicado ' + d : ''} · ` + (live ? `consultado hoy ${new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}` : 'datos guardados (sin conexión con el Idescat)');
  renderCards();
}
async function load() {
  try {
    const r = await fetch(API, { cache: 'no-store' });
    if (!r.ok) throw new Error(r.status);
    const f = (await r.json()).fitxes, i = f.indicadors.i, v = i.v.split(','), map = {};
    f.cols.col.forEach((c, k) => { const n = parseInt(v[k], 10); if (c.id && Number.isFinite(n)) map[c.id.slice(0, 5)] = n; });
    if (Object.keys(map).length < 900) throw new Error('datos incompletos');
    applyData(map, i.r, i.updated, true);
  } catch (e) { applyData({}, D.ref, D.upd, false); }
}

resize(); recompute(); resetView(); Object.assign(cur, goal);
for (const o of munis) { o.z = 0.01; }
requestAnimationFrame(frame);
initRail({ scene, camera, renderer, goal, cur, invalidate, flyTo: (x, y, dist, tilt) => { Object.assign(goal, { tx: (x - CX) * K, ty: (y - CY) * K, dist, tilt }); invalidate(); }, K, CX, CY, mcs, q, list, munis, select, norm, fmt, clamp, mcsMin });
window.__app = { scene, renderer, camera, munis, labs, goal, cur, select, get mode() { return mode; } };
window.__ready = true;
