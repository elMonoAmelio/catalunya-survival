import json, math, re, collections, unicodedata
from shapely.geometry import Point, Polygon, MultiPolygon
from shapely.strtree import STRtree
d=json.load(open('surv_data.json')); M=d['munis']
geoms=[MultiPolygon([Polygon(r[0],r[1:]) for r in m['g']]).buffer(0) for m in M]; tree=STRtree(geoms)
x=json.load(open('extra_raw.json'))
def norm(s): return unicodedata.normalize('NFD',s or '').encode('ascii','ignore').decode().lower().strip()
# ---- puntos de acogida
keep=[]
for p in x['pois']:
    t=p['t']; nm=norm(t.get('name'))
    if p['c']=='albergue' and not (t.get('social_facility:for') in ('homeless','underprivileged') or re.search(r'acollida|alberg|acogida',nm)): continue
    pt=Point(p['x'],p['y']); ids=tree.query(pt,predicate='intersects')
    if len(ids): p['m']=int(ids[0])
    else:
        j=int(tree.nearest(pt))
        if geoms[j].distance(pt)<0.03: p['m']=j
        else: continue
    keep.append(p)
# dedupe misma cat + nombre a <300 m o sin nombre <30 m
out=[];grid=collections.defaultdict(list)
for p in keep:
    k=(p['c'],round(p['x']*100),round(p['y']*100)); nm=norm(p['t'].get('name')); dup=False
    for dx in (-1,0,1):
        for dy in (-1,0,1):
            for q in grid[(p['c'],k[1]+dx,k[2]+dy)]:
                dd=math.hypot((p['x']-q['x'])*math.cos(math.radians(p['y'])),p['y']-q['y'])*111320
                if (nm and nm==norm(q['t'].get('name')) and dd<300) or dd<30: dup=True
    if dup: continue
    grid[k].append(p); out.append(p)
print(collections.Counter(p['c'] for p in out))
d['pois']=[p for p in d['pois'] if p['c'] not in ('albergue','encuentro','ayto','civico','pabellon')]+out
# ---- líneas: delta-encoding en enteros 1e-5
def enc(flat):
    q=[round(v*1e5) for v in flat]; o=[q[0],q[1]]
    for i in range(2,len(q),2): o+= [q[i]-q[i-2], q[i+1]-q[i-1]]
    return o
d['rl']=[enc(l['p']) for l in x['lines'] if l['k']=='riera']
d['rc']=[[l['n'],enc(l['p'])] for l in x['lines'] if l['k']=='calle']
json.dump(d,open('surv_data.json','w'),ensure_ascii=False,separators=(',',':'))
import os; print('rl',len(d['rl']),'rc',len(d['rc']),'size MB',round(os.path.getsize('surv_data.json')/1e6,2), 'rl MB', round(len(json.dumps(d['rl'],separators=(',',':')))/1e6,2))
