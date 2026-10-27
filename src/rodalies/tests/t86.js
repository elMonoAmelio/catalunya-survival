const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const [w,h,m,cs] of [[1400,900,false,'light'],[390,844,true,'dark']]){const c=await b.newContext({viewport:{width:w,height:h},isMobile:m,colorScheme:cs,timezoneId:'Europe/Madrid'});
const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+process.argv[2]);await p.waitForTimeout(5000);
const ov=await p.evaluate(()=>{const w=document.getElementById('wabtn').getBoundingClientRect();return [...document.querySelectorAll('body *')].filter(e=>e.id!=='wabtn'&&!e.closest('#wabtn')&&getComputedStyle(e).position==='fixed'&&e.offsetParent!==undefined).map(e=>[e.id||e.className,e.getBoundingClientRect()]).filter(([n,r])=>r.width&&r.left<w.right&&r.right>w.left&&r.top<w.bottom&&r.bottom>w.top).map(x=>x[0])});console.log('solapa',ov);const r=await p.evaluate(()=>{const g=id=>{const e=document.getElementById(id);if(!e)return null;const r=e.getBoundingClientRect();return [Math.round(r.left),Math.round(r.top),Math.round(r.width),Math.round(r.height)]};return {s:g('sbtn'),t:g('tbtn'),wa:g('wabtn'),href:document.getElementById('wabtn')?.href}});
await p.screenshot({path:`/tmp/ms-work/wa_${w}.png`,clip:m?{x:250,y:200,width:140,height:300}:{x:250,y:0,width:600,height:70}});
console.log(w,JSON.stringify(r),errs);await c.close();}
await b.close();})();
