# Estadísticas de Rodalies (MonkiSoft): cada 15 min se toma una foto del tiempo real de Renfe
# y se acumula en hoy.json (por línea, por estación y a lo largo del día). Al cambiar de día, hoy.json pasa a ayer.json.
import json, os, re, sys, datetime, zoneinfo, urllib.request

OUT = sys.argv[1] if len(sys.argv) > 1 else '.'
TZ = zoneinfo.ZoneInfo('Europe/Madrid')
now = datetime.datetime.now(TZ)
FAM = re.compile(r'(R\d{1,2}[A-Za-z]?|RG1|RL\d|RT\d)$')


def get(u):
    req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def load(name):
    try:
        with open(os.path.join(OUT, name)) as f:
            return json.load(f)
    except Exception:
        return None


tu = get('https://gtfsrt.renfe.com/trip_updates.json')
vp = get('https://gtfsrt.renfe.com/vehicle_positions.json')
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
        if tr: HI['days'] = [x for x in HI['days'] if x['day'] != H['day']] + [{'day': H['day'], 'tr': tr}]
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
snap['r'] = sorted(t for t, _ in running)   # trenes con posición: sirve para comprobar después si los «sin señal» pasaron
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
H['upd'] = now.isoformat(timespec='minutes')
with open(os.path.join(OUT, 'hoy.json'), 'w') as f:
    json.dump(H, f, ensure_ascii=False, separators=(',', ':'))
print('ok', snap)
