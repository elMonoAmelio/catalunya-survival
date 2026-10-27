// auditoría de contraste en modo noche: textos visibles con contraste < 3
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const cs of ['dark','light']){
const c=await b.newContext({viewport:{width:1400,height:1000},colorScheme:cs,timezoneId:'Europe/Madrid',geolocation:{latitude:41.5040,longitude:2.3920},permissions:['geolocation']});
const p=await c.newPage();await p.goto('file://'+process.argv[2]+'?rt=http://127.0.0.1:8790');await p.waitForTimeout(5000);
const audit=async lab=>{const r=await p.evaluate(()=>{const lum=c=>{const m=c.match(/[\d.]+/g);if(!m)return null;const [r,g,b]=m.slice(0,3).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return [.2126*r+.7152*g+.0722*b,m[3]==null?1:+m[3]]};
const bgOf=e=>{for(let x=e;x;x=x.parentElement){const s=getComputedStyle(x);const l=lum(s.backgroundColor);if(l&&l[1]>0.5)return l[0];if(/gradient/.test(s.backgroundImage))return null;}return document.documentElement.classList.contains('dark')?0.01:1};
const out=[];for(const e of document.querySelectorAll('#home *, #mcs *, #rc *, button, #ctime')){if(!e.offsetParent&&e.id!=='ctime')continue;const own=[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim());if(!own)continue;const s=getComputedStyle(e);if(s.visibility==='hidden'||+s.opacity<0.3)continue;const f=lum(s.color);if(!f)continue;const bg=bgOf(e);if(bg==null)continue;const L1=Math.max(f[0],bg),L2=Math.min(f[0],bg),cr=(L1+.05)/(L2+.05);if(cr<3)out.push(cr.toFixed(2)+' '+e.tagName+'.'+e.className+' «'+e.textContent.trim().slice(0,30)+'»')}return [...new Set(out)].slice(0,25)});console.log(cs,lab,r)};
await p.evaluate(()=>document.querySelector('#home [data-ht="home"]')?.click());await p.waitForTimeout(1500);await audit('casa');
await p.evaluate(()=>{const a=window.__rod.act().find(a=>a.tr);window.__rod.select(a.tr)});await p.waitForTimeout(1500);await audit('tren');
await p.evaluate(()=>document.querySelector('#sbtn').click());await p.waitForTimeout(1500);await audit('stats');
await p.evaluate(()=>window.__rodPickStation(window.__rod.ST.findIndex(s=>s.n==='Barcelona El Clot')));await p.waitForTimeout(2500);await audit('estación');
await c.close();}
await b.close();})();
