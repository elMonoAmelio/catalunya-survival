(()=>{var Bp=0,od=1,kp=2;var ko=1,zp=2,aa=3,Ns=0,jn=1,qi=2,Yi=0,oa=1,ld=2,cd=3,hd=4,Vp=5;var ur=100,$p=101,Hp=102,Gp=103,Wp=104,Xp=200,qp=201,Yp=202,Zp=203,ud=204,dd=205,Jp=206,Kp=207,jp=208,Qp=209,tm=210,em=211,nm=212,im=213,sm=214,jl=0,Ql=1,tc=2,qr=3,ec=4,nc=5,ic=6,sc=7,kc=0,rm=1,am=2,Di=0,fd=1,pd=2,md=3,gd=4,_d=5,xd=6,vd=7;var yd=300,Us=301,dr=302,zc=303,Vc=304,zo=306,rc=1e3,Vi=1001,ac=1002,An=1003,om=1004;var Vo=1005;var Fn=1006,$c=1007;var Fs=1008;var ai=1009,Sd=1010,Md=1011,la=1012,Hc=1013,Ni=1014,vi=1015,Ui=1016,Gc=1017,Wc=1018,ca=1020,bd=35902,wd=35899,Ed=1021,Td=1022,yi=1023,Hi=1026,Os=1027,Xc=1028,qc=1029,Bs=1030,Yc=1031;var Zc=1033,$o=33776,Ho=33777,Go=33778,Wo=33779,Jc=35840,Kc=35841,jc=35842,Qc=35843,th=36196,eh=37492,nh=37496,ih=37488,sh=37489,Xo=37490,rh=37491,ah=37808,oh=37809,lh=37810,ch=37811,hh=37812,uh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,_h=37819,xh=37820,vh=37821,yh=36492,Sh=36494,Mh=36495,bh=36283,wh=36284,qo=36285,Eh=36286;var io=2300,oc=2301,Jl=2302,Yu=2303,Zu=2400,Ju=2401,Ku=2402;var lm=3200;var Th=0,cm=1,gs="",hi="srgb",so="srgb-linear",ro="linear",qe="srgb";var Kl=7680;var hm=519,um=512,dm=513,fm=514,Ah=515,pm=516,mm=517,Ch=518,gm=519,Ad=35044;var Cd="300 es",Ii=2e3,Yr=2001;function M0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function b0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _m(){let i=ao("canvas");return i.style.display="block",i}var tp={},Zr=null;function oo(...i){let t="THREE."+i.shift();Zr?Zr("log",t,...i):console.log(t,...i)}function xm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function pe(...i){i=xm(i);let t="THREE."+i.shift();if(Zr)Zr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function xe(...i){i=xm(i);let t="THREE."+i.shift();if(Zr)Zr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function sr(...i){let t=i.join(" ");t in tp||(tp[t]=!0,pe(...i))}function vm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ym={[jl]:Ql,[tc]:ic,[ec]:sc,[qr]:nc,[Ql]:jl,[ic]:tc,[sc]:ec,[nc]:qr},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=1234567,Qa=Math.PI/180,Jr=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Rd(i,t){return(i%t+t)%t}function w0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function E0(i,t,e){return i!==t?(e-i)/(t-i):0}function to(i,t,e){return(1-e)*i+e*t}function T0(i,t,e,n){return to(i,t,1-Math.exp(-e*n))}function A0(i,t=1){return t-Math.abs(Rd(i,t*2)-t)}function C0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function R0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function I0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function P0(i,t){return i+Math.random()*(t-i)}function L0(i){return i*(.5-Math.random())}function D0(i){i!==void 0&&(ep=i);let t=ep+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function N0(i){return i*Qa}function U0(i){return i*Jr}function F0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function O0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function B0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function k0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),g=r((t-n)/2),f=a((t-n)/2),x=r((n-t)/2),S=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*g,c*f,o*h);break;case"YZY":i.set(c*f,o*u,c*g,o*h);break;case"ZXZ":i.set(c*g,c*f,o*u,o*h);break;case"XZX":i.set(o*u,c*S,c*x,o*h);break;case"YXY":i.set(c*x,o*u,c*S,o*h);break;case"ZYZ":i.set(c*S,c*x,o*u,o*h);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Id={DEG2RAD:Qa,RAD2DEG:Jr,generateUUID:$i,clamp:be,euclideanModulo:Rd,mapLinear:w0,inverseLerp:E0,lerp:to,damp:T0,pingpong:A0,smoothstep:C0,smootherstep:R0,randInt:I0,randFloat:P0,randFloatSpread:L0,seededRandom:D0,degToRad:N0,radToDeg:U0,isPowerOfTwo:F0,ceilPowerOfTwo:O0,floorPowerOfTwo:B0,setQuaternionFromProperEuler:k0,normalize:Je,denormalize:Ri},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],g=n[s+3],f=r[a+0],x=r[a+1],S=r[a+2],I=r[a+3];if(g!==I||c!==f||h!==x||u!==S){let m=c*f+h*x+u*S+g*I;m<0&&(f=-f,x=-x,S=-S,I=-I,m=-m);let p=1-o;if(m<.9995){let O=Math.acos(m),B=Math.sin(O);p=Math.sin(p*O)/B,o=Math.sin(o*O)/B,c=c*p+f*o,h=h*p+x*o,u=u*p+S*o,g=g*p+I*o}else{c=c*p+f*o,h=h*p+x*o,u=u*p+S*o,g=g*p+I*o;let O=1/Math.sqrt(c*c+h*h+u*u+g*g);c*=O,h*=O,u*=O,g*=O}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],g=r[a],f=r[a+1],x=r[a+2],S=r[a+3];return t[e]=o*S+u*g+c*x-h*f,t[e+1]=c*S+u*f+h*g-o*x,t[e+2]=h*S+u*x+o*f-c*g,t[e+3]=u*S-o*g-c*f-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),g=o(r/2),f=c(n/2),x=c(s/2),S=c(r/2);switch(a){case"XYZ":this._x=f*u*g+h*x*S,this._y=h*x*g-f*u*S,this._z=h*u*S+f*x*g,this._w=h*u*g-f*x*S;break;case"YXZ":this._x=f*u*g+h*x*S,this._y=h*x*g-f*u*S,this._z=h*u*S-f*x*g,this._w=h*u*g+f*x*S;break;case"ZXY":this._x=f*u*g-h*x*S,this._y=h*x*g+f*u*S,this._z=h*u*S+f*x*g,this._w=h*u*g-f*x*S;break;case"ZYX":this._x=f*u*g-h*x*S,this._y=h*x*g+f*u*S,this._z=h*u*S-f*x*g,this._w=h*u*g+f*x*S;break;case"YZX":this._x=f*u*g+h*x*S,this._y=h*x*g+f*u*S,this._z=h*u*S-f*x*g,this._w=h*u*g-f*x*S;break;case"XZY":this._x=f*u*g-h*x*S,this._y=h*x*g-f*u*S,this._z=h*u*S+f*x*g,this._w=h*u*g+f*x*S;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],g=e[10],f=n+o+g;if(f>0){let x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(u-c)*x,this._y=(r-h)*x,this._z=(a-s)*x}else if(n>o&&n>g){let x=2*Math.sqrt(1+n-o-g);this._w=(u-c)/x,this._x=.25*x,this._y=(s+a)/x,this._z=(r+h)/x}else if(o>g){let x=2*Math.sqrt(1+o-n-g);this._w=(r-h)/x,this._x=(s+a)/x,this._y=.25*x,this._z=(c+u)/x}else{let x=2*Math.sqrt(1+g-n-o);this._w=(a-s)/x,this._x=(r+h)/x,this._y=(c+u)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(np.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(np.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+c*h+a*g-o*u,this.y=n+c*u+o*h-r*g,this.z=s+c*g+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mu.copy(this).projectOnVector(t),this.sub(Mu)}reflect(t){return this.sub(Mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mu=new W,np=new Wi,Me=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],g=n[7],f=n[2],x=n[5],S=n[8],I=s[0],m=s[3],p=s[6],O=s[1],B=s[4],R=s[7],b=s[2],N=s[5],G=s[8];return r[0]=a*I+o*O+c*b,r[3]=a*m+o*B+c*N,r[6]=a*p+o*R+c*G,r[1]=h*I+u*O+g*b,r[4]=h*m+u*B+g*N,r[7]=h*p+u*R+g*G,r[2]=f*I+x*O+S*b,r[5]=f*m+x*B+S*N,r[8]=f*p+x*R+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],g=u*a-o*h,f=o*c-u*r,x=h*r-a*c,S=e*g+n*f+s*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/S;return t[0]=g*I,t[1]=(s*h-u*n)*I,t[2]=(o*n-s*a)*I,t[3]=f*I,t[4]=(u*e-s*c)*I,t[5]=(s*r-o*e)*I,t[6]=x*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bu.makeScale(t,e)),this}rotate(t){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bu.makeRotation(-t)),this}translate(t,e){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bu=new Me,ip=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){let i={enabled:!0,workingColorSpace:so,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qe&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[so]:{primaries:t,whitePoint:n,transfer:ro,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:n,transfer:qe,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),i}var Fe=z0();function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,lc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ir===void 0&&(Ir=ao("canvas")),Ir.width=t.width,Ir.height=t.height;let s=Ir.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ir}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ps(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ps(e[n]/255)*255):e[n]=ps(e[n]);return{data:e,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},V0=0,Kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wu(s[a].image)):r.push(wu(s[a]))}else r=wu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}var $0=0,Eu=new W,ii=class i extends Gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vi,s=Vi,r=Fn,a=Fs,o=yi,c=ai,h=i.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=$i(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){pe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){pe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rc:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rc:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=yd;ii.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],g=c[8],f=c[1],x=c[5],S=c[9],I=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(g-I)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(g+I)<.1&&Math.abs(S+m)<.1&&Math.abs(h+x+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(h+1)/2,R=(x+1)/2,b=(p+1)/2,N=(u+f)/4,G=(g+I)/4,T=(S+m)/4;return B>R&&B>b?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=N/n,r=G/n):R>b?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=N/s,r=T/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=G/r,s=T/r),this.set(n,s,r,e),this}let O=Math.sqrt((m-S)*(m-S)+(g-I)*(g-I)+(f-u)*(f-u));return Math.abs(O)<.001&&(O=1),this.x=(m-S)/O,this.y=(g-I)/O,this.z=(f-u)/O,this.w=Math.acos((h+x+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ii(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lo=class extends ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Be=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,h,u,g,f,x,S,I,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,g,f,x,S,I,m)}set(t,e,n,s,r,a,o,c,h,u,g,f,x,S,I,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=g,p[14]=f,p[3]=x,p[7]=S,p[11]=I,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Pr.setFromMatrixColumn(t,0).length(),r=1/Pr.setFromMatrixColumn(t,1).length(),a=1/Pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let f=a*u,x=a*g,S=o*u,I=o*g;e[0]=c*u,e[4]=-c*g,e[8]=h,e[1]=x+S*h,e[5]=f-I*h,e[9]=-o*c,e[2]=I-f*h,e[6]=S+x*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,x=c*g,S=h*u,I=h*g;e[0]=f+I*o,e[4]=S*o-x,e[8]=a*h,e[1]=a*g,e[5]=a*u,e[9]=-o,e[2]=x*o-S,e[6]=I+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,x=c*g,S=h*u,I=h*g;e[0]=f-I*o,e[4]=-a*g,e[8]=S+x*o,e[1]=x+S*o,e[5]=a*u,e[9]=I-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,x=a*g,S=o*u,I=o*g;e[0]=c*u,e[4]=S*h-x,e[8]=f*h+I,e[1]=c*g,e[5]=I*h+f,e[9]=x*h-S,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,x=a*h,S=o*c,I=o*h;e[0]=c*u,e[4]=I-f*g,e[8]=S*g+x,e[1]=g,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=x*g+S,e[10]=f-I*g}else if(t.order==="XZY"){let f=a*c,x=a*h,S=o*c,I=o*h;e[0]=c*u,e[4]=-g,e[8]=h*u,e[1]=f*g+I,e[5]=a*u,e[9]=x*g-S,e[2]=S*g-x,e[6]=o*u,e[10]=I*g+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(H0,t,G0)}lookAt(t,e,n){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),bs.crossVectors(n,li),bs.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),bs.crossVectors(n,li)),bs.normalize(),bl.crossVectors(li,bs),s[0]=bs.x,s[4]=bl.x,s[8]=li.x,s[1]=bs.y,s[5]=bl.y,s[9]=li.y,s[2]=bs.z,s[6]=bl.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],g=n[5],f=n[9],x=n[13],S=n[2],I=n[6],m=n[10],p=n[14],O=n[3],B=n[7],R=n[11],b=n[15],N=s[0],G=s[4],T=s[8],D=s[12],$=s[1],X=s[5],et=s[9],at=s[13],J=s[2],Q=s[6],ht=s[10],ut=s[14],Et=s[3],dt=s[7],Mt=s[11],St=s[15];return r[0]=a*N+o*$+c*J+h*Et,r[4]=a*G+o*X+c*Q+h*dt,r[8]=a*T+o*et+c*ht+h*Mt,r[12]=a*D+o*at+c*ut+h*St,r[1]=u*N+g*$+f*J+x*Et,r[5]=u*G+g*X+f*Q+x*dt,r[9]=u*T+g*et+f*ht+x*Mt,r[13]=u*D+g*at+f*ut+x*St,r[2]=S*N+I*$+m*J+p*Et,r[6]=S*G+I*X+m*Q+p*dt,r[10]=S*T+I*et+m*ht+p*Mt,r[14]=S*D+I*at+m*ut+p*St,r[3]=O*N+B*$+R*J+b*Et,r[7]=O*G+B*X+R*Q+b*dt,r[11]=O*T+B*et+R*ht+b*Mt,r[15]=O*D+B*at+R*ut+b*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],g=t[6],f=t[10],x=t[14],S=t[3],I=t[7],m=t[11],p=t[15],O=c*x-h*f,B=o*x-h*g,R=o*f-c*g,b=a*x-h*u,N=a*f-c*u,G=a*g-o*u;return e*(I*O-m*B+p*R)-n*(S*O-m*b+p*N)+s*(S*B-I*b+p*G)-r*(S*R-I*N+m*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],g=t[9],f=t[10],x=t[11],S=t[12],I=t[13],m=t[14],p=t[15],O=e*o-n*a,B=e*c-s*a,R=e*h-r*a,b=n*c-s*o,N=n*h-r*o,G=s*h-r*c,T=u*I-g*S,D=u*m-f*S,$=u*p-x*S,X=g*m-f*I,et=g*p-x*I,at=f*p-x*m,J=O*at-B*et+R*X+b*$-N*D+G*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/J;return t[0]=(o*at-c*et+h*X)*Q,t[1]=(s*et-n*at-r*X)*Q,t[2]=(I*G-m*N+p*b)*Q,t[3]=(f*N-g*G-x*b)*Q,t[4]=(c*$-a*at-h*D)*Q,t[5]=(e*at-s*$+r*D)*Q,t[6]=(m*R-S*G-p*B)*Q,t[7]=(u*G-f*R+x*B)*Q,t[8]=(a*et-o*$+h*T)*Q,t[9]=(n*$-e*et-r*T)*Q,t[10]=(S*N-I*R+p*O)*Q,t[11]=(g*R-u*N-x*O)*Q,t[12]=(o*D-a*X-c*T)*Q,t[13]=(e*X-n*D+s*T)*Q,t[14]=(I*B-S*b-m*O)*Q,t[15]=(u*b-g*B+f*O)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,g=o+o,f=r*h,x=r*u,S=r*g,I=a*u,m=a*g,p=o*g,O=c*h,B=c*u,R=c*g,b=n.x,N=n.y,G=n.z;return s[0]=(1-(I+p))*b,s[1]=(x+R)*b,s[2]=(S-B)*b,s[3]=0,s[4]=(x-R)*N,s[5]=(1-(f+p))*N,s[6]=(m+O)*N,s[7]=0,s[8]=(S+B)*G,s[9]=(m-O)*G,s[10]=(1-(f+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),c=Pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ei.copy(this);let h=1/a,u=1/o,g=1/c;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,e.setFromRotationMatrix(Ei),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ii,c=!1){let h=this.elements,u=2*r/(e-t),g=2*r/(n-s),f=(e+t)/(e-t),x=(n+s)/(n-s),S,I;if(c)S=r/(a-r),I=a*r/(a-r);else if(o===Ii)S=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===Yr)S=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ii,c=!1){let h=this.elements,u=2/(e-t),g=2/(n-s),f=-(e+t)/(e-t),x=-(n+s)/(n-s),S,I;if(c)S=1/(a-r),I=a/(a-r);else if(o===Ii)S=-2/(a-r),I=-(a+r)/(a-r);else if(o===Yr)S=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Pr=new W,Ei=new Be,H0=new W(0,0,0),G0=new W(1,1,1),bs=new W,bl=new W,li=new W,rp=new Be,ap=new Wi,ms=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],g=s[2],f=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,x),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,x),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ap.setFromEuler(this),this.setFromQuaternion(ap,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ms.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},W0=0,op=new W,Lr=new Wi,cs=new Be,wl=new W,Wa=new W,X0=new W,q0=new Wi,lp=new W(1,0,0),cp=new W(0,1,0),hp=new W(0,0,1),up={type:"added"},Y0={type:"removed"},Dr={type:"childadded",child:null},Tu={type:"childremoved",child:null},Cn=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new ms,n=new Wi,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Me}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Lr.setFromAxisAngle(t,e),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,e){return Lr.setFromAxisAngle(t,e),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(lp,t)}rotateY(t){return this.rotateOnAxis(cp,t)}rotateZ(t){return this.rotateOnAxis(hp,t)}translateOnAxis(t,e){return op.copy(t).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lp,t)}translateY(t){return this.translateOnAxis(cp,t)}translateZ(t){return this.translateOnAxis(hp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wl.copy(t):wl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(Wa,wl,this.up):cs.lookAt(wl,Wa,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(cs),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(up),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Y0),Tu.child=t,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(up),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,t,X0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let g=c[h];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),g=a(t.shapes),f=a(t.skeletons),x=a(t.animations),S=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new W(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z0={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let m=e.getJointPose(I,n),p=this._getHandJoint(h,I);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=u.position.distanceTo(g.position),x=.02,S=.005;h.inputState.pinching&&f>x+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=x-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},El={h:0,s:0,l:0};function Au(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Fe.workingColorSpace){if(t=Rd(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Au(a,r,t+1/3),this.g=Au(a,r,t),this.b=Au(a,r,t-1/3)}return Fe.colorSpaceToWorking(this,s),this}setStyle(t,e=hi){function n(r){r!==void 0&&parseFloat(r)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:pe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let n=Sm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Fe.workingToColorSpace(Wn.copy(this),t),Math.round(be(Wn.r*255,0,255))*65536+Math.round(be(Wn.g*255,0,255))*256+Math.round(be(Wn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.workingToColorSpace(Wn.copy(this),e);let n=Wn.r,s=Wn.g,r=Wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let g=a-o;switch(h=u<=.5?g/(a+o):g/(2-a-o),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Fe.workingColorSpace){return Fe.workingToColorSpace(Wn.copy(this),e),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=hi){Fe.workingToColorSpace(Wn.copy(this),t);let e=Wn.r,n=Wn.g,s=Wn.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+e,ws.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ws),t.getHSL(El);let n=to(ws.h,El.h,e),s=to(ws.s,El.s,e),r=to(ws.l,El.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new fe;fe.NAMES=Sm;var co=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new W,hs=new W,Cu=new W,us=new W,Nr=new W,Ur=new W,dp=new W,Ru=new W,Iu=new W,Pu=new W,Lu=new Ye,Du=new Ye,Nu=new Ye,Cs=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ti.subVectors(s,e),hs.subVectors(n,e),Cu.subVectors(t,e);let a=Ti.dot(Ti),o=Ti.dot(hs),c=Ti.dot(Cu),h=hs.dot(hs),u=hs.dot(Cu),g=a*h-o*o;if(g===0)return r.set(0,0,0),null;let f=1/g,x=(h*c-o*u)*f,S=(a*u-o*c)*f;return r.set(1-x-S,S,x)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,us)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,us.x),c.addScaledVector(a,us.y),c.addScaledVector(o,us.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Lu.setScalar(0),Du.setScalar(0),Nu.setScalar(0),Lu.fromBufferAttribute(t,e),Du.fromBufferAttribute(t,n),Nu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lu,r.x),a.addScaledVector(Du,r.y),a.addScaledVector(Nu,r.z),a}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),hs.subVectors(t,e),Ti.cross(hs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Ti.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Nr.subVectors(s,n),Ur.subVectors(r,n),Ru.subVectors(t,n);let c=Nr.dot(Ru),h=Ur.dot(Ru);if(c<=0&&h<=0)return e.copy(n);Iu.subVectors(t,s);let u=Nr.dot(Iu),g=Ur.dot(Iu);if(u>=0&&g<=u)return e.copy(s);let f=c*g-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Nr,a);Pu.subVectors(t,r);let x=Nr.dot(Pu),S=Ur.dot(Pu);if(S>=0&&x<=S)return e.copy(r);let I=x*h-c*S;if(I<=0&&h>=0&&S<=0)return o=h/(h-S),e.copy(n).addScaledVector(Ur,o);let m=u*S-x*g;if(m<=0&&g-u>=0&&x-S>=0)return dp.subVectors(r,s),o=(g-u)/(g-u+(x-S)),e.copy(s).addScaledVector(dp,o);let p=1/(m+I+f);return a=I*p,o=f*p,e.copy(n).addScaledVector(Nr,a).addScaledVector(Ur,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tl.copy(n.boundingBox)),Tl.applyMatrix4(t.matrixWorld),this.union(Tl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xa),Al.subVectors(this.max,Xa),Fr.subVectors(t.a,Xa),Or.subVectors(t.b,Xa),Br.subVectors(t.c,Xa),Es.subVectors(Or,Fr),Ts.subVectors(Br,Or),Qs.subVectors(Fr,Br);let e=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-Qs.z,Qs.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,Qs.z,0,-Qs.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-Qs.y,Qs.x,0];return!Uu(e,Fr,Or,Br,Al)||(e=[1,0,0,0,1,0,0,0,1],!Uu(e,Fr,Or,Br,Al))?!1:(Cl.crossVectors(Es,Ts),e=[Cl.x,Cl.y,Cl.z],Uu(e,Fr,Or,Br,Al))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new W,new W,new W,new W,new W,new W,new W,new W],Ai=new W,Tl=new Kn,Fr=new W,Or=new W,Br=new W,Es=new W,Ts=new W,Qs=new W,Xa=new W,Al=new W,Cl=new W,tr=new W;function Uu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){tr.fromArray(i,r);let o=s.x*Math.abs(tr.x)+s.y*Math.abs(tr.y)+s.z*Math.abs(tr.z),c=t.dot(tr),h=e.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Sn=new W,Rl=new zt,J0=0,Qe=class extends Gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rl.fromBufferAttribute(this,e),Rl.applyMatrix3(t),this.setXY(e,Rl.x,Rl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix3(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ho=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var gn=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},K0=new Kn,qa=new W,Fu=new W,ri=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):K0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qa.subVectors(t,this.center);let e=qa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qa.copy(t.center).add(Fu)),this.expandByPoint(qa.copy(t.center).sub(Fu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},j0=0,xi=new Be,Ou=new Cn,kr=new W,ci=new Kn,Ya=new Kn,Tn=new W,_n=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?uo:ho)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,n){return xi.makeTranslation(t,e,n),this.applyMatrix4(xi),this}scale(t,e,n){return xi.makeScale(t,e,n),this.applyMatrix4(xi),this}lookAt(t){return Ou.lookAt(t),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(ci.min,Ya.min),ci.expandByPoint(Tn),Tn.addVectors(ci.max,Ya.max),ci.expandByPoint(Tn)):(ci.expandByPoint(Ya.min),ci.expandByPoint(Ya.max))}ci.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Tn.fromBufferAttribute(o,h),c&&(kr.fromBufferAttribute(t,h),Tn.add(kr)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let T=0;T<n.count;T++)o[T]=new W,c[T]=new W;let h=new W,u=new W,g=new W,f=new zt,x=new zt,S=new zt,I=new W,m=new W;function p(T,D,$){h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,D),g.fromBufferAttribute(n,$),f.fromBufferAttribute(r,T),x.fromBufferAttribute(r,D),S.fromBufferAttribute(r,$),u.sub(h),g.sub(h),x.sub(f),S.sub(f);let X=1/(x.x*S.y-S.x*x.y);isFinite(X)&&(I.copy(u).multiplyScalar(S.y).addScaledVector(g,-x.y).multiplyScalar(X),m.copy(g).multiplyScalar(x.x).addScaledVector(u,-S.x).multiplyScalar(X),o[T].add(I),o[D].add(I),o[$].add(I),c[T].add(m),c[D].add(m),c[$].add(m))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let T=0,D=O.length;T<D;++T){let $=O[T],X=$.start,et=$.count;for(let at=X,J=X+et;at<J;at+=3)p(t.getX(at+0),t.getX(at+1),t.getX(at+2))}let B=new W,R=new W,b=new W,N=new W;function G(T){b.fromBufferAttribute(s,T),N.copy(b);let D=o[T];B.copy(D),B.sub(b.multiplyScalar(b.dot(D))).normalize(),R.crossVectors(N,D);let X=R.dot(c[T])<0?-1:1;a.setXYZW(T,B.x,B.y,B.z,X)}for(let T=0,D=O.length;T<D;++T){let $=O[T],X=$.start,et=$.count;for(let at=X,J=X+et;at<J;at+=3)G(t.getX(at+0)),G(t.getX(at+1)),G(t.getX(at+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,x=n.count;f<x;f++)n.setXYZ(f,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,h=new W,u=new W,g=new W;if(t)for(let f=0,x=t.count;f<x;f+=3){let S=t.getX(f+0),I=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,m),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,x=e.count;f<x;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,g=o.normalized,f=new h.constructor(c.length*u),x=0,S=0;for(let I=0,m=c.length;I<m;I++){o.isInterleavedBufferAttribute?x=c[I]*o.data.stride+o.offset:x=c[I]*u;for(let p=0;p<u;p++)f[S++]=h[x++]}return new Qe(f,u,g)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,g=h.length;u<g;u++){let f=h[u],x=t(f,n);c.push(x)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let g=0,f=h.length;g<f;g++){let x=h[g];u.push(x.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let f=0,x=g.length;f<x;f++)u.push(g[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},uc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ad,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Jn=new W,Li=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyMatrix4(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyNormalMatrix(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.transformDirection(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bu=new W,Q0=new W,t_=new Me,Ci=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bu.subVectors(n,e).cross(Q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Bu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t_.getNormalMatrix(t),s=this.coplanarPoint(Bu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},e_=0,Xi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=oa,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kl,this.stencilZFail=Kl,this.stencilZPass=Kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){pe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){pe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var fs=new W,ku=new W,Il=new W,Pl=new W,rr=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,e),fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ku.copy(t).add(e).multiplyScalar(.5),Il.copy(e).sub(t).normalize(),Pl.copy(this.origin).sub(ku);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Il),o=Pl.dot(this.direction),c=-Pl.dot(Il),h=Pl.lengthSq(),u=Math.abs(1-a*a),g,f,x,S;if(u>0)if(g=a*c-o,f=a*o-c,S=r*u,g>=0)if(f>=-S)if(f<=S){let I=1/u;g*=I,f*=I,x=g*(g+a*f+2*o)+f*(a*g+f+2*c)+h}else f=r,g=Math.max(0,-(a*f+o)),x=-g*g+f*(f+2*c)+h;else f=-r,g=Math.max(0,-(a*f+o)),x=-g*g+f*(f+2*c)+h;else f<=-S?(g=Math.max(0,-(-a*r+o)),f=g>0?-r:Math.min(Math.max(-r,-c),r),x=-g*g+f*(f+2*c)+h):f<=S?(g=0,f=Math.min(Math.max(-r,-c),r),x=f*(f+2*c)+h):(g=Math.max(0,-(a*r+o)),f=g>0?r:Math.min(Math.max(-r,-c),r),x=-g*g+f*(f+2*c)+h);else f=a>0?-r:r,g=Math.max(0,-(a*f+o)),x=-g*g+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ku).addScaledVector(Il,f),x}intersectSphere(t,e){if(t.radius<0)return null;fs.subVectors(t.center,this.origin);let n=fs.dot(this.direction),s=fs.dot(fs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-f.z)*g,c=(t.max.z-f.z)*g):(o=(t.max.z-f.z)*g,c=(t.min.z-f.z)*g),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,g=t.x-a.x,f=t.y-a.y,x=t.z-a.z,S=e.x-a.x,I=e.y-a.y,m=e.z-a.z,p=n.x-a.x,O=n.y-a.y,B=n.z-a.z,R=Math.abs(c),b=Math.abs(h),N=Math.abs(u),G,T,D,$,X,et,at,J,Q,ht,ut,Et;if(R>=b&&R>=N?(D=c,et=g,Q=S,Et=p,c>=0?(G=h,T=u,$=f,X=x,at=I,J=m,ht=O,ut=B):(G=u,T=h,$=x,X=f,at=m,J=I,ht=B,ut=O)):b>=N?(D=h,et=f,Q=I,Et=O,h>=0?(G=u,T=c,$=x,X=g,at=m,J=S,ht=B,ut=p):(G=c,T=u,$=g,X=x,at=S,J=m,ht=p,ut=B)):(D=u,et=x,Q=m,Et=B,u>=0?(G=c,T=h,$=g,X=f,at=S,J=I,ht=p,ut=O):(G=h,T=c,$=f,X=g,at=I,J=S,ht=O,ut=p)),D===0)return null;let dt=G/D,Mt=T/D,St=1/D,Wt=$-dt*et,Zt=X-Mt*et,ke=at-dt*Q,Ee=J-Mt*Q,Ue=ht-dt*Et,_t=ut-Mt*Et,vt=Ue*Ee-_t*ke,It=Wt*_t-Zt*Ue,ne=ke*Zt-Ee*Wt;if(s){if(vt<0||It<0||ne<0)return null}else if((vt<0||It<0||ne<0)&&(vt>0||It>0||ne>0))return null;let Yt=vt+It+ne;if(Yt===0)return null;let ce=St*(vt*et+It*Q+ne*Et);return(Yt>0?ce<0:ce>0)?null:this.at(ce/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ar=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fp=new Be,er=new rr,Ll=new ri,pp=new W,Dl=new W,Nl=new W,Ul=new W,zu=new W,Fl=new W,mp=new W,Ol=new W,Rn=class extends Cn{constructor(t=new _n,e=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fl.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],g=r[c];u!==0&&(zu.fromBufferAttribute(g,t),a?Fl.addScaledVector(zu,u):Fl.addScaledVector(zu.sub(e),u))}e.add(Fl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(r),er.copy(t.ray).recast(t.near),!(Ll.containsPoint(er.origin)===!1&&(er.intersectSphere(Ll,pp)===null||er.origin.distanceToSquared(pp)>(t.far-t.near)**2))&&(fp.copy(r).invert(),er.copy(t.ray).applyMatrix4(fp),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,f=r.groups,x=r.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let m=f[S],p=a[m.materialIndex],O=Math.max(m.start,x.start),B=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let R=O,b=B;R<b;R+=3){let N=o.getX(R),G=o.getX(R+1),T=o.getX(R+2);s=Bl(this,p,t,n,h,u,g,N,G,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,x.start),I=Math.min(o.count,x.start+x.count);for(let m=S,p=I;m<p;m+=3){let O=o.getX(m),B=o.getX(m+1),R=o.getX(m+2);s=Bl(this,a,t,n,h,u,g,O,B,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let m=f[S],p=a[m.materialIndex],O=Math.max(m.start,x.start),B=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let R=O,b=B;R<b;R+=3){let N=R,G=R+1,T=R+2;s=Bl(this,p,t,n,h,u,g,N,G,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,x.start),I=Math.min(c.count,x.start+x.count);for(let m=S,p=I;m<p;m+=3){let O=m,B=m+1,R=m+2;s=Bl(this,a,t,n,h,u,g,O,B,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function n_(i,t,e,n,s,r,a,o){let c;if(t.side===jn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ns,o),c===null)return null;Ol.copy(o),Ol.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Ol);return h<e.near||h>e.far?null:{distance:h,point:Ol.clone(),object:i}}function Bl(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Dl),i.getVertexPosition(c,Nl),i.getVertexPosition(h,Ul);let u=n_(i,t,e,n,Dl,Nl,Ul,mp);if(u){let g=new W;Cs.getBarycoord(mp,Dl,Nl,Ul,g),s&&(u.uv=Cs.getInterpolatedAttribute(s,o,c,h,g,new zt)),r&&(u.uv1=Cs.getInterpolatedAttribute(r,o,c,h,g,new zt)),a&&(u.normal=Cs.getInterpolatedAttribute(a,o,c,h,g,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new W,materialIndex:0};Cs.getNormal(Dl,Nl,Ul,f.normal),u.face=f,u.barycoord=g}return u}var fo=class extends ii{constructor(t=null,e=1,n=1,s,r,a,o,c,h=An,u=An,g,f){super(null,a,o,c,h,u,s,r,g,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var po=class extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zr=new Be,gp=new Be,kl=[],_p=new Kn,i_=new Be,Za=new Rn,Ja=new ri,mo=class extends Rn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zr),_p.copy(t.boundingBox).applyMatrix4(zr),this.boundingBox.union(_p)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zr),Ja.copy(t.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ja)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Za.geometry=this.geometry,Za.material=this.material,Za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(n),t.ray.intersectsSphere(Ja)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),gp.multiplyMatrices(n,zr),Za.matrixWorld=gp,Za.raycast(t,kl);for(let a=0,o=kl.length;a<o;a++){let c=kl[a];c.instanceId=r,c.object=this,e.push(c)}kl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fo(new Float32Array(s*this.count),s,this.count,Xc,vi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new ri,s_=new zt(.5,.5),zl=new W,ta=class{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],g=r[5],f=r[6],x=r[7],S=r[8],I=r[9],m=r[10],p=r[11],O=r[12],B=r[13],R=r[14],b=r[15];if(s[0].setComponents(h-a,x-u,p-S,b-O).normalize(),s[1].setComponents(h+a,x+u,p+S,b+O).normalize(),s[2].setComponents(h+o,x+g,p+I,b+B).normalize(),s[3].setComponents(h-o,x-g,p-I,b-B).normalize(),n)s[4].setComponents(c,f,m,R).normalize(),s[5].setComponents(h-c,x-f,p-m,b-R).normalize();else if(s[4].setComponents(h-c,x-f,p-m,b-R).normalize(),e===Ii)s[5].setComponents(h+c,x+f,p+m,b+R).normalize();else if(e===Yr)s[5].setComponents(c,f,m,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);let e=s_.distanceTo(t.center);return nr.radius=.7071067811865476+e,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zl.x=s.normal.x>0?t.max.x:t.min.x,zl.y=s.normal.y>0?t.max.y:t.min.y,zl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},dc=new W,fc=new W,xp=new Be,Ka=new rr,Vl=new ri,Vu=new W,vp=new W,pc=class extends Cn{constructor(t=new _n,e=new or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)dc.fromBufferAttribute(e,s-1),fc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=dc.distanceTo(fc);t.setAttribute("lineDistance",new gn(n,1))}else pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vl.copy(n.boundingSphere),Vl.applyMatrix4(s),Vl.radius+=r,t.ray.intersectsSphere(Vl)===!1)return;xp.copy(s).invert(),Ka.copy(t.ray).applyMatrix4(xp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let x=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let I=x,m=S-1;I<m;I+=h){let p=u.getX(I),O=u.getX(I+1),B=$l(this,t,Ka,c,p,O,I);B&&e.push(B)}if(this.isLineLoop){let I=u.getX(S-1),m=u.getX(x),p=$l(this,t,Ka,c,I,m,S-1);p&&e.push(p)}}else{let x=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let I=x,m=S-1;I<m;I+=h){let p=$l(this,t,Ka,c,I,I+1,I);p&&e.push(p)}if(this.isLineLoop){let I=$l(this,t,Ka,c,S-1,x,S-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $l(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(dc.fromBufferAttribute(o,s),fc.fromBufferAttribute(o,r),e.distanceSqToSegment(dc,fc,Vu,vp)>n)return;Vu.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Vu);if(!(h<t.near||h>t.far))return{distance:h,point:vp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var go=class extends pc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},mc=class extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yp=new Be,ju=new rr,Hl=new ri,Gl=new W,lr=class extends Cn{constructor(t=new _n,e=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(s),Hl.radius+=r,t.ray.intersectsSphere(Hl)===!1)return;yp.copy(s).invert(),ju.copy(t.ray).applyMatrix4(yp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,g=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=f,I=x;S<I;S++){let m=h.getX(S);Gl.fromBufferAttribute(g,m),Sp(Gl,m,c,s,t,e,this)}}else{let f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let S=f,I=x;S<I;S++)Gl.fromBufferAttribute(g,S),Sp(Gl,S,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sp(i,t,e,n,s,r,a){let o=ju.distanceSqToPoint(i);if(o<e){let c=new W;ju.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var _o=class extends ii{constructor(t=[],e=Us,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Rs=class extends ii{constructor(t,e,n=Ni,s,r,a,o=An,c=An,h,u=Hi,g=1){if(u!==Hi&&u!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:g};super(f,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},gc=class extends Rs{constructor(t,e=Ni,n=Us,s,r,a=An,o=An,c,h=Hi){let u={width:t,height:t,depth:1},g=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xo=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ea=class i extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],g=[],f=0,x=0;S("z","y","x",-1,-1,n,e,t,a,r,0),S("z","y","x",1,-1,n,e,-t,a,r,1),S("x","z","y",1,1,t,n,e,s,a,2),S("x","z","y",1,-1,t,n,-e,s,a,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(g,2));function S(I,m,p,O,B,R,b,N,G,T,D){let $=R/G,X=b/T,et=R/2,at=b/2,J=N/2,Q=G+1,ht=T+1,ut=0,Et=0,dt=new W;for(let Mt=0;Mt<ht;Mt++){let St=Mt*X-at;for(let Wt=0;Wt<Q;Wt++){let Zt=Wt*$-et;dt[I]=Zt*O,dt[m]=St*B,dt[p]=J,h.push(dt.x,dt.y,dt.z),dt[I]=0,dt[m]=0,dt[p]=N>0?1:-1,u.push(dt.x,dt.y,dt.z),g.push(Wt/G),g.push(1-Mt/T),ut+=1}}for(let Mt=0;Mt<T;Mt++)for(let St=0;St<G;St++){let Wt=f+St+Q*Mt,Zt=f+St+Q*(Mt+1),ke=f+(St+1)+Q*(Mt+1),Ee=f+(St+1)+Q*Mt;c.push(Wt,Zt,Ee),c.push(Zt,ke,Ee),Et+=6}o.addGroup(x,Et,D),x+=Et,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vo=class i extends _n{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],f=[],x=[],S=0,I=[],m=n/2,p=0;O(),a===!1&&(t>0&&B(!0),e>0&&B(!1)),this.setIndex(u),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(x,2));function O(){let R=new W,b=new W,N=0,G=(e-t)/n;for(let T=0;T<=r;T++){let D=[],$=T/r,X=$*(e-t)+t;for(let et=0;et<=s;et++){let at=et/s,J=at*c+o,Q=Math.sin(J),ht=Math.cos(J);b.x=X*Q,b.y=-$*n+m,b.z=X*ht,g.push(b.x,b.y,b.z),R.set(Q,G,ht).normalize(),f.push(R.x,R.y,R.z),x.push(at,1-$),D.push(S++)}I.push(D)}for(let T=0;T<s;T++)for(let D=0;D<r;D++){let $=I[D][T],X=I[D+1][T],et=I[D+1][T+1],at=I[D][T+1];(t>0||D!==0)&&(u.push($,X,at),N+=3),(e>0||D!==r-1)&&(u.push(X,et,at),N+=3)}h.addGroup(p,N,0),p+=N}function B(R){let b=S,N=new zt,G=new W,T=0,D=R===!0?t:e,$=R===!0?1:-1;for(let et=1;et<=s;et++)g.push(0,m*$,0),f.push(0,$,0),x.push(.5,.5),S++;let X=S;for(let et=0;et<=s;et++){let J=et/s*c+o,Q=Math.cos(J),ht=Math.sin(J);G.x=D*ht,G.y=m*$,G.z=D*Q,g.push(G.x,G.y,G.z),f.push(0,$,0),N.x=Q*.5+.5,N.y=ht*.5*$+.5,x.push(N.x,N.y),S++}for(let et=0;et<s;et++){let at=b+et,J=X+et;R===!0?u.push(J,J+1,at):u.push(J+1,J,at),T+=3}h.addGroup(p,T,R===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,x=(a-u)/f;return(s+x)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new zt:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,s=[],r=[],a=[],o=new W,c=new Be;for(let x=0;x<=t;x++){let S=x/t;s[x]=this.getTangentAt(S,new W)}r[0]=new W,a[0]=new W;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let x=1;x<=t;x++){if(r[x]=r[x-1].clone(),a[x]=a[x-1].clone(),o.crossVectors(s[x-1],s[x]),o.length()>Number.EPSILON){o.normalize();let S=Math.acos(be(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(c.makeRotationAxis(o,S))}a[x].crossVectors(s[x],r[x])}if(e===!0){let x=Math.acos(be(r[0].dot(r[t]),-1,1));x/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(x=-x);for(let S=1;S<=t;S++)r[S].applyMatrix4(c.makeRotationAxis(s[S],x*S)),a[S].crossVectors(s[S],r[S])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},na=class extends ui{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=c-this.aX,x=h-this.aY;c=f*u-x*g+this.aX,h=f*g+x*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_c=class extends na{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pd(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,g){let f=(a-r)/h-(o-r)/(h+u)+(o-a)/u,x=(o-a)/u-(c-a)/(u+g)+(c-o)/g;f*=u,x*=u,s(a,o,f,x)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mp=new W,bp=new W,$u=new Pd,Hu=new Pd,Gu=new Pd,xc=class extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(bp.subVectors(s[0],s[1]).add(s[0]),h=bp);let g=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Mp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mp),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,S=Math.pow(h.distanceToSquared(g),x),I=Math.pow(g.distanceToSquared(f),x),m=Math.pow(f.distanceToSquared(u),x);I<1e-4&&(I=1),S<1e-4&&(S=I),m<1e-4&&(m=I),$u.initNonuniformCatmullRom(h.x,g.x,f.x,u.x,S,I,m),Hu.initNonuniformCatmullRom(h.y,g.y,f.y,u.y,S,I,m),Gu.initNonuniformCatmullRom(h.z,g.z,f.z,u.z,S,I,m)}else this.curveType==="catmullrom"&&($u.initCatmullRom(h.x,g.x,f.x,u.x,this.tension),Hu.initCatmullRom(h.y,g.y,f.y,u.y,this.tension),Gu.initCatmullRom(h.z,g.z,f.z,u.z,this.tension));return n.set($u.calc(c),Hu.calc(c),Gu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wp(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function r_(i,t){let e=1-i;return e*e*t}function a_(i,t){return 2*(1-i)*i*t}function o_(i,t){return i*i*t}function eo(i,t,e,n){return r_(i,t)+a_(i,e)+o_(i,n)}function l_(i,t){let e=1-i;return e*e*e*t}function c_(i,t){let e=1-i;return 3*e*e*i*t}function h_(i,t){return 3*(1-i)*i*i*t}function u_(i,t){return i*i*i*t}function no(i,t,e,n,s){return l_(i,t)+c_(i,e)+h_(i,n)+u_(i,s)}var yo=class extends ui{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(no(t,s.x,r.x,a.x,o.x),no(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vc=class extends ui{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(no(t,s.x,r.x,a.x,o.x),no(t,s.y,r.y,a.y,o.y),no(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends ui{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends ui{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends ui{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(eo(t,s.x,r.x,a.x),eo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends ui{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(eo(t,s.x,r.x,a.x),eo(t,s.y,r.y,a.y),eo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],g=s[a>s.length-3?s.length-1:a+2];return n.set(wp(o,c.x,h.x,u.x,g.x),wp(o,c.y,h.y,u.y,g.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Qu=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:xc,CubicBezierCurve:yo,CubicBezierCurve3:vc,EllipseCurve:na,LineCurve:So,LineCurve3:yc,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:Sc,SplineCurve:bo}),Mc=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qu[s.type]().fromJSON(s))}return this}},cr=class extends Mc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mo(this.currentPoint.clone(),new zt(t,e),new zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new yo(this.currentPoint.clone(),new zt(t,e),new zt(n,s),new zt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new na(t,e,n,s,r,a,o,c);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ia=class extends cr{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cr().fromJSON(s))}return this}};function d_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Mm(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=__(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,g=c;for(let f=e;f<s;f+=e){let x=i[f],S=i[f+1];x<o&&(o=x),S<c&&(c=S),x>u&&(u=x),S>g&&(g=S)}h=Math.max(u-o,g-c),h=h!==0?32767/h:0}return wo(r,a,e,o,c,h,0),a}function Mm(i,t,e,n,s){let r;if(s===C_(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ep(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ep(a/n|0,i[a],i[a+1],r);return r&&sa(r,r.next)&&(To(r),r=r.next),r}function hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sa(e,e.next)||fn(e.prev,e,e.next)===0)){if(To(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&M_(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?p_(i,n,s,r):f_(i)){t.push(c.i,i.i,h.i),To(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=m_(hr(i),t),wo(i,t,e,n,s,r,2)):a===2&&g_(i,t,e,n,s,r):wo(hr(i),t,e,n,s,r,1);break}}}function f_(i){let t=i.prev,e=i,n=i.next;if(fn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),g=Math.min(o,c,h),f=Math.max(s,r,a),x=Math.max(o,c,h),S=n.next;for(;S!==t;){if(S.x>=u&&S.x<=f&&S.y>=g&&S.y<=x&&ja(s,o,r,c,a,h,S.x,S.y)&&fn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function p_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fn(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,g=r.y,f=a.y,x=Math.min(o,c,h),S=Math.min(u,g,f),I=Math.max(o,c,h),m=Math.max(u,g,f),p=td(x,S,t,e,n),O=td(I,m,t,e,n),B=i.prevZ,R=i.nextZ;for(;B&&B.z>=p&&R&&R.z<=O;){if(B.x>=x&&B.x<=I&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&ja(o,u,c,g,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0||(B=B.prevZ,R.x>=x&&R.x<=I&&R.y>=S&&R.y<=m&&R!==s&&R!==a&&ja(o,u,c,g,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;B&&B.z>=p;){if(B.x>=x&&B.x<=I&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&ja(o,u,c,g,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;R&&R.z<=O;){if(R.x>=x&&R.x<=I&&R.y>=S&&R.y<=m&&R!==s&&R!==a&&ja(o,u,c,g,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function m_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!sa(n,s)&&wm(n,e,e.next,s)&&Eo(n,s)&&Eo(s,n)&&(t.push(n.i,e.i,s.i),To(e),To(e.next),e=i=s),e=e.next}while(e!==i);return hr(e)}function g_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E_(a,o)){let c=Em(a,o);a=hr(a,a.next),c=hr(c,c.next),wo(a,t,e,n,s,r,0),wo(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function __(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=Mm(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(w_(h))}s.sort(x_);for(let r=0;r<s.length;r++)e=v_(s[r],e);return e}function x_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function v_(i,t){let e=y_(i,t);if(!e)return t;let n=Em(e,i);return hr(n,n.next),hr(e,e.next)}function y_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(sa(i,e))return e;do{if(sa(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=n&&g>r&&(r=g,a=e.x<e.next.x?e:e.next,g===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&bm(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let g=Math.abs(s-e.y)/(n-e.x);Eo(e,i)&&(g<u||g===u&&(e.x>a.x||e.x===a.x&&S_(a,e)))&&(a=e,u=g)}e=e.next}while(e!==o);return a}function S_(i,t){return fn(i.prev,i,t.prev)<0&&fn(t.next,i,i.next)<0}function M_(i,t,e,n){let s=i;do s.z===0&&(s.z=td(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b_(s)}function b_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function td(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function w_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bm(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ja(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&bm(i,t,e,n,s,r,a,o)}function E_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!T_(i,t)&&(Eo(i,t)&&Eo(t,i)&&A_(i,t)&&(fn(i.prev,i,t.prev)||fn(i,t.prev,t))||sa(i,t)&&fn(i.prev,i,i.next)>0&&fn(t.prev,t,t.next)>0)}function fn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sa(i,t){return i.x===t.x&&i.y===t.y}function wm(i,t,e,n){let s=Xl(fn(i,t,e)),r=Xl(fn(i,t,n)),a=Xl(fn(e,n,i)),o=Xl(fn(e,n,t));return!!(s!==r&&a!==o||s===0&&Wl(i,e,t)||r===0&&Wl(i,n,t)||a===0&&Wl(e,i,n)||o===0&&Wl(e,t,n))}function Wl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xl(i){return i>0?1:i<0?-1:0}function T_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Eo(i,t){return fn(i.prev,i,i.next)<0?fn(i,t,i.next)>=0&&fn(i,i.prev,t)>=0:fn(i,t,i.prev)<0||fn(i,i.next,t)<0}function A_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Em(i,t){let e=ed(i.i,i.x,i.y),n=ed(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ep(i,t,e,n){let s=ed(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function To(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ed(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nd=class{static triangulate(t,e,n=2){return d_(t,e,n)}},ir=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Tp(t),Ap(n,t);let a=t.length;e.forEach(Tp);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ap(n,e[c]);let o=nd.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Tp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ap(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ao=class i extends _n{constructor(t=new ia([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new gn(s,3)),this.setAttribute("uv",new gn(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,x=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:x-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,O=e.UVGenerator!==void 0?e.UVGenerator:R_,B,R=!1,b,N,G,T;if(p){B=p.getSpacedPoints(u),R=!0,f=!1;let st=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,st),N=new W,G=new W,T=new W}f||(m=0,x=0,S=0,I=0);let D=o.extractPoints(h),$=D.shape,X=D.holes;if(!ir.isClockWise($)){$=$.reverse();for(let st=0,At=X.length;st<At;st++){let H=X[st];ir.isClockWise(H)&&(X[st]=H.reverse())}}function at(st){let H=10000000000000001e-36,Ct=st[0];for(let Ot=1;Ot<=st.length;Ot++){let le=Ot%st.length,oe=st[le],de=oe.x-Ct.x,_e=oe.y-Ct.y,V=de*de+_e*_e,Pe=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(Ct.x),Math.abs(Ct.y)),me=H*Pe*Pe;if(V<=me){st.splice(le,1),Ot--;continue}Ct=oe}}at($),X.forEach(at);let J=X.length,Q=$;for(let st=0;st<J;st++){let At=X[st];$=$.concat(At)}function ht(st,At,H){return At||xe("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(At,H)}let ut=$.length;function Et(st,At,H){let Ct,Ot,le,oe=st.x-At.x,de=st.y-At.y,_e=H.x-st.x,V=H.y-st.y,Pe=oe*oe+de*de,me=oe*V-de*_e;if(Math.abs(me)>Number.EPSILON){let L=Math.sqrt(Pe),M=Math.sqrt(_e*_e+V*V),q=At.x-de/L,ot=At.y+oe/L,ft=H.x-V/M,Pt=H.y+_e/M,Ft=((ft-q)*V-(Pt-ot)*_e)/(oe*V-de*_e);Ct=q+oe*Ft-st.x,Ot=ot+de*Ft-st.y;let mt=Ct*Ct+Ot*Ot;if(mt<=2)return new zt(Ct,Ot);le=Math.sqrt(mt/2)}else{let L=!1;oe>Number.EPSILON?_e>Number.EPSILON&&(L=!0):oe<-Number.EPSILON?_e<-Number.EPSILON&&(L=!0):Math.sign(de)===Math.sign(V)&&(L=!0),L?(Ct=-de,Ot=oe,le=Math.sqrt(Pe)):(Ct=oe,Ot=de,le=Math.sqrt(Pe/2))}return new zt(Ct/le,Ot/le)}let dt=[];for(let st=0,At=Q.length,H=At-1,Ct=st+1;st<At;st++,H++,Ct++)H===At&&(H=0),Ct===At&&(Ct=0),dt[st]=Et(Q[st],Q[H],Q[Ct]);let Mt=[],St,Wt=dt.concat();for(let st=0,At=J;st<At;st++){let H=X[st];St=[];for(let Ct=0,Ot=H.length,le=Ot-1,oe=Ct+1;Ct<Ot;Ct++,le++,oe++)le===Ot&&(le=0),oe===Ot&&(oe=0),St[Ct]=Et(H[Ct],H[le],H[oe]);Mt.push(St),Wt=Wt.concat(St)}let Zt;if(m===0)Zt=ir.triangulateShape(Q,X);else{let st=[],At=[];for(let H=0;H<m;H++){let Ct=H/m,Ot=x*Math.cos(Ct*Math.PI/2),le=S*Math.sin(Ct*Math.PI/2)+I;for(let oe=0,de=Q.length;oe<de;oe++){let _e=ht(Q[oe],dt[oe],le);It(_e.x,_e.y,-Ot),Ct===0&&st.push(_e)}for(let oe=0,de=J;oe<de;oe++){let _e=X[oe];St=Mt[oe];let V=[];for(let Pe=0,me=_e.length;Pe<me;Pe++){let L=ht(_e[Pe],St[Pe],le);It(L.x,L.y,-Ot),Ct===0&&V.push(L)}Ct===0&&At.push(V)}}Zt=ir.triangulateShape(st,At)}let ke=Zt.length,Ee=S+I;for(let st=0;st<ut;st++){let At=f?ht($[st],Wt[st],Ee):$[st];R?(G.copy(b.normals[0]).multiplyScalar(At.x),N.copy(b.binormals[0]).multiplyScalar(At.y),T.copy(B[0]).add(G).add(N),It(T.x,T.y,T.z)):It(At.x,At.y,0)}for(let st=1;st<=u;st++)for(let At=0;At<ut;At++){let H=f?ht($[At],Wt[At],Ee):$[At];R?(G.copy(b.normals[st]).multiplyScalar(H.x),N.copy(b.binormals[st]).multiplyScalar(H.y),T.copy(B[st]).add(G).add(N),It(T.x,T.y,T.z)):It(H.x,H.y,g/u*st)}for(let st=m-1;st>=0;st--){let At=st/m,H=x*Math.cos(At*Math.PI/2),Ct=S*Math.sin(At*Math.PI/2)+I;for(let Ot=0,le=Q.length;Ot<le;Ot++){let oe=ht(Q[Ot],dt[Ot],Ct);It(oe.x,oe.y,g+H)}for(let Ot=0,le=X.length;Ot<le;Ot++){let oe=X[Ot];St=Mt[Ot];for(let de=0,_e=oe.length;de<_e;de++){let V=ht(oe[de],St[de],Ct);R?It(V.x,V.y+B[u-1].y,B[u-1].x+H):It(V.x,V.y,g+H)}}}Ue(),_t();function Ue(){let st=s.length/3;if(f){let At=0,H=ut*At;for(let Ct=0;Ct<ke;Ct++){let Ot=Zt[Ct];ne(Ot[2]+H,Ot[1]+H,Ot[0]+H)}At=u+m*2,H=ut*At;for(let Ct=0;Ct<ke;Ct++){let Ot=Zt[Ct];ne(Ot[0]+H,Ot[1]+H,Ot[2]+H)}}else{for(let At=0;At<ke;At++){let H=Zt[At];ne(H[2],H[1],H[0])}for(let At=0;At<ke;At++){let H=Zt[At];ne(H[0]+ut*u,H[1]+ut*u,H[2]+ut*u)}}n.addGroup(st,s.length/3-st,0)}function _t(){let st=s.length/3,At=0;vt(Q,At),At+=Q.length;for(let H=0,Ct=X.length;H<Ct;H++){let Ot=X[H];vt(Ot,At),At+=Ot.length}n.addGroup(st,s.length/3-st,1)}function vt(st,At){let H=st.length;for(;--H>=0;){let Ct=H,Ot=H-1;Ot<0&&(Ot=st.length-1);for(let le=0,oe=u+m*2;le<oe;le++){let de=ut*le,_e=ut*(le+1),V=At+Ct+de,Pe=At+Ot+de,me=At+Ot+_e,L=At+Ct+_e;Yt(V,Pe,me,L)}}}function It(st,At,H){c.push(st),c.push(At),c.push(H)}function ne(st,At,H){ce(st),ce(At),ce(H);let Ct=s.length/3,Ot=O.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);ie(Ot[0]),ie(Ot[1]),ie(Ot[2])}function Yt(st,At,H,Ct){ce(st),ce(At),ce(Ct),ce(At),ce(H),ce(Ct);let Ot=s.length/3,le=O.generateSideWallUV(n,s,Ot-6,Ot-3,Ot-2,Ot-1);ie(le[0]),ie(le[1]),ie(le[3]),ie(le[1]),ie(le[2]),ie(le[3])}function ce(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function ie(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return I_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qu[s.type]().fromJSON(s)),new i(n,t.options)}},R_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new zt(r,a),new zt(o,c),new zt(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],g=t[n*3+2],f=t[s*3],x=t[s*3+1],S=t[s*3+2],I=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new zt(a,1-c),new zt(h,1-g),new zt(f,1-S),new zt(I,1-p)]:[new zt(o,1-c),new zt(u,1-g),new zt(x,1-S),new zt(m,1-p)]}};function I_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Co=class i extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,g=t/o,f=e/c,x=[],S=[],I=[],m=[];for(let p=0;p<u;p++){let O=p*f-a;for(let B=0;B<h;B++){let R=B*g-r;S.push(R,-O,0),I.push(0,0,1),m.push(B/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let O=0;O<o;O++){let B=O+h*p,R=O+h*(p+1),b=O+1+h*(p+1),N=O+1+h*p;x.push(B,R,N),x.push(R,b,N)}this.setIndex(x),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ro=class extends _n{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new W,r=new W;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){let g=c[h],f=g.start,x=g.count;for(let S=f,I=f+x;S<I;S+=3)for(let m=0;m<3;m++){let p=o.getX(S+m),O=o.getX(S+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,O),Cp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let h=0;h<3;h++){let u=3*o+h,g=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,g),Cp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new gn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Cp(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Rp(s))s.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qn(i){let t={};for(let e=0;e<i.length;e++){let n=fr(i[e]);for(let s in n)t[s]=n[s]}return t}function Rp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function P_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ld(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}var Yo={clone:fr,merge:qn},L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=P_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bc=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Io=class extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wc=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tc=class extends Is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zu,endingEnd:Zu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ju:r=t,o=2*e-n;break;case Ku:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ju:a=t,c=2*n-e;break;case Ku:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,x=this._weightNext,S=(n-e)/(s-e),I=S*S,m=I*S,p=-f*m+2*f*I-f*S,O=(1+f)*m+(-1.5-2*f)*I+(-.5+f)*S+1,B=(-1-x)*m+(1.5+x)*I+.5*S,R=x*m-x*I;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+O*a[h+b]+B*a[c+b]+R*a[g+b];return r}},Ac=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),g=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*g+a[c+f]*u;return r}},Cc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rc=class extends Is{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,g=this.outTangents;if(!u||!g){let S=(n-e)/(s-e),I=1-S;for(let m=0;m!==o;++m)r[m]=a[h+m]*I+a[c+m]*S;return r}let f=o*2,x=t-1;for(let S=0;S!==o;++S){let I=a[h+S],m=a[c+S],p=x*f+S*2,O=g[p],B=g[p+1],R=t*f+S*2,b=u[R],N=u[R+1],G=U_(n,e,O,b,s);r[S]=Tm(G,I,B,N,m)}return r}};function Tm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function N_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function U_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Tm(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=N_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var di=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wu(t.settings)&&(n.settings={inTangents:Vr(t.settings.inTangents,Array),outTangents:Vr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case io:e=this.InterpolantFactoryMethodDiscrete;break;case oc:e=this.InterpolantFactoryMethodLinear;break;case Jl:e=this.InterpolantFactoryMethodSmooth;break;case Yu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return pe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return Jl;case this.InterpolantFactoryMethodBezier:return Yu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wu(this.settings)&&(Ip(this.settings.inTangents,t),Ip(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(xe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(xe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){xe("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){xe("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&b0(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){xe("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let g=o*n,f=g-n,x=g+n;for(let S=0;S!==n;++S){let I=e[g+S];if(I!==e[f+S]||I!==e[x+S]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let g=o*n,f=a*n;for(let x=0;x!==n;++x)e[f+x]=e[g+x]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ip(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=oc;var Ps=class extends di{constructor(t,e,n){super(t,e,n)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=io;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Ic.prototype.ValueTypeName="color";var Pc=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Pc.prototype.ValueTypeName="number";var Lc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Wi.slerpFlat(r,0,a,h-o,a,h,c);return r}},Po=class extends di{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends di{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=io;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends di{constructor(t,e,n,s){super(t,e,n,s)}};Dc.prototype.ValueTypeName="vector";var Nc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,f=h.length;g<f;g+=2){let x=h[g],S=h[g+1];if(x.global&&(x.lastIndex=0),x.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Am=new Nc,Uc=class{constructor(t){this.manager=t!==void 0?t:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Do=class extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Xu=new Be,Pp=new W,Lp=new W,Fc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pp),Lp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Yr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Xu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ql=new W,Yl=new Wi,zi=new W,No=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ql,Yl,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ql,Yl,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new W,Dp=new zt,Np=new zt,Xn=class extends No{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(As.x,As.y).multiplyScalar(-t/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-t/As.z)}getViewSize(t,e){return this.getViewBounds(t,Dp,Np),e.subVectors(Np,Dp)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ra=class extends No{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},id=class extends Fc{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new id}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fo=class extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var $r=-90,Hr=1,Oc=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn($r,Hr,t,e);s.layers=this.layers,this.add(s);let r=new Xn($r,Hr,t,e);r.layers=this.layers,this.add(r);let a=new Xn($r,Hr,t,e);a.layers=this.layers,this.add(a);let o=new Xn($r,Hr,t,e);o.layers=this.layers,this.add(o);let c=new Xn($r,Hr,t,e);c.layers=this.layers,this.add(c);let h=new Xn($r,Hr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,g=t.getRenderTarget(),f=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(g,f,x),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Bc=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dd="\\[\\]\\.:\\/",F_=new RegExp("["+Dd+"]","g"),Nd="[^"+Dd+"]",O_="[^"+Dd.replace("\\.","")+"]",B_=/((?:WC+[\/:])*)/.source.replace("WC",Nd),k_=/(WCOD+)?/.source.replace("WCOD",O_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),V_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),$_=new RegExp("^"+B_+k_+z_+V_+"$"),H_=["material","materials","bones","map"],sd=class{constructor(t,e,n){let s=n||cn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},cn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(t){let e=$_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;xe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};cn.Composite=sd;cn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};cn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};cn.prototype.GetterByBindingType=[cn.prototype._getValue_direct,cn.prototype._getValue_array,cn.prototype._getValue_arrayElement,cn.prototype._getValue_toArray];cn.prototype.SetterByBindingTypeAndVersioning=[[cn.prototype._setValue_direct,cn.prototype._setValue_direct_setNeedsUpdate,cn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_array,cn.prototype._setValue_array_setNeedsUpdate,cn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_arrayElement,cn.prototype._setValue_arrayElement_setNeedsUpdate,cn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_fromArray,cn.prototype._setValue_fromArray_setNeedsUpdate,cn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nb=new Float32Array(1);var Ds=class extends uc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Up=new Be,Oo=class{constructor(t,e,n=0,s=1/0){this.ray=new rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):xe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Up.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(t,e=!0,n=[]){return rd(t,this,n,e),n.sort(Fp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rd(t[s],this,n,e);return n.sort(Fp),n}};function Fp(i,t){return i.distance-t.distance}function rd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)rd(r[a],t,e,!0)}}var ad=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Op=new W,Zl=new W,Gr=new W,Wr=new W,qu=new W,G_=new W,W_=new W,Bo=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Op.subVectors(t,this.start),Zl.subVectors(this.end,this.start);let n=Zl.dot(Zl);if(n===0)return 0;let r=Zl.dot(Op)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=G_,n=W_){let s=10000000000000001e-32,r,a,o=this.start,c=t.start,h=this.end,u=t.end;Gr.subVectors(h,o),Wr.subVectors(u,c),qu.subVectors(o,c);let g=Gr.dot(Gr),f=Wr.dot(Wr),x=Wr.dot(qu);if(g<=s&&f<=s)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(g<=s)r=0,a=x/f,a=be(a,0,1);else{let S=Gr.dot(qu);if(f<=s)a=0,r=be(-S/g,0,1);else{let I=Gr.dot(Wr),m=g*f-I*I;m!==0?r=be((I*x-S*f)/m,0,1):r=0,a=(I*r+x)/f,a<0?(a=0,r=be(-S/g,0,1)):a>1&&(a=1,r=be((I-S)/g,0,1))}}return e.copy(o).addScaledVector(Gr,r),n.copy(c).addScaledVector(Wr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ud(i,t,e,n){let s=X_(n);switch(e){case Ed:return i*t;case Xc:return i*t/s.components*s.byteLength;case qc:return i*t/s.components*s.byteLength;case Bs:return i*t*2/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case Td:return i*t*3/s.components*s.byteLength;case yi:return i*t*4/s.components*s.byteLength;case Zc:return i*t*4/s.components*s.byteLength;case $o:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:case Qc:return Math.max(i,16)*Math.max(t,8)/4;case Jc:case jc:return Math.max(i,8)*Math.max(t,8)/2;case th:case eh:case ih:case sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nh:case Xo:case rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yh:case Sh:case Mh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bh:case wh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case Eh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X_(i){switch(i){case ai:case Sd:return{byteLength:1,components:1};case la:case Md:case Ui:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Ni:case Hc:case vi:return{byteLength:4,components:1};case bd:case wd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Zm(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Y_(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,g=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,u),o.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,h){let u=c.array,g=c.updateRanges;if(i.bindBuffer(h,o),g.length===0)i.bufferSubData(h,0,u);else{g.sort((x,S)=>x.start-S.start);let f=0;for(let x=1;x<g.length;x++){let S=g[f],I=g[x];I.start<=S.start+S.count+1?S.count=Math.max(S.count,I.start+I.count-S.start):(++f,g[f]=I)}g.length=f+1;for(let x=0,S=g.length;x<S;x++){let I=g[x];i.bufferSubData(h,I.start*u.BYTES_PER_ELEMENT,u,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
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
#endif`,nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
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
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,cx=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xx=`#define PI 3.141592653589793
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
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vx=`#ifdef USE_ENVMAP
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
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
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
#endif`,qx=`uniform sampler2D dfgLUT;
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
}`,Yx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rv=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
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
#endif`,dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
}`,iy=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#define LAMBERT
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define MATCAP
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
}`,py=`#define MATCAP
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
}`,my=`#define NORMAL
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
}`,gy=`#define NORMAL
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
}`,_y=`#define PHONG
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
}`,xy=`#define PHONG
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
}`,vy=`#define STANDARD
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
}`,yy=`#define STANDARD
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
}`,Sy=`#define TOON
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
}`,My=`#define TOON
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
}`,by=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ty=`uniform vec3 color;
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
}`,Ay=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:K_,alphamap_pars_fragment:j_,alphatest_fragment:Q_,alphatest_pars_fragment:tx,aomap_fragment:ex,aomap_pars_fragment:nx,batching_pars_vertex:ix,batching_vertex:sx,begin_vertex:rx,beginnormal_vertex:ax,bsdfs:ox,iridescence_fragment:lx,bumpmap_pars_fragment:cx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:dx,clipping_planes_vertex:fx,color_fragment:px,color_pars_fragment:mx,color_pars_vertex:gx,color_vertex:_x,common:xx,cube_uv_reflection_fragment:vx,defaultnormal_vertex:yx,displacementmap_pars_vertex:Sx,displacementmap_vertex:Mx,emissivemap_fragment:bx,emissivemap_pars_fragment:wx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:Ax,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Rx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Vx,envmap_vertex:Px,fog_vertex:Lx,fog_pars_vertex:Dx,fog_fragment:Nx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:kx,lights_pars_begin:zx,lights_toon_fragment:$x,lights_toon_pars_fragment:Hx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:Zx,lights_fragment_end:Jx,lightprobes_pars_fragment:Kx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Qx,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:ev,map_fragment:nv,map_pars_fragment:iv,map_particle_fragment:sv,map_particle_pars_fragment:rv,metalnessmap_fragment:av,metalnessmap_pars_fragment:ov,morphinstance_vertex:lv,morphcolor_vertex:cv,morphnormal_vertex:hv,morphtarget_pars_vertex:uv,morphtarget_vertex:dv,normal_fragment_begin:fv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:_v,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:vv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:Mv,opaque_fragment:bv,packing:wv,premultiplied_alpha_fragment:Ev,project_vertex:Tv,dithering_fragment:Av,dithering_pars_fragment:Cv,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Lv,shadowmap_vertex:Dv,shadowmask_pars_fragment:Nv,skinbase_vertex:Uv,skinning_pars_vertex:Fv,skinning_vertex:Ov,skinnormal_vertex:Bv,specularmap_fragment:kv,specularmap_pars_fragment:zv,tonemapping_fragment:Vv,tonemapping_pars_fragment:$v,transmission_fragment:Hv,transmission_pars_fragment:Gv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:qv,worldpos_vertex:Yv,background_vert:Zv,background_frag:Jv,backgroundCube_vert:Kv,backgroundCube_frag:jv,cube_vert:Qv,cube_frag:ty,depth_vert:ey,depth_frag:ny,distance_vert:iy,distance_frag:sy,equirect_vert:ry,equirect_frag:ay,linedashed_vert:oy,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:hy,meshlambert_vert:uy,meshlambert_frag:dy,meshmatcap_vert:fy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:_y,meshphong_frag:xy,meshphysical_vert:vy,meshphysical_frag:yy,meshtoon_vert:Sy,meshtoon_frag:My,points_vert:by,points_frag:wy,shadow_vert:Ey,shadow_frag:Ty,sprite_vert:Ay,sprite_frag:Cy},Ht={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Qn={basic:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:qn([Ht.points,Ht.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:qn([Ht.common,Ht.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:qn([Ht.sprite,Ht.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:qn([Ht.lights,Ht.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Qn.physical={uniforms:qn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var Rh={r:0,b:0,g:0},Ry=new Be,Jm=new Me;Jm.set(-1,0,0,0,1,0,0,0,1);function Iy(i,t,e,n,s,r){let a=new fe(0),o=s===!0?0:1,c,h,u=null,g=0,f=null;function x(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){let R=O.backgroundBlurriness>0;B=t.get(B,R)}return B}function S(O){let B=!1,R=x(O);R===null?m(a,o):R&&R.isColor&&(m(R,1),B=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(O,B){let R=x(B);R&&(R.isCubeTexture||R.mapping===zo)?(h===void 0&&(h=new Rn(new ea(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:fr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(B.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Jm),h.material.toneMapped=Fe.getTransfer(R.colorSpace)!==qe,(u!==R||g!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,g=R.version,f=i.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Rn(new Co(2,2),new In({name:"BackgroundMaterial",uniforms:fr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=Fe.getTransfer(R.colorSpace)!==qe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||g!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,g=R.version,f=i.toneMapping),c.layers.enableAll(),O.unshift(c,c.geometry,c.material,0,0,null))}function m(O,B){O.getRGB(Rh,Ld(i)),e.buffers.color.setClear(Rh.r,Rh.g,Rh.b,B,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(O,B=1){a.set(O),o=B,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(O){o=O,m(a,o)},render:S,addToRenderList:I,dispose:p}}function Py(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(X,et,at,J,Q){let ht=!1,ut=g(X,J,at,et);r!==ut&&(r=ut,h(r.object)),ht=x(X,J,at,Q),ht&&S(X,J,at,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ht||a)&&(a=!1,R(X,et,at,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(X){return i.bindVertexArray(X)}function u(X){return i.deleteVertexArray(X)}function g(X,et,at,J){let Q=J.wireframe===!0,ht=n[et.id];ht===void 0&&(ht={},n[et.id]=ht);let ut=X.isInstancedMesh===!0?X.id:0,Et=ht[ut];Et===void 0&&(Et={},ht[ut]=Et);let dt=Et[at.id];dt===void 0&&(dt={},Et[at.id]=dt);let Mt=dt[Q];return Mt===void 0&&(Mt=f(c()),dt[Q]=Mt),Mt}function f(X){let et=[],at=[],J=[];for(let Q=0;Q<e;Q++)et[Q]=0,at[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:at,attributeDivisors:J,object:X,attributes:{},index:null}}function x(X,et,at,J){let Q=r.attributes,ht=et.attributes,ut=0,Et=at.getAttributes();for(let dt in Et)if(Et[dt].location>=0){let St=Q[dt],Wt=ht[dt];if(Wt===void 0&&(dt==="instanceMatrix"&&X.instanceMatrix&&(Wt=X.instanceMatrix),dt==="instanceColor"&&X.instanceColor&&(Wt=X.instanceColor)),St===void 0||St.attribute!==Wt||Wt&&St.data!==Wt.data)return!0;ut++}return r.attributesNum!==ut||r.index!==J}function S(X,et,at,J){let Q={},ht=et.attributes,ut=0,Et=at.getAttributes();for(let dt in Et)if(Et[dt].location>=0){let St=ht[dt];St===void 0&&(dt==="instanceMatrix"&&X.instanceMatrix&&(St=X.instanceMatrix),dt==="instanceColor"&&X.instanceColor&&(St=X.instanceColor));let Wt={};Wt.attribute=St,St&&St.data&&(Wt.data=St.data),Q[dt]=Wt,ut++}r.attributes=Q,r.attributesNum=ut,r.index=J}function I(){let X=r.newAttributes;for(let et=0,at=X.length;et<at;et++)X[et]=0}function m(X){p(X,0)}function p(X,et){let at=r.newAttributes,J=r.enabledAttributes,Q=r.attributeDivisors;at[X]=1,J[X]===0&&(i.enableVertexAttribArray(X),J[X]=1),Q[X]!==et&&(i.vertexAttribDivisor(X,et),Q[X]=et)}function O(){let X=r.newAttributes,et=r.enabledAttributes;for(let at=0,J=et.length;at<J;at++)et[at]!==X[at]&&(i.disableVertexAttribArray(at),et[at]=0)}function B(X,et,at,J,Q,ht,ut){ut===!0?i.vertexAttribIPointer(X,et,at,Q,ht):i.vertexAttribPointer(X,et,at,J,Q,ht)}function R(X,et,at,J){I();let Q=J.attributes,ht=at.getAttributes(),ut=et.defaultAttributeValues;for(let Et in ht){let dt=ht[Et];if(dt.location>=0){let Mt=Q[Et];if(Mt===void 0&&(Et==="instanceMatrix"&&X.instanceMatrix&&(Mt=X.instanceMatrix),Et==="instanceColor"&&X.instanceColor&&(Mt=X.instanceColor)),Mt!==void 0){let St=Mt.normalized,Wt=Mt.itemSize,Zt=t.get(Mt);if(Zt===void 0)continue;let ke=Zt.buffer,Ee=Zt.type,Ue=Zt.bytesPerElement,_t=Ee===i.INT||Ee===i.UNSIGNED_INT||Mt.gpuType===Hc;if(Mt.isInterleavedBufferAttribute){let vt=Mt.data,It=vt.stride,ne=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<dt.locationSize;Yt++)p(dt.location+Yt,vt.meshPerAttribute);X.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<dt.locationSize;Yt++)m(dt.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Yt=0;Yt<dt.locationSize;Yt++)B(dt.location+Yt,Wt/dt.locationSize,Ee,St,It*Ue,(ne+Wt/dt.locationSize*Yt)*Ue,_t)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<dt.locationSize;vt++)p(dt.location+vt,Mt.meshPerAttribute);X.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<dt.locationSize;vt++)m(dt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let vt=0;vt<dt.locationSize;vt++)B(dt.location+vt,Wt/dt.locationSize,Ee,St,Wt*Ue,Wt/dt.locationSize*vt*Ue,_t)}}else if(ut!==void 0){let St=ut[Et];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(dt.location,St);break;case 3:i.vertexAttrib3fv(dt.location,St);break;case 4:i.vertexAttrib4fv(dt.location,St);break;default:i.vertexAttrib1fv(dt.location,St)}}}}O()}function b(){D();for(let X in n){let et=n[X];for(let at in et){let J=et[at];for(let Q in J){let ht=J[Q];for(let ut in ht)u(ht[ut].object),delete ht[ut];delete J[Q]}}delete n[X]}}function N(X){if(n[X.id]===void 0)return;let et=n[X.id];for(let at in et){let J=et[at];for(let Q in J){let ht=J[Q];for(let ut in ht)u(ht[ut].object),delete ht[ut];delete J[Q]}}delete n[X.id]}function G(X){for(let et in n){let at=n[et];for(let J in at){let Q=at[J];if(Q[X.id]===void 0)continue;let ht=Q[X.id];for(let ut in ht)u(ht[ut].object),delete ht[ut];delete Q[X.id]}}}function T(X){for(let et in n){let at=n[et],J=X.isInstancedMesh===!0?X.id:0,Q=at[J];if(Q!==void 0){for(let ht in Q){let ut=Q[ht];for(let Et in ut)u(ut[Et].object),delete ut[Et];delete Q[ht]}delete at[J],Object.keys(at).length===0&&delete n[et]}}}function D(){$(),a=!0,r!==s&&(r=s,h(r.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:$,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:m,disableUnusedAttributes:O}}function Ly(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==yi&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(G){let T=G===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ai&&G!==vi&&!T&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(pe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:x,maxVertexTextures:S,maxTextureSize:I,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:R,maxSamples:b,samples:N}}function Ny(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ci,o=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let x=g.length!==0||f||n!==0||s;return s=f,n=g.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){e=u(g,f,0)},this.setState=function(g,f,x){let S=g.clippingPlanes,I=g.clipIntersection,m=g.clipShadows,p=i.get(g);if(!s||S===null||S.length===0||r&&!m)r?u(null):h();else{let O=r?0:n,B=O*4,R=p.clippingState||null;c.value=R,R=u(S,f,B,x);for(let b=0;b!==B;++b)R[b]=e[b];p.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=O}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(g,f,x,S){let I=g!==null?g.length:0,m=null;if(I!==0){if(m=c.value,S!==!0||m===null){let p=x+I*4,O=f.matrixWorldInverse;o.getNormalMatrix(O),(m===null||m.length<p)&&(m=new Float32Array(p));for(let B=0,R=x;B!==I;++B,R+=4)a.copy(g[B]).applyMatrix4(O,o),a.normal.toArray(m,R),m[R+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,m}}var ua=4,Uy=6,Fy=20,Oy=256,Zo=new ra,Cm=new fe,Fd=null,Od=0,Bd=0,kd=!1,By=new W,pr=new W,Ph=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=By}=r;Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fd,Od,Bd),this._renderer.xr.enabled=kd,t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ui,format:yi,colorSpace:so,depthBuffer:!1},s=Rm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ky(r)),this._blurMaterial=Vy(r,t,e),this._ggxMaterial=zy(r,t,e)}return s}_compileMaterial(t){let e=new Rn(new _n,t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,s,r){let c=new Xn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,x=g.toneMapping;g.getClearColor(Cm),g.toneMapping=Di,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new ea,new ar({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,m=I.material,p=!1,O=t.background;O?O.isColor&&(m.color.copy(O),t.background=null,p=!0):(m.color.copy(Cm),p=!0);for(let B=0;B<6;B++){let R=B%3;R===0?(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[B],r.y,r.z)):R===1?(c.up.set(0,0,h[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[B],r.z)):(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[B]));let b=this._cubeSize;ha(s,R*b,B>2?b:0,b,b),g.setRenderTarget(s),p&&g.render(I,c),g.render(t,c)}g.toneMapping=x,g.autoClear=f,t.background=O}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Us||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ha(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-u*u),f=h*1.25,x=g*f,{_lodMax:S}=this,I=this._sizeLods[n],m=3*I*(n>S-ua?n-S+ua:0),p=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=x,c.mipInt.value=S-e,ha(r,m,p,3*I,2*I),s.setRenderTarget(r),s.render(o,Zo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,ha(t,m,p,3*I,2*I),s.setRenderTarget(t),s.render(o,Zo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],g=3*u*(s>this._lodMax-ua?s-this._lodMax+ua:0),f=4*(this._cubeSize-u);ha(e,g,f,3*u,2*u),a.setRenderTarget(e),a.render(c,Zo)}};function ky(i){let t=[],e=[],n=i,s=i-ua+1+Uy;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,u=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,f=6,x=3,S=new Float32Array(x*f*g),I=new Float32Array(x*f*g);for(let p=0;p<g;p++){let O=p%3*2/3-1,B=p>2?0:-1,R=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];S.set(R,x*f*p);for(let b=0;b<f;b++){let N=u[b*2]*2-1,G=u[b*2+1]*2-1;p===0?pr.set(1,G,N):p===1?pr.set(-N,1,-G):p===2?pr.set(-N,G,1):p===3?pr.set(-1,G,-N):p===4?pr.set(-N,-1,G):pr.set(N,G,-1),pr.toArray(I,(p*f+b)*x)}}let m=new _n;m.setAttribute("position",new Qe(S,x)),m.setAttribute("outputDirection",new Qe(I,x)),e.push(new Rn(m,null)),n>ua&&n--}return{lodMeshes:e,sizeLods:t}}function Rm(i,t,e){let n=new si(i,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zy(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Oy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Vy(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Fy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Im(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Pm(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lh=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _o(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ea(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Yi});r.uniforms.tEquirect.value=e;let a=new Rn(s,r),o=e.minFilter;return e.minFilter===Fs&&(e.minFilter=Fn),new Oc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function $y(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,x=!1){return f==null?null:x?a(f):r(f)}function r(f){if(f&&f.isTexture){let x=f.mapping;if(x===zc||x===Vc)if(t.has(f)){let S=t.get(f).texture;return o(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let I=new Lh(S.height);return I.fromEquirectangularTexture(i,f),t.set(f,I),f.addEventListener("dispose",h),o(I.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let x=f.mapping,S=x===zc||x===Vc,I=x===Us||x===dr;if(S||I){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ph(i)),m=S?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let O=f.image;return S&&O&&O.height>0||I&&O&&c(O)?(n===null&&(n=new Ph(i)),m=S?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,x){return x===zc?f.mapping=Us:x===Vc&&(f.mapping=dr),f}function c(f){let x=0,S=6;for(let I=0;I<S;I++)f[I]!==void 0&&x++;return x===S}function h(f){let x=f.target;x.removeEventListener("dispose",h);let S=t.get(x);S!==void 0&&(t.delete(x),S.dispose())}function u(f){let x=f.target;x.removeEventListener("dispose",u);let S=e.get(x);S!==void 0&&(e.delete(x),S.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Hy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&sr("WebGLRenderer: "+n+" extension not supported."),s}}}function Gy(i,t,e,n){let s={},r=new WeakMap;function a(g){let f=g.target;f.index!==null&&t.remove(f.index);for(let S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",a),delete s[f.id];let x=r.get(f);x&&(t.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(g,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(g){let f=g.attributes;for(let x in f)t.update(f[x],i.ARRAY_BUFFER)}function h(g){let f=[],x=g.index,S=g.attributes.position,I=0;if(S===void 0)return;if(x!==null){let O=x.array;I=x.version;for(let B=0,R=O.length;B<R;B+=3){let b=O[B+0],N=O[B+1],G=O[B+2];f.push(b,N,N,G,G,b)}}else{let O=S.array;I=S.version;for(let B=0,R=O.length/3-1;B<R;B+=3){let b=B+0,N=B+1,G=B+2;f.push(b,N,N,G,G,b)}}let m=new(S.count>=65535?uo:ho)(f,1);m.version=I;let p=r.get(g);p&&t.remove(p),r.set(g,m)}function u(g){let f=r.get(g);if(f){let x=g.index;x!==null&&f.version<x.version&&h(g)}else h(g);return r.get(g)}return{get:o,update:c,getWireframeAttribute:u}}function Wy(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function c(g,f){i.drawElements(n,f,r,g*a),e.update(f,n,1)}function h(g,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,g*a,x),e.update(f,n,x))}function u(g,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,x);let I=0;for(let m=0;m<x;m++)I+=f[m];e.update(I,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function Xy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qy(i,t,e){let n=new WeakMap,s=new Ye;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==g){let D=function(){G.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,I=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],O=o.morphAttributes.color||[],B=0;x===!0&&(B=1),S===!0&&(B=2),I===!0&&(B=3);let R=o.attributes.position.count*B,b=1;R>t.maxTextureSize&&(b=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let N=new Float32Array(R*b*4*g),G=new lo(N,R,b,g);G.type=vi,G.needsUpdate=!0;let T=B*4;for(let $=0;$<g;$++){let X=m[$],et=p[$],at=O[$],J=R*b*4*$;for(let Q=0;Q<X.count;Q++){let ht=Q*T;x===!0&&(s.fromBufferAttribute(X,Q),N[J+ht+0]=s.x,N[J+ht+1]=s.y,N[J+ht+2]=s.z,N[J+ht+3]=0),S===!0&&(s.fromBufferAttribute(et,Q),N[J+ht+4]=s.x,N[J+ht+5]=s.y,N[J+ht+6]=s.z,N[J+ht+7]=0),I===!0&&(s.fromBufferAttribute(at,Q),N[J+ht+8]=s.x,N[J+ht+9]=s.y,N[J+ht+10]=s.z,N[J+ht+11]=at.itemSize===4?s.w:1)}}f={count:g,texture:G,size:new zt(R,b)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let I=0;I<h.length;I++)x+=h[I];let S=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Yy(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,g=h.geometry,f=t.get(h,g);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let x=h.skeleton;r.get(x)!==u&&(x.update(),r.set(x,u))}return f}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Zy={[fd]:"LINEAR_TONE_MAPPING",[pd]:"REINHARD_TONE_MAPPING",[md]:"CINEON_TONE_MAPPING",[gd]:"ACES_FILMIC_TONE_MAPPING",[xd]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[_d]:"CUSTOM_TONE_MAPPING"};function Jy(i,t,e,n,s,r){let a=new si(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new _n;h.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gn([0,2,0,0,2,0],2));let u=new bc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Rn(h,u),f=new ra(-1,1,1,-1,0,1),x=null,S=null,I=!1,m,p=null,O=[],B=!1;this.setSize=function(R,b){a.setSize(R,b),o!==null&&o.setSize(R,b),c!==null&&c.setSize(R,b);for(let N=0;N<O.length;N++){let G=O[N];G.setSize&&G.setSize(R,b)}},this.setEffects=function(R){O=R,B=O.length>0&&O[0].isRenderPass===!0;let b=a.width,N=a.height;O.length>0&&o===null&&(o=new si(b,N,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),c=new si(b,N,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<O.length;G++){let T=O[G];T.setSize&&T.setSize(b,N)}},this.begin=function(R,b){if(I||R.toneMapping===Di&&O.length===0)return!1;if(p=b,b!==null){let N=b.width,G=b.height;(a.width!==N||a.height!==G)&&this.setSize(N,G)}return B===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Di,!0},this.hasRenderPass=function(){return B},this.end=function(R,b){R.toneMapping=m,I=!0;let N=a,G=o;for(let T=0;T<O.length;T++){let D=O[T];D.enabled!==!1&&(D.render(R,G,N,b),D.needsSwap!==!1&&(N=G,G=G===o?c:o))}if(x!==R.outputColorSpace||S!==R.toneMapping){x=R.outputColorSpace,S=R.toneMapping,u.defines={},Fe.getTransfer(x)===qe&&(u.defines.SRGB_TRANSFER="");let T=Zy[S];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=N.texture,R.setRenderTarget(p),R.render(g,f),p=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Km=new ii,$d=new Rs(1,1),jm=new lo,Qm=new hc,tg=new _o,Lm=[],Dm=[],Nm=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function fa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lm[s];if(r===void 0&&(r=new Float32Array(s),Lm[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function bn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uh(i,t){let e=Dm[t];e===void 0&&(e=new Int32Array(t),Dm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2fv(this.addr,t),bn(e,t)}}function Qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;i.uniform3fv(this.addr,t),bn(e,t)}}function tS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4fv(this.addr,t),bn(e,t)}}function eS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Fm.set(n),i.uniformMatrix2fv(this.addr,!1,Fm),bn(e,n)}}function nS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Um.set(n),i.uniformMatrix3fv(this.addr,!1,Um),bn(e,n)}}function iS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Nm.set(n),i.uniformMatrix4fv(this.addr,!1,Nm),bn(e,n)}}function sS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2iv(this.addr,t),bn(e,t)}}function aS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3iv(this.addr,t),bn(e,t)}}function oS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4iv(this.addr,t),bn(e,t)}}function lS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2uiv(this.addr,t),bn(e,t)}}function hS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3uiv(this.addr,t),bn(e,t)}}function uS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4uiv(this.addr,t),bn(e,t)}}function dS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($d.compareFunction=e.isReversedDepthBuffer()?Ch:Ah,r=$d):r=Km,e.setTexture2D(t||r,s)}function fS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qm,s)}function pS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tg,s)}function mS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jm,s)}function gS(i){switch(i){case 5126:return Ky;case 35664:return jy;case 35665:return Qy;case 35666:return tS;case 35674:return eS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return sS;case 35667:case 35671:return rS;case 35668:case 35672:return aS;case 35669:case 35673:return oS;case 5125:return lS;case 36294:return cS;case 36295:return hS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}function _S(i,t){i.uniform1fv(this.addr,t)}function xS(i,t){let e=fa(t,this.size,2);i.uniform2fv(this.addr,e)}function vS(i,t){let e=fa(t,this.size,3);i.uniform3fv(this.addr,e)}function yS(i,t){let e=fa(t,this.size,4);i.uniform4fv(this.addr,e)}function SS(i,t){let e=fa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function MS(i,t){let e=fa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bS(i,t){let e=fa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wS(i,t){i.uniform1iv(this.addr,t)}function ES(i,t){i.uniform2iv(this.addr,t)}function TS(i,t){i.uniform3iv(this.addr,t)}function AS(i,t){i.uniform4iv(this.addr,t)}function CS(i,t){i.uniform1uiv(this.addr,t)}function RS(i,t){i.uniform2uiv(this.addr,t)}function IS(i,t){i.uniform3uiv(this.addr,t)}function PS(i,t){i.uniform4uiv(this.addr,t)}function LS(i,t,e){let n=this.cache,s=t.length,r=Uh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$d:a=Km;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function DS(i,t,e){let n=this.cache,s=t.length,r=Uh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qm,r[a])}function NS(i,t,e){let n=this.cache,s=t.length,r=Uh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tg,r[a])}function US(i,t,e){let n=this.cache,s=t.length,r=Uh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jm,r[a])}function FS(i){switch(i){case 5126:return _S;case 35664:return xS;case 35665:return vS;case 35666:return yS;case 35674:return SS;case 35675:return MS;case 35676:return bS;case 5124:case 35670:return wS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return CS;case 36294:return RS;case 36295:return IS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return US}}var Hd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gS(e.type)}},Gd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=FS(e.type)}},Wd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zd=/(\w+)(\])?(\[|\.)?/g;function Om(i,t){i.seq.push(t),i.map[t.id]=t}function OS(i,t,e){let n=i.name,s=n.length;for(zd.lastIndex=0;;){let r=zd.exec(n),a=zd.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Om(e,h===void 0?new Hd(o,i,t):new Gd(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new Wd(o),Om(e,g)),e=g}}}var da=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);OS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var BS=37297,kS=0;function zS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var km=new Me;function VS(i){Fe._getMatrix(km,Fe.workingColorSpace,i);let t=`mat3( ${km.elements.map(e=>e.toFixed(4))} )`;switch(Fe.getTransfer(i)){case ro:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+zS(i.getShaderSource(t),o)}else return r}function $S(i,t){let e=VS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var HS={[fd]:"Linear",[pd]:"Reinhard",[md]:"Cineon",[gd]:"ACESFilmic",[xd]:"AgX",[vd]:"Neutral",[_d]:"Custom"};function GS(i,t){let e=HS[t];return e===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ih=new W;function WS(){Fe.getLuminanceCoefficients(Ih);let i=Ih.x.toFixed(4),t=Ih.y.toFixed(4),e=Ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function qS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function YS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ko(i){return i!==""}function Vm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $m(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ZS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(i){return i.replace(ZS,KS)}var JS=new Map;function KS(i,t){let e=Ie[t];if(e===void 0){let n=JS.get(t);if(n!==void 0)e=Ie[n],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xd(e)}var jS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(i){return i.replace(jS,QS)}function QS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var tM={[ko]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function eM(i){return tM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nM={[Us]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE_UV"};function iM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sM={[dr]:"ENVMAP_MODE_REFRACTION"};function rM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aM={[kc]:"ENVMAP_BLENDING_MULTIPLY",[rm]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};function oM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":aM[i.combine]||"ENVMAP_BLENDING_NONE"}function lM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=eM(e),h=iM(e),u=rM(e),g=oM(e),f=lM(e),x=XS(e),S=qS(r),I=s.createProgram(),m,p,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ko).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ko).join(`
`),p.length>0&&(p+=`
`)):(m=[Gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[Gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Ie.tonemapping_pars_fragment:"",e.toneMapping!==Di?GS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,$S("linearToOutputTexel",e.outputColorSpace),WS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ko).join(`
`)),a=Xd(a),a=Vm(a,e),a=$m(a,e),o=Xd(o),o=Vm(o,e),o=$m(o,e),a=Hm(a),o=Hm(o),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=O+m+a,R=O+p+o,b=Bm(s,s.VERTEX_SHADER,B),N=Bm(s,s.FRAGMENT_SHADER,R);s.attachShader(I,b),s.attachShader(I,N),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(X){if(i.debug.checkShaderErrors){let et=s.getProgramInfoLog(I)||"",at=s.getShaderInfoLog(b)||"",J=s.getShaderInfoLog(N)||"",Q=et.trim(),ht=at.trim(),ut=J.trim(),Et=!0,dt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,b,N);else{let Mt=zm(s,b,"vertex"),St=zm(s,N,"fragment");xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Q+`
`+Mt+`
`+St)}else Q!==""?pe("WebGLProgram: Program Info Log:",Q):(ht===""||ut==="")&&(dt=!1);dt&&(X.diagnostics={runnable:Et,programLog:Q,vertexShader:{log:ht,prefix:m},fragmentShader:{log:ut,prefix:p}})}s.deleteShader(b),s.deleteShader(N),T=new da(s,I),D=YS(s,I)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let $=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(I,BS)),$},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kS++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=b,this.fragmentShader=N,this}var hM=0,qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yd(t),e.set(t,n)),n}},Yd=class{constructor(t){this.id=hM++,this.code=t,this.usedTimes=0}};function uM(i){return i===Bs||i===Xo||i===qo}function dM(i,t,e,n,s,r){let a=new jr,o=new qd,c=new Set,h=[],u=new Map,g=n.logarithmicDepthBuffer,f=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function I(T,D,$,X,et,at){let J=X.fog,Q=et.geometry,ht=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,ut=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Et=t.get(T.envMap||ht,ut),dt=Et&&Et.mapping===zo?Et.image.height:null,Mt=x[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&pe("WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Wt=St!==void 0?St.length:0,Zt=0;Q.morphAttributes.position!==void 0&&(Zt=1),Q.morphAttributes.normal!==void 0&&(Zt=2),Q.morphAttributes.color!==void 0&&(Zt=3);let ke,Ee,Ue,_t;if(Mt){let Te=Qn[Mt];ke=Te.vertexShader,Ee=Te.fragmentShader}else{ke=T.vertexShader,Ee=T.fragmentShader;let Te=o.getVertexShaderStage(T),Ae=o.getFragmentShaderStage(T);o.update(T,Te,Ae),Ue=Te.id,_t=Ae.id}let vt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),ne=et.isInstancedMesh===!0,Yt=et.isBatchedMesh===!0,ce=!!T.map,ie=!!T.matcap,st=!!Et,At=!!T.aoMap,H=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Ot=!!T.normalMap,le=!!T.displacementMap,oe=!!T.emissiveMap,de=!!T.metalnessMap,_e=!!T.roughnessMap,V=T.anisotropy>0,Pe=T.clearcoat>0,me=T.dispersion>0,L=T.retroreflectivity>0,M=T.iridescence>0,q=T.sheen>0,ot=T.transmission>0,ft=V&&!!T.anisotropyMap,Pt=Pe&&!!T.clearcoatMap,Ft=Pe&&!!T.clearcoatNormalMap,mt=Pe&&!!T.clearcoatRoughnessMap,yt=M&&!!T.iridescenceMap,kt=M&&!!T.iridescenceThicknessMap,se=q&&!!T.sheenColorMap,Xt=q&&!!T.sheenRoughnessMap,Vt=!!T.specularMap,re=!!T.specularColorMap,he=!!T.specularIntensityMap,Se=ot&&!!T.transmissionMap,Z=ot&&!!T.thicknessMap,Ut=!!T.gradientMap,xt=!!T.alphaMap,$t=T.alphaTest>0,qt=!!T.alphaHash,wt=!!T.extensions,ae=Di;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ae=i.toneMapping);let te={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:ke,fragmentShader:Ee,defines:T.defines,customVertexShaderID:Ue,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&et._colorsTexture!==null,instancing:ne,instancingColor:ne&&et.instanceColor!==null,instancingMorph:ne&&et.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:ie,envMap:st,envMapMode:st&&Et.mapping,envMapCubeUVHeight:dt,aoMap:At,lightMap:H,bumpMap:Ct,normalMap:Ot,displacementMap:le,emissiveMap:oe,normalMapObjectSpace:Ot&&T.normalMapType===cm,normalMapTangentSpace:Ot&&T.normalMapType===Th,packedNormalMap:Ot&&T.normalMapType===Th&&uM(T.normalMap.format),metalnessMap:de,roughnessMap:_e,anisotropy:V,anisotropyMap:ft,clearcoat:Pe,clearcoatMap:Pt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:mt,dispersion:me,retroreflection:L,iridescence:M,iridescenceMap:yt,iridescenceThicknessMap:kt,sheen:q,sheenColorMap:se,sheenRoughnessMap:Xt,specularMap:Vt,specularColorMap:re,specularIntensityMap:he,transmission:ot,transmissionMap:Se,thicknessMap:Z,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===oa&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:$t,alphaHash:qt,combine:T.combine,mapUv:ce&&S(T.map.channel),aoMapUv:At&&S(T.aoMap.channel),lightMapUv:H&&S(T.lightMap.channel),bumpMapUv:Ct&&S(T.bumpMap.channel),normalMapUv:Ot&&S(T.normalMap.channel),displacementMapUv:le&&S(T.displacementMap.channel),emissiveMapUv:oe&&S(T.emissiveMap.channel),metalnessMapUv:de&&S(T.metalnessMap.channel),roughnessMapUv:_e&&S(T.roughnessMap.channel),anisotropyMapUv:ft&&S(T.anisotropyMap.channel),clearcoatMapUv:Pt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:se&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&S(T.sheenRoughnessMap.channel),specularMapUv:Vt&&S(T.specularMap.channel),specularColorMapUv:re&&S(T.specularColorMap.channel),specularIntensityMapUv:he&&S(T.specularIntensityMap.channel),transmissionMapUv:Se&&S(T.transmissionMap.channel),thicknessMapUv:Z&&S(T.thicknessMap.channel),alphaMapUv:xt&&S(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ot||V),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Q.attributes.uv&&(ce||xt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Ot===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:It,skinning:et.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Zt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:at.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Fe.getTransfer(T.map.colorSpace)===qe,decodeVideoTextureEmissive:oe&&T.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(T.emissiveMap.colorSpace)===qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:wt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&T.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function m(T){let D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(let $ in T.defines)D.push($),D.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(p(D,T),O(D,T),D.push(i.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function p(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numSunLights),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numSunLightShadows),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function O(T,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.retroreflection&&a.enable(24),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),T.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),D.hasPositionAttribute&&a.enable(23),T.push(a.mask)}function B(T){let D=x[T.type],$;if(D){let X=Qn[D];$=Yo.clone(X.uniforms)}else $=T.uniforms;return $}function R(T,D){let $=u.get(D);return $!==void 0?++$.usedTimes:($=new cM(i,D,T,s),h.push($),u.set(D,$)),$}function b(T){if(--T.usedTimes===0){let D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),u.delete(T.cacheKey),T.destroy()}}function N(T){o.remove(T)}function G(){o.dispose()}return{getParameters:I,getProgramCacheKey:m,getUniforms:B,acquireProgram:R,releaseProgram:b,releaseShaderCache:N,programs:h,dispose:G}}function fM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let x=0;return f.isInstancedMesh&&(x+=2),f.isSkinnedMesh&&(x+=1),x}function o(f,x,S,I,m,p){let O=i[t];return O===void 0?(O={id:f.id,object:f,geometry:x,material:S,materialVariant:a(f),groupOrder:I,renderOrder:f.renderOrder,z:m,group:p},i[t]=O):(O.id=f.id,O.object=f,O.geometry=x,O.material=S,O.materialVariant=a(f),O.groupOrder=I,O.renderOrder=f.renderOrder,O.z=m,O.group=p),t++,O}function c(f,x,S,I,m,p,O){O.reversedDepth===!0&&(m=-m);let B=o(f,x,S,I,m,p);S.transmission>0?n.push(B):S.transparent===!0?s.push(B):e.push(B)}function h(f,x,S,I,m,p){let O=o(f,x,S,I,m,p);S.transmission>0?n.unshift(O):S.transparent===!0?s.unshift(O):e.unshift(O)}function u(f,x){e.length>1&&e.sort(f||pM),n.length>1&&n.sort(x||Wm),s.length>1&&s.sort(x||Wm)}function g(){for(let f=t,x=i.length;f<x;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:u}}function mM(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xm,i.set(n,[a])):s>=r.length?(a=new Xm,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new fe};break;case"SpotLight":e={position:new W,direction:new W,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function _M(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var xM=0;function vM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yM(i){let t=new gM,e=_M(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new W);let s=new W,r=new Be,a=new Be;function o(h){let u=0,g=0,f=0;for(let et=0;et<9;et++)n.probe[et].set(0,0,0);let x=0,S=0,I=0,m=0,p=0,O=0,B=0,R=0,b=0,N=0,G=0,T=0,D=0,$=0;h.sort(vM);for(let et=0,at=h.length;et<at;et++){let J=h[et],Q=J.color,ht=J.intensity,ut=J.distance,Et=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Bs?Et=J.shadow.map.texture:Et=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)u+=Q.r*ht,g+=Q.g*ht,f+=Q.b*ht;else if(J.isLightProbe){for(let dt=0;dt<9;dt++)n.probe[dt].addScaledVector(J.sh.coefficients[dt],ht);$++}else if(J.isSunLight){let dt=t.get(J);if(dt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[S]=St,n.sunShadowMap[S]=Et;let Wt=Mt.getViewportCount();for(let Zt=0;Zt<Wt;Zt++)n.sunShadowMatrix[I+Zt]=Mt.getMatrix(Zt),n.sunShadowCascade[I+Zt]=Mt._cascadeData[Zt];I+=Wt,S++}n.sun[x]=dt,x++}else if(J.isDirectionalLight){let dt=t.get(J);if(dt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.directionalShadow[m]=St,n.directionalShadowMap[m]=Et,n.directionalShadowMatrix[m]=J.shadow.matrix,b++}n.directional[m]=dt,m++}else if(J.isSpotLight){let dt=t.get(J);dt.position.setFromMatrixPosition(J.matrixWorld),dt.color.copy(Q).multiplyScalar(ht),dt.distance=ut,dt.coneCos=Math.cos(J.angle),dt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),dt.decay=J.decay,n.spot[O]=dt;let Mt=J.shadow;if(J.map&&(n.spotLightMap[T]=J.map,T++,Mt.updateMatrices(J),J.castShadow&&D++),n.spotLightMatrix[O]=Mt.matrix,J.castShadow){let St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.spotShadow[O]=St,n.spotShadowMap[O]=Et,G++}O++}else if(J.isRectAreaLight){let dt=t.get(J);dt.color.copy(Q).multiplyScalar(ht),dt.halfWidth.set(J.width*.5,0,0),dt.halfHeight.set(0,J.height*.5,0),n.rectArea[B]=dt,B++}else if(J.isPointLight){let dt=t.get(J);if(dt.color.copy(J.color).multiplyScalar(J.intensity),dt.distance=J.distance,dt.decay=J.decay,J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,St.shadowCameraNear=Mt.camera.near,St.shadowCameraFar=Mt.camera.far,n.pointShadow[p]=St,n.pointShadowMap[p]=Et,n.pointShadowMatrix[p]=J.shadow.matrix,N++}n.point[p]=dt,p++}else if(J.isHemisphereLight){let dt=t.get(J);dt.skyColor.copy(J.color).multiplyScalar(ht),dt.groundColor.copy(J.groundColor).multiplyScalar(ht),n.hemi[R]=dt,R++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=f;let X=n.hash;(X.sunLength!==x||X.directionalLength!==m||X.pointLength!==p||X.spotLength!==O||X.rectAreaLength!==B||X.hemiLength!==R||X.numSunShadows!==S||X.numDirectionalShadows!==b||X.numPointShadows!==N||X.numSpotShadows!==G||X.numSpotMaps!==T||X.numLightProbes!==$)&&(n.sun.length=x,n.directional.length=m,n.spot.length=O,n.rectArea.length=B,n.point.length=p,n.hemi.length=R,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=N,n.pointShadowMap.length=N,n.pointShadowMatrix.length=N,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+T-D,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=$,X.sunLength=x,X.directionalLength=m,X.pointLength=p,X.spotLength=O,X.rectAreaLength=B,X.hemiLength=R,X.numSunShadows=S,X.numDirectionalShadows=b,X.numPointShadows=N,X.numSpotShadows=G,X.numSpotMaps=T,X.numLightProbes=$,n.version=xM++)}function c(h,u){let g=0,f=0,x=0,S=0,I=0,m=0,p=u.matrixWorldInverse;for(let O=0,B=h.length;O<B;O++){let R=h[O];if(R.isSunLight){let b=n.sun[g];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(p),g++}else if(R.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(R.isSpotLight){let b=n.spot[S];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),S++}else if(R.isRectAreaLight){let b=n.rectArea[I];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(R.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),x++}else if(R.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function qm(i){let t=new yM(i),e=[],n=[],s=[];function r(f){g.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function h(){t.setup(e)}function u(f){t.setupView(e,f)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function SM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qm(i),t.set(s,[o])):r>=a.length?(o=new qm(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`,wM=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],EM=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Ym=new Be,Jo=new W,Vd=new W;function TM(i,t,e){let n=new ta,s=new zt,r=new zt,a=new Ye,o=new wc,c=new Ec,h={},u=e.maxTextureSize,g={[Ns]:jn,[jn]:Ns,[qi]:qi},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:MM,fragmentShader:bM}),x=f.clone();x.defines.HORIZONTAL_PASS=1;let S=new _n;S.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Rn(S,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let p=this.type;this.render=function(N,G,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;this.type===zp&&(pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ko);let D=i.getRenderTarget(),$=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),et=i.state;et.setBlending(Yi),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);let at=p!==this.type;at&&G.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=N.length;J<Q;J++){let ht=N[J],ut=ht.shadow;if(ut===void 0){pe("WebGLShadowMap:",ht,"has no shadow.");continue}if(ut.autoUpdate===!1&&ut.needsUpdate===!1)continue;s.copy(ut.mapSize);let Et=ut.getFrameExtents();s.multiply(Et),r.copy(ut.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Et.x),s.x=r.x*Et.x,ut.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Et.y),s.y=r.y*Et.y,ut.mapSize.y=r.y));let dt=i.state.buffers.depth.getReversed();if(ut.camera._reversedDepth=dt,ut.map===null||at===!0){if(ut.map!==null&&(ut.map.depthTexture!==null&&(ut.map.depthTexture.dispose(),ut.map.depthTexture=null),ut.map.dispose()),this.type===aa){if(ht.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ut.map=new si(s.x,s.y,{format:Bs,type:Ui,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),ut.map.texture.name=ht.name+".shadowMap",ut.map.depthTexture=new Rs(s.x,s.y,vi),ut.map.depthTexture.name=ht.name+".shadowMapDepth",ut.map.depthTexture.format=Hi,ut.map.depthTexture.compareFunction=null,ut.map.depthTexture.minFilter=An,ut.map.depthTexture.magFilter=An}else ht.isPointLight?(ut.map=new Lh(s.x),ut.map.depthTexture=new gc(s.x,Ni)):(ut.map=new si(s.x,s.y),ut.map.depthTexture=new Rs(s.x,s.y,Ni)),ut.map.depthTexture.name=ht.name+".shadowMap",ut.map.depthTexture.format=Hi,this.type===ko?(ut.map.depthTexture.compareFunction=dt?Ch:Ah,ut.map.depthTexture.minFilter=Fn,ut.map.depthTexture.magFilter=Fn):(ut.map.depthTexture.compareFunction=null,ut.map.depthTexture.minFilter=An,ut.map.depthTexture.magFilter=An);ut.camera.updateProjectionMatrix()}ut.map.isWebGLCubeRenderTarget!==!0&&(ut.map.width!==s.x||ut.map.height!==s.y)&&ut.map.setSize(s.x,s.y);let Mt=ut.map.isWebGLCubeRenderTarget?6:ut.getViewportCount();ht.isPointLight!==!0&&ut.updateMatrices(ht,T);for(let St=0;St<Mt;St++){let Wt=ut.getCamera(St);if(ht.isPointLight){let Zt=ut.camera,ke=ut.matrix,Ee=ht.distance||Zt.far;Ee!==Zt.far&&(Zt.far=Ee,Zt.updateProjectionMatrix()),Jo.setFromMatrixPosition(ht.matrixWorld),Zt.position.copy(Jo),Vd.copy(Zt.position),Vd.add(wM[St]),Zt.up.copy(EM[St]),Zt.lookAt(Vd),Zt.updateMatrixWorld(),ke.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Ym.multiplyMatrices(Zt.projectionMatrix,Zt.matrixWorldInverse),ut._frustum.setFromProjectionMatrix(Ym,Zt.coordinateSystem,Zt.reversedDepth)}if(ut.map.isWebGLCubeRenderTarget)i.setRenderTarget(ut.map,St),i.clear();else{St===0&&(i.setRenderTarget(ut.map),i.clear());let Zt=ut.getViewport(St);a.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),et.viewport(a)}n=ut.getFrustum(St),R(G,T,Wt,ht,this.type)}ut.isPointLightShadow!==!0&&this.type===aa&&O(ut,T),ut.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,$,X)};function O(N,G){let T=t.update(I);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null?N.mapPass=new si(s.x,s.y,{format:Bs,type:Ui}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),f.uniforms.shadow_pass.value=N.map.depthTexture,f.uniforms.resolution.value.set(N.map.width,N.map.height),f.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(G,null,T,f,I,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value.set(N.map.width,N.map.height),x.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(G,null,T,x,I,null)}function B(N,G,T,D){let $=null,X=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)$=X;else if($=T.isPointLight===!0?c:o,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let et=$.uuid,at=G.uuid,J=h[et];J===void 0&&(J={},h[et]=J);let Q=J[at];Q===void 0&&(Q=$.clone(),J[at]=Q,G.addEventListener("dispose",b)),$=Q}if($.visible=G.visible,$.wireframe=G.wireframe,D===aa?$.side=G.shadowSide!==null?G.shadowSide:G.side:$.side=G.shadowSide!==null?G.shadowSide:g[G.side],$.alphaMap=G.alphaMap,$.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,$.map=G.map,$.clipShadows=G.clipShadows,$.clippingPlanes=G.clippingPlanes,$.clipIntersection=G.clipIntersection,$.displacementMap=G.displacementMap,$.displacementScale=G.displacementScale,$.displacementBias=G.displacementBias,$.wireframeLinewidth=G.wireframeLinewidth,$.linewidth=G.linewidth,T.isPointLight===!0&&$.isMeshDistanceMaterial===!0){let et=i.properties.get($);et.light=T}return $}function R(N,G,T,D,$){if(N.visible===!1)return;if(N.layers.test(G.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&$===aa)&&(!N.frustumCulled||N.intersectsFrustum(n))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);let at=t.update(N),J=N.material;if(Array.isArray(J)){let Q=at.groups;for(let ht=0,ut=Q.length;ht<ut;ht++){let Et=Q[ht],dt=J[Et.materialIndex];if(dt&&dt.visible){let Mt=B(N,dt,D,$);N.onBeforeShadow(i,N,G,T,at,Mt,Et),i.renderBufferDirect(T,null,at,Mt,N,Et),N.onAfterShadow(i,N,G,T,at,Mt,Et)}}}else if(J.visible){let Q=B(N,J,D,$);N.onBeforeShadow(i,N,G,T,at,Q,null),i.renderBufferDirect(T,null,at,Q,N,null),N.onAfterShadow(i,N,G,T,at,Q,null)}}let et=N.children;for(let at=0,J=et.length;at<J;at++)R(et[at],G,T,D,$)}function b(N){N.target.removeEventListener("dispose",b);for(let T in h){let D=h[T],$=N.target.uuid;$ in D&&(D[$].dispose(),delete D[$])}}}function AM(i,t){function e(){let Z=!1,Ut=new Ye,xt=null,$t=new Ye(0,0,0,0);return{setMask:function(qt){xt!==qt&&!Z&&(i.colorMask(qt,qt,qt,qt),xt=qt)},setLocked:function(qt){Z=qt},setClear:function(qt,wt,ae,te,Te){Te===!0&&(qt*=te,wt*=te,ae*=te),Ut.set(qt,wt,ae,te),$t.equals(Ut)===!1&&(i.clearColor(qt,wt,ae,te),$t.copy(Ut))},reset:function(){Z=!1,xt=null,$t.set(-1,0,0,0)}}}function n(){let Z=!1,Ut=!1,xt=null,$t=null,qt=null;return{setReversed:function(wt){if(Ut!==wt){let ae=t.get("EXT_clip_control");wt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ut=wt;let te=qt;qt=null,this.setClear(te)}},getReversed:function(){return Ut},setTest:function(wt){wt?vt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(wt){xt!==wt&&!Z&&(i.depthMask(wt),xt=wt)},setFunc:function(wt){if(Ut&&(wt=ym[wt]),$t!==wt){switch(wt){case jl:i.depthFunc(i.NEVER);break;case Ql:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case ec:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$t=wt}},setLocked:function(wt){Z=wt},setClear:function(wt){qt!==wt&&(qt=wt,Ut&&(wt=1-wt),i.clearDepth(wt))},reset:function(){Z=!1,xt=null,$t=null,qt=null,Ut=!1}}}function s(){let Z=!1,Ut=null,xt=null,$t=null,qt=null,wt=null,ae=null,te=null,Te=null;return{setTest:function(Ae){Z||(Ae?vt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!Z&&(i.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,xn,Zn){(xt!==Ae||$t!==xn||qt!==Zn)&&(i.stencilFunc(Ae,xn,Zn),xt=Ae,$t=xn,qt=Zn)},setOp:function(Ae,xn,Zn){(wt!==Ae||ae!==xn||te!==Zn)&&(i.stencilOp(Ae,xn,Zn),wt=Ae,ae=xn,te=Zn)},setLocked:function(Ae){Z=Ae},setClear:function(Ae){Te!==Ae&&(i.clearStencil(Ae),Te=Ae)},reset:function(){Z=!1,Ut=null,xt=null,$t=null,qt=null,wt=null,ae=null,te=null,Te=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},g={},f={},x=new WeakMap,S=[],I=null,m=!1,p=null,O=null,B=null,R=null,b=null,N=null,G=null,T=new fe(0,0,0),D=0,$=!1,X=null,et=null,at=null,J=null,Q=null,ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ut=!1,Et=0,dt=i.getParameter(i.VERSION);dt.indexOf("WebGL")!==-1?(Et=parseFloat(/^WebGL (\d)/.exec(dt)[1]),ut=Et>=1):dt.indexOf("OpenGL ES")!==-1&&(Et=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),ut=Et>=2);let Mt=null,St={},Wt=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),ke=new Ye().fromArray(Wt),Ee=new Ye().fromArray(Zt);function Ue(Z,Ut,xt,$t){let qt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(Z,wt),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<xt;ae++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,$t,0,i.RGBA,i.UNSIGNED_BYTE,qt):i.texImage2D(Ut+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qt);return wt}let _t={};_t[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(qr),Ct(!1),Ot(od),vt(i.CULL_FACE),At(Yi);function vt(Z){u[Z]!==!0&&(i.enable(Z),u[Z]=!0)}function It(Z){u[Z]!==!1&&(i.disable(Z),u[Z]=!1)}function ne(Z,Ut){return f[Z]!==Ut?(i.bindFramebuffer(Z,Ut),f[Z]=Ut,Z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ut),Z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Yt(Z,Ut){let xt=S,$t=!1;if(Z){xt=x.get(Ut),xt===void 0&&(xt=[],x.set(Ut,xt));let qt=Z.textures;if(xt.length!==qt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,ae=qt.length;wt<ae;wt++)xt[wt]=i.COLOR_ATTACHMENT0+wt;xt.length=qt.length,$t=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,$t=!0);$t&&i.drawBuffers(xt)}function ce(Z){return I!==Z?(i.useProgram(Z),I=Z,!0):!1}let ie={[ur]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Hp]:i.FUNC_REVERSE_SUBTRACT};ie[Gp]=i.MIN,ie[Wp]=i.MAX;let st={[Xp]:i.ZERO,[qp]:i.ONE,[Yp]:i.SRC_COLOR,[ud]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Zp]:i.ONE_MINUS_SRC_COLOR,[dd]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[em]:i.CONSTANT_COLOR,[nm]:i.ONE_MINUS_CONSTANT_COLOR,[im]:i.CONSTANT_ALPHA,[sm]:i.ONE_MINUS_CONSTANT_ALPHA};function At(Z,Ut,xt,$t,qt,wt,ae,te,Te,Ae){if(Z===Yi){m===!0&&(It(i.BLEND),m=!1);return}if(m===!1&&(vt(i.BLEND),m=!0),Z!==Vp){if(Z!==p||Ae!==$){if((O!==ur||b!==ur)&&(i.blendEquation(i.FUNC_ADD),O=ur,b=ur),Ae)switch(Z){case oa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ld:i.blendFunc(i.ONE,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xe("WebGLState: Invalid blending: ",Z);break}else switch(Z){case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ld:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cd:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hd:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",Z);break}B=null,R=null,N=null,G=null,T.set(0,0,0),D=0,p=Z,$=Ae}return}qt=qt||Ut,wt=wt||xt,ae=ae||$t,(Ut!==O||qt!==b)&&(i.blendEquationSeparate(ie[Ut],ie[qt]),O=Ut,b=qt),(xt!==B||$t!==R||wt!==N||ae!==G)&&(i.blendFuncSeparate(st[xt],st[$t],st[wt],st[ae]),B=xt,R=$t,N=wt,G=ae),(te.equals(T)===!1||Te!==D)&&(i.blendColor(te.r,te.g,te.b,Te),T.copy(te),D=Te),p=Z,$=!1}function H(Z,Ut){Z.side===qi?It(i.CULL_FACE):vt(i.CULL_FACE);let xt=Z.side===jn;Ut&&(xt=!xt),Ct(xt),Z.blending===oa&&Z.transparent===!1?At(Yi):At(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let $t=Z.stencilWrite;o.setTest($t),$t&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),oe(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(Z){X!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),X=Z)}function Ot(Z){Z!==Bp?(vt(i.CULL_FACE),Z!==et&&(Z===od?i.cullFace(i.BACK):Z===kp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),et=Z}function le(Z){Z!==at&&(ut&&i.lineWidth(Z),at=Z)}function oe(Z,Ut,xt){Z?(vt(i.POLYGON_OFFSET_FILL),(J!==Ut||Q!==xt)&&(J=Ut,Q=xt,a.getReversed()&&(Ut=-Ut),i.polygonOffset(Ut,xt))):It(i.POLYGON_OFFSET_FILL)}function de(Z){Z?vt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function _e(Z){Z===void 0&&(Z=i.TEXTURE0+ht-1),Mt!==Z&&(i.activeTexture(Z),Mt=Z)}function V(Z,Ut,xt){xt===void 0&&(Mt===null?xt=i.TEXTURE0+ht-1:xt=Mt);let $t=St[xt];$t===void 0&&($t={type:void 0,texture:void 0},St[xt]=$t),($t.type!==Z||$t.texture!==Ut)&&(Mt!==xt&&(i.activeTexture(xt),Mt=xt),i.bindTexture(Z,Ut||_t[Z]),$t.type=Z,$t.texture=Ut)}function Pe(){let Z=St[Mt];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function M(){try{i.texSubImage2D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function q(){try{i.texSubImage3D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function Pt(){try{i.texStorage2D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function Ft(){try{i.texStorage3D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function mt(){try{i.texImage2D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function yt(){try{i.texImage3D(...arguments)}catch(Z){xe("WebGLState:",Z)}}function kt(Z){return g[Z]!==void 0?g[Z]:i.getParameter(Z)}function se(Z,Ut){g[Z]!==Ut&&(i.pixelStorei(Z,Ut),g[Z]=Ut)}function Xt(Z){ke.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),ke.copy(Z))}function Vt(Z){Ee.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Ee.copy(Z))}function re(Z,Ut){let xt=h.get(Ut);xt===void 0&&(xt=new WeakMap,h.set(Ut,xt));let $t=xt.get(Z);$t===void 0&&($t=i.getUniformBlockIndex(Ut,Z.name),xt.set(Z,$t))}function he(Z,Ut){let $t=h.get(Ut).get(Z);c.get(Ut)!==$t&&(i.uniformBlockBinding(Ut,$t,Z.__bindingPointIndex),c.set(Ut,$t))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},Mt=null,St={},f={},x=new WeakMap,S=[],I=null,m=!1,p=null,O=null,B=null,R=null,b=null,N=null,G=null,T=new fe(0,0,0),D=0,$=!1,X=null,et=null,at=null,J=null,Q=null,ke.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:It,bindFramebuffer:ne,drawBuffers:Yt,useProgram:ce,setBlending:At,setMaterial:H,setFlipSided:Ct,setCullFace:Ot,setLineWidth:le,setPolygonOffset:oe,setScissorTest:de,activeTexture:_e,bindTexture:V,unbindTexture:Pe,compressedTexImage2D:me,compressedTexImage3D:L,texImage2D:mt,texImage3D:yt,pixelStorei:se,getParameter:kt,updateUBOMapping:re,uniformBlockBinding:he,texStorage2D:Pt,texStorage3D:Ft,texSubImage2D:M,texSubImage3D:q,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Xt,viewport:Vt,reset:Se}}function CM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,u=new WeakMap,g=new Set,f,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(L,M){return S?new OffscreenCanvas(L,M):ao("canvas")}function m(L,M,q){let ot=1,ft=me(L);if((ft.width>q||ft.height>q)&&(ot=q/Math.max(ft.width,ft.height)),ot<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Pt=Math.floor(ot*ft.width),Ft=Math.floor(ot*ft.height);f===void 0&&(f=I(Pt,Ft));let mt=M?I(Pt,Ft):f;return mt.width=Pt,mt.height=Ft,mt.getContext("2d").drawImage(L,0,0,Pt,Ft),pe("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+Pt+"x"+Ft+")."),mt}else return"data"in L&&pe("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),L;return L}function p(L){return L.generateMipmaps}function O(L){i.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,M,q,ot,ft,Pt=!1){if(L!==null){if(i[L]!==void 0)return i[L];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ft;ot&&(Ft=t.get("EXT_texture_norm16"),Ft||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=M;if(M===i.RED&&(q===i.FLOAT&&(mt=i.R32F),q===i.HALF_FLOAT&&(mt=i.R16F),q===i.UNSIGNED_BYTE&&(mt=i.R8),q===i.UNSIGNED_SHORT&&Ft&&(mt=Ft.R16_EXT),q===i.SHORT&&Ft&&(mt=Ft.R16_SNORM_EXT)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(mt=i.R8UI),q===i.UNSIGNED_SHORT&&(mt=i.R16UI),q===i.UNSIGNED_INT&&(mt=i.R32UI),q===i.BYTE&&(mt=i.R8I),q===i.SHORT&&(mt=i.R16I),q===i.INT&&(mt=i.R32I)),M===i.RG&&(q===i.FLOAT&&(mt=i.RG32F),q===i.HALF_FLOAT&&(mt=i.RG16F),q===i.UNSIGNED_BYTE&&(mt=i.RG8),q===i.UNSIGNED_SHORT&&Ft&&(mt=Ft.RG16_EXT),q===i.SHORT&&Ft&&(mt=Ft.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(mt=i.RG8UI),q===i.UNSIGNED_SHORT&&(mt=i.RG16UI),q===i.UNSIGNED_INT&&(mt=i.RG32UI),q===i.BYTE&&(mt=i.RG8I),q===i.SHORT&&(mt=i.RG16I),q===i.INT&&(mt=i.RG32I)),M===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),q===i.UNSIGNED_INT&&(mt=i.RGB32UI),q===i.BYTE&&(mt=i.RGB8I),q===i.SHORT&&(mt=i.RGB16I),q===i.INT&&(mt=i.RGB32I)),M===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),q===i.UNSIGNED_INT&&(mt=i.RGBA32UI),q===i.BYTE&&(mt=i.RGBA8I),q===i.SHORT&&(mt=i.RGBA16I),q===i.INT&&(mt=i.RGBA32I)),M===i.RGB&&(q===i.UNSIGNED_SHORT&&Ft&&(mt=Ft.RGB16_EXT),q===i.SHORT&&Ft&&(mt=Ft.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(mt=i.R11F_G11F_B10F)),M===i.RGBA){let yt=Pt?ro:Fe.getTransfer(ft);q===i.FLOAT&&(mt=i.RGBA32F),q===i.HALF_FLOAT&&(mt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(mt=yt===qe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ft&&(mt=Ft.RGBA16_EXT),q===i.SHORT&&Ft&&(mt=Ft.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function b(L,M){let q;return L?M===null||M===Ni||M===ca?q=i.DEPTH24_STENCIL8:M===vi?q=i.DEPTH32F_STENCIL8:M===la&&(q=i.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===ca?q=i.DEPTH_COMPONENT24:M===vi?q=i.DEPTH_COMPONENT32F:M===la&&(q=i.DEPTH_COMPONENT16),q}function N(L,M){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function G(L){let M=L.target;M.removeEventListener("dispose",G),D(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&g.delete(M)}function T(L){let M=L.target;M.removeEventListener("dispose",T),X(M)}function D(L){let M=n.get(L);if(M.__webglInit===void 0)return;let q=L.source,ot=x.get(q);if(ot){let ft=ot[M.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&$(L),Object.keys(ot).length===0&&x.delete(q)}n.remove(L)}function $(L){let M=n.get(L);i.deleteTexture(M.__webglTexture);let q=L.source,ot=x.get(q);delete ot[M.__cacheKey],a.memory.textures--}function X(L){let M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let ft=0;ft<M.__webglFramebuffer[ot].length;ft++)i.deleteFramebuffer(M.__webglFramebuffer[ot][ft]);else i.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[ot]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let q=L.textures;for(let ot=0,ft=q.length;ot<ft;ot++){let Pt=n.get(q[ot]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(q[ot])}n.remove(L)}let et=0;function at(){et=0}function J(){return et}function Q(L){et=L}function ht(){let L=et;return L>=s.maxTextures&&pe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,L}function ut(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Et(L,M){let q=n.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let ot=L.image;if(ot===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{It(q,L,M);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function dt(L,M){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){It(q,L,M);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function Mt(L,M){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){It(q,L,M);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function St(L,M){let q=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){ne(q,L,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let Wt={[rc]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},Zt={[An]:i.NEAREST,[om]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[$c]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},ke={[um]:i.NEVER,[gm]:i.ALWAYS,[dm]:i.LESS,[Ah]:i.LEQUAL,[fm]:i.EQUAL,[Ch]:i.GEQUAL,[pm]:i.GREATER,[mm]:i.NOTEQUAL};function Ee(L,M){if(M.type===vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===$c||M.magFilter===Vo||M.magFilter===Fs||M.minFilter===Fn||M.minFilter===$c||M.minFilter===Vo||M.minFilter===Fs)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Wt[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Wt[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Wt[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Zt[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Zt[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Vo&&M.minFilter!==Fs||M.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(L,M){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",G));let ot=M.source,ft=x.get(ot);ft===void 0&&(ft={},x.set(ot,ft));let Pt=ut(M);if(Pt!==L.__cacheKey){ft[Pt]===void 0&&(ft[Pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ft[Pt].usedTimes++;let Ft=ft[L.__cacheKey];Ft!==void 0&&(ft[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&$(M)),L.__cacheKey=Pt,L.__webglTexture=ft[Pt].texture}return q}function _t(L,M,q){return Math.floor(Math.floor(L/q)/M)}function vt(L,M,q,ot){let Pt=L.updateRanges;if(Pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,q,ot,M.data);else{Pt.sort((se,Xt)=>se.start-Xt.start);let Ft=0;for(let se=1;se<Pt.length;se++){let Xt=Pt[Ft],Vt=Pt[se],re=Xt.start+Xt.count,he=_t(Vt.start,M.width,4),Se=_t(Xt.start,M.width,4);Vt.start<=re+1&&he===Se&&_t(Vt.start+Vt.count-1,M.width,4)===he?Xt.count=Math.max(Xt.count,Vt.start+Vt.count-Xt.start):(++Ft,Pt[Ft]=Vt)}Pt.length=Ft+1;let mt=e.getParameter(i.UNPACK_ROW_LENGTH),yt=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let se=0,Xt=Pt.length;se<Xt;se++){let Vt=Pt[se],re=Math.floor(Vt.start/4),he=Math.ceil(Vt.count/4),Se=re%M.width,Z=Math.floor(re/M.width),Ut=he,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,Se,Z,Ut,xt,q,ot,M.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function It(L,M,q){let ot=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=i.TEXTURE_3D);let ft=Ue(L,M),Pt=M.source;e.bindTexture(ot,L.__webglTexture,i.TEXTURE0+q);let Ft=n.get(Pt);if(Pt.version!==Ft.__version||ft===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let xt=Fe.getPrimaries(Fe.workingColorSpace),$t=M.colorSpace===gs?null:Fe.getPrimaries(M.colorSpace),qt=M.colorSpace===gs||xt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let yt=m(M.image,!1,s.maxTextureSize);yt=Pe(M,yt);let kt=r.convert(M.format,M.colorSpace),se=r.convert(M.type),Xt=R(M.internalFormat,kt,se,M.normalized,M.colorSpace,M.isVideoTexture);Ee(ot,M);let Vt,re=M.mipmaps,he=M.isVideoTexture!==!0,Se=Ft.__version===void 0||ft===!0,Z=Pt.dataReady,Ut=N(M,yt);if(M.isDepthTexture)Xt=b(M.format===Os,M.type),Se&&(he?e.texStorage2D(i.TEXTURE_2D,1,Xt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,kt,se,null));else if(M.isDataTexture)if(re.length>0){he&&Se&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,re[0].width,re[0].height);for(let xt=0,$t=re.length;xt<$t;xt++)Vt=re[xt],he?Z&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Vt.width,Vt.height,kt,se,Vt.data):e.texImage2D(i.TEXTURE_2D,xt,Xt,Vt.width,Vt.height,0,kt,se,Vt.data);M.generateMipmaps=!1}else he?(Se&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,yt.width,yt.height),Z&&vt(M,yt,kt,se)):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,kt,se,yt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){he&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Xt,re[0].width,re[0].height,yt.depth);for(let xt=0,$t=re.length;xt<$t;xt++)if(Vt=re[xt],M.format!==yi)if(kt!==null)if(he){if(Z)if(M.layerUpdates.size>0){let qt=Ud(Vt.width,Vt.height,M.format,M.type);for(let wt of M.layerUpdates){let ae=Vt.data.subarray(wt*qt/Vt.data.BYTES_PER_ELEMENT,(wt+1)*qt/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,wt,Vt.width,Vt.height,1,kt,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Vt.width,Vt.height,yt.depth,kt,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Xt,Vt.width,Vt.height,yt.depth,0,Vt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Vt.width,Vt.height,yt.depth,kt,se,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Xt,Vt.width,Vt.height,yt.depth,0,kt,se,Vt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{he&&Se&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,re[0].width,re[0].height);for(let xt=0,$t=re.length;xt<$t;xt++)Vt=re[xt],M.format!==yi?kt!==null?he?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Vt.width,Vt.height,kt,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Xt,Vt.width,Vt.height,0,Vt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Z&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Vt.width,Vt.height,kt,se,Vt.data):e.texImage2D(i.TEXTURE_2D,xt,Xt,Vt.width,Vt.height,0,kt,se,Vt.data)}else if(M.isDataArrayTexture)if(he){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Xt,yt.width,yt.height,yt.depth),Z)if(M.layerUpdates.size>0){let xt=Ud(yt.width,yt.height,M.format,M.type);for(let $t of M.layerUpdates){let qt=yt.data.subarray($t*xt/yt.data.BYTES_PER_ELEMENT,($t+1)*xt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,yt.width,yt.height,1,kt,se,qt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,kt,se,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,kt,se,yt.data);else if(M.isData3DTexture)he?(Se&&e.texStorage3D(i.TEXTURE_3D,Ut,Xt,yt.width,yt.height,yt.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,kt,se,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,kt,se,yt.data);else if(M.isFramebufferTexture){if(Se)if(he)e.texStorage2D(i.TEXTURE_2D,Ut,Xt,yt.width,yt.height);else{let xt=yt.width,$t=yt.height;for(let qt=0;qt<Ut;qt++)e.texImage2D(i.TEXTURE_2D,qt,Xt,xt,$t,0,kt,se,null),xt>>=1,$t>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),yt.parentNode!==xt){xt.appendChild(yt),g.add(M),xt.onpaint=$t=>{let qt=$t.changedElements;for(let wt of g)qt.includes(wt.image)&&(wt.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,yt);else{let qt=i.RGBA,wt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,wt,ae,yt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(re.length>0){if(he&&Se){let xt=me(re[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Xt,xt.width,xt.height)}for(let xt=0,$t=re.length;xt<$t;xt++)Vt=re[xt],he?Z&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt,se,Vt):e.texImage2D(i.TEXTURE_2D,xt,Xt,kt,se,Vt);M.generateMipmaps=!1}else if(he){if(Se){let xt=me(yt);e.texStorage2D(i.TEXTURE_2D,Ut,Xt,xt.width,xt.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,se,yt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,kt,se,yt);p(M)&&O(ot),Ft.__version=Pt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ne(L,M,q){if(M.image.length!==6)return;let ot=Ue(L,M),ft=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let Pt=n.get(ft);if(ft.version!==Pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+q);let Ft=Fe.getPrimaries(Fe.workingColorSpace),mt=M.colorSpace===gs?null:Fe.getPrimaries(M.colorSpace),yt=M.colorSpace===gs||Ft===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let kt=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Xt=[];for(let wt=0;wt<6;wt++)!kt&&!se?Xt[wt]=m(M.image[wt],!0,s.maxCubemapSize):Xt[wt]=se?M.image[wt].image:M.image[wt],Xt[wt]=Pe(M,Xt[wt]);let Vt=Xt[0],re=r.convert(M.format,M.colorSpace),he=r.convert(M.type),Se=R(M.internalFormat,re,he,M.normalized,M.colorSpace),Z=M.isVideoTexture!==!0,Ut=Pt.__version===void 0||ot===!0,xt=ft.dataReady,$t=N(M,Vt);Ee(i.TEXTURE_CUBE_MAP,M);let qt;if(kt){Z&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Se,Vt.width,Vt.height);for(let wt=0;wt<6;wt++){qt=Xt[wt].mipmaps;for(let ae=0;ae<qt.length;ae++){let te=qt[ae];M.format!==yi?re!==null?Z?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,0,0,te.width,te.height,re,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,Se,te.width,te.height,0,te.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,0,0,te.width,te.height,re,he,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,Se,te.width,te.height,0,re,he,te.data)}}}else{if(qt=M.mipmaps,Z&&Ut){qt.length>0&&$t++;let wt=me(Xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Se,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(se){Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Xt[wt].width,Xt[wt].height,re,he,Xt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Se,Xt[wt].width,Xt[wt].height,0,re,he,Xt[wt].data);for(let ae=0;ae<qt.length;ae++){let Te=qt[ae].image[wt].image;Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,0,0,Te.width,Te.height,re,he,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,Se,Te.width,Te.height,0,re,he,Te.data)}}else{Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,re,he,Xt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Se,re,he,Xt[wt]);for(let ae=0;ae<qt.length;ae++){let te=qt[ae];Z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,0,0,re,he,te.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,Se,re,he,te.image[wt])}}}p(M)&&O(i.TEXTURE_CUBE_MAP),Pt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Yt(L,M,q,ot,ft,Pt){let Ft=r.convert(q.format,q.colorSpace),mt=r.convert(q.type),yt=R(q.internalFormat,Ft,mt,q.normalized,q.colorSpace),kt=n.get(M),se=n.get(q);if(se.__renderTarget=M,!kt.__hasExternalTextures){let Xt=Math.max(1,M.width>>Pt),Vt=Math.max(1,M.height>>Pt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,Pt,yt,Xt,Vt,M.depth,0,Ft,mt,null):e.texImage2D(ft,Pt,yt,Xt,Vt,0,Ft,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ft,se.__webglTexture,0,de(M)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ft,se.__webglTexture,Pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(L,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){let ot=M.depthTexture,ft=ot&&ot.isDepthTexture?ot.type:null,Pt=b(M.stencilBuffer,ft),Ft=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(M),Pt,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(M),Pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,L)}else{let ot=M.textures;for(let ft=0;ft<ot.length;ft++){let Pt=ot[ft],Ft=r.convert(Pt.format,Pt.colorSpace),mt=r.convert(Pt.type),yt=R(Pt.internalFormat,Ft,mt,Pt.normalized,Pt.colorSpace);_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(M),yt,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(M),yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(L,M,q){let ot=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(M.depthTexture);if(ft.__renderTarget=M,(!ft.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ot){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,M.depthTexture.addEventListener("dispose",G)),ft.__webglTexture===void 0){ft.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,M.depthTexture);let kt=r.convert(M.depthTexture.format),se=r.convert(M.depthTexture.type),Xt;M.depthTexture.format===Hi?Xt=i.DEPTH_COMPONENT24:M.depthTexture.format===Os&&(Xt=i.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Xt,M.width,M.height,0,kt,se,null)}}else Et(M.depthTexture,0);let Pt=ft.__webglTexture,Ft=de(M),mt=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,yt=M.depthTexture.format===Os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Hi)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,mt,Pt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,yt,mt,Pt,0);else if(M.depthTexture.format===Os)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,mt,Pt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,yt,mt,Pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(L){let M=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let ot=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){let ft=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",ft)};ot.addEventListener("dispose",ft),M.__depthDisposeCallback=ft}M.__boundDepthTexture=ot}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let ot=0;ot<6;ot++)ie(M.__webglFramebuffer[ot],L,ot);else{let ot=L.texture.mipmaps;ot&&ot.length>0?ie(M.__webglFramebuffer[0],L,0):ie(M.__webglFramebuffer,L,0)}else if(q){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[ot],L,!1);else{let ft=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=M.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,Pt)}}else{let ot=L.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,L,!1);else{let ft=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,Pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,M,q){let ot=n.get(L);M!==void 0&&Yt(ot.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&st(L)}function H(L){let M=L.texture,q=n.get(L),ot=n.get(M);L.addEventListener("dispose",T);let ft=L.textures,Pt=L.isWebGLCubeRenderTarget===!0,Ft=ft.length>1;if(Ft||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=M.version,a.memory.textures++),Pt){q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[mt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)q.__webglFramebuffer[mt][yt]=i.createFramebuffer()}else q.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)q.__webglFramebuffer[mt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let mt=0,yt=ft.length;mt<yt;mt++){let kt=n.get(ft[mt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&_e(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let mt=0;mt<ft.length;mt++){let yt=ft[mt];q.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[mt]);let kt=r.convert(yt.format,yt.colorSpace),se=r.convert(yt.type),Xt=R(yt.internalFormat,kt,se,yt.normalized,yt.colorSpace,L.isXRRenderTarget===!0),Vt=de(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Xt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,q.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Yt(q.__webglFramebuffer[mt][yt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else Yt(q.__webglFramebuffer[mt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(M)&&O(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let mt=0,yt=ft.length;mt<yt;mt++){let kt=ft[mt],se=n.get(kt),Xt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Xt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Xt,se.__webglTexture),Ee(Xt,kt),Yt(q.__webglFramebuffer,L,kt,i.COLOR_ATTACHMENT0+mt,Xt,0),p(kt)&&O(Xt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(mt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,ot.__webglTexture),Ee(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Yt(q.__webglFramebuffer[yt],L,M,i.COLOR_ATTACHMENT0,mt,yt);else Yt(q.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,mt,0);p(M)&&O(mt),e.unbindTexture()}L.depthBuffer&&st(L)}function Ct(L){let M=L.textures;for(let q=0,ot=M.length;q<ot;q++){let ft=M[q];if(p(ft)){let Pt=B(L),Ft=n.get(ft).__webglTexture;e.bindTexture(Pt,Ft),O(Pt),e.unbindTexture()}}}let Ot=[],le=[];function oe(L){if(L.samples>0){if(_e(L)===!1){let M=L.textures,q=L.width,ot=L.height,ft=i.COLOR_BUFFER_BIT,Pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(L),mt=M.length>1;if(mt)for(let kt=0;kt<M.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let yt=L.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let kt=0;kt<M.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[kt]);let se=n.get(M[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,q,ot,0,0,q,ot,ft,i.NEAREST),c===!0&&(Ot.length=0,le.length=0,Ot.push(i.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ot.push(Pt),le.push(Pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let kt=0;kt<M.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[kt]);let se=n.get(M[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function de(L){return Math.min(s.maxSamples,L.samples)}function _e(L){let M=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function V(L){let M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Pe(L,M){let q=L.colorSpace,ot=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==so&&q!==gs&&(Fe.getTransfer(q)===qe?(ot!==yi||ft!==ai)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",q)),M}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ht,this.resetTextureUnits=at,this.getTextureUnits=J,this.setTextureUnits=Q,this.setTexture2D=Et,this.setTexture2DArray=dt,this.setTexture3D=Mt,this.setTextureCube=St,this.rebindTextures=At,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RM(i,t){function e(n,s=gs){let r,a=Fe.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sd)return i.BYTE;if(n===Md)return i.SHORT;if(n===la)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===Ed)return i.ALPHA;if(n===Td)return i.RGB;if(n===yi)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===Bs)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===$o||n===Ho||n===Go||n===Wo)if(a===qe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Kc||n===jc||n===Qc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===th||n===eh||n===nh||n===ih||n===sh||n===Xo||n===rh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===th||n===eh)return a===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ih)return r.COMPRESSED_R11_EAC;if(n===sh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xo)return r.COMPRESSED_RG11_EAC;if(n===rh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===vh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ah)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ch)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ph)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_h)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vh)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yh||n===Sh||n===Mh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yh)return a===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bh||n===wh||n===qo||n===Eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`,Zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:IM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new Co(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jd=class extends Gi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,g=null,f=null,x=null,S=null,I=typeof XRWebGLBinding<"u",m=new Zd,p={},O=e.getContextAttributes(),B=null,R=null,b=[],N=[],G=new zt,T=null,D=null,$=new Xn;$.viewport=new Ye;let X=new Xn;X.viewport=new Ye;let et=[$,X],at=new Bc,J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let vt=b[_t];return vt===void 0&&(vt=new Qr,b[_t]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(_t){let vt=b[_t];return vt===void 0&&(vt=new Qr,b[_t]=vt),vt.getGripSpace()},this.getHand=function(_t){let vt=b[_t];return vt===void 0&&(vt=new Qr,b[_t]=vt),vt.getHandSpace()};function ht(_t){let vt=N.indexOf(_t.inputSource);if(vt===-1)return;let It=b[vt];It!==void 0&&(It.update(_t.inputSource,_t.frame,h||a),It.dispatchEvent({type:_t.type,data:_t.inputSource}))}function ut(){s.removeEventListener("select",ht),s.removeEventListener("selectstart",ht),s.removeEventListener("selectend",ht),s.removeEventListener("squeeze",ht),s.removeEventListener("squeezestart",ht),s.removeEventListener("squeezeend",ht),s.removeEventListener("end",ut),s.removeEventListener("inputsourceschange",Et);for(let _t=0;_t<b.length;_t++){let vt=N[_t];vt!==null&&(N[_t]=null,b[_t].disconnect(vt))}J=null,Q=null,m.reset();for(let _t in p)delete p[_t];if(t.setRenderTarget(B),x=null,f=null,g=null,s=null,R=null,Ue.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(G.width,G.height,!1),D!==null){let _t=D.camera;_t.fov=D.fov,_t.zoom=D.zoom,_t.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){o=_t,n.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return g===null&&I&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",ht),s.addEventListener("selectstart",ht),s.addEventListener("selectend",ht),s.addEventListener("squeeze",ht),s.addEventListener("squeezestart",ht),s.addEventListener("squeezeend",ht),s.addEventListener("end",ut),s.addEventListener("inputsourceschange",Et),O.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,ne=null,Yt=null;O.depth&&(Yt=O.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=O.stencil?Os:Hi,ne=O.stencil?ca:Ni);let ce={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(ce),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new si(f.textureWidth,f.textureHeight,{format:yi,type:ai,depthTexture:new Rs(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let It={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new si(x.framebufferWidth,x.framebufferHeight,{format:yi,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Et(_t){for(let vt=0;vt<_t.removed.length;vt++){let It=_t.removed[vt],ne=N.indexOf(It);ne>=0&&(N[ne]=null,b[ne].disconnect(It))}for(let vt=0;vt<_t.added.length;vt++){let It=_t.added[vt],ne=N.indexOf(It);if(ne===-1){for(let ce=0;ce<b.length;ce++)if(ce>=N.length){N.push(It),ne=ce;break}else if(N[ce]===null){N[ce]=It,ne=ce;break}if(ne===-1)break}let Yt=b[ne];Yt&&Yt.connect(It)}}let dt=new W,Mt=new W;function St(_t,vt,It){dt.setFromMatrixPosition(vt.matrixWorld),Mt.setFromMatrixPosition(It.matrixWorld);let ne=dt.distanceTo(Mt),Yt=vt.projectionMatrix.elements,ce=It.projectionMatrix.elements,ie=Yt[14]/(Yt[10]-1),st=Yt[14]/(Yt[10]+1),At=(Yt[9]+1)/Yt[5],H=(Yt[9]-1)/Yt[5],Ct=(Yt[8]-1)/Yt[0],Ot=(ce[8]+1)/ce[0],le=ie*Ct,oe=ie*Ot,de=ne/(-Ct+Ot),_e=de*-Ct;if(vt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(_e),_t.translateZ(de),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Yt[10]===-1)_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let V=ie+de,Pe=st+de,me=le-_e,L=oe+(ne-_e),M=At*st/Pe*V,q=H*st/Pe*V;_t.projectionMatrix.makePerspective(me,L,M,q,V,Pe),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function Wt(_t,vt){vt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(vt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let vt=_t.near,It=_t.far;m.texture!==null&&(m.depthNear>0&&(vt=m.depthNear),m.depthFar>0&&(It=m.depthFar)),at.near=X.near=$.near=vt,at.far=X.far=$.far=It,(J!==at.near||Q!==at.far)&&(s.updateRenderState({depthNear:at.near,depthFar:at.far}),J=at.near,Q=at.far),at.layers.mask=_t.layers.mask|6,$.layers.mask=at.layers.mask&-5,X.layers.mask=at.layers.mask&-3;let ne=_t.parent,Yt=at.cameras;Wt(at,ne);for(let ce=0;ce<Yt.length;ce++)Wt(Yt[ce],ne);Yt.length===2?St(at,$,X):at.projectionMatrix.copy($.projectionMatrix),D===null&&_t.isPerspectiveCamera&&(D={camera:_t,fov:_t.fov,zoom:_t.zoom}),Zt(_t,at,ne)};function Zt(_t,vt,It){It===null?_t.matrix.copy(vt.matrixWorld):(_t.matrix.copy(It.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(vt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=Jr*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(f===null&&x===null))return c},this.setFoveation=function(_t){c=_t,f!==null&&(f.fixedFoveation=_t),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=_t)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(at)},this.getCameraTexture=function(_t){return p[_t]};let ke=null;function Ee(_t,vt){if(u=vt.getViewerPose(h||a),S=vt,u!==null){let It=u.views;x!==null&&(t.setRenderTargetFramebuffer(R,x.framebuffer),t.setRenderTarget(R));let ne=!1;It.length!==at.cameras.length&&(at.cameras.length=0,ne=!0);for(let st=0;st<It.length;st++){let At=It[st],H=null;if(x!==null)H=x.getViewport(At);else{let Ot=g.getViewSubImage(f,At);H=Ot.viewport,st===0&&(t.setRenderTargetTextures(R,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(R))}let Ct=et[st];Ct===void 0&&(Ct=new Xn,Ct.layers.enable(st),Ct.viewport=new Ye,et[st]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(H.x,H.y,H.width,H.height),st===0&&(at.matrix.copy(Ct.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),ne===!0&&at.cameras.push(Ct)}let Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){g=n.getBinding();let st=g.getDepthInformation(It[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Yt&&Yt.includes("camera-access")&&I){t.state.unbindTexture(),g=n.getBinding();for(let st=0;st<It.length;st++){let At=It[st].camera;if(At){let H=p[At];H||(H=new xo,p[At]=H);let Ct=g.getCameraImage(At);H.sourceTexture=Ct}}}}for(let It=0;It<b.length;It++){let ne=N[It],Yt=b[It];ne!==null&&Yt!==void 0&&Yt.update(ne,vt,h||a)}ke&&ke(_t,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),S=null}let Ue=new Zm;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(_t){ke=_t},this.dispose=function(){}}},LM=new Be,eg=new Me;eg.set(-1,0,0,0,1,0,0,0,1);function DM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ld(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,O,B,R){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&x(m,p,R)):p.isMeshMatcapMaterial?(r(m,p),S(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),I(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,O,B):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let O=t.get(p),B=O.envMap,R=O.envMapRotation;B&&(m.envMap.value=B,m.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(R)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,O,B){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*O,m.scale.value=B*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,O){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=O.texture,m.transmissionSamplerSize.value.set(O.width,O.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,p){p.matcap&&(m.matcap.value=p.matcap)}function I(m,p){let O=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(O.matrixWorld),m.nearDistance.value=O.shadow.camera.near,m.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function NM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,b){let N=b.program;n.uniformBlockBinding(R,N)}function h(R,b){let N=s[R.id];N===void 0&&(m(R),N=u(R),s[R.id]=N,R.addEventListener("dispose",O));let G=b.program;n.updateUBOMapping(R,G);let T=t.render.frame;r[R.id]!==T&&(f(R),r[R.id]=T)}function u(R){let b=g();R.__bindingPointIndex=b;let N=i.createBuffer(),G=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,G,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,N),N}function g(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let b=s[R.id],N=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,D=N.length;T<D;T++){let $=N[T];if(Array.isArray($))for(let X=0,et=$.length;X<et;X++)x($[X],T,X,G);else x($,T,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(R,b,N,G){if(I(R,b,N,G)===!0){let T=R.__offset,D=R.value;if(Array.isArray(D)){let $=0;for(let X=0;X<D.length;X++){let et=D[X],at=p(et);S(et,R.__data,$),typeof et!="number"&&typeof et!="boolean"&&!et.isMatrix3&&!ArrayBuffer.isView(et)&&($+=at.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(D,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}function S(R,b,N){typeof R=="number"||typeof R=="boolean"?b[0]=R:R.isMatrix3?(b[0]=R.elements[0],b[1]=R.elements[1],b[2]=R.elements[2],b[3]=0,b[4]=R.elements[3],b[5]=R.elements[4],b[6]=R.elements[5],b[7]=0,b[8]=R.elements[6],b[9]=R.elements[7],b[10]=R.elements[8],b[11]=0):ArrayBuffer.isView(R)?b.set(new R.constructor(R.buffer,R.byteOffset,b.length)):R.toArray(b,N)}function I(R,b,N,G){let T=R.value,D=b+"_"+N;if(G[D]===void 0)return typeof T=="number"||typeof T=="boolean"?G[D]=T:ArrayBuffer.isView(T)?G[D]=T.slice():G[D]=T.clone(),!0;{let $=G[D];if(typeof T=="number"||typeof T=="boolean"){if($!==T)return G[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if($.equals(T)===!1)return $.copy(T),!0}}return!1}function m(R){let b=R.uniforms,N=0,G=16;for(let D=0,$=b.length;D<$;D++){let X=Array.isArray(b[D])?b[D]:[b[D]];for(let et=0,at=X.length;et<at;et++){let J=X[et],Q=Array.isArray(J.value)?J.value:[J.value];for(let ht=0,ut=Q.length;ht<ut;ht++){let Et=Q[ht],dt=p(Et),Mt=N%G,St=Mt%dt.boundary,Wt=Mt+St;N+=St,Wt!==0&&G-Wt<dt.storage&&(N+=G-Wt),J.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=dt.storage}}}let T=N%G;return T>0&&(N+=G-T),R.__size=N,R.__cache={},this}function p(R){let b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(b.boundary=16,b.storage=R.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",R),b}function O(R){let b=R.target;b.removeEventListener("dispose",O);let N=a.indexOf(b.__bindingPointIndex);a.splice(N,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function B(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:B}}var UM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function FM(){return Zi===null&&(Zi=new fo(UM,16,16,Bs,Ui),Zi.name="DFG_LUT",Zi.minFilter=Fn,Zi.magFilter=Fn,Zi.wrapS=Vi,Zi.wrapT=Vi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var Dh=class{constructor(t={}){let{canvas:e=_m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:x=ai}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;let I=x,m=new Set([Zc,Yc,qc]),p=new Set([ai,Ni,la,ca,Gc,Wc]),O=new Uint32Array(4),B=new Int32Array(4),R=new W,b=null,N=null,G=[],T=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let $=this,X=!1,et=null,at=null,J=null,Q=null;this._outputColorSpace=hi;let ht=0,ut=0,Et=null,dt=-1,Mt=null,St=new Ye,Wt=new Ye,Zt=null,ke=new fe(0),Ee=0,Ue=e.width,_t=e.height,vt=1,It=null,ne=null,Yt=new Ye(0,0,Ue,_t),ce=new Ye(0,0,Ue,_t),ie=!1,st=new ta,At=!1,H=!1,Ct=new Be,Ot=new W,le=new Ye,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function _e(){return Et===null?vt:1}let V=n;function Pe(w,z){return e.getContext(w,z)}let me,L,M,q,ot,ft,Pt,Ft,mt,yt,kt,se,Xt,Vt,re,he,Se,Z,Ut,xt,$t,qt,wt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",xn,!1),V===null){let z="webgl2";if(V=Pe(z,w),V===null)throw Pe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(w){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),xe("WebGLRenderer: "+w.message),w}function ae(){me=new Hy(V),me.init(),$t=new RM(V,me),L=new Dy(V,me,t,$t),M=new AM(V,me),L.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),at=V.createFramebuffer(),J=V.createFramebuffer(),Q=V.createFramebuffer(),q=new Xy(V),ot=new fM,ft=new CM(V,me,M,ot,L,$t,q),Pt=new $y($),Ft=new Y_(V),qt=new Py(V,Ft),mt=new Gy(V,Ft,q,qt),yt=new Yy(V,mt,Ft,qt,q),Z=new qy(V,L,ft),re=new Ny(ot),kt=new dM($,Pt,me,L,qt,re),se=new DM($,ot),Xt=new mM,Vt=new SM(me),Se=new Iy($,Pt,M,yt,S,c),he=new TM($,yt,L),wt=new NM(V,q,L,M),Ut=new Ly(V,me,q),xt=new Wy(V,me,q),q.programs=kt.programs,$.capabilities=L,$.extensions=me,$.properties=ot,$.renderLists=Xt,$.shadowMap=he,$.state=M,$.info=q}I!==ai&&(D=new Jy(I,e.width,e.height,o,s,r));let te=new Jd($,V);this.xr=te,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(w){w!==void 0&&(vt=w,this.setSize(Ue,_t,!1))},this.getSize=function(w){return w.set(Ue,_t)},this.setSize=function(w,z,rt=!0){if(te.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=w,_t=z,e.width=Math.floor(w*vt),e.height=Math.floor(z*vt),rt===!0&&(e.style.width=w+"px",e.style.height=z+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Ue*vt,_t*vt).floor()},this.setDrawingBufferSize=function(w,z,rt){Ue=w,_t=z,vt=rt,e.width=Math.floor(w*rt),e.height=Math.floor(z*rt),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(I===ai){xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(St)},this.getViewport=function(w){return w.copy(Yt)},this.setViewport=function(w,z,rt,nt){w.isVector4?Yt.set(w.x,w.y,w.z,w.w):Yt.set(w,z,rt,nt),M.viewport(St.copy(Yt).multiplyScalar(vt).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,z,rt,nt){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,z,rt,nt),M.scissor(Wt.copy(ce).multiplyScalar(vt).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){M.setScissorTest(ie=w)},this.setOpaqueSort=function(w){It=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,rt=!0){let nt=0;if(w){let tt=!1;if(Et!==null){let Nt=Et.texture.format;tt=m.has(Nt)}if(tt){let Nt=Et.texture.type,Lt=p.has(Nt),ct=Se.getClearColor(),Rt=Se.getClearAlpha(),Dt=ct.r,we=ct.g,Re=ct.b;Lt?(O[0]=Dt,O[1]=we,O[2]=Re,O[3]=Rt,V.clearBufferuiv(V.COLOR,0,O)):(B[0]=Dt,B[1]=we,B[2]=Re,B[3]=Rt,V.clearBufferiv(V.COLOR,0,B))}else nt|=V.COLOR_BUFFER_BIT}z&&(nt|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),et=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Se.dispose(),Xt.dispose(),Vt.dispose(),ot.dispose(),Pt.dispose(),yt.dispose(),qt.dispose(),wt.dispose(),kt.dispose(),te.dispose(),te.removeEventListener("sessionstart",br),te.removeEventListener("sessionend",Fi),pi.stop()};function Te(w){w.preventDefault(),oo("WebGLRenderer: Context Lost."),X=!0}function Ae(){oo("WebGLRenderer: Context Restored."),X=!1;let w=q.autoReset,z=he.enabled,rt=he.autoUpdate,nt=he.needsUpdate,tt=he.type;ae(),q.autoReset=w,he.enabled=z,he.autoUpdate=rt,he.needsUpdate=nt,he.type=tt}function xn(w){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zn(w){let z=w.target;z.removeEventListener("dispose",Zn),Mr(z)}function Mr(w){xa(w),ot.remove(w)}function xa(w){let z=ot.get(w).programs;z!==void 0&&(z.forEach(function(rt){kt.releaseProgram(rt)}),w.isShaderMaterial&&kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,rt,nt,tt,Nt){z===null&&(z=oe);let Lt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,ct=eu(w,z,rt,nt,tt);M.setMaterial(nt,Lt);let Rt=rt.index,Dt=1;if(nt.wireframe===!0){if(Rt=mt.getWireframeAttribute(rt),Rt===void 0)return;Dt=2}let we=rt.drawRange,Re=rt.attributes.position,Qt=we.start*Dt,ze=(we.start+we.count)*Dt;Nt!==null&&(Qt=Math.max(Qt,Nt.start*Dt),ze=Math.min(ze,(Nt.start+Nt.count)*Dt)),Rt!==null?(Qt=Math.max(Qt,0),ze=Math.min(ze,Rt.count)):Re!=null&&(Qt=Math.max(Qt,0),ze=Math.min(ze,Re.count));let nn=ze-Qt;if(nn<0||nn===1/0)return;qt.setup(tt,nt,ct,rt,Rt);let Ge,Le=Ut;if(Rt!==null&&(Ge=Ft.get(Rt),Le=xt,Le.setIndex(Ge)),tt.isMesh)nt.wireframe===!0?(M.setLineWidth(nt.wireframeLinewidth*_e()),Le.setMode(V.LINES)):Le.setMode(V.TRIANGLES);else if(tt.isLine){let wn=nt.linewidth;wn===void 0&&(wn=1),M.setLineWidth(wn*_e()),tt.isLineSegments?Le.setMode(V.LINES):tt.isLineLoop?Le.setMode(V.LINE_LOOP):Le.setMode(V.LINE_STRIP)}else tt.isPoints?Le.setMode(V.POINTS):tt.isSprite&&Le.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Le.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let wn=tt._multiDrawStarts,Kt=tt._multiDrawCounts,Ln=tt._multiDrawCount,Oe=Rt?Ft.get(Rt).bytesPerElement:1,ei=ot.get(nt).currentProgram.getUniforms();for(let mi=0;mi<Ln;mi++)ei.setValue(V,"_gl_DrawID",mi),Le.render(wn[mi]/Oe,Kt[mi])}else if(tt.isInstancedMesh)Le.renderInstances(Qt,nn,tt.count);else if(rt.isInstancedBufferGeometry){let wn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Kt=Math.min(rt.instanceCount,wn);Le.renderInstances(Qt,nn,Kt)}else Le.render(Qt,nn)};function va(w,z,rt,nt){et!==null&&w.isNodeMaterial&&et.setObject(nt,w),At===!0&&re.setState(w,rt,!1),w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=jn,w.needsUpdate=!0,$s(w,z,nt),w.side=Ns,w.needsUpdate=!0,$s(w,z,nt),w.side=qi):$s(w,z,nt)}this.compile=function(w,z,rt=null){rt===null&&(rt=w),et!==null&&et.renderStart(w,z,rt),N=Vt.get(rt),N.init(z),T.push(N),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(z.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),w!==rt&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(z.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),N.setupLights(),et!==null&&et.updateLights(N.state.lightsArray),H=this.localClippingEnabled,At=re.init(this.clippingPlanes,H),At===!0&&re.setGlobalState(this.clippingPlanes,z),et!==null&&he.render(N.state.shadowsArray,rt,z);let nt=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Nt=tt.material;if(Nt)if(Array.isArray(Nt))for(let Lt=0;Lt<Nt.length;Lt++){let ct=Nt[Lt];va(ct,rt,z,tt),nt.add(ct)}else va(Nt,rt,z,tt),nt.add(Nt)}),N=T.pop(),et!==null&&et.renderEnd(),nt},this.compileAsync=function(w,z,rt=null){let nt=this.compile(w,z,rt);return new Promise(tt=>{function Nt(){if(nt.forEach(function(Lt){let Rt=ot.get(Lt).currentProgram;(Rt===void 0||Rt.isReady())&&nt.delete(Lt)}),nt.size===0){tt(w);return}setTimeout(Nt,10)}me.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let is=null;function Qh(w){is&&is(w)}function br(){pi.stop()}function Fi(){pi.start()}let pi=new Zm;pi.setAnimationLoop(Qh),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){is=w,te.setAnimationLoop(w),w===null?pi.stop():pi.start()},te.addEventListener("sessionstart",br),te.addEventListener("sessionend",Fi),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;et!==null&&et.renderStart(w,z);let rt=te.enabled===!0&&te.isPresenting===!0,nt=D!==null&&(Et===null||rt)&&D.begin($,Et);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),w.isScene===!0&&w.onBeforeRender($,w,z,Et),N=Vt.get(w,T.length),N.init(z),N.state.textureUnits=ft.getTextureUnits(),T.push(N),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),st.setFromProjectionMatrix(Ct,Ii,z.reversedDepth),H=this.localClippingEnabled,At=re.init(this.clippingPlanes,H),b=Xt.get(w,G.length),b.init(),G.push(b),te.enabled===!0&&te.isPresenting===!0){let Lt=$.xr.getDepthSensingMesh();Lt!==null&&wr(Lt,z,-1/0,$.sortObjects)}wr(w,z,0,$.sortObjects),b.finish(),et!==null&&et.updateLights(N.state.lightsArray),$.sortObjects===!0&&b.sort(It,ne),de=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,de&&Se.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&re.beginShadows();let tt=N.state.shadowsArray;if(he.render(tt,w,z),At===!0&&re.endShadows(),(nt&&D.hasRenderPass())===!1){let Lt=b.opaque,ct=b.transmissive;if(N.setupLights(),z.isArrayCamera){let Rt=z.cameras;if(ct.length>0)for(let Dt=0,we=Rt.length;Dt<we;Dt++){let Re=Rt[Dt];Sa(Lt,ct,w,Re)}de&&Se.render(w);for(let Dt=0,we=Rt.length;Dt<we;Dt++){let Re=Rt[Dt];ya(b,w,Re,Re.viewport)}}else ct.length>0&&Sa(Lt,ct,w,z),de&&Se.render(w),ya(b,w,z)}Et!==null&&ut===0&&(ft.updateMultisampleRenderTarget(Et),ft.updateRenderTargetMipmap(Et)),nt&&D.end($),w.isScene===!0&&w.onAfterRender($,w,z),qt.resetDefaultState(),dt=-1,Mt=null,T.pop(),T.length>0?(N=T[T.length-1],ft.setTextureUnits(N.state.textureUnits),At===!0&&re.setGlobalState($.clippingPlanes,N.state.camera)):N=null,G.pop(),G.length>0?b=G[G.length-1]:b=null,et!==null&&et.renderEnd()};function wr(w,z,rt,nt){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(st)){nt&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);let Lt=yt.update(w),ct=w.material;ct.visible&&b.push(w,Lt,ct,rt,le.z,null,z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(st))){let Lt=yt.update(w),ct=w.material;if(nt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),le.copy(Lt.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(ct)){let Rt=Lt.groups;for(let Dt=0,we=Rt.length;Dt<we;Dt++){let Re=Rt[Dt],Qt=ct[Re.materialIndex];Qt&&Qt.visible&&b.push(w,Lt,Qt,rt,le.z,Re,z)}}else ct.visible&&b.push(w,Lt,ct,rt,le.z,null,z)}}let Nt=w.children;for(let Lt=0,ct=Nt.length;Lt<ct;Lt++)wr(Nt[Lt],z,rt,nt)}function ya(w,z,rt,nt){let{opaque:tt,transmissive:Nt,transparent:Lt}=w;N.setupLightsView(rt),At===!0&&re.setGlobalState($.clippingPlanes,rt),nt&&M.viewport(St.copy(nt)),tt.length>0&&Ss(tt,z,rt),Nt.length>0&&Ss(Nt,z,rt),Lt.length>0&&Ss(Lt,z,rt),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Sa(w,z,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){let Qt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new si(1,1,{generateMipmaps:!0,type:Qt?Ui:ai,minFilter:Fs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}let Nt=N.state.transmissionRenderTarget[nt.id],Lt=nt.viewport||St;Nt.setSize(Lt.z*$.transmissionResolutionScale,Lt.w*$.transmissionResolutionScale);let ct=$.getRenderTarget(),Rt=$.getActiveCubeFace(),Dt=$.getActiveMipmapLevel();$.setRenderTarget(Nt),$.getClearColor(ke),Ee=$.getClearAlpha(),Ee<1&&$.setClearColor(16777215,.5),$.clear(),de&&Se.render(rt);let we=$.toneMapping;$.toneMapping=Di;let Re=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),At===!0&&re.setGlobalState($.clippingPlanes,nt),Ss(w,rt,nt),ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ze=0,nn=z.length;ze<nn;ze++){let Ge=z[ze],{object:Le,geometry:wn,material:Kt,group:Ln}=Ge;if(Kt.side===qi&&Le.layers.test(nt.layers)){let Oe=Kt.side;Kt.side=jn,Kt.needsUpdate=!0,Ma(Le,rt,nt,wn,Kt,Ln),Kt.side=Oe,Kt.needsUpdate=!0,Qt=!0}}Qt===!0&&(ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt))}$.setRenderTarget(ct,Rt,Dt),$.setClearColor(ke,Ee),Re!==void 0&&(nt.viewport=Re),$.toneMapping=we}function Ss(w,z,rt){let nt=z.isScene===!0?z.overrideMaterial:null;for(let tt=0,Nt=w.length;tt<Nt;tt++){let Lt=w[tt],{object:ct,geometry:Rt,group:Dt}=Lt,we=Lt.material;we.allowOverride===!0&&nt!==null&&(we=nt),ct.layers.test(rt.layers)&&Ma(ct,z,rt,Rt,we,Dt)}}function Ma(w,z,rt,nt,tt,Nt){et!==null&&tt.isNodeMaterial&&et.setObject(w,tt),w.onBeforeRender($,z,rt,nt,tt,Nt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender($,z,rt,nt,w,Nt),tt.transparent===!0&&tt.side===qi&&tt.forceSinglePass===!1?(tt.side=jn,tt.needsUpdate=!0,$.renderBufferDirect(rt,z,nt,tt,w,Nt),tt.side=Ns,tt.needsUpdate=!0,$.renderBufferDirect(rt,z,nt,tt,w,Nt),tt.side=qi):$.renderBufferDirect(rt,z,nt,tt,w,Nt),w.onAfterRender($,z,rt,nt,tt,Nt)}function $s(w,z,rt){z.isScene!==!0&&(z=oe);let nt=ot.get(w),tt=N.state.lights,Nt=N.state.shadowsArray,Lt=tt.state.version,ct=kt.getParameters(w,tt.state,Nt,z,rt,N.state.lightProbeGridArray),Rt=kt.getProgramCacheKey(ct),Dt=nt.programs;nt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,nt.fog=z.fog;let we=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;nt.envMap=Pt.get(w.envMap||nt.environment,we),nt.envMapRotation=nt.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Zn),Dt=new Map,nt.programs=Dt);let Re=Dt.get(Rt);if(Re!==void 0){if(nt.currentProgram===Re&&nt.lightsStateVersion===Lt)return Ms(w,ct),Re}else ct.uniforms=kt.getUniforms(w),et!==null&&w.isNodeMaterial&&et.build(w,rt,ct),w.onBeforeCompile(ct,$),Re=kt.acquireProgram(ct,Rt),Dt.set(Rt,Re),nt.uniforms=ct.uniforms;let Qt=nt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qt.clippingPlanes=re.uniform),Ms(w,ct),nt.needsLights=nu(w),nt.lightsStateVersion=Lt,nt.needsLights&&(Qt.ambientLightColor.value=tt.state.ambient,Qt.lightProbe.value=tt.state.probe,Qt.sunLights.value=tt.state.sun,Qt.sunLightShadows.value=tt.state.sunShadow,Qt.directionalLights.value=tt.state.directional,Qt.directionalLightShadows.value=tt.state.directionalShadow,Qt.spotLights.value=tt.state.spot,Qt.spotLightShadows.value=tt.state.spotShadow,Qt.rectAreaLights.value=tt.state.rectArea,Qt.ltc_1.value=tt.state.rectAreaLTC1,Qt.ltc_2.value=tt.state.rectAreaLTC2,Qt.pointLights.value=tt.state.point,Qt.pointLightShadows.value=tt.state.pointShadow,Qt.hemisphereLights.value=tt.state.hemi,Qt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Qt.sunShadowCascade.value=tt.state.sunShadowCascade,Qt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Qt.spotLightMatrix.value=tt.state.spotLightMatrix,Qt.spotLightMap.value=tt.state.spotLightMap,Qt.pointShadowMatrix.value=tt.state.pointShadowMatrix),nt.lightProbeGrid=N.state.lightProbeGridArray.length>0,nt.currentProgram=Re,nt.uniformsList=null,Re}function Hs(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=da.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Ms(w,z){let rt=ot.get(w);rt.outputColorSpace=z.outputColorSpace,rt.batching=z.batching,rt.batchingColor=z.batchingColor,rt.instancing=z.instancing,rt.instancingColor=z.instancingColor,rt.instancingMorph=z.instancingMorph,rt.skinning=z.skinning,rt.morphTargets=z.morphTargets,rt.morphNormals=z.morphNormals,rt.morphColors=z.morphColors,rt.morphTargetsCount=z.morphTargetsCount,rt.numClippingPlanes=z.numClippingPlanes,rt.numIntersection=z.numClipIntersection,rt.vertexAlphas=z.vertexAlphas,rt.vertexTangents=z.vertexTangents,rt.toneMapping=z.toneMapping}function tu(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;R.setFromMatrixPosition(z.matrixWorld);for(let rt=0,nt=w.length;rt<nt;rt++){let tt=w[rt];if(tt.texture!==null&&tt.boundingBox.containsPoint(R))return tt}return null}function eu(w,z,rt,nt,tt){z.isScene!==!0&&(z=oe),ft.resetTextureUnits();let Nt=z.fog,Lt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?z.environment:null,ct=Et===null?$.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Fe.workingColorSpace,Rt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Dt=Pt.get(nt.envMap||Lt,Rt),we=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Re=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Qt=!!rt.morphAttributes.position,ze=!!rt.morphAttributes.normal,nn=!!rt.morphAttributes.color,Ge=Di;nt.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ge=$.toneMapping);let Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,wn=Le!==void 0?Le.length:0,Kt=ot.get(nt),Ln=N.state.lights;if(At===!0&&(H===!0||w!==Mt)){let Xe=w===Mt&&nt.id===dt;re.setState(nt,w,Xe)}let Oe=!1;nt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ln.state.version||Kt.outputColorSpace!==ct||tt.isBatchedMesh&&Kt.batching===!1||!tt.isBatchedMesh&&Kt.batching===!0||tt.isBatchedMesh&&Kt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Kt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Kt.instancing===!1||!tt.isInstancedMesh&&Kt.instancing===!0||tt.isSkinnedMesh&&Kt.skinning===!1||!tt.isSkinnedMesh&&Kt.skinning===!0||tt.isInstancedMesh&&Kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Kt.instancingMorph===!1&&tt.morphTexture!==null||Kt.envMap!==Dt||nt.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==re.numPlanes||Kt.numIntersection!==re.numIntersection)||Kt.vertexAlphas!==we||Kt.vertexTangents!==Re||Kt.morphTargets!==Qt||Kt.morphNormals!==ze||Kt.morphColors!==nn||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==wn||!!Kt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Kt.__version=nt.version);let ei=Kt.currentProgram;Oe===!0&&(ei=$s(nt,z,tt),et&&nt.isNodeMaterial&&et.onUpdateProgram(nt,ei,Kt));let mi=!1,Si=!1,Ce=!1,We=ei.getUniforms(),rn=Kt.uniforms;if(M.useProgram(ei.program)&&(mi=!0,Si=!0,Ce=!0),nt.id!==dt&&(dt=nt.id,Si=!0),Kt.needsLights){let Xe=tu(N.state.lightProbeGridArray,tt);Kt.lightProbeGrid!==Xe&&(Kt.lightProbeGrid=Xe,Si=!0)}if(mi||Mt!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),We.setValue(V,"projectionMatrix",w.projectionMatrix),We.setValue(V,"viewMatrix",w.matrixWorldInverse);let Dn=We.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,Ot.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&We.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&We.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),Mt!==w&&(Mt=w,Si=!0,Ce=!0)}if(Kt.needsLights&&(Ln.state.sunShadowMap.length>0&&We.setValue(V,"sunShadowMap",Ln.state.sunShadowMap,ft),Ln.state.directionalShadowMap.length>0&&We.setValue(V,"directionalShadowMap",Ln.state.directionalShadowMap,ft),Ln.state.spotShadowMap.length>0&&We.setValue(V,"spotShadowMap",Ln.state.spotShadowMap,ft),Ln.state.pointShadowMap.length>0&&We.setValue(V,"pointShadowMap",Ln.state.pointShadowMap,ft)),tt.isSkinnedMesh){We.setOptional(V,tt,"bindMatrix"),We.setOptional(V,tt,"bindMatrixInverse");let Xe=tt.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),We.setValue(V,"boneTexture",Xe.boneTexture,ft))}tt.isBatchedMesh&&(We.setOptional(V,tt,"batchingTexture"),We.setValue(V,"batchingTexture",tt._matricesTexture,ft),We.setOptional(V,tt,"batchingIdTexture"),We.setValue(V,"batchingIdTexture",tt._indirectTexture,ft),We.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&We.setValue(V,"batchingColorTexture",tt._colorsTexture,ft));let Oi=rt.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Z.update(tt,rt,ei),(Si||Kt.receiveShadow!==tt.receiveShadow)&&(Kt.receiveShadow=tt.receiveShadow,We.setValue(V,"receiveShadow",tt.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=FM()),Si){if(We.setValue(V,"toneMappingExposure",$.toneMappingExposure),Kt.needsLights&&rl(rn,Ce),Nt&&nt.fog===!0&&se.refreshFogUniforms(rn,Nt),se.refreshMaterialUniforms(rn,nt,vt,_t,N.state.transmissionRenderTarget[w.id]),Kt.needsLights&&Kt.lightProbeGrid){let Xe=Kt.lightProbeGrid;rn.probesSH.value=Xe.texture,rn.probesMin.value.copy(Xe.boundingBox.min),rn.probesMax.value.copy(Xe.boundingBox.max),rn.probesResolution.value.copy(Xe.resolution)}da.upload(V,Hs(Kt),rn,ft)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(da.upload(V,Hs(Kt),rn,ft),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&We.setValue(V,"center",tt.center),We.setValue(V,"modelViewMatrix",tt.modelViewMatrix),We.setValue(V,"normalMatrix",tt.normalMatrix),We.setValue(V,"modelMatrix",tt.matrixWorld),nt.uniformsGroups!==void 0){let Xe=nt.uniformsGroups;for(let Dn=0,Vn=Xe.length;Dn<Vn;Dn++){let ba=Xe[Dn];wt.update(ba,ei),wt.bind(ba,ei)}}return ei}function rl(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.sunLights.needsUpdate=z,w.sunLightShadows.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function nu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return ut},this.getRenderTarget=function(){return Et},this.setRenderTargetTextures=function(w,z,rt){let nt=ot.get(w);nt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),ot.get(w.texture).__webglTexture=z,ot.get(w.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let rt=ot.get(w);rt.__webglFramebuffer=z,rt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,rt=0){Et=w,ht=z,ut=rt;let nt=null,tt=!1,Nt=!1;if(w){let ct=ot.get(w);if(ct.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(V.FRAMEBUFFER,ct.__webglFramebuffer),St.copy(w.viewport),Wt.copy(w.scissor),Zt=w.scissorTest,M.viewport(St),M.scissor(Wt),M.setScissorTest(Zt),dt=-1;return}else if(ct.__webglFramebuffer===void 0)ft.setupRenderTarget(w);else if(ct.__hasExternalTextures)ft.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let we=w.depthTexture;if(ct.__boundDepthTexture!==we){if(we!==null&&ot.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(w)}}let Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Nt=!0);let Dt=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?nt=Dt[z][rt]:nt=Dt[z],tt=!0):w.samples>0&&ft.useMultisampledRTT(w)===!1?nt=ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?nt=Dt[rt]:nt=Dt,St.copy(w.viewport),Wt.copy(w.scissor),Zt=w.scissorTest}else St.copy(Yt).multiplyScalar(vt).floor(),Wt.copy(ce).multiplyScalar(vt).floor(),Zt=ie;if(rt!==0&&(nt=at),M.bindFramebuffer(V.FRAMEBUFFER,nt)&&M.drawBuffers(w,nt),M.viewport(St),M.scissor(Wt),M.setScissorTest(Zt),tt){let ct=ot.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,ct.__webglTexture,rt)}else if(Nt){let ct=z;for(let Rt=0;Rt<w.textures.length;Rt++){let Dt=ot.get(w.textures[Rt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,rt,ct)}}else if(w!==null&&rt!==0){let ct=ot.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ct.__webglTexture,rt)}dt=-1};function zn(w){let z=ot.get(w);return(z.__readFormat!==w.format||z.__readType!==w.type)&&(z.__readFormat=w.format,z.__readType=w.type,z.__formatReadable=L.textureFormatReadable(w.format),z.__typeReadable=L.textureTypeReadable(w.type)),z}this.readRenderTargetPixels=function(w,z,rt,nt,tt,Nt,Lt,ct=0){if(!(w&&w.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt){M.bindFramebuffer(V.FRAMEBUFFER,Rt);try{let Dt=w.textures[ct],we=Dt.format,Re=Dt.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ct);let Qt=zn(Dt);if(Qt.__formatReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-nt&&rt>=0&&rt<=w.height-tt&&V.readPixels(z,rt,nt,tt,$t.convert(we),$t.convert(Re),Nt)}finally{let Dt=Et!==null?ot.get(Et).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,z,rt,nt,tt,Nt,Lt,ct=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt)if(z>=0&&z<=w.width-nt&&rt>=0&&rt<=w.height-tt){M.bindFramebuffer(V.FRAMEBUFFER,Rt);let Dt=w.textures[ct],we=Dt.format,Re=Dt.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ct);let Qt=zn(Dt);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ze),V.bufferData(V.PIXEL_PACK_BUFFER,Nt.byteLength,V.STREAM_READ),V.readPixels(z,rt,nt,tt,$t.convert(we),$t.convert(Re),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let nn=Et!==null?ot.get(Et).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,nn);let Ge=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vm(V,Ge,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Nt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ze),V.deleteSync(Ge),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,rt=0){let nt=Math.pow(2,-rt),tt=Math.floor(w.image.width*nt),Nt=Math.floor(w.image.height*nt),Lt=z!==null?z.x:0,ct=z!==null?z.y:0;ft.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Lt,ct,tt,Nt),M.unbindTexture()},this.copyTextureToTexture=function(w,z,rt=null,nt=null,tt=0,Nt=0){let Lt,ct,Rt,Dt,we,Re,Qt,ze,nn,Ge=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(rt!==null)Lt=rt.max.x-rt.min.x,ct=rt.max.y-rt.min.y,Rt=rt.isBox3?rt.max.z-rt.min.z:1,Dt=rt.min.x,we=rt.min.y,Re=rt.isBox3?rt.min.z:0;else{let rn=Math.pow(2,-tt);Lt=Math.floor(Ge.width*rn),ct=Math.floor(Ge.height*rn),w.isDataArrayTexture?Rt=Ge.depth:w.isData3DTexture?Rt=Math.floor(Ge.depth*rn):Rt=1,Dt=0,we=0,Re=0}nt!==null?(Qt=nt.x,ze=nt.y,nn=nt.z):(Qt=0,ze=0,nn=0);let Le=$t.convert(z.format),wn=$t.convert(z.type),Kt;z.isData3DTexture?(ft.setTexture3D(z,0),Kt=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ft.setTexture2DArray(z,0),Kt=V.TEXTURE_2D_ARRAY):(ft.setTexture2D(z,0),Kt=V.TEXTURE_2D),M.activeTexture(V.TEXTURE0),M.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let Ln=M.getParameter(V.UNPACK_ROW_LENGTH),Oe=M.getParameter(V.UNPACK_IMAGE_HEIGHT),ei=M.getParameter(V.UNPACK_SKIP_PIXELS),mi=M.getParameter(V.UNPACK_SKIP_ROWS),Si=M.getParameter(V.UNPACK_SKIP_IMAGES);M.pixelStorei(V.UNPACK_ROW_LENGTH,Ge.width),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ge.height),M.pixelStorei(V.UNPACK_SKIP_PIXELS,Dt),M.pixelStorei(V.UNPACK_SKIP_ROWS,we),M.pixelStorei(V.UNPACK_SKIP_IMAGES,Re);let Ce=w.isDataArrayTexture||w.isData3DTexture,We=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let rn=ot.get(w),Oi=ot.get(z),Xe=ot.get(rn.__renderTarget),Dn=ot.get(Oi.__renderTarget);M.bindFramebuffer(V.READ_FRAMEBUFFER,Xe.__webglFramebuffer),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Vn=0;Vn<Rt;Vn++)Ce&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ot.get(w).__webglTexture,tt,Re+Vn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ot.get(z).__webglTexture,Nt,nn+Vn)),V.blitFramebuffer(Dt,we,Lt,ct,Qt,ze,Lt,ct,V.DEPTH_BUFFER_BIT,V.NEAREST);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||ot.has(w)){let rn=ot.get(w),Oi=ot.get(z);M.bindFramebuffer(V.READ_FRAMEBUFFER,J),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,Q);for(let Xe=0;Xe<Rt;Xe++)Ce?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,tt,Re+Xe):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,tt),We?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oi.__webglTexture,Nt,nn+Xe):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oi.__webglTexture,Nt),tt!==0?V.blitFramebuffer(Dt,we,Lt,ct,Qt,ze,Lt,ct,V.COLOR_BUFFER_BIT,V.NEAREST):We?V.copyTexSubImage3D(Kt,Nt,Qt,ze,nn+Xe,Dt,we,Lt,ct):V.copyTexSubImage2D(Kt,Nt,Qt,ze,Dt,we,Lt,ct);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else We?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Kt,Nt,Qt,ze,nn,Lt,ct,Rt,Le,wn,Ge.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Kt,Nt,Qt,ze,nn,Lt,ct,Rt,Le,Ge.data):V.texSubImage3D(Kt,Nt,Qt,ze,nn,Lt,ct,Rt,Le,wn,Ge):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Nt,Qt,ze,Lt,ct,Le,wn,Ge.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Nt,Qt,ze,Ge.width,Ge.height,Le,Ge.data):V.texSubImage2D(V.TEXTURE_2D,Nt,Qt,ze,Lt,ct,Le,wn,Ge);M.pixelStorei(V.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Oe),M.pixelStorei(V.UNPACK_SKIP_PIXELS,ei),M.pixelStorei(V.UNPACK_SKIP_ROWS,mi),M.pixelStorei(V.UNPACK_SKIP_IMAGES,Si),Nt===0&&z.generateMipmaps&&V.generateMipmap(Kt),M.unbindTexture()},this.initRenderTarget=function(w){ot.get(w).__webglFramebuffer===void 0&&ft.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ft.setTextureCube(w,0):w.isData3DTexture?ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ft.setTexture2DArray(w,0):ft.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){ht=0,ut=0,Et=null,M.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Fe._getUnpackColorSpace()}};var ig=new Kn,Fh=new W,_s=class extends Fo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new gn(t,3)),this.setAttribute("uv",new gn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ds(e,6,1);return this.setAttribute("instanceStart",new Li(n,3,0)),this.setAttribute("instanceEnd",new Li(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ds(e,6,1);return this.setAttribute("instanceColorStart",new Li(n,3,0)),this.setAttribute("instanceColorEnd",new Li(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ro(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ig.setFromBufferAttribute(e),this.boundingBox.union(ig))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fh)),Fh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new zt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qn.line={uniforms:Yo.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var Ji=class extends In{constructor(t){super({type:"LineMaterial",uniforms:Yo.clone(Qn.line.uniforms),vertexShader:Qn.line.vertexShader,fragmentShader:Qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Kd=new Ye,sg=new W,rg=new W,On=new Ye,Bn=new Ye,Ki=new Ye,jd=new W,Qd=new Be,kn=new Bo,ag=new W,Oh=new Kn,Bh=new ri,ji=new Ye,Qi,mr;function og(i,t,e){return ji.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ji.multiplyScalar(1/ji.w),ji.x=mr/e.width,ji.y=mr/e.height,ji.applyMatrix4(i.projectionMatrixInverse),ji.multiplyScalar(1/ji.w),Math.abs(Math.max(ji.x,ji.y))}function OM(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){kn.start.fromBufferAttribute(s,o),kn.end.fromBufferAttribute(r,o),kn.applyMatrix4(e);let h=new W,u=new W;Qi.distanceSqToSegment(kn.start,kn.end,u,h),u.distanceTo(h)<mr*.5&&t.push({point:u,pointOnLine:h,distance:Qi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function BM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),g=-t.near;Qi.at(1,Ki),Ki.w=1,Ki.applyMatrix4(t.matrixWorldInverse),Ki.applyMatrix4(n),Ki.multiplyScalar(1/Ki.w),Ki.x*=r.x/2,Ki.y*=r.y/2,Ki.z=0,jd.copy(Ki),Qd.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,x=u;f<x;f++){if(On.fromBufferAttribute(c,f),Bn.fromBufferAttribute(h,f),On.w=1,Bn.w=1,On.applyMatrix4(Qd),Bn.applyMatrix4(Qd),On.z>g&&Bn.z>g)continue;if(On.z>g){let B=On.z-Bn.z,R=(On.z-g)/B;On.lerp(Bn,R)}else if(Bn.z>g){let B=Bn.z-On.z,R=(Bn.z-g)/B;Bn.lerp(On,R)}On.applyMatrix4(n),Bn.applyMatrix4(n),On.multiplyScalar(1/On.w),Bn.multiplyScalar(1/Bn.w),On.x*=r.x/2,On.y*=r.y/2,Bn.x*=r.x/2,Bn.y*=r.y/2,kn.start.copy(On),kn.start.z=0,kn.end.copy(Bn),kn.end.z=0;let I=kn.closestPointToPointParameter(jd,!0);kn.at(I,ag);let m=Id.lerp(On.z,Bn.z,I),p=m>=-1&&m<=1,O=jd.distanceTo(ag)<mr*.5;if(p&&O){kn.start.fromBufferAttribute(c,f),kn.end.fromBufferAttribute(h,f),kn.start.applyMatrix4(a),kn.end.applyMatrix4(a);let B=new W,R=new W;Qi.distanceSqToSegment(kn.start,kn.end,R,B),e.push({point:R,pointOnLine:B,distance:Qi.origin.distanceTo(R),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var gr=class extends Rn{constructor(t=new _s,e=new Ji({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)sg.fromBufferAttribute(e,a),rg.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+sg.distanceTo(rg);let r=new Ds(s,2,1);return t.setAttribute("instanceDistanceStart",new Li(r,1,0)),t.setAttribute("instanceDistanceEnd",new Li(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Qi=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;mr=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Bh.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=mr*.5;else{let g=Math.max(s.near,Bh.distanceToPoint(Qi.origin));h=og(s,g,c.resolution)}if(Bh.radius+=h,Qi.intersectsSphere(Bh)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Oh.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=mr*.5;else{let g=Math.max(s.near,Oh.distanceToPoint(Qi.origin));u=og(s,g,c.resolution)}Oh.expandByScalar(u),Qi.intersectsBox(Oh)!==!1&&(n?OM(this,e):BM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Kd),this.material.uniforms.resolution.value.set(Kd.z,Kd.w))}};var ks=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function lg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:c,CY:h,mcs:u,q:g,list:f,clamp:x,norm:S,munis:I}=i,m=l=>document.querySelector(l),p=l=>String(l).replace(/[<>&"]/g,d=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[d]),O=(l,d)=>[(l-c)*o,(d-h)*o],B=.06,R=t.segs.map(l=>{let d=[],v=[0];for(let y=0;y<l.length;y+=2){let E=O(l[y],l[y+1]);d.length&&v.push(v[v.length-1]+Math.hypot(E[0]-d[d.length-1][0],E[1]-d[d.length-1][1])),d.push(E)}return{p:d,c:v,L:v[v.length-1]}}),b=t.stops.map(([l,d,v,y])=>({n:l,id:y,w:O(d,v),fams:new Set})),N=t.routes.map(([l,d,v])=>({s:l,l:d,c:v})),G=new Map;(t.bus||[]).forEach(([l,d,v,y])=>{let E={days:new Set(l),name:d,stops:v,times:y};v.forEach((A,P)=>{if(P<v.length-1){let F=G.get(A)||[];F.push([E,P]),G.set(A,F)}})});function T(l,d,v){let y=ie(),E=t.days.indexOf(y.ymd),A=[];for(let[P,F]of G.get(l)||[]){if(!P.days.has(E))continue;let U=P.times[F];if(U<d||U>v)continue;let Y=P.stops[P.stops.length-1];A.push({sm:U,est:U,dl:0,fam:P.name,dest:b[Y].n,destId:b[Y].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(F)})}return A}let D=(l,d)=>{let v=l.match(/^R([A-Z]*)(\d*)(.*)$/),y=d.match(/^R([A-Z]*)(\d*)(.*)$/);return(v[1]||"").localeCompare(y[1]||"")||(+v[2]||0)-(+y[2]||0)||v[3].localeCompare(y[3])},$=[...new Set(N.map(l=>l.s))].sort(D),X={};N.forEach(l=>{X[l.s]||(X[l.s]=l.c)});let et=t.pats.map(([l,d,v])=>({stops:l,t:d,segs:v})),at=t.trips.map(([l,d,v,y,E],A)=>({day:l,pat:et[d],fam:N[v].s,c:N[v].c,t0:y,num:E,tid:t.tids[A]})),J={};$.forEach(l=>J[l]=new Set),at.forEach(l=>{l.pat.segs.forEach(d=>J[l.fam].add(d)),l.pat.stops.forEach(d=>b[d].fams.add(l.fam))});let Q=t.days.map((l,d)=>at.filter(v=>v.day===d)),ht=new Map(at.map(l=>[l.tid,l])),ut=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Et=Math.PI/180,dt=3.922*Et,Mt=-39.705*Et;function St(l,d){let v=l*Et+dt,y=d*Et,E=Math.cos(Mt),A=Math.sin(Mt),P=Math.cos(y),F=Math.cos(v)*P,U=Math.sin(v)*P,Y=Math.sin(y),j=Math.atan2(U,F*E-Y*A),_=Math.asin(Y*E+F*A),C=Math.sqrt(2/(1+Math.cos(j)*Math.cos(_))),k=C*Math.cos(_)*Math.sin(j),K=C*Math.sin(_),[gt,Tt,pt,bt,it,ue,ve]=ut;return O((Tt+gt*k-it)*ve,(ue-(bt-pt*K))*ve)}let Wt=new Map(b.map((l,d)=>[l.id,d]));function Zt(l){if(l.g)return l.g;let d=[],v=[],y=[0],E=0;return l.segs.forEach((A,P)=>{let F=R[A];F.p.forEach((U,Y)=>{P&&!Y||(d.push(U),v.push(E+F.c[Y]))}),E+=F.L,y.push(E)}),l.g={pts:d,cum:v,stopD:y}}function ke(l,d,v,y){let E=1e18,A=0;for(let P=0;P+1<l.pts.length;P++){if(l.cum[P+1]<v||l.cum[P]>y)continue;let F=l.pts[P],U=l.pts[P+1],Y=U[0]-F[0],j=U[1]-F[1],_=Y*Y+j*j||1e-9,C=Math.max(0,Math.min(1,((d[0]-F[0])*Y+(d[1]-F[1])*j)/_)),k=F[0]+Y*C-d[0],K=F[1]+j*C-d[1],gt=k*k+K*K;gt<E&&(E=gt,A=l.cum[P]+C*(l.cum[P+1]-l.cum[P]))}return{d:A,err:Math.sqrt(E)}}function Ee(l,d){let v=0,y=l.cum.length-1;if(d<=0)return l.pts[0];if(d>=l.cum[y])return l.pts[y];for(;y-v>1;){let F=v+y>>1;l.cum[F]<=d?v=F:y=F}let E=(d-l.cum[v])/(l.cum[y]-l.cum[v]||1),A=l.pts[v],P=l.pts[y];return[A[0]+(P[0]-A[0])*E,A[1]+(P[1]-A[1])*E]}let Ue=l=>`${l.slice(6,8)}/${l.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(l){let d={};return _t.formatToParts(l).forEach(v=>d[v.type]=v.value),{ymd:d.year+d.month+d.day,min:+d.hour*60+ +d.minute+ +d.second/60}}let It=0,ne=null,Yt=0,ce=0;function ie(){let l=vt(new Date);if(It===0&&ne==null)return{...l,live:!0};let d=ne==null?l.min:Yt+(It?(performance.now()-ce)/6e4*It:0);return{ymd:l.ymd,min:d,live:!1}}let st=l=>(l=(Math.floor(l+1e-6)%1440+1440)%1440,String(Math.floor(l/60)).padStart(2,"0")+":"+String(l%60).padStart(2,"0")),At="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let l=new URLSearchParams(location.search).get("rt");l&&localStorage.setItem("rod_rt",l);let d=localStorage.getItem("rod_rt");d&&/jhmuyo\.workers\.dev/.test(d)&&(d=At,localStorage.setItem("rod_rt",d)),H.url=d||At}catch{H.url=At}let Ct=(l,d)=>fetch(l+d,{cache:"no-store"}).then(v=>{if(!v.ok)throw new Error("HTTP "+v.status);return v.json()}),Ot=l=>/^51/.test(l||"");async function le(){if(!H.url){Pe();return}let l=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&Ct(l,"/reports.json").then(U=>{U&&Array.isArray(U.items)?(H.rep=U.items,H.repSkew=(U.now||Date.now())-Date.now(),U.tipos&&(H.tipos=U.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let d=!H.adifAt||Date.now()-H.adifAt>11e4,[v,y,E,A,P]=await Promise.allSettled([Ct(l,"/trip_updates.json"),Ct(l,"/vehicle_positions.json"),Ct(l,"/alerts.json"),Ct(l,"/notices.json"),d?Ct(l,"/adif.json"):Promise.reject(0)]);if(P.status==="fulfilled"&&P.value&&P.value.ok?(H.adif=P.value,H.adifAt=Date.now()):d&&(H.adifAt=Date.now()-6e4),v.status==="fulfilled"){let U=new Map,Y=new Map;for(let j of v.value.entity||[]){let _=j.tripUpdate;if(!_||!_.trip||!Ot(_.trip.tripId))continue;let C=_.trip.tripId,k=(_.stopTimeUpdate||[])[0],K=_.delay;K==null&&k&&(K=(k.arrival||k.departure||{}).delay),_.trip.scheduleRelationship==="CANCELED"&&(K="X"),K!=null&&U.set(C,K),Y.set(C,{next:k?{sid:k.stopId,t:+((k.arrival||k.departure||{}).time||0)}:null})}H.delays=U,H.tu=Y,H.ok=Date.now(),H.feedTs=+((v.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=v.reason&&v.reason.message||__t(0);if(y.status==="fulfilled"){let U=new Map,Y=Date.now()/1e3;for(let j of y.value.entity||[]){let _=j.vehicle;if(!_||!_.trip||!Ot(_.trip.tripId)||!_.position)continue;let C=_.vehicle&&_.vehicle.label||"",k=C.match(/PLATF\.\(([^)]+)\)/),K=H.vp.get(_.trip.tripId),gt={tid:_.trip.tripId,w:St(+_.position.longitude,+_.position.latitude),st:_.currentStatus||"",sid:_.stopId||"",ts:+_.timestamp||Y,label:C,plat:k?k[1]:"",fam:(C.split("-")[0]||"").trim(),num:_.vehicle&&_.vehicle.id||""};gt.disp=K?K.disp:null,U.set(gt.tid,gt)}H.vp=U,H.okVP=Date.now()}let F=[];if(A.status==="fulfilled"&&Array.isArray(A.value.included)){H.okNotices=Date.now();for(let U of A.value.included){let Y=new Set((U.lines||[]).map(K=>K.id).filter(K=>X[K])),j=(K,gt)=>{K=K||{},gt=gt||window.__L;let Tt=K[gt];return gt==="en"&&Tt&&(Tt===K.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Tt))&&(Tt=""),(Tt||K.es||K.ca||"").trim()},_=K=>[j(U.description,K),j(U.title,K)].sort((gt,Tt)=>Tt.length-gt.length)[0],C=_(),k=_("es");C&&F.push({id:"N"+U.externalId,fams:Y,stops:new Set,txt:C,es:k,when:(U.date||"")+"T"+(U.time||""),src:"Rodalies",core:U.core||""})}}if(E.status==="fulfilled"){let U=+((E.value.header||{}).timestamp||0);if(H.alertsTs=U,Date.now()/1e3-U<6*3600)for(let Y of E.value.entity||[]){let j=Y.alert;if(!j)continue;let _=new Set,C=new Set;for(let Tt of j.informedEntity||[])(Tt.routeId||"").startsWith("51")&&_.add(Tt.routeId.replace(/^51T\d+/,"")),Tt.stopId&&Wt.has(Tt.stopId)&&C.add(Wt.get(Tt.stopId));if(!_.size&&!C.size)continue;let k=(j.descriptionText||j.headerText||{translation:[]}).translation||[],K=((k.find(Tt=>Tt.language==="es")||k[0]||{}).text||"").trim(),gt=+((j.activePeriod||[])[0]||{}).start||0;F.some(Tt=>Tt.txt===K)||F.push({id:Y.id,fams:_,stops:C,txt:K,when:gt?new Date(gt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[U,Y]of(H.adif.items||[]).entries()){let j=(Y.t?Y.t+". ":"")+Y.txt,_=new Set,C=new Set,k=S(j);for(let K of j.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[K[1]]&&_.add(K[1]);b.forEach((K,gt)=>{K.fams.size&&K.n.length>4&&k.includes(S(K.n))&&(C.add(gt),_.size||K.fams.forEach(Tt=>_.add(Tt)))}),F.some(K=>K.txt===j)||F.push({id:"A"+U,fams:_,stops:C,txt:j,when:H.adif.upd||"",src:"Adif",lvl:Y.lvl})}if(A.status==="fulfilled"||E.status==="fulfilled"||H.adif){H.alerts=F.sort((U,Y)=>Y.when>U.when?1:-1);try{i0()}catch{}}Pe(),lu(),Nt=0,a()}let oe=()=>H.okVP&&Date.now()-H.okVP<9e4,de={at:0,v:!1},_e=()=>{if(!oe()||H.vp.size>0)return!1;if(Date.now()-de.at>3e4){de.at=Date.now();let l=vt(new Date),d=t.days.indexOf(l.ymd),v=0;if(d>=0)for(let y of Q[d]){let E=l.min-y.t0;E>y.pat.t[1]+2&&E<y.pat.t[y.pat.t.length-2]-2&&v++}de.v=v>=6}return de.v},V=()=>oe()&&!_e();function Pe(){let l=m("#rtst"),d=m("#mode");if(d){let y=[...q].filter(F=>{Ua("");let U=rs.m.get(F);return U&&U[0]>=2}),E=cu(y),A=!!V()&&ie().live&&!(y.length&&E.length===y.length);d.classList.toggle("on",A),d.classList.toggle("pre",!A),d.textContent=A?__t(1):me.cur?__t(2):__t(3),d.classList.toggle("past",!!me.cur);let P=m("#rcgrab");if(P){let F=P.querySelector(".rdot");F||(F=document.createElement("b"),F.className="rdot",P.insertBefore(F,P.firstChild)),F.className="rdot "+(me.cur?"past":A?"on":"pre"),F.title=d.textContent}d.title=me.cur?`${__t(4)}${me.cur.sn.t}${__t(5)}`:""}if(!l)return;H.url?H.err?l.textContent=__t(7)+H.err+__t(8):V()?l.innerHTML=`${__t(9)}${H.vp.size}${__t(10)}${H.delays.size}${__t(11)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:_e()?l.textContent=__t(12):l.textContent=__t(13):l.textContent=H.err||__t(6);let v=m("#rturl");v&&v._shown!==H.url&&(v.value=H.url,v._shown=H.url)}m("#rtsave").onclick=()=>{let l=m("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(l&&!/^https?:\/\//.test(l)&&(l="https://"+l),!l){H.err=__t(14),Pe();return}H.url=l;try{localStorage.setItem("rod_rt",l)}catch{}H.ok=0,H.err="",Pe(),le()},m("#rtoff").onclick=()=>{H.url=At;try{localStorage.removeItem("rod_rt")}catch{}u._h="",le()},setInterval(le,2e4),setTimeout(le,50);let me={snap:null,key:""};function L(){let l=ie();if(l.live||!Ce.hoy||!Ce.hoy.snaps||It&&ne==null)return null;let d=vt(new Date).min;if(l.min>d+1)return null;let v=null;for(let y of Ce.hoy.snaps){if(!y.d)continue;let E=Pf(y.t);E<=l.min+1&&(!v||E>v.m)&&(v={m:E,sn:y})}return v&&l.min-v.m<=25?v:null}let M=l=>{{let E=iu(l.num);if(E&&E.cx&&ie().live)return"X"}let d=me.cur;if(d){if(d.sn.x&&d.sn.x.includes(l.tid))return"X";let E=d.sn.d[l.tid];return E??0}if(!V())return null;let v=H.delays.get(l.tid),y=H.vp.get(l.tid);return v==="X"?v:y&&y.pre&&y.preDl>=1?Math.max(typeof v=="number"?v:0,y.preDl*60):v??null},q=new Set($);try{let l=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(l)&&l.some(d=>$.includes(d))&&(q.clear(),l.forEach(d=>$.includes(d)&&q.add(d)))}catch{}let ot=new _s,ft=new _s,Pt=new Ji({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Ft=new Ji({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),mt=new gr(ot,Pt),yt=new gr(ft,Ft);yt.renderOrder=20,mt.renderOrder=21,mt.frustumCulled=yt.frustumCulled=!1,e.add(yt,mt);function kt(l){let d=l[0]/o+c,v=l[1]/o+h;for(let y of I){if(y._bb===void 0){let A=1e9,P=1e9,F=-1e9,U=-1e9;for(let Y of y.rings||[]){let j=Y[0]||[];for(let _=0;_<j.length;_+=2)j[_]<A&&(A=j[_]),j[_]>F&&(F=j[_]),j[_+1]<P&&(P=j[_+1]),j[_+1]>U&&(U=j[_+1])}y._bb=[A,P,F,U]}let E=y._bb;if(!(d<E[0]||d>E[2]||v<E[1]||v>E[3]))for(let A of y.rings||[]){let P=A[0]||[],F=!1;for(let U=0,Y=P.length,j=Y-2;U<Y;j=U,U+=2){let _=P[U+1],C=P[j+1];_>v!=C>v&&d<(P[j]-P[U])*(v-_)/(C-_)+P[U]&&(F=!F)}if(F)return!0}}return!1}let se=!1;function Xt(){se||!I.length||(se=!0,b.forEach(l=>{l.ext=!kt(l.w)}),R.forEach(l=>{l.ext=!kt(l.p[0])&&!kt(l.p[l.p.length-1])&&!kt(l.p[l.p.length>>1])}))}let Vt=()=>{let l=new Set(q.size<=2?q:[]);try{ct&&ct.fam&&l.add(ct.fam)}catch{}return l},re="";function he(){Xt();let l=[],d=[],v=new Set,y=new fe,E=new fe("#d2d0d0"),A=Vt();re=[...A].join();for(let P of $)if(q.has(P))for(let F of J[P]){if(v.has(F))continue;v.add(F);let U=R[F].p;y.set(X[P]),R[F].ext&&!A.has(P)&&y.lerp(E,.55);for(let Y=0;Y+1<U.length;Y++)l.push(U[Y][0],U[Y][1],B,U[Y+1][0],U[Y+1][1],B),d.push(y.r,y.g,y.b,y.r,y.g,y.b)}l.length||(l.push(0,0,-50,0,0,-50),d.push(0,0,0,0,0,0)),ot.setPositions(l),ot.setColors(d),ft.setPositions(l),a()}he();let Se=l=>new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe(l)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Z=new _n,Ut=b.length,xt=new Float32Array(Ut*3),$t=new Float32Array(Ut*3),qt=new Float32Array(Ut),wt=new Float32Array(Ut);b.forEach((l,d)=>{xt[d*3]=l.w[0],xt[d*3+1]=l.w[1],xt[d*3+2]=B,$t.set([1,1,1],d*3),qt[d]=6,wt[d]=1.6}),Z.setAttribute("position",new Qe(xt,3)),Z.setAttribute("fill",new Qe($t,3)),Z.setAttribute("size",new Qe(qt,1)),Z.setAttribute("bw",new Qe(wt,1));let ae=Se("#1d2330"),te=new lr(Z,ae);te.renderOrder=22,te.frustumCulled=!1,e.add(te);function Te(){let l=r.dist<45,d=Vt();b.forEach((v,y)=>{let E=[...v.fams].some(P=>q.has(P)),A=v.ext&&![...v.fams].some(P=>d.has(P))&&y!==Rt;qt[y]=E?y===Rt?13:A?3:l?8:5:0,wt[y]=y===Rt?3:1.6}),Z.attributes.size.needsUpdate=!0,Z.attributes.bw.needsUpdate=!0}let Ae=600,xn=new _n,Zn=new Float32Array(Ae*3),Mr=new Float32Array(Ae*3),xa=new Float32Array(Ae),va=new Float32Array(Ae);xn.setAttribute("position",new Qe(Zn,3)),xn.setAttribute("fill",new Qe(Mr,3)),xn.setAttribute("size",new Qe(xa,1)),xn.setAttribute("bw",new Qe(va,1));let is=new Float32Array(Ae);xn.setAttribute("ang",new Qe(is,1));let Qh=new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),br=new lr(xn,Qh);br.renderOrder=24,br.frustumCulled=!1,e.add(br);let Fi=new _n,pi=new Float32Array(Ae*3),wr=new Float32Array(Ae*3),ya=new Float32Array(Ae),Sa=new Float32Array(Ae);Fi.setAttribute("position",new Qe(pi,3)),Fi.setAttribute("fill",new Qe(wr,3)),Fi.setAttribute("size",new Qe(ya,1)),Fi.setAttribute("bw",new Qe(Sa,1));let Ss=new lr(Fi,Se("#ffffff"));Ss.renderOrder=23,Ss.frustumCulled=!1,e.add(Ss);function Ma(l,d){let v=R[l],y=d*v.L,E=0,A=v.c.length-1;for(;A-E>1;){let j=E+A>>1;v.c[j]<=y?E=j:A=j}let P=v.c[A]-v.c[E]||1,F=(y-v.c[E])/P,U=v.p[E],Y=v.p[A];return[U[0]+(Y[0]-U[0])*F,U[1]+(Y[1]-U[1])*F]}let $s=l=>l*l*(3-2*l)*.35+l*.65;function Hs(l,d){let v=l.pat.t,y=l.pat.stops.length,E=v[2*y-2];if(d<v[1]-2||d>E+1)return null;if(d<=v[1])return{w:b[l.pat.stops[0]].w,at:0,next:0,moving:!1};for(let A=0;A<y-1;A++){let P=v[2*A+1],F=v[2*A+2],U=v[2*A+3];if(d<=F){let Y=F>P?(d-P)/(F-P):1;return{w:Ma(l.pat.segs[A],$s(x(Y,0,1))),at:-1,next:A+1,prev:A,moving:!0}}if(d<=U)return{w:b[l.pat.stops[A+1]].w,at:A+1,next:A+1,moving:!1}}return{w:b[l.pat.stops[y-1]].w,at:y-1,next:y-1,moving:!1}}function Ms(l){let d=t.days.indexOf(l.ymd),v=[];if(d<0)return{k:d,out:v};let y=(E,A)=>{for(let P of E){if(!q.has(P.fam))continue;let F=M(P);if(F==="X")continue;let U=(F||0)/60,Y=l.min+A-P.t0-U;if(Y<-2||Y>P.pat.t[P.pat.t.length-2]+1)continue;let j=Hs(P,Y);j&&v.push({tr:P,p:j,rel:Y,dl:U,live:F!=null})}};return y(Q[d],0),d>0&&y(Q[d-1],1440),{k:d,out:v}}function tu(l,d,v,y){let E=l.pat.stops[0],A=d.dep0,P=null,F=(Y,j)=>{for(let _ of Y||[]){let C=_.pat.stops,k=C.length;if(C[k-1]!==E||_===l)continue;let K=_.t0+_.pat.t[2*(k-1)]-j;if(K>A+5||K<A-120)continue;let gt=Zt(_.pat),Tt=ke(gt,d.w,-1,1e9);if(Tt.err>.6)continue;let pt=gt.stopD,bt=_.pat.t,it=pt.findIndex(Jt=>Jt>Tt.d);it<0&&(it=k-1);let ue=it===0?bt[1]:bt[2*it-1]+(pt[it]>pt[it-1]?(Tt.d-pt[it-1])/(pt[it]-pt[it-1]):1)*(bt[2*it]-bt[2*it-1]),ve=v-(_.t0+ue-j);ve<-5||ve>120||(!P||Math.abs(ve)<Math.abs(P.prevDl))&&(P={prevTr:_,dPrev:Tt.d,prevDl:ve,arrO:K+Math.max(0,ve)})}};if(F(Q[y],0),y>0&&F(Q[y-1],1440),!P)return{prevTr:null,preDl:0};let U=Math.max(A,P.arrO+3);return{...P,depEst:U,preDl:Math.max(0,U-A)}}function eu(l,d,v){let y=l.pat.t,E=d.length;if(!(v>=0))return v<0?d[0]:null;for(let A=0;A<E;A++)if(v<=y[2*A+1]){if(v>=y[2*A]||A===0)return d[A];let P=y[2*A-1],F=y[2*A];return d[A-1]+(d[A]-d[A-1])*(F>P?(v-P)/(F-P):1)}return d[E-1]}let rl=performance.now();function nu(){let l=[],d=Date.now()/1e3,v=performance.now(),y=Math.min(1,(v-rl)/1e3);rl=v;for(let E of H.vp.values()){let A=ht.get(E.tid),P=A?A.fam:E.fam;if(P&&X[P]&&!q.has(P))continue;let F=H.delays.get(E.tid),U=typeof F=="number"?F/60:0,Y=Math.max(0,d-E.ts);E.mvTs!==E.ts&&((!E.mvW||Math.hypot(E.w[0]-E.mvW[0],E.w[1]-E.mvW[1])>.025)&&(E.mvW=E.w,E.mvAt=E.ts),E.mvTs=E.ts),E.still=E.ts-(E.mvAt||E.ts);let j=E.w,_=-1;if(A){let k=Zt(A.pat),K=k.stopD;if(E.dObs==null||E.obsAt!==E.ts){let it=ke(k,E.w,-1,1e9);E.dObs=it.d,E.err=it.err,E.obsAt=E.ts}let gt=ie(),Tt=t.days.indexOf(gt.ymd),pt=A.day===Tt-1?1440:0,bt=A.t0+A.pat.t[1]-pt;if(E.pre=gt.min+U<bt-1&&(E.dObs>K[0]+.35||E.err>.6)&&!(E.st==="STOPPED_AT"&&E.sid===b[A.pat.stops[0]].id),E.dep0=bt,E.pre){if(E.atStop=-1,E.next=0,_=0,E.disp=null,E.prevAt!==E.ts&&(E.prevAt=E.ts,Object.assign(E,tu(A,E,gt.min,Tt))),E.prevTr){let it=Zt(E.prevTr.pat);j=Ee(it,E.dPrev)}}else if(E.err<=.6){let it=K.findIndex(Jt=>Jt>E.dObs+.08);it<0&&(it=K.length-1);let ue=K.reduce((Jt,$e,He)=>Math.abs($e-E.dObs)<Math.abs(K[Jt]-E.dObs)?He:Jt,0);E.atStop=Math.abs(K[ue]-E.dObs)<.16?ue:-1,E.next=it,_=it;let ve=E.dObs;if(E.st==="STOPPED_AT"&&E.atStop>=0)ve=K[E.atStop];else if(it>0){let Jt=(A.pat.t[2*it]-A.pat.t[2*it-1])*60,$e=Jt>0?(K[it]-K[it-1])/Jt:0,He=ie(),jt=t.days.indexOf(He.ymd),dn=A.day===jt-1?1440:0,Un=eu(A,K,He.min+dn-A.t0-U),on=E.dObs+$e*Math.min(Y,60);Un!=null&&(on=Math.min(on,Math.max(E.dObs,Un))),ve=Math.max(E.dObs,Math.min(K[it]-.03,on))}E.disp==null||Math.abs(E.disp-ve)>1.2?E.disp=ve:ve>E.disp&&(E.disp+=(ve-E.disp)*Math.min(1,y*1.5)),j=Ee(k,E.disp)}else if(E.err>2){let it=ie(),ue=t.days.indexOf(it.ymd),ve=A.day===ue-1?1440:0,Jt=Hs(A,it.min+ve-A.t0-U);Jt&&(j=Jt.w,E.est=!0,_=Jt.next),E.atStop=-1,E.next=Jt?Jt.next:-1}else E.atStop=-1,E.next=-1}let C=E.pre?"":E.st==="STOPPED_AT"&&E.atStop>=0||E.atStop>=0&&E.still>30?"st":E.still>=90?"via":"";l.push({tr:A,v:E,w:j,stop:C,p:{w:j},fam:P||"?",c:A?A.c:X[P]||"#6b7385",dl:U,live:!0,real:!0,idx:_,age:Y,cancel:F==="X"})}return l}let zn=new Map,w=!1,z=!1,rt="",nt={st:-1},tt=[],Nt=0,Lt=null,ct=null,Rt=-1,Dt=!1,we=0,Re="";function Qt(l){let d=It>0||V()&&ne==null||!!ct,v=window.__mapHidden?1e3:d?50:250;if(l-Nt<v)return!1;Nt=l,[...Vt()].join()!==re&&(he(),Te());{let _=L(),C=_?_.sn.t:"";me.cur=_,C!==me.key&&(me.key=C,Pe()),!_&&!ie().live&&!Ce.at&&rn()}let y=ie(),E=V()&&y.live,A=E?{k:t.days.indexOf(y.ymd),out:nu()}:Ms(y);tt=A.out;let P=new fe,F=0,U=0;for(let _ of tt){if(F>=Ae)break;Zn[F*3]=_.p.w[0],Zn[F*3+1]=_.p.w[1],Zn[F*3+2]=B+.02;let C=null;if(_.real&&_.v.pre&&_.v.prevTr)C=Ee(Zt(_.v.prevTr.pat),_.v.dPrev+.35);else if(_.real&&_.tr&&!_.v.pre&&_.v.err<=.6&&_.v.disp!=null&&!(_.v.st==="STOPPED_AT"&&_.v.atStop>=0))C=Ee(Zt(_.tr.pat),_.v.disp+.35);else if(!_.real&&_.p.moving){let pt=_.tr.pat.t,bt=_.p.prev,it=pt[2*bt+1],ue=pt[2*bt+2],ve=ue>it?(_.rel-it)/(ue-it):1;C=Ma(_.tr.pat.segs[bt],Math.min(1,$s(x(ve,0,1))+.04))}let k=_.real?!!_.stop:!_.p.moving;if(_.broke=bf(_),_.broke)is[F]=85;else if(k)is[F]=75;else if(C){let pt=al(_.p.w),bt=al(C),it=bt[0]-pt[0],ue=bt[1]-pt[1];is[F]=Math.hypot(it,ue)>.05?Math.atan2(it,-ue):99}else is[F]=99;P.set(_.c||_.tr.c),Mr[F*3]=P.r,Mr[F*3+1]=P.g,Mr[F*3+2]=P.b;let K=_.tr?_.tr===ct:ct&&ct.vtid===_.v.tid;xa[F]=K?22:r.dist<45?17:14,va[F]=K?3.5:2.2;let gt=_.real&&_.stop==="via"||!!_.broke,Tt=_.cancel||_.broke?[.86,.15,.15]:_.dl>10?[.86,.15,.15]:_.dl>5?[.92,.48,.05]:_.dl>=1?[.98,.8,.08]:[.09,.64,.29];(_.live&&_.dl>=5||K||gt)&&(pi[U*3]=_.p.w[0],pi[U*3+1]=_.p.w[1],pi[U*3+2]=B+.01,wr.set(K?Tt:gt?[.86,.15,.15]:[.98,.45,.09],U*3),ya[U]=xa[F]+(K?16+5*Math.sin(l/220):gt?10+3*Math.sin(l/400):8),Sa[U]=K?2:3,U++),F++}if(xn.setDrawRange(0,F),Fi.setDrawRange(0,U),["position","fill","size","bw"].forEach(_=>{xn.attributes[_].needsUpdate=!0,Fi.attributes[_].needsUpdate=!0}),xn.attributes.ang.needsUpdate=!0,Lt){let _=tt.find(C=>C.tr===Lt);if(_){let C=0,k=innerHeight,K=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,gt=m("#rc").getBoundingClientRect();innerWidth<=640&&(K&&(C=K.bottom),k=Math.min(k,gt.top));let Tt=C+(k-C)/2,pt=Tt-innerHeight/2,bt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=_.p.w[0]-Math.sin(r.yaw)*pt*bt,s.ty=_.p.w[1]+Math.cos(r.yaw)*pt*bt}else V()&&ie().live&&(Lt=null)}let Y=st(Math.floor(y.min+1e-6));Y!==Re&&(Re=Y,m("#ctime").textContent=Y),m("#ntr").textContent=String(tt.length),m("#ntrl").textContent=E?__t(15):__t(16);{let _=q.size<$.length?[...q].sort(D).join(", "):"",C=m("#ccount"),k=me.cur?`\u23EA ${tt.length}${__t(17)}${me.cur.sn.t} \xB7 ${Object.values(me.cur.sn.d).filter(K=>K>=60).length}${__t(18)}`:!y.live&&y.min<vt(new Date).min-1&&!It?`${__t(19)}${Ce.hoy&&Ce.hoy.snaps&&Ce.hoy.snaps.some(K=>K.d)?`${__t(20)}${Ce.hoy.snaps.find(K=>K.d).t}`:__t(21)}`:E&&!tt.some(K=>K.real)&&cu(q).length?`\u{1F4E1} ${__t(22)}${_?` <small>\xB7 ${p(_)}</small>`:""} <small class="nopos">\xB7 ${__t(23)}</small>`:`\u{1F686} ${tt.length} ${E?__t(24):__t(25)}${_?` <small>\xB7 ${p(_)}</small>`:""}${E&&H.okVP?(()=>{let K=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${K<3?" new":""}">\u25CF ${__t(26)}${ks(K+" s")}</small>`})():""}`;C&&C._t!==k&&(C.innerHTML=k,C._t=k)}let j=new Date;if(m("#cdate").textContent=y.live?__t(27):It?__t(28)+It:_i?__t(29):__t(30),A.k<0?m("#src").innerHTML=`${__t(31)}${Ue(t.days[0])}${__t(32)}${Ue(t.days[t.days.length-1])}${__t(33)}`:E?m("#src").textContent=`${__t(34)}${ks(Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(_=>_.ts),0)))+" s")}`:_e()&&y.live?m("#src").innerHTML=__t(35):m("#src").innerHTML=__t(36)+(H.url?__t(37):__t(38))+__t(39),y.live){let _=Math.round(y.min),C=m("#tsl");document.activeElement!==C&&(C.value=_<240?_+1440:_)}{let _=ct?String(ct.num||ct.vtid||""):"";_!==Qt._sk&&(Qt._sk=_,Ve(!0))}return Ve(),l-we>3e3&&(ct||Rt>=0||Dt||z||rt)&&(we=l,De()),Pe(),!0}let ze=-1,nn=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ge=[],Le=document.createElement("button");Le.type="button",Le.id="mbtn",Le.title=__t(40),Le.innerHTML=__t(41),Le.onclick=()=>{nn=!nn;try{localStorage.setItem("rod_mun",nn?"1":"")}catch{}Le.classList.toggle("on",nn),a(),Si()},Le.classList.toggle("on",nn),document.body.appendChild(Le);let wn=I.slice().sort((l,d)=>d.pop-l.pop);function Kt(l){if(l._a)return l._a;let d=null,v=0;for(let y of l.rings||[]){let E=y[0];if(!E)continue;let A=0,P=0,F=0;for(let U=0,Y=E.length;U<Y;U+=2){let j=E[U],_=E[U+1],C=E[(U+2)%Y],k=E[(U+3)%Y],K=j*k-C*_;A+=K,P+=(j+C)*K,F+=(_+k)*K}Math.abs(A)>v&&(v=Math.abs(A),d=[P/(3*A),F/(3*A)])}return l._a=d?[(d[0]-c)*o,(d[1]-h)*o]:[l.cx,l.cy]}let Ln=l=>l>=1e5?1:l>=2e4?2:l>=5e3?3:4,Oe=[0,7.6,6.7,6,5.4],ei=[0,17,15,13,12],mi=l=>l.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Si(){let l=s.tilt<.06&&r.tilt<.08;Le.classList.toggle("show",l);let d=0;if(nn&&l){let v=[...document.querySelectorAll(".plab, .slab")].filter(A=>A.offsetParent!==null||A.style.display==="block").map(A=>{let P=A.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(A=>A[2]>A[0]),y=r.dist,E=y>160?5e4:y>130?2e4:y>105?8e3:y>80?3e3:y>62?800:0;for(let A of wn){let P=Ln(A.pop);if(A.pop<E)break;let F=Kt(A);if(vn.set(F[0],F[1],B).project(n),Math.abs(vn.x)>1.02||Math.abs(vn.y)>1.02)continue;let U=(vn.x*.5+.5)*innerWidth,Y=(-vn.y*.5+.5)*innerHeight,j=mi(A.name),_=j.length*Oe[P]+8,C=ei[P],k=[U-_/2,Y-C/2,U+_/2,Y+C/2];if(v.some(gt=>k[0]<gt[2]&&gt[0]<k[2]&&k[1]<gt[3]&&gt[1]<k[3]))continue;v.push(k);let K=Ge[d]||(Ge[d]=Object.assign(document.createElement("div"),{className:"mlab"}));K.isConnected||document.body.appendChild(K),K._n!==j&&(K.textContent=j,K._n=j),K._t!==P&&(K.className="mlab t"+P,K._t=P),K.style.transform=`translate(${Math.round(U)}px,${Math.round(Y)}px) translate(-50%,-50%)`,K.style.display="block",d++}}for(;d<Ge.length;d++)Ge[d].style.display="none"}let Ce={at:0,hoy:null,ayer:null,err:""},We="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function rn(){Date.now()-Ce.at<5*6e4||(Ce.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(l=>fetch(We+l+".json",{cache:"no-store"}).then(d=>d.ok?d.json():null).catch(()=>null))).then(([l,d,v])=>{Ce.hoy=l,Ce.ayer=d,Ce.hist=v,Ce.tr=null,Ce.err=l?"":__t(42),z&&(u._h="",De()),Ve(!0)}))}function Oi(l){let d={};for(let y of l&&l.snaps||[])for(let E of y.r||[]){let A=/^\d+[A-Z](\d+)/.exec(E);A&&(d[A[1]]=d[A[1]]||[]).push(Math.max(0,y.d&&y.d[E]||0)/60)}let v={};for(let y in d){let E=d[y].sort((A,P)=>A-P);v[y]=Math.round(E[E.length>>1])}return v}function Xe(l){if(!Ce.tr){let v=new Map;for(let y of Ce.hist&&Ce.hist.days||[])v.set(y.day,y.tr);for(let y of[Ce.ayer,Ce.hoy])if(y&&y.day&&!v.has(y.day)){let E=Oi(y);Object.keys(E).length&&v.set(y.day,E)}Ce.tr=v}let d=[...Ce.tr.values()].map(v=>v[String(l)]).filter(v=>v!=null);return d.length?{n:d.length,late:d.filter(v=>v>=5).length,avg:d.reduce((v,y)=>v+y,0)/d.length}:null}let Dn=l=>l>=90?"g":l>=80?"y":l>=65?"w":"b",Vn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},ba=l=>l>10?Vn.b:l>5?Vn.w:l>=1?Vn.y:Vn.g,Gs=l=>(l>=.05?"+":"")+(Math.round(l*10)/10).toString().replace(".",",")+" min";function wa(l,d,v){return`<div class="sbars">${l.map(y=>`<div class="sbar" title="${p(y.tip||"")}"><span class="sl">${y.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(y.w*100))}%;background:${y.c}"></i></span><b class="sv" style="color:${y.c===Vn.y?"var(--svy,#a16207)":y.c===Vn.w?"var(--svw,#c2410c)":y.c}">${y.val}</b></div>`).join("")}</div>`}function Dg(l){if(l=(l||[]).filter(pt=>pt.n>=10),!l||l.length<2){let pt=l&&l[0];return pt?`${__t(43)}${pt.t}: ${Math.round(pt.ok/pt.n*100)}${__t(44)}${pt.n}${__t(45)}`:__t(46)}let d=pt=>{let[bt,it]=pt.t.split(":").map(Number);return bt*60+it},v=d(l[0]),y=Math.max(v+60,d(l[l.length-1])),E=300,A=112,P=24,F=pt=>P+(pt-v)*(E-P-8)/(y-v),U=pt=>8+(100-pt)/100*(A-26),Y=pt=>pt.n?pt.ok/pt.n*100:100,j=l.map(pt=>[F(d(pt)),U(Y(pt)),pt]),_=pt=>pt[0].toFixed(1)+","+pt[1].toFixed(1),C=[],k=[];j.forEach((pt,bt)=>{bt&&d(pt[2])-d(j[bt-1][2])>45&&(C.push(k),k=[]),k.push(pt)}),C.push(k);let K=j[j.length-1],gt=[];for(let pt=Math.ceil(v/180)*3;pt*60<y;pt+=3)pt*60>v+20&&gt.push(pt);let Tt=Math.round(l.reduce((pt,bt)=>pt+bt.ok,0)/Math.max(1,l.reduce((pt,bt)=>pt+bt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${E} ${A}${__t(47)}${[100,75,50,25].map(pt=>`<line x1="${P}" x2="${E-4}" y1="${U(pt)}" y2="${U(pt)}" class="gl"/><text x="2" y="${U(pt)+3}" class="ax">${pt}%</text>`).join("")}
      <line x1="${P}" x2="${E-4}" y1="${U(Tt)}" y2="${U(Tt)}" class="avg"/>
      ${C.filter(pt=>pt.length).map(pt=>`<polygon points="${_([pt[0][0],U(0)])} ${pt.map(_).join(" ")} ${_([pt[pt.length-1][0],U(0)])}" class="ar"/><polyline points="${pt.map(_).join(" ")}" class="ln"/>`).join("")}
      ${j.map(([pt,bt,it])=>`<circle cx="${pt.toFixed(1)}" cy="${bt.toFixed(1)}" r="6" class="hit"><title>${it.t} \xB7 ${Math.round(Y(it))}${__t(48)}${it.n}${__t(49)}${it.d5}${__t(50)}${Gs(it.avg)}${it.nd?` \xB7 ${it.nd}${__t(51)}`:""}</title></circle>`).join("")}
      <circle cx="${K[0].toFixed(1)}" cy="${K[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(K[0],E-30).toFixed(1)}" y="${(K[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(Y(K[2]))}%</text>
      ${gt.map(pt=>`<text x="${F(pt*60).toFixed(1)}" y="${A-4}" class="ax" text-anchor="middle">${String(pt).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${A-4}" class="ax">${l[0].t}</text></svg><small class="snote">${__t(52)} (${Tt}%)</small>`}function Ng(){rn();let l=ie(),d=tt.filter(F=>F.real&&V()&&l.live),v=d.filter(F=>H.delays.has(F.v.tid)),y=v.length,E=d.length-y,A=`${__t(53)}`;if(y){let F=v.filter(bt=>bt.dl<3).length,U=v.filter(bt=>bt.dl>=5).length,Y=v.filter(bt=>bt.stop==="via").length,j=Math.round(F/y*100);A+=`${__t(54)}${y}${__t(55)}${E?` \xB7 ${E}${__t(60)}`:""}</small><div class="kpis">
        <div class="kpi ${Dn(j)}"><b>${j}${__t(56)}${Dn(100-U/y*100*2)}" title="${Math.round(U/y*100)}${__t(57)}${U}${__t(58)}${Y===0?"g":Y<=2?"w":"b"}"><b>${Y}${__t(59)}`;let _=new Map;v.forEach(bt=>{let it=bt.fam,ue=_.get(it)||{n:0,ok:0,sum:0};ue.n++,ue.ok+=bt.dl<3,ue.sum+=Math.max(0,bt.dl),_.set(it,ue)});let C=[..._].filter(([bt])=>X[bt]).sort((bt,it)=>bt[1].ok/bt[1].n-it[1].ok/it[1].n||it[1].sum/it[1].n-bt[1].sum/bt[1].n),k=C.filter(([,bt])=>bt.ok<bt.n),K=C.filter(([,bt])=>bt.ok===bt.n);A+=`${__t(61)}`+(k.length?"":__t(62))+wa(k.map(([bt,it])=>({lab:Nn(bt),w:it.ok/it.n,c:Vn[Dn(it.ok/it.n*100)],val:`${Math.round(it.ok/it.n*100)}% <small>${Gs(it.sum/it.n)}</small>`,tip:`${bt}: ${it.ok}${__t(63)}${it.n}${__t(64)}${Gs(it.sum/it.n)}`})))+(K.length?`${__t(65)}${K.map(([bt])=>Nn(bt)).join(" ")}</p>`:"");let gt=new Map;v.forEach(bt=>{if(!bt.tr||bt.v.next==null||bt.v.next<0||bt.v.pre)return;let it=bt.tr.pat.stops[bt.v.next],ue=gt.get(it)||{n:0,sum:0};ue.n++,ue.sum+=Math.max(0,bt.dl),gt.set(it,ue)});let Tt=[...gt].filter(([,bt])=>bt.sum/bt.n>=1).sort((bt,it)=>it[1].sum/it[1].n-bt[1].sum/bt[1].n).slice(0,8),pt=Tt.length?Tt[0][1].sum/Tt[0][1].n:1;A+=`${__t(66)}`+(Tt.length?wa(Tt.map(([bt,it])=>({lab:`<span class="sn" data-gs="${bt}">${p(b[bt].n)}</span>`,w:it.sum/it.n/pt,c:ba(it.sum/it.n),val:`${Gs(it.sum/it.n)} <small>${it.n} ${it.n===1?"tren":__t(67)}</small>`,tip:`${b[bt].n}: ${it.n}${__t(68)}${Gs(it.sum/it.n)}${__t(69)}`}))):__t(70))}else A+=`${__t(71)}`;let P=Ce.hoy;A+=`<button type="button" class="hmore" data-cols>${an.on?__t(72):__t(73)}</button>`;{Ua("");let F=[...rs.m].filter(([U,Y])=>X[U]&&Y[0]>=3).map(([U,Y])=>[U,Y[1]/Y[0]]).sort((U,Y)=>U[1]-Y[1]);F.length&&!V()?A+=`<h4>${__t(74)}</h4><small class="snote">${__t(75)}</small>`:F.length&&(A+=`${__t(76)}`+wa(F.slice(0,8).map(([U,Y])=>({lab:Nn(U),w:Y,c:Vn[Dn(Y*100)],val:`${Math.round(Y*100)}%`,tip:`${U}: ${Math.round(Y*100)}${__t(77)}`}))))}{let F=(k,K)=>{let gt=(k&&k.snaps||[]).filter(bt=>bt.n&&(!K||bt.t<=K)),Tt=gt.reduce((bt,it)=>bt+it.n,0),pt=gt.reduce((bt,it)=>bt+it.ok,0);return Tt?pt/Tt*100:null},U=(Ce.hoy&&Ce.hoy.snaps||[]).filter(k=>k.n).map(k=>k.t).pop(),Y=F(Ce.hoy),j=F(Ce.ayer,U),_=Y!=null?Math.round(Y):null,C=j!=null?Math.round(j):null;Y!=null&&(A+=`${__t(78)}${Dn(Y)}">${Math.round(Y)}${__t(79)}${j!=null?`<span>${U?__t(80):__t(81)} <b class="${Dn(j)}">${C} %</b></span><span>${_>C?__t(82):_<C?__t(83):__t(84)}</span>`:""}</div>`)}if(A+=`${__t(85)}`,P&&P.snaps){A+=Dg(P.snaps);let F=Object.entries(P.st||{}).map(([j,_])=>[Wt.get(j),_]).filter(([j,_])=>j!=null&&_.n>=3).map(([j,_])=>[j,_.sum/_.n/60,_]).filter(j=>j[1]>=1).sort((j,_)=>_[1]-j[1]).slice(0,8);if(F.length){let j=F[0][1];A+=`${__t(86)}`+wa(F.map(([_,C,k])=>({lab:`<span class="sn" data-gs="${_}">${p(b[_].n)}</span>`,w:C/j,c:ba(C),val:`${Gs(C)}${__t(87)}${Math.round(k.max/60)}</small>`,tip:`${b[_].n}: ${k.n}${__t(88)}${k.d5}${__t(89)}${Math.round(k.max/60)} min`})))}let U=Object.entries(P.lines||{}).filter(([j,_])=>X[j]&&_.n>=3).sort((j,_)=>j[1].ok/j[1].n-_[1].ok/_[1].n);U.length&&(A+=`${__t(90)}`+wa(U.map(([j,_])=>({lab:Nn(j),w:_.ok/_.n,c:Vn[Dn(_.ok/_.n*100)],val:`${Math.round(_.ok/_.n*100)}% <small>${Gs(_.sum/_.n/60)}</small>`,tip:`${j}${__t(91)}${Math.round(_.ok/_.n*100)}${__t(92)}${Math.round(_.max/60)} min`}))));let Y=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;A+=`<small class="snote">${Y>40?`${__t(94)}${ks(Math.round(Y)+" min")}${__t(95)}`:""}${__t(93)}${p((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(96):__t(97)}</small>`}else A+=`<p class="snote">${Ce.at?__t(98):__t(99)}</p>`;return A+"</div>"}function Ug(l){let d=ie(),v=tt.filter(C=>(C.fam||C.tr&&C.tr.fam)===l),y=v.filter(C=>C.real),E=v.length,A=v.filter(C=>C.dl>=5).length,P=v.filter(C=>C.dl<3).length,F=v.filter(C=>C.stop==="via"||C.broke).length,U=H.alerts.filter(C=>C.fams.has(l)),Y=C=>{let k=C.tr;if(!k)return"";let K=C.v;if(C.real&&K){let Tt=K.next>=0?b[k.pat.stops[K.next]].n:"";return K.atStop>=0?`${__t(100)}${b[k.pat.stops[K.atStop]].n}`:Tt?`${__t(101)}${Tt}`:""}let gt=C.p;return gt&&gt.next!=null&&gt.next>=0?`${__t(101)}${b[k.pat.stops[gt.next]].n}`:""},j=v.slice().sort((C,k)=>k.dl-C.dl).slice(0,40).map(C=>{let k=C.tr;return`<li class="go${Ca({num:k?k.num:C.v.num,tid:k?k.tid:C.v.tid})?" sel":""}" data-gt="${p(k?k.num:C.v.num)}|${p(C.real?C.v.tid:k?k.tid:"")}"><b>${p(k?k.num:C.v.num)}</b><span>${k?Bi(b[k.pat.stops[k.pat.stops.length-1]].n,l):""} <small>${p(Y(C))}</small></span>${C.dl>=1?`<em class="dl ${ki(C.dl)}">+${Math.round(C.dl)}</em>`:__t(102)}</li>`}).join(""),_=Ua(l);return`<div class="tc sts" style="--c:${X[l]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Nn(l)}${__t(103)}${d.live?`${__t(109)}${E}${__t(110)}${y.length<E?` (${y.length}${__t(111)}`:""}`:`${__t(112)}${st(d.min)}`}</small>
      <div class="kpis"><div class="kpi ${E?Dn(P/E*100):""}"><b>${E?Math.round(P/E*100)+"%":"\u2014"}${__t(104)}${A?A/Math.max(1,E)>.2?"b":"w":"g"}"><b>${A}${__t(105)}${F?"b":"g"}"><b>${F}${__t(106)}${U.length?Fg(U):__t(113)}${_<.7?`${__t(114)}${Math.round(_*100)}${__t(115)}`:""}${__t(107)}${j||__t(116)}${__t(108)}`}let Fg=l=>`<div class="al">${l.slice(0,3).map(d=>`<p>\u26A0\uFE0F ${Pa(d)} ${p(d.txt)} <small>${La(d)}</small></p>`).join("")}</div>`,an={on:!1,mesh:null};function vf(){let l=Ce.hoy,d=[];if(l&&l.st)for(let[v,y]of Object.entries(l.st)){let E=Wt.get(v);E!=null&&y.n>=2&&d.push([E,y.sum/y.n/60,y.n])}if(!d.length){let v=new Map;tt.forEach(y=>{if(!y.real||!y.tr||y.v.next==null||y.v.next<0||y.v.pre||!H.delays.has(y.v.tid))return;let E=y.tr.pat.stops[y.v.next],A=v.get(E)||[0,0];A[0]+=Math.max(0,y.dl),A[1]++,v.set(E,A)}),v.forEach((y,E)=>d.push([E,y[0]/y[1],y[1]]))}return d}let yf=()=>Math.min(1,Math.max(.22,r.dist/110));function Og(){if(!an.mesh||!an.d)return;let l=yf();if(Math.abs(l-an.r)<.04)return;an.r=l;let d=new Be;an.d.forEach(([v,y],E)=>{d.makeScale(l,l,.3+Math.min(y,40)*.3),d.setPosition(b[v].w[0],b[v].w[1],B),an.mesh.setMatrixAt(E,d)}),an.mesh.instanceMatrix.needsUpdate=!0,a()}function Bg(){if(an.mesh&&(e.remove(an.mesh),an.mesh.geometry.dispose(),an.mesh.material.dispose(),an.mesh=null),!an.on){a();return}let l=vf();if(!l.length){mn(__t(117)),an.on=!1;return}let d=new vo(.32,.32,1,16);d.rotateX(Math.PI/2),d.translate(0,0,.5);let v=new ar({fog:!1}),y=new mo(d,v,l.length),E=new Be,A=new fe;an.d=l,an.r=yf(),l.forEach(([P,F],U)=>{let Y=.3+Math.min(F,40)*.3;E.makeScale(an.r,an.r,Y),E.setPosition(b[P].w[0],b[P].w[1],B),y.setMatrixAt(U,E),A.set(F>10?"#dc2626":F>5?"#ea7a0c":F>=1?"#eab308":"#16a34a"),y.setColorAt(U,A)}),y.renderOrder=25,y.frustumCulled=!1,e.add(y),an.mesh=y,s.tilt<.5&&(s.tilt=.85),a()}let Er=document.createElement("button");Er.type="button",Er.id="sbtn",Er.title=__t(118),Er.innerHTML=__t(119),Er.onclick=()=>{z=!z,z&&(w=Dt=!1,Ce.at=0),u._h="",De(),a()},document.body.appendChild(Er);function kg(){r.dist<45!=ze<45&&(ze=r.dist,Te()),Og(),zg(),Si()}let ss=[],vn=new W;function zg(){let l=0;if(an.on){let v=vf().sort((E,A)=>A[1]-E[1]),y=[];for(let[E,A]of v){if(l>=30)break;if(vn.set(b[E].w[0],b[E].w[1],B).project(n),vn.z>1||Math.abs(vn.x)>1||Math.abs(vn.y)>1)continue;let P=(vn.x*.5+.5)*innerWidth,F=(-vn.y*.5+.5)*innerHeight;if(y.some(([Y,j])=>Math.abs(Y-P)<90&&Math.abs(j-F)<18))continue;y.push([P,F]);let U=ss[l]||(ss[l]=Object.assign(document.createElement("div"),{className:"slab"}));U.isConnected||document.body.appendChild(U),U.textContent=b[E].n+" +"+Math.round(A)+"\u2032",U.dataset.i=E,U.style.display="block",U.style.transform=`translate(${Math.round(P+8)}px,${Math.round(F-8)}px)`,l++}for(;l<ss.length;l++)ss[l].style.display="none";return}if(r.dist<30){let v=[];for(let y=0;y<Ut;y++)qt[y]<4||(vn.set(b[y].w[0],b[y].w[1],B).project(n),!(vn.z>1||Math.abs(vn.x)>1.05||Math.abs(vn.y)>1.05)&&v.push([y,(vn.x*.5+.5)*innerWidth,(-vn.y*.5+.5)*innerHeight]));if(v.length<=70)for(let[y,E,A]of v){let P=ss[l]||(ss[l]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=b[y].n,P.dataset.i=y,P.style.display="block",P.style.transform=`translate(${Math.round(E+8)}px,${Math.round(A-7)}px)`,l++}}for(;l<ss.length;l++)ss[l].style.display="none"}function al(l){return vn.set(l[0],l[1],B).project(n),[(vn.x*.5+.5)*innerWidth,(-vn.y*.5+.5)*innerHeight,vn.z]}function Sf(l,d,v,y){let E=null,A=v*v;for(let P of tt){let[F,U,Y]=al(P.p.w);if(Y>1)continue;let j=(F-l)**2+(U-d)**2;j<A&&(A=j,E={a:P})}if(E)return E;A=y*y;for(let P=0;P<Ut;P++){if(!qt[P])continue;let[F,U,Y]=al(b[P].w);if(Y>1)continue;let j=(F-l)**2+(U-d)**2;j<A&&(A=j,E={s:P})}return E}let Ws=!1;window.__rodHide=()=>{Ws=!0},document.addEventListener("click",l=>{Ws&&!l.target.closest("#mcs, canvas")&&(Ws=!1)},!0),window.__rodTap=(l,d)=>{let v=null,y=1e9;for(let A of ss){if(A.style.display==="none")continue;let P=A.getBoundingClientRect();if(l>=P.left-4&&l<=P.right+4&&d>=P.top-4&&d<=P.bottom+4){let F=Math.abs(d-(P.top+P.bottom)/2)*4+(l-P.left);F<y&&(y=F,v=A)}}if(v)return window.__rodPickStation(+v.dataset.i),!0;let E=Sf(l,d,24,18);return E&&(E.a||E.s!=null)&&(Ws=!1),E&&(E.a||E.s!=null)&&(nt.st=-1),E&&E.a?(w=!1,Dt=!1,z=!1,ct=E.a.tr||{vtid:E.a.v.tid},Rt=-1,Lt=null,Te(),De(),Nt=0,a(),!0):E&&E.s!=null?(w=!1,Dt=!1,z=!1,Rt=E.s,ct=null,Lt=null,Te(),De(),a(),!0):!1},window.__rodHover=(l,d)=>{let v=Sf(l,d,14,10);if(v&&v.a){let y=v.a,E=y.tr?b[y.tr.pat.stops[y.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${y.c}">\u25A0</span> ${p(y.fam||y.tr&&y.tr.fam||"?")}${__t(120)}${p(y.tr?y.tr.num:y.v.num)}</b><small>${E?__t(101)+p(E):""}${y.real?(y.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(y.dl)} min</b>`:__t(121))+__t(122):__t(123)}</small>`}return v&&v.s!=null?`<b>${p(b[v.s].n)}</b><small>${[...b[v.s].fams].sort(D).join(" \xB7 ")}</small>`:null},window.__rodPickStation=l=>{nt.st=-1,Ws=!1,w=Dt=z=!1,ct=null,Lt=null,Rt=l,Te(),u._h="",De(),a()};{let l=m("#rc"),d=()=>{let v=l.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,v-64-10)+"px")};try{new ResizeObserver(d).observe(l)}catch{}addEventListener("resize",d),setTimeout(d,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let l=!1,d=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{d&&!l&&(l=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(v=>{v.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||v.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{rn()}catch{}},2500),setInterval(()=>{try{Ce.at=0,rn()}catch{}},15*6e4);let ni={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Ea=matchMedia("(prefers-color-scheme: dark)");function ol(){let l=ni.mode==="dark"||ni.mode==="auto"&&Ea.matches;document.documentElement.classList.toggle("dark",l);for(let v=0;v<Ut;v++)$t.set(l?[.06,.08,.11]:[1,1,1],v*3);Z.attributes.fill.needsUpdate=!0,ae.uniforms.border.value.set(l?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(l),Xs.textContent=ni.mode==="auto"?l?"\u{1F319}":"\u2600\uFE0F":ni.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",Xs.title=__t(124)+{auto:__t(125),dark:__t(126),light:"desactivado"}[ni.mode];let d=document.querySelector("meta[name=theme-color]");d&&(d.content=l?"#0d1119":"#eef1f5"),a()}let Xs=document.createElement("button");Xs.type="button",Xs.id="tbtn",Xs.onclick=()=>{ni.mode=ni.mode==="auto"?Ea.matches?"light":"dark":ni.mode==="dark"?"light":"dark",ni.mode==="dark"===Ea.matches&&(ni.mode="auto");try{localStorage.setItem("rod_theme",ni.mode)}catch{}ol(),mn(Xs.title)},document.body.appendChild(Xs);{let l=document.createElement("a");l.id="wabtn",l.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",l.target="_blank",l.rel="noopener",l.title=__t(127),l.innerHTML=__t(128),document.body.appendChild(l)}Ea.addEventListener&&Ea.addEventListener("change",ol),ol(),window.__rodTick=Qt,window.__rodFrame=kg,window.__rodResize=()=>{Pt.resolution.set(innerWidth,innerHeight),Ft.resolution.set(innerWidth,innerHeight)},window.__rodResize();let gi={st:-1,f:new Set},Mf=l=>{let d=[...b[l].fams].sort(D);return`<div class="sfc">${d.length>1?`<button type="button" data-sf="" class="${gi.f.size?"":"on"}${__t(129)}`:""}${d.map(v=>`<button type="button" data-sf="${p(v)}" class="ln ${gi.f.size&&!gi.f.has(v)?"off":""}${q.has(v)?"":" hid"}" style="--c:${X[v]}">${p(v)}</button>`).join("")}</div>${d.some(v=>!q.has(v))?__t(130):""}`},Vg=l=>{let d=(l||"#6b7385").replace("#",""),v=parseInt(d.slice(0,2),16),y=parseInt(d.slice(2,4),16),E=parseInt(d.slice(4,6),16);return(.299*v+.587*y+.114*E)/255>.62?"#1d2330":"#fff"},Bi=(l,d)=>{let v=X[d]||"#6b7385";return`<span class="dst" style="background:${v};color:${Vg(v)}" title="${p(d||"")}">${p(l)}</span>`},ll=l=>{let d=b[l]&&b[l].id;return hn.st.includes(d)?"\u{1F3E0} ":Ze.st.includes(d)?"\u{1F4BC} ":""},ki=l=>l>10?"d-hi":l>5?"d-md":"d-lo",$g=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Ta={ref:null,m:new Map};function iu(l){if(Ta.ref!==H.alerts){Ta.ref=H.alerts,Ta.m=new Map;for(let d of H.alerts){if(d.src!=="Rodalies")continue;let v=d.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let y of(d.es||d.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Ta.m.set(y[1],{why:v?v[1].trim().replace(/\s+/g," "):"",txt:d.txt,when:d.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(d.es||d.txt)})}}return Ta.m.get(String(l))||null}let Aa={ref:null,m:new Map};function bf(l){let d=String(l.tr?l.tr.num:l.v&&l.v.num||"");if(!d)return null;if(Aa.ref!==H.alerts){Aa.ref=H.alerts,Aa.m=new Map;for(let y of H.alerts)if(y.src==="Rodalies"&&$g.test(y.es||y.txt))for(let E of(y.es||y.txt).matchAll(/\b(\d{4,6})\b/g))Aa.m.set(E[1],y)}let v=Aa.m.get(d);return v?{why:"aviso",txt:v.txt}:l.real&&l.stop==="via"&&l.v.still>=300?{why:"via",min:Math.round(l.v.still/60)}:null}let Ca=l=>{try{let d=ct;return d?d.num!=null&&String(d.num)===String(l.num)||l.tid&&(d.tid===l.tid||d.vtid===l.tid):!1}catch{return!1}},wf=(l,d)=>{let v=T(l,d.min-1,d.min+240).sort((y,E)=>y.est-E.est).slice(0,6);return v.length?`${__t(131)}${v.map(y=>`<li><b>${st(y.est)}</b>${Nn(y.fam)}<span>${Bi(y.dest,y.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Mi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Hg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Mi))}catch{}},Ef=l=>!!l&&Mi.some(d=>d.num===String(l.num)),Ke=(()=>{try{let l=JSON.parse(localStorage.getItem("rod_alarm")||"null");return l&&Date.now()-l.at<4*36e5?l:null}catch{return null}})(),Ra=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Ke))}catch{}},cl=(l,d)=>!!(Ke&&l&&Ke.num===String(l.num)&&Ke.sid===b[l.pat.stops[d]].id);function su(l,d){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}mn(l+" \xB7 "+d),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(v=>v?v.showNotification(l,{body:d,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(l,{body:d})).catch(()=>{})}function Gg(){if(!Ke||Ke.done)return;let l=ie();if(!l.live)return;let d=t.days.indexOf(l.ymd),v=(Q[d]||[]).find(U=>String(U.num)===Ke.num)||(Q[d-1]||[]).find(U=>String(U.num)===Ke.num);if(!v)return;let y=v.pat.stops.findIndex(U=>b[U].id===Ke.sid);if(y<0)return;let E=M(v),A=typeof E=="number"?Math.max(0,E/60):0,P=v.day===d-1?1440:0,F=v.t0+v.pat.t[2*y]+A-P;if(F-l.min<-3){Ke.done=!0,Ra();return}window.__schedAt&&(Ke.sch==null||Math.abs(Ke.sch-F)>=.5)&&(Ke.sch=F,Ra(),window.__schedAt(7701,`${__t(132)}${b[v.pat.stops[y]].n}`,__t(133)+` (${st(F)})`,Date.now()+(F-2-l.min)*6e4)),F-l.min<=2&&(Ke.done=!0,Ra(),window.__schedOff&&window.__schedOff(7701),su(`${__t(132)}${b[v.pat.stops[y]].n}`,`${__t(134)}${Math.max(0,Math.round(F-l.min))}${__t(135)}${st(F)}${__t(136)}`))}function ru(l,d){let v=+l.t.slice(0,2)*60+ +l.t.slice(3,5),y=Q[d]||[],E=(F,U)=>F.t0+F.pat.t[2*U+1],A=null,P=11;for(let F of y){let U=F.pat.stops.findIndex(j=>b[j].id===l.sid);if(U<0||U===F.pat.stops.length-1)continue;let Y=Math.abs(E(F,U)-v)+(String(F.num)===l.num?-5:0)+(F.fam===l.fam?0:20)+(l.dest&&b[F.pat.stops[F.pat.stops.length-1]].id!==l.dest?3:0);Y<P&&(P=Y,A=F)}return A}let hl=new Set;function Wg(){if(!Mi.length)return;let l=ie();if(!l.live)return;let d=t.days.indexOf(l.ymd);for(let v of Mi){let y=ru(v,d);if(!y)continue;let E=y.pat.stops.findIndex(j=>b[j].id===v.sid);if(E<0)continue;let A=y.t0+y.pat.t[2*E+1],P=M(y),F=typeof P=="number"?P/60:0,U=A-l.min;if(U<-2||U>60)continue;let Y=l.ymd+v.num+(P==="X"?"X":F>=10?10:F>=5?5:0);hl.has(Y)||(P==="X"||F>=5?(hl.add(Y),su(`${__t(137)}${st(A)} ${P==="X"?__t(138):`${__t(139)}${Math.round(F)} min`}`,`${y.fam} ${y.num}${__t(140)}${b[y.pat.stops[E]].n}${P==="X"?"":`${__t(141)}${st(A+F)}`}`)):U<=20&&!hl.has(l.ymd+v.num+"ok")&&H.vp.has(y.tid)&&(hl.add(l.ymd+v.num+"ok"),mn(`${__t(137)}${st(A)}${__t(142)}`)))}}setInterval(()=>{try{Gg(),Wg()}catch{}},15e3);let Nn=l=>`<span class="ln" style="--c:${X[l]}">${p(l)}</span>`;{let l=v=>{let y=/^#?([0-9a-f]{6})$/i.exec(v||"");return y?[0,2,4].map(E=>{let A=parseInt(y[1].slice(E,E+2),16)/255;return A<=.03928?A/12.92:Math.pow((A+.055)/1.055,2.4)}).reduce((E,A,P)=>E+A*[.2126,.7152,.0722][P],0):0},d=[...new Set(Object.values(X))].filter(v=>l(v)>.3).map(v=>`.ln[style*="--c:${v}"],[data-f][style*="--c:${v}"].on,[data-f][style*="--c:${v}"]:not(.off){color:#14203a!important}`).join("");if(d){let v=document.createElement("style");v.textContent=d,document.head.appendChild(v)}}function Tf(l,d){return d?l==="X"?__t(144):l>=60?`<span class="st late ${ki(l/60)}${__t(145)}${Math.round(l/60)} min</span>`:__t(146):__t(143)}function au(){if(!u.classList.contains("peek")||window.__mapHidden||!u.getClientRects().length)return;let l=u.querySelector(".tc");if(!l)return;let d=l.querySelector(".st")||l.querySelector("p"),v=u.getBoundingClientRect().top-u.scrollTop,y=d?d.getBoundingClientRect().bottom-v+3:150;if(d){let E=d.nextElementSibling||d.parentElement!==l&&d.parentElement.nextElementSibling;E&&(y=Math.min(y,E.getBoundingClientRect().top-v-1))}u.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,y)))+"px")}function De(){try{Xg()}finally{window.__rodTabSync&&window.__rodTabSync();try{au()}catch{}}}function Xg(){if(!ct&&Rt<0&&!Dt&&!w&&!z&&!rt){Ws=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),fu();return}let l=ie(),d="",v=V()&&l.live,y=(_,C)=>H.alerts.filter(k=>[...k.fams].some(K=>_.has(K))||C!=null&&k.stops.has(C)),E=_=>_.length?`<div class="al">${_.slice(0,4).map(C=>`<p>\u26A0\uFE0F ${Pa(C)} ${[...C.fams].sort(D).slice(0,6).map(Nn).join(" ")} ${p(C.txt)} <small>${La(C)}</small></p>`).join("")}${_.length>4?`<small>y ${_.length-4}${__t(147)}`:""}</div>`:"",A=ct&&v?tt.find(_=>_.real&&(ct.vtid?_.v.tid===ct.vtid:_.tr===ct)):null;if(rt&&!z&&!w&&!Dt&&!ct&&Rt<0)d=Ug(rt);else if(z)d=Ng();else if(w)d=`${__t(148)}${p(m("#ver").firstChild.textContent)}</small><ul class="chg">${m("#chg").innerHTML||__t(150)}${__t(149)}`;else if(Dt){let _=H.alerts.filter(C=>[...C.fams].some(k=>q.has(k))||!C.fams.size);d=`${__t(151)}${_.length}${__t(152)}${_.map(C=>`<div class="al"><p>${Pa(C)} ${[...C.fams].sort(D).map(Nn).join(" ")} <small>${La(C)}</small></p><p>${p(C.txt)}</p></div>`).join("")||__t(154)}${__t(153)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(155):`${__t(156)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(A){let _=A.v,C=A.tr,k=jt=>p(b[C.pat.stops[jt]].n),K=C?C.pat.stops.length:0,gt=Wt.get(_.sid),Tt=gt!=null?p(b[gt].n):p(_.sid),pt=C&&_.atStop>=0?k(_.atStop):"",bt=C&&_.next>=0?k(_.next):Tt,it=C&&_.next>0?k(_.next-1):"",ue=A.broke||bf(A),ve=ue?`<b class="stopv">\u26A0\uFE0F ${ue.why==="aviso"?__t(157):`${__t(158)}${ue.min} min`}</b>${C&&it?`${__t(159)}${it}${__t(160)}${bt}</b>`:""}`:A.stop==="via"&&C?`${__t(161)}${it?`${__t(163)}${it}${__t(160)}${bt}</b>`:`${__t(164)}${bt}</b>`}${__t(162)}${Math.max(1,Math.round(_.still/60))} min`:_.pre&&C?_.prevTr?`${__t(165)}${p(_.prevTr.num)}${__t(166)}${k(0)}</b>${_.prevDl>=1?`${__t(169)}${Math.round(_.prevDl)} min</b>`:""}${__t(167)}${st(_.arrO)}${__t(168)}${st(_.depEst)}</b>${_.preDl>=1?`${__t(170)}${st(_.dep0)})`:""}`:`${__t(171)}${k(0)}${__t(172)}${st(_.dep0+A.dl)}</b>`:_.st==="STOPPED_AT"&&pt?`${__t(173)}${pt}</b>`:pt&&_.next>=0&&_.atStop!==_.next?`${__t(174)}${pt}${__t(166)}${bt}</b>`:it?`${__t(175)}${it}${__t(160)}${bt}</b>`:`${__t(176)}${bt}</b>`,Jt=H.tu.get(_.tid),$e=Jt&&Jt.next&&C&&_.next>=0&&Jt.next.sid===b[C.pat.stops[_.next]].id&&Jt.next.t?new Date(Jt.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",He=[];if(C){let jt=A.idx>=0?A.idx:0,dn=_.pre?Math.max(A.dl,_.preDl||0):A.dl,Un=on=>C.t0+C.pat.t[on]+dn;for(let on=jt;on<K;on++)He.push(`<li class="${ll(C.pat.stops[on])?"mine":""}${cl(C,on)?" alm":""}"><b>${st(Un(on===0?1:2*on))}</b><span title="${k(on)}">${ll(C.pat.stops[on])}${k(on)}</span>${dn>=1?`<em class="dl ${ki(dn)}">${_.pre?"\u2248":""}+${Math.round(dn)}</em>`:""}${on>0?`<button type="button" class="abtn" data-alarm="${on}" title="${__t(177)}">${cl(C,on)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}d=`<div class="tc" style="--c:${A.c}"><button class="x" data-cx>\xD7</button><div>${Nn(A.fam)}${__t(178)}${p(C?C.num:_.num)}${__t(179)}${C?`<h3 class="rt"><span class="o" title="${k(0)}">${k(0)}</span><span class="ar">\u2192</span>${Bi(b[C.pat.stops[K-1]].n,C.fam)}</h3>`:""}
        <p>${ve}${$e?`${__t(180)}${$e}`:""}${_.plat&&_.st==="STOPPED_AT"&&pt?`${__t(181)}${p(_.plat)}</b>`:""}</p><p>${_.pre&&_.prevTr?_.preDl>=1?`${__t(182)}${Math.round(_.preDl)}${__t(183)}`:__t(184):Tf(H.delays.get(_.tid),H.delays.has(_.tid))}${(()=>{let jt=C&&Xe(C.num);return jt&&jt.n>=2?`${__t(185)}${jt.n}${__t(186)}${jt.late?`${__t(187)} <b>${jt.late} ${__t(188)} ${jt.n} ${__t(189)}</b> ${__t(190)}`:__t(191)} \xB7 ${__t(192)} ${jt.avg<.5?"0":"+"+Math.round(jt.avg)} min</span>`:""})()}${(()=>{let jt=C&&iu(C.num);return jt?`<span class="why" title="${p(jt.txt)}">${jt.why?__t(193)+p(jt.why):__t(194)}</span>`:""})()}</p>
        <small>${_.pre?`${__t(195)}${ks(Math.round(A.age)+" s")}`:_.est?__t(196):`${__t(197)}${ks(Math.round(A.age)+" s")}${A.age>120?__t(198):""}`}</small>
        ${He.length?`${A.dl>=1||_.pre&&_.preDl>=1?`${__t(199)}`:""}<ol class="stops">${He.join("")}</ol>`:""}${E(y(new Set([A.fam])))}
        ${fl(C?C.num:_.num,"",A.fam)}${C?`<div class="rtb two"><button type="button" data-fav>${Ef(C)?__t(200):__t(201)}</button><button type="button" data-follow>${Lt===C?__t(202):__t(203)}</button></div>`:""}</div>`}else if(ct&&v)d=`${__t(204)}${p(ct.num||ct.vtid||"")}${__t(205)}`;else if(ct){let _=ct,C=_.pat,k=C.stops.length,K=M(_),gt=typeof K=="number"?K/60:0,Tt=t.days.indexOf(l.ymd),pt=_.day===Tt-1?1440:0,bt=l.min+pt-_.t0-gt,it=Hs(_,bt),ue=jt=>_.t0+C.t[jt]+gt,ve=jt=>p(b[C.stops[jt]].n),Jt=__t(206);it&&(Jt=it.moving?`${__t(207)}${ve(it.next)}${__t(208)}${st(ue(2*it.next))}`:it.at===k-1?`${__t(209)}${ve(k-1)}</b>`:`${__t(173)}${ve(it.at)}${__t(210)}${st(ue(2*it.at+1))}`);let $e=it?it.next:0,He=[];for(let jt=$e;jt<k;jt++)He.push(`<li class="${ll(C.stops[jt])?"mine":""}${cl(_,jt)?" alm":""}"><b>${st(ue(2*jt))}</b><span title="${ve(jt)}">${ll(C.stops[jt])}${ve(jt)}</span>${gt>=1?`<em class="dl ${ki(gt)}">+${Math.round(gt)}</em>`:""}${jt>0?`<button type="button" class="abtn" data-alarm="${jt}" title="${__t(177)}">${cl(_,jt)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);d=`<div class="tc" style="--c:${_.c}"><button class="x" data-cx>\xD7</button><div>${Nn(_.fam)}${__t(178)}${p(_.num)}${__t(211)}${ve(0)}">${ve(0)}</span><span class="ar">\u2192</span>${Bi(b[_.pat.stops[k-1]].n,_.fam)}</h3>
        <p>${Jt}</p><p>${Tf(K,K!=null)}${(()=>{let jt=Xe(_.num);return jt&&jt.n>=2?`${__t(185)}${jt.n}${__t(186)}${jt.late?`${__t(187)} <b>${jt.late} ${__t(188)} ${jt.n} ${__t(189)}</b> ${__t(190)}`:__t(191)} \xB7 ${__t(192)} ${jt.avg<.5?"0":"+"+Math.round(jt.avg)} min</span>`:""})()}${__t(212)}${st(_.t0+C.t[1])}${__t(213)}${st(_.t0+C.t[2*k-2])}${__t(214)}${gt>=1?__t(199):""}<ol class="stops">${He.join("")}</ol>${fl(_.num,"",_.fam)}<div class="rtb two"><button type="button" data-fav>${Ef(_)?__t(200):__t(201)}</button><button type="button" data-follow>${Lt===_?__t(202):__t(203)}</button></div></div>`}else{let _=Rt,C=t.days.indexOf(l.ymd),k=[];gi.st!==_&&(gi.st=_,gi.f.clear());let K=it=>(!X[it]||q.has(it))&&(!gi.f.size||gi.f.has(it));if(C>=0){let it=(ue,ve)=>{for(let Jt of ue){if(!K(Jt.fam))continue;let $e=Jt.pat.stops.indexOf(_);if($e<0||$e===Jt.pat.stops.length-1)continue;let He=M(Jt),jt=typeof He=="number"?He/60:0,dn=Jt.t0+Jt.pat.t[2*$e+1]-ve;dn+jt<l.min-1||dn>l.min+360||k.push({tr:Jt,t:dn,dl:jt,d:He,on:H.vp.has(Jt.tid),past:l.min>Jt.t0+Jt.pat.t[1]-ve+2})}};it(Q[C],0),C>0&&it(Q[C-1],1440)}k.sort((it,ue)=>it.t+it.dl-ue.t-ue.dl);let gt=b[_].id,Tt=zn.get(gt),pt=(v||_e()&&l.live)&&H.url;pt&&(!Tt||Date.now()-Tt.at>3e4)&&!Tt?.loading&&(zn.set(gt,{...Tt||{},loading:!0,at:Tt?Tt.at:0}),Ct(H.url.replace(/\/+$/,""),"/departures.json?stationId="+gt).then(it=>{zn.set(gt,{at:Date.now(),d:it}),Rt===_&&(u._h="",De())}).catch(()=>zn.set(gt,{at:Date.now(),err:1})));let bt=pt&&Tt&&Tt.d&&Array.isArray(Tt.d.trains)&&Tt.d.trains.length?Tt.d.trains:null;if(bt){let it=new Map([...H.vp.values()].map(Jt=>[String((ht.get(Jt.tid)||{}).num||Jt.num),Jt])),ue=new Map(qs(_).map(Jt=>[String(Jt.num),Jt])),ve=bt.filter(Jt=>K((Jt.line||{}).id||"")).slice(0,40).map(Jt=>{let $e=String(Jt.commercialNumber||Jt.technicalNumber||""),He=ue.get($e),jt=He?st(He.est):(Jt.departureDateHourSelectedStation||"").slice(11,16),dn=(Jt.line||{}).id||"",Un=it.get($e),on=He?Math.round(He.dl)*60:Un?H.delays.get(Un.tid):null,os=He&&(He.gone||!He.live&&He.est<l.min-1);return`<li class="go${os?" old":""}${Ca({num:$e,tid:Un?Un.tid:""})?" sel":""}" data-gt="${p($e)}|${Un?p(Un.tid):""}"><b>${p(jt)}</b>${X[dn]?Nn(dn):`<span class="ln" style="--c:#6b7385">${p(dn||"?")}</span>`}<span>${Bi((Jt.destinationStation||{}).name||"",dn)}${Jt.trainObservations?` \xB7 <i>${p(Jt.trainObservations)}</i>`:""}${os?` <small class="oldt">${He.gone?__t(215):__t(216)}</small>`:""}</span>${Jt.trainCancelled?__t(217):typeof on=="number"&&on>=60?`<em class="dl ${ki(on/60)}">+${Math.round(on/60)}</em>`:""}${Jt.platformSelectedStation?`${__t(218)}${p(Jt.platformSelectedStation)}</i>`:""}${Un?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");d=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(b[_].n)}</h3>${Mf(_)}${fl("",b[_].id,"")}${__t(219)}${ve||__t(221)}</ol>${wf(_,l)}${E(y(b[_].fams,_))}${__t(220)}`}else d=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(b[_].n)}</h3>${Mf(_)}${fl("",b[_].id,"")}
        <small style="margin-top:6px">${v&&H.url?__t(223):""}${__t(222)}${v?__t(224):__t(225)}</small>
        <ol>${k.slice(0,40).map(it=>`<li class="go${Ca({num:it.tr.num,tid:it.tr.tid})?" sel":""}" data-gt="${p(it.tr.num)}|${p(it.tr.tid)}"><b>${st(it.t+it.dl)}</b>${Nn(it.tr.fam)}<span>${Bi(b[it.tr.pat.stops[it.tr.pat.stops.length-1]].n,it.tr.fam)}</span>${it.d==="X"?__t(217):it.dl>=1?`<em class="dl ${ki(it.dl)}">+${Math.round(it.dl)}</em>`:""}${v?it.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':it.past?__t(226):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(227)}</ol>${wf(_,l)}${E(y(b[_].fams,_))}${__t(220)}`}let P=u.scrollTop;if(u._h!==d&&(u.innerHTML=d,u._h=d,u.scrollTop=P),u.style.display="flex",u.classList.toggle("min",Ws),fu(),innerWidth<=640){let _=u.querySelector(".tc");if(_&&!_.querySelector(".mn")){let C=document.createElement("button");C.type="button",C.className="mn",C.setAttribute("aria-label",__t(228)),C.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",C.onclick=K=>{K.stopPropagation(),u.classList.toggle("peek"),au(),C.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0};let k=_.querySelector(".x");_.insertBefore(C,k?k.nextSibling:_.firstChild)}}else u.classList.remove("peek");let F=m("#rc");if(innerWidth<=640&&!F.classList.contains("min")&&!De.done&&(De.done=1,m("#rcgrab").click()),innerWidth<=640){let _=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(_+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-_-16)+"px"}else if(innerHeight<=500){let _=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(_+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-_-20+"px"}else u.style.top="",u.style.width=z?"390px":"300px",u.style.maxHeight="";let Y=u.querySelector("[data-cx]");Y&&(Y.onclick=_=>{if(_.stopPropagation(),De.done=0,z||w||Dt||rt&&!ct&&Rt<0){z=w=Dt=!1,ct||Rt>=0||(rt=""),u._h="",De(),a();return}if(ct&&nt.st>=0){let C=nt.st;nt.st=-1,ct=null,Lt=null,Rt=C,Te(),u._h="",De(),Nt=0,a();return}nt.st=-1,Dt=!1,w=!1,z=!1,ct=null,Rt=-1,Lt=null,Te(),De(),Nt=0,a()}),Rf(u),u.querySelectorAll("[data-alarm]").forEach(_=>_.onclick=C=>{C.stopPropagation();let k=ct&&ct.pat?ct:ht.get(ct&&ct.vtid)||null;if(!k)return;let K=+_.dataset.alarm,gt=b[k.pat.stops[K]].id;Ke&&Ke.num===String(k.num)&&Ke.sid===gt?(Ke=null,window.__schedOff&&window.__schedOff(7701),mn(__t(229))):(Ke={num:String(k.num),sid:gt,at:Date.now()},mn(`${__t(230)}${b[k.pat.stops[K]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Ra(),u._h="",De()});{let _=u.querySelector("[data-fav]");_&&(_.onclick=C=>{C.stopPropagation();let k=ct&&ct.pat?ct:ht.get(ct&&ct.vtid)||null;if(!k)return;let K=Mi.findIndex(gt=>gt.num===String(k.num));if(K>=0)Mi.splice(K,1),mn(__t(231));else{let gt=[...hn.st,...Ze.st,...Gt.st],Tt=k.pat.stops.find(pt=>gt.includes(b[pt].id))??k.pat.stops[0];Mi.push({num:String(k.num),fam:k.fam,sid:b[Tt].id,dest:b[k.pat.stops[k.pat.stops.length-1]].id,t:st(k.t0+k.pat.t[2*k.pat.stops.indexOf(Tt)+1])}),mn(`${__t(232)}${k.fam}${__t(233)}${Mi[Mi.length-1].t}${__t(140)}${b[Tt].n}${__t(234)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Hg(),u._h="",De(),Ve(!0)})}{let _=u.querySelector("[data-share]");_&&(_.onclick=()=>{let C=rt,k=tt.filter(pt=>(pt.fam||pt.tr&&pt.tr.fam)===C),K=k.filter(pt=>pt.dl>=5).sort((pt,bt)=>bt.dl-pt.dl),gt=H.alerts.filter(pt=>pt.fams.has(C)),Tt=`${C}${__t(235)}${st(ie().min)}: ${k.length}${__t(236)}${K.length}${__t(237)}${K.length?" ("+K.slice(0,4).map(pt=>`${pt.tr?pt.tr.num:pt.v.num} +${Math.round(pt.dl)}`).join(", ")+")":""}.${gt.length?__t(238)+gt[0].txt:__t(239)}`;navigator.share?navigator.share({text:Tt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Tt),mn(__t(240)+Tt.slice(0,60)+"\u2026"))})}{let _=u.querySelector("[data-cols]");_&&(_.onclick=()=>{an.on=!an.on,Bg(),u._h="",De()})}u.querySelectorAll("[data-gs]").forEach(_=>_.onclick=()=>{let C=+_.dataset.gs;z=!1,window.__rodPickStation(C),Object.assign(s,{tx:b[C].w[0],ty:b[C].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(_=>_.onclick=C=>{C.stopPropagation();let k=_.dataset.sf;k?gi.f.has(k)?gi.f.delete(k):gi.f.add(k):gi.f.clear(),u._h="",De()}),u.querySelectorAll("[data-gt]").forEach(_=>_.onclick=()=>{nt.st=Rt;let[C,k]=_.dataset.gt.split("|"),K=ht.get(k);_l({num:C,tid:H.vp.has(k)?k:"",tr:K||null})}),u.querySelectorAll("[data-sethome]").forEach(_=>_.onclick=()=>mu(Rt,_.dataset.sethome));let j=u.querySelector("[data-follow]");j&&(j.onclick=()=>{Lt=Lt===ct?null:ct,Lt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,m("#rc").classList.contains("min")||m("#rcgrab").click())):u.classList.remove("peek"),u._h="",De(),a()})}window.__rodCard=De;try{let l=localStorage.getItem("rod_inf");(l==="mini"||l==null)&&m("#inf").classList.add("mini")}catch{}m("#inft").onclick=()=>{let l=m("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",l?"mini":"")}catch{}(ct||Rt>=0||Dt||w)&&(u._h="",De())},m("#ver").onclick=()=>{w=!0,z=!1,Dt=!1,u._h="",De()};let ul={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},qg=["vacio","lleno","petado",__t(241),"calor","abordo"],Yg=["gente","retraso","cancel","ascensor","via"],Zg={vacio:__t(242),lleno:__t(243),petado:__t(244),parado:__t(245),calor:__t(246),abordo:__t(247),gente:__t(248),retraso:__t(249),cancel:__t(250),ascensor:__t(251),via:__t(252)},dl=l=>(H.tipos||Zg)[l]||l,ou=(l,d)=>(H.rep||[]).filter(v=>l&&v.num===String(l)&&!v.sid||d&&v.sid===String(d)&&!v.num||l&&d&&v.num===String(l)&&v.sid===String(d)),Af=l=>{let d=Math.round((Date.now()+(H.repSkew||0)-l.at)/6e4);return d<1?__t(253):ks(d+" min")},Ia=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function fl(l,d,v){if(!H.url||!H.repOk)return"";let y=ou(l,d),E=l?qg:Yg;return`${__t(254)}${y.length?"":__t(256)}</small>${y.map(A=>`<p><span>${ul[A.kind]||"\u2022"} <b>${p(dl(A.kind))}</b> <small>${A.up>1?A.up+__t(257):""}${Af(A)}</small></span>${Ia.has(A.id)?"<small>\u2713</small>":`<button type="button" data-rv="${A.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${A.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${l?__t(258):__t(259)}</summary><div class="ckb">${E.map(A=>`<button type="button" data-rk="${A}" data-rn="${p(l||"")}" data-rs="${p(d||"")}" data-rl="${p(v||"")}">${ul[A]} ${p(dl(A))}</button>`).join("")}${__t(255)}`}async function Cf(l,d){try{let y=await(await fetch(H.url.replace(/\/+$/,"")+d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();if(!y.ok){mn(y.err||__t(260));return}if(y.id){Ia.add(y.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ia].slice(-300)))}catch{}}mn(d==="/vote"?__t(261):y.n>1?`${__t(262)}${y.n}${__t(263)}`:__t(264));let E=await Ct(H.url.replace(/\/+$/,""),"/reports.json");E&&E.items&&(H.rep=E.items),u._h="",De(),Ve(!0)}catch{mn(__t(265))}}function Rf(l){l.querySelectorAll("[data-rk]").forEach(d=>d.onclick=v=>{v.stopPropagation(),d.disabled=!0,Cf({kind:d.dataset.rk,num:d.dataset.rn,sid:d.dataset.rs,line:d.dataset.rl},"/report")}),l.querySelectorAll("[data-rv]").forEach(d=>d.onclick=v=>{v.stopPropagation();let[y,E]=d.dataset.rv.split(":");Ia.add(+y);try{localStorage.setItem("rod_votes",JSON.stringify([...Ia].slice(-300)))}catch{}Cf({id:+y,v:+E},"/vote")})}let If=0;function mn(l){let d=m("#toast");d||(d=document.createElement("div"),d.id="toast",document.body.appendChild(d)),d.textContent=l,d.className="on",clearTimeout(If),If=setTimeout(()=>{d.className=""},2600)}function Pa(l){return l.src?`<b class="asrc ${l.src==="Adif"?"adif":""}">${l.src==="Adif"?__t(266):p(l.src)}</b>`:""}function La(l){if(!l.when)return"";let[d,v]=l.when.split("T"),y=vt(new Date),E=y.ymd.slice(0,4)+"-"+y.ymd.slice(4,6)+"-"+y.ymd.slice(6,8);if(d===E&&v){let A=Math.round(y.min-(+v.slice(0,2)*60+ +v.slice(3,5)));return A<1?__t(253):A<60?ks(A+" min"):`${__t(267)}${v.slice(0,5)}`}return`${d.slice(8,10)}/${d.slice(5,7)}${v?" "+v.slice(0,5):""}`}function lu(){let l=m("#alr");if(!l)return;let d=H.alerts.filter(v=>[...v.fams].some(y=>q.has(y))).length;l.hidden=!d,l.textContent=`\u26A0\uFE0F ${d}${d===1?__t(268):__t(269)}`}{let l=m("#alrslot");l&&l.appendChild(m("#alr"))}m("#alr").onclick=()=>{w=!1,z=!1,Dt=!0,De()},m("#wcopy").onclick=async()=>{let l=m("#wcode").textContent;try{await navigator.clipboard.writeText(l),m("#wcopy").textContent=__t(270)}catch{let v=document.createRange();v.selectNodeContents(m("#wcode"));let y=getSelection();y.removeAllRanges(),y.addRange(v),m("#wcopy").textContent=__t(271)}setTimeout(()=>m("#wcopy").textContent=__t(272),2500)};let Jg=Wt.get("71801");function Kg(l,d){let v=b[l].id,y=zn.get(v);!(oe()&&H.url)||y&&(y.loading||Date.now()-y.at<3e4)||(zn.set(v,{...y||{},loading:!0,at:y?y.at:0}),Ct(H.url.replace(/\/+$/,""),"/departures.json?stationId="+v).then(E=>{zn.set(v,{at:Date.now(),d:E}),d&&d()}).catch(()=>zn.set(v,{at:Date.now(),err:1})))}let Pf=l=>+l.slice(0,2)*60+ +l.slice(3,5),Da={k:-2,m:null};function Na(l){let d=t.days.indexOf(ie().ymd);if(Da.k!==d){Da.k=d,Da.m=new Map;for(let v of Q[d]||[])Da.m.set(String(v.num),v)}return Da.m.get(String(l))||null}let rs={at:0,m:new Map},cu=l=>V()?(Ua(""),[...l].filter(d=>{let v=rs.m.get(d);return v&&v[0]>=2&&v[1]===0}).sort(D)):[];function Ua(l){if(Date.now()-rs.at>6e4){rs.at=Date.now(),rs.m=new Map;let v=ie(),y=t.days.indexOf(v.ymd);if(y>=0)for(let E of Q[y]){let A=v.min-E.t0;if(A<E.pat.t[1]+3||A>E.pat.t[E.pat.t.length-2]-3)continue;let P=rs.m.get(E.fam)||[0,0];P[0]++,H.vp.has(E.tid)&&P[1]++,rs.m.set(E.fam,P)}}let d=rs.m.get(l);return d&&d[0]>=3?d[1]/d[0]:1}function jg(l,d,v,y){if(!l||!d||d.pre||d.dObs==null||d.err==null||d.err>.6||v<0)return null;let E=Date.now()/1e3-d.ts;if(E>150||E<-30||(d.still||0)>=90)return null;let A=Zt(l.pat).stopD,P=l.pat.t;if(d.dObs>A[v]+.1)return null;let F,U=A.reduce((j,_,C)=>Math.abs(_-d.dObs)<Math.abs(A[j]-d.dObs)?C:j,0);if(Math.abs(A[U]-d.dObs)<.16&&U<=v)F=P[2*U+1];else{let j=A.findIndex(C=>C>d.dObs);if(j<=0)return null;let _=Math.min(1,Math.max(0,(d.dObs-A[j-1])/(A[j]-A[j-1]||1)));F=P[2*j-1]+_*(P[2*j]-P[2*j-1])}let Y=P[2*v+1]-F;return Y<0||Y>30?null:y.min-E/60+Y}function qs(l,d){let v=ie(),y=(V()||_e())&&v.live&&!d,E=zn.get(b[l].id),A=[],P=new Map([...H.vp.values()].map(U=>[String((ht.get(U.tid)||{}).num||U.num),U]));if(y&&E&&E.d&&Array.isArray(E.d.trains)&&E.d.trains.length)for(let U of E.d.trains){let Y=(U.departureDateHourSelectedStation||"").slice(11,16);if(!Y)continue;let j=String(U.commercialNumber||U.technicalNumber||""),_=P.get(j),C=_?H.delays.get(_.tid):null,k=Math.max(typeof C=="number"?Math.max(0,C/60):0,_&&_.pre&&_.preDl||0),K=Pf(Y);K<v.min-720&&(K+=1440);let gt=+(U.departureDateHourSelectedStation||"").slice(17,19)||0,Tt=K+gt/60,pt=_&&ht.get(_.tid)||Na(j),bt=pt?pt.pat.stops.indexOf(l):-1,it=bt>=0?(pt.t0+pt.pat.t[2*bt+1])%1440:null;if(it!=null){for(;it<Tt-720;)it+=1440;for(;it>Tt+720;)it-=1440;Math.abs(Tt-it)>120&&(it=null)}let ue,ve;it==null?(ue=gt||!k?Tt:Tt+k,ve=gt?0:k):gt||Math.abs(Tt-it)>=1?(ue=Tt,ve=Math.max(0,Tt-it)):(ue=it+k,ve=k);let Jt=!1;if(pt&&!_&&bt>0&&!gt){let $e=t.days.indexOf(v.ymd),He=pt.day===$e-1?1440:pt.day===$e+1?-1440:0,jt=pt.t0+pt.pat.t[1]-He;if(v.min<jt){let dn=jt+(pt.pat.t[2*bt+1]-pt.pat.t[1]);dn>ue+1&&(ue=dn,Jt=!0,it!=null&&(ve=Math.max(0,ue-it)))}}it!=null&&(K=Math.round(it));{let $e=_&&pt&&bt>=0?jg(pt,_,bt,v):null;$e!=null&&$e<ue-.25&&$e>ue-3&&(ue=Math.max($e,v.min),it!=null&&(ve=Math.max(0,ue-it)))}A.push({dubious:Jt,rodLive:!!gt,sm:K,est:ue,dl:ve,fam:(U.line||{}).id||"",dest:(U.destinationStation||{}).name||"",destId:(U.destinationStation||{}).id||"",plat:U.platformSelectedStation||"",cancel:!!U.trainCancelled,obs:U.trainObservations||"",live:!!_,num:j,tid:_?_.tid:"",tr:_&&ht.get(_.tid)||Na(j),src:"oficial"})}else{let U=t.days.indexOf(v.ymd);if(U<0)return A;let Y=(j,_)=>{for(let C of j){let k=C.pat.stops.indexOf(l);if(k<0||k===C.pat.stops.length-1)continue;let K=M(C),gt=typeof K=="number"?Math.max(0,K/60):0,Tt=C.t0+C.pat.t[2*k+1]-_;if(Tt+gt<v.min-1||Tt>v.min+360)continue;let pt=C.pat.stops[C.pat.stops.length-1];A.push({sm:Tt,est:Tt+gt,dl:gt,fam:C.fam,dest:b[pt].n,destId:b[pt].id,plat:"",cancel:K==="X",obs:"",live:H.vp.has(C.tid),num:C.num,tid:C.tid,tr:C,src:"horario"})}};Y(Q[U],0),U>0&&Y(Q[U-1],1440),U+1<t.days.length&&v.min>1080&&Y(Q[U+1],-1440)}if(y){let U=new Set(A.map(_=>_.num)),Y=t.days.indexOf(v.ymd),j=(_,C)=>{for(let k of _||[]){if(U.has(String(k.num)))continue;let K=k.pat.stops.indexOf(l);if(K<0||K===k.pat.stops.length-1)continue;let gt=k.t0+k.pat.t[2*K+1]-C;if(gt<v.min-45||gt>v.min+1||!H.vp.get(k.tid))continue;let pt=H.delays.get(k.tid),bt=typeof pt=="number"?Math.max(0,pt/60):0,it=k.pat.stops[k.pat.stops.length-1];A.push({sm:gt,est:gt+bt,dl:bt,fam:k.fam,dest:b[it].n,destId:b[it].id,plat:"",cancel:!1,obs:"",live:!0,num:k.num,tid:k.tid,tr:k,src:"horario"})}};Y>=0&&(j(Q[Y],0),Y>0&&j(Q[Y-1],1440));for(let _ of A){let C=_.tid&&H.vp.get(_.tid),k=_.tr?_.tr.pat.stops.indexOf(l):-1;_.passed=!!(C&&k>=0&&!C.pre&&C.next!=null&&C.next>=0&&C.next>k&&C.atStop!==k),!_.passed&&_.live&&_.est<v.min&&(_.est=v.min,_.late=!0),_.passed&&(_.gone=!0)}}let F=A.filter(U=>U.gone?v.min-U.est<20:U.est>=v.min-.5).sort((U,Y)=>U.est-Y.est);{let U=F.filter(Y=>Y.gone);if(U.length>2){let Y=new Set(U.slice(0,U.length-2));F=F.filter(j=>!Y.has(j))}}if(!F.filter(U=>!U.gone).length&&A.length&&A[0].src==="oficial"&&!d)return qs(l,!0);for(let U of F){let Y=U.num&&iu(U.num);Y&&Y.cx&&(U.cancel=!0,U.cxWhy=Y.txt)}if(V()&&v.live){let U=t.days.indexOf(v.ymd);for(let Y of F){if(Y.live||Y.cancel||!Y.tr)continue;let j=Y.tr.day===U-1?1440:Y.tr.day===U+1?-1440:0,_=Y.tr.t0+Y.tr.pat.t[1]-j+(Y.dl||0);Y.noPos=v.min>_+3&&!Y.rodLive,Y.ghost=Y.noPos&&Ua(Y.fam)>=.7}}if(d||(F=F.concat(T(l,v.min-.5,v.min+360)).sort((U,Y)=>U.est-Y.est)),!d&&F.some(U=>U.src==="oficial")){let U=A.filter(_=>_.src==="oficial"),Y=Math.max(...U.map(_=>_.sm)),j=new Set(U.map(_=>String(_.num)));F=F.concat(qs(l,!0).filter(_=>!_.gone&&_.sm<=Y&&_.est>=v.min-.5&&!j.has(String(_.num))).map(_=>Object.assign(_,{unconf:!0}))).sort((_,C)=>_.est-C.est)}if(F.some(U=>U.src==="oficial")){let U=Math.max(...F.map(j=>j.sm)),Y=new Set(F.map(j=>j.num));F=F.concat(qs(l,!0).filter(j=>j.sm>U&&!Y.has(String(j.num))))}return F}let Lf=(l,d,v,y)=>{let E={key:l,ico:d,name:v,st:[],i:0,walk:10,open:!1};try{let A=JSON.parse(localStorage.getItem("rod_"+l)||"null");A&&Object.assign(E,A)}catch{}return!E.st.length&&y&&(E.st=y),E},hn=Lf("home","\u{1F3E0}",__t(273),null),Ze=Lf("work","\u{1F4BC}",__t(274),null),Gt={key:"near",ico:"\u{1F4CD}",name:__t(275),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Fa=[Gt,hn,Ze];try{Gt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}hn.open=!1,Ze.open=!1;function Df(l,d){let v=St(l,d),y=St(l,d+.009);return 1/Math.hypot(y[0]-v[0],y[1]-v[1])}function hu(l){if(!navigator.geolocation){Gt.err=__t(276),Ve(!0);return}navigator.geolocation.getCurrentPosition(d=>{let{longitude:v,latitude:y}=d.coords,E=St(v,y),A=Df(v,y),P=b.map((j,_)=>[_,Math.hypot(j.w[0]-E[0],j.w[1]-E[1])*A]).filter(([j])=>b[j].fams.size).sort((j,_)=>j[1]-_[1]),F=P.filter(([,j],_)=>_===0||j<Math.max(2.5,P[0][1]*1.6)).slice(0,3),U=Gt.st[0]!==b[F[0][0]].id;Gt.w=E,Gt.k=A,Gt.acc=d.coords.accuracy!=null?d.coords.accuracy:999,Gt.st=F.map(([j])=>b[j].id),Gt.dist=Object.fromEntries(F.map(([j,_])=>[b[j].id,_])),Gt.fix=Date.now(),Gt.err="",U&&(Gt.i=0);let Y=[hn,Ze].find(j=>j.st.includes(Gt.st[0])&&Gt.dist[Gt.st[0]]<1.5);Ve(!0)},d=>{Gt.err=d.code===1?__t(277):__t(278),Ve(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Nf=l=>Math.max(1,Math.round(l*1.3/.08));setTimeout(()=>hu(!0),400);let je={fixes:[],tid:"",no:new Map,shown:""};function Qg(){let l=je.fixes;if(l.length<2)return;let d=l[l.length-1],v=l.slice().reverse().find(C=>d.t-C.t>=8e3&&d.t-C.t<=9e4);if(!v)return;let y=Math.hypot(d.w[0]-v.w[0],d.w[1]-v.w[1])*d.k,E=d.spd!=null&&d.spd>0?d.spd*3.6:y/((d.t-v.t)/36e5);if(d.acc!=null&&d.acc>100)return;if(je.tid){let C=tt.find(k=>k.tr&&String(k.tr.num)===je.tid)||Ms(ie()).out.find(k=>k.tr&&String(k.tr.num)===je.tid);if(C){if(Math.hypot(C.p.w[0]-d.w[0],C.p.w[1]-d.w[1])*d.k<=5){je.far=0;return}if(je.far||(je.far=d.t),d.t-je.far<12e4)return}je.far=0}if(E<22||E>200)return;let A=[d.w[0]-v.w[0],d.w[1]-v.w[1]],P=null,F=2.5,U=tt.filter(C=>C.real),Y=Ms(ie()).out.filter(C=>C.tr&&!U.some(k=>k.tr&&String(k.tr.num)===String(C.tr.num)));for(let C of[...U,...Y]){if(!C.tr)continue;let k=C.real?2.5:3.5,K=Math.hypot(C.p.w[0]-d.w[0],C.p.w[1]-d.w[1])*d.k;if(K>Math.min(F,k)||P&&P.real&&!C.real)continue;let gt=C.real?C.v.next:C.p.next;if(gt==null||gt<0)continue;let Tt=b[C.tr.pat.stops[gt]].w,pt=[Tt[0]-C.p.w[0],Tt[1]-C.p.w[1]];if(pt[0]*A[0]+pt[1]*A[1]<=0)continue;let bt=String(C.tr.num);(je.no.get(bt)||0)>Date.now()||(F=K,P=C)}if(!P)return;let j=String(P.tr.num);if(je.tid===j)return;je.tid=j,w=Dt=z=!1,Rt=-1,ct=P.tr,Lt=P.tr,Object.assign(s,{tx:P.p.w[0],ty:P.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());{let C=P.tr.pat.stops,k=P.real?P.v.next:P.p.next,K=[...hn.st,...Ze.st],gt=C.findIndex((Tt,pt)=>pt>=k&&K.includes(b[Tt].id));gt>0&&!(Ke&&Ke.num===j)&&(Ke={num:j,sid:b[C[gt]].id,at:Date.now()},Ra())}Te(),u._h="",De(),Nt=0,a();let _=m("#onb");_||(_=document.createElement("div"),_.id="onb",document.body.appendChild(_)),_.innerHTML=`${__t(279)}${p(P.tr.fam)} ${p(P.tr.num)}${__t(280)}${p(b[P.tr.pat.stops[P.tr.pat.stops.length-1]].n)}${__t(281)}${Ke&&Ke.num===j?`${__t(283)}${p(b[Wt.get(Ke.sid)].n)}`:""}${__t(282)}`,_.className="on",_.querySelector("[data-onb-no]").onclick=()=>{je.no.set(j,Date.now()+20*6e4),je.tid="",Lt=null,ct=null,u._h="",De(),_.className=""},_.querySelector("[data-onb-x]").onclick=()=>{_.className=""},setTimeout(()=>{_.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let l=null,d=()=>{l==null&&(l=navigator.geolocation.watchPosition(y=>{let{longitude:E,latitude:A}=y.coords,P={t:y.timestamp||Date.now(),w:St(E,A),k:Df(E,A),spd:y.coords.speed,acc:y.coords.accuracy};je.fixes.push(P),je.fixes=je.fixes.filter(F=>P.t-F.t<12e4);try{ie().live&&Qg()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},v=()=>{l!=null&&(navigator.geolocation.clearWatch(l),l=null)};setTimeout(d,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?v():(je.fixes=[],d())})}setInterval(()=>{!document.hidden&&(Date.now()-Gt.fix>11e4||Fa.some(l=>l.goAt))&&hu(!1)},3e4);let bi=l=>{try{localStorage.setItem("rod_"+l.key,JSON.stringify({st:l.st,i:l.i,walk:l.walk,open:l.open,hide:l.hide||"",goAt:l.goAt||0,platAt:l.platAt||0}))}catch{}},as=l=>l.st.length?Wt.get(l.st[l.i]||l.st[0]):null;function Uf(l,d,v,y){if(y&&d.bus)return d.bstops.slice(1).some(P=>y.has(P))?"to":"out";if(y&&d.tr){let P=d.tr.pat.stops,F=P.indexOf(l);if(F>=0&&P.slice(F+1).some(U=>y.has(U)))return"to"}if(y&&d.tr)return"out";let E=Wt.get(d.destId)??b.findIndex(P=>P.n===d.dest);if(E<0||E==null||v==null)return"otros";let A=P=>Math.hypot(b[P].w[0]-b[v].w[0],b[P].w[1]-b[v].w[1]);return A(E)<A(l)?"to":"out"}let Ys=l=>l<1?__t(253):l<60?Math.floor(l)+" min":Math.floor(l/60)+" h "+String(Math.floor(l%60)).padStart(2,"0"),Ff=0,t0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Of=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Bf=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Oa=l=>{let d=l.es||l.txt;return Of.test(d)||Of.test(l.txt)?3:Bf.test(d)||Bf.test(l.txt)||l.lvl>=2?2:1};function e0(l,d,v){let y=as(l);if(l===Gt){if(je.tid)return"";if(y==null)return`${__t(284)}${Gt.err?p(Gt.err)+__t(285):__t(286)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([hn,Ze].find(Bt=>Bt.st.includes(Gt.st[0])&&Gt.dist[Gt.st[0]]<1.5)||Date.now()-Gt.fix>10*6e4)return"";l.walk=Nf(Gt.dist[l.st[l.i]]||0)}if(y==null){let lt=Gt.st.length?Wt.get(Gt.st[0]):null,Bt=l===Ze?hn:Ze,ee=lt!=null&&!Bt.st.includes(Gt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${l.ico}</span><span class="htit"><b>${l.name}</b><small>${ee?`${__t(287)}${p(b[lt].n)}</b>`:__t(288)}</small></span>${ee?`<button type="button" class="hpick" data-hnear="${l.key}${__t(289)}`:""}<button type="button" class="hpick alt" data-hset="${l.key}">${ee?__t(290):__t(291)}</button></div></div>`}Kg(y,()=>Ve(!0));let E=l===Gt?null:l===hn?Ze:hn,A=E?as(E):null,P=A!=null&&A!==y?A:Jg,F=A!=null&&A!==y?E===Ze?__t(292):"casa":"Barcelona",U=b[y].fams,Y=new Set([...U].filter(lt=>q.has(lt))),j=Y.size<U.size,_=!1;Y.size||(Y=new Set(U),j=!1,_=!0);let C=Gt.w?Math.hypot(b[y].w[0]-Gt.w[0],b[y].w[1]-Gt.w[1])*Gt.k:null,k=C!=null&&Date.now()-Gt.fix<10*6e4;l.platAt&&Date.now()-l.platAt>45*6e4&&(l.platAt=0,bi(l));let K=l!==Gt&&!!l.platAt,gt=l===Gt||k&&C>3&&!l.goAt&&!K,Tt=K||l!==Gt&&k&&C<.08&&Gt.acc<=40&&!(l===hn&&Gt.homeW&&Math.hypot(Gt.homeW[0]-Gt.w[0],Gt.homeW[1]-Gt.w[1])*Gt.k<.05),pt=l.goAt?(Date.now()-l.goAt)/6e4:null;pt!=null&&(pt>60||Tt)&&(l.goAt=0,bi(l));let bt=!Tt&&l!==Gt&&!!l.goAt,it=bt?k&&C<=3?Nf(C):Math.max(0,l.walk-pt):0,ue=qs(y),ve=ue.filter(lt=>!X[lt.fam]||q.has(lt.fam)||_),Jt=gt||Tt?0:bt?it:l.walk,$e=H.alerts.filter(lt=>[...lt.fams].some(Bt=>Y.has(Bt))||lt.stops&&lt.stops.has(y)),He=$e.some(lt=>t0.test(lt.es||lt.txt)),jt={to:[],out:[],otros:[],all:ve},dn=F!=="Barcelona"?new Set(E.st.map(lt=>Wt.get(lt)).filter(lt=>lt!=null)):null;ve.forEach(lt=>jt[Uf(y,lt,P,dn)].push(lt));let Un="";if(dn&&!jt.to.length&&ve.length<ue.length){let lt=ue.filter(Bt=>!ve.includes(Bt)&&Uf(y,Bt,P,dn)==="to");lt.length&&(jt.to=lt,Un=[...new Set(lt.map(Bt=>Bt.fam))].sort(D).join(", "))}let on=lt=>{if(lt==="all")return __t(293);let Bt=ge=>(ge.find(En=>En.fam)||{}).fam;if(lt==="to")return __t(294)+Bi(F==="Barcelona"?"Barcelona":b[P].n,Bt(jt.to)||[...Y][0])+(()=>{let ge=j&&!Un?[...Y].filter(En=>jt.to.some(ls=>ls.fam===En)).sort(D):[];return ge.length?`<span class="hwf" title="${__t(295)}">${ge.map(Nn).join("")}</span>`:""})();let ee=[];for(let ge of jt[lt])ee.some(En=>En[0]===ge.dest)||ee.push([ge.dest,ge.fam]);return ee.length?__t(294)+ee.slice(0,2).map(([ge,En])=>Bi(ge,En)).join(" "):__t(296)},os=ka.get(l.key);os&&!ue.some(lt=>String(lt.num)===os&&!lt.gone)&&gl(l.key,null);let Cr=lt=>{let Bt=os&&jt[lt].find(sn=>String(sn.num)===os&&!sn.gone);if(Bt&&Bt.cancel)return{cls:"v-no",pin:1,x:Bt,big:__t(297),small:`${st(Bt.est)} \xB7 ${Bt.fam}${__t(298)}${Bt.dest}${Bt.num?" \xB7 "+__t(299)+Bt.num:""}`,warn:""};let ee=Bt||jt[lt].find(sn=>!sn.cancel&&!sn.gone&&sn.est-d.min>=Jt);if(!ee){let sn=jt[lt].find(js=>!js.cancel);return sn&&!gt?{cls:"v-no",big:__t(300),small:`${__t(301)}${st(sn.est)}${__t(302)}${Ys(sn.est-d.min)}${__t(303)}`}:{cls:"v-no",big:__t(304),small:__t(305)}}let ge=ee.est-d.min-Jt,En=gt||Tt?"v-info":bt?ge<1.5?"v-warn":"v-ok":ge<1.5?"v-bad":ge<5?"v-warn":"v-ok",ls=ee.ghost?jt[lt].find(sn=>!sn.cancel&&!sn.ghost&&sn.live&&sn.est>ee.est):null;if(Bt&&ge<0&&!gt&&!Tt){let sn=jt[lt].find(js=>!js.cancel&&!js.gone&&!js.ghost&&js!==ee&&js.est-d.min>=Jt);return{cls:"v-no",pin:1,miss:1,nxt:sn,x:ee,ghost:!!ee.ghost,big:__t(306),small:`${st(ee.est)} \xB7 ${ee.fam}${__t(298)}${ee.dest}${ee.plat?__t(307)+ee.plat:""}${ee.num?" \xB7 "+__t(299)+ee.num:""}`,warn:sn?`\u27A1\uFE0F ${__t(308)}: ${sn.est-d.min-Jt<1?__t(309):__t(310)+" "+Ys(sn.est-d.min-Jt)} \xB7 ${st(sn.est)}${sn.arr!=null?" \u2192 "+st(sn.arr):""}${sn.plat?__t(307)+sn.plat:""}${sn.num?" \xB7 "+__t(299)+sn.num:""}`:""}}return{pin:Bt?1:0,cls:En,ghost:!!ee.ghost,big:gt||Tt?ge<1?__t(311):__t(312)+Ys(ge):bt?ge<1.5?__t(313):__t(314)+Ys(ge)+__t(315):ge<1.5?__t(316):__t(317)+Ys(ge),warn:ee.unconf?"\u26A0\uFE0F "+__t(318):Bt&&!ee.live&&ee.rodLive&&!ee.ghost?"\u{1F4E1} "+__t(319):!ee.ghost&&ee.noPos&&Bt?"\u{1F4E1} "+__t(320):!ee.ghost&&ee.late&&Bt?__t(321):ee.ghost?`${__t(322)}${ls?`${__t(323)}${st(ls.est)}`:""}`:He?__t(324):"",small:`${ee.bus?__t(325):""}${st(ee.est)} \xB7 ${ee.fam}${__t(298)}${ee.dest}${ee.plat?__t(307)+ee.plat:""}${ee.dl>=1?` \xB7 +${Math.round(ee.dl)} min`:""}${ee.arr!=null?`${__t(326)}${st(ee.arr)}`:""}${ee.num?" \xB7 "+__t(299)+ee.num:""}`,x:ee}},f0=dn||new Set([P]),p0=lt=>{let Bt=lt.tr;if(!Bt)return null;let ee=Bt.pat.stops,ge=ee.indexOf(y);if(ge<0)return null;let En=-1;for(let ls=ge+1;ls<ee.length;ls++)if(f0.has(ee[ls])){En=ls;break}return En<0?null:lt.est+(Bt.pat.t[2*En]-Bt.pat.t[2*ge+1])};jt.to.forEach(lt=>{lt.arr=p0(lt)});let Ml=jt.out.length?"out":"otros",Hn=Cr("to"),$a=Cr(Ml);if(!gt&&l!==Gt&&Hn.x&&l===uu()&&a0(l,Hn.x,b[y].n,Jt),Tt||l===Gt&&Gt.acc<=40&&(Gt.dist[l.st[l.i]]||9)<.08){for(let lt of[Hn.x,$a.x].concat(l===Gt?[Cr("all").x]:[]))if(lt&&!lt.cancel&&lt.est-d.min<=2&&lt.est-d.min>-.5){let Bt="w"+lt.num+"|"+Math.round(lt.sm);ml.has(Bt)||(ml.add(Bt),su(`${__t(327)}${lt.fam}${__t(298)}${lt.dest}`,`${Math.round(lt.est-d.min)<=1?__t(328):__t(134)+Math.round(lt.est-d.min)+" min"}${__t(298)}${b[y].n}${lt.plat?__t(307)+lt.plat:""}`))}}let jf=V()&&d.live,Qf=Y.size===1,m0=lt=>{let Bt=lt.est-d.min;return gt?lt.cancel?"cx":Bt<0?"u-miss":"u-info":lt.cancel?"cx":Bt<Jt?"u-miss":Bt<Jt+1.5?"u-now":Bt<Jt+5?"u-soon":"u-ok"},g0=lt=>{if(lt.gone)return`<li class="hr u-gone${lt.live?" on":""}${Ca(lt)?" sel":""} go" data-dk="${v.push(lt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${st(lt.est)}${__t(329)}${ks(Math.max(1,Math.round(d.min-lt.est))+" min")}</small></span><span class="hrd">${Bi((Qf?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${__t(330)}${p(lt.num)}</small></span><span class="hrm">${lt.dl>=1?`<em class="dl ${ki(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}</span></li>`;let Bt=!lt.cancel&&lt.est-d.min<Jt,ee=ou(lt.num,"");return`<li class="hr ${m0(lt)}${lt.live?" on":""}${lt.ghost?" gh":""}${Ca(lt)?" sel":""}${os&&String(lt.num)===os?" pin":""}${Mi.some(ge=>{let En=ru(ge,t.days.indexOf(d.ymd));return En&&String(En.num)===String(lt.num)})?" fav":""} go" style="--lc:${X[lt.fam]||"#6b7385"}" data-dk="${v.push(lt)-1}" title="${lt.cancel?__t(297):Bt?__t(306):__t(331)}"><span class="hrt"><b>${lt.cancel?"\u2715":Bt?st(lt.est):Ys(lt.est-d.min)}</b><small>${lt.cancel?__t(332):lt.late?__t(333):Bt?__t(334):lt.ghost?__t(335):st(lt.est)}</small></span><span class="hrd">${lt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Bi((Qf?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${ee.length?`<i class="cr" title="${p(ee.map(ge=>dl(ge.kind)).join(" \xB7 "))}">${ee.slice(0,2).map(ge=>ul[ge.kind]).join("")}</i>`:""}${lt.arr!=null?`${__t(336)}${st(lt.arr)}${lt.num?" \xB7 "+__t(299)+p(lt.num):""}${(()=>{let ge=lt.num&&Xe(lt.num);return ge&&ge.n>=3&&ge.late/ge.n>=.5?`${__t(337)}${ge.late}/${ge.n})</b>`:""})()}</small>`:""}${lt.obs?`<small class="hro">${p(lt.obs)}</small>`:""}${lt.unconf?`<small class="hro unc">${__t(338)}</small>`:""}</span><span class="hrm">${!lt.cancel&&lt.dl>=1?`<em class="dl ${ki(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}${lt.plat?`${__t(218)}${p(lt.plat)}</i>`:""}</span></li>`},Ha=(lt,Bt,ee)=>`<div class="hcol"><div class="hdir">${on(lt)}${ee?`<button type="button" class="hhide" data-hhide="${l.key}:${ee}" title="${__t(339)}">\u2715</button>`:""}</div><div class="hv ${Bt.cls}${Bt.ghost||Bt.pin&&Bt.x&&Bt.x.noPos?" gh":""}${Bt.x?" go":""}"${Bt.miss&&Bt.nxt&&Bt.nxt.num?` data-pinnext="${l.key}:${p(Bt.nxt.num)}" title="${__t(340)}"`:Bt.x?` data-dk="${v.push(Bt.x)-1}"`:""}><b>${Bt.big}</b>${Bt.pin?`<button type="button" class="hunpin" data-unpin="${l.key}" title="${__t(341)}">\u{1F4CC} ${__t(342)} \u2715</button>`:""}<small>${p(Bt.small)}</small>${Bt.pin&&Bt.x&&Bt.x.num?(ge=>ge?`<span class="hwhere">\u{1F4CD} ${p(ge)}</span>`:"")(qf(Bt.x.num)):""}${Bt.warn?`<span class="hvw">${p(Bt.warn)}</span>`:""}</div><ol>${jt[lt].slice(0,(l.more?lt==="all"||l.hide?20:10:lt==="all"?7:l.hide?8:4)+jt[lt].filter(ge=>ge.gone).length).map(g0).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(l===Gt){let lt=Cr("all");var _0=lt.x?`<span class="nw">${lt.big}</span> \xB7 <span class="nw"><b>${st(lt.x.est)}</b> ${p(lt.x.fam)}${__t(343)}${p(lt.x.dest)}${lt.x.plat?'<span class="nw">'+__t(307)+p(lt.x.plat)+"</span>":""}`:lt.big}let x0=l===Gt?_0:Hn.x?`<span class="nw">${Hn.big}${Hn.x.plat?__t(307)+p(Hn.x.plat):""}</span> \xB7 <span class="nw"><b>${st(Hn.x.est)}</b>${Hn.x.arr!=null?`${__t(345)}${st(Hn.x.arr)}</b>`:""}${__t(344)}${p(F)}</span>`:__t(346)+p(F),ln=l===Gt?(lt=>lt.pin?lt:null)(Cr("all")):Hn.pin?Hn:$a.pin?$a:null,v0=ln?l===Gt?"all":ln===Hn?"to":Ml:"",Ga=!!(ln&&(ln.ghost||ln.x.noPos||ln.x.cancel)),Su=!!(ln&&ln.miss),Rr=Ga?jt[v0].find(lt=>!lt.cancel&&!lt.ghost&&!lt.gone&&lt.est>ln.x.est-.01&&lt!==ln.x&&lt.est-d.min>=(gt||Tt?0:Jt)):null,y0=Su?`<span class="nw">${__t(347)} <b>${st(ln.x.est)}</b></span>${ln.nxt?` \xB7 <span class="nw">${__t(348)} <b>${st(ln.nxt.est)}</b>${ln.nxt.arr!=null?` \u2192 <b>${st(ln.nxt.arr)}</b>`:""}</span>`:""}`:"",S0=Ga?`<span class="nw">\u26A0\uFE0F ${ln.x.cancel?__t(297):ln.ghost?__t(349):__t(350)}</span>${Rr?` \xB7 <span class="nw">${__t(348)} <b>${st(Rr.est)}</b>${Rr.arr!=null?` \u2192 <b>${st(Rr.arr)}</b>`:""}${Rr.plat?__t(307)+p(Rr.plat):""}</span>`:""}`:"";return`<div class="hplace ${l.open?"open":""}${ln?" pinned":""}${Ga?" pgh":""}"><button type="button" class="hhead" data-ht="${l.key}"><span class="hico">${l.ico}</span><span class="htit"><b>${p(b[y].n)}${ln&&ln.x.num?`<i class="hpn">\u{1F4CC} ${p(ln.x.num)}</i>`:""}</b><small class="c${Ga||Su?"warn":He?"bad":Hn.cls.slice(2)}">${Ga?S0:Su?y0:x0}</small>${ln&&ln.x&&ln.x.num?(lt=>lt?`<small class="nofit hwh2">\u{1F4CD} ${p(lt)}</small>`:"")(qf(ln.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(l.open?`
      <div class="hbody">
        ${l.st.length>1?`<div class="hst">${l.st.map((lt,Bt)=>{let ee=Wt.get(lt);return ee==null?"":`<button type="button" data-hs="${l.key}:${Bt}" class="${Bt===l.i?"on":""}">${p(b[ee].n)}</button>`}).join("")}</div>`:""}
        ${l===Gt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let lt=Gt.dist[l.st[l.i]]||0;return lt<1?Math.round(lt*100)*10+" m":lt.toFixed(1).replace(".",",")+" km"})()}${__t(352)}${l.walk}${__t(353)}`:""}
        ${K?`<div class="hwalk away">${__t(355)}<a data-hplat="${l.key}${__t(354)}`:Tt?`${__t(356)}${l.key}${__t(357)}`:bt?`${__t(358)}${Math.round(it)} min</b>${k&&C<=3?__t(359):""} \xB7 <a data-hgo="${l.key}${__t(354)}`:""}${gt&&l!==Gt?`${__t(360)}${C<10?C.toFixed(1).replace(".",","):Math.round(C)}${__t(361)}`:""}<div class="hwalk"${gt||Tt||bt?" hidden":""}><button type="button" class="hgo" data-hgo="${l.key}:1">\u{1F6B6} Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${l.key}:1">${__t(362)}</button><span class="hstep" title="${__t(363)}">${__t(364)} <button type="button" data-hw="${l.key}:-1">\u2212</button><b>${l.walk} min</b><button type="button" data-hw="${l.key}:1">+</button> ${__t(365)}</span></div>
        ${(()=>{let lt=Mi.filter(Bt=>l.st.includes(Bt.sid));return lt.length?`<div class="hfav">${lt.map(Bt=>{let ee=ru(Bt,t.days.indexOf(d.ymd)),ge=ee&&ve.find(En=>String(En.num)===String(ee.num));return`\u2B50 <b>${Bt.t}</b> ${p(Bt.fam)} ${ge?ge.cancel?__t(366):ge.gone?__t(215):ge.dl>=1?`<em class="dl ${ki(ge.dl)}">+${Math.round(ge.dl)}${__t(367)}${st(ge.est)}`:__t(368):__t(369)}`}).join("<br>")}</div>`:""})()}
        ${j&&Un?`${__t(370)}${[...Y].sort(D).map(Nn).join(" ")}${__t(371)}${F}${__t(372)}${Un}${__t(373)}`:_?`${__t(374)}${[...q].sort(D).slice(0,3).map(Nn).join(" ")}${__t(375)}`:""}
        ${$e.length?`<div class="hal ${He?"bad":""}${_u.v?" open":""}" data-halx>\u26A0\uFE0F ${Pa($e[0])} ${p($e[0].txt)} <small>${La($e[0])}</small>${$e.length>1?` <a data-hal>+${$e.length-1}${__t(376)}`:""}</div>`:`${__t(377)}${[...Y].sort(D).join(", ")}</div>`}
        ${(()=>{let lt=l.st.flatMap(Bt=>ou("",Bt));return lt.length?`<div class="hcr">${lt.slice(0,3).map(Bt=>`${ul[Bt.kind]} <b>${p(dl(Bt.kind))}</b> <small>${Bt.up>1?Bt.up+__t(257):""}${Af(Bt)}</small>`).join("<br>")}</div>`:""})()}
        ${l===Gt?`<div class="hcols one">${Ha("all",Cr("all"))}</div>`:l.hide==="out"?`<div class="hcols one">${Ha("to",Hn)}</div><a class="hshow" data-hshow="${l.key}${__t(378)}`:l.hide==="to"?`<div class="hcols one">${Ha(Ml,$a)}</div><a class="hshow" data-hshow="${l.key}${__t(378)}`:`<div class="hcols">${Ha("to",Hn,"to")}${Ha(Ml,$a,"out")}</div>`}
        ${ve.length>(l===Gt?7:8)?`<button type="button" class="hmore" data-hmore="${l.key}">${l.more?__t(379):__t(380)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${jf?zn.get(b[y].id)?.d?__t(381):__t(382):__t(383)} \xB7 \u25CF = ${__t(384)}">${jf?zn.get(b[y].id)?.d?__t(385):__t(386):__t(387)}</span><a data-hmap="${y}${__t(351)}${l===Gt?__t(388):`<a data-hset="${l.key}${__t(389)}`}${l===Ze?`${__t(390)}`:""}</div>
      </div>`:"")+"</div>"}let wi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},kf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,zf=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Zs=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),pl=()=>{let l=new Set;return[...hn.st,...Ze.st].forEach(d=>{let v=Wt.get(d);v!=null&&b[v].fams.forEach(y=>l.add(y))}),[...l].sort(D)},Ba=()=>({stations:[...hn.st,...Ze.st],lines:pl().filter(l=>!Zs.has(l))}),n0=l=>Uint8Array.from(atob(l.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((l.length+3)%4)),d=>d.charCodeAt(0));async function Vf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function $f(l){let v=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:l.toJSON(),...Ba()})})).json();if(!v.ok)throw new Error(v.err||"error")}function uu(){let l=as(hn),d=as(Ze);if(l==null||d==null)return l!=null?hn:d!=null?Ze:null;if(Gt.w&&Date.now()-Gt.fix<3*36e5){let v=y=>Math.hypot(b[y].w[0]-Gt.w[0],b[y].w[1]-Gt.w[1]);return v(l)<=v(d)?hn:Ze}return new Date().getHours()<13?hn:Ze}function Hf(l){let d=uu(),v=d===hn?Ze:hn,y=d&&as(d),E=v&&as(v);if(y==null||E==null)return!0;let A=(l.es||"")+" "+(l.txt||""),P=t.days.indexOf(ie().ymd),F=ie(),U=[...new Set([...A.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(j=>j[1]))];if(U.length)return U.some(j=>{let _=Na(j);if(!_)return!1;let C=_.pat.stops,k=C.indexOf(y),K=C.indexOf(E);if(k<0||K<0||k>K)return!1;let gt=_.t0+_.pat.t[2*k+1];return gt>F.min-60&&gt<F.min+150});let Y=A.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(Y){let j=Y[1].toLowerCase(),_=b.findIndex(C=>C.n&&j.startsWith(C.n.toLowerCase()));if(_>=0){let C=(Q[P]||[]).find(k=>{let K=k.pat.stops;return K[K.length-1]===_&&K.includes(y)&&K.includes(E)});if(C){let k=C.pat.stops;return k.indexOf(y)<k.indexOf(E)}}}return!0}let $n={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function i0(){let{lines:l,stations:d}=Ba(),v=new Set(l),y=new Set(d.map(P=>Wt.get(P))),E=H.alerts.filter(P=>([...P.fams].some(F=>v.has(F))||[...P.stops||[]].some(F=>y.has(F)))&&Hf(P));if(!$n.seen){try{$n.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{$n.seen=new Set}if(!$n.seen.size){E.forEach(P=>$n.seen.add(P.id+"|"+P.txt.length)),Gf();return}}let A=E.filter(P=>!$n.seen.has(P.id+"|"+P.txt.length));if(A.length&&(A.forEach(P=>$n.seen.add(P.id+"|"+P.txt.length)),Gf(),!(!$n.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of A.slice(0,3)){let F=(P.src==="Adif"?__t(266):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(D).slice(0,4).join(" "):""),U={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(Y=>Y?Y.showNotification(F,U):new Notification(F,U)).catch(()=>{try{new Notification(F,U)}catch{}})}}function Gf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...$n.seen].slice(-400)))}catch{}}async function s0(){if($n.on)$n.on=!1,mn(__t(391));else{if(!("Notification"in window)){mn(kf&&!zf()?__t(392):__t(393));return}if(await Notification.requestPermission()!=="granted"){mn(__t(394));return}$n.on=!0,mn(__t(395)+Ba().lines.join(", ")+__t(396))}try{localStorage.setItem("rod_ln",$n.on?"1":"")}catch{}Ve(!0)}async function r0(){if(!H.repOk)return s0();if(!wi.busy){wi.busy=!0;try{let l=await Vf();if(!l){mn(kf&&!zf()?__t(397):__t(398));return}if(await navigator.serviceWorker.ready,wi.on){let d=await l.pushManager.getSubscription();d&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:d.endpoint})}).catch(()=>{}),await d.unsubscribe().catch(()=>{})),wi.on=!1,mn(__t(391))}else{if(!H.url){mn(__t(399));return}if(await Notification.requestPermission()!=="granted"){mn(__t(394));return}let v=(await Ct(H.url.replace(/\/+$/,""),"/push/key")).key,y=await l.pushManager.getSubscription()||await l.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n0(v)});await $f(y),wi.on=!0,mn(__t(400)+Ba().lines.join(", "))}try{localStorage.setItem("rod_push",wi.on?"1":"")}catch{}}catch(l){mn(__t(401)+(l.message||l))}finally{wi.busy=!1,Ve(!0)}}}async function Wf(){if(wi.on)try{let l=await Vf(),d=l&&await l.pushManager.getSubscription();d&&await $f(d)}catch{}}let du=!1,Xf="";function fu(){let l=ct?"t"+(ct.tid||ct.vtid):Rt>=0?"s"+Rt:Dt?"a":w?"n":"";l!==Xf&&(du=!1,Xf=l);let d=innerWidth<=640&&!!l&&!du&&!document.documentElement.classList.contains("tabmode"),v=m("#inf");v.classList.contains("compact")!==d&&(v.classList.toggle("compact",d),requestAnimationFrame(()=>{if(u.style.display!=="none"){let y=v.getBoundingClientRect().bottom;u.style.top=Math.round(y+8)+"px",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-y-16)+"px"}}))}let ml=new Set;function a0(l,d,v,y){if(!($n.on||wi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let E=ie(),A=d.sm-E.min-y;if(!E.live||d.dl<10||A>40||ml.has(d.num+"|"+d.sm))return;ml.add(d.num+"|"+d.sm);let P=`${l.ico} ${v} ${l===Ze?__t(404):__t(405)}${__t(402)}${st(d.sm)}${__t(403)}${Math.round(d.dl)} min`,F=`${d.fam}${__t(298)}${d.dest}${__t(406)}${st(d.est)}. Si ibas a cogerlo, puedes salir ${Math.round(d.dl)}${__t(407)}${l===Ze?__t(274):__t(273)}${__t(408)}`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(U=>U?U.showNotification(P,{body:F,tag:"rd-"+d.num,icon:"icons/icon-192.png"}):new Notification(P,{body:F})).catch(()=>{try{new Notification(P,{body:F})}catch{}})}let Tr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",l=>{let d=l.target.closest&&l.target.closest("[data-nowx]");if(!d||l.target.closest("a"))return;let v=d.dataset.nowx?d.dataset.nowx.split("|"):[];if(v.length){if(d.classList.contains("col"))Tr.open=!0;else{Tr.open=!1,v.forEach(y=>Tr.seen.add(y));try{localStorage.setItem("rod_seen",JSON.stringify([...Tr.seen].slice(-200)))}catch{}}Ve(!0)}});function o0(l){let d=l.lines;if(!d.length&&Gt.st&&Gt.st.length){let _=new Set;Gt.st.forEach(C=>{let k=Wt.get(C);k!=null&&b[k].fams.forEach(K=>_.add(K))}),d=[..._].sort(D)}let v=new Set(d),y=H.alerts.filter(_=>!v.size||[..._.fams].some(C=>v.has(C))),E=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(127)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,A=y.reduce((_,C)=>Math.max(_,Oa(C)),0),P=A===3?"\u26D4 ":A===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",F=`<div class="hnowh"><span class="hnowl"><b>${y.length?P+y.length+(y.length===1?__t(268):__t(269)):__t(409)}</b>${d.length?d.map(Nn).join(""):""}</span>${E}</div>`,U=y.filter(_=>!Tr.seen.has(_.id)),Y=y.length&&(Tr.open||U.length>0),j=y.reduce((_,C)=>Math.max(_,Oa(C)),0);return`<div class="hnow${j===3?" bad":j===2?" warn":j===1?" info":""}${y.length&&!Y?" col":""}" data-nowx="${p(y.map(_=>_.id).join("|"))}">${F}${Y?y.slice().sort((_,C)=>Oa(C)-Oa(_)).map(_=>`<p class="sv${Oa(_)}">${Pa(_)} ${p(_.txt)} <small>${La(_)}</small></p>`).join("")+`<small class="hnowt">${__t(410)}</small>`:""}</div>`}let ka=new Map((()=>{try{let l=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(d=>d[2]===l).map(d=>[d[0],d[1]])}catch{return[]}})());function pu(){if(!document.documentElement.classList.contains("tabmode"))return;let l=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],d=(y,E)=>{y.style.fontSize=E===1?"":(y._f0*E).toFixed(1)+"px",y.querySelectorAll("b").forEach(A=>A.style.fontSize=E===1?"":(y._b0*E).toFixed(1)+"px")},v=1;for(let y of l){if(y.style.whiteSpace="",d(y,1),!y.clientWidth)continue;y._f0=parseFloat(getComputedStyle(y).fontSize);let E=y.querySelector("b");for(y._b0=E?parseFloat(getComputedStyle(E).fontSize):0;y.scrollWidth>y.clientWidth+1&&v>.86;)v-=.02,d(y,v)}if(v<1)for(let y of l)y._f0&&d(y,v);for(let y of l)y.scrollWidth>y.clientWidth+1&&(y.style.whiteSpace="normal")}addEventListener("resize",()=>{try{pu()}catch{}});let l0=(l,d)=>{let v=l==="work"?Ze:l==="near"?Gt:hn,y=v&&as(v);return y==null?null:qs(y).find(E=>String(E.num)===String(d))||null};function gl(l,d){d?ka.set(l,d):ka.delete(l);try{let v=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...ka].map(([y,E])=>[y,E,v])))}catch{}}function qf(l){let d=tt.find(A=>A.tr&&String(A.tr.num)===String(l));if(!d){let A=Na(l),P=ie(),F=t.days.indexOf(P.ymd);if(!A)return"";let U=A.day===F-1?1440:0,Y=A.t0+A.pat.t[1]-U;return Y>P.min?__t(411)+b[A.pat.stops[0]].n+" ("+st(Y)+")":""}let v=d.tr,y=A=>b[v.pat.stops[A]].n;if(d.real){let A=d.v;return A.pre?__t(412):A.atStop>=0&&(A.st==="STOPPED_AT"||A.still>30)?__t(413)+y(A.atStop):A.atStop>=0?__t(414)+y(A.atStop):d.stop==="via"&&A.next>0?"\u23F8 "+__t(415)+y(A.next-1)+__t(416)+y(A.next):A.next>0?__t(175)+y(A.next-1)+__t(416)+y(A.next):A.next===0?__t(294)+y(0):""}let E=d.p&&d.p.next;return E>0?__t(417)+y(E-1)+__t(416)+y(E):""}function c0(l){let d=cu(l.lines||[]);if(!d.length)return"";let v=[hn,Ze].some(y=>{let E=as(y),A=E!=null&&zn.get(b[E].id);return A&&A.d&&Array.isArray(A.d.trains)&&!A.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(418)} ${d.join(", ")}</b> \xB7 ${__t(419)}${v?" \xB7 "+__t(420):""}. ${__t(421)}</div>`}function h0(l){if(!je.tid)return"";let d=tt.find(K=>K.tr&&String(K.tr.num)===je.tid)||Ms(l).out.find(K=>K.tr&&String(K.tr.num)===je.tid);if(!d)return"";let v=d.tr,y=v.pat.stops,E=d.real?d.v.next:d.p.next;if(E==null||E<0)return"";let A=M(v),P=typeof A=="number"?Math.max(0,A/60):0,F=t.days.indexOf(l.ymd),U=v.day===F-1?1440:0,Y=Ke&&Ke.num===je.tid?y.indexOf(Wt.get(Ke.sid)):-1;Y<E&&(Y=y.length-1);let j=v.t0+v.pat.t[2*Y]+P-U,_=j-l.min,C=d.real&&d.v.atStop>=0?d.v.atStop:-1,k=C>=0?__t(413)+b[y[C]].n:__t(294)+b[y[E]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Nn(v.fam)} ${__t(299)}${p(v.num)}<i class="hpn onbx" data-onbx title="${__t(422)}">\u2715</i></b><small class="nofit cok">${p(k)} \xB7 <span class="nw">${__t(423)} ${p(b[y[Y]].n)}</span> <span class="nw">${_>=1?__t(100)+Ys(_)+" \xB7 ":""}<b>${st(j)}</b>${P>=1?` <em class="dl ${ki(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button></div>`}function Ve(l){let d=m("#home");if(!d)return;let v=performance.now();if(!l&&v-Ff<4e3)return;Ff=v;let y=ie(),E=[],A=Ba(),P=_=>{let C=as(_);return C==null||!Gt.w?1:Math.hypot(b[C].w[0]-Gt.w[0],b[C].w[1]-Gt.w[1])},F=[Gt,...[hn,Ze].sort((_,C)=>P(_)-P(C))],U=(document.documentElement.classList.contains("tabmode")?o0(A)+c0(A)+h0(y):"")+F.map(_=>e0(_,y,E)).join("")+(Fa.some(_=>_.open)&&A.lines.length,"");d.className=Fa.some(_=>_.open)?"open":"";let Y=m("#bell");Y||(Y=document.createElement("button"),Y.type="button",Y.id="bell",Y.onclick=r0,m("#inf .more").prepend(Y));{let _=H.repOk?wi.on:$n.on;Y.hidden=!A.lines.length,Y.className=_?"on":"",Y.textContent=(_?__t(431):__t(432))+A.lines.join(", "),Y.title=(_?__t(433):__t(434))+__t(63)+A.lines.join(", ")+(H.repOk?"":__t(435))}if(d._h===U)return;d._h=U,d.innerHTML=U,pu();{let _=d.querySelector("[data-onbgo]");_&&(_.onclick=C=>{if(C.target.closest("[data-onbx]")){je.no.set(je.tid,Date.now()+20*6e4),je.tid="",Lt=null,Ve(!0);return}let k=tt.find(K=>K.tr&&String(K.tr.num)===je.tid);k&&(w=Dt=z=!1,Rt=-1,ct=k.tr,u._h="",De())})}{let _=[...d.children].find(C=>C.classList.contains("hplace")&&!C.querySelector(".hnew"));_&&_.classList.add("lead")}let j=_=>_==="work"?Ze:_==="near"?Gt:hn;d.querySelectorAll("[data-hloc]").forEach(_=>_.onclick=()=>{Gt.err="",hu(!0)}),d.querySelectorAll("[data-ht]").forEach(_=>_.onclick=()=>{if(m("#inf").classList.contains("compact")){du=!0,fu();return}let C=j(_.dataset.ht);C.open=!C.open,bi(C),Ve(!0),(ct||Rt>=0||Dt||w)&&(u._h="",De())}),d.querySelectorAll("[data-hs]").forEach(_=>_.onclick=()=>{let[C,k]=_.dataset.hs.split(":"),K=j(C);K.i=+k,bi(K),Ve(!0)}),d.querySelectorAll("[data-hw]").forEach(_=>_.onclick=()=>{let[C,k]=_.dataset.hw.split(":"),K=j(C);K.walk=x(K.walk+ +k,0,60),bi(K),Ve(!0)}),d.querySelectorAll("[data-hmap]").forEach(_=>_.onclick=()=>{let C=+_.dataset.hmap;w=Dt=z=!1,ct=null,Rt=C,Te(),Object.assign(s,{tx:b[C].w[0],ty:b[C].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",De(),a()}),d.querySelectorAll("[data-hset]").forEach(_=>_.onclick=()=>{Js=_.dataset.hset,g.value="",g.placeholder=Js==="work"?__t(436):__t(437),g.focus()}),d.querySelectorAll("[data-hnear]").forEach(_=>_.onclick=()=>{let C=Wt.get(Gt.st[0]);C!=null&&mu(C,_.dataset.hnear)}),d.querySelectorAll("[data-hmore]").forEach(_=>_.onclick=()=>{let C=j(_.dataset.hmore);C.more=!C.more,Ve(!0)}),d.querySelectorAll("[data-hhide]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[k,K]=_.dataset.hhide.split(":"),gt=j(k);gt.hide=K,bi(gt),Ve(!0)}),d.querySelectorAll("[data-hshow]").forEach(_=>_.onclick=()=>{let C=j(_.dataset.hshow);C.hide="",bi(C),Ve(!0)}),d.querySelectorAll("[data-hgo]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[k,K]=_.dataset.hgo.split(":"),gt=j(k);gt.goAt=K==="1"?Date.now():0,gt.goAt&&(gt.platAt=0),bi(gt),Ve(!0)}),d.querySelectorAll("[data-hplat]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[k,K]=_.dataset.hplat.split(":"),gt=j(k);gt.platAt=K==="1"?Date.now():0,gt.platAt&&(gt.goAt=0),bi(gt),Ve(!0)}),d.querySelectorAll("[data-hnotst]").forEach(_=>_.onclick=C=>{C.stopPropagation(),Gt.homeW=Gt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Gt.w))}catch{}Ve(!0)}),d.querySelectorAll("[data-hdel]").forEach(_=>_.onclick=()=>{Ze.st=[],Ze.open=!1,bi(Ze),Ve(!0),Wf()}),d.querySelectorAll("[data-dk]").forEach(_=>_.onclick=()=>{let C=E[+_.dataset.dk];if(un.on&&_.matches("li.hr")&&!C.gone&&C.num!=null){let k=_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(k){let K=ka.get(k)===String(C.num);gl(k,K?null:String(C.num)),K?ct&&String(ct.num)===String(C.num)&&(ct=null,Lt=null,un.sk="",u._h="",De()):_l(C,!0),Ve(!0);return}}_l(C)}),d.querySelectorAll("[data-pinnext]").forEach(_=>_.onclick=C=>{if(C.target.closest("[data-unpin]"))return;let[k,K]=_.dataset.pinnext.split(":");gl(k,K);let gt=l0(k,K);gt&&_l(gt,!0),Ve(!0)}),d.querySelectorAll("[data-unpin]").forEach(_=>_.onclick=C=>{C.stopPropagation(),gl(_.dataset.unpin,null),Ve(!0)}),d.querySelectorAll("[data-hal]").forEach(_=>_.onclick=()=>m("#alr").click()),Rf(d)}function _l(l,d){if(!l)return;let v=t.days.indexOf(ie().ymd),y=tt.find(P=>P.real?l.tid&&P.v.tid===l.tid||l.num&&String(P.tr?P.tr.num:P.v.num)===String(l.num):l.tr&&P.tr===l.tr||l.num&&P.tr&&String(P.tr.num)===String(l.num)),E=l.tr||y&&y.tr||(Q[v]||[]).find(P=>String(P.num)===String(l.num));if(w=Dt=z=!1,Rt=-1,d||void 0,ct=y?y.tr||{vtid:y.v.tid}:E||null,!ct)return;d&&(un.sk="t"+(ct.num||ct.vtid)),Lt=y&&y.tr?y.tr:null,Lt&&innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());let A=y?y.p.w:null;A&&Object.assign(s,{tx:A[0],ty:A[1],dist:Math.min(s.dist,22)}),Te(),u._h="",De(),Nt=0,a()}let Js=!1;g.addEventListener("blur",()=>setTimeout(()=>{Js&&!g.value.trim()&&(Js=!1,g.placeholder=__t(438))},600));function eb(){}function mu(l,d){let v=d==="work"?Ze:hn,y=b[l].id,E=b.filter(A=>A.fams.size&&A!==b[l]&&Math.hypot(A.w[0]-b[l].w[0],A.w[1]-b[l].w[1])<.6).map(A=>A.id);v.st=[y,...E].slice(0,3),v.i=0,v.open=!0,bi(v),Ve(!0),Wf()}let xl=m("#lines");xl.innerHTML=`${__t(439)}`+$.map(l=>`<button type="button" style="--c:${X[l]}" data-f="${l}">${l}</button>`).join("");function Yf(){try{Ve(!0)}catch{}{let l=m("#linebtn");l||(l=document.createElement("button"),l.type="button",l.id="linebtn",xl.after(l),l.onclick=()=>{rt=[...q][0],z=w=Dt=!1,u._h="",De()});let d=q.size===1?[...q][0]:"";l.hidden=!d,d&&(l.innerHTML=`${__t(440)}${p(d)}${__t(441)}`)}xl.querySelectorAll("[data-f]").forEach(l=>{l.dataset.f!=="*"&&l.classList.toggle("off",!q.has(l.dataset.f))})}xl.querySelectorAll("[data-f]").forEach(l=>l.onclick=()=>{let d=l.dataset.f;d==="*"?$.forEach(v=>q.add(v)):q.size===$.length?(q.clear(),q.add(d)):q.has(d)?(q.delete(d),q.size||$.forEach(v=>q.add(v))):q.add(d);try{localStorage.setItem("rod_lines",JSON.stringify([...q]))}catch{}Yf(),he(),Te(),lu(),Nt=0,a()});let gu=[...document.querySelectorAll("[data-sp]")],_i=0;function Zf(l){let d=ie();l&&(It===l||_i===l)?It?(Yt=d.min,ne=d.min,It=0,_i=l):(ce=performance.now(),It=l,_i=0):l===0?(It=0,ne=null,_i=0):(Yt=d.min,ce=performance.now(),ne=d.min,It=l,_i=0),gu.forEach(v=>{let y=+v.dataset.sp;v.classList.toggle("on",y===(It||_i)||!It&&!_i&&ne==null&&y===0),v.classList.toggle("pz",!!_i&&y===_i),v.textContent=y===0?__t(442):_i===y?"\u25B6 \xD7"+y:It===y?"\u23F8 \xD7"+y:"\xD7"+y}),Nt=0,a()}gu.forEach(l=>l.onclick=()=>Zf(+l.dataset.sp)),m("#tsl").oninput=l=>{let d=+l.target.value;Yt=d,ne=d,ce=performance.now(),It===0&&!_i&&gu.forEach(v=>v.classList.remove("on")),Nt=0,a()},setInterval(()=>{ne!=null&&It&&Yt+(performance.now()-ce)/6e4*It>1560&&(Yt=240,ce=performance.now())},1e3),window.__rodSearch=l=>{let d=S(l.trim());if(!d){f.style.display="none",f._pick=null;return}let v=[],y=[];b.forEach((F,U)=>{if(!F.fams.size)return;let Y=S(F.n);Y.startsWith(d)||Y.includes(" "+d)||Y.includes("-"+d)?v.push(U):Y.includes(d)&&y.push(U)});let E=v.concat(y).slice(0,7),A=I.filter(F=>S(F.name).startsWith(d)).sort((F,U)=>U.pop-F.pop).slice(0,3),P=E.map(F=>({h:`\u{1F689} ${p(b[F].n)}<em>${[...b[F].fams].sort(D).slice(0,3).map(U=>`<em class="ls" style="background:${X[U]}">${U}</em>`).join(" ")}</em>`,go:()=>{if(Js){let U=Js;Js=!1,g.placeholder=__t(438),mu(F,U);return}w=!1,Dt=!1,z=!1,Rt=F,ct=null,Lt=null,Te(),Object.assign(s,{tx:b[F].w[0],ty:b[F].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),De(),a()}})).concat(A.map(F=>({h:`${p(F.name)}${__t(443)}`,go:()=>{Object.assign(s,{tx:F.cx,ty:F.cy,dist:x(F.size*3+14,14,60)}),a()}})));f.innerHTML=P.map((F,U)=>`<li data-i="${U}">${F.h}</li>`).join("")||__t(444),f.style.display="block",f._pick=F=>{P[F]&&(P[F].go(),f.style.display="none",g.value="",g.blur())},f.querySelectorAll("li[data-i]").forEach(F=>F.onclick=()=>f._pick(+F.dataset.i))},Yf(),Te();try{let l=new URLSearchParams(location.search).get("st");if(l){let d=S(l),v=-1,y=0;b.forEach((E,A)=>{if(!E.fams.size)return;let P=S(E.n),F=P===d?3:P.startsWith(d)||d.startsWith(P)?2:P.includes(d)||d.includes(P)?1:0;F>y&&(y=F,v=A)}),v>=0&&setTimeout(()=>{Rt=v,Te(),Object.assign(s,{tx:b[v].w[0],ty:b[v].w[1],dist:18,tilt:.5}),De(),a()},300)}}catch{}let _u={v:!1};document.addEventListener("click",l=>{!(l.target.closest&&l.target.closest("[data-halx]"))||l.target.closest("a")||(_u.v=!_u.v,Ve(!0))}),u.addEventListener("click",l=>{if(!u.classList.contains("peek")||l.target.closest("button,a,input"))return;l.stopPropagation(),l.preventDefault(),u.classList.remove("peek");let d=u.querySelector(".mn");d&&(d.textContent="\u25BE"),u.scrollTop=0},!0);let un={on:!1,cur:"now",home:new Map},vl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),za=document.createElement("nav");za.id="tabs";let u0=[["now","\u{1F552}",__t(442)],["map","\u{1F5FA}\uFE0F",__t(445)],["line","\u{1F4CA}",__t(446)],["set","\u2699\uFE0F",__t(447)]];za.innerHTML=u0.map(([l,d,v])=>`<button type="button" data-tab="${l}"><span>${d}</span><small>${v}</small></button>`).join(""),document.body.appendChild(za);let Ar=document.createElement("div");Ar.id="tabL",document.body.appendChild(Ar);let Ks=document.createElement("div");Ks.id="tabA",Ks.className="box",document.body.appendChild(Ks);let xu=(l,d)=>{l&&(un.home.has(l)||un.home.set(l,[l.parentNode,l.nextSibling]),d.appendChild(l))},Jf=()=>{for(let[l,[d,v]]of un.home)try{d.insertBefore(l,v&&v.parentNode===d?v:null)}catch{}un.home.clear()};function vu(){let l=q.size===1?[...q][0]:"",d=H.alerts.filter(y=>[...y.fams].some(E=>q.has(E))).length,v=[z,Dt,rt,w,l,d].join("|");Ar._k!==v&&(Ar._k=v,Ar.innerHTML=`<button type="button" data-tl="stats" class="${z?"on":""}">\u{1F4CA} ${__t(448)}</button><button type="button" data-tl="alr" class="${Dt?"on":""}">\u26A0\uFE0F ${d}${d===1?__t(268):__t(269)}</button>${l?`<button type="button" data-tl="line" class="${rt?"on":""}">\u{1F4CB} ${p(l)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(127)}">\u{1F4AC}</a>`,Ar.querySelectorAll("[data-tl]").forEach(y=>y.onclick=()=>{let E=y.dataset.tl;z=E==="stats",Dt=E==="alr",rt=E==="line"?l:"",w=!1,ct=null,Rt=-1,z&&(Ce.at=0),u._h="",De(),vu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let d0="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",Kf=()=>vt(new Date).ymd.replace(/-/g,"");function Va(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(d0,{cache:"no-store"}).then(l=>l.ok?l.text():null).then(l=>{if(!l)return;let d;try{d=JSON.parse(l)}catch{return}if(!(!d||!d.gen||!Array.isArray(d.days)||!d.trips||d.gen<=t.gen)){try{localStorage.setItem("rod_pack",l)}catch{return}(!t.days.includes(Kf())||t.days.indexOf(Kf())>=t.days.length-2)&&location.reload()}}).catch(()=>{})}if(setTimeout(Va,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(Va.at||0)>6*36e5&&(Va.at=Date.now(),Va())}),Va.at=Date.now(),window.__RODNEW__){let l=window.__RODNEW__,d=m("#ver");d&&d.firstChild&&d.firstChild.nodeType===3&&(d.firstChild.textContent=d.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,l.slice(8,10)+"/"+l.slice(5,7)+" "+l.slice(11,16)))}function yl(){Jf();let l=window.__L||"es",d=ni.mode;Ks.innerHTML=`<h3>${__t(447)}</h3>
      <h4>\u{1F310} ${__t(449)}</h4><div class="seg2">${[["ca","Catal\xE0"],["es","Espa\xF1ol"],[__t(187),"English"]].map(([v,y])=>`<button type="button" data-lang="${v}" class="${l===v?"on":""}">${y}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(450)}</h4><div class="seg2">${[["auto",__t(451)],["light",__t(452)],["dark",__t(453)]].map(([v,y])=>`<button type="button" data-th="${v}" class="${d===v?"on":""}">${y}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(454)}</h4><div class="seg2">${(()=>{let v="";try{v=localStorage.getItem("rod_big")||""}catch{}let y=v==="1"?"1":v==="0"?"0":"a";return[["a",__t(451)],["0","Normal"],["1",__t(455)]].map(([E,A])=>`<button type="button" data-big="${E}" class="${y===E?"on":""}">${A}</button>`).join("")})()}</div>${(()=>{let v="";try{v=localStorage.getItem("rod_big")||""}catch{}return v==="1"||v==="0"?"":`<small class="tabAhint">${__t(456)}</small>`})()}
      <h4>\u{1F514} ${__t(457)}</h4><div id="tabAbell"></div>${pl().length?"":`<small class="tabAhint">${__t(458)}</small>`}${(()=>{let v=pl();return v.length>1?`<small class="tabAhint">${__t(459)}</small><div class="alch">${v.map(y=>`<button type="button" data-al="${p(y)}" class="ln${Zs.has(y)?" off":""}" style="--c:${X[y]}">${p(y)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(460)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(461)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,Ks.querySelectorAll("[data-al]").forEach(v=>v.onclick=()=>{let y=v.dataset.al,E=pl();Zs.has(y)?Zs.delete(y):E.filter(A=>!Zs.has(A)).length>1&&Zs.add(y);try{localStorage.setItem("rod_aloff",JSON.stringify([...Zs]))}catch{}Ve(!0),yl()}),Ks.querySelectorAll("[data-big]").forEach(v=>v.onclick=()=>{let y=v.dataset.big;try{y==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",y)}catch{}window.__txt&&window.__txt(),yl(),Ve(!0)}),Ks.querySelectorAll("[data-th]").forEach(v=>v.onclick=()=>{ni.mode=v.dataset.th;try{localStorage.setItem("rod_theme",ni.mode)}catch{}ol(),yl()}),xu(m("#bell"),m("#tabAbell")),xu(m("#src"),m("#tabArt")),xu(m("#ver"),m("#tabAinf"))}function Sl(l){if(!un.on)return;let d=un.cur;if(un.cur=l,document.documentElement.dataset.tab=l,window.__mapHidden=l!=="map",za.querySelectorAll("[data-tab]").forEach(v=>v.classList.toggle("on",v.dataset.tab===l)),l==="line")(ct||Rt>=0)&&(un.keep={t:ct,s:Rt,sk:un.sk}),!z&&!Dt&&!rt&&!w&&(z=!0,Ce.at=0),ct=null,Rt=-1,u._h="",De(),vu();else if(d==="line"){z=Dt=w=!1,rt="";let v=un.keep;un.keep=null,v&&l==="map"&&!ct&&Rt<0&&(ct=v.t,Rt=v.s,un.sk=v.sk),u._h="",De()}l==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{au()}catch{}dispatchEvent(new Event("resize"))})),l==="set"&&yl(),l==="now"&&(Ve(!0),requestAnimationFrame(pu)),Nt=0,a()}za.onclick=l=>{let d=l.target.closest("[data-tab]");d&&Sl(d.dataset.tab)},window.__rodTabSync=()=>{if(!un.on)return;let l=ct?"t"+(ct.num||ct.vtid):Rt>=0?"s"+Rt:"",d=l!==un.sk;un.sk=l,l&&d&&un.cur!=="map"?Sl("map"):(Dt||rt||w)&&un.cur!=="line"&&un.cur!=="map"&&Sl("line"),un.cur==="line"&&vu()};function yu(){let l=vl.matches||document.documentElement.classList.contains("cap");l!==un.on&&(un.on=l,document.documentElement.classList.toggle("tabmode",l),l||(window.__mapHidden=!1),l?Sl("now"):(delete document.documentElement.dataset.tab,Jf()))}vl.addEventListener?vl.addEventListener("change",yu):vl.addListener(yu),yu();{let l=m("#rc"),d=()=>document.documentElement.style.setProperty("--rch",Math.round(l.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(d).observe(l),d()}window.__rod={ONB:je,alertForMe:Hf,whereAmI:uu,departuresFor:qs,DEPS:zn,tripByNum:Na,delayOf:M,TID:ht,SID:Wt,byDay:Q,get days(){return t.days},get hist(){return Ce},get past(){return me.cur},get cols(){return an.mesh?an.mesh.count:-1},get dist(){return r.dist},get follow(){return Lt},get selTrip(){return ct},ST:b,TR:at,FAM:$,act:()=>tt,setSpeed:Zf,RT:H,pollRT:le,nowState:ie,posAt:Hs,activeTrips:Ms,LL:St,select:l=>{ct=l,De()}}}var _a=window.__DATA__;var Ne=i=>document.querySelector(i),vs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Yn=(i,t,e)=>Math.min(e,Math.max(t,i)),nf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ti=Ne("#c"),il=new Dh({canvas:ti,antialias:!0});il.setPixelRatio(Math.min(devicePixelRatio||1,2));var ys=new co;ys.background=new fe(15659509);var Yh=35,ns=new Xn(Yh,1,2,1500);ys.add(new Do(16777215,9080992,1));var gg=new Uo(16777215,.9);gg.position.set(-40,-70,90);ys.add(gg);var ts=100/_a.w,tl=_a.w/2,el=_a.h/2,pn=[],sf=new Pi;ys.add(sf);var Hh=new or({color:16777215,transparent:!0,opacity:.55});for(let i of _a.m){let t=new Pi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let x of i.g){let S=x.map(m=>{let p=[];for(let O=0;O<m.length;O+=2)p.push(new zt((m[O]-tl)*ts,(m[O+1]-el)*ts));return p.length>1&&p[0].equals(p[p.length-1])&&p.pop(),p}).filter(m=>m.length>=3);if(!S.length)continue;let I=new ia(S[0]);for(let m=1;m<S.length;m++)I.holes.push(new cr(S[m]));e.push(I);for(let m of S[0])s=Math.min(s,m.x),r=Math.max(r,m.x),a=Math.min(a,m.y),o=Math.max(o,m.y);for(let m of S)n.push(new go(new _n().setFromPoints(m.map(p=>new W(p.x,p.y,0))),Hh))}if(!e.length)continue;let c;try{c=new Ao(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new Io({color:13421772}),u=new Rn(c,h);t.add(u);let g=new Pi;n.forEach(x=>g.add(x)),g.position.z=.04,sf.add(g),t.scale.z=.01,sf.add(t);let f={og:g,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:h,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=f,pn.push(f)}var TE=pn.map(i=>i.mesh),cg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},_g=0,xg=0;for(let i of pn){for(let t of i.rings)_g+=cg(t[0])-t.slice(1).reduce((e,n)=>e+cg(n),0);xg+=i.area}var kM=Math.sqrt(xg/_g),zh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},vg={"08":__t(462),17:__t(463),25:__t(464),43:__t(465)},uf="sqrt",df="pop",tf=0,rf=0,pa=1,jo=1,zM={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},af=i=>df==="pop"?i.pop:i.pop/i.area,kh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new fe(i));function VM(i){i=Yn(i,0,1)*(kh.length-1);let t=Math.min(Math.floor(i),kh.length-2);return kh[t].clone().lerp(kh[t+1],i-t)}var ma=i=>i>=100?vs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function $M(){rf=0;for(let i of pn)rf+=i.pop;[...pn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...pn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Mg()}var yg=new fe("#d3d8e2"),Sg=new fe("#eceff3");window.__mapTheme=i=>{ys.background=new fe(i?856345:15659509),Sg.set(i?"#2b3242":"#eceff3"),yg.set(i?"#1a1f29":"#d3d8e2"),Hh.color.set(i?856345:16777215),Hh.opacity=i?.7:.55,ff.color.set(i?329483:2764864),pf.color.set(i?9081766:16777215);for(let t of pn)t.base&&Zh(t);Pn()};function Zh(i){i.mat.color.copy(i.base).lerp(Sg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(yg,.8)}function Mg(){pa=1,jo=1e12;for(let e of pn){let n=af(e);pa=Math.max(pa,n),jo=Math.min(jo,n)}let i=Math.log10(Math.max(jo,.01)),t=Math.log10(pa);for(let e of pn)e.base=VM((Math.log10(Math.max(af(e),.01))-i)/(t-i)),Zh(e);Ne("#lmin").textContent=ma(jo),Ne("#lmax").textContent=ma(pa),Ne("#lname").textContent=df==="pop"?__t(466):__t(467),Jh()}function Jh(){let i=zM[uf],t=i(pa),e=24*tf;for(let n of pn)n.zt=tf<=.001?.01:Math.max(.12*Math.min(1,tf),e*i(af(n))/t)*(n.inF?1:.1);Pn()}var hg=Object.fromEntries(pn.map(i=>[i.code,i])),Vh=[],bg=[];for(let i of _a.bd){let t=hg[i.a],e=hg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)bg.push((i.p[n]-tl)*ts,(i.p[n+1]-el)*ts,0,(i.p[n+2]-tl)*ts,(i.p[n+3]-el)*ts,0),Vh.push(t,e)}var Gh=new _s;Gh.setPositions(bg);var ff=new Ji({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),pf=new Ji({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[ff,pf].forEach((i,t)=>{let e=new gr(Gh,i);e.frustumCulled=!1,e.renderOrder=10+t,ys.add(e)});function HM(){let i=Gh.attributes.instanceStart.data.array;for(let t=0;t<Vh.length;t+=2){let e=Math.max(Vh[t].z,Vh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Gh.attributes.instanceStart.data.needsUpdate=!0}var Wh={};for(let i of Object.keys(zh)){let t=pn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,c=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),c=Math.max(c,u.cy);let h=document.createElement("div");h.className="plab",h.textContent=zh[i],h.title=__t(468)+vg[i],h.onclick=()=>tb("pr:"+i),document.body.appendChild(h),Wh[i]={el:h,p:new W(n/e,s/e,0),cx:(r+a)/2,cy:(o+c)/2,ext:Math.max(a-r,c-o),ext2:[a-r,c-o],area:e,name:zh[i]}}var ef=new W;function GM(){for(let i in Wh){let t=Wh[i];ef.copy(t.p).project(ns),t.el.style.transform=`translate(-50%,-50%) translate(${(ef.x*.5+.5)*innerWidth}px,${(-ef.y*.5+.5)*innerHeight}px)`}}var yn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...yn};function WM(){let i=innerWidth/innerHeight,t=Math.tan(Yh*Math.PI/360);return Math.max(_a.h*ts*1.1,100*1.1/i)/(2*t)}var XM=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,Pn()});function mf(){Object.assign(ye,{tilt:0,yaw:0,dist:WM(),tx:0,ty:0}),Pn()}function qM(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=yn;ns.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ns.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ns.lookAt(n,s,0)}var Qo=!0,ug=performance.now(),nl=new Map;function Pn(){Qo=!0}function wg(i){requestAnimationFrame(wg);let t=Yn((i-ug)/1e3,0,.05);ug=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(yn)){let r=ye[s]-yn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(yn[s]+=r*e,n=!0):yn[s]=ye[s]}for(let s of pn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of nl){let a=(i-r)/1800;a>=1?(nl.delete(s),Sr(s)):Sr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Qo=!0),window.__mapHidden){Qo=!0;return}if(n||Qo){XM.style.transform=`rotate(${yn.yaw}rad) scaleY(${(.55+.45*Math.cos(yn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(469):__t(470))}qM(),HM(),GM(),window.__rodFrame&&window.__rodFrame(),il.render(ys,ns),Qo=n,Ne("#tilt").value=Math.round(ye.tilt*180/Math.PI),Ne("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function Eg(){il.setSize(innerWidth,innerHeight,!1),ns.aspect=innerWidth/innerHeight,ns.updateProjectionMatrix(),ff.resolution.set(innerWidth,innerHeight),pf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Pn()}addEventListener("resize",()=>{Eg(),en.length&&Vs()});ti.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=Yn(ye.dist*Math.exp(e*.01),6,400):ye.tilt=Yn(ye.tilt+e*.002,0,1.32);Pn()},{passive:!1});ti.addEventListener("contextmenu",i=>i.preventDefault());var es=new Map,oi=null,xr=0,of=0,lf=0;var Xh=null;ti.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),en.length&&setTimeout(Vs,50)),ti.setPointerCapture(i.pointerId),es.set(i.pointerId,{x:i.clientX,y:i.clientY}),es.size===1&&(oi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),es.size===2){let[t,e]=[...es.values()];xr=Math.hypot(t.x-e.x,t.y-e.y),of=Math.atan2(e.y-t.y,e.x-t.x),lf=(t.y+e.y)/2,Xh={mode:null,rot:0,sc:0,tl:0},oi&&(oi.multi=!0)}gf()});ti.addEventListener("pointermove",i=>{let t=es.get(i.pointerId);if(!t){xs={x:i.clientX,y:i.clientY},cf||(cf=requestAnimationFrame(ZM));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,es.size===2){let[s,r]=[...es.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=o-of;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let u=xr?a-xr:0,g=c-lf,f=Xh||(Xh={mode:null,rot:0,sc:0,tl:0});f.rot+=h,f.sc+=u,f.tl+=g,f.mode?f.mode==="zoom"&&Math.abs(f.rot)>.45&&(f.mode="rotate"):Math.abs(f.rot)>.3?f.mode="rotate":Math.abs(f.tl)>30&&Math.abs(f.sc)<18?f.mode="tilt":Math.abs(f.sc)>12&&(f.mode="zoom"),(f.mode==="zoom"||f.mode==="rotate")&&xr&&(ye.dist=Yn(ye.dist*xr/a,6,400)),f.mode==="rotate"&&(ye.yaw+=h,yn.yaw=ye.yaw),f.mode==="tilt"&&(ye.tilt=Yn(ye.tilt-g*.006,0,1.32),yn.tilt=ye.tilt),xr=a,of=o,lf=c,Pn();return}if(oi.moved+=Math.abs(e)+Math.abs(n),oi.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=Yn(ye.tilt+n*.004,0,1.32),yn.yaw=ye.yaw,yn.tilt=ye.tilt;else{let s=2*yn.dist*Math.tan(Yh*Math.PI/360)/innerHeight,r=Math.sin(yn.yaw),a=Math.cos(yn.yaw),o=1/Math.max(Math.cos(yn.tilt),.3);ye.tx=Yn(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=Yn(ye.ty-r*e*s+a*n*s*o,-70,70),yn.tx=ye.tx,yn.ty=ye.ty}Pn()});var Tg=i=>{let t=oi&&!oi.rot&&!oi.multi&&oi.moved<(oi.touch?12:6)&&i.type==="pointerup"&&es.size===1,e=oi&&oi.touch;es.delete(i.pointerId),xr=0,Xh=null,es.size||(oi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ti.addEventListener("pointerup",Tg);ti.addEventListener("pointercancel",Tg);ti.addEventListener("dblclick",mf);addEventListener("keydown",i=>{i.key==="Alt"&&(ti.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ti.style.cursor="")});addEventListener("blur",()=>{ti.style.cursor=""});var YM=new Oo,dg=new zt,xs=null,cf=0,vr=null;function ZM(){if(cf=0,!xs||oi)return;dg.set(xs.x/innerWidth*2-1,-(xs.y/innerHeight)*2+1),YM.setFromCamera(dg,ns);let i=null;if(i!==vr){let e=vr;vr=i,e&&Sr(e),i&&Sr(i),Pn()}let t=window.__rodHover&&window.__rodHover(xs.x,xs.y);if(t){_r.innerHTML=t,_r.style.display="block";let e=_r.offsetWidth,n=_r.offsetHeight;_r.style.left=Yn(xs.x+14,6,innerWidth-e-6)+"px",_r.style.top=Yn(xs.y+14,6,innerHeight-n-6)+"px",ti.style.cursor="pointer"}else gf(),ti.style.cursor=""}ti.addEventListener("pointerleave",()=>{if(xs=null,vr){let i=vr;vr=null,Sr(i),Pn()}gf()});var _r=Ne("#tip");function gf(){_r.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{df=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Mg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{uf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Jh()});Ne("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,Pn()};Ne("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,Pn()};Ne("#zin").onclick=()=>{ye.dist=Yn(ye.dist*.75,6,400),Pn()};Ne("#zout").onclick=()=>{ye.dist=Yn(ye.dist/.75,6,400),Pn()};Ne("#rst").onclick=mf;var fg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],en=[],pg={},JM=i=>pg[i]||(pg[i]=new or({color:i}));function Ag(i,t){i.og.children.forEach(e=>e.material=t?JM(t):Hh)}function Sr(i,t=0){let e=i.mat.emissive;i===vr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function _f(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,o=Math.tan(Yh*Math.PI/360),c=i.length===1?Yn(i[0].size*3.2+14,14,120):Yn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Pn()}var zs=Ne("#q"),fi=Ne("#list"),tn=Ne("#mcs");function Kh(i,t=!0){if(fi.style.display="none",zs.value="",!i.sel){en.length>=6&&Cg(en[0].o,!0);let e=new Set(en.map(s=>s.color)),n=fg.find(s=>!e.has(s))||fg[0];i.sel={o:i,color:n,tint:new fe(n).multiplyScalar(.12)},en.push(i.sel),Ag(i,n)}tn.classList.contains("min")&&sl(!1),nl.set(i,performance.now()),Sr(i),t&&_f([i],Math.max(ye.tilt,.9)),Vs()}function Cg(i,t){let e=en.indexOf(i.sel);e>=0&&en.splice(e,1),i.sel=null,Ag(i,null),Sr(i),Pn(),t||Vs()}function Rg(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=en.map(u=>{let g=1e9,f=-1e9,x=1e9,S=-1e9;for(let I of u.o.rings)for(let m=0;m<I[0].length;m+=2)g=Math.min(g,I[0][m]),f=Math.max(f,I[0][m]),x=Math.min(x,I[0][m+1]),S=Math.max(S,I[0][m+1]);return{x0:g,x1:f,y0:x,y1:S}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;en.forEach((u,g)=>{let f=r[g],x=(f.x0+f.x1)/2,S=(f.y0+f.y1)/2;s.beginPath();for(let I of u.o.rings)for(let m of I)for(let p=0;p<m.length;p+=2){let O=e/2+(m[p]-x)*o,B=n/2-(m[p+1]-S)*o;p?s.lineTo(O,B):s.moveTo(O,B),p===m.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let c=o/kM,h=[.5,1,2,5,10,20,50,100].find(u=>u*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function Vs(){if(!en.length){tn.innerHTML="",tn.style.display="none",sl(!1);return}if(tn.style.display="flex",innerWidth<=640){let e=Ne("#inf").getBoundingClientRect().bottom;tn.style.top=Math.round(e+8)+"px",tn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ne("#rc").classList.contains("min")?.7:.4),Ne("#rc").getBoundingClientRect().top-e-16))+"px",tn.style.width=""}else if(innerHeight<=500){let e=Ne("#inf").getBoundingClientRect().bottom;tn.style.top=Math.round(e+8)+"px",tn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",tn.style.width="min(290px, 40vw)"}else tn.style.top="",tn.style.maxHeight="",tn.style.width="";let i=en.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${zh[s.pr]}</em></div><div class="mb">${vs(s.pop)}${__t(476)}${ma(s.area)} km\xB2 \xB7 ${ma(s.pop/s.area)}${__t(477)}${s.rankP}${__t(478)}`}).join("");if(en.length>1){let e=s=>Math.max(...en.map(s)),n=[[__t(479),s=>s.o.pop,vs],[__t(480),s=>s.o.area,ma],[__t(481),s=>s.o.pop/s.o.area,ma]];if(i+=`${__t(482)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${en.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),en.length===2){let[s,r]=en.map(h=>h.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],c=(h,u)=>(h>=u?h/u:u/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(483)}${c(a.pop,o.pop)}${__t(484)}${o.name}${__t(485)}${c(a.area,o.area)}\xD7 ${a.area>=o.area?__t(486):__t(487)}.</small>`}i+="</div>"}tn.innerHTML=i,tn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Cg(en[+e.dataset.x].o)}),tn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>_f([en[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=en[+e.dataset.i].o;nl.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=en.splice(s,1);en.splice(r,0,a),Vs();let o=Ne("#sil");o&&o.classList.add("flash")}}});let t=Ne("#sil");t&&Rg(t)}zs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(zs.value);return}let i=nf(zs.value.trim());if(!i){fi.style.display="none";return}let t=[],e=[];for(let s of pn){let r=nf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);fi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${vs(s.pop)}</em></li>`).join("")||__t(444),fi.style.display="block",fi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Kh(n[+s.dataset.i])),fi._r=n});zs.addEventListener("keydown",i=>{i.key==="Enter"&&fi._pick?fi._pick(0):i.key==="Enter"&&fi._r&&fi._r[0]&&Kh(fi._r[0]),i.key==="Escape"&&(zs.value="",fi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==zs&&Ig()});var mg=0;addEventListener("resize",()=>{clearTimeout(mg),mg=setTimeout(()=>{let i=Ne("#sil");i&&Rg(i)},120)});var qh=null,hf=Ne("#chip");function KM(i,t,e=.8){qh={codes:new Set(i.map(n=>n.code)),label:t},pn.forEach(n=>{n.inF=qh.codes.has(n.code),Zh(n)}),hf.innerHTML=`${__t(488)}${t}</b> \xB7 ${i.length}${i.length===1?__t(489):__t(490)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,hf.style.display="flex",Ne("#chx").onclick=Ig,Jh(),_f(i,e),i.slice(0,40).forEach(n=>nl.set(n,performance.now()))}function Ig(){qh&&(qh=null,pn.forEach(i=>{i.inF=!0,Zh(i)}),hf.style.display="none",Jh())}var jM="prov";function QM(i){let t=[...pn].sort((a,o)=>o.pop-a.pop),e=[...pn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[pn.filter(a=>a.pr===s),vg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(491)]:[e.slice(0,10),__t(492)];if(n==="low")return s==="pop"?[t.slice(-10),__t(493)]:[e.slice(-10),__t(494)];if(n==="size")return[pn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${vs(+s)}${__t(495)}`:+s==0?`${__t(496)}${vs(+r)}${__t(497)}`:`${vs(+s)} \u2013 ${vs(+r-1)}${__t(497)}`];if(n==="n50"){let a=0,o=0;for(let c of t)if(a+=c.pop,o++,a>=rf/2)break;return[t.slice(0,o),`${__t(498)}`]}return[[],""]}function tb(i){let[t,e]=QM(i);t.length&&KM(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{jM=i.dataset.tab,Ne("#dbody").scrollTop=0});var yr=Ne("#rc"),$h=Ne("#mcstab");function ga(i){yr.classList.toggle("min",i),Ne("#rcgrab span").textContent=i?__t(540):__t(541),en.length&&Vs()}function sl(i){tn.classList.toggle("min",i),tn.style.transform="",tn.style.opacity="",$h.classList.toggle("on",i&&en.length>0),i&&($h.textContent=`\u25B8 ${en.length} ${en.length===1?"ficha":"fichas"}`,$h.style.top=tn.style.top||"124px")}function xf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!jh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(o,c)>10&&(s.lock=Math.abs(o)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(o,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?o:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ne("#rcgrab").onclick=()=>ga(!yr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&ga(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Pg=()=>innerWidth>640;xf(yr,{axis:"y",onEnd:(i,t)=>{if(!Pg())if(t>40&&!yr.classList.contains("min")){let e=Ne("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ga(!0)}else t<-30&&yr.classList.contains("min")&&ga(!1)}});xf(yr,{axis:"x",onEnd:i=>{Pg()&&(i>50?ga(!0):i<-30&&yr.classList.contains("min")&&ga(!1))}});xf(tn,{axis:"x",onMove:i=>{i<0&&(tn.classList.add("sw"),tn.style.transform=`translateX(${i}px)`,tn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{tn.classList.remove("sw"),i<-60?(sl(!0),window.__rodHide&&!en.length&&window.__rodHide()):(tn.style.transform="",tn.style.opacity="")}});$h.onclick=()=>{sl(!1),Vs()};Ne("#dtoggle").onclick=()=>{let i=Ne("#dp").classList.toggle("open");Ne("#rc").classList.toggle("dopen",i),Ne("#dtoggle").textContent=i?jh.matches&&innerWidth<=640?__t(542):__t(543):__t(544),window.__rodCard&&window.__rodCard()};var jh=matchMedia("(max-width:640px), (max-height:500px)");function Lg(){let i=Ne("#leg");jh.matches?Ne("#rc").insertBefore(i,Ne("#dtoggle")):document.body.appendChild(i),en.length&&Vs()}jh.addEventListener("change",Lg);Lg();Eg();$M();mf();Object.assign(yn,ye);for(let i of pn)i.z=.01;requestAnimationFrame(wg);lg({scene:ys,camera:ns,renderer:il,goal:ye,cur:yn,invalidate:Pn,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-tl)*ts,ty:(t-el)*ts,dist:e,tilt:n}),Pn()},K:ts,CX:tl,CY:el,mcs:tn,q:zs,list:fi,munis:pn,select:Kh,norm:nf,fmt:vs,clamp:Yn,mcsMin:sl});window.__app={scene:ys,renderer:il,camera:ns,munis:pn,labs:Wh,goal:ye,cur:yn,select:Kh,get mode(){return uf}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
