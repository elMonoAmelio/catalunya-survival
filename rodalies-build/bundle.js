(()=>{var a0=0,Kd=1,o0=2;var cl=1,l0=2,Ia=3,nr=0,ai=1,ls=2,cs=0,Pa=1,Qd=2,tf=3,ef=4,c0=5;var Pr=100,h0=101,u0=102,d0=103,f0=104,p0=200,m0=201,g0=202,_0=203,nf=204,sf=205,x0=206,v0=207,y0=208,S0=209,M0=210,b0=211,w0=212,E0=213,T0=214,Dc=0,Nc=1,Uc=2,_a=3,Oc=4,Fc=5,Bc=6,kc=7,yh=0,A0=1,C0=2,qi=0,rf=1,af=2,of=3,lf=4,cf=5,hf=6,uf=7;var df=300,ir=301,Lr=302,Sh=303,Mh=304,hl=306,$c=1e3,ns=1001,zc=1002,Fn=1003,R0=1004;var ul=1005;var Wn=1006,bh=1007;var sr=1008;var xi=1009,ff=1010,pf=1011,La=1012,wh=1013,Yi=1014,Ii=1015,Zi=1016,Eh=1017,Th=1018,Da=1020,mf=35902,gf=35899,_f=1021,xf=1022,Pi=1023,ss=1026,rr=1027,Ah=1028,Ch=1029,ar=1030,Rh=1031;var Ih=1033,dl=33776,fl=33777,pl=33778,ml=33779,Ph=35840,Lh=35841,Dh=35842,Nh=35843,Uh=36196,Oh=37492,Fh=37496,Bh=37488,kh=37489,gl=37490,$h=37491,zh=37808,Vh=37809,Hh=37810,Gh=37811,Wh=37812,Xh=37813,qh=37814,Yh=37815,Zh=37816,Jh=37817,jh=37818,Kh=37819,Qh=37820,tu=37821,eu=36492,nu=36494,iu=36495,su=36283,ru=36284,_l=36285,au=36286;var Co=2300,Vc=2301,Pc=2302,kd=2303,$d=2400,zd=2401,Vd=2402;var I0=3200;var ou=0,P0=1,Ns="",Mi="srgb",Ro="srgb-linear",Io="linear",an="srgb";var Lc=7680;var L0=519,D0=512,N0=513,U0=514,lu=515,O0=516,F0=517,cu=518,B0=519,vf=35044;var yf="300 es",Gi=2e3,xa=2001;function ox(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function k0(){let i=Po("canvas");return i.style.display="block",i}var Mm={},va=null;function Lo(...i){let t="THREE."+i.shift();va?va("log",t,...i):console.log(t,...i)}function $0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ye(...i){i=$0(i);let t="THREE."+i.shift();if(va)va("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function we(...i){i=$0(i);let t="THREE."+i.shift();if(va)va("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wr(...i){let t=i.join(" ");t in Mm||(Mm[t]=!0,ye(...i))}function z0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var V0={[Dc]:Nc,[Uc]:Bc,[Oc]:kc,[_a]:Fc,[Nc]:Dc,[Bc]:Uc,[kc]:Oc,[Fc]:_a},rs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bm=1234567,wo=Math.PI/180,ya=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]+"-"+jn[t&255]+jn[t>>8&255]+"-"+jn[t>>16&15|64]+jn[t>>24&255]+"-"+jn[e&63|128]+jn[e>>8&255]+"-"+jn[e>>16&255]+jn[e>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Sf(i,t){return(i%t+t)%t}function cx(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hx(i,t,e){return i!==t?(e-i)/(t-i):0}function Eo(i,t,e){return(1-e)*i+e*t}function ux(i,t,e,n){return Eo(i,t,1-Math.exp(-e*n))}function dx(i,t=1){return t-Math.abs(Sf(i,t*2)-t)}function fx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function px(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function mx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gx(i,t){return i+Math.random()*(t-i)}function _x(i){return i*(.5-Math.random())}function xx(i){i!==void 0&&(bm=i);let t=bm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vx(i){return i*wo}function yx(i){return i*ya}function Sx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wx(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),h=a(e/2),u=r((t+n)/2),d=a((t+n)/2),y=r((t-n)/2),g=a((t-n)/2),M=r((n-t)/2),w=a((n-t)/2);switch(s){case"XYX":i.set(l*d,h*y,h*g,l*u);break;case"YZY":i.set(h*g,l*d,h*y,l*u);break;case"ZXZ":i.set(h*y,h*g,l*d,l*u);break;case"XZX":i.set(l*d,h*w,h*M,l*u);break;case"YXY":i.set(h*M,l*d,h*w,l*u);break;case"ZYZ":i.set(h*w,h*M,l*d,l*u);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mf={DEG2RAD:wo,RAD2DEG:ya,generateUUID:is,clamp:Le,euclideanModulo:Sf,mapLinear:cx,inverseLerp:hx,lerp:Eo,damp:ux,pingpong:dx,smoothstep:fx,smootherstep:px,randInt:mx,randFloat:gx,randFloatSpread:_x,seededRandom:xx,degToRad:vx,radToDeg:yx,isPowerOfTwo:Sx,ceilPowerOfTwo:Mx,floorPowerOfTwo:bx,setQuaternionFromProperEuler:wx,normalize:ln,denormalize:Hi},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Le(this.x,t.x,e.x),this.y=Le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Le(this.x,t,e),this.y=Le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},as=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let h=n[s+0],u=n[s+1],d=n[s+2],y=n[s+3],g=r[a+0],M=r[a+1],w=r[a+2],D=r[a+3];if(y!==D||h!==g||u!==M||d!==w){let x=h*g+u*M+d*w+y*D;x<0&&(g=-g,M=-M,w=-w,D=-D,x=-x);let m=1-l;if(x<.9995){let $=Math.acos(x),z=Math.sin($);m=Math.sin(m*$)/z,l=Math.sin(l*$)/z,h=h*m+g*l,u=u*m+M*l,d=d*m+w*l,y=y*m+D*l}else{h=h*m+g*l,u=u*m+M*l,d=d*m+w*l,y=y*m+D*l;let $=1/Math.sqrt(h*h+u*u+d*d+y*y);h*=$,u*=$,d*=$,y*=$}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=y}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],h=n[s+1],u=n[s+2],d=n[s+3],y=r[a],g=r[a+1],M=r[a+2],w=r[a+3];return t[e]=l*w+d*y+h*M-u*g,t[e+1]=h*w+d*g+u*y-l*M,t[e+2]=u*w+d*M+l*g-h*y,t[e+3]=d*w-l*y-h*g-u*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,h=Math.sin,u=l(n/2),d=l(s/2),y=l(r/2),g=h(n/2),M=h(s/2),w=h(r/2);switch(a){case"XYZ":this._x=g*d*y+u*M*w,this._y=u*M*y-g*d*w,this._z=u*d*w+g*M*y,this._w=u*d*y-g*M*w;break;case"YXZ":this._x=g*d*y+u*M*w,this._y=u*M*y-g*d*w,this._z=u*d*w-g*M*y,this._w=u*d*y+g*M*w;break;case"ZXY":this._x=g*d*y-u*M*w,this._y=u*M*y+g*d*w,this._z=u*d*w+g*M*y,this._w=u*d*y-g*M*w;break;case"ZYX":this._x=g*d*y-u*M*w,this._y=u*M*y+g*d*w,this._z=u*d*w-g*M*y,this._w=u*d*y+g*M*w;break;case"YZX":this._x=g*d*y+u*M*w,this._y=u*M*y+g*d*w,this._z=u*d*w-g*M*y,this._w=u*d*y-g*M*w;break;case"XZY":this._x=g*d*y-u*M*w,this._y=u*M*y-g*d*w,this._z=u*d*w+g*M*y,this._w=u*d*y+g*M*w;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],h=e[9],u=e[2],d=e[6],y=e[10],g=n+l+y;if(g>0){let M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(d-h)*M,this._y=(r-u)*M,this._z=(a-s)*M}else if(n>l&&n>y){let M=2*Math.sqrt(1+n-l-y);this._w=(d-h)/M,this._x=.25*M,this._y=(s+a)/M,this._z=(r+u)/M}else if(l>y){let M=2*Math.sqrt(1+l-n-y);this._w=(r-u)/M,this._x=(s+a)/M,this._y=.25*M,this._z=(h+d)/M}else{let M=2*Math.sqrt(1+y-n-l);this._w=(a-s)/M,this._x=(r+u)/M,this._y=(h+d)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+a*l+s*u-r*h,this._y=s*d+a*h+r*l-n*u,this._z=r*d+a*u+n*h-s*l,this._w=a*d-n*l-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let h=1-e;if(l<.9995){let u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,h=t.w,u=2*(a*s-l*n),d=2*(l*e-r*s),y=2*(r*n-a*e);return this.x=e+h*u+a*y-l*d,this.y=n+h*d+l*u-r*y,this.z=s+h*y+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Le(this.x,t.x,e.x),this.y=Le(this.y,t.y,e.y),this.z=Le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Le(this.x,t,e),this.y=Le(this.y,t,e),this.z=Le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,h=e.z;return this.x=s*h-r*l,this.y=r*a-n*h,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fd=new Z,wm=new as,Ie=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u)}set(t,e,n,s,r,a,l,h,u){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],h=n[6],u=n[1],d=n[4],y=n[7],g=n[2],M=n[5],w=n[8],D=s[0],x=s[3],m=s[6],$=s[1],z=s[4],L=s[7],T=s[2],k=s[5],W=s[8];return r[0]=a*D+l*$+h*T,r[3]=a*x+l*z+h*k,r[6]=a*m+l*L+h*W,r[1]=u*D+d*$+y*T,r[4]=u*x+d*z+y*k,r[7]=u*m+d*L+y*W,r[2]=g*D+M*$+w*T,r[5]=g*x+M*z+w*k,r[8]=g*m+M*L+w*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8];return e*a*d-e*l*u-n*r*d+n*l*h+s*r*u-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],y=d*a-l*u,g=l*h-d*r,M=u*r-a*h,w=e*y+n*g+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let D=1/w;return t[0]=y*D,t[1]=(s*u-d*n)*D,t[2]=(l*n-s*a)*D,t[3]=g*D,t[4]=(d*e-s*h)*D,t[5]=(s*r-l*e)*D,t[6]=M*D,t[7]=(n*h-u*e)*D,t[8]=(a*e-n*r)*D,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*a+u*l)+a+t,-s*u,s*h,-s*(-u*a+h*l)+l+e,0,0,1),this}scale(t,e){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pd.makeScale(t,e)),this}rotate(t){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pd.makeRotation(-t)),this}translate(t,e){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pd=new Ie,Em=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ex(){let i={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===an&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===an&&(s.r=ga(s.r),s.g=ga(s.g),s.b=ga(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ns?Io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ro]:{primaries:t,whitePoint:n,transfer:Io,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:n,transfer:an,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),i}var Xe=Ex();function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ta,Hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ta===void 0&&(ta=Po("canvas")),ta.width=t.width,ta.height=t.height;let s=ta.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ta}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Po("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ls(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ls(e[n]/255)*255):e[n]=Ls(e[n]);return{data:e,width:t.width,height:t.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tx=0,Sa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(md(s[a].image)):r.push(md(s[a]))}else r=md(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function md(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}var Ax=0,gd=new Z,mi=class i extends rs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ns,s=ns,r=Wn,a=sr,l=Pi,h=xi,u=i.DEFAULT_ANISOTROPY,d=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=is(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ye(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ye(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==df)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $c:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $c:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=df;mi.DEFAULT_ANISOTROPY=1;var on=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],d=h[4],y=h[8],g=h[1],M=h[5],w=h[9],D=h[2],x=h[6],m=h[10];if(Math.abs(d-g)<.01&&Math.abs(y-D)<.01&&Math.abs(w-x)<.01){if(Math.abs(d+g)<.1&&Math.abs(y+D)<.1&&Math.abs(w+x)<.1&&Math.abs(u+M+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(u+1)/2,L=(M+1)/2,T=(m+1)/2,k=(d+g)/4,W=(y+D)/4,C=(w+x)/4;return z>L&&z>T?z<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(z),s=k/n,r=W/n):L>T?L<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(L),n=k/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=W/r,s=C/r),this.set(n,s,r,e),this}let $=Math.sqrt((x-w)*(x-w)+(y-D)*(y-D)+(g-d)*(g-d));return Math.abs($)<.001&&($=1),this.x=(x-w)/$,this.y=(y-D)/$,this.z=(g-d)/$,this.w=Math.acos((u+M+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Le(this.x,t.x,e.x),this.y=Le(this.y,t.y,e.y),this.z=Le(this.z,t.z,e.z),this.w=Le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Le(this.x,t,e),this.y=Le(this.y,t,e),this.z=Le(this.z,t,e),this.w=Le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends rs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new mi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Do=class extends mi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wc=class extends mi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,h,u,d,y,g,M,w,D,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u,d,y,g,M,w,D,x)}set(t,e,n,s,r,a,l,h,u,d,y,g,M,w,D,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=h,m[2]=u,m[6]=d,m[10]=y,m[14]=g,m[3]=M,m[7]=w,m[11]=D,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ea.setFromMatrixColumn(t,0).length(),r=1/ea.setFromMatrixColumn(t,1).length(),a=1/ea.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s),d=Math.cos(r),y=Math.sin(r);if(t.order==="XYZ"){let g=a*d,M=a*y,w=l*d,D=l*y;e[0]=h*d,e[4]=-h*y,e[8]=u,e[1]=M+w*u,e[5]=g-D*u,e[9]=-l*h,e[2]=D-g*u,e[6]=w+M*u,e[10]=a*h}else if(t.order==="YXZ"){let g=h*d,M=h*y,w=u*d,D=u*y;e[0]=g+D*l,e[4]=w*l-M,e[8]=a*u,e[1]=a*y,e[5]=a*d,e[9]=-l,e[2]=M*l-w,e[6]=D+g*l,e[10]=a*h}else if(t.order==="ZXY"){let g=h*d,M=h*y,w=u*d,D=u*y;e[0]=g-D*l,e[4]=-a*y,e[8]=w+M*l,e[1]=M+w*l,e[5]=a*d,e[9]=D-g*l,e[2]=-a*u,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){let g=a*d,M=a*y,w=l*d,D=l*y;e[0]=h*d,e[4]=w*u-M,e[8]=g*u+D,e[1]=h*y,e[5]=D*u+g,e[9]=M*u-w,e[2]=-u,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){let g=a*h,M=a*u,w=l*h,D=l*u;e[0]=h*d,e[4]=D-g*y,e[8]=w*y+M,e[1]=y,e[5]=a*d,e[9]=-l*d,e[2]=-u*d,e[6]=M*y+w,e[10]=g-D*y}else if(t.order==="XZY"){let g=a*h,M=a*u,w=l*h,D=l*u;e[0]=h*d,e[4]=-y,e[8]=u*d,e[1]=g*y+D,e[5]=a*d,e[9]=M*y-w,e[2]=w*y-M,e[6]=l*d,e[10]=D*y+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cx,t,Rx)}lookAt(t,e,n){let s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Ws.crossVectors(n,yi),Ws.lengthSq()===0&&(Math.abs(n.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Ws.crossVectors(n,yi)),Ws.normalize(),sc.crossVectors(yi,Ws),s[0]=Ws.x,s[4]=sc.x,s[8]=yi.x,s[1]=Ws.y,s[5]=sc.y,s[9]=yi.y,s[2]=Ws.z,s[6]=sc.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],h=n[8],u=n[12],d=n[1],y=n[5],g=n[9],M=n[13],w=n[2],D=n[6],x=n[10],m=n[14],$=n[3],z=n[7],L=n[11],T=n[15],k=s[0],W=s[4],C=s[8],O=s[12],G=s[1],X=s[5],at=s[9],ht=s[13],j=s[2],et=s[6],pt=s[10],gt=s[14],At=s[3],_t=s[7],wt=s[11],bt=s[15];return r[0]=a*k+l*G+h*j+u*At,r[4]=a*W+l*X+h*et+u*_t,r[8]=a*C+l*at+h*pt+u*wt,r[12]=a*O+l*ht+h*gt+u*bt,r[1]=d*k+y*G+g*j+M*At,r[5]=d*W+y*X+g*et+M*_t,r[9]=d*C+y*at+g*pt+M*wt,r[13]=d*O+y*ht+g*gt+M*bt,r[2]=w*k+D*G+x*j+m*At,r[6]=w*W+D*X+x*et+m*_t,r[10]=w*C+D*at+x*pt+m*wt,r[14]=w*O+D*ht+x*gt+m*bt,r[3]=$*k+z*G+L*j+T*At,r[7]=$*W+z*X+L*et+T*_t,r[11]=$*C+z*at+L*pt+T*wt,r[15]=$*O+z*ht+L*gt+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],h=t[9],u=t[13],d=t[2],y=t[6],g=t[10],M=t[14],w=t[3],D=t[7],x=t[11],m=t[15],$=h*M-u*g,z=l*M-u*y,L=l*g-h*y,T=a*M-u*d,k=a*g-h*d,W=a*y-l*d;return e*(D*$-x*z+m*L)-n*(w*$-x*T+m*k)+s*(w*z-D*T+m*W)-r*(w*L-D*k+x*W)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10];return e*(a*d-l*u)-n*(r*d-l*h)+s*(r*u-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],y=t[9],g=t[10],M=t[11],w=t[12],D=t[13],x=t[14],m=t[15],$=e*l-n*a,z=e*h-s*a,L=e*u-r*a,T=n*h-s*l,k=n*u-r*l,W=s*u-r*h,C=d*D-y*w,O=d*x-g*w,G=d*m-M*w,X=y*x-g*D,at=y*m-M*D,ht=g*m-M*x,j=$*ht-z*at+L*X+T*G-k*O+W*C;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/j;return t[0]=(l*ht-h*at+u*X)*et,t[1]=(s*at-n*ht-r*X)*et,t[2]=(D*W-x*k+m*T)*et,t[3]=(g*k-y*W-M*T)*et,t[4]=(h*G-a*ht-u*O)*et,t[5]=(e*ht-s*G+r*O)*et,t[6]=(x*L-w*W-m*z)*et,t[7]=(d*W-g*L+M*z)*et,t[8]=(a*at-l*G+u*C)*et,t[9]=(n*G-e*at-r*C)*et,t[10]=(w*k-D*L+m*$)*et,t[11]=(y*L-d*k-M*$)*et,t[12]=(l*O-a*X-h*C)*et,t[13]=(e*X-n*O+s*C)*et,t[14]=(D*z-w*T-x*$)*et,t[15]=(d*T-y*z+g*$)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,h=t.z,u=r*a,d=r*l;return this.set(u*a+n,u*l-s*h,u*h+s*l,0,u*l+s*h,d*l+n,d*h-s*a,0,u*h-s*l,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,h=e._w,u=r+r,d=a+a,y=l+l,g=r*u,M=r*d,w=r*y,D=a*d,x=a*y,m=l*y,$=h*u,z=h*d,L=h*y,T=n.x,k=n.y,W=n.z;return s[0]=(1-(D+m))*T,s[1]=(M+L)*T,s[2]=(w-z)*T,s[3]=0,s[4]=(M-L)*k,s[5]=(1-(g+m))*k,s[6]=(x+$)*k,s[7]=0,s[8]=(w+z)*W,s[9]=(x-$)*W,s[10]=(1-(g+D))*W,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ea.set(s[0],s[1],s[2]).length(),l=ea.set(s[4],s[5],s[6]).length(),h=ea.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ki.copy(this);let u=1/a,d=1/l,y=1/h;return ki.elements[0]*=u,ki.elements[1]*=u,ki.elements[2]*=u,ki.elements[4]*=d,ki.elements[5]*=d,ki.elements[6]*=d,ki.elements[8]*=y,ki.elements[9]*=y,ki.elements[10]*=y,e.setFromRotationMatrix(ki),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,s,r,a,l=Gi,h=!1){let u=this.elements,d=2*r/(e-t),y=2*r/(n-s),g=(e+t)/(e-t),M=(n+s)/(n-s),w,D;if(h)w=r/(a-r),D=a*r/(a-r);else if(l===Gi)w=-(a+r)/(a-r),D=-2*a*r/(a-r);else if(l===xa)w=-a/(a-r),D=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=y,u[9]=M,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=D,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Gi,h=!1){let u=this.elements,d=2/(e-t),y=2/(n-s),g=-(e+t)/(e-t),M=-(n+s)/(n-s),w,D;if(h)w=1/(a-r),D=a/(a-r);else if(l===Gi)w=-2/(a-r),D=-(a+r)/(a-r);else if(l===xa)w=-1/(a-r),D=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=y,u[9]=0,u[13]=M,u[2]=0,u[6]=0,u[10]=w,u[14]=D,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ea=new Z,ki=new qe,Cx=new Z(0,0,0),Rx=new Z(1,1,1),Ws=new Z,sc=new Z,yi=new Z,Am=new qe,Cm=new as,Ds=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],h=s[1],u=s[5],d=s[9],y=s[2],g=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,M),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-y,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Le(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-y,r)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,M),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Am.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Am,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ds.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ix=0,Rm=new Z,na=new as,As=new qe,rc=new Z,go=new Z,Px=new Z,Lx=new as,Im=new Z(1,0,0),Pm=new Z(0,1,0),Lm=new Z(0,0,1),Dm={type:"added"},Dx={type:"removed"},ia={type:"childadded",child:null},_d={type:"childremoved",child:null},Bn=class i extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Ds,n=new as,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ie}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return na.setFromAxisAngle(t,e),this.quaternion.multiply(na),this}rotateOnWorldAxis(t,e){return na.setFromAxisAngle(t,e),this.quaternion.premultiply(na),this}rotateX(t){return this.rotateOnAxis(Im,t)}rotateY(t){return this.rotateOnAxis(Pm,t)}rotateZ(t){return this.rotateOnAxis(Lm,t)}translateOnAxis(t,e){return Rm.copy(t).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Im,t)}translateY(t){return this.translateOnAxis(Pm,t)}translateZ(t){return this.translateOnAxis(Lm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rc.copy(t):rc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(go,rc,this.up):As.lookAt(rc,go,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),na.setFromRotationMatrix(As),this.quaternion.premultiply(na.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dm),ia.child=t,this.dispatchEvent(ia),ia.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dx),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),As.multiply(t.parent.matrixWorld)),t.applyMatrix4(As),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dm),ia.child=t,this.dispatchEvent(ia),ia.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,Px),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Lx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){let y=h[u];r(t.shapes,y)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(r(t.materials,this.material[h]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];s.animations.push(r(t.animations,h))}}if(e){let l=a(t.geometries),h=a(t.materials),u=a(t.textures),d=a(t.images),y=a(t.shapes),g=a(t.skeletons),M=a(t.animations),w=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),y.length>0&&(n.shapes=y),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),w.length>0&&(n.nodes=w)}return n.object=s,n;function a(l){let h=[];for(let u in l){let d=l[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bn.DEFAULT_UP=new Z(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wi=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let D of t.hand.values()){let x=e.getJointPose(D,n),m=this._getHandJoint(u,D);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let d=u.joints["index-finger-tip"],y=u.joints["thumb-tip"],g=d.position.distanceTo(y.position),M=.02,w=.005;u.inputState.pinching&&g>M+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&g<=M-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},ac={h:0,s:0,l:0};function xd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xe.workingColorSpace){if(t=Sf(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xd(a,r,t+1/3),this.g=xd(a,r,t),this.b=xd(a,r,t-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(t,e=Mi){function n(r){r!==void 0&&parseFloat(r)<1&&ye("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ye("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ye("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mi){let n=H0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ye("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Xe.workingToColorSpace(Kn.copy(this),t),Math.round(Le(Kn.r*255,0,255))*65536+Math.round(Le(Kn.g*255,0,255))*256+Math.round(Le(Kn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xe.workingColorSpace){Xe.workingToColorSpace(Kn.copy(this),e);let n=Kn.r,s=Kn.g,r=Kn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),h,u,d=(l+a)/2;if(l===a)h=0,u=0;else{let y=a-l;switch(u=d<=.5?y/(a+l):y/(2-a-l),a){case n:h=(s-r)/y+(s<r?6:0);break;case s:h=(r-n)/y+2;break;case r:h=(n-s)/y+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=Xe.workingColorSpace){return Xe.workingToColorSpace(Kn.copy(this),e),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=Mi){Xe.workingToColorSpace(Kn.copy(this),t);let e=Kn.r,n=Kn.g,s=Kn.b;return t!==Mi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xs),this.setHSL(Xs.h+t,Xs.s+e,Xs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xs),t.getHSL(ac);let n=Eo(Xs.h,ac.h,e),s=Eo(Xs.s,ac.s,e),r=Eo(Xs.l,ac.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new xe;xe.NAMES=H0;var No=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ds,this.environmentIntensity=1,this.environmentRotation=new Ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$i=new Z,Cs=new Z,vd=new Z,Rs=new Z,sa=new Z,ra=new Z,Nm=new Z,yd=new Z,Sd=new Z,Md=new Z,bd=new on,wd=new on,Ed=new on,Js=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$i.subVectors(t,e),s.cross($i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$i.subVectors(s,e),Cs.subVectors(n,e),vd.subVectors(t,e);let a=$i.dot($i),l=$i.dot(Cs),h=$i.dot(vd),u=Cs.dot(Cs),d=Cs.dot(vd),y=a*u-l*l;if(y===0)return r.set(0,0,0),null;let g=1/y,M=(u*h-l*d)*g,w=(a*d-l*h)*g;return r.set(1-M-w,w,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rs)===null?!1:Rs.x>=0&&Rs.y>=0&&Rs.x+Rs.y<=1}static getInterpolation(t,e,n,s,r,a,l,h){return this.getBarycoord(t,e,n,s,Rs)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Rs.x),h.addScaledVector(a,Rs.y),h.addScaledVector(l,Rs.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return bd.setScalar(0),wd.setScalar(0),Ed.setScalar(0),bd.fromBufferAttribute(t,e),wd.fromBufferAttribute(t,n),Ed.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bd,r.x),a.addScaledVector(wd,r.y),a.addScaledVector(Ed,r.z),a}static isFrontFacing(t,e,n,s){return $i.subVectors(n,e),Cs.subVectors(t,e),$i.cross(Cs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $i.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),$i.cross(Cs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;sa.subVectors(s,n),ra.subVectors(r,n),yd.subVectors(t,n);let h=sa.dot(yd),u=ra.dot(yd);if(h<=0&&u<=0)return e.copy(n);Sd.subVectors(t,s);let d=sa.dot(Sd),y=ra.dot(Sd);if(d>=0&&y<=d)return e.copy(s);let g=h*y-d*u;if(g<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(sa,a);Md.subVectors(t,r);let M=sa.dot(Md),w=ra.dot(Md);if(w>=0&&M<=w)return e.copy(r);let D=M*u-h*w;if(D<=0&&u>=0&&w<=0)return l=u/(u-w),e.copy(n).addScaledVector(ra,l);let x=d*w-M*y;if(x<=0&&y-d>=0&&M-w>=0)return Nm.subVectors(r,s),l=(y-d)/(y-d+(M-w)),e.copy(s).addScaledVector(Nm,l);let m=1/(x+D+g);return a=D*m,l=g*m,e.copy(n).addScaledVector(sa,a).addScaledVector(ra,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,zi):zi.fromBufferAttribute(r,a),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),lc.subVectors(this.max,_o),aa.subVectors(t.a,_o),oa.subVectors(t.b,_o),la.subVectors(t.c,_o),qs.subVectors(oa,aa),Ys.subVectors(la,oa),vr.subVectors(aa,la);let e=[0,-qs.z,qs.y,0,-Ys.z,Ys.y,0,-vr.z,vr.y,qs.z,0,-qs.x,Ys.z,0,-Ys.x,vr.z,0,-vr.x,-qs.y,qs.x,0,-Ys.y,Ys.x,0,-vr.y,vr.x,0];return!Td(e,aa,oa,la,lc)||(e=[1,0,0,0,1,0,0,0,1],!Td(e,aa,oa,la,lc))?!1:(cc.crossVectors(qs,Ys),e=[cc.x,cc.y,cc.z],Td(e,aa,oa,la,lc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Is=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],zi=new Z,oc=new ri,aa=new Z,oa=new Z,la=new Z,qs=new Z,Ys=new Z,vr=new Z,_o=new Z,lc=new Z,cc=new Z,yr=new Z;function Td(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yr.fromArray(i,r);let l=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),h=t.dot(yr),u=e.dot(yr),d=n.dot(yr);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>l)return!1}return!0}var Cn=new Z,hc=new $t,Ux=0,un=class extends rs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ux++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hc.fromBufferAttribute(this,e),hc.applyMatrix3(t),this.setXY(e,hc.x,hc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix3(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Uo=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Oo=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Mn=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ox=new ri,xo=new Z,Ad=new Z,_i=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ox.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);let e=xo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(Ad)),this.expandByPoint(xo.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fx=0,Ri=new qe,Cd=new Bn,ca=new Z,Si=new ri,vo=new ri,On=new Z,bn=class i extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ox(t)?Oo:Uo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,n){return Ri.makeTranslation(t,e,n),this.applyMatrix4(Ri),this}scale(t,e,n){return Ri.makeScale(t,e,n),this.applyMatrix4(Ri),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];vo.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(Si.min,vo.min),Si.expandByPoint(On),On.addVectors(Si.max,vo.max),Si.expandByPoint(On)):(Si.expandByPoint(vo.min),Si.expandByPoint(vo.max))}Si.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)On.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(On));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],h=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)On.fromBufferAttribute(l,u),h&&(ca.fromBufferAttribute(t,u),On.add(ca)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],h=[];for(let C=0;C<n.count;C++)l[C]=new Z,h[C]=new Z;let u=new Z,d=new Z,y=new Z,g=new $t,M=new $t,w=new $t,D=new Z,x=new Z;function m(C,O,G){u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,O),y.fromBufferAttribute(n,G),g.fromBufferAttribute(r,C),M.fromBufferAttribute(r,O),w.fromBufferAttribute(r,G),d.sub(u),y.sub(u),M.sub(g),w.sub(g);let X=1/(M.x*w.y-w.x*M.y);isFinite(X)&&(D.copy(d).multiplyScalar(w.y).addScaledVector(y,-M.y).multiplyScalar(X),x.copy(y).multiplyScalar(M.x).addScaledVector(d,-w.x).multiplyScalar(X),l[C].add(D),l[O].add(D),l[G].add(D),h[C].add(x),h[O].add(x),h[G].add(x))}let $=this.groups;$.length===0&&($=[{start:0,count:t.count}]);for(let C=0,O=$.length;C<O;++C){let G=$[C],X=G.start,at=G.count;for(let ht=X,j=X+at;ht<j;ht+=3)m(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let z=new Z,L=new Z,T=new Z,k=new Z;function W(C){T.fromBufferAttribute(s,C),k.copy(T);let O=l[C];z.copy(O),z.sub(T.multiplyScalar(T.dot(O))).normalize(),L.crossVectors(k,O);let X=L.dot(h[C])<0?-1:1;a.setXYZW(C,z.x,z.y,z.z,X)}for(let C=0,O=$.length;C<O;++C){let G=$[C],X=G.start,at=G.count;for(let ht=X,j=X+at;ht<j;ht+=3)W(t.getX(ht+0)),W(t.getX(ht+1)),W(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);let s=new Z,r=new Z,a=new Z,l=new Z,h=new Z,u=new Z,d=new Z,y=new Z;if(t)for(let g=0,M=t.count;g<M;g+=3){let w=t.getX(g+0),D=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,D),a.fromBufferAttribute(e,x),d.subVectors(a,r),y.subVectors(s,r),d.cross(y),l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),l.add(d),h.add(d),u.add(d),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(D,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let g=0,M=e.count;g<M;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),d.subVectors(a,r),y.subVectors(s,r),d.cross(y),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)On.fromBufferAttribute(t,e),On.normalize(),t.setXYZ(e,On.x,On.y,On.z)}toNonIndexed(){function t(l,h){let u=l.array,d=l.itemSize,y=l.normalized,g=new u.constructor(h.length*d),M=0,w=0;for(let D=0,x=h.length;D<x;D++){l.isInterleavedBufferAttribute?M=h[D]*l.data.stride+l.offset:M=h[D]*d;for(let m=0;m<d;m++)g[w++]=u[M++]}return new un(g,d,y)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let h=s[l],u=t(h,n);e.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,y=u.length;d<y;d++){let g=u[d],M=t(g,n);h.push(M)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],d=[];for(let y=0,g=u.length;y<g;y++){let M=u[y];d.push(M.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(e))}let r=t.morphAttributes;for(let u in r){let d=[],y=r[u];for(let g=0,M=y.length;g<M;g++)d.push(y[g].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,d=a.length;u<d;u++){let y=a[u];this.addGroup(y.start,y.count,y.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vf,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},si=new Z,Xi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rd=new Z,Bx=new Z,kx=new Ie,Vi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rd.subVectors(n,e).cross(Bx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Rd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kx.getNormalMatrix(t),s=this.coplanarPoint(Rd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$x=0,os=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Pa,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=sf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ye(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ye(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let h=r[l];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ps=new Z,Id=new Z,uc=new Z,dc=new Z,Er=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ps.copy(this.origin).addScaledVector(this.direction,e),Ps.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Id.copy(t).add(e).multiplyScalar(.5),uc.copy(e).sub(t).normalize(),dc.copy(this.origin).sub(Id);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uc),l=dc.dot(this.direction),h=-dc.dot(uc),u=dc.lengthSq(),d=Math.abs(1-a*a),y,g,M,w;if(d>0)if(y=a*h-l,g=a*l-h,w=r*d,y>=0)if(g>=-w)if(g<=w){let D=1/d;y*=D,g*=D,M=y*(y+a*g+2*l)+g*(a*y+g+2*h)+u}else g=r,y=Math.max(0,-(a*g+l)),M=-y*y+g*(g+2*h)+u;else g=-r,y=Math.max(0,-(a*g+l)),M=-y*y+g*(g+2*h)+u;else g<=-w?(y=Math.max(0,-(-a*r+l)),g=y>0?-r:Math.min(Math.max(-r,-h),r),M=-y*y+g*(g+2*h)+u):g<=w?(y=0,g=Math.min(Math.max(-r,-h),r),M=g*(g+2*h)+u):(y=Math.max(0,-(a*r+l)),g=y>0?r:Math.min(Math.max(-r,-h),r),M=-y*y+g*(g+2*h)+u);else g=a>0?-r:r,y=Math.max(0,-(a*g+l)),M=-y*y+g*(g+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(Id).addScaledVector(uc,g),M}intersectSphere(t,e){if(t.radius<0)return null;Ps.subVectors(t.center,this.origin);let n=Ps.dot(this.direction),s=Ps.dot(Ps)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,h,u=1/this.direction.x,d=1/this.direction.y,y=1/this.direction.z,g=this.origin;return u>=0?(n=(t.min.x-g.x)*u,s=(t.max.x-g.x)*u):(n=(t.max.x-g.x)*u,s=(t.min.x-g.x)*u),d>=0?(r=(t.min.y-g.y)*d,a=(t.max.y-g.y)*d):(r=(t.max.y-g.y)*d,a=(t.min.y-g.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),y>=0?(l=(t.min.z-g.z)*y,h=(t.max.z-g.z)*y):(l=(t.max.z-g.z)*y,h=(t.min.z-g.z)*y),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ps)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,h=l.x,u=l.y,d=l.z,y=t.x-a.x,g=t.y-a.y,M=t.z-a.z,w=e.x-a.x,D=e.y-a.y,x=e.z-a.z,m=n.x-a.x,$=n.y-a.y,z=n.z-a.z,L=Math.abs(h),T=Math.abs(u),k=Math.abs(d),W,C,O,G,X,at,ht,j,et,pt,gt,At;if(L>=T&&L>=k?(O=h,at=y,et=w,At=m,h>=0?(W=u,C=d,G=g,X=M,ht=D,j=x,pt=$,gt=z):(W=d,C=u,G=M,X=g,ht=x,j=D,pt=z,gt=$)):T>=k?(O=u,at=g,et=D,At=$,u>=0?(W=d,C=h,G=M,X=y,ht=x,j=w,pt=z,gt=m):(W=h,C=d,G=y,X=M,ht=w,j=x,pt=m,gt=z)):(O=d,at=M,et=x,At=z,d>=0?(W=h,C=u,G=y,X=g,ht=w,j=D,pt=m,gt=$):(W=u,C=h,G=g,X=y,ht=D,j=w,pt=$,gt=m)),O===0)return null;let _t=W/O,wt=C/O,bt=1/O,zt=G-_t*at,te=X-wt*at,Ye=ht-_t*et,De=j-wt*et,Ge=pt-_t*At,vt=gt-wt*At,yt=Ge*De-vt*Ye,Ut=zt*vt-te*Ge,he=Ye*te-De*zt;if(s){if(yt<0||Ut<0||he<0)return null}else if((yt<0||Ut<0||he<0)&&(yt>0||Ut>0||he>0))return null;let jt=yt+Ut+he;if(jt===0)return null;let ge=bt*(yt*at+Ut*et+he*At);return(jt>0?ge<0:ge>0)?null:this.at(ge/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tr=class extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Um=new qe,Sr=new Er,fc=new _i,Om=new Z,pc=new Z,mc=new Z,gc=new Z,Pd=new Z,_c=new Z,Fm=new Z,xc=new Z,kn=class extends Bn{constructor(t=new bn,e=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){_c.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let d=l[h],y=r[h];d!==0&&(Pd.fromBufferAttribute(y,t),a?_c.addScaledVector(Pd,d):_c.addScaledVector(Pd.sub(e),d))}e.add(_c)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(r),Sr.copy(t.ray).recast(t.near),!(fc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(fc,Om)===null||Sr.origin.distanceToSquared(Om)>(t.far-t.near)**2))&&(Um.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(Um),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,h=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,y=r.attributes.normal,g=r.groups,M=r.drawRange;if(l!==null)if(Array.isArray(a))for(let w=0,D=g.length;w<D;w++){let x=g[w],m=a[x.materialIndex],$=Math.max(x.start,M.start),z=Math.min(l.count,Math.min(x.start+x.count,M.start+M.count));for(let L=$,T=z;L<T;L+=3){let k=l.getX(L),W=l.getX(L+1),C=l.getX(L+2);s=vc(this,m,t,n,u,d,y,k,W,C),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),D=Math.min(l.count,M.start+M.count);for(let x=w,m=D;x<m;x+=3){let $=l.getX(x),z=l.getX(x+1),L=l.getX(x+2);s=vc(this,a,t,n,u,d,y,$,z,L),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let w=0,D=g.length;w<D;w++){let x=g[w],m=a[x.materialIndex],$=Math.max(x.start,M.start),z=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let L=$,T=z;L<T;L+=3){let k=L,W=L+1,C=L+2;s=vc(this,m,t,n,u,d,y,k,W,C),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let x=w,m=D;x<m;x+=3){let $=x,z=x+1,L=x+2;s=vc(this,a,t,n,u,d,y,$,z,L),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function zx(i,t,e,n,s,r,a,l){let h;if(t.side===ai?h=n.intersectTriangle(a,r,s,!0,l):h=n.intersectTriangle(s,r,a,t.side===nr,l),h===null)return null;xc.copy(l),xc.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(xc);return u<e.near||u>e.far?null:{distance:u,point:xc.clone(),object:i}}function vc(i,t,e,n,s,r,a,l,h,u){i.getVertexPosition(l,pc),i.getVertexPosition(h,mc),i.getVertexPosition(u,gc);let d=zx(i,t,e,n,pc,mc,gc,Fm);if(d){let y=new Z;Js.getBarycoord(Fm,pc,mc,gc,y),s&&(d.uv=Js.getInterpolatedAttribute(s,l,h,u,y,new $t)),r&&(d.uv1=Js.getInterpolatedAttribute(r,l,h,u,y,new $t)),a&&(d.normal=Js.getInterpolatedAttribute(a,l,h,u,y,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let g={a:l,b:h,c:u,normal:new Z,materialIndex:0};Js.getNormal(pc,mc,gc,g.normal),d.face=g,d.barycoord=y}return d}var Fo=class extends mi{constructor(t=null,e=1,n=1,s,r,a,l,h,u=Fn,d=Fn,y,g){super(null,a,l,h,u,d,s,r,y,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bo=class extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ha=new qe,Bm=new qe,yc=[],km=new ri,Vx=new qe,yo=new kn,So=new _i,ko=class extends kn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ha),km.copy(t.boundingBox).applyMatrix4(ha),this.boundingBox.union(km)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ha),So.copy(t.boundingSphere).applyMatrix4(ha),this.boundingSphere.union(So)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(n),t.ray.intersectsSphere(So)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ha),Bm.multiplyMatrices(n,ha),yo.matrixWorld=Bm,yo.raycast(t,yc);for(let a=0,l=yc.length;a<l;a++){let h=yc[a];h.instanceId=r,h.object=this,e.push(h)}yc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fo(new Float32Array(s*this.count),s,this.count,Ah,Ii));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=l,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mr=new _i,Hx=new $t(.5,.5),Sc=new Z,wa=class{constructor(t=new Vi,e=new Vi,n=new Vi,s=new Vi,r=new Vi,a=new Vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],d=r[4],y=r[5],g=r[6],M=r[7],w=r[8],D=r[9],x=r[10],m=r[11],$=r[12],z=r[13],L=r[14],T=r[15];if(s[0].setComponents(u-a,M-d,m-w,T-$).normalize(),s[1].setComponents(u+a,M+d,m+w,T+$).normalize(),s[2].setComponents(u+l,M+y,m+D,T+z).normalize(),s[3].setComponents(u-l,M-y,m-D,T-z).normalize(),n)s[4].setComponents(h,g,x,L).normalize(),s[5].setComponents(u-h,M-g,m-x,T-L).normalize();else if(s[4].setComponents(u-h,M-g,m-x,T-L).normalize(),e===Gi)s[5].setComponents(u+h,M+g,m+x,T+L).normalize();else if(e===xa)s[5].setComponents(h,g,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);let e=Hx.distanceTo(t.center);return Mr.radius=.7071067811865476+e,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sc.x=s.normal.x>0?t.max.x:t.min.x,Sc.y=s.normal.y>0?t.max.y:t.min.y,Sc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qc=new Z,Yc=new Z,$m=new qe,Mo=new Er,Mc=new _i,Ld=new Z,zm=new Z,Zc=class extends Bn{constructor(t=new bn,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qc.fromBufferAttribute(e,s-1),Yc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qc.distanceTo(Yc);t.setAttribute("lineDistance",new Mn(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mc.copy(n.boundingSphere),Mc.applyMatrix4(s),Mc.radius+=r,t.ray.intersectsSphere(Mc)===!1)return;$m.copy(s).invert(),Mo.copy(t.ray).applyMatrix4($m);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){let M=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let D=M,x=w-1;D<x;D+=u){let m=d.getX(D),$=d.getX(D+1),z=bc(this,t,Mo,h,m,$,D);z&&e.push(z)}if(this.isLineLoop){let D=d.getX(w-1),x=d.getX(M),m=bc(this,t,Mo,h,D,x,w-1);m&&e.push(m)}}else{let M=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let D=M,x=w-1;D<x;D+=u){let m=bc(this,t,Mo,h,D,D+1,D);m&&e.push(m)}if(this.isLineLoop){let D=bc(this,t,Mo,h,w-1,M,w-1);D&&e.push(D)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function bc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(qc.fromBufferAttribute(l,s),Yc.fromBufferAttribute(l,r),e.distanceSqToSegment(qc,Yc,Ld,zm)>n)return;Ld.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Ld);if(!(u<t.near||u>t.far))return{distance:u,point:zm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $o=class extends Zc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Jc=class extends os{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vm=new qe,Hd=new Er,wc=new _i,Ec=new Z,Cr=class extends Bn{constructor(t=new bn,e=new Jc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),wc.radius+=r,t.ray.intersectsSphere(wc)===!1)return;Vm.copy(s).invert(),Hd.copy(t.ray).applyMatrix4(Vm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,y=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),M=Math.min(u.count,a.start+a.count);for(let w=g,D=M;w<D;w++){let x=u.getX(w);Ec.fromBufferAttribute(y,x),Hm(Ec,x,h,s,t,e,this)}}else{let g=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let w=g,D=M;w<D;w++)Ec.fromBufferAttribute(y,w),Hm(Ec,w,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Hm(i,t,e,n,s,r,a){let l=Hd.distanceSqToPoint(i);if(l<e){let h=new Z;Hd.closestPointToPoint(i,h),h.applyMatrix4(n);let u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var zo=class extends mi{constructor(t=[],e=ir,n,s,r,a,l,h,u,d){super(t,e,n,s,r,a,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var js=class extends mi{constructor(t,e,n=Yi,s,r,a,l=Fn,h=Fn,u,d=ss,y=1){if(d!==ss&&d!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:y};super(g,s,r,a,l,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jc=class extends js{constructor(t,e=Yi,n=ir,s,r,a=Fn,l=Fn,h,u=ss){let d={width:t,height:t,depth:1},y=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,h,u),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vo=class extends mi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ea=class i extends bn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],y=[],g=0,M=0;w("z","y","x",-1,-1,n,e,t,a,r,0),w("z","y","x",1,-1,n,e,-t,a,r,1),w("x","z","y",1,1,t,n,e,s,a,2),w("x","z","y",1,-1,t,n,-e,s,a,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(y,2));function w(D,x,m,$,z,L,T,k,W,C,O){let G=L/W,X=T/C,at=L/2,ht=T/2,j=k/2,et=W+1,pt=C+1,gt=0,At=0,_t=new Z;for(let wt=0;wt<pt;wt++){let bt=wt*X-ht;for(let zt=0;zt<et;zt++){let te=zt*G-at;_t[D]=te*$,_t[x]=bt*z,_t[m]=j,u.push(_t.x,_t.y,_t.z),_t[D]=0,_t[x]=0,_t[m]=k>0?1:-1,d.push(_t.x,_t.y,_t.z),y.push(zt/W),y.push(1-wt/C),gt+=1}}for(let wt=0;wt<C;wt++)for(let bt=0;bt<W;bt++){let zt=g+bt+et*wt,te=g+bt+et*(wt+1),Ye=g+(bt+1)+et*(wt+1),De=g+(bt+1)+et*wt;h.push(zt,te,De),h.push(te,Ye,De),At+=6}l.addGroup(M,At,O),M+=At,g+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ho=class i extends bn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],y=[],g=[],M=[],w=0,D=[],x=n/2,m=0;$(),a===!1&&(t>0&&z(!0),e>0&&z(!1)),this.setIndex(d),this.setAttribute("position",new Mn(y,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(M,2));function $(){let L=new Z,T=new Z,k=0,W=(e-t)/n;for(let C=0;C<=r;C++){let O=[],G=C/r,X=G*(e-t)+t;for(let at=0;at<=s;at++){let ht=at/s,j=ht*h+l,et=Math.sin(j),pt=Math.cos(j);T.x=X*et,T.y=-G*n+x,T.z=X*pt,y.push(T.x,T.y,T.z),L.set(et,W,pt).normalize(),g.push(L.x,L.y,L.z),M.push(ht,1-G),O.push(w++)}D.push(O)}for(let C=0;C<s;C++)for(let O=0;O<r;O++){let G=D[O][C],X=D[O+1][C],at=D[O+1][C+1],ht=D[O][C+1];(t>0||O!==0)&&(d.push(G,X,ht),k+=3),(e>0||O!==r-1)&&(d.push(X,at,ht),k+=3)}u.addGroup(m,k,0),m+=k}function z(L){let T=w,k=new $t,W=new Z,C=0,O=L===!0?t:e,G=L===!0?1:-1;for(let at=1;at<=s;at++)y.push(0,x*G,0),g.push(0,G,0),M.push(.5,.5),w++;let X=w;for(let at=0;at<=s;at++){let j=at/s*h+l,et=Math.cos(j),pt=Math.sin(j);W.x=O*pt,W.y=x*G,W.z=O*et,y.push(W.x,W.y,W.z),g.push(0,G,0),k.x=et*.5+.5,k.y=pt*.5*G+.5,M.push(k.x,k.y),w++}for(let at=0;at<s;at++){let ht=T+at,j=X+at;L===!0?d.push(j,j+1,ht):d.push(j+1,j,ht),C+=3}u.addGroup(m,C,L===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ye("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,h=r-1,u;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),u=n[s]-a,u<0)l=s+1;else if(u>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let d=n[s],g=n[s+1]-d,M=(a-d)/g;return(s+M)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),h=e||(a.isVector2?new $t:new Z);return h.copy(l).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,s=[],r=[],a=[],l=new Z,h=new qe;for(let M=0;M<=t;M++){let w=M/t;s[M]=this.getTangentAt(w,new Z)}r[0]=new Z,a[0]=new Z;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),y=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),y<=u&&(u=y,n.set(0,1,0)),g<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let M=1;M<=t;M++){if(r[M]=r[M-1].clone(),a[M]=a[M-1].clone(),l.crossVectors(s[M-1],s[M]),l.length()>Number.EPSILON){l.normalize();let w=Math.acos(Le(s[M-1].dot(s[M]),-1,1));r[M].applyMatrix4(h.makeRotationAxis(l,w))}a[M].crossVectors(s[M],r[M])}if(e===!0){let M=Math.acos(Le(r[0].dot(r[t]),-1,1));M/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(M=-M);for(let w=1;w<=t;w++)r[w].applyMatrix4(h.makeRotationAxis(s[w],M*w)),a[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ta=class extends bi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),y=Math.sin(this.aRotation),g=h-this.aX,M=u-this.aY;h=g*d-M*y+this.aX,u=g*y+M*d+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kc=class extends Ta{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bf(){let i=0,t=0,e=0,n=0;function s(r,a,l,h){i=r,t=l,e=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,u){s(a,l,u*(l-r),u*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,u,d,y){let g=(a-r)/u-(l-r)/(u+d)+(l-a)/d,M=(l-a)/d-(h-a)/(d+y)+(h-l)/y;g*=d,M*=d,s(a,l,g,M)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var Gm=new Z,Wm=new Z,Dd=new bf,Nd=new bf,Ud=new bf,Qc=class extends bi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let u,d;this.closed||l>0?u=s[(l-1)%r]:(Wm.subVectors(s[0],s[1]).add(s[0]),u=Wm);let y=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(Gm.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Gm),this.curveType==="centripetal"||this.curveType==="chordal"){let M=this.curveType==="chordal"?.5:.25,w=Math.pow(u.distanceToSquared(y),M),D=Math.pow(y.distanceToSquared(g),M),x=Math.pow(g.distanceToSquared(d),M);D<1e-4&&(D=1),w<1e-4&&(w=D),x<1e-4&&(x=D),Dd.initNonuniformCatmullRom(u.x,y.x,g.x,d.x,w,D,x),Nd.initNonuniformCatmullRom(u.y,y.y,g.y,d.y,w,D,x),Ud.initNonuniformCatmullRom(u.z,y.z,g.z,d.z,w,D,x)}else this.curveType==="catmullrom"&&(Dd.initCatmullRom(u.x,y.x,g.x,d.x,this.tension),Nd.initCatmullRom(u.y,y.y,g.y,d.y,this.tension),Ud.initCatmullRom(u.z,y.z,g.z,d.z,this.tension));return n.set(Dd.calc(h),Nd.calc(h),Ud.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,h=i*l;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*l+r*i+e}function Gx(i,t){let e=1-i;return e*e*t}function Wx(i,t){return 2*(1-i)*i*t}function Xx(i,t){return i*i*t}function To(i,t,e,n){return Gx(i,t)+Wx(i,e)+Xx(i,n)}function qx(i,t){let e=1-i;return e*e*e*t}function Yx(i,t){let e=1-i;return 3*e*e*i*t}function Zx(i,t){return 3*(1-i)*i*i*t}function Jx(i,t){return i*i*i*t}function Ao(i,t,e,n,s){return qx(i,t)+Yx(i,e)+Zx(i,n)+Jx(i,s)}var Go=class extends bi{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Ao(t,s.x,r.x,a.x,l.x),Ao(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},th=class extends bi{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Ao(t,s.x,r.x,a.x,l.x),Ao(t,s.y,r.y,a.y,l.y),Ao(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wo=class extends bi{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eh=class extends bi{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends bi{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(To(t,s.x,r.x,a.x),To(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nh=class extends bi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(To(t,s.x,r.x,a.x),To(t,s.y,r.y,a.y),To(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,h=s[a===0?a:a-1],u=s[a],d=s[a>s.length-2?s.length-1:a+1],y=s[a>s.length-3?s.length-1:a+2];return n.set(Xm(l,h.x,u.x,d.x,y.x),Xm(l,h.y,u.y,d.y,y.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},Gd=Object.freeze({__proto__:null,ArcCurve:Kc,CatmullRomCurve3:Qc,CubicBezierCurve:Go,CubicBezierCurve3:th,EllipseCurve:Ta,LineCurve:Wo,LineCurve3:eh,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:nh,SplineCurve:qo}),ih=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],h=l.getLength(),u=h===0?0:1-a/h;return l.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(l);for(let u=0;u<h.length;u++){let d=h[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gd[s.type]().fromJSON(s))}return this}},Rr=class extends ih{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wo(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Xo(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Go(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new qo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+l,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,h){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,s,r,a,l,h),this}absellipse(t,e,n,s,r,a,l,h){let u=new Ta(t,e,n,s,r,a,l,h);if(this.curves.length>0){let y=u.getPoint(0);y.equals(this.currentPoint)||this.lineTo(y.x,y.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Aa=class extends Rr{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}};function jx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=G0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,u;if(n&&(r=nv(i,t,r,e)),i.length>80*e){l=i[0],h=i[1];let d=l,y=h;for(let g=e;g<s;g+=e){let M=i[g],w=i[g+1];M<l&&(l=M),w<h&&(h=w),M>d&&(d=M),w>y&&(y=w)}u=Math.max(d-l,y-h),u=u!==0?32767/u:0}return Yo(r,a,e,l,h,u,0),a}function G0(i,t,e,n,s){let r;if(s===fv(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=qm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=qm(a/n|0,i[a],i[a+1],r);return r&&Ca(r,r.next)&&(Jo(r),r=r.next),r}function Ir(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ca(e,e.next)||yn(e.prev,e,e.next)===0)){if(Jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ov(i,n,s,r);let l=i;for(;i.prev!==i.next;){let h=i.prev,u=i.next;if(r?Qx(i,n,s,r):Kx(i)){t.push(h.i,i.i,u.i),Jo(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=tv(Ir(i),t),Yo(i,t,e,n,s,r,2)):a===2&&ev(i,t,e,n,s,r):Yo(Ir(i),t,e,n,s,r,1);break}}}function Kx(i){let t=i.prev,e=i,n=i.next;if(yn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,h=e.y,u=n.y,d=Math.min(s,r,a),y=Math.min(l,h,u),g=Math.max(s,r,a),M=Math.max(l,h,u),w=n.next;for(;w!==t;){if(w.x>=d&&w.x<=g&&w.y>=y&&w.y<=M&&bo(s,l,r,h,a,u,w.x,w.y)&&yn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function Qx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(yn(s,r,a)>=0)return!1;let l=s.x,h=r.x,u=a.x,d=s.y,y=r.y,g=a.y,M=Math.min(l,h,u),w=Math.min(d,y,g),D=Math.max(l,h,u),x=Math.max(d,y,g),m=Wd(M,w,t,e,n),$=Wd(D,x,t,e,n),z=i.prevZ,L=i.nextZ;for(;z&&z.z>=m&&L&&L.z<=$;){if(z.x>=M&&z.x<=D&&z.y>=w&&z.y<=x&&z!==s&&z!==a&&bo(l,d,h,y,u,g,z.x,z.y)&&yn(z.prev,z,z.next)>=0||(z=z.prevZ,L.x>=M&&L.x<=D&&L.y>=w&&L.y<=x&&L!==s&&L!==a&&bo(l,d,h,y,u,g,L.x,L.y)&&yn(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;z&&z.z>=m;){if(z.x>=M&&z.x<=D&&z.y>=w&&z.y<=x&&z!==s&&z!==a&&bo(l,d,h,y,u,g,z.x,z.y)&&yn(z.prev,z,z.next)>=0)return!1;z=z.prevZ}for(;L&&L.z<=$;){if(L.x>=M&&L.x<=D&&L.y>=w&&L.y<=x&&L!==s&&L!==a&&bo(l,d,h,y,u,g,L.x,L.y)&&yn(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function tv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ca(n,s)&&X0(n,e,e.next,s)&&Zo(n,s)&&Zo(s,n)&&(t.push(n.i,e.i,s.i),Jo(e),Jo(e.next),e=i=s),e=e.next}while(e!==i);return Ir(e)}function ev(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&hv(a,l)){let h=q0(a,l);a=Ir(a,a.next),h=Ir(h,h.next),Yo(a,t,e,n,s,r,0),Yo(h,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function nv(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,h=r<a-1?t[r+1]*n:i.length,u=G0(i,l,h,n,!1);u===u.next&&(u.steiner=!0),s.push(cv(u))}s.sort(iv);for(let r=0;r<s.length;r++)e=sv(s[r],e);return e}function iv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function sv(i,t){let e=rv(i,t);if(!e)return t;let n=q0(e,i);return Ir(n,n.next),Ir(e,e.next)}function rv(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ca(i,e))return e;do{if(Ca(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let y=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(y<=n&&y>r&&(r=y,a=e.x<e.next.x?e:e.next,y===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,h=a.x,u=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&W0(s<u?n:r,s,h,u,s<u?r:n,s,e.x,e.y)){let y=Math.abs(s-e.y)/(n-e.x);Zo(e,i)&&(y<d||y===d&&(e.x>a.x||e.x===a.x&&av(a,e)))&&(a=e,d=y)}e=e.next}while(e!==l);return a}function av(i,t){return yn(i.prev,i,t.prev)<0&&yn(t.next,i,i.next)<0}function ov(i,t,e,n){let s=i;do s.z===0&&(s.z=Wd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lv(s)}function lv(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let u=0;u<e&&(l++,a=a.nextZ,!!a);u++);let h=e;for(;l>0||h>0&&a;)l!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Wd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function W0(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function bo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&W0(i,t,e,n,s,r,a,l)}function hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uv(i,t)&&(Zo(i,t)&&Zo(t,i)&&dv(i,t)&&(yn(i.prev,i,t.prev)||yn(i,t.prev,t))||Ca(i,t)&&yn(i.prev,i,i.next)>0&&yn(t.prev,t,t.next)>0)}function yn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ca(i,t){return i.x===t.x&&i.y===t.y}function X0(i,t,e,n){let s=Ac(yn(i,t,e)),r=Ac(yn(i,t,n)),a=Ac(yn(e,n,i)),l=Ac(yn(e,n,t));return!!(s!==r&&a!==l||s===0&&Tc(i,e,t)||r===0&&Tc(i,n,t)||a===0&&Tc(e,i,n)||l===0&&Tc(e,t,n))}function Tc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ac(i){return i>0?1:i<0?-1:0}function uv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&X0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zo(i,t){return yn(i.prev,i,i.next)<0?yn(i,t,i.next)>=0&&yn(i,i.prev,t)>=0:yn(i,t,i.prev)<0||yn(i,i.next,t)<0}function dv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function q0(i,t){let e=Xd(i.i,i.x,i.y),n=Xd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qm(i,t,e,n){let s=Xd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var qd=class{static triangulate(t,e,n=2){return jx(t,e,n)}},br=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ym(t),Zm(n,t);let a=t.length;e.forEach(Ym);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,Zm(n,e[h]);let l=qd.triangulate(n,s);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function Ym(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var jo=class i extends bn{constructor(t=new Aa([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];a(u)}this.setAttribute("position",new Mn(s,3)),this.setAttribute("uv",new Mn(r,2)),this.computeVertexNormals();function a(l){let h=[],u=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,y=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,M=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:M-.1,D=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,$=e.UVGenerator!==void 0?e.UVGenerator:pv,z,L=!1,T,k,W,C;if(m){z=m.getSpacedPoints(d),L=!0,g=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,nt),k=new Z,W=new Z,C=new Z}g||(x=0,M=0,w=0,D=0);let O=l.extractPoints(u),G=O.shape,X=O.holes;if(!br.isClockWise(G)){G=G.reverse();for(let nt=0,Rt=X.length;nt<Rt;nt++){let V=X[nt];br.isClockWise(V)&&(X[nt]=V.reverse())}}function ht(nt){let V=10000000000000001e-36,Pt=nt[0];for(let Bt=1;Bt<=nt.length;Bt++){let ce=Bt%nt.length,fe=nt[ce],de=fe.x-Pt.x,Ae=fe.y-Pt.y,Y=de*de+Ae*Ae,Oe=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(Pt.x),Math.abs(Pt.y)),Ne=V*Oe*Oe;if(Y<=Ne){nt.splice(ce,1),Bt--;continue}Pt=fe}}ht(G),X.forEach(ht);let j=X.length,et=G;for(let nt=0;nt<j;nt++){let Rt=X[nt];G=G.concat(Rt)}function pt(nt,Rt,V){return Rt||we("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Rt,V)}let gt=G.length;function At(nt,Rt,V){let Pt,Bt,ce,fe=nt.x-Rt.x,de=nt.y-Rt.y,Ae=V.x-nt.x,Y=V.y-nt.y,Oe=fe*fe+de*de,Ne=fe*Y-de*Ae;if(Math.abs(Ne)>Number.EPSILON){let U=Math.sqrt(Oe),E=Math.sqrt(Ae*Ae+Y*Y),it=Rt.x-de/U,lt=Rt.y+fe/U,xt=V.x-Y/E,Lt=V.y+Ae/E,kt=((xt-it)*Y-(Lt-lt)*Ae)/(fe*Y-de*Ae);Pt=it+fe*kt-nt.x,Bt=lt+de*kt-nt.y;let mt=Pt*Pt+Bt*Bt;if(mt<=2)return new $t(Pt,Bt);ce=Math.sqrt(mt/2)}else{let U=!1;fe>Number.EPSILON?Ae>Number.EPSILON&&(U=!0):fe<-Number.EPSILON?Ae<-Number.EPSILON&&(U=!0):Math.sign(de)===Math.sign(Y)&&(U=!0),U?(Pt=-de,Bt=fe,ce=Math.sqrt(Oe)):(Pt=fe,Bt=de,ce=Math.sqrt(Oe/2))}return new $t(Pt/ce,Bt/ce)}let _t=[];for(let nt=0,Rt=et.length,V=Rt-1,Pt=nt+1;nt<Rt;nt++,V++,Pt++)V===Rt&&(V=0),Pt===Rt&&(Pt=0),_t[nt]=At(et[nt],et[V],et[Pt]);let wt=[],bt,zt=_t.concat();for(let nt=0,Rt=j;nt<Rt;nt++){let V=X[nt];bt=[];for(let Pt=0,Bt=V.length,ce=Bt-1,fe=Pt+1;Pt<Bt;Pt++,ce++,fe++)ce===Bt&&(ce=0),fe===Bt&&(fe=0),bt[Pt]=At(V[Pt],V[ce],V[fe]);wt.push(bt),zt=zt.concat(bt)}let te;if(x===0)te=br.triangulateShape(et,X);else{let nt=[],Rt=[];for(let V=0;V<x;V++){let Pt=V/x,Bt=M*Math.cos(Pt*Math.PI/2),ce=w*Math.sin(Pt*Math.PI/2)+D;for(let fe=0,de=et.length;fe<de;fe++){let Ae=pt(et[fe],_t[fe],ce);Ut(Ae.x,Ae.y,-Bt),Pt===0&&nt.push(Ae)}for(let fe=0,de=j;fe<de;fe++){let Ae=X[fe];bt=wt[fe];let Y=[];for(let Oe=0,Ne=Ae.length;Oe<Ne;Oe++){let U=pt(Ae[Oe],bt[Oe],ce);Ut(U.x,U.y,-Bt),Pt===0&&Y.push(U)}Pt===0&&Rt.push(Y)}}te=br.triangulateShape(nt,Rt)}let Ye=te.length,De=w+D;for(let nt=0;nt<gt;nt++){let Rt=g?pt(G[nt],zt[nt],De):G[nt];L?(W.copy(T.normals[0]).multiplyScalar(Rt.x),k.copy(T.binormals[0]).multiplyScalar(Rt.y),C.copy(z[0]).add(W).add(k),Ut(C.x,C.y,C.z)):Ut(Rt.x,Rt.y,0)}for(let nt=1;nt<=d;nt++)for(let Rt=0;Rt<gt;Rt++){let V=g?pt(G[Rt],zt[Rt],De):G[Rt];L?(W.copy(T.normals[nt]).multiplyScalar(V.x),k.copy(T.binormals[nt]).multiplyScalar(V.y),C.copy(z[nt]).add(W).add(k),Ut(C.x,C.y,C.z)):Ut(V.x,V.y,y/d*nt)}for(let nt=x-1;nt>=0;nt--){let Rt=nt/x,V=M*Math.cos(Rt*Math.PI/2),Pt=w*Math.sin(Rt*Math.PI/2)+D;for(let Bt=0,ce=et.length;Bt<ce;Bt++){let fe=pt(et[Bt],_t[Bt],Pt);Ut(fe.x,fe.y,y+V)}for(let Bt=0,ce=X.length;Bt<ce;Bt++){let fe=X[Bt];bt=wt[Bt];for(let de=0,Ae=fe.length;de<Ae;de++){let Y=pt(fe[de],bt[de],Pt);L?Ut(Y.x,Y.y+z[d-1].y,z[d-1].x+V):Ut(Y.x,Y.y,y+V)}}}Ge(),vt();function Ge(){let nt=s.length/3;if(g){let Rt=0,V=gt*Rt;for(let Pt=0;Pt<Ye;Pt++){let Bt=te[Pt];he(Bt[2]+V,Bt[1]+V,Bt[0]+V)}Rt=d+x*2,V=gt*Rt;for(let Pt=0;Pt<Ye;Pt++){let Bt=te[Pt];he(Bt[0]+V,Bt[1]+V,Bt[2]+V)}}else{for(let Rt=0;Rt<Ye;Rt++){let V=te[Rt];he(V[2],V[1],V[0])}for(let Rt=0;Rt<Ye;Rt++){let V=te[Rt];he(V[0]+gt*d,V[1]+gt*d,V[2]+gt*d)}}n.addGroup(nt,s.length/3-nt,0)}function vt(){let nt=s.length/3,Rt=0;yt(et,Rt),Rt+=et.length;for(let V=0,Pt=X.length;V<Pt;V++){let Bt=X[V];yt(Bt,Rt),Rt+=Bt.length}n.addGroup(nt,s.length/3-nt,1)}function yt(nt,Rt){let V=nt.length;for(;--V>=0;){let Pt=V,Bt=V-1;Bt<0&&(Bt=nt.length-1);for(let ce=0,fe=d+x*2;ce<fe;ce++){let de=gt*ce,Ae=gt*(ce+1),Y=Rt+Pt+de,Oe=Rt+Bt+de,Ne=Rt+Bt+Ae,U=Rt+Pt+Ae;jt(Y,Oe,Ne,U)}}}function Ut(nt,Rt,V){h.push(nt),h.push(Rt),h.push(V)}function he(nt,Rt,V){ge(nt),ge(Rt),ge(V);let Pt=s.length/3,Bt=$.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee(Bt[0]),ee(Bt[1]),ee(Bt[2])}function jt(nt,Rt,V,Pt){ge(nt),ge(Rt),ge(Pt),ge(Rt),ge(V),ge(Pt);let Bt=s.length/3,ce=$.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ee(ce[0]),ee(ce[1]),ee(ce[3]),ee(ce[1]),ee(ce[2]),ee(ce[3])}function ge(nt){s.push(h[nt*3+0]),s.push(h[nt*3+1]),s.push(h[nt*3+2])}function ee(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gd[s.type]().fromJSON(s)),new i(n,t.options)}},pv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],h=t[n*3+1],u=t[s*3],d=t[s*3+1];return[new $t(r,a),new $t(l,h),new $t(u,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],h=t[e*3+2],u=t[n*3],d=t[n*3+1],y=t[n*3+2],g=t[s*3],M=t[s*3+1],w=t[s*3+2],D=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-u)?[new $t(a,1-h),new $t(u,1-y),new $t(g,1-w),new $t(D,1-m)]:[new $t(l,1-h),new $t(d,1-y),new $t(M,1-w),new $t(x,1-m)]}};function mv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ko=class i extends bn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),h=Math.floor(s),u=l+1,d=h+1,y=t/l,g=e/h,M=[],w=[],D=[],x=[];for(let m=0;m<d;m++){let $=m*g-a;for(let z=0;z<u;z++){let L=z*y-r;w.push(L,-$,0),D.push(0,0,1),x.push(z/l),x.push(1-m/h)}}for(let m=0;m<h;m++)for(let $=0;$<l;$++){let z=$+u*m,L=$+u*(m+1),T=$+1+u*(m+1),k=$+1+u*m;M.push(z,L,k),M.push(L,T,k)}this.setIndex(M),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(D,3)),this.setAttribute("uv",new Mn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qo=class extends bn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Z,r=new Z;if(t.index!==null){let a=t.attributes.position,l=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,d=h.length;u<d;++u){let y=h[u],g=y.start,M=y.count;for(let w=g,D=g+M;w<D;w+=3)for(let x=0;x<3;x++){let m=l.getX(w+x),$=l.getX(w+(x+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,$),Jm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let u=0;u<3;u++){let d=3*l+u,y=3*l+(u+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,y),Jm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Mn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Jm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Dr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jm(s))s.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ti(i){let t={};for(let e=0;e<i.length;e++){let n=Dr(i[e]);for(let s in n)t[s]=n[s]}return t}function jm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}var xl={clone:Dr,merge:ti},_v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sh=class extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var tl=class extends os{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.combine=yh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rh=class extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ah=class extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ua(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Od(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ks=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oh=class extends Ks{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$d,endingEnd:$d}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],h=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case zd:r=t,l=2*e-n;break;case Vd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case zd:a=t,h=2*n-e;break;case Vd:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(h-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this._offsetPrev,y=this._offsetNext,g=this._weightPrev,M=this._weightNext,w=(n-e)/(s-e),D=w*w,x=D*w,m=-g*x+2*g*D-g*w,$=(1+g)*x+(-1.5-2*g)*D+(-.5+g)*w+1,z=(-1-M)*x+(1.5+M)*D+.5*w,L=M*x-M*D;for(let T=0;T!==l;++T)r[T]=m*a[d+T]+$*a[u+T]+z*a[h+T]+L*a[y+T];return r}},lh=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=(n-e)/(s-e),y=1-d;for(let g=0;g!==l;++g)r[g]=a[u+g]*y+a[h+g]*d;return r}},ch=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hh=class extends Ks{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this.inTangents,y=this.outTangents;if(!d||!y){let w=(n-e)/(s-e),D=1-w;for(let x=0;x!==l;++x)r[x]=a[u+x]*D+a[h+x]*w;return r}let g=l*2,M=t-1;for(let w=0;w!==l;++w){let D=a[u+w],x=a[h+w],m=M*g+w*2,$=y[m],z=y[m+1],L=t*g+w*2,T=d[L],k=d[L+1],W=yv(n,e,$,T,s);r[w]=Y0(W,D,z,k,x)}return r}};function Y0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function vv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function yv(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=Y0(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let h=vv(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-l/h))}return r}var wi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ua(e,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ua(t.times,Array),values:ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Od(t.settings)&&(n.settings={inTangents:ua(t.settings.inTangents,Array),outTangents:ua(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Co:e=this.InterpolantFactoryMethodDiscrete;break;case Vc:e=this.InterpolantFactoryMethodLinear;break;case Pc:e=this.InterpolantFactoryMethodSmooth;break;case kd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return Pc;case this.InterpolantFactoryMethodBezier:return kd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Od(this.settings)&&(Km(this.settings.inTangents,t),Km(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){we("KeyframeTrack: Time is not a valid number.",this,l,h),t=!1;break}if(a!==null&&a>h){we("KeyframeTrack: Out of order keys.",this,l,h,a),t=!1;break}a=h}if(s!==void 0&&lx(s))for(let l=0,h=s.length;l!==h;++l){let u=s[l];if(isNaN(u)){we("KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pc,r=t.length-1,a=1;for(let l=1;l<r;++l){let h=!1,u=t[l],d=t[l+1];if(u!==d&&(l!==1||u!==t[0]))if(s)h=!0;else{let y=l*n,g=y-n,M=y+n;for(let w=0;w!==n;++w){let D=e[y+w];if(D!==e[g+w]||D!==e[M+w]){h=!0;break}}}if(h){if(l!==a){t[a]=t[l];let y=l*n,g=a*n;for(let M=0;M!==n;++M)e[g+M]=e[y+M]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,h=a*n,u=0;u!==n;++u)e[h+u]=e[l+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Od(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Km(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Vc;var Qs=class extends wi{constructor(t,e,n){super(t,e,n)}};Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Co;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}};uh.prototype.ValueTypeName="color";var dh=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}};dh.prototype.ValueTypeName="number";var fh=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-e)/(s-e),u=t*l;for(let d=u+l;u!==d;u+=4)as.slerpFlat(r,0,a,u-l,a,u,h);return r}},el=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fh(this.times,this.values,this.getValueSize(),t)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends wi{constructor(t,e,n){super(t,e,n)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Co;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}};ph.prototype.ValueTypeName="vector";var mh=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,y){return u.push(d,y),this},this.removeHandler=function(d){let y=u.indexOf(d);return y!==-1&&u.splice(y,2),this},this.getHandler=function(d){for(let y=0,g=u.length;y<g;y+=2){let M=u[y],w=u[y+1];if(M.global&&(M.lastIndex=0),M.test(d))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Z0=new mh,gh=class{constructor(t){this.manager=t!==void 0?t:Z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gh.DEFAULT_MATERIAL_NAME="__DEFAULT";var nl=class extends Bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},il=class extends nl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fd=new qe,Qm=new Z,t0=new Z,_h=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qm),t0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(t0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===xa||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),e.multiply(Fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Cc=new Z,Rc=new as,es=new Z,sl=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cc,Rc,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,es.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cc,Rc,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zs=new Z,e0=new $t,n0=new $t,Qn=class extends sl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,e){return this.getViewBounds(t,e0,n0),e.subVectors(n0,e0)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/u,s*=a.width/h,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ra=class extends sl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yd=class extends _h{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rl=class extends nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new Yd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var al=class extends bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var da=-90,fa=1,xh=class extends Bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qn(da,fa,t,e);s.layers=this.layers,this.add(s);let r=new Qn(da,fa,t,e);r.layers=this.layers,this.add(r);let a=new Qn(da,fa,t,e);a.layers=this.layers,this.add(a);let l=new Qn(da,fa,t,e);l.layers=this.layers,this.add(l);let h=new Qn(da,fa,t,e);h.layers=this.layers,this.add(h);let u=new Qn(da,fa,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,h]=e;for(let u of e)this.remove(u);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,h,u,d]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let D=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=D,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(y,g,M),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},vh=class extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ef="\\[\\]\\.:\\/",Sv=new RegExp("["+Ef+"]","g"),Tf="[^"+Ef+"]",Mv="[^"+Ef.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Tf),wv=/(WCOD+)?/.source.replace("WCOD",Mv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tf),Tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tf),Av=new RegExp("^"+bv+wv+Ev+Tv+"$"),Cv=["material","materials","bones","map"],Zd=class{constructor(t,e,n){let s=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(t){let e=Av.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let h=n(l.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;we("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Zd;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V1=new Float32Array(1);var er=class extends Xc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var i0=new qe,ol=class{constructor(t,e,n=0,s=1/0){this.ray=new Er(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):we("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return i0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(i0),this}intersectObject(t,e=!0,n=[]){return Jd(t,this,n,e),n.sort(s0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jd(t[s],this,n,e);return n.sort(s0),n}};function s0(i,t){return i.distance-t.distance}function Jd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Jd(r[a],t,e,!0)}}var jd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var r0=new Z,Ic=new Z,pa=new Z,ma=new Z,Bd=new Z,Rv=new Z,Iv=new Z,ll=class{constructor(t=new Z,e=new Z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){r0.subVectors(t,this.start),Ic.subVectors(this.end,this.start);let n=Ic.dot(Ic);if(n===0)return 0;let r=Ic.dot(r0)/n;return e&&(r=Le(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Rv,n=Iv){let s=10000000000000001e-32,r,a,l=this.start,h=t.start,u=this.end,d=t.end;pa.subVectors(u,l),ma.subVectors(d,h),Bd.subVectors(l,h);let y=pa.dot(pa),g=ma.dot(ma),M=ma.dot(Bd);if(y<=s&&g<=s)return e.copy(l),n.copy(h),e.sub(n),e.dot(e);if(y<=s)r=0,a=M/g,a=Le(a,0,1);else{let w=pa.dot(Bd);if(g<=s)a=0,r=Le(-w/y,0,1);else{let D=pa.dot(ma),x=y*g-D*D;x!==0?r=Le((D*M-w*g)/x,0,1):r=0,a=(D*r+M)/g,a<0?(a=0,r=Le(-w/y,0,1)):a>1&&(a=1,r=Le((D-w)/y,0,1))}}return e.copy(l).addScaledVector(pa,r),n.copy(h).addScaledVector(ma,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Af(i,t,e,n){let s=Pv(n);switch(e){case _f:return i*t;case Ah:return i*t/s.components*s.byteLength;case Ch:return i*t/s.components*s.byteLength;case ar:return i*t*2/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case xf:return i*t*3/s.components*s.byteLength;case Pi:return i*t*4/s.components*s.byteLength;case Ih:return i*t*4/s.components*s.byteLength;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lh:case Nh:return Math.max(i,16)*Math.max(t,8)/4;case Ph:case Dh:return Math.max(i,8)*Math.max(t,8)/2;case Uh:case Oh:case Bh:case kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fh:case gl:case $h:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case eu:case nu:case iu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case su:case ru:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _l:case au:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pv(i){switch(i){case xi:case ff:return{byteLength:1,components:1};case La:case pf:case Zi:return{byteLength:2,components:1};case Eh:case Th:return{byteLength:2,components:4};case Yi:case wh:case Ii:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _g(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dv(i){let t=new WeakMap;function e(l,h){let u=l.array,d=l.usage,y=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let M;if(u instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)M=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=i.SHORT;else if(u instanceof Uint32Array)M=i.UNSIGNED_INT;else if(u instanceof Int32Array)M=i.INT;else if(u instanceof Int8Array)M=i.BYTE;else if(u instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:y}}function n(l,h,u){let d=h.array,y=h.updateRanges;if(i.bindBuffer(u,l),y.length===0)i.bufferSubData(u,0,d);else{y.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<y.length;M++){let w=y[g],D=y[M];D.start<=w.start+w.count+1?w.count=Math.max(w.count,D.start+D.count-w.start):(++g,y[g]=D)}y.length=g+1;for(let M=0,w=y.length;M<w;M++){let D=y[M];i.bufferSubData(u,D.start*d.BYTES_PER_ELEMENT,d,D.start,D.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:s,remove:r,update:a}}var Nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,iy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ry=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ey=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ly=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Nv,alphahash_pars_fragment:Uv,alphamap_fragment:Ov,alphamap_pars_fragment:Fv,alphatest_fragment:Bv,alphatest_pars_fragment:kv,aomap_fragment:$v,aomap_pars_fragment:zv,batching_pars_vertex:Vv,batching_vertex:Hv,begin_vertex:Gv,beginnormal_vertex:Wv,bsdfs:Xv,iridescence_fragment:qv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:Zv,clipping_planes_pars_fragment:Jv,clipping_planes_pars_vertex:jv,clipping_planes_vertex:Kv,color_fragment:Qv,color_pars_fragment:ty,color_pars_vertex:ey,color_vertex:ny,common:iy,cube_uv_reflection_fragment:sy,defaultnormal_vertex:ry,displacementmap_pars_vertex:ay,displacementmap_vertex:oy,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:hy,colorspace_pars_fragment:uy,envmap_fragment:dy,envmap_common_pars_fragment:fy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ty,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:xy,fog_fragment:vy,fog_pars_fragment:yy,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:My,lights_lambert_fragment:by,lights_lambert_pars_fragment:wy,lights_pars_begin:Ey,lights_toon_fragment:Ay,lights_toon_pars_fragment:Cy,lights_phong_fragment:Ry,lights_phong_pars_fragment:Iy,lights_physical_fragment:Py,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Uy,lightprobes_pars_fragment:Oy,logdepthbuf_fragment:Fy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:$y,map_fragment:zy,map_pars_fragment:Vy,map_particle_fragment:Hy,map_particle_pars_fragment:Gy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:qy,morphcolor_vertex:Yy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Jy,morphtarget_vertex:jy,normal_fragment_begin:Ky,normal_fragment_maps:Qy,normal_pars_fragment:tS,normal_pars_vertex:eS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:oS,opaque_fragment:lS,packing:cS,premultiplied_alpha_fragment:hS,project_vertex:uS,dithering_fragment:dS,dithering_pars_fragment:fS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:_S,shadowmap_vertex:xS,shadowmask_pars_fragment:vS,skinbase_vertex:yS,skinning_pars_vertex:SS,skinning_vertex:MS,skinnormal_vertex:bS,specularmap_fragment:wS,specularmap_pars_fragment:ES,tonemapping_fragment:TS,tonemapping_pars_fragment:AS,transmission_fragment:CS,transmission_pars_fragment:RS,uv_pars_fragment:IS,uv_pars_vertex:PS,uv_vertex:LS,worldpos_vertex:DS,background_vert:NS,background_frag:US,backgroundCube_vert:OS,backgroundCube_frag:FS,cube_vert:BS,cube_frag:kS,depth_vert:$S,depth_frag:zS,distance_vert:VS,distance_frag:HS,equirect_vert:GS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:ZS,meshlambert_vert:JS,meshlambert_frag:jS,meshmatcap_vert:KS,meshmatcap_frag:QS,meshnormal_vert:tM,meshnormal_frag:eM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:sM,meshphysical_frag:rM,meshtoon_vert:aM,meshtoon_frag:oM,points_vert:lM,points_frag:cM,shadow_vert:hM,shadow_frag:uM,sprite_vert:dM,sprite_frag:fM},Wt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},oi={basic:{uniforms:ti([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ti([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ti([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ti([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ti([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ti([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ti([Wt.points,Wt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ti([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ti([Wt.common,Wt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ti([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ti([Wt.sprite,Wt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:ti([Wt.common,Wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:ti([Wt.lights,Wt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};oi.physical={uniforms:ti([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var hu={r:0,b:0,g:0},pM=new qe,xg=new Ie;xg.set(-1,0,0,0,1,0,0,0,1);function mM(i,t,e,n,s,r){let a=new xe(0),l=s===!0?0:1,h,u,d=null,y=0,g=null;function M($){let z=$.isScene===!0?$.background:null;if(z&&z.isTexture){let L=$.backgroundBlurriness>0;z=t.get(z,L)}return z}function w($){let z=!1,L=M($);L===null?x(a,l):L&&L.isColor&&(x(L,1),z=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function D($,z){let L=M(z);L&&(L.isCubeTexture||L.mapping===hl)?(u===void 0&&(u=new kn(new Ea(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Dr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,k,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=L,u.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(z.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(xg),u.material.toneMapped=Xe.getTransfer(L.colorSpace)!==an,(d!==L||y!==L.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=L,y=L.version,g=i.toneMapping),u.layers.enableAll(),$.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new kn(new Ko(2,2),new $n({name:"BackgroundMaterial",uniforms:Dr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(L.colorSpace)!==an,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||y!==L.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=L,y=L.version,g=i.toneMapping),h.layers.enableAll(),$.unshift(h,h.geometry,h.material,0,0,null))}function x($,z){$.getRGB(hu,wf(i)),e.buffers.color.setClear(hu.r,hu.g,hu.b,z,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function($,z=1){a.set($),l=z,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function($){l=$,x(a,l)},render:w,addToRenderList:D,dispose:m}}function gM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,a=!1;function l(X,at,ht,j,et){let pt=!1,gt=y(X,j,ht,at);r!==gt&&(r=gt,u(r.object)),pt=M(X,j,ht,et),pt&&w(X,j,ht,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,L(X,at,ht,j),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function h(){return i.createVertexArray()}function u(X){return i.bindVertexArray(X)}function d(X){return i.deleteVertexArray(X)}function y(X,at,ht,j){let et=j.wireframe===!0,pt=n[at.id];pt===void 0&&(pt={},n[at.id]=pt);let gt=X.isInstancedMesh===!0?X.id:0,At=pt[gt];At===void 0&&(At={},pt[gt]=At);let _t=At[ht.id];_t===void 0&&(_t={},At[ht.id]=_t);let wt=_t[et];return wt===void 0&&(wt=g(h()),_t[et]=wt),wt}function g(X){let at=[],ht=[],j=[];for(let et=0;et<e;et++)at[et]=0,ht[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:ht,attributeDivisors:j,object:X,attributes:{},index:null}}function M(X,at,ht,j){let et=r.attributes,pt=at.attributes,gt=0,At=ht.getAttributes();for(let _t in At)if(At[_t].location>=0){let bt=et[_t],zt=pt[_t];if(zt===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(zt=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(zt=X.instanceColor)),bt===void 0||bt.attribute!==zt||zt&&bt.data!==zt.data)return!0;gt++}return r.attributesNum!==gt||r.index!==j}function w(X,at,ht,j){let et={},pt=at.attributes,gt=0,At=ht.getAttributes();for(let _t in At)if(At[_t].location>=0){let bt=pt[_t];bt===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(bt=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(bt=X.instanceColor));let zt={};zt.attribute=bt,bt&&bt.data&&(zt.data=bt.data),et[_t]=zt,gt++}r.attributes=et,r.attributesNum=gt,r.index=j}function D(){let X=r.newAttributes;for(let at=0,ht=X.length;at<ht;at++)X[at]=0}function x(X){m(X,0)}function m(X,at){let ht=r.newAttributes,j=r.enabledAttributes,et=r.attributeDivisors;ht[X]=1,j[X]===0&&(i.enableVertexAttribArray(X),j[X]=1),et[X]!==at&&(i.vertexAttribDivisor(X,at),et[X]=at)}function $(){let X=r.newAttributes,at=r.enabledAttributes;for(let ht=0,j=at.length;ht<j;ht++)at[ht]!==X[ht]&&(i.disableVertexAttribArray(ht),at[ht]=0)}function z(X,at,ht,j,et,pt,gt){gt===!0?i.vertexAttribIPointer(X,at,ht,et,pt):i.vertexAttribPointer(X,at,ht,j,et,pt)}function L(X,at,ht,j){D();let et=j.attributes,pt=ht.getAttributes(),gt=at.defaultAttributeValues;for(let At in pt){let _t=pt[At];if(_t.location>=0){let wt=et[At];if(wt===void 0&&(At==="instanceMatrix"&&X.instanceMatrix&&(wt=X.instanceMatrix),At==="instanceColor"&&X.instanceColor&&(wt=X.instanceColor)),wt!==void 0){let bt=wt.normalized,zt=wt.itemSize,te=t.get(wt);if(te===void 0)continue;let Ye=te.buffer,De=te.type,Ge=te.bytesPerElement,vt=De===i.INT||De===i.UNSIGNED_INT||wt.gpuType===wh;if(wt.isInterleavedBufferAttribute){let yt=wt.data,Ut=yt.stride,he=wt.offset;if(yt.isInstancedInterleavedBuffer){for(let jt=0;jt<_t.locationSize;jt++)m(_t.location+jt,yt.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let jt=0;jt<_t.locationSize;jt++)x(_t.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let jt=0;jt<_t.locationSize;jt++)z(_t.location+jt,zt/_t.locationSize,De,bt,Ut*Ge,(he+zt/_t.locationSize*jt)*Ge,vt)}else{if(wt.isInstancedBufferAttribute){for(let yt=0;yt<_t.locationSize;yt++)m(_t.location+yt,wt.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let yt=0;yt<_t.locationSize;yt++)x(_t.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let yt=0;yt<_t.locationSize;yt++)z(_t.location+yt,zt/_t.locationSize,De,bt,zt*Ge,zt/_t.locationSize*yt*Ge,vt)}}else if(gt!==void 0){let bt=gt[At];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(_t.location,bt);break;case 3:i.vertexAttrib3fv(_t.location,bt);break;case 4:i.vertexAttrib4fv(_t.location,bt);break;default:i.vertexAttrib1fv(_t.location,bt)}}}}$()}function T(){O();for(let X in n){let at=n[X];for(let ht in at){let j=at[ht];for(let et in j){let pt=j[et];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete j[et]}}delete n[X]}}function k(X){if(n[X.id]===void 0)return;let at=n[X.id];for(let ht in at){let j=at[ht];for(let et in j){let pt=j[et];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete j[et]}}delete n[X.id]}function W(X){for(let at in n){let ht=n[at];for(let j in ht){let et=ht[j];if(et[X.id]===void 0)continue;let pt=et[X.id];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete et[X.id]}}}function C(X){for(let at in n){let ht=n[at],j=X.isInstancedMesh===!0?X.id:0,et=ht[j];if(et!==void 0){for(let pt in et){let gt=et[pt];for(let At in gt)d(gt[At].object),delete gt[At];delete et[pt]}delete ht[j],Object.keys(ht).length===0&&delete n[at]}}}function O(){G(),a=!0,r!==s&&(r=s,u(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:O,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:k,releaseStatesOfObject:C,releaseStatesOfProgram:W,initAttributes:D,enableAttribute:x,disableUnusedAttributes:$}}function _M(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let g=0;for(let M=0;M<d;M++)g+=u[M];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function xM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let W=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(W){return!(W!==Pi&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(W){let C=W===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(W!==xi&&W!==Ii&&!C&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=h(u);d!==u&&(ye("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let y=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),$=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:D,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:$,maxVaryings:z,maxFragmentUniforms:L,maxSamples:T,samples:k}}function vM(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Vi,l=new Ie,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){let M=y.length!==0||g||n!==0||s;return s=g,n=y.length,M},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(y,g){e=d(y,g,0)},this.setState=function(y,g,M){let w=y.clippingPlanes,D=y.clipIntersection,x=y.clipShadows,m=i.get(y);if(!s||w===null||w.length===0||r&&!x)r?d(null):u();else{let $=r?0:n,z=$*4,L=m.clippingState||null;h.value=L,L=d(w,g,z,M);for(let T=0;T!==z;++T)L[T]=e[T];m.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=$}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(y,g,M,w){let D=y!==null?y.length:0,x=null;if(D!==0){if(x=h.value,w!==!0||x===null){let m=M+D*4,$=g.matrixWorldInverse;l.getNormalMatrix($),(x===null||x.length<m)&&(x=new Float32Array(m));for(let z=0,L=M;z!==D;++z,L+=4)a.copy(y[z]).applyMatrix4($,l),a.normal.toArray(x,L),x[L+3]=a.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,x}}var Ua=4,yM=6,SM=20,MM=256,vl=new Ra,J0=new xe,Cf=null,Rf=0,If=0,Pf=!1,bM=new Z,Nr=new Z,du=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=bM}=r;Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cf,Rf,If),this._renderer.xr.enabled=Pf,t.scissorTest=!1,Na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Zi,format:Pi,colorSpace:Ro,depthBuffer:!1},s=j0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wM(r)),this._blurMaterial=TM(r,t,e),this._ggxMaterial=EM(r,t,e)}return s}_compileMaterial(t){let e=new kn(new bn,t);this._renderer.compile(e,vl)}_sceneToCubeUV(t,e,n,s,r){let h=new Qn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(J0),y.toneMapping=qi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(s),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kn(new Ea,new Tr({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));let D=this._backgroundBox,x=D.material,m=!1,$=t.background;$?$.isColor&&(x.color.copy($),t.background=null,m=!0):(x.color.copy(J0),m=!0);for(let z=0;z<6;z++){let L=z%3;L===0?(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[z],r.y,r.z)):L===1?(h.up.set(0,0,u[z]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[z],r.z)):(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[z]));let T=this._cubeSize;Na(s,L*T,z>2?T:0,T,T),y.setRenderTarget(s),m&&y.render(D,h),y.render(t,h)}y.toneMapping=M,y.autoClear=g,t.background=$}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ir||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let h=this._cubeSize;Na(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,vl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let h=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),y=Math.sqrt(u*u-d*d),g=u*1.25,M=y*g,{_lodMax:w}=this,D=this._sizeLods[n],x=3*D*(n>w-Ua?n-w+Ua:0),m=4*(this._cubeSize-D);h.envMap.value=t.texture,h.roughness.value=M,h.mipInt.value=w-e,Na(r,x,m,3*D,2*D),s.setRenderTarget(r),s.render(l,vl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=w-n,Na(t,x,m,3*D,2*D),s.setRenderTarget(t),s.render(l,vl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,h=this._lodMeshes[s];h.material=l;let u=l.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],y=3*d*(s>this._lodMax-Ua?s-this._lodMax+Ua:0),g=4*(this._cubeSize-d);Na(e,y,g,3*d,2*d),a.setRenderTarget(e),a.render(h,vl)}};function wM(i){let t=[],e=[],n=i,s=i-Ua+1+yM;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],y=6,g=6,M=3,w=new Float32Array(M*g*y),D=new Float32Array(M*g*y);for(let m=0;m<y;m++){let $=m%3*2/3-1,z=m>2?0:-1,L=[$,z,0,$+2/3,z,0,$+2/3,z+1,0,$,z,0,$+2/3,z+1,0,$,z+1,0];w.set(L,M*g*m);for(let T=0;T<g;T++){let k=d[T*2]*2-1,W=d[T*2+1]*2-1;m===0?Nr.set(1,W,k):m===1?Nr.set(-k,1,-W):m===2?Nr.set(-k,W,1):m===3?Nr.set(-1,W,-k):m===4?Nr.set(-k,-1,W):Nr.set(k,W,-1),Nr.toArray(D,(m*g+T)*M)}}let x=new bn;x.setAttribute("position",new un(w,M)),x.setAttribute("outputDirection",new un(D,M)),e.push(new kn(x,null)),n>Ua&&n--}return{lodMeshes:e,sizeLods:t}}function j0(i,t,e){let n=new gi(i,t,e);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Na(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function EM(i,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function TM(i,t,e){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:SM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function K0(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Q0(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fu=class extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ea(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ai,blending:cs});r.uniforms.tEquirect.value=e;let a=new kn(s,r),l=e.minFilter;return e.minFilter===sr&&(e.minFilter=Wn),new xh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function AM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,M=!1){return g==null?null:M?a(g):r(g)}function r(g){if(g&&g.isTexture){let M=g.mapping;if(M===Sh||M===Mh)if(t.has(g)){let w=t.get(g).texture;return l(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let D=new fu(w.height);return D.fromEquirectangularTexture(i,g),t.set(g,D),g.addEventListener("dispose",u),l(D.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){let M=g.mapping,w=M===Sh||M===Mh,D=M===ir||M===Lr;if(w||D){let x=e.get(g),m=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new du(i)),x=w?n.fromEquirectangular(g,x):n.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,e.set(g,x),x.texture;if(x!==void 0)return x.texture;{let $=g.image;return w&&$&&$.height>0||D&&$&&h($)?(n===null&&(n=new du(i)),x=w?n.fromEquirectangular(g):n.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,e.set(g,x),g.addEventListener("dispose",d),x.texture):null}}}return g}function l(g,M){return M===Sh?g.mapping=ir:M===Mh&&(g.mapping=Lr),g}function h(g){let M=0,w=6;for(let D=0;D<w;D++)g[D]!==void 0&&M++;return M===w}function u(g){let M=g.target;M.removeEventListener("dispose",u);let w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function d(g){let M=g.target;M.removeEventListener("dispose",d);let w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function y(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:y}}function CM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wr("WebGLRenderer: "+n+" extension not supported."),s}}}function RM(i,t,e,n){let s={},r=new WeakMap;function a(y){let g=y.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",a),delete s[g.id];let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(y,g){return s[g.id]===!0||(g.addEventListener("dispose",a),s[g.id]=!0,e.memory.geometries++),g}function h(y){let g=y.attributes;for(let M in g)t.update(g[M],i.ARRAY_BUFFER)}function u(y){let g=[],M=y.index,w=y.attributes.position,D=0;if(w===void 0)return;if(M!==null){let $=M.array;D=M.version;for(let z=0,L=$.length;z<L;z+=3){let T=$[z+0],k=$[z+1],W=$[z+2];g.push(T,k,k,W,W,T)}}else{let $=w.array;D=w.version;for(let z=0,L=$.length/3-1;z<L;z+=3){let T=z+0,k=z+1,W=z+2;g.push(T,k,k,W,W,T)}}let x=new(w.count>=65535?Oo:Uo)(g,1);x.version=D;let m=r.get(y);m&&t.remove(m),r.set(y,x)}function d(y){let g=r.get(y);if(g){let M=y.index;M!==null&&g.version<M.version&&u(y)}else u(y);return r.get(y)}return{get:l,update:h,getWireframeAttribute:d}}function IM(i,t,e){let n;function s(y){n=y}let r,a;function l(y){r=y.type,a=y.bytesPerElement}function h(y,g){i.drawElements(n,g,r,y*a),e.update(g,n,1)}function u(y,g,M){M!==0&&(i.drawElementsInstanced(n,g,r,y*a,M),e.update(g,n,M))}function d(y,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,y,0,M);let D=0;for(let x=0;x<M;x++)D+=g[x];e.update(D,n,1)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function PM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:we("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function LM(i,t,e){let n=new WeakMap,s=new on;function r(a,l,h){let u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,y=d!==void 0?d.length:0,g=n.get(l);if(g===void 0||g.count!==y){let O=function(){W.dispose(),n.delete(l),l.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();let M=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,D=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],$=l.morphAttributes.color||[],z=0;M===!0&&(z=1),w===!0&&(z=2),D===!0&&(z=3);let L=l.attributes.position.count*z,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);let k=new Float32Array(L*T*4*y),W=new Do(k,L,T,y);W.type=Ii,W.needsUpdate=!0;let C=z*4;for(let G=0;G<y;G++){let X=x[G],at=m[G],ht=$[G],j=L*T*4*G;for(let et=0;et<X.count;et++){let pt=et*C;M===!0&&(s.fromBufferAttribute(X,et),k[j+pt+0]=s.x,k[j+pt+1]=s.y,k[j+pt+2]=s.z,k[j+pt+3]=0),w===!0&&(s.fromBufferAttribute(at,et),k[j+pt+4]=s.x,k[j+pt+5]=s.y,k[j+pt+6]=s.z,k[j+pt+7]=0),D===!0&&(s.fromBufferAttribute(ht,et),k[j+pt+8]=s.x,k[j+pt+9]=s.y,k[j+pt+10]=s.z,k[j+pt+11]=ht.itemSize===4?s.w:1)}}g={count:y,texture:W,size:new $t(L,T)},n.set(l,g),l.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let M=0;for(let D=0;D<u.length;D++)M+=u[D];let w=l.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function DM(i,t,e,n,s){let r=new WeakMap;function a(u){let d=s.render.frame,y=u.geometry,g=t.get(u,y);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let M=u.skeleton;r.get(M)!==d&&(M.update(),r.set(M,d))}return g}function l(){r=new WeakMap}function h(u){let d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var NM={[rf]:"LINEAR_TONE_MAPPING",[af]:"REINHARD_TONE_MAPPING",[of]:"CINEON_TONE_MAPPING",[lf]:"ACES_FILMIC_TONE_MAPPING",[hf]:"AGX_TONE_MAPPING",[uf]:"NEUTRAL_TONE_MAPPING",[cf]:"CUSTOM_TONE_MAPPING"};function UM(i,t,e,n,s,r){let a=new gi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,h=null,u=new bn;u.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Mn([0,2,0,0,2,0],2));let d=new sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new kn(u,d),g=new Ra(-1,1,1,-1,0,1),M=null,w=null,D=!1,x,m=null,$=[],z=!1;this.setSize=function(L,T){a.setSize(L,T),l!==null&&l.setSize(L,T),h!==null&&h.setSize(L,T);for(let k=0;k<$.length;k++){let W=$[k];W.setSize&&W.setSize(L,T)}},this.setEffects=function(L){$=L,z=$.length>0&&$[0].isRenderPass===!0;let T=a.width,k=a.height;$.length>0&&l===null&&(l=new gi(T,k,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),h=new gi(T,k,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let W=0;W<$.length;W++){let C=$[W];C.setSize&&C.setSize(T,k)}},this.begin=function(L,T){if(D||L.toneMapping===qi&&$.length===0)return!1;if(m=T,T!==null){let k=T.width,W=T.height;(a.width!==k||a.height!==W)&&this.setSize(k,W)}return z===!1&&L.setRenderTarget(a),x=L.toneMapping,L.toneMapping=qi,!0},this.hasRenderPass=function(){return z},this.end=function(L,T){L.toneMapping=x,D=!0;let k=a,W=l;for(let C=0;C<$.length;C++){let O=$[C];O.enabled!==!1&&(O.render(L,W,k,T),O.needsSwap!==!1&&(k=W,W=W===l?h:l))}if(M!==L.outputColorSpace||w!==L.toneMapping){M=L.outputColorSpace,w=L.toneMapping,d.defines={},Xe.getTransfer(M)===an&&(d.defines.SRGB_TRANSFER="");let C=NM[w];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=k.texture,L.setRenderTarget(m),L.render(y,g),m=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),h!==null&&h.dispose(),u.dispose(),d.dispose()}}var vg=new mi,Nf=new js(1,1),yg=new Do,Sg=new Wc,Mg=new zo,tg=[],eg=[],ng=new Float32Array(16),ig=new Float32Array(9),sg=new Float32Array(4);function Fa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tg[s];if(r===void 0&&(r=new Float32Array(s),tg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gu(i,t){let e=eg[t];e===void 0&&(e=new Int32Array(t),eg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function OM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function FM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),Ln(e,t)}}function BM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),Ln(e,t)}}function kM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),Ln(e,t)}}function $M(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;sg.set(n),i.uniformMatrix2fv(this.addr,!1,sg),Ln(e,n)}}function zM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;ig.set(n),i.uniformMatrix3fv(this.addr,!1,ig),Ln(e,n)}}function VM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;ng.set(n),i.uniformMatrix4fv(this.addr,!1,ng),Ln(e,n)}}function HM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function GM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),Ln(e,t)}}function WM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),Ln(e,t)}}function XM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),Ln(e,t)}}function qM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function YM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),Ln(e,t)}}function ZM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),Ln(e,t)}}function JM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),Ln(e,t)}}function jM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nf.compareFunction=e.isReversedDepthBuffer()?cu:lu,r=Nf):r=vg,e.setTexture2D(t||r,s)}function KM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sg,s)}function QM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mg,s)}function tb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yg,s)}function eb(i){switch(i){case 5126:return OM;case 35664:return FM;case 35665:return BM;case 35666:return kM;case 35674:return $M;case 35675:return zM;case 35676:return VM;case 5124:case 35670:return HM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return YM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(i,t){i.uniform1fv(this.addr,t)}function ib(i,t){let e=Fa(t,this.size,2);i.uniform2fv(this.addr,e)}function sb(i,t){let e=Fa(t,this.size,3);i.uniform3fv(this.addr,e)}function rb(i,t){let e=Fa(t,this.size,4);i.uniform4fv(this.addr,e)}function ab(i,t){let e=Fa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ob(i,t){let e=Fa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lb(i,t){let e=Fa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cb(i,t){i.uniform1iv(this.addr,t)}function hb(i,t){i.uniform2iv(this.addr,t)}function ub(i,t){i.uniform3iv(this.addr,t)}function db(i,t){i.uniform4iv(this.addr,t)}function fb(i,t){i.uniform1uiv(this.addr,t)}function pb(i,t){i.uniform2uiv(this.addr,t)}function mb(i,t){i.uniform3uiv(this.addr,t)}function gb(i,t){i.uniform4uiv(this.addr,t)}function _b(i,t,e){let n=this.cache,s=t.length,r=gu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nf:a=vg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function xb(i,t,e){let n=this.cache,s=t.length,r=gu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sg,r[a])}function vb(i,t,e){let n=this.cache,s=t.length,r=gu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Mg,r[a])}function yb(i,t,e){let n=this.cache,s=t.length,r=gu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yg,r[a])}function Sb(i){switch(i){case 5126:return nb;case 35664:return ib;case 35665:return sb;case 35666:return rb;case 35674:return ab;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return hb;case 35668:case 35672:return ub;case 35669:case 35673:return db;case 5125:return fb;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return yb}}var Uf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eb(e.type)}},Of=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sb(e.type)}},Ff=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Lf=/(\w+)(\])?(\[|\.)?/g;function rg(i,t){i.seq.push(t),i.map[t.id]=t}function Mb(i,t,e){let n=i.name,s=n.length;for(Lf.lastIndex=0;;){let r=Lf.exec(n),a=Lf.lastIndex,l=r[1],h=r[2]==="]",u=r[3];if(h&&(l=l|0),u===void 0||u==="["&&a+2===s){rg(e,u===void 0?new Uf(l,i,t):new Of(l,i,t));break}else{let y=e.map[l];y===void 0&&(y=new Ff(l),rg(e,y)),e=y}}}var Oa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);Mb(l,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ag(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var bb=37297,wb=0;function Eb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var og=new Ie;function Tb(i){Xe._getMatrix(og,Xe.workingColorSpace,i);let t=`mat3( ${og.elements.map(e=>e.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Io:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Eb(i.getShaderSource(t),l)}else return r}function Ab(i,t){let e=Tb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Cb={[rf]:"Linear",[af]:"Reinhard",[of]:"Cineon",[lf]:"ACESFilmic",[hf]:"AgX",[uf]:"Neutral",[cf]:"Custom"};function Rb(i,t){let e=Cb[t];return e===void 0?(ye("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uu=new Z;function Ib(){Xe.getLuminanceCoefficients(uu);let i=uu.x.toFixed(4),t=uu.y.toFixed(4),e=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function Lb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Db(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Sl(i){return i!==""}function cg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(i){return i.replace(Nb,Ob)}var Ub=new Map;function Ob(i,t){let e=Be[t];if(e===void 0){let n=Ub.get(t);if(n!==void 0)e=Be[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bf(e)}var Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(i){return i.replace(Fb,Bb)}function Bb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dg(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var kb={[cl]:"SHADOWMAP_TYPE_PCF",[Ia]:"SHADOWMAP_TYPE_VSM"};function $b(i){return kb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zb={[ir]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function Vb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hb={[Lr]:"ENVMAP_MODE_REFRACTION"};function Gb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wb={[yh]:"ENVMAP_BLENDING_MULTIPLY",[A0]:"ENVMAP_BLENDING_MIX",[C0]:"ENVMAP_BLENDING_ADD"};function Xb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wb[i.combine]||"ENVMAP_BLENDING_NONE"}function qb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,h=$b(e),u=Vb(e),d=Gb(e),y=Xb(e),g=qb(e),M=Pb(e),w=Lb(r),D=s.createProgram(),x,m,$=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Sl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Sl).join(`
`),m.length>0&&(m+=`
`)):(x=[dg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),m=[dg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Be.tonemapping_pars_fragment:"",e.toneMapping!==qi?Rb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Ab("linearToOutputTexel",e.outputColorSpace),Ib(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sl).join(`
`)),a=Bf(a),a=cg(a,e),a=hg(a,e),l=Bf(l),l=cg(l,e),l=hg(l,e),a=ug(a),l=ug(l),e.isRawShaderMaterial!==!0&&($=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let z=$+x+a,L=$+m+l,T=ag(s,s.VERTEX_SHADER,z),k=ag(s,s.FRAGMENT_SHADER,L);s.attachShader(D,T),s.attachShader(D,k),e.index0AttributeName!==void 0?s.bindAttribLocation(D,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(D,0,"position"),s.linkProgram(D);function W(X){if(i.debug.checkShaderErrors){let at=s.getProgramInfoLog(D)||"",ht=s.getShaderInfoLog(T)||"",j=s.getShaderInfoLog(k)||"",et=at.trim(),pt=ht.trim(),gt=j.trim(),At=!0,_t=!0;if(s.getProgramParameter(D,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,D,T,k);else{let wt=lg(s,T,"vertex"),bt=lg(s,k,"fragment");we("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(D,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+et+`
`+wt+`
`+bt)}else et!==""?ye("WebGLProgram: Program Info Log:",et):(pt===""||gt==="")&&(_t=!1);_t&&(X.diagnostics={runnable:At,programLog:et,vertexShader:{log:pt,prefix:x},fragmentShader:{log:gt,prefix:m}})}s.deleteShader(T),s.deleteShader(k),C=new Oa(s,D),O=Db(s,D)}let C;this.getUniforms=function(){return C===void 0&&W(this),C};let O;this.getAttributes=function(){return O===void 0&&W(this),O};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(D,bb)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(D),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wb++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=T,this.fragmentShader=k,this}var Zb=0,kf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $f(t),e.set(t,n)),n}},$f=class{constructor(t){this.id=Zb++,this.code=t,this.usedTimes=0}};function Jb(i){return i===ar||i===gl||i===_l}function jb(i,t,e,n,s,r){let a=new Ma,l=new kf,h=new Set,u=[],d=new Map,y=n.logarithmicDepthBuffer,g=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return h.add(C),C===0?"uv":`uv${C}`}function D(C,O,G,X,at,ht){let j=X.fog,et=at.geometry,pt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,gt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,At=t.get(C.envMap||pt,gt),_t=At&&At.mapping===hl?At.image.height:null,wt=M[C.type];C.precision!==null&&(g=n.getMaxPrecision(C.precision),g!==C.precision&&ye("WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));let bt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,zt=bt!==void 0?bt.length:0,te=0;et.morphAttributes.position!==void 0&&(te=1),et.morphAttributes.normal!==void 0&&(te=2),et.morphAttributes.color!==void 0&&(te=3);let Ye,De,Ge,vt;if(wt){let tn=oi[wt];Ye=tn.vertexShader,De=tn.fragmentShader}else{Ye=C.vertexShader,De=C.fragmentShader;let tn=l.getVertexShaderStage(C),Ze=l.getFragmentShaderStage(C);l.update(C,tn,Ze),Ge=tn.id,vt=Ze.id}let yt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),he=at.isInstancedMesh===!0,jt=at.isBatchedMesh===!0,ge=!!C.map,ee=!!C.matcap,nt=!!At,Rt=!!C.aoMap,V=!!C.lightMap,Pt=!!C.bumpMap&&C.wireframe===!1,Bt=!!C.normalMap,ce=!!C.displacementMap,fe=!!C.emissiveMap,de=!!C.metalnessMap,Ae=!!C.roughnessMap,Y=C.anisotropy>0,Oe=C.clearcoat>0,Ne=C.dispersion>0,U=C.retroreflectivity>0,E=C.iridescence>0,it=C.sheen>0,lt=C.transmission>0,xt=Y&&!!C.anisotropyMap,Lt=Oe&&!!C.clearcoatMap,kt=Oe&&!!C.clearcoatNormalMap,mt=Oe&&!!C.clearcoatRoughnessMap,ut=E&&!!C.iridescenceMap,Xt=E&&!!C.iridescenceThicknessMap,ue=it&&!!C.sheenColorMap,Zt=it&&!!C.sheenRoughnessMap,Ht=!!C.specularMap,oe=!!C.specularColorMap,pe=!!C.specularIntensityMap,Ce=lt&&!!C.transmissionMap,Q=lt&&!!C.thicknessMap,qt=!!C.gradientMap,St=!!C.alphaMap,Gt=C.alphaTest>0,Kt=!!C.alphaHash,Tt=!!C.extensions,re=qi;C.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(re=i.toneMapping);let ne={shaderID:wt,shaderType:C.type,shaderName:C.name,vertexShader:Ye,fragmentShader:De,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:vt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:jt,batchingColor:jt&&at._colorsTexture!==null,instancing:he,instancingColor:he&&at.instanceColor!==null,instancingMorph:he&&at.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:ge,matcap:ee,envMap:nt,envMapMode:nt&&At.mapping,envMapCubeUVHeight:_t,aoMap:Rt,lightMap:V,bumpMap:Pt,normalMap:Bt,displacementMap:ce,emissiveMap:fe,normalMapObjectSpace:Bt&&C.normalMapType===P0,normalMapTangentSpace:Bt&&C.normalMapType===ou,packedNormalMap:Bt&&C.normalMapType===ou&&Jb(C.normalMap.format),metalnessMap:de,roughnessMap:Ae,anisotropy:Y,anisotropyMap:xt,clearcoat:Oe,clearcoatMap:Lt,clearcoatNormalMap:kt,clearcoatRoughnessMap:mt,dispersion:Ne,retroreflection:U,iridescence:E,iridescenceMap:ut,iridescenceThicknessMap:Xt,sheen:it,sheenColorMap:ue,sheenRoughnessMap:Zt,specularMap:Ht,specularColorMap:oe,specularIntensityMap:pe,transmission:lt,transmissionMap:Ce,thicknessMap:Q,gradientMap:qt,opaque:C.transparent===!1&&C.blending===Pa&&C.alphaToCoverage===!1,alphaMap:St,alphaTest:Gt,alphaHash:Kt,combine:C.combine,mapUv:ge&&w(C.map.channel),aoMapUv:Rt&&w(C.aoMap.channel),lightMapUv:V&&w(C.lightMap.channel),bumpMapUv:Pt&&w(C.bumpMap.channel),normalMapUv:Bt&&w(C.normalMap.channel),displacementMapUv:ce&&w(C.displacementMap.channel),emissiveMapUv:fe&&w(C.emissiveMap.channel),metalnessMapUv:de&&w(C.metalnessMap.channel),roughnessMapUv:Ae&&w(C.roughnessMap.channel),anisotropyMapUv:xt&&w(C.anisotropyMap.channel),clearcoatMapUv:Lt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:kt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(C.sheenRoughnessMap.channel),specularMapUv:Ht&&w(C.specularMap.channel),specularColorMapUv:oe&&w(C.specularColorMap.channel),specularIntensityMapUv:pe&&w(C.specularIntensityMap.channel),transmissionMapUv:Ce&&w(C.transmissionMap.channel),thicknessMapUv:Q&&w(C.thicknessMap.channel),alphaMapUv:St&&w(C.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Bt||Y),vertexNormals:!!et.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!et.attributes.uv&&(ge||St),fog:!!j,useFog:C.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||et.attributes.normal===void 0&&Bt===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ut,skinning:at.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:te,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ge&&C.map.isVideoTexture===!0&&Xe.getTransfer(C.map.colorSpace)===an,decodeVideoTextureEmissive:fe&&C.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(C.emissiveMap.colorSpace)===an,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ls,flipSided:C.side===ai,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Tt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&C.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ne.vertexUv1s=h.has(1),ne.vertexUv2s=h.has(2),ne.vertexUv3s=h.has(3),h.clear(),ne}function x(C){let O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(let G in C.defines)O.push(G),O.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(m(O,C),$(O,C),O.push(i.outputColorSpace)),O.push(C.customProgramCacheKey),O.join()}function m(C,O){C.push(O.precision),C.push(O.outputColorSpace),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.mapUv),C.push(O.alphaMapUv),C.push(O.lightMapUv),C.push(O.aoMapUv),C.push(O.bumpMapUv),C.push(O.normalMapUv),C.push(O.displacementMapUv),C.push(O.emissiveMapUv),C.push(O.metalnessMapUv),C.push(O.roughnessMapUv),C.push(O.anisotropyMapUv),C.push(O.clearcoatMapUv),C.push(O.clearcoatNormalMapUv),C.push(O.clearcoatRoughnessMapUv),C.push(O.iridescenceMapUv),C.push(O.iridescenceThicknessMapUv),C.push(O.sheenColorMapUv),C.push(O.sheenRoughnessMapUv),C.push(O.specularMapUv),C.push(O.specularColorMapUv),C.push(O.specularIntensityMapUv),C.push(O.transmissionMapUv),C.push(O.thicknessMapUv),C.push(O.combine),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numSunLights),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numSpotLightMaps),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numSunLightShadows),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.numSpotLightShadowsWithMaps),C.push(O.numLightProbes),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection),C.push(O.depthPacking)}function $(C,O){a.disableAll(),O.instancing&&a.enable(0),O.instancingColor&&a.enable(1),O.instancingMorph&&a.enable(2),O.matcap&&a.enable(3),O.envMap&&a.enable(4),O.normalMapObjectSpace&&a.enable(5),O.normalMapTangentSpace&&a.enable(6),O.clearcoat&&a.enable(7),O.iridescence&&a.enable(8),O.alphaTest&&a.enable(9),O.vertexColors&&a.enable(10),O.vertexAlphas&&a.enable(11),O.vertexUv1s&&a.enable(12),O.vertexUv2s&&a.enable(13),O.vertexUv3s&&a.enable(14),O.vertexTangents&&a.enable(15),O.anisotropy&&a.enable(16),O.alphaHash&&a.enable(17),O.batching&&a.enable(18),O.dispersion&&a.enable(19),O.retroreflection&&a.enable(24),O.batchingColor&&a.enable(20),O.gradientMap&&a.enable(21),O.packedNormalMap&&a.enable(22),O.vertexNormals&&a.enable(23),C.push(a.mask),a.disableAll(),O.fog&&a.enable(0),O.useFog&&a.enable(1),O.flatShading&&a.enable(2),O.logarithmicDepthBuffer&&a.enable(3),O.reversedDepthBuffer&&a.enable(4),O.skinning&&a.enable(5),O.morphTargets&&a.enable(6),O.morphNormals&&a.enable(7),O.morphColors&&a.enable(8),O.premultipliedAlpha&&a.enable(9),O.shadowMapEnabled&&a.enable(10),O.doubleSided&&a.enable(11),O.flipSided&&a.enable(12),O.useDepthPacking&&a.enable(13),O.dithering&&a.enable(14),O.transmission&&a.enable(15),O.sheen&&a.enable(16),O.opaque&&a.enable(17),O.pointsUvs&&a.enable(18),O.decodeVideoTexture&&a.enable(19),O.decodeVideoTextureEmissive&&a.enable(20),O.alphaToCoverage&&a.enable(21),O.numLightProbeGrids>0&&a.enable(22),O.hasPositionAttribute&&a.enable(23),C.push(a.mask)}function z(C){let O=M[C.type],G;if(O){let X=oi[O];G=xl.clone(X.uniforms)}else G=C.uniforms;return G}function L(C,O){let G=d.get(O);return G!==void 0?++G.usedTimes:(G=new Yb(i,O,C,s),u.push(G),d.set(O,G)),G}function T(C){if(--C.usedTimes===0){let O=u.indexOf(C);u[O]=u[u.length-1],u.pop(),d.delete(C.cacheKey),C.destroy()}}function k(C){l.remove(C)}function W(){l.dispose()}return{getParameters:D,getProgramCacheKey:x,getUniforms:z,acquireProgram:L,releaseProgram:T,releaseShaderCache:k,programs:u,dispose:W}}function Kb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,h){i.get(a)[l]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function l(g,M,w,D,x,m){let $=i[t];return $===void 0?($={id:g.id,object:g,geometry:M,material:w,materialVariant:a(g),groupOrder:D,renderOrder:g.renderOrder,z:x,group:m},i[t]=$):($.id=g.id,$.object=g,$.geometry=M,$.material=w,$.materialVariant=a(g),$.groupOrder=D,$.renderOrder=g.renderOrder,$.z=x,$.group=m),t++,$}function h(g,M,w,D,x,m,$){$.reversedDepth===!0&&(x=-x);let z=l(g,M,w,D,x,m);w.transmission>0?n.push(z):w.transparent===!0?s.push(z):e.push(z)}function u(g,M,w,D,x,m){let $=l(g,M,w,D,x,m);w.transmission>0?n.unshift($):w.transparent===!0?s.unshift($):e.unshift($)}function d(g,M){e.length>1&&e.sort(g||Qb),n.length>1&&n.sort(M||fg),s.length>1&&s.sort(M||fg)}function y(){for(let g=t,M=i.length;g<M;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:y,sort:d}}function t1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new pg,i.set(n,[a])):s>=r.length?(a=new pg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new xe};break;case"SpotLight":e={position:new Z,direction:new Z,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function n1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i1=0;function s1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r1(i){let t=new e1,e=n1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Z);let s=new Z,r=new qe,a=new qe;function l(u){let d=0,y=0,g=0;for(let at=0;at<9;at++)n.probe[at].set(0,0,0);let M=0,w=0,D=0,x=0,m=0,$=0,z=0,L=0,T=0,k=0,W=0,C=0,O=0,G=0;u.sort(s1);for(let at=0,ht=u.length;at<ht;at++){let j=u[at],et=j.color,pt=j.intensity,gt=j.distance,At=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===ar?At=j.shadow.map.texture:At=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)d+=et.r*pt,y+=et.g*pt,g+=et.b*pt;else if(j.isLightProbe){for(let _t=0;_t<9;_t++)n.probe[_t].addScaledVector(j.sh.coefficients[_t],pt);G++}else if(j.isSunLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[w]=bt,n.sunShadowMap[w]=At;let zt=wt.getViewportCount();for(let te=0;te<zt;te++)n.sunShadowMatrix[D+te]=wt.getMatrix(te),n.sunShadowCascade[D+te]=wt._cascadeData[te];D+=zt,w++}n.sun[M]=_t,M++}else if(j.isDirectionalLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.directionalShadow[x]=bt,n.directionalShadowMap[x]=At,n.directionalShadowMatrix[x]=j.shadow.matrix,T++}n.directional[x]=_t,x++}else if(j.isSpotLight){let _t=t.get(j);_t.position.setFromMatrixPosition(j.matrixWorld),_t.color.copy(et).multiplyScalar(pt),_t.distance=gt,_t.coneCos=Math.cos(j.angle),_t.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),_t.decay=j.decay,n.spot[$]=_t;let wt=j.shadow;if(j.map&&(n.spotLightMap[C]=j.map,C++,wt.updateMatrices(j),j.castShadow&&O++),n.spotLightMatrix[$]=wt.matrix,j.castShadow){let bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.spotShadow[$]=bt,n.spotShadowMap[$]=At,W++}$++}else if(j.isRectAreaLight){let _t=t.get(j);_t.color.copy(et).multiplyScalar(pt),_t.halfWidth.set(j.width*.5,0,0),_t.halfHeight.set(0,j.height*.5,0),n.rectArea[z]=_t,z++}else if(j.isPointLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),_t.distance=j.distance,_t.decay=j.decay,j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,bt.shadowCameraNear=wt.camera.near,bt.shadowCameraFar=wt.camera.far,n.pointShadow[m]=bt,n.pointShadowMap[m]=At,n.pointShadowMatrix[m]=j.shadow.matrix,k++}n.point[m]=_t,m++}else if(j.isHemisphereLight){let _t=t.get(j);_t.skyColor.copy(j.color).multiplyScalar(pt),_t.groundColor.copy(j.groundColor).multiplyScalar(pt),n.hemi[L]=_t,L++}}z>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=y,n.ambient[2]=g;let X=n.hash;(X.sunLength!==M||X.directionalLength!==x||X.pointLength!==m||X.spotLength!==$||X.rectAreaLength!==z||X.hemiLength!==L||X.numSunShadows!==w||X.numDirectionalShadows!==T||X.numPointShadows!==k||X.numSpotShadows!==W||X.numSpotMaps!==C||X.numLightProbes!==G)&&(n.sun.length=M,n.directional.length=x,n.spot.length=$,n.rectArea.length=z,n.point.length=m,n.hemi.length=L,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=D,n.sunShadowCascade.length=D,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=W,n.spotShadowMap.length=W,n.spotLightMatrix.length=W+C-O,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=G,X.sunLength=M,X.directionalLength=x,X.pointLength=m,X.spotLength=$,X.rectAreaLength=z,X.hemiLength=L,X.numSunShadows=w,X.numDirectionalShadows=T,X.numPointShadows=k,X.numSpotShadows=W,X.numSpotMaps=C,X.numLightProbes=G,n.version=i1++)}function h(u,d){let y=0,g=0,M=0,w=0,D=0,x=0,m=d.matrixWorldInverse;for(let $=0,z=u.length;$<z;$++){let L=u[$];if(L.isSunLight){let T=n.sun[y];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(m),y++}else if(L.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(L.isSpotLight){let T=n.spot[w];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),w++}else if(L.isRectAreaLight){let T=n.rectArea[D];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(L.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),D++}else if(L.isPointLight){let T=n.point[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(m),M++}else if(L.isHemisphereLight){let T=n.hemi[x];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:l,setupView:h,state:n}}function mg(i){let t=new r1(i),e=[],n=[],s=[];function r(g){y.camera=g,e.length=0,n.length=0,s.length=0}function a(g){e.push(g)}function l(g){n.push(g)}function h(g){s.push(g)}function u(){t.setup(e)}function d(g){t.setupView(e,g)}let y={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:y,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:h}}function a1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new mg(i),t.set(s,[l])):r>=a.length?(l=new mg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c1=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],h1=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],gg=new qe,yl=new Z,Df=new Z;function u1(i,t,e){let n=new wa,s=new $t,r=new $t,a=new on,l=new rh,h=new ah,u={},d=e.maxTextureSize,y={[nr]:ai,[ai]:nr,[ls]:ls},g=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:o1,fragmentShader:l1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;let w=new bn;w.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let D=new kn(w,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let m=this.type;this.render=function(k,W,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;this.type===l0&&(ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cl);let O=i.getRenderTarget(),G=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),at=i.state;at.setBlending(cs),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let ht=m!==this.type;ht&&W.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(et=>et.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,et=k.length;j<et;j++){let pt=k[j],gt=pt.shadow;if(gt===void 0){ye("WebGLShadowMap:",pt,"has no shadow.");continue}if(gt.autoUpdate===!1&&gt.needsUpdate===!1)continue;s.copy(gt.mapSize);let At=gt.getFrameExtents();s.multiply(At),r.copy(gt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,gt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,gt.mapSize.y=r.y));let _t=i.state.buffers.depth.getReversed();if(gt.camera._reversedDepth=_t,gt.map===null||ht===!0){if(gt.map!==null&&(gt.map.depthTexture!==null&&(gt.map.depthTexture.dispose(),gt.map.depthTexture=null),gt.map.dispose()),this.type===Ia){if(pt.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}gt.map=new gi(s.x,s.y,{format:ar,type:Zi,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),gt.map.texture.name=pt.name+".shadowMap",gt.map.depthTexture=new js(s.x,s.y,Ii),gt.map.depthTexture.name=pt.name+".shadowMapDepth",gt.map.depthTexture.format=ss,gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Fn,gt.map.depthTexture.magFilter=Fn}else pt.isPointLight?(gt.map=new fu(s.x),gt.map.depthTexture=new jc(s.x,Yi)):(gt.map=new gi(s.x,s.y),gt.map.depthTexture=new js(s.x,s.y,Yi)),gt.map.depthTexture.name=pt.name+".shadowMap",gt.map.depthTexture.format=ss,this.type===cl?(gt.map.depthTexture.compareFunction=_t?cu:lu,gt.map.depthTexture.minFilter=Wn,gt.map.depthTexture.magFilter=Wn):(gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Fn,gt.map.depthTexture.magFilter=Fn);gt.camera.updateProjectionMatrix()}gt.map.isWebGLCubeRenderTarget!==!0&&(gt.map.width!==s.x||gt.map.height!==s.y)&&gt.map.setSize(s.x,s.y);let wt=gt.map.isWebGLCubeRenderTarget?6:gt.getViewportCount();pt.isPointLight!==!0&&gt.updateMatrices(pt,C);for(let bt=0;bt<wt;bt++){let zt=gt.getCamera(bt);if(pt.isPointLight){let te=gt.camera,Ye=gt.matrix,De=pt.distance||te.far;De!==te.far&&(te.far=De,te.updateProjectionMatrix()),yl.setFromMatrixPosition(pt.matrixWorld),te.position.copy(yl),Df.copy(te.position),Df.add(c1[bt]),te.up.copy(h1[bt]),te.lookAt(Df),te.updateMatrixWorld(),Ye.makeTranslation(-yl.x,-yl.y,-yl.z),gg.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),gt._frustum.setFromProjectionMatrix(gg,te.coordinateSystem,te.reversedDepth)}if(gt.map.isWebGLCubeRenderTarget)i.setRenderTarget(gt.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(gt.map),i.clear());let te=gt.getViewport(bt);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),at.viewport(a)}n=gt.getFrustum(bt),L(W,C,zt,pt,this.type)}gt.isPointLightShadow!==!0&&this.type===Ia&&$(gt,C),gt.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(O,G,X)};function $(k,W){let C=t.update(D);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null?k.mapPass=new gi(s.x,s.y,{format:ar,type:Zi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value.set(k.map.width,k.map.height),g.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(W,null,C,g,D,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value.set(k.map.width,k.map.height),M.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(W,null,C,M,D,null)}function z(k,W,C,O){let G=null,X=C.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(X!==void 0)G=X;else if(G=C.isPointLight===!0?h:l,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let at=G.uuid,ht=W.uuid,j=u[at];j===void 0&&(j={},u[at]=j);let et=j[ht];et===void 0&&(et=G.clone(),j[ht]=et,W.addEventListener("dispose",T)),G=et}if(G.visible=W.visible,G.wireframe=W.wireframe,O===Ia?G.side=W.shadowSide!==null?W.shadowSide:W.side:G.side=W.shadowSide!==null?W.shadowSide:y[W.side],G.alphaMap=W.alphaMap,G.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,G.map=W.map,G.clipShadows=W.clipShadows,G.clippingPlanes=W.clippingPlanes,G.clipIntersection=W.clipIntersection,G.displacementMap=W.displacementMap,G.displacementScale=W.displacementScale,G.displacementBias=W.displacementBias,G.wireframeLinewidth=W.wireframeLinewidth,G.linewidth=W.linewidth,C.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let at=i.properties.get(G);at.light=C}return G}function L(k,W,C,O,G){if(k.visible===!1)return;if(k.layers.test(W.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&G===Ia)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,k.matrixWorld);let ht=t.update(k),j=k.material;if(Array.isArray(j)){let et=ht.groups;for(let pt=0,gt=et.length;pt<gt;pt++){let At=et[pt],_t=j[At.materialIndex];if(_t&&_t.visible){let wt=z(k,_t,O,G);k.onBeforeShadow(i,k,W,C,ht,wt,At),i.renderBufferDirect(C,null,ht,wt,k,At),k.onAfterShadow(i,k,W,C,ht,wt,At)}}}else if(j.visible){let et=z(k,j,O,G);k.onBeforeShadow(i,k,W,C,ht,et,null),i.renderBufferDirect(C,null,ht,et,k,null),k.onAfterShadow(i,k,W,C,ht,et,null)}}let at=k.children;for(let ht=0,j=at.length;ht<j;ht++)L(at[ht],W,C,O,G)}function T(k){k.target.removeEventListener("dispose",T);for(let C in u){let O=u[C],G=k.target.uuid;G in O&&(O[G].dispose(),delete O[G])}}}function d1(i,t){function e(){let Q=!1,qt=new on,St=null,Gt=new on(0,0,0,0);return{setMask:function(Kt){St!==Kt&&!Q&&(i.colorMask(Kt,Kt,Kt,Kt),St=Kt)},setLocked:function(Kt){Q=Kt},setClear:function(Kt,Tt,re,ne,tn){tn===!0&&(Kt*=ne,Tt*=ne,re*=ne),qt.set(Kt,Tt,re,ne),Gt.equals(qt)===!1&&(i.clearColor(Kt,Tt,re,ne),Gt.copy(qt))},reset:function(){Q=!1,St=null,Gt.set(-1,0,0,0)}}}function n(){let Q=!1,qt=!1,St=null,Gt=null,Kt=null;return{setReversed:function(Tt){if(qt!==Tt){let re=t.get("EXT_clip_control");Tt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),qt=Tt;let ne=Kt;Kt=null,this.setClear(ne)}},getReversed:function(){return qt},setTest:function(Tt){Tt?yt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Tt){St!==Tt&&!Q&&(i.depthMask(Tt),St=Tt)},setFunc:function(Tt){if(qt&&(Tt=V0[Tt]),Gt!==Tt){switch(Tt){case Dc:i.depthFunc(i.NEVER);break;case Nc:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case _a:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case Bc:i.depthFunc(i.GREATER);break;case kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Gt=Tt}},setLocked:function(Tt){Q=Tt},setClear:function(Tt){Kt!==Tt&&(Kt=Tt,qt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){Q=!1,St=null,Gt=null,Kt=null,qt=!1}}}function s(){let Q=!1,qt=null,St=null,Gt=null,Kt=null,Tt=null,re=null,ne=null,tn=null;return{setTest:function(Ze){Q||(Ze?yt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ze){qt!==Ze&&!Q&&(i.stencilMask(Ze),qt=Ze)},setFunc:function(Ze,Vn,ci){(St!==Ze||Gt!==Vn||Kt!==ci)&&(i.stencilFunc(Ze,Vn,ci),St=Ze,Gt=Vn,Kt=ci)},setOp:function(Ze,Vn,ci){(Tt!==Ze||re!==Vn||ne!==ci)&&(i.stencilOp(Ze,Vn,ci),Tt=Ze,re=Vn,ne=ci)},setLocked:function(Ze){Q=Ze},setClear:function(Ze){tn!==Ze&&(i.clearStencil(Ze),tn=Ze)},reset:function(){Q=!1,qt=null,St=null,Gt=null,Kt=null,Tt=null,re=null,ne=null,tn=null}}}let r=new e,a=new n,l=new s,h=new WeakMap,u=new WeakMap,d={},y={},g={},M=new WeakMap,w=[],D=null,x=!1,m=null,$=null,z=null,L=null,T=null,k=null,W=null,C=new xe(0,0,0),O=0,G=!1,X=null,at=null,ht=null,j=null,et=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),gt=!1,At=0,_t=i.getParameter(i.VERSION);_t.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(_t)[1]),gt=At>=1):_t.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),gt=At>=2);let wt=null,bt={},zt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Ye=new on().fromArray(zt),De=new on().fromArray(te);function Ge(Q,qt,St,Gt){let Kt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Q,Tt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<St;re++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,Gt,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(qt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return Tt}let vt={};vt[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),yt(i.DEPTH_TEST),a.setFunc(_a),Pt(!1),Bt(Kd),yt(i.CULL_FACE),Rt(cs);function yt(Q){d[Q]!==!0&&(i.enable(Q),d[Q]=!0)}function Ut(Q){d[Q]!==!1&&(i.disable(Q),d[Q]=!1)}function he(Q,qt){return g[Q]!==qt?(i.bindFramebuffer(Q,qt),g[Q]=qt,Q===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=qt),Q===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function jt(Q,qt){let St=w,Gt=!1;if(Q){St=M.get(qt),St===void 0&&(St=[],M.set(qt,St));let Kt=Q.textures;if(St.length!==Kt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,re=Kt.length;Tt<re;Tt++)St[Tt]=i.COLOR_ATTACHMENT0+Tt;St.length=Kt.length,Gt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Gt=!0);Gt&&i.drawBuffers(St)}function ge(Q){return D!==Q?(i.useProgram(Q),D=Q,!0):!1}let ee={[Pr]:i.FUNC_ADD,[h0]:i.FUNC_SUBTRACT,[u0]:i.FUNC_REVERSE_SUBTRACT};ee[d0]=i.MIN,ee[f0]=i.MAX;let nt={[p0]:i.ZERO,[m0]:i.ONE,[g0]:i.SRC_COLOR,[nf]:i.SRC_ALPHA,[M0]:i.SRC_ALPHA_SATURATE,[y0]:i.DST_COLOR,[x0]:i.DST_ALPHA,[_0]:i.ONE_MINUS_SRC_COLOR,[sf]:i.ONE_MINUS_SRC_ALPHA,[S0]:i.ONE_MINUS_DST_COLOR,[v0]:i.ONE_MINUS_DST_ALPHA,[b0]:i.CONSTANT_COLOR,[w0]:i.ONE_MINUS_CONSTANT_COLOR,[E0]:i.CONSTANT_ALPHA,[T0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(Q,qt,St,Gt,Kt,Tt,re,ne,tn,Ze){if(Q===cs){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(yt(i.BLEND),x=!0),Q!==c0){if(Q!==m||Ze!==G){if(($!==Pr||T!==Pr)&&(i.blendEquation(i.FUNC_ADD),$=Pr,T=Pr),Ze)switch(Q){case Pa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qd:i.blendFunc(i.ONE,i.ONE);break;case tf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ef:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:we("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tf:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",Q);break}z=null,L=null,k=null,W=null,C.set(0,0,0),O=0,m=Q,G=Ze}return}Kt=Kt||qt,Tt=Tt||St,re=re||Gt,(qt!==$||Kt!==T)&&(i.blendEquationSeparate(ee[qt],ee[Kt]),$=qt,T=Kt),(St!==z||Gt!==L||Tt!==k||re!==W)&&(i.blendFuncSeparate(nt[St],nt[Gt],nt[Tt],nt[re]),z=St,L=Gt,k=Tt,W=re),(ne.equals(C)===!1||tn!==O)&&(i.blendColor(ne.r,ne.g,ne.b,tn),C.copy(ne),O=tn),m=Q,G=!1}function V(Q,qt){Q.side===ls?Ut(i.CULL_FACE):yt(i.CULL_FACE);let St=Q.side===ai;qt&&(St=!St),Pt(St),Q.blending===Pa&&Q.transparent===!1?Rt(cs):Rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),a.setFunc(Q.depthFunc),a.setTest(Q.depthTest),a.setMask(Q.depthWrite),r.setMask(Q.colorWrite);let Gt=Q.stencilWrite;l.setTest(Gt),Gt&&(l.setMask(Q.stencilWriteMask),l.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),l.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),fe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(Q){X!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),X=Q)}function Bt(Q){Q!==a0?(yt(i.CULL_FACE),Q!==at&&(Q===Kd?i.cullFace(i.BACK):Q===o0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),at=Q}function ce(Q){Q!==ht&&(gt&&i.lineWidth(Q),ht=Q)}function fe(Q,qt,St){Q?(yt(i.POLYGON_OFFSET_FILL),(j!==qt||et!==St)&&(j=qt,et=St,a.getReversed()&&(qt=-qt),i.polygonOffset(qt,St))):Ut(i.POLYGON_OFFSET_FILL)}function de(Q){Q?yt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Ae(Q){Q===void 0&&(Q=i.TEXTURE0+pt-1),wt!==Q&&(i.activeTexture(Q),wt=Q)}function Y(Q,qt,St){St===void 0&&(wt===null?St=i.TEXTURE0+pt-1:St=wt);let Gt=bt[St];Gt===void 0&&(Gt={type:void 0,texture:void 0},bt[St]=Gt),(Gt.type!==Q||Gt.texture!==qt)&&(wt!==St&&(i.activeTexture(St),wt=St),i.bindTexture(Q,qt||vt[Q]),Gt.type=Q,Gt.texture=qt)}function Oe(){let Q=bt[wt];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Ne(){try{i.compressedTexImage2D(...arguments)}catch(Q){we("WebGLState:",Q)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(Q){we("WebGLState:",Q)}}function E(){try{i.texSubImage2D(...arguments)}catch(Q){we("WebGLState:",Q)}}function it(){try{i.texSubImage3D(...arguments)}catch(Q){we("WebGLState:",Q)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){we("WebGLState:",Q)}}function xt(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){we("WebGLState:",Q)}}function Lt(){try{i.texStorage2D(...arguments)}catch(Q){we("WebGLState:",Q)}}function kt(){try{i.texStorage3D(...arguments)}catch(Q){we("WebGLState:",Q)}}function mt(){try{i.texImage2D(...arguments)}catch(Q){we("WebGLState:",Q)}}function ut(){try{i.texImage3D(...arguments)}catch(Q){we("WebGLState:",Q)}}function Xt(Q){return y[Q]!==void 0?y[Q]:i.getParameter(Q)}function ue(Q,qt){y[Q]!==qt&&(i.pixelStorei(Q,qt),y[Q]=qt)}function Zt(Q){Ye.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),Ye.copy(Q))}function Ht(Q){De.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),De.copy(Q))}function oe(Q,qt){let St=u.get(qt);St===void 0&&(St=new WeakMap,u.set(qt,St));let Gt=St.get(Q);Gt===void 0&&(Gt=i.getUniformBlockIndex(qt,Q.name),St.set(Q,Gt))}function pe(Q,qt){let Gt=u.get(qt).get(Q);h.get(qt)!==Gt&&(i.uniformBlockBinding(qt,Gt,Q.__bindingPointIndex),h.set(qt,Gt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},y={},wt=null,bt={},g={},M=new WeakMap,w=[],D=null,x=!1,m=null,$=null,z=null,L=null,T=null,k=null,W=null,C=new xe(0,0,0),O=0,G=!1,X=null,at=null,ht=null,j=null,et=null,Ye.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:yt,disable:Ut,bindFramebuffer:he,drawBuffers:jt,useProgram:ge,setBlending:Rt,setMaterial:V,setFlipSided:Pt,setCullFace:Bt,setLineWidth:ce,setPolygonOffset:fe,setScissorTest:de,activeTexture:Ae,bindTexture:Y,unbindTexture:Oe,compressedTexImage2D:Ne,compressedTexImage3D:U,texImage2D:mt,texImage3D:ut,pixelStorei:ue,getParameter:Xt,updateUBOMapping:oe,uniformBlockBinding:pe,texStorage2D:Lt,texStorage3D:kt,texSubImage2D:E,texSubImage3D:it,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:Zt,viewport:Ht,reset:Ce}}function f1(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $t,d=new WeakMap,y=new Set,g,M=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,E){return w?new OffscreenCanvas(U,E):Po("canvas")}function x(U,E,it){let lt=1,xt=Ne(U);if((xt.width>it||xt.height>it)&&(lt=it/Math.max(xt.width,xt.height)),lt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Lt=Math.floor(lt*xt.width),kt=Math.floor(lt*xt.height);g===void 0&&(g=D(Lt,kt));let mt=E?D(Lt,kt):g;return mt.width=Lt,mt.height=kt,mt.getContext("2d").drawImage(U,0,0,Lt,kt),ye("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Lt+"x"+kt+")."),mt}else return"data"in U&&ye("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function m(U){return U.generateMipmaps}function $(U){i.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(U,E,it,lt,xt,Lt=!1){if(U!==null){if(i[U]!==void 0)return i[U];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let kt;lt&&(kt=t.get("EXT_texture_norm16"),kt||ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=E;if(E===i.RED&&(it===i.FLOAT&&(mt=i.R32F),it===i.HALF_FLOAT&&(mt=i.R16F),it===i.UNSIGNED_BYTE&&(mt=i.R8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.R16_EXT),it===i.SHORT&&kt&&(mt=kt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.R8UI),it===i.UNSIGNED_SHORT&&(mt=i.R16UI),it===i.UNSIGNED_INT&&(mt=i.R32UI),it===i.BYTE&&(mt=i.R8I),it===i.SHORT&&(mt=i.R16I),it===i.INT&&(mt=i.R32I)),E===i.RG&&(it===i.FLOAT&&(mt=i.RG32F),it===i.HALF_FLOAT&&(mt=i.RG16F),it===i.UNSIGNED_BYTE&&(mt=i.RG8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RG16_EXT),it===i.SHORT&&kt&&(mt=kt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RG8UI),it===i.UNSIGNED_SHORT&&(mt=i.RG16UI),it===i.UNSIGNED_INT&&(mt=i.RG32UI),it===i.BYTE&&(mt=i.RG8I),it===i.SHORT&&(mt=i.RG16I),it===i.INT&&(mt=i.RG32I)),E===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),it===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),it===i.UNSIGNED_INT&&(mt=i.RGB32UI),it===i.BYTE&&(mt=i.RGB8I),it===i.SHORT&&(mt=i.RGB16I),it===i.INT&&(mt=i.RGB32I)),E===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),it===i.UNSIGNED_INT&&(mt=i.RGBA32UI),it===i.BYTE&&(mt=i.RGBA8I),it===i.SHORT&&(mt=i.RGBA16I),it===i.INT&&(mt=i.RGBA32I)),E===i.RGB&&(it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RGB16_EXT),it===i.SHORT&&kt&&(mt=kt.RGB16_SNORM_EXT),it===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),it===i.UNSIGNED_INT_10F_11F_11F_REV&&(mt=i.R11F_G11F_B10F)),E===i.RGBA){let ut=Lt?Io:Xe.getTransfer(xt);it===i.FLOAT&&(mt=i.RGBA32F),it===i.HALF_FLOAT&&(mt=i.RGBA16F),it===i.UNSIGNED_BYTE&&(mt=ut===an?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RGBA16_EXT),it===i.SHORT&&kt&&(mt=kt.RGBA16_SNORM_EXT),it===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function T(U,E){let it;return U?E===null||E===Yi||E===Da?it=i.DEPTH24_STENCIL8:E===Ii?it=i.DEPTH32F_STENCIL8:E===La&&(it=i.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===Da?it=i.DEPTH_COMPONENT24:E===Ii?it=i.DEPTH_COMPONENT32F:E===La&&(it=i.DEPTH_COMPONENT16),it}function k(U,E){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function W(U){let E=U.target;E.removeEventListener("dispose",W),O(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&y.delete(E)}function C(U){let E=U.target;E.removeEventListener("dispose",C),X(E)}function O(U){let E=n.get(U);if(E.__webglInit===void 0)return;let it=U.source,lt=M.get(it);if(lt){let xt=lt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&G(U),Object.keys(lt).length===0&&M.delete(it)}n.remove(U)}function G(U){let E=n.get(U);i.deleteTexture(E.__webglTexture);let it=U.source,lt=M.get(it);delete lt[E.__cacheKey],a.memory.textures--}function X(U){let E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let xt=0;xt<E.__webglFramebuffer[lt].length;xt++)i.deleteFramebuffer(E.__webglFramebuffer[lt][xt]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let it=U.textures;for(let lt=0,xt=it.length;lt<xt;lt++){let Lt=n.get(it[lt]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(it[lt])}n.remove(U)}let at=0;function ht(){at=0}function j(){return at}function et(U){at=U}function pt(){let U=at;return U>=s.maxTextures&&ye("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),at+=1,U}function gt(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function At(U,E){let it=n.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){let lt=U.image;if(lt===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(it,U,E);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+E)}function _t(U,E){let it=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Ut(it,U,E);return}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+E)}function wt(U,E){let it=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Ut(it,U,E);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+E)}function bt(U,E){let it=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&it.__version!==U.version){he(it,U,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+E)}let zt={[$c]:i.REPEAT,[ns]:i.CLAMP_TO_EDGE,[zc]:i.MIRRORED_REPEAT},te={[Fn]:i.NEAREST,[R0]:i.NEAREST_MIPMAP_NEAREST,[ul]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[bh]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR},Ye={[D0]:i.NEVER,[B0]:i.ALWAYS,[N0]:i.LESS,[lu]:i.LEQUAL,[U0]:i.EQUAL,[cu]:i.GEQUAL,[O0]:i.GREATER,[F0]:i.NOTEQUAL};function De(U,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===bh||E.magFilter===ul||E.magFilter===sr||E.minFilter===Wn||E.minFilter===bh||E.minFilter===ul||E.minFilter===sr)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,zt[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,zt[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,zt[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==ul&&E.minFilter!==sr||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(U,E){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",W));let lt=E.source,xt=M.get(lt);xt===void 0&&(xt={},M.set(lt,xt));let Lt=gt(E);if(Lt!==U.__cacheKey){xt[Lt]===void 0&&(xt[Lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,it=!0),xt[Lt].usedTimes++;let kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&G(E)),U.__cacheKey=Lt,U.__webglTexture=xt[Lt].texture}return it}function vt(U,E,it){return Math.floor(Math.floor(U/it)/E)}function yt(U,E,it,lt){let Lt=U.updateRanges;if(Lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,it,lt,E.data);else{Lt.sort((ue,Zt)=>ue.start-Zt.start);let kt=0;for(let ue=1;ue<Lt.length;ue++){let Zt=Lt[kt],Ht=Lt[ue],oe=Zt.start+Zt.count,pe=vt(Ht.start,E.width,4),Ce=vt(Zt.start,E.width,4);Ht.start<=oe+1&&pe===Ce&&vt(Ht.start+Ht.count-1,E.width,4)===pe?Zt.count=Math.max(Zt.count,Ht.start+Ht.count-Zt.start):(++kt,Lt[kt]=Ht)}Lt.length=kt+1;let mt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let ue=0,Zt=Lt.length;ue<Zt;ue++){let Ht=Lt[ue],oe=Math.floor(Ht.start/4),pe=Math.ceil(Ht.count/4),Ce=oe%E.width,Q=Math.floor(oe/E.width),qt=pe,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,Ce,Q,qt,St,it,lt,E.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt)}}function Ut(U,E,it){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);let xt=Ge(U,E),Lt=E.source;e.bindTexture(lt,U.__webglTexture,i.TEXTURE0+it);let kt=n.get(Lt);if(Lt.version!==kt.__version||xt===!0){if(e.activeTexture(i.TEXTURE0+it),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let St=Xe.getPrimaries(Xe.workingColorSpace),Gt=E.colorSpace===Ns?null:Xe.getPrimaries(E.colorSpace),Kt=E.colorSpace===Ns||St===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ut=x(E.image,!1,s.maxTextureSize);ut=Oe(E,ut);let Xt=r.convert(E.format,E.colorSpace),ue=r.convert(E.type),Zt=L(E.internalFormat,Xt,ue,E.normalized,E.colorSpace,E.isVideoTexture);De(lt,E);let Ht,oe=E.mipmaps,pe=E.isVideoTexture!==!0,Ce=kt.__version===void 0||xt===!0,Q=Lt.dataReady,qt=k(E,ut);if(E.isDepthTexture)Zt=T(E.format===rr,E.type),Ce&&(pe?e.texStorage2D(i.TEXTURE_2D,1,Zt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Zt,ut.width,ut.height,0,Xt,ue,null));else if(E.isDataTexture)if(oe.length>0){pe&&Ce&&e.texStorage2D(i.TEXTURE_2D,qt,Zt,oe[0].width,oe[0].height);for(let St=0,Gt=oe.length;St<Gt;St++)Ht=oe[St],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Ht.width,Ht.height,Xt,ue,Ht.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Ht.width,Ht.height,0,Xt,ue,Ht.data);E.generateMipmaps=!1}else pe?(Ce&&e.texStorage2D(i.TEXTURE_2D,qt,Zt,ut.width,ut.height),Q&&yt(E,ut,Xt,ue)):e.texImage2D(i.TEXTURE_2D,0,Zt,ut.width,ut.height,0,Xt,ue,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Zt,oe[0].width,oe[0].height,ut.depth);for(let St=0,Gt=oe.length;St<Gt;St++)if(Ht=oe[St],E.format!==Pi)if(Xt!==null)if(pe){if(Q)if(E.layerUpdates.size>0){let Kt=Af(Ht.width,Ht.height,E.format,E.type);for(let Tt of E.layerUpdates){let re=Ht.data.subarray(Tt*Kt/Ht.data.BYTES_PER_ELEMENT,(Tt+1)*Kt/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Tt,Ht.width,Ht.height,1,Xt,re)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Ht.width,Ht.height,ut.depth,Xt,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Ht.width,Ht.height,ut.depth,0,Ht.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Ht.width,Ht.height,ut.depth,Xt,ue,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Ht.width,Ht.height,ut.depth,0,Xt,ue,Ht.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pe&&Ce&&e.texStorage2D(i.TEXTURE_2D,qt,Zt,oe[0].width,oe[0].height);for(let St=0,Gt=oe.length;St<Gt;St++)Ht=oe[St],E.format!==Pi?Xt!==null?pe?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Ht.width,Ht.height,Xt,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Zt,Ht.width,Ht.height,0,Ht.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Ht.width,Ht.height,Xt,ue,Ht.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Ht.width,Ht.height,0,Xt,ue,Ht.data)}else if(E.isDataArrayTexture)if(pe){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Zt,ut.width,ut.height,ut.depth),Q)if(E.layerUpdates.size>0){let St=Af(ut.width,ut.height,E.format,E.type);for(let Gt of E.layerUpdates){let Kt=ut.data.subarray(Gt*St/ut.data.BYTES_PER_ELEMENT,(Gt+1)*St/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Gt,ut.width,ut.height,1,Xt,ue,Kt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Xt,ue,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,ut.width,ut.height,ut.depth,0,Xt,ue,ut.data);else if(E.isData3DTexture)pe?(Ce&&e.texStorage3D(i.TEXTURE_3D,qt,Zt,ut.width,ut.height,ut.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Xt,ue,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,ut.width,ut.height,ut.depth,0,Xt,ue,ut.data);else if(E.isFramebufferTexture){if(Ce)if(pe)e.texStorage2D(i.TEXTURE_2D,qt,Zt,ut.width,ut.height);else{let St=ut.width,Gt=ut.height;for(let Kt=0;Kt<qt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,Zt,St,Gt,0,Xt,ue,null),St>>=1,Gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),ut.parentNode!==St){St.appendChild(ut),y.add(E),St.onpaint=Gt=>{let Kt=Gt.changedElements;for(let Tt of y)Kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Kt=i.RGBA,Tt=i.RGBA,re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Tt,re,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(pe&&Ce){let St=Ne(oe[0]);e.texStorage2D(i.TEXTURE_2D,qt,Zt,St.width,St.height)}for(let St=0,Gt=oe.length;St<Gt;St++)Ht=oe[St],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Xt,ue,Ht):e.texImage2D(i.TEXTURE_2D,St,Zt,Xt,ue,Ht);E.generateMipmaps=!1}else if(pe){if(Ce){let St=Ne(ut);e.texStorage2D(i.TEXTURE_2D,qt,Zt,St.width,St.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,ue,ut)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Xt,ue,ut);m(E)&&$(lt),kt.__version=Lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function he(U,E,it){if(E.image.length!==6)return;let lt=Ge(U,E),xt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+it);let Lt=n.get(xt);if(xt.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+it);let kt=Xe.getPrimaries(Xe.workingColorSpace),mt=E.colorSpace===Ns?null:Xe.getPrimaries(E.colorSpace),ut=E.colorSpace===Ns||kt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,Zt=[];for(let Tt=0;Tt<6;Tt++)!Xt&&!ue?Zt[Tt]=x(E.image[Tt],!0,s.maxCubemapSize):Zt[Tt]=ue?E.image[Tt].image:E.image[Tt],Zt[Tt]=Oe(E,Zt[Tt]);let Ht=Zt[0],oe=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),Ce=L(E.internalFormat,oe,pe,E.normalized,E.colorSpace),Q=E.isVideoTexture!==!0,qt=Lt.__version===void 0||lt===!0,St=xt.dataReady,Gt=k(E,Ht);De(i.TEXTURE_CUBE_MAP,E);let Kt;if(Xt){Q&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ce,Ht.width,Ht.height);for(let Tt=0;Tt<6;Tt++){Kt=Zt[Tt].mipmaps;for(let re=0;re<Kt.length;re++){let ne=Kt[re];E.format!==Pi?oe!==null?Q?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re,0,0,ne.width,ne.height,oe,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re,Ce,ne.width,ne.height,0,ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re,0,0,ne.width,ne.height,oe,pe,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re,Ce,ne.width,ne.height,0,oe,pe,ne.data)}}}else{if(Kt=E.mipmaps,Q&&qt){Kt.length>0&&Gt++;let Tt=Ne(Zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ce,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(ue){Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Zt[Tt].width,Zt[Tt].height,oe,pe,Zt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ce,Zt[Tt].width,Zt[Tt].height,0,oe,pe,Zt[Tt].data);for(let re=0;re<Kt.length;re++){let tn=Kt[re].image[Tt].image;Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re+1,0,0,tn.width,tn.height,oe,pe,tn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re+1,Ce,tn.width,tn.height,0,oe,pe,tn.data)}}else{Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,oe,pe,Zt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ce,oe,pe,Zt[Tt]);for(let re=0;re<Kt.length;re++){let ne=Kt[re];Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re+1,0,0,oe,pe,ne.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,re+1,Ce,oe,pe,ne.image[Tt])}}}m(E)&&$(i.TEXTURE_CUBE_MAP),Lt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function jt(U,E,it,lt,xt,Lt){let kt=r.convert(it.format,it.colorSpace),mt=r.convert(it.type),ut=L(it.internalFormat,kt,mt,it.normalized,it.colorSpace),Xt=n.get(E),ue=n.get(it);if(ue.__renderTarget=E,!Xt.__hasExternalTextures){let Zt=Math.max(1,E.width>>Lt),Ht=Math.max(1,E.height>>Lt);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,Lt,ut,Zt,Ht,E.depth,0,kt,mt,null):e.texImage2D(xt,Lt,ut,Zt,Ht,0,kt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,xt,ue.__webglTexture,0,de(E)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,xt,ue.__webglTexture,Lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(U,E,it){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){let lt=E.depthTexture,xt=lt&&lt.isDepthTexture?lt.type:null,Lt=T(E.stencilBuffer,xt),kt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),Lt,E.width,E.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),Lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,U)}else{let lt=E.textures;for(let xt=0;xt<lt.length;xt++){let Lt=lt[xt],kt=r.convert(Lt.format,Lt.colorSpace),mt=r.convert(Lt.type),ut=L(Lt.internalFormat,kt,mt,Lt.normalized,Lt.colorSpace);Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),ut,E.width,E.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),ut,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ut,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(U,E,it){let lt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xt=n.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",W)),xt.__webglTexture===void 0){xt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),De(i.TEXTURE_CUBE_MAP,E.depthTexture);let Xt=r.convert(E.depthTexture.format),ue=r.convert(E.depthTexture.type),Zt;E.depthTexture.format===ss?Zt=i.DEPTH_COMPONENT24:E.depthTexture.format===rr&&(Zt=i.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Zt,E.width,E.height,0,Xt,ue,null)}}else At(E.depthTexture,0);let Lt=xt.__webglTexture,kt=de(E),mt=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+it:i.TEXTURE_2D,ut=E.depthTexture.format===rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ss)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,mt,Lt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,mt,Lt,0);else if(E.depthTexture.format===rr)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,mt,Lt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,mt,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let E=n.get(U),it=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let lt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){let xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",xt)};lt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=lt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(it)for(let lt=0;lt<6;lt++)ee(E.__webglFramebuffer[lt],U,lt);else{let lt=U.texture.mipmaps;lt&&lt.length>0?ee(E.__webglFramebuffer[0],U,0):ee(E.__webglFramebuffer,U,0)}else if(it){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[lt],U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,Lt)}}else{let lt=U.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,Lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(U,E,it){let lt=n.get(U);E!==void 0&&jt(lt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&nt(U)}function V(U){let E=U.texture,it=n.get(U),lt=n.get(E);U.addEventListener("dispose",C);let xt=U.textures,Lt=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,a.memory.textures++),Lt){it.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer[mt]=[];for(let ut=0;ut<E.mipmaps.length;ut++)it.__webglFramebuffer[mt][ut]=i.createFramebuffer()}else it.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)it.__webglFramebuffer[mt]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(kt)for(let mt=0,ut=xt.length;mt<ut;mt++){let Xt=n.get(xt[mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Ae(U)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let mt=0;mt<xt.length;mt++){let ut=xt[mt];it.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[mt]);let Xt=r.convert(ut.format,ut.colorSpace),ue=r.convert(ut.type),Zt=L(ut.internalFormat,Xt,ue,ut.normalized,ut.colorSpace,U.isXRRenderTarget===!0),Ht=de(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Zt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,it.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(it.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Lt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),De(i.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)jt(it.__webglFramebuffer[mt][ut],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ut);else jt(it.__webglFramebuffer[mt],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(E)&&$(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let mt=0,ut=xt.length;mt<ut;mt++){let Xt=xt[mt],ue=n.get(Xt),Zt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Zt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Zt,ue.__webglTexture),De(Zt,Xt),jt(it.__webglFramebuffer,U,Xt,i.COLOR_ATTACHMENT0+mt,Zt,0),m(Xt)&&$(Zt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,lt.__webglTexture),De(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)jt(it.__webglFramebuffer[ut],U,E,i.COLOR_ATTACHMENT0,mt,ut);else jt(it.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,mt,0);m(E)&&$(mt),e.unbindTexture()}U.depthBuffer&&nt(U)}function Pt(U){let E=U.textures;for(let it=0,lt=E.length;it<lt;it++){let xt=E[it];if(m(xt)){let Lt=z(U),kt=n.get(xt).__webglTexture;e.bindTexture(Lt,kt),$(Lt),e.unbindTexture()}}}let Bt=[],ce=[];function fe(U){if(U.samples>0){if(Ae(U)===!1){let E=U.textures,it=U.width,lt=U.height,xt=i.COLOR_BUFFER_BIT,Lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(U),mt=E.length>1;if(mt)for(let Xt=0;Xt<E.length;Xt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let ut=U.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Xt=0;Xt<E.length;Xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Xt]);let ue=n.get(E[Xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,it,lt,0,0,it,lt,xt,i.NEAREST),h===!0&&(Bt.length=0,ce.length=0,Bt.push(i.COLOR_ATTACHMENT0+Xt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Bt.push(Lt),ce.push(Lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Xt=0;Xt<E.length;Xt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Xt]);let ue=n.get(E[Xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){let E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function de(U){return Math.min(s.maxSamples,U.samples)}function Ae(U){let E=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(U){let E=a.render.frame;d.get(U)!==E&&(d.set(U,E),U.update())}function Oe(U,E){let it=U.colorSpace,lt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==Ro&&it!==Ns&&(Xe.getTransfer(it)===an?(lt!==Pi||xt!==xi)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",it)),E}function Ne(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=pt,this.resetTextureUnits=ht,this.getTextureUnits=j,this.setTextureUnits=et,this.setTexture2D=At,this.setTexture2DArray=_t,this.setTexture3D=wt,this.setTextureCube=bt,this.rebindTextures=Rt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function p1(i,t){function e(n,s=Ns){let r,a=Xe.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Th)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ff)return i.BYTE;if(n===pf)return i.SHORT;if(n===La)return i.UNSIGNED_SHORT;if(n===wh)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Ii)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===_f)return i.ALPHA;if(n===xf)return i.RGB;if(n===Pi)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Ch)return i.RED_INTEGER;if(n===ar)return i.RG;if(n===Rh)return i.RG_INTEGER;if(n===Ih)return i.RGBA_INTEGER;if(n===dl||n===fl||n===pl||n===ml)if(a===an)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ph||n===Lh||n===Dh||n===Nh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===gl||n===$h)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uh||n===Oh)return a===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bh)return r.COMPRESSED_R11_EAC;if(n===kh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gl)return r.COMPRESSED_RG11_EAC;if(n===$h)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh||n===Yh||n===Zh||n===Jh||n===jh||n===Kh||n===Qh||n===tu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eu||n===nu||n===iu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eu)return a===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===ru||n===_l||n===au)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===su)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Da?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kn(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vf=class extends rs{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",h=1,u=null,d=null,y=null,g=null,M=null,w=null,D=typeof XRWebGLBinding<"u",x=new zf,m={},$=e.getContextAttributes(),z=null,L=null,T=[],k=[],W=new $t,C=null,O=null,G=new Qn;G.viewport=new on;let X=new Qn;X.viewport=new on;let at=[G,X],ht=new vh,j=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ba,T[vt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ba,T[vt]=yt),yt.getGripSpace()},this.getHand=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ba,T[vt]=yt),yt.getHandSpace()};function pt(vt){let yt=k.indexOf(vt.inputSource);if(yt===-1)return;let Ut=T[yt];Ut!==void 0&&(Ut.update(vt.inputSource,vt.frame,u||a),Ut.dispatchEvent({type:vt.type,data:vt.inputSource}))}function gt(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",gt),s.removeEventListener("inputsourceschange",At);for(let vt=0;vt<T.length;vt++){let yt=k[vt];yt!==null&&(k[vt]=null,T[vt].disconnect(yt))}j=null,et=null,x.reset();for(let vt in m)delete m[vt];if(t.setRenderTarget(z),M=null,g=null,y=null,s=null,L=null,Ge.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(W.width,W.height,!1),O!==null){let vt=O.camera;vt.fov=O.fov,vt.zoom=O.zoom,vt.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(vt){r=vt,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(vt){l=vt,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(vt){u=vt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&D&&(y=new XRWebGLBinding(s,e)),y},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(vt){if(s=vt,s!==null){if(z=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",gt),s.addEventListener("inputsourceschange",At),$.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(W),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,he=null,jt=null;$.depth&&(jt=$.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=$.stencil?rr:ss,he=$.stencil?Da:Yi);let ge={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};y=this.getBinding(),g=y.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new gi(g.textureWidth,g.textureHeight,{format:Pi,type:xi,depthTexture:new js(g.textureWidth,g.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:$.stencil,colorSpace:t.outputColorSpace,samples:$.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Ut={antialias:$.antialias,alpha:!0,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new gi(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:$.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await s.requestReferenceSpace(l),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function At(vt){for(let yt=0;yt<vt.removed.length;yt++){let Ut=vt.removed[yt],he=k.indexOf(Ut);he>=0&&(k[he]=null,T[he].disconnect(Ut))}for(let yt=0;yt<vt.added.length;yt++){let Ut=vt.added[yt],he=k.indexOf(Ut);if(he===-1){for(let ge=0;ge<T.length;ge++)if(ge>=k.length){k.push(Ut),he=ge;break}else if(k[ge]===null){k[ge]=Ut,he=ge;break}if(he===-1)break}let jt=T[he];jt&&jt.connect(Ut)}}let _t=new Z,wt=new Z;function bt(vt,yt,Ut){_t.setFromMatrixPosition(yt.matrixWorld),wt.setFromMatrixPosition(Ut.matrixWorld);let he=_t.distanceTo(wt),jt=yt.projectionMatrix.elements,ge=Ut.projectionMatrix.elements,ee=jt[14]/(jt[10]-1),nt=jt[14]/(jt[10]+1),Rt=(jt[9]+1)/jt[5],V=(jt[9]-1)/jt[5],Pt=(jt[8]-1)/jt[0],Bt=(ge[8]+1)/ge[0],ce=ee*Pt,fe=ee*Bt,de=he/(-Pt+Bt),Ae=de*-Pt;if(yt.matrixWorld.decompose(vt.position,vt.quaternion,vt.scale),vt.translateX(Ae),vt.translateZ(de),vt.matrixWorld.compose(vt.position,vt.quaternion,vt.scale),vt.matrixWorldInverse.copy(vt.matrixWorld).invert(),jt[10]===-1)vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let Y=ee+de,Oe=nt+de,Ne=ce-Ae,U=fe+(he-Ae),E=Rt*nt/Oe*Y,it=V*nt/Oe*Y;vt.projectionMatrix.makePerspective(Ne,U,E,it,Y,Oe),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert()}}function zt(vt,yt){yt===null?vt.matrixWorld.copy(vt.matrix):vt.matrixWorld.multiplyMatrices(yt.matrixWorld,vt.matrix),vt.matrixWorldInverse.copy(vt.matrixWorld).invert()}this.updateCamera=function(vt){if(s===null)return;let yt=vt.near,Ut=vt.far;x.texture!==null&&(x.depthNear>0&&(yt=x.depthNear),x.depthFar>0&&(Ut=x.depthFar)),ht.near=X.near=G.near=yt,ht.far=X.far=G.far=Ut,(j!==ht.near||et!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),j=ht.near,et=ht.far),ht.layers.mask=vt.layers.mask|6,G.layers.mask=ht.layers.mask&-5,X.layers.mask=ht.layers.mask&-3;let he=vt.parent,jt=ht.cameras;zt(ht,he);for(let ge=0;ge<jt.length;ge++)zt(jt[ge],he);jt.length===2?bt(ht,G,X):ht.projectionMatrix.copy(G.projectionMatrix),O===null&&vt.isPerspectiveCamera&&(O={camera:vt,fov:vt.fov,zoom:vt.zoom}),te(vt,ht,he)};function te(vt,yt,Ut){Ut===null?vt.matrix.copy(yt.matrixWorld):(vt.matrix.copy(Ut.matrixWorld),vt.matrix.invert(),vt.matrix.multiply(yt.matrixWorld)),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.updateMatrixWorld(!0),vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),vt.isPerspectiveCamera&&(vt.fov=ya*2*Math.atan(1/vt.projectionMatrix.elements[5]),vt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(vt){h=vt,g!==null&&(g.fixedFoveation=vt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=vt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ht)},this.getCameraTexture=function(vt){return m[vt]};let Ye=null;function De(vt,yt){if(d=yt.getViewerPose(u||a),w=yt,d!==null){let Ut=d.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let he=!1;Ut.length!==ht.cameras.length&&(ht.cameras.length=0,he=!0);for(let nt=0;nt<Ut.length;nt++){let Rt=Ut[nt],V=null;if(M!==null)V=M.getViewport(Rt);else{let Bt=y.getViewSubImage(g,Rt);V=Bt.viewport,nt===0&&(t.setRenderTargetTextures(L,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(L))}let Pt=at[nt];Pt===void 0&&(Pt=new Qn,Pt.layers.enable(nt),Pt.viewport=new on,at[nt]=Pt),Pt.matrix.fromArray(Rt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Rt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(V.x,V.y,V.width,V.height),nt===0&&(ht.matrix.copy(Pt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),he===!0&&ht.cameras.push(Pt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&D){y=n.getBinding();let nt=y.getDepthInformation(Ut[0]);nt&&nt.isValid&&nt.texture&&x.init(nt,s.renderState)}if(jt&&jt.includes("camera-access")&&D){t.state.unbindTexture(),y=n.getBinding();for(let nt=0;nt<Ut.length;nt++){let Rt=Ut[nt].camera;if(Rt){let V=m[Rt];V||(V=new Vo,m[Rt]=V);let Pt=y.getCameraImage(Rt);V.sourceTexture=Pt}}}}for(let Ut=0;Ut<T.length;Ut++){let he=k[Ut],jt=T[Ut];he!==null&&jt!==void 0&&jt.update(he,yt,u||a)}Ye&&Ye(vt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),w=null}let Ge=new _g;Ge.setAnimationLoop(De),this.setAnimationLoop=function(vt){Ye=vt},this.dispose=function(){}}},_1=new qe,bg=new Ie;bg.set(-1,0,0,0,1,0,0,0,1);function x1(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,wf(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,$,z,L){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),y(x,m)):m.isMeshPhongMaterial?(r(x,m),d(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),g(x,m),m.isMeshPhysicalMaterial&&M(x,m,L)):m.isMeshMatcapMaterial?(r(x,m),w(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),D(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?h(x,m,$,z):m.isSpriteMaterial?u(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===ai&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===ai&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let $=t.get(m),z=$.envMap,L=$.envMapRotation;z&&(x.envMap.value=z,x.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(L)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(bg),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function h(x,m,$,z){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*$,x.scale.value=z*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function y(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function g(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function M(x,m,$){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ai&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=$.texture,x.transmissionSamplerSize.value.set($.width,$.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,m){m.matcap&&(x.matcap.value=m.matcap)}function D(x,m){let $=t.get(m).light;x.referencePosition.value.setFromMatrixPosition($.matrixWorld),x.nearDistance.value=$.shadow.camera.near,x.farDistance.value=$.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v1(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,T){let k=T.program;n.uniformBlockBinding(L,k)}function u(L,T){let k=s[L.id];k===void 0&&(x(L),k=d(L),s[L.id]=k,L.addEventListener("dispose",$));let W=T.program;n.updateUBOMapping(L,W);let C=t.render.frame;r[L.id]!==C&&(g(L),r[L.id]=C)}function d(L){let T=y();L.__bindingPointIndex=T;let k=i.createBuffer(),W=L.__size,C=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,W,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,k),k}function y(){for(let L=0;L<l;L++)if(a.indexOf(L)===-1)return a.push(L),L;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){let T=s[L.id],k=L.uniforms,W=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,O=k.length;C<O;C++){let G=k[C];if(Array.isArray(G))for(let X=0,at=G.length;X<at;X++)M(G[X],C,X,W);else M(G,C,0,W)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(L,T,k,W){if(D(L,T,k,W)===!0){let C=L.__offset,O=L.value;if(Array.isArray(O)){let G=0;for(let X=0;X<O.length;X++){let at=O[X],ht=m(at);w(at,L.__data,G),typeof at!="number"&&typeof at!="boolean"&&!at.isMatrix3&&!ArrayBuffer.isView(at)&&(G+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(O,L.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,L.__data)}}function w(L,T,k){typeof L=="number"||typeof L=="boolean"?T[0]=L:L.isMatrix3?(T[0]=L.elements[0],T[1]=L.elements[1],T[2]=L.elements[2],T[3]=0,T[4]=L.elements[3],T[5]=L.elements[4],T[6]=L.elements[5],T[7]=0,T[8]=L.elements[6],T[9]=L.elements[7],T[10]=L.elements[8],T[11]=0):ArrayBuffer.isView(L)?T.set(new L.constructor(L.buffer,L.byteOffset,T.length)):L.toArray(T,k)}function D(L,T,k,W){let C=L.value,O=T+"_"+k;if(W[O]===void 0)return typeof C=="number"||typeof C=="boolean"?W[O]=C:ArrayBuffer.isView(C)?W[O]=C.slice():W[O]=C.clone(),!0;{let G=W[O];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return W[O]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(G.equals(C)===!1)return G.copy(C),!0}}return!1}function x(L){let T=L.uniforms,k=0,W=16;for(let O=0,G=T.length;O<G;O++){let X=Array.isArray(T[O])?T[O]:[T[O]];for(let at=0,ht=X.length;at<ht;at++){let j=X[at],et=Array.isArray(j.value)?j.value:[j.value];for(let pt=0,gt=et.length;pt<gt;pt++){let At=et[pt],_t=m(At),wt=k%W,bt=wt%_t.boundary,zt=wt+bt;k+=bt,zt!==0&&W-zt<_t.storage&&(k+=W-zt),j.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=k,k+=_t.storage}}}let C=k%W;return C>0&&(k+=W-C),L.__size=k,L.__cache={},this}function m(L){let T={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(T.boundary=4,T.storage=4):L.isVector2?(T.boundary=8,T.storage=8):L.isVector3||L.isColor?(T.boundary=16,T.storage=12):L.isVector4?(T.boundary=16,T.storage=16):L.isMatrix3?(T.boundary=48,T.storage=48):L.isMatrix4?(T.boundary=64,T.storage=64):L.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(T.boundary=16,T.storage=L.byteLength):ye("WebGLRenderer: Unsupported uniform value type.",L),T}function $(L){let T=L.target;T.removeEventListener("dispose",$);let k=a.indexOf(T.__bindingPointIndex);a.splice(k,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function z(){for(let L in s)i.deleteBuffer(s[L]);a=[],s={},r={}}return{bind:h,update:u,dispose:z}}var y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hs=null;function S1(){return hs===null&&(hs=new Fo(y1,16,16,ar,Zi),hs.name="DFG_LUT",hs.minFilter=Wn,hs.magFilter=Wn,hs.wrapS=ns,hs.wrapT=ns,hs.generateMipmaps=!1,hs.needsUpdate=!0),hs}var pu=class{constructor(t={}){let{canvas:e=k0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=xi}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;let D=M,x=new Set([Ih,Rh,Ch]),m=new Set([xi,Yi,La,Da,Eh,Th]),$=new Uint32Array(4),z=new Int32Array(4),L=new Z,T=null,k=null,W=[],C=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,X=!1,at=null,ht=null,j=null,et=null;this._outputColorSpace=Mi;let pt=0,gt=0,At=null,_t=-1,wt=null,bt=new on,zt=new on,te=null,Ye=new xe(0),De=0,Ge=e.width,vt=e.height,yt=1,Ut=null,he=null,jt=new on(0,0,Ge,vt),ge=new on(0,0,Ge,vt),ee=!1,nt=new wa,Rt=!1,V=!1,Pt=new qe,Bt=new Z,ce=new on,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Ae(){return At===null?yt:1}let Y=n;function Oe(R,K){return e.getContext(R,K)}let Ne,U,E,it,lt,xt,Lt,kt,mt,ut,Xt,ue,Zt,Ht,oe,pe,Ce,Q,qt,St,Gt,Kt,Tt;try{let R={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",tn,!1),e.addEventListener("webglcontextrestored",Ze,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),Y===null){let K="webgl2";if(Y=Oe(K,R),Y===null)throw Oe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(R){throw e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",Ze,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),we("WebGLRenderer: "+R.message),R}function re(){Ne=new CM(Y),Ne.init(),Gt=new p1(Y,Ne),U=new xM(Y,Ne,t,Gt),E=new d1(Y,Ne),U.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ht=Y.createFramebuffer(),j=Y.createFramebuffer(),et=Y.createFramebuffer(),it=new PM(Y),lt=new Kb,xt=new f1(Y,Ne,E,lt,U,Gt,it),Lt=new AM(G),kt=new Dv(Y),Kt=new gM(Y,kt),mt=new RM(Y,kt,it,Kt),ut=new DM(Y,mt,kt,Kt,it),Q=new LM(Y,U,xt),oe=new vM(lt),Xt=new jb(G,Lt,Ne,U,Kt,oe),ue=new x1(G,lt),Zt=new t1,Ht=new a1(Ne),Ce=new mM(G,Lt,E,ut,w,h),pe=new u1(G,ut,U),Tt=new v1(Y,it,U,E),qt=new _M(Y,Ne,it),St=new IM(Y,Ne,it),it.programs=Xt.programs,G.capabilities=U,G.extensions=Ne,G.properties=lt,G.renderLists=Zt,G.shadowMap=pe,G.state=E,G.info=it}D!==xi&&(O=new UM(D,e.width,e.height,l,s,r));let ne=new Vf(G,Y);this.xr=ne,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(R){R!==void 0&&(yt=R,this.setSize(Ge,vt,!1))},this.getSize=function(R){return R.set(Ge,vt)},this.setSize=function(R,K,ft=!0){if(ne.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=R,vt=K,e.width=Math.floor(R*yt),e.height=Math.floor(K*yt),ft===!0&&(e.style.width=R+"px",e.style.height=K+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Ge*yt,vt*yt).floor()},this.setDrawingBufferSize=function(R,K,ft){Ge=R,vt=K,yt=ft,e.width=Math.floor(R*ft),e.height=Math.floor(K*ft),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(D===xi){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(bt)},this.getViewport=function(R){return R.copy(jt)},this.setViewport=function(R,K,ft,ot){R.isVector4?jt.set(R.x,R.y,R.z,R.w):jt.set(R,K,ft,ot),E.viewport(bt.copy(jt).multiplyScalar(yt).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,K,ft,ot){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,K,ft,ot),E.scissor(zt.copy(ge).multiplyScalar(yt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){E.setScissorTest(ee=R)},this.setOpaqueSort=function(R){Ut=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ft=!0){let ot=0;if(R){let ct=!1;if(At!==null){let Ft=At.texture.format;ct=x.has(Ft)}if(ct){let Ft=At.texture.type,Ot=m.has(Ft),Ct=Ce.getClearColor(),Yt=Ce.getClearAlpha(),ie=Ct.r,ae=Ct.g,Me=Ct.b;Ot?($[0]=ie,$[1]=ae,$[2]=Me,$[3]=Yt,Y.clearBufferuiv(Y.COLOR,0,$)):(z[0]=ie,z[1]=ae,z[2]=Me,z[3]=Yt,Y.clearBufferiv(Y.COLOR,0,z))}else ot|=Y.COLOR_BUFFER_BIT}K&&(ot|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(ot|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&Y.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),at=R},this.dispose=function(){e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",Ze,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),Ce.dispose(),Zt.dispose(),Ht.dispose(),lt.dispose(),Lt.dispose(),ut.dispose(),Kt.dispose(),Tt.dispose(),Xt.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",hr),ne.removeEventListener("sessionend",ur),Di.stop()};function tn(R){R.preventDefault(),Lo("WebGLRenderer: Context Lost."),X=!0}function Ze(){Lo("WebGLRenderer: Context Restored."),X=!1;let R=it.autoReset,K=pe.enabled,ft=pe.autoUpdate,ot=pe.needsUpdate,ct=pe.type;re(),it.autoReset=R,pe.enabled=K,pe.autoUpdate=ft,pe.needsUpdate=ot,pe.type=ct}function Vn(R){we("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ci(R){let K=R.target;K.removeEventListener("dispose",ci),Cl(K)}function Cl(R){Ga(R),lt.remove(R)}function Ga(R){let K=lt.get(R).programs;K!==void 0&&(K.forEach(function(ft){Xt.releaseProgram(ft)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ft,ot,ct,Ft){K===null&&(K=fe);let Ot=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Ct=qa(R,K,ft,ot,ct);E.setMaterial(ot,Ot);let Yt=ft.index,ie=1;if(ot.wireframe===!0){if(Yt=mt.getWireframeAttribute(ft),Yt===void 0)return;ie=2}let ae=ft.drawRange,Me=ft.attributes.position,Nt=ae.start*ie,Mt=(ae.start+ae.count)*ie;Ft!==null&&(Nt=Math.max(Nt,Ft.start*ie),Mt=Math.min(Mt,(Ft.start+Ft.count)*ie)),Yt!==null?(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Yt.count)):Me!=null&&(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Me.count));let me=Mt-Nt;if(me<0||me===1/0)return;Kt.setup(ct,ot,Ct,ft,Yt);let _e,nn=qt;if(Yt!==null&&(_e=kt.get(Yt),nn=St,nn.setIndex(_e)),ct.isMesh)ot.wireframe===!0?(E.setLineWidth(ot.wireframeLinewidth*Ae()),nn.setMode(Y.LINES)):nn.setMode(Y.TRIANGLES);else if(ct.isLine){let Rn=ot.linewidth;Rn===void 0&&(Rn=1),E.setLineWidth(Rn*Ae()),ct.isLineSegments?nn.setMode(Y.LINES):ct.isLineLoop?nn.setMode(Y.LINE_LOOP):nn.setMode(Y.LINE_STRIP)}else ct.isPoints?nn.setMode(Y.POINTS):ct.isSprite&&nn.setMode(Y.TRIANGLES);if(ct.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))nn.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{let Rn=ct._multiDrawStarts,Qt=ct._multiDrawCounts,Dn=ct._multiDrawCount,Fe=Yt?kt.get(Yt).bytesPerElement:1,Gn=lt.get(ot).currentProgram.getUniforms();for(let An=0;An<Dn;An++)Gn.setValue(Y,"_gl_DrawID",An),nn.render(Rn[An]/Fe,Qt[An])}else if(ct.isInstancedMesh)nn.renderInstances(Nt,me,ct.count);else if(ft.isInstancedBufferGeometry){let Rn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Qt=Math.min(ft.instanceCount,Rn);nn.renderInstances(Nt,me,Qt)}else nn.render(Nt,me)};function Hn(R,K,ft,ot){at!==null&&R.isNodeMaterial&&at.setObject(ot,R),Rt===!0&&oe.setState(R,ft,!1),R.transparent===!0&&R.side===ls&&R.forceSinglePass===!1?(R.side=ai,R.needsUpdate=!0,vs(R,K,ot),R.side=nr,R.needsUpdate=!0,vs(R,K,ot),R.side=ls):vs(R,K,ot)}this.compile=function(R,K,ft=null){ft===null&&(ft=R),at!==null&&at.renderStart(R,K,ft),k=Ht.get(ft),k.init(K),C.push(k),ft.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(k.pushLight(ct),ct.castShadow&&k.pushShadow(ct))}),R!==ft&&R.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(k.pushLight(ct),ct.castShadow&&k.pushShadow(ct))}),k.setupLights(),at!==null&&at.updateLights(k.state.lightsArray),V=this.localClippingEnabled,Rt=oe.init(this.clippingPlanes,V),Rt===!0&&oe.setGlobalState(this.clippingPlanes,K),at!==null&&pe.render(k.state.shadowsArray,ft,K);let ot=new Set;return R.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;let Ft=ct.material;if(Ft)if(Array.isArray(Ft))for(let Ot=0;Ot<Ft.length;Ot++){let Ct=Ft[Ot];Hn(Ct,ft,K,ct),ot.add(Ct)}else Hn(Ft,ft,K,ct),ot.add(Ft)}),k=C.pop(),at!==null&&at.renderEnd(),ot},this.compileAsync=function(R,K,ft=null){let ot=this.compile(R,K,ft);return new Promise(ct=>{function Ft(){if(ot.forEach(function(Ot){let Yt=lt.get(Ot).currentProgram;(Yt===void 0||Yt.isReady())&&ot.delete(Ot)}),ot.size===0){ct(R);return}setTimeout(Ft,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let hi=null;function Li(R){hi&&hi(R)}function hr(){Di.stop()}function ur(){Di.start()}let Di=new _g;Di.setAnimationLoop(Li),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){hi=R,ne.setAnimationLoop(R),R===null?Di.stop():Di.start()},ne.addEventListener("sessionstart",hr),ne.addEventListener("sessionend",ur),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;at!==null&&at.renderStart(R,K);let ft=ne.enabled===!0&&ne.isPresenting===!0,ot=O!==null&&(At===null||ft)&&O.begin(G,At);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(K),K=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(G,R,K,At),k=Ht.get(R,C.length),k.init(K),k.state.textureUnits=xt.getTextureUnits(),C.push(k),Pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),nt.setFromProjectionMatrix(Pt,Gi,K.reversedDepth),V=this.localClippingEnabled,Rt=oe.init(this.clippingPlanes,V),T=Zt.get(R,W.length),T.init(),W.push(T),ne.enabled===!0&&ne.isPresenting===!0){let Ot=G.xr.getDepthSensingMesh();Ot!==null&&Vr(Ot,K,-1/0,G.sortObjects)}Vr(R,K,0,G.sortObjects),T.finish(),at!==null&&at.updateLights(k.state.lightsArray),G.sortObjects===!0&&T.sort(Ut,he),de=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,de&&Ce.addToRenderList(T,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&oe.beginShadows();let ct=k.state.shadowsArray;if(pe.render(ct,R,K),Rt===!0&&oe.endShadows(),(ot&&O.hasRenderPass())===!1){let Ot=T.opaque,Ct=T.transmissive;if(k.setupLights(),K.isArrayCamera){let Yt=K.cameras;if(Ct.length>0)for(let ie=0,ae=Yt.length;ie<ae;ie++){let Me=Yt[ie];Rl(Ot,Ct,R,Me)}de&&Ce.render(R);for(let ie=0,ae=Yt.length;ie<ae;ie++){let Me=Yt[ie];Bs(T,R,Me,Me.viewport)}}else Ct.length>0&&Rl(Ot,Ct,R,K),de&&Ce.render(R),Bs(T,R,K)}At!==null&&gt===0&&(xt.updateMultisampleRenderTarget(At),xt.updateRenderTargetMipmap(At)),ot&&O.end(G),R.isScene===!0&&R.onAfterRender(G,R,K),Kt.resetDefaultState(),_t=-1,wt=null,C.pop(),C.length>0?(k=C[C.length-1],xt.setTextureUnits(k.state.textureUnits),Rt===!0&&oe.setGlobalState(G.clippingPlanes,k.state.camera)):k=null,W.pop(),W.length>0?T=W[W.length-1]:T=null,at!==null&&at.renderEnd()};function Vr(R,K,ft,ot){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)k.pushLightProbeGrid(R);else if(R.isLight)k.pushLight(R),R.castShadow&&k.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(nt)){ot&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);let Ot=ut.update(R),Ct=R.material;Ct.visible&&T.push(R,Ot,Ct,ft,ce.z,null,K)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(nt))){let Ot=ut.update(R),Ct=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ce.copy(Ot.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ct)){let Yt=Ot.groups;for(let ie=0,ae=Yt.length;ie<ae;ie++){let Me=Yt[ie],Nt=Ct[Me.materialIndex];Nt&&Nt.visible&&T.push(R,Ot,Nt,ft,ce.z,Me,K)}}else Ct.visible&&T.push(R,Ot,Ct,ft,ce.z,null,K)}}let Ft=R.children;for(let Ot=0,Ct=Ft.length;Ot<Ct;Ot++)Vr(Ft[Ot],K,ft,ot)}function Bs(R,K,ft,ot){let{opaque:ct,transmissive:Ft,transparent:Ot}=R;k.setupLightsView(ft),Rt===!0&&oe.setGlobalState(G.clippingPlanes,ft),ot&&E.viewport(bt.copy(ot)),ct.length>0&&ks(ct,K,ft),Ft.length>0&&ks(Ft,K,ft),Ot.length>0&&ks(Ot,K,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Rl(R,K,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ot.id]===void 0){let Nt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ot.id]=new gi(1,1,{generateMipmaps:!0,type:Nt?Zi:xi,minFilter:sr,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let Ft=k.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||bt;Ft.setSize(Ot.z*G.transmissionResolutionScale,Ot.w*G.transmissionResolutionScale);let Ct=G.getRenderTarget(),Yt=G.getActiveCubeFace(),ie=G.getActiveMipmapLevel();G.setRenderTarget(Ft),G.getClearColor(Ye),De=G.getClearAlpha(),De<1&&G.setClearColor(16777215,.5),G.clear(),de&&Ce.render(ft);let ae=G.toneMapping;G.toneMapping=qi;let Me=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),k.setupLightsView(ot),Rt===!0&&oe.setGlobalState(G.clippingPlanes,ot),ks(R,ft,ot),xt.updateMultisampleRenderTarget(Ft),xt.updateRenderTargetMipmap(Ft),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,me=K.length;Mt<me;Mt++){let _e=K[Mt],{object:nn,geometry:Rn,material:Qt,group:Dn}=_e;if(Qt.side===ls&&nn.layers.test(ot.layers)){let Fe=Qt.side;Qt.side=ai,Qt.needsUpdate=!0,ji(nn,ft,ot,Rn,Qt,Dn),Qt.side=Fe,Qt.needsUpdate=!0,Nt=!0}}Nt===!0&&(xt.updateMultisampleRenderTarget(Ft),xt.updateRenderTargetMipmap(Ft))}G.setRenderTarget(Ct,Yt,ie),G.setClearColor(Ye,De),Me!==void 0&&(ot.viewport=Me),G.toneMapping=ae}function ks(R,K,ft){let ot=K.isScene===!0?K.overrideMaterial:null;for(let ct=0,Ft=R.length;ct<Ft;ct++){let Ot=R[ct],{object:Ct,geometry:Yt,group:ie}=Ot,ae=Ot.material;ae.allowOverride===!0&&ot!==null&&(ae=ot),Ct.layers.test(ft.layers)&&ji(Ct,K,ft,Yt,ae,ie)}}function ji(R,K,ft,ot,ct,Ft){at!==null&&ct.isNodeMaterial&&at.setObject(R,ct),R.onBeforeRender(G,K,ft,ot,ct,Ft),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ct.onBeforeRender(G,K,ft,ot,R,Ft),ct.transparent===!0&&ct.side===ls&&ct.forceSinglePass===!1?(ct.side=ai,ct.needsUpdate=!0,G.renderBufferDirect(ft,K,ot,ct,R,Ft),ct.side=nr,ct.needsUpdate=!0,G.renderBufferDirect(ft,K,ot,ct,R,Ft),ct.side=ls):G.renderBufferDirect(ft,K,ot,ct,R,Ft),R.onAfterRender(G,K,ft,ot,ct,Ft)}function vs(R,K,ft){K.isScene!==!0&&(K=fe);let ot=lt.get(R),ct=k.state.lights,Ft=k.state.shadowsArray,Ot=ct.state.version,Ct=Xt.getParameters(R,ct.state,Ft,K,ft,k.state.lightProbeGridArray),Yt=Xt.getProgramCacheKey(Ct),ie=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,ot.fog=K.fog;let ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=Lt.get(R.envMap||ot.environment,ae),ot.envMapRotation=ot.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",ci),ie=new Map,ot.programs=ie);let Me=ie.get(Yt);if(Me!==void 0){if(ot.currentProgram===Me&&ot.lightsStateVersion===Ot)return Xa(R,Ct),Me}else Ct.uniforms=Xt.getUniforms(R),at!==null&&R.isNodeMaterial&&at.build(R,ft,Ct),R.onBeforeCompile(Ct,G),Me=Xt.acquireProgram(Ct,Yt),ie.set(Yt,Me),ot.uniforms=Ct.uniforms;let Nt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=oe.uniform),Xa(R,Ct),ot.needsLights=Ll(R),ot.lightsStateVersion=Ot,ot.needsLights&&(Nt.ambientLightColor.value=ct.state.ambient,Nt.lightProbe.value=ct.state.probe,Nt.sunLights.value=ct.state.sun,Nt.sunLightShadows.value=ct.state.sunShadow,Nt.directionalLights.value=ct.state.directional,Nt.directionalLightShadows.value=ct.state.directionalShadow,Nt.spotLights.value=ct.state.spot,Nt.spotLightShadows.value=ct.state.spotShadow,Nt.rectAreaLights.value=ct.state.rectArea,Nt.ltc_1.value=ct.state.rectAreaLTC1,Nt.ltc_2.value=ct.state.rectAreaLTC2,Nt.pointLights.value=ct.state.point,Nt.pointLightShadows.value=ct.state.pointShadow,Nt.hemisphereLights.value=ct.state.hemi,Nt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Nt.sunShadowCascade.value=ct.state.sunShadowCascade,Nt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Nt.spotLightMatrix.value=ct.state.spotLightMatrix,Nt.spotLightMap.value=ct.state.spotLightMap,Nt.pointShadowMatrix.value=ct.state.pointShadowMatrix),ot.lightProbeGrid=k.state.lightProbeGridArray.length>0,ot.currentProgram=Me,ot.uniformsList=null,Me}function Wa(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=Oa.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Xa(R,K){let ft=lt.get(R);ft.outputColorSpace=K.outputColorSpace,ft.batching=K.batching,ft.batchingColor=K.batchingColor,ft.instancing=K.instancing,ft.instancingColor=K.instancingColor,ft.instancingMorph=K.instancingMorph,ft.skinning=K.skinning,ft.morphTargets=K.morphTargets,ft.morphNormals=K.morphNormals,ft.morphColors=K.morphColors,ft.morphTargetsCount=K.morphTargetsCount,ft.numClippingPlanes=K.numClippingPlanes,ft.numIntersection=K.numClipIntersection,ft.vertexAlphas=K.vertexAlphas,ft.vertexTangents=K.vertexTangents,ft.toneMapping=K.toneMapping}function Il(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;L.setFromMatrixPosition(K.matrixWorld);for(let ft=0,ot=R.length;ft<ot;ft++){let ct=R[ft];if(ct.texture!==null&&ct.boundingBox.containsPoint(L))return ct}return null}function qa(R,K,ft,ot,ct){K.isScene!==!0&&(K=fe),xt.resetTextureUnits();let Ft=K.fog,Ot=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?K.environment:null,Ct=At===null?G.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Xe.workingColorSpace,Yt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,ie=Lt.get(ot.envMap||Ot,Yt),ae=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Me=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Nt=!!ft.morphAttributes.position,Mt=!!ft.morphAttributes.normal,me=!!ft.morphAttributes.color,_e=qi;ot.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(_e=G.toneMapping);let nn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Rn=nn!==void 0?nn.length:0,Qt=lt.get(ot),Dn=k.state.lights;if(Rt===!0&&(V===!0||R!==wt)){let cn=R===wt&&ot.id===_t;oe.setState(ot,R,cn)}let Fe=!1;ot.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Dn.state.version||Qt.outputColorSpace!==Ct||ct.isBatchedMesh&&Qt.batching===!1||!ct.isBatchedMesh&&Qt.batching===!0||ct.isBatchedMesh&&Qt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Qt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Qt.instancing===!1||!ct.isInstancedMesh&&Qt.instancing===!0||ct.isSkinnedMesh&&Qt.skinning===!1||!ct.isSkinnedMesh&&Qt.skinning===!0||ct.isInstancedMesh&&Qt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Qt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Qt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Qt.instancingMorph===!1&&ct.morphTexture!==null||Qt.envMap!==ie||ot.fog===!0&&Qt.fog!==Ft||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==oe.numPlanes||Qt.numIntersection!==oe.numIntersection)||Qt.vertexAlphas!==ae||Qt.vertexTangents!==Me||Qt.morphTargets!==Nt||Qt.morphNormals!==Mt||Qt.morphColors!==me||Qt.toneMapping!==_e||Qt.morphTargetsCount!==Rn||!!Qt.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Qt.__version=ot.version);let Gn=Qt.currentProgram;Fe===!0&&(Gn=vs(ot,K,ct),at&&ot.isNodeMaterial&&at.onUpdateProgram(ot,Gn,Qt));let An=!1,Ki=!1,zs=!1,sn=Gn.getUniforms(),_n=Qt.uniforms;if(E.useProgram(Gn.program)&&(An=!0,Ki=!0,zs=!0),ot.id!==_t&&(_t=ot.id,Ki=!0),Qt.needsLights){let cn=Il(k.state.lightProbeGridArray,ct);Qt.lightProbeGrid!==cn&&(Qt.lightProbeGrid=cn,Ki=!0)}if(An||wt!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),sn.setValue(Y,"projectionMatrix",R.projectionMatrix),sn.setValue(Y,"viewMatrix",R.matrixWorldInverse);let Ni=sn.map.cameraPosition;Ni!==void 0&&Ni.setValue(Y,Bt.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&sn.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&sn.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),wt!==R&&(wt=R,Ki=!0,zs=!0)}if(Qt.needsLights&&(Dn.state.sunShadowMap.length>0&&sn.setValue(Y,"sunShadowMap",Dn.state.sunShadowMap,xt),Dn.state.directionalShadowMap.length>0&&sn.setValue(Y,"directionalShadowMap",Dn.state.directionalShadowMap,xt),Dn.state.spotShadowMap.length>0&&sn.setValue(Y,"spotShadowMap",Dn.state.spotShadowMap,xt),Dn.state.pointShadowMap.length>0&&sn.setValue(Y,"pointShadowMap",Dn.state.pointShadowMap,xt)),ct.isSkinnedMesh){sn.setOptional(Y,ct,"bindMatrix"),sn.setOptional(Y,ct,"bindMatrixInverse");let cn=ct.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),sn.setValue(Y,"boneTexture",cn.boneTexture,xt))}ct.isBatchedMesh&&(sn.setOptional(Y,ct,"batchingTexture"),sn.setValue(Y,"batchingTexture",ct._matricesTexture,xt),sn.setOptional(Y,ct,"batchingIdTexture"),sn.setValue(Y,"batchingIdTexture",ct._indirectTexture,xt),sn.setOptional(Y,ct,"batchingColorTexture"),ct._colorsTexture!==null&&sn.setValue(Y,"batchingColorTexture",ct._colorsTexture,xt));let Qi=ft.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Q.update(ct,ft,Gn),(Ki||Qt.receiveShadow!==ct.receiveShadow)&&(Qt.receiveShadow=ct.receiveShadow,sn.setValue(Y,"receiveShadow",ct.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&K.environment!==null&&(_n.envMapIntensity.value=K.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=S1()),Ki){if(sn.setValue(Y,"toneMappingExposure",G.toneMappingExposure),Qt.needsLights&&Pl(_n,zs),Ft&&ot.fog===!0&&ue.refreshFogUniforms(_n,Ft),ue.refreshMaterialUniforms(_n,ot,yt,vt,k.state.transmissionRenderTarget[R.id]),Qt.needsLights&&Qt.lightProbeGrid){let cn=Qt.lightProbeGrid;_n.probesSH.value=cn.texture,_n.probesMin.value.copy(cn.boundingBox.min),_n.probesMax.value.copy(cn.boundingBox.max),_n.probesResolution.value.copy(cn.resolution)}Oa.upload(Y,Wa(Qt),_n,xt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Oa.upload(Y,Wa(Qt),_n,xt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&sn.setValue(Y,"center",ct.center),sn.setValue(Y,"modelViewMatrix",ct.modelViewMatrix),sn.setValue(Y,"normalMatrix",ct.normalMatrix),sn.setValue(Y,"modelMatrix",ct.matrixWorld),ot.uniformsGroups!==void 0){let cn=ot.uniformsGroups;for(let Ni=0,be=cn.length;Ni<be;Ni++){let Dl=cn[Ni];Tt.update(Dl,Gn),Tt.bind(Dl,Gn)}}return Gn}function Pl(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.sunLights.needsUpdate=K,R.sunLightShadows.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ll(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return gt},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(R,K,ft){let ot=lt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),lt.get(R.texture).__webglTexture=K,lt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){let ft=lt.get(R);ft.__webglFramebuffer=K,ft.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ft=0){At=R,pt=K,gt=ft;let ot=null,ct=!1,Ft=!1;if(R){let Ct=lt.get(R);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ct.__webglFramebuffer),bt.copy(R.viewport),zt.copy(R.scissor),te=R.scissorTest,E.viewport(bt),E.scissor(zt),E.setScissorTest(te),_t=-1;return}else if(Ct.__webglFramebuffer===void 0)xt.setupRenderTarget(R);else if(Ct.__hasExternalTextures)xt.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ae=R.depthTexture;if(Ct.__boundDepthTexture!==ae){if(ae!==null&&lt.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(R)}}let Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ft=!0);let ie=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[K])?ot=ie[K][ft]:ot=ie[K],ct=!0):R.samples>0&&xt.useMultisampledRTT(R)===!1?ot=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?ot=ie[ft]:ot=ie,bt.copy(R.viewport),zt.copy(R.scissor),te=R.scissorTest}else bt.copy(jt).multiplyScalar(yt).floor(),zt.copy(ge).multiplyScalar(yt).floor(),te=ee;if(ft!==0&&(ot=ht),E.bindFramebuffer(Y.FRAMEBUFFER,ot)&&E.drawBuffers(R,ot),E.viewport(bt),E.scissor(zt),E.setScissorTest(te),ct){let Ct=lt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,ft)}else if(Ft){let Ct=K;for(let Yt=0;Yt<R.textures.length;Yt++){let ie=lt.get(R.textures[Yt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Yt,ie.__webglTexture,ft,Ct)}}else if(R!==null&&ft!==0){let Ct=lt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ct.__webglTexture,ft)}_t=-1};function $s(R){let K=lt.get(R);return(K.__readFormat!==R.format||K.__readType!==R.type)&&(K.__readFormat=R.format,K.__readType=R.type,K.__formatReadable=U.textureFormatReadable(R.format),K.__typeReadable=U.textureTypeReadable(R.type)),K}this.readRenderTargetPixels=function(R,K,ft,ot,ct,Ft,Ot,Ct=0){if(!(R&&R.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Yt=Yt[Ot]),Yt){E.bindFramebuffer(Y.FRAMEBUFFER,Yt);try{let ie=R.textures[Ct],ae=ie.format,Me=ie.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ct);let Nt=$s(ie);if(Nt.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ot&&ft>=0&&ft<=R.height-ct&&Y.readPixels(K,ft,ot,ct,Gt.convert(ae),Gt.convert(Me),Ft)}finally{let ie=At!==null?lt.get(At).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(R,K,ft,ot,ct,Ft,Ot,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Yt=Yt[Ot]),Yt)if(K>=0&&K<=R.width-ot&&ft>=0&&ft<=R.height-ct){E.bindFramebuffer(Y.FRAMEBUFFER,Yt);let ie=R.textures[Ct],ae=ie.format,Me=ie.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ct);let Nt=$s(ie);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ft.byteLength,Y.STREAM_READ),Y.readPixels(K,ft,ot,ct,Gt.convert(ae),Gt.convert(Me),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let me=At!==null?lt.get(At).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,me);let _e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await z0(Y,_e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ft),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Mt),Y.deleteSync(_e),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ft=0){let ot=Math.pow(2,-ft),ct=Math.floor(R.image.width*ot),Ft=Math.floor(R.image.height*ot),Ot=K!==null?K.x:0,Ct=K!==null?K.y:0;xt.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ft,0,0,Ot,Ct,ct,Ft),E.unbindTexture()},this.copyTextureToTexture=function(R,K,ft=null,ot=null,ct=0,Ft=0){let Ot,Ct,Yt,ie,ae,Me,Nt,Mt,me,_e=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(ft!==null)Ot=ft.max.x-ft.min.x,Ct=ft.max.y-ft.min.y,Yt=ft.isBox3?ft.max.z-ft.min.z:1,ie=ft.min.x,ae=ft.min.y,Me=ft.isBox3?ft.min.z:0;else{let _n=Math.pow(2,-ct);Ot=Math.floor(_e.width*_n),Ct=Math.floor(_e.height*_n),R.isDataArrayTexture?Yt=_e.depth:R.isData3DTexture?Yt=Math.floor(_e.depth*_n):Yt=1,ie=0,ae=0,Me=0}ot!==null?(Nt=ot.x,Mt=ot.y,me=ot.z):(Nt=0,Mt=0,me=0);let nn=Gt.convert(K.format),Rn=Gt.convert(K.type),Qt;K.isData3DTexture?(xt.setTexture3D(K,0),Qt=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(xt.setTexture2DArray(K,0),Qt=Y.TEXTURE_2D_ARRAY):(xt.setTexture2D(K,0),Qt=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);let Dn=E.getParameter(Y.UNPACK_ROW_LENGTH),Fe=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(Y.UNPACK_SKIP_PIXELS),An=E.getParameter(Y.UNPACK_SKIP_ROWS),Ki=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,_e.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_e.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,ie),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ae),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Me);let zs=R.isDataArrayTexture||R.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){let _n=lt.get(R),Qi=lt.get(K),cn=lt.get(_n.__renderTarget),Ni=lt.get(Qi.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,cn.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let be=0;be<Yt;be++)zs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,lt.get(R).__webglTexture,ct,Me+be),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,lt.get(K).__webglTexture,Ft,me+be)),Y.blitFramebuffer(ie,ae,Ot,Ct,Nt,Mt,Ot,Ct,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ct!==0||R.isRenderTargetTexture||lt.has(R)){let _n=lt.get(R),Qi=lt.get(K);E.bindFramebuffer(Y.READ_FRAMEBUFFER,j),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,et);for(let cn=0;cn<Yt;cn++)zs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,_n.__webglTexture,ct,Me+cn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,_n.__webglTexture,ct),sn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qi.__webglTexture,Ft,me+cn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Qi.__webglTexture,Ft),ct!==0?Y.blitFramebuffer(ie,ae,Ot,Ct,Nt,Mt,Ot,Ct,Y.COLOR_BUFFER_BIT,Y.NEAREST):sn?Y.copyTexSubImage3D(Qt,Ft,Nt,Mt,me+cn,ie,ae,Ot,Ct):Y.copyTexSubImage2D(Qt,Ft,Nt,Mt,ie,ae,Ot,Ct);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else sn?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Qt,Ft,Nt,Mt,me,Ot,Ct,Yt,nn,Rn,_e.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Qt,Ft,Nt,Mt,me,Ot,Ct,Yt,nn,_e.data):Y.texSubImage3D(Qt,Ft,Nt,Mt,me,Ot,Ct,Yt,nn,Rn,_e):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ft,Nt,Mt,Ot,Ct,nn,Rn,_e.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ft,Nt,Mt,_e.width,_e.height,nn,_e.data):Y.texSubImage2D(Y.TEXTURE_2D,Ft,Nt,Mt,Ot,Ct,nn,Rn,_e);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Dn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Fe),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,An),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ki),Ft===0&&K.generateMipmaps&&Y.generateMipmap(Qt),E.unbindTexture()},this.initRenderTarget=function(R){lt.get(R).__webglFramebuffer===void 0&&xt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xt.setTextureCube(R,0):R.isData3DTexture?xt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xt.setTexture2DArray(R,0):xt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){pt=0,gt=0,At=null,E.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xe._getUnpackColorSpace()}};var Eg=new ri,_u=new Z,Ji=class extends al{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Mn(t,3)),this.setAttribute("uv",new Mn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new er(e,6,1);return this.setAttribute("instanceStart",new Xi(n,3,0)),this.setAttribute("instanceEnd",new Xi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new er(e,6,1);return this.setAttribute("instanceColorStart",new Xi(n,3,0)),this.setAttribute("instanceColorEnd",new Xi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Qo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Eg.setFromBufferAttribute(e),this.boundingBox.union(Eg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_u.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_u)),_u.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_u));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Wt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};oi.line={uniforms:xl.merge([Wt.common,Wt.fog,Wt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var us=class extends $n{constructor(t){super({type:"LineMaterial",uniforms:xl.clone(oi.line.uniforms),vertexShader:oi.line.vertexShader,fragmentShader:oi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Hf=new on,Tg=new Z,Ag=new Z,Xn=new on,qn=new on,ds=new on,Gf=new Z,Wf=new qe,Yn=new ll,Cg=new Z,xu=new ri,vu=new _i,fs=new on,ps,Ur;function Rg(i,t,e){return fs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),fs.multiplyScalar(1/fs.w),fs.x=Ur/e.width,fs.y=Ur/e.height,fs.applyMatrix4(i.projectionMatrixInverse),fs.multiplyScalar(1/fs.w),Math.abs(Math.max(fs.x,fs.y))}function M1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,h=a;l<h;l++){Yn.start.fromBufferAttribute(s,l),Yn.end.fromBufferAttribute(r,l),Yn.applyMatrix4(e);let u=new Z,d=new Z;ps.distanceSqToSegment(Yn.start,Yn.end,d,u),d.distanceTo(u)<Ur*.5&&t.push({point:d,pointOnLine:u,distance:ps.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function b1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,h=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,h.count),y=-t.near;ps.at(1,ds),ds.w=1,ds.applyMatrix4(t.matrixWorldInverse),ds.applyMatrix4(n),ds.multiplyScalar(1/ds.w),ds.x*=r.x/2,ds.y*=r.y/2,ds.z=0,Gf.copy(ds),Wf.multiplyMatrices(t.matrixWorldInverse,a);for(let g=0,M=d;g<M;g++){if(Xn.fromBufferAttribute(h,g),qn.fromBufferAttribute(u,g),Xn.w=1,qn.w=1,Xn.applyMatrix4(Wf),qn.applyMatrix4(Wf),Xn.z>y&&qn.z>y)continue;if(Xn.z>y){let z=Xn.z-qn.z,L=(Xn.z-y)/z;Xn.lerp(qn,L)}else if(qn.z>y){let z=qn.z-Xn.z,L=(qn.z-y)/z;qn.lerp(Xn,L)}Xn.applyMatrix4(n),qn.applyMatrix4(n),Xn.multiplyScalar(1/Xn.w),qn.multiplyScalar(1/qn.w),Xn.x*=r.x/2,Xn.y*=r.y/2,qn.x*=r.x/2,qn.y*=r.y/2,Yn.start.copy(Xn),Yn.start.z=0,Yn.end.copy(qn),Yn.end.z=0;let D=Yn.closestPointToPointParameter(Gf,!0);Yn.at(D,Cg);let x=Mf.lerp(Xn.z,qn.z,D),m=x>=-1&&x<=1,$=Gf.distanceTo(Cg)<Ur*.5;if(m&&$){Yn.start.fromBufferAttribute(h,g),Yn.end.fromBufferAttribute(u,g),Yn.start.applyMatrix4(a),Yn.end.applyMatrix4(a);let z=new Z,L=new Z;ps.distanceSqToSegment(Yn.start,Yn.end,L,z),e.push({point:L,pointOnLine:z,distance:ps.origin.distanceTo(L),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var Or=class extends kn{constructor(t=new Ji,e=new us({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,h=e.count;a<h;a++,l+=2)Tg.fromBufferAttribute(e,a),Ag.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Tg.distanceTo(Ag);let r=new er(s,2,1);return t.setAttribute("instanceDistanceStart",new Xi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Xi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ps=t.ray;let a=this.matrixWorld,l=this.geometry,h=this.material;Ur=h.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),vu.copy(l.boundingSphere).applyMatrix4(a);let u;if(n)u=Ur*.5;else{let y=Math.max(s.near,vu.distanceToPoint(ps.origin));u=Rg(s,y,h.resolution)}if(vu.radius+=u,ps.intersectsSphere(vu)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),xu.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Ur*.5;else{let y=Math.max(s.near,xu.distanceToPoint(ps.origin));d=Rg(s,y,h.resolution)}xu.expandByScalar(d),ps.intersectsBox(xu)!==!1&&(n?M1(this,e):b1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Hf),this.material.uniforms.resolution.value.set(Hf.z,Hf.w))}};var yu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),ms=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Ig(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:h,CY:u,mcs:d,q:y,list:g,clamp:M,norm:w,munis:D}=i,x=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),$=(o,c)=>[(o-h)*l,(c-u)*l],z=.06,L=t.segs.map(o=>{let c=[],f=[0];for(let p=0;p<o.length;p+=2){let v=$(o[p],o[p+1]);c.length&&f.push(f[f.length-1]+Math.hypot(v[0]-c[c.length-1][0],v[1]-c[c.length-1][1])),c.push(v)}return{p:c,c:f,L:f[f.length-1]}}),T=t.stops.map(([o,c,f,p])=>({n:o,id:p,w:$(c,f),fams:new Set})),k=t.routes.map(([o,c,f])=>({s:o,l:c,c:f})),W=new Map;(t.bus||[]).forEach(([o,c,f,p])=>{let v={days:new Set(o),name:c,stops:f,times:p};f.forEach((S,I)=>{if(I<f.length-1){let N=W.get(S)||[];N.push([v,I]),W.set(S,N)}})});function C(o,c,f){let p=ee(),v=t.days.indexOf(p.ymd),S=[];for(let[I,N]of W.get(o)||[]){if(!I.days.has(v))continue;let P=I.times[N];if(P<c||P>f)continue;let F=I.stops[I.stops.length-1];S.push({sm:P,est:P,dl:0,fam:I.name,dest:T[F].n,destId:T[F].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:I.stops.slice(N)})}return S}let O=(o,c)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),p=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(p[1]||"")||(+f[2]||0)-(+p[2]||0)||f[3].localeCompare(p[3])},G=[...new Set(k.map(o=>o.s))].sort(O),X={};k.forEach(o=>{X[o.s]||(X[o.s]=o.c)});let at=t.pats.map(([o,c,f])=>({stops:o,t:c,segs:f})),ht=t.trips.map(([o,c,f,p,v],S)=>({day:o,pat:at[c],fam:k[f].s,c:k[f].c,t0:p,num:v,tid:t.tids[S]})),j={};G.forEach(o=>j[o]=new Set),ht.forEach(o=>{o.pat.segs.forEach(c=>j[o.fam].add(c)),o.pat.stops.forEach(c=>T[c].fams.add(o.fam))});let et=t.days.map((o,c)=>ht.filter(f=>f.day===c)),pt=new Map(ht.map(o=>[o.tid,o])),gt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,_t=3.922*At,wt=-39.705*At;function bt(o,c){let f=o*At+_t,p=c*At,v=Math.cos(wt),S=Math.sin(wt),I=Math.cos(p),N=Math.cos(f)*I,P=Math.sin(f)*I,F=Math.sin(p),H=Math.atan2(P,N*v-F*S),_=Math.asin(F*v+N*S),b=Math.sqrt(2/(1+Math.cos(H)*Math.cos(_))),A=b*Math.cos(_)*Math.sin(H),B=b*Math.sin(_),[st,rt,q,dt,J,le,ve]=gt;return $((rt+st*A-J)*ve,(le-(dt-q*B))*ve)}let zt=new Map(T.map((o,c)=>[o.id,c]));function te(o){if(o.g)return o.g;let c=[],f=[],p=[0],v=0;return o.segs.forEach((S,I)=>{let N=L[S];N.p.forEach((P,F)=>{I&&!F||(c.push(P),f.push(v+N.c[F]))}),v+=N.L,p.push(v)}),o.g={pts:c,cum:f,stopD:p}}function Ye(o,c,f,p){let v=1e18,S=0;for(let I=0;I+1<o.pts.length;I++){if(o.cum[I+1]<f||o.cum[I]>p)continue;let N=o.pts[I],P=o.pts[I+1],F=P[0]-N[0],H=P[1]-N[1],_=F*F+H*H||1e-9,b=Math.max(0,Math.min(1,((c[0]-N[0])*F+(c[1]-N[1])*H)/_)),A=N[0]+F*b-c[0],B=N[1]+H*b-c[1],st=A*A+B*B;st<v&&(v=st,S=o.cum[I]+b*(o.cum[I+1]-o.cum[I]))}return{d:S,err:Math.sqrt(v)}}function De(o,c){let f=0,p=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[p])return o.pts[p];for(;p-f>1;){let N=f+p>>1;o.cum[N]<=c?f=N:p=N}let v=(c-o.cum[f])/(o.cum[p]-o.cum[f]||1),S=o.pts[f],I=o.pts[p];return[S[0]+(I[0]-S[0])*v,S[1]+(I[1]-S[1])*v]}let Ge=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,vt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function yt(o){let c={};return vt.formatToParts(o).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Ut=0,he=null,jt=0,ge=0;function ee(){let o=yt(new Date);if(Ut===0&&he==null)return{...o,live:!0};let c=he==null?o.min:jt+(Ut?(performance.now()-ge)/6e4*Ut:0);return{ymd:o.ymd,min:c,live:!1}}let nt=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Rt="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Rt,localStorage.setItem("rod_rt",c)),V.url=c||Rt}catch{V.url=Rt}let Pt=(o,c)=>{let f=new AbortController,p=setTimeout(()=>f.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:f.signal}).then(v=>{if(clearTimeout(p),!v.ok)throw new Error("HTTP "+v.status);return v.json()},v=>{throw clearTimeout(p),v})},Bt="https://rodalies.jhmuyo.workers.dev";function ce(){return(V.url===Rt&&V.altUntil>Date.now()?Bt:V.url).replace(/\/+$/,"")}let fe=o=>/^51/.test(o||"");async function de(){if(!V.url){it();return}let o=ce();if(!de.busy){de.busy=1;try{await Ae(o)}finally{de.busy=0}}}async function Ae(o){let c=!V.adifAt||Date.now()-V.adifAt>11e4,f=_=>({status:"fulfilled",value:_}),p=_=>({status:"rejected",reason:_}),v,S,I,N,P,F=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{F=await Pt(o,"/live.json")}catch(_){if(/HTTP 404/.test(_.message))V.noLive=Date.now();else{if(V.url===Rt&&o!==Bt)return V.altUntil=Date.now()+30*6e4,Ae(Bt);o===Bt&&(V.altUntil=0),F={__fail:_}}}if(F&&F.__fail)v=S=I=N=P=p(F.__fail);else if(F&&F.v===1){let _=A=>F[A]&&!F[A].__err?f(F[A]):p(new Error(F[A]&&F[A].__err||"sin dato"));v=_("tu"),S=_("vp"),I=_("al"),N=_("nt"),P=c?_("ad"):p(0);let b=F.rep;b&&Array.isArray(b.items)&&(V.rep=b.items,V.repSkew=(b.now||Date.now())-Date.now(),b.tipos&&(V.tipos=b.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&Pt(o,"/reports.json").then(_=>{_&&Array.isArray(_.items)?(V.rep=_.items,V.repSkew=(_.now||Date.now())-Date.now(),_.tipos&&(V.tipos=_.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[v,S,I,N,P]=await Promise.allSettled([Pt(o,"/trip_updates.json"),Pt(o,"/vehicle_positions.json"),Pt(o,"/alerts.json"),Pt(o,"/notices.json"),c?Pt(o,"/adif.json"):Promise.reject(0)]);if(P.status==="fulfilled"&&P.value&&P.value.ok?(V.adif=P.value,V.adifAt=Date.now()):c&&(V.adifAt=Date.now()-6e4),v.status==="fulfilled"){let _=new Map,b=new Map;for(let A of v.value.entity||[]){let B=A.tripUpdate;if(!B||!B.trip||!fe(B.trip.tripId))continue;let st=B.trip.tripId,rt=(B.stopTimeUpdate||[])[0],q=B.delay;q==null&&rt&&(q=(rt.arrival||rt.departure||{}).delay),B.trip.scheduleRelationship==="CANCELED"&&(q="X"),q!=null&&_.set(st,q),b.set(st,{next:rt?{sid:rt.stopId,t:+((rt.arrival||rt.departure||{}).time||0)}:null})}V.delays=_,V.tu=b,V.ok=Date.now(),V.feedTs=+((v.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=v.reason&&v.reason.message||__t(0);if(S.status==="fulfilled"){let _=new Map,b=Date.now()/1e3;for(let A of S.value.entity||[]){let B=A.vehicle;if(!B||!B.trip||!fe(B.trip.tripId)||!B.position)continue;let st=B.vehicle&&B.vehicle.label||"",rt=st.match(/PLATF\.\(([^)]+)\)/),q=V.vp.get(B.trip.tripId),dt={tid:B.trip.tripId,w:bt(+B.position.longitude,+B.position.latitude),st:B.currentStatus||"",sid:B.stopId||"",ts:+B.timestamp||b,label:st,plat:rt?rt[1]:"",fam:(st.split("-")[0]||"").trim(),num:B.vehicle&&B.vehicle.id||""};dt.disp=q?q.disp:null,_.set(dt.tid,dt)}V.vp=_,V.okVP=Date.now()}let H=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){V.okNotices=Date.now();for(let _ of N.value.included){let b=new Set((_.lines||[]).map(q=>q.id).filter(q=>X[q])),A=(q,dt)=>{q=q||{},dt=dt||window.__L;let J=q[dt];return dt==="en"&&J&&(J===q.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(J))&&(J=""),(J||q.es||q.ca||"").trim()},B=q=>[A(_.description,q),A(_.title,q)].sort((dt,J)=>J.length-dt.length)[0],st=B(),rt=B("es");st&&H.push({id:"N"+_.externalId,fams:b,stops:new Set,txt:st,es:rt,when:(_.date||"")+"T"+(_.time||""),src:"Rodalies",core:_.core||""})}}if(I.status==="fulfilled"){let _=+((I.value.header||{}).timestamp||0);if(V.alertsTs=_,Date.now()/1e3-_<6*3600)for(let b of I.value.entity||[]){let A=b.alert;if(!A)continue;let B=new Set,st=new Set;for(let J of A.informedEntity||[])(J.routeId||"").startsWith("51")&&B.add(J.routeId.replace(/^51T\d+/,"")),J.stopId&&zt.has(J.stopId)&&st.add(zt.get(J.stopId));if(!B.size&&!st.size)continue;let rt=(A.descriptionText||A.headerText||{translation:[]}).translation||[],q=((rt.find(J=>J.language==="es")||rt[0]||{}).text||"").trim(),dt=+((A.activePeriod||[])[0]||{}).start||0;H.some(J=>J.txt===q)||H.push({id:b.id,fams:B,stops:st,txt:q,when:dt?new Date(dt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[_,b]of(V.adif.items||[]).entries()){let A=(b.t?b.t+". ":"")+b.txt,B=new Set,st=new Set,rt=w(A);for(let q of A.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[q[1]]&&B.add(q[1]);T.forEach((q,dt)=>{q.fams.size&&q.n.length>4&&rt.includes(w(q.n))&&(st.add(dt),B.size||q.fams.forEach(J=>B.add(J)))}),H.some(q=>q.txt===A)||H.push({id:"A"+_,fams:B,stops:st,txt:A,when:V.adif.upd||"",src:"Adif",lvl:b.lvl})}if(N.status==="fulfilled"||I.status==="fulfilled"){V.alerts=H.sort((_,b)=>b.when>_.when?1:-1);try{D_()}catch{}}it(),ku(),Me=0,a()}let Y=()=>V.okVP&&Date.now()-V.okVP<10*6e4,Oe=()=>V.okVP&&Date.now()-V.okVP<9e4,Ne={at:0,v:!1},U=()=>{if(!Y()||V.vp.size>0)return!1;if(Date.now()-Ne.at>3e4){Ne.at=Date.now();let o=yt(new Date),c=t.days.indexOf(o.ymd),f=0;if(c>=0)for(let p of et[c]){let v=o.min-p.t0;v>p.pat.t[1]+2&&v<p.pat.t[p.pat.t.length-2]-2&&f++}Ne.v=f>=6}return Ne.v},E=()=>Y()&&!U();function it(){let o=x("#rtst"),c=x("#mode");if(c){let p=[...ut].filter(N=>{ro("");let P=Oi.m.get(N);return P&&P[0]>=2}),v=so(p),S=!!E()&&ee().live&&!(p.length&&v.length===p.length);c.classList.toggle("on",S&&Oe()),c.classList.toggle("pre",!(S&&Oe())),c.textContent=S&&!Oe()?__t(1):S?__t(2):Lt.cur?__t(3):__t(4),c.classList.toggle("past",!!Lt.cur);let I=x("#rcgrab");if(I){let N=I.querySelector(".rdot");N||(N=document.createElement("b"),N.className="rdot",I.insertBefore(N,I.firstChild)),N.className="rdot "+(Lt.cur?"past":S&&Oe()?"on":"pre"),N.title=c.textContent}c.title=Lt.cur?`${__t(5)}${Lt.cur.sn.t}${__t(6)}`:""}if(!o)return;V.url?V.err?o.textContent=__t(8)+V.err+__t(9):E()?o.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:U()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=V.err||__t(7);let f=x("#rturl");f&&f._shown!==V.url&&(f.value=V.url,f._shown=V.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){V.err=__t(15),it();return}V.url=o;try{localStorage.setItem("rod_rt",o)}catch{}V.ok=0,V.err="",it(),de()},x("#rtoff").onclick=()=>{V.url=Rt;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()};let lt=0;setInterval(()=>{let o=hn.size||Se;(document.hidden?!o||Date.now()-lt<115e3:Date.now()-lt<15e3)||(lt=Date.now(),de())},2e4),setTimeout(()=>{lt=Date.now(),de()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-lt>15e3&&(lt=Date.now(),de())});let Lt={snap:null,key:""};function kt(){let o=ee();if(o.live||!be.hoy||!be.hoy.snaps||Ut&&he==null)return null;let c=yt(new Date).min;if(o.min>c+1)return null;let f=null;for(let p of be.hoy.snaps){if(!p.d)continue;let v=Np(p.t);v<=o.min+1&&(!f||v>f.m)&&(f={m:v,sn:p})}return f&&o.min-f.m<=25?f:null}let mt=o=>{{let v=Ou(o.num);if(v&&v.cx&&ee().live)return"X"}let c=Lt.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let v=c.sn.d[o.tid];return v??0}if(!E())return null;let f=V.delays.get(o.tid),p=V.vp.get(o.tid);return f==="X"?f:p&&p.pre&&p.preDl>=1?Math.max(typeof f=="number"?f:0,p.preDl*60):f??null},ut=new Set(G);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>G.includes(c))&&(ut.clear(),o.forEach(c=>G.includes(c)&&ut.add(c)))}catch{}let Xt=new Ji,ue=new Ji,Zt=new us({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Ht=new us({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),oe=new Or(Xt,Zt),pe=new Or(ue,Ht);pe.renderOrder=20,oe.renderOrder=21,oe.frustumCulled=pe.frustumCulled=!1,e.add(pe,oe);function Ce(o){let c=o[0]/l+h,f=o[1]/l+u;for(let p of D){if(p._bb===void 0){let S=1e9,I=1e9,N=-1e9,P=-1e9;for(let F of p.rings||[]){let H=F[0]||[];for(let _=0;_<H.length;_+=2)H[_]<S&&(S=H[_]),H[_]>N&&(N=H[_]),H[_+1]<I&&(I=H[_+1]),H[_+1]>P&&(P=H[_+1])}p._bb=[S,I,N,P]}let v=p._bb;if(!(c<v[0]||c>v[2]||f<v[1]||f>v[3]))for(let S of p.rings||[]){let I=S[0]||[],N=!1;for(let P=0,F=I.length,H=F-2;P<F;H=P,P+=2){let _=I[P+1],b=I[H+1];_>f!=b>f&&c<(I[H]-I[P])*(f-_)/(b-_)+I[P]&&(N=!N)}if(N)return!0}}return!1}let Q=!1;function qt(){Q||!D.length||(Q=!0,T.forEach(o=>{o.ext=!Ce(o.w)}),L.forEach(o=>{o.ext=!Ce(o.p[0])&&!Ce(o.p[o.p.length-1])&&!Ce(o.p[o.p.length>>1])}))}let St=()=>{let o=new Set(ut.size<=2?ut:[]);try{Mt&&Mt.fam&&o.add(Mt.fam)}catch{}return o},Gt="";function Kt(){qt();let o=[],c=[],f=new Set,p=new xe,v=new xe("#d2d0d0"),S=St();Gt=[...S].join();for(let H of G)if(ut.has(H))for(let _ of j[H]){if(f.has(_))continue;f.add(_);let b=L[_].p;p.set(X[H]),L[_].ext&&!S.has(H)&&p.lerp(v,.55);for(let A=0;A+1<b.length;A++)o.push(b[A][0],b[A][1],z,b[A+1][0],b[A+1][1],z),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let I=new Ji,N=new Ji;I.setPositions(o),I.setColors(c),N.setPositions(o);let P=oe.geometry,F=pe.geometry;oe.geometry=I,pe.geometry=N,P&&P.dispose(),F&&F.dispose(),a()}Kt();let Tt=o=>new $n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),re=new bn,ne=T.length,tn=new Float32Array(ne*3),Ze=new Float32Array(ne*3),Vn=new Float32Array(ne),ci=new Float32Array(ne);T.forEach((o,c)=>{tn[c*3]=o.w[0],tn[c*3+1]=o.w[1],tn[c*3+2]=z,Ze.set([1,1,1],c*3),Vn[c]=6,ci[c]=1.6}),re.setAttribute("position",new un(tn,3)),re.setAttribute("fill",new un(Ze,3)),re.setAttribute("size",new un(Vn,1)),re.setAttribute("bw",new un(ci,1));let Cl=Tt("#1d2330"),Ga=new Cr(re,Cl);Ga.renderOrder=22,Ga.frustumCulled=!1,e.add(Ga);function Hn(){let o=r.dist<45,c=St();T.forEach((f,p)=>{let v=[...f.fams].some(I=>ut.has(I)),S=f.ext&&![...f.fams].some(I=>c.has(I))&&p!==me;Vn[p]=v?p===me?13:S?3:o?8:5:0,ci[p]=p===me?3:1.6}),re.attributes.size.needsUpdate=!0,re.attributes.bw.needsUpdate=!0}let hi=600,Li=new bn,hr=new Float32Array(hi*3),ur=new Float32Array(hi*3),Di=new Float32Array(hi),Vr=new Float32Array(hi);Li.setAttribute("position",new un(hr,3)),Li.setAttribute("fill",new un(ur,3)),Li.setAttribute("size",new un(Di,1)),Li.setAttribute("bw",new un(Vr,1));let Bs=new Float32Array(hi);Li.setAttribute("ang",new un(Bs,1));let Rl=new $n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),ks=new Cr(Li,Rl);ks.renderOrder=24,ks.frustumCulled=!1,e.add(ks);let ji=new bn,vs=new Float32Array(hi*3),Wa=new Float32Array(hi*3),Xa=new Float32Array(hi),Il=new Float32Array(hi);ji.setAttribute("position",new un(vs,3)),ji.setAttribute("fill",new un(Wa,3)),ji.setAttribute("size",new un(Xa,1)),ji.setAttribute("bw",new un(Il,1));let qa=new Cr(ji,Tt("#ffffff"));qa.renderOrder=23,qa.frustumCulled=!1,e.add(qa);function Pl(o,c){let f=L[o],p=c*f.L,v=0,S=f.c.length-1;for(;S-v>1;){let H=v+S>>1;f.c[H]<=p?v=H:S=H}let I=f.c[S]-f.c[v]||1,N=(p-f.c[v])/I,P=f.p[v],F=f.p[S];return[P[0]+(F[0]-P[0])*N,P[1]+(F[1]-P[1])*N]}let Ll=o=>o*o*(3-2*o)*.35+o*.65;function $s(o,c){let f=o.pat.t,p=o.pat.stops.length,v=f[2*p-2];if(c<f[1]-2||c>v+1)return null;if(c<=f[1])return{w:T[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let S=0;S<p-1;S++){let I=f[2*S+1],N=f[2*S+2],P=f[2*S+3];if(c<=N){let F=N>I?(c-I)/(N-I):1;return{w:Pl(o.pat.segs[S],Ll(M(F,0,1))),at:-1,next:S+1,prev:S,moving:!0}}if(c<=P)return{w:T[o.pat.stops[S+1]].w,at:S+1,next:S+1,moving:!1}}return{w:T[o.pat.stops[p-1]].w,at:p-1,next:p-1,moving:!1}}function R(o){let c=t.days.indexOf(o.ymd),f=[];if(c<0)return{k:c,out:f};let p=(v,S)=>{for(let I of v){if(!ut.has(I.fam))continue;let N=mt(I);if(N==="X")continue;let P=(N||0)/60,F=o.min+S-I.t0-P;if(F<-2||F>I.pat.t[I.pat.t.length-2]+1)continue;let H=$s(I,F);H&&f.push({tr:I,p:H,rel:F,dl:P,live:N!=null})}};return p(et[c],0),c>0&&p(et[c-1],1440),{k:c,out:f}}function K(o,c,f,p){let v=o.pat.stops[0],S=c.dep0,I=null,N=(F,H)=>{for(let _ of F||[]){let b=_.pat.stops,A=b.length;if(b[A-1]!==v||_===o)continue;let B=_.t0+_.pat.t[2*(A-1)]-H;if(B>S+5||B<S-120)continue;let st=te(_.pat),rt=Ye(st,c.w,-1,1e9);if(rt.err>.6)continue;let q=st.stopD,dt=_.pat.t,J=q.findIndex(Jt=>Jt>rt.d);J<0&&(J=A-1);let le=J===0?dt[1]:dt[2*J-1]+(q[J]>q[J-1]?(rt.d-q[J-1])/(q[J]-q[J-1]):1)*(dt[2*J]-dt[2*J-1]),ve=f-(_.t0+le-H);ve<-5||ve>120||(!I||Math.abs(ve)<Math.abs(I.prevDl))&&(I={prevTr:_,dPrev:rt.d,prevDl:ve,arrO:B+Math.max(0,ve)})}};if(N(et[p],0),p>0&&N(et[p-1],1440),!I)return{prevTr:null,preDl:0};let P=Math.max(S,I.arrO+3);return{...I,depEst:P,preDl:Math.max(0,P-S)}}function ft(o,c,f){let p=o.pat.t,v=c.length;if(!(f>=0))return f<0?c[0]:null;for(let S=0;S<v;S++)if(f<=p[2*S+1]){if(f>=p[2*S]||S===0)return c[S];let I=p[2*S-1],N=p[2*S];return c[S-1]+(c[S]-c[S-1])*(N>I?(f-I)/(N-I):1)}return c[v-1]}let ot=performance.now();function ct(){let o=[],c=Date.now()/1e3,f=performance.now(),p=Math.min(1,(f-ot)/1e3);ot=f;for(let v of V.vp.values()){let S=pt.get(v.tid),I=S?S.fam:v.fam;if(I&&X[I]&&!ut.has(I))continue;let N=V.delays.get(v.tid),P=typeof N=="number"?N/60:0,F=Math.max(0,c-v.ts);v.mvTs!==v.ts&&((!v.mvW||Math.hypot(v.w[0]-v.mvW[0],v.w[1]-v.mvW[1])>.025)&&(v.mvW=v.w,v.mvAt=v.ts),v.mvTs=v.ts),v.still=v.ts-(v.mvAt||v.ts);let H=v.w,_=-1;if(S){let A=te(S.pat),B=A.stopD;if(v.dObs==null||v.obsAt!==v.ts){let J=Ye(A,v.w,-1,1e9);v.dObs=J.d,v.err=J.err,v.obsAt=v.ts}let st=ee(),rt=t.days.indexOf(st.ymd),q=S.day===rt-1?1440:0,dt=S.t0+S.pat.t[1]-q;if(v.pre=st.min+P<dt-1&&(v.dObs>B[0]+.35||v.err>.6)&&!(v.st==="STOPPED_AT"&&v.sid===T[S.pat.stops[0]].id),v.dep0=dt,v.pre){if(v.atStop=-1,v.next=0,_=0,v.disp=null,v.prevAt!==v.ts&&(v.prevAt=v.ts,Object.assign(v,K(S,v,st.min,rt))),v.prevTr){let J=te(v.prevTr.pat);H=De(J,v.dPrev)}}else if(!Oe()&&S){let J=ee(),le=t.days.indexOf(J.ymd),ve=S.day===le-1?1440:0,Jt=$s(S,J.min+ve-S.t0-P);Jt?(H=Jt.w,v.est=!0,_=Jt.next,v.atStop=Jt.moving?-1:Jt.at,v.next=Jt.next,v.before=!1):(v.atStop=-1,v.next=-1)}else if(v.err<=.6){let J=B.findIndex(Jt=>Jt>v.dObs+.08);J<0&&(J=B.length-1);let le=B.reduce((Jt,ke,Te)=>Math.abs(ke-v.dObs)<Math.abs(B[Jt]-v.dObs)?Te:Jt,0);v.atStop=Math.abs(B[le]-v.dObs)<.16?le:-1;{let Jt=v.st==="STOPPED_AT"&&v.sid?S.pat.stops.findIndex(ke=>T[ke].id===v.sid):-1;Jt>=0&&Math.abs(B[Jt]-v.dObs)<.6&&(v.atStop=Jt,J<=Jt&&(J=Math.min(Jt+1,B.length-1)))}v.before=v.atStop>=0&&v.dObs<B[v.atStop]-.15,v.next=J,_=J;let ve=v.dObs;if(v.st==="STOPPED_AT"&&v.atStop>=0)ve=B[v.atStop];else if(J>0){let Jt=(S.pat.t[2*J]-S.pat.t[2*J-1])*60,ke=Jt>0?(B[J]-B[J-1])/Jt:0,Te=ee(),Pe=t.days.indexOf(Te.ymd),Ke=S.day===Pe-1?1440:0,$e=ft(S,B,Te.min+Ke-S.t0-P),xn=v.dObs+ke*Math.min(F,60);$e!=null&&(xn=Math.min(xn,Math.max(v.dObs,$e))),ve=Math.max(v.dObs,Math.min(B[J]-.03,xn))}v.disp==null||Math.abs(v.disp-ve)>1.2?v.disp=ve:ve>v.disp&&(v.disp+=(ve-v.disp)*Math.min(1,p*1.5)),H=De(A,v.disp)}else if(v.err>2){let J=ee(),le=t.days.indexOf(J.ymd),ve=S.day===le-1?1440:0,Jt=$s(S,J.min+ve-S.t0-P);Jt&&(H=Jt.w,v.est=!0,_=Jt.next),v.atStop=-1,v.next=Jt?Jt.next:-1}else v.atStop=-1,v.next=-1}let b=v.pre?"":v.st==="STOPPED_AT"&&v.atStop>=0||v.atStop>=0&&v.still>30?"st":v.still>=90&&v.atStop<0?"via":"";o.push({tr:S,v,w:H,stop:b,p:{w:H},fam:I||"?",c:S?S.c:X[I]||"#6b7385",dl:P,live:!0,real:!0,idx:_,age:F,cancel:N==="X"})}return o}let Ft=new Map,Ot=!1,Ct=!1,Yt="",ie={st:-1},ae=[],Me=0,Nt=null,Mt=null,me=-1,_e=!1,nn=0,Rn="";function Qt(o){let c=Ut>0||!!Nt,f=window.__mapHidden?1e3:Ut>0?50:c?200:250;if(o-Me<f)return!1;Me=o,[...St()].join()!==Gt&&(Kt(),Hn());{let _=kt(),b=_?_.sn.t:"";Lt.cur=_,b!==Lt.key&&(Lt.key=b,it()),!_&&!ee().live&&!be.at&&Nl()}let p=ee(),v=E()&&p.live,S=v?{k:t.days.indexOf(p.ymd),out:ct()}:R(p);ae=S.out;let I=new xe,N=0,P=0;for(let _ of ae){if(N>=hi)break;hr[N*3]=_.p.w[0],hr[N*3+1]=_.p.w[1],hr[N*3+2]=z+.02;let b=null;if(_.real&&_.v.pre&&_.v.prevTr)b=De(te(_.v.prevTr.pat),_.v.dPrev+.35);else if(_.real&&_.tr&&!_.v.pre&&_.v.err<=.6&&_.v.disp!=null&&!(_.v.st==="STOPPED_AT"&&_.v.atStop>=0))b=De(te(_.tr.pat),_.v.disp+.35);else if(!_.real&&_.p.moving){let q=_.tr.pat.t,dt=_.p.prev,J=q[2*dt+1],le=q[2*dt+2],ve=le>J?(_.rel-J)/(le-J):1;b=Pl(_.tr.pat.segs[dt],Math.min(1,Ll(M(ve,0,1))+.04))}let A=_.real?!!_.stop:!_.p.moving;if(_.broke=Sp(_),_.broke)Bs[N]=85;else if(A)Bs[N]=75;else if(b){let q=Bl(_.p.w),dt=Bl(b),J=dt[0]-q[0],le=dt[1]-q[1];Bs[N]=Math.hypot(J,le)>.05?Math.atan2(J,-le):99}else Bs[N]=99;I.set(_.c||_.tr.c),ur[N*3]=I.r,ur[N*3+1]=I.g,ur[N*3+2]=I.b;let B=_.tr?_.tr===Mt:Mt&&Mt.vtid===_.v.tid;Di[N]=B?22:r.dist<45?17:14,Vr[N]=B?3.5:2.2;let st=_.real&&_.stop==="via"||!!_.broke,rt=_.cancel||_.broke?[.86,.15,.15]:_.dl>10?[.86,.15,.15]:_.dl>5?[.92,.48,.05]:_.dl>=1?[.98,.8,.08]:[.09,.64,.29];(_.live&&_.dl>=5||B||st)&&(vs[P*3]=_.p.w[0],vs[P*3+1]=_.p.w[1],vs[P*3+2]=z+.01,Wa.set(B?rt:st?[.86,.15,.15]:[.98,.45,.09],P*3),Xa[P]=Di[N]+(B?16+5*Math.sin(o/220):st?10+3*Math.sin(o/400):8),Il[P]=B?2:3,P++),N++}if(Li.setDrawRange(0,N),ji.setDrawRange(0,P),["position","fill","size","bw"].forEach(_=>{Li.attributes[_].needsUpdate=!0,ji.attributes[_].needsUpdate=!0}),Li.attributes.ang.needsUpdate=!0,Nt){let _=ae.find(b=>b.tr===Nt);if(_){let b=0,A=innerHeight,B=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,st=x("#rc").getBoundingClientRect();innerWidth<=640&&(B&&(b=B.bottom),A=Math.min(A,st.top));let rt=b+(A-b)/2,q=rt-innerHeight/2,dt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=_.p.w[0]-Math.sin(r.yaw)*q*dt,s.ty=_.p.w[1]+Math.cos(r.yaw)*q*dt}else E()&&ee().live&&(Nt=null)}let F=nt(Math.floor(p.min+1e-6));F!==Rn&&(Rn=F,x("#ctime").textContent=F),x("#ntr").textContent=String(ae.length),x("#ntrl").textContent=v?__t(16):__t(17);{let _=ut.size<G.length?[...ut].sort(O).join(", "):"",b=x("#ccount"),A=Lt.cur?`\u23EA ${ae.length}${__t(18)}${Lt.cur.sn.t} \xB7 ${Object.values(Lt.cur.sn.d).filter(B=>B>=60).length}${__t(19)}`:!p.live&&p.min<yt(new Date).min-1&&!Ut?`${__t(20)}${be.hoy&&be.hoy.snaps&&be.hoy.snaps.some(B=>B.d)?`${__t(21)}${be.hoy.snaps.find(B=>B.d).t}`:__t(22)}`:v&&!Oe()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${ms(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:v&&!ae.some(B=>B.real)&&so(ut).length?`\u{1F4E1} ${__t(25)}${_?` <small>\xB7 ${m(_)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${ae.length} ${v?__t(27):__t(28)}${_?` <small>\xB7 ${m(_)}</small>`:""}${v&&V.okVP?(()=>{let B=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${B<3?" new":""}">\u25CF ${__t(29)}${ms(B+" s")}</small>`})():""}`;b&&b._t!==A&&(b.innerHTML=A,b._t=A)}{let _=x("#p");_&&_.classList.toggle("ttf",!p.live||!!Ut)}let H=new Date;if(x("#cdate").textContent=p.live?__t(30):Ut?__t(31)+Ut:Ci?__t(32):__t(33),S.k<0?x("#src").innerHTML=`${__t(34)}${Ge(t.days[0])}${__t(35)}${Ge(t.days[t.days.length-1])}${__t(36)}`:v?x("#src").textContent=`${Oe()?__t(37):__t(38)}${ms(yu(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(_=>_.ts),0))))}`:U()&&p.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),p.live){let _=Math.round(p.min),b=x("#tsl");document.activeElement!==b&&(b.value=_<240?_+1440:_)}{let _=Mt?String(Mt.num||Mt.vtid||""):"";_!==Qt._sk&&(Qt._sk=_,Ee(!0))}return Ee(),!Qt._sp&&(v||!p.live||U()||!V.url)&&(Qt._sp=1,window.__splashOff&&window.__splashOff()),o-nn>3e3&&(Mt||me>=0||_e||Ct||Yt)&&(nn=o,Ue()),it(),!0}let Dn=-1,Fe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Gn=[],An=document.createElement("button");An.type="button",An.id="mbtn",An.title=__t(44),An.innerHTML=__t(45),An.onclick=()=>{Fe=!Fe;try{localStorage.setItem("rod_mun",Fe?"1":"")}catch{}An.classList.toggle("on",Fe),a(),Ni()},An.classList.toggle("on",Fe),document.body.appendChild(An);let Ki=D.slice().sort((o,c)=>c.pop-o.pop);function zs(o){if(o._a)return o._a;let c=null,f=0;for(let p of o.rings||[]){let v=p[0];if(!v)continue;let S=0,I=0,N=0;for(let P=0,F=v.length;P<F;P+=2){let H=v[P],_=v[P+1],b=v[(P+2)%F],A=v[(P+3)%F],B=H*A-b*_;S+=B,I+=(H+b)*B,N+=(_+A)*B}Math.abs(S)>f&&(f=Math.abs(S),c=[I/(3*S),N/(3*S)])}return o._a=c?[(c[0]-h)*l,(c[1]-u)*l]:[o.cx,o.cy]}let sn=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,_n=[0,7.6,6.7,6,5.4],Qi=[0,17,15,13,12],cn=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Ni(){let o=s.tilt<.06&&r.tilt<.08;An.classList.toggle("show",o);let c=0;if(Fe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(S=>S.offsetParent!==null||S.style.display==="block").map(S=>{let I=S.getBoundingClientRect();return[I.left-2,I.top-2,I.right+2,I.bottom+2]}).filter(S=>S[2]>S[0]),p=r.dist,v=p>160?5e4:p>130?2e4:p>105?8e3:p>80?3e3:p>62?800:0;for(let S of Ki){let I=sn(S.pop);if(S.pop<v)break;let N=zs(S);if(wn.set(N[0],N[1],z).project(n),Math.abs(wn.x)>1.02||Math.abs(wn.y)>1.02)continue;let P=(wn.x*.5+.5)*innerWidth,F=(-wn.y*.5+.5)*innerHeight,H=cn(S.name),_=H.length*_n[I]+8,b=Qi[I],A=[P-_/2,F-b/2,P+_/2,F+b/2];if(f.some(st=>A[0]<st[2]&&st[0]<A[2]&&A[1]<st[3]&&st[1]<A[3]))continue;f.push(A);let B=Gn[c]||(Gn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));B.isConnected||document.body.appendChild(B),B._n!==H&&(B.textContent=H,B._n=H),B._t!==I&&(B.className="mlab t"+I,B._t=I),B.style.transform=`translate(${Math.round(P)}px,${Math.round(F)}px) translate(-50%,-50%)`,B.style.display="block",c++}}for(;c<Gn.length;c++)Gn[c].style.display="none"}let be={at:0,hoy:null,ayer:null,err:""},Dl="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Nl(){Date.now()-be.at<5*6e4||(be.at=Date.now(),Promise.all(["hoy","ayer","hist","dias"].map(o=>fetch(Dl+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null))).then(([o,c,f,p])=>{be.hoy=o,be.ayer=c,be.hist=f,be.dias=p,be.tr=null,be.err=o?"":__t(46),(Ct||Yt)&&(d._h="",Ue()),Ee(!0)}))}function t_(o){let c={};for(let p of o&&o.snaps||[])for(let v of p.r||[]){let S=/^\d+[A-Z](\d+)/.exec(v);S&&(c[S[1]]=c[S[1]]||[]).push(Math.max(0,p.d&&p.d[v]||0)/60)}let f={};for(let p in c){let v=c[p].sort((S,I)=>S-I);f[p]=Math.round(v[v.length>>1])}return f}function Ul(o){if(!be.tr){let f=new Map;for(let p of be.hist&&be.hist.days||[])f.set(p.day,p.tr);for(let p of[be.ayer,be.hoy])if(p&&p.day&&!f.has(p.day)){let v=t_(p);Object.keys(v).length&&f.set(p.day,v)}be.tr=f}if(o==="")return null;let c=[...be.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,p)=>f+p,0)/c.length}:null}let up=o=>new Date(+o.slice(0,4),+o.slice(4,6)-1,+o.slice(6,8)).getDay(),e_=o=>{let c=-1,f=9,p=up(o),v=S=>S===0||S===6?S:1;return t.days.forEach((S,I)=>{let N=up(S),P=S===o?0:N===p?1:v(N)===v(p)?2:9;P<f&&(f=P,c=I)}),f<9?c:-1},dp=()=>{let o=new Map;for(let c of be.hist&&be.hist.days||[])c.cx&&o.set(c.day,new Set(c.cx.map(String)));return o},n_=()=>{let o=(be.hist&&be.hist.days||[]).find(c=>c.cx);return o?o.day:null};function fp(o){Ul("");let c=dp(),f=0,p=0,v=0,S=0;for(let[I,N]of be.tr||[]){let P=e_(I.replace(/-/g,""));if(P<0)continue;let F=Gr(o,P);if(!F)continue;let H=String(F.num);if(c.get(I)&&c.get(I).has(H)){S++,f++;continue}let _=N[H];_!=null&&(f++,v+=_,_>=5&&p++)}return{n:f,late:p,sum:v,nc:S}}let Ol=null,i_=o=>{if(!Ol){Ol=new Map;for(let c of et)for(let f of c||[])Ol.set(String(f.num),f.fam)}return Ol.get(String(o))};function pp(o){let c=(be.dias&&be.dias.days||[]).slice(-30);if(!c.length)return null;let f=new Map;for(let P of c)for(let[F,H]of Object.entries(P.lines||{})){let _=f.get(F)||{n:0,ok:0,s:0,max:0,days:0};_.n+=H.n,_.ok+=H.ok,_.s+=H.avg*H.n,_.max=Math.max(_.max,H.max||0),_.days++,f.set(F,_)}let p=f.get(o);if(!p||p.n<30)return null;let v=[...f.entries()].filter(([P,F])=>X[P]&&F.n>=30).sort((P,F)=>P[1].ok/P[1].n-F[1].ok/F[1].n),S=v.findIndex(([P])=>P===o),I=dp(),N=0;for(let P of I.values())for(let F of P)i_(F)===o&&N++;return{pct:p.ok/p.n*100,avg:p.s/p.n,max:p.max,days:p.days,pos:S+1,of:v.length,nc:N,since:n_()}}let s_=o=>o?`${+o.slice(8,10)}/${+o.slice(5,7)}`:"",mp=o=>o>=60?`${Math.floor(o/60)} h ${String(Math.round(o%60)).padStart(2,"0")} min`:`${Math.round(o)} min`,ys=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",Ss={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},gp=o=>o>10?Ss.b:o>5?Ss.w:o>=1?Ss.y:Ss.g,Ms=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Ya(o,c,f){return`<div class="sbars">${o.map(p=>`<div class="sbar" title="${m(p.tip||"")}"><span class="sl">${p.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(p.w*100))}%;background:${p.c}"></i></span><b class="sv" style="color:${p.c===Ss.y?"var(--svy,#a16207)":p.c===Ss.w?"var(--svw,#c2410c)":p.c}">${p.val}</b></div>`).join("")}</div>`}function r_(o){if(o=(o||[]).filter(q=>q.n>=10),!o||o.length<2){let q=o&&o[0];return q?`${__t(47)}${q.t}: ${Math.round(q.ok/q.n*100)}${__t(48)}${q.n}${__t(49)}`:__t(50)}let c=q=>{let[dt,J]=q.t.split(":").map(Number);return dt*60+J},f=c(o[0]),p=Math.max(f+60,c(o[o.length-1])),v=300,S=112,I=24,N=q=>I+(q-f)*(v-I-8)/(p-f),P=q=>8+(100-q)/100*(S-26),F=q=>q.n?q.ok/q.n*100:100,H=o.map(q=>[N(c(q)),P(F(q)),q]),_=q=>q[0].toFixed(1)+","+q[1].toFixed(1),b=[],A=[];H.forEach((q,dt)=>{dt&&c(q[2])-c(H[dt-1][2])>45&&(b.push(A),A=[]),A.push(q)}),b.push(A);let B=H[H.length-1],st=[];for(let q=Math.ceil(f/180)*3;q*60<p;q+=3)q*60>f+20&&st.push(q);let rt=Math.round(o.reduce((q,dt)=>q+dt.ok,0)/Math.max(1,o.reduce((q,dt)=>q+dt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${v} ${S}${__t(51)}${[100,75,50,25].map(q=>`<line x1="${I}" x2="${v-4}" y1="${P(q)}" y2="${P(q)}" class="gl"/><text x="2" y="${P(q)+3}" class="ax">${q}%</text>`).join("")}
      <line x1="${I}" x2="${v-4}" y1="${P(rt)}" y2="${P(rt)}" class="avg"/>
      ${b.filter(q=>q.length).map(q=>`<polygon points="${_([q[0][0],P(0)])} ${q.map(_).join(" ")} ${_([q[q.length-1][0],P(0)])}" class="ar"/><polyline points="${q.map(_).join(" ")}" class="ln"/>`).join("")}
      ${H.map(([q,dt,J])=>`<circle cx="${q.toFixed(1)}" cy="${dt.toFixed(1)}" r="6" class="hit"><title>${J.t} \xB7 ${Math.round(F(J))}${__t(52)}${J.n}${__t(53)}${J.d5}${__t(54)}${Ms(J.avg)}${J.nd?` \xB7 ${J.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${B[0].toFixed(1)}" cy="${B[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(B[0],v-30).toFixed(1)}" y="${(B[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(F(B[2]))}%</text>
      ${st.map(q=>`<text x="${N(q*60).toFixed(1)}" y="${S-4}" class="ax" text-anchor="middle">${String(q).padStart(2,"0")}h</text>`).join("")}
      <text x="${I}" y="${S-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${rt}%)</small>`}function a_(){Nl();let o=ee(),c=ae.filter(N=>N.real&&E()&&o.live),f=c.filter(N=>V.delays.has(N.v.tid)),p=f.length,v=c.length-p,S=`${__t(57)}`;if(p){let N=f.filter(dt=>dt.dl<3).length,P=f.filter(dt=>dt.dl>=5).length,F=f.filter(dt=>dt.stop==="via").length,H=Math.round(N/p*100);S+=`${__t(58)}${p}${__t(59)}${v?` \xB7 ${v}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${ys(H)}"><b>${H}${__t(60)}${ys(100-P/p*100*2)}" title="${Math.round(P/p*100)}${__t(61)}${P}${__t(62)}${F===0?"g":F<=2?"w":"b"}"><b>${F}${__t(63)}`;let _=new Map;f.forEach(dt=>{let J=dt.fam,le=_.get(J)||{n:0,ok:0,sum:0};le.n++,le.ok+=dt.dl<3,le.sum+=Math.max(0,dt.dl),_.set(J,le)});let b=[..._].filter(([dt])=>X[dt]).sort((dt,J)=>dt[1].ok/dt[1].n-J[1].ok/J[1].n||J[1].sum/J[1].n-dt[1].sum/dt[1].n),A=b.filter(([,dt])=>dt.ok<dt.n),B=b.filter(([,dt])=>dt.ok===dt.n);S+=`${__t(65)}`+(A.length?"":__t(66))+Ya(A.map(([dt,J])=>({lab:En(dt),w:J.ok/J.n,c:Ss[ys(J.ok/J.n*100)],val:`${Math.round(J.ok/J.n*100)}% <small>${Ms(J.sum/J.n)}</small>`,tip:`${dt}: ${J.ok}${__t(67)}${J.n}${__t(68)}${Ms(J.sum/J.n)}`})))+(B.length?`${__t(69)}${B.map(([dt])=>En(dt)).join(" ")}</p>`:"");let st=new Map;f.forEach(dt=>{if(!dt.tr||dt.v.next==null||dt.v.next<0||dt.v.pre)return;let J=dt.tr.pat.stops[dt.v.next],le=st.get(J)||{n:0,sum:0};le.n++,le.sum+=Math.max(0,dt.dl),st.set(J,le)});let rt=[...st].filter(([,dt])=>dt.sum/dt.n>=1).sort((dt,J)=>J[1].sum/J[1].n-dt[1].sum/dt[1].n).slice(0,8),q=rt.length?rt[0][1].sum/rt[0][1].n:1;S+=`${__t(70)}`+(rt.length?Ya(rt.map(([dt,J])=>({lab:`<span class="sn" data-gs="${dt}">${m(T[dt].n)}</span>`,w:J.sum/J.n/q,c:gp(J.sum/J.n),val:`${Ms(J.sum/J.n)} <small>${J.n} ${J.n===1?"tren":__t(71)}</small>`,tip:`${T[dt].n}: ${J.n}${__t(72)}${Ms(J.sum/J.n)}${__t(73)}`}))):__t(74))}else S+=`${__t(75)}`;let I=be.hoy;S+=`<button type="button" class="hmore" data-cols>${mn.on?__t(76):__t(77)}</button>`;{ro("");let N=[...Oi.m].filter(([P,F])=>X[P]&&F[0]>=3).map(([P,F])=>[P,F[1]/F[0]]).sort((P,F)=>P[1]-F[1]);N.length&&!E()?S+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:N.length&&(S+=`${__t(80)}`+Ya(N.slice(0,8).map(([P,F])=>({lab:En(P),w:F,c:Ss[ys(F*100)],val:`${Math.round(F*100)}%`,tip:`${P}: ${Math.round(F*100)}${__t(81)}`}))))}{let N=(A,B)=>{let st=(A&&A.snaps||[]).filter(dt=>dt.n&&(!B||dt.t<=B)),rt=st.reduce((dt,J)=>dt+J.n,0),q=st.reduce((dt,J)=>dt+J.ok,0);return rt?q/rt*100:null},P=(be.hoy&&be.hoy.snaps||[]).filter(A=>A.n).map(A=>A.t).pop(),F=N(be.hoy),H=N(be.ayer,P),_=F!=null?Math.round(F):null,b=H!=null?Math.round(H):null;F!=null&&(S+=`${__t(82)}${ys(F)}">${Math.round(F)}${__t(83)}${H!=null?`<span>${P?__t(84):__t(85)} <b class="${ys(H)}">${b} %</b></span><span>${_>b?__t(86):_<b?__t(87):__t(88)}</span>`:""}</div>`)}if(S+=`${__t(89)}`,I&&I.snaps){S+=r_(I.snaps);let N=Object.entries(I.st||{}).map(([H,_])=>[zt.get(H),_]).filter(([H,_])=>H!=null&&_.n>=3).map(([H,_])=>[H,_.sum/_.n/60,_]).filter(H=>H[1]>=1).sort((H,_)=>_[1]-H[1]).slice(0,8);if(N.length){let H=N[0][1];S+=`${__t(90)}`+Ya(N.map(([_,b,A])=>({lab:`<span class="sn" data-gs="${_}">${m(T[_].n)}</span>`,w:b/H,c:gp(b),val:`${Ms(b)}${__t(91)}${Math.round(A.max/60)}</small>`,tip:`${T[_].n}: ${A.n}${__t(92)}${A.d5}${__t(93)}${Math.round(A.max/60)} min`})))}let P=Object.entries(I.lines||{}).filter(([H,_])=>X[H]&&_.n>=3).sort((H,_)=>H[1].ok/H[1].n-_[1].ok/_[1].n);P.length&&(S+=`${__t(94)}`+Ya(P.map(([H,_])=>({lab:En(H),w:_.ok/_.n,c:Ss[ys(_.ok/_.n*100)],val:`${Math.round(_.ok/_.n*100)}% <small>${Ms(_.sum/_.n/60)}</small>`,tip:`${H}${__t(95)}${Math.round(_.ok/_.n*100)}${__t(96)}${Math.round(_.max/60)} min`}))));let F=I.upd?(Date.now()-Date.parse(I.upd))/6e4:0;S+=`<small class="snote">${F>40?`${__t(98)}${ms(F<90?Math.round(F)+" min":F<2160?Math.round(F/60)+" h":Math.round(F/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((I.upd||"").slice(11,16))} \xB7 ${(I.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else S+=`<p class="snote">${be.at?__t(102):__t(103)}</p>`;return S+"</div>"}function o_(o){let c=ee(),f=ae.filter(b=>(b.fam||b.tr&&b.tr.fam)===o),p=f.filter(b=>b.real),v=f.length,S=f.filter(b=>b.dl>=5).length,I=f.filter(b=>b.dl<3).length,N=f.filter(b=>b.stop==="via"||b.broke).length,P=V.alerts.filter(b=>b.fams.has(o)),F=b=>{let A=b.tr;if(!A)return"";let B=b.v;if(b.real&&B){let rt=B.next>=0?T[A.pat.stops[B.next]].n:"";return B.atStop>=0?`${__t(104)}${T[A.pat.stops[B.atStop]].n}`:rt?`${__t(105)}${rt}`:""}let st=b.p;return st&&st.next!=null&&st.next>=0?`${__t(105)}${T[A.pat.stops[st.next]].n}`:""},H=f.slice().sort((b,A)=>A.dl-b.dl).slice(0,40).map(b=>{let A=b.tr;return`<li class="go${Ka({num:A?A.num:b.v.num,tid:A?A.tid:b.v.tid})?" sel":""}" data-gt="${m(A?A.num:b.v.num)}|${m(b.real?b.v.tid:A?A.tid:"")}"><b>${m(A?A.num:b.v.num)}</b><span>${A?Ai(T[A.pat.stops[A.pat.stops.length-1]].n,o):""} <small>${m(F(b))}</small></span>${b.dl>=1?`<em class="dl ${Ui(b.dl)}">+${Math.round(b.dl)}</em>`:__t(106)}</li>`}).join(""),_=ro(o);return`<div class="tc sts" style="--c:${X[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${En(o)}${__t(107)}${c.live?`${__t(111)}${v}${__t(112)}${p.length<v?` (${p.length}${__t(113)}`:""}`:`${__t(114)}${nt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${v?ys(I/v*100):""}"><b>${v?Math.round(I/v*100)+"%":"\u2014"}${__t(108)}${S?S/Math.max(1,v)>.2?"b":"w":"g"}"><b>${S}${__t(109)}${N?"b":"g"}"><b>${N}${__t(110)}${P.length?c_(P):__t(115)}${_<.7?`${__t(116)}${Math.round(_*100)}${__t(117)}`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol class="${Fl.v?"":"lshort"}">${H||__t(118)}</ol>${f.length>6?`<button type="button" class="hmore" data-lmore>${Fl.v?__t(119):`\u25BE ${__t(120)} ${Math.min(40,f.length)} ${__t(71)}`}</button>`:""}
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div>${l_(o)}</div>`}let Fl={v:!1};function l_(o){let c=pp(o),f=di.filter(P=>P.fam===o);if(!c)return`<h4>${__t(121)}</h4><p class="snote">${be.at?__t(122):__t(103)}</p>`;let p=c.since&&c.since>new Date(Date.now()-29*864e5).toISOString().slice(0,10)?`${__t(123)} ${s_(c.since)}`:`${__t(124)}`,v=Math.min(30,c.days),S=`${__t(125)} ${v} ${__t(126)}`,I=c.of>1?(c.pos<=c.of/2?`${En(o)} ${__t(127)} <b>${c.pos}.\xAA ${__t(128)}</b> ${__t(129)} ${c.of}`:`${En(o)} ${__t(127)} <b>${c.of-c.pos+1}.\xAA ${__t(130)}</b> ${__t(129)} ${c.of}`)+" \xB7 ":"",N=f.map(P=>{let F=fp(P),H=zt.get(P.sid),_=P.dest&&zt.get(P.dest);return`<li><b>${m(P.t)}</b><span>${m(H!=null?T[H].n:"")}${_!=null?" \u2192 "+m(T[_].n):""}<small>${F.n?`${__t(131)} <b>${F.late} ${__t(129)} ${F.n} ${__t(126)}</b>${F.nc?` \xB7 <b>${F.nc} ${F.nc===1?__t(132):__t(133)}</b>`:""} \xB7 ${__t(134)} \u2248 <b>${mp(F.sum)}</b>`:__t(135)}</small></span></li>`}).join("");return`<h4>${S}</h4>
      <div class="kpis"><div class="kpi ${ys(c.pct)}"><b>${Math.round(c.pct)}%</b><span>${__t(136)}<br>(\u22123 min)</span></div><div class="kpi ${c.avg>=4?"b":c.avg>=2.5?"w":c.avg>=1.5?"y":"g"}"><b>${Ms(c.avg).replace(" min","")}</b><span>${__t(137)}<br>${__t(138)}</span></div>${c.since?`<div class="kpi ${c.nc?c.nc>=10?"b":"w":"g"}"><b>${c.nc}</b><span>${c.nc===1?__t(139):__t(140)}<br>${p}</span></div>`:`<div class="kpi nx"><b>\u2014</b><span>${__t(141)}<br>${__t(142)}</span></div>`}</div>
      <p class="snote">${I}${__t(143)} +${c.max} min \xB7 ${c.days} ${__t(144)}</p>
      <h4>${__t(145)}</h4>${f.length?`<ol class="l30f">${N}</ol>`:`<p class="snote">${__t(146)}</p>`}
      <div class="rtb"><button type="button" data-share30>\u{1F4E4} ${__t(147)}</button></div>
      <small class="snote">${__t(148)}</small>`}let c_=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${eo(c)} ${m(c.txt)} <small>${no(c)}</small></p>`).join("")}</div>`,mn={on:!1,mesh:null};function _p(){let o=be.hoy,c=[];if(o&&o.st)for(let[f,p]of Object.entries(o.st)){let v=zt.get(f);v!=null&&p.n>=2&&c.push([v,p.sum/p.n/60,p.n])}if(!c.length){let f=new Map;ae.forEach(p=>{if(!p.real||!p.tr||p.v.next==null||p.v.next<0||p.v.pre||!V.delays.has(p.v.tid))return;let v=p.tr.pat.stops[p.v.next],S=f.get(v)||[0,0];S[0]+=Math.max(0,p.dl),S[1]++,f.set(v,S)}),f.forEach((p,v)=>c.push([v,p[0]/p[1],p[1]]))}return c}let xp=()=>Math.min(1,Math.max(.22,r.dist/110));function h_(){if(!mn.mesh||!mn.d)return;let o=xp();if(Math.abs(o-mn.r)<.04)return;mn.r=o;let c=new qe;mn.d.forEach(([f,p],v)=>{c.makeScale(o,o,.3+Math.min(p,40)*.3),c.setPosition(T[f].w[0],T[f].w[1],z),mn.mesh.setMatrixAt(v,c)}),mn.mesh.instanceMatrix.needsUpdate=!0,a()}function u_(){if(mn.mesh&&(e.remove(mn.mesh),mn.mesh.geometry.dispose(),mn.mesh.material.dispose(),mn.mesh=null),!mn.on){a();return}let o=_p();if(!o.length){Je(__t(149)),mn.on=!1;return}let c=new Ho(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new Tr({fog:!1}),p=new ko(c,f,o.length),v=new qe,S=new xe;mn.d=o,mn.r=xp(),o.forEach(([I,N],P)=>{let F=.3+Math.min(N,40)*.3;v.makeScale(mn.r,mn.r,F),v.setPosition(T[I].w[0],T[I].w[1],z),p.setMatrixAt(P,v),S.set(N>10?"#dc2626":N>5?"#ea7a0c":N>=1?"#eab308":"#16a34a"),p.setColorAt(P,S)}),p.renderOrder=25,p.frustumCulled=!1,e.add(p),mn.mesh=p,s.tilt<.5&&(s.tilt=.85),a()}let Hr=document.createElement("button");Hr.type="button",Hr.id="sbtn",Hr.title=__t(150),Hr.innerHTML=__t(151),Hr.onclick=()=>{Ct=!Ct,Ct&&(Ot=_e=!1,be.at=0),d._h="",Ue(),a()},document.body.appendChild(Hr);function d_(){r.dist<45!=Dn<45&&(Dn=r.dist,Hn()),h_(),f_(),Ni()}let bs=[],wn=new Z;function f_(){let o=0;if(mn.on){let f=_p().sort((v,S)=>S[1]-v[1]),p=[];for(let[v,S]of f){if(o>=30)break;if(wn.set(T[v].w[0],T[v].w[1],z).project(n),wn.z>1||Math.abs(wn.x)>1||Math.abs(wn.y)>1)continue;let I=(wn.x*.5+.5)*innerWidth,N=(-wn.y*.5+.5)*innerHeight;if(p.some(([F,H])=>Math.abs(F-I)<90&&Math.abs(H-N)<18))continue;p.push([I,N]);let P=bs[o]||(bs[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=T[v].n+" +"+Math.round(S)+"\u2032",P.dataset.i=v,P.style.display="block",P.style.transform=`translate(${Math.round(I+8)}px,${Math.round(N-8)}px)`,o++}for(;o<bs.length;o++)bs[o].style.display="none";return}if(r.dist<30){let f=[];for(let p=0;p<ne;p++)Vn[p]<4||(wn.set(T[p].w[0],T[p].w[1],z).project(n),!(wn.z>1||Math.abs(wn.x)>1.05||Math.abs(wn.y)>1.05)&&f.push([p,(wn.x*.5+.5)*innerWidth,(-wn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[p,v,S]of f){let I=bs[o]||(bs[o]=Object.assign(document.createElement("div"),{className:"slab"}));I.isConnected||document.body.appendChild(I),I.textContent=T[p].n,I.dataset.i=p,I.style.display="block",I.style.transform=`translate(${Math.round(v+8)}px,${Math.round(S-7)}px)`,o++}}for(;o<bs.length;o++)bs[o].style.display="none"}function Bl(o){return wn.set(o[0],o[1],z).project(n),[(wn.x*.5+.5)*innerWidth,(-wn.y*.5+.5)*innerHeight,wn.z]}function vp(o,c,f,p){let v=null,S=f*f;for(let I of ae){let[N,P,F]=Bl(I.p.w);if(F>1)continue;let H=(N-o)**2+(P-c)**2;H<S&&(S=H,v={a:I})}if(v)return v;S=p*p;for(let I=0;I<ne;I++){if(!Vn[I])continue;let[N,P,F]=Bl(T[I].w);if(F>1)continue;let H=(N-o)**2+(P-c)**2;H<S&&(S=H,v={s:I})}return v}let dr=!1;window.__rodHide=()=>{dr=!0},document.addEventListener("click",o=>{dr&&!o.target.closest("#mcs, canvas")&&(dr=!1)},!0),window.__rodTap=(o,c)=>{let f=null,p=1e9;for(let S of bs){if(S.style.display==="none")continue;let I=S.getBoundingClientRect();if(o>=I.left-4&&o<=I.right+4&&c>=I.top-4&&c<=I.bottom+4){let N=Math.abs(c-(I.top+I.bottom)/2)*4+(o-I.left);N<p&&(p=N,f=S)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let v=vp(o,c,24,18);return v&&(v.a||v.s!=null)&&(dr=!1),v&&(v.a||v.s!=null)&&(ie.st=-1),v&&v.a?(Ot=!1,_e=!1,Ct=!1,Mt=v.a.tr||{vtid:v.a.v.tid},me=-1,Nt=null,Hn(),Ue(),Me=0,a(),!0):v&&v.s!=null?(Ot=!1,_e=!1,Ct=!1,me=v.s,Mt=null,Nt=null,Hn(),Ue(),a(),!0):!1},window.__rodHover=(o,c)=>{let f=vp(o,c,14,10);if(f&&f.a){let p=f.a,v=p.tr?T[p.tr.pat.stops[p.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${p.c}">\u25A0</span> ${m(p.fam||p.tr&&p.tr.fam||"?")}${__t(152)}${m(p.tr?p.tr.num:p.v.num)}</b><small>${v?__t(105)+m(v):""}${p.real?(p.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(p.dl)} min</b>`:__t(153))+__t(154):__t(155)}</small>`}return f&&f.s!=null?`<b>${m(T[f.s].n)}</b><small>${[...T[f.s].fams].sort(O).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ie.st=-1,dr=!1,Ot=_e=Ct=!1,Mt=null,Nt=null,me=o,Hn(),d._h="",Ue(),a()};{let o=x("#rc"),c=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(p=>p.text()).then(p=>{let v=(p.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];v&&f&&v!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Nl()}catch{}},2500),setInterval(()=>{try{be.at=0,Nl()}catch{}},15*6e4);let ui={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Za=matchMedia("(prefers-color-scheme: dark)");function kl(){let o=ui.mode==="dark"||ui.mode==="auto"&&Za.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<ne;f++)Ze.set(o?[.06,.08,.11]:[1,1,1],f*3);re.attributes.fill.needsUpdate=!0,Cl.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),fr.textContent=ui.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ui.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",fr.title=__t(156)+{auto:__t(157),dark:__t(158),light:"desactivado"}[ui.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let fr=document.createElement("button");fr.type="button",fr.id="tbtn",fr.onclick=()=>{ui.mode=ui.mode==="auto"?Za.matches?"light":"dark":ui.mode==="dark"?"light":"dark",ui.mode==="dark"===Za.matches&&(ui.mode="auto");try{localStorage.setItem("rod_theme",ui.mode)}catch{}kl(),Je(fr.title)},document.body.appendChild(fr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(159),o.innerHTML=__t(160),document.body.appendChild(o)}Za.addEventListener&&Za.addEventListener("change",kl),kl(),window.__rodTick=Qt,window.__rodFrame=d_,window.__rodResize=()=>{Zt.resolution.set(innerWidth,innerHeight),Ht.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Ti={st:-1,f:new Set},yp=o=>{let c=[...T[o].fams].sort(O);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Ti.f.size?"":"on"}${__t(161)}`:""}${c.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${Ti.f.size&&!Ti.f.has(f)?"off":""}${ut.has(f)?"":" hid"}" style="--c:${X[f]}">${m(f)}</button>`).join("")}</div>${c.some(f=>!ut.has(f))?__t(162):""}`},p_=o=>{let c=(o||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),p=parseInt(c.slice(2,4),16),v=parseInt(c.slice(4,6),16);return(.299*f+.587*p+.114*v)/255>.62?"#1d2330":"#fff"},Ai=(o,c)=>{let f=X[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${p_(f)}" title="${m(c||"")}">${m(o)}</span>`},$l=o=>{let c=T[o]&&T[o].id;return je.st.includes(c)?"\u{1F3E0} ":ze.st.includes(c)?"\u{1F4BC} ":""},Ui=o=>o>10?"d-hi":o>5?"d-md":"d-lo",m_=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Ja={ref:null,m:new Map};function Ou(o){if(Ja.ref!==V.alerts){Ja.ref=V.alerts,Ja.m=new Map;for(let c of V.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let p of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Ja.m.set(p[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return Ja.m.get(String(o))||null}let ja={ref:null,m:new Map};function Sp(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if(ja.ref!==V.alerts){ja.ref=V.alerts,ja.m=new Map;for(let p of V.alerts)if(p.src==="Rodalies"&&m_.test(p.es||p.txt))for(let v of(p.es||p.txt).matchAll(/\b(\d{4,6})\b/g))ja.m.set(v[1],p)}let f=ja.m.get(c);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Ka=o=>{try{let c=Mt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},Mp=(o,c)=>{let f=C(o,c.min-1,c.min+240).sort((p,v)=>p.est-v.est).slice(0,6);return f.length?`${__t(163)}${f.map(p=>`<li><b>${nt(p.est)}</b>${En(p.fam)}<span>${Ai(p.dest,p.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},di=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),bp=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(di))}catch{}},wp=(o,c)=>{if(o.num===String(c.num))return!0;let f=t.days.indexOf(ee().ymd),p=f>=0?Gr(o,f):null;return!!p&&String(p.num)===String(c.num)},Ep=o=>{let c=o.pat.stops.slice(0,-1),f=[...je.st,...ze.st];return c.find(p=>f.includes(T[p].id))??c.find(p=>It.st.includes(T[p].id))??o.pat.stops[0]},Tp=o=>!!o&&di.some(c=>wp(c,o)),Se=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),ws=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Se))}catch{}},zl=(o,c)=>!!(Se&&o&&Se.num===String(o.num)&&Se.sid===T[o.pat.stops[c]].id);function Vl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Je(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function g_(){if(!Se||Se.done)return;let o=ee();if(!o.live)return;let c=t.days.indexOf(o.ymd),f=(et[c]||[]).find(P=>String(P.num)===Se.num)||(et[c-1]||[]).find(P=>String(P.num)===Se.num);if(!f)return;let p=f.pat.stops.findIndex(P=>T[P].id===Se.sid);if(p<0)return;let v=mt(f),S=typeof v=="number"?Math.max(0,v/60):0,I=f.day===c-1?1440:0,N=f.t0+f.pat.t[2*p]+S-I;if(N-o.min<-3){Se.done=!0,ws();return}if(window.__schedAt&&N-2-o.min>.1&&(Se.sch==null||Math.abs(Se.sch-N)>=.5)&&(Se.sch=N,Se.nat=Date.now()+(N-2-o.min)*6e4,ws(),window.__schedAt(7701,`${__t(164)}${T[f.pat.stops[p]].n}`,__t(165)+` (${nt(N)})`+(P=>P?` \xB7 ${__t(166)} ${P.fam} ${__t(167)} ${nt(P.est)}${P.plat?__t(168)+P.plat:""}`:"")(Yl.get(Se.sid)),Date.now()+(N-2-o.min)*6e4)),N-o.min<=2){Se.done=!0,ws();let P=Yl.get(Se.sid),F=P?` \xB7 ${P.lost?__t(169)+" \xB7 "+__t(170):__t(166)} ${P.fam} ${__t(167)} ${nt(P.est)}${P.plat?__t(168)+P.plat:""}`:"",H=Math.round(N-o.min),b=(H>=1?`${__t(172)} ${H}${__t(171)}${nt(N)}) \xB7 ${__t(173)}`:`${__t(174)} (${nt(N)}) \xB7 ${__t(173)}`)+F;window.__schedAt&&Se.nat&&Date.now()>=Se.nat-2e4?document.hidden||Vl(`${__t(164)}${T[f.pat.stops[p]].n}`,b):(window.__schedOff&&window.__schedOff(7701),Vl(`${__t(164)}${T[f.pat.stops[p]].n}`,b))}}function Gr(o,c){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),p=et[c]||[],v=(N,P)=>N.t0+N.pat.t[2*P+1],S=null,I=11;for(let N of p){let P=N.pat.stops.findIndex(H=>T[H].id===o.sid);if(P<0||P===N.pat.stops.length-1)continue;let F=Math.abs(v(N,P)-f)+(String(N.num)===o.num?-5:0)+(N.fam===o.fam?0:20)+(o.dest&&T[N.pat.stops[N.pat.stops.length-1]].id!==o.dest?3:0);F<I&&(I=F,S=N)}return S}let Hl=new Set;function __(){if(!di.length)return;let o=ee();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let f of di){let p=Gr(f,c);if(!p)continue;let v=p.pat.stops.findIndex(H=>T[H].id===f.sid);if(v<0)continue;let S=p.t0+p.pat.t[2*v+1],I=mt(p),N=typeof I=="number"?I/60:0,P=S-o.min;if(P<-2||P>60)continue;let F=o.ymd+f.num+(I==="X"?"X":N>=10?10:N>=5?5:0);Hl.has(F)||(I==="X"||N>=5?(Hl.add(F),Vl(`${__t(175)}${nt(S)} ${I==="X"?__t(176):`${__t(177)}${Math.round(N)} min`}`,`${p.fam} ${p.num}${__t(178)}${T[p.pat.stops[v]].n}${I==="X"?"":`${__t(179)}${nt(S+N)}`}`)):P<=20&&!Hl.has(o.ymd+f.num+"ok")&&V.vp.has(p.tid)&&(Hl.add(o.ymd+f.num+"ok"),Je(`${__t(175)}${nt(S)}${__t(180)}`)))}}setInterval(()=>{try{g_(),__()}catch{}},15e3);let En=o=>`<span class="ln" style="--c:${X[o]}">${m(o)}</span>`;{let o=f=>{let p=/^#?([0-9a-f]{6})$/i.exec(f||"");return p?[0,2,4].map(v=>{let S=parseInt(p[1].slice(v,v+2),16)/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)}).reduce((v,S,I)=>v+S*[.2126,.7152,.0722][I],0):0},c=[...new Set(Object.values(X))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function Ap(o,c){return c?o==="X"?__t(182):o>=60?`<span class="st late ${Ui(o/60)}${__t(183)}${Math.round(o/60)} min</span>`:__t(184):`<span class="st sch">${__t(181)}</span>`}function Fu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,p=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let v=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;v&&(p=Math.min(p,v.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,p)))+"px")}function Es(){try{let o=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!Ve.on||Ve.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(_=>o.style.removeProperty(_)),o._fit=0);return}let v=o.getBoundingClientRect().top,S=c.getBoundingClientRect().top-8,I=Math.max(140,Math.floor(S-v)),N=f&&f.getClientRects().length?f.getBoundingClientRect():null,P=N?Math.max(10,Math.ceil(innerWidth-N.left+8)):10;o._fit=I+"|"+P;let F=o.style,H={"max-height":I+"px",height:"auto",bottom:"auto",width:"auto",right:P+"px"};for(let _ in H)(F.getPropertyValue(_)!==H[_]||F.getPropertyPriority(_)!=="important")&&F.setProperty(_,H[_],"important")}catch{}}setInterval(()=>{Ve.on&&Ve.cur==="map"&&Es()},700);try{new MutationObserver(()=>Es()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Es;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=p=>{let v=document.querySelector(p);if(!v||!v.getClientRects().length)return"\u2014";let S=v.getBoundingClientRect();return[S.left,S.top,S.right,S.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Ve.on?Ve.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Es,80));try{new ResizeObserver(()=>Es()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Es,80));function Ue(){try{x_()}finally{requestAnimationFrame(Es),window.__rodTabSync&&window.__rodTabSync();try{Fu()}catch{}}}function x_(){if(!Mt&&me<0&&!_e&&!Ot&&!Ct&&!Yt){dr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),ju();return}let o=ee(),c="",f=E()&&o.live,p=(_,b)=>V.alerts.filter(A=>[...A.fams].some(B=>_.has(B))||b!=null&&A.stops.has(b)),v=_=>_.length?`<div class="al">${_.slice(0,4).map(b=>`<p>\u26A0\uFE0F ${eo(b)} ${[...b.fams].sort(O).slice(0,6).map(En).join(" ")} ${m(b.txt)} <small>${no(b)}</small></p>`).join("")}${_.length>4?`<small>y ${_.length-4}${__t(185)}`:""}</div>`:"",S=Mt&&f?ae.find(_=>_.real&&(Mt.vtid?_.v.tid===Mt.vtid:_.tr===Mt)):null;if(Yt&&!Ct&&!Ot&&!_e&&!Mt&&me<0)c=o_(Yt);else if(Ct)c=a_();else if(Ot)c=`${__t(186)}${m(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(188)}${__t(187)}`;else if(_e){let _=V.alerts.filter(b=>[...b.fams].some(A=>ut.has(A))||!b.fams.size);c=`${__t(189)}${_.length}${__t(190)}${_.map(b=>`<div class="al"><p>${eo(b)} ${[...b.fams].sort(O).map(En).join(" ")} <small>${no(b)}</small></p><p>${m(b.txt)}</p></div>`).join("")||__t(192)}${__t(191)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(193):`${__t(194)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(S){let _=S.v,b=S.tr,A=Te=>m(T[b.pat.stops[Te]].n),B=b?b.pat.stops.length:0,st=zt.get(_.sid),rt=st!=null?m(T[st].n):m(_.sid),q=b&&_.atStop>=0?A(_.atStop):"",dt=b&&_.next>=0?A(_.next):rt,J=b&&_.next>0?A(_.next-1):"",le=S.broke||Sp(S),ve=le?`<b class="stopv">\u26A0\uFE0F ${le.why==="aviso"?__t(195):`${__t(196)}${le.min} min`}</b>${b&&J?`${__t(197)}${J}${__t(198)}${dt}</b>`:""}`:S.stop==="via"&&b?`${__t(199)}${J?`${__t(201)}${J}${__t(198)}${dt}</b>`:`${__t(202)}${dt}</b>`}${__t(200)}${Math.max(1,Math.round(_.still/60))} min`:_.pre&&b?_.prevTr?`${__t(203)}${m(_.prevTr.num)}${__t(204)}${A(0)}</b>${_.prevDl>=1?`${__t(207)}${Math.round(_.prevDl)} min</b>`:""}${__t(205)}${nt(_.arrO)}${__t(206)}${nt(_.depEst)}</b>${_.preDl>=1?`${__t(208)}${nt(_.dep0)})`:""}`:`${__t(209)}${A(0)}${__t(210)}${nt(_.dep0+S.dl)}</b>`:q&&_.before?`Llegando a <b>${q}</b>`:(_.st==="STOPPED_AT"||S.stop==="st")&&q?`${__t(211)}${q}</b>`:q&&_.next>=0&&_.atStop!==_.next?`${__t(212)}${q}${__t(204)}${dt}</b>`:J?`${__t(213)}${J}${__t(198)}${dt}</b>`:`${__t(214)}${dt}</b>`,Jt=b&&_.next>=0&&!_.pre?nt(ao(b,_,_.next,b.t0+b.pat.t[2*_.next]+S.dl)):"",ke=[];if(b){let Te=S.idx>=0?S.idx:0,Pe=_.pre?Math.max(S.dl,_.preDl||0):S.dl,Ke=$e=>b.t0+b.pat.t[$e]+Pe;for(let $e=Te;$e<B;$e++)ke.push(`<li class="${$l(b.pat.stops[$e])?"mine":""}${zl(b,$e)?" alm":""}"><b>${nt(ao(b,_,$e,Ke($e===0?1:2*$e)))}</b><span title="${A($e)}">${$l(b.pat.stops[$e])}${A($e)}</span>${Pe>=1?`<em class="dl ${Ui(Pe)}">${_.pre?"\u2248":""}+${Math.round(Pe)}</em>`:""}${$e>0?`<button type="button" class="abtn" data-alarm="${$e}" title="${__t(215)}">${zl(b,$e)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${S.c}"><button class="x" data-cx>\xD7</button><div>${En(S.fam)}${__t(216)}${m(b?b.num:_.num)}${__t(217)}${b?`<h3 class="rt"><span class="o" title="${A(0)}">${A(0)}</span><span class="ar">\u2192</span>${Ai(T[b.pat.stops[B-1]].n,b.fam)}</h3>`:""}
        <p>${ve}${Jt?`${__t(218)}${Jt}`:""}${_.plat&&_.st==="STOPPED_AT"&&q?`${__t(219)}${m(_.plat)}</b>`:""}</p><p>${_.pre&&_.prevTr?_.preDl>=1?`${__t(220)}${Math.round(_.preDl)}${__t(221)}`:__t(222):Ap(V.delays.get(_.tid),V.delays.has(_.tid))}${(()=>{let Te=b&&Ul(b.num);return Te&&Te.n>=2?`${__t(223)}${Te.n}${__t(224)}${Te.late?`${__t(225)} <b>${Te.late} ${__t(129)} ${Te.n} ${__t(126)}</b> ${__t(226)}`:__t(227)} \xB7 ${__t(228)} ${Te.avg<.5?"0":"+"+Math.round(Te.avg)} min</span>`:""})()}${(()=>{let Te=b&&Ou(b.num);return Te?`<span class="why" title="${m(Te.txt)}">${Te.why?__t(229)+m(Te.why):__t(230)}</span>`:""})()}</p>
        <small>${_.pre?`${__t(231)}${ms(yu(S.age))}`:_.est?__t(232):`${__t(233)}${ms(yu(S.age))}${S.age>120?__t(234):""}`}</small>
        ${ke.length?`${S.dl>=1||_.pre&&_.preDl>=1?`${__t(235)}`:""}<ol class="stops">${ke.join("")}</ol>`:""}${v(p(new Set([S.fam])))}
        ${Xl(b?b.num:_.num,"",S.fam)}${b?`<div class="rtb two"><button type="button" data-fav>${Tp(b)?__t(236):__t(237)}</button><button type="button" data-follow>${ql(b)?__t(238):__t(239)}</button></div>`:""}</div>`}else if(Mt&&f&&!Mt.pat)c=`${__t(240)}${m(Mt.num||Mt.vtid||"")}${__t(241)}`;else if(Mt){let _=Mt,b=_.pat,A=b.stops.length,B=mt(_),st=typeof B=="number"?B/60:0,rt=t.days.indexOf(o.ymd),q=_.day===rt-1?1440:0,dt=o.min+q-_.t0-st,J=$s(_,dt),le=Pe=>_.t0+b.t[Pe]+st,ve=Pe=>m(T[b.stops[Pe]].n),Jt=__t(242);J&&(Jt=J.moving?`${__t(243)}${ve(J.next)}${__t(244)}${nt(le(2*J.next))}`:J.at===A-1?`${__t(245)}${ve(A-1)}</b>`:`${__t(211)}${ve(J.at)}${__t(246)}${nt(le(2*J.at+1))}`);let ke=J?J.next:0,Te=[];for(let Pe=ke;Pe<A;Pe++)Te.push(`<li class="${$l(b.stops[Pe])?"mine":""}${zl(_,Pe)?" alm":""}"><b>${nt(ao(_,null,Pe,le(2*Pe)))}</b><span title="${ve(Pe)}">${$l(b.stops[Pe])}${ve(Pe)}</span>${st>=1?`<em class="dl ${Ui(st)}">+${Math.round(st)}</em>`:""}${Pe>0?`<button type="button" class="abtn" data-alarm="${Pe}" title="${__t(215)}">${zl(_,Pe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${_.c}"><button class="x" data-cx>\xD7</button><div>${En(_.fam)}${__t(216)}${m(_.num)}</b> <span class="pv">${__t(250)}</span></div><h3 class="rt"><span class="o" title="${ve(0)}">${ve(0)}</span><span class="ar">\u2192</span>${Ai(T[_.pat.stops[A-1]].n,_.fam)}</h3>
        <p>${Jt}</p><p>${Ap(B,B!=null)}${(()=>{let Pe=Ul(_.num);return Pe&&Pe.n>=2?`${__t(223)}${Pe.n}${__t(224)}${Pe.late?`${__t(225)} <b>${Pe.late} ${__t(129)} ${Pe.n} ${__t(126)}</b> ${__t(226)}`:__t(227)} \xB7 ${__t(228)} ${Pe.avg<.5?"0":"+"+Math.round(Pe.avg)} min</span>`:""})()}${__t(247)}${nt(_.t0+b.t[1])}${__t(248)}${nt(_.t0+b.t[2*A-2])}${__t(249)}${st>=1?__t(235):""}<ol class="stops">${Te.join("")}</ol>${Xl(_.num,"",_.fam)}<div class="rtb two"><button type="button" data-fav>${Tp(_)?__t(236):__t(237)}</button><button type="button" data-follow>${ql(_)?__t(238):__t(239)}</button></div></div>`}else{let _=me,b=t.days.indexOf(o.ymd),A=[];Ti.st!==_&&(Ti.st=_,Ti.f.clear());let B=J=>(!X[J]||ut.has(J))&&(!Ti.f.size||Ti.f.has(J));if(b>=0){let J=(le,ve)=>{for(let Jt of le){if(!B(Jt.fam))continue;let ke=Jt.pat.stops.indexOf(_);if(ke<0||ke===Jt.pat.stops.length-1)continue;let Te=mt(Jt),Pe=typeof Te=="number"?Te/60:0,Ke=Jt.t0+Jt.pat.t[2*ke+1]-ve;Ke+Pe<o.min-1||Ke>o.min+360||A.push({tr:Jt,t:Ke,dl:Pe,d:Te,on:V.vp.has(Jt.tid),past:o.min>Jt.t0+Jt.pat.t[1]-ve+2})}};J(et[b],0),b>0&&J(et[b-1],1440)}A.sort((J,le)=>J.t+J.dl-le.t-le.dl);let st=T[_].id,rt=Ft.get(st),q=(f||U()&&o.live)&&V.url;q&&(!rt||Date.now()-rt.at>Lp())&&!rt?.loading&&(Ft.set(st,{...rt||{},loading:!0,at:rt?rt.at:0}),Pt(ce(),"/departures.json?stationId="+st).then(J=>{Ft.set(st,{at:Date.now(),d:J}),me===_&&(d._h="",Ue())}).catch(()=>Ft.set(st,{at:Date.now(),err:1})));let dt=q&&rt&&rt.d&&Array.isArray(rt.d.trains)&&rt.d.trains.length?rt.d.trains:null;if(dt){let J=new Map([...V.vp.values()].map(Jt=>[String((pt.get(Jt.tid)||{}).num||Jt.num),Jt])),le=new Map(Zn(_).map(Jt=>[String(Jt.num),Jt])),ve=dt.filter(Jt=>B((Jt.line||{}).id||"")).slice(0,40).map(Jt=>{let ke=String(Jt.commercialNumber||Jt.technicalNumber||""),Te=le.get(ke),Pe=Te?nt(Te.est):(Jt.departureDateHourSelectedStation||"").slice(11,16),Ke=(Jt.line||{}).id||"",$e=J.get(ke),xn=Te?Math.round(Te.dl)*60:$e?V.delays.get($e.tid):null,xr=Te&&(Te.gone||!Te.live&&Te.est<o.min-1);return`<li class="go${xr?" old":""}${Ka({num:ke,tid:$e?$e.tid:""})?" sel":""}" data-gt="${m(ke)}|${$e?m($e.tid):""}"><b>${m(Pe)}</b>${X[Ke]?En(Ke):`<span class="ln" style="--c:#6b7385">${m(Ke||"?")}</span>`}<span>${Ai((Jt.destinationStation||{}).name||"",Ke)}${Jt.trainObservations?` \xB7 <i>${m(Jt.trainObservations)}</i>`:""}${xr?` <small class="oldt">${Te.gone?__t(251):__t(252)}</small>`:""}</span>${Jt.trainCancelled?__t(253):typeof xn=="number"&&xn>=60?`<em class="dl ${Ui(xn/60)}">+${Math.round(xn/60)}</em>`:""}${Jt.platformSelectedStation?`${__t(254)}${m(Jt.platformSelectedStation)}</i>`:""}${$e?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[_].n)}</h3>${yp(_)}${Xl("",T[_].id,"")}${__t(255)}${ve||__t(257)}</ol>${Mp(_,o)}${v(p(T[_].fams,_))}${__t(256)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[_].n)}</h3>${yp(_)}${Xl("",T[_].id,"")}
        <small style="margin-top:6px">${f&&V.url?__t(259):""}${__t(258)}${f?__t(260):__t(261)}</small>
        <ol>${A.slice(0,40).map(J=>`<li class="go${Ka({num:J.tr.num,tid:J.tr.tid})?" sel":""}" data-gt="${m(J.tr.num)}|${m(J.tr.tid)}"><b>${nt(J.t+J.dl)}</b>${En(J.tr.fam)}<span>${Ai(T[J.tr.pat.stops[J.tr.pat.stops.length-1]].n,J.tr.fam)}</span>${J.d==="X"?__t(253):J.dl>=1?`<em class="dl ${Ui(J.dl)}">+${Math.round(J.dl)}</em>`:""}${f?J.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':J.past?__t(262):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(263)}</ol>${Mp(_,o)}${v(p(T[_].fams,_))}${__t(256)}`}let I=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())){let _=rt=>((rt&&rt.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),b=d.querySelector(".tc"),A=_(b),B=b?b.scrollTop:0;d.innerHTML=c,d._h=c,d.scrollTop=I;let st=d.querySelector(".tc");st&&B&&A&&_(st)===A&&(st.scrollTop=B)}if(d.style.display="flex",d.classList.toggle("min",dr),ju(),innerWidth<=640){let _=d.querySelector(".tc");if(_&&!_.querySelector(".mn")){let b=document.createElement("button");b.type="button",b.className="mn",b.setAttribute("aria-label",__t(264)),b.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",b.onclick=B=>{B.stopPropagation(),d.classList.toggle("peek"),d.classList.contains("peek")&&(Wr="",d.querySelectorAll("details[open]").forEach(st=>st.open=!1)),d.scrollTop=0,d.querySelectorAll(".tc").forEach(st=>st.scrollTop=0),requestAnimationFrame(Es),Fu(),b.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE"};let A=_.querySelector(".x");_.insertBefore(b,A?A.nextSibling:_.firstChild)}}else d.classList.remove("peek");let N=x("#rc");if(innerWidth<=640&&!N.classList.contains("min")&&!Ue.done&&(Ue.done=1,x("#rcgrab").click()),innerWidth<=640){let _=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-_-16)+"px"}else if(innerHeight<=500){let _=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-_-20+"px"}else d.style.top="",d.style.width=Ct?"390px":"300px",d.style.maxHeight="";Es();let F=d.querySelector("[data-cx]");F&&(F.onclick=_=>{if(_.stopPropagation(),Ue.done=0,Ct||Ot||_e||Yt&&!Mt&&me<0){Ct=Ot=_e=!1,Mt||me>=0||(Yt=""),d._h="",Ue(),a();return}if(Mt&&ie.st>=0){let b=ie.st;ie.st=-1,Mt=null,Nt=null,me=b,Hn(),d._h="",Ue(),Me=0,a();return}if(Mt&&ql(Mt)){let b=Mt,A=[...hn],B=Se?{...Se}:null,st=d.querySelector("[data-follow]");st&&st.click(),setTimeout(()=>Je(`${__t(265)} \xB7 ${b.fam||""} ${b.num}`,{label:__t(266),fn:()=>{A.forEach(([rt,q])=>pi(rt,q)),B&&!Se&&(Se=B,ws()),Bi("map"),Hs({num:String(b.num),tid:b.tid&&V.vp.has(b.tid)?b.tid:"",tr:b}),Nt=Mt,d._h="",Ue(),Ee(!0),a()}}),0)}ie.st=-1,_e=!1,Ot=!1,Ct=!1,Mt=null,me=-1,Nt=null,Hn(),Ue(),Me=0,a()}),Pp(d),d.querySelectorAll("[data-alarm]").forEach(_=>_.onclick=b=>{b.stopPropagation();let A=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!A)return;let B=+_.dataset.alarm,st=T[A.pat.stops[B]].id;Se&&Se.num===String(A.num)&&Se.sid===st?(Se=null,window.__schedOff&&window.__schedOff(7701),Je(__t(267))):(Se={num:String(A.num),sid:st,at:Date.now()},Je(`${__t(268)}${T[A.pat.stops[B]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),ws(),d._h="",Ue()});{let _=d.querySelector("[data-fav]");_&&(_.onclick=b=>{b.stopPropagation();let A=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!A)return;let B=di.findIndex(st=>wp(st,A));if(B>=0)di.splice(B,1),Je(__t(269));else{let st=Ep(A);di.push({num:String(A.num),fam:A.fam,sid:T[st].id,dest:T[A.pat.stops[A.pat.stops.length-1]].id,t:nt(A.t0+A.pat.t[2*A.pat.stops.indexOf(st)+1])}),Je(`${__t(270)}${A.fam}${__t(271)}${di[di.length-1].t}${__t(178)}${T[st].n}${__t(272)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}bp(),d._h="",Ue(),Ee(!0)})}{let _=d.querySelector("[data-share]");_&&(_.onclick=()=>{let b=Yt,A=ae.filter(q=>(q.fam||q.tr&&q.tr.fam)===b),B=A.filter(q=>q.dl>=5).sort((q,dt)=>dt.dl-q.dl),st=V.alerts.filter(q=>q.fams.has(b)),rt=`${b}${__t(273)}${nt(ee().min)}: ${A.length}${__t(274)}${B.length}${__t(275)}${B.length?" ("+B.slice(0,4).map(q=>`${q.tr?q.tr.num:q.v.num} +${Math.round(q.dl)}`).join(", ")+")":""}.${st.length?__t(276)+st[0].txt:__t(277)}`;navigator.share?navigator.share({text:rt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(rt),Je(__t(278)+rt.slice(0,60)+"\u2026"))})}{let _=d.querySelector("[data-lmore]");_&&(_.onclick=()=>{Fl.v=!Fl.v,d._h="",Ue()})}{let _=d.querySelector("[data-share30]");_&&(_.onclick=()=>{let b=Yt,A=pp(b);if(!A)return;let B=di.filter(rt=>rt.fam===b).map(rt=>[rt,fp(rt)]).filter(([,rt])=>rt.n),st=`${__t(279)} ${b} ${__t(280)} ${Math.min(30,A.days)} ${__t(126)}: ${Math.round(A.pct)} % ${__t(281)}, ${__t(282)} ${Ms(A.avg)}${A.nc?`, ${A.nc} ${A.nc===1?__t(139):__t(140)}`:""}.${B.map(([rt,q])=>` ${__t(283)} ${rt.t} ${__t(284)} ${q.late} ${__t(129)} ${q.n} ${__t(126)} (\u2248 ${mp(q.sum)} ${__t(285)}).`).join("")} ${__t(286)}`;navigator.share?navigator.share({text:st}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(st),Je(__t(278)+st.slice(0,60)+"\u2026"))})}{let _=d.querySelector("[data-cols]");_&&(_.onclick=()=>{mn.on=!mn.on,u_(),d._h="",Ue()})}d.querySelectorAll("[data-gs]").forEach(_=>_.onclick=()=>{let b=+_.dataset.gs;Ct=!1,window.__rodPickStation(b),Object.assign(s,{tx:T[b].w[0],ty:T[b].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(_=>_.onclick=b=>{b.stopPropagation();let A=_.dataset.sf;A?Ti.f.has(A)?Ti.f.delete(A):Ti.f.add(A):Ti.f.clear(),d._h="",Ue()}),d.querySelectorAll("[data-gt]").forEach(_=>_.onclick=()=>{ie.st=me;let[b,A]=_.dataset.gt.split("|"),B=pt.get(A);Hs({num:b,tid:V.vp.has(A)?A:"",tr:B||null})}),d.querySelectorAll("[data-sethome]").forEach(_=>_.onclick=()=>Qu(me,_.dataset.sethome));let H=d.querySelector("[data-follow]");H&&(H.onclick=()=>{let _=ql(Mt);if(Nt=_?null:Mt,!_&&Mt&&Mt.num!=null){let b=Mt.pat.stops,A=String(Mt.num),B=null,st=1e9;for(let rt of[je,ze,It]){let q=In(rt);if(q==null||!b.includes(q)||rt===It&&!It.st.length)continue;let dt=Zn(q).find(J=>String(J.num)===A&&!J.gone);dt&&dt.est<st&&(st=dt.est,B=rt)}B?pi(B.key,A):[...hn.keys()].forEach(rt=>pi(rt,null)),Ee(!0)}if(_&&Mt&&Mt.num!=null){let b=String(Mt.num);[...hn].forEach(([A,B])=>{String(B)===b&&pi(A,null)}),Nn.num===b&&(Nn.num=""),Et.tid===b&&(Et.tid="",Et.lock=!1,Et.manual=0,Et.quiet=Date.now()+10*6e4),Se&&Se.num===b&&(Se=null,ws(),window.__schedOff&&window.__schedOff(7701)),Ee(!0)}Nt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ue(),a()})}window.__rodCard=Ue;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(Mt||me>=0||_e||Ot)&&(d._h="",Ue())},x("#ver").onclick=()=>{Ot=!0,Ct=!1,_e=!1,d._h="",Ue()};let v_={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},y_={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function Cp(o){let c={vacio:1,lleno:2,petado:3}[o],f=c?[0,1,2].map(p=>`<rect x="${4+p*6}" y="${14-p*4}" width="4" height="${6+p*4}" rx="1" ${p<c?'fill="currentColor"':""}/>`).join(""):v_[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${y_[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let Gl=new Proxy({},{get:(o,c)=>Cp(c)}),Wr="",S_=["vacio","lleno","petado",__t(287),"calor","abordo"],M_=["gente","retraso","cancel","ascensor","via"],b_={vacio:__t(288),lleno:__t(289),petado:__t(290),parado:__t(291),calor:__t(292),abordo:__t(293),gente:__t(294),retraso:__t(295),cancel:__t(296),ascensor:__t(297),via:__t(298)},Wl=o=>(V.tipos||b_)[o]||o,Bu=(o,c)=>(V.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||c&&f.sid===String(c)&&!f.num||o&&c&&f.num===String(o)&&f.sid===String(c)),Rp=o=>{let c=Math.round((Date.now()+(V.repSkew||0)-o.at)/6e4);return c<1?__t(299):ms(c+" min")},Qa=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Xl(o,c,f){if(!V.url||!V.repOk)return"";let p=Bu(o,c),v=o?S_:M_;return`<div class="crowd"><small>${Cp("gente")} ${__t(301)}${p.length?"":__t(302)}</small>${p.map(S=>`<p><span>${Gl[S.kind]||"\u2022"} <b>${m(Wl(S.kind))}</b> <small>${S.up>1?S.up+__t(303):""}${Rp(S)}</small></span>${Qa.has(S.id)?"<small>\u2713</small>":`<button type="button" data-rv="${S.id}:1">${__t(304)}</button><button type="button" data-rv="${S.id}:-1">${__t(305)}</button>`}</p>`).join("")}
      <details data-ckd="${m(String(o||"")+"|"+String(c||""))}"${Wr===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(306):__t(307)}</summary><div class="ckb">${v.map(S=>`<button type="button" data-rk="${S}" data-rn="${m(o||"")}" data-rs="${m(c||"")}" data-rl="${m(f||"")}">${Gl[S]} ${m(Wl(S))}</button>`).join("")}${__t(300)}`}async function Ip(o,c){try{let p=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!p.ok){Je(p.err||__t(308));return}if(p.id){Qa.add(p.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Qa].slice(-300)))}catch{}}Je(c==="/vote"?__t(309):p.n>1?`${__t(310)}${p.n}${__t(311)}`:__t(312));let v=await Pt(ce(),"/reports.json");v&&v.items&&(V.rep=v.items),d._h="",Ue(),Ee(!0)}catch{Je(__t(313))}}function Pp(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Wr=c.open?c.dataset.ckd:Wr===c.dataset.ckd?"":Wr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Wr="",Ip({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[p,v]=c.dataset.rv.split(":");Qa.add(+p);try{localStorage.setItem("rod_votes",JSON.stringify([...Qa].slice(-300)))}catch{}Ip({id:+p,v:+v},"/vote")})}let to=0;function Je(o,c){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,c){let p=document.createElement("button");p.type="button",p.className="tact",p.textContent=c.label,p.onclick=v=>{v.stopPropagation(),clearTimeout(to),f.className="",c.fn()},f.appendChild(p)}if(f.className="on",clearTimeout(to),to=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),!f._tap){f._tap=1,f.onclick=()=>{clearTimeout(to),f.className=""};let p=null,v=0;f.addEventListener("touchstart",S=>{p=S.touches[0].clientY,v=0,f.style.transition="none"},{passive:!0}),f.addEventListener("touchmove",S=>{p!=null&&(v=Math.min(0,S.touches[0].clientY-p),f.style.translate=`0 ${v}px`,f.style.opacity=String(Math.max(.2,1+v/80)))},{passive:!0}),f.addEventListener("touchend",()=>{f.style.transition="",f.style.translate="",f.style.opacity="",p!=null&&v<-25&&(clearTimeout(to),f.className=""),p=null})}}function eo(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(314):m(o.src)}</b>`:""}function no(o){if(!o.when)return"";let[c,f]=o.when.split("T"),p=yt(new Date),v=p.ymd.slice(0,4)+"-"+p.ymd.slice(4,6)+"-"+p.ymd.slice(6,8);if(c===v&&f){let S=Math.round(p.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return S<1?__t(299):S<60?ms(S+" min"):`${__t(315)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function ku(){let o=x("#alr");if(!o)return;let c=V.alerts.filter(f=>[...f.fams].some(p=>ut.has(p))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(316):__t(317)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{Ot=!1,Ct=!1,_e=!0,Ue()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(318)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let p=getSelection();p.removeAllRanges(),p.addRange(f),x("#wcopy").textContent=__t(319)}setTimeout(()=>x("#wcopy").textContent=__t(320),2500)};let w_=zt.get("71801");function Lp(){return document.hidden?hn.size||Se?12e4:1e12:3e4}function Dp(o,c){let f=T[o].id,p=Ft.get(f);!(Y()&&V.url)||p&&(p.loading||Date.now()-p.at<Lp())||(Ft.set(f,{...p||{},loading:!0,at:p?p.at:0}),Pt(ce(),"/departures.json?stationId="+f).then(v=>{Ft.set(f,{at:Date.now(),d:v}),c&&c()}).catch(()=>Ft.set(f,{at:Date.now(),err:1})))}let Np=o=>+o.slice(0,2)*60+ +o.slice(3,5),io={k:-2,m:null};function Ts(o){let c=t.days.indexOf(ee().ymd);if(io.k!==c){io.k=c,io.m=new Map;for(let f of et[c]||[])io.m.set(String(f.num),f)}return io.m.get(String(o))||null}let Oi={at:0,m:new Map},so=o=>E()?(ro(""),[...o].filter(c=>{let f=Oi.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(O)):[];function ro(o){if(Date.now()-Oi.at>6e4||Oi.vp!==V.vp){Oi.at=Date.now(),Oi.vp=V.vp,Oi.m=new Map;let f=ee(),p=t.days.indexOf(f.ymd);if(p>=0)for(let v of et[p]){let S=f.min-v.t0;if(S<v.pat.t[1]+3||S>v.pat.t[v.pat.t.length-2]-3)continue;let I=Oi.m.get(v.fam)||[0,0];I[0]++,V.vp.has(v.tid)&&I[1]++,Oi.m.set(v.fam,I)}}let c=Oi.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function ao(o,c,f,p){let v=T[o.pat.stops[f]].id;if([...je.st,...ze.st].includes(v)){let S=Zn(o.pat.stops[f]).find(I=>String(I.num)===String(o.num));if(S&&!S.gone)return S.est}return $u(o,c,f,0,p)}function Up(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let p=te(o.pat).stopD,v=o.pat.t,S,I,N=p.reduce((P,F,H)=>Math.abs(F-c.dObs)<Math.abs(p[P]-c.dObs)?H:P,0);if(Math.abs(p[N]-c.dObs)<.16||c.atStop===N)S=v[2*N+1]??v[2*N],I=N;else{let P=p.findIndex(H=>H>c.dObs);if(P<=0)return null;let F=Math.min(1,Math.max(0,(c.dObs-p[P-1])/(p[P]-p[P-1]||1)));S=v[2*P-1]+F*(v[2*P]-v[2*P-1]),I=P-1}return{t:yt(new Date).min-f/60,tpos:S,j0:I,sd:p}}function $u(o,c,f,p,v){let S=Up(o,c);if(!S||f<=S.j0&&!(f===S.j0&&p===1))return v;let I=o.pat.t,N=S.t+(I[2*f+p]??I[2*f])-S.tpos;if(N-S.t>45)return v;let P=(v%1440+1440)%1440,F=((N-P+720)%1440+1440)%1440-720;return F>=-3&&F<=5?v+F:v}function $1(o,c,f,p){let v=Up(o,c);if(!v)return null;let S=$u(o,c,f,1,v.t+o.pat.t[2*f+1]-v.tpos);return S-p.min>30||S<p.min-1?null:S}function Zn(o,c){let f=ee(),p=(E()||U())&&f.live&&!c,v=Ft.get(T[o].id),S=[],I=new Map([...V.vp.values()].map(P=>[String((pt.get(P.tid)||{}).num||P.num),P]));if(p&&v&&v.d&&Array.isArray(v.d.trains)&&v.d.trains.length)for(let P of v.d.trains){let F=(P.departureDateHourSelectedStation||"").slice(11,16);if(!F)continue;let H=String(P.commercialNumber||P.technicalNumber||""),_=I.get(H),b=_?V.delays.get(_.tid):null,A=Math.max(typeof b=="number"?Math.max(0,b/60):0,_&&_.pre&&_.preDl||0),B=Np(F);B<f.min-720&&(B+=1440);let st=+(P.departureDateHourSelectedStation||"").slice(17,19)||0,rt=B+st/60,q=_&&pt.get(_.tid)||Ts(H),dt=q?q.pat.stops.indexOf(o):-1,J=dt>=0?(q.t0+q.pat.t[2*dt+1])%1440:null;if(J!=null){for(;J<rt-720;)J+=1440;for(;J>rt+720;)J-=1440;Math.abs(rt-J)>120&&(J=null)}let le,ve;J==null?(le=st||!A?rt:rt+A,ve=st?0:A):st||Math.abs(rt-J)>=1?(le=rt,ve=Math.max(0,rt-J)):(le=J+A,ve=A);let Jt=!1;if(q&&!_&&dt>0&&!st){let ke=t.days.indexOf(f.ymd),Te=q.day===ke-1?1440:q.day===ke+1?-1440:0,Pe=q.t0+q.pat.t[1]-Te;if(f.min<Pe){let Ke=Pe+(q.pat.t[2*dt+1]-q.pat.t[1]);Ke>le+1&&(le=Ke,Jt=!0,J!=null&&(ve=Math.max(0,le-J)))}}if(J!=null&&(B=Math.round(J)),_&&q&&dt>=0){let ke=$u(q,_,dt,1,le);ke!==le&&(le=Math.max(ke,f.min),J!=null&&(ve=Math.max(0,le-J)))}S.push({dubious:Jt,rodLive:!!st,sm:B,est:le,dl:ve,fam:(P.line||{}).id||"",dest:(P.destinationStation||{}).name||"",destId:(P.destinationStation||{}).id||"",plat:P.platformSelectedStation||"",cancel:!!P.trainCancelled,obs:P.trainObservations||"",live:!!_,num:H,tid:_?_.tid:"",tr:_&&pt.get(_.tid)||Ts(H),src:"oficial"})}else{let P=t.days.indexOf(f.ymd);if(P<0)return S;let F=(H,_)=>{for(let b of H){let A=b.pat.stops.indexOf(o);if(A<0||A===b.pat.stops.length-1)continue;let B=mt(b),st=typeof B=="number"?Math.max(0,B/60):0,rt=b.t0+b.pat.t[2*A+1]-_;if(rt+st<f.min-1||rt>f.min+(f.min>1080||f.min<300?600:360))continue;let q=b.pat.stops[b.pat.stops.length-1];S.push({sm:rt,est:rt+st,dl:st,fam:b.fam,dest:T[q].n,destId:T[q].id,plat:"",cancel:B==="X",obs:"",live:V.vp.has(b.tid),num:b.num,tid:b.tid,tr:b,src:"horario"})}};F(et[P],0),P>0&&F(et[P-1],1440),P+1<t.days.length&&f.min>1080&&F(et[P+1],-1440)}if(p){let P=new Set(S.map(_=>String(_.num))),F=t.days.indexOf(f.ymd),H=(_,b)=>{for(let A of _||[]){if(P.has(String(A.num)))continue;let B=A.pat.stops.indexOf(o);if(B<0||B===A.pat.stops.length-1)continue;let st=A.t0+A.pat.t[2*B+1]-b;if(st<f.min-45||st>f.min+1||!V.vp.get(A.tid))continue;let q=V.delays.get(A.tid),dt=typeof q=="number"?Math.max(0,q/60):0,J=A.pat.stops[A.pat.stops.length-1];S.push({sm:st,est:st+dt,dl:dt,fam:A.fam,dest:T[J].n,destId:T[J].id,plat:"",cancel:!1,obs:"",live:!0,num:A.num,tid:A.tid,tr:A,src:"horario"})}};F>=0&&(H(et[F],0),F>0&&H(et[F-1],1440));for(let _ of S){let b=_.tid&&V.vp.get(_.tid),A=_.tr?_.tr.pat.stops.indexOf(o):-1;_.passed=!!(b&&A>=0&&!b.pre&&b.next!=null&&b.next>=0&&b.next>A&&b.atStop!==A),!_.passed&&_.live&&_.est<f.min&&(_.est=f.min,_.late=!0),_.passed&&(_.gone=!0)}}let N=S.filter(P=>P.gone?f.min-P.est<20:P.est>=f.min-.5).sort((P,F)=>P.est-F.est);{let P=N.filter(F=>F.gone);if(P.length>2){let F=new Set(P.slice(0,P.length-2));N=N.filter(H=>!F.has(H))}}if(!N.filter(P=>!P.gone).length&&S.length&&S[0].src==="oficial"&&!c)return Zn(o,!0);for(let P of N){let F=P.num&&Ou(P.num);F&&F.cx&&(P.cancel=!0,P.cxWhy=F.txt)}if(E()&&f.live){let P=t.days.indexOf(f.ymd);for(let F of N){if(F.live||F.cancel||!F.tr)continue;let H=F.tr.day===P-1?1440:F.tr.day===P+1?-1440:0,_=F.tr.t0+F.tr.pat.t[1]-H+(F.dl||0);F.noPos=f.min>_+3&&!F.rodLive,F.ghost=F.noPos&&ro(F.fam)>=.7}}if(c||(N=N.concat(C(o,f.min-.5,f.min+360)).sort((P,F)=>P.est-F.est)),!c&&N.some(P=>P.src==="oficial")){let P=S.filter(_=>_.src==="oficial"),F=Math.max(...P.map(_=>_.sm)),H=new Set(N.map(_=>String(_.num)));N=N.concat(Zn(o,!0).filter(_=>!_.gone&&_.sm<=F&&_.est>=f.min-.5&&!H.has(String(_.num))).map(_=>Object.assign(_,{unconf:!0}))).sort((_,b)=>_.est-b.est)}if(N.some(P=>P.src==="oficial")){let P=Math.max(...N.map(H=>H.sm)),F=new Set(N.map(H=>String(H.num)));N=N.concat(Zn(o,!0).filter(H=>H.sm>P&&!F.has(String(H.num))))}return N}let Op=(o,c,f,p)=>{let v={key:o,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let S=JSON.parse(localStorage.getItem("rod_"+o)||"null");S&&Object.assign(v,S)}catch{}return!v.st.length&&p&&(v.st=p),v},je=Op("home","\u{1F3E0}",__t(321),null),ze=Op("work","\u{1F4BC}",__t(322),null),It={key:"near",ico:"\u{1F4CD}",name:__t(323),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""};try{let o=t.days.indexOf(ee().ymd),c=[...je.st,...ze.st],f=!1;if(o>=0)for(let p of di){if(c.includes(p.sid))continue;let v=Gr(p,o);if(!v)continue;let S=Ep(v);S==null||!c.includes(T[S].id)||(p.sid=T[S].id,p.t=nt(v.t0+v.pat.t[2*v.pat.stops.indexOf(S)+1]),p.num=String(v.num),f=!0)}f&&bp()}catch{}let Vs=[It,je,ze];try{It.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}je.open=!1,ze.open=!1;function Fp(o,c){let f=bt(o,c),p=bt(o,c+.009);return 1/Math.hypot(p[0]-f[0],p[1]-f[1])}function zu(o){if(!navigator.geolocation){It.err=__t(324),Ee(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:p}=c.coords,v=bt(f,p),S=Fp(f,p),I=T.map((H,_)=>[_,Math.hypot(H.w[0]-v[0],H.w[1]-v[1])*S]).filter(([H])=>T[H].fams.size).sort((H,_)=>H[1]-_[1]),N=I.filter(([,H],_)=>_===0||H<Math.max(2.5,I[0][1]*1.6)).slice(0,3),P=It.st[0]!==T[N[0][0]].id;It.w=v,It.k=S,It.acc=c.coords.accuracy!=null?c.coords.accuracy:999,It.st=N.map(([H])=>T[H].id),It.dist=Object.fromEntries(N.map(([H,_])=>[T[H].id,_])),It.fix=Date.now(),It.err="",P&&(It.i=0);let F=[je,ze].find(H=>H.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5);Ee(!0)},c=>{It.err=c.code===1?__t(325):__t(326),Ee(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Bp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>zu(!0),400);let Et={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===yt(new Date).ymd&&(Et.tid=o.tid,Et.manual=o.manual||0,Et.lock=!!o.lock)}catch{}let kp="";setInterval(()=>{let o=Et.tid+"|"+(Et.manual||0)+"|"+(Et.lock?1:0);if(o!==kp){kp=o;try{Et.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:Et.tid,manual:Et.manual||0,lock:!!Et.lock,at:Date.now(),ymd:yt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Nn={num:"",until:0};function ql(o){return!!o&&(Nt===o||o.num!=null&&([...hn.values()].some(c=>String(c)===String(o.num))||String(Et.tid)===String(o.num)))}let $p=()=>{let o=new Set([...hn.values()].map(String));return Nn.num&&Nn.until>Date.now()&&o.add(Nn.num),o};function Vu(o,c){return!!o&&o.est-c.min<=3&&c.min-o.est<=20}function Hu(o){Je(o?`${__t(327)} (${o})`:__t(327))}function oo(o,c,f){o=String(o),Et.tid&&Et.tid!==o&&Et.no.set(Et.tid,Date.now()+20*6e4),Et.tid=o,Et.cand=null,Et.lock=c==="lock",Et.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...hn].forEach(([S,I])=>{String(I)!==o&&pi(S,null)}),Nn.num=o,Nn.until=Date.now()+90*6e4;let p=new Set;for(let S of Vs){let I=In(S);I!=null&&(S.platAt||S.goAt||S===It&&It.st&&It.st.length)&&p.add(I)}for(let S of Vs)(S.platAt||S.goAt||c!=="auto"&&S.open)&&(S.platAt=0,S.goAt=0,c!=="auto"&&(S.open=!1),fi(S));window.__lpAt=Date.now();let v=ae.find(S=>S.tr&&String(S.tr.num)===o)||R(ee()).out.find(S=>S.tr&&String(S.tr.num)===o);if(c!=="auto"){let S=v?v.tr:Ts(o);if(S){Nt=S,Mt=S,me=-1,Ve.sk="t"+(S.num||S.vtid),Ot=_e=Ct=!1,d._h="";try{Ue(),a()}catch{}}if(![...hn.values()].some(I=>String(I)===o)){let I=f||null,N=1e9;if(!I)for(let P of[je,ze,It]){let F=In(P),H=F!=null?Zn(F).find(_=>String(_.num)===o&&!_.gone):null;H&&H.est<N&&(N=H.est,I=P.key)}I&&pi(I,o)}}if(v){Nt=v.tr;let S=v.tr.pat.stops,I=v.real?v.v.next:v.p.next,N=[...je.st,...ze.st,...Yl.keys()],P=S.findIndex((F,H)=>H>=I&&!p.has(F)&&N.includes(T[F].id));P>0&&!(Se&&Se.num===o)&&(Se={num:o,sid:T[S[P]].id,at:Date.now()},ws())}return v}function E_(){let o=Et.fixes;if(o.length<2)return;let c=o[o.length-1],f=o.slice().reverse().find(A=>c.t-A.t>=8e3&&c.t-A.t<=9e4);if(!f)return;let p=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,v=c.spd!=null&&c.spd>0?c.spd*3.6:p/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(Et.tid&&!Et.lock&&v<8){if(!Et.slow)Et.slow=c.t;else if(c.t-Et.slow>9e4&&T.some(A=>A.w&&Math.hypot(A.w[0]-c.w[0],A.w[1]-c.w[1])*c.k<.35)){Et.tid="",Et.manual=0,Et.lock=!1,Et.slow=0,Et.quiet=Date.now()+10*6e4,Nt=null,Ee(!0);return}}else Et.slow=0;if(!Et.tid&&Et.quiet&&Date.now()<Et.quiet||Et.manual&&Date.now()<Et.manual)return;if(Et.tid){if(v<22)return;let A=ae.find(B=>B.tr&&String(B.tr.num)===Et.tid)||R(ee()).out.find(B=>B.tr&&String(B.tr.num)===Et.tid);if(A){if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=5){Et.far=0;return}if(Et.far||(Et.far=c.t),c.t-Et.far<12e4)return}Et.far=0}let S=$p();if(!Et.tid&&S.size&&v>=15&&v<=200&&!(c.acc!=null&&c.acc>80))for(let A of[...ae.filter(B=>B.real),...R(ee()).out]){if(!A.tr||!S.has(String(A.tr.num))||(Et.no.get(String(A.tr.num))||0)>Date.now())continue;if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=(A.real?1.6:2.2)){zp(A);return}}if(v<22||v>200)return;let I=[c.w[0]-f.w[0],c.w[1]-f.w[1]],N=null,P=2.5,F=ae.filter(A=>A.real),H=R(ee()).out.filter(A=>A.tr&&!F.some(B=>B.tr&&String(B.tr.num)===String(A.tr.num))),_=$p();for(let A of[...F,...H]){if(!A.tr||_.size&&!_.has(String(A.tr.num)))continue;let B=A.real?2.5:3.5,st=Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k;if(st>Math.min(P,B)||N&&N.real&&!A.real)continue;let rt=A.real?A.v.next:A.p.next;if(rt==null||rt<0)continue;let q=T[A.tr.pat.stops[rt]].w,dt=[q[0]-A.p.w[0],q[1]-A.p.w[1]];if(dt[0]*I[0]+dt[1]*I[1]<=0)continue;let J=String(A.tr.num);(Et.no.get(J)||0)>Date.now()||(P=st,N=A)}if(!N){Et.cand=null;return}let b=String(N.tr.num);if(Et.tid!==b&&!(c.acc!=null&&c.acc>50)){if(!Et.cand||Et.cand.k!==b){Et.cand={k:b,t:c.t};return}c.t-Et.cand.t<2e4||zp(N)}}function zp(o){let c=String(o.tr.num);oo(c,"auto"),Ot=_e=Ct=!1,me=-1,Mt=o.tr,Nt=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click()),Hn(),d._h="",Ue(),Me=0,a();let f=x("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(328)}${m(o.tr.fam)} ${m(o.tr.num)}${__t(329)}${m(T[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(330)}${Se&&Se.num===c?`${__t(332)}${m(T[zt.get(Se.sid)].n)}`:""}${__t(331)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{Et.no.set(c,Date.now()+20*6e4),Et.tid="",Et.lock=!1,Nt=null,Mt=null,d._h="",Ue(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=null,f=0,p=()=>!!(Vs.some(P=>P.goAt)||f>Date.now()&&!Et.lock),v=P=>{let{longitude:F,latitude:H}=P.coords,_={t:P.timestamp||Date.now(),w:bt(F,H),k:Fp(F,H),spd:P.coords.speed,acc:P.coords.accuracy};if(!(Et.fixes.length&&Et.fixes[Et.fixes.length-1].t===_.t)){Et.fixes.push(_),Et.fixes=Et.fixes.filter(b=>_.t-b.t<12e4);{let b=Et.fixes.find(B=>_.t-B.t>=2e4),A=_.spd!=null&&_.spd>0?_.spd*3.6:b?Math.hypot(_.w[0]-b.w[0],_.w[1]-b.w[1])*_.k/((_.t-b.t)/36e5):0;A>=15&&A<250&&(_.acc==null||_.acc<300)&&(f=Date.now()+10*6e4)}try{ee().live&&E_()}catch{}}},S=0,I=()=>{if(!(o!=null||S))if(c=p(),c)o=navigator.geolocation.watchPosition(v,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let P=()=>navigator.geolocation.getCurrentPosition(v,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});P(),S=setInterval(P,6e4)}};setInterval(()=>{(o!=null||S)&&p()!==c&&(N(),I())},15e3);let N=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null),S&&(clearInterval(S),S=0)};setTimeout(I,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?N():(Et.fixes=[],I())})}setInterval(()=>{!document.hidden&&(Date.now()-It.fix>11e4||Vs.some(o=>o.goAt))&&zu(!1)},3e4);let fi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},In=o=>o.st.length?zt.get(o.st[o.i]||o.st[0]):null;function Vp(o,c,f,p){if(p&&c.bus)return c.bstops.slice(1).some(I=>p.has(I))?"to":"out";if(p&&c.tr){let I=c.tr.pat.stops,N=I.indexOf(o);if(N>=0&&I.slice(N+1).some(P=>p.has(P)))return"to"}if(p&&c.tr)return"out";let v=zt.get(c.destId)??T.findIndex(I=>I.n===c.dest);if(v<0||v==null||f==null)return"otros";let S=I=>Math.hypot(T[I].w[0]-T[f].w[0],T[I].w[1]-T[f].w[1]);return S(v)<S(o)?"to":"out"}let pr=o=>o<1?__t(299):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Hp=0,T_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Gp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Wp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,lo=o=>{let c=o.es||o.txt;return Gp.test(c)||Gp.test(o.txt)?3:Wp.test(c)||Wp.test(o.txt)||o.lvl>=2?2:1},Xp=4,Gu=new Map,Yl=new Map;function qp(o,c){let f=t.days.indexOf(ee().ymd),p=f+"|"+o+"|"+[...c].join(",");if(Gu.has(p))return Gu.get(p);let v=!1,S=new Set,I=new Set;for(let P of et[f]||[]){let F=P.pat.stops,H=F.indexOf(o);if(H>=0)for(let b=H+1;b<F.length;b++){if(c.has(F[b])){v=!0;break}S.add(F[b])}let _=-1;for(let b=1;b<F.length;b++)if(c.has(F[b])){_=b;break}if(_>0)for(let b=0;b<_;b++)I.add(F[b])}let N=v?null:[...S].filter(P=>I.has(P)&&P!==o&&!c.has(P));return Gu.set(p,N),N}function Wu(o,c,f,p){for(let v of p||Zn(o)){if(v.cancel||v.gone||!v.tr||v.est<c-.01)continue;let S=v.tr.pat.stops,I=S.indexOf(o);if(I<0)continue;let N=-1;for(let P=I+1;P<S.length;P++)if(f.has(S[P])){N=P;break}if(!(N<0))return{c:v,fin:v.est+(v.tr.pat.t[2*N]-v.tr.pat.t[2*I+1])}}return null}function A_(o,c,f){let p=Wu(o,c+2,f,Zn(o));return p?{c:p.c,fin:p.fin,m:p.c.est-c,lost:!1}:null}function Xu(o,c,f,p,v){let S=null,I=new Map,N=Zn(o).filter(P=>!P.cancel&&!P.gone&&P.tr&&P.est-v.min>=p).slice(0,8);for(let P of N){let F=P.tr.pat.stops,H=F.indexOf(o);if(!(H<0))for(let _ of f){let b=F.indexOf(_);if(b<=H)continue;let A=P.est+(P.tr.pat.t[2*b]-P.tr.pat.t[2*H+1]);I.has(_)||I.set(_,Zn(_));let B=Wu(_,A+Xp,c,I.get(_));B&&(!S||B.fin<S.finAt-.01||Math.abs(B.fin-S.finAt)<.01&&P.est>S.x.est)&&(S={T:_,x:P,finAt:B.fin})}}return S}function C_(o,c,f,p,v){let S=c.T,I=Zn(S),N=c.fin,P=[];for(let _ of I){if(P.length>=5)break;if(_.cancel||_.gone||!_.tr)continue;let b=_.tr.pat.stops,A=b.indexOf(S),B=-1;for(let q=A+1;q<b.length;q++)if(N.has(b[q])){B=q;break}if(B<0||f.x&&f.x.arr!=null&&_.est<f.x.arr-.01)continue;let st=_.est+(_.tr.pat.t[2*B]-_.tr.pat.t[2*A+1]),rt=p&&p.c===_;P.push(`<li class="hr${rt?" pin":""}" style="--lc:${X[_.fam]||"#6b7385"}"><span class="hrt"><b>${nt(_.est)}</b><small>${f.x&&f.x.arr!=null?_.est-f.x.arr<2?__t(333):Math.floor(_.est-f.x.arr)+" "+__t(334):""}</small></span><span class="hrd">${Ai(_.fam+" \xB7 "+_.dest,_.fam)}<small class="hro">${__t(335)} ${nt(st)}${_.num?" \xB7 "+__t(336)+m(_.num):""}</small></span><span class="hrm">${_.dl>=1?`<em class="dl ${Ui(_.dl)}">+${Math.round(_.dl)}</em>`:""}${_.plat?`${__t(254)}${m(_.plat)}</i>`:""}</span></li>`)}let F=(()=>{let _=[];for(let b of c.cands){let A=Xu(In(o),N,[b],0,v);A&&_.push([b,A.finAt])}return _.sort((b,A)=>b[1]-A[1]),_.filter(([b,A])=>A<=_[0][1]+30||c.fixed&&b===S).slice(0,4)})(),H=F.length>1||c.fixed?`<div class="hxst"><span>${__t(337)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(338)}</button>${F.map(([_])=>`<button type="button" data-hxf="${o.key}:${m(T[_].id)}" class="${c.fixed&&_===S?"on":""}">${m(T[_].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(337)} ${Ai(T[S].n,p?p.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${P.join("")||`<li class="hr"><span class="hrd">${__t(339)}</span></li>`}</ol>${H}</div>`}let Yp=new Set;function R_(o,c,f){Yp.has(o)||(Yp.add(o),sm(c,f,o))}function I_(o,c,f){let p=In(o);if(o===It){if(Et.tid)return"";if(p==null)return`${__t(340)}${It.err?m(It.err)+__t(341):__t(342)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([je,ze].find(Dt=>Dt.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5)||Date.now()-It.fix>10*6e4)return"";o.walk=Bp(It.dist[o.st[o.i]]||0)}if(p==null){let tt=It.st.length?zt.get(It.st[0]):null,Dt=o===ze?je:ze,Vt=tt!=null&&!Dt.st.includes(It.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${Vt?`${__t(343)}${m(T[tt].n)}</b>`:__t(344)}</small></span>${Vt?`<button type="button" class="hpick" data-hnear="${o.key}${__t(345)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${Vt?__t(346):__t(347)}</button></div></div>`}Dp(p,()=>Ee(!0));let v=o===It?null:o===je?ze:je,S=v?In(v):null,I=S!=null&&S!==p?S:w_,N=S!=null&&S!==p?v===ze?__t(348):"casa":"Barcelona",P=T[p].fams,F=new Set([...P].filter(tt=>ut.has(tt))),H=F.size<P.size,_=!1;F.size||(F=new Set(P),H=!1,_=!0);let b=It.w?Math.hypot(T[p].w[0]-It.w[0],T[p].w[1]-It.w[1])*It.k:null,A=b!=null&&Date.now()-It.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,fi(o)),Et.tid&&o.platAt&&(o.platAt=0,fi(o));let B=o!==It&&!!o.platAt&&!Et.tid,st=o===It||A&&b>3&&!o.goAt&&!B,rt=B||o!==It&&A&&(b<.08&&It.acc<=40||b<.15&&It.acc<=100&&Date.now()-It.fix<3*6e4)&&!(o===je&&It.homeW&&Math.hypot(It.homeW[0]-It.w[0],It.homeW[1]-It.w[1])*It.k<.05),q=o.goAt?(Date.now()-o.goAt)/6e4:null;q!=null&&(q>60||rt)&&(o.goAt=0,fi(o)),A&&o!==It&&It.fix!==o._khFix&&(o._khFix=It.fix,(o._kh=(o._kh||[]).filter(tt=>Date.now()-tt.t<6*6e4)).push({t:Date.now(),km:b}));let dt=A&&o!==It&&b<=3&&!(o._noWay>Date.now())&&(o._kh||[]).some(tt=>Date.now()-tt.t>=6e4&&Date.now()-tt.t<=5*6e4&&tt.km-b>=.08),J=!rt&&o!==It&&(dt||!!o.goAt),le=J?A&&b<=3?Bp(b):Math.max(0,o.walk-q):0,ve=Zn(p),Jt=ve.filter(tt=>!X[tt.fam]||ut.has(tt.fam)||_),ke=st||rt?0:J?le:o.walk,Te=V.alerts.filter(tt=>[...tt.fams].some(Dt=>F.has(Dt))||tt.stops&&tt.stops.has(p)),Pe=Te.some(tt=>T_.test(tt.es||tt.txt)),Ke={to:[],out:[],otros:[],all:Jt},$e=N!=="Barcelona"?new Set(v.st.map(tt=>zt.get(tt)).filter(tt=>tt!=null)):null,xn=null;if($e&&o!==It){let tt=qp(p,$e);if(tt&&tt.length){let Dt=o.xfer!=null?zt.get(o.xfer):null,Vt=Dt!=null&&tt.includes(Dt)?[Dt]:tt,se=Xu(p,$e,Vt,ke,c);se&&(xn=Object.assign(se,{fin:$e,finName:T[I].n,cands:tt,fixed:Dt!=null&&tt.includes(Dt)}),Dp(se.T,()=>Ee(!0)),I=se.T,$e=new Set([se.T]))}}Jt.forEach(tt=>Ke[Vp(p,tt,I,$e)].push(tt));let xr="";if($e&&!Ke.to.length&&Jt.length<ve.length){let tt=ve.filter(Dt=>!Jt.includes(Dt)&&Vp(p,Dt,I,$e)==="to");tt.length&&(Ke.to=tt,xr=[...new Set(tt.map(Dt=>Dt.fam))].sort(O).join(", "))}let Z_=tt=>{if(tt==="all")return __t(349);let Dt=se=>(se.find(vn=>vn.fam)||{}).fam;if(tt==="to")return __t(350)+Ai(N==="Barcelona"?"Barcelona":T[I].n,Dt(Ke.to)||[...F][0])+(()=>{let se=H&&!xr?[...F].filter(vn=>Ke.to.some(ii=>ii.fam===vn)).sort(O):[];return se.length?`<span class="hwf" title="${__t(351)}">${se.map(En).join("")}</span>`:""})();let Vt=[];for(let se of Ke[tt])Vt.some(vn=>vn[0]===se.dest)||Vt.push([se.dest,se.fam]);return Vt.length?__t(350)+Vt.slice(0,2).map(([se,vn])=>Ai(se,vn)).join(" "):__t(352)},Gs=hn.get(o.key);Gs&&!ve.some(tt=>String(tt.num)===Gs&&!tt.gone)&&(Nn.num=Gs,Nn.until=Date.now()+90*6e4,pi(o.key,null));let Jr=tt=>{let Dt=Gs&&Ke[tt].find(rn=>String(rn.num)===Gs&&!rn.gone);if(Dt&&Dt.cancel)return{cls:"v-miss",pin:1,x:Dt,big:__t(353),small:`${nt(Dt.est)} \xB7 ${Dt.fam}${__t(354)}${Dt.dest}${Dt.num?" \xB7 "+__t(336)+Dt.num:""}`,warn:""};let Vt=Dt||Ke[tt].find(rn=>!rn.cancel&&!rn.gone&&rn.est-c.min>=ke);if(!Vt){let rn=Ke[tt].find(pn=>!pn.cancel);return rn&&!st?{cls:"v-miss",big:__t(355),small:`${__t(356)}${nt(rn.est)}${__t(357)}${pr(rn.est-c.min)}${__t(358)}`}:{cls:"v-no",big:__t(359),small:__t(360)}}let se=Vt.est-c.min-ke,vn=st||rt?"v-info":J?se<1.5?"v-warn":"v-ok":se<1.5?"v-bad":se<5?"v-warn":"v-ok",ii=Vt.ghost?Ke[tt].find(rn=>!rn.cancel&&!rn.ghost&&rn.live&&rn.est>Vt.est):null;if(Dt&&se<0&&!st&&!rt){let rn=Ke[tt].find(pn=>!pn.cancel&&!pn.gone&&!pn.ghost&&pn!==Vt&&pn.est-c.min>=ke);return{cls:"v-miss",pin:1,miss:1,nxt:rn,x:Vt,ghost:!!Vt.ghost,big:__t(361),small:`${nt(Vt.est)} \xB7 ${Vt.fam}${__t(354)}${Vt.dest}${Vt.plat?__t(168)+Vt.plat:""}${Vt.num?" \xB7 "+__t(336)+Vt.num:""}`,warn:rn?`\u27A1\uFE0F ${__t(362)}: ${rn.est-c.min-ke<1?__t(363):__t(364)+" "+pr(rn.est-c.min-ke)} \xB7 ${nt(rn.est)}${rn.arr!=null?" \u2192 "+nt(rn.arr):""}${rn.plat?__t(168)+rn.plat:""}${rn.num?" \xB7 "+__t(336)+rn.num:""}`:""}}return{pin:Dt?1:0,cls:vn,ghost:!!Vt.ghost,soft:!Vt.live&&!Vt.ghost&&!Vt.unconf&&!Vt.cancel?Vt.rodLive?__t(365):__t(366):"",big:st||rt?se<1?__t(367):__t(368)+pr(se):J?se<1.5?__t(369):__t(370)+pr(se)+__t(371):se<1.5?__t(372):__t(373)+pr(se),warn:Vt.unconf?"\u26A0\uFE0F "+__t(374):Dt&&!Vt.live&&Vt.rodLive&&!Vt.ghost||!Vt.ghost&&Vt.noPos&&Dt?"":!Vt.ghost&&Vt.late&&Dt?__t(375):Vt.ghost?`\u26A0\uFE0F ${__t(376)}${ii?`${__t(377)}${nt(ii.est)}`:""}`:Pe?__t(378):"",small:`${Vt.bus?__t(379):""}${nt(Vt.est)} \xB7 ${Vt.fam}${__t(354)}${Vt.dest}${Vt.plat?__t(168)+Vt.plat:""}${Vt.dl>=1?` \xB7 +${Math.round(Vt.dl)} min`:""}${Vt.arr!=null?`${__t(380)}${nt(Vt.arr)}`:""}${Vt.num?" \xB7 "+__t(336)+Vt.num:""}`,x:Vt}},J_=$e||new Set([I]),j_=tt=>{let Dt=tt.tr;if(!Dt)return null;let Vt=Dt.pat.stops,se=Vt.indexOf(p);if(se<0)return null;let vn=-1;for(let ii=se+1;ii<Vt.length;ii++)if(J_.has(Vt[ii])){vn=ii;break}return vn<0?null:tt.est+(Dt.pat.t[2*vn]-Dt.pat.t[2*se+1])};Ke.to.forEach(tt=>{tt.arr=j_(tt)});let nc=Ke.out.length?"out":"otros",Qe=Jr("to"),po=Jr(nc);if(rt||o===It&&It.acc<=40&&(It.dist[o.st[o.i]]||9)<.08){for(let tt of[Qe.x,po.x].concat(o===It?[Jr("all").x]:[]))if(tt&&hn.has(o.key)&&String(hn.get(o.key))===String(tt.num)&&!tt.cancel&&tt.est-c.min<=2&&tt.est-c.min>-.5){let Dt="w"+tt.num+"|"+Math.round(tt.sm);im.has(Dt)||(im.add(Dt),Vl(`${__t(381)}${tt.fam}${__t(354)}${tt.dest}`,`${Math.round(tt.est-c.min)<=1?__t(382):__t(383)+Math.round(tt.est-c.min)+" min"}${__t(354)}${T[p].n}${tt.plat?__t(168)+tt.plat:""}`))}}let xm=E()&&c.live,vm=F.size===1,K_=tt=>{let Dt=tt.est-c.min;return st?tt.cancel?"cx":Dt<0?"u-miss":"u-info":tt.cancel?"cx":Dt<ke?"u-miss":Dt<ke+1.5?"u-now":Dt<ke+5?"u-soon":"u-ok"},Q_=tt=>{if(tt.gone)return`<li class="hr u-gone${tt.live?" on":""}${Ka(tt)?" sel":""} go" data-dk="${f.push(tt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${nt(tt.est)}${__t(384)}${ms(Math.max(1,Math.round(c.min-tt.est))+" min")}</small></span><span class="hrd">${Ai((vm?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${__t(385)}${m(tt.num)}</small></span><span class="hrm">${tt.dl>=1?`<em class="dl ${Ui(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}</span></li>`;let Dt=!tt.cancel&&tt.est-c.min<ke,Vt=Bu(tt.num,"");return`<li class="hr ${K_(tt)}${tt.live?" on":""}${tt.ghost?" gh":""}${Ka(tt)?" sel":""}${Gs&&String(tt.num)===Gs?" pin":""}${di.some(se=>{let vn=Gr(se,t.days.indexOf(c.ymd));return vn&&String(vn.num)===String(tt.num)})?" fav":""} go" style="--lc:${X[tt.fam]||"#6b7385"}" data-dk="${f.push(tt)-1}" title="${tt.cancel?__t(353):Dt?__t(361):__t(386)}"><span class="hrt"><b>${tt.cancel?"\u2715":Dt?nt(tt.est):pr(tt.est-c.min)}</b><small>${tt.cancel?__t(132):tt.late?__t(387):Dt?__t(388):tt.ghost?__t(389):nt(tt.est)}</small></span><span class="hrd">${tt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ai((vm?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${Vt.length?`<i class="cr" title="${m(Vt.map(se=>Wl(se.kind)).join(" \xB7 "))}">${Vt.slice(0,2).map(se=>Gl[se.kind]).join("")}</i>`:""}${tt.arr!=null?`${__t(390)}${nt(tt.arr)}${tt.num?" \xB7 "+__t(336)+m(tt.num):""}${(()=>{let se=tt.num&&Ul(tt.num);return se&&se.n>=5&&se.late/se.n>=.5?` \xB7 <b class="slate">${__t(391)} \xB7 ${se.late} ${__t(129)} ${se.n} ${__t(126)}</b>`:""})()}</small>`:""}${tt.obs?`<small class="hro">${m(tt.obs)}</small>`:""}${tt.unconf?`<small class="hro unc">${__t(392)}</small>`:""}</span><span class="hrm">${!tt.cancel&&tt.dl>=1?`<em class="dl ${Ui(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}${tt.plat?`${__t(254)}${m(tt.plat)}</i>`:""}</span></li>`},mo=(tt,Dt,Vt)=>`<div class="hcol"><div class="hdir">${Z_(tt)}${Vt?`<button type="button" class="hhide" data-hhide="${o.key}:${Vt}" title="${__t(393)}">\u2715</button>`:""}</div><div class="hv ${Dt.cls}${Dt.ghost||Dt.pin&&Dt.x&&Dt.x.noPos&&!so([Dt.x.fam]).length?" gh":""}${Dt.x?" go":""}"${Dt.miss&&Dt.nxt&&Dt.nxt.num?` data-pinnext="${o.key}:${m(Dt.nxt.num)}" title="${__t(394)}"`:Dt.x?` data-dk="${f.push(Dt.x)-1}"`:""}><b>${Dt.big}</b>${Dt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(395)}">\u{1F4CC} ${__t(396)} \u2715</button>`:""}<small>${m(Dt.small)}${Dt.soft?` \xB7 <span class="hsoft" title="${__t(397)}">\u{1F4E1} ${m(Dt.soft)}</span>`:""}</small>${Dt.pin&&Dt.x&&Dt.x.num?(se=>se?`<span class="hwhere">\u{1F4CD} ${m(se)}</span>`:"")(jl(Dt.x.num)):""}${Dt.warn?`<span class="hvw">${m(Dt.warn)}</span>`:""}</div><ol>${Ke[tt].slice(0,(o.more?tt==="all"||o.hide?20:10:tt==="all"?7:o.hide?8:4)+Ke[tt].filter(se=>se.gone).length).map(Q_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===It){let tt=Jr("all");var tx=tt.x?`<span class="nw">${tt.big}</span> \xB7 <span class="nw"><b>${nt(tt.x.est)}</b> ${m(tt.x.fam)}${__t(398)}${m(tt.x.dest)}${tt.x.plat?'<span class="nw">'+__t(168)+m(tt.x.plat)+"</span>":""}`:tt.big}let en=xn&&Qe.x&&Qe.x.arr!=null?A_(xn.T,Qe.x.arr,xn.fin):null;if(en){let tt=o._xc;tt&&tt.leg===String(Qe.x.num)&&tt.conn!==String(en.c.num)&&tt.est<en.c.est&&tt.live?(en.lost=!0,en.missed=tt.est):(!tt||tt.leg!==String(Qe.x.num)||!tt.live||tt.conn===String(en.c.num))&&(o._xc={leg:String(Qe.x.num),conn:String(en.c.num),est:en.c.est,live:!!(V.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}en&&(Yl.set(T[xn.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&hn.get(o.key)===String(Qe.x.num)&&R_("xf"+Qe.x.num+"|"+en.c.num,`\u21C4 ${__t(399)} ${T[xn.T].n}`,`${__t(400)}: ${en.c.fam} ${nt(en.c.est)} \u2192 ${nt(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let ld=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(401)} ${nt(en.missed)} \xB7 ${__t(170)} `:`${m(T[xn.T].n)} \xB7 `}${En(en.c.fam)} <b>${nt(en.c.est)}</b> \u2192 <b>${nt(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(402)}`}</span>`:xn?`<br><span class="nw hxf xbad">\u21C4 ${__t(403)} ${m(T[xn.T].n)}</span>`:"",ex=o===It?tx:xn&&Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(168)+m(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(Qe.x.est)}</b>${Qe.x.arr!=null?` \u2192 ${m(T[xn.T].n)} <b>${nt(Qe.x.arr)}</b>`:""}</span>${ld}`:Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(168)+m(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(Qe.x.est)}</b>${Qe.x.arr!=null?`${__t(405)}${nt(Qe.x.arr)}</b>`:""}${__t(404)}${m(N)}</span>`:__t(406)+m(N),We=o===It?(tt=>tt.pin?tt:null)(Jr("all")):Qe.pin?Qe:po.pin?po:null;We&&We.x&&hn.has(o.key)&&rm(We,T[p].n);let nx=We?o===It?"all":We===Qe?"to":nc:"",jr=!!(We&&(We.ghost||We.x.noPos&&!so([We.x.fam]).length||We.x.cancel)),cd=!!(We&&We.miss),Kr=jr?Ke[nx].find(tt=>!tt.cancel&&!tt.ghost&&!tt.gone&&tt.est>We.x.est-.01&&tt!==We.x&&tt.est-c.min>=(st||rt?0:ke)):null,ix=cd?`<span class="nw">${__t(407)} <b>${nt(We.x.est)}</b></span>${We.nxt?`<br><span class="nw hnx">${__t(400)} <b>${nt(We.nxt.est)}</b>${We.nxt.arr!=null?` \u2192 <b>${nt(We.nxt.arr)}</b>`:""}</span>`:""}`:"",sx=jr?`<span class="nw">\u26A0\uFE0F ${We.x.cancel?__t(353):We.ghost?__t(408):__t(409)}</span>${We.x.cancel?"":` \xB7 <span class="nw"><b>${nt(We.x.est)}</b>${We.x.arr!=null?` \u2192 <b>${nt(We.x.arr)}</b>`:""}</span>`}${Kr?` \xB7 <span class="nw">${__t(170)} <b>${nt(Kr.est)}</b>${Kr.arr!=null?` \u2192 <b>${nt(Kr.arr)}</b>`:""}${Kr.plat?__t(168)+m(Kr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${We?" pinned":""}${jr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(T[p].n)}${We&&We.x.num?`<i class="hpn">\u{1F4CC} ${m(We.x.num)}</i>`:""}</b>${o.open?xn&&ld?`<small class="nofit">${ld.replace(/^<br>/,"")}</small>`:"":`<small class="c${cd||jr&&We.x.cancel?"bad":jr?"warn":Pe?"bad":Qe.cls.slice(2)}">${jr?sx:cd?ix:ex}</small>${We&&We.x&&We.x.num?(tt=>tt?`<small class="nofit hwh2">\u{1F4CD} ${m(tt)}</small>`:"")(jl(We.x.num)):""}`}${o.open?"":(tt=>{if(!tt||tt.num==null)return"";let Dt=t.days.indexOf(c.ymd),Vt=tt.tr,se=Vt?Vt.t0+Vt.pat.t[1]-(Vt.day===Dt-1?1440:Vt.day===Dt+1?-1440:0)+(tt.dl||0):null,vn=!tt.live&&!tt.ghost&&!tt.unconf&&se!=null&&se>c.min-1,ii=tt.cancel?["bad",__t(353)]:tt.live?["ok",__t(410)]:vn?["wait",__t(411)]:["warn",__t(408)];return`<small class="nofit hrel ${ii[0]}"><b>${ii[1]}</b></small>`})(We&&We.x||Qe.x)}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody${o===It||o.hide==="out"||o.hide==="to"?" r1":""}">
        ${o===It?`<div class="hwalk">\u{1F4CD} A ${(()=>{let tt=It.dist[o.st[o.i]]||0;return tt<1?Math.round(tt*100)*10+" m":tt.toFixed(1).replace(".",",")+" km"})()}${__t(413)}${o.walk}${__t(414)}`:""}
        ${B?`<div class="hwalk away">${__t(416)}<a data-hplat="${o.key}${__t(415)}`:rt&&!Et.tid?`${__t(417)}${o.key}${__t(418)}`:J?`${__t(419)}${Math.round(le)} min</b>${A&&b<=3?__t(420):""} \xB7 <a data-hgo="${o.key}:0">${__t(421)}</a></div>`:""}${st&&o!==It?`<div class="hwalk away hawg"><span class="hawt">\u{1F4CD} ${__t(422)} ${b<10?b.toFixed(1).replace(".",","):Math.round(b)} km: ${__t(423)}</span>${Yu(o)}</div>`:""}${st&&o===It?`<div class="hwalk hgw">${Yu(o)}</div>`:""}<div class="hwalk"${st?" hidden":""}>${(()=>{let tt=Gs||(()=>{let se=(Ke.to.length?Ke.to:Jt).filter(pn=>pn.num!=null&&!pn.cancel),vn=se.filter(pn=>pn.tr&&pn.tr.pat.stops[0]===p&&pn.est>=c.min-1&&pn.est<=c.min+3).sort((pn,Qr)=>pn.est-Qr.est);if(vn[0])return vn[0].num;let ii=[...se];if($e&&o!==It){let pn=t.days.indexOf(c.ymd),Qr=new Set(se.map(hd=>String(hd.num))),ym=(hd,rx)=>{for(let ts of hd||[]){if(Qr.has(String(ts.num))||X[ts.fam]&&!ut.has(ts.fam)&&!_)continue;let ud=ts.pat.stops,ic=ud.indexOf(p);if(ic<0||ic===ud.length-1||!ud.slice(ic+1).some(ax=>$e.has(ax)))continue;let Sm=V.delays&&V.delays.get(ts.tid),dd=ts.t0+ts.pat.t[2*ic+1]-rx+(typeof Sm=="number"?Math.max(0,Sm/60):0);dd>c.min+1||dd<c.min-15||(Qr.add(String(ts.num)),ii.push({num:ts.num,est:dd,tr:ts}))}};pn>=0&&(ym(et[pn],0),pn>0&&ym(et[pn-1],1440))}let rn=ii.filter(pn=>pn.est<=c.min+1&&pn.est>=c.min-15).sort((pn,Qr)=>Qr.est-pn.est);return rn[0]?rn[0].num:Qe&&Qe.x&&Qe.x.num})(),Dt=tt!=null?ve.find(se=>String(se.num)===String(tt)):null,Vt=Vu(Dt,c);return tt!=null&&!Et.tid?`<button type="button" class="hgo hboard${Vt?"":" off"}" data-hboard="${m(String(tt))}"${Vt?"":` data-hbwhen="${Dt?nt(Dt.est):""}"`}>\u{1F686} ${Vt&&tt?`${__t(424)} ${m(String(tt))}`:__t(425)}</button>`:""})()}${rt||Et.tid?"":`<button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(426)}</button>`}${Yu(o)}</div>
        <div class="hcfgp"${o._cfg?"":" hidden"}><div class="hcl">${__t(427)}</div><div class="hst">${o.st.map((tt,Dt)=>{let Vt=zt.get(tt);return Vt==null?"":`<button type="button" data-hs="${o.key}:${Dt}" class="${Dt===o.i?"on":""}">${m(T[Vt].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[Vt].n)}${Dt===o.i?" \u2713":""}</button>`}).join("")}</div>${o!==It?`<div class="hcl">${__t(428)}</div><div class="hstep2"><button type="button" data-hw="${o.key}:-1" aria-label="\u2212">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1" aria-label="+">+</button></div>`:""}<a class="hcfgmap" data-hcfgmap="${p}">\u2139\uFE0F ${__t(429)}</a></div>
        ${(()=>{let tt=di.filter(Dt=>o.st.includes(Dt.sid));return tt.length?`<div class="hfav">${tt.map(Dt=>{let Vt=Gr(Dt,t.days.indexOf(c.ymd)),se=Vt&&Jt.find(vn=>String(vn.num)===String(Vt.num));return`\u2B50 <b>${Dt.t}</b> ${m(Dt.fam)} ${se?se.cancel?__t(430):se.gone?__t(251):se.dl>=1?`<em class="dl ${Ui(se.dl)}">+${Math.round(se.dl)}${__t(431)}${nt(se.est)}`:__t(432):__t(433)}`}).join("<br>")}</div>`:""})()}
        ${H&&xr?`${__t(434)}${[...F].sort(O).map(En).join(" ")}${__t(435)}${N}${__t(436)}${xr}${__t(437)}`:_?`${__t(438)}${[...ut].sort(O).slice(0,3).map(En).join(" ")}${__t(439)}`:""}
        ${Te.length?`<div class="hal ${Pe?"bad":""}${ed.v?" open":""}" data-halx>\u26A0\uFE0F ${eo(Te[0])} ${m(Te[0].txt)} <small>${no(Te[0])}</small>${Te.length>1?` <a data-hal>+${Te.length-1}${__t(440)}`:""}</div>`:`${__t(441)}${[...F].sort(O).join(", ")}</div>`}
        ${(()=>{let tt=o.st.flatMap(Dt=>Bu("",Dt));return tt.length?`<div class="hcr">${tt.slice(0,3).map(Dt=>`${Gl[Dt.kind]} <b>${m(Wl(Dt.kind))}</b> <small>${Dt.up>1?Dt.up+__t(303):""}${Rp(Dt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===It?`<div class="hcols one">${mo("all",Jr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${mo("to",Qe)}</div><a class="hshow" data-hshow="${o.key}${__t(442)}`:o.hide==="to"?`<div class="hcols one">${mo(nc,po)}</div><a class="hshow" data-hshow="${o.key}${__t(442)}`:`<div class="hcols">${mo("to",Qe,"to")}${mo(nc,po,"out")}</div>`}
        ${xn?C_(o,xn,Qe,en,c):""}
        ${Jt.length>(o===It?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(119):__t(443)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${xm?Ft.get(T[p].id)?.d?__t(444):__t(445):__t(446)} \xB7 \u25CF = ${__t(447)}">${xm?Ft.get(T[p].id)?.d?__t(448):__t(449):__t(250)}</span><a data-hmap="${p}${__t(412)}${o===It?__t(450):`<a data-hset="${o.key}${__t(451)}`}${o===ze?`${__t(452)}`:""}</div>
      </div>`:"")+"</div>"}let qu={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},P_='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',Yu=o=>`<button type="button" class="hgo hcfg${o._cfg?" on":""}${qu.v?"":" new"}" data-hcfg="${o.key}" title="${__t(453)}" aria-label="${__t(453)}">${P_}</button>`,Fi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Zp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Jp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,mr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Zl=()=>{let o=new Set;return[...je.st,...ze.st].forEach(c=>{let f=zt.get(c);f!=null&&T[f].fams.forEach(p=>o.add(p))}),[...o].sort(O)},co=()=>({stations:[...je.st,...ze.st],lines:Zl().filter(o=>!mr.has(o))}),L_=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function jp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Kp(o){let f=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...co()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Zu(){let o=In(je),c=In(ze);if(o==null||c==null)return o!=null?je:c!=null?ze:null;if(It.w&&Date.now()-It.fix<3*36e5){let f=p=>Math.hypot(T[p].w[0]-It.w[0],T[p].w[1]-It.w[1]);return f(o)<=f(c)?je:ze}return new Date().getHours()<13?je:ze}function Qp(o){let c=Zu(),f=c===je?ze:je,p=c&&In(c),v=f&&In(f);if(p==null||v==null)return!0;let S=(o.es||"")+" "+(o.txt||""),I=t.days.indexOf(ee().ymd),N=ee(),P=[...new Set([...S.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(H=>H[1]))];if(P.length)return P.some(H=>{let _=Ts(H);if(!_)return!1;let b=_.pat.stops,A=b.indexOf(p),B=b.indexOf(v);if(A<0||B<0||A>B)return!1;let st=_.t0+_.pat.t[2*A+1];return st>N.min-60&&st<N.min+150});let F=S.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(F){let H=F[1].toLowerCase(),_=T.findIndex(b=>b.n&&H.startsWith(b.n.toLowerCase()));if(_>=0){let b=(et[I]||[]).find(A=>{let B=A.pat.stops;return B[B.length-1]===_&&B.includes(p)&&B.includes(v)});if(b){let A=b.pat.stops;return A.indexOf(p)<A.indexOf(v)}}}return!0}let Jn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function D_(){let{lines:o,stations:c}=co(),f=new Set(o),p=new Set(c.map(I=>zt.get(I))),v=V.alerts.filter(I=>([...I.fams].some(N=>f.has(N))||[...I.stops||[]].some(N=>p.has(N)))&&Qp(I));if(!Jn.seen){try{Jn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Jn.seen=new Set}if(!Jn.seen.size){v.forEach(I=>Jn.seen.add(I.id+"|"+I.txt.length)),tm();return}}let S=v.filter(I=>!Jn.seen.has(I.id+"|"+I.txt.length));if(S.length&&(S.forEach(I=>Jn.seen.add(I.id+"|"+I.txt.length)),tm(),!(!Jn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let I of S.slice(0,3)){let N=(I.src==="Adif"?__t(314):"Rodalies")+(I.fams.size?" \xB7 "+[...I.fams].sort(O).slice(0,4).join(" "):""),P={body:I.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+I.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(F=>F?F.showNotification(N,P):new Notification(N,P)).catch(()=>{try{new Notification(N,P)}catch{}})}}function tm(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Jn.seen].slice(-400)))}catch{}}async function N_(){if(Jn.on)Jn.on=!1,Je(__t(454));else{if(!("Notification"in window)){Je(Zp&&!Jp()?__t(455):__t(456));return}if(await Notification.requestPermission()!=="granted"){Je(__t(457));return}Jn.on=!0,Je(__t(458)+co().lines.join(", ")+__t(459))}try{localStorage.setItem("rod_ln",Jn.on?"1":"")}catch{}Ee(!0)}async function U_(){if(!V.repOk||document.documentElement.classList.contains("cap"))return N_();if(!Fi.busy){Fi.busy=!0;try{let o=await jp();if(!o){Je(Zp&&!Jp()?__t(460):__t(461));return}if(await navigator.serviceWorker.ready,Fi.on){let c=await o.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Fi.on=!1,Je(__t(454))}else{if(!V.url){Je(__t(462));return}if(await Notification.requestPermission()!=="granted"){Je(__t(457));return}let f=(await Pt(ce(),"/push/key")).key,p=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:L_(f)});await Kp(p),Fi.on=!0,Je(__t(463)+co().lines.join(", "))}try{localStorage.setItem("rod_push",Fi.on?"1":"")}catch{}}catch(o){Je(__t(464)+(o.message||o))}finally{Fi.busy=!1,Ee(!0)}}}async function em(){if(Fi.on)try{let o=await jp(),c=o&&await o.pushManager.getSubscription();c&&await Kp(c)}catch{}}let Ju=!1,nm="";function ju(){let o=Mt?"t"+(Mt.tid||Mt.vtid):me>=0?"s"+me:_e?"a":Ot?"n":"";o!==nm&&(Ju=!1,nm=o);let c=innerWidth<=640&&!!o&&!Ju&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let p=f.getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-p-16)+"px"}}))}let im=new Set,Ku=(()=>{let o=yt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function sm(o,c,f){if(!(!(Jn.on||Fi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Je(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(o,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function rm(o,c){let f=o.x,p=ee();if(!p.live||f.gone||f.est<p.min-1)return;let v=f.num+"|"+Math.round(f.sm),S=Ku[v]||{},I=`${__t(465)} ${nt(f.sm)}`,N=`${f.fam} \u2192 ${f.dest}`,P="",F="";f.cancel?S.c||(S.c=1,P=`\u26A0\uFE0F ${I} ${__t(176)}`,F=`${N}. ${__t(466)}`):o.ghost&&!S.g?(S.g=1,P=`\u26A0\uFE0F ${I} ${__t(467)}`,F=`${N}: ${__t(468)}`):f.dl>=5&&f.dl>=(S.dl||0)+5?(S.dl=Math.round(f.dl),P=`\u23F3 ${I} ${__t(469)} +${S.dl} min`,F=`${N}: ${__t(470)} ${c} ${__t(471)} ${nt(f.est)}.`):f.plat&&S.p&&S.p!==String(f.plat)&&(P=`${__t(472)}: ${I}`,F=`${N}: ${__t(473)} ${f.plat} ${__t(474)} ${S.p}).`),f.plat&&(S.p=String(f.plat)),Ku[v]=S;try{localStorage.setItem("rod_pn",JSON.stringify(Ku))}catch{}P&&sm(P,F,"pin-"+f.num)}let Xr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))Xr.open=!0;else{Xr.open=!1,f.forEach(p=>Xr.seen.add(p));try{localStorage.setItem("rod_seen",JSON.stringify([...Xr.seen].slice(-200)))}catch{}}Ee(!0)}});function O_(o){let c=o.lines;if(!c.length&&It.st&&It.st.length){let _=new Set;It.st.forEach(b=>{let A=zt.get(b);A!=null&&T[A].fams.forEach(B=>_.add(B))}),c=[..._].sort(O)}let f=new Set(c),p=V.alerts.filter(_=>!f.size||[..._.fams].some(b=>f.has(b))),v=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(159)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,S=p.reduce((_,b)=>Math.max(_,lo(b)),0),I=S===3?"\u26D4 ":S===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",N=`<div class="hnowh"><span class="hnowl"><b>${p.length?I+p.length+(p.length===1?__t(316):__t(317)):__t(475)}</b>${c.length?c.map(En).join(""):""}</span>${v}</div>`,P=p.filter(_=>!Xr.seen.has(_.id)),F=p.length&&(Xr.open||P.length>0),H=p.reduce((_,b)=>Math.max(_,lo(b)),0);return`<div class="hnow${H===3?" bad":H===2?" warn":H===1?" info":""}${p.length&&!F?" col":""}" data-nowx="${m(p.map(_=>_.id).join("|"))}">${N}${lm(o,!0)}${F?p.slice().sort((_,b)=>lo(b)-lo(_)).map(_=>`<p class="sv${lo(_)}">${eo(_)} ${m(_.txt)} <small>${no(_)}</small></p>`).join("")+`<small class="hnowt">${__t(476)}</small>`:""}</div>`}let hn=new Map((()=>{try{let o=yt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function Jl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(p,v)=>{p.style.fontSize=v===1?"":(p._f0*v).toFixed(1)+"px",p.querySelectorAll("b").forEach(S=>S.style.fontSize=v===1?"":(p._b0*v).toFixed(1)+"px")},f=1;for(let p of o){if(p.style.whiteSpace="",c(p,1),!p.clientWidth)continue;p._f0=parseFloat(getComputedStyle(p).fontSize);let v=p.querySelector("b");for(p._b0=v?parseFloat(getComputedStyle(v).fontSize):0;p.scrollWidth>p.clientWidth+1&&f>.86;)f-=.02,c(p,f)}if(f<1)for(let p of o)p._f0&&c(p,f);for(let p of o)p.scrollWidth>p.clientWidth+1&&(p.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Jl()}catch{}});let am=(o,c)=>{let f=o==="work"?ze:o==="near"?It:je,p=f&&In(f);return p==null?null:Zn(p).find(v=>String(v.num)===String(c))||null};function pi(o,c){if(c&&!hn.size&&!Et.tid)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>Je(__t(477)),600))}catch{}if(c){for(let f of[...hn.keys()])f!==o&&hn.delete(f);hn.set(o,c)}else hn.delete(o);try{let f=yt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...hn].map(([p,v])=>[p,v,f])))}catch{}}let om=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return c>=0?" \xB7 "+ms(yu(Math.round(c))):""};function jl(o){let c=ae.find(S=>S.tr&&String(S.tr.num)===String(o));if(!c){let S=Ts(o),I=ee(),N=t.days.indexOf(I.ymd);if(!S)return"";let P=S.day===N-1?1440:0,F=S.t0+S.pat.t[1]-P;return F>I.min?__t(478)+T[S.pat.stops[0]].n+" ("+nt(F)+")":""}let f=c.tr,p=S=>T[f.pat.stops[S]].n;if(c.real){let S=c.v;return S.pre?__t(479):S.atStop>=0&&S.before?__t(480)+p(S.atStop):S.atStop>=0&&(S.st==="STOPPED_AT"||c.stop==="st")?Oe()?__t(481)+p(S.atStop):__t(482)+p(S.atStop)+om(S):!Oe()&&S.next>0?__t(483)+p(S.next-1)+__t(484)+p(S.next)+om(S):S.atStop>=0&&S.next>S.atStop?__t(485)+p(S.atStop)+__t(486)+p(S.next):S.atStop>=0?__t(487)+p(S.atStop):c.stop==="via"&&S.next>0?"\u23F8 "+__t(488)+p(S.next-1)+__t(484)+p(S.next):S.next>0?__t(213)+p(S.next-1)+__t(484)+p(S.next):S.next===0?__t(350)+p(0):""}let v=c.p&&c.p.next;return v>0?__t(489)+p(v-1)+__t(484)+p(v):""}let ho={k:"",v:null};function F_(o){let c=ee(),f=t.days.indexOf(c.ymd);if(f<0||!o.length)return null;let p=Zu(),v=(p&&In(p))??In(je)??In(ze),S=c.ymd+o.join()+v;if(ho.k===S)return ho.v;ho.k=S;let I=new Set(o),N=v!=null?_=>et[_].filter(b=>{let A=b.pat.stops.indexOf(v);return A>=0&&A<b.pat.stops.length-1}).length:_=>et[_].filter(b=>I.has(b.fam)).length,P=_=>{let b=new Date(+_.slice(0,4),+_.slice(4,6)-1,+_.slice(6)).getDay();return b===0?0:b===6?6:1},F=N(f),H=Math.max(0,...t.days.map((_,b)=>b!==f&&P(_)===P(c.ymd)?N(b):0));return ho.v=H>=20&&F<H*.8?{n:F,ref:H,pct:Math.round(F/H*100),st:v!=null?T[v].n:""}:null,ho.v}function lm(o,c){let f=o.lines||[],p=F_(f);if(!p)return"";let v=V.alerts.some(S=>[...S.fams].some(I=>f.includes(I))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((S.es||"")+" "+S.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${v?__t(490):__t(491)}</b>: ${p.st?`${__t(492)} ${m(p.st)} ${p.n} ${__t(493)} ${p.ref} ${__t(494)}`:`${__t(495)} ${p.n} ${__t(493)} ${p.ref} ${__t(494)}`} (${p.pct} %). ${v?__t(496):__t(497)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${v?__t(498):__t(499)}</b> \xB7 ${__t(500)}: ${p.st?`${__t(501)} ${m(p.st)} ${__t(502)} ${p.n} ${__t(129)} ${p.ref} ${__t(71)}`:`${p.n} ${__t(129)} ${p.ref} ${__t(503)} ${f.join(", ")}`} (${p.pct} % ${__t(504)}).</div>`}function B_(o){let c=so(o.lines||[]);if(!c.length)return"";let f=[je,ze].some(p=>{let v=In(p),S=v!=null&&Ft.get(T[v].id);return S&&S.d&&Array.isArray(S.d.trains)&&!S.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(505)} ${c.join(", ")}</b> ${__t(506)}${f?" \xB7 "+__t(507):""}: ${__t(508)}</div>`}function k_(o){if(!It.w)return[];let c=It.k||1;return ae.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-It.w[0],f.p.w[1]-It.w[1])*c<3).sort((f,p)=>Math.hypot(f.p.w[0]-It.w[0],f.p.w[1]-It.w[1])-Math.hypot(p.p.w[0]-It.w[0],p.p.w[1]-It.w[1])).slice(0,2).map(f=>f.tr)}function $_(o){if(Et.tid)return"";let c=null,f=null;if(hn.size||(Nt&&Nt.num!=null&&(c=String(Nt.num)),!c))return"";let p=Ts(c);if(!p)return"";let v=p.pat.stops,S=f?f==="work"?ze:f==="near"?It:je:null,I=S?In(S):null,N=I!=null?Zn(I).find(rt=>String(rt.num)===c):null,P=S===je?ze:S===ze?je:null,F=P?In(P):null,H=I!=null?v.indexOf(I):-1,_=Se&&Se.num===c?v.indexOf(zt.get(Se.sid)):-1;_<=H&&F!=null&&(_=v.indexOf(F,H+1));let b=N&&H>=0&&_>H?N.est+(p.pat.t[2*_]-p.pat.t[2*H+1]):null,A=N?Math.round(N.est-o.min):null,B=jl(c),st=N?`${N.gone?__t(509):__t(510)} ${m(T[I].n)} \xB7 <b>${nt(N.est)}</b>${N.gone?"":` (${A<=0?__t(299):A+" min"})`}${N.plat?__t(168)+m(N.plat):""}${b!=null?` \u2192 ${m(T[v[_]].n)} <b>${nt(b)}</b>`:""}`:m(B||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${En(p.fam)} ${__t(336)}${m(c)} <span class="hlk">${__t(511)}</span></b><small class="nofit">${st}</small>${N&&B?`<small class="nofit">\u{1F4CD} ${m(B)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(425)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(512)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(238)}">\u2715</button></div></div>`}function z_(o){let c;try{if(c=V_(o),c!=null)return c}catch(v){console.error(v)}let f=Et.tid?Ts(Et.tid):null,p=f?`${__t(513)} ${m(T[f.pat.stops[0]].n)} \xB7 ${nt(f.t0)}`:"";return Et.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(336)}${m(Et.tid)}${Et.lock?` <span class="hlk">${__t(514)}</span>`:""}</b>${p?`<small class="nofit">${p}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}function V_(o){if(!Et.tid)return"";[...hn].forEach(([rt,q])=>{String(q)!==String(Et.tid)&&pi(rt,null)});let c=ae.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid)||R(o).out.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid);if(!c)return null;let f=c.tr,p=f.pat.stops,v=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(v==null){let rt=R(o).out.find(q=>q.tr&&String(q.tr.num)===Et.tid);v=rt&&rt.p&&rt.p.next>=0?rt.p.next:1}let S=mt(f),I=typeof S=="number"?Math.max(0,S/60):0,N=t.days.indexOf(o.ymd),P=f.day===N-1?1440:0,F=Et.fixes[Et.fixes.length-1],H=F&&Date.now()-F.t<9e4&&(F.acc==null||F.acc<150)?(()=>{let rt=-1,q=.35;return p.forEach((dt,J)=>{let le=Math.hypot(T[dt].w[0]-F.w[0],T[dt].w[1]-F.w[1])*F.k;le<q&&(q=le,rt=J)}),rt})():-1,_=Se&&Se.num===Et.tid?p.indexOf(zt.get(Se.sid)):-1;if(_>0&&_<v&&H!==_&&!(H>=0&&H<_))return setTimeout(()=>{if(!Et.tid)return;let rt=Et.tid;Et.tid="",Et.lock=!1,Et.manual=0,Et.quiet=Date.now()+10*6e4,Nt&&String(Nt.num)===rt&&(Nt=null),[...hn].forEach(([q,dt])=>{String(dt)===rt&&pi(q,null)}),Nn.num===rt&&(Nn.num=""),Ee(!0)},0),"";_<v&&(_=p.length-1);let b=ao(f,c.real?c.v:null,_,f.t0+f.pat.t[2*_]+I-P),A=b-o.min,B=c.real&&c.v.atStop>=0?c.v.atStop:-1,st=H>=0?`${__t(515)} ${T[p[H]].n}`:jl(f.num)||__t(350)+T[p[v]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${En(f.fam)} ${__t(336)}${m(f.num)}${Et.lock?` <span class="hlk">${__t(514)}</span>`:""}</b><small class="nofit cok">${m(st)} \xB7 <span class="nw">${__t(516)} ${m(T[p[_]].n)}</span> <span class="nw">${A>=1?__t(104)+pr(A)+" \xB7 ":""}<b>${nt(b)}</b>${I>=1?` <em class="dl ${Ui(I)}">+${Math.round(I)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(517)}" title="${__t(517)}">\u2715</button>${(rt=>rt.length&&!(Et.manual&&Date.now()<Et.manual)?`<div class="onbch">${rt.map(q=>`<button type="button" class="onbalt" data-onbpick="${m(q.num)}">${__t(518)} ${m(q.num)}?</button>`).join("")}</div>`:"")(k_(f))}</div>`}let Kl={until:0};function cm(){let o=Et.tid;if(o){Et.no.set(o,Date.now()+20*6e4),Et.tid="",Et.manual=0,Et.lock=!1,Et.quiet=Date.now()+10*6e4,Nn.num===o&&(Nn.num=""),[...hn].forEach(([c,f])=>{String(f)===o&&pi(c,null)}),Se&&Se.num===o&&(Se=null,ws(),window.__schedOff&&window.__schedOff(7701)),Nt&&String(Nt.num)===o&&(Nt=null),Mt&&String(Mt.num)===o&&(Mt=null,Ve.sk=""),d._h="";try{Ue(),a()}catch{}Ee(!0)}}function hm(o){if(o.hasAttribute("data-onbx")){cm();return}oo(o.dataset.onbpick,"pick"),Je(`${__t(519)} ${Et.tid}`),Ee(!0)}function Ee(o){let c=x("#home");if(!c)return;let f=performance.now();if(!o&&f-Hp<4e3||!o&&Kl.until>Date.now())return;Hp=f;let p=ee(),v=[],S=co(),I=b=>{let A=In(b);return A==null||!It.w?1:Math.hypot(T[A].w[0]-It.w[0],T[A].w[1]-It.w[1])},N=[It,...[je,ze].sort((b,A)=>I(b)-I(A))],P=(document.documentElement.classList.contains("tabmode")?O_(S):lm(S))+B_(S)+z_(p)+$_(p)+N.map(b=>I_(b,p,v)).join("")+(Vs.some(b=>b.open)&&S.lines.length,"");c.className=(Vs.some(b=>b.open)?"open":"")+(Et.tid?" onb":"");let F=x("#bell");F||(F=document.createElement("button"),F.type="button",F.id="bell",F.onclick=U_,x("#inf .more").prepend(F));{let b=V.repOk&&!document.documentElement.classList.contains("cap")?Fi.on:Jn.on;F.hidden=!S.lines.length,F.className=b?"on":"",F.textContent=(b?__t(527):__t(528))+S.lines.join(", "),F.title=(b?__t(529):__t(530))+__t(67)+S.lines.join(", ")+(V.repOk?"":__t(531))}if(c._h===P)return;c._h=P,c.innerHTML=P,Jl(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{Kl.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{Kl.until=Date.now()+400},!0),c.addEventListener("click",b=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){b.stopPropagation(),b.preventDefault();return}let A=b.target.closest&&b.target.closest("[data-onbx],[data-onbpick]");A&&(b.stopPropagation(),Kl.until=0,hm(A))},!0));{let b=c.querySelector("[data-onbgo]");b&&(b.onclick=A=>{if(A.target.closest("[data-onbx]")){cm();return}let B=A.target.closest("[data-onbpick]");if(B){hm(B);return}let st=ae.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid);st&&(Ot=_e=Ct=!1,me=-1,Mt=st.tr,d._h="",Ue())})}{let b=[...c.children].find(A=>A.classList.contains("hplace")&&!A.querySelector(".hnew"));b&&b.classList.add("lead")}let H=b=>b==="work"?ze:b==="near"?It:je;c.querySelectorAll("[data-hloc]").forEach(b=>b.onclick=()=>{It.err="",zu(!0)}),c.querySelectorAll("[data-ht]").forEach(b=>{let A=0,B=0,st=0,rt=()=>{clearTimeout(A),A=0,b.closest(".hplace")?.classList.remove("lpress")};b.addEventListener("pointerdown",q=>{let dt=b.dataset.ht,J=hn.get(dt);!J||String(Et.tid)===String(J)||(B=q.clientX,st=q.clientY,b.closest(".hplace")?.classList.add("lpress"),A=setTimeout(()=>{A=0,b.closest(".hplace")?.classList.remove("lpress"),b._lpDone=Date.now();let le=am(dt,J);if(!Vu(le,ee())){Hu(le?nt(le.est):"");return}let ve=oo(J,"lock",dt);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Je(`${__t(519)} ${ve&&ve.tr.fam||""} ${J} \xB7 ${__t(514)}`),Ee(!0)},700))}),b.addEventListener("pointermove",q=>{A&&Math.hypot(q.clientX-B,q.clientY-st)>10&&rt()}),["pointerup","pointercancel","pointerleave"].forEach(q=>b.addEventListener(q,()=>{A&&rt()})),b.addEventListener("contextmenu",q=>q.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(b=>b.onclick=()=>{if(b._lpDone&&Date.now()-b._lpDone<1500)return;if(x("#inf").classList.contains("compact")){Ju=!0,ju();return}let A=H(b.dataset.ht);A.open=!A.open,fi(A),Ee(!0),(Mt||me>=0||_e||Ot)&&(d._h="",Ue())}),c.querySelectorAll("[data-hxf]").forEach(b=>b.onclick=A=>{A.stopPropagation();let[B,st]=b.dataset.hxf.split(":"),rt=H(B);rt.xfer=st||null,fi(rt),Ee(!0)});let _=b=>{clearTimeout(b._cfgT),b._cfgT=setTimeout(()=>{b._cfg=!1,Ee(!0)},1e4)};c.querySelectorAll("[data-hs]").forEach(b=>b.onclick=()=>{let[A,B]=b.dataset.hs.split(":"),st=H(A);_(st),st.i!==+B&&(st.i=+B,fi(st),Ee(!0))}),c.querySelectorAll("[data-hcfg]").forEach(b=>b.onclick=A=>{A.stopPropagation();let B=H(b.dataset.hcfg);if(B._cfg=!B._cfg,clearTimeout(B._cfgT),B._cfg&&_(B),!qu.v){qu.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}Ee(!0)}),c.querySelectorAll("[data-hcfgmap]").forEach(b=>b.onclick=A=>{A.stopPropagation();let B=+b.dataset.hcfgmap;Bi("map"),window.__rodPickStation(B)}),c.querySelectorAll("[data-hwt]").forEach(b=>b.onclick=A=>{A.stopPropagation();let B=H(b.dataset.hwt);B._wedit=!B._wedit,clearTimeout(B._wT),B._wedit&&(B._wT=setTimeout(()=>{B._wedit=!1,Ee(!0)},6e3)),Ee(!0)}),c.querySelectorAll("[data-hw]").forEach(b=>b.addEventListener("click",()=>{let A=H(b.dataset.hw.split(":")[0]);A._cfg&&_(A)},!0)),c.querySelectorAll("[data-hw]").forEach(b=>b.onclick=()=>{let[A,B]=b.dataset.hw.split(":"),st=H(A);st.walk=M(st.walk+ +B,0,60),fi(st),Ee(!0)}),c.querySelectorAll("[data-hmap]").forEach(b=>b.onclick=()=>{let A=+b.dataset.hmap;Ot=_e=Ct=!1,Mt=null,me=A,Hn(),Object.assign(s,{tx:T[A].w[0],ty:T[A].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ue(),a()}),c.querySelectorAll("[data-hset]").forEach(b=>b.onclick=()=>um(b.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(b=>b.onclick=()=>{let A=zt.get(It.st[0]);A!=null&&Qu(A,b.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(b=>b.onclick=()=>{let A=H(b.dataset.hmore);A.more=!A.more,Ee(!0)}),c.querySelectorAll("[data-hhide]").forEach(b=>b.onclick=A=>{A.stopPropagation();let[B,st]=b.dataset.hhide.split(":"),rt=H(B);rt.hide=st,fi(rt),Ee(!0)}),c.querySelectorAll("[data-hshow]").forEach(b=>b.onclick=()=>{let A=H(b.dataset.hshow);A.hide="",fi(A),Ee(!0)}),c.querySelectorAll("[data-hgo]").forEach(b=>b.onclick=A=>{A.stopPropagation();let[B,st]=b.dataset.hgo.split(":"),rt=H(B);rt.goAt=st==="1"?Date.now():0,rt.goAt?rt.platAt=0:rt._noWay=Date.now()+15*6e4,fi(rt),Ee(!0)}),c.querySelectorAll("[data-unchoose]").forEach(b=>b.onclick=A=>{A.stopPropagation();let B=b.dataset.unchoose;[...hn].forEach(([st,rt])=>{String(rt)===B&&pi(st,null)}),Nn.num===B&&(Nn.num=""),Nt&&String(Nt.num)===B&&(Nt=null),Se&&Se.num===B&&(Se=null,ws()),Mt&&String(Mt.num)===B&&(Mt=null,d._h="",Ue()),Ee(!0)}),c.querySelectorAll("[data-chmap]").forEach(b=>b.onclick=A=>{A.stopPropagation();let B=Ts(b.dataset.chmap);B&&(Bi("map"),Hs({num:String(B.num),tid:B.tid&&V.vp.has(B.tid)?B.tid:"",tr:B}),Nt=B)}),c.querySelectorAll("[data-hboard]").forEach(b=>b.onclick=A=>{if(A.stopPropagation(),b.classList.contains("off")){Hu(b.dataset.hbwhen);return}let B=oo(b.dataset.hboard,"lock",b.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Je(`${__t(519)} ${B&&B.tr.fam||""} ${b.dataset.hboard} \xB7 ${__t(514)}`),Ee(!0)}),c.querySelectorAll("[data-hplat]").forEach(b=>b.onclick=A=>{A.stopPropagation();let[B,st]=b.dataset.hplat.split(":"),rt=H(B);rt.platAt=st==="1"?Date.now():0,rt.platAt&&(rt.goAt=0),fi(rt),Ee(!0)}),c.querySelectorAll("[data-hnotst]").forEach(b=>b.onclick=A=>{A.stopPropagation(),It.homeW=It.w;try{localStorage.setItem("rod_homew",JSON.stringify(It.w))}catch{}Ee(!0)}),c.querySelectorAll("[data-hdel]").forEach(b=>b.onclick=()=>{ze.st=[],ze.open=!1,fi(ze),Ee(!0),em()}),c.querySelectorAll("[data-dk]").forEach(b=>{let A=0,B=0,st=0,rt=()=>{clearTimeout(A),A=0,b.classList.remove("lpress")};b.addEventListener("pointerdown",q=>{let dt=v[+b.dataset.dk];!dt||dt.num==null||!b.matches("li.hr, .hv")||(B=q.clientX,st=q.clientY,b.classList.add("lpress"),A=setTimeout(()=>{if(A=0,b.classList.remove("lpress"),b._lpDone=Date.now(),!Vu(dt,ee())){Hu(dt.est!=null?nt(dt.est):"");return}let J=oo(dt.num,"lock",b.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Je(`${__t(519)} ${J&&J.tr.fam||dt.fam||""} ${dt.num} \xB7 ${__t(514)}`),Ee(!0)},700))}),b.addEventListener("pointermove",q=>{A&&Math.hypot(q.clientX-B,q.clientY-st)>10&&rt()}),["pointerup","pointercancel","pointerleave"].forEach(q=>b.addEventListener(q,()=>{A&&rt()})),b.addEventListener("contextmenu",q=>q.preventDefault())}),c.querySelectorAll(".hv .hwhere").forEach(b=>b.onclick=A=>{A.stopPropagation();let B=b.closest("[data-dk]"),st=B&&v[+B.dataset.dk];st&&(Bi("map"),Hs(st))}),c.querySelectorAll("[data-dk]").forEach(b=>b.onclick=()=>{if(b._lpDone&&Date.now()-b._lpDone<1500)return;let A=v[+b.dataset.dk];if(b.matches("li.hr, .hv")&&!A.gone&&A.num!=null){let B=b.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(B){let st=hn.get(B)===String(A.num);pi(B,st?null:String(A.num)),st&&Nn.num===String(A.num)&&(Nn.num=""),st?Mt&&String(Mt.num)===String(A.num)&&(Mt=null,Nt=null,Ve.sk="",d._h="",Ue()):Hs(A,!0),Ee(!0);return}}if(A.gone&&b.closest("#home")){Je(`${__t(532)} \xB7 ${A.fam||""} ${A.num||""}`,{label:__t(512),fn:()=>{Bi("map"),Hs(A)}});return}Hs(A)}),c.querySelectorAll("[data-pinnext]").forEach(b=>b.onclick=A=>{if(A.target.closest("[data-unpin]"))return;let[B,st]=b.dataset.pinnext.split(":");pi(B,st);let rt=am(B,st);rt&&Hs(rt,!0),Ee(!0)}),c.querySelectorAll("[data-unpin]").forEach(b=>b.onclick=A=>{A.stopPropagation(),pi(b.dataset.unpin,null),Ee(!0)}),c.querySelectorAll("[data-hal]").forEach(b=>b.onclick=()=>x("#alr").click()),Pp(c)}function Hs(o,c){if(!o)return;let f=t.days.indexOf(ee().ymd),p=ae.find(I=>I.real?o.tid&&I.v.tid===o.tid||o.num&&String(I.tr?I.tr.num:I.v.num)===String(o.num):o.tr&&I.tr===o.tr||o.num&&I.tr&&String(I.tr.num)===String(o.num)),v=o.tr||p&&p.tr||(et[f]||[]).find(I=>String(I.num)===String(o.num));if(Ot=_e=Ct=!1,me=-1,c||void 0,Mt=p?p.tr||{vtid:p.v.tid}:v||null,!Mt)return;c&&(Ve.sk="t"+(Mt.num||Mt.vtid)),Nt=p&&p.tr?p.tr:null,Nt&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let S=p?p.p.w:null;S&&Object.assign(s,{tx:S[0],ty:S[1],dist:Math.min(s.dist,22)}),Hn(),d._h="",Ue(),Me=0,a()}let qr=!1;function um(o){qr=o||!1,y.value="",y.placeholder=o==="work"?__t(533):o==="home"?__t(534):__t(535),document.documentElement.classList.add("srch"),g.style.display="none",y.focus()}let dm=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>um(""))}y.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==y&&dm(),qr&&!y.value.trim()&&(qr=!1,y.placeholder=__t(535))},600));function z1(){}function Qu(o,c){let f=c==="work"?ze:je,p=T[o].id,v=T.filter(S=>S.fams.size&&S!==T[o]&&Math.hypot(S.w[0]-T[o].w[0],S.w[1]-T[o].w[1])<.6).map(S=>S.id);f.st=[p,...v].slice(0,3),f.i=0,f.open=!0,fi(f),Ee(!0),em()}let Ql=x("#lines");Ql.innerHTML=`${__t(536)}`+G.map(o=>`<button type="button" style="--c:${X[o]}" data-f="${o}">${o}</button>`).join("");function fm(){try{Ee(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",Ql.after(o),o.onclick=()=>{Yt=[...ut][0],Ct=Ot=_e=!1,d._h="",Ue()});let c=ut.size===1?[...ut][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(537)}${m(c)}${__t(538)}`)}Ql.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!ut.has(o.dataset.f))})}Ql.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?G.forEach(f=>ut.add(f)):ut.size===G.length?(ut.clear(),ut.add(c)):ut.has(c)?(ut.delete(c),ut.size||G.forEach(f=>ut.add(f))):ut.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...ut]))}catch{}fm(),Kt(),Hn(),ku(),Me=0,a()});let td=[...document.querySelectorAll("[data-sp]")],Ci=0;function pm(o){let c=ee();o&&(Ut===o||Ci===o)?Ut?(jt=c.min,he=c.min,Ut=0,Ci=o):(ge=performance.now(),Ut=o,Ci=0):o===0?(Ut=0,he=null,Ci=0):(jt=c.min,ge=performance.now(),he=c.min,Ut=o,Ci=0),td.forEach(f=>{let p=+f.dataset.sp;f.classList.toggle("on",p===(Ut||Ci)||!Ut&&!Ci&&he==null&&p===0),f.classList.toggle("pz",!!Ci&&p===Ci),f.textContent=p===0?__t(539):Ci===p?"\u25B6 \xD7"+p:Ut===p?"\u23F8 \xD7"+p:"\xD7"+p}),Me=0,a()}td.forEach(o=>o.onclick=()=>pm(+o.dataset.sp)),x("#tsl").oninput=o=>{let c=+o.target.value;jt=c,he=c,ge=performance.now(),Ut===0&&!Ci&&td.forEach(f=>f.classList.remove("on")),Me=0,a()},setInterval(()=>{he!=null&&Ut&&jt+(performance.now()-ge)/6e4*Ut>1560&&(jt=240,ge=performance.now())},1e3),window.__rodSearch=o=>{let c=w(o.trim());if(!c){g.style.display="none",g._pick=null;return}let f=[],p=[];T.forEach((N,P)=>{if(!N.fams.size)return;let F=w(N.n);F.startsWith(c)||F.includes(" "+c)||F.includes("-"+c)?f.push(P):F.includes(c)&&p.push(P)});let v=f.concat(p).slice(0,7),S=D.filter(N=>w(N.name).startsWith(c)).sort((N,P)=>P.pop-N.pop).slice(0,3),I=v.map(N=>({h:`\u{1F689} ${m(T[N].n)}<em>${[...T[N].fams].sort(O).slice(0,3).map(P=>`<em class="ls" style="background:${X[P]}">${P}</em>`).join(" ")}</em>`,go:()=>{if(dm(),qr){let P=qr;qr=!1,y.placeholder=__t(535),Qu(N,P);return}Ve.on&&Ve.cur!=="map"&&Bi("map"),Ot=!1,_e=!1,Ct=!1,me=N,Mt=null,Nt=null,Hn(),Object.assign(s,{tx:T[N].w[0],ty:T[N].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ue(),a()}})).concat(S.map(N=>({h:`${m(N.name)}${__t(540)}`,go:()=>{Object.assign(s,{tx:N.cx,ty:N.cy,dist:M(N.size*3+14,14,60)}),a()}})));g.innerHTML=I.map((N,P)=>`<li data-i="${P}">${N.h}</li>`).join("")||__t(541),g.style.display="block",g._pick=N=>{I[N]&&(I[N].go(),g.style.display="none",y.value="",y.blur())},g.querySelectorAll("li[data-i]").forEach(N=>N.onclick=()=>g._pick(+N.dataset.i))},fm(),Hn();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=w(o),f=-1,p=0;T.forEach((v,S)=>{if(!v.fams.size)return;let I=w(v.n),N=I===c?3:I.startsWith(c)||c.startsWith(I)?2:I.includes(c)||c.includes(I)?1:0;N>p&&(p=N,f=S)}),f>=0&&setTimeout(()=>{me=f,Hn(),Object.assign(s,{tx:T[f].w[0],ty:T[f].w[1],dist:18,tilt:.5}),Ue(),a()},300)}}catch{}let ed={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(ed.v=!ed.v,Ee(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&Mt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,f=0,p=0;d.addEventListener("touchstart",v=>{p=innerWidth<=640&&Mt&&(!Ve.on||Ve.cur==="map")&&v.touches.length===1&&!v.target.closest("input")?1:0,p&&(o=v.touches[0].clientX,c=v.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",v=>{if(!p)return;let S=v.touches[0].clientX-o,I=v.touches[0].clientY-c;p===1&&(Math.abs(S)<12&&Math.abs(I)<12||(p=Math.abs(S)>Math.abs(I)*1.3&&S<0?2:0,!p))||(v.preventDefault(),f=Math.min(0,S),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(p!==2){p=0;return}if(p=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let v=d.querySelector("[data-cx]");v&&v.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{p===2&&(d.style.transform="",d.style.opacity=""),p=0})}let Ve={on:!1,cur:"now",home:new Map},tc=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Un=document.createElement("nav");Un.id="tabs";let H_=[["now","\u{1F552}",__t(539)],["map","\u{1F5FA}\uFE0F",__t(542)],["line","\u{1F4CA}",__t(543)],["set","\u2699\uFE0F",__t(544)]];Un.innerHTML=H_.map(([o,c,f])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Un);let gr=document.createElement("i");gr.className="tind",gr.setAttribute("aria-hidden","true"),Un.prepend(gr);let mm=o=>[...Un.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return o>=f.left&&o<f.right}),nd=o=>{!o||!o.offsetWidth||(gr.style.width=o.offsetWidth+"px",gr.style.height=o.offsetHeight+"px",gr.style.top=o.offsetTop+"px",gr.style.transform=`translateX(${o.offsetLeft}px)`)},Yr=()=>nd(Un.querySelector("[data-tab].on")),G_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ni={on:!1,b:null,moved:!1,until:0};Un.addEventListener("pointerdown",o=>{let c=mm(o.clientX);if(c){ni.on=!0,ni.b=c,ni.moved=!1,Un.classList.add("drag"),Un.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),nd(c);try{Un.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,p=f&&f.Plugins&&f.Plugins.Haptics;p&&f.isNativePlatform()&&p.selectionStart().catch(()=>{})}catch{}}}),Un.addEventListener("pointermove",o=>{if(!ni.on)return;let c=mm(o.clientX);c&&c!==ni.b&&(ni.b.classList.remove("hov"),c.classList.add("hov"),ni.b=c,ni.moved=!0,nd(c),G_())});let gm=o=>{if(ni.on){ni.on=!1,Un.classList.remove("drag"),Un.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&ni.b?(ni.until=Date.now()+500,ni.b.dataset.tab!==Ve.cur?Bi(ni.b.dataset.tab):Yr()):Yr()}};Un.addEventListener("pointerup",()=>gm(!0)),Un.addEventListener("pointercancel",()=>gm(!1)),addEventListener("resize",()=>setTimeout(Yr,60));try{new ResizeObserver(()=>Yr()).observe(Un)}catch{}let Zr=document.createElement("div");Zr.id="tabL",document.body.appendChild(Zr);let _r=document.createElement("div");_r.id="tabA",_r.className="box",document.body.appendChild(_r);let id=(o,c)=>{o&&(Ve.home.has(o)||Ve.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},_m=()=>{for(let[o,[c,f]]of Ve.home)try{c.insertBefore(o,f&&f.parentNode===c?f:null)}catch{}Ve.home.clear()};function sd(){let o=[...new Set([je,ze].flatMap(S=>{let I=In(S);return I!=null?[...T[I].fams]:[]}))],c=(ut.size&&ut.size<=8?[...ut]:o.length?o:[]).filter(S=>X[S]).sort(O),f=c.join(","),p=V.alerts.filter(S=>[...S.fams].some(I=>ut.has(I))).length,v=[Ct,_e,Yt,Ot,f,p].join("|");Zr._k!==v&&(Zr._k=v,Zr.innerHTML=`<button type="button" data-tl="stats" class="${Ct?"on":""}">\u{1F4CA} ${__t(545)}</button><button type="button" data-tl="alr" class="${_e?"on":""}">\u26A0\uFE0F ${p}${p===1?__t(316):__t(317)}</button>${c.map(S=>`<button type="button" data-tl="line:${m(S)}" class="${Yt===S?"on":""}">\u{1F4CB} ${m(S)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(159)}">\u{1F4AC}</a>`,Zr.querySelectorAll("[data-tl]").forEach(S=>S.onclick=()=>{let I=S.dataset.tl;Ct=I==="stats",_e=I==="alr",Yt=I.startsWith("line:")?I.slice(5):"",Ot=!1,Mt=null,me=-1,Ct&&(be.at=0),d._h="",Ue(),sd()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let W_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",X_=()=>yt(new Date).ymd.replace(/-/g,"");function uo(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(W_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=X_(),p=t.days.indexOf(f),v=c.days.indexOf(f),S=p<0?0:ht.filter(P=>P.day===p).length,I=0;if(v>=0)for(let P of c.trips)P[0]===v&&I++;let N=v>=0&&S&&(Math.abs(I-S)/S>.1||!I);if(p<0||p>=t.days.length-2||N){try{sessionStorage.setItem("rod_packmsg",N?"1":"")}catch{}location.reload();return}fo.v=!0}).catch(()=>{})}let fo={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&fo.v?(fo.v=!1,fo.reload=!0):!document.hidden&&fo.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Je("\u{1F5D3}\uFE0F "+__t(546)),1500))}catch{}if(setTimeout(uo,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(uo.at||0)>6*36e5&&(uo.at=Date.now(),uo())}),uo.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=x("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function ec(){_m();let o=window.__L||"es",c=ui.mode;_r.innerHTML=`<h3>${__t(544)}</h3>
      <h4>\u{1F310} ${__t(547)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,p])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${p}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(548)}</h4><div class="seg2">${[["auto",__t(338)],["light",__t(549)],["dark",__t(550)]].map(([f,p])=>`<button type="button" data-th="${f}" class="${c===f?"on":""}">${p}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(551)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let p=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(338)],["0","Normal"],["1",__t(552)]].map(([v,S])=>`<button type="button" data-big="${v}" class="${p===v?"on":""}">${S}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(553)}</small>`})()}
      <h4>\u{1F514} ${__t(554)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(555)}</small>${Zl().length?"":`<small class="tabAhint">${__t(556)}</small>`}${(()=>{let f=Zl();return f.length>1?`<small class="tabAhint">${__t(557)}</small><div class="alch">${f.map(p=>`<button type="button" data-al="${m(p)}" class="ln${mr.has(p)?" off":""}" style="--c:${X[p]}">${m(p)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(558)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(559)}</h4><div id="tabAinf"></div><p class="tdisc">${__t(560)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,_r.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let p=f.dataset.al,v=Zl();mr.has(p)?mr.delete(p):v.filter(S=>!mr.has(S)).length>1&&mr.add(p);try{localStorage.setItem("rod_aloff",JSON.stringify([...mr]))}catch{}Ee(!0),ec()}),_r.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let p=f.dataset.big;try{p==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",p)}catch{}window.__txt&&window.__txt(),ec(),Ee(!0)}),_r.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ui.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ui.mode)}catch{}kl(),ec()}),id(x("#bell"),x("#tabAbell")),id(x("#src"),x("#tabArt")),id(x("#ver"),x("#tabAinf"))}function Bi(o){if(!Ve.on)return;let c=Ve.cur;if(Ve.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",o==="line"&&d.classList.remove("peek"),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Un.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),Yr(),o==="line")(Mt||me>=0)&&(Ve.keep={t:Mt,s:me,sk:Ve.sk}),!Ct&&!_e&&!Yt&&!Ot&&(Ct=!0,be.at=0),Mt=null,me=-1,d._h="",Ue(),sd();else if(c==="line"){Ct=_e=Ot=!1,Yt="";let f=Ve.keep;Ve.keep=null,f&&o==="map"&&!Mt&&me<0&&(Mt=f.t,me=f.s,Ve.sk=f.sk),d._h="",Ue()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Fu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&ec(),o==="now"&&(Ee(!0),requestAnimationFrame(Jl)),Me=0,a()}Un.onclick=o=>{if(Date.now()<ni.until)return;let c=o.target.closest("[data-tab]");c&&Bi(c.dataset.tab)},window.__rodTabSync=()=>{if(!Ve.on)return;let o=Mt?"t"+(Mt.num||Mt.vtid):me>=0?"s"+me:"",c=o!==Ve.sk;Ve.sk=o,o&&c&&Ve.cur!=="map"?Bi("map"):(_e||Yt||Ot)&&Ve.cur!=="line"&&Ve.cur!=="map"&&Bi("line"),Ve.cur==="line"&&sd()};function rd(){let o=tc.matches||document.documentElement.classList.contains("cap");if(o!==Ve.on)if(Ve.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Yr)),o||(window.__mapHidden=!1),o){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}Bi(c)}else delete document.documentElement.dataset.tab,_m()}tc.addEventListener?tc.addEventListener("change",rd):tc.addListener(rd),rd();{let o=x("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let ad={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u{1F4E4}":'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v8h14v-8"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},od=new RegExp("("+Object.keys(ad).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),q_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ad[o]||ad[o+"\uFE0F"]||""}</svg></span>`;function Y_(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],p;for(;p=c.nextNode();)p.parentElement&&p.parentElement.closest(".ico,script,style,textarea,input")||(od.lastIndex=0,od.test(p.nodeValue)&&f.push(p));for(let v of f){let S=document.createElement("span");S.innerHTML=m(v.nodeValue).replace(od,(I,N)=>q_(N)),v.replaceWith(...S.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(v=>x(v)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let v=0;o().forEach(S=>{v+=Y_(S)}),v&&Ve.on&&Jl()}finally{c=!1}}},p=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(v=>p.observe(v,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:hn,LASTPIN:Nn,get ONBX(){return{tid:Et.tid,lock:Et.lock,manual:Et.manual}},xferCands:qp,bestXfer:Xu,xferFirst:Wu,nowState:ee,XMIN:Xp,pinNotify:rm,toast:Je,cardEta:ao,HOME:je,WORK:ze,ONB:Et,alertForMe:Qp,whereAmI:Zu,departuresFor:Zn,DEPS:Ft,tripByNum:Ts,delayOf:mt,TID:pt,SID:zt,byDay:et,get days(){return t.days},get hist(){return be},get past(){return Lt.cur},get cols(){return mn.mesh?mn.mesh.count:-1},get dist(){return r.dist},get follow(){return Nt},get selTrip(){return Mt},ST:T,TR:ht,FAM:G,act:()=>ae,setSpeed:pm,RT:V,pollRT:de,nowState:ee,posAt:$s,activeTrips:R,LL:bt,select:o=>{Mt=o,Ue()}}}var Ha=window.__DATA__;var He=i=>document.querySelector(i),Os=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ei=(i,t,e)=>Math.min(e,Math.max(t,i)),Yf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),li=He("#c"),Tl=new pu({canvas:li,antialias:!0});Tl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Fs=new No;Fs.background=new xe(15659509);var Pu=35,xs=new Qn(Pu,1,2,1500);Fs.add(new il(16777215,9080992,1));var Bg=new rl(16777215,.9);Bg.position.set(-40,-70,90);Fs.add(Bg);var gs=100/Ha.w,wl=Ha.w/2,El=Ha.h/2,Sn=[],Zf=new Wi;Fs.add(Zf);var Tu=new Ar({color:16777215,transparent:!0,opacity:.55});for(let i of Ha.m){let t=new Wi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let M of i.g){let w=M.map(x=>{let m=[];for(let $=0;$<x.length;$+=2)m.push(new $t((x[$]-wl)*gs,(x[$+1]-El)*gs));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(x=>x.length>=3);if(!w.length)continue;let D=new Aa(w[0]);for(let x=1;x<w.length;x++)D.holes.push(new Rr(w[x]));e.push(D);for(let x of w[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of w)n.push(new $o(new bn().setFromPoints(x.map(m=>new Z(m.x,m.y,0))),Tu))}if(!e.length)continue;let h;try{h=new jo(e,{depth:1,bevelEnabled:!1})}catch{continue}let u=new tl({color:13421772}),d=new kn(h,u);t.add(d);let y=new Wi;n.forEach(M=>y.add(M)),y.position.z=.04,Zf.add(y),t.scale.z=.01,Zf.add(t);let g={og:y,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:u,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=g,Sn.push(g)}var dA=Sn.map(i=>i.mesh),Pg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},kg=0,$g=0;for(let i of Sn){for(let t of i.rings)kg+=Pg(t[0])-t.slice(1).reduce((e,n)=>e+Pg(n),0);$g+=i.area}var w1=Math.sqrt($g/kg),bu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},zg={"08":__t(561),17:__t(562),25:__t(563),43:__t(564)},np="sqrt",ip="pop",Xf=0,Jf=0,Ba=1,Ml=1,E1={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},jf=i=>ip==="pop"?i.pop:i.pop/i.area,Su=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new xe(i));function T1(i){i=ei(i,0,1)*(Su.length-1);let t=Math.min(Math.floor(i),Su.length-2);return Su[t].clone().lerp(Su[t+1],i-t)}var ka=i=>i>=100?Os(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function A1(){Jf=0;for(let i of Sn)Jf+=i.pop;[...Sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...Sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Gg()}var Vg=new xe("#d3d8e2"),Hg=new xe("#eceff3");window.__mapTheme=i=>{Fs.background=new xe(i?856345:15659509),Hg.set(i?"#2b3242":"#eceff3"),Vg.set(i?"#1a1f29":"#d3d8e2"),Tu.color.set(i?856345:16777215),Tu.opacity=i?.7:.55,sp.color.set(i?329483:2764864),rp.color.set(i?9081766:16777215);for(let t of Sn)t.base&&Lu(t);zn()};function Lu(i){i.mat.color.copy(i.base).lerp(Hg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Vg,.8)}function Gg(){Ba=1,Ml=1e12;for(let e of Sn){let n=jf(e);Ba=Math.max(Ba,n),Ml=Math.min(Ml,n)}let i=Math.log10(Math.max(Ml,.01)),t=Math.log10(Ba);for(let e of Sn)e.base=T1((Math.log10(Math.max(jf(e),.01))-i)/(t-i)),Lu(e);He("#lmin").textContent=ka(Ml),He("#lmax").textContent=ka(Ba),He("#lname").textContent=ip==="pop"?__t(565):__t(566),Du()}function Du(){let i=E1[np],t=i(Ba),e=24*Xf;for(let n of Sn)n.zt=Xf<=.001?.01:Math.max(.12*Math.min(1,Xf),e*i(jf(n))/t)*(n.inF?1:.1);zn()}var Lg=Object.fromEntries(Sn.map(i=>[i.code,i])),wu=[],Wg=[];for(let i of Ha.bd){let t=Lg[i.a],e=Lg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Wg.push((i.p[n]-wl)*gs,(i.p[n+1]-El)*gs,0,(i.p[n+2]-wl)*gs,(i.p[n+3]-El)*gs,0),wu.push(t,e)}var Au=new Ji;Au.setPositions(Wg);var sp=new us({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),rp=new us({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[sp,rp].forEach((i,t)=>{let e=new Or(Au,i);e.frustumCulled=!1,e.renderOrder=10+t,Fs.add(e)});function C1(){let i=Au.attributes.instanceStart.data.array;for(let t=0;t<wu.length;t+=2){let e=Math.max(wu[t].z,wu[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Au.attributes.instanceStart.data.needsUpdate=!0}var Cu={};for(let i of Object.keys(bu)){let t=Sn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,h=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),h=Math.max(h,d.cy);let u=document.createElement("div");u.className="plab",u.textContent=bu[i],u.title=__t(567)+zg[i],u.onclick=()=>k1("pr:"+i),document.body.appendChild(u),Cu[i]={el:u,p:new Z(n/e,s/e,0),cx:(r+a)/2,cy:(l+h)/2,ext:Math.max(a-r,h-l),ext2:[a-r,h-l],area:e,name:bu[i]}}var qf=new Z;function R1(){for(let i in Cu){let t=Cu[i];qf.copy(t.p).project(xs),t.el.style.transform=`translate(-50%,-50%) translate(${(qf.x*.5+.5)*innerWidth}px,${(-qf.y*.5+.5)*innerHeight}px)`}}var Tn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Re={...Tn};function I1(){let i=innerWidth/innerHeight,t=Math.tan(Pu*Math.PI/360);return Math.max(Ha.h*gs*1.1,100*1.1/i)/(2*t)}var P1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Re.yaw=Math.round(Re.yaw/(2*Math.PI))*2*Math.PI,Re.tilt=0,zn()});function ap(){Object.assign(Re,{tilt:0,yaw:0,dist:I1(),tx:0,ty:0}),zn()}function L1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Tn;xs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),xs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),xs.lookAt(n,s,0)}var bl=!0,Dg=performance.now(),za=new Map,or=0,Mu=0;function op(){or&&(clearTimeout(or),or=0,requestAnimationFrame($a))}function zn(){bl=!0,op()}window.__wakeMap=op;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,op,{passive:!0,capture:!0}));function $a(i){or=0;let t=ei((i-Dg)/1e3,0,.05);Dg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Tn)){let r=Re[s]-Tn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Tn[s]+=r*e,n=!0):Tn[s]=Re[s]}for(let s of Sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of za){let a=(i-r)/1800;a>=1?(za.delete(s),zr(s)):zr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(bl=!0),window.__mapHidden){bl=!0,or=setTimeout(()=>{or=0,requestAnimationFrame($a)},1e3);return}if(n||bl){P1.style.transform=`rotate(${Tn.yaw}rad) scaleY(${(.55+.45*Math.cos(Tn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Re.yaw/2))<.02&&Re.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(568):__t(569))}L1(),C1(),R1(),window.__rodFrame&&window.__rodFrame(),Tl.render(Fs,xs),bl=n,He("#tilt").value=Math.round(Re.tilt*180/Math.PI),He("#yaw").value=Math.round(((Re.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||za.size){Mu=0,requestAnimationFrame($a);return}Mu||(Mu=i),i-Mu<1500?requestAnimationFrame($a):or=setTimeout(()=>{or=0,requestAnimationFrame($a)},120)}function Xg(){Tl.setSize(innerWidth,innerHeight,!1),xs.aspect=innerWidth/innerHeight,xs.updateProjectionMatrix(),sp.resolution.set(innerWidth,innerHeight),rp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),zn()}addEventListener("resize",()=>{Xg(),fn.length&&cr()});li.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Re.yaw+=n*.0035}else i.ctrlKey?Re.dist=ei(Re.dist*Math.exp(e*.01),6,400):Re.tilt=ei(Re.tilt+e*.002,0,1.32);zn()},{passive:!1});li.addEventListener("contextmenu",i=>i.preventDefault());var _s=new Map,vi=null,Br=0,Kf=0,Qf=0;var Ru=null;li.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),fn.length&&setTimeout(cr,50)),li.setPointerCapture(i.pointerId),_s.set(i.pointerId,{x:i.clientX,y:i.clientY}),_s.size===1&&(vi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),_s.size===2){let[t,e]=[..._s.values()];Br=Math.hypot(t.x-e.x,t.y-e.y),Kf=Math.atan2(e.y-t.y,e.x-t.x),Qf=(t.y+e.y)/2,Ru={mode:null,rot:0,sc:0,tl:0},vi&&(vi.multi=!0)}lp()});li.addEventListener("pointermove",i=>{let t=_s.get(i.pointerId);if(!t){Us={x:i.clientX,y:i.clientY},tp||(tp=requestAnimationFrame(N1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,_s.size===2){let[s,r]=[..._s.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),h=(s.y+r.y)/2,u=l-Kf;u>Math.PI&&(u-=2*Math.PI),u<-Math.PI&&(u+=2*Math.PI);let d=Br?a-Br:0,y=h-Qf,g=Ru||(Ru={mode:null,rot:0,sc:0,tl:0});g.rot+=u,g.sc+=d,g.tl+=y,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&Br&&(Re.dist=ei(Re.dist*Br/a,6,400)),g.mode==="rotate"&&(Re.yaw+=u,Tn.yaw=Re.yaw),g.mode==="tilt"&&(Re.tilt=ei(Re.tilt-y*.006,0,1.32),Tn.tilt=Re.tilt),Br=a,Kf=l,Qf=h,zn();return}if(vi.moved+=Math.abs(e)+Math.abs(n),vi.rot||i.altKey)Re.yaw+=e*.005,Re.tilt=ei(Re.tilt+n*.004,0,1.32),Tn.yaw=Re.yaw,Tn.tilt=Re.tilt;else{let s=2*Tn.dist*Math.tan(Pu*Math.PI/360)/innerHeight,r=Math.sin(Tn.yaw),a=Math.cos(Tn.yaw),l=1/Math.max(Math.cos(Tn.tilt),.3);Re.tx=ei(Re.tx-a*e*s+-r*n*s*l,-70,70),Re.ty=ei(Re.ty-r*e*s+a*n*s*l,-70,70),Tn.tx=Re.tx,Tn.ty=Re.ty}zn()});var qg=i=>{let t=vi&&!vi.rot&&!vi.multi&&vi.moved<(vi.touch?12:6)&&i.type==="pointerup"&&_s.size===1,e=vi&&vi.touch;_s.delete(i.pointerId),Br=0,Ru=null,_s.size||(vi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};li.addEventListener("pointerup",qg);li.addEventListener("pointercancel",qg);li.addEventListener("dblclick",ap);addEventListener("keydown",i=>{i.key==="Alt"&&(li.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(li.style.cursor="")});addEventListener("blur",()=>{li.style.cursor=""});var D1=new ol,Ng=new $t,Us=null,tp=0,kr=null;function N1(){if(tp=0,!Us||vi)return;Ng.set(Us.x/innerWidth*2-1,-(Us.y/innerHeight)*2+1),D1.setFromCamera(Ng,xs);let i=null;if(i!==kr){let e=kr;kr=i,e&&zr(e),i&&zr(i),zn()}let t=window.__rodHover&&window.__rodHover(Us.x,Us.y);if(t){Fr.innerHTML=t,Fr.style.display="block";let e=Fr.offsetWidth,n=Fr.offsetHeight;Fr.style.left=ei(Us.x+14,6,innerWidth-e-6)+"px",Fr.style.top=ei(Us.y+14,6,innerHeight-n-6)+"px",li.style.cursor="pointer"}else lp(),li.style.cursor=""}li.addEventListener("pointerleave",()=>{if(Us=null,kr){let i=kr;kr=null,zr(i),zn()}lp()});var Fr=He("#tip");function lp(){Fr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{ip=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Gg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{np=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Du()});He("#yaw").oninput=i=>{Re.yaw=+i.target.value*Math.PI/180,zn()};He("#tilt").oninput=i=>{Re.tilt=+i.target.value*Math.PI/180,zn()};He("#zin").onclick=()=>{Re.dist=ei(Re.dist*.75,6,400),zn()};He("#zout").onclick=()=>{Re.dist=ei(Re.dist/.75,6,400),zn()};He("#rst").onclick=ap;var Ug=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],fn=[],Og={},U1=i=>Og[i]||(Og[i]=new Ar({color:i}));function Yg(i,t){i.og.children.forEach(e=>e.material=t?U1(t):Tu)}function zr(i,t=0){let e=i.mat.emissive;i===kr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function cp(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let u of i)e=Math.min(e,u.cx-u.size/2),n=Math.max(n,u.cx+u.size/2),s=Math.min(s,u.cy-u.size/2),r=Math.max(r,u.cy+u.size/2);let a=innerWidth/innerHeight,l=Math.tan(Pu*Math.PI/360),h=i.length===1?ei(i[0].size*3.2+14,14,120):ei(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Re,{tx:(e+n)/2,ty:(s+r)/2,dist:h,tilt:t,yaw:0}),zn()}var lr=He("#q"),Ei=He("#list"),dn=He("#mcs");function Nu(i,t=!0){if(Ei.style.display="none",lr.value="",!i.sel){fn.length>=6&&Zg(fn[0].o,!0);let e=new Set(fn.map(s=>s.color)),n=Ug.find(s=>!e.has(s))||Ug[0];i.sel={o:i,color:n,tint:new xe(n).multiplyScalar(.12)},fn.push(i.sel),Yg(i,n)}dn.classList.contains("min")&&Al(!1),za.set(i,performance.now()),zr(i),t&&cp([i],Math.max(Re.tilt,.9)),cr()}function Zg(i,t){let e=fn.indexOf(i.sel);e>=0&&fn.splice(e,1),i.sel=null,Yg(i,null),zr(i),zn(),t||cr()}function Jg(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=fn.map(d=>{let y=1e9,g=-1e9,M=1e9,w=-1e9;for(let D of d.o.rings)for(let x=0;x<D[0].length;x+=2)y=Math.min(y,D[0][x]),g=Math.max(g,D[0][x]),M=Math.min(M,D[0][x+1]),w=Math.max(w,D[0][x+1]);return{x0:y,x1:g,y0:M,y1:w}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;fn.forEach((d,y)=>{let g=r[y],M=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let D of d.o.rings)for(let x of D)for(let m=0;m<x.length;m+=2){let $=e/2+(x[m]-M)*l,z=n/2-(x[m+1]-w)*l;m?s.lineTo($,z):s.moveTo($,z),m===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let h=l/w1,u=[.5,1,2,5,10,20,50,100].find(d=>d*h>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,u*h,2),s.font="10px system-ui",s.fillText(u+" km",12+u*h,n-8)}function cr(){if(!fn.length){dn.innerHTML="",dn.style.display="none",Al(!1);return}if(dn.style.display="flex",innerWidth<=640){let e=He("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(110,Math.min(innerHeight*(He("#rc").classList.contains("min")?.7:.4),He("#rc").getBoundingClientRect().top-e-16))+"px",dn.style.width=""}else if(innerHeight<=500){let e=He("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",dn.style.width="min(290px, 40vw)"}else dn.style.top="",dn.style.maxHeight="",dn.style.width="";window.__fitMcs&&window.__fitMcs();let i=fn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${bu[s.pr]}</em></div><div class="mb">${Os(s.pop)}${__t(575)}${ka(s.area)} km\xB2 \xB7 ${ka(s.pop/s.area)}${__t(576)}${s.rankP}${__t(577)}`}).join("");if(fn.length>1){let e=s=>Math.max(...fn.map(s)),n=[[__t(578),s=>s.o.pop,Os],[__t(579),s=>s.o.area,ka],[__t(580),s=>s.o.pop/s.o.area,ka]];if(i+=`${__t(581)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${fn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),fn.length===2){let[s,r]=fn.map(u=>u.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],h=(u,d)=>(u>=d?u/d:d/u).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(582)}${h(a.pop,l.pop)}${__t(583)}${l.name}${__t(584)}${h(a.area,l.area)}\xD7 ${a.area>=l.area?__t(585):__t(586)}.</small>`}i+="</div>"}dn.innerHTML=i,dn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Zg(fn[+e.dataset.x].o)}),dn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>cp([fn[+e.dataset.i].o],Math.max(Re.tilt,.9)),e.onmouseenter=()=>{let n=fn[+e.dataset.i].o;za.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=fn.splice(s,1);fn.splice(r,0,a),cr();let l=He("#sil");l&&l.classList.add("flash")}}});let t=He("#sil");t&&Jg(t)}lr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(lr.value);return}let i=Yf(lr.value.trim());if(!i){Ei.style.display="none";return}let t=[],e=[];for(let s of Sn){let r=Yf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Ei.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Os(s.pop)}</em></li>`).join("")||__t(541),Ei.style.display="block",Ei.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Nu(n[+s.dataset.i])),Ei._r=n});lr.addEventListener("keydown",i=>{i.key==="Enter"&&Ei._pick?Ei._pick(0):i.key==="Enter"&&Ei._r&&Ei._r[0]&&Nu(Ei._r[0]),i.key==="Escape"&&(lr.value="",Ei.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==lr&&jg()});var Fg=0;addEventListener("resize",()=>{clearTimeout(Fg),Fg=setTimeout(()=>{let i=He("#sil");i&&Jg(i)},120)});var Iu=null,ep=He("#chip");function O1(i,t,e=.8){Iu={codes:new Set(i.map(n=>n.code)),label:t},Sn.forEach(n=>{n.inF=Iu.codes.has(n.code),Lu(n)}),ep.innerHTML=`${__t(587)}${t}</b> \xB7 ${i.length}${i.length===1?__t(588):__t(589)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,ep.style.display="flex",He("#chx").onclick=jg,Du(),cp(i,e),i.slice(0,40).forEach(n=>za.set(n,performance.now()))}function jg(){Iu&&(Iu=null,Sn.forEach(i=>{i.inF=!0,Lu(i)}),ep.style.display="none",Du())}var F1="prov";function B1(i){let t=[...Sn].sort((a,l)=>l.pop-a.pop),e=[...Sn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[Sn.filter(a=>a.pr===s),zg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(590)]:[e.slice(0,10),__t(591)];if(n==="low")return s==="pop"?[t.slice(-10),__t(592)]:[e.slice(-10),__t(593)];if(n==="size")return[Sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Os(+s)}${__t(594)}`:+s==0?`${__t(595)}${Os(+r)}${__t(596)}`:`${Os(+s)} \u2013 ${Os(+r-1)}${__t(596)}`];if(n==="n50"){let a=0,l=0;for(let h of t)if(a+=h.pop,l++,a>=Jf/2)break;return[t.slice(0,l),`${__t(597)}`]}return[[],""]}function k1(i){let[t,e]=B1(i);t.length&&O1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{F1=i.dataset.tab,He("#dbody").scrollTop=0});var $r=He("#rc"),Eu=He("#mcstab");function Va(i){$r.classList.toggle("min",i),He("#rcgrab span").textContent=i?__t(639):__t(640),fn.length&&cr()}function Al(i){dn.classList.toggle("min",i),dn.style.transform="",dn.style.opacity="",Eu.classList.toggle("on",i&&fn.length>0),i&&(Eu.textContent=`\u25B8 ${fn.length} ${fn.length===1?"ficha":"fichas"}`,Eu.style.top=dn.style.top||"124px")}function hp(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Uu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y;!s.lock&&Math.hypot(l,h)>10&&(s.lock=Math.abs(l)>Math.abs(h)?"x":"y"),s.lock===n&&t&&t(l,h)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y,u=s.lock;s=null,e(u===n?l:0,u===n?h:0,u)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}He("#rcgrab").onclick=()=>Va(!$r.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Va(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Kg=()=>innerWidth>640;hp($r,{axis:"y",onEnd:(i,t)=>{if(!Kg())if(t>40&&!$r.classList.contains("min")){let e=He("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Va(!0)}else t<-30&&$r.classList.contains("min")&&Va(!1)}});hp($r,{axis:"x",onEnd:i=>{Kg()&&(i>50?Va(!0):i<-30&&$r.classList.contains("min")&&Va(!1))}});hp(dn,{axis:"x",onMove:i=>{i<0&&(dn.classList.add("sw"),dn.style.transform=`translateX(${i}px)`,dn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{dn.classList.remove("sw"),i<-60?(Al(!0),window.__rodHide&&!fn.length&&window.__rodHide()):(dn.style.transform="",dn.style.opacity="")}});Eu.onclick=()=>{Al(!1),cr()};He("#dtoggle").onclick=()=>{let i=He("#dp").classList.toggle("open");He("#rc").classList.toggle("dopen",i),He("#dtoggle").textContent=i?Uu.matches&&innerWidth<=640?__t(641):__t(642):__t(643),window.__rodCard&&window.__rodCard()};var Uu=matchMedia("(max-width:640px), (max-height:500px)");function Qg(){let i=He("#leg");Uu.matches?He("#rc").insertBefore(i,He("#dtoggle")):document.body.appendChild(i),fn.length&&cr()}Uu.addEventListener("change",Qg);Qg();Xg();A1();ap();Object.assign(Tn,Re);for(let i of Sn)i.z=.01;requestAnimationFrame($a);Ig({scene:Fs,camera:xs,renderer:Tl,goal:Re,cur:Tn,invalidate:zn,flyTo:(i,t,e,n)=>{Object.assign(Re,{tx:(i-wl)*gs,ty:(t-El)*gs,dist:e,tilt:n}),zn()},K:gs,CX:wl,CY:El,mcs:dn,q:lr,list:Ei,munis:Sn,select:Nu,norm:Yf,fmt:Os,clamp:ei,mcsMin:Al});window.__app={scene:Fs,renderer:Tl,camera:xs,munis:Sn,labs:Cu,goal:Re,cur:Tn,select:Nu,get mode(){return np}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(649):__t(650)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
