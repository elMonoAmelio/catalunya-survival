const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,timezoneId:'Europe/Madrid'});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(5000);
await p.evaluate(()=>{const a=window.__rod.act().find(a=>a.tr);window.__rod.select(a.tr)});await p.waitForTimeout(1500);
const vis=()=>p.evaluate(()=>{const m=document.getElementById('mcs');return getComputedStyle(m).display!=='none'&&!m.classList.contains('min')});
const v0=await vis();const r=await p.evaluate(()=>{const b=document.getElementById('mcs').getBoundingClientRect();return [b.left+b.width*0.7,b.top+60]});
const cdp=await c.newCDPSession(p);const [x,y]=r;await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=12;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x-i*18,y}]});await new Promise(r=>setTimeout(r,16));}await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
await p.waitForTimeout(500);const v1=await vis();await p.waitForTimeout(5000);const v2=await vis();
// tocar el tren en el mapa
const pos=await p.evaluate(()=>{const s=window.__rod.selTrip;return !!s});
await p.evaluate(()=>{const s=window.__rod.selTrip;window.__rodTap&&0;document.querySelector('#home [data-ht="home"]')?.click();});await p.waitForTimeout(300);
await p.evaluate(()=>{const a=window.__rod.act().find(a=>a.tr);window.__rodHide();});await p.waitForTimeout(300);const v3=await vis();
const tapped=await p.evaluate(()=>{const R=window.__rod;const W=innerWidth,H=innerHeight;for(let x=10;x<W;x+=8)for(let y=100;y<H-100;y+=8){if(document.elementFromPoint(x,y)?.tagName!=='CANVAS')continue;const h=window.__rodHover&&window.__rodHover(x,y);if(h&&/tren/.test(h)){return window.__rodTap(x,y)}}return 'none'});await p.waitForTimeout(800);const v4=await vis();
console.log({v3,tapped,trasTocarTren:v4,antes:v0,trasDeslizar:v1,a5s:v2,sigueSel:pos},errs);await b.close();})();
