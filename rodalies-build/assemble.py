import sys,json,os
# uso: python assemble.py [salida] [carpeta con bundle.js/template.html/i18n.js/VERSION/CHANGES.html (por defecto, esta)]
S=sys.argv[2] if len(sys.argv)>2 else '.'
P=lambda f: os.path.join(S,f)
d=open('data.json',encoding='utf8').read().replace('</','<\\/')
r=open('rod_pack.json',encoding='utf8').read().replace('</','<\\/')
b=open(P('bundle.js'),encoding='utf8').read().replace('</script','<\\/script')
t=open(P('template.html'),encoding='utf8').read()
ver=open(P('VERSION')).read().strip() if os.path.exists(P('VERSION')) else ''
g=json.loads(r.replace('<\\/','</')).get('gen','')
gtxt=f'{g[8:10]}/{g[5:7]} {g[11:16]}' if len(g)>=16 else g
v=(f'v{ver} · ' if ver else '')+f'horarios Renfe del {gtxt}'
chg=open(P('CHANGES.html'),encoding='utf8').read() if os.path.exists(P('CHANGES.html')) else ''
import os
i18=open(P('i18n.js'),encoding='utf8').read().replace('</','<\\/') if os.path.exists(P('i18n.js')) else ''
t=t.replace('@@I18N@@',i18,1).replace('@@CHANGES@@',chg,1).replace('@@DATA@@',d,1).replace('@@ROD@@',r,1).replace('@@BUNDLE@@',b,1).replace('@@VER@@',v,1)
open(sys.argv[1] if len(sys.argv)>1 else '../rodalies.html','w',encoding='utf8').write(t); print(sys.argv[1] if len(sys.argv)>1 else 'rodalies.html',len(t),v)
