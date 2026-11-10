# Estadísticas de Rodalies (MonkiSoft): cada 15 min se toma una foto del tiempo real de Renfe
# y se acumula en hoy.json (por línea, por estación y a lo largo del día). Al cambiar de día, hoy.json pasa a ayer.json.
import json, os, re, sys, datetime, zoneinfo, urllib.request

OUT = sys.argv[1] if len(sys.argv) > 1 else '.'
TZ = zoneinfo.ZoneInfo('Europe/Madrid')
now = datetime.datetime.now(TZ)
FAM = re.compile(r'(R\d{1,2}[A-Za-z]?|RG1|RL\d|RT\d)$')


def get(u):
    req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json'})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.load(r)


def load(name):
    try:
        with open(os.path.join(OUT, name)) as f:
            return json.load(f)
    except Exception:
        return None


# Renfe directo; si no responde (a veces bloquea a GitHub), a través de nuestro puente; si tampoco, vacío y se usa Rodalies
def renfe(p):
    for u in ('https://gtfsrt.renfe.com/' + p, 'https://rodalies.erathegameoftime.com/' + p, 'https://rodalies.jhmuyo.workers.dev/' + p):
        try:
            d = get(u)
            if isinstance(d, dict) and 'entity' in d:
                return d
        except Exception as e:
            print('sin respuesta', u, e)
    return {}
tu = renfe('trip_updates.json')
vp = renfe('vehicle_positions.json')
rod = lambda t: (t or '').startswith('51')

delay, nxt, cancel = {}, {}, set()
for e in tu.get('entity', []):
    u = e.get('tripUpdate') or {}
    tid = (u.get('trip') or {}).get('tripId', '')
    if not rod(tid):
        continue
    stu = u.get('stopTimeUpdate') or []
    d = u.get('delay')
    if d is None and stu:
        d = ((stu[0].get('arrival') or stu[0].get('departure')) or {}).get('delay')
    if (u.get('trip') or {}).get('scheduleRelationship') == 'CANCELED':
        cancel.add(tid)
    if d is not None:
        delay[tid] = int(d)
    if stu and stu[0].get('stopId'):
        nxt[tid] = stu[0]['stopId']

running = []
for e in vp.get('entity', []):
    v = e.get('vehicle') or {}
    tid = (v.get('trip') or {}).get('tripId', '')
    if rod(tid) and v.get('position'):
        running.append((tid, v.get('stopId') or ''))

# ---- si Renfe no da posiciones, segunda fuente: Rodalies (salidas de estaciones repartidas por todas las líneas) ----
SRC = 'renfe'
HUBS = ['65400','65405','65411','71105','71201','71207','71210','71211','71303','71400','71401','71500','71600','71700','71801','72208','72209','72305','72400','72503','73100','77102','77110','77301','77306','77310','78400','78408','78500','78503','78600','78700','78800','78805','79009','79100','79103','79106','79200','79302','79314','79315','79400','79600']   # cubren todas las líneas (menos de 50 min entre una y otra)
if not running:
    try:
        PK0 = get('https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json')
        k0 = PK0['days'].index(now.strftime('%Y%m%d'))
        bynum = {str(t[4]): PK0['tids'][i] for i, t in enumerate(PK0['trips']) if t[0] == k0}
    except Exception:
        bynum = {}
    seen = {}
    for sid in HUBS if bynum else []:
        try:
            dd = get('https://serveisgrs.rodalies.gencat.cat/api/departures?lang=es&fullResponse=true&stationId=' + sid)
        except Exception:
            continue
        for x in dd.get('trains') or []:
            seen.setdefault(str(x.get('commercialNumber') or x.get('technicalNumber') or ''), x)
    hhmm = now.strftime('%Y-%m-%dT%H:%M')
    for n, x in seen.items():
        tid = bynum.get(n)
        if not tid:
            continue
        if x.get('trainCancelled'):
            cancel.add(tid); continue
        live = bool(x.get('delay')) or any(re.search(r':\d\d:(?!00)\d\d$', z.get('arrivalDateHour') or '') for z in x.get('stations') or [])
        o, nx = (x.get('originStation') or {}).get('id'), (x.get('nextStation') or {}).get('id')
        if not live or not nx or (o == nx and (x.get('originDateHour') or '') > hhmm):
            continue   # sin dato en directo, o aún no ha salido de su origen
        delay[tid] = int(x.get('delay') or 0) * 60
        running.append((tid, ''))
    if running:
        SRC = 'rodalies'

