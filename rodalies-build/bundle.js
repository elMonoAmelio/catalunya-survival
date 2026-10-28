(()=>{var Lp=0,sd=1,Dp=2;var Uo=1,Np=2,ra=3,Ls=0,Zn=1,Wi=2,Xi=0,aa=1,rd=2,ad=3,od=4,Up=5;var cr=100,Fp=101,Op=102,Bp=103,kp=104,zp=200,Vp=201,Hp=202,$p=203,ld=204,cd=205,Gp=206,Wp=207,Xp=208,qp=209,Yp=210,Zp=211,Jp=212,Kp=213,jp=214,ql=0,Yl=1,Zl=2,Xr=3,Jl=4,Kl=5,jl=6,Ql=7,Nc=0,Qp=1,tm=2,Pi=0,hd=1,ud=2,dd=3,fd=4,pd=5,md=6,gd=7;var _d=300,Ds=301,hr=302,Uc=303,Fc=304,Fo=306,tc=1e3,ki=1001,ec=1002,An=1003,em=1004;var Oo=1005;var Nn=1006,Oc=1007;var Ns=1008;var si=1009,xd=1010,vd=1011,oa=1012,Bc=1013,Li=1014,xi=1015,Di=1016,kc=1017,zc=1018,la=1020,yd=35902,Sd=35899,Md=1021,bd=1022,vi=1023,Vi=1026,Us=1027,Vc=1028,Hc=1029,Fs=1030,$c=1031;var Gc=1033,Bo=33776,ko=33777,zo=33778,Vo=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,Zc=36196,Jc=37492,Kc=37496,jc=37488,Qc=37489,Ho=37490,th=37491,eh=37808,nh=37809,ih=37810,sh=37811,rh=37812,ah=37813,oh=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,mh=36492,gh=36494,_h=36495,xh=36283,vh=36284,$o=36285,yh=36286;var Qa=2300,nc=2301,Wl=2302,Wu=2303,Xu=2400,qu=2401,Yu=2402;var nm=3200;var Sh=0,im=1,fs="",ci="srgb",to="srgb-linear",eo="linear",Ge="srgb";var Xl=7680;var sm=519,rm=512,am=513,om=514,Mh=515,lm=516,cm=517,bh=518,hm=519,wd=35044;var Ed="300 es",Ci=2e3,qr=2001;function f0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function p0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function um(){let i=no("canvas");return i.style.display="block",i}var Yf={},Yr=null;function io(...i){let t="THREE."+i.shift();Yr?Yr("log",t,...i):console.log(t,...i)}function dm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function me(...i){i=dm(i);let t="THREE."+i.shift();if(Yr)Yr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ve(...i){i=dm(i);let t="THREE."+i.shift();if(Yr)Yr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function nr(...i){let t=i.join(" ");t in Yf||(Yf[t]=!0,me(...i))}function fm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pm={[ql]:Yl,[Zl]:jl,[Jl]:Ql,[Xr]:Kl,[Yl]:ql,[jl]:Zl,[Ql]:Jl,[Kl]:Xr},Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=1234567,Za=Math.PI/180,Zr=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Td(i,t){return(i%t+t)%t}function m0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function g0(i,t,e){return i!==t?(e-i)/(t-i):0}function Ja(i,t,e){return(1-e)*i+e*t}function _0(i,t,e,n){return Ja(i,t,1-Math.exp(-e*n))}function x0(i,t=1){return t-Math.abs(Td(i,t*2)-t)}function v0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function y0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function S0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function M0(i,t){return i+Math.random()*(t-i)}function b0(i){return i*(.5-Math.random())}function w0(i){i!==void 0&&(Zf=i);let t=Zf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function E0(i){return i*Za}function T0(i){return i*Zr}function A0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function C0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function R0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function I0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),g=r((t-n)/2),d=a((t-n)/2),_=r((n-t)/2),S=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*g,c*d,o*h);break;case"YZY":i.set(c*d,o*u,c*g,o*h);break;case"ZXZ":i.set(c*g,c*d,o*u,o*h);break;case"XZX":i.set(o*u,c*S,c*_,o*h);break;case"YXY":i.set(c*_,o*u,c*S,o*h);break;case"ZYZ":i.set(c*S,c*_,o*u,o*h);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ad={DEG2RAD:Za,RAD2DEG:Zr,generateUUID:zi,clamp:be,euclideanModulo:Td,mapLinear:m0,inverseLerp:g0,lerp:Ja,damp:_0,pingpong:x0,smoothstep:v0,smootherstep:y0,randInt:S0,randFloat:M0,randFloatSpread:b0,seededRandom:w0,degToRad:E0,radToDeg:T0,isPowerOfTwo:A0,ceilPowerOfTwo:C0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:I0,normalize:qe,denormalize:Ai},Ot=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],g=n[s+3],d=r[a+0],_=r[a+1],S=r[a+2],R=r[a+3];if(g!==R||c!==d||h!==_||u!==S){let m=c*d+h*_+u*S+g*R;m<0&&(d=-d,_=-_,S=-S,R=-R,m=-m);let p=1-o;if(m<.9995){let F=Math.acos(m),B=Math.sin(F);p=Math.sin(p*F)/B,o=Math.sin(o*F)/B,c=c*p+d*o,h=h*p+_*o,u=u*p+S*o,g=g*p+R*o}else{c=c*p+d*o,h=h*p+_*o,u=u*p+S*o,g=g*p+R*o;let F=1/Math.sqrt(c*c+h*h+u*u+g*g);c*=F,h*=F,u*=F,g*=F}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],g=r[a],d=r[a+1],_=r[a+2],S=r[a+3];return t[e]=o*S+u*g+c*_-h*d,t[e+1]=c*S+u*d+h*g-o*_,t[e+2]=h*S+u*_+o*d-c*g,t[e+3]=u*S-o*g-c*d-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),g=o(r/2),d=c(n/2),_=c(s/2),S=c(r/2);switch(a){case"XYZ":this._x=d*u*g+h*_*S,this._y=h*_*g-d*u*S,this._z=h*u*S+d*_*g,this._w=h*u*g-d*_*S;break;case"YXZ":this._x=d*u*g+h*_*S,this._y=h*_*g-d*u*S,this._z=h*u*S-d*_*g,this._w=h*u*g+d*_*S;break;case"ZXY":this._x=d*u*g-h*_*S,this._y=h*_*g+d*u*S,this._z=h*u*S+d*_*g,this._w=h*u*g-d*_*S;break;case"ZYX":this._x=d*u*g-h*_*S,this._y=h*_*g+d*u*S,this._z=h*u*S-d*_*g,this._w=h*u*g+d*_*S;break;case"YZX":this._x=d*u*g+h*_*S,this._y=h*_*g+d*u*S,this._z=h*u*S-d*_*g,this._w=h*u*g-d*_*S;break;case"XZY":this._x=d*u*g-h*_*S,this._y=h*_*g-d*u*S,this._z=h*u*S+d*_*g,this._w=h*u*g+d*_*S;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],g=e[10],d=n+o+g;if(d>0){let _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-c)*_,this._y=(r-h)*_,this._z=(a-s)*_}else if(n>o&&n>g){let _=2*Math.sqrt(1+n-o-g);this._w=(u-c)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+h)/_}else if(o>g){let _=2*Math.sqrt(1+o-n-g);this._w=(r-h)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(c+u)/_}else{let _=2*Math.sqrt(1+g-n-o);this._w=(a-s)/_,this._x=(r+h)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+c*h+a*g-o*u,this.y=n+c*u+o*h-r*g,this.z=s+c*g+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vu.copy(this).projectOnVector(t),this.sub(vu)}reflect(t){return this.sub(vu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vu=new W,Jf=new $i,Me=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],g=n[7],d=n[2],_=n[5],S=n[8],R=s[0],m=s[3],p=s[6],F=s[1],B=s[4],A=s[7],b=s[2],N=s[5],$=s[8];return r[0]=a*R+o*F+c*b,r[3]=a*m+o*B+c*N,r[6]=a*p+o*A+c*$,r[1]=h*R+u*F+g*b,r[4]=h*m+u*B+g*N,r[7]=h*p+u*A+g*$,r[2]=d*R+_*F+S*b,r[5]=d*m+_*B+S*N,r[8]=d*p+_*A+S*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],g=u*a-o*h,d=o*c-u*r,_=h*r-a*c,S=e*g+n*d+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/S;return t[0]=g*R,t[1]=(s*h-u*n)*R,t[2]=(o*n-s*a)*R,t[3]=d*R,t[4]=(u*e-s*c)*R,t[5]=(s*r-o*e)*R,t[6]=_*R,t[7]=(n*c-h*e)*R,t[8]=(a*e-n*r)*R,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yu.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yu.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yu=new Me,Kf=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P0(){let i={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ge&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ge&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[to]:{primaries:t,whitePoint:n,transfer:eo,toXYZ:Kf,fromXYZ:jf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:Kf,fromXYZ:jf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),i}var Fe=P0();function us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rr,ic=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rr===void 0&&(Rr=no("canvas")),Rr.width=t.width,Rr.height=t.height;let s=Rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=us(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},L0=0,Jr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Su(s[a].image)):r.push(Su(s[a]))}else r=Su(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}var D0=0,Mu=new W,ei=class i extends Hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,s=ki,r=Nn,a=Ns,o=vi,c=si,h=i.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=zi(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mu).x}get height(){return this.source.getSize(Mu).y}get depth(){return this.source.getSize(Mu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=_d;ei.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],g=c[8],d=c[1],_=c[5],S=c[9],R=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(g-R)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(g+R)<.1&&Math.abs(S+m)<.1&&Math.abs(h+_+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(h+1)/2,A=(_+1)/2,b=(p+1)/2,N=(u+d)/4,$=(g+R)/4,E=(S+m)/4;return B>A&&B>b?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=N/n,r=$/n):A>b?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=N/s,r=E/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=$/r,s=E/r),this.set(n,s,r,e),this}let F=Math.sqrt((m-S)*(m-S)+(g-R)*(g-R)+(d-u)*(d-u));return Math.abs(F)<.001&&(F=1),this.x=(m-S)/F,this.y=(g-R)/F,this.z=(d-u)/F,this.w=Math.acos((h+_+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ei(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Jr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,h,u,g,d,_,S,R,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,g,d,_,S,R,m)}set(t,e,n,s,r,a,o,c,h,u,g,d,_,S,R,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=g,p[14]=d,p[3]=_,p[7]=S,p[11]=R,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ir.setFromMatrixColumn(t,0).length(),r=1/Ir.setFromMatrixColumn(t,1).length(),a=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*u,_=a*g,S=o*u,R=o*g;e[0]=c*u,e[4]=-c*g,e[8]=h,e[1]=_+S*h,e[5]=d-R*h,e[9]=-o*c,e[2]=R-d*h,e[6]=S+_*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,_=c*g,S=h*u,R=h*g;e[0]=d+R*o,e[4]=S*o-_,e[8]=a*h,e[1]=a*g,e[5]=a*u,e[9]=-o,e[2]=_*o-S,e[6]=R+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,_=c*g,S=h*u,R=h*g;e[0]=d-R*o,e[4]=-a*g,e[8]=S+_*o,e[1]=_+S*o,e[5]=a*u,e[9]=R-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,_=a*g,S=o*u,R=o*g;e[0]=c*u,e[4]=S*h-_,e[8]=d*h+R,e[1]=c*g,e[5]=R*h+d,e[9]=_*h-S,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,_=a*h,S=o*c,R=o*h;e[0]=c*u,e[4]=R-d*g,e[8]=S*g+_,e[1]=g,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=_*g+S,e[10]=d-R*g}else if(t.order==="XZY"){let d=a*c,_=a*h,S=o*c,R=o*h;e[0]=c*u,e[4]=-g,e[8]=h*u,e[1]=d*g+R,e[5]=a*u,e[9]=_*g-S,e[2]=S*g-_,e[6]=o*u,e[10]=R*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,U0)}lookAt(t,e,n){let s=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ss.crossVectors(n,oi),Ss.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ss.crossVectors(n,oi)),Ss.normalize(),xl.crossVectors(oi,Ss),s[0]=Ss.x,s[4]=xl.x,s[8]=oi.x,s[1]=Ss.y,s[5]=xl.y,s[9]=oi.y,s[2]=Ss.z,s[6]=xl.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],g=n[5],d=n[9],_=n[13],S=n[2],R=n[6],m=n[10],p=n[14],F=n[3],B=n[7],A=n[11],b=n[15],N=s[0],$=s[4],E=s[8],D=s[12],V=s[1],X=s[5],nt=s[9],rt=s[13],J=s[2],Q=s[6],ct=s[10],ht=s[14],wt=s[3],dt=s[7],St=s[11],yt=s[15];return r[0]=a*N+o*V+c*J+h*wt,r[4]=a*$+o*X+c*Q+h*dt,r[8]=a*E+o*nt+c*ct+h*St,r[12]=a*D+o*rt+c*ht+h*yt,r[1]=u*N+g*V+d*J+_*wt,r[5]=u*$+g*X+d*Q+_*dt,r[9]=u*E+g*nt+d*ct+_*St,r[13]=u*D+g*rt+d*ht+_*yt,r[2]=S*N+R*V+m*J+p*wt,r[6]=S*$+R*X+m*Q+p*dt,r[10]=S*E+R*nt+m*ct+p*St,r[14]=S*D+R*rt+m*ht+p*yt,r[3]=F*N+B*V+A*J+b*wt,r[7]=F*$+B*X+A*Q+b*dt,r[11]=F*E+B*nt+A*ct+b*St,r[15]=F*D+B*rt+A*ht+b*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],g=t[6],d=t[10],_=t[14],S=t[3],R=t[7],m=t[11],p=t[15],F=c*_-h*d,B=o*_-h*g,A=o*d-c*g,b=a*_-h*u,N=a*d-c*u,$=a*g-o*u;return e*(R*F-m*B+p*A)-n*(S*F-m*b+p*N)+s*(S*B-R*b+p*$)-r*(S*A-R*N+m*$)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],g=t[9],d=t[10],_=t[11],S=t[12],R=t[13],m=t[14],p=t[15],F=e*o-n*a,B=e*c-s*a,A=e*h-r*a,b=n*c-s*o,N=n*h-r*o,$=s*h-r*c,E=u*R-g*S,D=u*m-d*S,V=u*p-_*S,X=g*m-d*R,nt=g*p-_*R,rt=d*p-_*m,J=F*rt-B*nt+A*X+b*V-N*D+$*E;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/J;return t[0]=(o*rt-c*nt+h*X)*Q,t[1]=(s*nt-n*rt-r*X)*Q,t[2]=(R*$-m*N+p*b)*Q,t[3]=(d*N-g*$-_*b)*Q,t[4]=(c*V-a*rt-h*D)*Q,t[5]=(e*rt-s*V+r*D)*Q,t[6]=(m*A-S*$-p*B)*Q,t[7]=(u*$-d*A+_*B)*Q,t[8]=(a*nt-o*V+h*E)*Q,t[9]=(n*V-e*nt-r*E)*Q,t[10]=(S*N-R*A+p*F)*Q,t[11]=(g*A-u*N-_*F)*Q,t[12]=(o*D-a*X-c*E)*Q,t[13]=(e*X-n*D+s*E)*Q,t[14]=(R*B-S*b-m*F)*Q,t[15]=(u*b-g*B+d*F)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,g=o+o,d=r*h,_=r*u,S=r*g,R=a*u,m=a*g,p=o*g,F=c*h,B=c*u,A=c*g,b=n.x,N=n.y,$=n.z;return s[0]=(1-(R+p))*b,s[1]=(_+A)*b,s[2]=(S-B)*b,s[3]=0,s[4]=(_-A)*N,s[5]=(1-(d+p))*N,s[6]=(m+F)*N,s[7]=0,s[8]=(S+B)*$,s[9]=(m-F)*$,s[10]=(1-(d+R))*$,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ir.set(s[0],s[1],s[2]).length(),o=Ir.set(s[4],s[5],s[6]).length(),c=Ir.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bi.copy(this);let h=1/a,u=1/o,g=1/c;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,e.setFromRotationMatrix(bi),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ci,c=!1){let h=this.elements,u=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),_=(n+s)/(n-s),S,R;if(c)S=r/(a-r),R=a*r/(a-r);else if(o===Ci)S=-(a+r)/(a-r),R=-2*a*r/(a-r);else if(o===qr)S=-a/(a-r),R=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ci,c=!1){let h=this.elements,u=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),_=-(n+s)/(n-s),S,R;if(c)S=1/(a-r),R=a/(a-r);else if(o===Ci)S=-2/(a-r),R=-(a+r)/(a-r);else if(o===qr)S=-1/(a-r),R=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ir=new W,bi=new Ve,N0=new W(0,0,0),U0=new W(1,1,1),Ss=new W,xl=new W,oi=new W,Qf=new Ve,tp=new $i,ds=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],g=s[2],d=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tp.setFromEuler(this),this.setFromQuaternion(tp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ds.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},F0=0,ep=new W,Pr=new $i,as=new Ve,vl=new W,Va=new W,O0=new W,B0=new $i,np=new W(1,0,0),ip=new W(0,1,0),sp=new W(0,0,1),rp={type:"added"},k0={type:"removed"},Lr={type:"childadded",child:null},bu={type:"childremoved",child:null},Cn=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new ds,n=new $i,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Me}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(np,t)}rotateY(t){return this.rotateOnAxis(ip,t)}rotateZ(t){return this.rotateOnAxis(sp,t)}translateOnAxis(t,e){return ep.copy(t).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(np,t)}translateY(t){return this.translateOnAxis(ip,t)}translateZ(t){return this.translateOnAxis(sp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(as.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vl.copy(t):vl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?as.lookAt(Va,vl,this.up):as.lookAt(vl,Va,this.up),this.quaternion.setFromRotationMatrix(as),s&&(as.extractRotation(s.matrixWorld),Pr.setFromRotationMatrix(as),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rp),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k0),bu.child=t,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),as.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),as.multiply(t.parent.matrixWorld)),t.applyMatrix4(as),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rp),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,t,O0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,B0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let g=c[h];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),g=a(t.shapes),d=a(t.skeletons),_=a(t.animations),S=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new W(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let R of t.hand.values()){let m=e.getJointPose(R,n),p=this._getHandJoint(h,R);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=u.position.distanceTo(g.position),_=.02,S=.005;h.inputState.pinching&&d>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},yl={h:0,s:0,l:0};function wu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Fe.workingColorSpace){if(t=Td(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wu(a,r,t+1/3),this.g=wu(a,r,t),this.b=wu(a,r,t-1/3)}return Fe.colorSpaceToWorking(this,s),this}setStyle(t,e=ci){function n(r){r!==void 0&&parseFloat(r)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){let n=mm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Fe.workingToColorSpace(Vn.copy(this),t),Math.round(be(Vn.r*255,0,255))*65536+Math.round(be(Vn.g*255,0,255))*256+Math.round(be(Vn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.workingToColorSpace(Vn.copy(this),e);let n=Vn.r,s=Vn.g,r=Vn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let g=a-o;switch(h=u<=.5?g/(a+o):g/(2-a-o),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Fe.workingColorSpace){return Fe.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=ci){Fe.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,s=Vn.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(yl);let n=Ja(Ms.h,yl.h,e),s=Ja(Ms.s,yl.s,e),r=Ja(Ms.l,yl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new fe;fe.NAMES=mm;var ro=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wi=new W,os=new W,Eu=new W,ls=new W,Dr=new W,Nr=new W,ap=new W,Tu=new W,Au=new W,Cu=new W,Ru=new We,Iu=new We,Pu=new We,Ts=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wi.subVectors(t,e),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wi.subVectors(s,e),os.subVectors(n,e),Eu.subVectors(t,e);let a=wi.dot(wi),o=wi.dot(os),c=wi.dot(Eu),h=os.dot(os),u=os.dot(Eu),g=a*h-o*o;if(g===0)return r.set(0,0,0),null;let d=1/g,_=(h*c-o*u)*d,S=(a*u-o*c)*d;return r.set(1-_-S,S,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ls)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ls.x),c.addScaledVector(a,ls.y),c.addScaledVector(o,ls.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ru.setScalar(0),Iu.setScalar(0),Pu.setScalar(0),Ru.fromBufferAttribute(t,e),Iu.fromBufferAttribute(t,n),Pu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ru,r.x),a.addScaledVector(Iu,r.y),a.addScaledVector(Pu,r.z),a}static isFrontFacing(t,e,n,s){return wi.subVectors(n,e),os.subVectors(t,e),wi.cross(os).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),wi.cross(os).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Dr.subVectors(s,n),Nr.subVectors(r,n),Tu.subVectors(t,n);let c=Dr.dot(Tu),h=Nr.dot(Tu);if(c<=0&&h<=0)return e.copy(n);Au.subVectors(t,s);let u=Dr.dot(Au),g=Nr.dot(Au);if(u>=0&&g<=u)return e.copy(s);let d=c*g-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Dr,a);Cu.subVectors(t,r);let _=Dr.dot(Cu),S=Nr.dot(Cu);if(S>=0&&_<=S)return e.copy(r);let R=_*h-c*S;if(R<=0&&h>=0&&S<=0)return o=h/(h-S),e.copy(n).addScaledVector(Nr,o);let m=u*S-_*g;if(m<=0&&g-u>=0&&_-S>=0)return ap.subVectors(r,s),o=(g-u)/(g-u+(_-S)),e.copy(s).addScaledVector(ap,o);let p=1/(m+R+d);return a=R*p,o=d*p,e.copy(n).addScaledVector(Dr,a).addScaledVector(Nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(t.matrixWorld),this.union(Sl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ha),Ml.subVectors(this.max,Ha),Ur.subVectors(t.a,Ha),Fr.subVectors(t.b,Ha),Or.subVectors(t.c,Ha),bs.subVectors(Fr,Ur),ws.subVectors(Or,Fr),Ks.subVectors(Ur,Or);let e=[0,-bs.z,bs.y,0,-ws.z,ws.y,0,-Ks.z,Ks.y,bs.z,0,-bs.x,ws.z,0,-ws.x,Ks.z,0,-Ks.x,-bs.y,bs.x,0,-ws.y,ws.x,0,-Ks.y,Ks.x,0];return!Lu(e,Ur,Fr,Or,Ml)||(e=[1,0,0,0,1,0,0,0,1],!Lu(e,Ur,Fr,Or,Ml))?!1:(bl.crossVectors(bs,ws),e=[bl.x,bl.y,bl.z],Lu(e,Ur,Fr,Or,Ml))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cs=[new W,new W,new W,new W,new W,new W,new W,new W],Ei=new W,Sl=new Yn,Ur=new W,Fr=new W,Or=new W,bs=new W,ws=new W,Ks=new W,Ha=new W,Ml=new W,bl=new W,js=new W;function Lu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){js.fromArray(i,r);let o=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),c=t.dot(js),h=e.dot(js),u=n.dot(js);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var yn=new W,wl=new Ot,V0=0,Je=class extends Hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wd,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wl.fromBufferAttribute(this,e),wl.applyMatrix3(t),this.setXY(e,wl.x,wl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix3(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var dn=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},H0=new Yn,$a=new W,Du=new W,ii=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):H0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$a.subVectors(t,this.center);let e=$a.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($a,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Du.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($a.copy(t.center).add(Du)),this.expandByPoint($a.copy(t.center).sub(Du))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$0=0,_i=new Ve,Nu=new Cn,Br=new W,li=new Yn,Ga=new Yn,Tn=new W,fn=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(f0(t)?oo:ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return Nu.lookAt(t),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(li.min,Ga.min),li.expandByPoint(Tn),Tn.addVectors(li.max,Ga.max),li.expandByPoint(Tn)):(li.expandByPoint(Ga.min),li.expandByPoint(Ga.max))}li.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Tn.fromBufferAttribute(o,h),c&&(Br.fromBufferAttribute(t,h),Tn.add(Br)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new W,c[E]=new W;let h=new W,u=new W,g=new W,d=new Ot,_=new Ot,S=new Ot,R=new W,m=new W;function p(E,D,V){h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,D),g.fromBufferAttribute(n,V),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,D),S.fromBufferAttribute(r,V),u.sub(h),g.sub(h),_.sub(d),S.sub(d);let X=1/(_.x*S.y-S.x*_.y);isFinite(X)&&(R.copy(u).multiplyScalar(S.y).addScaledVector(g,-_.y).multiplyScalar(X),m.copy(g).multiplyScalar(_.x).addScaledVector(u,-S.x).multiplyScalar(X),o[E].add(R),o[D].add(R),o[V].add(R),c[E].add(m),c[D].add(m),c[V].add(m))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let E=0,D=F.length;E<D;++E){let V=F[E],X=V.start,nt=V.count;for(let rt=X,J=X+nt;rt<J;rt+=3)p(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}let B=new W,A=new W,b=new W,N=new W;function $(E){b.fromBufferAttribute(s,E),N.copy(b);let D=o[E];B.copy(D),B.sub(b.multiplyScalar(b.dot(D))).normalize(),A.crossVectors(N,D);let X=A.dot(c[E])<0?-1:1;a.setXYZW(E,B.x,B.y,B.z,X)}for(let E=0,D=F.length;E<D;++E){let V=F[E],X=V.start,nt=V.count;for(let rt=X,J=X+nt;rt<J;rt+=3)$(t.getX(rt+0)),$(t.getX(rt+1)),$(t.getX(rt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,h=new W,u=new W,g=new W;if(t)for(let d=0,_=t.count;d<_;d+=3){let S=t.getX(d+0),R=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,R),a.fromBufferAttribute(e,m),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(R,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,_=e.count;d<_;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,g=o.normalized,d=new h.constructor(c.length*u),_=0,S=0;for(let R=0,m=c.length;R<m;R++){o.isInterleavedBufferAttribute?_=c[R]*o.data.stride+o.offset:_=c[R]*u;for(let p=0;p<u;p++)d[S++]=h[_++]}return new Je(d,u,g)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,g=h.length;u<g;u++){let d=h[u],_=t(d,n);c.push(_)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let g=0,d=h.length;g<d;g++){let _=h[g];u.push(_.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let d=0,_=g.length;d<_;d++)u.push(g[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ac=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wd,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},qn=new W,Ii=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uu=new W,G0=new W,W0=new Me,Ti=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Uu.subVectors(n,e).cross(G0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||W0.getNormalMatrix(t),s=this.coplanarPoint(Uu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},X0=0,Gi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=aa,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ti().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hs=new W,Fu=new W,El=new W,Tl=new W,ir=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,e),hs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fu.copy(t).add(e).multiplyScalar(.5),El.copy(e).sub(t).normalize(),Tl.copy(this.origin).sub(Fu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(El),o=Tl.dot(this.direction),c=-Tl.dot(El),h=Tl.lengthSq(),u=Math.abs(1-a*a),g,d,_,S;if(u>0)if(g=a*c-o,d=a*o-c,S=r*u,g>=0)if(d>=-S)if(d<=S){let R=1/u;g*=R,d*=R,_=g*(g+a*d+2*o)+d*(a*g+d+2*c)+h}else d=r,g=Math.max(0,-(a*d+o)),_=-g*g+d*(d+2*c)+h;else d=-r,g=Math.max(0,-(a*d+o)),_=-g*g+d*(d+2*c)+h;else d<=-S?(g=Math.max(0,-(-a*r+o)),d=g>0?-r:Math.min(Math.max(-r,-c),r),_=-g*g+d*(d+2*c)+h):d<=S?(g=0,d=Math.min(Math.max(-r,-c),r),_=d*(d+2*c)+h):(g=Math.max(0,-(a*r+o)),d=g>0?r:Math.min(Math.max(-r,-c),r),_=-g*g+d*(d+2*c)+h);else d=a>0?-r:r,g=Math.max(0,-(a*d+o)),_=-g*g+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Fu).addScaledVector(El,d),_}intersectSphere(t,e){if(t.radius<0)return null;hs.subVectors(t.center,this.origin);let n=hs.dot(this.direction),s=hs.dot(hs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-d.z)*g,c=(t.max.z-d.z)*g):(o=(t.max.z-d.z)*g,c=(t.min.z-d.z)*g),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,g=t.x-a.x,d=t.y-a.y,_=t.z-a.z,S=e.x-a.x,R=e.y-a.y,m=e.z-a.z,p=n.x-a.x,F=n.y-a.y,B=n.z-a.z,A=Math.abs(c),b=Math.abs(h),N=Math.abs(u),$,E,D,V,X,nt,rt,J,Q,ct,ht,wt;if(A>=b&&A>=N?(D=c,nt=g,Q=S,wt=p,c>=0?($=h,E=u,V=d,X=_,rt=R,J=m,ct=F,ht=B):($=u,E=h,V=_,X=d,rt=m,J=R,ct=B,ht=F)):b>=N?(D=h,nt=d,Q=R,wt=F,h>=0?($=u,E=c,V=_,X=g,rt=m,J=S,ct=B,ht=p):($=c,E=u,V=g,X=_,rt=S,J=m,ct=p,ht=B)):(D=u,nt=_,Q=m,wt=B,u>=0?($=c,E=h,V=g,X=d,rt=S,J=R,ct=p,ht=F):($=h,E=c,V=d,X=g,rt=R,J=S,ct=F,ht=p)),D===0)return null;let dt=$/D,St=E/D,yt=1/D,$t=V-dt*nt,Yt=X-St*nt,ze=rt-dt*Q,Ee=J-St*Q,Ne=ct-dt*wt,mt=ht-St*wt,xt=Ne*Ee-mt*ze,Rt=$t*mt-Yt*Ne,ee=ze*Yt-Ee*$t;if(s){if(xt<0||Rt<0||ee<0)return null}else if((xt<0||Rt<0||ee<0)&&(xt>0||Rt>0||ee>0))return null;let Xt=xt+Rt+ee;if(Xt===0)return null;let ce=yt*(xt*nt+Rt*Q+ee*wt);return(Xt>0?ce<0:ce>0)?null:this.at(ce/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sr=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},op=new Ve,Qs=new ir,Al=new ii,lp=new W,Cl=new W,Rl=new W,Il=new W,Ou=new W,Pl=new W,cp=new W,Ll=new W,Rn=class extends Cn{constructor(t=new fn,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pl.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],g=r[c];u!==0&&(Ou.fromBufferAttribute(g,t),a?Pl.addScaledVector(Ou,u):Pl.addScaledVector(Ou.sub(e),u))}e.add(Pl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(r),Qs.copy(t.ray).recast(t.near),!(Al.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Al,lp)===null||Qs.origin.distanceToSquared(lp)>(t.far-t.near)**2))&&(op.copy(r).invert(),Qs.copy(t.ray).applyMatrix4(op),!(n.boundingBox!==null&&Qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,d=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,R=d.length;S<R;S++){let m=d[S],p=a[m.materialIndex],F=Math.max(m.start,_.start),B=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let A=F,b=B;A<b;A+=3){let N=o.getX(A),$=o.getX(A+1),E=o.getX(A+2);s=Dl(this,p,t,n,h,u,g,N,$,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,_.start),R=Math.min(o.count,_.start+_.count);for(let m=S,p=R;m<p;m+=3){let F=o.getX(m),B=o.getX(m+1),A=o.getX(m+2);s=Dl(this,a,t,n,h,u,g,F,B,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,R=d.length;S<R;S++){let m=d[S],p=a[m.materialIndex],F=Math.max(m.start,_.start),B=Math.min(c.count,Math.min(m.start+m.count,_.start+_.count));for(let A=F,b=B;A<b;A+=3){let N=A,$=A+1,E=A+2;s=Dl(this,p,t,n,h,u,g,N,$,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let S=Math.max(0,_.start),R=Math.min(c.count,_.start+_.count);for(let m=S,p=R;m<p;m+=3){let F=m,B=m+1,A=m+2;s=Dl(this,a,t,n,h,u,g,F,B,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function q0(i,t,e,n,s,r,a,o){let c;if(t.side===Zn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ls,o),c===null)return null;Ll.copy(o),Ll.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Ll);return h<e.near||h>e.far?null:{distance:h,point:Ll.clone(),object:i}}function Dl(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Cl),i.getVertexPosition(c,Rl),i.getVertexPosition(h,Il);let u=q0(i,t,e,n,Cl,Rl,Il,cp);if(u){let g=new W;Ts.getBarycoord(cp,Cl,Rl,Il,g),s&&(u.uv=Ts.getInterpolatedAttribute(s,o,c,h,g,new Ot)),r&&(u.uv1=Ts.getInterpolatedAttribute(r,o,c,h,g,new Ot)),a&&(u.normal=Ts.getInterpolatedAttribute(a,o,c,h,g,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:h,normal:new W,materialIndex:0};Ts.getNormal(Cl,Rl,Il,d.normal),u.face=d,u.barycoord=g}return u}var lo=class extends ei{constructor(t=null,e=1,n=1,s,r,a,o,c,h=An,u=An,g,d){super(null,a,o,c,h,u,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var co=class extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},kr=new Ve,hp=new Ve,Nl=[],up=new Yn,Y0=new Ve,Wa=new Rn,Xa=new ii,ho=class extends Rn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Y0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,kr),up.copy(t.boundingBox).applyMatrix4(kr),this.boundingBox.union(up)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,kr),Xa.copy(t.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),t.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),hp.multiplyMatrices(n,kr),Wa.matrixWorld=hp,Wa.raycast(t,Nl);for(let a=0,o=Nl.length;a<o;a++){let c=Nl[a];c.instanceId=r,c.object=this,e.push(c)}Nl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lo(new Float32Array(s*this.count),s,this.count,Vc,xi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tr=new ii,Z0=new Ot(.5,.5),Ul=new W,Qr=class{constructor(t=new Ti,e=new Ti,n=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],g=r[5],d=r[6],_=r[7],S=r[8],R=r[9],m=r[10],p=r[11],F=r[12],B=r[13],A=r[14],b=r[15];if(s[0].setComponents(h-a,_-u,p-S,b-F).normalize(),s[1].setComponents(h+a,_+u,p+S,b+F).normalize(),s[2].setComponents(h+o,_+g,p+R,b+B).normalize(),s[3].setComponents(h-o,_-g,p-R,b-B).normalize(),n)s[4].setComponents(c,d,m,A).normalize(),s[5].setComponents(h-c,_-d,p-m,b-A).normalize();else if(s[4].setComponents(h-c,_-d,p-m,b-A).normalize(),e===Ci)s[5].setComponents(h+c,_+d,p+m,b+A).normalize();else if(e===qr)s[5].setComponents(c,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);let e=Z0.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ul.x=s.normal.x>0?t.max.x:t.min.x,Ul.y=s.normal.y>0?t.max.y:t.min.y,Ul.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rr=class extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},oc=new W,lc=new W,dp=new Ve,qa=new ir,Fl=new ii,Bu=new W,fp=new W,cc=class extends Cn{constructor(t=new fn,e=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oc.fromBufferAttribute(e,s-1),lc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oc.distanceTo(lc);t.setAttribute("lineDistance",new dn(n,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(s),Fl.radius+=r,t.ray.intersectsSphere(Fl)===!1)return;dp.copy(s).invert(),qa.copy(t.ray).applyMatrix4(dp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let _=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let R=_,m=S-1;R<m;R+=h){let p=u.getX(R),F=u.getX(R+1),B=Ol(this,t,qa,c,p,F,R);B&&e.push(B)}if(this.isLineLoop){let R=u.getX(S-1),m=u.getX(_),p=Ol(this,t,qa,c,R,m,S-1);p&&e.push(p)}}else{let _=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let R=_,m=S-1;R<m;R+=h){let p=Ol(this,t,qa,c,R,R+1,R);p&&e.push(p)}if(this.isLineLoop){let R=Ol(this,t,qa,c,S-1,_,S-1);R&&e.push(R)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ol(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(oc.fromBufferAttribute(o,s),lc.fromBufferAttribute(o,r),e.distanceSqToSegment(oc,lc,Bu,fp)>n)return;Bu.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Bu);if(!(h<t.near||h>t.far))return{distance:h,point:fp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var uo=class extends cc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},hc=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pp=new Ve,Zu=new ir,Bl=new ii,kl=new W,ar=class extends Cn{constructor(t=new fn,e=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,t.ray.intersectsSphere(Bl)===!1)return;pp.copy(s).invert(),Zu.copy(t.ray).applyMatrix4(pp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,g=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=d,R=_;S<R;S++){let m=h.getX(S);kl.fromBufferAttribute(g,m),mp(kl,m,c,s,t,e,this)}}else{let d=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let S=d,R=_;S<R;S++)kl.fromBufferAttribute(g,S),mp(kl,S,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mp(i,t,e,n,s,r,a){let o=Zu.distanceSqToPoint(i);if(o<e){let c=new W;Zu.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var fo=class extends ei{constructor(t=[],e=Ds,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var As=class extends ei{constructor(t,e,n=Li,s,r,a,o=An,c=An,h,u=Vi,g=1){if(u!==Vi&&u!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},uc=class extends As{constructor(t,e=Li,n=Ds,s,r,a=An,o=An,c,h=Vi){let u={width:t,height:t,depth:1},g=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},po=class extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ta=class i extends fn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],g=[],d=0,_=0;S("z","y","x",-1,-1,n,e,t,a,r,0),S("z","y","x",1,-1,n,e,-t,a,r,1),S("x","z","y",1,1,t,n,e,s,a,2),S("x","z","y",1,-1,t,n,-e,s,a,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(g,2));function S(R,m,p,F,B,A,b,N,$,E,D){let V=A/$,X=b/E,nt=A/2,rt=b/2,J=N/2,Q=$+1,ct=E+1,ht=0,wt=0,dt=new W;for(let St=0;St<ct;St++){let yt=St*X-rt;for(let $t=0;$t<Q;$t++){let Yt=$t*V-nt;dt[R]=Yt*F,dt[m]=yt*B,dt[p]=J,h.push(dt.x,dt.y,dt.z),dt[R]=0,dt[m]=0,dt[p]=N>0?1:-1,u.push(dt.x,dt.y,dt.z),g.push($t/$),g.push(1-St/E),ht+=1}}for(let St=0;St<E;St++)for(let yt=0;yt<$;yt++){let $t=d+yt+Q*St,Yt=d+yt+Q*(St+1),ze=d+(yt+1)+Q*(St+1),Ee=d+(yt+1)+Q*St;c.push($t,Yt,Ee),c.push(Yt,ze,Ee),wt+=6}o.addGroup(_,wt,D),_+=wt,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var mo=class i extends fn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],d=[],_=[],S=0,R=[],m=n/2,p=0;F(),a===!1&&(t>0&&B(!0),e>0&&B(!1)),this.setIndex(u),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(_,2));function F(){let A=new W,b=new W,N=0,$=(e-t)/n;for(let E=0;E<=r;E++){let D=[],V=E/r,X=V*(e-t)+t;for(let nt=0;nt<=s;nt++){let rt=nt/s,J=rt*c+o,Q=Math.sin(J),ct=Math.cos(J);b.x=X*Q,b.y=-V*n+m,b.z=X*ct,g.push(b.x,b.y,b.z),A.set(Q,$,ct).normalize(),d.push(A.x,A.y,A.z),_.push(rt,1-V),D.push(S++)}R.push(D)}for(let E=0;E<s;E++)for(let D=0;D<r;D++){let V=R[D][E],X=R[D+1][E],nt=R[D+1][E+1],rt=R[D][E+1];(t>0||D!==0)&&(u.push(V,X,rt),N+=3),(e>0||D!==r-1)&&(u.push(X,nt,rt),N+=3)}h.addGroup(p,N,0),p+=N}function B(A){let b=S,N=new Ot,$=new W,E=0,D=A===!0?t:e,V=A===!0?1:-1;for(let nt=1;nt<=s;nt++)g.push(0,m*V,0),d.push(0,V,0),_.push(.5,.5),S++;let X=S;for(let nt=0;nt<=s;nt++){let J=nt/s*c+o,Q=Math.cos(J),ct=Math.sin(J);$.x=D*ct,$.y=m*V,$.z=D*Q,g.push($.x,$.y,$.z),d.push(0,V,0),N.x=Q*.5+.5,N.y=ct*.5*V+.5,_.push(N.x,N.y),S++}for(let nt=0;nt<s;nt++){let rt=b+nt,J=X+nt;A===!0?u.push(J,J+1,rt):u.push(J+1,J,rt),E+=3}h.addGroup(p,E,A===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,_=(a-u)/d;return(s+_)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Ot:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,s=[],r=[],a=[],o=new W,c=new Ve;for(let _=0;_<=t;_++){let S=_/t;s[_]=this.getTangentAt(S,new W)}r[0]=new W,a[0]=new W;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let _=1;_<=t;_++){if(r[_]=r[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(s[_-1],s[_]),o.length()>Number.EPSILON){o.normalize();let S=Math.acos(be(s[_-1].dot(s[_]),-1,1));r[_].applyMatrix4(c.makeRotationAxis(o,S))}a[_].crossVectors(s[_],r[_])}if(e===!0){let _=Math.acos(be(r[0].dot(r[t]),-1,1));_/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(_=-_);for(let S=1;S<=t;S++)r[S].applyMatrix4(c.makeRotationAxis(s[S],_*S)),a[S].crossVectors(s[S],r[S])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ea=class extends hi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),d=c-this.aX,_=h-this.aY;c=d*u-_*g+this.aX,h=d*g+_*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends ea{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Cd(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,g){let d=(a-r)/h-(o-r)/(h+u)+(o-a)/u,_=(o-a)/u-(c-a)/(u+g)+(c-o)/g;d*=u,_*=u,s(a,o,d,_)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var gp=new W,_p=new W,ku=new Cd,zu=new Cd,Vu=new Cd,fc=class extends hi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(_p.subVectors(s[0],s[1]).add(s[0]),h=_p);let g=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(gp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=gp),this.curveType==="centripetal"||this.curveType==="chordal"){let _=this.curveType==="chordal"?.5:.25,S=Math.pow(h.distanceToSquared(g),_),R=Math.pow(g.distanceToSquared(d),_),m=Math.pow(d.distanceToSquared(u),_);R<1e-4&&(R=1),S<1e-4&&(S=R),m<1e-4&&(m=R),ku.initNonuniformCatmullRom(h.x,g.x,d.x,u.x,S,R,m),zu.initNonuniformCatmullRom(h.y,g.y,d.y,u.y,S,R,m),Vu.initNonuniformCatmullRom(h.z,g.z,d.z,u.z,S,R,m)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(h.x,g.x,d.x,u.x,this.tension),zu.initCatmullRom(h.y,g.y,d.y,u.y,this.tension),Vu.initCatmullRom(h.z,g.z,d.z,u.z,this.tension));return n.set(ku.calc(c),zu.calc(c),Vu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xp(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function J0(i,t){let e=1-i;return e*e*t}function K0(i,t){return 2*(1-i)*i*t}function j0(i,t){return i*i*t}function Ka(i,t,e,n){return J0(i,t)+K0(i,e)+j0(i,n)}function Q0(i,t){let e=1-i;return e*e*e*t}function t_(i,t){let e=1-i;return 3*e*e*i*t}function e_(i,t){return 3*(1-i)*i*i*t}function n_(i,t){return i*i*i*t}function ja(i,t,e,n,s){return Q0(i,t)+t_(i,e)+e_(i,n)+n_(i,s)}var go=class extends hi{constructor(t=new Ot,e=new Ot,n=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ja(t,s.x,r.x,a.x,o.x),ja(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends hi{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ja(t,s.x,r.x,a.x,o.x),ja(t,s.y,r.y,a.y,o.y),ja(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends hi{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends hi{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends hi{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ka(t,s.x,r.x,a.x),Ka(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends hi{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ka(t,s.x,r.x,a.x),Ka(t,s.y,r.y,a.y),Ka(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],g=s[a>s.length-3?s.length-1:a+2];return n.set(xp(o,c.x,h.x,u.x,g.x),xp(o,c.y,h.y,u.y,g.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}},Ju=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:fc,CubicBezierCurve:go,CubicBezierCurve3:pc,EllipseCurve:ea,LineCurve:_o,LineCurve3:mc,QuadraticBezierCurve:xo,QuadraticBezierCurve3:gc,SplineCurve:vo}),_c=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ju[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ju[s.type]().fromJSON(s))}return this}},or=class extends _c{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new _o(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xo(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new go(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s),new Ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new ea(t,e,n,s,r,a,o,c);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},na=class extends or{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new or().fromJSON(s))}return this}};function i_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gm(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=l_(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,g=c;for(let d=e;d<s;d+=e){let _=i[d],S=i[d+1];_<o&&(o=_),S<c&&(c=S),_>u&&(u=_),S>g&&(g=S)}h=Math.max(u-o,g-c),h=h!==0?32767/h:0}return yo(r,a,e,o,c,h,0),a}function gm(i,t,e,n,s){let r;if(s===v_(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vp(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vp(a/n|0,i[a],i[a+1],r);return r&&ia(r,r.next)&&(Mo(r),r=r.next),r}function lr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ia(e,e.next)||ln(e.prev,e,e.next)===0)){if(Mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&f_(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?r_(i,n,s,r):s_(i)){t.push(c.i,i.i,h.i),Mo(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=a_(lr(i),t),yo(i,t,e,n,s,r,2)):a===2&&o_(i,t,e,n,s,r):yo(lr(i),t,e,n,s,r,1);break}}}function s_(i){let t=i.prev,e=i,n=i.next;if(ln(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),g=Math.min(o,c,h),d=Math.max(s,r,a),_=Math.max(o,c,h),S=n.next;for(;S!==t;){if(S.x>=u&&S.x<=d&&S.y>=g&&S.y<=_&&Ya(s,o,r,c,a,h,S.x,S.y)&&ln(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function r_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ln(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,g=r.y,d=a.y,_=Math.min(o,c,h),S=Math.min(u,g,d),R=Math.max(o,c,h),m=Math.max(u,g,d),p=Ku(_,S,t,e,n),F=Ku(R,m,t,e,n),B=i.prevZ,A=i.nextZ;for(;B&&B.z>=p&&A&&A.z<=F;){if(B.x>=_&&B.x<=R&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&Ya(o,u,c,g,h,d,B.x,B.y)&&ln(B.prev,B,B.next)>=0||(B=B.prevZ,A.x>=_&&A.x<=R&&A.y>=S&&A.y<=m&&A!==s&&A!==a&&Ya(o,u,c,g,h,d,A.x,A.y)&&ln(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;B&&B.z>=p;){if(B.x>=_&&B.x<=R&&B.y>=S&&B.y<=m&&B!==s&&B!==a&&Ya(o,u,c,g,h,d,B.x,B.y)&&ln(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;A&&A.z<=F;){if(A.x>=_&&A.x<=R&&A.y>=S&&A.y<=m&&A!==s&&A!==a&&Ya(o,u,c,g,h,d,A.x,A.y)&&ln(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function a_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ia(n,s)&&xm(n,e,e.next,s)&&So(n,s)&&So(s,n)&&(t.push(n.i,e.i,s.i),Mo(e),Mo(e.next),e=i=s),e=e.next}while(e!==i);return lr(e)}function o_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&g_(a,o)){let c=vm(a,o);a=lr(a,a.next),c=lr(c,c.next),yo(a,t,e,n,s,r,0),yo(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function l_(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=gm(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(m_(h))}s.sort(c_);for(let r=0;r<s.length;r++)e=h_(s[r],e);return e}function c_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function h_(i,t){let e=u_(i,t);if(!e)return t;let n=vm(e,i);return lr(n,n.next),lr(e,e.next)}function u_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ia(i,e))return e;do{if(ia(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=n&&g>r&&(r=g,a=e.x<e.next.x?e:e.next,g===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&_m(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let g=Math.abs(s-e.y)/(n-e.x);So(e,i)&&(g<u||g===u&&(e.x>a.x||e.x===a.x&&d_(a,e)))&&(a=e,u=g)}e=e.next}while(e!==o);return a}function d_(i,t){return ln(i.prev,i,t.prev)<0&&ln(t.next,i,i.next)<0}function f_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ku(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,p_(s)}function p_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ku(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function m_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _m(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ya(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&_m(i,t,e,n,s,r,a,o)}function g_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!__(i,t)&&(So(i,t)&&So(t,i)&&x_(i,t)&&(ln(i.prev,i,t.prev)||ln(i,t.prev,t))||ia(i,t)&&ln(i.prev,i,i.next)>0&&ln(t.prev,t,t.next)>0)}function ln(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ia(i,t){return i.x===t.x&&i.y===t.y}function xm(i,t,e,n){let s=Vl(ln(i,t,e)),r=Vl(ln(i,t,n)),a=Vl(ln(e,n,i)),o=Vl(ln(e,n,t));return!!(s!==r&&a!==o||s===0&&zl(i,e,t)||r===0&&zl(i,n,t)||a===0&&zl(e,i,n)||o===0&&zl(e,t,n))}function zl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vl(i){return i>0?1:i<0?-1:0}function __(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function So(i,t){return ln(i.prev,i,i.next)<0?ln(i,t,i.next)>=0&&ln(i,i.prev,t)>=0:ln(i,t,i.prev)<0||ln(i,i.next,t)<0}function x_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vm(i,t){let e=ju(i.i,i.x,i.y),n=ju(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vp(i,t,e,n){let s=ju(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ju(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function v_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Qu=class{static triangulate(t,e,n=2){return i_(t,e,n)}},er=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yp(t),Sp(n,t);let a=t.length;e.forEach(yp);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Sp(n,e[c]);let o=Qu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function yp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var bo=class i extends fn{constructor(t=new na([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new dn(s,3)),this.setAttribute("uv",new dn(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,_=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:_-.1,R=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,F=e.UVGenerator!==void 0?e.UVGenerator:y_,B,A=!1,b,N,$,E;if(p){B=p.getSpacedPoints(u),A=!0,d=!1;let it=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,it),N=new W,$=new W,E=new W}d||(m=0,_=0,S=0,R=0);let D=o.extractPoints(h),V=D.shape,X=D.holes;if(!er.isClockWise(V)){V=V.reverse();for(let it=0,Et=X.length;it<Et;it++){let H=X[it];er.isClockWise(H)&&(X[it]=H.reverse())}}function rt(it){let H=10000000000000001e-36,Tt=it[0];for(let Ut=1;Ut<=it.length;Ut++){let le=Ut%it.length,oe=it[le],ue=oe.x-Tt.x,xe=oe.y-Tt.y,z=ue*ue+xe*xe,Pe=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(Tt.x),Math.abs(Tt.y)),ge=H*Pe*Pe;if(z<=ge){it.splice(le,1),Ut--;continue}Tt=oe}}rt(V),X.forEach(rt);let J=X.length,Q=V;for(let it=0;it<J;it++){let Et=X[it];V=V.concat(Et)}function ct(it,Et,H){return Et||ve("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Et,H)}let ht=V.length;function wt(it,Et,H){let Tt,Ut,le,oe=it.x-Et.x,ue=it.y-Et.y,xe=H.x-it.x,z=H.y-it.y,Pe=oe*oe+ue*ue,ge=oe*z-ue*xe;if(Math.abs(ge)>Number.EPSILON){let P=Math.sqrt(Pe),M=Math.sqrt(xe*xe+z*z),Y=Et.x-ue/P,at=Et.y+oe/P,ft=H.x-z/M,Lt=H.y+xe/M,Nt=((ft-Y)*z-(Lt-at)*xe)/(oe*z-ue*xe);Tt=Y+oe*Nt-it.x,Ut=at+ue*Nt-it.y;let pt=Tt*Tt+Ut*Ut;if(pt<=2)return new Ot(Tt,Ut);le=Math.sqrt(pt/2)}else{let P=!1;oe>Number.EPSILON?xe>Number.EPSILON&&(P=!0):oe<-Number.EPSILON?xe<-Number.EPSILON&&(P=!0):Math.sign(ue)===Math.sign(z)&&(P=!0),P?(Tt=-ue,Ut=oe,le=Math.sqrt(Pe)):(Tt=oe,Ut=ue,le=Math.sqrt(Pe/2))}return new Ot(Tt/le,Ut/le)}let dt=[];for(let it=0,Et=Q.length,H=Et-1,Tt=it+1;it<Et;it++,H++,Tt++)H===Et&&(H=0),Tt===Et&&(Tt=0),dt[it]=wt(Q[it],Q[H],Q[Tt]);let St=[],yt,$t=dt.concat();for(let it=0,Et=J;it<Et;it++){let H=X[it];yt=[];for(let Tt=0,Ut=H.length,le=Ut-1,oe=Tt+1;Tt<Ut;Tt++,le++,oe++)le===Ut&&(le=0),oe===Ut&&(oe=0),yt[Tt]=wt(H[Tt],H[le],H[oe]);St.push(yt),$t=$t.concat(yt)}let Yt;if(m===0)Yt=er.triangulateShape(Q,X);else{let it=[],Et=[];for(let H=0;H<m;H++){let Tt=H/m,Ut=_*Math.cos(Tt*Math.PI/2),le=S*Math.sin(Tt*Math.PI/2)+R;for(let oe=0,ue=Q.length;oe<ue;oe++){let xe=ct(Q[oe],dt[oe],le);Rt(xe.x,xe.y,-Ut),Tt===0&&it.push(xe)}for(let oe=0,ue=J;oe<ue;oe++){let xe=X[oe];yt=St[oe];let z=[];for(let Pe=0,ge=xe.length;Pe<ge;Pe++){let P=ct(xe[Pe],yt[Pe],le);Rt(P.x,P.y,-Ut),Tt===0&&z.push(P)}Tt===0&&Et.push(z)}}Yt=er.triangulateShape(it,Et)}let ze=Yt.length,Ee=S+R;for(let it=0;it<ht;it++){let Et=d?ct(V[it],$t[it],Ee):V[it];A?($.copy(b.normals[0]).multiplyScalar(Et.x),N.copy(b.binormals[0]).multiplyScalar(Et.y),E.copy(B[0]).add($).add(N),Rt(E.x,E.y,E.z)):Rt(Et.x,Et.y,0)}for(let it=1;it<=u;it++)for(let Et=0;Et<ht;Et++){let H=d?ct(V[Et],$t[Et],Ee):V[Et];A?($.copy(b.normals[it]).multiplyScalar(H.x),N.copy(b.binormals[it]).multiplyScalar(H.y),E.copy(B[it]).add($).add(N),Rt(E.x,E.y,E.z)):Rt(H.x,H.y,g/u*it)}for(let it=m-1;it>=0;it--){let Et=it/m,H=_*Math.cos(Et*Math.PI/2),Tt=S*Math.sin(Et*Math.PI/2)+R;for(let Ut=0,le=Q.length;Ut<le;Ut++){let oe=ct(Q[Ut],dt[Ut],Tt);Rt(oe.x,oe.y,g+H)}for(let Ut=0,le=X.length;Ut<le;Ut++){let oe=X[Ut];yt=St[Ut];for(let ue=0,xe=oe.length;ue<xe;ue++){let z=ct(oe[ue],yt[ue],Tt);A?Rt(z.x,z.y+B[u-1].y,B[u-1].x+H):Rt(z.x,z.y,g+H)}}}Ne(),mt();function Ne(){let it=s.length/3;if(d){let Et=0,H=ht*Et;for(let Tt=0;Tt<ze;Tt++){let Ut=Yt[Tt];ee(Ut[2]+H,Ut[1]+H,Ut[0]+H)}Et=u+m*2,H=ht*Et;for(let Tt=0;Tt<ze;Tt++){let Ut=Yt[Tt];ee(Ut[0]+H,Ut[1]+H,Ut[2]+H)}}else{for(let Et=0;Et<ze;Et++){let H=Yt[Et];ee(H[2],H[1],H[0])}for(let Et=0;Et<ze;Et++){let H=Yt[Et];ee(H[0]+ht*u,H[1]+ht*u,H[2]+ht*u)}}n.addGroup(it,s.length/3-it,0)}function mt(){let it=s.length/3,Et=0;xt(Q,Et),Et+=Q.length;for(let H=0,Tt=X.length;H<Tt;H++){let Ut=X[H];xt(Ut,Et),Et+=Ut.length}n.addGroup(it,s.length/3-it,1)}function xt(it,Et){let H=it.length;for(;--H>=0;){let Tt=H,Ut=H-1;Ut<0&&(Ut=it.length-1);for(let le=0,oe=u+m*2;le<oe;le++){let ue=ht*le,xe=ht*(le+1),z=Et+Tt+ue,Pe=Et+Ut+ue,ge=Et+Ut+xe,P=Et+Tt+xe;Xt(z,Pe,ge,P)}}}function Rt(it,Et,H){c.push(it),c.push(Et),c.push(H)}function ee(it,Et,H){ce(it),ce(Et),ce(H);let Tt=s.length/3,Ut=F.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);ne(Ut[0]),ne(Ut[1]),ne(Ut[2])}function Xt(it,Et,H,Tt){ce(it),ce(Et),ce(Tt),ce(Et),ce(H),ce(Tt);let Ut=s.length/3,le=F.generateSideWallUV(n,s,Ut-6,Ut-3,Ut-2,Ut-1);ne(le[0]),ne(le[1]),ne(le[3]),ne(le[1]),ne(le[2]),ne(le[3])}function ce(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function ne(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return S_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ju[s.type]().fromJSON(s)),new i(n,t.options)}},y_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new Ot(r,a),new Ot(o,c),new Ot(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],g=t[n*3+2],d=t[s*3],_=t[s*3+1],S=t[s*3+2],R=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Ot(a,1-c),new Ot(h,1-g),new Ot(d,1-S),new Ot(R,1-p)]:[new Ot(o,1-c),new Ot(u,1-g),new Ot(_,1-S),new Ot(m,1-p)]}};function S_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var wo=class i extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,g=t/o,d=e/c,_=[],S=[],R=[],m=[];for(let p=0;p<u;p++){let F=p*d-a;for(let B=0;B<h;B++){let A=B*g-r;S.push(A,-F,0),R.push(0,0,1),m.push(B/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let F=0;F<o;F++){let B=F+h*p,A=F+h*(p+1),b=F+1+h*(p+1),N=F+1+h*p;_.push(B,A,N),_.push(A,b,N)}this.setIndex(_),this.setAttribute("position",new dn(S,3)),this.setAttribute("normal",new dn(R,3)),this.setAttribute("uv",new dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Eo=class extends fn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new W,r=new W;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){let g=c[h],d=g.start,_=g.count;for(let S=d,R=d+_;S<R;S+=3)for(let m=0;m<3;m++){let p=o.getX(S+m),F=o.getX(S+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,F),Mp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let h=0;h<3;h++){let u=3*o+h,g=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,g),Mp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new dn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Mp(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function ur(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bp(s))s.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function $n(i){let t={};for(let e=0;e<i.length;e++){let n=ur(i[e]);for(let s in n)t[s]=n[s]}return t}function bp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function M_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}var Go={clone:ur,merge:$n},b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=M_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xc=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var To=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=Nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vc=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Cs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qu:r=t,o=2*e-n;break;case Yu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qu:a=t,c=2*n-e;break;case Yu:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,_=this._weightNext,S=(n-e)/(s-e),R=S*S,m=R*S,p=-d*m+2*d*R-d*S,F=(1+d)*m+(-1.5-2*d)*R+(-.5+d)*S+1,B=(-1-_)*m+(1.5+_)*R+.5*S,A=_*m-_*R;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+F*a[h+b]+B*a[c+b]+A*a[g+b];return r}},Mc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),g=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*g+a[c+d]*u;return r}},bc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wc=class extends Cs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,g=this.outTangents;if(!u||!g){let S=(n-e)/(s-e),R=1-S;for(let m=0;m!==o;++m)r[m]=a[h+m]*R+a[c+m]*S;return r}let d=o*2,_=t-1;for(let S=0;S!==o;++S){let R=a[h+S],m=a[c+S],p=_*d+S*2,F=g[p],B=g[p+1],A=t*d+S*2,b=u[A],N=u[A+1],$=T_(n,e,F,b,s);r[S]=ym($,R,B,N,m)}return r}};function ym(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function E_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function T_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ym(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=E_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ui=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Hu(t.settings)&&(n.settings={inTangents:zr(t.settings.inTangents,Array),outTangents:zr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qa:e=this.InterpolantFactoryMethodDiscrete;break;case nc:e=this.InterpolantFactoryMethodLinear;break;case Wl:e=this.InterpolantFactoryMethodSmooth;break;case Wu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Hu(this.settings)&&(wp(this.settings.inTangents,t),wp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ve("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ve("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ve("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){ve("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&p0(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){ve("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let g=o*n,d=g-n,_=g+n;for(let S=0;S!==n;++S){let R=e[g+S];if(R!==e[d+S]||R!==e[_+S]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let g=o*n,d=a*n;for(let _=0;_!==n;++_)e[d+_]=e[g+_]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Hu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=nc;var Rs=class extends ui{constructor(t,e,n){super(t,e,n)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Qa;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Ec.prototype.ValueTypeName="color";var Tc=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Tc.prototype.ValueTypeName="number";var Ac=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)$i.slerpFlat(r,0,a,h-o,a,h,c);return r}},Ao=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends ui{constructor(t,e,n){super(t,e,n)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Qa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Cc.prototype.ValueTypeName="vector";var Rc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,d=h.length;g<d;g+=2){let _=h[g],S=h[g+1];if(_.global&&(_.lastIndex=0),_.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sm=new Rc,Ic=class{constructor(t){this.manager=t!==void 0?t:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ro=class extends Co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},$u=new Ve,Ep=new W,Tp=new W,Pc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ep.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ep),Tp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){$u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix($u,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===qr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply($u)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hl=new W,$l=new $i,Bi=new W,Io=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hl,$l,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,$l,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hl,$l,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,$l,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new W,Ap=new Ot,Cp=new Ot,Hn=class extends Io{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,e){return this.getViewBounds(t,Ap,Cp),e.subVectors(Cp,Ap)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var sa=class extends Io{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},td=class extends Pc{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new td}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Lo=class extends fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Vr=-90,Hr=1,Lc=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(Vr,Hr,t,e);s.layers=this.layers,this.add(s);let r=new Hn(Vr,Hr,t,e);r.layers=this.layers,this.add(r);let a=new Hn(Vr,Hr,t,e);a.layers=this.layers,this.add(a);let o=new Hn(Vr,Hr,t,e);o.layers=this.layers,this.add(o);let c=new Hn(Vr,Hr,t,e);c.layers=this.layers,this.add(c);let h=new Hn(Vr,Hr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=R,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(g,d,_),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Dc=class extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Id="\\[\\]\\.:\\/",A_=new RegExp("["+Id+"]","g"),Pd="[^"+Id+"]",C_="[^"+Id.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",Pd),I_=/(WCOD+)?/.source.replace("WCOD",C_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),D_=new RegExp("^"+R_+I_+P_+L_+"$"),N_=["material","materials","bones","map"],ed=class{constructor(t,e,n){let s=n||sn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},sn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(t){let e=D_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ve("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=ed;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qM=new Float32Array(1);var Ps=class extends ac{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Rp=new Ve,Do=class{constructor(t,e,n=0,s=1/0){this.ray=new ir(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ve("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rp),this}intersectObject(t,e=!0,n=[]){return nd(t,this,n,e),n.sort(Ip),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nd(t[s],this,n,e);return n.sort(Ip),n}};function Ip(i,t){return i.distance-t.distance}function nd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)nd(r[a],t,e,!0)}}var id=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Pp=new W,Gl=new W,$r=new W,Gr=new W,Gu=new W,U_=new W,F_=new W,No=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Pp.subVectors(t,this.start),Gl.subVectors(this.end,this.start);let n=Gl.dot(Gl);if(n===0)return 0;let r=Gl.dot(Pp)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=U_,n=F_){let s=10000000000000001e-32,r,a,o=this.start,c=t.start,h=this.end,u=t.end;$r.subVectors(h,o),Gr.subVectors(u,c),Gu.subVectors(o,c);let g=$r.dot($r),d=Gr.dot(Gr),_=Gr.dot(Gu);if(g<=s&&d<=s)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(g<=s)r=0,a=_/d,a=be(a,0,1);else{let S=$r.dot(Gu);if(d<=s)a=0,r=be(-S/g,0,1);else{let R=$r.dot(Gr),m=g*d-R*R;m!==0?r=be((R*_-S*d)/m,0,1):r=0,a=(R*r+_)/d,a<0?(a=0,r=be(-S/g,0,1)):a>1&&(a=1,r=be((R-S)/g,0,1))}}return e.copy(o).addScaledVector($r,r),n.copy(c).addScaledVector(Gr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ld(i,t,e,n){let s=O_(n);switch(e){case Md:return i*t;case Vc:return i*t/s.components*s.byteLength;case Hc:return i*t/s.components*s.byteLength;case Fs:return i*t*2/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case bd:return i*t*3/s.components*s.byteLength;case vi:return i*t*4/s.components*s.byteLength;case Gc:return i*t*4/s.components*s.byteLength;case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(t,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(t,8)/2;case Zc:case Jc:case jc:case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Ho:case th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ah:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mh:case gh:case _h:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xh:case vh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case yh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O_(i){switch(i){case si:case xd:return{byteLength:1,components:1};case oa:case vd:case Di:return{byteLength:2,components:1};case kc:case zc:return{byteLength:2,components:4};case Li:case Bc:case xi:return{byteLength:4,components:1};case yd:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $m(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function k_(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,g=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,u),o.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,h){let u=c.array,g=c.updateRanges;if(i.bindBuffer(h,o),g.length===0)i.bufferSubData(h,0,u);else{g.sort((_,S)=>_.start-S.start);let d=0;for(let _=1;_<g.length;_++){let S=g[d],R=g[_];R.start<=S.start+S.count+1?S.count=Math.max(S.count,R.start+R.count-S.start):(++d,g[d]=R)}g.length=d+1;for(let _=0,S=g.length;_<S;_++){let R=g[_];i.bufferSubData(h,R.start*u.BYTES_PER_ELEMENT,u,R.start,R.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V_=`#ifdef USE_ALPHAHASH
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
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X_=`#ifdef USE_AOMAP
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
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y_=`#ifdef USE_BATCHING
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
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
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
#endif`,tx=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Bx=`uniform sampler2D dfgLUT;
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
}`,kx=`
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jx=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nv=`#ifdef USE_MORPHTARGETS
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
#endif`,iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cv=`#ifdef USE_NORMALMAP
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
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ev=`float getShadowMask() {
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
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Av=`#ifdef USE_SKINNING
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
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Uv=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vv=`uniform sampler2D t2D;
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`#include <common>
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
}`,qv=`#if DEPTH_PACKING == 3200
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
}`,Yv=`#define DISTANCE
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
}`,Zv=`#define DISTANCE
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`uniform float scale;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ey=`uniform vec3 diffuse;
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define MATCAP
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
}`,ry=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,oy=`#define NORMAL
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
}`,ly=`#define PHONG
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
}`,cy=`#define PHONG
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
}`,hy=`#define STANDARD
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
}`,uy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,fy=`#define TOON
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
}`,py=`uniform float size;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,_y=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,vy=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:z_,alphahash_pars_fragment:V_,alphamap_fragment:H_,alphamap_pars_fragment:$_,alphatest_fragment:G_,alphatest_pars_fragment:W_,aomap_fragment:X_,aomap_pars_fragment:q_,batching_pars_vertex:Y_,batching_vertex:Z_,begin_vertex:J_,beginnormal_vertex:K_,bsdfs:j_,iridescence_fragment:Q_,bumpmap_pars_fragment:tx,clipping_planes_fragment:ex,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ax,color_pars_vertex:ox,color_vertex:lx,common:cx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:ux,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:_x,envmap_fragment:xx,envmap_common_pars_fragment:vx,envmap_pars_fragment:yx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Lx,envmap_vertex:Mx,fog_vertex:bx,fog_pars_vertex:wx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Cx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Px,lights_toon_fragment:Dx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Bx,lights_fragment_begin:kx,lights_fragment_maps:zx,lights_fragment_end:Vx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:Yx,map_particle_fragment:Zx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Qx,morphcolor_vertex:tv,morphnormal_vertex:ev,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:sv,normal_fragment_maps:rv,normal_pars_fragment:av,normal_pars_vertex:ov,normal_vertex:lv,normalmap_pars_fragment:cv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:uv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:fv,opaque_fragment:pv,packing:mv,premultiplied_alpha_fragment:gv,project_vertex:_v,dithering_fragment:xv,dithering_pars_fragment:vv,roughnessmap_fragment:yv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:bv,shadowmap_vertex:wv,shadowmask_pars_fragment:Ev,skinbase_vertex:Tv,skinning_pars_vertex:Av,skinning_vertex:Cv,skinnormal_vertex:Rv,specularmap_fragment:Iv,specularmap_pars_fragment:Pv,tonemapping_fragment:Lv,tonemapping_pars_fragment:Dv,transmission_fragment:Nv,transmission_pars_fragment:Uv,uv_pars_fragment:Fv,uv_pars_vertex:Ov,uv_vertex:Bv,worldpos_vertex:kv,background_vert:zv,background_frag:Vv,backgroundCube_vert:Hv,backgroundCube_frag:$v,cube_vert:Gv,cube_frag:Wv,depth_vert:Xv,depth_frag:qv,distance_vert:Yv,distance_frag:Zv,equirect_vert:Jv,equirect_frag:Kv,linedashed_vert:jv,linedashed_frag:Qv,meshbasic_vert:ty,meshbasic_frag:ey,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:sy,meshmatcap_frag:ry,meshnormal_vert:ay,meshnormal_frag:oy,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:hy,meshphysical_frag:uy,meshtoon_vert:dy,meshtoon_frag:fy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:_y,sprite_vert:xy,sprite_frag:vy},zt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Jn={basic:{uniforms:$n([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:$n([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:$n([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:$n([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:$n([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:$n([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:$n([zt.points,zt.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:$n([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:$n([zt.common,zt.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:$n([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:$n([zt.sprite,zt.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:$n([zt.common,zt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:$n([zt.lights,zt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Jn.physical={uniforms:$n([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var wh={r:0,b:0,g:0},yy=new Ve,Gm=new Me;Gm.set(-1,0,0,0,1,0,0,0,1);function Sy(i,t,e,n,s,r){let a=new fe(0),o=s===!0?0:1,c,h,u=null,g=0,d=null;function _(F){let B=F.isScene===!0?F.background:null;if(B&&B.isTexture){let A=F.backgroundBlurriness>0;B=t.get(B,A)}return B}function S(F){let B=!1,A=_(F);A===null?m(a,o):A&&A.isColor&&(m(A,1),B=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(F,B){let A=_(B);A&&(A.isCubeTexture||A.mapping===Fo)?(h===void 0&&(h=new Rn(new ta(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ur(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,N,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(B.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Gm),h.material.toneMapped=Fe.getTransfer(A.colorSpace)!==Ge,(u!==A||g!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,g=A.version,d=i.toneMapping),h.layers.enableAll(),F.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Rn(new wo(2,2),new In({name:"BackgroundMaterial",uniforms:ur(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=Fe.getTransfer(A.colorSpace)!==Ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||g!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,g=A.version,d=i.toneMapping),c.layers.enableAll(),F.unshift(c,c.geometry,c.material,0,0,null))}function m(F,B){F.getRGB(wh,Rd(i)),e.buffers.color.setClear(wh.r,wh.g,wh.b,B,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(F,B=1){a.set(F),o=B,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(F){o=F,m(a,o)},render:S,addToRenderList:R,dispose:p}}function My(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(X,nt,rt,J,Q){let ct=!1,ht=g(X,J,rt,nt);r!==ht&&(r=ht,h(r.object)),ct=_(X,J,rt,Q),ct&&S(X,J,rt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,A(X,nt,rt,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(X){return i.bindVertexArray(X)}function u(X){return i.deleteVertexArray(X)}function g(X,nt,rt,J){let Q=J.wireframe===!0,ct=n[nt.id];ct===void 0&&(ct={},n[nt.id]=ct);let ht=X.isInstancedMesh===!0?X.id:0,wt=ct[ht];wt===void 0&&(wt={},ct[ht]=wt);let dt=wt[rt.id];dt===void 0&&(dt={},wt[rt.id]=dt);let St=dt[Q];return St===void 0&&(St=d(c()),dt[Q]=St),St}function d(X){let nt=[],rt=[],J=[];for(let Q=0;Q<e;Q++)nt[Q]=0,rt[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:rt,attributeDivisors:J,object:X,attributes:{},index:null}}function _(X,nt,rt,J){let Q=r.attributes,ct=nt.attributes,ht=0,wt=rt.getAttributes();for(let dt in wt)if(wt[dt].location>=0){let yt=Q[dt],$t=ct[dt];if($t===void 0&&(dt==="instanceMatrix"&&X.instanceMatrix&&($t=X.instanceMatrix),dt==="instanceColor"&&X.instanceColor&&($t=X.instanceColor)),yt===void 0||yt.attribute!==$t||$t&&yt.data!==$t.data)return!0;ht++}return r.attributesNum!==ht||r.index!==J}function S(X,nt,rt,J){let Q={},ct=nt.attributes,ht=0,wt=rt.getAttributes();for(let dt in wt)if(wt[dt].location>=0){let yt=ct[dt];yt===void 0&&(dt==="instanceMatrix"&&X.instanceMatrix&&(yt=X.instanceMatrix),dt==="instanceColor"&&X.instanceColor&&(yt=X.instanceColor));let $t={};$t.attribute=yt,yt&&yt.data&&($t.data=yt.data),Q[dt]=$t,ht++}r.attributes=Q,r.attributesNum=ht,r.index=J}function R(){let X=r.newAttributes;for(let nt=0,rt=X.length;nt<rt;nt++)X[nt]=0}function m(X){p(X,0)}function p(X,nt){let rt=r.newAttributes,J=r.enabledAttributes,Q=r.attributeDivisors;rt[X]=1,J[X]===0&&(i.enableVertexAttribArray(X),J[X]=1),Q[X]!==nt&&(i.vertexAttribDivisor(X,nt),Q[X]=nt)}function F(){let X=r.newAttributes,nt=r.enabledAttributes;for(let rt=0,J=nt.length;rt<J;rt++)nt[rt]!==X[rt]&&(i.disableVertexAttribArray(rt),nt[rt]=0)}function B(X,nt,rt,J,Q,ct,ht){ht===!0?i.vertexAttribIPointer(X,nt,rt,Q,ct):i.vertexAttribPointer(X,nt,rt,J,Q,ct)}function A(X,nt,rt,J){R();let Q=J.attributes,ct=rt.getAttributes(),ht=nt.defaultAttributeValues;for(let wt in ct){let dt=ct[wt];if(dt.location>=0){let St=Q[wt];if(St===void 0&&(wt==="instanceMatrix"&&X.instanceMatrix&&(St=X.instanceMatrix),wt==="instanceColor"&&X.instanceColor&&(St=X.instanceColor)),St!==void 0){let yt=St.normalized,$t=St.itemSize,Yt=t.get(St);if(Yt===void 0)continue;let ze=Yt.buffer,Ee=Yt.type,Ne=Yt.bytesPerElement,mt=Ee===i.INT||Ee===i.UNSIGNED_INT||St.gpuType===Bc;if(St.isInterleavedBufferAttribute){let xt=St.data,Rt=xt.stride,ee=St.offset;if(xt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<dt.locationSize;Xt++)p(dt.location+Xt,xt.meshPerAttribute);X.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Xt=0;Xt<dt.locationSize;Xt++)m(dt.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Xt=0;Xt<dt.locationSize;Xt++)B(dt.location+Xt,$t/dt.locationSize,Ee,yt,Rt*Ne,(ee+$t/dt.locationSize*Xt)*Ne,mt)}else{if(St.isInstancedBufferAttribute){for(let xt=0;xt<dt.locationSize;xt++)p(dt.location+xt,St.meshPerAttribute);X.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let xt=0;xt<dt.locationSize;xt++)m(dt.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let xt=0;xt<dt.locationSize;xt++)B(dt.location+xt,$t/dt.locationSize,Ee,yt,$t*Ne,$t/dt.locationSize*xt*Ne,mt)}}else if(ht!==void 0){let yt=ht[wt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(dt.location,yt);break;case 3:i.vertexAttrib3fv(dt.location,yt);break;case 4:i.vertexAttrib4fv(dt.location,yt);break;default:i.vertexAttrib1fv(dt.location,yt)}}}}F()}function b(){D();for(let X in n){let nt=n[X];for(let rt in nt){let J=nt[rt];for(let Q in J){let ct=J[Q];for(let ht in ct)u(ct[ht].object),delete ct[ht];delete J[Q]}}delete n[X]}}function N(X){if(n[X.id]===void 0)return;let nt=n[X.id];for(let rt in nt){let J=nt[rt];for(let Q in J){let ct=J[Q];for(let ht in ct)u(ct[ht].object),delete ct[ht];delete J[Q]}}delete n[X.id]}function $(X){for(let nt in n){let rt=n[nt];for(let J in rt){let Q=rt[J];if(Q[X.id]===void 0)continue;let ct=Q[X.id];for(let ht in ct)u(ct[ht].object),delete ct[ht];delete Q[X.id]}}}function E(X){for(let nt in n){let rt=n[nt],J=X.isInstancedMesh===!0?X.id:0,Q=rt[J];if(Q!==void 0){for(let ct in Q){let ht=Q[ct];for(let wt in ht)u(ht[wt].object),delete ht[wt];delete Q[ct]}delete rt[J],Object.keys(rt).length===0&&delete n[nt]}}}function D(){V(),a=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:V,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:$,initAttributes:R,enableAttribute:m,disableUnusedAttributes:F}}function by(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let $=t.get("EXT_texture_filter_anisotropic");s=i.getParameter($.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a($){return!($!==vi&&n.convert($)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o($){let E=$===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!($!==si&&$!==xi&&!E&&n.convert($)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c($){if($==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";$="mediump"}return $==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(me("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:S,maxTextureSize:R,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:F,maxVaryings:B,maxFragmentUniforms:A,maxSamples:b,samples:N}}function Ey(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ti,o=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let _=g.length!==0||d||n!==0||s;return s=d,n=g.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=u(g,d,0)},this.setState=function(g,d,_){let S=g.clippingPlanes,R=g.clipIntersection,m=g.clipShadows,p=i.get(g);if(!s||S===null||S.length===0||r&&!m)r?u(null):h();else{let F=r?0:n,B=F*4,A=p.clippingState||null;c.value=A,A=u(S,d,B,_);for(let b=0;b!==B;++b)A[b]=e[b];p.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(g,d,_,S){let R=g!==null?g.length:0,m=null;if(R!==0){if(m=c.value,S!==!0||m===null){let p=_+R*4,F=d.matrixWorldInverse;o.getNormalMatrix(F),(m===null||m.length<p)&&(m=new Float32Array(p));for(let B=0,A=_;B!==R;++B,A+=4)a.copy(g[B]).applyMatrix4(F,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,m}}var ha=4,Ty=6,Ay=20,Cy=256,Wo=new sa,Mm=new fe,Dd=null,Nd=0,Ud=0,Fd=!1,Ry=new W,dr=new W,Th=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ry}=r;Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Nd,Ud),this._renderer.xr.enabled=Fd,t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Di,format:vi,colorSpace:to,depthBuffer:!1},s=bm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Iy(r)),this._blurMaterial=Ly(r,t,e),this._ggxMaterial=Py(r,t,e)}return s}_compileMaterial(t){let e=new Rn(new fn,t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s,r){let c=new Hn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,_=g.toneMapping;g.getClearColor(Mm),g.toneMapping=Pi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new ta,new sr({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));let R=this._backgroundBox,m=R.material,p=!1,F=t.background;F?F.isColor&&(m.color.copy(F),t.background=null,p=!0):(m.color.copy(Mm),p=!0);for(let B=0;B<6;B++){let A=B%3;A===0?(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[B],r.y,r.z)):A===1?(c.up.set(0,0,h[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[B],r.z)):(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[B]));let b=this._cubeSize;ca(s,A*b,B>2?b:0,b,b),g.setRenderTarget(s),p&&g.render(R,c),g.render(t,c)}g.toneMapping=_,g.autoClear=d,t.background=F}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ds||t.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ca(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-u*u),d=h*1.25,_=g*d,{_lodMax:S}=this,R=this._sizeLods[n],m=3*R*(n>S-ha?n-S+ha:0),p=4*(this._cubeSize-R);c.envMap.value=t.texture,c.roughness.value=_,c.mipInt.value=S-e,ca(r,m,p,3*R,2*R),s.setRenderTarget(r),s.render(o,Wo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,ca(t,m,p,3*R,2*R),s.setRenderTarget(t),s.render(o,Wo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],g=3*u*(s>this._lodMax-ha?s-this._lodMax+ha:0),d=4*(this._cubeSize-u);ca(e,g,d,3*u,2*u),a.setRenderTarget(e),a.render(c,Wo)}};function Iy(i){let t=[],e=[],n=i,s=i-ha+1+Ty;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,u=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,d=6,_=3,S=new Float32Array(_*d*g),R=new Float32Array(_*d*g);for(let p=0;p<g;p++){let F=p%3*2/3-1,B=p>2?0:-1,A=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];S.set(A,_*d*p);for(let b=0;b<d;b++){let N=u[b*2]*2-1,$=u[b*2+1]*2-1;p===0?dr.set(1,$,N):p===1?dr.set(-N,1,-$):p===2?dr.set(-N,$,1):p===3?dr.set(-1,$,-N):p===4?dr.set(-N,-1,$):dr.set(N,$,-1),dr.toArray(R,(p*d+b)*_)}}let m=new fn;m.setAttribute("position",new Je(S,_)),m.setAttribute("outputDirection",new Je(R,_)),e.push(new Rn(m,null)),n>ha&&n--}return{lodMeshes:e,sizeLods:t}}function bm(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Py(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ly(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Ay,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function wm(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Em(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ah=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ta(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Xi});r.uniforms.tEquirect.value=e;let a=new Rn(s,r),o=e.minFilter;return e.minFilter===Ns&&(e.minFilter=Nn),new Lc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Dy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,_=!1){return d==null?null:_?a(d):r(d)}function r(d){if(d&&d.isTexture){let _=d.mapping;if(_===Uc||_===Fc)if(t.has(d)){let S=t.get(d).texture;return o(S,d.mapping)}else{let S=d.image;if(S&&S.height>0){let R=new Ah(S.height);return R.fromEquirectangularTexture(i,d),t.set(d,R),d.addEventListener("dispose",h),o(R.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let _=d.mapping,S=_===Uc||_===Fc,R=_===Ds||_===hr;if(S||R){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Th(i)),m=S?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let F=d.image;return S&&F&&F.height>0||R&&F&&c(F)?(n===null&&(n=new Th(i)),m=S?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,_){return _===Uc?d.mapping=Ds:_===Fc&&(d.mapping=hr),d}function c(d){let _=0,S=6;for(let R=0;R<S;R++)d[R]!==void 0&&_++;return _===S}function h(d){let _=d.target;_.removeEventListener("dispose",h);let S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function u(d){let _=d.target;_.removeEventListener("dispose",u);let S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Ny(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function Uy(i,t,e,n){let s={},r=new WeakMap;function a(g){let d=g.target;d.index!==null&&t.remove(d.index);for(let S in d.attributes)t.remove(d.attributes[S]);d.removeEventListener("dispose",a),delete s[d.id];let _=r.get(d);_&&(t.remove(_),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(g,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(g){let d=g.attributes;for(let _ in d)t.update(d[_],i.ARRAY_BUFFER)}function h(g){let d=[],_=g.index,S=g.attributes.position,R=0;if(S===void 0)return;if(_!==null){let F=_.array;R=_.version;for(let B=0,A=F.length;B<A;B+=3){let b=F[B+0],N=F[B+1],$=F[B+2];d.push(b,N,N,$,$,b)}}else{let F=S.array;R=S.version;for(let B=0,A=F.length/3-1;B<A;B+=3){let b=B+0,N=B+1,$=B+2;d.push(b,N,N,$,$,b)}}let m=new(S.count>=65535?oo:ao)(d,1);m.version=R;let p=r.get(g);p&&t.remove(p),r.set(g,m)}function u(g){let d=r.get(g);if(d){let _=g.index;_!==null&&d.version<_.version&&h(g)}else h(g);return r.get(g)}return{get:o,update:c,getWireframeAttribute:u}}function Fy(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function c(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function h(g,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,g*a,_),e.update(d,n,_))}function u(g,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,_);let R=0;for(let m=0;m<_;m++)R+=d[m];e.update(R,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function Oy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function By(i,t,e){let n=new WeakMap,s=new We;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==g){let D=function(){$.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,R=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],F=o.morphAttributes.color||[],B=0;_===!0&&(B=1),S===!0&&(B=2),R===!0&&(B=3);let A=o.attributes.position.count*B,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let N=new Float32Array(A*b*4*g),$=new so(N,A,b,g);$.type=xi,$.needsUpdate=!0;let E=B*4;for(let V=0;V<g;V++){let X=m[V],nt=p[V],rt=F[V],J=A*b*4*V;for(let Q=0;Q<X.count;Q++){let ct=Q*E;_===!0&&(s.fromBufferAttribute(X,Q),N[J+ct+0]=s.x,N[J+ct+1]=s.y,N[J+ct+2]=s.z,N[J+ct+3]=0),S===!0&&(s.fromBufferAttribute(nt,Q),N[J+ct+4]=s.x,N[J+ct+5]=s.y,N[J+ct+6]=s.z,N[J+ct+7]=0),R===!0&&(s.fromBufferAttribute(rt,Q),N[J+ct+8]=s.x,N[J+ct+9]=s.y,N[J+ct+10]=s.z,N[J+ct+11]=rt.itemSize===4?s.w:1)}}d={count:g,texture:$,size:new Ot(A,b)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let R=0;R<h.length;R++)_+=h[R];let S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ky(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,g=h.geometry,d=t.get(h,g);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let _=h.skeleton;r.get(_)!==u&&(_.update(),r.set(_,u))}return d}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var zy={[hd]:"LINEAR_TONE_MAPPING",[ud]:"REINHARD_TONE_MAPPING",[dd]:"CINEON_TONE_MAPPING",[fd]:"ACES_FILMIC_TONE_MAPPING",[md]:"AGX_TONE_MAPPING",[gd]:"NEUTRAL_TONE_MAPPING",[pd]:"CUSTOM_TONE_MAPPING"};function Vy(i,t,e,n,s,r){let a=new ni(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new fn;h.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dn([0,2,0,0,2,0],2));let u=new xc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Rn(h,u),d=new sa(-1,1,1,-1,0,1),_=null,S=null,R=!1,m,p=null,F=[],B=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),c!==null&&c.setSize(A,b);for(let N=0;N<F.length;N++){let $=F[N];$.setSize&&$.setSize(A,b)}},this.setEffects=function(A){F=A,B=F.length>0&&F[0].isRenderPass===!0;let b=a.width,N=a.height;F.length>0&&o===null&&(o=new ni(b,N,{type:Di,depthBuffer:!1,stencilBuffer:!1}),c=new ni(b,N,{type:Di,depthBuffer:!1,stencilBuffer:!1}));for(let $=0;$<F.length;$++){let E=F[$];E.setSize&&E.setSize(b,N)}},this.begin=function(A,b){if(R||A.toneMapping===Pi&&F.length===0)return!1;if(p=b,b!==null){let N=b.width,$=b.height;(a.width!==N||a.height!==$)&&this.setSize(N,$)}return B===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Pi,!0},this.hasRenderPass=function(){return B},this.end=function(A,b){A.toneMapping=m,R=!0;let N=a,$=o;for(let E=0;E<F.length;E++){let D=F[E];D.enabled!==!1&&(D.render(A,$,N,b),D.needsSwap!==!1&&(N=$,$=$===o?c:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,u.defines={},Fe.getTransfer(_)===Ge&&(u.defines.SRGB_TRANSFER="");let E=zy[S];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(p),A.render(g,d),p=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Wm=new ei,kd=new As(1,1),Xm=new so,qm=new rc,Ym=new fo,Tm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),Im=new Float32Array(4);function da(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tm[s];if(r===void 0&&(r=new Float32Array(s),Tm[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ih(i,t){let e=Am[t];e===void 0&&(e=new Int32Array(t),Am[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2fv(this.addr,t),Mn(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;i.uniform3fv(this.addr,t),Mn(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4fv(this.addr,t),Mn(e,t)}}function Xy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,n))return;Im.set(n),i.uniformMatrix2fv(this.addr,!1,Im),Mn(e,n)}}function qy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,n))return;Rm.set(n),i.uniformMatrix3fv(this.addr,!1,Rm),Mn(e,n)}}function Yy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,n))return;Cm.set(n),i.uniformMatrix4fv(this.addr,!1,Cm),Mn(e,n)}}function Zy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2iv(this.addr,t),Mn(e,t)}}function Ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;i.uniform3iv(this.addr,t),Mn(e,t)}}function jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4iv(this.addr,t),Mn(e,t)}}function Qy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2uiv(this.addr,t),Mn(e,t)}}function eS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;i.uniform3uiv(this.addr,t),Mn(e,t)}}function nS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4uiv(this.addr,t),Mn(e,t)}}function iS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kd.compareFunction=e.isReversedDepthBuffer()?bh:Mh,r=kd):r=Wm,e.setTexture2D(t||r,s)}function sS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qm,s)}function rS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ym,s)}function aS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xm,s)}function oS(i){switch(i){case 5126:return Hy;case 35664:return $y;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return tS;case 36295:return eS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return aS}}function lS(i,t){i.uniform1fv(this.addr,t)}function cS(i,t){let e=da(t,this.size,2);i.uniform2fv(this.addr,e)}function hS(i,t){let e=da(t,this.size,3);i.uniform3fv(this.addr,e)}function uS(i,t){let e=da(t,this.size,4);i.uniform4fv(this.addr,e)}function dS(i,t){let e=da(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fS(i,t){let e=da(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pS(i,t){let e=da(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mS(i,t){i.uniform1iv(this.addr,t)}function gS(i,t){i.uniform2iv(this.addr,t)}function _S(i,t){i.uniform3iv(this.addr,t)}function xS(i,t){i.uniform4iv(this.addr,t)}function vS(i,t){i.uniform1uiv(this.addr,t)}function yS(i,t){i.uniform2uiv(this.addr,t)}function SS(i,t){i.uniform3uiv(this.addr,t)}function MS(i,t){i.uniform4uiv(this.addr,t)}function bS(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=kd:a=Wm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function wS(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qm,r[a])}function ES(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ym,r[a])}function TS(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xm,r[a])}function AS(i){switch(i){case 5126:return lS;case 35664:return cS;case 35665:return hS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return xS;case 5125:return vS;case 36294:return yS;case 36295:return SS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return TS}}var zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=oS(e.type)}},Vd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=AS(e.type)}},Hd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Od=/(\w+)(\])?(\[|\.)?/g;function Pm(i,t){i.seq.push(t),i.map[t.id]=t}function CS(i,t,e){let n=i.name,s=n.length;for(Od.lastIndex=0;;){let r=Od.exec(n),a=Od.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Pm(e,h===void 0?new zd(o,i,t):new Vd(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new Hd(o),Pm(e,g)),e=g}}}var ua=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);CS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Lm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var RS=37297,IS=0;function PS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Dm=new Me;function LS(i){Fe._getMatrix(Dm,Fe.workingColorSpace,i);let t=`mat3( ${Dm.elements.map(e=>e.toFixed(4))} )`;switch(Fe.getTransfer(i)){case eo:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+PS(i.getShaderSource(t),o)}else return r}function DS(i,t){let e=LS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var NS={[hd]:"Linear",[ud]:"Reinhard",[dd]:"Cineon",[fd]:"ACESFilmic",[md]:"AgX",[gd]:"Neutral",[pd]:"Custom"};function US(i,t){let e=NS[t];return e===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Eh=new W;function FS(){Fe.getLuminanceCoefficients(Eh);let i=Eh.x.toFixed(4),t=Eh.y.toFixed(4),e=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function BS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qo(i){return i!==""}function Um(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(i){return i.replace(zS,HS)}var VS=new Map;function HS(i,t){let e=Ie[t];if(e===void 0){let n=VS.get(t);if(n!==void 0)e=Ie[n],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $d(e)}var $S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(i){return i.replace($S,GS)}function GS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var WS={[Uo]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function XS(i){return WS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qS={[Ds]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function YS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ZS={[hr]:"ENVMAP_MODE_REFRACTION"};function JS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ZS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KS={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[Qp]:"ENVMAP_BLENDING_MIX",[tm]:"ENVMAP_BLENDING_ADD"};function jS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":KS[i.combine]||"ENVMAP_BLENDING_NONE"}function QS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=XS(e),h=YS(e),u=JS(e),g=jS(e),d=QS(e),_=OS(e),S=BS(r),R=s.createProgram(),m,p,F=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(m=[Bm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[Bm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Ie.tonemapping_pars_fragment:"",e.toneMapping!==Pi?US("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,DS("linearToOutputTexel",e.outputColorSpace),FS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),a=$d(a),a=Um(a,e),a=Fm(a,e),o=$d(o),o=Um(o,e),o=Fm(o,e),a=Om(a),o=Om(o),e.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=F+m+a,A=F+p+o,b=Lm(s,s.VERTEX_SHADER,B),N=Lm(s,s.FRAGMENT_SHADER,A);s.attachShader(R,b),s.attachShader(R,N),e.index0AttributeName!==void 0?s.bindAttribLocation(R,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(R,0,"position"),s.linkProgram(R);function $(X){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(R)||"",rt=s.getShaderInfoLog(b)||"",J=s.getShaderInfoLog(N)||"",Q=nt.trim(),ct=rt.trim(),ht=J.trim(),wt=!0,dt=!0;if(s.getProgramParameter(R,s.LINK_STATUS)===!1)if(wt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,R,b,N);else{let St=Nm(s,b,"vertex"),yt=Nm(s,N,"fragment");ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(R,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Q+`
`+St+`
`+yt)}else Q!==""?me("WebGLProgram: Program Info Log:",Q):(ct===""||ht==="")&&(dt=!1);dt&&(X.diagnostics={runnable:wt,programLog:Q,vertexShader:{log:ct,prefix:m},fragmentShader:{log:ht,prefix:p}})}s.deleteShader(b),s.deleteShader(N),E=new ua(s,R),D=kS(s,R)}let E;this.getUniforms=function(){return E===void 0&&$(this),E};let D;this.getAttributes=function(){return D===void 0&&$(this),D};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(R,RS)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(R),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=IS++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=b,this.fragmentShader=N,this}var eM=0,Gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wd(t),e.set(t,n)),n}},Wd=class{constructor(t){this.id=eM++,this.code=t,this.usedTimes=0}};function nM(i){return i===Fs||i===Ho||i===$o}function iM(i,t,e,n,s,r){let a=new Kr,o=new Gd,c=new Set,h=[],u=new Map,g=n.logarithmicDepthBuffer,d=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function R(E,D,V,X,nt,rt){let J=X.fog,Q=nt.geometry,ct=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,wt=t.get(E.envMap||ct,ht),dt=wt&&wt.mapping===Fo?wt.image.height:null,St=_[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&me("WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,$t=yt!==void 0?yt.length:0,Yt=0;Q.morphAttributes.position!==void 0&&(Yt=1),Q.morphAttributes.normal!==void 0&&(Yt=2),Q.morphAttributes.color!==void 0&&(Yt=3);let ze,Ee,Ne,mt;if(St){let Re=Jn[St];ze=Re.vertexShader,Ee=Re.fragmentShader}else{ze=E.vertexShader,Ee=E.fragmentShader;let Re=o.getVertexShaderStage(E),Te=o.getFragmentShaderStage(E);o.update(E,Re,Te),Ne=Re.id,mt=Te.id}let xt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),ee=nt.isInstancedMesh===!0,Xt=nt.isBatchedMesh===!0,ce=!!E.map,ne=!!E.matcap,it=!!wt,Et=!!E.aoMap,H=!!E.lightMap,Tt=!!E.bumpMap&&E.wireframe===!1,Ut=!!E.normalMap,le=!!E.displacementMap,oe=!!E.emissiveMap,ue=!!E.metalnessMap,xe=!!E.roughnessMap,z=E.anisotropy>0,Pe=E.clearcoat>0,ge=E.dispersion>0,P=E.retroreflectivity>0,M=E.iridescence>0,Y=E.sheen>0,at=E.transmission>0,ft=z&&!!E.anisotropyMap,Lt=Pe&&!!E.clearcoatMap,Nt=Pe&&!!E.clearcoatNormalMap,pt=Pe&&!!E.clearcoatRoughnessMap,vt=M&&!!E.iridescenceMap,Ft=M&&!!E.iridescenceThicknessMap,ie=Y&&!!E.sheenColorMap,Gt=Y&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,se=!!E.specularColorMap,he=!!E.specularIntensityMap,Se=at&&!!E.transmissionMap,Z=at&&!!E.thicknessMap,Dt=!!E.gradientMap,gt=!!E.alphaMap,kt=E.alphaTest>0,Wt=!!E.alphaHash,Mt=!!E.extensions,re=Pi;E.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(re=i.toneMapping);let jt={shaderID:St,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:Ee,defines:E.defines,customVertexShaderID:Ne,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&nt._colorsTexture!==null,instancing:ee,instancingColor:ee&&nt.instanceColor!==null,instancingMorph:ee&&nt.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:ne,envMap:it,envMapMode:it&&wt.mapping,envMapCubeUVHeight:dt,aoMap:Et,lightMap:H,bumpMap:Tt,normalMap:Ut,displacementMap:le,emissiveMap:oe,normalMapObjectSpace:Ut&&E.normalMapType===im,normalMapTangentSpace:Ut&&E.normalMapType===Sh,packedNormalMap:Ut&&E.normalMapType===Sh&&nM(E.normalMap.format),metalnessMap:ue,roughnessMap:xe,anisotropy:z,anisotropyMap:ft,clearcoat:Pe,clearcoatMap:Lt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:pt,dispersion:ge,retroreflection:P,iridescence:M,iridescenceMap:vt,iridescenceThicknessMap:Ft,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:se,specularIntensityMap:he,transmission:at,transmissionMap:Se,thicknessMap:Z,gradientMap:Dt,opaque:E.transparent===!1&&E.blending===aa&&E.alphaToCoverage===!1,alphaMap:gt,alphaTest:kt,alphaHash:Wt,combine:E.combine,mapUv:ce&&S(E.map.channel),aoMapUv:Et&&S(E.aoMap.channel),lightMapUv:H&&S(E.lightMap.channel),bumpMapUv:Tt&&S(E.bumpMap.channel),normalMapUv:Ut&&S(E.normalMap.channel),displacementMapUv:le&&S(E.displacementMap.channel),emissiveMapUv:oe&&S(E.emissiveMap.channel),metalnessMapUv:ue&&S(E.metalnessMap.channel),roughnessMapUv:xe&&S(E.roughnessMap.channel),anisotropyMapUv:ft&&S(E.anisotropyMap.channel),clearcoatMapUv:Lt&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&S(E.sheenRoughnessMap.channel),specularMapUv:Bt&&S(E.specularMap.channel),specularColorMapUv:se&&S(E.specularColorMap.channel),specularIntensityMapUv:he&&S(E.specularIntensityMap.channel),transmissionMapUv:Se&&S(E.transmissionMap.channel),thicknessMapUv:Z&&S(E.thicknessMap.channel),alphaMapUv:gt&&S(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ut||z),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!Q.attributes.uv&&(ce||gt),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&Ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Rt,skinning:nt.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:$t,morphTextureStride:Yt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&Fe.getTransfer(E.map.colorSpace)===Ge,decodeVideoTextureEmissive:oe&&E.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(E.emissiveMap.colorSpace)===Ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wi,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Mt&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&E.extensions.multiDraw===!0||Xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function m(E){let D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(let V in E.defines)D.push(V),D.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(p(D,E),F(D,E),D.push(i.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function p(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function F(E,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.retroreflection&&a.enable(24),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),E.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),D.hasPositionAttribute&&a.enable(23),E.push(a.mask)}function B(E){let D=_[E.type],V;if(D){let X=Jn[D];V=Go.clone(X.uniforms)}else V=E.uniforms;return V}function A(E,D){let V=u.get(D);return V!==void 0?++V.usedTimes:(V=new tM(i,D,E,s),h.push(V),u.set(D,V)),V}function b(E){if(--E.usedTimes===0){let D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),u.delete(E.cacheKey),E.destroy()}}function N(E){o.remove(E)}function $(){o.dispose()}return{getParameters:R,getProgramCacheKey:m,getUniforms:B,acquireProgram:A,releaseProgram:b,releaseShaderCache:N,programs:h,dispose:$}}function sM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function o(d,_,S,R,m,p){let F=i[t];return F===void 0?(F={id:d.id,object:d,geometry:_,material:S,materialVariant:a(d),groupOrder:R,renderOrder:d.renderOrder,z:m,group:p},i[t]=F):(F.id=d.id,F.object=d,F.geometry=_,F.material=S,F.materialVariant=a(d),F.groupOrder=R,F.renderOrder=d.renderOrder,F.z=m,F.group=p),t++,F}function c(d,_,S,R,m,p,F){F.reversedDepth===!0&&(m=-m);let B=o(d,_,S,R,m,p);S.transmission>0?n.push(B):S.transparent===!0?s.push(B):e.push(B)}function h(d,_,S,R,m,p){let F=o(d,_,S,R,m,p);S.transmission>0?n.unshift(F):S.transparent===!0?s.unshift(F):e.unshift(F)}function u(d,_){e.length>1&&e.sort(d||rM),n.length>1&&n.sort(_||km),s.length>1&&s.sort(_||km)}function g(){for(let d=t,_=i.length;d<_;d++){let S=i[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:u}}function aM(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new zm,i.set(n,[a])):s>=r.length?(a=new zm,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function oM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new fe};break;case"SpotLight":e={position:new W,direction:new W,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function lM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cM=0;function hM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uM(i){let t=new oM,e=lM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new W);let s=new W,r=new Ve,a=new Ve;function o(h){let u=0,g=0,d=0;for(let nt=0;nt<9;nt++)n.probe[nt].set(0,0,0);let _=0,S=0,R=0,m=0,p=0,F=0,B=0,A=0,b=0,N=0,$=0,E=0,D=0,V=0;h.sort(hM);for(let nt=0,rt=h.length;nt<rt;nt++){let J=h[nt],Q=J.color,ct=J.intensity,ht=J.distance,wt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Fs?wt=J.shadow.map.texture:wt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)u+=Q.r*ct,g+=Q.g*ct,d+=Q.b*ct;else if(J.isLightProbe){for(let dt=0;dt<9;dt++)n.probe[dt].addScaledVector(J.sh.coefficients[dt],ct);V++}else if(J.isSunLight){let dt=t.get(J);if(dt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let St=J.shadow,yt=e.get(J);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize.copy(St.mapSize).multiply(St.getFrameExtents()),n.sunShadow[S]=yt,n.sunShadowMap[S]=wt;let $t=St.getViewportCount();for(let Yt=0;Yt<$t;Yt++)n.sunShadowMatrix[R+Yt]=St.getMatrix(Yt),n.sunShadowCascade[R+Yt]=St._cascadeData[Yt];R+=$t,S++}n.sun[_]=dt,_++}else if(J.isDirectionalLight){let dt=t.get(J);if(dt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let St=J.shadow,yt=e.get(J);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize=St.mapSize,n.directionalShadow[m]=yt,n.directionalShadowMap[m]=wt,n.directionalShadowMatrix[m]=J.shadow.matrix,b++}n.directional[m]=dt,m++}else if(J.isSpotLight){let dt=t.get(J);dt.position.setFromMatrixPosition(J.matrixWorld),dt.color.copy(Q).multiplyScalar(ct),dt.distance=ht,dt.coneCos=Math.cos(J.angle),dt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),dt.decay=J.decay,n.spot[F]=dt;let St=J.shadow;if(J.map&&(n.spotLightMap[E]=J.map,E++,St.updateMatrices(J),J.castShadow&&D++),n.spotLightMatrix[F]=St.matrix,J.castShadow){let yt=e.get(J);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize=St.mapSize,n.spotShadow[F]=yt,n.spotShadowMap[F]=wt,$++}F++}else if(J.isRectAreaLight){let dt=t.get(J);dt.color.copy(Q).multiplyScalar(ct),dt.halfWidth.set(J.width*.5,0,0),dt.halfHeight.set(0,J.height*.5,0),n.rectArea[B]=dt,B++}else if(J.isPointLight){let dt=t.get(J);if(dt.color.copy(J.color).multiplyScalar(J.intensity),dt.distance=J.distance,dt.decay=J.decay,J.castShadow){let St=J.shadow,yt=e.get(J);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize=St.mapSize,yt.shadowCameraNear=St.camera.near,yt.shadowCameraFar=St.camera.far,n.pointShadow[p]=yt,n.pointShadowMap[p]=wt,n.pointShadowMatrix[p]=J.shadow.matrix,N++}n.point[p]=dt,p++}else if(J.isHemisphereLight){let dt=t.get(J);dt.skyColor.copy(J.color).multiplyScalar(ct),dt.groundColor.copy(J.groundColor).multiplyScalar(ct),n.hemi[A]=dt,A++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=d;let X=n.hash;(X.sunLength!==_||X.directionalLength!==m||X.pointLength!==p||X.spotLength!==F||X.rectAreaLength!==B||X.hemiLength!==A||X.numSunShadows!==S||X.numDirectionalShadows!==b||X.numPointShadows!==N||X.numSpotShadows!==$||X.numSpotMaps!==E||X.numLightProbes!==V)&&(n.sun.length=_,n.directional.length=m,n.spot.length=F,n.rectArea.length=B,n.point.length=p,n.hemi.length=A,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=R,n.sunShadowCascade.length=R,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=N,n.pointShadowMap.length=N,n.pointShadowMatrix.length=N,n.spotShadow.length=$,n.spotShadowMap.length=$,n.spotLightMatrix.length=$+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=V,X.sunLength=_,X.directionalLength=m,X.pointLength=p,X.spotLength=F,X.rectAreaLength=B,X.hemiLength=A,X.numSunShadows=S,X.numDirectionalShadows=b,X.numPointShadows=N,X.numSpotShadows=$,X.numSpotMaps=E,X.numLightProbes=V,n.version=cM++)}function c(h,u){let g=0,d=0,_=0,S=0,R=0,m=0,p=u.matrixWorldInverse;for(let F=0,B=h.length;F<B;F++){let A=h[F];if(A.isSunLight){let b=n.sun[g];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),g++}else if(A.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(A.isSpotLight){let b=n.spot[S];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),S++}else if(A.isRectAreaLight){let b=n.rectArea[R];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(A.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),R++}else if(A.isPointLight){let b=n.point[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),_++}else if(A.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Vm(i){let t=new uM(i),e=[],n=[],s=[];function r(d){g.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function h(){t.setup(e)}function u(d){t.setupView(e,d)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function dM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vm(i),t.set(s,[o])):r>=a.length?(o=new Vm(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
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
}`,mM=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],gM=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Hm=new Ve,Xo=new W,Bd=new W;function _M(i,t,e){let n=new Qr,s=new Ot,r=new Ot,a=new We,o=new vc,c=new yc,h={},u=e.maxTextureSize,g={[Ls]:Zn,[Zn]:Ls,[Wi]:Wi},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:fM,fragmentShader:pM}),_=d.clone();_.defines.HORIZONTAL_PASS=1;let S=new fn;S.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new Rn(S,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let p=this.type;this.render=function(N,$,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;this.type===Np&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uo);let D=i.getRenderTarget(),V=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),nt=i.state;nt.setBlending(Xi),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let rt=p!==this.type;rt&&$.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=N.length;J<Q;J++){let ct=N[J],ht=ct.shadow;if(ht===void 0){me("WebGLShadowMap:",ct,"has no shadow.");continue}if(ht.autoUpdate===!1&&ht.needsUpdate===!1)continue;s.copy(ht.mapSize);let wt=ht.getFrameExtents();s.multiply(wt),r.copy(ht.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/wt.x),s.x=r.x*wt.x,ht.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/wt.y),s.y=r.y*wt.y,ht.mapSize.y=r.y));let dt=i.state.buffers.depth.getReversed();if(ht.camera._reversedDepth=dt,ht.map===null||rt===!0){if(ht.map!==null&&(ht.map.depthTexture!==null&&(ht.map.depthTexture.dispose(),ht.map.depthTexture=null),ht.map.dispose()),this.type===ra){if(ct.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ht.map=new ni(s.x,s.y,{format:Fs,type:Di,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),ht.map.texture.name=ct.name+".shadowMap",ht.map.depthTexture=new As(s.x,s.y,xi),ht.map.depthTexture.name=ct.name+".shadowMapDepth",ht.map.depthTexture.format=Vi,ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=An,ht.map.depthTexture.magFilter=An}else ct.isPointLight?(ht.map=new Ah(s.x),ht.map.depthTexture=new uc(s.x,Li)):(ht.map=new ni(s.x,s.y),ht.map.depthTexture=new As(s.x,s.y,Li)),ht.map.depthTexture.name=ct.name+".shadowMap",ht.map.depthTexture.format=Vi,this.type===Uo?(ht.map.depthTexture.compareFunction=dt?bh:Mh,ht.map.depthTexture.minFilter=Nn,ht.map.depthTexture.magFilter=Nn):(ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=An,ht.map.depthTexture.magFilter=An);ht.camera.updateProjectionMatrix()}ht.map.isWebGLCubeRenderTarget!==!0&&(ht.map.width!==s.x||ht.map.height!==s.y)&&ht.map.setSize(s.x,s.y);let St=ht.map.isWebGLCubeRenderTarget?6:ht.getViewportCount();ct.isPointLight!==!0&&ht.updateMatrices(ct,E);for(let yt=0;yt<St;yt++){let $t=ht.getCamera(yt);if(ct.isPointLight){let Yt=ht.camera,ze=ht.matrix,Ee=ct.distance||Yt.far;Ee!==Yt.far&&(Yt.far=Ee,Yt.updateProjectionMatrix()),Xo.setFromMatrixPosition(ct.matrixWorld),Yt.position.copy(Xo),Bd.copy(Yt.position),Bd.add(mM[yt]),Yt.up.copy(gM[yt]),Yt.lookAt(Bd),Yt.updateMatrixWorld(),ze.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Hm.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),ht._frustum.setFromProjectionMatrix(Hm,Yt.coordinateSystem,Yt.reversedDepth)}if(ht.map.isWebGLCubeRenderTarget)i.setRenderTarget(ht.map,yt),i.clear();else{yt===0&&(i.setRenderTarget(ht.map),i.clear());let Yt=ht.getViewport(yt);a.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),nt.viewport(a)}n=ht.getFrustum(yt),A($,E,$t,ct,this.type)}ht.isPointLightShadow!==!0&&this.type===ra&&F(ht,E),ht.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,V,X)};function F(N,$){let E=t.update(R);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null?N.mapPass=new ni(s.x,s.y,{format:Fs,type:Di}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),d.uniforms.shadow_pass.value=N.map.depthTexture,d.uniforms.resolution.value.set(N.map.width,N.map.height),d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect($,null,E,d,R,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect($,null,E,_,R,null)}function B(N,$,E,D){let V=null,X=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)V=X;else if(V=E.isPointLight===!0?c:o,i.localClippingEnabled&&$.clipShadows===!0&&Array.isArray($.clippingPlanes)&&$.clippingPlanes.length!==0||$.displacementMap&&$.displacementScale!==0||$.alphaMap&&$.alphaTest>0||$.map&&$.alphaTest>0||$.alphaToCoverage===!0){let nt=V.uuid,rt=$.uuid,J=h[nt];J===void 0&&(J={},h[nt]=J);let Q=J[rt];Q===void 0&&(Q=V.clone(),J[rt]=Q,$.addEventListener("dispose",b)),V=Q}if(V.visible=$.visible,V.wireframe=$.wireframe,D===ra?V.side=$.shadowSide!==null?$.shadowSide:$.side:V.side=$.shadowSide!==null?$.shadowSide:g[$.side],V.alphaMap=$.alphaMap,V.alphaTest=$.alphaToCoverage===!0?.5:$.alphaTest,V.map=$.map,V.clipShadows=$.clipShadows,V.clippingPlanes=$.clippingPlanes,V.clipIntersection=$.clipIntersection,V.displacementMap=$.displacementMap,V.displacementScale=$.displacementScale,V.displacementBias=$.displacementBias,V.wireframeLinewidth=$.wireframeLinewidth,V.linewidth=$.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let nt=i.properties.get(V);nt.light=E}return V}function A(N,$,E,D,V){if(N.visible===!1)return;if(N.layers.test($.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===ra)&&(!N.frustumCulled||N.intersectsFrustum(n))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);let rt=t.update(N),J=N.material;if(Array.isArray(J)){let Q=rt.groups;for(let ct=0,ht=Q.length;ct<ht;ct++){let wt=Q[ct],dt=J[wt.materialIndex];if(dt&&dt.visible){let St=B(N,dt,D,V);N.onBeforeShadow(i,N,$,E,rt,St,wt),i.renderBufferDirect(E,null,rt,St,N,wt),N.onAfterShadow(i,N,$,E,rt,St,wt)}}}else if(J.visible){let Q=B(N,J,D,V);N.onBeforeShadow(i,N,$,E,rt,Q,null),i.renderBufferDirect(E,null,rt,Q,N,null),N.onAfterShadow(i,N,$,E,rt,Q,null)}}let nt=N.children;for(let rt=0,J=nt.length;rt<J;rt++)A(nt[rt],$,E,D,V)}function b(N){N.target.removeEventListener("dispose",b);for(let E in h){let D=h[E],V=N.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function xM(i,t){function e(){let Z=!1,Dt=new We,gt=null,kt=new We(0,0,0,0);return{setMask:function(Wt){gt!==Wt&&!Z&&(i.colorMask(Wt,Wt,Wt,Wt),gt=Wt)},setLocked:function(Wt){Z=Wt},setClear:function(Wt,Mt,re,jt,Re){Re===!0&&(Wt*=jt,Mt*=jt,re*=jt),Dt.set(Wt,Mt,re,jt),kt.equals(Dt)===!1&&(i.clearColor(Wt,Mt,re,jt),kt.copy(Dt))},reset:function(){Z=!1,gt=null,kt.set(-1,0,0,0)}}}function n(){let Z=!1,Dt=!1,gt=null,kt=null,Wt=null;return{setReversed:function(Mt){if(Dt!==Mt){let re=t.get("EXT_clip_control");Mt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),Dt=Mt;let jt=Wt;Wt=null,this.setClear(jt)}},getReversed:function(){return Dt},setTest:function(Mt){Mt?xt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Mt){gt!==Mt&&!Z&&(i.depthMask(Mt),gt=Mt)},setFunc:function(Mt){if(Dt&&(Mt=pm[Mt]),kt!==Mt){switch(Mt){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case Kl:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}kt=Mt}},setLocked:function(Mt){Z=Mt},setClear:function(Mt){Wt!==Mt&&(Wt=Mt,Dt&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){Z=!1,gt=null,kt=null,Wt=null,Dt=!1}}}function s(){let Z=!1,Dt=null,gt=null,kt=null,Wt=null,Mt=null,re=null,jt=null,Re=null;return{setTest:function(Te){Z||(Te?xt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Te){Dt!==Te&&!Z&&(i.stencilMask(Te),Dt=Te)},setFunc:function(Te,pn,Wn){(gt!==Te||kt!==pn||Wt!==Wn)&&(i.stencilFunc(Te,pn,Wn),gt=Te,kt=pn,Wt=Wn)},setOp:function(Te,pn,Wn){(Mt!==Te||re!==pn||jt!==Wn)&&(i.stencilOp(Te,pn,Wn),Mt=Te,re=pn,jt=Wn)},setLocked:function(Te){Z=Te},setClear:function(Te){Re!==Te&&(i.clearStencil(Te),Re=Te)},reset:function(){Z=!1,Dt=null,gt=null,kt=null,Wt=null,Mt=null,re=null,jt=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},g={},d={},_=new WeakMap,S=[],R=null,m=!1,p=null,F=null,B=null,A=null,b=null,N=null,$=null,E=new fe(0,0,0),D=0,V=!1,X=null,nt=null,rt=null,J=null,Q=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,wt=0,dt=i.getParameter(i.VERSION);dt.indexOf("WebGL")!==-1?(wt=parseFloat(/^WebGL (\d)/.exec(dt)[1]),ht=wt>=1):dt.indexOf("OpenGL ES")!==-1&&(wt=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),ht=wt>=2);let St=null,yt={},$t=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),ze=new We().fromArray($t),Ee=new We().fromArray(Yt);function Ne(Z,Dt,gt,kt){let Wt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(Z,Mt),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<gt;re++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,Wt):i.texImage2D(Dt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Wt);return Mt}let mt={};mt[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(Xr),Tt(!1),Ut(sd),xt(i.CULL_FACE),Et(Xi);function xt(Z){u[Z]!==!0&&(i.enable(Z),u[Z]=!0)}function Rt(Z){u[Z]!==!1&&(i.disable(Z),u[Z]=!1)}function ee(Z,Dt){return d[Z]!==Dt?(i.bindFramebuffer(Z,Dt),d[Z]=Dt,Z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Dt),Z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(Z,Dt){let gt=S,kt=!1;if(Z){gt=_.get(Dt),gt===void 0&&(gt=[],_.set(Dt,gt));let Wt=Z.textures;if(gt.length!==Wt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,re=Wt.length;Mt<re;Mt++)gt[Mt]=i.COLOR_ATTACHMENT0+Mt;gt.length=Wt.length,kt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,kt=!0);kt&&i.drawBuffers(gt)}function ce(Z){return R!==Z?(i.useProgram(Z),R=Z,!0):!1}let ne={[cr]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Op]:i.FUNC_REVERSE_SUBTRACT};ne[Bp]=i.MIN,ne[kp]=i.MAX;let it={[zp]:i.ZERO,[Vp]:i.ONE,[Hp]:i.SRC_COLOR,[ld]:i.SRC_ALPHA,[Yp]:i.SRC_ALPHA_SATURATE,[Xp]:i.DST_COLOR,[Gp]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[cd]:i.ONE_MINUS_SRC_ALPHA,[qp]:i.ONE_MINUS_DST_COLOR,[Wp]:i.ONE_MINUS_DST_ALPHA,[Zp]:i.CONSTANT_COLOR,[Jp]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[jp]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(Z,Dt,gt,kt,Wt,Mt,re,jt,Re,Te){if(Z===Xi){m===!0&&(Rt(i.BLEND),m=!1);return}if(m===!1&&(xt(i.BLEND),m=!0),Z!==Up){if(Z!==p||Te!==V){if((F!==cr||b!==cr)&&(i.blendEquation(i.FUNC_ADD),F=cr,b=cr),Te)switch(Z){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rd:i.blendFunc(i.ONE,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ve("WebGLState: Invalid blending: ",Z);break}else switch(Z){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ad:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case od:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",Z);break}B=null,A=null,N=null,$=null,E.set(0,0,0),D=0,p=Z,V=Te}return}Wt=Wt||Dt,Mt=Mt||gt,re=re||kt,(Dt!==F||Wt!==b)&&(i.blendEquationSeparate(ne[Dt],ne[Wt]),F=Dt,b=Wt),(gt!==B||kt!==A||Mt!==N||re!==$)&&(i.blendFuncSeparate(it[gt],it[kt],it[Mt],it[re]),B=gt,A=kt,N=Mt,$=re),(jt.equals(E)===!1||Re!==D)&&(i.blendColor(jt.r,jt.g,jt.b,Re),E.copy(jt),D=Re),p=Z,V=!1}function H(Z,Dt){Z.side===Wi?Rt(i.CULL_FACE):xt(i.CULL_FACE);let gt=Z.side===Zn;Dt&&(gt=!gt),Tt(gt),Z.blending===aa&&Z.transparent===!1?Et(Xi):Et(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let kt=Z.stencilWrite;o.setTest(kt),kt&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),oe(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(Z){X!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),X=Z)}function Ut(Z){Z!==Lp?(xt(i.CULL_FACE),Z!==nt&&(Z===sd?i.cullFace(i.BACK):Z===Dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),nt=Z}function le(Z){Z!==rt&&(ht&&i.lineWidth(Z),rt=Z)}function oe(Z,Dt,gt){Z?(xt(i.POLYGON_OFFSET_FILL),(J!==Dt||Q!==gt)&&(J=Dt,Q=gt,a.getReversed()&&(Dt=-Dt),i.polygonOffset(Dt,gt))):Rt(i.POLYGON_OFFSET_FILL)}function ue(Z){Z?xt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function xe(Z){Z===void 0&&(Z=i.TEXTURE0+ct-1),St!==Z&&(i.activeTexture(Z),St=Z)}function z(Z,Dt,gt){gt===void 0&&(St===null?gt=i.TEXTURE0+ct-1:gt=St);let kt=yt[gt];kt===void 0&&(kt={type:void 0,texture:void 0},yt[gt]=kt),(kt.type!==Z||kt.texture!==Dt)&&(St!==gt&&(i.activeTexture(gt),St=gt),i.bindTexture(Z,Dt||mt[Z]),kt.type=Z,kt.texture=Dt)}function Pe(){let Z=yt[St];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function M(){try{i.texSubImage2D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function Y(){try{i.texSubImage3D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function Lt(){try{i.texStorage2D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function Nt(){try{i.texStorage3D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function pt(){try{i.texImage2D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function vt(){try{i.texImage3D(...arguments)}catch(Z){ve("WebGLState:",Z)}}function Ft(Z){return g[Z]!==void 0?g[Z]:i.getParameter(Z)}function ie(Z,Dt){g[Z]!==Dt&&(i.pixelStorei(Z,Dt),g[Z]=Dt)}function Gt(Z){ze.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),ze.copy(Z))}function Bt(Z){Ee.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Ee.copy(Z))}function se(Z,Dt){let gt=h.get(Dt);gt===void 0&&(gt=new WeakMap,h.set(Dt,gt));let kt=gt.get(Z);kt===void 0&&(kt=i.getUniformBlockIndex(Dt,Z.name),gt.set(Z,kt))}function he(Z,Dt){let kt=h.get(Dt).get(Z);c.get(Dt)!==kt&&(i.uniformBlockBinding(Dt,kt,Z.__bindingPointIndex),c.set(Dt,kt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},St=null,yt={},d={},_=new WeakMap,S=[],R=null,m=!1,p=null,F=null,B=null,A=null,b=null,N=null,$=null,E=new fe(0,0,0),D=0,V=!1,X=null,nt=null,rt=null,J=null,Q=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Rt,bindFramebuffer:ee,drawBuffers:Xt,useProgram:ce,setBlending:Et,setMaterial:H,setFlipSided:Tt,setCullFace:Ut,setLineWidth:le,setPolygonOffset:oe,setScissorTest:ue,activeTexture:xe,bindTexture:z,unbindTexture:Pe,compressedTexImage2D:ge,compressedTexImage3D:P,texImage2D:pt,texImage3D:vt,pixelStorei:ie,getParameter:Ft,updateUBOMapping:se,uniformBlockBinding:he,texStorage2D:Lt,texStorage3D:Nt,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Gt,viewport:Bt,reset:Se}}function vM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,u=new WeakMap,g=new Set,d,_=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,M){return S?new OffscreenCanvas(P,M):no("canvas")}function m(P,M,Y){let at=1,ft=ge(P);if((ft.width>Y||ft.height>Y)&&(at=Y/Math.max(ft.width,ft.height)),at<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Lt=Math.floor(at*ft.width),Nt=Math.floor(at*ft.height);d===void 0&&(d=R(Lt,Nt));let pt=M?R(Lt,Nt):d;return pt.width=Lt,pt.height=Nt,pt.getContext("2d").drawImage(P,0,0,Lt,Nt),me("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+Lt+"x"+Nt+")."),pt}else return"data"in P&&me("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),P;return P}function p(P){return P.generateMipmaps}function F(P){i.generateMipmap(P)}function B(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(P,M,Y,at,ft,Lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Nt;at&&(Nt=t.get("EXT_texture_norm16"),Nt||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=M;if(M===i.RED&&(Y===i.FLOAT&&(pt=i.R32F),Y===i.HALF_FLOAT&&(pt=i.R16F),Y===i.UNSIGNED_BYTE&&(pt=i.R8),Y===i.UNSIGNED_SHORT&&Nt&&(pt=Nt.R16_EXT),Y===i.SHORT&&Nt&&(pt=Nt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.R8UI),Y===i.UNSIGNED_SHORT&&(pt=i.R16UI),Y===i.UNSIGNED_INT&&(pt=i.R32UI),Y===i.BYTE&&(pt=i.R8I),Y===i.SHORT&&(pt=i.R16I),Y===i.INT&&(pt=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(pt=i.RG32F),Y===i.HALF_FLOAT&&(pt=i.RG16F),Y===i.UNSIGNED_BYTE&&(pt=i.RG8),Y===i.UNSIGNED_SHORT&&Nt&&(pt=Nt.RG16_EXT),Y===i.SHORT&&Nt&&(pt=Nt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(pt=i.RG16UI),Y===i.UNSIGNED_INT&&(pt=i.RG32UI),Y===i.BYTE&&(pt=i.RG8I),Y===i.SHORT&&(pt=i.RG16I),Y===i.INT&&(pt=i.RG32I)),M===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),Y===i.UNSIGNED_INT&&(pt=i.RGB32UI),Y===i.BYTE&&(pt=i.RGB8I),Y===i.SHORT&&(pt=i.RGB16I),Y===i.INT&&(pt=i.RGB32I)),M===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(pt=i.RGBA32UI),Y===i.BYTE&&(pt=i.RGBA8I),Y===i.SHORT&&(pt=i.RGBA16I),Y===i.INT&&(pt=i.RGBA32I)),M===i.RGB&&(Y===i.UNSIGNED_SHORT&&Nt&&(pt=Nt.RGB16_EXT),Y===i.SHORT&&Nt&&(pt=Nt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),M===i.RGBA){let vt=Lt?eo:Fe.getTransfer(ft);Y===i.FLOAT&&(pt=i.RGBA32F),Y===i.HALF_FLOAT&&(pt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(pt=vt===Ge?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Nt&&(pt=Nt.RGBA16_EXT),Y===i.SHORT&&Nt&&(pt=Nt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function b(P,M){let Y;return P?M===null||M===Li||M===la?Y=i.DEPTH24_STENCIL8:M===xi?Y=i.DEPTH32F_STENCIL8:M===oa&&(Y=i.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===la?Y=i.DEPTH_COMPONENT24:M===xi?Y=i.DEPTH_COMPONENT32F:M===oa&&(Y=i.DEPTH_COMPONENT16),Y}function N(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function $(P){let M=P.target;M.removeEventListener("dispose",$),D(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&g.delete(M)}function E(P){let M=P.target;M.removeEventListener("dispose",E),X(M)}function D(P){let M=n.get(P);if(M.__webglInit===void 0)return;let Y=P.source,at=_.get(Y);if(at){let ft=at[M.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&V(P),Object.keys(at).length===0&&_.delete(Y)}n.remove(P)}function V(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let Y=P.source,at=_.get(Y);delete at[M.__cacheKey],a.memory.textures--}function X(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(M.__webglFramebuffer[at]))for(let ft=0;ft<M.__webglFramebuffer[at].length;ft++)i.deleteFramebuffer(M.__webglFramebuffer[at][ft]);else i.deleteFramebuffer(M.__webglFramebuffer[at]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[at])}else{if(Array.isArray(M.__webglFramebuffer))for(let at=0;at<M.__webglFramebuffer.length;at++)i.deleteFramebuffer(M.__webglFramebuffer[at]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let at=0;at<M.__webglColorRenderbuffer.length;at++)M.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[at]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=P.textures;for(let at=0,ft=Y.length;at<ft;at++){let Lt=n.get(Y[at]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(Y[at])}n.remove(P)}let nt=0;function rt(){nt=0}function J(){return nt}function Q(P){nt=P}function ct(){let P=nt;return P>=s.maxTextures&&me("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),nt+=1,P}function ht(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function wt(P,M){let Y=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let at=P.image;if(at===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(Y,P,M);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function dt(P,M){let Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){Rt(Y,P,M);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function St(P,M){let Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){Rt(Y,P,M);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function yt(P,M){let Y=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){ee(Y,P,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}let $t={[tc]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[ec]:i.MIRRORED_REPEAT},Yt={[An]:i.NEAREST,[em]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Oc]:i.LINEAR_MIPMAP_NEAREST,[Ns]:i.LINEAR_MIPMAP_LINEAR},ze={[rm]:i.NEVER,[hm]:i.ALWAYS,[am]:i.LESS,[Mh]:i.LEQUAL,[om]:i.EQUAL,[bh]:i.GEQUAL,[lm]:i.GREATER,[cm]:i.NOTEQUAL};function Ee(P,M){if(M.type===xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Oc||M.magFilter===Oo||M.magFilter===Ns||M.minFilter===Nn||M.minFilter===Oc||M.minFilter===Oo||M.minFilter===Ns)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,$t[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,$t[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,$t[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Yt[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Yt[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Oo&&M.minFilter!==Ns||M.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",$));let at=M.source,ft=_.get(at);ft===void 0&&(ft={},_.set(at,ft));let Lt=ht(M);if(Lt!==P.__cacheKey){ft[Lt]===void 0&&(ft[Lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ft[Lt].usedTimes++;let Nt=ft[P.__cacheKey];Nt!==void 0&&(ft[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&V(M)),P.__cacheKey=Lt,P.__webglTexture=ft[Lt].texture}return Y}function mt(P,M,Y){return Math.floor(Math.floor(P/Y)/M)}function xt(P,M,Y,at){let Lt=P.updateRanges;if(Lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Y,at,M.data);else{Lt.sort((ie,Gt)=>ie.start-Gt.start);let Nt=0;for(let ie=1;ie<Lt.length;ie++){let Gt=Lt[Nt],Bt=Lt[ie],se=Gt.start+Gt.count,he=mt(Bt.start,M.width,4),Se=mt(Gt.start,M.width,4);Bt.start<=se+1&&he===Se&&mt(Bt.start+Bt.count-1,M.width,4)===he?Gt.count=Math.max(Gt.count,Bt.start+Bt.count-Gt.start):(++Nt,Lt[Nt]=Bt)}Lt.length=Nt+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),vt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ie=0,Gt=Lt.length;ie<Gt;ie++){let Bt=Lt[ie],se=Math.floor(Bt.start/4),he=Math.ceil(Bt.count/4),Se=se%M.width,Z=Math.floor(se/M.width),Dt=he,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,Se,Z,Dt,gt,Y,at,M.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function Rt(P,M,Y){let at=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=i.TEXTURE_3D);let ft=Ne(P,M),Lt=M.source;e.bindTexture(at,P.__webglTexture,i.TEXTURE0+Y);let Nt=n.get(Lt);if(Lt.version!==Nt.__version||ft===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let gt=Fe.getPrimaries(Fe.workingColorSpace),kt=M.colorSpace===fs?null:Fe.getPrimaries(M.colorSpace),Wt=M.colorSpace===fs||gt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let vt=m(M.image,!1,s.maxTextureSize);vt=Pe(M,vt);let Ft=r.convert(M.format,M.colorSpace),ie=r.convert(M.type),Gt=A(M.internalFormat,Ft,ie,M.normalized,M.colorSpace,M.isVideoTexture);Ee(at,M);let Bt,se=M.mipmaps,he=M.isVideoTexture!==!0,Se=Nt.__version===void 0||ft===!0,Z=Lt.dataReady,Dt=N(M,vt);if(M.isDepthTexture)Gt=b(M.format===Us,M.type),Se&&(he?e.texStorage2D(i.TEXTURE_2D,1,Gt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,vt.width,vt.height,0,Ft,ie,null));else if(M.isDataTexture)if(se.length>0){he&&Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Gt,se[0].width,se[0].height);for(let gt=0,kt=se.length;gt<kt;gt++)Bt=se[gt],he?Z&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Bt.width,Bt.height,Ft,ie,Bt.data):e.texImage2D(i.TEXTURE_2D,gt,Gt,Bt.width,Bt.height,0,Ft,ie,Bt.data);M.generateMipmaps=!1}else he?(Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Gt,vt.width,vt.height),Z&&xt(M,vt,Ft,ie)):e.texImage2D(i.TEXTURE_2D,0,Gt,vt.width,vt.height,0,Ft,ie,vt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){he&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Gt,se[0].width,se[0].height,vt.depth);for(let gt=0,kt=se.length;gt<kt;gt++)if(Bt=se[gt],M.format!==vi)if(Ft!==null)if(he){if(Z)if(M.layerUpdates.size>0){let Wt=Ld(Bt.width,Bt.height,M.format,M.type);for(let Mt of M.layerUpdates){let re=Bt.data.subarray(Mt*Wt/Bt.data.BYTES_PER_ELEMENT,(Mt+1)*Wt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Mt,Bt.width,Bt.height,1,Ft,re)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Bt.width,Bt.height,vt.depth,Ft,Bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Gt,Bt.width,Bt.height,vt.depth,0,Bt.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Bt.width,Bt.height,vt.depth,Ft,ie,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Gt,Bt.width,Bt.height,vt.depth,0,Ft,ie,Bt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{he&&Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Gt,se[0].width,se[0].height);for(let gt=0,kt=se.length;gt<kt;gt++)Bt=se[gt],M.format!==vi?Ft!==null?he?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Bt.width,Bt.height,Ft,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Gt,Bt.width,Bt.height,0,Bt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Z&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Bt.width,Bt.height,Ft,ie,Bt.data):e.texImage2D(i.TEXTURE_2D,gt,Gt,Bt.width,Bt.height,0,Ft,ie,Bt.data)}else if(M.isDataArrayTexture)if(he){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Gt,vt.width,vt.height,vt.depth),Z)if(M.layerUpdates.size>0){let gt=Ld(vt.width,vt.height,M.format,M.type);for(let kt of M.layerUpdates){let Wt=vt.data.subarray(kt*gt/vt.data.BYTES_PER_ELEMENT,(kt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,kt,vt.width,vt.height,1,Ft,ie,Wt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ft,ie,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,vt.width,vt.height,vt.depth,0,Ft,ie,vt.data);else if(M.isData3DTexture)he?(Se&&e.texStorage3D(i.TEXTURE_3D,Dt,Gt,vt.width,vt.height,vt.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ft,ie,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,vt.width,vt.height,vt.depth,0,Ft,ie,vt.data);else if(M.isFramebufferTexture){if(Se)if(he)e.texStorage2D(i.TEXTURE_2D,Dt,Gt,vt.width,vt.height);else{let gt=vt.width,kt=vt.height;for(let Wt=0;Wt<Dt;Wt++)e.texImage2D(i.TEXTURE_2D,Wt,Gt,gt,kt,0,Ft,ie,null),gt>>=1,kt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),vt.parentNode!==gt){gt.appendChild(vt),g.add(M),gt.onpaint=kt=>{let Wt=kt.changedElements;for(let Mt of g)Wt.includes(Mt.image)&&(Mt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,vt);else{let Wt=i.RGBA,Mt=i.RGBA,re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Wt,Mt,re,vt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(se.length>0){if(he&&Se){let gt=ge(se[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Gt,gt.width,gt.height)}for(let gt=0,kt=se.length;gt<kt;gt++)Bt=se[gt],he?Z&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Ft,ie,Bt):e.texImage2D(i.TEXTURE_2D,gt,Gt,Ft,ie,Bt);M.generateMipmaps=!1}else if(he){if(Se){let gt=ge(vt);e.texStorage2D(i.TEXTURE_2D,Dt,Gt,gt.width,gt.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,ie,vt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Ft,ie,vt);p(M)&&F(at),Nt.__version=Lt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ee(P,M,Y){if(M.image.length!==6)return;let at=Ne(P,M),ft=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);let Lt=n.get(ft);if(ft.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+Y);let Nt=Fe.getPrimaries(Fe.workingColorSpace),pt=M.colorSpace===fs?null:Fe.getPrimaries(M.colorSpace),vt=M.colorSpace===fs||Nt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ft=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Gt=[];for(let Mt=0;Mt<6;Mt++)!Ft&&!ie?Gt[Mt]=m(M.image[Mt],!0,s.maxCubemapSize):Gt[Mt]=ie?M.image[Mt].image:M.image[Mt],Gt[Mt]=Pe(M,Gt[Mt]);let Bt=Gt[0],se=r.convert(M.format,M.colorSpace),he=r.convert(M.type),Se=A(M.internalFormat,se,he,M.normalized,M.colorSpace),Z=M.isVideoTexture!==!0,Dt=Lt.__version===void 0||at===!0,gt=ft.dataReady,kt=N(M,Bt);Ee(i.TEXTURE_CUBE_MAP,M);let Wt;if(Ft){Z&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Se,Bt.width,Bt.height);for(let Mt=0;Mt<6;Mt++){Wt=Gt[Mt].mipmaps;for(let re=0;re<Wt.length;re++){let jt=Wt[re];M.format!==vi?se!==null?Z?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re,0,0,jt.width,jt.height,se,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re,Se,jt.width,jt.height,0,jt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re,0,0,jt.width,jt.height,se,he,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re,Se,jt.width,jt.height,0,se,he,jt.data)}}}else{if(Wt=M.mipmaps,Z&&Dt){Wt.length>0&&kt++;let Mt=ge(Gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Se,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(ie){Z?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Gt[Mt].width,Gt[Mt].height,se,he,Gt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Se,Gt[Mt].width,Gt[Mt].height,0,se,he,Gt[Mt].data);for(let re=0;re<Wt.length;re++){let Re=Wt[re].image[Mt].image;Z?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re+1,0,0,Re.width,Re.height,se,he,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re+1,Se,Re.width,Re.height,0,se,he,Re.data)}}else{Z?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,se,he,Gt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Se,se,he,Gt[Mt]);for(let re=0;re<Wt.length;re++){let jt=Wt[re];Z?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re+1,0,0,se,he,jt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,re+1,Se,se,he,jt.image[Mt])}}}p(M)&&F(i.TEXTURE_CUBE_MAP),Lt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Xt(P,M,Y,at,ft,Lt){let Nt=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),vt=A(Y.internalFormat,Nt,pt,Y.normalized,Y.colorSpace),Ft=n.get(M),ie=n.get(Y);if(ie.__renderTarget=M,!Ft.__hasExternalTextures){let Gt=Math.max(1,M.width>>Lt),Bt=Math.max(1,M.height>>Lt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,Lt,vt,Gt,Bt,M.depth,0,Nt,pt,null):e.texImage2D(ft,Lt,vt,Gt,Bt,0,Nt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ft,ie.__webglTexture,0,ue(M)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ft,ie.__webglTexture,Lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let at=M.depthTexture,ft=at&&at.isDepthTexture?at.type:null,Lt=b(M.stencilBuffer,ft),Nt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(M),Lt,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(M),Lt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,P)}else{let at=M.textures;for(let ft=0;ft<at.length;ft++){let Lt=at[ft],Nt=r.convert(Lt.format,Lt.colorSpace),pt=r.convert(Lt.type),vt=A(Lt.internalFormat,Nt,pt,Lt.normalized,Lt.colorSpace);xe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(M),vt,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(M),vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(P,M,Y){let at=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(M.depthTexture);if(ft.__renderTarget=M,(!ft.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),at){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,M.depthTexture.addEventListener("dispose",$)),ft.__webglTexture===void 0){ft.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,M.depthTexture);let Ft=r.convert(M.depthTexture.format),ie=r.convert(M.depthTexture.type),Gt;M.depthTexture.format===Vi?Gt=i.DEPTH_COMPONENT24:M.depthTexture.format===Us&&(Gt=i.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Gt,M.width,M.height,0,Ft,ie,null)}}else wt(M.depthTexture,0);let Lt=ft.__webglTexture,Nt=ue(M),pt=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,vt=M.depthTexture.format===Us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Vi)xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,pt,Lt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,pt,Lt,0);else if(M.depthTexture.format===Us)xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,pt,Lt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,pt,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let M=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let at=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),at){let ft=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,at.removeEventListener("dispose",ft)};at.addEventListener("dispose",ft),M.__depthDisposeCallback=ft}M.__boundDepthTexture=at}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let at=0;at<6;at++)ne(M.__webglFramebuffer[at],P,at);else{let at=P.texture.mipmaps;at&&at.length>0?ne(M.__webglFramebuffer[0],P,0):ne(M.__webglFramebuffer,P,0)}else if(Y){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]===void 0)M.__webglDepthbuffer[at]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[at],P,!1);else{let ft=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=M.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,Lt)}}else{let at=P.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,P,!1);else{let ft=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,Lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(P,M,Y){let at=n.get(P);M!==void 0&&Xt(at.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&it(P)}function H(P){let M=P.texture,Y=n.get(P),at=n.get(M);P.addEventListener("dispose",E);let ft=P.textures,Lt=P.isWebGLCubeRenderTarget===!0,Nt=ft.length>1;if(Nt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=M.version,a.memory.textures++),Lt){Y.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[pt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)Y.__webglFramebuffer[pt][vt]=i.createFramebuffer()}else Y.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pt=0;pt<M.mipmaps.length;pt++)Y.__webglFramebuffer[pt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let pt=0,vt=ft.length;pt<vt;pt++){let Ft=n.get(ft[pt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&xe(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pt=0;pt<ft.length;pt++){let vt=ft[pt];Y.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[pt]);let Ft=r.convert(vt.format,vt.colorSpace),ie=r.convert(vt.type),Gt=A(vt.internalFormat,Ft,ie,vt.normalized,vt.colorSpace,P.isXRRenderTarget===!0),Bt=ue(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Gt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Lt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,M);for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Xt(Y.__webglFramebuffer[pt][vt],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else Xt(Y.__webglFramebuffer[pt],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(M)&&F(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let pt=0,vt=ft.length;pt<vt;pt++){let Ft=ft[pt],ie=n.get(Ft),Gt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Gt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Gt,ie.__webglTexture),Ee(Gt,Ft),Xt(Y.__webglFramebuffer,P,Ft,i.COLOR_ATTACHMENT0+pt,Gt,0),p(Ft)&&F(Gt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),Ee(pt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Xt(Y.__webglFramebuffer[vt],P,M,i.COLOR_ATTACHMENT0,pt,vt);else Xt(Y.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,pt,0);p(M)&&F(pt),e.unbindTexture()}P.depthBuffer&&it(P)}function Tt(P){let M=P.textures;for(let Y=0,at=M.length;Y<at;Y++){let ft=M[Y];if(p(ft)){let Lt=B(P),Nt=n.get(ft).__webglTexture;e.bindTexture(Lt,Nt),F(Lt),e.unbindTexture()}}}let Ut=[],le=[];function oe(P){if(P.samples>0){if(xe(P)===!1){let M=P.textures,Y=P.width,at=P.height,ft=i.COLOR_BUFFER_BIT,Lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(P),pt=M.length>1;if(pt)for(let Ft=0;Ft<M.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let vt=P.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ft=0;Ft<M.length;Ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);let ie=n.get(M[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,Y,at,0,0,Y,at,ft,i.NEAREST),c===!0&&(Ut.length=0,le.length=0,Ut.push(i.COLOR_ATTACHMENT0+Ft),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Ut.push(Lt),le.push(Lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Ft=0;Ft<M.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);let ie=n.get(M[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function xe(P){let M=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function z(P){let M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Pe(P,M){let Y=P.colorSpace,at=P.format,ft=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==to&&Y!==fs&&(Fe.getTransfer(Y)===Ge?(at!==vi||ft!==si)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",Y)),M}function ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=ct,this.resetTextureUnits=rt,this.getTextureUnits=J,this.setTextureUnits=Q,this.setTexture2D=wt,this.setTexture2DArray=dt,this.setTexture3D=St,this.setTextureCube=yt,this.rebindTextures=Et,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yM(i,t){function e(n,s=fs){let r,a=Fe.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xd)return i.BYTE;if(n===vd)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Md)return i.ALPHA;if(n===bd)return i.RGB;if(n===vi)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===Fs)return i.RG;if(n===$c)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===Bo||n===ko||n===zo||n===Vo)if(a===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zc||n===Jc||n===Kc||n===jc||n===Qc||n===Ho||n===th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zc||n===Jc)return a===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jc)return r.COMPRESSED_R11_EAC;if(n===Qc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ho)return r.COMPRESSED_RG11_EAC;if(n===th)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ah)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mh||n===gh||n===_h)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mh)return a===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===vh||n===$o||n===yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MM=`
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

}`,Xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:SM,fragmentShader:MM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qd=class extends Hi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,g=null,d=null,_=null,S=null,R=typeof XRWebGLBinding<"u",m=new Xd,p={},F=e.getContextAttributes(),B=null,A=null,b=[],N=[],$=new Ot,E=null,D=null,V=new Hn;V.viewport=new We;let X=new Hn;X.viewport=new We;let nt=[V,X],rt=new Dc,J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let xt=b[mt];return xt===void 0&&(xt=new jr,b[mt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(mt){let xt=b[mt];return xt===void 0&&(xt=new jr,b[mt]=xt),xt.getGripSpace()},this.getHand=function(mt){let xt=b[mt];return xt===void 0&&(xt=new jr,b[mt]=xt),xt.getHandSpace()};function ct(mt){let xt=N.indexOf(mt.inputSource);if(xt===-1)return;let Rt=b[xt];Rt!==void 0&&(Rt.update(mt.inputSource,mt.frame,h||a),Rt.dispatchEvent({type:mt.type,data:mt.inputSource}))}function ht(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",wt);for(let mt=0;mt<b.length;mt++){let xt=N[mt];xt!==null&&(N[mt]=null,b[mt].disconnect(xt))}J=null,Q=null,m.reset();for(let mt in p)delete p[mt];if(t.setRenderTarget(B),_=null,d=null,g=null,s=null,A=null,Ne.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize($.width,$.height,!1),D!==null){let mt=D.camera;mt.fov=D.fov,mt.zoom=D.zoom,mt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){r=mt,n.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){o=mt,n.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(mt){h=mt},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(mt){if(s=mt,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",wt),F.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize($),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,ee=null,Xt=null;F.depth&&(Xt=F.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=F.stencil?Us:Vi,ee=F.stencil?la:Li);let ce={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new ni(d.textureWidth,d.textureHeight,{format:vi,type:si,depthTexture:new As(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new ni(_.framebufferWidth,_.framebufferHeight,{format:vi,type:si,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function wt(mt){for(let xt=0;xt<mt.removed.length;xt++){let Rt=mt.removed[xt],ee=N.indexOf(Rt);ee>=0&&(N[ee]=null,b[ee].disconnect(Rt))}for(let xt=0;xt<mt.added.length;xt++){let Rt=mt.added[xt],ee=N.indexOf(Rt);if(ee===-1){for(let ce=0;ce<b.length;ce++)if(ce>=N.length){N.push(Rt),ee=ce;break}else if(N[ce]===null){N[ce]=Rt,ee=ce;break}if(ee===-1)break}let Xt=b[ee];Xt&&Xt.connect(Rt)}}let dt=new W,St=new W;function yt(mt,xt,Rt){dt.setFromMatrixPosition(xt.matrixWorld),St.setFromMatrixPosition(Rt.matrixWorld);let ee=dt.distanceTo(St),Xt=xt.projectionMatrix.elements,ce=Rt.projectionMatrix.elements,ne=Xt[14]/(Xt[10]-1),it=Xt[14]/(Xt[10]+1),Et=(Xt[9]+1)/Xt[5],H=(Xt[9]-1)/Xt[5],Tt=(Xt[8]-1)/Xt[0],Ut=(ce[8]+1)/ce[0],le=ne*Tt,oe=ne*Ut,ue=ee/(-Tt+Ut),xe=ue*-Tt;if(xt.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(xe),mt.translateZ(ue),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),Xt[10]===-1)mt.projectionMatrix.copy(xt.projectionMatrix),mt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let z=ne+ue,Pe=it+ue,ge=le-xe,P=oe+(ee-xe),M=Et*it/Pe*z,Y=H*it/Pe*z;mt.projectionMatrix.makePerspective(ge,P,M,Y,z,Pe),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function $t(mt,xt){xt===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(xt.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(s===null)return;let xt=mt.near,Rt=mt.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),rt.near=X.near=V.near=xt,rt.far=X.far=V.far=Rt,(J!==rt.near||Q!==rt.far)&&(s.updateRenderState({depthNear:rt.near,depthFar:rt.far}),J=rt.near,Q=rt.far),rt.layers.mask=mt.layers.mask|6,V.layers.mask=rt.layers.mask&-5,X.layers.mask=rt.layers.mask&-3;let ee=mt.parent,Xt=rt.cameras;$t(rt,ee);for(let ce=0;ce<Xt.length;ce++)$t(Xt[ce],ee);Xt.length===2?yt(rt,V,X):rt.projectionMatrix.copy(V.projectionMatrix),D===null&&mt.isPerspectiveCamera&&(D={camera:mt,fov:mt.fov,zoom:mt.zoom}),Yt(mt,rt,ee)};function Yt(mt,xt,Rt){Rt===null?mt.matrix.copy(xt.matrixWorld):(mt.matrix.copy(Rt.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(xt.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(xt.projectionMatrix),mt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=Zr*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(d===null&&_===null))return c},this.setFoveation=function(mt){c=mt,d!==null&&(d.fixedFoveation=mt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=mt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(rt)},this.getCameraTexture=function(mt){return p[mt]};let ze=null;function Ee(mt,xt){if(u=xt.getViewerPose(h||a),S=xt,u!==null){let Rt=u.views;_!==null&&(t.setRenderTargetFramebuffer(A,_.framebuffer),t.setRenderTarget(A));let ee=!1;Rt.length!==rt.cameras.length&&(rt.cameras.length=0,ee=!0);for(let it=0;it<Rt.length;it++){let Et=Rt[it],H=null;if(_!==null)H=_.getViewport(Et);else{let Ut=g.getViewSubImage(d,Et);H=Ut.viewport,it===0&&(t.setRenderTargetTextures(A,Ut.colorTexture,Ut.depthStencilTexture),t.setRenderTarget(A))}let Tt=nt[it];Tt===void 0&&(Tt=new Hn,Tt.layers.enable(it),Tt.viewport=new We,nt[it]=Tt),Tt.matrix.fromArray(Et.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Et.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(H.x,H.y,H.width,H.height),it===0&&(rt.matrix.copy(Tt.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),ee===!0&&rt.cameras.push(Tt)}let Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){g=n.getBinding();let it=g.getDepthInformation(Rt[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(Xt&&Xt.includes("camera-access")&&R){t.state.unbindTexture(),g=n.getBinding();for(let it=0;it<Rt.length;it++){let Et=Rt[it].camera;if(Et){let H=p[Et];H||(H=new po,p[Et]=H);let Tt=g.getCameraImage(Et);H.sourceTexture=Tt}}}}for(let Rt=0;Rt<b.length;Rt++){let ee=N[Rt],Xt=b[Rt];ee!==null&&Xt!==void 0&&Xt.update(ee,xt,h||a)}ze&&ze(mt,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),S=null}let Ne=new $m;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(mt){ze=mt},this.dispose=function(){}}},bM=new Ve,Zm=new Me;Zm.set(-1,0,0,0,1,0,0,0,1);function wM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,F,B,A){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),S(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),R(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,F,B):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let F=t.get(p),B=F.envMap,A=F.envMapRotation;B&&(m.envMap.value=B,m.envMapRotation.value.setFromMatrix4(bM.makeRotationFromEuler(A)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,F,B){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*F,m.scale.value=B*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,F){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=F.texture,m.transmissionSamplerSize.value.set(F.width,F.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,p){p.matcap&&(m.matcap.value=p.matcap)}function R(m,p){let F=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(F.matrixWorld),m.nearDistance.value=F.shadow.camera.near,m.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function EM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,b){let N=b.program;n.uniformBlockBinding(A,N)}function h(A,b){let N=s[A.id];N===void 0&&(m(A),N=u(A),s[A.id]=N,A.addEventListener("dispose",F));let $=b.program;n.updateUBOMapping(A,$);let E=t.render.frame;r[A.id]!==E&&(d(A),r[A.id]=E)}function u(A){let b=g();A.__bindingPointIndex=b;let N=i.createBuffer(),$=A.__size,E=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,$,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,N),N}function g(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let b=s[A.id],N=A.uniforms,$=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,D=N.length;E<D;E++){let V=N[E];if(Array.isArray(V))for(let X=0,nt=V.length;X<nt;X++)_(V[X],E,X,$);else _(V,E,0,$)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(A,b,N,$){if(R(A,b,N,$)===!0){let E=A.__offset,D=A.value;if(Array.isArray(D)){let V=0;for(let X=0;X<D.length;X++){let nt=D[X],rt=p(nt);S(nt,A.__data,V),typeof nt!="number"&&typeof nt!="boolean"&&!nt.isMatrix3&&!ArrayBuffer.isView(nt)&&(V+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(D,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,A.__data)}}function S(A,b,N){typeof A=="number"||typeof A=="boolean"?b[0]=A:A.isMatrix3?(b[0]=A.elements[0],b[1]=A.elements[1],b[2]=A.elements[2],b[3]=0,b[4]=A.elements[3],b[5]=A.elements[4],b[6]=A.elements[5],b[7]=0,b[8]=A.elements[6],b[9]=A.elements[7],b[10]=A.elements[8],b[11]=0):ArrayBuffer.isView(A)?b.set(new A.constructor(A.buffer,A.byteOffset,b.length)):A.toArray(b,N)}function R(A,b,N,$){let E=A.value,D=b+"_"+N;if($[D]===void 0)return typeof E=="number"||typeof E=="boolean"?$[D]=E:ArrayBuffer.isView(E)?$[D]=E.slice():$[D]=E.clone(),!0;{let V=$[D];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return $[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function m(A){let b=A.uniforms,N=0,$=16;for(let D=0,V=b.length;D<V;D++){let X=Array.isArray(b[D])?b[D]:[b[D]];for(let nt=0,rt=X.length;nt<rt;nt++){let J=X[nt],Q=Array.isArray(J.value)?J.value:[J.value];for(let ct=0,ht=Q.length;ct<ht;ct++){let wt=Q[ct],dt=p(wt),St=N%$,yt=St%dt.boundary,$t=St+yt;N+=yt,$t!==0&&$-$t<dt.storage&&(N+=$-$t),J.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=dt.storage}}}let E=N%$;return E>0&&(N+=$-E),A.__size=N,A.__cache={},this}function p(A){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(b.boundary=16,b.storage=A.byteLength):me("WebGLRenderer: Unsupported uniform value type.",A),b}function F(A){let b=A.target;b.removeEventListener("dispose",F);let N=a.indexOf(b.__bindingPointIndex);a.splice(N,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function B(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:h,dispose:B}}var TM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function AM(){return qi===null&&(qi=new lo(TM,16,16,Fs,Di),qi.name="DFG_LUT",qi.minFilter=Nn,qi.magFilter=Nn,qi.wrapS=ki,qi.wrapT=ki,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var Ch=class{constructor(t={}){let{canvas:e=um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:_=si}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;let R=_,m=new Set([Gc,$c,Hc]),p=new Set([si,Li,oa,la,kc,zc]),F=new Uint32Array(4),B=new Int32Array(4),A=new W,b=null,N=null,$=[],E=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,X=!1,nt=null,rt=null,J=null,Q=null;this._outputColorSpace=ci;let ct=0,ht=0,wt=null,dt=-1,St=null,yt=new We,$t=new We,Yt=null,ze=new fe(0),Ee=0,Ne=e.width,mt=e.height,xt=1,Rt=null,ee=null,Xt=new We(0,0,Ne,mt),ce=new We(0,0,Ne,mt),ne=!1,it=new Qr,Et=!1,H=!1,Tt=new Ve,Ut=new W,le=new We,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function xe(){return wt===null?xt:1}let z=n;function Pe(w,k){return e.getContext(w,k)}let ge,P,M,Y,at,ft,Lt,Nt,pt,vt,Ft,ie,Gt,Bt,se,he,Se,Z,Dt,gt,kt,Wt,Mt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",pn,!1),z===null){let k="webgl2";if(z=Pe(k,w),z===null)throw Pe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(w){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),ve("WebGLRenderer: "+w.message),w}function re(){ge=new Ny(z),ge.init(),kt=new yM(z,ge),P=new wy(z,ge,t,kt),M=new xM(z,ge),P.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),rt=z.createFramebuffer(),J=z.createFramebuffer(),Q=z.createFramebuffer(),Y=new Oy(z),at=new sM,ft=new vM(z,ge,M,at,P,kt,Y),Lt=new Dy(V),Nt=new k_(z),Wt=new My(z,Nt),pt=new Uy(z,Nt,Y,Wt),vt=new ky(z,pt,Nt,Wt,Y),Z=new By(z,P,ft),se=new Ey(at),Ft=new iM(V,Lt,ge,P,Wt,se),ie=new wM(V,at),Gt=new aM,Bt=new dM(ge),Se=new Sy(V,Lt,M,vt,S,c),he=new _M(V,vt,P),Mt=new EM(z,Y,P,M),Dt=new by(z,ge,Y),gt=new Fy(z,ge,Y),Y.programs=Ft.programs,V.capabilities=P,V.extensions=ge,V.properties=at,V.renderLists=Gt,V.shadowMap=he,V.state=M,V.info=Y}R!==si&&(D=new Vy(R,e.width,e.height,o,s,r));let jt=new qd(V,z);this.xr=jt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(Ne,mt,!1))},this.getSize=function(w){return w.set(Ne,mt)},this.setSize=function(w,k,st=!0){if(jt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=w,mt=k,e.width=Math.floor(w*xt),e.height=Math.floor(k*xt),st===!0&&(e.style.width=w+"px",e.style.height=k+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Ne*xt,mt*xt).floor()},this.setDrawingBufferSize=function(w,k,st){Ne=w,mt=k,xt=st,e.width=Math.floor(w*st),e.height=Math.floor(k*st),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(R===si){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(yt)},this.getViewport=function(w){return w.copy(Xt)},this.setViewport=function(w,k,st,tt){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,k,st,tt),M.viewport(yt.copy(Xt).multiplyScalar(xt).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,k,st,tt){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,k,st,tt),M.scissor($t.copy(ce).multiplyScalar(xt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){M.setScissorTest(ne=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,st=!0){let tt=0;if(w){let et=!1;if(wt!==null){let It=wt.texture.format;et=m.has(It)}if(et){let It=wt.texture.type,ut=p.has(It),bt=Se.getClearColor(),Pt=Se.getClearAlpha(),Qt=bt.r,we=bt.g,Ae=bt.b;ut?(F[0]=Qt,F[1]=we,F[2]=Ae,F[3]=Pt,z.clearBufferuiv(z.COLOR,0,F)):(B[0]=Qt,B[1]=we,B[2]=Ae,B[3]=Pt,z.clearBufferiv(z.COLOR,0,B))}else tt|=z.COLOR_BUFFER_BIT}k&&(tt|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(tt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&z.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),nt=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Se.dispose(),Gt.dispose(),Bt.dispose(),at.dispose(),Lt.dispose(),vt.dispose(),Wt.dispose(),Mt.dispose(),Ft.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",Sr),jt.removeEventListener("sessionend",Ni),fi.stop()};function Re(w){w.preventDefault(),io("WebGLRenderer: Context Lost."),X=!0}function Te(){io("WebGLRenderer: Context Restored."),X=!1;let w=Y.autoReset,k=he.enabled,st=he.autoUpdate,tt=he.needsUpdate,et=he.type;re(),Y.autoReset=w,he.enabled=k,he.autoUpdate=st,he.needsUpdate=tt,he.type=et}function pn(w){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wn(w){let k=w.target;k.removeEventListener("dispose",Wn),yr(k)}function yr(w){_a(w),at.remove(w)}function _a(w){let k=at.get(w).programs;k!==void 0&&(k.forEach(function(st){Ft.releaseProgram(st)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,st,tt,et,It){k===null&&(k=oe);let ut=et.isMesh&&et.matrixWorld.determinantAffine()<0,bt=Jh(w,k,st,tt,et);M.setMaterial(tt,ut);let Pt=st.index,Qt=1;if(tt.wireframe===!0){if(Pt=pt.getWireframeAttribute(st),Pt===void 0)return;Qt=2}let we=st.drawRange,Ae=st.attributes.position,Kt=we.start*Qt,Le=(we.start+we.count)*Qt;It!==null&&(Kt=Math.max(Kt,It.start*Qt),Le=Math.min(Le,(It.start+It.count)*Qt)),Pt!==null?(Kt=Math.max(Kt,0),Le=Math.min(Le,Pt.count)):Ae!=null&&(Kt=Math.max(Kt,0),Le=Math.min(Le,Ae.count));let en=Le-Kt;if(en<0||en===1/0)return;Wt.setup(et,tt,bt,st,Pt);let Oe,Xe=Dt;if(Pt!==null&&(Oe=Nt.get(Pt),Xe=gt,Xe.setIndex(Oe)),et.isMesh)tt.wireframe===!0?(M.setLineWidth(tt.wireframeLinewidth*xe()),Xe.setMode(z.LINES)):Xe.setMode(z.TRIANGLES);else if(et.isLine){let bn=tt.linewidth;bn===void 0&&(bn=1),M.setLineWidth(bn*xe()),et.isLineSegments?Xe.setMode(z.LINES):et.isLineLoop?Xe.setMode(z.LINE_LOOP):Xe.setMode(z.LINE_STRIP)}else et.isPoints?Xe.setMode(z.POINTS):et.isSprite&&Xe.setMode(z.TRIANGLES);if(et.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Xe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let bn=et._multiDrawStarts,Jt=et._multiDrawCounts,Ln=et._multiDrawCount,Be=Pt?Nt.get(Pt).bytesPerElement:1,jn=at.get(tt).currentProgram.getUniforms();for(let ai=0;ai<Ln;ai++)jn.setValue(z,"_gl_DrawID",ai),Xe.render(bn[ai]/Be,Jt[ai])}else if(et.isInstancedMesh)Xe.renderInstances(Kt,en,et.count);else if(st.isInstancedBufferGeometry){let bn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Jt=Math.min(st.instanceCount,bn);Xe.renderInstances(Kt,en,Jt)}else Xe.render(Kt,en)};function xa(w,k,st,tt){nt!==null&&w.isNodeMaterial&&nt.setObject(tt,w),Et===!0&&se.setState(w,st,!1),w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,zs(w,k,tt),w.side=Ls,w.needsUpdate=!0,zs(w,k,tt),w.side=Wi):zs(w,k,tt)}this.compile=function(w,k,st=null){st===null&&(st=w),nt!==null&&nt.renderStart(w,k,st),N=Bt.get(st),N.init(k),E.push(N),st.traverseVisible(function(et){et.isLight&&et.layers.test(k.layers)&&(N.pushLight(et),et.castShadow&&N.pushShadow(et))}),w!==st&&w.traverseVisible(function(et){et.isLight&&et.layers.test(k.layers)&&(N.pushLight(et),et.castShadow&&N.pushShadow(et))}),N.setupLights(),nt!==null&&nt.updateLights(N.state.lightsArray),H=this.localClippingEnabled,Et=se.init(this.clippingPlanes,H),Et===!0&&se.setGlobalState(this.clippingPlanes,k),nt!==null&&he.render(N.state.shadowsArray,st,k);let tt=new Set;return w.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let It=et.material;if(It)if(Array.isArray(It))for(let ut=0;ut<It.length;ut++){let bt=It[ut];xa(bt,st,k,et),tt.add(bt)}else xa(It,st,k,et),tt.add(It)}),N=E.pop(),nt!==null&&nt.renderEnd(),tt},this.compileAsync=function(w,k,st=null){let tt=this.compile(w,k,st);return new Promise(et=>{function It(){if(tt.forEach(function(ut){let Pt=at.get(ut).currentProgram;(Pt===void 0||Pt.isReady())&&tt.delete(ut)}),tt.size===0){et(w);return}setTimeout(It,10)}ge.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let es=null;function Yh(w){es&&es(w)}function Sr(){fi.stop()}function Ni(){fi.start()}let fi=new $m;fi.setAnimationLoop(Yh),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(w){es=w,jt.setAnimationLoop(w),w===null?fi.stop():fi.start()},jt.addEventListener("sessionstart",Sr),jt.addEventListener("sessionend",Ni),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;nt!==null&&nt.renderStart(w,k);let st=jt.enabled===!0&&jt.isPresenting===!0,tt=D!==null&&(wt===null||st)&&D.begin(V,wt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(k),k=jt.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,k,wt),N=Bt.get(w,E.length),N.init(k),N.state.textureUnits=ft.getTextureUnits(),E.push(N),Tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(Tt,Ci,k.reversedDepth),H=this.localClippingEnabled,Et=se.init(this.clippingPlanes,H),b=Gt.get(w,$.length),b.init(),$.push(b),jt.enabled===!0&&jt.isPresenting===!0){let ut=V.xr.getDepthSensingMesh();ut!==null&&Mr(ut,k,-1/0,V.sortObjects)}Mr(w,k,0,V.sortObjects),b.finish(),nt!==null&&nt.updateLights(N.state.lightsArray),V.sortObjects===!0&&b.sort(Rt,ee),ue=jt.enabled===!1||jt.isPresenting===!1||jt.hasDepthSensing()===!1,ue&&Se.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Et===!0&&se.beginShadows();let et=N.state.shadowsArray;if(he.render(et,w,k),Et===!0&&se.endShadows(),(tt&&D.hasRenderPass())===!1){let ut=b.opaque,bt=b.transmissive;if(N.setupLights(),k.isArrayCamera){let Pt=k.cameras;if(bt.length>0)for(let Qt=0,we=Pt.length;Qt<we;Qt++){let Ae=Pt[Qt];ya(ut,bt,w,Ae)}ue&&Se.render(w);for(let Qt=0,we=Pt.length;Qt<we;Qt++){let Ae=Pt[Qt];va(b,w,Ae,Ae.viewport)}}else bt.length>0&&ya(ut,bt,w,k),ue&&Se.render(w),va(b,w,k)}wt!==null&&ht===0&&(ft.updateMultisampleRenderTarget(wt),ft.updateRenderTargetMipmap(wt)),tt&&D.end(V),w.isScene===!0&&w.onAfterRender(V,w,k),Wt.resetDefaultState(),dt=-1,St=null,E.pop(),E.length>0?(N=E[E.length-1],ft.setTextureUnits(N.state.textureUnits),Et===!0&&se.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,$.pop(),$.length>0?b=$[$.length-1]:b=null,nt!==null&&nt.renderEnd()};function Mr(w,k,st,tt){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(it)){tt&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let ut=vt.update(w),bt=w.material;bt.visible&&b.push(w,ut,bt,st,le.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(it))){let ut=vt.update(w),bt=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),le.copy(ut.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(bt)){let Pt=ut.groups;for(let Qt=0,we=Pt.length;Qt<we;Qt++){let Ae=Pt[Qt],Kt=bt[Ae.materialIndex];Kt&&Kt.visible&&b.push(w,ut,Kt,st,le.z,Ae,k)}}else bt.visible&&b.push(w,ut,bt,st,le.z,null,k)}}let It=w.children;for(let ut=0,bt=It.length;ut<bt;ut++)Mr(It[ut],k,st,tt)}function va(w,k,st,tt){let{opaque:et,transmissive:It,transparent:ut}=w;N.setupLightsView(st),Et===!0&&se.setGlobalState(V.clippingPlanes,st),tt&&M.viewport(yt.copy(tt)),et.length>0&&xs(et,k,st),It.length>0&&xs(It,k,st),ut.length>0&&xs(ut,k,st),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ya(w,k,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[tt.id]===void 0){let Kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[tt.id]=new ni(1,1,{generateMipmaps:!0,type:Kt?Di:si,minFilter:Ns,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}let It=N.state.transmissionRenderTarget[tt.id],ut=tt.viewport||yt;It.setSize(ut.z*V.transmissionResolutionScale,ut.w*V.transmissionResolutionScale);let bt=V.getRenderTarget(),Pt=V.getActiveCubeFace(),Qt=V.getActiveMipmapLevel();V.setRenderTarget(It),V.getClearColor(ze),Ee=V.getClearAlpha(),Ee<1&&V.setClearColor(16777215,.5),V.clear(),ue&&Se.render(st);let we=V.toneMapping;V.toneMapping=Pi;let Ae=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),N.setupLightsView(tt),Et===!0&&se.setGlobalState(V.clippingPlanes,tt),xs(w,st,tt),ft.updateMultisampleRenderTarget(It),ft.updateRenderTargetMipmap(It),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Le=0,en=k.length;Le<en;Le++){let Oe=k[Le],{object:Xe,geometry:bn,material:Jt,group:Ln}=Oe;if(Jt.side===Wi&&Xe.layers.test(tt.layers)){let Be=Jt.side;Jt.side=Zn,Jt.needsUpdate=!0,Sa(Xe,st,tt,bn,Jt,Ln),Jt.side=Be,Jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(ft.updateMultisampleRenderTarget(It),ft.updateRenderTargetMipmap(It))}V.setRenderTarget(bt,Pt,Qt),V.setClearColor(ze,Ee),Ae!==void 0&&(tt.viewport=Ae),V.toneMapping=we}function xs(w,k,st){let tt=k.isScene===!0?k.overrideMaterial:null;for(let et=0,It=w.length;et<It;et++){let ut=w[et],{object:bt,geometry:Pt,group:Qt}=ut,we=ut.material;we.allowOverride===!0&&tt!==null&&(we=tt),bt.layers.test(st.layers)&&Sa(bt,k,st,Pt,we,Qt)}}function Sa(w,k,st,tt,et,It){nt!==null&&et.isNodeMaterial&&nt.setObject(w,et),w.onBeforeRender(V,k,st,tt,et,It),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),et.onBeforeRender(V,k,st,tt,w,It),et.transparent===!0&&et.side===Wi&&et.forceSinglePass===!1?(et.side=Zn,et.needsUpdate=!0,V.renderBufferDirect(st,k,tt,et,w,It),et.side=Ls,et.needsUpdate=!0,V.renderBufferDirect(st,k,tt,et,w,It),et.side=Wi):V.renderBufferDirect(st,k,tt,et,w,It),w.onAfterRender(V,k,st,tt,et,It)}function zs(w,k,st){k.isScene!==!0&&(k=oe);let tt=at.get(w),et=N.state.lights,It=N.state.shadowsArray,ut=et.state.version,bt=Ft.getParameters(w,et.state,It,k,st,N.state.lightProbeGridArray),Pt=Ft.getProgramCacheKey(bt),Qt=tt.programs;tt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,tt.fog=k.fog;let we=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;tt.envMap=Lt.get(w.envMap||tt.environment,we),tt.envMapRotation=tt.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",Wn),Qt=new Map,tt.programs=Qt);let Ae=Qt.get(Pt);if(Ae!==void 0){if(tt.currentProgram===Ae&&tt.lightsStateVersion===ut)return vs(w,bt),Ae}else bt.uniforms=Ft.getUniforms(w),nt!==null&&w.isNodeMaterial&&nt.build(w,st,bt),w.onBeforeCompile(bt,V),Ae=Ft.acquireProgram(bt,Pt),Qt.set(Pt,Ae),tt.uniforms=bt.uniforms;let Kt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=se.uniform),vs(w,bt),tt.needsLights=Kh(w),tt.lightsStateVersion=ut,tt.needsLights&&(Kt.ambientLightColor.value=et.state.ambient,Kt.lightProbe.value=et.state.probe,Kt.sunLights.value=et.state.sun,Kt.sunLightShadows.value=et.state.sunShadow,Kt.directionalLights.value=et.state.directional,Kt.directionalLightShadows.value=et.state.directionalShadow,Kt.spotLights.value=et.state.spot,Kt.spotLightShadows.value=et.state.spotShadow,Kt.rectAreaLights.value=et.state.rectArea,Kt.ltc_1.value=et.state.rectAreaLTC1,Kt.ltc_2.value=et.state.rectAreaLTC2,Kt.pointLights.value=et.state.point,Kt.pointLightShadows.value=et.state.pointShadow,Kt.hemisphereLights.value=et.state.hemi,Kt.sunShadowMatrix.value=et.state.sunShadowMatrix,Kt.sunShadowCascade.value=et.state.sunShadowCascade,Kt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Kt.spotLightMatrix.value=et.state.spotLightMatrix,Kt.spotLightMap.value=et.state.spotLightMap,Kt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=N.state.lightProbeGridArray.length>0,tt.currentProgram=Ae,tt.uniformsList=null,Ae}function Vs(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=ua.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function vs(w,k){let st=at.get(w);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function Zh(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(k.matrixWorld);for(let st=0,tt=w.length;st<tt;st++){let et=w[st];if(et.texture!==null&&et.boundingBox.containsPoint(A))return et}return null}function Jh(w,k,st,tt,et){k.isScene!==!0&&(k=oe),ft.resetTextureUnits();let It=k.fog,ut=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?k.environment:null,bt=wt===null?V.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Fe.workingColorSpace,Pt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Qt=Lt.get(tt.envMap||ut,Pt),we=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Ae=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Kt=!!st.morphAttributes.position,Le=!!st.morphAttributes.normal,en=!!st.morphAttributes.color,Oe=Pi;tt.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Oe=V.toneMapping);let Xe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,bn=Xe!==void 0?Xe.length:0,Jt=at.get(tt),Ln=N.state.lights;if(Et===!0&&(H===!0||w!==St)){let ke=w===St&&tt.id===dt;se.setState(tt,w,ke)}let Be=!1;tt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ln.state.version||Jt.outputColorSpace!==bt||et.isBatchedMesh&&Jt.batching===!1||!et.isBatchedMesh&&Jt.batching===!0||et.isBatchedMesh&&Jt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Jt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Jt.instancing===!1||!et.isInstancedMesh&&Jt.instancing===!0||et.isSkinnedMesh&&Jt.skinning===!1||!et.isSkinnedMesh&&Jt.skinning===!0||et.isInstancedMesh&&Jt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Jt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Jt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Jt.instancingMorph===!1&&et.morphTexture!==null||Jt.envMap!==Qt||tt.fog===!0&&Jt.fog!==It||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==se.numPlanes||Jt.numIntersection!==se.numIntersection)||Jt.vertexAlphas!==we||Jt.vertexTangents!==Ae||Jt.morphTargets!==Kt||Jt.morphNormals!==Le||Jt.morphColors!==en||Jt.toneMapping!==Oe||Jt.morphTargetsCount!==bn||!!Jt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,Jt.__version=tt.version);let jn=Jt.currentProgram;Be===!0&&(jn=zs(tt,k,et),nt&&tt.isNodeMaterial&&nt.onUpdateProgram(tt,jn,Jt));let ai=!1,Ce=!1,ys=!1,He=jn.getUniforms(),an=Jt.uniforms;if(M.useProgram(jn.program)&&(ai=!0,Ce=!0,ys=!0),tt.id!==dt&&(dt=tt.id,Ce=!0),Jt.needsLights){let ke=Zh(N.state.lightProbeGridArray,et);Jt.lightProbeGrid!==ke&&(Jt.lightProbeGrid=ke,Ce=!0)}if(ai||St!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),He.setValue(z,"projectionMatrix",w.projectionMatrix),He.setValue(z,"viewMatrix",w.matrixWorldInverse);let wn=He.map.cameraPosition;wn!==void 0&&wn.setValue(z,Ut.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&He.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&He.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),St!==w&&(St=w,Ce=!0,ys=!0)}if(Jt.needsLights&&(Ln.state.sunShadowMap.length>0&&He.setValue(z,"sunShadowMap",Ln.state.sunShadowMap,ft),Ln.state.directionalShadowMap.length>0&&He.setValue(z,"directionalShadowMap",Ln.state.directionalShadowMap,ft),Ln.state.spotShadowMap.length>0&&He.setValue(z,"spotShadowMap",Ln.state.spotShadowMap,ft),Ln.state.pointShadowMap.length>0&&He.setValue(z,"pointShadowMap",Ln.state.pointShadowMap,ft)),et.isSkinnedMesh){He.setOptional(z,et,"bindMatrix"),He.setOptional(z,et,"bindMatrixInverse");let ke=et.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),He.setValue(z,"boneTexture",ke.boneTexture,ft))}et.isBatchedMesh&&(He.setOptional(z,et,"batchingTexture"),He.setValue(z,"batchingTexture",et._matricesTexture,ft),He.setOptional(z,et,"batchingIdTexture"),He.setValue(z,"batchingIdTexture",et._indirectTexture,ft),He.setOptional(z,et,"batchingColorTexture"),et._colorsTexture!==null&&He.setValue(z,"batchingColorTexture",et._colorsTexture,ft));let pi=st.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Z.update(et,st,jn),(Ce||Jt.receiveShadow!==et.receiveShadow)&&(Jt.receiveShadow=et.receiveShadow,He.setValue(z,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=AM()),Ce){if(He.setValue(z,"toneMappingExposure",V.toneMappingExposure),Jt.needsLights&&el(an,ys),It&&tt.fog===!0&&ie.refreshFogUniforms(an,It),ie.refreshMaterialUniforms(an,tt,xt,mt,N.state.transmissionRenderTarget[w.id]),Jt.needsLights&&Jt.lightProbeGrid){let ke=Jt.lightProbeGrid;an.probesSH.value=ke.texture,an.probesMin.value.copy(ke.boundingBox.min),an.probesMax.value.copy(ke.boundingBox.max),an.probesResolution.value.copy(ke.resolution)}ua.upload(z,Vs(Jt),an,ft)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ua.upload(z,Vs(Jt),an,ft),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&He.setValue(z,"center",et.center),He.setValue(z,"modelViewMatrix",et.modelViewMatrix),He.setValue(z,"normalMatrix",et.normalMatrix),He.setValue(z,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){let ke=tt.uniformsGroups;for(let wn=0,ns=ke.length;wn<ns;wn++){let Ui=ke[wn];Mt.update(Ui,jn),Mt.bind(Ui,jn)}}return jn}function el(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Kh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return wt},this.setRenderTargetTextures=function(w,k,st){let tt=at.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),at.get(w.texture).__webglTexture=k,at.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let st=at.get(w);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,st=0){wt=w,ct=k,ht=st;let tt=null,et=!1,It=!1;if(w){let bt=at.get(w);if(bt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(z.FRAMEBUFFER,bt.__webglFramebuffer),yt.copy(w.viewport),$t.copy(w.scissor),Yt=w.scissorTest,M.viewport(yt),M.scissor($t),M.setScissorTest(Yt),dt=-1;return}else if(bt.__webglFramebuffer===void 0)ft.setupRenderTarget(w);else if(bt.__hasExternalTextures)ft.rebindTextures(w,at.get(w.texture).__webglTexture,at.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let we=w.depthTexture;if(bt.__boundDepthTexture!==we){if(we!==null&&at.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(It=!0);let Qt=at.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?tt=Qt[k][st]:tt=Qt[k],et=!0):w.samples>0&&ft.useMultisampledRTT(w)===!1?tt=at.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?tt=Qt[st]:tt=Qt,yt.copy(w.viewport),$t.copy(w.scissor),Yt=w.scissorTest}else yt.copy(Xt).multiplyScalar(xt).floor(),$t.copy(ce).multiplyScalar(xt).floor(),Yt=ne;if(st!==0&&(tt=rt),M.bindFramebuffer(z.FRAMEBUFFER,tt)&&M.drawBuffers(w,tt),M.viewport(yt),M.scissor($t),M.setScissorTest(Yt),et){let bt=at.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,st)}else if(It){let bt=k;for(let Pt=0;Pt<w.textures.length;Pt++){let Qt=at.get(w.textures[Pt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pt,Qt.__webglTexture,st,bt)}}else if(w!==null&&st!==0){let bt=at.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bt.__webglTexture,st)}dt=-1};function Xn(w){let k=at.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=P.textureFormatReadable(w.format),k.__typeReadable=P.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,st,tt,et,It,ut,bt=0){if(!(w&&w.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(Pt=Pt[ut]),Pt){M.bindFramebuffer(z.FRAMEBUFFER,Pt);try{let Qt=w.textures[bt],we=Qt.format,Ae=Qt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);let Kt=Xn(Qt);if(Kt.__formatReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-tt&&st>=0&&st<=w.height-et&&z.readPixels(k,st,tt,et,kt.convert(we),kt.convert(Ae),It)}finally{let Qt=wt!==null?at.get(wt).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,k,st,tt,et,It,ut,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(Pt=Pt[ut]),Pt)if(k>=0&&k<=w.width-tt&&st>=0&&st<=w.height-et){M.bindFramebuffer(z.FRAMEBUFFER,Pt);let Qt=w.textures[bt],we=Qt.format,Ae=Qt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);let Kt=Xn(Qt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.bufferData(z.PIXEL_PACK_BUFFER,It.byteLength,z.STREAM_READ),z.readPixels(k,st,tt,et,kt.convert(we),kt.convert(Ae),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let en=wt!==null?at.get(wt).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,en);let Oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await fm(z,Oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,It),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Le),z.deleteSync(Oe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,st=0){let tt=Math.pow(2,-st),et=Math.floor(w.image.width*tt),It=Math.floor(w.image.height*tt),ut=k!==null?k.x:0,bt=k!==null?k.y:0;ft.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,ut,bt,et,It),M.unbindTexture()},this.copyTextureToTexture=function(w,k,st=null,tt=null,et=0,It=0){let ut,bt,Pt,Qt,we,Ae,Kt,Le,en,Oe=w.isCompressedTexture?w.mipmaps[It]:w.image;if(st!==null)ut=st.max.x-st.min.x,bt=st.max.y-st.min.y,Pt=st.isBox3?st.max.z-st.min.z:1,Qt=st.min.x,we=st.min.y,Ae=st.isBox3?st.min.z:0;else{let an=Math.pow(2,-et);ut=Math.floor(Oe.width*an),bt=Math.floor(Oe.height*an),w.isDataArrayTexture?Pt=Oe.depth:w.isData3DTexture?Pt=Math.floor(Oe.depth*an):Pt=1,Qt=0,we=0,Ae=0}tt!==null?(Kt=tt.x,Le=tt.y,en=tt.z):(Kt=0,Le=0,en=0);let Xe=kt.convert(k.format),bn=kt.convert(k.type),Jt;k.isData3DTexture?(ft.setTexture3D(k,0),Jt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ft.setTexture2DArray(k,0),Jt=z.TEXTURE_2D_ARRAY):(ft.setTexture2D(k,0),Jt=z.TEXTURE_2D),M.activeTexture(z.TEXTURE0),M.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Ln=M.getParameter(z.UNPACK_ROW_LENGTH),Be=M.getParameter(z.UNPACK_IMAGE_HEIGHT),jn=M.getParameter(z.UNPACK_SKIP_PIXELS),ai=M.getParameter(z.UNPACK_SKIP_ROWS),Ce=M.getParameter(z.UNPACK_SKIP_IMAGES);M.pixelStorei(z.UNPACK_ROW_LENGTH,Oe.width),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe.height),M.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),M.pixelStorei(z.UNPACK_SKIP_ROWS,we),M.pixelStorei(z.UNPACK_SKIP_IMAGES,Ae);let ys=w.isDataArrayTexture||w.isData3DTexture,He=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let an=at.get(w),pi=at.get(k),ke=at.get(an.__renderTarget),wn=at.get(pi.__renderTarget);M.bindFramebuffer(z.READ_FRAMEBUFFER,ke.__webglFramebuffer),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let ns=0;ns<Pt;ns++)ys&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.get(w).__webglTexture,et,Ae+ns),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.get(k).__webglTexture,It,en+ns)),z.blitFramebuffer(Qt,we,ut,bt,Kt,Le,ut,bt,z.DEPTH_BUFFER_BIT,z.NEAREST);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(et!==0||w.isRenderTargetTexture||at.has(w)){let an=at.get(w),pi=at.get(k);M.bindFramebuffer(z.READ_FRAMEBUFFER,J),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,Q);for(let ke=0;ke<Pt;ke++)ys?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,an.__webglTexture,et,Ae+ke):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,an.__webglTexture,et),He?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pi.__webglTexture,It,en+ke):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pi.__webglTexture,It),et!==0?z.blitFramebuffer(Qt,we,ut,bt,Kt,Le,ut,bt,z.COLOR_BUFFER_BIT,z.NEAREST):He?z.copyTexSubImage3D(Jt,It,Kt,Le,en+ke,Qt,we,ut,bt):z.copyTexSubImage2D(Jt,It,Kt,Le,Qt,we,ut,bt);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else He?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Jt,It,Kt,Le,en,ut,bt,Pt,Xe,bn,Oe.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Jt,It,Kt,Le,en,ut,bt,Pt,Xe,Oe.data):z.texSubImage3D(Jt,It,Kt,Le,en,ut,bt,Pt,Xe,bn,Oe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,It,Kt,Le,ut,bt,Xe,bn,Oe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,It,Kt,Le,Oe.width,Oe.height,Xe,Oe.data):z.texSubImage2D(z.TEXTURE_2D,It,Kt,Le,ut,bt,Xe,bn,Oe);M.pixelStorei(z.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Be),M.pixelStorei(z.UNPACK_SKIP_PIXELS,jn),M.pixelStorei(z.UNPACK_SKIP_ROWS,ai),M.pixelStorei(z.UNPACK_SKIP_IMAGES,Ce),It===0&&k.generateMipmaps&&z.generateMipmap(Jt),M.unbindTexture()},this.initRenderTarget=function(w){at.get(w).__webglFramebuffer===void 0&&ft.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ft.setTextureCube(w,0):w.isData3DTexture?ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ft.setTexture2DArray(w,0):ft.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){ct=0,ht=0,wt=null,M.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Fe._getUnpackColorSpace()}};var Km=new Yn,Ph=new W,ps=class extends Lo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new dn(t,3)),this.setAttribute("uv",new dn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ps(e,6,1);return this.setAttribute("instanceStart",new Ii(n,3,0)),this.setAttribute("instanceEnd",new Ii(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ps(e,6,1);return this.setAttribute("instanceColorStart",new Ii(n,3,0)),this.setAttribute("instanceColorEnd",new Ii(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Eo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Km.setFromBufferAttribute(e),this.boundingBox.union(Km))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ph.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ph)),Ph.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ph));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};zt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ot},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Jn.line={uniforms:Go.merge([zt.common,zt.fog,zt.line]),vertexShader:`
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
		`};var Yi=class extends In{constructor(t){super({type:"LineMaterial",uniforms:Go.clone(Jn.line.uniforms),vertexShader:Jn.line.vertexShader,fragmentShader:Jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Yd=new We,jm=new W,Qm=new W,Un=new We,Fn=new We,Zi=new We,Zd=new W,Jd=new Ve,On=new No,tg=new W,Lh=new Yn,Dh=new ii,Ji=new We,Ki,fr;function eg(i,t,e){return Ji.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ji.multiplyScalar(1/Ji.w),Ji.x=fr/e.width,Ji.y=fr/e.height,Ji.applyMatrix4(i.projectionMatrixInverse),Ji.multiplyScalar(1/Ji.w),Math.abs(Math.max(Ji.x,Ji.y))}function CM(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){On.start.fromBufferAttribute(s,o),On.end.fromBufferAttribute(r,o),On.applyMatrix4(e);let h=new W,u=new W;Ki.distanceSqToSegment(On.start,On.end,u,h),u.distanceTo(h)<fr*.5&&t.push({point:u,pointOnLine:h,distance:Ki.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function RM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),g=-t.near;Ki.at(1,Zi),Zi.w=1,Zi.applyMatrix4(t.matrixWorldInverse),Zi.applyMatrix4(n),Zi.multiplyScalar(1/Zi.w),Zi.x*=r.x/2,Zi.y*=r.y/2,Zi.z=0,Zd.copy(Zi),Jd.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,_=u;d<_;d++){if(Un.fromBufferAttribute(c,d),Fn.fromBufferAttribute(h,d),Un.w=1,Fn.w=1,Un.applyMatrix4(Jd),Fn.applyMatrix4(Jd),Un.z>g&&Fn.z>g)continue;if(Un.z>g){let B=Un.z-Fn.z,A=(Un.z-g)/B;Un.lerp(Fn,A)}else if(Fn.z>g){let B=Fn.z-Un.z,A=(Fn.z-g)/B;Fn.lerp(Un,A)}Un.applyMatrix4(n),Fn.applyMatrix4(n),Un.multiplyScalar(1/Un.w),Fn.multiplyScalar(1/Fn.w),Un.x*=r.x/2,Un.y*=r.y/2,Fn.x*=r.x/2,Fn.y*=r.y/2,On.start.copy(Un),On.start.z=0,On.end.copy(Fn),On.end.z=0;let R=On.closestPointToPointParameter(Zd,!0);On.at(R,tg);let m=Ad.lerp(Un.z,Fn.z,R),p=m>=-1&&m<=1,F=Zd.distanceTo(tg)<fr*.5;if(p&&F){On.start.fromBufferAttribute(c,d),On.end.fromBufferAttribute(h,d),On.start.applyMatrix4(a),On.end.applyMatrix4(a);let B=new W,A=new W;Ki.distanceSqToSegment(On.start,On.end,A,B),e.push({point:A,pointOnLine:B,distance:Ki.origin.distanceTo(A),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var pr=class extends Rn{constructor(t=new ps,e=new Yi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)jm.fromBufferAttribute(e,a),Qm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+jm.distanceTo(Qm);let r=new Ps(s,2,1);return t.setAttribute("instanceDistanceStart",new Ii(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ii(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ki=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;fr=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Dh.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=fr*.5;else{let g=Math.max(s.near,Dh.distanceToPoint(Ki.origin));h=eg(s,g,c.resolution)}if(Dh.radius+=h,Ki.intersectsSphere(Dh)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Lh.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=fr*.5;else{let g=Math.max(s.near,Lh.distanceToPoint(Ki.origin));u=eg(s,g,c.resolution)}Lh.expandByScalar(u),Ki.intersectsBox(Lh)!==!1&&(n?CM(this,e):RM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Yd),this.material.uniforms.resolution.value.set(Yd.z,Yd.w))}};var Os=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function ng(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:c,CY:h,mcs:u,q:g,list:d,clamp:_,norm:S,munis:R}=i,m=l=>document.querySelector(l),p=l=>String(l).replace(/[<>&"]/g,f=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[f]),F=(l,f)=>[(l-c)*o,(f-h)*o],B=.06,A=t.segs.map(l=>{let f=[],v=[0];for(let y=0;y<l.length;y+=2){let T=F(l[y],l[y+1]);f.length&&v.push(v[v.length-1]+Math.hypot(T[0]-f[f.length-1][0],T[1]-f[f.length-1][1])),f.push(T)}return{p:f,c:v,L:v[v.length-1]}}),b=t.stops.map(([l,f,v,y])=>({n:l,id:y,w:F(f,v),fams:new Set})),N=t.routes.map(([l,f,v])=>({s:l,l:f,c:v})),$=new Map;(t.bus||[]).forEach(([l,f,v,y])=>{let T={days:new Set(l),name:f,stops:v,times:y};v.forEach((C,L)=>{if(L<v.length-1){let U=$.get(C)||[];U.push([T,L]),$.set(C,U)}})});function E(l,f,v){let y=ne(),T=t.days.indexOf(y.ymd),C=[];for(let[L,U]of $.get(l)||[]){if(!L.days.has(T))continue;let O=L.times[U];if(O<f||O>v)continue;let q=L.stops[L.stops.length-1];C.push({sm:O,est:O,dl:0,fam:L.name,dest:b[q].n,destId:b[q].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:L.stops.slice(U)})}return C}let D=(l,f)=>{let v=l.match(/^R([A-Z]*)(\d*)(.*)$/),y=f.match(/^R([A-Z]*)(\d*)(.*)$/);return(v[1]||"").localeCompare(y[1]||"")||(+v[2]||0)-(+y[2]||0)||v[3].localeCompare(y[3])},V=[...new Set(N.map(l=>l.s))].sort(D),X={};N.forEach(l=>{X[l.s]||(X[l.s]=l.c)});let nt=t.pats.map(([l,f,v])=>({stops:l,t:f,segs:v})),rt=t.trips.map(([l,f,v,y,T],C)=>({day:l,pat:nt[f],fam:N[v].s,c:N[v].c,t0:y,num:T,tid:t.tids[C]})),J={};V.forEach(l=>J[l]=new Set),rt.forEach(l=>{l.pat.segs.forEach(f=>J[l.fam].add(f)),l.pat.stops.forEach(f=>b[f].fams.add(l.fam))});let Q=t.days.map((l,f)=>rt.filter(v=>v.day===f)),ct=new Map(rt.map(l=>[l.tid,l])),ht=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],wt=Math.PI/180,dt=3.922*wt,St=-39.705*wt;function yt(l,f){let v=l*wt+dt,y=f*wt,T=Math.cos(St),C=Math.sin(St),L=Math.cos(y),U=Math.cos(v)*L,O=Math.sin(v)*L,q=Math.sin(y),j=Math.atan2(O,U*T-q*C),x=Math.asin(q*T+U*C),I=Math.sqrt(2/(1+Math.cos(j)*Math.cos(x))),G=I*Math.cos(x)*Math.sin(j),K=I*Math.sin(x),[_t,At,Zt,Ct,lt,pe,te]=ht;return F((At+_t*G-lt)*te,(pe-(Ct-Zt*K))*te)}let $t=new Map(b.map((l,f)=>[l.id,f]));function Yt(l){if(l.g)return l.g;let f=[],v=[],y=[0],T=0;return l.segs.forEach((C,L)=>{let U=A[C];U.p.forEach((O,q)=>{L&&!q||(f.push(O),v.push(T+U.c[q]))}),T+=U.L,y.push(T)}),l.g={pts:f,cum:v,stopD:y}}function ze(l,f,v,y){let T=1e18,C=0;for(let L=0;L+1<l.pts.length;L++){if(l.cum[L+1]<v||l.cum[L]>y)continue;let U=l.pts[L],O=l.pts[L+1],q=O[0]-U[0],j=O[1]-U[1],x=q*q+j*j||1e-9,I=Math.max(0,Math.min(1,((f[0]-U[0])*q+(f[1]-U[1])*j)/x)),G=U[0]+q*I-f[0],K=U[1]+j*I-f[1],_t=G*G+K*K;_t<T&&(T=_t,C=l.cum[L]+I*(l.cum[L+1]-l.cum[L]))}return{d:C,err:Math.sqrt(T)}}function Ee(l,f){let v=0,y=l.cum.length-1;if(f<=0)return l.pts[0];if(f>=l.cum[y])return l.pts[y];for(;y-v>1;){let U=v+y>>1;l.cum[U]<=f?v=U:y=U}let T=(f-l.cum[v])/(l.cum[y]-l.cum[v]||1),C=l.pts[v],L=l.pts[y];return[C[0]+(L[0]-C[0])*T,C[1]+(L[1]-C[1])*T]}let Ne=l=>`${l.slice(6,8)}/${l.slice(4,6)}`,mt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function xt(l){let f={};return mt.formatToParts(l).forEach(v=>f[v.type]=v.value),{ymd:f.year+f.month+f.day,min:+f.hour*60+ +f.minute+ +f.second/60}}let Rt=0,ee=null,Xt=0,ce=0;function ne(){let l=xt(new Date);if(Rt===0&&ee==null)return{...l,live:!0};let f=ee==null?l.min:Xt+(Rt?(performance.now()-ce)/6e4*Rt:0);return{ymd:l.ymd,min:f,live:!1}}let it=l=>(l=(Math.floor(l+1e-6)%1440+1440)%1440,String(Math.floor(l/60)).padStart(2,"0")+":"+String(l%60).padStart(2,"0")),Et="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let l=new URLSearchParams(location.search).get("rt");l&&localStorage.setItem("rod_rt",l);let f=localStorage.getItem("rod_rt");f&&/jhmuyo\.workers\.dev/.test(f)&&(f=Et,localStorage.setItem("rod_rt",f)),H.url=f||Et}catch{H.url=Et}let Tt=(l,f)=>fetch(l+f,{cache:"no-store"}).then(v=>{if(!v.ok)throw new Error("HTTP "+v.status);return v.json()}),Ut=l=>/^51/.test(l||"");async function le(){if(!H.url){Pe();return}let l=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&Tt(l,"/reports.json").then(O=>{O&&Array.isArray(O.items)?(H.rep=O.items,H.repSkew=(O.now||Date.now())-Date.now(),O.tipos&&(H.tipos=O.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let f=!H.adifAt||Date.now()-H.adifAt>11e4,[v,y,T,C,L]=await Promise.allSettled([Tt(l,"/trip_updates.json"),Tt(l,"/vehicle_positions.json"),Tt(l,"/alerts.json"),Tt(l,"/notices.json"),f?Tt(l,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?(H.adif=L.value,H.adifAt=Date.now()):f&&(H.adifAt=Date.now()-6e4),v.status==="fulfilled"){let O=new Map,q=new Map;for(let j of v.value.entity||[]){let x=j.tripUpdate;if(!x||!x.trip||!Ut(x.trip.tripId))continue;let I=x.trip.tripId,G=(x.stopTimeUpdate||[])[0],K=x.delay;K==null&&G&&(K=(G.arrival||G.departure||{}).delay),x.trip.scheduleRelationship==="CANCELED"&&(K="X"),K!=null&&O.set(I,K),q.set(I,{next:G?{sid:G.stopId,t:+((G.arrival||G.departure||{}).time||0)}:null})}H.delays=O,H.tu=q,H.ok=Date.now(),H.feedTs=+((v.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=v.reason&&v.reason.message||__t(0);if(y.status==="fulfilled"){let O=new Map,q=Date.now()/1e3;for(let j of y.value.entity||[]){let x=j.vehicle;if(!x||!x.trip||!Ut(x.trip.tripId)||!x.position)continue;let I=x.vehicle&&x.vehicle.label||"",G=I.match(/PLATF\.\(([^)]+)\)/),K=H.vp.get(x.trip.tripId),_t={tid:x.trip.tripId,w:yt(+x.position.longitude,+x.position.latitude),st:x.currentStatus||"",sid:x.stopId||"",ts:+x.timestamp||q,label:I,plat:G?G[1]:"",fam:(I.split("-")[0]||"").trim(),num:x.vehicle&&x.vehicle.id||""};_t.disp=K?K.disp:null,O.set(_t.tid,_t)}H.vp=O,H.okVP=Date.now()}let U=[];if(C.status==="fulfilled"&&Array.isArray(C.value.included)){H.okNotices=Date.now();for(let O of C.value.included){let q=new Set((O.lines||[]).map(K=>K.id).filter(K=>X[K])),j=(K,_t)=>{K=K||{},_t=_t||window.__L;let At=K[_t];return _t==="en"&&At&&(At===K.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(At))&&(At=""),(At||K.es||K.ca||"").trim()},x=K=>[j(O.description,K),j(O.title,K)].sort((_t,At)=>At.length-_t.length)[0],I=x(),G=x("es");I&&U.push({id:"N"+O.externalId,fams:q,stops:new Set,txt:I,es:G,when:(O.date||"")+"T"+(O.time||""),src:"Rodalies",core:O.core||""})}}if(T.status==="fulfilled"){let O=+((T.value.header||{}).timestamp||0);if(H.alertsTs=O,Date.now()/1e3-O<6*3600)for(let q of T.value.entity||[]){let j=q.alert;if(!j)continue;let x=new Set,I=new Set;for(let At of j.informedEntity||[])(At.routeId||"").startsWith("51")&&x.add(At.routeId.replace(/^51T\d+/,"")),At.stopId&&$t.has(At.stopId)&&I.add($t.get(At.stopId));if(!x.size&&!I.size)continue;let G=(j.descriptionText||j.headerText||{translation:[]}).translation||[],K=((G.find(At=>At.language==="es")||G[0]||{}).text||"").trim(),_t=+((j.activePeriod||[])[0]||{}).start||0;U.some(At=>At.txt===K)||U.push({id:q.id,fams:x,stops:I,txt:K,when:_t?new Date(_t*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[O,q]of(H.adif.items||[]).entries()){let j=(q.t?q.t+". ":"")+q.txt,x=new Set,I=new Set,G=S(j);for(let K of j.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[K[1]]&&x.add(K[1]);b.forEach((K,_t)=>{K.fams.size&&K.n.length>4&&G.includes(S(K.n))&&(I.add(_t),x.size||K.fams.forEach(At=>x.add(At)))}),U.some(K=>K.txt===j)||U.push({id:"A"+O,fams:x,stops:I,txt:j,when:H.adif.upd||"",src:"Adif",lvl:q.lvl})}if(C.status==="fulfilled"||T.status==="fulfilled"||H.adif){H.alerts=U.sort((O,q)=>q.when>O.when?1:-1);try{Jg()}catch{}}Pe(),iu(),et=0,a()}let oe=()=>H.okVP&&Date.now()-H.okVP<9e4,ue={at:0,v:!1},xe=()=>{if(!oe()||H.vp.size>0)return!1;if(Date.now()-ue.at>3e4){ue.at=Date.now();let l=xt(new Date),f=t.days.indexOf(l.ymd),v=0;if(f>=0)for(let y of Q[f]){let T=l.min-y.t0;T>y.pat.t[1]+2&&T<y.pat.t[y.pat.t.length-2]-2&&v++}ue.v=v>=6}return ue.v},z=()=>oe()&&!xe();function Pe(){let l=m("#rtst"),f=m("#mode");if(f){let y=!!z()&&ne().live;f.classList.toggle("on",y),f.classList.toggle("pre",!y),f.textContent=y?__t(1):ge.cur?__t(2):__t(3),f.classList.toggle("past",!!ge.cur);let T=m("#rcgrab");if(T){let C=T.querySelector(".rdot");C||(C=document.createElement("b"),C.className="rdot",T.insertBefore(C,T.firstChild)),C.className="rdot "+(ge.cur?"past":y?"on":"pre"),C.title=f.textContent}f.title=ge.cur?`${__t(4)}${ge.cur.sn.t}${__t(5)}`:""}if(!l)return;H.url?H.err?l.textContent=__t(7)+H.err+__t(8):z()?l.innerHTML=`${__t(9)}${H.vp.size}${__t(10)}${H.delays.size}${__t(11)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:xe()?l.textContent=__t(12):l.textContent=__t(13):l.textContent=H.err||__t(6);let v=m("#rturl");v&&v._shown!==H.url&&(v.value=H.url,v._shown=H.url)}m("#rtsave").onclick=()=>{let l=m("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(l&&!/^https?:\/\//.test(l)&&(l="https://"+l),!l){H.err=__t(14),Pe();return}H.url=l;try{localStorage.setItem("rod_rt",l)}catch{}H.ok=0,H.err="",Pe(),le()},m("#rtoff").onclick=()=>{H.url=Et;try{localStorage.removeItem("rod_rt")}catch{}u._h="",le()},setInterval(le,2e4),setTimeout(le,50);let ge={snap:null,key:""};function P(){let l=ne();if(l.live||!Ce.hoy||!Ce.hoy.snaps||Rt&&ee==null)return null;let f=xt(new Date).min;if(l.min>f+1)return null;let v=null;for(let y of Ce.hoy.snaps){if(!y.d)continue;let T=Af(y.t);T<=l.min+1&&(!v||T>v.m)&&(v={m:T,sn:y})}return v&&l.min-v.m<=25?v:null}let M=l=>{{let T=jh(l.num);if(T&&T.cx&&ne().live)return"X"}let f=ge.cur;if(f){if(f.sn.x&&f.sn.x.includes(l.tid))return"X";let T=f.sn.d[l.tid];return T??0}if(!z())return null;let v=H.delays.get(l.tid),y=H.vp.get(l.tid);return v==="X"?v:y&&y.pre&&y.preDl>=1?Math.max(typeof v=="number"?v:0,y.preDl*60):v??null},Y=new Set(V);try{let l=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(l)&&l.some(f=>V.includes(f))&&(Y.clear(),l.forEach(f=>V.includes(f)&&Y.add(f)))}catch{}let at=new ps,ft=new ps,Lt=new Yi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Nt=new Yi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),pt=new pr(at,Lt),vt=new pr(ft,Nt);vt.renderOrder=20,pt.renderOrder=21,pt.frustumCulled=vt.frustumCulled=!1,e.add(vt,pt);function Ft(l){let f=l[0]/o+c,v=l[1]/o+h;for(let y of R){if(y._bb===void 0){let C=1e9,L=1e9,U=-1e9,O=-1e9;for(let q of y.rings||[]){let j=q[0]||[];for(let x=0;x<j.length;x+=2)j[x]<C&&(C=j[x]),j[x]>U&&(U=j[x]),j[x+1]<L&&(L=j[x+1]),j[x+1]>O&&(O=j[x+1])}y._bb=[C,L,U,O]}let T=y._bb;if(!(f<T[0]||f>T[2]||v<T[1]||v>T[3]))for(let C of y.rings||[]){let L=C[0]||[],U=!1;for(let O=0,q=L.length,j=q-2;O<q;j=O,O+=2){let x=L[O+1],I=L[j+1];x>v!=I>v&&f<(L[j]-L[O])*(v-x)/(I-x)+L[O]&&(U=!U)}if(U)return!0}}return!1}let ie=!1;function Gt(){ie||!R.length||(ie=!0,b.forEach(l=>{l.ext=!Ft(l.w)}),A.forEach(l=>{l.ext=!Ft(l.p[0])&&!Ft(l.p[l.p.length-1])&&!Ft(l.p[l.p.length>>1])}))}let Bt=()=>{let l=new Set(Y.size<=2?Y:[]);try{ut&&ut.fam&&l.add(ut.fam)}catch{}return l},se="";function he(){Gt();let l=[],f=[],v=new Set,y=new fe,T=new fe("#d2d0d0"),C=Bt();se=[...C].join();for(let L of V)if(Y.has(L))for(let U of J[L]){if(v.has(U))continue;v.add(U);let O=A[U].p;y.set(X[L]),A[U].ext&&!C.has(L)&&y.lerp(T,.55);for(let q=0;q+1<O.length;q++)l.push(O[q][0],O[q][1],B,O[q+1][0],O[q+1][1],B),f.push(y.r,y.g,y.b,y.r,y.g,y.b)}l.length||(l.push(0,0,-50,0,0,-50),f.push(0,0,0,0,0,0)),at.setPositions(l),at.setColors(f),ft.setPositions(l),a()}he();let Se=l=>new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe(l)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Z=new fn,Dt=b.length,gt=new Float32Array(Dt*3),kt=new Float32Array(Dt*3),Wt=new Float32Array(Dt),Mt=new Float32Array(Dt);b.forEach((l,f)=>{gt[f*3]=l.w[0],gt[f*3+1]=l.w[1],gt[f*3+2]=B,kt.set([1,1,1],f*3),Wt[f]=6,Mt[f]=1.6}),Z.setAttribute("position",new Je(gt,3)),Z.setAttribute("fill",new Je(kt,3)),Z.setAttribute("size",new Je(Wt,1)),Z.setAttribute("bw",new Je(Mt,1));let re=Se("#1d2330"),jt=new ar(Z,re);jt.renderOrder=22,jt.frustumCulled=!1,e.add(jt);function Re(){let l=r.dist<45,f=Bt();b.forEach((v,y)=>{let T=[...v.fams].some(L=>Y.has(L)),C=v.ext&&![...v.fams].some(L=>f.has(L))&&y!==bt;Wt[y]=T?y===bt?13:C?3:l?8:5:0,Mt[y]=y===bt?3:1.6}),Z.attributes.size.needsUpdate=!0,Z.attributes.bw.needsUpdate=!0}let Te=600,pn=new fn,Wn=new Float32Array(Te*3),yr=new Float32Array(Te*3),_a=new Float32Array(Te),xa=new Float32Array(Te);pn.setAttribute("position",new Je(Wn,3)),pn.setAttribute("fill",new Je(yr,3)),pn.setAttribute("size",new Je(_a,1)),pn.setAttribute("bw",new Je(xa,1));let es=new Float32Array(Te);pn.setAttribute("ang",new Je(es,1));let Yh=new In({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Sr=new ar(pn,Yh);Sr.renderOrder=24,Sr.frustumCulled=!1,e.add(Sr);let Ni=new fn,fi=new Float32Array(Te*3),Mr=new Float32Array(Te*3),va=new Float32Array(Te),ya=new Float32Array(Te);Ni.setAttribute("position",new Je(fi,3)),Ni.setAttribute("fill",new Je(Mr,3)),Ni.setAttribute("size",new Je(va,1)),Ni.setAttribute("bw",new Je(ya,1));let xs=new ar(Ni,Se("#ffffff"));xs.renderOrder=23,xs.frustumCulled=!1,e.add(xs);function Sa(l,f){let v=A[l],y=f*v.L,T=0,C=v.c.length-1;for(;C-T>1;){let j=T+C>>1;v.c[j]<=y?T=j:C=j}let L=v.c[C]-v.c[T]||1,U=(y-v.c[T])/L,O=v.p[T],q=v.p[C];return[O[0]+(q[0]-O[0])*U,O[1]+(q[1]-O[1])*U]}let zs=l=>l*l*(3-2*l)*.35+l*.65;function Vs(l,f){let v=l.pat.t,y=l.pat.stops.length,T=v[2*y-2];if(f<v[1]-2||f>T+1)return null;if(f<=v[1])return{w:b[l.pat.stops[0]].w,at:0,next:0,moving:!1};for(let C=0;C<y-1;C++){let L=v[2*C+1],U=v[2*C+2],O=v[2*C+3];if(f<=U){let q=U>L?(f-L)/(U-L):1;return{w:Sa(l.pat.segs[C],zs(_(q,0,1))),at:-1,next:C+1,prev:C,moving:!0}}if(f<=O)return{w:b[l.pat.stops[C+1]].w,at:C+1,next:C+1,moving:!1}}return{w:b[l.pat.stops[y-1]].w,at:y-1,next:y-1,moving:!1}}function vs(l){let f=t.days.indexOf(l.ymd),v=[];if(f<0)return{k:f,out:v};let y=(T,C)=>{for(let L of T){if(!Y.has(L.fam))continue;let U=M(L);if(U==="X")continue;let O=(U||0)/60,q=l.min+C-L.t0-O;if(q<-2||q>L.pat.t[L.pat.t.length-2]+1)continue;let j=Vs(L,q);j&&v.push({tr:L,p:j,rel:q,dl:O,live:U!=null})}};return y(Q[f],0),f>0&&y(Q[f-1],1440),{k:f,out:v}}function Zh(l,f,v,y){let T=l.pat.stops[0],C=f.dep0,L=null,U=(q,j)=>{for(let x of q||[]){let I=x.pat.stops,G=I.length;if(I[G-1]!==T||x===l)continue;let K=x.t0+x.pat.t[2*(G-1)]-j;if(K>C+5||K<C-120)continue;let _t=Yt(x.pat),At=ze(_t,f.w,-1,1e9);if(At.err>.6)continue;let Zt=_t.stopD,Ct=x.pat.t,lt=Zt.findIndex(de=>de>At.d);lt<0&&(lt=G-1);let pe=lt===0?Ct[1]:Ct[2*lt-1]+(Zt[lt]>Zt[lt-1]?(At.d-Zt[lt-1])/(Zt[lt]-Zt[lt-1]):1)*(Ct[2*lt]-Ct[2*lt-1]),te=v-(x.t0+pe-j);te<-5||te>120||(!L||Math.abs(te)<Math.abs(L.prevDl))&&(L={prevTr:x,dPrev:At.d,prevDl:te,arrO:K+Math.max(0,te)})}};if(U(Q[y],0),y>0&&U(Q[y-1],1440),!L)return{prevTr:null,preDl:0};let O=Math.max(C,L.arrO+3);return{...L,depEst:O,preDl:Math.max(0,O-C)}}function Jh(l,f,v){let y=l.pat.t,T=f.length;if(!(v>=0))return v<0?f[0]:null;for(let C=0;C<T;C++)if(v<=y[2*C+1]){if(v>=y[2*C]||C===0)return f[C];let L=y[2*C-1],U=y[2*C];return f[C-1]+(f[C]-f[C-1])*(U>L?(v-L)/(U-L):1)}return f[T-1]}let el=performance.now();function Kh(){let l=[],f=Date.now()/1e3,v=performance.now(),y=Math.min(1,(v-el)/1e3);el=v;for(let T of H.vp.values()){let C=ct.get(T.tid),L=C?C.fam:T.fam;if(L&&X[L]&&!Y.has(L))continue;let U=H.delays.get(T.tid),O=typeof U=="number"?U/60:0,q=Math.max(0,f-T.ts);T.mvTs!==T.ts&&((!T.mvW||Math.hypot(T.w[0]-T.mvW[0],T.w[1]-T.mvW[1])>.025)&&(T.mvW=T.w,T.mvAt=T.ts),T.mvTs=T.ts),T.still=T.ts-(T.mvAt||T.ts);let j=T.w,x=-1;if(C){let G=Yt(C.pat),K=G.stopD;if(T.dObs==null||T.obsAt!==T.ts){let lt=ze(G,T.w,-1,1e9);T.dObs=lt.d,T.err=lt.err,T.obsAt=T.ts}let _t=ne(),At=t.days.indexOf(_t.ymd),Zt=C.day===At-1?1440:0,Ct=C.t0+C.pat.t[1]-Zt;if(T.pre=_t.min+O<Ct-1&&(T.dObs>K[0]+.35||T.err>.6)&&!(T.st==="STOPPED_AT"&&T.sid===b[C.pat.stops[0]].id),T.dep0=Ct,T.pre){if(T.atStop=-1,T.next=0,x=0,T.disp=null,T.prevAt!==T.ts&&(T.prevAt=T.ts,Object.assign(T,Zh(C,T,_t.min,At))),T.prevTr){let lt=Yt(T.prevTr.pat);j=Ee(lt,T.dPrev)}}else if(T.err<=.6){let lt=K.findIndex(de=>de>T.dObs+.08);lt<0&&(lt=K.length-1);let pe=K.reduce((de,nn,on)=>Math.abs(nn-T.dObs)<Math.abs(K[de]-T.dObs)?on:de,0);T.atStop=Math.abs(K[pe]-T.dObs)<.16?pe:-1,T.next=lt,x=lt;let te=T.dObs;if(T.st==="STOPPED_AT"&&T.atStop>=0)te=K[T.atStop];else if(lt>0){let de=(C.pat.t[2*lt]-C.pat.t[2*lt-1])*60,nn=de>0?(K[lt]-K[lt-1])/de:0,on=ne(),qt=t.days.indexOf(on.ymd),_n=C.day===qt-1?1440:0,ss=Jh(C,K,on.min+_n-C.t0-O),xn=T.dObs+nn*Math.min(q,60);ss!=null&&(xn=Math.min(xn,Math.max(T.dObs,ss))),te=Math.max(T.dObs,Math.min(K[lt]-.03,xn))}T.disp==null||Math.abs(T.disp-te)>1.2?T.disp=te:te>T.disp&&(T.disp+=(te-T.disp)*Math.min(1,y*1.5)),j=Ee(G,T.disp)}else if(T.err>2){let lt=ne(),pe=t.days.indexOf(lt.ymd),te=C.day===pe-1?1440:0,de=Vs(C,lt.min+te-C.t0-O);de&&(j=de.w,T.est=!0,x=de.next),T.atStop=-1,T.next=de?de.next:-1}else T.atStop=-1,T.next=-1}let I=T.pre?"":T.st==="STOPPED_AT"&&T.atStop>=0||T.atStop>=0&&T.still>30?"st":T.still>=90?"via":"";l.push({tr:C,v:T,w:j,stop:I,p:{w:j},fam:L||"?",c:C?C.c:X[L]||"#6b7385",dl:O,live:!0,real:!0,idx:x,age:q,cancel:U==="X"})}return l}let Xn=new Map,w=!1,k=!1,st="",tt=[],et=0,It=null,ut=null,bt=-1,Pt=!1,Qt=0,we="";function Ae(l){let f=Rt>0||z()&&ee==null||!!ut,v=window.__mapHidden?1e3:f?50:250;if(l-et<v)return!1;et=l,[...Bt()].join()!==se&&(he(),Re());{let x=P(),I=x?x.sn.t:"";ge.cur=x,I!==ge.key&&(ge.key=I,Pe()),!x&&!ne().live&&!Ce.at&&He()}let y=ne(),T=z()&&y.live,C=T?{k:t.days.indexOf(y.ymd),out:Kh()}:vs(y);tt=C.out;let L=new fe,U=0,O=0;for(let x of tt){if(U>=Te)break;Wn[U*3]=x.p.w[0],Wn[U*3+1]=x.p.w[1],Wn[U*3+2]=B+.02;let I=null;if(x.real&&x.v.pre&&x.v.prevTr)I=Ee(Yt(x.v.prevTr.pat),x.v.dPrev+.35);else if(x.real&&x.tr&&!x.v.pre&&x.v.err<=.6&&x.v.disp!=null&&!(x.v.st==="STOPPED_AT"&&x.v.atStop>=0))I=Ee(Yt(x.tr.pat),x.v.disp+.35);else if(!x.real&&x.p.moving){let Zt=x.tr.pat.t,Ct=x.p.prev,lt=Zt[2*Ct+1],pe=Zt[2*Ct+2],te=pe>lt?(x.rel-lt)/(pe-lt):1;I=Sa(x.tr.pat.segs[Ct],Math.min(1,zs(_(te,0,1))+.04))}let G=x.real?!!x.stop:!x.p.moving;if(x.broke=vf(x),x.broke)es[U]=85;else if(G)es[U]=75;else if(I){let Zt=nl(x.p.w),Ct=nl(I),lt=Ct[0]-Zt[0],pe=Ct[1]-Zt[1];es[U]=Math.hypot(lt,pe)>.05?Math.atan2(lt,-pe):99}else es[U]=99;L.set(x.c||x.tr.c),yr[U*3]=L.r,yr[U*3+1]=L.g,yr[U*3+2]=L.b;let K=x.tr?x.tr===ut:ut&&ut.vtid===x.v.tid;_a[U]=K?22:r.dist<45?17:14,xa[U]=K?3.5:2.2;let _t=x.real&&x.stop==="via"||!!x.broke,At=x.cancel||x.broke?[.86,.15,.15]:x.dl>10?[.86,.15,.15]:x.dl>5?[.92,.48,.05]:x.dl>=1?[.98,.8,.08]:[.09,.64,.29];(x.live&&x.dl>=5||K||_t)&&(fi[O*3]=x.p.w[0],fi[O*3+1]=x.p.w[1],fi[O*3+2]=B+.01,Mr.set(K?At:_t?[.86,.15,.15]:[.98,.45,.09],O*3),va[O]=_a[U]+(K?16+5*Math.sin(l/220):_t?10+3*Math.sin(l/400):8),ya[O]=K?2:3,O++),U++}if(pn.setDrawRange(0,U),Ni.setDrawRange(0,O),["position","fill","size","bw"].forEach(x=>{pn.attributes[x].needsUpdate=!0,Ni.attributes[x].needsUpdate=!0}),pn.attributes.ang.needsUpdate=!0,It){let x=tt.find(I=>I.tr===It);if(x){let I=0,G=innerHeight,K=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,_t=m("#rc").getBoundingClientRect();innerWidth<=640&&(K&&(I=K.bottom),G=Math.min(G,_t.top));let At=I+(G-I)/2,Zt=At-innerHeight/2,Ct=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=x.p.w[0]-Math.sin(r.yaw)*Zt*Ct,s.ty=x.p.w[1]+Math.cos(r.yaw)*Zt*Ct}else z()&&ne().live&&(It=null)}let q=it(Math.floor(y.min+1e-6));q!==we&&(we=q,m("#ctime").textContent=q),m("#ntr").textContent=String(tt.length),m("#ntrl").textContent=T?__t(15):__t(16);{let x=Y.size<V.length?[...Y].sort(D).join(", "):"",I=m("#ccount"),G=ge.cur?`\u23EA ${tt.length}${__t(17)}${ge.cur.sn.t} \xB7 ${Object.values(ge.cur.sn.d).filter(K=>K>=60).length}${__t(18)}`:!y.live&&y.min<xt(new Date).min-1&&!Rt?`${__t(19)}${Ce.hoy&&Ce.hoy.snaps&&Ce.hoy.snaps.some(K=>K.d)?`${__t(20)}${Ce.hoy.snaps.find(K=>K.d).t}`:__t(21)}`:`\u{1F686} ${tt.length} ${T?__t(22):__t(23)}${x?` <small>\xB7 ${p(x)}</small>`:""}${T&&H.okVP?(()=>{let K=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${K<3?" new":""}">\u25CF ${__t(24)}${Os(K+" s")}</small>`})():""}`;I&&I._t!==G&&(I.innerHTML=G,I._t=G)}let j=new Date;if(m("#cdate").textContent=y.live?__t(25):Rt?__t(26)+Rt:gi?__t(27):__t(28),C.k<0?m("#src").innerHTML=`${__t(29)}${Ne(t.days[0])}${__t(30)}${Ne(t.days[t.days.length-1])}${__t(31)}`:T?m("#src").textContent=`${__t(32)}${Os(Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(x=>x.ts),0)))+" s")}`:xe()&&y.live?m("#src").innerHTML=__t(33):m("#src").innerHTML=__t(34)+(H.url?__t(35):__t(36))+__t(37),y.live){let x=Math.round(y.min),I=m("#tsl");document.activeElement!==I&&(I.value=x<240?x+1440:x)}{let x=ut?String(ut.num||ut.vtid||""):"";x!==Ae._sk&&(Ae._sk=x,$e(!0))}return $e(),l-Qt>3e3&&(ut||bt>=0||Pt||k||st)&&(Qt=l,Ue()),Pe(),!0}let Kt=-1,Le=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),en=[],Oe=document.createElement("button");Oe.type="button",Oe.id="mbtn",Oe.title=__t(38),Oe.innerHTML=__t(39),Oe.onclick=()=>{Le=!Le;try{localStorage.setItem("rod_mun",Le?"1":"")}catch{}Oe.classList.toggle("on",Le),a(),ai()},Oe.classList.toggle("on",Le),document.body.appendChild(Oe);let Xe=R.slice().sort((l,f)=>f.pop-l.pop);function bn(l){if(l._a)return l._a;let f=null,v=0;for(let y of l.rings||[]){let T=y[0];if(!T)continue;let C=0,L=0,U=0;for(let O=0,q=T.length;O<q;O+=2){let j=T[O],x=T[O+1],I=T[(O+2)%q],G=T[(O+3)%q],K=j*G-I*x;C+=K,L+=(j+I)*K,U+=(x+G)*K}Math.abs(C)>v&&(v=Math.abs(C),f=[L/(3*C),U/(3*C)])}return l._a=f?[(f[0]-c)*o,(f[1]-h)*o]:[l.cx,l.cy]}let Jt=l=>l>=1e5?1:l>=2e4?2:l>=5e3?3:4,Ln=[0,7.6,6.7,6,5.4],Be=[0,17,15,13,12],jn=l=>l.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function ai(){let l=s.tilt<.06&&r.tilt<.08;Oe.classList.toggle("show",l);let f=0;if(Le&&l){let v=[...document.querySelectorAll(".plab, .slab")].filter(C=>C.offsetParent!==null||C.style.display==="block").map(C=>{let L=C.getBoundingClientRect();return[L.left-2,L.top-2,L.right+2,L.bottom+2]}).filter(C=>C[2]>C[0]),y=r.dist,T=y>160?5e4:y>130?2e4:y>105?8e3:y>80?3e3:y>62?800:0;for(let C of Xe){let L=Jt(C.pop);if(C.pop<T)break;let U=bn(C);if(mn.set(U[0],U[1],B).project(n),Math.abs(mn.x)>1.02||Math.abs(mn.y)>1.02)continue;let O=(mn.x*.5+.5)*innerWidth,q=(-mn.y*.5+.5)*innerHeight,j=jn(C.name),x=j.length*Ln[L]+8,I=Be[L],G=[O-x/2,q-I/2,O+x/2,q+I/2];if(v.some(_t=>G[0]<_t[2]&&_t[0]<G[2]&&G[1]<_t[3]&&_t[1]<G[3]))continue;v.push(G);let K=en[f]||(en[f]=Object.assign(document.createElement("div"),{className:"mlab"}));K.isConnected||document.body.appendChild(K),K._n!==j&&(K.textContent=j,K._n=j),K._t!==L&&(K.className="mlab t"+L,K._t=L),K.style.transform=`translate(${Math.round(O)}px,${Math.round(q)}px) translate(-50%,-50%)`,K.style.display="block",f++}}for(;f<en.length;f++)en[f].style.display="none"}let Ce={at:0,hoy:null,ayer:null,err:""},ys="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function He(){Date.now()-Ce.at<5*6e4||(Ce.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(l=>fetch(ys+l+".json",{cache:"no-store"}).then(f=>f.ok?f.json():null).catch(()=>null))).then(([l,f,v])=>{Ce.hoy=l,Ce.ayer=f,Ce.hist=v,Ce.tr=null,Ce.err=l?"":__t(40),k&&(u._h="",Ue()),$e(!0)}))}function an(l){let f={};for(let y of l&&l.snaps||[])for(let T of y.r||[]){let C=/^\d+[A-Z](\d+)/.exec(T);C&&(f[C[1]]=f[C[1]]||[]).push(Math.max(0,y.d&&y.d[T]||0)/60)}let v={};for(let y in f){let T=f[y].sort((C,L)=>C-L);v[y]=Math.round(T[T.length>>1])}return v}function pi(l){if(!Ce.tr){let v=new Map;for(let y of Ce.hist&&Ce.hist.days||[])v.set(y.day,y.tr);for(let y of[Ce.ayer,Ce.hoy])if(y&&y.day&&!v.has(y.day)){let T=an(y);Object.keys(T).length&&v.set(y.day,T)}Ce.tr=v}let f=[...Ce.tr.values()].map(v=>v[String(l)]).filter(v=>v!=null);return f.length?{n:f.length,late:f.filter(v=>v>=5).length,avg:f.reduce((v,y)=>v+y,0)/f.length}:null}let ke=l=>l>=90?"g":l>=80?"y":l>=65?"w":"b",wn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},ns=l=>l>10?wn.b:l>5?wn.w:l>=1?wn.y:wn.g,Ui=l=>(l>=.05?"+":"")+(Math.round(l*10)/10).toString().replace(".",",")+" min";function Ma(l,f,v){return`<div class="sbars">${l.map(y=>`<div class="sbar" title="${p(y.tip||"")}"><span class="sl">${y.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(y.w*100))}%;background:${y.c}"></i></span><b class="sv" style="color:${y.c===wn.y?"var(--svy,#a16207)":y.c===wn.w?"var(--svw,#c2410c)":y.c}">${y.val}</b></div>`).join("")}</div>`}function Ag(l){if(l=(l||[]).filter(U=>U.n>=10),!l||l.length<2){let U=l&&l[0];return U?`${__t(41)}${U.t}: ${Math.round(U.ok/U.n*100)}${__t(42)}${U.n}${__t(43)}`:__t(44)}let f=300,v=92,y=22,T=U=>y+U*(f-y-6)/(l.length-1),C=U=>6+(100-U)/100*(v-22),L=l.map((U,O)=>[T(O),C(U.n?U.ok/U.n*100:100),U]);return`<svg class="schart" viewBox="0 0 ${f} ${v}${__t(45)}${[100,75,50].map(U=>`<line x1="${y}" x2="${f-4}" y1="${C(U)}" y2="${C(U)}" class="gl"/><text x="2" y="${C(U)+3}" class="ax">${U}%</text>`).join("")}
      <polyline points="${L.map(U=>U[0].toFixed(1)+","+U[1].toFixed(1)).join(" ")}" class="ln"/>
      ${L.map(([U,O,q])=>`<circle cx="${U.toFixed(1)}" cy="${O.toFixed(1)}" r="5" class="pt"><title>${q.t} \xB7 ${q.n?Math.round(q.ok/q.n*100):100}${__t(46)}${q.n}${__t(47)}${q.d5}${__t(48)}${Ui(q.avg)}${q.nd?` \xB7 ${q.nd}${__t(49)}`:""}</title></circle>`).join("")}
      <text x="${y}" y="${v-3}" class="ax">${l[0].t}</text><text x="${f-4}" y="${v-3}" class="ax" text-anchor="end">${l[l.length-1].t}</text></svg>`}function Cg(){He();let l=ne(),f=tt.filter(U=>U.real&&z()&&l.live),v=f.filter(U=>H.delays.has(U.v.tid)),y=v.length,T=f.length-y,C=`${__t(50)}`;if(y){let U=v.filter(Ct=>Ct.dl<3).length,O=v.filter(Ct=>Ct.dl>=5).length,q=v.filter(Ct=>Ct.stop==="via").length,j=Math.round(U/y*100);C+=`${__t(51)}${y}${__t(52)}${T?` \xB7 ${T}${__t(57)}`:""}</small><div class="kpis">
        <div class="kpi ${ke(j)}"><b>${j}${__t(53)}${ke(100-O/y*100*2)}" title="${Math.round(O/y*100)}${__t(54)}${O}${__t(55)}${q===0?"g":q<=2?"w":"b"}"><b>${q}${__t(56)}`;let x=new Map;v.forEach(Ct=>{let lt=Ct.fam,pe=x.get(lt)||{n:0,ok:0,sum:0};pe.n++,pe.ok+=Ct.dl<3,pe.sum+=Math.max(0,Ct.dl),x.set(lt,pe)});let I=[...x].filter(([Ct])=>X[Ct]).sort((Ct,lt)=>Ct[1].ok/Ct[1].n-lt[1].ok/lt[1].n||lt[1].sum/lt[1].n-Ct[1].sum/Ct[1].n),G=I.filter(([,Ct])=>Ct.ok<Ct.n),K=I.filter(([,Ct])=>Ct.ok===Ct.n);C+=`${__t(58)}`+(G.length?"":__t(59))+Ma(G.map(([Ct,lt])=>({lab:Dn(Ct),w:lt.ok/lt.n,c:wn[ke(lt.ok/lt.n*100)],val:`${Math.round(lt.ok/lt.n*100)}% <small>${Ui(lt.sum/lt.n)}</small>`,tip:`${Ct}: ${lt.ok}${__t(60)}${lt.n}${__t(61)}${Ui(lt.sum/lt.n)}`})))+(K.length?`${__t(62)}${K.map(([Ct])=>Dn(Ct)).join(" ")}</p>`:"");let _t=new Map;v.forEach(Ct=>{if(!Ct.tr||Ct.v.next==null||Ct.v.next<0||Ct.v.pre)return;let lt=Ct.tr.pat.stops[Ct.v.next],pe=_t.get(lt)||{n:0,sum:0};pe.n++,pe.sum+=Math.max(0,Ct.dl),_t.set(lt,pe)});let At=[..._t].filter(([,Ct])=>Ct.sum/Ct.n>=1).sort((Ct,lt)=>lt[1].sum/lt[1].n-Ct[1].sum/Ct[1].n).slice(0,8),Zt=At.length?At[0][1].sum/At[0][1].n:1;C+=`${__t(63)}`+(At.length?Ma(At.map(([Ct,lt])=>({lab:`<span class="sn" data-gs="${Ct}">${p(b[Ct].n)}</span>`,w:lt.sum/lt.n/Zt,c:ns(lt.sum/lt.n),val:`${Ui(lt.sum/lt.n)} <small>${lt.n} ${lt.n===1?"tren":__t(64)}</small>`,tip:`${b[Ct].n}: ${lt.n}${__t(65)}${Ui(lt.sum/lt.n)}${__t(66)}`}))):__t(67))}else C+=`${__t(68)}`;let L=Ce.hoy;C+=`<button type="button" class="hmore" data-cols>${Qn.on?__t(69):__t(70)}</button>`;{su("");let U=[...Gs.m].filter(([O,q])=>X[O]&&q[0]>=3).map(([O,q])=>[O,q[1]/q[0]]).sort((O,q)=>O[1]-q[1]);U.length&&(C+=`${__t(71)}`+Ma(U.slice(0,8).map(([O,q])=>({lab:Dn(O),w:q,c:wn[ke(q*100)],val:`${Math.round(q*100)}%`,tip:`${O}: ${Math.round(q*100)}${__t(72)}`}))))}{let U=j=>{let x=(j&&j.snaps||[]).filter(K=>K.n),I=x.reduce((K,_t)=>K+_t.n,0),G=x.reduce((K,_t)=>K+_t.ok,0);return I?G/I*100:null},O=U(Ce.hoy),q=U(Ce.ayer);O!=null&&(C+=`${__t(73)}${ke(O)}">${Math.round(O)}${__t(74)}${q!=null?`${__t(75)}${ke(q)}">${Math.round(q)} %</b></span><span>${O>=q?__t(77):__t(78)}${__t(76)}`:""}</div>`)}if(C+=`${__t(79)}`,L&&L.snaps){C+=Ag(L.snaps);let U=Object.entries(L.st||{}).map(([j,x])=>[$t.get(j),x]).filter(([j,x])=>j!=null&&x.n>=3).map(([j,x])=>[j,x.sum/x.n/60,x]).filter(j=>j[1]>=1).sort((j,x)=>x[1]-j[1]).slice(0,8);if(U.length){let j=U[0][1];C+=`${__t(80)}`+Ma(U.map(([x,I,G])=>({lab:`<span class="sn" data-gs="${x}">${p(b[x].n)}</span>`,w:I/j,c:ns(I),val:`${Ui(I)}${__t(81)}${Math.round(G.max/60)}</small>`,tip:`${b[x].n}: ${G.n}${__t(82)}${G.d5}${__t(83)}${Math.round(G.max/60)} min`})))}let O=Object.entries(L.lines||{}).filter(([j,x])=>X[j]&&x.n>=3).sort((j,x)=>j[1].ok/j[1].n-x[1].ok/x[1].n);O.length&&(C+=`${__t(84)}`+Ma(O.map(([j,x])=>({lab:Dn(j),w:x.ok/x.n,c:wn[ke(x.ok/x.n*100)],val:`${Math.round(x.ok/x.n*100)}% <small>${Ui(x.sum/x.n/60)}</small>`,tip:`${j}${__t(85)}${Math.round(x.ok/x.n*100)}${__t(86)}${Math.round(x.max/60)} min`}))));let q=L.upd?(Date.now()-Date.parse(L.upd))/6e4:0;C+=`<small class="snote">${q>40?`${__t(88)}${Os(Math.round(q)+" min")}${__t(89)}`:""}${__t(87)}${p((L.upd||"").slice(11,16))} \xB7 ${(L.note||"").includes("Solo cuentan")?__t(90):__t(91)}</small>`}else C+=`<p class="snote">${Ce.at?__t(92):__t(93)}</p>`;return C+"</div>"}function Rg(l){let f=ne(),v=tt.filter(I=>(I.fam||I.tr&&I.tr.fam)===l),y=v.filter(I=>I.real),T=v.length,C=v.filter(I=>I.dl>=5).length,L=v.filter(I=>I.dl<3).length,U=v.filter(I=>I.stop==="via"||I.broke).length,O=H.alerts.filter(I=>I.fams.has(l)),q=I=>{let G=I.tr;if(!G)return"";let K=I.v;if(I.real&&K){let At=K.next>=0?b[G.pat.stops[K.next]].n:"";return K.atStop>=0?`${__t(94)}${b[G.pat.stops[K.atStop]].n}`:At?`${__t(95)}${At}`:""}let _t=I.p;return _t&&_t.next!=null&&_t.next>=0?`${__t(95)}${b[G.pat.stops[_t.next]].n}`:""},j=v.slice().sort((I,G)=>G.dl-I.dl).slice(0,40).map(I=>{let G=I.tr;return`<li class="go${Ta({num:G?G.num:I.v.num,tid:G?G.tid:I.v.tid})?" sel":""}" data-gt="${p(G?G.num:I.v.num)}|${p(I.real?I.v.tid:G?G.tid:"")}"><b>${p(G?G.num:I.v.num)}</b><span>${G?Fi(b[G.pat.stops[G.pat.stops.length-1]].n,l):""} <small>${p(q(I))}</small></span>${I.dl>=1?`<em class="dl ${Oi(I.dl)}">+${Math.round(I.dl)}</em>`:__t(96)}</li>`}).join(""),x=su(l);return`<div class="tc sts" style="--c:${X[l]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Dn(l)}${__t(97)}${f.live?`${__t(103)}${T}${__t(104)}${y.length<T?` (${y.length}${__t(105)}`:""}`:`${__t(106)}${it(f.min)}`}</small>
      <div class="kpis"><div class="kpi ${T?ke(L/T*100):""}"><b>${T?Math.round(L/T*100)+"%":"\u2014"}${__t(98)}${C?C/Math.max(1,T)>.2?"b":"w":"g"}"><b>${C}${__t(99)}${U?"b":"g"}"><b>${U}${__t(100)}${O.length?Ig(O):__t(107)}${x<.7?`${__t(108)}${Math.round(x*100)}${__t(109)}`:""}${__t(101)}${j||__t(110)}${__t(102)}`}let Ig=l=>`<div class="al">${l.slice(0,3).map(f=>`<p>\u26A0\uFE0F ${Ra(f)} ${p(f.txt)} <small>${Ia(f)}</small></p>`).join("")}</div>`,Qn={on:!1,mesh:null};function gf(){let l=Ce.hoy,f=[];if(l&&l.st)for(let[v,y]of Object.entries(l.st)){let T=$t.get(v);T!=null&&y.n>=2&&f.push([T,y.sum/y.n/60,y.n])}if(!f.length){let v=new Map;tt.forEach(y=>{if(!y.real||!y.tr||y.v.next==null||y.v.next<0||y.v.pre||!H.delays.has(y.v.tid))return;let T=y.tr.pat.stops[y.v.next],C=v.get(T)||[0,0];C[0]+=Math.max(0,y.dl),C[1]++,v.set(T,C)}),v.forEach((y,T)=>f.push([T,y[0]/y[1],y[1]]))}return f}function Pg(){if(Qn.mesh&&(e.remove(Qn.mesh),Qn.mesh.geometry.dispose(),Qn.mesh.material.dispose(),Qn.mesh=null),!Qn.on){a();return}let l=gf();if(!l.length){hn(__t(111)),Qn.on=!1;return}let f=new mo(.32,.32,1,16);f.rotateX(Math.PI/2),f.translate(0,0,.5);let v=new sr({fog:!1}),y=new ho(f,v,l.length),T=new Ve,C=new fe;l.forEach(([L,U],O)=>{let q=.3+Math.min(U,40)*.3;T.makeScale(1,1,q),T.setPosition(b[L].w[0],b[L].w[1],B),y.setMatrixAt(O,T),C.set(U>10?"#dc2626":U>5?"#ea7a0c":U>=1?"#eab308":"#16a34a"),y.setColorAt(O,C)}),y.renderOrder=25,y.frustumCulled=!1,e.add(y),Qn.mesh=y,s.tilt<.5&&(s.tilt=.85),a()}let br=document.createElement("button");br.type="button",br.id="sbtn",br.title=__t(112),br.innerHTML=__t(113),br.onclick=()=>{k=!k,k&&(w=Pt=!1,Ce.at=0),u._h="",Ue(),a()},document.body.appendChild(br);function Lg(){r.dist<45!=Kt<45&&(Kt=r.dist,Re()),Dg(),ai()}let is=[],mn=new W;function Dg(){let l=0;if(Qn.on){let v=gf().sort((T,C)=>C[1]-T[1]),y=[];for(let[T,C]of v){if(l>=30)break;if(mn.set(b[T].w[0],b[T].w[1],B).project(n),mn.z>1||Math.abs(mn.x)>1||Math.abs(mn.y)>1)continue;let L=(mn.x*.5+.5)*innerWidth,U=(-mn.y*.5+.5)*innerHeight;if(y.some(([q,j])=>Math.abs(q-L)<90&&Math.abs(j-U)<18))continue;y.push([L,U]);let O=is[l]||(is[l]=Object.assign(document.createElement("div"),{className:"slab"}));O.isConnected||document.body.appendChild(O),O.textContent=b[T].n+" +"+Math.round(C)+"\u2032",O.dataset.i=T,O.style.display="block",O.style.transform=`translate(${Math.round(L+8)}px,${Math.round(U-8)}px)`,l++}for(;l<is.length;l++)is[l].style.display="none";return}if(r.dist<30){let v=[];for(let y=0;y<Dt;y++)Wt[y]<4||(mn.set(b[y].w[0],b[y].w[1],B).project(n),!(mn.z>1||Math.abs(mn.x)>1.05||Math.abs(mn.y)>1.05)&&v.push([y,(mn.x*.5+.5)*innerWidth,(-mn.y*.5+.5)*innerHeight]));if(v.length<=70)for(let[y,T,C]of v){let L=is[l]||(is[l]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=b[y].n,L.dataset.i=y,L.style.display="block",L.style.transform=`translate(${Math.round(T+8)}px,${Math.round(C-7)}px)`,l++}}for(;l<is.length;l++)is[l].style.display="none"}function nl(l){return mn.set(l[0],l[1],B).project(n),[(mn.x*.5+.5)*innerWidth,(-mn.y*.5+.5)*innerHeight,mn.z]}function _f(l,f,v,y){let T=null,C=v*v;for(let L of tt){let[U,O,q]=nl(L.p.w);if(q>1)continue;let j=(U-l)**2+(O-f)**2;j<C&&(C=j,T={a:L})}if(T)return T;C=y*y;for(let L=0;L<Dt;L++){if(!Wt[L])continue;let[U,O,q]=nl(b[L].w);if(q>1)continue;let j=(U-l)**2+(O-f)**2;j<C&&(C=j,T={s:L})}return T}let Hs=!1;window.__rodHide=()=>{Hs=!0},document.addEventListener("click",l=>{Hs&&!l.target.closest("#mcs, canvas")&&(Hs=!1)},!0),window.__rodTap=(l,f)=>{let v=null,y=1e9;for(let C of is){if(C.style.display==="none")continue;let L=C.getBoundingClientRect();if(l>=L.left-4&&l<=L.right+4&&f>=L.top-4&&f<=L.bottom+4){let U=Math.abs(f-(L.top+L.bottom)/2)*4+(l-L.left);U<y&&(y=U,v=C)}}if(v)return window.__rodPickStation(+v.dataset.i),!0;let T=_f(l,f,24,18);return T&&(T.a||T.s!=null)&&(Hs=!1),T&&T.a?(w=!1,Pt=!1,k=!1,ut=T.a.tr||{vtid:T.a.v.tid},bt=-1,It=null,Re(),Ue(),et=0,a(),!0):T&&T.s!=null?(w=!1,Pt=!1,k=!1,bt=T.s,ut=null,It=null,Re(),Ue(),a(),!0):!1},window.__rodHover=(l,f)=>{let v=_f(l,f,14,10);if(v&&v.a){let y=v.a,T=y.tr?b[y.tr.pat.stops[y.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${y.c}">\u25A0</span> ${p(y.fam||y.tr&&y.tr.fam||"?")}${__t(114)}${p(y.tr?y.tr.num:y.v.num)}</b><small>${T?__t(95)+p(T):""}${y.real?(y.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(y.dl)} min</b>`:__t(115))+__t(116):__t(117)}</small>`}return v&&v.s!=null?`<b>${p(b[v.s].n)}</b><small>${[...b[v.s].fams].sort(D).join(" \xB7 ")}</small>`:null},window.__rodPickStation=l=>{Hs=!1,w=Pt=k=!1,ut=null,It=null,bt=l,Re(),u._h="",Ue(),a()};{let l=m("#rc"),f=()=>{let v=l.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,v-64-10)+"px")};try{new ResizeObserver(f).observe(l)}catch{}addEventListener("resize",f),setTimeout(f,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let l=!1,f=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{f&&!l&&(l=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(v=>{v.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||v.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{He()}catch{}},2500),setInterval(()=>{try{Ce.at=0,He()}catch{}},15*6e4);let ti={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},ba=matchMedia("(prefers-color-scheme: dark)");function il(){let l=ti.mode==="dark"||ti.mode==="auto"&&ba.matches;document.documentElement.classList.toggle("dark",l);for(let v=0;v<Dt;v++)kt.set(l?[.06,.08,.11]:[1,1,1],v*3);Z.attributes.fill.needsUpdate=!0,re.uniforms.border.value.set(l?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(l),$s.textContent=ti.mode==="auto"?l?"\u{1F319}":"\u2600\uFE0F":ti.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",$s.title=__t(118)+{auto:__t(119),dark:__t(120),light:"desactivado"}[ti.mode];let f=document.querySelector("meta[name=theme-color]");f&&(f.content=l?"#0d1119":"#eef1f5"),a()}let $s=document.createElement("button");$s.type="button",$s.id="tbtn",$s.onclick=()=>{ti.mode=ti.mode==="auto"?ba.matches?"light":"dark":ti.mode==="dark"?"light":"dark",ti.mode==="dark"===ba.matches&&(ti.mode="auto");try{localStorage.setItem("rod_theme",ti.mode)}catch{}il(),hn($s.title)},document.body.appendChild($s);{let l=document.createElement("a");l.id="wabtn",l.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",l.target="_blank",l.rel="noopener",l.title=__t(121),l.innerHTML=__t(122),document.body.appendChild(l)}ba.addEventListener&&ba.addEventListener("change",il),il(),window.__rodTick=Ae,window.__rodFrame=Lg,window.__rodResize=()=>{Lt.resolution.set(innerWidth,innerHeight),Nt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let mi={st:-1,f:new Set},xf=l=>{let f=[...b[l].fams].sort(D);return`<div class="sfc">${f.length>1?`<button type="button" data-sf="" class="${mi.f.size?"":"on"}${__t(123)}`:""}${f.map(v=>`<button type="button" data-sf="${p(v)}" class="ln ${mi.f.size&&!mi.f.has(v)?"off":""}${Y.has(v)?"":" hid"}" style="--c:${X[v]}">${p(v)}</button>`).join("")}</div>${f.some(v=>!Y.has(v))?__t(124):""}`},Ng=l=>{let f=(l||"#6b7385").replace("#",""),v=parseInt(f.slice(0,2),16),y=parseInt(f.slice(2,4),16),T=parseInt(f.slice(4,6),16);return(.299*v+.587*y+.114*T)/255>.62?"#1d2330":"#fff"},Fi=(l,f)=>{let v=X[f]||"#6b7385";return`<span class="dst" style="background:${v};color:${Ng(v)}" title="${p(f||"")}">${p(l)}</span>`},sl=l=>{let f=b[l]&&b[l].id;return un.st.includes(f)?"\u{1F3E0} ":Qe.st.includes(f)?"\u{1F4BC} ":""},Oi=l=>l>10?"d-hi":l>5?"d-md":"d-lo",Ug=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,wa={ref:null,m:new Map};function jh(l){if(wa.ref!==H.alerts){wa.ref=H.alerts,wa.m=new Map;for(let f of H.alerts){if(f.src!=="Rodalies")continue;let v=f.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let y of(f.es||f.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))wa.m.set(y[1],{why:v?v[1].trim().replace(/\s+/g," "):"",txt:f.txt,when:f.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(f.es||f.txt)})}}return wa.m.get(String(l))||null}let Ea={ref:null,m:new Map};function vf(l){let f=String(l.tr?l.tr.num:l.v&&l.v.num||"");if(!f)return null;if(Ea.ref!==H.alerts){Ea.ref=H.alerts,Ea.m=new Map;for(let y of H.alerts)if(y.src==="Rodalies"&&Ug.test(y.es||y.txt))for(let T of(y.es||y.txt).matchAll(/\b(\d{4,6})\b/g))Ea.m.set(T[1],y)}let v=Ea.m.get(f);return v?{why:"aviso",txt:v.txt}:l.real&&l.stop==="via"&&l.v.still>=300?{why:"via",min:Math.round(l.v.still/60)}:null}let Ta=l=>{try{let f=ut;return f?f.num!=null&&String(f.num)===String(l.num)||l.tid&&(f.tid===l.tid||f.vtid===l.tid):!1}catch{return!1}},yf=(l,f)=>{let v=E(l,f.min-1,f.min+240).sort((y,T)=>y.est-T.est).slice(0,6);return v.length?`${__t(125)}${v.map(y=>`<li><b>${it(y.est)}</b>${Dn(y.fam)}<span>${Fi(y.dest,y.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},yi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Fg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(yi))}catch{}},Sf=l=>!!l&&yi.some(f=>f.num===String(l.num)),Ye=(()=>{try{let l=JSON.parse(localStorage.getItem("rod_alarm")||"null");return l&&Date.now()-l.at<4*36e5?l:null}catch{return null}})(),Aa=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Ye))}catch{}},rl=(l,f)=>!!(Ye&&l&&Ye.num===String(l.num)&&Ye.sid===b[l.pat.stops[f]].id);function Qh(l,f){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}hn(l+" \xB7 "+f),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(v=>v?v.showNotification(l,{body:f,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(l,{body:f})).catch(()=>{})}function Og(){if(!Ye||Ye.done)return;let l=ne();if(!l.live)return;let f=t.days.indexOf(l.ymd),v=(Q[f]||[]).find(O=>String(O.num)===Ye.num)||(Q[f-1]||[]).find(O=>String(O.num)===Ye.num);if(!v)return;let y=v.pat.stops.findIndex(O=>b[O].id===Ye.sid);if(y<0)return;let T=M(v),C=typeof T=="number"?Math.max(0,T/60):0,L=v.day===f-1?1440:0,U=v.t0+v.pat.t[2*y]+C-L;if(U-l.min<-3){Ye.done=!0,Aa();return}window.__schedAt&&(Ye.sch==null||Math.abs(Ye.sch-U)>=.5)&&(Ye.sch=U,Aa(),window.__schedAt(7701,`${__t(126)}${b[v.pat.stops[y]].n}`,__t(127)+` (${it(U)})`,Date.now()+(U-2-l.min)*6e4)),U-l.min<=2&&(Ye.done=!0,Aa(),window.__schedOff&&window.__schedOff(7701),Qh(`${__t(126)}${b[v.pat.stops[y]].n}`,`${__t(128)}${Math.max(0,Math.round(U-l.min))}${__t(129)}${it(U)}${__t(130)}`))}function tu(l,f){let v=+l.t.slice(0,2)*60+ +l.t.slice(3,5),y=Q[f]||[],T=(U,O)=>U.t0+U.pat.t[2*O+1],C=null,L=11;for(let U of y){let O=U.pat.stops.findIndex(j=>b[j].id===l.sid);if(O<0||O===U.pat.stops.length-1)continue;let q=Math.abs(T(U,O)-v)+(String(U.num)===l.num?-5:0)+(U.fam===l.fam?0:20)+(l.dest&&b[U.pat.stops[U.pat.stops.length-1]].id!==l.dest?3:0);q<L&&(L=q,C=U)}return C}let al=new Set;function Bg(){if(!yi.length)return;let l=ne();if(!l.live)return;let f=t.days.indexOf(l.ymd);for(let v of yi){let y=tu(v,f);if(!y)continue;let T=y.pat.stops.findIndex(j=>b[j].id===v.sid);if(T<0)continue;let C=y.t0+y.pat.t[2*T+1],L=M(y),U=typeof L=="number"?L/60:0,O=C-l.min;if(O<-2||O>60)continue;let q=l.ymd+v.num+(L==="X"?"X":U>=10?10:U>=5?5:0);al.has(q)||(L==="X"||U>=5?(al.add(q),Qh(`${__t(131)}${it(C)} ${L==="X"?__t(132):`${__t(133)}${Math.round(U)} min`}`,`${y.fam} ${y.num}${__t(134)}${b[y.pat.stops[T]].n}${L==="X"?"":`${__t(135)}${it(C+U)}`}`)):O<=20&&!al.has(l.ymd+v.num+"ok")&&H.vp.has(y.tid)&&(al.add(l.ymd+v.num+"ok"),hn(`${__t(131)}${it(C)}${__t(136)}`)))}}setInterval(()=>{try{Og(),Bg()}catch{}},15e3);let Dn=l=>`<span class="ln" style="--c:${X[l]}">${p(l)}</span>`;{let l=v=>{let y=/^#?([0-9a-f]{6})$/i.exec(v||"");return y?[0,2,4].map(T=>{let C=parseInt(y[1].slice(T,T+2),16)/255;return C<=.03928?C/12.92:Math.pow((C+.055)/1.055,2.4)}).reduce((T,C,L)=>T+C*[.2126,.7152,.0722][L],0):0},f=[...new Set(Object.values(X))].filter(v=>l(v)>.3).map(v=>`.ln[style*="--c:${v}"],[data-f][style*="--c:${v}"].on,[data-f][style*="--c:${v}"]:not(.off){color:#14203a!important}`).join("");if(f){let v=document.createElement("style");v.textContent=f,document.head.appendChild(v)}}function Mf(l,f){return f?l==="X"?__t(138):l>=60?`<span class="st late ${Oi(l/60)}${__t(139)}${Math.round(l/60)} min</span>`:__t(140):__t(137)}function eu(){if(!u.classList.contains("peek")||window.__mapHidden||!u.getClientRects().length)return;let l=u.querySelector(".tc");if(!l)return;let f=l.querySelector(".st")||l.querySelector("p"),v=u.getBoundingClientRect().top-u.scrollTop,y=f?f.getBoundingClientRect().bottom-v+3:150;if(f){let T=f.nextElementSibling||f.parentElement!==l&&f.parentElement.nextElementSibling;T&&(y=Math.min(y,T.getBoundingClientRect().top-v-1))}u.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,y)))+"px")}function Ue(){try{kg()}finally{window.__rodTabSync&&window.__rodTabSync();try{eu()}catch{}}}function kg(){if(!ut&&bt<0&&!Pt&&!w&&!k&&!st){Hs=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),lu();return}let l=ne(),f="",v=z()&&l.live,y=(x,I)=>H.alerts.filter(G=>[...G.fams].some(K=>x.has(K))||I!=null&&G.stops.has(I)),T=x=>x.length?`<div class="al">${x.slice(0,4).map(I=>`<p>\u26A0\uFE0F ${Ra(I)} ${[...I.fams].sort(D).slice(0,6).map(Dn).join(" ")} ${p(I.txt)} <small>${Ia(I)}</small></p>`).join("")}${x.length>4?`<small>y ${x.length-4}${__t(141)}`:""}</div>`:"",C=ut&&v?tt.find(x=>x.real&&(ut.vtid?x.v.tid===ut.vtid:x.tr===ut)):null;if(st&&!k&&!w&&!Pt&&!ut&&bt<0)f=Rg(st);else if(k)f=Cg();else if(w)f=`${__t(142)}${p(m("#ver").firstChild.textContent)}</small><ul class="chg">${m("#chg").innerHTML||__t(144)}${__t(143)}`;else if(Pt){let x=H.alerts.filter(I=>[...I.fams].some(G=>Y.has(G))||!I.fams.size);f=`${__t(145)}${x.length}${__t(146)}${x.map(I=>`<div class="al"><p>${Ra(I)} ${[...I.fams].sort(D).map(Dn).join(" ")} <small>${Ia(I)}</small></p><p>${p(I.txt)}</p></div>`).join("")||__t(148)}${__t(147)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(149):`${__t(150)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(C){let x=C.v,I=C.tr,G=qt=>p(b[I.pat.stops[qt]].n),K=I?I.pat.stops.length:0,_t=$t.get(x.sid),At=_t!=null?p(b[_t].n):p(x.sid),Zt=I&&x.atStop>=0?G(x.atStop):"",Ct=I&&x.next>=0?G(x.next):At,lt=I&&x.next>0?G(x.next-1):"",pe=C.broke||vf(C),te=pe?`<b class="stopv">\u26A0\uFE0F ${pe.why==="aviso"?__t(151):`${__t(152)}${pe.min} min`}</b>${I&&lt?`${__t(153)}${lt}${__t(154)}${Ct}</b>`:""}`:C.stop==="via"&&I?`${__t(155)}${lt?`${__t(157)}${lt}${__t(154)}${Ct}</b>`:`${__t(158)}${Ct}</b>`}${__t(156)}${Math.max(1,Math.round(x.still/60))} min`:x.pre&&I?x.prevTr?`${__t(159)}${p(x.prevTr.num)}${__t(160)}${G(0)}</b>${x.prevDl>=1?`${__t(163)}${Math.round(x.prevDl)} min</b>`:""}${__t(161)}${it(x.arrO)}${__t(162)}${it(x.depEst)}</b>${x.preDl>=1?`${__t(164)}${it(x.dep0)})`:""}`:`${__t(165)}${G(0)}${__t(166)}${it(x.dep0+C.dl)}</b>`:x.st==="STOPPED_AT"&&Zt?`${__t(167)}${Zt}</b>`:Zt&&x.next>=0&&x.atStop!==x.next?`${__t(168)}${Zt}${__t(160)}${Ct}</b>`:lt?`${__t(169)}${lt}${__t(154)}${Ct}</b>`:`${__t(170)}${Ct}</b>`,de=H.tu.get(x.tid),nn=de&&de.next&&I&&x.next>=0&&de.next.sid===b[I.pat.stops[x.next]].id&&de.next.t?new Date(de.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",on=[];if(I){let qt=C.idx>=0?C.idx:0,_n=x.pre?Math.max(C.dl,x.preDl||0):C.dl,ss=xn=>I.t0+I.pat.t[xn]+_n;for(let xn=qt;xn<K;xn++)on.push(`<li class="${sl(I.pat.stops[xn])?"mine":""}${rl(I,xn)?" alm":""}"><b>${it(ss(xn===0?1:2*xn))}</b><span title="${G(xn)}">${sl(I.pat.stops[xn])}${G(xn)}</span>${_n>=1?`<em class="dl ${Oi(_n)}">${x.pre?"\u2248":""}+${Math.round(_n)}</em>`:""}${xn>0?`<button type="button" class="abtn" data-alarm="${xn}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${rl(I,xn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}f=`<div class="tc" style="--c:${C.c}"><button class="x" data-cx>\xD7</button><div>${Dn(C.fam)}${__t(171)}${p(I?I.num:x.num)}${__t(172)}${I?`<h3 class="rt"><span class="o" title="${G(0)}">${G(0)}</span><span class="ar">\u2192</span>${Fi(b[I.pat.stops[K-1]].n,I.fam)}</h3>`:""}
        <p>${te}${nn?`${__t(173)}${nn}`:""}${x.plat&&x.st==="STOPPED_AT"&&Zt?`${__t(174)}${p(x.plat)}</b>`:""}</p><p>${x.pre&&x.prevTr?x.preDl>=1?`${__t(175)}${Math.round(x.preDl)}${__t(176)}`:__t(177):Mf(H.delays.get(x.tid),H.delays.has(x.tid))}${(()=>{let qt=I&&pi(I.num);return qt&&qt.n>=2?`${__t(178)}${qt.n}${__t(179)}${qt.late?`${__t(181)}${qt.late}${__t(60)}${qt.n}</b>`:__t(182)}${__t(180)}${qt.avg<.5?"0":"+"+Math.round(qt.avg)} min</span>`:""})()}${(()=>{let qt=I&&jh(I.num);return qt?`<span class="why" title="${p(qt.txt)}">${qt.why?__t(183)+p(qt.why):__t(184)}</span>`:""})()}</p>
        <small>${x.pre?`${__t(185)}${Os(Math.round(C.age)+" s")}`:x.est?__t(186):`${__t(187)}${Os(Math.round(C.age)+" s")}${C.age>120?__t(188):""}`}</small>
        ${on.length?`${C.dl>=1||x.pre&&x.preDl>=1?`${__t(189)}`:""}<ol class="stops">${on.join("")}</ol>`:""}${T(y(new Set([C.fam])))}
        ${cl(I?I.num:x.num,"",C.fam)}${I?`<div class="rtb two"><button type="button" data-fav>${Sf(I)?__t(190):__t(191)}</button><button type="button" data-follow>${It===I?__t(192):__t(193)}</button></div>`:""}</div>`}else if(ut&&v)f=`${__t(194)}${p(ut.num||ut.vtid||"")}${__t(195)}`;else if(ut){let x=ut,I=x.pat,G=I.stops.length,K=M(x),_t=typeof K=="number"?K/60:0,At=t.days.indexOf(l.ymd),Zt=x.day===At-1?1440:0,Ct=l.min+Zt-x.t0-_t,lt=Vs(x,Ct),pe=qt=>x.t0+I.t[qt]+_t,te=qt=>p(b[I.stops[qt]].n),de=__t(196);lt&&(de=lt.moving?`${__t(197)}${te(lt.next)}${__t(198)}${it(pe(2*lt.next))}`:lt.at===G-1?`${__t(199)}${te(G-1)}</b>`:`${__t(167)}${te(lt.at)}${__t(200)}${it(pe(2*lt.at+1))}`);let nn=lt?lt.next:0,on=[];for(let qt=nn;qt<G;qt++)on.push(`<li class="${sl(I.stops[qt])?"mine":""}${rl(x,qt)?" alm":""}"><b>${it(pe(2*qt))}</b><span title="${te(qt)}">${sl(I.stops[qt])}${te(qt)}</span>${_t>=1?`<em class="dl ${Oi(_t)}">+${Math.round(_t)}</em>`:""}${qt>0?`<button type="button" class="abtn" data-alarm="${qt}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${rl(x,qt)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);f=`<div class="tc" style="--c:${x.c}"><button class="x" data-cx>\xD7</button><div>${Dn(x.fam)}${__t(171)}${p(x.num)}${__t(201)}${te(0)}">${te(0)}</span><span class="ar">\u2192</span>${Fi(b[x.pat.stops[G-1]].n,x.fam)}</h3>
        <p>${de}</p><p>${Mf(K,K!=null)}${(()=>{let qt=pi(x.num);return qt&&qt.n>=2?`${__t(178)}${qt.n}${__t(179)}${qt.late?`${__t(181)}${qt.late}${__t(60)}${qt.n}</b>`:__t(182)}${__t(180)}${qt.avg<.5?"0":"+"+Math.round(qt.avg)} min</span>`:""})()}${__t(202)}${it(x.t0+I.t[1])}${__t(203)}${it(x.t0+I.t[2*G-2])}${__t(204)}${_t>=1?__t(189):""}<ol class="stops">${on.join("")}</ol>${cl(x.num,"",x.fam)}<div class="rtb two"><button type="button" data-fav>${Sf(x)?__t(190):__t(191)}</button><button type="button" data-follow>${It===x?__t(192):__t(193)}</button></div></div>`}else{let x=bt,I=t.days.indexOf(l.ymd),G=[];mi.st!==x&&(mi.st=x,mi.f.clear());let K=lt=>(!X[lt]||Y.has(lt))&&(!mi.f.size||mi.f.has(lt));if(I>=0){let lt=(pe,te)=>{for(let de of pe){if(!K(de.fam))continue;let nn=de.pat.stops.indexOf(x);if(nn<0||nn===de.pat.stops.length-1)continue;let on=M(de),qt=typeof on=="number"?on/60:0,_n=de.t0+de.pat.t[2*nn+1]-te;_n+qt<l.min-1||_n>l.min+360||G.push({tr:de,t:_n,dl:qt,d:on,on:H.vp.has(de.tid),past:l.min>de.t0+de.pat.t[1]-te+2})}};lt(Q[I],0),I>0&&lt(Q[I-1],1440)}G.sort((lt,pe)=>lt.t+lt.dl-pe.t-pe.dl);let _t=b[x].id,At=Xn.get(_t),Zt=(v||xe()&&l.live)&&H.url;Zt&&(!At||Date.now()-At.at>3e4)&&!At?.loading&&(Xn.set(_t,{...At||{},loading:!0,at:At?At.at:0}),Tt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+_t).then(lt=>{Xn.set(_t,{at:Date.now(),d:lt}),bt===x&&(u._h="",Ue())}).catch(()=>Xn.set(_t,{at:Date.now(),err:1})));let Ct=Zt&&At&&At.d&&Array.isArray(At.d.trains)?At.d.trains:null;if(Ct){let lt=new Map([...H.vp.values()].map(te=>[String((ct.get(te.tid)||{}).num||te.num),te])),pe=Ct.filter(te=>K((te.line||{}).id||"")).slice(0,40).map(te=>{let de=(te.departureDateHourSelectedStation||"").slice(11,16),nn=(te.line||{}).id||"",on=String(te.commercialNumber||te.technicalNumber||""),qt=lt.get(on),_n=qt?H.delays.get(qt.tid):null;return`<li class="go${Ta({num:on,tid:qt?qt.tid:""})?" sel":""}" data-gt="${p(on)}|${qt?p(qt.tid):""}"><b>${p(de)}</b>${X[nn]?Dn(nn):`<span class="ln" style="--c:#6b7385">${p(nn||"?")}</span>`}<span>${Fi((te.destinationStation||{}).name||"",nn)}${te.trainObservations?` \xB7 <i>${p(te.trainObservations)}</i>`:""}</span>${te.trainCancelled?__t(205):typeof _n=="number"&&_n>=60?`<em class="dl ${Oi(_n/60)}">+${Math.round(_n/60)}</em>`:""}${te.platformSelectedStation?`${__t(206)}${p(te.platformSelectedStation)}</i>`:""}${qt?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");f=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(b[x].n)}</h3>${xf(x)}${cl("",b[x].id,"")}${__t(207)}${pe||__t(209)}</ol>${yf(x,l)}${T(y(b[x].fams,x))}${__t(208)}`}else f=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${p(b[x].n)}</h3>${xf(x)}${cl("",b[x].id,"")}
        <small style="margin-top:6px">${v&&H.url?__t(211):""}${__t(210)}${v?__t(212):__t(213)}</small>
        <ol>${G.slice(0,40).map(lt=>`<li class="go${Ta({num:lt.tr.num,tid:lt.tr.tid})?" sel":""}" data-gt="${p(lt.tr.num)}|${p(lt.tr.tid)}"><b>${it(lt.t+lt.dl)}</b>${Dn(lt.tr.fam)}<span>${Fi(b[lt.tr.pat.stops[lt.tr.pat.stops.length-1]].n,lt.tr.fam)}</span>${lt.d==="X"?__t(205):lt.dl>=1?`<em class="dl ${Oi(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}${v?lt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':lt.past?__t(214):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(215)}</ol>${yf(x,l)}${T(y(b[x].fams,x))}${__t(208)}`}let L=u.scrollTop;if(u._h!==f&&(u.innerHTML=f,u._h=f,u.scrollTop=L),u.style.display="flex",u.classList.toggle("min",Hs),lu(),innerWidth<=640){let x=u.querySelector(".tc");if(x&&!x.querySelector(".mn")){let I=document.createElement("button");I.type="button",I.className="mn",I.setAttribute("aria-label",__t(216)),I.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",I.onclick=K=>{K.stopPropagation(),u.classList.toggle("peek"),eu(),I.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0};let G=x.querySelector(".x");x.insertBefore(I,G?G.nextSibling:x.firstChild)}}else u.classList.remove("peek");let U=m("#rc");if(innerWidth<=640&&!U.classList.contains("min")&&!Ue.done&&(Ue.done=1,m("#rcgrab").click()),innerWidth<=640){let x=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(x+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-x-16)+"px"}else if(innerHeight<=500){let x=m("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(x+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-x-20+"px"}else u.style.top="",u.style.width=k?"390px":"300px",u.style.maxHeight="";let q=u.querySelector("[data-cx]");q&&(q.onclick=x=>{if(x.stopPropagation(),Ue.done=0,k||w||Pt||st&&!ut&&bt<0){k=w=Pt=!1,ut||bt>=0||(st=""),u._h="",Ue(),a();return}Pt=!1,w=!1,k=!1,ut=null,bt=-1,It=null,Re(),Ue(),et=0,a()}),Ef(u),u.querySelectorAll("[data-alarm]").forEach(x=>x.onclick=I=>{I.stopPropagation();let G=ut&&ut.pat?ut:ct.get(ut&&ut.vtid)||null;if(!G)return;let K=+x.dataset.alarm,_t=b[G.pat.stops[K]].id;Ye&&Ye.num===String(G.num)&&Ye.sid===_t?(Ye=null,window.__schedOff&&window.__schedOff(7701),hn(__t(217))):(Ye={num:String(G.num),sid:_t,at:Date.now()},hn(`${__t(218)}${b[G.pat.stops[K]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Aa(),u._h="",Ue()});{let x=u.querySelector("[data-fav]");x&&(x.onclick=I=>{I.stopPropagation();let G=ut&&ut.pat?ut:ct.get(ut&&ut.vtid)||null;if(!G)return;let K=yi.findIndex(_t=>_t.num===String(G.num));if(K>=0)yi.splice(K,1),hn(__t(219));else{let _t=[...un.st,...Qe.st,...Vt.st],At=G.pat.stops.find(Zt=>_t.includes(b[Zt].id))??G.pat.stops[0];yi.push({num:String(G.num),fam:G.fam,sid:b[At].id,dest:b[G.pat.stops[G.pat.stops.length-1]].id,t:it(G.t0+G.pat.t[2*G.pat.stops.indexOf(At)+1])}),hn(`${__t(220)}${G.fam}${__t(221)}${yi[yi.length-1].t}${__t(134)}${b[At].n}${__t(222)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Fg(),u._h="",Ue(),$e(!0)})}{let x=u.querySelector("[data-share]");x&&(x.onclick=()=>{let I=st,G=tt.filter(Zt=>(Zt.fam||Zt.tr&&Zt.tr.fam)===I),K=G.filter(Zt=>Zt.dl>=5).sort((Zt,Ct)=>Ct.dl-Zt.dl),_t=H.alerts.filter(Zt=>Zt.fams.has(I)),At=`${I}${__t(223)}${it(ne().min)}: ${G.length}${__t(224)}${K.length}${__t(225)}${K.length?" ("+K.slice(0,4).map(Zt=>`${Zt.tr?Zt.tr.num:Zt.v.num} +${Math.round(Zt.dl)}`).join(", ")+")":""}.${_t.length?__t(226)+_t[0].txt:__t(227)}`;navigator.share?navigator.share({text:At}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(At),hn(__t(228)+At.slice(0,60)+"\u2026"))})}{let x=u.querySelector("[data-cols]");x&&(x.onclick=()=>{Qn.on=!Qn.on,Pg(),u._h="",Ue()})}u.querySelectorAll("[data-gs]").forEach(x=>x.onclick=()=>{let I=+x.dataset.gs;k=!1,window.__rodPickStation(I),Object.assign(s,{tx:b[I].w[0],ty:b[I].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(x=>x.onclick=I=>{I.stopPropagation();let G=x.dataset.sf;G?mi.f.has(G)?mi.f.delete(G):mi.f.add(G):mi.f.clear(),u._h="",Ue()}),u.querySelectorAll("[data-gt]").forEach(x=>x.onclick=()=>{let[I,G]=x.dataset.gt.split("|"),K=ct.get(G);uu({num:I,tid:H.vp.has(G)?G:"",tr:K||null})}),u.querySelectorAll("[data-sethome]").forEach(x=>x.onclick=()=>du(bt,x.dataset.sethome));let j=u.querySelector("[data-follow]");j&&(j.onclick=()=>{It=It===ut?null:ut,It?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,m("#rc").classList.contains("min")||m("#rcgrab").click())):u.classList.remove("peek"),u._h="",Ue(),a()})}window.__rodCard=Ue;try{let l=localStorage.getItem("rod_inf");(l==="mini"||l==null)&&m("#inf").classList.add("mini")}catch{}m("#inft").onclick=()=>{let l=m("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",l?"mini":"")}catch{}(ut||bt>=0||Pt||w)&&(u._h="",Ue())},m("#ver").onclick=()=>{w=!0,k=!1,Pt=!1,u._h="",Ue()};let ol={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},zg=["vacio","lleno","petado",__t(229),"calor","abordo"],Vg=["gente","retraso","cancel","ascensor","via"],Hg={vacio:__t(230),lleno:__t(231),petado:__t(232),parado:__t(233),calor:__t(234),abordo:__t(235),gente:__t(236),retraso:__t(237),cancel:__t(238),ascensor:__t(239),via:__t(240)},ll=l=>(H.tipos||Hg)[l]||l,nu=(l,f)=>(H.rep||[]).filter(v=>l&&v.num===String(l)&&!v.sid||f&&v.sid===String(f)&&!v.num||l&&f&&v.num===String(l)&&v.sid===String(f)),bf=l=>{let f=Math.round((Date.now()+(H.repSkew||0)-l.at)/6e4);return f<1?__t(241):Os(f+" min")},Ca=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function cl(l,f,v){if(!H.url||!H.repOk)return"";let y=nu(l,f),T=l?zg:Vg;return`${__t(242)}${y.length?"":__t(244)}</small>${y.map(C=>`<p><span>${ol[C.kind]||"\u2022"} <b>${p(ll(C.kind))}</b> <small>${C.up>1?C.up+__t(245):""}${bf(C)}</small></span>${Ca.has(C.id)?"<small>\u2713</small>":`<button type="button" data-rv="${C.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${C.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${l?__t(246):__t(247)}</summary><div class="ckb">${T.map(C=>`<button type="button" data-rk="${C}" data-rn="${p(l||"")}" data-rs="${p(f||"")}" data-rl="${p(v||"")}">${ol[C]} ${p(ll(C))}</button>`).join("")}${__t(243)}`}async function wf(l,f){try{let y=await(await fetch(H.url.replace(/\/+$/,"")+f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();if(!y.ok){hn(y.err||__t(248));return}if(y.id){Ca.add(y.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ca].slice(-300)))}catch{}}hn(f==="/vote"?__t(249):y.n>1?`${__t(250)}${y.n}${__t(251)}`:__t(252));let T=await Tt(H.url.replace(/\/+$/,""),"/reports.json");T&&T.items&&(H.rep=T.items),u._h="",Ue(),$e(!0)}catch{hn(__t(253))}}function Ef(l){l.querySelectorAll("[data-rk]").forEach(f=>f.onclick=v=>{v.stopPropagation(),f.disabled=!0,wf({kind:f.dataset.rk,num:f.dataset.rn,sid:f.dataset.rs,line:f.dataset.rl},"/report")}),l.querySelectorAll("[data-rv]").forEach(f=>f.onclick=v=>{v.stopPropagation();let[y,T]=f.dataset.rv.split(":");Ca.add(+y);try{localStorage.setItem("rod_votes",JSON.stringify([...Ca].slice(-300)))}catch{}wf({id:+y,v:+T},"/vote")})}let Tf=0;function hn(l){let f=m("#toast");f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=l,f.className="on",clearTimeout(Tf),Tf=setTimeout(()=>{f.className=""},2600)}function Ra(l){return l.src?`<b class="asrc ${l.src==="Adif"?"adif":""}">${l.src==="Adif"?__t(254):p(l.src)}</b>`:""}function Ia(l){if(!l.when)return"";let[f,v]=l.when.split("T"),y=xt(new Date),T=y.ymd.slice(0,4)+"-"+y.ymd.slice(4,6)+"-"+y.ymd.slice(6,8);if(f===T&&v){let C=Math.round(y.min-(+v.slice(0,2)*60+ +v.slice(3,5)));return C<1?__t(241):C<60?Os(C+" min"):`${__t(255)}${v.slice(0,5)}`}return`${f.slice(8,10)}/${f.slice(5,7)}${v?" "+v.slice(0,5):""}`}function iu(){let l=m("#alr");if(!l)return;let f=H.alerts.filter(v=>[...v.fams].some(y=>Y.has(y))).length;l.hidden=!f,l.textContent=`\u26A0\uFE0F ${f}${f===1?__t(256):__t(257)}`}{let l=m("#alrslot");l&&l.appendChild(m("#alr"))}m("#alr").onclick=()=>{w=!1,k=!1,Pt=!0,Ue()},m("#wcopy").onclick=async()=>{let l=m("#wcode").textContent;try{await navigator.clipboard.writeText(l),m("#wcopy").textContent=__t(258)}catch{let v=document.createRange();v.selectNodeContents(m("#wcode"));let y=getSelection();y.removeAllRanges(),y.addRange(v),m("#wcopy").textContent=__t(259)}setTimeout(()=>m("#wcopy").textContent=__t(260),2500)};let $g=$t.get("71801");function Gg(l,f){let v=b[l].id,y=Xn.get(v);!(oe()&&H.url)||y&&(y.loading||Date.now()-y.at<3e4)||(Xn.set(v,{...y||{},loading:!0,at:y?y.at:0}),Tt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+v).then(T=>{Xn.set(v,{at:Date.now(),d:T}),f&&f()}).catch(()=>Xn.set(v,{at:Date.now(),err:1})))}let Af=l=>+l.slice(0,2)*60+ +l.slice(3,5),Pa={k:-2,m:null};function La(l){let f=t.days.indexOf(ne().ymd);if(Pa.k!==f){Pa.k=f,Pa.m=new Map;for(let v of Q[f]||[])Pa.m.set(String(v.num),v)}return Pa.m.get(String(l))||null}let Gs={at:0,m:new Map};function su(l){if(Date.now()-Gs.at>6e4){Gs.at=Date.now(),Gs.m=new Map;let v=ne(),y=t.days.indexOf(v.ymd);if(y>=0)for(let T of Q[y]){let C=v.min-T.t0;if(C<T.pat.t[1]+3||C>T.pat.t[T.pat.t.length-2]-3)continue;let L=Gs.m.get(T.fam)||[0,0];L[0]++,H.vp.has(T.tid)&&L[1]++,Gs.m.set(T.fam,L)}}let f=Gs.m.get(l);return f&&f[0]>=3?f[1]/f[0]:1}function Wg(l,f,v,y){if(!l||!f||f.pre||f.dObs==null||f.err==null||f.err>.6||v<0)return null;let T=Date.now()/1e3-f.ts;if(T>150||T<-30||(f.still||0)>=90)return null;let C=Yt(l.pat).stopD,L=l.pat.t;if(f.dObs>C[v]+.1)return null;let U,O=C.reduce((j,x,I)=>Math.abs(x-f.dObs)<Math.abs(C[j]-f.dObs)?I:j,0);if(Math.abs(C[O]-f.dObs)<.16&&O<=v)U=L[2*O+1];else{let j=C.findIndex(I=>I>f.dObs);if(j<=0)return null;let x=Math.min(1,Math.max(0,(f.dObs-C[j-1])/(C[j]-C[j-1]||1)));U=L[2*j-1]+x*(L[2*j]-L[2*j-1])}let q=L[2*v+1]-U;return q<0||q>30?null:y.min-T/60+q}function hl(l,f){let v=ne(),y=(z()||xe())&&v.live&&!f,T=Xn.get(b[l].id),C=[],L=new Map([...H.vp.values()].map(O=>[String((ct.get(O.tid)||{}).num||O.num),O]));if(y&&T&&T.d&&Array.isArray(T.d.trains))for(let O of T.d.trains){let q=(O.departureDateHourSelectedStation||"").slice(11,16);if(!q)continue;let j=String(O.commercialNumber||O.technicalNumber||""),x=L.get(j),I=x?H.delays.get(x.tid):null,G=Math.max(typeof I=="number"?Math.max(0,I/60):0,x&&x.pre&&x.preDl||0),K=Af(q);K<v.min-720&&(K+=1440);let _t=+(O.departureDateHourSelectedStation||"").slice(17,19)||0,At=K+_t/60,Zt=x&&ct.get(x.tid)||La(j),Ct=Zt?Zt.pat.stops.indexOf(l):-1,lt=Ct>=0?(Zt.t0+Zt.pat.t[2*Ct+1])%1440:null;if(lt!=null){for(;lt<At-720;)lt+=1440;for(;lt>At+720;)lt-=1440;Math.abs(At-lt)>120&&(lt=null)}let pe,te;lt==null?(pe=_t||!G?At:At+G,te=_t?0:G):_t||Math.abs(At-lt)>=1?(pe=At,te=Math.max(0,At-lt)):(pe=lt+G,te=G),lt!=null&&(K=Math.round(lt));{let de=x&&Zt&&Ct>=0?Wg(Zt,x,Ct,v):null;de!=null&&de<pe-.25&&de>pe-3&&(pe=Math.max(de,v.min),lt!=null&&(te=Math.max(0,pe-lt)))}C.push({sm:K,est:pe,dl:te,fam:(O.line||{}).id||"",dest:(O.destinationStation||{}).name||"",destId:(O.destinationStation||{}).id||"",plat:O.platformSelectedStation||"",cancel:!!O.trainCancelled,obs:O.trainObservations||"",live:!!x,num:j,tid:x?x.tid:"",tr:x&&ct.get(x.tid)||La(j),src:"oficial"})}else{let O=t.days.indexOf(v.ymd);if(O<0)return C;let q=(j,x)=>{for(let I of j){let G=I.pat.stops.indexOf(l);if(G<0||G===I.pat.stops.length-1)continue;let K=M(I),_t=typeof K=="number"?Math.max(0,K/60):0,At=I.t0+I.pat.t[2*G+1]-x;if(At+_t<v.min-1||At>v.min+360)continue;let Zt=I.pat.stops[I.pat.stops.length-1];C.push({sm:At,est:At+_t,dl:_t,fam:I.fam,dest:b[Zt].n,destId:b[Zt].id,plat:"",cancel:K==="X",obs:"",live:H.vp.has(I.tid),num:I.num,tid:I.tid,tr:I,src:"horario"})}};q(Q[O],0),O>0&&q(Q[O-1],1440),O+1<t.days.length&&v.min>1080&&q(Q[O+1],-1440)}if(y){let O=new Set(C.map(x=>x.num)),q=t.days.indexOf(v.ymd),j=(x,I)=>{for(let G of x||[]){if(O.has(String(G.num)))continue;let K=G.pat.stops.indexOf(l);if(K<0||K===G.pat.stops.length-1)continue;let _t=G.t0+G.pat.t[2*K+1]-I;if(_t<v.min-45||_t>v.min+1||!H.vp.get(G.tid))continue;let Zt=H.delays.get(G.tid),Ct=typeof Zt=="number"?Math.max(0,Zt/60):0,lt=G.pat.stops[G.pat.stops.length-1];C.push({sm:_t,est:_t+Ct,dl:Ct,fam:G.fam,dest:b[lt].n,destId:b[lt].id,plat:"",cancel:!1,obs:"",live:!0,num:G.num,tid:G.tid,tr:G,src:"horario"})}};q>=0&&(j(Q[q],0),q>0&&j(Q[q-1],1440));for(let x of C){let I=x.tid&&H.vp.get(x.tid),G=x.tr?x.tr.pat.stops.indexOf(l):-1;x.passed=!!(I&&G>=0&&!I.pre&&I.next!=null&&I.next>=0&&I.next>G&&I.atStop!==G),!x.passed&&x.live&&x.est<v.min&&(x.est=v.min,x.late=!0),x.passed&&(x.gone=!0)}}let U=C.filter(O=>O.gone?v.min-O.est<20:O.est>=v.min-.5).sort((O,q)=>O.est-q.est);{let O=U.filter(q=>q.gone);if(O.length>2){let q=new Set(O.slice(0,O.length-2));U=U.filter(j=>!q.has(j))}}if(!U.filter(O=>!O.gone).length&&C.length&&C[0].src==="oficial"&&!f)return hl(l,!0);for(let O of U){let q=O.num&&jh(O.num);q&&q.cx&&(O.cancel=!0,O.cxWhy=q.txt)}if(z()&&v.live){let O=t.days.indexOf(v.ymd);for(let q of U){if(q.live||q.cancel||!q.tr)continue;let j=q.tr.day===O-1?1440:q.tr.day===O+1?-1440:0,x=q.tr.t0+q.tr.pat.t[1]-j+(q.dl||0);q.noPos=v.min>x+3,q.ghost=q.noPos&&su(q.fam)>=.7}}if(f||(U=U.concat(E(l,v.min-.5,v.min+360)).sort((O,q)=>O.est-q.est)),U.some(O=>O.src==="oficial")){let O=Math.max(...U.map(j=>j.sm)),q=new Set(U.map(j=>j.num));U=U.concat(hl(l,!0).filter(j=>j.sm>O&&!q.has(String(j.num))))}return U}let Cf=(l,f,v,y)=>{let T={key:l,ico:f,name:v,st:[],i:0,walk:10,open:!1};try{let C=JSON.parse(localStorage.getItem("rod_"+l)||"null");C&&Object.assign(T,C)}catch{}return!T.st.length&&y&&(T.st=y),T},un=Cf("home","\u{1F3E0}",__t(261),null),Qe=Cf("work","\u{1F4BC}",__t(262),null),Vt={key:"near",ico:"\u{1F4CD}",name:__t(263),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Da=[Vt,un,Qe];try{Vt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}un.open=!1,Qe.open=!1;function Rf(l,f){let v=yt(l,f),y=yt(l,f+.009);return 1/Math.hypot(y[0]-v[0],y[1]-v[1])}function ru(l){if(!navigator.geolocation){Vt.err=__t(264),$e(!0);return}navigator.geolocation.getCurrentPosition(f=>{let{longitude:v,latitude:y}=f.coords,T=yt(v,y),C=Rf(v,y),L=b.map((j,x)=>[x,Math.hypot(j.w[0]-T[0],j.w[1]-T[1])*C]).filter(([j])=>b[j].fams.size).sort((j,x)=>j[1]-x[1]),U=L.filter(([,j],x)=>x===0||j<Math.max(2.5,L[0][1]*1.6)).slice(0,3),O=Vt.st[0]!==b[U[0][0]].id;Vt.w=T,Vt.k=C,Vt.acc=f.coords.accuracy!=null?f.coords.accuracy:999,Vt.st=U.map(([j])=>b[j].id),Vt.dist=Object.fromEntries(U.map(([j,x])=>[b[j].id,x])),Vt.fix=Date.now(),Vt.err="",O&&(Vt.i=0);let q=[un,Qe].find(j=>j.st.includes(Vt.st[0])&&Vt.dist[Vt.st[0]]<1.5);$e(!0)},f=>{Vt.err=f.code===1?__t(265):__t(266),$e(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let If=l=>Math.max(1,Math.round(l*1.3/.08));setTimeout(()=>ru(!0),400);let Ze={fixes:[],tid:"",no:new Map,shown:""};function Xg(){let l=Ze.fixes;if(l.length<2)return;let f=l[l.length-1],v=l.slice().reverse().find(I=>f.t-I.t>=8e3&&f.t-I.t<=9e4);if(!v)return;let y=Math.hypot(f.w[0]-v.w[0],f.w[1]-v.w[1])*f.k,T=f.spd!=null&&f.spd>0?f.spd*3.6:y/((f.t-v.t)/36e5);if(f.acc!=null&&f.acc>100)return;if(Ze.tid){let I=tt.find(G=>G.tr&&String(G.tr.num)===Ze.tid)||vs(ne()).out.find(G=>G.tr&&String(G.tr.num)===Ze.tid);if(I){if(Math.hypot(I.p.w[0]-f.w[0],I.p.w[1]-f.w[1])*f.k<=5){Ze.far=0;return}if(Ze.far||(Ze.far=f.t),f.t-Ze.far<12e4)return}Ze.far=0}if(T<22||T>200)return;let C=[f.w[0]-v.w[0],f.w[1]-v.w[1]],L=null,U=2.5,O=tt.filter(I=>I.real),q=vs(ne()).out.filter(I=>I.tr&&!O.some(G=>G.tr&&String(G.tr.num)===String(I.tr.num)));for(let I of[...O,...q]){if(!I.tr)continue;let G=I.real?2.5:3.5,K=Math.hypot(I.p.w[0]-f.w[0],I.p.w[1]-f.w[1])*f.k;if(K>Math.min(U,G)||L&&L.real&&!I.real)continue;let _t=I.real?I.v.next:I.p.next;if(_t==null||_t<0)continue;let At=b[I.tr.pat.stops[_t]].w,Zt=[At[0]-I.p.w[0],At[1]-I.p.w[1]];if(Zt[0]*C[0]+Zt[1]*C[1]<=0)continue;let Ct=String(I.tr.num);(Ze.no.get(Ct)||0)>Date.now()||(U=K,L=I)}if(!L)return;let j=String(L.tr.num);if(Ze.tid===j)return;Ze.tid=j,w=Pt=k=!1,bt=-1,ut=L.tr,It=L.tr,Object.assign(s,{tx:L.p.w[0],ty:L.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());{let I=L.tr.pat.stops,G=L.real?L.v.next:L.p.next,K=[...un.st,...Qe.st],_t=I.findIndex((At,Zt)=>Zt>=G&&K.includes(b[At].id));_t>0&&!(Ye&&Ye.num===j)&&(Ye={num:j,sid:b[I[_t]].id,at:Date.now()},Aa())}Re(),u._h="",Ue(),et=0,a();let x=m("#onb");x||(x=document.createElement("div"),x.id="onb",document.body.appendChild(x)),x.innerHTML=`${__t(267)}${p(L.tr.fam)} ${p(L.tr.num)}${__t(268)}${p(b[L.tr.pat.stops[L.tr.pat.stops.length-1]].n)}${__t(269)}${Ye&&Ye.num===j?`${__t(271)}${p(b[$t.get(Ye.sid)].n)}`:""}${__t(270)}`,x.className="on",x.querySelector("[data-onb-no]").onclick=()=>{Ze.no.set(j,Date.now()+20*6e4),Ze.tid="",It=null,ut=null,u._h="",Ue(),x.className=""},x.querySelector("[data-onb-x]").onclick=()=>{x.className=""},setTimeout(()=>{x.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let l=null,f=()=>{l==null&&(l=navigator.geolocation.watchPosition(y=>{let{longitude:T,latitude:C}=y.coords,L={t:y.timestamp||Date.now(),w:yt(T,C),k:Rf(T,C),spd:y.coords.speed,acc:y.coords.accuracy};Ze.fixes.push(L),Ze.fixes=Ze.fixes.filter(U=>L.t-U.t<12e4);try{ne().live&&Xg()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},v=()=>{l!=null&&(navigator.geolocation.clearWatch(l),l=null)};setTimeout(f,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?v():(Ze.fixes=[],f())})}setInterval(()=>{!document.hidden&&(Date.now()-Vt.fix>11e4||Da.some(l=>l.goAt))&&ru(!1)},3e4);let Si=l=>{try{localStorage.setItem("rod_"+l.key,JSON.stringify({st:l.st,i:l.i,walk:l.walk,open:l.open,hide:l.hide||"",goAt:l.goAt||0,platAt:l.platAt||0}))}catch{}},Ws=l=>l.st.length?$t.get(l.st[l.i]||l.st[0]):null;function Pf(l,f,v,y){if(y&&f.bus)return f.bstops.slice(1).some(L=>y.has(L))?"to":"out";if(y&&f.tr){let L=f.tr.pat.stops,U=L.indexOf(l);if(U>=0&&L.slice(U+1).some(O=>y.has(O)))return"to"}if(y&&f.tr)return"out";let T=$t.get(f.destId)??b.findIndex(L=>L.n===f.dest);if(T<0||T==null||v==null)return"otros";let C=L=>Math.hypot(b[L].w[0]-b[v].w[0],b[L].w[1]-b[v].w[1]);return C(T)<C(l)?"to":"out"}let Xs=l=>l<1?__t(241):l<60?Math.floor(l)+" min":Math.floor(l/60)+" h "+String(Math.floor(l%60)).padStart(2,"0"),Lf=0,qg=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Df=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Nf=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Na=l=>{let f=l.es||l.txt;return Df.test(f)||Df.test(l.txt)?3:Nf.test(f)||Nf.test(l.txt)||l.lvl>=2?2:1};function Yg(l,f,v){let y=Ws(l);if(l===Vt){if(Ze.tid)return"";if(y==null)return`${__t(272)}${Vt.err?p(Vt.err)+__t(273):__t(274)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([un,Qe].find(Ht=>Ht.st.includes(Vt.st[0])&&Vt.dist[Vt.st[0]]<1.5)||Date.now()-Vt.fix>10*6e4)return"";l.walk=If(Vt.dist[l.st[l.i]]||0)}if(y==null){let ot=Vt.st.length?$t.get(Vt.st[0]):null,Ht=l===Qe?un:Qe,ae=ot!=null&&!Ht.st.includes(Vt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${l.ico}</span><span class="htit"><b>${l.name}</b><small>${ae?`${__t(275)}${p(b[ot].n)}</b>`:__t(276)}</small></span>${ae?`<button type="button" class="hpick" data-hnear="${l.key}${__t(277)}`:""}<button type="button" class="hpick alt" data-hset="${l.key}">${ae?__t(278):__t(279)}</button></div></div>`}Gg(y,()=>$e(!0));let T=l===Vt?null:l===un?Qe:un,C=T?Ws(T):null,L=C!=null&&C!==y?C:$g,U=C!=null&&C!==y?T===Qe?__t(280):"casa":"Barcelona",O=b[y].fams,q=new Set([...O].filter(ot=>Y.has(ot))),j=q.size<O.size,x=!1;q.size||(q=new Set(O),j=!1,x=!0);let I=Vt.w?Math.hypot(b[y].w[0]-Vt.w[0],b[y].w[1]-Vt.w[1])*Vt.k:null,G=I!=null&&Date.now()-Vt.fix<10*6e4;l.platAt&&Date.now()-l.platAt>45*6e4&&(l.platAt=0,Si(l));let K=l!==Vt&&!!l.platAt,_t=l===Vt||G&&I>3&&!l.goAt&&!K,At=K||l!==Vt&&G&&I<.08&&Vt.acc<=40&&!(l===un&&Vt.homeW&&Math.hypot(Vt.homeW[0]-Vt.w[0],Vt.homeW[1]-Vt.w[1])*Vt.k<.05),Zt=l.goAt?(Date.now()-l.goAt)/6e4:null;Zt!=null&&(Zt>60||At)&&(l.goAt=0,Si(l));let Ct=!At&&l!==Vt&&!!l.goAt,lt=Ct?G&&I<=3?If(I):Math.max(0,l.walk-Zt):0,pe=hl(y),te=pe.filter(ot=>!X[ot.fam]||Y.has(ot.fam)||x),de=_t||At?0:Ct?lt:l.walk,nn=H.alerts.filter(ot=>[...ot.fams].some(Ht=>q.has(Ht))||ot.stops&&ot.stops.has(y)),on=nn.some(ot=>qg.test(ot.es||ot.txt)),qt={to:[],out:[],otros:[],all:te},_n=U!=="Barcelona"?new Set(T.st.map(ot=>$t.get(ot)).filter(ot=>ot!=null)):null;te.forEach(ot=>qt[Pf(y,ot,L,_n)].push(ot));let ss="";if(_n&&!qt.to.length&&te.length<pe.length){let ot=pe.filter(Ht=>!te.includes(Ht)&&Pf(y,Ht,L,_n)==="to");ot.length&&(qt.to=ot,ss=[...new Set(ot.map(Ht=>Ht.fam))].sort(D).join(", "))}let xn=ot=>{if(ot==="all")return __t(281);let Ht=_e=>(_e.find(En=>En.fam)||{}).fam;if(ot==="to")return __t(282)+Fi(U==="Barcelona"?"Barcelona":b[L].n,Ht(qt.to)||[...q][0])+(()=>{let _e=j&&!ss?[...q].filter(En=>qt.to.some(rs=>rs.fam===En)).sort(D):[];return _e.length?`<span class="hwf" title="${__t(283)}">${_e.map(Dn).join("")}</span>`:""})();let ae=[];for(let _e of qt[ot])ae.some(En=>En[0]===_e.dest)||ae.push([_e.dest,_e.fam]);return ae.length?__t(282)+ae.slice(0,2).map(([_e,En])=>Fi(_e,En)).join(" "):__t(284)},Tr=Fa.get(l.key);Tr&&!pe.some(ot=>String(ot.num)===Tr&&!ot.gone)&&hu(l.key,null);let Ar=ot=>{let Ht=Tr&&qt[ot].find(tn=>String(tn.num)===Tr&&!tn.gone);if(Ht&&Ht.cancel)return{cls:"v-no",pin:1,x:Ht,big:__t(285),small:`${it(Ht.est)} \xB7 ${Ht.fam} a ${Ht.dest}${Ht.num?" \xB7 "+__t(286)+Ht.num:""}`,warn:""};let ae=Ht||qt[ot].find(tn=>!tn.cancel&&!tn.gone&&tn.est-f.min>=de);if(!ae){let tn=qt[ot].find(Js=>!Js.cancel);return tn&&!_t?{cls:"v-no",big:__t(287),small:`${__t(288)}${it(tn.est)}${__t(289)}${Xs(tn.est-f.min)}${__t(290)}`}:{cls:"v-no",big:__t(291),small:__t(292)}}let _e=ae.est-f.min-de,En=_t||At?"v-info":Ct?_e<1.5?"v-warn":"v-ok":_e<1.5?"v-bad":_e<5?"v-warn":"v-ok",rs=ae.ghost?qt[ot].find(tn=>!tn.cancel&&!tn.ghost&&tn.live&&tn.est>ae.est):null;if(Ht&&_e<0&&!_t&&!At){let tn=qt[ot].find(Js=>!Js.cancel&&!Js.gone&&!Js.ghost&&Js!==ae&&Js.est-f.min>=de);return{cls:"v-no",pin:1,miss:1,nxt:tn,x:ae,ghost:!!ae.ghost,big:__t(293),small:`${it(ae.est)} \xB7 ${ae.fam} a ${ae.dest}${ae.plat?__t(294)+ae.plat:""}${ae.num?" \xB7 "+__t(286)+ae.num:""}`,warn:tn?`\u27A1\uFE0F ${__t(295)}: ${__t(296)} ${Xs(tn.est-f.min-de)} \xB7 ${it(tn.est)}${tn.arr!=null?" \u2192 "+it(tn.arr):""}${tn.plat?__t(294)+tn.plat:""}${tn.num?" \xB7 "+__t(286)+tn.num:""}`:""}}return{pin:Ht?1:0,cls:En,ghost:!!ae.ghost,big:_t||At?_e<1?__t(297):__t(298)+Xs(_e):Ct?_e<1.5?__t(299):__t(300)+Xs(_e)+__t(301):_e<1.5?__t(302):__t(303)+Xs(_e),warn:!ae.ghost&&ae.noPos&&Ht?"\u{1F4E1} "+__t(304):!ae.ghost&&ae.late&&Ht?__t(305):ae.ghost?`${__t(306)}${rs?`${__t(307)}${it(rs.est)}`:""}`:on?__t(308):"",small:`${ae.bus?__t(309):""}${it(ae.est)} \xB7 ${ae.fam} a ${ae.dest}${ae.plat?__t(294)+ae.plat:""}${ae.dl>=1?` \xB7 +${Math.round(ae.dl)} min`:""}${ae.arr!=null?`${__t(310)}${it(ae.arr)}`:""}${ae.num?" \xB7 "+__t(286)+ae.num:""}`,x:ae}},s0=_n||new Set([L]),r0=ot=>{let Ht=ot.tr;if(!Ht)return null;let ae=Ht.pat.stops,_e=ae.indexOf(y);if(_e<0)return null;let En=-1;for(let rs=_e+1;rs<ae.length;rs++)if(s0.has(ae[rs])){En=rs;break}return En<0?null:ot.est+(Ht.pat.t[2*En]-Ht.pat.t[2*_e+1])};qt.to.forEach(ot=>{ot.arr=r0(ot)});let _l=qt.out.length?"out":"otros",kn=Ar("to"),Ba=Ar(_l);if(!_t&&l!==Vt&&kn.x&&l===au()&&Qg(l,kn.x,b[y].n,de),At||l===Vt&&Vt.acc<=40&&(Vt.dist[l.st[l.i]]||9)<.08){for(let ot of[kn.x,Ba.x].concat(l===Vt?[Ar("all").x]:[]))if(ot&&!ot.cancel&&ot.est-f.min<=2&&ot.est-f.min>-.5){let Ht="w"+ot.num+"|"+Math.round(ot.sm);dl.has(Ht)||(dl.add(Ht),Qh(`${__t(311)}${ot.fam} a ${ot.dest}`,`${__t(128)}${Math.max(0,Math.round(ot.est-f.min))}${__t(312)}${b[y].n}${ot.plat?__t(294)+ot.plat:""}`))}}let Xf=z()&&f.live,qf=q.size===1,a0=ot=>{let Ht=ot.est-f.min;return _t?ot.cancel?"cx":Ht<0?"u-miss":"u-info":ot.cancel?"cx":Ht<de?"u-miss":Ht<de+1.5?"u-now":Ht<de+5?"u-soon":"u-ok"},o0=ot=>{if(ot.gone)return`<li class="hr u-gone${ot.live?" on":""}${Ta(ot)?" sel":""} go" data-dk="${v.push(ot)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${it(ot.est)}${__t(313)}${Os(Math.max(1,Math.round(f.min-ot.est))+" min")}</small></span><span class="hrd">${Fi((qf?"":ot.fam+" \xB7 ")+ot.dest,ot.fam)}${__t(314)}${p(ot.num)}</small></span><span class="hrm">${ot.dl>=1?`<em class="dl ${Oi(ot.dl)}">+${Math.round(ot.dl)}</em>`:""}</span></li>`;let Ht=!ot.cancel&&ot.est-f.min<de,ae=nu(ot.num,"");return`<li class="hr ${a0(ot)}${ot.live?" on":""}${ot.ghost?" gh":""}${Ta(ot)?" sel":""}${Tr&&String(ot.num)===Tr?" pin":""}${yi.some(_e=>{let En=tu(_e,t.days.indexOf(f.ymd));return En&&String(En.num)===String(ot.num)})?" fav":""} go" style="--lc:${X[ot.fam]||"#6b7385"}" data-dk="${v.push(ot)-1}" title="${ot.cancel?__t(285):Ht?__t(293):__t(315)}"><span class="hrt"><b>${ot.cancel?"\u2715":Ht?it(ot.est):Xs(ot.est-f.min)}</b><small>${ot.cancel?__t(316):ot.late?__t(317):Ht?__t(318):ot.ghost?__t(319):it(ot.est)}</small></span><span class="hrd">${ot.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Fi((qf?"":ot.fam+" \xB7 ")+ot.dest,ot.fam)}${ae.length?`<i class="cr" title="${p(ae.map(_e=>ll(_e.kind)).join(" \xB7 "))}">${ae.slice(0,2).map(_e=>ol[_e.kind]).join("")}</i>`:""}${ot.arr!=null?`${__t(320)}${it(ot.arr)}${ot.num?" \xB7 "+__t(286)+p(ot.num):""}${(()=>{let _e=ot.num&&pi(ot.num);return _e&&_e.n>=3&&_e.late/_e.n>=.5?`${__t(321)}${_e.late}/${_e.n})</b>`:""})()}</small>`:""}${ot.obs?`<small class="hro">${p(ot.obs)}</small>`:""}</span><span class="hrm">${!ot.cancel&&ot.dl>=1?`<em class="dl ${Oi(ot.dl)}">+${Math.round(ot.dl)}</em>`:""}${ot.plat?`${__t(206)}${p(ot.plat)}</i>`:""}</span></li>`},ka=(ot,Ht,ae)=>`<div class="hcol"><div class="hdir">${xn(ot)}${ae?`<button type="button" class="hhide" data-hhide="${l.key}:${ae}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${Ht.cls}${Ht.ghost||Ht.pin&&Ht.x&&Ht.x.noPos?" gh":""}${Ht.x?" go":""}"${Ht.x?` data-dk="${v.push(Ht.x)-1}"`:""}><b>${Ht.big}</b>${Ht.pin?`<button type="button" class="hunpin" data-unpin="${l.key}" title="${__t(322)}">\u{1F4CC} ${__t(323)} \u2715</button>`:""}<small>${p(Ht.small)}</small>${Ht.pin&&Ht.x&&Ht.x.num?(_e=>_e?`<span class="hwhere">\u{1F4CD} ${p(_e)}</span>`:"")(e0(Ht.x.num)):""}${Ht.warn?`<span class="hvw">${p(Ht.warn)}</span>`:""}</div><ol>${qt[ot].slice(0,(l.more?ot==="all"||l.hide?20:10:ot==="all"?7:l.hide?8:4)+qt[ot].filter(_e=>_e.gone).length).map(o0).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(l===Vt){let ot=Ar("all");var l0=ot.x?`<span class="nw">${ot.big}</span> \xB7 <span class="nw"><b>${it(ot.x.est)}</b> ${p(ot.x.fam)}${__t(324)}${p(ot.x.dest)}${ot.x.plat?'<span class="nw">'+__t(294)+p(ot.x.plat)+"</span>":""}`:ot.big}let c0=l===Vt?l0:kn.x?`<span class="nw">${kn.big}${kn.x.plat?__t(294)+p(kn.x.plat):""}</span> \xB7 <span class="nw"><b>${it(kn.x.est)}</b>${kn.x.arr!=null?`${__t(326)}${it(kn.x.arr)}</b>`:""}${__t(325)}${p(U)}</span>`:__t(327)+p(U),vn=l===Vt?(ot=>ot.pin?ot:null)(Ar("all")):kn.pin?kn:Ba.pin?Ba:null,h0=vn?l===Vt?"all":vn===kn?"to":_l:"",za=!!(vn&&(vn.ghost||vn.x.noPos||vn.x.cancel)),xu=!!(vn&&vn.miss),Cr=za?qt[h0].find(ot=>!ot.cancel&&!ot.ghost&&!ot.gone&&ot.est>vn.x.est-.01&&ot!==vn.x&&ot.est-f.min>=(_t||At?0:de)):null,u0=xu?`<span class="nw">${__t(287)}</span>${vn.nxt?` \xB7 <span class="nw">${__t(328)} <b>${it(vn.nxt.est)}</b>${vn.nxt.arr!=null?` \u2192 <b>${it(vn.nxt.arr)}</b>`:""}</span>`:""}`:"",d0=za?`<span class="nw">\u26A0\uFE0F ${vn.x.cancel?__t(285):vn.ghost?__t(329):__t(330)}</span>${Cr?` \xB7 <span class="nw">${__t(328)} <b>${it(Cr.est)}</b>${Cr.arr!=null?` \u2192 <b>${it(Cr.arr)}</b>`:""}${Cr.plat?__t(294)+p(Cr.plat):""}</span>`:""}`:"";return`<div class="hplace ${l.open?"open":""}${vn?" pinned":""}${za?" pgh":""}"><button type="button" class="hhead" data-ht="${l.key}"><span class="hico">${l.ico}</span><span class="htit"><b>${p(b[y].n)}${vn&&vn.x.num?`<i class="hpn">\u{1F4CC} ${p(vn.x.num)}</i>`:""}</b><small class="c${za||xu?"warn":on?"bad":kn.cls.slice(2)}">${za?d0:xu?u0:c0}</small></span><span class="hchev">\u25BE</span></button>`+(l.open?`
      <div class="hbody">
        ${l.st.length>1?`<div class="hst">${l.st.map((ot,Ht)=>{let ae=$t.get(ot);return ae==null?"":`<button type="button" data-hs="${l.key}:${Ht}" class="${Ht===l.i?"on":""}">${p(b[ae].n)}</button>`}).join("")}</div>`:""}
        ${l===Vt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let ot=Vt.dist[l.st[l.i]]||0;return ot<1?Math.round(ot*100)*10+" m":ot.toFixed(1).replace(".",",")+" km"})()}${__t(332)}${l.walk}${__t(333)}`:""}
        ${K?`<div class="hwalk away">${__t(335)}<a data-hplat="${l.key}${__t(334)}`:At?`${__t(336)}${l.key}${__t(337)}`:Ct?`${__t(338)}${Math.round(lt)} min</b>${G&&I<=3?__t(339):""} \xB7 <a data-hgo="${l.key}${__t(334)}`:""}${_t&&l!==Vt?`${__t(340)}${I<10?I.toFixed(1).replace(".",","):Math.round(I)}${__t(341)}`:""}<div class="hwalk"${_t||At||Ct?" hidden":""}><button type="button" class="hgo" data-hgo="${l.key}:1">\u{1F6B6} Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${l.key}:1">${__t(342)}</button><span class="hstep" title="${__t(343)}">${__t(344)} <button type="button" data-hw="${l.key}:-1">\u2212</button><b>${l.walk} min</b><button type="button" data-hw="${l.key}:1">+</button> ${__t(345)}</span></div>
        ${(()=>{let ot=yi.filter(Ht=>l.st.includes(Ht.sid));return ot.length?`<div class="hfav">${ot.map(Ht=>{let ae=tu(Ht,t.days.indexOf(f.ymd)),_e=ae&&te.find(En=>String(En.num)===String(ae.num));return`\u2B50 <b>${Ht.t}</b> ${p(Ht.fam)} ${_e?_e.cancel?__t(346):_e.gone?__t(347):_e.dl>=1?`<em class="dl ${Oi(_e.dl)}">+${Math.round(_e.dl)}${__t(348)}${it(_e.est)}`:__t(349):__t(350)}`}).join("<br>")}</div>`:""})()}
        ${j&&ss?`${__t(351)}${[...q].sort(D).map(Dn).join(" ")}${__t(352)}${U}${__t(353)}${ss}${__t(354)}`:x?`${__t(355)}${[...Y].sort(D).slice(0,3).map(Dn).join(" ")}${__t(356)}`:""}
        ${nn.length?`<div class="hal ${on?"bad":""}${pu.v?" open":""}" data-halx>\u26A0\uFE0F ${Ra(nn[0])} ${p(nn[0].txt)} <small>${Ia(nn[0])}</small>${nn.length>1?` <a data-hal>+${nn.length-1}${__t(357)}`:""}</div>`:`${__t(358)}${[...q].sort(D).join(", ")}</div>`}
        ${(()=>{let ot=l.st.flatMap(Ht=>nu("",Ht));return ot.length?`<div class="hcr">${ot.slice(0,3).map(Ht=>`${ol[Ht.kind]} <b>${p(ll(Ht.kind))}</b> <small>${Ht.up>1?Ht.up+__t(245):""}${bf(Ht)}</small>`).join("<br>")}</div>`:""})()}
        ${l===Vt?`<div class="hcols one">${ka("all",Ar("all"))}</div>`:l.hide==="out"?`<div class="hcols one">${ka("to",kn)}</div><a class="hshow" data-hshow="${l.key}${__t(359)}`:l.hide==="to"?`<div class="hcols one">${ka(_l,Ba)}</div><a class="hshow" data-hshow="${l.key}${__t(359)}`:`<div class="hcols">${ka("to",kn,"to")}${ka(_l,Ba,"out")}</div>`}
        ${te.length>(l===Vt?7:8)?`<button type="button" class="hmore" data-hmore="${l.key}">${l.more?__t(360):__t(361)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Xf?Xn.get(b[y].id)?.d?__t(362):__t(363):__t(364)} \xB7 \u25CF = tren circulando">${Xf?Xn.get(b[y].id)?.d?__t(365):__t(366):__t(367)}</span><a data-hmap="${y}${__t(331)}${l===Vt?__t(368):`<a data-hset="${l.key}${__t(369)}`}${l===Qe?`${__t(370)}`:""}</div>
      </div>`:"")+"</div>"}let Mi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Uf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ff=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,qs=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),ul=()=>{let l=new Set;return[...un.st,...Qe.st].forEach(f=>{let v=$t.get(f);v!=null&&b[v].fams.forEach(y=>l.add(y))}),[...l].sort(D)},Ua=()=>({stations:[...un.st,...Qe.st],lines:ul().filter(l=>!qs.has(l))}),Zg=l=>Uint8Array.from(atob(l.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((l.length+3)%4)),f=>f.charCodeAt(0));async function Of(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Bf(l){let v=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:l.toJSON(),...Ua()})})).json();if(!v.ok)throw new Error(v.err||"error")}function au(){let l=Ws(un),f=Ws(Qe);if(l==null||f==null)return l!=null?un:f!=null?Qe:null;if(Vt.w&&Date.now()-Vt.fix<3*36e5){let v=y=>Math.hypot(b[y].w[0]-Vt.w[0],b[y].w[1]-Vt.w[1]);return v(l)<=v(f)?un:Qe}return new Date().getHours()<13?un:Qe}function kf(l){let f=au(),v=f===un?Qe:un,y=f&&Ws(f),T=v&&Ws(v);if(y==null||T==null)return!0;let C=(l.es||"")+" "+(l.txt||""),L=t.days.indexOf(ne().ymd),U=ne(),O=[...new Set([...C.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(j=>j[1]))];if(O.length)return O.some(j=>{let x=La(j);if(!x)return!1;let I=x.pat.stops,G=I.indexOf(y),K=I.indexOf(T);if(G<0||K<0||G>K)return!1;let _t=x.t0+x.pat.t[2*G+1];return _t>U.min-60&&_t<U.min+150});let q=C.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(q){let j=q[1].toLowerCase(),x=b.findIndex(I=>I.n&&j.startsWith(I.n.toLowerCase()));if(x>=0){let I=(Q[L]||[]).find(G=>{let K=G.pat.stops;return K[K.length-1]===x&&K.includes(y)&&K.includes(T)});if(I){let G=I.pat.stops;return G.indexOf(y)<G.indexOf(T)}}}return!0}let Bn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Jg(){let{lines:l,stations:f}=Ua(),v=new Set(l),y=new Set(f.map(L=>$t.get(L))),T=H.alerts.filter(L=>([...L.fams].some(U=>v.has(U))||[...L.stops||[]].some(U=>y.has(U)))&&kf(L));if(!Bn.seen){try{Bn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Bn.seen=new Set}if(!Bn.seen.size){T.forEach(L=>Bn.seen.add(L.id+"|"+L.txt.length)),zf();return}}let C=T.filter(L=>!Bn.seen.has(L.id+"|"+L.txt.length));if(C.length&&(C.forEach(L=>Bn.seen.add(L.id+"|"+L.txt.length)),zf(),!(!Bn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let L of C.slice(0,3)){let U=(L.src==="Adif"?__t(254):"Rodalies")+(L.fams.size?" \xB7 "+[...L.fams].sort(D).slice(0,4).join(" "):""),O={body:L.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+L.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(q=>q?q.showNotification(U,O):new Notification(U,O)).catch(()=>{try{new Notification(U,O)}catch{}})}}function zf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Bn.seen].slice(-400)))}catch{}}async function Kg(){if(Bn.on)Bn.on=!1,hn(__t(371));else{if(!("Notification"in window)){hn(Uf&&!Ff()?__t(372):__t(373));return}if(await Notification.requestPermission()!=="granted"){hn(__t(374));return}Bn.on=!0,hn(__t(375)+Ua().lines.join(", ")+__t(376))}try{localStorage.setItem("rod_ln",Bn.on?"1":"")}catch{}$e(!0)}async function jg(){if(!H.repOk)return Kg();if(!Mi.busy){Mi.busy=!0;try{let l=await Of();if(!l){hn(Uf&&!Ff()?__t(377):__t(378));return}if(await navigator.serviceWorker.ready,Mi.on){let f=await l.pushManager.getSubscription();f&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:f.endpoint})}).catch(()=>{}),await f.unsubscribe().catch(()=>{})),Mi.on=!1,hn(__t(371))}else{if(!H.url){hn(__t(379));return}if(await Notification.requestPermission()!=="granted"){hn(__t(374));return}let v=(await Tt(H.url.replace(/\/+$/,""),"/push/key")).key,y=await l.pushManager.getSubscription()||await l.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Zg(v)});await Bf(y),Mi.on=!0,hn(__t(380)+Ua().lines.join(", "))}try{localStorage.setItem("rod_push",Mi.on?"1":"")}catch{}}catch(l){hn(__t(381)+(l.message||l))}finally{Mi.busy=!1,$e(!0)}}}async function Vf(){if(Mi.on)try{let l=await Of(),f=l&&await l.pushManager.getSubscription();f&&await Bf(f)}catch{}}let ou=!1,Hf="";function lu(){let l=ut?"t"+(ut.tid||ut.vtid):bt>=0?"s"+bt:Pt?"a":w?"n":"";l!==Hf&&(ou=!1,Hf=l);let f=innerWidth<=640&&!!l&&!ou&&!document.documentElement.classList.contains("tabmode"),v=m("#inf");v.classList.contains("compact")!==f&&(v.classList.toggle("compact",f),requestAnimationFrame(()=>{if(u.style.display!=="none"){let y=v.getBoundingClientRect().bottom;u.style.top=Math.round(y+8)+"px",u.style.maxHeight=Math.max(140,m("#rc").getBoundingClientRect().top-y-16)+"px"}}))}let dl=new Set;function Qg(l,f,v,y){if(!(Bn.on||Mi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let T=ne(),C=f.sm-T.min-y;if(!T.live||f.dl<10||C>40||dl.has(f.num+"|"+f.sm))return;dl.add(f.num+"|"+f.sm);let L=`${l.ico} ${v} ${l===Qe?__t(384):__t(385)}${__t(382)}${it(f.sm)}${__t(383)}${Math.round(f.dl)} min`,U=`${f.fam} a ${f.dest}${__t(386)}${it(f.est)}. Si ibas a cogerlo, puedes salir ${Math.round(f.dl)}${__t(387)}${l===Qe?__t(262):__t(261)}${__t(388)}`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(O=>O?O.showNotification(L,{body:U,tag:"rd-"+f.num,icon:"icons/icon-192.png"}):new Notification(L,{body:U})).catch(()=>{try{new Notification(L,{body:U})}catch{}})}let wr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",l=>{let f=l.target.closest&&l.target.closest("[data-nowx]");if(!f||l.target.closest("a"))return;let v=f.dataset.nowx?f.dataset.nowx.split("|"):[];if(v.length){if(f.classList.contains("col"))wr.open=!0;else{wr.open=!1,v.forEach(y=>wr.seen.add(y));try{localStorage.setItem("rod_seen",JSON.stringify([...wr.seen].slice(-200)))}catch{}}$e(!0)}});function t0(l){let f=l.lines;if(!f.length&&Vt.st&&Vt.st.length){let x=new Set;Vt.st.forEach(I=>{let G=$t.get(I);G!=null&&b[G].fams.forEach(K=>x.add(K))}),f=[...x].sort(D)}let v=new Set(f),y=H.alerts.filter(x=>!v.size||[...x.fams].some(I=>v.has(I))),T=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(121)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,C=y.reduce((x,I)=>Math.max(x,Na(I)),0),L=C===3?"\u26D4 ":C===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",U=`<div class="hnowh"><span class="hnowl"><b>${y.length?L+y.length+(y.length===1?__t(256):__t(257)):__t(389)}</b>${f.length?f.map(Dn).join(""):""}</span>${T}</div>`,O=y.filter(x=>!wr.seen.has(x.id)),q=y.length&&(wr.open||O.length>0),j=y.reduce((x,I)=>Math.max(x,Na(I)),0);return`<div class="hnow${j===3?" bad":j===2?" warn":j===1?" info":""}${y.length&&!q?" col":""}" data-nowx="${p(y.map(x=>x.id).join("|"))}">${U}${q?y.slice().sort((x,I)=>Na(I)-Na(x)).map(x=>`<p class="sv${Na(x)}">${Ra(x)} ${p(x.txt)} <small>${Ia(x)}</small></p>`).join("")+`<small class="hnowt">${__t(390)}</small>`:""}</div>`}let Fa=new Map((()=>{try{return JSON.parse(localStorage.getItem("rod_pin")||"[]")}catch{return[]}})());function cu(){if(!document.documentElement.classList.contains("tabmode"))return;let l=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],f=(y,T)=>{y.style.fontSize=T===1?"":(y._f0*T).toFixed(1)+"px",y.querySelectorAll("b").forEach(C=>C.style.fontSize=T===1?"":(y._b0*T).toFixed(1)+"px")},v=1;for(let y of l){if(y.style.whiteSpace="",f(y,1),!y.clientWidth)continue;y._f0=parseFloat(getComputedStyle(y).fontSize);let T=y.querySelector("b");for(y._b0=T?parseFloat(getComputedStyle(T).fontSize):0;y.scrollWidth>y.clientWidth+1&&v>.86;)v-=.02,f(y,v)}if(v<1)for(let y of l)y._f0&&f(y,v);for(let y of l)y.scrollWidth>y.clientWidth+1&&(y.style.whiteSpace="normal")}addEventListener("resize",()=>{try{cu()}catch{}});function hu(l,f){f?Fa.set(l,f):Fa.delete(l);try{localStorage.setItem("rod_pin",JSON.stringify([...Fa]))}catch{}}function e0(l){let f=tt.find(C=>C.tr&&String(C.tr.num)===String(l));if(!f){let C=La(l),L=ne(),U=t.days.indexOf(L.ymd);if(!C)return"";let O=C.day===U-1?1440:0,q=C.t0+C.pat.t[1]-O;return q>L.min?__t(391)+b[C.pat.stops[0]].n+" ("+it(q)+")":""}let v=f.tr,y=C=>b[v.pat.stops[C]].n;if(f.real){let C=f.v;return C.pre?__t(392):C.atStop>=0&&(C.st==="STOPPED_AT"||C.still>30)?__t(393)+y(C.atStop):f.stop==="via"&&C.next>0?"\u23F8 "+__t(394)+y(C.next-1)+__t(395)+y(C.next):C.next>0?__t(169)+y(C.next-1)+__t(395)+y(C.next):C.next===0?__t(282)+y(0):""}let T=f.p&&f.p.next;return T>0?__t(396)+y(T-1)+__t(395)+y(T):""}function n0(l){if(!Ze.tid)return"";let f=tt.find(K=>K.tr&&String(K.tr.num)===Ze.tid)||vs(l).out.find(K=>K.tr&&String(K.tr.num)===Ze.tid);if(!f)return"";let v=f.tr,y=v.pat.stops,T=f.real?f.v.next:f.p.next;if(T==null||T<0)return"";let C=M(v),L=typeof C=="number"?Math.max(0,C/60):0,U=t.days.indexOf(l.ymd),O=v.day===U-1?1440:0,q=Ye&&Ye.num===Ze.tid?y.indexOf($t.get(Ye.sid)):-1;q<T&&(q=y.length-1);let j=v.t0+v.pat.t[2*q]+L-O,x=j-l.min,I=f.real&&f.v.atStop>=0?f.v.atStop:-1,G=I>=0?__t(393)+b[y[I]].n:__t(282)+b[y[T]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Dn(v.fam)} ${__t(286)}${p(v.num)}<i class="hpn onbx" data-onbx title="${__t(397)}">\u2715</i></b><small class="nofit cok">${p(G)} \xB7 <span class="nw">${__t(398)} ${p(b[y[q]].n)}</span> <span class="nw">${x>=1?__t(94)+Xs(x)+" \xB7 ":""}<b>${it(j)}</b>${L>=1?` <em class="dl ${Oi(L)}">+${Math.round(L)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button></div>`}function $e(l){let f=m("#home");if(!f)return;let v=performance.now();if(!l&&v-Lf<4e3)return;Lf=v;let y=ne(),T=[],C=Ua(),L=x=>{let I=Ws(x);return I==null||!Vt.w?1:Math.hypot(b[I].w[0]-Vt.w[0],b[I].w[1]-Vt.w[1])},U=[Vt,...[un,Qe].sort((x,I)=>L(x)-L(I))],O=(document.documentElement.classList.contains("tabmode")?t0(C)+n0(y):"")+U.map(x=>Yg(x,y,T)).join("")+(Da.some(x=>x.open)&&C.lines.length,"");f.className=Da.some(x=>x.open)?"open":"";let q=m("#bell");q||(q=document.createElement("button"),q.type="button",q.id="bell",q.onclick=jg,m("#inf .more").prepend(q));{let x=H.repOk?Mi.on:Bn.on;q.hidden=!C.lines.length,q.className=x?"on":"",q.textContent=(x?__t(406):__t(407))+C.lines.join(", "),q.title=(x?__t(408):__t(409))+__t(60)+C.lines.join(", ")+(H.repOk?"":__t(410))}if(f._h===O)return;f._h=O,f.innerHTML=O,cu();{let x=f.querySelector("[data-onbgo]");x&&(x.onclick=I=>{if(I.target.closest("[data-onbx]")){Ze.no.set(Ze.tid,Date.now()+20*6e4),Ze.tid="",It=null,$e(!0);return}let G=tt.find(K=>K.tr&&String(K.tr.num)===Ze.tid);G&&(w=Pt=k=!1,bt=-1,ut=G.tr,u._h="",Ue())})}{let x=[...f.children].find(I=>I.classList.contains("hplace")&&!I.querySelector(".hnew"));x&&x.classList.add("lead")}let j=x=>x==="work"?Qe:x==="near"?Vt:un;f.querySelectorAll("[data-hloc]").forEach(x=>x.onclick=()=>{Vt.err="",ru(!0)}),f.querySelectorAll("[data-ht]").forEach(x=>x.onclick=()=>{if(m("#inf").classList.contains("compact")){ou=!0,lu();return}let I=j(x.dataset.ht);I.open=!I.open,Si(I),$e(!0),(ut||bt>=0||Pt||w)&&(u._h="",Ue())}),f.querySelectorAll("[data-hs]").forEach(x=>x.onclick=()=>{let[I,G]=x.dataset.hs.split(":"),K=j(I);K.i=+G,Si(K),$e(!0)}),f.querySelectorAll("[data-hw]").forEach(x=>x.onclick=()=>{let[I,G]=x.dataset.hw.split(":"),K=j(I);K.walk=_(K.walk+ +G,0,60),Si(K),$e(!0)}),f.querySelectorAll("[data-hmap]").forEach(x=>x.onclick=()=>{let I=+x.dataset.hmap;w=Pt=k=!1,ut=null,bt=I,Re(),Object.assign(s,{tx:b[I].w[0],ty:b[I].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",Ue(),a()}),f.querySelectorAll("[data-hset]").forEach(x=>x.onclick=()=>{Ys=x.dataset.hset,g.value="",g.placeholder=Ys==="work"?__t(411):__t(412),g.focus()}),f.querySelectorAll("[data-hnear]").forEach(x=>x.onclick=()=>{let I=$t.get(Vt.st[0]);I!=null&&du(I,x.dataset.hnear)}),f.querySelectorAll("[data-hmore]").forEach(x=>x.onclick=()=>{let I=j(x.dataset.hmore);I.more=!I.more,$e(!0)}),f.querySelectorAll("[data-hhide]").forEach(x=>x.onclick=I=>{I.stopPropagation();let[G,K]=x.dataset.hhide.split(":"),_t=j(G);_t.hide=K,Si(_t),$e(!0)}),f.querySelectorAll("[data-hshow]").forEach(x=>x.onclick=()=>{let I=j(x.dataset.hshow);I.hide="",Si(I),$e(!0)}),f.querySelectorAll("[data-hgo]").forEach(x=>x.onclick=I=>{I.stopPropagation();let[G,K]=x.dataset.hgo.split(":"),_t=j(G);_t.goAt=K==="1"?Date.now():0,_t.goAt&&(_t.platAt=0),Si(_t),$e(!0)}),f.querySelectorAll("[data-hplat]").forEach(x=>x.onclick=I=>{I.stopPropagation();let[G,K]=x.dataset.hplat.split(":"),_t=j(G);_t.platAt=K==="1"?Date.now():0,_t.platAt&&(_t.goAt=0),Si(_t),$e(!0)}),f.querySelectorAll("[data-hnotst]").forEach(x=>x.onclick=I=>{I.stopPropagation(),Vt.homeW=Vt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Vt.w))}catch{}$e(!0)}),f.querySelectorAll("[data-hdel]").forEach(x=>x.onclick=()=>{Qe.st=[],Qe.open=!1,Si(Qe),$e(!0),Vf()}),f.querySelectorAll("[data-dk]").forEach(x=>x.onclick=()=>{let I=T[+x.dataset.dk];if(rn.on&&x.matches("li.hr")&&!I.gone&&I.num!=null){let G=x.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(G){let K=Fa.get(G)===String(I.num);hu(G,K?null:String(I.num)),K?ut&&String(ut.num)===String(I.num)&&(ut=null,It=null,rn.sk="",u._h="",Ue()):uu(I,!0),$e(!0);return}}uu(I)}),f.querySelectorAll("[data-unpin]").forEach(x=>x.onclick=I=>{I.stopPropagation(),hu(x.dataset.unpin,null),$e(!0)}),f.querySelectorAll("[data-hal]").forEach(x=>x.onclick=()=>m("#alr").click()),Ef(f)}function uu(l,f){if(!l)return;let v=t.days.indexOf(ne().ymd),y=tt.find(L=>L.real?l.tid&&L.v.tid===l.tid||l.num&&String(L.tr?L.tr.num:L.v.num)===String(l.num):l.tr&&L.tr===l.tr||l.num&&L.tr&&String(L.tr.num)===String(l.num)),T=l.tr||y&&y.tr||(Q[v]||[]).find(L=>String(L.num)===String(l.num));if(w=Pt=k=!1,bt=-1,f||void 0,ut=y?y.tr||{vtid:y.v.tid}:T||null,!ut)return;f&&(rn.sk="t"+(ut.num||ut.vtid)),It=y&&y.tr?y.tr:null,It&&innerWidth<=640&&(u.classList.add("peek"),m("#rc").classList.contains("min")||m("#rcgrab").click());let C=y?y.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),Re(),u._h="",Ue(),et=0,a()}let Ys=!1;g.addEventListener("blur",()=>setTimeout(()=>{Ys&&!g.value.trim()&&(Ys=!1,g.placeholder=__t(413))},600));function XM(){}function du(l,f){let v=f==="work"?Qe:un,y=b[l].id,T=b.filter(C=>C.fams.size&&C!==b[l]&&Math.hypot(C.w[0]-b[l].w[0],C.w[1]-b[l].w[1])<.6).map(C=>C.id);v.st=[y,...T].slice(0,3),v.i=0,v.open=!0,Si(v),$e(!0),Vf()}let fl=m("#lines");fl.innerHTML=`${__t(414)}`+V.map(l=>`<button type="button" style="--c:${X[l]}" data-f="${l}">${l}</button>`).join("");function $f(){try{$e(!0)}catch{}{let l=m("#linebtn");l||(l=document.createElement("button"),l.type="button",l.id="linebtn",fl.after(l),l.onclick=()=>{st=[...Y][0],k=w=Pt=!1,u._h="",Ue()});let f=Y.size===1?[...Y][0]:"";l.hidden=!f,f&&(l.innerHTML=`${__t(415)}${p(f)}${__t(416)}`)}fl.querySelectorAll("[data-f]").forEach(l=>{l.dataset.f!=="*"&&l.classList.toggle("off",!Y.has(l.dataset.f))})}fl.querySelectorAll("[data-f]").forEach(l=>l.onclick=()=>{let f=l.dataset.f;f==="*"?V.forEach(v=>Y.add(v)):Y.size===V.length?(Y.clear(),Y.add(f)):Y.has(f)?(Y.delete(f),Y.size||V.forEach(v=>Y.add(v))):Y.add(f);try{localStorage.setItem("rod_lines",JSON.stringify([...Y]))}catch{}$f(),he(),Re(),iu(),et=0,a()});let fu=[...document.querySelectorAll("[data-sp]")],gi=0;function Gf(l){let f=ne();l&&(Rt===l||gi===l)?Rt?(Xt=f.min,ee=f.min,Rt=0,gi=l):(ce=performance.now(),Rt=l,gi=0):l===0?(Rt=0,ee=null,gi=0):(Xt=f.min,ce=performance.now(),ee=f.min,Rt=l,gi=0),fu.forEach(v=>{let y=+v.dataset.sp;v.classList.toggle("on",y===(Rt||gi)||!Rt&&!gi&&ee==null&&y===0),v.classList.toggle("pz",!!gi&&y===gi),v.textContent=y===0?__t(417):gi===y?"\u25B6 \xD7"+y:Rt===y?"\u23F8 \xD7"+y:"\xD7"+y}),et=0,a()}fu.forEach(l=>l.onclick=()=>Gf(+l.dataset.sp)),m("#tsl").oninput=l=>{let f=+l.target.value;Xt=f,ee=f,ce=performance.now(),Rt===0&&!gi&&fu.forEach(v=>v.classList.remove("on")),et=0,a()},setInterval(()=>{ee!=null&&Rt&&Xt+(performance.now()-ce)/6e4*Rt>1560&&(Xt=240,ce=performance.now())},1e3),window.__rodSearch=l=>{let f=S(l.trim());if(!f){d.style.display="none",d._pick=null;return}let v=[],y=[];b.forEach((U,O)=>{if(!U.fams.size)return;let q=S(U.n);q.startsWith(f)||q.includes(" "+f)||q.includes("-"+f)?v.push(O):q.includes(f)&&y.push(O)});let T=v.concat(y).slice(0,7),C=R.filter(U=>S(U.name).startsWith(f)).sort((U,O)=>O.pop-U.pop).slice(0,3),L=T.map(U=>({h:`\u{1F689} ${p(b[U].n)}<em>${[...b[U].fams].sort(D).slice(0,3).map(O=>`<em class="ls" style="background:${X[O]}">${O}</em>`).join(" ")}</em>`,go:()=>{if(Ys){let O=Ys;Ys=!1,g.placeholder=__t(413),du(U,O);return}w=!1,Pt=!1,k=!1,bt=U,ut=null,It=null,Re(),Object.assign(s,{tx:b[U].w[0],ty:b[U].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ue(),a()}})).concat(C.map(U=>({h:`${p(U.name)}${__t(418)}`,go:()=>{Object.assign(s,{tx:U.cx,ty:U.cy,dist:_(U.size*3+14,14,60)}),a()}})));d.innerHTML=L.map((U,O)=>`<li data-i="${O}">${U.h}</li>`).join("")||__t(419),d.style.display="block",d._pick=U=>{L[U]&&(L[U].go(),d.style.display="none",g.value="",g.blur())},d.querySelectorAll("li[data-i]").forEach(U=>U.onclick=()=>d._pick(+U.dataset.i))},$f(),Re();try{let l=new URLSearchParams(location.search).get("st");if(l){let f=S(l),v=-1,y=0;b.forEach((T,C)=>{if(!T.fams.size)return;let L=S(T.n),U=L===f?3:L.startsWith(f)||f.startsWith(L)?2:L.includes(f)||f.includes(L)?1:0;U>y&&(y=U,v=C)}),v>=0&&setTimeout(()=>{bt=v,Re(),Object.assign(s,{tx:b[v].w[0],ty:b[v].w[1],dist:18,tilt:.5}),Ue(),a()},300)}}catch{}let pu={v:!1};document.addEventListener("click",l=>{!(l.target.closest&&l.target.closest("[data-halx]"))||l.target.closest("a")||(pu.v=!pu.v,$e(!0))}),u.addEventListener("click",l=>{if(!u.classList.contains("peek")||l.target.closest("button,a,input"))return;l.stopPropagation(),l.preventDefault(),u.classList.remove("peek");let f=u.querySelector(".mn");f&&(f.textContent="\u25BE"),u.scrollTop=0},!0);let rn={on:!1,cur:"now",home:new Map},pl=matchMedia("(max-width:640px)"),Oa=document.createElement("nav");Oa.id="tabs";let i0=[["now","\u{1F552}",__t(417)],["map","\u{1F5FA}\uFE0F",__t(420)],["line","\u{1F4CA}",__t(421)],["set","\u2699\uFE0F",__t(422)]];Oa.innerHTML=i0.map(([l,f,v])=>`<button type="button" data-tab="${l}"><span>${f}</span><small>${v}</small></button>`).join(""),document.body.appendChild(Oa);let Er=document.createElement("div");Er.id="tabL",document.body.appendChild(Er);let Zs=document.createElement("div");Zs.id="tabA",Zs.className="box",document.body.appendChild(Zs);let mu=(l,f)=>{l&&(rn.home.has(l)||rn.home.set(l,[l.parentNode,l.nextSibling]),f.appendChild(l))},Wf=()=>{for(let[l,[f,v]]of rn.home)try{f.insertBefore(l,v&&v.parentNode===f?v:null)}catch{}rn.home.clear()};function gu(){let l=Y.size===1?[...Y][0]:"",f=H.alerts.filter(y=>[...y.fams].some(T=>Y.has(T))).length,v=[k,Pt,st,l,f].join("|");Er._k!==v&&(Er._k=v,Er.innerHTML=`<button type="button" data-tl="stats" class="${k?"on":""}">\u{1F4CA} ${__t(423)}</button><button type="button" data-tl="alr" class="${Pt?"on":""}">\u26A0\uFE0F ${f}${f===1?__t(256):__t(257)}</button>${l?`<button type="button" data-tl="line" class="${st?"on":""}">\u{1F4CB} ${p(l)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(121)}">\u{1F4AC}</a>`,Er.querySelectorAll("[data-tl]").forEach(y=>y.onclick=()=>{let T=y.dataset.tl;k=T==="stats",Pt=T==="alr",st=T==="line"?l:"",w=!1,ut=null,bt=-1,k&&(Ce.at=0),u._h="",Ue(),gu()}))}function ml(){Wf();let l=window.__L||"es",f=ti.mode;Zs.innerHTML=`<h3>${__t(422)}</h3>
      <h4>\u{1F310} ${__t(424)}</h4><div class="seg2">${[["ca","Catal\xE0"],["es","Espa\xF1ol"],["en","English"]].map(([v,y])=>`<button type="button" data-lang="${v}" class="${l===v?"on":""}">${y}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(425)}</h4><div class="seg2">${[["auto",__t(426)],["light",__t(427)],["dark",__t(428)]].map(([v,y])=>`<button type="button" data-th="${v}" class="${f===v?"on":""}">${y}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(429)}</h4><div class="seg2">${[["0","Normal"],["1",__t(430)]].map(([v,y])=>`<button type="button" data-big="${v}" class="${document.documentElement.classList.contains("big")===(v==="1")?"on":""}">${y}</button>`).join("")}</div>
      <h4>\u{1F514} ${__t(431)}</h4><div id="tabAbell"></div>${ul().length?"":`<small class="tabAhint">${__t(432)}</small>`}${(()=>{let v=ul();return v.length>1?`<small class="tabAhint">${__t(433)}</small><div class="alch">${v.map(y=>`<button type="button" data-al="${p(y)}" class="ln${qs.has(y)?" off":""}" style="--c:${X[y]}">${p(y)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(434)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(435)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,Zs.querySelectorAll("[data-al]").forEach(v=>v.onclick=()=>{let y=v.dataset.al,T=ul();qs.has(y)?qs.delete(y):T.filter(C=>!qs.has(C)).length>1&&qs.add(y);try{localStorage.setItem("rod_aloff",JSON.stringify([...qs]))}catch{}$e(!0),ml()}),Zs.querySelectorAll("[data-big]").forEach(v=>v.onclick=()=>{let y=v.dataset.big==="1";document.documentElement.classList.toggle("big",y);try{localStorage.setItem("rod_big",y?"1":"")}catch{}ml()}),Zs.querySelectorAll("[data-th]").forEach(v=>v.onclick=()=>{ti.mode=v.dataset.th;try{localStorage.setItem("rod_theme",ti.mode)}catch{}il(),ml()}),mu(m("#bell"),m("#tabAbell")),mu(m("#src"),m("#tabArt")),mu(m("#ver"),m("#tabAinf"))}function gl(l){if(!rn.on)return;let f=rn.cur;if(rn.cur=l,document.documentElement.dataset.tab=l,window.__mapHidden=l!=="map",Oa.querySelectorAll("[data-tab]").forEach(v=>v.classList.toggle("on",v.dataset.tab===l)),l==="line")(ut||bt>=0)&&(rn.keep={t:ut,s:bt,sk:rn.sk}),!k&&!Pt&&!st&&(k=!0,Ce.at=0),ut=null,bt=-1,w=!1,u._h="",Ue(),gu();else if(f==="line"){k=Pt=!1,st="";let v=rn.keep;rn.keep=null,v&&l==="map"&&!ut&&bt<0&&(ut=v.t,bt=v.s,rn.sk=v.sk),u._h="",Ue()}l==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{eu()}catch{}dispatchEvent(new Event("resize"))})),l==="set"&&ml(),l==="now"&&($e(!0),requestAnimationFrame(cu)),et=0,a()}Oa.onclick=l=>{let f=l.target.closest("[data-tab]");f&&gl(f.dataset.tab)},window.__rodTabSync=()=>{if(!rn.on)return;let l=ut?"t"+(ut.num||ut.vtid):bt>=0?"s"+bt:"",f=l!==rn.sk;rn.sk=l,l&&f&&rn.cur!=="map"?gl("map"):(Pt||st||w)&&rn.cur!=="line"&&rn.cur!=="map"&&gl("line"),rn.cur==="line"&&gu()};function _u(){let l=pl.matches||document.documentElement.classList.contains("cap");l!==rn.on&&(rn.on=l,document.documentElement.classList.toggle("tabmode",l),l||(window.__mapHidden=!1),l?gl("now"):(delete document.documentElement.dataset.tab,Wf()))}pl.addEventListener?pl.addEventListener("change",_u):pl.addListener(_u),_u();{let l=m("#rc"),f=()=>document.documentElement.style.setProperty("--rch",Math.round(l.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(f).observe(l),f()}window.__rod={ONB:Ze,alertForMe:kf,whereAmI:au,departuresFor:hl,DEPS:Xn,tripByNum:La,delayOf:M,TID:ct,SID:$t,byDay:Q,get days(){return t.days},get hist(){return Ce},get past(){return ge.cur},get cols(){return Qn.mesh?Qn.mesh.count:-1},get dist(){return r.dist},get follow(){return It},get selTrip(){return ut},ST:b,TR:rt,FAM:V,act:()=>tt,setSpeed:Gf,RT:H,pollRT:le,nowState:ne,posAt:Vs,activeTrips:vs,LL:yt,select:l=>{ut=l,Ue()}}}var ga=window.__DATA__;var De=i=>document.querySelector(i),gs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Gn=(i,t,e)=>Math.min(e,Math.max(t,i)),Qd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Kn=De("#c"),Qo=new Ch({canvas:Kn,antialias:!0});Qo.setPixelRatio(Math.min(devicePixelRatio||1,2));var _s=new ro;_s.background=new fe(15659509);var $h=35,ts=new Hn($h,1,2,1500);_s.add(new Ro(16777215,9080992,1));var hg=new Po(16777215,.9);hg.position.set(-40,-70,90);_s.add(hg);var ji=100/ga.w,Jo=ga.w/2,Ko=ga.h/2,cn=[],tf=new Ri;_s.add(tf);var Bh=new rr({color:16777215,transparent:!0,opacity:.55});for(let i of ga.m){let t=new Ri,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let _ of i.g){let S=_.map(m=>{let p=[];for(let F=0;F<m.length;F+=2)p.push(new Ot((m[F]-Jo)*ji,(m[F+1]-Ko)*ji));return p.length>1&&p[0].equals(p[p.length-1])&&p.pop(),p}).filter(m=>m.length>=3);if(!S.length)continue;let R=new na(S[0]);for(let m=1;m<S.length;m++)R.holes.push(new or(S[m]));e.push(R);for(let m of S[0])s=Math.min(s,m.x),r=Math.max(r,m.x),a=Math.min(a,m.y),o=Math.max(o,m.y);for(let m of S)n.push(new uo(new fn().setFromPoints(m.map(p=>new W(p.x,p.y,0))),Bh))}if(!e.length)continue;let c;try{c=new bo(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new To({color:13421772}),u=new Rn(c,h);t.add(u);let g=new Ri;n.forEach(_=>g.add(_)),g.position.z=.04,tf.add(g),t.scale.z=.01,tf.add(t);let d={og:g,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:h,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=d,cn.push(d)}var _E=cn.map(i=>i.mesh),ig=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},ug=0,dg=0;for(let i of cn){for(let t of i.rings)ug+=ig(t[0])-t.slice(1).reduce((e,n)=>e+ig(n),0);dg+=i.area}var IM=Math.sqrt(dg/ug),Uh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},fg={"08":__t(436),17:__t(437),25:__t(438),43:__t(439)},lf="sqrt",cf="pop",Kd=0,ef=0,fa=1,Yo=1,PM={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},nf=i=>cf==="pop"?i.pop:i.pop/i.area,Nh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new fe(i));function LM(i){i=Gn(i,0,1)*(Nh.length-1);let t=Math.min(Math.floor(i),Nh.length-2);return Nh[t].clone().lerp(Nh[t+1],i-t)}var pa=i=>i>=100?gs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function DM(){ef=0;for(let i of cn)ef+=i.pop;[...cn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...cn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),gg()}var pg=new fe("#d3d8e2"),mg=new fe("#eceff3");window.__mapTheme=i=>{_s.background=new fe(i?856345:15659509),mg.set(i?"#2b3242":"#eceff3"),pg.set(i?"#1a1f29":"#d3d8e2"),Bh.color.set(i?856345:16777215),Bh.opacity=i?.7:.55,hf.color.set(i?329483:2764864),uf.color.set(i?9081766:16777215);for(let t of cn)t.base&&Gh(t);Pn()};function Gh(i){i.mat.color.copy(i.base).lerp(mg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(pg,.8)}function gg(){fa=1,Yo=1e12;for(let e of cn){let n=nf(e);fa=Math.max(fa,n),Yo=Math.min(Yo,n)}let i=Math.log10(Math.max(Yo,.01)),t=Math.log10(fa);for(let e of cn)e.base=LM((Math.log10(Math.max(nf(e),.01))-i)/(t-i)),Gh(e);De("#lmin").textContent=pa(Yo),De("#lmax").textContent=pa(fa),De("#lname").textContent=cf==="pop"?__t(440):__t(441),Wh()}function Wh(){let i=PM[lf],t=i(fa),e=24*Kd;for(let n of cn)n.zt=Kd<=.001?.01:Math.max(.12*Math.min(1,Kd),e*i(nf(n))/t)*(n.inF?1:.1);Pn()}var sg=Object.fromEntries(cn.map(i=>[i.code,i])),Fh=[],_g=[];for(let i of ga.bd){let t=sg[i.a],e=sg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)_g.push((i.p[n]-Jo)*ji,(i.p[n+1]-Ko)*ji,0,(i.p[n+2]-Jo)*ji,(i.p[n+3]-Ko)*ji,0),Fh.push(t,e)}var kh=new ps;kh.setPositions(_g);var hf=new Yi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),uf=new Yi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[hf,uf].forEach((i,t)=>{let e=new pr(kh,i);e.frustumCulled=!1,e.renderOrder=10+t,_s.add(e)});function NM(){let i=kh.attributes.instanceStart.data.array;for(let t=0;t<Fh.length;t+=2){let e=Math.max(Fh[t].z,Fh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}kh.attributes.instanceStart.data.needsUpdate=!0}var zh={};for(let i of Object.keys(Uh)){let t=cn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,c=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),c=Math.max(c,u.cy);let h=document.createElement("div");h.className="plab",h.textContent=Uh[i],h.title=__t(442)+fg[i],h.onclick=()=>WM("pr:"+i),document.body.appendChild(h),zh[i]={el:h,p:new W(n/e,s/e,0),cx:(r+a)/2,cy:(o+c)/2,ext:Math.max(a-r,c-o),ext2:[a-r,c-o],area:e,name:Uh[i]}}var jd=new W;function UM(){for(let i in zh){let t=zh[i];jd.copy(t.p).project(ts),t.el.style.transform=`translate(-50%,-50%) translate(${(jd.x*.5+.5)*innerWidth}px,${(-jd.y*.5+.5)*innerHeight}px)`}}var gn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...gn};function FM(){let i=innerWidth/innerHeight,t=Math.tan($h*Math.PI/360);return Math.max(ga.h*ji*1.1,100*1.1/i)/(2*t)}var OM=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,Pn()});function df(){Object.assign(ye,{tilt:0,yaw:0,dist:FM(),tx:0,ty:0}),Pn()}function BM(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=gn;ts.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ts.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ts.lookAt(n,s,0)}var Zo=!0,rg=performance.now(),jo=new Map;function Pn(){Zo=!0}function xg(i){requestAnimationFrame(xg);let t=Gn((i-rg)/1e3,0,.05);rg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(gn)){let r=ye[s]-gn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(gn[s]+=r*e,n=!0):gn[s]=ye[s]}for(let s of cn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of jo){let a=(i-r)/1800;a>=1?(jo.delete(s),vr(s)):vr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Zo=!0),window.__mapHidden){Zo=!0;return}if(n||Zo){OM.style.transform=`rotate(${gn.yaw}rad) scaleY(${(.55+.45*Math.cos(gn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(443):__t(444))}BM(),NM(),UM(),window.__rodFrame&&window.__rodFrame(),Qo.render(_s,ts),Zo=n,De("#tilt").value=Math.round(ye.tilt*180/Math.PI),De("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function vg(){Qo.setSize(innerWidth,innerHeight,!1),ts.aspect=innerWidth/innerHeight,ts.updateProjectionMatrix(),hf.resolution.set(innerWidth,innerHeight),uf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Pn()}addEventListener("resize",()=>{vg(),je.length&&ks()});Kn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=Gn(ye.dist*Math.exp(e*.01),6,400):ye.tilt=Gn(ye.tilt+e*.002,0,1.32);Pn()},{passive:!1});Kn.addEventListener("contextmenu",i=>i.preventDefault());var Qi=new Map,ri=null,gr=0,sf=0,rf=0;var Vh=null;Kn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),je.length&&setTimeout(ks,50)),Kn.setPointerCapture(i.pointerId),Qi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Qi.size===1&&(ri={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Qi.size===2){let[t,e]=[...Qi.values()];gr=Math.hypot(t.x-e.x,t.y-e.y),sf=Math.atan2(e.y-t.y,e.x-t.x),rf=(t.y+e.y)/2,Vh={mode:null,rot:0,sc:0,tl:0},ri&&(ri.multi=!0)}ff()});Kn.addEventListener("pointermove",i=>{let t=Qi.get(i.pointerId);if(!t){ms={x:i.clientX,y:i.clientY},af||(af=requestAnimationFrame(zM));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Qi.size===2){let[s,r]=[...Qi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=o-sf;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let u=gr?a-gr:0,g=c-rf,d=Vh||(Vh={mode:null,rot:0,sc:0,tl:0});d.rot+=h,d.sc+=u,d.tl+=g,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&gr&&(ye.dist=Gn(ye.dist*gr/a,6,400)),d.mode==="rotate"&&(ye.yaw+=h,gn.yaw=ye.yaw),d.mode==="tilt"&&(ye.tilt=Gn(ye.tilt-g*.006,0,1.32),gn.tilt=ye.tilt),gr=a,sf=o,rf=c,Pn();return}if(ri.moved+=Math.abs(e)+Math.abs(n),ri.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=Gn(ye.tilt+n*.004,0,1.32),gn.yaw=ye.yaw,gn.tilt=ye.tilt;else{let s=2*gn.dist*Math.tan($h*Math.PI/360)/innerHeight,r=Math.sin(gn.yaw),a=Math.cos(gn.yaw),o=1/Math.max(Math.cos(gn.tilt),.3);ye.tx=Gn(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=Gn(ye.ty-r*e*s+a*n*s*o,-70,70),gn.tx=ye.tx,gn.ty=ye.ty}Pn()});var yg=i=>{let t=ri&&!ri.rot&&!ri.multi&&ri.moved<(ri.touch?12:6)&&i.type==="pointerup"&&Qi.size===1,e=ri&&ri.touch;Qi.delete(i.pointerId),gr=0,Vh=null,Qi.size||(ri=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Kn.addEventListener("pointerup",yg);Kn.addEventListener("pointercancel",yg);Kn.addEventListener("dblclick",df);addEventListener("keydown",i=>{i.key==="Alt"&&(Kn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Kn.style.cursor="")});addEventListener("blur",()=>{Kn.style.cursor=""});var kM=new Do,ag=new Ot,ms=null,af=0,_r=null;function zM(){if(af=0,!ms||ri)return;ag.set(ms.x/innerWidth*2-1,-(ms.y/innerHeight)*2+1),kM.setFromCamera(ag,ts);let i=null;if(i!==_r){let e=_r;_r=i,e&&vr(e),i&&vr(i),Pn()}let t=window.__rodHover&&window.__rodHover(ms.x,ms.y);if(t){mr.innerHTML=t,mr.style.display="block";let e=mr.offsetWidth,n=mr.offsetHeight;mr.style.left=Gn(ms.x+14,6,innerWidth-e-6)+"px",mr.style.top=Gn(ms.y+14,6,innerHeight-n-6)+"px",Kn.style.cursor="pointer"}else ff(),Kn.style.cursor=""}Kn.addEventListener("pointerleave",()=>{if(ms=null,_r){let i=_r;_r=null,vr(i),Pn()}ff()});var mr=De("#tip");function ff(){mr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{cf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),gg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{lf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Wh()});De("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,Pn()};De("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,Pn()};De("#zin").onclick=()=>{ye.dist=Gn(ye.dist*.75,6,400),Pn()};De("#zout").onclick=()=>{ye.dist=Gn(ye.dist/.75,6,400),Pn()};De("#rst").onclick=df;var og=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],je=[],lg={},VM=i=>lg[i]||(lg[i]=new rr({color:i}));function Sg(i,t){i.og.children.forEach(e=>e.material=t?VM(t):Bh)}function vr(i,t=0){let e=i.mat.emissive;i===_r?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function pf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,o=Math.tan($h*Math.PI/360),c=i.length===1?Gn(i[0].size*3.2+14,14,120):Gn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Pn()}var Bs=De("#q"),di=De("#list"),Ke=De("#mcs");function Xh(i,t=!0){if(di.style.display="none",Bs.value="",!i.sel){je.length>=6&&Mg(je[0].o,!0);let e=new Set(je.map(s=>s.color)),n=og.find(s=>!e.has(s))||og[0];i.sel={o:i,color:n,tint:new fe(n).multiplyScalar(.12)},je.push(i.sel),Sg(i,n)}Ke.classList.contains("min")&&tl(!1),jo.set(i,performance.now()),vr(i),t&&pf([i],Math.max(ye.tilt,.9)),ks()}function Mg(i,t){let e=je.indexOf(i.sel);e>=0&&je.splice(e,1),i.sel=null,Sg(i,null),vr(i),Pn(),t||ks()}function bg(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=je.map(u=>{let g=1e9,d=-1e9,_=1e9,S=-1e9;for(let R of u.o.rings)for(let m=0;m<R[0].length;m+=2)g=Math.min(g,R[0][m]),d=Math.max(d,R[0][m]),_=Math.min(_,R[0][m+1]),S=Math.max(S,R[0][m+1]);return{x0:g,x1:d,y0:_,y1:S}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;je.forEach((u,g)=>{let d=r[g],_=(d.x0+d.x1)/2,S=(d.y0+d.y1)/2;s.beginPath();for(let R of u.o.rings)for(let m of R)for(let p=0;p<m.length;p+=2){let F=e/2+(m[p]-_)*o,B=n/2-(m[p+1]-S)*o;p?s.lineTo(F,B):s.moveTo(F,B),p===m.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let c=o/IM,h=[.5,1,2,5,10,20,50,100].find(u=>u*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function ks(){if(!je.length){Ke.innerHTML="",Ke.style.display="none",tl(!1);return}if(Ke.style.display="flex",innerWidth<=640){let e=De("#inf").getBoundingClientRect().bottom;Ke.style.top=Math.round(e+8)+"px",Ke.style.maxHeight=Math.max(110,Math.min(innerHeight*(De("#rc").classList.contains("min")?.7:.4),De("#rc").getBoundingClientRect().top-e-16))+"px",Ke.style.width=""}else if(innerHeight<=500){let e=De("#inf").getBoundingClientRect().bottom;Ke.style.top=Math.round(e+8)+"px",Ke.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ke.style.width="min(290px, 40vw)"}else Ke.style.top="",Ke.style.maxHeight="",Ke.style.width="";let i=je.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Uh[s.pr]}</em></div><div class="mb">${gs(s.pop)}${__t(450)}${pa(s.area)} km\xB2 \xB7 ${pa(s.pop/s.area)}${__t(451)}${s.rankP}${__t(452)}`}).join("");if(je.length>1){let e=s=>Math.max(...je.map(s)),n=[[__t(453),s=>s.o.pop,gs],[__t(454),s=>s.o.area,pa],[__t(455),s=>s.o.pop/s.o.area,pa]];if(i+=`${__t(456)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${je.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),je.length===2){let[s,r]=je.map(h=>h.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],c=(h,u)=>(h>=u?h/u:u/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(457)}${c(a.pop,o.pop)}${__t(458)}${o.name}${__t(459)}${c(a.area,o.area)}\xD7 ${a.area>=o.area?__t(460):__t(461)}.</small>`}i+="</div>"}Ke.innerHTML=i,Ke.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Mg(je[+e.dataset.x].o)}),Ke.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>pf([je[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=je[+e.dataset.i].o;jo.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=je.splice(s,1);je.splice(r,0,a),ks();let o=De("#sil");o&&o.classList.add("flash")}}});let t=De("#sil");t&&bg(t)}Bs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Bs.value);return}let i=Qd(Bs.value.trim());if(!i){di.style.display="none";return}let t=[],e=[];for(let s of cn){let r=Qd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);di.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${gs(s.pop)}</em></li>`).join("")||__t(419),di.style.display="block",di.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Xh(n[+s.dataset.i])),di._r=n});Bs.addEventListener("keydown",i=>{i.key==="Enter"&&di._pick?di._pick(0):i.key==="Enter"&&di._r&&di._r[0]&&Xh(di._r[0]),i.key==="Escape"&&(Bs.value="",di.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Bs&&wg()});var cg=0;addEventListener("resize",()=>{clearTimeout(cg),cg=setTimeout(()=>{let i=De("#sil");i&&bg(i)},120)});var Hh=null,of=De("#chip");function HM(i,t,e=.8){Hh={codes:new Set(i.map(n=>n.code)),label:t},cn.forEach(n=>{n.inF=Hh.codes.has(n.code),Gh(n)}),of.innerHTML=`${__t(462)}${t}</b> \xB7 ${i.length}${i.length===1?__t(463):__t(464)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,of.style.display="flex",De("#chx").onclick=wg,Wh(),pf(i,e),i.slice(0,40).forEach(n=>jo.set(n,performance.now()))}function wg(){Hh&&(Hh=null,cn.forEach(i=>{i.inF=!0,Gh(i)}),of.style.display="none",Wh())}var $M="prov";function GM(i){let t=[...cn].sort((a,o)=>o.pop-a.pop),e=[...cn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[cn.filter(a=>a.pr===s),fg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(465)]:[e.slice(0,10),__t(466)];if(n==="low")return s==="pop"?[t.slice(-10),__t(467)]:[e.slice(-10),__t(468)];if(n==="size")return[cn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${gs(+s)}${__t(469)}`:+s==0?`${__t(470)}${gs(+r)}${__t(471)}`:`${gs(+s)} \u2013 ${gs(+r-1)}${__t(471)}`];if(n==="n50"){let a=0,o=0;for(let c of t)if(a+=c.pop,o++,a>=ef/2)break;return[t.slice(0,o),`${__t(472)}`]}return[[],""]}function WM(i){let[t,e]=GM(i);t.length&&HM(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{$M=i.dataset.tab,De("#dbody").scrollTop=0});var xr=De("#rc"),Oh=De("#mcstab");function ma(i){xr.classList.toggle("min",i),De("#rcgrab span").textContent=i?__t(514):__t(515),je.length&&ks()}function tl(i){Ke.classList.toggle("min",i),Ke.style.transform="",Ke.style.opacity="",Oh.classList.toggle("on",i&&je.length>0),i&&(Oh.textContent=`\u25B8 ${je.length} ${je.length===1?"ficha":"fichas"}`,Oh.style.top=Ke.style.top||"124px")}function mf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!qh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(o,c)>10&&(s.lock=Math.abs(o)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(o,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?o:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}De("#rcgrab").onclick=()=>ma(!xr.classList.contains("min"));innerWidth<=640&&ma(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Eg=()=>innerWidth>640;mf(xr,{axis:"y",onEnd:(i,t)=>{if(!Eg())if(t>40&&!xr.classList.contains("min")){let e=De("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ma(!0)}else t<-30&&xr.classList.contains("min")&&ma(!1)}});mf(xr,{axis:"x",onEnd:i=>{Eg()&&(i>50?ma(!0):i<-30&&xr.classList.contains("min")&&ma(!1))}});mf(Ke,{axis:"x",onMove:i=>{i<0&&(Ke.classList.add("sw"),Ke.style.transform=`translateX(${i}px)`,Ke.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ke.classList.remove("sw"),i<-60?(tl(!0),window.__rodHide&&!je.length&&window.__rodHide()):(Ke.style.transform="",Ke.style.opacity="")}});Oh.onclick=()=>{tl(!1),ks()};De("#dtoggle").onclick=()=>{let i=De("#dp").classList.toggle("open");De("#rc").classList.toggle("dopen",i),De("#dtoggle").textContent=i?qh.matches&&innerWidth<=640?__t(516):__t(517):__t(518),window.__rodCard&&window.__rodCard()};var qh=matchMedia("(max-width:640px), (max-height:500px)");function Tg(){let i=De("#leg");qh.matches?De("#rc").insertBefore(i,De("#dtoggle")):document.body.appendChild(i),je.length&&ks()}qh.addEventListener("change",Tg);Tg();vg();DM();df();Object.assign(gn,ye);for(let i of cn)i.z=.01;requestAnimationFrame(xg);ng({scene:_s,camera:ts,renderer:Qo,goal:ye,cur:gn,invalidate:Pn,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-Jo)*ji,ty:(t-Ko)*ji,dist:e,tilt:n}),Pn()},K:ji,CX:Jo,CY:Ko,mcs:Ke,q:Bs,list:di,munis:cn,select:Xh,norm:Qd,fmt:gs,clamp:Gn,mcsMin:tl});window.__app={scene:_s,renderer:Qo,camera:ts,munis:cn,labs:zh,goal:ye,cur:gn,select:Xh,get mode(){return lf}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
