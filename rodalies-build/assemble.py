import sys
d=open('data.json',encoding='utf8').read().replace('</','<\\/')
r=open('rod_pack.json',encoding='utf8').read().replace('</','<\\/')
b=open('bundle.js',encoding='utf8').read().replace('</script','<\\/script')
t=open('template.html',encoding='utf8').read()
t=t.replace('@@DATA@@',d,1).replace('@@ROD@@',r,1).replace('@@BUNDLE@@',b,1)
open(sys.argv[1] if len(sys.argv)>1 else '../rodalies.html','w',encoding='utf8').write(t); print('rodalies.html',len(t))
