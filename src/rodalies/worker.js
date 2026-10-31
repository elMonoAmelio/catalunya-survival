// Puente Rodalies (MonkiSoft): datos públicos en directo de Renfe, Rodalies de Catalunya y Adif,
// avisos en el móvil (Web Push) y avisos de los propios viajeros.
// Necesita: base de datos D1 enlazada con el nombre DB y una tarea programada (cron) cada 2 minutos.
const RENFE = 'https://gtfsrt.renfe.com', GRS = 'https://serveisgrs.rodalies.gencat.cat/api';
const ADIF = 'https://www.adif.es/viajeros/estado-de-la-red/-/categories/53897344?p_r_p_categoryId=53897344&resetCur=true';   // Adif · estado de la red · Cataluña
const NOTICES = GRS + '/notices?limit=500&sort=date,desc&sort=time,desc';
const PERMITIDOS = ['https://elmonoamelio.github.io', 'null', 'capacitor://localhost', 'https://localhost'];   // web, archivo local, app iOS y app Android
const APP = 'https://elmonoamelio.github.io/catalunya-survival/rodalies.html';
// tipos de aviso de viajeros (solo botones, sin texto libre)
const TIPOS = { vacio: 'Va con sitio', lleno: 'Va lleno', petado: 'Muy lleno, cuesta subir', parado: 'Parado sin moverse', calor: 'Sin aire acondicionado', abordo: 'Incidencia a bordo',
  gente: 'Mucha gente esperando', retraso: 'Anuncian retraso por megafonía', cancel: 'Anuncian tren cancelado', ascensor: 'Ascensor o escalera averiados', via: 'Incidencia en la estación' };
const AVISAN = new Set(['parado', 'abordo', 'cancel', 'via']);   // con 2 viajeros distintos se manda aviso al móvil

function destino(url) {
  const p = url.pathname, q = url.searchParams;
  if (['/trip_updates.json', '/vehicle_positions.json', '/alerts.json'].includes(p)) return [RENFE + p, 15];
  if (p === '/notices.json') return [NOTICES, 60];
  if (p === '/departures.json' && /^\d{4,6}$/.test(q.get('stationId') || '')) return [GRS + '/departures?lang=ca&fullResponse=true&stationId=' + q.get('stationId'), 30];
  return null;
}
const J = (o, h, st = 200) => new Response(JSON.stringify(o), { status: st, headers: { ...h, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
const b64u = b => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64u = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));
async function sha(s) { return b64u(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s))).slice(0, 22); }

