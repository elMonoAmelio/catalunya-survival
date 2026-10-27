// Catalunya Survival · MonkiSoft · service worker
const VERSION = 'cs-1.163';
const APP = 'app-' + VERSION, TILES = 'tiles-v1', DATA = 'data-v1';
const CORE = ['./', './index.html', './rodalies.html', './manifest.webmanifest', './rodalies.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
const MAX_TILES = 25000;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
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
  if (url.hostname === 'geoserveis.icgc.cat' || url.hostname === 'servicios.idee.es' || url.pathname.includes('/mapa-base/wmts/')) {
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
      const nav = req.mode === 'navigate', key = nav ? (/rodalies\.html$/.test(url.pathname) ? './rodalies.html' : './index.html') : url.origin + url.pathname;   // sin ?parámetros: una sola copia por archivo
      const hit = await c.match(key, { ignoreSearch: true });
      const net = fetch(req, { cache: 'no-cache' }).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
      e.waitUntil(net);   // que el teléfono no corte la descarga de la versión nueva
      // páginas: primero la versión nueva (si la red responde en 3 s); si no, la guardada. Así al abrir se ve siempre lo último.
      if (nav) { const quick = await Promise.race([net, new Promise(r => setTimeout(() => r(null), 3000))]); return quick || hit || (await net) || new Response('Sin conexión', { status: 503 }); }
      return hit || (await net) || new Response('Sin conexión', { status: 503 });
    }));
  }
});
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });

// Avisos de Rodalies en el móvil: el puente despierta al teléfono y aquí se piden los avisos pendientes
const PUENTE = 'https://rodalies.erathegameoftime.com';
self.addEventListener('push', e => {
  e.waitUntil((async () => {
    let items = [];
    try { const s = await self.registration.pushManager.getSubscription(); if (s) items = ((await (await fetch(PUENTE + '/push/inbox?e=' + encodeURIComponent(s.endpoint), { cache: 'no-store' })).json()).items) || []; } catch (err) {}
    if (!items.length) items = [{ title: 'Rodalies', body: 'Hay novedades en tus líneas. Toca para verlas.', url: './rodalies.html' }];
    for (const it of items) await self.registration.showNotification(it.title, { body: it.body, icon: './icons/icon-192.png', badge: './icons/icon-192.png', tag: 'rod-' + (it.n || Date.now()), data: { url: it.url || './rodalies.html' } });
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './rodalies.html';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => { const c = cs.find(x => /rodalies\.html/.test(x.url)) || cs[0]; return c ? c.focus().then(() => c.navigate ? c.navigate(url).catch(() => c) : c) : self.clients.openWindow(url); }));
});
