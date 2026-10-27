import json, re, collections
W=json.load(open('ways_all.json'))
RX=re.compile(r'^(riera|rierol|torrent|rambla|barranc|riu sec|torrente|barranco)\b',re.I)
OKW={'stream','river','drain','wadi'}
seed=lambda w: w['wt'] in ('stream','river','canal','ditch','drain','wadi') and (RX.match(w['n']) or (w['wt']=='stream' and w['int']=='yes' and w['n']))
node2=collections.defaultdict(list)
for i,w in enumerate(W):
    if w['wt']: 
        for r in w['refs']: node2[r].append(i)
inc=set(i for i,w in enumerate(W) if w['wt'] and seed(w))
print('seeds',len(inc))
front=list(inc)
while front:
    nf=[]
    for i in front:
        for r in W[i]['refs']:
            for j in node2[r]:
                if j in inc: continue
                w=W[j]
                if w['wt'] in OKW and (not w['n'] or w['tun'] or RX.match(w['n'])):
                    inc.add(j); nf.append(j)
    front=nf
print('with connected',len(inc))
calles=[w for w in W if not w['wt'] and w['hw']]
print('calles',len(calles))
box=lambda w:any(2.36<x<2.42 and 41.49<y<41.53 for x,y in w['p'])
vb=[W[i] for i in inc if box(W[i])]
print('Vilassar rieras ways',len(vb),'tunnel',sum(1 for w in vb if w['tun']),'unnamed',sum(1 for w in vb if not w['n']))
print('Vilassar calles',sorted({w['n'] for w in calles if box(w)}))
json.dump({'inc':sorted(inc)},open('net_inc.json','w'))
