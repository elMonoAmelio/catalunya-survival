import json, zipfile, html, os
d=json.load(open('surv_data.json')); M=d['munis']
CATS={'fuente':('agua','Fuente'),'manantial':('agua','Manantial'),'super':('comida','Supermercado'),'tienda':('comida','Tienda de alimentación'),'mercado':('comida','Mercado municipal'),'banco_alim':('comida','Banco de alimentos o comedor social'),'refugio':('refugio','Refugio guardado'),'refugio_libre':('refugio','Refugio libre'),'abrigo':('refugio','Cabaña o abrigo de montaña'),'cubierta':('refugio','Cubierta urbana (pérgola, porche)'),'pabellon':('refugio','Pabellón o polideportivo municipal'),'civico':('refugio','Centro cívico'),'ayto':('refugio','Ayuntamiento'),'encuentro':('refugio','Punto de encuentro de emergencia'),'albergue':('refugio','Centro de acogida social'),
'hospital':('salud','Hospital'),'cap':('salud','Centro de salud o clínica'),'farmacia':('salud','Farmacia'),'dea':('salud','Desfibrilador (DEA)'),
'policia':('seguridad','Policía'),'bomberos':('seguridad','Bomberos'),'militar':('seguridad','Instalación militar'),
'puerto':('salir','Puerto'),'aeropuerto':('salir','Aeropuerto o helipuerto'),'estacion':('salir','Estación de tren'),'metro':('salir','Estación de metro'),'frontera':('salir','Control fronterizo'),'collado':('salir','Collado o paso de montaña')}
GN={'agua':'Agua','comida':'Comida','refugio':'Refugio','salud':'Salud','seguridad':'Seguridad','salir':'Salir'}
COL={'agua':'ffd16f1f','comida':'ff3b8a2f','refugio':'ff1f61a8','salud':'ff3c2acf','seguridad':'ff8f3f2e','salir':'ff7d6011'}  # aabbggrr
e=lambda s:html.escape(str(s),quote=True)
def desc(p):
    t=p['t']; c=p['c']; L=[CATS[c][1]]
    if p['m']>=0: L.append('Municipio: '+M[p['m']]['n'])
    if c in('fuente','manantial'):
        dw=t.get('drinking_water'); L.append('Marcada NO potable' if dw=='no' else 'Marcada potable (sin verificación oficial)' if dw in('yes','treated') else 'Potabilidad desconocida: hervir o tratar')
    if c=='policia' and t.get('_pol'): L.append('Cuerpo: '+t['_pol'])
    for k,lab in (('operator','Gestiona'),('opening_hours','Horario'),('phone','Teléfono'),('ele','Altitud (m)'),('capacity','Plazas')):
        if t.get(k) and not (k=='operator' and c=='policia'): L.append(f'{lab}: {t[k]}')
    L.append('Fuente: OpenStreetMap '+p['id']+', datos 20/10/2026')
    return '\n'.join(L)
def nm(p): return p['t'].get('name') or (CATS[p['c']][1]+(' · '+M[p['m']]['n'] if p['m']>=0 else ''))
os.makedirs('kml',exist_ok=True)
files=[]
for g in GN:
    ps=[p for p in d['pois'] if CATS[p['c']][0]==g]
    out=[f'<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>Catalunya Survival · {GN[g]}</name><description>Puntos de OpenStreetMap a 20/10/2026. MonkiSoft.</description>',
         f'<Style id="s"><IconStyle><color>{COL[g]}</color></IconStyle></Style>']
    for c in [k for k,v in CATS.items() if v[0]==g]:
        out.append(f'<Folder><name>{e(CATS[c][1])}</name>')
        for p in ps:
            if p['c']!=c: continue
            out.append(f'<Placemark><name>{e(nm(p))}</name><description>{e(desc(p))}</description><styleUrl>#s</styleUrl><Point><coordinates>{p["x"]},{p["y"]}</coordinates></Point></Placemark>')
        out.append('</Folder>')
    out.append('</Document></kml>')
    fn=f'kml/Catalunya-Survival-{GN[g]}.kml'; open(fn,'w',encoding='utf8').write(''.join(out)); files.append(fn)
# GPX
g=['<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="MonkiSoft" xmlns="http://www.topografix.com/GPX/1/1"><metadata><name>Catalunya Survival</name><author><name>MonkiSoft</name></author></metadata>']
for p in d['pois']:
    g.append(f'<wpt lat="{p["y"]}" lon="{p["x"]}"><name>{e(nm(p))}</name><desc>{e(desc(p))}</desc><type>{e(GN[CATS[p["c"]][0]]+" · "+CATS[p["c"]][1])}</type></wpt>')
g.append('</gpx>'); open('kml/Catalunya-Survival-todo.gpx','w',encoding='utf8').write(''.join(g)); files.append('kml/Catalunya-Survival-todo.gpx')
z='/tmp/ms-out/catalunya-survival-offline.zip'
with zipfile.ZipFile(z,'w',zipfile.ZIP_DEFLATED) as zf:
    for f in files: zf.write(f,os.path.basename(f))
print([ (f,os.path.getsize(f)) for f in files], os.path.getsize(z))
