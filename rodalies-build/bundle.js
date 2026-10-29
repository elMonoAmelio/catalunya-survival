(()=>{var Hp=0,dd=1,Gp=2;var Vo=1,Wp=2,oa=3,Us=0,Kn=1,Zi=2,Ji=0,la=1,fd=2,pd=3,md=4,Xp=5;var ur=100,qp=101,Yp=102,Zp=103,Jp=104,Kp=200,jp=201,Qp=202,tm=203,gd=204,_d=205,em=206,nm=207,im=208,sm=209,rm=210,am=211,om=212,lm=213,cm=214,nc=0,ic=1,sc=2,Yr=3,rc=4,ac=5,oc=6,lc=7,Hc=0,hm=1,um=2,Di=0,xd=1,vd=2,yd=3,Sd=4,Md=5,bd=6,wd=7;var Ed=300,Fs=301,dr=302,Gc=303,Wc=304,Ho=306,cc=1e3,Hi=1001,hc=1002,An=1003,dm=1004;var Go=1005;var Un=1006,Xc=1007;var Os=1008;var ri=1009,Td=1010,Ad=1011,ca=1012,qc=1013,Ni=1014,vi=1015,Ui=1016,Yc=1017,Zc=1018,ha=1020,Cd=35902,Rd=35899,Id=1021,Pd=1022,yi=1023,Wi=1026,Bs=1027,Jc=1028,Kc=1029,ks=1030,jc=1031;var Qc=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,th=35840,eh=35841,nh=35842,ih=35843,sh=36196,rh=37492,ah=37496,oh=37488,lh=37489,Zo=37490,ch=37491,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,_h=37815,xh=37816,vh=37817,yh=37818,Sh=37819,Mh=37820,bh=37821,wh=36492,Eh=36494,Th=36495,Ah=36283,Ch=36284,Jo=36285,Rh=36286;var ao=2300,uc=2301,tc=2302,Qu=2303,td=2400,ed=2401,nd=2402;var fm=3200;var Ih=0,pm=1,_s="",ci="srgb",oo="srgb-linear",lo="linear",Je="srgb";var ec=7680;var mm=519,gm=512,_m=513,xm=514,Ph=515,vm=516,ym=517,Lh=518,Sm=519,Ld=35044;var Dd="300 es",Ii=2e3,Zr=2001;function R0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mm(){let i=co("canvas");return i.style.display="block",i}var rp={},Jr=null;function ho(...i){let t="THREE."+i.shift();Jr?Jr("log",t,...i):console.log(t,...i)}function bm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function pe(...i){i=bm(i);let t="THREE."+i.shift();if(Jr)Jr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ve(...i){i=bm(i);let t="THREE."+i.shift();if(Jr)Jr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function sr(...i){let t=i.join(" ");t in rp||(rp[t]=!0,pe(...i))}function wm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Em={[nc]:ic,[sc]:oc,[rc]:lc,[Yr]:ac,[ic]:nc,[oc]:sc,[lc]:rc,[ac]:Yr},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,no=Math.PI/180,Kr=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Nd(i,t){return(i%t+t)%t}function P0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function L0(i,t,e){return i!==t?(e-i)/(t-i):0}function io(i,t,e){return(1-e)*i+e*t}function D0(i,t,e,n){return io(i,t,1-Math.exp(-e*n))}function N0(i,t=1){return t-Math.abs(Nd(i,t*2)-t)}function U0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function F0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function O0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function B0(i,t){return i+Math.random()*(t-i)}function k0(i){return i*(.5-Math.random())}function z0(i){i!==void 0&&(ap=i);let t=ap+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $0(i){return i*no}function V0(i){return i*Kr}function H0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function G0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function W0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function X0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),x=r((t-n)/2),f=a((t-n)/2),y=r((n-t)/2),S=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*x,c*f,o*h);break;case"YZY":i.set(c*f,o*u,c*x,o*h);break;case"ZXZ":i.set(c*x,c*f,o*u,o*h);break;case"XZX":i.set(o*u,c*S,c*y,o*h);break;case"YXY":i.set(c*y,o*u,c*S,o*h);break;case"ZYZ":i.set(c*S,c*y,o*u,o*h);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ud={DEG2RAD:no,RAD2DEG:Kr,generateUUID:Gi,clamp:Ee,euclideanModulo:Nd,mapLinear:P0,inverseLerp:L0,lerp:io,damp:D0,pingpong:N0,smoothstep:U0,smootherstep:F0,randInt:O0,randFloat:B0,randFloatSpread:k0,seededRandom:z0,degToRad:$0,radToDeg:V0,isPowerOfTwo:H0,ceilPowerOfTwo:G0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:Qe,denormalize:Ri},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],x=n[s+3],f=r[a+0],y=r[a+1],S=r[a+2],I=r[a+3];if(x!==I||c!==f||h!==y||u!==S){let m=c*f+h*y+u*S+x*I;m<0&&(f=-f,y=-y,S=-S,I=-I,m=-m);let p=1-o;if(m<.9995){let O=Math.acos(m),B=Math.sin(O);p=Math.sin(p*O)/B,o=Math.sin(o*O)/B,c=c*p+f*o,h=h*p+y*o,u=u*p+S*o,x=x*p+I*o}else{c=c*p+f*o,h=h*p+y*o,u=u*p+S*o,x=x*p+I*o;let O=1/Math.sqrt(c*c+h*h+u*u+x*x);c*=O,h*=O,u*=O,x*=O}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=x}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],x=r[a],f=r[a+1],y=r[a+2],S=r[a+3];return t[e]=o*S+u*x+c*y-h*f,t[e+1]=c*S+u*f+h*x-o*y,t[e+2]=h*S+u*y+o*f-c*x,t[e+3]=u*S-o*x-c*f-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),x=o(r/2),f=c(n/2),y=c(s/2),S=c(r/2);switch(a){case"XYZ":this._x=f*u*x+h*y*S,this._y=h*y*x-f*u*S,this._z=h*u*S+f*y*x,this._w=h*u*x-f*y*S;break;case"YXZ":this._x=f*u*x+h*y*S,this._y=h*y*x-f*u*S,this._z=h*u*S-f*y*x,this._w=h*u*x+f*y*S;break;case"ZXY":this._x=f*u*x-h*y*S,this._y=h*y*x+f*u*S,this._z=h*u*S+f*y*x,this._w=h*u*x-f*y*S;break;case"ZYX":this._x=f*u*x-h*y*S,this._y=h*y*x+f*u*S,this._z=h*u*S-f*y*x,this._w=h*u*x+f*y*S;break;case"YZX":this._x=f*u*x+h*y*S,this._y=h*y*x+f*u*S,this._z=h*u*S-f*y*x,this._w=h*u*x-f*y*S;break;case"XZY":this._x=f*u*x-h*y*S,this._y=h*y*x-f*u*S,this._z=h*u*S+f*y*x,this._w=h*u*x+f*y*S;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],x=e[10],f=n+o+x;if(f>0){let y=.5/Math.sqrt(f+1);this._w=.25/y,this._x=(u-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>o&&n>x){let y=2*Math.sqrt(1+n-o-x);this._w=(u-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(o>x){let y=2*Math.sqrt(1+o-n-x);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+u)/y}else{let y=2*Math.sqrt(1+x-n-o);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+u)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(op.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(op.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),x=2*(r*n-a*e);return this.x=e+c*h+a*x-o*u,this.y=n+c*u+o*h-r*x,this.z=s+c*x+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Au.copy(this).projectOnVector(t),this.sub(Au)}reflect(t){return this.sub(Au.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Au=new X,op=new qi,be=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],x=n[7],f=n[2],y=n[5],S=n[8],I=s[0],m=s[3],p=s[6],O=s[1],B=s[4],R=s[7],w=s[2],U=s[5],G=s[8];return r[0]=a*I+o*O+c*w,r[3]=a*m+o*B+c*U,r[6]=a*p+o*R+c*G,r[1]=h*I+u*O+x*w,r[4]=h*m+u*B+x*U,r[7]=h*p+u*R+x*G,r[2]=f*I+y*O+S*w,r[5]=f*m+y*B+S*U,r[8]=f*p+y*R+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],x=u*a-o*h,f=o*c-u*r,y=h*r-a*c,S=e*x+n*f+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/S;return t[0]=x*I,t[1]=(s*h-u*n)*I,t[2]=(o*n-s*a)*I,t[3]=f*I,t[4]=(u*e-s*c)*I,t[5]=(s*r-o*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cu.makeScale(t,e)),this}rotate(t){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cu.makeRotation(-t)),this}translate(t,e){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cu=new be,lp=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q0(){let i={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oo]:{primaries:t,whitePoint:n,transfer:lo,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:n,transfer:Je,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),i}var Be=q0();function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pr,dc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pr===void 0&&(Pr=co("canvas")),Pr.width=t.width,Pr.height=t.height;let s=Pr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Pr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ms(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Y0=0,jr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ru(s[a].image)):r.push(Ru(s[a]))}else r=Ru(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ru(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}var Z0=0,Iu=new X,ni=class i extends Xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hi,s=Hi,r=Un,a=Os,o=yi,c=ri,h=i.DEFAULT_ANISOTROPY,u=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Gi(),this.name="",this.source=new jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){pe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){pe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Ed;ni.DEFAULT_ANISOTROPY=1;var Ke=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],x=c[8],f=c[1],y=c[5],S=c[9],I=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(x-I)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(x+I)<.1&&Math.abs(S+m)<.1&&Math.abs(h+y+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(h+1)/2,R=(y+1)/2,w=(p+1)/2,U=(u+f)/4,G=(x+I)/4,A=(S+m)/4;return B>R&&B>w?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=U/n,r=G/n):R>w?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=U/s,r=A/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=G/r,s=A/r),this.set(n,s,r,e),this}let O=Math.sqrt((m-S)*(m-S)+(x-I)*(x-I)+(f-u)*(f-u));return Math.abs(O)<.001&&(O=1),this.x=(m-S)/O,this.y=(x-I)/O,this.z=(f-u)/O,this.w=Math.acos((h+y+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fc=class extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ni(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new jr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends fc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends ni{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pc=class extends ni{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,h,u,x,f,y,S,I,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,x,f,y,S,I,m)}set(t,e,n,s,r,a,o,c,h,u,x,f,y,S,I,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=x,p[14]=f,p[3]=y,p[7]=S,p[11]=I,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Lr.setFromMatrixColumn(t,0).length(),r=1/Lr.setFromMatrixColumn(t,1).length(),a=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),x=Math.sin(r);if(t.order==="XYZ"){let f=a*u,y=a*x,S=o*u,I=o*x;e[0]=c*u,e[4]=-c*x,e[8]=h,e[1]=y+S*h,e[5]=f-I*h,e[9]=-o*c,e[2]=I-f*h,e[6]=S+y*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,y=c*x,S=h*u,I=h*x;e[0]=f+I*o,e[4]=S*o-y,e[8]=a*h,e[1]=a*x,e[5]=a*u,e[9]=-o,e[2]=y*o-S,e[6]=I+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,y=c*x,S=h*u,I=h*x;e[0]=f-I*o,e[4]=-a*x,e[8]=S+y*o,e[1]=y+S*o,e[5]=a*u,e[9]=I-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,y=a*x,S=o*u,I=o*x;e[0]=c*u,e[4]=S*h-y,e[8]=f*h+I,e[1]=c*x,e[5]=I*h+f,e[9]=y*h-S,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,y=a*h,S=o*c,I=o*h;e[0]=c*u,e[4]=I-f*x,e[8]=S*x+y,e[1]=x,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=y*x+S,e[10]=f-I*x}else if(t.order==="XZY"){let f=a*c,y=a*h,S=o*c,I=o*h;e[0]=c*u,e[4]=-x,e[8]=h*u,e[1]=f*x+I,e[5]=a*u,e[9]=y*x-S,e[2]=S*x-y,e[6]=o*u,e[10]=I*x+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J0,t,K0)}lookAt(t,e,n){let s=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ws.crossVectors(n,oi),ws.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ws.crossVectors(n,oi)),ws.normalize(),Al.crossVectors(oi,ws),s[0]=ws.x,s[4]=Al.x,s[8]=oi.x,s[1]=ws.y,s[5]=Al.y,s[9]=oi.y,s[2]=ws.z,s[6]=Al.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],x=n[5],f=n[9],y=n[13],S=n[2],I=n[6],m=n[10],p=n[14],O=n[3],B=n[7],R=n[11],w=n[15],U=s[0],G=s[4],A=s[8],N=s[12],V=s[1],q=s[5],et=s[9],rt=s[13],j=s[2],Q=s[6],ht=s[10],ft=s[14],Tt=s[3],mt=s[7],Mt=s[11],St=s[15];return r[0]=a*U+o*V+c*j+h*Tt,r[4]=a*G+o*q+c*Q+h*mt,r[8]=a*A+o*et+c*ht+h*Mt,r[12]=a*N+o*rt+c*ft+h*St,r[1]=u*U+x*V+f*j+y*Tt,r[5]=u*G+x*q+f*Q+y*mt,r[9]=u*A+x*et+f*ht+y*Mt,r[13]=u*N+x*rt+f*ft+y*St,r[2]=S*U+I*V+m*j+p*Tt,r[6]=S*G+I*q+m*Q+p*mt,r[10]=S*A+I*et+m*ht+p*Mt,r[14]=S*N+I*rt+m*ft+p*St,r[3]=O*U+B*V+R*j+w*Tt,r[7]=O*G+B*q+R*Q+w*mt,r[11]=O*A+B*et+R*ht+w*Mt,r[15]=O*N+B*rt+R*ft+w*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],x=t[6],f=t[10],y=t[14],S=t[3],I=t[7],m=t[11],p=t[15],O=c*y-h*f,B=o*y-h*x,R=o*f-c*x,w=a*y-h*u,U=a*f-c*u,G=a*x-o*u;return e*(I*O-m*B+p*R)-n*(S*O-m*w+p*U)+s*(S*B-I*w+p*G)-r*(S*R-I*U+m*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],x=t[9],f=t[10],y=t[11],S=t[12],I=t[13],m=t[14],p=t[15],O=e*o-n*a,B=e*c-s*a,R=e*h-r*a,w=n*c-s*o,U=n*h-r*o,G=s*h-r*c,A=u*I-x*S,N=u*m-f*S,V=u*p-y*S,q=x*m-f*I,et=x*p-y*I,rt=f*p-y*m,j=O*rt-B*et+R*q+w*V-U*N+G*A;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/j;return t[0]=(o*rt-c*et+h*q)*Q,t[1]=(s*et-n*rt-r*q)*Q,t[2]=(I*G-m*U+p*w)*Q,t[3]=(f*U-x*G-y*w)*Q,t[4]=(c*V-a*rt-h*N)*Q,t[5]=(e*rt-s*V+r*N)*Q,t[6]=(m*R-S*G-p*B)*Q,t[7]=(u*G-f*R+y*B)*Q,t[8]=(a*et-o*V+h*A)*Q,t[9]=(n*V-e*et-r*A)*Q,t[10]=(S*U-I*R+p*O)*Q,t[11]=(x*R-u*U-y*O)*Q,t[12]=(o*N-a*q-c*A)*Q,t[13]=(e*q-n*N+s*A)*Q,t[14]=(I*B-S*w-m*O)*Q,t[15]=(u*w-x*B+f*O)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,x=o+o,f=r*h,y=r*u,S=r*x,I=a*u,m=a*x,p=o*x,O=c*h,B=c*u,R=c*x,w=n.x,U=n.y,G=n.z;return s[0]=(1-(I+p))*w,s[1]=(y+R)*w,s[2]=(S-B)*w,s[3]=0,s[4]=(y-R)*U,s[5]=(1-(f+p))*U,s[6]=(m+O)*U,s[7]=0,s[8]=(S+B)*G,s[9]=(m-O)*G,s[10]=(1-(f+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Lr.set(s[0],s[1],s[2]).length(),o=Lr.set(s[4],s[5],s[6]).length(),c=Lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ei.copy(this);let h=1/a,u=1/o,x=1/c;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=x,Ei.elements[9]*=x,Ei.elements[10]*=x,e.setFromRotationMatrix(Ei),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ii,c=!1){let h=this.elements,u=2*r/(e-t),x=2*r/(n-s),f=(e+t)/(e-t),y=(n+s)/(n-s),S,I;if(c)S=r/(a-r),I=a*r/(a-r);else if(o===Ii)S=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===Zr)S=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ii,c=!1){let h=this.elements,u=2/(e-t),x=2/(n-s),f=-(e+t)/(e-t),y=-(n+s)/(n-s),S,I;if(c)S=1/(a-r),I=a/(a-r);else if(o===Ii)S=-2/(a-r),I=-(a+r)/(a-r);else if(o===Zr)S=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Lr=new X,Ei=new ze,J0=new X(0,0,0),K0=new X(1,1,1),ws=new X,Al=new X,oi=new X,hp=new ze,up=new qi,gs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],x=s[2],f=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(f,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(o,y));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,y),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return up.setFromEuler(this),this.setFromQuaternion(up,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gs.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},j0=0,dp=new X,Dr=new qi,hs=new ze,Cl=new X,Ya=new X,Q0=new X,t_=new qi,fp=new X(1,0,0),pp=new X(0,1,0),mp=new X(0,0,1),gp={type:"added"},e_={type:"removed"},Nr={type:"childadded",child:null},Pu={type:"childremoved",child:null},Cn=class i extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new gs,n=new qi,s=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new be}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(pp,t)}rotateZ(t){return this.rotateOnAxis(mp,t)}translateOnAxis(t,e){return dp.copy(t).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(pp,t)}translateZ(t){return this.translateOnAxis(mp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cl.copy(t):Cl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(Ya,Cl,this.up):hs.lookAt(Cl,Ya,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(hs),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gp),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e_),Pu.child=t,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gp),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,t_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let x=c[h];r(t.shapes,x)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),x=a(t.shapes),f=a(t.skeletons),y=a(t.animations),S=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),x.length>0&&(n.shapes=x),f.length>0&&(n.skeletons=f),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new X(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},n_={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let m=e.getJointPose(I,n),p=this._getHandJoint(h,I);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],f=u.position.distanceTo(x.position),y=.02,S=.005;h.inputState.pinching&&f>y+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=y-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function Lu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Be.workingColorSpace){return this.r=t,this.g=e,this.b=n,Be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Be.workingColorSpace){if(t=Nd(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lu(a,r,t+1/3),this.g=Lu(a,r,t),this.b=Lu(a,r,t-1/3)}return Be.colorSpaceToWorking(this,s),this}setStyle(t,e=ci){function n(r){r!==void 0&&parseFloat(r)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:pe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){let n=Tm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Be.workingToColorSpace(Gn.copy(this),t),Math.round(Ee(Gn.r*255,0,255))*65536+Math.round(Ee(Gn.g*255,0,255))*256+Math.round(Ee(Gn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Be.workingColorSpace){Be.workingToColorSpace(Gn.copy(this),e);let n=Gn.r,s=Gn.g,r=Gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let x=a-o;switch(h=u<=.5?x/(a+o):x/(2-a-o),a){case n:c=(s-r)/x+(s<r?6:0);break;case s:c=(r-n)/x+2;break;case r:c=(n-s)/x+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Be.workingColorSpace){return Be.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=ci){Be.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,n=Gn.g,s=Gn.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+e,Es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Es),t.getHSL(Rl);let n=io(Es.h,Rl.h,e),s=io(Es.s,Rl.s,e),r=io(Es.l,Rl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new fe;fe.NAMES=Tm;var fo=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new X,us=new X,Du=new X,ds=new X,Ur=new X,Fr=new X,_p=new X,Nu=new X,Uu=new X,Fu=new X,Ou=new Ke,Bu=new Ke,ku=new Ke,Rs=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ti.subVectors(s,e),us.subVectors(n,e),Du.subVectors(t,e);let a=Ti.dot(Ti),o=Ti.dot(us),c=Ti.dot(Du),h=us.dot(us),u=us.dot(Du),x=a*h-o*o;if(x===0)return r.set(0,0,0),null;let f=1/x,y=(h*c-o*u)*f,S=(a*u-o*c)*f;return r.set(1-y-S,S,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ds)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ds.x),c.addScaledVector(a,ds.y),c.addScaledVector(o,ds.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ou.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(t,e),Bu.fromBufferAttribute(t,n),ku.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ou,r.x),a.addScaledVector(Bu,r.y),a.addScaledVector(ku,r.z),a}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),us.subVectors(t,e),Ti.cross(us).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Ti.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ur.subVectors(s,n),Fr.subVectors(r,n),Nu.subVectors(t,n);let c=Ur.dot(Nu),h=Fr.dot(Nu);if(c<=0&&h<=0)return e.copy(n);Uu.subVectors(t,s);let u=Ur.dot(Uu),x=Fr.dot(Uu);if(u>=0&&x<=u)return e.copy(s);let f=c*x-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ur,a);Fu.subVectors(t,r);let y=Ur.dot(Fu),S=Fr.dot(Fu);if(S>=0&&y<=S)return e.copy(r);let I=y*h-c*S;if(I<=0&&h>=0&&S<=0)return o=h/(h-S),e.copy(n).addScaledVector(Fr,o);let m=u*S-y*x;if(m<=0&&x-u>=0&&y-S>=0)return _p.subVectors(r,s),o=(x-u)/(x-u+(y-S)),e.copy(s).addScaledVector(_p,o);let p=1/(m+I+f);return a=I*p,o=f*p,e.copy(n).addScaledVector(Ur,a).addScaledVector(Fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Il.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Il.copy(n.boundingBox)),Il.applyMatrix4(t.matrixWorld),this.union(Il)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Za),Pl.subVectors(this.max,Za),Or.subVectors(t.a,Za),Br.subVectors(t.b,Za),kr.subVectors(t.c,Za),Ts.subVectors(Br,Or),As.subVectors(kr,Br),Qs.subVectors(Or,kr);let e=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-Qs.z,Qs.y,Ts.z,0,-Ts.x,As.z,0,-As.x,Qs.z,0,-Qs.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-Qs.y,Qs.x,0];return!zu(e,Or,Br,kr,Pl)||(e=[1,0,0,0,1,0,0,0,1],!zu(e,Or,Br,kr,Pl))?!1:(Ll.crossVectors(Ts,As),e=[Ll.x,Ll.y,Ll.z],zu(e,Or,Br,kr,Pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fs=[new X,new X,new X,new X,new X,new X,new X,new X],Ai=new X,Il=new Jn,Or=new X,Br=new X,kr=new X,Ts=new X,As=new X,Qs=new X,Za=new X,Pl=new X,Ll=new X,tr=new X;function zu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){tr.fromArray(i,r);let o=s.x*Math.abs(tr.x)+s.y*Math.abs(tr.y)+s.z*Math.abs(tr.z),c=t.dot(tr),h=e.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Sn=new X,Dl=new $t,i_=0,en=class extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dl.fromBufferAttribute(this,e),Dl.applyMatrix3(t),this.setXY(e,Dl.x,Dl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix3(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var po=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var mn=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},s_=new Jn,Ja=new X,$u=new X,si=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):s_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ja.subVectors(t,this.center);let e=Ja.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ja,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ja.copy(t.center).add($u)),this.expandByPoint(Ja.copy(t.center).sub($u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},r_=0,xi=new ze,Vu=new Cn,zr=new X,li=new Jn,Ka=new Jn,Tn=new X,gn=class i extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(R0(t)?mo:po)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,n){return xi.makeTranslation(t,e,n),this.applyMatrix4(xi),this}scale(t,e,n){return xi.makeScale(t,e,n),this.applyMatrix4(xi),this}lookAt(t){return Vu.lookAt(t),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(li.min,Ka.min),li.expandByPoint(Tn),Tn.addVectors(li.max,Ka.max),li.expandByPoint(Tn)):(li.expandByPoint(Ka.min),li.expandByPoint(Ka.max))}li.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Tn.fromBufferAttribute(o,h),c&&(zr.fromBufferAttribute(t,h),Tn.add(zr)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new X,c[A]=new X;let h=new X,u=new X,x=new X,f=new $t,y=new $t,S=new $t,I=new X,m=new X;function p(A,N,V){h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,N),x.fromBufferAttribute(n,V),f.fromBufferAttribute(r,A),y.fromBufferAttribute(r,N),S.fromBufferAttribute(r,V),u.sub(h),x.sub(h),y.sub(f),S.sub(f);let q=1/(y.x*S.y-S.x*y.y);isFinite(q)&&(I.copy(u).multiplyScalar(S.y).addScaledVector(x,-y.y).multiplyScalar(q),m.copy(x).multiplyScalar(y.x).addScaledVector(u,-S.x).multiplyScalar(q),o[A].add(I),o[N].add(I),o[V].add(I),c[A].add(m),c[N].add(m),c[V].add(m))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let A=0,N=O.length;A<N;++A){let V=O[A],q=V.start,et=V.count;for(let rt=q,j=q+et;rt<j;rt+=3)p(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}let B=new X,R=new X,w=new X,U=new X;function G(A){w.fromBufferAttribute(s,A),U.copy(w);let N=o[A];B.copy(N),B.sub(w.multiplyScalar(w.dot(N))).normalize(),R.crossVectors(U,N);let q=R.dot(c[A])<0?-1:1;a.setXYZW(A,B.x,B.y,B.z,q)}for(let A=0,N=O.length;A<N;++A){let V=O[A],q=V.start,et=V.count;for(let rt=q,j=q+et;rt<j;rt+=3)G(t.getX(rt+0)),G(t.getX(rt+1)),G(t.getX(rt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,y=n.count;f<y;f++)n.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,h=new X,u=new X,x=new X;if(t)for(let f=0,y=t.count;f<y;f+=3){let S=t.getX(f+0),I=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,m),u.subVectors(a,r),x.subVectors(s,r),u.cross(x),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,y=e.count;f<y;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),x.subVectors(s,r),u.cross(x),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,x=o.normalized,f=new h.constructor(c.length*u),y=0,S=0;for(let I=0,m=c.length;I<m;I++){o.isInterleavedBufferAttribute?y=c[I]*o.data.stride+o.offset:y=c[I]*u;for(let p=0;p<u;p++)f[S++]=h[y++]}return new en(f,u,x)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,x=h.length;u<x;u++){let f=h[u],y=t(f,n);c.push(y)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let x=0,f=h.length;x<f;x++){let y=h[x];u.push(y.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],x=r[h];for(let f=0,y=x.length;f<y;f++)u.push(x[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let x=a[h];this.addGroup(x.start,x.count,x.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ld,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Zn=new X,Li=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Zn.fromBufferAttribute(this,e),Zn.applyMatrix4(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zn.fromBufferAttribute(this,e),Zn.applyNormalMatrix(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zn.fromBufferAttribute(this,e),Zn.transformDirection(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hu=new X,a_=new X,o_=new be,Ci=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hu.subVectors(n,e).cross(a_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||o_.getNormalMatrix(t),s=this.coplanarPoint(Hu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},l_=0,Yi=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=la,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){pe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){pe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ps=new X,Gu=new X,Nl=new X,Ul=new X,rr=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,e),ps.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gu.copy(t).add(e).multiplyScalar(.5),Nl.copy(e).sub(t).normalize(),Ul.copy(this.origin).sub(Gu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nl),o=Ul.dot(this.direction),c=-Ul.dot(Nl),h=Ul.lengthSq(),u=Math.abs(1-a*a),x,f,y,S;if(u>0)if(x=a*c-o,f=a*o-c,S=r*u,x>=0)if(f>=-S)if(f<=S){let I=1/u;x*=I,f*=I,y=x*(x+a*f+2*o)+f*(a*x+f+2*c)+h}else f=r,x=Math.max(0,-(a*f+o)),y=-x*x+f*(f+2*c)+h;else f=-r,x=Math.max(0,-(a*f+o)),y=-x*x+f*(f+2*c)+h;else f<=-S?(x=Math.max(0,-(-a*r+o)),f=x>0?-r:Math.min(Math.max(-r,-c),r),y=-x*x+f*(f+2*c)+h):f<=S?(x=0,f=Math.min(Math.max(-r,-c),r),y=f*(f+2*c)+h):(x=Math.max(0,-(a*r+o)),f=x>0?r:Math.min(Math.max(-r,-c),r),y=-x*x+f*(f+2*c)+h);else f=a>0?-r:r,x=Math.max(0,-(a*f+o)),y=-x*x+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Gu).addScaledVector(Nl,f),y}intersectSphere(t,e){if(t.radius<0)return null;ps.subVectors(t.center,this.origin);let n=ps.dot(this.direction),s=ps.dot(ps)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,x=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),x>=0?(o=(t.min.z-f.z)*x,c=(t.max.z-f.z)*x):(o=(t.max.z-f.z)*x,c=(t.min.z-f.z)*x),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,x=t.x-a.x,f=t.y-a.y,y=t.z-a.z,S=e.x-a.x,I=e.y-a.y,m=e.z-a.z,p=n.x-a.x,O=n.y-a.y,B=n.z-a.z,R=Math.abs(c),w=Math.abs(h),U=Math.abs(u),G,A,N,V,q,et,rt,j,Q,ht,ft,Tt;if(R>=w&&R>=U?(N=c,et=x,Q=S,Tt=p,c>=0?(G=h,A=u,V=f,q=y,rt=I,j=m,ht=O,ft=B):(G=u,A=h,V=y,q=f,rt=m,j=I,ht=B,ft=O)):w>=U?(N=h,et=f,Q=I,Tt=O,h>=0?(G=u,A=c,V=y,q=x,rt=m,j=S,ht=B,ft=p):(G=c,A=u,V=x,q=y,rt=S,j=m,ht=p,ft=B)):(N=u,et=y,Q=m,Tt=B,u>=0?(G=c,A=h,V=x,q=f,rt=S,j=I,ht=p,ft=O):(G=h,A=c,V=f,q=x,rt=I,j=S,ht=O,ft=p)),N===0)return null;let mt=G/N,Mt=A/N,St=1/N,Wt=V-mt*et,Jt=q-Mt*et,$e=rt-mt*Q,Ae=j-Mt*Q,Oe=ht-mt*Tt,_t=ft-Mt*Tt,xt=Oe*Ae-_t*$e,It=Wt*_t-Jt*Oe,ne=$e*Jt-Ae*Wt;if(s){if(xt<0||It<0||ne<0)return null}else if((xt<0||It<0||ne<0)&&(xt>0||It>0||ne>0))return null;let Yt=xt+It+ne;if(Yt===0)return null;let he=St*(xt*et+It*Q+ne*Tt);return(Yt>0?he<0:he>0)?null:this.at(he/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ar=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xp=new ze,er=new rr,Fl=new si,vp=new X,Ol=new X,Bl=new X,kl=new X,Wu=new X,zl=new X,yp=new X,$l=new X,Rn=class extends Cn{constructor(t=new gn,e=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zl.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],x=r[c];u!==0&&(Wu.fromBufferAttribute(x,t),a?zl.addScaledVector(Wu,u):zl.addScaledVector(Wu.sub(e),u))}e.add(zl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),er.copy(t.ray).recast(t.near),!(Fl.containsPoint(er.origin)===!1&&(er.intersectSphere(Fl,vp)===null||er.origin.distanceToSquared(vp)>(t.far-t.near)**2))&&(xp.copy(r).invert(),er.copy(t.ray).applyMatrix4(xp),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,x=r.attributes.normal,f=r.groups,y=r.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let m=f[S],p=a[m.materialIndex],O=Math.max(m.start,y.start),B=Math.min(o.count,Math.min(m.start+m.count,y.start+y.count));for(let R=O,w=B;R<w;R+=3){let U=o.getX(R),G=o.getX(R+1),A=o.getX(R+2);s=Vl(this,p,t,n,h,u,x,U,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,y.start),I=Math.min(o.count,y.start+y.count);for(let m=S,p=I;m<p;m+=3){let O=o.getX(m),B=o.getX(m+1),R=o.getX(m+2);s=Vl(this,a,t,n,h,u,x,O,B,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let m=f[S],p=a[m.materialIndex],O=Math.max(m.start,y.start),B=Math.min(c.count,Math.min(m.start+m.count,y.start+y.count));for(let R=O,w=B;R<w;R+=3){let U=R,G=R+1,A=R+2;s=Vl(this,p,t,n,h,u,x,U,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let m=S,p=I;m<p;m+=3){let O=m,B=m+1,R=m+2;s=Vl(this,a,t,n,h,u,x,O,B,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function c_(i,t,e,n,s,r,a,o){let c;if(t.side===Kn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Us,o),c===null)return null;$l.copy(o),$l.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo($l);return h<e.near||h>e.far?null:{distance:h,point:$l.clone(),object:i}}function Vl(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Ol),i.getVertexPosition(c,Bl),i.getVertexPosition(h,kl);let u=c_(i,t,e,n,Ol,Bl,kl,yp);if(u){let x=new X;Rs.getBarycoord(yp,Ol,Bl,kl,x),s&&(u.uv=Rs.getInterpolatedAttribute(s,o,c,h,x,new $t)),r&&(u.uv1=Rs.getInterpolatedAttribute(r,o,c,h,x,new $t)),a&&(u.normal=Rs.getInterpolatedAttribute(a,o,c,h,x,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new X,materialIndex:0};Rs.getNormal(Ol,Bl,kl,f.normal),u.face=f,u.barycoord=x}return u}var go=class extends ni{constructor(t=null,e=1,n=1,s,r,a,o,c,h=An,u=An,x,f){super(null,a,o,c,h,u,s,r,x,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _o=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$r=new ze,Sp=new ze,Hl=[],Mp=new Jn,h_=new ze,ja=new Rn,Qa=new si,xo=class extends Rn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$r),Mp.copy(t.boundingBox).applyMatrix4($r),this.boundingBox.union(Mp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$r),Qa.copy(t.boundingSphere).applyMatrix4($r),this.boundingSphere.union(Qa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ja.geometry=this.geometry,ja.material=this.material,ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(n),t.ray.intersectsSphere(Qa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$r),Sp.multiplyMatrices(n,$r),ja.matrixWorld=Sp,ja.raycast(t,Hl);for(let a=0,o=Hl.length;a<o;a++){let c=Hl[a];c.instanceId=r,c.object=this,e.push(c)}Hl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(s*this.count),s,this.count,Jc,vi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new si,u_=new $t(.5,.5),Gl=new X,ea=class{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],x=r[5],f=r[6],y=r[7],S=r[8],I=r[9],m=r[10],p=r[11],O=r[12],B=r[13],R=r[14],w=r[15];if(s[0].setComponents(h-a,y-u,p-S,w-O).normalize(),s[1].setComponents(h+a,y+u,p+S,w+O).normalize(),s[2].setComponents(h+o,y+x,p+I,w+B).normalize(),s[3].setComponents(h-o,y-x,p-I,w-B).normalize(),n)s[4].setComponents(c,f,m,R).normalize(),s[5].setComponents(h-c,y-f,p-m,w-R).normalize();else if(s[4].setComponents(h-c,y-f,p-m,w-R).normalize(),e===Ii)s[5].setComponents(h+c,y+f,p+m,w+R).normalize();else if(e===Zr)s[5].setComponents(c,f,m,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);let e=u_.distanceTo(t.center);return nr.radius=.7071067811865476+e,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gl.x=s.normal.x>0?t.max.x:t.min.x,Gl.y=s.normal.y>0?t.max.y:t.min.y,Gl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gc=new X,_c=new X,bp=new ze,to=new rr,Wl=new si,Xu=new X,wp=new X,xc=class extends Cn{constructor(t=new gn,e=new or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gc.fromBufferAttribute(e,s-1),_c.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gc.distanceTo(_c);t.setAttribute("lineDistance",new mn(n,1))}else pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),Wl.radius+=r,t.ray.intersectsSphere(Wl)===!1)return;bp.copy(s).invert(),to.copy(t.ray).applyMatrix4(bp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let y=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let I=y,m=S-1;I<m;I+=h){let p=u.getX(I),O=u.getX(I+1),B=Xl(this,t,to,c,p,O,I);B&&e.push(B)}if(this.isLineLoop){let I=u.getX(S-1),m=u.getX(y),p=Xl(this,t,to,c,I,m,S-1);p&&e.push(p)}}else{let y=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let I=y,m=S-1;I<m;I+=h){let p=Xl(this,t,to,c,I,I+1,I);p&&e.push(p)}if(this.isLineLoop){let I=Xl(this,t,to,c,S-1,y,S-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(gc.fromBufferAttribute(o,s),_c.fromBufferAttribute(o,r),e.distanceSqToSegment(gc,_c,Xu,wp)>n)return;Xu.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Xu);if(!(h<t.near||h>t.far))return{distance:h,point:wp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var vo=class extends xc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},vc=class extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ep=new ze,id=new rr,ql=new si,Yl=new X,lr=class extends Cn{constructor(t=new gn,e=new vc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(s),ql.radius+=r,t.ray.intersectsSphere(ql)===!1)return;Ep.copy(s).invert(),id.copy(t.ray).applyMatrix4(Ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,x=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let S=f,I=y;S<I;S++){let m=h.getX(S);Yl.fromBufferAttribute(x,m),Tp(Yl,m,c,s,t,e,this)}}else{let f=Math.max(0,a.start),y=Math.min(x.count,a.start+a.count);for(let S=f,I=y;S<I;S++)Yl.fromBufferAttribute(x,S),Tp(Yl,S,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tp(i,t,e,n,s,r,a){let o=id.distanceSqToPoint(i);if(o<e){let c=new X;id.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var yo=class extends ni{constructor(t=[],e=Fs,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Is=class extends ni{constructor(t,e,n=Ni,s,r,a,o=An,c=An,h,u=Wi,x=1){if(u!==Wi&&u!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:x};super(f,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yc=class extends Is{constructor(t,e=Ni,n=Fs,s,r,a=An,o=An,c,h=Wi){let u={width:t,height:t,depth:1},x=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},So=class extends ni{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},na=class i extends gn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],x=[],f=0,y=0;S("z","y","x",-1,-1,n,e,t,a,r,0),S("z","y","x",1,-1,n,e,-t,a,r,1),S("x","z","y",1,1,t,n,e,s,a,2),S("x","z","y",1,-1,t,n,-e,s,a,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(x,2));function S(I,m,p,O,B,R,w,U,G,A,N){let V=R/G,q=w/A,et=R/2,rt=w/2,j=U/2,Q=G+1,ht=A+1,ft=0,Tt=0,mt=new X;for(let Mt=0;Mt<ht;Mt++){let St=Mt*q-rt;for(let Wt=0;Wt<Q;Wt++){let Jt=Wt*V-et;mt[I]=Jt*O,mt[m]=St*B,mt[p]=j,h.push(mt.x,mt.y,mt.z),mt[I]=0,mt[m]=0,mt[p]=U>0?1:-1,u.push(mt.x,mt.y,mt.z),x.push(Wt/G),x.push(1-Mt/A),ft+=1}}for(let Mt=0;Mt<A;Mt++)for(let St=0;St<G;St++){let Wt=f+St+Q*Mt,Jt=f+St+Q*(Mt+1),$e=f+(St+1)+Q*(Mt+1),Ae=f+(St+1)+Q*Mt;c.push(Wt,Jt,Ae),c.push(Jt,$e,Ae),Tt+=6}o.addGroup(y,Tt,N),y+=Tt,f+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Mo=class i extends gn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],x=[],f=[],y=[],S=0,I=[],m=n/2,p=0;O(),a===!1&&(t>0&&B(!0),e>0&&B(!1)),this.setIndex(u),this.setAttribute("position",new mn(x,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(y,2));function O(){let R=new X,w=new X,U=0,G=(e-t)/n;for(let A=0;A<=r;A++){let N=[],V=A/r,q=V*(e-t)+t;for(let et=0;et<=s;et++){let rt=et/s,j=rt*c+o,Q=Math.sin(j),ht=Math.cos(j);w.x=q*Q,w.y=-V*n+m,w.z=q*ht,x.push(w.x,w.y,w.z),R.set(Q,G,ht).normalize(),f.push(R.x,R.y,R.z),y.push(rt,1-V),N.push(S++)}I.push(N)}for(let A=0;A<s;A++)for(let N=0;N<r;N++){let V=I[N][A],q=I[N+1][A],et=I[N+1][A+1],rt=I[N][A+1];(t>0||N!==0)&&(u.push(V,q,rt),U+=3),(e>0||N!==r-1)&&(u.push(q,et,rt),U+=3)}h.addGroup(p,U,0),p+=U}function B(R){let w=S,U=new $t,G=new X,A=0,N=R===!0?t:e,V=R===!0?1:-1;for(let et=1;et<=s;et++)x.push(0,m*V,0),f.push(0,V,0),y.push(.5,.5),S++;let q=S;for(let et=0;et<=s;et++){let j=et/s*c+o,Q=Math.cos(j),ht=Math.sin(j);G.x=N*ht,G.y=m*V,G.z=N*Q,x.push(G.x,G.y,G.z),f.push(0,V,0),U.x=Q*.5+.5,U.y=ht*.5*V+.5,y.push(U.x,U.y),S++}for(let et=0;et<s;et++){let rt=w+et,j=q+et;R===!0?u.push(j,j+1,rt):u.push(j+1,j,rt),A+=3}h.addGroup(p,A,R===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,y=(a-u)/f;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new $t:new X);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new X,s=[],r=[],a=[],o=new X,c=new ze;for(let y=0;y<=t;y++){let S=y/t;s[y]=this.getTangentAt(S,new X)}r[0]=new X,a[0]=new X;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),x=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),x<=h&&(h=x,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),o.crossVectors(s[y-1],s[y]),o.length()>Number.EPSILON){o.normalize();let S=Math.acos(Ee(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(o,S))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Ee(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(y=-y);for(let S=1;S<=t;S++)r[S].applyMatrix4(c.makeRotationAxis(s[S],y*S)),a[S].crossVectors(s[S],r[S])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ia=class extends hi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),x=Math.sin(this.aRotation),f=c-this.aX,y=h-this.aY;c=f*u-y*x+this.aX,h=f*x+y*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sc=class extends ia{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fd(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,x){let f=(a-r)/h-(o-r)/(h+u)+(o-a)/u,y=(o-a)/u-(c-a)/(u+x)+(c-o)/x;f*=u,y*=u,s(a,o,f,y)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ap=new X,Cp=new X,qu=new Fd,Yu=new Fd,Zu=new Fd,Mc=class extends hi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new X){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Cp.subVectors(s[0],s[1]).add(s[0]),h=Cp);let x=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ap.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ap),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,S=Math.pow(h.distanceToSquared(x),y),I=Math.pow(x.distanceToSquared(f),y),m=Math.pow(f.distanceToSquared(u),y);I<1e-4&&(I=1),S<1e-4&&(S=I),m<1e-4&&(m=I),qu.initNonuniformCatmullRom(h.x,x.x,f.x,u.x,S,I,m),Yu.initNonuniformCatmullRom(h.y,x.y,f.y,u.y,S,I,m),Zu.initNonuniformCatmullRom(h.z,x.z,f.z,u.z,S,I,m)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(h.x,x.x,f.x,u.x,this.tension),Yu.initCatmullRom(h.y,x.y,f.y,u.y,this.tension),Zu.initCatmullRom(h.z,x.z,f.z,u.z,this.tension));return n.set(qu.calc(c),Yu.calc(c),Zu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new X().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rp(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function d_(i,t){let e=1-i;return e*e*t}function f_(i,t){return 2*(1-i)*i*t}function p_(i,t){return i*i*t}function so(i,t,e,n){return d_(i,t)+f_(i,e)+p_(i,n)}function m_(i,t){let e=1-i;return e*e*e*t}function g_(i,t){let e=1-i;return 3*e*e*i*t}function __(i,t){return 3*(1-i)*i*i*t}function x_(i,t){return i*i*i*t}function ro(i,t,e,n,s){return m_(i,t)+g_(i,e)+__(i,n)+x_(i,s)}var bo=class extends hi{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ro(t,s.x,r.x,a.x,o.x),ro(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bc=class extends hi{constructor(t=new X,e=new X,n=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ro(t,s.x,r.x,a.x,o.x),ro(t,s.y,r.y,a.y,o.y),ro(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wo=class extends hi{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends hi{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends hi{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(so(t,s.x,r.x,a.x),so(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends hi{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(so(t,s.x,r.x,a.x),so(t,s.y,r.y,a.y),so(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],x=s[a>s.length-3?s.length-1:a+2];return n.set(Rp(o,c.x,h.x,u.x,x.x),Rp(o,c.y,h.y,u.y,x.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},sd=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:Mc,CubicBezierCurve:bo,CubicBezierCurve3:bc,EllipseCurve:ia,LineCurve:wo,LineCurve3:wc,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:Ec,SplineCurve:To}),Tc=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sd[s.type]().fromJSON(s))}return this}},cr=class extends Tc{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wo(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new bo(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new To(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new ia(t,e,n,s,r,a,o,c);if(this.curves.length>0){let x=h.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},sa=class extends cr{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cr().fromJSON(s))}return this}};function v_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Am(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=w_(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,x=c;for(let f=e;f<s;f+=e){let y=i[f],S=i[f+1];y<o&&(o=y),S<c&&(c=S),y>u&&(u=y),S>x&&(x=S)}h=Math.max(u-o,x-c),h=h!==0?32767/h:0}return Ao(r,a,e,o,c,h,0),a}function Am(i,t,e,n,s){let r;if(s===U_(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ip(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ip(a/n|0,i[a],i[a+1],r);return r&&ra(r,r.next)&&(Ro(r),r=r.next),r}function hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ra(e,e.next)||fn(e.prev,e,e.next)===0)){if(Ro(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ao(i,t,e,n,s,r,a){if(!i)return;!a&&r&&R_(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?S_(i,n,s,r):y_(i)){t.push(c.i,i.i,h.i),Ro(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=M_(hr(i),t),Ao(i,t,e,n,s,r,2)):a===2&&b_(i,t,e,n,s,r):Ao(hr(i),t,e,n,s,r,1);break}}}function y_(i){let t=i.prev,e=i,n=i.next;if(fn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),x=Math.min(o,c,h),f=Math.max(s,r,a),y=Math.max(o,c,h),S=n.next;for(;S!==t;){if(S.x>=u&&S.x<=f&&S.y>=x&&S.y<=y&&eo(s,o,r,c,a,h,S.x,S.y)&&fn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function S_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fn(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,x=r.y,f=a.y,y=Math.min(o,c,h),S=Math.min(u,x,f),I=Math.max(o,c,h),m=Math.max(u,x,f),p=rd(y,S,t,e,n),O=rd(I,m,t,e,n),B=i.prevZ,R=i.nextZ;for(;B&&B.z>=p&&R&&R.z<=O;){if(B.x>=y&&B.x<=I&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&eo(o,u,c,x,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0||(B=B.prevZ,R.x>=y&&R.x<=I&&R.y>=S&&R.y<=m&&R!==s&&R!==a&&eo(o,u,c,x,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;B&&B.z>=p;){if(B.x>=y&&B.x<=I&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&eo(o,u,c,x,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;R&&R.z<=O;){if(R.x>=y&&R.x<=I&&R.y>=S&&R.y<=m&&R!==s&&R!==a&&eo(o,u,c,x,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function M_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ra(n,s)&&Rm(n,e,e.next,s)&&Co(n,s)&&Co(s,n)&&(t.push(n.i,e.i,s.i),Ro(e),Ro(e.next),e=i=s),e=e.next}while(e!==i);return hr(e)}function b_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&L_(a,o)){let c=Im(a,o);a=hr(a,a.next),c=hr(c,c.next),Ao(a,t,e,n,s,r,0),Ao(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function w_(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=Am(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(P_(h))}s.sort(E_);for(let r=0;r<s.length;r++)e=T_(s[r],e);return e}function E_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function T_(i,t){let e=A_(i,t);if(!e)return t;let n=Im(e,i);return hr(n,n.next),hr(e,e.next)}function A_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ra(i,e))return e;do{if(ra(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let x=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(x<=n&&x>r&&(r=x,a=e.x<e.next.x?e:e.next,x===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Cm(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let x=Math.abs(s-e.y)/(n-e.x);Co(e,i)&&(x<u||x===u&&(e.x>a.x||e.x===a.x&&C_(a,e)))&&(a=e,u=x)}e=e.next}while(e!==o);return a}function C_(i,t){return fn(i.prev,i,t.prev)<0&&fn(t.next,i,i.next)<0}function R_(i,t,e,n){let s=i;do s.z===0&&(s.z=rd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,I_(s)}function I_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function P_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cm(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function eo(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Cm(i,t,e,n,s,r,a,o)}function L_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!D_(i,t)&&(Co(i,t)&&Co(t,i)&&N_(i,t)&&(fn(i.prev,i,t.prev)||fn(i,t.prev,t))||ra(i,t)&&fn(i.prev,i,i.next)>0&&fn(t.prev,t,t.next)>0)}function fn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ra(i,t){return i.x===t.x&&i.y===t.y}function Rm(i,t,e,n){let s=Jl(fn(i,t,e)),r=Jl(fn(i,t,n)),a=Jl(fn(e,n,i)),o=Jl(fn(e,n,t));return!!(s!==r&&a!==o||s===0&&Zl(i,e,t)||r===0&&Zl(i,n,t)||a===0&&Zl(e,i,n)||o===0&&Zl(e,t,n))}function Zl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jl(i){return i>0?1:i<0?-1:0}function D_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Co(i,t){return fn(i.prev,i,i.next)<0?fn(i,t,i.next)>=0&&fn(i,i.prev,t)>=0:fn(i,t,i.prev)<0||fn(i,i.next,t)<0}function N_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Im(i,t){let e=ad(i.i,i.x,i.y),n=ad(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ip(i,t,e,n){let s=ad(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ad(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function U_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var od=class{static triangulate(t,e,n=2){return v_(t,e,n)}},ir=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Pp(t),Lp(n,t);let a=t.length;e.forEach(Pp);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Lp(n,e[c]);let o=od.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Pp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Io=class i extends gn{constructor(t=new sa([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new mn(s,3)),this.setAttribute("uv",new mn(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,x=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,O=e.UVGenerator!==void 0?e.UVGenerator:F_,B,R=!1,w,U,G,A;if(p){B=p.getSpacedPoints(u),R=!0,f=!1;let st=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,st),U=new X,G=new X,A=new X}f||(m=0,y=0,S=0,I=0);let N=o.extractPoints(h),V=N.shape,q=N.holes;if(!ir.isClockWise(V)){V=V.reverse();for(let st=0,At=q.length;st<At;st++){let H=q[st];ir.isClockWise(H)&&(q[st]=H.reverse())}}function rt(st){let H=10000000000000001e-36,Ct=st[0];for(let Bt=1;Bt<=st.length;Bt++){let oe=Bt%st.length,ae=st[oe],de=ae.x-Ct.x,_e=ae.y-Ct.y,$=de*de+_e*_e,De=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(Ct.x),Math.abs(Ct.y)),me=H*De*De;if($<=me){st.splice(oe,1),Bt--;continue}Ct=ae}}rt(V),q.forEach(rt);let j=q.length,Q=V;for(let st=0;st<j;st++){let At=q[st];V=V.concat(At)}function ht(st,At,H){return At||ve("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(At,H)}let ft=V.length;function Tt(st,At,H){let Ct,Bt,oe,ae=st.x-At.x,de=st.y-At.y,_e=H.x-st.x,$=H.y-st.y,De=ae*ae+de*de,me=ae*$-de*_e;if(Math.abs(me)>Number.EPSILON){let L=Math.sqrt(De),M=Math.sqrt(_e*_e+$*$),Y=At.x-de/L,ot=At.y+ae/L,gt=H.x-$/M,Pt=H.y+_e/M,Ot=((gt-Y)*$-(Pt-ot)*_e)/(ae*$-de*_e);Ct=Y+ae*Ot-st.x,Bt=ot+de*Ot-st.y;let pt=Ct*Ct+Bt*Bt;if(pt<=2)return new $t(Ct,Bt);oe=Math.sqrt(pt/2)}else{let L=!1;ae>Number.EPSILON?_e>Number.EPSILON&&(L=!0):ae<-Number.EPSILON?_e<-Number.EPSILON&&(L=!0):Math.sign(de)===Math.sign($)&&(L=!0),L?(Ct=-de,Bt=ae,oe=Math.sqrt(De)):(Ct=ae,Bt=de,oe=Math.sqrt(De/2))}return new $t(Ct/oe,Bt/oe)}let mt=[];for(let st=0,At=Q.length,H=At-1,Ct=st+1;st<At;st++,H++,Ct++)H===At&&(H=0),Ct===At&&(Ct=0),mt[st]=Tt(Q[st],Q[H],Q[Ct]);let Mt=[],St,Wt=mt.concat();for(let st=0,At=j;st<At;st++){let H=q[st];St=[];for(let Ct=0,Bt=H.length,oe=Bt-1,ae=Ct+1;Ct<Bt;Ct++,oe++,ae++)oe===Bt&&(oe=0),ae===Bt&&(ae=0),St[Ct]=Tt(H[Ct],H[oe],H[ae]);Mt.push(St),Wt=Wt.concat(St)}let Jt;if(m===0)Jt=ir.triangulateShape(Q,q);else{let st=[],At=[];for(let H=0;H<m;H++){let Ct=H/m,Bt=y*Math.cos(Ct*Math.PI/2),oe=S*Math.sin(Ct*Math.PI/2)+I;for(let ae=0,de=Q.length;ae<de;ae++){let _e=ht(Q[ae],mt[ae],oe);It(_e.x,_e.y,-Bt),Ct===0&&st.push(_e)}for(let ae=0,de=j;ae<de;ae++){let _e=q[ae];St=Mt[ae];let $=[];for(let De=0,me=_e.length;De<me;De++){let L=ht(_e[De],St[De],oe);It(L.x,L.y,-Bt),Ct===0&&$.push(L)}Ct===0&&At.push($)}}Jt=ir.triangulateShape(st,At)}let $e=Jt.length,Ae=S+I;for(let st=0;st<ft;st++){let At=f?ht(V[st],Wt[st],Ae):V[st];R?(G.copy(w.normals[0]).multiplyScalar(At.x),U.copy(w.binormals[0]).multiplyScalar(At.y),A.copy(B[0]).add(G).add(U),It(A.x,A.y,A.z)):It(At.x,At.y,0)}for(let st=1;st<=u;st++)for(let At=0;At<ft;At++){let H=f?ht(V[At],Wt[At],Ae):V[At];R?(G.copy(w.normals[st]).multiplyScalar(H.x),U.copy(w.binormals[st]).multiplyScalar(H.y),A.copy(B[st]).add(G).add(U),It(A.x,A.y,A.z)):It(H.x,H.y,x/u*st)}for(let st=m-1;st>=0;st--){let At=st/m,H=y*Math.cos(At*Math.PI/2),Ct=S*Math.sin(At*Math.PI/2)+I;for(let Bt=0,oe=Q.length;Bt<oe;Bt++){let ae=ht(Q[Bt],mt[Bt],Ct);It(ae.x,ae.y,x+H)}for(let Bt=0,oe=q.length;Bt<oe;Bt++){let ae=q[Bt];St=Mt[Bt];for(let de=0,_e=ae.length;de<_e;de++){let $=ht(ae[de],St[de],Ct);R?It($.x,$.y+B[u-1].y,B[u-1].x+H):It($.x,$.y,x+H)}}}Oe(),_t();function Oe(){let st=s.length/3;if(f){let At=0,H=ft*At;for(let Ct=0;Ct<$e;Ct++){let Bt=Jt[Ct];ne(Bt[2]+H,Bt[1]+H,Bt[0]+H)}At=u+m*2,H=ft*At;for(let Ct=0;Ct<$e;Ct++){let Bt=Jt[Ct];ne(Bt[0]+H,Bt[1]+H,Bt[2]+H)}}else{for(let At=0;At<$e;At++){let H=Jt[At];ne(H[2],H[1],H[0])}for(let At=0;At<$e;At++){let H=Jt[At];ne(H[0]+ft*u,H[1]+ft*u,H[2]+ft*u)}}n.addGroup(st,s.length/3-st,0)}function _t(){let st=s.length/3,At=0;xt(Q,At),At+=Q.length;for(let H=0,Ct=q.length;H<Ct;H++){let Bt=q[H];xt(Bt,At),At+=Bt.length}n.addGroup(st,s.length/3-st,1)}function xt(st,At){let H=st.length;for(;--H>=0;){let Ct=H,Bt=H-1;Bt<0&&(Bt=st.length-1);for(let oe=0,ae=u+m*2;oe<ae;oe++){let de=ft*oe,_e=ft*(oe+1),$=At+Ct+de,De=At+Bt+de,me=At+Bt+_e,L=At+Ct+_e;Yt($,De,me,L)}}}function It(st,At,H){c.push(st),c.push(At),c.push(H)}function ne(st,At,H){he(st),he(At),he(H);let Ct=s.length/3,Bt=O.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);ee(Bt[0]),ee(Bt[1]),ee(Bt[2])}function Yt(st,At,H,Ct){he(st),he(At),he(Ct),he(At),he(H),he(Ct);let Bt=s.length/3,oe=O.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ee(oe[0]),ee(oe[1]),ee(oe[3]),ee(oe[1]),ee(oe[2]),ee(oe[3])}function he(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function ee(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return O_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sd[s.type]().fromJSON(s)),new i(n,t.options)}},F_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new $t(r,a),new $t(o,c),new $t(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],x=t[n*3+2],f=t[s*3],y=t[s*3+1],S=t[s*3+2],I=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new $t(a,1-c),new $t(h,1-x),new $t(f,1-S),new $t(I,1-p)]:[new $t(o,1-c),new $t(u,1-x),new $t(y,1-S),new $t(m,1-p)]}};function O_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Po=class i extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,x=t/o,f=e/c,y=[],S=[],I=[],m=[];for(let p=0;p<u;p++){let O=p*f-a;for(let B=0;B<h;B++){let R=B*x-r;S.push(R,-O,0),I.push(0,0,1),m.push(B/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let O=0;O<o;O++){let B=O+h*p,R=O+h*(p+1),w=O+1+h*(p+1),U=O+1+h*p;y.push(B,R,U),y.push(R,w,U)}this.setIndex(y),this.setAttribute("position",new mn(S,3)),this.setAttribute("normal",new mn(I,3)),this.setAttribute("uv",new mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Lo=class extends gn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new X,r=new X;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){let x=c[h],f=x.start,y=x.count;for(let S=f,I=f+y;S<I;S+=3)for(let m=0;m<3;m++){let p=o.getX(S+m),O=o.getX(S+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,O),Dp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let h=0;h<3;h++){let u=3*o+h,x=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,x),Dp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new mn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Dp(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Np(s))s.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Np(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xn(i){let t={};for(let e=0;e<i.length;e++){let n=fr(i[e]);for(let s in n)t[s]=n[s]}return t}function Np(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function B_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Od(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}var Ko={clone:fr,merge:Xn},k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=B_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ac=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Do=class extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=Hc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cc=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rc=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ju(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends Ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ed:r=t,o=2*e-n;break;case nd:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ed:a=t,c=2*n-e;break;case nd:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,x=this._offsetNext,f=this._weightPrev,y=this._weightNext,S=(n-e)/(s-e),I=S*S,m=I*S,p=-f*m+2*f*I-f*S,O=(1+f)*m+(-1.5-2*f)*I+(-.5+f)*S+1,B=(-1-y)*m+(1.5+y)*I+.5*S,R=y*m-y*I;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+O*a[h+w]+B*a[c+w]+R*a[x+w];return r}},Pc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),x=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*x+a[c+f]*u;return r}},Lc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dc=class extends Ps{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,x=this.outTangents;if(!u||!x){let S=(n-e)/(s-e),I=1-S;for(let m=0;m!==o;++m)r[m]=a[h+m]*I+a[c+m]*S;return r}let f=o*2,y=t-1;for(let S=0;S!==o;++S){let I=a[h+S],m=a[c+S],p=y*f+S*2,O=x[p],B=x[p+1],R=t*f+S*2,w=u[R],U=u[R+1],G=V_(n,e,O,w,s);r[S]=Pm(G,I,B,U,m)}return r}};function Pm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function V_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Pm(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=$_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ui=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ju(t.settings)&&(n.settings={inTangents:Vr(t.settings.inTangents,Array),outTangents:Vr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Dc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case tc:e=this.InterpolantFactoryMethodSmooth;break;case Qu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return pe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ju(this.settings)&&(Up(this.settings.inTangents,t),Up(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ve("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ve("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ve("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){ve("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&I0(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){ve("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tc,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let x=o*n,f=x-n,y=x+n;for(let S=0;S!==n;++S){let I=e[x+S];if(I!==e[f+S]||I!==e[y+S]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let x=o*n,f=a*n;for(let y=0;y!==n;++y)e[f+y]=e[x+y]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ju(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Up(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=uc;var Ls=class extends ui{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ao;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Nc.prototype.ValueTypeName="color";var Uc=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Uc.prototype.ValueTypeName="number";var Fc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)qi.slerpFlat(r,0,a,h-o,a,h,c);return r}},No=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}};No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends ui{constructor(t,e,n){super(t,e,n)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ao;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Oc.prototype.ValueTypeName="vector";var Bc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,x){return h.push(u,x),this},this.removeHandler=function(u){let x=h.indexOf(u);return x!==-1&&h.splice(x,2),this},this.getHandler=function(u){for(let x=0,f=h.length;x<f;x+=2){let y=h[x],S=h[x+1];if(y.global&&(y.lastIndex=0),y.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lm=new Bc,kc=class{constructor(t){this.manager=t!==void 0?t:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};kc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fo=class extends Uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ku=new ze,Fp=new X,Op=new X,zc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fp),Op.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Op),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ku,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Zr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Ku)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kl=new X,jl=new qi,Vi=new X,Oo=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kl,jl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,jl,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Kl,jl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,jl,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new X,Bp=new $t,kp=new $t,Wn=class extends Oo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z)}getViewSize(t,e){return this.getViewBounds(t,Bp,kp),e.subVectors(kp,Bp)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var aa=class extends Oo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ld=class extends zc{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bo=class extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new ld}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ko=class extends gn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Hr=-90,Gr=1,$c=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(Hr,Gr,t,e);s.layers=this.layers,this.add(s);let r=new Wn(Hr,Gr,t,e);r.layers=this.layers,this.add(r);let a=new Wn(Hr,Gr,t,e);a.layers=this.layers,this.add(a);let o=new Wn(Hr,Gr,t,e);o.layers=this.layers,this.add(o);let c=new Wn(Hr,Gr,t,e);c.layers=this.layers,this.add(c);let h=new Wn(Hr,Gr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,x=t.getRenderTarget(),f=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(x,f,y),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Vc=class extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bd="\\[\\]\\.:\\/",H_=new RegExp("["+Bd+"]","g"),kd="[^"+Bd+"]",G_="[^"+Bd.replace("\\.","")+"]",W_=/((?:WC+[\/:])*)/.source.replace("WC",kd),X_=/(WCOD+)?/.source.replace("WCOD",G_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kd),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kd),Z_=new RegExp("^"+W_+X_+q_+Y_+"$"),J_=["material","materials","bones","map"],cd=class{constructor(t,e,n){let s=n||hn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},hn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(H_,"")}static parseTrackName(t){let e=Z_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);J_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ve("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hn.Composite=cd;hn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};hn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};hn.prototype.GetterByBindingType=[hn.prototype._getValue_direct,hn.prototype._getValue_array,hn.prototype._getValue_arrayElement,hn.prototype._getValue_toArray];hn.prototype.SetterByBindingTypeAndVersioning=[[hn.prototype._setValue_direct,hn.prototype._setValue_direct_setNeedsUpdate,hn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_array,hn.prototype._setValue_array_setNeedsUpdate,hn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_arrayElement,hn.prototype._setValue_arrayElement_setNeedsUpdate,hn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_fromArray,hn.prototype._setValue_fromArray_setNeedsUpdate,hn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hb=new Float32Array(1);var Ns=class extends mc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var zp=new ze,zo=class{constructor(t,e,n=0,s=1/0){this.ray=new rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ve("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zp),this}intersectObject(t,e=!0,n=[]){return hd(t,this,n,e),n.sort($p),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hd(t[s],this,n,e);return n.sort($p),n}};function $p(i,t){return i.distance-t.distance}function hd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hd(r[a],t,e,!0)}}var ud=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Vp=new X,Ql=new X,Wr=new X,Xr=new X,ju=new X,K_=new X,j_=new X,$o=class{constructor(t=new X,e=new X){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vp.subVectors(t,this.start),Ql.subVectors(this.end,this.start);let n=Ql.dot(Ql);if(n===0)return 0;let r=Ql.dot(Vp)/n;return e&&(r=Ee(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=K_,n=j_){let s=10000000000000001e-32,r,a,o=this.start,c=t.start,h=this.end,u=t.end;Wr.subVectors(h,o),Xr.subVectors(u,c),ju.subVectors(o,c);let x=Wr.dot(Wr),f=Xr.dot(Xr),y=Xr.dot(ju);if(x<=s&&f<=s)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(x<=s)r=0,a=y/f,a=Ee(a,0,1);else{let S=Wr.dot(ju);if(f<=s)a=0,r=Ee(-S/x,0,1);else{let I=Wr.dot(Xr),m=x*f-I*I;m!==0?r=Ee((I*y-S*f)/m,0,1):r=0,a=(I*r+y)/f,a<0?(a=0,r=Ee(-S/x,0,1)):a>1&&(a=1,r=Ee((I-S)/x,0,1))}}return e.copy(o).addScaledVector(Wr,r),n.copy(c).addScaledVector(Xr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function zd(i,t,e,n){let s=Q_(n);switch(e){case Id:return i*t;case Jc:return i*t/s.components*s.byteLength;case Kc:return i*t/s.components*s.byteLength;case ks:return i*t*2/s.components*s.byteLength;case jc:return i*t*2/s.components*s.byteLength;case Pd:return i*t*3/s.components*s.byteLength;case yi:return i*t*4/s.components*s.byteLength;case Qc:return i*t*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:case ih:return Math.max(i,16)*Math.max(t,8)/4;case th:case nh:return Math.max(i,8)*Math.max(t,8)/2;case sh:case rh:case oh:case lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ah:case Zo:case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wh:case Eh:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ah:case Ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jo:case Rh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q_(i){switch(i){case ri:case Td:return{byteLength:1,components:1};case ca:case Ad:case Ui:return{byteLength:2,components:1};case Yc:case Zc:return{byteLength:2,components:4};case Ni:case qc:case vi:return{byteLength:4,components:1};case Cd:case Rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ex(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,x=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,u),o.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:x}}function n(o,c,h){let u=c.array,x=c.updateRanges;if(i.bindBuffer(h,o),x.length===0)i.bufferSubData(h,0,u);else{x.sort((y,S)=>y.start-S.start);let f=0;for(let y=1;y<x.length;y++){let S=x[f],I=x[y];I.start<=S.start+S.count+1?S.count=Math.max(S.count,I.start+I.count-S.start):(++f,x[f]=I)}x.length=f+1;for(let y=0,S=x.length;y<S;y++){let I=x[y];i.bufferSubData(h,I.start*u.BYTES_PER_ELEMENT,u,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
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
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
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
#endif`,cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mx=`#ifdef USE_IRIDESCENCE
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
#endif`,gx=`#ifdef USE_BUMPMAP
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ex=`#define PI 3.141592653589793
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
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ax=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
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
}`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
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
#endif`,tv=`uniform sampler2D dfgLUT;
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
}`,ev=`
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dv=`#if defined( USE_POINTS_UV )
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
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
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
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$v=`float getShadowMask() {
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
}`,Vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,hy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,vy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,Sy=`#define MATCAP
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
}`,My=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Cy=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Iy=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:sx,alphamap_pars_fragment:rx,alphatest_fragment:ax,alphatest_pars_fragment:ox,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:hx,batching_vertex:ux,begin_vertex:dx,beginnormal_vertex:fx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:vx,clipping_planes_vertex:yx,color_fragment:Sx,color_pars_fragment:Mx,color_pars_vertex:bx,color_vertex:wx,common:Ex,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Ix,emissivemap_pars_fragment:Px,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Nx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Fx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:Yx,envmap_vertex:Bx,fog_vertex:kx,fog_pars_vertex:zx,fog_fragment:$x,fog_pars_fragment:Vx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:Gx,lights_lambert_fragment:Wx,lights_lambert_pars_fragment:Xx,lights_pars_begin:qx,lights_toon_fragment:Zx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:jx,lights_physical_fragment:Qx,lights_physical_pars_fragment:tv,lights_fragment_begin:ev,lights_fragment_maps:nv,lights_fragment_end:iv,lightprobes_pars_fragment:sv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:lv,map_fragment:cv,map_pars_fragment:hv,map_particle_fragment:uv,map_particle_pars_fragment:dv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:pv,morphinstance_vertex:mv,morphcolor_vertex:gv,morphnormal_vertex:_v,morphtarget_pars_vertex:xv,morphtarget_vertex:vv,normal_fragment_begin:yv,normal_fragment_maps:Sv,normal_pars_fragment:Mv,normal_pars_vertex:bv,normal_vertex:wv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Rv,opaque_fragment:Iv,packing:Pv,premultiplied_alpha_fragment:Lv,project_vertex:Dv,dithering_fragment:Nv,dithering_pars_fragment:Uv,roughnessmap_fragment:Fv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:kv,shadowmap_vertex:zv,shadowmask_pars_fragment:$v,skinbase_vertex:Vv,skinning_pars_vertex:Hv,skinning_vertex:Gv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:qv,tonemapping_fragment:Yv,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Kv,uv_pars_fragment:jv,uv_pars_vertex:Qv,uv_vertex:ty,worldpos_vertex:ey,background_vert:ny,background_frag:iy,backgroundCube_vert:sy,backgroundCube_frag:ry,cube_vert:ay,cube_frag:oy,depth_vert:ly,depth_frag:cy,distance_vert:hy,distance_frag:uy,equirect_vert:dy,equirect_frag:fy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:_y,meshlambert_vert:xy,meshlambert_frag:vy,meshmatcap_vert:yy,meshmatcap_frag:Sy,meshnormal_vert:My,meshnormal_frag:by,meshphong_vert:wy,meshphong_frag:Ey,meshphysical_vert:Ty,meshphysical_frag:Ay,meshtoon_vert:Cy,meshtoon_frag:Ry,points_vert:Iy,points_frag:Py,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Ny,sprite_frag:Uy},Gt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},jn={basic:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Xn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Xn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Xn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Xn([Gt.points,Gt.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Xn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Xn([Gt.common,Gt.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Xn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Xn([Gt.sprite,Gt.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:Xn([Gt.common,Gt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:Xn([Gt.lights,Gt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};jn.physical={uniforms:Xn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Dh={r:0,b:0,g:0},Fy=new ze,eg=new be;eg.set(-1,0,0,0,1,0,0,0,1);function Oy(i,t,e,n,s,r){let a=new fe(0),o=s===!0?0:1,c,h,u=null,x=0,f=null;function y(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){let R=O.backgroundBlurriness>0;B=t.get(B,R)}return B}function S(O){let B=!1,R=y(O);R===null?m(a,o):R&&R.isColor&&(m(R,1),B=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(O,B){let R=y(B);R&&(R.isCubeTexture||R.mapping===Ho)?(h===void 0&&(h=new Rn(new na(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:fr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(B.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(eg),h.material.toneMapped=Be.getTransfer(R.colorSpace)!==Je,(u!==R||x!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,x=R.version,f=i.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Rn(new Po(2,2),new In({name:"BackgroundMaterial",uniforms:fr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=Be.getTransfer(R.colorSpace)!==Je,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||x!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,x=R.version,f=i.toneMapping),c.layers.enableAll(),O.unshift(c,c.geometry,c.material,0,0,null))}function m(O,B){O.getRGB(Dh,Od(i)),e.buffers.color.setClear(Dh.r,Dh.g,Dh.b,B,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(O,B=1){a.set(O),o=B,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(O){o=O,m(a,o)},render:S,addToRenderList:I,dispose:p}}function By(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(q,et,rt,j,Q){let ht=!1,ft=x(q,j,rt,et);r!==ft&&(r=ft,h(r.object)),ht=y(q,j,rt,Q),ht&&S(q,j,rt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ht||a)&&(a=!1,R(q,et,rt,j),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(q){return i.bindVertexArray(q)}function u(q){return i.deleteVertexArray(q)}function x(q,et,rt,j){let Q=j.wireframe===!0,ht=n[et.id];ht===void 0&&(ht={},n[et.id]=ht);let ft=q.isInstancedMesh===!0?q.id:0,Tt=ht[ft];Tt===void 0&&(Tt={},ht[ft]=Tt);let mt=Tt[rt.id];mt===void 0&&(mt={},Tt[rt.id]=mt);let Mt=mt[Q];return Mt===void 0&&(Mt=f(c()),mt[Q]=Mt),Mt}function f(q){let et=[],rt=[],j=[];for(let Q=0;Q<e;Q++)et[Q]=0,rt[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:rt,attributeDivisors:j,object:q,attributes:{},index:null}}function y(q,et,rt,j){let Q=r.attributes,ht=et.attributes,ft=0,Tt=rt.getAttributes();for(let mt in Tt)if(Tt[mt].location>=0){let St=Q[mt],Wt=ht[mt];if(Wt===void 0&&(mt==="instanceMatrix"&&q.instanceMatrix&&(Wt=q.instanceMatrix),mt==="instanceColor"&&q.instanceColor&&(Wt=q.instanceColor)),St===void 0||St.attribute!==Wt||Wt&&St.data!==Wt.data)return!0;ft++}return r.attributesNum!==ft||r.index!==j}function S(q,et,rt,j){let Q={},ht=et.attributes,ft=0,Tt=rt.getAttributes();for(let mt in Tt)if(Tt[mt].location>=0){let St=ht[mt];St===void 0&&(mt==="instanceMatrix"&&q.instanceMatrix&&(St=q.instanceMatrix),mt==="instanceColor"&&q.instanceColor&&(St=q.instanceColor));let Wt={};Wt.attribute=St,St&&St.data&&(Wt.data=St.data),Q[mt]=Wt,ft++}r.attributes=Q,r.attributesNum=ft,r.index=j}function I(){let q=r.newAttributes;for(let et=0,rt=q.length;et<rt;et++)q[et]=0}function m(q){p(q,0)}function p(q,et){let rt=r.newAttributes,j=r.enabledAttributes,Q=r.attributeDivisors;rt[q]=1,j[q]===0&&(i.enableVertexAttribArray(q),j[q]=1),Q[q]!==et&&(i.vertexAttribDivisor(q,et),Q[q]=et)}function O(){let q=r.newAttributes,et=r.enabledAttributes;for(let rt=0,j=et.length;rt<j;rt++)et[rt]!==q[rt]&&(i.disableVertexAttribArray(rt),et[rt]=0)}function B(q,et,rt,j,Q,ht,ft){ft===!0?i.vertexAttribIPointer(q,et,rt,Q,ht):i.vertexAttribPointer(q,et,rt,j,Q,ht)}function R(q,et,rt,j){I();let Q=j.attributes,ht=rt.getAttributes(),ft=et.defaultAttributeValues;for(let Tt in ht){let mt=ht[Tt];if(mt.location>=0){let Mt=Q[Tt];if(Mt===void 0&&(Tt==="instanceMatrix"&&q.instanceMatrix&&(Mt=q.instanceMatrix),Tt==="instanceColor"&&q.instanceColor&&(Mt=q.instanceColor)),Mt!==void 0){let St=Mt.normalized,Wt=Mt.itemSize,Jt=t.get(Mt);if(Jt===void 0)continue;let $e=Jt.buffer,Ae=Jt.type,Oe=Jt.bytesPerElement,_t=Ae===i.INT||Ae===i.UNSIGNED_INT||Mt.gpuType===qc;if(Mt.isInterleavedBufferAttribute){let xt=Mt.data,It=xt.stride,ne=Mt.offset;if(xt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<mt.locationSize;Yt++)p(mt.location+Yt,xt.meshPerAttribute);q.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Yt=0;Yt<mt.locationSize;Yt++)m(mt.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Yt=0;Yt<mt.locationSize;Yt++)B(mt.location+Yt,Wt/mt.locationSize,Ae,St,It*Oe,(ne+Wt/mt.locationSize*Yt)*Oe,_t)}else{if(Mt.isInstancedBufferAttribute){for(let xt=0;xt<mt.locationSize;xt++)p(mt.location+xt,Mt.meshPerAttribute);q.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let xt=0;xt<mt.locationSize;xt++)m(mt.location+xt);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let xt=0;xt<mt.locationSize;xt++)B(mt.location+xt,Wt/mt.locationSize,Ae,St,Wt*Oe,Wt/mt.locationSize*xt*Oe,_t)}}else if(ft!==void 0){let St=ft[Tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(mt.location,St);break;case 3:i.vertexAttrib3fv(mt.location,St);break;case 4:i.vertexAttrib4fv(mt.location,St);break;default:i.vertexAttrib1fv(mt.location,St)}}}}O()}function w(){N();for(let q in n){let et=n[q];for(let rt in et){let j=et[rt];for(let Q in j){let ht=j[Q];for(let ft in ht)u(ht[ft].object),delete ht[ft];delete j[Q]}}delete n[q]}}function U(q){if(n[q.id]===void 0)return;let et=n[q.id];for(let rt in et){let j=et[rt];for(let Q in j){let ht=j[Q];for(let ft in ht)u(ht[ft].object),delete ht[ft];delete j[Q]}}delete n[q.id]}function G(q){for(let et in n){let rt=n[et];for(let j in rt){let Q=rt[j];if(Q[q.id]===void 0)continue;let ht=Q[q.id];for(let ft in ht)u(ht[ft].object),delete ht[ft];delete Q[q.id]}}}function A(q){for(let et in n){let rt=n[et],j=q.isInstancedMesh===!0?q.id:0,Q=rt[j];if(Q!==void 0){for(let ht in Q){let ft=Q[ht];for(let Tt in ft)u(ft[Tt].object),delete ft[Tt];delete Q[ht]}delete rt[j],Object.keys(rt).length===0&&delete n[et]}}}function N(){V(),a=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:U,releaseStatesOfObject:A,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:m,disableUnusedAttributes:O}}function ky(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let y=0;y<u;y++)f+=h[y];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==yi&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(G){let A=G===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ri&&G!==vi&&!A&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(pe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let x=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),U=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:f,maxTextures:y,maxVertexTextures:S,maxTextureSize:I,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:R,maxSamples:w,samples:U}}function $y(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ci,o=new be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(x,f){let y=x.length!==0||f||n!==0||s;return s=f,n=x.length,y},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,f){e=u(x,f,0)},this.setState=function(x,f,y){let S=x.clippingPlanes,I=x.clipIntersection,m=x.clipShadows,p=i.get(x);if(!s||S===null||S.length===0||r&&!m)r?u(null):h();else{let O=r?0:n,B=O*4,R=p.clippingState||null;c.value=R,R=u(S,f,B,y);for(let w=0;w!==B;++w)R[w]=e[w];p.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=O}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(x,f,y,S){let I=x!==null?x.length:0,m=null;if(I!==0){if(m=c.value,S!==!0||m===null){let p=y+I*4,O=f.matrixWorldInverse;o.getNormalMatrix(O),(m===null||m.length<p)&&(m=new Float32Array(p));for(let B=0,R=y;B!==I;++B,R+=4)a.copy(x[B]).applyMatrix4(O,o),a.normal.toArray(m,R),m[R+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,m}}var da=4,Vy=6,Hy=20,Gy=256,jo=new aa,Dm=new fe,$d=null,Vd=0,Hd=0,Gd=!1,Wy=new X,pr=new X,Uh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Wy}=r;$d=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($d,Vd,Hd),this._renderer.xr.enabled=Gd,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$d=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ui,format:yi,colorSpace:oo,depthBuffer:!1},s=Nm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xy(r)),this._blurMaterial=Yy(r,t,e),this._ggxMaterial=qy(r,t,e)}return s}_compileMaterial(t){let e=new Rn(new gn,t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s,r){let c=new Wn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],x=this._renderer,f=x.autoClear,y=x.toneMapping;x.getClearColor(Dm),x.toneMapping=Di,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new na,new ar({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,m=I.material,p=!1,O=t.background;O?O.isColor&&(m.color.copy(O),t.background=null,p=!0):(m.color.copy(Dm),p=!0);for(let B=0;B<6;B++){let R=B%3;R===0?(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[B],r.y,r.z)):R===1?(c.up.set(0,0,h[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[B],r.z)):(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[B]));let w=this._cubeSize;ua(s,R*w,B>2?w:0,w,w),x.setRenderTarget(s),p&&x.render(I,c),x.render(t,c)}x.toneMapping=y,x.autoClear=f,t.background=O}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fs||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ua(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),x=Math.sqrt(h*h-u*u),f=h*1.25,y=x*f,{_lodMax:S}=this,I=this._sizeLods[n],m=3*I*(n>S-da?n-S+da:0),p=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=S-e,ua(r,m,p,3*I,2*I),s.setRenderTarget(r),s.render(o,jo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,ua(t,m,p,3*I,2*I),s.setRenderTarget(t),s.render(o,jo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],x=3*u*(s>this._lodMax-da?s-this._lodMax+da:0),f=4*(this._cubeSize-u);ua(e,x,f,3*u,2*u),a.setRenderTarget(e),a.render(c,jo)}};function Xy(i){let t=[],e=[],n=i,s=i-da+1+Vy;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,u=[c,c,h,c,h,h,c,c,h,h,c,h],x=6,f=6,y=3,S=new Float32Array(y*f*x),I=new Float32Array(y*f*x);for(let p=0;p<x;p++){let O=p%3*2/3-1,B=p>2?0:-1,R=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];S.set(R,y*f*p);for(let w=0;w<f;w++){let U=u[w*2]*2-1,G=u[w*2+1]*2-1;p===0?pr.set(1,G,U):p===1?pr.set(-U,1,-G):p===2?pr.set(-U,G,1):p===3?pr.set(-1,G,-U):p===4?pr.set(-U,-1,G):pr.set(U,G,-1),pr.toArray(I,(p*f+w)*y)}}let m=new gn;m.setAttribute("position",new en(S,y)),m.setAttribute("outputDirection",new en(I,y)),e.push(new Rn(m,null)),n>da&&n--}return{lodMeshes:e,sizeLods:t}}function Nm(i,t,e){let n=new ii(i,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qy(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Yy(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Hy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Um(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fm(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fh=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new na(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:Ji});r.uniforms.tEquirect.value=e;let a=new Rn(s,r),o=e.minFilter;return e.minFilter===Os&&(e.minFilter=Un),new $c(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Zy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,y=!1){return f==null?null:y?a(f):r(f)}function r(f){if(f&&f.isTexture){let y=f.mapping;if(y===Gc||y===Wc)if(t.has(f)){let S=t.get(f).texture;return o(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let I=new Fh(S.height);return I.fromEquirectangularTexture(i,f),t.set(f,I),f.addEventListener("dispose",h),o(I.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let y=f.mapping,S=y===Gc||y===Wc,I=y===Fs||y===dr;if(S||I){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Uh(i)),m=S?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let O=f.image;return S&&O&&O.height>0||I&&O&&c(O)?(n===null&&(n=new Uh(i)),m=S?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,y){return y===Gc?f.mapping=Fs:y===Wc&&(f.mapping=dr),f}function c(f){let y=0,S=6;for(let I=0;I<S;I++)f[I]!==void 0&&y++;return y===S}function h(f){let y=f.target;y.removeEventListener("dispose",h);let S=t.get(y);S!==void 0&&(t.delete(y),S.dispose())}function u(f){let y=f.target;y.removeEventListener("dispose",u);let S=e.get(y);S!==void 0&&(e.delete(y),S.dispose())}function x(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:x}}function Jy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&sr("WebGLRenderer: "+n+" extension not supported."),s}}}function Ky(i,t,e,n){let s={},r=new WeakMap;function a(x){let f=x.target;f.index!==null&&t.remove(f.index);for(let S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",a),delete s[f.id];let y=r.get(f);y&&(t.remove(y),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(x,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(x){let f=x.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER)}function h(x){let f=[],y=x.index,S=x.attributes.position,I=0;if(S===void 0)return;if(y!==null){let O=y.array;I=y.version;for(let B=0,R=O.length;B<R;B+=3){let w=O[B+0],U=O[B+1],G=O[B+2];f.push(w,U,U,G,G,w)}}else{let O=S.array;I=S.version;for(let B=0,R=O.length/3-1;B<R;B+=3){let w=B+0,U=B+1,G=B+2;f.push(w,U,U,G,G,w)}}let m=new(S.count>=65535?mo:po)(f,1);m.version=I;let p=r.get(x);p&&t.remove(p),r.set(x,m)}function u(x){let f=r.get(x);if(f){let y=x.index;y!==null&&f.version<y.version&&h(x)}else h(x);return r.get(x)}return{get:o,update:c,getWireframeAttribute:u}}function jy(i,t,e){let n;function s(x){n=x}let r,a;function o(x){r=x.type,a=x.bytesPerElement}function c(x,f){i.drawElements(n,f,r,x*a),e.update(f,n,1)}function h(x,f,y){y!==0&&(i.drawElementsInstanced(n,f,r,x*a,y),e.update(f,n,y))}function u(x,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,x,0,y);let I=0;for(let m=0;m<y;m++)I+=f[m];e.update(I,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function Qy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tS(i,t,e){let n=new WeakMap,s=new Ke;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,x=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==x){let N=function(){G.dispose(),n.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let y=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,I=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],O=o.morphAttributes.color||[],B=0;y===!0&&(B=1),S===!0&&(B=2),I===!0&&(B=3);let R=o.attributes.position.count*B,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let U=new Float32Array(R*w*4*x),G=new uo(U,R,w,x);G.type=vi,G.needsUpdate=!0;let A=B*4;for(let V=0;V<x;V++){let q=m[V],et=p[V],rt=O[V],j=R*w*4*V;for(let Q=0;Q<q.count;Q++){let ht=Q*A;y===!0&&(s.fromBufferAttribute(q,Q),U[j+ht+0]=s.x,U[j+ht+1]=s.y,U[j+ht+2]=s.z,U[j+ht+3]=0),S===!0&&(s.fromBufferAttribute(et,Q),U[j+ht+4]=s.x,U[j+ht+5]=s.y,U[j+ht+6]=s.z,U[j+ht+7]=0),I===!0&&(s.fromBufferAttribute(rt,Q),U[j+ht+8]=s.x,U[j+ht+9]=s.y,U[j+ht+10]=s.z,U[j+ht+11]=rt.itemSize===4?s.w:1)}}f={count:x,texture:G,size:new $t(R,w)},n.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let S=o.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function eS(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,x=h.geometry,f=t.get(h,x);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==u&&(y.update(),r.set(y,u))}return f}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var nS={[xd]:"LINEAR_TONE_MAPPING",[vd]:"REINHARD_TONE_MAPPING",[yd]:"CINEON_TONE_MAPPING",[Sd]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[Md]:"CUSTOM_TONE_MAPPING"};function iS(i,t,e,n,s,r){let a=new ii(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new gn;h.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mn([0,2,0,0,2,0],2));let u=new Ac({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Rn(h,u),f=new aa(-1,1,1,-1,0,1),y=null,S=null,I=!1,m,p=null,O=[],B=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),c!==null&&c.setSize(R,w);for(let U=0;U<O.length;U++){let G=O[U];G.setSize&&G.setSize(R,w)}},this.setEffects=function(R){O=R,B=O.length>0&&O[0].isRenderPass===!0;let w=a.width,U=a.height;O.length>0&&o===null&&(o=new ii(w,U,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),c=new ii(w,U,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<O.length;G++){let A=O[G];A.setSize&&A.setSize(w,U)}},this.begin=function(R,w){if(I||R.toneMapping===Di&&O.length===0)return!1;if(p=w,w!==null){let U=w.width,G=w.height;(a.width!==U||a.height!==G)&&this.setSize(U,G)}return B===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Di,!0},this.hasRenderPass=function(){return B},this.end=function(R,w){R.toneMapping=m,I=!0;let U=a,G=o;for(let A=0;A<O.length;A++){let N=O[A];N.enabled!==!1&&(N.render(R,G,U,w),N.needsSwap!==!1&&(U=G,G=G===o?c:o))}if(y!==R.outputColorSpace||S!==R.toneMapping){y=R.outputColorSpace,S=R.toneMapping,u.defines={},Be.getTransfer(y)===Je&&(u.defines.SRGB_TRANSFER="");let A=nS[S];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(p),R.render(x,f),p=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var ng=new ni,qd=new Is(1,1),ig=new uo,sg=new pc,rg=new yo,Om=[],Bm=[],km=new Float32Array(16),zm=new Float32Array(9),$m=new Float32Array(4);function pa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Om[s];if(r===void 0&&(r=new Float32Array(s),Om[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function bn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kh(i,t){let e=Bm[t];e===void 0&&(e=new Int32Array(t),Bm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2fv(this.addr,t),bn(e,t)}}function aS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;i.uniform3fv(this.addr,t),bn(e,t)}}function oS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4fv(this.addr,t),bn(e,t)}}function lS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;$m.set(n),i.uniformMatrix2fv(this.addr,!1,$m),bn(e,n)}}function cS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;zm.set(n),i.uniformMatrix3fv(this.addr,!1,zm),bn(e,n)}}function hS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;km.set(n),i.uniformMatrix4fv(this.addr,!1,km),bn(e,n)}}function uS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2iv(this.addr,t),bn(e,t)}}function fS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3iv(this.addr,t),bn(e,t)}}function pS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4iv(this.addr,t),bn(e,t)}}function mS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2uiv(this.addr,t),bn(e,t)}}function _S(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3uiv(this.addr,t),bn(e,t)}}function xS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4uiv(this.addr,t),bn(e,t)}}function vS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qd.compareFunction=e.isReversedDepthBuffer()?Lh:Ph,r=qd):r=ng,e.setTexture2D(t||r,s)}function yS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sg,s)}function SS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rg,s)}function MS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ig,s)}function bS(i){switch(i){case 5126:return sS;case 35664:return rS;case 35665:return aS;case 35666:return oS;case 35674:return lS;case 35675:return cS;case 35676:return hS;case 5124:case 35670:return uS;case 35667:case 35671:return dS;case 35668:case 35672:return fS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return MS}}function wS(i,t){i.uniform1fv(this.addr,t)}function ES(i,t){let e=pa(t,this.size,2);i.uniform2fv(this.addr,e)}function TS(i,t){let e=pa(t,this.size,3);i.uniform3fv(this.addr,e)}function AS(i,t){let e=pa(t,this.size,4);i.uniform4fv(this.addr,e)}function CS(i,t){let e=pa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function RS(i,t){let e=pa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function IS(i,t){let e=pa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function PS(i,t){i.uniform1iv(this.addr,t)}function LS(i,t){i.uniform2iv(this.addr,t)}function DS(i,t){i.uniform3iv(this.addr,t)}function NS(i,t){i.uniform4iv(this.addr,t)}function US(i,t){i.uniform1uiv(this.addr,t)}function FS(i,t){i.uniform2uiv(this.addr,t)}function OS(i,t){i.uniform3uiv(this.addr,t)}function BS(i,t){i.uniform4uiv(this.addr,t)}function kS(i,t,e){let n=this.cache,s=t.length,r=kh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=qd:a=ng;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function zS(i,t,e){let n=this.cache,s=t.length,r=kh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sg,r[a])}function $S(i,t,e){let n=this.cache,s=t.length,r=kh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rg,r[a])}function VS(i,t,e){let n=this.cache,s=t.length,r=kh(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ig,r[a])}function HS(i){switch(i){case 5126:return wS;case 35664:return ES;case 35665:return TS;case 35666:return AS;case 35674:return CS;case 35675:return RS;case 35676:return IS;case 5124:case 35670:return PS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return VS}}var Yd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bS(e.type)}},Zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HS(e.type)}},Jd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wd=/(\w+)(\])?(\[|\.)?/g;function Vm(i,t){i.seq.push(t),i.map[t.id]=t}function GS(i,t,e){let n=i.name,s=n.length;for(Wd.lastIndex=0;;){let r=Wd.exec(n),a=Wd.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Vm(e,h===void 0?new Yd(o,i,t):new Zd(o,i,t));break}else{let x=e.map[o];x===void 0&&(x=new Jd(o),Vm(e,x)),e=x}}}var fa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);GS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var WS=37297,XS=0;function qS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Gm=new be;function YS(i){Be._getMatrix(Gm,Be.workingColorSpace,i);let t=`mat3( ${Gm.elements.map(e=>e.toFixed(4))} )`;switch(Be.getTransfer(i)){case lo:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qS(i.getShaderSource(t),o)}else return r}function ZS(i,t){let e=YS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var JS={[xd]:"Linear",[vd]:"Reinhard",[yd]:"Cineon",[Sd]:"ACESFilmic",[bd]:"AgX",[wd]:"Neutral",[Md]:"Custom"};function KS(i,t){let e=JS[t];return e===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nh=new X;function jS(){Be.getLuminanceCoefficients(Nh);let i=Nh.x.toFixed(4),t=Nh.y.toFixed(4),e=Nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function tM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function tl(i){return i!==""}function Xm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(i){return i.replace(nM,sM)}var iM=new Map;function sM(i,t){let e=Le[t];if(e===void 0){let n=iM.get(t);if(n!==void 0)e=Le[n],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kd(e)}var rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(i){return i.replace(rM,aM)}function aM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var oM={[Vo]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function lM(i){return oM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cM={[Fs]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function hM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uM={[dr]:"ENVMAP_MODE_REFRACTION"};function dM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fM={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[hm]:"ENVMAP_BLENDING_MIX",[um]:"ENVMAP_BLENDING_ADD"};function pM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fM[i.combine]||"ENVMAP_BLENDING_NONE"}function mM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=lM(e),h=hM(e),u=dM(e),x=pM(e),f=mM(e),y=QS(e),S=tM(r),I=s.createProgram(),m,p,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(tl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(tl).join(`
`),p.length>0&&(p+=`
`)):(m=[Zm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),p=[Zm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+x:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Le.tonemapping_pars_fragment:"",e.toneMapping!==Di?KS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,ZS("linearToOutputTexel",e.outputColorSpace),jS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tl).join(`
`)),a=Kd(a),a=Xm(a,e),a=qm(a,e),o=Kd(o),o=Xm(o,e),o=qm(o,e),a=Ym(a),o=Ym(o),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,m=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=O+m+a,R=O+p+o,w=Hm(s,s.VERTEX_SHADER,B),U=Hm(s,s.FRAGMENT_SHADER,R);s.attachShader(I,w),s.attachShader(I,U),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(q){if(i.debug.checkShaderErrors){let et=s.getProgramInfoLog(I)||"",rt=s.getShaderInfoLog(w)||"",j=s.getShaderInfoLog(U)||"",Q=et.trim(),ht=rt.trim(),ft=j.trim(),Tt=!0,mt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,w,U);else{let Mt=Wm(s,w,"vertex"),St=Wm(s,U,"fragment");ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Q+`
`+Mt+`
`+St)}else Q!==""?pe("WebGLProgram: Program Info Log:",Q):(ht===""||ft==="")&&(mt=!1);mt&&(q.diagnostics={runnable:Tt,programLog:Q,vertexShader:{log:ht,prefix:m},fragmentShader:{log:ft,prefix:p}})}s.deleteShader(w),s.deleteShader(U),A=new fa(s,I),N=eM(s,I)}let A;this.getUniforms=function(){return A===void 0&&G(this),A};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(I,WS)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XS++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=w,this.fragmentShader=U,this}var _M=0,jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qd(t),e.set(t,n)),n}},Qd=class{constructor(t){this.id=_M++,this.code=t,this.usedTimes=0}};function xM(i){return i===ks||i===Zo||i===Jo}function vM(i,t,e,n,s,r){let a=new Qr,o=new jd,c=new Set,h=[],u=new Map,x=n.logarithmicDepthBuffer,f=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return c.add(A),A===0?"uv":`uv${A}`}function I(A,N,V,q,et,rt){let j=q.fog,Q=et.geometry,ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Tt=t.get(A.envMap||ht,ft),mt=Tt&&Tt.mapping===Ho?Tt.image.height:null,Mt=y[A.type];A.precision!==null&&(f=n.getMaxPrecision(A.precision),f!==A.precision&&pe("WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Wt=St!==void 0?St.length:0,Jt=0;Q.morphAttributes.position!==void 0&&(Jt=1),Q.morphAttributes.normal!==void 0&&(Jt=2),Q.morphAttributes.color!==void 0&&(Jt=3);let $e,Ae,Oe,_t;if(Mt){let Ce=jn[Mt];$e=Ce.vertexShader,Ae=Ce.fragmentShader}else{$e=A.vertexShader,Ae=A.fragmentShader;let Ce=o.getVertexShaderStage(A),Re=o.getFragmentShaderStage(A);o.update(A,Ce,Re),Oe=Ce.id,_t=Re.id}let xt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),ne=et.isInstancedMesh===!0,Yt=et.isBatchedMesh===!0,he=!!A.map,ee=!!A.matcap,st=!!Tt,At=!!A.aoMap,H=!!A.lightMap,Ct=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,oe=!!A.displacementMap,ae=!!A.emissiveMap,de=!!A.metalnessMap,_e=!!A.roughnessMap,$=A.anisotropy>0,De=A.clearcoat>0,me=A.dispersion>0,L=A.retroreflectivity>0,M=A.iridescence>0,Y=A.sheen>0,ot=A.transmission>0,gt=$&&!!A.anisotropyMap,Pt=De&&!!A.clearcoatMap,Ot=De&&!!A.clearcoatNormalMap,pt=De&&!!A.clearcoatRoughnessMap,yt=M&&!!A.iridescenceMap,zt=M&&!!A.iridescenceThicknessMap,ie=Y&&!!A.sheenColorMap,Xt=Y&&!!A.sheenRoughnessMap,Vt=!!A.specularMap,se=!!A.specularColorMap,ue=!!A.specularIntensityMap,Se=ot&&!!A.transmissionMap,J=ot&&!!A.thicknessMap,Ft=!!A.gradientMap,vt=!!A.alphaMap,Ht=A.alphaTest>0,qt=!!A.alphaHash,Et=!!A.extensions,re=Di;A.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(re=i.toneMapping);let Qt={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:$e,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Oe,customFragmentShaderID:_t,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&et._colorsTexture!==null,instancing:ne,instancingColor:ne&&et.instanceColor!==null,instancingMorph:ne&&et.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:ee,envMap:st,envMapMode:st&&Tt.mapping,envMapCubeUVHeight:mt,aoMap:At,lightMap:H,bumpMap:Ct,normalMap:Bt,displacementMap:oe,emissiveMap:ae,normalMapObjectSpace:Bt&&A.normalMapType===pm,normalMapTangentSpace:Bt&&A.normalMapType===Ih,packedNormalMap:Bt&&A.normalMapType===Ih&&xM(A.normalMap.format),metalnessMap:de,roughnessMap:_e,anisotropy:$,anisotropyMap:gt,clearcoat:De,clearcoatMap:Pt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:pt,dispersion:me,retroreflection:L,iridescence:M,iridescenceMap:yt,iridescenceThicknessMap:zt,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:Xt,specularMap:Vt,specularColorMap:se,specularIntensityMap:ue,transmission:ot,transmissionMap:Se,thicknessMap:J,gradientMap:Ft,opaque:A.transparent===!1&&A.blending===la&&A.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ht,alphaHash:qt,combine:A.combine,mapUv:he&&S(A.map.channel),aoMapUv:At&&S(A.aoMap.channel),lightMapUv:H&&S(A.lightMap.channel),bumpMapUv:Ct&&S(A.bumpMap.channel),normalMapUv:Bt&&S(A.normalMap.channel),displacementMapUv:oe&&S(A.displacementMap.channel),emissiveMapUv:ae&&S(A.emissiveMap.channel),metalnessMapUv:de&&S(A.metalnessMap.channel),roughnessMapUv:_e&&S(A.roughnessMap.channel),anisotropyMapUv:gt&&S(A.anisotropyMap.channel),clearcoatMapUv:Pt&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&S(A.sheenRoughnessMap.channel),specularMapUv:Vt&&S(A.specularMap.channel),specularColorMapUv:se&&S(A.specularColorMap.channel),specularIntensityMapUv:ue&&S(A.specularIntensityMap.channel),transmissionMapUv:Se&&S(A.transmissionMap.channel),thicknessMapUv:J&&S(A.thicknessMap.channel),alphaMapUv:vt&&S(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Bt||$),vertexNormals:!!Q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Q.attributes.uv&&(he||vt),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:It,skinning:et.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Jt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&Be.getTransfer(A.map.colorSpace)===Je,decodeVideoTextureEmissive:ae&&A.emissiveMap.isVideoTexture===!0&&Be.getTransfer(A.emissiveMap.colorSpace)===Je,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Zi,flipSided:A.side===Kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function m(A){let N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(let V in A.defines)N.push(V),N.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(p(N,A),O(N,A),N.push(i.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function p(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numSunLights),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numSunLightShadows),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function O(A,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function B(A){let N=y[A.type],V;if(N){let q=jn[N];V=Ko.clone(q.uniforms)}else V=A.uniforms;return V}function R(A,N){let V=u.get(N);return V!==void 0?++V.usedTimes:(V=new gM(i,N,A,s),h.push(V),u.set(N,V)),V}function w(A){if(--A.usedTimes===0){let N=h.indexOf(A);h[N]=h[h.length-1],h.pop(),u.delete(A.cacheKey),A.destroy()}}function U(A){o.remove(A)}function G(){o.dispose()}return{getParameters:I,getProgramCacheKey:m,getUniforms:B,acquireProgram:R,releaseProgram:w,releaseShaderCache:U,programs:h,dispose:G}}function yM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function SM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Km(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let y=0;return f.isInstancedMesh&&(y+=2),f.isSkinnedMesh&&(y+=1),y}function o(f,y,S,I,m,p){let O=i[t];return O===void 0?(O={id:f.id,object:f,geometry:y,material:S,materialVariant:a(f),groupOrder:I,renderOrder:f.renderOrder,z:m,group:p},i[t]=O):(O.id=f.id,O.object=f,O.geometry=y,O.material=S,O.materialVariant=a(f),O.groupOrder=I,O.renderOrder=f.renderOrder,O.z=m,O.group=p),t++,O}function c(f,y,S,I,m,p,O){O.reversedDepth===!0&&(m=-m);let B=o(f,y,S,I,m,p);S.transmission>0?n.push(B):S.transparent===!0?s.push(B):e.push(B)}function h(f,y,S,I,m,p){let O=o(f,y,S,I,m,p);S.transmission>0?n.unshift(O):S.transparent===!0?s.unshift(O):e.unshift(O)}function u(f,y){e.length>1&&e.sort(f||SM),n.length>1&&n.sort(y||Jm),s.length>1&&s.sort(y||Jm)}function x(){for(let f=t,y=i.length;f<y;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:x,sort:u}}function MM(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Km,i.set(n,[a])):s>=r.length?(a=new Km,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new fe};break;case"SpotLight":e={position:new X,direction:new X,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function wM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var EM=0;function TM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function AM(i){let t=new bM,e=wM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);let s=new X,r=new ze,a=new ze;function o(h){let u=0,x=0,f=0;for(let et=0;et<9;et++)n.probe[et].set(0,0,0);let y=0,S=0,I=0,m=0,p=0,O=0,B=0,R=0,w=0,U=0,G=0,A=0,N=0,V=0;h.sort(TM);for(let et=0,rt=h.length;et<rt;et++){let j=h[et],Q=j.color,ht=j.intensity,ft=j.distance,Tt=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===ks?Tt=j.shadow.map.texture:Tt=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)u+=Q.r*ht,x+=Q.g*ht,f+=Q.b*ht;else if(j.isLightProbe){for(let mt=0;mt<9;mt++)n.probe[mt].addScaledVector(j.sh.coefficients[mt],ht);V++}else if(j.isSunLight){let mt=t.get(j);if(mt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let Mt=j.shadow,St=e.get(j);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[S]=St,n.sunShadowMap[S]=Tt;let Wt=Mt.getViewportCount();for(let Jt=0;Jt<Wt;Jt++)n.sunShadowMatrix[I+Jt]=Mt.getMatrix(Jt),n.sunShadowCascade[I+Jt]=Mt._cascadeData[Jt];I+=Wt,S++}n.sun[y]=mt,y++}else if(j.isDirectionalLight){let mt=t.get(j);if(mt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let Mt=j.shadow,St=e.get(j);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.directionalShadow[m]=St,n.directionalShadowMap[m]=Tt,n.directionalShadowMatrix[m]=j.shadow.matrix,w++}n.directional[m]=mt,m++}else if(j.isSpotLight){let mt=t.get(j);mt.position.setFromMatrixPosition(j.matrixWorld),mt.color.copy(Q).multiplyScalar(ht),mt.distance=ft,mt.coneCos=Math.cos(j.angle),mt.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),mt.decay=j.decay,n.spot[O]=mt;let Mt=j.shadow;if(j.map&&(n.spotLightMap[A]=j.map,A++,Mt.updateMatrices(j),j.castShadow&&N++),n.spotLightMatrix[O]=Mt.matrix,j.castShadow){let St=e.get(j);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.spotShadow[O]=St,n.spotShadowMap[O]=Tt,G++}O++}else if(j.isRectAreaLight){let mt=t.get(j);mt.color.copy(Q).multiplyScalar(ht),mt.halfWidth.set(j.width*.5,0,0),mt.halfHeight.set(0,j.height*.5,0),n.rectArea[B]=mt,B++}else if(j.isPointLight){let mt=t.get(j);if(mt.color.copy(j.color).multiplyScalar(j.intensity),mt.distance=j.distance,mt.decay=j.decay,j.castShadow){let Mt=j.shadow,St=e.get(j);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,St.shadowCameraNear=Mt.camera.near,St.shadowCameraFar=Mt.camera.far,n.pointShadow[p]=St,n.pointShadowMap[p]=Tt,n.pointShadowMatrix[p]=j.shadow.matrix,U++}n.point[p]=mt,p++}else if(j.isHemisphereLight){let mt=t.get(j);mt.skyColor.copy(j.color).multiplyScalar(ht),mt.groundColor.copy(j.groundColor).multiplyScalar(ht),n.hemi[R]=mt,R++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=x,n.ambient[2]=f;let q=n.hash;(q.sunLength!==y||q.directionalLength!==m||q.pointLength!==p||q.spotLength!==O||q.rectAreaLength!==B||q.hemiLength!==R||q.numSunShadows!==S||q.numDirectionalShadows!==w||q.numPointShadows!==U||q.numSpotShadows!==G||q.numSpotMaps!==A||q.numLightProbes!==V)&&(n.sun.length=y,n.directional.length=m,n.spot.length=O,n.rectArea.length=B,n.point.length=p,n.hemi.length=R,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=U,n.pointShadowMap.length=U,n.pointShadowMatrix.length=U,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+A-N,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=V,q.sunLength=y,q.directionalLength=m,q.pointLength=p,q.spotLength=O,q.rectAreaLength=B,q.hemiLength=R,q.numSunShadows=S,q.numDirectionalShadows=w,q.numPointShadows=U,q.numSpotShadows=G,q.numSpotMaps=A,q.numLightProbes=V,n.version=EM++)}function c(h,u){let x=0,f=0,y=0,S=0,I=0,m=0,p=u.matrixWorldInverse;for(let O=0,B=h.length;O<B;O++){let R=h[O];if(R.isSunLight){let w=n.sun[x];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(p),x++}else if(R.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(R.isSpotLight){let w=n.spot[S];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),S++}else if(R.isRectAreaLight){let w=n.rectArea[I];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(R.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let w=n.point[y];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(p),y++}else if(R.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function jm(i){let t=new AM(i),e=[],n=[],s=[];function r(f){x.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function h(){t.setup(e)}function u(f){t.setupView(e,f)}let x={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:x,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function CM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new jm(i),t.set(s,[o])):r>=a.length?(o=new jm(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`,PM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],LM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Qm=new ze,Qo=new X,Xd=new X;function DM(i,t,e){let n=new ea,s=new $t,r=new $t,a=new Ke,o=new Cc,c=new Rc,h={},u=e.maxTextureSize,x={[Us]:Kn,[Kn]:Us,[Zi]:Zi},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:RM,fragmentShader:IM}),y=f.clone();y.defines.HORIZONTAL_PASS=1;let S=new gn;S.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Rn(S,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let p=this.type;this.render=function(U,G,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;this.type===Wp&&(pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vo);let N=i.getRenderTarget(),V=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),et=i.state;et.setBlending(Ji),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);let rt=p!==this.type;rt&&G.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(Q=>Q.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,Q=U.length;j<Q;j++){let ht=U[j],ft=ht.shadow;if(ft===void 0){pe("WebGLShadowMap:",ht,"has no shadow.");continue}if(ft.autoUpdate===!1&&ft.needsUpdate===!1)continue;s.copy(ft.mapSize);let Tt=ft.getFrameExtents();s.multiply(Tt),r.copy(ft.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Tt.x),s.x=r.x*Tt.x,ft.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Tt.y),s.y=r.y*Tt.y,ft.mapSize.y=r.y));let mt=i.state.buffers.depth.getReversed();if(ft.camera._reversedDepth=mt,ft.map===null||rt===!0){if(ft.map!==null&&(ft.map.depthTexture!==null&&(ft.map.depthTexture.dispose(),ft.map.depthTexture=null),ft.map.dispose()),this.type===oa){if(ht.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ft.map=new ii(s.x,s.y,{format:ks,type:Ui,minFilter:Un,magFilter:Un,generateMipmaps:!1}),ft.map.texture.name=ht.name+".shadowMap",ft.map.depthTexture=new Is(s.x,s.y,vi),ft.map.depthTexture.name=ht.name+".shadowMapDepth",ft.map.depthTexture.format=Wi,ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=An,ft.map.depthTexture.magFilter=An}else ht.isPointLight?(ft.map=new Fh(s.x),ft.map.depthTexture=new yc(s.x,Ni)):(ft.map=new ii(s.x,s.y),ft.map.depthTexture=new Is(s.x,s.y,Ni)),ft.map.depthTexture.name=ht.name+".shadowMap",ft.map.depthTexture.format=Wi,this.type===Vo?(ft.map.depthTexture.compareFunction=mt?Lh:Ph,ft.map.depthTexture.minFilter=Un,ft.map.depthTexture.magFilter=Un):(ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=An,ft.map.depthTexture.magFilter=An);ft.camera.updateProjectionMatrix()}ft.map.isWebGLCubeRenderTarget!==!0&&(ft.map.width!==s.x||ft.map.height!==s.y)&&ft.map.setSize(s.x,s.y);let Mt=ft.map.isWebGLCubeRenderTarget?6:ft.getViewportCount();ht.isPointLight!==!0&&ft.updateMatrices(ht,A);for(let St=0;St<Mt;St++){let Wt=ft.getCamera(St);if(ht.isPointLight){let Jt=ft.camera,$e=ft.matrix,Ae=ht.distance||Jt.far;Ae!==Jt.far&&(Jt.far=Ae,Jt.updateProjectionMatrix()),Qo.setFromMatrixPosition(ht.matrixWorld),Jt.position.copy(Qo),Xd.copy(Jt.position),Xd.add(PM[St]),Jt.up.copy(LM[St]),Jt.lookAt(Xd),Jt.updateMatrixWorld(),$e.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Qm.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),ft._frustum.setFromProjectionMatrix(Qm,Jt.coordinateSystem,Jt.reversedDepth)}if(ft.map.isWebGLCubeRenderTarget)i.setRenderTarget(ft.map,St),i.clear();else{St===0&&(i.setRenderTarget(ft.map),i.clear());let Jt=ft.getViewport(St);a.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),et.viewport(a)}n=ft.getFrustum(St),R(G,A,Wt,ht,this.type)}ft.isPointLightShadow!==!0&&this.type===oa&&O(ft,A),ft.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,V,q)};function O(U,G){let A=t.update(I);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new ii(s.x,s.y,{format:ks,type:Ui}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),f.uniforms.shadow_pass.value=U.map.depthTexture,f.uniforms.resolution.value.set(U.map.width,U.map.height),f.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(G,null,A,f,I,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(G,null,A,y,I,null)}function B(U,G,A,N){let V=null,q=A.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(q!==void 0)V=q;else if(V=A.isPointLight===!0?c:o,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let et=V.uuid,rt=G.uuid,j=h[et];j===void 0&&(j={},h[et]=j);let Q=j[rt];Q===void 0&&(Q=V.clone(),j[rt]=Q,G.addEventListener("dispose",w)),V=Q}if(V.visible=G.visible,V.wireframe=G.wireframe,N===oa?V.side=G.shadowSide!==null?G.shadowSide:G.side:V.side=G.shadowSide!==null?G.shadowSide:x[G.side],V.alphaMap=G.alphaMap,V.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,V.map=G.map,V.clipShadows=G.clipShadows,V.clippingPlanes=G.clippingPlanes,V.clipIntersection=G.clipIntersection,V.displacementMap=G.displacementMap,V.displacementScale=G.displacementScale,V.displacementBias=G.displacementBias,V.wireframeLinewidth=G.wireframeLinewidth,V.linewidth=G.linewidth,A.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let et=i.properties.get(V);et.light=A}return V}function R(U,G,A,N,V){if(U.visible===!1)return;if(U.layers.test(G.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===oa)&&(!U.frustumCulled||U.intersectsFrustum(n))){U.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,U.matrixWorld);let rt=t.update(U),j=U.material;if(Array.isArray(j)){let Q=rt.groups;for(let ht=0,ft=Q.length;ht<ft;ht++){let Tt=Q[ht],mt=j[Tt.materialIndex];if(mt&&mt.visible){let Mt=B(U,mt,N,V);U.onBeforeShadow(i,U,G,A,rt,Mt,Tt),i.renderBufferDirect(A,null,rt,Mt,U,Tt),U.onAfterShadow(i,U,G,A,rt,Mt,Tt)}}}else if(j.visible){let Q=B(U,j,N,V);U.onBeforeShadow(i,U,G,A,rt,Q,null),i.renderBufferDirect(A,null,rt,Q,U,null),U.onAfterShadow(i,U,G,A,rt,Q,null)}}let et=U.children;for(let rt=0,j=et.length;rt<j;rt++)R(et[rt],G,A,N,V)}function w(U){U.target.removeEventListener("dispose",w);for(let A in h){let N=h[A],V=U.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function NM(i,t){function e(){let J=!1,Ft=new Ke,vt=null,Ht=new Ke(0,0,0,0);return{setMask:function(qt){vt!==qt&&!J&&(i.colorMask(qt,qt,qt,qt),vt=qt)},setLocked:function(qt){J=qt},setClear:function(qt,Et,re,Qt,Ce){Ce===!0&&(qt*=Qt,Et*=Qt,re*=Qt),Ft.set(qt,Et,re,Qt),Ht.equals(Ft)===!1&&(i.clearColor(qt,Et,re,Qt),Ht.copy(Ft))},reset:function(){J=!1,vt=null,Ht.set(-1,0,0,0)}}}function n(){let J=!1,Ft=!1,vt=null,Ht=null,qt=null;return{setReversed:function(Et){if(Ft!==Et){let re=t.get("EXT_clip_control");Et?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),Ft=Et;let Qt=qt;qt=null,this.setClear(Qt)}},getReversed:function(){return Ft},setTest:function(Et){Et?xt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(Et){vt!==Et&&!J&&(i.depthMask(Et),vt=Et)},setFunc:function(Et){if(Ft&&(Et=Em[Et]),Ht!==Et){switch(Et){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case ac:i.depthFunc(i.GEQUAL);break;case oc:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ht=Et}},setLocked:function(Et){J=Et},setClear:function(Et){qt!==Et&&(qt=Et,Ft&&(Et=1-Et),i.clearDepth(Et))},reset:function(){J=!1,vt=null,Ht=null,qt=null,Ft=!1}}}function s(){let J=!1,Ft=null,vt=null,Ht=null,qt=null,Et=null,re=null,Qt=null,Ce=null;return{setTest:function(Re){J||(Re?xt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(Re){Ft!==Re&&!J&&(i.stencilMask(Re),Ft=Re)},setFunc:function(Re,_n,Yn){(vt!==Re||Ht!==_n||qt!==Yn)&&(i.stencilFunc(Re,_n,Yn),vt=Re,Ht=_n,qt=Yn)},setOp:function(Re,_n,Yn){(Et!==Re||re!==_n||Qt!==Yn)&&(i.stencilOp(Re,_n,Yn),Et=Re,re=_n,Qt=Yn)},setLocked:function(Re){J=Re},setClear:function(Re){Ce!==Re&&(i.clearStencil(Re),Ce=Re)},reset:function(){J=!1,Ft=null,vt=null,Ht=null,qt=null,Et=null,re=null,Qt=null,Ce=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},x={},f={},y=new WeakMap,S=[],I=null,m=!1,p=null,O=null,B=null,R=null,w=null,U=null,G=null,A=new fe(0,0,0),N=0,V=!1,q=null,et=null,rt=null,j=null,Q=null,ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ft=!1,Tt=0,mt=i.getParameter(i.VERSION);mt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),ft=Tt>=1):mt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),ft=Tt>=2);let Mt=null,St={},Wt=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),$e=new Ke().fromArray(Wt),Ae=new Ke().fromArray(Jt);function Oe(J,Ft,vt,Ht){let qt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(J,Et),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<vt;re++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ft,0,i.RGBA,1,1,Ht,0,i.RGBA,i.UNSIGNED_BYTE,qt):i.texImage2D(Ft+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qt);return Et}let _t={};_t[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(Yr),Ct(!1),Bt(dd),xt(i.CULL_FACE),At(Ji);function xt(J){u[J]!==!0&&(i.enable(J),u[J]=!0)}function It(J){u[J]!==!1&&(i.disable(J),u[J]=!1)}function ne(J,Ft){return f[J]!==Ft?(i.bindFramebuffer(J,Ft),f[J]=Ft,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ft),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ft),!0):!1}function Yt(J,Ft){let vt=S,Ht=!1;if(J){vt=y.get(Ft),vt===void 0&&(vt=[],y.set(Ft,vt));let qt=J.textures;if(vt.length!==qt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,re=qt.length;Et<re;Et++)vt[Et]=i.COLOR_ATTACHMENT0+Et;vt.length=qt.length,Ht=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Ht=!0);Ht&&i.drawBuffers(vt)}function he(J){return I!==J?(i.useProgram(J),I=J,!0):!1}let ee={[ur]:i.FUNC_ADD,[qp]:i.FUNC_SUBTRACT,[Yp]:i.FUNC_REVERSE_SUBTRACT};ee[Zp]=i.MIN,ee[Jp]=i.MAX;let st={[Kp]:i.ZERO,[jp]:i.ONE,[Qp]:i.SRC_COLOR,[gd]:i.SRC_ALPHA,[rm]:i.SRC_ALPHA_SATURATE,[im]:i.DST_COLOR,[em]:i.DST_ALPHA,[tm]:i.ONE_MINUS_SRC_COLOR,[_d]:i.ONE_MINUS_SRC_ALPHA,[sm]:i.ONE_MINUS_DST_COLOR,[nm]:i.ONE_MINUS_DST_ALPHA,[am]:i.CONSTANT_COLOR,[om]:i.ONE_MINUS_CONSTANT_COLOR,[lm]:i.CONSTANT_ALPHA,[cm]:i.ONE_MINUS_CONSTANT_ALPHA};function At(J,Ft,vt,Ht,qt,Et,re,Qt,Ce,Re){if(J===Ji){m===!0&&(It(i.BLEND),m=!1);return}if(m===!1&&(xt(i.BLEND),m=!0),J!==Xp){if(J!==p||Re!==V){if((O!==ur||w!==ur)&&(i.blendEquation(i.FUNC_ADD),O=ur,w=ur),Re)switch(J){case la:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fd:i.blendFunc(i.ONE,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ve("WebGLState: Invalid blending: ",J);break}else switch(J){case la:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pd:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case md:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",J);break}B=null,R=null,U=null,G=null,A.set(0,0,0),N=0,p=J,V=Re}return}qt=qt||Ft,Et=Et||vt,re=re||Ht,(Ft!==O||qt!==w)&&(i.blendEquationSeparate(ee[Ft],ee[qt]),O=Ft,w=qt),(vt!==B||Ht!==R||Et!==U||re!==G)&&(i.blendFuncSeparate(st[vt],st[Ht],st[Et],st[re]),B=vt,R=Ht,U=Et,G=re),(Qt.equals(A)===!1||Ce!==N)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Ce),A.copy(Qt),N=Ce),p=J,V=!1}function H(J,Ft){J.side===Zi?It(i.CULL_FACE):xt(i.CULL_FACE);let vt=J.side===Kn;Ft&&(vt=!vt),Ct(vt),J.blending===la&&J.transparent===!1?At(Ji):At(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),r.setMask(J.colorWrite);let Ht=J.stencilWrite;o.setTest(Ht),Ht&&(o.setMask(J.stencilWriteMask),o.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),o.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),ae(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(J){q!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),q=J)}function Bt(J){J!==Hp?(xt(i.CULL_FACE),J!==et&&(J===dd?i.cullFace(i.BACK):J===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),et=J}function oe(J){J!==rt&&(ft&&i.lineWidth(J),rt=J)}function ae(J,Ft,vt){J?(xt(i.POLYGON_OFFSET_FILL),(j!==Ft||Q!==vt)&&(j=Ft,Q=vt,a.getReversed()&&(Ft=-Ft),i.polygonOffset(Ft,vt))):It(i.POLYGON_OFFSET_FILL)}function de(J){J?xt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function _e(J){J===void 0&&(J=i.TEXTURE0+ht-1),Mt!==J&&(i.activeTexture(J),Mt=J)}function $(J,Ft,vt){vt===void 0&&(Mt===null?vt=i.TEXTURE0+ht-1:vt=Mt);let Ht=St[vt];Ht===void 0&&(Ht={type:void 0,texture:void 0},St[vt]=Ht),(Ht.type!==J||Ht.texture!==Ft)&&(Mt!==vt&&(i.activeTexture(vt),Mt=vt),i.bindTexture(J,Ft||_t[J]),Ht.type=J,Ht.texture=Ft)}function De(){let J=St[Mt];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(J){ve("WebGLState:",J)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(J){ve("WebGLState:",J)}}function M(){try{i.texSubImage2D(...arguments)}catch(J){ve("WebGLState:",J)}}function Y(){try{i.texSubImage3D(...arguments)}catch(J){ve("WebGLState:",J)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(J){ve("WebGLState:",J)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(J){ve("WebGLState:",J)}}function Pt(){try{i.texStorage2D(...arguments)}catch(J){ve("WebGLState:",J)}}function Ot(){try{i.texStorage3D(...arguments)}catch(J){ve("WebGLState:",J)}}function pt(){try{i.texImage2D(...arguments)}catch(J){ve("WebGLState:",J)}}function yt(){try{i.texImage3D(...arguments)}catch(J){ve("WebGLState:",J)}}function zt(J){return x[J]!==void 0?x[J]:i.getParameter(J)}function ie(J,Ft){x[J]!==Ft&&(i.pixelStorei(J,Ft),x[J]=Ft)}function Xt(J){$e.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),$e.copy(J))}function Vt(J){Ae.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Ae.copy(J))}function se(J,Ft){let vt=h.get(Ft);vt===void 0&&(vt=new WeakMap,h.set(Ft,vt));let Ht=vt.get(J);Ht===void 0&&(Ht=i.getUniformBlockIndex(Ft,J.name),vt.set(J,Ht))}function ue(J,Ft){let Ht=h.get(Ft).get(J);c.get(Ft)!==Ht&&(i.uniformBlockBinding(Ft,Ht,J.__bindingPointIndex),c.set(Ft,Ht))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},x={},Mt=null,St={},f={},y=new WeakMap,S=[],I=null,m=!1,p=null,O=null,B=null,R=null,w=null,U=null,G=null,A=new fe(0,0,0),N=0,V=!1,q=null,et=null,rt=null,j=null,Q=null,$e.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:It,bindFramebuffer:ne,drawBuffers:Yt,useProgram:he,setBlending:At,setMaterial:H,setFlipSided:Ct,setCullFace:Bt,setLineWidth:oe,setPolygonOffset:ae,setScissorTest:de,activeTexture:_e,bindTexture:$,unbindTexture:De,compressedTexImage2D:me,compressedTexImage3D:L,texImage2D:pt,texImage3D:yt,pixelStorei:ie,getParameter:zt,updateUBOMapping:se,uniformBlockBinding:ue,texStorage2D:Pt,texStorage3D:Ot,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:ot,compressedTexSubImage3D:gt,scissor:Xt,viewport:Vt,reset:Se}}function UM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,u=new WeakMap,x=new Set,f,y=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(L,M){return S?new OffscreenCanvas(L,M):co("canvas")}function m(L,M,Y){let ot=1,gt=me(L);if((gt.width>Y||gt.height>Y)&&(ot=Y/Math.max(gt.width,gt.height)),ot<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Pt=Math.floor(ot*gt.width),Ot=Math.floor(ot*gt.height);f===void 0&&(f=I(Pt,Ot));let pt=M?I(Pt,Ot):f;return pt.width=Pt,pt.height=Ot,pt.getContext("2d").drawImage(L,0,0,Pt,Ot),pe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Pt+"x"+Ot+")."),pt}else return"data"in L&&pe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),L;return L}function p(L){return L.generateMipmaps}function O(L){i.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,M,Y,ot,gt,Pt=!1){if(L!==null){if(i[L]!==void 0)return i[L];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ot;ot&&(Ot=t.get("EXT_texture_norm16"),Ot||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=M;if(M===i.RED&&(Y===i.FLOAT&&(pt=i.R32F),Y===i.HALF_FLOAT&&(pt=i.R16F),Y===i.UNSIGNED_BYTE&&(pt=i.R8),Y===i.UNSIGNED_SHORT&&Ot&&(pt=Ot.R16_EXT),Y===i.SHORT&&Ot&&(pt=Ot.R16_SNORM_EXT)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.R8UI),Y===i.UNSIGNED_SHORT&&(pt=i.R16UI),Y===i.UNSIGNED_INT&&(pt=i.R32UI),Y===i.BYTE&&(pt=i.R8I),Y===i.SHORT&&(pt=i.R16I),Y===i.INT&&(pt=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(pt=i.RG32F),Y===i.HALF_FLOAT&&(pt=i.RG16F),Y===i.UNSIGNED_BYTE&&(pt=i.RG8),Y===i.UNSIGNED_SHORT&&Ot&&(pt=Ot.RG16_EXT),Y===i.SHORT&&Ot&&(pt=Ot.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(pt=i.RG16UI),Y===i.UNSIGNED_INT&&(pt=i.RG32UI),Y===i.BYTE&&(pt=i.RG8I),Y===i.SHORT&&(pt=i.RG16I),Y===i.INT&&(pt=i.RG32I)),M===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),Y===i.UNSIGNED_INT&&(pt=i.RGB32UI),Y===i.BYTE&&(pt=i.RGB8I),Y===i.SHORT&&(pt=i.RGB16I),Y===i.INT&&(pt=i.RGB32I)),M===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(pt=i.RGBA32UI),Y===i.BYTE&&(pt=i.RGBA8I),Y===i.SHORT&&(pt=i.RGBA16I),Y===i.INT&&(pt=i.RGBA32I)),M===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ot&&(pt=Ot.RGB16_EXT),Y===i.SHORT&&Ot&&(pt=Ot.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),M===i.RGBA){let yt=Pt?lo:Be.getTransfer(gt);Y===i.FLOAT&&(pt=i.RGBA32F),Y===i.HALF_FLOAT&&(pt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(pt=yt===Je?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ot&&(pt=Ot.RGBA16_EXT),Y===i.SHORT&&Ot&&(pt=Ot.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function w(L,M){let Y;return L?M===null||M===Ni||M===ha?Y=i.DEPTH24_STENCIL8:M===vi?Y=i.DEPTH32F_STENCIL8:M===ca&&(Y=i.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===ha?Y=i.DEPTH_COMPONENT24:M===vi?Y=i.DEPTH_COMPONENT32F:M===ca&&(Y=i.DEPTH_COMPONENT16),Y}function U(L,M){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function G(L){let M=L.target;M.removeEventListener("dispose",G),N(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&x.delete(M)}function A(L){let M=L.target;M.removeEventListener("dispose",A),q(M)}function N(L){let M=n.get(L);if(M.__webglInit===void 0)return;let Y=L.source,ot=y.get(Y);if(ot){let gt=ot[M.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&V(L),Object.keys(ot).length===0&&y.delete(Y)}n.remove(L)}function V(L){let M=n.get(L);i.deleteTexture(M.__webglTexture);let Y=L.source,ot=y.get(Y);delete ot[M.__cacheKey],a.memory.textures--}function q(L){let M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let gt=0;gt<M.__webglFramebuffer[ot].length;gt++)i.deleteFramebuffer(M.__webglFramebuffer[ot][gt]);else i.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[ot]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=L.textures;for(let ot=0,gt=Y.length;ot<gt;ot++){let Pt=n.get(Y[ot]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(Y[ot])}n.remove(L)}let et=0;function rt(){et=0}function j(){return et}function Q(L){et=L}function ht(){let L=et;return L>=s.maxTextures&&pe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,L}function ft(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Tt(L,M){let Y=n.get(L);if(L.isVideoTexture&&$(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let ot=L.image;if(ot===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{It(Y,L,M);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function mt(L,M){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){It(Y,L,M);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function Mt(L,M){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){It(Y,L,M);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function St(L,M){let Y=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){ne(Y,L,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}let Wt={[cc]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},Jt={[An]:i.NEAREST,[dm]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[Os]:i.LINEAR_MIPMAP_LINEAR},$e={[gm]:i.NEVER,[Sm]:i.ALWAYS,[_m]:i.LESS,[Ph]:i.LEQUAL,[xm]:i.EQUAL,[Lh]:i.GEQUAL,[vm]:i.GREATER,[ym]:i.NOTEQUAL};function Ae(L,M){if(M.type===vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===Xc||M.magFilter===Go||M.magFilter===Os||M.minFilter===Un||M.minFilter===Xc||M.minFilter===Go||M.minFilter===Os)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Wt[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Wt[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Wt[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Jt[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Jt[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,$e[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Go&&M.minFilter!==Os||M.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(L,M){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",G));let ot=M.source,gt=y.get(ot);gt===void 0&&(gt={},y.set(ot,gt));let Pt=ft(M);if(Pt!==L.__cacheKey){gt[Pt]===void 0&&(gt[Pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),gt[Pt].usedTimes++;let Ot=gt[L.__cacheKey];Ot!==void 0&&(gt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&V(M)),L.__cacheKey=Pt,L.__webglTexture=gt[Pt].texture}return Y}function _t(L,M,Y){return Math.floor(Math.floor(L/Y)/M)}function xt(L,M,Y,ot){let Pt=L.updateRanges;if(Pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Y,ot,M.data);else{Pt.sort((ie,Xt)=>ie.start-Xt.start);let Ot=0;for(let ie=1;ie<Pt.length;ie++){let Xt=Pt[Ot],Vt=Pt[ie],se=Xt.start+Xt.count,ue=_t(Vt.start,M.width,4),Se=_t(Xt.start,M.width,4);Vt.start<=se+1&&ue===Se&&_t(Vt.start+Vt.count-1,M.width,4)===ue?Xt.count=Math.max(Xt.count,Vt.start+Vt.count-Xt.start):(++Ot,Pt[Ot]=Vt)}Pt.length=Ot+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),yt=e.getParameter(i.UNPACK_SKIP_PIXELS),zt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ie=0,Xt=Pt.length;ie<Xt;ie++){let Vt=Pt[ie],se=Math.floor(Vt.start/4),ue=Math.ceil(Vt.count/4),Se=se%M.width,J=Math.floor(se/M.width),Ft=ue,vt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,Se,J,Ft,vt,Y,ot,M.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function It(L,M,Y){let ot=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=i.TEXTURE_3D);let gt=Oe(L,M),Pt=M.source;e.bindTexture(ot,L.__webglTexture,i.TEXTURE0+Y);let Ot=n.get(Pt);if(Pt.version!==Ot.__version||gt===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let vt=Be.getPrimaries(Be.workingColorSpace),Ht=M.colorSpace===_s?null:Be.getPrimaries(M.colorSpace),qt=M.colorSpace===_s||vt===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let yt=m(M.image,!1,s.maxTextureSize);yt=De(M,yt);let zt=r.convert(M.format,M.colorSpace),ie=r.convert(M.type),Xt=R(M.internalFormat,zt,ie,M.normalized,M.colorSpace,M.isVideoTexture);Ae(ot,M);let Vt,se=M.mipmaps,ue=M.isVideoTexture!==!0,Se=Ot.__version===void 0||gt===!0,J=Pt.dataReady,Ft=U(M,yt);if(M.isDepthTexture)Xt=w(M.format===Bs,M.type),Se&&(ue?e.texStorage2D(i.TEXTURE_2D,1,Xt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,zt,ie,null));else if(M.isDataTexture)if(se.length>0){ue&&Se&&e.texStorage2D(i.TEXTURE_2D,Ft,Xt,se[0].width,se[0].height);for(let vt=0,Ht=se.length;vt<Ht;vt++)Vt=se[vt],ue?J&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Vt.width,Vt.height,zt,ie,Vt.data):e.texImage2D(i.TEXTURE_2D,vt,Xt,Vt.width,Vt.height,0,zt,ie,Vt.data);M.generateMipmaps=!1}else ue?(Se&&e.texStorage2D(i.TEXTURE_2D,Ft,Xt,yt.width,yt.height),J&&xt(M,yt,zt,ie)):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,zt,ie,yt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Xt,se[0].width,se[0].height,yt.depth);for(let vt=0,Ht=se.length;vt<Ht;vt++)if(Vt=se[vt],M.format!==yi)if(zt!==null)if(ue){if(J)if(M.layerUpdates.size>0){let qt=zd(Vt.width,Vt.height,M.format,M.type);for(let Et of M.layerUpdates){let re=Vt.data.subarray(Et*qt/Vt.data.BYTES_PER_ELEMENT,(Et+1)*qt/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Et,Vt.width,Vt.height,1,zt,re)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Vt.width,Vt.height,yt.depth,zt,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Xt,Vt.width,Vt.height,yt.depth,0,Vt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Vt.width,Vt.height,yt.depth,zt,ie,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Xt,Vt.width,Vt.height,yt.depth,0,zt,ie,Vt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ue&&Se&&e.texStorage2D(i.TEXTURE_2D,Ft,Xt,se[0].width,se[0].height);for(let vt=0,Ht=se.length;vt<Ht;vt++)Vt=se[vt],M.format!==yi?zt!==null?ue?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Vt.width,Vt.height,zt,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Xt,Vt.width,Vt.height,0,Vt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?J&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Vt.width,Vt.height,zt,ie,Vt.data):e.texImage2D(i.TEXTURE_2D,vt,Xt,Vt.width,Vt.height,0,zt,ie,Vt.data)}else if(M.isDataArrayTexture)if(ue){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Xt,yt.width,yt.height,yt.depth),J)if(M.layerUpdates.size>0){let vt=zd(yt.width,yt.height,M.format,M.type);for(let Ht of M.layerUpdates){let qt=yt.data.subarray(Ht*vt/yt.data.BYTES_PER_ELEMENT,(Ht+1)*vt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,yt.width,yt.height,1,zt,ie,qt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,zt,ie,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,zt,ie,yt.data);else if(M.isData3DTexture)ue?(Se&&e.texStorage3D(i.TEXTURE_3D,Ft,Xt,yt.width,yt.height,yt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,zt,ie,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,zt,ie,yt.data);else if(M.isFramebufferTexture){if(Se)if(ue)e.texStorage2D(i.TEXTURE_2D,Ft,Xt,yt.width,yt.height);else{let vt=yt.width,Ht=yt.height;for(let qt=0;qt<Ft;qt++)e.texImage2D(i.TEXTURE_2D,qt,Xt,vt,Ht,0,zt,ie,null),vt>>=1,Ht>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let vt=i.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),yt.parentNode!==vt){vt.appendChild(yt),x.add(M),vt.onpaint=Ht=>{let qt=Ht.changedElements;for(let Et of x)qt.includes(Et.image)&&(Et.needsUpdate=!0)},vt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,yt);else{let qt=i.RGBA,Et=i.RGBA,re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,Et,re,yt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(se.length>0){if(ue&&Se){let vt=me(se[0]);e.texStorage2D(i.TEXTURE_2D,Ft,Xt,vt.width,vt.height)}for(let vt=0,Ht=se.length;vt<Ht;vt++)Vt=se[vt],ue?J&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,zt,ie,Vt):e.texImage2D(i.TEXTURE_2D,vt,Xt,zt,ie,Vt);M.generateMipmaps=!1}else if(ue){if(Se){let vt=me(yt);e.texStorage2D(i.TEXTURE_2D,Ft,Xt,vt.width,vt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,ie,yt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,zt,ie,yt);p(M)&&O(ot),Ot.__version=Pt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ne(L,M,Y){if(M.image.length!==6)return;let ot=Oe(L,M),gt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);let Pt=n.get(gt);if(gt.version!==Pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Y);let Ot=Be.getPrimaries(Be.workingColorSpace),pt=M.colorSpace===_s?null:Be.getPrimaries(M.colorSpace),yt=M.colorSpace===_s||Ot===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let zt=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Xt=[];for(let Et=0;Et<6;Et++)!zt&&!ie?Xt[Et]=m(M.image[Et],!0,s.maxCubemapSize):Xt[Et]=ie?M.image[Et].image:M.image[Et],Xt[Et]=De(M,Xt[Et]);let Vt=Xt[0],se=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),Se=R(M.internalFormat,se,ue,M.normalized,M.colorSpace),J=M.isVideoTexture!==!0,Ft=Pt.__version===void 0||ot===!0,vt=gt.dataReady,Ht=U(M,Vt);Ae(i.TEXTURE_CUBE_MAP,M);let qt;if(zt){J&&Ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Se,Vt.width,Vt.height);for(let Et=0;Et<6;Et++){qt=Xt[Et].mipmaps;for(let re=0;re<qt.length;re++){let Qt=qt[re];M.format!==yi?se!==null?J?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,0,0,Qt.width,Qt.height,se,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,Se,Qt.width,Qt.height,0,Qt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,0,0,Qt.width,Qt.height,se,ue,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,Se,Qt.width,Qt.height,0,se,ue,Qt.data)}}}else{if(qt=M.mipmaps,J&&Ft){qt.length>0&&Ht++;let Et=me(Xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Se,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(ie){J?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Xt[Et].width,Xt[Et].height,se,ue,Xt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Se,Xt[Et].width,Xt[Et].height,0,se,ue,Xt[Et].data);for(let re=0;re<qt.length;re++){let Ce=qt[re].image[Et].image;J?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,0,0,Ce.width,Ce.height,se,ue,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,Se,Ce.width,Ce.height,0,se,ue,Ce.data)}}else{J?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,se,ue,Xt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Se,se,ue,Xt[Et]);for(let re=0;re<qt.length;re++){let Qt=qt[re];J?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,0,0,se,ue,Qt.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,Se,se,ue,Qt.image[Et])}}}p(M)&&O(i.TEXTURE_CUBE_MAP),Pt.__version=gt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Yt(L,M,Y,ot,gt,Pt){let Ot=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),yt=R(Y.internalFormat,Ot,pt,Y.normalized,Y.colorSpace),zt=n.get(M),ie=n.get(Y);if(ie.__renderTarget=M,!zt.__hasExternalTextures){let Xt=Math.max(1,M.width>>Pt),Vt=Math.max(1,M.height>>Pt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,Pt,yt,Xt,Vt,M.depth,0,Ot,pt,null):e.texImage2D(gt,Pt,yt,Xt,Vt,0,Ot,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,gt,ie.__webglTexture,0,de(M)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,gt,ie.__webglTexture,Pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(L,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){let ot=M.depthTexture,gt=ot&&ot.isDepthTexture?ot.type:null,Pt=w(M.stencilBuffer,gt),Ot=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(M),Pt,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(M),Pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,L)}else{let ot=M.textures;for(let gt=0;gt<ot.length;gt++){let Pt=ot[gt],Ot=r.convert(Pt.format,Pt.colorSpace),pt=r.convert(Pt.type),yt=R(Pt.internalFormat,Ot,pt,Pt.normalized,Pt.colorSpace);_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(M),yt,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(M),yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(L,M,Y){let ot=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let gt=n.get(M.depthTexture);if(gt.__renderTarget=M,(!gt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ot){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,M.depthTexture.addEventListener("dispose",G)),gt.__webglTexture===void 0){gt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M.depthTexture);let zt=r.convert(M.depthTexture.format),ie=r.convert(M.depthTexture.type),Xt;M.depthTexture.format===Wi?Xt=i.DEPTH_COMPONENT24:M.depthTexture.format===Bs&&(Xt=i.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Xt,M.width,M.height,0,zt,ie,null)}}else Tt(M.depthTexture,0);let Pt=gt.__webglTexture,Ot=de(M),pt=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,yt=M.depthTexture.format===Bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Wi)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,pt,Pt,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,yt,pt,Pt,0);else if(M.depthTexture.format===Bs)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,pt,Pt,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,yt,pt,Pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(L){let M=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let ot=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){let gt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",gt)};ot.addEventListener("dispose",gt),M.__depthDisposeCallback=gt}M.__boundDepthTexture=ot}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let ot=0;ot<6;ot++)ee(M.__webglFramebuffer[ot],L,ot);else{let ot=L.texture.mipmaps;ot&&ot.length>0?ee(M.__webglFramebuffer[0],L,0):ee(M.__webglFramebuffer,L,0)}else if(Y){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=i.createRenderbuffer(),he(M.__webglDepthbuffer[ot],L,!1);else{let gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=M.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Pt)}}else{let ot=L.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),he(M.__webglDepthbuffer,L,!1);else{let gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,M,Y){let ot=n.get(L);M!==void 0&&Yt(ot.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&st(L)}function H(L){let M=L.texture,Y=n.get(L),ot=n.get(M);L.addEventListener("dispose",A);let gt=L.textures,Pt=L.isWebGLCubeRenderTarget===!0,Ot=gt.length>1;if(Ot||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=M.version,a.memory.textures++),Pt){Y.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[pt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)Y.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else Y.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pt=0;pt<M.mipmaps.length;pt++)Y.__webglFramebuffer[pt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let pt=0,yt=gt.length;pt<yt;pt++){let zt=n.get(gt[pt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&_e(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pt=0;pt<gt.length;pt++){let yt=gt[pt];Y.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[pt]);let zt=r.convert(yt.format,yt.colorSpace),ie=r.convert(yt.type),Xt=R(yt.internalFormat,zt,ie,yt.normalized,yt.colorSpace,L.isXRRenderTarget===!0),Vt=de(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Xt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Yt(Y.__webglFramebuffer[pt][yt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else Yt(Y.__webglFramebuffer[pt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(M)&&O(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let pt=0,yt=gt.length;pt<yt;pt++){let zt=gt[pt],ie=n.get(zt),Xt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Xt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Xt,ie.__webglTexture),Ae(Xt,zt),Yt(Y.__webglFramebuffer,L,zt,i.COLOR_ATTACHMENT0+pt,Xt,0),p(zt)&&O(Xt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,ot.__webglTexture),Ae(pt,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Yt(Y.__webglFramebuffer[yt],L,M,i.COLOR_ATTACHMENT0,pt,yt);else Yt(Y.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,pt,0);p(M)&&O(pt),e.unbindTexture()}L.depthBuffer&&st(L)}function Ct(L){let M=L.textures;for(let Y=0,ot=M.length;Y<ot;Y++){let gt=M[Y];if(p(gt)){let Pt=B(L),Ot=n.get(gt).__webglTexture;e.bindTexture(Pt,Ot),O(Pt),e.unbindTexture()}}}let Bt=[],oe=[];function ae(L){if(L.samples>0){if(_e(L)===!1){let M=L.textures,Y=L.width,ot=L.height,gt=i.COLOR_BUFFER_BIT,Pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(L),pt=M.length>1;if(pt)for(let zt=0;zt<M.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);let yt=L.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let zt=0;zt<M.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[zt]);let ie=n.get(M[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,Y,ot,0,0,Y,ot,gt,i.NEAREST),c===!0&&(Bt.length=0,oe.length=0,Bt.push(i.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Bt.push(Pt),oe.push(Pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let zt=0;zt<M.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[zt]);let ie=n.get(M[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function de(L){return Math.min(s.maxSamples,L.samples)}function _e(L){let M=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $(L){let M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function De(L,M){let Y=L.colorSpace,ot=L.format,gt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==oo&&Y!==_s&&(Be.getTransfer(Y)===Je?(ot!==yi||gt!==ri)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",Y)),M}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ht,this.resetTextureUnits=rt,this.getTextureUnits=j,this.setTextureUnits=Q,this.setTexture2D=Tt,this.setTexture2DArray=mt,this.setTexture3D=Mt,this.setTextureCube=St,this.rebindTextures=At,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function FM(i,t){function e(n,s=_s){let r,a=Be.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Td)return i.BYTE;if(n===Ad)return i.SHORT;if(n===ca)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===Id)return i.ALPHA;if(n===Pd)return i.RGB;if(n===yi)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===Jc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===ks)return i.RG;if(n===jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===Wo||n===Xo||n===qo||n===Yo)if(a===Je)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===eh||n===nh||n===ih)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===th)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sh||n===rh||n===ah||n===oh||n===lh||n===Zo||n===ch)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sh||n===rh)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ah)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oh)return r.COMPRESSED_R11_EAC;if(n===lh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===vh||n===yh||n===Sh||n===Mh||n===bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ph)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_h)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wh||n===Eh||n===Th)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wh)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Ch||n===Jo||n===Rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ah)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ha?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`,tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new So(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:OM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new Po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Xi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,x=null,f=null,y=null,S=null,I=typeof XRWebGLBinding<"u",m=new tf,p={},O=e.getContextAttributes(),B=null,R=null,w=[],U=[],G=new $t,A=null,N=null,V=new Wn;V.viewport=new Ke;let q=new Wn;q.viewport=new Ke;let et=[V,q],rt=new Vc,j=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let xt=w[_t];return xt===void 0&&(xt=new ta,w[_t]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(_t){let xt=w[_t];return xt===void 0&&(xt=new ta,w[_t]=xt),xt.getGripSpace()},this.getHand=function(_t){let xt=w[_t];return xt===void 0&&(xt=new ta,w[_t]=xt),xt.getHandSpace()};function ht(_t){let xt=U.indexOf(_t.inputSource);if(xt===-1)return;let It=w[xt];It!==void 0&&(It.update(_t.inputSource,_t.frame,h||a),It.dispatchEvent({type:_t.type,data:_t.inputSource}))}function ft(){s.removeEventListener("select",ht),s.removeEventListener("selectstart",ht),s.removeEventListener("selectend",ht),s.removeEventListener("squeeze",ht),s.removeEventListener("squeezestart",ht),s.removeEventListener("squeezeend",ht),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",Tt);for(let _t=0;_t<w.length;_t++){let xt=U[_t];xt!==null&&(U[_t]=null,w[_t].disconnect(xt))}j=null,Q=null,m.reset();for(let _t in p)delete p[_t];if(t.setRenderTarget(B),y=null,f=null,x=null,s=null,R=null,Oe.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(G.width,G.height,!1),N!==null){let _t=N.camera;_t.fov=N.fov,_t.zoom=N.zoom,_t.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){o=_t,n.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return f!==null?f:y},this.getBinding=function(){return x===null&&I&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",ht),s.addEventListener("selectstart",ht),s.addEventListener("selectend",ht),s.addEventListener("squeeze",ht),s.addEventListener("squeezestart",ht),s.addEventListener("squeezeend",ht),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",Tt),O.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,ne=null,Yt=null;O.depth&&(Yt=O.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=O.stencil?Bs:Wi,ne=O.stencil?ha:Ni);let he={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:r};x=this.getBinding(),f=x.createProjectionLayer(he),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new ii(f.textureWidth,f.textureHeight,{format:yi,type:ri,depthTexture:new Is(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let It={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new ii(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Tt(_t){for(let xt=0;xt<_t.removed.length;xt++){let It=_t.removed[xt],ne=U.indexOf(It);ne>=0&&(U[ne]=null,w[ne].disconnect(It))}for(let xt=0;xt<_t.added.length;xt++){let It=_t.added[xt],ne=U.indexOf(It);if(ne===-1){for(let he=0;he<w.length;he++)if(he>=U.length){U.push(It),ne=he;break}else if(U[he]===null){U[he]=It,ne=he;break}if(ne===-1)break}let Yt=w[ne];Yt&&Yt.connect(It)}}let mt=new X,Mt=new X;function St(_t,xt,It){mt.setFromMatrixPosition(xt.matrixWorld),Mt.setFromMatrixPosition(It.matrixWorld);let ne=mt.distanceTo(Mt),Yt=xt.projectionMatrix.elements,he=It.projectionMatrix.elements,ee=Yt[14]/(Yt[10]-1),st=Yt[14]/(Yt[10]+1),At=(Yt[9]+1)/Yt[5],H=(Yt[9]-1)/Yt[5],Ct=(Yt[8]-1)/Yt[0],Bt=(he[8]+1)/he[0],oe=ee*Ct,ae=ee*Bt,de=ne/(-Ct+Bt),_e=de*-Ct;if(xt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(_e),_t.translateZ(de),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Yt[10]===-1)_t.projectionMatrix.copy(xt.projectionMatrix),_t.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let $=ee+de,De=st+de,me=oe-_e,L=ae+(ne-_e),M=At*st/De*$,Y=H*st/De*$;_t.projectionMatrix.makePerspective(me,L,M,Y,$,De),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function Wt(_t,xt){xt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(xt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let xt=_t.near,It=_t.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(It=m.depthFar)),rt.near=q.near=V.near=xt,rt.far=q.far=V.far=It,(j!==rt.near||Q!==rt.far)&&(s.updateRenderState({depthNear:rt.near,depthFar:rt.far}),j=rt.near,Q=rt.far),rt.layers.mask=_t.layers.mask|6,V.layers.mask=rt.layers.mask&-5,q.layers.mask=rt.layers.mask&-3;let ne=_t.parent,Yt=rt.cameras;Wt(rt,ne);for(let he=0;he<Yt.length;he++)Wt(Yt[he],ne);Yt.length===2?St(rt,V,q):rt.projectionMatrix.copy(V.projectionMatrix),N===null&&_t.isPerspectiveCamera&&(N={camera:_t,fov:_t.fov,zoom:_t.zoom}),Jt(_t,rt,ne)};function Jt(_t,xt,It){It===null?_t.matrix.copy(xt.matrixWorld):(_t.matrix.copy(It.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(xt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(xt.projectionMatrix),_t.projectionMatrixInverse.copy(xt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=Kr*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(f===null&&y===null))return c},this.setFoveation=function(_t){c=_t,f!==null&&(f.fixedFoveation=_t),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=_t)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(rt)},this.getCameraTexture=function(_t){return p[_t]};let $e=null;function Ae(_t,xt){if(u=xt.getViewerPose(h||a),S=xt,u!==null){let It=u.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let ne=!1;It.length!==rt.cameras.length&&(rt.cameras.length=0,ne=!0);for(let st=0;st<It.length;st++){let At=It[st],H=null;if(y!==null)H=y.getViewport(At);else{let Bt=x.getViewSubImage(f,At);H=Bt.viewport,st===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Ct=et[st];Ct===void 0&&(Ct=new Wn,Ct.layers.enable(st),Ct.viewport=new Ke,et[st]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(H.x,H.y,H.width,H.height),st===0&&(rt.matrix.copy(Ct.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),ne===!0&&rt.cameras.push(Ct)}let Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){x=n.getBinding();let st=x.getDepthInformation(It[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Yt&&Yt.includes("camera-access")&&I){t.state.unbindTexture(),x=n.getBinding();for(let st=0;st<It.length;st++){let At=It[st].camera;if(At){let H=p[At];H||(H=new So,p[At]=H);let Ct=x.getCameraImage(At);H.sourceTexture=Ct}}}}for(let It=0;It<w.length;It++){let ne=U[It],Yt=w[It];ne!==null&&Yt!==void 0&&Yt.update(ne,xt,h||a)}$e&&$e(_t,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),S=null}let Oe=new tg;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(_t){$e=_t},this.dispose=function(){}}},kM=new ze,ag=new be;ag.set(-1,0,0,0,1,0,0,0,1);function zM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,O,B,R){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),x(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&y(m,p,R)):p.isMeshMatcapMaterial?(r(m,p),S(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),I(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,O,B):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let O=t.get(p),B=O.envMap,R=O.envMapRotation;B&&(m.envMap.value=B,m.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(R)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ag),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,O,B){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*O,m.scale.value=B*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function x(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function y(m,p,O){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=O.texture,m.transmissionSamplerSize.value.set(O.width,O.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,p){p.matcap&&(m.matcap.value=p.matcap)}function I(m,p){let O=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(O.matrixWorld),m.nearDistance.value=O.shadow.camera.near,m.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $M(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,w){let U=w.program;n.uniformBlockBinding(R,U)}function h(R,w){let U=s[R.id];U===void 0&&(m(R),U=u(R),s[R.id]=U,R.addEventListener("dispose",O));let G=w.program;n.updateUBOMapping(R,G);let A=t.render.frame;r[R.id]!==A&&(f(R),r[R.id]=A)}function u(R){let w=x();R.__bindingPointIndex=w;let U=i.createBuffer(),G=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,G,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,U),U}function x(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let w=s[R.id],U=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,N=U.length;A<N;A++){let V=U[A];if(Array.isArray(V))for(let q=0,et=V.length;q<et;q++)y(V[q],A,q,G);else y(V,A,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,w,U,G){if(I(R,w,U,G)===!0){let A=R.__offset,N=R.value;if(Array.isArray(N)){let V=0;for(let q=0;q<N.length;q++){let et=N[q],rt=p(et);S(et,R.__data,V),typeof et!="number"&&typeof et!="boolean"&&!et.isMatrix3&&!ArrayBuffer.isView(et)&&(V+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(N,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function S(R,w,U){typeof R=="number"||typeof R=="boolean"?w[0]=R:R.isMatrix3?(w[0]=R.elements[0],w[1]=R.elements[1],w[2]=R.elements[2],w[3]=0,w[4]=R.elements[3],w[5]=R.elements[4],w[6]=R.elements[5],w[7]=0,w[8]=R.elements[6],w[9]=R.elements[7],w[10]=R.elements[8],w[11]=0):ArrayBuffer.isView(R)?w.set(new R.constructor(R.buffer,R.byteOffset,w.length)):R.toArray(w,U)}function I(R,w,U,G){let A=R.value,N=w+"_"+U;if(G[N]===void 0)return typeof A=="number"||typeof A=="boolean"?G[N]=A:ArrayBuffer.isView(A)?G[N]=A.slice():G[N]=A.clone(),!0;{let V=G[N];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return G[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(V.equals(A)===!1)return V.copy(A),!0}}return!1}function m(R){let w=R.uniforms,U=0,G=16;for(let N=0,V=w.length;N<V;N++){let q=Array.isArray(w[N])?w[N]:[w[N]];for(let et=0,rt=q.length;et<rt;et++){let j=q[et],Q=Array.isArray(j.value)?j.value:[j.value];for(let ht=0,ft=Q.length;ht<ft;ht++){let Tt=Q[ht],mt=p(Tt),Mt=U%G,St=Mt%mt.boundary,Wt=Mt+St;U+=St,Wt!==0&&G-Wt<mt.storage&&(U+=G-Wt),j.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=mt.storage}}}let A=U%G;return A>0&&(U+=G-A),R.__size=U,R.__cache={},this}function p(R){let w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(w.boundary=16,w.storage=R.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",R),w}function O(R){let w=R.target;w.removeEventListener("dispose",O);let U=a.indexOf(w.__bindingPointIndex);a.splice(U,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function B(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:B}}var VM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function HM(){return Ki===null&&(Ki=new go(VM,16,16,ks,Ui),Ki.name="DFG_LUT",Ki.minFilter=Un,Ki.magFilter=Un,Ki.wrapS=Hi,Ki.wrapT=Hi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Oh=class{constructor(t={}){let{canvas:e=Mm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:f=!1,outputBufferType:y=ri}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;let I=y,m=new Set([Qc,jc,Kc]),p=new Set([ri,Ni,ca,ha,Yc,Zc]),O=new Uint32Array(4),B=new Int32Array(4),R=new X,w=null,U=null,G=[],A=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,q=!1,et=null,rt=null,j=null,Q=null;this._outputColorSpace=ci;let ht=0,ft=0,Tt=null,mt=-1,Mt=null,St=new Ke,Wt=new Ke,Jt=null,$e=new fe(0),Ae=0,Oe=e.width,_t=e.height,xt=1,It=null,ne=null,Yt=new Ke(0,0,Oe,_t),he=new Ke(0,0,Oe,_t),ee=!1,st=new ea,At=!1,H=!1,Ct=new ze,Bt=new X,oe=new Ke,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function _e(){return Tt===null?xt:1}let $=n;function De(E,z){return e.getContext(E,z)}let me,L,M,Y,ot,gt,Pt,Ot,pt,yt,zt,ie,Xt,Vt,se,ue,Se,J,Ft,vt,Ht,qt,Et;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",_n,!1),$===null){let z="webgl2";if($=De(z,E),$===null)throw De(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(E){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),ve("WebGLRenderer: "+E.message),E}function re(){me=new Jy($),me.init(),Ht=new FM($,me),L=new zy($,me,t,Ht),M=new NM($,me),L.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),rt=$.createFramebuffer(),j=$.createFramebuffer(),Q=$.createFramebuffer(),Y=new Qy($),ot=new yM,gt=new UM($,me,M,ot,L,Ht,Y),Pt=new Zy(V),Ot=new ex($),qt=new By($,Ot),pt=new Ky($,Ot,Y,qt),yt=new eS($,pt,Ot,qt,Y),J=new tS($,L,gt),se=new $y(ot),zt=new vM(V,Pt,me,L,qt,se),ie=new zM(V,ot),Xt=new MM,Vt=new CM(me),Se=new Oy(V,Pt,M,yt,S,c),ue=new DM(V,yt,L),Et=new $M($,Y,L,M),Ft=new ky($,me,Y),vt=new jy($,me,Y),Y.programs=zt.programs,V.capabilities=L,V.extensions=me,V.properties=ot,V.renderLists=Xt,V.shadowMap=ue,V.state=M,V.info=Y}I!==ri&&(N=new iS(I,e.width,e.height,o,s,r));let Qt=new ef(V,$);this.xr=Qt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(E){E!==void 0&&(xt=E,this.setSize(Oe,_t,!1))},this.getSize=function(E){return E.set(Oe,_t)},this.setSize=function(E,z,at=!0){if(Qt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=E,_t=z,e.width=Math.floor(E*xt),e.height=Math.floor(z*xt),at===!0&&(e.style.width=E+"px",e.style.height=z+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(Oe*xt,_t*xt).floor()},this.setDrawingBufferSize=function(E,z,at){Oe=E,_t=z,xt=at,e.width=Math.floor(E*at),e.height=Math.floor(z*at),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(I===ri){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(St)},this.getViewport=function(E){return E.copy(Yt)},this.setViewport=function(E,z,at,it){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,z,at,it),M.viewport(St.copy(Yt).multiplyScalar(xt).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,z,at,it){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,z,at,it),M.scissor(Wt.copy(he).multiplyScalar(xt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){M.setScissorTest(ee=E)},this.setOpaqueSort=function(E){It=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,at=!0){let it=0;if(E){let tt=!1;if(Tt!==null){let Ut=Tt.texture.format;tt=m.has(Ut)}if(tt){let Ut=Tt.texture.type,Lt=p.has(Ut),ct=Se.getClearColor(),Rt=Se.getClearAlpha(),Dt=ct.r,Te=ct.g,Pe=ct.b;Lt?(O[0]=Dt,O[1]=Te,O[2]=Pe,O[3]=Rt,$.clearBufferuiv($.COLOR,0,O)):(B[0]=Dt,B[1]=Te,B[2]=Pe,B[3]=Rt,$.clearBufferiv($.COLOR,0,B))}else it|=$.COLOR_BUFFER_BIT}z&&(it|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(it|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&$.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),et=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Se.dispose(),Xt.dispose(),Vt.dispose(),ot.dispose(),Pt.dispose(),yt.dispose(),qt.dispose(),Et.dispose(),zt.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",br),Qt.removeEventListener("sessionend",Oi),fi.stop()};function Ce(E){E.preventDefault(),ho("WebGLRenderer: Context Lost."),q=!0}function Re(){ho("WebGLRenderer: Context Restored."),q=!1;let E=Y.autoReset,z=ue.enabled,at=ue.autoUpdate,it=ue.needsUpdate,tt=ue.type;re(),Y.autoReset=E,ue.enabled=z,ue.autoUpdate=at,ue.needsUpdate=it,ue.type=tt}function _n(E){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yn(E){let z=E.target;z.removeEventListener("dispose",Yn),Mr(z)}function Mr(E){va(E),ot.remove(E)}function va(E){let z=ot.get(E).programs;z!==void 0&&(z.forEach(function(at){zt.releaseProgram(at)}),E.isShaderMaterial&&zt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,at,it,tt,Ut){z===null&&(z=ae);let Lt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,ct=ru(E,z,at,it,tt);M.setMaterial(it,Lt);let Rt=at.index,Dt=1;if(it.wireframe===!0){if(Rt=pt.getWireframeAttribute(at),Rt===void 0)return;Dt=2}let Te=at.drawRange,Pe=at.attributes.position,jt=Te.start*Dt,Ge=(Te.start+Te.count)*Dt;Ut!==null&&(jt=Math.max(jt,Ut.start*Dt),Ge=Math.min(Ge,(Ut.start+Ut.count)*Dt)),Rt!==null?(jt=Math.max(jt,0),Ge=Math.min(Ge,Rt.count)):Pe!=null&&(jt=Math.max(jt,0),Ge=Math.min(Ge,Pe.count));let rn=Ge-jt;if(rn<0||rn===1/0)return;qt.setup(tt,it,ct,at,Rt);let qe,Ue=Ft;if(Rt!==null&&(qe=Ot.get(Rt),Ue=vt,Ue.setIndex(qe)),tt.isMesh)it.wireframe===!0?(M.setLineWidth(it.wireframeLinewidth*_e()),Ue.setMode($.LINES)):Ue.setMode($.TRIANGLES);else if(tt.isLine){let wn=it.linewidth;wn===void 0&&(wn=1),M.setLineWidth(wn*_e()),tt.isLineSegments?Ue.setMode($.LINES):tt.isLineLoop?Ue.setMode($.LINE_LOOP):Ue.setMode($.LINE_STRIP)}else tt.isPoints?Ue.setMode($.POINTS):tt.isSprite&&Ue.setMode($.TRIANGLES);if(tt.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ue.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let wn=tt._multiDrawStarts,Kt=tt._multiDrawCounts,Ln=tt._multiDrawCount,ke=Rt?Ot.get(Rt).bytesPerElement:1,ti=ot.get(it).currentProgram.getUniforms();for(let pi=0;pi<Ln;pi++)ti.setValue($,"_gl_DrawID",pi),Ue.render(wn[pi]/ke,Kt[pi])}else if(tt.isInstancedMesh)Ue.renderInstances(jt,rn,tt.count);else if(at.isInstancedBufferGeometry){let wn=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Kt=Math.min(at.instanceCount,wn);Ue.renderInstances(jt,rn,Kt)}else Ue.render(jt,rn)};function ya(E,z,at,it){et!==null&&E.isNodeMaterial&&et.setObject(it,E),At===!0&&se.setState(E,at,!1),E.transparent===!0&&E.side===Zi&&E.forceSinglePass===!1?(E.side=Kn,E.needsUpdate=!0,Hs(E,z,it),E.side=Us,E.needsUpdate=!0,Hs(E,z,it),E.side=Zi):Hs(E,z,it)}this.compile=function(E,z,at=null){at===null&&(at=E),et!==null&&et.renderStart(E,z,at),U=Vt.get(at),U.init(z),A.push(U),at.traverseVisible(function(tt){tt.isLight&&tt.layers.test(z.layers)&&(U.pushLight(tt),tt.castShadow&&U.pushShadow(tt))}),E!==at&&E.traverseVisible(function(tt){tt.isLight&&tt.layers.test(z.layers)&&(U.pushLight(tt),tt.castShadow&&U.pushShadow(tt))}),U.setupLights(),et!==null&&et.updateLights(U.state.lightsArray),H=this.localClippingEnabled,At=se.init(this.clippingPlanes,H),At===!0&&se.setGlobalState(this.clippingPlanes,z),et!==null&&ue.render(U.state.shadowsArray,at,z);let it=new Set;return E.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Ut=tt.material;if(Ut)if(Array.isArray(Ut))for(let Lt=0;Lt<Ut.length;Lt++){let ct=Ut[Lt];ya(ct,at,z,tt),it.add(ct)}else ya(Ut,at,z,tt),it.add(Ut)}),U=A.pop(),et!==null&&et.renderEnd(),it},this.compileAsync=function(E,z,at=null){let it=this.compile(E,z,at);return new Promise(tt=>{function Ut(){if(it.forEach(function(Lt){let Rt=ot.get(Lt).currentProgram;(Rt===void 0||Rt.isReady())&&it.delete(Lt)}),it.size===0){tt(E);return}setTimeout(Ut,10)}me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let rs=null;function iu(E){rs&&rs(E)}function br(){fi.stop()}function Oi(){fi.start()}let fi=new tg;fi.setAnimationLoop(iu),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){rs=E,Qt.setAnimationLoop(E),E===null?fi.stop():fi.start()},Qt.addEventListener("sessionstart",br),Qt.addEventListener("sessionend",Oi),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;et!==null&&et.renderStart(E,z);let at=Qt.enabled===!0&&Qt.isPresenting===!0,it=N!==null&&(Tt===null||at)&&N.begin(V,Tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(z),z=Qt.getCamera()),E.isScene===!0&&E.onBeforeRender(V,E,z,Tt),U=Vt.get(E,A.length),U.init(z),U.state.textureUnits=gt.getTextureUnits(),A.push(U),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),st.setFromProjectionMatrix(Ct,Ii,z.reversedDepth),H=this.localClippingEnabled,At=se.init(this.clippingPlanes,H),w=Xt.get(E,G.length),w.init(),G.push(w),Qt.enabled===!0&&Qt.isPresenting===!0){let Lt=V.xr.getDepthSensingMesh();Lt!==null&&wr(Lt,z,-1/0,V.sortObjects)}wr(E,z,0,V.sortObjects),w.finish(),et!==null&&et.updateLights(U.state.lightsArray),V.sortObjects===!0&&w.sort(It,ne),de=Qt.enabled===!1||Qt.isPresenting===!1||Qt.hasDepthSensing()===!1,de&&Se.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&se.beginShadows();let tt=U.state.shadowsArray;if(ue.render(tt,E,z),At===!0&&se.endShadows(),(it&&N.hasRenderPass())===!1){let Lt=w.opaque,ct=w.transmissive;if(U.setupLights(),z.isArrayCamera){let Rt=z.cameras;if(ct.length>0)for(let Dt=0,Te=Rt.length;Dt<Te;Dt++){let Pe=Rt[Dt];Ma(Lt,ct,E,Pe)}de&&Se.render(E);for(let Dt=0,Te=Rt.length;Dt<Te;Dt++){let Pe=Rt[Dt];Sa(w,E,Pe,Pe.viewport)}}else ct.length>0&&Ma(Lt,ct,E,z),de&&Se.render(E),Sa(w,E,z)}Tt!==null&&ft===0&&(gt.updateMultisampleRenderTarget(Tt),gt.updateRenderTargetMipmap(Tt)),it&&N.end(V),E.isScene===!0&&E.onAfterRender(V,E,z),qt.resetDefaultState(),mt=-1,Mt=null,A.pop(),A.length>0?(U=A[A.length-1],gt.setTextureUnits(U.state.textureUnits),At===!0&&se.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,G.pop(),G.length>0?w=G[G.length-1]:w=null,et!==null&&et.renderEnd()};function wr(E,z,at,it){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)at=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)U.pushLightProbeGrid(E);else if(E.isLight)U.pushLight(E),E.castShadow&&U.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(st)){it&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);let Lt=yt.update(E),ct=E.material;ct.visible&&w.push(E,Lt,ct,at,oe.z,null,z)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(st))){let Lt=yt.update(E),ct=E.material;if(it&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),oe.copy(E.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),oe.copy(Lt.boundingSphere.center)),oe.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(ct)){let Rt=Lt.groups;for(let Dt=0,Te=Rt.length;Dt<Te;Dt++){let Pe=Rt[Dt],jt=ct[Pe.materialIndex];jt&&jt.visible&&w.push(E,Lt,jt,at,oe.z,Pe,z)}}else ct.visible&&w.push(E,Lt,ct,at,oe.z,null,z)}}let Ut=E.children;for(let Lt=0,ct=Ut.length;Lt<ct;Lt++)wr(Ut[Lt],z,at,it)}function Sa(E,z,at,it){let{opaque:tt,transmissive:Ut,transparent:Lt}=E;U.setupLightsView(at),At===!0&&se.setGlobalState(V.clippingPlanes,at),it&&M.viewport(St.copy(it)),tt.length>0&&Ss(tt,z,at),Ut.length>0&&Ss(Ut,z,at),Lt.length>0&&Ss(Lt,z,at),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ma(E,z,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[it.id]===void 0){let jt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[it.id]=new ii(1,1,{generateMipmaps:!0,type:jt?Ui:ri,minFilter:Os,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}let Ut=U.state.transmissionRenderTarget[it.id],Lt=it.viewport||St;Ut.setSize(Lt.z*V.transmissionResolutionScale,Lt.w*V.transmissionResolutionScale);let ct=V.getRenderTarget(),Rt=V.getActiveCubeFace(),Dt=V.getActiveMipmapLevel();V.setRenderTarget(Ut),V.getClearColor($e),Ae=V.getClearAlpha(),Ae<1&&V.setClearColor(16777215,.5),V.clear(),de&&Se.render(at);let Te=V.toneMapping;V.toneMapping=Di;let Pe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),U.setupLightsView(it),At===!0&&se.setGlobalState(V.clippingPlanes,it),Ss(E,at,it),gt.updateMultisampleRenderTarget(Ut),gt.updateRenderTargetMipmap(Ut),me.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ge=0,rn=z.length;Ge<rn;Ge++){let qe=z[Ge],{object:Ue,geometry:wn,material:Kt,group:Ln}=qe;if(Kt.side===Zi&&Ue.layers.test(it.layers)){let ke=Kt.side;Kt.side=Kn,Kt.needsUpdate=!0,ba(Ue,at,it,wn,Kt,Ln),Kt.side=ke,Kt.needsUpdate=!0,jt=!0}}jt===!0&&(gt.updateMultisampleRenderTarget(Ut),gt.updateRenderTargetMipmap(Ut))}V.setRenderTarget(ct,Rt,Dt),V.setClearColor($e,Ae),Pe!==void 0&&(it.viewport=Pe),V.toneMapping=Te}function Ss(E,z,at){let it=z.isScene===!0?z.overrideMaterial:null;for(let tt=0,Ut=E.length;tt<Ut;tt++){let Lt=E[tt],{object:ct,geometry:Rt,group:Dt}=Lt,Te=Lt.material;Te.allowOverride===!0&&it!==null&&(Te=it),ct.layers.test(at.layers)&&ba(ct,z,at,Rt,Te,Dt)}}function ba(E,z,at,it,tt,Ut){et!==null&&tt.isNodeMaterial&&et.setObject(E,tt),E.onBeforeRender(V,z,at,it,tt,Ut),E.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),tt.onBeforeRender(V,z,at,it,E,Ut),tt.transparent===!0&&tt.side===Zi&&tt.forceSinglePass===!1?(tt.side=Kn,tt.needsUpdate=!0,V.renderBufferDirect(at,z,it,tt,E,Ut),tt.side=Us,tt.needsUpdate=!0,V.renderBufferDirect(at,z,it,tt,E,Ut),tt.side=Zi):V.renderBufferDirect(at,z,it,tt,E,Ut),E.onAfterRender(V,z,at,it,tt,Ut)}function Hs(E,z,at){z.isScene!==!0&&(z=ae);let it=ot.get(E),tt=U.state.lights,Ut=U.state.shadowsArray,Lt=tt.state.version,ct=zt.getParameters(E,tt.state,Ut,z,at,U.state.lightProbeGridArray),Rt=zt.getProgramCacheKey(ct),Dt=it.programs;it.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,it.fog=z.fog;let Te=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;it.envMap=Pt.get(E.envMap||it.environment,Te),it.envMapRotation=it.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Yn),Dt=new Map,it.programs=Dt);let Pe=Dt.get(Rt);if(Pe!==void 0){if(it.currentProgram===Pe&&it.lightsStateVersion===Lt)return Ms(E,ct),Pe}else ct.uniforms=zt.getUniforms(E),et!==null&&E.isNodeMaterial&&et.build(E,at,ct),E.onBeforeCompile(ct,V),Pe=zt.acquireProgram(ct,Rt),Dt.set(Rt,Pe),it.uniforms=ct.uniforms;let jt=it.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(jt.clippingPlanes=se.uniform),Ms(E,ct),it.needsLights=au(E),it.lightsStateVersion=Lt,it.needsLights&&(jt.ambientLightColor.value=tt.state.ambient,jt.lightProbe.value=tt.state.probe,jt.sunLights.value=tt.state.sun,jt.sunLightShadows.value=tt.state.sunShadow,jt.directionalLights.value=tt.state.directional,jt.directionalLightShadows.value=tt.state.directionalShadow,jt.spotLights.value=tt.state.spot,jt.spotLightShadows.value=tt.state.spotShadow,jt.rectAreaLights.value=tt.state.rectArea,jt.ltc_1.value=tt.state.rectAreaLTC1,jt.ltc_2.value=tt.state.rectAreaLTC2,jt.pointLights.value=tt.state.point,jt.pointLightShadows.value=tt.state.pointShadow,jt.hemisphereLights.value=tt.state.hemi,jt.sunShadowMatrix.value=tt.state.sunShadowMatrix,jt.sunShadowCascade.value=tt.state.sunShadowCascade,jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,jt.spotLightMatrix.value=tt.state.spotLightMatrix,jt.spotLightMap.value=tt.state.spotLightMap,jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.lightProbeGrid=U.state.lightProbeGridArray.length>0,it.currentProgram=Pe,it.uniformsList=null,Pe}function Gs(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=fa.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ms(E,z){let at=ot.get(E);at.outputColorSpace=z.outputColorSpace,at.batching=z.batching,at.batchingColor=z.batchingColor,at.instancing=z.instancing,at.instancingColor=z.instancingColor,at.instancingMorph=z.instancingMorph,at.skinning=z.skinning,at.morphTargets=z.morphTargets,at.morphNormals=z.morphNormals,at.morphColors=z.morphColors,at.morphTargetsCount=z.morphTargetsCount,at.numClippingPlanes=z.numClippingPlanes,at.numIntersection=z.numClipIntersection,at.vertexAlphas=z.vertexAlphas,at.vertexTangents=z.vertexTangents,at.toneMapping=z.toneMapping}function su(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;R.setFromMatrixPosition(z.matrixWorld);for(let at=0,it=E.length;at<it;at++){let tt=E[at];if(tt.texture!==null&&tt.boundingBox.containsPoint(R))return tt}return null}function ru(E,z,at,it,tt){z.isScene!==!0&&(z=ae),gt.resetTextureUnits();let Ut=z.fog,Lt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?z.environment:null,ct=Tt===null?V.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Be.workingColorSpace,Rt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Dt=Pt.get(it.envMap||Lt,Rt),Te=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Pe=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),jt=!!at.morphAttributes.position,Ge=!!at.morphAttributes.normal,rn=!!at.morphAttributes.color,qe=Di;it.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(qe=V.toneMapping);let Ue=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,wn=Ue!==void 0?Ue.length:0,Kt=ot.get(it),Ln=U.state.lights;if(At===!0&&(H===!0||E!==Mt)){let Ze=E===Mt&&it.id===mt;se.setState(it,E,Ze)}let ke=!1;it.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ln.state.version||Kt.outputColorSpace!==ct||tt.isBatchedMesh&&Kt.batching===!1||!tt.isBatchedMesh&&Kt.batching===!0||tt.isBatchedMesh&&Kt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Kt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Kt.instancing===!1||!tt.isInstancedMesh&&Kt.instancing===!0||tt.isSkinnedMesh&&Kt.skinning===!1||!tt.isSkinnedMesh&&Kt.skinning===!0||tt.isInstancedMesh&&Kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Kt.instancingMorph===!1&&tt.morphTexture!==null||Kt.envMap!==Dt||it.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==se.numPlanes||Kt.numIntersection!==se.numIntersection)||Kt.vertexAlphas!==Te||Kt.vertexTangents!==Pe||Kt.morphTargets!==jt||Kt.morphNormals!==Ge||Kt.morphColors!==rn||Kt.toneMapping!==qe||Kt.morphTargetsCount!==wn||!!Kt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,Kt.__version=it.version);let ti=Kt.currentProgram;ke===!0&&(ti=Hs(it,z,tt),et&&it.isNodeMaterial&&et.onUpdateProgram(it,ti,Kt));let pi=!1,Si=!1,Ie=!1,Ye=ti.getUniforms(),on=Kt.uniforms;if(M.useProgram(ti.program)&&(pi=!0,Si=!0,Ie=!0),it.id!==mt&&(mt=it.id,Si=!0),Kt.needsLights){let Ze=su(U.state.lightProbeGridArray,tt);Kt.lightProbeGrid!==Ze&&(Kt.lightProbeGrid=Ze,Si=!0)}if(pi||Mt!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ye.setValue($,"projectionMatrix",E.projectionMatrix),Ye.setValue($,"viewMatrix",E.matrixWorldInverse);let Dn=Ye.map.cameraPosition;Dn!==void 0&&Dn.setValue($,Bt.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&Ye.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ye.setValue($,"isOrthographic",E.isOrthographicCamera===!0),Mt!==E&&(Mt=E,Si=!0,Ie=!0)}if(Kt.needsLights&&(Ln.state.sunShadowMap.length>0&&Ye.setValue($,"sunShadowMap",Ln.state.sunShadowMap,gt),Ln.state.directionalShadowMap.length>0&&Ye.setValue($,"directionalShadowMap",Ln.state.directionalShadowMap,gt),Ln.state.spotShadowMap.length>0&&Ye.setValue($,"spotShadowMap",Ln.state.spotShadowMap,gt),Ln.state.pointShadowMap.length>0&&Ye.setValue($,"pointShadowMap",Ln.state.pointShadowMap,gt)),tt.isSkinnedMesh){Ye.setOptional($,tt,"bindMatrix"),Ye.setOptional($,tt,"bindMatrixInverse");let Ze=tt.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ye.setValue($,"boneTexture",Ze.boneTexture,gt))}tt.isBatchedMesh&&(Ye.setOptional($,tt,"batchingTexture"),Ye.setValue($,"batchingTexture",tt._matricesTexture,gt),Ye.setOptional($,tt,"batchingIdTexture"),Ye.setValue($,"batchingIdTexture",tt._indirectTexture,gt),Ye.setOptional($,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ye.setValue($,"batchingColorTexture",tt._colorsTexture,gt));let Bi=at.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&J.update(tt,at,ti),(Si||Kt.receiveShadow!==tt.receiveShadow)&&(Kt.receiveShadow=tt.receiveShadow,Ye.setValue($,"receiveShadow",tt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&z.environment!==null&&(on.envMapIntensity.value=z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=HM()),Si){if(Ye.setValue($,"toneMappingExposure",V.toneMappingExposure),Kt.needsLights&&ll(on,Ie),Ut&&it.fog===!0&&ie.refreshFogUniforms(on,Ut),ie.refreshMaterialUniforms(on,it,xt,_t,U.state.transmissionRenderTarget[E.id]),Kt.needsLights&&Kt.lightProbeGrid){let Ze=Kt.lightProbeGrid;on.probesSH.value=Ze.texture,on.probesMin.value.copy(Ze.boundingBox.min),on.probesMax.value.copy(Ze.boundingBox.max),on.probesResolution.value.copy(Ze.resolution)}fa.upload($,Gs(Kt),on,gt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(fa.upload($,Gs(Kt),on,gt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ye.setValue($,"center",tt.center),Ye.setValue($,"modelViewMatrix",tt.modelViewMatrix),Ye.setValue($,"normalMatrix",tt.normalMatrix),Ye.setValue($,"modelMatrix",tt.matrixWorld),it.uniformsGroups!==void 0){let Ze=it.uniformsGroups;for(let Dn=0,zn=Ze.length;Dn<zn;Dn++){let wa=Ze[Dn];Et.update(wa,ti),Et.bind(wa,ti)}}return ti}function ll(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function au(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(E,z,at){let it=ot.get(E);it.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),ot.get(E.texture).__webglTexture=z,ot.get(E.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:at,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let at=ot.get(E);at.__webglFramebuffer=z,at.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,at=0){Tt=E,ht=z,ft=at;let it=null,tt=!1,Ut=!1;if(E){let ct=ot.get(E);if(ct.__useDefaultFramebuffer!==void 0){M.bindFramebuffer($.FRAMEBUFFER,ct.__webglFramebuffer),St.copy(E.viewport),Wt.copy(E.scissor),Jt=E.scissorTest,M.viewport(St),M.scissor(Wt),M.setScissorTest(Jt),mt=-1;return}else if(ct.__webglFramebuffer===void 0)gt.setupRenderTarget(E);else if(ct.__hasExternalTextures)gt.rebindTextures(E,ot.get(E.texture).__webglTexture,ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Te=E.depthTexture;if(ct.__boundDepthTexture!==Te){if(Te!==null&&ot.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Ut=!0);let Dt=ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?it=Dt[z][at]:it=Dt[z],tt=!0):E.samples>0&&gt.useMultisampledRTT(E)===!1?it=ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?it=Dt[at]:it=Dt,St.copy(E.viewport),Wt.copy(E.scissor),Jt=E.scissorTest}else St.copy(Yt).multiplyScalar(xt).floor(),Wt.copy(he).multiplyScalar(xt).floor(),Jt=ee;if(at!==0&&(it=rt),M.bindFramebuffer($.FRAMEBUFFER,it)&&M.drawBuffers(E,it),M.viewport(St),M.scissor(Wt),M.setScissorTest(Jt),tt){let ct=ot.get(E.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+z,ct.__webglTexture,at)}else if(Ut){let ct=z;for(let Rt=0;Rt<E.textures.length;Rt++){let Dt=ot.get(E.textures[Rt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,at,ct)}}else if(E!==null&&at!==0){let ct=ot.get(E.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ct.__webglTexture,at)}mt=-1};function kn(E){let z=ot.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=L.textureFormatReadable(E.format),z.__typeReadable=L.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,at,it,tt,Ut,Lt,ct=0){if(!(E&&E.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt){M.bindFramebuffer($.FRAMEBUFFER,Rt);try{let Dt=E.textures[ct],Te=Dt.format,Pe=Dt.type;E.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+ct);let jt=kn(Dt);if(jt.__formatReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-it&&at>=0&&at<=E.height-tt&&$.readPixels(z,at,it,tt,Ht.convert(Te),Ht.convert(Pe),Ut)}finally{let Dt=Tt!==null?ot.get(Tt).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,z,at,it,tt,Ut,Lt,ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt)if(z>=0&&z<=E.width-it&&at>=0&&at<=E.height-tt){M.bindFramebuffer($.FRAMEBUFFER,Rt);let Dt=E.textures[ct],Te=Dt.format,Pe=Dt.type;E.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+ct);let jt=kn(Dt);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ge),$.bufferData($.PIXEL_PACK_BUFFER,Ut.byteLength,$.STREAM_READ),$.readPixels(z,at,it,tt,Ht.convert(Te),Ht.convert(Pe),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let rn=Tt!==null?ot.get(Tt).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,rn);let qe=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await wm($,qe,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ge),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ut),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Ge),$.deleteSync(qe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,at=0){let it=Math.pow(2,-at),tt=Math.floor(E.image.width*it),Ut=Math.floor(E.image.height*it),Lt=z!==null?z.x:0,ct=z!==null?z.y:0;gt.setTexture2D(E,0),$.copyTexSubImage2D($.TEXTURE_2D,at,0,0,Lt,ct,tt,Ut),M.unbindTexture()},this.copyTextureToTexture=function(E,z,at=null,it=null,tt=0,Ut=0){let Lt,ct,Rt,Dt,Te,Pe,jt,Ge,rn,qe=E.isCompressedTexture?E.mipmaps[Ut]:E.image;if(at!==null)Lt=at.max.x-at.min.x,ct=at.max.y-at.min.y,Rt=at.isBox3?at.max.z-at.min.z:1,Dt=at.min.x,Te=at.min.y,Pe=at.isBox3?at.min.z:0;else{let on=Math.pow(2,-tt);Lt=Math.floor(qe.width*on),ct=Math.floor(qe.height*on),E.isDataArrayTexture?Rt=qe.depth:E.isData3DTexture?Rt=Math.floor(qe.depth*on):Rt=1,Dt=0,Te=0,Pe=0}it!==null?(jt=it.x,Ge=it.y,rn=it.z):(jt=0,Ge=0,rn=0);let Ue=Ht.convert(z.format),wn=Ht.convert(z.type),Kt;z.isData3DTexture?(gt.setTexture3D(z,0),Kt=$.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(gt.setTexture2DArray(z,0),Kt=$.TEXTURE_2D_ARRAY):(gt.setTexture2D(z,0),Kt=$.TEXTURE_2D),M.activeTexture($.TEXTURE0),M.pixelStorei($.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei($.UNPACK_ALIGNMENT,z.unpackAlignment);let Ln=M.getParameter($.UNPACK_ROW_LENGTH),ke=M.getParameter($.UNPACK_IMAGE_HEIGHT),ti=M.getParameter($.UNPACK_SKIP_PIXELS),pi=M.getParameter($.UNPACK_SKIP_ROWS),Si=M.getParameter($.UNPACK_SKIP_IMAGES);M.pixelStorei($.UNPACK_ROW_LENGTH,qe.width),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,qe.height),M.pixelStorei($.UNPACK_SKIP_PIXELS,Dt),M.pixelStorei($.UNPACK_SKIP_ROWS,Te),M.pixelStorei($.UNPACK_SKIP_IMAGES,Pe);let Ie=E.isDataArrayTexture||E.isData3DTexture,Ye=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let on=ot.get(E),Bi=ot.get(z),Ze=ot.get(on.__renderTarget),Dn=ot.get(Bi.__renderTarget);M.bindFramebuffer($.READ_FRAMEBUFFER,Ze.__webglFramebuffer),M.bindFramebuffer($.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let zn=0;zn<Rt;zn++)Ie&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ot.get(E).__webglTexture,tt,Pe+zn),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ot.get(z).__webglTexture,Ut,rn+zn)),$.blitFramebuffer(Dt,Te,Lt,ct,jt,Ge,Lt,ct,$.DEPTH_BUFFER_BIT,$.NEAREST);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(tt!==0||E.isRenderTargetTexture||ot.has(E)){let on=ot.get(E),Bi=ot.get(z);M.bindFramebuffer($.READ_FRAMEBUFFER,j),M.bindFramebuffer($.DRAW_FRAMEBUFFER,Q);for(let Ze=0;Ze<Rt;Ze++)Ie?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,tt,Pe+Ze):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,tt),Ye?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Bi.__webglTexture,Ut,rn+Ze):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Bi.__webglTexture,Ut),tt!==0?$.blitFramebuffer(Dt,Te,Lt,ct,jt,Ge,Lt,ct,$.COLOR_BUFFER_BIT,$.NEAREST):Ye?$.copyTexSubImage3D(Kt,Ut,jt,Ge,rn+Ze,Dt,Te,Lt,ct):$.copyTexSubImage2D(Kt,Ut,jt,Ge,Dt,Te,Lt,ct);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ye?E.isDataTexture||E.isData3DTexture?$.texSubImage3D(Kt,Ut,jt,Ge,rn,Lt,ct,Rt,Ue,wn,qe.data):z.isCompressedArrayTexture?$.compressedTexSubImage3D(Kt,Ut,jt,Ge,rn,Lt,ct,Rt,Ue,qe.data):$.texSubImage3D(Kt,Ut,jt,Ge,rn,Lt,ct,Rt,Ue,wn,qe):E.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ut,jt,Ge,Lt,ct,Ue,wn,qe.data):E.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ut,jt,Ge,qe.width,qe.height,Ue,qe.data):$.texSubImage2D($.TEXTURE_2D,Ut,jt,Ge,Lt,ct,Ue,wn,qe);M.pixelStorei($.UNPACK_ROW_LENGTH,Ln),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,ke),M.pixelStorei($.UNPACK_SKIP_PIXELS,ti),M.pixelStorei($.UNPACK_SKIP_ROWS,pi),M.pixelStorei($.UNPACK_SKIP_IMAGES,Si),Ut===0&&z.generateMipmaps&&$.generateMipmap(Kt),M.unbindTexture()},this.initRenderTarget=function(E){ot.get(E).__webglFramebuffer===void 0&&gt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?gt.setTextureCube(E,0):E.isData3DTexture?gt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?gt.setTexture2DArray(E,0):gt.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){ht=0,ft=0,Tt=null,M.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),e.unpackColorSpace=Be._getUnpackColorSpace()}};var lg=new Jn,zh=new X,Fi=class extends ko{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new mn(t,3)),this.setAttribute("uv",new mn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ns(e,6,1);return this.setAttribute("instanceStart",new Li(n,3,0)),this.setAttribute("instanceEnd",new Li(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ns(e,6,1);return this.setAttribute("instanceColorStart",new Li(n,3,0)),this.setAttribute("instanceColorEnd",new Li(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Lo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),lg.setFromBufferAttribute(e),this.boundingBox.union(lg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)zh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(zh)),zh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};jn.line={uniforms:Ko.merge([Gt.common,Gt.fog,Gt.line]),vertexShader:`
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
		`};var ji=class extends In{constructor(t){super({type:"LineMaterial",uniforms:Ko.clone(jn.line.uniforms),vertexShader:jn.line.vertexShader,fragmentShader:jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var nf=new Ke,cg=new X,hg=new X,Fn=new Ke,On=new Ke,Qi=new Ke,sf=new X,rf=new ze,Bn=new $o,ug=new X,$h=new Jn,Vh=new si,ts=new Ke,es,mr;function dg(i,t,e){return ts.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ts.multiplyScalar(1/ts.w),ts.x=mr/e.width,ts.y=mr/e.height,ts.applyMatrix4(i.projectionMatrixInverse),ts.multiplyScalar(1/ts.w),Math.abs(Math.max(ts.x,ts.y))}function GM(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){Bn.start.fromBufferAttribute(s,o),Bn.end.fromBufferAttribute(r,o),Bn.applyMatrix4(e);let h=new X,u=new X;es.distanceSqToSegment(Bn.start,Bn.end,u,h),u.distanceTo(h)<mr*.5&&t.push({point:u,pointOnLine:h,distance:es.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function WM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),x=-t.near;es.at(1,Qi),Qi.w=1,Qi.applyMatrix4(t.matrixWorldInverse),Qi.applyMatrix4(n),Qi.multiplyScalar(1/Qi.w),Qi.x*=r.x/2,Qi.y*=r.y/2,Qi.z=0,sf.copy(Qi),rf.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,y=u;f<y;f++){if(Fn.fromBufferAttribute(c,f),On.fromBufferAttribute(h,f),Fn.w=1,On.w=1,Fn.applyMatrix4(rf),On.applyMatrix4(rf),Fn.z>x&&On.z>x)continue;if(Fn.z>x){let B=Fn.z-On.z,R=(Fn.z-x)/B;Fn.lerp(On,R)}else if(On.z>x){let B=On.z-Fn.z,R=(On.z-x)/B;On.lerp(Fn,R)}Fn.applyMatrix4(n),On.applyMatrix4(n),Fn.multiplyScalar(1/Fn.w),On.multiplyScalar(1/On.w),Fn.x*=r.x/2,Fn.y*=r.y/2,On.x*=r.x/2,On.y*=r.y/2,Bn.start.copy(Fn),Bn.start.z=0,Bn.end.copy(On),Bn.end.z=0;let I=Bn.closestPointToPointParameter(sf,!0);Bn.at(I,ug);let m=Ud.lerp(Fn.z,On.z,I),p=m>=-1&&m<=1,O=sf.distanceTo(ug)<mr*.5;if(p&&O){Bn.start.fromBufferAttribute(c,f),Bn.end.fromBufferAttribute(h,f),Bn.start.applyMatrix4(a),Bn.end.applyMatrix4(a);let B=new X,R=new X;es.distanceSqToSegment(Bn.start,Bn.end,R,B),e.push({point:R,pointOnLine:B,distance:es.origin.distanceTo(R),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var gr=class extends Rn{constructor(t=new Fi,e=new ji({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)cg.fromBufferAttribute(e,a),hg.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+cg.distanceTo(hg);let r=new Ns(s,2,1);return t.setAttribute("instanceDistanceStart",new Li(r,1,0)),t.setAttribute("instanceDistanceEnd",new Li(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;es=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;mr=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Vh.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=mr*.5;else{let x=Math.max(s.near,Vh.distanceToPoint(es.origin));h=dg(s,x,c.resolution)}if(Vh.radius+=h,es.intersectsSphere(Vh)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),$h.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=mr*.5;else{let x=Math.max(s.near,$h.distanceToPoint(es.origin));u=dg(s,x,c.resolution)}$h.expandByScalar(u),es.intersectsBox($h)!==!1&&(n?GM(this,e):WM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(nf),this.material.uniforms.resolution.value.set(nf.z,nf.w))}};var zs=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function fg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:c,CY:h,mcs:u,q:x,list:f,clamp:y,norm:S,munis:I}=i,m=l=>document.querySelector(l),p=l=>String(l).replace(/[<>&"]/g,d=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[d]),O=(l,d)=>[(l-c)*o,(d-h)*o],B=.06,R=t.segs.map(l=>{let d=[],_=[0];for(let v=0;v<l.length;v+=2){let b=O(l[v],l[v+1]);d.length&&_.push(_[_.length-1]+Math.hypot(b[0]-d[d.length-1][0],b[1]-d[d.length-1][1])),d.push(b)}return{p:d,c:_,L:_[_.length-1]}}),w=t.stops.map(([l,d,_,v])=>({n:l,id:v,w:O(d,_),fams:new Set})),U=t.routes.map(([l,d,_])=>({s:l,l:d,c:_})),G=new Map;(t.bus||[]).forEach(([l,d,_,v])=>{let b={days:new Set(l),name:d,stops:_,times:v};_.forEach((T,P)=>{if(P<_.length-1){let F=G.get(T)||[];F.push([b,P]),G.set(T,F)}})});function A(l,d,_){let v=ee(),b=t.days.indexOf(v.ymd),T=[];for(let[P,F]of G.get(l)||[]){if(!P.days.has(b))continue;let D=P.times[F];if(D<d||D>_)continue;let W=P.stops[P.stops.length-1];T.push({sm:D,est:D,dl:0,fam:P.name,dest:w[W].n,destId:w[W].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(F)})}return T}let N=(l,d)=>{let _=l.match(/^R([A-Z]*)(\d*)(.*)$/),v=d.match(/^R([A-Z]*)(\d*)(.*)$/);return(_[1]||"").localeCompare(v[1]||"")||(+_[2]||0)-(+v[2]||0)||_[3].localeCompare(v[3])},V=[...new Set(U.map(l=>l.s))].sort(N),q={};U.forEach(l=>{q[l.s]||(q[l.s]=l.c)});let et=t.pats.map(([l,d,_])=>({stops:l,t:d,segs:_})),rt=t.trips.map(([l,d,_,v,b],T)=>({day:l,pat:et[d],fam:U[_].s,c:U[_].c,t0:v,num:b,tid:t.tids[T]})),j={};V.forEach(l=>j[l]=new Set),rt.forEach(l=>{l.pat.segs.forEach(d=>j[l.fam].add(d)),l.pat.stops.forEach(d=>w[d].fams.add(l.fam))});let Q=t.days.map((l,d)=>rt.filter(_=>_.day===d)),ht=new Map(rt.map(l=>[l.tid,l])),ft=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,mt=3.922*Tt,Mt=-39.705*Tt;function St(l,d){let _=l*Tt+mt,v=d*Tt,b=Math.cos(Mt),T=Math.sin(Mt),P=Math.cos(v),F=Math.cos(_)*P,D=Math.sin(_)*P,W=Math.sin(v),K=Math.atan2(D,F*b-W*T),g=Math.asin(W*b+F*T),C=Math.sqrt(2/(1+Math.cos(K)*Math.cos(g))),k=C*Math.cos(g)*Math.sin(K),Z=C*Math.sin(g),[ut,wt,dt,bt,nt,le,xe]=ft;return O((wt+ut*k-nt)*xe,(le-(bt-dt*Z))*xe)}let Wt=new Map(w.map((l,d)=>[l.id,d]));function Jt(l){if(l.g)return l.g;let d=[],_=[],v=[0],b=0;return l.segs.forEach((T,P)=>{let F=R[T];F.p.forEach((D,W)=>{P&&!W||(d.push(D),_.push(b+F.c[W]))}),b+=F.L,v.push(b)}),l.g={pts:d,cum:_,stopD:v}}function $e(l,d,_,v){let b=1e18,T=0;for(let P=0;P+1<l.pts.length;P++){if(l.cum[P+1]<_||l.cum[P]>v)continue;let F=l.pts[P],D=l.pts[P+1],W=D[0]-F[0],K=D[1]-F[1],g=W*W+K*K||1e-9,C=Math.max(0,Math.min(1,((d[0]-F[0])*W+(d[1]-F[1])*K)/g)),k=F[0]+W*C-d[0],Z=F[1]+K*C-d[1],ut=k*k+Z*Z;ut<b&&(b=ut,T=l.cum[P]+C*(l.cum[P+1]-l.cum[P]))}return{d:T,err:Math.sqrt(b)}}function Ae(l,d){let _=0,v=l.cum.length-1;if(d<=0)return l.pts[0];if(d>=l.cum[v])return l.pts[v];for(;v-_>1;){let F=_+v>>1;l.cum[F]<=d?_=F:v=F}let b=(d-l.cum[_])/(l.cum[v]-l.cum[_]||1),T=l.pts[_],P=l.pts[v];return[T[0]+(P[0]-T[0])*b,T[1]+(P[1]-T[1])*b]}let Oe=l=>`${l.slice(6,8)}/${l.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function xt(l){let d={};return _t.formatToParts(l).forEach(_=>d[_.type]=_.value),{ymd:d.year+d.month+d.day,min:+d.hour*60+ +d.minute+ +d.second/60}}let It=0,ne=null,Yt=0,he=0;function ee(){let l=xt(new Date);if(It===0&&ne==null)return{...l,live:!0};let d=ne==null?l.min:Yt+(It?(performance.now()-he)/6e4*It:0);return{ymd:l.ymd,min:d,live:!1}}let st=l=>(l=(Math.floor(l+1e-6)%1440+1440)%1440,String(Math.floor(l/60)).padStart(2,"0")+":"+String(l%60).padStart(2,"0")),At="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let l=new URLSearchParams(location.search).get("rt");l&&localStorage.setItem("rod_rt",l);let d=localStorage.getItem("rod_rt");d&&/jhmuyo\.workers\.dev/.test(d)&&(d=At,localStorage.setItem("rod_rt",d)),H.url=d||At}catch{H.url=At}let Ct=(l,d)=>fetch(l+d,{cache:"no-store"}).then(_=>{if(!_.ok)throw new Error("HTTP "+_.status);return _.json()}),Bt=l=>/^51/.test(l||"");async function oe(){if(!H.url){De();return}let l=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&Ct(l,"/reports.json").then(D=>{D&&Array.isArray(D.items)?(H.rep=D.items,H.repSkew=(D.now||Date.now())-Date.now(),D.tipos&&(H.tipos=D.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let d=!H.adifAt||Date.now()-H.adifAt>11e4,[_,v,b,T,P]=await Promise.allSettled([Ct(l,"/trip_updates.json"),Ct(l,"/vehicle_positions.json"),Ct(l,"/alerts.json"),Ct(l,"/notices.json"),d?Ct(l,"/adif.json"):Promise.reject(0)]);if(P.status==="fulfilled"&&P.value&&P.value.ok?(H.adif=P.value,H.adifAt=Date.now()):d&&(H.adifAt=Date.now()-6e4),_.status==="fulfilled"){let D=new Map,W=new Map;for(let K of _.value.entity||[]){let g=K.tripUpdate;if(!g||!g.trip||!Bt(g.trip.tripId))continue;let C=g.trip.tripId,k=(g.stopTimeUpdate||[])[0],Z=g.delay;Z==null&&k&&(Z=(k.arrival||k.departure||{}).delay),g.trip.scheduleRelationship==="CANCELED"&&(Z="X"),Z!=null&&D.set(C,Z),W.set(C,{next:k?{sid:k.stopId,t:+((k.arrival||k.departure||{}).time||0)}:null})}H.delays=D,H.tu=W,H.ok=Date.now(),H.feedTs=+((_.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=_.reason&&_.reason.message||__t(0);if(v.status==="fulfilled"){let D=new Map,W=Date.now()/1e3;for(let K of v.value.entity||[]){let g=K.vehicle;if(!g||!g.trip||!Bt(g.trip.tripId)||!g.position)continue;let C=g.vehicle&&g.vehicle.label||"",k=C.match(/PLATF\.\(([^)]+)\)/),Z=H.vp.get(g.trip.tripId),ut={tid:g.trip.tripId,w:St(+g.position.longitude,+g.position.latitude),st:g.currentStatus||"",sid:g.stopId||"",ts:+g.timestamp||W,label:C,plat:k?k[1]:"",fam:(C.split("-")[0]||"").trim(),num:g.vehicle&&g.vehicle.id||""};ut.disp=Z?Z.disp:null,D.set(ut.tid,ut)}H.vp=D,H.okVP=Date.now()}let F=[];if(T.status==="fulfilled"&&Array.isArray(T.value.included)){H.okNotices=Date.now();for(let D of T.value.included){let W=new Set((D.lines||[]).map(Z=>Z.id).filter(Z=>q[Z])),K=(Z,ut)=>{Z=Z||{},ut=ut||window.__L;let wt=Z[ut];return ut==="en"&&wt&&(wt===Z.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(wt))&&(wt=""),(wt||Z.es||Z.ca||"").trim()},g=Z=>[K(D.description,Z),K(D.title,Z)].sort((ut,wt)=>wt.length-ut.length)[0],C=g(),k=g("es");C&&F.push({id:"N"+D.externalId,fams:W,stops:new Set,txt:C,es:k,when:(D.date||"")+"T"+(D.time||""),src:"Rodalies",core:D.core||""})}}if(b.status==="fulfilled"){let D=+((b.value.header||{}).timestamp||0);if(H.alertsTs=D,Date.now()/1e3-D<6*3600)for(let W of b.value.entity||[]){let K=W.alert;if(!K)continue;let g=new Set,C=new Set;for(let wt of K.informedEntity||[])(wt.routeId||"").startsWith("51")&&g.add(wt.routeId.replace(/^51T\d+/,"")),wt.stopId&&Wt.has(wt.stopId)&&C.add(Wt.get(wt.stopId));if(!g.size&&!C.size)continue;let k=(K.descriptionText||K.headerText||{translation:[]}).translation||[],Z=((k.find(wt=>wt.language==="es")||k[0]||{}).text||"").trim(),ut=+((K.activePeriod||[])[0]||{}).start||0;F.some(wt=>wt.txt===Z)||F.push({id:W.id,fams:g,stops:C,txt:Z,when:ut?new Date(ut*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[D,W]of(H.adif.items||[]).entries()){let K=(W.t?W.t+". ":"")+W.txt,g=new Set,C=new Set,k=S(K);for(let Z of K.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))q[Z[1]]&&g.add(Z[1]);w.forEach((Z,ut)=>{Z.fams.size&&Z.n.length>4&&k.includes(S(Z.n))&&(C.add(ut),g.size||Z.fams.forEach(wt=>g.add(wt)))}),F.some(Z=>Z.txt===K)||F.push({id:"A"+D,fams:g,stops:C,txt:K,when:H.adif.upd||"",src:"Adif",lvl:W.lvl})}if(T.status==="fulfilled"||b.status==="fulfilled"||H.adif){H.alerts=F.sort((D,W)=>W.when>D.when?1:-1);try{o0()}catch{}}De(),du(),Ut=0,a()}let ae=()=>H.okVP&&Date.now()-H.okVP<9e4,de={at:0,v:!1},_e=()=>{if(!ae()||H.vp.size>0)return!1;if(Date.now()-de.at>3e4){de.at=Date.now();let l=xt(new Date),d=t.days.indexOf(l.ymd),_=0;if(d>=0)for(let v of Q[d]){let b=l.min-v.t0;b>v.pat.t[1]+2&&b<v.pat.t[v.pat.t.length-2]-2&&_++}de.v=_>=6}return de.v},$=()=>ae()&&!_e();function De(){let l=m("#rtst"),d=m("#mode");if(d){let v=[...Y].filter(F=>{Ua("");let D=os.m.get(F);return D&&D[0]>=2}),b=fu(v),T=!!$()&&ee().live&&!(v.length&&b.length===v.length);d.classList.toggle("on",T),d.classList.toggle("pre",!T),d.textContent=T?__t(1):me.cur?__t(2):__t(3),d.classList.toggle("past",!!me.cur);let P=m("#rcgrab");if(P){let F=P.querySelector(".rdot");F||(F=document.createElement("b"),F.className="rdot",P.insertBefore(F,P.firstChild)),F.className="rdot "+(me.cur?"past":T?"on":"pre"),F.title=d.textContent}d.title=me.cur?`${__t(4)}${me.cur.sn.t}${__t(5)}`:""}if(!l)return;H.url?H.err?l.textContent=__t(7)+H.err+__t(8):$()?l.innerHTML=`${__t(9)}${H.vp.size}${__t(10)}${H.delays.size}${__t(11)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:_e()?l.textContent=__t(12):l.textContent=__t(13):l.textContent=H.err||__t(6);let _=m("#rturl");_&&_._shown!==H.url&&(_.value=H.url,_._shown=H.url)}m("#rtsave").onclick=()=>{let l=m("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(l&&!/^https?:\/\//.test(l)&&(l="https://"+l),!l){H.err=__t(14),De();return}H.url=l;try{localStorage.setItem("rod_rt",l)}catch{}H.ok=0,H.err="",De(),oe()},m("#rtoff").onclick=()=>{H.url=At;try{localStorage.removeItem("rod_rt")}catch{}u._h="",oe()},setInterval(oe,2e4),setTimeout(oe,50);let me={snap:null,key:""};function L(){let l=ee();if(l.live||!Ie.hoy||!Ie.hoy.snaps||It&&ne==null)return null;let d=xt(new Date).min;if(l.min>d+1)return null;let _=null;for(let v of Ie.hoy.snaps){if(!v.d)continue;let b=Ff(v.t);b<=l.min+1&&(!_||b>_.m)&&(_={m:b,sn:v})}return _&&l.min-_.m<=25?_:null}let M=l=>{{let b=ou(l.num);if(b&&b.cx&&ee().live)return"X"}let d=me.cur;if(d){if(d.sn.x&&d.sn.x.includes(l.tid))return"X";let b=d.sn.d[l.tid];return b??0}if(!$())return null;let _=H.delays.get(l.tid),v=H.vp.get(l.tid);return _==="X"?_:v&&v.pre&&v.preDl>=1?Math.max(typeof _=="number"?_:0,v.preDl*60):_??null},Y=new Set(V);try{let l=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(l)&&l.some(d=>V.includes(d))&&(Y.clear(),l.forEach(d=>V.includes(d)&&Y.add(d)))}catch{}let ot=new Fi,gt=new Fi,Pt=new ji({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Ot=new ji({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),pt=new gr(ot,Pt),yt=new gr(gt,Ot);yt.renderOrder=20,pt.renderOrder=21,pt.frustumCulled=yt.frustumCulled=!1,e.add(yt,pt);function zt(l){let d=l[0]/o+c,_=l[1]/o+h;for(let v of I){if(v._bb===void 0){let T=1e9,P=1e9,F=-1e9,D=-1e9;for(let W of v.rings||[]){let K=W[0]||[];for(let g=0;g<K.length;g+=2)K[g]<T&&(T=K[g]),K[g]>F&&(F=K[g]),K[g+1]<P&&(P=K[g+1]),K[g+1]>D&&(D=K[g+1])}v._bb=[T,P,F,D]}let b=v._bb;if(!(d<b[0]||d>b[2]||_<b[1]||_>b[3]))for(let T of v.rings||[]){let P=T[0]||[],F=!1;for(let D=0,W=P.length,K=W-2;D<W;K=D,D+=2){let g=P[D+1],C=P[K+1];g>_!=C>_&&d<(P[K]-P[D])*(_-g)/(C-g)+P[D]&&(F=!F)}if(F)return!0}}return!1}let ie=!1;function Xt(){ie||!I.length||(ie=!0,w.forEach(l=>{l.ext=!zt(l.w)}),R.forEach(l=>{l.ext=!zt(l.p[0])&&!zt(l.p[l.p.length-1])&&!zt(l.p[l.p.length>>1])}))}let Vt=()=>{let l=new Set(Y.size<=2?Y:[]);try{ct&&ct.fam&&l.add(ct.fam)}catch{}return l},se="";function ue(){Xt();let l=[],d=[],_=new Set,v=new fe,b=new fe("#d2d0d0"),T=Vt();se=[...T].join();for(let K of V)if(Y.has(K))for(let g of j[K]){if(_.has(g))continue;_.add(g);let C=R[g].p;v.set(q[K]),R[g].ext&&!T.has(K)&&v.lerp(b,.55);for(let k=0;k+1<C.length;k++)l.push(C[k][0],C[k][1],B,C[k+1][0],C[k+1][1],B),d.push(v.r,v.g,v.b,v.r,v.g,v.b)}l.length||(l.push(0,0,-50,0,0,-50),d.push(0,0,0,0,0,0));let P=new Fi,F=new Fi;P.setPositions(l),P.setColors(d),F.setPositions(l);let D=pt.geometry,W=yt.geometry;pt.geometry=P,yt.geometry=F,D&&D.dispose(),W&&W.dispose(),a()}ue();let Se=l=>new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe(l)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),J=new gn,Ft=w.length,vt=new Float32Array(Ft*3),Ht=new Float32Array(Ft*3),qt=new Float32Array(Ft),Et=new Float32Array(Ft);w.forEach((l,d)=>{vt[d*3]=l.w[0],vt[d*3+1]=l.w[1],vt[d*3+2]=B,Ht.set([1,1,1],d*3),qt[d]=6,Et[d]=1.6}),J.setAttribute("position",new en(vt,3)),J.setAttribute("fill",new en(Ht,3)),J.setAttribute("size",new en(qt,1)),J.setAttribute("bw",new en(Et,1));let re=Se("#1d2330"),Qt=new lr(J,re);Qt.renderOrder=22,Qt.frustumCulled=!1,e.add(Qt);function Ce(){let l=r.dist<45,d=Vt();w.forEach((_,v)=>{let b=[..._.fams].some(P=>Y.has(P)),T=_.ext&&![..._.fams].some(P=>d.has(P))&&v!==Rt;qt[v]=b?v===Rt?13:T?3:l?8:5:0,Et[v]=v===Rt?3:1.6}),J.attributes.size.needsUpdate=!0,J.attributes.bw.needsUpdate=!0}let Re=600,_n=new gn,Yn=new Float32Array(Re*3),Mr=new Float32Array(Re*3),va=new Float32Array(Re),ya=new Float32Array(Re);_n.setAttribute("position",new en(Yn,3)),_n.setAttribute("fill",new en(Mr,3)),_n.setAttribute("size",new en(va,1)),_n.setAttribute("bw",new en(ya,1));let rs=new Float32Array(Re);_n.setAttribute("ang",new en(rs,1));let iu=new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),br=new lr(_n,iu);br.renderOrder=24,br.frustumCulled=!1,e.add(br);let Oi=new gn,fi=new Float32Array(Re*3),wr=new Float32Array(Re*3),Sa=new Float32Array(Re),Ma=new Float32Array(Re);Oi.setAttribute("position",new en(fi,3)),Oi.setAttribute("fill",new en(wr,3)),Oi.setAttribute("size",new en(Sa,1)),Oi.setAttribute("bw",new en(Ma,1));let Ss=new lr(Oi,Se("#ffffff"));Ss.renderOrder=23,Ss.frustumCulled=!1,e.add(Ss);function ba(l,d){let _=R[l],v=d*_.L,b=0,T=_.c.length-1;for(;T-b>1;){let K=b+T>>1;_.c[K]<=v?b=K:T=K}let P=_.c[T]-_.c[b]||1,F=(v-_.c[b])/P,D=_.p[b],W=_.p[T];return[D[0]+(W[0]-D[0])*F,D[1]+(W[1]-D[1])*F]}let Hs=l=>l*l*(3-2*l)*.35+l*.65;function Gs(l,d){let _=l.pat.t,v=l.pat.stops.length,b=_[2*v-2];if(d<_[1]-2||d>b+1)return null;if(d<=_[1])return{w:w[l.pat.stops[0]].w,at:0,next:0,moving:!1};for(let T=0;T<v-1;T++){let P=_[2*T+1],F=_[2*T+2],D=_[2*T+3];if(d<=F){let W=F>P?(d-P)/(F-P):1;return{w:ba(l.pat.segs[T],Hs(y(W,0,1))),at:-1,next:T+1,prev:T,moving:!0}}if(d<=D)return{w:w[l.pat.stops[T+1]].w,at:T+1,next:T+1,moving:!1}}return{w:w[l.pat.stops[v-1]].w,at:v-1,next:v-1,moving:!1}}function Ms(l){let d=t.days.indexOf(l.ymd),_=[];if(d<0)return{k:d,out:_};let v=(b,T)=>{for(let P of b){if(!Y.has(P.fam))continue;let F=M(P);if(F==="X")continue;let D=(F||0)/60,W=l.min+T-P.t0-D;if(W<-2||W>P.pat.t[P.pat.t.length-2]+1)continue;let K=Gs(P,W);K&&_.push({tr:P,p:K,rel:W,dl:D,live:F!=null})}};return v(Q[d],0),d>0&&v(Q[d-1],1440),{k:d,out:_}}function su(l,d,_,v){let b=l.pat.stops[0],T=d.dep0,P=null,F=(W,K)=>{for(let g of W||[]){let C=g.pat.stops,k=C.length;if(C[k-1]!==b||g===l)continue;let Z=g.t0+g.pat.t[2*(k-1)]-K;if(Z>T+5||Z<T-120)continue;let ut=Jt(g.pat),wt=$e(ut,d.w,-1,1e9);if(wt.err>.6)continue;let dt=ut.stopD,bt=g.pat.t,nt=dt.findIndex(Zt=>Zt>wt.d);nt<0&&(nt=k-1);let le=nt===0?bt[1]:bt[2*nt-1]+(dt[nt]>dt[nt-1]?(wt.d-dt[nt-1])/(dt[nt]-dt[nt-1]):1)*(bt[2*nt]-bt[2*nt-1]),xe=_-(g.t0+le-K);xe<-5||xe>120||(!P||Math.abs(xe)<Math.abs(P.prevDl))&&(P={prevTr:g,dPrev:wt.d,prevDl:xe,arrO:Z+Math.max(0,xe)})}};if(F(Q[v],0),v>0&&F(Q[v-1],1440),!P)return{prevTr:null,preDl:0};let D=Math.max(T,P.arrO+3);return{...P,depEst:D,preDl:Math.max(0,D-T)}}function ru(l,d,_){let v=l.pat.t,b=d.length;if(!(_>=0))return _<0?d[0]:null;for(let T=0;T<b;T++)if(_<=v[2*T+1]){if(_>=v[2*T]||T===0)return d[T];let P=v[2*T-1],F=v[2*T];return d[T-1]+(d[T]-d[T-1])*(F>P?(_-P)/(F-P):1)}return d[b-1]}let ll=performance.now();function au(){let l=[],d=Date.now()/1e3,_=performance.now(),v=Math.min(1,(_-ll)/1e3);ll=_;for(let b of H.vp.values()){let T=ht.get(b.tid),P=T?T.fam:b.fam;if(P&&q[P]&&!Y.has(P))continue;let F=H.delays.get(b.tid),D=typeof F=="number"?F/60:0,W=Math.max(0,d-b.ts);b.mvTs!==b.ts&&((!b.mvW||Math.hypot(b.w[0]-b.mvW[0],b.w[1]-b.mvW[1])>.025)&&(b.mvW=b.w,b.mvAt=b.ts),b.mvTs=b.ts),b.still=b.ts-(b.mvAt||b.ts);let K=b.w,g=-1;if(T){let k=Jt(T.pat),Z=k.stopD;if(b.dObs==null||b.obsAt!==b.ts){let nt=$e(k,b.w,-1,1e9);b.dObs=nt.d,b.err=nt.err,b.obsAt=b.ts}let ut=ee(),wt=t.days.indexOf(ut.ymd),dt=T.day===wt-1?1440:0,bt=T.t0+T.pat.t[1]-dt;if(b.pre=ut.min+D<bt-1&&(b.dObs>Z[0]+.35||b.err>.6)&&!(b.st==="STOPPED_AT"&&b.sid===w[T.pat.stops[0]].id),b.dep0=bt,b.pre){if(b.atStop=-1,b.next=0,g=0,b.disp=null,b.prevAt!==b.ts&&(b.prevAt=b.ts,Object.assign(b,su(T,b,ut.min,wt))),b.prevTr){let nt=Jt(b.prevTr.pat);K=Ae(nt,b.dPrev)}}else if(b.err<=.6){let nt=Z.findIndex(Zt=>Zt>b.dObs+.08);nt<0&&(nt=Z.length-1);let le=Z.reduce((Zt,He,Me)=>Math.abs(He-b.dObs)<Math.abs(Z[Zt]-b.dObs)?Me:Zt,0);b.atStop=Math.abs(Z[le]-b.dObs)<.16?le:-1;{let Zt=b.st==="STOPPED_AT"&&b.sid?T.pat.stops.findIndex(He=>w[He].id===b.sid):-1;Zt>=0&&Math.abs(Z[Zt]-b.dObs)<.6&&(b.atStop=Zt,nt<=Zt&&(nt=Math.min(Zt+1,Z.length-1)))}b.before=b.atStop>=0&&b.dObs<Z[b.atStop]-.02,b.next=nt,g=nt;let xe=b.dObs;if(b.st==="STOPPED_AT"&&b.atStop>=0)xe=Z[b.atStop];else if(nt>0){let Zt=(T.pat.t[2*nt]-T.pat.t[2*nt-1])*60,He=Zt>0?(Z[nt]-Z[nt-1])/Zt:0,Me=ee(),ce=t.days.indexOf(Me.ymd),yn=T.day===ce-1?1440:0,Xe=ru(T,Z,Me.min+yn-T.t0-D),$i=b.dObs+He*Math.min(W,60);Xe!=null&&($i=Math.min($i,Math.max(b.dObs,Xe))),xe=Math.max(b.dObs,Math.min(Z[nt]-.03,$i))}b.disp==null||Math.abs(b.disp-xe)>1.2?b.disp=xe:xe>b.disp&&(b.disp+=(xe-b.disp)*Math.min(1,v*1.5)),K=Ae(k,b.disp)}else if(b.err>2){let nt=ee(),le=t.days.indexOf(nt.ymd),xe=T.day===le-1?1440:0,Zt=Gs(T,nt.min+xe-T.t0-D);Zt&&(K=Zt.w,b.est=!0,g=Zt.next),b.atStop=-1,b.next=Zt?Zt.next:-1}else b.atStop=-1,b.next=-1}let C=b.pre?"":b.st==="STOPPED_AT"&&b.atStop>=0||b.atStop>=0&&b.still>30?"st":b.still>=90&&b.atStop<0?"via":"";l.push({tr:T,v:b,w:K,stop:C,p:{w:K},fam:P||"?",c:T?T.c:q[P]||"#6b7385",dl:D,live:!0,real:!0,idx:g,age:W,cancel:F==="X"})}return l}let kn=new Map,E=!1,z=!1,at="",it={st:-1},tt=[],Ut=0,Lt=null,ct=null,Rt=-1,Dt=!1,Te=0,Pe="";function jt(l){let d=It>0||$()&&ne==null||!!ct,_=window.__mapHidden?1e3:d?50:250;if(l-Ut<_)return!1;Ut=l,[...Vt()].join()!==se&&(ue(),Ce());{let g=L(),C=g?g.sn.t:"";me.cur=g,C!==me.key&&(me.key=C,De()),!g&&!ee().live&&!Ie.at&&on()}let v=ee(),b=$()&&v.live,T=b?{k:t.days.indexOf(v.ymd),out:au()}:Ms(v);tt=T.out;let P=new fe,F=0,D=0;for(let g of tt){if(F>=Re)break;Yn[F*3]=g.p.w[0],Yn[F*3+1]=g.p.w[1],Yn[F*3+2]=B+.02;let C=null;if(g.real&&g.v.pre&&g.v.prevTr)C=Ae(Jt(g.v.prevTr.pat),g.v.dPrev+.35);else if(g.real&&g.tr&&!g.v.pre&&g.v.err<=.6&&g.v.disp!=null&&!(g.v.st==="STOPPED_AT"&&g.v.atStop>=0))C=Ae(Jt(g.tr.pat),g.v.disp+.35);else if(!g.real&&g.p.moving){let dt=g.tr.pat.t,bt=g.p.prev,nt=dt[2*bt+1],le=dt[2*bt+2],xe=le>nt?(g.rel-nt)/(le-nt):1;C=ba(g.tr.pat.segs[bt],Math.min(1,Hs(y(xe,0,1))+.04))}let k=g.real?!!g.stop:!g.p.moving;if(g.broke=Cf(g),g.broke)rs[F]=85;else if(k)rs[F]=75;else if(C){let dt=cl(g.p.w),bt=cl(C),nt=bt[0]-dt[0],le=bt[1]-dt[1];rs[F]=Math.hypot(nt,le)>.05?Math.atan2(nt,-le):99}else rs[F]=99;P.set(g.c||g.tr.c),Mr[F*3]=P.r,Mr[F*3+1]=P.g,Mr[F*3+2]=P.b;let Z=g.tr?g.tr===ct:ct&&ct.vtid===g.v.tid;va[F]=Z?22:r.dist<45?17:14,ya[F]=Z?3.5:2.2;let ut=g.real&&g.stop==="via"||!!g.broke,wt=g.cancel||g.broke?[.86,.15,.15]:g.dl>10?[.86,.15,.15]:g.dl>5?[.92,.48,.05]:g.dl>=1?[.98,.8,.08]:[.09,.64,.29];(g.live&&g.dl>=5||Z||ut)&&(fi[D*3]=g.p.w[0],fi[D*3+1]=g.p.w[1],fi[D*3+2]=B+.01,wr.set(Z?wt:ut?[.86,.15,.15]:[.98,.45,.09],D*3),Sa[D]=va[F]+(Z?16+5*Math.sin(l/220):ut?10+3*Math.sin(l/400):8),Ma[D]=Z?2:3,D++),F++}if(_n.setDrawRange(0,F),Oi.setDrawRange(0,D),["position","fill","size","bw"].forEach(g=>{_n.attributes[g].needsUpdate=!0,Oi.attributes[g].needsUpdate=!0}),_n.attributes.ang.needsUpdate=!0,Lt){let g=tt.find(C=>C.tr===Lt);if(g){let C=0,k=innerHeight,Z=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,ut=m("#rc").getBoundingClientRect();innerWidth<=640&&(Z&&(C=Z.bottom),k=Math.min(k,ut.top));let wt=C+(k-C)/2,dt=wt-innerHeight/2,bt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=g.p.w[0]-Math.sin(r.yaw)*dt*bt,s.ty=g.p.w[1]+Math.cos(r.yaw)*dt*bt}else $()&&ee().live&&(Lt=null)}let W=st(Math.floor(v.min+1e-6));W!==Pe&&(Pe=W,m("#ctime").textContent=W),m("#ntr").textContent=String(tt.length),m("#ntrl").textContent=b?__t(15):__t(16);{let g=Y.size<V.length?[...Y].sort(N).join(", "):"",C=m("#ccount"),k=me.cur?`\u23EA ${tt.length}${__t(17)}${me.cur.sn.t} \xB7 ${Object.values(me.cur.sn.d).filter(Z=>Z>=60).length}${__t(18)}`:!v.live&&v.min<xt(new Date).min-1&&!It?`${__t(19)}${Ie.hoy&&Ie.hoy.snaps&&Ie.hoy.snaps.some(Z=>Z.d)?`${__t(20)}${Ie.hoy.snaps.find(Z=>Z.d).t}`:__t(21)}`:b&&!tt.some(Z=>Z.real)&&fu(Y).length?`\u{1F4E1} ${__t(22)}${g?` <small>\xB7 ${p(g)}</small>`:""} <small class="nopos">\xB7 ${__t(23)}</small>`:`\u{1F686} ${tt.length} ${b?__t(24):__t(25)}${g?` <small>\xB7 ${p(g)}</small>`:""}${b&&H.okVP?(()=>{let Z=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${Z<3?" new":""}">\u25CF ${__t(26)}${zs(Z+" s")}</small>`})():""}`;C&&C._t!==k&&(C.innerHTML=k,C._t=k)}let K=new Date;if(m("#cdate").textContent=v.live?__t(27):It?__t(28)+It:_i?__t(29):__t(30),T.k<0?m("#src").innerHTML=`${__t(31)}${Oe(t.days[0])}${__t(32)}${Oe(t.days[t.days.length-1])}${__t(33)}`:b?m("#src").textContent=`${__t(34)}${zs(Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(g=>g.ts),0)))+" s")}`:_e()&&v.live?m("#src").innerHTML=__t(35):m("#src").innerHTML=__t(36)+(H.url?__t(37):__t(38))+__t(39),v.live){let g=Math.round(v.min),C=m("#tsl");document.activeElement!==C&&(C.value=g<240?g+1440:g)}{let g=ct?String(ct.num||ct.vtid||""):"";g!==jt._sk&&(jt._sk=g,Ve(!0))}return Ve(),l-Te>3e3&&(ct||Rt>=0||Dt||z||at)&&(Te=l,Ne()),De(),!0}let Ge=-1,rn=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),qe=[],Ue=document.createElement("button");Ue.type="button",Ue.id="mbtn",Ue.title=__t(40),Ue.innerHTML=__t(41),Ue.onclick=()=>{rn=!rn;try{localStorage.setItem("rod_mun",rn?"1":"")}catch{}Ue.classList.toggle("on",rn),a(),Si()},Ue.classList.toggle("on",rn),document.body.appendChild(Ue);let wn=I.slice().sort((l,d)=>d.pop-l.pop);function Kt(l){if(l._a)return l._a;let d=null,_=0;for(let v of l.rings||[]){let b=v[0];if(!b)continue;let T=0,P=0,F=0;for(let D=0,W=b.length;D<W;D+=2){let K=b[D],g=b[D+1],C=b[(D+2)%W],k=b[(D+3)%W],Z=K*k-C*g;T+=Z,P+=(K+C)*Z,F+=(g+k)*Z}Math.abs(T)>_&&(_=Math.abs(T),d=[P/(3*T),F/(3*T)])}return l._a=d?[(d[0]-c)*o,(d[1]-h)*o]:[l.cx,l.cy]}let Ln=l=>l>=1e5?1:l>=2e4?2:l>=5e3?3:4,ke=[0,7.6,6.7,6,5.4],ti=[0,17,15,13,12],pi=l=>l.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Si(){let l=s.tilt<.06&&r.tilt<.08;Ue.classList.toggle("show",l);let d=0;if(rn&&l){let _=[...document.querySelectorAll(".plab, .slab")].filter(T=>T.offsetParent!==null||T.style.display==="block").map(T=>{let P=T.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(T=>T[2]>T[0]),v=r.dist,b=v>160?5e4:v>130?2e4:v>105?8e3:v>80?3e3:v>62?800:0;for(let T of wn){let P=Ln(T.pop);if(T.pop<b)break;let F=Kt(T);if(xn.set(F[0],F[1],B).project(n),Math.abs(xn.x)>1.02||Math.abs(xn.y)>1.02)continue;let D=(xn.x*.5+.5)*innerWidth,W=(-xn.y*.5+.5)*innerHeight,K=pi(T.name),g=K.length*ke[P]+8,C=ti[P],k=[D-g/2,W-C/2,D+g/2,W+C/2];if(_.some(ut=>k[0]<ut[2]&&ut[0]<k[2]&&k[1]<ut[3]&&ut[1]<k[3]))continue;_.push(k);let Z=qe[d]||(qe[d]=Object.assign(document.createElement("div"),{className:"mlab"}));Z.isConnected||document.body.appendChild(Z),Z._n!==K&&(Z.textContent=K,Z._n=K),Z._t!==P&&(Z.className="mlab t"+P,Z._t=P),Z.style.transform=`translate(${Math.round(D)}px,${Math.round(W)}px) translate(-50%,-50%)`,Z.style.display="block",d++}}for(;d<qe.length;d++)qe[d].style.display="none"}let Ie={at:0,hoy:null,ayer:null,err:""},Ye="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function on(){Date.now()-Ie.at<5*6e4||(Ie.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(l=>fetch(Ye+l+".json",{cache:"no-store"}).then(d=>d.ok?d.json():null).catch(()=>null))).then(([l,d,_])=>{Ie.hoy=l,Ie.ayer=d,Ie.hist=_,Ie.tr=null,Ie.err=l?"":__t(42),z&&(u._h="",Ne()),Ve(!0)}))}function Bi(l){let d={};for(let v of l&&l.snaps||[])for(let b of v.r||[]){let T=/^\d+[A-Z](\d+)/.exec(b);T&&(d[T[1]]=d[T[1]]||[]).push(Math.max(0,v.d&&v.d[b]||0)/60)}let _={};for(let v in d){let b=d[v].sort((T,P)=>T-P);_[v]=Math.round(b[b.length>>1])}return _}function Ze(l){if(!Ie.tr){let _=new Map;for(let v of Ie.hist&&Ie.hist.days||[])_.set(v.day,v.tr);for(let v of[Ie.ayer,Ie.hoy])if(v&&v.day&&!_.has(v.day)){let b=Bi(v);Object.keys(b).length&&_.set(v.day,b)}Ie.tr=_}let d=[...Ie.tr.values()].map(_=>_[String(l)]).filter(_=>_!=null);return d.length?{n:d.length,late:d.filter(_=>_>=5).length,avg:d.reduce((_,v)=>_+v,0)/d.length}:null}let Dn=l=>l>=90?"g":l>=80?"y":l>=65?"w":"b",zn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},wa=l=>l>10?zn.b:l>5?zn.w:l>=1?zn.y:zn.g,Ws=l=>(l>=.05?"+":"")+(Math.round(l*10)/10).toString().replace(".",",")+" min";function Ea(l,d,_){return`<div class="sbars">${l.map(v=>`<div class="sbar" title="${p(v.tip||"")}"><span class="sl">${v.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(v.w*100))}%;background:${v.c}"></i></span><b class="sv" style="color:${v.c===zn.y?"var(--svy,#a16207)":v.c===zn.w?"var(--svw,#c2410c)":v.c}">${v.val}</b></div>`).join("")}</div>`}function Bg(l){if(l=(l||[]).filter(dt=>dt.n>=10),!l||l.length<2){let dt=l&&l[0];return dt?`${__t(43)}${dt.t}: ${Math.round(dt.ok/dt.n*100)}${__t(44)}${dt.n}${__t(45)}`:__t(46)}let d=dt=>{let[bt,nt]=dt.t.split(":").map(Number);return bt*60+nt},_=d(l[0]),v=Math.max(_+60,d(l[l.length-1])),b=300,T=112,P=24,F=dt=>P+(dt-_)*(b-P-8)/(v-_),D=dt=>8+(100-dt)/100*(T-26),W=dt=>dt.n?dt.ok/dt.n*100:100,K=l.map(dt=>[F(d(dt)),D(W(dt)),dt]),g=dt=>dt[0].toFixed(1)+","+dt[1].toFixed(1),C=[],k=[];K.forEach((dt,bt)=>{bt&&d(dt[2])-d(K[bt-1][2])>45&&(C.push(k),k=[]),k.push(dt)}),C.push(k);let Z=K[K.length-1],ut=[];for(let dt=Math.ceil(_/180)*3;dt*60<v;dt+=3)dt*60>_+20&&ut.push(dt);let wt=Math.round(l.reduce((dt,bt)=>dt+bt.ok,0)/Math.max(1,l.reduce((dt,bt)=>dt+bt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${b} ${T}${__t(47)}${[100,75,50,25].map(dt=>`<line x1="${P}" x2="${b-4}" y1="${D(dt)}" y2="${D(dt)}" class="gl"/><text x="2" y="${D(dt)+3}" class="ax">${dt}%</text>`).join("")}
      <line x1="${P}" x2="${b-4}" y1="${D(wt)}" y2="${D(wt)}" class="avg"/>
      ${C.filter(dt=>dt.length).map(dt=>`<polygon points="${g([dt[0][0],D(0)])} ${dt.map(g).join(" ")} ${g([dt[dt.length-1][0],D(0)])}" class="ar"/><polyline points="${dt.map(g).join(" ")}" class="ln"/>`).join("")}
      ${K.map(([dt,bt,nt])=>`<circle cx="${dt.toFixed(1)}" cy="${bt.toFixed(1)}" r="6" class="hit"><title>${nt.t} \xB7 ${Math.round(W(nt))}${__t(48)}${nt.n}${__t(49)}${nt.d5}${__t(50)}${Ws(nt.avg)}${nt.nd?` \xB7 ${nt.nd}${__t(51)}`:""}</title></circle>`).join("")}
      <circle cx="${Z[0].toFixed(1)}" cy="${Z[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(Z[0],b-30).toFixed(1)}" y="${(Z[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(W(Z[2]))}%</text>
      ${ut.map(dt=>`<text x="${F(dt*60).toFixed(1)}" y="${T-4}" class="ax" text-anchor="middle">${String(dt).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${T-4}" class="ax">${l[0].t}</text></svg><small class="snote">${__t(52)} (${wt}%)</small>`}function kg(){on();let l=ee(),d=tt.filter(F=>F.real&&$()&&l.live),_=d.filter(F=>H.delays.has(F.v.tid)),v=_.length,b=d.length-v,T=`${__t(53)}`;if(v){let F=_.filter(bt=>bt.dl<3).length,D=_.filter(bt=>bt.dl>=5).length,W=_.filter(bt=>bt.stop==="via").length,K=Math.round(F/v*100);T+=`${__t(54)}${v}${__t(55)}${b?` \xB7 ${b}${__t(60)}`:""}</small><div class="kpis">
        <div class="kpi ${Dn(K)}"><b>${K}${__t(56)}${Dn(100-D/v*100*2)}" title="${Math.round(D/v*100)}${__t(57)}${D}${__t(58)}${W===0?"g":W<=2?"w":"b"}"><b>${W}${__t(59)}`;let g=new Map;_.forEach(bt=>{let nt=bt.fam,le=g.get(nt)||{n:0,ok:0,sum:0};le.n++,le.ok+=bt.dl<3,le.sum+=Math.max(0,bt.dl),g.set(nt,le)});let C=[...g].filter(([bt])=>q[bt]).sort((bt,nt)=>bt[1].ok/bt[1].n-nt[1].ok/nt[1].n||nt[1].sum/nt[1].n-bt[1].sum/bt[1].n),k=C.filter(([,bt])=>bt.ok<bt.n),Z=C.filter(([,bt])=>bt.ok===bt.n);T+=`${__t(61)}`+(k.length?"":__t(62))+Ea(k.map(([bt,nt])=>({lab:Nn(bt),w:nt.ok/nt.n,c:zn[Dn(nt.ok/nt.n*100)],val:`${Math.round(nt.ok/nt.n*100)}% <small>${Ws(nt.sum/nt.n)}</small>`,tip:`${bt}: ${nt.ok}${__t(63)}${nt.n}${__t(64)}${Ws(nt.sum/nt.n)}`})))+(Z.length?`${__t(65)}${Z.map(([bt])=>Nn(bt)).join(" ")}</p>`:"");let ut=new Map;_.forEach(bt=>{if(!bt.tr||bt.v.next==null||bt.v.next<0||bt.v.pre)return;let nt=bt.tr.pat.stops[bt.v.next],le=ut.get(nt)||{n:0,sum:0};le.n++,le.sum+=Math.max(0,bt.dl),ut.set(nt,le)});let wt=[...ut].filter(([,bt])=>bt.sum/bt.n>=1).sort((bt,nt)=>nt[1].sum/nt[1].n-bt[1].sum/bt[1].n).slice(0,8),dt=wt.length?wt[0][1].sum/wt[0][1].n:1;T+=`${__t(66)}`+(wt.length?Ea(wt.map(([bt,nt])=>({lab:`<span class="sn" data-gs="${bt}">${p(w[bt].n)}</span>`,w:nt.sum/nt.n/dt,c:wa(nt.sum/nt.n),val:`${Ws(nt.sum/nt.n)} <small>${nt.n} ${nt.n===1?"tren":__t(67)}</small>`,tip:`${w[bt].n}: ${nt.n}${__t(68)}${Ws(nt.sum/nt.n)}${__t(69)}`}))):__t(70))}else T+=`${__t(71)}`;let P=Ie.hoy;T+=`<button type="button" class="hmore" data-cols>${ln.on?__t(72):__t(73)}</button>`;{Ua("");let F=[...os.m].filter(([D,W])=>q[D]&&W[0]>=3).map(([D,W])=>[D,W[1]/W[0]]).sort((D,W)=>D[1]-W[1]);F.length&&!$()?T+=`<h4>${__t(74)}</h4><small class="snote">${__t(75)}</small>`:F.length&&(T+=`${__t(76)}`+Ea(F.slice(0,8).map(([D,W])=>({lab:Nn(D),w:W,c:zn[Dn(W*100)],val:`${Math.round(W*100)}%`,tip:`${D}: ${Math.round(W*100)}${__t(77)}`}))))}{let F=(k,Z)=>{let ut=(k&&k.snaps||[]).filter(bt=>bt.n&&(!Z||bt.t<=Z)),wt=ut.reduce((bt,nt)=>bt+nt.n,0),dt=ut.reduce((bt,nt)=>bt+nt.ok,0);return wt?dt/wt*100:null},D=(Ie.hoy&&Ie.hoy.snaps||[]).filter(k=>k.n).map(k=>k.t).pop(),W=F(Ie.hoy),K=F(Ie.ayer,D),g=W!=null?Math.round(W):null,C=K!=null?Math.round(K):null;W!=null&&(T+=`${__t(78)}${Dn(W)}">${Math.round(W)}${__t(79)}${K!=null?`<span>${D?__t(80):__t(81)} <b class="${Dn(K)}">${C} %</b></span><span>${g>C?__t(82):g<C?__t(83):__t(84)}</span>`:""}</div>`)}if(T+=`${__t(85)}`,P&&P.snaps){T+=Bg(P.snaps);let F=Object.entries(P.st||{}).map(([K,g])=>[Wt.get(K),g]).filter(([K,g])=>K!=null&&g.n>=3).map(([K,g])=>[K,g.sum/g.n/60,g]).filter(K=>K[1]>=1).sort((K,g)=>g[1]-K[1]).slice(0,8);if(F.length){let K=F[0][1];T+=`${__t(86)}`+Ea(F.map(([g,C,k])=>({lab:`<span class="sn" data-gs="${g}">${p(w[g].n)}</span>`,w:C/K,c:wa(C),val:`${Ws(C)}${__t(87)}${Math.round(k.max/60)}</small>`,tip:`${w[g].n}: ${k.n}${__t(88)}${k.d5}${__t(89)}${Math.round(k.max/60)} min`})))}let D=Object.entries(P.lines||{}).filter(([K,g])=>q[K]&&g.n>=3).sort((K,g)=>K[1].ok/K[1].n-g[1].ok/g[1].n);D.length&&(T+=`${__t(90)}`+Ea(D.map(([K,g])=>({lab:Nn(K),w:g.ok/g.n,c:zn[Dn(g.ok/g.n*100)],val:`${Math.round(g.ok/g.n*100)}% <small>${Ws(g.sum/g.n/60)}</small>`,tip:`${K}${__t(91)}${Math.round(g.ok/g.n*100)}${__t(92)}${Math.round(g.max/60)} min`}))));let W=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;T+=`<small class="snote">${W>40?`${__t(94)}${zs(Math.round(W)+" min")}${__t(95)}`:""}${__t(93)}${p((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(96):__t(97)}</small>`}else T+=`<p class="snote">${Ie.at?__t(98):__t(99)}</p>`;return T+"</div>"}function zg(l){let d=ee(),_=tt.filter(C=>(C.fam||C.tr&&C.tr.fam)===l),v=_.filter(C=>C.real),b=_.length,T=_.filter(C=>C.dl>=5).length,P=_.filter(C=>C.dl<3).length,F=_.filter(C=>C.stop==="via"||C.broke).length,D=H.alerts.filter(C=>C.fams.has(l)),W=C=>{let k=C.tr;if(!k)return"";let Z=C.v;if(C.real&&Z){let wt=Z.next>=0?w[k.pat.stops[Z.next]].n:"";return Z.atStop>=0?`${__t(100)}${w[k.pat.stops[Z.atStop]].n}`:wt?`${__t(101)}${wt}`:""}let ut=C.p;return ut&&ut.next!=null&&ut.next>=0?`${__t(101)}${w[k.pat.stops[ut.next]].n}`:""},K=_.slice().sort((C,k)=>k.dl-C.dl).slice(0,40).map(C=>{let k=C.tr;return`<li class="go${Ra({num:k?k.num:C.v.num,tid:k?k.tid:C.v.tid})?" sel":""}" data-gt="${p(k?k.num:C.v.num)}|${p(C.real?C.v.tid:k?k.tid:"")}"><b>${p(k?k.num:C.v.num)}</b><span>${k?ki(w[k.pat.stops[k.pat.stops.length-1]].n,l):""} <small>${p(W(C))}</small></span>${C.dl>=1?`<em class="dl ${zi(C.dl)}">+${Math.round(C.dl)}</em>`:__t(102)}</li>`}).join(""),g=Ua(l);return`<div class="tc sts" style="--c:${q[l]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Nn(l)}${__t(103)}${d.live?`${__t(109)}${b}${__t(110)}${v.length<b?` (${v.length}${__t(111)}`:""}`:`${__t(112)}${st(d.min)}`}</small>
      <div class="kpis"><div class="kpi ${b?Dn(P/b*100):""}"><b>${b?Math.round(P/b*100)+"%":"\u2014"}${__t(104)}${T?T/Math.max(1,b)>.2?"b":"w":"g"}"><b>${T}${__t(105)}${F?"b":"g"}"><b>${F}${__t(106)}${D.length?$g(D):__t(113)}${g<.7?`${__t(114)}${Math.round(g*100)}${__t(115)}`:""}${__t(107)}${K||__t(116)}${__t(108)}`}let $g=l=>`<div class="al">${l.slice(0,3).map(d=>`<p>\u26A0\uFE0F ${Pa(d)} ${p(d.txt)} <small>${La(d)}</small></p>`).join("")}</div>`,ln={on:!1,mesh:null};function wf(){let l=Ie.hoy,d=[];if(l&&l.st)for(let[_,v]of Object.entries(l.st)){let b=Wt.get(_);b!=null&&v.n>=2&&d.push([b,v.sum/v.n/60,v.n])}if(!d.length){let _=new Map;tt.forEach(v=>{if(!v.real||!v.tr||v.v.next==null||v.v.next<0||v.v.pre||!H.delays.has(v.v.tid))return;let b=v.tr.pat.stops[v.v.next],T=_.get(b)||[0,0];T[0]+=Math.max(0,v.dl),T[1]++,_.set(b,T)}),_.forEach((v,b)=>d.push([b,v[0]/v[1],v[1]]))}return d}let Ef=()=>Math.min(1,Math.max(.22,r.dist/110));function Vg(){if(!ln.mesh||!ln.d)return;let l=Ef();if(Math.abs(l-ln.r)<.04)return;ln.r=l;let d=new ze;ln.d.forEach(([_,v],b)=>{d.makeScale(l,l,.3+Math.min(v,40)*.3),d.setPosition(w[_].w[0],w[_].w[1],B),ln.mesh.setMatrixAt(b,d)}),ln.mesh.instanceMatrix.needsUpdate=!0,a()}function Hg(){if(ln.mesh&&(e.remove(ln.mesh),ln.mesh.geometry.dispose(),ln.mesh.material.dispose(),ln.mesh=null),!ln.on){a();return}let l=wf();if(!l.length){un(__t(117)),ln.on=!1;return}let d=new Mo(.32,.32,1,16);d.rotateX(Math.PI/2),d.translate(0,0,.5);let _=new ar({fog:!1}),v=new xo(d,_,l.length),b=new ze,T=new fe;ln.d=l,ln.r=Ef(),l.forEach(([P,F],D)=>{let W=.3+Math.min(F,40)*.3;b.makeScale(ln.r,ln.r,W),b.setPosition(w[P].w[0],w[P].w[1],B),v.setMatrixAt(D,b),T.set(F>10?"#dc2626":F>5?"#ea7a0c":F>=1?"#eab308":"#16a34a"),v.setColorAt(D,T)}),v.renderOrder=25,v.frustumCulled=!1,e.add(v),ln.mesh=v,s.tilt<.5&&(s.tilt=.85),a()}let Er=document.createElement("button");Er.type="button",Er.id="sbtn",Er.title=__t(118),Er.innerHTML=__t(119),Er.onclick=()=>{z=!z,z&&(E=Dt=!1,Ie.at=0),u._h="",Ne(),a()},document.body.appendChild(Er);function Gg(){r.dist<45!=Ge<45&&(Ge=r.dist,Ce()),Vg(),Wg(),Si()}let as=[],xn=new X;function Wg(){let l=0;if(ln.on){let _=wf().sort((b,T)=>T[1]-b[1]),v=[];for(let[b,T]of _){if(l>=30)break;if(xn.set(w[b].w[0],w[b].w[1],B).project(n),xn.z>1||Math.abs(xn.x)>1||Math.abs(xn.y)>1)continue;let P=(xn.x*.5+.5)*innerWidth,F=(-xn.y*.5+.5)*innerHeight;if(v.some(([W,K])=>Math.abs(W-P)<90&&Math.abs(K-F)<18))continue;v.push([P,F]);let D=as[l]||(as[l]=Object.assign(document.createElement("div"),{className:"slab"}));D.isConnected||document.body.appendChild(D),D.textContent=w[b].n+" +"+Math.round(T)+"\u2032",D.dataset.i=b,D.style.display="block",D.style.transform=`translate(${Math.round(P+8)}px,${Math.round(F-8)}px)`,l++}for(;l<as.length;l++)as[l].style.display="none";return}if(r.dist<30){let _=[];for(let v=0;v<Ft;v++)qt[v]<4||(xn.set(w[v].w[0],w[v].w[1],B).project(n),!(xn.z>1||Math.abs(xn.x)>1.05||Math.abs(xn.y)>1.05)&&_.push([v,(xn.x*.5+.5)*innerWidth,(-xn.y*.5+.5)*innerHeight]));if(_.length<=70)for(let[v,b,T]of _){let P=as[l]||(as[l]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=w[v].n,P.dataset.i=v,P.style.display="block",P.style.transform=`translate(${Math.round(b+8)}px,${Math.round(T-7)}px)`,l++}}for(;l<as.length;l++)as[l].style.display="none"}function cl(l){return xn.set(l[0],l[1],B).project(n),[(xn.x*.5+.5)*innerWidth,(-xn.y*.5+.5)*innerHeight,xn.z]}function Tf(l,d,_,v){let b=null,T=_*_;for(let P of tt){let[F,D,W]=cl(P.p.w);if(W>1)continue;let K=(F-l)**2+(D-d)**2;K<T&&(T=K,b={a:P})}if(b)return b;T=v*v;for(let P=0;P<Ft;P++){if(!qt[P])continue;let[F,D,W]=cl(w[P].w);if(W>1)continue;let K=(F-l)**2+(D-d)**2;K<T&&(T=K,b={s:P})}return b}let Xs=!1;window.__rodHide=()=>{Xs=!0},document.addEventListener("click",l=>{Xs&&!l.target.closest("#mcs, canvas")&&(Xs=!1)},!0),window.__rodTap=(l,d)=>{let _=null,v=1e9;for(let T of as){if(T.style.display==="none")continue;let P=T.getBoundingClientRect();if(l>=P.left-4&&l<=P.right+4&&d>=P.top-4&&d<=P.bottom+4){let F=Math.abs(d-(P.top+P.bottom)/2)*4+(l-P.left);F<v&&(v=F,_=T)}}if(_)return window.__rodPickStation(+_.dataset.i),!0;let b=Tf(l,d,24,18);return b&&(b.a||b.s!=null)&&(Xs=!1),b&&(b.a||b.s!=null)&&(it.st=-1),b&&b.a?(E=!1,Dt=!1,z=!1,ct=b.a.tr||{vtid:b.a.v.tid},Rt=-1,Lt=null,Ce(),Ne(),Ut=0,a(),!0):b&&b.s!=null?(E=!1,Dt=!1,z=!1,Rt=b.s,ct=null,Lt=null,Ce(),Ne(),a(),!0):!1},window.__rodHover=(l,d)=>{let _=Tf(l,d,14,10);if(_&&_.a){let v=_.a,b=v.tr?w[v.tr.pat.stops[v.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${v.c}">\u25A0</span> ${p(v.fam||v.tr&&v.tr.fam||"?")}${__t(120)}${p(v.tr?v.tr.num:v.v.num)}</b><small>${b?__t(101)+p(b):""}${v.real?(v.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(v.dl)} min</b>`:__t(121))+__t(122):__t(123)}</small>`}return _&&_.s!=null?`<b>${p(w[_.s].n)}</b><small>${[...w[_.s].fams].sort(N).join(" \xB7 ")}</small>`:null},window.__rodPickStation=l=>{it.st=-1,Xs=!1,E=Dt=z=!1,ct=null,Lt=null,Rt=l,Ce(),u._h="",Ne(),a()};{let l=m("#rc"),d=()=>{let _=l.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,_-64-10)+"px")};try{new ResizeObserver(d).observe(l)}catch{}addEventListener("resize",d),setTimeout(d,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let l=!1,d=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{d&&!l&&(l=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(_=>{_.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||_.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{on()}catch{}},2500),setInterval(()=>{try{Ie.at=0,on()}catch{}},15*6e4);let ei={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Ta=matchMedia("(prefers-color-scheme: dark)");function hl(){let l=ei.mode==="dark"||ei.mode==="auto"&&Ta.matches;document.documentElement.classList.toggle("dark",l);for(let _=0;_<Ft;_++)Ht.set(l?[.06,.08,.11]:[1,1,1],_*3);J.attributes.fill.needsUpdate=!0,re.uniforms.border.value.set(l?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(l),qs.textContent=ei.mode==="auto"?l?"\u{1F319}":"\u2600\uFE0F":ei.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",qs.title=__t(124)+{auto:__t(125),dark:__t(126),light:"desactivado"}[ei.mode];let d=document.querySelector("meta[name=theme-color]");d&&(d.content=l?"#0d1119":"#eef1f5"),a()}let qs=document.createElement("button");qs.type="button",qs.id="tbtn",qs.onclick=()=>{ei.mode=ei.mode==="auto"?Ta.matches?"light":"dark":ei.mode==="dark"?"light":"dark",ei.mode==="dark"===Ta.matches&&(ei.mode="auto");try{localStorage.setItem("rod_theme",ei.mode)}catch{}hl(),un(qs.title)},document.body.appendChild(qs);{let l=document.createElement("a");l.id="wabtn",l.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",l.target="_blank",l.rel="noopener",l.title=__t(127),l.innerHTML=__t(128),document.body.appendChild(l)}Ta.addEventListener&&Ta.addEventListener("change",hl),hl(),window.__rodTick=jt,window.__rodFrame=Gg,window.__rodResize=()=>{Pt.resolution.set(innerWidth,innerHeight),Ot.resolution.set(innerWidth,innerHeight)},window.__rodResize();let mi={st:-1,f:new Set},Af=l=>{let d=[...w[l].fams].sort(N);return`<div class="sfc">${d.length>1?`<button type="button" data-sf="" class="${mi.f.size?"":"on"}${__t(129)}`:""}${d.map(_=>`<button type="button" data-sf="${p(_)}" class="ln ${mi.f.size&&!mi.f.has(_)?"off":""}${Y.has(_)?"":" hid"}" style="--c:${q[_]}">${p(_)}</button>`).join("")}</div>${d.some(_=>!Y.has(_))?__t(130):""}`},Xg=l=>{let d=(l||"#6b7385").replace("#",""),_=parseInt(d.slice(0,2),16),v=parseInt(d.slice(2,4),16),b=parseInt(d.slice(4,6),16);return(.299*_+.587*v+.114*b)/255>.62?"#1d2330":"#fff"},ki=(l,d)=>{let _=q[d]||"#6b7385";return`<span class="dst" style="background:${_};color:${Xg(_)}" title="${p(d||"")}">${p(l)}</span>`},ul=l=>{let d=w[l]&&w[l].id;return tn.st.includes(d)?"\u{1F3E0} ":We.st.includes(d)?"\u{1F4BC} ":""},zi=l=>l>10?"d-hi":l>5?"d-md":"d-lo",qg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Aa={ref:null,m:new Map};function ou(l){if(Aa.ref!==H.alerts){Aa.ref=H.alerts,Aa.m=new Map;for(let d of H.alerts){if(d.src!=="Rodalies")continue;let _=d.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let v of(d.es||d.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Aa.m.set(v[1],{why:_?_[1].trim().replace(/\s+/g," "):"",txt:d.txt,when:d.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(d.es||d.txt)})}}return Aa.m.get(String(l))||null}let Ca={ref:null,m:new Map};function Cf(l){let d=String(l.tr?l.tr.num:l.v&&l.v.num||"");if(!d)return null;if(Ca.ref!==H.alerts){Ca.ref=H.alerts,Ca.m=new Map;for(let v of H.alerts)if(v.src==="Rodalies"&&qg.test(v.es||v.txt))for(let b of(v.es||v.txt).matchAll(/\b(\d{4,6})\b/g))Ca.m.set(b[1],v)}let _=Ca.m.get(d);return _?{why:"aviso",txt:_.txt}:l.real&&l.stop==="via"&&l.v.still>=300?{why:"via",min:Math.round(l.v.still/60)}:null}let Ra=l=>{try{let d=ct;return d?d.num!=null&&String(d.num)===String(l.num)||l.tid&&(d.tid===l.tid||d.vtid===l.tid):!1}catch{return!1}},Rf=(l,d)=>{let _=A(l,d.min-1,d.min+240).sort((v,b)=>v.est-b.est).slice(0,6);return _.length?`${__t(131)}${_.map(v=>`<li><b>${st(v.est)}</b>${Nn(v.fam)}<span>${ki(v.dest,v.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Mi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Yg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Mi))}catch{}},If=l=>!!l&&Mi.some(d=>d.num===String(l.num)),je=(()=>{try{let l=JSON.parse(localStorage.getItem("rod_alarm")||"null");return l&&Date.now()-l.at<4*36e5?l:null}catch{return null}})(),Tr=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(je))}catch{}},dl=(l,d)=>!!(je&&l&&je.num===String(l.num)&&je.sid===w[l.pat.stops[d]].id);function lu(l,d){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}un(l+" \xB7 "+d),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(_=>_?_.showNotification(l,{body:d,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(l,{body:d})).catch(()=>{})}function Zg(){if(!je||je.done)return;let l=ee();if(!l.live)return;let d=t.days.indexOf(l.ymd),_=(Q[d]||[]).find(D=>String(D.num)===je.num)||(Q[d-1]||[]).find(D=>String(D.num)===je.num);if(!_)return;let v=_.pat.stops.findIndex(D=>w[D].id===je.sid);if(v<0)return;let b=M(_),T=typeof b=="number"?Math.max(0,b/60):0,P=_.day===d-1?1440:0,F=_.t0+_.pat.t[2*v]+T-P;if(F-l.min<-3){je.done=!0,Tr();return}window.__schedAt&&(je.sch==null||Math.abs(je.sch-F)>=.5)&&(je.sch=F,Tr(),window.__schedAt(7701,`${__t(132)}${w[_.pat.stops[v]].n}`,__t(133)+` (${st(F)})`,Date.now()+(F-2-l.min)*6e4)),F-l.min<=2&&(je.done=!0,Tr(),window.__schedOff&&window.__schedOff(7701),lu(`${__t(132)}${w[_.pat.stops[v]].n}`,`${__t(134)}${Math.max(0,Math.round(F-l.min))}${__t(135)}${st(F)}${__t(136)}`))}function cu(l,d){let _=+l.t.slice(0,2)*60+ +l.t.slice(3,5),v=Q[d]||[],b=(F,D)=>F.t0+F.pat.t[2*D+1],T=null,P=11;for(let F of v){let D=F.pat.stops.findIndex(K=>w[K].id===l.sid);if(D<0||D===F.pat.stops.length-1)continue;let W=Math.abs(b(F,D)-_)+(String(F.num)===l.num?-5:0)+(F.fam===l.fam?0:20)+(l.dest&&w[F.pat.stops[F.pat.stops.length-1]].id!==l.dest?3:0);W<P&&(P=W,T=F)}return T}let fl=new Set;function Jg(){if(!Mi.length)return;let l=ee();if(!l.live)return;let d=t.days.indexOf(l.ymd);for(let _ of Mi){let v=cu(_,d);if(!v)continue;let b=v.pat.stops.findIndex(K=>w[K].id===_.sid);if(b<0)continue;let T=v.t0+v.pat.t[2*b+1],P=M(v),F=typeof P=="number"?P/60:0,D=T-l.min;if(D<-2||D>60)continue;let W=l.ymd+_.num+(P==="X"?"X":F>=10?10:F>=5?5:0);fl.has(W)||(P==="X"||F>=5?(fl.add(W),lu(`${__t(137)}${st(T)} ${P==="X"?__t(138):`${__t(139)}${Math.round(F)} min`}`,`${v.fam} ${v.num}${__t(140)}${w[v.pat.stops[b]].n}${P==="X"?"":`${__t(141)}${st(T+F)}`}`)):D<=20&&!fl.has(l.ymd+_.num+"ok")&&H.vp.has(v.tid)&&(fl.add(l.ymd+_.num+"ok"),un(`${__t(137)}${st(T)}${__t(142)}`)))}}setInterval(()=>{try{Zg(),Jg()}catch{}},15e3);let Nn=l=>`<span class="ln" style="--c:${q[l]}">${p(l)}</span>`;{let l=_=>{let v=/^#?([0-9a-f]{6})$/i.exec(_||"");return v?[0,2,4].map(b=>{let T=parseInt(v[1].slice(b,b+2),16)/255;return T<=.03928?T/12.92:Math.pow((T+.055)/1.055,2.4)}).reduce((b,T,P)=>b+T*[.2126,.7152,.0722][P],0):0},d=[...new Set(Object.values(q))].filter(_=>l(_)>.3).map(_=>`.ln[style*="--c:${_}"],[data-f][style*="--c:${_}"].on,[data-f][style*="--c:${_}"]:not(.off){color:#14203a!important}`).join("");if(d){let _=document.createElement("style");_.textContent=d,document.head.appendChild(_)}}function Pf(l,d){return d?l==="X"?__t(144):l>=60?`<span class="st late ${zi(l/60)}${__t(145)}${Math.round(l/60)} min</span>`:__t(146):__t(143)}function hu(){if(!u.classList.contains("peek")||window.__mapHidden||!u.getClientRects().length)return;let l=u.querySelector(".tc");if(!l)return;let d=l.querySelector(".st")||l.querySelector("p"),_=u.getBoundingClientRect().top-u.scrollTop,v=d?d.getBoundingClientRect().bottom-_+3:150;if(d){let b=d.nextElementSibling||d.parentElement!==l&&d.parentElement.nextElementSibling;b&&(v=Math.min(v,b.getBoundingClientRect().top-_-1))}u.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,v)))+"px")}function Ne(){try{Kg()}finally{window.__rodTabSync&&window.__rodTabSync();try{hu()}catch{}}}function Kg(){if(!ct&&Rt<0&&!Dt&&!E&&!z&&!at){Xs=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),_u();return}let l=ee(),d="",_=$()&&l.live,v=(g,C)=>H.alerts.filter(k=>[...k.fams].some(Z=>g.has(Z))||C!=null&&k.stops.has(C)),b=g=>g.length?`<div class="al">${g.slice(0,4).map(C=>`<p>\u26A0\uFE0F ${Pa(C)} ${[...C.fams].sort(N).slice(0,6).map(Nn).join(" ")} ${p(C.txt)} <small>${La(C)}</small></p>`).join("")}${g.length>4?`<small>y ${g.length-4}${__t(147)}`:""}</div>`:"",T=ct&&_?tt.find(g=>g.real&&(ct.vtid?g.v.tid===ct.vtid:g.tr===ct)):null;if(at&&!z&&!E&&!Dt&&!ct&&Rt<0)d=zg(at);else if(z)d=kg();else if(E)d=`${__t(148)}${p(m("#ver").firstChild.textContent)}</small><ul class="chg">${m("#chg").innerHTML||__t(150)}${__t(149)}`;else if(Dt){let g=H.alerts.filter(C=>[...C.fams].some(k=>Y.has(k))||!C.fams.size);d=`${__t(151)}${g.length}${__t(152)}${g.map(C=>`<div class="al"><p>${Pa(C)} ${[...C.fams].sort(N).map(Nn).join(" ")} <small>${La(C)}</small></p><p>${p(C.txt)}</p></div>`).join("")||__t(154)}${__t(153)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(155):`${__t(156)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(T){let g=T.v,C=T.tr,k=Me=>p(w[C.pat.stops[Me]].n),Z=C?C.pat.stops.length:0,ut=Wt.get(g.sid),wt=ut!=null?p(w[ut].n):p(g.sid),dt=C&&g.atStop>=0?k(g.atStop):"",bt=C&&g.next>=0?k(g.next):wt,nt=C&&g.next>0?k(g.next-1):"",le=T.broke||Cf(T),xe=le?`<b class="stopv">\u26A0\uFE0F ${le.why==="aviso"?__t(157):`${__t(158)}${le.min} min`}</b>${C&&nt?`${__t(159)}${nt}${__t(160)}${bt}</b>`:""}`:T.stop==="via"&&C?`${__t(161)}${nt?`${__t(163)}${nt}${__t(160)}${bt}</b>`:`${__t(164)}${bt}</b>`}${__t(162)}${Math.max(1,Math.round(g.still/60))} min`:g.pre&&C?g.prevTr?`${__t(165)}${p(g.prevTr.num)}${__t(166)}${k(0)}</b>${g.prevDl>=1?`${__t(169)}${Math.round(g.prevDl)} min</b>`:""}${__t(167)}${st(g.arrO)}${__t(168)}${st(g.depEst)}</b>${g.preDl>=1?`${__t(170)}${st(g.dep0)})`:""}`:`${__t(171)}${k(0)}${__t(172)}${st(g.dep0+T.dl)}</b>`:(g.st==="STOPPED_AT"||T.stop==="st")&&dt?`${__t(173)}${dt}</b>`:dt&&g.before?`Llegando a <b>${dt}</b>`:dt&&g.next>=0&&g.atStop!==g.next?`${__t(174)}${dt}${__t(166)}${bt}</b>`:nt?`${__t(175)}${nt}${__t(160)}${bt}</b>`:`${__t(176)}${bt}</b>`,Zt=C&&g.next>=0&&!g.pre?st(Fa(C,g,g.next,C.t0+C.pat.t[2*g.next]+T.dl)):"",He=[];if(C){let Me=T.idx>=0?T.idx:0,ce=g.pre?Math.max(T.dl,g.preDl||0):T.dl,yn=Xe=>C.t0+C.pat.t[Xe]+ce;for(let Xe=Me;Xe<Z;Xe++)He.push(`<li class="${ul(C.pat.stops[Xe])?"mine":""}${dl(C,Xe)?" alm":""}"><b>${st(Fa(C,g,Xe,yn(Xe===0?1:2*Xe)))}</b><span title="${k(Xe)}">${ul(C.pat.stops[Xe])}${k(Xe)}</span>${ce>=1?`<em class="dl ${zi(ce)}">${g.pre?"\u2248":""}+${Math.round(ce)}</em>`:""}${Xe>0?`<button type="button" class="abtn" data-alarm="${Xe}" title="${__t(177)}">${dl(C,Xe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}d=`<div class="tc" style="--c:${T.c}"><button class="x" data-cx>\xD7</button><div>${Nn(T.fam)}${__t(178)}${p(C?C.num:g.num)}${__t(179)}${C?`<h3 class="rt"><span class="o" title="${k(0)}">${k(0)}</span><span class="ar">\u2192</span>${ki(w[C.pat.stops[Z-1]].n,C.fam)}</h3>`:""}
        <p>${xe}${Zt?`${__t(180)}${Zt}`:""}${g.plat&&g.st==="STOPPED_AT"&&dt?`${__t(181)}${p(g.plat)}</b>`:""}</p><p>${g.pre&&g.prevTr?g.preDl>=1?`${__t(182)}${Math.round(g.preDl)}${__t(183)}`:__t(184):Pf(H.delays.get(g.tid),H.delays.has(g.tid))}${(()=>{let Me=C&&Ze(C.num);return Me&&Me.n>=2?`${__t(185)}${Me.n}${__t(186)}${Me.late?`${__t(187)} <b>${Me.late} ${__t(188)} ${Me.n} ${__t(189)}</b> ${__t(190)}`:__t(191)} \xB7 ${__t(192)} ${Me.avg<.5?"0":"+"+Math.round(Me.avg)} min</span>`:""})()}${(()=>{let Me=C&&ou(C.num);return Me?`<span class="why" title="${p(Me.txt)}">${Me.why?__t(193)+p(Me.why):__t(194)}</span>`:""})()}</p>
        <small>${g.pre?`${__t(195)}${zs(Math.round(T.age)+" s")}`:g.est?__t(196):`${__t(197)}${zs(Math.round(T.age)+" s")}${T.age>120?__t(198):""}`}</small>
        ${He.length?`${T.dl>=1||g.pre&&g.preDl>=1?`${__t(199)}`:""}<ol class="stops">${He.join("")}</ol>`:""}${b(v(new Set([T.fam])))}
        ${gl(C?C.num:g.num,"",T.fam)}${C?`<div class="rtb two"><button type="button" data-fav>${If(C)?__t(200):__t(201)}</button><button type="button" data-follow>${Lt===C?__t(202):__t(203)}</button></div>`:""}</div>`}else if(ct&&_)d=`${__t(204)}${p(ct.num||ct.vtid||"")}${__t(205)}`;else if(ct){let g=ct,C=g.pat,k=C.stops.length,Z=M(g),ut=typeof Z=="number"?Z/60:0,wt=t.days.indexOf(l.ymd),dt=g.day===wt-1?1440:0,bt=l.min+dt-g.t0-ut,nt=Gs(g,bt),le=ce=>g.t0+C.t[ce]+ut,xe=ce=>p(w[C.stops[ce]].n),Zt=__t(206);nt&&(Zt=nt.moving?`${__t(207)}${xe(nt.next)}${__t(208)}${st(le(2*nt.next))}`:nt.at===k-1?`${__t(209)}${xe(k-1)}</b>`:`${__t(173)}${xe(nt.at)}${__t(210)}${st(le(2*nt.at+1))}`);let He=nt?nt.next:0,Me=[];for(let ce=He;ce<k;ce++)Me.push(`<li class="${ul(C.stops[ce])?"mine":""}${dl(g,ce)?" alm":""}"><b>${st(Fa(g,null,ce,le(2*ce)))}</b><span title="${xe(ce)}">${ul(C.stops[ce])}${xe(ce)}</span>${ut>=1?`<em class="dl ${zi(ut)}">+${Math.round(ut)}</em>`:""}${ce>0?`<button type="button" class="abtn" data-alarm="${ce}" title="${__t(177)}">${dl(g,ce)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);d=`<div class="tc" style="--c:${g.c}"><button class="x" data-cx>\xD7</button><div>${Nn(g.fam)}${__t(178)}${p(g.num)}${__t(211)}${xe(0)}">${xe(0)}</span><span class="ar">\u2192</span>${ki(w[g.pat.stops[k-1]].n,g.fam)}</h3>
        <p>${Zt}</p><p>${Pf(Z,Z!=null)}${(()=>{let ce=Ze(g.num);return ce&&ce.n>=2?`${__t(185)}${ce.n}${__t(186)}${ce.late?`${__t(187)} <b>${ce.late} ${__t(188)} ${ce.n} ${__t(189)}</b> ${__t(190)}`:__t(191)} \xB7 ${__t(192)} ${ce.avg<.5?"0":"+"+Math.round(ce.avg)} min</span>`:""})()}${__t(212)}${st(g.t0+C.t[1])}${__t(213)}${st(g.t0+C.t[2*k-2])}${__t(214)}${ut>=1?__t(199):""}<ol class="stops">${Me.join("")}</ol>${gl(g.num,"",g.fam)}<div class="rtb two"><button type="button" data-fav>${If(g)?__t(200):__t(201)}</button><button type="button" data-follow>${Lt===g?__t(202):__t(203)}</button></div></div>`}else{let g=Rt,C=t.days.indexOf(l.ymd),k=[];mi.st!==g&&(mi.st=g,mi.f.clear());let Z=nt=>(!q[nt]||Y.has(nt))&&(!mi.f.size||mi.f.has(nt));if(C>=0){let nt=(le,xe)=>{for(let Zt of le){if(!Z(Zt.fam))continue;let He=Zt.pat.stops.indexOf(g);if(He<0||He===Zt.pat.stops.length-1)continue;let Me=M(Zt),ce=typeof Me=="number"?Me/60:0,yn=Zt.t0+Zt.pat.t[2*He+1]-xe;yn+ce<l.min-1||yn>l.min+360||k.push({tr:Zt,t:yn,dl:ce,d:Me,on:H.vp.has(Zt.tid),past:l.min>Zt.t0+Zt.pat.t[1]-xe+2})}};nt(Q[C],0),C>0&&nt(Q[C-1],1440)}k.sort((nt,le)=>nt.t+nt.dl-le.t-le.dl);let ut=w[g].id,wt=kn.get(ut),dt=(_||_e()&&l.live)&&H.url;dt&&(!wt||Date.now()-wt.at>3e4)&&!wt?.loading&&(kn.set(ut,{...wt||{},loading:!0,at:wt?wt.at:0}),Ct(H.url.replace(/\/+$/,""),"/departures.json?stationId="+ut).then(nt=>{kn.set(ut,{at:Date.now(),d:nt}),Rt===g&&(u._h="",Ne())}).catch(()=>kn.set(ut,{at:Date.now(),err:1})));let bt=dt&&wt&&wt.d&&Array.isArray(wt.d.trains)&&wt.d.trains.length?wt.d.trains:null;if(bt){let nt=new Map([...H.vp.values()].map(Zt=>[String((ht.get(Zt.tid)||{}).num||Zt.num),Zt])),le=new Map(bs(g).map(Zt=>[String(Zt.num),Zt])),xe=bt.filter(Zt=>Z((Zt.line||{}).id||"")).slice(0,40).map(Zt=>{let He=String(Zt.commercialNumber||Zt.technicalNumber||""),Me=le.get(He),ce=Me?st(Me.est):(Zt.departureDateHourSelectedStation||"").slice(11,16),yn=(Zt.line||{}).id||"",Xe=nt.get(He),$i=Me?Math.round(Me.dl)*60:Xe?H.delays.get(Xe.tid):null,ls=Me&&(Me.gone||!Me.live&&Me.est<l.min-1);return`<li class="go${ls?" old":""}${Ra({num:He,tid:Xe?Xe.tid:""})?" sel":""}" data-gt="${p(He)}|${Xe?p(Xe.tid):""}"><b>${p(ce)}</b>${q[yn]?Nn(yn):`<span class="ln" style="--c:#6b7385">${p(yn||"?")}</span>`}<span>${ki((Zt.destinationStation||{}).name||"",yn)}${Zt.trainObservations?` \xB7 <i>${p(Zt.trainObservations)}</i>`:""}${ls?` <small class="oldt">${Me.gone?__t(215):__t(216)}</small>`:""}</span>${Zt.trainCancelled?__t(217):typeof $i=="number"&&$i>=60?`<em class="dl ${zi($i/60)}">+${Math.round($i/60)}</em>`:""}${Zt.platformSelectedStation?`${__t(218)}${p(Zt.platformSelectedStation)}</i>`:""}${Xe?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");d=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(w[g].n)}</h3>${Af(g)}${gl("",w[g].id,"")}${__t(219)}${xe||__t(221)}</ol>${Rf(g,l)}${b(v(w[g].fams,g))}${__t(220)}`}else d=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(w[g].n)}</h3>${Af(g)}${gl("",w[g].id,"")}
        <small style="margin-top:6px">${_&&H.url?__t(223):""}${__t(222)}${_?__t(224):__t(225)}</small>
        <ol>${k.slice(0,40).map(nt=>`<li class="go${Ra({num:nt.tr.num,tid:nt.tr.tid})?" sel":""}" data-gt="${p(nt.tr.num)}|${p(nt.tr.tid)}"><b>${st(nt.t+nt.dl)}</b>${Nn(nt.tr.fam)}<span>${ki(w[nt.tr.pat.stops[nt.tr.pat.stops.length-1]].n,nt.tr.fam)}</span>${nt.d==="X"?__t(217):nt.dl>=1?`<em class="dl ${zi(nt.dl)}">+${Math.round(nt.dl)}</em>`:""}${_?nt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':nt.past?__t(226):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(227)}</ol>${Rf(g,l)}${b(v(w[g].fams,g))}${__t(220)}`}let P=u.scrollTop;if(u._h!==d&&(u.innerHTML=d,u._h=d,u.scrollTop=P),u.style.display="flex",u.classList.toggle("min",Xs),_u(),innerWidth<=640){let g=u.querySelector(".tc");if(g&&!g.querySelector(".mn")){let C=document.createElement("button");C.type="button",C.className="mn",C.setAttribute("aria-label",__t(228)),C.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",C.onclick=Z=>{Z.stopPropagation(),u.classList.toggle("peek"),hu(),C.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0};let k=g.querySelector(".x");g.insertBefore(C,k?k.nextSibling:g.firstChild)}}else u.classList.remove("peek");let F=m("#rc");if(innerWidth<=640&&!F.classList.contains("min")&&!Ne.done&&(Ne.done=1,m("#rcgrab").click()),innerWidth<=640){let g=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(g+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-g-16)+"px"}else if(innerHeight<=500){let g=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(g+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-g-20+"px"}else u.style.top="",u.style.width=z?"390px":"300px",u.style.maxHeight="";let W=u.querySelector("[data-cx]");W&&(W.onclick=g=>{if(g.stopPropagation(),Ne.done=0,z||E||Dt||at&&!ct&&Rt<0){z=E=Dt=!1,ct||Rt>=0||(at=""),u._h="",Ne(),a();return}if(ct&&it.st>=0){let C=it.st;it.st=-1,ct=null,Lt=null,Rt=C,Ce(),u._h="",Ne(),Ut=0,a();return}it.st=-1,Dt=!1,E=!1,z=!1,ct=null,Rt=-1,Lt=null,Ce(),Ne(),Ut=0,a()}),Nf(u),u.querySelectorAll("[data-alarm]").forEach(g=>g.onclick=C=>{C.stopPropagation();let k=ct&&ct.pat?ct:ht.get(ct&&ct.vtid)||null;if(!k)return;let Z=+g.dataset.alarm,ut=w[k.pat.stops[Z]].id;je&&je.num===String(k.num)&&je.sid===ut?(je=null,window.__schedOff&&window.__schedOff(7701),un(__t(229))):(je={num:String(k.num),sid:ut,at:Date.now()},un(`${__t(230)}${w[k.pat.stops[Z]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Tr(),u._h="",Ne()});{let g=u.querySelector("[data-fav]");g&&(g.onclick=C=>{C.stopPropagation();let k=ct&&ct.pat?ct:ht.get(ct&&ct.vtid)||null;if(!k)return;let Z=Mi.findIndex(ut=>ut.num===String(k.num));if(Z>=0)Mi.splice(Z,1),un(__t(231));else{let ut=[...tn.st,...We.st,...Nt.st],wt=k.pat.stops.find(dt=>ut.includes(w[dt].id))??k.pat.stops[0];Mi.push({num:String(k.num),fam:k.fam,sid:w[wt].id,dest:w[k.pat.stops[k.pat.stops.length-1]].id,t:st(k.t0+k.pat.t[2*k.pat.stops.indexOf(wt)+1])}),un(`${__t(232)}${k.fam}${__t(233)}${Mi[Mi.length-1].t}${__t(140)}${w[wt].n}${__t(234)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Yg(),u._h="",Ne(),Ve(!0)})}{let g=u.querySelector("[data-share]");g&&(g.onclick=()=>{let C=at,k=tt.filter(dt=>(dt.fam||dt.tr&&dt.tr.fam)===C),Z=k.filter(dt=>dt.dl>=5).sort((dt,bt)=>bt.dl-dt.dl),ut=H.alerts.filter(dt=>dt.fams.has(C)),wt=`${C}${__t(235)}${st(ee().min)}: ${k.length}${__t(236)}${Z.length}${__t(237)}${Z.length?" ("+Z.slice(0,4).map(dt=>`${dt.tr?dt.tr.num:dt.v.num} +${Math.round(dt.dl)}`).join(", ")+")":""}.${ut.length?__t(238)+ut[0].txt:__t(239)}`;navigator.share?navigator.share({text:wt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(wt),un(__t(240)+wt.slice(0,60)+"\u2026"))})}{let g=u.querySelector("[data-cols]");g&&(g.onclick=()=>{ln.on=!ln.on,Hg(),u._h="",Ne()})}u.querySelectorAll("[data-gs]").forEach(g=>g.onclick=()=>{let C=+g.dataset.gs;z=!1,window.__rodPickStation(C),Object.assign(s,{tx:w[C].w[0],ty:w[C].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(g=>g.onclick=C=>{C.stopPropagation();let k=g.dataset.sf;k?mi.f.has(k)?mi.f.delete(k):mi.f.add(k):mi.f.clear(),u._h="",Ne()}),u.querySelectorAll("[data-gt]").forEach(g=>g.onclick=()=>{it.st=Rt;let[C,k]=g.dataset.gt.split("|"),Z=ht.get(k);Sl({num:C,tid:H.vp.has(k)?k:"",tr:Z||null})}),u.querySelectorAll("[data-sethome]").forEach(g=>g.onclick=()=>yu(Rt,g.dataset.sethome));let K=u.querySelector("[data-follow]");K&&(K.onclick=()=>{Lt=Lt===ct?null:ct,Lt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,m("#rc").classList.contains("min")||m("#rcgrab").click())):u.classList.remove("peek"),u._h="",Ne(),a()})}window.__rodCard=Ne;try{let l=localStorage.getItem("rod_inf");(l==="mini"||l==null)&&m("#inf").classList.add("mini")}catch{}m("#inft").onclick=()=>{let l=m("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",l?"mini":"")}catch{}(ct||Rt>=0||Dt||E)&&(u._h="",Ne())},m("#ver").onclick=()=>{E=!0,z=!1,Dt=!1,u._h="",Ne()};let pl={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},jg=["vacio","lleno","petado",__t(241),"calor","abordo"],Qg=["gente","retraso","cancel","ascensor","via"],t0={vacio:__t(242),lleno:__t(243),petado:__t(244),parado:__t(245),calor:__t(246),abordo:__t(247),gente:__t(248),retraso:__t(249),cancel:__t(250),ascensor:__t(251),via:__t(252)},ml=l=>(H.tipos||t0)[l]||l,uu=(l,d)=>(H.rep||[]).filter(_=>l&&_.num===String(l)&&!_.sid||d&&_.sid===String(d)&&!_.num||l&&d&&_.num===String(l)&&_.sid===String(d)),Lf=l=>{let d=Math.round((Date.now()+(H.repSkew||0)-l.at)/6e4);return d<1?__t(253):zs(d+" min")},Ia=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function gl(l,d,_){if(!H.url||!H.repOk)return"";let v=uu(l,d),b=l?jg:Qg;return`${__t(254)}${v.length?"":__t(256)}</small>${v.map(T=>`<p><span>${pl[T.kind]||"\u2022"} <b>${p(ml(T.kind))}</b> <small>${T.up>1?T.up+__t(257):""}${Lf(T)}</small></span>${Ia.has(T.id)?"<small>\u2713</small>":`<button type="button" data-rv="${T.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${T.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${l?__t(258):__t(259)}</summary><div class="ckb">${b.map(T=>`<button type="button" data-rk="${T}" data-rn="${p(l||"")}" data-rs="${p(d||"")}" data-rl="${p(_||"")}">${pl[T]} ${p(ml(T))}</button>`).join("")}${__t(255)}`}async function Df(l,d){try{let v=await(await fetch(H.url.replace(/\/+$/,"")+d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();if(!v.ok){un(v.err||__t(260));return}if(v.id){Ia.add(v.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ia].slice(-300)))}catch{}}un(d==="/vote"?__t(261):v.n>1?`${__t(262)}${v.n}${__t(263)}`:__t(264));let b=await Ct(H.url.replace(/\/+$/,""),"/reports.json");b&&b.items&&(H.rep=b.items),u._h="",Ne(),Ve(!0)}catch{un(__t(265))}}function Nf(l){l.querySelectorAll("[data-rk]").forEach(d=>d.onclick=_=>{_.stopPropagation(),d.disabled=!0,Df({kind:d.dataset.rk,num:d.dataset.rn,sid:d.dataset.rs,line:d.dataset.rl},"/report")}),l.querySelectorAll("[data-rv]").forEach(d=>d.onclick=_=>{_.stopPropagation();let[v,b]=d.dataset.rv.split(":");Ia.add(+v);try{localStorage.setItem("rod_votes",JSON.stringify([...Ia].slice(-300)))}catch{}Df({id:+v,v:+b},"/vote")})}let Uf=0;function un(l){let d=m("#toast");d||(d=document.createElement("div"),d.id="toast",document.body.appendChild(d)),d.textContent=l,d.className="on",clearTimeout(Uf),Uf=setTimeout(()=>{d.className=""},2600)}function Pa(l){return l.src?`<b class="asrc ${l.src==="Adif"?"adif":""}">${l.src==="Adif"?__t(266):p(l.src)}</b>`:""}function La(l){if(!l.when)return"";let[d,_]=l.when.split("T"),v=xt(new Date),b=v.ymd.slice(0,4)+"-"+v.ymd.slice(4,6)+"-"+v.ymd.slice(6,8);if(d===b&&_){let T=Math.round(v.min-(+_.slice(0,2)*60+ +_.slice(3,5)));return T<1?__t(253):T<60?zs(T+" min"):`${__t(267)}${_.slice(0,5)}`}return`${d.slice(8,10)}/${d.slice(5,7)}${_?" "+_.slice(0,5):""}`}function du(){let l=m("#alr");if(!l)return;let d=H.alerts.filter(_=>[..._.fams].some(v=>Y.has(v))).length;l.hidden=!d,l.textContent=`\u26A0\uFE0F ${d}${d===1?__t(268):__t(269)}`}{let l=m("#alrslot");l&&l.appendChild(m("#alr"))}m("#alr").onclick=()=>{E=!1,z=!1,Dt=!0,Ne()},m("#wcopy").onclick=async()=>{let l=m("#wcode").textContent;try{await navigator.clipboard.writeText(l),m("#wcopy").textContent=__t(270)}catch{let _=document.createRange();_.selectNodeContents(m("#wcode"));let v=getSelection();v.removeAllRanges(),v.addRange(_),m("#wcopy").textContent=__t(271)}setTimeout(()=>m("#wcopy").textContent=__t(272),2500)};let e0=Wt.get("71801");function n0(l,d){let _=w[l].id,v=kn.get(_);!(ae()&&H.url)||v&&(v.loading||Date.now()-v.at<3e4)||(kn.set(_,{...v||{},loading:!0,at:v?v.at:0}),Ct(H.url.replace(/\/+$/,""),"/departures.json?stationId="+_).then(b=>{kn.set(_,{at:Date.now(),d:b}),d&&d()}).catch(()=>kn.set(_,{at:Date.now(),err:1})))}let Ff=l=>+l.slice(0,2)*60+ +l.slice(3,5),Da={k:-2,m:null};function Na(l){let d=t.days.indexOf(ee().ymd);if(Da.k!==d){Da.k=d,Da.m=new Map;for(let _ of Q[d]||[])Da.m.set(String(_.num),_)}return Da.m.get(String(l))||null}let os={at:0,m:new Map},fu=l=>$()?(Ua(""),[...l].filter(d=>{let _=os.m.get(d);return _&&_[0]>=2&&_[1]===0}).sort(N)):[];function Ua(l){if(Date.now()-os.at>6e4){os.at=Date.now(),os.m=new Map;let _=ee(),v=t.days.indexOf(_.ymd);if(v>=0)for(let b of Q[v]){let T=_.min-b.t0;if(T<b.pat.t[1]+3||T>b.pat.t[b.pat.t.length-2]-3)continue;let P=os.m.get(b.fam)||[0,0];P[0]++,H.vp.has(b.tid)&&P[1]++,os.m.set(b.fam,P)}}let d=os.m.get(l);return d&&d[0]>=3?d[1]/d[0]:1}function Fa(l,d,_,v){let b=w[l.pat.stops[_]].id;if([...tn.st,...We.st].includes(b)){let T=bs(l.pat.stops[_]).find(P=>String(P.num)===String(l.num));if(T&&!T.gone)return T.est}return pu(l,d,_,0,v)}function Of(l,d){if(!l||!d||d.pre||d.dObs==null||d.err==null||d.err>.6)return null;let _=Date.now()/1e3-d.ts;if(_>150||_<-30||(d.still||0)>=90)return null;let v=Jt(l.pat).stopD,b=l.pat.t,T,P,F=v.reduce((D,W,K)=>Math.abs(W-d.dObs)<Math.abs(v[D]-d.dObs)?K:D,0);if(Math.abs(v[F]-d.dObs)<.16||d.atStop===F)T=b[2*F+1]??b[2*F],P=F;else{let D=v.findIndex(K=>K>d.dObs);if(D<=0)return null;let W=Math.min(1,Math.max(0,(d.dObs-v[D-1])/(v[D]-v[D-1]||1)));T=b[2*D-1]+W*(b[2*D]-b[2*D-1]),P=D-1}return{t:xt(new Date).min-_/60,tpos:T,j0:P,sd:v}}function pu(l,d,_,v,b){let T=Of(l,d);if(!T||_<=T.j0&&!(_===T.j0&&v===1))return b;let P=l.pat.t,F=T.t+(P[2*_+v]??P[2*_])-T.tpos;if(F-T.t>45)return b;let D=(b%1440+1440)%1440,W=((F-D+720)%1440+1440)%1440-720;return W>=-3&&W<=5?b+W:b}function lb(l,d,_,v){let b=Of(l,d);if(!b)return null;let T=pu(l,d,_,1,b.t+l.pat.t[2*_+1]-b.tpos);return T-v.min>30||T<v.min-1?null:T}function bs(l,d){let _=ee(),v=($()||_e())&&_.live&&!d,b=kn.get(w[l].id),T=[],P=new Map([...H.vp.values()].map(D=>[String((ht.get(D.tid)||{}).num||D.num),D]));if(v&&b&&b.d&&Array.isArray(b.d.trains)&&b.d.trains.length)for(let D of b.d.trains){let W=(D.departureDateHourSelectedStation||"").slice(11,16);if(!W)continue;let K=String(D.commercialNumber||D.technicalNumber||""),g=P.get(K),C=g?H.delays.get(g.tid):null,k=Math.max(typeof C=="number"?Math.max(0,C/60):0,g&&g.pre&&g.preDl||0),Z=Ff(W);Z<_.min-720&&(Z+=1440);let ut=+(D.departureDateHourSelectedStation||"").slice(17,19)||0,wt=Z+ut/60,dt=g&&ht.get(g.tid)||Na(K),bt=dt?dt.pat.stops.indexOf(l):-1,nt=bt>=0?(dt.t0+dt.pat.t[2*bt+1])%1440:null;if(nt!=null){for(;nt<wt-720;)nt+=1440;for(;nt>wt+720;)nt-=1440;Math.abs(wt-nt)>120&&(nt=null)}let le,xe;nt==null?(le=ut||!k?wt:wt+k,xe=ut?0:k):ut||Math.abs(wt-nt)>=1?(le=wt,xe=Math.max(0,wt-nt)):(le=nt+k,xe=k);let Zt=!1;if(dt&&!g&&bt>0&&!ut){let He=t.days.indexOf(_.ymd),Me=dt.day===He-1?1440:dt.day===He+1?-1440:0,ce=dt.t0+dt.pat.t[1]-Me;if(_.min<ce){let yn=ce+(dt.pat.t[2*bt+1]-dt.pat.t[1]);yn>le+1&&(le=yn,Zt=!0,nt!=null&&(xe=Math.max(0,le-nt)))}}if(nt!=null&&(Z=Math.round(nt)),g&&dt&&bt>=0){let He=pu(dt,g,bt,1,le);He!==le&&(le=Math.max(He,_.min),nt!=null&&(xe=Math.max(0,le-nt)))}T.push({dubious:Zt,rodLive:!!ut,sm:Z,est:le,dl:xe,fam:(D.line||{}).id||"",dest:(D.destinationStation||{}).name||"",destId:(D.destinationStation||{}).id||"",plat:D.platformSelectedStation||"",cancel:!!D.trainCancelled,obs:D.trainObservations||"",live:!!g,num:K,tid:g?g.tid:"",tr:g&&ht.get(g.tid)||Na(K),src:"oficial"})}else{let D=t.days.indexOf(_.ymd);if(D<0)return T;let W=(K,g)=>{for(let C of K){let k=C.pat.stops.indexOf(l);if(k<0||k===C.pat.stops.length-1)continue;let Z=M(C),ut=typeof Z=="number"?Math.max(0,Z/60):0,wt=C.t0+C.pat.t[2*k+1]-g;if(wt+ut<_.min-1||wt>_.min+360)continue;let dt=C.pat.stops[C.pat.stops.length-1];T.push({sm:wt,est:wt+ut,dl:ut,fam:C.fam,dest:w[dt].n,destId:w[dt].id,plat:"",cancel:Z==="X",obs:"",live:H.vp.has(C.tid),num:C.num,tid:C.tid,tr:C,src:"horario"})}};W(Q[D],0),D>0&&W(Q[D-1],1440),D+1<t.days.length&&_.min>1080&&W(Q[D+1],-1440)}if(v){let D=new Set(T.map(g=>g.num)),W=t.days.indexOf(_.ymd),K=(g,C)=>{for(let k of g||[]){if(D.has(String(k.num)))continue;let Z=k.pat.stops.indexOf(l);if(Z<0||Z===k.pat.stops.length-1)continue;let ut=k.t0+k.pat.t[2*Z+1]-C;if(ut<_.min-45||ut>_.min+1||!H.vp.get(k.tid))continue;let dt=H.delays.get(k.tid),bt=typeof dt=="number"?Math.max(0,dt/60):0,nt=k.pat.stops[k.pat.stops.length-1];T.push({sm:ut,est:ut+bt,dl:bt,fam:k.fam,dest:w[nt].n,destId:w[nt].id,plat:"",cancel:!1,obs:"",live:!0,num:k.num,tid:k.tid,tr:k,src:"horario"})}};W>=0&&(K(Q[W],0),W>0&&K(Q[W-1],1440));for(let g of T){let C=g.tid&&H.vp.get(g.tid),k=g.tr?g.tr.pat.stops.indexOf(l):-1;g.passed=!!(C&&k>=0&&!C.pre&&C.next!=null&&C.next>=0&&C.next>k&&C.atStop!==k),!g.passed&&g.live&&g.est<_.min&&(g.est=_.min,g.late=!0),g.passed&&(g.gone=!0)}}let F=T.filter(D=>D.gone?_.min-D.est<20:D.est>=_.min-.5).sort((D,W)=>D.est-W.est);{let D=F.filter(W=>W.gone);if(D.length>2){let W=new Set(D.slice(0,D.length-2));F=F.filter(K=>!W.has(K))}}if(!F.filter(D=>!D.gone).length&&T.length&&T[0].src==="oficial"&&!d)return bs(l,!0);for(let D of F){let W=D.num&&ou(D.num);W&&W.cx&&(D.cancel=!0,D.cxWhy=W.txt)}if($()&&_.live){let D=t.days.indexOf(_.ymd);for(let W of F){if(W.live||W.cancel||!W.tr)continue;let K=W.tr.day===D-1?1440:W.tr.day===D+1?-1440:0,g=W.tr.t0+W.tr.pat.t[1]-K+(W.dl||0);W.noPos=_.min>g+3&&!W.rodLive,W.ghost=W.noPos&&Ua(W.fam)>=.7}}if(d||(F=F.concat(A(l,_.min-.5,_.min+360)).sort((D,W)=>D.est-W.est)),!d&&F.some(D=>D.src==="oficial")){let D=T.filter(g=>g.src==="oficial"),W=Math.max(...D.map(g=>g.sm)),K=new Set(D.map(g=>String(g.num)));F=F.concat(bs(l,!0).filter(g=>!g.gone&&g.sm<=W&&g.est>=_.min-.5&&!K.has(String(g.num))).map(g=>Object.assign(g,{unconf:!0}))).sort((g,C)=>g.est-C.est)}if(F.some(D=>D.src==="oficial")){let D=Math.max(...F.map(K=>K.sm)),W=new Set(F.map(K=>K.num));F=F.concat(bs(l,!0).filter(K=>K.sm>D&&!W.has(String(K.num))))}return F}let Bf=(l,d,_,v)=>{let b={key:l,ico:d,name:_,st:[],i:0,walk:10,open:!1};try{let T=JSON.parse(localStorage.getItem("rod_"+l)||"null");T&&Object.assign(b,T)}catch{}return!b.st.length&&v&&(b.st=v),b},tn=Bf("home","\u{1F3E0}",__t(273),null),We=Bf("work","\u{1F4BC}",__t(274),null),Nt={key:"near",ico:"\u{1F4CD}",name:__t(275),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Oa=[Nt,tn,We];try{Nt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}tn.open=!1,We.open=!1;function kf(l,d){let _=St(l,d),v=St(l,d+.009);return 1/Math.hypot(v[0]-_[0],v[1]-_[1])}function mu(l){if(!navigator.geolocation){Nt.err=__t(276),Ve(!0);return}navigator.geolocation.getCurrentPosition(d=>{let{longitude:_,latitude:v}=d.coords,b=St(_,v),T=kf(_,v),P=w.map((K,g)=>[g,Math.hypot(K.w[0]-b[0],K.w[1]-b[1])*T]).filter(([K])=>w[K].fams.size).sort((K,g)=>K[1]-g[1]),F=P.filter(([,K],g)=>g===0||K<Math.max(2.5,P[0][1]*1.6)).slice(0,3),D=Nt.st[0]!==w[F[0][0]].id;Nt.w=b,Nt.k=T,Nt.acc=d.coords.accuracy!=null?d.coords.accuracy:999,Nt.st=F.map(([K])=>w[K].id),Nt.dist=Object.fromEntries(F.map(([K,g])=>[w[K].id,g])),Nt.fix=Date.now(),Nt.err="",D&&(Nt.i=0);let W=[tn,We].find(K=>K.st.includes(Nt.st[0])&&Nt.dist[Nt.st[0]]<1.5);Ve(!0)},d=>{Nt.err=d.code===1?__t(277):__t(278),Ve(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let zf=l=>Math.max(1,Math.round(l*1.3/.08));setTimeout(()=>mu(!0),400);let we={fixes:[],tid:"",no:new Map,shown:""};function i0(){let l=we.fixes;if(l.length<2)return;let d=l[l.length-1],_=l.slice().reverse().find(C=>d.t-C.t>=8e3&&d.t-C.t<=9e4);if(!_)return;let v=Math.hypot(d.w[0]-_.w[0],d.w[1]-_.w[1])*d.k,b=d.spd!=null&&d.spd>0?d.spd*3.6:v/((d.t-_.t)/36e5);if(d.acc!=null&&d.acc>100||we.manual&&Date.now()<we.manual)return;if(we.tid){if(b<22)return;let C=tt.find(k=>k.tr&&String(k.tr.num)===we.tid)||Ms(ee()).out.find(k=>k.tr&&String(k.tr.num)===we.tid);if(C){if(Math.hypot(C.p.w[0]-d.w[0],C.p.w[1]-d.w[1])*d.k<=5){we.far=0;return}if(we.far||(we.far=d.t),d.t-we.far<12e4)return}we.far=0}if(b<22||b>200)return;let T=[d.w[0]-_.w[0],d.w[1]-_.w[1]],P=null,F=2.5,D=tt.filter(C=>C.real),W=Ms(ee()).out.filter(C=>C.tr&&!D.some(k=>k.tr&&String(k.tr.num)===String(C.tr.num)));for(let C of[...D,...W]){if(!C.tr)continue;let k=C.real?2.5:3.5,Z=Math.hypot(C.p.w[0]-d.w[0],C.p.w[1]-d.w[1])*d.k;if(Z>Math.min(F,k)||P&&P.real&&!C.real)continue;let ut=C.real?C.v.next:C.p.next;if(ut==null||ut<0)continue;let wt=w[C.tr.pat.stops[ut]].w,dt=[wt[0]-C.p.w[0],wt[1]-C.p.w[1]];if(dt[0]*T[0]+dt[1]*T[1]<=0)continue;let bt=String(C.tr.num);(we.no.get(bt)||0)>Date.now()||(F=Z,P=C)}if(!P){we.cand=null;return}let K=String(P.tr.num);if(we.tid===K)return;if(we.tid){if(d.acc!=null&&d.acc>50)return;if(!we.cand||we.cand.k!==K){we.cand={k:K,t:d.t};return}if(d.t-we.cand.t<2e4)return}we.cand=null,we.tid=K,E=Dt=z=!1,Rt=-1,ct=P.tr,Lt=P.tr,Object.assign(s,{tx:P.p.w[0],ty:P.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());{let C=P.tr.pat.stops,k=P.real?P.v.next:P.p.next,Z=[...tn.st,...We.st],ut=C.findIndex((wt,dt)=>dt>=k&&Z.includes(w[wt].id));ut>0&&!(je&&je.num===K)&&(je={num:K,sid:w[C[ut]].id,at:Date.now()},Tr())}Ce(),u._h="",Ne(),Ut=0,a();let g=m("#onb");g||(g=document.createElement("div"),g.id="onb",document.body.appendChild(g)),g.innerHTML=`${__t(279)}${p(P.tr.fam)} ${p(P.tr.num)}${__t(280)}${p(w[P.tr.pat.stops[P.tr.pat.stops.length-1]].n)}${__t(281)}${je&&je.num===K?`${__t(283)}${p(w[Wt.get(je.sid)].n)}`:""}${__t(282)}`,g.className="on",g.querySelector("[data-onb-no]").onclick=()=>{we.no.set(K,Date.now()+20*6e4),we.tid="",Lt=null,ct=null,u._h="",Ne(),g.className=""},g.querySelector("[data-onb-x]").onclick=()=>{g.className=""},setTimeout(()=>{g.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let l=null,d=()=>{l==null&&(l=navigator.geolocation.watchPosition(v=>{let{longitude:b,latitude:T}=v.coords,P={t:v.timestamp||Date.now(),w:St(b,T),k:kf(b,T),spd:v.coords.speed,acc:v.coords.accuracy};we.fixes.push(P),we.fixes=we.fixes.filter(F=>P.t-F.t<12e4);try{ee().live&&i0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},_=()=>{l!=null&&(navigator.geolocation.clearWatch(l),l=null)};setTimeout(d,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?_():(we.fixes=[],d())})}setInterval(()=>{!document.hidden&&(Date.now()-Nt.fix>11e4||Oa.some(l=>l.goAt))&&mu(!1)},3e4);let bi=l=>{try{localStorage.setItem("rod_"+l.key,JSON.stringify({st:l.st,i:l.i,walk:l.walk,open:l.open,hide:l.hide||"",goAt:l.goAt||0,platAt:l.platAt||0}))}catch{}},gi=l=>l.st.length?Wt.get(l.st[l.i]||l.st[0]):null;function $f(l,d,_,v){if(v&&d.bus)return d.bstops.slice(1).some(P=>v.has(P))?"to":"out";if(v&&d.tr){let P=d.tr.pat.stops,F=P.indexOf(l);if(F>=0&&P.slice(F+1).some(D=>v.has(D)))return"to"}if(v&&d.tr)return"out";let b=Wt.get(d.destId)??w.findIndex(P=>P.n===d.dest);if(b<0||b==null||_==null)return"otros";let T=P=>Math.hypot(w[P].w[0]-w[_].w[0],w[P].w[1]-w[_].w[1]);return T(b)<T(l)?"to":"out"}let Ys=l=>l<1?__t(253):l<60?Math.floor(l)+" min":Math.floor(l/60)+" h "+String(Math.floor(l%60)).padStart(2,"0"),Vf=0,s0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Hf=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Gf=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Ba=l=>{let d=l.es||l.txt;return Hf.test(d)||Hf.test(l.txt)?3:Gf.test(d)||Gf.test(l.txt)||l.lvl>=2?2:1};function r0(l,d,_){let v=gi(l);if(l===Nt){if(we.tid)return"";if(v==null)return`${__t(284)}${Nt.err?p(Nt.err)+__t(285):__t(286)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([tn,We].find(kt=>kt.st.includes(Nt.st[0])&&Nt.dist[Nt.st[0]]<1.5)||Date.now()-Nt.fix>10*6e4)return"";l.walk=zf(Nt.dist[l.st[l.i]]||0)}if(v==null){let lt=Nt.st.length?Wt.get(Nt.st[0]):null,kt=l===We?tn:We,te=lt!=null&&!kt.st.includes(Nt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${l.ico}</span><span class="htit"><b>${l.name}</b><small>${te?`${__t(287)}${p(w[lt].n)}</b>`:__t(288)}</small></span>${te?`<button type="button" class="hpick" data-hnear="${l.key}${__t(289)}`:""}<button type="button" class="hpick alt" data-hset="${l.key}">${te?__t(290):__t(291)}</button></div></div>`}n0(v,()=>Ve(!0));let b=l===Nt?null:l===tn?We:tn,T=b?gi(b):null,P=T!=null&&T!==v?T:e0,F=T!=null&&T!==v?b===We?__t(292):"casa":"Barcelona",D=w[v].fams,W=new Set([...D].filter(lt=>Y.has(lt))),K=W.size<D.size,g=!1;W.size||(W=new Set(D),K=!1,g=!0);let C=Nt.w?Math.hypot(w[v].w[0]-Nt.w[0],w[v].w[1]-Nt.w[1])*Nt.k:null,k=C!=null&&Date.now()-Nt.fix<10*6e4;l.platAt&&Date.now()-l.platAt>45*6e4&&(l.platAt=0,bi(l));let Z=l!==Nt&&!!l.platAt,ut=l===Nt||k&&C>3&&!l.goAt&&!Z,wt=Z||l!==Nt&&k&&C<.08&&Nt.acc<=40&&!(l===tn&&Nt.homeW&&Math.hypot(Nt.homeW[0]-Nt.w[0],Nt.homeW[1]-Nt.w[1])*Nt.k<.05),dt=l.goAt?(Date.now()-l.goAt)/6e4:null;dt!=null&&(dt>60||wt)&&(l.goAt=0,bi(l));let bt=!wt&&l!==Nt&&!!l.goAt,nt=bt?k&&C<=3?zf(C):Math.max(0,l.walk-dt):0,le=bs(v),xe=le.filter(lt=>!q[lt.fam]||Y.has(lt.fam)||g),Zt=ut||wt?0:bt?nt:l.walk,He=H.alerts.filter(lt=>[...lt.fams].some(kt=>W.has(kt))||lt.stops&&lt.stops.has(v)),Me=He.some(lt=>s0.test(lt.es||lt.txt)),ce={to:[],out:[],otros:[],all:xe},yn=F!=="Barcelona"?new Set(b.st.map(lt=>Wt.get(lt)).filter(lt=>lt!=null)):null;xe.forEach(lt=>ce[$f(v,lt,P,yn)].push(lt));let Xe="";if(yn&&!ce.to.length&&xe.length<le.length){let lt=le.filter(kt=>!xe.includes(kt)&&$f(v,kt,P,yn)==="to");lt.length&&(ce.to=lt,Xe=[...new Set(lt.map(kt=>kt.fam))].sort(N).join(", "))}let $i=lt=>{if(lt==="all")return __t(293);let kt=ge=>(ge.find(En=>En.fam)||{}).fam;if(lt==="to")return __t(294)+ki(F==="Barcelona"?"Barcelona":w[P].n,kt(ce.to)||[...W][0])+(()=>{let ge=K&&!Xe?[...W].filter(En=>ce.to.some(cs=>cs.fam===En)).sort(N):[];return ge.length?`<span class="hwf" title="${__t(295)}">${ge.map(Nn).join("")}</span>`:""})();let te=[];for(let ge of ce[lt])te.some(En=>En[0]===ge.dest)||te.push([ge.dest,ge.fam]);return te.length?__t(294)+te.slice(0,2).map(([ge,En])=>ki(ge,En)).join(" "):__t(296)},ls=za.get(l.key);ls&&!le.some(lt=>String(lt.num)===ls&&!lt.gone)&&yl(l.key,null);let Rr=lt=>{let kt=ls&&ce[lt].find(an=>String(an.num)===ls&&!an.gone);if(kt&&kt.cancel)return{cls:"v-no",pin:1,x:kt,big:__t(297),small:`${st(kt.est)} \xB7 ${kt.fam}${__t(298)}${kt.dest}${kt.num?" \xB7 "+__t(299)+kt.num:""}`,warn:""};let te=kt||ce[lt].find(an=>!an.cancel&&!an.gone&&an.est-d.min>=Zt);if(!te){let an=ce[lt].find(js=>!js.cancel);return an&&!ut?{cls:"v-no",big:__t(300),small:`${__t(301)}${st(an.est)}${__t(302)}${Ys(an.est-d.min)}${__t(303)}`}:{cls:"v-no",big:__t(304),small:__t(305)}}let ge=te.est-d.min-Zt,En=ut||wt?"v-info":bt?ge<1.5?"v-warn":"v-ok":ge<1.5?"v-bad":ge<5?"v-warn":"v-ok",cs=te.ghost?ce[lt].find(an=>!an.cancel&&!an.ghost&&an.live&&an.est>te.est):null;if(kt&&ge<0&&!ut&&!wt){let an=ce[lt].find(js=>!js.cancel&&!js.gone&&!js.ghost&&js!==te&&js.est-d.min>=Zt);return{cls:"v-no",pin:1,miss:1,nxt:an,x:te,ghost:!!te.ghost,big:__t(306),small:`${st(te.est)} \xB7 ${te.fam}${__t(298)}${te.dest}${te.plat?__t(307)+te.plat:""}${te.num?" \xB7 "+__t(299)+te.num:""}`,warn:an?`\u27A1\uFE0F ${__t(308)}: ${an.est-d.min-Zt<1?__t(309):__t(310)+" "+Ys(an.est-d.min-Zt)} \xB7 ${st(an.est)}${an.arr!=null?" \u2192 "+st(an.arr):""}${an.plat?__t(307)+an.plat:""}${an.num?" \xB7 "+__t(299)+an.num:""}`:""}}return{pin:kt?1:0,cls:En,ghost:!!te.ghost,big:ut||wt?ge<1?__t(311):__t(312)+Ys(ge):bt?ge<1.5?__t(313):__t(314)+Ys(ge)+__t(315):ge<1.5?__t(316):__t(317)+Ys(ge),warn:te.unconf?"\u26A0\uFE0F "+__t(318):kt&&!te.live&&te.rodLive&&!te.ghost?"\u{1F4E1} "+__t(319):!te.ghost&&te.noPos&&kt?"\u{1F4E1} "+__t(320):!te.ghost&&te.late&&kt?__t(321):te.ghost?`${__t(322)}${cs?`${__t(323)}${st(cs.est)}`:""}`:Me?__t(324):"",small:`${te.bus?__t(325):""}${st(te.est)} \xB7 ${te.fam}${__t(298)}${te.dest}${te.plat?__t(307)+te.plat:""}${te.dl>=1?` \xB7 +${Math.round(te.dl)} min`:""}${te.arr!=null?`${__t(326)}${st(te.arr)}`:""}${te.num?" \xB7 "+__t(299)+te.num:""}`,x:te}},y0=yn||new Set([P]),S0=lt=>{let kt=lt.tr;if(!kt)return null;let te=kt.pat.stops,ge=te.indexOf(v);if(ge<0)return null;let En=-1;for(let cs=ge+1;cs<te.length;cs++)if(y0.has(te[cs])){En=cs;break}return En<0?null:lt.est+(kt.pat.t[2*En]-kt.pat.t[2*ge+1])};ce.to.forEach(lt=>{lt.arr=S0(lt)});let Tl=ce.out.length?"out":"otros",Vn=Rr("to"),Wa=Rr(Tl);if(!ut&&l!==Nt&&Vn.x&&l===xl()&&h0(l,Vn.x,w[v].n,Zt),wt||l===Nt&&Nt.acc<=40&&(Nt.dist[l.st[l.i]]||9)<.08){for(let lt of[Vn.x,Wa.x].concat(l===Nt?[Rr("all").x]:[]))if(lt&&!lt.cancel&&lt.est-d.min<=2&&lt.est-d.min>-.5){let kt="w"+lt.num+"|"+Math.round(lt.sm);vl.has(kt)||(vl.add(kt),lu(`${__t(327)}${lt.fam}${__t(298)}${lt.dest}`,`${Math.round(lt.est-d.min)<=1?__t(328):__t(134)+Math.round(lt.est-d.min)+" min"}${__t(298)}${w[v].n}${lt.plat?__t(307)+lt.plat:""}`))}}let ip=$()&&d.live,sp=W.size===1,M0=lt=>{let kt=lt.est-d.min;return ut?lt.cancel?"cx":kt<0?"u-miss":"u-info":lt.cancel?"cx":kt<Zt?"u-miss":kt<Zt+1.5?"u-now":kt<Zt+5?"u-soon":"u-ok"},b0=lt=>{if(lt.gone)return`<li class="hr u-gone${lt.live?" on":""}${Ra(lt)?" sel":""} go" data-dk="${_.push(lt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${st(lt.est)}${__t(329)}${zs(Math.max(1,Math.round(d.min-lt.est))+" min")}</small></span><span class="hrd">${ki((sp?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${__t(330)}${p(lt.num)}</small></span><span class="hrm">${lt.dl>=1?`<em class="dl ${zi(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}</span></li>`;let kt=!lt.cancel&&lt.est-d.min<Zt,te=uu(lt.num,"");return`<li class="hr ${M0(lt)}${lt.live?" on":""}${lt.ghost?" gh":""}${Ra(lt)?" sel":""}${ls&&String(lt.num)===ls?" pin":""}${Mi.some(ge=>{let En=cu(ge,t.days.indexOf(d.ymd));return En&&String(En.num)===String(lt.num)})?" fav":""} go" style="--lc:${q[lt.fam]||"#6b7385"}" data-dk="${_.push(lt)-1}" title="${lt.cancel?__t(297):kt?__t(306):__t(331)}"><span class="hrt"><b>${lt.cancel?"\u2715":kt?st(lt.est):Ys(lt.est-d.min)}</b><small>${lt.cancel?__t(332):lt.late?__t(333):kt?__t(334):lt.ghost?__t(335):st(lt.est)}</small></span><span class="hrd">${lt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${ki((sp?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${te.length?`<i class="cr" title="${p(te.map(ge=>ml(ge.kind)).join(" \xB7 "))}">${te.slice(0,2).map(ge=>pl[ge.kind]).join("")}</i>`:""}${lt.arr!=null?`${__t(336)}${st(lt.arr)}${lt.num?" \xB7 "+__t(299)+p(lt.num):""}${(()=>{let ge=lt.num&&Ze(lt.num);return ge&&ge.n>=3&&ge.late/ge.n>=.5?`${__t(337)}${ge.late}/${ge.n})</b>`:""})()}</small>`:""}${lt.obs?`<small class="hro">${p(lt.obs)}</small>`:""}${lt.unconf?`<small class="hro unc">${__t(338)}</small>`:""}</span><span class="hrm">${!lt.cancel&&lt.dl>=1?`<em class="dl ${zi(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}${lt.plat?`${__t(218)}${p(lt.plat)}</i>`:""}</span></li>`},Xa=(lt,kt,te)=>`<div class="hcol"><div class="hdir">${$i(lt)}${te?`<button type="button" class="hhide" data-hhide="${l.key}:${te}" title="${__t(339)}">\u2715</button>`:""}</div><div class="hv ${kt.cls}${kt.ghost||kt.pin&&kt.x&&kt.x.noPos?" gh":""}${kt.x?" go":""}"${kt.miss&&kt.nxt&&kt.nxt.num?` data-pinnext="${l.key}:${p(kt.nxt.num)}" title="${__t(340)}"`:kt.x?` data-dk="${_.push(kt.x)-1}"`:""}><b>${kt.big}</b>${kt.pin?`<button type="button" class="hunpin" data-unpin="${l.key}" title="${__t(341)}">\u{1F4CC} ${__t(342)} \u2715</button>`:""}<small>${p(kt.small)}</small>${kt.pin&&kt.x&&kt.x.num?(ge=>ge?`<span class="hwhere">\u{1F4CD} ${p(ge)}</span>`:"")(vu(kt.x.num)):""}${kt.warn?`<span class="hvw">${p(kt.warn)}</span>`:""}</div><ol>${ce[lt].slice(0,(l.more?lt==="all"||l.hide?20:10:lt==="all"?7:l.hide?8:4)+ce[lt].filter(ge=>ge.gone).length).map(b0).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(l===Nt){let lt=Rr("all");var w0=lt.x?`<span class="nw">${lt.big}</span> \xB7 <span class="nw"><b>${st(lt.x.est)}</b> ${p(lt.x.fam)}${__t(343)}${p(lt.x.dest)}${lt.x.plat?'<span class="nw">'+__t(307)+p(lt.x.plat)+"</span>":""}`:lt.big}let E0=l===Nt?w0:Vn.x?`<span class="nw">${Vn.big}${Vn.x.plat?__t(307)+p(Vn.x.plat):""}</span> \xB7 <span class="nw"><b>${st(Vn.x.est)}</b>${Vn.x.arr!=null?`${__t(345)}${st(Vn.x.arr)}</b>`:""}${__t(344)}${p(F)}</span>`:__t(346)+p(F),cn=l===Nt?(lt=>lt.pin?lt:null)(Rr("all")):Vn.pin?Vn:Wa.pin?Wa:null,T0=cn?l===Nt?"all":cn===Vn?"to":Tl:"",qa=!!(cn&&(cn.ghost||cn.x.noPos||cn.x.cancel)),Tu=!!(cn&&cn.miss),Ir=qa?ce[T0].find(lt=>!lt.cancel&&!lt.ghost&&!lt.gone&&lt.est>cn.x.est-.01&&lt!==cn.x&&lt.est-d.min>=(ut||wt?0:Zt)):null,A0=Tu?`<span class="nw">${__t(347)} <b>${st(cn.x.est)}</b></span>${cn.nxt?` \xB7 <span class="nw">${__t(348)} <b>${st(cn.nxt.est)}</b>${cn.nxt.arr!=null?` \u2192 <b>${st(cn.nxt.arr)}</b>`:""}</span>`:""}`:"",C0=qa?`<span class="nw">\u26A0\uFE0F ${cn.x.cancel?__t(297):cn.ghost?__t(349):__t(350)}</span>${Ir?` \xB7 <span class="nw">${__t(348)} <b>${st(Ir.est)}</b>${Ir.arr!=null?` \u2192 <b>${st(Ir.arr)}</b>`:""}${Ir.plat?__t(307)+p(Ir.plat):""}</span>`:""}`:"";return`<div class="hplace ${l.open?"open":""}${cn?" pinned":""}${qa?" pgh":""}"><button type="button" class="hhead" data-ht="${l.key}"><span class="hico">${l.ico}</span><span class="htit"><b>${p(w[v].n)}${cn&&cn.x.num?`<i class="hpn">\u{1F4CC} ${p(cn.x.num)}</i>`:""}</b><small class="c${qa||Tu?"warn":Me?"bad":Vn.cls.slice(2)}">${qa?C0:Tu?A0:E0}</small>${cn&&cn.x&&cn.x.num?(lt=>lt?`<small class="nofit hwh2">\u{1F4CD} ${p(lt)}</small>`:"")(vu(cn.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(l.open?`
      <div class="hbody">
        ${l.st.length>1?`<div class="hst">${l.st.map((lt,kt)=>{let te=Wt.get(lt);return te==null?"":`<button type="button" data-hs="${l.key}:${kt}" class="${kt===l.i?"on":""}">${p(w[te].n)}</button>`}).join("")}</div>`:""}
        ${l===Nt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let lt=Nt.dist[l.st[l.i]]||0;return lt<1?Math.round(lt*100)*10+" m":lt.toFixed(1).replace(".",",")+" km"})()}${__t(352)}${l.walk}${__t(353)}`:""}
        ${Z?`<div class="hwalk away">${__t(355)}<a data-hplat="${l.key}${__t(354)}`:wt?`${__t(356)}${l.key}${__t(357)}`:bt?`${__t(358)}${Math.round(nt)} min</b>${k&&C<=3?__t(359):""} \xB7 <a data-hgo="${l.key}${__t(354)}`:""}${ut&&l!==Nt?`${__t(360)}${C<10?C.toFixed(1).replace(".",","):Math.round(C)}${__t(361)}`:""}<div class="hwalk"${ut||wt||bt?" hidden":""}><button type="button" class="hgo" data-hgo="${l.key}:1">\u{1F6B6} Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${l.key}:1">${__t(362)}</button><span class="hstep" title="${__t(363)}">${__t(364)} <button type="button" data-hw="${l.key}:-1">\u2212</button><b>${l.walk} min</b><button type="button" data-hw="${l.key}:1">+</button> ${__t(365)}</span></div>
        ${(()=>{let lt=Mi.filter(kt=>l.st.includes(kt.sid));return lt.length?`<div class="hfav">${lt.map(kt=>{let te=cu(kt,t.days.indexOf(d.ymd)),ge=te&&xe.find(En=>String(En.num)===String(te.num));return`\u2B50 <b>${kt.t}</b> ${p(kt.fam)} ${ge?ge.cancel?__t(366):ge.gone?__t(215):ge.dl>=1?`<em class="dl ${zi(ge.dl)}">+${Math.round(ge.dl)}${__t(367)}${st(ge.est)}`:__t(368):__t(369)}`}).join("<br>")}</div>`:""})()}
        ${K&&Xe?`${__t(370)}${[...W].sort(N).map(Nn).join(" ")}${__t(371)}${F}${__t(372)}${Xe}${__t(373)}`:g?`${__t(374)}${[...Y].sort(N).slice(0,3).map(Nn).join(" ")}${__t(375)}`:""}
        ${He.length?`<div class="hal ${Me?"bad":""}${Mu.v?" open":""}" data-halx>\u26A0\uFE0F ${Pa(He[0])} ${p(He[0].txt)} <small>${La(He[0])}</small>${He.length>1?` <a data-hal>+${He.length-1}${__t(376)}`:""}</div>`:`${__t(377)}${[...W].sort(N).join(", ")}</div>`}
        ${(()=>{let lt=l.st.flatMap(kt=>uu("",kt));return lt.length?`<div class="hcr">${lt.slice(0,3).map(kt=>`${pl[kt.kind]} <b>${p(ml(kt.kind))}</b> <small>${kt.up>1?kt.up+__t(257):""}${Lf(kt)}</small>`).join("<br>")}</div>`:""})()}
        ${l===Nt?`<div class="hcols one">${Xa("all",Rr("all"))}</div>`:l.hide==="out"?`<div class="hcols one">${Xa("to",Vn)}</div><a class="hshow" data-hshow="${l.key}${__t(378)}`:l.hide==="to"?`<div class="hcols one">${Xa(Tl,Wa)}</div><a class="hshow" data-hshow="${l.key}${__t(378)}`:`<div class="hcols">${Xa("to",Vn,"to")}${Xa(Tl,Wa,"out")}</div>`}
        ${xe.length>(l===Nt?7:8)?`<button type="button" class="hmore" data-hmore="${l.key}">${l.more?__t(379):__t(380)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${ip?kn.get(w[v].id)?.d?__t(381):__t(382):__t(383)} \xB7 \u25CF = ${__t(384)}">${ip?kn.get(w[v].id)?.d?__t(385):__t(386):__t(387)}</span><a data-hmap="${v}${__t(351)}${l===Nt?__t(388):`<a data-hset="${l.key}${__t(389)}`}${l===We?`${__t(390)}`:""}</div>
      </div>`:"")+"</div>"}let wi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Wf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Xf=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Zs=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),_l=()=>{let l=new Set;return[...tn.st,...We.st].forEach(d=>{let _=Wt.get(d);_!=null&&w[_].fams.forEach(v=>l.add(v))}),[...l].sort(N)},ka=()=>({stations:[...tn.st,...We.st],lines:_l().filter(l=>!Zs.has(l))}),a0=l=>Uint8Array.from(atob(l.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((l.length+3)%4)),d=>d.charCodeAt(0));async function qf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Yf(l){let _=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:l.toJSON(),...ka()})})).json();if(!_.ok)throw new Error(_.err||"error")}function xl(){let l=gi(tn),d=gi(We);if(l==null||d==null)return l!=null?tn:d!=null?We:null;if(Nt.w&&Date.now()-Nt.fix<3*36e5){let _=v=>Math.hypot(w[v].w[0]-Nt.w[0],w[v].w[1]-Nt.w[1]);return _(l)<=_(d)?tn:We}return new Date().getHours()<13?tn:We}function Zf(l){let d=xl(),_=d===tn?We:tn,v=d&&gi(d),b=_&&gi(_);if(v==null||b==null)return!0;let T=(l.es||"")+" "+(l.txt||""),P=t.days.indexOf(ee().ymd),F=ee(),D=[...new Set([...T.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(K=>K[1]))];if(D.length)return D.some(K=>{let g=Na(K);if(!g)return!1;let C=g.pat.stops,k=C.indexOf(v),Z=C.indexOf(b);if(k<0||Z<0||k>Z)return!1;let ut=g.t0+g.pat.t[2*k+1];return ut>F.min-60&&ut<F.min+150});let W=T.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(W){let K=W[1].toLowerCase(),g=w.findIndex(C=>C.n&&K.startsWith(C.n.toLowerCase()));if(g>=0){let C=(Q[P]||[]).find(k=>{let Z=k.pat.stops;return Z[Z.length-1]===g&&Z.includes(v)&&Z.includes(b)});if(C){let k=C.pat.stops;return k.indexOf(v)<k.indexOf(b)}}}return!0}let $n={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function o0(){let{lines:l,stations:d}=ka(),_=new Set(l),v=new Set(d.map(P=>Wt.get(P))),b=H.alerts.filter(P=>([...P.fams].some(F=>_.has(F))||[...P.stops||[]].some(F=>v.has(F)))&&Zf(P));if(!$n.seen){try{$n.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{$n.seen=new Set}if(!$n.seen.size){b.forEach(P=>$n.seen.add(P.id+"|"+P.txt.length)),Jf();return}}let T=b.filter(P=>!$n.seen.has(P.id+"|"+P.txt.length));if(T.length&&(T.forEach(P=>$n.seen.add(P.id+"|"+P.txt.length)),Jf(),!(!$n.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of T.slice(0,3)){let F=(P.src==="Adif"?__t(266):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(N).slice(0,4).join(" "):""),D={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(W=>W?W.showNotification(F,D):new Notification(F,D)).catch(()=>{try{new Notification(F,D)}catch{}})}}function Jf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...$n.seen].slice(-400)))}catch{}}async function l0(){if($n.on)$n.on=!1,un(__t(391));else{if(!("Notification"in window)){un(Wf&&!Xf()?__t(392):__t(393));return}if(await Notification.requestPermission()!=="granted"){un(__t(394));return}$n.on=!0,un(__t(395)+ka().lines.join(", ")+__t(396))}try{localStorage.setItem("rod_ln",$n.on?"1":"")}catch{}Ve(!0)}async function c0(){if(!H.repOk)return l0();if(!wi.busy){wi.busy=!0;try{let l=await qf();if(!l){un(Wf&&!Xf()?__t(397):__t(398));return}if(await navigator.serviceWorker.ready,wi.on){let d=await l.pushManager.getSubscription();d&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:d.endpoint})}).catch(()=>{}),await d.unsubscribe().catch(()=>{})),wi.on=!1,un(__t(391))}else{if(!H.url){un(__t(399));return}if(await Notification.requestPermission()!=="granted"){un(__t(394));return}let _=(await Ct(H.url.replace(/\/+$/,""),"/push/key")).key,v=await l.pushManager.getSubscription()||await l.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:a0(_)});await Yf(v),wi.on=!0,un(__t(400)+ka().lines.join(", "))}try{localStorage.setItem("rod_push",wi.on?"1":"")}catch{}}catch(l){un(__t(401)+(l.message||l))}finally{wi.busy=!1,Ve(!0)}}}async function Kf(){if(wi.on)try{let l=await qf(),d=l&&await l.pushManager.getSubscription();d&&await Yf(d)}catch{}}let gu=!1,jf="";function _u(){let l=ct?"t"+(ct.tid||ct.vtid):Rt>=0?"s"+Rt:Dt?"a":E?"n":"";l!==jf&&(gu=!1,jf=l);let d=innerWidth<=640&&!!l&&!gu&&!document.documentElement.classList.contains("tabmode"),_=m("#inf");_.classList.contains("compact")!==d&&(_.classList.toggle("compact",d),requestAnimationFrame(()=>{if(u.style.display!=="none"){let v=_.getBoundingClientRect().bottom;u.style.top=Math.round(v+8)+"px",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-v-16)+"px"}}))}let vl=new Set;function h0(l,d,_,v){if(!($n.on||wi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let b=ee(),T=d.sm-b.min-v;if(!b.live||d.dl<10||T>40||vl.has(d.num+"|"+d.sm))return;vl.add(d.num+"|"+d.sm);let P=`${l.ico} ${_} ${l===We?__t(404):__t(405)}${__t(402)}${st(d.sm)}${__t(403)}${Math.round(d.dl)} min`,F=`${d.fam}${__t(298)}${d.dest}${__t(406)}${st(d.est)}. Si ibas a cogerlo, puedes salir ${Math.round(d.dl)}${__t(407)}${l===We?__t(274):__t(273)}${__t(408)}`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(D=>D?D.showNotification(P,{body:F,tag:"rd-"+d.num,icon:"icons/icon-192.png"}):new Notification(P,{body:F})).catch(()=>{try{new Notification(P,{body:F})}catch{}})}let Ar={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",l=>{let d=l.target.closest&&l.target.closest("[data-nowx]");if(!d||l.target.closest("a"))return;let _=d.dataset.nowx?d.dataset.nowx.split("|"):[];if(_.length){if(d.classList.contains("col"))Ar.open=!0;else{Ar.open=!1,_.forEach(v=>Ar.seen.add(v));try{localStorage.setItem("rod_seen",JSON.stringify([...Ar.seen].slice(-200)))}catch{}}Ve(!0)}});function u0(l){let d=l.lines;if(!d.length&&Nt.st&&Nt.st.length){let g=new Set;Nt.st.forEach(C=>{let k=Wt.get(C);k!=null&&w[k].fams.forEach(Z=>g.add(Z))}),d=[...g].sort(N)}let _=new Set(d),v=H.alerts.filter(g=>!_.size||[...g.fams].some(C=>_.has(C))),b=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(127)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,T=v.reduce((g,C)=>Math.max(g,Ba(C)),0),P=T===3?"\u26D4 ":T===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",F=`<div class="hnowh"><span class="hnowl"><b>${v.length?P+v.length+(v.length===1?__t(268):__t(269)):__t(409)}</b>${d.length?d.map(Nn).join(""):""}</span>${b}</div>`,D=v.filter(g=>!Ar.seen.has(g.id)),W=v.length&&(Ar.open||D.length>0),K=v.reduce((g,C)=>Math.max(g,Ba(C)),0);return`<div class="hnow${K===3?" bad":K===2?" warn":K===1?" info":""}${v.length&&!W?" col":""}" data-nowx="${p(v.map(g=>g.id).join("|"))}">${F}${Qf(l,!0)}${W?v.slice().sort((g,C)=>Ba(C)-Ba(g)).map(g=>`<p class="sv${Ba(g)}">${Pa(g)} ${p(g.txt)} <small>${La(g)}</small></p>`).join("")+`<small class="hnowt">${__t(410)}</small>`:""}</div>`}let za=new Map((()=>{try{let l=xt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(d=>d[2]===l).map(d=>[d[0],d[1]])}catch{return[]}})());function xu(){if(!document.documentElement.classList.contains("tabmode"))return;let l=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],d=(v,b)=>{v.style.fontSize=b===1?"":(v._f0*b).toFixed(1)+"px",v.querySelectorAll("b").forEach(T=>T.style.fontSize=b===1?"":(v._b0*b).toFixed(1)+"px")},_=1;for(let v of l){if(v.style.whiteSpace="",d(v,1),!v.clientWidth)continue;v._f0=parseFloat(getComputedStyle(v).fontSize);let b=v.querySelector("b");for(v._b0=b?parseFloat(getComputedStyle(b).fontSize):0;v.scrollWidth>v.clientWidth+1&&_>.86;)_-=.02,d(v,_)}if(_<1)for(let v of l)v._f0&&d(v,_);for(let v of l)v.scrollWidth>v.clientWidth+1&&(v.style.whiteSpace="normal")}addEventListener("resize",()=>{try{xu()}catch{}});let d0=(l,d)=>{let _=l==="work"?We:l==="near"?Nt:tn,v=_&&gi(_);return v==null?null:bs(v).find(b=>String(b.num)===String(d))||null};function yl(l,d){d?za.set(l,d):za.delete(l);try{let _=xt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...za].map(([v,b])=>[v,b,_])))}catch{}}function vu(l){let d=tt.find(T=>T.tr&&String(T.tr.num)===String(l));if(!d){let T=Na(l),P=ee(),F=t.days.indexOf(P.ymd);if(!T)return"";let D=T.day===F-1?1440:0,W=T.t0+T.pat.t[1]-D;return W>P.min?__t(411)+w[T.pat.stops[0]].n+" ("+st(W)+")":""}let _=d.tr,v=T=>w[_.pat.stops[T]].n;if(d.real){let T=d.v;return T.pre?__t(412):T.atStop>=0&&(T.st==="STOPPED_AT"||d.stop==="st")?__t(413)+v(T.atStop):T.atStop>=0&&T.before?__t(414)+v(T.atStop):T.atStop>=0&&T.next>T.atStop?__t(415)+v(T.atStop)+__t(416)+v(T.next):T.atStop>=0?__t(417)+v(T.atStop):d.stop==="via"&&T.next>0?"\u23F8 "+__t(418)+v(T.next-1)+__t(419)+v(T.next):T.next>0?__t(175)+v(T.next-1)+__t(419)+v(T.next):T.next===0?__t(294)+v(0):""}let b=d.p&&d.p.next;return b>0?__t(420)+v(b-1)+__t(419)+v(b):""}let $a={k:"",v:null};function f0(l){let d=ee(),_=t.days.indexOf(d.ymd);if(_<0||!l.length)return null;let v=xl(),b=(v&&gi(v))??gi(tn)??gi(We),T=d.ymd+l.join()+b;if($a.k===T)return $a.v;$a.k=T;let P=new Set(l),F=b!=null?g=>Q[g].filter(C=>{let k=C.pat.stops.indexOf(b);return k>=0&&k<C.pat.stops.length-1}).length:g=>Q[g].filter(C=>P.has(C.fam)).length,D=g=>{let C=new Date(+g.slice(0,4),+g.slice(4,6)-1,+g.slice(6)).getDay();return C===0?0:C===6?6:1},W=F(_),K=Math.max(0,...t.days.map((g,C)=>C!==_&&D(g)===D(d.ymd)?F(C):0));return $a.v=K>=20&&W<K*.8?{n:W,ref:K,pct:Math.round(W/K*100),st:b!=null?w[b].n:""}:null,$a.v}function Qf(l,d){let _=l.lines||[],v=f0(_);if(!v)return"";let b=H.alerts.some(T=>[...T.fams].some(P=>_.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((T.es||"")+" "+T.txt));return d?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${b?__t(421):__t(422)}</b>: ${v.st?`${__t(423)} ${p(v.st)} ${__t(424)} ${v.n} ${__t(188)} ${v.ref} ${__t(67)}`:`${v.n} ${__t(188)} ${v.ref} ${__t(67)}`} (${v.pct} %) \xB7 ${__t(425)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${b?__t(426):__t(427)}</b> \xB7 ${__t(428)}: ${v.st?`${__t(423)} ${p(v.st)} ${__t(424)} ${v.n} ${__t(188)} ${v.ref} ${__t(67)}`:`${v.n} ${__t(188)} ${v.ref} ${__t(429)} ${_.join(", ")}`} (${v.pct} % ${__t(430)}).</div>`}function p0(l){let d=fu(l.lines||[]);if(!d.length)return"";let _=[tn,We].some(v=>{let b=gi(v),T=b!=null&&kn.get(w[b].id);return T&&T.d&&Array.isArray(T.d.trains)&&!T.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(431)} ${d.join(", ")}</b> \xB7 ${__t(432)}${_?" \xB7 "+__t(433):""}. ${__t(434)}</div>`}function m0(l){if(!Nt.w)return[];let d=Nt.k||1;return tt.filter(_=>_.tr&&_.tr!==l&&_.p&&_.p.w&&Math.hypot(_.p.w[0]-Nt.w[0],_.p.w[1]-Nt.w[1])*d<3).sort((_,v)=>Math.hypot(_.p.w[0]-Nt.w[0],_.p.w[1]-Nt.w[1])-Math.hypot(v.p.w[0]-Nt.w[0],v.p.w[1]-Nt.w[1])).slice(0,2).map(_=>_.tr)}function g0(l){if(!we.tid)return"";let d=tt.find(Z=>Z.tr&&String(Z.tr.num)===we.tid)||Ms(l).out.find(Z=>Z.tr&&String(Z.tr.num)===we.tid);if(!d)return"";let _=d.tr,v=_.pat.stops,b=d.real?d.v.next:d.p.next;if(b==null||b<0)return"";let T=M(_),P=typeof T=="number"?Math.max(0,T/60):0,F=t.days.indexOf(l.ymd),D=_.day===F-1?1440:0,W=je&&je.num===we.tid?v.indexOf(Wt.get(je.sid)):-1;W<b&&(W=v.length-1);let K=Fa(_,d.real?d.v:null,W,_.t0+_.pat.t[2*W]+P-D),g=K-l.min,C=d.real&&d.v.atStop>=0?d.v.atStop:-1,k=vu(_.num)||__t(294)+w[v[b]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Nn(_.fam)} ${__t(299)}${p(_.num)}<i class="hpn onbx" data-onbx title="${__t(435)}">\u2715</i></b><span class="onbch">${m0(_).map(Z=>`<i class="onbalt" data-onbpick="${p(Z.num)}">${__t(436)} ${p(Z.num)}?</i>`).join("")}</span><small class="nofit cok">${p(k)} \xB7 <span class="nw">${__t(437)} ${p(w[v[W]].n)}</span> <span class="nw">${g>=1?__t(100)+Ys(g)+" \xB7 ":""}<b>${st(K)}</b>${P>=1?` <em class="dl ${zi(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button></div>`}function Ve(l){let d=m("#home");if(!d)return;let _=performance.now();if(!l&&_-Vf<4e3)return;Vf=_;let v=ee(),b=[],T=ka(),P=g=>{let C=gi(g);return C==null||!Nt.w?1:Math.hypot(w[C].w[0]-Nt.w[0],w[C].w[1]-Nt.w[1])},F=[Nt,...[tn,We].sort((g,C)=>P(g)-P(C))],D=(document.documentElement.classList.contains("tabmode")?u0(T):Qf(T))+p0(T)+g0(v)+F.map(g=>r0(g,v,b)).join("")+(Oa.some(g=>g.open)&&T.lines.length,"");d.className=Oa.some(g=>g.open)?"open":"";let W=m("#bell");W||(W=document.createElement("button"),W.type="button",W.id="bell",W.onclick=c0,m("#inf .more").prepend(W));{let g=H.repOk?wi.on:$n.on;W.hidden=!T.lines.length,W.className=g?"on":"",W.textContent=(g?__t(445):__t(446))+T.lines.join(", "),W.title=(g?__t(447):__t(448))+__t(63)+T.lines.join(", ")+(H.repOk?"":__t(449))}if(d._h===D)return;d._h=D,d.innerHTML=D,xu();{let g=d.querySelector("[data-onbgo]");g&&(g.onclick=C=>{if(C.target.closest("[data-onbx]")){we.no.set(we.tid,Date.now()+20*6e4),we.tid="",we.manual=0,Lt=null,Ve(!0);return}let k=C.target.closest("[data-onbpick]");if(k){we.no.set(we.tid,Date.now()+20*6e4),we.tid=k.dataset.onbpick,we.manual=Date.now()+90*6e4;let ut=tt.find(wt=>wt.tr&&String(wt.tr.num)===we.tid);if(ut){Lt=ut.tr,ct=ut.tr;let wt=ut.tr.pat.stops,dt=ut.real?ut.v.next:ut.p.next,bt=[...tn.st,...We.st],nt=wt.findIndex((le,xe)=>xe>=dt&&bt.includes(w[le].id));nt>0&&(je={num:we.tid,sid:w[wt[nt]].id,at:Date.now()},Tr()),u._h="",Ne()}Ve(!0);return}let Z=tt.find(ut=>ut.tr&&String(ut.tr.num)===we.tid);Z&&(E=Dt=z=!1,Rt=-1,ct=Z.tr,u._h="",Ne())})}{let g=[...d.children].find(C=>C.classList.contains("hplace")&&!C.querySelector(".hnew"));g&&g.classList.add("lead")}let K=g=>g==="work"?We:g==="near"?Nt:tn;d.querySelectorAll("[data-hloc]").forEach(g=>g.onclick=()=>{Nt.err="",mu(!0)}),d.querySelectorAll("[data-ht]").forEach(g=>g.onclick=()=>{if(m("#inf").classList.contains("compact")){gu=!0,_u();return}let C=K(g.dataset.ht);C.open=!C.open,bi(C),Ve(!0),(ct||Rt>=0||Dt||E)&&(u._h="",Ne())}),d.querySelectorAll("[data-hs]").forEach(g=>g.onclick=()=>{let[C,k]=g.dataset.hs.split(":"),Z=K(C);Z.i=+k,bi(Z),Ve(!0)}),d.querySelectorAll("[data-hw]").forEach(g=>g.onclick=()=>{let[C,k]=g.dataset.hw.split(":"),Z=K(C);Z.walk=y(Z.walk+ +k,0,60),bi(Z),Ve(!0)}),d.querySelectorAll("[data-hmap]").forEach(g=>g.onclick=()=>{let C=+g.dataset.hmap;E=Dt=z=!1,ct=null,Rt=C,Ce(),Object.assign(s,{tx:w[C].w[0],ty:w[C].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",Ne(),a()}),d.querySelectorAll("[data-hset]").forEach(g=>g.onclick=()=>{Js=g.dataset.hset,x.value="",x.placeholder=Js==="work"?__t(450):__t(451),x.focus()}),d.querySelectorAll("[data-hnear]").forEach(g=>g.onclick=()=>{let C=Wt.get(Nt.st[0]);C!=null&&yu(C,g.dataset.hnear)}),d.querySelectorAll("[data-hmore]").forEach(g=>g.onclick=()=>{let C=K(g.dataset.hmore);C.more=!C.more,Ve(!0)}),d.querySelectorAll("[data-hhide]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Z]=g.dataset.hhide.split(":"),ut=K(k);ut.hide=Z,bi(ut),Ve(!0)}),d.querySelectorAll("[data-hshow]").forEach(g=>g.onclick=()=>{let C=K(g.dataset.hshow);C.hide="",bi(C),Ve(!0)}),d.querySelectorAll("[data-hgo]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Z]=g.dataset.hgo.split(":"),ut=K(k);ut.goAt=Z==="1"?Date.now():0,ut.goAt&&(ut.platAt=0),bi(ut),Ve(!0)}),d.querySelectorAll("[data-hplat]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Z]=g.dataset.hplat.split(":"),ut=K(k);ut.platAt=Z==="1"?Date.now():0,ut.platAt&&(ut.goAt=0),bi(ut),Ve(!0)}),d.querySelectorAll("[data-hnotst]").forEach(g=>g.onclick=C=>{C.stopPropagation(),Nt.homeW=Nt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Nt.w))}catch{}Ve(!0)}),d.querySelectorAll("[data-hdel]").forEach(g=>g.onclick=()=>{We.st=[],We.open=!1,bi(We),Ve(!0),Kf()}),d.querySelectorAll("[data-dk]").forEach(g=>g.onclick=()=>{let C=b[+g.dataset.dk];if(g.matches("li.hr")&&!C.gone&&C.num!=null){let k=g.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(k){let Z=za.get(k)===String(C.num);yl(k,Z?null:String(C.num)),Z?ct&&String(ct.num)===String(C.num)&&(ct=null,Lt=null,dn.sk="",u._h="",Ne()):Sl(C,!0),Ve(!0);return}}Sl(C)}),d.querySelectorAll("[data-pinnext]").forEach(g=>g.onclick=C=>{if(C.target.closest("[data-unpin]"))return;let[k,Z]=g.dataset.pinnext.split(":");yl(k,Z);let ut=d0(k,Z);ut&&Sl(ut,!0),Ve(!0)}),d.querySelectorAll("[data-unpin]").forEach(g=>g.onclick=C=>{C.stopPropagation(),yl(g.dataset.unpin,null),Ve(!0)}),d.querySelectorAll("[data-hal]").forEach(g=>g.onclick=()=>m("#alr").click()),Nf(d)}function Sl(l,d){if(!l)return;let _=t.days.indexOf(ee().ymd),v=tt.find(P=>P.real?l.tid&&P.v.tid===l.tid||l.num&&String(P.tr?P.tr.num:P.v.num)===String(l.num):l.tr&&P.tr===l.tr||l.num&&P.tr&&String(P.tr.num)===String(l.num)),b=l.tr||v&&v.tr||(Q[_]||[]).find(P=>String(P.num)===String(l.num));if(E=Dt=z=!1,Rt=-1,d||void 0,ct=v?v.tr||{vtid:v.v.tid}:b||null,!ct)return;d&&(dn.sk="t"+(ct.num||ct.vtid)),Lt=v&&v.tr?v.tr:null,Lt&&innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());let T=v?v.p.w:null;T&&Object.assign(s,{tx:T[0],ty:T[1],dist:Math.min(s.dist,22)}),Ce(),u._h="",Ne(),Ut=0,a()}let Js=!1;x.addEventListener("blur",()=>setTimeout(()=>{Js&&!x.value.trim()&&(Js=!1,x.placeholder=__t(452))},600));function cb(){}function yu(l,d){let _=d==="work"?We:tn,v=w[l].id,b=w.filter(T=>T.fams.size&&T!==w[l]&&Math.hypot(T.w[0]-w[l].w[0],T.w[1]-w[l].w[1])<.6).map(T=>T.id);_.st=[v,...b].slice(0,3),_.i=0,_.open=!0,bi(_),Ve(!0),Kf()}let Ml=m("#lines");Ml.innerHTML=`${__t(453)}`+V.map(l=>`<button type="button" style="--c:${q[l]}" data-f="${l}">${l}</button>`).join("");function tp(){try{Ve(!0)}catch{}{let l=m("#linebtn");l||(l=document.createElement("button"),l.type="button",l.id="linebtn",Ml.after(l),l.onclick=()=>{at=[...Y][0],z=E=Dt=!1,u._h="",Ne()});let d=Y.size===1?[...Y][0]:"";l.hidden=!d,d&&(l.innerHTML=`${__t(454)}${p(d)}${__t(455)}`)}Ml.querySelectorAll("[data-f]").forEach(l=>{l.dataset.f!=="*"&&l.classList.toggle("off",!Y.has(l.dataset.f))})}Ml.querySelectorAll("[data-f]").forEach(l=>l.onclick=()=>{let d=l.dataset.f;d==="*"?V.forEach(_=>Y.add(_)):Y.size===V.length?(Y.clear(),Y.add(d)):Y.has(d)?(Y.delete(d),Y.size||V.forEach(_=>Y.add(_))):Y.add(d);try{localStorage.setItem("rod_lines",JSON.stringify([...Y]))}catch{}tp(),ue(),Ce(),du(),Ut=0,a()});let Su=[...document.querySelectorAll("[data-sp]")],_i=0;function ep(l){let d=ee();l&&(It===l||_i===l)?It?(Yt=d.min,ne=d.min,It=0,_i=l):(he=performance.now(),It=l,_i=0):l===0?(It=0,ne=null,_i=0):(Yt=d.min,he=performance.now(),ne=d.min,It=l,_i=0),Su.forEach(_=>{let v=+_.dataset.sp;_.classList.toggle("on",v===(It||_i)||!It&&!_i&&ne==null&&v===0),_.classList.toggle("pz",!!_i&&v===_i),_.textContent=v===0?__t(456):_i===v?"\u25B6 \xD7"+v:It===v?"\u23F8 \xD7"+v:"\xD7"+v}),Ut=0,a()}Su.forEach(l=>l.onclick=()=>ep(+l.dataset.sp)),m("#tsl").oninput=l=>{let d=+l.target.value;Yt=d,ne=d,he=performance.now(),It===0&&!_i&&Su.forEach(_=>_.classList.remove("on")),Ut=0,a()},setInterval(()=>{ne!=null&&It&&Yt+(performance.now()-he)/6e4*It>1560&&(Yt=240,he=performance.now())},1e3),window.__rodSearch=l=>{let d=S(l.trim());if(!d){f.style.display="none",f._pick=null;return}let _=[],v=[];w.forEach((F,D)=>{if(!F.fams.size)return;let W=S(F.n);W.startsWith(d)||W.includes(" "+d)||W.includes("-"+d)?_.push(D):W.includes(d)&&v.push(D)});let b=_.concat(v).slice(0,7),T=I.filter(F=>S(F.name).startsWith(d)).sort((F,D)=>D.pop-F.pop).slice(0,3),P=b.map(F=>({h:`\u{1F689} ${p(w[F].n)}<em>${[...w[F].fams].sort(N).slice(0,3).map(D=>`<em class="ls" style="background:${q[D]}">${D}</em>`).join(" ")}</em>`,go:()=>{if(Js){let D=Js;Js=!1,x.placeholder=__t(452),yu(F,D);return}E=!1,Dt=!1,z=!1,Rt=F,ct=null,Lt=null,Ce(),Object.assign(s,{tx:w[F].w[0],ty:w[F].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ne(),a()}})).concat(T.map(F=>({h:`${p(F.name)}${__t(457)}`,go:()=>{Object.assign(s,{tx:F.cx,ty:F.cy,dist:y(F.size*3+14,14,60)}),a()}})));f.innerHTML=P.map((F,D)=>`<li data-i="${D}">${F.h}</li>`).join("")||__t(458),f.style.display="block",f._pick=F=>{P[F]&&(P[F].go(),f.style.display="none",x.value="",x.blur())},f.querySelectorAll("li[data-i]").forEach(F=>F.onclick=()=>f._pick(+F.dataset.i))},tp(),Ce();try{let l=new URLSearchParams(location.search).get("st");if(l){let d=S(l),_=-1,v=0;w.forEach((b,T)=>{if(!b.fams.size)return;let P=S(b.n),F=P===d?3:P.startsWith(d)||d.startsWith(P)?2:P.includes(d)||d.includes(P)?1:0;F>v&&(v=F,_=T)}),_>=0&&setTimeout(()=>{Rt=_,Ce(),Object.assign(s,{tx:w[_].w[0],ty:w[_].w[1],dist:18,tilt:.5}),Ne(),a()},300)}}catch{}let Mu={v:!1};document.addEventListener("click",l=>{!(l.target.closest&&l.target.closest("[data-halx]"))||l.target.closest("a")||(Mu.v=!Mu.v,Ve(!0))}),u.addEventListener("click",l=>{if(!u.classList.contains("peek")||l.target.closest("button,a,input"))return;l.stopPropagation(),l.preventDefault(),u.classList.remove("peek");let d=u.querySelector(".mn");d&&(d.textContent="\u25BE"),u.scrollTop=0},!0);let dn={on:!1,cur:"now",home:new Map},bl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Va=document.createElement("nav");Va.id="tabs";let _0=[["now","\u{1F552}",__t(456)],["map","\u{1F5FA}\uFE0F",__t(459)],["line","\u{1F4CA}",__t(460)],["set","\u2699\uFE0F",__t(461)]];Va.innerHTML=_0.map(([l,d,_])=>`<button type="button" data-tab="${l}"><span>${d}</span><small>${_}</small></button>`).join(""),document.body.appendChild(Va);let Cr=document.createElement("div");Cr.id="tabL",document.body.appendChild(Cr);let Ks=document.createElement("div");Ks.id="tabA",Ks.className="box",document.body.appendChild(Ks);let bu=(l,d)=>{l&&(dn.home.has(l)||dn.home.set(l,[l.parentNode,l.nextSibling]),d.appendChild(l))},np=()=>{for(let[l,[d,_]]of dn.home)try{d.insertBefore(l,_&&_.parentNode===d?_:null)}catch{}dn.home.clear()};function wu(){let l=Y.size===1?[...Y][0]:"",d=H.alerts.filter(v=>[...v.fams].some(b=>Y.has(b))).length,_=[z,Dt,at,E,l,d].join("|");Cr._k!==_&&(Cr._k=_,Cr.innerHTML=`<button type="button" data-tl="stats" class="${z?"on":""}">\u{1F4CA} ${__t(462)}</button><button type="button" data-tl="alr" class="${Dt?"on":""}">\u26A0\uFE0F ${d}${d===1?__t(268):__t(269)}</button>${l?`<button type="button" data-tl="line" class="${at?"on":""}">\u{1F4CB} ${p(l)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(127)}">\u{1F4AC}</a>`,Cr.querySelectorAll("[data-tl]").forEach(v=>v.onclick=()=>{let b=v.dataset.tl;z=b==="stats",Dt=b==="alr",at=b==="line"?l:"",E=!1,ct=null,Rt=-1,z&&(Ie.at=0),u._h="",Ne(),wu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let x0="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",v0=()=>xt(new Date).ymd.replace(/-/g,"");function Ha(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(x0,{cache:"no-store"}).then(l=>l.ok?l.text():null).then(l=>{if(!l)return;let d;try{d=JSON.parse(l)}catch{return}if(!d||!d.gen||!Array.isArray(d.days)||!d.trips||d.gen<=t.gen)return;try{localStorage.setItem("rod_pack",l)}catch{return}let _=v0(),v=t.days.indexOf(_),b=d.days.indexOf(_),T=v<0?0:rt.filter(D=>D.day===v).length,P=0;if(b>=0)for(let D of d.trips)D[0]===b&&P++;let F=b>=0&&T&&(Math.abs(P-T)/T>.1||!P);if(v<0||v>=t.days.length-2||F){try{sessionStorage.setItem("rod_packmsg",F?"1":"")}catch{}location.reload();return}Ga.v=!0}).catch(()=>{})}let Ga={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&Ga.v?(Ga.v=!1,Ga.reload=!0):!document.hidden&&Ga.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>un("\u{1F5D3}\uFE0F "+__t(463)),1500))}catch{}if(setTimeout(Ha,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(Ha.at||0)>6*36e5&&(Ha.at=Date.now(),Ha())}),Ha.at=Date.now(),window.__RODNEW__){let l=window.__RODNEW__,d=m("#ver");d&&d.firstChild&&d.firstChild.nodeType===3&&(d.firstChild.textContent=d.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,l.slice(8,10)+"/"+l.slice(5,7)+" "+l.slice(11,16)))}function wl(){np();let l=window.__L||"es",d=ei.mode;Ks.innerHTML=`<h3>${__t(461)}</h3>
      <h4>\u{1F310} ${__t(464)}</h4><div class="seg2">${[["ca","Catal\xE0"],["es","Espa\xF1ol"],[__t(187),"English"]].map(([_,v])=>`<button type="button" data-lang="${_}" class="${l===_?"on":""}">${v}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(465)}</h4><div class="seg2">${[["auto",__t(466)],["light",__t(467)],["dark",__t(468)]].map(([_,v])=>`<button type="button" data-th="${_}" class="${d===_?"on":""}">${v}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(469)}</h4><div class="seg2">${(()=>{let _="";try{_=localStorage.getItem("rod_big")||""}catch{}let v=_==="1"?"1":_==="0"?"0":"a";return[["a",__t(466)],["0","Normal"],["1",__t(470)]].map(([b,T])=>`<button type="button" data-big="${b}" class="${v===b?"on":""}">${T}</button>`).join("")})()}</div>${(()=>{let _="";try{_=localStorage.getItem("rod_big")||""}catch{}return _==="1"||_==="0"?"":`<small class="tabAhint">${__t(471)}</small>`})()}
      <h4>\u{1F514} ${__t(472)}</h4><div id="tabAbell"></div>${_l().length?"":`<small class="tabAhint">${__t(473)}</small>`}${(()=>{let _=_l();return _.length>1?`<small class="tabAhint">${__t(474)}</small><div class="alch">${_.map(v=>`<button type="button" data-al="${p(v)}" class="ln${Zs.has(v)?" off":""}" style="--c:${q[v]}">${p(v)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(475)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(476)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,Ks.querySelectorAll("[data-al]").forEach(_=>_.onclick=()=>{let v=_.dataset.al,b=_l();Zs.has(v)?Zs.delete(v):b.filter(T=>!Zs.has(T)).length>1&&Zs.add(v);try{localStorage.setItem("rod_aloff",JSON.stringify([...Zs]))}catch{}Ve(!0),wl()}),Ks.querySelectorAll("[data-big]").forEach(_=>_.onclick=()=>{let v=_.dataset.big;try{v==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",v)}catch{}window.__txt&&window.__txt(),wl(),Ve(!0)}),Ks.querySelectorAll("[data-th]").forEach(_=>_.onclick=()=>{ei.mode=_.dataset.th;try{localStorage.setItem("rod_theme",ei.mode)}catch{}hl(),wl()}),bu(m("#bell"),m("#tabAbell")),bu(m("#src"),m("#tabArt")),bu(m("#ver"),m("#tabAinf"))}function El(l){if(!dn.on)return;let d=dn.cur;if(dn.cur=l,document.documentElement.dataset.tab=l,window.__mapHidden=l!=="map",Va.querySelectorAll("[data-tab]").forEach(_=>_.classList.toggle("on",_.dataset.tab===l)),l==="line")(ct||Rt>=0)&&(dn.keep={t:ct,s:Rt,sk:dn.sk}),!z&&!Dt&&!at&&!E&&(z=!0,Ie.at=0),ct=null,Rt=-1,u._h="",Ne(),wu();else if(d==="line"){z=Dt=E=!1,at="";let _=dn.keep;dn.keep=null,_&&l==="map"&&!ct&&Rt<0&&(ct=_.t,Rt=_.s,dn.sk=_.sk),u._h="",Ne()}l==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{hu()}catch{}dispatchEvent(new Event("resize"))})),l==="set"&&wl(),l==="now"&&(Ve(!0),requestAnimationFrame(xu)),Ut=0,a()}Va.onclick=l=>{let d=l.target.closest("[data-tab]");d&&El(d.dataset.tab)},window.__rodTabSync=()=>{if(!dn.on)return;let l=ct?"t"+(ct.num||ct.vtid):Rt>=0?"s"+Rt:"",d=l!==dn.sk;dn.sk=l,l&&d&&dn.cur!=="map"?El("map"):(Dt||at||E)&&dn.cur!=="line"&&dn.cur!=="map"&&El("line"),dn.cur==="line"&&wu()};function Eu(){let l=bl.matches||document.documentElement.classList.contains("cap");l!==dn.on&&(dn.on=l,document.documentElement.classList.toggle("tabmode",l),l||(window.__mapHidden=!1),l?El("now"):(delete document.documentElement.dataset.tab,np()))}bl.addEventListener?bl.addEventListener("change",Eu):bl.addListener(Eu),Eu();{let l=m("#rc"),d=()=>document.documentElement.style.setProperty("--rch",Math.round(l.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(d).observe(l),d()}window.__rod={cardEta:Fa,HOME:tn,WORK:We,ONB:we,alertForMe:Zf,whereAmI:xl,departuresFor:bs,DEPS:kn,tripByNum:Na,delayOf:M,TID:ht,SID:Wt,byDay:Q,get days(){return t.days},get hist(){return Ie},get past(){return me.cur},get cols(){return ln.mesh?ln.mesh.count:-1},get dist(){return r.dist},get follow(){return Lt},get selTrip(){return ct},ST:w,TR:rt,FAM:V,act:()=>tt,setSpeed:ep,RT:H,pollRT:oe,nowState:ee,posAt:Gs,activeTrips:Ms,LL:St,select:l=>{ct=l,Ne()}}}var xa=window.__DATA__;var Fe=i=>document.querySelector(i),vs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),qn=(i,t,e)=>Math.min(e,Math.max(t,i)),lf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Qn=Fe("#c"),al=new Oh({canvas:Qn,antialias:!0});al.setPixelRatio(Math.min(devicePixelRatio||1,2));var ys=new fo;ys.background=new fe(15659509);var jh=35,ss=new Wn(jh,1,2,1500);ys.add(new Fo(16777215,9080992,1));var Sg=new Bo(16777215,.9);Sg.position.set(-40,-70,90);ys.add(Sg);var ns=100/xa.w,il=xa.w/2,sl=xa.h/2,pn=[],cf=new Pi;ys.add(cf);var qh=new or({color:16777215,transparent:!0,opacity:.55});for(let i of xa.m){let t=new Pi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let y of i.g){let S=y.map(m=>{let p=[];for(let O=0;O<m.length;O+=2)p.push(new $t((m[O]-il)*ns,(m[O+1]-sl)*ns));return p.length>1&&p[0].equals(p[p.length-1])&&p.pop(),p}).filter(m=>m.length>=3);if(!S.length)continue;let I=new sa(S[0]);for(let m=1;m<S.length;m++)I.holes.push(new cr(S[m]));e.push(I);for(let m of S[0])s=Math.min(s,m.x),r=Math.max(r,m.x),a=Math.min(a,m.y),o=Math.max(o,m.y);for(let m of S)n.push(new vo(new gn().setFromPoints(m.map(p=>new X(p.x,p.y,0))),qh))}if(!e.length)continue;let c;try{c=new Io(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new Do({color:13421772}),u=new Rn(c,h);t.add(u);let x=new Pi;n.forEach(y=>x.add(y)),x.position.z=.04,cf.add(x),t.scale.z=.01,cf.add(t);let f={og:x,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:h,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=f,pn.push(f)}var NE=pn.map(i=>i.mesh),pg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Mg=0,bg=0;for(let i of pn){for(let t of i.rings)Mg+=pg(t[0])-t.slice(1).reduce((e,n)=>e+pg(n),0);bg+=i.area}var XM=Math.sqrt(bg/Mg),Gh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},wg={"08":__t(477),17:__t(478),25:__t(479),43:__t(480)},gf="sqrt",_f="pop",af=0,hf=0,ma=1,el=1,qM={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},uf=i=>_f==="pop"?i.pop:i.pop/i.area,Hh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new fe(i));function YM(i){i=qn(i,0,1)*(Hh.length-1);let t=Math.min(Math.floor(i),Hh.length-2);return Hh[t].clone().lerp(Hh[t+1],i-t)}var ga=i=>i>=100?vs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function ZM(){hf=0;for(let i of pn)hf+=i.pop;[...pn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...pn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Ag()}var Eg=new fe("#d3d8e2"),Tg=new fe("#eceff3");window.__mapTheme=i=>{ys.background=new fe(i?856345:15659509),Tg.set(i?"#2b3242":"#eceff3"),Eg.set(i?"#1a1f29":"#d3d8e2"),qh.color.set(i?856345:16777215),qh.opacity=i?.7:.55,xf.color.set(i?329483:2764864),vf.color.set(i?9081766:16777215);for(let t of pn)t.base&&Qh(t);Pn()};function Qh(i){i.mat.color.copy(i.base).lerp(Tg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Eg,.8)}function Ag(){ma=1,el=1e12;for(let e of pn){let n=uf(e);ma=Math.max(ma,n),el=Math.min(el,n)}let i=Math.log10(Math.max(el,.01)),t=Math.log10(ma);for(let e of pn)e.base=YM((Math.log10(Math.max(uf(e),.01))-i)/(t-i)),Qh(e);Fe("#lmin").textContent=ga(el),Fe("#lmax").textContent=ga(ma),Fe("#lname").textContent=_f==="pop"?__t(481):__t(482),tu()}function tu(){let i=qM[gf],t=i(ma),e=24*af;for(let n of pn)n.zt=af<=.001?.01:Math.max(.12*Math.min(1,af),e*i(uf(n))/t)*(n.inF?1:.1);Pn()}var mg=Object.fromEntries(pn.map(i=>[i.code,i])),Wh=[],Cg=[];for(let i of xa.bd){let t=mg[i.a],e=mg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Cg.push((i.p[n]-il)*ns,(i.p[n+1]-sl)*ns,0,(i.p[n+2]-il)*ns,(i.p[n+3]-sl)*ns,0),Wh.push(t,e)}var Yh=new Fi;Yh.setPositions(Cg);var xf=new ji({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),vf=new ji({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[xf,vf].forEach((i,t)=>{let e=new gr(Yh,i);e.frustumCulled=!1,e.renderOrder=10+t,ys.add(e)});function JM(){let i=Yh.attributes.instanceStart.data.array;for(let t=0;t<Wh.length;t+=2){let e=Math.max(Wh[t].z,Wh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Yh.attributes.instanceStart.data.needsUpdate=!0}var Zh={};for(let i of Object.keys(Gh)){let t=pn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,c=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),c=Math.max(c,u.cy);let h=document.createElement("div");h.className="plab",h.textContent=Gh[i],h.title=__t(483)+wg[i],h.onclick=()=>ob("pr:"+i),document.body.appendChild(h),Zh[i]={el:h,p:new X(n/e,s/e,0),cx:(r+a)/2,cy:(o+c)/2,ext:Math.max(a-r,c-o),ext2:[a-r,c-o],area:e,name:Gh[i]}}var of=new X;function KM(){for(let i in Zh){let t=Zh[i];of.copy(t.p).project(ss),t.el.style.transform=`translate(-50%,-50%) translate(${(of.x*.5+.5)*innerWidth}px,${(-of.y*.5+.5)*innerHeight}px)`}}var vn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...vn};function jM(){let i=innerWidth/innerHeight,t=Math.tan(jh*Math.PI/360);return Math.max(xa.h*ns*1.1,100*1.1/i)/(2*t)}var QM=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,Pn()});function yf(){Object.assign(ye,{tilt:0,yaw:0,dist:jM(),tx:0,ty:0}),Pn()}function tb(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=vn;ss.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ss.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ss.lookAt(n,s,0)}var nl=!0,gg=performance.now(),rl=new Map;function Pn(){nl=!0}function Rg(i){requestAnimationFrame(Rg);let t=qn((i-gg)/1e3,0,.05);gg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(vn)){let r=ye[s]-vn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(vn[s]+=r*e,n=!0):vn[s]=ye[s]}for(let s of pn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of rl){let a=(i-r)/1800;a>=1?(rl.delete(s),Sr(s)):Sr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(nl=!0),window.__mapHidden){nl=!0;return}if(n||nl){QM.style.transform=`rotate(${vn.yaw}rad) scaleY(${(.55+.45*Math.cos(vn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(484):__t(485))}tb(),JM(),KM(),window.__rodFrame&&window.__rodFrame(),al.render(ys,ss),nl=n,Fe("#tilt").value=Math.round(ye.tilt*180/Math.PI),Fe("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function Ig(){al.setSize(innerWidth,innerHeight,!1),ss.aspect=innerWidth/innerHeight,ss.updateProjectionMatrix(),xf.resolution.set(innerWidth,innerHeight),vf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Pn()}addEventListener("resize",()=>{Ig(),sn.length&&Vs()});Qn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=qn(ye.dist*Math.exp(e*.01),6,400):ye.tilt=qn(ye.tilt+e*.002,0,1.32);Pn()},{passive:!1});Qn.addEventListener("contextmenu",i=>i.preventDefault());var is=new Map,ai=null,xr=0,df=0,ff=0;var Jh=null;Qn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),sn.length&&setTimeout(Vs,50)),Qn.setPointerCapture(i.pointerId),is.set(i.pointerId,{x:i.clientX,y:i.clientY}),is.size===1&&(ai={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),is.size===2){let[t,e]=[...is.values()];xr=Math.hypot(t.x-e.x,t.y-e.y),df=Math.atan2(e.y-t.y,e.x-t.x),ff=(t.y+e.y)/2,Jh={mode:null,rot:0,sc:0,tl:0},ai&&(ai.multi=!0)}Sf()});Qn.addEventListener("pointermove",i=>{let t=is.get(i.pointerId);if(!t){xs={x:i.clientX,y:i.clientY},pf||(pf=requestAnimationFrame(nb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,is.size===2){let[s,r]=[...is.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=o-df;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let u=xr?a-xr:0,x=c-ff,f=Jh||(Jh={mode:null,rot:0,sc:0,tl:0});f.rot+=h,f.sc+=u,f.tl+=x,f.mode?f.mode==="zoom"&&Math.abs(f.rot)>.45&&(f.mode="rotate"):Math.abs(f.rot)>.3?f.mode="rotate":Math.abs(f.tl)>30&&Math.abs(f.sc)<18?f.mode="tilt":Math.abs(f.sc)>12&&(f.mode="zoom"),(f.mode==="zoom"||f.mode==="rotate")&&xr&&(ye.dist=qn(ye.dist*xr/a,6,400)),f.mode==="rotate"&&(ye.yaw+=h,vn.yaw=ye.yaw),f.mode==="tilt"&&(ye.tilt=qn(ye.tilt-x*.006,0,1.32),vn.tilt=ye.tilt),xr=a,df=o,ff=c,Pn();return}if(ai.moved+=Math.abs(e)+Math.abs(n),ai.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=qn(ye.tilt+n*.004,0,1.32),vn.yaw=ye.yaw,vn.tilt=ye.tilt;else{let s=2*vn.dist*Math.tan(jh*Math.PI/360)/innerHeight,r=Math.sin(vn.yaw),a=Math.cos(vn.yaw),o=1/Math.max(Math.cos(vn.tilt),.3);ye.tx=qn(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=qn(ye.ty-r*e*s+a*n*s*o,-70,70),vn.tx=ye.tx,vn.ty=ye.ty}Pn()});var Pg=i=>{let t=ai&&!ai.rot&&!ai.multi&&ai.moved<(ai.touch?12:6)&&i.type==="pointerup"&&is.size===1,e=ai&&ai.touch;is.delete(i.pointerId),xr=0,Jh=null,is.size||(ai=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Qn.addEventListener("pointerup",Pg);Qn.addEventListener("pointercancel",Pg);Qn.addEventListener("dblclick",yf);addEventListener("keydown",i=>{i.key==="Alt"&&(Qn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Qn.style.cursor="")});addEventListener("blur",()=>{Qn.style.cursor=""});var eb=new zo,_g=new $t,xs=null,pf=0,vr=null;function nb(){if(pf=0,!xs||ai)return;_g.set(xs.x/innerWidth*2-1,-(xs.y/innerHeight)*2+1),eb.setFromCamera(_g,ss);let i=null;if(i!==vr){let e=vr;vr=i,e&&Sr(e),i&&Sr(i),Pn()}let t=window.__rodHover&&window.__rodHover(xs.x,xs.y);if(t){_r.innerHTML=t,_r.style.display="block";let e=_r.offsetWidth,n=_r.offsetHeight;_r.style.left=qn(xs.x+14,6,innerWidth-e-6)+"px",_r.style.top=qn(xs.y+14,6,innerHeight-n-6)+"px",Qn.style.cursor="pointer"}else Sf(),Qn.style.cursor=""}Qn.addEventListener("pointerleave",()=>{if(xs=null,vr){let i=vr;vr=null,Sr(i),Pn()}Sf()});var _r=Fe("#tip");function Sf(){_r.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{_f=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Ag()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{gf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),tu()});Fe("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,Pn()};Fe("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,Pn()};Fe("#zin").onclick=()=>{ye.dist=qn(ye.dist*.75,6,400),Pn()};Fe("#zout").onclick=()=>{ye.dist=qn(ye.dist/.75,6,400),Pn()};Fe("#rst").onclick=yf;var xg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],sn=[],vg={},ib=i=>vg[i]||(vg[i]=new or({color:i}));function Lg(i,t){i.og.children.forEach(e=>e.material=t?ib(t):qh)}function Sr(i,t=0){let e=i.mat.emissive;i===vr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Mf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,o=Math.tan(jh*Math.PI/360),c=i.length===1?qn(i[0].size*3.2+14,14,120):qn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Pn()}var $s=Fe("#q"),di=Fe("#list"),nn=Fe("#mcs");function eu(i,t=!0){if(di.style.display="none",$s.value="",!i.sel){sn.length>=6&&Dg(sn[0].o,!0);let e=new Set(sn.map(s=>s.color)),n=xg.find(s=>!e.has(s))||xg[0];i.sel={o:i,color:n,tint:new fe(n).multiplyScalar(.12)},sn.push(i.sel),Lg(i,n)}nn.classList.contains("min")&&ol(!1),rl.set(i,performance.now()),Sr(i),t&&Mf([i],Math.max(ye.tilt,.9)),Vs()}function Dg(i,t){let e=sn.indexOf(i.sel);e>=0&&sn.splice(e,1),i.sel=null,Lg(i,null),Sr(i),Pn(),t||Vs()}function Ng(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=sn.map(u=>{let x=1e9,f=-1e9,y=1e9,S=-1e9;for(let I of u.o.rings)for(let m=0;m<I[0].length;m+=2)x=Math.min(x,I[0][m]),f=Math.max(f,I[0][m]),y=Math.min(y,I[0][m+1]),S=Math.max(S,I[0][m+1]);return{x0:x,x1:f,y0:y,y1:S}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;sn.forEach((u,x)=>{let f=r[x],y=(f.x0+f.x1)/2,S=(f.y0+f.y1)/2;s.beginPath();for(let I of u.o.rings)for(let m of I)for(let p=0;p<m.length;p+=2){let O=e/2+(m[p]-y)*o,B=n/2-(m[p+1]-S)*o;p?s.lineTo(O,B):s.moveTo(O,B),p===m.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let c=o/XM,h=[.5,1,2,5,10,20,50,100].find(u=>u*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function Vs(){if(!sn.length){nn.innerHTML="",nn.style.display="none",ol(!1);return}if(nn.style.display="flex",innerWidth<=640){let e=Fe("#inf").getBoundingClientRect().bottom;nn.style.top=Math.round(e+8)+"px",nn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Fe("#rc").classList.contains("min")?.7:.4),Fe("#rc").getBoundingClientRect().top-e-16))+"px",nn.style.width=""}else if(innerHeight<=500){let e=Fe("#inf").getBoundingClientRect().bottom;nn.style.top=Math.round(e+8)+"px",nn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",nn.style.width="min(290px, 40vw)"}else nn.style.top="",nn.style.maxHeight="",nn.style.width="";let i=sn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Gh[s.pr]}</em></div><div class="mb">${vs(s.pop)}${__t(491)}${ga(s.area)} km\xB2 \xB7 ${ga(s.pop/s.area)}${__t(492)}${s.rankP}${__t(493)}`}).join("");if(sn.length>1){let e=s=>Math.max(...sn.map(s)),n=[[__t(494),s=>s.o.pop,vs],[__t(495),s=>s.o.area,ga],[__t(496),s=>s.o.pop/s.o.area,ga]];if(i+=`${__t(497)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${sn.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),sn.length===2){let[s,r]=sn.map(h=>h.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],c=(h,u)=>(h>=u?h/u:u/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(498)}${c(a.pop,o.pop)}${__t(499)}${o.name}${__t(500)}${c(a.area,o.area)}\xD7 ${a.area>=o.area?__t(501):__t(502)}.</small>`}i+="</div>"}nn.innerHTML=i,nn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Dg(sn[+e.dataset.x].o)}),nn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Mf([sn[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=sn[+e.dataset.i].o;rl.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=sn.splice(s,1);sn.splice(r,0,a),Vs();let o=Fe("#sil");o&&o.classList.add("flash")}}});let t=Fe("#sil");t&&Ng(t)}$s.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch($s.value);return}let i=lf($s.value.trim());if(!i){di.style.display="none";return}let t=[],e=[];for(let s of pn){let r=lf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);di.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${vs(s.pop)}</em></li>`).join("")||__t(458),di.style.display="block",di.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>eu(n[+s.dataset.i])),di._r=n});$s.addEventListener("keydown",i=>{i.key==="Enter"&&di._pick?di._pick(0):i.key==="Enter"&&di._r&&di._r[0]&&eu(di._r[0]),i.key==="Escape"&&($s.value="",di.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==$s&&Ug()});var yg=0;addEventListener("resize",()=>{clearTimeout(yg),yg=setTimeout(()=>{let i=Fe("#sil");i&&Ng(i)},120)});var Kh=null,mf=Fe("#chip");function sb(i,t,e=.8){Kh={codes:new Set(i.map(n=>n.code)),label:t},pn.forEach(n=>{n.inF=Kh.codes.has(n.code),Qh(n)}),mf.innerHTML=`${__t(503)}${t}</b> \xB7 ${i.length}${i.length===1?__t(504):__t(505)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,mf.style.display="flex",Fe("#chx").onclick=Ug,tu(),Mf(i,e),i.slice(0,40).forEach(n=>rl.set(n,performance.now()))}function Ug(){Kh&&(Kh=null,pn.forEach(i=>{i.inF=!0,Qh(i)}),mf.style.display="none",tu())}var rb="prov";function ab(i){let t=[...pn].sort((a,o)=>o.pop-a.pop),e=[...pn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[pn.filter(a=>a.pr===s),wg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(506)]:[e.slice(0,10),__t(507)];if(n==="low")return s==="pop"?[t.slice(-10),__t(508)]:[e.slice(-10),__t(509)];if(n==="size")return[pn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${vs(+s)}${__t(510)}`:+s==0?`${__t(511)}${vs(+r)}${__t(512)}`:`${vs(+s)} \u2013 ${vs(+r-1)}${__t(512)}`];if(n==="n50"){let a=0,o=0;for(let c of t)if(a+=c.pop,o++,a>=hf/2)break;return[t.slice(0,o),`${__t(513)}`]}return[[],""]}function ob(i){let[t,e]=ab(i);t.length&&sb(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{rb=i.dataset.tab,Fe("#dbody").scrollTop=0});var yr=Fe("#rc"),Xh=Fe("#mcstab");function _a(i){yr.classList.toggle("min",i),Fe("#rcgrab span").textContent=i?__t(555):__t(556),sn.length&&Vs()}function ol(i){nn.classList.toggle("min",i),nn.style.transform="",nn.style.opacity="",Xh.classList.toggle("on",i&&sn.length>0),i&&(Xh.textContent=`\u25B8 ${sn.length} ${sn.length===1?"ficha":"fichas"}`,Xh.style.top=nn.style.top||"124px")}function bf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!nu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(o,c)>10&&(s.lock=Math.abs(o)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(o,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?o:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Fe("#rcgrab").onclick=()=>_a(!yr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&_a(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Fg=()=>innerWidth>640;bf(yr,{axis:"y",onEnd:(i,t)=>{if(!Fg())if(t>40&&!yr.classList.contains("min")){let e=Fe("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&_a(!0)}else t<-30&&yr.classList.contains("min")&&_a(!1)}});bf(yr,{axis:"x",onEnd:i=>{Fg()&&(i>50?_a(!0):i<-30&&yr.classList.contains("min")&&_a(!1))}});bf(nn,{axis:"x",onMove:i=>{i<0&&(nn.classList.add("sw"),nn.style.transform=`translateX(${i}px)`,nn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{nn.classList.remove("sw"),i<-60?(ol(!0),window.__rodHide&&!sn.length&&window.__rodHide()):(nn.style.transform="",nn.style.opacity="")}});Xh.onclick=()=>{ol(!1),Vs()};Fe("#dtoggle").onclick=()=>{let i=Fe("#dp").classList.toggle("open");Fe("#rc").classList.toggle("dopen",i),Fe("#dtoggle").textContent=i?nu.matches&&innerWidth<=640?__t(557):__t(558):__t(559),window.__rodCard&&window.__rodCard()};var nu=matchMedia("(max-width:640px), (max-height:500px)");function Og(){let i=Fe("#leg");nu.matches?Fe("#rc").insertBefore(i,Fe("#dtoggle")):document.body.appendChild(i),sn.length&&Vs()}nu.addEventListener("change",Og);Og();Ig();ZM();yf();Object.assign(vn,ye);for(let i of pn)i.z=.01;requestAnimationFrame(Rg);fg({scene:ys,camera:ss,renderer:al,goal:ye,cur:vn,invalidate:Pn,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-il)*ns,ty:(t-sl)*ns,dist:e,tilt:n}),Pn()},K:ns,CX:il,CY:sl,mcs:nn,q:$s,list:di,munis:pn,select:eu,norm:lf,fmt:vs,clamp:qn,mcsMin:ol});window.__app={scene:ys,renderer:al,camera:ss,munis:pn,labs:Zh,goal:ye,cur:vn,select:eu,get mode(){return gf}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
