(()=>{var zm=0,Vd=1,$m=2;var al=1,Vm=2,Aa=3,Ks=0,si=1,os=2,ls=0,Ca=1,Hd=2,Gd=3,Wd=4,Hm=5;var Ir=100,Gm=101,Wm=102,Xm=103,qm=104,Ym=200,Jm=201,Zm=202,jm=203,Xd=204,qd=205,Km=206,Qm=207,t0=208,e0=209,n0=210,i0=211,s0=212,r0=213,a0=214,Tc=0,Ac=1,Cc=2,pa=3,Rc=4,Ic=5,Pc=6,Lc=7,fh=0,o0=1,l0=2,Wi=0,Yd=1,Jd=2,Zd=3,jd=4,Kd=5,Qd=6,tf=7;var ef=300,Qs=301,Pr=302,ph=303,mh=304,ol=306,Dc=1e3,es=1001,Nc=1002,Fn=1003,c0=1004;var ll=1005;var Gn=1006,gh=1007;var tr=1008;var gi=1009,nf=1010,sf=1011,Ra=1012,_h=1013,Xi=1014,Ci=1015,qi=1016,xh=1017,vh=1018,Ia=1020,rf=35902,af=35899,of=1021,lf=1022,Ri=1023,is=1026,er=1027,yh=1028,Sh=1029,nr=1030,Mh=1031;var bh=1033,cl=33776,hl=33777,ul=33778,dl=33779,wh=35840,Eh=35841,Th=35842,Ah=35843,Ch=36196,Rh=37492,Ih=37496,Ph=37488,Lh=37489,fl=37490,Dh=37491,Nh=37808,Uh=37809,Fh=37810,Oh=37811,Bh=37812,kh=37813,zh=37814,$h=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Yh=36492,Jh=36494,Zh=36495,jh=36283,Kh=36284,pl=36285,Qh=36286;var Eo=2300,Uc=2301,wc=2302,Rd=2303,Id=2400,Pd=2401,Ld=2402;var h0=3200;var tu=0,u0=1,Ps="",yi="srgb",To="srgb-linear",Ao="linear",rn="srgb";var Ec=7680;var d0=519,f0=512,p0=513,m0=514,eu=515,g0=516,_0=517,nu=518,x0=519,cf=35044;var hf="300 es",Vi=2e3,ma=2001;function N_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function U_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v0(){let i=Co("canvas");return i.style.display="block",i}var nm={},ga=null;function Ro(...i){let t="THREE."+i.shift();ga?ga("log",t,...i):console.log(t,...i)}function y0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=y0(i);let t="THREE."+i.shift();if(ga)ga("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=y0(i);let t="THREE."+i.shift();if(ga)ga("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function br(...i){let t=i.join(" ");t in nm||(nm[t]=!0,ve(...i))}function S0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var M0={[Tc]:Ac,[Cc]:Pc,[Rc]:Lc,[pa]:Ic,[Ac]:Tc,[Pc]:Cc,[Lc]:Rc,[Ic]:pa},ss=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],im=1234567,So=Math.PI/180,_a=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[e&63|128]+Zn[e>>8&255]+"-"+Zn[e>>16&255]+Zn[e>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function uf(i,t){return(i%t+t)%t}function F_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function O_(i,t,e){return i!==t?(e-i)/(t-i):0}function Mo(i,t,e){return(1-e)*i+e*t}function B_(i,t,e,n){return Mo(i,t,1-Math.exp(-e*n))}function k_(i,t=1){return t-Math.abs(uf(i,t*2)-t)}function z_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function V_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function H_(i,t){return i+Math.random()*(t-i)}function G_(i){return i*(.5-Math.random())}function W_(i){i!==void 0&&(im=i);let t=im+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function X_(i){return i*So}function q_(i){return i*_a}function Y_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function J_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Z_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function j_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),h=a(e/2),u=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),_=a((t-n)/2),S=r((n-t)/2),b=a((n-t)/2);switch(s){case"XYX":i.set(l*d,h*v,h*_,l*u);break;case"YZY":i.set(h*_,l*d,h*v,l*u);break;case"ZXZ":i.set(h*v,h*_,l*d,l*u);break;case"XZX":i.set(l*d,h*b,h*S,l*u);break;case"YXY":i.set(h*S,l*d,h*b,l*u);break;case"ZYZ":i.set(h*b,h*S,l*d,l*u);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var df={DEG2RAD:So,RAD2DEG:_a,generateUUID:ns,clamp:Pe,euclideanModulo:uf,mapLinear:F_,inverseLerp:O_,lerp:Mo,damp:B_,pingpong:k_,smoothstep:z_,smootherstep:$_,randInt:V_,randFloat:H_,randFloatSpread:G_,seededRandom:W_,degToRad:X_,radToDeg:q_,isPowerOfTwo:Y_,ceilPowerOfTwo:J_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:j_,normalize:on,denormalize:$i},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let h=n[s+0],u=n[s+1],d=n[s+2],v=n[s+3],_=r[a+0],S=r[a+1],b=r[a+2],P=r[a+3];if(v!==P||h!==_||u!==S||d!==b){let x=h*_+u*S+d*b+v*P;x<0&&(_=-_,S=-S,b=-b,P=-P,x=-x);let g=1-l;if(x<.9995){let k=Math.acos(x),z=Math.sin(k);g=Math.sin(g*k)/z,l=Math.sin(l*k)/z,h=h*g+_*l,u=u*g+S*l,d=d*g+b*l,v=v*g+P*l}else{h=h*g+_*l,u=u*g+S*l,d=d*g+b*l,v=v*g+P*l;let k=1/Math.sqrt(h*h+u*u+d*d+v*v);h*=k,u*=k,d*=k,v*=k}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],h=n[s+1],u=n[s+2],d=n[s+3],v=r[a],_=r[a+1],S=r[a+2],b=r[a+3];return t[e]=l*b+d*v+h*S-u*_,t[e+1]=h*b+d*_+u*v-l*S,t[e+2]=u*b+d*S+l*_-h*v,t[e+3]=d*b-l*v-h*_-u*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,h=Math.sin,u=l(n/2),d=l(s/2),v=l(r/2),_=h(n/2),S=h(s/2),b=h(r/2);switch(a){case"XYZ":this._x=_*d*v+u*S*b,this._y=u*S*v-_*d*b,this._z=u*d*b+_*S*v,this._w=u*d*v-_*S*b;break;case"YXZ":this._x=_*d*v+u*S*b,this._y=u*S*v-_*d*b,this._z=u*d*b-_*S*v,this._w=u*d*v+_*S*b;break;case"ZXY":this._x=_*d*v-u*S*b,this._y=u*S*v+_*d*b,this._z=u*d*b+_*S*v,this._w=u*d*v-_*S*b;break;case"ZYX":this._x=_*d*v-u*S*b,this._y=u*S*v+_*d*b,this._z=u*d*b-_*S*v,this._w=u*d*v+_*S*b;break;case"YZX":this._x=_*d*v+u*S*b,this._y=u*S*v+_*d*b,this._z=u*d*b-_*S*v,this._w=u*d*v-_*S*b;break;case"XZY":this._x=_*d*v-u*S*b,this._y=u*S*v-_*d*b,this._z=u*d*b+_*S*v,this._w=u*d*v+_*S*b;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],h=e[9],u=e[2],d=e[6],v=e[10],_=n+l+v;if(_>0){let S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(d-h)*S,this._y=(r-u)*S,this._z=(a-s)*S}else if(n>l&&n>v){let S=2*Math.sqrt(1+n-l-v);this._w=(d-h)/S,this._x=.25*S,this._y=(s+a)/S,this._z=(r+u)/S}else if(l>v){let S=2*Math.sqrt(1+l-n-v);this._w=(r-u)/S,this._x=(s+a)/S,this._y=.25*S,this._z=(h+d)/S}else{let S=2*Math.sqrt(1+v-n-l);this._w=(a-s)/S,this._x=(r+u)/S,this._y=(h+d)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+a*l+s*u-r*h,this._y=s*d+a*h+r*l-n*u,this._z=r*d+a*u+n*h-s*l,this._w=a*d-n*l-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let h=1-e;if(l<.9995){let u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,h=t.w,u=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+h*u+a*v-l*d,this.y=n+h*d+l*u-r*v,this.z=s+h*v+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,h=e.z;return this.x=s*h-r*l,this.y=r*a-n*h,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},id=new Y,sm=new rs,Re=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u)}set(t,e,n,s,r,a,l,h,u){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],h=n[6],u=n[1],d=n[4],v=n[7],_=n[2],S=n[5],b=n[8],P=s[0],x=s[3],g=s[6],k=s[1],z=s[4],R=s[7],T=s[2],O=s[5],W=s[8];return r[0]=a*P+l*k+h*T,r[3]=a*x+l*z+h*O,r[6]=a*g+l*R+h*W,r[1]=u*P+d*k+v*T,r[4]=u*x+d*z+v*O,r[7]=u*g+d*R+v*W,r[2]=_*P+S*k+b*T,r[5]=_*x+S*z+b*O,r[8]=_*g+S*R+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8];return e*a*d-e*l*u-n*r*d+n*l*h+s*r*u-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=d*a-l*u,_=l*h-d*r,S=u*r-a*h,b=e*v+n*_+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/b;return t[0]=v*P,t[1]=(s*u-d*n)*P,t[2]=(l*n-s*a)*P,t[3]=_*P,t[4]=(d*e-s*h)*P,t[5]=(s*r-l*e)*P,t[6]=S*P,t[7]=(n*h-u*e)*P,t[8]=(a*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*a+u*l)+a+t,-s*u,s*h,-s*(-u*a+h*l)+l+e,0,0,1),this}scale(t,e){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sd.makeScale(t,e)),this}rotate(t){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sd.makeRotation(-t)),this}translate(t,e){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sd=new Re,rm=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){let i={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rn&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rn&&(s.r=fa(s.r),s.g=fa(s.g),s.b=fa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ps?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[To]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:rm,fromXYZ:am,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:n,transfer:rn,toXYZ:rm,fromXYZ:am,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),i}var Xe=K_();function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,Fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{jr===void 0&&(jr=Co("canvas")),jr.width=t.width,jr.height=t.height;let s=jr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=jr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Q_=0,xa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(rd(s[a].image)):r.push(rd(s[a]))}else r=rd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var tx=0,ad=new Y,fi=class i extends ss{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=es,s=es,r=Gn,a=tr,l=Ri,h=gi,u=i.DEFAULT_ANISOTROPY,d=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=ns(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ve(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=ef;fi.DEFAULT_ANISOTROPY=1;var an=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],d=h[4],v=h[8],_=h[1],S=h[5],b=h[9],P=h[2],x=h[6],g=h[10];if(Math.abs(d-_)<.01&&Math.abs(v-P)<.01&&Math.abs(b-x)<.01){if(Math.abs(d+_)<.1&&Math.abs(v+P)<.1&&Math.abs(b+x)<.1&&Math.abs(u+S+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(u+1)/2,R=(S+1)/2,T=(g+1)/2,O=(d+_)/4,W=(v+P)/4,A=(b+x)/4;return z>R&&z>T?z<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(z),s=O/n,r=W/n):R>T?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=W/r,s=A/r),this.set(n,s,r,e),this}let k=Math.sqrt((x-b)*(x-b)+(v-P)*(v-P)+(_-d)*(_-d));return Math.abs(k)<.001&&(k=1),this.x=(x-b)/k,this.y=(v-P)/k,this.z=(_-d)/k,this.w=Math.acos((u+S+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this.w=Pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this.w=Pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends ss{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new fi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Io=class extends fi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends fi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,h,u,d,v,_,S,b,P,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u,d,v,_,S,b,P,x)}set(t,e,n,s,r,a,l,h,u,d,v,_,S,b,P,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=l,g[13]=h,g[2]=u,g[6]=d,g[10]=v,g[14]=_,g[3]=S,g[7]=b,g[11]=P,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Kr.setFromMatrixColumn(t,0).length(),r=1/Kr.setFromMatrixColumn(t,1).length(),a=1/Kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let _=a*d,S=a*v,b=l*d,P=l*v;e[0]=h*d,e[4]=-h*v,e[8]=u,e[1]=S+b*u,e[5]=_-P*u,e[9]=-l*h,e[2]=P-_*u,e[6]=b+S*u,e[10]=a*h}else if(t.order==="YXZ"){let _=h*d,S=h*v,b=u*d,P=u*v;e[0]=_+P*l,e[4]=b*l-S,e[8]=a*u,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=S*l-b,e[6]=P+_*l,e[10]=a*h}else if(t.order==="ZXY"){let _=h*d,S=h*v,b=u*d,P=u*v;e[0]=_-P*l,e[4]=-a*v,e[8]=b+S*l,e[1]=S+b*l,e[5]=a*d,e[9]=P-_*l,e[2]=-a*u,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){let _=a*d,S=a*v,b=l*d,P=l*v;e[0]=h*d,e[4]=b*u-S,e[8]=_*u+P,e[1]=h*v,e[5]=P*u+_,e[9]=S*u-b,e[2]=-u,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){let _=a*h,S=a*u,b=l*h,P=l*u;e[0]=h*d,e[4]=P-_*v,e[8]=b*v+S,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-u*d,e[6]=S*v+b,e[10]=_-P*v}else if(t.order==="XZY"){let _=a*h,S=a*u,b=l*h,P=l*u;e[0]=h*d,e[4]=-v,e[8]=u*d,e[1]=_*v+P,e[5]=a*d,e[9]=S*v-b,e[2]=b*v-S,e[6]=l*d,e[10]=P*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ex,t,nx)}lookAt(t,e,n){let s=this.elements;return xi.subVectors(t,e),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),$s.crossVectors(n,xi),$s.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),$s.crossVectors(n,xi)),$s.normalize(),jl.crossVectors(xi,$s),s[0]=$s.x,s[4]=jl.x,s[8]=xi.x,s[1]=$s.y,s[5]=jl.y,s[9]=xi.y,s[2]=$s.z,s[6]=jl.z,s[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],h=n[8],u=n[12],d=n[1],v=n[5],_=n[9],S=n[13],b=n[2],P=n[6],x=n[10],g=n[14],k=n[3],z=n[7],R=n[11],T=n[15],O=s[0],W=s[4],A=s[8],F=s[12],G=s[1],X=s[5],st=s[9],ct=s[13],j=s[2],et=s[6],pt=s[10],gt=s[14],At=s[3],_t=s[7],wt=s[11],bt=s[15];return r[0]=a*O+l*G+h*j+u*At,r[4]=a*W+l*X+h*et+u*_t,r[8]=a*A+l*st+h*pt+u*wt,r[12]=a*F+l*ct+h*gt+u*bt,r[1]=d*O+v*G+_*j+S*At,r[5]=d*W+v*X+_*et+S*_t,r[9]=d*A+v*st+_*pt+S*wt,r[13]=d*F+v*ct+_*gt+S*bt,r[2]=b*O+P*G+x*j+g*At,r[6]=b*W+P*X+x*et+g*_t,r[10]=b*A+P*st+x*pt+g*wt,r[14]=b*F+P*ct+x*gt+g*bt,r[3]=k*O+z*G+R*j+T*At,r[7]=k*W+z*X+R*et+T*_t,r[11]=k*A+z*st+R*pt+T*wt,r[15]=k*F+z*ct+R*gt+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],h=t[9],u=t[13],d=t[2],v=t[6],_=t[10],S=t[14],b=t[3],P=t[7],x=t[11],g=t[15],k=h*S-u*_,z=l*S-u*v,R=l*_-h*v,T=a*S-u*d,O=a*_-h*d,W=a*v-l*d;return e*(P*k-x*z+g*R)-n*(b*k-x*T+g*O)+s*(b*z-P*T+g*W)-r*(b*R-P*O+x*W)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10];return e*(a*d-l*u)-n*(r*d-l*h)+s*(r*u-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=t[9],_=t[10],S=t[11],b=t[12],P=t[13],x=t[14],g=t[15],k=e*l-n*a,z=e*h-s*a,R=e*u-r*a,T=n*h-s*l,O=n*u-r*l,W=s*u-r*h,A=d*P-v*b,F=d*x-_*b,G=d*g-S*b,X=v*x-_*P,st=v*g-S*P,ct=_*g-S*x,j=k*ct-z*st+R*X+T*G-O*F+W*A;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/j;return t[0]=(l*ct-h*st+u*X)*et,t[1]=(s*st-n*ct-r*X)*et,t[2]=(P*W-x*O+g*T)*et,t[3]=(_*O-v*W-S*T)*et,t[4]=(h*G-a*ct-u*F)*et,t[5]=(e*ct-s*G+r*F)*et,t[6]=(x*R-b*W-g*z)*et,t[7]=(d*W-_*R+S*z)*et,t[8]=(a*st-l*G+u*A)*et,t[9]=(n*G-e*st-r*A)*et,t[10]=(b*O-P*R+g*k)*et,t[11]=(v*R-d*O-S*k)*et,t[12]=(l*F-a*X-h*A)*et,t[13]=(e*X-n*F+s*A)*et,t[14]=(P*z-b*T-x*k)*et,t[15]=(d*T-v*z+_*k)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,h=t.z,u=r*a,d=r*l;return this.set(u*a+n,u*l-s*h,u*h+s*l,0,u*l+s*h,d*l+n,d*h-s*a,0,u*h-s*l,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,h=e._w,u=r+r,d=a+a,v=l+l,_=r*u,S=r*d,b=r*v,P=a*d,x=a*v,g=l*v,k=h*u,z=h*d,R=h*v,T=n.x,O=n.y,W=n.z;return s[0]=(1-(P+g))*T,s[1]=(S+R)*T,s[2]=(b-z)*T,s[3]=0,s[4]=(S-R)*O,s[5]=(1-(_+g))*O,s[6]=(x+k)*O,s[7]=0,s[8]=(b+z)*W,s[9]=(x-k)*W,s[10]=(1-(_+P))*W,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Kr.set(s[0],s[1],s[2]).length(),l=Kr.set(s[4],s[5],s[6]).length(),h=Kr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Oi.copy(this);let u=1/a,d=1/l,v=1/h;return Oi.elements[0]*=u,Oi.elements[1]*=u,Oi.elements[2]*=u,Oi.elements[4]*=d,Oi.elements[5]*=d,Oi.elements[6]*=d,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,e.setFromRotationMatrix(Oi),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,s,r,a,l=Vi,h=!1){let u=this.elements,d=2*r/(e-t),v=2*r/(n-s),_=(e+t)/(e-t),S=(n+s)/(n-s),b,P;if(h)b=r/(a-r),P=a*r/(a-r);else if(l===Vi)b=-(a+r)/(a-r),P=-2*a*r/(a-r);else if(l===ma)b=-a/(a-r),P=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=_,u[12]=0,u[1]=0,u[5]=v,u[9]=S,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=P,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Vi,h=!1){let u=this.elements,d=2/(e-t),v=2/(n-s),_=-(e+t)/(e-t),S=-(n+s)/(n-s),b,P;if(h)b=1/(a-r),P=a/(a-r);else if(l===Vi)b=-2/(a-r),P=-(a+r)/(a-r);else if(l===ma)b=-1/(a-r),P=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=_,u[1]=0,u[5]=v,u[9]=0,u[13]=S,u[2]=0,u[6]=0,u[10]=b,u[14]=P,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Kr=new Y,Oi=new qe,ex=new Y(0,0,0),nx=new Y(1,1,1),$s=new Y,jl=new Y,xi=new Y,om=new qe,lm=new rs,Is=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],h=s[1],u=s[5],d=s[9],v=s[2],_=s[6],S=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,S),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(_,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Pe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,S),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return om.makeRotationFromQuaternion(t),this.setFromRotationMatrix(om,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lm.setFromEuler(this),this.setFromQuaternion(lm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ix=0,cm=new Y,Qr=new rs,ws=new qe,Kl=new Y,fo=new Y,sx=new Y,rx=new rs,hm=new Y(1,0,0),um=new Y(0,1,0),dm=new Y(0,0,1),fm={type:"added"},ax={type:"removed"},ta={type:"childadded",child:null},od={type:"childremoved",child:null},On=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new Is,n=new rs,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Re}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(hm,t)}rotateY(t){return this.rotateOnAxis(um,t)}rotateZ(t){return this.rotateOnAxis(dm,t)}translateOnAxis(t,e){return cm.copy(t).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hm,t)}translateY(t){return this.translateOnAxis(um,t)}translateZ(t){return this.translateOnAxis(dm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ws.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kl.copy(t):Kl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ws.lookAt(fo,Kl,this.up):ws.lookAt(Kl,fo,this.up),this.quaternion.setFromRotationMatrix(ws),s&&(ws.extractRotation(s.matrixWorld),Qr.setFromRotationMatrix(ws),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fm),ta.child=t,this.dispatchEvent(ta),ta.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ax),od.child=t,this.dispatchEvent(od),od.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fm),ta.child=t,this.dispatchEvent(ta),ta.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,sx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,rx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){let v=h[u];r(t.shapes,v)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(r(t.materials,this.material[h]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];s.animations.push(r(t.animations,h))}}if(e){let l=a(t.geometries),h=a(t.materials),u=a(t.textures),d=a(t.images),v=a(t.shapes),_=a(t.skeletons),S=a(t.animations),b=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),S.length>0&&(n.animations=S),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(l){let h=[];for(let u in l){let d=l[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};On.DEFAULT_UP=new Y(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},ox={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let P of t.hand.values()){let x=e.getJointPose(P,n),g=this._getHandJoint(u,P);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let d=u.joints["index-finger-tip"],v=u.joints["thumb-tip"],_=d.position.distanceTo(v.position),S=.02,b=.005;u.inputState.pinching&&_>S+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&_<=S-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function ld(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xe.workingColorSpace){if(t=uf(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ld(a,r,t+1/3),this.g=ld(a,r,t),this.b=ld(a,r,t-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(t,e=yi){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ve("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yi){let n=b0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Xe.workingToColorSpace(jn.copy(this),t),Math.round(Pe(jn.r*255,0,255))*65536+Math.round(Pe(jn.g*255,0,255))*256+Math.round(Pe(jn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xe.workingColorSpace){Xe.workingToColorSpace(jn.copy(this),e);let n=jn.r,s=jn.g,r=jn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),h,u,d=(l+a)/2;if(l===a)h=0,u=0;else{let v=a-l;switch(u=d<=.5?v/(a+l):v/(2-a-l),a){case n:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-n)/v+2;break;case r:h=(n-s)/v+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=Xe.workingColorSpace){return Xe.workingToColorSpace(jn.copy(this),e),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=yi){Xe.workingToColorSpace(jn.copy(this),t);let e=jn.r,n=jn.g,s=jn.b;return t!==yi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vs),this.setHSL(Vs.h+t,Vs.s+e,Vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vs),t.getHSL(Ql);let n=Mo(Vs.h,Ql.h,e),s=Mo(Vs.s,Ql.s,e),r=Mo(Vs.l,Ql.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new xe;xe.NAMES=b0;var Po=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=new Y,Es=new Y,cd=new Y,Ts=new Y,ea=new Y,na=new Y,pm=new Y,hd=new Y,ud=new Y,dd=new Y,fd=new an,pd=new an,md=new an,Xs=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bi.subVectors(t,e),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bi.subVectors(s,e),Es.subVectors(n,e),cd.subVectors(t,e);let a=Bi.dot(Bi),l=Bi.dot(Es),h=Bi.dot(cd),u=Es.dot(Es),d=Es.dot(cd),v=a*u-l*l;if(v===0)return r.set(0,0,0),null;let _=1/v,S=(u*h-l*d)*_,b=(a*d-l*h)*_;return r.set(1-S-b,b,S)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,n,s,r,a,l,h){return this.getBarycoord(t,e,n,s,Ts)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ts.x),h.addScaledVector(a,Ts.y),h.addScaledVector(l,Ts.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return fd.setScalar(0),pd.setScalar(0),md.setScalar(0),fd.fromBufferAttribute(t,e),pd.fromBufferAttribute(t,n),md.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fd,r.x),a.addScaledVector(pd,r.y),a.addScaledVector(md,r.z),a}static isFrontFacing(t,e,n,s){return Bi.subVectors(n,e),Es.subVectors(t,e),Bi.cross(Es).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Bi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ea.subVectors(s,n),na.subVectors(r,n),hd.subVectors(t,n);let h=ea.dot(hd),u=na.dot(hd);if(h<=0&&u<=0)return e.copy(n);ud.subVectors(t,s);let d=ea.dot(ud),v=na.dot(ud);if(d>=0&&v<=d)return e.copy(s);let _=h*v-d*u;if(_<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(ea,a);dd.subVectors(t,r);let S=ea.dot(dd),b=na.dot(dd);if(b>=0&&S<=b)return e.copy(r);let P=S*u-h*b;if(P<=0&&u>=0&&b<=0)return l=u/(u-b),e.copy(n).addScaledVector(na,l);let x=d*b-S*v;if(x<=0&&v-d>=0&&S-b>=0)return pm.subVectors(r,s),l=(v-d)/(v-d+(S-b)),e.copy(s).addScaledVector(pm,l);let g=1/(x+P+_);return a=P*g,l=_*g,e.copy(n).addScaledVector(ea,a).addScaledVector(na,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ki):ki.fromBufferAttribute(r,a),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),ec.subVectors(this.max,po),ia.subVectors(t.a,po),sa.subVectors(t.b,po),ra.subVectors(t.c,po),Hs.subVectors(sa,ia),Gs.subVectors(ra,sa),xr.subVectors(ia,ra);let e=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-xr.z,xr.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,xr.z,0,-xr.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-xr.y,xr.x,0];return!gd(e,ia,sa,ra,ec)||(e=[1,0,0,0,1,0,0,0,1],!gd(e,ia,sa,ra,ec))?!1:(nc.crossVectors(Hs,Gs),e=[nc.x,nc.y,nc.z],gd(e,ia,sa,ra,ec))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(As),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},As=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ki=new Y,tc=new ii,ia=new Y,sa=new Y,ra=new Y,Hs=new Y,Gs=new Y,xr=new Y,po=new Y,ec=new Y,nc=new Y,vr=new Y;function gd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vr.fromArray(i,r);let l=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),h=t.dot(vr),u=e.dot(vr),d=n.dot(vr);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>l)return!1}return!0}var An=new Y,ic=new zt,lx=0,hn=class extends ss{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cf,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ic.fromBufferAttribute(this,e),ic.applyMatrix3(t),this.setXY(e,ic.x,ic.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyMatrix3(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Do=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Sn=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},cx=new ii,mo=new Y,_d=new Y,mi=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);let e=mo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_d.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(_d)),this.expandByPoint(mo.copy(t.center).sub(_d))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hx=0,Ai=new qe,xd=new On,aa=new Y,vi=new ii,go=new ii,Un=new Y,Mn=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(N_(t)?Do:Lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,n){return Ai.makeTranslation(t,e,n),this.applyMatrix4(Ai),this}scale(t,e,n){return Ai.makeScale(t,e,n),this.applyMatrix4(Ai),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vi.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];go.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(vi.min,go.min),vi.expandByPoint(Un),Un.addVectors(vi.max,go.max),vi.expandByPoint(Un)):(vi.expandByPoint(go.min),vi.expandByPoint(go.max))}vi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Un));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],h=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Un.fromBufferAttribute(l,u),h&&(aa.fromBufferAttribute(t,u),Un.add(aa)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],h=[];for(let A=0;A<n.count;A++)l[A]=new Y,h[A]=new Y;let u=new Y,d=new Y,v=new Y,_=new zt,S=new zt,b=new zt,P=new Y,x=new Y;function g(A,F,G){u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,G),_.fromBufferAttribute(r,A),S.fromBufferAttribute(r,F),b.fromBufferAttribute(r,G),d.sub(u),v.sub(u),S.sub(_),b.sub(_);let X=1/(S.x*b.y-b.x*S.y);isFinite(X)&&(P.copy(d).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(X),x.copy(v).multiplyScalar(S.x).addScaledVector(d,-b.x).multiplyScalar(X),l[A].add(P),l[F].add(P),l[G].add(P),h[A].add(x),h[F].add(x),h[G].add(x))}let k=this.groups;k.length===0&&(k=[{start:0,count:t.count}]);for(let A=0,F=k.length;A<F;++A){let G=k[A],X=G.start,st=G.count;for(let ct=X,j=X+st;ct<j;ct+=3)g(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}let z=new Y,R=new Y,T=new Y,O=new Y;function W(A){T.fromBufferAttribute(s,A),O.copy(T);let F=l[A];z.copy(F),z.sub(T.multiplyScalar(T.dot(F))).normalize(),R.crossVectors(O,F);let X=R.dot(h[A])<0?-1:1;a.setXYZW(A,z.x,z.y,z.z,X)}for(let A=0,F=k.length;A<F;++A){let G=k[A],X=G.start,st=G.count;for(let ct=X,j=X+st;ct<j;ct+=3)W(t.getX(ct+0)),W(t.getX(ct+1)),W(t.getX(ct+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,S=n.count;_<S;_++)n.setXYZ(_,0,0,0);let s=new Y,r=new Y,a=new Y,l=new Y,h=new Y,u=new Y,d=new Y,v=new Y;if(t)for(let _=0,S=t.count;_<S;_+=3){let b=t.getX(_+0),P=t.getX(_+1),x=t.getX(_+2);s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,P),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),l.add(d),h.add(d),u.add(d),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let _=0,S=e.count;_<S;_+=3)s.fromBufferAttribute(e,_+0),r.fromBufferAttribute(e,_+1),a.fromBufferAttribute(e,_+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(l,h){let u=l.array,d=l.itemSize,v=l.normalized,_=new u.constructor(h.length*d),S=0,b=0;for(let P=0,x=h.length;P<x;P++){l.isInterleavedBufferAttribute?S=h[P]*l.data.stride+l.offset:S=h[P]*d;for(let g=0;g<d;g++)_[b++]=u[S++]}return new hn(_,d,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let h=s[l],u=t(h,n);e.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,v=u.length;d<v;d++){let _=u[d],S=t(_,n);h.push(S)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],d=[];for(let v=0,_=u.length;v<_;v++){let S=u[v];d.push(S.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(e))}let r=t.morphAttributes;for(let u in r){let d=[],v=r[u];for(let _=0,S=v.length;_<S;_++)d.push(v[_].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,d=a.length;u<d;u++){let v=a[u];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cf,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ni=new Y,Gi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vd=new Y,ux=new Y,dx=new Re,zi=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vd.subVectors(n,e).cross(ux.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(vd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dx.getNormalMatrix(t),s=this.coplanarPoint(vd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fx=0,as=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Ca,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=qd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ve(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let h=r[l];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Cs=new Y,yd=new Y,sc=new Y,rc=new Y,wr=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,e),Cs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yd.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),rc.copy(this.origin).sub(yd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sc),l=rc.dot(this.direction),h=-rc.dot(sc),u=rc.lengthSq(),d=Math.abs(1-a*a),v,_,S,b;if(d>0)if(v=a*h-l,_=a*l-h,b=r*d,v>=0)if(_>=-b)if(_<=b){let P=1/d;v*=P,_*=P,S=v*(v+a*_+2*l)+_*(a*v+_+2*h)+u}else _=r,v=Math.max(0,-(a*_+l)),S=-v*v+_*(_+2*h)+u;else _=-r,v=Math.max(0,-(a*_+l)),S=-v*v+_*(_+2*h)+u;else _<=-b?(v=Math.max(0,-(-a*r+l)),_=v>0?-r:Math.min(Math.max(-r,-h),r),S=-v*v+_*(_+2*h)+u):_<=b?(v=0,_=Math.min(Math.max(-r,-h),r),S=_*(_+2*h)+u):(v=Math.max(0,-(a*r+l)),_=v>0?r:Math.min(Math.max(-r,-h),r),S=-v*v+_*(_+2*h)+u);else _=a>0?-r:r,v=Math.max(0,-(a*_+l)),S=-v*v+_*(_+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(yd).addScaledVector(sc,_),S}intersectSphere(t,e){if(t.radius<0)return null;Cs.subVectors(t.center,this.origin);let n=Cs.dot(this.direction),s=Cs.dot(Cs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,h,u=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,_=this.origin;return u>=0?(n=(t.min.x-_.x)*u,s=(t.max.x-_.x)*u):(n=(t.max.x-_.x)*u,s=(t.min.x-_.x)*u),d>=0?(r=(t.min.y-_.y)*d,a=(t.max.y-_.y)*d):(r=(t.max.y-_.y)*d,a=(t.min.y-_.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-_.z)*v,h=(t.max.z-_.z)*v):(l=(t.max.z-_.z)*v,h=(t.min.z-_.z)*v),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,h=l.x,u=l.y,d=l.z,v=t.x-a.x,_=t.y-a.y,S=t.z-a.z,b=e.x-a.x,P=e.y-a.y,x=e.z-a.z,g=n.x-a.x,k=n.y-a.y,z=n.z-a.z,R=Math.abs(h),T=Math.abs(u),O=Math.abs(d),W,A,F,G,X,st,ct,j,et,pt,gt,At;if(R>=T&&R>=O?(F=h,st=v,et=b,At=g,h>=0?(W=u,A=d,G=_,X=S,ct=P,j=x,pt=k,gt=z):(W=d,A=u,G=S,X=_,ct=x,j=P,pt=z,gt=k)):T>=O?(F=u,st=_,et=P,At=k,u>=0?(W=d,A=h,G=S,X=v,ct=x,j=b,pt=z,gt=g):(W=h,A=d,G=v,X=S,ct=b,j=x,pt=g,gt=z)):(F=d,st=S,et=x,At=z,d>=0?(W=h,A=u,G=v,X=_,ct=b,j=P,pt=g,gt=k):(W=u,A=h,G=_,X=v,ct=P,j=b,pt=k,gt=g)),F===0)return null;let _t=W/F,wt=A/F,bt=1/F,Wt=G-_t*st,te=X-wt*st,Ye=ct-_t*et,Le=j-wt*et,Ve=pt-_t*At,vt=gt-wt*At,yt=Ve*Le-vt*Ye,Ut=Wt*vt-te*Ve,he=Ye*te-Le*Wt;if(s){if(yt<0||Ut<0||he<0)return null}else if((yt<0||Ut<0||he<0)&&(yt>0||Ut>0||he>0))return null;let jt=yt+Ut+he;if(jt===0)return null;let ge=bt*(yt*st+Ut*et+he*At);return(jt>0?ge<0:ge>0)?null:this.at(ge/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Er=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mm=new qe,yr=new wr,ac=new mi,gm=new Y,oc=new Y,lc=new Y,cc=new Y,Sd=new Y,hc=new Y,_m=new Y,uc=new Y,Bn=class extends On{constructor(t=new Mn,e=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){hc.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let d=l[h],v=r[h];d!==0&&(Sd.fromBufferAttribute(v,t),a?hc.addScaledVector(Sd,d):hc.addScaledVector(Sd.sub(e),d))}e.add(hc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),yr.copy(t.ray).recast(t.near),!(ac.containsPoint(yr.origin)===!1&&(yr.intersectSphere(ac,gm)===null||yr.origin.distanceToSquared(gm)>(t.far-t.near)**2))&&(mm.copy(r).invert(),yr.copy(t.ray).applyMatrix4(mm),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,h=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,_=r.groups,S=r.drawRange;if(l!==null)if(Array.isArray(a))for(let b=0,P=_.length;b<P;b++){let x=_[b],g=a[x.materialIndex],k=Math.max(x.start,S.start),z=Math.min(l.count,Math.min(x.start+x.count,S.start+S.count));for(let R=k,T=z;R<T;R+=3){let O=l.getX(R),W=l.getX(R+1),A=l.getX(R+2);s=dc(this,g,t,n,u,d,v,O,W,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,S.start),P=Math.min(l.count,S.start+S.count);for(let x=b,g=P;x<g;x+=3){let k=l.getX(x),z=l.getX(x+1),R=l.getX(x+2);s=dc(this,a,t,n,u,d,v,k,z,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let b=0,P=_.length;b<P;b++){let x=_[b],g=a[x.materialIndex],k=Math.max(x.start,S.start),z=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let R=k,T=z;R<T;R+=3){let O=R,W=R+1,A=R+2;s=dc(this,g,t,n,u,d,v,O,W,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let b=Math.max(0,S.start),P=Math.min(h.count,S.start+S.count);for(let x=b,g=P;x<g;x+=3){let k=x,z=x+1,R=x+2;s=dc(this,a,t,n,u,d,v,k,z,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function px(i,t,e,n,s,r,a,l){let h;if(t.side===si?h=n.intersectTriangle(a,r,s,!0,l):h=n.intersectTriangle(s,r,a,t.side===Ks,l),h===null)return null;uc.copy(l),uc.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(uc);return u<e.near||u>e.far?null:{distance:u,point:uc.clone(),object:i}}function dc(i,t,e,n,s,r,a,l,h,u){i.getVertexPosition(l,oc),i.getVertexPosition(h,lc),i.getVertexPosition(u,cc);let d=px(i,t,e,n,oc,lc,cc,_m);if(d){let v=new Y;Xs.getBarycoord(_m,oc,lc,cc,v),s&&(d.uv=Xs.getInterpolatedAttribute(s,l,h,u,v,new zt)),r&&(d.uv1=Xs.getInterpolatedAttribute(r,l,h,u,v,new zt)),a&&(d.normal=Xs.getInterpolatedAttribute(a,l,h,u,v,new Y),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let _={a:l,b:h,c:u,normal:new Y,materialIndex:0};Xs.getNormal(oc,lc,cc,_.normal),d.face=_,d.barycoord=v}return d}var No=class extends fi{constructor(t=null,e=1,n=1,s,r,a,l,h,u=Fn,d=Fn,v,_){super(null,a,l,h,u,d,s,r,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},oa=new qe,xm=new qe,fc=[],vm=new ii,mx=new qe,_o=new Bn,xo=new mi,Fo=class extends Bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oa),vm.copy(t.boundingBox).applyMatrix4(oa),this.boundingBox.union(vm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oa),xo.copy(t.boundingSphere).applyMatrix4(oa),this.boundingSphere.union(xo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),t.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oa),xm.multiplyMatrices(n,oa),_o.matrixWorld=xm,_o.raycast(t,fc);for(let a=0,l=fc.length;a<l;a++){let h=fc[a];h.instanceId=r,h.object=this,e.push(h)}fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(s*this.count),s,this.count,yh,Ci));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=l,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new mi,gx=new zt(.5,.5),pc=new Y,Sa=class{constructor(t=new zi,e=new zi,n=new zi,s=new zi,r=new zi,a=new zi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],d=r[4],v=r[5],_=r[6],S=r[7],b=r[8],P=r[9],x=r[10],g=r[11],k=r[12],z=r[13],R=r[14],T=r[15];if(s[0].setComponents(u-a,S-d,g-b,T-k).normalize(),s[1].setComponents(u+a,S+d,g+b,T+k).normalize(),s[2].setComponents(u+l,S+v,g+P,T+z).normalize(),s[3].setComponents(u-l,S-v,g-P,T-z).normalize(),n)s[4].setComponents(h,_,x,R).normalize(),s[5].setComponents(u-h,S-_,g-x,T-R).normalize();else if(s[4].setComponents(u-h,S-_,g-x,T-R).normalize(),e===Vi)s[5].setComponents(u+h,S+_,g+x,T+R).normalize();else if(e===ma)s[5].setComponents(h,_,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);let e=gx.distanceTo(t.center);return Sr.radius=.7071067811865476+e,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pc.x=s.normal.x>0?t.max.x:t.min.x,pc.y=s.normal.y>0?t.max.y:t.min.y,pc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zc=new Y,$c=new Y,ym=new qe,vo=new wr,mc=new mi,Md=new Y,Sm=new Y,Vc=class extends On{constructor(t=new Mn,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zc.fromBufferAttribute(e,s-1),$c.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zc.distanceTo($c);t.setAttribute("lineDistance",new Sn(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,t.ray.intersectsSphere(mc)===!1)return;ym.copy(s).invert(),vo.copy(t.ray).applyMatrix4(ym);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,d=n.index,_=n.attributes.position;if(d!==null){let S=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let P=S,x=b-1;P<x;P+=u){let g=d.getX(P),k=d.getX(P+1),z=gc(this,t,vo,h,g,k,P);z&&e.push(z)}if(this.isLineLoop){let P=d.getX(b-1),x=d.getX(S),g=gc(this,t,vo,h,P,x,b-1);g&&e.push(g)}}else{let S=Math.max(0,a.start),b=Math.min(_.count,a.start+a.count);for(let P=S,x=b-1;P<x;P+=u){let g=gc(this,t,vo,h,P,P+1,P);g&&e.push(g)}if(this.isLineLoop){let P=gc(this,t,vo,h,b-1,S,b-1);P&&e.push(P)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function gc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(zc.fromBufferAttribute(l,s),$c.fromBufferAttribute(l,r),e.distanceSqToSegment(zc,$c,Md,Sm)>n)return;Md.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Md);if(!(u<t.near||u>t.far))return{distance:u,point:Sm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Oo=class extends Vc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Hc=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mm=new qe,Dd=new wr,_c=new mi,xc=new Y,Ar=class extends On{constructor(t=new Mn,e=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,t.ray.intersectsSphere(_c)===!1)return;Mm.copy(s).invert(),Dd.copy(t.ray).applyMatrix4(Mm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,v=n.attributes.position;if(u!==null){let _=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let b=_,P=S;b<P;b++){let x=u.getX(b);xc.fromBufferAttribute(v,x),bm(xc,x,h,s,t,e,this)}}else{let _=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let b=_,P=S;b<P;b++)xc.fromBufferAttribute(v,b),bm(xc,b,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function bm(i,t,e,n,s,r,a){let l=Dd.distanceSqToPoint(i);if(l<e){let h=new Y;Dd.closestPointToPoint(i,h),h.applyMatrix4(n);let u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Bo=class extends fi{constructor(t=[],e=Qs,n,s,r,a,l,h,u,d){super(t,e,n,s,r,a,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var qs=class extends fi{constructor(t,e,n=Xi,s,r,a,l=Fn,h=Fn,u,d=is,v=1){if(d!==is&&d!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:t,height:e,depth:v};super(_,s,r,a,l,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gc=class extends qs{constructor(t,e=Xi,n=Qs,s,r,a=Fn,l=Fn,h,u=is){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,h,u),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ko=class extends fi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ma=class i extends Mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],v=[],_=0,S=0;b("z","y","x",-1,-1,n,e,t,a,r,0),b("z","y","x",1,-1,n,e,-t,a,r,1),b("x","z","y",1,1,t,n,e,s,a,2),b("x","z","y",1,-1,t,n,-e,s,a,3),b("x","y","z",1,-1,t,e,n,s,r,4),b("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(v,2));function b(P,x,g,k,z,R,T,O,W,A,F){let G=R/W,X=T/A,st=R/2,ct=T/2,j=O/2,et=W+1,pt=A+1,gt=0,At=0,_t=new Y;for(let wt=0;wt<pt;wt++){let bt=wt*X-ct;for(let Wt=0;Wt<et;Wt++){let te=Wt*G-st;_t[P]=te*k,_t[x]=bt*z,_t[g]=j,u.push(_t.x,_t.y,_t.z),_t[P]=0,_t[x]=0,_t[g]=O>0?1:-1,d.push(_t.x,_t.y,_t.z),v.push(Wt/W),v.push(1-wt/A),gt+=1}}for(let wt=0;wt<A;wt++)for(let bt=0;bt<W;bt++){let Wt=_+bt+et*wt,te=_+bt+et*(wt+1),Ye=_+(bt+1)+et*(wt+1),Le=_+(bt+1)+et*wt;h.push(Wt,te,Le),h.push(te,Ye,Le),At+=6}l.addGroup(S,At,F),S+=At,_+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zo=class i extends Mn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],_=[],S=[],b=0,P=[],x=n/2,g=0;k(),a===!1&&(t>0&&z(!0),e>0&&z(!1)),this.setIndex(d),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(S,2));function k(){let R=new Y,T=new Y,O=0,W=(e-t)/n;for(let A=0;A<=r;A++){let F=[],G=A/r,X=G*(e-t)+t;for(let st=0;st<=s;st++){let ct=st/s,j=ct*h+l,et=Math.sin(j),pt=Math.cos(j);T.x=X*et,T.y=-G*n+x,T.z=X*pt,v.push(T.x,T.y,T.z),R.set(et,W,pt).normalize(),_.push(R.x,R.y,R.z),S.push(ct,1-G),F.push(b++)}P.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let G=P[F][A],X=P[F+1][A],st=P[F+1][A+1],ct=P[F][A+1];(t>0||F!==0)&&(d.push(G,X,ct),O+=3),(e>0||F!==r-1)&&(d.push(X,st,ct),O+=3)}u.addGroup(g,O,0),g+=O}function z(R){let T=b,O=new zt,W=new Y,A=0,F=R===!0?t:e,G=R===!0?1:-1;for(let st=1;st<=s;st++)v.push(0,x*G,0),_.push(0,G,0),S.push(.5,.5),b++;let X=b;for(let st=0;st<=s;st++){let j=st/s*h+l,et=Math.cos(j),pt=Math.sin(j);W.x=F*pt,W.y=x*G,W.z=F*et,v.push(W.x,W.y,W.z),_.push(0,G,0),O.x=et*.5+.5,O.y=pt*.5*G+.5,S.push(O.x,O.y),b++}for(let st=0;st<s;st++){let ct=T+st,j=X+st;R===!0?d.push(j,j+1,ct):d.push(j+1,j,ct),A+=3}u.addGroup(g,A,R===!0?1:2),g+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,h=r-1,u;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),u=n[s]-a,u<0)l=s+1;else if(u>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let d=n[s],_=n[s+1]-d,S=(a-d)/_;return(s+S)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),h=e||(a.isVector2?new zt:new Y);return h.copy(l).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,s=[],r=[],a=[],l=new Y,h=new qe;for(let S=0;S<=t;S++){let b=S/t;s[S]=this.getTangentAt(b,new Y)}r[0]=new Y,a[0]=new Y;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),v<=u&&(u=v,n.set(0,1,0)),_<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let S=1;S<=t;S++){if(r[S]=r[S-1].clone(),a[S]=a[S-1].clone(),l.crossVectors(s[S-1],s[S]),l.length()>Number.EPSILON){l.normalize();let b=Math.acos(Pe(s[S-1].dot(s[S]),-1,1));r[S].applyMatrix4(h.makeRotationAxis(l,b))}a[S].crossVectors(s[S],r[S])}if(e===!0){let S=Math.acos(Pe(r[0].dot(r[t]),-1,1));S/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(S=-S);for(let b=1;b<=t;b++)r[b].applyMatrix4(h.makeRotationAxis(s[b],S*b)),a[b].crossVectors(s[b],r[b])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ba=class extends Si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=h-this.aX,S=u-this.aY;h=_*d-S*v+this.aX,u=_*v+S*d+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wc=class extends ba{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ff(){let i=0,t=0,e=0,n=0;function s(r,a,l,h){i=r,t=l,e=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,u){s(a,l,u*(l-r),u*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,u,d,v){let _=(a-r)/u-(l-r)/(u+d)+(l-a)/d,S=(l-a)/d-(h-a)/(d+v)+(h-l)/v;_*=d,S*=d,s(a,l,_,S)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var wm=new Y,Em=new Y,bd=new ff,wd=new ff,Ed=new ff,Xc=class extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Y){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let u,d;this.closed||l>0?u=s[(l-1)%r]:(Em.subVectors(s[0],s[1]).add(s[0]),u=Em);let v=s[l%r],_=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(wm.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=wm),this.curveType==="centripetal"||this.curveType==="chordal"){let S=this.curveType==="chordal"?.5:.25,b=Math.pow(u.distanceToSquared(v),S),P=Math.pow(v.distanceToSquared(_),S),x=Math.pow(_.distanceToSquared(d),S);P<1e-4&&(P=1),b<1e-4&&(b=P),x<1e-4&&(x=P),bd.initNonuniformCatmullRom(u.x,v.x,_.x,d.x,b,P,x),wd.initNonuniformCatmullRom(u.y,v.y,_.y,d.y,b,P,x),Ed.initNonuniformCatmullRom(u.z,v.z,_.z,d.z,b,P,x)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(u.x,v.x,_.x,d.x,this.tension),wd.initCatmullRom(u.y,v.y,_.y,d.y,this.tension),Ed.initCatmullRom(u.z,v.z,_.z,d.z,this.tension));return n.set(bd.calc(h),wd.calc(h),Ed.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Tm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,h=i*l;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*l+r*i+e}function _x(i,t){let e=1-i;return e*e*t}function xx(i,t){return 2*(1-i)*i*t}function vx(i,t){return i*i*t}function bo(i,t,e,n){return _x(i,t)+xx(i,e)+vx(i,n)}function yx(i,t){let e=1-i;return e*e*e*t}function Sx(i,t){let e=1-i;return 3*e*e*i*t}function Mx(i,t){return 3*(1-i)*i*i*t}function bx(i,t){return i*i*i*t}function wo(i,t,e,n,s){return yx(i,t)+Sx(i,e)+Mx(i,n)+bx(i,s)}var $o=class extends Si{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(wo(t,s.x,r.x,a.x,l.x),wo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qc=class extends Si{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(wo(t,s.x,r.x,a.x,l.x),wo(t,s.y,r.y,a.y,l.y),wo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vo=class extends Si{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends Si{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Si{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bo(t,s.x,r.x,a.x),bo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends Si{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bo(t,s.x,r.x,a.x),bo(t,s.y,r.y,a.y),bo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,h=s[a===0?a:a-1],u=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(Tm(l,h.x,u.x,d.x,v.x),Tm(l,h.y,u.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Nd=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:Xc,CubicBezierCurve:$o,CubicBezierCurve3:qc,EllipseCurve:ba,LineCurve:Vo,LineCurve3:Yc,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Jc,SplineCurve:Go}),Zc=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],h=l.getLength(),u=h===0?0:1-a/h;return l.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(l);for(let u=0;u<h.length;u++){let d=h[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nd[s.type]().fromJSON(s))}return this}},Cr=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vo(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ho(this.currentPoint.clone(),new zt(t,e),new zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new $o(this.currentPoint.clone(),new zt(t,e),new zt(n,s),new zt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+l,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,h){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,s,r,a,l,h),this}absellipse(t,e,n,s,r,a,l,h){let u=new ba(t,e,n,s,r,a,l,h);if(this.curves.length>0){let v=u.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wa=class extends Cr{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cr().fromJSON(s))}return this}};function wx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=w0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,u;if(n&&(r=Rx(i,t,r,e)),i.length>80*e){l=i[0],h=i[1];let d=l,v=h;for(let _=e;_<s;_+=e){let S=i[_],b=i[_+1];S<l&&(l=S),b<h&&(h=b),S>d&&(d=S),b>v&&(v=b)}u=Math.max(d-l,v-h),u=u!==0?32767/u:0}return Wo(r,a,e,l,h,u,0),a}function w0(i,t,e,n,s){let r;if(s===zx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Am(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Am(a/n|0,i[a],i[a+1],r);return r&&Ea(r,r.next)&&(qo(r),r=r.next),r}function Rr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ea(e,e.next)||vn(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let h=i.prev,u=i.next;if(r?Tx(i,n,s,r):Ex(i)){t.push(h.i,i.i,u.i),qo(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=Ax(Rr(i),t),Wo(i,t,e,n,s,r,2)):a===2&&Cx(i,t,e,n,s,r):Wo(Rr(i),t,e,n,s,r,1);break}}}function Ex(i){let t=i.prev,e=i,n=i.next;if(vn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,h=e.y,u=n.y,d=Math.min(s,r,a),v=Math.min(l,h,u),_=Math.max(s,r,a),S=Math.max(l,h,u),b=n.next;for(;b!==t;){if(b.x>=d&&b.x<=_&&b.y>=v&&b.y<=S&&yo(s,l,r,h,a,u,b.x,b.y)&&vn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Tx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let l=s.x,h=r.x,u=a.x,d=s.y,v=r.y,_=a.y,S=Math.min(l,h,u),b=Math.min(d,v,_),P=Math.max(l,h,u),x=Math.max(d,v,_),g=Ud(S,b,t,e,n),k=Ud(P,x,t,e,n),z=i.prevZ,R=i.nextZ;for(;z&&z.z>=g&&R&&R.z<=k;){if(z.x>=S&&z.x<=P&&z.y>=b&&z.y<=x&&z!==s&&z!==a&&yo(l,d,h,v,u,_,z.x,z.y)&&vn(z.prev,z,z.next)>=0||(z=z.prevZ,R.x>=S&&R.x<=P&&R.y>=b&&R.y<=x&&R!==s&&R!==a&&yo(l,d,h,v,u,_,R.x,R.y)&&vn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;z&&z.z>=g;){if(z.x>=S&&z.x<=P&&z.y>=b&&z.y<=x&&z!==s&&z!==a&&yo(l,d,h,v,u,_,z.x,z.y)&&vn(z.prev,z,z.next)>=0)return!1;z=z.prevZ}for(;R&&R.z<=k;){if(R.x>=S&&R.x<=P&&R.y>=b&&R.y<=x&&R!==s&&R!==a&&yo(l,d,h,v,u,_,R.x,R.y)&&vn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function Ax(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ea(n,s)&&T0(n,e,e.next,s)&&Xo(n,s)&&Xo(s,n)&&(t.push(n.i,e.i,s.i),qo(e),qo(e.next),e=i=s),e=e.next}while(e!==i);return Rr(e)}function Cx(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Ox(a,l)){let h=A0(a,l);a=Rr(a,a.next),h=Rr(h,h.next),Wo(a,t,e,n,s,r,0),Wo(h,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function Rx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,h=r<a-1?t[r+1]*n:i.length,u=w0(i,l,h,n,!1);u===u.next&&(u.steiner=!0),s.push(Fx(u))}s.sort(Ix);for(let r=0;r<s.length;r++)e=Px(s[r],e);return e}function Ix(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Px(i,t){let e=Lx(i,t);if(!e)return t;let n=A0(e,i);return Rr(n,n.next),Rr(e,e.next)}function Lx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ea(i,e))return e;do{if(Ea(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,h=a.x,u=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&E0(s<u?n:r,s,h,u,s<u?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Xo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&Dx(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function Dx(i,t){return vn(i.prev,i,t.prev)<0&&vn(t.next,i,i.next)<0}function Nx(i,t,e,n){let s=i;do s.z===0&&(s.z=Ud(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ux(s)}function Ux(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let u=0;u<e&&(l++,a=a.nextZ,!!a);u++);let h=e;for(;l>0||h>0&&a;)l!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ud(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function E0(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function yo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&E0(i,t,e,n,s,r,a,l)}function Ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bx(i,t)&&(Xo(i,t)&&Xo(t,i)&&kx(i,t)&&(vn(i.prev,i,t.prev)||vn(i,t.prev,t))||Ea(i,t)&&vn(i.prev,i,i.next)>0&&vn(t.prev,t,t.next)>0)}function vn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ea(i,t){return i.x===t.x&&i.y===t.y}function T0(i,t,e,n){let s=yc(vn(i,t,e)),r=yc(vn(i,t,n)),a=yc(vn(e,n,i)),l=yc(vn(e,n,t));return!!(s!==r&&a!==l||s===0&&vc(i,e,t)||r===0&&vc(i,n,t)||a===0&&vc(e,i,n)||l===0&&vc(e,t,n))}function vc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yc(i){return i>0?1:i<0?-1:0}function Bx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&T0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xo(i,t){return vn(i.prev,i,i.next)<0?vn(i,t,i.next)>=0&&vn(i,i.prev,t)>=0:vn(i,t,i.prev)<0||vn(i,i.next,t)<0}function kx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function A0(i,t){let e=Fd(i.i,i.x,i.y),n=Fd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Am(i,t,e,n){let s=Fd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Od=class{static triangulate(t,e,n=2){return wx(t,e,n)}},Mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Cm(t),Rm(n,t);let a=t.length;e.forEach(Cm);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,Rm(n,e[h]);let l=Od.triangulate(n,s);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function Cm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yo=class i extends Mn{constructor(t=new wa([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];a(u)}this.setAttribute("position",new Sn(s,3)),this.setAttribute("uv",new Sn(r,2)),this.computeVertexNormals();function a(l){let h=[],u=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,_=e.bevelEnabled!==void 0?e.bevelEnabled:!0,S=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:S-.1,P=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,k=e.UVGenerator!==void 0?e.UVGenerator:$x,z,R=!1,T,O,W,A;if(g){z=g.getSpacedPoints(d),R=!0,_=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(d,nt),O=new Y,W=new Y,A=new Y}_||(x=0,S=0,b=0,P=0);let F=l.extractPoints(u),G=F.shape,X=F.holes;if(!Mr.isClockWise(G)){G=G.reverse();for(let nt=0,Rt=X.length;nt<Rt;nt++){let V=X[nt];Mr.isClockWise(V)&&(X[nt]=V.reverse())}}function ct(nt){let V=10000000000000001e-36,Pt=nt[0];for(let Bt=1;Bt<=nt.length;Bt++){let ce=Bt%nt.length,fe=nt[ce],de=fe.x-Pt.x,Te=fe.y-Pt.y,q=de*de+Te*Te,Fe=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(Pt.x),Math.abs(Pt.y)),De=V*Fe*Fe;if(q<=De){nt.splice(ce,1),Bt--;continue}Pt=fe}}ct(G),X.forEach(ct);let j=X.length,et=G;for(let nt=0;nt<j;nt++){let Rt=X[nt];G=G.concat(Rt)}function pt(nt,Rt,V){return Rt||be("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Rt,V)}let gt=G.length;function At(nt,Rt,V){let Pt,Bt,ce,fe=nt.x-Rt.x,de=nt.y-Rt.y,Te=V.x-nt.x,q=V.y-nt.y,Fe=fe*fe+de*de,De=fe*q-de*Te;if(Math.abs(De)>Number.EPSILON){let U=Math.sqrt(Fe),w=Math.sqrt(Te*Te+q*q),it=Rt.x-de/U,ot=Rt.y+fe/U,xt=V.x-q/w,Lt=V.y+Te/w,kt=((xt-it)*q-(Lt-ot)*Te)/(fe*q-de*Te);Pt=it+fe*kt-nt.x,Bt=ot+de*kt-nt.y;let mt=Pt*Pt+Bt*Bt;if(mt<=2)return new zt(Pt,Bt);ce=Math.sqrt(mt/2)}else{let U=!1;fe>Number.EPSILON?Te>Number.EPSILON&&(U=!0):fe<-Number.EPSILON?Te<-Number.EPSILON&&(U=!0):Math.sign(de)===Math.sign(q)&&(U=!0),U?(Pt=-de,Bt=fe,ce=Math.sqrt(Fe)):(Pt=fe,Bt=de,ce=Math.sqrt(Fe/2))}return new zt(Pt/ce,Bt/ce)}let _t=[];for(let nt=0,Rt=et.length,V=Rt-1,Pt=nt+1;nt<Rt;nt++,V++,Pt++)V===Rt&&(V=0),Pt===Rt&&(Pt=0),_t[nt]=At(et[nt],et[V],et[Pt]);let wt=[],bt,Wt=_t.concat();for(let nt=0,Rt=j;nt<Rt;nt++){let V=X[nt];bt=[];for(let Pt=0,Bt=V.length,ce=Bt-1,fe=Pt+1;Pt<Bt;Pt++,ce++,fe++)ce===Bt&&(ce=0),fe===Bt&&(fe=0),bt[Pt]=At(V[Pt],V[ce],V[fe]);wt.push(bt),Wt=Wt.concat(bt)}let te;if(x===0)te=Mr.triangulateShape(et,X);else{let nt=[],Rt=[];for(let V=0;V<x;V++){let Pt=V/x,Bt=S*Math.cos(Pt*Math.PI/2),ce=b*Math.sin(Pt*Math.PI/2)+P;for(let fe=0,de=et.length;fe<de;fe++){let Te=pt(et[fe],_t[fe],ce);Ut(Te.x,Te.y,-Bt),Pt===0&&nt.push(Te)}for(let fe=0,de=j;fe<de;fe++){let Te=X[fe];bt=wt[fe];let q=[];for(let Fe=0,De=Te.length;Fe<De;Fe++){let U=pt(Te[Fe],bt[Fe],ce);Ut(U.x,U.y,-Bt),Pt===0&&q.push(U)}Pt===0&&Rt.push(q)}}te=Mr.triangulateShape(nt,Rt)}let Ye=te.length,Le=b+P;for(let nt=0;nt<gt;nt++){let Rt=_?pt(G[nt],Wt[nt],Le):G[nt];R?(W.copy(T.normals[0]).multiplyScalar(Rt.x),O.copy(T.binormals[0]).multiplyScalar(Rt.y),A.copy(z[0]).add(W).add(O),Ut(A.x,A.y,A.z)):Ut(Rt.x,Rt.y,0)}for(let nt=1;nt<=d;nt++)for(let Rt=0;Rt<gt;Rt++){let V=_?pt(G[Rt],Wt[Rt],Le):G[Rt];R?(W.copy(T.normals[nt]).multiplyScalar(V.x),O.copy(T.binormals[nt]).multiplyScalar(V.y),A.copy(z[nt]).add(W).add(O),Ut(A.x,A.y,A.z)):Ut(V.x,V.y,v/d*nt)}for(let nt=x-1;nt>=0;nt--){let Rt=nt/x,V=S*Math.cos(Rt*Math.PI/2),Pt=b*Math.sin(Rt*Math.PI/2)+P;for(let Bt=0,ce=et.length;Bt<ce;Bt++){let fe=pt(et[Bt],_t[Bt],Pt);Ut(fe.x,fe.y,v+V)}for(let Bt=0,ce=X.length;Bt<ce;Bt++){let fe=X[Bt];bt=wt[Bt];for(let de=0,Te=fe.length;de<Te;de++){let q=pt(fe[de],bt[de],Pt);R?Ut(q.x,q.y+z[d-1].y,z[d-1].x+V):Ut(q.x,q.y,v+V)}}}Ve(),vt();function Ve(){let nt=s.length/3;if(_){let Rt=0,V=gt*Rt;for(let Pt=0;Pt<Ye;Pt++){let Bt=te[Pt];he(Bt[2]+V,Bt[1]+V,Bt[0]+V)}Rt=d+x*2,V=gt*Rt;for(let Pt=0;Pt<Ye;Pt++){let Bt=te[Pt];he(Bt[0]+V,Bt[1]+V,Bt[2]+V)}}else{for(let Rt=0;Rt<Ye;Rt++){let V=te[Rt];he(V[2],V[1],V[0])}for(let Rt=0;Rt<Ye;Rt++){let V=te[Rt];he(V[0]+gt*d,V[1]+gt*d,V[2]+gt*d)}}n.addGroup(nt,s.length/3-nt,0)}function vt(){let nt=s.length/3,Rt=0;yt(et,Rt),Rt+=et.length;for(let V=0,Pt=X.length;V<Pt;V++){let Bt=X[V];yt(Bt,Rt),Rt+=Bt.length}n.addGroup(nt,s.length/3-nt,1)}function yt(nt,Rt){let V=nt.length;for(;--V>=0;){let Pt=V,Bt=V-1;Bt<0&&(Bt=nt.length-1);for(let ce=0,fe=d+x*2;ce<fe;ce++){let de=gt*ce,Te=gt*(ce+1),q=Rt+Pt+de,Fe=Rt+Bt+de,De=Rt+Bt+Te,U=Rt+Pt+Te;jt(q,Fe,De,U)}}}function Ut(nt,Rt,V){h.push(nt),h.push(Rt),h.push(V)}function he(nt,Rt,V){ge(nt),ge(Rt),ge(V);let Pt=s.length/3,Bt=k.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee(Bt[0]),ee(Bt[1]),ee(Bt[2])}function jt(nt,Rt,V,Pt){ge(nt),ge(Rt),ge(Pt),ge(Rt),ge(V),ge(Pt);let Bt=s.length/3,ce=k.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ee(ce[0]),ee(ce[1]),ee(ce[3]),ee(ce[1]),ee(ce[2]),ee(ce[3])}function ge(nt){s.push(h[nt*3+0]),s.push(h[nt*3+1]),s.push(h[nt*3+2])}function ee(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nd[s.type]().fromJSON(s)),new i(n,t.options)}},$x={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],h=t[n*3+1],u=t[s*3],d=t[s*3+1];return[new zt(r,a),new zt(l,h),new zt(u,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],h=t[e*3+2],u=t[n*3],d=t[n*3+1],v=t[n*3+2],_=t[s*3],S=t[s*3+1],b=t[s*3+2],P=t[r*3],x=t[r*3+1],g=t[r*3+2];return Math.abs(l-d)<Math.abs(a-u)?[new zt(a,1-h),new zt(u,1-v),new zt(_,1-b),new zt(P,1-g)]:[new zt(l,1-h),new zt(d,1-v),new zt(S,1-b),new zt(x,1-g)]}};function Vx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Jo=class i extends Mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),h=Math.floor(s),u=l+1,d=h+1,v=t/l,_=e/h,S=[],b=[],P=[],x=[];for(let g=0;g<d;g++){let k=g*_-a;for(let z=0;z<u;z++){let R=z*v-r;b.push(R,-k,0),P.push(0,0,1),x.push(z/l),x.push(1-g/h)}}for(let g=0;g<h;g++)for(let k=0;k<l;k++){let z=k+u*g,R=k+u*(g+1),T=k+1+u*(g+1),O=k+1+u*g;S.push(z,R,O),S.push(R,T,O)}this.setIndex(S),this.setAttribute("position",new Sn(b,3)),this.setAttribute("normal",new Sn(P,3)),this.setAttribute("uv",new Sn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zo=class extends Mn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Y,r=new Y;if(t.index!==null){let a=t.attributes.position,l=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,d=h.length;u<d;++u){let v=h[u],_=v.start,S=v.count;for(let b=_,P=_+S;b<P;b+=3)for(let x=0;x<3;x++){let g=l.getX(b+x),k=l.getX(b+(x+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,k),Im(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let u=0;u<3;u++){let d=3*l+u,v=3*l+(u+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),Im(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Im(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Lr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Pm(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Pm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qn(i){let t={};for(let e=0;e<i.length;e++){let n=Lr(i[e]);for(let s in n)t[s]=n[s]}return t}function Pm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}var ml={clone:Lr,merge:Qn},Gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=Hx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new an().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jc=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jo=class extends as{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=fh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kc=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qc=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function la(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Td(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},th=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Id,endingEnd:Id}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],h=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Pd:r=t,l=2*e-n;break;case Ld:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Pd:a=t,h=2*n-e;break;case Ld:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(h-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,S=this._weightNext,b=(n-e)/(s-e),P=b*b,x=P*b,g=-_*x+2*_*P-_*b,k=(1+_)*x+(-1.5-2*_)*P+(-.5+_)*b+1,z=(-1-S)*x+(1.5+S)*P+.5*b,R=S*x-S*P;for(let T=0;T!==l;++T)r[T]=g*a[d+T]+k*a[u+T]+z*a[h+T]+R*a[v+T];return r}},eh=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=(n-e)/(s-e),v=1-d;for(let _=0;_!==l;++_)r[_]=a[u+_]*v+a[h+_]*d;return r}},nh=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ih=class extends Ys{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let b=(n-e)/(s-e),P=1-b;for(let x=0;x!==l;++x)r[x]=a[u+x]*P+a[h+x]*b;return r}let _=l*2,S=t-1;for(let b=0;b!==l;++b){let P=a[u+b],x=a[h+b],g=S*_+b*2,k=v[g],z=v[g+1],R=t*_+b*2,T=d[R],O=d[R+1],W=qx(n,e,k,T,s);r[b]=C0(W,P,z,O,x)}return r}};function C0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Xx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=C0(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let h=Xx(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-l/h))}return r}var Mi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Td(t.settings)&&(n.settings={inTangents:la(t.settings.inTangents,Array),outTangents:la(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ih(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Eo:e=this.InterpolantFactoryMethodDiscrete;break;case Uc:e=this.InterpolantFactoryMethodLinear;break;case wc:e=this.InterpolantFactoryMethodSmooth;break;case Rd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return wc;case this.InterpolantFactoryMethodBezier:return Rd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Td(this.settings)&&(Lm(this.settings.inTangents,t),Lm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){be("KeyframeTrack: Time is not a valid number.",this,l,h),t=!1;break}if(a!==null&&a>h){be("KeyframeTrack: Out of order keys.",this,l,h,a),t=!1;break}a=h}if(s!==void 0&&U_(s))for(let l=0,h=s.length;l!==h;++l){let u=s[l];if(isNaN(u)){be("KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wc,r=t.length-1,a=1;for(let l=1;l<r;++l){let h=!1,u=t[l],d=t[l+1];if(u!==d&&(l!==1||u!==t[0]))if(s)h=!0;else{let v=l*n,_=v-n,S=v+n;for(let b=0;b!==n;++b){let P=e[v+b];if(P!==e[_+b]||P!==e[S+b]){h=!0;break}}}if(h){if(l!==a){t[a]=t[l];let v=l*n,_=a*n;for(let S=0;S!==n;++S)e[_+S]=e[v+S]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,h=a*n,u=0;u!==n;++u)e[h+u]=e[l+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Td(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Uc;var Js=class extends Mi{constructor(t,e,n){super(t,e,n)}};Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Eo;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};sh.prototype.ValueTypeName="color";var rh=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};rh.prototype.ValueTypeName="number";var ah=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-e)/(s-e),u=t*l;for(let d=u+l;u!==d;u+=4)rs.slerpFlat(r,0,a,u-l,a,u,h);return r}},Ko=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ah(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Mi{constructor(t,e,n){super(t,e,n)}};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Eo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};oh.prototype.ValueTypeName="vector";var lh=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,v){return u.push(d,v),this},this.removeHandler=function(d){let v=u.indexOf(d);return v!==-1&&u.splice(v,2),this},this.getHandler=function(d){for(let v=0,_=u.length;v<_;v+=2){let S=u[v],b=u[v+1];if(S.global&&(S.lastIndex=0),S.test(d))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},R0=new lh,ch=class{constructor(t){this.manager=t!==void 0?t:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qo=class extends On{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},tl=class extends Qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ad=new qe,Dm=new Y,Nm=new Y,hh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Dm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dm),Nm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ad,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===ma||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),e.multiply(Ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sc=new Y,Mc=new rs,ts=new Y,el=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sc,Mc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,ts.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sc,Mc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ws=new Y,Um=new zt,Fm=new zt,Kn=class extends el{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z)}getViewSize(t,e){return this.getViewBounds(t,Um,Fm),e.subVectors(Fm,Um)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/u,s*=a.width/h,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ta=class extends el{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bd=class extends hh{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new Bd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var il=class extends Mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ca=-90,ha=1,uh=class extends On{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(ca,ha,t,e);s.layers=this.layers,this.add(s);let r=new Kn(ca,ha,t,e);r.layers=this.layers,this.add(r);let a=new Kn(ca,ha,t,e);a.layers=this.layers,this.add(a);let l=new Kn(ca,ha,t,e);l.layers=this.layers,this.add(l);let h=new Kn(ca,ha,t,e);h.layers=this.layers,this.add(h);let u=new Kn(ca,ha,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,h]=e;for(let u of e)this.remove(u);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,h,u,d]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,_,S),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},dh=class extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mf="\\[\\]\\.:\\/",Yx=new RegExp("["+mf+"]","g"),gf="[^"+mf+"]",Jx="[^"+mf.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",gf),jx=/(WCOD+)?/.source.replace("WCOD",Jx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gf),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gf),tv=new RegExp("^"+Zx+jx+Kx+Qx+"$"),ev=["material","materials","bones","map"],kd=class{constructor(t,e,n){let s=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){let e=tv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ev.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let h=n(l.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;be("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=kd;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m1=new Float32Array(1);var js=class extends kc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Om=new qe,sl=class{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Om.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Om),this}intersectObject(t,e=!0,n=[]){return zd(t,this,n,e),n.sort(Bm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zd(t[s],this,n,e);return n.sort(Bm),n}};function Bm(i,t){return i.distance-t.distance}function zd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)zd(r[a],t,e,!0)}}var $d=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var km=new Y,bc=new Y,ua=new Y,da=new Y,Cd=new Y,nv=new Y,iv=new Y,rl=class{constructor(t=new Y,e=new Y){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){km.subVectors(t,this.start),bc.subVectors(this.end,this.start);let n=bc.dot(bc);if(n===0)return 0;let r=bc.dot(km)/n;return e&&(r=Pe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=nv,n=iv){let s=10000000000000001e-32,r,a,l=this.start,h=t.start,u=this.end,d=t.end;ua.subVectors(u,l),da.subVectors(d,h),Cd.subVectors(l,h);let v=ua.dot(ua),_=da.dot(da),S=da.dot(Cd);if(v<=s&&_<=s)return e.copy(l),n.copy(h),e.sub(n),e.dot(e);if(v<=s)r=0,a=S/_,a=Pe(a,0,1);else{let b=ua.dot(Cd);if(_<=s)a=0,r=Pe(-b/v,0,1);else{let P=ua.dot(da),x=v*_-P*P;x!==0?r=Pe((P*S-b*_)/x,0,1):r=0,a=(P*r+S)/_,a<0?(a=0,r=Pe(-b/v,0,1)):a>1&&(a=1,r=Pe((P-b)/v,0,1))}}return e.copy(l).addScaledVector(ua,r),n.copy(h).addScaledVector(da,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function _f(i,t,e,n){let s=sv(n);switch(e){case of:return i*t;case yh:return i*t/s.components*s.byteLength;case Sh:return i*t/s.components*s.byteLength;case nr:return i*t*2/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case lf:return i*t*3/s.components*s.byteLength;case Ri:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:case Ah:return Math.max(i,16)*Math.max(t,8)/4;case wh:case Th:return Math.max(i,8)*Math.max(t,8)/2;case Ch:case Rh:case Ph:case Lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ih:case fl:case Dh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yh:case Jh:case Zh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jh:case Kh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case Qh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sv(i){switch(i){case gi:case nf:return{byteLength:1,components:1};case Ra:case sf:case qi:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case Xi:case _h:case Ci:return{byteLength:4,components:1};case rf:case af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function j0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function av(i){let t=new WeakMap;function e(l,h){let u=l.array,d=l.usage,v=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),l.onUploadCallback();let S;if(u instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)S=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)S=i.SHORT;else if(u instanceof Uint32Array)S=i.UNSIGNED_INT;else if(u instanceof Int32Array)S=i.INT;else if(u instanceof Int8Array)S=i.BYTE;else if(u instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:S,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,h,u){let d=h.array,v=h.updateRanges;if(i.bindBuffer(u,l),v.length===0)i.bufferSubData(u,0,d);else{v.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<v.length;S++){let b=v[_],P=v[S];P.start<=b.start+b.count+1?b.count=Math.max(b.count,P.start+P.count-b.start):(++_,v[_]=P)}v.length=_+1;for(let S=0,b=v.length;S<b;S++){let P=v[S];i.bufferSubData(u,P.start*d.BYTES_PER_ELEMENT,d,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:s,remove:r,update:a}}var ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
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
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Sv=`#ifdef USE_BUMPMAP
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Iv=`#define PI 3.141592653589793
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
} // validated`,Pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lv=`vec3 transformedNormal = objectNormal;
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
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
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
}`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`uniform sampler2D dfgLUT;
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
}`,ay=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_y=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eS=`#ifdef USE_TRANSMISSION
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
#endif`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`#include <common>
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
}`,pS=`#if DEPTH_PACKING == 3200
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
}`,mS=`#define DISTANCE
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
}`,gS=`#define DISTANCE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`uniform float scale;
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
}`,yS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,MS=`uniform vec3 diffuse;
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
}`,bS=`#define LAMBERT
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
}`,wS=`#define LAMBERT
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
}`,ES=`#define MATCAP
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
}`,TS=`#define MATCAP
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
}`,AS=`#define NORMAL
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
}`,CS=`#define NORMAL
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
}`,RS=`#define PHONG
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
}`,IS=`#define PHONG
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
}`,PS=`#define STANDARD
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
}`,LS=`#define STANDARD
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
}`,DS=`#define TOON
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
}`,NS=`#define TOON
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
}`,US=`uniform float size;
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
}`,FS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,BS=`uniform vec3 color;
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
}`,kS=`uniform float rotation;
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
}`,zS=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:ov,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:hv,alphatest_fragment:uv,alphatest_pars_fragment:dv,aomap_fragment:fv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:vv,iridescence_fragment:yv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:Mv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:wv,clipping_planes_vertex:Ev,color_fragment:Tv,color_pars_fragment:Av,color_pars_vertex:Cv,color_vertex:Rv,common:Iv,cube_uv_reflection_fragment:Pv,defaultnormal_vertex:Lv,displacementmap_pars_vertex:Dv,displacementmap_vertex:Nv,emissivemap_fragment:Uv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:kv,envmap_common_pars_fragment:zv,envmap_pars_fragment:$v,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Hv,fog_vertex:Gv,fog_pars_vertex:Wv,fog_fragment:Xv,fog_pars_fragment:qv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:Jv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:jv,lights_pars_begin:Kv,lights_toon_fragment:ty,lights_toon_pars_fragment:ey,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:ay,lights_fragment_maps:oy,lights_fragment_end:ly,lightprobes_pars_fragment:cy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:fy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:_y,metalnessmap_fragment:xy,metalnessmap_pars_fragment:vy,morphinstance_vertex:yy,morphcolor_vertex:Sy,morphnormal_vertex:My,morphtarget_pars_vertex:by,morphtarget_vertex:wy,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:Ay,normal_pars_vertex:Cy,normal_vertex:Ry,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Ny,opaque_fragment:Uy,packing:Fy,premultiplied_alpha_fragment:Oy,project_vertex:By,dithering_fragment:ky,dithering_pars_fragment:zy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:qy,skinning_pars_vertex:Yy,skinning_vertex:Jy,skinnormal_vertex:Zy,specularmap_fragment:jy,specularmap_pars_fragment:Ky,tonemapping_fragment:Qy,tonemapping_pars_fragment:tS,transmission_fragment:eS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:sS,uv_vertex:rS,worldpos_vertex:aS,background_vert:oS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:hS,cube_vert:uS,cube_frag:dS,depth_vert:fS,depth_frag:pS,distance_vert:mS,distance_frag:gS,equirect_vert:_S,equirect_frag:xS,linedashed_vert:vS,linedashed_frag:yS,meshbasic_vert:SS,meshbasic_frag:MS,meshlambert_vert:bS,meshlambert_frag:wS,meshmatcap_vert:ES,meshmatcap_frag:TS,meshnormal_vert:AS,meshnormal_frag:CS,meshphong_vert:RS,meshphong_frag:IS,meshphysical_vert:PS,meshphysical_frag:LS,meshtoon_vert:DS,meshtoon_frag:NS,points_vert:US,points_frag:FS,shadow_vert:OS,shadow_frag:BS,sprite_vert:kS,sprite_frag:zS},Gt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},ri={basic:{uniforms:Qn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qn([Gt.points,Gt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qn([Gt.common,Gt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qn([Gt.sprite,Gt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Qn([Gt.common,Gt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Qn([Gt.lights,Gt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ri.physical={uniforms:Qn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var iu={r:0,b:0,g:0},$S=new qe,K0=new Re;K0.set(-1,0,0,0,1,0,0,0,1);function VS(i,t,e,n,s,r){let a=new xe(0),l=s===!0?0:1,h,u,d=null,v=0,_=null;function S(k){let z=k.isScene===!0?k.background:null;if(z&&z.isTexture){let R=k.backgroundBlurriness>0;z=t.get(z,R)}return z}function b(k){let z=!1,R=S(k);R===null?x(a,l):R&&R.isColor&&(x(R,1),z=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(k,z){let R=S(z);R&&(R.isCubeTexture||R.mapping===ol)?(u===void 0&&(u=new Bn(new Ma(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Lr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=R,u.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($S.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(K0),u.material.toneMapped=Xe.getTransfer(R.colorSpace)!==rn,(d!==R||v!==R.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,v=R.version,_=i.toneMapping),u.layers.enableAll(),k.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Bn(new Jo(2,2),new kn({name:"BackgroundMaterial",uniforms:Lr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(R.colorSpace)!==rn,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,_=i.toneMapping),h.layers.enableAll(),k.unshift(h,h.geometry,h.material,0,0,null))}function x(k,z){k.getRGB(iu,pf(i)),e.buffers.color.setClear(iu.r,iu.g,iu.b,z,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(k,z=1){a.set(k),l=z,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(k){l=k,x(a,l)},render:b,addToRenderList:P,dispose:g}}function HS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=_(null),r=s,a=!1;function l(X,st,ct,j,et){let pt=!1,gt=v(X,j,ct,st);r!==gt&&(r=gt,u(r.object)),pt=S(X,j,ct,et),pt&&b(X,j,ct,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,R(X,st,ct,j),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function h(){return i.createVertexArray()}function u(X){return i.bindVertexArray(X)}function d(X){return i.deleteVertexArray(X)}function v(X,st,ct,j){let et=j.wireframe===!0,pt=n[st.id];pt===void 0&&(pt={},n[st.id]=pt);let gt=X.isInstancedMesh===!0?X.id:0,At=pt[gt];At===void 0&&(At={},pt[gt]=At);let _t=At[ct.id];_t===void 0&&(_t={},At[ct.id]=_t);let wt=_t[et];return wt===void 0&&(wt=_(h()),_t[et]=wt),wt}function _(X){let st=[],ct=[],j=[];for(let et=0;et<e;et++)st[et]=0,ct[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:ct,attributeDivisors:j,object:X,attributes:{},index:null}}function S(X,st,ct,j){let et=r.attributes,pt=st.attributes,gt=0,At=ct.getAttributes();for(let _t in At)if(At[_t].location>=0){let bt=et[_t],Wt=pt[_t];if(Wt===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(Wt=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(Wt=X.instanceColor)),bt===void 0||bt.attribute!==Wt||Wt&&bt.data!==Wt.data)return!0;gt++}return r.attributesNum!==gt||r.index!==j}function b(X,st,ct,j){let et={},pt=st.attributes,gt=0,At=ct.getAttributes();for(let _t in At)if(At[_t].location>=0){let bt=pt[_t];bt===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(bt=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(bt=X.instanceColor));let Wt={};Wt.attribute=bt,bt&&bt.data&&(Wt.data=bt.data),et[_t]=Wt,gt++}r.attributes=et,r.attributesNum=gt,r.index=j}function P(){let X=r.newAttributes;for(let st=0,ct=X.length;st<ct;st++)X[st]=0}function x(X){g(X,0)}function g(X,st){let ct=r.newAttributes,j=r.enabledAttributes,et=r.attributeDivisors;ct[X]=1,j[X]===0&&(i.enableVertexAttribArray(X),j[X]=1),et[X]!==st&&(i.vertexAttribDivisor(X,st),et[X]=st)}function k(){let X=r.newAttributes,st=r.enabledAttributes;for(let ct=0,j=st.length;ct<j;ct++)st[ct]!==X[ct]&&(i.disableVertexAttribArray(ct),st[ct]=0)}function z(X,st,ct,j,et,pt,gt){gt===!0?i.vertexAttribIPointer(X,st,ct,et,pt):i.vertexAttribPointer(X,st,ct,j,et,pt)}function R(X,st,ct,j){P();let et=j.attributes,pt=ct.getAttributes(),gt=st.defaultAttributeValues;for(let At in pt){let _t=pt[At];if(_t.location>=0){let wt=et[At];if(wt===void 0&&(At==="instanceMatrix"&&X.instanceMatrix&&(wt=X.instanceMatrix),At==="instanceColor"&&X.instanceColor&&(wt=X.instanceColor)),wt!==void 0){let bt=wt.normalized,Wt=wt.itemSize,te=t.get(wt);if(te===void 0)continue;let Ye=te.buffer,Le=te.type,Ve=te.bytesPerElement,vt=Le===i.INT||Le===i.UNSIGNED_INT||wt.gpuType===_h;if(wt.isInterleavedBufferAttribute){let yt=wt.data,Ut=yt.stride,he=wt.offset;if(yt.isInstancedInterleavedBuffer){for(let jt=0;jt<_t.locationSize;jt++)g(_t.location+jt,yt.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let jt=0;jt<_t.locationSize;jt++)x(_t.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let jt=0;jt<_t.locationSize;jt++)z(_t.location+jt,Wt/_t.locationSize,Le,bt,Ut*Ve,(he+Wt/_t.locationSize*jt)*Ve,vt)}else{if(wt.isInstancedBufferAttribute){for(let yt=0;yt<_t.locationSize;yt++)g(_t.location+yt,wt.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let yt=0;yt<_t.locationSize;yt++)x(_t.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let yt=0;yt<_t.locationSize;yt++)z(_t.location+yt,Wt/_t.locationSize,Le,bt,Wt*Ve,Wt/_t.locationSize*yt*Ve,vt)}}else if(gt!==void 0){let bt=gt[At];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(_t.location,bt);break;case 3:i.vertexAttrib3fv(_t.location,bt);break;case 4:i.vertexAttrib4fv(_t.location,bt);break;default:i.vertexAttrib1fv(_t.location,bt)}}}}k()}function T(){F();for(let X in n){let st=n[X];for(let ct in st){let j=st[ct];for(let et in j){let pt=j[et];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete j[et]}}delete n[X]}}function O(X){if(n[X.id]===void 0)return;let st=n[X.id];for(let ct in st){let j=st[ct];for(let et in j){let pt=j[et];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete j[et]}}delete n[X.id]}function W(X){for(let st in n){let ct=n[st];for(let j in ct){let et=ct[j];if(et[X.id]===void 0)continue;let pt=et[X.id];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete et[X.id]}}}function A(X){for(let st in n){let ct=n[st],j=X.isInstancedMesh===!0?X.id:0,et=ct[j];if(et!==void 0){for(let pt in et){let gt=et[pt];for(let At in gt)d(gt[At].object),delete gt[At];delete et[pt]}delete ct[j],Object.keys(ct).length===0&&delete n[st]}}}function F(){G(),a=!0,r!==s&&(r=s,u(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:W,initAttributes:P,enableAttribute:x,disableUnusedAttributes:k}}function GS(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let _=0;for(let S=0;S<d;S++)_+=u[S];e.update(_,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function WS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let W=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(W){return!(W!==Ri&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(W){let A=W===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(W!==gi&&W!==Ci&&!A&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=h(u);d!==u&&(ve("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),k=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:b,maxTextureSize:P,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:k,maxVaryings:z,maxFragmentUniforms:R,maxSamples:T,samples:O}}function XS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zi,l=new Re,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){let S=v.length!==0||_||n!==0||s;return s=_,n=v.length,S},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,_){e=d(v,_,0)},this.setState=function(v,_,S){let b=v.clippingPlanes,P=v.clipIntersection,x=v.clipShadows,g=i.get(v);if(!s||b===null||b.length===0||r&&!x)r?d(null):u();else{let k=r?0:n,z=k*4,R=g.clippingState||null;h.value=R,R=d(b,_,z,S);for(let T=0;T!==z;++T)R[T]=e[T];g.clippingState=R,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=k}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,_,S,b){let P=v!==null?v.length:0,x=null;if(P!==0){if(x=h.value,b!==!0||x===null){let g=S+P*4,k=_.matrixWorldInverse;l.getNormalMatrix(k),(x===null||x.length<g)&&(x=new Float32Array(g));for(let z=0,R=S;z!==P;++z,R+=4)a.copy(v[z]).applyMatrix4(k,l),a.normal.toArray(x,R),x[R+3]=a.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,x}}var La=4,qS=6,YS=20,JS=256,gl=new Ta,I0=new xe,xf=null,vf=0,yf=0,Sf=!1,ZS=new Y,Dr=new Y,ru=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=ZS}=r;xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xf,vf,yf),this._renderer.xr.enabled=Sf,t.scissorTest=!1,Pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:qi,format:Ri,colorSpace:To,depthBuffer:!1},s=P0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jS(r)),this._blurMaterial=QS(r,t,e),this._ggxMaterial=KS(r,t,e)}return s}_compileMaterial(t){let e=new Bn(new Mn,t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,s,r){let h=new Kn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(I0),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Ma,new Er({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,x=P.material,g=!1,k=t.background;k?k.isColor&&(x.color.copy(k),t.background=null,g=!0):(x.color.copy(I0),g=!0);for(let z=0;z<6;z++){let R=z%3;R===0?(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[z],r.y,r.z)):R===1?(h.up.set(0,0,u[z]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[z],r.z)):(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[z]));let T=this._cubeSize;Pa(s,R*T,z>2?T:0,T,T),v.setRenderTarget(s),g&&v.render(P,h),v.render(t,h)}v.toneMapping=S,v.autoClear=_,t.background=k}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qs||t.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=D0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let h=this._cubeSize;Pa(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,gl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let h=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(u*u-d*d),_=u*1.25,S=v*_,{_lodMax:b}=this,P=this._sizeLods[n],x=3*P*(n>b-La?n-b+La:0),g=4*(this._cubeSize-P);h.envMap.value=t.texture,h.roughness.value=S,h.mipInt.value=b-e,Pa(r,x,g,3*P,2*P),s.setRenderTarget(r),s.render(l,gl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=b-n,Pa(t,x,g,3*P,2*P),s.setRenderTarget(t),s.render(l,gl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,h=this._lodMeshes[s];h.material=l;let u=l.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-La?s-this._lodMax+La:0),_=4*(this._cubeSize-d);Pa(e,v,_,3*d,2*d),a.setRenderTarget(e),a.render(h,gl)}};function jS(i){let t=[],e=[],n=i,s=i-La+1+qS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],v=6,_=6,S=3,b=new Float32Array(S*_*v),P=new Float32Array(S*_*v);for(let g=0;g<v;g++){let k=g%3*2/3-1,z=g>2?0:-1,R=[k,z,0,k+2/3,z,0,k+2/3,z+1,0,k,z,0,k+2/3,z+1,0,k,z+1,0];b.set(R,S*_*g);for(let T=0;T<_;T++){let O=d[T*2]*2-1,W=d[T*2+1]*2-1;g===0?Dr.set(1,W,O):g===1?Dr.set(-O,1,-W):g===2?Dr.set(-O,W,1):g===3?Dr.set(-1,W,-O):g===4?Dr.set(-O,-1,W):Dr.set(O,W,-1),Dr.toArray(P,(g*_+T)*S)}}let x=new Mn;x.setAttribute("position",new hn(b,S)),x.setAttribute("outputDirection",new hn(P,S)),e.push(new Bn(x,null)),n>La&&n--}return{lodMeshes:e,sizeLods:t}}function P0(i,t,e){let n=new pi(i,t,e);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function KS(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function QS(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:YS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function L0(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function D0(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var au=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ma(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:ls});r.uniforms.tEquirect.value=e;let a=new Bn(s,r),l=e.minFilter;return e.minFilter===tr&&(e.minFilter=Gn),new uh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function tM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(_,S=!1){return _==null?null:S?a(_):r(_)}function r(_){if(_&&_.isTexture){let S=_.mapping;if(S===ph||S===mh)if(t.has(_)){let b=t.get(_).texture;return l(b,_.mapping)}else{let b=_.image;if(b&&b.height>0){let P=new au(b.height);return P.fromEquirectangularTexture(i,_),t.set(_,P),_.addEventListener("dispose",u),l(P.texture,_.mapping)}else return null}}return _}function a(_){if(_&&_.isTexture){let S=_.mapping,b=S===ph||S===mh,P=S===Qs||S===Pr;if(b||P){let x=e.get(_),g=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==g)return n===null&&(n=new ru(i)),x=b?n.fromEquirectangular(_,x):n.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,e.set(_,x),x.texture;if(x!==void 0)return x.texture;{let k=_.image;return b&&k&&k.height>0||P&&k&&h(k)?(n===null&&(n=new ru(i)),x=b?n.fromEquirectangular(_):n.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,e.set(_,x),_.addEventListener("dispose",d),x.texture):null}}}return _}function l(_,S){return S===ph?_.mapping=Qs:S===mh&&(_.mapping=Pr),_}function h(_){let S=0,b=6;for(let P=0;P<b;P++)_[P]!==void 0&&S++;return S===b}function u(_){let S=_.target;S.removeEventListener("dispose",u);let b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function d(_){let S=_.target;S.removeEventListener("dispose",d);let b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function eM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&br("WebGLRenderer: "+n+" extension not supported."),s}}}function nM(i,t,e,n){let s={},r=new WeakMap;function a(v){let _=v.target;_.index!==null&&t.remove(_.index);for(let b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",a),delete s[_.id];let S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(v,_){return s[_.id]===!0||(_.addEventListener("dispose",a),s[_.id]=!0,e.memory.geometries++),_}function h(v){let _=v.attributes;for(let S in _)t.update(_[S],i.ARRAY_BUFFER)}function u(v){let _=[],S=v.index,b=v.attributes.position,P=0;if(b===void 0)return;if(S!==null){let k=S.array;P=S.version;for(let z=0,R=k.length;z<R;z+=3){let T=k[z+0],O=k[z+1],W=k[z+2];_.push(T,O,O,W,W,T)}}else{let k=b.array;P=b.version;for(let z=0,R=k.length/3-1;z<R;z+=3){let T=z+0,O=z+1,W=z+2;_.push(T,O,O,W,W,T)}}let x=new(b.count>=65535?Do:Lo)(_,1);x.version=P;let g=r.get(v);g&&t.remove(g),r.set(v,x)}function d(v){let _=r.get(v);if(_){let S=v.index;S!==null&&_.version<S.version&&u(v)}else u(v);return r.get(v)}return{get:l,update:h,getWireframeAttribute:d}}function iM(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function h(v,_){i.drawElements(n,_,r,v*a),e.update(_,n,1)}function u(v,_,S){S!==0&&(i.drawElementsInstanced(n,_,r,v*a,S),e.update(_,n,S))}function d(v,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,v,0,S);let P=0;for(let x=0;x<S;x++)P+=_[x];e.update(P,n,1)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function sM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:be("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rM(i,t,e){let n=new WeakMap,s=new an;function r(a,l,h){let u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,_=n.get(l);if(_===void 0||_.count!==v){let F=function(){W.dispose(),n.delete(l),l.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();let S=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,P=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],k=l.morphAttributes.color||[],z=0;S===!0&&(z=1),b===!0&&(z=2),P===!0&&(z=3);let R=l.attributes.position.count*z,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*T*4*v),W=new Io(O,R,T,v);W.type=Ci,W.needsUpdate=!0;let A=z*4;for(let G=0;G<v;G++){let X=x[G],st=g[G],ct=k[G],j=R*T*4*G;for(let et=0;et<X.count;et++){let pt=et*A;S===!0&&(s.fromBufferAttribute(X,et),O[j+pt+0]=s.x,O[j+pt+1]=s.y,O[j+pt+2]=s.z,O[j+pt+3]=0),b===!0&&(s.fromBufferAttribute(st,et),O[j+pt+4]=s.x,O[j+pt+5]=s.y,O[j+pt+6]=s.z,O[j+pt+7]=0),P===!0&&(s.fromBufferAttribute(ct,et),O[j+pt+8]=s.x,O[j+pt+9]=s.y,O[j+pt+10]=s.z,O[j+pt+11]=ct.itemSize===4?s.w:1)}}_={count:v,texture:W,size:new zt(R,T)},n.set(l,_),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let S=0;for(let P=0;P<u.length;P++)S+=u[P];let b=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:r}}function aM(i,t,e,n,s){let r=new WeakMap;function a(u){let d=s.render.frame,v=u.geometry,_=t.get(u,v);if(r.get(_)!==d&&(t.update(_),r.set(_,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let S=u.skeleton;r.get(S)!==d&&(S.update(),r.set(S,d))}return _}function l(){r=new WeakMap}function h(u){let d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var oM={[Yd]:"LINEAR_TONE_MAPPING",[Jd]:"REINHARD_TONE_MAPPING",[Zd]:"CINEON_TONE_MAPPING",[jd]:"ACES_FILMIC_TONE_MAPPING",[Qd]:"AGX_TONE_MAPPING",[tf]:"NEUTRAL_TONE_MAPPING",[Kd]:"CUSTOM_TONE_MAPPING"};function lM(i,t,e,n,s,r){let a=new pi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,h=null,u=new Mn;u.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Sn([0,2,0,0,2,0],2));let d=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Bn(u,d),_=new Ta(-1,1,1,-1,0,1),S=null,b=null,P=!1,x,g=null,k=[],z=!1;this.setSize=function(R,T){a.setSize(R,T),l!==null&&l.setSize(R,T),h!==null&&h.setSize(R,T);for(let O=0;O<k.length;O++){let W=k[O];W.setSize&&W.setSize(R,T)}},this.setEffects=function(R){k=R,z=k.length>0&&k[0].isRenderPass===!0;let T=a.width,O=a.height;k.length>0&&l===null&&(l=new pi(T,O,{type:qi,depthBuffer:!1,stencilBuffer:!1}),h=new pi(T,O,{type:qi,depthBuffer:!1,stencilBuffer:!1}));for(let W=0;W<k.length;W++){let A=k[W];A.setSize&&A.setSize(T,O)}},this.begin=function(R,T){if(P||R.toneMapping===Wi&&k.length===0)return!1;if(g=T,T!==null){let O=T.width,W=T.height;(a.width!==O||a.height!==W)&&this.setSize(O,W)}return z===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return z},this.end=function(R,T){R.toneMapping=x,P=!0;let O=a,W=l;for(let A=0;A<k.length;A++){let F=k[A];F.enabled!==!1&&(F.render(R,W,O,T),F.needsSwap!==!1&&(O=W,W=W===l?h:l))}if(S!==R.outputColorSpace||b!==R.toneMapping){S=R.outputColorSpace,b=R.toneMapping,d.defines={},Xe.getTransfer(S)===rn&&(d.defines.SRGB_TRANSFER="");let A=oM[b];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(g),R.render(v,_),g=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),h!==null&&h.dispose(),u.dispose(),d.dispose()}}var Q0=new fi,wf=new qs(1,1),tg=new Io,eg=new Bc,ng=new Bo,N0=[],U0=[],F0=new Float32Array(16),O0=new Float32Array(9),B0=new Float32Array(4);function Na(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=N0[s];if(r===void 0&&(r=new Float32Array(s),N0[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function In(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cu(i,t){let e=U0[t];e===void 0&&(e=new Int32Array(t),U0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;i.uniform2fv(this.addr,t),Pn(e,t)}}function uM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(In(e,t))return;i.uniform3fv(this.addr,t),Pn(e,t)}}function dM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;i.uniform4fv(this.addr,t),Pn(e,t)}}function fM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(In(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pn(e,t)}else{if(In(e,n))return;B0.set(n),i.uniformMatrix2fv(this.addr,!1,B0),Pn(e,n)}}function pM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(In(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pn(e,t)}else{if(In(e,n))return;O0.set(n),i.uniformMatrix3fv(this.addr,!1,O0),Pn(e,n)}}function mM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(In(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pn(e,t)}else{if(In(e,n))return;F0.set(n),i.uniformMatrix4fv(this.addr,!1,F0),Pn(e,n)}}function gM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _M(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;i.uniform2iv(this.addr,t),Pn(e,t)}}function xM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;i.uniform3iv(this.addr,t),Pn(e,t)}}function vM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;i.uniform4iv(this.addr,t),Pn(e,t)}}function yM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function SM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;i.uniform2uiv(this.addr,t),Pn(e,t)}}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;i.uniform3uiv(this.addr,t),Pn(e,t)}}function bM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;i.uniform4uiv(this.addr,t),Pn(e,t)}}function wM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wf.compareFunction=e.isReversedDepthBuffer()?nu:eu,r=wf):r=Q0,e.setTexture2D(t||r,s)}function EM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eg,s)}function TM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ng,s)}function AM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tg,s)}function CM(i){switch(i){case 5126:return cM;case 35664:return hM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return yM;case 36294:return SM;case 36295:return MM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(i,t){i.uniform1fv(this.addr,t)}function IM(i,t){let e=Na(t,this.size,2);i.uniform2fv(this.addr,e)}function PM(i,t){let e=Na(t,this.size,3);i.uniform3fv(this.addr,e)}function LM(i,t){let e=Na(t,this.size,4);i.uniform4fv(this.addr,e)}function DM(i,t){let e=Na(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function NM(i,t){let e=Na(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function UM(i,t){let e=Na(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function FM(i,t){i.uniform1iv(this.addr,t)}function OM(i,t){i.uniform2iv(this.addr,t)}function BM(i,t){i.uniform3iv(this.addr,t)}function kM(i,t){i.uniform4iv(this.addr,t)}function zM(i,t){i.uniform1uiv(this.addr,t)}function $M(i,t){i.uniform2uiv(this.addr,t)}function VM(i,t){i.uniform3uiv(this.addr,t)}function HM(i,t){i.uniform4uiv(this.addr,t)}function GM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wf:a=Q0;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function WM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eg,r[a])}function XM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ng,r[a])}function qM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tg,r[a])}function YM(i){switch(i){case 5126:return RM;case 35664:return IM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return $M;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}var Ef=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=CM(e.type)}},Tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YM(e.type)}},Af=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Mf=/(\w+)(\])?(\[|\.)?/g;function k0(i,t){i.seq.push(t),i.map[t.id]=t}function JM(i,t,e){let n=i.name,s=n.length;for(Mf.lastIndex=0;;){let r=Mf.exec(n),a=Mf.lastIndex,l=r[1],h=r[2]==="]",u=r[3];if(h&&(l=l|0),u===void 0||u==="["&&a+2===s){k0(e,u===void 0?new Ef(l,i,t):new Tf(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new Af(l),k0(e,v)),e=v}}}var Da=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);JM(l,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function z0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ZM=37297,jM=0;function KM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var $0=new Re;function QM(i){Xe._getMatrix($0,Xe.workingColorSpace,i);let t=`mat3( ${$0.elements.map(e=>e.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function V0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+KM(i.getShaderSource(t),l)}else return r}function tb(i,t){let e=QM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var eb={[Yd]:"Linear",[Jd]:"Reinhard",[Zd]:"Cineon",[jd]:"ACESFilmic",[Qd]:"AgX",[tf]:"Neutral",[Kd]:"Custom"};function nb(i,t){let e=eb[t];return e===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var su=new Y;function ib(){Xe.getLuminanceCoefficients(su);let i=su.x.toFixed(4),t=su.y.toFixed(4),e=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function rb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ab(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function xl(i){return i!==""}function H0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(i){return i.replace(ob,cb)}var lb=new Map;function cb(i,t){let e=Be[t];if(e===void 0){let n=lb.get(t);if(n!==void 0)e=Be[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cf(e)}var hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(i){return i.replace(hb,ub)}function ub(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function X0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var db={[al]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function fb(i){return db[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pb={[Qs]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE_UV"};function mb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gb={[Pr]:"ENVMAP_MODE_REFRACTION"};function _b(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xb={[fh]:"ENVMAP_BLENDING_MULTIPLY",[o0]:"ENVMAP_BLENDING_MIX",[l0]:"ENVMAP_BLENDING_ADD"};function vb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xb[i.combine]||"ENVMAP_BLENDING_NONE"}function yb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,h=fb(e),u=mb(e),d=_b(e),v=vb(e),_=yb(e),S=sb(e),b=rb(r),P=s.createProgram(),x,g,k=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(xl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(xl).join(`
`),g.length>0&&(g+=`
`)):(x=[X0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),g=[X0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Wi?nb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,tb("linearToOutputTexel",e.outputColorSpace),ib(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xl).join(`
`)),a=Cf(a),a=H0(a,e),a=G0(a,e),l=Cf(l),l=H0(l,e),l=G0(l,e),a=W0(a),l=W0(l),e.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let z=k+x+a,R=k+g+l,T=z0(s,s.VERTEX_SHADER,z),O=z0(s,s.FRAGMENT_SHADER,R);s.attachShader(P,T),s.attachShader(P,O),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function W(X){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(P)||"",ct=s.getShaderInfoLog(T)||"",j=s.getShaderInfoLog(O)||"",et=st.trim(),pt=ct.trim(),gt=j.trim(),At=!0,_t=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,T,O);else{let wt=V0(s,T,"vertex"),bt=V0(s,O,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+et+`
`+wt+`
`+bt)}else et!==""?ve("WebGLProgram: Program Info Log:",et):(pt===""||gt==="")&&(_t=!1);_t&&(X.diagnostics={runnable:At,programLog:et,vertexShader:{log:pt,prefix:x},fragmentShader:{log:gt,prefix:g}})}s.deleteShader(T),s.deleteShader(O),A=new Da(s,P),F=ab(s,P)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let F;this.getAttributes=function(){return F===void 0&&W(this),F};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(P,ZM)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jM++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=T,this.fragmentShader=O,this}var Mb=0,Rf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new If(t),e.set(t,n)),n}},If=class{constructor(t){this.id=Mb++,this.code=t,this.usedTimes=0}};function bb(i){return i===nr||i===fl||i===pl}function wb(i,t,e,n,s,r){let a=new va,l=new Rf,h=new Set,u=[],d=new Map,v=n.logarithmicDepthBuffer,_=n.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return h.add(A),A===0?"uv":`uv${A}`}function P(A,F,G,X,st,ct){let j=X.fog,et=st.geometry,pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,At=t.get(A.envMap||pt,gt),_t=At&&At.mapping===ol?At.image.height:null,wt=S[A.type];A.precision!==null&&(_=n.getMaxPrecision(A.precision),_!==A.precision&&ve("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));let bt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Wt=bt!==void 0?bt.length:0,te=0;et.morphAttributes.position!==void 0&&(te=1),et.morphAttributes.normal!==void 0&&(te=2),et.morphAttributes.color!==void 0&&(te=3);let Ye,Le,Ve,vt;if(wt){let tn=ri[wt];Ye=tn.vertexShader,Le=tn.fragmentShader}else{Ye=A.vertexShader,Le=A.fragmentShader;let tn=l.getVertexShaderStage(A),Je=l.getFragmentShaderStage(A);l.update(A,tn,Je),Ve=tn.id,vt=Je.id}let yt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),he=st.isInstancedMesh===!0,jt=st.isBatchedMesh===!0,ge=!!A.map,ee=!!A.matcap,nt=!!At,Rt=!!A.aoMap,V=!!A.lightMap,Pt=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,ce=!!A.displacementMap,fe=!!A.emissiveMap,de=!!A.metalnessMap,Te=!!A.roughnessMap,q=A.anisotropy>0,Fe=A.clearcoat>0,De=A.dispersion>0,U=A.retroreflectivity>0,w=A.iridescence>0,it=A.sheen>0,ot=A.transmission>0,xt=q&&!!A.anisotropyMap,Lt=Fe&&!!A.clearcoatMap,kt=Fe&&!!A.clearcoatNormalMap,mt=Fe&&!!A.clearcoatRoughnessMap,ut=w&&!!A.iridescenceMap,Xt=w&&!!A.iridescenceThicknessMap,ue=it&&!!A.sheenColorMap,Yt=it&&!!A.sheenRoughnessMap,Vt=!!A.specularMap,oe=!!A.specularColorMap,pe=!!A.specularIntensityMap,Ae=ot&&!!A.transmissionMap,Q=ot&&!!A.thicknessMap,qt=!!A.gradientMap,St=!!A.alphaMap,Ht=A.alphaTest>0,Kt=!!A.alphaHash,Tt=!!A.extensions,se=Wi;A.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(se=i.toneMapping);let ne={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:Ye,fragmentShader:Le,defines:A.defines,customVertexShaderID:Ve,customFragmentShaderID:vt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:jt,batchingColor:jt&&st._colorsTexture!==null,instancing:he,instancingColor:he&&st.instanceColor!==null,instancingMorph:he&&st.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ge,matcap:ee,envMap:nt,envMapMode:nt&&At.mapping,envMapCubeUVHeight:_t,aoMap:Rt,lightMap:V,bumpMap:Pt,normalMap:Bt,displacementMap:ce,emissiveMap:fe,normalMapObjectSpace:Bt&&A.normalMapType===u0,normalMapTangentSpace:Bt&&A.normalMapType===tu,packedNormalMap:Bt&&A.normalMapType===tu&&bb(A.normalMap.format),metalnessMap:de,roughnessMap:Te,anisotropy:q,anisotropyMap:xt,clearcoat:Fe,clearcoatMap:Lt,clearcoatNormalMap:kt,clearcoatRoughnessMap:mt,dispersion:De,retroreflection:U,iridescence:w,iridescenceMap:ut,iridescenceThicknessMap:Xt,sheen:it,sheenColorMap:ue,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:oe,specularIntensityMap:pe,transmission:ot,transmissionMap:Ae,thicknessMap:Q,gradientMap:qt,opaque:A.transparent===!1&&A.blending===Ca&&A.alphaToCoverage===!1,alphaMap:St,alphaTest:Ht,alphaHash:Kt,combine:A.combine,mapUv:ge&&b(A.map.channel),aoMapUv:Rt&&b(A.aoMap.channel),lightMapUv:V&&b(A.lightMap.channel),bumpMapUv:Pt&&b(A.bumpMap.channel),normalMapUv:Bt&&b(A.normalMap.channel),displacementMapUv:ce&&b(A.displacementMap.channel),emissiveMapUv:fe&&b(A.emissiveMap.channel),metalnessMapUv:de&&b(A.metalnessMap.channel),roughnessMapUv:Te&&b(A.roughnessMap.channel),anisotropyMapUv:xt&&b(A.anisotropyMap.channel),clearcoatMapUv:Lt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:kt&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&b(A.sheenRoughnessMap.channel),specularMapUv:Vt&&b(A.specularMap.channel),specularColorMapUv:oe&&b(A.specularColorMap.channel),specularIntensityMapUv:pe&&b(A.specularIntensityMap.channel),transmissionMapUv:Ae&&b(A.transmissionMap.channel),thicknessMapUv:Q&&b(A.thicknessMap.channel),alphaMapUv:St&&b(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Bt||q),vertexNormals:!!et.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!et.attributes.uv&&(ge||St),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||et.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:te,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ge&&A.map.isVideoTexture===!0&&Xe.getTransfer(A.map.colorSpace)===rn,decodeVideoTextureEmissive:fe&&A.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(A.emissiveMap.colorSpace)===rn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===os,flipSided:A.side===si,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Tt&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&A.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ne.vertexUv1s=h.has(1),ne.vertexUv2s=h.has(2),ne.vertexUv3s=h.has(3),h.clear(),ne}function x(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let G in A.defines)F.push(G),F.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(g(F,A),k(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function g(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function k(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function z(A){let F=S[A.type],G;if(F){let X=ri[F];G=ml.clone(X.uniforms)}else G=A.uniforms;return G}function R(A,F){let G=d.get(F);return G!==void 0?++G.usedTimes:(G=new Sb(i,F,A,s),u.push(G),d.set(F,G)),G}function T(A){if(--A.usedTimes===0){let F=u.indexOf(A);u[F]=u[u.length-1],u.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function W(){l.dispose()}return{getParameters:P,getProgramCacheKey:x,getUniforms:z,acquireProgram:R,releaseProgram:T,releaseShaderCache:O,programs:u,dispose:W}}function Eb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,h){i.get(a)[l]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Y0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function l(_,S,b,P,x,g){let k=i[t];return k===void 0?(k={id:_.id,object:_,geometry:S,material:b,materialVariant:a(_),groupOrder:P,renderOrder:_.renderOrder,z:x,group:g},i[t]=k):(k.id=_.id,k.object=_,k.geometry=S,k.material=b,k.materialVariant=a(_),k.groupOrder=P,k.renderOrder=_.renderOrder,k.z=x,k.group=g),t++,k}function h(_,S,b,P,x,g,k){k.reversedDepth===!0&&(x=-x);let z=l(_,S,b,P,x,g);b.transmission>0?n.push(z):b.transparent===!0?s.push(z):e.push(z)}function u(_,S,b,P,x,g){let k=l(_,S,b,P,x,g);b.transmission>0?n.unshift(k):b.transparent===!0?s.unshift(k):e.unshift(k)}function d(_,S){e.length>1&&e.sort(_||Tb),n.length>1&&n.sort(S||q0),s.length>1&&s.sort(S||q0)}function v(){for(let _=t,S=i.length;_<S;_++){let b=i[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:v,sort:d}}function Ab(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Y0,i.set(n,[a])):s>=r.length?(a=new Y0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new xe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function Rb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ib=0;function Pb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lb(i){let t=new Cb,e=Rb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Y);let s=new Y,r=new qe,a=new qe;function l(u){let d=0,v=0,_=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let S=0,b=0,P=0,x=0,g=0,k=0,z=0,R=0,T=0,O=0,W=0,A=0,F=0,G=0;u.sort(Pb);for(let st=0,ct=u.length;st<ct;st++){let j=u[st],et=j.color,pt=j.intensity,gt=j.distance,At=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===nr?At=j.shadow.map.texture:At=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)d+=et.r*pt,v+=et.g*pt,_+=et.b*pt;else if(j.isLightProbe){for(let _t=0;_t<9;_t++)n.probe[_t].addScaledVector(j.sh.coefficients[_t],pt);G++}else if(j.isSunLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[b]=bt,n.sunShadowMap[b]=At;let Wt=wt.getViewportCount();for(let te=0;te<Wt;te++)n.sunShadowMatrix[P+te]=wt.getMatrix(te),n.sunShadowCascade[P+te]=wt._cascadeData[te];P+=Wt,b++}n.sun[S]=_t,S++}else if(j.isDirectionalLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.directionalShadow[x]=bt,n.directionalShadowMap[x]=At,n.directionalShadowMatrix[x]=j.shadow.matrix,T++}n.directional[x]=_t,x++}else if(j.isSpotLight){let _t=t.get(j);_t.position.setFromMatrixPosition(j.matrixWorld),_t.color.copy(et).multiplyScalar(pt),_t.distance=gt,_t.coneCos=Math.cos(j.angle),_t.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),_t.decay=j.decay,n.spot[k]=_t;let wt=j.shadow;if(j.map&&(n.spotLightMap[A]=j.map,A++,wt.updateMatrices(j),j.castShadow&&F++),n.spotLightMatrix[k]=wt.matrix,j.castShadow){let bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.spotShadow[k]=bt,n.spotShadowMap[k]=At,W++}k++}else if(j.isRectAreaLight){let _t=t.get(j);_t.color.copy(et).multiplyScalar(pt),_t.halfWidth.set(j.width*.5,0,0),_t.halfHeight.set(0,j.height*.5,0),n.rectArea[z]=_t,z++}else if(j.isPointLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),_t.distance=j.distance,_t.decay=j.decay,j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,bt.shadowCameraNear=wt.camera.near,bt.shadowCameraFar=wt.camera.far,n.pointShadow[g]=bt,n.pointShadowMap[g]=At,n.pointShadowMatrix[g]=j.shadow.matrix,O++}n.point[g]=_t,g++}else if(j.isHemisphereLight){let _t=t.get(j);_t.skyColor.copy(j.color).multiplyScalar(pt),_t.groundColor.copy(j.groundColor).multiplyScalar(pt),n.hemi[R]=_t,R++}}z>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=_;let X=n.hash;(X.sunLength!==S||X.directionalLength!==x||X.pointLength!==g||X.spotLength!==k||X.rectAreaLength!==z||X.hemiLength!==R||X.numSunShadows!==b||X.numDirectionalShadows!==T||X.numPointShadows!==O||X.numSpotShadows!==W||X.numSpotMaps!==A||X.numLightProbes!==G)&&(n.sun.length=S,n.directional.length=x,n.spot.length=k,n.rectArea.length=z,n.point.length=g,n.hemi.length=R,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=W,n.spotShadowMap.length=W,n.spotLightMatrix.length=W+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=G,X.sunLength=S,X.directionalLength=x,X.pointLength=g,X.spotLength=k,X.rectAreaLength=z,X.hemiLength=R,X.numSunShadows=b,X.numDirectionalShadows=T,X.numPointShadows=O,X.numSpotShadows=W,X.numSpotMaps=A,X.numLightProbes=G,n.version=Ib++)}function h(u,d){let v=0,_=0,S=0,b=0,P=0,x=0,g=d.matrixWorldInverse;for(let k=0,z=u.length;k<z;k++){let R=u[k];if(R.isSunLight){let T=n.sun[v];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(g),v++}else if(R.isDirectionalLight){let T=n.directional[_];T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),_++}else if(R.isSpotLight){let T=n.spot[b];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),b++}else if(R.isRectAreaLight){let T=n.rectArea[P];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),P++}else if(R.isPointLight){let T=n.point[S];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),S++}else if(R.isHemisphereLight){let T=n.hemi[x];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(g),x++}}}return{setup:l,setupView:h,state:n}}function J0(i){let t=new Lb(i),e=[],n=[],s=[];function r(_){v.camera=_,e.length=0,n.length=0,s.length=0}function a(_){e.push(_)}function l(_){n.push(_)}function h(_){s.push(_)}function u(){t.setup(e)}function d(_){t.setupView(e,_)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:h}}function Db(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new J0(i),t.set(s,[l])):r>=a.length?(l=new J0(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
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
}`,Fb=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Ob=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Z0=new qe,_l=new Y,bf=new Y;function Bb(i,t,e){let n=new Sa,s=new zt,r=new zt,a=new an,l=new Kc,h=new Qc,u={},d=e.maxTextureSize,v={[Ks]:si,[si]:Ks,[os]:os},_=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Nb,fragmentShader:Ub}),S=_.clone();S.defines.HORIZONTAL_PASS=1;let b=new Mn;b.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Bn(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let g=this.type;this.render=function(O,W,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===Vm&&(ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=al);let F=i.getRenderTarget(),G=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),st=i.state;st.setBlending(ls),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let ct=g!==this.type;ct&&W.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(et=>et.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,et=O.length;j<et;j++){let pt=O[j],gt=pt.shadow;if(gt===void 0){ve("WebGLShadowMap:",pt,"has no shadow.");continue}if(gt.autoUpdate===!1&&gt.needsUpdate===!1)continue;s.copy(gt.mapSize);let At=gt.getFrameExtents();s.multiply(At),r.copy(gt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,gt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,gt.mapSize.y=r.y));let _t=i.state.buffers.depth.getReversed();if(gt.camera._reversedDepth=_t,gt.map===null||ct===!0){if(gt.map!==null&&(gt.map.depthTexture!==null&&(gt.map.depthTexture.dispose(),gt.map.depthTexture=null),gt.map.dispose()),this.type===Aa){if(pt.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}gt.map=new pi(s.x,s.y,{format:nr,type:qi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),gt.map.texture.name=pt.name+".shadowMap",gt.map.depthTexture=new qs(s.x,s.y,Ci),gt.map.depthTexture.name=pt.name+".shadowMapDepth",gt.map.depthTexture.format=is,gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Fn,gt.map.depthTexture.magFilter=Fn}else pt.isPointLight?(gt.map=new au(s.x),gt.map.depthTexture=new Gc(s.x,Xi)):(gt.map=new pi(s.x,s.y),gt.map.depthTexture=new qs(s.x,s.y,Xi)),gt.map.depthTexture.name=pt.name+".shadowMap",gt.map.depthTexture.format=is,this.type===al?(gt.map.depthTexture.compareFunction=_t?nu:eu,gt.map.depthTexture.minFilter=Gn,gt.map.depthTexture.magFilter=Gn):(gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Fn,gt.map.depthTexture.magFilter=Fn);gt.camera.updateProjectionMatrix()}gt.map.isWebGLCubeRenderTarget!==!0&&(gt.map.width!==s.x||gt.map.height!==s.y)&&gt.map.setSize(s.x,s.y);let wt=gt.map.isWebGLCubeRenderTarget?6:gt.getViewportCount();pt.isPointLight!==!0&&gt.updateMatrices(pt,A);for(let bt=0;bt<wt;bt++){let Wt=gt.getCamera(bt);if(pt.isPointLight){let te=gt.camera,Ye=gt.matrix,Le=pt.distance||te.far;Le!==te.far&&(te.far=Le,te.updateProjectionMatrix()),_l.setFromMatrixPosition(pt.matrixWorld),te.position.copy(_l),bf.copy(te.position),bf.add(Fb[bt]),te.up.copy(Ob[bt]),te.lookAt(bf),te.updateMatrixWorld(),Ye.makeTranslation(-_l.x,-_l.y,-_l.z),Z0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),gt._frustum.setFromProjectionMatrix(Z0,te.coordinateSystem,te.reversedDepth)}if(gt.map.isWebGLCubeRenderTarget)i.setRenderTarget(gt.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(gt.map),i.clear());let te=gt.getViewport(bt);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),st.viewport(a)}n=gt.getFrustum(bt),R(W,A,Wt,pt,this.type)}gt.isPointLightShadow!==!0&&this.type===Aa&&k(gt,A),gt.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(F,G,X)};function k(O,W){let A=t.update(P);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null?O.mapPass=new pi(s.x,s.y,{format:nr,type:qi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value.set(O.map.width,O.map.height),_.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(W,null,A,_,P,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value.set(O.map.width,O.map.height),S.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(W,null,A,S,P,null)}function z(O,W,A,F){let G=null,X=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(X!==void 0)G=X;else if(G=A.isPointLight===!0?h:l,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let st=G.uuid,ct=W.uuid,j=u[st];j===void 0&&(j={},u[st]=j);let et=j[ct];et===void 0&&(et=G.clone(),j[ct]=et,W.addEventListener("dispose",T)),G=et}if(G.visible=W.visible,G.wireframe=W.wireframe,F===Aa?G.side=W.shadowSide!==null?W.shadowSide:W.side:G.side=W.shadowSide!==null?W.shadowSide:v[W.side],G.alphaMap=W.alphaMap,G.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,G.map=W.map,G.clipShadows=W.clipShadows,G.clippingPlanes=W.clippingPlanes,G.clipIntersection=W.clipIntersection,G.displacementMap=W.displacementMap,G.displacementScale=W.displacementScale,G.displacementBias=W.displacementBias,G.wireframeLinewidth=W.wireframeLinewidth,G.linewidth=W.linewidth,A.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let st=i.properties.get(G);st.light=A}return G}function R(O,W,A,F,G){if(O.visible===!1)return;if(O.layers.test(W.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&G===Aa)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let ct=t.update(O),j=O.material;if(Array.isArray(j)){let et=ct.groups;for(let pt=0,gt=et.length;pt<gt;pt++){let At=et[pt],_t=j[At.materialIndex];if(_t&&_t.visible){let wt=z(O,_t,F,G);O.onBeforeShadow(i,O,W,A,ct,wt,At),i.renderBufferDirect(A,null,ct,wt,O,At),O.onAfterShadow(i,O,W,A,ct,wt,At)}}}else if(j.visible){let et=z(O,j,F,G);O.onBeforeShadow(i,O,W,A,ct,et,null),i.renderBufferDirect(A,null,ct,et,O,null),O.onAfterShadow(i,O,W,A,ct,et,null)}}let st=O.children;for(let ct=0,j=st.length;ct<j;ct++)R(st[ct],W,A,F,G)}function T(O){O.target.removeEventListener("dispose",T);for(let A in u){let F=u[A],G=O.target.uuid;G in F&&(F[G].dispose(),delete F[G])}}}function kb(i,t){function e(){let Q=!1,qt=new an,St=null,Ht=new an(0,0,0,0);return{setMask:function(Kt){St!==Kt&&!Q&&(i.colorMask(Kt,Kt,Kt,Kt),St=Kt)},setLocked:function(Kt){Q=Kt},setClear:function(Kt,Tt,se,ne,tn){tn===!0&&(Kt*=ne,Tt*=ne,se*=ne),qt.set(Kt,Tt,se,ne),Ht.equals(qt)===!1&&(i.clearColor(Kt,Tt,se,ne),Ht.copy(qt))},reset:function(){Q=!1,St=null,Ht.set(-1,0,0,0)}}}function n(){let Q=!1,qt=!1,St=null,Ht=null,Kt=null;return{setReversed:function(Tt){if(qt!==Tt){let se=t.get("EXT_clip_control");Tt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),qt=Tt;let ne=Kt;Kt=null,this.setClear(ne)}},getReversed:function(){return qt},setTest:function(Tt){Tt?yt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Tt){St!==Tt&&!Q&&(i.depthMask(Tt),St=Tt)},setFunc:function(Tt){if(qt&&(Tt=M0[Tt]),Ht!==Tt){switch(Tt){case Tc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case pa:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ht=Tt}},setLocked:function(Tt){Q=Tt},setClear:function(Tt){Kt!==Tt&&(Kt=Tt,qt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){Q=!1,St=null,Ht=null,Kt=null,qt=!1}}}function s(){let Q=!1,qt=null,St=null,Ht=null,Kt=null,Tt=null,se=null,ne=null,tn=null;return{setTest:function(Je){Q||(Je?yt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Je){qt!==Je&&!Q&&(i.stencilMask(Je),qt=Je)},setFunc:function(Je,$n,oi){(St!==Je||Ht!==$n||Kt!==oi)&&(i.stencilFunc(Je,$n,oi),St=Je,Ht=$n,Kt=oi)},setOp:function(Je,$n,oi){(Tt!==Je||se!==$n||ne!==oi)&&(i.stencilOp(Je,$n,oi),Tt=Je,se=$n,ne=oi)},setLocked:function(Je){Q=Je},setClear:function(Je){tn!==Je&&(i.clearStencil(Je),tn=Je)},reset:function(){Q=!1,qt=null,St=null,Ht=null,Kt=null,Tt=null,se=null,ne=null,tn=null}}}let r=new e,a=new n,l=new s,h=new WeakMap,u=new WeakMap,d={},v={},_={},S=new WeakMap,b=[],P=null,x=!1,g=null,k=null,z=null,R=null,T=null,O=null,W=null,A=new xe(0,0,0),F=0,G=!1,X=null,st=null,ct=null,j=null,et=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),gt=!1,At=0,_t=i.getParameter(i.VERSION);_t.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(_t)[1]),gt=At>=1):_t.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),gt=At>=2);let wt=null,bt={},Wt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Ye=new an().fromArray(Wt),Le=new an().fromArray(te);function Ve(Q,qt,St,Ht){let Kt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Q,Tt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<St;se++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,Ht,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(qt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return Tt}let vt={};vt[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),yt(i.DEPTH_TEST),a.setFunc(pa),Pt(!1),Bt(Vd),yt(i.CULL_FACE),Rt(ls);function yt(Q){d[Q]!==!0&&(i.enable(Q),d[Q]=!0)}function Ut(Q){d[Q]!==!1&&(i.disable(Q),d[Q]=!1)}function he(Q,qt){return _[Q]!==qt?(i.bindFramebuffer(Q,qt),_[Q]=qt,Q===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=qt),Q===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function jt(Q,qt){let St=b,Ht=!1;if(Q){St=S.get(qt),St===void 0&&(St=[],S.set(qt,St));let Kt=Q.textures;if(St.length!==Kt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,se=Kt.length;Tt<se;Tt++)St[Tt]=i.COLOR_ATTACHMENT0+Tt;St.length=Kt.length,Ht=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Ht=!0);Ht&&i.drawBuffers(St)}function ge(Q){return P!==Q?(i.useProgram(Q),P=Q,!0):!1}let ee={[Ir]:i.FUNC_ADD,[Gm]:i.FUNC_SUBTRACT,[Wm]:i.FUNC_REVERSE_SUBTRACT};ee[Xm]=i.MIN,ee[qm]=i.MAX;let nt={[Ym]:i.ZERO,[Jm]:i.ONE,[Zm]:i.SRC_COLOR,[Xd]:i.SRC_ALPHA,[n0]:i.SRC_ALPHA_SATURATE,[t0]:i.DST_COLOR,[Km]:i.DST_ALPHA,[jm]:i.ONE_MINUS_SRC_COLOR,[qd]:i.ONE_MINUS_SRC_ALPHA,[e0]:i.ONE_MINUS_DST_COLOR,[Qm]:i.ONE_MINUS_DST_ALPHA,[i0]:i.CONSTANT_COLOR,[s0]:i.ONE_MINUS_CONSTANT_COLOR,[r0]:i.CONSTANT_ALPHA,[a0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(Q,qt,St,Ht,Kt,Tt,se,ne,tn,Je){if(Q===ls){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(yt(i.BLEND),x=!0),Q!==Hm){if(Q!==g||Je!==G){if((k!==Ir||T!==Ir)&&(i.blendEquation(i.FUNC_ADD),k=Ir,T=Ir),Je)switch(Q){case Ca:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hd:i.blendFunc(i.ONE,i.ONE);break;case Gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gd:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",Q);break}z=null,R=null,O=null,W=null,A.set(0,0,0),F=0,g=Q,G=Je}return}Kt=Kt||qt,Tt=Tt||St,se=se||Ht,(qt!==k||Kt!==T)&&(i.blendEquationSeparate(ee[qt],ee[Kt]),k=qt,T=Kt),(St!==z||Ht!==R||Tt!==O||se!==W)&&(i.blendFuncSeparate(nt[St],nt[Ht],nt[Tt],nt[se]),z=St,R=Ht,O=Tt,W=se),(ne.equals(A)===!1||tn!==F)&&(i.blendColor(ne.r,ne.g,ne.b,tn),A.copy(ne),F=tn),g=Q,G=!1}function V(Q,qt){Q.side===os?Ut(i.CULL_FACE):yt(i.CULL_FACE);let St=Q.side===si;qt&&(St=!St),Pt(St),Q.blending===Ca&&Q.transparent===!1?Rt(ls):Rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),a.setFunc(Q.depthFunc),a.setTest(Q.depthTest),a.setMask(Q.depthWrite),r.setMask(Q.colorWrite);let Ht=Q.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(Q.stencilWriteMask),l.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),l.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),fe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(Q){X!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),X=Q)}function Bt(Q){Q!==zm?(yt(i.CULL_FACE),Q!==st&&(Q===Vd?i.cullFace(i.BACK):Q===$m?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),st=Q}function ce(Q){Q!==ct&&(gt&&i.lineWidth(Q),ct=Q)}function fe(Q,qt,St){Q?(yt(i.POLYGON_OFFSET_FILL),(j!==qt||et!==St)&&(j=qt,et=St,a.getReversed()&&(qt=-qt),i.polygonOffset(qt,St))):Ut(i.POLYGON_OFFSET_FILL)}function de(Q){Q?yt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Te(Q){Q===void 0&&(Q=i.TEXTURE0+pt-1),wt!==Q&&(i.activeTexture(Q),wt=Q)}function q(Q,qt,St){St===void 0&&(wt===null?St=i.TEXTURE0+pt-1:St=wt);let Ht=bt[St];Ht===void 0&&(Ht={type:void 0,texture:void 0},bt[St]=Ht),(Ht.type!==Q||Ht.texture!==qt)&&(wt!==St&&(i.activeTexture(St),wt=St),i.bindTexture(Q,qt||vt[Q]),Ht.type=Q,Ht.texture=qt)}function Fe(){let Q=bt[wt];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function w(){try{i.texSubImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function it(){try{i.texSubImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function xt(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function Lt(){try{i.texStorage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function kt(){try{i.texStorage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function mt(){try{i.texImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function ut(){try{i.texImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function Xt(Q){return v[Q]!==void 0?v[Q]:i.getParameter(Q)}function ue(Q,qt){v[Q]!==qt&&(i.pixelStorei(Q,qt),v[Q]=qt)}function Yt(Q){Ye.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),Ye.copy(Q))}function Vt(Q){Le.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Le.copy(Q))}function oe(Q,qt){let St=u.get(qt);St===void 0&&(St=new WeakMap,u.set(qt,St));let Ht=St.get(Q);Ht===void 0&&(Ht=i.getUniformBlockIndex(qt,Q.name),St.set(Q,Ht))}function pe(Q,qt){let Ht=u.get(qt).get(Q);h.get(qt)!==Ht&&(i.uniformBlockBinding(qt,Ht,Q.__bindingPointIndex),h.set(qt,Ht))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},wt=null,bt={},_={},S=new WeakMap,b=[],P=null,x=!1,g=null,k=null,z=null,R=null,T=null,O=null,W=null,A=new xe(0,0,0),F=0,G=!1,X=null,st=null,ct=null,j=null,et=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:yt,disable:Ut,bindFramebuffer:he,drawBuffers:jt,useProgram:ge,setBlending:Rt,setMaterial:V,setFlipSided:Pt,setCullFace:Bt,setLineWidth:ce,setPolygonOffset:fe,setScissorTest:de,activeTexture:Te,bindTexture:q,unbindTexture:Fe,compressedTexImage2D:De,compressedTexImage3D:U,texImage2D:mt,texImage3D:ut,pixelStorei:ue,getParameter:Xt,updateUBOMapping:oe,uniformBlockBinding:pe,texStorage2D:Lt,texStorage3D:kt,texSubImage2D:w,texSubImage3D:it,compressedTexSubImage2D:ot,compressedTexSubImage3D:xt,scissor:Yt,viewport:Vt,reset:Ae}}function zb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,d=new WeakMap,v=new Set,_,S=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(U,w){return b?new OffscreenCanvas(U,w):Co("canvas")}function x(U,w,it){let ot=1,xt=De(U);if((xt.width>it||xt.height>it)&&(ot=it/Math.max(xt.width,xt.height)),ot<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Lt=Math.floor(ot*xt.width),kt=Math.floor(ot*xt.height);_===void 0&&(_=P(Lt,kt));let mt=w?P(Lt,kt):_;return mt.width=Lt,mt.height=kt,mt.getContext("2d").drawImage(U,0,0,Lt,kt),ve("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Lt+"x"+kt+")."),mt}else return"data"in U&&ve("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function g(U){return U.generateMipmaps}function k(U){i.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(U,w,it,ot,xt,Lt=!1){if(U!==null){if(i[U]!==void 0)return i[U];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let kt;ot&&(kt=t.get("EXT_texture_norm16"),kt||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=w;if(w===i.RED&&(it===i.FLOAT&&(mt=i.R32F),it===i.HALF_FLOAT&&(mt=i.R16F),it===i.UNSIGNED_BYTE&&(mt=i.R8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.R16_EXT),it===i.SHORT&&kt&&(mt=kt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.R8UI),it===i.UNSIGNED_SHORT&&(mt=i.R16UI),it===i.UNSIGNED_INT&&(mt=i.R32UI),it===i.BYTE&&(mt=i.R8I),it===i.SHORT&&(mt=i.R16I),it===i.INT&&(mt=i.R32I)),w===i.RG&&(it===i.FLOAT&&(mt=i.RG32F),it===i.HALF_FLOAT&&(mt=i.RG16F),it===i.UNSIGNED_BYTE&&(mt=i.RG8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RG16_EXT),it===i.SHORT&&kt&&(mt=kt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RG8UI),it===i.UNSIGNED_SHORT&&(mt=i.RG16UI),it===i.UNSIGNED_INT&&(mt=i.RG32UI),it===i.BYTE&&(mt=i.RG8I),it===i.SHORT&&(mt=i.RG16I),it===i.INT&&(mt=i.RG32I)),w===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),it===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),it===i.UNSIGNED_INT&&(mt=i.RGB32UI),it===i.BYTE&&(mt=i.RGB8I),it===i.SHORT&&(mt=i.RGB16I),it===i.INT&&(mt=i.RGB32I)),w===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),it===i.UNSIGNED_INT&&(mt=i.RGBA32UI),it===i.BYTE&&(mt=i.RGBA8I),it===i.SHORT&&(mt=i.RGBA16I),it===i.INT&&(mt=i.RGBA32I)),w===i.RGB&&(it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RGB16_EXT),it===i.SHORT&&kt&&(mt=kt.RGB16_SNORM_EXT),it===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),it===i.UNSIGNED_INT_10F_11F_11F_REV&&(mt=i.R11F_G11F_B10F)),w===i.RGBA){let ut=Lt?Ao:Xe.getTransfer(xt);it===i.FLOAT&&(mt=i.RGBA32F),it===i.HALF_FLOAT&&(mt=i.RGBA16F),it===i.UNSIGNED_BYTE&&(mt=ut===rn?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RGBA16_EXT),it===i.SHORT&&kt&&(mt=kt.RGBA16_SNORM_EXT),it===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function T(U,w){let it;return U?w===null||w===Xi||w===Ia?it=i.DEPTH24_STENCIL8:w===Ci?it=i.DEPTH32F_STENCIL8:w===Ra&&(it=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===Ia?it=i.DEPTH_COMPONENT24:w===Ci?it=i.DEPTH_COMPONENT32F:w===Ra&&(it=i.DEPTH_COMPONENT16),it}function O(U,w){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function W(U){let w=U.target;w.removeEventListener("dispose",W),F(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&v.delete(w)}function A(U){let w=U.target;w.removeEventListener("dispose",A),X(w)}function F(U){let w=n.get(U);if(w.__webglInit===void 0)return;let it=U.source,ot=S.get(it);if(ot){let xt=ot[w.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&G(U),Object.keys(ot).length===0&&S.delete(it)}n.remove(U)}function G(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let it=U.source,ot=S.get(it);delete ot[w.__cacheKey],a.memory.textures--}function X(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let xt=0;xt<w.__webglFramebuffer[ot].length;xt++)i.deleteFramebuffer(w.__webglFramebuffer[ot][xt]);else i.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[ot]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let it=U.textures;for(let ot=0,xt=it.length;ot<xt;ot++){let Lt=n.get(it[ot]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(it[ot])}n.remove(U)}let st=0;function ct(){st=0}function j(){return st}function et(U){st=U}function pt(){let U=st;return U>=s.maxTextures&&ve("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,U}function gt(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function At(U,w){let it=n.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){let ot=U.image;if(ot===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(it,U,w);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+w)}function _t(U,w){let it=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Ut(it,U,w);return}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+w)}function wt(U,w){let it=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Ut(it,U,w);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+w)}function bt(U,w){let it=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&it.__version!==U.version){he(it,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+w)}let Wt={[Dc]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},te={[Fn]:i.NEAREST,[c0]:i.NEAREST_MIPMAP_NEAREST,[ll]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[gh]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},Ye={[f0]:i.NEVER,[x0]:i.ALWAYS,[p0]:i.LESS,[eu]:i.LEQUAL,[m0]:i.EQUAL,[nu]:i.GEQUAL,[g0]:i.GREATER,[_0]:i.NOTEQUAL};function Le(U,w){if(w.type===Ci&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===gh||w.magFilter===ll||w.magFilter===tr||w.minFilter===Gn||w.minFilter===gh||w.minFilter===ll||w.minFilter===tr)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Wt[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Wt[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Wt[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,te[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ye[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fn||w.minFilter!==ll&&w.minFilter!==tr||w.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ve(U,w){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",W));let ot=w.source,xt=S.get(ot);xt===void 0&&(xt={},S.set(ot,xt));let Lt=gt(w);if(Lt!==U.__cacheKey){xt[Lt]===void 0&&(xt[Lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,it=!0),xt[Lt].usedTimes++;let kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&G(w)),U.__cacheKey=Lt,U.__webglTexture=xt[Lt].texture}return it}function vt(U,w,it){return Math.floor(Math.floor(U/it)/w)}function yt(U,w,it,ot){let Lt=U.updateRanges;if(Lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,it,ot,w.data);else{Lt.sort((ue,Yt)=>ue.start-Yt.start);let kt=0;for(let ue=1;ue<Lt.length;ue++){let Yt=Lt[kt],Vt=Lt[ue],oe=Yt.start+Yt.count,pe=vt(Vt.start,w.width,4),Ae=vt(Yt.start,w.width,4);Vt.start<=oe+1&&pe===Ae&&vt(Vt.start+Vt.count-1,w.width,4)===pe?Yt.count=Math.max(Yt.count,Vt.start+Vt.count-Yt.start):(++kt,Lt[kt]=Vt)}Lt.length=kt+1;let mt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ue=0,Yt=Lt.length;ue<Yt;ue++){let Vt=Lt[ue],oe=Math.floor(Vt.start/4),pe=Math.ceil(Vt.count/4),Ae=oe%w.width,Q=Math.floor(oe/w.width),qt=pe,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,Ae,Q,qt,St,it,ot,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt)}}function Ut(U,w,it){let ot=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ot=i.TEXTURE_3D);let xt=Ve(U,w),Lt=w.source;e.bindTexture(ot,U.__webglTexture,i.TEXTURE0+it);let kt=n.get(Lt);if(Lt.version!==kt.__version||xt===!0){if(e.activeTexture(i.TEXTURE0+it),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let St=Xe.getPrimaries(Xe.workingColorSpace),Ht=w.colorSpace===Ps?null:Xe.getPrimaries(w.colorSpace),Kt=w.colorSpace===Ps||St===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ut=x(w.image,!1,s.maxTextureSize);ut=Fe(w,ut);let Xt=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),Yt=R(w.internalFormat,Xt,ue,w.normalized,w.colorSpace,w.isVideoTexture);Le(ot,w);let Vt,oe=w.mipmaps,pe=w.isVideoTexture!==!0,Ae=kt.__version===void 0||xt===!0,Q=Lt.dataReady,qt=O(w,ut);if(w.isDepthTexture)Yt=T(w.format===er,w.type),Ae&&(pe?e.texStorage2D(i.TEXTURE_2D,1,Yt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Xt,ue,null));else if(w.isDataTexture)if(oe.length>0){pe&&Ae&&e.texStorage2D(i.TEXTURE_2D,qt,Yt,oe[0].width,oe[0].height);for(let St=0,Ht=oe.length;St<Ht;St++)Vt=oe[St],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Xt,ue,Vt.data):e.texImage2D(i.TEXTURE_2D,St,Yt,Vt.width,Vt.height,0,Xt,ue,Vt.data);w.generateMipmaps=!1}else pe?(Ae&&e.texStorage2D(i.TEXTURE_2D,qt,Yt,ut.width,ut.height),Q&&yt(w,ut,Xt,ue)):e.texImage2D(i.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Xt,ue,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Yt,oe[0].width,oe[0].height,ut.depth);for(let St=0,Ht=oe.length;St<Ht;St++)if(Vt=oe[St],w.format!==Ri)if(Xt!==null)if(pe){if(Q)if(w.layerUpdates.size>0){let Kt=_f(Vt.width,Vt.height,w.format,w.type);for(let Tt of w.layerUpdates){let se=Vt.data.subarray(Tt*Kt/Vt.data.BYTES_PER_ELEMENT,(Tt+1)*Kt/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Tt,Vt.width,Vt.height,1,Xt,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,ut.depth,Xt,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Yt,Vt.width,Vt.height,ut.depth,0,Vt.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,ut.depth,Xt,ue,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Yt,Vt.width,Vt.height,ut.depth,0,Xt,ue,Vt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{pe&&Ae&&e.texStorage2D(i.TEXTURE_2D,qt,Yt,oe[0].width,oe[0].height);for(let St=0,Ht=oe.length;St<Ht;St++)Vt=oe[St],w.format!==Ri?Xt!==null?pe?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Yt,Vt.width,Vt.height,0,Vt.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Xt,ue,Vt.data):e.texImage2D(i.TEXTURE_2D,St,Yt,Vt.width,Vt.height,0,Xt,ue,Vt.data)}else if(w.isDataArrayTexture)if(pe){if(Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Yt,ut.width,ut.height,ut.depth),Q)if(w.layerUpdates.size>0){let St=_f(ut.width,ut.height,w.format,w.type);for(let Ht of w.layerUpdates){let Kt=ut.data.subarray(Ht*St/ut.data.BYTES_PER_ELEMENT,(Ht+1)*St/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,ut.width,ut.height,1,Xt,ue,Kt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Xt,ue,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,ut.width,ut.height,ut.depth,0,Xt,ue,ut.data);else if(w.isData3DTexture)pe?(Ae&&e.texStorage3D(i.TEXTURE_3D,qt,Yt,ut.width,ut.height,ut.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Xt,ue,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,ut.width,ut.height,ut.depth,0,Xt,ue,ut.data);else if(w.isFramebufferTexture){if(Ae)if(pe)e.texStorage2D(i.TEXTURE_2D,qt,Yt,ut.width,ut.height);else{let St=ut.width,Ht=ut.height;for(let Kt=0;Kt<qt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,Yt,St,Ht,0,Xt,ue,null),St>>=1,Ht>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),ut.parentNode!==St){St.appendChild(ut),v.add(w),St.onpaint=Ht=>{let Kt=Ht.changedElements;for(let Tt of v)Kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Kt=i.RGBA,Tt=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Tt,se,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(pe&&Ae){let St=De(oe[0]);e.texStorage2D(i.TEXTURE_2D,qt,Yt,St.width,St.height)}for(let St=0,Ht=oe.length;St<Ht;St++)Vt=oe[St],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Xt,ue,Vt):e.texImage2D(i.TEXTURE_2D,St,Yt,Xt,ue,Vt);w.generateMipmaps=!1}else if(pe){if(Ae){let St=De(ut);e.texStorage2D(i.TEXTURE_2D,qt,Yt,St.width,St.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,ue,ut)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Xt,ue,ut);g(w)&&k(ot),kt.__version=Lt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function he(U,w,it){if(w.image.length!==6)return;let ot=Ve(U,w),xt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+it);let Lt=n.get(xt);if(xt.version!==Lt.__version||ot===!0){e.activeTexture(i.TEXTURE0+it);let kt=Xe.getPrimaries(Xe.workingColorSpace),mt=w.colorSpace===Ps?null:Xe.getPrimaries(w.colorSpace),ut=w.colorSpace===Ps||kt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Xt=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let Tt=0;Tt<6;Tt++)!Xt&&!ue?Yt[Tt]=x(w.image[Tt],!0,s.maxCubemapSize):Yt[Tt]=ue?w.image[Tt].image:w.image[Tt],Yt[Tt]=Fe(w,Yt[Tt]);let Vt=Yt[0],oe=r.convert(w.format,w.colorSpace),pe=r.convert(w.type),Ae=R(w.internalFormat,oe,pe,w.normalized,w.colorSpace),Q=w.isVideoTexture!==!0,qt=Lt.__version===void 0||ot===!0,St=xt.dataReady,Ht=O(w,Vt);Le(i.TEXTURE_CUBE_MAP,w);let Kt;if(Xt){Q&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Ae,Vt.width,Vt.height);for(let Tt=0;Tt<6;Tt++){Kt=Yt[Tt].mipmaps;for(let se=0;se<Kt.length;se++){let ne=Kt[se];w.format!==Ri?oe!==null?Q?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,0,0,ne.width,ne.height,oe,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,Ae,ne.width,ne.height,0,ne.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,0,0,ne.width,ne.height,oe,pe,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,Ae,ne.width,ne.height,0,oe,pe,ne.data)}}}else{if(Kt=w.mipmaps,Q&&qt){Kt.length>0&&Ht++;let Tt=De(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Ae,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(ue){Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Yt[Tt].width,Yt[Tt].height,oe,pe,Yt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ae,Yt[Tt].width,Yt[Tt].height,0,oe,pe,Yt[Tt].data);for(let se=0;se<Kt.length;se++){let tn=Kt[se].image[Tt].image;Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,0,0,tn.width,tn.height,oe,pe,tn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,Ae,tn.width,tn.height,0,oe,pe,tn.data)}}else{Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,oe,pe,Yt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ae,oe,pe,Yt[Tt]);for(let se=0;se<Kt.length;se++){let ne=Kt[se];Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,0,0,oe,pe,ne.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,Ae,oe,pe,ne.image[Tt])}}}g(w)&&k(i.TEXTURE_CUBE_MAP),Lt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function jt(U,w,it,ot,xt,Lt){let kt=r.convert(it.format,it.colorSpace),mt=r.convert(it.type),ut=R(it.internalFormat,kt,mt,it.normalized,it.colorSpace),Xt=n.get(w),ue=n.get(it);if(ue.__renderTarget=w,!Xt.__hasExternalTextures){let Yt=Math.max(1,w.width>>Lt),Vt=Math.max(1,w.height>>Lt);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,Lt,ut,Yt,Vt,w.depth,0,kt,mt,null):e.texImage2D(xt,Lt,ut,Yt,Vt,0,kt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Te(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,xt,ue.__webglTexture,0,de(w)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,xt,ue.__webglTexture,Lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(U,w,it){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let ot=w.depthTexture,xt=ot&&ot.isDepthTexture?ot.type:null,Lt=T(w.stencilBuffer,xt),kt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(w),Lt,w.width,w.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(w),Lt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,U)}else{let ot=w.textures;for(let xt=0;xt<ot.length;xt++){let Lt=ot[xt],kt=r.convert(Lt.format,Lt.colorSpace),mt=r.convert(Lt.type),ut=R(Lt.internalFormat,kt,mt,Lt.normalized,Lt.colorSpace);Te(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(w),ut,w.width,w.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(w),ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ut,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(U,w,it){let ot=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xt=n.get(w.depthTexture);if(xt.__renderTarget=w,(!xt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ot){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,w.depthTexture.addEventListener("dispose",W)),xt.__webglTexture===void 0){xt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),Le(i.TEXTURE_CUBE_MAP,w.depthTexture);let Xt=r.convert(w.depthTexture.format),ue=r.convert(w.depthTexture.type),Yt;w.depthTexture.format===is?Yt=i.DEPTH_COMPONENT24:w.depthTexture.format===er&&(Yt=i.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Yt,w.width,w.height,0,Xt,ue,null)}}else At(w.depthTexture,0);let Lt=xt.__webglTexture,kt=de(w),mt=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+it:i.TEXTURE_2D,ut=w.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===is)Te(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,mt,Lt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,mt,Lt,0);else if(w.depthTexture.format===er)Te(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,mt,Lt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,mt,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let w=n.get(U),it=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let ot=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ot){let xt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ot.removeEventListener("dispose",xt)};ot.addEventListener("dispose",xt),w.__depthDisposeCallback=xt}w.__boundDepthTexture=ot}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(it)for(let ot=0;ot<6;ot++)ee(w.__webglFramebuffer[ot],U,ot);else{let ot=U.texture.mipmaps;ot&&ot.length>0?ee(w.__webglFramebuffer[0],U,0):ee(w.__webglFramebuffer,U,0)}else if(it){w.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ot]),w.__webglDepthbuffer[ot]===void 0)w.__webglDepthbuffer[ot]=i.createRenderbuffer(),ge(w.__webglDepthbuffer[ot],U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=w.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,Lt)}}else{let ot=U.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ge(w.__webglDepthbuffer,U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,Lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(U,w,it){let ot=n.get(U);w!==void 0&&jt(ot.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&nt(U)}function V(U){let w=U.texture,it=n.get(U),ot=n.get(w);U.addEventListener("dispose",A);let xt=U.textures,Lt=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=w.version,a.memory.textures++),Lt){it.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0){it.__webglFramebuffer[mt]=[];for(let ut=0;ut<w.mipmaps.length;ut++)it.__webglFramebuffer[mt][ut]=i.createFramebuffer()}else it.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){it.__webglFramebuffer=[];for(let mt=0;mt<w.mipmaps.length;mt++)it.__webglFramebuffer[mt]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(kt)for(let mt=0,ut=xt.length;mt<ut;mt++){let Xt=n.get(xt[mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Te(U)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let mt=0;mt<xt.length;mt++){let ut=xt[mt];it.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[mt]);let Xt=r.convert(ut.format,ut.colorSpace),ue=r.convert(ut.type),Yt=R(ut.internalFormat,Xt,ue,ut.normalized,ut.colorSpace,U.isXRRenderTarget===!0),Vt=de(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Yt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,it.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(it.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Le(i.TEXTURE_CUBE_MAP,w);for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)jt(it.__webglFramebuffer[mt][ut],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ut);else jt(it.__webglFramebuffer[mt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(w)&&k(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let mt=0,ut=xt.length;mt<ut;mt++){let Xt=xt[mt],ue=n.get(Xt),Yt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Yt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Yt,ue.__webglTexture),Le(Yt,Xt),jt(it.__webglFramebuffer,U,Xt,i.COLOR_ATTACHMENT0+mt,Yt,0),g(Xt)&&k(Yt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,ot.__webglTexture),Le(mt,w),w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)jt(it.__webglFramebuffer[ut],U,w,i.COLOR_ATTACHMENT0,mt,ut);else jt(it.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,mt,0);g(w)&&k(mt),e.unbindTexture()}U.depthBuffer&&nt(U)}function Pt(U){let w=U.textures;for(let it=0,ot=w.length;it<ot;it++){let xt=w[it];if(g(xt)){let Lt=z(U),kt=n.get(xt).__webglTexture;e.bindTexture(Lt,kt),k(Lt),e.unbindTexture()}}}let Bt=[],ce=[];function fe(U){if(U.samples>0){if(Te(U)===!1){let w=U.textures,it=U.width,ot=U.height,xt=i.COLOR_BUFFER_BIT,Lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(U),mt=w.length>1;if(mt)for(let Xt=0;Xt<w.length;Xt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let ut=U.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Xt=0;Xt<w.length;Xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Xt]);let ue=n.get(w[Xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,it,ot,0,0,it,ot,xt,i.NEAREST),h===!0&&(Bt.length=0,ce.length=0,Bt.push(i.COLOR_ATTACHMENT0+Xt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Bt.push(Lt),ce.push(Lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Xt=0;Xt<w.length;Xt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Xt]);let ue=n.get(w[Xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function de(U){return Math.min(s.maxSamples,U.samples)}function Te(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function q(U){let w=a.render.frame;d.get(U)!==w&&(d.set(U,w),U.update())}function Fe(U,w){let it=U.colorSpace,ot=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==To&&it!==Ps&&(Xe.getTransfer(it)===rn?(ot!==Ri||xt!==gi)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",it)),w}function De(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=pt,this.resetTextureUnits=ct,this.getTextureUnits=j,this.setTextureUnits=et,this.setTexture2D=At,this.setTexture2DArray=_t,this.setTexture3D=wt,this.setTextureCube=bt,this.rebindTextures=Rt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $b(i,t){function e(n,s=Ps){let r,a=Xe.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nf)return i.BYTE;if(n===sf)return i.SHORT;if(n===Ra)return i.UNSIGNED_SHORT;if(n===_h)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===lf)return i.RGB;if(n===Ri)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===Sh)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===cl||n===hl||n===ul||n===dl)if(a===rn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===Eh||n===Th||n===Ah)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ih||n===Ph||n===Lh||n===fl||n===Dh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ch||n===Rh)return a===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ih)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ph)return r.COMPRESSED_R11_EAC;if(n===Lh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fl)return r.COMPRESSED_RG11_EAC;if(n===Dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===$h||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$h)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yh||n===Jh||n===Zh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yh)return a===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===Kh||n===pl||n===Qh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ko(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:Vb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lf=class extends ss{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",h=1,u=null,d=null,v=null,_=null,S=null,b=null,P=typeof XRWebGLBinding<"u",x=new Pf,g={},k=e.getContextAttributes(),z=null,R=null,T=[],O=[],W=new zt,A=null,F=null,G=new Kn;G.viewport=new an;let X=new Kn;X.viewport=new an;let st=[G,X],ct=new dh,j=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ya,T[vt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ya,T[vt]=yt),yt.getGripSpace()},this.getHand=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ya,T[vt]=yt),yt.getHandSpace()};function pt(vt){let yt=O.indexOf(vt.inputSource);if(yt===-1)return;let Ut=T[yt];Ut!==void 0&&(Ut.update(vt.inputSource,vt.frame,u||a),Ut.dispatchEvent({type:vt.type,data:vt.inputSource}))}function gt(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",gt),s.removeEventListener("inputsourceschange",At);for(let vt=0;vt<T.length;vt++){let yt=O[vt];yt!==null&&(O[vt]=null,T[vt].disconnect(yt))}j=null,et=null,x.reset();for(let vt in g)delete g[vt];if(t.setRenderTarget(z),S=null,_=null,v=null,s=null,R=null,Ve.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(W.width,W.height,!1),F!==null){let vt=F.camera;vt.fov=F.fov,vt.zoom=F.zoom,vt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(vt){r=vt,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(vt){l=vt,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(vt){u=vt},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&P&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(vt){if(s=vt,s!==null){if(z=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",gt),s.addEventListener("inputsourceschange",At),k.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(W),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,he=null,jt=null;k.depth&&(jt=k.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=k.stencil?er:is,he=k.stencil?Ia:Xi);let ge={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};v=this.getBinding(),_=v.createProjectionLayer(ge),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),R=new pi(_.textureWidth,_.textureHeight,{format:Ri,type:gi,depthTexture:new qs(_.textureWidth,_.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:k.stencil,colorSpace:t.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let Ut={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:r};S=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new pi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await s.requestReferenceSpace(l),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function At(vt){for(let yt=0;yt<vt.removed.length;yt++){let Ut=vt.removed[yt],he=O.indexOf(Ut);he>=0&&(O[he]=null,T[he].disconnect(Ut))}for(let yt=0;yt<vt.added.length;yt++){let Ut=vt.added[yt],he=O.indexOf(Ut);if(he===-1){for(let ge=0;ge<T.length;ge++)if(ge>=O.length){O.push(Ut),he=ge;break}else if(O[ge]===null){O[ge]=Ut,he=ge;break}if(he===-1)break}let jt=T[he];jt&&jt.connect(Ut)}}let _t=new Y,wt=new Y;function bt(vt,yt,Ut){_t.setFromMatrixPosition(yt.matrixWorld),wt.setFromMatrixPosition(Ut.matrixWorld);let he=_t.distanceTo(wt),jt=yt.projectionMatrix.elements,ge=Ut.projectionMatrix.elements,ee=jt[14]/(jt[10]-1),nt=jt[14]/(jt[10]+1),Rt=(jt[9]+1)/jt[5],V=(jt[9]-1)/jt[5],Pt=(jt[8]-1)/jt[0],Bt=(ge[8]+1)/ge[0],ce=ee*Pt,fe=ee*Bt,de=he/(-Pt+Bt),Te=de*-Pt;if(yt.matrixWorld.decompose(vt.position,vt.quaternion,vt.scale),vt.translateX(Te),vt.translateZ(de),vt.matrixWorld.compose(vt.position,vt.quaternion,vt.scale),vt.matrixWorldInverse.copy(vt.matrixWorld).invert(),jt[10]===-1)vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let q=ee+de,Fe=nt+de,De=ce-Te,U=fe+(he-Te),w=Rt*nt/Fe*q,it=V*nt/Fe*q;vt.projectionMatrix.makePerspective(De,U,w,it,q,Fe),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert()}}function Wt(vt,yt){yt===null?vt.matrixWorld.copy(vt.matrix):vt.matrixWorld.multiplyMatrices(yt.matrixWorld,vt.matrix),vt.matrixWorldInverse.copy(vt.matrixWorld).invert()}this.updateCamera=function(vt){if(s===null)return;let yt=vt.near,Ut=vt.far;x.texture!==null&&(x.depthNear>0&&(yt=x.depthNear),x.depthFar>0&&(Ut=x.depthFar)),ct.near=X.near=G.near=yt,ct.far=X.far=G.far=Ut,(j!==ct.near||et!==ct.far)&&(s.updateRenderState({depthNear:ct.near,depthFar:ct.far}),j=ct.near,et=ct.far),ct.layers.mask=vt.layers.mask|6,G.layers.mask=ct.layers.mask&-5,X.layers.mask=ct.layers.mask&-3;let he=vt.parent,jt=ct.cameras;Wt(ct,he);for(let ge=0;ge<jt.length;ge++)Wt(jt[ge],he);jt.length===2?bt(ct,G,X):ct.projectionMatrix.copy(G.projectionMatrix),F===null&&vt.isPerspectiveCamera&&(F={camera:vt,fov:vt.fov,zoom:vt.zoom}),te(vt,ct,he)};function te(vt,yt,Ut){Ut===null?vt.matrix.copy(yt.matrixWorld):(vt.matrix.copy(Ut.matrixWorld),vt.matrix.invert(),vt.matrix.multiply(yt.matrixWorld)),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.updateMatrixWorld(!0),vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),vt.isPerspectiveCamera&&(vt.fov=_a*2*Math.atan(1/vt.projectionMatrix.elements[5]),vt.zoom=1)}this.getCamera=function(){return ct},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(vt){h=vt,_!==null&&(_.fixedFoveation=vt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=vt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ct)},this.getCameraTexture=function(vt){return g[vt]};let Ye=null;function Le(vt,yt){if(d=yt.getViewerPose(u||a),b=yt,d!==null){let Ut=d.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let he=!1;Ut.length!==ct.cameras.length&&(ct.cameras.length=0,he=!0);for(let nt=0;nt<Ut.length;nt++){let Rt=Ut[nt],V=null;if(S!==null)V=S.getViewport(Rt);else{let Bt=v.getViewSubImage(_,Rt);V=Bt.viewport,nt===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Pt=st[nt];Pt===void 0&&(Pt=new Kn,Pt.layers.enable(nt),Pt.viewport=new an,st[nt]=Pt),Pt.matrix.fromArray(Rt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Rt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(V.x,V.y,V.width,V.height),nt===0&&(ct.matrix.copy(Pt.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale)),he===!0&&ct.cameras.push(Pt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){v=n.getBinding();let nt=v.getDepthInformation(Ut[0]);nt&&nt.isValid&&nt.texture&&x.init(nt,s.renderState)}if(jt&&jt.includes("camera-access")&&P){t.state.unbindTexture(),v=n.getBinding();for(let nt=0;nt<Ut.length;nt++){let Rt=Ut[nt].camera;if(Rt){let V=g[Rt];V||(V=new ko,g[Rt]=V);let Pt=v.getCameraImage(Rt);V.sourceTexture=Pt}}}}for(let Ut=0;Ut<T.length;Ut++){let he=O[Ut],jt=T[Ut];he!==null&&jt!==void 0&&jt.update(he,yt,u||a)}Ye&&Ye(vt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),b=null}let Ve=new j0;Ve.setAnimationLoop(Le),this.setAnimationLoop=function(vt){Ye=vt},this.dispose=function(){}}},Gb=new qe,ig=new Re;ig.set(-1,0,0,0,1,0,0,0,1);function Wb(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,pf(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,k,z,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),v(x,g)):g.isMeshPhongMaterial?(r(x,g),d(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),_(x,g),g.isMeshPhysicalMaterial&&S(x,g,R)):g.isMeshMatcapMaterial?(r(x,g),b(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),P(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&l(x,g)):g.isPointsMaterial?h(x,g,k,z):g.isSpriteMaterial?u(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===si&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===si&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let k=t.get(g),z=k.envMap,R=k.envMapRotation;z&&(x.envMap.value=z,x.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(ig),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function l(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function h(x,g,k,z){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*k,x.scale.value=z*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function _(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function S(x,g,k){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===si&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=k.texture,x.transmissionSamplerSize.value.set(k.width,k.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,g){g.matcap&&(x.matcap.value=g.matcap)}function P(x,g){let k=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(k.matrixWorld),x.nearDistance.value=k.shadow.camera.near,x.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,T){let O=T.program;n.uniformBlockBinding(R,O)}function u(R,T){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",k));let W=T.program;n.updateUBOMapping(R,W);let A=t.render.frame;r[R.id]!==A&&(_(R),r[R.id]=A)}function d(R){let T=v();R.__bindingPointIndex=T;let O=i.createBuffer(),W=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,W,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){let T=s[R.id],O=R.uniforms,W=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,F=O.length;A<F;A++){let G=O[A];if(Array.isArray(G))for(let X=0,st=G.length;X<st;X++)S(G[X],A,X,W);else S(G,A,0,W)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(R,T,O,W){if(P(R,T,O,W)===!0){let A=R.__offset,F=R.value;if(Array.isArray(F)){let G=0;for(let X=0;X<F.length;X++){let st=F[X],ct=g(st);b(st,R.__data,G),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(G+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function b(R,T,O){typeof R=="number"||typeof R=="boolean"?T[0]=R:R.isMatrix3?(T[0]=R.elements[0],T[1]=R.elements[1],T[2]=R.elements[2],T[3]=0,T[4]=R.elements[3],T[5]=R.elements[4],T[6]=R.elements[5],T[7]=0,T[8]=R.elements[6],T[9]=R.elements[7],T[10]=R.elements[8],T[11]=0):ArrayBuffer.isView(R)?T.set(new R.constructor(R.buffer,R.byteOffset,T.length)):R.toArray(T,O)}function P(R,T,O,W){let A=R.value,F=T+"_"+O;if(W[F]===void 0)return typeof A=="number"||typeof A=="boolean"?W[F]=A:ArrayBuffer.isView(A)?W[F]=A.slice():W[F]=A.clone(),!0;{let G=W[F];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return W[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(G.equals(A)===!1)return G.copy(A),!0}}return!1}function x(R){let T=R.uniforms,O=0,W=16;for(let F=0,G=T.length;F<G;F++){let X=Array.isArray(T[F])?T[F]:[T[F]];for(let st=0,ct=X.length;st<ct;st++){let j=X[st],et=Array.isArray(j.value)?j.value:[j.value];for(let pt=0,gt=et.length;pt<gt;pt++){let At=et[pt],_t=g(At),wt=O%W,bt=wt%_t.boundary,Wt=wt+bt;O+=bt,Wt!==0&&W-Wt<_t.storage&&(O+=W-Wt),j.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=O,O+=_t.storage}}}let A=O%W;return A>0&&(O+=W-A),R.__size=O,R.__cache={},this}function g(R){let T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(T.boundary=16,T.storage=R.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",R),T}function k(R){let T=R.target;T.removeEventListener("dispose",k);let O=a.indexOf(T.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function z(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:h,update:u,dispose:z}}var qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function Yb(){return cs===null&&(cs=new No(qb,16,16,nr,qi),cs.name="DFG_LUT",cs.minFilter=Gn,cs.magFilter=Gn,cs.wrapS=es,cs.wrapT=es,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var ou=class{constructor(t={}){let{canvas:e=v0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:S=gi}=t;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let P=S,x=new Set([bh,Mh,Sh]),g=new Set([gi,Xi,Ra,Ia,xh,vh]),k=new Uint32Array(4),z=new Int32Array(4),R=new Y,T=null,O=null,W=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,X=!1,st=null,ct=null,j=null,et=null;this._outputColorSpace=yi;let pt=0,gt=0,At=null,_t=-1,wt=null,bt=new an,Wt=new an,te=null,Ye=new xe(0),Le=0,Ve=e.width,vt=e.height,yt=1,Ut=null,he=null,jt=new an(0,0,Ve,vt),ge=new an(0,0,Ve,vt),ee=!1,nt=new Sa,Rt=!1,V=!1,Pt=new qe,Bt=new Y,ce=new an,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Te(){return At===null?yt:1}let q=n;function Fe(C,K){return e.getContext(C,K)}let De,U,w,it,ot,xt,Lt,kt,mt,ut,Xt,ue,Yt,Vt,oe,pe,Ae,Q,qt,St,Ht,Kt,Tt;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",tn,!1),e.addEventListener("webglcontextrestored",Je,!1),e.addEventListener("webglcontextcreationerror",$n,!1),q===null){let K="webgl2";if(q=Fe(K,C),q===null)throw Fe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(C){throw e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",Je,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),be("WebGLRenderer: "+C.message),C}function se(){De=new eM(q),De.init(),Ht=new $b(q,De),U=new WS(q,De,t,Ht),w=new kb(q,De),U.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),ct=q.createFramebuffer(),j=q.createFramebuffer(),et=q.createFramebuffer(),it=new sM(q),ot=new Eb,xt=new zb(q,De,w,ot,U,Ht,it),Lt=new tM(G),kt=new av(q),Kt=new HS(q,kt),mt=new nM(q,kt,it,Kt),ut=new aM(q,mt,kt,Kt,it),Q=new rM(q,U,xt),oe=new XS(ot),Xt=new wb(G,Lt,De,U,Kt,oe),ue=new Wb(G,ot),Yt=new Ab,Vt=new Db(De),Ae=new VS(G,Lt,w,ut,b,h),pe=new Bb(G,ut,U),Tt=new Xb(q,it,U,w),qt=new GS(q,De,it),St=new iM(q,De,it),it.programs=Xt.programs,G.capabilities=U,G.extensions=De,G.properties=ot,G.renderLists=Yt,G.shadowMap=pe,G.state=w,G.info=it}P!==gi&&(F=new lM(P,e.width,e.height,l,s,r));let ne=new Lf(G,q);this.xr=ne,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(C){C!==void 0&&(yt=C,this.setSize(Ve,vt,!1))},this.getSize=function(C){return C.set(Ve,vt)},this.setSize=function(C,K,dt=!0){if(ne.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=C,vt=K,e.width=Math.floor(C*yt),e.height=Math.floor(K*yt),dt===!0&&(e.style.width=C+"px",e.style.height=K+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(Ve*yt,vt*yt).floor()},this.setDrawingBufferSize=function(C,K,dt){Ve=C,vt=K,yt=dt,e.width=Math.floor(C*dt),e.height=Math.floor(K*dt),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(P===gi){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(bt)},this.getViewport=function(C){return C.copy(jt)},this.setViewport=function(C,K,dt,at){C.isVector4?jt.set(C.x,C.y,C.z,C.w):jt.set(C,K,dt,at),w.viewport(bt.copy(jt).multiplyScalar(yt).round())},this.getScissor=function(C){return C.copy(ge)},this.setScissor=function(C,K,dt,at){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,K,dt,at),w.scissor(Wt.copy(ge).multiplyScalar(yt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){w.setScissorTest(ee=C)},this.setOpaqueSort=function(C){Ut=C},this.setTransparentSort=function(C){he=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,dt=!0){let at=0;if(C){let lt=!1;if(At!==null){let Ot=At.texture.format;lt=x.has(Ot)}if(lt){let Ot=At.texture.type,Ft=g.has(Ot),Ct=Ae.getClearColor(),Jt=Ae.getClearAlpha(),ie=Ct.r,ae=Ct.g,Se=Ct.b;Ft?(k[0]=ie,k[1]=ae,k[2]=Se,k[3]=Jt,q.clearBufferuiv(q.COLOR,0,k)):(z[0]=ie,z[1]=ae,z[2]=Se,z[3]=Jt,q.clearBufferiv(q.COLOR,0,z))}else at|=q.COLOR_BUFFER_BIT}K&&(at|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(at|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&q.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),st=C},this.dispose=function(){e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",Je,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),Ae.dispose(),Yt.dispose(),Vt.dispose(),ot.dispose(),Lt.dispose(),ut.dispose(),Kt.dispose(),Tt.dispose(),Xt.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ar),ne.removeEventListener("sessionend",or),Pi.stop()};function tn(C){C.preventDefault(),Ro("WebGLRenderer: Context Lost."),X=!0}function Je(){Ro("WebGLRenderer: Context Restored."),X=!1;let C=it.autoReset,K=pe.enabled,dt=pe.autoUpdate,at=pe.needsUpdate,lt=pe.type;se(),it.autoReset=C,pe.enabled=K,pe.autoUpdate=dt,pe.needsUpdate=at,pe.type=lt}function $n(C){be("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){let K=C.target;K.removeEventListener("dispose",oi),El(K)}function El(C){$a(C),ot.remove(C)}function $a(C){let K=ot.get(C).programs;K!==void 0&&(K.forEach(function(dt){Xt.releaseProgram(dt)}),C.isShaderMaterial&&Xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,dt,at,lt,Ot){K===null&&(K=fe);let Ft=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Ct=Ga(C,K,dt,at,lt);w.setMaterial(at,Ft);let Jt=dt.index,ie=1;if(at.wireframe===!0){if(Jt=mt.getWireframeAttribute(dt),Jt===void 0)return;ie=2}let ae=dt.drawRange,Se=dt.attributes.position,Nt=ae.start*ie,Mt=(ae.start+ae.count)*ie;Ot!==null&&(Nt=Math.max(Nt,Ot.start*ie),Mt=Math.min(Mt,(Ot.start+Ot.count)*ie)),Jt!==null?(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Jt.count)):Se!=null&&(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Se.count));let me=Mt-Nt;if(me<0||me===1/0)return;Kt.setup(lt,at,Ct,dt,Jt);let _e,nn=qt;if(Jt!==null&&(_e=kt.get(Jt),nn=St,nn.setIndex(_e)),lt.isMesh)at.wireframe===!0?(w.setLineWidth(at.wireframeLinewidth*Te()),nn.setMode(q.LINES)):nn.setMode(q.TRIANGLES);else if(lt.isLine){let Cn=at.linewidth;Cn===void 0&&(Cn=1),w.setLineWidth(Cn*Te()),lt.isLineSegments?nn.setMode(q.LINES):lt.isLineLoop?nn.setMode(q.LINE_LOOP):nn.setMode(q.LINE_STRIP)}else lt.isPoints?nn.setMode(q.POINTS):lt.isSprite&&nn.setMode(q.TRIANGLES);if(lt.isBatchedMesh)if(De.get("WEBGL_multi_draw"))nn.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let Cn=lt._multiDrawStarts,Qt=lt._multiDrawCounts,Ln=lt._multiDrawCount,Oe=Jt?kt.get(Jt).bytesPerElement:1,Hn=ot.get(at).currentProgram.getUniforms();for(let En=0;En<Ln;En++)Hn.setValue(q,"_gl_DrawID",En),nn.render(Cn[En]/Oe,Qt[En])}else if(lt.isInstancedMesh)nn.renderInstances(Nt,me,lt.count);else if(dt.isInstancedBufferGeometry){let Cn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Qt=Math.min(dt.instanceCount,Cn);nn.renderInstances(Nt,me,Qt)}else nn.render(Nt,me)};function Vn(C,K,dt,at){st!==null&&C.isNodeMaterial&&st.setObject(at,C),Rt===!0&&oe.setState(C,dt,!1),C.transparent===!0&&C.side===os&&C.forceSinglePass===!1?(C.side=si,C.needsUpdate=!0,xs(C,K,at),C.side=Ks,C.needsUpdate=!0,xs(C,K,at),C.side=os):xs(C,K,at)}this.compile=function(C,K,dt=null){dt===null&&(dt=C),st!==null&&st.renderStart(C,K,dt),O=Vt.get(dt),O.init(K),A.push(O),dt.traverseVisible(function(lt){lt.isLight&&lt.layers.test(K.layers)&&(O.pushLight(lt),lt.castShadow&&O.pushShadow(lt))}),C!==dt&&C.traverseVisible(function(lt){lt.isLight&&lt.layers.test(K.layers)&&(O.pushLight(lt),lt.castShadow&&O.pushShadow(lt))}),O.setupLights(),st!==null&&st.updateLights(O.state.lightsArray),V=this.localClippingEnabled,Rt=oe.init(this.clippingPlanes,V),Rt===!0&&oe.setGlobalState(this.clippingPlanes,K),st!==null&&pe.render(O.state.shadowsArray,dt,K);let at=new Set;return C.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Ot=lt.material;if(Ot)if(Array.isArray(Ot))for(let Ft=0;Ft<Ot.length;Ft++){let Ct=Ot[Ft];Vn(Ct,dt,K,lt),at.add(Ct)}else Vn(Ot,dt,K,lt),at.add(Ot)}),O=A.pop(),st!==null&&st.renderEnd(),at},this.compileAsync=function(C,K,dt=null){let at=this.compile(C,K,dt);return new Promise(lt=>{function Ot(){if(at.forEach(function(Ft){let Jt=ot.get(Ft).currentProgram;(Jt===void 0||Jt.isReady())&&at.delete(Ft)}),at.size===0){lt(C);return}setTimeout(Ot,10)}De.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let li=null;function Ii(C){li&&li(C)}function ar(){Pi.stop()}function or(){Pi.start()}let Pi=new j0;Pi.setAnimationLoop(Ii),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){li=C,ne.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},ne.addEventListener("sessionstart",ar),ne.addEventListener("sessionend",or),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;st!==null&&st.renderStart(C,K);let dt=ne.enabled===!0&&ne.isPresenting===!0,at=F!==null&&(At===null||dt)&&F.begin(G,At);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(K),K=ne.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,K,At),O=Vt.get(C,A.length),O.init(K),O.state.textureUnits=xt.getTextureUnits(),A.push(O),Pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),nt.setFromProjectionMatrix(Pt,Vi,K.reversedDepth),V=this.localClippingEnabled,Rt=oe.init(this.clippingPlanes,V),T=Yt.get(C,W.length),T.init(),W.push(T),ne.enabled===!0&&ne.isPresenting===!0){let Ft=G.xr.getDepthSensingMesh();Ft!==null&&$r(Ft,K,-1/0,G.sortObjects)}$r(C,K,0,G.sortObjects),T.finish(),st!==null&&st.updateLights(O.state.lightsArray),G.sortObjects===!0&&T.sort(Ut,he),de=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,de&&Ae.addToRenderList(T,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&oe.beginShadows();let lt=O.state.shadowsArray;if(pe.render(lt,C,K),Rt===!0&&oe.endShadows(),(at&&F.hasRenderPass())===!1){let Ft=T.opaque,Ct=T.transmissive;if(O.setupLights(),K.isArrayCamera){let Jt=K.cameras;if(Ct.length>0)for(let ie=0,ae=Jt.length;ie<ae;ie++){let Se=Jt[ie];Tl(Ft,Ct,C,Se)}de&&Ae.render(C);for(let ie=0,ae=Jt.length;ie<ae;ie++){let Se=Jt[ie];Us(T,C,Se,Se.viewport)}}else Ct.length>0&&Tl(Ft,Ct,C,K),de&&Ae.render(C),Us(T,C,K)}At!==null&&gt===0&&(xt.updateMultisampleRenderTarget(At),xt.updateRenderTargetMipmap(At)),at&&F.end(G),C.isScene===!0&&C.onAfterRender(G,C,K),Kt.resetDefaultState(),_t=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],xt.setTextureUnits(O.state.textureUnits),Rt===!0&&oe.setGlobalState(G.clippingPlanes,O.state.camera)):O=null,W.pop(),W.length>0?T=W[W.length-1]:T=null,st!==null&&st.renderEnd()};function $r(C,K,dt,at){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)dt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(nt)){at&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pt);let Ft=ut.update(C),Ct=C.material;Ct.visible&&T.push(C,Ft,Ct,dt,ce.z,null,K)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(nt))){let Ft=ut.update(C),Ct=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ce.copy(Ft.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ct)){let Jt=Ft.groups;for(let ie=0,ae=Jt.length;ie<ae;ie++){let Se=Jt[ie],Nt=Ct[Se.materialIndex];Nt&&Nt.visible&&T.push(C,Ft,Nt,dt,ce.z,Se,K)}}else Ct.visible&&T.push(C,Ft,Ct,dt,ce.z,null,K)}}let Ot=C.children;for(let Ft=0,Ct=Ot.length;Ft<Ct;Ft++)$r(Ot[Ft],K,dt,at)}function Us(C,K,dt,at){let{opaque:lt,transmissive:Ot,transparent:Ft}=C;O.setupLightsView(dt),Rt===!0&&oe.setGlobalState(G.clippingPlanes,dt),at&&w.viewport(bt.copy(at)),lt.length>0&&Fs(lt,K,dt),Ot.length>0&&Fs(Ot,K,dt),Ft.length>0&&Fs(Ft,K,dt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Tl(C,K,dt,at){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[at.id]===void 0){let Nt=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[at.id]=new pi(1,1,{generateMipmaps:!0,type:Nt?qi:gi,minFilter:tr,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let Ot=O.state.transmissionRenderTarget[at.id],Ft=at.viewport||bt;Ot.setSize(Ft.z*G.transmissionResolutionScale,Ft.w*G.transmissionResolutionScale);let Ct=G.getRenderTarget(),Jt=G.getActiveCubeFace(),ie=G.getActiveMipmapLevel();G.setRenderTarget(Ot),G.getClearColor(Ye),Le=G.getClearAlpha(),Le<1&&G.setClearColor(16777215,.5),G.clear(),de&&Ae.render(dt);let ae=G.toneMapping;G.toneMapping=Wi;let Se=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),O.setupLightsView(at),Rt===!0&&oe.setGlobalState(G.clippingPlanes,at),Fs(C,dt,at),xt.updateMultisampleRenderTarget(Ot),xt.updateRenderTargetMipmap(Ot),De.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,me=K.length;Mt<me;Mt++){let _e=K[Mt],{object:nn,geometry:Cn,material:Qt,group:Ln}=_e;if(Qt.side===os&&nn.layers.test(at.layers)){let Oe=Qt.side;Qt.side=si,Qt.needsUpdate=!0,Ji(nn,dt,at,Cn,Qt,Ln),Qt.side=Oe,Qt.needsUpdate=!0,Nt=!0}}Nt===!0&&(xt.updateMultisampleRenderTarget(Ot),xt.updateRenderTargetMipmap(Ot))}G.setRenderTarget(Ct,Jt,ie),G.setClearColor(Ye,Le),Se!==void 0&&(at.viewport=Se),G.toneMapping=ae}function Fs(C,K,dt){let at=K.isScene===!0?K.overrideMaterial:null;for(let lt=0,Ot=C.length;lt<Ot;lt++){let Ft=C[lt],{object:Ct,geometry:Jt,group:ie}=Ft,ae=Ft.material;ae.allowOverride===!0&&at!==null&&(ae=at),Ct.layers.test(dt.layers)&&Ji(Ct,K,dt,Jt,ae,ie)}}function Ji(C,K,dt,at,lt,Ot){st!==null&&lt.isNodeMaterial&&st.setObject(C,lt),C.onBeforeRender(G,K,dt,at,lt,Ot),C.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),lt.onBeforeRender(G,K,dt,at,C,Ot),lt.transparent===!0&&lt.side===os&&lt.forceSinglePass===!1?(lt.side=si,lt.needsUpdate=!0,G.renderBufferDirect(dt,K,at,lt,C,Ot),lt.side=Ks,lt.needsUpdate=!0,G.renderBufferDirect(dt,K,at,lt,C,Ot),lt.side=os):G.renderBufferDirect(dt,K,at,lt,C,Ot),C.onAfterRender(G,K,dt,at,lt,Ot)}function xs(C,K,dt){K.isScene!==!0&&(K=fe);let at=ot.get(C),lt=O.state.lights,Ot=O.state.shadowsArray,Ft=lt.state.version,Ct=Xt.getParameters(C,lt.state,Ot,K,dt,O.state.lightProbeGridArray),Jt=Xt.getProgramCacheKey(Ct),ie=at.programs;at.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,at.fog=K.fog;let ae=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;at.envMap=Lt.get(C.envMap||at.environment,ae),at.envMapRotation=at.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,ie===void 0&&(C.addEventListener("dispose",oi),ie=new Map,at.programs=ie);let Se=ie.get(Jt);if(Se!==void 0){if(at.currentProgram===Se&&at.lightsStateVersion===Ft)return Ha(C,Ct),Se}else Ct.uniforms=Xt.getUniforms(C),st!==null&&C.isNodeMaterial&&st.build(C,dt,Ct),C.onBeforeCompile(Ct,G),Se=Xt.acquireProgram(Ct,Jt),ie.set(Jt,Se),at.uniforms=Ct.uniforms;let Nt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Nt.clippingPlanes=oe.uniform),Ha(C,Ct),at.needsLights=Rl(C),at.lightsStateVersion=Ft,at.needsLights&&(Nt.ambientLightColor.value=lt.state.ambient,Nt.lightProbe.value=lt.state.probe,Nt.sunLights.value=lt.state.sun,Nt.sunLightShadows.value=lt.state.sunShadow,Nt.directionalLights.value=lt.state.directional,Nt.directionalLightShadows.value=lt.state.directionalShadow,Nt.spotLights.value=lt.state.spot,Nt.spotLightShadows.value=lt.state.spotShadow,Nt.rectAreaLights.value=lt.state.rectArea,Nt.ltc_1.value=lt.state.rectAreaLTC1,Nt.ltc_2.value=lt.state.rectAreaLTC2,Nt.pointLights.value=lt.state.point,Nt.pointLightShadows.value=lt.state.pointShadow,Nt.hemisphereLights.value=lt.state.hemi,Nt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Nt.sunShadowCascade.value=lt.state.sunShadowCascade,Nt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Nt.spotLightMatrix.value=lt.state.spotLightMatrix,Nt.spotLightMap.value=lt.state.spotLightMap,Nt.pointShadowMatrix.value=lt.state.pointShadowMatrix),at.lightProbeGrid=O.state.lightProbeGridArray.length>0,at.currentProgram=Se,at.uniformsList=null,Se}function Va(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=Da.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Ha(C,K){let dt=ot.get(C);dt.outputColorSpace=K.outputColorSpace,dt.batching=K.batching,dt.batchingColor=K.batchingColor,dt.instancing=K.instancing,dt.instancingColor=K.instancingColor,dt.instancingMorph=K.instancingMorph,dt.skinning=K.skinning,dt.morphTargets=K.morphTargets,dt.morphNormals=K.morphNormals,dt.morphColors=K.morphColors,dt.morphTargetsCount=K.morphTargetsCount,dt.numClippingPlanes=K.numClippingPlanes,dt.numIntersection=K.numClipIntersection,dt.vertexAlphas=K.vertexAlphas,dt.vertexTangents=K.vertexTangents,dt.toneMapping=K.toneMapping}function Al(C,K){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(K.matrixWorld);for(let dt=0,at=C.length;dt<at;dt++){let lt=C[dt];if(lt.texture!==null&&lt.boundingBox.containsPoint(R))return lt}return null}function Ga(C,K,dt,at,lt){K.isScene!==!0&&(K=fe),xt.resetTextureUnits();let Ot=K.fog,Ft=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?K.environment:null,Ct=At===null?G.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Xe.workingColorSpace,Jt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,ie=Lt.get(at.envMap||Ft,Jt),ae=at.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Se=!!dt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Nt=!!dt.morphAttributes.position,Mt=!!dt.morphAttributes.normal,me=!!dt.morphAttributes.color,_e=Wi;at.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(_e=G.toneMapping);let nn=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Cn=nn!==void 0?nn.length:0,Qt=ot.get(at),Ln=O.state.lights;if(Rt===!0&&(V===!0||C!==wt)){let ln=C===wt&&at.id===_t;oe.setState(at,C,ln)}let Oe=!1;at.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ln.state.version||Qt.outputColorSpace!==Ct||lt.isBatchedMesh&&Qt.batching===!1||!lt.isBatchedMesh&&Qt.batching===!0||lt.isBatchedMesh&&Qt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Qt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Qt.instancing===!1||!lt.isInstancedMesh&&Qt.instancing===!0||lt.isSkinnedMesh&&Qt.skinning===!1||!lt.isSkinnedMesh&&Qt.skinning===!0||lt.isInstancedMesh&&Qt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Qt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Qt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Qt.instancingMorph===!1&&lt.morphTexture!==null||Qt.envMap!==ie||at.fog===!0&&Qt.fog!==Ot||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==oe.numPlanes||Qt.numIntersection!==oe.numIntersection)||Qt.vertexAlphas!==ae||Qt.vertexTangents!==Se||Qt.morphTargets!==Nt||Qt.morphNormals!==Mt||Qt.morphColors!==me||Qt.toneMapping!==_e||Qt.morphTargetsCount!==Cn||!!Qt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Qt.__version=at.version);let Hn=Qt.currentProgram;Oe===!0&&(Hn=xs(at,K,lt),st&&at.isNodeMaterial&&st.onUpdateProgram(at,Hn,Qt));let En=!1,Zi=!1,Bs=!1,sn=Hn.getUniforms(),_n=Qt.uniforms;if(w.useProgram(Hn.program)&&(En=!0,Zi=!0,Bs=!0),at.id!==_t&&(_t=at.id,Zi=!0),Qt.needsLights){let ln=Al(O.state.lightProbeGridArray,lt);Qt.lightProbeGrid!==ln&&(Qt.lightProbeGrid=ln,Zi=!0)}if(En||wt!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),sn.setValue(q,"projectionMatrix",C.projectionMatrix),sn.setValue(q,"viewMatrix",C.matrixWorldInverse);let Li=sn.map.cameraPosition;Li!==void 0&&Li.setValue(q,Bt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&sn.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&sn.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),wt!==C&&(wt=C,Zi=!0,Bs=!0)}if(Qt.needsLights&&(Ln.state.sunShadowMap.length>0&&sn.setValue(q,"sunShadowMap",Ln.state.sunShadowMap,xt),Ln.state.directionalShadowMap.length>0&&sn.setValue(q,"directionalShadowMap",Ln.state.directionalShadowMap,xt),Ln.state.spotShadowMap.length>0&&sn.setValue(q,"spotShadowMap",Ln.state.spotShadowMap,xt),Ln.state.pointShadowMap.length>0&&sn.setValue(q,"pointShadowMap",Ln.state.pointShadowMap,xt)),lt.isSkinnedMesh){sn.setOptional(q,lt,"bindMatrix"),sn.setOptional(q,lt,"bindMatrixInverse");let ln=lt.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),sn.setValue(q,"boneTexture",ln.boneTexture,xt))}lt.isBatchedMesh&&(sn.setOptional(q,lt,"batchingTexture"),sn.setValue(q,"batchingTexture",lt._matricesTexture,xt),sn.setOptional(q,lt,"batchingIdTexture"),sn.setValue(q,"batchingIdTexture",lt._indirectTexture,xt),sn.setOptional(q,lt,"batchingColorTexture"),lt._colorsTexture!==null&&sn.setValue(q,"batchingColorTexture",lt._colorsTexture,xt));let ji=dt.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Q.update(lt,dt,Hn),(Zi||Qt.receiveShadow!==lt.receiveShadow)&&(Qt.receiveShadow=lt.receiveShadow,sn.setValue(q,"receiveShadow",lt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&K.environment!==null&&(_n.envMapIntensity.value=K.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=Yb()),Zi){if(sn.setValue(q,"toneMappingExposure",G.toneMappingExposure),Qt.needsLights&&Cl(_n,Bs),Ot&&at.fog===!0&&ue.refreshFogUniforms(_n,Ot),ue.refreshMaterialUniforms(_n,at,yt,vt,O.state.transmissionRenderTarget[C.id]),Qt.needsLights&&Qt.lightProbeGrid){let ln=Qt.lightProbeGrid;_n.probesSH.value=ln.texture,_n.probesMin.value.copy(ln.boundingBox.min),_n.probesMax.value.copy(ln.boundingBox.max),_n.probesResolution.value.copy(ln.resolution)}Da.upload(q,Va(Qt),_n,xt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Da.upload(q,Va(Qt),_n,xt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&sn.setValue(q,"center",lt.center),sn.setValue(q,"modelViewMatrix",lt.modelViewMatrix),sn.setValue(q,"normalMatrix",lt.normalMatrix),sn.setValue(q,"modelMatrix",lt.matrixWorld),at.uniformsGroups!==void 0){let ln=at.uniformsGroups;for(let Li=0,Ne=ln.length;Li<Ne;Li++){let Il=ln[Li];Tt.update(Il,Hn),Tt.bind(Il,Hn)}}return Hn}function Cl(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.sunLights.needsUpdate=K,C.sunLightShadows.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return gt},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(C,K,dt){let at=ot.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),ot.get(C.texture).__webglTexture=K,ot.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:dt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){let dt=ot.get(C);dt.__webglFramebuffer=K,dt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,dt=0){At=C,pt=K,gt=dt;let at=null,lt=!1,Ot=!1;if(C){let Ct=ot.get(C);if(Ct.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(q.FRAMEBUFFER,Ct.__webglFramebuffer),bt.copy(C.viewport),Wt.copy(C.scissor),te=C.scissorTest,w.viewport(bt),w.scissor(Wt),w.setScissorTest(te),_t=-1;return}else if(Ct.__webglFramebuffer===void 0)xt.setupRenderTarget(C);else if(Ct.__hasExternalTextures)xt.rebindTextures(C,ot.get(C.texture).__webglTexture,ot.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ae=C.depthTexture;if(Ct.__boundDepthTexture!==ae){if(ae!==null&&ot.has(ae)&&(C.width!==ae.image.width||C.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(C)}}let Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);let ie=ot.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[K])?at=ie[K][dt]:at=ie[K],lt=!0):C.samples>0&&xt.useMultisampledRTT(C)===!1?at=ot.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?at=ie[dt]:at=ie,bt.copy(C.viewport),Wt.copy(C.scissor),te=C.scissorTest}else bt.copy(jt).multiplyScalar(yt).floor(),Wt.copy(ge).multiplyScalar(yt).floor(),te=ee;if(dt!==0&&(at=ct),w.bindFramebuffer(q.FRAMEBUFFER,at)&&w.drawBuffers(C,at),w.viewport(bt),w.scissor(Wt),w.setScissorTest(te),lt){let Ct=ot.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,dt)}else if(Ot){let Ct=K;for(let Jt=0;Jt<C.textures.length;Jt++){let ie=ot.get(C.textures[Jt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Jt,ie.__webglTexture,dt,Ct)}}else if(C!==null&&dt!==0){let Ct=ot.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ct.__webglTexture,dt)}_t=-1};function Os(C){let K=ot.get(C);return(K.__readFormat!==C.format||K.__readType!==C.type)&&(K.__readFormat=C.format,K.__readType=C.type,K.__formatReadable=U.textureFormatReadable(C.format),K.__typeReadable=U.textureTypeReadable(C.type)),K}this.readRenderTargetPixels=function(C,K,dt,at,lt,Ot,Ft,Ct=0){if(!(C&&C.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Jt=Jt[Ft]),Jt){w.bindFramebuffer(q.FRAMEBUFFER,Jt);try{let ie=C.textures[Ct],ae=ie.format,Se=ie.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ct);let Nt=Os(ie);if(Nt.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-at&&dt>=0&&dt<=C.height-lt&&q.readPixels(K,dt,at,lt,Ht.convert(ae),Ht.convert(Se),Ot)}finally{let ie=At!==null?ot.get(At).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(C,K,dt,at,lt,Ot,Ft,Ct=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Jt=Jt[Ft]),Jt)if(K>=0&&K<=C.width-at&&dt>=0&&dt<=C.height-lt){w.bindFramebuffer(q.FRAMEBUFFER,Jt);let ie=C.textures[Ct],ae=ie.format,Se=ie.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ct);let Nt=Os(ie);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Mt),q.bufferData(q.PIXEL_PACK_BUFFER,Ot.byteLength,q.STREAM_READ),q.readPixels(K,dt,at,lt,Ht.convert(ae),Ht.convert(Se),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let me=At!==null?ot.get(At).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,me);let _e=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await S0(q,_e,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Mt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ot),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Mt),q.deleteSync(_e),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,dt=0){let at=Math.pow(2,-dt),lt=Math.floor(C.image.width*at),Ot=Math.floor(C.image.height*at),Ft=K!==null?K.x:0,Ct=K!==null?K.y:0;xt.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,dt,0,0,Ft,Ct,lt,Ot),w.unbindTexture()},this.copyTextureToTexture=function(C,K,dt=null,at=null,lt=0,Ot=0){let Ft,Ct,Jt,ie,ae,Se,Nt,Mt,me,_e=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(dt!==null)Ft=dt.max.x-dt.min.x,Ct=dt.max.y-dt.min.y,Jt=dt.isBox3?dt.max.z-dt.min.z:1,ie=dt.min.x,ae=dt.min.y,Se=dt.isBox3?dt.min.z:0;else{let _n=Math.pow(2,-lt);Ft=Math.floor(_e.width*_n),Ct=Math.floor(_e.height*_n),C.isDataArrayTexture?Jt=_e.depth:C.isData3DTexture?Jt=Math.floor(_e.depth*_n):Jt=1,ie=0,ae=0,Se=0}at!==null?(Nt=at.x,Mt=at.y,me=at.z):(Nt=0,Mt=0,me=0);let nn=Ht.convert(K.format),Cn=Ht.convert(K.type),Qt;K.isData3DTexture?(xt.setTexture3D(K,0),Qt=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(xt.setTexture2DArray(K,0),Qt=q.TEXTURE_2D_ARRAY):(xt.setTexture2D(K,0),Qt=q.TEXTURE_2D),w.activeTexture(q.TEXTURE0),w.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),w.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),w.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);let Ln=w.getParameter(q.UNPACK_ROW_LENGTH),Oe=w.getParameter(q.UNPACK_IMAGE_HEIGHT),Hn=w.getParameter(q.UNPACK_SKIP_PIXELS),En=w.getParameter(q.UNPACK_SKIP_ROWS),Zi=w.getParameter(q.UNPACK_SKIP_IMAGES);w.pixelStorei(q.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(q.UNPACK_SKIP_PIXELS,ie),w.pixelStorei(q.UNPACK_SKIP_ROWS,ae),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Se);let Bs=C.isDataArrayTexture||C.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){let _n=ot.get(C),ji=ot.get(K),ln=ot.get(_n.__renderTarget),Li=ot.get(ji.__renderTarget);w.bindFramebuffer(q.READ_FRAMEBUFFER,ln.__webglFramebuffer),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ne=0;Ne<Jt;Ne++)Bs&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ot.get(C).__webglTexture,lt,Se+Ne),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ot.get(K).__webglTexture,Ot,me+Ne)),q.blitFramebuffer(ie,ae,Ft,Ct,Nt,Mt,Ft,Ct,q.DEPTH_BUFFER_BIT,q.NEAREST);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(lt!==0||C.isRenderTargetTexture||ot.has(C)){let _n=ot.get(C),ji=ot.get(K);w.bindFramebuffer(q.READ_FRAMEBUFFER,j),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,et);for(let ln=0;ln<Jt;ln++)Bs?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,_n.__webglTexture,lt,Se+ln):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_n.__webglTexture,lt),sn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ji.__webglTexture,Ot,me+ln):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ji.__webglTexture,Ot),lt!==0?q.blitFramebuffer(ie,ae,Ft,Ct,Nt,Mt,Ft,Ct,q.COLOR_BUFFER_BIT,q.NEAREST):sn?q.copyTexSubImage3D(Qt,Ot,Nt,Mt,me+ln,ie,ae,Ft,Ct):q.copyTexSubImage2D(Qt,Ot,Nt,Mt,ie,ae,Ft,Ct);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else sn?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Qt,Ot,Nt,Mt,me,Ft,Ct,Jt,nn,Cn,_e.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Qt,Ot,Nt,Mt,me,Ft,Ct,Jt,nn,_e.data):q.texSubImage3D(Qt,Ot,Nt,Mt,me,Ft,Ct,Jt,nn,Cn,_e):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ot,Nt,Mt,Ft,Ct,nn,Cn,_e.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ot,Nt,Mt,_e.width,_e.height,nn,_e.data):q.texSubImage2D(q.TEXTURE_2D,Ot,Nt,Mt,Ft,Ct,nn,Cn,_e);w.pixelStorei(q.UNPACK_ROW_LENGTH,Ln),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Oe),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Hn),w.pixelStorei(q.UNPACK_SKIP_ROWS,En),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Zi),Ot===0&&K.generateMipmaps&&q.generateMipmap(Qt),w.unbindTexture()},this.initRenderTarget=function(C){ot.get(C).__webglFramebuffer===void 0&&xt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xt.setTextureCube(C,0):C.isData3DTexture?xt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xt.setTexture2DArray(C,0):xt.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){pt=0,gt=0,At=null,w.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xe._getUnpackColorSpace()}};var rg=new ii,hu=new Y,Yi=class extends il{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Sn(t,3)),this.setAttribute("uv",new Sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new js(e,6,1);return this.setAttribute("instanceStart",new Gi(n,3,0)),this.setAttribute("instanceEnd",new Gi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new js(e,6,1);return this.setAttribute("instanceColorStart",new Gi(n,3,0)),this.setAttribute("instanceColorEnd",new Gi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Zo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),rg.setFromBufferAttribute(e),this.boundingBox.union(rg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hu)),hu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new zt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ri.line={uniforms:ml.merge([Gt.common,Gt.fog,Gt.line]),vertexShader:`
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
		`};var hs=class extends kn{constructor(t){super({type:"LineMaterial",uniforms:ml.clone(ri.line.uniforms),vertexShader:ri.line.vertexShader,fragmentShader:ri.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Df=new an,ag=new Y,og=new Y,Wn=new an,Xn=new an,us=new an,Nf=new Y,Uf=new qe,qn=new rl,lg=new Y,uu=new ii,du=new mi,ds=new an,fs,Nr;function cg(i,t,e){return ds.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ds.multiplyScalar(1/ds.w),ds.x=Nr/e.width,ds.y=Nr/e.height,ds.applyMatrix4(i.projectionMatrixInverse),ds.multiplyScalar(1/ds.w),Math.abs(Math.max(ds.x,ds.y))}function Jb(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,h=a;l<h;l++){qn.start.fromBufferAttribute(s,l),qn.end.fromBufferAttribute(r,l),qn.applyMatrix4(e);let u=new Y,d=new Y;fs.distanceSqToSegment(qn.start,qn.end,d,u),d.distanceTo(u)<Nr*.5&&t.push({point:d,pointOnLine:u,distance:fs.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Zb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,h=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,h.count),v=-t.near;fs.at(1,us),us.w=1,us.applyMatrix4(t.matrixWorldInverse),us.applyMatrix4(n),us.multiplyScalar(1/us.w),us.x*=r.x/2,us.y*=r.y/2,us.z=0,Nf.copy(us),Uf.multiplyMatrices(t.matrixWorldInverse,a);for(let _=0,S=d;_<S;_++){if(Wn.fromBufferAttribute(h,_),Xn.fromBufferAttribute(u,_),Wn.w=1,Xn.w=1,Wn.applyMatrix4(Uf),Xn.applyMatrix4(Uf),Wn.z>v&&Xn.z>v)continue;if(Wn.z>v){let z=Wn.z-Xn.z,R=(Wn.z-v)/z;Wn.lerp(Xn,R)}else if(Xn.z>v){let z=Xn.z-Wn.z,R=(Xn.z-v)/z;Xn.lerp(Wn,R)}Wn.applyMatrix4(n),Xn.applyMatrix4(n),Wn.multiplyScalar(1/Wn.w),Xn.multiplyScalar(1/Xn.w),Wn.x*=r.x/2,Wn.y*=r.y/2,Xn.x*=r.x/2,Xn.y*=r.y/2,qn.start.copy(Wn),qn.start.z=0,qn.end.copy(Xn),qn.end.z=0;let P=qn.closestPointToPointParameter(Nf,!0);qn.at(P,lg);let x=df.lerp(Wn.z,Xn.z,P),g=x>=-1&&x<=1,k=Nf.distanceTo(lg)<Nr*.5;if(g&&k){qn.start.fromBufferAttribute(h,_),qn.end.fromBufferAttribute(u,_),qn.start.applyMatrix4(a),qn.end.applyMatrix4(a);let z=new Y,R=new Y;fs.distanceSqToSegment(qn.start,qn.end,R,z),e.push({point:R,pointOnLine:z,distance:fs.origin.distanceTo(R),object:i,face:null,faceIndex:_,uv:null,uv1:null})}}}var Ur=class extends Bn{constructor(t=new Yi,e=new hs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,h=e.count;a<h;a++,l+=2)ag.fromBufferAttribute(e,a),og.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ag.distanceTo(og);let r=new js(s,2,1);return t.setAttribute("instanceDistanceStart",new Gi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Gi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;fs=t.ray;let a=this.matrixWorld,l=this.geometry,h=this.material;Nr=h.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),du.copy(l.boundingSphere).applyMatrix4(a);let u;if(n)u=Nr*.5;else{let v=Math.max(s.near,du.distanceToPoint(fs.origin));u=cg(s,v,h.resolution)}if(du.radius+=u,fs.intersectsSphere(du)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),uu.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Nr*.5;else{let v=Math.max(s.near,uu.distanceToPoint(fs.origin));d=cg(s,v,h.resolution)}uu.expandByScalar(d),fs.intersectsBox(uu)!==!1&&(n?Jb(this,e):Zb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Df),this.material.uniforms.resolution.value.set(Df.z,Df.w))}};var fu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),ps=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function hg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:h,CY:u,mcs:d,q:v,list:_,clamp:S,norm:b,munis:P}=i,x=o=>document.querySelector(o),g=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),k=(o,c)=>[(o-h)*l,(c-u)*l],z=.06,R=t.segs.map(o=>{let c=[],p=[0];for(let m=0;m<o.length;m+=2){let y=k(o[m],o[m+1]);c.length&&p.push(p[p.length-1]+Math.hypot(y[0]-c[c.length-1][0],y[1]-c[c.length-1][1])),c.push(y)}return{p:c,c:p,L:p[p.length-1]}}),T=t.stops.map(([o,c,p,m])=>({n:o,id:m,w:k(c,p),fams:new Set})),O=t.routes.map(([o,c,p])=>({s:o,l:c,c:p})),W=new Map;(t.bus||[]).forEach(([o,c,p,m])=>{let y={days:new Set(o),name:c,stops:p,times:m};p.forEach((M,I)=>{if(I<p.length-1){let N=W.get(M)||[];N.push([y,I]),W.set(M,N)}})});function A(o,c,p){let m=ee(),y=t.days.indexOf(m.ymd),M=[];for(let[I,N]of W.get(o)||[]){if(!I.days.has(y))continue;let D=I.times[N];if(D<c||D>p)continue;let B=I.stops[I.stops.length-1];M.push({sm:D,est:D,dl:0,fam:I.name,dest:T[B].n,destId:T[B].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:I.stops.slice(N)})}return M}let F=(o,c)=>{let p=o.match(/^R([A-Z]*)(\d*)(.*)$/),m=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(p[1]||"").localeCompare(m[1]||"")||(+p[2]||0)-(+m[2]||0)||p[3].localeCompare(m[3])},G=[...new Set(O.map(o=>o.s))].sort(F),X={};O.forEach(o=>{X[o.s]||(X[o.s]=o.c)});let st=t.pats.map(([o,c,p])=>({stops:o,t:c,segs:p})),ct=t.trips.map(([o,c,p,m,y],M)=>({day:o,pat:st[c],fam:O[p].s,c:O[p].c,t0:m,num:y,tid:t.tids[M]})),j={};G.forEach(o=>j[o]=new Set),ct.forEach(o=>{o.pat.segs.forEach(c=>j[o.fam].add(c)),o.pat.stops.forEach(c=>T[c].fams.add(o.fam))});let et=t.days.map((o,c)=>ct.filter(p=>p.day===c)),pt=new Map(ct.map(o=>[o.tid,o])),gt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,_t=3.922*At,wt=-39.705*At;function bt(o,c){let p=o*At+_t,m=c*At,y=Math.cos(wt),M=Math.sin(wt),I=Math.cos(m),N=Math.cos(p)*I,D=Math.sin(p)*I,B=Math.sin(m),H=Math.atan2(D,N*y-B*M),f=Math.asin(B*y+N*M),E=Math.sqrt(2/(1+Math.cos(H)*Math.cos(f))),L=E*Math.cos(f)*Math.sin(H),$=E*Math.sin(f),[rt,ht,J,ft,Z,le,Me]=gt;return k((ht+rt*L-Z)*Me,(le-(ft-J*$))*Me)}let Wt=new Map(T.map((o,c)=>[o.id,c]));function te(o){if(o.g)return o.g;let c=[],p=[],m=[0],y=0;return o.segs.forEach((M,I)=>{let N=R[M];N.p.forEach((D,B)=>{I&&!B||(c.push(D),p.push(y+N.c[B]))}),y+=N.L,m.push(y)}),o.g={pts:c,cum:p,stopD:m}}function Ye(o,c,p,m){let y=1e18,M=0;for(let I=0;I+1<o.pts.length;I++){if(o.cum[I+1]<p||o.cum[I]>m)continue;let N=o.pts[I],D=o.pts[I+1],B=D[0]-N[0],H=D[1]-N[1],f=B*B+H*H||1e-9,E=Math.max(0,Math.min(1,((c[0]-N[0])*B+(c[1]-N[1])*H)/f)),L=N[0]+B*E-c[0],$=N[1]+H*E-c[1],rt=L*L+$*$;rt<y&&(y=rt,M=o.cum[I]+E*(o.cum[I+1]-o.cum[I]))}return{d:M,err:Math.sqrt(y)}}function Le(o,c){let p=0,m=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[m])return o.pts[m];for(;m-p>1;){let N=p+m>>1;o.cum[N]<=c?p=N:m=N}let y=(c-o.cum[p])/(o.cum[m]-o.cum[p]||1),M=o.pts[p],I=o.pts[m];return[M[0]+(I[0]-M[0])*y,M[1]+(I[1]-M[1])*y]}let Ve=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,vt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function yt(o){let c={};return vt.formatToParts(o).forEach(p=>c[p.type]=p.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Ut=0,he=null,jt=0,ge=0;function ee(){let o=yt(new Date);if(Ut===0&&he==null)return{...o,live:!0};let c=he==null?o.min:jt+(Ut?(performance.now()-ge)/6e4*Ut:0);return{ymd:o.ymd,min:c,live:!1}}let nt=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Rt="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Rt,localStorage.setItem("rod_rt",c)),V.url=c||Rt}catch{V.url=Rt}let Pt=(o,c)=>{let p=new AbortController,m=setTimeout(()=>p.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:p.signal}).then(y=>{if(clearTimeout(m),!y.ok)throw new Error("HTTP "+y.status);return y.json()},y=>{throw clearTimeout(m),y})},Bt="https://rodalies.jhmuyo.workers.dev";function ce(){return(V.url===Rt&&V.altUntil>Date.now()?Bt:V.url).replace(/\/+$/,"")}let fe=o=>/^51/.test(o||"");async function de(){if(!V.url){it();return}let o=ce();if(!de.busy){de.busy=1;try{await Te(o)}finally{de.busy=0}}}async function Te(o){let c=!V.adifAt||Date.now()-V.adifAt>11e4,p=f=>({status:"fulfilled",value:f}),m=f=>({status:"rejected",reason:f}),y,M,I,N,D,B=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{B=await Pt(o,"/live.json")}catch(f){if(/HTTP 404/.test(f.message))V.noLive=Date.now();else{if(V.url===Rt&&o!==Bt)return V.altUntil=Date.now()+30*6e4,Te(Bt);o===Bt&&(V.altUntil=0),B={__fail:f}}}if(B&&B.__fail)y=M=I=N=D=m(B.__fail);else if(B&&B.v===1){let f=L=>B[L]&&!B[L].__err?p(B[L]):m(new Error(B[L]&&B[L].__err||"sin dato"));y=f("tu"),M=f("vp"),I=f("al"),N=f("nt"),D=c?f("ad"):m(0);let E=B.rep;E&&Array.isArray(E.items)&&(V.rep=E.items,V.repSkew=(E.now||Date.now())-Date.now(),E.tipos&&(V.tipos=E.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&Pt(o,"/reports.json").then(f=>{f&&Array.isArray(f.items)?(V.rep=f.items,V.repSkew=(f.now||Date.now())-Date.now(),f.tipos&&(V.tipos=f.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[y,M,I,N,D]=await Promise.allSettled([Pt(o,"/trip_updates.json"),Pt(o,"/vehicle_positions.json"),Pt(o,"/alerts.json"),Pt(o,"/notices.json"),c?Pt(o,"/adif.json"):Promise.reject(0)]);if(D.status==="fulfilled"&&D.value&&D.value.ok?(V.adif=D.value,V.adifAt=Date.now()):c&&(V.adifAt=Date.now()-6e4),y.status==="fulfilled"){let f=new Map,E=new Map;for(let L of y.value.entity||[]){let $=L.tripUpdate;if(!$||!$.trip||!fe($.trip.tripId))continue;let rt=$.trip.tripId,ht=($.stopTimeUpdate||[])[0],J=$.delay;J==null&&ht&&(J=(ht.arrival||ht.departure||{}).delay),$.trip.scheduleRelationship==="CANCELED"&&(J="X"),J!=null&&f.set(rt,J),E.set(rt,{next:ht?{sid:ht.stopId,t:+((ht.arrival||ht.departure||{}).time||0)}:null})}V.delays=f,V.tu=E,V.ok=Date.now(),V.feedTs=+((y.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=y.reason&&y.reason.message||__t(0);if(M.status==="fulfilled"){let f=new Map,E=Date.now()/1e3;for(let L of M.value.entity||[]){let $=L.vehicle;if(!$||!$.trip||!fe($.trip.tripId)||!$.position)continue;let rt=$.vehicle&&$.vehicle.label||"",ht=rt.match(/PLATF\.\(([^)]+)\)/),J=V.vp.get($.trip.tripId),ft={tid:$.trip.tripId,w:bt(+$.position.longitude,+$.position.latitude),st:$.currentStatus||"",sid:$.stopId||"",ts:+$.timestamp||E,label:rt,plat:ht?ht[1]:"",fam:(rt.split("-")[0]||"").trim(),num:$.vehicle&&$.vehicle.id||""};ft.disp=J?J.disp:null,f.set(ft.tid,ft)}V.vp=f,V.okVP=Date.now()}let H=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){V.okNotices=Date.now();for(let f of N.value.included){let E=new Set((f.lines||[]).map(J=>J.id).filter(J=>X[J])),L=(J,ft)=>{J=J||{},ft=ft||window.__L;let Z=J[ft];return ft==="en"&&Z&&(Z===J.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Z))&&(Z=""),(Z||J.es||J.ca||"").trim()},$=J=>[L(f.description,J),L(f.title,J)].sort((ft,Z)=>Z.length-ft.length)[0],rt=$(),ht=$("es");rt&&H.push({id:"N"+f.externalId,fams:E,stops:new Set,txt:rt,es:ht,when:(f.date||"")+"T"+(f.time||""),src:"Rodalies",core:f.core||""})}}if(I.status==="fulfilled"){let f=+((I.value.header||{}).timestamp||0);if(V.alertsTs=f,Date.now()/1e3-f<6*3600)for(let E of I.value.entity||[]){let L=E.alert;if(!L)continue;let $=new Set,rt=new Set;for(let Z of L.informedEntity||[])(Z.routeId||"").startsWith("51")&&$.add(Z.routeId.replace(/^51T\d+/,"")),Z.stopId&&Wt.has(Z.stopId)&&rt.add(Wt.get(Z.stopId));if(!$.size&&!rt.size)continue;let ht=(L.descriptionText||L.headerText||{translation:[]}).translation||[],J=((ht.find(Z=>Z.language==="es")||ht[0]||{}).text||"").trim(),ft=+((L.activePeriod||[])[0]||{}).start||0;H.some(Z=>Z.txt===J)||H.push({id:E.id,fams:$,stops:rt,txt:J,when:ft?new Date(ft*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[f,E]of(V.adif.items||[]).entries()){let L=(E.t?E.t+". ":"")+E.txt,$=new Set,rt=new Set,ht=b(L);for(let J of L.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[J[1]]&&$.add(J[1]);T.forEach((J,ft)=>{J.fams.size&&J.n.length>4&&ht.includes(b(J.n))&&(rt.add(ft),$.size||J.fams.forEach(Z=>$.add(Z)))}),H.some(J=>J.txt===L)||H.push({id:"A"+f,fams:$,stops:rt,txt:L,when:V.adif.upd||"",src:"Adif",lvl:E.lvl})}if(N.status==="fulfilled"||I.status==="fulfilled"){V.alerts=H.sort((f,E)=>E.when>f.when?1:-1);try{l_()}catch{}}it(),Nu(),Se=0,a()}let q=()=>V.okVP&&Date.now()-V.okVP<10*6e4,Fe=()=>V.okVP&&Date.now()-V.okVP<9e4,De={at:0,v:!1},U=()=>{if(!q()||V.vp.size>0)return!1;if(Date.now()-De.at>3e4){De.at=Date.now();let o=yt(new Date),c=t.days.indexOf(o.ymd),p=0;if(c>=0)for(let m of et[c]){let y=o.min-m.t0;y>m.pat.t[1]+2&&y<m.pat.t[m.pat.t.length-2]-2&&p++}De.v=p>=6}return De.v},w=()=>q()&&!U();function it(){let o=x("#rtst"),c=x("#mode");if(c){let m=[...ut].filter(N=>{no("");let D=Ui.m.get(N);return D&&D[0]>=2}),y=eo(m),M=!!w()&&ee().live&&!(m.length&&y.length===m.length);c.classList.toggle("on",M&&Fe()),c.classList.toggle("pre",!(M&&Fe())),c.textContent=M&&!Fe()?__t(1):M?__t(2):Lt.cur?__t(3):__t(4),c.classList.toggle("past",!!Lt.cur);let I=x("#rcgrab");if(I){let N=I.querySelector(".rdot");N||(N=document.createElement("b"),N.className="rdot",I.insertBefore(N,I.firstChild)),N.className="rdot "+(Lt.cur?"past":M&&Fe()?"on":"pre"),N.title=c.textContent}c.title=Lt.cur?`${__t(5)}${Lt.cur.sn.t}${__t(6)}`:""}if(!o)return;V.url?V.err?o.textContent=__t(8)+V.err+__t(9):w()?o.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:U()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=V.err||__t(7);let p=x("#rturl");p&&p._shown!==V.url&&(p.value=V.url,p._shown=V.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){V.err=__t(15),it();return}V.url=o;try{localStorage.setItem("rod_rt",o)}catch{}V.ok=0,V.err="",it(),de()},x("#rtoff").onclick=()=>{V.url=Rt;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()};let ot=0;setInterval(()=>{let o=cn.size||ye;(document.hidden?!o||Date.now()-ot<115e3:Date.now()-ot<15e3)||(ot=Date.now(),de())},2e4),setTimeout(()=>{ot=Date.now(),de()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-ot>15e3&&(ot=Date.now(),de())});let Lt={snap:null,key:""};function kt(){let o=ee();if(o.live||!Ne.hoy||!Ne.hoy.snaps||Ut&&he==null)return null;let c=yt(new Date).min;if(o.min>c+1)return null;let p=null;for(let m of Ne.hoy.snaps){if(!m.d)continue;let y=gp(m.t);y<=o.min+1&&(!p||y>p.m)&&(p={m:y,sn:m})}return p&&o.min-p.m<=25?p:null}let mt=o=>{{let y=Iu(o.num);if(y&&y.cx&&ee().live)return"X"}let c=Lt.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let y=c.sn.d[o.tid];return y??0}if(!w())return null;let p=V.delays.get(o.tid),m=V.vp.get(o.tid);return p==="X"?p:m&&m.pre&&m.preDl>=1?Math.max(typeof p=="number"?p:0,m.preDl*60):p??null},ut=new Set(G);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>G.includes(c))&&(ut.clear(),o.forEach(c=>G.includes(c)&&ut.add(c)))}catch{}let Xt=new Yi,ue=new Yi,Yt=new hs({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Vt=new hs({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),oe=new Ur(Xt,Yt),pe=new Ur(ue,Vt);pe.renderOrder=20,oe.renderOrder=21,oe.frustumCulled=pe.frustumCulled=!1,e.add(pe,oe);function Ae(o){let c=o[0]/l+h,p=o[1]/l+u;for(let m of P){if(m._bb===void 0){let M=1e9,I=1e9,N=-1e9,D=-1e9;for(let B of m.rings||[]){let H=B[0]||[];for(let f=0;f<H.length;f+=2)H[f]<M&&(M=H[f]),H[f]>N&&(N=H[f]),H[f+1]<I&&(I=H[f+1]),H[f+1]>D&&(D=H[f+1])}m._bb=[M,I,N,D]}let y=m._bb;if(!(c<y[0]||c>y[2]||p<y[1]||p>y[3]))for(let M of m.rings||[]){let I=M[0]||[],N=!1;for(let D=0,B=I.length,H=B-2;D<B;H=D,D+=2){let f=I[D+1],E=I[H+1];f>p!=E>p&&c<(I[H]-I[D])*(p-f)/(E-f)+I[D]&&(N=!N)}if(N)return!0}}return!1}let Q=!1;function qt(){Q||!P.length||(Q=!0,T.forEach(o=>{o.ext=!Ae(o.w)}),R.forEach(o=>{o.ext=!Ae(o.p[0])&&!Ae(o.p[o.p.length-1])&&!Ae(o.p[o.p.length>>1])}))}let St=()=>{let o=new Set(ut.size<=2?ut:[]);try{Mt&&Mt.fam&&o.add(Mt.fam)}catch{}return o},Ht="";function Kt(){qt();let o=[],c=[],p=new Set,m=new xe,y=new xe("#d2d0d0"),M=St();Ht=[...M].join();for(let H of G)if(ut.has(H))for(let f of j[H]){if(p.has(f))continue;p.add(f);let E=R[f].p;m.set(X[H]),R[f].ext&&!M.has(H)&&m.lerp(y,.55);for(let L=0;L+1<E.length;L++)o.push(E[L][0],E[L][1],z,E[L+1][0],E[L+1][1],z),c.push(m.r,m.g,m.b,m.r,m.g,m.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let I=new Yi,N=new Yi;I.setPositions(o),I.setColors(c),N.setPositions(o);let D=oe.geometry,B=pe.geometry;oe.geometry=I,pe.geometry=N,D&&D.dispose(),B&&B.dispose(),a()}Kt();let Tt=o=>new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),se=new Mn,ne=T.length,tn=new Float32Array(ne*3),Je=new Float32Array(ne*3),$n=new Float32Array(ne),oi=new Float32Array(ne);T.forEach((o,c)=>{tn[c*3]=o.w[0],tn[c*3+1]=o.w[1],tn[c*3+2]=z,Je.set([1,1,1],c*3),$n[c]=6,oi[c]=1.6}),se.setAttribute("position",new hn(tn,3)),se.setAttribute("fill",new hn(Je,3)),se.setAttribute("size",new hn($n,1)),se.setAttribute("bw",new hn(oi,1));let El=Tt("#1d2330"),$a=new Ar(se,El);$a.renderOrder=22,$a.frustumCulled=!1,e.add($a);function Vn(){let o=r.dist<45,c=St();T.forEach((p,m)=>{let y=[...p.fams].some(I=>ut.has(I)),M=p.ext&&![...p.fams].some(I=>c.has(I))&&m!==me;$n[m]=y?m===me?13:M?3:o?8:5:0,oi[m]=m===me?3:1.6}),se.attributes.size.needsUpdate=!0,se.attributes.bw.needsUpdate=!0}let li=600,Ii=new Mn,ar=new Float32Array(li*3),or=new Float32Array(li*3),Pi=new Float32Array(li),$r=new Float32Array(li);Ii.setAttribute("position",new hn(ar,3)),Ii.setAttribute("fill",new hn(or,3)),Ii.setAttribute("size",new hn(Pi,1)),Ii.setAttribute("bw",new hn($r,1));let Us=new Float32Array(li);Ii.setAttribute("ang",new hn(Us,1));let Tl=new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Fs=new Ar(Ii,Tl);Fs.renderOrder=24,Fs.frustumCulled=!1,e.add(Fs);let Ji=new Mn,xs=new Float32Array(li*3),Va=new Float32Array(li*3),Ha=new Float32Array(li),Al=new Float32Array(li);Ji.setAttribute("position",new hn(xs,3)),Ji.setAttribute("fill",new hn(Va,3)),Ji.setAttribute("size",new hn(Ha,1)),Ji.setAttribute("bw",new hn(Al,1));let Ga=new Ar(Ji,Tt("#ffffff"));Ga.renderOrder=23,Ga.frustumCulled=!1,e.add(Ga);function Cl(o,c){let p=R[o],m=c*p.L,y=0,M=p.c.length-1;for(;M-y>1;){let H=y+M>>1;p.c[H]<=m?y=H:M=H}let I=p.c[M]-p.c[y]||1,N=(m-p.c[y])/I,D=p.p[y],B=p.p[M];return[D[0]+(B[0]-D[0])*N,D[1]+(B[1]-D[1])*N]}let Rl=o=>o*o*(3-2*o)*.35+o*.65;function Os(o,c){let p=o.pat.t,m=o.pat.stops.length,y=p[2*m-2];if(c<p[1]-2||c>y+1)return null;if(c<=p[1])return{w:T[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let M=0;M<m-1;M++){let I=p[2*M+1],N=p[2*M+2],D=p[2*M+3];if(c<=N){let B=N>I?(c-I)/(N-I):1;return{w:Cl(o.pat.segs[M],Rl(S(B,0,1))),at:-1,next:M+1,prev:M,moving:!0}}if(c<=D)return{w:T[o.pat.stops[M+1]].w,at:M+1,next:M+1,moving:!1}}return{w:T[o.pat.stops[m-1]].w,at:m-1,next:m-1,moving:!1}}function C(o){let c=t.days.indexOf(o.ymd),p=[];if(c<0)return{k:c,out:p};let m=(y,M)=>{for(let I of y){if(!ut.has(I.fam))continue;let N=mt(I);if(N==="X")continue;let D=(N||0)/60,B=o.min+M-I.t0-D;if(B<-2||B>I.pat.t[I.pat.t.length-2]+1)continue;let H=Os(I,B);H&&p.push({tr:I,p:H,rel:B,dl:D,live:N!=null})}};return m(et[c],0),c>0&&m(et[c-1],1440),{k:c,out:p}}function K(o,c,p,m){let y=o.pat.stops[0],M=c.dep0,I=null,N=(B,H)=>{for(let f of B||[]){let E=f.pat.stops,L=E.length;if(E[L-1]!==y||f===o)continue;let $=f.t0+f.pat.t[2*(L-1)]-H;if($>M+5||$<M-120)continue;let rt=te(f.pat),ht=Ye(rt,c.w,-1,1e9);if(ht.err>.6)continue;let J=rt.stopD,ft=f.pat.t,Z=J.findIndex(Zt=>Zt>ht.d);Z<0&&(Z=L-1);let le=Z===0?ft[1]:ft[2*Z-1]+(J[Z]>J[Z-1]?(ht.d-J[Z-1])/(J[Z]-J[Z-1]):1)*(ft[2*Z]-ft[2*Z-1]),Me=p-(f.t0+le-H);Me<-5||Me>120||(!I||Math.abs(Me)<Math.abs(I.prevDl))&&(I={prevTr:f,dPrev:ht.d,prevDl:Me,arrO:$+Math.max(0,Me)})}};if(N(et[m],0),m>0&&N(et[m-1],1440),!I)return{prevTr:null,preDl:0};let D=Math.max(M,I.arrO+3);return{...I,depEst:D,preDl:Math.max(0,D-M)}}function dt(o,c,p){let m=o.pat.t,y=c.length;if(!(p>=0))return p<0?c[0]:null;for(let M=0;M<y;M++)if(p<=m[2*M+1]){if(p>=m[2*M]||M===0)return c[M];let I=m[2*M-1],N=m[2*M];return c[M-1]+(c[M]-c[M-1])*(N>I?(p-I)/(N-I):1)}return c[y-1]}let at=performance.now();function lt(){let o=[],c=Date.now()/1e3,p=performance.now(),m=Math.min(1,(p-at)/1e3);at=p;for(let y of V.vp.values()){let M=pt.get(y.tid),I=M?M.fam:y.fam;if(I&&X[I]&&!ut.has(I))continue;let N=V.delays.get(y.tid),D=typeof N=="number"?N/60:0,B=Math.max(0,c-y.ts);y.mvTs!==y.ts&&((!y.mvW||Math.hypot(y.w[0]-y.mvW[0],y.w[1]-y.mvW[1])>.025)&&(y.mvW=y.w,y.mvAt=y.ts),y.mvTs=y.ts),y.still=y.ts-(y.mvAt||y.ts);let H=y.w,f=-1;if(M){let L=te(M.pat),$=L.stopD;if(y.dObs==null||y.obsAt!==y.ts){let Z=Ye(L,y.w,-1,1e9);y.dObs=Z.d,y.err=Z.err,y.obsAt=y.ts}let rt=ee(),ht=t.days.indexOf(rt.ymd),J=M.day===ht-1?1440:0,ft=M.t0+M.pat.t[1]-J;if(y.pre=rt.min+D<ft-1&&(y.dObs>$[0]+.35||y.err>.6)&&!(y.st==="STOPPED_AT"&&y.sid===T[M.pat.stops[0]].id),y.dep0=ft,y.pre){if(y.atStop=-1,y.next=0,f=0,y.disp=null,y.prevAt!==y.ts&&(y.prevAt=y.ts,Object.assign(y,K(M,y,rt.min,ht))),y.prevTr){let Z=te(y.prevTr.pat);H=Le(Z,y.dPrev)}}else if(!Fe()&&M){let Z=ee(),le=t.days.indexOf(Z.ymd),Me=M.day===le-1?1440:0,Zt=Os(M,Z.min+Me-M.t0-D);Zt?(H=Zt.w,y.est=!0,f=Zt.next,y.atStop=Zt.moving?-1:Zt.at,y.next=Zt.next,y.before=!1):(y.atStop=-1,y.next=-1)}else if(y.err<=.6){let Z=$.findIndex(Zt=>Zt>y.dObs+.08);Z<0&&(Z=$.length-1);let le=$.reduce((Zt,ke,we)=>Math.abs(ke-y.dObs)<Math.abs($[Zt]-y.dObs)?we:Zt,0);y.atStop=Math.abs($[le]-y.dObs)<.16?le:-1;{let Zt=y.st==="STOPPED_AT"&&y.sid?M.pat.stops.findIndex(ke=>T[ke].id===y.sid):-1;Zt>=0&&Math.abs($[Zt]-y.dObs)<.6&&(y.atStop=Zt,Z<=Zt&&(Z=Math.min(Zt+1,$.length-1)))}y.before=y.atStop>=0&&y.dObs<$[y.atStop]-.15,y.next=Z,f=Z;let Me=y.dObs;if(y.st==="STOPPED_AT"&&y.atStop>=0)Me=$[y.atStop];else if(Z>0){let Zt=(M.pat.t[2*Z]-M.pat.t[2*Z-1])*60,ke=Zt>0?($[Z]-$[Z-1])/Zt:0,we=ee(),Ie=t.days.indexOf(we.ymd),Ze=M.day===Ie-1?1440:0,Ge=dt(M,$,we.min+Ze-M.t0-D),xn=y.dObs+ke*Math.min(B,60);Ge!=null&&(xn=Math.min(xn,Math.max(y.dObs,Ge))),Me=Math.max(y.dObs,Math.min($[Z]-.03,xn))}y.disp==null||Math.abs(y.disp-Me)>1.2?y.disp=Me:Me>y.disp&&(y.disp+=(Me-y.disp)*Math.min(1,m*1.5)),H=Le(L,y.disp)}else if(y.err>2){let Z=ee(),le=t.days.indexOf(Z.ymd),Me=M.day===le-1?1440:0,Zt=Os(M,Z.min+Me-M.t0-D);Zt&&(H=Zt.w,y.est=!0,f=Zt.next),y.atStop=-1,y.next=Zt?Zt.next:-1}else y.atStop=-1,y.next=-1}let E=y.pre?"":y.st==="STOPPED_AT"&&y.atStop>=0||y.atStop>=0&&y.still>30?"st":y.still>=90&&y.atStop<0?"via":"";o.push({tr:M,v:y,w:H,stop:E,p:{w:H},fam:I||"?",c:M?M.c:X[I]||"#6b7385",dl:D,live:!0,real:!0,idx:f,age:B,cancel:N==="X"})}return o}let Ot=new Map,Ft=!1,Ct=!1,Jt="",ie={st:-1},ae=[],Se=0,Nt=null,Mt=null,me=-1,_e=!1,nn=0,Cn="";function Qt(o){let c=Ut>0||!!Nt,p=window.__mapHidden?1e3:Ut>0?50:c?200:250;if(o-Se<p)return!1;Se=o,[...St()].join()!==Ht&&(Kt(),Vn());{let f=kt(),E=f?f.sn.t:"";Lt.cur=f,E!==Lt.key&&(Lt.key=E,it()),!f&&!ee().live&&!Ne.at&&Pl()}let m=ee(),y=w()&&m.live,M=y?{k:t.days.indexOf(m.ymd),out:lt()}:C(m);ae=M.out;let I=new xe,N=0,D=0;for(let f of ae){if(N>=li)break;ar[N*3]=f.p.w[0],ar[N*3+1]=f.p.w[1],ar[N*3+2]=z+.02;let E=null;if(f.real&&f.v.pre&&f.v.prevTr)E=Le(te(f.v.prevTr.pat),f.v.dPrev+.35);else if(f.real&&f.tr&&!f.v.pre&&f.v.err<=.6&&f.v.disp!=null&&!(f.v.st==="STOPPED_AT"&&f.v.atStop>=0))E=Le(te(f.tr.pat),f.v.disp+.35);else if(!f.real&&f.p.moving){let J=f.tr.pat.t,ft=f.p.prev,Z=J[2*ft+1],le=J[2*ft+2],Me=le>Z?(f.rel-Z)/(le-Z):1;E=Cl(f.tr.pat.segs[ft],Math.min(1,Rl(S(Me,0,1))+.04))}let L=f.real?!!f.stop:!f.p.moving;if(f.broke=ap(f),f.broke)Us[N]=85;else if(L)Us[N]=75;else if(E){let J=Ll(f.p.w),ft=Ll(E),Z=ft[0]-J[0],le=ft[1]-J[1];Us[N]=Math.hypot(Z,le)>.05?Math.atan2(Z,-le):99}else Us[N]=99;I.set(f.c||f.tr.c),or[N*3]=I.r,or[N*3+1]=I.g,or[N*3+2]=I.b;let $=f.tr?f.tr===Mt:Mt&&Mt.vtid===f.v.tid;Pi[N]=$?22:r.dist<45?17:14,$r[N]=$?3.5:2.2;let rt=f.real&&f.stop==="via"||!!f.broke,ht=f.cancel||f.broke?[.86,.15,.15]:f.dl>10?[.86,.15,.15]:f.dl>5?[.92,.48,.05]:f.dl>=1?[.98,.8,.08]:[.09,.64,.29];(f.live&&f.dl>=5||$||rt)&&(xs[D*3]=f.p.w[0],xs[D*3+1]=f.p.w[1],xs[D*3+2]=z+.01,Va.set($?ht:rt?[.86,.15,.15]:[.98,.45,.09],D*3),Ha[D]=Pi[N]+($?16+5*Math.sin(o/220):rt?10+3*Math.sin(o/400):8),Al[D]=$?2:3,D++),N++}if(Ii.setDrawRange(0,N),Ji.setDrawRange(0,D),["position","fill","size","bw"].forEach(f=>{Ii.attributes[f].needsUpdate=!0,Ji.attributes[f].needsUpdate=!0}),Ii.attributes.ang.needsUpdate=!0,Nt){let f=ae.find(E=>E.tr===Nt);if(f){let E=0,L=innerHeight,$=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,rt=x("#rc").getBoundingClientRect();innerWidth<=640&&($&&(E=$.bottom),L=Math.min(L,rt.top));let ht=E+(L-E)/2,J=ht-innerHeight/2,ft=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=f.p.w[0]-Math.sin(r.yaw)*J*ft,s.ty=f.p.w[1]+Math.cos(r.yaw)*J*ft}else w()&&ee().live&&(Nt=null)}let B=nt(Math.floor(m.min+1e-6));B!==Cn&&(Cn=B,x("#ctime").textContent=B),x("#ntr").textContent=String(ae.length),x("#ntrl").textContent=y?__t(16):__t(17);{let f=ut.size<G.length?[...ut].sort(F).join(", "):"",E=x("#ccount"),L=Lt.cur?`\u23EA ${ae.length}${__t(18)}${Lt.cur.sn.t} \xB7 ${Object.values(Lt.cur.sn.d).filter($=>$>=60).length}${__t(19)}`:!m.live&&m.min<yt(new Date).min-1&&!Ut?`${__t(20)}${Ne.hoy&&Ne.hoy.snaps&&Ne.hoy.snaps.some($=>$.d)?`${__t(21)}${Ne.hoy.snaps.find($=>$.d).t}`:__t(22)}`:y&&!Fe()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${ps(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:y&&!ae.some($=>$.real)&&eo(ut).length?`\u{1F4E1} ${__t(25)}${f?` <small>\xB7 ${g(f)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${ae.length} ${y?__t(27):__t(28)}${f?` <small>\xB7 ${g(f)}</small>`:""}${y&&V.okVP?(()=>{let $=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${$<3?" new":""}">\u25CF ${__t(29)}${ps($+" s")}</small>`})():""}`;E&&E._t!==L&&(E.innerHTML=L,E._t=L)}{let f=x("#p");f&&f.classList.toggle("ttf",!m.live||!!Ut)}let H=new Date;if(x("#cdate").textContent=m.live?__t(30):Ut?__t(31)+Ut:Ti?__t(32):__t(33),M.k<0?x("#src").innerHTML=`${__t(34)}${Ve(t.days[0])}${__t(35)}${Ve(t.days[t.days.length-1])}${__t(36)}`:y?x("#src").textContent=`${Fe()?__t(37):__t(38)}${ps(fu(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(f=>f.ts),0))))}`:U()&&m.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),m.live){let f=Math.round(m.min),E=x("#tsl");document.activeElement!==E&&(E.value=f<240?f+1440:f)}{let f=Mt?String(Mt.num||Mt.vtid||""):"";f!==Qt._sk&&(Qt._sk=f,Ee(!0))}return Ee(),!Qt._sp&&(y||!m.live||U()||!V.url)&&(Qt._sp=1,window.__splashOff&&window.__splashOff()),o-nn>3e3&&(Mt||me>=0||_e||Ct||Jt)&&(nn=o,Ue()),it(),!0}let Ln=-1,Oe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Hn=[],En=document.createElement("button");En.type="button",En.id="mbtn",En.title=__t(44),En.innerHTML=__t(45),En.onclick=()=>{Oe=!Oe;try{localStorage.setItem("rod_mun",Oe?"1":"")}catch{}En.classList.toggle("on",Oe),a(),Li()},En.classList.toggle("on",Oe),document.body.appendChild(En);let Zi=P.slice().sort((o,c)=>c.pop-o.pop);function Bs(o){if(o._a)return o._a;let c=null,p=0;for(let m of o.rings||[]){let y=m[0];if(!y)continue;let M=0,I=0,N=0;for(let D=0,B=y.length;D<B;D+=2){let H=y[D],f=y[D+1],E=y[(D+2)%B],L=y[(D+3)%B],$=H*L-E*f;M+=$,I+=(H+E)*$,N+=(f+L)*$}Math.abs(M)>p&&(p=Math.abs(M),c=[I/(3*M),N/(3*M)])}return o._a=c?[(c[0]-h)*l,(c[1]-u)*l]:[o.cx,o.cy]}let sn=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,_n=[0,7.6,6.7,6,5.4],ji=[0,17,15,13,12],ln=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Li(){let o=s.tilt<.06&&r.tilt<.08;En.classList.toggle("show",o);let c=0;if(Oe&&o){let p=[...document.querySelectorAll(".plab, .slab")].filter(M=>M.offsetParent!==null||M.style.display==="block").map(M=>{let I=M.getBoundingClientRect();return[I.left-2,I.top-2,I.right+2,I.bottom+2]}).filter(M=>M[2]>M[0]),m=r.dist,y=m>160?5e4:m>130?2e4:m>105?8e3:m>80?3e3:m>62?800:0;for(let M of Zi){let I=sn(M.pop);if(M.pop<y)break;let N=Bs(M);if(bn.set(N[0],N[1],z).project(n),Math.abs(bn.x)>1.02||Math.abs(bn.y)>1.02)continue;let D=(bn.x*.5+.5)*innerWidth,B=(-bn.y*.5+.5)*innerHeight,H=ln(M.name),f=H.length*_n[I]+8,E=ji[I],L=[D-f/2,B-E/2,D+f/2,B+E/2];if(p.some(rt=>L[0]<rt[2]&&rt[0]<L[2]&&L[1]<rt[3]&&rt[1]<L[3]))continue;p.push(L);let $=Hn[c]||(Hn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));$.isConnected||document.body.appendChild($),$._n!==H&&($.textContent=H,$._n=H),$._t!==I&&($.className="mlab t"+I,$._t=I),$.style.transform=`translate(${Math.round(D)}px,${Math.round(B)}px) translate(-50%,-50%)`,$.style.display="block",c++}}for(;c<Hn.length;c++)Hn[c].style.display="none"}let Ne={at:0,hoy:null,ayer:null,err:""},Il="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Pl(){Date.now()-Ne.at<5*6e4||(Ne.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(Il+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null))).then(([o,c,p])=>{Ne.hoy=o,Ne.ayer=c,Ne.hist=p,Ne.tr=null,Ne.err=o?"":__t(46),Ct&&(d._h="",Ue()),Ee(!0)}))}function Ng(o){let c={};for(let m of o&&o.snaps||[])for(let y of m.r||[]){let M=/^\d+[A-Z](\d+)/.exec(y);M&&(c[M[1]]=c[M[1]]||[]).push(Math.max(0,m.d&&m.d[y]||0)/60)}let p={};for(let m in c){let y=c[m].sort((M,I)=>M-I);p[m]=Math.round(y[y.length>>1])}return p}function Ru(o){if(!Ne.tr){let p=new Map;for(let m of Ne.hist&&Ne.hist.days||[])p.set(m.day,m.tr);for(let m of[Ne.ayer,Ne.hoy])if(m&&m.day&&!p.has(m.day)){let y=Ng(m);Object.keys(y).length&&p.set(m.day,y)}Ne.tr=p}let c=[...Ne.tr.values()].map(p=>p[String(o)]).filter(p=>p!=null);return c.length?{n:c.length,late:c.filter(p=>p>=5).length,avg:c.reduce((p,m)=>p+m,0)/c.length}:null}let ks=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",vs={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},ep=o=>o>10?vs.b:o>5?vs.w:o>=1?vs.y:vs.g,lr=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Wa(o,c,p){return`<div class="sbars">${o.map(m=>`<div class="sbar" title="${g(m.tip||"")}"><span class="sl">${m.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(m.w*100))}%;background:${m.c}"></i></span><b class="sv" style="color:${m.c===vs.y?"var(--svy,#a16207)":m.c===vs.w?"var(--svw,#c2410c)":m.c}">${m.val}</b></div>`).join("")}</div>`}function Ug(o){if(o=(o||[]).filter(J=>J.n>=10),!o||o.length<2){let J=o&&o[0];return J?`${__t(47)}${J.t}: ${Math.round(J.ok/J.n*100)}${__t(48)}${J.n}${__t(49)}`:__t(50)}let c=J=>{let[ft,Z]=J.t.split(":").map(Number);return ft*60+Z},p=c(o[0]),m=Math.max(p+60,c(o[o.length-1])),y=300,M=112,I=24,N=J=>I+(J-p)*(y-I-8)/(m-p),D=J=>8+(100-J)/100*(M-26),B=J=>J.n?J.ok/J.n*100:100,H=o.map(J=>[N(c(J)),D(B(J)),J]),f=J=>J[0].toFixed(1)+","+J[1].toFixed(1),E=[],L=[];H.forEach((J,ft)=>{ft&&c(J[2])-c(H[ft-1][2])>45&&(E.push(L),L=[]),L.push(J)}),E.push(L);let $=H[H.length-1],rt=[];for(let J=Math.ceil(p/180)*3;J*60<m;J+=3)J*60>p+20&&rt.push(J);let ht=Math.round(o.reduce((J,ft)=>J+ft.ok,0)/Math.max(1,o.reduce((J,ft)=>J+ft.n,0))*100);return`<svg class="schart" viewBox="0 0 ${y} ${M}${__t(51)}${[100,75,50,25].map(J=>`<line x1="${I}" x2="${y-4}" y1="${D(J)}" y2="${D(J)}" class="gl"/><text x="2" y="${D(J)+3}" class="ax">${J}%</text>`).join("")}
      <line x1="${I}" x2="${y-4}" y1="${D(ht)}" y2="${D(ht)}" class="avg"/>
      ${E.filter(J=>J.length).map(J=>`<polygon points="${f([J[0][0],D(0)])} ${J.map(f).join(" ")} ${f([J[J.length-1][0],D(0)])}" class="ar"/><polyline points="${J.map(f).join(" ")}" class="ln"/>`).join("")}
      ${H.map(([J,ft,Z])=>`<circle cx="${J.toFixed(1)}" cy="${ft.toFixed(1)}" r="6" class="hit"><title>${Z.t} \xB7 ${Math.round(B(Z))}${__t(52)}${Z.n}${__t(53)}${Z.d5}${__t(54)}${lr(Z.avg)}${Z.nd?` \xB7 ${Z.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${$[0].toFixed(1)}" cy="${$[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min($[0],y-30).toFixed(1)}" y="${($[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(B($[2]))}%</text>
      ${rt.map(J=>`<text x="${N(J*60).toFixed(1)}" y="${M-4}" class="ax" text-anchor="middle">${String(J).padStart(2,"0")}h</text>`).join("")}
      <text x="${I}" y="${M-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${ht}%)</small>`}function Fg(){Pl();let o=ee(),c=ae.filter(N=>N.real&&w()&&o.live),p=c.filter(N=>V.delays.has(N.v.tid)),m=p.length,y=c.length-m,M=`${__t(57)}`;if(m){let N=p.filter(ft=>ft.dl<3).length,D=p.filter(ft=>ft.dl>=5).length,B=p.filter(ft=>ft.stop==="via").length,H=Math.round(N/m*100);M+=`${__t(58)}${m}${__t(59)}${y?` \xB7 ${y}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${ks(H)}"><b>${H}${__t(60)}${ks(100-D/m*100*2)}" title="${Math.round(D/m*100)}${__t(61)}${D}${__t(62)}${B===0?"g":B<=2?"w":"b"}"><b>${B}${__t(63)}`;let f=new Map;p.forEach(ft=>{let Z=ft.fam,le=f.get(Z)||{n:0,ok:0,sum:0};le.n++,le.ok+=ft.dl<3,le.sum+=Math.max(0,ft.dl),f.set(Z,le)});let E=[...f].filter(([ft])=>X[ft]).sort((ft,Z)=>ft[1].ok/ft[1].n-Z[1].ok/Z[1].n||Z[1].sum/Z[1].n-ft[1].sum/ft[1].n),L=E.filter(([,ft])=>ft.ok<ft.n),$=E.filter(([,ft])=>ft.ok===ft.n);M+=`${__t(65)}`+(L.length?"":__t(66))+Wa(L.map(([ft,Z])=>({lab:Rn(ft),w:Z.ok/Z.n,c:vs[ks(Z.ok/Z.n*100)],val:`${Math.round(Z.ok/Z.n*100)}% <small>${lr(Z.sum/Z.n)}</small>`,tip:`${ft}: ${Z.ok}${__t(67)}${Z.n}${__t(68)}${lr(Z.sum/Z.n)}`})))+($.length?`${__t(69)}${$.map(([ft])=>Rn(ft)).join(" ")}</p>`:"");let rt=new Map;p.forEach(ft=>{if(!ft.tr||ft.v.next==null||ft.v.next<0||ft.v.pre)return;let Z=ft.tr.pat.stops[ft.v.next],le=rt.get(Z)||{n:0,sum:0};le.n++,le.sum+=Math.max(0,ft.dl),rt.set(Z,le)});let ht=[...rt].filter(([,ft])=>ft.sum/ft.n>=1).sort((ft,Z)=>Z[1].sum/Z[1].n-ft[1].sum/ft[1].n).slice(0,8),J=ht.length?ht[0][1].sum/ht[0][1].n:1;M+=`${__t(70)}`+(ht.length?Wa(ht.map(([ft,Z])=>({lab:`<span class="sn" data-gs="${ft}">${g(T[ft].n)}</span>`,w:Z.sum/Z.n/J,c:ep(Z.sum/Z.n),val:`${lr(Z.sum/Z.n)} <small>${Z.n} ${Z.n===1?"tren":__t(71)}</small>`,tip:`${T[ft].n}: ${Z.n}${__t(72)}${lr(Z.sum/Z.n)}${__t(73)}`}))):__t(74))}else M+=`${__t(75)}`;let I=Ne.hoy;M+=`<button type="button" class="hmore" data-cols>${mn.on?__t(76):__t(77)}</button>`;{no("");let N=[...Ui.m].filter(([D,B])=>X[D]&&B[0]>=3).map(([D,B])=>[D,B[1]/B[0]]).sort((D,B)=>D[1]-B[1]);N.length&&!w()?M+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:N.length&&(M+=`${__t(80)}`+Wa(N.slice(0,8).map(([D,B])=>({lab:Rn(D),w:B,c:vs[ks(B*100)],val:`${Math.round(B*100)}%`,tip:`${D}: ${Math.round(B*100)}${__t(81)}`}))))}{let N=(L,$)=>{let rt=(L&&L.snaps||[]).filter(ft=>ft.n&&(!$||ft.t<=$)),ht=rt.reduce((ft,Z)=>ft+Z.n,0),J=rt.reduce((ft,Z)=>ft+Z.ok,0);return ht?J/ht*100:null},D=(Ne.hoy&&Ne.hoy.snaps||[]).filter(L=>L.n).map(L=>L.t).pop(),B=N(Ne.hoy),H=N(Ne.ayer,D),f=B!=null?Math.round(B):null,E=H!=null?Math.round(H):null;B!=null&&(M+=`${__t(82)}${ks(B)}">${Math.round(B)}${__t(83)}${H!=null?`<span>${D?__t(84):__t(85)} <b class="${ks(H)}">${E} %</b></span><span>${f>E?__t(86):f<E?__t(87):__t(88)}</span>`:""}</div>`)}if(M+=`${__t(89)}`,I&&I.snaps){M+=Ug(I.snaps);let N=Object.entries(I.st||{}).map(([H,f])=>[Wt.get(H),f]).filter(([H,f])=>H!=null&&f.n>=3).map(([H,f])=>[H,f.sum/f.n/60,f]).filter(H=>H[1]>=1).sort((H,f)=>f[1]-H[1]).slice(0,8);if(N.length){let H=N[0][1];M+=`${__t(90)}`+Wa(N.map(([f,E,L])=>({lab:`<span class="sn" data-gs="${f}">${g(T[f].n)}</span>`,w:E/H,c:ep(E),val:`${lr(E)}${__t(91)}${Math.round(L.max/60)}</small>`,tip:`${T[f].n}: ${L.n}${__t(92)}${L.d5}${__t(93)}${Math.round(L.max/60)} min`})))}let D=Object.entries(I.lines||{}).filter(([H,f])=>X[H]&&f.n>=3).sort((H,f)=>H[1].ok/H[1].n-f[1].ok/f[1].n);D.length&&(M+=`${__t(94)}`+Wa(D.map(([H,f])=>({lab:Rn(H),w:f.ok/f.n,c:vs[ks(f.ok/f.n*100)],val:`${Math.round(f.ok/f.n*100)}% <small>${lr(f.sum/f.n/60)}</small>`,tip:`${H}${__t(95)}${Math.round(f.ok/f.n*100)}${__t(96)}${Math.round(f.max/60)} min`}))));let B=I.upd?(Date.now()-Date.parse(I.upd))/6e4:0;M+=`<small class="snote">${B>40?`${__t(98)}${ps(B<90?Math.round(B)+" min":B<2160?Math.round(B/60)+" h":Math.round(B/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${g((I.upd||"").slice(11,16))} \xB7 ${(I.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else M+=`<p class="snote">${Ne.at?__t(102):__t(103)}</p>`;return M+"</div>"}function Og(o){let c=ee(),p=ae.filter(E=>(E.fam||E.tr&&E.tr.fam)===o),m=p.filter(E=>E.real),y=p.length,M=p.filter(E=>E.dl>=5).length,I=p.filter(E=>E.dl<3).length,N=p.filter(E=>E.stop==="via"||E.broke).length,D=V.alerts.filter(E=>E.fams.has(o)),B=E=>{let L=E.tr;if(!L)return"";let $=E.v;if(E.real&&$){let ht=$.next>=0?T[L.pat.stops[$.next]].n:"";return $.atStop>=0?`${__t(104)}${T[L.pat.stops[$.atStop]].n}`:ht?`${__t(105)}${ht}`:""}let rt=E.p;return rt&&rt.next!=null&&rt.next>=0?`${__t(105)}${T[L.pat.stops[rt.next]].n}`:""},H=p.slice().sort((E,L)=>L.dl-E.dl).slice(0,40).map(E=>{let L=E.tr;return`<li class="go${Ja({num:L?L.num:E.v.num,tid:L?L.tid:E.v.tid})?" sel":""}" data-gt="${g(L?L.num:E.v.num)}|${g(E.real?E.v.tid:L?L.tid:"")}"><b>${g(L?L.num:E.v.num)}</b><span>${L?Ei(T[L.pat.stops[L.pat.stops.length-1]].n,o):""} <small>${g(B(E))}</small></span>${E.dl>=1?`<em class="dl ${Di(E.dl)}">+${Math.round(E.dl)}</em>`:__t(106)}</li>`}).join(""),f=no(o);return`<div class="tc sts" style="--c:${X[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Rn(o)}${__t(107)}${c.live?`${__t(113)}${y}${__t(114)}${m.length<y?` (${m.length}${__t(115)}`:""}`:`${__t(116)}${nt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${y?ks(I/y*100):""}"><b>${y?Math.round(I/y*100)+"%":"\u2014"}${__t(108)}${M?M/Math.max(1,y)>.2?"b":"w":"g"}"><b>${M}${__t(109)}${N?"b":"g"}"><b>${N}${__t(110)}${D.length?Bg(D):__t(117)}${f<.7?`${__t(118)}${Math.round(f*100)}${__t(119)}`:""}${__t(111)}${H||__t(120)}${__t(112)}`}let Bg=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${Ka(c)} ${g(c.txt)} <small>${Qa(c)}</small></p>`).join("")}</div>`,mn={on:!1,mesh:null};function np(){let o=Ne.hoy,c=[];if(o&&o.st)for(let[p,m]of Object.entries(o.st)){let y=Wt.get(p);y!=null&&m.n>=2&&c.push([y,m.sum/m.n/60,m.n])}if(!c.length){let p=new Map;ae.forEach(m=>{if(!m.real||!m.tr||m.v.next==null||m.v.next<0||m.v.pre||!V.delays.has(m.v.tid))return;let y=m.tr.pat.stops[m.v.next],M=p.get(y)||[0,0];M[0]+=Math.max(0,m.dl),M[1]++,p.set(y,M)}),p.forEach((m,y)=>c.push([y,m[0]/m[1],m[1]]))}return c}let ip=()=>Math.min(1,Math.max(.22,r.dist/110));function kg(){if(!mn.mesh||!mn.d)return;let o=ip();if(Math.abs(o-mn.r)<.04)return;mn.r=o;let c=new qe;mn.d.forEach(([p,m],y)=>{c.makeScale(o,o,.3+Math.min(m,40)*.3),c.setPosition(T[p].w[0],T[p].w[1],z),mn.mesh.setMatrixAt(y,c)}),mn.mesh.instanceMatrix.needsUpdate=!0,a()}function zg(){if(mn.mesh&&(e.remove(mn.mesh),mn.mesh.geometry.dispose(),mn.mesh.material.dispose(),mn.mesh=null),!mn.on){a();return}let o=np();if(!o.length){Ke(__t(121)),mn.on=!1;return}let c=new zo(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let p=new Er({fog:!1}),m=new Fo(c,p,o.length),y=new qe,M=new xe;mn.d=o,mn.r=ip(),o.forEach(([I,N],D)=>{let B=.3+Math.min(N,40)*.3;y.makeScale(mn.r,mn.r,B),y.setPosition(T[I].w[0],T[I].w[1],z),m.setMatrixAt(D,y),M.set(N>10?"#dc2626":N>5?"#ea7a0c":N>=1?"#eab308":"#16a34a"),m.setColorAt(D,M)}),m.renderOrder=25,m.frustumCulled=!1,e.add(m),mn.mesh=m,s.tilt<.5&&(s.tilt=.85),a()}let Vr=document.createElement("button");Vr.type="button",Vr.id="sbtn",Vr.title=__t(122),Vr.innerHTML=__t(123),Vr.onclick=()=>{Ct=!Ct,Ct&&(Ft=_e=!1,Ne.at=0),d._h="",Ue(),a()},document.body.appendChild(Vr);function $g(){r.dist<45!=Ln<45&&(Ln=r.dist,Vn()),kg(),Vg(),Li()}let ys=[],bn=new Y;function Vg(){let o=0;if(mn.on){let p=np().sort((y,M)=>M[1]-y[1]),m=[];for(let[y,M]of p){if(o>=30)break;if(bn.set(T[y].w[0],T[y].w[1],z).project(n),bn.z>1||Math.abs(bn.x)>1||Math.abs(bn.y)>1)continue;let I=(bn.x*.5+.5)*innerWidth,N=(-bn.y*.5+.5)*innerHeight;if(m.some(([B,H])=>Math.abs(B-I)<90&&Math.abs(H-N)<18))continue;m.push([I,N]);let D=ys[o]||(ys[o]=Object.assign(document.createElement("div"),{className:"slab"}));D.isConnected||document.body.appendChild(D),D.textContent=T[y].n+" +"+Math.round(M)+"\u2032",D.dataset.i=y,D.style.display="block",D.style.transform=`translate(${Math.round(I+8)}px,${Math.round(N-8)}px)`,o++}for(;o<ys.length;o++)ys[o].style.display="none";return}if(r.dist<30){let p=[];for(let m=0;m<ne;m++)$n[m]<4||(bn.set(T[m].w[0],T[m].w[1],z).project(n),!(bn.z>1||Math.abs(bn.x)>1.05||Math.abs(bn.y)>1.05)&&p.push([m,(bn.x*.5+.5)*innerWidth,(-bn.y*.5+.5)*innerHeight]));if(p.length<=70)for(let[m,y,M]of p){let I=ys[o]||(ys[o]=Object.assign(document.createElement("div"),{className:"slab"}));I.isConnected||document.body.appendChild(I),I.textContent=T[m].n,I.dataset.i=m,I.style.display="block",I.style.transform=`translate(${Math.round(y+8)}px,${Math.round(M-7)}px)`,o++}}for(;o<ys.length;o++)ys[o].style.display="none"}function Ll(o){return bn.set(o[0],o[1],z).project(n),[(bn.x*.5+.5)*innerWidth,(-bn.y*.5+.5)*innerHeight,bn.z]}function sp(o,c,p,m){let y=null,M=p*p;for(let I of ae){let[N,D,B]=Ll(I.p.w);if(B>1)continue;let H=(N-o)**2+(D-c)**2;H<M&&(M=H,y={a:I})}if(y)return y;M=m*m;for(let I=0;I<ne;I++){if(!$n[I])continue;let[N,D,B]=Ll(T[I].w);if(B>1)continue;let H=(N-o)**2+(D-c)**2;H<M&&(M=H,y={s:I})}return y}let cr=!1;window.__rodHide=()=>{cr=!0},document.addEventListener("click",o=>{cr&&!o.target.closest("#mcs, canvas")&&(cr=!1)},!0),window.__rodTap=(o,c)=>{let p=null,m=1e9;for(let M of ys){if(M.style.display==="none")continue;let I=M.getBoundingClientRect();if(o>=I.left-4&&o<=I.right+4&&c>=I.top-4&&c<=I.bottom+4){let N=Math.abs(c-(I.top+I.bottom)/2)*4+(o-I.left);N<m&&(m=N,p=M)}}if(p)return window.__rodPickStation(+p.dataset.i),!0;let y=sp(o,c,24,18);return y&&(y.a||y.s!=null)&&(cr=!1),y&&(y.a||y.s!=null)&&(ie.st=-1),y&&y.a?(Ft=!1,_e=!1,Ct=!1,Mt=y.a.tr||{vtid:y.a.v.tid},me=-1,Nt=null,Vn(),Ue(),Se=0,a(),!0):y&&y.s!=null?(Ft=!1,_e=!1,Ct=!1,me=y.s,Mt=null,Nt=null,Vn(),Ue(),a(),!0):!1},window.__rodHover=(o,c)=>{let p=sp(o,c,14,10);if(p&&p.a){let m=p.a,y=m.tr?T[m.tr.pat.stops[m.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${m.c}">\u25A0</span> ${g(m.fam||m.tr&&m.tr.fam||"?")}${__t(124)}${g(m.tr?m.tr.num:m.v.num)}</b><small>${y?__t(105)+g(y):""}${m.real?(m.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(m.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return p&&p.s!=null?`<b>${g(T[p.s].n)}</b><small>${[...T[p.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ie.st=-1,cr=!1,Ft=_e=Ct=!1,Mt=null,Nt=null,me=o,Vn(),d._h="",Ue(),a()};{let o=x("#rc"),c=()=>{let p=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,p-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let p=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(m=>m.text()).then(m=>{let y=(m.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];y&&p&&y!==p[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(p=>{p.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||p.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Pl()}catch{}},2500),setInterval(()=>{try{Ne.at=0,Pl()}catch{}},15*6e4);let ci={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Xa=matchMedia("(prefers-color-scheme: dark)");function Dl(){let o=ci.mode==="dark"||ci.mode==="auto"&&Xa.matches;document.documentElement.classList.toggle("dark",o);for(let p=0;p<ne;p++)Je.set(o?[.06,.08,.11]:[1,1,1],p*3);se.attributes.fill.needsUpdate=!0,El.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),hr.textContent=ci.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ci.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",hr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ci.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let hr=document.createElement("button");hr.type="button",hr.id="tbtn",hr.onclick=()=>{ci.mode=ci.mode==="auto"?Xa.matches?"light":"dark":ci.mode==="dark"?"light":"dark",ci.mode==="dark"===Xa.matches&&(ci.mode="auto");try{localStorage.setItem("rod_theme",ci.mode)}catch{}Dl(),Ke(hr.title)},document.body.appendChild(hr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Xa.addEventListener&&Xa.addEventListener("change",Dl),Dl(),window.__rodTick=Qt,window.__rodFrame=$g,window.__rodResize=()=>{Yt.resolution.set(innerWidth,innerHeight),Vt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let wi={st:-1,f:new Set},rp=o=>{let c=[...T[o].fams].sort(F);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${wi.f.size?"":"on"}${__t(133)}`:""}${c.map(p=>`<button type="button" data-sf="${g(p)}" class="ln ${wi.f.size&&!wi.f.has(p)?"off":""}${ut.has(p)?"":" hid"}" style="--c:${X[p]}">${g(p)}</button>`).join("")}</div>${c.some(p=>!ut.has(p))?__t(134):""}`},Hg=o=>{let c=(o||"#6b7385").replace("#",""),p=parseInt(c.slice(0,2),16),m=parseInt(c.slice(2,4),16),y=parseInt(c.slice(4,6),16);return(.299*p+.587*m+.114*y)/255>.62?"#1d2330":"#fff"},Ei=(o,c)=>{let p=X[c]||"#6b7385";return`<span class="dst" style="background:${p};color:${Hg(p)}" title="${g(c||"")}">${g(o)}</span>`},Nl=o=>{let c=T[o]&&T[o].id;return Qe.st.includes(c)?"\u{1F3E0} ":He.st.includes(c)?"\u{1F4BC} ":""},Di=o=>o>10?"d-hi":o>5?"d-md":"d-lo",Gg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,qa={ref:null,m:new Map};function Iu(o){if(qa.ref!==V.alerts){qa.ref=V.alerts,qa.m=new Map;for(let c of V.alerts){if(c.src!=="Rodalies")continue;let p=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let m of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))qa.m.set(m[1],{why:p?p[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return qa.m.get(String(o))||null}let Ya={ref:null,m:new Map};function ap(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if(Ya.ref!==V.alerts){Ya.ref=V.alerts,Ya.m=new Map;for(let m of V.alerts)if(m.src==="Rodalies"&&Gg.test(m.es||m.txt))for(let y of(m.es||m.txt).matchAll(/\b(\d{4,6})\b/g))Ya.m.set(y[1],m)}let p=Ya.m.get(c);return p?{why:"aviso",txt:p.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Ja=o=>{try{let c=Mt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},op=(o,c)=>{let p=A(o,c.min-1,c.min+240).sort((m,y)=>m.est-y.est).slice(0,6);return p.length?`${__t(135)}${p.map(m=>`<li><b>${nt(m.est)}</b>${Rn(m.fam)}<span>${Ei(m.dest,m.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Ni=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Wg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Ni))}catch{}},lp=o=>!!o&&Ni.some(c=>c.num===String(o.num)),ye=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),Ss=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(ye))}catch{}},Ul=(o,c)=>!!(ye&&o&&ye.num===String(o.num)&&ye.sid===T[o.pat.stops[c]].id);function Fl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Ke(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function Xg(){if(!ye||ye.done)return;let o=ee();if(!o.live)return;let c=t.days.indexOf(o.ymd),p=(et[c]||[]).find(D=>String(D.num)===ye.num)||(et[c-1]||[]).find(D=>String(D.num)===ye.num);if(!p)return;let m=p.pat.stops.findIndex(D=>T[D].id===ye.sid);if(m<0)return;let y=mt(p),M=typeof y=="number"?Math.max(0,y/60):0,I=p.day===c-1?1440:0,N=p.t0+p.pat.t[2*m]+M-I;if(N-o.min<-3){ye.done=!0,Ss();return}if(window.__schedAt&&N-2-o.min>.1&&(ye.sch==null||Math.abs(ye.sch-N)>=.5)&&(ye.sch=N,ye.nat=Date.now()+(N-2-o.min)*6e4,Ss(),window.__schedAt(7701,`${__t(136)}${T[p.pat.stops[m]].n}`,__t(137)+` (${nt(N)})`+(D=>D?` \xB7 ${__t(138)} ${D.fam} ${__t(139)} ${nt(D.est)}${D.plat?__t(140)+D.plat:""}`:"")(Vl.get(ye.sid)),Date.now()+(N-2-o.min)*6e4)),N-o.min<=2){ye.done=!0,Ss();let D=Vl.get(ye.sid),B=D?` \xB7 ${D.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${D.fam} ${__t(139)} ${nt(D.est)}${D.plat?__t(140)+D.plat:""}`:"",H=Math.round(N-o.min),E=(H>=1?`${__t(144)} ${H}${__t(143)}${nt(N)}) \xB7 ${__t(145)}`:`${__t(146)} (${nt(N)}) \xB7 ${__t(145)}`)+B;window.__schedAt&&ye.nat&&Date.now()>=ye.nat-2e4?document.hidden||Fl(`${__t(136)}${T[p.pat.stops[m]].n}`,E):(window.__schedOff&&window.__schedOff(7701),Fl(`${__t(136)}${T[p.pat.stops[m]].n}`,E))}}function Pu(o,c){let p=+o.t.slice(0,2)*60+ +o.t.slice(3,5),m=et[c]||[],y=(N,D)=>N.t0+N.pat.t[2*D+1],M=null,I=11;for(let N of m){let D=N.pat.stops.findIndex(H=>T[H].id===o.sid);if(D<0||D===N.pat.stops.length-1)continue;let B=Math.abs(y(N,D)-p)+(String(N.num)===o.num?-5:0)+(N.fam===o.fam?0:20)+(o.dest&&T[N.pat.stops[N.pat.stops.length-1]].id!==o.dest?3:0);B<I&&(I=B,M=N)}return M}let Ol=new Set;function qg(){if(!Ni.length)return;let o=ee();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let p of Ni){let m=Pu(p,c);if(!m)continue;let y=m.pat.stops.findIndex(H=>T[H].id===p.sid);if(y<0)continue;let M=m.t0+m.pat.t[2*y+1],I=mt(m),N=typeof I=="number"?I/60:0,D=M-o.min;if(D<-2||D>60)continue;let B=o.ymd+p.num+(I==="X"?"X":N>=10?10:N>=5?5:0);Ol.has(B)||(I==="X"||N>=5?(Ol.add(B),Fl(`${__t(147)}${nt(M)} ${I==="X"?__t(148):`${__t(149)}${Math.round(N)} min`}`,`${m.fam} ${m.num}${__t(150)}${T[m.pat.stops[y]].n}${I==="X"?"":`${__t(151)}${nt(M+N)}`}`)):D<=20&&!Ol.has(o.ymd+p.num+"ok")&&V.vp.has(m.tid)&&(Ol.add(o.ymd+p.num+"ok"),Ke(`${__t(147)}${nt(M)}${__t(152)}`)))}}setInterval(()=>{try{Xg(),qg()}catch{}},15e3);let Rn=o=>`<span class="ln" style="--c:${X[o]}">${g(o)}</span>`;{let o=p=>{let m=/^#?([0-9a-f]{6})$/i.exec(p||"");return m?[0,2,4].map(y=>{let M=parseInt(m[1].slice(y,y+2),16)/255;return M<=.03928?M/12.92:Math.pow((M+.055)/1.055,2.4)}).reduce((y,M,I)=>y+M*[.2126,.7152,.0722][I],0):0},c=[...new Set(Object.values(X))].filter(p=>o(p)>.3).map(p=>`.ln[style*="--c:${p}"],[data-f][style*="--c:${p}"].on,[data-f][style*="--c:${p}"]:not(.off){color:#14203a!important}`).join("");if(c){let p=document.createElement("style");p.textContent=c,document.head.appendChild(p)}}function cp(o,c){return c?o==="X"?__t(154):o>=60?`<span class="st late ${Di(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function Lu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),p=d.getBoundingClientRect().top-d.scrollTop,m=c?c.getBoundingClientRect().bottom-p+3:150;if(c){let y=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;y&&(m=Math.min(m,y.getBoundingClientRect().top-p-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,m)))+"px")}function Ms(){try{let o=d,c=document.getElementById("rcgrab"),p=document.getElementById("z");if(!o||!ze.on||ze.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(f=>o.style.removeProperty(f)),o._fit=0);return}let y=o.getBoundingClientRect().top,M=c.getBoundingClientRect().top-8,I=Math.max(140,Math.floor(M-y)),N=p&&p.getClientRects().length?p.getBoundingClientRect():null,D=N?Math.max(10,Math.ceil(innerWidth-N.left+8)):10;o._fit=I+"|"+D;let B=o.style,H={"max-height":I+"px",height:"auto",bottom:"auto",width:"auto",right:D+"px"};for(let f in H)(B.getPropertyValue(f)!==H[f]||B.getPropertyPriority(f)!=="important")&&B.setProperty(f,H[f],"important")}catch{}}setInterval(()=>{ze.on&&ze.cur==="map"&&Ms()},700);try{new MutationObserver(()=>Ms()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Ms;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=m=>{let y=document.querySelector(m);if(!y||!y.getClientRects().length)return"\u2014";let M=y.getBoundingClientRect();return[M.left,M.top,M.right,M.bottom].map(Math.round).join(",")},p=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${ze.on?ze.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${p.maxHeight} ov ${p.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Ms,80));try{new ResizeObserver(()=>Ms()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Ms,80));function Ue(){try{Yg()}finally{requestAnimationFrame(Ms),window.__rodTabSync&&window.__rodTabSync();try{Lu()}catch{}}}function Yg(){if(!Mt&&me<0&&!_e&&!Ft&&!Ct&&!Jt){cr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Gu();return}let o=ee(),c="",p=w()&&o.live,m=(f,E)=>V.alerts.filter(L=>[...L.fams].some($=>f.has($))||E!=null&&L.stops.has(E)),y=f=>f.length?`<div class="al">${f.slice(0,4).map(E=>`<p>\u26A0\uFE0F ${Ka(E)} ${[...E.fams].sort(F).slice(0,6).map(Rn).join(" ")} ${g(E.txt)} <small>${Qa(E)}</small></p>`).join("")}${f.length>4?`<small>y ${f.length-4}${__t(157)}`:""}</div>`:"",M=Mt&&p?ae.find(f=>f.real&&(Mt.vtid?f.v.tid===Mt.vtid:f.tr===Mt)):null;if(Jt&&!Ct&&!Ft&&!_e&&!Mt&&me<0)c=Og(Jt);else if(Ct)c=Fg();else if(Ft)c=`${__t(158)}${g(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(_e){let f=V.alerts.filter(E=>[...E.fams].some(L=>ut.has(L))||!E.fams.size);c=`${__t(161)}${f.length}${__t(162)}${f.map(E=>`<div class="al"><p>${Ka(E)} ${[...E.fams].sort(F).map(Rn).join(" ")} <small>${Qa(E)}</small></p><p>${g(E.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(165):`${__t(166)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(M){let f=M.v,E=M.tr,L=we=>g(T[E.pat.stops[we]].n),$=E?E.pat.stops.length:0,rt=Wt.get(f.sid),ht=rt!=null?g(T[rt].n):g(f.sid),J=E&&f.atStop>=0?L(f.atStop):"",ft=E&&f.next>=0?L(f.next):ht,Z=E&&f.next>0?L(f.next-1):"",le=M.broke||ap(M),Me=le?`<b class="stopv">\u26A0\uFE0F ${le.why==="aviso"?__t(167):`${__t(168)}${le.min} min`}</b>${E&&Z?`${__t(169)}${Z}${__t(170)}${ft}</b>`:""}`:M.stop==="via"&&E?`${__t(171)}${Z?`${__t(173)}${Z}${__t(170)}${ft}</b>`:`${__t(174)}${ft}</b>`}${__t(172)}${Math.max(1,Math.round(f.still/60))} min`:f.pre&&E?f.prevTr?`${__t(175)}${g(f.prevTr.num)}${__t(176)}${L(0)}</b>${f.prevDl>=1?`${__t(179)}${Math.round(f.prevDl)} min</b>`:""}${__t(177)}${nt(f.arrO)}${__t(178)}${nt(f.depEst)}</b>${f.preDl>=1?`${__t(180)}${nt(f.dep0)})`:""}`:`${__t(181)}${L(0)}${__t(182)}${nt(f.dep0+M.dl)}</b>`:J&&f.before?`Llegando a <b>${J}</b>`:(f.st==="STOPPED_AT"||M.stop==="st")&&J?`${__t(183)}${J}</b>`:J&&f.next>=0&&f.atStop!==f.next?`${__t(184)}${J}${__t(176)}${ft}</b>`:Z?`${__t(185)}${Z}${__t(170)}${ft}</b>`:`${__t(186)}${ft}</b>`,Zt=E&&f.next>=0&&!f.pre?nt(io(E,f,f.next,E.t0+E.pat.t[2*f.next]+M.dl)):"",ke=[];if(E){let we=M.idx>=0?M.idx:0,Ie=f.pre?Math.max(M.dl,f.preDl||0):M.dl,Ze=Ge=>E.t0+E.pat.t[Ge]+Ie;for(let Ge=we;Ge<$;Ge++)ke.push(`<li class="${Nl(E.pat.stops[Ge])?"mine":""}${Ul(E,Ge)?" alm":""}"><b>${nt(io(E,f,Ge,Ze(Ge===0?1:2*Ge)))}</b><span title="${L(Ge)}">${Nl(E.pat.stops[Ge])}${L(Ge)}</span>${Ie>=1?`<em class="dl ${Di(Ie)}">${f.pre?"\u2248":""}+${Math.round(Ie)}</em>`:""}${Ge>0?`<button type="button" class="abtn" data-alarm="${Ge}" title="${__t(187)}">${Ul(E,Ge)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${M.c}"><button class="x" data-cx>\xD7</button><div>${Rn(M.fam)}${__t(188)}${g(E?E.num:f.num)}${__t(189)}${E?`<h3 class="rt"><span class="o" title="${L(0)}">${L(0)}</span><span class="ar">\u2192</span>${Ei(T[E.pat.stops[$-1]].n,E.fam)}</h3>`:""}
        <p>${Me}${Zt?`${__t(190)}${Zt}`:""}${f.plat&&f.st==="STOPPED_AT"&&J?`${__t(191)}${g(f.plat)}</b>`:""}</p><p>${f.pre&&f.prevTr?f.preDl>=1?`${__t(192)}${Math.round(f.preDl)}${__t(193)}`:__t(194):cp(V.delays.get(f.tid),V.delays.has(f.tid))}${(()=>{let we=E&&Ru(E.num);return we&&we.n>=2?`${__t(195)}${we.n}${__t(196)}${we.late?`${__t(197)} <b>${we.late} ${__t(198)} ${we.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${we.avg<.5?"0":"+"+Math.round(we.avg)} min</span>`:""})()}${(()=>{let we=E&&Iu(E.num);return we?`<span class="why" title="${g(we.txt)}">${we.why?__t(203)+g(we.why):__t(204)}</span>`:""})()}</p>
        <small>${f.pre?`${__t(205)}${ps(fu(M.age))}`:f.est?__t(206):`${__t(207)}${ps(fu(M.age))}${M.age>120?__t(208):""}`}</small>
        ${ke.length?`${M.dl>=1||f.pre&&f.preDl>=1?`${__t(209)}`:""}<ol class="stops">${ke.join("")}</ol>`:""}${y(m(new Set([M.fam])))}
        ${zl(E?E.num:f.num,"",M.fam)}${E?`<div class="rtb two"><button type="button" data-fav>${lp(E)?__t(210):__t(211)}</button><button type="button" data-follow>${$l(E)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(Mt&&p&&!Mt.pat)c=`${__t(214)}${g(Mt.num||Mt.vtid||"")}${__t(215)}`;else if(Mt){let f=Mt,E=f.pat,L=E.stops.length,$=mt(f),rt=typeof $=="number"?$/60:0,ht=t.days.indexOf(o.ymd),J=f.day===ht-1?1440:0,ft=o.min+J-f.t0-rt,Z=Os(f,ft),le=Ie=>f.t0+E.t[Ie]+rt,Me=Ie=>g(T[E.stops[Ie]].n),Zt=__t(216);Z&&(Zt=Z.moving?`${__t(217)}${Me(Z.next)}${__t(218)}${nt(le(2*Z.next))}`:Z.at===L-1?`${__t(219)}${Me(L-1)}</b>`:`${__t(183)}${Me(Z.at)}${__t(220)}${nt(le(2*Z.at+1))}`);let ke=Z?Z.next:0,we=[];for(let Ie=ke;Ie<L;Ie++)we.push(`<li class="${Nl(E.stops[Ie])?"mine":""}${Ul(f,Ie)?" alm":""}"><b>${nt(io(f,null,Ie,le(2*Ie)))}</b><span title="${Me(Ie)}">${Nl(E.stops[Ie])}${Me(Ie)}</span>${rt>=1?`<em class="dl ${Di(rt)}">+${Math.round(rt)}</em>`:""}${Ie>0?`<button type="button" class="abtn" data-alarm="${Ie}" title="${__t(187)}">${Ul(f,Ie)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${f.c}"><button class="x" data-cx>\xD7</button><div>${Rn(f.fam)}${__t(188)}${g(f.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${Me(0)}">${Me(0)}</span><span class="ar">\u2192</span>${Ei(T[f.pat.stops[L-1]].n,f.fam)}</h3>
        <p>${Zt}</p><p>${cp($,$!=null)}${(()=>{let Ie=Ru(f.num);return Ie&&Ie.n>=2?`${__t(195)}${Ie.n}${__t(196)}${Ie.late?`${__t(197)} <b>${Ie.late} ${__t(198)} ${Ie.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ie.avg<.5?"0":"+"+Math.round(Ie.avg)} min</span>`:""})()}${__t(221)}${nt(f.t0+E.t[1])}${__t(222)}${nt(f.t0+E.t[2*L-2])}${__t(223)}${rt>=1?__t(209):""}<ol class="stops">${we.join("")}</ol>${zl(f.num,"",f.fam)}<div class="rtb two"><button type="button" data-fav>${lp(f)?__t(210):__t(211)}</button><button type="button" data-follow>${$l(f)?__t(212):__t(213)}</button></div></div>`}else{let f=me,E=t.days.indexOf(o.ymd),L=[];wi.st!==f&&(wi.st=f,wi.f.clear());let $=Z=>(!X[Z]||ut.has(Z))&&(!wi.f.size||wi.f.has(Z));if(E>=0){let Z=(le,Me)=>{for(let Zt of le){if(!$(Zt.fam))continue;let ke=Zt.pat.stops.indexOf(f);if(ke<0||ke===Zt.pat.stops.length-1)continue;let we=mt(Zt),Ie=typeof we=="number"?we/60:0,Ze=Zt.t0+Zt.pat.t[2*ke+1]-Me;Ze+Ie<o.min-1||Ze>o.min+360||L.push({tr:Zt,t:Ze,dl:Ie,d:we,on:V.vp.has(Zt.tid),past:o.min>Zt.t0+Zt.pat.t[1]-Me+2})}};Z(et[E],0),E>0&&Z(et[E-1],1440)}L.sort((Z,le)=>Z.t+Z.dl-le.t-le.dl);let rt=T[f].id,ht=Ot.get(rt),J=(p||U()&&o.live)&&V.url;J&&(!ht||Date.now()-ht.at>pp())&&!ht?.loading&&(Ot.set(rt,{...ht||{},loading:!0,at:ht?ht.at:0}),Pt(ce(),"/departures.json?stationId="+rt).then(Z=>{Ot.set(rt,{at:Date.now(),d:Z}),me===f&&(d._h="",Ue())}).catch(()=>Ot.set(rt,{at:Date.now(),err:1})));let ft=J&&ht&&ht.d&&Array.isArray(ht.d.trains)&&ht.d.trains.length?ht.d.trains:null;if(ft){let Z=new Map([...V.vp.values()].map(Zt=>[String((pt.get(Zt.tid)||{}).num||Zt.num),Zt])),le=new Map(Yn(f).map(Zt=>[String(Zt.num),Zt])),Me=ft.filter(Zt=>$((Zt.line||{}).id||"")).slice(0,40).map(Zt=>{let ke=String(Zt.commercialNumber||Zt.technicalNumber||""),we=le.get(ke),Ie=we?nt(we.est):(Zt.departureDateHourSelectedStation||"").slice(11,16),Ze=(Zt.line||{}).id||"",Ge=Z.get(ke),xn=we?Math.round(we.dl)*60:Ge?V.delays.get(Ge.tid):null,gr=we&&(we.gone||!we.live&&we.est<o.min-1);return`<li class="go${gr?" old":""}${Ja({num:ke,tid:Ge?Ge.tid:""})?" sel":""}" data-gt="${g(ke)}|${Ge?g(Ge.tid):""}"><b>${g(Ie)}</b>${X[Ze]?Rn(Ze):`<span class="ln" style="--c:#6b7385">${g(Ze||"?")}</span>`}<span>${Ei((Zt.destinationStation||{}).name||"",Ze)}${Zt.trainObservations?` \xB7 <i>${g(Zt.trainObservations)}</i>`:""}${gr?` <small class="oldt">${we.gone?__t(225):__t(226)}</small>`:""}</span>${Zt.trainCancelled?__t(227):typeof xn=="number"&&xn>=60?`<em class="dl ${Di(xn/60)}">+${Math.round(xn/60)}</em>`:""}${Zt.platformSelectedStation?`${__t(228)}${g(Zt.platformSelectedStation)}</i>`:""}${Ge?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(T[f].n)}</h3>${rp(f)}${zl("",T[f].id,"")}${__t(229)}${Me||__t(231)}</ol>${op(f,o)}${y(m(T[f].fams,f))}${__t(230)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(T[f].n)}</h3>${rp(f)}${zl("",T[f].id,"")}
        <small style="margin-top:6px">${p&&V.url?__t(233):""}${__t(232)}${p?__t(234):__t(235)}</small>
        <ol>${L.slice(0,40).map(Z=>`<li class="go${Ja({num:Z.tr.num,tid:Z.tr.tid})?" sel":""}" data-gt="${g(Z.tr.num)}|${g(Z.tr.tid)}"><b>${nt(Z.t+Z.dl)}</b>${Rn(Z.tr.fam)}<span>${Ei(T[Z.tr.pat.stops[Z.tr.pat.stops.length-1]].n,Z.tr.fam)}</span>${Z.d==="X"?__t(227):Z.dl>=1?`<em class="dl ${Di(Z.dl)}">+${Math.round(Z.dl)}</em>`:""}${p?Z.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':Z.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${op(f,o)}${y(m(T[f].fams,f))}${__t(230)}`}let I=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())){let f=ht=>((ht&&ht.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),E=d.querySelector(".tc"),L=f(E),$=E?E.scrollTop:0;d.innerHTML=c,d._h=c,d.scrollTop=I;let rt=d.querySelector(".tc");rt&&$&&L&&f(rt)===L&&(rt.scrollTop=$)}if(d.style.display="flex",d.classList.toggle("min",cr),Gu(),innerWidth<=640){let f=d.querySelector(".tc");if(f&&!f.querySelector(".mn")){let E=document.createElement("button");E.type="button",E.className="mn",E.setAttribute("aria-label",__t(238)),E.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",E.onclick=$=>{$.stopPropagation(),d.classList.toggle("peek"),d.classList.contains("peek")&&(Hr="",d.querySelectorAll("details[open]").forEach(rt=>rt.open=!1)),d.scrollTop=0,d.querySelectorAll(".tc").forEach(rt=>rt.scrollTop=0),requestAnimationFrame(Ms),Lu(),E.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE"};let L=f.querySelector(".x");f.insertBefore(E,L?L.nextSibling:f.firstChild)}}else d.classList.remove("peek");let N=x("#rc");if(innerWidth<=640&&!N.classList.contains("min")&&!Ue.done&&(Ue.done=1,x("#rcgrab").click()),innerWidth<=640){let f=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(f+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-f-16)+"px"}else if(innerHeight<=500){let f=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(f+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-f-20+"px"}else d.style.top="",d.style.width=Ct?"390px":"300px",d.style.maxHeight="";Ms();let B=d.querySelector("[data-cx]");B&&(B.onclick=f=>{if(f.stopPropagation(),Ue.done=0,Ct||Ft||_e||Jt&&!Mt&&me<0){Ct=Ft=_e=!1,Mt||me>=0||(Jt=""),d._h="",Ue(),a();return}if(Mt&&ie.st>=0){let E=ie.st;ie.st=-1,Mt=null,Nt=null,me=E,Vn(),d._h="",Ue(),Se=0,a();return}if(Mt&&$l(Mt)){let E=Mt,L=[...cn],$=ye?{...ye}:null,rt=d.querySelector("[data-follow]");rt&&rt.click(),setTimeout(()=>Ke(`${__t(239)} \xB7 ${E.fam||""} ${E.num}`,{label:__t(240),fn:()=>{L.forEach(([ht,J])=>ui(ht,J)),$&&!ye&&(ye=$,Ss()),Ki("map"),fr({num:String(E.num),tid:E.tid&&V.vp.has(E.tid)?E.tid:"",tr:E}),Nt=Mt,d._h="",Ue(),Ee(!0),a()}}),0)}ie.st=-1,_e=!1,Ft=!1,Ct=!1,Mt=null,me=-1,Nt=null,Vn(),Ue(),Se=0,a()}),fp(d),d.querySelectorAll("[data-alarm]").forEach(f=>f.onclick=E=>{E.stopPropagation();let L=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!L)return;let $=+f.dataset.alarm,rt=T[L.pat.stops[$]].id;ye&&ye.num===String(L.num)&&ye.sid===rt?(ye=null,window.__schedOff&&window.__schedOff(7701),Ke(__t(241))):(ye={num:String(L.num),sid:rt,at:Date.now()},Ke(`${__t(242)}${T[L.pat.stops[$]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Ss(),d._h="",Ue()});{let f=d.querySelector("[data-fav]");f&&(f.onclick=E=>{E.stopPropagation();let L=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!L)return;let $=Ni.findIndex(rt=>rt.num===String(L.num));if($>=0)Ni.splice($,1),Ke(__t(243));else{let rt=[...Qe.st,...He.st,...It.st],ht=L.pat.stops.find(J=>rt.includes(T[J].id))??L.pat.stops[0];Ni.push({num:String(L.num),fam:L.fam,sid:T[ht].id,dest:T[L.pat.stops[L.pat.stops.length-1]].id,t:nt(L.t0+L.pat.t[2*L.pat.stops.indexOf(ht)+1])}),Ke(`${__t(244)}${L.fam}${__t(245)}${Ni[Ni.length-1].t}${__t(150)}${T[ht].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Wg(),d._h="",Ue(),Ee(!0)})}{let f=d.querySelector("[data-share]");f&&(f.onclick=()=>{let E=Jt,L=ae.filter(J=>(J.fam||J.tr&&J.tr.fam)===E),$=L.filter(J=>J.dl>=5).sort((J,ft)=>ft.dl-J.dl),rt=V.alerts.filter(J=>J.fams.has(E)),ht=`${E}${__t(247)}${nt(ee().min)}: ${L.length}${__t(248)}${$.length}${__t(249)}${$.length?" ("+$.slice(0,4).map(J=>`${J.tr?J.tr.num:J.v.num} +${Math.round(J.dl)}`).join(", ")+")":""}.${rt.length?__t(250)+rt[0].txt:__t(251)}`;navigator.share?navigator.share({text:ht}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(ht),Ke(__t(252)+ht.slice(0,60)+"\u2026"))})}{let f=d.querySelector("[data-cols]");f&&(f.onclick=()=>{mn.on=!mn.on,zg(),d._h="",Ue()})}d.querySelectorAll("[data-gs]").forEach(f=>f.onclick=()=>{let E=+f.dataset.gs;Ct=!1,window.__rodPickStation(E),Object.assign(s,{tx:T[E].w[0],ty:T[E].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(f=>f.onclick=E=>{E.stopPropagation();let L=f.dataset.sf;L?wi.f.has(L)?wi.f.delete(L):wi.f.add(L):wi.f.clear(),d._h="",Ue()}),d.querySelectorAll("[data-gt]").forEach(f=>f.onclick=()=>{ie.st=me;let[E,L]=f.dataset.gt.split("|"),$=pt.get(L);fr({num:E,tid:V.vp.has(L)?L:"",tr:$||null})}),d.querySelectorAll("[data-sethome]").forEach(f=>f.onclick=()=>Xu(me,f.dataset.sethome));let H=d.querySelector("[data-follow]");H&&(H.onclick=()=>{let f=$l(Mt);if(Nt=f?null:Mt,!f&&Mt&&Mt.num!=null){let E=Mt.pat.stops,L=String(Mt.num),$=null,rt=1e9;for(let ht of[Qe,He,It]){let J=Tn(ht);if(J==null||!E.includes(J)||ht===It&&!It.st.length)continue;let ft=Yn(J).find(Z=>String(Z.num)===L&&!Z.gone);ft&&ft.est<rt&&(rt=ft.est,$=ht)}$?ui($.key,L):[...cn.keys()].forEach(ht=>ui(ht,null)),Ee(!0)}if(f&&Mt&&Mt.num!=null){let E=String(Mt.num);[...cn].forEach(([L,$])=>{String($)===E&&ui(L,null)}),Dn.num===E&&(Dn.num=""),Et.tid===E&&(Et.tid="",Et.lock=!1,Et.manual=0,Et.quiet=Date.now()+10*6e4),ye&&ye.num===E&&(ye=null,Ss(),window.__schedOff&&window.__schedOff(7701)),Ee(!0)}Nt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ue(),a()})}window.__rodCard=Ue;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(Mt||me>=0||_e||Ft)&&(d._h="",Ue())},x("#ver").onclick=()=>{Ft=!0,Ct=!1,_e=!1,d._h="",Ue()};let Jg={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},Zg={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function hp(o){let c={vacio:1,lleno:2,petado:3}[o],p=c?[0,1,2].map(m=>`<rect x="${4+m*6}" y="${14-m*4}" width="4" height="${6+m*4}" rx="1" ${m<c?'fill="currentColor"':""}/>`).join(""):Jg[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${Zg[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`}let Bl=new Proxy({},{get:(o,c)=>hp(c)}),Hr="",jg=["vacio","lleno","petado",__t(253),"calor","abordo"],Kg=["gente","retraso","cancel","ascensor","via"],Qg={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},kl=o=>(V.tipos||Qg)[o]||o,Du=(o,c)=>(V.rep||[]).filter(p=>o&&p.num===String(o)&&!p.sid||c&&p.sid===String(c)&&!p.num||o&&c&&p.num===String(o)&&p.sid===String(c)),up=o=>{let c=Math.round((Date.now()+(V.repSkew||0)-o.at)/6e4);return c<1?__t(265):ps(c+" min")},Za=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function zl(o,c,p){if(!V.url||!V.repOk)return"";let m=Du(o,c),y=o?jg:Kg;return`<div class="crowd"><small>${hp("gente")} ${__t(267)}${m.length?"":__t(268)}</small>${m.map(M=>`<p><span>${Bl[M.kind]||"\u2022"} <b>${g(kl(M.kind))}</b> <small>${M.up>1?M.up+__t(269):""}${up(M)}</small></span>${Za.has(M.id)?"<small>\u2713</small>":`<button type="button" data-rv="${M.id}:1">${__t(270)}</button><button type="button" data-rv="${M.id}:-1">${__t(271)}</button>`}</p>`).join("")}
      <details data-ckd="${g(String(o||"")+"|"+String(c||""))}"${Hr===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(272):__t(273)}</summary><div class="ckb">${y.map(M=>`<button type="button" data-rk="${M}" data-rn="${g(o||"")}" data-rs="${g(c||"")}" data-rl="${g(p||"")}">${Bl[M]} ${g(kl(M))}</button>`).join("")}${__t(266)}`}async function dp(o,c){try{let m=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!m.ok){Ke(m.err||__t(274));return}if(m.id){Za.add(m.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Za].slice(-300)))}catch{}}Ke(c==="/vote"?__t(275):m.n>1?`${__t(276)}${m.n}${__t(277)}`:__t(278));let y=await Pt(ce(),"/reports.json");y&&y.items&&(V.rep=y.items),d._h="",Ue(),Ee(!0)}catch{Ke(__t(279))}}function fp(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Hr=c.open?c.dataset.ckd:Hr===c.dataset.ckd?"":Hr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=p=>{p.stopPropagation(),c.disabled=!0,Hr="",dp({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=p=>{p.stopPropagation();let[m,y]=c.dataset.rv.split(":");Za.add(+m);try{localStorage.setItem("rod_votes",JSON.stringify([...Za].slice(-300)))}catch{}dp({id:+m,v:+y},"/vote")})}let ja=0;function Ke(o,c){let p=x("#toast");if(p||(p=document.createElement("div"),p.id="toast",document.body.appendChild(p)),p.textContent=o,c){let m=document.createElement("button");m.type="button",m.className="tact",m.textContent=c.label,m.onclick=y=>{y.stopPropagation(),clearTimeout(ja),p.className="",c.fn()},p.appendChild(m)}if(p.className="on",clearTimeout(ja),ja=setTimeout(()=>{p.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),!p._tap){p._tap=1,p.onclick=()=>{clearTimeout(ja),p.className=""};let m=null,y=0;p.addEventListener("touchstart",M=>{m=M.touches[0].clientY,y=0,p.style.transition="none"},{passive:!0}),p.addEventListener("touchmove",M=>{m!=null&&(y=Math.min(0,M.touches[0].clientY-m),p.style.translate=`0 ${y}px`,p.style.opacity=String(Math.max(.2,1+y/80)))},{passive:!0}),p.addEventListener("touchend",()=>{p.style.transition="",p.style.translate="",p.style.opacity="",m!=null&&y<-25&&(clearTimeout(ja),p.className=""),m=null})}}function Ka(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(280):g(o.src)}</b>`:""}function Qa(o){if(!o.when)return"";let[c,p]=o.when.split("T"),m=yt(new Date),y=m.ymd.slice(0,4)+"-"+m.ymd.slice(4,6)+"-"+m.ymd.slice(6,8);if(c===y&&p){let M=Math.round(m.min-(+p.slice(0,2)*60+ +p.slice(3,5)));return M<1?__t(265):M<60?ps(M+" min"):`${__t(281)}${p.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${p?" "+p.slice(0,5):""}`}function Nu(){let o=x("#alr");if(!o)return;let c=V.alerts.filter(p=>[...p.fams].some(m=>ut.has(m))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(282):__t(283)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{Ft=!1,Ct=!1,_e=!0,Ue()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(284)}catch{let p=document.createRange();p.selectNodeContents(x("#wcode"));let m=getSelection();m.removeAllRanges(),m.addRange(p),x("#wcopy").textContent=__t(285)}setTimeout(()=>x("#wcopy").textContent=__t(286),2500)};let t_=Wt.get("71801");function pp(){return document.hidden?cn.size||ye?12e4:1e12:3e4}function mp(o,c){let p=T[o].id,m=Ot.get(p);!(q()&&V.url)||m&&(m.loading||Date.now()-m.at<pp())||(Ot.set(p,{...m||{},loading:!0,at:m?m.at:0}),Pt(ce(),"/departures.json?stationId="+p).then(y=>{Ot.set(p,{at:Date.now(),d:y}),c&&c()}).catch(()=>Ot.set(p,{at:Date.now(),err:1})))}let gp=o=>+o.slice(0,2)*60+ +o.slice(3,5),to={k:-2,m:null};function bs(o){let c=t.days.indexOf(ee().ymd);if(to.k!==c){to.k=c,to.m=new Map;for(let p of et[c]||[])to.m.set(String(p.num),p)}return to.m.get(String(o))||null}let Ui={at:0,m:new Map},eo=o=>w()?(no(""),[...o].filter(c=>{let p=Ui.m.get(c);return p&&p[0]>=2&&p[1]===0}).sort(F)):[];function no(o){if(Date.now()-Ui.at>6e4||Ui.vp!==V.vp){Ui.at=Date.now(),Ui.vp=V.vp,Ui.m=new Map;let p=ee(),m=t.days.indexOf(p.ymd);if(m>=0)for(let y of et[m]){let M=p.min-y.t0;if(M<y.pat.t[1]+3||M>y.pat.t[y.pat.t.length-2]-3)continue;let I=Ui.m.get(y.fam)||[0,0];I[0]++,V.vp.has(y.tid)&&I[1]++,Ui.m.set(y.fam,I)}}let c=Ui.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function io(o,c,p,m){let y=T[o.pat.stops[p]].id;if([...Qe.st,...He.st].includes(y)){let M=Yn(o.pat.stops[p]).find(I=>String(I.num)===String(o.num));if(M&&!M.gone)return M.est}return Uu(o,c,p,0,m)}function _p(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let p=Date.now()/1e3-c.ts;if(p>150||p<-30||(c.still||0)>=90)return null;let m=te(o.pat).stopD,y=o.pat.t,M,I,N=m.reduce((D,B,H)=>Math.abs(B-c.dObs)<Math.abs(m[D]-c.dObs)?H:D,0);if(Math.abs(m[N]-c.dObs)<.16||c.atStop===N)M=y[2*N+1]??y[2*N],I=N;else{let D=m.findIndex(H=>H>c.dObs);if(D<=0)return null;let B=Math.min(1,Math.max(0,(c.dObs-m[D-1])/(m[D]-m[D-1]||1)));M=y[2*D-1]+B*(y[2*D]-y[2*D-1]),I=D-1}return{t:yt(new Date).min-p/60,tpos:M,j0:I,sd:m}}function Uu(o,c,p,m,y){let M=_p(o,c);if(!M||p<=M.j0&&!(p===M.j0&&m===1))return y;let I=o.pat.t,N=M.t+(I[2*p+m]??I[2*p])-M.tpos;if(N-M.t>45)return y;let D=(y%1440+1440)%1440,B=((N-D+720)%1440+1440)%1440-720;return B>=-3&&B<=5?y+B:y}function f1(o,c,p,m){let y=_p(o,c);if(!y)return null;let M=Uu(o,c,p,1,y.t+o.pat.t[2*p+1]-y.tpos);return M-m.min>30||M<m.min-1?null:M}function Yn(o,c){let p=ee(),m=(w()||U())&&p.live&&!c,y=Ot.get(T[o].id),M=[],I=new Map([...V.vp.values()].map(D=>[String((pt.get(D.tid)||{}).num||D.num),D]));if(m&&y&&y.d&&Array.isArray(y.d.trains)&&y.d.trains.length)for(let D of y.d.trains){let B=(D.departureDateHourSelectedStation||"").slice(11,16);if(!B)continue;let H=String(D.commercialNumber||D.technicalNumber||""),f=I.get(H),E=f?V.delays.get(f.tid):null,L=Math.max(typeof E=="number"?Math.max(0,E/60):0,f&&f.pre&&f.preDl||0),$=gp(B);$<p.min-720&&($+=1440);let rt=+(D.departureDateHourSelectedStation||"").slice(17,19)||0,ht=$+rt/60,J=f&&pt.get(f.tid)||bs(H),ft=J?J.pat.stops.indexOf(o):-1,Z=ft>=0?(J.t0+J.pat.t[2*ft+1])%1440:null;if(Z!=null){for(;Z<ht-720;)Z+=1440;for(;Z>ht+720;)Z-=1440;Math.abs(ht-Z)>120&&(Z=null)}let le,Me;Z==null?(le=rt||!L?ht:ht+L,Me=rt?0:L):rt||Math.abs(ht-Z)>=1?(le=ht,Me=Math.max(0,ht-Z)):(le=Z+L,Me=L);let Zt=!1;if(J&&!f&&ft>0&&!rt){let ke=t.days.indexOf(p.ymd),we=J.day===ke-1?1440:J.day===ke+1?-1440:0,Ie=J.t0+J.pat.t[1]-we;if(p.min<Ie){let Ze=Ie+(J.pat.t[2*ft+1]-J.pat.t[1]);Ze>le+1&&(le=Ze,Zt=!0,Z!=null&&(Me=Math.max(0,le-Z)))}}if(Z!=null&&($=Math.round(Z)),f&&J&&ft>=0){let ke=Uu(J,f,ft,1,le);ke!==le&&(le=Math.max(ke,p.min),Z!=null&&(Me=Math.max(0,le-Z)))}M.push({dubious:Zt,rodLive:!!rt,sm:$,est:le,dl:Me,fam:(D.line||{}).id||"",dest:(D.destinationStation||{}).name||"",destId:(D.destinationStation||{}).id||"",plat:D.platformSelectedStation||"",cancel:!!D.trainCancelled,obs:D.trainObservations||"",live:!!f,num:H,tid:f?f.tid:"",tr:f&&pt.get(f.tid)||bs(H),src:"oficial"})}else{let D=t.days.indexOf(p.ymd);if(D<0)return M;let B=(H,f)=>{for(let E of H){let L=E.pat.stops.indexOf(o);if(L<0||L===E.pat.stops.length-1)continue;let $=mt(E),rt=typeof $=="number"?Math.max(0,$/60):0,ht=E.t0+E.pat.t[2*L+1]-f;if(ht+rt<p.min-1||ht>p.min+(p.min>1080||p.min<300?600:360))continue;let J=E.pat.stops[E.pat.stops.length-1];M.push({sm:ht,est:ht+rt,dl:rt,fam:E.fam,dest:T[J].n,destId:T[J].id,plat:"",cancel:$==="X",obs:"",live:V.vp.has(E.tid),num:E.num,tid:E.tid,tr:E,src:"horario"})}};B(et[D],0),D>0&&B(et[D-1],1440),D+1<t.days.length&&p.min>1080&&B(et[D+1],-1440)}if(m){let D=new Set(M.map(f=>String(f.num))),B=t.days.indexOf(p.ymd),H=(f,E)=>{for(let L of f||[]){if(D.has(String(L.num)))continue;let $=L.pat.stops.indexOf(o);if($<0||$===L.pat.stops.length-1)continue;let rt=L.t0+L.pat.t[2*$+1]-E;if(rt<p.min-45||rt>p.min+1||!V.vp.get(L.tid))continue;let J=V.delays.get(L.tid),ft=typeof J=="number"?Math.max(0,J/60):0,Z=L.pat.stops[L.pat.stops.length-1];M.push({sm:rt,est:rt+ft,dl:ft,fam:L.fam,dest:T[Z].n,destId:T[Z].id,plat:"",cancel:!1,obs:"",live:!0,num:L.num,tid:L.tid,tr:L,src:"horario"})}};B>=0&&(H(et[B],0),B>0&&H(et[B-1],1440));for(let f of M){let E=f.tid&&V.vp.get(f.tid),L=f.tr?f.tr.pat.stops.indexOf(o):-1;f.passed=!!(E&&L>=0&&!E.pre&&E.next!=null&&E.next>=0&&E.next>L&&E.atStop!==L),!f.passed&&f.live&&f.est<p.min&&(f.est=p.min,f.late=!0),f.passed&&(f.gone=!0)}}let N=M.filter(D=>D.gone?p.min-D.est<20:D.est>=p.min-.5).sort((D,B)=>D.est-B.est);{let D=N.filter(B=>B.gone);if(D.length>2){let B=new Set(D.slice(0,D.length-2));N=N.filter(H=>!B.has(H))}}if(!N.filter(D=>!D.gone).length&&M.length&&M[0].src==="oficial"&&!c)return Yn(o,!0);for(let D of N){let B=D.num&&Iu(D.num);B&&B.cx&&(D.cancel=!0,D.cxWhy=B.txt)}if(w()&&p.live){let D=t.days.indexOf(p.ymd);for(let B of N){if(B.live||B.cancel||!B.tr)continue;let H=B.tr.day===D-1?1440:B.tr.day===D+1?-1440:0,f=B.tr.t0+B.tr.pat.t[1]-H+(B.dl||0);B.noPos=p.min>f+3&&!B.rodLive,B.ghost=B.noPos&&no(B.fam)>=.7}}if(c||(N=N.concat(A(o,p.min-.5,p.min+360)).sort((D,B)=>D.est-B.est)),!c&&N.some(D=>D.src==="oficial")){let D=M.filter(f=>f.src==="oficial"),B=Math.max(...D.map(f=>f.sm)),H=new Set(N.map(f=>String(f.num)));N=N.concat(Yn(o,!0).filter(f=>!f.gone&&f.sm<=B&&f.est>=p.min-.5&&!H.has(String(f.num))).map(f=>Object.assign(f,{unconf:!0}))).sort((f,E)=>f.est-E.est)}if(N.some(D=>D.src==="oficial")){let D=Math.max(...N.map(H=>H.sm)),B=new Set(N.map(H=>String(H.num)));N=N.concat(Yn(o,!0).filter(H=>H.sm>D&&!B.has(String(H.num))))}return N}let xp=(o,c,p,m)=>{let y={key:o,ico:c,name:p,st:[],i:0,walk:10,open:!1};try{let M=JSON.parse(localStorage.getItem("rod_"+o)||"null");M&&Object.assign(y,M)}catch{}return!y.st.length&&m&&(y.st=m),y},Qe=xp("home","\u{1F3E0}",__t(287),null),He=xp("work","\u{1F4BC}",__t(288),null),It={key:"near",ico:"\u{1F4CD}",name:__t(289),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},zs=[It,Qe,He];try{It.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Qe.open=!1,He.open=!1;function vp(o,c){let p=bt(o,c),m=bt(o,c+.009);return 1/Math.hypot(m[0]-p[0],m[1]-p[1])}function Fu(o){if(!navigator.geolocation){It.err=__t(290),Ee(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:p,latitude:m}=c.coords,y=bt(p,m),M=vp(p,m),I=T.map((H,f)=>[f,Math.hypot(H.w[0]-y[0],H.w[1]-y[1])*M]).filter(([H])=>T[H].fams.size).sort((H,f)=>H[1]-f[1]),N=I.filter(([,H],f)=>f===0||H<Math.max(2.5,I[0][1]*1.6)).slice(0,3),D=It.st[0]!==T[N[0][0]].id;It.w=y,It.k=M,It.acc=c.coords.accuracy!=null?c.coords.accuracy:999,It.st=N.map(([H])=>T[H].id),It.dist=Object.fromEntries(N.map(([H,f])=>[T[H].id,f])),It.fix=Date.now(),It.err="",D&&(It.i=0);let B=[Qe,He].find(H=>H.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5);Ee(!0)},c=>{It.err=c.code===1?__t(291):__t(292),Ee(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let yp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Fu(!0),400);let Et={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===yt(new Date).ymd&&(Et.tid=o.tid,Et.manual=o.manual||0,Et.lock=!!o.lock)}catch{}let Sp="";setInterval(()=>{let o=Et.tid+"|"+(Et.manual||0)+"|"+(Et.lock?1:0);if(o!==Sp){Sp=o;try{Et.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:Et.tid,manual:Et.manual||0,lock:!!Et.lock,at:Date.now(),ymd:yt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Dn={num:"",until:0};function $l(o){return!!o&&(Nt===o||o.num!=null&&([...cn.values()].some(c=>String(c)===String(o.num))||String(Et.tid)===String(o.num)))}let Mp=()=>{let o=new Set([...cn.values()].map(String));return Dn.num&&Dn.until>Date.now()&&o.add(Dn.num),o};function Ou(o,c){return!!o&&o.est-c.min<=3&&c.min-o.est<=20}function Bu(o){Ke(o?`${__t(293)} (${o})`:__t(293))}function so(o,c,p){o=String(o),Et.tid&&Et.tid!==o&&Et.no.set(Et.tid,Date.now()+20*6e4),Et.tid=o,Et.cand=null,Et.lock=c==="lock",Et.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...cn].forEach(([M,I])=>{String(I)!==o&&ui(M,null)}),Dn.num=o,Dn.until=Date.now()+90*6e4;let m=new Set;for(let M of zs){let I=Tn(M);I!=null&&(M.platAt||M.goAt||M===It&&It.st&&It.st.length)&&m.add(I)}for(let M of zs)(M.platAt||M.goAt||c!=="auto"&&M.open)&&(M.platAt=0,M.goAt=0,c!=="auto"&&(M.open=!1),hi(M));window.__lpAt=Date.now();let y=ae.find(M=>M.tr&&String(M.tr.num)===o)||C(ee()).out.find(M=>M.tr&&String(M.tr.num)===o);if(c!=="auto"){let M=y?y.tr:bs(o);if(M){Nt=M,Mt=M,me=-1,ze.sk="t"+(M.num||M.vtid),Ft=_e=Ct=!1,d._h="";try{Ue(),a()}catch{}}if(![...cn.values()].some(I=>String(I)===o)){let I=p||null,N=1e9;if(!I)for(let D of[Qe,He,It]){let B=Tn(D),H=B!=null?Yn(B).find(f=>String(f.num)===o&&!f.gone):null;H&&H.est<N&&(N=H.est,I=D.key)}I&&ui(I,o)}}if(y){Nt=y.tr;let M=y.tr.pat.stops,I=y.real?y.v.next:y.p.next,N=[...Qe.st,...He.st,...Vl.keys()],D=M.findIndex((B,H)=>H>=I&&!m.has(B)&&N.includes(T[B].id));D>0&&!(ye&&ye.num===o)&&(ye={num:o,sid:T[M[D]].id,at:Date.now()},Ss())}return y}function e_(){let o=Et.fixes;if(o.length<2)return;let c=o[o.length-1],p=o.slice().reverse().find(L=>c.t-L.t>=8e3&&c.t-L.t<=9e4);if(!p)return;let m=Math.hypot(c.w[0]-p.w[0],c.w[1]-p.w[1])*c.k,y=c.spd!=null&&c.spd>0?c.spd*3.6:m/((c.t-p.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(Et.tid&&!Et.lock&&y<8){if(!Et.slow)Et.slow=c.t;else if(c.t-Et.slow>9e4&&T.some(L=>L.w&&Math.hypot(L.w[0]-c.w[0],L.w[1]-c.w[1])*c.k<.35)){Et.tid="",Et.manual=0,Et.lock=!1,Et.slow=0,Et.quiet=Date.now()+10*6e4,Nt=null,Ee(!0);return}}else Et.slow=0;if(!Et.tid&&Et.quiet&&Date.now()<Et.quiet||Et.manual&&Date.now()<Et.manual)return;if(Et.tid){if(y<22)return;let L=ae.find($=>$.tr&&String($.tr.num)===Et.tid)||C(ee()).out.find($=>$.tr&&String($.tr.num)===Et.tid);if(L){if(Math.hypot(L.p.w[0]-c.w[0],L.p.w[1]-c.w[1])*c.k<=5){Et.far=0;return}if(Et.far||(Et.far=c.t),c.t-Et.far<12e4)return}Et.far=0}let M=Mp();if(!Et.tid&&M.size&&y>=15&&y<=200&&!(c.acc!=null&&c.acc>80))for(let L of[...ae.filter($=>$.real),...C(ee()).out]){if(!L.tr||!M.has(String(L.tr.num))||(Et.no.get(String(L.tr.num))||0)>Date.now())continue;if(Math.hypot(L.p.w[0]-c.w[0],L.p.w[1]-c.w[1])*c.k<=(L.real?1.6:2.2)){bp(L);return}}if(y<22||y>200)return;let I=[c.w[0]-p.w[0],c.w[1]-p.w[1]],N=null,D=2.5,B=ae.filter(L=>L.real),H=C(ee()).out.filter(L=>L.tr&&!B.some($=>$.tr&&String($.tr.num)===String(L.tr.num))),f=Mp();for(let L of[...B,...H]){if(!L.tr||f.size&&!f.has(String(L.tr.num)))continue;let $=L.real?2.5:3.5,rt=Math.hypot(L.p.w[0]-c.w[0],L.p.w[1]-c.w[1])*c.k;if(rt>Math.min(D,$)||N&&N.real&&!L.real)continue;let ht=L.real?L.v.next:L.p.next;if(ht==null||ht<0)continue;let J=T[L.tr.pat.stops[ht]].w,ft=[J[0]-L.p.w[0],J[1]-L.p.w[1]];if(ft[0]*I[0]+ft[1]*I[1]<=0)continue;let Z=String(L.tr.num);(Et.no.get(Z)||0)>Date.now()||(D=rt,N=L)}if(!N){Et.cand=null;return}let E=String(N.tr.num);if(Et.tid!==E&&!(c.acc!=null&&c.acc>50)){if(!Et.cand||Et.cand.k!==E){Et.cand={k:E,t:c.t};return}c.t-Et.cand.t<2e4||bp(N)}}function bp(o){let c=String(o.tr.num);so(c,"auto"),Ft=_e=Ct=!1,me=-1,Mt=o.tr,Nt=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click()),Vn(),d._h="",Ue(),Se=0,a();let p=x("#onb");p||(p=document.createElement("div"),p.id="onb",document.body.appendChild(p)),p.innerHTML=`${__t(294)}${g(o.tr.fam)} ${g(o.tr.num)}${__t(295)}${g(T[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(296)}${ye&&ye.num===c?`${__t(298)}${g(T[Wt.get(ye.sid)].n)}`:""}${__t(297)}`,p.className="on",p.querySelector("[data-onb-no]").onclick=()=>{Et.no.set(c,Date.now()+20*6e4),Et.tid="",Et.lock=!1,Nt=null,Mt=null,d._h="",Ue(),p.className=""},p.querySelector("[data-onb-x]").onclick=()=>{p.className=""},setTimeout(()=>{p.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=null,p=0,m=()=>!!(zs.some(D=>D.goAt)||p>Date.now()&&!Et.lock),y=D=>{let{longitude:B,latitude:H}=D.coords,f={t:D.timestamp||Date.now(),w:bt(B,H),k:vp(B,H),spd:D.coords.speed,acc:D.coords.accuracy};if(!(Et.fixes.length&&Et.fixes[Et.fixes.length-1].t===f.t)){Et.fixes.push(f),Et.fixes=Et.fixes.filter(E=>f.t-E.t<12e4);{let E=Et.fixes.find($=>f.t-$.t>=2e4),L=f.spd!=null&&f.spd>0?f.spd*3.6:E?Math.hypot(f.w[0]-E.w[0],f.w[1]-E.w[1])*f.k/((f.t-E.t)/36e5):0;L>=15&&L<250&&(f.acc==null||f.acc<300)&&(p=Date.now()+10*6e4)}try{ee().live&&e_()}catch{}}},M=0,I=()=>{if(!(o!=null||M))if(c=m(),c)o=navigator.geolocation.watchPosition(y,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let D=()=>navigator.geolocation.getCurrentPosition(y,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});D(),M=setInterval(D,6e4)}};setInterval(()=>{(o!=null||M)&&m()!==c&&(N(),I())},15e3);let N=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null),M&&(clearInterval(M),M=0)};setTimeout(I,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?N():(Et.fixes=[],I())})}setInterval(()=>{!document.hidden&&(Date.now()-It.fix>11e4||zs.some(o=>o.goAt))&&Fu(!1)},3e4);let hi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},Tn=o=>o.st.length?Wt.get(o.st[o.i]||o.st[0]):null;function wp(o,c,p,m){if(m&&c.bus)return c.bstops.slice(1).some(I=>m.has(I))?"to":"out";if(m&&c.tr){let I=c.tr.pat.stops,N=I.indexOf(o);if(N>=0&&I.slice(N+1).some(D=>m.has(D)))return"to"}if(m&&c.tr)return"out";let y=Wt.get(c.destId)??T.findIndex(I=>I.n===c.dest);if(y<0||y==null||p==null)return"otros";let M=I=>Math.hypot(T[I].w[0]-T[p].w[0],T[I].w[1]-T[p].w[1]);return M(y)<M(o)?"to":"out"}let ur=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Ep=0,n_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Tp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Ap=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,ro=o=>{let c=o.es||o.txt;return Tp.test(c)||Tp.test(o.txt)?3:Ap.test(c)||Ap.test(o.txt)||o.lvl>=2?2:1},Cp=4,ku=new Map,Vl=new Map;function Rp(o,c){let p=t.days.indexOf(ee().ymd),m=p+"|"+o+"|"+[...c].join(",");if(ku.has(m))return ku.get(m);let y=!1,M=new Set,I=new Set;for(let D of et[p]||[]){let B=D.pat.stops,H=B.indexOf(o);if(H>=0)for(let E=H+1;E<B.length;E++){if(c.has(B[E])){y=!0;break}M.add(B[E])}let f=-1;for(let E=1;E<B.length;E++)if(c.has(B[E])){f=E;break}if(f>0)for(let E=0;E<f;E++)I.add(B[E])}let N=y?null:[...M].filter(D=>I.has(D)&&D!==o&&!c.has(D));return ku.set(m,N),N}function zu(o,c,p,m){for(let y of m||Yn(o)){if(y.cancel||y.gone||!y.tr||y.est<c-.01)continue;let M=y.tr.pat.stops,I=M.indexOf(o);if(I<0)continue;let N=-1;for(let D=I+1;D<M.length;D++)if(p.has(M[D])){N=D;break}if(!(N<0))return{c:y,fin:y.est+(y.tr.pat.t[2*N]-y.tr.pat.t[2*I+1])}}return null}function i_(o,c,p){let m=zu(o,c+2,p,Yn(o));return m?{c:m.c,fin:m.fin,m:m.c.est-c,lost:!1}:null}function $u(o,c,p,m,y){let M=null,I=new Map,N=Yn(o).filter(D=>!D.cancel&&!D.gone&&D.tr&&D.est-y.min>=m).slice(0,8);for(let D of N){let B=D.tr.pat.stops,H=B.indexOf(o);if(!(H<0))for(let f of p){let E=B.indexOf(f);if(E<=H)continue;let L=D.est+(D.tr.pat.t[2*E]-D.tr.pat.t[2*H+1]);I.has(f)||I.set(f,Yn(f));let $=zu(f,L+Cp,c,I.get(f));$&&(!M||$.fin<M.finAt-.01||Math.abs($.fin-M.finAt)<.01&&D.est>M.x.est)&&(M={T:f,x:D,finAt:$.fin})}}return M}function s_(o,c,p,m,y){let M=c.T,I=Yn(M),N=c.fin,D=[];for(let f of I){if(D.length>=5)break;if(f.cancel||f.gone||!f.tr)continue;let E=f.tr.pat.stops,L=E.indexOf(M),$=-1;for(let J=L+1;J<E.length;J++)if(N.has(E[J])){$=J;break}if($<0||p.x&&p.x.arr!=null&&f.est<p.x.arr-.01)continue;let rt=f.est+(f.tr.pat.t[2*$]-f.tr.pat.t[2*L+1]),ht=m&&m.c===f;D.push(`<li class="hr${ht?" pin":""}" style="--lc:${X[f.fam]||"#6b7385"}"><span class="hrt"><b>${nt(f.est)}</b><small>${p.x&&p.x.arr!=null?f.est-p.x.arr<2?__t(299):Math.floor(f.est-p.x.arr)+" "+__t(300):""}</small></span><span class="hrd">${Ei(f.fam+" \xB7 "+f.dest,f.fam)}<small class="hro">${__t(301)} ${nt(rt)}${f.num?" \xB7 "+__t(302)+g(f.num):""}</small></span><span class="hrm">${f.dl>=1?`<em class="dl ${Di(f.dl)}">+${Math.round(f.dl)}</em>`:""}${f.plat?`${__t(228)}${g(f.plat)}</i>`:""}</span></li>`)}let B=(()=>{let f=[];for(let E of c.cands){let L=$u(Tn(o),N,[E],0,y);L&&f.push([E,L.finAt])}return f.sort((E,L)=>E[1]-L[1]),f.filter(([E,L])=>L<=f[0][1]+30||c.fixed&&E===M).slice(0,4)})(),H=B.length>1||c.fixed?`<div class="hxst"><span>${__t(303)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(304)}</button>${B.map(([f])=>`<button type="button" data-hxf="${o.key}:${g(T[f].id)}" class="${c.fixed&&f===M?"on":""}">${g(T[f].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(303)} ${Ei(T[M].n,m?m.c.fam:"")} \u2192 ${g(c.finName)}</div><ol class="hxl">${D.join("")||`<li class="hr"><span class="hrd">${__t(305)}</span></li>`}</ol>${H}</div>`}let Ip=new Set;function r_(o,c,p){Ip.has(o)||(Ip.add(o),zp(c,p,o))}function a_(o,c,p){let m=Tn(o);if(o===It){if(Et.tid)return"";if(m==null)return`${__t(306)}${It.err?g(It.err)+__t(307):__t(308)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Qe,He].find(Dt=>Dt.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5)||Date.now()-It.fix>10*6e4)return"";o.walk=yp(It.dist[o.st[o.i]]||0)}if(m==null){let tt=It.st.length?Wt.get(It.st[0]):null,Dt=o===He?Qe:He,$t=tt!=null&&!Dt.st.includes(It.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${$t?`${__t(309)}${g(T[tt].n)}</b>`:__t(310)}</small></span>${$t?`<button type="button" class="hpick" data-hnear="${o.key}${__t(311)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${$t?__t(312):__t(313)}</button></div></div>`}mp(m,()=>Ee(!0));let y=o===It?null:o===Qe?He:Qe,M=y?Tn(y):null,I=M!=null&&M!==m?M:t_,N=M!=null&&M!==m?y===He?__t(314):"casa":"Barcelona",D=T[m].fams,B=new Set([...D].filter(tt=>ut.has(tt))),H=B.size<D.size,f=!1;B.size||(B=new Set(D),H=!1,f=!0);let E=It.w?Math.hypot(T[m].w[0]-It.w[0],T[m].w[1]-It.w[1])*It.k:null,L=E!=null&&Date.now()-It.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,hi(o)),Et.tid&&o.platAt&&(o.platAt=0,hi(o));let $=o!==It&&!!o.platAt&&!Et.tid,rt=o===It||L&&E>3&&!o.goAt&&!$,ht=$||o!==It&&L&&(E<.08&&It.acc<=40||E<.15&&It.acc<=100&&Date.now()-It.fix<3*6e4)&&!(o===Qe&&It.homeW&&Math.hypot(It.homeW[0]-It.w[0],It.homeW[1]-It.w[1])*It.k<.05),J=o.goAt?(Date.now()-o.goAt)/6e4:null;J!=null&&(J>60||ht)&&(o.goAt=0,hi(o)),L&&o!==It&&It.fix!==o._khFix&&(o._khFix=It.fix,(o._kh=(o._kh||[]).filter(tt=>Date.now()-tt.t<6*6e4)).push({t:Date.now(),km:E}));let ft=L&&o!==It&&E<=3&&!(o._noWay>Date.now())&&(o._kh||[]).some(tt=>Date.now()-tt.t>=6e4&&Date.now()-tt.t<=5*6e4&&tt.km-E>=.08),Z=!ht&&o!==It&&(ft||!!o.goAt),le=Z?L&&E<=3?yp(E):Math.max(0,o.walk-J):0,Me=Yn(m),Zt=Me.filter(tt=>!X[tt.fam]||ut.has(tt.fam)||f),ke=rt||ht?0:Z?le:o.walk,we=V.alerts.filter(tt=>[...tt.fams].some(Dt=>B.has(Dt))||tt.stops&&tt.stops.has(m)),Ie=we.some(tt=>n_.test(tt.es||tt.txt)),Ze={to:[],out:[],otros:[],all:Zt},Ge=N!=="Barcelona"?new Set(y.st.map(tt=>Wt.get(tt)).filter(tt=>tt!=null)):null,xn=null;if(Ge&&o!==It){let tt=Rp(m,Ge);if(tt&&tt.length){let Dt=o.xfer!=null?Wt.get(o.xfer):null,$t=Dt!=null&&tt.includes(Dt)?[Dt]:tt,re=$u(m,Ge,$t,ke,c);re&&(xn=Object.assign(re,{fin:Ge,finName:T[I].n,cands:tt,fixed:Dt!=null&&tt.includes(Dt)}),mp(re.T,()=>Ee(!0)),I=re.T,Ge=new Set([re.T]))}}Zt.forEach(tt=>Ze[wp(m,tt,I,Ge)].push(tt));let gr="";if(Ge&&!Ze.to.length&&Zt.length<Me.length){let tt=Me.filter(Dt=>!Zt.includes(Dt)&&wp(m,Dt,I,Ge)==="to");tt.length&&(Ze.to=tt,gr=[...new Set(tt.map(Dt=>Dt.fam))].sort(F).join(", "))}let w_=tt=>{if(tt==="all")return __t(315);let Dt=re=>(re.find(fn=>fn.fam)||{}).fam;if(tt==="to")return __t(316)+Ei(N==="Barcelona"?"Barcelona":T[I].n,Dt(Ze.to)||[...B][0])+(()=>{let re=H&&!gr?[...B].filter(fn=>Ze.to.some(di=>di.fam===fn)).sort(F):[];return re.length?`<span class="hwf" title="${__t(317)}">${re.map(Rn).join("")}</span>`:""})();let $t=[];for(let re of Ze[tt])$t.some(fn=>fn[0]===re.dest)||$t.push([re.dest,re.fam]);return $t.length?__t(316)+$t.slice(0,2).map(([re,fn])=>Ei(re,fn)).join(" "):__t(318)},Qi=cn.get(o.key);Qi&&!Me.some(tt=>String(tt.num)===Qi&&!tt.gone)&&(Dn.num=Qi,Dn.until=Date.now()+90*6e4,ui(o.key,null));let Yr=tt=>{let Dt=Qi&&Ze[tt].find(pn=>String(pn.num)===Qi&&!pn.gone);if(Dt&&Dt.cancel)return{cls:"v-miss",pin:1,x:Dt,big:__t(319),small:`${nt(Dt.est)} \xB7 ${Dt.fam}${__t(320)}${Dt.dest}${Dt.num?" \xB7 "+__t(302)+Dt.num:""}`,warn:""};let $t=Dt||Ze[tt].find(pn=>!pn.cancel&&!pn.gone&&pn.est-c.min>=ke);if(!$t){let pn=Ze[tt].find(_r=>!_r.cancel);return pn&&!rt?{cls:"v-miss",big:__t(321),small:`${__t(322)}${nt(pn.est)}${__t(323)}${ur(pn.est-c.min)}${__t(324)}`}:{cls:"v-no",big:__t(325),small:__t(326)}}let re=$t.est-c.min-ke,fn=rt||ht?"v-info":Z?re<1.5?"v-warn":"v-ok":re<1.5?"v-bad":re<5?"v-warn":"v-ok",di=$t.ghost?Ze[tt].find(pn=>!pn.cancel&&!pn.ghost&&pn.live&&pn.est>$t.est):null;if(Dt&&re<0&&!rt&&!ht){let pn=Ze[tt].find(_r=>!_r.cancel&&!_r.gone&&!_r.ghost&&_r!==$t&&_r.est-c.min>=ke);return{cls:"v-miss",pin:1,miss:1,nxt:pn,x:$t,ghost:!!$t.ghost,big:__t(327),small:`${nt($t.est)} \xB7 ${$t.fam}${__t(320)}${$t.dest}${$t.plat?__t(140)+$t.plat:""}${$t.num?" \xB7 "+__t(302)+$t.num:""}`,warn:pn?`\u27A1\uFE0F ${__t(328)}: ${pn.est-c.min-ke<1?__t(329):__t(330)+" "+ur(pn.est-c.min-ke)} \xB7 ${nt(pn.est)}${pn.arr!=null?" \u2192 "+nt(pn.arr):""}${pn.plat?__t(140)+pn.plat:""}${pn.num?" \xB7 "+__t(302)+pn.num:""}`:""}}return{pin:Dt?1:0,cls:fn,ghost:!!$t.ghost,soft:!$t.live&&!$t.ghost&&!$t.unconf&&!$t.cancel?$t.rodLive?__t(331):__t(332):"",big:rt||ht?re<1?__t(333):__t(334)+ur(re):Z?re<1.5?__t(335):__t(336)+ur(re)+__t(337):re<1.5?__t(338):__t(339)+ur(re),warn:$t.unconf?"\u26A0\uFE0F "+__t(340):Dt&&!$t.live&&$t.rodLive&&!$t.ghost||!$t.ghost&&$t.noPos&&Dt?"":!$t.ghost&&$t.late&&Dt?__t(341):$t.ghost?`\u26A0\uFE0F ${__t(342)}${di?`${__t(343)}${nt(di.est)}`:""}`:Ie?__t(344):"",small:`${$t.bus?__t(345):""}${nt($t.est)} \xB7 ${$t.fam}${__t(320)}${$t.dest}${$t.plat?__t(140)+$t.plat:""}${$t.dl>=1?` \xB7 +${Math.round($t.dl)} min`:""}${$t.arr!=null?`${__t(346)}${nt($t.arr)}`:""}${$t.num?" \xB7 "+__t(302)+$t.num:""}`,x:$t}},E_=Ge||new Set([I]),T_=tt=>{let Dt=tt.tr;if(!Dt)return null;let $t=Dt.pat.stops,re=$t.indexOf(m);if(re<0)return null;let fn=-1;for(let di=re+1;di<$t.length;di++)if(E_.has($t[di])){fn=di;break}return fn<0?null:tt.est+(Dt.pat.t[2*fn]-Dt.pat.t[2*re+1])};Ze.to.forEach(tt=>{tt.arr=T_(tt)});let Zl=Ze.out.length?"out":"otros",je=Yr("to"),ho=Yr(Zl);if(ht||o===It&&It.acc<=40&&(It.dist[o.st[o.i]]||9)<.08){for(let tt of[je.x,ho.x].concat(o===It?[Yr("all").x]:[]))if(tt&&cn.has(o.key)&&String(cn.get(o.key))===String(tt.num)&&!tt.cancel&&tt.est-c.min<=2&&tt.est-c.min>-.5){let Dt="w"+tt.num+"|"+Math.round(tt.sm);kp.has(Dt)||(kp.add(Dt),Fl(`${__t(347)}${tt.fam}${__t(320)}${tt.dest}`,`${Math.round(tt.est-c.min)<=1?__t(348):__t(349)+Math.round(tt.est-c.min)+" min"}${__t(320)}${T[m].n}${tt.plat?__t(140)+tt.plat:""}`))}}let tm=w()&&c.live,em=B.size===1,A_=tt=>{let Dt=tt.est-c.min;return rt?tt.cancel?"cx":Dt<0?"u-miss":"u-info":tt.cancel?"cx":Dt<ke?"u-miss":Dt<ke+1.5?"u-now":Dt<ke+5?"u-soon":"u-ok"},C_=tt=>{if(tt.gone)return`<li class="hr u-gone${tt.live?" on":""}${Ja(tt)?" sel":""} go" data-dk="${p.push(tt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${nt(tt.est)}${__t(350)}${ps(Math.max(1,Math.round(c.min-tt.est))+" min")}</small></span><span class="hrd">${Ei((em?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${__t(351)}${g(tt.num)}</small></span><span class="hrm">${tt.dl>=1?`<em class="dl ${Di(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}</span></li>`;let Dt=!tt.cancel&&tt.est-c.min<ke,$t=Du(tt.num,"");return`<li class="hr ${A_(tt)}${tt.live?" on":""}${tt.ghost?" gh":""}${Ja(tt)?" sel":""}${Qi&&String(tt.num)===Qi?" pin":""}${Ni.some(re=>{let fn=Pu(re,t.days.indexOf(c.ymd));return fn&&String(fn.num)===String(tt.num)})?" fav":""} go" style="--lc:${X[tt.fam]||"#6b7385"}" data-dk="${p.push(tt)-1}" title="${tt.cancel?__t(319):Dt?__t(327):__t(352)}"><span class="hrt"><b>${tt.cancel?"\u2715":Dt?nt(tt.est):ur(tt.est-c.min)}</b><small>${tt.cancel?__t(353):tt.late?__t(354):Dt?__t(355):tt.ghost?__t(356):nt(tt.est)}</small></span><span class="hrd">${tt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ei((em?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${$t.length?`<i class="cr" title="${g($t.map(re=>kl(re.kind)).join(" \xB7 "))}">${$t.slice(0,2).map(re=>Bl[re.kind]).join("")}</i>`:""}${tt.arr!=null?`${__t(357)}${nt(tt.arr)}${tt.num?" \xB7 "+__t(302)+g(tt.num):""}${(()=>{let re=tt.num&&Ru(tt.num);return re&&re.n>=3&&re.late/re.n>=.5?`${__t(358)}${re.late}/${re.n})</b>`:""})()}</small>`:""}${tt.obs?`<small class="hro">${g(tt.obs)}</small>`:""}${tt.unconf?`<small class="hro unc">${__t(359)}</small>`:""}</span><span class="hrm">${!tt.cancel&&tt.dl>=1?`<em class="dl ${Di(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}${tt.plat?`${__t(228)}${g(tt.plat)}</i>`:""}</span></li>`},uo=(tt,Dt,$t)=>`<div class="hcol"><div class="hdir">${w_(tt)}${$t?`<button type="button" class="hhide" data-hhide="${o.key}:${$t}" title="${__t(360)}">\u2715</button>`:""}</div><div class="hv ${Dt.cls}${Dt.ghost||Dt.pin&&Dt.x&&Dt.x.noPos&&!eo([Dt.x.fam]).length?" gh":""}${Dt.x?" go":""}"${Dt.miss&&Dt.nxt&&Dt.nxt.num?` data-pinnext="${o.key}:${g(Dt.nxt.num)}" title="${__t(361)}"`:Dt.x?` data-dk="${p.push(Dt.x)-1}"`:""}><b>${Dt.big}</b>${Dt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(362)}">\u{1F4CC} ${__t(363)} \u2715</button>`:""}<small>${g(Dt.small)}${Dt.soft?` \xB7 <span class="hsoft" title="${__t(364)}">\u{1F4E1} ${g(Dt.soft)}</span>`:""}</small>${Dt.pin&&Dt.x&&Dt.x.num?(re=>re?`<span class="hwhere">\u{1F4CD} ${g(re)}</span>`:"")(Wl(Dt.x.num)):""}${Dt.warn?`<span class="hvw">${g(Dt.warn)}</span>`:""}</div><ol>${Ze[tt].slice(0,(o.more?tt==="all"||o.hide?20:10:tt==="all"?7:o.hide?8:4)+Ze[tt].filter(re=>re.gone).length).map(C_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===It){let tt=Yr("all");var R_=tt.x?`<span class="nw">${tt.big}</span> \xB7 <span class="nw"><b>${nt(tt.x.est)}</b> ${g(tt.x.fam)}${__t(365)}${g(tt.x.dest)}${tt.x.plat?'<span class="nw">'+__t(140)+g(tt.x.plat)+"</span>":""}`:tt.big}let en=xn&&je.x&&je.x.arr!=null?i_(xn.T,je.x.arr,xn.fin):null;if(en){let tt=o._xc;tt&&tt.leg===String(je.x.num)&&tt.conn!==String(en.c.num)&&tt.est<en.c.est&&tt.live?(en.lost=!0,en.missed=tt.est):(!tt||tt.leg!==String(je.x.num)||!tt.live||tt.conn===String(en.c.num))&&(o._xc={leg:String(je.x.num),conn:String(en.c.num),est:en.c.est,live:!!(V.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}en&&(Vl.set(T[xn.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&cn.get(o.key)===String(je.x.num)&&r_("xf"+je.x.num+"|"+en.c.num,`\u21C4 ${__t(366)} ${T[xn.T].n}`,`${__t(367)}: ${en.c.fam} ${nt(en.c.est)} \u2192 ${nt(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let ed=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(368)} ${nt(en.missed)} \xB7 ${__t(142)} `:`${g(T[xn.T].n)} \xB7 `}${Rn(en.c.fam)} <b>${nt(en.c.est)}</b> \u2192 <b>${nt(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(369)}`}</span>`:xn?`<br><span class="nw hxf xbad">\u21C4 ${__t(370)} ${g(T[xn.T].n)}</span>`:"",I_=o===It?R_:xn&&je.x?`<span class="nw">${je.big}${je.x.plat?__t(140)+g(je.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(je.x.est)}</b>${je.x.arr!=null?` \u2192 ${g(T[xn.T].n)} <b>${nt(je.x.arr)}</b>`:""}</span>${ed}`:je.x?`<span class="nw">${je.big}${je.x.plat?__t(140)+g(je.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(je.x.est)}</b>${je.x.arr!=null?`${__t(372)}${nt(je.x.arr)}</b>`:""}${__t(371)}${g(N)}</span>`:__t(373)+g(N),We=o===It?(tt=>tt.pin?tt:null)(Yr("all")):je.pin?je:ho.pin?ho:null;We&&We.x&&cn.has(o.key)&&$p(We,T[m].n);let P_=We?o===It?"all":We===je?"to":Zl:"",Jr=!!(We&&(We.ghost||We.x.noPos&&!eo([We.x.fam]).length||We.x.cancel)),nd=!!(We&&We.miss),Zr=Jr?Ze[P_].find(tt=>!tt.cancel&&!tt.ghost&&!tt.gone&&tt.est>We.x.est-.01&&tt!==We.x&&tt.est-c.min>=(rt||ht?0:ke)):null,L_=nd?`<span class="nw">${__t(374)} <b>${nt(We.x.est)}</b></span>${We.nxt?`<br><span class="nw hnx">${__t(367)} <b>${nt(We.nxt.est)}</b>${We.nxt.arr!=null?` \u2192 <b>${nt(We.nxt.arr)}</b>`:""}</span>`:""}`:"",D_=Jr?`<span class="nw">\u26A0\uFE0F ${We.x.cancel?__t(319):We.ghost?__t(375):__t(376)}</span>${We.x.cancel?"":` \xB7 <span class="nw"><b>${nt(We.x.est)}</b>${We.x.arr!=null?` \u2192 <b>${nt(We.x.arr)}</b>`:""}</span>`}${Zr?` \xB7 <span class="nw">${__t(142)} <b>${nt(Zr.est)}</b>${Zr.arr!=null?` \u2192 <b>${nt(Zr.arr)}</b>`:""}${Zr.plat?__t(140)+g(Zr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${We?" pinned":""}${Jr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${g(T[m].n)}${We&&We.x.num?`<i class="hpn">\u{1F4CC} ${g(We.x.num)}</i>`:""}</b>${o.open?xn&&ed?`<small class="nofit">${ed.replace(/^<br>/,"")}</small>`:"":`<small class="c${nd||Jr&&We.x.cancel?"bad":Jr?"warn":Ie?"bad":je.cls.slice(2)}">${Jr?D_:nd?L_:I_}</small>${We&&We.x&&We.x.num?(tt=>tt?`<small class="nofit hwh2">\u{1F4CD} ${g(tt)}</small>`:"")(Wl(We.x.num)):""}`}${o.open?"":(tt=>{if(!tt||tt.num==null)return"";let Dt=t.days.indexOf(c.ymd),$t=tt.tr,re=$t?$t.t0+$t.pat.t[1]-($t.day===Dt-1?1440:$t.day===Dt+1?-1440:0)+(tt.dl||0):null,fn=!tt.live&&!tt.ghost&&!tt.unconf&&re!=null&&re>c.min-1,di=tt.cancel?["bad",__t(319)]:tt.live?["ok",__t(377)]:fn?["wait",__t(378)]:["warn",__t(375)];return`<small class="nofit hrel ${di[0]}"><b>${di[1]}</b></small>`})(We&&We.x||je.x)}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody${o===It||o.hide==="out"||o.hide==="to"?" r1":""}">
        <div class="hst">${o.st.map((tt,Dt)=>{let $t=Wt.get(tt);return $t==null?"":`<button type="button" data-hs="${o.key}:${Dt}" class="${Dt===o.i?"on":""}"${Dt===o.i?` title="${__t(380)}"`:""}>${g(T[$t].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[$t].n)}${Dt===o.i?' <i class="hsi">\u24D8</i>':""}</button>`}).join("")}${o!==It?`<button type="button" class="hwt${o._wedit?" on":""}" data-hwt="${o.key}" title="${__t(381)}">\u{1F6B6} ${o.walk} min</button>`:""}</div>
        ${o===It?`<div class="hwalk">\u{1F4CD} A ${(()=>{let tt=It.dist[o.st[o.i]]||0;return tt<1?Math.round(tt*100)*10+" m":tt.toFixed(1).replace(".",",")+" km"})()}${__t(382)}${o.walk}${__t(383)}`:""}
        ${$?`<div class="hwalk away">${__t(385)}<a data-hplat="${o.key}${__t(384)}`:ht&&!Et.tid?`${__t(386)}${o.key}${__t(387)}`:Z?`${__t(388)}${Math.round(le)} min</b>${L&&E<=3?__t(389):""} \xB7 <a data-hgo="${o.key}:0">${__t(390)}</a></div>`:""}${rt&&o!==It?`${__t(391)}${E<10?E.toFixed(1).replace(".",","):Math.round(E)}${__t(392)}`:""}<div class="hwalk"${rt?" hidden":""}>${(()=>{let tt=Qi||(()=>{let re=(Ze.to.length?Ze.to:Zt).filter(fn=>fn.num!=null&&!fn.cancel&&fn.est>=c.min-4&&fn.est<=c.min+1).sort((fn,di)=>Math.abs(fn.est-c.min)-Math.abs(di.est-c.min));return re[0]?re[0].num:je&&je.x&&je.x.num})(),Dt=tt!=null?Me.find(re=>String(re.num)===String(tt)):null,$t=Ou(Dt,c);return(tt!=null&&!Et.tid?`<button type="button" class="hgo hboard${$t?"":" off"}" data-hboard="${g(String(tt))}"${$t?"":` data-hbwhen="${Dt?nt(Dt.est):""}"`}>\u{1F686} ${$t&&tt?`${__t(393)} ${g(String(tt))}`:__t(394)}</button>`:"")+(Qi?`<button type="button" class="hgo hmap" data-chmap="${g(String(Qi))}" title="${__t(395)}">\u{1F5FA}\uFE0F ${__t(396)}</button>`:"")})()}${ht||Et.tid?"":`<button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(397)}</button>`}<span class="hstep${o._wedit?"":" hid"}" title="${__t(381)}">${__t(398)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(399)}</span></div>
        ${(()=>{let tt=Ni.filter(Dt=>o.st.includes(Dt.sid));return tt.length?`<div class="hfav">${tt.map(Dt=>{let $t=Pu(Dt,t.days.indexOf(c.ymd)),re=$t&&Zt.find(fn=>String(fn.num)===String($t.num));return`\u2B50 <b>${Dt.t}</b> ${g(Dt.fam)} ${re?re.cancel?__t(400):re.gone?__t(225):re.dl>=1?`<em class="dl ${Di(re.dl)}">+${Math.round(re.dl)}${__t(401)}${nt(re.est)}`:__t(402):__t(403)}`}).join("<br>")}</div>`:""})()}
        ${H&&gr?`${__t(404)}${[...B].sort(F).map(Rn).join(" ")}${__t(405)}${N}${__t(406)}${gr}${__t(407)}`:f?`${__t(408)}${[...ut].sort(F).slice(0,3).map(Rn).join(" ")}${__t(409)}`:""}
        ${we.length?`<div class="hal ${Ie?"bad":""}${Yu.v?" open":""}" data-halx>\u26A0\uFE0F ${Ka(we[0])} ${g(we[0].txt)} <small>${Qa(we[0])}</small>${we.length>1?` <a data-hal>+${we.length-1}${__t(410)}`:""}</div>`:`${__t(411)}${[...B].sort(F).join(", ")}</div>`}
        ${(()=>{let tt=o.st.flatMap(Dt=>Du("",Dt));return tt.length?`<div class="hcr">${tt.slice(0,3).map(Dt=>`${Bl[Dt.kind]} <b>${g(kl(Dt.kind))}</b> <small>${Dt.up>1?Dt.up+__t(269):""}${up(Dt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===It?`<div class="hcols one">${uo("all",Yr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${uo("to",je)}</div><a class="hshow" data-hshow="${o.key}${__t(412)}`:o.hide==="to"?`<div class="hcols one">${uo(Zl,ho)}</div><a class="hshow" data-hshow="${o.key}${__t(412)}`:`<div class="hcols">${uo("to",je,"to")}${uo(Zl,ho,"out")}</div>`}
        ${xn?s_(o,xn,je,en,c):""}
        ${Zt.length>(o===It?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(413):__t(414)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${tm?Ot.get(T[m].id)?.d?__t(415):__t(416):__t(417)} \xB7 \u25CF = ${__t(418)}">${tm?Ot.get(T[m].id)?.d?__t(419):__t(420):__t(224)}</span><a data-hmap="${m}${__t(379)}${o===It?__t(421):`<a data-hset="${o.key}${__t(422)}`}${o===He?`${__t(423)}`:""}</div>
      </div>`:"")+"</div>"}let Fi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Pp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Lp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,dr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Hl=()=>{let o=new Set;return[...Qe.st,...He.st].forEach(c=>{let p=Wt.get(c);p!=null&&T[p].fams.forEach(m=>o.add(m))}),[...o].sort(F)},ao=()=>({stations:[...Qe.st,...He.st],lines:Hl().filter(o=>!dr.has(o))}),o_=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function Dp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Np(o){let p=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...ao()})})).json();if(!p.ok)throw new Error(p.err||"error")}function Vu(){let o=Tn(Qe),c=Tn(He);if(o==null||c==null)return o!=null?Qe:c!=null?He:null;if(It.w&&Date.now()-It.fix<3*36e5){let p=m=>Math.hypot(T[m].w[0]-It.w[0],T[m].w[1]-It.w[1]);return p(o)<=p(c)?Qe:He}return new Date().getHours()<13?Qe:He}function Up(o){let c=Vu(),p=c===Qe?He:Qe,m=c&&Tn(c),y=p&&Tn(p);if(m==null||y==null)return!0;let M=(o.es||"")+" "+(o.txt||""),I=t.days.indexOf(ee().ymd),N=ee(),D=[...new Set([...M.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(H=>H[1]))];if(D.length)return D.some(H=>{let f=bs(H);if(!f)return!1;let E=f.pat.stops,L=E.indexOf(m),$=E.indexOf(y);if(L<0||$<0||L>$)return!1;let rt=f.t0+f.pat.t[2*L+1];return rt>N.min-60&&rt<N.min+150});let B=M.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(B){let H=B[1].toLowerCase(),f=T.findIndex(E=>E.n&&H.startsWith(E.n.toLowerCase()));if(f>=0){let E=(et[I]||[]).find(L=>{let $=L.pat.stops;return $[$.length-1]===f&&$.includes(m)&&$.includes(y)});if(E){let L=E.pat.stops;return L.indexOf(m)<L.indexOf(y)}}}return!0}let Jn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function l_(){let{lines:o,stations:c}=ao(),p=new Set(o),m=new Set(c.map(I=>Wt.get(I))),y=V.alerts.filter(I=>([...I.fams].some(N=>p.has(N))||[...I.stops||[]].some(N=>m.has(N)))&&Up(I));if(!Jn.seen){try{Jn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Jn.seen=new Set}if(!Jn.seen.size){y.forEach(I=>Jn.seen.add(I.id+"|"+I.txt.length)),Fp();return}}let M=y.filter(I=>!Jn.seen.has(I.id+"|"+I.txt.length));if(M.length&&(M.forEach(I=>Jn.seen.add(I.id+"|"+I.txt.length)),Fp(),!(!Jn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let I of M.slice(0,3)){let N=(I.src==="Adif"?__t(280):"Rodalies")+(I.fams.size?" \xB7 "+[...I.fams].sort(F).slice(0,4).join(" "):""),D={body:I.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+I.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(N,D):new Notification(N,D)).catch(()=>{try{new Notification(N,D)}catch{}})}}function Fp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Jn.seen].slice(-400)))}catch{}}async function c_(){if(Jn.on)Jn.on=!1,Ke(__t(424));else{if(!("Notification"in window)){Ke(Pp&&!Lp()?__t(425):__t(426));return}if(await Notification.requestPermission()!=="granted"){Ke(__t(427));return}Jn.on=!0,Ke(__t(428)+ao().lines.join(", ")+__t(429))}try{localStorage.setItem("rod_ln",Jn.on?"1":"")}catch{}Ee(!0)}async function h_(){if(!V.repOk||document.documentElement.classList.contains("cap"))return c_();if(!Fi.busy){Fi.busy=!0;try{let o=await Dp();if(!o){Ke(Pp&&!Lp()?__t(430):__t(431));return}if(await navigator.serviceWorker.ready,Fi.on){let c=await o.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Fi.on=!1,Ke(__t(424))}else{if(!V.url){Ke(__t(432));return}if(await Notification.requestPermission()!=="granted"){Ke(__t(427));return}let p=(await Pt(ce(),"/push/key")).key,m=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:o_(p)});await Np(m),Fi.on=!0,Ke(__t(433)+ao().lines.join(", "))}try{localStorage.setItem("rod_push",Fi.on?"1":"")}catch{}}catch(o){Ke(__t(434)+(o.message||o))}finally{Fi.busy=!1,Ee(!0)}}}async function Op(){if(Fi.on)try{let o=await Dp(),c=o&&await o.pushManager.getSubscription();c&&await Np(c)}catch{}}let Hu=!1,Bp="";function Gu(){let o=Mt?"t"+(Mt.tid||Mt.vtid):me>=0?"s"+me:_e?"a":Ft?"n":"";o!==Bp&&(Hu=!1,Bp=o);let c=innerWidth<=640&&!!o&&!Hu&&!document.documentElement.classList.contains("tabmode"),p=x("#inf");p.classList.contains("compact")!==c&&(p.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let m=p.getBoundingClientRect().bottom;d.style.top=Math.round(m+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-m-16)+"px"}}))}let kp=new Set,Wu=(()=>{let o=yt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function zp(o,c,p){if(!(!(Jn.on||Fi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Ke(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(m=>m?m.showNotification(o,{body:c,tag:p,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function $p(o,c){let p=o.x,m=ee();if(!m.live||p.gone||p.est<m.min-1)return;let y=p.num+"|"+Math.round(p.sm),M=Wu[y]||{},I=`${__t(435)} ${nt(p.sm)}`,N=`${p.fam} \u2192 ${p.dest}`,D="",B="";p.cancel?M.c||(M.c=1,D=`\u26A0\uFE0F ${I} ${__t(148)}`,B=`${N}. ${__t(436)}`):o.ghost&&!M.g?(M.g=1,D=`\u26A0\uFE0F ${I} ${__t(437)}`,B=`${N}: ${__t(438)}`):p.dl>=5&&p.dl>=(M.dl||0)+5?(M.dl=Math.round(p.dl),D=`\u23F3 ${I} ${__t(439)} +${M.dl} min`,B=`${N}: ${__t(440)} ${c} ${__t(441)} ${nt(p.est)}.`):p.plat&&M.p&&M.p!==String(p.plat)&&(D=`${__t(442)}: ${I}`,B=`${N}: ${__t(443)} ${p.plat} ${__t(444)} ${M.p}).`),p.plat&&(M.p=String(p.plat)),Wu[y]=M;try{localStorage.setItem("rod_pn",JSON.stringify(Wu))}catch{}D&&zp(D,B,"pin-"+p.num)}let Gr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let p=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(p.length){if(c.classList.contains("col"))Gr.open=!0;else{Gr.open=!1,p.forEach(m=>Gr.seen.add(m));try{localStorage.setItem("rod_seen",JSON.stringify([...Gr.seen].slice(-200)))}catch{}}Ee(!0)}});function u_(o){let c=o.lines;if(!c.length&&It.st&&It.st.length){let f=new Set;It.st.forEach(E=>{let L=Wt.get(E);L!=null&&T[L].fams.forEach($=>f.add($))}),c=[...f].sort(F)}let p=new Set(c),m=V.alerts.filter(f=>!p.size||[...f.fams].some(E=>p.has(E))),y=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,M=m.reduce((f,E)=>Math.max(f,ro(E)),0),I=M===3?"\u26D4 ":M===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",N=`<div class="hnowh"><span class="hnowl"><b>${m.length?I+m.length+(m.length===1?__t(282):__t(283)):__t(445)}</b>${c.length?c.map(Rn).join(""):""}</span>${y}</div>`,D=m.filter(f=>!Gr.seen.has(f.id)),B=m.length&&(Gr.open||D.length>0),H=m.reduce((f,E)=>Math.max(f,ro(E)),0);return`<div class="hnow${H===3?" bad":H===2?" warn":H===1?" info":""}${m.length&&!B?" col":""}" data-nowx="${g(m.map(f=>f.id).join("|"))}">${N}${Gp(o,!0)}${B?m.slice().sort((f,E)=>ro(E)-ro(f)).map(f=>`<p class="sv${ro(f)}">${Ka(f)} ${g(f.txt)} <small>${Qa(f)}</small></p>`).join("")+`<small class="hnowt">${__t(446)}</small>`:""}</div>`}let cn=new Map((()=>{try{let o=yt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function Gl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(m,y)=>{m.style.fontSize=y===1?"":(m._f0*y).toFixed(1)+"px",m.querySelectorAll("b").forEach(M=>M.style.fontSize=y===1?"":(m._b0*y).toFixed(1)+"px")},p=1;for(let m of o){if(m.style.whiteSpace="",c(m,1),!m.clientWidth)continue;m._f0=parseFloat(getComputedStyle(m).fontSize);let y=m.querySelector("b");for(m._b0=y?parseFloat(getComputedStyle(y).fontSize):0;m.scrollWidth>m.clientWidth+1&&p>.86;)p-=.02,c(m,p)}if(p<1)for(let m of o)m._f0&&c(m,p);for(let m of o)m.scrollWidth>m.clientWidth+1&&(m.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Gl()}catch{}});let Vp=(o,c)=>{let p=o==="work"?He:o==="near"?It:Qe,m=p&&Tn(p);return m==null?null:Yn(m).find(y=>String(y.num)===String(c))||null};function ui(o,c){if(c&&!cn.size&&!Et.tid)try{let p=+(localStorage.getItem("rod_lptip")||0);p<2&&(localStorage.setItem("rod_lptip",p+1),setTimeout(()=>Ke(__t(447)),600))}catch{}if(c){for(let p of[...cn.keys()])p!==o&&cn.delete(p);cn.set(o,c)}else cn.delete(o);try{let p=yt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...cn].map(([m,y])=>[m,y,p])))}catch{}}let Hp=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return c>=0?" \xB7 "+ps(fu(Math.round(c))):""};function Wl(o){let c=ae.find(M=>M.tr&&String(M.tr.num)===String(o));if(!c){let M=bs(o),I=ee(),N=t.days.indexOf(I.ymd);if(!M)return"";let D=M.day===N-1?1440:0,B=M.t0+M.pat.t[1]-D;return B>I.min?__t(448)+T[M.pat.stops[0]].n+" ("+nt(B)+")":""}let p=c.tr,m=M=>T[p.pat.stops[M]].n;if(c.real){let M=c.v;return M.pre?__t(449):M.atStop>=0&&M.before?__t(450)+m(M.atStop):M.atStop>=0&&(M.st==="STOPPED_AT"||c.stop==="st")?Fe()?__t(451)+m(M.atStop):__t(452)+m(M.atStop)+Hp(M):!Fe()&&M.next>0?__t(453)+m(M.next-1)+__t(454)+m(M.next)+Hp(M):M.atStop>=0&&M.next>M.atStop?__t(455)+m(M.atStop)+__t(456)+m(M.next):M.atStop>=0?__t(457)+m(M.atStop):c.stop==="via"&&M.next>0?"\u23F8 "+__t(458)+m(M.next-1)+__t(454)+m(M.next):M.next>0?__t(185)+m(M.next-1)+__t(454)+m(M.next):M.next===0?__t(316)+m(0):""}let y=c.p&&c.p.next;return y>0?__t(459)+m(y-1)+__t(454)+m(y):""}let oo={k:"",v:null};function d_(o){let c=ee(),p=t.days.indexOf(c.ymd);if(p<0||!o.length)return null;let m=Vu(),y=(m&&Tn(m))??Tn(Qe)??Tn(He),M=c.ymd+o.join()+y;if(oo.k===M)return oo.v;oo.k=M;let I=new Set(o),N=y!=null?f=>et[f].filter(E=>{let L=E.pat.stops.indexOf(y);return L>=0&&L<E.pat.stops.length-1}).length:f=>et[f].filter(E=>I.has(E.fam)).length,D=f=>{let E=new Date(+f.slice(0,4),+f.slice(4,6)-1,+f.slice(6)).getDay();return E===0?0:E===6?6:1},B=N(p),H=Math.max(0,...t.days.map((f,E)=>E!==p&&D(f)===D(c.ymd)?N(E):0));return oo.v=H>=20&&B<H*.8?{n:B,ref:H,pct:Math.round(B/H*100),st:y!=null?T[y].n:""}:null,oo.v}function Gp(o,c){let p=o.lines||[],m=d_(p);if(!m)return"";let y=V.alerts.some(M=>[...M.fams].some(I=>p.includes(I))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((M.es||"")+" "+M.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${y?__t(460):__t(461)}</b>: ${m.st?`${__t(462)} ${g(m.st)} ${m.n} ${__t(463)} ${m.ref} ${__t(464)}`:`${__t(465)} ${m.n} ${__t(463)} ${m.ref} ${__t(464)}`} (${m.pct} %). ${y?__t(466):__t(467)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${y?__t(468):__t(469)}</b> \xB7 ${__t(470)}: ${m.st?`${__t(471)} ${g(m.st)} ${__t(472)} ${m.n} ${__t(198)} ${m.ref} ${__t(71)}`:`${m.n} ${__t(198)} ${m.ref} ${__t(473)} ${p.join(", ")}`} (${m.pct} % ${__t(474)}).</div>`}function f_(o){let c=eo(o.lines||[]);if(!c.length)return"";let p=[Qe,He].some(m=>{let y=Tn(m),M=y!=null&&Ot.get(T[y].id);return M&&M.d&&Array.isArray(M.d.trains)&&!M.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(475)} ${c.join(", ")}</b> ${__t(476)}${p?" \xB7 "+__t(477):""}: ${__t(478)}</div>`}function p_(o){if(!It.w)return[];let c=It.k||1;return ae.filter(p=>p.tr&&p.tr!==o&&p.p&&p.p.w&&Math.hypot(p.p.w[0]-It.w[0],p.p.w[1]-It.w[1])*c<3).sort((p,m)=>Math.hypot(p.p.w[0]-It.w[0],p.p.w[1]-It.w[1])-Math.hypot(m.p.w[0]-It.w[0],m.p.w[1]-It.w[1])).slice(0,2).map(p=>p.tr)}function m_(o){if(Et.tid)return"";let c=null,p=null;if(cn.size||(Nt&&Nt.num!=null&&(c=String(Nt.num)),!c))return"";let m=bs(c);if(!m)return"";let y=m.pat.stops,M=p?p==="work"?He:p==="near"?It:Qe:null,I=M?Tn(M):null,N=I!=null?Yn(I).find(ht=>String(ht.num)===c):null,D=M===Qe?He:M===He?Qe:null,B=D?Tn(D):null,H=I!=null?y.indexOf(I):-1,f=ye&&ye.num===c?y.indexOf(Wt.get(ye.sid)):-1;f<=H&&B!=null&&(f=y.indexOf(B,H+1));let E=N&&H>=0&&f>H?N.est+(m.pat.t[2*f]-m.pat.t[2*H+1]):null,L=N?Math.round(N.est-o.min):null,$=Wl(c),rt=N?`${N.gone?__t(479):__t(480)} ${g(T[I].n)} \xB7 <b>${nt(N.est)}</b>${N.gone?"":` (${L<=0?__t(265):L+" min"})`}${N.plat?__t(140)+g(N.plat):""}${E!=null?` \u2192 ${g(T[y[f]].n)} <b>${nt(E)}</b>`:""}`:g($||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${Rn(m.fam)} ${__t(302)}${g(c)} <span class="hlk">${__t(481)}</span></b><small class="nofit">${rt}</small>${N&&$?`<small class="nofit">\u{1F4CD} ${g($)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${g(c)}">\u{1F686} ${__t(394)}</button><button type="button" class="chmap" data-chmap="${g(c)}">\u{1F5FA}\uFE0F ${__t(395)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${g(c)}" aria-label="${__t(212)}">\u2715</button></div></div>`}function g_(o){let c;try{if(c=__(o),c!=null)return c}catch(y){console.error(y)}let p=Et.tid?bs(Et.tid):null,m=p?`${__t(482)} ${g(T[p.pat.stops[0]].n)} \xB7 ${nt(p.t0)}`:"";return Et.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(302)}${g(Et.tid)}${Et.lock?` <span class="hlk">${__t(483)}</span>`:""}</b>${m?`<small class="nofit">${m}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}function __(o){if(!Et.tid)return"";[...cn].forEach(([ht,J])=>{String(J)!==String(Et.tid)&&ui(ht,null)});let c=ae.find(ht=>ht.tr&&String(ht.tr.num)===Et.tid)||C(o).out.find(ht=>ht.tr&&String(ht.tr.num)===Et.tid);if(!c)return null;let p=c.tr,m=p.pat.stops,y=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(y==null){let ht=C(o).out.find(J=>J.tr&&String(J.tr.num)===Et.tid);y=ht&&ht.p&&ht.p.next>=0?ht.p.next:1}let M=mt(p),I=typeof M=="number"?Math.max(0,M/60):0,N=t.days.indexOf(o.ymd),D=p.day===N-1?1440:0,B=Et.fixes[Et.fixes.length-1],H=B&&Date.now()-B.t<9e4&&(B.acc==null||B.acc<150)?(()=>{let ht=-1,J=.35;return m.forEach((ft,Z)=>{let le=Math.hypot(T[ft].w[0]-B.w[0],T[ft].w[1]-B.w[1])*B.k;le<J&&(J=le,ht=Z)}),ht})():-1,f=ye&&ye.num===Et.tid?m.indexOf(Wt.get(ye.sid)):-1;if(f>0&&f<y&&H!==f&&!(H>=0&&H<f))return setTimeout(()=>{if(!Et.tid)return;let ht=Et.tid;Et.tid="",Et.lock=!1,Et.manual=0,Et.quiet=Date.now()+10*6e4,Nt&&String(Nt.num)===ht&&(Nt=null),[...cn].forEach(([J,ft])=>{String(ft)===ht&&ui(J,null)}),Dn.num===ht&&(Dn.num=""),Ee(!0)},0),"";f<y&&(f=m.length-1);let E=io(p,c.real?c.v:null,f,p.t0+p.pat.t[2*f]+I-D),L=E-o.min,$=c.real&&c.v.atStop>=0?c.v.atStop:-1,rt=H>=0?`${__t(484)} ${T[m[H]].n}`:Wl(p.num)||__t(316)+T[m[y]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Rn(p.fam)} ${__t(302)}${g(p.num)}${Et.lock?` <span class="hlk">${__t(483)}</span>`:""}</b><small class="nofit cok">${g(rt)} \xB7 <span class="nw">${__t(485)} ${g(T[m[f]].n)}</span> <span class="nw">${L>=1?__t(104)+ur(L)+" \xB7 ":""}<b>${nt(E)}</b>${I>=1?` <em class="dl ${Di(I)}">+${Math.round(I)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(486)}" title="${__t(486)}">\u2715</button>${(ht=>ht.length&&!(Et.manual&&Date.now()<Et.manual)?`<div class="onbch">${ht.map(J=>`<button type="button" class="onbalt" data-onbpick="${g(J.num)}">${__t(487)} ${g(J.num)}?</button>`).join("")}</div>`:"")(p_(p))}</div>`}let Xl={until:0};function Wp(){let o=Et.tid;if(o){Et.no.set(o,Date.now()+20*6e4),Et.tid="",Et.manual=0,Et.lock=!1,Et.quiet=Date.now()+10*6e4,Dn.num===o&&(Dn.num=""),[...cn].forEach(([c,p])=>{String(p)===o&&ui(c,null)}),ye&&ye.num===o&&(ye=null,Ss(),window.__schedOff&&window.__schedOff(7701)),Nt&&String(Nt.num)===o&&(Nt=null),Mt&&String(Mt.num)===o&&(Mt=null,ze.sk=""),d._h="";try{Ue(),a()}catch{}Ee(!0)}}function Xp(o){if(o.hasAttribute("data-onbx")){Wp();return}so(o.dataset.onbpick,"pick"),Ke(`${__t(488)} ${Et.tid}`),Ee(!0)}function Ee(o){let c=x("#home");if(!c)return;let p=performance.now();if(!o&&p-Ep<4e3||!o&&Xl.until>Date.now())return;Ep=p;let m=ee(),y=[],M=ao(),I=f=>{let E=Tn(f);return E==null||!It.w?1:Math.hypot(T[E].w[0]-It.w[0],T[E].w[1]-It.w[1])},N=[It,...[Qe,He].sort((f,E)=>I(f)-I(E))],D=(document.documentElement.classList.contains("tabmode")?u_(M):Gp(M))+f_(M)+g_(m)+m_(m)+N.map(f=>a_(f,m,y)).join("")+(zs.some(f=>f.open)&&M.lines.length,"");c.className=(zs.some(f=>f.open)?"open":"")+(Et.tid?" onb":"");let B=x("#bell");B||(B=document.createElement("button"),B.type="button",B.id="bell",B.onclick=h_,x("#inf .more").prepend(B));{let f=V.repOk&&!document.documentElement.classList.contains("cap")?Fi.on:Jn.on;B.hidden=!M.lines.length,B.className=f?"on":"",B.textContent=(f?__t(496):__t(497))+M.lines.join(", "),B.title=(f?__t(498):__t(499))+__t(67)+M.lines.join(", ")+(V.repOk?"":__t(500))}if(c._h===D)return;c._h=D,c.innerHTML=D,Gl(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{Xl.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{Xl.until=Date.now()+400},!0),c.addEventListener("click",f=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){f.stopPropagation(),f.preventDefault();return}let E=f.target.closest&&f.target.closest("[data-onbx],[data-onbpick]");E&&(f.stopPropagation(),Xl.until=0,Xp(E))},!0));{let f=c.querySelector("[data-onbgo]");f&&(f.onclick=E=>{if(E.target.closest("[data-onbx]")){Wp();return}let L=E.target.closest("[data-onbpick]");if(L){Xp(L);return}let $=ae.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid);$&&(Ft=_e=Ct=!1,me=-1,Mt=$.tr,d._h="",Ue())})}{let f=[...c.children].find(E=>E.classList.contains("hplace")&&!E.querySelector(".hnew"));f&&f.classList.add("lead")}let H=f=>f==="work"?He:f==="near"?It:Qe;c.querySelectorAll("[data-hloc]").forEach(f=>f.onclick=()=>{It.err="",Fu(!0)}),c.querySelectorAll("[data-ht]").forEach(f=>{let E=0,L=0,$=0,rt=()=>{clearTimeout(E),E=0,f.closest(".hplace")?.classList.remove("lpress")};f.addEventListener("pointerdown",ht=>{let J=f.dataset.ht,ft=cn.get(J);!ft||String(Et.tid)===String(ft)||(L=ht.clientX,$=ht.clientY,f.closest(".hplace")?.classList.add("lpress"),E=setTimeout(()=>{E=0,f.closest(".hplace")?.classList.remove("lpress"),f._lpDone=Date.now();let Z=Vp(J,ft);if(!Ou(Z,ee())){Bu(Z?nt(Z.est):"");return}let le=so(ft,"lock",J);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ke(`${__t(488)} ${le&&le.tr.fam||""} ${ft} \xB7 ${__t(483)}`),Ee(!0)},700))}),f.addEventListener("pointermove",ht=>{E&&Math.hypot(ht.clientX-L,ht.clientY-$)>10&&rt()}),["pointerup","pointercancel","pointerleave"].forEach(ht=>f.addEventListener(ht,()=>{E&&rt()})),f.addEventListener("contextmenu",ht=>ht.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(f=>f.onclick=()=>{if(f._lpDone&&Date.now()-f._lpDone<1500)return;if(x("#inf").classList.contains("compact")){Hu=!0,Gu();return}let E=H(f.dataset.ht);E.open=!E.open,hi(E),Ee(!0),(Mt||me>=0||_e||Ft)&&(d._h="",Ue())}),c.querySelectorAll("[data-hxf]").forEach(f=>f.onclick=E=>{E.stopPropagation();let[L,$]=f.dataset.hxf.split(":"),rt=H(L);rt.xfer=$||null,hi(rt),Ee(!0)}),c.querySelectorAll("[data-hs]").forEach(f=>f.onclick=()=>{let[E,L]=f.dataset.hs.split(":"),$=H(E);if($.i===+L){let rt=Tn($);rt!=null&&(Ki("map"),window.__rodPickStation(rt));return}$.i=+L,hi($),Ee(!0)}),c.querySelectorAll("[data-hwt]").forEach(f=>f.onclick=E=>{E.stopPropagation();let L=H(f.dataset.hwt);L._wedit=!L._wedit,clearTimeout(L._wT),L._wedit&&(L._wT=setTimeout(()=>{L._wedit=!1,Ee(!0)},6e3)),Ee(!0)}),c.querySelectorAll("[data-hw]").forEach(f=>f.addEventListener("click",()=>{let E=H(f.dataset.hw.split(":")[0]);clearTimeout(E._wT),E._wT=setTimeout(()=>{E._wedit=!1,Ee(!0)},6e3)},!0)),c.querySelectorAll("[data-hw]").forEach(f=>f.onclick=()=>{let[E,L]=f.dataset.hw.split(":"),$=H(E);$.walk=S($.walk+ +L,0,60),hi($),Ee(!0)}),c.querySelectorAll("[data-hmap]").forEach(f=>f.onclick=()=>{let E=+f.dataset.hmap;Ft=_e=Ct=!1,Mt=null,me=E,Vn(),Object.assign(s,{tx:T[E].w[0],ty:T[E].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ue(),a()}),c.querySelectorAll("[data-hset]").forEach(f=>f.onclick=()=>qp(f.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(f=>f.onclick=()=>{let E=Wt.get(It.st[0]);E!=null&&Xu(E,f.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(f=>f.onclick=()=>{let E=H(f.dataset.hmore);E.more=!E.more,Ee(!0)}),c.querySelectorAll("[data-hhide]").forEach(f=>f.onclick=E=>{E.stopPropagation();let[L,$]=f.dataset.hhide.split(":"),rt=H(L);rt.hide=$,hi(rt),Ee(!0)}),c.querySelectorAll("[data-hshow]").forEach(f=>f.onclick=()=>{let E=H(f.dataset.hshow);E.hide="",hi(E),Ee(!0)}),c.querySelectorAll("[data-hgo]").forEach(f=>f.onclick=E=>{E.stopPropagation();let[L,$]=f.dataset.hgo.split(":"),rt=H(L);rt.goAt=$==="1"?Date.now():0,rt.goAt?rt.platAt=0:rt._noWay=Date.now()+15*6e4,hi(rt),Ee(!0)}),c.querySelectorAll("[data-unchoose]").forEach(f=>f.onclick=E=>{E.stopPropagation();let L=f.dataset.unchoose;[...cn].forEach(([$,rt])=>{String(rt)===L&&ui($,null)}),Dn.num===L&&(Dn.num=""),Nt&&String(Nt.num)===L&&(Nt=null),ye&&ye.num===L&&(ye=null,Ss()),Mt&&String(Mt.num)===L&&(Mt=null,d._h="",Ue()),Ee(!0)}),c.querySelectorAll("[data-chmap]").forEach(f=>f.onclick=E=>{E.stopPropagation();let L=bs(f.dataset.chmap);L&&(Ki("map"),fr({num:String(L.num),tid:L.tid&&V.vp.has(L.tid)?L.tid:"",tr:L}),Nt=L)}),c.querySelectorAll("[data-hboard]").forEach(f=>f.onclick=E=>{if(E.stopPropagation(),f.classList.contains("off")){Bu(f.dataset.hbwhen);return}let L=so(f.dataset.hboard,"lock",f.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Ke(`${__t(488)} ${L&&L.tr.fam||""} ${f.dataset.hboard} \xB7 ${__t(483)}`),Ee(!0)}),c.querySelectorAll("[data-hplat]").forEach(f=>f.onclick=E=>{E.stopPropagation();let[L,$]=f.dataset.hplat.split(":"),rt=H(L);rt.platAt=$==="1"?Date.now():0,rt.platAt&&(rt.goAt=0),hi(rt),Ee(!0)}),c.querySelectorAll("[data-hnotst]").forEach(f=>f.onclick=E=>{E.stopPropagation(),It.homeW=It.w;try{localStorage.setItem("rod_homew",JSON.stringify(It.w))}catch{}Ee(!0)}),c.querySelectorAll("[data-hdel]").forEach(f=>f.onclick=()=>{He.st=[],He.open=!1,hi(He),Ee(!0),Op()}),c.querySelectorAll("[data-dk]").forEach(f=>{let E=0,L=0,$=0,rt=()=>{clearTimeout(E),E=0,f.classList.remove("lpress")};f.addEventListener("pointerdown",ht=>{let J=y[+f.dataset.dk];!J||J.num==null||!f.matches("li.hr, .hv")||(L=ht.clientX,$=ht.clientY,f.classList.add("lpress"),E=setTimeout(()=>{if(E=0,f.classList.remove("lpress"),f._lpDone=Date.now(),!Ou(J,ee())){Bu(J.est!=null?nt(J.est):"");return}let ft=so(J.num,"lock",f.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ke(`${__t(488)} ${ft&&ft.tr.fam||J.fam||""} ${J.num} \xB7 ${__t(483)}`),Ee(!0)},700))}),f.addEventListener("pointermove",ht=>{E&&Math.hypot(ht.clientX-L,ht.clientY-$)>10&&rt()}),["pointerup","pointercancel","pointerleave"].forEach(ht=>f.addEventListener(ht,()=>{E&&rt()})),f.addEventListener("contextmenu",ht=>ht.preventDefault())}),c.querySelectorAll("[data-dk]").forEach(f=>f.onclick=()=>{if(f._lpDone&&Date.now()-f._lpDone<1500)return;let E=y[+f.dataset.dk];if(f.matches("li.hr, .hv")&&!E.gone&&E.num!=null){let L=f.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(L){let $=cn.get(L)===String(E.num);ui(L,$?null:String(E.num)),$&&Dn.num===String(E.num)&&(Dn.num=""),$?Mt&&String(Mt.num)===String(E.num)&&(Mt=null,Nt=null,ze.sk="",d._h="",Ue()):fr(E,!0),Ee(!0);return}}if(E.gone&&f.closest("#home")){Ke(`${__t(501)} \xB7 ${E.fam||""} ${E.num||""}`,{label:__t(395),fn:()=>{Ki("map"),fr(E)}});return}fr(E)}),c.querySelectorAll("[data-pinnext]").forEach(f=>f.onclick=E=>{if(E.target.closest("[data-unpin]"))return;let[L,$]=f.dataset.pinnext.split(":");ui(L,$);let rt=Vp(L,$);rt&&fr(rt,!0),Ee(!0)}),c.querySelectorAll("[data-unpin]").forEach(f=>f.onclick=E=>{E.stopPropagation(),ui(f.dataset.unpin,null),Ee(!0)}),c.querySelectorAll("[data-hal]").forEach(f=>f.onclick=()=>x("#alr").click()),fp(c)}function fr(o,c){if(!o)return;let p=t.days.indexOf(ee().ymd),m=ae.find(I=>I.real?o.tid&&I.v.tid===o.tid||o.num&&String(I.tr?I.tr.num:I.v.num)===String(o.num):o.tr&&I.tr===o.tr||o.num&&I.tr&&String(I.tr.num)===String(o.num)),y=o.tr||m&&m.tr||(et[p]||[]).find(I=>String(I.num)===String(o.num));if(Ft=_e=Ct=!1,me=-1,c||void 0,Mt=m?m.tr||{vtid:m.v.tid}:y||null,!Mt)return;c&&(ze.sk="t"+(Mt.num||Mt.vtid)),Nt=m&&m.tr?m.tr:null,Nt&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let M=m?m.p.w:null;M&&Object.assign(s,{tx:M[0],ty:M[1],dist:Math.min(s.dist,22)}),Vn(),d._h="",Ue(),Se=0,a()}let Wr=!1;function qp(o){Wr=o||!1,v.value="",v.placeholder=o==="work"?__t(502):o==="home"?__t(503):__t(504),document.documentElement.classList.add("srch"),_.style.display="none",v.focus()}let Yp=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>qp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Yp(),Wr&&!v.value.trim()&&(Wr=!1,v.placeholder=__t(504))},600));function p1(){}function Xu(o,c){let p=c==="work"?He:Qe,m=T[o].id,y=T.filter(M=>M.fams.size&&M!==T[o]&&Math.hypot(M.w[0]-T[o].w[0],M.w[1]-T[o].w[1])<.6).map(M=>M.id);p.st=[m,...y].slice(0,3),p.i=0,p.open=!0,hi(p),Ee(!0),Op()}let ql=x("#lines");ql.innerHTML=`${__t(505)}`+G.map(o=>`<button type="button" style="--c:${X[o]}" data-f="${o}">${o}</button>`).join("");function Jp(){try{Ee(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",ql.after(o),o.onclick=()=>{Jt=[...ut][0],Ct=Ft=_e=!1,d._h="",Ue()});let c=ut.size===1?[...ut][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(506)}${g(c)}${__t(507)}`)}ql.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!ut.has(o.dataset.f))})}ql.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?G.forEach(p=>ut.add(p)):ut.size===G.length?(ut.clear(),ut.add(c)):ut.has(c)?(ut.delete(c),ut.size||G.forEach(p=>ut.add(p))):ut.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...ut]))}catch{}Jp(),Kt(),Vn(),Nu(),Se=0,a()});let qu=[...document.querySelectorAll("[data-sp]")],Ti=0;function Zp(o){let c=ee();o&&(Ut===o||Ti===o)?Ut?(jt=c.min,he=c.min,Ut=0,Ti=o):(ge=performance.now(),Ut=o,Ti=0):o===0?(Ut=0,he=null,Ti=0):(jt=c.min,ge=performance.now(),he=c.min,Ut=o,Ti=0),qu.forEach(p=>{let m=+p.dataset.sp;p.classList.toggle("on",m===(Ut||Ti)||!Ut&&!Ti&&he==null&&m===0),p.classList.toggle("pz",!!Ti&&m===Ti),p.textContent=m===0?__t(508):Ti===m?"\u25B6 \xD7"+m:Ut===m?"\u23F8 \xD7"+m:"\xD7"+m}),Se=0,a()}qu.forEach(o=>o.onclick=()=>Zp(+o.dataset.sp)),x("#tsl").oninput=o=>{let c=+o.target.value;jt=c,he=c,ge=performance.now(),Ut===0&&!Ti&&qu.forEach(p=>p.classList.remove("on")),Se=0,a()},setInterval(()=>{he!=null&&Ut&&jt+(performance.now()-ge)/6e4*Ut>1560&&(jt=240,ge=performance.now())},1e3),window.__rodSearch=o=>{let c=b(o.trim());if(!c){_.style.display="none",_._pick=null;return}let p=[],m=[];T.forEach((N,D)=>{if(!N.fams.size)return;let B=b(N.n);B.startsWith(c)||B.includes(" "+c)||B.includes("-"+c)?p.push(D):B.includes(c)&&m.push(D)});let y=p.concat(m).slice(0,7),M=P.filter(N=>b(N.name).startsWith(c)).sort((N,D)=>D.pop-N.pop).slice(0,3),I=y.map(N=>({h:`\u{1F689} ${g(T[N].n)}<em>${[...T[N].fams].sort(F).slice(0,3).map(D=>`<em class="ls" style="background:${X[D]}">${D}</em>`).join(" ")}</em>`,go:()=>{if(Yp(),Wr){let D=Wr;Wr=!1,v.placeholder=__t(504),Xu(N,D);return}ze.on&&ze.cur!=="map"&&Ki("map"),Ft=!1,_e=!1,Ct=!1,me=N,Mt=null,Nt=null,Vn(),Object.assign(s,{tx:T[N].w[0],ty:T[N].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ue(),a()}})).concat(M.map(N=>({h:`${g(N.name)}${__t(509)}`,go:()=>{Object.assign(s,{tx:N.cx,ty:N.cy,dist:S(N.size*3+14,14,60)}),a()}})));_.innerHTML=I.map((N,D)=>`<li data-i="${D}">${N.h}</li>`).join("")||__t(510),_.style.display="block",_._pick=N=>{I[N]&&(I[N].go(),_.style.display="none",v.value="",v.blur())},_.querySelectorAll("li[data-i]").forEach(N=>N.onclick=()=>_._pick(+N.dataset.i))},Jp(),Vn();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=b(o),p=-1,m=0;T.forEach((y,M)=>{if(!y.fams.size)return;let I=b(y.n),N=I===c?3:I.startsWith(c)||c.startsWith(I)?2:I.includes(c)||c.includes(I)?1:0;N>m&&(m=N,p=M)}),p>=0&&setTimeout(()=>{me=p,Vn(),Object.assign(s,{tx:T[p].w[0],ty:T[p].w[1],dist:18,tilt:.5}),Ue(),a()},300)}}catch{}let Yu={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Yu.v=!Yu.v,Ee(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&Mt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let p=d.querySelector(".mn");o.stopPropagation(),p&&p.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,p=0,m=0;d.addEventListener("touchstart",y=>{m=innerWidth<=640&&Mt&&(!ze.on||ze.cur==="map")&&y.touches.length===1&&!y.target.closest("input")?1:0,m&&(o=y.touches[0].clientX,c=y.touches[0].clientY,p=0)},{passive:!0}),d.addEventListener("touchmove",y=>{if(!m)return;let M=y.touches[0].clientX-o,I=y.touches[0].clientY-c;m===1&&(Math.abs(M)<12&&Math.abs(I)<12||(m=Math.abs(M)>Math.abs(I)*1.3&&M<0?2:0,!m))||(y.preventDefault(),p=Math.min(0,M),d.style.transition="none",d.style.transform=`translateX(${p}px)`,d.style.opacity=String(Math.max(.3,1+p/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(m!==2){m=0;return}if(m=0,d.style.transition="transform .18s,opacity .18s",p>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let y=d.querySelector("[data-cx]");y&&y.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{m===2&&(d.style.transform="",d.style.opacity=""),m=0})}let ze={on:!1,cur:"now",home:new Map},Yl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Nn=document.createElement("nav");Nn.id="tabs";let x_=[["now","\u{1F552}",__t(508)],["map","\u{1F5FA}\uFE0F",__t(396)],["line","\u{1F4CA}",__t(511)],["set","\u2699\uFE0F",__t(512)]];Nn.innerHTML=x_.map(([o,c,p])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${p}</small></button>`).join(""),document.body.appendChild(Nn);let pr=document.createElement("i");pr.className="tind",pr.setAttribute("aria-hidden","true"),Nn.prepend(pr);let jp=o=>[...Nn.querySelectorAll("[data-tab]")].find(c=>{let p=c.getBoundingClientRect();return o>=p.left&&o<p.right}),Ju=o=>{!o||!o.offsetWidth||(pr.style.width=o.offsetWidth+"px",pr.style.height=o.offsetHeight+"px",pr.style.top=o.offsetTop+"px",pr.style.transform=`translateX(${o.offsetLeft}px)`)},Xr=()=>Ju(Nn.querySelector("[data-tab].on")),v_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ei={on:!1,b:null,moved:!1,until:0};Nn.addEventListener("pointerdown",o=>{let c=jp(o.clientX);if(c){ei.on=!0,ei.b=c,ei.moved=!1,Nn.classList.add("drag"),Nn.querySelectorAll(".hov").forEach(p=>p.classList.remove("hov")),c.classList.add("hov"),Ju(c);try{Nn.setPointerCapture(o.pointerId)}catch{}try{let p=window.Capacitor,m=p&&p.Plugins&&p.Plugins.Haptics;m&&p.isNativePlatform()&&m.selectionStart().catch(()=>{})}catch{}}}),Nn.addEventListener("pointermove",o=>{if(!ei.on)return;let c=jp(o.clientX);c&&c!==ei.b&&(ei.b.classList.remove("hov"),c.classList.add("hov"),ei.b=c,ei.moved=!0,Ju(c),v_())});let Kp=o=>{if(ei.on){ei.on=!1,Nn.classList.remove("drag"),Nn.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,p=c&&c.Plugins&&c.Plugins.Haptics;p&&c.isNativePlatform()&&p.selectionEnd().catch(()=>{})}catch{}o&&ei.b?(ei.until=Date.now()+500,ei.b.dataset.tab!==ze.cur?Ki(ei.b.dataset.tab):Xr()):Xr()}};Nn.addEventListener("pointerup",()=>Kp(!0)),Nn.addEventListener("pointercancel",()=>Kp(!1)),addEventListener("resize",()=>setTimeout(Xr,60));try{new ResizeObserver(()=>Xr()).observe(Nn)}catch{}let qr=document.createElement("div");qr.id="tabL",document.body.appendChild(qr);let mr=document.createElement("div");mr.id="tabA",mr.className="box",document.body.appendChild(mr);let Zu=(o,c)=>{o&&(ze.home.has(o)||ze.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},Qp=()=>{for(let[o,[c,p]]of ze.home)try{c.insertBefore(o,p&&p.parentNode===c?p:null)}catch{}ze.home.clear()};function ju(){let o=[...new Set([Qe,He].flatMap(M=>{let I=Tn(M);return I!=null?[...T[I].fams]:[]}))],c=(ut.size&&ut.size<=8?[...ut]:o.length?o:[]).filter(M=>X[M]).sort(F),p=c.join(","),m=V.alerts.filter(M=>[...M.fams].some(I=>ut.has(I))).length,y=[Ct,_e,Jt,Ft,p,m].join("|");qr._k!==y&&(qr._k=y,qr.innerHTML=`<button type="button" data-tl="stats" class="${Ct?"on":""}">\u{1F4CA} ${__t(513)}</button><button type="button" data-tl="alr" class="${_e?"on":""}">\u26A0\uFE0F ${m}${m===1?__t(282):__t(283)}</button>${c.map(M=>`<button type="button" data-tl="line:${g(M)}" class="${Jt===M?"on":""}">\u{1F4CB} ${g(M)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,qr.querySelectorAll("[data-tl]").forEach(M=>M.onclick=()=>{let I=M.dataset.tl;Ct=I==="stats",_e=I==="alr",Jt=I.startsWith("line:")?I.slice(5):"",Ft=!1,Mt=null,me=-1,Ct&&(Ne.at=0),d._h="",Ue(),ju()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let y_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",S_=()=>yt(new Date).ymd.replace(/-/g,"");function lo(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(y_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let p=S_(),m=t.days.indexOf(p),y=c.days.indexOf(p),M=m<0?0:ct.filter(D=>D.day===m).length,I=0;if(y>=0)for(let D of c.trips)D[0]===y&&I++;let N=y>=0&&M&&(Math.abs(I-M)/M>.1||!I);if(m<0||m>=t.days.length-2||N){try{sessionStorage.setItem("rod_packmsg",N?"1":"")}catch{}location.reload();return}co.v=!0}).catch(()=>{})}let co={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&co.v?(co.v=!1,co.reload=!0):!document.hidden&&co.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Ke("\u{1F5D3}\uFE0F "+__t(514)),1500))}catch{}if(setTimeout(lo,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(lo.at||0)>6*36e5&&(lo.at=Date.now(),lo())}),lo.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=x("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Jl(){Qp();let o=window.__L||"es",c=ci.mode;mr.innerHTML=`<h3>${__t(512)}</h3>
      <h4>\u{1F310} ${__t(515)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(p=>p.split("|")).map(([p,m])=>`<button type="button" data-lang="${p}" class="${o===p?"on":""}">${m}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(516)}</h4><div class="seg2">${[["auto",__t(304)],["light",__t(517)],["dark",__t(518)]].map(([p,m])=>`<button type="button" data-th="${p}" class="${c===p?"on":""}">${m}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(519)}</h4><div class="seg2">${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}let m=p==="1"?"1":p==="0"?"0":"a";return[["a",__t(304)],["0","Normal"],["1",__t(520)]].map(([y,M])=>`<button type="button" data-big="${y}" class="${m===y?"on":""}">${M}</button>`).join("")})()}</div>${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}return p==="1"||p==="0"?"":`<small class="tabAhint">${__t(521)}</small>`})()}
      <h4>\u{1F514} ${__t(522)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(523)}</small>${Hl().length?"":`<small class="tabAhint">${__t(524)}</small>`}${(()=>{let p=Hl();return p.length>1?`<small class="tabAhint">${__t(525)}</small><div class="alch">${p.map(m=>`<button type="button" data-al="${g(m)}" class="ln${dr.has(m)?" off":""}" style="--c:${X[m]}">${g(m)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(526)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(527)}</h4><div id="tabAinf"></div><p class="tdisc">${__t(528)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,mr.querySelectorAll("[data-al]").forEach(p=>p.onclick=()=>{let m=p.dataset.al,y=Hl();dr.has(m)?dr.delete(m):y.filter(M=>!dr.has(M)).length>1&&dr.add(m);try{localStorage.setItem("rod_aloff",JSON.stringify([...dr]))}catch{}Ee(!0),Jl()}),mr.querySelectorAll("[data-big]").forEach(p=>p.onclick=()=>{let m=p.dataset.big;try{m==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",m)}catch{}window.__txt&&window.__txt(),Jl(),Ee(!0)}),mr.querySelectorAll("[data-th]").forEach(p=>p.onclick=()=>{ci.mode=p.dataset.th;try{localStorage.setItem("rod_theme",ci.mode)}catch{}Dl(),Jl()}),Zu(x("#bell"),x("#tabAbell")),Zu(x("#src"),x("#tabArt")),Zu(x("#ver"),x("#tabAinf"))}function Ki(o){if(!ze.on)return;let c=ze.cur;if(ze.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",o==="line"&&d.classList.remove("peek"),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Nn.querySelectorAll("[data-tab]").forEach(p=>p.classList.toggle("on",p.dataset.tab===o)),Xr(),o==="line")(Mt||me>=0)&&(ze.keep={t:Mt,s:me,sk:ze.sk}),!Ct&&!_e&&!Jt&&!Ft&&(Ct=!0,Ne.at=0),Mt=null,me=-1,d._h="",Ue(),ju();else if(c==="line"){Ct=_e=Ft=!1,Jt="";let p=ze.keep;ze.keep=null,p&&o==="map"&&!Mt&&me<0&&(Mt=p.t,me=p.s,ze.sk=p.sk),d._h="",Ue()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Lu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Jl(),o==="now"&&(Ee(!0),requestAnimationFrame(Gl)),Se=0,a()}Nn.onclick=o=>{if(Date.now()<ei.until)return;let c=o.target.closest("[data-tab]");c&&Ki(c.dataset.tab)},window.__rodTabSync=()=>{if(!ze.on)return;let o=Mt?"t"+(Mt.num||Mt.vtid):me>=0?"s"+me:"",c=o!==ze.sk;ze.sk=o,o&&c&&ze.cur!=="map"?Ki("map"):(_e||Jt||Ft)&&ze.cur!=="line"&&ze.cur!=="map"&&Ki("line"),ze.cur==="line"&&ju()};function Ku(){let o=Yl.matches||document.documentElement.classList.contains("cap");if(o!==ze.on)if(ze.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Xr)),o||(window.__mapHidden=!1),o){let c="now";try{let p=sessionStorage.getItem("rod_tabgo");p&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(p)&&(c=p))}catch{}Ki(c)}else delete document.documentElement.dataset.tab,Qp()}Yl.addEventListener?Yl.addEventListener("change",Ku):Yl.addListener(Ku),Ku();{let o=x("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let Qu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},td=new RegExp("("+Object.keys(Qu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),M_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Qu[o]||Qu[o+"\uFE0F"]||""}</svg></span>`;function b_(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),p=[],m;for(;m=c.nextNode();)m.parentElement&&m.parentElement.closest(".ico,script,style,textarea,input")||(td.lastIndex=0,td.test(m.nodeValue)&&p.push(m));for(let y of p){let M=document.createElement("span");M.innerHTML=g(y.nodeValue).replace(td,(I,N)=>M_(N)),y.replaceWith(...M.childNodes)}return p.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(y=>x(y)).filter(Boolean),c=!1,p=()=>{if(!c){c=!0;try{let y=0;o().forEach(M=>{y+=b_(M)}),y&&ze.on&&Gl()}finally{c=!1}}},m=new MutationObserver(()=>{c||queueMicrotask(p)});setTimeout(()=>{p(),o().forEach(y=>m.observe(y,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:cn,LASTPIN:Dn,get ONBX(){return{tid:Et.tid,lock:Et.lock,manual:Et.manual}},xferCands:Rp,bestXfer:$u,xferFirst:zu,nowState:ee,XMIN:Cp,pinNotify:$p,toast:Ke,cardEta:io,HOME:Qe,WORK:He,ONB:Et,alertForMe:Up,whereAmI:Vu,departuresFor:Yn,DEPS:Ot,tripByNum:bs,delayOf:mt,TID:pt,SID:Wt,byDay:et,get days(){return t.days},get hist(){return Ne},get past(){return Lt.cur},get cols(){return mn.mesh?mn.mesh.count:-1},get dist(){return r.dist},get follow(){return Nt},get selTrip(){return Mt},ST:T,TR:ct,FAM:G,act:()=>ae,setSpeed:Zp,RT:V,pollRT:de,nowState:ee,posAt:Os,activeTrips:C,LL:bt,select:o=>{Mt=o,Ue()}}}var za=window.__DATA__;var $e=i=>document.querySelector(i),Ds=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ti=(i,t,e)=>Math.min(e,Math.max(t,i)),Bf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ai=$e("#c"),bl=new ou({canvas:ai,antialias:!0});bl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ns=new Po;Ns.background=new xe(15659509);var wu=35,_s=new Kn(wu,1,2,1500);Ns.add(new tl(16777215,9080992,1));var xg=new nl(16777215,.9);xg.position.set(-40,-70,90);Ns.add(xg);var ms=100/za.w,Sl=za.w/2,Ml=za.h/2,yn=[],kf=new Hi;Ns.add(kf);var vu=new Tr({color:16777215,transparent:!0,opacity:.55});for(let i of za.m){let t=new Hi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let S of i.g){let b=S.map(x=>{let g=[];for(let k=0;k<x.length;k+=2)g.push(new zt((x[k]-Sl)*ms,(x[k+1]-Ml)*ms));return g.length>1&&g[0].equals(g[g.length-1])&&g.pop(),g}).filter(x=>x.length>=3);if(!b.length)continue;let P=new wa(b[0]);for(let x=1;x<b.length;x++)P.holes.push(new Cr(b[x]));e.push(P);for(let x of b[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of b)n.push(new Oo(new Mn().setFromPoints(x.map(g=>new Y(g.x,g.y,0))),vu))}if(!e.length)continue;let h;try{h=new Yo(e,{depth:1,bevelEnabled:!1})}catch{continue}let u=new jo({color:13421772}),d=new Bn(h,u);t.add(d);let v=new Hi;n.forEach(S=>v.add(S)),v.position.z=.04,kf.add(v),t.scale.z=.01,kf.add(t);let _={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:u,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=_,yn.push(_)}var kT=yn.map(i=>i.mesh),ug=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},vg=0,yg=0;for(let i of yn){for(let t of i.rings)vg+=ug(t[0])-t.slice(1).reduce((e,n)=>e+ug(n),0);yg+=i.area}var jb=Math.sqrt(yg/vg),gu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Sg={"08":__t(529),17:__t(530),25:__t(531),43:__t(532)},Xf="sqrt",qf="pop",Ff=0,zf=0,Ua=1,vl=1,Kb={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},$f=i=>qf==="pop"?i.pop:i.pop/i.area,pu=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new xe(i));function Qb(i){i=ti(i,0,1)*(pu.length-1);let t=Math.min(Math.floor(i),pu.length-2);return pu[t].clone().lerp(pu[t+1],i-t)}var Fa=i=>i>=100?Ds(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function t1(){zf=0;for(let i of yn)zf+=i.pop;[...yn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...yn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),wg()}var Mg=new xe("#d3d8e2"),bg=new xe("#eceff3");window.__mapTheme=i=>{Ns.background=new xe(i?856345:15659509),bg.set(i?"#2b3242":"#eceff3"),Mg.set(i?"#1a1f29":"#d3d8e2"),vu.color.set(i?856345:16777215),vu.opacity=i?.7:.55,Yf.color.set(i?329483:2764864),Jf.color.set(i?9081766:16777215);for(let t of yn)t.base&&Eu(t);zn()};function Eu(i){i.mat.color.copy(i.base).lerp(bg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Mg,.8)}function wg(){Ua=1,vl=1e12;for(let e of yn){let n=$f(e);Ua=Math.max(Ua,n),vl=Math.min(vl,n)}let i=Math.log10(Math.max(vl,.01)),t=Math.log10(Ua);for(let e of yn)e.base=Qb((Math.log10(Math.max($f(e),.01))-i)/(t-i)),Eu(e);$e("#lmin").textContent=Fa(vl),$e("#lmax").textContent=Fa(Ua),$e("#lname").textContent=qf==="pop"?__t(533):__t(534),Tu()}function Tu(){let i=Kb[Xf],t=i(Ua),e=24*Ff;for(let n of yn)n.zt=Ff<=.001?.01:Math.max(.12*Math.min(1,Ff),e*i($f(n))/t)*(n.inF?1:.1);zn()}var dg=Object.fromEntries(yn.map(i=>[i.code,i])),_u=[],Eg=[];for(let i of za.bd){let t=dg[i.a],e=dg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Eg.push((i.p[n]-Sl)*ms,(i.p[n+1]-Ml)*ms,0,(i.p[n+2]-Sl)*ms,(i.p[n+3]-Ml)*ms,0),_u.push(t,e)}var yu=new Yi;yu.setPositions(Eg);var Yf=new hs({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Jf=new hs({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Yf,Jf].forEach((i,t)=>{let e=new Ur(yu,i);e.frustumCulled=!1,e.renderOrder=10+t,Ns.add(e)});function e1(){let i=yu.attributes.instanceStart.data.array;for(let t=0;t<_u.length;t+=2){let e=Math.max(_u[t].z,_u[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}yu.attributes.instanceStart.data.needsUpdate=!0}var Su={};for(let i of Object.keys(gu)){let t=yn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,h=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),h=Math.max(h,d.cy);let u=document.createElement("div");u.className="plab",u.textContent=gu[i],u.title=__t(535)+Sg[i],u.onclick=()=>d1("pr:"+i),document.body.appendChild(u),Su[i]={el:u,p:new Y(n/e,s/e,0),cx:(r+a)/2,cy:(l+h)/2,ext:Math.max(a-r,h-l),ext2:[a-r,h-l],area:e,name:gu[i]}}var Of=new Y;function n1(){for(let i in Su){let t=Su[i];Of.copy(t.p).project(_s),t.el.style.transform=`translate(-50%,-50%) translate(${(Of.x*.5+.5)*innerWidth}px,${(-Of.y*.5+.5)*innerHeight}px)`}}var wn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Ce={...wn};function i1(){let i=innerWidth/innerHeight,t=Math.tan(wu*Math.PI/360);return Math.max(za.h*ms*1.1,100*1.1/i)/(2*t)}var s1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Ce.yaw=Math.round(Ce.yaw/(2*Math.PI))*2*Math.PI,Ce.tilt=0,zn()});function Zf(){Object.assign(Ce,{tilt:0,yaw:0,dist:i1(),tx:0,ty:0}),zn()}function r1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=wn;_s.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),_s.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),_s.lookAt(n,s,0)}var yl=!0,fg=performance.now(),Ba=new Map,ir=0,mu=0;function jf(){ir&&(clearTimeout(ir),ir=0,requestAnimationFrame(Oa))}function zn(){yl=!0,jf()}window.__wakeMap=jf;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,jf,{passive:!0,capture:!0}));function Oa(i){ir=0;let t=ti((i-fg)/1e3,0,.05);fg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(wn)){let r=Ce[s]-wn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(wn[s]+=r*e,n=!0):wn[s]=Ce[s]}for(let s of yn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ba){let a=(i-r)/1800;a>=1?(Ba.delete(s),zr(s)):zr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(yl=!0),window.__mapHidden){yl=!0,ir=setTimeout(()=>{ir=0,requestAnimationFrame(Oa)},1e3);return}if(n||yl){s1.style.transform=`rotate(${wn.yaw}rad) scaleY(${(.55+.45*Math.cos(wn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Ce.yaw/2))<.02&&Ce.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(536):__t(537))}r1(),e1(),n1(),window.__rodFrame&&window.__rodFrame(),bl.render(Ns,_s),yl=n,$e("#tilt").value=Math.round(Ce.tilt*180/Math.PI),$e("#yaw").value=Math.round(((Ce.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Ba.size){mu=0,requestAnimationFrame(Oa);return}mu||(mu=i),i-mu<1500?requestAnimationFrame(Oa):ir=setTimeout(()=>{ir=0,requestAnimationFrame(Oa)},120)}function Tg(){bl.setSize(innerWidth,innerHeight,!1),_s.aspect=innerWidth/innerHeight,_s.updateProjectionMatrix(),Yf.resolution.set(innerWidth,innerHeight),Jf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),zn()}addEventListener("resize",()=>{Tg(),dn.length&&rr()});ai.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Ce.yaw+=n*.0035}else i.ctrlKey?Ce.dist=ti(Ce.dist*Math.exp(e*.01),6,400):Ce.tilt=ti(Ce.tilt+e*.002,0,1.32);zn()},{passive:!1});ai.addEventListener("contextmenu",i=>i.preventDefault());var gs=new Map,_i=null,Or=0,Vf=0,Hf=0;var Mu=null;ai.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),dn.length&&setTimeout(rr,50)),ai.setPointerCapture(i.pointerId),gs.set(i.pointerId,{x:i.clientX,y:i.clientY}),gs.size===1&&(_i={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),gs.size===2){let[t,e]=[...gs.values()];Or=Math.hypot(t.x-e.x,t.y-e.y),Vf=Math.atan2(e.y-t.y,e.x-t.x),Hf=(t.y+e.y)/2,Mu={mode:null,rot:0,sc:0,tl:0},_i&&(_i.multi=!0)}Kf()});ai.addEventListener("pointermove",i=>{let t=gs.get(i.pointerId);if(!t){Ls={x:i.clientX,y:i.clientY},Gf||(Gf=requestAnimationFrame(o1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,gs.size===2){let[s,r]=[...gs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),h=(s.y+r.y)/2,u=l-Vf;u>Math.PI&&(u-=2*Math.PI),u<-Math.PI&&(u+=2*Math.PI);let d=Or?a-Or:0,v=h-Hf,_=Mu||(Mu={mode:null,rot:0,sc:0,tl:0});_.rot+=u,_.sc+=d,_.tl+=v,_.mode?_.mode==="zoom"&&Math.abs(_.rot)>.45&&(_.mode="rotate"):Math.abs(_.rot)>.3?_.mode="rotate":Math.abs(_.tl)>30&&Math.abs(_.sc)<18?_.mode="tilt":Math.abs(_.sc)>12&&(_.mode="zoom"),(_.mode==="zoom"||_.mode==="rotate")&&Or&&(Ce.dist=ti(Ce.dist*Or/a,6,400)),_.mode==="rotate"&&(Ce.yaw+=u,wn.yaw=Ce.yaw),_.mode==="tilt"&&(Ce.tilt=ti(Ce.tilt-v*.006,0,1.32),wn.tilt=Ce.tilt),Or=a,Vf=l,Hf=h,zn();return}if(_i.moved+=Math.abs(e)+Math.abs(n),_i.rot||i.altKey)Ce.yaw+=e*.005,Ce.tilt=ti(Ce.tilt+n*.004,0,1.32),wn.yaw=Ce.yaw,wn.tilt=Ce.tilt;else{let s=2*wn.dist*Math.tan(wu*Math.PI/360)/innerHeight,r=Math.sin(wn.yaw),a=Math.cos(wn.yaw),l=1/Math.max(Math.cos(wn.tilt),.3);Ce.tx=ti(Ce.tx-a*e*s+-r*n*s*l,-70,70),Ce.ty=ti(Ce.ty-r*e*s+a*n*s*l,-70,70),wn.tx=Ce.tx,wn.ty=Ce.ty}zn()});var Ag=i=>{let t=_i&&!_i.rot&&!_i.multi&&_i.moved<(_i.touch?12:6)&&i.type==="pointerup"&&gs.size===1,e=_i&&_i.touch;gs.delete(i.pointerId),Or=0,Mu=null,gs.size||(_i=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ai.addEventListener("pointerup",Ag);ai.addEventListener("pointercancel",Ag);ai.addEventListener("dblclick",Zf);addEventListener("keydown",i=>{i.key==="Alt"&&(ai.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ai.style.cursor="")});addEventListener("blur",()=>{ai.style.cursor=""});var a1=new sl,pg=new zt,Ls=null,Gf=0,Br=null;function o1(){if(Gf=0,!Ls||_i)return;pg.set(Ls.x/innerWidth*2-1,-(Ls.y/innerHeight)*2+1),a1.setFromCamera(pg,_s);let i=null;if(i!==Br){let e=Br;Br=i,e&&zr(e),i&&zr(i),zn()}let t=window.__rodHover&&window.__rodHover(Ls.x,Ls.y);if(t){Fr.innerHTML=t,Fr.style.display="block";let e=Fr.offsetWidth,n=Fr.offsetHeight;Fr.style.left=ti(Ls.x+14,6,innerWidth-e-6)+"px",Fr.style.top=ti(Ls.y+14,6,innerHeight-n-6)+"px",ai.style.cursor="pointer"}else Kf(),ai.style.cursor=""}ai.addEventListener("pointerleave",()=>{if(Ls=null,Br){let i=Br;Br=null,zr(i),zn()}Kf()});var Fr=$e("#tip");function Kf(){Fr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{qf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),wg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Xf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Tu()});$e("#yaw").oninput=i=>{Ce.yaw=+i.target.value*Math.PI/180,zn()};$e("#tilt").oninput=i=>{Ce.tilt=+i.target.value*Math.PI/180,zn()};$e("#zin").onclick=()=>{Ce.dist=ti(Ce.dist*.75,6,400),zn()};$e("#zout").onclick=()=>{Ce.dist=ti(Ce.dist/.75,6,400),zn()};$e("#rst").onclick=Zf;var mg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],dn=[],gg={},l1=i=>gg[i]||(gg[i]=new Tr({color:i}));function Cg(i,t){i.og.children.forEach(e=>e.material=t?l1(t):vu)}function zr(i,t=0){let e=i.mat.emissive;i===Br?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Qf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let u of i)e=Math.min(e,u.cx-u.size/2),n=Math.max(n,u.cx+u.size/2),s=Math.min(s,u.cy-u.size/2),r=Math.max(r,u.cy+u.size/2);let a=innerWidth/innerHeight,l=Math.tan(wu*Math.PI/360),h=i.length===1?ti(i[0].size*3.2+14,14,120):ti(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Ce,{tx:(e+n)/2,ty:(s+r)/2,dist:h,tilt:t,yaw:0}),zn()}var sr=$e("#q"),bi=$e("#list"),un=$e("#mcs");function Au(i,t=!0){if(bi.style.display="none",sr.value="",!i.sel){dn.length>=6&&Rg(dn[0].o,!0);let e=new Set(dn.map(s=>s.color)),n=mg.find(s=>!e.has(s))||mg[0];i.sel={o:i,color:n,tint:new xe(n).multiplyScalar(.12)},dn.push(i.sel),Cg(i,n)}un.classList.contains("min")&&wl(!1),Ba.set(i,performance.now()),zr(i),t&&Qf([i],Math.max(Ce.tilt,.9)),rr()}function Rg(i,t){let e=dn.indexOf(i.sel);e>=0&&dn.splice(e,1),i.sel=null,Cg(i,null),zr(i),zn(),t||rr()}function Ig(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=dn.map(d=>{let v=1e9,_=-1e9,S=1e9,b=-1e9;for(let P of d.o.rings)for(let x=0;x<P[0].length;x+=2)v=Math.min(v,P[0][x]),_=Math.max(_,P[0][x]),S=Math.min(S,P[0][x+1]),b=Math.max(b,P[0][x+1]);return{x0:v,x1:_,y0:S,y1:b}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;dn.forEach((d,v)=>{let _=r[v],S=(_.x0+_.x1)/2,b=(_.y0+_.y1)/2;s.beginPath();for(let P of d.o.rings)for(let x of P)for(let g=0;g<x.length;g+=2){let k=e/2+(x[g]-S)*l,z=n/2-(x[g+1]-b)*l;g?s.lineTo(k,z):s.moveTo(k,z),g===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let h=l/jb,u=[.5,1,2,5,10,20,50,100].find(d=>d*h>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,u*h,2),s.font="10px system-ui",s.fillText(u+" km",12+u*h,n-8)}function rr(){if(!dn.length){un.innerHTML="",un.style.display="none",wl(!1);return}if(un.style.display="flex",innerWidth<=640){let e=$e("#inf").getBoundingClientRect().bottom;un.style.top=Math.round(e+8)+"px",un.style.maxHeight=Math.max(110,Math.min(innerHeight*($e("#rc").classList.contains("min")?.7:.4),$e("#rc").getBoundingClientRect().top-e-16))+"px",un.style.width=""}else if(innerHeight<=500){let e=$e("#inf").getBoundingClientRect().bottom;un.style.top=Math.round(e+8)+"px",un.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",un.style.width="min(290px, 40vw)"}else un.style.top="",un.style.maxHeight="",un.style.width="";window.__fitMcs&&window.__fitMcs();let i=dn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${gu[s.pr]}</em></div><div class="mb">${Ds(s.pop)}${__t(543)}${Fa(s.area)} km\xB2 \xB7 ${Fa(s.pop/s.area)}${__t(544)}${s.rankP}${__t(545)}`}).join("");if(dn.length>1){let e=s=>Math.max(...dn.map(s)),n=[[__t(546),s=>s.o.pop,Ds],[__t(547),s=>s.o.area,Fa],[__t(548),s=>s.o.pop/s.o.area,Fa]];if(i+=`${__t(549)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${dn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),dn.length===2){let[s,r]=dn.map(u=>u.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],h=(u,d)=>(u>=d?u/d:d/u).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(550)}${h(a.pop,l.pop)}${__t(551)}${l.name}${__t(552)}${h(a.area,l.area)}\xD7 ${a.area>=l.area?__t(553):__t(554)}.</small>`}i+="</div>"}un.innerHTML=i,un.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Rg(dn[+e.dataset.x].o)}),un.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Qf([dn[+e.dataset.i].o],Math.max(Ce.tilt,.9)),e.onmouseenter=()=>{let n=dn[+e.dataset.i].o;Ba.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=dn.splice(s,1);dn.splice(r,0,a),rr();let l=$e("#sil");l&&l.classList.add("flash")}}});let t=$e("#sil");t&&Ig(t)}sr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(sr.value);return}let i=Bf(sr.value.trim());if(!i){bi.style.display="none";return}let t=[],e=[];for(let s of yn){let r=Bf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);bi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Ds(s.pop)}</em></li>`).join("")||__t(510),bi.style.display="block",bi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Au(n[+s.dataset.i])),bi._r=n});sr.addEventListener("keydown",i=>{i.key==="Enter"&&bi._pick?bi._pick(0):i.key==="Enter"&&bi._r&&bi._r[0]&&Au(bi._r[0]),i.key==="Escape"&&(sr.value="",bi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==sr&&Pg()});var _g=0;addEventListener("resize",()=>{clearTimeout(_g),_g=setTimeout(()=>{let i=$e("#sil");i&&Ig(i)},120)});var bu=null,Wf=$e("#chip");function c1(i,t,e=.8){bu={codes:new Set(i.map(n=>n.code)),label:t},yn.forEach(n=>{n.inF=bu.codes.has(n.code),Eu(n)}),Wf.innerHTML=`${__t(555)}${t}</b> \xB7 ${i.length}${i.length===1?__t(556):__t(557)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Wf.style.display="flex",$e("#chx").onclick=Pg,Tu(),Qf(i,e),i.slice(0,40).forEach(n=>Ba.set(n,performance.now()))}function Pg(){bu&&(bu=null,yn.forEach(i=>{i.inF=!0,Eu(i)}),Wf.style.display="none",Tu())}var h1="prov";function u1(i){let t=[...yn].sort((a,l)=>l.pop-a.pop),e=[...yn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[yn.filter(a=>a.pr===s),Sg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(558)]:[e.slice(0,10),__t(559)];if(n==="low")return s==="pop"?[t.slice(-10),__t(560)]:[e.slice(-10),__t(561)];if(n==="size")return[yn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Ds(+s)}${__t(562)}`:+s==0?`${__t(563)}${Ds(+r)}${__t(564)}`:`${Ds(+s)} \u2013 ${Ds(+r-1)}${__t(564)}`];if(n==="n50"){let a=0,l=0;for(let h of t)if(a+=h.pop,l++,a>=zf/2)break;return[t.slice(0,l),`${__t(565)}`]}return[[],""]}function d1(i){let[t,e]=u1(i);t.length&&c1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{h1=i.dataset.tab,$e("#dbody").scrollTop=0});var kr=$e("#rc"),xu=$e("#mcstab");function ka(i){kr.classList.toggle("min",i),$e("#rcgrab span").textContent=i?__t(607):__t(608),dn.length&&rr()}function wl(i){un.classList.toggle("min",i),un.style.transform="",un.style.opacity="",xu.classList.toggle("on",i&&dn.length>0),i&&(xu.textContent=`\u25B8 ${dn.length} ${dn.length===1?"ficha":"fichas"}`,xu.style.top=un.style.top||"124px")}function tp(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Cu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y;!s.lock&&Math.hypot(l,h)>10&&(s.lock=Math.abs(l)>Math.abs(h)?"x":"y"),s.lock===n&&t&&t(l,h)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y,u=s.lock;s=null,e(u===n?l:0,u===n?h:0,u)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}$e("#rcgrab").onclick=()=>ka(!kr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&ka(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Lg=()=>innerWidth>640;tp(kr,{axis:"y",onEnd:(i,t)=>{if(!Lg())if(t>40&&!kr.classList.contains("min")){let e=$e("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ka(!0)}else t<-30&&kr.classList.contains("min")&&ka(!1)}});tp(kr,{axis:"x",onEnd:i=>{Lg()&&(i>50?ka(!0):i<-30&&kr.classList.contains("min")&&ka(!1))}});tp(un,{axis:"x",onMove:i=>{i<0&&(un.classList.add("sw"),un.style.transform=`translateX(${i}px)`,un.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{un.classList.remove("sw"),i<-60?(wl(!0),window.__rodHide&&!dn.length&&window.__rodHide()):(un.style.transform="",un.style.opacity="")}});xu.onclick=()=>{wl(!1),rr()};$e("#dtoggle").onclick=()=>{let i=$e("#dp").classList.toggle("open");$e("#rc").classList.toggle("dopen",i),$e("#dtoggle").textContent=i?Cu.matches&&innerWidth<=640?__t(609):__t(610):__t(611),window.__rodCard&&window.__rodCard()};var Cu=matchMedia("(max-width:640px), (max-height:500px)");function Dg(){let i=$e("#leg");Cu.matches?$e("#rc").insertBefore(i,$e("#dtoggle")):document.body.appendChild(i),dn.length&&rr()}Cu.addEventListener("change",Dg);Dg();Tg();t1();Zf();Object.assign(wn,Ce);for(let i of yn)i.z=.01;requestAnimationFrame(Oa);hg({scene:Ns,camera:_s,renderer:bl,goal:Ce,cur:wn,invalidate:zn,flyTo:(i,t,e,n)=>{Object.assign(Ce,{tx:(i-Sl)*ms,ty:(t-Ml)*ms,dist:e,tilt:n}),zn()},K:ms,CX:Sl,CY:Ml,mcs:un,q:sr,list:bi,munis:yn,select:Au,norm:Bf,fmt:Ds,clamp:ti,mcsMin:wl});window.__app={scene:Ns,renderer:bl,camera:_s,munis:yn,labs:Su,goal:Ce,cur:wn,select:Au,get mode(){return Xf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(617):__t(618)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
