const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const L of ['ca','en']){const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,locale:L==='ca'?'ca-ES':'en-GB',timezoneId:'Europe/Madrid',geolocation:{latitude:41.5040,longitude:2.3920},permissions:['geolocation']});
const p=await c.newPage();await p.goto('file://'+process.argv[2]+'?rt=http://127.0.0.1:8790');await p.waitForTimeout(5000);
await p.evaluate(()=>document.querySelector('#home [data-ht="home"]')?.click());await p.waitForTimeout(1500);
await p.screenshot({path:`/tmp/ms-work/l_${L}_home.png`});
await p.evaluate(()=>{const a=window.__rod.act().find(a=>a.real&&a.tr)||window.__rod.act().find(a=>a.tr);window.__rod.select(a.tr)});await p.waitForTimeout(1500);
await p.screenshot({path:`/tmp/ms-work/l_${L}_tren.png`});await c.close();}
await b.close();})();
