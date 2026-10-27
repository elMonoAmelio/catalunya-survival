const { chromium } = require('playwright');
const FILE='file://'+process.argv[2];
const log=(...a)=>console.log(...a);
async function run(b,name,opts,fn){
  const ctx=await b.newContext(opts); const p=await ctx.newPage(); const errs=[];
  p.on('pageerror',e=>errs.push('PE '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/ERR_|Failed to load resource/.test(m.text()))errs.push('CE '+m.text().slice(0,120))});
  if(opts.__init) await ctx.addInitScript(opts.__init);
  try{ await fn(p,ctx); }catch(e){ errs.push('TEST '+e.message.split('\n')[0]+' @'+globalThis.STEP); }
  const hs=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth).catch(()=>null);
  log(name, errs.length?errs:'OK', 'hscroll:',hs); await ctx.close();
}
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const mob={viewport:{width:375,height:740},isMobile:true,hasTouch:true,deviceScaleFactor:2};
 // 1 recorrido completo móvil con GPS
 globalThis.STEP='';
 await run(b,'1-movil-gps',{...mob,geolocation:{latitude:41.3874,longitude:2.1686},permissions:['geolocation'],timezoneId:'Europe/Madrid'},async p=>{
  await p.goto(FILE);await p.waitForFunction(()=>window.__ready);
  for(const g of ['agua','refugio','salud','seguridad','salir']){if(await p.evaluate(()=>document.querySelector('#menu').hidden)) await (globalThis.STEP='#home',p).click('#home');await (globalThis.STEP=`[data-need="${g}"]`,p).click(`[data-need="${g}"]`);await p.waitForTimeout(700);const n=await p.evaluate(()=>document.querySelectorAll('#nearlist [data-near]').length);if(n<1)throw new Error('near vacio '+g);}
  await (globalThis.STEP='[data-near="0"]',p).click('[data-near="0"]');await p.waitForTimeout(900);
  if(!await p.evaluate(()=>!!document.querySelector('.selring')))throw new Error('sin anillo');
  await p.keyboard.press('Escape'); if(!await p.evaluate(()=>document.querySelector('#sheets').hidden))throw new Error('Esc no cierra');
  await (globalThis.STEP='#lay',p).click('#lay'); await (globalThis.STEP='.gh input[value="agua"]',p).click('.gh input[value="agua"]'); await (globalThis.STEP='.gh input[value="agua"]',p).click('.gh input[value="agua"]'); await (globalThis.STEP='#potf',p).click('#potf'); await (globalThis.STEP='[data-base="orto"]',p).click('[data-base="orto"]'); await (globalThis.STEP='[data-base="none"]',p).click('[data-base="none"]'); await (globalThis.STEP='[data-base="topo"]',p).click('[data-base="topo"]'); await (globalThis.STEP='#potf',p).click('#potf');
  await (globalThis.STEP='#lay',p).click('#lay').catch(()=>{}); await p.keyboard.press('Escape');
  await p.fill('#q','gir');await p.waitForTimeout(200);const r=await p.evaluate(()=>document.querySelectorAll('#res [data-r]').length); if(!r)throw new Error('busqueda');
  await (globalThis.STEP='#res [data-r="0"]',p).click('#res [data-r="0"]');await p.waitForTimeout(1200);
  await p.fill('#q','zzzzxq');await p.waitForTimeout(150);if(!await p.evaluate(()=>/Sin resultados/.test(document.querySelector('#res').textContent)))throw new Error('sin resultados');
  await p.keyboard.press('Escape');
  await (globalThis.STEP='#pinb',p).click('#pinb');await p.mouse.click(180,380);await p.waitForTimeout(400);if(!await p.evaluate(()=>__cs.origin().pin))throw new Error('pin tap');
  await (globalThis.STEP='#pinb',p).click('#pinb');if(await p.evaluate(()=>__cs.origin().pin))throw new Error('pin quitar');
  await (globalThis.STEP='#compb',p).click('#compb');await p.waitForTimeout(200);await (globalThis.STEP='#compb',p).click('#compb');
  await (globalThis.STEP='#home',p).click('#home');for(const i of ['tel','favs','tips','guia','prep']){await (globalThis.STEP=`#menu [data-info="${i}"]`,p).click(`#menu [data-info="${i}"]`);await p.waitForTimeout(200);if(await p.evaluate(id=>document.querySelector('#'+id).hidden,i))throw new Error('hoja '+i);await p.keyboard.press('Escape');await (globalThis.STEP='#home',p).click('#home');}
  if(await p.evaluate(()=>document.querySelector('#menuback').hidden))throw new Error('menuback');
  await (globalThis.STEP='#menuback',p).click('#menuback');
  await (globalThis.STEP='#home',p).click('#home');await (globalThis.STEP='#popbtn',p).click('#popbtn');const fr=await (await p.waitForSelector('#popf')).contentFrame();await fr.waitForFunction(()=>window.__ready,null,{timeout:30000});await (globalThis.STEP='#popx',p).click('#popx');
  await p.screenshot({path:'f1.png'});
 });
 // 2 GPS denegado + localStorage bloqueado
 await run(b,'2-sin-permisos-sin-storage',{...mob,__init:()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}});}},async p=>{
  await p.goto(FILE);await p.waitForFunction(()=>window.__ready,null,{timeout:20000});
  await (globalThis.STEP='[data-need="agua"]',p).click('[data-need="agua"]');await p.waitForTimeout(1500);
  log('   gps status:',await p.evaluate(()=>document.querySelector('#gpsst').textContent),'| toast:',await p.evaluate(()=>document.querySelector('#toast').textContent));
  await p.mouse.click(180,200,{button:'right'});await p.waitForTimeout(300);
  log('   pin sin storage:',await p.evaluate(()=>!!__cs.origin().pin));
 });
 // 3 posición GPS antigua guardada
 await run(b,'3-gps-antiguo',{...mob,__init:()=>{localStorage.setItem('cs_me',JSON.stringify({lat:41.98,lon:2.82,acc:20,t:Date.now()-5*3600e3}));}},async p=>{
  await p.goto(FILE);await p.waitForFunction(()=>window.__ready);
  await (globalThis.STEP='#home',p).click('#home').catch(()=>{});await (globalThis.STEP='[data-need=""]',p).click('[data-need=""]');await (globalThis.STEP='#near-btn',p).click('#near-btn');await p.waitForTimeout(300);
  log('   near from:',await p.evaluate(()=>document.querySelector('#nearfrom').textContent),'| chip:',await p.evaluate(()=>document.querySelector('#gpsst').textContent));
 });
 // 4 escritorio oscuro
 await run(b,'4-escritorio-oscuro',{viewport:{width:1366,height:820},colorScheme:'dark'},async p=>{
  await p.goto(FILE);await p.waitForFunction(()=>window.__ready);await p.screenshot({path:'f4a.png'});
  await (globalThis.STEP='[data-need="salud"]',p).click('[data-need="salud"]');await p.waitForTimeout(800);await (globalThis.STEP='[data-near="0"]',p).click('[data-near="0"]');await p.waitForTimeout(900);await p.screenshot({path:'f4b.png'});
  await (globalThis.STEP='#lay',p).click('#lay');await p.waitForTimeout(200);await p.screenshot({path:'f4c.png'});
 });
 await b.close();
})();
