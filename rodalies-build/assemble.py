import sys,json,os
d=open('data.json',encoding='utf8').read().replace('</','<\\/')
r=open('rod_pack.json',encoding='utf8').read().replace('</','<\\/')
b=open('bundle.js',encoding='utf8').read().replace('</script','<\\/script')
t=open('template.html',encoding='utf8').read()
ver=open('VERSION').read().strip() if os.path.exists('VERSION') else ''
g=json.loads(r.replace('<\\/','</')).get('gen','')
gtxt=f'{g[8:10]}/{g[5:7]} {g[11:16]}' if len(g)>=16 else g
v=(f'v{ver} · ' if ver else '')+f'horarios Renfe del {gtxt}'
chg=open('CHANGES.html',encoding='utf8').read() if os.path.exists('CHANGES.html') else ''
t=t.replace('@@CHANGES@@',chg,1).replace('@@DATA@@',d,1).replace('@@ROD@@',r,1).replace('@@BUNDLE@@',b,1).replace('@@VER@@',v,1)
open(sys.argv[1] if len(sys.argv)>1 else '../rodalies.html','w',encoding='utf8').write(t); print('rodalies.html',len(t),v)
