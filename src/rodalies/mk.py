import subprocess
import os
I = 'i18n' if os.path.isdir('i18n') else '../i18n'
subprocess.run(['python3',I+'/dict.py'],check=True)
subprocess.run(['node',I+'/build.js','.'],check=True)
subprocess.run(['npx','esbuild','app.i18n.js','--bundle','--minify','--format=iife','--outfile=bundle.js'],check=True)
d=open('data.json',encoding='utf8').read().replace('</','<\\/')
r=open('rod_pack.json',encoding='utf8').read().replace('</','<\\/')
b=open('bundle.js',encoding='utf8').read().replace('</script','<\\/script')
t=open('template.html',encoding='utf8').read()
t=t.replace('@@I18N@@',open('i18n.js',encoding='utf8').read().replace('</','<\\/'),1).replace('@@DATA@@',d,1).replace('@@ROD@@',r,1).replace('@@BUNDLE@@',b,1).replace('@@VER@@','versión de prueba',1).replace('@@CHANGES@@','<li><b>prueba</b> sin novedades</li>',1)
open('rodalies.html','w',encoding='utf8').write(t); print(len(t))