// ---------- base de datos ----------
let listo = false;
async function db(env) {
  if (!env.DB) throw new Error('Falta enlazar la base de datos D1 con el nombre DB');
  if (!listo) {
    await env.DB.batch([
      env.DB.prepare('CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT)'),
      env.DB.prepare('CREATE TABLE IF NOT EXISTS subs (id TEXT PRIMARY KEY, ep TEXT, lines TEXT, sts TEXT, at INTEGER)'),
      env.DB.prepare('CREATE TABLE IF NOT EXISTS seen (id TEXT PRIMARY KEY, at INTEGER)'),
      env.DB.prepare('CREATE TABLE IF NOT EXISTS inbox (n INTEGER PRIMARY KEY AUTOINCREMENT, sub TEXT, title TEXT, body TEXT, url TEXT, at INTEGER)'),
      env.DB.prepare('CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, kind TEXT, sid TEXT, num TEXT, line TEXT, iph TEXT, up INTEGER DEFAULT 1, down INTEGER DEFAULT 0, at INTEGER)'),
      env.DB.prepare('CREATE TABLE IF NOT EXISTS votes (rid INTEGER, iph TEXT, PRIMARY KEY (rid, iph))'),
    ]);
    listo = true;
  }
  return env.DB;
}
// claves VAPID: se crean solas la primera vez y se guardan en la base de datos (no hace falta configurar nada)
async function vapid(env) {
  const D = await db(env), r = await D.prepare("SELECT v FROM kv WHERE k='vapid'").first();
  if (r) return JSON.parse(r.v);
  const kp = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  const jwk = await crypto.subtle.exportKey('jwk', kp.privateKey), raw = await crypto.subtle.exportKey('raw', kp.publicKey);
  const v = { jwk, pub: b64u(raw) };
  await D.prepare("INSERT OR IGNORE INTO kv (k, v) VALUES ('vapid', ?)").bind(JSON.stringify(v)).run();
  return JSON.parse((await D.prepare("SELECT v FROM kv WHERE k='vapid'").first()).v);
}
// envío Web Push sin contenido: el móvil se despierta y pide sus avisos a /push/inbox
async function push(env, ep) {
  const V = await vapid(env), aud = new URL(ep).origin, enc = o => b64u(new TextEncoder().encode(JSON.stringify(o)));
  const un = enc({ typ: 'JWT', alg: 'ES256' }) + '.' + enc({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: 'https://elmonoamelio.github.io' });
  const key = await crypto.subtle.importKey('jwk', V.jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(un));
  const r = await fetch(ep, { method: 'POST', headers: { Authorization: `vapid t=${un}.${b64u(sig)}, k=${V.pub}`, TTL: '1800', Urgency: 'high', 'Content-Length': '0' } });
  return r.status;
}
async function avisar(env, { lines = [], sts = [], all = false, title, body, url }) {
  const D = await db(env), subs = (await D.prepare('SELECT id, ep, lines, sts FROM subs').all()).results || [], now = Date.now();
  const L = new Set(lines), S = new Set(sts);
  for (const s of subs) {
    const sl = (s.lines || '').split(',').filter(Boolean), ss = (s.sts || '').split(',').filter(Boolean);
    if (!(all || sl.some(x => L.has(x)) || ss.some(x => S.has(x)))) continue;
    await D.prepare('INSERT INTO inbox (sub, title, body, url, at) VALUES (?, ?, ?, ?, ?)').bind(s.id, title, body, url || APP, now).run();
    const st = await push(env, s.ep).catch(() => 0);
    if (st === 404 || st === 410) await D.batch([D.prepare('DELETE FROM subs WHERE id=?').bind(s.id), D.prepare('DELETE FROM inbox WHERE sub=?').bind(s.id)]);
  }
}

// ---------- Adif: su página de incidencias de Cataluña pasada a JSON ----------
async function adif() {
  try {
    const h = await (await fetch(ADIF, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'text/html' }, cf: { cacheTtl: 120, cacheEverything: true } })).text();
    const txt = s => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
    const u = h.match(/fecha-actualizacion__text">\s*(\d{2})-(\d{2})-(\d{4})\s*\/\s*(?:<[^>]+>\s*)?(\d{2}):(\d{2})/);
    const items = h.split('class="aviso-card ').slice(1).map(c => ({ lvl: (c.match(/^aviso-card--(\w+)/) || [])[1] || '', t: txt((c.match(/aviso-card__titulo">([\s\S]*?)<\/span>/) || [])[1] || ''), txt: txt((c.match(/aviso-card__content">([\s\S]*?)<\/div>/) || [])[1] || '') })).filter(x => x.t || x.txt);
    return { ok: true, upd: u ? `${u[3]}-${u[2]}-${u[1]}T${u[4]}:${u[5]}` : '', items };
  } catch (e) { return { ok: false, err: String(e), items: [] }; }
}

// ---------- tarea programada: avisos nuevos de Rodalies y Adif → móviles suscritos ----------
async function revisar(env) {
  const D = await db(env), now = Date.now(), nuevos = [];
  const first = !(await D.prepare('SELECT id FROM seen LIMIT 1').first());
  try {
    const n = await (await fetch(NOTICES, { headers: { Accept: 'application/json' } })).json();
    for (const x of n.included || []) { const tl = y => ((y || {}).es || (y || {}).ca || '').trim(), tx = [tl(x.description), tl(x.title)].sort((a, b) => b.length - a.length)[0]; if (tx) nuevos.push({ id: 'N' + x.externalId, lines: (x.lines || []).map(l => l.id), txt: tx }); }
  } catch (e) {}
  const a = await adif();
  for (const it of a.items) { const tx = (it.t ? it.t + '. ' : '') + it.txt; nuevos.push({ id: 'A' + (await sha(tx)), lines: [...new Set(tx.match(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g) || [])], txt: tx, adif: true }); }
  for (const x of nuevos) {
    const r = await D.prepare('INSERT OR IGNORE INTO seen (id, at) VALUES (?, ?)').bind(x.id, now).run();
    if (first || !r.meta.changes) continue;   // la primera vez solo se apunta lo que ya había
    if (!x.lines.length && !x.adif) continue;   // aviso sin línea: solo los de Adif van a todos (afectan a la vía en Cataluña)
    await avisar(env, { lines: x.lines, all: !x.lines.length, title: (x.adif ? 'Adif · vía' : 'Rodalies') + (x.lines.length ? ' · ' + x.lines.join(' ') : ''), body: x.txt.slice(0, 240) });
  }
  await D.batch([
    D.prepare('DELETE FROM seen WHERE at < ?').bind(now - 7 * 864e5),
    D.prepare('DELETE FROM inbox WHERE at < ?').bind(now - 864e5),
    D.prepare('DELETE FROM reports WHERE at < ?').bind(now - 3 * 3600e3),
    D.prepare('DELETE FROM votes WHERE rid NOT IN (SELECT id FROM reports)'),
  ]);
}

