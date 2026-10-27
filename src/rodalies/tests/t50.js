const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const res=[];
for (const mode of (process.argv[3]||'live,horario,sim300,noche').split(',')){
const c=await b.newContext({viewport:{width:1400,height:900},timezoneId:'Europe/Madrid',geolocation:{latitude:41.5040,longitude:2.3920},permissions:['geolocation']});
if(mode==='noche'){}
const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message.slice(0,120)));p.on('console',m=>{if(m.type()==='error'&&!/404|Failed to load/.test(m.text()))errs.push('CE '+m.text().slice(0,120))});
if(mode==='noche') await p.clock.install({time:new Date('2026-10-23T23:50:00+02:00')});
await p.goto('file://'+process.argv[2]+(mode==='live'?'?rt=http://127.0.0.1:'+(process.env.P||8790)+'':''));
if(mode==='noche'){await p.clock.runFor(5000);} else await p.waitForTimeout(4000);
if(mode==='sim300') await p.evaluate(()=>window.__rod.setSpeed(300));
const step=async ms=>mode==='noche'?p.clock.runFor(ms):p.waitForTimeout(ms);
// abrir cosas
await p.evaluate(()=>{const a=window.__rod.act().find(a=>a.tr);a&&window.__rod.select(a.tr)});await step(1500);
await p.evaluate(()=>document.querySelector('#home [data-ht="home"]')?.click());await step(1000);
await p.evaluate(()=>document.querySelector('#sbtn').click());await step(1500);
await p.evaluate(()=>document.querySelector('#ver').click());await step(800);
await p.evaluate(()=>document.querySelector('#mbtn').click());await step(800);
await p.evaluate(()=>window.__rodPickStation(window.__rod.ST.findIndex(s=>s.n==='Barcelona-Sants')));await step(2000);
await step(8000);
const info=await p.evaluate(()=>({trenes:window.__rod.act().length,home:document.querySelector('#home').innerText.split('\n').slice(0,4).join(' · '),card:document.querySelector('#mcs').innerText.split('\n').slice(0,3).join(' · ')}));
res.push([mode,info,errs.slice(0,5)]);await c.close();}
console.log(JSON.stringify(res,null,1));await b.close();})();
