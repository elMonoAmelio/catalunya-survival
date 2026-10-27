// recorre las pantallas en cada idioma y lista textos que siguen en castellano
const { chromium } = require('playwright');
const ESW=/\b(de la|del|los|las|hacia|según|trenes|retraso|salidas|ahora|hoy|ayer|sin|con|llegas|sale|salió|vía|estación|línea|avisos?|horario|previsión|directo|puntuales?|mapa según|cerca|casa|trabajo|buscar|elegir|tardo|camino|más|menos|todas|cancelado|detenido|parado|averiado|fuente|novedades)\b/i;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const L of (process.env.LS||'en,ca').split(',')){
const c=await b.newContext({viewport:{width:1400,height:1000},locale:L==='ca'?'ca-ES':L==='en'?'en-GB':'es-ES',timezoneId:'Europe/Madrid',geolocation:{latitude:41.5040,longitude:2.3920},permissions:['geolocation']});
const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message.slice(0,150)));
await p.goto('file://'+process.argv[2]+'?rt=http://127.0.0.1:8790');await p.waitForTimeout(5000);
const bad=new Set();const scan=async()=>{(await p.evaluate(()=>{const o=[];const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){const e=n.parentElement;if(!e||/SCRIPT|STYLE|TEXTAREA/.test(e.nodeName))continue;const t=n.nodeValue.trim();if(t&&e.offsetParent!==null)o.push(t)}document.querySelectorAll('[title],[placeholder],[aria-label]').forEach(e=>['title','placeholder','aria-label'].forEach(k=>{const v=e.getAttribute(k);if(v)o.push('@'+v)}));return o})).forEach(t=>{if(ESW.test(t))bad.add(t.slice(0,110))})};
await scan();
for(const s of [()=>document.querySelector('#home [data-ht="home"]')?.click(),()=>{const a=window.__rod.act().find(a=>a.tr);window.__rod.select(a.tr)},()=>document.querySelector('#sbtn').click(),()=>window.__rodPickStation(window.__rod.ST.findIndex(s=>s.n==='Barcelona El Clot')),()=>document.querySelector('#inft')?.click(),()=>document.querySelector('#ver')?.click(),()=>document.querySelector('#mbtn')?.click(),()=>document.querySelector('#alr')?.click(),()=>document.querySelector('#linebtn')?.click()]){await p.evaluate(s).catch(()=>{});await p.waitForTimeout(1800);await scan();}
console.log('==',L,errs);for(const x of bad)console.log('  ',x);await c.close();}
await b.close();})();
