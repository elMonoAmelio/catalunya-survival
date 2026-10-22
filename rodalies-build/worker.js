// Puente Rodalies (MonkiSoft): deja leer a la web los datos públicos en directo de Renfe y de Rodalies de Catalunya.
const RENFE = 'https://gtfsrt.renfe.com', GRS = 'https://serveisgrs.rodalies.gencat.cat/api';
const PERMITIDOS = ['https://elmonoamelio.github.io', 'null'];
function destino(url) {
  const p = url.pathname, q = url.searchParams;
  if (['/trip_updates.json', '/vehicle_positions.json', '/alerts.json'].includes(p)) return [RENFE + p, 15];
  if (p === '/notices.json') return [GRS + '/notices?limit=500&sort=date,desc&sort=time,desc', 60];
  if (p === '/departures.json' && /^\d{4,6}$/.test(q.get('stationId') || '')) return [GRS + '/departures?lang=ca&fullResponse=true&stationId=' + q.get('stationId'), 30];
  return null;
}
export default {
  async fetch(req) {
    const o = req.headers.get('Origin') || '';
    const cors = { 'Access-Control-Allow-Origin': PERMITIDOS.includes(o) ? o : PERMITIDOS[0], 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Vary': 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const d = destino(new URL(req.url));
    if (!d) return new Response('Puente Rodalies: /trip_updates.json, /vehicle_positions.json, /alerts.json, /notices.json, /departures.json?stationId=', { status: 404, headers: cors });
    const r = await fetch(d[0], { headers: { Accept: 'application/json' }, cf: { cacheTtl: d[1], cacheEverything: true } });
    return new Response(r.body, { status: r.status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=' + d[1] } });
  }
};
