import json,math,re
kx,tx,ky,ty,x0,y1,S=(124.87404143965449, 479.9901289885639, 124.62688710863031, 249.99562739146893, 486.739003764725, 248.0364802782304, 2037.1344308355726)
rad=math.pi/180
l0,p0=3.922*rad,-39.705*rad
def raw(lon,lat):
    lam=lon*rad+l0; phi=lat*rad
    cp,sp=math.cos(p0),math.sin(p0)
    cph=math.cos(phi); x=math.cos(lam)*cph; y=math.sin(lam)*cph; z=math.sin(phi)
    k=z*cp+x*sp
    lam2=math.atan2(y,x*cp-z*sp); phi2=math.asin(k)
    c=math.sqrt(2/(1+math.cos(lam2)*math.cos(phi2)))
    return c*math.cos(phi2)*math.sin(lam2), c*math.sin(phi2)

def P(lon,lat):
    rx,ry=raw(lon,lat); X=tx+kx*rx; Y=ty-ky*ry
    return [round((X-x0)*S,1),round((y1-Y)*S,1)]
d=json.load(open('rod_data.json'));sg=json.load(open('segs.json'))
def dp(pts,eps):
    if len(pts)<3: return pts
    keep=[0,len(pts)-1];st=[(0,len(pts)-1)]
    while st:
        a,c=st.pop();ax,ay=pts[a];bx,by=pts[c];dx,dy=bx-ax,by-ay;L=math.hypot(dx,dy) or 1;mi=-1;md=0
        for i in range(a+1,c):
            dd=abs((pts[i][0]-ax)*dy-(pts[i][1]-ay)*dx)/L
            if dd>md: md=dd;mi=i
        if md>eps: keep.append(mi);st+=[(a,mi),(mi,c)]
    return [pts[i] for i in sorted(keep)]
SEG=[];SI={}
for k,v in sg.items():
    pp=[P(x,y) for x,y in v]
    pp=dp(pp,0.6)   # ~0.6 unidades de 10000 ≈ 30 m
    SI[k]=len(SEG); SEG.append([round(c) for p in pp for c in p])
pats=[]
for sh,stops,times,ds in d['pats']:
    pats.append([stops,times,[SI[f'{a},{b}'] for a,b in zip(stops,stops[1:])]])
# número de tren desde trip_id: 5101J25601R1 -> 25601
trips=[[day,pat,rt,t0,re.sub(r'^\d+[A-Z]','',tid).rstrip('abcdefghijklmnopqrstuvwxyz')] for day,pat,rt,t0,tid in d['trips']]
trips=[[t[0],t[1],t[2],t[3],re.match(r'(\d+)',t[4]).group(1) if re.match(r'(\d+)',t[4]) else t[4]] for t in trips]
out={'days':d['days'],'gen':d['gen'],'routes':d['routes'],
 'stops':[[s[0],*P(s[1],s[2]),s[3]] for s in d['stops']],'segs':SEG,'pats':pats,'trips':trips,
 'tids':[t[4] for t in d['trips']]}
js=json.dumps(out,ensure_ascii=False,separators=(',',':'));open('rod_pack.json','w').write(js);print('MB',round(len(js)/1e6,2),'segs',len(SEG),'pts',sum(len(s) for s in SEG)//2)
print(out['trips'][:3],out['tids'][:3])