export default {
  async fetch(req, env, ctx) {
    const o = req.headers.get('Origin') || '';
    const cors = { 'Access-Control-Allow-Origin': PERMITIDOS.includes(o) ? o : PERMITIDOS[0], 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const url = new URL(req.url), p = url.pathname;
    try {
      // todo lo de «en directo» en una sola petición (la app la pide cada 20 s): 1 petición en vez de 5-6. Se guarda 15 s para todos.
      if (p === '/live.json') {
        const H = { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=15' }, key = new Request('https://cache.puente/live.json'), cache = caches.default;
        const hit = await cache.match(key); if (hit) return new Response(hit.body, { headers: H });
        const up = (u, t) => fetch(u, { headers: { Accept: 'application/json' }, cf: { cacheTtl: t, cacheEverything: true } }).then(r => r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status)));
        const part = pr => pr.then(t => /^\s*[{\[]/.test(t || '') ? t : '{"__err":"formato"}', e => JSON.stringify({ __err: String(e && e.message || e) }));   // sin analizar el JSON: no gasta CPU
        const [tu, vp, al, nt, ad, rp] = await Promise.all([part(up(RENFE + '/trip_updates.json', 15)), part(up(RENFE + '/vehicle_positions.json', 15)), part(up(RENFE + '/alerts.json', 15)), part(up(NOTICES, 60)),
          adif().then(x => JSON.stringify(x)).catch(e => JSON.stringify({ ok: false, err: String(e.message || e) })),
          (async () => { const r = (await (await db(env)).prepare('SELECT id, kind, sid, num, line, up, down, at FROM reports WHERE at > ? AND up > down ORDER BY at DESC LIMIT 300').bind(Date.now() - 90 * 60e3).all()).results || []; return JSON.stringify({ now: Date.now(), tipos: TIPOS, items: r }); })().catch(() => 'null')]);
        const body = `{"v":1,"now":${Date.now()},"tu":${tu},"vp":${vp},"al":${al},"nt":${nt},"ad":${ad},"rep":${rp}}`;
        if (ctx) ctx.waitUntil(cache.put(key, new Response(body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=15' } })));
        return new Response(body, { headers: H });
      }
      if (p === '/adif.json') return new Response(JSON.stringify(await adif()), { headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=120' } });
      // --- avisos en el móvil ---
      if (p === '/push/key') return J({ key: (await vapid(env)).pub }, cors);
      if (p === '/push/subscribe' && req.method === 'POST') {
        const b = await req.json(), ep = b.sub && b.sub.endpoint; if (!/^https:\/\//.test(ep || '')) return J({ ok: false }, cors, 400);
        const clean = a => (Array.isArray(a) ? a : []).map(String).filter(x => /^[\w]{1,8}$/.test(x)).slice(0, 40).join(',');
        await (await db(env)).prepare('INSERT OR REPLACE INTO subs (id, ep, lines, sts, at) VALUES (?, ?, ?, ?, ?)').bind(await sha(ep), ep, clean(b.lines), clean(b.stations), Date.now()).run();
        return J({ ok: true }, cors);
      }
      if (p === '/push/unsubscribe' && req.method === 'POST') { const b = await req.json(); const id = await sha(b.endpoint || ''); const D = await db(env); await D.batch([D.prepare('DELETE FROM subs WHERE id=?').bind(id), D.prepare('DELETE FROM inbox WHERE sub=?').bind(id)]); return J({ ok: true }, cors); }
      if (p === '/push/inbox') {
        const id = await sha(url.searchParams.get('e') || ''), D = await db(env);
        const r = (await D.prepare('SELECT n, title, body, url FROM inbox WHERE sub=? ORDER BY n LIMIT 5').bind(id).all()).results || [];
        if (r.length) await D.prepare('DELETE FROM inbox WHERE sub=? AND n<=?').bind(id, r[r.length - 1].n).run();
        return J({ items: r }, cors);
      }
      // --- avisos de viajeros ---
      if (p === '/reports.json') {
        const r = (await (await db(env)).prepare('SELECT id, kind, sid, num, line, up, down, at FROM reports WHERE at > ? AND up > down ORDER BY at DESC LIMIT 300').bind(Date.now() - 90 * 60e3).all()).results || [];
        return J({ now: Date.now(), tipos: TIPOS, items: r }, cors);
      }
      if ((p === '/report' || p === '/vote') && req.method === 'POST') {
        const ip = req.headers.get('CF-Connecting-IP') || '', iph = await sha('rod|' + ip + '|' + new Date().toISOString().slice(0, 10)), b = await req.json(), D = await db(env), now = Date.now();
        if (p === '/vote') {
          const rid = +b.id, v = b.v > 0 ? 'up' : 'down'; if (!rid) return J({ ok: false }, cors, 400);
          const r = await D.prepare('INSERT OR IGNORE INTO votes (rid, iph) VALUES (?, ?)').bind(rid, iph).run();
          if (r.meta.changes) await D.prepare(`UPDATE reports SET ${v} = ${v} + 1 WHERE id=?`).bind(rid).run();
          return J({ ok: true, dup: !r.meta.changes }, cors);
        }
        const kind = String(b.kind || ''), sid = /^\d{4,6}$/.test(b.sid || '') ? b.sid : '', num = /^\w{1,8}$/.test(b.num || '') ? b.num : '', line = /^\w{1,4}$/.test(b.line || '') ? b.line : '';
        if (!TIPOS[kind] || !(sid || num)) return J({ ok: false, err: 'aviso no válido' }, cors, 400);
        if (await D.prepare('SELECT id FROM reports WHERE iph=? AND at > ?').bind(iph, now - 90e3).first()) return J({ ok: false, err: 'Espera un momento antes de enviar otro aviso' }, cors, 429);
        // si otro viajero ya avisó de lo mismo hace poco, se suma a su aviso
        const same = await D.prepare('SELECT id, up FROM reports WHERE kind=? AND sid=? AND num=? AND at > ? ORDER BY at DESC LIMIT 1').bind(kind, sid, num, now - 20 * 60e3).first();
        let id, n = 1;
        if (same) {
          const v = await D.prepare('INSERT OR IGNORE INTO votes (rid, iph) VALUES (?, ?)').bind(same.id, iph).run();
          if (v.meta.changes) await D.prepare('UPDATE reports SET up = up + 1, at = ? WHERE id=?').bind(now, same.id).run();
          id = same.id; n = same.up + (v.meta.changes ? 1 : 0);
        } else {
          id = (await D.prepare('INSERT INTO reports (kind, sid, num, line, iph, at) VALUES (?, ?, ?, ?, ?, ?)').bind(kind, sid, num, line, iph, now).run()).meta.last_row_id;
          await D.prepare('INSERT OR IGNORE INTO votes (rid, iph) VALUES (?, ?)').bind(id, iph).run();
        }
        if (AVISAN.has(kind) && n === 2) await avisar(env, { lines: line ? [line] : [], sts: sid ? [sid] : [], title: 'Viajeros' + (line ? ' · ' + line : ''), body: TIPOS[kind] + (num ? ' · tren ' + num : '') + ' (lo confirman 2 viajeros)' });
        return J({ ok: true, id, n }, cors);
      }
      const d = destino(url);
      if (!d) return new Response('Puente Rodalies: /live.json, /trip_updates.json, /vehicle_positions.json, /alerts.json, /notices.json, /adif.json, /departures.json?stationId=, /reports.json, /push/*', { status: 404, headers: cors });
      const r = await fetch(d[0], { headers: { Accept: 'application/json' }, cf: { cacheTtl: d[1], cacheEverything: true } });
      return new Response(r.body, { status: r.status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=' + d[1] } });
    } catch (e) { return J({ ok: false, err: String(e.message || e) }, cors, 500); }
  },
  async scheduled(ev, env, ctx) { ctx.waitUntil(revisar(env)); }
};
