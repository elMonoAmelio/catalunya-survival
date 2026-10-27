const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const q of (process.env.Q||',?rt=http://127.0.0.1:8791,?rt=http://127.0.0.1:8792').split(',')){
const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,timezoneId:'Europe/Madrid',geolocation:{latitude:41.39,longitude:2.0},permissions:['geolocation']});
const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.argv[2]+q);await p.waitForTimeout(7000);
const tr=await p.evaluate(()=>{const R=window.__rod;const s=R.ST[0];const a=R.act().filter(a=>a.tr&&(a.real?a.v.next:a.p.next)>0&&a.tr.fam==='R1'&&(!location.search||a.real));const x=a[0];if(!x)return null;
 const st=x.tr.pat.stops,nx=x.real?x.v.next:x.p.next;const inv=w=>{let lo=2,la=41.5;for(let k=0;k<60;k++){const e=1e-4,p=R.LL(lo,la),px=R.LL(lo+e,la),py=R.LL(lo,la+e);const a=(px[0]-p[0])/e,b=(py[0]-p[0])/e,c=(px[1]-p[1])/e,d=(py[1]-p[1])/e,dx=w[0]-p[0],dy=w[1]-p[1],det=a*d-b*c;lo+=(d*dx-b*dy)/det;la+=(-c*dx+a*dy)/det;}return [la,lo]};
 const tw=x.p.w,nw=R.ST[st[nx]].w;return {num:x.tr.num,real:!!x.real,A:inv(tw),B:inv(nw)}});
if(!tr){console.log(q,'sin tren');continue;}
const [la1,lo1]=tr.A,[la2,lo2]=tr.B;const km=Math.hypot((la2-la1)*111,(lo2-lo1)*83.5),stp=0.067/km;
for(let i=0;i<=8;i++){const f=i*stp;await c.setGeolocation({latitude:la1+(la2-la1)*f,longitude:lo1+(lo2-lo1)*f,accuracy:10});await p.waitForTimeout(3000);}
const r=await p.evaluate(n=>{const R=window.__rod,x=R.act().find(a=>a.tr&&String(a.tr.num)===String(n));return {dbg:x&&{w:x.p.w,stop:x.stop,next:x.v&&x.v.next,age:x.age,live:R.RT.vp.size},onb:document.querySelector('#onb')?.innerText||'',sel:String(R.selTrip?.num||'')}},tr.num);
console.log(q||'horario',tr.num,tr.real,JSON.stringify(r),errs);await c.close();}
await b.close();})();
