import json, re, collections
W=json.load(open('ways_all.json'))
RX=re.compile(r'^(riera|rierol|torrent|rambla|barranc|riu sec|torrente|barranco)\b',re.I)
ST=re.compile(r"^((la|el)\s+)?(riera|rierot|torrent)\b|^(carrer|passeig|camí|cami|avinguda|via|ronda|baixada|pujada|travessera)\s+(de\s+la\s+|del\s+|de\s+l'|d'|de\s+)?(la\s+)?(riera|rierot|torrent)\b",re.I)
OKW={'stream','river','drain','wadi'}
def seed(w): return w['wt']=='river' or (w['wt'] in ('stream','canal','ditch','drain','wadi') and (RX.match(w['n']) or (w['wt']=='stream' and w['int']=='yes' and w['n'])))
node2=collections.defaultdict(list)
for i,w in enumerate(W):
    if w['wt']:
        for r in w['refs']: node2[r].append(i)
inc=set(i for i,w in enumerate(W) if w['wt'] and seed(w))
front=[i for i in inc if W[i]['wt']!='river']; depth=0
while front and depth<4:
    depth+=1
    nf=[]
    for i in front:
        for r in W[i]['refs']:
            for j in node2[r]:
                if j in inc: continue
                w=W[j]
                if w['wt'] in OKW and w['wt']!='river' and (not w['n'] or w['tun'] or RX.match(w['n'])):
                    inc.add(j); nf.append(j)
    front=nf
def simp(pts,tol=0.00012):
    if len(pts)<3: return pts
    keep=[0]; 
    def dp(a,b):
        (x1,y1),(x2,y2)=pts[a],pts[b]; dx,dy=x2-x1,y2-y1; L=dx*dx+dy*dy; mi,md=a,0
        for i in range(a+1,b):
            x,y=pts[i]; t=((x-x1)*dx+(y-y1)*dy)/L if L else 0; t=max(0,min(1,t)); d=(x-(x1+t*dx))**2+(y-(y1+t*dy))**2
            if d>md: md,mi=d,i
        if md>tol*tol: dp(a,mi); keep.append(mi); dp(mi,b)
    dp(0,len(pts)-1); keep.append(len(pts)-1); return [pts[i] for i in sorted(set(keep))]
def enc(pts):
    q=[(round(x*1e5),round(y*1e5)) for x,y in pts]; o=[q[0][0],q[0][1]]
    for i in range(1,len(q)): o+=[q[i][0]-q[i-1][0],q[i][1]-q[i-1][1]]
    return o
rl=[];rv=[];tun=0
for i in inc:
    w=W[i]; e=enc(simp(w['p']))
    (rv if w['wt']=='river' else rl).append(e)
rc=[[w['n'],enc(simp(w['p']))] for w in W if not w['wt'] and w['hw'] and ST.match(w['n'])]
d=json.load(open('surv_data.json')); d['rl']=rl; d['rv']=rv; d['rc']=rc
json.dump(d,open('surv_data.json','w'),ensure_ascii=False,separators=(',',':'))
S=lambda o:round(len(json.dumps(o,separators=(',',':')))/1e6,2)
print('rieras',len(rl),S(rl),'MB · rios',len(rv),S(rv),'MB · calles',len(rc),S(rc),'MB')
box=lambda p: True
print('calles Vilassar', sorted({n for n,a in rc if 236000<a[0]<242000 and 4149000<a[1]<4153000}))
