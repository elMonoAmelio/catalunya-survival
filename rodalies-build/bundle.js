(()=>{var Gp=0,dd=1,Wp=2;var Ho=1,Xp=2,ha=3,Ns=0,Zn=1,qi=2,Yi=0,ua=1,fd=2,pd=3,md=4,qp=5;var ur=100,Yp=101,Zp=102,Jp=103,Kp=104,jp=200,Qp=201,tm=202,em=203,gd=204,_d=205,nm=206,im=207,sm=208,rm=209,am=210,om=211,lm=212,cm=213,hm=214,rc=0,ac=1,oc=2,Kr=3,lc=4,cc=5,hc=6,uc=7,Xc=0,um=1,dm=2,Li=0,xd=1,vd=2,yd=3,Sd=4,Md=5,bd=6,wd=7;var Ed=300,Us=301,dr=302,qc=303,Yc=304,Go=306,dc=1e3,$i=1001,fc=1002,An=1003,fm=1004;var Wo=1005;var Nn=1006,Zc=1007;var Fs=1008;var ii=1009,Td=1010,Ad=1011,da=1012,Jc=1013,Di=1014,vi=1015,Ni=1016,Kc=1017,jc=1018,fa=1020,Cd=35902,Rd=35899,Id=1021,Pd=1022,yi=1023,Hi=1026,Os=1027,Qc=1028,th=1029,Bs=1030,eh=1031;var nh=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,ih=35840,sh=35841,rh=35842,ah=35843,oh=36196,lh=37492,ch=37496,hh=37488,uh=37489,Jo=37490,dh=37491,fh=37808,ph=37809,mh=37810,gh=37811,_h=37812,xh=37813,vh=37814,yh=37815,Sh=37816,Mh=37817,bh=37818,wh=37819,Eh=37820,Th=37821,Ah=36492,Ch=36494,Rh=36495,Ih=36283,Ph=36284,Ko=36285,Lh=36286;var oo=2300,pc=2301,ic=2302,Qu=2303,td=2400,ed=2401,nd=2402;var pm=3200;var Dh=0,mm=1,ms="",li="srgb",lo="srgb-linear",co="linear",Ze="srgb";var sc=7680;var gm=519,_m=512,xm=513,vm=514,Nh=515,ym=516,Sm=517,Uh=518,Mm=519,Ld=35044;var Dd="300 es",Ri=2e3,jr=2001;function I0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function P0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bm(){let i=ho("canvas");return i.style.display="block",i}var ap={},Qr=null;function uo(...i){let t="THREE."+i.shift();Qr?Qr("log",t,...i):console.log(t,...i)}function wm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function _e(...i){i=wm(i);let t="THREE."+i.shift();if(Qr)Qr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ve(...i){i=wm(i);let t="THREE."+i.shift();if(Qr)Qr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function sr(...i){let t=i.join(" ");t in ap||(ap[t]=!0,_e(...i))}function Em(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Tm={[rc]:ac,[oc]:hc,[lc]:uc,[Kr]:cc,[ac]:rc,[hc]:oc,[uc]:lc,[cc]:Kr},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],op=1234567,io=Math.PI/180,ta=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Nd(i,t){return(i%t+t)%t}function L0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function D0(i,t,e){return i!==t?(e-i)/(t-i):0}function so(i,t,e){return(1-e)*i+e*t}function N0(i,t,e,n){return so(i,t,1-Math.exp(-e*n))}function U0(i,t=1){return t-Math.abs(Nd(i,t*2)-t)}function F0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function O0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function B0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function k0(i,t){return i+Math.random()*(t-i)}function z0(i){return i*(.5-Math.random())}function $0(i){i!==void 0&&(op=i);let t=op+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function V0(i){return i*io}function H0(i){return i*ta}function G0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function W0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function X0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function q0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),x=r((t-n)/2),f=a((t-n)/2),y=r((n-t)/2),S=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*x,c*f,o*h);break;case"YZY":i.set(c*f,o*u,c*x,o*h);break;case"ZXZ":i.set(c*x,c*f,o*u,o*h);break;case"XZX":i.set(o*u,c*S,c*y,o*h);break;case"YXY":i.set(c*y,o*u,c*S,o*h);break;case"ZYZ":i.set(c*S,c*y,o*u,o*h);break;default:_e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ud={DEG2RAD:io,RAD2DEG:ta,generateUUID:Vi,clamp:Re,euclideanModulo:Nd,mapLinear:L0,inverseLerp:D0,lerp:so,damp:N0,pingpong:U0,smoothstep:F0,smootherstep:O0,randInt:B0,randFloat:k0,randFloatSpread:z0,seededRandom:$0,degToRad:V0,radToDeg:H0,isPowerOfTwo:G0,ceilPowerOfTwo:W0,floorPowerOfTwo:X0,setQuaternionFromProperEuler:q0,normalize:je,denormalize:Ci},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],x=n[s+3],f=r[a+0],y=r[a+1],S=r[a+2],I=r[a+3];if(x!==I||c!==f||h!==y||u!==S){let m=c*f+h*y+u*S+x*I;m<0&&(f=-f,y=-y,S=-S,I=-I,m=-m);let p=1-o;if(m<.9995){let O=Math.acos(m),B=Math.sin(O);p=Math.sin(p*O)/B,o=Math.sin(o*O)/B,c=c*p+f*o,h=h*p+y*o,u=u*p+S*o,x=x*p+I*o}else{c=c*p+f*o,h=h*p+y*o,u=u*p+S*o,x=x*p+I*o;let O=1/Math.sqrt(c*c+h*h+u*u+x*x);c*=O,h*=O,u*=O,x*=O}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=x}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],x=r[a],f=r[a+1],y=r[a+2],S=r[a+3];return t[e]=o*S+u*x+c*y-h*f,t[e+1]=c*S+u*f+h*x-o*y,t[e+2]=h*S+u*y+o*f-c*x,t[e+3]=u*S-o*x-c*f-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),x=o(r/2),f=c(n/2),y=c(s/2),S=c(r/2);switch(a){case"XYZ":this._x=f*u*x+h*y*S,this._y=h*y*x-f*u*S,this._z=h*u*S+f*y*x,this._w=h*u*x-f*y*S;break;case"YXZ":this._x=f*u*x+h*y*S,this._y=h*y*x-f*u*S,this._z=h*u*S-f*y*x,this._w=h*u*x+f*y*S;break;case"ZXY":this._x=f*u*x-h*y*S,this._y=h*y*x+f*u*S,this._z=h*u*S+f*y*x,this._w=h*u*x-f*y*S;break;case"ZYX":this._x=f*u*x-h*y*S,this._y=h*y*x+f*u*S,this._z=h*u*S-f*y*x,this._w=h*u*x+f*y*S;break;case"YZX":this._x=f*u*x+h*y*S,this._y=h*y*x+f*u*S,this._z=h*u*S-f*y*x,this._w=h*u*x-f*y*S;break;case"XZY":this._x=f*u*x-h*y*S,this._y=h*y*x-f*u*S,this._z=h*u*S+f*y*x,this._w=h*u*x+f*y*S;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],x=e[10],f=n+o+x;if(f>0){let y=.5/Math.sqrt(f+1);this._w=.25/y,this._x=(u-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>o&&n>x){let y=2*Math.sqrt(1+n-o-x);this._w=(u-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(o>x){let y=2*Math.sqrt(1+o-n-x);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+u)/y}else{let y=2*Math.sqrt(1+x-n-o);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+u)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),x=2*(r*n-a*e);return this.x=e+c*h+a*x-o*u,this.y=n+c*u+o*h-r*x,this.z=s+c*x+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Au.copy(this).projectOnVector(t),this.sub(Au)}reflect(t){return this.sub(Au.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Au=new X,lp=new Wi,Te=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],x=n[7],f=n[2],y=n[5],S=n[8],I=s[0],m=s[3],p=s[6],O=s[1],B=s[4],R=s[7],w=s[2],U=s[5],G=s[8];return r[0]=a*I+o*O+c*w,r[3]=a*m+o*B+c*U,r[6]=a*p+o*R+c*G,r[1]=h*I+u*O+x*w,r[4]=h*m+u*B+x*U,r[7]=h*p+u*R+x*G,r[2]=f*I+y*O+S*w,r[5]=f*m+y*B+S*U,r[8]=f*p+y*R+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],x=u*a-o*h,f=o*c-u*r,y=h*r-a*c,S=e*x+n*f+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/S;return t[0]=x*I,t[1]=(s*h-u*n)*I,t[2]=(o*n-s*a)*I,t[3]=f*I,t[4]=(u*e-s*c)*I,t[5]=(s*r-o*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cu.makeScale(t,e)),this}rotate(t){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cu.makeRotation(-t)),this}translate(t,e){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cu=new Te,cp=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hp=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y0(){let i={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lo]:{primaries:t,whitePoint:n,transfer:co,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:n,transfer:Ze,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),i}var Fe=Y0();function fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nr,mc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Nr===void 0&&(Nr=ho("canvas")),Nr.width=t.width,Nr.height=t.height;let s=Nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Z0=0,ea=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ru(s[a].image)):r.push(Ru(s[a]))}else r=Ru(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ru(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}var J0=0,Iu=new X,ti=class i extends Gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,s=$i,r=Nn,a=Fs,o=yi,c=ii,h=i.DEFAULT_ANISOTROPY,u=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Vi(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){_e(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){_e(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Ed;ti.DEFAULT_ANISOTROPY=1;var Je=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],x=c[8],f=c[1],y=c[5],S=c[9],I=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(x-I)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(x+I)<.1&&Math.abs(S+m)<.1&&Math.abs(h+y+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(h+1)/2,R=(y+1)/2,w=(p+1)/2,U=(u+f)/4,G=(x+I)/4,T=(S+m)/4;return B>R&&B>w?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=U/n,r=G/n):R>w?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=U/s,r=T/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=G/r,s=T/r),this.set(n,s,r,e),this}let O=Math.sqrt((m-S)*(m-S)+(x-I)*(x-I)+(f-u)*(f-u));return Math.abs(O)<.001&&(O=1),this.x=(m-S)/O,this.y=(x-I)/O,this.z=(f-u)/O,this.w=Math.acos((h+y+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ti(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ea(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Be=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,h,u,x,f,y,S,I,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,x,f,y,S,I,m)}set(t,e,n,s,r,a,o,c,h,u,x,f,y,S,I,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=x,p[14]=f,p[3]=y,p[7]=S,p[11]=I,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ur.setFromMatrixColumn(t,0).length(),r=1/Ur.setFromMatrixColumn(t,1).length(),a=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),x=Math.sin(r);if(t.order==="XYZ"){let f=a*u,y=a*x,S=o*u,I=o*x;e[0]=c*u,e[4]=-c*x,e[8]=h,e[1]=y+S*h,e[5]=f-I*h,e[9]=-o*c,e[2]=I-f*h,e[6]=S+y*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,y=c*x,S=h*u,I=h*x;e[0]=f+I*o,e[4]=S*o-y,e[8]=a*h,e[1]=a*x,e[5]=a*u,e[9]=-o,e[2]=y*o-S,e[6]=I+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,y=c*x,S=h*u,I=h*x;e[0]=f-I*o,e[4]=-a*x,e[8]=S+y*o,e[1]=y+S*o,e[5]=a*u,e[9]=I-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,y=a*x,S=o*u,I=o*x;e[0]=c*u,e[4]=S*h-y,e[8]=f*h+I,e[1]=c*x,e[5]=I*h+f,e[9]=y*h-S,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,y=a*h,S=o*c,I=o*h;e[0]=c*u,e[4]=I-f*x,e[8]=S*x+y,e[1]=x,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=y*x+S,e[10]=f-I*x}else if(t.order==="XZY"){let f=a*c,y=a*h,S=o*c,I=o*h;e[0]=c*u,e[4]=-x,e[8]=h*u,e[1]=f*x+I,e[5]=a*u,e[9]=y*x-S,e[2]=S*x-y,e[6]=o*u,e[10]=I*x+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K0,t,j0)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),bs.crossVectors(n,ai),bs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),bs.crossVectors(n,ai)),bs.normalize(),Il.crossVectors(ai,bs),s[0]=bs.x,s[4]=Il.x,s[8]=ai.x,s[1]=bs.y,s[5]=Il.y,s[9]=ai.y,s[2]=bs.z,s[6]=Il.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],x=n[5],f=n[9],y=n[13],S=n[2],I=n[6],m=n[10],p=n[14],O=n[3],B=n[7],R=n[11],w=n[15],U=s[0],G=s[4],T=s[8],N=s[12],V=s[1],q=s[5],st=s[9],ot=s[13],J=s[2],Q=s[6],ct=s[10],dt=s[14],Tt=s[3],pt=s[7],Mt=s[11],St=s[15];return r[0]=a*U+o*V+c*J+h*Tt,r[4]=a*G+o*q+c*Q+h*pt,r[8]=a*T+o*st+c*ct+h*Mt,r[12]=a*N+o*ot+c*dt+h*St,r[1]=u*U+x*V+f*J+y*Tt,r[5]=u*G+x*q+f*Q+y*pt,r[9]=u*T+x*st+f*ct+y*Mt,r[13]=u*N+x*ot+f*dt+y*St,r[2]=S*U+I*V+m*J+p*Tt,r[6]=S*G+I*q+m*Q+p*pt,r[10]=S*T+I*st+m*ct+p*Mt,r[14]=S*N+I*ot+m*dt+p*St,r[3]=O*U+B*V+R*J+w*Tt,r[7]=O*G+B*q+R*Q+w*pt,r[11]=O*T+B*st+R*ct+w*Mt,r[15]=O*N+B*ot+R*dt+w*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],x=t[6],f=t[10],y=t[14],S=t[3],I=t[7],m=t[11],p=t[15],O=c*y-h*f,B=o*y-h*x,R=o*f-c*x,w=a*y-h*u,U=a*f-c*u,G=a*x-o*u;return e*(I*O-m*B+p*R)-n*(S*O-m*w+p*U)+s*(S*B-I*w+p*G)-r*(S*R-I*U+m*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],x=t[9],f=t[10],y=t[11],S=t[12],I=t[13],m=t[14],p=t[15],O=e*o-n*a,B=e*c-s*a,R=e*h-r*a,w=n*c-s*o,U=n*h-r*o,G=s*h-r*c,T=u*I-x*S,N=u*m-f*S,V=u*p-y*S,q=x*m-f*I,st=x*p-y*I,ot=f*p-y*m,J=O*ot-B*st+R*q+w*V-U*N+G*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/J;return t[0]=(o*ot-c*st+h*q)*Q,t[1]=(s*st-n*ot-r*q)*Q,t[2]=(I*G-m*U+p*w)*Q,t[3]=(f*U-x*G-y*w)*Q,t[4]=(c*V-a*ot-h*N)*Q,t[5]=(e*ot-s*V+r*N)*Q,t[6]=(m*R-S*G-p*B)*Q,t[7]=(u*G-f*R+y*B)*Q,t[8]=(a*st-o*V+h*T)*Q,t[9]=(n*V-e*st-r*T)*Q,t[10]=(S*U-I*R+p*O)*Q,t[11]=(x*R-u*U-y*O)*Q,t[12]=(o*N-a*q-c*T)*Q,t[13]=(e*q-n*N+s*T)*Q,t[14]=(I*B-S*w-m*O)*Q,t[15]=(u*w-x*B+f*O)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,x=o+o,f=r*h,y=r*u,S=r*x,I=a*u,m=a*x,p=o*x,O=c*h,B=c*u,R=c*x,w=n.x,U=n.y,G=n.z;return s[0]=(1-(I+p))*w,s[1]=(y+R)*w,s[2]=(S-B)*w,s[3]=0,s[4]=(y-R)*U,s[5]=(1-(f+p))*U,s[6]=(m+O)*U,s[7]=0,s[8]=(S+B)*G,s[9]=(m-O)*G,s[10]=(1-(f+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ur.set(s[0],s[1],s[2]).length(),o=Ur.set(s[4],s[5],s[6]).length(),c=Ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wi.copy(this);let h=1/a,u=1/o,x=1/c;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,e.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ri,c=!1){let h=this.elements,u=2*r/(e-t),x=2*r/(n-s),f=(e+t)/(e-t),y=(n+s)/(n-s),S,I;if(c)S=r/(a-r),I=a*r/(a-r);else if(o===Ri)S=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===jr)S=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ri,c=!1){let h=this.elements,u=2/(e-t),x=2/(n-s),f=-(e+t)/(e-t),y=-(n+s)/(n-s),S,I;if(c)S=1/(a-r),I=a/(a-r);else if(o===Ri)S=-2/(a-r),I=-(a+r)/(a-r);else if(o===jr)S=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ur=new X,wi=new Be,K0=new X(0,0,0),j0=new X(1,1,1),bs=new X,Il=new X,ai=new X,up=new Be,dp=new Wi,ps=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],x=s[2],f=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(f,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(o,y));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,y),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return up.makeRotationFromQuaternion(t),this.setFromRotationMatrix(up,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dp.setFromEuler(this),this.setFromQuaternion(dp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ps.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Q0=0,fp=new X,Fr=new Wi,ls=new Be,Pl=new X,Za=new X,t_=new X,e_=new Wi,pp=new X(1,0,0),mp=new X(0,1,0),gp=new X(0,0,1),_p={type:"added"},n_={type:"removed"},Or={type:"childadded",child:null},Pu={type:"childremoved",child:null},Cn=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new ps,n=new Wi,s=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Te}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(pp,t)}rotateY(t){return this.rotateOnAxis(mp,t)}rotateZ(t){return this.rotateOnAxis(gp,t)}translateOnAxis(t,e){return fp.copy(t).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pp,t)}translateY(t){return this.translateOnAxis(mp,t)}translateZ(t){return this.translateOnAxis(gp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pl.copy(t):Pl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(Za,Pl,this.up):ls.lookAt(Pl,Za,this.up),this.quaternion.setFromRotationMatrix(ls),s&&(ls.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(ls),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_p),Or.child=t,this.dispatchEvent(Or),Or.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n_),Pu.child=t,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_p),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,t,t_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let x=c[h];r(t.shapes,x)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),x=a(t.shapes),f=a(t.skeletons),y=a(t.animations),S=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),x.length>0&&(n.shapes=x),f.length>0&&(n.skeletons=f),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new X(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},i_={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let m=e.getJointPose(I,n),p=this._getHandJoint(h,I);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],f=u.position.distanceTo(x.position),y=.02,S=.005;h.inputState.pinching&&f>y+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=y-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Lu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Fe.workingColorSpace){if(t=Nd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lu(a,r,t+1/3),this.g=Lu(a,r,t),this.b=Lu(a,r,t-1/3)}return Fe.colorSpaceToWorking(this,s),this}setStyle(t,e=li){function n(r){r!==void 0&&parseFloat(r)<1&&_e("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:_e("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);_e("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let n=Am[t.toLowerCase()];return n!==void 0?this.setHex(n,e):_e("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Fe.workingToColorSpace($n.copy(this),t),Math.round(Re($n.r*255,0,255))*65536+Math.round(Re($n.g*255,0,255))*256+Math.round(Re($n.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.workingToColorSpace($n.copy(this),e);let n=$n.r,s=$n.g,r=$n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let x=a-o;switch(h=u<=.5?x/(a+o):x/(2-a-o),a){case n:c=(s-r)/x+(s<r?6:0);break;case s:c=(r-n)/x+2;break;case r:c=(n-s)/x+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Fe.workingColorSpace){return Fe.workingToColorSpace($n.copy(this),e),t.r=$n.r,t.g=$n.g,t.b=$n.b,t}getStyle(t=li){Fe.workingToColorSpace($n.copy(this),t);let e=$n.r,n=$n.g,s=$n.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+e,ws.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ws),t.getHSL(Ll);let n=so(ws.h,Ll.h,e),s=so(ws.s,Ll.s,e),r=so(ws.l,Ll.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new me;me.NAMES=Am;var po=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new X,cs=new X,Du=new X,hs=new X,Br=new X,kr=new X,xp=new X,Nu=new X,Uu=new X,Fu=new X,Ou=new Je,Bu=new Je,ku=new Je,Cs=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ei.subVectors(t,e),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ei.subVectors(s,e),cs.subVectors(n,e),Du.subVectors(t,e);let a=Ei.dot(Ei),o=Ei.dot(cs),c=Ei.dot(Du),h=cs.dot(cs),u=cs.dot(Du),x=a*h-o*o;if(x===0)return r.set(0,0,0),null;let f=1/x,y=(h*c-o*u)*f,S=(a*u-o*c)*f;return r.set(1-y-S,S,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,hs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hs.x),c.addScaledVector(a,hs.y),c.addScaledVector(o,hs.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ou.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(t,e),Bu.fromBufferAttribute(t,n),ku.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ou,r.x),a.addScaledVector(Bu,r.y),a.addScaledVector(ku,r.z),a}static isFrontFacing(t,e,n,s){return Ei.subVectors(n,e),cs.subVectors(t,e),Ei.cross(cs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Ei.cross(cs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Br.subVectors(s,n),kr.subVectors(r,n),Nu.subVectors(t,n);let c=Br.dot(Nu),h=kr.dot(Nu);if(c<=0&&h<=0)return e.copy(n);Uu.subVectors(t,s);let u=Br.dot(Uu),x=kr.dot(Uu);if(u>=0&&x<=u)return e.copy(s);let f=c*x-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Br,a);Fu.subVectors(t,r);let y=Br.dot(Fu),S=kr.dot(Fu);if(S>=0&&y<=S)return e.copy(r);let I=y*h-c*S;if(I<=0&&h>=0&&S<=0)return o=h/(h-S),e.copy(n).addScaledVector(kr,o);let m=u*S-y*x;if(m<=0&&x-u>=0&&y-S>=0)return xp.subVectors(r,s),o=(x-u)/(x-u+(y-S)),e.copy(s).addScaledVector(xp,o);let p=1/(m+I+f);return a=I*p,o=f*p,e.copy(n).addScaledVector(Br,a).addScaledVector(kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ti):Ti.fromBufferAttribute(r,a),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dl.copy(n.boundingBox)),Dl.applyMatrix4(t.matrixWorld),this.union(Dl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ja),Nl.subVectors(this.max,Ja),zr.subVectors(t.a,Ja),$r.subVectors(t.b,Ja),Vr.subVectors(t.c,Ja),Es.subVectors($r,zr),Ts.subVectors(Vr,$r),Qs.subVectors(zr,Vr);let e=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-Qs.z,Qs.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,Qs.z,0,-Qs.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-Qs.y,Qs.x,0];return!zu(e,zr,$r,Vr,Nl)||(e=[1,0,0,0,1,0,0,0,1],!zu(e,zr,$r,Vr,Nl))?!1:(Ul.crossVectors(Es,Ts),e=[Ul.x,Ul.y,Ul.z],zu(e,zr,$r,Vr,Nl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},us=[new X,new X,new X,new X,new X,new X,new X,new X],Ti=new X,Dl=new Yn,zr=new X,$r=new X,Vr=new X,Es=new X,Ts=new X,Qs=new X,Ja=new X,Nl=new X,Ul=new X,tr=new X;function zu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){tr.fromArray(i,r);let o=s.x*Math.abs(tr.x)+s.y*Math.abs(tr.y)+s.z*Math.abs(tr.z),c=t.dot(tr),h=e.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Mn=new X,Fl=new $t,s_=0,en=class extends Gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fl.fromBufferAttribute(this,e),Fl.applyMatrix3(t),this.setXY(e,Fl.x,Fl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix3(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var mo=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var go=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var gn=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},r_=new Yn,Ka=new X,$u=new X,ni=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):r_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ka.subVectors(t,this.center);let e=Ka.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ka,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ka.copy(t.center).add($u)),this.expandByPoint(Ka.copy(t.center).sub($u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},a_=0,xi=new Be,Vu=new Cn,Hr=new X,oi=new Yn,ja=new Yn,Tn=new X,_n=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?go:mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,n){return xi.makeTranslation(t,e,n),this.applyMatrix4(xi),this}scale(t,e,n){return xi.makeScale(t,e,n),this.applyMatrix4(xi),this}lookAt(t){return Vu.lookAt(t),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ja.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(oi.min,ja.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,ja.max),oi.expandByPoint(Tn)):(oi.expandByPoint(ja.min),oi.expandByPoint(ja.max))}oi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Tn.fromBufferAttribute(o,h),c&&(Hr.fromBufferAttribute(t,h),Tn.add(Hr)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let T=0;T<n.count;T++)o[T]=new X,c[T]=new X;let h=new X,u=new X,x=new X,f=new $t,y=new $t,S=new $t,I=new X,m=new X;function p(T,N,V){h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,N),x.fromBufferAttribute(n,V),f.fromBufferAttribute(r,T),y.fromBufferAttribute(r,N),S.fromBufferAttribute(r,V),u.sub(h),x.sub(h),y.sub(f),S.sub(f);let q=1/(y.x*S.y-S.x*y.y);isFinite(q)&&(I.copy(u).multiplyScalar(S.y).addScaledVector(x,-y.y).multiplyScalar(q),m.copy(x).multiplyScalar(y.x).addScaledVector(u,-S.x).multiplyScalar(q),o[T].add(I),o[N].add(I),o[V].add(I),c[T].add(m),c[N].add(m),c[V].add(m))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let T=0,N=O.length;T<N;++T){let V=O[T],q=V.start,st=V.count;for(let ot=q,J=q+st;ot<J;ot+=3)p(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}let B=new X,R=new X,w=new X,U=new X;function G(T){w.fromBufferAttribute(s,T),U.copy(w);let N=o[T];B.copy(N),B.sub(w.multiplyScalar(w.dot(N))).normalize(),R.crossVectors(U,N);let q=R.dot(c[T])<0?-1:1;a.setXYZW(T,B.x,B.y,B.z,q)}for(let T=0,N=O.length;T<N;++T){let V=O[T],q=V.start,st=V.count;for(let ot=q,J=q+st;ot<J;ot+=3)G(t.getX(ot+0)),G(t.getX(ot+1)),G(t.getX(ot+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,y=n.count;f<y;f++)n.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,h=new X,u=new X,x=new X;if(t)for(let f=0,y=t.count;f<y;f+=3){let S=t.getX(f+0),I=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,m),u.subVectors(a,r),x.subVectors(s,r),u.cross(x),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,y=e.count;f<y;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),x.subVectors(s,r),u.cross(x),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,x=o.normalized,f=new h.constructor(c.length*u),y=0,S=0;for(let I=0,m=c.length;I<m;I++){o.isInterleavedBufferAttribute?y=c[I]*o.data.stride+o.offset:y=c[I]*u;for(let p=0;p<u;p++)f[S++]=h[y++]}return new en(f,u,x)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,x=h.length;u<x;u++){let f=h[u],y=t(f,n);c.push(y)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let x=0,f=h.length;x<f;x++){let y=h[x];u.push(y.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],x=r[h];for(let f=0,y=x.length;f<y;f++)u.push(x[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let x=a[h];this.addGroup(x.start,x.count,x.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ld,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},qn=new X,Pi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hu=new X,o_=new X,l_=new Te,Ai=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hu.subVectors(n,e).cross(o_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||l_.getNormalMatrix(t),s=this.coplanarPoint(Hu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c_=0,Xi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ua,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){_e(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){_e(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ds=new X,Gu=new X,Ol=new X,Bl=new X,rr=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ds)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ds.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ds.copy(this.origin).addScaledVector(this.direction,e),ds.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gu.copy(t).add(e).multiplyScalar(.5),Ol.copy(e).sub(t).normalize(),Bl.copy(this.origin).sub(Gu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ol),o=Bl.dot(this.direction),c=-Bl.dot(Ol),h=Bl.lengthSq(),u=Math.abs(1-a*a),x,f,y,S;if(u>0)if(x=a*c-o,f=a*o-c,S=r*u,x>=0)if(f>=-S)if(f<=S){let I=1/u;x*=I,f*=I,y=x*(x+a*f+2*o)+f*(a*x+f+2*c)+h}else f=r,x=Math.max(0,-(a*f+o)),y=-x*x+f*(f+2*c)+h;else f=-r,x=Math.max(0,-(a*f+o)),y=-x*x+f*(f+2*c)+h;else f<=-S?(x=Math.max(0,-(-a*r+o)),f=x>0?-r:Math.min(Math.max(-r,-c),r),y=-x*x+f*(f+2*c)+h):f<=S?(x=0,f=Math.min(Math.max(-r,-c),r),y=f*(f+2*c)+h):(x=Math.max(0,-(a*r+o)),f=x>0?r:Math.min(Math.max(-r,-c),r),y=-x*x+f*(f+2*c)+h);else f=a>0?-r:r,x=Math.max(0,-(a*f+o)),y=-x*x+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Gu).addScaledVector(Ol,f),y}intersectSphere(t,e){if(t.radius<0)return null;ds.subVectors(t.center,this.origin);let n=ds.dot(this.direction),s=ds.dot(ds)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,x=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),x>=0?(o=(t.min.z-f.z)*x,c=(t.max.z-f.z)*x):(o=(t.max.z-f.z)*x,c=(t.min.z-f.z)*x),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ds)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,x=t.x-a.x,f=t.y-a.y,y=t.z-a.z,S=e.x-a.x,I=e.y-a.y,m=e.z-a.z,p=n.x-a.x,O=n.y-a.y,B=n.z-a.z,R=Math.abs(c),w=Math.abs(h),U=Math.abs(u),G,T,N,V,q,st,ot,J,Q,ct,dt,Tt;if(R>=w&&R>=U?(N=c,st=x,Q=S,Tt=p,c>=0?(G=h,T=u,V=f,q=y,ot=I,J=m,ct=O,dt=B):(G=u,T=h,V=y,q=f,ot=m,J=I,ct=B,dt=O)):w>=U?(N=h,st=f,Q=I,Tt=O,h>=0?(G=u,T=c,V=y,q=x,ot=m,J=S,ct=B,dt=p):(G=c,T=u,V=x,q=y,ot=S,J=m,ct=p,dt=B)):(N=u,st=y,Q=m,Tt=B,u>=0?(G=c,T=h,V=x,q=f,ot=S,J=I,ct=p,dt=O):(G=h,T=c,V=f,q=x,ot=I,J=S,ct=O,dt=p)),N===0)return null;let pt=G/N,Mt=T/N,St=1/N,qt=V-pt*st,Jt=q-Mt*st,ke=ot-pt*Q,Ie=J-Mt*Q,Ue=ct-pt*Tt,_t=dt-Mt*Tt,vt=Ue*Ie-_t*ke,Pt=qt*_t-Jt*Ue,ae=ke*Jt-Ie*qt;if(s){if(vt<0||Pt<0||ae<0)return null}else if((vt<0||Pt<0||ae<0)&&(vt>0||Pt>0||ae>0))return null;let Yt=vt+Pt+ae;if(Yt===0)return null;let fe=St*(vt*st+Pt*Q+ae*Tt);return(Yt>0?fe<0:fe>0)?null:this.at(fe/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ar=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vp=new Be,er=new rr,kl=new ni,yp=new X,zl=new X,$l=new X,Vl=new X,Wu=new X,Hl=new X,Sp=new X,Gl=new X,Rn=class extends Cn{constructor(t=new _n,e=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Hl.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],x=r[c];u!==0&&(Wu.fromBufferAttribute(x,t),a?Hl.addScaledVector(Wu,u):Hl.addScaledVector(Wu.sub(e),u))}e.add(Hl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(r),er.copy(t.ray).recast(t.near),!(kl.containsPoint(er.origin)===!1&&(er.intersectSphere(kl,yp)===null||er.origin.distanceToSquared(yp)>(t.far-t.near)**2))&&(vp.copy(r).invert(),er.copy(t.ray).applyMatrix4(vp),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,x=r.attributes.normal,f=r.groups,y=r.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let m=f[S],p=a[m.materialIndex],O=Math.max(m.start,y.start),B=Math.min(o.count,Math.min(m.start+m.count,y.start+y.count));for(let R=O,w=B;R<w;R+=3){let U=o.getX(R),G=o.getX(R+1),T=o.getX(R+2);s=Wl(this,p,t,n,h,u,x,U,G,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,y.start),I=Math.min(o.count,y.start+y.count);for(let m=S,p=I;m<p;m+=3){let O=o.getX(m),B=o.getX(m+1),R=o.getX(m+2);s=Wl(this,a,t,n,h,u,x,O,B,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let m=f[S],p=a[m.materialIndex],O=Math.max(m.start,y.start),B=Math.min(c.count,Math.min(m.start+m.count,y.start+y.count));for(let R=O,w=B;R<w;R+=3){let U=R,G=R+1,T=R+2;s=Wl(this,p,t,n,h,u,x,U,G,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let m=S,p=I;m<p;m+=3){let O=m,B=m+1,R=m+2;s=Wl(this,a,t,n,h,u,x,O,B,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function h_(i,t,e,n,s,r,a,o){let c;if(t.side===Zn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ns,o),c===null)return null;Gl.copy(o),Gl.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Gl);return h<e.near||h>e.far?null:{distance:h,point:Gl.clone(),object:i}}function Wl(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,zl),i.getVertexPosition(c,$l),i.getVertexPosition(h,Vl);let u=h_(i,t,e,n,zl,$l,Vl,Sp);if(u){let x=new X;Cs.getBarycoord(Sp,zl,$l,Vl,x),s&&(u.uv=Cs.getInterpolatedAttribute(s,o,c,h,x,new $t)),r&&(u.uv1=Cs.getInterpolatedAttribute(r,o,c,h,x,new $t)),a&&(u.normal=Cs.getInterpolatedAttribute(a,o,c,h,x,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new X,materialIndex:0};Cs.getNormal(zl,$l,Vl,f.normal),u.face=f,u.barycoord=x}return u}var _o=class extends ti{constructor(t=null,e=1,n=1,s,r,a,o,c,h=An,u=An,x,f){super(null,a,o,c,h,u,s,r,x,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xo=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gr=new Be,Mp=new Be,Xl=[],bp=new Yn,u_=new Be,Qa=new Rn,to=new ni,vo=class extends Rn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gr),bp.copy(t.boundingBox).applyMatrix4(Gr),this.boundingBox.union(bp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gr),to.copy(t.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(to)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qa.geometry=this.geometry,Qa.material=this.material,Qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),t.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),Mp.multiplyMatrices(n,Gr),Qa.matrixWorld=Mp,Qa.raycast(t,Xl);for(let a=0,o=Xl.length;a<o;a++){let c=Xl[a];c.instanceId=r,c.object=this,e.push(c)}Xl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(s*this.count),s,this.count,Qc,vi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new ni,d_=new $t(.5,.5),ql=new X,sa=class{constructor(t=new Ai,e=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],x=r[5],f=r[6],y=r[7],S=r[8],I=r[9],m=r[10],p=r[11],O=r[12],B=r[13],R=r[14],w=r[15];if(s[0].setComponents(h-a,y-u,p-S,w-O).normalize(),s[1].setComponents(h+a,y+u,p+S,w+O).normalize(),s[2].setComponents(h+o,y+x,p+I,w+B).normalize(),s[3].setComponents(h-o,y-x,p-I,w-B).normalize(),n)s[4].setComponents(c,f,m,R).normalize(),s[5].setComponents(h-c,y-f,p-m,w-R).normalize();else if(s[4].setComponents(h-c,y-f,p-m,w-R).normalize(),e===Ri)s[5].setComponents(h+c,y+f,p+m,w+R).normalize();else if(e===jr)s[5].setComponents(c,f,m,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);let e=d_.distanceTo(t.center);return nr.radius=.7071067811865476+e,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ql.x=s.normal.x>0?t.max.x:t.min.x,ql.y=s.normal.y>0?t.max.y:t.min.y,ql.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ql)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vc=new X,yc=new X,wp=new Be,eo=new rr,Yl=new ni,Xu=new X,Ep=new X,Sc=class extends Cn{constructor(t=new _n,e=new or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vc.fromBufferAttribute(e,s-1),yc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vc.distanceTo(yc);t.setAttribute("lineDistance",new gn(n,1))}else _e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,t.ray.intersectsSphere(Yl)===!1)return;wp.copy(s).invert(),eo.copy(t.ray).applyMatrix4(wp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let y=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let I=y,m=S-1;I<m;I+=h){let p=u.getX(I),O=u.getX(I+1),B=Zl(this,t,eo,c,p,O,I);B&&e.push(B)}if(this.isLineLoop){let I=u.getX(S-1),m=u.getX(y),p=Zl(this,t,eo,c,I,m,S-1);p&&e.push(p)}}else{let y=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let I=y,m=S-1;I<m;I+=h){let p=Zl(this,t,eo,c,I,I+1,I);p&&e.push(p)}if(this.isLineLoop){let I=Zl(this,t,eo,c,S-1,y,S-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(vc.fromBufferAttribute(o,s),yc.fromBufferAttribute(o,r),e.distanceSqToSegment(vc,yc,Xu,Ep)>n)return;Xu.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Xu);if(!(h<t.near||h>t.far))return{distance:h,point:Ep.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var yo=class extends Sc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Mc=class extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tp=new Be,id=new rr,Jl=new ni,Kl=new X,lr=class extends Cn{constructor(t=new _n,e=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(s),Jl.radius+=r,t.ray.intersectsSphere(Jl)===!1)return;Tp.copy(s).invert(),id.copy(t.ray).applyMatrix4(Tp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,x=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let S=f,I=y;S<I;S++){let m=h.getX(S);Kl.fromBufferAttribute(x,m),Ap(Kl,m,c,s,t,e,this)}}else{let f=Math.max(0,a.start),y=Math.min(x.count,a.start+a.count);for(let S=f,I=y;S<I;S++)Kl.fromBufferAttribute(x,S),Ap(Kl,S,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ap(i,t,e,n,s,r,a){let o=id.distanceSqToPoint(i);if(o<e){let c=new X;id.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var So=class extends ti{constructor(t=[],e=Us,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Rs=class extends ti{constructor(t,e,n=Di,s,r,a,o=An,c=An,h,u=Hi,x=1){if(u!==Hi&&u!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:x};super(f,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bc=class extends Rs{constructor(t,e=Di,n=Us,s,r,a=An,o=An,c,h=Hi){let u={width:t,height:t,depth:1},x=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mo=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ra=class i extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],x=[],f=0,y=0;S("z","y","x",-1,-1,n,e,t,a,r,0),S("z","y","x",1,-1,n,e,-t,a,r,1),S("x","z","y",1,1,t,n,e,s,a,2),S("x","z","y",1,-1,t,n,-e,s,a,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(x,2));function S(I,m,p,O,B,R,w,U,G,T,N){let V=R/G,q=w/T,st=R/2,ot=w/2,J=U/2,Q=G+1,ct=T+1,dt=0,Tt=0,pt=new X;for(let Mt=0;Mt<ct;Mt++){let St=Mt*q-ot;for(let qt=0;qt<Q;qt++){let Jt=qt*V-st;pt[I]=Jt*O,pt[m]=St*B,pt[p]=J,h.push(pt.x,pt.y,pt.z),pt[I]=0,pt[m]=0,pt[p]=U>0?1:-1,u.push(pt.x,pt.y,pt.z),x.push(qt/G),x.push(1-Mt/T),dt+=1}}for(let Mt=0;Mt<T;Mt++)for(let St=0;St<G;St++){let qt=f+St+Q*Mt,Jt=f+St+Q*(Mt+1),ke=f+(St+1)+Q*(Mt+1),Ie=f+(St+1)+Q*Mt;c.push(qt,Jt,Ie),c.push(Jt,ke,Ie),Tt+=6}o.addGroup(y,Tt,N),y+=Tt,f+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bo=class i extends _n{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],x=[],f=[],y=[],S=0,I=[],m=n/2,p=0;O(),a===!1&&(t>0&&B(!0),e>0&&B(!1)),this.setIndex(u),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(y,2));function O(){let R=new X,w=new X,U=0,G=(e-t)/n;for(let T=0;T<=r;T++){let N=[],V=T/r,q=V*(e-t)+t;for(let st=0;st<=s;st++){let ot=st/s,J=ot*c+o,Q=Math.sin(J),ct=Math.cos(J);w.x=q*Q,w.y=-V*n+m,w.z=q*ct,x.push(w.x,w.y,w.z),R.set(Q,G,ct).normalize(),f.push(R.x,R.y,R.z),y.push(ot,1-V),N.push(S++)}I.push(N)}for(let T=0;T<s;T++)for(let N=0;N<r;N++){let V=I[N][T],q=I[N+1][T],st=I[N+1][T+1],ot=I[N][T+1];(t>0||N!==0)&&(u.push(V,q,ot),U+=3),(e>0||N!==r-1)&&(u.push(q,st,ot),U+=3)}h.addGroup(p,U,0),p+=U}function B(R){let w=S,U=new $t,G=new X,T=0,N=R===!0?t:e,V=R===!0?1:-1;for(let st=1;st<=s;st++)x.push(0,m*V,0),f.push(0,V,0),y.push(.5,.5),S++;let q=S;for(let st=0;st<=s;st++){let J=st/s*c+o,Q=Math.cos(J),ct=Math.sin(J);G.x=N*ct,G.y=m*V,G.z=N*Q,x.push(G.x,G.y,G.z),f.push(0,V,0),U.x=Q*.5+.5,U.y=ct*.5*V+.5,y.push(U.x,U.y),S++}for(let st=0;st<s;st++){let ot=w+st,J=q+st;R===!0?u.push(J,J+1,ot):u.push(J+1,J,ot),T+=3}h.addGroup(p,T,R===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_e("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,y=(a-u)/f;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new $t:new X);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new X,s=[],r=[],a=[],o=new X,c=new Be;for(let y=0;y<=t;y++){let S=y/t;s[y]=this.getTangentAt(S,new X)}r[0]=new X,a[0]=new X;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),x=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),x<=h&&(h=x,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),o.crossVectors(s[y-1],s[y]),o.length()>Number.EPSILON){o.normalize();let S=Math.acos(Re(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(o,S))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Re(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(y=-y);for(let S=1;S<=t;S++)r[S].applyMatrix4(c.makeRotationAxis(s[S],y*S)),a[S].crossVectors(s[S],r[S])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},aa=class extends ci{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),x=Math.sin(this.aRotation),f=c-this.aX,y=h-this.aY;c=f*u-y*x+this.aX,h=f*x+y*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wc=class extends aa{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fd(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,x){let f=(a-r)/h-(o-r)/(h+u)+(o-a)/u,y=(o-a)/u-(c-a)/(u+x)+(c-o)/x;f*=u,y*=u,s(a,o,f,y)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Cp=new X,Rp=new X,qu=new Fd,Yu=new Fd,Zu=new Fd,Ec=class extends ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new X){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Rp.subVectors(s[0],s[1]).add(s[0]),h=Rp);let x=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Cp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cp),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,S=Math.pow(h.distanceToSquared(x),y),I=Math.pow(x.distanceToSquared(f),y),m=Math.pow(f.distanceToSquared(u),y);I<1e-4&&(I=1),S<1e-4&&(S=I),m<1e-4&&(m=I),qu.initNonuniformCatmullRom(h.x,x.x,f.x,u.x,S,I,m),Yu.initNonuniformCatmullRom(h.y,x.y,f.y,u.y,S,I,m),Zu.initNonuniformCatmullRom(h.z,x.z,f.z,u.z,S,I,m)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(h.x,x.x,f.x,u.x,this.tension),Yu.initCatmullRom(h.y,x.y,f.y,u.y,this.tension),Zu.initCatmullRom(h.z,x.z,f.z,u.z,this.tension));return n.set(qu.calc(c),Yu.calc(c),Zu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new X().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ip(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function f_(i,t){let e=1-i;return e*e*t}function p_(i,t){return 2*(1-i)*i*t}function m_(i,t){return i*i*t}function ro(i,t,e,n){return f_(i,t)+p_(i,e)+m_(i,n)}function g_(i,t){let e=1-i;return e*e*e*t}function __(i,t){let e=1-i;return 3*e*e*i*t}function x_(i,t){return 3*(1-i)*i*i*t}function v_(i,t){return i*i*i*t}function ao(i,t,e,n,s){return g_(i,t)+__(i,e)+x_(i,n)+v_(i,s)}var wo=class extends ci{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ao(t,s.x,r.x,a.x,o.x),ao(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends ci{constructor(t=new X,e=new X,n=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ao(t,s.x,r.x,a.x,o.x),ao(t,s.y,r.y,a.y,o.y),ao(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends ci{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends ci{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends ci{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ro(t,s.x,r.x,a.x),ro(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends ci{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ro(t,s.x,r.x,a.x),ro(t,s.y,r.y,a.y),ro(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],x=s[a>s.length-3?s.length-1:a+2];return n.set(Ip(o,c.x,h.x,u.x,x.x),Ip(o,c.y,h.y,u.y,x.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},sd=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Ec,CubicBezierCurve:wo,CubicBezierCurve3:Tc,EllipseCurve:aa,LineCurve:Eo,LineCurve3:Ac,QuadraticBezierCurve:To,QuadraticBezierCurve3:Cc,SplineCurve:Ao}),Rc=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sd[s.type]().fromJSON(s))}return this}},cr=class extends Rc{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Eo(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new To(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new wo(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ao(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new aa(t,e,n,s,r,a,o,c);if(this.curves.length>0){let x=h.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},oa=class extends cr{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cr().fromJSON(s))}return this}};function y_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cm(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=E_(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,x=c;for(let f=e;f<s;f+=e){let y=i[f],S=i[f+1];y<o&&(o=y),S<c&&(c=S),y>u&&(u=y),S>x&&(x=S)}h=Math.max(u-o,x-c),h=h!==0?32767/h:0}return Co(r,a,e,o,c,h,0),a}function Cm(i,t,e,n,s){let r;if(s===F_(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Pp(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Pp(a/n|0,i[a],i[a+1],r);return r&&la(r,r.next)&&(Io(r),r=r.next),r}function hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(la(e,e.next)||fn(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Co(i,t,e,n,s,r,a){if(!i)return;!a&&r&&I_(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?M_(i,n,s,r):S_(i)){t.push(c.i,i.i,h.i),Io(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=b_(hr(i),t),Co(i,t,e,n,s,r,2)):a===2&&w_(i,t,e,n,s,r):Co(hr(i),t,e,n,s,r,1);break}}}function S_(i){let t=i.prev,e=i,n=i.next;if(fn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),x=Math.min(o,c,h),f=Math.max(s,r,a),y=Math.max(o,c,h),S=n.next;for(;S!==t;){if(S.x>=u&&S.x<=f&&S.y>=x&&S.y<=y&&no(s,o,r,c,a,h,S.x,S.y)&&fn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function M_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fn(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,x=r.y,f=a.y,y=Math.min(o,c,h),S=Math.min(u,x,f),I=Math.max(o,c,h),m=Math.max(u,x,f),p=rd(y,S,t,e,n),O=rd(I,m,t,e,n),B=i.prevZ,R=i.nextZ;for(;B&&B.z>=p&&R&&R.z<=O;){if(B.x>=y&&B.x<=I&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&no(o,u,c,x,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0||(B=B.prevZ,R.x>=y&&R.x<=I&&R.y>=S&&R.y<=m&&R!==s&&R!==a&&no(o,u,c,x,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;B&&B.z>=p;){if(B.x>=y&&B.x<=I&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&no(o,u,c,x,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;R&&R.z<=O;){if(R.x>=y&&R.x<=I&&R.y>=S&&R.y<=m&&R!==s&&R!==a&&no(o,u,c,x,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function b_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!la(n,s)&&Im(n,e,e.next,s)&&Ro(n,s)&&Ro(s,n)&&(t.push(n.i,e.i,s.i),Io(e),Io(e.next),e=i=s),e=e.next}while(e!==i);return hr(e)}function w_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&D_(a,o)){let c=Pm(a,o);a=hr(a,a.next),c=hr(c,c.next),Co(a,t,e,n,s,r,0),Co(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function E_(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=Cm(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(L_(h))}s.sort(T_);for(let r=0;r<s.length;r++)e=A_(s[r],e);return e}function T_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function A_(i,t){let e=C_(i,t);if(!e)return t;let n=Pm(e,i);return hr(n,n.next),hr(e,e.next)}function C_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(la(i,e))return e;do{if(la(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let x=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(x<=n&&x>r&&(r=x,a=e.x<e.next.x?e:e.next,x===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Rm(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let x=Math.abs(s-e.y)/(n-e.x);Ro(e,i)&&(x<u||x===u&&(e.x>a.x||e.x===a.x&&R_(a,e)))&&(a=e,u=x)}e=e.next}while(e!==o);return a}function R_(i,t){return fn(i.prev,i,t.prev)<0&&fn(t.next,i,i.next)<0}function I_(i,t,e,n){let s=i;do s.z===0&&(s.z=rd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,P_(s)}function P_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function L_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rm(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function no(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Rm(i,t,e,n,s,r,a,o)}function D_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!N_(i,t)&&(Ro(i,t)&&Ro(t,i)&&U_(i,t)&&(fn(i.prev,i,t.prev)||fn(i,t.prev,t))||la(i,t)&&fn(i.prev,i,i.next)>0&&fn(t.prev,t,t.next)>0)}function fn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function la(i,t){return i.x===t.x&&i.y===t.y}function Im(i,t,e,n){let s=Ql(fn(i,t,e)),r=Ql(fn(i,t,n)),a=Ql(fn(e,n,i)),o=Ql(fn(e,n,t));return!!(s!==r&&a!==o||s===0&&jl(i,e,t)||r===0&&jl(i,n,t)||a===0&&jl(e,i,n)||o===0&&jl(e,t,n))}function jl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ql(i){return i>0?1:i<0?-1:0}function N_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Im(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ro(i,t){return fn(i.prev,i,i.next)<0?fn(i,t,i.next)>=0&&fn(i,i.prev,t)>=0:fn(i,t,i.prev)<0||fn(i,i.next,t)<0}function U_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pm(i,t){let e=ad(i.i,i.x,i.y),n=ad(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pp(i,t,e,n){let s=ad(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ad(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function F_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var od=class{static triangulate(t,e,n=2){return y_(t,e,n)}},ir=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lp(t),Dp(n,t);let a=t.length;e.forEach(Lp);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Dp(n,e[c]);let o=od.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Lp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Po=class i extends _n{constructor(t=new oa([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new gn(s,3)),this.setAttribute("uv",new gn(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,x=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,O=e.UVGenerator!==void 0?e.UVGenerator:O_,B,R=!1,w,U,G,T;if(p){B=p.getSpacedPoints(u),R=!0,f=!1;let at=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,at),U=new X,G=new X,T=new X}f||(m=0,y=0,S=0,I=0);let N=o.extractPoints(h),V=N.shape,q=N.holes;if(!ir.isClockWise(V)){V=V.reverse();for(let at=0,At=q.length;at<At;at++){let $=q[at];ir.isClockWise($)&&(q[at]=$.reverse())}}function ot(at){let $=10000000000000001e-36,Ct=at[0];for(let Bt=1;Bt<=at.length;Bt++){let he=Bt%at.length,ce=at[he],ue=ce.x-Ct.x,ye=ce.y-Ct.y,W=ue*ue+ye*ye,Ae=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(Ct.x),Math.abs(Ct.y)),be=$*Ae*Ae;if(W<=be){at.splice(he,1),Bt--;continue}Ct=ce}}ot(V),q.forEach(ot);let J=q.length,Q=V;for(let at=0;at<J;at++){let At=q[at];V=V.concat(At)}function ct(at,At,$){return At||ve("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(At,$)}let dt=V.length;function Tt(at,At,$){let Ct,Bt,he,ce=at.x-At.x,ue=at.y-At.y,ye=$.x-at.x,W=$.y-at.y,Ae=ce*ce+ue*ue,be=ce*W-ue*ye;if(Math.abs(be)>Number.EPSILON){let L=Math.sqrt(Ae),M=Math.sqrt(ye*ye+W*W),tt=At.x-ue/L,j=At.y+ce/L,mt=$.x-W/M,Dt=$.y+ye/M,Ft=((mt-tt)*W-(Dt-j)*ye)/(ce*W-ue*ye);Ct=tt+ce*Ft-at.x,Bt=j+ue*Ft-at.y;let gt=Ct*Ct+Bt*Bt;if(gt<=2)return new $t(Ct,Bt);he=Math.sqrt(gt/2)}else{let L=!1;ce>Number.EPSILON?ye>Number.EPSILON&&(L=!0):ce<-Number.EPSILON?ye<-Number.EPSILON&&(L=!0):Math.sign(ue)===Math.sign(W)&&(L=!0),L?(Ct=-ue,Bt=ce,he=Math.sqrt(Ae)):(Ct=ce,Bt=ue,he=Math.sqrt(Ae/2))}return new $t(Ct/he,Bt/he)}let pt=[];for(let at=0,At=Q.length,$=At-1,Ct=at+1;at<At;at++,$++,Ct++)$===At&&($=0),Ct===At&&(Ct=0),pt[at]=Tt(Q[at],Q[$],Q[Ct]);let Mt=[],St,qt=pt.concat();for(let at=0,At=J;at<At;at++){let $=q[at];St=[];for(let Ct=0,Bt=$.length,he=Bt-1,ce=Ct+1;Ct<Bt;Ct++,he++,ce++)he===Bt&&(he=0),ce===Bt&&(ce=0),St[Ct]=Tt($[Ct],$[he],$[ce]);Mt.push(St),qt=qt.concat(St)}let Jt;if(m===0)Jt=ir.triangulateShape(Q,q);else{let at=[],At=[];for(let $=0;$<m;$++){let Ct=$/m,Bt=y*Math.cos(Ct*Math.PI/2),he=S*Math.sin(Ct*Math.PI/2)+I;for(let ce=0,ue=Q.length;ce<ue;ce++){let ye=ct(Q[ce],pt[ce],he);Pt(ye.x,ye.y,-Bt),Ct===0&&at.push(ye)}for(let ce=0,ue=J;ce<ue;ce++){let ye=q[ce];St=Mt[ce];let W=[];for(let Ae=0,be=ye.length;Ae<be;Ae++){let L=ct(ye[Ae],St[Ae],he);Pt(L.x,L.y,-Bt),Ct===0&&W.push(L)}Ct===0&&At.push(W)}}Jt=ir.triangulateShape(at,At)}let ke=Jt.length,Ie=S+I;for(let at=0;at<dt;at++){let At=f?ct(V[at],qt[at],Ie):V[at];R?(G.copy(w.normals[0]).multiplyScalar(At.x),U.copy(w.binormals[0]).multiplyScalar(At.y),T.copy(B[0]).add(G).add(U),Pt(T.x,T.y,T.z)):Pt(At.x,At.y,0)}for(let at=1;at<=u;at++)for(let At=0;At<dt;At++){let $=f?ct(V[At],qt[At],Ie):V[At];R?(G.copy(w.normals[at]).multiplyScalar($.x),U.copy(w.binormals[at]).multiplyScalar($.y),T.copy(B[at]).add(G).add(U),Pt(T.x,T.y,T.z)):Pt($.x,$.y,x/u*at)}for(let at=m-1;at>=0;at--){let At=at/m,$=y*Math.cos(At*Math.PI/2),Ct=S*Math.sin(At*Math.PI/2)+I;for(let Bt=0,he=Q.length;Bt<he;Bt++){let ce=ct(Q[Bt],pt[Bt],Ct);Pt(ce.x,ce.y,x+$)}for(let Bt=0,he=q.length;Bt<he;Bt++){let ce=q[Bt];St=Mt[Bt];for(let ue=0,ye=ce.length;ue<ye;ue++){let W=ct(ce[ue],St[ue],Ct);R?Pt(W.x,W.y+B[u-1].y,B[u-1].x+$):Pt(W.x,W.y,x+$)}}}Ue(),_t();function Ue(){let at=s.length/3;if(f){let At=0,$=dt*At;for(let Ct=0;Ct<ke;Ct++){let Bt=Jt[Ct];ae(Bt[2]+$,Bt[1]+$,Bt[0]+$)}At=u+m*2,$=dt*At;for(let Ct=0;Ct<ke;Ct++){let Bt=Jt[Ct];ae(Bt[0]+$,Bt[1]+$,Bt[2]+$)}}else{for(let At=0;At<ke;At++){let $=Jt[At];ae($[2],$[1],$[0])}for(let At=0;At<ke;At++){let $=Jt[At];ae($[0]+dt*u,$[1]+dt*u,$[2]+dt*u)}}n.addGroup(at,s.length/3-at,0)}function _t(){let at=s.length/3,At=0;vt(Q,At),At+=Q.length;for(let $=0,Ct=q.length;$<Ct;$++){let Bt=q[$];vt(Bt,At),At+=Bt.length}n.addGroup(at,s.length/3-at,1)}function vt(at,At){let $=at.length;for(;--$>=0;){let Ct=$,Bt=$-1;Bt<0&&(Bt=at.length-1);for(let he=0,ce=u+m*2;he<ce;he++){let ue=dt*he,ye=dt*(he+1),W=At+Ct+ue,Ae=At+Bt+ue,be=At+Bt+ye,L=At+Ct+ye;Yt(W,Ae,be,L)}}}function Pt(at,At,$){c.push(at),c.push(At),c.push($)}function ae(at,At,$){fe(at),fe(At),fe($);let Ct=s.length/3,Bt=O.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);ie(Bt[0]),ie(Bt[1]),ie(Bt[2])}function Yt(at,At,$,Ct){fe(at),fe(At),fe(Ct),fe(At),fe($),fe(Ct);let Bt=s.length/3,he=O.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ie(he[0]),ie(he[1]),ie(he[3]),ie(he[1]),ie(he[2]),ie(he[3])}function fe(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function ie(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sd[s.type]().fromJSON(s)),new i(n,t.options)}},O_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new $t(r,a),new $t(o,c),new $t(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],x=t[n*3+2],f=t[s*3],y=t[s*3+1],S=t[s*3+2],I=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new $t(a,1-c),new $t(h,1-x),new $t(f,1-S),new $t(I,1-p)]:[new $t(o,1-c),new $t(u,1-x),new $t(y,1-S),new $t(m,1-p)]}};function B_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Lo=class i extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,x=t/o,f=e/c,y=[],S=[],I=[],m=[];for(let p=0;p<u;p++){let O=p*f-a;for(let B=0;B<h;B++){let R=B*x-r;S.push(R,-O,0),I.push(0,0,1),m.push(B/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let O=0;O<o;O++){let B=O+h*p,R=O+h*(p+1),w=O+1+h*(p+1),U=O+1+h*p;y.push(B,R,U),y.push(R,w,U)}this.setIndex(y),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Do=class extends _n{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new X,r=new X;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){let x=c[h],f=x.start,y=x.count;for(let S=f,I=f+y;S<I;S+=3)for(let m=0;m<3;m++){let p=o.getX(S+m),O=o.getX(S+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,O),Np(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let h=0;h<3;h++){let u=3*o+h,x=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,x),Np(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new gn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Np(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Up(s))s.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Up(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Hn(i){let t={};for(let e=0;e<i.length;e++){let n=fr(i[e]);for(let s in n)t[s]=n[s]}return t}function Up(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function k_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Od(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}var jo={clone:fr,merge:Hn},z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=k_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ic=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var No=class extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pc=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lc=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ju(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dc=class extends Is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ed:r=t,o=2*e-n;break;case nd:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ed:a=t,c=2*n-e;break;case nd:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,x=this._offsetNext,f=this._weightPrev,y=this._weightNext,S=(n-e)/(s-e),I=S*S,m=I*S,p=-f*m+2*f*I-f*S,O=(1+f)*m+(-1.5-2*f)*I+(-.5+f)*S+1,B=(-1-y)*m+(1.5+y)*I+.5*S,R=y*m-y*I;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+O*a[h+w]+B*a[c+w]+R*a[x+w];return r}},Nc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),x=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*x+a[c+f]*u;return r}},Uc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fc=class extends Is{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,x=this.outTangents;if(!u||!x){let S=(n-e)/(s-e),I=1-S;for(let m=0;m!==o;++m)r[m]=a[h+m]*I+a[c+m]*S;return r}let f=o*2,y=t-1;for(let S=0;S!==o;++S){let I=a[h+S],m=a[c+S],p=y*f+S*2,O=x[p],B=x[p+1],R=t*f+S*2,w=u[R],U=u[R+1],G=H_(n,e,O,w,s);r[S]=Lm(G,I,B,U,m)}return r}};function Lm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function V_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function H_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Lm(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=V_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ju(t.settings)&&(n.settings={inTangents:Wr(t.settings.inTangents,Array),outTangents:Wr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case pc:e=this.InterpolantFactoryMethodLinear;break;case ic:e=this.InterpolantFactoryMethodSmooth;break;case Qu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return _e("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return ic;case this.InterpolantFactoryMethodBezier:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ju(this.settings)&&(Fp(this.settings.inTangents,t),Fp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ve("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ve("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ve("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){ve("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&P0(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){ve("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ic,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let x=o*n,f=x-n,y=x+n;for(let S=0;S!==n;++S){let I=e[x+S];if(I!==e[f+S]||I!==e[y+S]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let x=o*n,f=a*n;for(let y=0;y!==n;++y)e[f+y]=e[x+y]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ju(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=pc;var Ps=class extends hi{constructor(t,e,n){super(t,e,n)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=oo;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};Oc.prototype.ValueTypeName="color";var Bc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};Bc.prototype.ValueTypeName="number";var kc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Wi.slerpFlat(r,0,a,h-o,a,h,c);return r}},Uo=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}};Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends hi{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=oo;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};zc.prototype.ValueTypeName="vector";var $c=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,x){return h.push(u,x),this},this.removeHandler=function(u){let x=h.indexOf(u);return x!==-1&&h.splice(x,2),this},this.getHandler=function(u){for(let x=0,f=h.length;x<f;x+=2){let y=h[x],S=h[x+1];if(y.global&&(y.lastIndex=0),y.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dm=new $c,Vc=class{constructor(t){this.manager=t!==void 0?t:Dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fo=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Oo=class extends Fo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ku=new Be,Op=new X,Bp=new X,Hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Op.setFromMatrixPosition(t.matrixWorld),e.position.copy(Op),Bp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ku,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===jr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Ku)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},tc=new X,ec=new Wi,zi=new X,Bo=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tc,ec,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,ec,zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(tc,ec,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,ec,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new X,kp=new $t,zp=new $t,Vn=class extends Bo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(As.x,As.y).multiplyScalar(-t/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-t/As.z)}getViewSize(t,e){return this.getViewBounds(t,kp,zp),e.subVectors(zp,kp)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ca=class extends Bo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ld=class extends Hc{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends Fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new ld}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zo=class extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Xr=-90,qr=1,Gc=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vn(Xr,qr,t,e);s.layers=this.layers,this.add(s);let r=new Vn(Xr,qr,t,e);r.layers=this.layers,this.add(r);let a=new Vn(Xr,qr,t,e);a.layers=this.layers,this.add(a);let o=new Vn(Xr,qr,t,e);o.layers=this.layers,this.add(o);let c=new Vn(Xr,qr,t,e);c.layers=this.layers,this.add(c);let h=new Vn(Xr,qr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,x=t.getRenderTarget(),f=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(x,f,y),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Wc=class extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bd="\\[\\]\\.:\\/",G_=new RegExp("["+Bd+"]","g"),kd="[^"+Bd+"]",W_="[^"+Bd.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",kd),q_=/(WCOD+)?/.source.replace("WCOD",W_),Y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kd),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kd),J_=new RegExp("^"+X_+q_+Y_+Z_+"$"),K_=["material","materials","bones","map"],cd=class{constructor(t,e,n){let s=n||ln.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ln=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G_,"")}static parseTrackName(t){let e=J_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){_e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ve("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ln.Composite=cd;ln.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ln.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ln.prototype.GetterByBindingType=[ln.prototype._getValue_direct,ln.prototype._getValue_array,ln.prototype._getValue_arrayElement,ln.prototype._getValue_toArray];ln.prototype.SetterByBindingTypeAndVersioning=[[ln.prototype._setValue_direct,ln.prototype._setValue_direct_setNeedsUpdate,ln.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_array,ln.prototype._setValue_array_setNeedsUpdate,ln.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_arrayElement,ln.prototype._setValue_arrayElement_setNeedsUpdate,ln.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_fromArray,ln.prototype._setValue_fromArray_setNeedsUpdate,ln.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ub=new Float32Array(1);var Ds=class extends xc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var $p=new Be,$o=class{constructor(t,e,n=0,s=1/0){this.ray=new rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ve("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $p.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($p),this}intersectObject(t,e=!0,n=[]){return hd(t,this,n,e),n.sort(Vp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hd(t[s],this,n,e);return n.sort(Vp),n}};function Vp(i,t){return i.distance-t.distance}function hd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hd(r[a],t,e,!0)}}var ud=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Hp=new X,nc=new X,Yr=new X,Zr=new X,ju=new X,j_=new X,Q_=new X,Vo=class{constructor(t=new X,e=new X){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hp.subVectors(t,this.start),nc.subVectors(this.end,this.start);let n=nc.dot(nc);if(n===0)return 0;let r=nc.dot(Hp)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=j_,n=Q_){let s=10000000000000001e-32,r,a,o=this.start,c=t.start,h=this.end,u=t.end;Yr.subVectors(h,o),Zr.subVectors(u,c),ju.subVectors(o,c);let x=Yr.dot(Yr),f=Zr.dot(Zr),y=Zr.dot(ju);if(x<=s&&f<=s)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(x<=s)r=0,a=y/f,a=Re(a,0,1);else{let S=Yr.dot(ju);if(f<=s)a=0,r=Re(-S/x,0,1);else{let I=Yr.dot(Zr),m=x*f-I*I;m!==0?r=Re((I*y-S*f)/m,0,1):r=0,a=(I*r+y)/f,a<0?(a=0,r=Re(-S/x,0,1)):a>1&&(a=1,r=Re((I-S)/x,0,1))}}return e.copy(o).addScaledVector(Yr,r),n.copy(c).addScaledVector(Zr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function zd(i,t,e,n){let s=tx(n);switch(e){case Id:return i*t;case Qc:return i*t/s.components*s.byteLength;case th:return i*t/s.components*s.byteLength;case Bs:return i*t*2/s.components*s.byteLength;case eh:return i*t*2/s.components*s.byteLength;case Pd:return i*t*3/s.components*s.byteLength;case yi:return i*t*4/s.components*s.byteLength;case nh:return i*t*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sh:case ah:return Math.max(i,16)*Math.max(t,8)/4;case ih:case rh:return Math.max(i,8)*Math.max(t,8)/2;case oh:case lh:case hh:case uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ch:case Jo:case dh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Th:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ah:case Ch:case Rh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ih:case Ph:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ko:case Lh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tx(i){switch(i){case ii:case Td:return{byteLength:1,components:1};case da:case Ad:case Ni:return{byteLength:2,components:1};case Kc:case jc:return{byteLength:2,components:4};case Di:case Jc:case vi:return{byteLength:4,components:1};case Cd:case Rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function eg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nx(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,x=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,u),o.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:x}}function n(o,c,h){let u=c.array,x=c.updateRanges;if(i.bindBuffer(h,o),x.length===0)i.bufferSubData(h,0,u);else{x.sort((y,S)=>y.start-S.start);let f=0;for(let y=1;y<x.length;y++){let S=x[f],I=x[y];I.start<=S.start+S.count+1?S.count=Math.max(S.count,I.start+I.count-S.start):(++f,x[f]=I)}x.length=f+1;for(let y=0,S=x.length;y<S;y++){let I=x[y];i.bufferSubData(h,I.start*u.BYTES_PER_ELEMENT,u,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
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
#endif`,rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
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
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
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
#endif`,dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gx=`#ifdef USE_IRIDESCENCE
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
#endif`,_x=`#ifdef USE_BUMPMAP
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cx=`vec3 transformedNormal = objectNormal;
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
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
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
#endif`,ev=`uniform sampler2D dfgLUT;
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fv=`#if defined( USE_POINTS_UV )
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
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`#ifdef USE_MORPHTARGETS
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
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
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
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vv=`float getShadowMask() {
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
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`#include <common>
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
}`,hy=`#if DEPTH_PACKING == 3200
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
}`,uy=`#define DISTANCE
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
}`,dy=`#define DISTANCE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,yy=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,My=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,wy=`#define NORMAL
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,Ay=`#define STANDARD
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
}`,Cy=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Iy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Ny=`uniform vec3 color;
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
}`,Uy=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:ix,alphahash_pars_fragment:sx,alphamap_fragment:rx,alphamap_pars_fragment:ax,alphatest_fragment:ox,alphatest_pars_fragment:lx,aomap_fragment:cx,aomap_pars_fragment:hx,batching_pars_vertex:ux,batching_vertex:dx,begin_vertex:fx,beginnormal_vertex:px,bsdfs:mx,iridescence_fragment:gx,bumpmap_pars_fragment:_x,clipping_planes_fragment:xx,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Sx,color_fragment:Mx,color_pars_fragment:bx,color_pars_vertex:wx,color_vertex:Ex,common:Tx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Ix,emissivemap_fragment:Px,emissivemap_pars_fragment:Lx,colorspace_fragment:Dx,colorspace_pars_fragment:Nx,envmap_fragment:Ux,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Ox,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Zx,envmap_vertex:kx,fog_vertex:zx,fog_pars_vertex:$x,fog_fragment:Vx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:qx,lights_pars_begin:Yx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Kx,lights_phong_fragment:jx,lights_phong_pars_fragment:Qx,lights_physical_fragment:tv,lights_physical_pars_fragment:ev,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:sv,lightprobes_pars_fragment:rv,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:cv,map_fragment:hv,map_pars_fragment:uv,map_particle_fragment:dv,map_particle_pars_fragment:fv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:_v,morphnormal_vertex:xv,morphtarget_pars_vertex:vv,morphtarget_vertex:yv,normal_fragment_begin:Sv,normal_fragment_maps:Mv,normal_pars_fragment:bv,normal_pars_vertex:wv,normal_vertex:Ev,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Iv,opaque_fragment:Pv,packing:Lv,premultiplied_alpha_fragment:Dv,project_vertex:Nv,dithering_fragment:Uv,dithering_pars_fragment:Fv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:zv,shadowmap_vertex:$v,shadowmask_pars_fragment:Vv,skinbase_vertex:Hv,skinning_pars_vertex:Gv,skinning_vertex:Wv,skinnormal_vertex:Xv,specularmap_fragment:qv,specularmap_pars_fragment:Yv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Jv,transmission_fragment:Kv,transmission_pars_fragment:jv,uv_pars_fragment:Qv,uv_pars_vertex:ty,uv_vertex:ey,worldpos_vertex:ny,background_vert:iy,background_frag:sy,backgroundCube_vert:ry,backgroundCube_frag:ay,cube_vert:oy,cube_frag:ly,depth_vert:cy,depth_frag:hy,distance_vert:uy,distance_frag:dy,equirect_vert:fy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:xy,meshlambert_vert:vy,meshlambert_frag:yy,meshmatcap_vert:Sy,meshmatcap_frag:My,meshnormal_vert:by,meshnormal_frag:wy,meshphong_vert:Ey,meshphong_frag:Ty,meshphysical_vert:Ay,meshphysical_frag:Cy,meshtoon_vert:Ry,meshtoon_frag:Iy,points_vert:Py,points_frag:Ly,shadow_vert:Dy,shadow_frag:Ny,sprite_vert:Uy,sprite_frag:Fy},Ht={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Jn={basic:{uniforms:Hn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Hn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Hn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Hn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Hn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Hn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Hn([Ht.points,Ht.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Hn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Hn([Ht.common,Ht.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Hn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Hn([Ht.sprite,Ht.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:Hn([Ht.common,Ht.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:Hn([Ht.lights,Ht.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Jn.physical={uniforms:Hn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Fh={r:0,b:0,g:0},Oy=new Be,ng=new Te;ng.set(-1,0,0,0,1,0,0,0,1);function By(i,t,e,n,s,r){let a=new me(0),o=s===!0?0:1,c,h,u=null,x=0,f=null;function y(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){let R=O.backgroundBlurriness>0;B=t.get(B,R)}return B}function S(O){let B=!1,R=y(O);R===null?m(a,o):R&&R.isColor&&(m(R,1),B=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(O,B){let R=y(B);R&&(R.isCubeTexture||R.mapping===Go)?(h===void 0&&(h=new Rn(new ra(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:fr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(B.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ng),h.material.toneMapped=Fe.getTransfer(R.colorSpace)!==Ze,(u!==R||x!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,x=R.version,f=i.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Rn(new Lo(2,2),new In({name:"BackgroundMaterial",uniforms:fr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=Fe.getTransfer(R.colorSpace)!==Ze,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||x!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,x=R.version,f=i.toneMapping),c.layers.enableAll(),O.unshift(c,c.geometry,c.material,0,0,null))}function m(O,B){O.getRGB(Fh,Od(i)),e.buffers.color.setClear(Fh.r,Fh.g,Fh.b,B,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(O,B=1){a.set(O),o=B,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(O){o=O,m(a,o)},render:S,addToRenderList:I,dispose:p}}function ky(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(q,st,ot,J,Q){let ct=!1,dt=x(q,J,ot,st);r!==dt&&(r=dt,h(r.object)),ct=y(q,J,ot,Q),ct&&S(q,J,ot,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,R(q,st,ot,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(q){return i.bindVertexArray(q)}function u(q){return i.deleteVertexArray(q)}function x(q,st,ot,J){let Q=J.wireframe===!0,ct=n[st.id];ct===void 0&&(ct={},n[st.id]=ct);let dt=q.isInstancedMesh===!0?q.id:0,Tt=ct[dt];Tt===void 0&&(Tt={},ct[dt]=Tt);let pt=Tt[ot.id];pt===void 0&&(pt={},Tt[ot.id]=pt);let Mt=pt[Q];return Mt===void 0&&(Mt=f(c()),pt[Q]=Mt),Mt}function f(q){let st=[],ot=[],J=[];for(let Q=0;Q<e;Q++)st[Q]=0,ot[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:ot,attributeDivisors:J,object:q,attributes:{},index:null}}function y(q,st,ot,J){let Q=r.attributes,ct=st.attributes,dt=0,Tt=ot.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let St=Q[pt],qt=ct[pt];if(qt===void 0&&(pt==="instanceMatrix"&&q.instanceMatrix&&(qt=q.instanceMatrix),pt==="instanceColor"&&q.instanceColor&&(qt=q.instanceColor)),St===void 0||St.attribute!==qt||qt&&St.data!==qt.data)return!0;dt++}return r.attributesNum!==dt||r.index!==J}function S(q,st,ot,J){let Q={},ct=st.attributes,dt=0,Tt=ot.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let St=ct[pt];St===void 0&&(pt==="instanceMatrix"&&q.instanceMatrix&&(St=q.instanceMatrix),pt==="instanceColor"&&q.instanceColor&&(St=q.instanceColor));let qt={};qt.attribute=St,St&&St.data&&(qt.data=St.data),Q[pt]=qt,dt++}r.attributes=Q,r.attributesNum=dt,r.index=J}function I(){let q=r.newAttributes;for(let st=0,ot=q.length;st<ot;st++)q[st]=0}function m(q){p(q,0)}function p(q,st){let ot=r.newAttributes,J=r.enabledAttributes,Q=r.attributeDivisors;ot[q]=1,J[q]===0&&(i.enableVertexAttribArray(q),J[q]=1),Q[q]!==st&&(i.vertexAttribDivisor(q,st),Q[q]=st)}function O(){let q=r.newAttributes,st=r.enabledAttributes;for(let ot=0,J=st.length;ot<J;ot++)st[ot]!==q[ot]&&(i.disableVertexAttribArray(ot),st[ot]=0)}function B(q,st,ot,J,Q,ct,dt){dt===!0?i.vertexAttribIPointer(q,st,ot,Q,ct):i.vertexAttribPointer(q,st,ot,J,Q,ct)}function R(q,st,ot,J){I();let Q=J.attributes,ct=ot.getAttributes(),dt=st.defaultAttributeValues;for(let Tt in ct){let pt=ct[Tt];if(pt.location>=0){let Mt=Q[Tt];if(Mt===void 0&&(Tt==="instanceMatrix"&&q.instanceMatrix&&(Mt=q.instanceMatrix),Tt==="instanceColor"&&q.instanceColor&&(Mt=q.instanceColor)),Mt!==void 0){let St=Mt.normalized,qt=Mt.itemSize,Jt=t.get(Mt);if(Jt===void 0)continue;let ke=Jt.buffer,Ie=Jt.type,Ue=Jt.bytesPerElement,_t=Ie===i.INT||Ie===i.UNSIGNED_INT||Mt.gpuType===Jc;if(Mt.isInterleavedBufferAttribute){let vt=Mt.data,Pt=vt.stride,ae=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<pt.locationSize;Yt++)p(pt.location+Yt,vt.meshPerAttribute);q.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<pt.locationSize;Yt++)m(pt.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Yt=0;Yt<pt.locationSize;Yt++)B(pt.location+Yt,qt/pt.locationSize,Ie,St,Pt*Ue,(ae+qt/pt.locationSize*Yt)*Ue,_t)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<pt.locationSize;vt++)p(pt.location+vt,Mt.meshPerAttribute);q.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<pt.locationSize;vt++)m(pt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let vt=0;vt<pt.locationSize;vt++)B(pt.location+vt,qt/pt.locationSize,Ie,St,qt*Ue,qt/pt.locationSize*vt*Ue,_t)}}else if(dt!==void 0){let St=dt[Tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(pt.location,St);break;case 3:i.vertexAttrib3fv(pt.location,St);break;case 4:i.vertexAttrib4fv(pt.location,St);break;default:i.vertexAttrib1fv(pt.location,St)}}}}O()}function w(){N();for(let q in n){let st=n[q];for(let ot in st){let J=st[ot];for(let Q in J){let ct=J[Q];for(let dt in ct)u(ct[dt].object),delete ct[dt];delete J[Q]}}delete n[q]}}function U(q){if(n[q.id]===void 0)return;let st=n[q.id];for(let ot in st){let J=st[ot];for(let Q in J){let ct=J[Q];for(let dt in ct)u(ct[dt].object),delete ct[dt];delete J[Q]}}delete n[q.id]}function G(q){for(let st in n){let ot=n[st];for(let J in ot){let Q=ot[J];if(Q[q.id]===void 0)continue;let ct=Q[q.id];for(let dt in ct)u(ct[dt].object),delete ct[dt];delete Q[q.id]}}}function T(q){for(let st in n){let ot=n[st],J=q.isInstancedMesh===!0?q.id:0,Q=ot[J];if(Q!==void 0){for(let ct in Q){let dt=Q[ct];for(let Tt in dt)u(dt[Tt].object),delete dt[Tt];delete Q[ct]}delete ot[J],Object.keys(ot).length===0&&delete n[st]}}}function N(){V(),a=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:m,disableUnusedAttributes:O}}function zy(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let y=0;y<u;y++)f+=h[y];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $y(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==yi&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(G){let T=G===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ii&&G!==vi&&!T&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(_e("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let x=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&_e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),U=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:f,maxTextures:y,maxVertexTextures:S,maxTextureSize:I,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:R,maxSamples:w,samples:U}}function Vy(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ai,o=new Te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(x,f){let y=x.length!==0||f||n!==0||s;return s=f,n=x.length,y},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,f){e=u(x,f,0)},this.setState=function(x,f,y){let S=x.clippingPlanes,I=x.clipIntersection,m=x.clipShadows,p=i.get(x);if(!s||S===null||S.length===0||r&&!m)r?u(null):h();else{let O=r?0:n,B=O*4,R=p.clippingState||null;c.value=R,R=u(S,f,B,y);for(let w=0;w!==B;++w)R[w]=e[w];p.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=O}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(x,f,y,S){let I=x!==null?x.length:0,m=null;if(I!==0){if(m=c.value,S!==!0||m===null){let p=y+I*4,O=f.matrixWorldInverse;o.getNormalMatrix(O),(m===null||m.length<p)&&(m=new Float32Array(p));for(let B=0,R=y;B!==I;++B,R+=4)a.copy(x[B]).applyMatrix4(O,o),a.normal.toArray(m,R),m[R+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,m}}var ma=4,Hy=6,Gy=20,Wy=256,Qo=new ca,Nm=new me,$d=null,Vd=0,Hd=0,Gd=!1,Xy=new X,pr=new X,Bh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xy}=r;$d=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($d,Vd,Hd),this._renderer.xr.enabled=Gd,t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$d=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ni,format:yi,colorSpace:lo,depthBuffer:!1},s=Um(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qy(r)),this._blurMaterial=Zy(r,t,e),this._ggxMaterial=Yy(r,t,e)}return s}_compileMaterial(t){let e=new Rn(new _n,t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,s,r){let c=new Vn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],x=this._renderer,f=x.autoClear,y=x.toneMapping;x.getClearColor(Nm),x.toneMapping=Li,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new ra,new ar({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,m=I.material,p=!1,O=t.background;O?O.isColor&&(m.color.copy(O),t.background=null,p=!0):(m.color.copy(Nm),p=!0);for(let B=0;B<6;B++){let R=B%3;R===0?(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[B],r.y,r.z)):R===1?(c.up.set(0,0,h[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[B],r.z)):(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[B]));let w=this._cubeSize;pa(s,R*w,B>2?w:0,w,w),x.setRenderTarget(s),p&&x.render(I,c),x.render(t,c)}x.toneMapping=y,x.autoClear=f,t.background=O}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Us||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;pa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),x=Math.sqrt(h*h-u*u),f=h*1.25,y=x*f,{_lodMax:S}=this,I=this._sizeLods[n],m=3*I*(n>S-ma?n-S+ma:0),p=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=S-e,pa(r,m,p,3*I,2*I),s.setRenderTarget(r),s.render(o,Qo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,pa(t,m,p,3*I,2*I),s.setRenderTarget(t),s.render(o,Qo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],x=3*u*(s>this._lodMax-ma?s-this._lodMax+ma:0),f=4*(this._cubeSize-u);pa(e,x,f,3*u,2*u),a.setRenderTarget(e),a.render(c,Qo)}};function qy(i){let t=[],e=[],n=i,s=i-ma+1+Hy;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,u=[c,c,h,c,h,h,c,c,h,h,c,h],x=6,f=6,y=3,S=new Float32Array(y*f*x),I=new Float32Array(y*f*x);for(let p=0;p<x;p++){let O=p%3*2/3-1,B=p>2?0:-1,R=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];S.set(R,y*f*p);for(let w=0;w<f;w++){let U=u[w*2]*2-1,G=u[w*2+1]*2-1;p===0?pr.set(1,G,U):p===1?pr.set(-U,1,-G):p===2?pr.set(-U,G,1):p===3?pr.set(-1,G,-U):p===4?pr.set(-U,-1,G):pr.set(U,G,-1),pr.toArray(I,(p*f+w)*y)}}let m=new _n;m.setAttribute("position",new en(S,y)),m.setAttribute("outputDirection",new en(I,y)),e.push(new Rn(m,null)),n>ma&&n--}return{lodMeshes:e,sizeLods:t}}function Um(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yy(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Zy(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Fm(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Om(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var kh=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ra(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Yi});r.uniforms.tEquirect.value=e;let a=new Rn(s,r),o=e.minFilter;return e.minFilter===Fs&&(e.minFilter=Nn),new Gc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Jy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,y=!1){return f==null?null:y?a(f):r(f)}function r(f){if(f&&f.isTexture){let y=f.mapping;if(y===qc||y===Yc)if(t.has(f)){let S=t.get(f).texture;return o(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let I=new kh(S.height);return I.fromEquirectangularTexture(i,f),t.set(f,I),f.addEventListener("dispose",h),o(I.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let y=f.mapping,S=y===qc||y===Yc,I=y===Us||y===dr;if(S||I){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Bh(i)),m=S?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let O=f.image;return S&&O&&O.height>0||I&&O&&c(O)?(n===null&&(n=new Bh(i)),m=S?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,y){return y===qc?f.mapping=Us:y===Yc&&(f.mapping=dr),f}function c(f){let y=0,S=6;for(let I=0;I<S;I++)f[I]!==void 0&&y++;return y===S}function h(f){let y=f.target;y.removeEventListener("dispose",h);let S=t.get(y);S!==void 0&&(t.delete(y),S.dispose())}function u(f){let y=f.target;y.removeEventListener("dispose",u);let S=e.get(y);S!==void 0&&(e.delete(y),S.dispose())}function x(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:x}}function Ky(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&sr("WebGLRenderer: "+n+" extension not supported."),s}}}function jy(i,t,e,n){let s={},r=new WeakMap;function a(x){let f=x.target;f.index!==null&&t.remove(f.index);for(let S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",a),delete s[f.id];let y=r.get(f);y&&(t.remove(y),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(x,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(x){let f=x.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER)}function h(x){let f=[],y=x.index,S=x.attributes.position,I=0;if(S===void 0)return;if(y!==null){let O=y.array;I=y.version;for(let B=0,R=O.length;B<R;B+=3){let w=O[B+0],U=O[B+1],G=O[B+2];f.push(w,U,U,G,G,w)}}else{let O=S.array;I=S.version;for(let B=0,R=O.length/3-1;B<R;B+=3){let w=B+0,U=B+1,G=B+2;f.push(w,U,U,G,G,w)}}let m=new(S.count>=65535?go:mo)(f,1);m.version=I;let p=r.get(x);p&&t.remove(p),r.set(x,m)}function u(x){let f=r.get(x);if(f){let y=x.index;y!==null&&f.version<y.version&&h(x)}else h(x);return r.get(x)}return{get:o,update:c,getWireframeAttribute:u}}function Qy(i,t,e){let n;function s(x){n=x}let r,a;function o(x){r=x.type,a=x.bytesPerElement}function c(x,f){i.drawElements(n,f,r,x*a),e.update(f,n,1)}function h(x,f,y){y!==0&&(i.drawElementsInstanced(n,f,r,x*a,y),e.update(f,n,y))}function u(x,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,x,0,y);let I=0;for(let m=0;m<y;m++)I+=f[m];e.update(I,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function tS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function eS(i,t,e){let n=new WeakMap,s=new Je;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,x=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==x){let N=function(){G.dispose(),n.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let y=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,I=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],O=o.morphAttributes.color||[],B=0;y===!0&&(B=1),S===!0&&(B=2),I===!0&&(B=3);let R=o.attributes.position.count*B,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let U=new Float32Array(R*w*4*x),G=new fo(U,R,w,x);G.type=vi,G.needsUpdate=!0;let T=B*4;for(let V=0;V<x;V++){let q=m[V],st=p[V],ot=O[V],J=R*w*4*V;for(let Q=0;Q<q.count;Q++){let ct=Q*T;y===!0&&(s.fromBufferAttribute(q,Q),U[J+ct+0]=s.x,U[J+ct+1]=s.y,U[J+ct+2]=s.z,U[J+ct+3]=0),S===!0&&(s.fromBufferAttribute(st,Q),U[J+ct+4]=s.x,U[J+ct+5]=s.y,U[J+ct+6]=s.z,U[J+ct+7]=0),I===!0&&(s.fromBufferAttribute(ot,Q),U[J+ct+8]=s.x,U[J+ct+9]=s.y,U[J+ct+10]=s.z,U[J+ct+11]=ot.itemSize===4?s.w:1)}}f={count:x,texture:G,size:new $t(R,w)},n.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let S=o.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nS(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,x=h.geometry,f=t.get(h,x);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==u&&(y.update(),r.set(y,u))}return f}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var iS={[xd]:"LINEAR_TONE_MAPPING",[vd]:"REINHARD_TONE_MAPPING",[yd]:"CINEON_TONE_MAPPING",[Sd]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[Md]:"CUSTOM_TONE_MAPPING"};function sS(i,t,e,n,s,r){let a=new ei(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new _n;h.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gn([0,2,0,0,2,0],2));let u=new Ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Rn(h,u),f=new ca(-1,1,1,-1,0,1),y=null,S=null,I=!1,m,p=null,O=[],B=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),c!==null&&c.setSize(R,w);for(let U=0;U<O.length;U++){let G=O[U];G.setSize&&G.setSize(R,w)}},this.setEffects=function(R){O=R,B=O.length>0&&O[0].isRenderPass===!0;let w=a.width,U=a.height;O.length>0&&o===null&&(o=new ei(w,U,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),c=new ei(w,U,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<O.length;G++){let T=O[G];T.setSize&&T.setSize(w,U)}},this.begin=function(R,w){if(I||R.toneMapping===Li&&O.length===0)return!1;if(p=w,w!==null){let U=w.width,G=w.height;(a.width!==U||a.height!==G)&&this.setSize(U,G)}return B===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Li,!0},this.hasRenderPass=function(){return B},this.end=function(R,w){R.toneMapping=m,I=!0;let U=a,G=o;for(let T=0;T<O.length;T++){let N=O[T];N.enabled!==!1&&(N.render(R,G,U,w),N.needsSwap!==!1&&(U=G,G=G===o?c:o))}if(y!==R.outputColorSpace||S!==R.toneMapping){y=R.outputColorSpace,S=R.toneMapping,u.defines={},Fe.getTransfer(y)===Ze&&(u.defines.SRGB_TRANSFER="");let T=iS[S];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(p),R.render(x,f),p=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var ig=new ti,qd=new Rs(1,1),sg=new fo,rg=new _c,ag=new So,Bm=[],km=[],zm=new Float32Array(16),$m=new Float32Array(9),Vm=new Float32Array(4);function _a(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bm[s];if(r===void 0&&(r=new Float32Array(s),Bm[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function bn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function wn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vh(i,t){let e=km[t];e===void 0&&(e=new Int32Array(t),km[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function aS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2fv(this.addr,t),wn(e,t)}}function oS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(bn(e,t))return;i.uniform3fv(this.addr,t),wn(e,t)}}function lS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4fv(this.addr,t),wn(e,t)}}function cS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;Vm.set(n),i.uniformMatrix2fv(this.addr,!1,Vm),wn(e,n)}}function hS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;$m.set(n),i.uniformMatrix3fv(this.addr,!1,$m),wn(e,n)}}function uS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;zm.set(n),i.uniformMatrix4fv(this.addr,!1,zm),wn(e,n)}}function dS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2iv(this.addr,t),wn(e,t)}}function pS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;i.uniform3iv(this.addr,t),wn(e,t)}}function mS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4iv(this.addr,t),wn(e,t)}}function gS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _S(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2uiv(this.addr,t),wn(e,t)}}function xS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;i.uniform3uiv(this.addr,t),wn(e,t)}}function vS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4uiv(this.addr,t),wn(e,t)}}function yS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qd.compareFunction=e.isReversedDepthBuffer()?Uh:Nh,r=qd):r=ig,e.setTexture2D(t||r,s)}function SS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rg,s)}function MS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ag,s)}function bS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sg,s)}function wS(i){switch(i){case 5126:return rS;case 35664:return aS;case 35665:return oS;case 35666:return lS;case 35674:return cS;case 35675:return hS;case 35676:return uS;case 5124:case 35670:return dS;case 35667:case 35671:return fS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return xS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return bS}}function ES(i,t){i.uniform1fv(this.addr,t)}function TS(i,t){let e=_a(t,this.size,2);i.uniform2fv(this.addr,e)}function AS(i,t){let e=_a(t,this.size,3);i.uniform3fv(this.addr,e)}function CS(i,t){let e=_a(t,this.size,4);i.uniform4fv(this.addr,e)}function RS(i,t){let e=_a(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function IS(i,t){let e=_a(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function PS(i,t){let e=_a(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function LS(i,t){i.uniform1iv(this.addr,t)}function DS(i,t){i.uniform2iv(this.addr,t)}function NS(i,t){i.uniform3iv(this.addr,t)}function US(i,t){i.uniform4iv(this.addr,t)}function FS(i,t){i.uniform1uiv(this.addr,t)}function OS(i,t){i.uniform2uiv(this.addr,t)}function BS(i,t){i.uniform3uiv(this.addr,t)}function kS(i,t){i.uniform4uiv(this.addr,t)}function zS(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=qd:a=ig;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function $S(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rg,r[a])}function VS(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ag,r[a])}function HS(i,t,e){let n=this.cache,s=t.length,r=Vh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sg,r[a])}function GS(i){switch(i){case 5126:return ES;case 35664:return TS;case 35665:return AS;case 35666:return CS;case 35674:return RS;case 35675:return IS;case 35676:return PS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return NS;case 35669:case 35673:return US;case 5125:return FS;case 36294:return OS;case 36295:return BS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return HS}}var Yd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wS(e.type)}},Zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=GS(e.type)}},Jd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wd=/(\w+)(\])?(\[|\.)?/g;function Hm(i,t){i.seq.push(t),i.map[t.id]=t}function WS(i,t,e){let n=i.name,s=n.length;for(Wd.lastIndex=0;;){let r=Wd.exec(n),a=Wd.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Hm(e,h===void 0?new Yd(o,i,t):new Zd(o,i,t));break}else{let x=e.map[o];x===void 0&&(x=new Jd(o),Hm(e,x)),e=x}}}var ga=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);WS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Gm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var XS=37297,qS=0;function YS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wm=new Te;function ZS(i){Fe._getMatrix(Wm,Fe.workingColorSpace,i);let t=`mat3( ${Wm.elements.map(e=>e.toFixed(4))} )`;switch(Fe.getTransfer(i)){case co:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+YS(i.getShaderSource(t),o)}else return r}function JS(i,t){let e=ZS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var KS={[xd]:"Linear",[vd]:"Reinhard",[yd]:"Cineon",[Sd]:"ACESFilmic",[bd]:"AgX",[wd]:"Neutral",[Md]:"Custom"};function jS(i,t){let e=KS[t];return e===void 0?(_e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oh=new X;function QS(){Fe.getLuminanceCoefficients(Oh);let i=Oh.x.toFixed(4),t=Oh.y.toFixed(4),e=Oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function eM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function el(i){return i!==""}function qm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ym(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(i){return i.replace(iM,rM)}var sM=new Map;function rM(i,t){let e=Le[t];if(e===void 0){let n=sM.get(t);if(n!==void 0)e=Le[n],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kd(e)}var aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(i){return i.replace(aM,oM)}function oM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var lM={[Ho]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function cM(i){return lM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hM={[Us]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};function uM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var dM={[dr]:"ENVMAP_MODE_REFRACTION"};function fM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pM={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[um]:"ENVMAP_BLENDING_MIX",[dm]:"ENVMAP_BLENDING_ADD"};function mM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pM[i.combine]||"ENVMAP_BLENDING_NONE"}function gM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _M(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=cM(e),h=uM(e),u=fM(e),x=mM(e),f=gM(e),y=tM(e),S=eM(r),I=s.createProgram(),m,p,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(el).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(el).join(`
`),p.length>0&&(p+=`
`)):(m=[Jm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),p=[Jm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+x:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Le.tonemapping_pars_fragment:"",e.toneMapping!==Li?jS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,JS("linearToOutputTexel",e.outputColorSpace),QS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(el).join(`
`)),a=Kd(a),a=qm(a,e),a=Ym(a,e),o=Kd(o),o=qm(o,e),o=Ym(o,e),a=Zm(a),o=Zm(o),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,m=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=O+m+a,R=O+p+o,w=Gm(s,s.VERTEX_SHADER,B),U=Gm(s,s.FRAGMENT_SHADER,R);s.attachShader(I,w),s.attachShader(I,U),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(q){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(I)||"",ot=s.getShaderInfoLog(w)||"",J=s.getShaderInfoLog(U)||"",Q=st.trim(),ct=ot.trim(),dt=J.trim(),Tt=!0,pt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,w,U);else{let Mt=Xm(s,w,"vertex"),St=Xm(s,U,"fragment");ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Q+`
`+Mt+`
`+St)}else Q!==""?_e("WebGLProgram: Program Info Log:",Q):(ct===""||dt==="")&&(pt=!1);pt&&(q.diagnostics={runnable:Tt,programLog:Q,vertexShader:{log:ct,prefix:m},fragmentShader:{log:dt,prefix:p}})}s.deleteShader(w),s.deleteShader(U),T=new ga(s,I),N=nM(s,I)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(I,XS)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qS++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=w,this.fragmentShader=U,this}var xM=0,jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qd(t),e.set(t,n)),n}},Qd=class{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}};function vM(i){return i===Bs||i===Jo||i===Ko}function yM(i,t,e,n,s,r){let a=new na,o=new jd,c=new Set,h=[],u=new Map,x=n.logarithmicDepthBuffer,f=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function I(T,N,V,q,st,ot){let J=q.fog,Q=st.geometry,ct=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,dt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Tt=t.get(T.envMap||ct,dt),pt=Tt&&Tt.mapping===Go?Tt.image.height:null,Mt=y[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&_e("WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,qt=St!==void 0?St.length:0,Jt=0;Q.morphAttributes.position!==void 0&&(Jt=1),Q.morphAttributes.normal!==void 0&&(Jt=2),Q.morphAttributes.color!==void 0&&(Jt=3);let ke,Ie,Ue,_t;if(Mt){let qe=Jn[Mt];ke=qe.vertexShader,Ie=qe.fragmentShader}else{ke=T.vertexShader,Ie=T.fragmentShader;let qe=o.getVertexShaderStage(T),we=o.getFragmentShaderStage(T);o.update(T,qe,we),Ue=qe.id,_t=we.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),ae=st.isInstancedMesh===!0,Yt=st.isBatchedMesh===!0,fe=!!T.map,ie=!!T.matcap,at=!!Tt,At=!!T.aoMap,$=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Bt=!!T.normalMap,he=!!T.displacementMap,ce=!!T.emissiveMap,ue=!!T.metalnessMap,ye=!!T.roughnessMap,W=T.anisotropy>0,Ae=T.clearcoat>0,be=T.dispersion>0,L=T.retroreflectivity>0,M=T.iridescence>0,tt=T.sheen>0,j=T.transmission>0,mt=W&&!!T.anisotropyMap,Dt=Ae&&!!T.clearcoatMap,Ft=Ae&&!!T.clearcoatNormalMap,gt=Ae&&!!T.clearcoatRoughnessMap,yt=M&&!!T.iridescenceMap,kt=M&&!!T.iridescenceThicknessMap,se=tt&&!!T.sheenColorMap,Xt=tt&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,re=!!T.specularColorMap,pe=!!T.specularIntensityMap,Se=j&&!!T.transmissionMap,K=j&&!!T.thicknessMap,Ut=!!T.gradientMap,xt=!!T.alphaMap,zt=T.alphaTest>0,Zt=!!T.alphaHash,wt=!!T.extensions,oe=Li;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(oe=i.toneMapping);let te={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:ke,fragmentShader:Ie,defines:T.defines,customVertexShaderID:Ue,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&st._colorsTexture!==null,instancing:ae,instancingColor:ae&&st.instanceColor!==null,instancingMorph:ae&&st.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:ie,envMap:at,envMapMode:at&&Tt.mapping,envMapCubeUVHeight:pt,aoMap:At,lightMap:$,bumpMap:Ct,normalMap:Bt,displacementMap:he,emissiveMap:ce,normalMapObjectSpace:Bt&&T.normalMapType===mm,normalMapTangentSpace:Bt&&T.normalMapType===Dh,packedNormalMap:Bt&&T.normalMapType===Dh&&vM(T.normalMap.format),metalnessMap:ue,roughnessMap:ye,anisotropy:W,anisotropyMap:mt,clearcoat:Ae,clearcoatMap:Dt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:gt,dispersion:be,retroreflection:L,iridescence:M,iridescenceMap:yt,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:se,sheenRoughnessMap:Xt,specularMap:Gt,specularColorMap:re,specularIntensityMap:pe,transmission:j,transmissionMap:Se,thicknessMap:K,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===ua&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:zt,alphaHash:Zt,combine:T.combine,mapUv:fe&&S(T.map.channel),aoMapUv:At&&S(T.aoMap.channel),lightMapUv:$&&S(T.lightMap.channel),bumpMapUv:Ct&&S(T.bumpMap.channel),normalMapUv:Bt&&S(T.normalMap.channel),displacementMapUv:he&&S(T.displacementMap.channel),emissiveMapUv:ce&&S(T.emissiveMap.channel),metalnessMapUv:ue&&S(T.metalnessMap.channel),roughnessMapUv:ye&&S(T.roughnessMap.channel),anisotropyMapUv:mt&&S(T.anisotropyMap.channel),clearcoatMapUv:Dt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:se&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&S(T.sheenRoughnessMap.channel),specularMapUv:Gt&&S(T.specularMap.channel),specularColorMapUv:re&&S(T.specularColorMap.channel),specularIntensityMapUv:pe&&S(T.specularIntensityMap.channel),transmissionMapUv:Se&&S(T.transmissionMap.channel),thicknessMapUv:K&&S(T.thicknessMap.channel),alphaMapUv:xt&&S(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Bt||W),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!Q.attributes.uv&&(fe||xt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Pt,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Jt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&Fe.getTransfer(T.map.colorSpace)===Ze,decodeVideoTextureEmissive:ce&&T.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(T.emissiveMap.colorSpace)===Ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:wt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&T.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function m(T){let N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(let V in T.defines)N.push(V),N.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(p(N,T),O(N,T),N.push(i.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function p(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numSunLights),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numSunLightShadows),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function O(T,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),T.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),T.push(a.mask)}function B(T){let N=y[T.type],V;if(N){let q=Jn[N];V=jo.clone(q.uniforms)}else V=T.uniforms;return V}function R(T,N){let V=u.get(N);return V!==void 0?++V.usedTimes:(V=new _M(i,N,T,s),h.push(V),u.set(N,V)),V}function w(T){if(--T.usedTimes===0){let N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),u.delete(T.cacheKey),T.destroy()}}function U(T){o.remove(T)}function G(){o.dispose()}return{getParameters:I,getProgramCacheKey:m,getUniforms:B,acquireProgram:R,releaseProgram:w,releaseShaderCache:U,programs:h,dispose:G}}function SM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function MM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let y=0;return f.isInstancedMesh&&(y+=2),f.isSkinnedMesh&&(y+=1),y}function o(f,y,S,I,m,p){let O=i[t];return O===void 0?(O={id:f.id,object:f,geometry:y,material:S,materialVariant:a(f),groupOrder:I,renderOrder:f.renderOrder,z:m,group:p},i[t]=O):(O.id=f.id,O.object=f,O.geometry=y,O.material=S,O.materialVariant=a(f),O.groupOrder=I,O.renderOrder=f.renderOrder,O.z=m,O.group=p),t++,O}function c(f,y,S,I,m,p,O){O.reversedDepth===!0&&(m=-m);let B=o(f,y,S,I,m,p);S.transmission>0?n.push(B):S.transparent===!0?s.push(B):e.push(B)}function h(f,y,S,I,m,p){let O=o(f,y,S,I,m,p);S.transmission>0?n.unshift(O):S.transparent===!0?s.unshift(O):e.unshift(O)}function u(f,y){e.length>1&&e.sort(f||MM),n.length>1&&n.sort(y||Km),s.length>1&&s.sort(y||Km)}function x(){for(let f=t,y=i.length;f<y;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:x,sort:u}}function bM(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new jm,i.set(n,[a])):s>=r.length?(a=new jm,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new me};break;case"SpotLight":e={position:new X,direction:new X,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function EM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var TM=0;function AM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function CM(i){let t=new wM,e=EM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);let s=new X,r=new Be,a=new Be;function o(h){let u=0,x=0,f=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let y=0,S=0,I=0,m=0,p=0,O=0,B=0,R=0,w=0,U=0,G=0,T=0,N=0,V=0;h.sort(AM);for(let st=0,ot=h.length;st<ot;st++){let J=h[st],Q=J.color,ct=J.intensity,dt=J.distance,Tt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Bs?Tt=J.shadow.map.texture:Tt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)u+=Q.r*ct,x+=Q.g*ct,f+=Q.b*ct;else if(J.isLightProbe){for(let pt=0;pt<9;pt++)n.probe[pt].addScaledVector(J.sh.coefficients[pt],ct);V++}else if(J.isSunLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[S]=St,n.sunShadowMap[S]=Tt;let qt=Mt.getViewportCount();for(let Jt=0;Jt<qt;Jt++)n.sunShadowMatrix[I+Jt]=Mt.getMatrix(Jt),n.sunShadowCascade[I+Jt]=Mt._cascadeData[Jt];I+=qt,S++}n.sun[y]=pt,y++}else if(J.isDirectionalLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.directionalShadow[m]=St,n.directionalShadowMap[m]=Tt,n.directionalShadowMatrix[m]=J.shadow.matrix,w++}n.directional[m]=pt,m++}else if(J.isSpotLight){let pt=t.get(J);pt.position.setFromMatrixPosition(J.matrixWorld),pt.color.copy(Q).multiplyScalar(ct),pt.distance=dt,pt.coneCos=Math.cos(J.angle),pt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),pt.decay=J.decay,n.spot[O]=pt;let Mt=J.shadow;if(J.map&&(n.spotLightMap[T]=J.map,T++,Mt.updateMatrices(J),J.castShadow&&N++),n.spotLightMatrix[O]=Mt.matrix,J.castShadow){let St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.spotShadow[O]=St,n.spotShadowMap[O]=Tt,G++}O++}else if(J.isRectAreaLight){let pt=t.get(J);pt.color.copy(Q).multiplyScalar(ct),pt.halfWidth.set(J.width*.5,0,0),pt.halfHeight.set(0,J.height*.5,0),n.rectArea[B]=pt,B++}else if(J.isPointLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),pt.distance=J.distance,pt.decay=J.decay,J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,St.shadowCameraNear=Mt.camera.near,St.shadowCameraFar=Mt.camera.far,n.pointShadow[p]=St,n.pointShadowMap[p]=Tt,n.pointShadowMatrix[p]=J.shadow.matrix,U++}n.point[p]=pt,p++}else if(J.isHemisphereLight){let pt=t.get(J);pt.skyColor.copy(J.color).multiplyScalar(ct),pt.groundColor.copy(J.groundColor).multiplyScalar(ct),n.hemi[R]=pt,R++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=x,n.ambient[2]=f;let q=n.hash;(q.sunLength!==y||q.directionalLength!==m||q.pointLength!==p||q.spotLength!==O||q.rectAreaLength!==B||q.hemiLength!==R||q.numSunShadows!==S||q.numDirectionalShadows!==w||q.numPointShadows!==U||q.numSpotShadows!==G||q.numSpotMaps!==T||q.numLightProbes!==V)&&(n.sun.length=y,n.directional.length=m,n.spot.length=O,n.rectArea.length=B,n.point.length=p,n.hemi.length=R,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=U,n.pointShadowMap.length=U,n.pointShadowMatrix.length=U,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+T-N,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=V,q.sunLength=y,q.directionalLength=m,q.pointLength=p,q.spotLength=O,q.rectAreaLength=B,q.hemiLength=R,q.numSunShadows=S,q.numDirectionalShadows=w,q.numPointShadows=U,q.numSpotShadows=G,q.numSpotMaps=T,q.numLightProbes=V,n.version=TM++)}function c(h,u){let x=0,f=0,y=0,S=0,I=0,m=0,p=u.matrixWorldInverse;for(let O=0,B=h.length;O<B;O++){let R=h[O];if(R.isSunLight){let w=n.sun[x];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(p),x++}else if(R.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(R.isSpotLight){let w=n.spot[S];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),S++}else if(R.isRectAreaLight){let w=n.rectArea[I];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(R.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let w=n.point[y];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(p),y++}else if(R.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Qm(i){let t=new CM(i),e=[],n=[],s=[];function r(f){x.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function h(){t.setup(e)}function u(f){t.setupView(e,f)}let x={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:x,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function RM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qm(i),t.set(s,[o])):r>=a.length?(o=new Qm(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
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
}`,LM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],DM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],tg=new Be,tl=new X,Xd=new X;function NM(i,t,e){let n=new sa,s=new $t,r=new $t,a=new Je,o=new Pc,c=new Lc,h={},u=e.maxTextureSize,x={[Ns]:Zn,[Zn]:Ns,[qi]:qi},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:IM,fragmentShader:PM}),y=f.clone();y.defines.HORIZONTAL_PASS=1;let S=new _n;S.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Rn(S,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let p=this.type;this.render=function(U,G,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;this.type===Xp&&(_e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ho);let N=i.getRenderTarget(),V=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),st=i.state;st.setBlending(Yi),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let ot=p!==this.type;ot&&G.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=U.length;J<Q;J++){let ct=U[J],dt=ct.shadow;if(dt===void 0){_e("WebGLShadowMap:",ct,"has no shadow.");continue}if(dt.autoUpdate===!1&&dt.needsUpdate===!1)continue;s.copy(dt.mapSize);let Tt=dt.getFrameExtents();s.multiply(Tt),r.copy(dt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Tt.x),s.x=r.x*Tt.x,dt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Tt.y),s.y=r.y*Tt.y,dt.mapSize.y=r.y));let pt=i.state.buffers.depth.getReversed();if(dt.camera._reversedDepth=pt,dt.map===null||ot===!0){if(dt.map!==null&&(dt.map.depthTexture!==null&&(dt.map.depthTexture.dispose(),dt.map.depthTexture=null),dt.map.dispose()),this.type===ha){if(ct.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}dt.map=new ei(s.x,s.y,{format:Bs,type:Ni,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),dt.map.texture.name=ct.name+".shadowMap",dt.map.depthTexture=new Rs(s.x,s.y,vi),dt.map.depthTexture.name=ct.name+".shadowMapDepth",dt.map.depthTexture.format=Hi,dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=An,dt.map.depthTexture.magFilter=An}else ct.isPointLight?(dt.map=new kh(s.x),dt.map.depthTexture=new bc(s.x,Di)):(dt.map=new ei(s.x,s.y),dt.map.depthTexture=new Rs(s.x,s.y,Di)),dt.map.depthTexture.name=ct.name+".shadowMap",dt.map.depthTexture.format=Hi,this.type===Ho?(dt.map.depthTexture.compareFunction=pt?Uh:Nh,dt.map.depthTexture.minFilter=Nn,dt.map.depthTexture.magFilter=Nn):(dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=An,dt.map.depthTexture.magFilter=An);dt.camera.updateProjectionMatrix()}dt.map.isWebGLCubeRenderTarget!==!0&&(dt.map.width!==s.x||dt.map.height!==s.y)&&dt.map.setSize(s.x,s.y);let Mt=dt.map.isWebGLCubeRenderTarget?6:dt.getViewportCount();ct.isPointLight!==!0&&dt.updateMatrices(ct,T);for(let St=0;St<Mt;St++){let qt=dt.getCamera(St);if(ct.isPointLight){let Jt=dt.camera,ke=dt.matrix,Ie=ct.distance||Jt.far;Ie!==Jt.far&&(Jt.far=Ie,Jt.updateProjectionMatrix()),tl.setFromMatrixPosition(ct.matrixWorld),Jt.position.copy(tl),Xd.copy(Jt.position),Xd.add(LM[St]),Jt.up.copy(DM[St]),Jt.lookAt(Xd),Jt.updateMatrixWorld(),ke.makeTranslation(-tl.x,-tl.y,-tl.z),tg.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),dt._frustum.setFromProjectionMatrix(tg,Jt.coordinateSystem,Jt.reversedDepth)}if(dt.map.isWebGLCubeRenderTarget)i.setRenderTarget(dt.map,St),i.clear();else{St===0&&(i.setRenderTarget(dt.map),i.clear());let Jt=dt.getViewport(St);a.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),st.viewport(a)}n=dt.getFrustum(St),R(G,T,qt,ct,this.type)}dt.isPointLightShadow!==!0&&this.type===ha&&O(dt,T),dt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,V,q)};function O(U,G){let T=t.update(I);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new ei(s.x,s.y,{format:Bs,type:Ni}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),f.uniforms.shadow_pass.value=U.map.depthTexture,f.uniforms.resolution.value.set(U.map.width,U.map.height),f.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(G,null,T,f,I,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(G,null,T,y,I,null)}function B(U,G,T,N){let V=null,q=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(q!==void 0)V=q;else if(V=T.isPointLight===!0?c:o,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let st=V.uuid,ot=G.uuid,J=h[st];J===void 0&&(J={},h[st]=J);let Q=J[ot];Q===void 0&&(Q=V.clone(),J[ot]=Q,G.addEventListener("dispose",w)),V=Q}if(V.visible=G.visible,V.wireframe=G.wireframe,N===ha?V.side=G.shadowSide!==null?G.shadowSide:G.side:V.side=G.shadowSide!==null?G.shadowSide:x[G.side],V.alphaMap=G.alphaMap,V.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,V.map=G.map,V.clipShadows=G.clipShadows,V.clippingPlanes=G.clippingPlanes,V.clipIntersection=G.clipIntersection,V.displacementMap=G.displacementMap,V.displacementScale=G.displacementScale,V.displacementBias=G.displacementBias,V.wireframeLinewidth=G.wireframeLinewidth,V.linewidth=G.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let st=i.properties.get(V);st.light=T}return V}function R(U,G,T,N,V){if(U.visible===!1)return;if(U.layers.test(G.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===ha)&&(!U.frustumCulled||U.intersectsFrustum(n))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);let ot=t.update(U),J=U.material;if(Array.isArray(J)){let Q=ot.groups;for(let ct=0,dt=Q.length;ct<dt;ct++){let Tt=Q[ct],pt=J[Tt.materialIndex];if(pt&&pt.visible){let Mt=B(U,pt,N,V);U.onBeforeShadow(i,U,G,T,ot,Mt,Tt),i.renderBufferDirect(T,null,ot,Mt,U,Tt),U.onAfterShadow(i,U,G,T,ot,Mt,Tt)}}}else if(J.visible){let Q=B(U,J,N,V);U.onBeforeShadow(i,U,G,T,ot,Q,null),i.renderBufferDirect(T,null,ot,Q,U,null),U.onAfterShadow(i,U,G,T,ot,Q,null)}}let st=U.children;for(let ot=0,J=st.length;ot<J;ot++)R(st[ot],G,T,N,V)}function w(U){U.target.removeEventListener("dispose",w);for(let T in h){let N=h[T],V=U.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function UM(i,t){function e(){let K=!1,Ut=new Je,xt=null,zt=new Je(0,0,0,0);return{setMask:function(Zt){xt!==Zt&&!K&&(i.colorMask(Zt,Zt,Zt,Zt),xt=Zt)},setLocked:function(Zt){K=Zt},setClear:function(Zt,wt,oe,te,qe){qe===!0&&(Zt*=te,wt*=te,oe*=te),Ut.set(Zt,wt,oe,te),zt.equals(Ut)===!1&&(i.clearColor(Zt,wt,oe,te),zt.copy(Ut))},reset:function(){K=!1,xt=null,zt.set(-1,0,0,0)}}}function n(){let K=!1,Ut=!1,xt=null,zt=null,Zt=null;return{setReversed:function(wt){if(Ut!==wt){let oe=t.get("EXT_clip_control");wt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Ut=wt;let te=Zt;Zt=null,this.setClear(te)}},getReversed:function(){return Ut},setTest:function(wt){wt?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(wt){xt!==wt&&!K&&(i.depthMask(wt),xt=wt)},setFunc:function(wt){if(Ut&&(wt=Tm[wt]),zt!==wt){switch(wt){case rc:i.depthFunc(i.NEVER);break;case ac:i.depthFunc(i.ALWAYS);break;case oc:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case lc:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=wt}},setLocked:function(wt){K=wt},setClear:function(wt){Zt!==wt&&(Zt=wt,Ut&&(wt=1-wt),i.clearDepth(wt))},reset:function(){K=!1,xt=null,zt=null,Zt=null,Ut=!1}}}function s(){let K=!1,Ut=null,xt=null,zt=null,Zt=null,wt=null,oe=null,te=null,qe=null;return{setTest:function(we){K||(we?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(we){Ut!==we&&!K&&(i.stencilMask(we),Ut=we)},setFunc:function(we,mn,yn){(xt!==we||zt!==mn||Zt!==yn)&&(i.stencilFunc(we,mn,yn),xt=we,zt=mn,Zt=yn)},setOp:function(we,mn,yn){(wt!==we||oe!==mn||te!==yn)&&(i.stencilOp(we,mn,yn),wt=we,oe=mn,te=yn)},setLocked:function(we){K=we},setClear:function(we){qe!==we&&(i.clearStencil(we),qe=we)},reset:function(){K=!1,Ut=null,xt=null,zt=null,Zt=null,wt=null,oe=null,te=null,qe=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},x={},f={},y=new WeakMap,S=[],I=null,m=!1,p=null,O=null,B=null,R=null,w=null,U=null,G=null,T=new me(0,0,0),N=0,V=!1,q=null,st=null,ot=null,J=null,Q=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,Tt=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),dt=Tt>=1):pt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),dt=Tt>=2);let Mt=null,St={},qt=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),ke=new Je().fromArray(qt),Ie=new Je().fromArray(Jt);function Ue(K,Ut,xt,zt){let Zt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(K,wt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<xt;oe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Zt):i.texImage2D(Ut+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Zt);return wt}let _t={};_t[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(Kr),Ct(!1),Bt(dd),vt(i.CULL_FACE),At(Yi);function vt(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function Pt(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function ae(K,Ut){return f[K]!==Ut?(i.bindFramebuffer(K,Ut),f[K]=Ut,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ut),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Yt(K,Ut){let xt=S,zt=!1;if(K){xt=y.get(Ut),xt===void 0&&(xt=[],y.set(Ut,xt));let Zt=K.textures;if(xt.length!==Zt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,oe=Zt.length;wt<oe;wt++)xt[wt]=i.COLOR_ATTACHMENT0+wt;xt.length=Zt.length,zt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(xt)}function fe(K){return I!==K?(i.useProgram(K),I=K,!0):!1}let ie={[ur]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[Zp]:i.FUNC_REVERSE_SUBTRACT};ie[Jp]=i.MIN,ie[Kp]=i.MAX;let at={[jp]:i.ZERO,[Qp]:i.ONE,[tm]:i.SRC_COLOR,[gd]:i.SRC_ALPHA,[am]:i.SRC_ALPHA_SATURATE,[sm]:i.DST_COLOR,[nm]:i.DST_ALPHA,[em]:i.ONE_MINUS_SRC_COLOR,[_d]:i.ONE_MINUS_SRC_ALPHA,[rm]:i.ONE_MINUS_DST_COLOR,[im]:i.ONE_MINUS_DST_ALPHA,[om]:i.CONSTANT_COLOR,[lm]:i.ONE_MINUS_CONSTANT_COLOR,[cm]:i.CONSTANT_ALPHA,[hm]:i.ONE_MINUS_CONSTANT_ALPHA};function At(K,Ut,xt,zt,Zt,wt,oe,te,qe,we){if(K===Yi){m===!0&&(Pt(i.BLEND),m=!1);return}if(m===!1&&(vt(i.BLEND),m=!0),K!==qp){if(K!==p||we!==V){if((O!==ur||w!==ur)&&(i.blendEquation(i.FUNC_ADD),O=ur,w=ur),we)switch(K){case ua:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fd:i.blendFunc(i.ONE,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ve("WebGLState: Invalid blending: ",K);break}else switch(K){case ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pd:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case md:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",K);break}B=null,R=null,U=null,G=null,T.set(0,0,0),N=0,p=K,V=we}return}Zt=Zt||Ut,wt=wt||xt,oe=oe||zt,(Ut!==O||Zt!==w)&&(i.blendEquationSeparate(ie[Ut],ie[Zt]),O=Ut,w=Zt),(xt!==B||zt!==R||wt!==U||oe!==G)&&(i.blendFuncSeparate(at[xt],at[zt],at[wt],at[oe]),B=xt,R=zt,U=wt,G=oe),(te.equals(T)===!1||qe!==N)&&(i.blendColor(te.r,te.g,te.b,qe),T.copy(te),N=qe),p=K,V=!1}function $(K,Ut){K.side===qi?Pt(i.CULL_FACE):vt(i.CULL_FACE);let xt=K.side===Zn;Ut&&(xt=!xt),Ct(xt),K.blending===ua&&K.transparent===!1?At(Yi):At(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let zt=K.stencilWrite;o.setTest(zt),zt&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ce(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(K){q!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),q=K)}function Bt(K){K!==Gp?(vt(i.CULL_FACE),K!==st&&(K===dd?i.cullFace(i.BACK):K===Wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),st=K}function he(K){K!==ot&&(dt&&i.lineWidth(K),ot=K)}function ce(K,Ut,xt){K?(vt(i.POLYGON_OFFSET_FILL),(J!==Ut||Q!==xt)&&(J=Ut,Q=xt,a.getReversed()&&(Ut=-Ut),i.polygonOffset(Ut,xt))):Pt(i.POLYGON_OFFSET_FILL)}function ue(K){K?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function ye(K){K===void 0&&(K=i.TEXTURE0+ct-1),Mt!==K&&(i.activeTexture(K),Mt=K)}function W(K,Ut,xt){xt===void 0&&(Mt===null?xt=i.TEXTURE0+ct-1:xt=Mt);let zt=St[xt];zt===void 0&&(zt={type:void 0,texture:void 0},St[xt]=zt),(zt.type!==K||zt.texture!==Ut)&&(Mt!==xt&&(i.activeTexture(xt),Mt=xt),i.bindTexture(K,Ut||_t[K]),zt.type=K,zt.texture=Ut)}function Ae(){let K=St[Mt];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(K){ve("WebGLState:",K)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(K){ve("WebGLState:",K)}}function M(){try{i.texSubImage2D(...arguments)}catch(K){ve("WebGLState:",K)}}function tt(){try{i.texSubImage3D(...arguments)}catch(K){ve("WebGLState:",K)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(K){ve("WebGLState:",K)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(K){ve("WebGLState:",K)}}function Dt(){try{i.texStorage2D(...arguments)}catch(K){ve("WebGLState:",K)}}function Ft(){try{i.texStorage3D(...arguments)}catch(K){ve("WebGLState:",K)}}function gt(){try{i.texImage2D(...arguments)}catch(K){ve("WebGLState:",K)}}function yt(){try{i.texImage3D(...arguments)}catch(K){ve("WebGLState:",K)}}function kt(K){return x[K]!==void 0?x[K]:i.getParameter(K)}function se(K,Ut){x[K]!==Ut&&(i.pixelStorei(K,Ut),x[K]=Ut)}function Xt(K){ke.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ke.copy(K))}function Gt(K){Ie.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Ie.copy(K))}function re(K,Ut){let xt=h.get(Ut);xt===void 0&&(xt=new WeakMap,h.set(Ut,xt));let zt=xt.get(K);zt===void 0&&(zt=i.getUniformBlockIndex(Ut,K.name),xt.set(K,zt))}function pe(K,Ut){let zt=h.get(Ut).get(K);c.get(Ut)!==zt&&(i.uniformBlockBinding(Ut,zt,K.__bindingPointIndex),c.set(Ut,zt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},x={},Mt=null,St={},f={},y=new WeakMap,S=[],I=null,m=!1,p=null,O=null,B=null,R=null,w=null,U=null,G=null,T=new me(0,0,0),N=0,V=!1,q=null,st=null,ot=null,J=null,Q=null,ke.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Pt,bindFramebuffer:ae,drawBuffers:Yt,useProgram:fe,setBlending:At,setMaterial:$,setFlipSided:Ct,setCullFace:Bt,setLineWidth:he,setPolygonOffset:ce,setScissorTest:ue,activeTexture:ye,bindTexture:W,unbindTexture:Ae,compressedTexImage2D:be,compressedTexImage3D:L,texImage2D:gt,texImage3D:yt,pixelStorei:se,getParameter:kt,updateUBOMapping:re,uniformBlockBinding:pe,texStorage2D:Dt,texStorage3D:Ft,texSubImage2D:M,texSubImage3D:tt,compressedTexSubImage2D:j,compressedTexSubImage3D:mt,scissor:Xt,viewport:Gt,reset:Se}}function FM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,u=new WeakMap,x=new Set,f,y=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(L,M){return S?new OffscreenCanvas(L,M):ho("canvas")}function m(L,M,tt){let j=1,mt=be(L);if((mt.width>tt||mt.height>tt)&&(j=tt/Math.max(mt.width,mt.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Dt=Math.floor(j*mt.width),Ft=Math.floor(j*mt.height);f===void 0&&(f=I(Dt,Ft));let gt=M?I(Dt,Ft):f;return gt.width=Dt,gt.height=Ft,gt.getContext("2d").drawImage(L,0,0,Dt,Ft),_e("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Dt+"x"+Ft+")."),gt}else return"data"in L&&_e("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),L;return L}function p(L){return L.generateMipmaps}function O(L){i.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,M,tt,j,mt,Dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ft;j&&(Ft=t.get("EXT_texture_norm16"),Ft||_e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=M;if(M===i.RED&&(tt===i.FLOAT&&(gt=i.R32F),tt===i.HALF_FLOAT&&(gt=i.R16F),tt===i.UNSIGNED_BYTE&&(gt=i.R8),tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.R16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.R16_SNORM_EXT)),M===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.R8UI),tt===i.UNSIGNED_SHORT&&(gt=i.R16UI),tt===i.UNSIGNED_INT&&(gt=i.R32UI),tt===i.BYTE&&(gt=i.R8I),tt===i.SHORT&&(gt=i.R16I),tt===i.INT&&(gt=i.R32I)),M===i.RG&&(tt===i.FLOAT&&(gt=i.RG32F),tt===i.HALF_FLOAT&&(gt=i.RG16F),tt===i.UNSIGNED_BYTE&&(gt=i.RG8),tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.RG16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),tt===i.UNSIGNED_INT&&(gt=i.RG32UI),tt===i.BYTE&&(gt=i.RG8I),tt===i.SHORT&&(gt=i.RG16I),tt===i.INT&&(gt=i.RG32I)),M===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),tt===i.UNSIGNED_INT&&(gt=i.RGB32UI),tt===i.BYTE&&(gt=i.RGB8I),tt===i.SHORT&&(gt=i.RGB16I),tt===i.INT&&(gt=i.RGB32I)),M===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),tt===i.BYTE&&(gt=i.RGBA8I),tt===i.SHORT&&(gt=i.RGBA16I),tt===i.INT&&(gt=i.RGBA32I)),M===i.RGB&&(tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.RGB16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),M===i.RGBA){let yt=Dt?co:Fe.getTransfer(mt);tt===i.FLOAT&&(gt=i.RGBA32F),tt===i.HALF_FLOAT&&(gt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(gt=yt===Ze?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.RGBA16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function w(L,M){let tt;return L?M===null||M===Di||M===fa?tt=i.DEPTH24_STENCIL8:M===vi?tt=i.DEPTH32F_STENCIL8:M===da&&(tt=i.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===fa?tt=i.DEPTH_COMPONENT24:M===vi?tt=i.DEPTH_COMPONENT32F:M===da&&(tt=i.DEPTH_COMPONENT16),tt}function U(L,M){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function G(L){let M=L.target;M.removeEventListener("dispose",G),N(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&x.delete(M)}function T(L){let M=L.target;M.removeEventListener("dispose",T),q(M)}function N(L){let M=n.get(L);if(M.__webglInit===void 0)return;let tt=L.source,j=y.get(tt);if(j){let mt=j[M.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&V(L),Object.keys(j).length===0&&y.delete(tt)}n.remove(L)}function V(L){let M=n.get(L);i.deleteTexture(M.__webglTexture);let tt=L.source,j=y.get(tt);delete j[M.__cacheKey],a.memory.textures--}function q(L){let M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let mt=0;mt<M.__webglFramebuffer[j].length;mt++)i.deleteFramebuffer(M.__webglFramebuffer[j][mt]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let tt=L.textures;for(let j=0,mt=tt.length;j<mt;j++){let Dt=n.get(tt[j]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(tt[j])}n.remove(L)}let st=0;function ot(){st=0}function J(){return st}function Q(L){st=L}function ct(){let L=st;return L>=s.maxTextures&&_e("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,L}function dt(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Tt(L,M){let tt=n.get(L);if(L.isVideoTexture&&W(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&tt.__version!==L.version){let j=L.image;if(j===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)_e("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(tt,L,M);return}}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+M)}function pt(L,M){let tt=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){Pt(tt,L,M);return}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+M)}function Mt(L,M){let tt=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){Pt(tt,L,M);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+M)}function St(L,M){let tt=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&tt.__version!==L.version){ae(tt,L,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+M)}let qt={[dc]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},Jt={[An]:i.NEAREST,[fm]:i.NEAREST_MIPMAP_NEAREST,[Wo]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Zc]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},ke={[_m]:i.NEVER,[Mm]:i.ALWAYS,[xm]:i.LESS,[Nh]:i.LEQUAL,[vm]:i.EQUAL,[Uh]:i.GEQUAL,[ym]:i.GREATER,[Sm]:i.NOTEQUAL};function Ie(L,M){if(M.type===vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Zc||M.magFilter===Wo||M.magFilter===Fs||M.minFilter===Nn||M.minFilter===Zc||M.minFilter===Wo||M.minFilter===Fs)&&_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,qt[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,qt[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,qt[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Jt[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Jt[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Wo&&M.minFilter!==Fs||M.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(L,M){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",G));let j=M.source,mt=y.get(j);mt===void 0&&(mt={},y.set(j,mt));let Dt=dt(M);if(Dt!==L.__cacheKey){mt[Dt]===void 0&&(mt[Dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),mt[Dt].usedTimes++;let Ft=mt[L.__cacheKey];Ft!==void 0&&(mt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&V(M)),L.__cacheKey=Dt,L.__webglTexture=mt[Dt].texture}return tt}function _t(L,M,tt){return Math.floor(Math.floor(L/tt)/M)}function vt(L,M,tt,j){let Dt=L.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,tt,j,M.data);else{Dt.sort((se,Xt)=>se.start-Xt.start);let Ft=0;for(let se=1;se<Dt.length;se++){let Xt=Dt[Ft],Gt=Dt[se],re=Xt.start+Xt.count,pe=_t(Gt.start,M.width,4),Se=_t(Xt.start,M.width,4);Gt.start<=re+1&&pe===Se&&_t(Gt.start+Gt.count-1,M.width,4)===pe?Xt.count=Math.max(Xt.count,Gt.start+Gt.count-Xt.start):(++Ft,Dt[Ft]=Gt)}Dt.length=Ft+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),yt=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let se=0,Xt=Dt.length;se<Xt;se++){let Gt=Dt[se],re=Math.floor(Gt.start/4),pe=Math.ceil(Gt.count/4),Se=re%M.width,K=Math.floor(re/M.width),Ut=pe,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,Se,K,Ut,xt,tt,j,M.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Pt(L,M,tt){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);let mt=Ue(L,M),Dt=M.source;e.bindTexture(j,L.__webglTexture,i.TEXTURE0+tt);let Ft=n.get(Dt);if(Dt.version!==Ft.__version||mt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let xt=Fe.getPrimaries(Fe.workingColorSpace),zt=M.colorSpace===ms?null:Fe.getPrimaries(M.colorSpace),Zt=M.colorSpace===ms||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let yt=m(M.image,!1,s.maxTextureSize);yt=Ae(M,yt);let kt=r.convert(M.format,M.colorSpace),se=r.convert(M.type),Xt=R(M.internalFormat,kt,se,M.normalized,M.colorSpace,M.isVideoTexture);Ie(j,M);let Gt,re=M.mipmaps,pe=M.isVideoTexture!==!0,Se=Ft.__version===void 0||mt===!0,K=Dt.dataReady,Ut=U(M,yt);if(M.isDepthTexture)Xt=w(M.format===Os,M.type),Se&&(pe?e.texStorage2D(i.TEXTURE_2D,1,Xt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,kt,se,null));else if(M.isDataTexture)if(re.length>0){pe&&Se&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,re[0].width,re[0].height);for(let xt=0,zt=re.length;xt<zt;xt++)Gt=re[xt],pe?K&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,se,Gt.data):e.texImage2D(i.TEXTURE_2D,xt,Xt,Gt.width,Gt.height,0,kt,se,Gt.data);M.generateMipmaps=!1}else pe?(Se&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,yt.width,yt.height),K&&vt(M,yt,kt,se)):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,kt,se,yt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){pe&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Xt,re[0].width,re[0].height,yt.depth);for(let xt=0,zt=re.length;xt<zt;xt++)if(Gt=re[xt],M.format!==yi)if(kt!==null)if(pe){if(K)if(M.layerUpdates.size>0){let Zt=zd(Gt.width,Gt.height,M.format,M.type);for(let wt of M.layerUpdates){let oe=Gt.data.subarray(wt*Zt/Gt.data.BYTES_PER_ELEMENT,(wt+1)*Zt/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,wt,Gt.width,Gt.height,1,kt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Gt.width,Gt.height,yt.depth,kt,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Xt,Gt.width,Gt.height,yt.depth,0,Gt.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Gt.width,Gt.height,yt.depth,kt,se,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Xt,Gt.width,Gt.height,yt.depth,0,kt,se,Gt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{pe&&Se&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,re[0].width,re[0].height);for(let xt=0,zt=re.length;xt<zt;xt++)Gt=re[xt],M.format!==yi?kt!==null?pe?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Xt,Gt.width,Gt.height,0,Gt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?K&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,se,Gt.data):e.texImage2D(i.TEXTURE_2D,xt,Xt,Gt.width,Gt.height,0,kt,se,Gt.data)}else if(M.isDataArrayTexture)if(pe){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Xt,yt.width,yt.height,yt.depth),K)if(M.layerUpdates.size>0){let xt=zd(yt.width,yt.height,M.format,M.type);for(let zt of M.layerUpdates){let Zt=yt.data.subarray(zt*xt/yt.data.BYTES_PER_ELEMENT,(zt+1)*xt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,yt.width,yt.height,1,kt,se,Zt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,kt,se,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,kt,se,yt.data);else if(M.isData3DTexture)pe?(Se&&e.texStorage3D(i.TEXTURE_3D,Ut,Xt,yt.width,yt.height,yt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,kt,se,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,kt,se,yt.data);else if(M.isFramebufferTexture){if(Se)if(pe)e.texStorage2D(i.TEXTURE_2D,Ut,Xt,yt.width,yt.height);else{let xt=yt.width,zt=yt.height;for(let Zt=0;Zt<Ut;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,Xt,xt,zt,0,kt,se,null),xt>>=1,zt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),yt.parentNode!==xt){xt.appendChild(yt),x.add(M),xt.onpaint=zt=>{let Zt=zt.changedElements;for(let wt of x)Zt.includes(wt.image)&&(wt.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,yt);else{let Zt=i.RGBA,wt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,wt,oe,yt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(re.length>0){if(pe&&Se){let xt=be(re[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Xt,xt.width,xt.height)}for(let xt=0,zt=re.length;xt<zt;xt++)Gt=re[xt],pe?K&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt,se,Gt):e.texImage2D(i.TEXTURE_2D,xt,Xt,kt,se,Gt);M.generateMipmaps=!1}else if(pe){if(Se){let xt=be(yt);e.texStorage2D(i.TEXTURE_2D,Ut,Xt,xt.width,xt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,se,yt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,kt,se,yt);p(M)&&O(j),Ft.__version=Dt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ae(L,M,tt){if(M.image.length!==6)return;let j=Ue(L,M),mt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+tt);let Dt=n.get(mt);if(mt.version!==Dt.__version||j===!0){e.activeTexture(i.TEXTURE0+tt);let Ft=Fe.getPrimaries(Fe.workingColorSpace),gt=M.colorSpace===ms?null:Fe.getPrimaries(M.colorSpace),yt=M.colorSpace===ms||Ft===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let kt=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Xt=[];for(let wt=0;wt<6;wt++)!kt&&!se?Xt[wt]=m(M.image[wt],!0,s.maxCubemapSize):Xt[wt]=se?M.image[wt].image:M.image[wt],Xt[wt]=Ae(M,Xt[wt]);let Gt=Xt[0],re=r.convert(M.format,M.colorSpace),pe=r.convert(M.type),Se=R(M.internalFormat,re,pe,M.normalized,M.colorSpace),K=M.isVideoTexture!==!0,Ut=Dt.__version===void 0||j===!0,xt=mt.dataReady,zt=U(M,Gt);Ie(i.TEXTURE_CUBE_MAP,M);let Zt;if(kt){K&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Se,Gt.width,Gt.height);for(let wt=0;wt<6;wt++){Zt=Xt[wt].mipmaps;for(let oe=0;oe<Zt.length;oe++){let te=Zt[oe];M.format!==yi?re!==null?K?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe,0,0,te.width,te.height,re,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe,Se,te.width,te.height,0,te.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe,0,0,te.width,te.height,re,pe,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe,Se,te.width,te.height,0,re,pe,te.data)}}}else{if(Zt=M.mipmaps,K&&Ut){Zt.length>0&&zt++;let wt=be(Xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Se,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(se){K?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Xt[wt].width,Xt[wt].height,re,pe,Xt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Se,Xt[wt].width,Xt[wt].height,0,re,pe,Xt[wt].data);for(let oe=0;oe<Zt.length;oe++){let qe=Zt[oe].image[wt].image;K?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe+1,0,0,qe.width,qe.height,re,pe,qe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe+1,Se,qe.width,qe.height,0,re,pe,qe.data)}}else{K?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,re,pe,Xt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Se,re,pe,Xt[wt]);for(let oe=0;oe<Zt.length;oe++){let te=Zt[oe];K?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe+1,0,0,re,pe,te.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,oe+1,Se,re,pe,te.image[wt])}}}p(M)&&O(i.TEXTURE_CUBE_MAP),Dt.__version=mt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Yt(L,M,tt,j,mt,Dt){let Ft=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),yt=R(tt.internalFormat,Ft,gt,tt.normalized,tt.colorSpace),kt=n.get(M),se=n.get(tt);if(se.__renderTarget=M,!kt.__hasExternalTextures){let Xt=Math.max(1,M.width>>Dt),Gt=Math.max(1,M.height>>Dt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,Dt,yt,Xt,Gt,M.depth,0,Ft,gt,null):e.texImage2D(mt,Dt,yt,Xt,Gt,0,Ft,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ye(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,mt,se.__webglTexture,0,ue(M)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,mt,se.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(L,M,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){let j=M.depthTexture,mt=j&&j.isDepthTexture?j.type:null,Dt=w(M.stencilBuffer,mt),Ft=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(M),Dt,M.width,M.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(M),Dt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,L)}else{let j=M.textures;for(let mt=0;mt<j.length;mt++){let Dt=j[mt],Ft=r.convert(Dt.format,Dt.colorSpace),gt=r.convert(Dt.type),yt=R(Dt.internalFormat,Ft,gt,Dt.normalized,Dt.colorSpace);ye(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(M),yt,M.width,M.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(M),yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(L,M,tt){let j=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=n.get(M.depthTexture);if(mt.__renderTarget=M,(!mt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,M.depthTexture.addEventListener("dispose",G)),mt.__webglTexture===void 0){mt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,M.depthTexture);let kt=r.convert(M.depthTexture.format),se=r.convert(M.depthTexture.type),Xt;M.depthTexture.format===Hi?Xt=i.DEPTH_COMPONENT24:M.depthTexture.format===Os&&(Xt=i.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Xt,M.width,M.height,0,kt,se,null)}}else Tt(M.depthTexture,0);let Dt=mt.__webglTexture,Ft=ue(M),gt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,yt=M.depthTexture.format===Os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Hi)ye(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,gt,Dt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,yt,gt,Dt,0);else if(M.depthTexture.format===Os)ye(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,gt,Dt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,yt,gt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(L){let M=n.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let mt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",mt)};j.addEventListener("dispose",mt),M.__depthDisposeCallback=mt}M.__boundDepthTexture=j}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(tt)for(let j=0;j<6;j++)ie(M.__webglFramebuffer[j],L,j);else{let j=L.texture.mipmaps;j&&j.length>0?ie(M.__webglFramebuffer[0],L,0):ie(M.__webglFramebuffer,L,0)}else if(tt){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),fe(M.__webglDepthbuffer[j],L,!1);else{let mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Dt)}}else{let j=L.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),fe(M.__webglDepthbuffer,L,!1);else{let mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,M,tt){let j=n.get(L);M!==void 0&&Yt(j.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&at(L)}function $(L){let M=L.texture,tt=n.get(L),j=n.get(M);L.addEventListener("dispose",T);let mt=L.textures,Dt=L.isWebGLCubeRenderTarget===!0,Ft=mt.length>1;if(Ft||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),Dt){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(M.mipmaps&&M.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)tt.__webglFramebuffer[gt][yt]=i.createFramebuffer()}else tt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<M.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let gt=0,yt=mt.length;gt<yt;gt++){let kt=n.get(mt[gt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&ye(L)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){let yt=mt[gt];tt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);let kt=r.convert(yt.format,yt.colorSpace),se=r.convert(yt.type),Xt=R(yt.internalFormat,kt,se,yt.normalized,yt.colorSpace,L.isXRRenderTarget===!0),Gt=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Xt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(tt.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,M);for(let gt=0;gt<6;gt++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Yt(tt.__webglFramebuffer[gt][yt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else Yt(tt.__webglFramebuffer[gt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(M)&&O(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,yt=mt.length;gt<yt;gt++){let kt=mt[gt],se=n.get(kt),Xt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Xt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Xt,se.__webglTexture),Ie(Xt,kt),Yt(tt.__webglFramebuffer,L,kt,i.COLOR_ATTACHMENT0+gt,Xt,0),p(kt)&&O(Xt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(gt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,j.__webglTexture),Ie(gt,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Yt(tt.__webglFramebuffer[yt],L,M,i.COLOR_ATTACHMENT0,gt,yt);else Yt(tt.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,gt,0);p(M)&&O(gt),e.unbindTexture()}L.depthBuffer&&at(L)}function Ct(L){let M=L.textures;for(let tt=0,j=M.length;tt<j;tt++){let mt=M[tt];if(p(mt)){let Dt=B(L),Ft=n.get(mt).__webglTexture;e.bindTexture(Dt,Ft),O(Dt),e.unbindTexture()}}}let Bt=[],he=[];function ce(L){if(L.samples>0){if(ye(L)===!1){let M=L.textures,tt=L.width,j=L.height,mt=i.COLOR_BUFFER_BIT,Dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(L),gt=M.length>1;if(gt)for(let kt=0;kt<M.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let yt=L.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let kt=0;kt<M.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[kt]);let se=n.get(M[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,tt,j,0,0,tt,j,mt,i.NEAREST),c===!0&&(Bt.length=0,he.length=0,Bt.push(i.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Bt.push(Dt),he.push(Dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let kt=0;kt<M.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[kt]);let se=n.get(M[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function ye(L){let M=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(L){let M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Ae(L,M){let tt=L.colorSpace,j=L.format,mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==lo&&tt!==ms&&(Fe.getTransfer(tt)===Ze?(j!==yi||mt!==ii)&&_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",tt)),M}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ct,this.resetTextureUnits=ot,this.getTextureUnits=J,this.setTextureUnits=Q,this.setTexture2D=Tt,this.setTexture2DArray=pt,this.setTexture3D=Mt,this.setTextureCube=St,this.rebindTextures=At,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function OM(i,t){function e(n,s=ms){let r,a=Fe.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Td)return i.BYTE;if(n===Ad)return i.SHORT;if(n===da)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===Id)return i.ALPHA;if(n===Pd)return i.RGB;if(n===yi)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===th)return i.RED_INTEGER;if(n===Bs)return i.RG;if(n===eh)return i.RG_INTEGER;if(n===nh)return i.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===Zo)if(a===Ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ih||n===sh||n===rh||n===ah)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oh||n===lh||n===ch||n===hh||n===uh||n===Jo||n===dh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oh||n===lh)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ch)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hh)return r.COMPRESSED_R11_EAC;if(n===uh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===vh||n===yh||n===Sh||n===Mh||n===bh||n===wh||n===Eh||n===Th)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Th)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ah||n===Ch||n===Rh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ah)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ch)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Ph||n===Ko||n===Lh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`,tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:BM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new Lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Gi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,x=null,f=null,y=null,S=null,I=typeof XRWebGLBinding<"u",m=new tf,p={},O=e.getContextAttributes(),B=null,R=null,w=[],U=[],G=new $t,T=null,N=null,V=new Vn;V.viewport=new Je;let q=new Vn;q.viewport=new Je;let st=[V,q],ot=new Wc,J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let vt=w[_t];return vt===void 0&&(vt=new ia,w[_t]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(_t){let vt=w[_t];return vt===void 0&&(vt=new ia,w[_t]=vt),vt.getGripSpace()},this.getHand=function(_t){let vt=w[_t];return vt===void 0&&(vt=new ia,w[_t]=vt),vt.getHandSpace()};function ct(_t){let vt=U.indexOf(_t.inputSource);if(vt===-1)return;let Pt=w[vt];Pt!==void 0&&(Pt.update(_t.inputSource,_t.frame,h||a),Pt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function dt(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",dt),s.removeEventListener("inputsourceschange",Tt);for(let _t=0;_t<w.length;_t++){let vt=U[_t];vt!==null&&(U[_t]=null,w[_t].disconnect(vt))}J=null,Q=null,m.reset();for(let _t in p)delete p[_t];if(t.setRenderTarget(B),y=null,f=null,x=null,s=null,R=null,Ue.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(G.width,G.height,!1),N!==null){let _t=N.camera;_t.fov=N.fov,_t.zoom=N.zoom,_t.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){o=_t,n.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return f!==null?f:y},this.getBinding=function(){return x===null&&I&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",dt),s.addEventListener("inputsourceschange",Tt),O.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,ae=null,Yt=null;O.depth&&(Yt=O.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=O.stencil?Os:Hi,ae=O.stencil?fa:Di);let fe={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:r};x=this.getBinding(),f=x.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new ei(f.textureWidth,f.textureHeight,{format:yi,type:ii,depthTexture:new Rs(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Pt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new ei(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Tt(_t){for(let vt=0;vt<_t.removed.length;vt++){let Pt=_t.removed[vt],ae=U.indexOf(Pt);ae>=0&&(U[ae]=null,w[ae].disconnect(Pt))}for(let vt=0;vt<_t.added.length;vt++){let Pt=_t.added[vt],ae=U.indexOf(Pt);if(ae===-1){for(let fe=0;fe<w.length;fe++)if(fe>=U.length){U.push(Pt),ae=fe;break}else if(U[fe]===null){U[fe]=Pt,ae=fe;break}if(ae===-1)break}let Yt=w[ae];Yt&&Yt.connect(Pt)}}let pt=new X,Mt=new X;function St(_t,vt,Pt){pt.setFromMatrixPosition(vt.matrixWorld),Mt.setFromMatrixPosition(Pt.matrixWorld);let ae=pt.distanceTo(Mt),Yt=vt.projectionMatrix.elements,fe=Pt.projectionMatrix.elements,ie=Yt[14]/(Yt[10]-1),at=Yt[14]/(Yt[10]+1),At=(Yt[9]+1)/Yt[5],$=(Yt[9]-1)/Yt[5],Ct=(Yt[8]-1)/Yt[0],Bt=(fe[8]+1)/fe[0],he=ie*Ct,ce=ie*Bt,ue=ae/(-Ct+Bt),ye=ue*-Ct;if(vt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(ye),_t.translateZ(ue),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Yt[10]===-1)_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let W=ie+ue,Ae=at+ue,be=he-ye,L=ce+(ae-ye),M=At*at/Ae*W,tt=$*at/Ae*W;_t.projectionMatrix.makePerspective(be,L,M,tt,W,Ae),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function qt(_t,vt){vt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(vt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let vt=_t.near,Pt=_t.far;m.texture!==null&&(m.depthNear>0&&(vt=m.depthNear),m.depthFar>0&&(Pt=m.depthFar)),ot.near=q.near=V.near=vt,ot.far=q.far=V.far=Pt,(J!==ot.near||Q!==ot.far)&&(s.updateRenderState({depthNear:ot.near,depthFar:ot.far}),J=ot.near,Q=ot.far),ot.layers.mask=_t.layers.mask|6,V.layers.mask=ot.layers.mask&-5,q.layers.mask=ot.layers.mask&-3;let ae=_t.parent,Yt=ot.cameras;qt(ot,ae);for(let fe=0;fe<Yt.length;fe++)qt(Yt[fe],ae);Yt.length===2?St(ot,V,q):ot.projectionMatrix.copy(V.projectionMatrix),N===null&&_t.isPerspectiveCamera&&(N={camera:_t,fov:_t.fov,zoom:_t.zoom}),Jt(_t,ot,ae)};function Jt(_t,vt,Pt){Pt===null?_t.matrix.copy(vt.matrixWorld):(_t.matrix.copy(Pt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(vt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=ta*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return ot},this.getFoveation=function(){if(!(f===null&&y===null))return c},this.setFoveation=function(_t){c=_t,f!==null&&(f.fixedFoveation=_t),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=_t)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ot)},this.getCameraTexture=function(_t){return p[_t]};let ke=null;function Ie(_t,vt){if(u=vt.getViewerPose(h||a),S=vt,u!==null){let Pt=u.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let ae=!1;Pt.length!==ot.cameras.length&&(ot.cameras.length=0,ae=!0);for(let at=0;at<Pt.length;at++){let At=Pt[at],$=null;if(y!==null)$=y.getViewport(At);else{let Bt=x.getViewSubImage(f,At);$=Bt.viewport,at===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Ct=st[at];Ct===void 0&&(Ct=new Vn,Ct.layers.enable(at),Ct.viewport=new Je,st[at]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set($.x,$.y,$.width,$.height),at===0&&(ot.matrix.copy(Ct.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale)),ae===!0&&ot.cameras.push(Ct)}let Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){x=n.getBinding();let at=x.getDepthInformation(Pt[0]);at&&at.isValid&&at.texture&&m.init(at,s.renderState)}if(Yt&&Yt.includes("camera-access")&&I){t.state.unbindTexture(),x=n.getBinding();for(let at=0;at<Pt.length;at++){let At=Pt[at].camera;if(At){let $=p[At];$||($=new Mo,p[At]=$);let Ct=x.getCameraImage(At);$.sourceTexture=Ct}}}}for(let Pt=0;Pt<w.length;Pt++){let ae=U[Pt],Yt=w[Pt];ae!==null&&Yt!==void 0&&Yt.update(ae,vt,h||a)}ke&&ke(_t,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),S=null}let Ue=new eg;Ue.setAnimationLoop(Ie),this.setAnimationLoop=function(_t){ke=_t},this.dispose=function(){}}},zM=new Be,og=new Te;og.set(-1,0,0,0,1,0,0,0,1);function $M(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,O,B,R){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),x(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&y(m,p,R)):p.isMeshMatcapMaterial?(r(m,p),S(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),I(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,O,B):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let O=t.get(p),B=O.envMap,R=O.envMapRotation;B&&(m.envMap.value=B,m.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(R)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(og),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,O,B){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*O,m.scale.value=B*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function x(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function y(m,p,O){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=O.texture,m.transmissionSamplerSize.value.set(O.width,O.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,p){p.matcap&&(m.matcap.value=p.matcap)}function I(m,p){let O=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(O.matrixWorld),m.nearDistance.value=O.shadow.camera.near,m.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function VM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,w){let U=w.program;n.uniformBlockBinding(R,U)}function h(R,w){let U=s[R.id];U===void 0&&(m(R),U=u(R),s[R.id]=U,R.addEventListener("dispose",O));let G=w.program;n.updateUBOMapping(R,G);let T=t.render.frame;r[R.id]!==T&&(f(R),r[R.id]=T)}function u(R){let w=x();R.__bindingPointIndex=w;let U=i.createBuffer(),G=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,G,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,U),U}function x(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let w=s[R.id],U=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,N=U.length;T<N;T++){let V=U[T];if(Array.isArray(V))for(let q=0,st=V.length;q<st;q++)y(V[q],T,q,G);else y(V,T,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,w,U,G){if(I(R,w,U,G)===!0){let T=R.__offset,N=R.value;if(Array.isArray(N)){let V=0;for(let q=0;q<N.length;q++){let st=N[q],ot=p(st);S(st,R.__data,V),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(V+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(N,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}function S(R,w,U){typeof R=="number"||typeof R=="boolean"?w[0]=R:R.isMatrix3?(w[0]=R.elements[0],w[1]=R.elements[1],w[2]=R.elements[2],w[3]=0,w[4]=R.elements[3],w[5]=R.elements[4],w[6]=R.elements[5],w[7]=0,w[8]=R.elements[6],w[9]=R.elements[7],w[10]=R.elements[8],w[11]=0):ArrayBuffer.isView(R)?w.set(new R.constructor(R.buffer,R.byteOffset,w.length)):R.toArray(w,U)}function I(R,w,U,G){let T=R.value,N=w+"_"+U;if(G[N]===void 0)return typeof T=="number"||typeof T=="boolean"?G[N]=T:ArrayBuffer.isView(T)?G[N]=T.slice():G[N]=T.clone(),!0;{let V=G[N];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return G[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function m(R){let w=R.uniforms,U=0,G=16;for(let N=0,V=w.length;N<V;N++){let q=Array.isArray(w[N])?w[N]:[w[N]];for(let st=0,ot=q.length;st<ot;st++){let J=q[st],Q=Array.isArray(J.value)?J.value:[J.value];for(let ct=0,dt=Q.length;ct<dt;ct++){let Tt=Q[ct],pt=p(Tt),Mt=U%G,St=Mt%pt.boundary,qt=Mt+St;U+=St,qt!==0&&G-qt<pt.storage&&(U+=G-qt),J.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=pt.storage}}}let T=U%G;return T>0&&(U+=G-T),R.__size=U,R.__cache={},this}function p(R){let w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(w.boundary=16,w.storage=R.byteLength):_e("WebGLRenderer: Unsupported uniform value type.",R),w}function O(R){let w=R.target;w.removeEventListener("dispose",O);let U=a.indexOf(w.__bindingPointIndex);a.splice(U,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function B(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:B}}var HM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function GM(){return Zi===null&&(Zi=new _o(HM,16,16,Bs,Ni),Zi.name="DFG_LUT",Zi.minFilter=Nn,Zi.magFilter=Nn,Zi.wrapS=$i,Zi.wrapT=$i,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var zh=class{constructor(t={}){let{canvas:e=bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:f=!1,outputBufferType:y=ii}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;let I=y,m=new Set([nh,eh,th]),p=new Set([ii,Di,da,fa,Kc,jc]),O=new Uint32Array(4),B=new Int32Array(4),R=new X,w=null,U=null,G=[],T=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,q=!1,st=null,ot=null,J=null,Q=null;this._outputColorSpace=li;let ct=0,dt=0,Tt=null,pt=-1,Mt=null,St=new Je,qt=new Je,Jt=null,ke=new me(0),Ie=0,Ue=e.width,_t=e.height,vt=1,Pt=null,ae=null,Yt=new Je(0,0,Ue,_t),fe=new Je(0,0,Ue,_t),ie=!1,at=new sa,At=!1,$=!1,Ct=new Be,Bt=new X,he=new Je,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ye(){return Tt===null?vt:1}let W=n;function Ae(A,z){return e.getContext(A,z)}let be,L,M,tt,j,mt,Dt,Ft,gt,yt,kt,se,Xt,Gt,re,pe,Se,K,Ut,xt,zt,Zt,wt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",qe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",mn,!1),W===null){let z="webgl2";if(W=Ae(z,A),W===null)throw Ae(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(A){throw e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),ve("WebGLRenderer: "+A.message),A}function oe(){be=new Ky(W),be.init(),zt=new OM(W,be),L=new $y(W,be,t,zt),M=new UM(W,be),L.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),ot=W.createFramebuffer(),J=W.createFramebuffer(),Q=W.createFramebuffer(),tt=new tS(W),j=new SM,mt=new FM(W,be,M,j,L,zt,tt),Dt=new Jy(V),Ft=new nx(W),Zt=new ky(W,Ft),gt=new jy(W,Ft,tt,Zt),yt=new nS(W,gt,Ft,Zt,tt),K=new eS(W,L,mt),re=new Vy(j),kt=new yM(V,Dt,be,L,Zt,re),se=new $M(V,j),Xt=new bM,Gt=new RM(be),Se=new By(V,Dt,M,yt,S,c),pe=new NM(V,yt,L),wt=new VM(W,tt,L,M),Ut=new zy(W,be,tt),xt=new Qy(W,be,tt),tt.programs=kt.programs,V.capabilities=L,V.extensions=be,V.properties=j,V.renderLists=Xt,V.shadowMap=pe,V.state=M,V.info=tt}I!==ii&&(N=new sS(I,e.width,e.height,o,s,r));let te=new ef(V,W);this.xr=te,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(Ue,_t,!1))},this.getSize=function(A){return A.set(Ue,_t)},this.setSize=function(A,z,et=!0){if(te.isPresenting){_e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=A,_t=z,e.width=Math.floor(A*vt),e.height=Math.floor(z*vt),et===!0&&(e.style.width=A+"px",e.style.height=z+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Ue*vt,_t*vt).floor()},this.setDrawingBufferSize=function(A,z,et){Ue=A,_t=z,vt=et,e.width=Math.floor(A*et),e.height=Math.floor(z*et),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(I===ii){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){_e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(St)},this.getViewport=function(A){return A.copy(Yt)},this.setViewport=function(A,z,et,nt){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,z,et,nt),M.viewport(St.copy(Yt).multiplyScalar(vt).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,z,et,nt){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,z,et,nt),M.scissor(qt.copy(fe).multiplyScalar(vt).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){M.setScissorTest(ie=A)},this.setOpaqueSort=function(A){Pt=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,et=!0){let nt=0;if(A){let rt=!1;if(Tt!==null){let It=Tt.texture.format;rt=m.has(It)}if(rt){let It=Tt.texture.type,Wt=p.has(It),Rt=Se.getClearColor(),ft=Se.getClearAlpha(),Lt=Rt.r,Kt=Rt.g,Pe=Rt.b;Wt?(O[0]=Lt,O[1]=Kt,O[2]=Pe,O[3]=ft,W.clearBufferuiv(W.COLOR,0,O)):(B[0]=Lt,B[1]=Kt,B[2]=Pe,B[3]=ft,W.clearBufferiv(W.COLOR,0,B))}else nt|=W.COLOR_BUFFER_BIT}z&&(nt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(nt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&W.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),st=A},this.dispose=function(){e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),Se.dispose(),Xt.dispose(),Gt.dispose(),j.dispose(),Dt.dispose(),yt.dispose(),Zt.dispose(),wt.dispose(),kt.dispose(),te.dispose(),te.removeEventListener("sessionstart",cl),te.removeEventListener("sessionend",Tr),Wn.stop()};function qe(A){A.preventDefault(),uo("WebGLRenderer: Context Lost."),q=!0}function we(){uo("WebGLRenderer: Context Restored."),q=!1;let A=tt.autoReset,z=pe.enabled,et=pe.autoUpdate,nt=pe.needsUpdate,rt=pe.type;oe(),tt.autoReset=A,pe.enabled=z,pe.autoUpdate=et,pe.needsUpdate=nt,pe.type=rt}function mn(A){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yn(A){let z=A.target;z.removeEventListener("dispose",yn),Mr(z)}function Mr(A){br(A),j.remove(A)}function br(A){let z=j.get(A).programs;z!==void 0&&(z.forEach(function(et){kt.releaseProgram(et)}),A.isShaderMaterial&&kt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,et,nt,rt,It){z===null&&(z=ce);let Wt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Rt=au(A,z,et,nt,rt);M.setMaterial(nt,Wt);let ft=et.index,Lt=1;if(nt.wireframe===!0){if(ft=gt.getWireframeAttribute(et),ft===void 0)return;Lt=2}let Kt=et.drawRange,Pe=et.attributes.position,Qt=Kt.start*Lt,ze=(Kt.start+Kt.count)*Lt;It!==null&&(Qt=Math.max(Qt,It.start*Lt),ze=Math.min(ze,(It.start+It.count)*Lt)),ft!==null?(Qt=Math.max(Qt,0),ze=Math.min(ze,ft.count)):Pe!=null&&(Qt=Math.max(Qt,0),ze=Math.min(ze,Pe.count));let cn=ze-Qt;if(cn<0||cn===1/0)return;Zt.setup(rt,nt,Rt,et,ft);let Ge,We=Ut;if(ft!==null&&(Ge=Ft.get(ft),We=xt,We.setIndex(Ge)),rt.isMesh)nt.wireframe===!0?(M.setLineWidth(nt.wireframeLinewidth*ye()),We.setMode(W.LINES)):We.setMode(W.TRIANGLES);else if(rt.isLine){let an=nt.linewidth;an===void 0&&(an=1),M.setLineWidth(an*ye()),rt.isLineSegments?We.setMode(W.LINES):rt.isLineLoop?We.setMode(W.LINE_LOOP):We.setMode(W.LINE_STRIP)}else rt.isPoints?We.setMode(W.POINTS):rt.isSprite&&We.setMode(W.TRIANGLES);if(rt.isBatchedMesh)if(be.get("WEBGL_multi_draw"))We.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let an=rt._multiDrawStarts,jt=rt._multiDrawCounts,Ln=rt._multiDrawCount,Oe=ft?Ft.get(ft).bytesPerElement:1,jn=j.get(nt).currentProgram.getUniforms();for(let di=0;di<Ln;di++)jn.setValue(W,"_gl_DrawID",di),We.render(an[di]/Oe,jt[di])}else if(rt.isInstancedMesh)We.renderInstances(Qt,cn,rt.count);else if(et.isInstancedBufferGeometry){let an=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,jt=Math.min(et.instanceCount,an);We.renderInstances(Qt,cn,jt)}else We.render(Qt,cn)};function wr(A,z,et,nt){st!==null&&A.isNodeMaterial&&st.setObject(nt,A),At===!0&&re.setState(A,et,!1),A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Hs(A,z,nt),A.side=Ns,A.needsUpdate=!0,Hs(A,z,nt),A.side=qi):Hs(A,z,nt)}this.compile=function(A,z,et=null){et===null&&(et=A),st!==null&&st.renderStart(A,z,et),U=Gt.get(et),U.init(z),T.push(U),et.traverseVisible(function(rt){rt.isLight&&rt.layers.test(z.layers)&&(U.pushLight(rt),rt.castShadow&&U.pushShadow(rt))}),A!==et&&A.traverseVisible(function(rt){rt.isLight&&rt.layers.test(z.layers)&&(U.pushLight(rt),rt.castShadow&&U.pushShadow(rt))}),U.setupLights(),st!==null&&st.updateLights(U.state.lightsArray),$=this.localClippingEnabled,At=re.init(this.clippingPlanes,$),At===!0&&re.setGlobalState(this.clippingPlanes,z),st!==null&&pe.render(U.state.shadowsArray,et,z);let nt=new Set;return A.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let It=rt.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){let Rt=It[Wt];wr(Rt,et,z,rt),nt.add(Rt)}else wr(It,et,z,rt),nt.add(It)}),U=T.pop(),st!==null&&st.renderEnd(),nt},this.compileAsync=function(A,z,et=null){let nt=this.compile(A,z,et);return new Promise(rt=>{function It(){if(nt.forEach(function(Wt){let ft=j.get(Wt).currentProgram;(ft===void 0||ft.isReady())&&nt.delete(Wt)}),nt.size===0){rt(A);return}setTimeout(It,10)}be.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Er=null;function $s(A){Er&&Er(A)}function cl(){Wn.stop()}function Tr(){Wn.start()}let Wn=new eg;Wn.setAnimationLoop($s),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(A){Er=A,te.setAnimationLoop(A),A===null?Wn.stop():Wn.start()},te.addEventListener("sessionstart",cl),te.addEventListener("sessionend",Tr),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;st!==null&&st.renderStart(A,z);let et=te.enabled===!0&&te.isPresenting===!0,nt=N!==null&&(Tt===null||et)&&N.begin(V,Tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,z,Tt),U=Gt.get(A,T.length),U.init(z),U.state.textureUnits=mt.getTextureUnits(),T.push(U),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),at.setFromProjectionMatrix(Ct,Ri,z.reversedDepth),$=this.localClippingEnabled,At=re.init(this.clippingPlanes,$),w=Xt.get(A,G.length),w.init(),G.push(w),te.enabled===!0&&te.isPresenting===!0){let Wt=V.xr.getDepthSensingMesh();Wt!==null&&ys(Wt,z,-1/0,V.sortObjects)}ys(A,z,0,V.sortObjects),w.finish(),st!==null&&st.updateLights(U.state.lightsArray),V.sortObjects===!0&&w.sort(Pt,ae),ue=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ue&&Se.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&re.beginShadows();let rt=U.state.shadowsArray;if(pe.render(rt,A,z),At===!0&&re.endShadows(),(nt&&N.hasRenderPass())===!1){let Wt=w.opaque,Rt=w.transmissive;if(U.setupLights(),z.isArrayCamera){let ft=z.cameras;if(Rt.length>0)for(let Lt=0,Kt=ft.length;Lt<Kt;Lt++){let Pe=ft[Lt];ba(Wt,Rt,A,Pe)}ue&&Se.render(A);for(let Lt=0,Kt=ft.length;Lt<Kt;Lt++){let Pe=ft[Lt];Ma(w,A,Pe,Pe.viewport)}}else Rt.length>0&&ba(Wt,Rt,A,z),ue&&Se.render(A),Ma(w,A,z)}Tt!==null&&dt===0&&(mt.updateMultisampleRenderTarget(Tt),mt.updateRenderTargetMipmap(Tt)),nt&&N.end(V),A.isScene===!0&&A.onAfterRender(V,A,z),Zt.resetDefaultState(),pt=-1,Mt=null,T.pop(),T.length>0?(U=T[T.length-1],mt.setTextureUnits(U.state.textureUnits),At===!0&&re.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,G.pop(),G.length>0?w=G[G.length-1]:w=null,st!==null&&st.renderEnd()};function ys(A,z,et,nt){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(at)){nt&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);let Wt=yt.update(A),Rt=A.material;Rt.visible&&w.push(A,Wt,Rt,et,he.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(at))){let Wt=yt.update(A),Rt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),he.copy(Wt.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Rt)){let ft=Wt.groups;for(let Lt=0,Kt=ft.length;Lt<Kt;Lt++){let Pe=ft[Lt],Qt=Rt[Pe.materialIndex];Qt&&Qt.visible&&w.push(A,Wt,Qt,et,he.z,Pe,z)}}else Rt.visible&&w.push(A,Wt,Rt,et,he.z,null,z)}}let It=A.children;for(let Wt=0,Rt=It.length;Wt<Rt;Wt++)ys(It[Wt],z,et,nt)}function Ma(A,z,et,nt){let{opaque:rt,transmissive:It,transparent:Wt}=A;U.setupLightsView(et),At===!0&&re.setGlobalState(V.clippingPlanes,et),nt&&M.viewport(St.copy(nt)),rt.length>0&&Vs(rt,z,et),It.length>0&&Vs(It,z,et),Wt.length>0&&Vs(Wt,z,et),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ba(A,z,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[nt.id]===void 0){let Qt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[nt.id]=new ei(1,1,{generateMipmaps:!0,type:Qt?Ni:ii,minFilter:Fs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}let It=U.state.transmissionRenderTarget[nt.id],Wt=nt.viewport||St;It.setSize(Wt.z*V.transmissionResolutionScale,Wt.w*V.transmissionResolutionScale);let Rt=V.getRenderTarget(),ft=V.getActiveCubeFace(),Lt=V.getActiveMipmapLevel();V.setRenderTarget(It),V.getClearColor(ke),Ie=V.getClearAlpha(),Ie<1&&V.setClearColor(16777215,.5),V.clear(),ue&&Se.render(et);let Kt=V.toneMapping;V.toneMapping=Li;let Pe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),U.setupLightsView(nt),At===!0&&re.setGlobalState(V.clippingPlanes,nt),Vs(A,et,nt),mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It),be.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ze=0,cn=z.length;ze<cn;ze++){let Ge=z[ze],{object:We,geometry:an,material:jt,group:Ln}=Ge;if(jt.side===qi&&We.layers.test(nt.layers)){let Oe=jt.side;jt.side=Zn,jt.needsUpdate=!0,Ar(We,et,nt,an,jt,Ln),jt.side=Oe,jt.needsUpdate=!0,Qt=!0}}Qt===!0&&(mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It))}V.setRenderTarget(Rt,ft,Lt),V.setClearColor(ke,Ie),Pe!==void 0&&(nt.viewport=Pe),V.toneMapping=Kt}function Vs(A,z,et){let nt=z.isScene===!0?z.overrideMaterial:null;for(let rt=0,It=A.length;rt<It;rt++){let Wt=A[rt],{object:Rt,geometry:ft,group:Lt}=Wt,Kt=Wt.material;Kt.allowOverride===!0&&nt!==null&&(Kt=nt),Rt.layers.test(et.layers)&&Ar(Rt,z,et,ft,Kt,Lt)}}function Ar(A,z,et,nt,rt,It){st!==null&&rt.isNodeMaterial&&st.setObject(A,rt),A.onBeforeRender(V,z,et,nt,rt,It),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),rt.onBeforeRender(V,z,et,nt,A,It),rt.transparent===!0&&rt.side===qi&&rt.forceSinglePass===!1?(rt.side=Zn,rt.needsUpdate=!0,V.renderBufferDirect(et,z,nt,rt,A,It),rt.side=Ns,rt.needsUpdate=!0,V.renderBufferDirect(et,z,nt,rt,A,It),rt.side=qi):V.renderBufferDirect(et,z,nt,rt,A,It),A.onAfterRender(V,z,et,nt,rt,It)}function Hs(A,z,et){z.isScene!==!0&&(z=ce);let nt=j.get(A),rt=U.state.lights,It=U.state.shadowsArray,Wt=rt.state.version,Rt=kt.getParameters(A,rt.state,It,z,et,U.state.lightProbeGridArray),ft=kt.getProgramCacheKey(Rt),Lt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,nt.fog=z.fog;let Kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Dt.get(A.envMap||nt.environment,Kt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",yn),Lt=new Map,nt.programs=Lt);let Pe=Lt.get(ft);if(Pe!==void 0){if(nt.currentProgram===Pe&&nt.lightsStateVersion===Wt)return Ss(A,Rt),Pe}else Rt.uniforms=kt.getUniforms(A),st!==null&&A.isNodeMaterial&&st.build(A,et,Rt),A.onBeforeCompile(Rt,V),Pe=kt.acquireProgram(Rt,ft),Lt.set(ft,Pe),nt.uniforms=Rt.uniforms;let Qt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=re.uniform),Ss(A,Rt),nt.needsLights=hl(A),nt.lightsStateVersion=Wt,nt.needsLights&&(Qt.ambientLightColor.value=rt.state.ambient,Qt.lightProbe.value=rt.state.probe,Qt.sunLights.value=rt.state.sun,Qt.sunLightShadows.value=rt.state.sunShadow,Qt.directionalLights.value=rt.state.directional,Qt.directionalLightShadows.value=rt.state.directionalShadow,Qt.spotLights.value=rt.state.spot,Qt.spotLightShadows.value=rt.state.spotShadow,Qt.rectAreaLights.value=rt.state.rectArea,Qt.ltc_1.value=rt.state.rectAreaLTC1,Qt.ltc_2.value=rt.state.rectAreaLTC2,Qt.pointLights.value=rt.state.point,Qt.pointLightShadows.value=rt.state.pointShadow,Qt.hemisphereLights.value=rt.state.hemi,Qt.sunShadowMatrix.value=rt.state.sunShadowMatrix,Qt.sunShadowCascade.value=rt.state.sunShadowCascade,Qt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Qt.spotLightMatrix.value=rt.state.spotLightMatrix,Qt.spotLightMap.value=rt.state.spotLightMap,Qt.pointShadowMatrix.value=rt.state.pointShadowMatrix),nt.lightProbeGrid=U.state.lightProbeGridArray.length>0,nt.currentProgram=Pe,nt.uniformsList=null,Pe}function wa(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=ga.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ss(A,z){let et=j.get(A);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function Gs(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(z.matrixWorld);for(let et=0,nt=A.length;et<nt;et++){let rt=A[et];if(rt.texture!==null&&rt.boundingBox.containsPoint(R))return rt}return null}function au(A,z,et,nt,rt){z.isScene!==!0&&(z=ce),mt.resetTextureUnits();let It=z.fog,Wt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?z.environment:null,Rt=Tt===null?V.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Fe.workingColorSpace,ft=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Lt=Dt.get(nt.envMap||Wt,ft),Kt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Pe=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Qt=!!et.morphAttributes.position,ze=!!et.morphAttributes.normal,cn=!!et.morphAttributes.color,Ge=Li;nt.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ge=V.toneMapping);let We=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,an=We!==void 0?We.length:0,jt=j.get(nt),Ln=U.state.lights;if(At===!0&&($===!0||A!==Mt)){let Qe=A===Mt&&nt.id===pt;re.setState(nt,A,Qe)}let Oe=!1;nt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ln.state.version||jt.outputColorSpace!==Rt||rt.isBatchedMesh&&jt.batching===!1||!rt.isBatchedMesh&&jt.batching===!0||rt.isBatchedMesh&&jt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&jt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&jt.instancing===!1||!rt.isInstancedMesh&&jt.instancing===!0||rt.isSkinnedMesh&&jt.skinning===!1||!rt.isSkinnedMesh&&jt.skinning===!0||rt.isInstancedMesh&&jt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&jt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&jt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&jt.instancingMorph===!1&&rt.morphTexture!==null||jt.envMap!==Lt||nt.fog===!0&&jt.fog!==It||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==re.numPlanes||jt.numIntersection!==re.numIntersection)||jt.vertexAlphas!==Kt||jt.vertexTangents!==Pe||jt.morphTargets!==Qt||jt.morphNormals!==ze||jt.morphColors!==cn||jt.toneMapping!==Ge||jt.morphTargetsCount!==an||!!jt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,jt.__version=nt.version);let jn=jt.currentProgram;Oe===!0&&(jn=Hs(nt,z,rt),st&&nt.isNodeMaterial&&st.onUpdateProgram(nt,jn,jt));let di=!1,Fi=!1,is=!1,ee=jn.getUniforms(),hn=jt.uniforms;if(M.useProgram(jn.program)&&(di=!0,Fi=!0,is=!0),nt.id!==pt&&(pt=nt.id,Fi=!0),jt.needsLights){let Qe=Gs(U.state.lightProbeGridArray,rt);jt.lightProbeGrid!==Qe&&(jt.lightProbeGrid=Qe,Fi=!0)}if(di||Mt!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ee.setValue(W,"projectionMatrix",A.projectionMatrix),ee.setValue(W,"viewMatrix",A.matrixWorldInverse);let fi=ee.map.cameraPosition;fi!==void 0&&fi.setValue(W,Bt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&ee.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&ee.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),Mt!==A&&(Mt=A,Fi=!0,is=!0)}if(jt.needsLights&&(Ln.state.sunShadowMap.length>0&&ee.setValue(W,"sunShadowMap",Ln.state.sunShadowMap,mt),Ln.state.directionalShadowMap.length>0&&ee.setValue(W,"directionalShadowMap",Ln.state.directionalShadowMap,mt),Ln.state.spotShadowMap.length>0&&ee.setValue(W,"spotShadowMap",Ln.state.spotShadowMap,mt),Ln.state.pointShadowMap.length>0&&ee.setValue(W,"pointShadowMap",Ln.state.pointShadowMap,mt)),rt.isSkinnedMesh){ee.setOptional(W,rt,"bindMatrix"),ee.setOptional(W,rt,"bindMatrixInverse");let Qe=rt.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ee.setValue(W,"boneTexture",Qe.boneTexture,mt))}rt.isBatchedMesh&&(ee.setOptional(W,rt,"batchingTexture"),ee.setValue(W,"batchingTexture",rt._matricesTexture,mt),ee.setOptional(W,rt,"batchingIdTexture"),ee.setValue(W,"batchingIdTexture",rt._indirectTexture,mt),ee.setOptional(W,rt,"batchingColorTexture"),rt._colorsTexture!==null&&ee.setValue(W,"batchingColorTexture",rt._colorsTexture,mt));let ri=et.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&K.update(rt,et,jn),(Fi||jt.receiveShadow!==rt.receiveShadow)&&(jt.receiveShadow=rt.receiveShadow,ee.setValue(W,"receiveShadow",rt.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&z.environment!==null&&(hn.envMapIntensity.value=z.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=GM()),Fi){if(ee.setValue(W,"toneMappingExposure",V.toneMappingExposure),jt.needsLights&&ou(hn,is),It&&nt.fog===!0&&se.refreshFogUniforms(hn,It),se.refreshMaterialUniforms(hn,nt,vt,_t,U.state.transmissionRenderTarget[A.id]),jt.needsLights&&jt.lightProbeGrid){let Qe=jt.lightProbeGrid;hn.probesSH.value=Qe.texture,hn.probesMin.value.copy(Qe.boundingBox.min),hn.probesMax.value.copy(Qe.boundingBox.max),hn.probesResolution.value.copy(Qe.resolution)}ga.upload(W,wa(jt),hn,mt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ga.upload(W,wa(jt),hn,mt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&ee.setValue(W,"center",rt.center),ee.setValue(W,"modelViewMatrix",rt.modelViewMatrix),ee.setValue(W,"normalMatrix",rt.normalMatrix),ee.setValue(W,"modelMatrix",rt.matrixWorld),nt.uniformsGroups!==void 0){let Qe=nt.uniformsGroups;for(let fi=0,Xn=Qe.length;fi<Xn;fi++){let pi=Qe[fi];wt.update(pi,jn),wt.bind(pi,jn)}}return jn}function ou(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function hl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(A,z,et){let nt=j.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),j.get(A.texture).__webglTexture=z,j.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:et,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let et=j.get(A);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,et=0){Tt=A,ct=z,dt=et;let nt=null,rt=!1,It=!1;if(A){let Rt=j.get(A);if(Rt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,Rt.__webglFramebuffer),St.copy(A.viewport),qt.copy(A.scissor),Jt=A.scissorTest,M.viewport(St),M.scissor(qt),M.setScissorTest(Jt),pt=-1;return}else if(Rt.__webglFramebuffer===void 0)mt.setupRenderTarget(A);else if(Rt.__hasExternalTextures)mt.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Kt=A.depthTexture;if(Rt.__boundDepthTexture!==Kt){if(Kt!==null&&j.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(A)}}let ft=A.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(It=!0);let Lt=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?nt=Lt[z][et]:nt=Lt[z],rt=!0):A.samples>0&&mt.useMultisampledRTT(A)===!1?nt=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Lt)?nt=Lt[et]:nt=Lt,St.copy(A.viewport),qt.copy(A.scissor),Jt=A.scissorTest}else St.copy(Yt).multiplyScalar(vt).floor(),qt.copy(fe).multiplyScalar(vt).floor(),Jt=ie;if(et!==0&&(nt=ot),M.bindFramebuffer(W.FRAMEBUFFER,nt)&&M.drawBuffers(A,nt),M.viewport(St),M.scissor(qt),M.setScissorTest(Jt),rt){let Rt=j.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+z,Rt.__webglTexture,et)}else if(It){let Rt=z;for(let ft=0;ft<A.textures.length;ft++){let Lt=j.get(A.textures[ft]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+ft,Lt.__webglTexture,et,Rt)}}else if(A!==null&&et!==0){let Rt=j.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Rt.__webglTexture,et)}pt=-1};function ul(A){let z=j.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=L.textureFormatReadable(A.format),z.__typeReadable=L.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,et,nt,rt,It,Wt,Rt=0){if(!(A&&A.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(ft=ft[Wt]),ft){M.bindFramebuffer(W.FRAMEBUFFER,ft);try{let Lt=A.textures[Rt],Kt=Lt.format,Pe=Lt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Rt);let Qt=ul(Lt);if(Qt.__formatReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-nt&&et>=0&&et<=A.height-rt&&W.readPixels(z,et,nt,rt,zt.convert(Kt),zt.convert(Pe),It)}finally{let Lt=Tt!==null?j.get(Tt).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,z,et,nt,rt,It,Wt,Rt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(ft=ft[Wt]),ft)if(z>=0&&z<=A.width-nt&&et>=0&&et<=A.height-rt){M.bindFramebuffer(W.FRAMEBUFFER,ft);let Lt=A.textures[Rt],Kt=Lt.format,Pe=Lt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Rt);let Qt=ul(Lt);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ze),W.bufferData(W.PIXEL_PACK_BUFFER,It.byteLength,W.STREAM_READ),W.readPixels(z,et,nt,rt,zt.convert(Kt),zt.convert(Pe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let cn=Tt!==null?j.get(Tt).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,cn);let Ge=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Em(W,Ge,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ze),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,It),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(ze),W.deleteSync(Ge),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,et=0){let nt=Math.pow(2,-et),rt=Math.floor(A.image.width*nt),It=Math.floor(A.image.height*nt),Wt=z!==null?z.x:0,Rt=z!==null?z.y:0;mt.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,et,0,0,Wt,Rt,rt,It),M.unbindTexture()},this.copyTextureToTexture=function(A,z,et=null,nt=null,rt=0,It=0){let Wt,Rt,ft,Lt,Kt,Pe,Qt,ze,cn,Ge=A.isCompressedTexture?A.mipmaps[It]:A.image;if(et!==null)Wt=et.max.x-et.min.x,Rt=et.max.y-et.min.y,ft=et.isBox3?et.max.z-et.min.z:1,Lt=et.min.x,Kt=et.min.y,Pe=et.isBox3?et.min.z:0;else{let hn=Math.pow(2,-rt);Wt=Math.floor(Ge.width*hn),Rt=Math.floor(Ge.height*hn),A.isDataArrayTexture?ft=Ge.depth:A.isData3DTexture?ft=Math.floor(Ge.depth*hn):ft=1,Lt=0,Kt=0,Pe=0}nt!==null?(Qt=nt.x,ze=nt.y,cn=nt.z):(Qt=0,ze=0,cn=0);let We=zt.convert(z.format),an=zt.convert(z.type),jt;z.isData3DTexture?(mt.setTexture3D(z,0),jt=W.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(mt.setTexture2DArray(z,0),jt=W.TEXTURE_2D_ARRAY):(mt.setTexture2D(z,0),jt=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,z.unpackAlignment);let Ln=M.getParameter(W.UNPACK_ROW_LENGTH),Oe=M.getParameter(W.UNPACK_IMAGE_HEIGHT),jn=M.getParameter(W.UNPACK_SKIP_PIXELS),di=M.getParameter(W.UNPACK_SKIP_ROWS),Fi=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,Ge.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ge.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Lt),M.pixelStorei(W.UNPACK_SKIP_ROWS,Kt),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Pe);let is=A.isDataArrayTexture||A.isData3DTexture,ee=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let hn=j.get(A),ri=j.get(z),Qe=j.get(hn.__renderTarget),fi=j.get(ri.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Qe.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let Xn=0;Xn<ft;Xn++)is&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,j.get(A).__webglTexture,rt,Pe+Xn),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,j.get(z).__webglTexture,It,cn+Xn)),W.blitFramebuffer(Lt,Kt,Wt,Rt,Qt,ze,Wt,Rt,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(rt!==0||A.isRenderTargetTexture||j.has(A)){let hn=j.get(A),ri=j.get(z);M.bindFramebuffer(W.READ_FRAMEBUFFER,J),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,Q);for(let Qe=0;Qe<ft;Qe++)is?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,hn.__webglTexture,rt,Pe+Qe):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,hn.__webglTexture,rt),ee?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ri.__webglTexture,It,cn+Qe):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ri.__webglTexture,It),rt!==0?W.blitFramebuffer(Lt,Kt,Wt,Rt,Qt,ze,Wt,Rt,W.COLOR_BUFFER_BIT,W.NEAREST):ee?W.copyTexSubImage3D(jt,It,Qt,ze,cn+Qe,Lt,Kt,Wt,Rt):W.copyTexSubImage2D(jt,It,Qt,ze,Lt,Kt,Wt,Rt);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ee?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(jt,It,Qt,ze,cn,Wt,Rt,ft,We,an,Ge.data):z.isCompressedArrayTexture?W.compressedTexSubImage3D(jt,It,Qt,ze,cn,Wt,Rt,ft,We,Ge.data):W.texSubImage3D(jt,It,Qt,ze,cn,Wt,Rt,ft,We,an,Ge):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,It,Qt,ze,Wt,Rt,We,an,Ge.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,It,Qt,ze,Ge.width,Ge.height,We,Ge.data):W.texSubImage2D(W.TEXTURE_2D,It,Qt,ze,Wt,Rt,We,an,Ge);M.pixelStorei(W.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Oe),M.pixelStorei(W.UNPACK_SKIP_PIXELS,jn),M.pixelStorei(W.UNPACK_SKIP_ROWS,di),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Fi),It===0&&z.generateMipmaps&&W.generateMipmap(jt),M.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&mt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?mt.setTextureCube(A,0):A.isData3DTexture?mt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?mt.setTexture2DArray(A,0):mt.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){ct=0,dt=0,Tt=null,M.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Fe._getUnpackColorSpace()}};var cg=new Yn,Hh=new X,Ui=class extends zo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new gn(t,3)),this.setAttribute("uv",new gn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ds(e,6,1);return this.setAttribute("instanceStart",new Pi(n,3,0)),this.setAttribute("instanceEnd",new Pi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ds(e,6,1);return this.setAttribute("instanceColorStart",new Pi(n,3,0)),this.setAttribute("instanceColorEnd",new Pi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Do(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),cg.setFromBufferAttribute(e),this.boundingBox.union(cg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Hh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Hh)),Hh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Hh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Jn.line={uniforms:jo.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var Ji=class extends In{constructor(t){super({type:"LineMaterial",uniforms:jo.clone(Jn.line.uniforms),vertexShader:Jn.line.vertexShader,fragmentShader:Jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var nf=new Je,hg=new X,ug=new X,Un=new Je,Fn=new Je,Ki=new Je,sf=new X,rf=new Be,On=new Vo,dg=new X,Gh=new Yn,Wh=new ni,ji=new Je,Qi,mr;function fg(i,t,e){return ji.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ji.multiplyScalar(1/ji.w),ji.x=mr/e.width,ji.y=mr/e.height,ji.applyMatrix4(i.projectionMatrixInverse),ji.multiplyScalar(1/ji.w),Math.abs(Math.max(ji.x,ji.y))}function WM(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){On.start.fromBufferAttribute(s,o),On.end.fromBufferAttribute(r,o),On.applyMatrix4(e);let h=new X,u=new X;Qi.distanceSqToSegment(On.start,On.end,u,h),u.distanceTo(h)<mr*.5&&t.push({point:u,pointOnLine:h,distance:Qi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function XM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),x=-t.near;Qi.at(1,Ki),Ki.w=1,Ki.applyMatrix4(t.matrixWorldInverse),Ki.applyMatrix4(n),Ki.multiplyScalar(1/Ki.w),Ki.x*=r.x/2,Ki.y*=r.y/2,Ki.z=0,sf.copy(Ki),rf.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,y=u;f<y;f++){if(Un.fromBufferAttribute(c,f),Fn.fromBufferAttribute(h,f),Un.w=1,Fn.w=1,Un.applyMatrix4(rf),Fn.applyMatrix4(rf),Un.z>x&&Fn.z>x)continue;if(Un.z>x){let B=Un.z-Fn.z,R=(Un.z-x)/B;Un.lerp(Fn,R)}else if(Fn.z>x){let B=Fn.z-Un.z,R=(Fn.z-x)/B;Fn.lerp(Un,R)}Un.applyMatrix4(n),Fn.applyMatrix4(n),Un.multiplyScalar(1/Un.w),Fn.multiplyScalar(1/Fn.w),Un.x*=r.x/2,Un.y*=r.y/2,Fn.x*=r.x/2,Fn.y*=r.y/2,On.start.copy(Un),On.start.z=0,On.end.copy(Fn),On.end.z=0;let I=On.closestPointToPointParameter(sf,!0);On.at(I,dg);let m=Ud.lerp(Un.z,Fn.z,I),p=m>=-1&&m<=1,O=sf.distanceTo(dg)<mr*.5;if(p&&O){On.start.fromBufferAttribute(c,f),On.end.fromBufferAttribute(h,f),On.start.applyMatrix4(a),On.end.applyMatrix4(a);let B=new X,R=new X;Qi.distanceSqToSegment(On.start,On.end,R,B),e.push({point:R,pointOnLine:B,distance:Qi.origin.distanceTo(R),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var gr=class extends Rn{constructor(t=new Ui,e=new Ji({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)hg.fromBufferAttribute(e,a),ug.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+hg.distanceTo(ug);let r=new Ds(s,2,1);return t.setAttribute("instanceDistanceStart",new Pi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Pi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Qi=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;mr=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Wh.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=mr*.5;else{let x=Math.max(s.near,Wh.distanceToPoint(Qi.origin));h=fg(s,x,c.resolution)}if(Wh.radius+=h,Qi.intersectsSphere(Wh)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Gh.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=mr*.5;else{let x=Math.max(s.near,Gh.distanceToPoint(Qi.origin));u=fg(s,x,c.resolution)}Gh.expandByScalar(u),Qi.intersectsBox(Gh)!==!1&&(n?WM(this,e):XM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(nf),this.material.uniforms.resolution.value.set(nf.z,nf.w))}};var gs=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function pg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:c,CY:h,mcs:u,q:x,list:f,clamp:y,norm:S,munis:I}=i,m=l=>document.querySelector(l),p=l=>String(l).replace(/[<>&"]/g,d=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[d]),O=(l,d)=>[(l-c)*o,(d-h)*o],B=.06,R=t.segs.map(l=>{let d=[],_=[0];for(let v=0;v<l.length;v+=2){let b=O(l[v],l[v+1]);d.length&&_.push(_[_.length-1]+Math.hypot(b[0]-d[d.length-1][0],b[1]-d[d.length-1][1])),d.push(b)}return{p:d,c:_,L:_[_.length-1]}}),w=t.stops.map(([l,d,_,v])=>({n:l,id:v,w:O(d,_),fams:new Set})),U=t.routes.map(([l,d,_])=>({s:l,l:d,c:_})),G=new Map;(t.bus||[]).forEach(([l,d,_,v])=>{let b={days:new Set(l),name:d,stops:_,times:v};_.forEach((E,P)=>{if(P<_.length-1){let F=G.get(E)||[];F.push([b,P]),G.set(E,F)}})});function T(l,d,_){let v=ie(),b=t.days.indexOf(v.ymd),E=[];for(let[P,F]of G.get(l)||[]){if(!P.days.has(b))continue;let D=P.times[F];if(D<d||D>_)continue;let H=P.stops[P.stops.length-1];E.push({sm:D,est:D,dl:0,fam:P.name,dest:w[H].n,destId:w[H].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(F)})}return E}let N=(l,d)=>{let _=l.match(/^R([A-Z]*)(\d*)(.*)$/),v=d.match(/^R([A-Z]*)(\d*)(.*)$/);return(_[1]||"").localeCompare(v[1]||"")||(+_[2]||0)-(+v[2]||0)||_[3].localeCompare(v[3])},V=[...new Set(U.map(l=>l.s))].sort(N),q={};U.forEach(l=>{q[l.s]||(q[l.s]=l.c)});let st=t.pats.map(([l,d,_])=>({stops:l,t:d,segs:_})),ot=t.trips.map(([l,d,_,v,b],E)=>({day:l,pat:st[d],fam:U[_].s,c:U[_].c,t0:v,num:b,tid:t.tids[E]})),J={};V.forEach(l=>J[l]=new Set),ot.forEach(l=>{l.pat.segs.forEach(d=>J[l.fam].add(d)),l.pat.stops.forEach(d=>w[d].fams.add(l.fam))});let Q=t.days.map((l,d)=>ot.filter(_=>_.day===d)),ct=new Map(ot.map(l=>[l.tid,l])),dt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,pt=3.922*Tt,Mt=-39.705*Tt;function St(l,d){let _=l*Tt+pt,v=d*Tt,b=Math.cos(Mt),E=Math.sin(Mt),P=Math.cos(v),F=Math.cos(_)*P,D=Math.sin(_)*P,H=Math.sin(v),Z=Math.atan2(D,F*b-H*E),g=Math.asin(H*b+F*E),C=Math.sqrt(2/(1+Math.cos(Z)*Math.cos(g))),k=C*Math.cos(g)*Math.sin(Z),Y=C*Math.sin(g),[ht,Et,ut,bt,it,le,ge]=dt;return O((Et+ht*k-it)*ge,(le-(bt-ut*Y))*ge)}let qt=new Map(w.map((l,d)=>[l.id,d]));function Jt(l){if(l.g)return l.g;let d=[],_=[],v=[0],b=0;return l.segs.forEach((E,P)=>{let F=R[E];F.p.forEach((D,H)=>{P&&!H||(d.push(D),_.push(b+F.c[H]))}),b+=F.L,v.push(b)}),l.g={pts:d,cum:_,stopD:v}}function ke(l,d,_,v){let b=1e18,E=0;for(let P=0;P+1<l.pts.length;P++){if(l.cum[P+1]<_||l.cum[P]>v)continue;let F=l.pts[P],D=l.pts[P+1],H=D[0]-F[0],Z=D[1]-F[1],g=H*H+Z*Z||1e-9,C=Math.max(0,Math.min(1,((d[0]-F[0])*H+(d[1]-F[1])*Z)/g)),k=F[0]+H*C-d[0],Y=F[1]+Z*C-d[1],ht=k*k+Y*Y;ht<b&&(b=ht,E=l.cum[P]+C*(l.cum[P+1]-l.cum[P]))}return{d:E,err:Math.sqrt(b)}}function Ie(l,d){let _=0,v=l.cum.length-1;if(d<=0)return l.pts[0];if(d>=l.cum[v])return l.pts[v];for(;v-_>1;){let F=_+v>>1;l.cum[F]<=d?_=F:v=F}let b=(d-l.cum[_])/(l.cum[v]-l.cum[_]||1),E=l.pts[_],P=l.pts[v];return[E[0]+(P[0]-E[0])*b,E[1]+(P[1]-E[1])*b]}let Ue=l=>`${l.slice(6,8)}/${l.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(l){let d={};return _t.formatToParts(l).forEach(_=>d[_.type]=_.value),{ymd:d.year+d.month+d.day,min:+d.hour*60+ +d.minute+ +d.second/60}}let Pt=0,ae=null,Yt=0,fe=0;function ie(){let l=vt(new Date);if(Pt===0&&ae==null)return{...l,live:!0};let d=ae==null?l.min:Yt+(Pt?(performance.now()-fe)/6e4*Pt:0);return{ymd:l.ymd,min:d,live:!1}}let at=l=>(l=(Math.floor(l+1e-6)%1440+1440)%1440,String(Math.floor(l/60)).padStart(2,"0")+":"+String(l%60).padStart(2,"0")),At="https://rodalies.erathegameoftime.com",$={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let l=new URLSearchParams(location.search).get("rt");l&&localStorage.setItem("rod_rt",l);let d=localStorage.getItem("rod_rt");d&&/jhmuyo\.workers\.dev/.test(d)&&(d=At,localStorage.setItem("rod_rt",d)),$.url=d||At}catch{$.url=At}let Ct=(l,d)=>fetch(l+d,{cache:"no-store"}).then(_=>{if(!_.ok)throw new Error("HTTP "+_.status);return _.json()}),Bt=l=>/^51/.test(l||"");async function he(){if(!$.url){be();return}let l=$.url.replace(/\/+$/,"");(!$.repFail||Date.now()-$.repFail>15*6e4)&&Ct(l,"/reports.json").then(D=>{D&&Array.isArray(D.items)?($.rep=D.items,$.repSkew=(D.now||Date.now())-Date.now(),D.tipos&&($.tipos=D.tipos),$.repOk=Date.now(),$.repFail=0):$.repFail=Date.now()}).catch(()=>{$.repFail=Date.now(),$.repOk=0});let d=!$.adifAt||Date.now()-$.adifAt>11e4,[_,v,b,E,P]=await Promise.allSettled([Ct(l,"/trip_updates.json"),Ct(l,"/vehicle_positions.json"),Ct(l,"/alerts.json"),Ct(l,"/notices.json"),d?Ct(l,"/adif.json"):Promise.reject(0)]);if(P.status==="fulfilled"&&P.value&&P.value.ok?($.adif=P.value,$.adifAt=Date.now()):d&&($.adifAt=Date.now()-6e4),_.status==="fulfilled"){let D=new Map,H=new Map;for(let Z of _.value.entity||[]){let g=Z.tripUpdate;if(!g||!g.trip||!Bt(g.trip.tripId))continue;let C=g.trip.tripId,k=(g.stopTimeUpdate||[])[0],Y=g.delay;Y==null&&k&&(Y=(k.arrival||k.departure||{}).delay),g.trip.scheduleRelationship==="CANCELED"&&(Y="X"),Y!=null&&D.set(C,Y),H.set(C,{next:k?{sid:k.stopId,t:+((k.arrival||k.departure||{}).time||0)}:null})}$.delays=D,$.tu=H,$.ok=Date.now(),$.feedTs=+((_.value.header||{}).timestamp||0)*1e3,$.err=""}else $.err=_.reason&&_.reason.message||__t(0);if(v.status==="fulfilled"){let D=new Map,H=Date.now()/1e3;for(let Z of v.value.entity||[]){let g=Z.vehicle;if(!g||!g.trip||!Bt(g.trip.tripId)||!g.position)continue;let C=g.vehicle&&g.vehicle.label||"",k=C.match(/PLATF\.\(([^)]+)\)/),Y=$.vp.get(g.trip.tripId),ht={tid:g.trip.tripId,w:St(+g.position.longitude,+g.position.latitude),st:g.currentStatus||"",sid:g.stopId||"",ts:+g.timestamp||H,label:C,plat:k?k[1]:"",fam:(C.split("-")[0]||"").trim(),num:g.vehicle&&g.vehicle.id||""};ht.disp=Y?Y.disp:null,D.set(ht.tid,ht)}$.vp=D,$.okVP=Date.now()}let F=[];if(E.status==="fulfilled"&&Array.isArray(E.value.included)){$.okNotices=Date.now();for(let D of E.value.included){let H=new Set((D.lines||[]).map(Y=>Y.id).filter(Y=>q[Y])),Z=(Y,ht)=>{Y=Y||{},ht=ht||window.__L;let Et=Y[ht];return ht==="en"&&Et&&(Et===Y.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Et))&&(Et=""),(Et||Y.es||Y.ca||"").trim()},g=Y=>[Z(D.description,Y),Z(D.title,Y)].sort((ht,Et)=>Et.length-ht.length)[0],C=g(),k=g("es");C&&F.push({id:"N"+D.externalId,fams:H,stops:new Set,txt:C,es:k,when:(D.date||"")+"T"+(D.time||""),src:"Rodalies",core:D.core||""})}}if(b.status==="fulfilled"){let D=+((b.value.header||{}).timestamp||0);if($.alertsTs=D,Date.now()/1e3-D<6*3600)for(let H of b.value.entity||[]){let Z=H.alert;if(!Z)continue;let g=new Set,C=new Set;for(let Et of Z.informedEntity||[])(Et.routeId||"").startsWith("51")&&g.add(Et.routeId.replace(/^51T\d+/,"")),Et.stopId&&qt.has(Et.stopId)&&C.add(qt.get(Et.stopId));if(!g.size&&!C.size)continue;let k=(Z.descriptionText||Z.headerText||{translation:[]}).translation||[],Y=((k.find(Et=>Et.language==="es")||k[0]||{}).text||"").trim(),ht=+((Z.activePeriod||[])[0]||{}).start||0;F.some(Et=>Et.txt===Y)||F.push({id:H.id,fams:g,stops:C,txt:Y,when:ht?new Date(ht*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if($.adif&&Date.now()-$.adifAt<15*6e4)for(let[D,H]of($.adif.items||[]).entries()){let Z=(H.t?H.t+". ":"")+H.txt,g=new Set,C=new Set,k=S(Z);for(let Y of Z.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))q[Y[1]]&&g.add(Y[1]);w.forEach((Y,ht)=>{Y.fams.size&&Y.n.length>4&&k.includes(S(Y.n))&&(C.add(ht),g.size||Y.fams.forEach(Et=>g.add(Et)))}),F.some(Y=>Y.txt===Z)||F.push({id:"A"+D,fams:g,stops:C,txt:Z,when:$.adif.upd||"",src:"Adif",lvl:H.lvl})}if(E.status==="fulfilled"||b.status==="fulfilled"){$.alerts=F.sort((D,H)=>H.when>D.when?1:-1);try{l0()}catch{}}be(),fu(),Wt=0,a()}let ce=()=>$.okVP&&Date.now()-$.okVP<10*6e4,ue=()=>$.okVP&&Date.now()-$.okVP<9e4,ye={at:0,v:!1},W=()=>{if(!ce()||$.vp.size>0)return!1;if(Date.now()-ye.at>3e4){ye.at=Date.now();let l=vt(new Date),d=t.days.indexOf(l.ymd),_=0;if(d>=0)for(let v of Q[d]){let b=l.min-v.t0;b>v.pat.t[1]+2&&b<v.pat.t[v.pat.t.length-2]-2&&_++}ye.v=_>=6}return ye.v},Ae=()=>ce()&&!W();function be(){let l=m("#rtst"),d=m("#mode");if(d){let v=[...j].filter(F=>{Fa("");let D=rs.m.get(F);return D&&D[0]>=2}),b=Ua(v),E=!!Ae()&&ie().live&&!(v.length&&b.length===v.length);d.classList.toggle("on",E&&ue()),d.classList.toggle("pre",!(E&&ue())),d.textContent=E&&!ue()?__t(1):E?__t(2):L.cur?__t(3):__t(4),d.classList.toggle("past",!!L.cur);let P=m("#rcgrab");if(P){let F=P.querySelector(".rdot");F||(F=document.createElement("b"),F.className="rdot",P.insertBefore(F,P.firstChild)),F.className="rdot "+(L.cur?"past":E&&ue()?"on":"pre"),F.title=d.textContent}d.title=L.cur?`${__t(5)}${L.cur.sn.t}${__t(6)}`:""}if(!l)return;$.url?$.err?l.textContent=__t(8)+$.err+__t(9):Ae()?l.innerHTML=`${__t(10)}${$.vp.size}${__t(11)}${$.delays.size}${__t(12)}${new Date($.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:W()?l.textContent=__t(13):l.textContent=__t(14):l.textContent=$.err||__t(7);let _=m("#rturl");_&&_._shown!==$.url&&(_.value=$.url,_._shown=$.url)}m("#rtsave").onclick=()=>{let l=m("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(l&&!/^https?:\/\//.test(l)&&(l="https://"+l),!l){$.err=__t(15),be();return}$.url=l;try{localStorage.setItem("rod_rt",l)}catch{}$.ok=0,$.err="",be(),he()},m("#rtoff").onclick=()=>{$.url=At;try{localStorage.removeItem("rod_rt")}catch{}u._h="",he()},setInterval(he,2e4),setTimeout(he,50);let L={snap:null,key:""};function M(){let l=ie();if(l.live||!ee.hoy||!ee.hoy.snaps||Pt&&ae==null)return null;let d=vt(new Date).min;if(l.min>d+1)return null;let _=null;for(let v of ee.hoy.snaps){if(!v.d)continue;let b=Of(v.t);b<=l.min+1&&(!_||b>_.m)&&(_={m:b,sn:v})}return _&&l.min-_.m<=25?_:null}let tt=l=>{{let b=lu(l.num);if(b&&b.cx&&ie().live)return"X"}let d=L.cur;if(d){if(d.sn.x&&d.sn.x.includes(l.tid))return"X";let b=d.sn.d[l.tid];return b??0}if(!Ae())return null;let _=$.delays.get(l.tid),v=$.vp.get(l.tid);return _==="X"?_:v&&v.pre&&v.preDl>=1?Math.max(typeof _=="number"?_:0,v.preDl*60):_??null},j=new Set(V);try{let l=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(l)&&l.some(d=>V.includes(d))&&(j.clear(),l.forEach(d=>V.includes(d)&&j.add(d)))}catch{}let mt=new Ui,Dt=new Ui,Ft=new Ji({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),gt=new Ji({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),yt=new gr(mt,Ft),kt=new gr(Dt,gt);kt.renderOrder=20,yt.renderOrder=21,yt.frustumCulled=kt.frustumCulled=!1,e.add(kt,yt);function se(l){let d=l[0]/o+c,_=l[1]/o+h;for(let v of I){if(v._bb===void 0){let E=1e9,P=1e9,F=-1e9,D=-1e9;for(let H of v.rings||[]){let Z=H[0]||[];for(let g=0;g<Z.length;g+=2)Z[g]<E&&(E=Z[g]),Z[g]>F&&(F=Z[g]),Z[g+1]<P&&(P=Z[g+1]),Z[g+1]>D&&(D=Z[g+1])}v._bb=[E,P,F,D]}let b=v._bb;if(!(d<b[0]||d>b[2]||_<b[1]||_>b[3]))for(let E of v.rings||[]){let P=E[0]||[],F=!1;for(let D=0,H=P.length,Z=H-2;D<H;Z=D,D+=2){let g=P[D+1],C=P[Z+1];g>_!=C>_&&d<(P[Z]-P[D])*(_-g)/(C-g)+P[D]&&(F=!F)}if(F)return!0}}return!1}let Xt=!1;function Gt(){Xt||!I.length||(Xt=!0,w.forEach(l=>{l.ext=!se(l.w)}),R.forEach(l=>{l.ext=!se(l.p[0])&&!se(l.p[l.p.length-1])&&!se(l.p[l.p.length>>1])}))}let re=()=>{let l=new Set(j.size<=2?j:[]);try{ft&&ft.fam&&l.add(ft.fam)}catch{}return l},pe="";function Se(){Gt();let l=[],d=[],_=new Set,v=new me,b=new me("#d2d0d0"),E=re();pe=[...E].join();for(let Z of V)if(j.has(Z))for(let g of J[Z]){if(_.has(g))continue;_.add(g);let C=R[g].p;v.set(q[Z]),R[g].ext&&!E.has(Z)&&v.lerp(b,.55);for(let k=0;k+1<C.length;k++)l.push(C[k][0],C[k][1],B,C[k+1][0],C[k+1][1],B),d.push(v.r,v.g,v.b,v.r,v.g,v.b)}l.length||(l.push(0,0,-50,0,0,-50),d.push(0,0,0,0,0,0));let P=new Ui,F=new Ui;P.setPositions(l),P.setColors(d),F.setPositions(l);let D=yt.geometry,H=kt.geometry;yt.geometry=P,kt.geometry=F,D&&D.dispose(),H&&H.dispose(),a()}Se();let K=l=>new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new me(l)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ut=new _n,xt=w.length,zt=new Float32Array(xt*3),Zt=new Float32Array(xt*3),wt=new Float32Array(xt),oe=new Float32Array(xt);w.forEach((l,d)=>{zt[d*3]=l.w[0],zt[d*3+1]=l.w[1],zt[d*3+2]=B,Zt.set([1,1,1],d*3),wt[d]=6,oe[d]=1.6}),Ut.setAttribute("position",new en(zt,3)),Ut.setAttribute("fill",new en(Zt,3)),Ut.setAttribute("size",new en(wt,1)),Ut.setAttribute("bw",new en(oe,1));let te=K("#1d2330"),qe=new lr(Ut,te);qe.renderOrder=22,qe.frustumCulled=!1,e.add(qe);function we(){let l=r.dist<45,d=re();w.forEach((_,v)=>{let b=[..._.fams].some(P=>j.has(P)),E=_.ext&&![..._.fams].some(P=>d.has(P))&&v!==Lt;wt[v]=b?v===Lt?13:E?3:l?8:5:0,oe[v]=v===Lt?3:1.6}),Ut.attributes.size.needsUpdate=!0,Ut.attributes.bw.needsUpdate=!0}let mn=600,yn=new _n,Mr=new Float32Array(mn*3),br=new Float32Array(mn*3),wr=new Float32Array(mn),Er=new Float32Array(mn);yn.setAttribute("position",new en(Mr,3)),yn.setAttribute("fill",new en(br,3)),yn.setAttribute("size",new en(wr,1)),yn.setAttribute("bw",new en(Er,1));let $s=new Float32Array(mn);yn.setAttribute("ang",new en($s,1));let cl=new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new me("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Tr=new lr(yn,cl);Tr.renderOrder=24,Tr.frustumCulled=!1,e.add(Tr);let Wn=new _n,ys=new Float32Array(mn*3),Ma=new Float32Array(mn*3),ba=new Float32Array(mn),Vs=new Float32Array(mn);Wn.setAttribute("position",new en(ys,3)),Wn.setAttribute("fill",new en(Ma,3)),Wn.setAttribute("size",new en(ba,1)),Wn.setAttribute("bw",new en(Vs,1));let Ar=new lr(Wn,K("#ffffff"));Ar.renderOrder=23,Ar.frustumCulled=!1,e.add(Ar);function Hs(l,d){let _=R[l],v=d*_.L,b=0,E=_.c.length-1;for(;E-b>1;){let Z=b+E>>1;_.c[Z]<=v?b=Z:E=Z}let P=_.c[E]-_.c[b]||1,F=(v-_.c[b])/P,D=_.p[b],H=_.p[E];return[D[0]+(H[0]-D[0])*F,D[1]+(H[1]-D[1])*F]}let wa=l=>l*l*(3-2*l)*.35+l*.65;function Ss(l,d){let _=l.pat.t,v=l.pat.stops.length,b=_[2*v-2];if(d<_[1]-2||d>b+1)return null;if(d<=_[1])return{w:w[l.pat.stops[0]].w,at:0,next:0,moving:!1};for(let E=0;E<v-1;E++){let P=_[2*E+1],F=_[2*E+2],D=_[2*E+3];if(d<=F){let H=F>P?(d-P)/(F-P):1;return{w:Hs(l.pat.segs[E],wa(y(H,0,1))),at:-1,next:E+1,prev:E,moving:!0}}if(d<=D)return{w:w[l.pat.stops[E+1]].w,at:E+1,next:E+1,moving:!1}}return{w:w[l.pat.stops[v-1]].w,at:v-1,next:v-1,moving:!1}}function Gs(l){let d=t.days.indexOf(l.ymd),_=[];if(d<0)return{k:d,out:_};let v=(b,E)=>{for(let P of b){if(!j.has(P.fam))continue;let F=tt(P);if(F==="X")continue;let D=(F||0)/60,H=l.min+E-P.t0-D;if(H<-2||H>P.pat.t[P.pat.t.length-2]+1)continue;let Z=Ss(P,H);Z&&_.push({tr:P,p:Z,rel:H,dl:D,live:F!=null})}};return v(Q[d],0),d>0&&v(Q[d-1],1440),{k:d,out:_}}function au(l,d,_,v){let b=l.pat.stops[0],E=d.dep0,P=null,F=(H,Z)=>{for(let g of H||[]){let C=g.pat.stops,k=C.length;if(C[k-1]!==b||g===l)continue;let Y=g.t0+g.pat.t[2*(k-1)]-Z;if(Y>E+5||Y<E-120)continue;let ht=Jt(g.pat),Et=ke(ht,d.w,-1,1e9);if(Et.err>.6)continue;let ut=ht.stopD,bt=g.pat.t,it=ut.findIndex(Vt=>Vt>Et.d);it<0&&(it=k-1);let le=it===0?bt[1]:bt[2*it-1]+(ut[it]>ut[it-1]?(Et.d-ut[it-1])/(ut[it]-ut[it-1]):1)*(bt[2*it]-bt[2*it-1]),ge=_-(g.t0+le-Z);ge<-5||ge>120||(!P||Math.abs(ge)<Math.abs(P.prevDl))&&(P={prevTr:g,dPrev:Et.d,prevDl:ge,arrO:Y+Math.max(0,ge)})}};if(F(Q[v],0),v>0&&F(Q[v-1],1440),!P)return{prevTr:null,preDl:0};let D=Math.max(E,P.arrO+3);return{...P,depEst:D,preDl:Math.max(0,D-E)}}function ou(l,d,_){let v=l.pat.t,b=d.length;if(!(_>=0))return _<0?d[0]:null;for(let E=0;E<b;E++)if(_<=v[2*E+1]){if(_>=v[2*E]||E===0)return d[E];let P=v[2*E-1],F=v[2*E];return d[E-1]+(d[E]-d[E-1])*(F>P?(_-P)/(F-P):1)}return d[b-1]}let hl=performance.now();function ul(){let l=[],d=Date.now()/1e3,_=performance.now(),v=Math.min(1,(_-hl)/1e3);hl=_;for(let b of $.vp.values()){let E=ct.get(b.tid),P=E?E.fam:b.fam;if(P&&q[P]&&!j.has(P))continue;let F=$.delays.get(b.tid),D=typeof F=="number"?F/60:0,H=Math.max(0,d-b.ts);b.mvTs!==b.ts&&((!b.mvW||Math.hypot(b.w[0]-b.mvW[0],b.w[1]-b.mvW[1])>.025)&&(b.mvW=b.w,b.mvAt=b.ts),b.mvTs=b.ts),b.still=b.ts-(b.mvAt||b.ts);let Z=b.w,g=-1;if(E){let k=Jt(E.pat),Y=k.stopD;if(b.dObs==null||b.obsAt!==b.ts){let it=ke(k,b.w,-1,1e9);b.dObs=it.d,b.err=it.err,b.obsAt=b.ts}let ht=ie(),Et=t.days.indexOf(ht.ymd),ut=E.day===Et-1?1440:0,bt=E.t0+E.pat.t[1]-ut;if(b.pre=ht.min+D<bt-1&&(b.dObs>Y[0]+.35||b.err>.6)&&!(b.st==="STOPPED_AT"&&b.sid===w[E.pat.stops[0]].id),b.dep0=bt,b.pre){if(b.atStop=-1,b.next=0,g=0,b.disp=null,b.prevAt!==b.ts&&(b.prevAt=b.ts,Object.assign(b,au(E,b,ht.min,Et))),b.prevTr){let it=Jt(b.prevTr.pat);Z=Ie(it,b.dPrev)}}else if(!ue()&&E){let it=ie(),le=t.days.indexOf(it.ymd),ge=E.day===le-1?1440:0,Vt=Ss(E,it.min+ge-E.t0-D);Vt?(Z=Vt.w,b.est=!0,g=Vt.next,b.atStop=Vt.moving?-1:Vt.at,b.next=Vt.next,b.before=!1):(b.atStop=-1,b.next=-1)}else if(b.err<=.6){let it=Y.findIndex(Vt=>Vt>b.dObs+.08);it<0&&(it=Y.length-1);let le=Y.reduce((Vt,Ve,Ee)=>Math.abs(Ve-b.dObs)<Math.abs(Y[Vt]-b.dObs)?Ee:Vt,0);b.atStop=Math.abs(Y[le]-b.dObs)<.16?le:-1;{let Vt=b.st==="STOPPED_AT"&&b.sid?E.pat.stops.findIndex(Ve=>w[Ve].id===b.sid):-1;Vt>=0&&Math.abs(Y[Vt]-b.dObs)<.6&&(b.atStop=Vt,it<=Vt&&(it=Math.min(Vt+1,Y.length-1)))}b.before=b.atStop>=0&&b.dObs<Y[b.atStop]-.15,b.next=it,g=it;let ge=b.dObs;if(b.st==="STOPPED_AT"&&b.atStop>=0)ge=Y[b.atStop];else if(it>0){let Vt=(E.pat.t[2*it]-E.pat.t[2*it-1])*60,Ve=Vt>0?(Y[it]-Y[it-1])/Vt:0,Ee=ie(),de=t.days.indexOf(Ee.ymd),Sn=E.day===de-1?1440:0,Xe=ou(E,Y,Ee.min+Sn-E.t0-D),ki=b.dObs+Ve*Math.min(H,60);Xe!=null&&(ki=Math.min(ki,Math.max(b.dObs,Xe))),ge=Math.max(b.dObs,Math.min(Y[it]-.03,ki))}b.disp==null||Math.abs(b.disp-ge)>1.2?b.disp=ge:ge>b.disp&&(b.disp+=(ge-b.disp)*Math.min(1,v*1.5)),Z=Ie(k,b.disp)}else if(b.err>2){let it=ie(),le=t.days.indexOf(it.ymd),ge=E.day===le-1?1440:0,Vt=Ss(E,it.min+ge-E.t0-D);Vt&&(Z=Vt.w,b.est=!0,g=Vt.next),b.atStop=-1,b.next=Vt?Vt.next:-1}else b.atStop=-1,b.next=-1}let C=b.pre?"":b.st==="STOPPED_AT"&&b.atStop>=0||b.atStop>=0&&b.still>30?"st":b.still>=90&&b.atStop<0?"via":"";l.push({tr:E,v:b,w:Z,stop:C,p:{w:Z},fam:P||"?",c:E?E.c:q[P]||"#6b7385",dl:D,live:!0,real:!0,idx:g,age:H,cancel:F==="X"})}return l}let A=new Map,z=!1,et=!1,nt="",rt={st:-1},It=[],Wt=0,Rt=null,ft=null,Lt=-1,Kt=!1,Pe=0,Qt="";function ze(l){let d=Pt>0||Ae()&&ae==null||!!ft,_=window.__mapHidden?1e3:d?50:250;if(l-Wt<_)return!1;Wt=l,[...re()].join()!==pe&&(Se(),we());{let g=M(),C=g?g.sn.t:"";L.cur=g,C!==L.key&&(L.key=C,be()),!g&&!ie().live&&!ee.at&&ri()}let v=ie(),b=Ae()&&v.live,E=b?{k:t.days.indexOf(v.ymd),out:ul()}:Gs(v);It=E.out;let P=new me,F=0,D=0;for(let g of It){if(F>=mn)break;Mr[F*3]=g.p.w[0],Mr[F*3+1]=g.p.w[1],Mr[F*3+2]=B+.02;let C=null;if(g.real&&g.v.pre&&g.v.prevTr)C=Ie(Jt(g.v.prevTr.pat),g.v.dPrev+.35);else if(g.real&&g.tr&&!g.v.pre&&g.v.err<=.6&&g.v.disp!=null&&!(g.v.st==="STOPPED_AT"&&g.v.atStop>=0))C=Ie(Jt(g.tr.pat),g.v.disp+.35);else if(!g.real&&g.p.moving){let ut=g.tr.pat.t,bt=g.p.prev,it=ut[2*bt+1],le=ut[2*bt+2],ge=le>it?(g.rel-it)/(le-it):1;C=Hs(g.tr.pat.segs[bt],Math.min(1,wa(y(ge,0,1))+.04))}let k=g.real?!!g.stop:!g.p.moving;if(g.broke=Rf(g),g.broke)$s[F]=85;else if(k)$s[F]=75;else if(C){let ut=dl(g.p.w),bt=dl(C),it=bt[0]-ut[0],le=bt[1]-ut[1];$s[F]=Math.hypot(it,le)>.05?Math.atan2(it,-le):99}else $s[F]=99;P.set(g.c||g.tr.c),br[F*3]=P.r,br[F*3+1]=P.g,br[F*3+2]=P.b;let Y=g.tr?g.tr===ft:ft&&ft.vtid===g.v.tid;wr[F]=Y?22:r.dist<45?17:14,Er[F]=Y?3.5:2.2;let ht=g.real&&g.stop==="via"||!!g.broke,Et=g.cancel||g.broke?[.86,.15,.15]:g.dl>10?[.86,.15,.15]:g.dl>5?[.92,.48,.05]:g.dl>=1?[.98,.8,.08]:[.09,.64,.29];(g.live&&g.dl>=5||Y||ht)&&(ys[D*3]=g.p.w[0],ys[D*3+1]=g.p.w[1],ys[D*3+2]=B+.01,Ma.set(Y?Et:ht?[.86,.15,.15]:[.98,.45,.09],D*3),ba[D]=wr[F]+(Y?16+5*Math.sin(l/220):ht?10+3*Math.sin(l/400):8),Vs[D]=Y?2:3,D++),F++}if(yn.setDrawRange(0,F),Wn.setDrawRange(0,D),["position","fill","size","bw"].forEach(g=>{yn.attributes[g].needsUpdate=!0,Wn.attributes[g].needsUpdate=!0}),yn.attributes.ang.needsUpdate=!0,Rt){let g=It.find(C=>C.tr===Rt);if(g){let C=0,k=innerHeight,Y=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,ht=m("#rc").getBoundingClientRect();innerWidth<=640&&(Y&&(C=Y.bottom),k=Math.min(k,ht.top));let Et=C+(k-C)/2,ut=Et-innerHeight/2,bt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=g.p.w[0]-Math.sin(r.yaw)*ut*bt,s.ty=g.p.w[1]+Math.cos(r.yaw)*ut*bt}else Ae()&&ie().live&&(Rt=null)}let H=at(Math.floor(v.min+1e-6));H!==Qt&&(Qt=H,m("#ctime").textContent=H),m("#ntr").textContent=String(It.length),m("#ntrl").textContent=b?__t(16):__t(17);{let g=j.size<V.length?[...j].sort(N).join(", "):"",C=m("#ccount"),k=L.cur?`\u23EA ${It.length}${__t(18)}${L.cur.sn.t} \xB7 ${Object.values(L.cur.sn.d).filter(Y=>Y>=60).length}${__t(19)}`:!v.live&&v.min<vt(new Date).min-1&&!Pt?`${__t(20)}${ee.hoy&&ee.hoy.snaps&&ee.hoy.snaps.some(Y=>Y.d)?`${__t(21)}${ee.hoy.snaps.find(Y=>Y.d).t}`:__t(22)}`:b&&!ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${gs(Math.round((Date.now()-$.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:b&&!It.some(Y=>Y.real)&&Ua(j).length?`\u{1F4E1} ${__t(25)}${g?` <small>\xB7 ${p(g)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${It.length} ${b?__t(27):__t(28)}${g?` <small>\xB7 ${p(g)}</small>`:""}${b&&$.okVP?(()=>{let Y=Math.max(0,Math.round((Date.now()-$.okVP)/1e3));return` <small class="fresh${Y<3?" new":""}">\u25CF ${__t(29)}${gs(Y+" s")}</small>`})():""}`;C&&C._t!==k&&(C.innerHTML=k,C._t=k)}let Z=new Date;if(m("#cdate").textContent=v.live?__t(30):Pt?__t(31)+Pt:_i?__t(32):__t(33),E.k<0?m("#src").innerHTML=`${__t(34)}${Ue(t.days[0])}${__t(35)}${Ue(t.days[t.days.length-1])}${__t(36)}`:b?m("#src").textContent=`${__t(37)}${gs(Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...$.vp.values()].map(g=>g.ts),0)))+" s")}`:W()&&v.live?m("#src").innerHTML=__t(38):m("#src").innerHTML=__t(39)+($.url?__t(40):__t(41))+__t(42),v.live){let g=Math.round(v.min),C=m("#tsl");document.activeElement!==C&&(C.value=g<240?g+1440:g)}{let g=ft?String(ft.num||ft.vtid||""):"";g!==ze._sk&&(ze._sk=g,$e(!0))}return $e(),l-Pe>3e3&&(ft||Lt>=0||Kt||et||nt)&&(Pe=l,De()),be(),!0}let cn=-1,Ge=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),We=[],an=document.createElement("button");an.type="button",an.id="mbtn",an.title=__t(43),an.innerHTML=__t(44),an.onclick=()=>{Ge=!Ge;try{localStorage.setItem("rod_mun",Ge?"1":"")}catch{}an.classList.toggle("on",Ge),a(),is()},an.classList.toggle("on",Ge),document.body.appendChild(an);let jt=I.slice().sort((l,d)=>d.pop-l.pop);function Ln(l){if(l._a)return l._a;let d=null,_=0;for(let v of l.rings||[]){let b=v[0];if(!b)continue;let E=0,P=0,F=0;for(let D=0,H=b.length;D<H;D+=2){let Z=b[D],g=b[D+1],C=b[(D+2)%H],k=b[(D+3)%H],Y=Z*k-C*g;E+=Y,P+=(Z+C)*Y,F+=(g+k)*Y}Math.abs(E)>_&&(_=Math.abs(E),d=[P/(3*E),F/(3*E)])}return l._a=d?[(d[0]-c)*o,(d[1]-h)*o]:[l.cx,l.cy]}let Oe=l=>l>=1e5?1:l>=2e4?2:l>=5e3?3:4,jn=[0,7.6,6.7,6,5.4],di=[0,17,15,13,12],Fi=l=>l.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function is(){let l=s.tilt<.06&&r.tilt<.08;an.classList.toggle("show",l);let d=0;if(Ge&&l){let _=[...document.querySelectorAll(".plab, .slab")].filter(E=>E.offsetParent!==null||E.style.display==="block").map(E=>{let P=E.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(E=>E[2]>E[0]),v=r.dist,b=v>160?5e4:v>130?2e4:v>105?8e3:v>80?3e3:v>62?800:0;for(let E of jt){let P=Oe(E.pop);if(E.pop<b)break;let F=Ln(E);if(xn.set(F[0],F[1],B).project(n),Math.abs(xn.x)>1.02||Math.abs(xn.y)>1.02)continue;let D=(xn.x*.5+.5)*innerWidth,H=(-xn.y*.5+.5)*innerHeight,Z=Fi(E.name),g=Z.length*jn[P]+8,C=di[P],k=[D-g/2,H-C/2,D+g/2,H+C/2];if(_.some(ht=>k[0]<ht[2]&&ht[0]<k[2]&&k[1]<ht[3]&&ht[1]<k[3]))continue;_.push(k);let Y=We[d]||(We[d]=Object.assign(document.createElement("div"),{className:"mlab"}));Y.isConnected||document.body.appendChild(Y),Y._n!==Z&&(Y.textContent=Z,Y._n=Z),Y._t!==P&&(Y.className="mlab t"+P,Y._t=P),Y.style.transform=`translate(${Math.round(D)}px,${Math.round(H)}px) translate(-50%,-50%)`,Y.style.display="block",d++}}for(;d<We.length;d++)We[d].style.display="none"}let ee={at:0,hoy:null,ayer:null,err:""},hn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function ri(){Date.now()-ee.at<5*6e4||(ee.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(l=>fetch(hn+l+".json",{cache:"no-store"}).then(d=>d.ok?d.json():null).catch(()=>null))).then(([l,d,_])=>{ee.hoy=l,ee.ayer=d,ee.hist=_,ee.tr=null,ee.err=l?"":__t(45),et&&(u._h="",De()),$e(!0)}))}function Qe(l){let d={};for(let v of l&&l.snaps||[])for(let b of v.r||[]){let E=/^\d+[A-Z](\d+)/.exec(b);E&&(d[E[1]]=d[E[1]]||[]).push(Math.max(0,v.d&&v.d[b]||0)/60)}let _={};for(let v in d){let b=d[v].sort((E,P)=>E-P);_[v]=Math.round(b[b.length>>1])}return _}function fi(l){if(!ee.tr){let _=new Map;for(let v of ee.hist&&ee.hist.days||[])_.set(v.day,v.tr);for(let v of[ee.ayer,ee.hoy])if(v&&v.day&&!_.has(v.day)){let b=Qe(v);Object.keys(b).length&&_.set(v.day,b)}ee.tr=_}let d=[...ee.tr.values()].map(_=>_[String(l)]).filter(_=>_!=null);return d.length?{n:d.length,late:d.filter(_=>_>=5).length,avg:d.reduce((_,v)=>_+v,0)/d.length}:null}let Xn=l=>l>=90?"g":l>=80?"y":l>=65?"w":"b",pi={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},wf=l=>l>10?pi.b:l>5?pi.w:l>=1?pi.y:pi.g,Ws=l=>(l>=.05?"+":"")+(Math.round(l*10)/10).toString().replace(".",",")+" min";function Ea(l,d,_){return`<div class="sbars">${l.map(v=>`<div class="sbar" title="${p(v.tip||"")}"><span class="sl">${v.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(v.w*100))}%;background:${v.c}"></i></span><b class="sv" style="color:${v.c===pi.y?"var(--svy,#a16207)":v.c===pi.w?"var(--svw,#c2410c)":v.c}">${v.val}</b></div>`).join("")}</div>`}function kg(l){if(l=(l||[]).filter(ut=>ut.n>=10),!l||l.length<2){let ut=l&&l[0];return ut?`${__t(46)}${ut.t}: ${Math.round(ut.ok/ut.n*100)}${__t(47)}${ut.n}${__t(48)}`:__t(49)}let d=ut=>{let[bt,it]=ut.t.split(":").map(Number);return bt*60+it},_=d(l[0]),v=Math.max(_+60,d(l[l.length-1])),b=300,E=112,P=24,F=ut=>P+(ut-_)*(b-P-8)/(v-_),D=ut=>8+(100-ut)/100*(E-26),H=ut=>ut.n?ut.ok/ut.n*100:100,Z=l.map(ut=>[F(d(ut)),D(H(ut)),ut]),g=ut=>ut[0].toFixed(1)+","+ut[1].toFixed(1),C=[],k=[];Z.forEach((ut,bt)=>{bt&&d(ut[2])-d(Z[bt-1][2])>45&&(C.push(k),k=[]),k.push(ut)}),C.push(k);let Y=Z[Z.length-1],ht=[];for(let ut=Math.ceil(_/180)*3;ut*60<v;ut+=3)ut*60>_+20&&ht.push(ut);let Et=Math.round(l.reduce((ut,bt)=>ut+bt.ok,0)/Math.max(1,l.reduce((ut,bt)=>ut+bt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${b} ${E}${__t(50)}${[100,75,50,25].map(ut=>`<line x1="${P}" x2="${b-4}" y1="${D(ut)}" y2="${D(ut)}" class="gl"/><text x="2" y="${D(ut)+3}" class="ax">${ut}%</text>`).join("")}
      <line x1="${P}" x2="${b-4}" y1="${D(Et)}" y2="${D(Et)}" class="avg"/>
      ${C.filter(ut=>ut.length).map(ut=>`<polygon points="${g([ut[0][0],D(0)])} ${ut.map(g).join(" ")} ${g([ut[ut.length-1][0],D(0)])}" class="ar"/><polyline points="${ut.map(g).join(" ")}" class="ln"/>`).join("")}
      ${Z.map(([ut,bt,it])=>`<circle cx="${ut.toFixed(1)}" cy="${bt.toFixed(1)}" r="6" class="hit"><title>${it.t} \xB7 ${Math.round(H(it))}${__t(51)}${it.n}${__t(52)}${it.d5}${__t(53)}${Ws(it.avg)}${it.nd?` \xB7 ${it.nd}${__t(54)}`:""}</title></circle>`).join("")}
      <circle cx="${Y[0].toFixed(1)}" cy="${Y[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(Y[0],b-30).toFixed(1)}" y="${(Y[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(H(Y[2]))}%</text>
      ${ht.map(ut=>`<text x="${F(ut*60).toFixed(1)}" y="${E-4}" class="ax" text-anchor="middle">${String(ut).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${E-4}" class="ax">${l[0].t}</text></svg><small class="snote">${__t(55)} (${Et}%)</small>`}function zg(){ri();let l=ie(),d=It.filter(F=>F.real&&Ae()&&l.live),_=d.filter(F=>$.delays.has(F.v.tid)),v=_.length,b=d.length-v,E=`${__t(56)}`;if(v){let F=_.filter(bt=>bt.dl<3).length,D=_.filter(bt=>bt.dl>=5).length,H=_.filter(bt=>bt.stop==="via").length,Z=Math.round(F/v*100);E+=`${__t(57)}${v}${__t(58)}${b?` \xB7 ${b}${__t(63)}`:""}</small><div class="kpis">
        <div class="kpi ${Xn(Z)}"><b>${Z}${__t(59)}${Xn(100-D/v*100*2)}" title="${Math.round(D/v*100)}${__t(60)}${D}${__t(61)}${H===0?"g":H<=2?"w":"b"}"><b>${H}${__t(62)}`;let g=new Map;_.forEach(bt=>{let it=bt.fam,le=g.get(it)||{n:0,ok:0,sum:0};le.n++,le.ok+=bt.dl<3,le.sum+=Math.max(0,bt.dl),g.set(it,le)});let C=[...g].filter(([bt])=>q[bt]).sort((bt,it)=>bt[1].ok/bt[1].n-it[1].ok/it[1].n||it[1].sum/it[1].n-bt[1].sum/bt[1].n),k=C.filter(([,bt])=>bt.ok<bt.n),Y=C.filter(([,bt])=>bt.ok===bt.n);E+=`${__t(64)}`+(k.length?"":__t(65))+Ea(k.map(([bt,it])=>({lab:Dn(bt),w:it.ok/it.n,c:pi[Xn(it.ok/it.n*100)],val:`${Math.round(it.ok/it.n*100)}% <small>${Ws(it.sum/it.n)}</small>`,tip:`${bt}: ${it.ok}${__t(66)}${it.n}${__t(67)}${Ws(it.sum/it.n)}`})))+(Y.length?`${__t(68)}${Y.map(([bt])=>Dn(bt)).join(" ")}</p>`:"");let ht=new Map;_.forEach(bt=>{if(!bt.tr||bt.v.next==null||bt.v.next<0||bt.v.pre)return;let it=bt.tr.pat.stops[bt.v.next],le=ht.get(it)||{n:0,sum:0};le.n++,le.sum+=Math.max(0,bt.dl),ht.set(it,le)});let Et=[...ht].filter(([,bt])=>bt.sum/bt.n>=1).sort((bt,it)=>it[1].sum/it[1].n-bt[1].sum/bt[1].n).slice(0,8),ut=Et.length?Et[0][1].sum/Et[0][1].n:1;E+=`${__t(69)}`+(Et.length?Ea(Et.map(([bt,it])=>({lab:`<span class="sn" data-gs="${bt}">${p(w[bt].n)}</span>`,w:it.sum/it.n/ut,c:wf(it.sum/it.n),val:`${Ws(it.sum/it.n)} <small>${it.n} ${it.n===1?"tren":__t(70)}</small>`,tip:`${w[bt].n}: ${it.n}${__t(71)}${Ws(it.sum/it.n)}${__t(72)}`}))):__t(73))}else E+=`${__t(74)}`;let P=ee.hoy;E+=`<button type="button" class="hmore" data-cols>${on.on?__t(75):__t(76)}</button>`;{Fa("");let F=[...rs.m].filter(([D,H])=>q[D]&&H[0]>=3).map(([D,H])=>[D,H[1]/H[0]]).sort((D,H)=>D[1]-H[1]);F.length&&!Ae()?E+=`<h4>${__t(77)}</h4><small class="snote">${__t(78)}</small>`:F.length&&(E+=`${__t(79)}`+Ea(F.slice(0,8).map(([D,H])=>({lab:Dn(D),w:H,c:pi[Xn(H*100)],val:`${Math.round(H*100)}%`,tip:`${D}: ${Math.round(H*100)}${__t(80)}`}))))}{let F=(k,Y)=>{let ht=(k&&k.snaps||[]).filter(bt=>bt.n&&(!Y||bt.t<=Y)),Et=ht.reduce((bt,it)=>bt+it.n,0),ut=ht.reduce((bt,it)=>bt+it.ok,0);return Et?ut/Et*100:null},D=(ee.hoy&&ee.hoy.snaps||[]).filter(k=>k.n).map(k=>k.t).pop(),H=F(ee.hoy),Z=F(ee.ayer,D),g=H!=null?Math.round(H):null,C=Z!=null?Math.round(Z):null;H!=null&&(E+=`${__t(81)}${Xn(H)}">${Math.round(H)}${__t(82)}${Z!=null?`<span>${D?__t(83):__t(84)} <b class="${Xn(Z)}">${C} %</b></span><span>${g>C?__t(85):g<C?__t(86):__t(87)}</span>`:""}</div>`)}if(E+=`${__t(88)}`,P&&P.snaps){E+=kg(P.snaps);let F=Object.entries(P.st||{}).map(([Z,g])=>[qt.get(Z),g]).filter(([Z,g])=>Z!=null&&g.n>=3).map(([Z,g])=>[Z,g.sum/g.n/60,g]).filter(Z=>Z[1]>=1).sort((Z,g)=>g[1]-Z[1]).slice(0,8);if(F.length){let Z=F[0][1];E+=`${__t(89)}`+Ea(F.map(([g,C,k])=>({lab:`<span class="sn" data-gs="${g}">${p(w[g].n)}</span>`,w:C/Z,c:wf(C),val:`${Ws(C)}${__t(90)}${Math.round(k.max/60)}</small>`,tip:`${w[g].n}: ${k.n}${__t(91)}${k.d5}${__t(92)}${Math.round(k.max/60)} min`})))}let D=Object.entries(P.lines||{}).filter(([Z,g])=>q[Z]&&g.n>=3).sort((Z,g)=>Z[1].ok/Z[1].n-g[1].ok/g[1].n);D.length&&(E+=`${__t(93)}`+Ea(D.map(([Z,g])=>({lab:Dn(Z),w:g.ok/g.n,c:pi[Xn(g.ok/g.n*100)],val:`${Math.round(g.ok/g.n*100)}% <small>${Ws(g.sum/g.n/60)}</small>`,tip:`${Z}${__t(94)}${Math.round(g.ok/g.n*100)}${__t(95)}${Math.round(g.max/60)} min`}))));let H=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;E+=`<small class="snote">${H>40?`${__t(97)}${gs(H<90?Math.round(H)+" min":H<2160?Math.round(H/60)+" h":Math.round(H/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(98)}`:""}${__t(96)}${p((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(99):__t(100)}</small>`}else E+=`<p class="snote">${ee.at?__t(101):__t(102)}</p>`;return E+"</div>"}function $g(l){let d=ie(),_=It.filter(C=>(C.fam||C.tr&&C.tr.fam)===l),v=_.filter(C=>C.real),b=_.length,E=_.filter(C=>C.dl>=5).length,P=_.filter(C=>C.dl<3).length,F=_.filter(C=>C.stop==="via"||C.broke).length,D=$.alerts.filter(C=>C.fams.has(l)),H=C=>{let k=C.tr;if(!k)return"";let Y=C.v;if(C.real&&Y){let Et=Y.next>=0?w[k.pat.stops[Y.next]].n:"";return Y.atStop>=0?`${__t(103)}${w[k.pat.stops[Y.atStop]].n}`:Et?`${__t(104)}${Et}`:""}let ht=C.p;return ht&&ht.next!=null&&ht.next>=0?`${__t(104)}${w[k.pat.stops[ht.next]].n}`:""},Z=_.slice().sort((C,k)=>k.dl-C.dl).slice(0,40).map(C=>{let k=C.tr;return`<li class="go${Ra({num:k?k.num:C.v.num,tid:k?k.tid:C.v.tid})?" sel":""}" data-gt="${p(k?k.num:C.v.num)}|${p(C.real?C.v.tid:k?k.tid:"")}"><b>${p(k?k.num:C.v.num)}</b><span>${k?Oi(w[k.pat.stops[k.pat.stops.length-1]].n,l):""} <small>${p(H(C))}</small></span>${C.dl>=1?`<em class="dl ${Bi(C.dl)}">+${Math.round(C.dl)}</em>`:__t(105)}</li>`}).join(""),g=Fa(l);return`<div class="tc sts" style="--c:${q[l]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Dn(l)}${__t(106)}${d.live?`${__t(112)}${b}${__t(113)}${v.length<b?` (${v.length}${__t(114)}`:""}`:`${__t(115)}${at(d.min)}`}</small>
      <div class="kpis"><div class="kpi ${b?Xn(P/b*100):""}"><b>${b?Math.round(P/b*100)+"%":"\u2014"}${__t(107)}${E?E/Math.max(1,b)>.2?"b":"w":"g"}"><b>${E}${__t(108)}${F?"b":"g"}"><b>${F}${__t(109)}${D.length?Vg(D):__t(116)}${g<.7?`${__t(117)}${Math.round(g*100)}${__t(118)}`:""}${__t(110)}${Z||__t(119)}${__t(111)}`}let Vg=l=>`<div class="al">${l.slice(0,3).map(d=>`<p>\u26A0\uFE0F ${Pa(d)} ${p(d.txt)} <small>${La(d)}</small></p>`).join("")}</div>`,on={on:!1,mesh:null};function Ef(){let l=ee.hoy,d=[];if(l&&l.st)for(let[_,v]of Object.entries(l.st)){let b=qt.get(_);b!=null&&v.n>=2&&d.push([b,v.sum/v.n/60,v.n])}if(!d.length){let _=new Map;It.forEach(v=>{if(!v.real||!v.tr||v.v.next==null||v.v.next<0||v.v.pre||!$.delays.has(v.v.tid))return;let b=v.tr.pat.stops[v.v.next],E=_.get(b)||[0,0];E[0]+=Math.max(0,v.dl),E[1]++,_.set(b,E)}),_.forEach((v,b)=>d.push([b,v[0]/v[1],v[1]]))}return d}let Tf=()=>Math.min(1,Math.max(.22,r.dist/110));function Hg(){if(!on.mesh||!on.d)return;let l=Tf();if(Math.abs(l-on.r)<.04)return;on.r=l;let d=new Be;on.d.forEach(([_,v],b)=>{d.makeScale(l,l,.3+Math.min(v,40)*.3),d.setPosition(w[_].w[0],w[_].w[1],B),on.mesh.setMatrixAt(b,d)}),on.mesh.instanceMatrix.needsUpdate=!0,a()}function Gg(){if(on.mesh&&(e.remove(on.mesh),on.mesh.geometry.dispose(),on.mesh.material.dispose(),on.mesh=null),!on.on){a();return}let l=Ef();if(!l.length){un(__t(120)),on.on=!1;return}let d=new bo(.32,.32,1,16);d.rotateX(Math.PI/2),d.translate(0,0,.5);let _=new ar({fog:!1}),v=new vo(d,_,l.length),b=new Be,E=new me;on.d=l,on.r=Tf(),l.forEach(([P,F],D)=>{let H=.3+Math.min(F,40)*.3;b.makeScale(on.r,on.r,H),b.setPosition(w[P].w[0],w[P].w[1],B),v.setMatrixAt(D,b),E.set(F>10?"#dc2626":F>5?"#ea7a0c":F>=1?"#eab308":"#16a34a"),v.setColorAt(D,E)}),v.renderOrder=25,v.frustumCulled=!1,e.add(v),on.mesh=v,s.tilt<.5&&(s.tilt=.85),a()}let Cr=document.createElement("button");Cr.type="button",Cr.id="sbtn",Cr.title=__t(121),Cr.innerHTML=__t(122),Cr.onclick=()=>{et=!et,et&&(z=Kt=!1,ee.at=0),u._h="",De(),a()},document.body.appendChild(Cr);function Wg(){r.dist<45!=cn<45&&(cn=r.dist,we()),Hg(),Xg(),is()}let ss=[],xn=new X;function Xg(){let l=0;if(on.on){let _=Ef().sort((b,E)=>E[1]-b[1]),v=[];for(let[b,E]of _){if(l>=30)break;if(xn.set(w[b].w[0],w[b].w[1],B).project(n),xn.z>1||Math.abs(xn.x)>1||Math.abs(xn.y)>1)continue;let P=(xn.x*.5+.5)*innerWidth,F=(-xn.y*.5+.5)*innerHeight;if(v.some(([H,Z])=>Math.abs(H-P)<90&&Math.abs(Z-F)<18))continue;v.push([P,F]);let D=ss[l]||(ss[l]=Object.assign(document.createElement("div"),{className:"slab"}));D.isConnected||document.body.appendChild(D),D.textContent=w[b].n+" +"+Math.round(E)+"\u2032",D.dataset.i=b,D.style.display="block",D.style.transform=`translate(${Math.round(P+8)}px,${Math.round(F-8)}px)`,l++}for(;l<ss.length;l++)ss[l].style.display="none";return}if(r.dist<30){let _=[];for(let v=0;v<xt;v++)wt[v]<4||(xn.set(w[v].w[0],w[v].w[1],B).project(n),!(xn.z>1||Math.abs(xn.x)>1.05||Math.abs(xn.y)>1.05)&&_.push([v,(xn.x*.5+.5)*innerWidth,(-xn.y*.5+.5)*innerHeight]));if(_.length<=70)for(let[v,b,E]of _){let P=ss[l]||(ss[l]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=w[v].n,P.dataset.i=v,P.style.display="block",P.style.transform=`translate(${Math.round(b+8)}px,${Math.round(E-7)}px)`,l++}}for(;l<ss.length;l++)ss[l].style.display="none"}function dl(l){return xn.set(l[0],l[1],B).project(n),[(xn.x*.5+.5)*innerWidth,(-xn.y*.5+.5)*innerHeight,xn.z]}function Af(l,d,_,v){let b=null,E=_*_;for(let P of It){let[F,D,H]=dl(P.p.w);if(H>1)continue;let Z=(F-l)**2+(D-d)**2;Z<E&&(E=Z,b={a:P})}if(b)return b;E=v*v;for(let P=0;P<xt;P++){if(!wt[P])continue;let[F,D,H]=dl(w[P].w);if(H>1)continue;let Z=(F-l)**2+(D-d)**2;Z<E&&(E=Z,b={s:P})}return b}let Xs=!1;window.__rodHide=()=>{Xs=!0},document.addEventListener("click",l=>{Xs&&!l.target.closest("#mcs, canvas")&&(Xs=!1)},!0),window.__rodTap=(l,d)=>{let _=null,v=1e9;for(let E of ss){if(E.style.display==="none")continue;let P=E.getBoundingClientRect();if(l>=P.left-4&&l<=P.right+4&&d>=P.top-4&&d<=P.bottom+4){let F=Math.abs(d-(P.top+P.bottom)/2)*4+(l-P.left);F<v&&(v=F,_=E)}}if(_)return window.__rodPickStation(+_.dataset.i),!0;let b=Af(l,d,24,18);return b&&(b.a||b.s!=null)&&(Xs=!1),b&&(b.a||b.s!=null)&&(rt.st=-1),b&&b.a?(z=!1,Kt=!1,et=!1,ft=b.a.tr||{vtid:b.a.v.tid},Lt=-1,Rt=null,we(),De(),Wt=0,a(),!0):b&&b.s!=null?(z=!1,Kt=!1,et=!1,Lt=b.s,ft=null,Rt=null,we(),De(),a(),!0):!1},window.__rodHover=(l,d)=>{let _=Af(l,d,14,10);if(_&&_.a){let v=_.a,b=v.tr?w[v.tr.pat.stops[v.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${v.c}">\u25A0</span> ${p(v.fam||v.tr&&v.tr.fam||"?")}${__t(123)}${p(v.tr?v.tr.num:v.v.num)}</b><small>${b?__t(104)+p(b):""}${v.real?(v.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(v.dl)} min</b>`:__t(124))+__t(125):__t(126)}</small>`}return _&&_.s!=null?`<b>${p(w[_.s].n)}</b><small>${[...w[_.s].fams].sort(N).join(" \xB7 ")}</small>`:null},window.__rodPickStation=l=>{rt.st=-1,Xs=!1,z=Kt=et=!1,ft=null,Rt=null,Lt=l,we(),u._h="",De(),a()};{let l=m("#rc"),d=()=>{let _=l.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,_-64-10)+"px")};try{new ResizeObserver(d).observe(l)}catch{}addEventListener("resize",d),setTimeout(d,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let l=!1,d=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{d&&!l&&(l=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(_=>{_.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||_.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{ri()}catch{}},2500),setInterval(()=>{try{ee.at=0,ri()}catch{}},15*6e4);let Qn={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Ta=matchMedia("(prefers-color-scheme: dark)");function fl(){let l=Qn.mode==="dark"||Qn.mode==="auto"&&Ta.matches;document.documentElement.classList.toggle("dark",l);for(let _=0;_<xt;_++)Zt.set(l?[.06,.08,.11]:[1,1,1],_*3);Ut.attributes.fill.needsUpdate=!0,te.uniforms.border.value.set(l?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(l),qs.textContent=Qn.mode==="auto"?l?"\u{1F319}":"\u2600\uFE0F":Qn.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",qs.title=__t(127)+{auto:__t(128),dark:__t(129),light:"desactivado"}[Qn.mode];let d=document.querySelector("meta[name=theme-color]");d&&(d.content=l?"#0d1119":"#eef1f5"),a()}let qs=document.createElement("button");qs.type="button",qs.id="tbtn",qs.onclick=()=>{Qn.mode=Qn.mode==="auto"?Ta.matches?"light":"dark":Qn.mode==="dark"?"light":"dark",Qn.mode==="dark"===Ta.matches&&(Qn.mode="auto");try{localStorage.setItem("rod_theme",Qn.mode)}catch{}fl(),un(qs.title)},document.body.appendChild(qs);{let l=document.createElement("a");l.id="wabtn",l.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",l.target="_blank",l.rel="noopener",l.title=__t(130),l.innerHTML=__t(131),document.body.appendChild(l)}Ta.addEventListener&&Ta.addEventListener("change",fl),fl(),window.__rodTick=ze,window.__rodFrame=Wg,window.__rodResize=()=>{Ft.resolution.set(innerWidth,innerHeight),gt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let mi={st:-1,f:new Set},Cf=l=>{let d=[...w[l].fams].sort(N);return`<div class="sfc">${d.length>1?`<button type="button" data-sf="" class="${mi.f.size?"":"on"}${__t(132)}`:""}${d.map(_=>`<button type="button" data-sf="${p(_)}" class="ln ${mi.f.size&&!mi.f.has(_)?"off":""}${j.has(_)?"":" hid"}" style="--c:${q[_]}">${p(_)}</button>`).join("")}</div>${d.some(_=>!j.has(_))?__t(133):""}`},qg=l=>{let d=(l||"#6b7385").replace("#",""),_=parseInt(d.slice(0,2),16),v=parseInt(d.slice(2,4),16),b=parseInt(d.slice(4,6),16);return(.299*_+.587*v+.114*b)/255>.62?"#1d2330":"#fff"},Oi=(l,d)=>{let _=q[d]||"#6b7385";return`<span class="dst" style="background:${_};color:${qg(_)}" title="${p(d||"")}">${p(l)}</span>`},pl=l=>{let d=w[l]&&w[l].id;return tn.st.includes(d)?"\u{1F3E0} ":He.st.includes(d)?"\u{1F4BC} ":""},Bi=l=>l>10?"d-hi":l>5?"d-md":"d-lo",Yg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Aa={ref:null,m:new Map};function lu(l){if(Aa.ref!==$.alerts){Aa.ref=$.alerts,Aa.m=new Map;for(let d of $.alerts){if(d.src!=="Rodalies")continue;let _=d.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let v of(d.es||d.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Aa.m.set(v[1],{why:_?_[1].trim().replace(/\s+/g," "):"",txt:d.txt,when:d.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(d.es||d.txt)})}}return Aa.m.get(String(l))||null}let Ca={ref:null,m:new Map};function Rf(l){let d=String(l.tr?l.tr.num:l.v&&l.v.num||"");if(!d)return null;if(Ca.ref!==$.alerts){Ca.ref=$.alerts,Ca.m=new Map;for(let v of $.alerts)if(v.src==="Rodalies"&&Yg.test(v.es||v.txt))for(let b of(v.es||v.txt).matchAll(/\b(\d{4,6})\b/g))Ca.m.set(b[1],v)}let _=Ca.m.get(d);return _?{why:"aviso",txt:_.txt}:l.real&&l.stop==="via"&&l.v.still>=300?{why:"via",min:Math.round(l.v.still/60)}:null}let Ra=l=>{try{let d=ft;return d?d.num!=null&&String(d.num)===String(l.num)||l.tid&&(d.tid===l.tid||d.vtid===l.tid):!1}catch{return!1}},If=(l,d)=>{let _=T(l,d.min-1,d.min+240).sort((v,b)=>v.est-b.est).slice(0,6);return _.length?`${__t(134)}${_.map(v=>`<li><b>${at(v.est)}</b>${Dn(v.fam)}<span>${Oi(v.dest,v.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Si=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Zg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Si))}catch{}},Pf=l=>!!l&&Si.some(d=>d.num===String(l.num)),Ke=(()=>{try{let l=JSON.parse(localStorage.getItem("rod_alarm")||"null");return l&&Date.now()-l.at<4*36e5?l:null}catch{return null}})(),Rr=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Ke))}catch{}},ml=(l,d)=>!!(Ke&&l&&Ke.num===String(l.num)&&Ke.sid===w[l.pat.stops[d]].id);function cu(l,d){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}un(l+" \xB7 "+d),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(_=>_?_.showNotification(l,{body:d,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(l,{body:d})).catch(()=>{})}function Jg(){if(!Ke||Ke.done)return;let l=ie();if(!l.live)return;let d=t.days.indexOf(l.ymd),_=(Q[d]||[]).find(D=>String(D.num)===Ke.num)||(Q[d-1]||[]).find(D=>String(D.num)===Ke.num);if(!_)return;let v=_.pat.stops.findIndex(D=>w[D].id===Ke.sid);if(v<0)return;let b=tt(_),E=typeof b=="number"?Math.max(0,b/60):0,P=_.day===d-1?1440:0,F=_.t0+_.pat.t[2*v]+E-P;if(F-l.min<-3){Ke.done=!0,Rr();return}window.__schedAt&&(Ke.sch==null||Math.abs(Ke.sch-F)>=.5)&&(Ke.sch=F,Rr(),window.__schedAt(7701,`${__t(135)}${w[_.pat.stops[v]].n}`,__t(136)+` (${at(F)})`,Date.now()+(F-2-l.min)*6e4)),F-l.min<=2&&(Ke.done=!0,Rr(),window.__schedOff&&window.__schedOff(7701),cu(`${__t(135)}${w[_.pat.stops[v]].n}`,`${__t(137)}${Math.max(0,Math.round(F-l.min))}${__t(138)}${at(F)}${__t(139)}`))}function hu(l,d){let _=+l.t.slice(0,2)*60+ +l.t.slice(3,5),v=Q[d]||[],b=(F,D)=>F.t0+F.pat.t[2*D+1],E=null,P=11;for(let F of v){let D=F.pat.stops.findIndex(Z=>w[Z].id===l.sid);if(D<0||D===F.pat.stops.length-1)continue;let H=Math.abs(b(F,D)-_)+(String(F.num)===l.num?-5:0)+(F.fam===l.fam?0:20)+(l.dest&&w[F.pat.stops[F.pat.stops.length-1]].id!==l.dest?3:0);H<P&&(P=H,E=F)}return E}let gl=new Set;function Kg(){if(!Si.length)return;let l=ie();if(!l.live)return;let d=t.days.indexOf(l.ymd);for(let _ of Si){let v=hu(_,d);if(!v)continue;let b=v.pat.stops.findIndex(Z=>w[Z].id===_.sid);if(b<0)continue;let E=v.t0+v.pat.t[2*b+1],P=tt(v),F=typeof P=="number"?P/60:0,D=E-l.min;if(D<-2||D>60)continue;let H=l.ymd+_.num+(P==="X"?"X":F>=10?10:F>=5?5:0);gl.has(H)||(P==="X"||F>=5?(gl.add(H),cu(`${__t(140)}${at(E)} ${P==="X"?__t(141):`${__t(142)}${Math.round(F)} min`}`,`${v.fam} ${v.num}${__t(143)}${w[v.pat.stops[b]].n}${P==="X"?"":`${__t(144)}${at(E+F)}`}`)):D<=20&&!gl.has(l.ymd+_.num+"ok")&&$.vp.has(v.tid)&&(gl.add(l.ymd+_.num+"ok"),un(`${__t(140)}${at(E)}${__t(145)}`)))}}setInterval(()=>{try{Jg(),Kg()}catch{}},15e3);let Dn=l=>`<span class="ln" style="--c:${q[l]}">${p(l)}</span>`;{let l=_=>{let v=/^#?([0-9a-f]{6})$/i.exec(_||"");return v?[0,2,4].map(b=>{let E=parseInt(v[1].slice(b,b+2),16)/255;return E<=.03928?E/12.92:Math.pow((E+.055)/1.055,2.4)}).reduce((b,E,P)=>b+E*[.2126,.7152,.0722][P],0):0},d=[...new Set(Object.values(q))].filter(_=>l(_)>.3).map(_=>`.ln[style*="--c:${_}"],[data-f][style*="--c:${_}"].on,[data-f][style*="--c:${_}"]:not(.off){color:#14203a!important}`).join("");if(d){let _=document.createElement("style");_.textContent=d,document.head.appendChild(_)}}function Lf(l,d){return d?l==="X"?__t(147):l>=60?`<span class="st late ${Bi(l/60)}${__t(148)}${Math.round(l/60)} min</span>`:__t(149):__t(146)}function uu(){if(!u.classList.contains("peek")||window.__mapHidden||!u.getClientRects().length)return;let l=u.querySelector(".tc");if(!l)return;let d=l.querySelector(".st")||l.querySelector("p"),_=u.getBoundingClientRect().top-u.scrollTop,v=d?d.getBoundingClientRect().bottom-_+3:150;if(d){let b=d.nextElementSibling||d.parentElement!==l&&d.parentElement.nextElementSibling;b&&(v=Math.min(v,b.getBoundingClientRect().top-_-1))}u.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,v)))+"px")}function De(){try{jg()}finally{window.__rodTabSync&&window.__rodTabSync();try{uu()}catch{}}}function jg(){if(!ft&&Lt<0&&!Kt&&!z&&!et&&!nt){Xs=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),_u();return}let l=ie(),d="",_=Ae()&&l.live,v=(g,C)=>$.alerts.filter(k=>[...k.fams].some(Y=>g.has(Y))||C!=null&&k.stops.has(C)),b=g=>g.length?`<div class="al">${g.slice(0,4).map(C=>`<p>\u26A0\uFE0F ${Pa(C)} ${[...C.fams].sort(N).slice(0,6).map(Dn).join(" ")} ${p(C.txt)} <small>${La(C)}</small></p>`).join("")}${g.length>4?`<small>y ${g.length-4}${__t(150)}`:""}</div>`:"",E=ft&&_?It.find(g=>g.real&&(ft.vtid?g.v.tid===ft.vtid:g.tr===ft)):null;if(nt&&!et&&!z&&!Kt&&!ft&&Lt<0)d=$g(nt);else if(et)d=zg();else if(z)d=`${__t(151)}${p(m("#ver").firstChild.textContent)}</small><ul class="chg">${m("#chg").innerHTML||__t(153)}${__t(152)}`;else if(Kt){let g=$.alerts.filter(C=>[...C.fams].some(k=>j.has(k))||!C.fams.size);d=`${__t(154)}${g.length}${__t(155)}${g.map(C=>`<div class="al"><p>${Pa(C)} ${[...C.fams].sort(N).map(Dn).join(" ")} <small>${La(C)}</small></p><p>${p(C.txt)}</p></div>`).join("")||__t(157)}${__t(156)}${$.alertsTs&&Date.now()/1e3-$.alertsTs<6*3600?__t(158):`${__t(159)}${$.alertsTs?new Date($.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(E){let g=E.v,C=E.tr,k=Ee=>p(w[C.pat.stops[Ee]].n),Y=C?C.pat.stops.length:0,ht=qt.get(g.sid),Et=ht!=null?p(w[ht].n):p(g.sid),ut=C&&g.atStop>=0?k(g.atStop):"",bt=C&&g.next>=0?k(g.next):Et,it=C&&g.next>0?k(g.next-1):"",le=E.broke||Rf(E),ge=le?`<b class="stopv">\u26A0\uFE0F ${le.why==="aviso"?__t(160):`${__t(161)}${le.min} min`}</b>${C&&it?`${__t(162)}${it}${__t(163)}${bt}</b>`:""}`:E.stop==="via"&&C?`${__t(164)}${it?`${__t(166)}${it}${__t(163)}${bt}</b>`:`${__t(167)}${bt}</b>`}${__t(165)}${Math.max(1,Math.round(g.still/60))} min`:g.pre&&C?g.prevTr?`${__t(168)}${p(g.prevTr.num)}${__t(169)}${k(0)}</b>${g.prevDl>=1?`${__t(172)}${Math.round(g.prevDl)} min</b>`:""}${__t(170)}${at(g.arrO)}${__t(171)}${at(g.depEst)}</b>${g.preDl>=1?`${__t(173)}${at(g.dep0)})`:""}`:`${__t(174)}${k(0)}${__t(175)}${at(g.dep0+E.dl)}</b>`:ut&&g.before?`Llegando a <b>${ut}</b>`:(g.st==="STOPPED_AT"||E.stop==="st")&&ut?`${__t(176)}${ut}</b>`:ut&&g.next>=0&&g.atStop!==g.next?`${__t(177)}${ut}${__t(169)}${bt}</b>`:it?`${__t(178)}${it}${__t(163)}${bt}</b>`:`${__t(179)}${bt}</b>`,Vt=C&&g.next>=0&&!g.pre?at(Oa(C,g,g.next,C.t0+C.pat.t[2*g.next]+E.dl)):"",Ve=[];if(C){let Ee=E.idx>=0?E.idx:0,de=g.pre?Math.max(E.dl,g.preDl||0):E.dl,Sn=Xe=>C.t0+C.pat.t[Xe]+de;for(let Xe=Ee;Xe<Y;Xe++)Ve.push(`<li class="${pl(C.pat.stops[Xe])?"mine":""}${ml(C,Xe)?" alm":""}"><b>${at(Oa(C,g,Xe,Sn(Xe===0?1:2*Xe)))}</b><span title="${k(Xe)}">${pl(C.pat.stops[Xe])}${k(Xe)}</span>${de>=1?`<em class="dl ${Bi(de)}">${g.pre?"\u2248":""}+${Math.round(de)}</em>`:""}${Xe>0?`<button type="button" class="abtn" data-alarm="${Xe}" title="${__t(180)}">${ml(C,Xe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}d=`<div class="tc" style="--c:${E.c}"><button class="x" data-cx>\xD7</button><div>${Dn(E.fam)}${__t(181)}${p(C?C.num:g.num)}${__t(182)}${C?`<h3 class="rt"><span class="o" title="${k(0)}">${k(0)}</span><span class="ar">\u2192</span>${Oi(w[C.pat.stops[Y-1]].n,C.fam)}</h3>`:""}
        <p>${ge}${Vt?`${__t(183)}${Vt}`:""}${g.plat&&g.st==="STOPPED_AT"&&ut?`${__t(184)}${p(g.plat)}</b>`:""}</p><p>${g.pre&&g.prevTr?g.preDl>=1?`${__t(185)}${Math.round(g.preDl)}${__t(186)}`:__t(187):Lf($.delays.get(g.tid),$.delays.has(g.tid))}${(()=>{let Ee=C&&fi(C.num);return Ee&&Ee.n>=2?`${__t(188)}${Ee.n}${__t(189)}${Ee.late?`${__t(190)} <b>${Ee.late} ${__t(191)} ${Ee.n} ${__t(192)}</b> ${__t(193)}`:__t(194)} \xB7 ${__t(195)} ${Ee.avg<.5?"0":"+"+Math.round(Ee.avg)} min</span>`:""})()}${(()=>{let Ee=C&&lu(C.num);return Ee?`<span class="why" title="${p(Ee.txt)}">${Ee.why?__t(196)+p(Ee.why):__t(197)}</span>`:""})()}</p>
        <small>${g.pre?`${__t(198)}${gs(Math.round(E.age)+" s")}`:g.est?__t(199):`${__t(200)}${gs(Math.round(E.age)+" s")}${E.age>120?__t(201):""}`}</small>
        ${Ve.length?`${E.dl>=1||g.pre&&g.preDl>=1?`${__t(202)}`:""}<ol class="stops">${Ve.join("")}</ol>`:""}${b(v(new Set([E.fam])))}
        ${vl(C?C.num:g.num,"",E.fam)}${C?`<div class="rtb two"><button type="button" data-fav>${Pf(C)?__t(203):__t(204)}</button><button type="button" data-follow>${Rt===C?__t(205):__t(206)}</button></div>`:""}</div>`}else if(ft&&_&&!ft.pat)d=`${__t(207)}${p(ft.num||ft.vtid||"")}${__t(208)}`;else if(ft){let g=ft,C=g.pat,k=C.stops.length,Y=tt(g),ht=typeof Y=="number"?Y/60:0,Et=t.days.indexOf(l.ymd),ut=g.day===Et-1?1440:0,bt=l.min+ut-g.t0-ht,it=Ss(g,bt),le=de=>g.t0+C.t[de]+ht,ge=de=>p(w[C.stops[de]].n),Vt=__t(209);it&&(Vt=it.moving?`${__t(210)}${ge(it.next)}${__t(211)}${at(le(2*it.next))}`:it.at===k-1?`${__t(212)}${ge(k-1)}</b>`:`${__t(176)}${ge(it.at)}${__t(213)}${at(le(2*it.at+1))}`);let Ve=it?it.next:0,Ee=[];for(let de=Ve;de<k;de++)Ee.push(`<li class="${pl(C.stops[de])?"mine":""}${ml(g,de)?" alm":""}"><b>${at(Oa(g,null,de,le(2*de)))}</b><span title="${ge(de)}">${pl(C.stops[de])}${ge(de)}</span>${ht>=1?`<em class="dl ${Bi(ht)}">+${Math.round(ht)}</em>`:""}${de>0?`<button type="button" class="abtn" data-alarm="${de}" title="${__t(180)}">${ml(g,de)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);d=`<div class="tc" style="--c:${g.c}"><button class="x" data-cx>\xD7</button><div>${Dn(g.fam)}${__t(181)}${p(g.num)}${__t(214)}${ge(0)}">${ge(0)}</span><span class="ar">\u2192</span>${Oi(w[g.pat.stops[k-1]].n,g.fam)}</h3>
        <p>${Vt}</p><p>${Lf(Y,Y!=null)}${(()=>{let de=fi(g.num);return de&&de.n>=2?`${__t(188)}${de.n}${__t(189)}${de.late?`${__t(190)} <b>${de.late} ${__t(191)} ${de.n} ${__t(192)}</b> ${__t(193)}`:__t(194)} \xB7 ${__t(195)} ${de.avg<.5?"0":"+"+Math.round(de.avg)} min</span>`:""})()}${__t(215)}${at(g.t0+C.t[1])}${__t(216)}${at(g.t0+C.t[2*k-2])}${__t(217)}${ht>=1?__t(202):""}<ol class="stops">${Ee.join("")}</ol>${vl(g.num,"",g.fam)}<div class="rtb two"><button type="button" data-fav>${Pf(g)?__t(203):__t(204)}</button><button type="button" data-follow>${Rt===g?__t(205):__t(206)}</button></div></div>`}else{let g=Lt,C=t.days.indexOf(l.ymd),k=[];mi.st!==g&&(mi.st=g,mi.f.clear());let Y=it=>(!q[it]||j.has(it))&&(!mi.f.size||mi.f.has(it));if(C>=0){let it=(le,ge)=>{for(let Vt of le){if(!Y(Vt.fam))continue;let Ve=Vt.pat.stops.indexOf(g);if(Ve<0||Ve===Vt.pat.stops.length-1)continue;let Ee=tt(Vt),de=typeof Ee=="number"?Ee/60:0,Sn=Vt.t0+Vt.pat.t[2*Ve+1]-ge;Sn+de<l.min-1||Sn>l.min+360||k.push({tr:Vt,t:Sn,dl:de,d:Ee,on:$.vp.has(Vt.tid),past:l.min>Vt.t0+Vt.pat.t[1]-ge+2})}};it(Q[C],0),C>0&&it(Q[C-1],1440)}k.sort((it,le)=>it.t+it.dl-le.t-le.dl);let ht=w[g].id,Et=A.get(ht),ut=(_||W()&&l.live)&&$.url;ut&&(!Et||Date.now()-Et.at>3e4)&&!Et?.loading&&(A.set(ht,{...Et||{},loading:!0,at:Et?Et.at:0}),Ct($.url.replace(/\/+$/,""),"/departures.json?stationId="+ht).then(it=>{A.set(ht,{at:Date.now(),d:it}),Lt===g&&(u._h="",De())}).catch(()=>A.set(ht,{at:Date.now(),err:1})));let bt=ut&&Et&&Et.d&&Array.isArray(Et.d.trains)&&Et.d.trains.length?Et.d.trains:null;if(bt){let it=new Map([...$.vp.values()].map(Vt=>[String((ct.get(Vt.tid)||{}).num||Vt.num),Vt])),le=new Map(Ms(g).map(Vt=>[String(Vt.num),Vt])),ge=bt.filter(Vt=>Y((Vt.line||{}).id||"")).slice(0,40).map(Vt=>{let Ve=String(Vt.commercialNumber||Vt.technicalNumber||""),Ee=le.get(Ve),de=Ee?at(Ee.est):(Vt.departureDateHourSelectedStation||"").slice(11,16),Sn=(Vt.line||{}).id||"",Xe=it.get(Ve),ki=Ee?Math.round(Ee.dl)*60:Xe?$.delays.get(Xe.tid):null,as=Ee&&(Ee.gone||!Ee.live&&Ee.est<l.min-1);return`<li class="go${as?" old":""}${Ra({num:Ve,tid:Xe?Xe.tid:""})?" sel":""}" data-gt="${p(Ve)}|${Xe?p(Xe.tid):""}"><b>${p(de)}</b>${q[Sn]?Dn(Sn):`<span class="ln" style="--c:#6b7385">${p(Sn||"?")}</span>`}<span>${Oi((Vt.destinationStation||{}).name||"",Sn)}${Vt.trainObservations?` \xB7 <i>${p(Vt.trainObservations)}</i>`:""}${as?` <small class="oldt">${Ee.gone?__t(218):__t(219)}</small>`:""}</span>${Vt.trainCancelled?__t(220):typeof ki=="number"&&ki>=60?`<em class="dl ${Bi(ki/60)}">+${Math.round(ki/60)}</em>`:""}${Vt.platformSelectedStation?`${__t(221)}${p(Vt.platformSelectedStation)}</i>`:""}${Xe?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");d=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(w[g].n)}</h3>${Cf(g)}${vl("",w[g].id,"")}${__t(222)}${ge||__t(224)}</ol>${If(g,l)}${b(v(w[g].fams,g))}${__t(223)}`}else d=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(w[g].n)}</h3>${Cf(g)}${vl("",w[g].id,"")}
        <small style="margin-top:6px">${_&&$.url?__t(226):""}${__t(225)}${_?__t(227):__t(228)}</small>
        <ol>${k.slice(0,40).map(it=>`<li class="go${Ra({num:it.tr.num,tid:it.tr.tid})?" sel":""}" data-gt="${p(it.tr.num)}|${p(it.tr.tid)}"><b>${at(it.t+it.dl)}</b>${Dn(it.tr.fam)}<span>${Oi(w[it.tr.pat.stops[it.tr.pat.stops.length-1]].n,it.tr.fam)}</span>${it.d==="X"?__t(220):it.dl>=1?`<em class="dl ${Bi(it.dl)}">+${Math.round(it.dl)}</em>`:""}${_?it.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':it.past?__t(229):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(230)}</ol>${If(g,l)}${b(v(w[g].fams,g))}${__t(223)}`}let P=u.scrollTop;if(u._h!==d&&(u.innerHTML=d,u._h=d,u.scrollTop=P),u.style.display="flex",u.classList.toggle("min",Xs),_u(),innerWidth<=640){let g=u.querySelector(".tc");if(g&&!g.querySelector(".mn")){let C=document.createElement("button");C.type="button",C.className="mn",C.setAttribute("aria-label",__t(231)),C.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",C.onclick=Y=>{Y.stopPropagation(),u.classList.toggle("peek"),uu(),C.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0};let k=g.querySelector(".x");g.insertBefore(C,k?k.nextSibling:g.firstChild)}}else u.classList.remove("peek");let F=m("#rc");if(innerWidth<=640&&!F.classList.contains("min")&&!De.done&&(De.done=1,m("#rcgrab").click()),innerWidth<=640){let g=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(g+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-g-16)+"px"}else if(innerHeight<=500){let g=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(g+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-g-20+"px"}else u.style.top="",u.style.width=et?"390px":"300px",u.style.maxHeight="";let H=u.querySelector("[data-cx]");H&&(H.onclick=g=>{if(g.stopPropagation(),De.done=0,et||z||Kt||nt&&!ft&&Lt<0){et=z=Kt=!1,ft||Lt>=0||(nt=""),u._h="",De(),a();return}if(ft&&rt.st>=0){let C=rt.st;rt.st=-1,ft=null,Rt=null,Lt=C,we(),u._h="",De(),Wt=0,a();return}rt.st=-1,Kt=!1,z=!1,et=!1,ft=null,Lt=-1,Rt=null,we(),De(),Wt=0,a()}),Uf(u),u.querySelectorAll("[data-alarm]").forEach(g=>g.onclick=C=>{C.stopPropagation();let k=ft&&ft.pat?ft:ct.get(ft&&ft.vtid)||null;if(!k)return;let Y=+g.dataset.alarm,ht=w[k.pat.stops[Y]].id;Ke&&Ke.num===String(k.num)&&Ke.sid===ht?(Ke=null,window.__schedOff&&window.__schedOff(7701),un(__t(232))):(Ke={num:String(k.num),sid:ht,at:Date.now()},un(`${__t(233)}${w[k.pat.stops[Y]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Rr(),u._h="",De()});{let g=u.querySelector("[data-fav]");g&&(g.onclick=C=>{C.stopPropagation();let k=ft&&ft.pat?ft:ct.get(ft&&ft.vtid)||null;if(!k)return;let Y=Si.findIndex(ht=>ht.num===String(k.num));if(Y>=0)Si.splice(Y,1),un(__t(234));else{let ht=[...tn.st,...He.st,...Nt.st],Et=k.pat.stops.find(ut=>ht.includes(w[ut].id))??k.pat.stops[0];Si.push({num:String(k.num),fam:k.fam,sid:w[Et].id,dest:w[k.pat.stops[k.pat.stops.length-1]].id,t:at(k.t0+k.pat.t[2*k.pat.stops.indexOf(Et)+1])}),un(`${__t(235)}${k.fam}${__t(236)}${Si[Si.length-1].t}${__t(143)}${w[Et].n}${__t(237)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Zg(),u._h="",De(),$e(!0)})}{let g=u.querySelector("[data-share]");g&&(g.onclick=()=>{let C=nt,k=It.filter(ut=>(ut.fam||ut.tr&&ut.tr.fam)===C),Y=k.filter(ut=>ut.dl>=5).sort((ut,bt)=>bt.dl-ut.dl),ht=$.alerts.filter(ut=>ut.fams.has(C)),Et=`${C}${__t(238)}${at(ie().min)}: ${k.length}${__t(239)}${Y.length}${__t(240)}${Y.length?" ("+Y.slice(0,4).map(ut=>`${ut.tr?ut.tr.num:ut.v.num} +${Math.round(ut.dl)}`).join(", ")+")":""}.${ht.length?__t(241)+ht[0].txt:__t(242)}`;navigator.share?navigator.share({text:Et}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Et),un(__t(243)+Et.slice(0,60)+"\u2026"))})}{let g=u.querySelector("[data-cols]");g&&(g.onclick=()=>{on.on=!on.on,Gg(),u._h="",De()})}u.querySelectorAll("[data-gs]").forEach(g=>g.onclick=()=>{let C=+g.dataset.gs;et=!1,window.__rodPickStation(C),Object.assign(s,{tx:w[C].w[0],ty:w[C].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(g=>g.onclick=C=>{C.stopPropagation();let k=g.dataset.sf;k?mi.f.has(k)?mi.f.delete(k):mi.f.add(k):mi.f.clear(),u._h="",De()}),u.querySelectorAll("[data-gt]").forEach(g=>g.onclick=()=>{rt.st=Lt;let[C,k]=g.dataset.gt.split("|"),Y=ct.get(k);wl({num:C,tid:$.vp.has(k)?k:"",tr:Y||null})}),u.querySelectorAll("[data-sethome]").forEach(g=>g.onclick=()=>yu(Lt,g.dataset.sethome));let Z=u.querySelector("[data-follow]");Z&&(Z.onclick=()=>{Rt=Rt===ft?null:ft,Rt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,m("#rc").classList.contains("min")||m("#rcgrab").click())):u.classList.remove("peek"),u._h="",De(),a()})}window.__rodCard=De;try{let l=localStorage.getItem("rod_inf");(l==="mini"||l==null)&&m("#inf").classList.add("mini")}catch{}m("#inft").onclick=()=>{let l=m("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",l?"mini":"")}catch{}(ft||Lt>=0||Kt||z)&&(u._h="",De())},m("#ver").onclick=()=>{z=!0,et=!1,Kt=!1,u._h="",De()};let _l={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Qg=["vacio","lleno","petado",__t(244),"calor","abordo"],t0=["gente","retraso","cancel","ascensor","via"],e0={vacio:__t(245),lleno:__t(246),petado:__t(247),parado:__t(248),calor:__t(249),abordo:__t(250),gente:__t(251),retraso:__t(252),cancel:__t(253),ascensor:__t(254),via:__t(255)},xl=l=>($.tipos||e0)[l]||l,du=(l,d)=>($.rep||[]).filter(_=>l&&_.num===String(l)&&!_.sid||d&&_.sid===String(d)&&!_.num||l&&d&&_.num===String(l)&&_.sid===String(d)),Df=l=>{let d=Math.round((Date.now()+($.repSkew||0)-l.at)/6e4);return d<1?__t(256):gs(d+" min")},Ia=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function vl(l,d,_){if(!$.url||!$.repOk)return"";let v=du(l,d),b=l?Qg:t0;return`${__t(257)}${v.length?"":__t(259)}</small>${v.map(E=>`<p><span>${_l[E.kind]||"\u2022"} <b>${p(xl(E.kind))}</b> <small>${E.up>1?E.up+__t(260):""}${Df(E)}</small></span>${Ia.has(E.id)?"<small>\u2713</small>":`<button type="button" data-rv="${E.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${E.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${l?__t(261):__t(262)}</summary><div class="ckb">${b.map(E=>`<button type="button" data-rk="${E}" data-rn="${p(l||"")}" data-rs="${p(d||"")}" data-rl="${p(_||"")}">${_l[E]} ${p(xl(E))}</button>`).join("")}${__t(258)}`}async function Nf(l,d){try{let v=await(await fetch($.url.replace(/\/+$/,"")+d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();if(!v.ok){un(v.err||__t(263));return}if(v.id){Ia.add(v.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ia].slice(-300)))}catch{}}un(d==="/vote"?__t(264):v.n>1?`${__t(265)}${v.n}${__t(266)}`:__t(267));let b=await Ct($.url.replace(/\/+$/,""),"/reports.json");b&&b.items&&($.rep=b.items),u._h="",De(),$e(!0)}catch{un(__t(268))}}function Uf(l){l.querySelectorAll("[data-rk]").forEach(d=>d.onclick=_=>{_.stopPropagation(),d.disabled=!0,Nf({kind:d.dataset.rk,num:d.dataset.rn,sid:d.dataset.rs,line:d.dataset.rl},"/report")}),l.querySelectorAll("[data-rv]").forEach(d=>d.onclick=_=>{_.stopPropagation();let[v,b]=d.dataset.rv.split(":");Ia.add(+v);try{localStorage.setItem("rod_votes",JSON.stringify([...Ia].slice(-300)))}catch{}Nf({id:+v,v:+b},"/vote")})}let Ff=0;function un(l){let d=m("#toast");d||(d=document.createElement("div"),d.id="toast",document.body.appendChild(d)),d.textContent=l,d.className="on",clearTimeout(Ff),Ff=setTimeout(()=>{d.className=""},2600)}function Pa(l){return l.src?`<b class="asrc ${l.src==="Adif"?"adif":""}">${l.src==="Adif"?__t(269):p(l.src)}</b>`:""}function La(l){if(!l.when)return"";let[d,_]=l.when.split("T"),v=vt(new Date),b=v.ymd.slice(0,4)+"-"+v.ymd.slice(4,6)+"-"+v.ymd.slice(6,8);if(d===b&&_){let E=Math.round(v.min-(+_.slice(0,2)*60+ +_.slice(3,5)));return E<1?__t(256):E<60?gs(E+" min"):`${__t(270)}${_.slice(0,5)}`}return`${d.slice(8,10)}/${d.slice(5,7)}${_?" "+_.slice(0,5):""}`}function fu(){let l=m("#alr");if(!l)return;let d=$.alerts.filter(_=>[..._.fams].some(v=>j.has(v))).length;l.hidden=!d,l.textContent=`\u26A0\uFE0F ${d}${d===1?__t(271):__t(272)}`}{let l=m("#alrslot");l&&l.appendChild(m("#alr"))}m("#alr").onclick=()=>{z=!1,et=!1,Kt=!0,De()},m("#wcopy").onclick=async()=>{let l=m("#wcode").textContent;try{await navigator.clipboard.writeText(l),m("#wcopy").textContent=__t(273)}catch{let _=document.createRange();_.selectNodeContents(m("#wcode"));let v=getSelection();v.removeAllRanges(),v.addRange(_),m("#wcopy").textContent=__t(274)}setTimeout(()=>m("#wcopy").textContent=__t(275),2500)};let n0=qt.get("71801");function i0(l,d){let _=w[l].id,v=A.get(_);!(ce()&&$.url)||v&&(v.loading||Date.now()-v.at<3e4)||(A.set(_,{...v||{},loading:!0,at:v?v.at:0}),Ct($.url.replace(/\/+$/,""),"/departures.json?stationId="+_).then(b=>{A.set(_,{at:Date.now(),d:b}),d&&d()}).catch(()=>A.set(_,{at:Date.now(),err:1})))}let Of=l=>+l.slice(0,2)*60+ +l.slice(3,5),Da={k:-2,m:null};function Na(l){let d=t.days.indexOf(ie().ymd);if(Da.k!==d){Da.k=d,Da.m=new Map;for(let _ of Q[d]||[])Da.m.set(String(_.num),_)}return Da.m.get(String(l))||null}let rs={at:0,m:new Map},Ua=l=>Ae()?(Fa(""),[...l].filter(d=>{let _=rs.m.get(d);return _&&_[0]>=2&&_[1]===0}).sort(N)):[];function Fa(l){if(Date.now()-rs.at>6e4){rs.at=Date.now(),rs.m=new Map;let _=ie(),v=t.days.indexOf(_.ymd);if(v>=0)for(let b of Q[v]){let E=_.min-b.t0;if(E<b.pat.t[1]+3||E>b.pat.t[b.pat.t.length-2]-3)continue;let P=rs.m.get(b.fam)||[0,0];P[0]++,$.vp.has(b.tid)&&P[1]++,rs.m.set(b.fam,P)}}let d=rs.m.get(l);return d&&d[0]>=3?d[1]/d[0]:1}function Oa(l,d,_,v){let b=w[l.pat.stops[_]].id;if([...tn.st,...He.st].includes(b)){let E=Ms(l.pat.stops[_]).find(P=>String(P.num)===String(l.num));if(E&&!E.gone)return E.est}return pu(l,d,_,0,v)}function Bf(l,d){if(!l||!d||d.pre||d.dObs==null||d.err==null||d.err>.6)return null;let _=Date.now()/1e3-d.ts;if(_>150||_<-30||(d.still||0)>=90)return null;let v=Jt(l.pat).stopD,b=l.pat.t,E,P,F=v.reduce((D,H,Z)=>Math.abs(H-d.dObs)<Math.abs(v[D]-d.dObs)?Z:D,0);if(Math.abs(v[F]-d.dObs)<.16||d.atStop===F)E=b[2*F+1]??b[2*F],P=F;else{let D=v.findIndex(Z=>Z>d.dObs);if(D<=0)return null;let H=Math.min(1,Math.max(0,(d.dObs-v[D-1])/(v[D]-v[D-1]||1)));E=b[2*D-1]+H*(b[2*D]-b[2*D-1]),P=D-1}return{t:vt(new Date).min-_/60,tpos:E,j0:P,sd:v}}function pu(l,d,_,v,b){let E=Bf(l,d);if(!E||_<=E.j0&&!(_===E.j0&&v===1))return b;let P=l.pat.t,F=E.t+(P[2*_+v]??P[2*_])-E.tpos;if(F-E.t>45)return b;let D=(b%1440+1440)%1440,H=((F-D+720)%1440+1440)%1440-720;return H>=-3&&H<=5?b+H:b}function cb(l,d,_,v){let b=Bf(l,d);if(!b)return null;let E=pu(l,d,_,1,b.t+l.pat.t[2*_+1]-b.tpos);return E-v.min>30||E<v.min-1?null:E}function Ms(l,d){let _=ie(),v=(Ae()||W())&&_.live&&!d,b=A.get(w[l].id),E=[],P=new Map([...$.vp.values()].map(D=>[String((ct.get(D.tid)||{}).num||D.num),D]));if(v&&b&&b.d&&Array.isArray(b.d.trains)&&b.d.trains.length)for(let D of b.d.trains){let H=(D.departureDateHourSelectedStation||"").slice(11,16);if(!H)continue;let Z=String(D.commercialNumber||D.technicalNumber||""),g=P.get(Z),C=g?$.delays.get(g.tid):null,k=Math.max(typeof C=="number"?Math.max(0,C/60):0,g&&g.pre&&g.preDl||0),Y=Of(H);Y<_.min-720&&(Y+=1440);let ht=+(D.departureDateHourSelectedStation||"").slice(17,19)||0,Et=Y+ht/60,ut=g&&ct.get(g.tid)||Na(Z),bt=ut?ut.pat.stops.indexOf(l):-1,it=bt>=0?(ut.t0+ut.pat.t[2*bt+1])%1440:null;if(it!=null){for(;it<Et-720;)it+=1440;for(;it>Et+720;)it-=1440;Math.abs(Et-it)>120&&(it=null)}let le,ge;it==null?(le=ht||!k?Et:Et+k,ge=ht?0:k):ht||Math.abs(Et-it)>=1?(le=Et,ge=Math.max(0,Et-it)):(le=it+k,ge=k);let Vt=!1;if(ut&&!g&&bt>0&&!ht){let Ve=t.days.indexOf(_.ymd),Ee=ut.day===Ve-1?1440:ut.day===Ve+1?-1440:0,de=ut.t0+ut.pat.t[1]-Ee;if(_.min<de){let Sn=de+(ut.pat.t[2*bt+1]-ut.pat.t[1]);Sn>le+1&&(le=Sn,Vt=!0,it!=null&&(ge=Math.max(0,le-it)))}}if(it!=null&&(Y=Math.round(it)),g&&ut&&bt>=0){let Ve=pu(ut,g,bt,1,le);Ve!==le&&(le=Math.max(Ve,_.min),it!=null&&(ge=Math.max(0,le-it)))}E.push({dubious:Vt,rodLive:!!ht,sm:Y,est:le,dl:ge,fam:(D.line||{}).id||"",dest:(D.destinationStation||{}).name||"",destId:(D.destinationStation||{}).id||"",plat:D.platformSelectedStation||"",cancel:!!D.trainCancelled,obs:D.trainObservations||"",live:!!g,num:Z,tid:g?g.tid:"",tr:g&&ct.get(g.tid)||Na(Z),src:"oficial"})}else{let D=t.days.indexOf(_.ymd);if(D<0)return E;let H=(Z,g)=>{for(let C of Z){let k=C.pat.stops.indexOf(l);if(k<0||k===C.pat.stops.length-1)continue;let Y=tt(C),ht=typeof Y=="number"?Math.max(0,Y/60):0,Et=C.t0+C.pat.t[2*k+1]-g;if(Et+ht<_.min-1||Et>_.min+(_.min>1080||_.min<300?600:360))continue;let ut=C.pat.stops[C.pat.stops.length-1];E.push({sm:Et,est:Et+ht,dl:ht,fam:C.fam,dest:w[ut].n,destId:w[ut].id,plat:"",cancel:Y==="X",obs:"",live:$.vp.has(C.tid),num:C.num,tid:C.tid,tr:C,src:"horario"})}};H(Q[D],0),D>0&&H(Q[D-1],1440),D+1<t.days.length&&_.min>1080&&H(Q[D+1],-1440)}if(v){let D=new Set(E.map(g=>g.num)),H=t.days.indexOf(_.ymd),Z=(g,C)=>{for(let k of g||[]){if(D.has(String(k.num)))continue;let Y=k.pat.stops.indexOf(l);if(Y<0||Y===k.pat.stops.length-1)continue;let ht=k.t0+k.pat.t[2*Y+1]-C;if(ht<_.min-45||ht>_.min+1||!$.vp.get(k.tid))continue;let ut=$.delays.get(k.tid),bt=typeof ut=="number"?Math.max(0,ut/60):0,it=k.pat.stops[k.pat.stops.length-1];E.push({sm:ht,est:ht+bt,dl:bt,fam:k.fam,dest:w[it].n,destId:w[it].id,plat:"",cancel:!1,obs:"",live:!0,num:k.num,tid:k.tid,tr:k,src:"horario"})}};H>=0&&(Z(Q[H],0),H>0&&Z(Q[H-1],1440));for(let g of E){let C=g.tid&&$.vp.get(g.tid),k=g.tr?g.tr.pat.stops.indexOf(l):-1;g.passed=!!(C&&k>=0&&!C.pre&&C.next!=null&&C.next>=0&&C.next>k&&C.atStop!==k),!g.passed&&g.live&&g.est<_.min&&(g.est=_.min,g.late=!0),g.passed&&(g.gone=!0)}}let F=E.filter(D=>D.gone?_.min-D.est<20:D.est>=_.min-.5).sort((D,H)=>D.est-H.est);{let D=F.filter(H=>H.gone);if(D.length>2){let H=new Set(D.slice(0,D.length-2));F=F.filter(Z=>!H.has(Z))}}if(!F.filter(D=>!D.gone).length&&E.length&&E[0].src==="oficial"&&!d)return Ms(l,!0);for(let D of F){let H=D.num&&lu(D.num);H&&H.cx&&(D.cancel=!0,D.cxWhy=H.txt)}if(Ae()&&_.live){let D=t.days.indexOf(_.ymd);for(let H of F){if(H.live||H.cancel||!H.tr)continue;let Z=H.tr.day===D-1?1440:H.tr.day===D+1?-1440:0,g=H.tr.t0+H.tr.pat.t[1]-Z+(H.dl||0);H.noPos=_.min>g+3&&!H.rodLive,H.ghost=H.noPos&&Fa(H.fam)>=.7}}if(d||(F=F.concat(T(l,_.min-.5,_.min+360)).sort((D,H)=>D.est-H.est)),!d&&F.some(D=>D.src==="oficial")){let D=E.filter(g=>g.src==="oficial"),H=Math.max(...D.map(g=>g.sm)),Z=new Set(D.map(g=>String(g.num)));F=F.concat(Ms(l,!0).filter(g=>!g.gone&&g.sm<=H&&g.est>=_.min-.5&&!Z.has(String(g.num))).map(g=>Object.assign(g,{unconf:!0}))).sort((g,C)=>g.est-C.est)}if(F.some(D=>D.src==="oficial")){let D=Math.max(...F.map(Z=>Z.sm)),H=new Set(F.map(Z=>Z.num));F=F.concat(Ms(l,!0).filter(Z=>Z.sm>D&&!H.has(String(Z.num))))}return F}let kf=(l,d,_,v)=>{let b={key:l,ico:d,name:_,st:[],i:0,walk:10,open:!1};try{let E=JSON.parse(localStorage.getItem("rod_"+l)||"null");E&&Object.assign(b,E)}catch{}return!b.st.length&&v&&(b.st=v),b},tn=kf("home","\u{1F3E0}",__t(276),null),He=kf("work","\u{1F4BC}",__t(277),null),Nt={key:"near",ico:"\u{1F4CD}",name:__t(278),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Ba=[Nt,tn,He];try{Nt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}tn.open=!1,He.open=!1;function zf(l,d){let _=St(l,d),v=St(l,d+.009);return 1/Math.hypot(v[0]-_[0],v[1]-_[1])}function mu(l){if(!navigator.geolocation){Nt.err=__t(279),$e(!0);return}navigator.geolocation.getCurrentPosition(d=>{let{longitude:_,latitude:v}=d.coords,b=St(_,v),E=zf(_,v),P=w.map((Z,g)=>[g,Math.hypot(Z.w[0]-b[0],Z.w[1]-b[1])*E]).filter(([Z])=>w[Z].fams.size).sort((Z,g)=>Z[1]-g[1]),F=P.filter(([,Z],g)=>g===0||Z<Math.max(2.5,P[0][1]*1.6)).slice(0,3),D=Nt.st[0]!==w[F[0][0]].id;Nt.w=b,Nt.k=E,Nt.acc=d.coords.accuracy!=null?d.coords.accuracy:999,Nt.st=F.map(([Z])=>w[Z].id),Nt.dist=Object.fromEntries(F.map(([Z,g])=>[w[Z].id,g])),Nt.fix=Date.now(),Nt.err="",D&&(Nt.i=0);let H=[tn,He].find(Z=>Z.st.includes(Nt.st[0])&&Nt.dist[Nt.st[0]]<1.5);$e(!0)},d=>{Nt.err=d.code===1?__t(280):__t(281),$e(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let $f=l=>Math.max(1,Math.round(l*1.3/.08));setTimeout(()=>mu(!0),400);let Ce={fixes:[],tid:"",no:new Map,shown:""};function s0(){let l=Ce.fixes;if(l.length<2)return;let d=l[l.length-1],_=l.slice().reverse().find(C=>d.t-C.t>=8e3&&d.t-C.t<=9e4);if(!_)return;let v=Math.hypot(d.w[0]-_.w[0],d.w[1]-_.w[1])*d.k,b=d.spd!=null&&d.spd>0?d.spd*3.6:v/((d.t-_.t)/36e5);if(d.acc!=null&&d.acc>100||Ce.manual&&Date.now()<Ce.manual)return;if(Ce.tid){if(b<22)return;let C=It.find(k=>k.tr&&String(k.tr.num)===Ce.tid)||Gs(ie()).out.find(k=>k.tr&&String(k.tr.num)===Ce.tid);if(C){if(Math.hypot(C.p.w[0]-d.w[0],C.p.w[1]-d.w[1])*d.k<=5){Ce.far=0;return}if(Ce.far||(Ce.far=d.t),d.t-Ce.far<12e4)return}Ce.far=0}if(b<22||b>200)return;let E=[d.w[0]-_.w[0],d.w[1]-_.w[1]],P=null,F=2.5,D=It.filter(C=>C.real),H=Gs(ie()).out.filter(C=>C.tr&&!D.some(k=>k.tr&&String(k.tr.num)===String(C.tr.num)));for(let C of[...D,...H]){if(!C.tr)continue;let k=C.real?2.5:3.5,Y=Math.hypot(C.p.w[0]-d.w[0],C.p.w[1]-d.w[1])*d.k;if(Y>Math.min(F,k)||P&&P.real&&!C.real)continue;let ht=C.real?C.v.next:C.p.next;if(ht==null||ht<0)continue;let Et=w[C.tr.pat.stops[ht]].w,ut=[Et[0]-C.p.w[0],Et[1]-C.p.w[1]];if(ut[0]*E[0]+ut[1]*E[1]<=0)continue;let bt=String(C.tr.num);(Ce.no.get(bt)||0)>Date.now()||(F=Y,P=C)}if(!P){Ce.cand=null;return}let Z=String(P.tr.num);if(Ce.tid===Z)return;if(Ce.tid){if(d.acc!=null&&d.acc>50)return;if(!Ce.cand||Ce.cand.k!==Z){Ce.cand={k:Z,t:d.t};return}if(d.t-Ce.cand.t<2e4)return}Ce.cand=null,Ce.tid=Z,z=Kt=et=!1,Lt=-1,ft=P.tr,Rt=P.tr,Object.assign(s,{tx:P.p.w[0],ty:P.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());{let C=P.tr.pat.stops,k=P.real?P.v.next:P.p.next,Y=[...tn.st,...He.st],ht=C.findIndex((Et,ut)=>ut>=k&&Y.includes(w[Et].id));ht>0&&!(Ke&&Ke.num===Z)&&(Ke={num:Z,sid:w[C[ht]].id,at:Date.now()},Rr())}we(),u._h="",De(),Wt=0,a();let g=m("#onb");g||(g=document.createElement("div"),g.id="onb",document.body.appendChild(g)),g.innerHTML=`${__t(282)}${p(P.tr.fam)} ${p(P.tr.num)}${__t(283)}${p(w[P.tr.pat.stops[P.tr.pat.stops.length-1]].n)}${__t(284)}${Ke&&Ke.num===Z?`${__t(286)}${p(w[qt.get(Ke.sid)].n)}`:""}${__t(285)}`,g.className="on",g.querySelector("[data-onb-no]").onclick=()=>{Ce.no.set(Z,Date.now()+20*6e4),Ce.tid="",Rt=null,ft=null,u._h="",De(),g.className=""},g.querySelector("[data-onb-x]").onclick=()=>{g.className=""},setTimeout(()=>{g.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let l=null,d=()=>{l==null&&(l=navigator.geolocation.watchPosition(v=>{let{longitude:b,latitude:E}=v.coords,P={t:v.timestamp||Date.now(),w:St(b,E),k:zf(b,E),spd:v.coords.speed,acc:v.coords.accuracy};Ce.fixes.push(P),Ce.fixes=Ce.fixes.filter(F=>P.t-F.t<12e4);try{ie().live&&s0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},_=()=>{l!=null&&(navigator.geolocation.clearWatch(l),l=null)};setTimeout(d,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?_():(Ce.fixes=[],d())})}setInterval(()=>{!document.hidden&&(Date.now()-Nt.fix>11e4||Ba.some(l=>l.goAt))&&mu(!1)},3e4);let Mi=l=>{try{localStorage.setItem("rod_"+l.key,JSON.stringify({st:l.st,i:l.i,walk:l.walk,open:l.open,hide:l.hide||"",goAt:l.goAt||0,platAt:l.platAt||0}))}catch{}},gi=l=>l.st.length?qt.get(l.st[l.i]||l.st[0]):null;function Vf(l,d,_,v){if(v&&d.bus)return d.bstops.slice(1).some(P=>v.has(P))?"to":"out";if(v&&d.tr){let P=d.tr.pat.stops,F=P.indexOf(l);if(F>=0&&P.slice(F+1).some(D=>v.has(D)))return"to"}if(v&&d.tr)return"out";let b=qt.get(d.destId)??w.findIndex(P=>P.n===d.dest);if(b<0||b==null||_==null)return"otros";let E=P=>Math.hypot(w[P].w[0]-w[_].w[0],w[P].w[1]-w[_].w[1]);return E(b)<E(l)?"to":"out"}let Ys=l=>l<1?__t(256):l<60?Math.floor(l)+" min":Math.floor(l/60)+" h "+String(Math.floor(l%60)).padStart(2,"0"),Hf=0,r0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Gf=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Wf=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,ka=l=>{let d=l.es||l.txt;return Gf.test(d)||Gf.test(l.txt)?3:Wf.test(d)||Wf.test(l.txt)||l.lvl>=2?2:1};function a0(l,d,_){let v=gi(l);if(l===Nt){if(Ce.tid)return"";if(v==null)return`${__t(287)}${Nt.err?p(Nt.err)+__t(288):__t(289)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([tn,He].find(Ot=>Ot.st.includes(Nt.st[0])&&Nt.dist[Nt.st[0]]<1.5)||Date.now()-Nt.fix>10*6e4)return"";l.walk=$f(Nt.dist[l.st[l.i]]||0)}if(v==null){let lt=Nt.st.length?qt.get(Nt.st[0]):null,Ot=l===He?tn:He,ne=lt!=null&&!Ot.st.includes(Nt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${l.ico}</span><span class="htit"><b>${l.name}</b><small>${ne?`${__t(290)}${p(w[lt].n)}</b>`:__t(291)}</small></span>${ne?`<button type="button" class="hpick" data-hnear="${l.key}${__t(292)}`:""}<button type="button" class="hpick alt" data-hset="${l.key}">${ne?__t(293):__t(294)}</button></div></div>`}i0(v,()=>$e(!0));let b=l===Nt?null:l===tn?He:tn,E=b?gi(b):null,P=E!=null&&E!==v?E:n0,F=E!=null&&E!==v?b===He?__t(295):"casa":"Barcelona",D=w[v].fams,H=new Set([...D].filter(lt=>j.has(lt))),Z=H.size<D.size,g=!1;H.size||(H=new Set(D),Z=!1,g=!0);let C=Nt.w?Math.hypot(w[v].w[0]-Nt.w[0],w[v].w[1]-Nt.w[1])*Nt.k:null,k=C!=null&&Date.now()-Nt.fix<10*6e4;l.platAt&&Date.now()-l.platAt>45*6e4&&(l.platAt=0,Mi(l));let Y=l!==Nt&&!!l.platAt,ht=l===Nt||k&&C>3&&!l.goAt&&!Y,Et=Y||l!==Nt&&k&&C<.08&&Nt.acc<=40&&!(l===tn&&Nt.homeW&&Math.hypot(Nt.homeW[0]-Nt.w[0],Nt.homeW[1]-Nt.w[1])*Nt.k<.05),ut=l.goAt?(Date.now()-l.goAt)/6e4:null;ut!=null&&(ut>60||Et)&&(l.goAt=0,Mi(l));let bt=!Et&&l!==Nt&&!!l.goAt,it=bt?k&&C<=3?$f(C):Math.max(0,l.walk-ut):0,le=Ms(v),ge=le.filter(lt=>!q[lt.fam]||j.has(lt.fam)||g),Vt=ht||Et?0:bt?it:l.walk,Ve=$.alerts.filter(lt=>[...lt.fams].some(Ot=>H.has(Ot))||lt.stops&&lt.stops.has(v)),Ee=Ve.some(lt=>r0.test(lt.es||lt.txt)),de={to:[],out:[],otros:[],all:ge},Sn=F!=="Barcelona"?new Set(b.st.map(lt=>qt.get(lt)).filter(lt=>lt!=null)):null;ge.forEach(lt=>de[Vf(v,lt,P,Sn)].push(lt));let Xe="";if(Sn&&!de.to.length&&ge.length<le.length){let lt=le.filter(Ot=>!ge.includes(Ot)&&Vf(v,Ot,P,Sn)==="to");lt.length&&(de.to=lt,Xe=[...new Set(lt.map(Ot=>Ot.fam))].sort(N).join(", "))}let ki=lt=>{if(lt==="all")return __t(296);let Ot=xe=>(xe.find(En=>En.fam)||{}).fam;if(lt==="to")return __t(297)+Oi(F==="Barcelona"?"Barcelona":w[P].n,Ot(de.to)||[...H][0])+(()=>{let xe=Z&&!Xe?[...H].filter(En=>de.to.some(os=>os.fam===En)).sort(N):[];return xe.length?`<span class="hwf" title="${__t(298)}">${xe.map(Dn).join("")}</span>`:""})();let ne=[];for(let xe of de[lt])ne.some(En=>En[0]===xe.dest)||ne.push([xe.dest,xe.fam]);return ne.length?__t(297)+ne.slice(0,2).map(([xe,En])=>Oi(xe,En)).join(" "):__t(299)},as=$a.get(l.key);as&&!le.some(lt=>String(lt.num)===as&&!lt.gone)&&bl(l.key,null);let Lr=lt=>{let Ot=as&&de[lt].find(rn=>String(rn.num)===as&&!rn.gone);if(Ot&&Ot.cancel)return{cls:"v-no",pin:1,x:Ot,big:__t(300),small:`${at(Ot.est)} \xB7 ${Ot.fam}${__t(301)}${Ot.dest}${Ot.num?" \xB7 "+__t(302)+Ot.num:""}`,warn:""};let ne=Ot||de[lt].find(rn=>!rn.cancel&&!rn.gone&&rn.est-d.min>=Vt);if(!ne){let rn=de[lt].find(js=>!js.cancel);return rn&&!ht?{cls:"v-no",big:__t(303),small:`${__t(304)}${at(rn.est)}${__t(305)}${Ys(rn.est-d.min)}${__t(306)}`}:{cls:"v-no",big:__t(307),small:__t(308)}}let xe=ne.est-d.min-Vt,En=ht||Et?"v-info":bt?xe<1.5?"v-warn":"v-ok":xe<1.5?"v-bad":xe<5?"v-warn":"v-ok",os=ne.ghost?de[lt].find(rn=>!rn.cancel&&!rn.ghost&&rn.live&&rn.est>ne.est):null;if(Ot&&xe<0&&!ht&&!Et){let rn=de[lt].find(js=>!js.cancel&&!js.gone&&!js.ghost&&js!==ne&&js.est-d.min>=Vt);return{cls:"v-no",pin:1,miss:1,nxt:rn,x:ne,ghost:!!ne.ghost,big:__t(309),small:`${at(ne.est)} \xB7 ${ne.fam}${__t(301)}${ne.dest}${ne.plat?__t(310)+ne.plat:""}${ne.num?" \xB7 "+__t(302)+ne.num:""}`,warn:rn?`\u27A1\uFE0F ${__t(311)}: ${rn.est-d.min-Vt<1?__t(312):__t(313)+" "+Ys(rn.est-d.min-Vt)} \xB7 ${at(rn.est)}${rn.arr!=null?" \u2192 "+at(rn.arr):""}${rn.plat?__t(310)+rn.plat:""}${rn.num?" \xB7 "+__t(302)+rn.num:""}`:""}}return{pin:Ot?1:0,cls:En,ghost:!!ne.ghost,big:ht||Et?xe<1?__t(314):__t(315)+Ys(xe):bt?xe<1.5?__t(316):__t(317)+Ys(xe)+__t(318):xe<1.5?__t(319):__t(320)+Ys(xe),warn:ne.unconf?"\u26A0\uFE0F "+__t(321):Ot&&!ne.live&&ne.rodLive&&!ne.ghost?"\u{1F4E1} "+__t(322):!ne.ghost&&ne.noPos&&Ot?"\u{1F4E1} "+__t(323):!ne.ghost&&ne.late&&Ot?__t(324):ne.ghost?`${__t(325)}${os?`${__t(326)}${at(os.est)}`:""}`:Ee?__t(327):"",small:`${ne.bus?__t(328):""}${at(ne.est)} \xB7 ${ne.fam}${__t(301)}${ne.dest}${ne.plat?__t(310)+ne.plat:""}${ne.dl>=1?` \xB7 +${Math.round(ne.dl)} min`:""}${ne.arr!=null?`${__t(329)}${at(ne.arr)}`:""}${ne.num?" \xB7 "+__t(302)+ne.num:""}`,x:ne}},S0=Sn||new Set([P]),M0=lt=>{let Ot=lt.tr;if(!Ot)return null;let ne=Ot.pat.stops,xe=ne.indexOf(v);if(xe<0)return null;let En=-1;for(let os=xe+1;os<ne.length;os++)if(S0.has(ne[os])){En=os;break}return En<0?null:lt.est+(Ot.pat.t[2*En]-Ot.pat.t[2*xe+1])};de.to.forEach(lt=>{lt.arr=M0(lt)});let Rl=de.out.length?"out":"otros",kn=Lr("to"),Xa=Lr(Rl);if(!ht&&l!==Nt&&kn.x&&l===Sl()&&u0(l,kn.x,w[v].n,Vt),Et||l===Nt&&Nt.acc<=40&&(Nt.dist[l.st[l.i]]||9)<.08){for(let lt of[kn.x,Xa.x].concat(l===Nt?[Lr("all").x]:[]))if(lt&&!lt.cancel&&lt.est-d.min<=2&&lt.est-d.min>-.5){let Ot="w"+lt.num+"|"+Math.round(lt.sm);Ml.has(Ot)||(Ml.add(Ot),cu(`${__t(330)}${lt.fam}${__t(301)}${lt.dest}`,`${Math.round(lt.est-d.min)<=1?__t(331):__t(137)+Math.round(lt.est-d.min)+" min"}${__t(301)}${w[v].n}${lt.plat?__t(310)+lt.plat:""}`))}}let sp=Ae()&&d.live,rp=H.size===1,b0=lt=>{let Ot=lt.est-d.min;return ht?lt.cancel?"cx":Ot<0?"u-miss":"u-info":lt.cancel?"cx":Ot<Vt?"u-miss":Ot<Vt+1.5?"u-now":Ot<Vt+5?"u-soon":"u-ok"},w0=lt=>{if(lt.gone)return`<li class="hr u-gone${lt.live?" on":""}${Ra(lt)?" sel":""} go" data-dk="${_.push(lt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(lt.est)}${__t(332)}${gs(Math.max(1,Math.round(d.min-lt.est))+" min")}</small></span><span class="hrd">${Oi((rp?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${__t(333)}${p(lt.num)}</small></span><span class="hrm">${lt.dl>=1?`<em class="dl ${Bi(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}</span></li>`;let Ot=!lt.cancel&&lt.est-d.min<Vt,ne=du(lt.num,"");return`<li class="hr ${b0(lt)}${lt.live?" on":""}${lt.ghost?" gh":""}${Ra(lt)?" sel":""}${as&&String(lt.num)===as?" pin":""}${Si.some(xe=>{let En=hu(xe,t.days.indexOf(d.ymd));return En&&String(En.num)===String(lt.num)})?" fav":""} go" style="--lc:${q[lt.fam]||"#6b7385"}" data-dk="${_.push(lt)-1}" title="${lt.cancel?__t(300):Ot?__t(309):__t(334)}"><span class="hrt"><b>${lt.cancel?"\u2715":Ot?at(lt.est):Ys(lt.est-d.min)}</b><small>${lt.cancel?__t(335):lt.late?__t(336):Ot?__t(337):lt.ghost?__t(338):at(lt.est)}</small></span><span class="hrd">${lt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Oi((rp?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${ne.length?`<i class="cr" title="${p(ne.map(xe=>xl(xe.kind)).join(" \xB7 "))}">${ne.slice(0,2).map(xe=>_l[xe.kind]).join("")}</i>`:""}${lt.arr!=null?`${__t(339)}${at(lt.arr)}${lt.num?" \xB7 "+__t(302)+p(lt.num):""}${(()=>{let xe=lt.num&&fi(lt.num);return xe&&xe.n>=3&&xe.late/xe.n>=.5?`${__t(340)}${xe.late}/${xe.n})</b>`:""})()}</small>`:""}${lt.obs?`<small class="hro">${p(lt.obs)}</small>`:""}${lt.unconf?`<small class="hro unc">${__t(341)}</small>`:""}</span><span class="hrm">${!lt.cancel&&lt.dl>=1?`<em class="dl ${Bi(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}${lt.plat?`${__t(221)}${p(lt.plat)}</i>`:""}</span></li>`},qa=(lt,Ot,ne)=>`<div class="hcol"><div class="hdir">${ki(lt)}${ne?`<button type="button" class="hhide" data-hhide="${l.key}:${ne}" title="${__t(342)}">\u2715</button>`:""}</div><div class="hv ${Ot.cls}${Ot.ghost||Ot.pin&&Ot.x&&Ot.x.noPos&&!Ua([Ot.x.fam]).length?" gh":""}${Ot.x?" go":""}"${Ot.miss&&Ot.nxt&&Ot.nxt.num?` data-pinnext="${l.key}:${p(Ot.nxt.num)}" title="${__t(343)}"`:Ot.x?` data-dk="${_.push(Ot.x)-1}"`:""}><b>${Ot.big}</b>${Ot.pin?`<button type="button" class="hunpin" data-unpin="${l.key}" title="${__t(344)}">\u{1F4CC} ${__t(345)} \u2715</button>`:""}<small>${p(Ot.small)}</small>${Ot.pin&&Ot.x&&Ot.x.num?(xe=>xe?`<span class="hwhere">\u{1F4CD} ${p(xe)}</span>`:"")(vu(Ot.x.num)):""}${Ot.warn?`<span class="hvw">${p(Ot.warn)}</span>`:""}</div><ol>${de[lt].slice(0,(l.more?lt==="all"||l.hide?20:10:lt==="all"?7:l.hide?8:4)+de[lt].filter(xe=>xe.gone).length).map(w0).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(l===Nt){let lt=Lr("all");var E0=lt.x?`<span class="nw">${lt.big}</span> \xB7 <span class="nw"><b>${at(lt.x.est)}</b> ${p(lt.x.fam)}${__t(346)}${p(lt.x.dest)}${lt.x.plat?'<span class="nw">'+__t(310)+p(lt.x.plat)+"</span>":""}`:lt.big}let T0=l===Nt?E0:kn.x?`<span class="nw">${kn.big}${kn.x.plat?__t(310)+p(kn.x.plat):""}</span> \xB7 <span class="nw"><b>${at(kn.x.est)}</b>${kn.x.arr!=null?`${__t(348)}${at(kn.x.arr)}</b>`:""}${__t(347)}${p(F)}</span>`:__t(349)+p(F),Ye=l===Nt?(lt=>lt.pin?lt:null)(Lr("all")):kn.pin?kn:Xa.pin?Xa:null,A0=Ye?l===Nt?"all":Ye===kn?"to":Rl:"",Ya=!!(Ye&&(Ye.ghost||Ye.x.noPos&&!Ua([Ye.x.fam]).length||Ye.x.cancel)),Tu=!!(Ye&&Ye.miss),Dr=Ya?de[A0].find(lt=>!lt.cancel&&!lt.ghost&&!lt.gone&&lt.est>Ye.x.est-.01&&lt!==Ye.x&&lt.est-d.min>=(ht||Et?0:Vt)):null,C0=Tu?`<span class="nw">${__t(350)} <b>${at(Ye.x.est)}</b></span>${Ye.nxt?` \xB7 <span class="nw">${__t(351)} <b>${at(Ye.nxt.est)}</b>${Ye.nxt.arr!=null?` \u2192 <b>${at(Ye.nxt.arr)}</b>`:""}</span>`:""}`:"",R0=Ya?`<span class="nw">\u26A0\uFE0F ${Ye.x.cancel?__t(300):Ye.ghost?__t(352):__t(353)}</span>${Ye.x.cancel?"":` \xB7 <span class="nw"><b>${at(Ye.x.est)}</b>${Ye.x.arr!=null?` \u2192 <b>${at(Ye.x.arr)}</b>`:""}</span>`}${Dr?` \xB7 <span class="nw">${__t(351)} <b>${at(Dr.est)}</b>${Dr.arr!=null?` \u2192 <b>${at(Dr.arr)}</b>`:""}${Dr.plat?__t(310)+p(Dr.plat):""}</span>`:""}`:"";return`<div class="hplace ${l.open?"open":""}${Ye?" pinned":""}${Ya?" pgh":""}"><button type="button" class="hhead" data-ht="${l.key}"><span class="hico">${l.ico}</span><span class="htit"><b>${p(w[v].n)}${Ye&&Ye.x.num?`<i class="hpn">\u{1F4CC} ${p(Ye.x.num)}</i>`:""}</b><small class="c${Ya||Tu?"warn":Ee?"bad":kn.cls.slice(2)}">${Ya?R0:Tu?C0:T0}</small>${Ye&&Ye.x&&Ye.x.num?(lt=>lt?`<small class="nofit hwh2">\u{1F4CD} ${p(lt)}</small>`:"")(vu(Ye.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(l.open?`
      <div class="hbody">
        ${l.st.length>1?`<div class="hst">${l.st.map((lt,Ot)=>{let ne=qt.get(lt);return ne==null?"":`<button type="button" data-hs="${l.key}:${Ot}" class="${Ot===l.i?"on":""}">${p(w[ne].n)}</button>`}).join("")}</div>`:""}
        ${l===Nt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let lt=Nt.dist[l.st[l.i]]||0;return lt<1?Math.round(lt*100)*10+" m":lt.toFixed(1).replace(".",",")+" km"})()}${__t(355)}${l.walk}${__t(356)}`:""}
        ${Y?`<div class="hwalk away">${__t(358)}<a data-hplat="${l.key}${__t(357)}`:Et?`${__t(359)}${l.key}${__t(360)}`:bt?`${__t(361)}${Math.round(it)} min</b>${k&&C<=3?__t(362):""} \xB7 <a data-hgo="${l.key}${__t(357)}`:""}${ht&&l!==Nt?`${__t(363)}${C<10?C.toFixed(1).replace(".",","):Math.round(C)}${__t(364)}`:""}<div class="hwalk"${ht||Et||bt?" hidden":""}><button type="button" class="hgo" data-hgo="${l.key}:1">\u{1F6B6} Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${l.key}:1">${__t(365)}</button><span class="hstep" title="${__t(366)}">${__t(367)} <button type="button" data-hw="${l.key}:-1">\u2212</button><b>${l.walk} min</b><button type="button" data-hw="${l.key}:1">+</button> ${__t(368)}</span></div>
        ${(()=>{let lt=Si.filter(Ot=>l.st.includes(Ot.sid));return lt.length?`<div class="hfav">${lt.map(Ot=>{let ne=hu(Ot,t.days.indexOf(d.ymd)),xe=ne&&ge.find(En=>String(En.num)===String(ne.num));return`\u2B50 <b>${Ot.t}</b> ${p(Ot.fam)} ${xe?xe.cancel?__t(369):xe.gone?__t(218):xe.dl>=1?`<em class="dl ${Bi(xe.dl)}">+${Math.round(xe.dl)}${__t(370)}${at(xe.est)}`:__t(371):__t(372)}`}).join("<br>")}</div>`:""})()}
        ${Z&&Xe?`${__t(373)}${[...H].sort(N).map(Dn).join(" ")}${__t(374)}${F}${__t(375)}${Xe}${__t(376)}`:g?`${__t(377)}${[...j].sort(N).slice(0,3).map(Dn).join(" ")}${__t(378)}`:""}
        ${Ve.length?`<div class="hal ${Ee?"bad":""}${Mu.v?" open":""}" data-halx>\u26A0\uFE0F ${Pa(Ve[0])} ${p(Ve[0].txt)} <small>${La(Ve[0])}</small>${Ve.length>1?` <a data-hal>+${Ve.length-1}${__t(379)}`:""}</div>`:`${__t(380)}${[...H].sort(N).join(", ")}</div>`}
        ${(()=>{let lt=l.st.flatMap(Ot=>du("",Ot));return lt.length?`<div class="hcr">${lt.slice(0,3).map(Ot=>`${_l[Ot.kind]} <b>${p(xl(Ot.kind))}</b> <small>${Ot.up>1?Ot.up+__t(260):""}${Df(Ot)}</small>`).join("<br>")}</div>`:""})()}
        ${l===Nt?`<div class="hcols one">${qa("all",Lr("all"))}</div>`:l.hide==="out"?`<div class="hcols one">${qa("to",kn)}</div><a class="hshow" data-hshow="${l.key}${__t(381)}`:l.hide==="to"?`<div class="hcols one">${qa(Rl,Xa)}</div><a class="hshow" data-hshow="${l.key}${__t(381)}`:`<div class="hcols">${qa("to",kn,"to")}${qa(Rl,Xa,"out")}</div>`}
        ${ge.length>(l===Nt?7:8)?`<button type="button" class="hmore" data-hmore="${l.key}">${l.more?__t(382):__t(383)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${sp?A.get(w[v].id)?.d?__t(384):__t(385):__t(386)} \xB7 \u25CF = ${__t(387)}">${sp?A.get(w[v].id)?.d?__t(388):__t(389):__t(390)}</span><a data-hmap="${v}${__t(354)}${l===Nt?__t(391):`<a data-hset="${l.key}${__t(392)}`}${l===He?`${__t(393)}`:""}</div>
      </div>`:"")+"</div>"}let bi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Xf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,qf=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Zs=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),yl=()=>{let l=new Set;return[...tn.st,...He.st].forEach(d=>{let _=qt.get(d);_!=null&&w[_].fams.forEach(v=>l.add(v))}),[...l].sort(N)},za=()=>({stations:[...tn.st,...He.st],lines:yl().filter(l=>!Zs.has(l))}),o0=l=>Uint8Array.from(atob(l.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((l.length+3)%4)),d=>d.charCodeAt(0));async function Yf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Zf(l){let _=await(await fetch($.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:l.toJSON(),...za()})})).json();if(!_.ok)throw new Error(_.err||"error")}function Sl(){let l=gi(tn),d=gi(He);if(l==null||d==null)return l!=null?tn:d!=null?He:null;if(Nt.w&&Date.now()-Nt.fix<3*36e5){let _=v=>Math.hypot(w[v].w[0]-Nt.w[0],w[v].w[1]-Nt.w[1]);return _(l)<=_(d)?tn:He}return new Date().getHours()<13?tn:He}function Jf(l){let d=Sl(),_=d===tn?He:tn,v=d&&gi(d),b=_&&gi(_);if(v==null||b==null)return!0;let E=(l.es||"")+" "+(l.txt||""),P=t.days.indexOf(ie().ymd),F=ie(),D=[...new Set([...E.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(Z=>Z[1]))];if(D.length)return D.some(Z=>{let g=Na(Z);if(!g)return!1;let C=g.pat.stops,k=C.indexOf(v),Y=C.indexOf(b);if(k<0||Y<0||k>Y)return!1;let ht=g.t0+g.pat.t[2*k+1];return ht>F.min-60&&ht<F.min+150});let H=E.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(H){let Z=H[1].toLowerCase(),g=w.findIndex(C=>C.n&&Z.startsWith(C.n.toLowerCase()));if(g>=0){let C=(Q[P]||[]).find(k=>{let Y=k.pat.stops;return Y[Y.length-1]===g&&Y.includes(v)&&Y.includes(b)});if(C){let k=C.pat.stops;return k.indexOf(v)<k.indexOf(b)}}}return!0}let Bn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function l0(){let{lines:l,stations:d}=za(),_=new Set(l),v=new Set(d.map(P=>qt.get(P))),b=$.alerts.filter(P=>([...P.fams].some(F=>_.has(F))||[...P.stops||[]].some(F=>v.has(F)))&&Jf(P));if(!Bn.seen){try{Bn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Bn.seen=new Set}if(!Bn.seen.size){b.forEach(P=>Bn.seen.add(P.id+"|"+P.txt.length)),Kf();return}}let E=b.filter(P=>!Bn.seen.has(P.id+"|"+P.txt.length));if(E.length&&(E.forEach(P=>Bn.seen.add(P.id+"|"+P.txt.length)),Kf(),!(!Bn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of E.slice(0,3)){let F=(P.src==="Adif"?__t(269):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(N).slice(0,4).join(" "):""),D={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(H=>H?H.showNotification(F,D):new Notification(F,D)).catch(()=>{try{new Notification(F,D)}catch{}})}}function Kf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Bn.seen].slice(-400)))}catch{}}async function c0(){if(Bn.on)Bn.on=!1,un(__t(394));else{if(!("Notification"in window)){un(Xf&&!qf()?__t(395):__t(396));return}if(await Notification.requestPermission()!=="granted"){un(__t(397));return}Bn.on=!0,un(__t(398)+za().lines.join(", ")+__t(399))}try{localStorage.setItem("rod_ln",Bn.on?"1":"")}catch{}$e(!0)}async function h0(){if(!$.repOk)return c0();if(!bi.busy){bi.busy=!0;try{let l=await Yf();if(!l){un(Xf&&!qf()?__t(400):__t(401));return}if(await navigator.serviceWorker.ready,bi.on){let d=await l.pushManager.getSubscription();d&&(fetch($.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:d.endpoint})}).catch(()=>{}),await d.unsubscribe().catch(()=>{})),bi.on=!1,un(__t(394))}else{if(!$.url){un(__t(402));return}if(await Notification.requestPermission()!=="granted"){un(__t(397));return}let _=(await Ct($.url.replace(/\/+$/,""),"/push/key")).key,v=await l.pushManager.getSubscription()||await l.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:o0(_)});await Zf(v),bi.on=!0,un(__t(403)+za().lines.join(", "))}try{localStorage.setItem("rod_push",bi.on?"1":"")}catch{}}catch(l){un(__t(404)+(l.message||l))}finally{bi.busy=!1,$e(!0)}}}async function jf(){if(bi.on)try{let l=await Yf(),d=l&&await l.pushManager.getSubscription();d&&await Zf(d)}catch{}}let gu=!1,Qf="";function _u(){let l=ft?"t"+(ft.tid||ft.vtid):Lt>=0?"s"+Lt:Kt?"a":z?"n":"";l!==Qf&&(gu=!1,Qf=l);let d=innerWidth<=640&&!!l&&!gu&&!document.documentElement.classList.contains("tabmode"),_=m("#inf");_.classList.contains("compact")!==d&&(_.classList.toggle("compact",d),requestAnimationFrame(()=>{if(u.style.display!=="none"){let v=_.getBoundingClientRect().bottom;u.style.top=Math.round(v+8)+"px",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-v-16)+"px"}}))}let Ml=new Set;function u0(l,d,_,v){if(!(Bn.on||bi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let b=ie(),E=d.sm-b.min-v;if(!b.live||d.dl<10||E>40||Ml.has(d.num+"|"+d.sm))return;Ml.add(d.num+"|"+d.sm);let P=`${l.ico} ${_} ${l===He?__t(407):__t(408)}${__t(405)}${at(d.sm)}${__t(406)}${Math.round(d.dl)} min`,F=`${d.fam}${__t(301)}${d.dest}${__t(409)}${at(d.est)}. Si ibas a cogerlo, puedes salir ${Math.round(d.dl)}${__t(410)}${l===He?__t(277):__t(276)}${__t(411)}`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(D=>D?D.showNotification(P,{body:F,tag:"rd-"+d.num,icon:"icons/icon-192.png"}):new Notification(P,{body:F})).catch(()=>{try{new Notification(P,{body:F})}catch{}})}let Ir={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",l=>{let d=l.target.closest&&l.target.closest("[data-nowx]");if(!d||l.target.closest("a"))return;let _=d.dataset.nowx?d.dataset.nowx.split("|"):[];if(_.length){if(d.classList.contains("col"))Ir.open=!0;else{Ir.open=!1,_.forEach(v=>Ir.seen.add(v));try{localStorage.setItem("rod_seen",JSON.stringify([...Ir.seen].slice(-200)))}catch{}}$e(!0)}});function d0(l){let d=l.lines;if(!d.length&&Nt.st&&Nt.st.length){let g=new Set;Nt.st.forEach(C=>{let k=qt.get(C);k!=null&&w[k].fams.forEach(Y=>g.add(Y))}),d=[...g].sort(N)}let _=new Set(d),v=$.alerts.filter(g=>!_.size||[...g.fams].some(C=>_.has(C))),b=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(130)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,E=v.reduce((g,C)=>Math.max(g,ka(C)),0),P=E===3?"\u26D4 ":E===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",F=`<div class="hnowh"><span class="hnowl"><b>${v.length?P+v.length+(v.length===1?__t(271):__t(272)):__t(412)}</b>${d.length?d.map(Dn).join(""):""}</span>${b}</div>`,D=v.filter(g=>!Ir.seen.has(g.id)),H=v.length&&(Ir.open||D.length>0),Z=v.reduce((g,C)=>Math.max(g,ka(C)),0);return`<div class="hnow${Z===3?" bad":Z===2?" warn":Z===1?" info":""}${v.length&&!H?" col":""}" data-nowx="${p(v.map(g=>g.id).join("|"))}">${F}${tp(l,!0)}${H?v.slice().sort((g,C)=>ka(C)-ka(g)).map(g=>`<p class="sv${ka(g)}">${Pa(g)} ${p(g.txt)} <small>${La(g)}</small></p>`).join("")+`<small class="hnowt">${__t(413)}</small>`:""}</div>`}let $a=new Map((()=>{try{let l=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(d=>d[2]===l).map(d=>[d[0],d[1]])}catch{return[]}})());function xu(){if(!document.documentElement.classList.contains("tabmode"))return;let l=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],d=(v,b)=>{v.style.fontSize=b===1?"":(v._f0*b).toFixed(1)+"px",v.querySelectorAll("b").forEach(E=>E.style.fontSize=b===1?"":(v._b0*b).toFixed(1)+"px")},_=1;for(let v of l){if(v.style.whiteSpace="",d(v,1),!v.clientWidth)continue;v._f0=parseFloat(getComputedStyle(v).fontSize);let b=v.querySelector("b");for(v._b0=b?parseFloat(getComputedStyle(b).fontSize):0;v.scrollWidth>v.clientWidth+1&&_>.86;)_-=.02,d(v,_)}if(_<1)for(let v of l)v._f0&&d(v,_);for(let v of l)v.scrollWidth>v.clientWidth+1&&(v.style.whiteSpace="normal")}addEventListener("resize",()=>{try{xu()}catch{}});let f0=(l,d)=>{let _=l==="work"?He:l==="near"?Nt:tn,v=_&&gi(_);return v==null?null:Ms(v).find(b=>String(b.num)===String(d))||null};function bl(l,d){d?$a.set(l,d):$a.delete(l);try{let _=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...$a].map(([v,b])=>[v,b,_])))}catch{}}function vu(l){let d=It.find(E=>E.tr&&String(E.tr.num)===String(l));if(!d){let E=Na(l),P=ie(),F=t.days.indexOf(P.ymd);if(!E)return"";let D=E.day===F-1?1440:0,H=E.t0+E.pat.t[1]-D;return H>P.min?__t(414)+w[E.pat.stops[0]].n+" ("+at(H)+")":""}let _=d.tr,v=E=>w[_.pat.stops[E]].n;if(d.real){let E=d.v;return E.pre?__t(415):E.atStop>=0&&E.before?__t(416)+v(E.atStop):E.atStop>=0&&(E.st==="STOPPED_AT"||d.stop==="st")?(ue()?__t(417):__t(418))+v(E.atStop):!ue()&&E.next>0?__t(419)+v(E.next-1)+__t(420)+v(E.next):E.atStop>=0&&E.next>E.atStop?__t(421)+v(E.atStop)+__t(422)+v(E.next):E.atStop>=0?__t(423)+v(E.atStop):d.stop==="via"&&E.next>0?"\u23F8 "+__t(424)+v(E.next-1)+__t(420)+v(E.next):E.next>0?__t(178)+v(E.next-1)+__t(420)+v(E.next):E.next===0?__t(297)+v(0):""}let b=d.p&&d.p.next;return b>0?__t(425)+v(b-1)+__t(420)+v(b):""}let Va={k:"",v:null};function p0(l){let d=ie(),_=t.days.indexOf(d.ymd);if(_<0||!l.length)return null;let v=Sl(),b=(v&&gi(v))??gi(tn)??gi(He),E=d.ymd+l.join()+b;if(Va.k===E)return Va.v;Va.k=E;let P=new Set(l),F=b!=null?g=>Q[g].filter(C=>{let k=C.pat.stops.indexOf(b);return k>=0&&k<C.pat.stops.length-1}).length:g=>Q[g].filter(C=>P.has(C.fam)).length,D=g=>{let C=new Date(+g.slice(0,4),+g.slice(4,6)-1,+g.slice(6)).getDay();return C===0?0:C===6?6:1},H=F(_),Z=Math.max(0,...t.days.map((g,C)=>C!==_&&D(g)===D(d.ymd)?F(C):0));return Va.v=Z>=20&&H<Z*.8?{n:H,ref:Z,pct:Math.round(H/Z*100),st:b!=null?w[b].n:""}:null,Va.v}function tp(l,d){let _=l.lines||[],v=p0(_);if(!v)return"";let b=$.alerts.some(E=>[...E.fams].some(P=>_.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((E.es||"")+" "+E.txt));return d?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${b?__t(426):__t(427)}</b>: ${v.st?`${__t(428)} ${p(v.st)} ${__t(429)} ${v.n} ${__t(191)} ${v.ref} ${__t(70)}`:`${v.n} ${__t(191)} ${v.ref} ${__t(70)}`} (${v.pct} %) \xB7 ${__t(430)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${b?__t(431):__t(432)}</b> \xB7 ${__t(433)}: ${v.st?`${__t(428)} ${p(v.st)} ${__t(429)} ${v.n} ${__t(191)} ${v.ref} ${__t(70)}`:`${v.n} ${__t(191)} ${v.ref} ${__t(434)} ${_.join(", ")}`} (${v.pct} % ${__t(435)}).</div>`}function m0(l){let d=Ua(l.lines||[]);if(!d.length)return"";let _=[tn,He].some(v=>{let b=gi(v),E=b!=null&&A.get(w[b].id);return E&&E.d&&Array.isArray(E.d.trains)&&!E.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(436)} ${d.join(", ")}</b> \xB7 ${__t(437)}${_?" \xB7 "+__t(438):""}. ${__t(439)}</div>`}function g0(l){if(!Nt.w)return[];let d=Nt.k||1;return It.filter(_=>_.tr&&_.tr!==l&&_.p&&_.p.w&&Math.hypot(_.p.w[0]-Nt.w[0],_.p.w[1]-Nt.w[1])*d<3).sort((_,v)=>Math.hypot(_.p.w[0]-Nt.w[0],_.p.w[1]-Nt.w[1])-Math.hypot(v.p.w[0]-Nt.w[0],v.p.w[1]-Nt.w[1])).slice(0,2).map(_=>_.tr)}function _0(l){if(!Ce.tid)return"";let d=It.find(Y=>Y.tr&&String(Y.tr.num)===Ce.tid)||Gs(l).out.find(Y=>Y.tr&&String(Y.tr.num)===Ce.tid);if(!d)return"";let _=d.tr,v=_.pat.stops,b=d.real?d.v.next:d.p.next;if(b==null||b<0)return"";let E=tt(_),P=typeof E=="number"?Math.max(0,E/60):0,F=t.days.indexOf(l.ymd),D=_.day===F-1?1440:0,H=Ke&&Ke.num===Ce.tid?v.indexOf(qt.get(Ke.sid)):-1;H<b&&(H=v.length-1);let Z=Oa(_,d.real?d.v:null,H,_.t0+_.pat.t[2*H]+P-D),g=Z-l.min,C=d.real&&d.v.atStop>=0?d.v.atStop:-1,k=vu(_.num)||__t(297)+w[v[b]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Dn(_.fam)} ${__t(302)}${p(_.num)}<i class="hpn onbx" data-onbx title="${__t(440)}">\u2715</i></b><span class="onbch">${g0(_).map(Y=>`<i class="onbalt" data-onbpick="${p(Y.num)}">${__t(441)} ${p(Y.num)}?</i>`).join("")}</span><small class="nofit cok">${p(k)} \xB7 <span class="nw">${__t(442)} ${p(w[v[H]].n)}</span> <span class="nw">${g>=1?__t(103)+Ys(g)+" \xB7 ":""}<b>${at(Z)}</b>${P>=1?` <em class="dl ${Bi(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button></div>`}function $e(l){let d=m("#home");if(!d)return;let _=performance.now();if(!l&&_-Hf<4e3)return;Hf=_;let v=ie(),b=[],E=za(),P=g=>{let C=gi(g);return C==null||!Nt.w?1:Math.hypot(w[C].w[0]-Nt.w[0],w[C].w[1]-Nt.w[1])},F=[Nt,...[tn,He].sort((g,C)=>P(g)-P(C))],D=(document.documentElement.classList.contains("tabmode")?d0(E):tp(E))+m0(E)+_0(v)+F.map(g=>a0(g,v,b)).join("")+(Ba.some(g=>g.open)&&E.lines.length,"");d.className=Ba.some(g=>g.open)?"open":"";let H=m("#bell");H||(H=document.createElement("button"),H.type="button",H.id="bell",H.onclick=h0,m("#inf .more").prepend(H));{let g=$.repOk?bi.on:Bn.on;H.hidden=!E.lines.length,H.className=g?"on":"",H.textContent=(g?__t(450):__t(451))+E.lines.join(", "),H.title=(g?__t(452):__t(453))+__t(66)+E.lines.join(", ")+($.repOk?"":__t(454))}if(d._h===D)return;d._h=D,d.innerHTML=D,xu();{let g=d.querySelector("[data-onbgo]");g&&(g.onclick=C=>{if(C.target.closest("[data-onbx]")){Ce.no.set(Ce.tid,Date.now()+20*6e4),Ce.tid="",Ce.manual=0,Rt=null,$e(!0);return}let k=C.target.closest("[data-onbpick]");if(k){Ce.no.set(Ce.tid,Date.now()+20*6e4),Ce.tid=k.dataset.onbpick,Ce.manual=Date.now()+90*6e4;let ht=It.find(Et=>Et.tr&&String(Et.tr.num)===Ce.tid);if(ht){Rt=ht.tr,ft=ht.tr;let Et=ht.tr.pat.stops,ut=ht.real?ht.v.next:ht.p.next,bt=[...tn.st,...He.st],it=Et.findIndex((le,ge)=>ge>=ut&&bt.includes(w[le].id));it>0&&(Ke={num:Ce.tid,sid:w[Et[it]].id,at:Date.now()},Rr()),u._h="",De()}$e(!0);return}let Y=It.find(ht=>ht.tr&&String(ht.tr.num)===Ce.tid);Y&&(z=Kt=et=!1,Lt=-1,ft=Y.tr,u._h="",De())})}{let g=[...d.children].find(C=>C.classList.contains("hplace")&&!C.querySelector(".hnew"));g&&g.classList.add("lead")}let Z=g=>g==="work"?He:g==="near"?Nt:tn;d.querySelectorAll("[data-hloc]").forEach(g=>g.onclick=()=>{Nt.err="",mu(!0)}),d.querySelectorAll("[data-ht]").forEach(g=>g.onclick=()=>{if(m("#inf").classList.contains("compact")){gu=!0,_u();return}let C=Z(g.dataset.ht);C.open=!C.open,Mi(C),$e(!0),(ft||Lt>=0||Kt||z)&&(u._h="",De())}),d.querySelectorAll("[data-hs]").forEach(g=>g.onclick=()=>{let[C,k]=g.dataset.hs.split(":"),Y=Z(C);Y.i=+k,Mi(Y),$e(!0)}),d.querySelectorAll("[data-hw]").forEach(g=>g.onclick=()=>{let[C,k]=g.dataset.hw.split(":"),Y=Z(C);Y.walk=y(Y.walk+ +k,0,60),Mi(Y),$e(!0)}),d.querySelectorAll("[data-hmap]").forEach(g=>g.onclick=()=>{let C=+g.dataset.hmap;z=Kt=et=!1,ft=null,Lt=C,we(),Object.assign(s,{tx:w[C].w[0],ty:w[C].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",De(),a()}),d.querySelectorAll("[data-hset]").forEach(g=>g.onclick=()=>{Js=g.dataset.hset,x.value="",x.placeholder=Js==="work"?__t(455):__t(456),x.focus()}),d.querySelectorAll("[data-hnear]").forEach(g=>g.onclick=()=>{let C=qt.get(Nt.st[0]);C!=null&&yu(C,g.dataset.hnear)}),d.querySelectorAll("[data-hmore]").forEach(g=>g.onclick=()=>{let C=Z(g.dataset.hmore);C.more=!C.more,$e(!0)}),d.querySelectorAll("[data-hhide]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Y]=g.dataset.hhide.split(":"),ht=Z(k);ht.hide=Y,Mi(ht),$e(!0)}),d.querySelectorAll("[data-hshow]").forEach(g=>g.onclick=()=>{let C=Z(g.dataset.hshow);C.hide="",Mi(C),$e(!0)}),d.querySelectorAll("[data-hgo]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Y]=g.dataset.hgo.split(":"),ht=Z(k);ht.goAt=Y==="1"?Date.now():0,ht.goAt&&(ht.platAt=0),Mi(ht),$e(!0)}),d.querySelectorAll("[data-hplat]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Y]=g.dataset.hplat.split(":"),ht=Z(k);ht.platAt=Y==="1"?Date.now():0,ht.platAt&&(ht.goAt=0),Mi(ht),$e(!0)}),d.querySelectorAll("[data-hnotst]").forEach(g=>g.onclick=C=>{C.stopPropagation(),Nt.homeW=Nt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Nt.w))}catch{}$e(!0)}),d.querySelectorAll("[data-hdel]").forEach(g=>g.onclick=()=>{He.st=[],He.open=!1,Mi(He),$e(!0),jf()}),d.querySelectorAll("[data-dk]").forEach(g=>g.onclick=()=>{let C=b[+g.dataset.dk];if(g.matches("li.hr")&&!C.gone&&C.num!=null){let k=g.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(k){let Y=$a.get(k)===String(C.num);bl(k,Y?null:String(C.num)),Y?ft&&String(ft.num)===String(C.num)&&(ft=null,Rt=null,dn.sk="",u._h="",De()):wl(C,!0),$e(!0);return}}wl(C)}),d.querySelectorAll("[data-pinnext]").forEach(g=>g.onclick=C=>{if(C.target.closest("[data-unpin]"))return;let[k,Y]=g.dataset.pinnext.split(":");bl(k,Y);let ht=f0(k,Y);ht&&wl(ht,!0),$e(!0)}),d.querySelectorAll("[data-unpin]").forEach(g=>g.onclick=C=>{C.stopPropagation(),bl(g.dataset.unpin,null),$e(!0)}),d.querySelectorAll("[data-hal]").forEach(g=>g.onclick=()=>m("#alr").click()),Uf(d)}function wl(l,d){if(!l)return;let _=t.days.indexOf(ie().ymd),v=It.find(P=>P.real?l.tid&&P.v.tid===l.tid||l.num&&String(P.tr?P.tr.num:P.v.num)===String(l.num):l.tr&&P.tr===l.tr||l.num&&P.tr&&String(P.tr.num)===String(l.num)),b=l.tr||v&&v.tr||(Q[_]||[]).find(P=>String(P.num)===String(l.num));if(z=Kt=et=!1,Lt=-1,d||void 0,ft=v?v.tr||{vtid:v.v.tid}:b||null,!ft)return;d&&(dn.sk="t"+(ft.num||ft.vtid)),Rt=v&&v.tr?v.tr:null,Rt&&innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());let E=v?v.p.w:null;E&&Object.assign(s,{tx:E[0],ty:E[1],dist:Math.min(s.dist,22)}),we(),u._h="",De(),Wt=0,a()}let Js=!1;x.addEventListener("blur",()=>setTimeout(()=>{Js&&!x.value.trim()&&(Js=!1,x.placeholder=__t(457))},600));function hb(){}function yu(l,d){let _=d==="work"?He:tn,v=w[l].id,b=w.filter(E=>E.fams.size&&E!==w[l]&&Math.hypot(E.w[0]-w[l].w[0],E.w[1]-w[l].w[1])<.6).map(E=>E.id);_.st=[v,...b].slice(0,3),_.i=0,_.open=!0,Mi(_),$e(!0),jf()}let El=m("#lines");El.innerHTML=`${__t(458)}`+V.map(l=>`<button type="button" style="--c:${q[l]}" data-f="${l}">${l}</button>`).join("");function ep(){try{$e(!0)}catch{}{let l=m("#linebtn");l||(l=document.createElement("button"),l.type="button",l.id="linebtn",El.after(l),l.onclick=()=>{nt=[...j][0],et=z=Kt=!1,u._h="",De()});let d=j.size===1?[...j][0]:"";l.hidden=!d,d&&(l.innerHTML=`${__t(459)}${p(d)}${__t(460)}`)}El.querySelectorAll("[data-f]").forEach(l=>{l.dataset.f!=="*"&&l.classList.toggle("off",!j.has(l.dataset.f))})}El.querySelectorAll("[data-f]").forEach(l=>l.onclick=()=>{let d=l.dataset.f;d==="*"?V.forEach(_=>j.add(_)):j.size===V.length?(j.clear(),j.add(d)):j.has(d)?(j.delete(d),j.size||V.forEach(_=>j.add(_))):j.add(d);try{localStorage.setItem("rod_lines",JSON.stringify([...j]))}catch{}ep(),Se(),we(),fu(),Wt=0,a()});let Su=[...document.querySelectorAll("[data-sp]")],_i=0;function np(l){let d=ie();l&&(Pt===l||_i===l)?Pt?(Yt=d.min,ae=d.min,Pt=0,_i=l):(fe=performance.now(),Pt=l,_i=0):l===0?(Pt=0,ae=null,_i=0):(Yt=d.min,fe=performance.now(),ae=d.min,Pt=l,_i=0),Su.forEach(_=>{let v=+_.dataset.sp;_.classList.toggle("on",v===(Pt||_i)||!Pt&&!_i&&ae==null&&v===0),_.classList.toggle("pz",!!_i&&v===_i),_.textContent=v===0?__t(461):_i===v?"\u25B6 \xD7"+v:Pt===v?"\u23F8 \xD7"+v:"\xD7"+v}),Wt=0,a()}Su.forEach(l=>l.onclick=()=>np(+l.dataset.sp)),m("#tsl").oninput=l=>{let d=+l.target.value;Yt=d,ae=d,fe=performance.now(),Pt===0&&!_i&&Su.forEach(_=>_.classList.remove("on")),Wt=0,a()},setInterval(()=>{ae!=null&&Pt&&Yt+(performance.now()-fe)/6e4*Pt>1560&&(Yt=240,fe=performance.now())},1e3),window.__rodSearch=l=>{let d=S(l.trim());if(!d){f.style.display="none",f._pick=null;return}let _=[],v=[];w.forEach((F,D)=>{if(!F.fams.size)return;let H=S(F.n);H.startsWith(d)||H.includes(" "+d)||H.includes("-"+d)?_.push(D):H.includes(d)&&v.push(D)});let b=_.concat(v).slice(0,7),E=I.filter(F=>S(F.name).startsWith(d)).sort((F,D)=>D.pop-F.pop).slice(0,3),P=b.map(F=>({h:`\u{1F689} ${p(w[F].n)}<em>${[...w[F].fams].sort(N).slice(0,3).map(D=>`<em class="ls" style="background:${q[D]}">${D}</em>`).join(" ")}</em>`,go:()=>{if(Js){let D=Js;Js=!1,x.placeholder=__t(457),yu(F,D);return}z=!1,Kt=!1,et=!1,Lt=F,ft=null,Rt=null,we(),Object.assign(s,{tx:w[F].w[0],ty:w[F].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),De(),a()}})).concat(E.map(F=>({h:`${p(F.name)}${__t(462)}`,go:()=>{Object.assign(s,{tx:F.cx,ty:F.cy,dist:y(F.size*3+14,14,60)}),a()}})));f.innerHTML=P.map((F,D)=>`<li data-i="${D}">${F.h}</li>`).join("")||__t(463),f.style.display="block",f._pick=F=>{P[F]&&(P[F].go(),f.style.display="none",x.value="",x.blur())},f.querySelectorAll("li[data-i]").forEach(F=>F.onclick=()=>f._pick(+F.dataset.i))},ep(),we();try{let l=new URLSearchParams(location.search).get("st");if(l){let d=S(l),_=-1,v=0;w.forEach((b,E)=>{if(!b.fams.size)return;let P=S(b.n),F=P===d?3:P.startsWith(d)||d.startsWith(P)?2:P.includes(d)||d.includes(P)?1:0;F>v&&(v=F,_=E)}),_>=0&&setTimeout(()=>{Lt=_,we(),Object.assign(s,{tx:w[_].w[0],ty:w[_].w[1],dist:18,tilt:.5}),De(),a()},300)}}catch{}let Mu={v:!1};document.addEventListener("click",l=>{!(l.target.closest&&l.target.closest("[data-halx]"))||l.target.closest("a")||(Mu.v=!Mu.v,$e(!0))}),u.addEventListener("click",l=>{if(!u.classList.contains("peek")||l.target.closest("button,a,input"))return;l.stopPropagation(),l.preventDefault(),u.classList.remove("peek");let d=u.querySelector(".mn");d&&(d.textContent="\u25BE"),u.scrollTop=0},!0);let dn={on:!1,cur:"now",home:new Map},Tl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Ha=document.createElement("nav");Ha.id="tabs";let x0=[["now","\u{1F552}",__t(461)],["map","\u{1F5FA}\uFE0F",__t(464)],["line","\u{1F4CA}",__t(465)],["set","\u2699\uFE0F",__t(466)]];Ha.innerHTML=x0.map(([l,d,_])=>`<button type="button" data-tab="${l}"><span>${d}</span><small>${_}</small></button>`).join(""),document.body.appendChild(Ha);let Pr=document.createElement("div");Pr.id="tabL",document.body.appendChild(Pr);let Ks=document.createElement("div");Ks.id="tabA",Ks.className="box",document.body.appendChild(Ks);let bu=(l,d)=>{l&&(dn.home.has(l)||dn.home.set(l,[l.parentNode,l.nextSibling]),d.appendChild(l))},ip=()=>{for(let[l,[d,_]]of dn.home)try{d.insertBefore(l,_&&_.parentNode===d?_:null)}catch{}dn.home.clear()};function wu(){let l=j.size===1?[...j][0]:"",d=$.alerts.filter(v=>[...v.fams].some(b=>j.has(b))).length,_=[et,Kt,nt,z,l,d].join("|");Pr._k!==_&&(Pr._k=_,Pr.innerHTML=`<button type="button" data-tl="stats" class="${et?"on":""}">\u{1F4CA} ${__t(467)}</button><button type="button" data-tl="alr" class="${Kt?"on":""}">\u26A0\uFE0F ${d}${d===1?__t(271):__t(272)}</button>${l?`<button type="button" data-tl="line" class="${nt?"on":""}">\u{1F4CB} ${p(l)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(130)}">\u{1F4AC}</a>`,Pr.querySelectorAll("[data-tl]").forEach(v=>v.onclick=()=>{let b=v.dataset.tl;et=b==="stats",Kt=b==="alr",nt=b==="line"?l:"",z=!1,ft=null,Lt=-1,et&&(ee.at=0),u._h="",De(),wu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let v0="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",y0=()=>vt(new Date).ymd.replace(/-/g,"");function Ga(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(v0,{cache:"no-store"}).then(l=>l.ok?l.text():null).then(l=>{if(!l)return;let d;try{d=JSON.parse(l)}catch{return}if(!d||!d.gen||!Array.isArray(d.days)||!d.trips||d.gen<=t.gen)return;try{localStorage.setItem("rod_pack",l)}catch{return}let _=y0(),v=t.days.indexOf(_),b=d.days.indexOf(_),E=v<0?0:ot.filter(D=>D.day===v).length,P=0;if(b>=0)for(let D of d.trips)D[0]===b&&P++;let F=b>=0&&E&&(Math.abs(P-E)/E>.1||!P);if(v<0||v>=t.days.length-2||F){try{sessionStorage.setItem("rod_packmsg",F?"1":"")}catch{}location.reload();return}Wa.v=!0}).catch(()=>{})}let Wa={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&Wa.v?(Wa.v=!1,Wa.reload=!0):!document.hidden&&Wa.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>un("\u{1F5D3}\uFE0F "+__t(468)),1500))}catch{}if(setTimeout(Ga,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(Ga.at||0)>6*36e5&&(Ga.at=Date.now(),Ga())}),Ga.at=Date.now(),window.__RODNEW__){let l=window.__RODNEW__,d=m("#ver");d&&d.firstChild&&d.firstChild.nodeType===3&&(d.firstChild.textContent=d.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,l.slice(8,10)+"/"+l.slice(5,7)+" "+l.slice(11,16)))}function Al(){ip();let l=window.__L||"es",d=Qn.mode;Ks.innerHTML=`<h3>${__t(466)}</h3>
      <h4>\u{1F310} ${__t(469)}</h4><div class="seg2">${[["ca","Catal\xE0"],["es","Espa\xF1ol"],[__t(190),"English"]].map(([_,v])=>`<button type="button" data-lang="${_}" class="${l===_?"on":""}">${v}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(470)}</h4><div class="seg2">${[["auto",__t(471)],["light",__t(472)],["dark",__t(473)]].map(([_,v])=>`<button type="button" data-th="${_}" class="${d===_?"on":""}">${v}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(474)}</h4><div class="seg2">${(()=>{let _="";try{_=localStorage.getItem("rod_big")||""}catch{}let v=_==="1"?"1":_==="0"?"0":"a";return[["a",__t(471)],["0","Normal"],["1",__t(475)]].map(([b,E])=>`<button type="button" data-big="${b}" class="${v===b?"on":""}">${E}</button>`).join("")})()}</div>${(()=>{let _="";try{_=localStorage.getItem("rod_big")||""}catch{}return _==="1"||_==="0"?"":`<small class="tabAhint">${__t(476)}</small>`})()}
      <h4>\u{1F514} ${__t(477)}</h4><div id="tabAbell"></div>${yl().length?"":`<small class="tabAhint">${__t(478)}</small>`}${(()=>{let _=yl();return _.length>1?`<small class="tabAhint">${__t(479)}</small><div class="alch">${_.map(v=>`<button type="button" data-al="${p(v)}" class="ln${Zs.has(v)?" off":""}" style="--c:${q[v]}">${p(v)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(480)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(481)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,Ks.querySelectorAll("[data-al]").forEach(_=>_.onclick=()=>{let v=_.dataset.al,b=yl();Zs.has(v)?Zs.delete(v):b.filter(E=>!Zs.has(E)).length>1&&Zs.add(v);try{localStorage.setItem("rod_aloff",JSON.stringify([...Zs]))}catch{}$e(!0),Al()}),Ks.querySelectorAll("[data-big]").forEach(_=>_.onclick=()=>{let v=_.dataset.big;try{v==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",v)}catch{}window.__txt&&window.__txt(),Al(),$e(!0)}),Ks.querySelectorAll("[data-th]").forEach(_=>_.onclick=()=>{Qn.mode=_.dataset.th;try{localStorage.setItem("rod_theme",Qn.mode)}catch{}fl(),Al()}),bu(m("#bell"),m("#tabAbell")),bu(m("#src"),m("#tabArt")),bu(m("#ver"),m("#tabAinf"))}function Cl(l){if(!dn.on)return;let d=dn.cur;if(dn.cur=l,document.documentElement.dataset.tab=l,window.__mapHidden=l!=="map",Ha.querySelectorAll("[data-tab]").forEach(_=>_.classList.toggle("on",_.dataset.tab===l)),l==="line")(ft||Lt>=0)&&(dn.keep={t:ft,s:Lt,sk:dn.sk}),!et&&!Kt&&!nt&&!z&&(et=!0,ee.at=0),ft=null,Lt=-1,u._h="",De(),wu();else if(d==="line"){et=Kt=z=!1,nt="";let _=dn.keep;dn.keep=null,_&&l==="map"&&!ft&&Lt<0&&(ft=_.t,Lt=_.s,dn.sk=_.sk),u._h="",De()}l==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{uu()}catch{}dispatchEvent(new Event("resize"))})),l==="set"&&Al(),l==="now"&&($e(!0),requestAnimationFrame(xu)),Wt=0,a()}Ha.onclick=l=>{let d=l.target.closest("[data-tab]");d&&Cl(d.dataset.tab)},window.__rodTabSync=()=>{if(!dn.on)return;let l=ft?"t"+(ft.num||ft.vtid):Lt>=0?"s"+Lt:"",d=l!==dn.sk;dn.sk=l,l&&d&&dn.cur!=="map"?Cl("map"):(Kt||nt||z)&&dn.cur!=="line"&&dn.cur!=="map"&&Cl("line"),dn.cur==="line"&&wu()};function Eu(){let l=Tl.matches||document.documentElement.classList.contains("cap");l!==dn.on&&(dn.on=l,document.documentElement.classList.toggle("tabmode",l),l||(window.__mapHidden=!1),l?Cl("now"):(delete document.documentElement.dataset.tab,ip()))}Tl.addEventListener?Tl.addEventListener("change",Eu):Tl.addListener(Eu),Eu();{let l=m("#rc"),d=()=>document.documentElement.style.setProperty("--rch",Math.round(l.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(d).observe(l),d()}window.__rod={cardEta:Oa,HOME:tn,WORK:He,ONB:Ce,alertForMe:Jf,whereAmI:Sl,departuresFor:Ms,DEPS:A,tripByNum:Na,delayOf:tt,TID:ct,SID:qt,byDay:Q,get days(){return t.days},get hist(){return ee},get past(){return L.cur},get cols(){return on.mesh?on.mesh.count:-1},get dist(){return r.dist},get follow(){return Rt},get selTrip(){return ft},ST:w,TR:ot,FAM:V,act:()=>It,setSpeed:np,RT:$,pollRT:he,nowState:ie,posAt:Ss,activeTrips:Gs,LL:St,select:l=>{ft=l,De()}}}var Sa=window.__DATA__;var Ne=i=>document.querySelector(i),xs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Gn=(i,t,e)=>Math.min(e,Math.max(t,i)),lf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Kn=Ne("#c"),ol=new zh({canvas:Kn,antialias:!0});ol.setPixelRatio(Math.min(devicePixelRatio||1,2));var vs=new po;vs.background=new me(15659509);var eu=35,ns=new Vn(eu,1,2,1500);vs.add(new Oo(16777215,9080992,1));var Mg=new ko(16777215,.9);Mg.position.set(-40,-70,90);vs.add(Mg);var ts=100/Sa.w,sl=Sa.w/2,rl=Sa.h/2,pn=[],cf=new Ii;vs.add(cf);var Jh=new or({color:16777215,transparent:!0,opacity:.55});for(let i of Sa.m){let t=new Ii,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let y of i.g){let S=y.map(m=>{let p=[];for(let O=0;O<m.length;O+=2)p.push(new $t((m[O]-sl)*ts,(m[O+1]-rl)*ts));return p.length>1&&p[0].equals(p[p.length-1])&&p.pop(),p}).filter(m=>m.length>=3);if(!S.length)continue;let I=new oa(S[0]);for(let m=1;m<S.length;m++)I.holes.push(new cr(S[m]));e.push(I);for(let m of S[0])s=Math.min(s,m.x),r=Math.max(r,m.x),a=Math.min(a,m.y),o=Math.max(o,m.y);for(let m of S)n.push(new yo(new _n().setFromPoints(m.map(p=>new X(p.x,p.y,0))),Jh))}if(!e.length)continue;let c;try{c=new Po(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new No({color:13421772}),u=new Rn(c,h);t.add(u);let x=new Ii;n.forEach(y=>x.add(y)),x.position.z=.04,cf.add(x),t.scale.z=.01,cf.add(t);let f={og:x,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:h,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=f,pn.push(f)}var UE=pn.map(i=>i.mesh),mg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},bg=0,wg=0;for(let i of pn){for(let t of i.rings)bg+=mg(t[0])-t.slice(1).reduce((e,n)=>e+mg(n),0);wg+=i.area}var qM=Math.sqrt(wg/bg),qh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Eg={"08":__t(482),17:__t(483),25:__t(484),43:__t(485)},gf="sqrt",_f="pop",af=0,hf=0,xa=1,nl=1,YM={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},uf=i=>_f==="pop"?i.pop:i.pop/i.area,Xh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new me(i));function ZM(i){i=Gn(i,0,1)*(Xh.length-1);let t=Math.min(Math.floor(i),Xh.length-2);return Xh[t].clone().lerp(Xh[t+1],i-t)}var va=i=>i>=100?xs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function JM(){hf=0;for(let i of pn)hf+=i.pop;[...pn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...pn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Cg()}var Tg=new me("#d3d8e2"),Ag=new me("#eceff3");window.__mapTheme=i=>{vs.background=new me(i?856345:15659509),Ag.set(i?"#2b3242":"#eceff3"),Tg.set(i?"#1a1f29":"#d3d8e2"),Jh.color.set(i?856345:16777215),Jh.opacity=i?.7:.55,xf.color.set(i?329483:2764864),vf.color.set(i?9081766:16777215);for(let t of pn)t.base&&nu(t);Pn()};function nu(i){i.mat.color.copy(i.base).lerp(Ag,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Tg,.8)}function Cg(){xa=1,nl=1e12;for(let e of pn){let n=uf(e);xa=Math.max(xa,n),nl=Math.min(nl,n)}let i=Math.log10(Math.max(nl,.01)),t=Math.log10(xa);for(let e of pn)e.base=ZM((Math.log10(Math.max(uf(e),.01))-i)/(t-i)),nu(e);Ne("#lmin").textContent=va(nl),Ne("#lmax").textContent=va(xa),Ne("#lname").textContent=_f==="pop"?__t(486):__t(487),iu()}function iu(){let i=YM[gf],t=i(xa),e=24*af;for(let n of pn)n.zt=af<=.001?.01:Math.max(.12*Math.min(1,af),e*i(uf(n))/t)*(n.inF?1:.1);Pn()}var gg=Object.fromEntries(pn.map(i=>[i.code,i])),Yh=[],Rg=[];for(let i of Sa.bd){let t=gg[i.a],e=gg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Rg.push((i.p[n]-sl)*ts,(i.p[n+1]-rl)*ts,0,(i.p[n+2]-sl)*ts,(i.p[n+3]-rl)*ts,0),Yh.push(t,e)}var Kh=new Ui;Kh.setPositions(Rg);var xf=new Ji({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),vf=new Ji({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[xf,vf].forEach((i,t)=>{let e=new gr(Kh,i);e.frustumCulled=!1,e.renderOrder=10+t,vs.add(e)});function KM(){let i=Kh.attributes.instanceStart.data.array;for(let t=0;t<Yh.length;t+=2){let e=Math.max(Yh[t].z,Yh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Kh.attributes.instanceStart.data.needsUpdate=!0}var jh={};for(let i of Object.keys(qh)){let t=pn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,c=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),c=Math.max(c,u.cy);let h=document.createElement("div");h.className="plab",h.textContent=qh[i],h.title=__t(488)+Eg[i],h.onclick=()=>lb("pr:"+i),document.body.appendChild(h),jh[i]={el:h,p:new X(n/e,s/e,0),cx:(r+a)/2,cy:(o+c)/2,ext:Math.max(a-r,c-o),ext2:[a-r,c-o],area:e,name:qh[i]}}var of=new X;function jM(){for(let i in jh){let t=jh[i];of.copy(t.p).project(ns),t.el.style.transform=`translate(-50%,-50%) translate(${(of.x*.5+.5)*innerWidth}px,${(-of.y*.5+.5)*innerHeight}px)`}}var vn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Me={...vn};function QM(){let i=innerWidth/innerHeight,t=Math.tan(eu*Math.PI/360);return Math.max(Sa.h*ts*1.1,100*1.1/i)/(2*t)}var tb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Me.yaw=Math.round(Me.yaw/(2*Math.PI))*2*Math.PI,Me.tilt=0,Pn()});function yf(){Object.assign(Me,{tilt:0,yaw:0,dist:QM(),tx:0,ty:0}),Pn()}function eb(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=vn;ns.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ns.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ns.lookAt(n,s,0)}var il=!0,_g=performance.now(),al=new Map;function Pn(){il=!0}function Ig(i){requestAnimationFrame(Ig);let t=Gn((i-_g)/1e3,0,.05);_g=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(vn)){let r=Me[s]-vn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(vn[s]+=r*e,n=!0):vn[s]=Me[s]}for(let s of pn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of al){let a=(i-r)/1800;a>=1?(al.delete(s),Sr(s)):Sr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(il=!0),window.__mapHidden){il=!0;return}if(n||il){tb.style.transform=`rotate(${vn.yaw}rad) scaleY(${(.55+.45*Math.cos(vn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Me.yaw/2))<.02&&Me.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(489):__t(490))}eb(),KM(),jM(),window.__rodFrame&&window.__rodFrame(),ol.render(vs,ns),il=n,Ne("#tilt").value=Math.round(Me.tilt*180/Math.PI),Ne("#yaw").value=Math.round(((Me.yaw*180/Math.PI+180)%360+360)%360-180)}}function Pg(){ol.setSize(innerWidth,innerHeight,!1),ns.aspect=innerWidth/innerHeight,ns.updateProjectionMatrix(),xf.resolution.set(innerWidth,innerHeight),vf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Pn()}addEventListener("resize",()=>{Pg(),sn.length&&zs()});Kn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Me.yaw+=n*.0035}else i.ctrlKey?Me.dist=Gn(Me.dist*Math.exp(e*.01),6,400):Me.tilt=Gn(Me.tilt+e*.002,0,1.32);Pn()},{passive:!1});Kn.addEventListener("contextmenu",i=>i.preventDefault());var es=new Map,si=null,xr=0,df=0,ff=0;var Qh=null;Kn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),sn.length&&setTimeout(zs,50)),Kn.setPointerCapture(i.pointerId),es.set(i.pointerId,{x:i.clientX,y:i.clientY}),es.size===1&&(si={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),es.size===2){let[t,e]=[...es.values()];xr=Math.hypot(t.x-e.x,t.y-e.y),df=Math.atan2(e.y-t.y,e.x-t.x),ff=(t.y+e.y)/2,Qh={mode:null,rot:0,sc:0,tl:0},si&&(si.multi=!0)}Sf()});Kn.addEventListener("pointermove",i=>{let t=es.get(i.pointerId);if(!t){_s={x:i.clientX,y:i.clientY},pf||(pf=requestAnimationFrame(ib));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,es.size===2){let[s,r]=[...es.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=o-df;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let u=xr?a-xr:0,x=c-ff,f=Qh||(Qh={mode:null,rot:0,sc:0,tl:0});f.rot+=h,f.sc+=u,f.tl+=x,f.mode?f.mode==="zoom"&&Math.abs(f.rot)>.45&&(f.mode="rotate"):Math.abs(f.rot)>.3?f.mode="rotate":Math.abs(f.tl)>30&&Math.abs(f.sc)<18?f.mode="tilt":Math.abs(f.sc)>12&&(f.mode="zoom"),(f.mode==="zoom"||f.mode==="rotate")&&xr&&(Me.dist=Gn(Me.dist*xr/a,6,400)),f.mode==="rotate"&&(Me.yaw+=h,vn.yaw=Me.yaw),f.mode==="tilt"&&(Me.tilt=Gn(Me.tilt-x*.006,0,1.32),vn.tilt=Me.tilt),xr=a,df=o,ff=c,Pn();return}if(si.moved+=Math.abs(e)+Math.abs(n),si.rot||i.altKey)Me.yaw+=e*.005,Me.tilt=Gn(Me.tilt+n*.004,0,1.32),vn.yaw=Me.yaw,vn.tilt=Me.tilt;else{let s=2*vn.dist*Math.tan(eu*Math.PI/360)/innerHeight,r=Math.sin(vn.yaw),a=Math.cos(vn.yaw),o=1/Math.max(Math.cos(vn.tilt),.3);Me.tx=Gn(Me.tx-a*e*s+-r*n*s*o,-70,70),Me.ty=Gn(Me.ty-r*e*s+a*n*s*o,-70,70),vn.tx=Me.tx,vn.ty=Me.ty}Pn()});var Lg=i=>{let t=si&&!si.rot&&!si.multi&&si.moved<(si.touch?12:6)&&i.type==="pointerup"&&es.size===1,e=si&&si.touch;es.delete(i.pointerId),xr=0,Qh=null,es.size||(si=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Kn.addEventListener("pointerup",Lg);Kn.addEventListener("pointercancel",Lg);Kn.addEventListener("dblclick",yf);addEventListener("keydown",i=>{i.key==="Alt"&&(Kn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Kn.style.cursor="")});addEventListener("blur",()=>{Kn.style.cursor=""});var nb=new $o,xg=new $t,_s=null,pf=0,vr=null;function ib(){if(pf=0,!_s||si)return;xg.set(_s.x/innerWidth*2-1,-(_s.y/innerHeight)*2+1),nb.setFromCamera(xg,ns);let i=null;if(i!==vr){let e=vr;vr=i,e&&Sr(e),i&&Sr(i),Pn()}let t=window.__rodHover&&window.__rodHover(_s.x,_s.y);if(t){_r.innerHTML=t,_r.style.display="block";let e=_r.offsetWidth,n=_r.offsetHeight;_r.style.left=Gn(_s.x+14,6,innerWidth-e-6)+"px",_r.style.top=Gn(_s.y+14,6,innerHeight-n-6)+"px",Kn.style.cursor="pointer"}else Sf(),Kn.style.cursor=""}Kn.addEventListener("pointerleave",()=>{if(_s=null,vr){let i=vr;vr=null,Sr(i),Pn()}Sf()});var _r=Ne("#tip");function Sf(){_r.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{_f=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Cg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{gf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),iu()});Ne("#yaw").oninput=i=>{Me.yaw=+i.target.value*Math.PI/180,Pn()};Ne("#tilt").oninput=i=>{Me.tilt=+i.target.value*Math.PI/180,Pn()};Ne("#zin").onclick=()=>{Me.dist=Gn(Me.dist*.75,6,400),Pn()};Ne("#zout").onclick=()=>{Me.dist=Gn(Me.dist/.75,6,400),Pn()};Ne("#rst").onclick=yf;var vg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],sn=[],yg={},sb=i=>yg[i]||(yg[i]=new or({color:i}));function Dg(i,t){i.og.children.forEach(e=>e.material=t?sb(t):Jh)}function Sr(i,t=0){let e=i.mat.emissive;i===vr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Mf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,o=Math.tan(eu*Math.PI/360),c=i.length===1?Gn(i[0].size*3.2+14,14,120):Gn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(Me,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Pn()}var ks=Ne("#q"),ui=Ne("#list"),nn=Ne("#mcs");function su(i,t=!0){if(ui.style.display="none",ks.value="",!i.sel){sn.length>=6&&Ng(sn[0].o,!0);let e=new Set(sn.map(s=>s.color)),n=vg.find(s=>!e.has(s))||vg[0];i.sel={o:i,color:n,tint:new me(n).multiplyScalar(.12)},sn.push(i.sel),Dg(i,n)}nn.classList.contains("min")&&ll(!1),al.set(i,performance.now()),Sr(i),t&&Mf([i],Math.max(Me.tilt,.9)),zs()}function Ng(i,t){let e=sn.indexOf(i.sel);e>=0&&sn.splice(e,1),i.sel=null,Dg(i,null),Sr(i),Pn(),t||zs()}function Ug(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=sn.map(u=>{let x=1e9,f=-1e9,y=1e9,S=-1e9;for(let I of u.o.rings)for(let m=0;m<I[0].length;m+=2)x=Math.min(x,I[0][m]),f=Math.max(f,I[0][m]),y=Math.min(y,I[0][m+1]),S=Math.max(S,I[0][m+1]);return{x0:x,x1:f,y0:y,y1:S}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;sn.forEach((u,x)=>{let f=r[x],y=(f.x0+f.x1)/2,S=(f.y0+f.y1)/2;s.beginPath();for(let I of u.o.rings)for(let m of I)for(let p=0;p<m.length;p+=2){let O=e/2+(m[p]-y)*o,B=n/2-(m[p+1]-S)*o;p?s.lineTo(O,B):s.moveTo(O,B),p===m.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let c=o/qM,h=[.5,1,2,5,10,20,50,100].find(u=>u*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function zs(){if(!sn.length){nn.innerHTML="",nn.style.display="none",ll(!1);return}if(nn.style.display="flex",innerWidth<=640){let e=Ne("#inf").getBoundingClientRect().bottom;nn.style.top=Math.round(e+8)+"px",nn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ne("#rc").classList.contains("min")?.7:.4),Ne("#rc").getBoundingClientRect().top-e-16))+"px",nn.style.width=""}else if(innerHeight<=500){let e=Ne("#inf").getBoundingClientRect().bottom;nn.style.top=Math.round(e+8)+"px",nn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",nn.style.width="min(290px, 40vw)"}else nn.style.top="",nn.style.maxHeight="",nn.style.width="";let i=sn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${qh[s.pr]}</em></div><div class="mb">${xs(s.pop)}${__t(496)}${va(s.area)} km\xB2 \xB7 ${va(s.pop/s.area)}${__t(497)}${s.rankP}${__t(498)}`}).join("");if(sn.length>1){let e=s=>Math.max(...sn.map(s)),n=[[__t(499),s=>s.o.pop,xs],[__t(500),s=>s.o.area,va],[__t(501),s=>s.o.pop/s.o.area,va]];if(i+=`${__t(502)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${sn.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),sn.length===2){let[s,r]=sn.map(h=>h.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],c=(h,u)=>(h>=u?h/u:u/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(503)}${c(a.pop,o.pop)}${__t(504)}${o.name}${__t(505)}${c(a.area,o.area)}\xD7 ${a.area>=o.area?__t(506):__t(507)}.</small>`}i+="</div>"}nn.innerHTML=i,nn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Ng(sn[+e.dataset.x].o)}),nn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Mf([sn[+e.dataset.i].o],Math.max(Me.tilt,.9)),e.onmouseenter=()=>{let n=sn[+e.dataset.i].o;al.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=sn.splice(s,1);sn.splice(r,0,a),zs();let o=Ne("#sil");o&&o.classList.add("flash")}}});let t=Ne("#sil");t&&Ug(t)}ks.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(ks.value);return}let i=lf(ks.value.trim());if(!i){ui.style.display="none";return}let t=[],e=[];for(let s of pn){let r=lf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ui.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${xs(s.pop)}</em></li>`).join("")||__t(463),ui.style.display="block",ui.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>su(n[+s.dataset.i])),ui._r=n});ks.addEventListener("keydown",i=>{i.key==="Enter"&&ui._pick?ui._pick(0):i.key==="Enter"&&ui._r&&ui._r[0]&&su(ui._r[0]),i.key==="Escape"&&(ks.value="",ui.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==ks&&Fg()});var Sg=0;addEventListener("resize",()=>{clearTimeout(Sg),Sg=setTimeout(()=>{let i=Ne("#sil");i&&Ug(i)},120)});var tu=null,mf=Ne("#chip");function rb(i,t,e=.8){tu={codes:new Set(i.map(n=>n.code)),label:t},pn.forEach(n=>{n.inF=tu.codes.has(n.code),nu(n)}),mf.innerHTML=`${__t(508)}${t}</b> \xB7 ${i.length}${i.length===1?__t(509):__t(510)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,mf.style.display="flex",Ne("#chx").onclick=Fg,iu(),Mf(i,e),i.slice(0,40).forEach(n=>al.set(n,performance.now()))}function Fg(){tu&&(tu=null,pn.forEach(i=>{i.inF=!0,nu(i)}),mf.style.display="none",iu())}var ab="prov";function ob(i){let t=[...pn].sort((a,o)=>o.pop-a.pop),e=[...pn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[pn.filter(a=>a.pr===s),Eg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(511)]:[e.slice(0,10),__t(512)];if(n==="low")return s==="pop"?[t.slice(-10),__t(513)]:[e.slice(-10),__t(514)];if(n==="size")return[pn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${xs(+s)}${__t(515)}`:+s==0?`${__t(516)}${xs(+r)}${__t(517)}`:`${xs(+s)} \u2013 ${xs(+r-1)}${__t(517)}`];if(n==="n50"){let a=0,o=0;for(let c of t)if(a+=c.pop,o++,a>=hf/2)break;return[t.slice(0,o),`${__t(518)}`]}return[[],""]}function lb(i){let[t,e]=ob(i);t.length&&rb(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{ab=i.dataset.tab,Ne("#dbody").scrollTop=0});var yr=Ne("#rc"),Zh=Ne("#mcstab");function ya(i){yr.classList.toggle("min",i),Ne("#rcgrab span").textContent=i?__t(560):__t(561),sn.length&&zs()}function ll(i){nn.classList.toggle("min",i),nn.style.transform="",nn.style.opacity="",Zh.classList.toggle("on",i&&sn.length>0),i&&(Zh.textContent=`\u25B8 ${sn.length} ${sn.length===1?"ficha":"fichas"}`,Zh.style.top=nn.style.top||"124px")}function bf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!ru.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(o,c)>10&&(s.lock=Math.abs(o)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(o,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?o:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ne("#rcgrab").onclick=()=>ya(!yr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&ya(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Og=()=>innerWidth>640;bf(yr,{axis:"y",onEnd:(i,t)=>{if(!Og())if(t>40&&!yr.classList.contains("min")){let e=Ne("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ya(!0)}else t<-30&&yr.classList.contains("min")&&ya(!1)}});bf(yr,{axis:"x",onEnd:i=>{Og()&&(i>50?ya(!0):i<-30&&yr.classList.contains("min")&&ya(!1))}});bf(nn,{axis:"x",onMove:i=>{i<0&&(nn.classList.add("sw"),nn.style.transform=`translateX(${i}px)`,nn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{nn.classList.remove("sw"),i<-60?(ll(!0),window.__rodHide&&!sn.length&&window.__rodHide()):(nn.style.transform="",nn.style.opacity="")}});Zh.onclick=()=>{ll(!1),zs()};Ne("#dtoggle").onclick=()=>{let i=Ne("#dp").classList.toggle("open");Ne("#rc").classList.toggle("dopen",i),Ne("#dtoggle").textContent=i?ru.matches&&innerWidth<=640?__t(562):__t(563):__t(564),window.__rodCard&&window.__rodCard()};var ru=matchMedia("(max-width:640px), (max-height:500px)");function Bg(){let i=Ne("#leg");ru.matches?Ne("#rc").insertBefore(i,Ne("#dtoggle")):document.body.appendChild(i),sn.length&&zs()}ru.addEventListener("change",Bg);Bg();Pg();JM();yf();Object.assign(vn,Me);for(let i of pn)i.z=.01;requestAnimationFrame(Ig);pg({scene:vs,camera:ns,renderer:ol,goal:Me,cur:vn,invalidate:Pn,flyTo:(i,t,e,n)=>{Object.assign(Me,{tx:(i-sl)*ts,ty:(t-rl)*ts,dist:e,tilt:n}),Pn()},K:ts,CX:sl,CY:rl,mcs:nn,q:ks,list:ui,munis:pn,select:su,norm:lf,fmt:xs,clamp:Gn,mcsMin:ll});window.__app={scene:vs,renderer:ol,camera:ns,munis:pn,labs:jh,goal:Me,cur:vn,select:su,get mode(){return gf}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
