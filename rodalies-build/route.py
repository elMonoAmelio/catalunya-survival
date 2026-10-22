import json,math,gzip,numpy as np,collections
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra
from scipy.spatial import cKDTree
d=json.load(open('rod_data.json')); g=json.load(gzip.open('rail_raw.json.gz','rt'))
ids=list(g['nodes']); IX={k:i for i,k in enumerate(ids)}; XY=np.array([g['nodes'][k] for k in ids])
kx=111320*math.cos(math.radians(41.5)); ky=110540
M=XY*[kx,ky]
r=[];c=[];w=[]
for svc,ns in g['ways']:
    f=1.0 if not svc else (2.0 if svc in ('construction','disused') else 3.0 if svc in ('siding','crossover') else 6.0)
    for a,b in zip(ns,ns[1:]):
        i,j=IX[str(a)],IX[str(b)];L=float(np.hypot(*(M[i]-M[j])))*f
        r+=[i,j];c+=[j,i];w+=[L,L]
G=csr_matrix((w,(r,c)),shape=(len(ids),len(ids)))
tree=cKDTree(M)
stM=np.array([[s[1]*kx,s[2]*ky] for s in d['stops']])
# varios candidatos por estación (vías paralelas)
cand={}
for si,p in enumerate(stM):
    dd,ii=tree.query(p,k=60); cand[si]=[(float(a),int(b)) for a,b in zip(dd,ii) if a<500]
    # quedarse con candidatos en vías distintas: muestreo cada 4
    cand[si]=cand[si][::4][:12]
pairs=set()
for p in d['pats']:
    s=p[1]
    for a,b in zip(s,s[1:]): pairs.add((a,b))
print('pares',len(pairs),'estaciones sin vía cerca',[d['stops'][i][0] for i,c in cand.items() if not c])
src=sorted({n for a,b in pairs for _,n in cand[a]})
dist,pred=dijkstra(G,indices=src,return_predecessors=True)
SRC={n:i for i,n in enumerate(src)}
seg={};fb=0
for a,b in pairs:
    best=None
    for da,na in cand[a]:
        for db,nb in cand[b]:
            v=dist[SRC[na],nb]+da+db
            if best is None or v<best[0]: best=(v,na,nb)
    straight=float(np.hypot(*(stM[a]-stM[b])))
    if best is None or not np.isfinite(best[0]) or best[0]>straight*2.2+3000:
        seg[(a,b)]=[[d['stops'][a][1],d['stops'][a][2]],[d['stops'][b][1],d['stops'][b][2]]];fb+=1;continue
    _,na,nb=best;path=[nb];row=SRC[na];x=nb
    while x!=na:
        x=pred[row,x]
        if x<0: break
        path.append(x)
    path=path[::-1]
    pts=[[d['stops'][a][1],d['stops'][a][2]]]+[[float(XY[i][0]),float(XY[i][1])] for i in path]+[[d['stops'][b][1],d['stops'][b][2]]]
    seg[(a,b)]=pts
print('tramos en línea recta (sin vía OSM)',fb)
json.dump({f'{a},{b}':v for (a,b),v in seg.items()},open('segs.json','w'))
# --- respaldo: tramo de las trazas oficiales de Renfe cuando OSM no conecta
SH=[np.array(p) for k,p in d['shapes']]
def proj(a,p):
    A=a[:-1,:2]*[kx,ky];B=a[1:,:2]*[kx,ky];D=B-A;L2=(D**2).sum(1)+1e-9;P=np.array(p)*[kx,ky]-A
    t=np.clip((P*D).sum(1)/L2,0,1);dd=((P-t[:,None]*D)**2).sum(1);i=int(dd.argmin());return float(np.sqrt(dd[i])),i,float(t[i])
fix=0
for (a,b),v in list(seg.items()):
    if len(v)!=2: continue
    pa=[d['stops'][a][1],d['stops'][a][2]];pb=[d['stops'][b][1],d['stops'][b][2]];best=None
    for sh in SH:
        ea,ia,ta=proj(sh,pa);eb,ib,tb=proj(sh,pb)
        if ea<200 and eb<200 and (ib,tb)>(ia,ta):
            L=sh[ib,2]-sh[ia,2]
            if best is None or ea+eb<best[0]: best=(ea+eb,[pa]+[[float(x),float(y)] for x,y,_ in sh[ia+1:ib+1]]+[pb])
    if best: seg[(a,b)]=best[1];fix+=1
print('corregidos con trazas Renfe',fix)
json.dump({f'{a},{b}':v for (a,b),v in seg.items()},open('segs.json','w'))
