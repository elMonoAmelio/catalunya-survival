# MonkiSoft · copia el código fuente de Rodalies y de Catalunya Survival al repositorio (carpeta src/)
import shutil, os, glob
S = '/tmp/ms-work'
REPO = '/tmp/ms-repo'
def cp(a, b):
    os.makedirs(os.path.dirname(b), exist_ok=True); shutil.copy2(a, b)
R, D = S + '/rod/app', REPO + '/src/rodalies'
for f in ('rail.js', 'app.js', 'template.html', 'mk.py', 'package.json', 'data.json', 'rod_pack.json', 'worker.js'):
    cp(f'{R}/{f}', f'{D}/{f}')
for f in ('t1.py', 't2.py', 'dict.py', 'build.js', 'extract.js', 'src_v1.json', 'html.json'):
    cp(f'{S}/rod/i18n/{f}', f'{D}/i18n/{f}')
for f in ('t50.js', 't84.js', 't85.js', 't86.js', 't88.js', 't89.js', 't90.js', 't91.js', 'swipe.js'):
    if os.path.exists(f'{R}/{f}'): cp(f'{R}/{f}', f'{D}/tests/{f}')
for m in ('mock', 'realmock', 'outmock'):
    for p in glob.glob(f'{R}/{m}/*'):
        if os.path.isfile(p): cp(p, f'{D}/tests/{m}/{os.path.basename(p)}')
V, E = S + '/surv', REPO + '/src/survival'
for f in ('app.js', 'template.html', 'mk.py', 'pub.py', 'sync_src.py', 'guia.html', 'package.json', 'surv_data.json', 'full2.js', 'kml.py', 'net.py', 'net2.py', 'prep.py', 'prep_extra.py', 'prep_food.py', 'prep_st.py', 'ext_cat.py', 'sun.js'):
    if os.path.exists(f'{V}/{f}'): cp(f'{V}/{f}', f'{E}/{f}')
if os.path.exists('/tmp/ms-out/habitantes.html'): cp('/tmp/ms-out/habitantes.html', f'{E}/habitantes.html')
# rutas de trabajo neutras en la copia del repositorio
for root, _, fs in os.walk(REPO + '/src'):
    for f in fs:
        if f.endswith(('.py', '.js', '.json', '.html', '.md')):
            q = os.path.join(root, f); s = open(q, encoding='utf8').read()
            n = s.replace(S, '/tmp/ms-work').replace(REPO, '/tmp/ms-repo').replace('/tmp/ms-out', '/tmp/ms-out')
            if n != s: open(q, 'w', encoding='utf8').write(n)
for pk in (D + '/package.json', E + '/package.json'):
    import json; j = json.load(open(pk)); j['author'] = 'MonkiSoft'; j['license'] = 'UNLICENSED'; json.dump(j, open(pk, 'w'), indent=2)
print('fuentes copiadas a', REPO + '/src')
