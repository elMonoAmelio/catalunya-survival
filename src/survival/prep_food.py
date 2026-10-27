import json, math, collections, unicodedata
from shapely.geometry import Point, Polygon, MultiPolygon
from shapely.strtree import STRtree
d=json.load(open('surv_data.json')); M=d['munis']
geoms=[MultiPolygon([Polygon(r[0],r[1:]) for r in m['g']]).buffer(0) for m in M]; tree=STRtree(geoms)
s=json.load(open('food_raw.json'))
def norm(x): return unicodedata.normalize('NFD',x or '').encode('ascii','ignore').decode().lower().strip()
s.sort(key=lambda p:(p['id'][0]!='n', not p['t'].get('name')))  # nodos con nombre primero
out=[];grid=collections.defaultdict(list)
for p in s:
    pt=Point(p['x'],p['y']); ids=tree.query(pt,predicate='intersects')
    if len(ids): p['m']=int(ids[0])
    else:
        j=int(tree.nearest(pt))
        if geoms[j].distance(pt)<0.03: p['m']=j
        else: continue
    nm=norm(p['t'].get('name')); gx,gy=round(p['x']*100),round(p['y']*100); dup=False
    for dx in (-1,0,1):
        for dy in (-1,0,1):
            for q in grid[(p['c'],gx+dx,gy+dy)]:
                dd=math.hypot((p['x']-q['x'])*math.cos(math.radians(p['y'])),p['y']-q['y'])*111320
                if (nm and nm==norm(q['t'].get('name')) and dd<150) or dd<15: dup=True
    if dup: continue
    grid[(p['c'],gx,gy)].append(p); out.append(p)
print(collections.Counter(p['c'] for p in out))
d['pois']=[p for p in d['pois'] if p['c'] not in ('super','tienda','mercado','banco_alim')]+out
json.dump(d,open('surv_data.json','w'),ensure_ascii=False,separators=(',',':'))
