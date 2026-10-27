const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await (await b.newContext({timezoneId:'Europe/Madrid'})).newPage();
p.on('pageerror',e=>console.log('PE',e.message));
await p.goto('file://'+process.argv[2]);await p.waitForFunction(()=>window.__ready);
console.log(await p.evaluate(()=>[[41.3874,2.1686],[42.70,0.79]].map(([a,o])=>{const s=__cs.sunTimes(a,o,new Date('2026-10-21T10:00:00Z'));return s.rise.toLocaleTimeString('es-ES',{timeZone:'Europe/Madrid'})+' '+s.set.toLocaleTimeString('es-ES',{timeZone:'Europe/Madrid'})})));await b.close();})();
