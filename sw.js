// Catalunya Survival · MonkiSoft · service worker
const VERSION = 'cs-2026-10-21e';
const APP = 'app-' + VERSION, TILES = 'tiles-v1', DATA = 'data-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
const MAX_TILES = 12000;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('app-') && k !== APP).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

let trimTimer = 0;
async function trimTiles() {
  const c = await caches.open(TILES), ks = await c.keys();
  if (ks.length > MAX_TILES) for (const k of ks.slice(0, ks.length - MAX_TILES)) await c.delete(k);
}

self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Teselas del ICGC: primero la caché del teléfono; si no está, red y se guarda.
  if (url.hostname === 'geoserveis.icgc.cat' || url.pathname.includes('/mapa-base/wmts/')) {
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(req, { ignoreVary: true });
      if (hit) return hit;
      try {
        const res = await fetch(req);
        if (res.ok) { c.put(req, res.clone()); clearTimeout(trimTimer); trimTimer = setTimeout(trimTiles, 5000); }
        return res;
      } catch (err) { return new Response('', { status: 504, statusText: 'offline' }); }
    }));
    return;
  }
  // Datos en vivo del Idescat: red primero, copia guardada si no hay red.
  if (url.hostname === 'api.idescat.cat') {
    e.respondWith(fetch(req).then(res => { const cl = res.clone(); caches.open(DATA).then(c => c.put(req, cl)); return res; }).catch(() => caches.match(req).then(r => r || new Response('{}', { status: 504 }))));
    return;
  }
  // La propia app: sale de la caché al instante y se actualiza por detrás.
  if (url.origin === self.location.origin) {
    e.respondWith(caches.open(APP).then(async c => {
      const key = req.mode === 'navigate' ? './index.html' : req;
      const hit = await c.match(key, { ignoreSearch: true });
      const net = fetch(req).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
      return hit || (await net) || new Response('Sin conexión', { status: 503 });
    }));
  }
});
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
