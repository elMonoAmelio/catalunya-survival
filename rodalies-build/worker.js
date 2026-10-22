// Puente Rodalies (MonkiSoft): lee el tiempo real público de Renfe y lo deja leer a la web.
const ORIGEN = 'https://gtfsrt.renfe.com';
const RUTAS = ['/trip_updates.json', '/vehicle_positions.json', '/alerts.json'];
const PERMITIDOS = ['https://elmonoamelio.github.io', 'null'];
export default {
  async fetch(req) {
    const o = req.headers.get('Origin') || '';
    const cors = { 'Access-Control-Allow-Origin': PERMITIDOS.includes(o) ? o : PERMITIDOS[0], 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Vary': 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const ruta = new URL(req.url).pathname;
    if (!RUTAS.includes(ruta)) return new Response('Puente Rodalies: usa /trip_updates.json, /vehicle_positions.json o /alerts.json', { status: 404, headers: cors });
    const r = await fetch(ORIGEN + ruta, { cf: { cacheTtl: 15, cacheEverything: true } });
    return new Response(r.body, { status: r.status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=15' } });
  }
};
