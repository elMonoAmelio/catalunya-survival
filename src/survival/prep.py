import json, math, re, numpy as np, unicodedata, collections
from shapely.geometry import Polygon, MultiPolygon, Point
from shapely.strtree import STRtree
# ---- recalibrar proyección (igual que antes) ----
b=json.load(open('/mnt/user-data/uploads/Downloads/basemap-cat.json')); t=b['content']; arcs=t['arcs']
x0,y0,x1,y1=t['bbox']; S=10000/(x1-x0)
rad=math.pi/180; l0,p0=3.922*rad,-39.705*rad; cp,sp=math.cos(p0),math.sin(p0)
def fwd(lon,lat):
    lam=lon*rad+l0; phi=lat*rad; cph=math.cos(phi); x=math.cos(lam)*cph; y=math.sin(lam)*cph; z=math.sin(phi)
    k=z*cp+x*sp; lam2=math.atan2(y,x*cp-z*sp); phi2=math.asin(max(-1,min(1,k)))
    c=math.sqrt(2/(1+math.cos(lam2)*math.cos(phi2))); return c*math.cos(phi2)*math.sin(lam2), c*math.sin(phi2)
def inv(px,py):
    z=math.hypot(px,py); c=2*math.asin(min(1,z/2)); sc,cc=math.sin(c),math.cos(c)
    lam=math.atan2(px*sc, z*cc) if z else 0; phi=math.asin(py*sc/z) if z else 0
    cph=math.cos(phi); x=math.cos(lam)*cph; y=math.sin(lam)*cph; zz=math.sin(phi)
    k=zz  # gamma=0
    lam1=math.atan2(y, x*cp + k*sp); phi1=math.asin(max(-1,min(1,k*cp - x*sp)))
    return (lam1-l0)/rad, phi1/rad
def arc(i): a=arcs[i if i>=0 else ~i]; return a if i>=0 else a[::-1]
def ring(idx):
    pts=[]
    for k,i in enumerate(idx): a=arc(i); pts.extend(a if k==0 else a[1:])
    return [(p[0],p[1]) for p in pts]
def ac(pts):
    A=cx=cy=0
    for (a,b_),(c,d) in zip(pts,pts[1:]+pts[:1]): q=a*d-c*b_; A+=q; cx+=(a+c)*q; cy+=(b_+d)*q
    A/=2; return A,cx/(6*A),cy/(6*A)
P=[];Q=[]
G=t['objects']['regions']['geometries']
for g in G:
    polys=[g['arcs']] if g['type']=='Polygon' else g['arcs']
    best=max(polys,key=lambda pl:abs(ac(ring(pl[0]))[0])); A,cx,cy=ac(ring(best[0]))
    P.append(fwd(g['properties']['cx'],g['properties']['cy'])); Q.append((cx,cy))
P=np.array(P);Q=np.array(Q)
kx,tx=np.linalg.lstsq(np.column_stack([P[:,0],np.ones(len(P))]),Q[:,0],rcond=None)[0]
ky,ty=np.linalg.lstsq(np.column_stack([-P[:,1],np.ones(len(P))]),Q[:,1],rcond=None)[0]
def toll(x,y): return inv((x-tx)/kx,(ty-y)/ky)
# check
err=max(math.hypot(*(np.array(toll(*Q[i]))-np.array([G[i]['properties']['cx'],G[i]['properties']['cy']]))) for i in range(0,len(G),37))
errs=sorted(math.hypot(*(np.array(toll(*Q[i]))-np.array([G[i]['properties']['cx'],G[i]['properties']['cy']]))) for i in range(len(G)))
print('inverse err median/p95 deg',round(errs[len(errs)//2],5),round(errs[int(len(errs)*.95)],5))
# ---- municipios lon/lat ----
d=json.load(open('/tmp/ms-work/m3d/data.json'))
PROV={'08':'Barcelona','17':'Girona','25':'Lleida','43':'Tarragona'}
munis=[];geoms=[]
for m in d['m']:
    polys=[]
    for poly in m['g']:
        rings=[]
        for flat in poly:
            pts=[toll(flat[i]/S+x0, y1-flat[i+1]/S) for i in range(0,len(flat),2)]
            rings.append([(round(a,4),round(b_,4)) for a,b_ in pts])
        polys.append(rings)
    shp=MultiPolygon([Polygon(r[0],r[1:]) for r in polys]).buffer(0)
    munis.append({'n':m['n'],'pr':m['pr'],'p':m['p'],'a':m['a'],'lon':m['lon'],'lat':m['lat'],'g':polys}); geoms.append(shp)
tree=STRtree(geoms)
cat_union=None
# ---- POIs ----
raw=json.load(open('pois_raw.json'))
def norm(s): return unicodedata.normalize('NFD',s or '').encode('ascii','ignore').decode().lower().strip()
def pol(t):
    s=norm(t.get('operator','')+' '+t.get('name','')+' '+t.get('police',''))
    if 'mossos' in s: return "Mossos d'Esquadra"
    if 'guardia civil' in s or 'guardia civil' in s: return 'Guardia Civil'
    if 'nacional' in s or 'cnp' in s: return 'Policía Nacional'
    if 'local' in s or 'municipal' in s or 'urbana' in s: return 'Policía Local'
    return 'Policía'
out=[];dropped=collections.Counter()
BORDER_OK={'frontera','collado','refugio','refugio_libre','abrigo'}
for o in raw:
    pt=Point(o['x'],o['y']); idx=tree.query(pt,predicate='intersects')
    mi=int(idx[0]) if len(idx) else None
    if mi is None:
        j=int(tree.nearest(pt)); dd=geoms[j].distance(pt)
        lim=0.06 if o['c'] in ('puerto',) else 0.03
        if dd<lim: mi=j
        elif o['c'] in BORDER_OK and dd<0.05: mi=-1
        if mi is None: dropped[o['c']]+=1; continue
    t=o['t']; c=o['c']
    if c=='policia': t['_pol']=pol(t)
    if c in ('fuente','manantial'):
        dw=t.get('drinking_water')
        if c=='manantial' and dw not in ('yes','treated'): pass
    o['m']=mi; out.append(o)
print('dropped outside',dropped)
# ---- deduplicar (misma cat + mismo nombre a <300 m, o sin nombre a <40 m) ----
def dist(a,b): return math.hypot((a['x']-b['x'])*math.cos(math.radians(a['y'])),a['y']-b['y'])*111320
grid=collections.defaultdict(list); keep=[]; dup=collections.Counter()
for o in sorted(out,key=lambda o:(o['id'][0]!='n')):  # prefer nodes? prefer areas with names -> keep first seen
    gk=(o['c'],round(o['x']*100),round(o['y']*100)); nm=norm(o['t'].get('name'))
    found=False
    for dx in (-1,0,1):
        for dy in (-1,0,1):
            for q in grid[(o['c'],gk[1]+dx,gk[2]+dy)]:
                qn=norm(q['t'].get('name')); dd=dist(o,q)
                if (nm and nm==qn and dd<300) or (dd<25 and (not nm or not qn)):
                    found=True; break
            if found: break
        if found: break
    if found: dup[o['c']]+=1; continue
    grid[gk].append(o); keep.append(o)
print('dups removed',dup)
print(collections.Counter(o['c'] for o in keep),len(keep))
json.dump({'munis':munis,'pois':keep},open('surv_data.json','w'),ensure_ascii=False,separators=(',',':'))
import os; print(os.path.getsize('surv_data.json'))
