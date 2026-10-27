import json
d=json.load(open('surv_data.json'))
data={'date':'20/10/2026','munis':[{k:m[k] for k in ('n','pr','p','lon','lat','g')} for m in d['munis']],'pois':d['pois'],'rl':d['rl'],'rv':d['rv'],'rc':d['rc']}
js=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
r=lambda p:open(p,encoding='utf8').read()
t=r('template.html')
t=t.replace('@@LEAFLET_CSS@@',r('node_modules/leaflet/dist/leaflet.css')+r('node_modules/leaflet.markercluster/dist/MarkerCluster.css'))
for k,p in [('@@LEAFLET_JS@@','node_modules/leaflet/dist/leaflet.js'),('@@CLUSTER_JS@@','node_modules/leaflet.markercluster/dist/leaflet.markercluster.js'),('@@APP_JS@@','app.js')]:
    t=t.replace(k,r(p).replace('</script','<\\/script'),1)
t=t.replace('@@DATA@@',js,1).replace('@@DATE@@','20/10/2026')
import base64
t=t.replace('@@HAB_B64@@',base64.b64encode(open('/tmp/ms-out/habitantes.html','rb').read()).decode(),1)
import os
v=open('ver.txt').read().split('|',2) if os.path.exists('ver.txt') else ['dev','','']
t=t.replace('@@VER@@',v[0]).replace('@@VERDATE@@',v[1]).replace('@@CHANGES@@',v[2])
open('catalunya-survival.html','w',encoding='utf8').write(t); print(len(t))
