# uso: python3 pub.py "Mensaje de la versión"  -> construye, versiona y publica
import sys, subprocess, re, shutil, html, datetime, zoneinfo, os
REPO='/tmp/ms-repo'; msg=sys.argv[1]
g=lambda *a: subprocess.run(['git','-C',REPO,*a],capture_output=True,text=True,check=True).stdout
g('pull','-q','--rebase','--autostash','origin','main')
n=int(g('rev-list','--count','HEAD').strip()); ver=f'1.{n}'
# Rodalies: misma versión, mismos fuentes en el repo (la tarea diaria de GitHub reconstruye con ellos)
B='/tmp/ms-work/rod/build'
for f in ('bundle.js','template.html','i18n.js'): shutil.copy('/tmp/ms-work/rod/app/'+f, B+'/'+f); shutil.copy(B+'/'+f, REPO+'/rodalies-build/'+f)
for f in ('assemble.py','worker.js') if False else ('assemble.py',): shutil.copy(B+'/'+f, REPO+'/rodalies-build/'+f)
open(B+'/VERSION','w').write(ver); open(REPO+'/rodalies-build/VERSION','w').write(ver)
now=datetime.datetime.now(zoneinfo.ZoneInfo('Europe/Madrid')).strftime('%d/%m/%Y %H:%M')
log=[l.split('\t') for l in g('log','-40','--format=%ad\t%s','--date=format:%d/%m/%Y').splitlines()]
# en «novedades» solo los cambios de verdad: fuera las tareas automáticas (horarios de cada noche, estadísticas)
AUTO=re.compile(r'^(Horarios de Rodalies|Horario de Rodalies|Estadísticas de Rodalies|Acción de horarios|Horarios: publicar|Estadísticas: resumen)')
items=[(f'{ver} · {now[:10]}',msg)]+[(f'1.{n-1-i} · {d}',s) for i,(d,s) in enumerate(log) if not AUTO.match(s)][:8]
import re as _re
clean=lambda m: _re.sub(r'^(v?\d+\.\d+:\s*)?(Rodalies:\s*)?','',m).strip()
ch=''.join(f'<li><b>{html.escape(v.split(" · ")[0])}</b><small>{html.escape(v.split(" · ")[1])}</small><p>{html.escape(clean(s))}</p></li>' for v,s in items)
open('ver.txt','w').write(f'{ver}|{now}|{ch}')
open(B+'/CHANGES.html','w').write(ch); shutil.copy(B+'/CHANGES.html', REPO+'/rodalies-build/CHANGES.html')
subprocess.run(['python3','assemble.py',os.path.abspath('pwa/rodalies.html')],cwd=B,check=True)
shutil.copy('pwa/rodalies.html','/tmp/ms-out/rodalies.html')
subprocess.run(['python3','mk.py'],check=True)
sw=open('pwa/sw.js').read(); sw=re.sub(r"const VERSION = '[^']*'",f"const VERSION = 'cs-{ver}'",sw); open('pwa/sw.js','w').write(sw)
shutil.copy('catalunya-survival.html','pwa/index.html'); shutil.copy('catalunya-survival.html','/tmp/ms-out/catalunya-survival.html')
for f in ('index.html','sw.js','rodalies.html','rodalies.webmanifest'): shutil.copy('pwa/'+f, REPO+'/'+f)
shutil.copy('/tmp/ms-out/catalunya-survival-offline.zip', REPO)
subprocess.run(['python3','sync_src.py'],check=True)   # el código fuente también va al repositorio
if '--dry' in sys.argv: print('dry', ver); sys.exit()
g('add','-A'); g('-c','user.name=MonkiSoft','-c','user.email=elMonoAmelio@users.noreply.github.com','commit','-qm',f'v{ver}: {msg}')
print(g('push','-q','origin','main'), 'publicada', ver, now)
