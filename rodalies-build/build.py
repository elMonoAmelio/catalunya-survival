import csv,collections,datetime,json,math,sys
G='gtfs/'
def rd(f):
    for r in csv.DictReader(open(G+f,encoding='utf-8-sig')): yield {k.strip():(v or '').strip() for k,v in r.items()}
R={r['route_id']:r for r in rd('routes.txt') if r['route_id'].startswith('51')}
C={r['service_id']:r for r in rd('calendar.txt')}
trips={t['trip_id']:t for t in rd('trips.txt') if t['route_id'] in R}
d0=datetime.date.fromisoformat(sys.argv[1]); ND=int(sys.argv[2])
days=[];act={}
WD=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
for k in range(ND):
    d=d0+datetime.timedelta(k); ds=d.strftime('%Y%m%d')
    s={sid for sid,c in C.items() if c['start_date']<=ds<=c['end_date'] and c[WD[d.weekday()]]=='1'}
    days.append(ds); 
    for sid in s: act.setdefault(sid,[]).append(k)
keep={tid:t for tid,t in trips.items() if t['service_id'] in act}
print('trips en ventana',len(keep))
ST=collections.defaultdict(list); sec_nonzero=0
def ts(x):
    h,m,s=map(int,x.split(':')); return h*3600+m*60+s
with open(G+'stop_times.txt',encoding='utf-8-sig') as f:
    rr=csv.reader(f); hdr=[h.strip() for h in next(rr)]; I={h:i for i,h in enumerate(hdr)}
    for row in rr:
        tid=row[I['trip_id']].strip()
        if tid in keep:
            a,dp=ts(row[I['arrival_time']].strip()),ts(row[I['departure_time']].strip())
            if a%60 or dp%60: sec_nonzero+=1
            ST[tid].append((int(row[I['stop_sequence']]),row[I['stop_id']].strip(),a,dp))
print('stop_times',sum(len(v) for v in ST.values()),'con segundos',sec_nonzero)
stops={s['stop_id']:s for s in rd('stops.txt')}
used=sorted({s for v in ST.values() for _,s,_,_ in v})
SI={s:i for i,s in enumerate(used)}
# shapes
shp=collections.defaultdict(list)
need={t['shape_id'] for t in keep.values()}
for r in rd('shapes.txt'):
    if r['shape_id'] in need: shp[r['shape_id']].append((int(r['shape_pt_sequence']),float(r['shape_pt_lon']),float(r['shape_pt_lat'])))
for k in shp: shp[k]=[(x,y) for _,x,y in sorted(shp[k])]
print('shapes',len(shp),{k:len(v) for k,v in shp.items()})
def dist(a,b):
    kx=111320*math.cos(math.radians(41.5)); return math.hypot((a[0]-b[0])*kx,(a[1]-b[1])*110540)
cum={}
for k,pts in shp.items():
    c=[0.0]
    for i in range(1,len(pts)): c.append(c[-1]+dist(pts[i-1],pts[i]))
    cum[k]=c
def proj(k,p,start):
    pts=shp[k];c=cum[k];kx=111320*math.cos(math.radians(41.5));best=(1e18,0)
    for i in range(len(pts)-1):
        if c[i+1]<start-50: continue
        ax,ay=pts[i];bx,by=pts[i+1];dx=(bx-ax)*kx;dy=(by-ay)*110540;L2=dx*dx+dy*dy
        px=(p[0]-ax)*kx;py=(p[1]-ay)*110540;t=0 if L2==0 else max(0,min(1,(px*dx+py*dy)/L2))
        d2=(px-t*dx)**2+(py-t*dy)**2
        if d2<best[0]: best=(d2,c[i]+t*(c[i+1]-c[i]))
    return best[1],math.sqrt(best[0])
# patterns
pat={};P=[];TR=[];off=0;bad=0
routes=sorted(R); RI={r:i for i,r in enumerate(routes)}
shk=sorted(shp); SHI={k:i for i,k in enumerate(shk)}
for tid,t in keep.items():
    v=sorted(ST[tid])
    if len(v)<2: continue
    t0=v[0][3]
    key=(t['shape_id'],tuple(s for _,s,_,_ in v),tuple((a-t0,d-t0) for _,_,a,d in v))
    if key not in pat:
        ds=[];pos=0;mx=0
        for _,s,_,_ in v:
            st=stops[s];d,e=proj(t['shape_id'],(float(st['stop_lon']),float(st['stop_lat'])),pos);pos=max(pos,d);ds.append(round(pos));mx=max(mx,e)
        if mx>800: bad+=1
        pat[key]=len(P); P.append([SHI[t['shape_id']],[SI[s] for s in key[1]],[x//60 for a,d in key[2] for x in (a,d)],ds])
    for k in act[t['service_id']]:
        TR.append([k,pat[key],RI[t['route_id']],t0//60,tid])
print('patrones',len(P),'viajes',len(TR),'patrones con paradas lejos de la traza',bad)
# simplificar shapes (DP ~8 m) y guardar con distancia acumulada
def dp(pts,eps):
    if len(pts)<3: return list(range(len(pts)))
    keep=[0,len(pts)-1];stack=[(0,len(pts)-1)]
    kx=111320*math.cos(math.radians(41.5))
    while stack:
        a,b=stack.pop();ax,ay=pts[a];bx,by=pts[b];dx=(bx-ax)*kx;dy=(by-ay)*110540;L=math.hypot(dx,dy) or 1;mi=-1;md=0
        for i in range(a+1,b):
            px=(pts[i][0]-ax)*kx;py=(pts[i][1]-ay)*110540;dd=abs(px*dy-py*dx)/L
            if dd>md: md=dd;mi=i
        if md>eps: keep.append(mi);stack+=[(a,mi),(mi,b)]
    return sorted(keep)
SH=[]
for k in shk:
    pts=shp[k];idx=dp(pts,6)
    SH.append([k,[[round(pts[i][0],5),round(pts[i][1],5),round(cum[k][i])] for i in idx]])
out={'days':days,'gen':datetime.datetime.now().isoformat(timespec='minutes'),
 'routes':[[R[r]['route_short_name'],R[r]['route_long_name'].replace('  ',' ').strip(),'#'+(R[r]['route_color'] or '888888')] for r in routes],
 'stops':[[stops[s]['stop_name'],round(float(stops[s]['stop_lon']),5),round(float(stops[s]['stop_lat']),5),s] for s in used],
 'shapes':SH,'pats':P,'trips':TR}
js=json.dumps(out,ensure_ascii=False,separators=(',',':'))
open('rod_data.json','w').write(js); print('MB',round(len(js)/1e6,2))