day = now.strftime('%Y-%m-%d')
H = load('hoy.json')
if not H or H.get('day') != day:
    if H and H.get('snaps'):
        A0 = load('ayer.json')   # el día anterior, antes de sobrescribirlo
        with open(os.path.join(OUT, 'ayer.json'), 'w') as f:
            json.dump(H, f, ensure_ascii=False, separators=(',', ':'))
        # historial de 30 días: retraso típico (mediana) de cada tren (por número) cada día, para «¿suele ir tarde mi tren?»
        HI = load('hist.json') or {'days': []}
        obs = {}
        for sn in H['snaps']:
            for t in sn.get('r', []):
                m = re.match(r'^\d+[A-Z](\d+)', t)
                if m: obs.setdefault(m.group(1), []).append(max(0, sn.get('d', {}).get(t, 0)) / 60)
        tr = {k: round(sorted(v)[len(v) // 2]) for k, v in obs.items()}   # retraso típico del tren ese día (mediana de las fotos)
        cx = sorted({m.group(1) for sn in H['snaps'] for t in sn.get('x', []) for m in [re.match(r'^\d+[A-Z](\d+)', t)] if m})   # trenes cancelados ese día (por número)
        if tr or cx: HI['days'] = [x for x in HI['days'] if x['day'] != H['day']] + [dict({'day': H['day'], 'tr': tr}, **({'cx': cx} if cx else {}))]
        HI['days'] = HI['days'][-30:]
        # resumen de cada día, para siempre (≈1 KB/día): sirve para los resúmenes semanal, mensual y anual
        DI = load('dias.json') or {'note': 'Resumen diario de Rodalies (MonkiSoft): fotos cada 15 min del tiempo real de Renfe; puntual = menos de 3 min de retraso; solo cuentan los trenes con dato de retraso.', 'days': []}
        def resumen(X):
            sn = X.get('snaps') or []; N = sum(x.get('n', 0) for x in sn)
            if not N: return None
            return {'day': X['day'], 'fotos': len(sn), 'n': N, 'ok': sum(x.get('ok', 0) for x in sn), 'd5': sum(x.get('d5', 0) for x in sn),
                    'avg': round(sum(x.get('avg', 0) * x.get('n', 0) for x in sn) / N, 2), 'cx': len(set(t for x in sn for t in x.get('x', []))),
                    'lines': {f: {'n': L['n'], 'ok': L['ok'], 'avg': round(L['sum'] / L['n'] / 60, 2), 'max': round(L['max'] / 60)} for f, L in (X.get('lines') or {}).items() if L.get('n')}}
        for X in (A0, H):   # también el día anterior, si aún no estaba guardado
            r = X and X.get('day') and not any(d['day'] == X['day'] for d in DI['days']) and resumen(X)
            if r: DI['days'].append(r)
        DI['days'].sort(key=lambda d: d['day'])
        with open(os.path.join(OUT, 'dias.json'), 'w') as f:
            json.dump(DI, f, ensure_ascii=False, separators=(',', ':'))
        with open(os.path.join(OUT, 'hist.json'), 'w') as f:
            json.dump(HI, f, ensure_ascii=False, separators=(',', ':'))
    H = {'day': day, 'snaps': [], 'lines': {}, 'st': {}, 'note': 'Foto cada 15 min del tiempo real de Renfe. Solo cuentan los trenes con dato de retraso.'}

H['note'] = 'Foto cada 15 min del tiempo real de Renfe. Solo cuentan los trenes con dato de retraso.'
# solo cuentan los trenes de los que Renfe publica retraso (los demás se apuntan aparte, sin suponer que van en hora)
nd = sum(1 for t, _ in running if t not in delay)
running = [(t, s) for t, s in running if t in delay]
n = len(running)
ds = [max(0, delay[t]) for t, _ in running]
ok = sum(1 for d in ds if d < 180)
snap = {'t': now.strftime('%H:%M'), 'n': n, 'ok': ok, 'd5': sum(1 for d in ds if d >= 300),
        'avg': round(sum(ds) / n / 60, 2) if n else 0, 'cx': len(cancel), 'nd': nd}
# para el modo «repasar el día»: retraso de cada tren en esa foto (segundos) y cancelados
snap['d'] = {t: delay[t] for t, _ in running if delay[t]}
snap['x'] = sorted(cancel)
snap['r'] = sorted(t for t, _ in running)
snap['src'] = SRC   # de dónde salen las posiciones de esta foto   # trenes con posición: sirve para comprobar después si los «sin señal» pasaron
H['snaps'].append(snap)

for (t, sid), d in zip(running, ds):
    m = FAM.search(t)
    f = m.group(1) if m else '?'
    L = H['lines'].setdefault(f, {'n': 0, 'ok': 0, 'sum': 0, 'max': 0})
    L['n'] += 1; L['ok'] += d < 180; L['sum'] += d; L['max'] = max(L['max'], d)
    s = nxt.get(t) or sid
    if s:
        S = H['st'].setdefault(s, {'n': 0, 'sum': 0, 'max': 0, 'd5': 0})
        S['n'] += 1; S['sum'] += d; S['max'] = max(S['max'], d); S['d5'] += d >= 300
# ---- por TRENES del horario (no por fotos): cada tren cuenta una vez, con el mayor retraso que llevó ----
# base = trenes de hoy que ya deberían haber terminado su viaje (hora de llegada al final + 15 min)
try:
    PK = get('https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json')
except Exception:
    PK = None
TR = H.setdefault('tr', {})   # número → [línea, mayor retraso en s, cancelado 0/1]
if not H.get('trb'):   # primera vez hoy con este cálculo: se rellena con las fotos ya tomadas
    for sn in H['snaps']:
        for t in sn.get('r', []):
            m = re.match(r'^\d+[A-Z](\d+)', t); f = FAM.search(t)
            if m: o = TR.setdefault(m.group(1), [f.group(1) if f else '?', 0, 0]); o[1] = max(o[1], max(0, (sn.get('d') or {}).get(t, 0)))
        for t in sn.get('x', []):
            m = re.match(r'^\d+[A-Z](\d+)', t); f = FAM.search(t)
            if m: TR.setdefault(m.group(1), [f.group(1) if f else '?', 0, 0])[2] = 1
    H['trb'] = 1
mnow = now.hour * 60 + now.minute
if PK and day.replace('-', '') in PK.get('days', []):
    k = PK['days'].index(day.replace('-', ''))
    sid = [x[3] for x in PK['stops']]
    trips = {}
    for i, t in enumerate(PK['trips']):
        if t[0] != k: continue
        st, tt = PK['pats'][t[1]][0], PK['pats'][t[1]][1]
        trips[PK['tids'][i]] = (str(t[4]), PK['routes'][t[2]][0], t[3] + tt[1], t[3] + tt[-2], sid[st[0]])
    for t, s0 in [(t, s) for t, s in running]:
        if t not in trips: continue
        num, fam, dep, end, org = trips[t]
        d = max(0, delay.get(t, 0))
        if s0 == org and mnow > dep: d = max(d, (mnow - dep) * 60)   # parado en su origen pasada su hora: el retraso real, no el 0 de Renfe
        o = TR.setdefault(num, [fam, 0, 0]); o[1] = max(o[1], d)
    for t in cancel:
        if t in trips: o = TR.setdefault(trips[t][0], [trips[t][1], 0, 0]); o[2] = 1
    R = {}
    for t, (num, fam, dep, end, org) in trips.items():
        if end + 15 > mnow: continue   # aún no ha terminado su viaje
        r = R.setdefault(fam, {'prev': 0, 'ok': 0, 'late': 0, 'd5': 0, 'nv': 0, 'cx': 0}); r['prev'] += 1
        o = TR.get(num)
        if o and o[2]: r['cx'] += 1
        elif not o: r['nv'] += 1   # Renfe no lo vio circular en ninguna foto
        elif o[1] < 180: r['ok'] += 1
        else: r['late'] += 1; r['d5'] += o[1] >= 300
    H['res'] = R
    H['note2'] = 'res: trenes del horario que ya debían haber terminado; ok = siempre menos de 3 min; late = 3 min o más alguna vez; nv = nunca visto circular; cx = cancelado.'
H['upd'] = now.isoformat(timespec='minutes')
with open(os.path.join(OUT, 'hoy.json'), 'w') as f:
    json.dump(H, f, ensure_ascii=False, separators=(',', ':'))
print('ok', snap)

# lo que descarga la app: solo los últimos 30 días del resumen diario (dias.json crece ~1 KB al día); se escribe en cada foto
_DI = load('dias.json')
if _DI and _DI.get('days'):
    with open(os.path.join(OUT, 'dias30.json'), 'w') as f:
        json.dump({'note': _DI.get('note', ''), 'days': _DI['days'][-30:]}, f, ensure_ascii=False, separators=(',', ':'))
