(()=>{var Um=0,kd=1,Fm=2;var sl=1,Om=2,Ta=3,Ks=0,si=1,ss=2,rs=0,Aa=1,zd=2,$d=3,Vd=4,Bm=5;var Rr=100,km=101,zm=102,$m=103,Vm=104,Hm=200,Gm=201,Wm=202,Xm=203,Hd=204,Gd=205,qm=206,Ym=207,Jm=208,Zm=209,jm=210,Km=211,Qm=212,t0=213,e0=214,Tc=0,Ac=1,Cc=2,fa=3,Rc=4,Ic=5,Pc=6,Lc=7,fh=0,n0=1,i0=2,Hi=0,Wd=1,Xd=2,qd=3,Yd=4,Jd=5,Zd=6,jd=7;var Kd=300,Qs=301,Ir=302,ph=303,mh=304,rl=306,Dc=1e3,Ki=1001,Nc=1002,Un=1003,s0=1004;var al=1005;var Hn=1006,gh=1007;var tr=1008;var fi=1009,Qd=1010,tf=1011,Ca=1012,_h=1013,Gi=1014,Ti=1015,Wi=1016,xh=1017,vh=1018,Ra=1020,ef=35902,nf=35899,sf=1021,rf=1022,Ai=1023,ts=1026,er=1027,yh=1028,Sh=1029,nr=1030,Mh=1031;var bh=1033,ol=33776,ll=33777,cl=33778,hl=33779,wh=35840,Eh=35841,Th=35842,Ah=35843,Ch=36196,Rh=37492,Ih=37496,Ph=37488,Lh=37489,ul=37490,Dh=37491,Nh=37808,Uh=37809,Fh=37810,Oh=37811,Bh=37812,kh=37813,zh=37814,$h=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Yh=36492,Jh=36494,Zh=36495,jh=36283,Kh=36284,dl=36285,Qh=36286;var bo=2300,Uc=2301,wc=2302,Td=2303,Ad=2400,Cd=2401,Rd=2402;var r0=3200;var tu=0,a0=1,Cs="",xi="srgb",wo="srgb-linear",Eo="linear",rn="srgb";var Ec=7680;var o0=519,l0=512,c0=513,h0=514,eu=515,u0=516,d0=517,nu=518,f0=519,af=35044;var of="300 es",zi=2e3,pa=2001;function P_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function L_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function p0(){let i=To("canvas");return i.style.display="block",i}var jp={},ma=null;function Ao(...i){let t="THREE."+i.shift();ma?ma("log",t,...i):console.log(t,...i)}function m0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=m0(i);let t="THREE."+i.shift();if(ma)ma("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Se(...i){i=m0(i);let t="THREE."+i.shift();if(ma)ma("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Mr(...i){let t=i.join(" ");t in jp||(jp[t]=!0,ve(...i))}function g0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _0={[Tc]:Ac,[Cc]:Pc,[Rc]:Lc,[fa]:Ic,[Ac]:Tc,[Pc]:Cc,[Lc]:Rc,[Ic]:fa},es=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kp=1234567,vo=Math.PI/180,ga=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[e&63|128]+Zn[e>>8&255]+"-"+Zn[e>>16&255]+Zn[e>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function lf(i,t){return(i%t+t)%t}function D_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function N_(i,t,e){return i!==t?(e-i)/(t-i):0}function yo(i,t,e){return(1-e)*i+e*t}function U_(i,t,e,n){return yo(i,t,1-Math.exp(-e*n))}function F_(i,t=1){return t-Math.abs(lf(i,t*2)-t)}function O_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function B_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function k_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function z_(i,t){return i+Math.random()*(t-i)}function $_(i){return i*(.5-Math.random())}function V_(i){i!==void 0&&(Kp=i);let t=Kp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function H_(i){return i*vo}function G_(i){return i*ga}function W_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function X_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function q_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Y_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),h=a(e/2),u=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),_=a((t-n)/2),S=r((n-t)/2),b=a((n-t)/2);switch(s){case"XYX":i.set(l*d,h*v,h*_,l*u);break;case"YZY":i.set(h*_,l*d,h*v,l*u);break;case"ZXZ":i.set(h*v,h*_,l*d,l*u);break;case"XZX":i.set(l*d,h*b,h*S,l*u);break;case"YXY":i.set(h*S,l*d,h*b,l*u);break;case"ZYZ":i.set(h*b,h*S,l*d,l*u);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cf={DEG2RAD:vo,RAD2DEG:ga,generateUUID:Qi,clamp:Pe,euclideanModulo:lf,mapLinear:D_,inverseLerp:N_,lerp:yo,damp:U_,pingpong:F_,smoothstep:O_,smootherstep:B_,randInt:k_,randFloat:z_,randFloatSpread:$_,seededRandom:V_,degToRad:H_,radToDeg:G_,isPowerOfTwo:W_,ceilPowerOfTwo:X_,floorPowerOfTwo:q_,setQuaternionFromProperEuler:Y_,normalize:on,denormalize:ki},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ns=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let h=n[s+0],u=n[s+1],d=n[s+2],v=n[s+3],_=r[a+0],S=r[a+1],b=r[a+2],I=r[a+3];if(v!==I||h!==_||u!==S||d!==b){let x=h*_+u*S+d*b+v*I;x<0&&(_=-_,S=-S,b=-b,I=-I,x=-x);let m=1-l;if(x<.9995){let k=Math.acos(x),$=Math.sin(k);m=Math.sin(m*k)/$,l=Math.sin(l*k)/$,h=h*m+_*l,u=u*m+S*l,d=d*m+b*l,v=v*m+I*l}else{h=h*m+_*l,u=u*m+S*l,d=d*m+b*l,v=v*m+I*l;let k=1/Math.sqrt(h*h+u*u+d*d+v*v);h*=k,u*=k,d*=k,v*=k}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],h=n[s+1],u=n[s+2],d=n[s+3],v=r[a],_=r[a+1],S=r[a+2],b=r[a+3];return t[e]=l*b+d*v+h*S-u*_,t[e+1]=h*b+d*_+u*v-l*S,t[e+2]=u*b+d*S+l*_-h*v,t[e+3]=d*b-l*v-h*_-u*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,h=Math.sin,u=l(n/2),d=l(s/2),v=l(r/2),_=h(n/2),S=h(s/2),b=h(r/2);switch(a){case"XYZ":this._x=_*d*v+u*S*b,this._y=u*S*v-_*d*b,this._z=u*d*b+_*S*v,this._w=u*d*v-_*S*b;break;case"YXZ":this._x=_*d*v+u*S*b,this._y=u*S*v-_*d*b,this._z=u*d*b-_*S*v,this._w=u*d*v+_*S*b;break;case"ZXY":this._x=_*d*v-u*S*b,this._y=u*S*v+_*d*b,this._z=u*d*b+_*S*v,this._w=u*d*v-_*S*b;break;case"ZYX":this._x=_*d*v-u*S*b,this._y=u*S*v+_*d*b,this._z=u*d*b-_*S*v,this._w=u*d*v+_*S*b;break;case"YZX":this._x=_*d*v+u*S*b,this._y=u*S*v+_*d*b,this._z=u*d*b-_*S*v,this._w=u*d*v-_*S*b;break;case"XZY":this._x=_*d*v-u*S*b,this._y=u*S*v-_*d*b,this._z=u*d*b+_*S*v,this._w=u*d*v+_*S*b;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],h=e[9],u=e[2],d=e[6],v=e[10],_=n+l+v;if(_>0){let S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(d-h)*S,this._y=(r-u)*S,this._z=(a-s)*S}else if(n>l&&n>v){let S=2*Math.sqrt(1+n-l-v);this._w=(d-h)/S,this._x=.25*S,this._y=(s+a)/S,this._z=(r+u)/S}else if(l>v){let S=2*Math.sqrt(1+l-n-v);this._w=(r-u)/S,this._x=(s+a)/S,this._y=.25*S,this._z=(h+d)/S}else{let S=2*Math.sqrt(1+v-n-l);this._w=(a-s)/S,this._x=(r+u)/S,this._y=(h+d)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+a*l+s*u-r*h,this._y=s*d+a*h+r*l-n*u,this._z=r*d+a*u+n*h-s*l,this._w=a*d-n*l-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let h=1-e;if(l<.9995){let u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,h=t.w,u=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+h*u+a*v-l*d,this.y=n+h*d+l*u-r*v,this.z=s+h*v+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,h=e.z;return this.x=s*h-r*l,this.y=r*a-n*h,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},td=new Y,Qp=new ns,Ce=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u)}set(t,e,n,s,r,a,l,h,u){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],h=n[6],u=n[1],d=n[4],v=n[7],_=n[2],S=n[5],b=n[8],I=s[0],x=s[3],m=s[6],k=s[1],$=s[4],R=s[7],T=s[2],O=s[5],W=s[8];return r[0]=a*I+l*k+h*T,r[3]=a*x+l*$+h*O,r[6]=a*m+l*R+h*W,r[1]=u*I+d*k+v*T,r[4]=u*x+d*$+v*O,r[7]=u*m+d*R+v*W,r[2]=_*I+S*k+b*T,r[5]=_*x+S*$+b*O,r[8]=_*m+S*R+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8];return e*a*d-e*l*u-n*r*d+n*l*h+s*r*u-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=d*a-l*u,_=l*h-d*r,S=u*r-a*h,b=e*v+n*_+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/b;return t[0]=v*I,t[1]=(s*u-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=_*I,t[4]=(d*e-s*h)*I,t[5]=(s*r-l*e)*I,t[6]=S*I,t[7]=(n*h-u*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*a+u*l)+a+t,-s*u,s*h,-s*(-u*a+h*l)+l+e,0,0,1),this}scale(t,e){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ed.makeScale(t,e)),this}rotate(t){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ed.makeRotation(-t)),this}translate(t,e){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ed.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ed=new Ce,tm=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){let i={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rn&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rn&&(s.r=da(s.r),s.g=da(s.g),s.b=da(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cs?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wo]:{primaries:t,whitePoint:n,transfer:Eo,toXYZ:tm,fromXYZ:em,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:n,transfer:rn,toXYZ:tm,fromXYZ:em,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),i}var He=J_();function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zr,Fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zr===void 0&&(Zr=To("canvas")),Zr.width=t.width,Zr.height=t.height;let s=Zr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=To("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ts(e[n]/255)*255):e[n]=Ts(e[n]);return{data:e,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Z_=0,_a=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(nd(s[a].image)):r.push(nd(s[a]))}else r=nd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var j_=0,id=new Y,hi=class i extends es{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ki,s=Ki,r=Hn,a=tr,l=Ai,h=fi,u=i.DEFAULT_ANISOTROPY,d=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Qi(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ve(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Kd;hi.DEFAULT_ANISOTROPY=1;var an=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],d=h[4],v=h[8],_=h[1],S=h[5],b=h[9],I=h[2],x=h[6],m=h[10];if(Math.abs(d-_)<.01&&Math.abs(v-I)<.01&&Math.abs(b-x)<.01){if(Math.abs(d+_)<.1&&Math.abs(v+I)<.1&&Math.abs(b+x)<.1&&Math.abs(u+S+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let $=(u+1)/2,R=(S+1)/2,T=(m+1)/2,O=(d+_)/4,W=(v+I)/4,A=(b+x)/4;return $>R&&$>T?$<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt($),s=O/n,r=W/n):R>T?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=W/r,s=A/r),this.set(n,s,r,e),this}let k=Math.sqrt((x-b)*(x-b)+(v-I)*(v-I)+(_-d)*(_-d));return Math.abs(k)<.001&&(k=1),this.x=(x-b)/k,this.y=(v-I)/k,this.z=(_-d)/k,this.w=Math.acos((u+S+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this.w=Pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this.w=Pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new hi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Co=class extends hi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends hi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var We=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,h,u,d,v,_,S,b,I,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u,d,v,_,S,b,I,x)}set(t,e,n,s,r,a,l,h,u,d,v,_,S,b,I,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=h,m[2]=u,m[6]=d,m[10]=v,m[14]=_,m[3]=S,m[7]=b,m[11]=I,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/jr.setFromMatrixColumn(t,0).length(),r=1/jr.setFromMatrixColumn(t,1).length(),a=1/jr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let _=a*d,S=a*v,b=l*d,I=l*v;e[0]=h*d,e[4]=-h*v,e[8]=u,e[1]=S+b*u,e[5]=_-I*u,e[9]=-l*h,e[2]=I-_*u,e[6]=b+S*u,e[10]=a*h}else if(t.order==="YXZ"){let _=h*d,S=h*v,b=u*d,I=u*v;e[0]=_+I*l,e[4]=b*l-S,e[8]=a*u,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=S*l-b,e[6]=I+_*l,e[10]=a*h}else if(t.order==="ZXY"){let _=h*d,S=h*v,b=u*d,I=u*v;e[0]=_-I*l,e[4]=-a*v,e[8]=b+S*l,e[1]=S+b*l,e[5]=a*d,e[9]=I-_*l,e[2]=-a*u,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){let _=a*d,S=a*v,b=l*d,I=l*v;e[0]=h*d,e[4]=b*u-S,e[8]=_*u+I,e[1]=h*v,e[5]=I*u+_,e[9]=S*u-b,e[2]=-u,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){let _=a*h,S=a*u,b=l*h,I=l*u;e[0]=h*d,e[4]=I-_*v,e[8]=b*v+S,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-u*d,e[6]=S*v+b,e[10]=_-I*v}else if(t.order==="XZY"){let _=a*h,S=a*u,b=l*h,I=l*u;e[0]=h*d,e[4]=-v,e[8]=u*d,e[1]=_*v+I,e[5]=a*d,e[9]=S*v-b,e[2]=b*v-S,e[6]=l*d,e[10]=I*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K_,t,Q_)}lookAt(t,e,n){let s=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),$s.crossVectors(n,gi),$s.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),$s.crossVectors(n,gi)),$s.normalize(),jl.crossVectors(gi,$s),s[0]=$s.x,s[4]=jl.x,s[8]=gi.x,s[1]=$s.y,s[5]=jl.y,s[9]=gi.y,s[2]=$s.z,s[6]=jl.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],h=n[8],u=n[12],d=n[1],v=n[5],_=n[9],S=n[13],b=n[2],I=n[6],x=n[10],m=n[14],k=n[3],$=n[7],R=n[11],T=n[15],O=s[0],W=s[4],A=s[8],F=s[12],G=s[1],X=s[5],st=s[9],lt=s[13],J=s[2],tt=s[6],dt=s[10],pt=s[14],Tt=s[3],mt=s[7],wt=s[11],Mt=s[15];return r[0]=a*O+l*G+h*J+u*Tt,r[4]=a*W+l*X+h*tt+u*mt,r[8]=a*A+l*st+h*dt+u*wt,r[12]=a*F+l*lt+h*pt+u*Mt,r[1]=d*O+v*G+_*J+S*Tt,r[5]=d*W+v*X+_*tt+S*mt,r[9]=d*A+v*st+_*dt+S*wt,r[13]=d*F+v*lt+_*pt+S*Mt,r[2]=b*O+I*G+x*J+m*Tt,r[6]=b*W+I*X+x*tt+m*mt,r[10]=b*A+I*st+x*dt+m*wt,r[14]=b*F+I*lt+x*pt+m*Mt,r[3]=k*O+$*G+R*J+T*Tt,r[7]=k*W+$*X+R*tt+T*mt,r[11]=k*A+$*st+R*dt+T*wt,r[15]=k*F+$*lt+R*pt+T*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],h=t[9],u=t[13],d=t[2],v=t[6],_=t[10],S=t[14],b=t[3],I=t[7],x=t[11],m=t[15],k=h*S-u*_,$=l*S-u*v,R=l*_-h*v,T=a*S-u*d,O=a*_-h*d,W=a*v-l*d;return e*(I*k-x*$+m*R)-n*(b*k-x*T+m*O)+s*(b*$-I*T+m*W)-r*(b*R-I*O+x*W)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10];return e*(a*d-l*u)-n*(r*d-l*h)+s*(r*u-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=t[9],_=t[10],S=t[11],b=t[12],I=t[13],x=t[14],m=t[15],k=e*l-n*a,$=e*h-s*a,R=e*u-r*a,T=n*h-s*l,O=n*u-r*l,W=s*u-r*h,A=d*I-v*b,F=d*x-_*b,G=d*m-S*b,X=v*x-_*I,st=v*m-S*I,lt=_*m-S*x,J=k*lt-$*st+R*X+T*G-O*F+W*A;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/J;return t[0]=(l*lt-h*st+u*X)*tt,t[1]=(s*st-n*lt-r*X)*tt,t[2]=(I*W-x*O+m*T)*tt,t[3]=(_*O-v*W-S*T)*tt,t[4]=(h*G-a*lt-u*F)*tt,t[5]=(e*lt-s*G+r*F)*tt,t[6]=(x*R-b*W-m*$)*tt,t[7]=(d*W-_*R+S*$)*tt,t[8]=(a*st-l*G+u*A)*tt,t[9]=(n*G-e*st-r*A)*tt,t[10]=(b*O-I*R+m*k)*tt,t[11]=(v*R-d*O-S*k)*tt,t[12]=(l*F-a*X-h*A)*tt,t[13]=(e*X-n*F+s*A)*tt,t[14]=(I*$-b*T-x*k)*tt,t[15]=(d*T-v*$+_*k)*tt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,h=t.z,u=r*a,d=r*l;return this.set(u*a+n,u*l-s*h,u*h+s*l,0,u*l+s*h,d*l+n,d*h-s*a,0,u*h-s*l,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,h=e._w,u=r+r,d=a+a,v=l+l,_=r*u,S=r*d,b=r*v,I=a*d,x=a*v,m=l*v,k=h*u,$=h*d,R=h*v,T=n.x,O=n.y,W=n.z;return s[0]=(1-(I+m))*T,s[1]=(S+R)*T,s[2]=(b-$)*T,s[3]=0,s[4]=(S-R)*O,s[5]=(1-(_+m))*O,s[6]=(x+k)*O,s[7]=0,s[8]=(b+$)*W,s[9]=(x-k)*W,s[10]=(1-(_+I))*W,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=jr.set(s[0],s[1],s[2]).length(),l=jr.set(s[4],s[5],s[6]).length(),h=jr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ui.copy(this);let u=1/a,d=1/l,v=1/h;return Ui.elements[0]*=u,Ui.elements[1]*=u,Ui.elements[2]*=u,Ui.elements[4]*=d,Ui.elements[5]*=d,Ui.elements[6]*=d,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,e.setFromRotationMatrix(Ui),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,s,r,a,l=zi,h=!1){let u=this.elements,d=2*r/(e-t),v=2*r/(n-s),_=(e+t)/(e-t),S=(n+s)/(n-s),b,I;if(h)b=r/(a-r),I=a*r/(a-r);else if(l===zi)b=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===pa)b=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=_,u[12]=0,u[1]=0,u[5]=v,u[9]=S,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=I,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=zi,h=!1){let u=this.elements,d=2/(e-t),v=2/(n-s),_=-(e+t)/(e-t),S=-(n+s)/(n-s),b,I;if(h)b=1/(a-r),I=a/(a-r);else if(l===zi)b=-2/(a-r),I=-(a+r)/(a-r);else if(l===pa)b=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=_,u[1]=0,u[5]=v,u[9]=0,u[13]=S,u[2]=0,u[6]=0,u[10]=b,u[14]=I,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},jr=new Y,Ui=new We,K_=new Y(0,0,0),Q_=new Y(1,1,1),$s=new Y,jl=new Y,gi=new Y,nm=new We,im=new ns,As=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],h=s[1],u=s[5],d=s[9],v=s[2],_=s[6],S=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,S),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(_,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Pe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,S),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return im.setFromEuler(this),this.setFromQuaternion(im,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};As.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tx=0,sm=new Y,Kr=new ns,Ss=new We,Kl=new Y,ho=new Y,ex=new Y,nx=new ns,rm=new Y(1,0,0),am=new Y(0,1,0),om=new Y(0,0,1),lm={type:"added"},ix={type:"removed"},Qr={type:"childadded",child:null},sd={type:"childremoved",child:null},Fn=class i extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new As,n=new ns,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ce}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(rm,t)}rotateY(t){return this.rotateOnAxis(am,t)}rotateZ(t){return this.rotateOnAxis(om,t)}translateOnAxis(t,e){return sm.copy(t).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rm,t)}translateY(t){return this.translateOnAxis(am,t)}translateZ(t){return this.translateOnAxis(om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kl.copy(t):Kl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(ho,Kl,this.up):Ss.lookAt(Kl,ho,this.up),this.quaternion.setFromRotationMatrix(Ss),s&&(Ss.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(Ss),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lm),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):Se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ix),sd.child=t,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lm),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,ex),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,nx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){let v=h[u];r(t.shapes,v)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(r(t.materials,this.material[h]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];s.animations.push(r(t.animations,h))}}if(e){let l=a(t.geometries),h=a(t.materials),u=a(t.textures),d=a(t.images),v=a(t.shapes),_=a(t.skeletons),S=a(t.animations),b=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),S.length>0&&(n.animations=S),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(l){let h=[];for(let u in l){let d=l[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new Y(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let I of t.hand.values()){let x=e.getJointPose(I,n),m=this._getHandJoint(u,I);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let d=u.joints["index-finger-tip"],v=u.joints["thumb-tip"],_=d.position.distanceTo(v.position),S=.02,b=.005;u.inputState.pinching&&_>S+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&_<=S-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function rd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=He.workingColorSpace){return this.r=t,this.g=e,this.b=n,He.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=He.workingColorSpace){if(t=lf(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rd(a,r,t+1/3),this.g=rd(a,r,t),this.b=rd(a,r,t-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(t,e=xi){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ve("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xi){let n=x0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return He.workingToColorSpace(jn.copy(this),t),Math.round(Pe(jn.r*255,0,255))*65536+Math.round(Pe(jn.g*255,0,255))*256+Math.round(Pe(jn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.workingToColorSpace(jn.copy(this),e);let n=jn.r,s=jn.g,r=jn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),h,u,d=(l+a)/2;if(l===a)h=0,u=0;else{let v=a-l;switch(u=d<=.5?v/(a+l):v/(2-a-l),a){case n:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-n)/v+2;break;case r:h=(n-s)/v+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=He.workingColorSpace){return He.workingToColorSpace(jn.copy(this),e),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=xi){He.workingToColorSpace(jn.copy(this),t);let e=jn.r,n=jn.g,s=jn.b;return t!==xi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vs),this.setHSL(Vs.h+t,Vs.s+e,Vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vs),t.getHSL(Ql);let n=yo(Vs.h,Ql.h,e),s=yo(Vs.s,Ql.s,e),r=yo(Vs.l,Ql.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new xe;xe.NAMES=x0;var Ro=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fi=new Y,Ms=new Y,ad=new Y,bs=new Y,ta=new Y,ea=new Y,cm=new Y,od=new Y,ld=new Y,cd=new Y,hd=new an,ud=new an,dd=new an,Xs=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fi.subVectors(t,e),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fi.subVectors(s,e),Ms.subVectors(n,e),ad.subVectors(t,e);let a=Fi.dot(Fi),l=Fi.dot(Ms),h=Fi.dot(ad),u=Ms.dot(Ms),d=Ms.dot(ad),v=a*u-l*l;if(v===0)return r.set(0,0,0),null;let _=1/v,S=(u*h-l*d)*_,b=(a*d-l*h)*_;return r.set(1-S-b,b,S)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(t,e,n,s,r,a,l,h){return this.getBarycoord(t,e,n,s,bs)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,bs.x),h.addScaledVector(a,bs.y),h.addScaledVector(l,bs.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return hd.setScalar(0),ud.setScalar(0),dd.setScalar(0),hd.fromBufferAttribute(t,e),ud.fromBufferAttribute(t,n),dd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hd,r.x),a.addScaledVector(ud,r.y),a.addScaledVector(dd,r.z),a}static isFrontFacing(t,e,n,s){return Fi.subVectors(n,e),Ms.subVectors(t,e),Fi.cross(Ms).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Fi.cross(Ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ta.subVectors(s,n),ea.subVectors(r,n),od.subVectors(t,n);let h=ta.dot(od),u=ea.dot(od);if(h<=0&&u<=0)return e.copy(n);ld.subVectors(t,s);let d=ta.dot(ld),v=ea.dot(ld);if(d>=0&&v<=d)return e.copy(s);let _=h*v-d*u;if(_<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(ta,a);cd.subVectors(t,r);let S=ta.dot(cd),b=ea.dot(cd);if(b>=0&&S<=b)return e.copy(r);let I=S*u-h*b;if(I<=0&&u>=0&&b<=0)return l=u/(u-b),e.copy(n).addScaledVector(ea,l);let x=d*b-S*v;if(x<=0&&v-d>=0&&S-b>=0)return cm.subVectors(r,s),l=(v-d)/(v-d+(S-b)),e.copy(s).addScaledVector(cm,l);let m=1/(x+I+_);return a=I*m,l=_*m,e.copy(n).addScaledVector(ta,a).addScaledVector(ea,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uo),ec.subVectors(this.max,uo),na.subVectors(t.a,uo),ia.subVectors(t.b,uo),sa.subVectors(t.c,uo),Hs.subVectors(ia,na),Gs.subVectors(sa,ia),_r.subVectors(na,sa);let e=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-_r.z,_r.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,_r.z,0,-_r.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-_r.y,_r.x,0];return!fd(e,na,ia,sa,ec)||(e=[1,0,0,0,1,0,0,0,1],!fd(e,na,ia,sa,ec))?!1:(nc.crossVectors(Hs,Gs),e=[nc.x,nc.y,nc.z],fd(e,na,ia,sa,ec))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Oi=new Y,tc=new ii,na=new Y,ia=new Y,sa=new Y,Hs=new Y,Gs=new Y,_r=new Y,uo=new Y,ec=new Y,nc=new Y,xr=new Y;function fd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xr.fromArray(i,r);let l=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),h=t.dot(xr),u=e.dot(xr),d=n.dot(xr);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>l)return!1}return!0}var En=new Y,ic=new zt,rx=0,cn=class extends es{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ic.fromBufferAttribute(this,e),ic.applyMatrix3(t),this.setXY(e,ic.x,ic.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix3(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Po=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var vn=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ax=new ii,fo=new Y,pd=new Y,di=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ax.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fo.subVectors(t,this.center);let e=fo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fo.copy(t.center).add(pd)),this.expandByPoint(fo.copy(t.center).sub(pd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ox=0,Ei=new We,md=new Fn,ra=new Y,_i=new ii,po=new ii,Nn=new Y,yn=class i extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P_(t)?Po:Io)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return md.lookAt(t),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];po.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(_i.min,po.min),_i.expandByPoint(Nn),Nn.addVectors(_i.max,po.max),_i.expandByPoint(Nn)):(_i.expandByPoint(po.min),_i.expandByPoint(po.max))}_i.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Nn));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],h=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Nn.fromBufferAttribute(l,u),h&&(ra.fromBufferAttribute(t,u),Nn.add(ra)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],h=[];for(let A=0;A<n.count;A++)l[A]=new Y,h[A]=new Y;let u=new Y,d=new Y,v=new Y,_=new zt,S=new zt,b=new zt,I=new Y,x=new Y;function m(A,F,G){u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,G),_.fromBufferAttribute(r,A),S.fromBufferAttribute(r,F),b.fromBufferAttribute(r,G),d.sub(u),v.sub(u),S.sub(_),b.sub(_);let X=1/(S.x*b.y-b.x*S.y);isFinite(X)&&(I.copy(d).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(X),x.copy(v).multiplyScalar(S.x).addScaledVector(d,-b.x).multiplyScalar(X),l[A].add(I),l[F].add(I),l[G].add(I),h[A].add(x),h[F].add(x),h[G].add(x))}let k=this.groups;k.length===0&&(k=[{start:0,count:t.count}]);for(let A=0,F=k.length;A<F;++A){let G=k[A],X=G.start,st=G.count;for(let lt=X,J=X+st;lt<J;lt+=3)m(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}let $=new Y,R=new Y,T=new Y,O=new Y;function W(A){T.fromBufferAttribute(s,A),O.copy(T);let F=l[A];$.copy(F),$.sub(T.multiplyScalar(T.dot(F))).normalize(),R.crossVectors(O,F);let X=R.dot(h[A])<0?-1:1;a.setXYZW(A,$.x,$.y,$.z,X)}for(let A=0,F=k.length;A<F;++A){let G=k[A],X=G.start,st=G.count;for(let lt=X,J=X+st;lt<J;lt+=3)W(t.getX(lt+0)),W(t.getX(lt+1)),W(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,S=n.count;_<S;_++)n.setXYZ(_,0,0,0);let s=new Y,r=new Y,a=new Y,l=new Y,h=new Y,u=new Y,d=new Y,v=new Y;if(t)for(let _=0,S=t.count;_<S;_+=3){let b=t.getX(_+0),I=t.getX(_+1),x=t.getX(_+2);s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),l.add(d),h.add(d),u.add(d),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(I,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let _=0,S=e.count;_<S;_+=3)s.fromBufferAttribute(e,_+0),r.fromBufferAttribute(e,_+1),a.fromBufferAttribute(e,_+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(l,h){let u=l.array,d=l.itemSize,v=l.normalized,_=new u.constructor(h.length*d),S=0,b=0;for(let I=0,x=h.length;I<x;I++){l.isInterleavedBufferAttribute?S=h[I]*l.data.stride+l.offset:S=h[I]*d;for(let m=0;m<d;m++)_[b++]=u[S++]}return new cn(_,d,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let h=s[l],u=t(h,n);e.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,v=u.length;d<v;d++){let _=u[d],S=t(_,n);h.push(S)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],d=[];for(let v=0,_=u.length;v<_;v++){let S=u[v];d.push(S.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(e))}let r=t.morphAttributes;for(let u in r){let d=[],v=r[u];for(let _=0,S=v.length;_<S;_++)d.push(v[_].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,d=a.length;u<d;u++){let v=a[u];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ni=new Y,Vi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ki(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ki(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ki(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ki(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gd=new Y,lx=new Y,cx=new Ce,Bi=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gd.subVectors(n,e).cross(lx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cx.getNormalMatrix(t),s=this.coplanarPoint(gd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hx=0,is=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Aa,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ve(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let h=r[l];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Es=new Y,_d=new Y,sc=new Y,rc=new Y,br=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Es.copy(this.origin).addScaledVector(this.direction,e),Es.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_d.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),rc.copy(this.origin).sub(_d);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sc),l=rc.dot(this.direction),h=-rc.dot(sc),u=rc.lengthSq(),d=Math.abs(1-a*a),v,_,S,b;if(d>0)if(v=a*h-l,_=a*l-h,b=r*d,v>=0)if(_>=-b)if(_<=b){let I=1/d;v*=I,_*=I,S=v*(v+a*_+2*l)+_*(a*v+_+2*h)+u}else _=r,v=Math.max(0,-(a*_+l)),S=-v*v+_*(_+2*h)+u;else _=-r,v=Math.max(0,-(a*_+l)),S=-v*v+_*(_+2*h)+u;else _<=-b?(v=Math.max(0,-(-a*r+l)),_=v>0?-r:Math.min(Math.max(-r,-h),r),S=-v*v+_*(_+2*h)+u):_<=b?(v=0,_=Math.min(Math.max(-r,-h),r),S=_*(_+2*h)+u):(v=Math.max(0,-(a*r+l)),_=v>0?r:Math.min(Math.max(-r,-h),r),S=-v*v+_*(_+2*h)+u);else _=a>0?-r:r,v=Math.max(0,-(a*_+l)),S=-v*v+_*(_+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(_d).addScaledVector(sc,_),S}intersectSphere(t,e){if(t.radius<0)return null;Es.subVectors(t.center,this.origin);let n=Es.dot(this.direction),s=Es.dot(Es)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,h,u=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,_=this.origin;return u>=0?(n=(t.min.x-_.x)*u,s=(t.max.x-_.x)*u):(n=(t.max.x-_.x)*u,s=(t.min.x-_.x)*u),d>=0?(r=(t.min.y-_.y)*d,a=(t.max.y-_.y)*d):(r=(t.max.y-_.y)*d,a=(t.min.y-_.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-_.z)*v,h=(t.max.z-_.z)*v):(l=(t.max.z-_.z)*v,h=(t.min.z-_.z)*v),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Es)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,h=l.x,u=l.y,d=l.z,v=t.x-a.x,_=t.y-a.y,S=t.z-a.z,b=e.x-a.x,I=e.y-a.y,x=e.z-a.z,m=n.x-a.x,k=n.y-a.y,$=n.z-a.z,R=Math.abs(h),T=Math.abs(u),O=Math.abs(d),W,A,F,G,X,st,lt,J,tt,dt,pt,Tt;if(R>=T&&R>=O?(F=h,st=v,tt=b,Tt=m,h>=0?(W=u,A=d,G=_,X=S,lt=I,J=x,dt=k,pt=$):(W=d,A=u,G=S,X=_,lt=x,J=I,dt=$,pt=k)):T>=O?(F=u,st=_,tt=I,Tt=k,u>=0?(W=d,A=h,G=S,X=v,lt=x,J=b,dt=$,pt=m):(W=h,A=d,G=v,X=S,lt=b,J=x,dt=m,pt=$)):(F=d,st=S,tt=x,Tt=$,d>=0?(W=h,A=u,G=v,X=_,lt=b,J=I,dt=m,pt=k):(W=u,A=h,G=_,X=v,lt=I,J=b,dt=k,pt=m)),F===0)return null;let mt=W/F,wt=A/F,Mt=1/F,Gt=G-mt*st,te=X-wt*st,Xe=lt-mt*tt,Le=J-wt*tt,$e=dt-mt*Tt,xt=pt-wt*Tt,vt=$e*Le-xt*Xe,Dt=Gt*xt-te*$e,le=Xe*te-Le*Gt;if(s){if(vt<0||Dt<0||le<0)return null}else if((vt<0||Dt<0||le<0)&&(vt>0||Dt>0||le>0))return null;let jt=vt+Dt+le;if(jt===0)return null;let me=Mt*(vt*st+Dt*tt+le*Tt);return(jt>0?me<0:me>0)?null:this.at(me/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wr=class extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hm=new We,vr=new br,ac=new di,um=new Y,oc=new Y,lc=new Y,cc=new Y,xd=new Y,hc=new Y,dm=new Y,uc=new Y,On=class extends Fn{constructor(t=new yn,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){hc.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let d=l[h],v=r[h];d!==0&&(xd.fromBufferAttribute(v,t),a?hc.addScaledVector(xd,d):hc.addScaledVector(xd.sub(e),d))}e.add(hc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),vr.copy(t.ray).recast(t.near),!(ac.containsPoint(vr.origin)===!1&&(vr.intersectSphere(ac,um)===null||vr.origin.distanceToSquared(um)>(t.far-t.near)**2))&&(hm.copy(r).invert(),vr.copy(t.ray).applyMatrix4(hm),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,h=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,_=r.groups,S=r.drawRange;if(l!==null)if(Array.isArray(a))for(let b=0,I=_.length;b<I;b++){let x=_[b],m=a[x.materialIndex],k=Math.max(x.start,S.start),$=Math.min(l.count,Math.min(x.start+x.count,S.start+S.count));for(let R=k,T=$;R<T;R+=3){let O=l.getX(R),W=l.getX(R+1),A=l.getX(R+2);s=dc(this,m,t,n,u,d,v,O,W,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,S.start),I=Math.min(l.count,S.start+S.count);for(let x=b,m=I;x<m;x+=3){let k=l.getX(x),$=l.getX(x+1),R=l.getX(x+2);s=dc(this,a,t,n,u,d,v,k,$,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let b=0,I=_.length;b<I;b++){let x=_[b],m=a[x.materialIndex],k=Math.max(x.start,S.start),$=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let R=k,T=$;R<T;R+=3){let O=R,W=R+1,A=R+2;s=dc(this,m,t,n,u,d,v,O,W,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,S.start),I=Math.min(h.count,S.start+S.count);for(let x=b,m=I;x<m;x+=3){let k=x,$=x+1,R=x+2;s=dc(this,a,t,n,u,d,v,k,$,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function ux(i,t,e,n,s,r,a,l){let h;if(t.side===si?h=n.intersectTriangle(a,r,s,!0,l):h=n.intersectTriangle(s,r,a,t.side===Ks,l),h===null)return null;uc.copy(l),uc.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(uc);return u<e.near||u>e.far?null:{distance:u,point:uc.clone(),object:i}}function dc(i,t,e,n,s,r,a,l,h,u){i.getVertexPosition(l,oc),i.getVertexPosition(h,lc),i.getVertexPosition(u,cc);let d=ux(i,t,e,n,oc,lc,cc,dm);if(d){let v=new Y;Xs.getBarycoord(dm,oc,lc,cc,v),s&&(d.uv=Xs.getInterpolatedAttribute(s,l,h,u,v,new zt)),r&&(d.uv1=Xs.getInterpolatedAttribute(r,l,h,u,v,new zt)),a&&(d.normal=Xs.getInterpolatedAttribute(a,l,h,u,v,new Y),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let _={a:l,b:h,c:u,normal:new Y,materialIndex:0};Xs.getNormal(oc,lc,cc,_.normal),d.face=_,d.barycoord=v}return d}var Lo=class extends hi{constructor(t=null,e=1,n=1,s,r,a,l,h,u=Un,d=Un,v,_){super(null,a,l,h,u,d,s,r,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Do=class extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},aa=new We,fm=new We,fc=[],pm=new ii,dx=new We,mo=new On,go=new di,No=class extends On{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,aa),pm.copy(t.boundingBox).applyMatrix4(aa),this.boundingBox.union(pm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,aa),go.copy(t.boundingSphere).applyMatrix4(aa),this.boundingSphere.union(go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),t.ray.intersectsSphere(go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,aa),fm.multiplyMatrices(n,aa),mo.matrixWorld=fm,mo.raycast(t,fc);for(let a=0,l=fc.length;a<l;a++){let h=fc[a];h.instanceId=r,h.object=this,e.push(h)}fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lo(new Float32Array(s*this.count),s,this.count,yh,Ti));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=l,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yr=new di,fx=new zt(.5,.5),pc=new Y,ya=class{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],d=r[4],v=r[5],_=r[6],S=r[7],b=r[8],I=r[9],x=r[10],m=r[11],k=r[12],$=r[13],R=r[14],T=r[15];if(s[0].setComponents(u-a,S-d,m-b,T-k).normalize(),s[1].setComponents(u+a,S+d,m+b,T+k).normalize(),s[2].setComponents(u+l,S+v,m+I,T+$).normalize(),s[3].setComponents(u-l,S-v,m-I,T-$).normalize(),n)s[4].setComponents(h,_,x,R).normalize(),s[5].setComponents(u-h,S-_,m-x,T-R).normalize();else if(s[4].setComponents(u-h,S-_,m-x,T-R).normalize(),e===zi)s[5].setComponents(u+h,S+_,m+x,T+R).normalize();else if(e===pa)s[5].setComponents(h,_,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);let e=fx.distanceTo(t.center);return yr.radius=.7071067811865476+e,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pc.x=s.normal.x>0?t.max.x:t.min.x,pc.y=s.normal.y>0?t.max.y:t.min.y,pc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zc=new Y,$c=new Y,mm=new We,_o=new br,mc=new di,vd=new Y,gm=new Y,Vc=class extends Fn{constructor(t=new yn,e=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zc.fromBufferAttribute(e,s-1),$c.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zc.distanceTo($c);t.setAttribute("lineDistance",new vn(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,t.ray.intersectsSphere(mc)===!1)return;mm.copy(s).invert(),_o.copy(t.ray).applyMatrix4(mm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,d=n.index,_=n.attributes.position;if(d!==null){let S=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let I=S,x=b-1;I<x;I+=u){let m=d.getX(I),k=d.getX(I+1),$=gc(this,t,_o,h,m,k,I);$&&e.push($)}if(this.isLineLoop){let I=d.getX(b-1),x=d.getX(S),m=gc(this,t,_o,h,I,x,b-1);m&&e.push(m)}}else{let S=Math.max(0,a.start),b=Math.min(_.count,a.start+a.count);for(let I=S,x=b-1;I<x;I+=u){let m=gc(this,t,_o,h,I,I+1,I);m&&e.push(m)}if(this.isLineLoop){let I=gc(this,t,_o,h,b-1,S,b-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function gc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(zc.fromBufferAttribute(l,s),$c.fromBufferAttribute(l,r),e.distanceSqToSegment(zc,$c,vd,gm)>n)return;vd.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(vd);if(!(u<t.near||u>t.far))return{distance:u,point:gm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Uo=class extends Vc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Hc=class extends is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_m=new We,Id=new br,_c=new di,xc=new Y,Tr=class extends Fn{constructor(t=new yn,e=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,t.ray.intersectsSphere(_c)===!1)return;_m.copy(s).invert(),Id.copy(t.ray).applyMatrix4(_m);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,v=n.attributes.position;if(u!==null){let _=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let b=_,I=S;b<I;b++){let x=u.getX(b);xc.fromBufferAttribute(v,x),xm(xc,x,h,s,t,e,this)}}else{let _=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let b=_,I=S;b<I;b++)xc.fromBufferAttribute(v,b),xm(xc,b,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function xm(i,t,e,n,s,r,a){let l=Id.distanceSqToPoint(i);if(l<e){let h=new Y;Id.closestPointToPoint(i,h),h.applyMatrix4(n);let u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Fo=class extends hi{constructor(t=[],e=Qs,n,s,r,a,l,h,u,d){super(t,e,n,s,r,a,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var qs=class extends hi{constructor(t,e,n=Gi,s,r,a,l=Un,h=Un,u,d=ts,v=1){if(d!==ts&&d!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:v};super(_,s,r,a,l,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gc=class extends qs{constructor(t,e=Gi,n=Qs,s,r,a=Un,l=Un,h,u=ts){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,h,u),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Oo=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Sa=class i extends yn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],v=[],_=0,S=0;b("z","y","x",-1,-1,n,e,t,a,r,0),b("z","y","x",1,-1,n,e,-t,a,r,1),b("x","z","y",1,1,t,n,e,s,a,2),b("x","z","y",1,-1,t,n,-e,s,a,3),b("x","y","z",1,-1,t,e,n,s,r,4),b("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(v,2));function b(I,x,m,k,$,R,T,O,W,A,F){let G=R/W,X=T/A,st=R/2,lt=T/2,J=O/2,tt=W+1,dt=A+1,pt=0,Tt=0,mt=new Y;for(let wt=0;wt<dt;wt++){let Mt=wt*X-lt;for(let Gt=0;Gt<tt;Gt++){let te=Gt*G-st;mt[I]=te*k,mt[x]=Mt*$,mt[m]=J,u.push(mt.x,mt.y,mt.z),mt[I]=0,mt[x]=0,mt[m]=O>0?1:-1,d.push(mt.x,mt.y,mt.z),v.push(Gt/W),v.push(1-wt/A),pt+=1}}for(let wt=0;wt<A;wt++)for(let Mt=0;Mt<W;Mt++){let Gt=_+Mt+tt*wt,te=_+Mt+tt*(wt+1),Xe=_+(Mt+1)+tt*(wt+1),Le=_+(Mt+1)+tt*wt;h.push(Gt,te,Le),h.push(te,Xe,Le),Tt+=6}l.addGroup(S,Tt,F),S+=Tt,_+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bo=class i extends yn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],_=[],S=[],b=0,I=[],x=n/2,m=0;k(),a===!1&&(t>0&&$(!0),e>0&&$(!1)),this.setIndex(d),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(S,2));function k(){let R=new Y,T=new Y,O=0,W=(e-t)/n;for(let A=0;A<=r;A++){let F=[],G=A/r,X=G*(e-t)+t;for(let st=0;st<=s;st++){let lt=st/s,J=lt*h+l,tt=Math.sin(J),dt=Math.cos(J);T.x=X*tt,T.y=-G*n+x,T.z=X*dt,v.push(T.x,T.y,T.z),R.set(tt,W,dt).normalize(),_.push(R.x,R.y,R.z),S.push(lt,1-G),F.push(b++)}I.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let G=I[F][A],X=I[F+1][A],st=I[F+1][A+1],lt=I[F][A+1];(t>0||F!==0)&&(d.push(G,X,lt),O+=3),(e>0||F!==r-1)&&(d.push(X,st,lt),O+=3)}u.addGroup(m,O,0),m+=O}function $(R){let T=b,O=new zt,W=new Y,A=0,F=R===!0?t:e,G=R===!0?1:-1;for(let st=1;st<=s;st++)v.push(0,x*G,0),_.push(0,G,0),S.push(.5,.5),b++;let X=b;for(let st=0;st<=s;st++){let J=st/s*h+l,tt=Math.cos(J),dt=Math.sin(J);W.x=F*dt,W.y=x*G,W.z=F*tt,v.push(W.x,W.y,W.z),_.push(0,G,0),O.x=tt*.5+.5,O.y=dt*.5*G+.5,S.push(O.x,O.y),b++}for(let st=0;st<s;st++){let lt=T+st,J=X+st;R===!0?d.push(J,J+1,lt):d.push(J+1,J,lt),A+=3}u.addGroup(m,A,R===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,h=r-1,u;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),u=n[s]-a,u<0)l=s+1;else if(u>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let d=n[s],_=n[s+1]-d,S=(a-d)/_;return(s+S)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),h=e||(a.isVector2?new zt:new Y);return h.copy(l).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,s=[],r=[],a=[],l=new Y,h=new We;for(let S=0;S<=t;S++){let b=S/t;s[S]=this.getTangentAt(b,new Y)}r[0]=new Y,a[0]=new Y;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),v<=u&&(u=v,n.set(0,1,0)),_<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let S=1;S<=t;S++){if(r[S]=r[S-1].clone(),a[S]=a[S-1].clone(),l.crossVectors(s[S-1],s[S]),l.length()>Number.EPSILON){l.normalize();let b=Math.acos(Pe(s[S-1].dot(s[S]),-1,1));r[S].applyMatrix4(h.makeRotationAxis(l,b))}a[S].crossVectors(s[S],r[S])}if(e===!0){let S=Math.acos(Pe(r[0].dot(r[t]),-1,1));S/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(S=-S);for(let b=1;b<=t;b++)r[b].applyMatrix4(h.makeRotationAxis(s[b],S*b)),a[b].crossVectors(s[b],r[b])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ma=class extends vi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=h-this.aX,S=u-this.aY;h=_*d-S*v+this.aX,u=_*v+S*d+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wc=class extends Ma{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hf(){let i=0,t=0,e=0,n=0;function s(r,a,l,h){i=r,t=l,e=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,u){s(a,l,u*(l-r),u*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,u,d,v){let _=(a-r)/u-(l-r)/(u+d)+(l-a)/d,S=(l-a)/d-(h-a)/(d+v)+(h-l)/v;_*=d,S*=d,s(a,l,_,S)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var vm=new Y,ym=new Y,yd=new hf,Sd=new hf,Md=new hf,Xc=class extends vi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Y){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let u,d;this.closed||l>0?u=s[(l-1)%r]:(ym.subVectors(s[0],s[1]).add(s[0]),u=ym);let v=s[l%r],_=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(vm.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=vm),this.curveType==="centripetal"||this.curveType==="chordal"){let S=this.curveType==="chordal"?.5:.25,b=Math.pow(u.distanceToSquared(v),S),I=Math.pow(v.distanceToSquared(_),S),x=Math.pow(_.distanceToSquared(d),S);I<1e-4&&(I=1),b<1e-4&&(b=I),x<1e-4&&(x=I),yd.initNonuniformCatmullRom(u.x,v.x,_.x,d.x,b,I,x),Sd.initNonuniformCatmullRom(u.y,v.y,_.y,d.y,b,I,x),Md.initNonuniformCatmullRom(u.z,v.z,_.z,d.z,b,I,x)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(u.x,v.x,_.x,d.x,this.tension),Sd.initCatmullRom(u.y,v.y,_.y,d.y,this.tension),Md.initCatmullRom(u.z,v.z,_.z,d.z,this.tension));return n.set(yd.calc(h),Sd.calc(h),Md.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,h=i*l;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*l+r*i+e}function px(i,t){let e=1-i;return e*e*t}function mx(i,t){return 2*(1-i)*i*t}function gx(i,t){return i*i*t}function So(i,t,e,n){return px(i,t)+mx(i,e)+gx(i,n)}function _x(i,t){let e=1-i;return e*e*e*t}function xx(i,t){let e=1-i;return 3*e*e*i*t}function vx(i,t){return 3*(1-i)*i*i*t}function yx(i,t){return i*i*i*t}function Mo(i,t,e,n,s){return _x(i,t)+xx(i,e)+vx(i,n)+yx(i,s)}var ko=class extends vi{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Mo(t,s.x,r.x,a.x,l.x),Mo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qc=class extends vi{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Mo(t,s.x,r.x,a.x,l.x),Mo(t,s.y,r.y,a.y,l.y),Mo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zo=class extends vi{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends vi{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends vi{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(So(t,s.x,r.x,a.x),So(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends vi{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(So(t,s.x,r.x,a.x),So(t,s.y,r.y,a.y),So(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,h=s[a===0?a:a-1],u=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(Sm(l,h.x,u.x,d.x,v.x),Sm(l,h.y,u.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Pd=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:Xc,CubicBezierCurve:ko,CubicBezierCurve3:qc,EllipseCurve:Ma,LineCurve:zo,LineCurve3:Yc,QuadraticBezierCurve:$o,QuadraticBezierCurve3:Jc,SplineCurve:Vo}),Zc=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],h=l.getLength(),u=h===0?0:1-a/h;return l.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(l);for(let u=0;u<h.length;u++){let d=h[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pd[s.type]().fromJSON(s))}return this}},Ar=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zo(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $o(this.currentPoint.clone(),new zt(t,e),new zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new ko(this.currentPoint.clone(),new zt(t,e),new zt(n,s),new zt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+l,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,h){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,s,r,a,l,h),this}absellipse(t,e,n,s,r,a,l,h){let u=new Ma(t,e,n,s,r,a,l,h);if(this.curves.length>0){let v=u.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ba=class extends Ar{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ar().fromJSON(s))}return this}};function Sx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=v0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,u;if(n&&(r=Tx(i,t,r,e)),i.length>80*e){l=i[0],h=i[1];let d=l,v=h;for(let _=e;_<s;_+=e){let S=i[_],b=i[_+1];S<l&&(l=S),b<h&&(h=b),S>d&&(d=S),b>v&&(v=b)}u=Math.max(d-l,v-h),u=u!==0?32767/u:0}return Ho(r,a,e,l,h,u,0),a}function v0(i,t,e,n,s){let r;if(s===Ox(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Mm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Mm(a/n|0,i[a],i[a+1],r);return r&&wa(r,r.next)&&(Wo(r),r=r.next),r}function Cr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wa(e,e.next)||gn(e.prev,e,e.next)===0)){if(Wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ho(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Px(i,n,s,r);let l=i;for(;i.prev!==i.next;){let h=i.prev,u=i.next;if(r?bx(i,n,s,r):Mx(i)){t.push(h.i,i.i,u.i),Wo(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=wx(Cr(i),t),Ho(i,t,e,n,s,r,2)):a===2&&Ex(i,t,e,n,s,r):Ho(Cr(i),t,e,n,s,r,1);break}}}function Mx(i){let t=i.prev,e=i,n=i.next;if(gn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,h=e.y,u=n.y,d=Math.min(s,r,a),v=Math.min(l,h,u),_=Math.max(s,r,a),S=Math.max(l,h,u),b=n.next;for(;b!==t;){if(b.x>=d&&b.x<=_&&b.y>=v&&b.y<=S&&xo(s,l,r,h,a,u,b.x,b.y)&&gn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function bx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(gn(s,r,a)>=0)return!1;let l=s.x,h=r.x,u=a.x,d=s.y,v=r.y,_=a.y,S=Math.min(l,h,u),b=Math.min(d,v,_),I=Math.max(l,h,u),x=Math.max(d,v,_),m=Ld(S,b,t,e,n),k=Ld(I,x,t,e,n),$=i.prevZ,R=i.nextZ;for(;$&&$.z>=m&&R&&R.z<=k;){if($.x>=S&&$.x<=I&&$.y>=b&&$.y<=x&&$!==s&&$!==a&&xo(l,d,h,v,u,_,$.x,$.y)&&gn($.prev,$,$.next)>=0||($=$.prevZ,R.x>=S&&R.x<=I&&R.y>=b&&R.y<=x&&R!==s&&R!==a&&xo(l,d,h,v,u,_,R.x,R.y)&&gn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;$&&$.z>=m;){if($.x>=S&&$.x<=I&&$.y>=b&&$.y<=x&&$!==s&&$!==a&&xo(l,d,h,v,u,_,$.x,$.y)&&gn($.prev,$,$.next)>=0)return!1;$=$.prevZ}for(;R&&R.z<=k;){if(R.x>=S&&R.x<=I&&R.y>=b&&R.y<=x&&R!==s&&R!==a&&xo(l,d,h,v,u,_,R.x,R.y)&&gn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function wx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!wa(n,s)&&S0(n,e,e.next,s)&&Go(n,s)&&Go(s,n)&&(t.push(n.i,e.i,s.i),Wo(e),Wo(e.next),e=i=s),e=e.next}while(e!==i);return Cr(e)}function Ex(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Nx(a,l)){let h=M0(a,l);a=Cr(a,a.next),h=Cr(h,h.next),Ho(a,t,e,n,s,r,0),Ho(h,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function Tx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,h=r<a-1?t[r+1]*n:i.length,u=v0(i,l,h,n,!1);u===u.next&&(u.steiner=!0),s.push(Dx(u))}s.sort(Ax);for(let r=0;r<s.length;r++)e=Cx(s[r],e);return e}function Ax(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Cx(i,t){let e=Rx(i,t);if(!e)return t;let n=M0(e,i);return Cr(n,n.next),Cr(e,e.next)}function Rx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(wa(i,e))return e;do{if(wa(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,h=a.x,u=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&y0(s<u?n:r,s,h,u,s<u?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Go(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&Ix(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function Ix(i,t){return gn(i.prev,i,t.prev)<0&&gn(t.next,i,i.next)<0}function Px(i,t,e,n){let s=i;do s.z===0&&(s.z=Ld(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lx(s)}function Lx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let u=0;u<e&&(l++,a=a.nextZ,!!a);u++);let h=e;for(;l>0||h>0&&a;)l!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ld(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function y0(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function xo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&y0(i,t,e,n,s,r,a,l)}function Nx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ux(i,t)&&(Go(i,t)&&Go(t,i)&&Fx(i,t)&&(gn(i.prev,i,t.prev)||gn(i,t.prev,t))||wa(i,t)&&gn(i.prev,i,i.next)>0&&gn(t.prev,t,t.next)>0)}function gn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wa(i,t){return i.x===t.x&&i.y===t.y}function S0(i,t,e,n){let s=yc(gn(i,t,e)),r=yc(gn(i,t,n)),a=yc(gn(e,n,i)),l=yc(gn(e,n,t));return!!(s!==r&&a!==l||s===0&&vc(i,e,t)||r===0&&vc(i,n,t)||a===0&&vc(e,i,n)||l===0&&vc(e,t,n))}function vc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yc(i){return i>0?1:i<0?-1:0}function Ux(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&S0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Go(i,t){return gn(i.prev,i,i.next)<0?gn(i,t,i.next)>=0&&gn(i,i.prev,t)>=0:gn(i,t,i.prev)<0||gn(i,i.next,t)<0}function Fx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function M0(i,t){let e=Dd(i.i,i.x,i.y),n=Dd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mm(i,t,e,n){let s=Dd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ox(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Nd=class{static triangulate(t,e,n=2){return Sx(t,e,n)}},Sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bm(t),wm(n,t);let a=t.length;e.forEach(bm);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,wm(n,e[h]);let l=Nd.triangulate(n,s);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function bm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xo=class i extends yn{constructor(t=new ba([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];a(u)}this.setAttribute("position",new vn(s,3)),this.setAttribute("uv",new vn(r,2)),this.computeVertexNormals();function a(l){let h=[],u=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,_=e.bevelEnabled!==void 0?e.bevelEnabled:!0,S=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:S-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,k=e.UVGenerator!==void 0?e.UVGenerator:Bx,$,R=!1,T,O,W,A;if(m){$=m.getSpacedPoints(d),R=!0,_=!1;let it=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,it),O=new Y,W=new Y,A=new Y}_||(x=0,S=0,b=0,I=0);let F=l.extractPoints(u),G=F.shape,X=F.holes;if(!Sr.isClockWise(G)){G=G.reverse();for(let it=0,Ct=X.length;it<Ct;it++){let V=X[it];Sr.isClockWise(V)&&(X[it]=V.reverse())}}function lt(it){let V=10000000000000001e-36,Rt=it[0];for(let Bt=1;Bt<=it.length;Bt++){let oe=Bt%it.length,de=it[oe],ue=de.x-Rt.x,Ee=de.y-Rt.y,q=ue*ue+Ee*Ee,Ue=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(Rt.x),Math.abs(Rt.y)),De=V*Ue*Ue;if(q<=De){it.splice(oe,1),Bt--;continue}Rt=de}}lt(G),X.forEach(lt);let J=X.length,tt=G;for(let it=0;it<J;it++){let Ct=X[it];G=G.concat(Ct)}function dt(it,Ct,V){return Ct||Se("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Ct,V)}let pt=G.length;function Tt(it,Ct,V){let Rt,Bt,oe,de=it.x-Ct.x,ue=it.y-Ct.y,Ee=V.x-it.x,q=V.y-it.y,Ue=de*de+ue*ue,De=de*q-ue*Ee;if(Math.abs(De)>Number.EPSILON){let U=Math.sqrt(Ue),w=Math.sqrt(Ee*Ee+q*q),nt=Ct.x-ue/U,at=Ct.y+de/U,_t=V.x-q/w,It=V.y+Ee/w,kt=((_t-nt)*q-(It-at)*Ee)/(de*q-ue*Ee);Rt=nt+de*kt-it.x,Bt=at+ue*kt-it.y;let ft=Rt*Rt+Bt*Bt;if(ft<=2)return new zt(Rt,Bt);oe=Math.sqrt(ft/2)}else{let U=!1;de>Number.EPSILON?Ee>Number.EPSILON&&(U=!0):de<-Number.EPSILON?Ee<-Number.EPSILON&&(U=!0):Math.sign(ue)===Math.sign(q)&&(U=!0),U?(Rt=-ue,Bt=de,oe=Math.sqrt(Ue)):(Rt=de,Bt=ue,oe=Math.sqrt(Ue/2))}return new zt(Rt/oe,Bt/oe)}let mt=[];for(let it=0,Ct=tt.length,V=Ct-1,Rt=it+1;it<Ct;it++,V++,Rt++)V===Ct&&(V=0),Rt===Ct&&(Rt=0),mt[it]=Tt(tt[it],tt[V],tt[Rt]);let wt=[],Mt,Gt=mt.concat();for(let it=0,Ct=J;it<Ct;it++){let V=X[it];Mt=[];for(let Rt=0,Bt=V.length,oe=Bt-1,de=Rt+1;Rt<Bt;Rt++,oe++,de++)oe===Bt&&(oe=0),de===Bt&&(de=0),Mt[Rt]=Tt(V[Rt],V[oe],V[de]);wt.push(Mt),Gt=Gt.concat(Mt)}let te;if(x===0)te=Sr.triangulateShape(tt,X);else{let it=[],Ct=[];for(let V=0;V<x;V++){let Rt=V/x,Bt=S*Math.cos(Rt*Math.PI/2),oe=b*Math.sin(Rt*Math.PI/2)+I;for(let de=0,ue=tt.length;de<ue;de++){let Ee=dt(tt[de],mt[de],oe);Dt(Ee.x,Ee.y,-Bt),Rt===0&&it.push(Ee)}for(let de=0,ue=J;de<ue;de++){let Ee=X[de];Mt=wt[de];let q=[];for(let Ue=0,De=Ee.length;Ue<De;Ue++){let U=dt(Ee[Ue],Mt[Ue],oe);Dt(U.x,U.y,-Bt),Rt===0&&q.push(U)}Rt===0&&Ct.push(q)}}te=Sr.triangulateShape(it,Ct)}let Xe=te.length,Le=b+I;for(let it=0;it<pt;it++){let Ct=_?dt(G[it],Gt[it],Le):G[it];R?(W.copy(T.normals[0]).multiplyScalar(Ct.x),O.copy(T.binormals[0]).multiplyScalar(Ct.y),A.copy($[0]).add(W).add(O),Dt(A.x,A.y,A.z)):Dt(Ct.x,Ct.y,0)}for(let it=1;it<=d;it++)for(let Ct=0;Ct<pt;Ct++){let V=_?dt(G[Ct],Gt[Ct],Le):G[Ct];R?(W.copy(T.normals[it]).multiplyScalar(V.x),O.copy(T.binormals[it]).multiplyScalar(V.y),A.copy($[it]).add(W).add(O),Dt(A.x,A.y,A.z)):Dt(V.x,V.y,v/d*it)}for(let it=x-1;it>=0;it--){let Ct=it/x,V=S*Math.cos(Ct*Math.PI/2),Rt=b*Math.sin(Ct*Math.PI/2)+I;for(let Bt=0,oe=tt.length;Bt<oe;Bt++){let de=dt(tt[Bt],mt[Bt],Rt);Dt(de.x,de.y,v+V)}for(let Bt=0,oe=X.length;Bt<oe;Bt++){let de=X[Bt];Mt=wt[Bt];for(let ue=0,Ee=de.length;ue<Ee;ue++){let q=dt(de[ue],Mt[ue],Rt);R?Dt(q.x,q.y+$[d-1].y,$[d-1].x+V):Dt(q.x,q.y,v+V)}}}$e(),xt();function $e(){let it=s.length/3;if(_){let Ct=0,V=pt*Ct;for(let Rt=0;Rt<Xe;Rt++){let Bt=te[Rt];le(Bt[2]+V,Bt[1]+V,Bt[0]+V)}Ct=d+x*2,V=pt*Ct;for(let Rt=0;Rt<Xe;Rt++){let Bt=te[Rt];le(Bt[0]+V,Bt[1]+V,Bt[2]+V)}}else{for(let Ct=0;Ct<Xe;Ct++){let V=te[Ct];le(V[2],V[1],V[0])}for(let Ct=0;Ct<Xe;Ct++){let V=te[Ct];le(V[0]+pt*d,V[1]+pt*d,V[2]+pt*d)}}n.addGroup(it,s.length/3-it,0)}function xt(){let it=s.length/3,Ct=0;vt(tt,Ct),Ct+=tt.length;for(let V=0,Rt=X.length;V<Rt;V++){let Bt=X[V];vt(Bt,Ct),Ct+=Bt.length}n.addGroup(it,s.length/3-it,1)}function vt(it,Ct){let V=it.length;for(;--V>=0;){let Rt=V,Bt=V-1;Bt<0&&(Bt=it.length-1);for(let oe=0,de=d+x*2;oe<de;oe++){let ue=pt*oe,Ee=pt*(oe+1),q=Ct+Rt+ue,Ue=Ct+Bt+ue,De=Ct+Bt+Ee,U=Ct+Rt+Ee;jt(q,Ue,De,U)}}}function Dt(it,Ct,V){h.push(it),h.push(Ct),h.push(V)}function le(it,Ct,V){me(it),me(Ct),me(V);let Rt=s.length/3,Bt=k.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);ie(Bt[0]),ie(Bt[1]),ie(Bt[2])}function jt(it,Ct,V,Rt){me(it),me(Ct),me(Rt),me(Ct),me(V),me(Rt);let Bt=s.length/3,oe=k.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ie(oe[0]),ie(oe[1]),ie(oe[3]),ie(oe[1]),ie(oe[2]),ie(oe[3])}function me(it){s.push(h[it*3+0]),s.push(h[it*3+1]),s.push(h[it*3+2])}function ie(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pd[s.type]().fromJSON(s)),new i(n,t.options)}},Bx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],h=t[n*3+1],u=t[s*3],d=t[s*3+1];return[new zt(r,a),new zt(l,h),new zt(u,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],h=t[e*3+2],u=t[n*3],d=t[n*3+1],v=t[n*3+2],_=t[s*3],S=t[s*3+1],b=t[s*3+2],I=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-u)?[new zt(a,1-h),new zt(u,1-v),new zt(_,1-b),new zt(I,1-m)]:[new zt(l,1-h),new zt(d,1-v),new zt(S,1-b),new zt(x,1-m)]}};function kx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qo=class i extends yn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),h=Math.floor(s),u=l+1,d=h+1,v=t/l,_=e/h,S=[],b=[],I=[],x=[];for(let m=0;m<d;m++){let k=m*_-a;for(let $=0;$<u;$++){let R=$*v-r;b.push(R,-k,0),I.push(0,0,1),x.push($/l),x.push(1-m/h)}}for(let m=0;m<h;m++)for(let k=0;k<l;k++){let $=k+u*m,R=k+u*(m+1),T=k+1+u*(m+1),O=k+1+u*m;S.push($,R,O),S.push(R,T,O)}this.setIndex(S),this.setAttribute("position",new vn(b,3)),this.setAttribute("normal",new vn(I,3)),this.setAttribute("uv",new vn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Yo=class extends yn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Y,r=new Y;if(t.index!==null){let a=t.attributes.position,l=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,d=h.length;u<d;++u){let v=h[u],_=v.start,S=v.count;for(let b=_,I=_+S;b<I;b+=3)for(let x=0;x<3;x++){let m=l.getX(b+x),k=l.getX(b+(x+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,k),Em(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let u=0;u<3;u++){let d=3*l+u,v=3*l+(u+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),Em(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new vn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Em(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Pr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tm(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qn(i){let t={};for(let e=0;e<i.length;e++){let n=Pr(i[e]);for(let s in n)t[s]=n[s]}return t}function Tm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}var fl={clone:Pr,merge:Qn},$x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=zx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new an().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jc=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Jo=class extends is{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=fh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kc=class extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qc=class extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function oa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},th=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ad,endingEnd:Ad}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],h=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Cd:r=t,l=2*e-n;break;case Rd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Cd:a=t,h=2*n-e;break;case Rd:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(h-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,S=this._weightNext,b=(n-e)/(s-e),I=b*b,x=I*b,m=-_*x+2*_*I-_*b,k=(1+_)*x+(-1.5-2*_)*I+(-.5+_)*b+1,$=(-1-S)*x+(1.5+S)*I+.5*b,R=S*x-S*I;for(let T=0;T!==l;++T)r[T]=m*a[d+T]+k*a[u+T]+$*a[h+T]+R*a[v+T];return r}},eh=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=(n-e)/(s-e),v=1-d;for(let _=0;_!==l;++_)r[_]=a[u+_]*v+a[h+_]*d;return r}},nh=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ih=class extends Ys{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let b=(n-e)/(s-e),I=1-b;for(let x=0;x!==l;++x)r[x]=a[u+x]*I+a[h+x]*b;return r}let _=l*2,S=t-1;for(let b=0;b!==l;++b){let I=a[u+b],x=a[h+b],m=S*_+b*2,k=v[m],$=v[m+1],R=t*_+b*2,T=d[R],O=d[R+1],W=Gx(n,e,k,T,s);r[b]=b0(W,I,$,O,x)}return r}};function b0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Hx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Gx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=b0(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let h=Hx(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-l/h))}return r}var yi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oa(e,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oa(t.times,Array),values:oa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),bd(t.settings)&&(n.settings={inTangents:oa(t.settings.inTangents,Array),outTangents:oa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ih(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case bo:e=this.InterpolantFactoryMethodDiscrete;break;case Uc:e=this.InterpolantFactoryMethodLinear;break;case wc:e=this.InterpolantFactoryMethodSmooth;break;case Td:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return wc;case this.InterpolantFactoryMethodBezier:return Td}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;bd(this.settings)&&(Am(this.settings.inTangents,t),Am(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Se("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){Se("KeyframeTrack: Time is not a valid number.",this,l,h),t=!1;break}if(a!==null&&a>h){Se("KeyframeTrack: Out of order keys.",this,l,h,a),t=!1;break}a=h}if(s!==void 0&&L_(s))for(let l=0,h=s.length;l!==h;++l){let u=s[l];if(isNaN(u)){Se("KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wc,r=t.length-1,a=1;for(let l=1;l<r;++l){let h=!1,u=t[l],d=t[l+1];if(u!==d&&(l!==1||u!==t[0]))if(s)h=!0;else{let v=l*n,_=v-n,S=v+n;for(let b=0;b!==n;++b){let I=e[v+b];if(I!==e[_+b]||I!==e[S+b]){h=!0;break}}}if(h){if(l!==a){t[a]=t[l];let v=l*n,_=a*n;for(let S=0;S!==n;++S)e[_+S]=e[v+S]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,h=a*n,u=0;u!==n;++u)e[h+u]=e[l+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,bd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Am(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Uc;var Js=class extends yi{constructor(t,e,n){super(t,e,n)}};Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=bo;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};sh.prototype.ValueTypeName="color";var rh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};rh.prototype.ValueTypeName="number";var ah=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-e)/(s-e),u=t*l;for(let d=u+l;u!==d;u+=4)ns.slerpFlat(r,0,a,u-l,a,u,h);return r}},Zo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ah(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends yi{constructor(t,e,n){super(t,e,n)}};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=bo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};oh.prototype.ValueTypeName="vector";var lh=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,v){return u.push(d,v),this},this.removeHandler=function(d){let v=u.indexOf(d);return v!==-1&&u.splice(v,2),this},this.getHandler=function(d){for(let v=0,_=u.length;v<_;v+=2){let S=u[v],b=u[v+1];if(S.global&&(S.lastIndex=0),S.test(d))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},w0=new lh,ch=class{constructor(t){this.manager=t!==void 0?t:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var jo=class extends Fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ko=class extends jo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wd=new We,Cm=new Y,Rm=new Y,hh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cm),Rm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===pa||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),e.multiply(wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sc=new Y,Mc=new ns,ji=new Y,Qo=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sc,Mc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sc,Mc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ws=new Y,Im=new zt,Pm=new zt,Kn=class extends Qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z)}getViewSize(t,e){return this.getViewBounds(t,Im,Pm),e.subVectors(Pm,Im)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/u,s*=a.width/h,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ea=class extends Qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ud=class extends hh{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tl=class extends jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Ud}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var el=class extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var la=-90,ca=1,uh=class extends Fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(la,ca,t,e);s.layers=this.layers,this.add(s);let r=new Kn(la,ca,t,e);r.layers=this.layers,this.add(r);let a=new Kn(la,ca,t,e);a.layers=this.layers,this.add(a);let l=new Kn(la,ca,t,e);l.layers=this.layers,this.add(l);let h=new Kn(la,ca,t,e);h.layers=this.layers,this.add(h);let u=new Kn(la,ca,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,h]=e;for(let u of e)this.remove(u);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,h,u,d]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,_,S),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},dh=class extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var df="\\[\\]\\.:\\/",Wx=new RegExp("["+df+"]","g"),ff="[^"+df+"]",Xx="[^"+df.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",ff),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),jx=new RegExp("^"+qx+Yx+Jx+Zx+"$"),Kx=["material","materials","bones","map"],Fd=class{constructor(t,e,n){let s=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(t){let e=jx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let h=n(l.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){Se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){Se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;Se("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=Fd;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d1=new Float32Array(1);var js=class extends kc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Lm=new We,nl=class{constructor(t,e,n=0,s=1/0){this.ray=new br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lm),this}intersectObject(t,e=!0,n=[]){return Od(t,this,n,e),n.sort(Dm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Od(t[s],this,n,e);return n.sort(Dm),n}};function Dm(i,t){return i.distance-t.distance}function Od(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Od(r[a],t,e,!0)}}var Bd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Nm=new Y,bc=new Y,ha=new Y,ua=new Y,Ed=new Y,Qx=new Y,tv=new Y,il=class{constructor(t=new Y,e=new Y){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Nm.subVectors(t,this.start),bc.subVectors(this.end,this.start);let n=bc.dot(bc);if(n===0)return 0;let r=bc.dot(Nm)/n;return e&&(r=Pe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Qx,n=tv){let s=10000000000000001e-32,r,a,l=this.start,h=t.start,u=this.end,d=t.end;ha.subVectors(u,l),ua.subVectors(d,h),Ed.subVectors(l,h);let v=ha.dot(ha),_=ua.dot(ua),S=ua.dot(Ed);if(v<=s&&_<=s)return e.copy(l),n.copy(h),e.sub(n),e.dot(e);if(v<=s)r=0,a=S/_,a=Pe(a,0,1);else{let b=ha.dot(Ed);if(_<=s)a=0,r=Pe(-b/v,0,1);else{let I=ha.dot(ua),x=v*_-I*I;x!==0?r=Pe((I*S-b*_)/x,0,1):r=0,a=(I*r+S)/_,a<0?(a=0,r=Pe(-b/v,0,1)):a>1&&(a=1,r=Pe((I-b)/v,0,1))}}return e.copy(l).addScaledVector(ha,r),n.copy(h).addScaledVector(ua,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function pf(i,t,e,n){let s=ev(n);switch(e){case sf:return i*t;case yh:return i*t/s.components*s.byteLength;case Sh:return i*t/s.components*s.byteLength;case nr:return i*t*2/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case rf:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case ol:case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:case Ah:return Math.max(i,16)*Math.max(t,8)/4;case wh:case Th:return Math.max(i,8)*Math.max(t,8)/2;case Ch:case Rh:case Ph:case Lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ih:case ul:case Dh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yh:case Jh:case Zh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jh:case Kh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dl:case Qh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ev(i){switch(i){case fi:case Qd:return{byteLength:1,components:1};case Ca:case tf:case Wi:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case Gi:case _h:case Ti:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function X0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function iv(i){let t=new WeakMap;function e(l,h){let u=l.array,d=l.usage,v=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),l.onUploadCallback();let S;if(u instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)S=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)S=i.SHORT;else if(u instanceof Uint32Array)S=i.UNSIGNED_INT;else if(u instanceof Int32Array)S=i.INT;else if(u instanceof Int8Array)S=i.BYTE;else if(u instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:S,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,h,u){let d=h.array,v=h.updateRanges;if(i.bindBuffer(u,l),v.length===0)i.bufferSubData(u,0,d);else{v.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<v.length;S++){let b=v[_],I=v[S];I.start<=b.start+b.count+1?b.count=Math.max(b.count,I.start+I.count-b.start):(++_,v[_]=I)}v.length=_+1;for(let S=0,b=v.length;S<b;S++){let I=v[S];i.bufferSubData(u,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:s,remove:r,update:a}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
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
#endif`,fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
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
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zv=`#ifdef USE_ENVMAP
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
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
#endif`,ny=`uniform sampler2D dfgLUT;
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
}`,iy=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,Cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hy=`float getShadowMask() {
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`#include <common>
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
}`,uS=`#if DEPTH_PACKING == 3200
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
}`,dS=`#define DISTANCE
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
}`,fS=`#define DISTANCE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
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
}`,_S=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,vS=`uniform vec3 diffuse;
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
}`,yS=`#define LAMBERT
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
}`,SS=`#define LAMBERT
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
}`,MS=`#define MATCAP
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
}`,bS=`#define MATCAP
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
}`,wS=`#define NORMAL
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
}`,ES=`#define NORMAL
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
}`,TS=`#define PHONG
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
}`,AS=`#define PHONG
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
}`,CS=`#define STANDARD
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
}`,RS=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,PS=`#define TOON
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
}`,LS=`uniform float size;
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
}`,DS=`uniform vec3 diffuse;
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
}`,NS=`#include <common>
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
}`,US=`uniform vec3 color;
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
}`,FS=`uniform float rotation;
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
}`,OS=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:sv,alphahash_pars_fragment:rv,alphamap_fragment:av,alphamap_pars_fragment:ov,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:hv,aomap_pars_fragment:uv,batching_pars_vertex:dv,batching_vertex:fv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:xv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Mv,color_fragment:bv,color_pars_fragment:wv,color_pars_vertex:Ev,color_vertex:Tv,common:Av,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Pv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Dv,colorspace_fragment:Nv,colorspace_pars_fragment:Uv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Zv,envmap_vertex:zv,fog_vertex:$v,fog_pars_vertex:Vv,fog_fragment:Hv,fog_pars_fragment:Gv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:qv,lights_lambert_pars_fragment:Yv,lights_pars_begin:Jv,lights_toon_fragment:jv,lights_toon_pars_fragment:Kv,lights_phong_fragment:Qv,lights_phong_pars_fragment:ty,lights_physical_fragment:ey,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,lightprobes_pars_fragment:ay,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:hy,map_fragment:uy,map_pars_fragment:dy,map_particle_fragment:fy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:_y,morphcolor_vertex:xy,morphnormal_vertex:vy,morphtarget_pars_vertex:yy,morphtarget_vertex:Sy,normal_fragment_begin:My,normal_fragment_maps:by,normal_pars_fragment:wy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Cy,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Py,opaque_fragment:Ly,packing:Dy,premultiplied_alpha_fragment:Ny,project_vertex:Uy,dithering_fragment:Fy,dithering_pars_fragment:Oy,roughnessmap_fragment:By,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:$y,shadowmap_vertex:Vy,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:Jy,tonemapping_fragment:Zy,tonemapping_pars_fragment:jy,transmission_fragment:Ky,transmission_pars_fragment:Qy,uv_pars_fragment:tS,uv_pars_vertex:eS,uv_vertex:nS,worldpos_vertex:iS,background_vert:sS,background_frag:rS,backgroundCube_vert:aS,backgroundCube_frag:oS,cube_vert:lS,cube_frag:cS,depth_vert:hS,depth_frag:uS,distance_vert:dS,distance_frag:fS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:_S,meshbasic_vert:xS,meshbasic_frag:vS,meshlambert_vert:yS,meshlambert_frag:SS,meshmatcap_vert:MS,meshmatcap_frag:bS,meshnormal_vert:wS,meshnormal_frag:ES,meshphong_vert:TS,meshphong_frag:AS,meshphysical_vert:CS,meshphysical_frag:RS,meshtoon_vert:IS,meshtoon_frag:PS,points_vert:LS,points_frag:DS,shadow_vert:NS,shadow_frag:US,sprite_vert:FS,sprite_frag:OS},Ht={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},ri={basic:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qn([Ht.points,Ht.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qn([Ht.common,Ht.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qn([Ht.sprite,Ht.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Qn([Ht.lights,Ht.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ri.physical={uniforms:Qn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var iu={r:0,b:0,g:0},BS=new We,q0=new Ce;q0.set(-1,0,0,0,1,0,0,0,1);function kS(i,t,e,n,s,r){let a=new xe(0),l=s===!0?0:1,h,u,d=null,v=0,_=null;function S(k){let $=k.isScene===!0?k.background:null;if($&&$.isTexture){let R=k.backgroundBlurriness>0;$=t.get($,R)}return $}function b(k){let $=!1,R=S(k);R===null?x(a,l):R&&R.isColor&&(x(R,1),$=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||$)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(k,$){let R=S($);R&&(R.isCubeTexture||R.mapping===rl)?(u===void 0&&(u=new On(new Sa(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Pr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=R,u.material.uniforms.backgroundBlurriness.value=$.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=$.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BS.makeRotationFromEuler($.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(q0),u.material.toneMapped=He.getTransfer(R.colorSpace)!==rn,(d!==R||v!==R.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,v=R.version,_=i.toneMapping),u.layers.enableAll(),k.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new On(new qo(2,2),new Bn({name:"BackgroundMaterial",uniforms:Pr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=$.backgroundIntensity,h.material.toneMapped=He.getTransfer(R.colorSpace)!==rn,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,_=i.toneMapping),h.layers.enableAll(),k.unshift(h,h.geometry,h.material,0,0,null))}function x(k,$){k.getRGB(iu,uf(i)),e.buffers.color.setClear(iu.r,iu.g,iu.b,$,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(k,$=1){a.set(k),l=$,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(k){l=k,x(a,l)},render:b,addToRenderList:I,dispose:m}}function zS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=_(null),r=s,a=!1;function l(X,st,lt,J,tt){let dt=!1,pt=v(X,J,lt,st);r!==pt&&(r=pt,u(r.object)),dt=S(X,J,lt,tt),dt&&b(X,J,lt,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(dt||a)&&(a=!1,R(X,st,lt,J),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function h(){return i.createVertexArray()}function u(X){return i.bindVertexArray(X)}function d(X){return i.deleteVertexArray(X)}function v(X,st,lt,J){let tt=J.wireframe===!0,dt=n[st.id];dt===void 0&&(dt={},n[st.id]=dt);let pt=X.isInstancedMesh===!0?X.id:0,Tt=dt[pt];Tt===void 0&&(Tt={},dt[pt]=Tt);let mt=Tt[lt.id];mt===void 0&&(mt={},Tt[lt.id]=mt);let wt=mt[tt];return wt===void 0&&(wt=_(h()),mt[tt]=wt),wt}function _(X){let st=[],lt=[],J=[];for(let tt=0;tt<e;tt++)st[tt]=0,lt[tt]=0,J[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:lt,attributeDivisors:J,object:X,attributes:{},index:null}}function S(X,st,lt,J){let tt=r.attributes,dt=st.attributes,pt=0,Tt=lt.getAttributes();for(let mt in Tt)if(Tt[mt].location>=0){let Mt=tt[mt],Gt=dt[mt];if(Gt===void 0&&(mt==="instanceMatrix"&&X.instanceMatrix&&(Gt=X.instanceMatrix),mt==="instanceColor"&&X.instanceColor&&(Gt=X.instanceColor)),Mt===void 0||Mt.attribute!==Gt||Gt&&Mt.data!==Gt.data)return!0;pt++}return r.attributesNum!==pt||r.index!==J}function b(X,st,lt,J){let tt={},dt=st.attributes,pt=0,Tt=lt.getAttributes();for(let mt in Tt)if(Tt[mt].location>=0){let Mt=dt[mt];Mt===void 0&&(mt==="instanceMatrix"&&X.instanceMatrix&&(Mt=X.instanceMatrix),mt==="instanceColor"&&X.instanceColor&&(Mt=X.instanceColor));let Gt={};Gt.attribute=Mt,Mt&&Mt.data&&(Gt.data=Mt.data),tt[mt]=Gt,pt++}r.attributes=tt,r.attributesNum=pt,r.index=J}function I(){let X=r.newAttributes;for(let st=0,lt=X.length;st<lt;st++)X[st]=0}function x(X){m(X,0)}function m(X,st){let lt=r.newAttributes,J=r.enabledAttributes,tt=r.attributeDivisors;lt[X]=1,J[X]===0&&(i.enableVertexAttribArray(X),J[X]=1),tt[X]!==st&&(i.vertexAttribDivisor(X,st),tt[X]=st)}function k(){let X=r.newAttributes,st=r.enabledAttributes;for(let lt=0,J=st.length;lt<J;lt++)st[lt]!==X[lt]&&(i.disableVertexAttribArray(lt),st[lt]=0)}function $(X,st,lt,J,tt,dt,pt){pt===!0?i.vertexAttribIPointer(X,st,lt,tt,dt):i.vertexAttribPointer(X,st,lt,J,tt,dt)}function R(X,st,lt,J){I();let tt=J.attributes,dt=lt.getAttributes(),pt=st.defaultAttributeValues;for(let Tt in dt){let mt=dt[Tt];if(mt.location>=0){let wt=tt[Tt];if(wt===void 0&&(Tt==="instanceMatrix"&&X.instanceMatrix&&(wt=X.instanceMatrix),Tt==="instanceColor"&&X.instanceColor&&(wt=X.instanceColor)),wt!==void 0){let Mt=wt.normalized,Gt=wt.itemSize,te=t.get(wt);if(te===void 0)continue;let Xe=te.buffer,Le=te.type,$e=te.bytesPerElement,xt=Le===i.INT||Le===i.UNSIGNED_INT||wt.gpuType===_h;if(wt.isInterleavedBufferAttribute){let vt=wt.data,Dt=vt.stride,le=wt.offset;if(vt.isInstancedInterleavedBuffer){for(let jt=0;jt<mt.locationSize;jt++)m(mt.location+jt,vt.meshPerAttribute);X.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let jt=0;jt<mt.locationSize;jt++)x(mt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let jt=0;jt<mt.locationSize;jt++)$(mt.location+jt,Gt/mt.locationSize,Le,Mt,Dt*$e,(le+Gt/mt.locationSize*jt)*$e,xt)}else{if(wt.isInstancedBufferAttribute){for(let vt=0;vt<mt.locationSize;vt++)m(mt.location+vt,wt.meshPerAttribute);X.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let vt=0;vt<mt.locationSize;vt++)x(mt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let vt=0;vt<mt.locationSize;vt++)$(mt.location+vt,Gt/mt.locationSize,Le,Mt,Gt*$e,Gt/mt.locationSize*vt*$e,xt)}}else if(pt!==void 0){let Mt=pt[Tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(mt.location,Mt);break;case 3:i.vertexAttrib3fv(mt.location,Mt);break;case 4:i.vertexAttrib4fv(mt.location,Mt);break;default:i.vertexAttrib1fv(mt.location,Mt)}}}}k()}function T(){F();for(let X in n){let st=n[X];for(let lt in st){let J=st[lt];for(let tt in J){let dt=J[tt];for(let pt in dt)d(dt[pt].object),delete dt[pt];delete J[tt]}}delete n[X]}}function O(X){if(n[X.id]===void 0)return;let st=n[X.id];for(let lt in st){let J=st[lt];for(let tt in J){let dt=J[tt];for(let pt in dt)d(dt[pt].object),delete dt[pt];delete J[tt]}}delete n[X.id]}function W(X){for(let st in n){let lt=n[st];for(let J in lt){let tt=lt[J];if(tt[X.id]===void 0)continue;let dt=tt[X.id];for(let pt in dt)d(dt[pt].object),delete dt[pt];delete tt[X.id]}}}function A(X){for(let st in n){let lt=n[st],J=X.isInstancedMesh===!0?X.id:0,tt=lt[J];if(tt!==void 0){for(let dt in tt){let pt=tt[dt];for(let Tt in pt)d(pt[Tt].object),delete pt[Tt];delete tt[dt]}delete lt[J],Object.keys(lt).length===0&&delete n[st]}}}function F(){G(),a=!0,r!==s&&(r=s,u(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:W,initAttributes:I,enableAttribute:x,disableUnusedAttributes:k}}function $S(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let _=0;for(let S=0;S<d;S++)_+=u[S];e.update(_,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function VS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let W=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(W){return!(W!==Ai&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(W){let A=W===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(W!==fi&&W!==Ti&&!A&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=h(u);d!==u&&(ve("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),k=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),$=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:b,maxTextureSize:I,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:k,maxVaryings:$,maxFragmentUniforms:R,maxSamples:T,samples:O}}function HS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bi,l=new Ce,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){let S=v.length!==0||_||n!==0||s;return s=_,n=v.length,S},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,_){e=d(v,_,0)},this.setState=function(v,_,S){let b=v.clippingPlanes,I=v.clipIntersection,x=v.clipShadows,m=i.get(v);if(!s||b===null||b.length===0||r&&!x)r?d(null):u();else{let k=r?0:n,$=k*4,R=m.clippingState||null;h.value=R,R=d(b,_,$,S);for(let T=0;T!==$;++T)R[T]=e[T];m.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=k}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,_,S,b){let I=v!==null?v.length:0,x=null;if(I!==0){if(x=h.value,b!==!0||x===null){let m=S+I*4,k=_.matrixWorldInverse;l.getNormalMatrix(k),(x===null||x.length<m)&&(x=new Float32Array(m));for(let $=0,R=S;$!==I;++$,R+=4)a.copy(v[$]).applyMatrix4(k,l),a.normal.toArray(x,R),x[R+3]=a.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,x}}var Pa=4,GS=6,WS=20,XS=256,pl=new Ea,E0=new xe,mf=null,gf=0,_f=0,xf=!1,qS=new Y,Lr=new Y,ru=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=qS}=r;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mf,gf,_f),this._renderer.xr.enabled=xf,t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Wi,format:Ai,colorSpace:wo,depthBuffer:!1},s=T0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=YS(r)),this._blurMaterial=ZS(r,t,e),this._ggxMaterial=JS(r,t,e)}return s}_compileMaterial(t){let e=new On(new yn,t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,n,s,r){let h=new Kn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(E0),v.toneMapping=Hi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Sa,new wr({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,x=I.material,m=!1,k=t.background;k?k.isColor&&(x.color.copy(k),t.background=null,m=!0):(x.color.copy(E0),m=!0);for(let $=0;$<6;$++){let R=$%3;R===0?(h.up.set(0,u[$],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[$],r.y,r.z)):R===1?(h.up.set(0,0,u[$]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[$],r.z)):(h.up.set(0,u[$],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[$]));let T=this._cubeSize;Ia(s,R*T,$>2?T:0,T,T),v.setRenderTarget(s),m&&v.render(I,h),v.render(t,h)}v.toneMapping=S,v.autoClear=_,t.background=k}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qs||t.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let h=this._cubeSize;Ia(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let h=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(u*u-d*d),_=u*1.25,S=v*_,{_lodMax:b}=this,I=this._sizeLods[n],x=3*I*(n>b-Pa?n-b+Pa:0),m=4*(this._cubeSize-I);h.envMap.value=t.texture,h.roughness.value=S,h.mipInt.value=b-e,Ia(r,x,m,3*I,2*I),s.setRenderTarget(r),s.render(l,pl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=b-n,Ia(t,x,m,3*I,2*I),s.setRenderTarget(t),s.render(l,pl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,h=this._lodMeshes[s];h.material=l;let u=l.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-Pa?s-this._lodMax+Pa:0),_=4*(this._cubeSize-d);Ia(e,v,_,3*d,2*d),a.setRenderTarget(e),a.render(h,pl)}};function YS(i){let t=[],e=[],n=i,s=i-Pa+1+GS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],v=6,_=6,S=3,b=new Float32Array(S*_*v),I=new Float32Array(S*_*v);for(let m=0;m<v;m++){let k=m%3*2/3-1,$=m>2?0:-1,R=[k,$,0,k+2/3,$,0,k+2/3,$+1,0,k,$,0,k+2/3,$+1,0,k,$+1,0];b.set(R,S*_*m);for(let T=0;T<_;T++){let O=d[T*2]*2-1,W=d[T*2+1]*2-1;m===0?Lr.set(1,W,O):m===1?Lr.set(-O,1,-W):m===2?Lr.set(-O,W,1):m===3?Lr.set(-1,W,-O):m===4?Lr.set(-O,-1,W):Lr.set(O,W,-1),Lr.toArray(I,(m*_+T)*S)}}let x=new yn;x.setAttribute("position",new cn(b,S)),x.setAttribute("outputDirection",new cn(I,S)),e.push(new On(x,null)),n>Pa&&n--}return{lodMeshes:e,sizeLods:t}}function T0(i,t,e){let n=new ui(i,t,e);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function JS(i,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function ZS(i,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:WS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function A0(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function C0(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var au=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sa(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:rs});r.uniforms.tEquirect.value=e;let a=new On(s,r),l=e.minFilter;return e.minFilter===tr&&(e.minFilter=Hn),new uh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function jS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(_,S=!1){return _==null?null:S?a(_):r(_)}function r(_){if(_&&_.isTexture){let S=_.mapping;if(S===ph||S===mh)if(t.has(_)){let b=t.get(_).texture;return l(b,_.mapping)}else{let b=_.image;if(b&&b.height>0){let I=new au(b.height);return I.fromEquirectangularTexture(i,_),t.set(_,I),_.addEventListener("dispose",u),l(I.texture,_.mapping)}else return null}}return _}function a(_){if(_&&_.isTexture){let S=_.mapping,b=S===ph||S===mh,I=S===Qs||S===Ir;if(b||I){let x=e.get(_),m=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==m)return n===null&&(n=new ru(i)),x=b?n.fromEquirectangular(_,x):n.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,e.set(_,x),x.texture;if(x!==void 0)return x.texture;{let k=_.image;return b&&k&&k.height>0||I&&k&&h(k)?(n===null&&(n=new ru(i)),x=b?n.fromEquirectangular(_):n.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,e.set(_,x),_.addEventListener("dispose",d),x.texture):null}}}return _}function l(_,S){return S===ph?_.mapping=Qs:S===mh&&(_.mapping=Ir),_}function h(_){let S=0,b=6;for(let I=0;I<b;I++)_[I]!==void 0&&S++;return S===b}function u(_){let S=_.target;S.removeEventListener("dispose",u);let b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function d(_){let S=_.target;S.removeEventListener("dispose",d);let b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function KS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Mr("WebGLRenderer: "+n+" extension not supported."),s}}}function QS(i,t,e,n){let s={},r=new WeakMap;function a(v){let _=v.target;_.index!==null&&t.remove(_.index);for(let b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",a),delete s[_.id];let S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(v,_){return s[_.id]===!0||(_.addEventListener("dispose",a),s[_.id]=!0,e.memory.geometries++),_}function h(v){let _=v.attributes;for(let S in _)t.update(_[S],i.ARRAY_BUFFER)}function u(v){let _=[],S=v.index,b=v.attributes.position,I=0;if(b===void 0)return;if(S!==null){let k=S.array;I=S.version;for(let $=0,R=k.length;$<R;$+=3){let T=k[$+0],O=k[$+1],W=k[$+2];_.push(T,O,O,W,W,T)}}else{let k=b.array;I=b.version;for(let $=0,R=k.length/3-1;$<R;$+=3){let T=$+0,O=$+1,W=$+2;_.push(T,O,O,W,W,T)}}let x=new(b.count>=65535?Po:Io)(_,1);x.version=I;let m=r.get(v);m&&t.remove(m),r.set(v,x)}function d(v){let _=r.get(v);if(_){let S=v.index;S!==null&&_.version<S.version&&u(v)}else u(v);return r.get(v)}return{get:l,update:h,getWireframeAttribute:d}}function tM(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function h(v,_){i.drawElements(n,_,r,v*a),e.update(_,n,1)}function u(v,_,S){S!==0&&(i.drawElementsInstanced(n,_,r,v*a,S),e.update(_,n,S))}function d(v,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,v,0,S);let I=0;for(let x=0;x<S;x++)I+=_[x];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function eM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nM(i,t,e){let n=new WeakMap,s=new an;function r(a,l,h){let u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,_=n.get(l);if(_===void 0||_.count!==v){let F=function(){W.dispose(),n.delete(l),l.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();let S=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],k=l.morphAttributes.color||[],$=0;S===!0&&($=1),b===!0&&($=2),I===!0&&($=3);let R=l.attributes.position.count*$,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*T*4*v),W=new Co(O,R,T,v);W.type=Ti,W.needsUpdate=!0;let A=$*4;for(let G=0;G<v;G++){let X=x[G],st=m[G],lt=k[G],J=R*T*4*G;for(let tt=0;tt<X.count;tt++){let dt=tt*A;S===!0&&(s.fromBufferAttribute(X,tt),O[J+dt+0]=s.x,O[J+dt+1]=s.y,O[J+dt+2]=s.z,O[J+dt+3]=0),b===!0&&(s.fromBufferAttribute(st,tt),O[J+dt+4]=s.x,O[J+dt+5]=s.y,O[J+dt+6]=s.z,O[J+dt+7]=0),I===!0&&(s.fromBufferAttribute(lt,tt),O[J+dt+8]=s.x,O[J+dt+9]=s.y,O[J+dt+10]=s.z,O[J+dt+11]=lt.itemSize===4?s.w:1)}}_={count:v,texture:W,size:new zt(R,T)},n.set(l,_),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let S=0;for(let I=0;I<u.length;I++)S+=u[I];let b=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:r}}function iM(i,t,e,n,s){let r=new WeakMap;function a(u){let d=s.render.frame,v=u.geometry,_=t.get(u,v);if(r.get(_)!==d&&(t.update(_),r.set(_,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let S=u.skeleton;r.get(S)!==d&&(S.update(),r.set(S,d))}return _}function l(){r=new WeakMap}function h(u){let d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var sM={[Wd]:"LINEAR_TONE_MAPPING",[Xd]:"REINHARD_TONE_MAPPING",[qd]:"CINEON_TONE_MAPPING",[Yd]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[jd]:"NEUTRAL_TONE_MAPPING",[Jd]:"CUSTOM_TONE_MAPPING"};function rM(i,t,e,n,s,r){let a=new ui(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,h=null,u=new yn;u.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new vn([0,2,0,0,2,0],2));let d=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new On(u,d),_=new Ea(-1,1,1,-1,0,1),S=null,b=null,I=!1,x,m=null,k=[],$=!1;this.setSize=function(R,T){a.setSize(R,T),l!==null&&l.setSize(R,T),h!==null&&h.setSize(R,T);for(let O=0;O<k.length;O++){let W=k[O];W.setSize&&W.setSize(R,T)}},this.setEffects=function(R){k=R,$=k.length>0&&k[0].isRenderPass===!0;let T=a.width,O=a.height;k.length>0&&l===null&&(l=new ui(T,O,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),h=new ui(T,O,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));for(let W=0;W<k.length;W++){let A=k[W];A.setSize&&A.setSize(T,O)}},this.begin=function(R,T){if(I||R.toneMapping===Hi&&k.length===0)return!1;if(m=T,T!==null){let O=T.width,W=T.height;(a.width!==O||a.height!==W)&&this.setSize(O,W)}return $===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=Hi,!0},this.hasRenderPass=function(){return $},this.end=function(R,T){R.toneMapping=x,I=!0;let O=a,W=l;for(let A=0;A<k.length;A++){let F=k[A];F.enabled!==!1&&(F.render(R,W,O,T),F.needsSwap!==!1&&(O=W,W=W===l?h:l))}if(S!==R.outputColorSpace||b!==R.toneMapping){S=R.outputColorSpace,b=R.toneMapping,d.defines={},He.getTransfer(S)===rn&&(d.defines.SRGB_TRANSFER="");let A=sM[b];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(m),R.render(v,_),m=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),h!==null&&h.dispose(),u.dispose(),d.dispose()}}var Y0=new hi,Sf=new qs(1,1),J0=new Co,Z0=new Bc,j0=new Fo,R0=[],I0=[],P0=new Float32Array(16),L0=new Float32Array(9),D0=new Float32Array(4);function Da(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=R0[s];if(r===void 0&&(r=new Float32Array(s),R0[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cu(i,t){let e=I0[t];e===void 0&&(e=new Int32Array(t),I0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function aM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function oM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;i.uniform2fv(this.addr,t),Rn(e,t)}}function lM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Cn(e,t))return;i.uniform3fv(this.addr,t),Rn(e,t)}}function cM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;i.uniform4fv(this.addr,t),Rn(e,t)}}function hM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;D0.set(n),i.uniformMatrix2fv(this.addr,!1,D0),Rn(e,n)}}function uM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;L0.set(n),i.uniformMatrix3fv(this.addr,!1,L0),Rn(e,n)}}function dM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;P0.set(n),i.uniformMatrix4fv(this.addr,!1,P0),Rn(e,n)}}function fM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;i.uniform2iv(this.addr,t),Rn(e,t)}}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Cn(e,t))return;i.uniform3iv(this.addr,t),Rn(e,t)}}function gM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;i.uniform4iv(this.addr,t),Rn(e,t)}}function _M(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;i.uniform2uiv(this.addr,t),Rn(e,t)}}function vM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Cn(e,t))return;i.uniform3uiv(this.addr,t),Rn(e,t)}}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;i.uniform4uiv(this.addr,t),Rn(e,t)}}function SM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=e.isReversedDepthBuffer()?nu:eu,r=Sf):r=Y0,e.setTexture2D(t||r,s)}function MM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Z0,s)}function bM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||j0,s)}function wM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||J0,s)}function EM(i){switch(i){case 5126:return aM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return wM}}function TM(i,t){i.uniform1fv(this.addr,t)}function AM(i,t){let e=Da(t,this.size,2);i.uniform2fv(this.addr,e)}function CM(i,t){let e=Da(t,this.size,3);i.uniform3fv(this.addr,e)}function RM(i,t){let e=Da(t,this.size,4);i.uniform4fv(this.addr,e)}function IM(i,t){let e=Da(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function PM(i,t){let e=Da(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function LM(i,t){let e=Da(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function DM(i,t){i.uniform1iv(this.addr,t)}function NM(i,t){i.uniform2iv(this.addr,t)}function UM(i,t){i.uniform3iv(this.addr,t)}function FM(i,t){i.uniform4iv(this.addr,t)}function OM(i,t){i.uniform1uiv(this.addr,t)}function BM(i,t){i.uniform2uiv(this.addr,t)}function kM(i,t){i.uniform3uiv(this.addr,t)}function zM(i,t){i.uniform4uiv(this.addr,t)}function $M(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sf:a=Y0;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function VM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Z0,r[a])}function HM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||j0,r[a])}function GM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||J0,r[a])}function WM(i){switch(i){case 5126:return TM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return IM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}var Mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=EM(e.type)}},bf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WM(e.type)}},wf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},vf=/(\w+)(\])?(\[|\.)?/g;function N0(i,t){i.seq.push(t),i.map[t.id]=t}function XM(i,t,e){let n=i.name,s=n.length;for(vf.lastIndex=0;;){let r=vf.exec(n),a=vf.lastIndex,l=r[1],h=r[2]==="]",u=r[3];if(h&&(l=l|0),u===void 0||u==="["&&a+2===s){N0(e,u===void 0?new Mf(l,i,t):new bf(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new wf(l),N0(e,v)),e=v}}}var La=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);XM(l,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function U0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var qM=37297,YM=0;function JM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var F0=new Ce;function ZM(i){He._getMatrix(F0,He.workingColorSpace,i);let t=`mat3( ${F0.elements.map(e=>e.toFixed(4))} )`;switch(He.getTransfer(i)){case Eo:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function O0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+JM(i.getShaderSource(t),l)}else return r}function jM(i,t){let e=ZM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var KM={[Wd]:"Linear",[Xd]:"Reinhard",[qd]:"Cineon",[Yd]:"ACESFilmic",[Zd]:"AgX",[jd]:"Neutral",[Jd]:"Custom"};function QM(i,t){let e=KM[t];return e===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var su=new Y;function tb(){He.getLuminanceCoefficients(su);let i=su.x.toFixed(4),t=su.y.toFixed(4),e=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function nb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ib(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function gl(i){return i!==""}function B0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(i){return i.replace(sb,ab)}var rb=new Map;function ab(i,t){let e=Be[t];if(e===void 0){let n=rb.get(t);if(n!==void 0)e=Be[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ef(e)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(i){return i.replace(ob,lb)}function lb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var cb={[sl]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function hb(i){return cb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ub={[Qs]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function db(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ub[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fb={[Ir]:"ENVMAP_MODE_REFRACTION"};function pb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mb={[fh]:"ENVMAP_BLENDING_MULTIPLY",[n0]:"ENVMAP_BLENDING_MIX",[i0]:"ENVMAP_BLENDING_ADD"};function gb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mb[i.combine]||"ENVMAP_BLENDING_NONE"}function _b(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,h=hb(e),u=db(e),d=pb(e),v=gb(e),_=_b(e),S=eb(e),b=nb(r),I=s.createProgram(),x,m,k=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(gl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(gl).join(`
`),m.length>0&&(m+=`
`)):(x=[$0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),m=[$0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Hi?QM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,jM("linearToOutputTexel",e.outputColorSpace),tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gl).join(`
`)),a=Ef(a),a=B0(a,e),a=k0(a,e),l=Ef(l),l=B0(l,e),l=k0(l,e),a=z0(a),l=z0(l),e.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let $=k+x+a,R=k+m+l,T=U0(s,s.VERTEX_SHADER,$),O=U0(s,s.FRAGMENT_SHADER,R);s.attachShader(I,T),s.attachShader(I,O),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function W(X){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(I)||"",lt=s.getShaderInfoLog(T)||"",J=s.getShaderInfoLog(O)||"",tt=st.trim(),dt=lt.trim(),pt=J.trim(),Tt=!0,mt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,T,O);else{let wt=O0(s,T,"vertex"),Mt=O0(s,O,"fragment");Se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+tt+`
`+wt+`
`+Mt)}else tt!==""?ve("WebGLProgram: Program Info Log:",tt):(dt===""||pt==="")&&(mt=!1);mt&&(X.diagnostics={runnable:Tt,programLog:tt,vertexShader:{log:dt,prefix:x},fragmentShader:{log:pt,prefix:m}})}s.deleteShader(T),s.deleteShader(O),A=new La(s,I),F=ib(s,I)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let F;this.getAttributes=function(){return F===void 0&&W(this),F};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(I,qM)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=YM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=T,this.fragmentShader=O,this}var vb=0,Tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Af(t),e.set(t,n)),n}},Af=class{constructor(t){this.id=vb++,this.code=t,this.usedTimes=0}};function yb(i){return i===nr||i===ul||i===dl}function Sb(i,t,e,n,s,r){let a=new xa,l=new Tf,h=new Set,u=[],d=new Map,v=n.logarithmicDepthBuffer,_=n.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return h.add(A),A===0?"uv":`uv${A}`}function I(A,F,G,X,st,lt){let J=X.fog,tt=st.geometry,dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Tt=t.get(A.envMap||dt,pt),mt=Tt&&Tt.mapping===rl?Tt.image.height:null,wt=S[A.type];A.precision!==null&&(_=n.getMaxPrecision(A.precision),_!==A.precision&&ve("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));let Mt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Gt=Mt!==void 0?Mt.length:0,te=0;tt.morphAttributes.position!==void 0&&(te=1),tt.morphAttributes.normal!==void 0&&(te=2),tt.morphAttributes.color!==void 0&&(te=3);let Xe,Le,$e,xt;if(wt){let Qe=ri[wt];Xe=Qe.vertexShader,Le=Qe.fragmentShader}else{Xe=A.vertexShader,Le=A.fragmentShader;let Qe=l.getVertexShaderStage(A),qe=l.getFragmentShaderStage(A);l.update(A,Qe,qe),$e=Qe.id,xt=qe.id}let vt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),le=st.isInstancedMesh===!0,jt=st.isBatchedMesh===!0,me=!!A.map,ie=!!A.matcap,it=!!Tt,Ct=!!A.aoMap,V=!!A.lightMap,Rt=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,oe=!!A.displacementMap,de=!!A.emissiveMap,ue=!!A.metalnessMap,Ee=!!A.roughnessMap,q=A.anisotropy>0,Ue=A.clearcoat>0,De=A.dispersion>0,U=A.retroreflectivity>0,w=A.iridescence>0,nt=A.sheen>0,at=A.transmission>0,_t=q&&!!A.anisotropyMap,It=Ue&&!!A.clearcoatMap,kt=Ue&&!!A.clearcoatNormalMap,ft=Ue&&!!A.clearcoatRoughnessMap,ht=w&&!!A.iridescenceMap,Wt=w&&!!A.iridescenceThicknessMap,ce=nt&&!!A.sheenColorMap,Yt=nt&&!!A.sheenRoughnessMap,$t=!!A.specularMap,ae=!!A.specularColorMap,fe=!!A.specularIntensityMap,Te=at&&!!A.transmissionMap,K=at&&!!A.thicknessMap,Xt=!!A.gradientMap,yt=!!A.alphaMap,Vt=A.alphaTest>0,Kt=!!A.alphaHash,Et=!!A.extensions,se=Hi;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(se=i.toneMapping);let ee={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:Xe,fragmentShader:Le,defines:A.defines,customVertexShaderID:$e,customFragmentShaderID:xt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:jt,batchingColor:jt&&st._colorsTexture!==null,instancing:le,instancingColor:le&&st.instanceColor!==null,instancingMorph:le&&st.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:me,matcap:ie,envMap:it,envMapMode:it&&Tt.mapping,envMapCubeUVHeight:mt,aoMap:Ct,lightMap:V,bumpMap:Rt,normalMap:Bt,displacementMap:oe,emissiveMap:de,normalMapObjectSpace:Bt&&A.normalMapType===a0,normalMapTangentSpace:Bt&&A.normalMapType===tu,packedNormalMap:Bt&&A.normalMapType===tu&&yb(A.normalMap.format),metalnessMap:ue,roughnessMap:Ee,anisotropy:q,anisotropyMap:_t,clearcoat:Ue,clearcoatMap:It,clearcoatNormalMap:kt,clearcoatRoughnessMap:ft,dispersion:De,retroreflection:U,iridescence:w,iridescenceMap:ht,iridescenceThicknessMap:Wt,sheen:nt,sheenColorMap:ce,sheenRoughnessMap:Yt,specularMap:$t,specularColorMap:ae,specularIntensityMap:fe,transmission:at,transmissionMap:Te,thicknessMap:K,gradientMap:Xt,opaque:A.transparent===!1&&A.blending===Aa&&A.alphaToCoverage===!1,alphaMap:yt,alphaTest:Vt,alphaHash:Kt,combine:A.combine,mapUv:me&&b(A.map.channel),aoMapUv:Ct&&b(A.aoMap.channel),lightMapUv:V&&b(A.lightMap.channel),bumpMapUv:Rt&&b(A.bumpMap.channel),normalMapUv:Bt&&b(A.normalMap.channel),displacementMapUv:oe&&b(A.displacementMap.channel),emissiveMapUv:de&&b(A.emissiveMap.channel),metalnessMapUv:ue&&b(A.metalnessMap.channel),roughnessMapUv:Ee&&b(A.roughnessMap.channel),anisotropyMapUv:_t&&b(A.anisotropyMap.channel),clearcoatMapUv:It&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:kt&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&b(A.sheenRoughnessMap.channel),specularMapUv:$t&&b(A.specularMap.channel),specularColorMapUv:ae&&b(A.specularColorMap.channel),specularIntensityMapUv:fe&&b(A.specularIntensityMap.channel),transmissionMapUv:Te&&b(A.transmissionMap.channel),thicknessMapUv:K&&b(A.thicknessMap.channel),alphaMapUv:yt&&b(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Bt||q),vertexNormals:!!tt.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!tt.attributes.uv&&(me||yt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||tt.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:te,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:me&&A.map.isVideoTexture===!0&&He.getTransfer(A.map.colorSpace)===rn,decodeVideoTextureEmissive:de&&A.emissiveMap.isVideoTexture===!0&&He.getTransfer(A.emissiveMap.colorSpace)===rn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ss,flipSided:A.side===si,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ee.vertexUv1s=h.has(1),ee.vertexUv2s=h.has(2),ee.vertexUv3s=h.has(3),h.clear(),ee}function x(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let G in A.defines)F.push(G),F.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(m(F,A),k(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function m(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function k(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function $(A){let F=S[A.type],G;if(F){let X=ri[F];G=fl.clone(X.uniforms)}else G=A.uniforms;return G}function R(A,F){let G=d.get(F);return G!==void 0?++G.usedTimes:(G=new xb(i,F,A,s),u.push(G),d.set(F,G)),G}function T(A){if(--A.usedTimes===0){let F=u.indexOf(A);u[F]=u[u.length-1],u.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function W(){l.dispose()}return{getParameters:I,getProgramCacheKey:x,getUniforms:$,acquireProgram:R,releaseProgram:T,releaseShaderCache:O,programs:u,dispose:W}}function Mb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,h){i.get(a)[l]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function bb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function H0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function l(_,S,b,I,x,m){let k=i[t];return k===void 0?(k={id:_.id,object:_,geometry:S,material:b,materialVariant:a(_),groupOrder:I,renderOrder:_.renderOrder,z:x,group:m},i[t]=k):(k.id=_.id,k.object=_,k.geometry=S,k.material=b,k.materialVariant=a(_),k.groupOrder=I,k.renderOrder=_.renderOrder,k.z=x,k.group=m),t++,k}function h(_,S,b,I,x,m,k){k.reversedDepth===!0&&(x=-x);let $=l(_,S,b,I,x,m);b.transmission>0?n.push($):b.transparent===!0?s.push($):e.push($)}function u(_,S,b,I,x,m){let k=l(_,S,b,I,x,m);b.transmission>0?n.unshift(k):b.transparent===!0?s.unshift(k):e.unshift(k)}function d(_,S){e.length>1&&e.sort(_||bb),n.length>1&&n.sort(S||V0),s.length>1&&s.sort(S||V0)}function v(){for(let _=t,S=i.length;_<S;_++){let b=i[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:v,sort:d}}function wb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new H0,i.set(n,[a])):s>=r.length?(a=new H0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new xe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function Tb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ab=0;function Cb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rb(i){let t=new Eb,e=Tb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Y);let s=new Y,r=new We,a=new We;function l(u){let d=0,v=0,_=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let S=0,b=0,I=0,x=0,m=0,k=0,$=0,R=0,T=0,O=0,W=0,A=0,F=0,G=0;u.sort(Cb);for(let st=0,lt=u.length;st<lt;st++){let J=u[st],tt=J.color,dt=J.intensity,pt=J.distance,Tt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===nr?Tt=J.shadow.map.texture:Tt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)d+=tt.r*dt,v+=tt.g*dt,_+=tt.b*dt;else if(J.isLightProbe){for(let mt=0;mt<9;mt++)n.probe[mt].addScaledVector(J.sh.coefficients[mt],dt);G++}else if(J.isSunLight){let mt=t.get(J);if(mt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let wt=J.shadow,Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[b]=Mt,n.sunShadowMap[b]=Tt;let Gt=wt.getViewportCount();for(let te=0;te<Gt;te++)n.sunShadowMatrix[I+te]=wt.getMatrix(te),n.sunShadowCascade[I+te]=wt._cascadeData[te];I+=Gt,b++}n.sun[S]=mt,S++}else if(J.isDirectionalLight){let mt=t.get(J);if(mt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let wt=J.shadow,Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,n.directionalShadow[x]=Mt,n.directionalShadowMap[x]=Tt,n.directionalShadowMatrix[x]=J.shadow.matrix,T++}n.directional[x]=mt,x++}else if(J.isSpotLight){let mt=t.get(J);mt.position.setFromMatrixPosition(J.matrixWorld),mt.color.copy(tt).multiplyScalar(dt),mt.distance=pt,mt.coneCos=Math.cos(J.angle),mt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),mt.decay=J.decay,n.spot[k]=mt;let wt=J.shadow;if(J.map&&(n.spotLightMap[A]=J.map,A++,wt.updateMatrices(J),J.castShadow&&F++),n.spotLightMatrix[k]=wt.matrix,J.castShadow){let Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,n.spotShadow[k]=Mt,n.spotShadowMap[k]=Tt,W++}k++}else if(J.isRectAreaLight){let mt=t.get(J);mt.color.copy(tt).multiplyScalar(dt),mt.halfWidth.set(J.width*.5,0,0),mt.halfHeight.set(0,J.height*.5,0),n.rectArea[$]=mt,$++}else if(J.isPointLight){let mt=t.get(J);if(mt.color.copy(J.color).multiplyScalar(J.intensity),mt.distance=J.distance,mt.decay=J.decay,J.castShadow){let wt=J.shadow,Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,Mt.shadowCameraNear=wt.camera.near,Mt.shadowCameraFar=wt.camera.far,n.pointShadow[m]=Mt,n.pointShadowMap[m]=Tt,n.pointShadowMatrix[m]=J.shadow.matrix,O++}n.point[m]=mt,m++}else if(J.isHemisphereLight){let mt=t.get(J);mt.skyColor.copy(J.color).multiplyScalar(dt),mt.groundColor.copy(J.groundColor).multiplyScalar(dt),n.hemi[R]=mt,R++}}$>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=_;let X=n.hash;(X.sunLength!==S||X.directionalLength!==x||X.pointLength!==m||X.spotLength!==k||X.rectAreaLength!==$||X.hemiLength!==R||X.numSunShadows!==b||X.numDirectionalShadows!==T||X.numPointShadows!==O||X.numSpotShadows!==W||X.numSpotMaps!==A||X.numLightProbes!==G)&&(n.sun.length=S,n.directional.length=x,n.spot.length=k,n.rectArea.length=$,n.point.length=m,n.hemi.length=R,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=W,n.spotShadowMap.length=W,n.spotLightMatrix.length=W+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=G,X.sunLength=S,X.directionalLength=x,X.pointLength=m,X.spotLength=k,X.rectAreaLength=$,X.hemiLength=R,X.numSunShadows=b,X.numDirectionalShadows=T,X.numPointShadows=O,X.numSpotShadows=W,X.numSpotMaps=A,X.numLightProbes=G,n.version=Ab++)}function h(u,d){let v=0,_=0,S=0,b=0,I=0,x=0,m=d.matrixWorldInverse;for(let k=0,$=u.length;k<$;k++){let R=u[k];if(R.isSunLight){let T=n.sun[v];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(m),v++}else if(R.isDirectionalLight){let T=n.directional[_];T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),_++}else if(R.isSpotLight){let T=n.spot[b];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),b++}else if(R.isRectAreaLight){let T=n.rectArea[I];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let T=n.point[S];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(m),S++}else if(R.isHemisphereLight){let T=n.hemi[x];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:l,setupView:h,state:n}}function G0(i){let t=new Rb(i),e=[],n=[],s=[];function r(_){v.camera=_,e.length=0,n.length=0,s.length=0}function a(_){e.push(_)}function l(_){n.push(_)}function h(_){s.push(_)}function u(){t.setup(e)}function d(_){t.setupView(e,_)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:h}}function Ib(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new G0(i),t.set(s,[l])):r>=a.length?(l=new G0(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`,Db=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Nb=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],W0=new We,ml=new Y,yf=new Y;function Ub(i,t,e){let n=new ya,s=new zt,r=new zt,a=new an,l=new Kc,h=new Qc,u={},d=e.maxTextureSize,v={[Ks]:si,[si]:Ks,[ss]:ss},_=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Pb,fragmentShader:Lb}),S=_.clone();S.defines.HORIZONTAL_PASS=1;let b=new yn;b.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new On(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let m=this.type;this.render=function(O,W,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===Om&&(ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sl);let F=i.getRenderTarget(),G=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),st=i.state;st.setBlending(rs),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let lt=m!==this.type;lt&&W.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(tt=>tt.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,tt=O.length;J<tt;J++){let dt=O[J],pt=dt.shadow;if(pt===void 0){ve("WebGLShadowMap:",dt,"has no shadow.");continue}if(pt.autoUpdate===!1&&pt.needsUpdate===!1)continue;s.copy(pt.mapSize);let Tt=pt.getFrameExtents();s.multiply(Tt),r.copy(pt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Tt.x),s.x=r.x*Tt.x,pt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Tt.y),s.y=r.y*Tt.y,pt.mapSize.y=r.y));let mt=i.state.buffers.depth.getReversed();if(pt.camera._reversedDepth=mt,pt.map===null||lt===!0){if(pt.map!==null&&(pt.map.depthTexture!==null&&(pt.map.depthTexture.dispose(),pt.map.depthTexture=null),pt.map.dispose()),this.type===Ta){if(dt.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}pt.map=new ui(s.x,s.y,{format:nr,type:Wi,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),pt.map.texture.name=dt.name+".shadowMap",pt.map.depthTexture=new qs(s.x,s.y,Ti),pt.map.depthTexture.name=dt.name+".shadowMapDepth",pt.map.depthTexture.format=ts,pt.map.depthTexture.compareFunction=null,pt.map.depthTexture.minFilter=Un,pt.map.depthTexture.magFilter=Un}else dt.isPointLight?(pt.map=new au(s.x),pt.map.depthTexture=new Gc(s.x,Gi)):(pt.map=new ui(s.x,s.y),pt.map.depthTexture=new qs(s.x,s.y,Gi)),pt.map.depthTexture.name=dt.name+".shadowMap",pt.map.depthTexture.format=ts,this.type===sl?(pt.map.depthTexture.compareFunction=mt?nu:eu,pt.map.depthTexture.minFilter=Hn,pt.map.depthTexture.magFilter=Hn):(pt.map.depthTexture.compareFunction=null,pt.map.depthTexture.minFilter=Un,pt.map.depthTexture.magFilter=Un);pt.camera.updateProjectionMatrix()}pt.map.isWebGLCubeRenderTarget!==!0&&(pt.map.width!==s.x||pt.map.height!==s.y)&&pt.map.setSize(s.x,s.y);let wt=pt.map.isWebGLCubeRenderTarget?6:pt.getViewportCount();dt.isPointLight!==!0&&pt.updateMatrices(dt,A);for(let Mt=0;Mt<wt;Mt++){let Gt=pt.getCamera(Mt);if(dt.isPointLight){let te=pt.camera,Xe=pt.matrix,Le=dt.distance||te.far;Le!==te.far&&(te.far=Le,te.updateProjectionMatrix()),ml.setFromMatrixPosition(dt.matrixWorld),te.position.copy(ml),yf.copy(te.position),yf.add(Db[Mt]),te.up.copy(Nb[Mt]),te.lookAt(yf),te.updateMatrixWorld(),Xe.makeTranslation(-ml.x,-ml.y,-ml.z),W0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),pt._frustum.setFromProjectionMatrix(W0,te.coordinateSystem,te.reversedDepth)}if(pt.map.isWebGLCubeRenderTarget)i.setRenderTarget(pt.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(pt.map),i.clear());let te=pt.getViewport(Mt);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),st.viewport(a)}n=pt.getFrustum(Mt),R(W,A,Gt,dt,this.type)}pt.isPointLightShadow!==!0&&this.type===Ta&&k(pt,A),pt.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(F,G,X)};function k(O,W){let A=t.update(I);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null?O.mapPass=new ui(s.x,s.y,{format:nr,type:Wi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value.set(O.map.width,O.map.height),_.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(W,null,A,_,I,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value.set(O.map.width,O.map.height),S.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(W,null,A,S,I,null)}function $(O,W,A,F){let G=null,X=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(X!==void 0)G=X;else if(G=A.isPointLight===!0?h:l,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let st=G.uuid,lt=W.uuid,J=u[st];J===void 0&&(J={},u[st]=J);let tt=J[lt];tt===void 0&&(tt=G.clone(),J[lt]=tt,W.addEventListener("dispose",T)),G=tt}if(G.visible=W.visible,G.wireframe=W.wireframe,F===Ta?G.side=W.shadowSide!==null?W.shadowSide:W.side:G.side=W.shadowSide!==null?W.shadowSide:v[W.side],G.alphaMap=W.alphaMap,G.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,G.map=W.map,G.clipShadows=W.clipShadows,G.clippingPlanes=W.clippingPlanes,G.clipIntersection=W.clipIntersection,G.displacementMap=W.displacementMap,G.displacementScale=W.displacementScale,G.displacementBias=W.displacementBias,G.wireframeLinewidth=W.wireframeLinewidth,G.linewidth=W.linewidth,A.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let st=i.properties.get(G);st.light=A}return G}function R(O,W,A,F,G){if(O.visible===!1)return;if(O.layers.test(W.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&G===Ta)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let lt=t.update(O),J=O.material;if(Array.isArray(J)){let tt=lt.groups;for(let dt=0,pt=tt.length;dt<pt;dt++){let Tt=tt[dt],mt=J[Tt.materialIndex];if(mt&&mt.visible){let wt=$(O,mt,F,G);O.onBeforeShadow(i,O,W,A,lt,wt,Tt),i.renderBufferDirect(A,null,lt,wt,O,Tt),O.onAfterShadow(i,O,W,A,lt,wt,Tt)}}}else if(J.visible){let tt=$(O,J,F,G);O.onBeforeShadow(i,O,W,A,lt,tt,null),i.renderBufferDirect(A,null,lt,tt,O,null),O.onAfterShadow(i,O,W,A,lt,tt,null)}}let st=O.children;for(let lt=0,J=st.length;lt<J;lt++)R(st[lt],W,A,F,G)}function T(O){O.target.removeEventListener("dispose",T);for(let A in u){let F=u[A],G=O.target.uuid;G in F&&(F[G].dispose(),delete F[G])}}}function Fb(i,t){function e(){let K=!1,Xt=new an,yt=null,Vt=new an(0,0,0,0);return{setMask:function(Kt){yt!==Kt&&!K&&(i.colorMask(Kt,Kt,Kt,Kt),yt=Kt)},setLocked:function(Kt){K=Kt},setClear:function(Kt,Et,se,ee,Qe){Qe===!0&&(Kt*=ee,Et*=ee,se*=ee),Xt.set(Kt,Et,se,ee),Vt.equals(Xt)===!1&&(i.clearColor(Kt,Et,se,ee),Vt.copy(Xt))},reset:function(){K=!1,yt=null,Vt.set(-1,0,0,0)}}}function n(){let K=!1,Xt=!1,yt=null,Vt=null,Kt=null;return{setReversed:function(Et){if(Xt!==Et){let se=t.get("EXT_clip_control");Et?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Xt=Et;let ee=Kt;Kt=null,this.setClear(ee)}},getReversed:function(){return Xt},setTest:function(Et){Et?vt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Et){yt!==Et&&!K&&(i.depthMask(Et),yt=Et)},setFunc:function(Et){if(Xt&&(Et=_0[Et]),Vt!==Et){switch(Et){case Tc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Vt=Et}},setLocked:function(Et){K=Et},setClear:function(Et){Kt!==Et&&(Kt=Et,Xt&&(Et=1-Et),i.clearDepth(Et))},reset:function(){K=!1,yt=null,Vt=null,Kt=null,Xt=!1}}}function s(){let K=!1,Xt=null,yt=null,Vt=null,Kt=null,Et=null,se=null,ee=null,Qe=null;return{setTest:function(qe){K||(qe?vt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(qe){Xt!==qe&&!K&&(i.stencilMask(qe),Xt=qe)},setFunc:function(qe,zn,oi){(yt!==qe||Vt!==zn||Kt!==oi)&&(i.stencilFunc(qe,zn,oi),yt=qe,Vt=zn,Kt=oi)},setOp:function(qe,zn,oi){(Et!==qe||se!==zn||ee!==oi)&&(i.stencilOp(qe,zn,oi),Et=qe,se=zn,ee=oi)},setLocked:function(qe){K=qe},setClear:function(qe){Qe!==qe&&(i.clearStencil(qe),Qe=qe)},reset:function(){K=!1,Xt=null,yt=null,Vt=null,Kt=null,Et=null,se=null,ee=null,Qe=null}}}let r=new e,a=new n,l=new s,h=new WeakMap,u=new WeakMap,d={},v={},_={},S=new WeakMap,b=[],I=null,x=!1,m=null,k=null,$=null,R=null,T=null,O=null,W=null,A=new xe(0,0,0),F=0,G=!1,X=null,st=null,lt=null,J=null,tt=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pt=!1,Tt=0,mt=i.getParameter(i.VERSION);mt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),pt=Tt>=1):mt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),pt=Tt>=2);let wt=null,Mt={},Gt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Xe=new an().fromArray(Gt),Le=new an().fromArray(te);function $e(K,Xt,yt,Vt){let Kt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(K,Et),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<yt;se++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Xt,0,i.RGBA,1,1,Vt,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(Xt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return Et}let xt={};xt[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(fa),Rt(!1),Bt(kd),vt(i.CULL_FACE),Ct(rs);function vt(K){d[K]!==!0&&(i.enable(K),d[K]=!0)}function Dt(K){d[K]!==!1&&(i.disable(K),d[K]=!1)}function le(K,Xt){return _[K]!==Xt?(i.bindFramebuffer(K,Xt),_[K]=Xt,K===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Xt),K===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Xt),!0):!1}function jt(K,Xt){let yt=b,Vt=!1;if(K){yt=S.get(Xt),yt===void 0&&(yt=[],S.set(Xt,yt));let Kt=K.textures;if(yt.length!==Kt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,se=Kt.length;Et<se;Et++)yt[Et]=i.COLOR_ATTACHMENT0+Et;yt.length=Kt.length,Vt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Vt=!0);Vt&&i.drawBuffers(yt)}function me(K){return I!==K?(i.useProgram(K),I=K,!0):!1}let ie={[Rr]:i.FUNC_ADD,[km]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};ie[$m]=i.MIN,ie[Vm]=i.MAX;let it={[Hm]:i.ZERO,[Gm]:i.ONE,[Wm]:i.SRC_COLOR,[Hd]:i.SRC_ALPHA,[jm]:i.SRC_ALPHA_SATURATE,[Jm]:i.DST_COLOR,[qm]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[Gd]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[Ym]:i.ONE_MINUS_DST_ALPHA,[Km]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[t0]:i.CONSTANT_ALPHA,[e0]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(K,Xt,yt,Vt,Kt,Et,se,ee,Qe,qe){if(K===rs){x===!0&&(Dt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),K!==Bm){if(K!==m||qe!==G){if((k!==Rr||T!==Rr)&&(i.blendEquation(i.FUNC_ADD),k=Rr,T=Rr),qe)switch(K){case Aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFunc(i.ONE,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Se("WebGLState: Invalid blending: ",K);break}else switch(K){case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $d:Se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vd:Se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Se("WebGLState: Invalid blending: ",K);break}$=null,R=null,O=null,W=null,A.set(0,0,0),F=0,m=K,G=qe}return}Kt=Kt||Xt,Et=Et||yt,se=se||Vt,(Xt!==k||Kt!==T)&&(i.blendEquationSeparate(ie[Xt],ie[Kt]),k=Xt,T=Kt),(yt!==$||Vt!==R||Et!==O||se!==W)&&(i.blendFuncSeparate(it[yt],it[Vt],it[Et],it[se]),$=yt,R=Vt,O=Et,W=se),(ee.equals(A)===!1||Qe!==F)&&(i.blendColor(ee.r,ee.g,ee.b,Qe),A.copy(ee),F=Qe),m=K,G=!1}function V(K,Xt){K.side===ss?Dt(i.CULL_FACE):vt(i.CULL_FACE);let yt=K.side===si;Xt&&(yt=!yt),Rt(yt),K.blending===Aa&&K.transparent===!1?Ct(rs):Ct(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let Vt=K.stencilWrite;l.setTest(Vt),Vt&&(l.setMask(K.stencilWriteMask),l.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),l.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),de(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(K){X!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),X=K)}function Bt(K){K!==Um?(vt(i.CULL_FACE),K!==st&&(K===kd?i.cullFace(i.BACK):K===Fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),st=K}function oe(K){K!==lt&&(pt&&i.lineWidth(K),lt=K)}function de(K,Xt,yt){K?(vt(i.POLYGON_OFFSET_FILL),(J!==Xt||tt!==yt)&&(J=Xt,tt=yt,a.getReversed()&&(Xt=-Xt),i.polygonOffset(Xt,yt))):Dt(i.POLYGON_OFFSET_FILL)}function ue(K){K?vt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function Ee(K){K===void 0&&(K=i.TEXTURE0+dt-1),wt!==K&&(i.activeTexture(K),wt=K)}function q(K,Xt,yt){yt===void 0&&(wt===null?yt=i.TEXTURE0+dt-1:yt=wt);let Vt=Mt[yt];Vt===void 0&&(Vt={type:void 0,texture:void 0},Mt[yt]=Vt),(Vt.type!==K||Vt.texture!==Xt)&&(wt!==yt&&(i.activeTexture(yt),wt=yt),i.bindTexture(K,Xt||xt[K]),Vt.type=K,Vt.texture=Xt)}function Ue(){let K=Mt[wt];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(K){Se("WebGLState:",K)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(K){Se("WebGLState:",K)}}function w(){try{i.texSubImage2D(...arguments)}catch(K){Se("WebGLState:",K)}}function nt(){try{i.texSubImage3D(...arguments)}catch(K){Se("WebGLState:",K)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Se("WebGLState:",K)}}function _t(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Se("WebGLState:",K)}}function It(){try{i.texStorage2D(...arguments)}catch(K){Se("WebGLState:",K)}}function kt(){try{i.texStorage3D(...arguments)}catch(K){Se("WebGLState:",K)}}function ft(){try{i.texImage2D(...arguments)}catch(K){Se("WebGLState:",K)}}function ht(){try{i.texImage3D(...arguments)}catch(K){Se("WebGLState:",K)}}function Wt(K){return v[K]!==void 0?v[K]:i.getParameter(K)}function ce(K,Xt){v[K]!==Xt&&(i.pixelStorei(K,Xt),v[K]=Xt)}function Yt(K){Xe.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Xe.copy(K))}function $t(K){Le.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Le.copy(K))}function ae(K,Xt){let yt=u.get(Xt);yt===void 0&&(yt=new WeakMap,u.set(Xt,yt));let Vt=yt.get(K);Vt===void 0&&(Vt=i.getUniformBlockIndex(Xt,K.name),yt.set(K,Vt))}function fe(K,Xt){let Vt=u.get(Xt).get(K);h.get(Xt)!==Vt&&(i.uniformBlockBinding(Xt,Vt,K.__bindingPointIndex),h.set(Xt,Vt))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},wt=null,Mt={},_={},S=new WeakMap,b=[],I=null,x=!1,m=null,k=null,$=null,R=null,T=null,O=null,W=null,A=new xe(0,0,0),F=0,G=!1,X=null,st=null,lt=null,J=null,tt=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Dt,bindFramebuffer:le,drawBuffers:jt,useProgram:me,setBlending:Ct,setMaterial:V,setFlipSided:Rt,setCullFace:Bt,setLineWidth:oe,setPolygonOffset:de,setScissorTest:ue,activeTexture:Ee,bindTexture:q,unbindTexture:Ue,compressedTexImage2D:De,compressedTexImage3D:U,texImage2D:ft,texImage3D:ht,pixelStorei:ce,getParameter:Wt,updateUBOMapping:ae,uniformBlockBinding:fe,texStorage2D:It,texStorage3D:kt,texSubImage2D:w,texSubImage3D:nt,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:Yt,viewport:$t,reset:Te}}function Ob(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,d=new WeakMap,v=new Set,_,S=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,w){return b?new OffscreenCanvas(U,w):To("canvas")}function x(U,w,nt){let at=1,_t=De(U);if((_t.width>nt||_t.height>nt)&&(at=nt/Math.max(_t.width,_t.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let It=Math.floor(at*_t.width),kt=Math.floor(at*_t.height);_===void 0&&(_=I(It,kt));let ft=w?I(It,kt):_;return ft.width=It,ft.height=kt,ft.getContext("2d").drawImage(U,0,0,It,kt),ve("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+It+"x"+kt+")."),ft}else return"data"in U&&ve("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),U;return U}function m(U){return U.generateMipmaps}function k(U){i.generateMipmap(U)}function $(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(U,w,nt,at,_t,It=!1){if(U!==null){if(i[U]!==void 0)return i[U];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let kt;at&&(kt=t.get("EXT_texture_norm16"),kt||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=w;if(w===i.RED&&(nt===i.FLOAT&&(ft=i.R32F),nt===i.HALF_FLOAT&&(ft=i.R16F),nt===i.UNSIGNED_BYTE&&(ft=i.R8),nt===i.UNSIGNED_SHORT&&kt&&(ft=kt.R16_EXT),nt===i.SHORT&&kt&&(ft=kt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.R8UI),nt===i.UNSIGNED_SHORT&&(ft=i.R16UI),nt===i.UNSIGNED_INT&&(ft=i.R32UI),nt===i.BYTE&&(ft=i.R8I),nt===i.SHORT&&(ft=i.R16I),nt===i.INT&&(ft=i.R32I)),w===i.RG&&(nt===i.FLOAT&&(ft=i.RG32F),nt===i.HALF_FLOAT&&(ft=i.RG16F),nt===i.UNSIGNED_BYTE&&(ft=i.RG8),nt===i.UNSIGNED_SHORT&&kt&&(ft=kt.RG16_EXT),nt===i.SHORT&&kt&&(ft=kt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RG8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RG16UI),nt===i.UNSIGNED_INT&&(ft=i.RG32UI),nt===i.BYTE&&(ft=i.RG8I),nt===i.SHORT&&(ft=i.RG16I),nt===i.INT&&(ft=i.RG32I)),w===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),nt===i.UNSIGNED_INT&&(ft=i.RGB32UI),nt===i.BYTE&&(ft=i.RGB8I),nt===i.SHORT&&(ft=i.RGB16I),nt===i.INT&&(ft=i.RGB32I)),w===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),nt===i.UNSIGNED_INT&&(ft=i.RGBA32UI),nt===i.BYTE&&(ft=i.RGBA8I),nt===i.SHORT&&(ft=i.RGBA16I),nt===i.INT&&(ft=i.RGBA32I)),w===i.RGB&&(nt===i.UNSIGNED_SHORT&&kt&&(ft=kt.RGB16_EXT),nt===i.SHORT&&kt&&(ft=kt.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),w===i.RGBA){let ht=It?Eo:He.getTransfer(_t);nt===i.FLOAT&&(ft=i.RGBA32F),nt===i.HALF_FLOAT&&(ft=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(ft=ht===rn?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&kt&&(ft=kt.RGBA16_EXT),nt===i.SHORT&&kt&&(ft=kt.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function T(U,w){let nt;return U?w===null||w===Gi||w===Ra?nt=i.DEPTH24_STENCIL8:w===Ti?nt=i.DEPTH32F_STENCIL8:w===Ca&&(nt=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===Ra?nt=i.DEPTH_COMPONENT24:w===Ti?nt=i.DEPTH_COMPONENT32F:w===Ca&&(nt=i.DEPTH_COMPONENT16),nt}function O(U,w){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Hn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function W(U){let w=U.target;w.removeEventListener("dispose",W),F(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&v.delete(w)}function A(U){let w=U.target;w.removeEventListener("dispose",A),X(w)}function F(U){let w=n.get(U);if(w.__webglInit===void 0)return;let nt=U.source,at=S.get(nt);if(at){let _t=at[w.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&G(U),Object.keys(at).length===0&&S.delete(nt)}n.remove(U)}function G(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let nt=U.source,at=S.get(nt);delete at[w.__cacheKey],a.memory.textures--}function X(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(w.__webglFramebuffer[at]))for(let _t=0;_t<w.__webglFramebuffer[at].length;_t++)i.deleteFramebuffer(w.__webglFramebuffer[at][_t]);else i.deleteFramebuffer(w.__webglFramebuffer[at]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[at])}else{if(Array.isArray(w.__webglFramebuffer))for(let at=0;at<w.__webglFramebuffer.length;at++)i.deleteFramebuffer(w.__webglFramebuffer[at]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let at=0;at<w.__webglColorRenderbuffer.length;at++)w.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[at]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let nt=U.textures;for(let at=0,_t=nt.length;at<_t;at++){let It=n.get(nt[at]);It.__webglTexture&&(i.deleteTexture(It.__webglTexture),a.memory.textures--),n.remove(nt[at])}n.remove(U)}let st=0;function lt(){st=0}function J(){return st}function tt(U){st=U}function dt(){let U=st;return U>=s.maxTextures&&ve("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,U}function pt(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function Tt(U,w){let nt=n.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){let at=U.image;if(at===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(nt,U,w);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+w)}function mt(U,w){let nt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){Dt(nt,U,w);return}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+w)}function wt(U,w){let nt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){Dt(nt,U,w);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+w)}function Mt(U,w){let nt=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&nt.__version!==U.version){le(nt,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+w)}let Gt={[Dc]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},te={[Un]:i.NEAREST,[s0]:i.NEAREST_MIPMAP_NEAREST,[al]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[gh]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},Xe={[l0]:i.NEVER,[f0]:i.ALWAYS,[c0]:i.LESS,[eu]:i.LEQUAL,[h0]:i.EQUAL,[nu]:i.GEQUAL,[u0]:i.GREATER,[d0]:i.NOTEQUAL};function Le(U,w){if(w.type===Ti&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Hn||w.magFilter===gh||w.magFilter===al||w.magFilter===tr||w.minFilter===Hn||w.minFilter===gh||w.minFilter===al||w.minFilter===tr)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Gt[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Gt[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Gt[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,te[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Xe[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==al&&w.minFilter!==tr||w.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $e(U,w){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",W));let at=w.source,_t=S.get(at);_t===void 0&&(_t={},S.set(at,_t));let It=pt(w);if(It!==U.__cacheKey){_t[It]===void 0&&(_t[It]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,nt=!0),_t[It].usedTimes++;let kt=_t[U.__cacheKey];kt!==void 0&&(_t[U.__cacheKey].usedTimes--,kt.usedTimes===0&&G(w)),U.__cacheKey=It,U.__webglTexture=_t[It].texture}return nt}function xt(U,w,nt){return Math.floor(Math.floor(U/nt)/w)}function vt(U,w,nt,at){let It=U.updateRanges;if(It.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,nt,at,w.data);else{It.sort((ce,Yt)=>ce.start-Yt.start);let kt=0;for(let ce=1;ce<It.length;ce++){let Yt=It[kt],$t=It[ce],ae=Yt.start+Yt.count,fe=xt($t.start,w.width,4),Te=xt(Yt.start,w.width,4);$t.start<=ae+1&&fe===Te&&xt($t.start+$t.count-1,w.width,4)===fe?Yt.count=Math.max(Yt.count,$t.start+$t.count-Yt.start):(++kt,It[kt]=$t)}It.length=kt+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ce=0,Yt=It.length;ce<Yt;ce++){let $t=It[ce],ae=Math.floor($t.start/4),fe=Math.ceil($t.count/4),Te=ae%w.width,K=Math.floor(ae/w.width),Xt=fe,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,Te,K,Xt,yt,nt,at,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Wt)}}function Dt(U,w,nt){let at=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=i.TEXTURE_3D);let _t=$e(U,w),It=w.source;e.bindTexture(at,U.__webglTexture,i.TEXTURE0+nt);let kt=n.get(It);if(It.version!==kt.__version||_t===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let yt=He.getPrimaries(He.workingColorSpace),Vt=w.colorSpace===Cs?null:He.getPrimaries(w.colorSpace),Kt=w.colorSpace===Cs||yt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ht=x(w.image,!1,s.maxTextureSize);ht=Ue(w,ht);let Wt=r.convert(w.format,w.colorSpace),ce=r.convert(w.type),Yt=R(w.internalFormat,Wt,ce,w.normalized,w.colorSpace,w.isVideoTexture);Le(at,w);let $t,ae=w.mipmaps,fe=w.isVideoTexture!==!0,Te=kt.__version===void 0||_t===!0,K=It.dataReady,Xt=O(w,ht);if(w.isDepthTexture)Yt=T(w.format===er,w.type),Te&&(fe?e.texStorage2D(i.TEXTURE_2D,1,Yt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Yt,ht.width,ht.height,0,Wt,ce,null));else if(w.isDataTexture)if(ae.length>0){fe&&Te&&e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ae[0].width,ae[0].height);for(let yt=0,Vt=ae.length;yt<Vt;yt++)$t=ae[yt],fe?K&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,$t.width,$t.height,Wt,ce,$t.data):e.texImage2D(i.TEXTURE_2D,yt,Yt,$t.width,$t.height,0,Wt,ce,$t.data);w.generateMipmaps=!1}else fe?(Te&&e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ht.width,ht.height),K&&vt(w,ht,Wt,ce)):e.texImage2D(i.TEXTURE_2D,0,Yt,ht.width,ht.height,0,Wt,ce,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Yt,ae[0].width,ae[0].height,ht.depth);for(let yt=0,Vt=ae.length;yt<Vt;yt++)if($t=ae[yt],w.format!==Ai)if(Wt!==null)if(fe){if(K)if(w.layerUpdates.size>0){let Kt=pf($t.width,$t.height,w.format,w.type);for(let Et of w.layerUpdates){let se=$t.data.subarray(Et*Kt/$t.data.BYTES_PER_ELEMENT,(Et+1)*Kt/$t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Et,$t.width,$t.height,1,Wt,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,$t.width,$t.height,ht.depth,Wt,$t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Yt,$t.width,$t.height,ht.depth,0,$t.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,$t.width,$t.height,ht.depth,Wt,ce,$t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,Yt,$t.width,$t.height,ht.depth,0,Wt,ce,$t.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{fe&&Te&&e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ae[0].width,ae[0].height);for(let yt=0,Vt=ae.length;yt<Vt;yt++)$t=ae[yt],w.format!==Ai?Wt!==null?fe?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,$t.width,$t.height,Wt,$t.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,Yt,$t.width,$t.height,0,$t.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?K&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,$t.width,$t.height,Wt,ce,$t.data):e.texImage2D(i.TEXTURE_2D,yt,Yt,$t.width,$t.height,0,Wt,ce,$t.data)}else if(w.isDataArrayTexture)if(fe){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Yt,ht.width,ht.height,ht.depth),K)if(w.layerUpdates.size>0){let yt=pf(ht.width,ht.height,w.format,w.type);for(let Vt of w.layerUpdates){let Kt=ht.data.subarray(Vt*yt/ht.data.BYTES_PER_ELEMENT,(Vt+1)*yt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Vt,ht.width,ht.height,1,Wt,ce,Kt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Wt,ce,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,ht.width,ht.height,ht.depth,0,Wt,ce,ht.data);else if(w.isData3DTexture)fe?(Te&&e.texStorage3D(i.TEXTURE_3D,Xt,Yt,ht.width,ht.height,ht.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Wt,ce,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,ht.width,ht.height,ht.depth,0,Wt,ce,ht.data);else if(w.isFramebufferTexture){if(Te)if(fe)e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ht.width,ht.height);else{let yt=ht.width,Vt=ht.height;for(let Kt=0;Kt<Xt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,Yt,yt,Vt,0,Wt,ce,null),yt>>=1,Vt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),ht.parentNode!==yt){yt.appendChild(ht),v.add(w),yt.onpaint=Vt=>{let Kt=Vt.changedElements;for(let Et of v)Kt.includes(Et.image)&&(Et.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Kt=i.RGBA,Et=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Et,se,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(fe&&Te){let yt=De(ae[0]);e.texStorage2D(i.TEXTURE_2D,Xt,Yt,yt.width,yt.height)}for(let yt=0,Vt=ae.length;yt<Vt;yt++)$t=ae[yt],fe?K&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Wt,ce,$t):e.texImage2D(i.TEXTURE_2D,yt,Yt,Wt,ce,$t);w.generateMipmaps=!1}else if(fe){if(Te){let yt=De(ht);e.texStorage2D(i.TEXTURE_2D,Xt,Yt,yt.width,yt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,ce,ht)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Wt,ce,ht);m(w)&&k(at),kt.__version=It.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function le(U,w,nt){if(w.image.length!==6)return;let at=$e(U,w),_t=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+nt);let It=n.get(_t);if(_t.version!==It.__version||at===!0){e.activeTexture(i.TEXTURE0+nt);let kt=He.getPrimaries(He.workingColorSpace),ft=w.colorSpace===Cs?null:He.getPrimaries(w.colorSpace),ht=w.colorSpace===Cs||kt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Wt=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let Et=0;Et<6;Et++)!Wt&&!ce?Yt[Et]=x(w.image[Et],!0,s.maxCubemapSize):Yt[Et]=ce?w.image[Et].image:w.image[Et],Yt[Et]=Ue(w,Yt[Et]);let $t=Yt[0],ae=r.convert(w.format,w.colorSpace),fe=r.convert(w.type),Te=R(w.internalFormat,ae,fe,w.normalized,w.colorSpace),K=w.isVideoTexture!==!0,Xt=It.__version===void 0||at===!0,yt=_t.dataReady,Vt=O(w,$t);Le(i.TEXTURE_CUBE_MAP,w);let Kt;if(Wt){K&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Te,$t.width,$t.height);for(let Et=0;Et<6;Et++){Kt=Yt[Et].mipmaps;for(let se=0;se<Kt.length;se++){let ee=Kt[se];w.format!==Ai?ae!==null?K?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se,0,0,ee.width,ee.height,ae,ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se,Te,ee.width,ee.height,0,ee.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se,0,0,ee.width,ee.height,ae,fe,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se,Te,ee.width,ee.height,0,ae,fe,ee.data)}}}else{if(Kt=w.mipmaps,K&&Xt){Kt.length>0&&Vt++;let Et=De(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Te,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(ce){K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Yt[Et].width,Yt[Et].height,ae,fe,Yt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Te,Yt[Et].width,Yt[Et].height,0,ae,fe,Yt[Et].data);for(let se=0;se<Kt.length;se++){let Qe=Kt[se].image[Et].image;K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se+1,0,0,Qe.width,Qe.height,ae,fe,Qe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se+1,Te,Qe.width,Qe.height,0,ae,fe,Qe.data)}}else{K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,fe,Yt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Te,ae,fe,Yt[Et]);for(let se=0;se<Kt.length;se++){let ee=Kt[se];K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se+1,0,0,ae,fe,ee.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,se+1,Te,ae,fe,ee.image[Et])}}}m(w)&&k(i.TEXTURE_CUBE_MAP),It.__version=_t.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function jt(U,w,nt,at,_t,It){let kt=r.convert(nt.format,nt.colorSpace),ft=r.convert(nt.type),ht=R(nt.internalFormat,kt,ft,nt.normalized,nt.colorSpace),Wt=n.get(w),ce=n.get(nt);if(ce.__renderTarget=w,!Wt.__hasExternalTextures){let Yt=Math.max(1,w.width>>It),$t=Math.max(1,w.height>>It);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,It,ht,Yt,$t,w.depth,0,kt,ft,null):e.texImage2D(_t,It,ht,Yt,$t,0,kt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ee(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,_t,ce.__webglTexture,0,ue(w)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,_t,ce.__webglTexture,It),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(U,w,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let at=w.depthTexture,_t=at&&at.isDepthTexture?at.type:null,It=T(w.stencilBuffer,_t),kt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),It,w.width,w.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),It,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,It,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,U)}else{let at=w.textures;for(let _t=0;_t<at.length;_t++){let It=at[_t],kt=r.convert(It.format,It.colorSpace),ft=r.convert(It.type),ht=R(It.internalFormat,kt,ft,It.normalized,It.colorSpace);Ee(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),ht,w.width,w.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),ht,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ht,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(U,w,nt){let at=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _t=n.get(w.depthTexture);if(_t.__renderTarget=w,(!_t.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),at){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,w.depthTexture.addEventListener("dispose",W)),_t.__webglTexture===void 0){_t.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Le(i.TEXTURE_CUBE_MAP,w.depthTexture);let Wt=r.convert(w.depthTexture.format),ce=r.convert(w.depthTexture.type),Yt;w.depthTexture.format===ts?Yt=i.DEPTH_COMPONENT24:w.depthTexture.format===er&&(Yt=i.DEPTH24_STENCIL8);for(let $t=0;$t<6;$t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Yt,w.width,w.height,0,Wt,ce,null)}}else Tt(w.depthTexture,0);let It=_t.__webglTexture,kt=ue(w),ft=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,ht=w.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ts)Ee(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ft,It,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ht,ft,It,0);else if(w.depthTexture.format===er)Ee(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ft,It,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ht,ft,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(U){let w=n.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let at=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),at){let _t=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,at.removeEventListener("dispose",_t)};at.addEventListener("dispose",_t),w.__depthDisposeCallback=_t}w.__boundDepthTexture=at}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(nt)for(let at=0;at<6;at++)ie(w.__webglFramebuffer[at],U,at);else{let at=U.texture.mipmaps;at&&at.length>0?ie(w.__webglFramebuffer[0],U,0):ie(w.__webglFramebuffer,U,0)}else if(nt){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]===void 0)w.__webglDepthbuffer[at]=i.createRenderbuffer(),me(w.__webglDepthbuffer[at],U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=w.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,It)}}else{let at=U.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),me(w.__webglDepthbuffer,U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,It)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(U,w,nt){let at=n.get(U);w!==void 0&&jt(at.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&it(U)}function V(U){let w=U.texture,nt=n.get(U),at=n.get(w);U.addEventListener("dispose",A);let _t=U.textures,It=U.isWebGLCubeRenderTarget===!0,kt=_t.length>1;if(kt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=w.version,a.memory.textures++),It){nt.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer[ft]=[];for(let ht=0;ht<w.mipmaps.length;ht++)nt.__webglFramebuffer[ft][ht]=i.createFramebuffer()}else nt.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)nt.__webglFramebuffer[ft]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(kt)for(let ft=0,ht=_t.length;ft<ht;ft++){let Wt=n.get(_t[ft]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Ee(U)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let ft=0;ft<_t.length;ft++){let ht=_t[ft];nt.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[ft]);let Wt=r.convert(ht.format,ht.colorSpace),ce=r.convert(ht.type),Yt=R(ht.internalFormat,Wt,ce,ht.normalized,ht.colorSpace,U.isXRRenderTarget===!0),$t=ue(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Yt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,nt.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),me(nt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(It){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Le(i.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)jt(nt.__webglFramebuffer[ft][ht],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ht);else jt(nt.__webglFramebuffer[ft],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(w)&&k(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let ft=0,ht=_t.length;ft<ht;ft++){let Wt=_t[ft],ce=n.get(Wt),Yt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Yt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Yt,ce.__webglTexture),Le(Yt,Wt),jt(nt.__webglFramebuffer,U,Wt,i.COLOR_ATTACHMENT0+ft,Yt,0),m(Wt)&&k(Yt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,at.__webglTexture),Le(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)jt(nt.__webglFramebuffer[ht],U,w,i.COLOR_ATTACHMENT0,ft,ht);else jt(nt.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,ft,0);m(w)&&k(ft),e.unbindTexture()}U.depthBuffer&&it(U)}function Rt(U){let w=U.textures;for(let nt=0,at=w.length;nt<at;nt++){let _t=w[nt];if(m(_t)){let It=$(U),kt=n.get(_t).__webglTexture;e.bindTexture(It,kt),k(It),e.unbindTexture()}}}let Bt=[],oe=[];function de(U){if(U.samples>0){if(Ee(U)===!1){let w=U.textures,nt=U.width,at=U.height,_t=i.COLOR_BUFFER_BIT,It=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(U),ft=w.length>1;if(ft)for(let Wt=0;Wt<w.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let ht=U.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Wt=0;Wt<w.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Wt]);let ce=n.get(w[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,nt,at,0,0,nt,at,_t,i.NEAREST),h===!0&&(Bt.length=0,oe.length=0,Bt.push(i.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Bt.push(It),oe.push(It),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Wt=0;Wt<w.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Wt]);let ce=n.get(w[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ue(U){return Math.min(s.maxSamples,U.samples)}function Ee(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function q(U){let w=a.render.frame;d.get(U)!==w&&(d.set(U,w),U.update())}function Ue(U,w){let nt=U.colorSpace,at=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==wo&&nt!==Cs&&(He.getTransfer(nt)===rn?(at!==Ai||_t!==fi)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Se("WebGLTextures: Unsupported texture color space:",nt)),w}function De(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=dt,this.resetTextureUnits=lt,this.getTextureUnits=J,this.setTextureUnits=tt,this.setTexture2D=Tt,this.setTexture2DArray=mt,this.setTexture3D=wt,this.setTextureCube=Mt,this.rebindTextures=Ct,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Bb(i,t){function e(n,s=Cs){let r,a=He.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qd)return i.BYTE;if(n===tf)return i.SHORT;if(n===Ca)return i.UNSIGNED_SHORT;if(n===_h)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===sf)return i.ALPHA;if(n===rf)return i.RGB;if(n===Ai)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===Sh)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===ol||n===ll||n===cl||n===hl)if(a===rn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===Eh||n===Th||n===Ah)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ih||n===Ph||n===Lh||n===ul||n===Dh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ch||n===Rh)return a===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ih)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ph)return r.COMPRESSED_R11_EAC;if(n===Lh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ul)return r.COMPRESSED_RG11_EAC;if(n===Dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===$h||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$h)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yh||n===Jh||n===Zh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yh)return a===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===Kh||n===dl||n===Qh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ra?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
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

}`,Cf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Bn({vertexShader:kb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new On(new qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rf=class extends es{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",h=1,u=null,d=null,v=null,_=null,S=null,b=null,I=typeof XRWebGLBinding<"u",x=new Cf,m={},k=e.getContextAttributes(),$=null,R=null,T=[],O=[],W=new zt,A=null,F=null,G=new Kn;G.viewport=new an;let X=new Kn;X.viewport=new an;let st=[G,X],lt=new dh,J=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xt){let vt=T[xt];return vt===void 0&&(vt=new va,T[xt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(xt){let vt=T[xt];return vt===void 0&&(vt=new va,T[xt]=vt),vt.getGripSpace()},this.getHand=function(xt){let vt=T[xt];return vt===void 0&&(vt=new va,T[xt]=vt),vt.getHandSpace()};function dt(xt){let vt=O.indexOf(xt.inputSource);if(vt===-1)return;let Dt=T[vt];Dt!==void 0&&(Dt.update(xt.inputSource,xt.frame,u||a),Dt.dispatchEvent({type:xt.type,data:xt.inputSource}))}function pt(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",pt),s.removeEventListener("inputsourceschange",Tt);for(let xt=0;xt<T.length;xt++){let vt=O[xt];vt!==null&&(O[xt]=null,T[xt].disconnect(vt))}J=null,tt=null,x.reset();for(let xt in m)delete m[xt];if(t.setRenderTarget($),S=null,_=null,v=null,s=null,R=null,$e.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(W.width,W.height,!1),F!==null){let xt=F.camera;xt.fov=F.fov,xt.zoom=F.zoom,xt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xt){r=xt,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xt){l=xt,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(xt){u=xt},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(xt){if(s=xt,s!==null){if($=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",pt),s.addEventListener("inputsourceschange",Tt),k.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(W),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,le=null,jt=null;k.depth&&(jt=k.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=k.stencil?er:ts,le=k.stencil?Ra:Gi);let me={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};v=this.getBinding(),_=v.createProjectionLayer(me),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),R=new ui(_.textureWidth,_.textureHeight,{format:Ai,type:fi,depthTexture:new qs(_.textureWidth,_.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:k.stencil,colorSpace:t.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let Dt={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:r};S=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new ui(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await s.requestReferenceSpace(l),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Tt(xt){for(let vt=0;vt<xt.removed.length;vt++){let Dt=xt.removed[vt],le=O.indexOf(Dt);le>=0&&(O[le]=null,T[le].disconnect(Dt))}for(let vt=0;vt<xt.added.length;vt++){let Dt=xt.added[vt],le=O.indexOf(Dt);if(le===-1){for(let me=0;me<T.length;me++)if(me>=O.length){O.push(Dt),le=me;break}else if(O[me]===null){O[me]=Dt,le=me;break}if(le===-1)break}let jt=T[le];jt&&jt.connect(Dt)}}let mt=new Y,wt=new Y;function Mt(xt,vt,Dt){mt.setFromMatrixPosition(vt.matrixWorld),wt.setFromMatrixPosition(Dt.matrixWorld);let le=mt.distanceTo(wt),jt=vt.projectionMatrix.elements,me=Dt.projectionMatrix.elements,ie=jt[14]/(jt[10]-1),it=jt[14]/(jt[10]+1),Ct=(jt[9]+1)/jt[5],V=(jt[9]-1)/jt[5],Rt=(jt[8]-1)/jt[0],Bt=(me[8]+1)/me[0],oe=ie*Rt,de=ie*Bt,ue=le/(-Rt+Bt),Ee=ue*-Rt;if(vt.matrixWorld.decompose(xt.position,xt.quaternion,xt.scale),xt.translateX(Ee),xt.translateZ(ue),xt.matrixWorld.compose(xt.position,xt.quaternion,xt.scale),xt.matrixWorldInverse.copy(xt.matrixWorld).invert(),jt[10]===-1)xt.projectionMatrix.copy(vt.projectionMatrix),xt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let q=ie+ue,Ue=it+ue,De=oe-Ee,U=de+(le-Ee),w=Ct*it/Ue*q,nt=V*it/Ue*q;xt.projectionMatrix.makePerspective(De,U,w,nt,q,Ue),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert()}}function Gt(xt,vt){vt===null?xt.matrixWorld.copy(xt.matrix):xt.matrixWorld.multiplyMatrices(vt.matrixWorld,xt.matrix),xt.matrixWorldInverse.copy(xt.matrixWorld).invert()}this.updateCamera=function(xt){if(s===null)return;let vt=xt.near,Dt=xt.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Dt=x.depthFar)),lt.near=X.near=G.near=vt,lt.far=X.far=G.far=Dt,(J!==lt.near||tt!==lt.far)&&(s.updateRenderState({depthNear:lt.near,depthFar:lt.far}),J=lt.near,tt=lt.far),lt.layers.mask=xt.layers.mask|6,G.layers.mask=lt.layers.mask&-5,X.layers.mask=lt.layers.mask&-3;let le=xt.parent,jt=lt.cameras;Gt(lt,le);for(let me=0;me<jt.length;me++)Gt(jt[me],le);jt.length===2?Mt(lt,G,X):lt.projectionMatrix.copy(G.projectionMatrix),F===null&&xt.isPerspectiveCamera&&(F={camera:xt,fov:xt.fov,zoom:xt.zoom}),te(xt,lt,le)};function te(xt,vt,Dt){Dt===null?xt.matrix.copy(vt.matrixWorld):(xt.matrix.copy(Dt.matrixWorld),xt.matrix.invert(),xt.matrix.multiply(vt.matrixWorld)),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.updateMatrixWorld(!0),xt.projectionMatrix.copy(vt.projectionMatrix),xt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),xt.isPerspectiveCamera&&(xt.fov=ga*2*Math.atan(1/xt.projectionMatrix.elements[5]),xt.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(xt){h=xt,_!==null&&(_.fixedFoveation=xt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=xt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(lt)},this.getCameraTexture=function(xt){return m[xt]};let Xe=null;function Le(xt,vt){if(d=vt.getViewerPose(u||a),b=vt,d!==null){let Dt=d.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let le=!1;Dt.length!==lt.cameras.length&&(lt.cameras.length=0,le=!0);for(let it=0;it<Dt.length;it++){let Ct=Dt[it],V=null;if(S!==null)V=S.getViewport(Ct);else{let Bt=v.getViewSubImage(_,Ct);V=Bt.viewport,it===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Rt=st[it];Rt===void 0&&(Rt=new Kn,Rt.layers.enable(it),Rt.viewport=new an,st[it]=Rt),Rt.matrix.fromArray(Ct.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ct.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(V.x,V.y,V.width,V.height),it===0&&(lt.matrix.copy(Rt.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),le===!0&&lt.cameras.push(Rt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let it=v.getDepthInformation(Dt[0]);it&&it.isValid&&it.texture&&x.init(it,s.renderState)}if(jt&&jt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let it=0;it<Dt.length;it++){let Ct=Dt[it].camera;if(Ct){let V=m[Ct];V||(V=new Oo,m[Ct]=V);let Rt=v.getCameraImage(Ct);V.sourceTexture=Rt}}}}for(let Dt=0;Dt<T.length;Dt++){let le=O[Dt],jt=T[Dt];le!==null&&jt!==void 0&&jt.update(le,vt,u||a)}Xe&&Xe(xt,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),b=null}let $e=new X0;$e.setAnimationLoop(Le),this.setAnimationLoop=function(xt){Xe=xt},this.dispose=function(){}}},$b=new We,K0=new Ce;K0.set(-1,0,0,0,1,0,0,0,1);function Vb(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,uf(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,k,$,R){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),v(x,m)):m.isMeshPhongMaterial?(r(x,m),d(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),_(x,m),m.isMeshPhysicalMaterial&&S(x,m,R)):m.isMeshMatcapMaterial?(r(x,m),b(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),I(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?h(x,m,k,$):m.isSpriteMaterial?u(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===si&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===si&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let k=t.get(m),$=k.envMap,R=k.envMapRotation;$&&(x.envMap.value=$,x.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(R)).transpose(),$.isCubeTexture&&$.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(K0),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function h(x,m,k,$){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*k,x.scale.value=$*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function _(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function S(x,m,k){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=k.texture,x.transmissionSamplerSize.value.set(k.width,k.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,m){m.matcap&&(x.matcap.value=m.matcap)}function I(x,m){let k=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(k.matrixWorld),x.nearDistance.value=k.shadow.camera.near,x.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,T){let O=T.program;n.uniformBlockBinding(R,O)}function u(R,T){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",k));let W=T.program;n.updateUBOMapping(R,W);let A=t.render.frame;r[R.id]!==A&&(_(R),r[R.id]=A)}function d(R){let T=v();R.__bindingPointIndex=T;let O=i.createBuffer(),W=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,W,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return Se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){let T=s[R.id],O=R.uniforms,W=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,F=O.length;A<F;A++){let G=O[A];if(Array.isArray(G))for(let X=0,st=G.length;X<st;X++)S(G[X],A,X,W);else S(G,A,0,W)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(R,T,O,W){if(I(R,T,O,W)===!0){let A=R.__offset,F=R.value;if(Array.isArray(F)){let G=0;for(let X=0;X<F.length;X++){let st=F[X],lt=m(st);b(st,R.__data,G),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(G+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function b(R,T,O){typeof R=="number"||typeof R=="boolean"?T[0]=R:R.isMatrix3?(T[0]=R.elements[0],T[1]=R.elements[1],T[2]=R.elements[2],T[3]=0,T[4]=R.elements[3],T[5]=R.elements[4],T[6]=R.elements[5],T[7]=0,T[8]=R.elements[6],T[9]=R.elements[7],T[10]=R.elements[8],T[11]=0):ArrayBuffer.isView(R)?T.set(new R.constructor(R.buffer,R.byteOffset,T.length)):R.toArray(T,O)}function I(R,T,O,W){let A=R.value,F=T+"_"+O;if(W[F]===void 0)return typeof A=="number"||typeof A=="boolean"?W[F]=A:ArrayBuffer.isView(A)?W[F]=A.slice():W[F]=A.clone(),!0;{let G=W[F];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return W[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(G.equals(A)===!1)return G.copy(A),!0}}return!1}function x(R){let T=R.uniforms,O=0,W=16;for(let F=0,G=T.length;F<G;F++){let X=Array.isArray(T[F])?T[F]:[T[F]];for(let st=0,lt=X.length;st<lt;st++){let J=X[st],tt=Array.isArray(J.value)?J.value:[J.value];for(let dt=0,pt=tt.length;dt<pt;dt++){let Tt=tt[dt],mt=m(Tt),wt=O%W,Mt=wt%mt.boundary,Gt=wt+Mt;O+=Mt,Gt!==0&&W-Gt<mt.storage&&(O+=W-Gt),J.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=mt.storage}}}let A=O%W;return A>0&&(O+=W-A),R.__size=O,R.__cache={},this}function m(R){let T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(T.boundary=16,T.storage=R.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",R),T}function k(R){let T=R.target;T.removeEventListener("dispose",k);let O=a.indexOf(T.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function $(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:h,update:u,dispose:$}}var Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),as=null;function Wb(){return as===null&&(as=new Lo(Gb,16,16,nr,Wi),as.name="DFG_LUT",as.minFilter=Hn,as.magFilter=Hn,as.wrapS=Ki,as.wrapT=Ki,as.generateMipmaps=!1,as.needsUpdate=!0),as}var ou=class{constructor(t={}){let{canvas:e=p0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:S=fi}=t;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let I=S,x=new Set([bh,Mh,Sh]),m=new Set([fi,Gi,Ca,Ra,xh,vh]),k=new Uint32Array(4),$=new Int32Array(4),R=new Y,T=null,O=null,W=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,X=!1,st=null,lt=null,J=null,tt=null;this._outputColorSpace=xi;let dt=0,pt=0,Tt=null,mt=-1,wt=null,Mt=new an,Gt=new an,te=null,Xe=new xe(0),Le=0,$e=e.width,xt=e.height,vt=1,Dt=null,le=null,jt=new an(0,0,$e,xt),me=new an(0,0,$e,xt),ie=!1,it=new ya,Ct=!1,V=!1,Rt=new We,Bt=new Y,oe=new an,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ee(){return Tt===null?vt:1}let q=n;function Ue(C,Z){return e.getContext(C,Z)}let De,U,w,nt,at,_t,It,kt,ft,ht,Wt,ce,Yt,$t,ae,fe,Te,K,Xt,yt,Vt,Kt,Et;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Qe,!1),e.addEventListener("webglcontextrestored",qe,!1),e.addEventListener("webglcontextcreationerror",zn,!1),q===null){let Z="webgl2";if(q=Ue(Z,C),q===null)throw Ue(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(C){throw e.removeEventListener("webglcontextlost",Qe,!1),e.removeEventListener("webglcontextrestored",qe,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Se("WebGLRenderer: "+C.message),C}function se(){De=new KS(q),De.init(),Vt=new Bb(q,De),U=new VS(q,De,t,Vt),w=new Fb(q,De),U.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),lt=q.createFramebuffer(),J=q.createFramebuffer(),tt=q.createFramebuffer(),nt=new eM(q),at=new Mb,_t=new Ob(q,De,w,at,U,Vt,nt),It=new jS(G),kt=new iv(q),Kt=new zS(q,kt),ft=new QS(q,kt,nt,Kt),ht=new iM(q,ft,kt,Kt,nt),K=new nM(q,U,_t),ae=new HS(at),Wt=new Sb(G,It,De,U,Kt,ae),ce=new Vb(G,at),Yt=new wb,$t=new Ib(De),Te=new kS(G,It,w,ht,b,h),fe=new Ub(G,ht,U),Et=new Hb(q,nt,U,w),Xt=new $S(q,De,nt),yt=new tM(q,De,nt),nt.programs=Wt.programs,G.capabilities=U,G.extensions=De,G.properties=at,G.renderLists=Yt,G.shadowMap=fe,G.state=w,G.info=nt}I!==fi&&(F=new rM(I,e.width,e.height,l,s,r));let ee=new Rf(G,q);this.xr=ee,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize($e,xt,!1))},this.getSize=function(C){return C.set($e,xt)},this.setSize=function(C,Z,ut=!0){if(ee.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=C,xt=Z,e.width=Math.floor(C*vt),e.height=Math.floor(Z*vt),ut===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set($e*vt,xt*vt).floor()},this.setDrawingBufferSize=function(C,Z,ut){$e=C,xt=Z,vt=ut,e.width=Math.floor(C*ut),e.height=Math.floor(Z*ut),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(I===fi){Se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Mt)},this.getViewport=function(C){return C.copy(jt)},this.setViewport=function(C,Z,ut,rt){C.isVector4?jt.set(C.x,C.y,C.z,C.w):jt.set(C,Z,ut,rt),w.viewport(Mt.copy(jt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,Z,ut,rt){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,Z,ut,rt),w.scissor(Gt.copy(me).multiplyScalar(vt).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){w.setScissorTest(ie=C)},this.setOpaqueSort=function(C){Dt=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ut=!0){let rt=0;if(C){let ot=!1;if(Tt!==null){let Ot=Tt.texture.format;ot=x.has(Ot)}if(ot){let Ot=Tt.texture.type,Ft=m.has(Ot),At=Te.getClearColor(),Jt=Te.getClearAlpha(),ne=At.r,re=At.g,ye=At.b;Ft?(k[0]=ne,k[1]=re,k[2]=ye,k[3]=Jt,q.clearBufferuiv(q.COLOR,0,k)):($[0]=ne,$[1]=re,$[2]=ye,$[3]=Jt,q.clearBufferiv(q.COLOR,0,$))}else rt|=q.COLOR_BUFFER_BIT}Z&&(rt|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ut&&(rt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&q.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),st=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Qe,!1),e.removeEventListener("webglcontextrestored",qe,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Te.dispose(),Yt.dispose(),$t.dispose(),at.dispose(),It.dispose(),ht.dispose(),Kt.dispose(),Et.dispose(),Wt.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ar),ee.removeEventListener("sessionend",or),Ri.stop()};function Qe(C){C.preventDefault(),Ao("WebGLRenderer: Context Lost."),X=!0}function qe(){Ao("WebGLRenderer: Context Restored."),X=!1;let C=nt.autoReset,Z=fe.enabled,ut=fe.autoUpdate,rt=fe.needsUpdate,ot=fe.type;se(),nt.autoReset=C,fe.enabled=Z,fe.autoUpdate=ut,fe.needsUpdate=rt,fe.type=ot}function zn(C){Se("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){let Z=C.target;Z.removeEventListener("dispose",oi),bl(Z)}function bl(C){za(C),at.remove(C)}function za(C){let Z=at.get(C).programs;Z!==void 0&&(Z.forEach(function(ut){Wt.releaseProgram(ut)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ut,rt,ot,Ot){Z===null&&(Z=de);let Ft=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,At=Ha(C,Z,ut,rt,ot);w.setMaterial(rt,Ft);let Jt=ut.index,ne=1;if(rt.wireframe===!0){if(Jt=ft.getWireframeAttribute(ut),Jt===void 0)return;ne=2}let re=ut.drawRange,ye=ut.attributes.position,Ut=re.start*ne,bt=(re.start+re.count)*ne;Ot!==null&&(Ut=Math.max(Ut,Ot.start*ne),bt=Math.min(bt,(Ot.start+Ot.count)*ne)),Jt!==null?(Ut=Math.max(Ut,0),bt=Math.min(bt,Jt.count)):ye!=null&&(Ut=Math.max(Ut,0),bt=Math.min(bt,ye.count));let pe=bt-Ut;if(pe<0||pe===1/0)return;Kt.setup(ot,rt,At,ut,Jt);let ge,en=Xt;if(Jt!==null&&(ge=kt.get(Jt),en=yt,en.setIndex(ge)),ot.isMesh)rt.wireframe===!0?(w.setLineWidth(rt.wireframeLinewidth*Ee()),en.setMode(q.LINES)):en.setMode(q.TRIANGLES);else if(ot.isLine){let Tn=rt.linewidth;Tn===void 0&&(Tn=1),w.setLineWidth(Tn*Ee()),ot.isLineSegments?en.setMode(q.LINES):ot.isLineLoop?en.setMode(q.LINE_LOOP):en.setMode(q.LINE_STRIP)}else ot.isPoints?en.setMode(q.POINTS):ot.isSprite&&en.setMode(q.TRIANGLES);if(ot.isBatchedMesh)if(De.get("WEBGL_multi_draw"))en.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let Tn=ot._multiDrawStarts,Qt=ot._multiDrawCounts,In=ot._multiDrawCount,Fe=Jt?kt.get(Jt).bytesPerElement:1,Vn=at.get(rt).currentProgram.getUniforms();for(let wn=0;wn<In;wn++)Vn.setValue(q,"_gl_DrawID",wn),en.render(Tn[wn]/Fe,Qt[wn])}else if(ot.isInstancedMesh)en.renderInstances(Ut,pe,ot.count);else if(ut.isInstancedBufferGeometry){let Tn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Qt=Math.min(ut.instanceCount,Tn);en.renderInstances(Ut,pe,Qt)}else en.render(Ut,pe)};function $n(C,Z,ut,rt){st!==null&&C.isNodeMaterial&&st.setObject(rt,C),Ct===!0&&ae.setState(C,ut,!1),C.transparent===!0&&C.side===ss&&C.forceSinglePass===!1?(C.side=si,C.needsUpdate=!0,ms(C,Z,rt),C.side=Ks,C.needsUpdate=!0,ms(C,Z,rt),C.side=ss):ms(C,Z,rt)}this.compile=function(C,Z,ut=null){ut===null&&(ut=C),st!==null&&st.renderStart(C,Z,ut),O=$t.get(ut),O.init(Z),A.push(O),ut.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),C!==ut&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),O.setupLights(),st!==null&&st.updateLights(O.state.lightsArray),V=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,V),Ct===!0&&ae.setGlobalState(this.clippingPlanes,Z),st!==null&&fe.render(O.state.shadowsArray,ut,Z);let rt=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Ot=ot.material;if(Ot)if(Array.isArray(Ot))for(let Ft=0;Ft<Ot.length;Ft++){let At=Ot[Ft];$n(At,ut,Z,ot),rt.add(At)}else $n(Ot,ut,Z,ot),rt.add(Ot)}),O=A.pop(),st!==null&&st.renderEnd(),rt},this.compileAsync=function(C,Z,ut=null){let rt=this.compile(C,Z,ut);return new Promise(ot=>{function Ot(){if(rt.forEach(function(Ft){let Jt=at.get(Ft).currentProgram;(Jt===void 0||Jt.isReady())&&rt.delete(Ft)}),rt.size===0){ot(C);return}setTimeout(Ot,10)}De.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let li=null;function Ci(C){li&&li(C)}function ar(){Ri.stop()}function or(){Ri.start()}let Ri=new X0;Ri.setAnimationLoop(Ci),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){li=C,ee.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},ee.addEventListener("sessionstart",ar),ee.addEventListener("sessionend",or),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;st!==null&&st.renderStart(C,Z);let ut=ee.enabled===!0&&ee.isPresenting===!0,rt=F!==null&&(Tt===null||ut)&&F.begin(G,Tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(Z),Z=ee.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,Z,Tt),O=$t.get(C,A.length),O.init(Z),O.state.textureUnits=_t.getTextureUnits(),A.push(O),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),it.setFromProjectionMatrix(Rt,zi,Z.reversedDepth),V=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,V),T=Yt.get(C,W.length),T.init(),W.push(T),ee.enabled===!0&&ee.isPresenting===!0){let Ft=G.xr.getDepthSensingMesh();Ft!==null&&zr(Ft,Z,-1/0,G.sortObjects)}zr(C,Z,0,G.sortObjects),T.finish(),st!==null&&st.updateLights(O.state.lightsArray),G.sortObjects===!0&&T.sort(Dt,le),ue=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ue&&Te.addToRenderList(T,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ct===!0&&ae.beginShadows();let ot=O.state.shadowsArray;if(fe.render(ot,C,Z),Ct===!0&&ae.endShadows(),(rt&&F.hasRenderPass())===!1){let Ft=T.opaque,At=T.transmissive;if(O.setupLights(),Z.isArrayCamera){let Jt=Z.cameras;if(At.length>0)for(let ne=0,re=Jt.length;ne<re;ne++){let ye=Jt[ne];wl(Ft,At,C,ye)}ue&&Te.render(C);for(let ne=0,re=Jt.length;ne<re;ne++){let ye=Jt[ne];Ls(T,C,ye,ye.viewport)}}else At.length>0&&wl(Ft,At,C,Z),ue&&Te.render(C),Ls(T,C,Z)}Tt!==null&&pt===0&&(_t.updateMultisampleRenderTarget(Tt),_t.updateRenderTargetMipmap(Tt)),rt&&F.end(G),C.isScene===!0&&C.onAfterRender(G,C,Z),Kt.resetDefaultState(),mt=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],_t.setTextureUnits(O.state.textureUnits),Ct===!0&&ae.setGlobalState(G.clippingPlanes,O.state.camera)):O=null,W.pop(),W.length>0?T=W[W.length-1]:T=null,st!==null&&st.renderEnd()};function zr(C,Z,ut,rt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ut=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(it)){rt&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);let Ft=ht.update(C),At=C.material;At.visible&&T.push(C,Ft,At,ut,oe.z,null,Z)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(it))){let Ft=ht.update(C),At=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),oe.copy(Ft.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(At)){let Jt=Ft.groups;for(let ne=0,re=Jt.length;ne<re;ne++){let ye=Jt[ne],Ut=At[ye.materialIndex];Ut&&Ut.visible&&T.push(C,Ft,Ut,ut,oe.z,ye,Z)}}else At.visible&&T.push(C,Ft,At,ut,oe.z,null,Z)}}let Ot=C.children;for(let Ft=0,At=Ot.length;Ft<At;Ft++)zr(Ot[Ft],Z,ut,rt)}function Ls(C,Z,ut,rt){let{opaque:ot,transmissive:Ot,transparent:Ft}=C;O.setupLightsView(ut),Ct===!0&&ae.setGlobalState(G.clippingPlanes,ut),rt&&w.viewport(Mt.copy(rt)),ot.length>0&&Ds(ot,Z,ut),Ot.length>0&&Ds(Ot,Z,ut),Ft.length>0&&Ds(Ft,Z,ut),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function wl(C,Z,ut,rt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[rt.id]===void 0){let Ut=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[rt.id]=new ui(1,1,{generateMipmaps:!0,type:Ut?Wi:fi,minFilter:tr,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let Ot=O.state.transmissionRenderTarget[rt.id],Ft=rt.viewport||Mt;Ot.setSize(Ft.z*G.transmissionResolutionScale,Ft.w*G.transmissionResolutionScale);let At=G.getRenderTarget(),Jt=G.getActiveCubeFace(),ne=G.getActiveMipmapLevel();G.setRenderTarget(Ot),G.getClearColor(Xe),Le=G.getClearAlpha(),Le<1&&G.setClearColor(16777215,.5),G.clear(),ue&&Te.render(ut);let re=G.toneMapping;G.toneMapping=Hi;let ye=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),O.setupLightsView(rt),Ct===!0&&ae.setGlobalState(G.clippingPlanes,rt),Ds(C,ut,rt),_t.updateMultisampleRenderTarget(Ot),_t.updateRenderTargetMipmap(Ot),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let bt=0,pe=Z.length;bt<pe;bt++){let ge=Z[bt],{object:en,geometry:Tn,material:Qt,group:In}=ge;if(Qt.side===ss&&en.layers.test(rt.layers)){let Fe=Qt.side;Qt.side=si,Qt.needsUpdate=!0,qi(en,ut,rt,Tn,Qt,In),Qt.side=Fe,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(_t.updateMultisampleRenderTarget(Ot),_t.updateRenderTargetMipmap(Ot))}G.setRenderTarget(At,Jt,ne),G.setClearColor(Xe,Le),ye!==void 0&&(rt.viewport=ye),G.toneMapping=re}function Ds(C,Z,ut){let rt=Z.isScene===!0?Z.overrideMaterial:null;for(let ot=0,Ot=C.length;ot<Ot;ot++){let Ft=C[ot],{object:At,geometry:Jt,group:ne}=Ft,re=Ft.material;re.allowOverride===!0&&rt!==null&&(re=rt),At.layers.test(ut.layers)&&qi(At,Z,ut,Jt,re,ne)}}function qi(C,Z,ut,rt,ot,Ot){st!==null&&ot.isNodeMaterial&&st.setObject(C,ot),C.onBeforeRender(G,Z,ut,rt,ot,Ot),C.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(G,Z,ut,rt,C,Ot),ot.transparent===!0&&ot.side===ss&&ot.forceSinglePass===!1?(ot.side=si,ot.needsUpdate=!0,G.renderBufferDirect(ut,Z,rt,ot,C,Ot),ot.side=Ks,ot.needsUpdate=!0,G.renderBufferDirect(ut,Z,rt,ot,C,Ot),ot.side=ss):G.renderBufferDirect(ut,Z,rt,ot,C,Ot),C.onAfterRender(G,Z,ut,rt,ot,Ot)}function ms(C,Z,ut){Z.isScene!==!0&&(Z=de);let rt=at.get(C),ot=O.state.lights,Ot=O.state.shadowsArray,Ft=ot.state.version,At=Wt.getParameters(C,ot.state,Ot,Z,ut,O.state.lightProbeGridArray),Jt=Wt.getProgramCacheKey(At),ne=rt.programs;rt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,rt.fog=Z.fog;let re=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;rt.envMap=It.get(C.envMap||rt.environment,re),rt.envMapRotation=rt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",oi),ne=new Map,rt.programs=ne);let ye=ne.get(Jt);if(ye!==void 0){if(rt.currentProgram===ye&&rt.lightsStateVersion===Ft)return Va(C,At),ye}else At.uniforms=Wt.getUniforms(C),st!==null&&C.isNodeMaterial&&st.build(C,ut,At),C.onBeforeCompile(At,G),ye=Wt.acquireProgram(At,Jt),ne.set(Jt,ye),rt.uniforms=At.uniforms;let Ut=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ut.clippingPlanes=ae.uniform),Va(C,At),rt.needsLights=Al(C),rt.lightsStateVersion=Ft,rt.needsLights&&(Ut.ambientLightColor.value=ot.state.ambient,Ut.lightProbe.value=ot.state.probe,Ut.sunLights.value=ot.state.sun,Ut.sunLightShadows.value=ot.state.sunShadow,Ut.directionalLights.value=ot.state.directional,Ut.directionalLightShadows.value=ot.state.directionalShadow,Ut.spotLights.value=ot.state.spot,Ut.spotLightShadows.value=ot.state.spotShadow,Ut.rectAreaLights.value=ot.state.rectArea,Ut.ltc_1.value=ot.state.rectAreaLTC1,Ut.ltc_2.value=ot.state.rectAreaLTC2,Ut.pointLights.value=ot.state.point,Ut.pointLightShadows.value=ot.state.pointShadow,Ut.hemisphereLights.value=ot.state.hemi,Ut.sunShadowMatrix.value=ot.state.sunShadowMatrix,Ut.sunShadowCascade.value=ot.state.sunShadowCascade,Ut.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Ut.spotLightMatrix.value=ot.state.spotLightMatrix,Ut.spotLightMap.value=ot.state.spotLightMap,Ut.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=O.state.lightProbeGridArray.length>0,rt.currentProgram=ye,rt.uniformsList=null,ye}function $a(C){if(C.uniformsList===null){let Z=C.currentProgram.getUniforms();C.uniformsList=La.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Va(C,Z){let ut=at.get(C);ut.outputColorSpace=Z.outputColorSpace,ut.batching=Z.batching,ut.batchingColor=Z.batchingColor,ut.instancing=Z.instancing,ut.instancingColor=Z.instancingColor,ut.instancingMorph=Z.instancingMorph,ut.skinning=Z.skinning,ut.morphTargets=Z.morphTargets,ut.morphNormals=Z.morphNormals,ut.morphColors=Z.morphColors,ut.morphTargetsCount=Z.morphTargetsCount,ut.numClippingPlanes=Z.numClippingPlanes,ut.numIntersection=Z.numClipIntersection,ut.vertexAlphas=Z.vertexAlphas,ut.vertexTangents=Z.vertexTangents,ut.toneMapping=Z.toneMapping}function El(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Z.matrixWorld);for(let ut=0,rt=C.length;ut<rt;ut++){let ot=C[ut];if(ot.texture!==null&&ot.boundingBox.containsPoint(R))return ot}return null}function Ha(C,Z,ut,rt,ot){Z.isScene!==!0&&(Z=de),_t.resetTextureUnits();let Ot=Z.fog,Ft=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Z.environment:null,At=Tt===null?G.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:He.workingColorSpace,Jt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,ne=It.get(rt.envMap||Ft,Jt),re=rt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ye=!!ut.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ut=!!ut.morphAttributes.position,bt=!!ut.morphAttributes.normal,pe=!!ut.morphAttributes.color,ge=Hi;rt.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(ge=G.toneMapping);let en=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Tn=en!==void 0?en.length:0,Qt=at.get(rt),In=O.state.lights;if(Ct===!0&&(V===!0||C!==wt)){let ln=C===wt&&rt.id===mt;ae.setState(rt,C,ln)}let Fe=!1;rt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==In.state.version||Qt.outputColorSpace!==At||ot.isBatchedMesh&&Qt.batching===!1||!ot.isBatchedMesh&&Qt.batching===!0||ot.isBatchedMesh&&Qt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Qt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Qt.instancing===!1||!ot.isInstancedMesh&&Qt.instancing===!0||ot.isSkinnedMesh&&Qt.skinning===!1||!ot.isSkinnedMesh&&Qt.skinning===!0||ot.isInstancedMesh&&Qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Qt.instancingMorph===!1&&ot.morphTexture!==null||Qt.envMap!==ne||rt.fog===!0&&Qt.fog!==Ot||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ae.numPlanes||Qt.numIntersection!==ae.numIntersection)||Qt.vertexAlphas!==re||Qt.vertexTangents!==ye||Qt.morphTargets!==Ut||Qt.morphNormals!==bt||Qt.morphColors!==pe||Qt.toneMapping!==ge||Qt.morphTargetsCount!==Tn||!!Qt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Qt.__version=rt.version);let Vn=Qt.currentProgram;Fe===!0&&(Vn=ms(rt,Z,ot),st&&rt.isNodeMaterial&&st.onUpdateProgram(rt,Vn,Qt));let wn=!1,Yi=!1,Us=!1,nn=Vn.getUniforms(),mn=Qt.uniforms;if(w.useProgram(Vn.program)&&(wn=!0,Yi=!0,Us=!0),rt.id!==mt&&(mt=rt.id,Yi=!0),Qt.needsLights){let ln=El(O.state.lightProbeGridArray,ot);Qt.lightProbeGrid!==ln&&(Qt.lightProbeGrid=ln,Yi=!0)}if(wn||wt!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),nn.setValue(q,"projectionMatrix",C.projectionMatrix),nn.setValue(q,"viewMatrix",C.matrixWorldInverse);let Ii=nn.map.cameraPosition;Ii!==void 0&&Ii.setValue(q,Bt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&nn.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&nn.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),wt!==C&&(wt=C,Yi=!0,Us=!0)}if(Qt.needsLights&&(In.state.sunShadowMap.length>0&&nn.setValue(q,"sunShadowMap",In.state.sunShadowMap,_t),In.state.directionalShadowMap.length>0&&nn.setValue(q,"directionalShadowMap",In.state.directionalShadowMap,_t),In.state.spotShadowMap.length>0&&nn.setValue(q,"spotShadowMap",In.state.spotShadowMap,_t),In.state.pointShadowMap.length>0&&nn.setValue(q,"pointShadowMap",In.state.pointShadowMap,_t)),ot.isSkinnedMesh){nn.setOptional(q,ot,"bindMatrix"),nn.setOptional(q,ot,"bindMatrixInverse");let ln=ot.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),nn.setValue(q,"boneTexture",ln.boneTexture,_t))}ot.isBatchedMesh&&(nn.setOptional(q,ot,"batchingTexture"),nn.setValue(q,"batchingTexture",ot._matricesTexture,_t),nn.setOptional(q,ot,"batchingIdTexture"),nn.setValue(q,"batchingIdTexture",ot._indirectTexture,_t),nn.setOptional(q,ot,"batchingColorTexture"),ot._colorsTexture!==null&&nn.setValue(q,"batchingColorTexture",ot._colorsTexture,_t));let Ji=ut.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&K.update(ot,ut,Vn),(Yi||Qt.receiveShadow!==ot.receiveShadow)&&(Qt.receiveShadow=ot.receiveShadow,nn.setValue(q,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Z.environment!==null&&(mn.envMapIntensity.value=Z.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Wb()),Yi){if(nn.setValue(q,"toneMappingExposure",G.toneMappingExposure),Qt.needsLights&&Tl(mn,Us),Ot&&rt.fog===!0&&ce.refreshFogUniforms(mn,Ot),ce.refreshMaterialUniforms(mn,rt,vt,xt,O.state.transmissionRenderTarget[C.id]),Qt.needsLights&&Qt.lightProbeGrid){let ln=Qt.lightProbeGrid;mn.probesSH.value=ln.texture,mn.probesMin.value.copy(ln.boundingBox.min),mn.probesMax.value.copy(ln.boundingBox.max),mn.probesResolution.value.copy(ln.resolution)}La.upload(q,$a(Qt),mn,_t)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(La.upload(q,$a(Qt),mn,_t),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&nn.setValue(q,"center",ot.center),nn.setValue(q,"modelViewMatrix",ot.modelViewMatrix),nn.setValue(q,"normalMatrix",ot.normalMatrix),nn.setValue(q,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let ln=rt.uniformsGroups;for(let Ii=0,Ne=ln.length;Ii<Ne;Ii++){let Cl=ln[Ii];Et.update(Cl,Vn),Et.bind(Cl,Vn)}}return Vn}function Tl(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.sunLights.needsUpdate=Z,C.sunLightShadows.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Al(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return pt},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(C,Z,ut){let rt=at.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),at.get(C.texture).__webglTexture=Z,at.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ut,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){let ut=at.get(C);ut.__webglFramebuffer=Z,ut.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,ut=0){Tt=C,dt=Z,pt=ut;let rt=null,ot=!1,Ot=!1;if(C){let At=at.get(C);if(At.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(q.FRAMEBUFFER,At.__webglFramebuffer),Mt.copy(C.viewport),Gt.copy(C.scissor),te=C.scissorTest,w.viewport(Mt),w.scissor(Gt),w.setScissorTest(te),mt=-1;return}else if(At.__webglFramebuffer===void 0)_t.setupRenderTarget(C);else if(At.__hasExternalTextures)_t.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let re=C.depthTexture;if(At.__boundDepthTexture!==re){if(re!==null&&at.has(re)&&(C.width!==re.image.width||C.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(C)}}let Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);let ne=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[Z])?rt=ne[Z][ut]:rt=ne[Z],ot=!0):C.samples>0&&_t.useMultisampledRTT(C)===!1?rt=at.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?rt=ne[ut]:rt=ne,Mt.copy(C.viewport),Gt.copy(C.scissor),te=C.scissorTest}else Mt.copy(jt).multiplyScalar(vt).floor(),Gt.copy(me).multiplyScalar(vt).floor(),te=ie;if(ut!==0&&(rt=lt),w.bindFramebuffer(q.FRAMEBUFFER,rt)&&w.drawBuffers(C,rt),w.viewport(Mt),w.scissor(Gt),w.setScissorTest(te),ot){let At=at.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At.__webglTexture,ut)}else if(Ot){let At=Z;for(let Jt=0;Jt<C.textures.length;Jt++){let ne=at.get(C.textures[Jt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Jt,ne.__webglTexture,ut,At)}}else if(C!==null&&ut!==0){let At=at.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,At.__webglTexture,ut)}mt=-1};function Ns(C){let Z=at.get(C);return(Z.__readFormat!==C.format||Z.__readType!==C.type)&&(Z.__readFormat=C.format,Z.__readType=C.type,Z.__formatReadable=U.textureFormatReadable(C.format),Z.__typeReadable=U.textureTypeReadable(C.type)),Z}this.readRenderTargetPixels=function(C,Z,ut,rt,ot,Ot,Ft,At=0){if(!(C&&C.isWebGLRenderTarget)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Jt=Jt[Ft]),Jt){w.bindFramebuffer(q.FRAMEBUFFER,Jt);try{let ne=C.textures[At],re=ne.format,ye=ne.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+At);let Ut=Ns(ne);if(Ut.__formatReadable===!1){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-rt&&ut>=0&&ut<=C.height-ot&&q.readPixels(Z,ut,rt,ot,Vt.convert(re),Vt.convert(ye),Ot)}finally{let ne=Tt!==null?at.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ut,rt,ot,Ot,Ft,At=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Jt=Jt[Ft]),Jt)if(Z>=0&&Z<=C.width-rt&&ut>=0&&ut<=C.height-ot){w.bindFramebuffer(q.FRAMEBUFFER,Jt);let ne=C.textures[At],re=ne.format,ye=ne.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+At);let Ut=Ns(ne);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,bt),q.bufferData(q.PIXEL_PACK_BUFFER,Ot.byteLength,q.STREAM_READ),q.readPixels(Z,ut,rt,ot,Vt.convert(re),Vt.convert(ye),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let pe=Tt!==null?at.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,pe);let ge=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await g0(q,ge,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,bt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ot),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(bt),q.deleteSync(ge),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ut=0){let rt=Math.pow(2,-ut),ot=Math.floor(C.image.width*rt),Ot=Math.floor(C.image.height*rt),Ft=Z!==null?Z.x:0,At=Z!==null?Z.y:0;_t.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,ut,0,0,Ft,At,ot,Ot),w.unbindTexture()},this.copyTextureToTexture=function(C,Z,ut=null,rt=null,ot=0,Ot=0){let Ft,At,Jt,ne,re,ye,Ut,bt,pe,ge=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ut!==null)Ft=ut.max.x-ut.min.x,At=ut.max.y-ut.min.y,Jt=ut.isBox3?ut.max.z-ut.min.z:1,ne=ut.min.x,re=ut.min.y,ye=ut.isBox3?ut.min.z:0;else{let mn=Math.pow(2,-ot);Ft=Math.floor(ge.width*mn),At=Math.floor(ge.height*mn),C.isDataArrayTexture?Jt=ge.depth:C.isData3DTexture?Jt=Math.floor(ge.depth*mn):Jt=1,ne=0,re=0,ye=0}rt!==null?(Ut=rt.x,bt=rt.y,pe=rt.z):(Ut=0,bt=0,pe=0);let en=Vt.convert(Z.format),Tn=Vt.convert(Z.type),Qt;Z.isData3DTexture?(_t.setTexture3D(Z,0),Qt=q.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(_t.setTexture2DArray(Z,0),Qt=q.TEXTURE_2D_ARRAY):(_t.setTexture2D(Z,0),Qt=q.TEXTURE_2D),w.activeTexture(q.TEXTURE0),w.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),w.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),w.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);let In=w.getParameter(q.UNPACK_ROW_LENGTH),Fe=w.getParameter(q.UNPACK_IMAGE_HEIGHT),Vn=w.getParameter(q.UNPACK_SKIP_PIXELS),wn=w.getParameter(q.UNPACK_SKIP_ROWS),Yi=w.getParameter(q.UNPACK_SKIP_IMAGES);w.pixelStorei(q.UNPACK_ROW_LENGTH,ge.width),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ge.height),w.pixelStorei(q.UNPACK_SKIP_PIXELS,ne),w.pixelStorei(q.UNPACK_SKIP_ROWS,re),w.pixelStorei(q.UNPACK_SKIP_IMAGES,ye);let Us=C.isDataArrayTexture||C.isData3DTexture,nn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){let mn=at.get(C),Ji=at.get(Z),ln=at.get(mn.__renderTarget),Ii=at.get(Ji.__renderTarget);w.bindFramebuffer(q.READ_FRAMEBUFFER,ln.__webglFramebuffer),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ne=0;Ne<Jt;Ne++)Us&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.get(C).__webglTexture,ot,ye+Ne),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.get(Z).__webglTexture,Ot,pe+Ne)),q.blitFramebuffer(ne,re,Ft,At,Ut,bt,Ft,At,q.DEPTH_BUFFER_BIT,q.NEAREST);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||at.has(C)){let mn=at.get(C),Ji=at.get(Z);w.bindFramebuffer(q.READ_FRAMEBUFFER,J),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,tt);for(let ln=0;ln<Jt;ln++)Us?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,mn.__webglTexture,ot,ye+ln):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,mn.__webglTexture,ot),nn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ji.__webglTexture,Ot,pe+ln):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ji.__webglTexture,Ot),ot!==0?q.blitFramebuffer(ne,re,Ft,At,Ut,bt,Ft,At,q.COLOR_BUFFER_BIT,q.NEAREST):nn?q.copyTexSubImage3D(Qt,Ot,Ut,bt,pe+ln,ne,re,Ft,At):q.copyTexSubImage2D(Qt,Ot,Ut,bt,ne,re,Ft,At);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else nn?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Qt,Ot,Ut,bt,pe,Ft,At,Jt,en,Tn,ge.data):Z.isCompressedArrayTexture?q.compressedTexSubImage3D(Qt,Ot,Ut,bt,pe,Ft,At,Jt,en,ge.data):q.texSubImage3D(Qt,Ot,Ut,bt,pe,Ft,At,Jt,en,Tn,ge):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ot,Ut,bt,Ft,At,en,Tn,ge.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ot,Ut,bt,ge.width,ge.height,en,ge.data):q.texSubImage2D(q.TEXTURE_2D,Ot,Ut,bt,Ft,At,en,Tn,ge);w.pixelStorei(q.UNPACK_ROW_LENGTH,In),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Fe),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Vn),w.pixelStorei(q.UNPACK_SKIP_ROWS,wn),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Yi),Ot===0&&Z.generateMipmaps&&q.generateMipmap(Qt),w.unbindTexture()},this.initRenderTarget=function(C){at.get(C).__webglFramebuffer===void 0&&_t.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?_t.setTextureCube(C,0):C.isData3DTexture?_t.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?_t.setTexture2DArray(C,0):_t.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){dt=0,pt=0,Tt=null,w.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=He._getDrawingBufferColorSpace(t),e.unpackColorSpace=He._getUnpackColorSpace()}};var tg=new ii,hu=new Y,Xi=class extends el{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new vn(t,3)),this.setAttribute("uv",new vn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new js(e,6,1);return this.setAttribute("instanceStart",new Vi(n,3,0)),this.setAttribute("instanceEnd",new Vi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new js(e,6,1);return this.setAttribute("instanceColorStart",new Vi(n,3,0)),this.setAttribute("instanceColorEnd",new Vi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Yo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),tg.setFromBufferAttribute(e),this.boundingBox.union(tg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hu)),hu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new zt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ri.line={uniforms:fl.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var os=class extends Bn{constructor(t){super({type:"LineMaterial",uniforms:fl.clone(ri.line.uniforms),vertexShader:ri.line.vertexShader,fragmentShader:ri.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var If=new an,eg=new Y,ng=new Y,Gn=new an,Wn=new an,ls=new an,Pf=new Y,Lf=new We,Xn=new il,ig=new Y,uu=new ii,du=new di,cs=new an,hs,Dr;function sg(i,t,e){return cs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),cs.multiplyScalar(1/cs.w),cs.x=Dr/e.width,cs.y=Dr/e.height,cs.applyMatrix4(i.projectionMatrixInverse),cs.multiplyScalar(1/cs.w),Math.abs(Math.max(cs.x,cs.y))}function Xb(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,h=a;l<h;l++){Xn.start.fromBufferAttribute(s,l),Xn.end.fromBufferAttribute(r,l),Xn.applyMatrix4(e);let u=new Y,d=new Y;hs.distanceSqToSegment(Xn.start,Xn.end,d,u),d.distanceTo(u)<Dr*.5&&t.push({point:d,pointOnLine:u,distance:hs.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function qb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,h=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,h.count),v=-t.near;hs.at(1,ls),ls.w=1,ls.applyMatrix4(t.matrixWorldInverse),ls.applyMatrix4(n),ls.multiplyScalar(1/ls.w),ls.x*=r.x/2,ls.y*=r.y/2,ls.z=0,Pf.copy(ls),Lf.multiplyMatrices(t.matrixWorldInverse,a);for(let _=0,S=d;_<S;_++){if(Gn.fromBufferAttribute(h,_),Wn.fromBufferAttribute(u,_),Gn.w=1,Wn.w=1,Gn.applyMatrix4(Lf),Wn.applyMatrix4(Lf),Gn.z>v&&Wn.z>v)continue;if(Gn.z>v){let $=Gn.z-Wn.z,R=(Gn.z-v)/$;Gn.lerp(Wn,R)}else if(Wn.z>v){let $=Wn.z-Gn.z,R=(Wn.z-v)/$;Wn.lerp(Gn,R)}Gn.applyMatrix4(n),Wn.applyMatrix4(n),Gn.multiplyScalar(1/Gn.w),Wn.multiplyScalar(1/Wn.w),Gn.x*=r.x/2,Gn.y*=r.y/2,Wn.x*=r.x/2,Wn.y*=r.y/2,Xn.start.copy(Gn),Xn.start.z=0,Xn.end.copy(Wn),Xn.end.z=0;let I=Xn.closestPointToPointParameter(Pf,!0);Xn.at(I,ig);let x=cf.lerp(Gn.z,Wn.z,I),m=x>=-1&&x<=1,k=Pf.distanceTo(ig)<Dr*.5;if(m&&k){Xn.start.fromBufferAttribute(h,_),Xn.end.fromBufferAttribute(u,_),Xn.start.applyMatrix4(a),Xn.end.applyMatrix4(a);let $=new Y,R=new Y;hs.distanceSqToSegment(Xn.start,Xn.end,R,$),e.push({point:R,pointOnLine:$,distance:hs.origin.distanceTo(R),object:i,face:null,faceIndex:_,uv:null,uv1:null})}}}var Nr=class extends On{constructor(t=new Xi,e=new os({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,h=e.count;a<h;a++,l+=2)eg.fromBufferAttribute(e,a),ng.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+eg.distanceTo(ng);let r=new js(s,2,1);return t.setAttribute("instanceDistanceStart",new Vi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Vi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;hs=t.ray;let a=this.matrixWorld,l=this.geometry,h=this.material;Dr=h.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),du.copy(l.boundingSphere).applyMatrix4(a);let u;if(n)u=Dr*.5;else{let v=Math.max(s.near,du.distanceToPoint(hs.origin));u=sg(s,v,h.resolution)}if(du.radius+=u,hs.intersectsSphere(du)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),uu.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Dr*.5;else{let v=Math.max(s.near,uu.distanceToPoint(hs.origin));d=sg(s,v,h.resolution)}uu.expandByScalar(d),hs.intersectsBox(uu)!==!1&&(n?Xb(this,e):qb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(If),this.material.uniforms.resolution.value.set(If.z,If.w))}};var fu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),us=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function rg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:h,CY:u,mcs:d,q:v,list:_,clamp:S,norm:b,munis:I}=i,x=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),k=(o,c)=>[(o-h)*l,(c-u)*l],$=.06,R=t.segs.map(o=>{let c=[],f=[0];for(let g=0;g<o.length;g+=2){let y=k(o[g],o[g+1]);c.length&&f.push(f[f.length-1]+Math.hypot(y[0]-c[c.length-1][0],y[1]-c[c.length-1][1])),c.push(y)}return{p:c,c:f,L:f[f.length-1]}}),T=t.stops.map(([o,c,f,g])=>({n:o,id:g,w:k(c,f),fams:new Set})),O=t.routes.map(([o,c,f])=>({s:o,l:c,c:f})),W=new Map;(t.bus||[]).forEach(([o,c,f,g])=>{let y={days:new Set(o),name:c,stops:f,times:g};f.forEach((M,P)=>{if(P<f.length-1){let N=W.get(M)||[];N.push([y,P]),W.set(M,N)}})});function A(o,c,f){let g=ie(),y=t.days.indexOf(g.ymd),M=[];for(let[P,N]of W.get(o)||[]){if(!P.days.has(y))continue;let D=P.times[N];if(D<c||D>f)continue;let B=P.stops[P.stops.length-1];M.push({sm:D,est:D,dl:0,fam:P.name,dest:T[B].n,destId:T[B].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(N)})}return M}let F=(o,c)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),g=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(g[1]||"")||(+f[2]||0)-(+g[2]||0)||f[3].localeCompare(g[3])},G=[...new Set(O.map(o=>o.s))].sort(F),X={};O.forEach(o=>{X[o.s]||(X[o.s]=o.c)});let st=t.pats.map(([o,c,f])=>({stops:o,t:c,segs:f})),lt=t.trips.map(([o,c,f,g,y],M)=>({day:o,pat:st[c],fam:O[f].s,c:O[f].c,t0:g,num:y,tid:t.tids[M]})),J={};G.forEach(o=>J[o]=new Set),lt.forEach(o=>{o.pat.segs.forEach(c=>J[o.fam].add(c)),o.pat.stops.forEach(c=>T[c].fams.add(o.fam))});let tt=t.days.map((o,c)=>lt.filter(f=>f.day===c)),dt=new Map(lt.map(o=>[o.tid,o])),pt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,mt=3.922*Tt,wt=-39.705*Tt;function Mt(o,c){let f=o*Tt+mt,g=c*Tt,y=Math.cos(wt),M=Math.sin(wt),P=Math.cos(g),N=Math.cos(f)*P,D=Math.sin(f)*P,B=Math.sin(g),H=Math.atan2(D,N*y-B*M),p=Math.asin(B*y+N*M),E=Math.sqrt(2/(1+Math.cos(H)*Math.cos(p))),L=E*Math.cos(p)*Math.sin(H),z=E*Math.sin(p),[ct,St,Q,gt,j,_e,we]=pt;return k((St+ct*L-j)*we,(_e-(gt-Q*z))*we)}let Gt=new Map(T.map((o,c)=>[o.id,c]));function te(o){if(o.g)return o.g;let c=[],f=[],g=[0],y=0;return o.segs.forEach((M,P)=>{let N=R[M];N.p.forEach((D,B)=>{P&&!B||(c.push(D),f.push(y+N.c[B]))}),y+=N.L,g.push(y)}),o.g={pts:c,cum:f,stopD:g}}function Xe(o,c,f,g){let y=1e18,M=0;for(let P=0;P+1<o.pts.length;P++){if(o.cum[P+1]<f||o.cum[P]>g)continue;let N=o.pts[P],D=o.pts[P+1],B=D[0]-N[0],H=D[1]-N[1],p=B*B+H*H||1e-9,E=Math.max(0,Math.min(1,((c[0]-N[0])*B+(c[1]-N[1])*H)/p)),L=N[0]+B*E-c[0],z=N[1]+H*E-c[1],ct=L*L+z*z;ct<y&&(y=ct,M=o.cum[P]+E*(o.cum[P+1]-o.cum[P]))}return{d:M,err:Math.sqrt(y)}}function Le(o,c){let f=0,g=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[g])return o.pts[g];for(;g-f>1;){let N=f+g>>1;o.cum[N]<=c?f=N:g=N}let y=(c-o.cum[f])/(o.cum[g]-o.cum[f]||1),M=o.pts[f],P=o.pts[g];return[M[0]+(P[0]-M[0])*y,M[1]+(P[1]-M[1])*y]}let $e=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,xt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let c={};return xt.formatToParts(o).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Dt=0,le=null,jt=0,me=0;function ie(){let o=vt(new Date);if(Dt===0&&le==null)return{...o,live:!0};let c=le==null?o.min:jt+(Dt?(performance.now()-me)/6e4*Dt:0);return{ymd:o.ymd,min:c,live:!1}}let it=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Ct="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Ct,localStorage.setItem("rod_rt",c)),V.url=c||Ct}catch{V.url=Ct}let Rt=(o,c)=>{let f=new AbortController,g=setTimeout(()=>f.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:f.signal}).then(y=>{if(clearTimeout(g),!y.ok)throw new Error("HTTP "+y.status);return y.json()},y=>{throw clearTimeout(g),y})},Bt="https://rodalies.jhmuyo.workers.dev";function oe(){return(V.url===Ct&&V.altUntil>Date.now()?Bt:V.url).replace(/\/+$/,"")}let de=o=>/^51/.test(o||"");async function ue(){if(!V.url){nt();return}let o=oe();if(!ue.busy){ue.busy=1;try{await Ee(o)}finally{ue.busy=0}}}async function Ee(o){let c=!V.adifAt||Date.now()-V.adifAt>11e4,f=p=>({status:"fulfilled",value:p}),g=p=>({status:"rejected",reason:p}),y,M,P,N,D,B=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{B=await Rt(o,"/live.json")}catch(p){if(/HTTP 404/.test(p.message))V.noLive=Date.now();else{if(V.url===Ct&&o!==Bt)return V.altUntil=Date.now()+30*6e4,Ee(Bt);o===Bt&&(V.altUntil=0),B={__fail:p}}}if(B&&B.__fail)y=M=P=N=D=g(B.__fail);else if(B&&B.v===1){let p=L=>B[L]&&!B[L].__err?f(B[L]):g(new Error(B[L]&&B[L].__err||"sin dato"));y=p("tu"),M=p("vp"),P=p("al"),N=p("nt"),D=c?p("ad"):g(0);let E=B.rep;E&&Array.isArray(E.items)&&(V.rep=E.items,V.repSkew=(E.now||Date.now())-Date.now(),E.tipos&&(V.tipos=E.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&Rt(o,"/reports.json").then(p=>{p&&Array.isArray(p.items)?(V.rep=p.items,V.repSkew=(p.now||Date.now())-Date.now(),p.tipos&&(V.tipos=p.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[y,M,P,N,D]=await Promise.allSettled([Rt(o,"/trip_updates.json"),Rt(o,"/vehicle_positions.json"),Rt(o,"/alerts.json"),Rt(o,"/notices.json"),c?Rt(o,"/adif.json"):Promise.reject(0)]);if(D.status==="fulfilled"&&D.value&&D.value.ok?(V.adif=D.value,V.adifAt=Date.now()):c&&(V.adifAt=Date.now()-6e4),y.status==="fulfilled"){let p=new Map,E=new Map;for(let L of y.value.entity||[]){let z=L.tripUpdate;if(!z||!z.trip||!de(z.trip.tripId))continue;let ct=z.trip.tripId,St=(z.stopTimeUpdate||[])[0],Q=z.delay;Q==null&&St&&(Q=(St.arrival||St.departure||{}).delay),z.trip.scheduleRelationship==="CANCELED"&&(Q="X"),Q!=null&&p.set(ct,Q),E.set(ct,{next:St?{sid:St.stopId,t:+((St.arrival||St.departure||{}).time||0)}:null})}V.delays=p,V.tu=E,V.ok=Date.now(),V.feedTs=+((y.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=y.reason&&y.reason.message||__t(0);if(M.status==="fulfilled"){let p=new Map,E=Date.now()/1e3;for(let L of M.value.entity||[]){let z=L.vehicle;if(!z||!z.trip||!de(z.trip.tripId)||!z.position)continue;let ct=z.vehicle&&z.vehicle.label||"",St=ct.match(/PLATF\.\(([^)]+)\)/),Q=V.vp.get(z.trip.tripId),gt={tid:z.trip.tripId,w:Mt(+z.position.longitude,+z.position.latitude),st:z.currentStatus||"",sid:z.stopId||"",ts:+z.timestamp||E,label:ct,plat:St?St[1]:"",fam:(ct.split("-")[0]||"").trim(),num:z.vehicle&&z.vehicle.id||""};gt.disp=Q?Q.disp:null,p.set(gt.tid,gt)}V.vp=p,V.okVP=Date.now()}let H=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){V.okNotices=Date.now();for(let p of N.value.included){let E=new Set((p.lines||[]).map(Q=>Q.id).filter(Q=>X[Q])),L=(Q,gt)=>{Q=Q||{},gt=gt||window.__L;let j=Q[gt];return gt==="en"&&j&&(j===Q.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(j))&&(j=""),(j||Q.es||Q.ca||"").trim()},z=Q=>[L(p.description,Q),L(p.title,Q)].sort((gt,j)=>j.length-gt.length)[0],ct=z(),St=z("es");ct&&H.push({id:"N"+p.externalId,fams:E,stops:new Set,txt:ct,es:St,when:(p.date||"")+"T"+(p.time||""),src:"Rodalies",core:p.core||""})}}if(P.status==="fulfilled"){let p=+((P.value.header||{}).timestamp||0);if(V.alertsTs=p,Date.now()/1e3-p<6*3600)for(let E of P.value.entity||[]){let L=E.alert;if(!L)continue;let z=new Set,ct=new Set;for(let j of L.informedEntity||[])(j.routeId||"").startsWith("51")&&z.add(j.routeId.replace(/^51T\d+/,"")),j.stopId&&Gt.has(j.stopId)&&ct.add(Gt.get(j.stopId));if(!z.size&&!ct.size)continue;let St=(L.descriptionText||L.headerText||{translation:[]}).translation||[],Q=((St.find(j=>j.language==="es")||St[0]||{}).text||"").trim(),gt=+((L.activePeriod||[])[0]||{}).start||0;H.some(j=>j.txt===Q)||H.push({id:E.id,fams:z,stops:ct,txt:Q,when:gt?new Date(gt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[p,E]of(V.adif.items||[]).entries()){let L=(E.t?E.t+". ":"")+E.txt,z=new Set,ct=new Set,St=b(L);for(let Q of L.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[Q[1]]&&z.add(Q[1]);T.forEach((Q,gt)=>{Q.fams.size&&Q.n.length>4&&St.includes(b(Q.n))&&(ct.add(gt),z.size||Q.fams.forEach(j=>z.add(j)))}),H.some(Q=>Q.txt===L)||H.push({id:"A"+p,fams:z,stops:ct,txt:L,when:V.adif.upd||"",src:"Adif",lvl:E.lvl})}if(N.status==="fulfilled"||P.status==="fulfilled"){V.alerts=H.sort((p,E)=>E.when>p.when?1:-1);try{i_()}catch{}}nt(),Nu(),ye=0,a()}let q=()=>V.okVP&&Date.now()-V.okVP<10*6e4,Ue=()=>V.okVP&&Date.now()-V.okVP<9e4,De={at:0,v:!1},U=()=>{if(!q()||V.vp.size>0)return!1;if(Date.now()-De.at>3e4){De.at=Date.now();let o=vt(new Date),c=t.days.indexOf(o.ymd),f=0;if(c>=0)for(let g of tt[c]){let y=o.min-g.t0;y>g.pat.t[1]+2&&y<g.pat.t[g.pat.t.length-2]-2&&f++}De.v=f>=6}return De.v},w=()=>q()&&!U();function nt(){let o=x("#rtst"),c=x("#mode");if(c){let g=[...ht].filter(N=>{eo("");let D=Di.m.get(N);return D&&D[0]>=2}),y=to(g),M=!!w()&&ie().live&&!(g.length&&y.length===g.length);c.classList.toggle("on",M&&Ue()),c.classList.toggle("pre",!(M&&Ue())),c.textContent=M&&!Ue()?__t(1):M?__t(2):It.cur?__t(3):__t(4),c.classList.toggle("past",!!It.cur);let P=x("#rcgrab");if(P){let N=P.querySelector(".rdot");N||(N=document.createElement("b"),N.className="rdot",P.insertBefore(N,P.firstChild)),N.className="rdot "+(It.cur?"past":M&&Ue()?"on":"pre"),N.title=c.textContent}c.title=It.cur?`${__t(5)}${It.cur.sn.t}${__t(6)}`:""}if(!o)return;V.url?V.err?o.textContent=__t(8)+V.err+__t(9):w()?o.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:U()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=V.err||__t(7);let f=x("#rturl");f&&f._shown!==V.url&&(f.value=V.url,f._shown=V.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){V.err=__t(15),nt();return}V.url=o;try{localStorage.setItem("rod_rt",o)}catch{}V.ok=0,V.err="",nt(),ue()},x("#rtoff").onclick=()=>{V.url=Ct;try{localStorage.removeItem("rod_rt")}catch{}d._h="",ue()};let at=0;setInterval(()=>{let o=Mn.size||be;(document.hidden?!o||Date.now()-at<115e3:Date.now()-at<15e3)||(at=Date.now(),ue())},2e4),setTimeout(()=>{at=Date.now(),ue()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-at>15e3&&(at=Date.now(),ue())});let It={snap:null,key:""};function kt(){let o=ie();if(o.live||!Ne.hoy||!Ne.hoy.snaps||Dt&&le==null)return null;let c=vt(new Date).min;if(o.min>c+1)return null;let f=null;for(let g of Ne.hoy.snaps){if(!g.d)continue;let y=fp(g.t);y<=o.min+1&&(!f||y>f.m)&&(f={m:y,sn:g})}return f&&o.min-f.m<=25?f:null}let ft=o=>{{let y=Iu(o.num);if(y&&y.cx&&ie().live)return"X"}let c=It.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let y=c.sn.d[o.tid];return y??0}if(!w())return null;let f=V.delays.get(o.tid),g=V.vp.get(o.tid);return f==="X"?f:g&&g.pre&&g.preDl>=1?Math.max(typeof f=="number"?f:0,g.preDl*60):f??null},ht=new Set(G);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>G.includes(c))&&(ht.clear(),o.forEach(c=>G.includes(c)&&ht.add(c)))}catch{}let Wt=new Xi,ce=new Xi,Yt=new os({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),$t=new os({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ae=new Nr(Wt,Yt),fe=new Nr(ce,$t);fe.renderOrder=20,ae.renderOrder=21,ae.frustumCulled=fe.frustumCulled=!1,e.add(fe,ae);function Te(o){let c=o[0]/l+h,f=o[1]/l+u;for(let g of I){if(g._bb===void 0){let M=1e9,P=1e9,N=-1e9,D=-1e9;for(let B of g.rings||[]){let H=B[0]||[];for(let p=0;p<H.length;p+=2)H[p]<M&&(M=H[p]),H[p]>N&&(N=H[p]),H[p+1]<P&&(P=H[p+1]),H[p+1]>D&&(D=H[p+1])}g._bb=[M,P,N,D]}let y=g._bb;if(!(c<y[0]||c>y[2]||f<y[1]||f>y[3]))for(let M of g.rings||[]){let P=M[0]||[],N=!1;for(let D=0,B=P.length,H=B-2;D<B;H=D,D+=2){let p=P[D+1],E=P[H+1];p>f!=E>f&&c<(P[H]-P[D])*(f-p)/(E-p)+P[D]&&(N=!N)}if(N)return!0}}return!1}let K=!1;function Xt(){K||!I.length||(K=!0,T.forEach(o=>{o.ext=!Te(o.w)}),R.forEach(o=>{o.ext=!Te(o.p[0])&&!Te(o.p[o.p.length-1])&&!Te(o.p[o.p.length>>1])}))}let yt=()=>{let o=new Set(ht.size<=2?ht:[]);try{bt&&bt.fam&&o.add(bt.fam)}catch{}return o},Vt="";function Kt(){Xt();let o=[],c=[],f=new Set,g=new xe,y=new xe("#d2d0d0"),M=yt();Vt=[...M].join();for(let H of G)if(ht.has(H))for(let p of J[H]){if(f.has(p))continue;f.add(p);let E=R[p].p;g.set(X[H]),R[p].ext&&!M.has(H)&&g.lerp(y,.55);for(let L=0;L+1<E.length;L++)o.push(E[L][0],E[L][1],$,E[L+1][0],E[L+1][1],$),c.push(g.r,g.g,g.b,g.r,g.g,g.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let P=new Xi,N=new Xi;P.setPositions(o),P.setColors(c),N.setPositions(o);let D=ae.geometry,B=fe.geometry;ae.geometry=P,fe.geometry=N,D&&D.dispose(),B&&B.dispose(),a()}Kt();let Et=o=>new Bn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),se=new yn,ee=T.length,Qe=new Float32Array(ee*3),qe=new Float32Array(ee*3),zn=new Float32Array(ee),oi=new Float32Array(ee);T.forEach((o,c)=>{Qe[c*3]=o.w[0],Qe[c*3+1]=o.w[1],Qe[c*3+2]=$,qe.set([1,1,1],c*3),zn[c]=6,oi[c]=1.6}),se.setAttribute("position",new cn(Qe,3)),se.setAttribute("fill",new cn(qe,3)),se.setAttribute("size",new cn(zn,1)),se.setAttribute("bw",new cn(oi,1));let bl=Et("#1d2330"),za=new Tr(se,bl);za.renderOrder=22,za.frustumCulled=!1,e.add(za);function $n(){let o=r.dist<45,c=yt();T.forEach((f,g)=>{let y=[...f.fams].some(P=>ht.has(P)),M=f.ext&&![...f.fams].some(P=>c.has(P))&&g!==pe;zn[g]=y?g===pe?13:M?3:o?8:5:0,oi[g]=g===pe?3:1.6}),se.attributes.size.needsUpdate=!0,se.attributes.bw.needsUpdate=!0}let li=600,Ci=new yn,ar=new Float32Array(li*3),or=new Float32Array(li*3),Ri=new Float32Array(li),zr=new Float32Array(li);Ci.setAttribute("position",new cn(ar,3)),Ci.setAttribute("fill",new cn(or,3)),Ci.setAttribute("size",new cn(Ri,1)),Ci.setAttribute("bw",new cn(zr,1));let Ls=new Float32Array(li);Ci.setAttribute("ang",new cn(Ls,1));let wl=new Bn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ds=new Tr(Ci,wl);Ds.renderOrder=24,Ds.frustumCulled=!1,e.add(Ds);let qi=new yn,ms=new Float32Array(li*3),$a=new Float32Array(li*3),Va=new Float32Array(li),El=new Float32Array(li);qi.setAttribute("position",new cn(ms,3)),qi.setAttribute("fill",new cn($a,3)),qi.setAttribute("size",new cn(Va,1)),qi.setAttribute("bw",new cn(El,1));let Ha=new Tr(qi,Et("#ffffff"));Ha.renderOrder=23,Ha.frustumCulled=!1,e.add(Ha);function Tl(o,c){let f=R[o],g=c*f.L,y=0,M=f.c.length-1;for(;M-y>1;){let H=y+M>>1;f.c[H]<=g?y=H:M=H}let P=f.c[M]-f.c[y]||1,N=(g-f.c[y])/P,D=f.p[y],B=f.p[M];return[D[0]+(B[0]-D[0])*N,D[1]+(B[1]-D[1])*N]}let Al=o=>o*o*(3-2*o)*.35+o*.65;function Ns(o,c){let f=o.pat.t,g=o.pat.stops.length,y=f[2*g-2];if(c<f[1]-2||c>y+1)return null;if(c<=f[1])return{w:T[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let M=0;M<g-1;M++){let P=f[2*M+1],N=f[2*M+2],D=f[2*M+3];if(c<=N){let B=N>P?(c-P)/(N-P):1;return{w:Tl(o.pat.segs[M],Al(S(B,0,1))),at:-1,next:M+1,prev:M,moving:!0}}if(c<=D)return{w:T[o.pat.stops[M+1]].w,at:M+1,next:M+1,moving:!1}}return{w:T[o.pat.stops[g-1]].w,at:g-1,next:g-1,moving:!1}}function C(o){let c=t.days.indexOf(o.ymd),f=[];if(c<0)return{k:c,out:f};let g=(y,M)=>{for(let P of y){if(!ht.has(P.fam))continue;let N=ft(P);if(N==="X")continue;let D=(N||0)/60,B=o.min+M-P.t0-D;if(B<-2||B>P.pat.t[P.pat.t.length-2]+1)continue;let H=Ns(P,B);H&&f.push({tr:P,p:H,rel:B,dl:D,live:N!=null})}};return g(tt[c],0),c>0&&g(tt[c-1],1440),{k:c,out:f}}function Z(o,c,f,g){let y=o.pat.stops[0],M=c.dep0,P=null,N=(B,H)=>{for(let p of B||[]){let E=p.pat.stops,L=E.length;if(E[L-1]!==y||p===o)continue;let z=p.t0+p.pat.t[2*(L-1)]-H;if(z>M+5||z<M-120)continue;let ct=te(p.pat),St=Xe(ct,c.w,-1,1e9);if(St.err>.6)continue;let Q=ct.stopD,gt=p.pat.t,j=Q.findIndex(Zt=>Zt>St.d);j<0&&(j=L-1);let _e=j===0?gt[1]:gt[2*j-1]+(Q[j]>Q[j-1]?(St.d-Q[j-1])/(Q[j]-Q[j-1]):1)*(gt[2*j]-gt[2*j-1]),we=f-(p.t0+_e-H);we<-5||we>120||(!P||Math.abs(we)<Math.abs(P.prevDl))&&(P={prevTr:p,dPrev:St.d,prevDl:we,arrO:z+Math.max(0,we)})}};if(N(tt[g],0),g>0&&N(tt[g-1],1440),!P)return{prevTr:null,preDl:0};let D=Math.max(M,P.arrO+3);return{...P,depEst:D,preDl:Math.max(0,D-M)}}function ut(o,c,f){let g=o.pat.t,y=c.length;if(!(f>=0))return f<0?c[0]:null;for(let M=0;M<y;M++)if(f<=g[2*M+1]){if(f>=g[2*M]||M===0)return c[M];let P=g[2*M-1],N=g[2*M];return c[M-1]+(c[M]-c[M-1])*(N>P?(f-P)/(N-P):1)}return c[y-1]}let rt=performance.now();function ot(){let o=[],c=Date.now()/1e3,f=performance.now(),g=Math.min(1,(f-rt)/1e3);rt=f;for(let y of V.vp.values()){let M=dt.get(y.tid),P=M?M.fam:y.fam;if(P&&X[P]&&!ht.has(P))continue;let N=V.delays.get(y.tid),D=typeof N=="number"?N/60:0,B=Math.max(0,c-y.ts);y.mvTs!==y.ts&&((!y.mvW||Math.hypot(y.w[0]-y.mvW[0],y.w[1]-y.mvW[1])>.025)&&(y.mvW=y.w,y.mvAt=y.ts),y.mvTs=y.ts),y.still=y.ts-(y.mvAt||y.ts);let H=y.w,p=-1;if(M){let L=te(M.pat),z=L.stopD;if(y.dObs==null||y.obsAt!==y.ts){let j=Xe(L,y.w,-1,1e9);y.dObs=j.d,y.err=j.err,y.obsAt=y.ts}let ct=ie(),St=t.days.indexOf(ct.ymd),Q=M.day===St-1?1440:0,gt=M.t0+M.pat.t[1]-Q;if(y.pre=ct.min+D<gt-1&&(y.dObs>z[0]+.35||y.err>.6)&&!(y.st==="STOPPED_AT"&&y.sid===T[M.pat.stops[0]].id),y.dep0=gt,y.pre){if(y.atStop=-1,y.next=0,p=0,y.disp=null,y.prevAt!==y.ts&&(y.prevAt=y.ts,Object.assign(y,Z(M,y,ct.min,St))),y.prevTr){let j=te(y.prevTr.pat);H=Le(j,y.dPrev)}}else if(!Ue()&&M){let j=ie(),_e=t.days.indexOf(j.ymd),we=M.day===_e-1?1440:0,Zt=Ns(M,j.min+we-M.t0-D);Zt?(H=Zt.w,y.est=!0,p=Zt.next,y.atStop=Zt.moving?-1:Zt.at,y.next=Zt.next,y.before=!1):(y.atStop=-1,y.next=-1)}else if(y.err<=.6){let j=z.findIndex(Zt=>Zt>y.dObs+.08);j<0&&(j=z.length-1);let _e=z.reduce((Zt,ke,Me)=>Math.abs(ke-y.dObs)<Math.abs(z[Zt]-y.dObs)?Me:Zt,0);y.atStop=Math.abs(z[_e]-y.dObs)<.16?_e:-1;{let Zt=y.st==="STOPPED_AT"&&y.sid?M.pat.stops.findIndex(ke=>T[ke].id===y.sid):-1;Zt>=0&&Math.abs(z[Zt]-y.dObs)<.6&&(y.atStop=Zt,j<=Zt&&(j=Math.min(Zt+1,z.length-1)))}y.before=y.atStop>=0&&y.dObs<z[y.atStop]-.15,y.next=j,p=j;let we=y.dObs;if(y.st==="STOPPED_AT"&&y.atStop>=0)we=z[y.atStop];else if(j>0){let Zt=(M.pat.t[2*j]-M.pat.t[2*j-1])*60,ke=Zt>0?(z[j]-z[j-1])/Zt:0,Me=ie(),Ie=t.days.indexOf(Me.ymd),Ye=M.day===Ie-1?1440:0,Ve=ut(M,z,Me.min+Ye-M.t0-D),xn=y.dObs+ke*Math.min(B,60);Ve!=null&&(xn=Math.min(xn,Math.max(y.dObs,Ve))),we=Math.max(y.dObs,Math.min(z[j]-.03,xn))}y.disp==null||Math.abs(y.disp-we)>1.2?y.disp=we:we>y.disp&&(y.disp+=(we-y.disp)*Math.min(1,g*1.5)),H=Le(L,y.disp)}else if(y.err>2){let j=ie(),_e=t.days.indexOf(j.ymd),we=M.day===_e-1?1440:0,Zt=Ns(M,j.min+we-M.t0-D);Zt&&(H=Zt.w,y.est=!0,p=Zt.next),y.atStop=-1,y.next=Zt?Zt.next:-1}else y.atStop=-1,y.next=-1}let E=y.pre?"":y.st==="STOPPED_AT"&&y.atStop>=0||y.atStop>=0&&y.still>30?"st":y.still>=90&&y.atStop<0?"via":"";o.push({tr:M,v:y,w:H,stop:E,p:{w:H},fam:P||"?",c:M?M.c:X[P]||"#6b7385",dl:D,live:!0,real:!0,idx:p,age:B,cancel:N==="X"})}return o}let Ot=new Map,Ft=!1,At=!1,Jt="",ne={st:-1},re=[],ye=0,Ut=null,bt=null,pe=-1,ge=!1,en=0,Tn="";function Qt(o){let c=Dt>0||!!Ut,f=window.__mapHidden?1e3:Dt>0?50:c?120:250;if(o-ye<f)return!1;ye=o,[...yt()].join()!==Vt&&(Kt(),$n());{let p=kt(),E=p?p.sn.t:"";It.cur=p,E!==It.key&&(It.key=E,nt()),!p&&!ie().live&&!Ne.at&&Rl()}let g=ie(),y=w()&&g.live,M=y?{k:t.days.indexOf(g.ymd),out:ot()}:C(g);re=M.out;let P=new xe,N=0,D=0;for(let p of re){if(N>=li)break;ar[N*3]=p.p.w[0],ar[N*3+1]=p.p.w[1],ar[N*3+2]=$+.02;let E=null;if(p.real&&p.v.pre&&p.v.prevTr)E=Le(te(p.v.prevTr.pat),p.v.dPrev+.35);else if(p.real&&p.tr&&!p.v.pre&&p.v.err<=.6&&p.v.disp!=null&&!(p.v.st==="STOPPED_AT"&&p.v.atStop>=0))E=Le(te(p.tr.pat),p.v.disp+.35);else if(!p.real&&p.p.moving){let Q=p.tr.pat.t,gt=p.p.prev,j=Q[2*gt+1],_e=Q[2*gt+2],we=_e>j?(p.rel-j)/(_e-j):1;E=Tl(p.tr.pat.segs[gt],Math.min(1,Al(S(we,0,1))+.04))}let L=p.real?!!p.stop:!p.p.moving;if(p.broke=ip(p),p.broke)Ls[N]=85;else if(L)Ls[N]=75;else if(E){let Q=Il(p.p.w),gt=Il(E),j=gt[0]-Q[0],_e=gt[1]-Q[1];Ls[N]=Math.hypot(j,_e)>.05?Math.atan2(j,-_e):99}else Ls[N]=99;P.set(p.c||p.tr.c),or[N*3]=P.r,or[N*3+1]=P.g,or[N*3+2]=P.b;let z=p.tr?p.tr===bt:bt&&bt.vtid===p.v.tid;Ri[N]=z?22:r.dist<45?17:14,zr[N]=z?3.5:2.2;let ct=p.real&&p.stop==="via"||!!p.broke,St=p.cancel||p.broke?[.86,.15,.15]:p.dl>10?[.86,.15,.15]:p.dl>5?[.92,.48,.05]:p.dl>=1?[.98,.8,.08]:[.09,.64,.29];(p.live&&p.dl>=5||z||ct)&&(ms[D*3]=p.p.w[0],ms[D*3+1]=p.p.w[1],ms[D*3+2]=$+.01,$a.set(z?St:ct?[.86,.15,.15]:[.98,.45,.09],D*3),Va[D]=Ri[N]+(z?16+5*Math.sin(o/220):ct?10+3*Math.sin(o/400):8),El[D]=z?2:3,D++),N++}if(Ci.setDrawRange(0,N),qi.setDrawRange(0,D),["position","fill","size","bw"].forEach(p=>{Ci.attributes[p].needsUpdate=!0,qi.attributes[p].needsUpdate=!0}),Ci.attributes.ang.needsUpdate=!0,Ut){let p=re.find(E=>E.tr===Ut);if(p){let E=0,L=innerHeight,z=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ct=x("#rc").getBoundingClientRect();innerWidth<=640&&(z&&(E=z.bottom),L=Math.min(L,ct.top));let St=E+(L-E)/2,Q=St-innerHeight/2,gt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=p.p.w[0]-Math.sin(r.yaw)*Q*gt,s.ty=p.p.w[1]+Math.cos(r.yaw)*Q*gt}else w()&&ie().live&&(Ut=null)}let B=it(Math.floor(g.min+1e-6));B!==Tn&&(Tn=B,x("#ctime").textContent=B),x("#ntr").textContent=String(re.length),x("#ntrl").textContent=y?__t(16):__t(17);{let p=ht.size<G.length?[...ht].sort(F).join(", "):"",E=x("#ccount"),L=It.cur?`\u23EA ${re.length}${__t(18)}${It.cur.sn.t} \xB7 ${Object.values(It.cur.sn.d).filter(z=>z>=60).length}${__t(19)}`:!g.live&&g.min<vt(new Date).min-1&&!Dt?`${__t(20)}${Ne.hoy&&Ne.hoy.snaps&&Ne.hoy.snaps.some(z=>z.d)?`${__t(21)}${Ne.hoy.snaps.find(z=>z.d).t}`:__t(22)}`:y&&!Ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${us(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:y&&!re.some(z=>z.real)&&to(ht).length?`\u{1F4E1} ${__t(25)}${p?` <small>\xB7 ${m(p)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${re.length} ${y?__t(27):__t(28)}${p?` <small>\xB7 ${m(p)}</small>`:""}${y&&V.okVP?(()=>{let z=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${z<3?" new":""}">\u25CF ${__t(29)}${us(z+" s")}</small>`})():""}`;E&&E._t!==L&&(E.innerHTML=L,E._t=L)}{let p=x("#p");p&&p.classList.toggle("ttf",!g.live||!!Dt)}let H=new Date;if(x("#cdate").textContent=g.live?__t(30):Dt?__t(31)+Dt:wi?__t(32):__t(33),M.k<0?x("#src").innerHTML=`${__t(34)}${$e(t.days[0])}${__t(35)}${$e(t.days[t.days.length-1])}${__t(36)}`:y?x("#src").textContent=`${Ue()?__t(37):__t(38)}${us(fu(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(p=>p.ts),0))))}`:U()&&g.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),g.live){let p=Math.round(g.min),E=x("#tsl");document.activeElement!==E&&(E.value=p<240?p+1440:p)}{let p=bt?String(bt.num||bt.vtid||""):"";p!==Qt._sk&&(Qt._sk=p,Re(!0))}return Re(),!Qt._sp&&(y||!g.live||U()||!V.url)&&(Qt._sp=1,window.__splashOff&&window.__splashOff()),o-en>3e3&&(bt||pe>=0||ge||At||Jt)&&(en=o,Oe()),nt(),!0}let In=-1,Fe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Vn=[],wn=document.createElement("button");wn.type="button",wn.id="mbtn",wn.title=__t(44),wn.innerHTML=__t(45),wn.onclick=()=>{Fe=!Fe;try{localStorage.setItem("rod_mun",Fe?"1":"")}catch{}wn.classList.toggle("on",Fe),a(),Ii()},wn.classList.toggle("on",Fe),document.body.appendChild(wn);let Yi=I.slice().sort((o,c)=>c.pop-o.pop);function Us(o){if(o._a)return o._a;let c=null,f=0;for(let g of o.rings||[]){let y=g[0];if(!y)continue;let M=0,P=0,N=0;for(let D=0,B=y.length;D<B;D+=2){let H=y[D],p=y[D+1],E=y[(D+2)%B],L=y[(D+3)%B],z=H*L-E*p;M+=z,P+=(H+E)*z,N+=(p+L)*z}Math.abs(M)>f&&(f=Math.abs(M),c=[P/(3*M),N/(3*M)])}return o._a=c?[(c[0]-h)*l,(c[1]-u)*l]:[o.cx,o.cy]}let nn=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,mn=[0,7.6,6.7,6,5.4],Ji=[0,17,15,13,12],ln=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Ii(){let o=s.tilt<.06&&r.tilt<.08;wn.classList.toggle("show",o);let c=0;if(Fe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(M=>M.offsetParent!==null||M.style.display==="block").map(M=>{let P=M.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(M=>M[2]>M[0]),g=r.dist,y=g>160?5e4:g>130?2e4:g>105?8e3:g>80?3e3:g>62?800:0;for(let M of Yi){let P=nn(M.pop);if(M.pop<y)break;let N=Us(M);if(Sn.set(N[0],N[1],$).project(n),Math.abs(Sn.x)>1.02||Math.abs(Sn.y)>1.02)continue;let D=(Sn.x*.5+.5)*innerWidth,B=(-Sn.y*.5+.5)*innerHeight,H=ln(M.name),p=H.length*mn[P]+8,E=Ji[P],L=[D-p/2,B-E/2,D+p/2,B+E/2];if(f.some(ct=>L[0]<ct[2]&&ct[0]<L[2]&&L[1]<ct[3]&&ct[1]<L[3]))continue;f.push(L);let z=Vn[c]||(Vn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));z.isConnected||document.body.appendChild(z),z._n!==H&&(z.textContent=H,z._n=H),z._t!==P&&(z.className="mlab t"+P,z._t=P),z.style.transform=`translate(${Math.round(D)}px,${Math.round(B)}px) translate(-50%,-50%)`,z.style.display="block",c++}}for(;c<Vn.length;c++)Vn[c].style.display="none"}let Ne={at:0,hoy:null,ayer:null,err:""},Cl="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Rl(){Date.now()-Ne.at<5*6e4||(Ne.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(Cl+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null))).then(([o,c,f])=>{Ne.hoy=o,Ne.ayer=c,Ne.hist=f,Ne.tr=null,Ne.err=o?"":__t(46),At&&(d._h="",Oe()),Re(!0)}))}function Rg(o){let c={};for(let g of o&&o.snaps||[])for(let y of g.r||[]){let M=/^\d+[A-Z](\d+)/.exec(y);M&&(c[M[1]]=c[M[1]]||[]).push(Math.max(0,g.d&&g.d[y]||0)/60)}let f={};for(let g in c){let y=c[g].sort((M,P)=>M-P);f[g]=Math.round(y[y.length>>1])}return f}function Ru(o){if(!Ne.tr){let f=new Map;for(let g of Ne.hist&&Ne.hist.days||[])f.set(g.day,g.tr);for(let g of[Ne.ayer,Ne.hoy])if(g&&g.day&&!f.has(g.day)){let y=Rg(g);Object.keys(y).length&&f.set(g.day,y)}Ne.tr=f}let c=[...Ne.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,g)=>f+g,0)/c.length}:null}let Fs=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",gs={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Kf=o=>o>10?gs.b:o>5?gs.w:o>=1?gs.y:gs.g,lr=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Ga(o,c,f){return`<div class="sbars">${o.map(g=>`<div class="sbar" title="${m(g.tip||"")}"><span class="sl">${g.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(g.w*100))}%;background:${g.c}"></i></span><b class="sv" style="color:${g.c===gs.y?"var(--svy,#a16207)":g.c===gs.w?"var(--svw,#c2410c)":g.c}">${g.val}</b></div>`).join("")}</div>`}function Ig(o){if(o=(o||[]).filter(Q=>Q.n>=10),!o||o.length<2){let Q=o&&o[0];return Q?`${__t(47)}${Q.t}: ${Math.round(Q.ok/Q.n*100)}${__t(48)}${Q.n}${__t(49)}`:__t(50)}let c=Q=>{let[gt,j]=Q.t.split(":").map(Number);return gt*60+j},f=c(o[0]),g=Math.max(f+60,c(o[o.length-1])),y=300,M=112,P=24,N=Q=>P+(Q-f)*(y-P-8)/(g-f),D=Q=>8+(100-Q)/100*(M-26),B=Q=>Q.n?Q.ok/Q.n*100:100,H=o.map(Q=>[N(c(Q)),D(B(Q)),Q]),p=Q=>Q[0].toFixed(1)+","+Q[1].toFixed(1),E=[],L=[];H.forEach((Q,gt)=>{gt&&c(Q[2])-c(H[gt-1][2])>45&&(E.push(L),L=[]),L.push(Q)}),E.push(L);let z=H[H.length-1],ct=[];for(let Q=Math.ceil(f/180)*3;Q*60<g;Q+=3)Q*60>f+20&&ct.push(Q);let St=Math.round(o.reduce((Q,gt)=>Q+gt.ok,0)/Math.max(1,o.reduce((Q,gt)=>Q+gt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${y} ${M}${__t(51)}${[100,75,50,25].map(Q=>`<line x1="${P}" x2="${y-4}" y1="${D(Q)}" y2="${D(Q)}" class="gl"/><text x="2" y="${D(Q)+3}" class="ax">${Q}%</text>`).join("")}
      <line x1="${P}" x2="${y-4}" y1="${D(St)}" y2="${D(St)}" class="avg"/>
      ${E.filter(Q=>Q.length).map(Q=>`<polygon points="${p([Q[0][0],D(0)])} ${Q.map(p).join(" ")} ${p([Q[Q.length-1][0],D(0)])}" class="ar"/><polyline points="${Q.map(p).join(" ")}" class="ln"/>`).join("")}
      ${H.map(([Q,gt,j])=>`<circle cx="${Q.toFixed(1)}" cy="${gt.toFixed(1)}" r="6" class="hit"><title>${j.t} \xB7 ${Math.round(B(j))}${__t(52)}${j.n}${__t(53)}${j.d5}${__t(54)}${lr(j.avg)}${j.nd?` \xB7 ${j.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${z[0].toFixed(1)}" cy="${z[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(z[0],y-30).toFixed(1)}" y="${(z[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(B(z[2]))}%</text>
      ${ct.map(Q=>`<text x="${N(Q*60).toFixed(1)}" y="${M-4}" class="ax" text-anchor="middle">${String(Q).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${M-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${St}%)</small>`}function Pg(){Rl();let o=ie(),c=re.filter(N=>N.real&&w()&&o.live),f=c.filter(N=>V.delays.has(N.v.tid)),g=f.length,y=c.length-g,M=`${__t(57)}`;if(g){let N=f.filter(gt=>gt.dl<3).length,D=f.filter(gt=>gt.dl>=5).length,B=f.filter(gt=>gt.stop==="via").length,H=Math.round(N/g*100);M+=`${__t(58)}${g}${__t(59)}${y?` \xB7 ${y}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Fs(H)}"><b>${H}${__t(60)}${Fs(100-D/g*100*2)}" title="${Math.round(D/g*100)}${__t(61)}${D}${__t(62)}${B===0?"g":B<=2?"w":"b"}"><b>${B}${__t(63)}`;let p=new Map;f.forEach(gt=>{let j=gt.fam,_e=p.get(j)||{n:0,ok:0,sum:0};_e.n++,_e.ok+=gt.dl<3,_e.sum+=Math.max(0,gt.dl),p.set(j,_e)});let E=[...p].filter(([gt])=>X[gt]).sort((gt,j)=>gt[1].ok/gt[1].n-j[1].ok/j[1].n||j[1].sum/j[1].n-gt[1].sum/gt[1].n),L=E.filter(([,gt])=>gt.ok<gt.n),z=E.filter(([,gt])=>gt.ok===gt.n);M+=`${__t(65)}`+(L.length?"":__t(66))+Ga(L.map(([gt,j])=>({lab:An(gt),w:j.ok/j.n,c:gs[Fs(j.ok/j.n*100)],val:`${Math.round(j.ok/j.n*100)}% <small>${lr(j.sum/j.n)}</small>`,tip:`${gt}: ${j.ok}${__t(67)}${j.n}${__t(68)}${lr(j.sum/j.n)}`})))+(z.length?`${__t(69)}${z.map(([gt])=>An(gt)).join(" ")}</p>`:"");let ct=new Map;f.forEach(gt=>{if(!gt.tr||gt.v.next==null||gt.v.next<0||gt.v.pre)return;let j=gt.tr.pat.stops[gt.v.next],_e=ct.get(j)||{n:0,sum:0};_e.n++,_e.sum+=Math.max(0,gt.dl),ct.set(j,_e)});let St=[...ct].filter(([,gt])=>gt.sum/gt.n>=1).sort((gt,j)=>j[1].sum/j[1].n-gt[1].sum/gt[1].n).slice(0,8),Q=St.length?St[0][1].sum/St[0][1].n:1;M+=`${__t(70)}`+(St.length?Ga(St.map(([gt,j])=>({lab:`<span class="sn" data-gs="${gt}">${m(T[gt].n)}</span>`,w:j.sum/j.n/Q,c:Kf(j.sum/j.n),val:`${lr(j.sum/j.n)} <small>${j.n} ${j.n===1?"tren":__t(71)}</small>`,tip:`${T[gt].n}: ${j.n}${__t(72)}${lr(j.sum/j.n)}${__t(73)}`}))):__t(74))}else M+=`${__t(75)}`;let P=Ne.hoy;M+=`<button type="button" class="hmore" data-cols>${fn.on?__t(76):__t(77)}</button>`;{eo("");let N=[...Di.m].filter(([D,B])=>X[D]&&B[0]>=3).map(([D,B])=>[D,B[1]/B[0]]).sort((D,B)=>D[1]-B[1]);N.length&&!w()?M+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:N.length&&(M+=`${__t(80)}`+Ga(N.slice(0,8).map(([D,B])=>({lab:An(D),w:B,c:gs[Fs(B*100)],val:`${Math.round(B*100)}%`,tip:`${D}: ${Math.round(B*100)}${__t(81)}`}))))}{let N=(L,z)=>{let ct=(L&&L.snaps||[]).filter(gt=>gt.n&&(!z||gt.t<=z)),St=ct.reduce((gt,j)=>gt+j.n,0),Q=ct.reduce((gt,j)=>gt+j.ok,0);return St?Q/St*100:null},D=(Ne.hoy&&Ne.hoy.snaps||[]).filter(L=>L.n).map(L=>L.t).pop(),B=N(Ne.hoy),H=N(Ne.ayer,D),p=B!=null?Math.round(B):null,E=H!=null?Math.round(H):null;B!=null&&(M+=`${__t(82)}${Fs(B)}">${Math.round(B)}${__t(83)}${H!=null?`<span>${D?__t(84):__t(85)} <b class="${Fs(H)}">${E} %</b></span><span>${p>E?__t(86):p<E?__t(87):__t(88)}</span>`:""}</div>`)}if(M+=`${__t(89)}`,P&&P.snaps){M+=Ig(P.snaps);let N=Object.entries(P.st||{}).map(([H,p])=>[Gt.get(H),p]).filter(([H,p])=>H!=null&&p.n>=3).map(([H,p])=>[H,p.sum/p.n/60,p]).filter(H=>H[1]>=1).sort((H,p)=>p[1]-H[1]).slice(0,8);if(N.length){let H=N[0][1];M+=`${__t(90)}`+Ga(N.map(([p,E,L])=>({lab:`<span class="sn" data-gs="${p}">${m(T[p].n)}</span>`,w:E/H,c:Kf(E),val:`${lr(E)}${__t(91)}${Math.round(L.max/60)}</small>`,tip:`${T[p].n}: ${L.n}${__t(92)}${L.d5}${__t(93)}${Math.round(L.max/60)} min`})))}let D=Object.entries(P.lines||{}).filter(([H,p])=>X[H]&&p.n>=3).sort((H,p)=>H[1].ok/H[1].n-p[1].ok/p[1].n);D.length&&(M+=`${__t(94)}`+Ga(D.map(([H,p])=>({lab:An(H),w:p.ok/p.n,c:gs[Fs(p.ok/p.n*100)],val:`${Math.round(p.ok/p.n*100)}% <small>${lr(p.sum/p.n/60)}</small>`,tip:`${H}${__t(95)}${Math.round(p.ok/p.n*100)}${__t(96)}${Math.round(p.max/60)} min`}))));let B=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;M+=`<small class="snote">${B>40?`${__t(98)}${us(B<90?Math.round(B)+" min":B<2160?Math.round(B/60)+" h":Math.round(B/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else M+=`<p class="snote">${Ne.at?__t(102):__t(103)}</p>`;return M+"</div>"}function Lg(o){let c=ie(),f=re.filter(E=>(E.fam||E.tr&&E.tr.fam)===o),g=f.filter(E=>E.real),y=f.length,M=f.filter(E=>E.dl>=5).length,P=f.filter(E=>E.dl<3).length,N=f.filter(E=>E.stop==="via"||E.broke).length,D=V.alerts.filter(E=>E.fams.has(o)),B=E=>{let L=E.tr;if(!L)return"";let z=E.v;if(E.real&&z){let St=z.next>=0?T[L.pat.stops[z.next]].n:"";return z.atStop>=0?`${__t(104)}${T[L.pat.stops[z.atStop]].n}`:St?`${__t(105)}${St}`:""}let ct=E.p;return ct&&ct.next!=null&&ct.next>=0?`${__t(105)}${T[L.pat.stops[ct.next]].n}`:""},H=f.slice().sort((E,L)=>L.dl-E.dl).slice(0,40).map(E=>{let L=E.tr;return`<li class="go${Ya({num:L?L.num:E.v.num,tid:L?L.tid:E.v.tid})?" sel":""}" data-gt="${m(L?L.num:E.v.num)}|${m(E.real?E.v.tid:L?L.tid:"")}"><b>${m(L?L.num:E.v.num)}</b><span>${L?bi(T[L.pat.stops[L.pat.stops.length-1]].n,o):""} <small>${m(B(E))}</small></span>${E.dl>=1?`<em class="dl ${Pi(E.dl)}">+${Math.round(E.dl)}</em>`:__t(106)}</li>`}).join(""),p=eo(o);return`<div class="tc sts" style="--c:${X[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${An(o)}${__t(107)}${c.live?`${__t(113)}${y}${__t(114)}${g.length<y?` (${g.length}${__t(115)}`:""}`:`${__t(116)}${it(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${y?Fs(P/y*100):""}"><b>${y?Math.round(P/y*100)+"%":"\u2014"}${__t(108)}${M?M/Math.max(1,y)>.2?"b":"w":"g"}"><b>${M}${__t(109)}${N?"b":"g"}"><b>${N}${__t(110)}${D.length?Dg(D):__t(117)}${p<.7?`${__t(118)}${Math.round(p*100)}${__t(119)}`:""}${__t(111)}${H||__t(120)}${__t(112)}`}let Dg=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${ja(c)} ${m(c.txt)} <small>${Ka(c)}</small></p>`).join("")}</div>`,fn={on:!1,mesh:null};function Qf(){let o=Ne.hoy,c=[];if(o&&o.st)for(let[f,g]of Object.entries(o.st)){let y=Gt.get(f);y!=null&&g.n>=2&&c.push([y,g.sum/g.n/60,g.n])}if(!c.length){let f=new Map;re.forEach(g=>{if(!g.real||!g.tr||g.v.next==null||g.v.next<0||g.v.pre||!V.delays.has(g.v.tid))return;let y=g.tr.pat.stops[g.v.next],M=f.get(y)||[0,0];M[0]+=Math.max(0,g.dl),M[1]++,f.set(y,M)}),f.forEach((g,y)=>c.push([y,g[0]/g[1],g[1]]))}return c}let tp=()=>Math.min(1,Math.max(.22,r.dist/110));function Ng(){if(!fn.mesh||!fn.d)return;let o=tp();if(Math.abs(o-fn.r)<.04)return;fn.r=o;let c=new We;fn.d.forEach(([f,g],y)=>{c.makeScale(o,o,.3+Math.min(g,40)*.3),c.setPosition(T[f].w[0],T[f].w[1],$),fn.mesh.setMatrixAt(y,c)}),fn.mesh.instanceMatrix.needsUpdate=!0,a()}function Ug(){if(fn.mesh&&(e.remove(fn.mesh),fn.mesh.geometry.dispose(),fn.mesh.material.dispose(),fn.mesh=null),!fn.on){a();return}let o=Qf();if(!o.length){sn(__t(121)),fn.on=!1;return}let c=new Bo(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new wr({fog:!1}),g=new No(c,f,o.length),y=new We,M=new xe;fn.d=o,fn.r=tp(),o.forEach(([P,N],D)=>{let B=.3+Math.min(N,40)*.3;y.makeScale(fn.r,fn.r,B),y.setPosition(T[P].w[0],T[P].w[1],$),g.setMatrixAt(D,y),M.set(N>10?"#dc2626":N>5?"#ea7a0c":N>=1?"#eab308":"#16a34a"),g.setColorAt(D,M)}),g.renderOrder=25,g.frustumCulled=!1,e.add(g),fn.mesh=g,s.tilt<.5&&(s.tilt=.85),a()}let $r=document.createElement("button");$r.type="button",$r.id="sbtn",$r.title=__t(122),$r.innerHTML=__t(123),$r.onclick=()=>{At=!At,At&&(Ft=ge=!1,Ne.at=0),d._h="",Oe(),a()},document.body.appendChild($r);function Fg(){r.dist<45!=In<45&&(In=r.dist,$n()),Ng(),Og(),Ii()}let _s=[],Sn=new Y;function Og(){let o=0;if(fn.on){let f=Qf().sort((y,M)=>M[1]-y[1]),g=[];for(let[y,M]of f){if(o>=30)break;if(Sn.set(T[y].w[0],T[y].w[1],$).project(n),Sn.z>1||Math.abs(Sn.x)>1||Math.abs(Sn.y)>1)continue;let P=(Sn.x*.5+.5)*innerWidth,N=(-Sn.y*.5+.5)*innerHeight;if(g.some(([B,H])=>Math.abs(B-P)<90&&Math.abs(H-N)<18))continue;g.push([P,N]);let D=_s[o]||(_s[o]=Object.assign(document.createElement("div"),{className:"slab"}));D.isConnected||document.body.appendChild(D),D.textContent=T[y].n+" +"+Math.round(M)+"\u2032",D.dataset.i=y,D.style.display="block",D.style.transform=`translate(${Math.round(P+8)}px,${Math.round(N-8)}px)`,o++}for(;o<_s.length;o++)_s[o].style.display="none";return}if(r.dist<30){let f=[];for(let g=0;g<ee;g++)zn[g]<4||(Sn.set(T[g].w[0],T[g].w[1],$).project(n),!(Sn.z>1||Math.abs(Sn.x)>1.05||Math.abs(Sn.y)>1.05)&&f.push([g,(Sn.x*.5+.5)*innerWidth,(-Sn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[g,y,M]of f){let P=_s[o]||(_s[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=T[g].n,P.dataset.i=g,P.style.display="block",P.style.transform=`translate(${Math.round(y+8)}px,${Math.round(M-7)}px)`,o++}}for(;o<_s.length;o++)_s[o].style.display="none"}function Il(o){return Sn.set(o[0],o[1],$).project(n),[(Sn.x*.5+.5)*innerWidth,(-Sn.y*.5+.5)*innerHeight,Sn.z]}function ep(o,c,f,g){let y=null,M=f*f;for(let P of re){let[N,D,B]=Il(P.p.w);if(B>1)continue;let H=(N-o)**2+(D-c)**2;H<M&&(M=H,y={a:P})}if(y)return y;M=g*g;for(let P=0;P<ee;P++){if(!zn[P])continue;let[N,D,B]=Il(T[P].w);if(B>1)continue;let H=(N-o)**2+(D-c)**2;H<M&&(M=H,y={s:P})}return y}let cr=!1;window.__rodHide=()=>{cr=!0},document.addEventListener("click",o=>{cr&&!o.target.closest("#mcs, canvas")&&(cr=!1)},!0),window.__rodTap=(o,c)=>{let f=null,g=1e9;for(let M of _s){if(M.style.display==="none")continue;let P=M.getBoundingClientRect();if(o>=P.left-4&&o<=P.right+4&&c>=P.top-4&&c<=P.bottom+4){let N=Math.abs(c-(P.top+P.bottom)/2)*4+(o-P.left);N<g&&(g=N,f=M)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let y=ep(o,c,24,18);return y&&(y.a||y.s!=null)&&(cr=!1),y&&(y.a||y.s!=null)&&(ne.st=-1),y&&y.a?(Ft=!1,ge=!1,At=!1,bt=y.a.tr||{vtid:y.a.v.tid},pe=-1,Ut=null,$n(),Oe(),ye=0,a(),!0):y&&y.s!=null?(Ft=!1,ge=!1,At=!1,pe=y.s,bt=null,Ut=null,$n(),Oe(),a(),!0):!1},window.__rodHover=(o,c)=>{let f=ep(o,c,14,10);if(f&&f.a){let g=f.a,y=g.tr?T[g.tr.pat.stops[g.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${g.c}">\u25A0</span> ${m(g.fam||g.tr&&g.tr.fam||"?")}${__t(124)}${m(g.tr?g.tr.num:g.v.num)}</b><small>${y?__t(105)+m(y):""}${g.real?(g.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(g.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${m(T[f.s].n)}</b><small>${[...T[f.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ne.st=-1,cr=!1,Ft=ge=At=!1,bt=null,Ut=null,pe=o,$n(),d._h="",Oe(),a()};{let o=x("#rc"),c=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(g=>g.text()).then(g=>{let y=(g.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];y&&f&&y!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Rl()}catch{}},2500),setInterval(()=>{try{Ne.at=0,Rl()}catch{}},15*6e4);let ci={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Wa=matchMedia("(prefers-color-scheme: dark)");function Pl(){let o=ci.mode==="dark"||ci.mode==="auto"&&Wa.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<ee;f++)qe.set(o?[.06,.08,.11]:[1,1,1],f*3);se.attributes.fill.needsUpdate=!0,bl.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),hr.textContent=ci.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ci.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",hr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ci.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let hr=document.createElement("button");hr.type="button",hr.id="tbtn",hr.onclick=()=>{ci.mode=ci.mode==="auto"?Wa.matches?"light":"dark":ci.mode==="dark"?"light":"dark",ci.mode==="dark"===Wa.matches&&(ci.mode="auto");try{localStorage.setItem("rod_theme",ci.mode)}catch{}Pl(),sn(hr.title)},document.body.appendChild(hr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Wa.addEventListener&&Wa.addEventListener("change",Pl),Pl(),window.__rodTick=Qt,window.__rodFrame=Fg,window.__rodResize=()=>{Yt.resolution.set(innerWidth,innerHeight),$t.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Mi={st:-1,f:new Set},np=o=>{let c=[...T[o].fams].sort(F);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Mi.f.size?"":"on"}${__t(133)}`:""}${c.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${Mi.f.size&&!Mi.f.has(f)?"off":""}${ht.has(f)?"":" hid"}" style="--c:${X[f]}">${m(f)}</button>`).join("")}</div>${c.some(f=>!ht.has(f))?__t(134):""}`},Bg=o=>{let c=(o||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),g=parseInt(c.slice(2,4),16),y=parseInt(c.slice(4,6),16);return(.299*f+.587*g+.114*y)/255>.62?"#1d2330":"#fff"},bi=(o,c)=>{let f=X[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${Bg(f)}" title="${m(c||"")}">${m(o)}</span>`},Ll=o=>{let c=T[o]&&T[o].id;return Ke.st.includes(c)?"\u{1F3E0} ":Ge.st.includes(c)?"\u{1F4BC} ":""},Pi=o=>o>10?"d-hi":o>5?"d-md":"d-lo",kg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Xa={ref:null,m:new Map};function Iu(o){if(Xa.ref!==V.alerts){Xa.ref=V.alerts,Xa.m=new Map;for(let c of V.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let g of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Xa.m.set(g[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return Xa.m.get(String(o))||null}let qa={ref:null,m:new Map};function ip(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if(qa.ref!==V.alerts){qa.ref=V.alerts,qa.m=new Map;for(let g of V.alerts)if(g.src==="Rodalies"&&kg.test(g.es||g.txt))for(let y of(g.es||g.txt).matchAll(/\b(\d{4,6})\b/g))qa.m.set(y[1],g)}let f=qa.m.get(c);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Ya=o=>{try{let c=bt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},sp=(o,c)=>{let f=A(o,c.min-1,c.min+240).sort((g,y)=>g.est-y.est).slice(0,6);return f.length?`${__t(135)}${f.map(g=>`<li><b>${it(g.est)}</b>${An(g.fam)}<span>${bi(g.dest,g.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Li=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),zg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Li))}catch{}},rp=o=>!!o&&Li.some(c=>c.num===String(o.num)),be=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),Os=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(be))}catch{}},Dl=(o,c)=>!!(be&&o&&be.num===String(o.num)&&be.sid===T[o.pat.stops[c]].id);function Nl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}sn(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function $g(){if(!be||be.done)return;let o=ie();if(!o.live)return;let c=t.days.indexOf(o.ymd),f=(tt[c]||[]).find(D=>String(D.num)===be.num)||(tt[c-1]||[]).find(D=>String(D.num)===be.num);if(!f)return;let g=f.pat.stops.findIndex(D=>T[D].id===be.sid);if(g<0)return;let y=ft(f),M=typeof y=="number"?Math.max(0,y/60):0,P=f.day===c-1?1440:0,N=f.t0+f.pat.t[2*g]+M-P;if(N-o.min<-3){be.done=!0,Os();return}if(window.__schedAt&&N-2-o.min>.1&&(be.sch==null||Math.abs(be.sch-N)>=.5)&&(be.sch=N,be.nat=Date.now()+(N-2-o.min)*6e4,Os(),window.__schedAt(7701,`${__t(136)}${T[f.pat.stops[g]].n}`,__t(137)+` (${it(N)})`+(D=>D?` \xB7 ${__t(138)} ${D.fam} ${__t(139)} ${it(D.est)}${D.plat?__t(140)+D.plat:""}`:"")(Vl.get(be.sid)),Date.now()+(N-2-o.min)*6e4)),N-o.min<=2){be.done=!0,Os();let D=Vl.get(be.sid),B=D?` \xB7 ${D.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${D.fam} ${__t(139)} ${it(D.est)}${D.plat?__t(140)+D.plat:""}`:"",H=Math.round(N-o.min),E=(H>=1?`${__t(144)} ${H}${__t(143)}${it(N)}) \xB7 ${__t(145)}`:`${__t(146)} (${it(N)}) \xB7 ${__t(145)}`)+B;window.__schedAt&&be.nat&&Date.now()>=be.nat-2e4?document.hidden||Nl(`${__t(136)}${T[f.pat.stops[g]].n}`,E):(window.__schedOff&&window.__schedOff(7701),Nl(`${__t(136)}${T[f.pat.stops[g]].n}`,E))}}function Pu(o,c){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),g=tt[c]||[],y=(N,D)=>N.t0+N.pat.t[2*D+1],M=null,P=11;for(let N of g){let D=N.pat.stops.findIndex(H=>T[H].id===o.sid);if(D<0||D===N.pat.stops.length-1)continue;let B=Math.abs(y(N,D)-f)+(String(N.num)===o.num?-5:0)+(N.fam===o.fam?0:20)+(o.dest&&T[N.pat.stops[N.pat.stops.length-1]].id!==o.dest?3:0);B<P&&(P=B,M=N)}return M}let Ul=new Set;function Vg(){if(!Li.length)return;let o=ie();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let f of Li){let g=Pu(f,c);if(!g)continue;let y=g.pat.stops.findIndex(H=>T[H].id===f.sid);if(y<0)continue;let M=g.t0+g.pat.t[2*y+1],P=ft(g),N=typeof P=="number"?P/60:0,D=M-o.min;if(D<-2||D>60)continue;let B=o.ymd+f.num+(P==="X"?"X":N>=10?10:N>=5?5:0);Ul.has(B)||(P==="X"||N>=5?(Ul.add(B),Nl(`${__t(147)}${it(M)} ${P==="X"?__t(148):`${__t(149)}${Math.round(N)} min`}`,`${g.fam} ${g.num}${__t(150)}${T[g.pat.stops[y]].n}${P==="X"?"":`${__t(151)}${it(M+N)}`}`)):D<=20&&!Ul.has(o.ymd+f.num+"ok")&&V.vp.has(g.tid)&&(Ul.add(o.ymd+f.num+"ok"),sn(`${__t(147)}${it(M)}${__t(152)}`)))}}setInterval(()=>{try{$g(),Vg()}catch{}},15e3);let An=o=>`<span class="ln" style="--c:${X[o]}">${m(o)}</span>`;{let o=f=>{let g=/^#?([0-9a-f]{6})$/i.exec(f||"");return g?[0,2,4].map(y=>{let M=parseInt(g[1].slice(y,y+2),16)/255;return M<=.03928?M/12.92:Math.pow((M+.055)/1.055,2.4)}).reduce((y,M,P)=>y+M*[.2126,.7152,.0722][P],0):0},c=[...new Set(Object.values(X))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function ap(o,c){return c?o==="X"?__t(154):o>=60?`<span class="st late ${Pi(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function Lu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,g=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let y=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;y&&(g=Math.min(g,y.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,g)))+"px")}function xs(){try{let o=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!Ze.on||Ze.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(p=>o.style.removeProperty(p)),o._fit=0);return}let y=o.getBoundingClientRect().top,M=c.getBoundingClientRect().top-8,P=Math.max(140,Math.floor(M-y)),N=f&&f.getClientRects().length?f.getBoundingClientRect():null,D=N?Math.max(10,Math.ceil(innerWidth-N.left+8)):10;o._fit=P+"|"+D;let B=o.style,H={"max-height":P+"px",height:"auto",bottom:"auto",width:"auto",right:D+"px"};for(let p in H)(B.getPropertyValue(p)!==H[p]||B.getPropertyPriority(p)!=="important")&&B.setProperty(p,H[p],"important")}catch{}}setInterval(()=>{Ze.on&&Ze.cur==="map"&&xs()},700);try{new MutationObserver(()=>xs()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=xs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=g=>{let y=document.querySelector(g);if(!y||!y.getClientRects().length)return"\u2014";let M=y.getBoundingClientRect();return[M.left,M.top,M.right,M.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Ze.on?Ze.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(xs,80));try{new ResizeObserver(()=>xs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(xs,80));function Oe(){try{Hg()}finally{requestAnimationFrame(xs),window.__rodTabSync&&window.__rodTabSync();try{Lu()}catch{}}}function Hg(){if(!bt&&pe<0&&!ge&&!Ft&&!At&&!Jt){cr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Vu();return}let o=ie(),c="",f=w()&&o.live,g=(p,E)=>V.alerts.filter(L=>[...L.fams].some(z=>p.has(z))||E!=null&&L.stops.has(E)),y=p=>p.length?`<div class="al">${p.slice(0,4).map(E=>`<p>\u26A0\uFE0F ${ja(E)} ${[...E.fams].sort(F).slice(0,6).map(An).join(" ")} ${m(E.txt)} <small>${Ka(E)}</small></p>`).join("")}${p.length>4?`<small>y ${p.length-4}${__t(157)}`:""}</div>`:"",M=bt&&f?re.find(p=>p.real&&(bt.vtid?p.v.tid===bt.vtid:p.tr===bt)):null;if(Jt&&!At&&!Ft&&!ge&&!bt&&pe<0)c=Lg(Jt);else if(At)c=Pg();else if(Ft)c=`${__t(158)}${m(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(ge){let p=V.alerts.filter(E=>[...E.fams].some(L=>ht.has(L))||!E.fams.size);c=`${__t(161)}${p.length}${__t(162)}${p.map(E=>`<div class="al"><p>${ja(E)} ${[...E.fams].sort(F).map(An).join(" ")} <small>${Ka(E)}</small></p><p>${m(E.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(165):`${__t(166)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(M){let p=M.v,E=M.tr,L=Me=>m(T[E.pat.stops[Me]].n),z=E?E.pat.stops.length:0,ct=Gt.get(p.sid),St=ct!=null?m(T[ct].n):m(p.sid),Q=E&&p.atStop>=0?L(p.atStop):"",gt=E&&p.next>=0?L(p.next):St,j=E&&p.next>0?L(p.next-1):"",_e=M.broke||ip(M),we=_e?`<b class="stopv">\u26A0\uFE0F ${_e.why==="aviso"?__t(167):`${__t(168)}${_e.min} min`}</b>${E&&j?`${__t(169)}${j}${__t(170)}${gt}</b>`:""}`:M.stop==="via"&&E?`${__t(171)}${j?`${__t(173)}${j}${__t(170)}${gt}</b>`:`${__t(174)}${gt}</b>`}${__t(172)}${Math.max(1,Math.round(p.still/60))} min`:p.pre&&E?p.prevTr?`${__t(175)}${m(p.prevTr.num)}${__t(176)}${L(0)}</b>${p.prevDl>=1?`${__t(179)}${Math.round(p.prevDl)} min</b>`:""}${__t(177)}${it(p.arrO)}${__t(178)}${it(p.depEst)}</b>${p.preDl>=1?`${__t(180)}${it(p.dep0)})`:""}`:`${__t(181)}${L(0)}${__t(182)}${it(p.dep0+M.dl)}</b>`:Q&&p.before?`Llegando a <b>${Q}</b>`:(p.st==="STOPPED_AT"||M.stop==="st")&&Q?`${__t(183)}${Q}</b>`:Q&&p.next>=0&&p.atStop!==p.next?`${__t(184)}${Q}${__t(176)}${gt}</b>`:j?`${__t(185)}${j}${__t(170)}${gt}</b>`:`${__t(186)}${gt}</b>`,Zt=E&&p.next>=0&&!p.pre?it(no(E,p,p.next,E.t0+E.pat.t[2*p.next]+M.dl)):"",ke=[];if(E){let Me=M.idx>=0?M.idx:0,Ie=p.pre?Math.max(M.dl,p.preDl||0):M.dl,Ye=Ve=>E.t0+E.pat.t[Ve]+Ie;for(let Ve=Me;Ve<z;Ve++)ke.push(`<li class="${Ll(E.pat.stops[Ve])?"mine":""}${Dl(E,Ve)?" alm":""}"><b>${it(no(E,p,Ve,Ye(Ve===0?1:2*Ve)))}</b><span title="${L(Ve)}">${Ll(E.pat.stops[Ve])}${L(Ve)}</span>${Ie>=1?`<em class="dl ${Pi(Ie)}">${p.pre?"\u2248":""}+${Math.round(Ie)}</em>`:""}${Ve>0?`<button type="button" class="abtn" data-alarm="${Ve}" title="${__t(187)}">${Dl(E,Ve)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${M.c}"><button class="x" data-cx>\xD7</button><div>${An(M.fam)}${__t(188)}${m(E?E.num:p.num)}${__t(189)}${E?`<h3 class="rt"><span class="o" title="${L(0)}">${L(0)}</span><span class="ar">\u2192</span>${bi(T[E.pat.stops[z-1]].n,E.fam)}</h3>`:""}
        <p>${we}${Zt?`${__t(190)}${Zt}`:""}${p.plat&&p.st==="STOPPED_AT"&&Q?`${__t(191)}${m(p.plat)}</b>`:""}</p><p>${p.pre&&p.prevTr?p.preDl>=1?`${__t(192)}${Math.round(p.preDl)}${__t(193)}`:__t(194):ap(V.delays.get(p.tid),V.delays.has(p.tid))}${(()=>{let Me=E&&Ru(E.num);return Me&&Me.n>=2?`${__t(195)}${Me.n}${__t(196)}${Me.late?`${__t(197)} <b>${Me.late} ${__t(198)} ${Me.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Me.avg<.5?"0":"+"+Math.round(Me.avg)} min</span>`:""})()}${(()=>{let Me=E&&Iu(E.num);return Me?`<span class="why" title="${m(Me.txt)}">${Me.why?__t(203)+m(Me.why):__t(204)}</span>`:""})()}</p>
        <small>${p.pre?`${__t(205)}${us(fu(M.age))}`:p.est?__t(206):`${__t(207)}${us(fu(M.age))}${M.age>120?__t(208):""}`}</small>
        ${ke.length?`${M.dl>=1||p.pre&&p.preDl>=1?`${__t(209)}`:""}<ol class="stops">${ke.join("")}</ol>`:""}${y(g(new Set([M.fam])))}
        ${Bl(E?E.num:p.num,"",M.fam)}${E?`<div class="rtb two"><button type="button" data-fav>${rp(E)?__t(210):__t(211)}</button><button type="button" data-follow>${zl(E)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(bt&&f&&!bt.pat)c=`${__t(214)}${m(bt.num||bt.vtid||"")}${__t(215)}`;else if(bt){let p=bt,E=p.pat,L=E.stops.length,z=ft(p),ct=typeof z=="number"?z/60:0,St=t.days.indexOf(o.ymd),Q=p.day===St-1?1440:0,gt=o.min+Q-p.t0-ct,j=Ns(p,gt),_e=Ie=>p.t0+E.t[Ie]+ct,we=Ie=>m(T[E.stops[Ie]].n),Zt=__t(216);j&&(Zt=j.moving?`${__t(217)}${we(j.next)}${__t(218)}${it(_e(2*j.next))}`:j.at===L-1?`${__t(219)}${we(L-1)}</b>`:`${__t(183)}${we(j.at)}${__t(220)}${it(_e(2*j.at+1))}`);let ke=j?j.next:0,Me=[];for(let Ie=ke;Ie<L;Ie++)Me.push(`<li class="${Ll(E.stops[Ie])?"mine":""}${Dl(p,Ie)?" alm":""}"><b>${it(no(p,null,Ie,_e(2*Ie)))}</b><span title="${we(Ie)}">${Ll(E.stops[Ie])}${we(Ie)}</span>${ct>=1?`<em class="dl ${Pi(ct)}">+${Math.round(ct)}</em>`:""}${Ie>0?`<button type="button" class="abtn" data-alarm="${Ie}" title="${__t(187)}">${Dl(p,Ie)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${p.c}"><button class="x" data-cx>\xD7</button><div>${An(p.fam)}${__t(188)}${m(p.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${we(0)}">${we(0)}</span><span class="ar">\u2192</span>${bi(T[p.pat.stops[L-1]].n,p.fam)}</h3>
        <p>${Zt}</p><p>${ap(z,z!=null)}${(()=>{let Ie=Ru(p.num);return Ie&&Ie.n>=2?`${__t(195)}${Ie.n}${__t(196)}${Ie.late?`${__t(197)} <b>${Ie.late} ${__t(198)} ${Ie.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ie.avg<.5?"0":"+"+Math.round(Ie.avg)} min</span>`:""})()}${__t(221)}${it(p.t0+E.t[1])}${__t(222)}${it(p.t0+E.t[2*L-2])}${__t(223)}${ct>=1?__t(209):""}<ol class="stops">${Me.join("")}</ol>${Bl(p.num,"",p.fam)}<div class="rtb two"><button type="button" data-fav>${rp(p)?__t(210):__t(211)}</button><button type="button" data-follow>${zl(p)?__t(212):__t(213)}</button></div></div>`}else{let p=pe,E=t.days.indexOf(o.ymd),L=[];Mi.st!==p&&(Mi.st=p,Mi.f.clear());let z=j=>(!X[j]||ht.has(j))&&(!Mi.f.size||Mi.f.has(j));if(E>=0){let j=(_e,we)=>{for(let Zt of _e){if(!z(Zt.fam))continue;let ke=Zt.pat.stops.indexOf(p);if(ke<0||ke===Zt.pat.stops.length-1)continue;let Me=ft(Zt),Ie=typeof Me=="number"?Me/60:0,Ye=Zt.t0+Zt.pat.t[2*ke+1]-we;Ye+Ie<o.min-1||Ye>o.min+360||L.push({tr:Zt,t:Ye,dl:Ie,d:Me,on:V.vp.has(Zt.tid),past:o.min>Zt.t0+Zt.pat.t[1]-we+2})}};j(tt[E],0),E>0&&j(tt[E-1],1440)}L.sort((j,_e)=>j.t+j.dl-_e.t-_e.dl);let ct=T[p].id,St=Ot.get(ct),Q=(f||U()&&o.live)&&V.url;Q&&(!St||Date.now()-St.at>up())&&!St?.loading&&(Ot.set(ct,{...St||{},loading:!0,at:St?St.at:0}),Rt(oe(),"/departures.json?stationId="+ct).then(j=>{Ot.set(ct,{at:Date.now(),d:j}),pe===p&&(d._h="",Oe())}).catch(()=>Ot.set(ct,{at:Date.now(),err:1})));let gt=Q&&St&&St.d&&Array.isArray(St.d.trains)&&St.d.trains.length?St.d.trains:null;if(gt){let j=new Map([...V.vp.values()].map(Zt=>[String((dt.get(Zt.tid)||{}).num||Zt.num),Zt])),_e=new Map(qn(p).map(Zt=>[String(Zt.num),Zt])),we=gt.filter(Zt=>z((Zt.line||{}).id||"")).slice(0,40).map(Zt=>{let ke=String(Zt.commercialNumber||Zt.technicalNumber||""),Me=_e.get(ke),Ie=Me?it(Me.est):(Zt.departureDateHourSelectedStation||"").slice(11,16),Ye=(Zt.line||{}).id||"",Ve=j.get(ke),xn=Me?Math.round(Me.dl)*60:Ve?V.delays.get(Ve.tid):null,mr=Me&&(Me.gone||!Me.live&&Me.est<o.min-1);return`<li class="go${mr?" old":""}${Ya({num:ke,tid:Ve?Ve.tid:""})?" sel":""}" data-gt="${m(ke)}|${Ve?m(Ve.tid):""}"><b>${m(Ie)}</b>${X[Ye]?An(Ye):`<span class="ln" style="--c:#6b7385">${m(Ye||"?")}</span>`}<span>${bi((Zt.destinationStation||{}).name||"",Ye)}${Zt.trainObservations?` \xB7 <i>${m(Zt.trainObservations)}</i>`:""}${mr?` <small class="oldt">${Me.gone?__t(225):__t(226)}</small>`:""}</span>${Zt.trainCancelled?__t(227):typeof xn=="number"&&xn>=60?`<em class="dl ${Pi(xn/60)}">+${Math.round(xn/60)}</em>`:""}${Zt.platformSelectedStation?`${__t(228)}${m(Zt.platformSelectedStation)}</i>`:""}${Ve?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[p].n)}</h3>${np(p)}${Bl("",T[p].id,"")}${__t(229)}${we||__t(231)}</ol>${sp(p,o)}${y(g(T[p].fams,p))}${__t(230)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[p].n)}</h3>${np(p)}${Bl("",T[p].id,"")}
        <small style="margin-top:6px">${f&&V.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${L.slice(0,40).map(j=>`<li class="go${Ya({num:j.tr.num,tid:j.tr.tid})?" sel":""}" data-gt="${m(j.tr.num)}|${m(j.tr.tid)}"><b>${it(j.t+j.dl)}</b>${An(j.tr.fam)}<span>${bi(T[j.tr.pat.stops[j.tr.pat.stops.length-1]].n,j.tr.fam)}</span>${j.d==="X"?__t(227):j.dl>=1?`<em class="dl ${Pi(j.dl)}">+${Math.round(j.dl)}</em>`:""}${f?j.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':j.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${sp(p,o)}${y(g(T[p].fams,p))}${__t(230)}`}let P=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())&&(d.innerHTML=c,d._h=c,d.scrollTop=P),d.style.display="flex",d.classList.toggle("min",cr),Vu(),innerWidth<=640){let p=d.querySelector(".tc");if(p&&!p.querySelector(".mn")){let E=document.createElement("button");E.type="button",E.className="mn",E.setAttribute("aria-label",__t(238)),E.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",E.onclick=z=>{z.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(xs),Lu(),E.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let L=p.querySelector(".x");p.insertBefore(E,L?L.nextSibling:p.firstChild)}}else d.classList.remove("peek");let N=x("#rc");if(innerWidth<=640&&!N.classList.contains("min")&&!Oe.done&&(Oe.done=1,x("#rcgrab").click()),innerWidth<=640){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-p-16)+"px"}else if(innerHeight<=500){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-p-20+"px"}else d.style.top="",d.style.width=At?"390px":"300px",d.style.maxHeight="";xs();let B=d.querySelector("[data-cx]");B&&(B.onclick=p=>{if(p.stopPropagation(),Oe.done=0,At||Ft||ge||Jt&&!bt&&pe<0){At=Ft=ge=!1,bt||pe>=0||(Jt=""),d._h="",Oe(),a();return}if(bt&&ne.st>=0){let E=ne.st;ne.st=-1,bt=null,Ut=null,pe=E,$n(),d._h="",Oe(),ye=0,a();return}if(bt&&zl(bt)){let E=bt,L=[...Mn],z=be?{...be}:null,ct=d.querySelector("[data-follow]");ct&&ct.click(),setTimeout(()=>sn(`${__t(239)} \xB7 ${E.fam||""} ${E.num}`,{label:__t(240),fn:()=>{L.forEach(([St,Q])=>Zi(St,Q)),z&&!be&&(be=z,Os()),ks("map"),Hr({num:String(E.num),tid:E.tid&&V.vp.has(E.tid)?E.tid:"",tr:E}),Ut=bt,d._h="",Oe(),Re(!0),a()}}),0)}ne.st=-1,ge=!1,Ft=!1,At=!1,bt=null,pe=-1,Ut=null,$n(),Oe(),ye=0,a()}),hp(d),d.querySelectorAll("[data-alarm]").forEach(p=>p.onclick=E=>{E.stopPropagation();let L=bt&&bt.pat?bt:dt.get(bt&&bt.vtid)||null;if(!L)return;let z=+p.dataset.alarm,ct=T[L.pat.stops[z]].id;be&&be.num===String(L.num)&&be.sid===ct?(be=null,window.__schedOff&&window.__schedOff(7701),sn(__t(241))):(be={num:String(L.num),sid:ct,at:Date.now()},sn(`${__t(242)}${T[L.pat.stops[z]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Os(),d._h="",Oe()});{let p=d.querySelector("[data-fav]");p&&(p.onclick=E=>{E.stopPropagation();let L=bt&&bt.pat?bt:dt.get(bt&&bt.vtid)||null;if(!L)return;let z=Li.findIndex(ct=>ct.num===String(L.num));if(z>=0)Li.splice(z,1),sn(__t(243));else{let ct=[...Ke.st,...Ge.st,...Pt.st],St=L.pat.stops.find(Q=>ct.includes(T[Q].id))??L.pat.stops[0];Li.push({num:String(L.num),fam:L.fam,sid:T[St].id,dest:T[L.pat.stops[L.pat.stops.length-1]].id,t:it(L.t0+L.pat.t[2*L.pat.stops.indexOf(St)+1])}),sn(`${__t(244)}${L.fam}${__t(245)}${Li[Li.length-1].t}${__t(150)}${T[St].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}zg(),d._h="",Oe(),Re(!0)})}{let p=d.querySelector("[data-share]");p&&(p.onclick=()=>{let E=Jt,L=re.filter(Q=>(Q.fam||Q.tr&&Q.tr.fam)===E),z=L.filter(Q=>Q.dl>=5).sort((Q,gt)=>gt.dl-Q.dl),ct=V.alerts.filter(Q=>Q.fams.has(E)),St=`${E}${__t(247)}${it(ie().min)}: ${L.length}${__t(248)}${z.length}${__t(249)}${z.length?" ("+z.slice(0,4).map(Q=>`${Q.tr?Q.tr.num:Q.v.num} +${Math.round(Q.dl)}`).join(", ")+")":""}.${ct.length?__t(250)+ct[0].txt:__t(251)}`;navigator.share?navigator.share({text:St}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(St),sn(__t(252)+St.slice(0,60)+"\u2026"))})}{let p=d.querySelector("[data-cols]");p&&(p.onclick=()=>{fn.on=!fn.on,Ug(),d._h="",Oe()})}d.querySelectorAll("[data-gs]").forEach(p=>p.onclick=()=>{let E=+p.dataset.gs;At=!1,window.__rodPickStation(E),Object.assign(s,{tx:T[E].w[0],ty:T[E].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(p=>p.onclick=E=>{E.stopPropagation();let L=p.dataset.sf;L?Mi.f.has(L)?Mi.f.delete(L):Mi.f.add(L):Mi.f.clear(),d._h="",Oe()}),d.querySelectorAll("[data-gt]").forEach(p=>p.onclick=()=>{ne.st=pe;let[E,L]=p.dataset.gt.split("|"),z=dt.get(L);Hr({num:E,tid:V.vp.has(L)?L:"",tr:z||null})}),d.querySelectorAll("[data-sethome]").forEach(p=>p.onclick=()=>Gu(pe,p.dataset.sethome));let H=d.querySelector("[data-follow]");H&&(H.onclick=()=>{let p=zl(bt);if(Ut=p?null:bt,!p&&bt&&bt.num!=null){let E=bt.pat.stops,L=String(bt.num),z=null,ct=1e9;for(let St of[Ke,Ge,Pt]){let Q=Pn(St);if(Q==null||!E.includes(Q)||St===Pt&&!Pt.st.length)continue;let gt=qn(Q).find(j=>String(j.num)===L&&!j.gone);gt&&gt.est<ct&&(ct=gt.est,z=St)}z&&Zi(z.key,L),Re(!0)}if(p&&bt&&bt.num!=null){let E=String(bt.num);[...Mn].forEach(([L,z])=>{String(z)===E&&Zi(L,null)}),Yn.num===E&&(Yn.num=""),Lt.tid===E&&(Lt.tid="",Lt.lock=!1,Lt.manual=0,Lt.quiet=Date.now()+10*6e4),be&&be.num===E&&(be=null,Os(),window.__schedOff&&window.__schedOff(7701)),Re(!0)}Ut?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Oe(),a()})}window.__rodCard=Oe;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(bt||pe>=0||ge||Ft)&&(d._h="",Oe())},x("#ver").onclick=()=>{Ft=!0,At=!1,ge=!1,d._h="",Oe()};let Gg={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},Wg={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function op(o){let c={vacio:1,lleno:2,petado:3}[o],f=c?[0,1,2].map(g=>`<rect x="${4+g*6}" y="${14-g*4}" width="4" height="${6+g*4}" rx="1" ${g<c?'fill="currentColor"':""}/>`).join(""):Gg[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${Wg[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let Fl=new Proxy({},{get:(o,c)=>op(c)}),Ja="",Xg=["vacio","lleno","petado",__t(253),"calor","abordo"],qg=["gente","retraso","cancel","ascensor","via"],Yg={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},Ol=o=>(V.tipos||Yg)[o]||o,Du=(o,c)=>(V.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||c&&f.sid===String(c)&&!f.num||o&&c&&f.num===String(o)&&f.sid===String(c)),lp=o=>{let c=Math.round((Date.now()+(V.repSkew||0)-o.at)/6e4);return c<1?__t(265):us(c+" min")},Za=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Bl(o,c,f){if(!V.url||!V.repOk)return"";let g=Du(o,c),y=o?Xg:qg;return`<div class="crowd"><small>${op("gente")} ${__t(267)}${g.length?"":__t(268)}</small>${g.map(M=>`<p><span>${Fl[M.kind]||"\u2022"} <b>${m(Ol(M.kind))}</b> <small>${M.up>1?M.up+__t(269):""}${lp(M)}</small></span>${Za.has(M.id)?"<small>\u2713</small>":`<button type="button" data-rv="${M.id}:1">${__t(270)}</button><button type="button" data-rv="${M.id}:-1">${__t(271)}</button>`}</p>`).join("")}
      <details data-ckd="${m(String(o||"")+"|"+String(c||""))}"${Ja===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(272):__t(273)}</summary><div class="ckb">${y.map(M=>`<button type="button" data-rk="${M}" data-rn="${m(o||"")}" data-rs="${m(c||"")}" data-rl="${m(f||"")}">${Fl[M]} ${m(Ol(M))}</button>`).join("")}${__t(266)}`}async function cp(o,c){try{let g=await(await fetch(oe()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!g.ok){sn(g.err||__t(274));return}if(g.id){Za.add(g.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Za].slice(-300)))}catch{}}sn(c==="/vote"?__t(275):g.n>1?`${__t(276)}${g.n}${__t(277)}`:__t(278));let y=await Rt(oe(),"/reports.json");y&&y.items&&(V.rep=y.items),d._h="",Oe(),Re(!0)}catch{sn(__t(279))}}function hp(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Ja=c.open?c.dataset.ckd:Ja===c.dataset.ckd?"":Ja,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Ja="",cp({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[g,y]=c.dataset.rv.split(":");Za.add(+g);try{localStorage.setItem("rod_votes",JSON.stringify([...Za].slice(-300)))}catch{}cp({id:+g,v:+y},"/vote")})}let kl=0;function sn(o,c){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,c){let g=document.createElement("button");g.type="button",g.className="tact",g.textContent=c.label,g.onclick=y=>{y.stopPropagation(),clearTimeout(kl),f.className="",c.fn()},f.appendChild(g)}f.className="on",clearTimeout(kl),kl=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),f._tap||(f._tap=1,f.onclick=()=>{clearTimeout(kl),f.className=""})}function ja(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(280):m(o.src)}</b>`:""}function Ka(o){if(!o.when)return"";let[c,f]=o.when.split("T"),g=vt(new Date),y=g.ymd.slice(0,4)+"-"+g.ymd.slice(4,6)+"-"+g.ymd.slice(6,8);if(c===y&&f){let M=Math.round(g.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return M<1?__t(265):M<60?us(M+" min"):`${__t(281)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Nu(){let o=x("#alr");if(!o)return;let c=V.alerts.filter(f=>[...f.fams].some(g=>ht.has(g))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(282):__t(283)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{Ft=!1,At=!1,ge=!0,Oe()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(284)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let g=getSelection();g.removeAllRanges(),g.addRange(f),x("#wcopy").textContent=__t(285)}setTimeout(()=>x("#wcopy").textContent=__t(286),2500)};let Jg=Gt.get("71801");function up(){return document.hidden?Mn.size||be?12e4:1e12:3e4}function dp(o,c){let f=T[o].id,g=Ot.get(f);!(q()&&V.url)||g&&(g.loading||Date.now()-g.at<up())||(Ot.set(f,{...g||{},loading:!0,at:g?g.at:0}),Rt(oe(),"/departures.json?stationId="+f).then(y=>{Ot.set(f,{at:Date.now(),d:y}),c&&c()}).catch(()=>Ot.set(f,{at:Date.now(),err:1})))}let fp=o=>+o.slice(0,2)*60+ +o.slice(3,5),Qa={k:-2,m:null};function vs(o){let c=t.days.indexOf(ie().ymd);if(Qa.k!==c){Qa.k=c,Qa.m=new Map;for(let f of tt[c]||[])Qa.m.set(String(f.num),f)}return Qa.m.get(String(o))||null}let Di={at:0,m:new Map},to=o=>w()?(eo(""),[...o].filter(c=>{let f=Di.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(F)):[];function eo(o){if(Date.now()-Di.at>6e4||Di.vp!==V.vp){Di.at=Date.now(),Di.vp=V.vp,Di.m=new Map;let f=ie(),g=t.days.indexOf(f.ymd);if(g>=0)for(let y of tt[g]){let M=f.min-y.t0;if(M<y.pat.t[1]+3||M>y.pat.t[y.pat.t.length-2]-3)continue;let P=Di.m.get(y.fam)||[0,0];P[0]++,V.vp.has(y.tid)&&P[1]++,Di.m.set(y.fam,P)}}let c=Di.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function no(o,c,f,g){let y=T[o.pat.stops[f]].id;if([...Ke.st,...Ge.st].includes(y)){let M=qn(o.pat.stops[f]).find(P=>String(P.num)===String(o.num));if(M&&!M.gone)return M.est}return Uu(o,c,f,0,g)}function pp(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let g=te(o.pat).stopD,y=o.pat.t,M,P,N=g.reduce((D,B,H)=>Math.abs(B-c.dObs)<Math.abs(g[D]-c.dObs)?H:D,0);if(Math.abs(g[N]-c.dObs)<.16||c.atStop===N)M=y[2*N+1]??y[2*N],P=N;else{let D=g.findIndex(H=>H>c.dObs);if(D<=0)return null;let B=Math.min(1,Math.max(0,(c.dObs-g[D-1])/(g[D]-g[D-1]||1)));M=y[2*D-1]+B*(y[2*D]-y[2*D-1]),P=D-1}return{t:vt(new Date).min-f/60,tpos:M,j0:P,sd:g}}function Uu(o,c,f,g,y){let M=pp(o,c);if(!M||f<=M.j0&&!(f===M.j0&&g===1))return y;let P=o.pat.t,N=M.t+(P[2*f+g]??P[2*f])-M.tpos;if(N-M.t>45)return y;let D=(y%1440+1440)%1440,B=((N-D+720)%1440+1440)%1440-720;return B>=-3&&B<=5?y+B:y}function h1(o,c,f,g){let y=pp(o,c);if(!y)return null;let M=Uu(o,c,f,1,y.t+o.pat.t[2*f+1]-y.tpos);return M-g.min>30||M<g.min-1?null:M}function qn(o,c){let f=ie(),g=(w()||U())&&f.live&&!c,y=Ot.get(T[o].id),M=[],P=new Map([...V.vp.values()].map(D=>[String((dt.get(D.tid)||{}).num||D.num),D]));if(g&&y&&y.d&&Array.isArray(y.d.trains)&&y.d.trains.length)for(let D of y.d.trains){let B=(D.departureDateHourSelectedStation||"").slice(11,16);if(!B)continue;let H=String(D.commercialNumber||D.technicalNumber||""),p=P.get(H),E=p?V.delays.get(p.tid):null,L=Math.max(typeof E=="number"?Math.max(0,E/60):0,p&&p.pre&&p.preDl||0),z=fp(B);z<f.min-720&&(z+=1440);let ct=+(D.departureDateHourSelectedStation||"").slice(17,19)||0,St=z+ct/60,Q=p&&dt.get(p.tid)||vs(H),gt=Q?Q.pat.stops.indexOf(o):-1,j=gt>=0?(Q.t0+Q.pat.t[2*gt+1])%1440:null;if(j!=null){for(;j<St-720;)j+=1440;for(;j>St+720;)j-=1440;Math.abs(St-j)>120&&(j=null)}let _e,we;j==null?(_e=ct||!L?St:St+L,we=ct?0:L):ct||Math.abs(St-j)>=1?(_e=St,we=Math.max(0,St-j)):(_e=j+L,we=L);let Zt=!1;if(Q&&!p&&gt>0&&!ct){let ke=t.days.indexOf(f.ymd),Me=Q.day===ke-1?1440:Q.day===ke+1?-1440:0,Ie=Q.t0+Q.pat.t[1]-Me;if(f.min<Ie){let Ye=Ie+(Q.pat.t[2*gt+1]-Q.pat.t[1]);Ye>_e+1&&(_e=Ye,Zt=!0,j!=null&&(we=Math.max(0,_e-j)))}}if(j!=null&&(z=Math.round(j)),p&&Q&&gt>=0){let ke=Uu(Q,p,gt,1,_e);ke!==_e&&(_e=Math.max(ke,f.min),j!=null&&(we=Math.max(0,_e-j)))}M.push({dubious:Zt,rodLive:!!ct,sm:z,est:_e,dl:we,fam:(D.line||{}).id||"",dest:(D.destinationStation||{}).name||"",destId:(D.destinationStation||{}).id||"",plat:D.platformSelectedStation||"",cancel:!!D.trainCancelled,obs:D.trainObservations||"",live:!!p,num:H,tid:p?p.tid:"",tr:p&&dt.get(p.tid)||vs(H),src:"oficial"})}else{let D=t.days.indexOf(f.ymd);if(D<0)return M;let B=(H,p)=>{for(let E of H){let L=E.pat.stops.indexOf(o);if(L<0||L===E.pat.stops.length-1)continue;let z=ft(E),ct=typeof z=="number"?Math.max(0,z/60):0,St=E.t0+E.pat.t[2*L+1]-p;if(St+ct<f.min-1||St>f.min+(f.min>1080||f.min<300?600:360))continue;let Q=E.pat.stops[E.pat.stops.length-1];M.push({sm:St,est:St+ct,dl:ct,fam:E.fam,dest:T[Q].n,destId:T[Q].id,plat:"",cancel:z==="X",obs:"",live:V.vp.has(E.tid),num:E.num,tid:E.tid,tr:E,src:"horario"})}};B(tt[D],0),D>0&&B(tt[D-1],1440),D+1<t.days.length&&f.min>1080&&B(tt[D+1],-1440)}if(g){let D=new Set(M.map(p=>String(p.num))),B=t.days.indexOf(f.ymd),H=(p,E)=>{for(let L of p||[]){if(D.has(String(L.num)))continue;let z=L.pat.stops.indexOf(o);if(z<0||z===L.pat.stops.length-1)continue;let ct=L.t0+L.pat.t[2*z+1]-E;if(ct<f.min-45||ct>f.min+1||!V.vp.get(L.tid))continue;let Q=V.delays.get(L.tid),gt=typeof Q=="number"?Math.max(0,Q/60):0,j=L.pat.stops[L.pat.stops.length-1];M.push({sm:ct,est:ct+gt,dl:gt,fam:L.fam,dest:T[j].n,destId:T[j].id,plat:"",cancel:!1,obs:"",live:!0,num:L.num,tid:L.tid,tr:L,src:"horario"})}};B>=0&&(H(tt[B],0),B>0&&H(tt[B-1],1440));for(let p of M){let E=p.tid&&V.vp.get(p.tid),L=p.tr?p.tr.pat.stops.indexOf(o):-1;p.passed=!!(E&&L>=0&&!E.pre&&E.next!=null&&E.next>=0&&E.next>L&&E.atStop!==L),!p.passed&&p.live&&p.est<f.min&&(p.est=f.min,p.late=!0),p.passed&&(p.gone=!0)}}let N=M.filter(D=>D.gone?f.min-D.est<20:D.est>=f.min-.5).sort((D,B)=>D.est-B.est);{let D=N.filter(B=>B.gone);if(D.length>2){let B=new Set(D.slice(0,D.length-2));N=N.filter(H=>!B.has(H))}}if(!N.filter(D=>!D.gone).length&&M.length&&M[0].src==="oficial"&&!c)return qn(o,!0);for(let D of N){let B=D.num&&Iu(D.num);B&&B.cx&&(D.cancel=!0,D.cxWhy=B.txt)}if(w()&&f.live){let D=t.days.indexOf(f.ymd);for(let B of N){if(B.live||B.cancel||!B.tr)continue;let H=B.tr.day===D-1?1440:B.tr.day===D+1?-1440:0,p=B.tr.t0+B.tr.pat.t[1]-H+(B.dl||0);B.noPos=f.min>p+3&&!B.rodLive,B.ghost=B.noPos&&eo(B.fam)>=.7}}if(c||(N=N.concat(A(o,f.min-.5,f.min+360)).sort((D,B)=>D.est-B.est)),!c&&N.some(D=>D.src==="oficial")){let D=M.filter(p=>p.src==="oficial"),B=Math.max(...D.map(p=>p.sm)),H=new Set(N.map(p=>String(p.num)));N=N.concat(qn(o,!0).filter(p=>!p.gone&&p.sm<=B&&p.est>=f.min-.5&&!H.has(String(p.num))).map(p=>Object.assign(p,{unconf:!0}))).sort((p,E)=>p.est-E.est)}if(N.some(D=>D.src==="oficial")){let D=Math.max(...N.map(H=>H.sm)),B=new Set(N.map(H=>String(H.num)));N=N.concat(qn(o,!0).filter(H=>H.sm>D&&!B.has(String(H.num))))}return N}let mp=(o,c,f,g)=>{let y={key:o,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let M=JSON.parse(localStorage.getItem("rod_"+o)||"null");M&&Object.assign(y,M)}catch{}return!y.st.length&&g&&(y.st=g),y},Ke=mp("home","\u{1F3E0}",__t(287),null),Ge=mp("work","\u{1F4BC}",__t(288),null),Pt={key:"near",ico:"\u{1F4CD}",name:__t(289),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Bs=[Pt,Ke,Ge];try{Pt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Ke.open=!1,Ge.open=!1;function gp(o,c){let f=Mt(o,c),g=Mt(o,c+.009);return 1/Math.hypot(g[0]-f[0],g[1]-f[1])}function Fu(o){if(!navigator.geolocation){Pt.err=__t(290),Re(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:g}=c.coords,y=Mt(f,g),M=gp(f,g),P=T.map((H,p)=>[p,Math.hypot(H.w[0]-y[0],H.w[1]-y[1])*M]).filter(([H])=>T[H].fams.size).sort((H,p)=>H[1]-p[1]),N=P.filter(([,H],p)=>p===0||H<Math.max(2.5,P[0][1]*1.6)).slice(0,3),D=Pt.st[0]!==T[N[0][0]].id;Pt.w=y,Pt.k=M,Pt.acc=c.coords.accuracy!=null?c.coords.accuracy:999,Pt.st=N.map(([H])=>T[H].id),Pt.dist=Object.fromEntries(N.map(([H,p])=>[T[H].id,p])),Pt.fix=Date.now(),Pt.err="",D&&(Pt.i=0);let B=[Ke,Ge].find(H=>H.st.includes(Pt.st[0])&&Pt.dist[Pt.st[0]]<1.5);Re(!0)},c=>{Pt.err=c.code===1?__t(291):__t(292),Re(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let _p=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Fu(!0),400);let Lt={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===vt(new Date).ymd&&(Lt.tid=o.tid,Lt.manual=o.manual||0,Lt.lock=!!o.lock)}catch{}let xp="";setInterval(()=>{let o=Lt.tid+"|"+(Lt.manual||0)+"|"+(Lt.lock?1:0);if(o!==xp){xp=o;try{Lt.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:Lt.tid,manual:Lt.manual||0,lock:!!Lt.lock,at:Date.now(),ymd:vt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Yn={num:"",until:0};function zl(o){return!!o&&(Ut===o||o.num!=null&&[...Mn.values()].some(c=>String(c)===String(o.num)))}let vp=()=>{let o=new Set([...Mn.values()].map(String));return Yn.num&&Yn.until>Date.now()&&o.add(Yn.num),o};function $l(o,c,f){o=String(o),Lt.tid&&Lt.tid!==o&&Lt.no.set(Lt.tid,Date.now()+20*6e4),Lt.tid=o,Lt.cand=null,Lt.lock=c==="lock",Lt.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),c!=="auto"&&[...Mn].forEach(([M,P])=>{String(P)!==o&&Zi(M,null)}),Yn.num=o,Yn.until=Date.now()+90*6e4;let g=new Set;for(let M of Bs){let P=Pn(M);P!=null&&(M.platAt||M.goAt||M===Pt&&Pt.st&&Pt.st.length)&&g.add(P)}for(let M of Bs)(M.platAt||M.goAt)&&(M.platAt=0,M.goAt=0,mi(M));let y=re.find(M=>M.tr&&String(M.tr.num)===o)||C(ie()).out.find(M=>M.tr&&String(M.tr.num)===o);if(c!=="auto"){let M=y?y.tr:vs(o);if(M){Ut=M,bt=M,pe=-1,Ft=ge=At=!1,d._h="";try{Oe(),a()}catch{}}if(![...Mn.values()].some(P=>String(P)===o)){let P=f||null,N=1e9;if(!P)for(let D of[Ke,Ge,Pt]){let B=Pn(D),H=B!=null?qn(B).find(p=>String(p.num)===o&&!p.gone):null;H&&H.est<N&&(N=H.est,P=D.key)}P&&Zi(P,o)}}if(y){Ut=y.tr;let M=y.tr.pat.stops,P=y.real?y.v.next:y.p.next,N=[...Ke.st,...Ge.st,...Vl.keys()],D=M.findIndex((B,H)=>H>=P&&!g.has(B)&&N.includes(T[B].id));D>0&&!(be&&be.num===o)&&(be={num:o,sid:T[M[D]].id,at:Date.now()},Os())}return y}function Zg(){let o=Lt.fixes;if(o.length<2)return;let c=o[o.length-1],f=o.slice().reverse().find(L=>c.t-L.t>=8e3&&c.t-L.t<=9e4);if(!f)return;let g=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,y=c.spd!=null&&c.spd>0?c.spd*3.6:g/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(Lt.tid&&!Lt.lock&&y<8){if(!Lt.slow)Lt.slow=c.t;else if(c.t-Lt.slow>9e4&&T.some(L=>L.w&&Math.hypot(L.w[0]-c.w[0],L.w[1]-c.w[1])*c.k<.35)){Lt.tid="",Lt.manual=0,Lt.lock=!1,Lt.slow=0,Lt.quiet=Date.now()+10*6e4,Ut=null,Re(!0);return}}else Lt.slow=0;if(!Lt.tid&&Lt.quiet&&Date.now()<Lt.quiet||Lt.manual&&Date.now()<Lt.manual)return;if(Lt.tid){if(y<22)return;let L=re.find(z=>z.tr&&String(z.tr.num)===Lt.tid)||C(ie()).out.find(z=>z.tr&&String(z.tr.num)===Lt.tid);if(L){if(Math.hypot(L.p.w[0]-c.w[0],L.p.w[1]-c.w[1])*c.k<=5){Lt.far=0;return}if(Lt.far||(Lt.far=c.t),c.t-Lt.far<12e4)return}Lt.far=0}let M=vp();if(!Lt.tid&&M.size&&y>=15&&y<=200&&!(c.acc!=null&&c.acc>80))for(let L of[...re.filter(z=>z.real),...C(ie()).out]){if(!L.tr||!M.has(String(L.tr.num))||(Lt.no.get(String(L.tr.num))||0)>Date.now())continue;if(Math.hypot(L.p.w[0]-c.w[0],L.p.w[1]-c.w[1])*c.k<=(L.real?1.6:2.2)){yp(L);return}}if(y<22||y>200)return;let P=[c.w[0]-f.w[0],c.w[1]-f.w[1]],N=null,D=2.5,B=re.filter(L=>L.real),H=C(ie()).out.filter(L=>L.tr&&!B.some(z=>z.tr&&String(z.tr.num)===String(L.tr.num))),p=vp();for(let L of[...B,...H]){if(!L.tr||p.size&&!p.has(String(L.tr.num)))continue;let z=L.real?2.5:3.5,ct=Math.hypot(L.p.w[0]-c.w[0],L.p.w[1]-c.w[1])*c.k;if(ct>Math.min(D,z)||N&&N.real&&!L.real)continue;let St=L.real?L.v.next:L.p.next;if(St==null||St<0)continue;let Q=T[L.tr.pat.stops[St]].w,gt=[Q[0]-L.p.w[0],Q[1]-L.p.w[1]];if(gt[0]*P[0]+gt[1]*P[1]<=0)continue;let j=String(L.tr.num);(Lt.no.get(j)||0)>Date.now()||(D=ct,N=L)}if(!N){Lt.cand=null;return}let E=String(N.tr.num);if(Lt.tid!==E&&!(c.acc!=null&&c.acc>50)){if(!Lt.cand||Lt.cand.k!==E){Lt.cand={k:E,t:c.t};return}c.t-Lt.cand.t<2e4||yp(N)}}function yp(o){let c=String(o.tr.num);$l(c,"auto"),Ft=ge=At=!1,pe=-1,bt=o.tr,Ut=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click()),$n(),d._h="",Oe(),ye=0,a();let f=x("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(293)}${m(o.tr.fam)} ${m(o.tr.num)}${__t(294)}${m(T[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(295)}${be&&be.num===c?`${__t(297)}${m(T[Gt.get(be.sid)].n)}`:""}${__t(296)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{Lt.no.set(c,Date.now()+20*6e4),Lt.tid="",Lt.lock=!1,Ut=null,bt=null,d._h="",Oe(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=null,f=0,g=()=>!!(Bs.some(P=>P.goAt)||f>Date.now()),y=()=>{o==null&&(c=g(),o=navigator.geolocation.watchPosition(P=>{let{longitude:N,latitude:D}=P.coords,B={t:P.timestamp||Date.now(),w:Mt(N,D),k:gp(N,D),spd:P.coords.speed,acc:P.coords.accuracy};Lt.fixes.push(B),Lt.fixes=Lt.fixes.filter(H=>B.t-H.t<12e4);{let H=Lt.fixes.find(E=>B.t-E.t>=2e4),p=B.spd!=null&&B.spd>0?B.spd*3.6:H?Math.hypot(B.w[0]-H.w[0],B.w[1]-H.w[1])*B.k/((B.t-H.t)/36e5):0;p>=15&&p<250&&(B.acc==null||B.acc<300)&&(f=Date.now()+10*6e4)}try{ie().live&&Zg()}catch{}},()=>{},c?{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}:{enableHighAccuracy:!1,maximumAge:3e4,timeout:3e4}))};setInterval(()=>{o!=null&&g()!==c&&(M(),y())},15e3);let M=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(y,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?M():(Lt.fixes=[],y())})}setInterval(()=>{!document.hidden&&(Date.now()-Pt.fix>11e4||Bs.some(o=>o.goAt))&&Fu(!1)},3e4);let mi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},Pn=o=>o.st.length?Gt.get(o.st[o.i]||o.st[0]):null;function Sp(o,c,f,g){if(g&&c.bus)return c.bstops.slice(1).some(P=>g.has(P))?"to":"out";if(g&&c.tr){let P=c.tr.pat.stops,N=P.indexOf(o);if(N>=0&&P.slice(N+1).some(D=>g.has(D)))return"to"}if(g&&c.tr)return"out";let y=Gt.get(c.destId)??T.findIndex(P=>P.n===c.dest);if(y<0||y==null||f==null)return"otros";let M=P=>Math.hypot(T[P].w[0]-T[f].w[0],T[P].w[1]-T[f].w[1]);return M(y)<M(o)?"to":"out"}let ur=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Mp=0,jg=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,bp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,wp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,io=o=>{let c=o.es||o.txt;return bp.test(c)||bp.test(o.txt)?3:wp.test(c)||wp.test(o.txt)||o.lvl>=2?2:1},Ep=4,Ou=new Map,Vl=new Map;function Tp(o,c){let f=t.days.indexOf(ie().ymd),g=f+"|"+o+"|"+[...c].join(",");if(Ou.has(g))return Ou.get(g);let y=!1,M=new Set,P=new Set;for(let D of tt[f]||[]){let B=D.pat.stops,H=B.indexOf(o);if(H>=0)for(let E=H+1;E<B.length;E++){if(c.has(B[E])){y=!0;break}M.add(B[E])}let p=-1;for(let E=1;E<B.length;E++)if(c.has(B[E])){p=E;break}if(p>0)for(let E=0;E<p;E++)P.add(B[E])}let N=y?null:[...M].filter(D=>P.has(D)&&D!==o&&!c.has(D));return Ou.set(g,N),N}function Bu(o,c,f,g){for(let y of g||qn(o)){if(y.cancel||y.gone||!y.tr||y.est<c-.01)continue;let M=y.tr.pat.stops,P=M.indexOf(o);if(P<0)continue;let N=-1;for(let D=P+1;D<M.length;D++)if(f.has(M[D])){N=D;break}if(!(N<0))return{c:y,fin:y.est+(y.tr.pat.t[2*N]-y.tr.pat.t[2*P+1])}}return null}function Kg(o,c,f){let g=Bu(o,c+2,f,qn(o));return g?{c:g.c,fin:g.fin,m:g.c.est-c,lost:!1}:null}function ku(o,c,f,g,y){let M=null,P=new Map,N=qn(o).filter(D=>!D.cancel&&!D.gone&&D.tr&&D.est-y.min>=g).slice(0,8);for(let D of N){let B=D.tr.pat.stops,H=B.indexOf(o);if(!(H<0))for(let p of f){let E=B.indexOf(p);if(E<=H)continue;let L=D.est+(D.tr.pat.t[2*E]-D.tr.pat.t[2*H+1]);P.has(p)||P.set(p,qn(p));let z=Bu(p,L+Ep,c,P.get(p));z&&(!M||z.fin<M.finAt-.01||Math.abs(z.fin-M.finAt)<.01&&D.est>M.x.est)&&(M={T:p,x:D,finAt:z.fin})}}return M}function Qg(o,c,f,g,y){let M=c.T,P=qn(M),N=c.fin,D=[];for(let p of P){if(D.length>=5)break;if(p.cancel||p.gone||!p.tr)continue;let E=p.tr.pat.stops,L=E.indexOf(M),z=-1;for(let Q=L+1;Q<E.length;Q++)if(N.has(E[Q])){z=Q;break}if(z<0||f.x&&f.x.arr!=null&&p.est<f.x.arr-.01)continue;let ct=p.est+(p.tr.pat.t[2*z]-p.tr.pat.t[2*L+1]),St=g&&g.c===p;D.push(`<li class="hr${St?" pin":""}" style="--lc:${X[p.fam]||"#6b7385"}"><span class="hrt"><b>${it(p.est)}</b><small>${f.x&&f.x.arr!=null?p.est-f.x.arr<2?__t(298):Math.floor(p.est-f.x.arr)+" "+__t(299):""}</small></span><span class="hrd">${bi(p.fam+" \xB7 "+p.dest,p.fam)}<small class="hro">${__t(300)} ${it(ct)}${p.num?" \xB7 "+__t(301)+m(p.num):""}</small></span><span class="hrm">${p.dl>=1?`<em class="dl ${Pi(p.dl)}">+${Math.round(p.dl)}</em>`:""}${p.plat?`${__t(228)}${m(p.plat)}</i>`:""}</span></li>`)}let B=(()=>{let p=[];for(let E of c.cands){let L=ku(Pn(o),N,[E],0,y);L&&p.push([E,L.finAt])}return p.sort((E,L)=>E[1]-L[1]),p.filter(([E,L])=>L<=p[0][1]+30||c.fixed&&E===M).slice(0,4)})(),H=B.length>1||c.fixed?`<div class="hxst"><span>${__t(302)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(303)}</button>${B.map(([p])=>`<button type="button" data-hxf="${o.key}:${m(T[p].id)}" class="${c.fixed&&p===M?"on":""}">${m(T[p].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(302)} ${bi(T[M].n,g?g.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${D.join("")||`<li class="hr"><span class="hrd">${__t(304)}</span></li>`}</ol>${H}</div>`}let Ap=new Set;function t_(o,c,f){Ap.has(o)||(Ap.add(o),Op(c,f,o))}function e_(o,c,f){let g=Pn(o);if(o===Pt){if(Lt.tid)return"";if(g==null)return`${__t(305)}${Pt.err?m(Pt.err)+__t(306):__t(307)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Ke,Ge].find(Nt=>Nt.st.includes(Pt.st[0])&&Pt.dist[Pt.st[0]]<1.5)||Date.now()-Pt.fix>10*6e4)return"";o.walk=_p(Pt.dist[o.st[o.i]]||0)}if(g==null){let et=Pt.st.length?Gt.get(Pt.st[0]):null,Nt=o===Ge?Ke:Ge,qt=et!=null&&!Nt.st.includes(Pt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${qt?`${__t(308)}${m(T[et].n)}</b>`:__t(309)}</small></span>${qt?`<button type="button" class="hpick" data-hnear="${o.key}${__t(310)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${qt?__t(311):__t(312)}</button></div></div>`}dp(g,()=>Re(!0));let y=o===Pt?null:o===Ke?Ge:Ke,M=y?Pn(y):null,P=M!=null&&M!==g?M:Jg,N=M!=null&&M!==g?y===Ge?__t(313):"casa":"Barcelona",D=T[g].fams,B=new Set([...D].filter(et=>ht.has(et))),H=B.size<D.size,p=!1;B.size||(B=new Set(D),H=!1,p=!0);let E=Pt.w?Math.hypot(T[g].w[0]-Pt.w[0],T[g].w[1]-Pt.w[1])*Pt.k:null,L=E!=null&&Date.now()-Pt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,mi(o));let z=o!==Pt&&!!o.platAt,ct=o===Pt||L&&E>3&&!o.goAt&&!z,St=z||o!==Pt&&L&&(E<.08&&Pt.acc<=40||E<.15&&Pt.acc<=100&&Date.now()-Pt.fix<3*6e4)&&!(o===Ke&&Pt.homeW&&Math.hypot(Pt.homeW[0]-Pt.w[0],Pt.homeW[1]-Pt.w[1])*Pt.k<.05),Q=o.goAt?(Date.now()-o.goAt)/6e4:null;Q!=null&&(Q>60||St)&&(o.goAt=0,mi(o)),L&&o!==Pt&&Pt.fix!==o._khFix&&(o._khFix=Pt.fix,(o._kh=(o._kh||[]).filter(et=>Date.now()-et.t<6*6e4)).push({t:Date.now(),km:E}));let gt=L&&o!==Pt&&E<=3&&!(o._noWay>Date.now())&&(o._kh||[]).some(et=>Date.now()-et.t>=6e4&&Date.now()-et.t<=5*6e4&&et.km-E>=.08),j=!St&&o!==Pt&&(gt||!!o.goAt),_e=j?L&&E<=3?_p(E):Math.max(0,o.walk-Q):0,we=qn(g),Zt=we.filter(et=>!X[et.fam]||ht.has(et.fam)||p),ke=ct||St?0:j?_e:o.walk,Me=V.alerts.filter(et=>[...et.fams].some(Nt=>B.has(Nt))||et.stops&&et.stops.has(g)),Ie=Me.some(et=>jg.test(et.es||et.txt)),Ye={to:[],out:[],otros:[],all:Zt},Ve=N!=="Barcelona"?new Set(y.st.map(et=>Gt.get(et)).filter(et=>et!=null)):null,xn=null;if(Ve&&o!==Pt){let et=Tp(g,Ve);if(et&&et.length){let Nt=o.xfer!=null?Gt.get(o.xfer):null,qt=Nt!=null&&et.includes(Nt)?[Nt]:et,he=ku(g,Ve,qt,ke,c);he&&(xn=Object.assign(he,{fin:Ve,finName:T[P].n,cands:et,fixed:Nt!=null&&et.includes(Nt)}),dp(he.T,()=>Re(!0)),P=he.T,Ve=new Set([he.T]))}}Zt.forEach(et=>Ye[Sp(g,et,P,Ve)].push(et));let mr="";if(Ve&&!Ye.to.length&&Zt.length<we.length){let et=we.filter(Nt=>!Zt.includes(Nt)&&Sp(g,Nt,P,Ve)==="to");et.length&&(Ye.to=et,mr=[...new Set(et.map(Nt=>Nt.fam))].sort(F).join(", "))}let y_=et=>{if(et==="all")return __t(314);let Nt=he=>(he.find(Dn=>Dn.fam)||{}).fam;if(et==="to")return __t(315)+bi(N==="Barcelona"?"Barcelona":T[P].n,Nt(Ye.to)||[...B][0])+(()=>{let he=H&&!mr?[...B].filter(Dn=>Ye.to.some(ys=>ys.fam===Dn)).sort(F):[];return he.length?`<span class="hwf" title="${__t(316)}">${he.map(An).join("")}</span>`:""})();let qt=[];for(let he of Ye[et])qt.some(Dn=>Dn[0]===he.dest)||qt.push([he.dest,he.fam]);return qt.length?__t(315)+qt.slice(0,2).map(([he,Dn])=>bi(he,Dn)).join(" "):__t(317)},zs=Mn.get(o.key);zs&&!we.some(et=>String(et.num)===zs&&!et.gone)&&(Yn.num=zs,Yn.until=Date.now()+90*6e4,Zi(o.key,null));let qr=et=>{let Nt=zs&&Ye[et].find(dn=>String(dn.num)===zs&&!dn.gone);if(Nt&&Nt.cancel)return{cls:"v-miss",pin:1,x:Nt,big:__t(318),small:`${it(Nt.est)} \xB7 ${Nt.fam}${__t(319)}${Nt.dest}${Nt.num?" \xB7 "+__t(301)+Nt.num:""}`,warn:""};let qt=Nt||Ye[et].find(dn=>!dn.cancel&&!dn.gone&&dn.est-c.min>=ke);if(!qt){let dn=Ye[et].find(gr=>!gr.cancel);return dn&&!ct?{cls:"v-miss",big:__t(320),small:`${__t(321)}${it(dn.est)}${__t(322)}${ur(dn.est-c.min)}${__t(323)}`}:{cls:"v-no",big:__t(324),small:__t(325)}}let he=qt.est-c.min-ke,Dn=ct||St?"v-info":j?he<1.5?"v-warn":"v-ok":he<1.5?"v-bad":he<5?"v-warn":"v-ok",ys=qt.ghost?Ye[et].find(dn=>!dn.cancel&&!dn.ghost&&dn.live&&dn.est>qt.est):null;if(Nt&&he<0&&!ct&&!St){let dn=Ye[et].find(gr=>!gr.cancel&&!gr.gone&&!gr.ghost&&gr!==qt&&gr.est-c.min>=ke);return{cls:"v-miss",pin:1,miss:1,nxt:dn,x:qt,ghost:!!qt.ghost,big:__t(326),small:`${it(qt.est)} \xB7 ${qt.fam}${__t(319)}${qt.dest}${qt.plat?__t(140)+qt.plat:""}${qt.num?" \xB7 "+__t(301)+qt.num:""}`,warn:dn?`\u27A1\uFE0F ${__t(327)}: ${dn.est-c.min-ke<1?__t(328):__t(329)+" "+ur(dn.est-c.min-ke)} \xB7 ${it(dn.est)}${dn.arr!=null?" \u2192 "+it(dn.arr):""}${dn.plat?__t(140)+dn.plat:""}${dn.num?" \xB7 "+__t(301)+dn.num:""}`:""}}return{pin:Nt?1:0,cls:Dn,ghost:!!qt.ghost,soft:Nt&&!qt.live&&qt.rodLive&&!qt.ghost&&!qt.unconf?__t(330):!qt.ghost&&qt.noPos&&Nt&&!qt.unconf?__t(331):"",big:ct||St?he<1?__t(332):__t(333)+ur(he):j?he<1.5?__t(334):__t(335)+ur(he)+__t(336):he<1.5?__t(337):__t(338)+ur(he),warn:qt.unconf?"\u26A0\uFE0F "+__t(339):Nt&&!qt.live&&qt.rodLive&&!qt.ghost||!qt.ghost&&qt.noPos&&Nt?"":!qt.ghost&&qt.late&&Nt?__t(340):qt.ghost?`\u26A0\uFE0F ${__t(341)}${ys?`${__t(342)}${it(ys.est)}`:""}`:Ie?__t(343):"",small:`${qt.bus?__t(344):""}${it(qt.est)} \xB7 ${qt.fam}${__t(319)}${qt.dest}${qt.plat?__t(140)+qt.plat:""}${qt.dl>=1?` \xB7 +${Math.round(qt.dl)} min`:""}${qt.arr!=null?`${__t(345)}${it(qt.arr)}`:""}${qt.num?" \xB7 "+__t(301)+qt.num:""}`,x:qt}},S_=Ve||new Set([P]),M_=et=>{let Nt=et.tr;if(!Nt)return null;let qt=Nt.pat.stops,he=qt.indexOf(g);if(he<0)return null;let Dn=-1;for(let ys=he+1;ys<qt.length;ys++)if(S_.has(qt[ys])){Dn=ys;break}return Dn<0?null:et.est+(Nt.pat.t[2*Dn]-Nt.pat.t[2*he+1])};Ye.to.forEach(et=>{et.arr=M_(et)});let Zl=Ye.out.length?"out":"otros",je=qr("to"),lo=qr(Zl);if(St||o===Pt&&Pt.acc<=40&&(Pt.dist[o.st[o.i]]||9)<.08){for(let et of[je.x,lo.x].concat(o===Pt?[qr("all").x]:[]))if(et&&Mn.has(o.key)&&String(Mn.get(o.key))===String(et.num)&&!et.cancel&&et.est-c.min<=2&&et.est-c.min>-.5){let Nt="w"+et.num+"|"+Math.round(et.sm);Fp.has(Nt)||(Fp.add(Nt),Nl(`${__t(346)}${et.fam}${__t(319)}${et.dest}`,`${Math.round(et.est-c.min)<=1?__t(347):__t(348)+Math.round(et.est-c.min)+" min"}${__t(319)}${T[g].n}${et.plat?__t(140)+et.plat:""}`))}}let Jp=w()&&c.live,Zp=B.size===1,b_=et=>{let Nt=et.est-c.min;return ct?et.cancel?"cx":Nt<0?"u-miss":"u-info":et.cancel?"cx":Nt<ke?"u-miss":Nt<ke+1.5?"u-now":Nt<ke+5?"u-soon":"u-ok"},w_=et=>{if(et.gone)return`<li class="hr u-gone${et.live?" on":""}${Ya(et)?" sel":""} go" data-dk="${f.push(et)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${it(et.est)}${__t(349)}${us(Math.max(1,Math.round(c.min-et.est))+" min")}</small></span><span class="hrd">${bi((Zp?"":et.fam+" \xB7 ")+et.dest,et.fam)}${__t(350)}${m(et.num)}</small></span><span class="hrm">${et.dl>=1?`<em class="dl ${Pi(et.dl)}">+${Math.round(et.dl)}</em>`:""}</span></li>`;let Nt=!et.cancel&&et.est-c.min<ke,qt=Du(et.num,"");return`<li class="hr ${b_(et)}${et.live?" on":""}${et.ghost?" gh":""}${Ya(et)?" sel":""}${zs&&String(et.num)===zs?" pin":""}${Li.some(he=>{let Dn=Pu(he,t.days.indexOf(c.ymd));return Dn&&String(Dn.num)===String(et.num)})?" fav":""} go" style="--lc:${X[et.fam]||"#6b7385"}" data-dk="${f.push(et)-1}" title="${et.cancel?__t(318):Nt?__t(326):__t(351)}"><span class="hrt"><b>${et.cancel?"\u2715":Nt?it(et.est):ur(et.est-c.min)}</b><small>${et.cancel?__t(352):et.late?__t(353):Nt?__t(354):et.ghost?__t(355):it(et.est)}</small></span><span class="hrd">${et.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${bi((Zp?"":et.fam+" \xB7 ")+et.dest,et.fam)}${qt.length?`<i class="cr" title="${m(qt.map(he=>Ol(he.kind)).join(" \xB7 "))}">${qt.slice(0,2).map(he=>Fl[he.kind]).join("")}</i>`:""}${et.arr!=null?`${__t(356)}${it(et.arr)}${et.num?" \xB7 "+__t(301)+m(et.num):""}${(()=>{let he=et.num&&Ru(et.num);return he&&he.n>=3&&he.late/he.n>=.5?`${__t(357)}${he.late}/${he.n})</b>`:""})()}</small>`:""}${et.obs?`<small class="hro">${m(et.obs)}</small>`:""}${et.unconf?`<small class="hro unc">${__t(358)}</small>`:""}</span><span class="hrm">${!et.cancel&&et.dl>=1?`<em class="dl ${Pi(et.dl)}">+${Math.round(et.dl)}</em>`:""}${et.plat?`${__t(228)}${m(et.plat)}</i>`:""}</span></li>`},co=(et,Nt,qt)=>`<div class="hcol"><div class="hdir">${y_(et)}${qt?`<button type="button" class="hhide" data-hhide="${o.key}:${qt}" title="${__t(359)}">\u2715</button>`:""}</div><div class="hv ${Nt.cls}${Nt.ghost||Nt.pin&&Nt.x&&Nt.x.noPos&&!to([Nt.x.fam]).length?" gh":""}${Nt.x?" go":""}"${Nt.miss&&Nt.nxt&&Nt.nxt.num?` data-pinnext="${o.key}:${m(Nt.nxt.num)}" title="${__t(360)}"`:Nt.x?` data-dk="${f.push(Nt.x)-1}"`:""}><b>${Nt.big}</b>${Nt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(361)}">\u{1F4CC} ${__t(362)} \u2715</button>`:""}<small>${m(Nt.small)}${Nt.soft?` \xB7 <span class="hsoft" title="${__t(363)}">\u{1F4E1} ${m(Nt.soft)}</span>`:""}</small>${Nt.pin&&Nt.x&&Nt.x.num?(he=>he?`<span class="hwhere">\u{1F4CD} ${m(he)}</span>`:"")(Wl(Nt.x.num)):""}${Nt.warn?`<span class="hvw">${m(Nt.warn)}</span>`:""}</div><ol>${Ye[et].slice(0,(o.more?et==="all"||o.hide?20:10:et==="all"?7:o.hide?8:4)+Ye[et].filter(he=>he.gone).length).map(w_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Pt){let et=qr("all");var E_=et.x?`<span class="nw">${et.big}</span> \xB7 <span class="nw"><b>${it(et.x.est)}</b> ${m(et.x.fam)}${__t(364)}${m(et.x.dest)}${et.x.plat?'<span class="nw">'+__t(140)+m(et.x.plat)+"</span>":""}`:et.big}let tn=xn&&je.x&&je.x.arr!=null?Kg(xn.T,je.x.arr,xn.fin):null;if(tn){let et=o._xc;et&&et.leg===String(je.x.num)&&et.conn!==String(tn.c.num)&&et.est<tn.c.est&&et.live?(tn.lost=!0,tn.missed=et.est):(!et||et.leg!==String(je.x.num)||!et.live||et.conn===String(tn.c.num))&&(o._xc={leg:String(je.x.num),conn:String(tn.c.num),est:tn.c.est,live:!!(V.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}tn&&(Vl.set(T[xn.T].id,{fam:tn.c.fam,est:tn.c.est,plat:tn.c.plat,lost:tn.lost}),tn.lost&&Mn.get(o.key)===String(je.x.num)&&t_("xf"+je.x.num+"|"+tn.c.num,`\u21C4 ${__t(365)} ${T[xn.T].n}`,`${__t(366)}: ${tn.c.fam} ${it(tn.c.est)} \u2192 ${it(tn.fin)}${tn.c.plat?" \xB7 v\xEDa "+tn.c.plat:""}`));let T_=tn?`<br><span class="nw hxf ${tn.lost?"xbad":tn.m<4?"xwarn":"xok"}">\u21C4 ${tn.lost?`${__t(367)} ${it(tn.missed)} \xB7 ${__t(142)} `:`${m(T[xn.T].n)} \xB7 `}${An(tn.c.fam)} <b>${it(tn.c.est)}</b> \u2192 <b>${it(tn.fin)}</b>${tn.lost?"":` \xB7 ${Math.floor(tn.m)} ${__t(368)}`}</span>`:xn?`<br><span class="nw hxf xbad">\u21C4 ${__t(369)} ${m(T[xn.T].n)}</span>`:"",A_=o===Pt?E_:xn&&je.x?`<span class="nw">${je.big}${je.x.plat?__t(140)+m(je.x.plat):""}</span> \xB7 <span class="nw"><b>${it(je.x.est)}</b>${je.x.arr!=null?` \u2192 ${m(T[xn.T].n)} <b>${it(je.x.arr)}</b>`:""}</span>${T_}`:je.x?`<span class="nw">${je.big}${je.x.plat?__t(140)+m(je.x.plat):""}</span> \xB7 <span class="nw"><b>${it(je.x.est)}</b>${je.x.arr!=null?`${__t(371)}${it(je.x.arr)}</b>`:""}${__t(370)}${m(N)}</span>`:__t(372)+m(N),Je=o===Pt?(et=>et.pin?et:null)(qr("all")):je.pin?je:lo.pin?lo:null;Je&&Je.x&&Mn.has(o.key)&&Bp(Je,T[g].n);let C_=Je?o===Pt?"all":Je===je?"to":Zl:"",Yr=!!(Je&&(Je.ghost||Je.x.noPos&&!to([Je.x.fam]).length||Je.x.cancel)),Qu=!!(Je&&Je.miss),Jr=Yr?Ye[C_].find(et=>!et.cancel&&!et.ghost&&!et.gone&&et.est>Je.x.est-.01&&et!==Je.x&&et.est-c.min>=(ct||St?0:ke)):null,R_=Qu?`<span class="nw">${__t(373)} <b>${it(Je.x.est)}</b></span>${Je.nxt?`<br><span class="nw hnx">${__t(366)} <b>${it(Je.nxt.est)}</b>${Je.nxt.arr!=null?` \u2192 <b>${it(Je.nxt.arr)}</b>`:""}</span>`:""}`:"",I_=Yr?`<span class="nw">\u26A0\uFE0F ${Je.x.cancel?__t(318):Je.ghost?__t(374):__t(375)}</span>${Je.x.cancel?"":` \xB7 <span class="nw"><b>${it(Je.x.est)}</b>${Je.x.arr!=null?` \u2192 <b>${it(Je.x.arr)}</b>`:""}</span>`}${Jr?` \xB7 <span class="nw">${__t(142)} <b>${it(Jr.est)}</b>${Jr.arr!=null?` \u2192 <b>${it(Jr.arr)}</b>`:""}${Jr.plat?__t(140)+m(Jr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${Je?" pinned":""}${Yr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(T[g].n)}${Je&&Je.x.num?`<i class="hpn">\u{1F4CC} ${m(Je.x.num)}</i>`:""}</b><small class="c${Qu||Yr&&Je.x.cancel?"bad":Yr?"warn":Ie?"bad":je.cls.slice(2)}">${Yr?I_:Qu?R_:A_}</small>${Je&&Je.x&&Je.x.num?(et=>et?`<small class="nofit hwh2">\u{1F4CD} ${m(et)}</small>`:"")(Wl(Je.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((et,Nt)=>{let qt=Gt.get(et);return qt==null?"":`<button type="button" data-hs="${o.key}:${Nt}" class="${Nt===o.i?"on":""}">${m(T[qt].n)}</button>`}).join("")}</div>`:""}
        ${o===Pt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let et=Pt.dist[o.st[o.i]]||0;return et<1?Math.round(et*100)*10+" m":et.toFixed(1).replace(".",",")+" km"})()}${__t(377)}${o.walk}${__t(378)}`:""}
        ${z?`<div class="hwalk away">${__t(380)}<a data-hplat="${o.key}${__t(379)}`:St?`${__t(381)}${o.key}${__t(382)}`:j?`${__t(383)}${Math.round(_e)} min</b>${L&&E<=3?__t(384):""} \xB7 <a data-hgo="${o.key}:0">${__t(385)}</a></div>`:""}${ct&&o!==Pt?`${__t(386)}${E<10?E.toFixed(1).replace(".",","):Math.round(E)}${__t(387)}`:""}<div class="hwalk"${ct?" hidden":""}>${(()=>{let et=zs||(()=>{let Nt=(Ye.to.length?Ye.to:Zt).filter(qt=>qt.num!=null&&!qt.cancel&&qt.est>=c.min-4&&qt.est<=c.min+1).sort((qt,he)=>Math.abs(qt.est-c.min)-Math.abs(he.est-c.min));return Nt[0]?Nt[0].num:je&&je.x&&je.x.num})();return et!=null&&String(Lt.tid)!==String(et)?`<button type="button" class="hgo hboard" data-hboard="${m(String(et))}">\u{1F686} ${__t(388)}</button>`:""})()}${St?"":`<button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(389)}</button>`}<span class="hstep" title="${__t(390)}">${__t(391)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(392)}</span></div>
        ${(()=>{let et=Li.filter(Nt=>o.st.includes(Nt.sid));return et.length?`<div class="hfav">${et.map(Nt=>{let qt=Pu(Nt,t.days.indexOf(c.ymd)),he=qt&&Zt.find(Dn=>String(Dn.num)===String(qt.num));return`\u2B50 <b>${Nt.t}</b> ${m(Nt.fam)} ${he?he.cancel?__t(393):he.gone?__t(225):he.dl>=1?`<em class="dl ${Pi(he.dl)}">+${Math.round(he.dl)}${__t(394)}${it(he.est)}`:__t(395):__t(396)}`}).join("<br>")}</div>`:""})()}
        ${H&&mr?`${__t(397)}${[...B].sort(F).map(An).join(" ")}${__t(398)}${N}${__t(399)}${mr}${__t(400)}`:p?`${__t(401)}${[...ht].sort(F).slice(0,3).map(An).join(" ")}${__t(402)}`:""}
        ${Me.length?`<div class="hal ${Ie?"bad":""}${Xu.v?" open":""}" data-halx>\u26A0\uFE0F ${ja(Me[0])} ${m(Me[0].txt)} <small>${Ka(Me[0])}</small>${Me.length>1?` <a data-hal>+${Me.length-1}${__t(403)}`:""}</div>`:`${__t(404)}${[...B].sort(F).join(", ")}</div>`}
        ${(()=>{let et=o.st.flatMap(Nt=>Du("",Nt));return et.length?`<div class="hcr">${et.slice(0,3).map(Nt=>`${Fl[Nt.kind]} <b>${m(Ol(Nt.kind))}</b> <small>${Nt.up>1?Nt.up+__t(269):""}${lp(Nt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Pt?`<div class="hcols one">${co("all",qr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${co("to",je)}</div><a class="hshow" data-hshow="${o.key}${__t(405)}`:o.hide==="to"?`<div class="hcols one">${co(Zl,lo)}</div><a class="hshow" data-hshow="${o.key}${__t(405)}`:`<div class="hcols">${co("to",je,"to")}${co(Zl,lo,"out")}</div>`}
        ${xn?Qg(o,xn,je,tn,c):""}
        ${Zt.length>(o===Pt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(406):__t(407)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Jp?Ot.get(T[g].id)?.d?__t(408):__t(409):__t(410)} \xB7 \u25CF = ${__t(411)}">${Jp?Ot.get(T[g].id)?.d?__t(412):__t(413):__t(224)}</span><a data-hmap="${g}${__t(376)}${o===Pt?__t(414):`<a data-hset="${o.key}${__t(415)}`}${o===Ge?`${__t(416)}`:""}</div>
      </div>`:"")+"</div>"}let Ni={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Cp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Rp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,dr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Hl=()=>{let o=new Set;return[...Ke.st,...Ge.st].forEach(c=>{let f=Gt.get(c);f!=null&&T[f].fams.forEach(g=>o.add(g))}),[...o].sort(F)},so=()=>({stations:[...Ke.st,...Ge.st],lines:Hl().filter(o=>!dr.has(o))}),n_=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function Ip(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Pp(o){let f=await(await fetch(oe()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...so()})})).json();if(!f.ok)throw new Error(f.err||"error")}function zu(){let o=Pn(Ke),c=Pn(Ge);if(o==null||c==null)return o!=null?Ke:c!=null?Ge:null;if(Pt.w&&Date.now()-Pt.fix<3*36e5){let f=g=>Math.hypot(T[g].w[0]-Pt.w[0],T[g].w[1]-Pt.w[1]);return f(o)<=f(c)?Ke:Ge}return new Date().getHours()<13?Ke:Ge}function Lp(o){let c=zu(),f=c===Ke?Ge:Ke,g=c&&Pn(c),y=f&&Pn(f);if(g==null||y==null)return!0;let M=(o.es||"")+" "+(o.txt||""),P=t.days.indexOf(ie().ymd),N=ie(),D=[...new Set([...M.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(H=>H[1]))];if(D.length)return D.some(H=>{let p=vs(H);if(!p)return!1;let E=p.pat.stops,L=E.indexOf(g),z=E.indexOf(y);if(L<0||z<0||L>z)return!1;let ct=p.t0+p.pat.t[2*L+1];return ct>N.min-60&&ct<N.min+150});let B=M.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(B){let H=B[1].toLowerCase(),p=T.findIndex(E=>E.n&&H.startsWith(E.n.toLowerCase()));if(p>=0){let E=(tt[P]||[]).find(L=>{let z=L.pat.stops;return z[z.length-1]===p&&z.includes(g)&&z.includes(y)});if(E){let L=E.pat.stops;return L.indexOf(g)<L.indexOf(y)}}}return!0}let Jn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function i_(){let{lines:o,stations:c}=so(),f=new Set(o),g=new Set(c.map(P=>Gt.get(P))),y=V.alerts.filter(P=>([...P.fams].some(N=>f.has(N))||[...P.stops||[]].some(N=>g.has(N)))&&Lp(P));if(!Jn.seen){try{Jn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Jn.seen=new Set}if(!Jn.seen.size){y.forEach(P=>Jn.seen.add(P.id+"|"+P.txt.length)),Dp();return}}let M=y.filter(P=>!Jn.seen.has(P.id+"|"+P.txt.length));if(M.length&&(M.forEach(P=>Jn.seen.add(P.id+"|"+P.txt.length)),Dp(),!(!Jn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of M.slice(0,3)){let N=(P.src==="Adif"?__t(280):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(F).slice(0,4).join(" "):""),D={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(N,D):new Notification(N,D)).catch(()=>{try{new Notification(N,D)}catch{}})}}function Dp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Jn.seen].slice(-400)))}catch{}}async function s_(){if(Jn.on)Jn.on=!1,sn(__t(417));else{if(!("Notification"in window)){sn(Cp&&!Rp()?__t(418):__t(419));return}if(await Notification.requestPermission()!=="granted"){sn(__t(420));return}Jn.on=!0,sn(__t(421)+so().lines.join(", ")+__t(422))}try{localStorage.setItem("rod_ln",Jn.on?"1":"")}catch{}Re(!0)}async function r_(){if(!V.repOk)return s_();if(!Ni.busy){Ni.busy=!0;try{let o=await Ip();if(!o){sn(Cp&&!Rp()?__t(423):__t(424));return}if(await navigator.serviceWorker.ready,Ni.on){let c=await o.pushManager.getSubscription();c&&(fetch(oe()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Ni.on=!1,sn(__t(417))}else{if(!V.url){sn(__t(425));return}if(await Notification.requestPermission()!=="granted"){sn(__t(420));return}let f=(await Rt(oe(),"/push/key")).key,g=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n_(f)});await Pp(g),Ni.on=!0,sn(__t(426)+so().lines.join(", "))}try{localStorage.setItem("rod_push",Ni.on?"1":"")}catch{}}catch(o){sn(__t(427)+(o.message||o))}finally{Ni.busy=!1,Re(!0)}}}async function Np(){if(Ni.on)try{let o=await Ip(),c=o&&await o.pushManager.getSubscription();c&&await Pp(c)}catch{}}let $u=!1,Up="";function Vu(){let o=bt?"t"+(bt.tid||bt.vtid):pe>=0?"s"+pe:ge?"a":Ft?"n":"";o!==Up&&($u=!1,Up=o);let c=innerWidth<=640&&!!o&&!$u&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let g=f.getBoundingClientRect().bottom;d.style.top=Math.round(g+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-g-16)+"px"}}))}let Fp=new Set,Hu=(()=>{let o=vt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function Op(o,c,f){if(!(!(Jn.on||Ni.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){sn(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(g=>g?g.showNotification(o,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function Bp(o,c){let f=o.x,g=ie();if(!g.live||f.gone||f.est<g.min-1)return;let y=f.num+"|"+Math.round(f.sm),M=Hu[y]||{},P=`${__t(428)} ${it(f.sm)}`,N=`${f.fam} \u2192 ${f.dest}`,D="",B="";f.cancel?M.c||(M.c=1,D=`\u26A0\uFE0F ${P} ${__t(148)}`,B=`${N}. ${__t(429)}`):o.ghost&&!M.g?(M.g=1,D=`\u26A0\uFE0F ${P} ${__t(430)}`,B=`${N}: ${__t(431)}`):f.dl>=5&&f.dl>=(M.dl||0)+5?(M.dl=Math.round(f.dl),D=`\u23F3 ${P} ${__t(432)} +${M.dl} min`,B=`${N}: ${__t(433)} ${c} ${__t(434)} ${it(f.est)}.`):f.plat&&M.p&&M.p!==String(f.plat)&&(D=`${__t(435)}: ${P}`,B=`${N}: ${__t(436)} ${f.plat} ${__t(437)} ${M.p}).`),f.plat&&(M.p=String(f.plat)),Hu[y]=M;try{localStorage.setItem("rod_pn",JSON.stringify(Hu))}catch{}D&&Op(D,B,"pin-"+f.num)}let Vr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))Vr.open=!0;else{Vr.open=!1,f.forEach(g=>Vr.seen.add(g));try{localStorage.setItem("rod_seen",JSON.stringify([...Vr.seen].slice(-200)))}catch{}}Re(!0)}});function a_(o){let c=o.lines;if(!c.length&&Pt.st&&Pt.st.length){let p=new Set;Pt.st.forEach(E=>{let L=Gt.get(E);L!=null&&T[L].fams.forEach(z=>p.add(z))}),c=[...p].sort(F)}let f=new Set(c),g=V.alerts.filter(p=>!f.size||[...p.fams].some(E=>f.has(E))),y=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,M=g.reduce((p,E)=>Math.max(p,io(E)),0),P=M===3?"\u26D4 ":M===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",N=`<div class="hnowh"><span class="hnowl"><b>${g.length?P+g.length+(g.length===1?__t(282):__t(283)):__t(438)}</b>${c.length?c.map(An).join(""):""}</span>${y}</div>`,D=g.filter(p=>!Vr.seen.has(p.id)),B=g.length&&(Vr.open||D.length>0),H=g.reduce((p,E)=>Math.max(p,io(E)),0);return`<div class="hnow${H===3?" bad":H===2?" warn":H===1?" info":""}${g.length&&!B?" col":""}" data-nowx="${m(g.map(p=>p.id).join("|"))}">${N}${zp(o,!0)}${B?g.slice().sort((p,E)=>io(E)-io(p)).map(p=>`<p class="sv${io(p)}">${ja(p)} ${m(p.txt)} <small>${Ka(p)}</small></p>`).join("")+`<small class="hnowt">${__t(439)}</small>`:""}</div>`}let Mn=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function Gl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(g,y)=>{g.style.fontSize=y===1?"":(g._f0*y).toFixed(1)+"px",g.querySelectorAll("b").forEach(M=>M.style.fontSize=y===1?"":(g._b0*y).toFixed(1)+"px")},f=1;for(let g of o){if(g.style.whiteSpace="",c(g,1),!g.clientWidth)continue;g._f0=parseFloat(getComputedStyle(g).fontSize);let y=g.querySelector("b");for(g._b0=y?parseFloat(getComputedStyle(y).fontSize):0;g.scrollWidth>g.clientWidth+1&&f>.86;)f-=.02,c(g,f)}if(f<1)for(let g of o)g._f0&&c(g,f);for(let g of o)g.scrollWidth>g.clientWidth+1&&(g.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Gl()}catch{}});let o_=(o,c)=>{let f=o==="work"?Ge:o==="near"?Pt:Ke,g=f&&Pn(f);return g==null?null:qn(g).find(y=>String(y.num)===String(c))||null};function Zi(o,c){if(c&&!Mn.size&&!Lt.tid)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>sn(__t(440)),600))}catch{}c?Mn.set(o,c):Mn.delete(o);try{let f=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...Mn].map(([g,y])=>[g,y,f])))}catch{}}let kp=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return c>=0?" \xB7 "+us(fu(Math.round(c))):""};function Wl(o){let c=re.find(M=>M.tr&&String(M.tr.num)===String(o));if(!c){let M=vs(o),P=ie(),N=t.days.indexOf(P.ymd);if(!M)return"";let D=M.day===N-1?1440:0,B=M.t0+M.pat.t[1]-D;return B>P.min?__t(441)+T[M.pat.stops[0]].n+" ("+it(B)+")":""}let f=c.tr,g=M=>T[f.pat.stops[M]].n;if(c.real){let M=c.v;return M.pre?__t(442):M.atStop>=0&&M.before?__t(443)+g(M.atStop):M.atStop>=0&&(M.st==="STOPPED_AT"||c.stop==="st")?Ue()?__t(444)+g(M.atStop):__t(445)+g(M.atStop)+kp(M):!Ue()&&M.next>0?__t(446)+g(M.next-1)+__t(447)+g(M.next)+kp(M):M.atStop>=0&&M.next>M.atStop?__t(448)+g(M.atStop)+__t(449)+g(M.next):M.atStop>=0?__t(450)+g(M.atStop):c.stop==="via"&&M.next>0?"\u23F8 "+__t(451)+g(M.next-1)+__t(447)+g(M.next):M.next>0?__t(185)+g(M.next-1)+__t(447)+g(M.next):M.next===0?__t(315)+g(0):""}let y=c.p&&c.p.next;return y>0?__t(452)+g(y-1)+__t(447)+g(y):""}let ro={k:"",v:null};function l_(o){let c=ie(),f=t.days.indexOf(c.ymd);if(f<0||!o.length)return null;let g=zu(),y=(g&&Pn(g))??Pn(Ke)??Pn(Ge),M=c.ymd+o.join()+y;if(ro.k===M)return ro.v;ro.k=M;let P=new Set(o),N=y!=null?p=>tt[p].filter(E=>{let L=E.pat.stops.indexOf(y);return L>=0&&L<E.pat.stops.length-1}).length:p=>tt[p].filter(E=>P.has(E.fam)).length,D=p=>{let E=new Date(+p.slice(0,4),+p.slice(4,6)-1,+p.slice(6)).getDay();return E===0?0:E===6?6:1},B=N(f),H=Math.max(0,...t.days.map((p,E)=>E!==f&&D(p)===D(c.ymd)?N(E):0));return ro.v=H>=20&&B<H*.8?{n:B,ref:H,pct:Math.round(B/H*100),st:y!=null?T[y].n:""}:null,ro.v}function zp(o,c){let f=o.lines||[],g=l_(f);if(!g)return"";let y=V.alerts.some(M=>[...M.fams].some(P=>f.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((M.es||"")+" "+M.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${y?__t(453):__t(454)}</b>: ${g.st?`${__t(455)} ${m(g.st)} ${g.n} ${__t(456)} ${g.ref} ${__t(457)}`:`${__t(458)} ${g.n} ${__t(456)} ${g.ref} ${__t(457)}`} (${g.pct} %). ${y?__t(459):__t(460)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${y?__t(461):__t(462)}</b> \xB7 ${__t(463)}: ${g.st?`${__t(464)} ${m(g.st)} ${__t(465)} ${g.n} ${__t(198)} ${g.ref} ${__t(71)}`:`${g.n} ${__t(198)} ${g.ref} ${__t(466)} ${f.join(", ")}`} (${g.pct} % ${__t(467)}).</div>`}function c_(o){let c=to(o.lines||[]);if(!c.length)return"";let f=[Ke,Ge].some(g=>{let y=Pn(g),M=y!=null&&Ot.get(T[y].id);return M&&M.d&&Array.isArray(M.d.trains)&&!M.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(468)} ${c.join(", ")}</b> ${__t(469)}${f?" \xB7 "+__t(470):""}: ${__t(471)}</div>`}function h_(o){if(!Pt.w)return[];let c=Pt.k||1;return re.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-Pt.w[0],f.p.w[1]-Pt.w[1])*c<3).sort((f,g)=>Math.hypot(f.p.w[0]-Pt.w[0],f.p.w[1]-Pt.w[1])-Math.hypot(g.p.w[0]-Pt.w[0],g.p.w[1]-Pt.w[1])).slice(0,2).map(f=>f.tr)}function u_(o){if(Lt.tid)return"";let c=null,f=null;for(let[St,Q]of Mn){c=String(Q),f=St;break}if(!c&&Ut&&Ut.num!=null&&(c=String(Ut.num)),!c)return"";let g=vs(c);if(!g)return"";let y=g.pat.stops,M=f?f==="work"?Ge:f==="near"?Pt:Ke:null,P=M?Pn(M):null,N=P!=null?qn(P).find(St=>String(St.num)===c):null,D=M===Ke?Ge:M===Ge?Ke:null,B=D?Pn(D):null,H=P!=null?y.indexOf(P):-1,p=be&&be.num===c?y.indexOf(Gt.get(be.sid)):-1;p<=H&&B!=null&&(p=y.indexOf(B,H+1));let E=N&&H>=0&&p>H?N.est+(g.pat.t[2*p]-g.pat.t[2*H+1]):null,L=N?Math.round(N.est-o.min):null,z=Wl(c),ct=N?`${N.gone?__t(472):__t(473)} ${m(T[P].n)} \xB7 <b>${it(N.est)}</b>${N.gone?"":` (${L<=0?__t(265):L+" min"})`}${N.plat?__t(140)+m(N.plat):""}${E!=null?` \u2192 ${m(T[y[p]].n)} <b>${it(E)}</b>`:""}`:m(z||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${An(g.fam)} ${__t(301)}${m(c)} <span class="hlk">${__t(474)}</span></b><small class="nofit">${ct}</small>${N&&z?`<small class="nofit">\u{1F4CD} ${m(z)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(388)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(475)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(212)}">\u2715</button></div></div>`}function d_(o){let c;try{if(c=f_(o),c!=null)return c}catch(y){console.error(y)}let f=Lt.tid?vs(Lt.tid):null,g=f?`${__t(476)} ${m(T[f.pat.stops[0]].n)} \xB7 ${it(f.t0)}`:"";return Lt.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(301)}${m(Lt.tid)}${Lt.lock?` <span class="hlk">${__t(477)}</span>`:""}</b>${g?`<small class="nofit">${g}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}function f_(o){if(!Lt.tid)return"";let c=re.find(z=>z.tr&&String(z.tr.num)===Lt.tid)||C(o).out.find(z=>z.tr&&String(z.tr.num)===Lt.tid);if(!c)return null;let f=c.tr,g=f.pat.stops,y=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(y==null){let z=C(o).out.find(ct=>ct.tr&&String(ct.tr.num)===Lt.tid);y=z&&z.p&&z.p.next>=0?z.p.next:1}let M=ft(f),P=typeof M=="number"?Math.max(0,M/60):0,N=t.days.indexOf(o.ymd),D=f.day===N-1?1440:0,B=be&&be.num===Lt.tid?g.indexOf(Gt.get(be.sid)):-1;B<y&&(B=g.length-1);let H=no(f,c.real?c.v:null,B,f.t0+f.pat.t[2*B]+P-D),p=H-o.min,E=c.real&&c.v.atStop>=0?c.v.atStop:-1,L=Wl(f.num)||__t(315)+T[g[y]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${An(f.fam)} ${__t(301)}${m(f.num)}${Lt.lock?` <span class="hlk">${__t(477)}</span>`:""}</b><small class="nofit cok">${m(L)} \xB7 <span class="nw">${__t(478)} ${m(T[g[B]].n)}</span> <span class="nw">${p>=1?__t(104)+ur(p)+" \xB7 ":""}<b>${it(H)}</b>${P>=1?` <em class="dl ${Pi(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(479)}" title="${__t(479)}">\u2715</button>${(z=>z.length&&!(Lt.manual&&Date.now()<Lt.manual)?`<div class="onbch">${z.map(ct=>`<button type="button" class="onbalt" data-onbpick="${m(ct.num)}">${__t(480)} ${m(ct.num)}?</button>`).join("")}</div>`:"")(h_(f))}</div>`}let Xl={until:0};function $p(o){if(o.hasAttribute("data-onbx")){Yn.num===Lt.tid&&(Yn.num=""),Lt.no.set(Lt.tid,Date.now()+20*6e4),Lt.tid="",Lt.manual=0,Lt.lock=!1,Lt.quiet=Date.now()+10*6e4,Ut=null,Re(!0);return}$l(o.dataset.onbpick,"pick"),sn(`${__t(481)} ${Lt.tid}`),Re(!0)}function Re(o){let c=x("#home");if(!c)return;let f=performance.now();if(!o&&f-Mp<4e3||!o&&Xl.until>Date.now())return;Mp=f;let g=ie(),y=[],M=so(),P=p=>{let E=Pn(p);return E==null||!Pt.w?1:Math.hypot(T[E].w[0]-Pt.w[0],T[E].w[1]-Pt.w[1])},N=[Pt,...[Ke,Ge].sort((p,E)=>P(p)-P(E))],D=(document.documentElement.classList.contains("tabmode")?a_(M):zp(M))+c_(M)+d_(g)+u_(g)+N.map(p=>e_(p,g,y)).join("")+(Bs.some(p=>p.open)&&M.lines.length,"");c.className=Bs.some(p=>p.open)?"open":"";let B=x("#bell");B||(B=document.createElement("button"),B.type="button",B.id="bell",B.onclick=r_,x("#inf .more").prepend(B));{let p=V.repOk?Ni.on:Jn.on;B.hidden=!M.lines.length,B.className=p?"on":"",B.textContent=(p?__t(489):__t(490))+M.lines.join(", "),B.title=(p?__t(491):__t(492))+__t(67)+M.lines.join(", ")+(V.repOk?"":__t(493))}if(c._h===D)return;c._h=D,c.innerHTML=D,Gl(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{Xl.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{Xl.until=Date.now()+400},!0),c.addEventListener("click",p=>{let E=p.target.closest&&p.target.closest("[data-onbx],[data-onbpick]");E&&(p.stopPropagation(),Xl.until=0,$p(E))},!0));{let p=c.querySelector("[data-onbgo]");p&&(p.onclick=E=>{if(E.target.closest("[data-onbx]")){Lt.no.set(Lt.tid,Date.now()+20*6e4),Lt.tid="",Lt.manual=0,Lt.lock=!1,Ut=null,Re(!0);return}let L=E.target.closest("[data-onbpick]");if(L){$p(L);return}let z=re.find(ct=>ct.tr&&String(ct.tr.num)===Lt.tid);z&&(Ft=ge=At=!1,pe=-1,bt=z.tr,d._h="",Oe())})}{let p=[...c.children].find(E=>E.classList.contains("hplace")&&!E.querySelector(".hnew"));p&&p.classList.add("lead")}let H=p=>p==="work"?Ge:p==="near"?Pt:Ke;c.querySelectorAll("[data-hloc]").forEach(p=>p.onclick=()=>{Pt.err="",Fu(!0)}),c.querySelectorAll("[data-ht]").forEach(p=>p.onclick=()=>{if(x("#inf").classList.contains("compact")){$u=!0,Vu();return}let E=H(p.dataset.ht);E.open=!E.open,mi(E),Re(!0),(bt||pe>=0||ge||Ft)&&(d._h="",Oe())}),c.querySelectorAll("[data-hxf]").forEach(p=>p.onclick=E=>{E.stopPropagation();let[L,z]=p.dataset.hxf.split(":"),ct=H(L);ct.xfer=z||null,mi(ct),Re(!0)}),c.querySelectorAll("[data-hs]").forEach(p=>p.onclick=()=>{let[E,L]=p.dataset.hs.split(":"),z=H(E);z.i=+L,mi(z),Re(!0)}),c.querySelectorAll("[data-hw]").forEach(p=>p.onclick=()=>{let[E,L]=p.dataset.hw.split(":"),z=H(E);z.walk=S(z.walk+ +L,0,60),mi(z),Re(!0)}),c.querySelectorAll("[data-hmap]").forEach(p=>p.onclick=()=>{let E=+p.dataset.hmap;Ft=ge=At=!1,bt=null,pe=E,$n(),Object.assign(s,{tx:T[E].w[0],ty:T[E].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Oe(),a()}),c.querySelectorAll("[data-hset]").forEach(p=>p.onclick=()=>Vp(p.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(p=>p.onclick=()=>{let E=Gt.get(Pt.st[0]);E!=null&&Gu(E,p.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(p=>p.onclick=()=>{let E=H(p.dataset.hmore);E.more=!E.more,Re(!0)}),c.querySelectorAll("[data-hhide]").forEach(p=>p.onclick=E=>{E.stopPropagation();let[L,z]=p.dataset.hhide.split(":"),ct=H(L);ct.hide=z,mi(ct),Re(!0)}),c.querySelectorAll("[data-hshow]").forEach(p=>p.onclick=()=>{let E=H(p.dataset.hshow);E.hide="",mi(E),Re(!0)}),c.querySelectorAll("[data-hgo]").forEach(p=>p.onclick=E=>{E.stopPropagation();let[L,z]=p.dataset.hgo.split(":"),ct=H(L);ct.goAt=z==="1"?Date.now():0,ct.goAt?ct.platAt=0:ct._noWay=Date.now()+15*6e4,mi(ct),Re(!0)}),c.querySelectorAll("[data-unchoose]").forEach(p=>p.onclick=E=>{E.stopPropagation();let L=p.dataset.unchoose;[...Mn].forEach(([z,ct])=>{String(ct)===L&&Zi(z,null)}),Yn.num===L&&(Yn.num=""),Ut&&String(Ut.num)===L&&(Ut=null),be&&be.num===L&&(be=null,Os()),bt&&String(bt.num)===L&&(bt=null,d._h="",Oe()),Re(!0)}),c.querySelectorAll("[data-chmap]").forEach(p=>p.onclick=E=>{E.stopPropagation();let L=vs(p.dataset.chmap);L&&(ks("map"),Hr({num:String(L.num),tid:L.tid&&V.vp.has(L.tid)?L.tid:"",tr:L}),Ut=L)}),c.querySelectorAll("[data-hboard]").forEach(p=>p.onclick=E=>{E.stopPropagation();let L=$l(p.dataset.hboard,"lock",p.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);sn(`${__t(481)} ${L&&L.tr.fam||""} ${p.dataset.hboard} \xB7 ${__t(477)}`),Re(!0)}),c.querySelectorAll("[data-hplat]").forEach(p=>p.onclick=E=>{E.stopPropagation();let[L,z]=p.dataset.hplat.split(":"),ct=H(L);ct.platAt=z==="1"?Date.now():0,ct.platAt&&(ct.goAt=0),mi(ct),Re(!0)}),c.querySelectorAll("[data-hnotst]").forEach(p=>p.onclick=E=>{E.stopPropagation(),Pt.homeW=Pt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Pt.w))}catch{}Re(!0)}),c.querySelectorAll("[data-hdel]").forEach(p=>p.onclick=()=>{Ge.st=[],Ge.open=!1,mi(Ge),Re(!0),Np()}),c.querySelectorAll("[data-dk]").forEach(p=>{let E=0,L=0,z=0,ct=()=>{clearTimeout(E),E=0,p.classList.remove("lpress")};p.addEventListener("pointerdown",St=>{let Q=y[+p.dataset.dk];!Q||Q.num==null||!p.matches("li.hr, .hv")||(L=St.clientX,z=St.clientY,p.classList.add("lpress"),E=setTimeout(()=>{E=0,p.classList.remove("lpress"),p._lpDone=Date.now();let gt=$l(Q.num,"lock",p.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}sn(`${__t(481)} ${gt&&gt.tr.fam||Q.fam||""} ${Q.num} \xB7 ${__t(477)}`),Re(!0)},700))}),p.addEventListener("pointermove",St=>{E&&Math.hypot(St.clientX-L,St.clientY-z)>10&&ct()}),["pointerup","pointercancel","pointerleave"].forEach(St=>p.addEventListener(St,()=>{E&&ct()})),p.addEventListener("contextmenu",St=>St.preventDefault())}),c.querySelectorAll("[data-dk]").forEach(p=>p.onclick=()=>{if(p._lpDone&&Date.now()-p._lpDone<1500)return;let E=y[+p.dataset.dk];if(p.matches("li.hr, .hv")&&!E.gone&&E.num!=null){let L=p.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(L){let z=Mn.get(L)===String(E.num);Zi(L,z?null:String(E.num)),z&&Yn.num===String(E.num)&&(Yn.num=""),z?bt&&String(bt.num)===String(E.num)&&(bt=null,Ut=null,Ze.sk="",d._h="",Oe()):Hr(E,!0),Re(!0);return}}Hr(E)}),c.querySelectorAll("[data-pinnext]").forEach(p=>p.onclick=E=>{if(E.target.closest("[data-unpin]"))return;let[L,z]=p.dataset.pinnext.split(":");Zi(L,z);let ct=o_(L,z);ct&&Hr(ct,!0),Re(!0)}),c.querySelectorAll("[data-unpin]").forEach(p=>p.onclick=E=>{E.stopPropagation(),Zi(p.dataset.unpin,null),Re(!0)}),c.querySelectorAll("[data-hal]").forEach(p=>p.onclick=()=>x("#alr").click()),hp(c)}function Hr(o,c){if(!o)return;let f=t.days.indexOf(ie().ymd),g=re.find(P=>P.real?o.tid&&P.v.tid===o.tid||o.num&&String(P.tr?P.tr.num:P.v.num)===String(o.num):o.tr&&P.tr===o.tr||o.num&&P.tr&&String(P.tr.num)===String(o.num)),y=o.tr||g&&g.tr||(tt[f]||[]).find(P=>String(P.num)===String(o.num));if(Ft=ge=At=!1,pe=-1,c||void 0,bt=g?g.tr||{vtid:g.v.tid}:y||null,!bt)return;c&&(Ze.sk="t"+(bt.num||bt.vtid)),Ut=g&&g.tr?g.tr:null,Ut&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let M=g?g.p.w:null;M&&Object.assign(s,{tx:M[0],ty:M[1],dist:Math.min(s.dist,22)}),$n(),d._h="",Oe(),ye=0,a()}let Gr=!1;function Vp(o){Gr=o||!1,v.value="",v.placeholder=o==="work"?__t(494):o==="home"?__t(495):__t(496),document.documentElement.classList.add("srch"),_.style.display="none",v.focus()}let Hp=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>Vp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Hp(),Gr&&!v.value.trim()&&(Gr=!1,v.placeholder=__t(496))},600));function u1(){}function Gu(o,c){let f=c==="work"?Ge:Ke,g=T[o].id,y=T.filter(M=>M.fams.size&&M!==T[o]&&Math.hypot(M.w[0]-T[o].w[0],M.w[1]-T[o].w[1])<.6).map(M=>M.id);f.st=[g,...y].slice(0,3),f.i=0,f.open=!0,mi(f),Re(!0),Np()}let ql=x("#lines");ql.innerHTML=`${__t(497)}`+G.map(o=>`<button type="button" style="--c:${X[o]}" data-f="${o}">${o}</button>`).join("");function Gp(){try{Re(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",ql.after(o),o.onclick=()=>{Jt=[...ht][0],At=Ft=ge=!1,d._h="",Oe()});let c=ht.size===1?[...ht][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(498)}${m(c)}${__t(499)}`)}ql.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!ht.has(o.dataset.f))})}ql.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?G.forEach(f=>ht.add(f)):ht.size===G.length?(ht.clear(),ht.add(c)):ht.has(c)?(ht.delete(c),ht.size||G.forEach(f=>ht.add(f))):ht.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...ht]))}catch{}Gp(),Kt(),$n(),Nu(),ye=0,a()});let Wu=[...document.querySelectorAll("[data-sp]")],wi=0;function Wp(o){let c=ie();o&&(Dt===o||wi===o)?Dt?(jt=c.min,le=c.min,Dt=0,wi=o):(me=performance.now(),Dt=o,wi=0):o===0?(Dt=0,le=null,wi=0):(jt=c.min,me=performance.now(),le=c.min,Dt=o,wi=0),Wu.forEach(f=>{let g=+f.dataset.sp;f.classList.toggle("on",g===(Dt||wi)||!Dt&&!wi&&le==null&&g===0),f.classList.toggle("pz",!!wi&&g===wi),f.textContent=g===0?__t(500):wi===g?"\u25B6 \xD7"+g:Dt===g?"\u23F8 \xD7"+g:"\xD7"+g}),ye=0,a()}Wu.forEach(o=>o.onclick=()=>Wp(+o.dataset.sp)),x("#tsl").oninput=o=>{let c=+o.target.value;jt=c,le=c,me=performance.now(),Dt===0&&!wi&&Wu.forEach(f=>f.classList.remove("on")),ye=0,a()},setInterval(()=>{le!=null&&Dt&&jt+(performance.now()-me)/6e4*Dt>1560&&(jt=240,me=performance.now())},1e3),window.__rodSearch=o=>{let c=b(o.trim());if(!c){_.style.display="none",_._pick=null;return}let f=[],g=[];T.forEach((N,D)=>{if(!N.fams.size)return;let B=b(N.n);B.startsWith(c)||B.includes(" "+c)||B.includes("-"+c)?f.push(D):B.includes(c)&&g.push(D)});let y=f.concat(g).slice(0,7),M=I.filter(N=>b(N.name).startsWith(c)).sort((N,D)=>D.pop-N.pop).slice(0,3),P=y.map(N=>({h:`\u{1F689} ${m(T[N].n)}<em>${[...T[N].fams].sort(F).slice(0,3).map(D=>`<em class="ls" style="background:${X[D]}">${D}</em>`).join(" ")}</em>`,go:()=>{if(Hp(),Gr){let D=Gr;Gr=!1,v.placeholder=__t(496),Gu(N,D);return}Ze.on&&Ze.cur!=="map"&&ks("map"),Ft=!1,ge=!1,At=!1,pe=N,bt=null,Ut=null,$n(),Object.assign(s,{tx:T[N].w[0],ty:T[N].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Oe(),a()}})).concat(M.map(N=>({h:`${m(N.name)}${__t(501)}`,go:()=>{Object.assign(s,{tx:N.cx,ty:N.cy,dist:S(N.size*3+14,14,60)}),a()}})));_.innerHTML=P.map((N,D)=>`<li data-i="${D}">${N.h}</li>`).join("")||__t(502),_.style.display="block",_._pick=N=>{P[N]&&(P[N].go(),_.style.display="none",v.value="",v.blur())},_.querySelectorAll("li[data-i]").forEach(N=>N.onclick=()=>_._pick(+N.dataset.i))},Gp(),$n();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=b(o),f=-1,g=0;T.forEach((y,M)=>{if(!y.fams.size)return;let P=b(y.n),N=P===c?3:P.startsWith(c)||c.startsWith(P)?2:P.includes(c)||c.includes(P)?1:0;N>g&&(g=N,f=M)}),f>=0&&setTimeout(()=>{pe=f,$n(),Object.assign(s,{tx:T[f].w[0],ty:T[f].w[1],dist:18,tilt:.5}),Oe(),a()},300)}}catch{}let Xu={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Xu.v=!Xu.v,Re(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&bt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,f=0,g=0;d.addEventListener("touchstart",y=>{g=innerWidth<=640&&bt&&y.touches.length===1&&!y.target.closest("input")?1:0,g&&(o=y.touches[0].clientX,c=y.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",y=>{if(!g)return;let M=y.touches[0].clientX-o,P=y.touches[0].clientY-c;g===1&&(Math.abs(M)<12&&Math.abs(P)<12||(g=Math.abs(M)>Math.abs(P)*1.3&&M<0?2:0,!g))||(y.preventDefault(),f=Math.min(0,M),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(g!==2){g=0;return}if(g=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let y=d.querySelector("[data-cx]");y&&y.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{g===2&&(d.style.transform="",d.style.opacity=""),g=0})}let Ze={on:!1,cur:"now",home:new Map},Yl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Ln=document.createElement("nav");Ln.id="tabs";let p_=[["now","\u{1F552}",__t(500)],["map","\u{1F5FA}\uFE0F",__t(503)],["line","\u{1F4CA}",__t(504)],["set","\u2699\uFE0F",__t(505)]];Ln.innerHTML=p_.map(([o,c,f])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Ln);let fr=document.createElement("i");fr.className="tind",fr.setAttribute("aria-hidden","true"),Ln.prepend(fr);let Xp=o=>[...Ln.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return o>=f.left&&o<f.right}),qu=o=>{!o||!o.offsetWidth||(fr.style.width=o.offsetWidth+"px",fr.style.height=o.offsetHeight+"px",fr.style.top=o.offsetTop+"px",fr.style.transform=`translateX(${o.offsetLeft}px)`)},Wr=()=>qu(Ln.querySelector("[data-tab].on")),m_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ei={on:!1,b:null,moved:!1,until:0};Ln.addEventListener("pointerdown",o=>{let c=Xp(o.clientX);if(c){ei.on=!0,ei.b=c,ei.moved=!1,Ln.classList.add("drag"),Ln.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),qu(c);try{Ln.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,g=f&&f.Plugins&&f.Plugins.Haptics;g&&f.isNativePlatform()&&g.selectionStart().catch(()=>{})}catch{}}}),Ln.addEventListener("pointermove",o=>{if(!ei.on)return;let c=Xp(o.clientX);c&&c!==ei.b&&(ei.b.classList.remove("hov"),c.classList.add("hov"),ei.b=c,ei.moved=!0,qu(c),m_())});let qp=o=>{if(ei.on){ei.on=!1,Ln.classList.remove("drag"),Ln.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&ei.b?(ei.until=Date.now()+500,ei.b.dataset.tab!==Ze.cur?ks(ei.b.dataset.tab):Wr()):Wr()}};Ln.addEventListener("pointerup",()=>qp(!0)),Ln.addEventListener("pointercancel",()=>qp(!1)),addEventListener("resize",()=>setTimeout(Wr,60));try{new ResizeObserver(()=>Wr()).observe(Ln)}catch{}let Xr=document.createElement("div");Xr.id="tabL",document.body.appendChild(Xr);let pr=document.createElement("div");pr.id="tabA",pr.className="box",document.body.appendChild(pr);let Yu=(o,c)=>{o&&(Ze.home.has(o)||Ze.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},Yp=()=>{for(let[o,[c,f]]of Ze.home)try{c.insertBefore(o,f&&f.parentNode===c?f:null)}catch{}Ze.home.clear()};function Ju(){let o=ht.size===1?[...ht][0]:"",c=V.alerts.filter(g=>[...g.fams].some(y=>ht.has(y))).length,f=[At,ge,Jt,Ft,o,c].join("|");Xr._k!==f&&(Xr._k=f,Xr.innerHTML=`<button type="button" data-tl="stats" class="${At?"on":""}">\u{1F4CA} ${__t(506)}</button><button type="button" data-tl="alr" class="${ge?"on":""}">\u26A0\uFE0F ${c}${c===1?__t(282):__t(283)}</button>${o?`<button type="button" data-tl="line" class="${Jt?"on":""}">\u{1F4CB} ${m(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,Xr.querySelectorAll("[data-tl]").forEach(g=>g.onclick=()=>{let y=g.dataset.tl;At=y==="stats",ge=y==="alr",Jt=y==="line"?o:"",Ft=!1,bt=null,pe=-1,At&&(Ne.at=0),d._h="",Oe(),Ju()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let g_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",__=()=>vt(new Date).ymd.replace(/-/g,"");function ao(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(g_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=__(),g=t.days.indexOf(f),y=c.days.indexOf(f),M=g<0?0:lt.filter(D=>D.day===g).length,P=0;if(y>=0)for(let D of c.trips)D[0]===y&&P++;let N=y>=0&&M&&(Math.abs(P-M)/M>.1||!P);if(g<0||g>=t.days.length-2||N){try{sessionStorage.setItem("rod_packmsg",N?"1":"")}catch{}location.reload();return}oo.v=!0}).catch(()=>{})}let oo={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&oo.v?(oo.v=!1,oo.reload=!0):!document.hidden&&oo.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>sn("\u{1F5D3}\uFE0F "+__t(507)),1500))}catch{}if(setTimeout(ao,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(ao.at||0)>6*36e5&&(ao.at=Date.now(),ao())}),ao.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=x("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Jl(){Yp();let o=window.__L||"es",c=ci.mode;pr.innerHTML=`<h3>${__t(505)}</h3>
      <h4>\u{1F310} ${__t(508)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,g])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${g}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(509)}</h4><div class="seg2">${[["auto",__t(303)],["light",__t(510)],["dark",__t(511)]].map(([f,g])=>`<button type="button" data-th="${f}" class="${c===f?"on":""}">${g}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(512)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let g=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(303)],["0","Normal"],["1",__t(513)]].map(([y,M])=>`<button type="button" data-big="${y}" class="${g===y?"on":""}">${M}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(514)}</small>`})()}
      <h4>\u{1F514} ${__t(515)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(516)}</small>${Hl().length?"":`<small class="tabAhint">${__t(517)}</small>`}${(()=>{let f=Hl();return f.length>1?`<small class="tabAhint">${__t(518)}</small><div class="alch">${f.map(g=>`<button type="button" data-al="${m(g)}" class="ln${dr.has(g)?" off":""}" style="--c:${X[g]}">${m(g)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(519)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(520)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,pr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let g=f.dataset.al,y=Hl();dr.has(g)?dr.delete(g):y.filter(M=>!dr.has(M)).length>1&&dr.add(g);try{localStorage.setItem("rod_aloff",JSON.stringify([...dr]))}catch{}Re(!0),Jl()}),pr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let g=f.dataset.big;try{g==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",g)}catch{}window.__txt&&window.__txt(),Jl(),Re(!0)}),pr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ci.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ci.mode)}catch{}Pl(),Jl()}),Yu(x("#bell"),x("#tabAbell")),Yu(x("#src"),x("#tabArt")),Yu(x("#ver"),x("#tabAinf"))}function ks(o){if(!Ze.on)return;let c=Ze.cur;if(Ze.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Ln.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),Wr(),o==="line")(bt||pe>=0)&&(Ze.keep={t:bt,s:pe,sk:Ze.sk}),!At&&!ge&&!Jt&&!Ft&&(At=!0,Ne.at=0),bt=null,pe=-1,d._h="",Oe(),Ju();else if(c==="line"){At=ge=Ft=!1,Jt="";let f=Ze.keep;Ze.keep=null,f&&o==="map"&&!bt&&pe<0&&(bt=f.t,pe=f.s,Ze.sk=f.sk),d._h="",Oe()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Lu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Jl(),o==="now"&&(Re(!0),requestAnimationFrame(Gl)),ye=0,a()}Ln.onclick=o=>{if(Date.now()<ei.until)return;let c=o.target.closest("[data-tab]");c&&ks(c.dataset.tab)},window.__rodTabSync=()=>{if(!Ze.on)return;let o=bt?"t"+(bt.num||bt.vtid):pe>=0?"s"+pe:"",c=o!==Ze.sk;Ze.sk=o,o&&c&&Ze.cur!=="map"?ks("map"):(ge||Jt||Ft)&&Ze.cur!=="line"&&Ze.cur!=="map"&&ks("line"),Ze.cur==="line"&&Ju()};function Zu(){let o=Yl.matches||document.documentElement.classList.contains("cap");if(o!==Ze.on)if(Ze.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Wr)),o||(window.__mapHidden=!1),o){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}ks(c)}else delete document.documentElement.dataset.tab,Yp()}Yl.addEventListener?Yl.addEventListener("change",Zu):Yl.addListener(Zu),Zu();{let o=x("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let ju={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Ku=new RegExp("("+Object.keys(ju).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),x_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ju[o]||ju[o+"\uFE0F"]||""}</svg></span>`;function v_(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],g;for(;g=c.nextNode();)g.parentElement&&g.parentElement.closest(".ico,script,style,textarea,input")||(Ku.lastIndex=0,Ku.test(g.nodeValue)&&f.push(g));for(let y of f){let M=document.createElement("span");M.innerHTML=m(y.nodeValue).replace(Ku,(P,N)=>x_(N)),y.replaceWith(...M.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(y=>x(y)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let y=0;o().forEach(M=>{y+=v_(M)}),y&&Ze.on&&Gl()}finally{c=!1}}},g=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(y=>g.observe(y,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:Mn,LASTPIN:Yn,get ONBX(){return{tid:Lt.tid,lock:Lt.lock,manual:Lt.manual}},xferCands:Tp,bestXfer:ku,xferFirst:Bu,nowState:ie,XMIN:Ep,pinNotify:Bp,toast:sn,cardEta:no,HOME:Ke,WORK:Ge,ONB:Lt,alertForMe:Lp,whereAmI:zu,departuresFor:qn,DEPS:Ot,tripByNum:vs,delayOf:ft,TID:dt,SID:Gt,byDay:tt,get days(){return t.days},get hist(){return Ne},get past(){return It.cur},get cols(){return fn.mesh?fn.mesh.count:-1},get dist(){return r.dist},get follow(){return Ut},get selTrip(){return bt},ST:T,TR:lt,FAM:G,act:()=>re,setSpeed:Wp,RT:V,pollRT:ue,nowState:ie,posAt:Ns,activeTrips:C,LL:Mt,select:o=>{bt=o,Oe()}}}var ka=window.__DATA__;var ze=i=>document.querySelector(i),Is=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ti=(i,t,e)=>Math.min(e,Math.max(t,i)),Uf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ai=ze("#c"),Sl=new ou({canvas:ai,antialias:!0});Sl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ps=new Ro;Ps.background=new xe(15659509);var wu=35,ps=new Kn(wu,1,2,1500);Ps.add(new Ko(16777215,9080992,1));var fg=new tl(16777215,.9);fg.position.set(-40,-70,90);Ps.add(fg);var ds=100/ka.w,vl=ka.w/2,yl=ka.h/2,_n=[],Ff=new $i;Ps.add(Ff);var vu=new Er({color:16777215,transparent:!0,opacity:.55});for(let i of ka.m){let t=new $i,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let S of i.g){let b=S.map(x=>{let m=[];for(let k=0;k<x.length;k+=2)m.push(new zt((x[k]-vl)*ds,(x[k+1]-yl)*ds));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(x=>x.length>=3);if(!b.length)continue;let I=new ba(b[0]);for(let x=1;x<b.length;x++)I.holes.push(new Ar(b[x]));e.push(I);for(let x of b[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of b)n.push(new Uo(new yn().setFromPoints(x.map(m=>new Y(m.x,m.y,0))),vu))}if(!e.length)continue;let h;try{h=new Xo(e,{depth:1,bevelEnabled:!1})}catch{continue}let u=new Jo({color:13421772}),d=new On(h,u);t.add(d);let v=new $i;n.forEach(S=>v.add(S)),v.position.z=.04,Ff.add(v),t.scale.z=.01,Ff.add(t);let _={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:u,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=_,_n.push(_)}var FT=_n.map(i=>i.mesh),ag=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},pg=0,mg=0;for(let i of _n){for(let t of i.rings)pg+=ag(t[0])-t.slice(1).reduce((e,n)=>e+ag(n),0);mg+=i.area}var Yb=Math.sqrt(mg/pg),gu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},gg={"08":__t(521),17:__t(522),25:__t(523),43:__t(524)},Hf="sqrt",Gf="pop",Df=0,Of=0,Na=1,_l=1,Jb={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Bf=i=>Gf==="pop"?i.pop:i.pop/i.area,pu=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new xe(i));function Zb(i){i=ti(i,0,1)*(pu.length-1);let t=Math.min(Math.floor(i),pu.length-2);return pu[t].clone().lerp(pu[t+1],i-t)}var Ua=i=>i>=100?Is(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function jb(){Of=0;for(let i of _n)Of+=i.pop;[..._n].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[..._n].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),vg()}var _g=new xe("#d3d8e2"),xg=new xe("#eceff3");window.__mapTheme=i=>{Ps.background=new xe(i?856345:15659509),xg.set(i?"#2b3242":"#eceff3"),_g.set(i?"#1a1f29":"#d3d8e2"),vu.color.set(i?856345:16777215),vu.opacity=i?.7:.55,Wf.color.set(i?329483:2764864),Xf.color.set(i?9081766:16777215);for(let t of _n)t.base&&Eu(t);kn()};function Eu(i){i.mat.color.copy(i.base).lerp(xg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(_g,.8)}function vg(){Na=1,_l=1e12;for(let e of _n){let n=Bf(e);Na=Math.max(Na,n),_l=Math.min(_l,n)}let i=Math.log10(Math.max(_l,.01)),t=Math.log10(Na);for(let e of _n)e.base=Zb((Math.log10(Math.max(Bf(e),.01))-i)/(t-i)),Eu(e);ze("#lmin").textContent=Ua(_l),ze("#lmax").textContent=Ua(Na),ze("#lname").textContent=Gf==="pop"?__t(525):__t(526),Tu()}function Tu(){let i=Jb[Hf],t=i(Na),e=24*Df;for(let n of _n)n.zt=Df<=.001?.01:Math.max(.12*Math.min(1,Df),e*i(Bf(n))/t)*(n.inF?1:.1);kn()}var og=Object.fromEntries(_n.map(i=>[i.code,i])),_u=[],yg=[];for(let i of ka.bd){let t=og[i.a],e=og[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)yg.push((i.p[n]-vl)*ds,(i.p[n+1]-yl)*ds,0,(i.p[n+2]-vl)*ds,(i.p[n+3]-yl)*ds,0),_u.push(t,e)}var yu=new Xi;yu.setPositions(yg);var Wf=new os({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Xf=new os({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Wf,Xf].forEach((i,t)=>{let e=new Nr(yu,i);e.frustumCulled=!1,e.renderOrder=10+t,Ps.add(e)});function Kb(){let i=yu.attributes.instanceStart.data.array;for(let t=0;t<_u.length;t+=2){let e=Math.max(_u[t].z,_u[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}yu.attributes.instanceStart.data.needsUpdate=!0}var Su={};for(let i of Object.keys(gu)){let t=_n.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,h=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),h=Math.max(h,d.cy);let u=document.createElement("div");u.className="plab",u.textContent=gu[i],u.title=__t(527)+gg[i],u.onclick=()=>c1("pr:"+i),document.body.appendChild(u),Su[i]={el:u,p:new Y(n/e,s/e,0),cx:(r+a)/2,cy:(l+h)/2,ext:Math.max(a-r,h-l),ext2:[a-r,h-l],area:e,name:gu[i]}}var Nf=new Y;function Qb(){for(let i in Su){let t=Su[i];Nf.copy(t.p).project(ps),t.el.style.transform=`translate(-50%,-50%) translate(${(Nf.x*.5+.5)*innerWidth}px,${(-Nf.y*.5+.5)*innerHeight}px)`}}var bn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Ae={...bn};function t1(){let i=innerWidth/innerHeight,t=Math.tan(wu*Math.PI/360);return Math.max(ka.h*ds*1.1,100*1.1/i)/(2*t)}var e1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Ae.yaw=Math.round(Ae.yaw/(2*Math.PI))*2*Math.PI,Ae.tilt=0,kn()});function qf(){Object.assign(Ae,{tilt:0,yaw:0,dist:t1(),tx:0,ty:0}),kn()}function n1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=bn;ps.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ps.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ps.lookAt(n,s,0)}var xl=!0,lg=performance.now(),Oa=new Map,ir=0,mu=0;function Yf(){ir&&(clearTimeout(ir),ir=0,requestAnimationFrame(Fa))}function kn(){xl=!0,Yf()}window.__wakeMap=Yf;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,Yf,{passive:!0,capture:!0}));function Fa(i){ir=0;let t=ti((i-lg)/1e3,0,.05);lg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(bn)){let r=Ae[s]-bn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(bn[s]+=r*e,n=!0):bn[s]=Ae[s]}for(let s of _n){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Oa){let a=(i-r)/1800;a>=1?(Oa.delete(s),kr(s)):kr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(xl=!0),window.__mapHidden){xl=!0,ir=setTimeout(()=>{ir=0,requestAnimationFrame(Fa)},1e3);return}if(n||xl){e1.style.transform=`rotate(${bn.yaw}rad) scaleY(${(.55+.45*Math.cos(bn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Ae.yaw/2))<.02&&Ae.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(528):__t(529))}n1(),Kb(),Qb(),window.__rodFrame&&window.__rodFrame(),Sl.render(Ps,ps),xl=n,ze("#tilt").value=Math.round(Ae.tilt*180/Math.PI),ze("#yaw").value=Math.round(((Ae.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Oa.size){mu=0,requestAnimationFrame(Fa);return}mu||(mu=i),i-mu<1500?requestAnimationFrame(Fa):ir=setTimeout(()=>{ir=0,requestAnimationFrame(Fa)},120)}function Sg(){Sl.setSize(innerWidth,innerHeight,!1),ps.aspect=innerWidth/innerHeight,ps.updateProjectionMatrix(),Wf.resolution.set(innerWidth,innerHeight),Xf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),kn()}addEventListener("resize",()=>{Sg(),un.length&&rr()});ai.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Ae.yaw+=n*.0035}else i.ctrlKey?Ae.dist=ti(Ae.dist*Math.exp(e*.01),6,400):Ae.tilt=ti(Ae.tilt+e*.002,0,1.32);kn()},{passive:!1});ai.addEventListener("contextmenu",i=>i.preventDefault());var fs=new Map,pi=null,Fr=0,kf=0,zf=0;var Mu=null;ai.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),un.length&&setTimeout(rr,50)),ai.setPointerCapture(i.pointerId),fs.set(i.pointerId,{x:i.clientX,y:i.clientY}),fs.size===1&&(pi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),fs.size===2){let[t,e]=[...fs.values()];Fr=Math.hypot(t.x-e.x,t.y-e.y),kf=Math.atan2(e.y-t.y,e.x-t.x),zf=(t.y+e.y)/2,Mu={mode:null,rot:0,sc:0,tl:0},pi&&(pi.multi=!0)}Jf()});ai.addEventListener("pointermove",i=>{let t=fs.get(i.pointerId);if(!t){Rs={x:i.clientX,y:i.clientY},$f||($f=requestAnimationFrame(s1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,fs.size===2){let[s,r]=[...fs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),h=(s.y+r.y)/2,u=l-kf;u>Math.PI&&(u-=2*Math.PI),u<-Math.PI&&(u+=2*Math.PI);let d=Fr?a-Fr:0,v=h-zf,_=Mu||(Mu={mode:null,rot:0,sc:0,tl:0});_.rot+=u,_.sc+=d,_.tl+=v,_.mode?_.mode==="zoom"&&Math.abs(_.rot)>.45&&(_.mode="rotate"):Math.abs(_.rot)>.3?_.mode="rotate":Math.abs(_.tl)>30&&Math.abs(_.sc)<18?_.mode="tilt":Math.abs(_.sc)>12&&(_.mode="zoom"),(_.mode==="zoom"||_.mode==="rotate")&&Fr&&(Ae.dist=ti(Ae.dist*Fr/a,6,400)),_.mode==="rotate"&&(Ae.yaw+=u,bn.yaw=Ae.yaw),_.mode==="tilt"&&(Ae.tilt=ti(Ae.tilt-v*.006,0,1.32),bn.tilt=Ae.tilt),Fr=a,kf=l,zf=h,kn();return}if(pi.moved+=Math.abs(e)+Math.abs(n),pi.rot||i.altKey)Ae.yaw+=e*.005,Ae.tilt=ti(Ae.tilt+n*.004,0,1.32),bn.yaw=Ae.yaw,bn.tilt=Ae.tilt;else{let s=2*bn.dist*Math.tan(wu*Math.PI/360)/innerHeight,r=Math.sin(bn.yaw),a=Math.cos(bn.yaw),l=1/Math.max(Math.cos(bn.tilt),.3);Ae.tx=ti(Ae.tx-a*e*s+-r*n*s*l,-70,70),Ae.ty=ti(Ae.ty-r*e*s+a*n*s*l,-70,70),bn.tx=Ae.tx,bn.ty=Ae.ty}kn()});var Mg=i=>{let t=pi&&!pi.rot&&!pi.multi&&pi.moved<(pi.touch?12:6)&&i.type==="pointerup"&&fs.size===1,e=pi&&pi.touch;fs.delete(i.pointerId),Fr=0,Mu=null,fs.size||(pi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ai.addEventListener("pointerup",Mg);ai.addEventListener("pointercancel",Mg);ai.addEventListener("dblclick",qf);addEventListener("keydown",i=>{i.key==="Alt"&&(ai.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ai.style.cursor="")});addEventListener("blur",()=>{ai.style.cursor=""});var i1=new nl,cg=new zt,Rs=null,$f=0,Or=null;function s1(){if($f=0,!Rs||pi)return;cg.set(Rs.x/innerWidth*2-1,-(Rs.y/innerHeight)*2+1),i1.setFromCamera(cg,ps);let i=null;if(i!==Or){let e=Or;Or=i,e&&kr(e),i&&kr(i),kn()}let t=window.__rodHover&&window.__rodHover(Rs.x,Rs.y);if(t){Ur.innerHTML=t,Ur.style.display="block";let e=Ur.offsetWidth,n=Ur.offsetHeight;Ur.style.left=ti(Rs.x+14,6,innerWidth-e-6)+"px",Ur.style.top=ti(Rs.y+14,6,innerHeight-n-6)+"px",ai.style.cursor="pointer"}else Jf(),ai.style.cursor=""}ai.addEventListener("pointerleave",()=>{if(Rs=null,Or){let i=Or;Or=null,kr(i),kn()}Jf()});var Ur=ze("#tip");function Jf(){Ur.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Gf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),vg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Hf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Tu()});ze("#yaw").oninput=i=>{Ae.yaw=+i.target.value*Math.PI/180,kn()};ze("#tilt").oninput=i=>{Ae.tilt=+i.target.value*Math.PI/180,kn()};ze("#zin").onclick=()=>{Ae.dist=ti(Ae.dist*.75,6,400),kn()};ze("#zout").onclick=()=>{Ae.dist=ti(Ae.dist/.75,6,400),kn()};ze("#rst").onclick=qf;var hg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],un=[],ug={},r1=i=>ug[i]||(ug[i]=new Er({color:i}));function bg(i,t){i.og.children.forEach(e=>e.material=t?r1(t):vu)}function kr(i,t=0){let e=i.mat.emissive;i===Or?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Zf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let u of i)e=Math.min(e,u.cx-u.size/2),n=Math.max(n,u.cx+u.size/2),s=Math.min(s,u.cy-u.size/2),r=Math.max(r,u.cy+u.size/2);let a=innerWidth/innerHeight,l=Math.tan(wu*Math.PI/360),h=i.length===1?ti(i[0].size*3.2+14,14,120):ti(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Ae,{tx:(e+n)/2,ty:(s+r)/2,dist:h,tilt:t,yaw:0}),kn()}var sr=ze("#q"),Si=ze("#list"),hn=ze("#mcs");function Au(i,t=!0){if(Si.style.display="none",sr.value="",!i.sel){un.length>=6&&wg(un[0].o,!0);let e=new Set(un.map(s=>s.color)),n=hg.find(s=>!e.has(s))||hg[0];i.sel={o:i,color:n,tint:new xe(n).multiplyScalar(.12)},un.push(i.sel),bg(i,n)}hn.classList.contains("min")&&Ml(!1),Oa.set(i,performance.now()),kr(i),t&&Zf([i],Math.max(Ae.tilt,.9)),rr()}function wg(i,t){let e=un.indexOf(i.sel);e>=0&&un.splice(e,1),i.sel=null,bg(i,null),kr(i),kn(),t||rr()}function Eg(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=un.map(d=>{let v=1e9,_=-1e9,S=1e9,b=-1e9;for(let I of d.o.rings)for(let x=0;x<I[0].length;x+=2)v=Math.min(v,I[0][x]),_=Math.max(_,I[0][x]),S=Math.min(S,I[0][x+1]),b=Math.max(b,I[0][x+1]);return{x0:v,x1:_,y0:S,y1:b}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;un.forEach((d,v)=>{let _=r[v],S=(_.x0+_.x1)/2,b=(_.y0+_.y1)/2;s.beginPath();for(let I of d.o.rings)for(let x of I)for(let m=0;m<x.length;m+=2){let k=e/2+(x[m]-S)*l,$=n/2-(x[m+1]-b)*l;m?s.lineTo(k,$):s.moveTo(k,$),m===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let h=l/Yb,u=[.5,1,2,5,10,20,50,100].find(d=>d*h>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,u*h,2),s.font="10px system-ui",s.fillText(u+" km",12+u*h,n-8)}function rr(){if(!un.length){hn.innerHTML="",hn.style.display="none",Ml(!1);return}if(hn.style.display="flex",innerWidth<=640){let e=ze("#inf").getBoundingClientRect().bottom;hn.style.top=Math.round(e+8)+"px",hn.style.maxHeight=Math.max(110,Math.min(innerHeight*(ze("#rc").classList.contains("min")?.7:.4),ze("#rc").getBoundingClientRect().top-e-16))+"px",hn.style.width=""}else if(innerHeight<=500){let e=ze("#inf").getBoundingClientRect().bottom;hn.style.top=Math.round(e+8)+"px",hn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",hn.style.width="min(290px, 40vw)"}else hn.style.top="",hn.style.maxHeight="",hn.style.width="";window.__fitMcs&&window.__fitMcs();let i=un.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${gu[s.pr]}</em></div><div class="mb">${Is(s.pop)}${__t(535)}${Ua(s.area)} km\xB2 \xB7 ${Ua(s.pop/s.area)}${__t(536)}${s.rankP}${__t(537)}`}).join("");if(un.length>1){let e=s=>Math.max(...un.map(s)),n=[[__t(538),s=>s.o.pop,Is],[__t(539),s=>s.o.area,Ua],[__t(540),s=>s.o.pop/s.o.area,Ua]];if(i+=`${__t(541)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${un.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),un.length===2){let[s,r]=un.map(u=>u.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],h=(u,d)=>(u>=d?u/d:d/u).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(542)}${h(a.pop,l.pop)}${__t(543)}${l.name}${__t(544)}${h(a.area,l.area)}\xD7 ${a.area>=l.area?__t(545):__t(546)}.</small>`}i+="</div>"}hn.innerHTML=i,hn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),wg(un[+e.dataset.x].o)}),hn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Zf([un[+e.dataset.i].o],Math.max(Ae.tilt,.9)),e.onmouseenter=()=>{let n=un[+e.dataset.i].o;Oa.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=un.splice(s,1);un.splice(r,0,a),rr();let l=ze("#sil");l&&l.classList.add("flash")}}});let t=ze("#sil");t&&Eg(t)}sr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(sr.value);return}let i=Uf(sr.value.trim());if(!i){Si.style.display="none";return}let t=[],e=[];for(let s of _n){let r=Uf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Si.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Is(s.pop)}</em></li>`).join("")||__t(502),Si.style.display="block",Si.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Au(n[+s.dataset.i])),Si._r=n});sr.addEventListener("keydown",i=>{i.key==="Enter"&&Si._pick?Si._pick(0):i.key==="Enter"&&Si._r&&Si._r[0]&&Au(Si._r[0]),i.key==="Escape"&&(sr.value="",Si.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==sr&&Tg()});var dg=0;addEventListener("resize",()=>{clearTimeout(dg),dg=setTimeout(()=>{let i=ze("#sil");i&&Eg(i)},120)});var bu=null,Vf=ze("#chip");function a1(i,t,e=.8){bu={codes:new Set(i.map(n=>n.code)),label:t},_n.forEach(n=>{n.inF=bu.codes.has(n.code),Eu(n)}),Vf.innerHTML=`${__t(547)}${t}</b> \xB7 ${i.length}${i.length===1?__t(548):__t(549)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Vf.style.display="flex",ze("#chx").onclick=Tg,Tu(),Zf(i,e),i.slice(0,40).forEach(n=>Oa.set(n,performance.now()))}function Tg(){bu&&(bu=null,_n.forEach(i=>{i.inF=!0,Eu(i)}),Vf.style.display="none",Tu())}var o1="prov";function l1(i){let t=[..._n].sort((a,l)=>l.pop-a.pop),e=[..._n].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[_n.filter(a=>a.pr===s),gg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(550)]:[e.slice(0,10),__t(551)];if(n==="low")return s==="pop"?[t.slice(-10),__t(552)]:[e.slice(-10),__t(553)];if(n==="size")return[_n.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Is(+s)}${__t(554)}`:+s==0?`${__t(555)}${Is(+r)}${__t(556)}`:`${Is(+s)} \u2013 ${Is(+r-1)}${__t(556)}`];if(n==="n50"){let a=0,l=0;for(let h of t)if(a+=h.pop,l++,a>=Of/2)break;return[t.slice(0,l),`${__t(557)}`]}return[[],""]}function c1(i){let[t,e]=l1(i);t.length&&a1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{o1=i.dataset.tab,ze("#dbody").scrollTop=0});var Br=ze("#rc"),xu=ze("#mcstab");function Ba(i){Br.classList.toggle("min",i),ze("#rcgrab span").textContent=i?__t(599):__t(600),un.length&&rr()}function Ml(i){hn.classList.toggle("min",i),hn.style.transform="",hn.style.opacity="",xu.classList.toggle("on",i&&un.length>0),i&&(xu.textContent=`\u25B8 ${un.length} ${un.length===1?"ficha":"fichas"}`,xu.style.top=hn.style.top||"124px")}function jf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Cu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y;!s.lock&&Math.hypot(l,h)>10&&(s.lock=Math.abs(l)>Math.abs(h)?"x":"y"),s.lock===n&&t&&t(l,h)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y,u=s.lock;s=null,e(u===n?l:0,u===n?h:0,u)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}ze("#rcgrab").onclick=()=>Ba(!Br.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Ba(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Ag=()=>innerWidth>640;jf(Br,{axis:"y",onEnd:(i,t)=>{if(!Ag())if(t>40&&!Br.classList.contains("min")){let e=ze("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Ba(!0)}else t<-30&&Br.classList.contains("min")&&Ba(!1)}});jf(Br,{axis:"x",onEnd:i=>{Ag()&&(i>50?Ba(!0):i<-30&&Br.classList.contains("min")&&Ba(!1))}});jf(hn,{axis:"x",onMove:i=>{i<0&&(hn.classList.add("sw"),hn.style.transform=`translateX(${i}px)`,hn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{hn.classList.remove("sw"),i<-60?(Ml(!0),window.__rodHide&&!un.length&&window.__rodHide()):(hn.style.transform="",hn.style.opacity="")}});xu.onclick=()=>{Ml(!1),rr()};ze("#dtoggle").onclick=()=>{let i=ze("#dp").classList.toggle("open");ze("#rc").classList.toggle("dopen",i),ze("#dtoggle").textContent=i?Cu.matches&&innerWidth<=640?__t(601):__t(602):__t(603),window.__rodCard&&window.__rodCard()};var Cu=matchMedia("(max-width:640px), (max-height:500px)");function Cg(){let i=ze("#leg");Cu.matches?ze("#rc").insertBefore(i,ze("#dtoggle")):document.body.appendChild(i),un.length&&rr()}Cu.addEventListener("change",Cg);Cg();Sg();jb();qf();Object.assign(bn,Ae);for(let i of _n)i.z=.01;requestAnimationFrame(Fa);rg({scene:Ps,camera:ps,renderer:Sl,goal:Ae,cur:bn,invalidate:kn,flyTo:(i,t,e,n)=>{Object.assign(Ae,{tx:(i-vl)*ds,ty:(t-yl)*ds,dist:e,tilt:n}),kn()},K:ds,CX:vl,CY:yl,mcs:hn,q:sr,list:Si,munis:_n,select:Au,norm:Uf,fmt:Is,clamp:ti,mcsMin:Ml});window.__app={scene:Ps,renderer:Sl,camera:ps,munis:_n,labs:Su,goal:Ae,cur:bn,select:Au,get mode(){return Hf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(609):__t(610)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
