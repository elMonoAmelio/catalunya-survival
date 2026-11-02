(()=>{var Pm=0,Fd=1,Lm=2;var tl=1,Dm=2,Ma=3,qs=0,ei=1,is=2,ss=0,ba=1,Od=2,Bd=3,kd=4,Nm=5;var Tr=100,Um=101,Fm=102,Om=103,Bm=104,km=200,zm=201,$m=202,Vm=203,zd=204,$d=205,Hm=206,Gm=207,Wm=208,Xm=209,qm=210,Ym=211,Jm=212,Zm=213,jm=214,Mc=0,bc=1,wc=2,ca=3,Ec=4,Tc=5,Ac=6,Cc=7,ch=0,Km=1,Qm=2,Hi=0,Vd=1,Hd=2,Gd=3,Wd=4,Xd=5,qd=6,Yd=7;var Jd=300,Ys=301,Ar=302,hh=303,uh=304,el=306,Rc=1e3,ji=1001,Ic=1002,Dn=1003,tg=1004;var nl=1005;var $n=1006,dh=1007;var Js=1008;var di=1009,Zd=1010,jd=1011,wa=1012,fh=1013,Gi=1014,Ti=1015,Wi=1016,ph=1017,mh=1018,Ea=1020,Kd=35902,Qd=35899,tf=1021,ef=1022,Ai=1023,Qi=1026,Zs=1027,gh=1028,_h=1029,js=1030,xh=1031;var vh=1033,il=33776,sl=33777,rl=33778,al=33779,yh=35840,Sh=35841,Mh=35842,bh=35843,wh=36196,Eh=37492,Th=37496,Ah=37488,Ch=37489,ol=37490,Rh=37491,Ih=37808,Ph=37809,Lh=37810,Dh=37811,Nh=37812,Uh=37813,Fh=37814,Oh=37815,Bh=37816,kh=37817,zh=37818,$h=37819,Vh=37820,Hh=37821,Gh=36492,Wh=36494,Xh=36495,qh=36283,Yh=36284,ll=36285,Jh=36286;var vo=2300,Pc=2301,yc=2302,bd=2303,wd=2400,Ed=2401,Td=2402;var eg=3200;var Zh=0,ng=1,Ts="",xi="srgb",yo="srgb-linear",So="linear",en="srgb";var Sc=7680;var ig=519,sg=512,rg=513,ag=514,jh=515,og=516,lg=517,Kh=518,cg=519,nf=35044;var sf="300 es",zi=2e3,ha=2001;function T_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function A_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hg(){let i=Mo("canvas");return i.style.display="block",i}var qp={},ua=null;function bo(...i){let t="THREE."+i.shift();ua?ua("log",t,...i):console.log(t,...i)}function ug(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ye(...i){i=ug(i);let t="THREE."+i.shift();if(ua)ua("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=ug(i);let t="THREE."+i.shift();if(ua)ua("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vr(...i){let t=i.join(" ");t in qp||(qp[t]=!0,ye(...i))}function dg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var fg={[Mc]:bc,[wc]:Ac,[Ec]:Cc,[ca]:Tc,[bc]:Mc,[Ac]:wc,[Cc]:Ec,[Tc]:ca},ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yp=1234567,mo=Math.PI/180,da=180/Math.PI;function Ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[e&63|128]+Xn[e>>8&255]+"-"+Xn[e>>16&255]+Xn[e>>24&255]+Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function C_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function R_(i,t,e){return i!==t?(e-i)/(t-i):0}function go(i,t,e){return(1-e)*i+e*t}function I_(i,t,e,n){return go(i,t,1-Math.exp(-e*n))}function P_(i,t=1){return t-Math.abs(rf(i,t*2)-t)}function L_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function D_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function N_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function U_(i,t){return i+Math.random()*(t-i)}function F_(i){return i*(.5-Math.random())}function O_(i){i!==void 0&&(Yp=i);let t=Yp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function B_(i){return i*mo}function k_(i){return i*da}function z_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function V_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function H_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),h=a(e/2),u=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),g=a((t-n)/2),S=r((n-t)/2),M=a((n-t)/2);switch(s){case"XYX":i.set(l*d,h*v,h*g,l*u);break;case"YZY":i.set(h*g,l*d,h*v,l*u);break;case"ZXZ":i.set(h*v,h*g,l*d,l*u);break;case"XZX":i.set(l*d,h*M,h*S,l*u);break;case"YXY":i.set(h*S,l*d,h*M,l*u);break;case"ZYZ":i.set(h*M,h*S,l*d,l*u);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var af={DEG2RAD:mo,RAD2DEG:da,generateUUID:Ki,clamp:Re,euclideanModulo:rf,mapLinear:C_,inverseLerp:R_,lerp:go,damp:I_,pingpong:P_,smoothstep:L_,smootherstep:D_,randInt:N_,randFloat:U_,randFloatSpread:F_,seededRandom:O_,degToRad:B_,radToDeg:k_,isPowerOfTwo:z_,ceilPowerOfTwo:$_,floorPowerOfTwo:V_,setQuaternionFromProperEuler:H_,normalize:rn,denormalize:ki},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},es=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let h=n[s+0],u=n[s+1],d=n[s+2],v=n[s+3],g=r[a+0],S=r[a+1],M=r[a+2],I=r[a+3];if(v!==I||h!==g||u!==S||d!==M){let x=h*g+u*S+d*M+v*I;x<0&&(g=-g,S=-S,M=-M,I=-I,x=-x);let _=1-l;if(x<.9995){let B=Math.acos(x),k=Math.sin(B);_=Math.sin(_*B)/k,l=Math.sin(l*B)/k,h=h*_+g*l,u=u*_+S*l,d=d*_+M*l,v=v*_+I*l}else{h=h*_+g*l,u=u*_+S*l,d=d*_+M*l,v=v*_+I*l;let B=1/Math.sqrt(h*h+u*u+d*d+v*v);h*=B,u*=B,d*=B,v*=B}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],h=n[s+1],u=n[s+2],d=n[s+3],v=r[a],g=r[a+1],S=r[a+2],M=r[a+3];return t[e]=l*M+d*v+h*S-u*g,t[e+1]=h*M+d*g+u*v-l*S,t[e+2]=u*M+d*S+l*g-h*v,t[e+3]=d*M-l*v-h*g-u*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,h=Math.sin,u=l(n/2),d=l(s/2),v=l(r/2),g=h(n/2),S=h(s/2),M=h(r/2);switch(a){case"XYZ":this._x=g*d*v+u*S*M,this._y=u*S*v-g*d*M,this._z=u*d*M+g*S*v,this._w=u*d*v-g*S*M;break;case"YXZ":this._x=g*d*v+u*S*M,this._y=u*S*v-g*d*M,this._z=u*d*M-g*S*v,this._w=u*d*v+g*S*M;break;case"ZXY":this._x=g*d*v-u*S*M,this._y=u*S*v+g*d*M,this._z=u*d*M+g*S*v,this._w=u*d*v-g*S*M;break;case"ZYX":this._x=g*d*v-u*S*M,this._y=u*S*v+g*d*M,this._z=u*d*M-g*S*v,this._w=u*d*v+g*S*M;break;case"YZX":this._x=g*d*v+u*S*M,this._y=u*S*v+g*d*M,this._z=u*d*M-g*S*v,this._w=u*d*v-g*S*M;break;case"XZY":this._x=g*d*v-u*S*M,this._y=u*S*v-g*d*M,this._z=u*d*M+g*S*v,this._w=u*d*v+g*S*M;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],h=e[9],u=e[2],d=e[6],v=e[10],g=n+l+v;if(g>0){let S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(d-h)*S,this._y=(r-u)*S,this._z=(a-s)*S}else if(n>l&&n>v){let S=2*Math.sqrt(1+n-l-v);this._w=(d-h)/S,this._x=.25*S,this._y=(s+a)/S,this._z=(r+u)/S}else if(l>v){let S=2*Math.sqrt(1+l-n-v);this._w=(r-u)/S,this._x=(s+a)/S,this._y=.25*S,this._z=(h+d)/S}else{let S=2*Math.sqrt(1+v-n-l);this._w=(a-s)/S,this._x=(r+u)/S,this._y=(h+d)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+a*l+s*u-r*h,this._y=s*d+a*h+r*l-n*u,this._z=r*d+a*u+n*h-s*l,this._w=a*d-n*l-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let h=1-e;if(l<.9995){let u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,h=t.w,u=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+h*u+a*v-l*d,this.y=n+h*d+l*u-r*v,this.z=s+h*v+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,h=e.z;return this.x=s*h-r*l,this.y=r*a-n*h,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ju.copy(this).projectOnVector(t),this.sub(ju)}reflect(t){return this.sub(ju.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ju=new q,Jp=new es,Ce=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u)}set(t,e,n,s,r,a,l,h,u){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],h=n[6],u=n[1],d=n[4],v=n[7],g=n[2],S=n[5],M=n[8],I=s[0],x=s[3],_=s[6],B=s[1],k=s[4],R=s[7],E=s[2],O=s[5],G=s[8];return r[0]=a*I+l*B+h*E,r[3]=a*x+l*k+h*O,r[6]=a*_+l*R+h*G,r[1]=u*I+d*B+v*E,r[4]=u*x+d*k+v*O,r[7]=u*_+d*R+v*G,r[2]=g*I+S*B+M*E,r[5]=g*x+S*k+M*O,r[8]=g*_+S*R+M*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8];return e*a*d-e*l*u-n*r*d+n*l*h+s*r*u-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=d*a-l*u,g=l*h-d*r,S=u*r-a*h,M=e*v+n*g+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/M;return t[0]=v*I,t[1]=(s*u-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=g*I,t[4]=(d*e-s*h)*I,t[5]=(s*r-l*e)*I,t[6]=S*I,t[7]=(n*h-u*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*a+u*l)+a+t,-s*u,s*h,-s*(-u*a+h*l)+l+e,0,0,1),this}scale(t,e){return vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ku.makeScale(t,e)),this}rotate(t){return vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ku.makeRotation(-t)),this}translate(t,e){return vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ku.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ku=new Ce,Zp=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jp=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G_(){let i={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===en&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===en&&(s.r=la(s.r),s.g=la(s.g),s.b=la(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?So:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yo]:{primaries:t,whitePoint:n,transfer:So,toXYZ:Zp,fromXYZ:jp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:n,transfer:en,toXYZ:Zp,fromXYZ:jp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),i}var Ve=G_();function ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xr,Lc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xr===void 0&&(Xr=Mo("canvas")),Xr.width=t.width,Xr.height=t.height;let s=Xr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ws(e[n]/255)*255):e[n]=ws(e[n]);return{data:e,width:t.width,height:t.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},W_=0,fa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Qu(s[a].image)):r.push(Qu(s[a]))}else r=Qu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}var X_=0,td=new q,ci=class i extends ts{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ji,s=ji,r=$n,a=Js,l=Ai,h=di,u=i.DEFAULT_ANISOTROPY,d=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ki(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ye(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ye(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Jd;ci.DEFAULT_ANISOTROPY=1;var nn=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],d=h[4],v=h[8],g=h[1],S=h[5],M=h[9],I=h[2],x=h[6],_=h[10];if(Math.abs(d-g)<.01&&Math.abs(v-I)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+g)<.1&&Math.abs(v+I)<.1&&Math.abs(M+x)<.1&&Math.abs(u+S+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let k=(u+1)/2,R=(S+1)/2,E=(_+1)/2,O=(d+g)/4,G=(v+I)/4,A=(M+x)/4;return k>R&&k>E?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=O/n,r=G/n):R>E?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=G/r,s=A/r),this.set(n,s,r,e),this}let B=Math.sqrt((x-M)*(x-M)+(v-I)*(v-I)+(g-d)*(g-d));return Math.abs(B)<.001&&(B=1),this.x=(x-M)/B,this.y=(v-I)/B,this.z=(g-d)/B,this.w=Math.acos((u+S+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ci(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wo=class extends ci{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nc=class extends ci{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,h,u,d,v,g,S,M,I,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u,d,v,g,S,M,I,x)}set(t,e,n,s,r,a,l,h,u,d,v,g,S,M,I,x){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=l,_[13]=h,_[2]=u,_[6]=d,_[10]=v,_[14]=g,_[3]=S,_[7]=M,_[11]=I,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/qr.setFromMatrixColumn(t,0).length(),r=1/qr.setFromMatrixColumn(t,1).length(),a=1/qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let g=a*d,S=a*v,M=l*d,I=l*v;e[0]=h*d,e[4]=-h*v,e[8]=u,e[1]=S+M*u,e[5]=g-I*u,e[9]=-l*h,e[2]=I-g*u,e[6]=M+S*u,e[10]=a*h}else if(t.order==="YXZ"){let g=h*d,S=h*v,M=u*d,I=u*v;e[0]=g+I*l,e[4]=M*l-S,e[8]=a*u,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=S*l-M,e[6]=I+g*l,e[10]=a*h}else if(t.order==="ZXY"){let g=h*d,S=h*v,M=u*d,I=u*v;e[0]=g-I*l,e[4]=-a*v,e[8]=M+S*l,e[1]=S+M*l,e[5]=a*d,e[9]=I-g*l,e[2]=-a*u,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){let g=a*d,S=a*v,M=l*d,I=l*v;e[0]=h*d,e[4]=M*u-S,e[8]=g*u+I,e[1]=h*v,e[5]=I*u+g,e[9]=S*u-M,e[2]=-u,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){let g=a*h,S=a*u,M=l*h,I=l*u;e[0]=h*d,e[4]=I-g*v,e[8]=M*v+S,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-u*d,e[6]=S*v+M,e[10]=g-I*v}else if(t.order==="XZY"){let g=a*h,S=a*u,M=l*h,I=l*u;e[0]=h*d,e[4]=-v,e[8]=u*d,e[1]=g*v+I,e[5]=a*d,e[9]=S*v-M,e[2]=M*v-S,e[6]=l*d,e[10]=I*v+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q_,t,Y_)}lookAt(t,e,n){let s=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Fs.crossVectors(n,gi),Fs.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Fs.crossVectors(n,gi)),Fs.normalize(),ql.crossVectors(gi,Fs),s[0]=Fs.x,s[4]=ql.x,s[8]=gi.x,s[1]=Fs.y,s[5]=ql.y,s[9]=gi.y,s[2]=Fs.z,s[6]=ql.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],h=n[8],u=n[12],d=n[1],v=n[5],g=n[9],S=n[13],M=n[2],I=n[6],x=n[10],_=n[14],B=n[3],k=n[7],R=n[11],E=n[15],O=s[0],G=s[4],A=s[8],F=s[12],H=s[1],W=s[5],st=s[9],lt=s[13],J=s[2],tt=s[6],dt=s[10],mt=s[14],Tt=s[3],gt=s[7],bt=s[11],St=s[15];return r[0]=a*O+l*H+h*J+u*Tt,r[4]=a*G+l*W+h*tt+u*gt,r[8]=a*A+l*st+h*dt+u*bt,r[12]=a*F+l*lt+h*mt+u*St,r[1]=d*O+v*H+g*J+S*Tt,r[5]=d*G+v*W+g*tt+S*gt,r[9]=d*A+v*st+g*dt+S*bt,r[13]=d*F+v*lt+g*mt+S*St,r[2]=M*O+I*H+x*J+_*Tt,r[6]=M*G+I*W+x*tt+_*gt,r[10]=M*A+I*st+x*dt+_*bt,r[14]=M*F+I*lt+x*mt+_*St,r[3]=B*O+k*H+R*J+E*Tt,r[7]=B*G+k*W+R*tt+E*gt,r[11]=B*A+k*st+R*dt+E*bt,r[15]=B*F+k*lt+R*mt+E*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],h=t[9],u=t[13],d=t[2],v=t[6],g=t[10],S=t[14],M=t[3],I=t[7],x=t[11],_=t[15],B=h*S-u*g,k=l*S-u*v,R=l*g-h*v,E=a*S-u*d,O=a*g-h*d,G=a*v-l*d;return e*(I*B-x*k+_*R)-n*(M*B-x*E+_*O)+s*(M*k-I*E+_*G)-r*(M*R-I*O+x*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10];return e*(a*d-l*u)-n*(r*d-l*h)+s*(r*u-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=t[9],g=t[10],S=t[11],M=t[12],I=t[13],x=t[14],_=t[15],B=e*l-n*a,k=e*h-s*a,R=e*u-r*a,E=n*h-s*l,O=n*u-r*l,G=s*u-r*h,A=d*I-v*M,F=d*x-g*M,H=d*_-S*M,W=v*x-g*I,st=v*_-S*I,lt=g*_-S*x,J=B*lt-k*st+R*W+E*H-O*F+G*A;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/J;return t[0]=(l*lt-h*st+u*W)*tt,t[1]=(s*st-n*lt-r*W)*tt,t[2]=(I*G-x*O+_*E)*tt,t[3]=(g*O-v*G-S*E)*tt,t[4]=(h*H-a*lt-u*F)*tt,t[5]=(e*lt-s*H+r*F)*tt,t[6]=(x*R-M*G-_*k)*tt,t[7]=(d*G-g*R+S*k)*tt,t[8]=(a*st-l*H+u*A)*tt,t[9]=(n*H-e*st-r*A)*tt,t[10]=(M*O-I*R+_*B)*tt,t[11]=(v*R-d*O-S*B)*tt,t[12]=(l*F-a*W-h*A)*tt,t[13]=(e*W-n*F+s*A)*tt,t[14]=(I*k-M*E-x*B)*tt,t[15]=(d*E-v*k+g*B)*tt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,h=t.z,u=r*a,d=r*l;return this.set(u*a+n,u*l-s*h,u*h+s*l,0,u*l+s*h,d*l+n,d*h-s*a,0,u*h-s*l,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,h=e._w,u=r+r,d=a+a,v=l+l,g=r*u,S=r*d,M=r*v,I=a*d,x=a*v,_=l*v,B=h*u,k=h*d,R=h*v,E=n.x,O=n.y,G=n.z;return s[0]=(1-(I+_))*E,s[1]=(S+R)*E,s[2]=(M-k)*E,s[3]=0,s[4]=(S-R)*O,s[5]=(1-(g+_))*O,s[6]=(x+B)*O,s[7]=0,s[8]=(M+k)*G,s[9]=(x-B)*G,s[10]=(1-(g+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=qr.set(s[0],s[1],s[2]).length(),l=qr.set(s[4],s[5],s[6]).length(),h=qr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ui.copy(this);let u=1/a,d=1/l,v=1/h;return Ui.elements[0]*=u,Ui.elements[1]*=u,Ui.elements[2]*=u,Ui.elements[4]*=d,Ui.elements[5]*=d,Ui.elements[6]*=d,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,e.setFromRotationMatrix(Ui),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,s,r,a,l=zi,h=!1){let u=this.elements,d=2*r/(e-t),v=2*r/(n-s),g=(e+t)/(e-t),S=(n+s)/(n-s),M,I;if(h)M=r/(a-r),I=a*r/(a-r);else if(l===zi)M=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===ha)M=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=v,u[9]=S,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=I,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=zi,h=!1){let u=this.elements,d=2/(e-t),v=2/(n-s),g=-(e+t)/(e-t),S=-(n+s)/(n-s),M,I;if(h)M=1/(a-r),I=a/(a-r);else if(l===zi)M=-2/(a-r),I=-(a+r)/(a-r);else if(l===ha)M=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=v,u[9]=0,u[13]=S,u[2]=0,u[6]=0,u[10]=M,u[14]=I,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qr=new q,Ui=new He,q_=new q(0,0,0),Y_=new q(1,1,1),Fs=new q,ql=new q,gi=new q,Kp=new He,Qp=new es,Es=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],h=s[1],u=s[5],d=s[9],v=s[2],g=s[6],S=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,S),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,S),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},J_=0,tm=new q,Yr=new es,vs=new He,Yl=new q,ao=new q,Z_=new q,j_=new es,em=new q(1,0,0),nm=new q(0,1,0),im=new q(0,0,1),sm={type:"added"},K_={type:"removed"},Jr={type:"childadded",child:null},ed={type:"childremoved",child:null},Nn=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new Es,n=new es,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ce}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(em,t)}rotateY(t){return this.rotateOnAxis(nm,t)}rotateZ(t){return this.rotateOnAxis(im,t)}translateOnAxis(t,e){return tm.copy(t).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(em,t)}translateY(t){return this.translateOnAxis(nm,t)}translateZ(t){return this.translateOnAxis(im,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yl.copy(t):Yl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(ao,Yl,this.up):vs.lookAt(Yl,ao,this.up),this.quaternion.setFromRotationMatrix(vs),s&&(vs.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(vs),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sm),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(K_),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vs.multiply(t.parent.matrixWorld)),t.applyMatrix4(vs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sm),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,t,Z_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,j_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){let v=h[u];r(t.shapes,v)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(r(t.materials,this.material[h]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];s.animations.push(r(t.animations,h))}}if(e){let l=a(t.geometries),h=a(t.materials),u=a(t.textures),d=a(t.images),v=a(t.shapes),g=a(t.skeletons),S=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),g.length>0&&(n.skeletons=g),S.length>0&&(n.animations=S),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(l){let h=[];for(let u in l){let d=l[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new q(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q_={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let I of t.hand.values()){let x=e.getJointPose(I,n),_=this._getHandJoint(u,I);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let d=u.joints["index-finger-tip"],v=u.joints["thumb-tip"],g=d.position.distanceTo(v.position),S=.02,M=.005;u.inputState.pinching&&g>S+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&g<=S-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ve.workingColorSpace){if(t=rf(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nd(a,r,t+1/3),this.g=nd(a,r,t),this.b=nd(a,r,t-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(t,e=xi){function n(r){r!==void 0&&parseFloat(r)<1&&ye("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ye("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ye("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xi){let n=pg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ye("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ve.workingToColorSpace(qn.copy(this),t),Math.round(Re(qn.r*255,0,255))*65536+Math.round(Re(qn.g*255,0,255))*256+Math.round(Re(qn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ve.workingColorSpace){Ve.workingToColorSpace(qn.copy(this),e);let n=qn.r,s=qn.g,r=qn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),h,u,d=(l+a)/2;if(l===a)h=0,u=0;else{let v=a-l;switch(u=d<=.5?v/(a+l):v/(2-a-l),a){case n:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-n)/v+2;break;case r:h=(n-s)/v+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=Ve.workingColorSpace){return Ve.workingToColorSpace(qn.copy(this),e),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=xi){Ve.workingToColorSpace(qn.copy(this),t);let e=qn.r,n=qn.g,s=qn.b;return t!==xi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Os),this.setHSL(Os.h+t,Os.s+e,Os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Os),t.getHSL(Jl);let n=go(Os.h,Jl.h,e),s=go(Os.s,Jl.s,e),r=go(Os.l,Jl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new ve;ve.NAMES=pg;var Eo=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fi=new q,ys=new q,id=new q,Ss=new q,Zr=new q,jr=new q,rm=new q,sd=new q,rd=new q,ad=new q,od=new nn,ld=new nn,cd=new nn,$s=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fi.subVectors(t,e),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fi.subVectors(s,e),ys.subVectors(n,e),id.subVectors(t,e);let a=Fi.dot(Fi),l=Fi.dot(ys),h=Fi.dot(id),u=ys.dot(ys),d=ys.dot(id),v=a*u-l*l;if(v===0)return r.set(0,0,0),null;let g=1/v,S=(u*h-l*d)*g,M=(a*d-l*h)*g;return r.set(1-S-M,M,S)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(t,e,n,s,r,a,l,h){return this.getBarycoord(t,e,n,s,Ss)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ss.x),h.addScaledVector(a,Ss.y),h.addScaledVector(l,Ss.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(t,e),ld.fromBufferAttribute(t,n),cd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(od,r.x),a.addScaledVector(ld,r.y),a.addScaledVector(cd,r.z),a}static isFrontFacing(t,e,n,s){return Fi.subVectors(n,e),ys.subVectors(t,e),Fi.cross(ys).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Fi.cross(ys).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Zr.subVectors(s,n),jr.subVectors(r,n),sd.subVectors(t,n);let h=Zr.dot(sd),u=jr.dot(sd);if(h<=0&&u<=0)return e.copy(n);rd.subVectors(t,s);let d=Zr.dot(rd),v=jr.dot(rd);if(d>=0&&v<=d)return e.copy(s);let g=h*v-d*u;if(g<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(Zr,a);ad.subVectors(t,r);let S=Zr.dot(ad),M=jr.dot(ad);if(M>=0&&S<=M)return e.copy(r);let I=S*u-h*M;if(I<=0&&u>=0&&M<=0)return l=u/(u-M),e.copy(n).addScaledVector(jr,l);let x=d*M-S*v;if(x<=0&&v-d>=0&&S-M>=0)return rm.subVectors(r,s),l=(v-d)/(v-d+(S-M)),e.copy(s).addScaledVector(rm,l);let _=1/(x+I+g);return a=I*_,l=g*_,e.copy(n).addScaledVector(Zr,a).addScaledVector(jr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zl.copy(n.boundingBox)),Zl.applyMatrix4(t.matrixWorld),this.union(Zl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),jl.subVectors(this.max,oo),Kr.subVectors(t.a,oo),Qr.subVectors(t.b,oo),ta.subVectors(t.c,oo),Bs.subVectors(Qr,Kr),ks.subVectors(ta,Qr),pr.subVectors(Kr,ta);let e=[0,-Bs.z,Bs.y,0,-ks.z,ks.y,0,-pr.z,pr.y,Bs.z,0,-Bs.x,ks.z,0,-ks.x,pr.z,0,-pr.x,-Bs.y,Bs.x,0,-ks.y,ks.x,0,-pr.y,pr.x,0];return!hd(e,Kr,Qr,ta,jl)||(e=[1,0,0,0,1,0,0,0,1],!hd(e,Kr,Qr,ta,jl))?!1:(Kl.crossVectors(Bs,ks),e=[Kl.x,Kl.y,Kl.z],hd(e,Kr,Qr,ta,jl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ms=[new q,new q,new q,new q,new q,new q,new q,new q],Oi=new q,Zl=new ti,Kr=new q,Qr=new q,ta=new q,Bs=new q,ks=new q,pr=new q,oo=new q,jl=new q,Kl=new q,mr=new q;function hd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mr.fromArray(i,r);let l=s.x*Math.abs(mr.x)+s.y*Math.abs(mr.y)+s.z*Math.abs(mr.z),h=t.dot(mr),u=e.dot(mr),d=n.dot(mr);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>l)return!1}return!0}var bn=new q,Ql=new zt,tx=0,ln=class extends ts{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nf,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ql.fromBufferAttribute(this,e),Ql.applyMatrix3(t),this.setXY(e,Ql.x,Ql.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix3(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var To=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ao=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xn=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},ex=new ti,lo=new q,ud=new q,ui=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ex.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lo.subVectors(t,this.center);let e=lo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lo.copy(t.center).add(ud)),this.expandByPoint(lo.copy(t.center).sub(ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},nx=0,Ei=new He,dd=new Nn,ea=new q,_i=new ti,co=new ti,Ln=new q,vn=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(T_(t)?Ao:To)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];co.setFromBufferAttribute(l),this.morphTargetsRelative?(Ln.addVectors(_i.min,co.min),_i.expandByPoint(Ln),Ln.addVectors(_i.max,co.max),_i.expandByPoint(Ln)):(_i.expandByPoint(co.min),_i.expandByPoint(co.max))}_i.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ln));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],h=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Ln.fromBufferAttribute(l,u),h&&(ea.fromBufferAttribute(t,u),Ln.add(ea)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],h=[];for(let A=0;A<n.count;A++)l[A]=new q,h[A]=new q;let u=new q,d=new q,v=new q,g=new zt,S=new zt,M=new zt,I=new q,x=new q;function _(A,F,H){u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,H),g.fromBufferAttribute(r,A),S.fromBufferAttribute(r,F),M.fromBufferAttribute(r,H),d.sub(u),v.sub(u),S.sub(g),M.sub(g);let W=1/(S.x*M.y-M.x*S.y);isFinite(W)&&(I.copy(d).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(W),x.copy(v).multiplyScalar(S.x).addScaledVector(d,-M.x).multiplyScalar(W),l[A].add(I),l[F].add(I),l[H].add(I),h[A].add(x),h[F].add(x),h[H].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let A=0,F=B.length;A<F;++A){let H=B[A],W=H.start,st=H.count;for(let lt=W,J=W+st;lt<J;lt+=3)_(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}let k=new q,R=new q,E=new q,O=new q;function G(A){E.fromBufferAttribute(s,A),O.copy(E);let F=l[A];k.copy(F),k.sub(E.multiplyScalar(E.dot(F))).normalize(),R.crossVectors(O,F);let W=R.dot(h[A])<0?-1:1;a.setXYZW(A,k.x,k.y,k.z,W)}for(let A=0,F=B.length;A<F;++A){let H=B[A],W=H.start,st=H.count;for(let lt=W,J=W+st;lt<J;lt+=3)G(t.getX(lt+0)),G(t.getX(lt+1)),G(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,S=n.count;g<S;g++)n.setXYZ(g,0,0,0);let s=new q,r=new q,a=new q,l=new q,h=new q,u=new q,d=new q,v=new q;if(t)for(let g=0,S=t.count;g<S;g+=3){let M=t.getX(g+0),I=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),l.add(d),h.add(d),u.add(d),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(I,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let g=0,S=e.count;g<S;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ln.fromBufferAttribute(t,e),Ln.normalize(),t.setXYZ(e,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(l,h){let u=l.array,d=l.itemSize,v=l.normalized,g=new u.constructor(h.length*d),S=0,M=0;for(let I=0,x=h.length;I<x;I++){l.isInterleavedBufferAttribute?S=h[I]*l.data.stride+l.offset:S=h[I]*d;for(let _=0;_<d;_++)g[M++]=u[S++]}return new ln(g,d,v)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let h=s[l],u=t(h,n);e.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,v=u.length;d<v;d++){let g=u[d],S=t(g,n);h.push(S)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],d=[];for(let v=0,g=u.length;v<g;v++){let S=u[v];d.push(S.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(e))}let r=t.morphAttributes;for(let u in r){let d=[],v=r[u];for(let g=0,S=v.length;g<S;g++)d.push(v[g].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,d=a.length;u<d;u++){let v=a[u];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nf,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Qn=new q,Vi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qn.fromBufferAttribute(this,e),Qn.applyMatrix4(t),this.setXYZ(e,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qn.fromBufferAttribute(this,e),Qn.applyNormalMatrix(t),this.setXYZ(e,Qn.x,Qn.y,Qn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qn.fromBufferAttribute(this,e),Qn.transformDirection(t),this.setXYZ(e,Qn.x,Qn.y,Qn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ki(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ki(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ki(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ki(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fd=new q,ix=new q,sx=new Ce,Bi=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fd.subVectors(n,e).cross(ix.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(fd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sx.getNormalMatrix(t),s=this.coplanarPoint(fd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rx=0,ns=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=ba,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=$d,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sc,this.stencilZFail=Sc,this.stencilZPass=Sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ye(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ye(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let h=r[l];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var bs=new q,pd=new q,tc=new q,ec=new q,yr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bs.copy(this.origin).addScaledVector(this.direction,e),bs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pd.copy(t).add(e).multiplyScalar(.5),tc.copy(e).sub(t).normalize(),ec.copy(this.origin).sub(pd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(tc),l=ec.dot(this.direction),h=-ec.dot(tc),u=ec.lengthSq(),d=Math.abs(1-a*a),v,g,S,M;if(d>0)if(v=a*h-l,g=a*l-h,M=r*d,v>=0)if(g>=-M)if(g<=M){let I=1/d;v*=I,g*=I,S=v*(v+a*g+2*l)+g*(a*v+g+2*h)+u}else g=r,v=Math.max(0,-(a*g+l)),S=-v*v+g*(g+2*h)+u;else g=-r,v=Math.max(0,-(a*g+l)),S=-v*v+g*(g+2*h)+u;else g<=-M?(v=Math.max(0,-(-a*r+l)),g=v>0?-r:Math.min(Math.max(-r,-h),r),S=-v*v+g*(g+2*h)+u):g<=M?(v=0,g=Math.min(Math.max(-r,-h),r),S=g*(g+2*h)+u):(v=Math.max(0,-(a*r+l)),g=v>0?r:Math.min(Math.max(-r,-h),r),S=-v*v+g*(g+2*h)+u);else g=a>0?-r:r,v=Math.max(0,-(a*g+l)),S=-v*v+g*(g+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(pd).addScaledVector(tc,g),S}intersectSphere(t,e){if(t.radius<0)return null;bs.subVectors(t.center,this.origin);let n=bs.dot(this.direction),s=bs.dot(bs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,h,u=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,g=this.origin;return u>=0?(n=(t.min.x-g.x)*u,s=(t.max.x-g.x)*u):(n=(t.max.x-g.x)*u,s=(t.min.x-g.x)*u),d>=0?(r=(t.min.y-g.y)*d,a=(t.max.y-g.y)*d):(r=(t.max.y-g.y)*d,a=(t.min.y-g.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-g.z)*v,h=(t.max.z-g.z)*v):(l=(t.max.z-g.z)*v,h=(t.min.z-g.z)*v),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,h=l.x,u=l.y,d=l.z,v=t.x-a.x,g=t.y-a.y,S=t.z-a.z,M=e.x-a.x,I=e.y-a.y,x=e.z-a.z,_=n.x-a.x,B=n.y-a.y,k=n.z-a.z,R=Math.abs(h),E=Math.abs(u),O=Math.abs(d),G,A,F,H,W,st,lt,J,tt,dt,mt,Tt;if(R>=E&&R>=O?(F=h,st=v,tt=M,Tt=_,h>=0?(G=u,A=d,H=g,W=S,lt=I,J=x,dt=B,mt=k):(G=d,A=u,H=S,W=g,lt=x,J=I,dt=k,mt=B)):E>=O?(F=u,st=g,tt=I,Tt=B,u>=0?(G=d,A=h,H=S,W=v,lt=x,J=M,dt=k,mt=_):(G=h,A=d,H=v,W=S,lt=M,J=x,dt=_,mt=k)):(F=d,st=S,tt=x,Tt=k,d>=0?(G=h,A=u,H=v,W=g,lt=M,J=I,dt=_,mt=B):(G=u,A=h,H=g,W=v,lt=I,J=M,dt=B,mt=_)),F===0)return null;let gt=G/F,bt=A/F,St=1/F,qt=H-gt*st,Qt=W-bt*st,Ge=lt-gt*tt,Ie=J-bt*tt,$e=dt-gt*Tt,xt=mt-bt*Tt,vt=$e*Ie-xt*Ge,Pt=qt*xt-Qt*$e,oe=Ge*Qt-Ie*qt;if(s){if(vt<0||Pt<0||oe<0)return null}else if((vt<0||Pt<0||oe<0)&&(vt>0||Pt>0||oe>0))return null;let Zt=vt+Pt+oe;if(Zt===0)return null;let _e=St*(vt*st+Pt*tt+oe*Tt);return(Zt>0?_e<0:_e>0)?null:this.at(_e/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sr=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},am=new He,gr=new yr,nc=new ui,om=new q,ic=new q,sc=new q,rc=new q,md=new q,ac=new q,lm=new q,oc=new q,Un=class extends Nn{constructor(t=new vn,e=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){ac.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let d=l[h],v=r[h];d!==0&&(md.fromBufferAttribute(v,t),a?ac.addScaledVector(md,d):ac.addScaledVector(md.sub(e),d))}e.add(ac)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(r),gr.copy(t.ray).recast(t.near),!(nc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(nc,om)===null||gr.origin.distanceToSquared(om)>(t.far-t.near)**2))&&(am.copy(r).invert(),gr.copy(t.ray).applyMatrix4(am),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,h=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,g=r.groups,S=r.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,I=g.length;M<I;M++){let x=g[M],_=a[x.materialIndex],B=Math.max(x.start,S.start),k=Math.min(l.count,Math.min(x.start+x.count,S.start+S.count));for(let R=B,E=k;R<E;R+=3){let O=l.getX(R),G=l.getX(R+1),A=l.getX(R+2);s=lc(this,_,t,n,u,d,v,O,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,S.start),I=Math.min(l.count,S.start+S.count);for(let x=M,_=I;x<_;x+=3){let B=l.getX(x),k=l.getX(x+1),R=l.getX(x+2);s=lc(this,a,t,n,u,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let M=0,I=g.length;M<I;M++){let x=g[M],_=a[x.materialIndex],B=Math.max(x.start,S.start),k=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let R=B,E=k;R<E;R+=3){let O=R,G=R+1,A=R+2;s=lc(this,_,t,n,u,d,v,O,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,S.start),I=Math.min(h.count,S.start+S.count);for(let x=M,_=I;x<_;x+=3){let B=x,k=x+1,R=x+2;s=lc(this,a,t,n,u,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function ax(i,t,e,n,s,r,a,l){let h;if(t.side===ei?h=n.intersectTriangle(a,r,s,!0,l):h=n.intersectTriangle(s,r,a,t.side===qs,l),h===null)return null;oc.copy(l),oc.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(oc);return u<e.near||u>e.far?null:{distance:u,point:oc.clone(),object:i}}function lc(i,t,e,n,s,r,a,l,h,u){i.getVertexPosition(l,ic),i.getVertexPosition(h,sc),i.getVertexPosition(u,rc);let d=ax(i,t,e,n,ic,sc,rc,lm);if(d){let v=new q;$s.getBarycoord(lm,ic,sc,rc,v),s&&(d.uv=$s.getInterpolatedAttribute(s,l,h,u,v,new zt)),r&&(d.uv1=$s.getInterpolatedAttribute(r,l,h,u,v,new zt)),a&&(d.normal=$s.getInterpolatedAttribute(a,l,h,u,v,new q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let g={a:l,b:h,c:u,normal:new q,materialIndex:0};$s.getNormal(ic,sc,rc,g.normal),d.face=g,d.barycoord=v}return d}var Co=class extends ci{constructor(t=null,e=1,n=1,s,r,a,l,h,u=Dn,d=Dn,v,g){super(null,a,l,h,u,d,s,r,v,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ro=class extends ln{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},na=new He,cm=new He,cc=[],hm=new ti,ox=new He,ho=new Un,uo=new ui,Io=class extends Un{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ox)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,na),hm.copy(t.boundingBox).applyMatrix4(na),this.boundingBox.union(hm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,na),uo.copy(t.boundingSphere).applyMatrix4(na),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,na),cm.multiplyMatrices(n,na),ho.matrixWorld=cm,ho.raycast(t,cc);for(let a=0,l=cc.length;a<l;a++){let h=cc[a];h.instanceId=r,h.object=this,e.push(h)}cc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Co(new Float32Array(s*this.count),s,this.count,gh,Ti));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=l,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_r=new ui,lx=new zt(.5,.5),hc=new q,ga=class{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],d=r[4],v=r[5],g=r[6],S=r[7],M=r[8],I=r[9],x=r[10],_=r[11],B=r[12],k=r[13],R=r[14],E=r[15];if(s[0].setComponents(u-a,S-d,_-M,E-B).normalize(),s[1].setComponents(u+a,S+d,_+M,E+B).normalize(),s[2].setComponents(u+l,S+v,_+I,E+k).normalize(),s[3].setComponents(u-l,S-v,_-I,E-k).normalize(),n)s[4].setComponents(h,g,x,R).normalize(),s[5].setComponents(u-h,S-g,_-x,E-R).normalize();else if(s[4].setComponents(u-h,S-g,_-x,E-R).normalize(),e===zi)s[5].setComponents(u+h,S+g,_+x,E+R).normalize();else if(e===ha)s[5].setComponents(h,g,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);let e=lx.distanceTo(t.center);return _r.radius=.7071067811865476+e,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(hc.x=s.normal.x>0?t.max.x:t.min.x,hc.y=s.normal.y>0?t.max.y:t.min.y,hc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends ns{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fc=new q,Oc=new q,um=new He,fo=new yr,uc=new ui,gd=new q,dm=new q,Bc=class extends Nn{constructor(t=new vn,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fc.fromBufferAttribute(e,s-1),Oc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fc.distanceTo(Oc);t.setAttribute("lineDistance",new xn(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,t.ray.intersectsSphere(uc)===!1)return;um.copy(s).invert(),fo.copy(t.ray).applyMatrix4(um);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){let S=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let I=S,x=M-1;I<x;I+=u){let _=d.getX(I),B=d.getX(I+1),k=dc(this,t,fo,h,_,B,I);k&&e.push(k)}if(this.isLineLoop){let I=d.getX(M-1),x=d.getX(S),_=dc(this,t,fo,h,I,x,M-1);_&&e.push(_)}}else{let S=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let I=S,x=M-1;I<x;I+=u){let _=dc(this,t,fo,h,I,I+1,I);_&&e.push(_)}if(this.isLineLoop){let I=dc(this,t,fo,h,M-1,S,M-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function dc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Fc.fromBufferAttribute(l,s),Oc.fromBufferAttribute(l,r),e.distanceSqToSegment(Fc,Oc,gd,dm)>n)return;gd.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(gd);if(!(u<t.near||u>t.far))return{distance:u,point:dm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Po=class extends Bc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},kc=class extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fm=new He,Ad=new yr,fc=new ui,pc=new q,br=class extends Nn{constructor(t=new vn,e=new kc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),fc.radius+=r,t.ray.intersectsSphere(fc)===!1)return;fm.copy(s).invert(),Ad.copy(t.ray).applyMatrix4(fm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,v=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let M=g,I=S;M<I;M++){let x=u.getX(M);pc.fromBufferAttribute(v,x),pm(pc,x,h,s,t,e,this)}}else{let g=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let M=g,I=S;M<I;M++)pc.fromBufferAttribute(v,M),pm(pc,M,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function pm(i,t,e,n,s,r,a){let l=Ad.distanceSqToPoint(i);if(l<e){let h=new q;Ad.closestPointToPoint(i,h),h.applyMatrix4(n);let u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Lo=class extends ci{constructor(t=[],e=Ys,n,s,r,a,l,h,u,d){super(t,e,n,s,r,a,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Vs=class extends ci{constructor(t,e,n=Gi,s,r,a,l=Dn,h=Dn,u,d=Qi,v=1){if(d!==Qi&&d!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:v};super(g,s,r,a,l,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zc=class extends Vs{constructor(t,e=Gi,n=Ys,s,r,a=Dn,l=Dn,h,u=Qi){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,h,u),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Do=class extends ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_a=class i extends vn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],v=[],g=0,S=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new xn(u,3)),this.setAttribute("normal",new xn(d,3)),this.setAttribute("uv",new xn(v,2));function M(I,x,_,B,k,R,E,O,G,A,F){let H=R/G,W=E/A,st=R/2,lt=E/2,J=O/2,tt=G+1,dt=A+1,mt=0,Tt=0,gt=new q;for(let bt=0;bt<dt;bt++){let St=bt*W-lt;for(let qt=0;qt<tt;qt++){let Qt=qt*H-st;gt[I]=Qt*B,gt[x]=St*k,gt[_]=J,u.push(gt.x,gt.y,gt.z),gt[I]=0,gt[x]=0,gt[_]=O>0?1:-1,d.push(gt.x,gt.y,gt.z),v.push(qt/G),v.push(1-bt/A),mt+=1}}for(let bt=0;bt<A;bt++)for(let St=0;St<G;St++){let qt=g+St+tt*bt,Qt=g+St+tt*(bt+1),Ge=g+(St+1)+tt*(bt+1),Ie=g+(St+1)+tt*bt;h.push(qt,Qt,Ie),h.push(Qt,Ge,Ie),Tt+=6}l.addGroup(S,Tt,F),S+=Tt,g+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var No=class i extends vn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],g=[],S=[],M=0,I=[],x=n/2,_=0;B(),a===!1&&(t>0&&k(!0),e>0&&k(!1)),this.setIndex(d),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(S,2));function B(){let R=new q,E=new q,O=0,G=(e-t)/n;for(let A=0;A<=r;A++){let F=[],H=A/r,W=H*(e-t)+t;for(let st=0;st<=s;st++){let lt=st/s,J=lt*h+l,tt=Math.sin(J),dt=Math.cos(J);E.x=W*tt,E.y=-H*n+x,E.z=W*dt,v.push(E.x,E.y,E.z),R.set(tt,G,dt).normalize(),g.push(R.x,R.y,R.z),S.push(lt,1-H),F.push(M++)}I.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let H=I[F][A],W=I[F+1][A],st=I[F+1][A+1],lt=I[F][A+1];(t>0||F!==0)&&(d.push(H,W,lt),O+=3),(e>0||F!==r-1)&&(d.push(W,st,lt),O+=3)}u.addGroup(_,O,0),_+=O}function k(R){let E=M,O=new zt,G=new q,A=0,F=R===!0?t:e,H=R===!0?1:-1;for(let st=1;st<=s;st++)v.push(0,x*H,0),g.push(0,H,0),S.push(.5,.5),M++;let W=M;for(let st=0;st<=s;st++){let J=st/s*h+l,tt=Math.cos(J),dt=Math.sin(J);G.x=F*dt,G.y=x*H,G.z=F*tt,v.push(G.x,G.y,G.z),g.push(0,H,0),O.x=tt*.5+.5,O.y=dt*.5*H+.5,S.push(O.x,O.y),M++}for(let st=0;st<s;st++){let lt=E+st,J=W+st;R===!0?d.push(J,J+1,lt):d.push(J+1,J,lt),A+=3}u.addGroup(_,A,R===!0?1:2),_+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ye("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,h=r-1,u;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),u=n[s]-a,u<0)l=s+1;else if(u>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let d=n[s],g=n[s+1]-d,S=(a-d)/g;return(s+S)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),h=e||(a.isVector2?new zt:new q);return h.copy(l).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new q,s=[],r=[],a=[],l=new q,h=new He;for(let S=0;S<=t;S++){let M=S/t;s[S]=this.getTangentAt(M,new q)}r[0]=new q,a[0]=new q;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),v<=u&&(u=v,n.set(0,1,0)),g<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let S=1;S<=t;S++){if(r[S]=r[S-1].clone(),a[S]=a[S-1].clone(),l.crossVectors(s[S-1],s[S]),l.length()>Number.EPSILON){l.normalize();let M=Math.acos(Re(s[S-1].dot(s[S]),-1,1));r[S].applyMatrix4(h.makeRotationAxis(l,M))}a[S].crossVectors(s[S],r[S])}if(e===!0){let S=Math.acos(Re(r[0].dot(r[t]),-1,1));S/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(S=-S);for(let M=1;M<=t;M++)r[M].applyMatrix4(h.makeRotationAxis(s[M],S*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xa=class extends vi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=h-this.aX,S=u-this.aY;h=g*d-S*v+this.aX,u=g*v+S*d+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$c=class extends xa{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function of(){let i=0,t=0,e=0,n=0;function s(r,a,l,h){i=r,t=l,e=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,u){s(a,l,u*(l-r),u*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,u,d,v){let g=(a-r)/u-(l-r)/(u+d)+(l-a)/d,S=(l-a)/d-(h-a)/(d+v)+(h-l)/v;g*=d,S*=d,s(a,l,g,S)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var mm=new q,gm=new q,_d=new of,xd=new of,vd=new of,Vc=class extends vi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let u,d;this.closed||l>0?u=s[(l-1)%r]:(gm.subVectors(s[0],s[1]).add(s[0]),u=gm);let v=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(mm.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=mm),this.curveType==="centripetal"||this.curveType==="chordal"){let S=this.curveType==="chordal"?.5:.25,M=Math.pow(u.distanceToSquared(v),S),I=Math.pow(v.distanceToSquared(g),S),x=Math.pow(g.distanceToSquared(d),S);I<1e-4&&(I=1),M<1e-4&&(M=I),x<1e-4&&(x=I),_d.initNonuniformCatmullRom(u.x,v.x,g.x,d.x,M,I,x),xd.initNonuniformCatmullRom(u.y,v.y,g.y,d.y,M,I,x),vd.initNonuniformCatmullRom(u.z,v.z,g.z,d.z,M,I,x)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(u.x,v.x,g.x,d.x,this.tension),xd.initCatmullRom(u.y,v.y,g.y,d.y,this.tension),vd.initCatmullRom(u.z,v.z,g.z,d.z,this.tension));return n.set(_d.calc(h),xd.calc(h),vd.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _m(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,h=i*l;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*l+r*i+e}function cx(i,t){let e=1-i;return e*e*t}function hx(i,t){return 2*(1-i)*i*t}function ux(i,t){return i*i*t}function _o(i,t,e,n){return cx(i,t)+hx(i,e)+ux(i,n)}function dx(i,t){let e=1-i;return e*e*e*t}function fx(i,t){let e=1-i;return 3*e*e*i*t}function px(i,t){return 3*(1-i)*i*i*t}function mx(i,t){return i*i*i*t}function xo(i,t,e,n,s){return dx(i,t)+fx(i,e)+px(i,n)+mx(i,s)}var Uo=class extends vi{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(xo(t,s.x,r.x,a.x,l.x),xo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hc=class extends vi{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(xo(t,s.x,r.x,a.x,l.x),xo(t,s.y,r.y,a.y,l.y),xo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends vi{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends vi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends vi{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_o(t,s.x,r.x,a.x),_o(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wc=class extends vi{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_o(t,s.x,r.x,a.x),_o(t,s.y,r.y,a.y),_o(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,h=s[a===0?a:a-1],u=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(_m(l,h.x,u.x,d.x,v.x),_m(l,h.y,u.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Cd=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:Vc,CubicBezierCurve:Uo,CubicBezierCurve3:Hc,EllipseCurve:xa,LineCurve:Fo,LineCurve3:Gc,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Wc,SplineCurve:Bo}),Xc=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],h=l.getLength(),u=h===0?0:1-a/h;return l.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(l);for(let u=0;u<h.length;u++){let d=h[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Cd[s.type]().fromJSON(s))}return this}},wr=class extends Xc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fo(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Oo(this.currentPoint.clone(),new zt(t,e),new zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Uo(this.currentPoint.clone(),new zt(t,e),new zt(n,s),new zt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+l,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,h){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,s,r,a,l,h),this}absellipse(t,e,n,s,r,a,l,h){let u=new xa(t,e,n,s,r,a,l,h);if(this.curves.length>0){let v=u.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},va=class extends wr{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wr().fromJSON(s))}return this}};function gx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mg(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,u;if(n&&(r=Sx(i,t,r,e)),i.length>80*e){l=i[0],h=i[1];let d=l,v=h;for(let g=e;g<s;g+=e){let S=i[g],M=i[g+1];S<l&&(l=S),M<h&&(h=M),S>d&&(d=S),M>v&&(v=M)}u=Math.max(d-l,v-h),u=u!==0?32767/u:0}return ko(r,a,e,l,h,u,0),a}function mg(i,t,e,n,s){let r;if(s===Lx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=xm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=xm(a/n|0,i[a],i[a+1],r);return r&&ya(r,r.next)&&($o(r),r=r.next),r}function Er(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ya(e,e.next)||gn(e.prev,e,e.next)===0)){if($o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ko(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Tx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let h=i.prev,u=i.next;if(r?xx(i,n,s,r):_x(i)){t.push(h.i,i.i,u.i),$o(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=vx(Er(i),t),ko(i,t,e,n,s,r,2)):a===2&&yx(i,t,e,n,s,r):ko(Er(i),t,e,n,s,r,1);break}}}function _x(i){let t=i.prev,e=i,n=i.next;if(gn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,h=e.y,u=n.y,d=Math.min(s,r,a),v=Math.min(l,h,u),g=Math.max(s,r,a),S=Math.max(l,h,u),M=n.next;for(;M!==t;){if(M.x>=d&&M.x<=g&&M.y>=v&&M.y<=S&&po(s,l,r,h,a,u,M.x,M.y)&&gn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function xx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(gn(s,r,a)>=0)return!1;let l=s.x,h=r.x,u=a.x,d=s.y,v=r.y,g=a.y,S=Math.min(l,h,u),M=Math.min(d,v,g),I=Math.max(l,h,u),x=Math.max(d,v,g),_=Rd(S,M,t,e,n),B=Rd(I,x,t,e,n),k=i.prevZ,R=i.nextZ;for(;k&&k.z>=_&&R&&R.z<=B;){if(k.x>=S&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&po(l,d,h,v,u,g,k.x,k.y)&&gn(k.prev,k,k.next)>=0||(k=k.prevZ,R.x>=S&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&po(l,d,h,v,u,g,R.x,R.y)&&gn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;k&&k.z>=_;){if(k.x>=S&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&po(l,d,h,v,u,g,k.x,k.y)&&gn(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;R&&R.z<=B;){if(R.x>=S&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&po(l,d,h,v,u,g,R.x,R.y)&&gn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function vx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ya(n,s)&&_g(n,e,e.next,s)&&zo(n,s)&&zo(s,n)&&(t.push(n.i,e.i,s.i),$o(e),$o(e.next),e=i=s),e=e.next}while(e!==i);return Er(e)}function yx(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Rx(a,l)){let h=xg(a,l);a=Er(a,a.next),h=Er(h,h.next),ko(a,t,e,n,s,r,0),ko(h,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function Sx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,h=r<a-1?t[r+1]*n:i.length,u=mg(i,l,h,n,!1);u===u.next&&(u.steiner=!0),s.push(Cx(u))}s.sort(Mx);for(let r=0;r<s.length;r++)e=bx(s[r],e);return e}function Mx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bx(i,t){let e=wx(i,t);if(!e)return t;let n=xg(e,i);return Er(n,n.next),Er(e,e.next)}function wx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ya(i,e))return e;do{if(ya(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,h=a.x,u=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&gg(s<u?n:r,s,h,u,s<u?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);zo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&Ex(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function Ex(i,t){return gn(i.prev,i,t.prev)<0&&gn(t.next,i,i.next)<0}function Tx(i,t,e,n){let s=i;do s.z===0&&(s.z=Rd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ax(s)}function Ax(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let u=0;u<e&&(l++,a=a.nextZ,!!a);u++);let h=e;for(;l>0||h>0&&a;)l!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Rd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gg(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function po(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&gg(i,t,e,n,s,r,a,l)}function Rx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ix(i,t)&&(zo(i,t)&&zo(t,i)&&Px(i,t)&&(gn(i.prev,i,t.prev)||gn(i,t.prev,t))||ya(i,t)&&gn(i.prev,i,i.next)>0&&gn(t.prev,t,t.next)>0)}function gn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ya(i,t){return i.x===t.x&&i.y===t.y}function _g(i,t,e,n){let s=gc(gn(i,t,e)),r=gc(gn(i,t,n)),a=gc(gn(e,n,i)),l=gc(gn(e,n,t));return!!(s!==r&&a!==l||s===0&&mc(i,e,t)||r===0&&mc(i,n,t)||a===0&&mc(e,i,n)||l===0&&mc(e,t,n))}function mc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function gc(i){return i>0?1:i<0?-1:0}function Ix(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_g(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zo(i,t){return gn(i.prev,i,i.next)<0?gn(i,t,i.next)>=0&&gn(i,i.prev,t)>=0:gn(i,t,i.prev)<0||gn(i,i.next,t)<0}function Px(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xg(i,t){let e=Id(i.i,i.x,i.y),n=Id(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xm(i,t,e,n){let s=Id(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Id(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Pd=class{static triangulate(t,e,n=2){return gx(t,e,n)}},xr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vm(t),ym(n,t);let a=t.length;e.forEach(vm);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,ym(n,e[h]);let l=Pd.triangulate(n,s);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function vm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ym(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vo=class i extends vn{constructor(t=new va([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];a(u)}this.setAttribute("position",new xn(s,3)),this.setAttribute("uv",new xn(r,2)),this.computeVertexNormals();function a(l){let h=[],u=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,S=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:S-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,_=e.extrudePath,B=e.UVGenerator!==void 0?e.UVGenerator:Dx,k,R=!1,E,O,G,A;if(_){k=_.getSpacedPoints(d),R=!0,g=!1;let nt=_.isCatmullRomCurve3?_.closed:!1;E=_.computeFrenetFrames(d,nt),O=new q,G=new q,A=new q}g||(x=0,S=0,M=0,I=0);let F=l.extractPoints(u),H=F.shape,W=F.holes;if(!xr.isClockWise(H)){H=H.reverse();for(let nt=0,Ct=W.length;nt<Ct;nt++){let V=W[nt];xr.isClockWise(V)&&(W[nt]=V.reverse())}}function lt(nt){let V=10000000000000001e-36,Rt=nt[0];for(let Bt=1;Bt<=nt.length;Bt++){let le=Bt%nt.length,ue=nt[le],he=ue.x-Rt.x,we=ue.y-Rt.y,X=he*he+we*we,Ue=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(Rt.x),Math.abs(Rt.y)),Pe=V*Ue*Ue;if(X<=Pe){nt.splice(le,1),Bt--;continue}Rt=ue}}lt(H),W.forEach(lt);let J=W.length,tt=H;for(let nt=0;nt<J;nt++){let Ct=W[nt];H=H.concat(Ct)}function dt(nt,Ct,V){return Ct||be("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Ct,V)}let mt=H.length;function Tt(nt,Ct,V){let Rt,Bt,le,ue=nt.x-Ct.x,he=nt.y-Ct.y,we=V.x-nt.x,X=V.y-nt.y,Ue=ue*ue+he*he,Pe=ue*X-he*we;if(Math.abs(Pe)>Number.EPSILON){let U=Math.sqrt(Ue),w=Math.sqrt(we*we+X*X),et=Ct.x-he/U,at=Ct.y+ue/U,_t=V.x-X/w,It=V.y+we/w,kt=((_t-et)*X-(It-at)*we)/(ue*X-he*we);Rt=et+ue*kt-nt.x,Bt=at+he*kt-nt.y;let pt=Rt*Rt+Bt*Bt;if(pt<=2)return new zt(Rt,Bt);le=Math.sqrt(pt/2)}else{let U=!1;ue>Number.EPSILON?we>Number.EPSILON&&(U=!0):ue<-Number.EPSILON?we<-Number.EPSILON&&(U=!0):Math.sign(he)===Math.sign(X)&&(U=!0),U?(Rt=-he,Bt=ue,le=Math.sqrt(Ue)):(Rt=ue,Bt=he,le=Math.sqrt(Ue/2))}return new zt(Rt/le,Bt/le)}let gt=[];for(let nt=0,Ct=tt.length,V=Ct-1,Rt=nt+1;nt<Ct;nt++,V++,Rt++)V===Ct&&(V=0),Rt===Ct&&(Rt=0),gt[nt]=Tt(tt[nt],tt[V],tt[Rt]);let bt=[],St,qt=gt.concat();for(let nt=0,Ct=J;nt<Ct;nt++){let V=W[nt];St=[];for(let Rt=0,Bt=V.length,le=Bt-1,ue=Rt+1;Rt<Bt;Rt++,le++,ue++)le===Bt&&(le=0),ue===Bt&&(ue=0),St[Rt]=Tt(V[Rt],V[le],V[ue]);bt.push(St),qt=qt.concat(St)}let Qt;if(x===0)Qt=xr.triangulateShape(tt,W);else{let nt=[],Ct=[];for(let V=0;V<x;V++){let Rt=V/x,Bt=S*Math.cos(Rt*Math.PI/2),le=M*Math.sin(Rt*Math.PI/2)+I;for(let ue=0,he=tt.length;ue<he;ue++){let we=dt(tt[ue],gt[ue],le);Pt(we.x,we.y,-Bt),Rt===0&&nt.push(we)}for(let ue=0,he=J;ue<he;ue++){let we=W[ue];St=bt[ue];let X=[];for(let Ue=0,Pe=we.length;Ue<Pe;Ue++){let U=dt(we[Ue],St[Ue],le);Pt(U.x,U.y,-Bt),Rt===0&&X.push(U)}Rt===0&&Ct.push(X)}}Qt=xr.triangulateShape(nt,Ct)}let Ge=Qt.length,Ie=M+I;for(let nt=0;nt<mt;nt++){let Ct=g?dt(H[nt],qt[nt],Ie):H[nt];R?(G.copy(E.normals[0]).multiplyScalar(Ct.x),O.copy(E.binormals[0]).multiplyScalar(Ct.y),A.copy(k[0]).add(G).add(O),Pt(A.x,A.y,A.z)):Pt(Ct.x,Ct.y,0)}for(let nt=1;nt<=d;nt++)for(let Ct=0;Ct<mt;Ct++){let V=g?dt(H[Ct],qt[Ct],Ie):H[Ct];R?(G.copy(E.normals[nt]).multiplyScalar(V.x),O.copy(E.binormals[nt]).multiplyScalar(V.y),A.copy(k[nt]).add(G).add(O),Pt(A.x,A.y,A.z)):Pt(V.x,V.y,v/d*nt)}for(let nt=x-1;nt>=0;nt--){let Ct=nt/x,V=S*Math.cos(Ct*Math.PI/2),Rt=M*Math.sin(Ct*Math.PI/2)+I;for(let Bt=0,le=tt.length;Bt<le;Bt++){let ue=dt(tt[Bt],gt[Bt],Rt);Pt(ue.x,ue.y,v+V)}for(let Bt=0,le=W.length;Bt<le;Bt++){let ue=W[Bt];St=bt[Bt];for(let he=0,we=ue.length;he<we;he++){let X=dt(ue[he],St[he],Rt);R?Pt(X.x,X.y+k[d-1].y,k[d-1].x+V):Pt(X.x,X.y,v+V)}}}$e(),xt();function $e(){let nt=s.length/3;if(g){let Ct=0,V=mt*Ct;for(let Rt=0;Rt<Ge;Rt++){let Bt=Qt[Rt];oe(Bt[2]+V,Bt[1]+V,Bt[0]+V)}Ct=d+x*2,V=mt*Ct;for(let Rt=0;Rt<Ge;Rt++){let Bt=Qt[Rt];oe(Bt[0]+V,Bt[1]+V,Bt[2]+V)}}else{for(let Ct=0;Ct<Ge;Ct++){let V=Qt[Ct];oe(V[2],V[1],V[0])}for(let Ct=0;Ct<Ge;Ct++){let V=Qt[Ct];oe(V[0]+mt*d,V[1]+mt*d,V[2]+mt*d)}}n.addGroup(nt,s.length/3-nt,0)}function xt(){let nt=s.length/3,Ct=0;vt(tt,Ct),Ct+=tt.length;for(let V=0,Rt=W.length;V<Rt;V++){let Bt=W[V];vt(Bt,Ct),Ct+=Bt.length}n.addGroup(nt,s.length/3-nt,1)}function vt(nt,Ct){let V=nt.length;for(;--V>=0;){let Rt=V,Bt=V-1;Bt<0&&(Bt=nt.length-1);for(let le=0,ue=d+x*2;le<ue;le++){let he=mt*le,we=mt*(le+1),X=Ct+Rt+he,Ue=Ct+Bt+he,Pe=Ct+Bt+we,U=Ct+Rt+we;Zt(X,Ue,Pe,U)}}}function Pt(nt,Ct,V){h.push(nt),h.push(Ct),h.push(V)}function oe(nt,Ct,V){_e(nt),_e(Ct),_e(V);let Rt=s.length/3,Bt=B.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);ne(Bt[0]),ne(Bt[1]),ne(Bt[2])}function Zt(nt,Ct,V,Rt){_e(nt),_e(Ct),_e(Rt),_e(Ct),_e(V),_e(Rt);let Bt=s.length/3,le=B.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ne(le[0]),ne(le[1]),ne(le[3]),ne(le[1]),ne(le[2]),ne(le[3])}function _e(nt){s.push(h[nt*3+0]),s.push(h[nt*3+1]),s.push(h[nt*3+2])}function ne(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Cd[s.type]().fromJSON(s)),new i(n,t.options)}},Dx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],h=t[n*3+1],u=t[s*3],d=t[s*3+1];return[new zt(r,a),new zt(l,h),new zt(u,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],h=t[e*3+2],u=t[n*3],d=t[n*3+1],v=t[n*3+2],g=t[s*3],S=t[s*3+1],M=t[s*3+2],I=t[r*3],x=t[r*3+1],_=t[r*3+2];return Math.abs(l-d)<Math.abs(a-u)?[new zt(a,1-h),new zt(u,1-v),new zt(g,1-M),new zt(I,1-_)]:[new zt(l,1-h),new zt(d,1-v),new zt(S,1-M),new zt(x,1-_)]}};function Nx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ho=class i extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),h=Math.floor(s),u=l+1,d=h+1,v=t/l,g=e/h,S=[],M=[],I=[],x=[];for(let _=0;_<d;_++){let B=_*g-a;for(let k=0;k<u;k++){let R=k*v-r;M.push(R,-B,0),I.push(0,0,1),x.push(k/l),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let B=0;B<l;B++){let k=B+u*_,R=B+u*(_+1),E=B+1+u*(_+1),O=B+1+u*_;S.push(k,R,O),S.push(R,E,O)}this.setIndex(S),this.setAttribute("position",new xn(M,3)),this.setAttribute("normal",new xn(I,3)),this.setAttribute("uv",new xn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Go=class extends vn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new q,r=new q;if(t.index!==null){let a=t.attributes.position,l=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,d=h.length;u<d;++u){let v=h[u],g=v.start,S=v.count;for(let M=g,I=g+S;M<I;M+=3)for(let x=0;x<3;x++){let _=l.getX(M+x),B=l.getX(M+(x+1)%3);s.fromBufferAttribute(a,_),r.fromBufferAttribute(a,B),Sm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let u=0;u<3;u++){let d=3*l+u,v=3*l+(u+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),Sm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new xn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Sm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Cr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Mm(s))s.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Mm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Jn(i){let t={};for(let e=0;e<i.length;e++){let n=Cr(i[e]);for(let s in n)t[s]=n[s]}return t}function Mm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ux(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}var cl={clone:Cr,merge:Jn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Ux(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qc=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wo=class extends ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=ch,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Yc=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jc=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ia(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wd,endingEnd:wd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],h=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ed:r=t,l=2*e-n;break;case Td:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Ed:a=t,h=2*n-e;break;case Td:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(h-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this._offsetPrev,v=this._offsetNext,g=this._weightPrev,S=this._weightNext,M=(n-e)/(s-e),I=M*M,x=I*M,_=-g*x+2*g*I-g*M,B=(1+g)*x+(-1.5-2*g)*I+(-.5+g)*M+1,k=(-1-S)*x+(1.5+S)*I+.5*M,R=S*x-S*I;for(let E=0;E!==l;++E)r[E]=_*a[d+E]+B*a[u+E]+k*a[h+E]+R*a[v+E];return r}},jc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=(n-e)/(s-e),v=1-d;for(let g=0;g!==l;++g)r[g]=a[u+g]*v+a[h+g]*d;return r}},Kc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qc=class extends Hs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let M=(n-e)/(s-e),I=1-M;for(let x=0;x!==l;++x)r[x]=a[u+x]*I+a[h+x]*M;return r}let g=l*2,S=t-1;for(let M=0;M!==l;++M){let I=a[u+M],x=a[h+M],_=S*g+M*2,B=v[_],k=v[_+1],R=t*g+M*2,E=d[R],O=d[R+1],G=kx(n,e,B,E,s);r[M]=vg(G,I,k,O,x)}return r}};function vg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function kx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=vg(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let h=Bx(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-l/h))}return r}var yi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),yd(t.settings)&&(n.settings={inTangents:ia(t.settings.inTangents,Array),outTangents:ia(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Qc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vo:e=this.InterpolantFactoryMethodDiscrete;break;case Pc:e=this.InterpolantFactoryMethodLinear;break;case yc:e=this.InterpolantFactoryMethodSmooth;break;case bd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return Pc;case this.InterpolantFactoryMethodSmooth:return yc;case this.InterpolantFactoryMethodBezier:return bd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;yd(this.settings)&&(bm(this.settings.inTangents,t),bm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){be("KeyframeTrack: Time is not a valid number.",this,l,h),t=!1;break}if(a!==null&&a>h){be("KeyframeTrack: Out of order keys.",this,l,h,a),t=!1;break}a=h}if(s!==void 0&&A_(s))for(let l=0,h=s.length;l!==h;++l){let u=s[l];if(isNaN(u)){be("KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yc,r=t.length-1,a=1;for(let l=1;l<r;++l){let h=!1,u=t[l],d=t[l+1];if(u!==d&&(l!==1||u!==t[0]))if(s)h=!0;else{let v=l*n,g=v-n,S=v+n;for(let M=0;M!==n;++M){let I=e[v+M];if(I!==e[g+M]||I!==e[S+M]){h=!0;break}}}if(h){if(l!==a){t[a]=t[l];let v=l*n,g=a*n;for(let S=0;S!==n;++S)e[g+S]=e[v+S]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,h=a*n,u=0;u!==n;++u)e[h+u]=e[l+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,yd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Pc;var Gs=class extends yi{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=vo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};th.prototype.ValueTypeName="color";var eh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};eh.prototype.ValueTypeName="number";var nh=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-e)/(s-e),u=t*l;for(let d=u+l;u!==d;u+=4)es.slerpFlat(r,0,a,u-l,a,u,h);return r}},Xo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends yi{constructor(t,e,n){super(t,e,n)}};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=vo;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};ih.prototype.ValueTypeName="vector";var sh=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,v){return u.push(d,v),this},this.removeHandler=function(d){let v=u.indexOf(d);return v!==-1&&u.splice(v,2),this},this.getHandler=function(d){for(let v=0,g=u.length;v<g;v+=2){let S=u[v],M=u[v+1];if(S.global&&(S.lastIndex=0),S.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yg=new sh,rh=class{constructor(t){this.manager=t!==void 0?t:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var qo=class extends Nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yo=class extends qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sd=new He,wm=new q,Em=new q,ah=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wm.setFromMatrixPosition(t.matrixWorld),e.position.copy(wm),Em.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Em),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Sd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===ha||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),e.multiply(Sd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_c=new q,xc=new es,Zi=new q,Jo=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_c,xc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,xc,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_c,xc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,xc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zs=new q,Tm=new zt,Am=new zt,Yn=class extends Jo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zs.x,zs.y).multiplyScalar(-t/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-t/zs.z)}getViewSize(t,e){return this.getViewBounds(t,Tm,Am),e.subVectors(Am,Tm)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/u,s*=a.width/h,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sa=class extends Jo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ld=class extends ah{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zo=class extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Ld}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var jo=class extends vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var sa=-90,ra=1,oh=class extends Nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yn(sa,ra,t,e);s.layers=this.layers,this.add(s);let r=new Yn(sa,ra,t,e);r.layers=this.layers,this.add(r);let a=new Yn(sa,ra,t,e);a.layers=this.layers,this.add(a);let l=new Yn(sa,ra,t,e);l.layers=this.layers,this.add(l);let h=new Yn(sa,ra,t,e);h.layers=this.layers,this.add(h);let u=new Yn(sa,ra,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,h]=e;for(let u of e)this.remove(u);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,h,u,d]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,g,S),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},lh=class extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var cf="\\[\\]\\.:\\/",zx=new RegExp("["+cf+"]","g"),hf="[^"+cf+"]",$x="[^"+cf.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",hf),Hx=/(WCOD+)?/.source.replace("WCOD",$x),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),Xx=new RegExp("^"+Vx+Hx+Gx+Wx+"$"),qx=["material","materials","bones","map"],Dd=class{constructor(t,e,n){let s=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(t){let e=Xx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let h=n(l.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;be("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=Dd;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);var Xs=class extends Uc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Cm=new He,Ko=class{constructor(t,e,n=0,s=1/0){this.ray=new yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cm),this}intersectObject(t,e=!0,n=[]){return Nd(t,this,n,e),n.sort(Rm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nd(t[s],this,n,e);return n.sort(Rm),n}};function Rm(i,t){return i.distance-t.distance}function Nd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Nd(r[a],t,e,!0)}}var Ud=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Im=new q,vc=new q,aa=new q,oa=new q,Md=new q,Yx=new q,Jx=new q,Qo=class{constructor(t=new q,e=new q){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Im.subVectors(t,this.start),vc.subVectors(this.end,this.start);let n=vc.dot(vc);if(n===0)return 0;let r=vc.dot(Im)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Yx,n=Jx){let s=10000000000000001e-32,r,a,l=this.start,h=t.start,u=this.end,d=t.end;aa.subVectors(u,l),oa.subVectors(d,h),Md.subVectors(l,h);let v=aa.dot(aa),g=oa.dot(oa),S=oa.dot(Md);if(v<=s&&g<=s)return e.copy(l),n.copy(h),e.sub(n),e.dot(e);if(v<=s)r=0,a=S/g,a=Re(a,0,1);else{let M=aa.dot(Md);if(g<=s)a=0,r=Re(-M/v,0,1);else{let I=aa.dot(oa),x=v*g-I*I;x!==0?r=Re((I*S-M*g)/x,0,1):r=0,a=(I*r+S)/g,a<0?(a=0,r=Re(-M/v,0,1)):a>1&&(a=1,r=Re((I-M)/v,0,1))}}return e.copy(l).addScaledVector(aa,r),n.copy(h).addScaledVector(oa,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function uf(i,t,e,n){let s=Zx(n);switch(e){case tf:return i*t;case gh:return i*t/s.components*s.byteLength;case _h:return i*t/s.components*s.byteLength;case js:return i*t*2/s.components*s.byteLength;case xh:return i*t*2/s.components*s.byteLength;case ef:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case vh:return i*t*4/s.components*s.byteLength;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sh:case bh:return Math.max(i,16)*Math.max(t,8)/4;case yh:case Mh:return Math.max(i,8)*Math.max(t,8)/2;case wh:case Eh:case Ah:case Ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Th:case ol:case Rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $h:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gh:case Wh:case Xh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qh:case Yh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case Jh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zx(i){switch(i){case di:case Zd:return{byteLength:1,components:1};case wa:case jd:case Wi:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Gi:case fh:case Ti:return{byteLength:4,components:1};case Kd:case Qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kx(i){let t=new WeakMap;function e(l,h){let u=l.array,d=l.usage,v=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let S;if(u instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)S=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)S=i.SHORT;else if(u instanceof Uint32Array)S=i.UNSIGNED_INT;else if(u instanceof Int32Array)S=i.INT;else if(u instanceof Int8Array)S=i.BYTE;else if(u instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:S,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,h,u){let d=h.array,v=h.updateRanges;if(i.bindBuffer(u,l),v.length===0)i.bufferSubData(u,0,d);else{v.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<v.length;S++){let M=v[g],I=v[S];I.start<=M.start+M.count+1?M.count=Math.max(M.count,I.start+I.count-M.start):(++g,v[g]=I)}v.length=g+1;for(let S=0,M=v.length;S<M;S++){let I=v[S];i.bufferSubData(u,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:s,remove:r,update:a}}var Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tv=`#ifdef USE_ALPHAHASH
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
#endif`,ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
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
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dv=`#ifdef USE_IRIDESCENCE
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
#endif`,fv=`#ifdef USE_BUMPMAP
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mv=`#define PI 3.141592653589793
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
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zv=`PhysicalMaterial material;
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
#endif`,jv=`uniform sampler2D dfgLUT;
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
}`,Kv=`
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
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
}`,aS=`#if DEPTH_PACKING == 3200
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
}`,oS=`#define DISTANCE
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
}`,lS=`#define DISTANCE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`uniform float scale;
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,xS=`#define MATCAP
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
}`,vS=`#define NORMAL
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
}`,yS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,bS=`#define STANDARD
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
}`,wS=`#define STANDARD
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
}`,ES=`#define TOON
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
}`,TS=`#define TOON
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
}`,AS=`uniform float size;
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,IS=`uniform vec3 color;
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
}`,PS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Qx,alphahash_pars_fragment:tv,alphamap_fragment:ev,alphamap_pars_fragment:nv,alphatest_fragment:iv,alphatest_pars_fragment:sv,aomap_fragment:rv,aomap_pars_fragment:av,batching_pars_vertex:ov,batching_vertex:lv,begin_vertex:cv,beginnormal_vertex:hv,bsdfs:uv,iridescence_fragment:dv,bumpmap_pars_fragment:fv,clipping_planes_fragment:pv,clipping_planes_pars_fragment:mv,clipping_planes_pars_vertex:gv,clipping_planes_vertex:_v,color_fragment:xv,color_pars_fragment:vv,color_pars_vertex:yv,color_vertex:Sv,common:Mv,cube_uv_reflection_fragment:bv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Tv,emissivemap_fragment:Av,emissivemap_pars_fragment:Cv,colorspace_fragment:Rv,colorspace_pars_fragment:Iv,envmap_fragment:Pv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Dv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:Wv,envmap_vertex:Uv,fog_vertex:Fv,fog_pars_vertex:Ov,fog_fragment:Bv,fog_pars_fragment:kv,gradientmap_pars_fragment:zv,lightmap_pars_fragment:$v,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Hv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Jv,lights_physical_fragment:Zv,lights_physical_pars_fragment:jv,lights_fragment_begin:Kv,lights_fragment_maps:Qv,lights_fragment_end:ty,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ry,map_fragment:ay,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:uy,morphinstance_vertex:dy,morphcolor_vertex:fy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:xy,normal_pars_fragment:vy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:Iy,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:By,skinbase_vertex:ky,skinning_pars_vertex:zy,skinning_vertex:$y,skinnormal_vertex:Vy,specularmap_fragment:Hy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Jy,uv_pars_vertex:Zy,uv_vertex:jy,worldpos_vertex:Ky,background_vert:Qy,background_frag:tS,backgroundCube_vert:eS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:sS,depth_vert:rS,depth_frag:aS,distance_vert:oS,distance_frag:lS,equirect_vert:cS,equirect_frag:hS,linedashed_vert:uS,linedashed_frag:dS,meshbasic_vert:fS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:xS,meshnormal_vert:vS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:bS,meshphysical_frag:wS,meshtoon_vert:ES,meshtoon_frag:TS,points_vert:AS,points_frag:CS,shadow_vert:RS,shadow_frag:IS,sprite_vert:PS,sprite_frag:LS},Gt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},ni={basic:{uniforms:Jn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Jn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Jn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Jn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Jn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Jn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Jn([Gt.points,Gt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Jn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Jn([Gt.common,Gt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Jn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Jn([Gt.sprite,Gt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Jn([Gt.common,Gt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Jn([Gt.lights,Gt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ni.physical={uniforms:Jn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Qh={r:0,b:0,g:0},DS=new He,Hg=new Ce;Hg.set(-1,0,0,0,1,0,0,0,1);function NS(i,t,e,n,s,r){let a=new ve(0),l=s===!0?0:1,h,u,d=null,v=0,g=null;function S(B){let k=B.isScene===!0?B.background:null;if(k&&k.isTexture){let R=B.backgroundBlurriness>0;k=t.get(k,R)}return k}function M(B){let k=!1,R=S(B);R===null?x(a,l):R&&R.isColor&&(x(R,1),k=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(B,k){let R=S(k);R&&(R.isCubeTexture||R.mapping===el)?(u===void 0&&(u=new Un(new _a(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Cr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=R,u.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Hg),u.material.toneMapped=Ve.getTransfer(R.colorSpace)!==en,(d!==R||v!==R.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,v=R.version,g=i.toneMapping),u.layers.enableAll(),B.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Un(new Ho(2,2),new Fn({name:"BackgroundMaterial",uniforms:Cr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.toneMapped=Ve.getTransfer(R.colorSpace)!==en,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,g=i.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null))}function x(B,k){B.getRGB(Qh,lf(i)),e.buffers.color.setClear(Qh.r,Qh.g,Qh.b,k,r)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(B,k=1){a.set(B),l=k,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(B){l=B,x(a,l)},render:M,addToRenderList:I,dispose:_}}function US(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,a=!1;function l(W,st,lt,J,tt){let dt=!1,mt=v(W,J,lt,st);r!==mt&&(r=mt,u(r.object)),dt=S(W,J,lt,tt),dt&&M(W,J,lt,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(dt||a)&&(a=!1,R(W,st,lt,J),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function h(){return i.createVertexArray()}function u(W){return i.bindVertexArray(W)}function d(W){return i.deleteVertexArray(W)}function v(W,st,lt,J){let tt=J.wireframe===!0,dt=n[st.id];dt===void 0&&(dt={},n[st.id]=dt);let mt=W.isInstancedMesh===!0?W.id:0,Tt=dt[mt];Tt===void 0&&(Tt={},dt[mt]=Tt);let gt=Tt[lt.id];gt===void 0&&(gt={},Tt[lt.id]=gt);let bt=gt[tt];return bt===void 0&&(bt=g(h()),gt[tt]=bt),bt}function g(W){let st=[],lt=[],J=[];for(let tt=0;tt<e;tt++)st[tt]=0,lt[tt]=0,J[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:lt,attributeDivisors:J,object:W,attributes:{},index:null}}function S(W,st,lt,J){let tt=r.attributes,dt=st.attributes,mt=0,Tt=lt.getAttributes();for(let gt in Tt)if(Tt[gt].location>=0){let St=tt[gt],qt=dt[gt];if(qt===void 0&&(gt==="instanceMatrix"&&W.instanceMatrix&&(qt=W.instanceMatrix),gt==="instanceColor"&&W.instanceColor&&(qt=W.instanceColor)),St===void 0||St.attribute!==qt||qt&&St.data!==qt.data)return!0;mt++}return r.attributesNum!==mt||r.index!==J}function M(W,st,lt,J){let tt={},dt=st.attributes,mt=0,Tt=lt.getAttributes();for(let gt in Tt)if(Tt[gt].location>=0){let St=dt[gt];St===void 0&&(gt==="instanceMatrix"&&W.instanceMatrix&&(St=W.instanceMatrix),gt==="instanceColor"&&W.instanceColor&&(St=W.instanceColor));let qt={};qt.attribute=St,St&&St.data&&(qt.data=St.data),tt[gt]=qt,mt++}r.attributes=tt,r.attributesNum=mt,r.index=J}function I(){let W=r.newAttributes;for(let st=0,lt=W.length;st<lt;st++)W[st]=0}function x(W){_(W,0)}function _(W,st){let lt=r.newAttributes,J=r.enabledAttributes,tt=r.attributeDivisors;lt[W]=1,J[W]===0&&(i.enableVertexAttribArray(W),J[W]=1),tt[W]!==st&&(i.vertexAttribDivisor(W,st),tt[W]=st)}function B(){let W=r.newAttributes,st=r.enabledAttributes;for(let lt=0,J=st.length;lt<J;lt++)st[lt]!==W[lt]&&(i.disableVertexAttribArray(lt),st[lt]=0)}function k(W,st,lt,J,tt,dt,mt){mt===!0?i.vertexAttribIPointer(W,st,lt,tt,dt):i.vertexAttribPointer(W,st,lt,J,tt,dt)}function R(W,st,lt,J){I();let tt=J.attributes,dt=lt.getAttributes(),mt=st.defaultAttributeValues;for(let Tt in dt){let gt=dt[Tt];if(gt.location>=0){let bt=tt[Tt];if(bt===void 0&&(Tt==="instanceMatrix"&&W.instanceMatrix&&(bt=W.instanceMatrix),Tt==="instanceColor"&&W.instanceColor&&(bt=W.instanceColor)),bt!==void 0){let St=bt.normalized,qt=bt.itemSize,Qt=t.get(bt);if(Qt===void 0)continue;let Ge=Qt.buffer,Ie=Qt.type,$e=Qt.bytesPerElement,xt=Ie===i.INT||Ie===i.UNSIGNED_INT||bt.gpuType===fh;if(bt.isInterleavedBufferAttribute){let vt=bt.data,Pt=vt.stride,oe=bt.offset;if(vt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<gt.locationSize;Zt++)_(gt.location+Zt,vt.meshPerAttribute);W.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Zt=0;Zt<gt.locationSize;Zt++)x(gt.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Zt=0;Zt<gt.locationSize;Zt++)k(gt.location+Zt,qt/gt.locationSize,Ie,St,Pt*$e,(oe+qt/gt.locationSize*Zt)*$e,xt)}else{if(bt.isInstancedBufferAttribute){for(let vt=0;vt<gt.locationSize;vt++)_(gt.location+vt,bt.meshPerAttribute);W.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let vt=0;vt<gt.locationSize;vt++)x(gt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let vt=0;vt<gt.locationSize;vt++)k(gt.location+vt,qt/gt.locationSize,Ie,St,qt*$e,qt/gt.locationSize*vt*$e,xt)}}else if(mt!==void 0){let St=mt[Tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(gt.location,St);break;case 3:i.vertexAttrib3fv(gt.location,St);break;case 4:i.vertexAttrib4fv(gt.location,St);break;default:i.vertexAttrib1fv(gt.location,St)}}}}B()}function E(){F();for(let W in n){let st=n[W];for(let lt in st){let J=st[lt];for(let tt in J){let dt=J[tt];for(let mt in dt)d(dt[mt].object),delete dt[mt];delete J[tt]}}delete n[W]}}function O(W){if(n[W.id]===void 0)return;let st=n[W.id];for(let lt in st){let J=st[lt];for(let tt in J){let dt=J[tt];for(let mt in dt)d(dt[mt].object),delete dt[mt];delete J[tt]}}delete n[W.id]}function G(W){for(let st in n){let lt=n[st];for(let J in lt){let tt=lt[J];if(tt[W.id]===void 0)continue;let dt=tt[W.id];for(let mt in dt)d(dt[mt].object),delete dt[mt];delete tt[W.id]}}}function A(W){for(let st in n){let lt=n[st],J=W.isInstancedMesh===!0?W.id:0,tt=lt[J];if(tt!==void 0){for(let dt in tt){let mt=tt[dt];for(let Tt in mt)d(mt[Tt].object),delete mt[Tt];delete tt[dt]}delete lt[J],Object.keys(lt).length===0&&delete n[st]}}}function F(){H(),a=!0,r!==s&&(r=s,u(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:x,disableUnusedAttributes:B}}function FS(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let g=0;for(let S=0;S<d;S++)g+=u[S];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function OS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==Ai&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(G){let A=G===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==di&&G!==Ti&&!A&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=h(u);d!==u&&(ye("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let v=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:B,maxVaryings:k,maxFragmentUniforms:R,maxSamples:E,samples:O}}function BS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bi,l=new Ce,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){let S=v.length!==0||g||n!==0||s;return s=g,n=v.length,S},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,g){e=d(v,g,0)},this.setState=function(v,g,S){let M=v.clippingPlanes,I=v.clipIntersection,x=v.clipShadows,_=i.get(v);if(!s||M===null||M.length===0||r&&!x)r?d(null):u();else{let B=r?0:n,k=B*4,R=_.clippingState||null;h.value=R,R=d(M,g,k,S);for(let E=0;E!==k;++E)R[E]=e[E];_.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=B}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,g,S,M){let I=v!==null?v.length:0,x=null;if(I!==0){if(x=h.value,M!==!0||x===null){let _=S+I*4,B=g.matrixWorldInverse;l.getNormalMatrix(B),(x===null||x.length<_)&&(x=new Float32Array(_));for(let k=0,R=S;k!==I;++k,R+=4)a.copy(v[k]).applyMatrix4(B,l),a.normal.toArray(x,R),x[R+3]=a.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,x}}var Aa=4,kS=6,zS=20,$S=256,hl=new Sa,Sg=new ve,df=null,ff=0,pf=0,mf=!1,VS=new q,Rr=new q,eu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=VS}=r;df=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(df,ff,pf),this._renderer.xr.enabled=mf,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),df=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Wi,format:Ai,colorSpace:yo,depthBuffer:!1},s=Mg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=HS(r)),this._blurMaterial=WS(r,t,e),this._ggxMaterial=GS(r,t,e)}return s}_compileMaterial(t){let e=new Un(new vn,t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,n,s,r){let h=new Yn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Sg),v.toneMapping=Hi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new _a,new Sr({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,x=I.material,_=!1,B=t.background;B?B.isColor&&(x.color.copy(B),t.background=null,_=!0):(x.color.copy(Sg),_=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(h.up.set(0,u[k],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[k],r.y,r.z)):R===1?(h.up.set(0,0,u[k]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[k],r.z)):(h.up.set(0,u[k],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[k]));let E=this._cubeSize;Ta(s,R*E,k>2?E:0,E,E),v.setRenderTarget(s),_&&v.render(I,h),v.render(t,h)}v.toneMapping=S,v.autoClear=g,t.background=B}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ys||t.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let h=this._cubeSize;Ta(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,hl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let h=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(u*u-d*d),g=u*1.25,S=v*g,{_lodMax:M}=this,I=this._sizeLods[n],x=3*I*(n>M-Aa?n-M+Aa:0),_=4*(this._cubeSize-I);h.envMap.value=t.texture,h.roughness.value=S,h.mipInt.value=M-e,Ta(r,x,_,3*I,2*I),s.setRenderTarget(r),s.render(l,hl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=M-n,Ta(t,x,_,3*I,2*I),s.setRenderTarget(t),s.render(l,hl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,h=this._lodMeshes[s];h.material=l;let u=l.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-Aa?s-this._lodMax+Aa:0),g=4*(this._cubeSize-d);Ta(e,v,g,3*d,2*d),a.setRenderTarget(e),a.render(h,hl)}};function HS(i){let t=[],e=[],n=i,s=i-Aa+1+kS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],v=6,g=6,S=3,M=new Float32Array(S*g*v),I=new Float32Array(S*g*v);for(let _=0;_<v;_++){let B=_%3*2/3-1,k=_>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];M.set(R,S*g*_);for(let E=0;E<g;E++){let O=d[E*2]*2-1,G=d[E*2+1]*2-1;_===0?Rr.set(1,G,O):_===1?Rr.set(-O,1,-G):_===2?Rr.set(-O,G,1):_===3?Rr.set(-1,G,-O):_===4?Rr.set(-O,-1,G):Rr.set(O,G,-1),Rr.toArray(I,(_*g+E)*S)}}let x=new vn;x.setAttribute("position",new ln(M,S)),x.setAttribute("outputDirection",new ln(I,S)),e.push(new Un(x,null)),n>Aa&&n--}return{lodMeshes:e,sizeLods:t}}function Mg(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function GS(i,t,e){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function WS(i,t,e){return new Fn({name:"SphericalGaussianBlur",defines:{SAMPLES:zS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function bg(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function wg(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nu=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _a(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:ss});r.uniforms.tEquirect.value=e;let a=new Un(s,r),l=e.minFilter;return e.minFilter===Js&&(e.minFilter=$n),new oh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function XS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,S=!1){return g==null?null:S?a(g):r(g)}function r(g){if(g&&g.isTexture){let S=g.mapping;if(S===hh||S===uh)if(t.has(g)){let M=t.get(g).texture;return l(M,g.mapping)}else{let M=g.image;if(M&&M.height>0){let I=new nu(M.height);return I.fromEquirectangularTexture(i,g),t.set(g,I),g.addEventListener("dispose",u),l(I.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){let S=g.mapping,M=S===hh||S===uh,I=S===Ys||S===Ar;if(M||I){let x=e.get(g),_=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return n===null&&(n=new eu(i)),x=M?n.fromEquirectangular(g,x):n.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,e.set(g,x),x.texture;if(x!==void 0)return x.texture;{let B=g.image;return M&&B&&B.height>0||I&&B&&h(B)?(n===null&&(n=new eu(i)),x=M?n.fromEquirectangular(g):n.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,e.set(g,x),g.addEventListener("dispose",d),x.texture):null}}}return g}function l(g,S){return S===hh?g.mapping=Ys:S===uh&&(g.mapping=Ar),g}function h(g){let S=0,M=6;for(let I=0;I<M;I++)g[I]!==void 0&&S++;return S===M}function u(g){let S=g.target;S.removeEventListener("dispose",u);let M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function d(g){let S=g.target;S.removeEventListener("dispose",d);let M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function qS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vr("WebGLRenderer: "+n+" extension not supported."),s}}}function YS(i,t,e,n){let s={},r=new WeakMap;function a(v){let g=v.target;g.index!==null&&t.remove(g.index);for(let M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",a),delete s[g.id];let S=r.get(g);S&&(t.remove(S),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(v,g){return s[g.id]===!0||(g.addEventListener("dispose",a),s[g.id]=!0,e.memory.geometries++),g}function h(v){let g=v.attributes;for(let S in g)t.update(g[S],i.ARRAY_BUFFER)}function u(v){let g=[],S=v.index,M=v.attributes.position,I=0;if(M===void 0)return;if(S!==null){let B=S.array;I=S.version;for(let k=0,R=B.length;k<R;k+=3){let E=B[k+0],O=B[k+1],G=B[k+2];g.push(E,O,O,G,G,E)}}else{let B=M.array;I=M.version;for(let k=0,R=B.length/3-1;k<R;k+=3){let E=k+0,O=k+1,G=k+2;g.push(E,O,O,G,G,E)}}let x=new(M.count>=65535?Ao:To)(g,1);x.version=I;let _=r.get(v);_&&t.remove(_),r.set(v,x)}function d(v){let g=r.get(v);if(g){let S=v.index;S!==null&&g.version<S.version&&u(v)}else u(v);return r.get(v)}return{get:l,update:h,getWireframeAttribute:d}}function JS(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function h(v,g){i.drawElements(n,g,r,v*a),e.update(g,n,1)}function u(v,g,S){S!==0&&(i.drawElementsInstanced(n,g,r,v*a,S),e.update(g,n,S))}function d(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,v,0,S);let I=0;for(let x=0;x<S;x++)I+=g[x];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ZS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:be("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jS(i,t,e){let n=new WeakMap,s=new nn;function r(a,l,h){let u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,g=n.get(l);if(g===void 0||g.count!==v){let F=function(){G.dispose(),n.delete(l),l.removeEventListener("dispose",F)};g!==void 0&&g.texture.dispose();let S=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],B=l.morphAttributes.color||[],k=0;S===!0&&(k=1),M===!0&&(k=2),I===!0&&(k=3);let R=l.attributes.position.count*k,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*E*4*v),G=new wo(O,R,E,v);G.type=Ti,G.needsUpdate=!0;let A=k*4;for(let H=0;H<v;H++){let W=x[H],st=_[H],lt=B[H],J=R*E*4*H;for(let tt=0;tt<W.count;tt++){let dt=tt*A;S===!0&&(s.fromBufferAttribute(W,tt),O[J+dt+0]=s.x,O[J+dt+1]=s.y,O[J+dt+2]=s.z,O[J+dt+3]=0),M===!0&&(s.fromBufferAttribute(st,tt),O[J+dt+4]=s.x,O[J+dt+5]=s.y,O[J+dt+6]=s.z,O[J+dt+7]=0),I===!0&&(s.fromBufferAttribute(lt,tt),O[J+dt+8]=s.x,O[J+dt+9]=s.y,O[J+dt+10]=s.z,O[J+dt+11]=lt.itemSize===4?s.w:1)}}g={count:v,texture:G,size:new zt(R,E)},n.set(l,g),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let S=0;for(let I=0;I<u.length;I++)S+=u[I];let M=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function KS(i,t,e,n,s){let r=new WeakMap;function a(u){let d=s.render.frame,v=u.geometry,g=t.get(u,v);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let S=u.skeleton;r.get(S)!==d&&(S.update(),r.set(S,d))}return g}function l(){r=new WeakMap}function h(u){let d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var QS={[Vd]:"LINEAR_TONE_MAPPING",[Hd]:"REINHARD_TONE_MAPPING",[Gd]:"CINEON_TONE_MAPPING",[Wd]:"ACES_FILMIC_TONE_MAPPING",[qd]:"AGX_TONE_MAPPING",[Yd]:"NEUTRAL_TONE_MAPPING",[Xd]:"CUSTOM_TONE_MAPPING"};function tM(i,t,e,n,s,r){let a=new hi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,h=null,u=new vn;u.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xn([0,2,0,0,2,0],2));let d=new qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Un(u,d),g=new Sa(-1,1,1,-1,0,1),S=null,M=null,I=!1,x,_=null,B=[],k=!1;this.setSize=function(R,E){a.setSize(R,E),l!==null&&l.setSize(R,E),h!==null&&h.setSize(R,E);for(let O=0;O<B.length;O++){let G=B[O];G.setSize&&G.setSize(R,E)}},this.setEffects=function(R){B=R,k=B.length>0&&B[0].isRenderPass===!0;let E=a.width,O=a.height;B.length>0&&l===null&&(l=new hi(E,O,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),h=new hi(E,O,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<B.length;G++){let A=B[G];A.setSize&&A.setSize(E,O)}},this.begin=function(R,E){if(I||R.toneMapping===Hi&&B.length===0)return!1;if(_=E,E!==null){let O=E.width,G=E.height;(a.width!==O||a.height!==G)&&this.setSize(O,G)}return k===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=Hi,!0},this.hasRenderPass=function(){return k},this.end=function(R,E){R.toneMapping=x,I=!0;let O=a,G=l;for(let A=0;A<B.length;A++){let F=B[A];F.enabled!==!1&&(F.render(R,G,O,E),F.needsSwap!==!1&&(O=G,G=G===l?h:l))}if(S!==R.outputColorSpace||M!==R.toneMapping){S=R.outputColorSpace,M=R.toneMapping,d.defines={},Ve.getTransfer(S)===en&&(d.defines.SRGB_TRANSFER="");let A=QS[M];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(_),R.render(v,g),_=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),h!==null&&h.dispose(),u.dispose(),d.dispose()}}var Gg=new ci,xf=new Vs(1,1),Wg=new wo,Xg=new Nc,qg=new Lo,Eg=[],Tg=[],Ag=new Float32Array(16),Cg=new Float32Array(9),Rg=new Float32Array(4);function Ra(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eg[s];if(r===void 0&&(r=new Float32Array(s),Eg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function En(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ru(i,t){let e=Tg[t];e===void 0&&(e=new Int32Array(t),Tg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2fv(this.addr,t),Tn(e,t)}}function iM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;i.uniform3fv(this.addr,t),Tn(e,t)}}function sM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4fv(this.addr,t),Tn(e,t)}}function rM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Rg.set(n),i.uniformMatrix2fv(this.addr,!1,Rg),Tn(e,n)}}function aM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Cg.set(n),i.uniformMatrix3fv(this.addr,!1,Cg),Tn(e,n)}}function oM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Ag.set(n),i.uniformMatrix4fv(this.addr,!1,Ag),Tn(e,n)}}function lM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2iv(this.addr,t),Tn(e,t)}}function hM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3iv(this.addr,t),Tn(e,t)}}function uM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4iv(this.addr,t),Tn(e,t)}}function dM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2uiv(this.addr,t),Tn(e,t)}}function pM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3uiv(this.addr,t),Tn(e,t)}}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4uiv(this.addr,t),Tn(e,t)}}function gM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xf.compareFunction=e.isReversedDepthBuffer()?Kh:jh,r=xf):r=Gg,e.setTexture2D(t||r,s)}function _M(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xg,s)}function xM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qg,s)}function vM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wg,s)}function yM(i){switch(i){case 5126:return eM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return hM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return vM}}function SM(i,t){i.uniform1fv(this.addr,t)}function MM(i,t){let e=Ra(t,this.size,2);i.uniform2fv(this.addr,e)}function bM(i,t){let e=Ra(t,this.size,3);i.uniform3fv(this.addr,e)}function wM(i,t){let e=Ra(t,this.size,4);i.uniform4fv(this.addr,e)}function EM(i,t){let e=Ra(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function TM(i,t){let e=Ra(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function AM(i,t){let e=Ra(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function CM(i,t){i.uniform1iv(this.addr,t)}function RM(i,t){i.uniform2iv(this.addr,t)}function IM(i,t){i.uniform3iv(this.addr,t)}function PM(i,t){i.uniform4iv(this.addr,t)}function LM(i,t){i.uniform1uiv(this.addr,t)}function DM(i,t){i.uniform2uiv(this.addr,t)}function NM(i,t){i.uniform3uiv(this.addr,t)}function UM(i,t){i.uniform4uiv(this.addr,t)}function FM(i,t,e){let n=this.cache,s=t.length,r=ru(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xf:a=Gg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function OM(i,t,e){let n=this.cache,s=t.length,r=ru(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xg,r[a])}function BM(i,t,e){let n=this.cache,s=t.length,r=ru(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qg,r[a])}function kM(i,t,e){let n=this.cache,s=t.length,r=ru(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wg,r[a])}function zM(i){switch(i){case 5126:return SM;case 35664:return MM;case 35665:return bM;case 35666:return wM;case 35674:return EM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return IM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return kM}}var vf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yM(e.type)}},yf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zM(e.type)}},Sf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},gf=/(\w+)(\])?(\[|\.)?/g;function Ig(i,t){i.seq.push(t),i.map[t.id]=t}function $M(i,t,e){let n=i.name,s=n.length;for(gf.lastIndex=0;;){let r=gf.exec(n),a=gf.lastIndex,l=r[1],h=r[2]==="]",u=r[3];if(h&&(l=l|0),u===void 0||u==="["&&a+2===s){Ig(e,u===void 0?new vf(l,i,t):new yf(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new Sf(l),Ig(e,v)),e=v}}}var Ca=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);$M(l,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var VM=37297,HM=0;function GM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Lg=new Ce;function WM(i){Ve._getMatrix(Lg,Ve.workingColorSpace,i);let t=`mat3( ${Lg.elements.map(e=>e.toFixed(4))} )`;switch(Ve.getTransfer(i)){case So:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+GM(i.getShaderSource(t),l)}else return r}function XM(i,t){let e=WM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var qM={[Vd]:"Linear",[Hd]:"Reinhard",[Gd]:"Cineon",[Wd]:"ACESFilmic",[qd]:"AgX",[Yd]:"Neutral",[Xd]:"Custom"};function YM(i,t){let e=qM[t];return e===void 0?(ye("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tu=new q;function JM(){Ve.getLuminanceCoefficients(tu);let i=tu.x.toFixed(4),t=tu.y.toFixed(4),e=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function jM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function KM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function dl(i){return i!==""}function Ng(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ug(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(i){return i.replace(QM,eb)}var tb=new Map;function eb(i,t){let e=Be[t];if(e===void 0){let n=tb.get(t);if(n!==void 0)e=Be[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mf(e)}var nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(i){return i.replace(nb,ib)}function ib(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Og(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var sb={[tl]:"SHADOWMAP_TYPE_PCF",[Ma]:"SHADOWMAP_TYPE_VSM"};function rb(i){return sb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ab={[Ys]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE_UV"};function ob(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ab[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lb={[Ar]:"ENVMAP_MODE_REFRACTION"};function cb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hb={[ch]:"ENVMAP_BLENDING_MULTIPLY",[Km]:"ENVMAP_BLENDING_MIX",[Qm]:"ENVMAP_BLENDING_ADD"};function ub(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hb[i.combine]||"ENVMAP_BLENDING_NONE"}function db(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,h=rb(e),u=ob(e),d=cb(e),v=ub(e),g=db(e),S=ZM(e),M=jM(r),I=s.createProgram(),x,_,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(dl).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(dl).join(`
`),_.length>0&&(_+=`
`)):(x=[Og(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),_=[Og(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Hi?YM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,XM("linearToOutputTexel",e.outputColorSpace),JM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dl).join(`
`)),a=Mf(a),a=Ng(a,e),a=Ug(a,e),l=Mf(l),l=Ng(l,e),l=Ug(l,e),a=Fg(a),l=Fg(l),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let k=B+x+a,R=B+_+l,E=Pg(s,s.VERTEX_SHADER,k),O=Pg(s,s.FRAGMENT_SHADER,R);s.attachShader(I,E),s.attachShader(I,O),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(W){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(I)||"",lt=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(O)||"",tt=st.trim(),dt=lt.trim(),mt=J.trim(),Tt=!0,gt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,E,O);else{let bt=Dg(s,E,"vertex"),St=Dg(s,O,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+tt+`
`+bt+`
`+St)}else tt!==""?ye("WebGLProgram: Program Info Log:",tt):(dt===""||mt==="")&&(gt=!1);gt&&(W.diagnostics={runnable:Tt,programLog:tt,vertexShader:{log:dt,prefix:x},fragmentShader:{log:mt,prefix:_}})}s.deleteShader(E),s.deleteShader(O),A=new Ca(s,I),F=KM(s,I)}let A;this.getUniforms=function(){return A===void 0&&G(this),A};let F;this.getAttributes=function(){return F===void 0&&G(this),F};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(I,VM)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=HM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=E,this.fragmentShader=O,this}var pb=0,bf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wf(t),e.set(t,n)),n}},wf=class{constructor(t){this.id=pb++,this.code=t,this.usedTimes=0}};function mb(i){return i===js||i===ol||i===ll}function gb(i,t,e,n,s,r){let a=new pa,l=new bf,h=new Set,u=[],d=new Map,v=n.logarithmicDepthBuffer,g=n.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return h.add(A),A===0?"uv":`uv${A}`}function I(A,F,H,W,st,lt){let J=W.fog,tt=st.geometry,dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Tt=t.get(A.envMap||dt,mt),gt=Tt&&Tt.mapping===el?Tt.image.height:null,bt=S[A.type];A.precision!==null&&(g=n.getMaxPrecision(A.precision),g!==A.precision&&ye("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));let St=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,qt=St!==void 0?St.length:0,Qt=0;tt.morphAttributes.position!==void 0&&(Qt=1),tt.morphAttributes.normal!==void 0&&(Qt=2),tt.morphAttributes.color!==void 0&&(Qt=3);let Ge,Ie,$e,xt;if(bt){let Je=ni[bt];Ge=Je.vertexShader,Ie=Je.fragmentShader}else{Ge=A.vertexShader,Ie=A.fragmentShader;let Je=l.getVertexShaderStage(A),We=l.getFragmentShaderStage(A);l.update(A,Je,We),$e=Je.id,xt=We.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Zt=st.isBatchedMesh===!0,_e=!!A.map,ne=!!A.matcap,nt=!!Tt,Ct=!!A.aoMap,V=!!A.lightMap,Rt=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,le=!!A.displacementMap,ue=!!A.emissiveMap,he=!!A.metalnessMap,we=!!A.roughnessMap,X=A.anisotropy>0,Ue=A.clearcoat>0,Pe=A.dispersion>0,U=A.retroreflectivity>0,w=A.iridescence>0,et=A.sheen>0,at=A.transmission>0,_t=X&&!!A.anisotropyMap,It=Ue&&!!A.clearcoatMap,kt=Ue&&!!A.clearcoatNormalMap,pt=Ue&&!!A.clearcoatRoughnessMap,ct=w&&!!A.iridescenceMap,Wt=w&&!!A.iridescenceThicknessMap,ce=et&&!!A.sheenColorMap,Yt=et&&!!A.sheenRoughnessMap,$t=!!A.specularMap,ae=!!A.specularColorMap,de=!!A.specularIntensityMap,Ee=at&&!!A.transmissionMap,j=at&&!!A.thicknessMap,Xt=!!A.gradientMap,yt=!!A.alphaMap,Vt=A.alphaTest>0,jt=!!A.alphaHash,Et=!!A.extensions,ie=Hi;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ie=i.toneMapping);let te={shaderID:bt,shaderType:A.type,shaderName:A.name,vertexShader:Ge,fragmentShader:Ie,defines:A.defines,customVertexShaderID:$e,customFragmentShaderID:xt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:_e,matcap:ne,envMap:nt,envMapMode:nt&&Tt.mapping,envMapCubeUVHeight:gt,aoMap:Ct,lightMap:V,bumpMap:Rt,normalMap:Bt,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:Bt&&A.normalMapType===ng,normalMapTangentSpace:Bt&&A.normalMapType===Zh,packedNormalMap:Bt&&A.normalMapType===Zh&&mb(A.normalMap.format),metalnessMap:he,roughnessMap:we,anisotropy:X,anisotropyMap:_t,clearcoat:Ue,clearcoatMap:It,clearcoatNormalMap:kt,clearcoatRoughnessMap:pt,dispersion:Pe,retroreflection:U,iridescence:w,iridescenceMap:ct,iridescenceThicknessMap:Wt,sheen:et,sheenColorMap:ce,sheenRoughnessMap:Yt,specularMap:$t,specularColorMap:ae,specularIntensityMap:de,transmission:at,transmissionMap:Ee,thicknessMap:j,gradientMap:Xt,opaque:A.transparent===!1&&A.blending===ba&&A.alphaToCoverage===!1,alphaMap:yt,alphaTest:Vt,alphaHash:jt,combine:A.combine,mapUv:_e&&M(A.map.channel),aoMapUv:Ct&&M(A.aoMap.channel),lightMapUv:V&&M(A.lightMap.channel),bumpMapUv:Rt&&M(A.bumpMap.channel),normalMapUv:Bt&&M(A.normalMap.channel),displacementMapUv:le&&M(A.displacementMap.channel),emissiveMapUv:ue&&M(A.emissiveMap.channel),metalnessMapUv:he&&M(A.metalnessMap.channel),roughnessMapUv:we&&M(A.roughnessMap.channel),anisotropyMapUv:_t&&M(A.anisotropyMap.channel),clearcoatMapUv:It&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:kt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&M(A.sheenRoughnessMap.channel),specularMapUv:$t&&M(A.specularMap.channel),specularColorMapUv:ae&&M(A.specularColorMap.channel),specularIntensityMapUv:de&&M(A.specularIntensityMap.channel),transmissionMapUv:Ee&&M(A.transmissionMap.channel),thicknessMapUv:j&&M(A.thicknessMap.channel),alphaMapUv:yt&&M(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Bt||X),vertexNormals:!!tt.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!tt.attributes.uv&&(_e||yt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||tt.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Qt,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:_e&&A.map.isVideoTexture===!0&&Ve.getTransfer(A.map.colorSpace)===en,decodeVideoTextureEmissive:ue&&A.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(A.emissiveMap.colorSpace)===en,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===is,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return te.vertexUv1s=h.has(1),te.vertexUv2s=h.has(2),te.vertexUv3s=h.has(3),h.clear(),te}function x(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let H in A.defines)F.push(H),F.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(_(F,A),B(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function _(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function B(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function k(A){let F=S[A.type],H;if(F){let W=ni[F];H=cl.clone(W.uniforms)}else H=A.uniforms;return H}function R(A,F){let H=d.get(F);return H!==void 0?++H.usedTimes:(H=new fb(i,F,A,s),u.push(H),d.set(F,H)),H}function E(A){if(--A.usedTimes===0){let F=u.indexOf(A);u[F]=u[u.length-1],u.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function G(){l.dispose()}return{getParameters:I,getProgramCacheKey:x,getUniforms:k,acquireProgram:R,releaseProgram:E,releaseShaderCache:O,programs:u,dispose:G}}function _b(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,h){i.get(a)[l]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function l(g,S,M,I,x,_){let B=i[t];return B===void 0?(B={id:g.id,object:g,geometry:S,material:M,materialVariant:a(g),groupOrder:I,renderOrder:g.renderOrder,z:x,group:_},i[t]=B):(B.id=g.id,B.object=g,B.geometry=S,B.material=M,B.materialVariant=a(g),B.groupOrder=I,B.renderOrder=g.renderOrder,B.z=x,B.group=_),t++,B}function h(g,S,M,I,x,_,B){B.reversedDepth===!0&&(x=-x);let k=l(g,S,M,I,x,_);M.transmission>0?n.push(k):M.transparent===!0?s.push(k):e.push(k)}function u(g,S,M,I,x,_){let B=l(g,S,M,I,x,_);M.transmission>0?n.unshift(B):M.transparent===!0?s.unshift(B):e.unshift(B)}function d(g,S){e.length>1&&e.sort(g||xb),n.length>1&&n.sort(S||Bg),s.length>1&&s.sort(S||Bg)}function v(){for(let g=t,S=i.length;g<S;g++){let M=i[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:v,sort:d}}function vb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new kg,i.set(n,[a])):s>=r.length?(a=new kg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new ve};break;case"SpotLight":e={position:new q,direction:new q,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function Sb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mb=0;function bb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wb(i){let t=new yb,e=Sb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new q);let s=new q,r=new He,a=new He;function l(u){let d=0,v=0,g=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let S=0,M=0,I=0,x=0,_=0,B=0,k=0,R=0,E=0,O=0,G=0,A=0,F=0,H=0;u.sort(bb);for(let st=0,lt=u.length;st<lt;st++){let J=u[st],tt=J.color,dt=J.intensity,mt=J.distance,Tt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===js?Tt=J.shadow.map.texture:Tt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)d+=tt.r*dt,v+=tt.g*dt,g+=tt.b*dt;else if(J.isLightProbe){for(let gt=0;gt<9;gt++)n.probe[gt].addScaledVector(J.sh.coefficients[gt],dt);H++}else if(J.isSunLight){let gt=t.get(J);if(gt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let bt=J.shadow,St=e.get(J);St.shadowIntensity=bt.intensity,St.shadowBias=bt.bias,St.shadowNormalBias=bt.normalBias,St.shadowRadius=bt.radius,St.shadowMapSize.copy(bt.mapSize).multiply(bt.getFrameExtents()),n.sunShadow[M]=St,n.sunShadowMap[M]=Tt;let qt=bt.getViewportCount();for(let Qt=0;Qt<qt;Qt++)n.sunShadowMatrix[I+Qt]=bt.getMatrix(Qt),n.sunShadowCascade[I+Qt]=bt._cascadeData[Qt];I+=qt,M++}n.sun[S]=gt,S++}else if(J.isDirectionalLight){let gt=t.get(J);if(gt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let bt=J.shadow,St=e.get(J);St.shadowIntensity=bt.intensity,St.shadowBias=bt.bias,St.shadowNormalBias=bt.normalBias,St.shadowRadius=bt.radius,St.shadowMapSize=bt.mapSize,n.directionalShadow[x]=St,n.directionalShadowMap[x]=Tt,n.directionalShadowMatrix[x]=J.shadow.matrix,E++}n.directional[x]=gt,x++}else if(J.isSpotLight){let gt=t.get(J);gt.position.setFromMatrixPosition(J.matrixWorld),gt.color.copy(tt).multiplyScalar(dt),gt.distance=mt,gt.coneCos=Math.cos(J.angle),gt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),gt.decay=J.decay,n.spot[B]=gt;let bt=J.shadow;if(J.map&&(n.spotLightMap[A]=J.map,A++,bt.updateMatrices(J),J.castShadow&&F++),n.spotLightMatrix[B]=bt.matrix,J.castShadow){let St=e.get(J);St.shadowIntensity=bt.intensity,St.shadowBias=bt.bias,St.shadowNormalBias=bt.normalBias,St.shadowRadius=bt.radius,St.shadowMapSize=bt.mapSize,n.spotShadow[B]=St,n.spotShadowMap[B]=Tt,G++}B++}else if(J.isRectAreaLight){let gt=t.get(J);gt.color.copy(tt).multiplyScalar(dt),gt.halfWidth.set(J.width*.5,0,0),gt.halfHeight.set(0,J.height*.5,0),n.rectArea[k]=gt,k++}else if(J.isPointLight){let gt=t.get(J);if(gt.color.copy(J.color).multiplyScalar(J.intensity),gt.distance=J.distance,gt.decay=J.decay,J.castShadow){let bt=J.shadow,St=e.get(J);St.shadowIntensity=bt.intensity,St.shadowBias=bt.bias,St.shadowNormalBias=bt.normalBias,St.shadowRadius=bt.radius,St.shadowMapSize=bt.mapSize,St.shadowCameraNear=bt.camera.near,St.shadowCameraFar=bt.camera.far,n.pointShadow[_]=St,n.pointShadowMap[_]=Tt,n.pointShadowMatrix[_]=J.shadow.matrix,O++}n.point[_]=gt,_++}else if(J.isHemisphereLight){let gt=t.get(J);gt.skyColor.copy(J.color).multiplyScalar(dt),gt.groundColor.copy(J.groundColor).multiplyScalar(dt),n.hemi[R]=gt,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=g;let W=n.hash;(W.sunLength!==S||W.directionalLength!==x||W.pointLength!==_||W.spotLength!==B||W.rectAreaLength!==k||W.hemiLength!==R||W.numSunShadows!==M||W.numDirectionalShadows!==E||W.numPointShadows!==O||W.numSpotShadows!==G||W.numSpotMaps!==A||W.numLightProbes!==H)&&(n.sun.length=S,n.directional.length=x,n.spot.length=B,n.rectArea.length=k,n.point.length=_,n.hemi.length=R,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=H,W.sunLength=S,W.directionalLength=x,W.pointLength=_,W.spotLength=B,W.rectAreaLength=k,W.hemiLength=R,W.numSunShadows=M,W.numDirectionalShadows=E,W.numPointShadows=O,W.numSpotShadows=G,W.numSpotMaps=A,W.numLightProbes=H,n.version=Mb++)}function h(u,d){let v=0,g=0,S=0,M=0,I=0,x=0,_=d.matrixWorldInverse;for(let B=0,k=u.length;B<k;B++){let R=u[B];if(R.isSunLight){let E=n.sun[v];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(_),v++}else if(R.isDirectionalLight){let E=n.directional[g];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(R.isSpotLight){let E=n.spot[M];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),M++}else if(R.isRectAreaLight){let E=n.rectArea[I];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(_),a.identity(),r.copy(R.matrixWorld),r.premultiply(_),a.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let E=n.point[S];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(_),x++}}}return{setup:l,setupView:h,state:n}}function zg(i){let t=new wb(i),e=[],n=[],s=[];function r(g){v.camera=g,e.length=0,n.length=0,s.length=0}function a(g){e.push(g)}function l(g){n.push(g)}function h(g){s.push(g)}function u(){t.setup(e)}function d(g){t.setupView(e,g)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:h}}function Eb(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new zg(i),t.set(s,[l])):r>=a.length?(l=new zg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
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
}`,Cb=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Rb=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],$g=new He,ul=new q,_f=new q;function Ib(i,t,e){let n=new ga,s=new zt,r=new zt,a=new nn,l=new Yc,h=new Jc,u={},d=e.maxTextureSize,v={[qs]:ei,[ei]:qs,[is]:is},g=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Tb,fragmentShader:Ab}),S=g.clone();S.defines.HORIZONTAL_PASS=1;let M=new vn;M.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Un(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let _=this.type;this.render=function(O,G,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===Dm&&(ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tl);let F=i.getRenderTarget(),H=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),st=i.state;st.setBlending(ss),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let lt=_!==this.type;lt&&G.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(tt=>tt.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,tt=O.length;J<tt;J++){let dt=O[J],mt=dt.shadow;if(mt===void 0){ye("WebGLShadowMap:",dt,"has no shadow.");continue}if(mt.autoUpdate===!1&&mt.needsUpdate===!1)continue;s.copy(mt.mapSize);let Tt=mt.getFrameExtents();s.multiply(Tt),r.copy(mt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Tt.x),s.x=r.x*Tt.x,mt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Tt.y),s.y=r.y*Tt.y,mt.mapSize.y=r.y));let gt=i.state.buffers.depth.getReversed();if(mt.camera._reversedDepth=gt,mt.map===null||lt===!0){if(mt.map!==null&&(mt.map.depthTexture!==null&&(mt.map.depthTexture.dispose(),mt.map.depthTexture=null),mt.map.dispose()),this.type===Ma){if(dt.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}mt.map=new hi(s.x,s.y,{format:js,type:Wi,minFilter:$n,magFilter:$n,generateMipmaps:!1}),mt.map.texture.name=dt.name+".shadowMap",mt.map.depthTexture=new Vs(s.x,s.y,Ti),mt.map.depthTexture.name=dt.name+".shadowMapDepth",mt.map.depthTexture.format=Qi,mt.map.depthTexture.compareFunction=null,mt.map.depthTexture.minFilter=Dn,mt.map.depthTexture.magFilter=Dn}else dt.isPointLight?(mt.map=new nu(s.x),mt.map.depthTexture=new zc(s.x,Gi)):(mt.map=new hi(s.x,s.y),mt.map.depthTexture=new Vs(s.x,s.y,Gi)),mt.map.depthTexture.name=dt.name+".shadowMap",mt.map.depthTexture.format=Qi,this.type===tl?(mt.map.depthTexture.compareFunction=gt?Kh:jh,mt.map.depthTexture.minFilter=$n,mt.map.depthTexture.magFilter=$n):(mt.map.depthTexture.compareFunction=null,mt.map.depthTexture.minFilter=Dn,mt.map.depthTexture.magFilter=Dn);mt.camera.updateProjectionMatrix()}mt.map.isWebGLCubeRenderTarget!==!0&&(mt.map.width!==s.x||mt.map.height!==s.y)&&mt.map.setSize(s.x,s.y);let bt=mt.map.isWebGLCubeRenderTarget?6:mt.getViewportCount();dt.isPointLight!==!0&&mt.updateMatrices(dt,A);for(let St=0;St<bt;St++){let qt=mt.getCamera(St);if(dt.isPointLight){let Qt=mt.camera,Ge=mt.matrix,Ie=dt.distance||Qt.far;Ie!==Qt.far&&(Qt.far=Ie,Qt.updateProjectionMatrix()),ul.setFromMatrixPosition(dt.matrixWorld),Qt.position.copy(ul),_f.copy(Qt.position),_f.add(Cb[St]),Qt.up.copy(Rb[St]),Qt.lookAt(_f),Qt.updateMatrixWorld(),Ge.makeTranslation(-ul.x,-ul.y,-ul.z),$g.multiplyMatrices(Qt.projectionMatrix,Qt.matrixWorldInverse),mt._frustum.setFromProjectionMatrix($g,Qt.coordinateSystem,Qt.reversedDepth)}if(mt.map.isWebGLCubeRenderTarget)i.setRenderTarget(mt.map,St),i.clear();else{St===0&&(i.setRenderTarget(mt.map),i.clear());let Qt=mt.getViewport(St);a.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),st.viewport(a)}n=mt.getFrustum(St),R(G,A,qt,dt,this.type)}mt.isPointLightShadow!==!0&&this.type===Ma&&B(mt,A),mt.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(F,H,W)};function B(O,G){let A=t.update(I);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null?O.mapPass=new hi(s.x,s.y,{format:js,type:Wi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value.set(O.map.width,O.map.height),g.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(G,null,A,g,I,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value.set(O.map.width,O.map.height),S.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(G,null,A,S,I,null)}function k(O,G,A,F){let H=null,W=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(W!==void 0)H=W;else if(H=A.isPointLight===!0?h:l,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let st=H.uuid,lt=G.uuid,J=u[st];J===void 0&&(J={},u[st]=J);let tt=J[lt];tt===void 0&&(tt=H.clone(),J[lt]=tt,G.addEventListener("dispose",E)),H=tt}if(H.visible=G.visible,H.wireframe=G.wireframe,F===Ma?H.side=G.shadowSide!==null?G.shadowSide:G.side:H.side=G.shadowSide!==null?G.shadowSide:v[G.side],H.alphaMap=G.alphaMap,H.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,H.map=G.map,H.clipShadows=G.clipShadows,H.clippingPlanes=G.clippingPlanes,H.clipIntersection=G.clipIntersection,H.displacementMap=G.displacementMap,H.displacementScale=G.displacementScale,H.displacementBias=G.displacementBias,H.wireframeLinewidth=G.wireframeLinewidth,H.linewidth=G.linewidth,A.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let st=i.properties.get(H);st.light=A}return H}function R(O,G,A,F,H){if(O.visible===!1)return;if(O.layers.test(G.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&H===Ma)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let lt=t.update(O),J=O.material;if(Array.isArray(J)){let tt=lt.groups;for(let dt=0,mt=tt.length;dt<mt;dt++){let Tt=tt[dt],gt=J[Tt.materialIndex];if(gt&&gt.visible){let bt=k(O,gt,F,H);O.onBeforeShadow(i,O,G,A,lt,bt,Tt),i.renderBufferDirect(A,null,lt,bt,O,Tt),O.onAfterShadow(i,O,G,A,lt,bt,Tt)}}}else if(J.visible){let tt=k(O,J,F,H);O.onBeforeShadow(i,O,G,A,lt,tt,null),i.renderBufferDirect(A,null,lt,tt,O,null),O.onAfterShadow(i,O,G,A,lt,tt,null)}}let st=O.children;for(let lt=0,J=st.length;lt<J;lt++)R(st[lt],G,A,F,H)}function E(O){O.target.removeEventListener("dispose",E);for(let A in u){let F=u[A],H=O.target.uuid;H in F&&(F[H].dispose(),delete F[H])}}}function Pb(i,t){function e(){let j=!1,Xt=new nn,yt=null,Vt=new nn(0,0,0,0);return{setMask:function(jt){yt!==jt&&!j&&(i.colorMask(jt,jt,jt,jt),yt=jt)},setLocked:function(jt){j=jt},setClear:function(jt,Et,ie,te,Je){Je===!0&&(jt*=te,Et*=te,ie*=te),Xt.set(jt,Et,ie,te),Vt.equals(Xt)===!1&&(i.clearColor(jt,Et,ie,te),Vt.copy(Xt))},reset:function(){j=!1,yt=null,Vt.set(-1,0,0,0)}}}function n(){let j=!1,Xt=!1,yt=null,Vt=null,jt=null;return{setReversed:function(Et){if(Xt!==Et){let ie=t.get("EXT_clip_control");Et?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Xt=Et;let te=jt;jt=null,this.setClear(te)}},getReversed:function(){return Xt},setTest:function(Et){Et?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Et){yt!==Et&&!j&&(i.depthMask(Et),yt=Et)},setFunc:function(Et){if(Xt&&(Et=fg[Et]),Vt!==Et){switch(Et){case Mc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case wc:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Vt=Et}},setLocked:function(Et){j=Et},setClear:function(Et){jt!==Et&&(jt=Et,Xt&&(Et=1-Et),i.clearDepth(Et))},reset:function(){j=!1,yt=null,Vt=null,jt=null,Xt=!1}}}function s(){let j=!1,Xt=null,yt=null,Vt=null,jt=null,Et=null,ie=null,te=null,Je=null;return{setTest:function(We){j||(We?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(We){Xt!==We&&!j&&(i.stencilMask(We),Xt=We)},setFunc:function(We,Bn,si){(yt!==We||Vt!==Bn||jt!==si)&&(i.stencilFunc(We,Bn,si),yt=We,Vt=Bn,jt=si)},setOp:function(We,Bn,si){(Et!==We||ie!==Bn||te!==si)&&(i.stencilOp(We,Bn,si),Et=We,ie=Bn,te=si)},setLocked:function(We){j=We},setClear:function(We){Je!==We&&(i.clearStencil(We),Je=We)},reset:function(){j=!1,Xt=null,yt=null,Vt=null,jt=null,Et=null,ie=null,te=null,Je=null}}}let r=new e,a=new n,l=new s,h=new WeakMap,u=new WeakMap,d={},v={},g={},S=new WeakMap,M=[],I=null,x=!1,_=null,B=null,k=null,R=null,E=null,O=null,G=null,A=new ve(0,0,0),F=0,H=!1,W=null,st=null,lt=null,J=null,tt=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),mt=!1,Tt=0,gt=i.getParameter(i.VERSION);gt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(gt)[1]),mt=Tt>=1):gt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),mt=Tt>=2);let bt=null,St={},qt=i.getParameter(i.SCISSOR_BOX),Qt=i.getParameter(i.VIEWPORT),Ge=new nn().fromArray(qt),Ie=new nn().fromArray(Qt);function $e(j,Xt,yt,Vt){let jt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(j,Et),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<yt;ie++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Xt,0,i.RGBA,1,1,Vt,0,i.RGBA,i.UNSIGNED_BYTE,jt):i.texImage2D(Xt+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,jt);return Et}let xt={};xt[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(ca),Rt(!1),Bt(Fd),vt(i.CULL_FACE),Ct(ss);function vt(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function Pt(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function oe(j,Xt){return g[j]!==Xt?(i.bindFramebuffer(j,Xt),g[j]=Xt,j===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Xt),j===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Xt),!0):!1}function Zt(j,Xt){let yt=M,Vt=!1;if(j){yt=S.get(Xt),yt===void 0&&(yt=[],S.set(Xt,yt));let jt=j.textures;if(yt.length!==jt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,ie=jt.length;Et<ie;Et++)yt[Et]=i.COLOR_ATTACHMENT0+Et;yt.length=jt.length,Vt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Vt=!0);Vt&&i.drawBuffers(yt)}function _e(j){return I!==j?(i.useProgram(j),I=j,!0):!1}let ne={[Tr]:i.FUNC_ADD,[Um]:i.FUNC_SUBTRACT,[Fm]:i.FUNC_REVERSE_SUBTRACT};ne[Om]=i.MIN,ne[Bm]=i.MAX;let nt={[km]:i.ZERO,[zm]:i.ONE,[$m]:i.SRC_COLOR,[zd]:i.SRC_ALPHA,[qm]:i.SRC_ALPHA_SATURATE,[Wm]:i.DST_COLOR,[Hm]:i.DST_ALPHA,[Vm]:i.ONE_MINUS_SRC_COLOR,[$d]:i.ONE_MINUS_SRC_ALPHA,[Xm]:i.ONE_MINUS_DST_COLOR,[Gm]:i.ONE_MINUS_DST_ALPHA,[Ym]:i.CONSTANT_COLOR,[Jm]:i.ONE_MINUS_CONSTANT_COLOR,[Zm]:i.CONSTANT_ALPHA,[jm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(j,Xt,yt,Vt,jt,Et,ie,te,Je,We){if(j===ss){x===!0&&(Pt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),j!==Nm){if(j!==_||We!==H){if((B!==Tr||E!==Tr)&&(i.blendEquation(i.FUNC_ADD),B=Tr,E=Tr),We)switch(j){case ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Od:i.blendFunc(i.ONE,i.ONE);break;case Bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",j);break}else switch(j){case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Od:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bd:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kd:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",j);break}k=null,R=null,O=null,G=null,A.set(0,0,0),F=0,_=j,H=We}return}jt=jt||Xt,Et=Et||yt,ie=ie||Vt,(Xt!==B||jt!==E)&&(i.blendEquationSeparate(ne[Xt],ne[jt]),B=Xt,E=jt),(yt!==k||Vt!==R||Et!==O||ie!==G)&&(i.blendFuncSeparate(nt[yt],nt[Vt],nt[Et],nt[ie]),k=yt,R=Vt,O=Et,G=ie),(te.equals(A)===!1||Je!==F)&&(i.blendColor(te.r,te.g,te.b,Je),A.copy(te),F=Je),_=j,H=!1}function V(j,Xt){j.side===is?Pt(i.CULL_FACE):vt(i.CULL_FACE);let yt=j.side===ei;Xt&&(yt=!yt),Rt(yt),j.blending===ba&&j.transparent===!1?Ct(ss):Ct(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);let Vt=j.stencilWrite;l.setTest(Vt),Vt&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ue(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(j){W!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),W=j)}function Bt(j){j!==Pm?(vt(i.CULL_FACE),j!==st&&(j===Fd?i.cullFace(i.BACK):j===Lm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),st=j}function le(j){j!==lt&&(mt&&i.lineWidth(j),lt=j)}function ue(j,Xt,yt){j?(vt(i.POLYGON_OFFSET_FILL),(J!==Xt||tt!==yt)&&(J=Xt,tt=yt,a.getReversed()&&(Xt=-Xt),i.polygonOffset(Xt,yt))):Pt(i.POLYGON_OFFSET_FILL)}function he(j){j?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function we(j){j===void 0&&(j=i.TEXTURE0+dt-1),bt!==j&&(i.activeTexture(j),bt=j)}function X(j,Xt,yt){yt===void 0&&(bt===null?yt=i.TEXTURE0+dt-1:yt=bt);let Vt=St[yt];Vt===void 0&&(Vt={type:void 0,texture:void 0},St[yt]=Vt),(Vt.type!==j||Vt.texture!==Xt)&&(bt!==yt&&(i.activeTexture(yt),bt=yt),i.bindTexture(j,Xt||xt[j]),Vt.type=j,Vt.texture=Xt)}function Ue(){let j=St[bt];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(j){be("WebGLState:",j)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(j){be("WebGLState:",j)}}function w(){try{i.texSubImage2D(...arguments)}catch(j){be("WebGLState:",j)}}function et(){try{i.texSubImage3D(...arguments)}catch(j){be("WebGLState:",j)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(j){be("WebGLState:",j)}}function _t(){try{i.compressedTexSubImage3D(...arguments)}catch(j){be("WebGLState:",j)}}function It(){try{i.texStorage2D(...arguments)}catch(j){be("WebGLState:",j)}}function kt(){try{i.texStorage3D(...arguments)}catch(j){be("WebGLState:",j)}}function pt(){try{i.texImage2D(...arguments)}catch(j){be("WebGLState:",j)}}function ct(){try{i.texImage3D(...arguments)}catch(j){be("WebGLState:",j)}}function Wt(j){return v[j]!==void 0?v[j]:i.getParameter(j)}function ce(j,Xt){v[j]!==Xt&&(i.pixelStorei(j,Xt),v[j]=Xt)}function Yt(j){Ge.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Ge.copy(j))}function $t(j){Ie.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Ie.copy(j))}function ae(j,Xt){let yt=u.get(Xt);yt===void 0&&(yt=new WeakMap,u.set(Xt,yt));let Vt=yt.get(j);Vt===void 0&&(Vt=i.getUniformBlockIndex(Xt,j.name),yt.set(j,Vt))}function de(j,Xt){let Vt=u.get(Xt).get(j);h.get(Xt)!==Vt&&(i.uniformBlockBinding(Xt,Vt,j.__bindingPointIndex),h.set(Xt,Vt))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},bt=null,St={},g={},S=new WeakMap,M=[],I=null,x=!1,_=null,B=null,k=null,R=null,E=null,O=null,G=null,A=new ve(0,0,0),F=0,H=!1,W=null,st=null,lt=null,J=null,tt=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Pt,bindFramebuffer:oe,drawBuffers:Zt,useProgram:_e,setBlending:Ct,setMaterial:V,setFlipSided:Rt,setCullFace:Bt,setLineWidth:le,setPolygonOffset:ue,setScissorTest:he,activeTexture:we,bindTexture:X,unbindTexture:Ue,compressedTexImage2D:Pe,compressedTexImage3D:U,texImage2D:pt,texImage3D:ct,pixelStorei:ce,getParameter:Wt,updateUBOMapping:ae,uniformBlockBinding:de,texStorage2D:It,texStorage3D:kt,texSubImage2D:w,texSubImage3D:et,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:Yt,viewport:$t,reset:Ee}}function Lb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,d=new WeakMap,v=new Set,g,S=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,w){return M?new OffscreenCanvas(U,w):Mo("canvas")}function x(U,w,et){let at=1,_t=Pe(U);if((_t.width>et||_t.height>et)&&(at=et/Math.max(_t.width,_t.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let It=Math.floor(at*_t.width),kt=Math.floor(at*_t.height);g===void 0&&(g=I(It,kt));let pt=w?I(It,kt):g;return pt.width=It,pt.height=kt,pt.getContext("2d").drawImage(U,0,0,It,kt),ye("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+It+"x"+kt+")."),pt}else return"data"in U&&ye("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),U;return U}function _(U){return U.generateMipmaps}function B(U){i.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(U,w,et,at,_t,It=!1){if(U!==null){if(i[U]!==void 0)return i[U];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let kt;at&&(kt=t.get("EXT_texture_norm16"),kt||ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=w;if(w===i.RED&&(et===i.FLOAT&&(pt=i.R32F),et===i.HALF_FLOAT&&(pt=i.R16F),et===i.UNSIGNED_BYTE&&(pt=i.R8),et===i.UNSIGNED_SHORT&&kt&&(pt=kt.R16_EXT),et===i.SHORT&&kt&&(pt=kt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.R8UI),et===i.UNSIGNED_SHORT&&(pt=i.R16UI),et===i.UNSIGNED_INT&&(pt=i.R32UI),et===i.BYTE&&(pt=i.R8I),et===i.SHORT&&(pt=i.R16I),et===i.INT&&(pt=i.R32I)),w===i.RG&&(et===i.FLOAT&&(pt=i.RG32F),et===i.HALF_FLOAT&&(pt=i.RG16F),et===i.UNSIGNED_BYTE&&(pt=i.RG8),et===i.UNSIGNED_SHORT&&kt&&(pt=kt.RG16_EXT),et===i.SHORT&&kt&&(pt=kt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RG8UI),et===i.UNSIGNED_SHORT&&(pt=i.RG16UI),et===i.UNSIGNED_INT&&(pt=i.RG32UI),et===i.BYTE&&(pt=i.RG8I),et===i.SHORT&&(pt=i.RG16I),et===i.INT&&(pt=i.RG32I)),w===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),et===i.UNSIGNED_INT&&(pt=i.RGB32UI),et===i.BYTE&&(pt=i.RGB8I),et===i.SHORT&&(pt=i.RGB16I),et===i.INT&&(pt=i.RGB32I)),w===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),et===i.UNSIGNED_INT&&(pt=i.RGBA32UI),et===i.BYTE&&(pt=i.RGBA8I),et===i.SHORT&&(pt=i.RGBA16I),et===i.INT&&(pt=i.RGBA32I)),w===i.RGB&&(et===i.UNSIGNED_SHORT&&kt&&(pt=kt.RGB16_EXT),et===i.SHORT&&kt&&(pt=kt.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),w===i.RGBA){let ct=It?So:Ve.getTransfer(_t);et===i.FLOAT&&(pt=i.RGBA32F),et===i.HALF_FLOAT&&(pt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(pt=ct===en?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&kt&&(pt=kt.RGBA16_EXT),et===i.SHORT&&kt&&(pt=kt.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function E(U,w){let et;return U?w===null||w===Gi||w===Ea?et=i.DEPTH24_STENCIL8:w===Ti?et=i.DEPTH32F_STENCIL8:w===wa&&(et=i.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===Ea?et=i.DEPTH_COMPONENT24:w===Ti?et=i.DEPTH_COMPONENT32F:w===wa&&(et=i.DEPTH_COMPONENT16),et}function O(U,w){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==$n?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function G(U){let w=U.target;w.removeEventListener("dispose",G),F(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&v.delete(w)}function A(U){let w=U.target;w.removeEventListener("dispose",A),W(w)}function F(U){let w=n.get(U);if(w.__webglInit===void 0)return;let et=U.source,at=S.get(et);if(at){let _t=at[w.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&H(U),Object.keys(at).length===0&&S.delete(et)}n.remove(U)}function H(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let et=U.source,at=S.get(et);delete at[w.__cacheKey],a.memory.textures--}function W(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(w.__webglFramebuffer[at]))for(let _t=0;_t<w.__webglFramebuffer[at].length;_t++)i.deleteFramebuffer(w.__webglFramebuffer[at][_t]);else i.deleteFramebuffer(w.__webglFramebuffer[at]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[at])}else{if(Array.isArray(w.__webglFramebuffer))for(let at=0;at<w.__webglFramebuffer.length;at++)i.deleteFramebuffer(w.__webglFramebuffer[at]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let at=0;at<w.__webglColorRenderbuffer.length;at++)w.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[at]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let et=U.textures;for(let at=0,_t=et.length;at<_t;at++){let It=n.get(et[at]);It.__webglTexture&&(i.deleteTexture(It.__webglTexture),a.memory.textures--),n.remove(et[at])}n.remove(U)}let st=0;function lt(){st=0}function J(){return st}function tt(U){st=U}function dt(){let U=st;return U>=s.maxTextures&&ye("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,U}function mt(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function Tt(U,w){let et=n.get(U);if(U.isVideoTexture&&X(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){let at=U.image;if(at===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(et,U,w);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+w)}function gt(U,w){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Pt(et,U,w);return}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+w)}function bt(U,w){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Pt(et,U,w);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+w)}function St(U,w){let et=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&et.__version!==U.version){oe(et,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+w)}let qt={[Rc]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[Ic]:i.MIRRORED_REPEAT},Qt={[Dn]:i.NEAREST,[tg]:i.NEAREST_MIPMAP_NEAREST,[nl]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[dh]:i.LINEAR_MIPMAP_NEAREST,[Js]:i.LINEAR_MIPMAP_LINEAR},Ge={[sg]:i.NEVER,[cg]:i.ALWAYS,[rg]:i.LESS,[jh]:i.LEQUAL,[ag]:i.EQUAL,[Kh]:i.GEQUAL,[og]:i.GREATER,[lg]:i.NOTEQUAL};function Ie(U,w){if(w.type===Ti&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===$n||w.magFilter===dh||w.magFilter===nl||w.magFilter===Js||w.minFilter===$n||w.minFilter===dh||w.minFilter===nl||w.minFilter===Js)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,qt[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,qt[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,qt[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Qt[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Qt[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dn||w.minFilter!==nl&&w.minFilter!==Js||w.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $e(U,w){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",G));let at=w.source,_t=S.get(at);_t===void 0&&(_t={},S.set(at,_t));let It=mt(w);if(It!==U.__cacheKey){_t[It]===void 0&&(_t[It]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),_t[It].usedTimes++;let kt=_t[U.__cacheKey];kt!==void 0&&(_t[U.__cacheKey].usedTimes--,kt.usedTimes===0&&H(w)),U.__cacheKey=It,U.__webglTexture=_t[It].texture}return et}function xt(U,w,et){return Math.floor(Math.floor(U/et)/w)}function vt(U,w,et,at){let It=U.updateRanges;if(It.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,et,at,w.data);else{It.sort((ce,Yt)=>ce.start-Yt.start);let kt=0;for(let ce=1;ce<It.length;ce++){let Yt=It[kt],$t=It[ce],ae=Yt.start+Yt.count,de=xt($t.start,w.width,4),Ee=xt(Yt.start,w.width,4);$t.start<=ae+1&&de===Ee&&xt($t.start+$t.count-1,w.width,4)===de?Yt.count=Math.max(Yt.count,$t.start+$t.count-Yt.start):(++kt,It[kt]=$t)}It.length=kt+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),Wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ce=0,Yt=It.length;ce<Yt;ce++){let $t=It[ce],ae=Math.floor($t.start/4),de=Math.ceil($t.count/4),Ee=ae%w.width,j=Math.floor(ae/w.width),Xt=de,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,Ee,j,Xt,yt,et,at,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,Wt)}}function Pt(U,w,et){let at=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=i.TEXTURE_3D);let _t=$e(U,w),It=w.source;e.bindTexture(at,U.__webglTexture,i.TEXTURE0+et);let kt=n.get(It);if(It.version!==kt.__version||_t===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let yt=Ve.getPrimaries(Ve.workingColorSpace),Vt=w.colorSpace===Ts?null:Ve.getPrimaries(w.colorSpace),jt=w.colorSpace===Ts||yt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ct=x(w.image,!1,s.maxTextureSize);ct=Ue(w,ct);let Wt=r.convert(w.format,w.colorSpace),ce=r.convert(w.type),Yt=R(w.internalFormat,Wt,ce,w.normalized,w.colorSpace,w.isVideoTexture);Ie(at,w);let $t,ae=w.mipmaps,de=w.isVideoTexture!==!0,Ee=kt.__version===void 0||_t===!0,j=It.dataReady,Xt=O(w,ct);if(w.isDepthTexture)Yt=E(w.format===Zs,w.type),Ee&&(de?e.texStorage2D(i.TEXTURE_2D,1,Yt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Yt,ct.width,ct.height,0,Wt,ce,null));else if(w.isDataTexture)if(ae.length>0){de&&Ee&&e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ae[0].width,ae[0].height);for(let yt=0,Vt=ae.length;yt<Vt;yt++)$t=ae[yt],de?j&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,$t.width,$t.height,Wt,ce,$t.data):e.texImage2D(i.TEXTURE_2D,yt,Yt,$t.width,$t.height,0,Wt,ce,$t.data);w.generateMipmaps=!1}else de?(Ee&&e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ct.width,ct.height),j&&vt(w,ct,Wt,ce)):e.texImage2D(i.TEXTURE_2D,0,Yt,ct.width,ct.height,0,Wt,ce,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){de&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Yt,ae[0].width,ae[0].height,ct.depth);for(let yt=0,Vt=ae.length;yt<Vt;yt++)if($t=ae[yt],w.format!==Ai)if(Wt!==null)if(de){if(j)if(w.layerUpdates.size>0){let jt=uf($t.width,$t.height,w.format,w.type);for(let Et of w.layerUpdates){let ie=$t.data.subarray(Et*jt/$t.data.BYTES_PER_ELEMENT,(Et+1)*jt/$t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Et,$t.width,$t.height,1,Wt,ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,$t.width,$t.height,ct.depth,Wt,$t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Yt,$t.width,$t.height,ct.depth,0,$t.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,$t.width,$t.height,ct.depth,Wt,ce,$t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,Yt,$t.width,$t.height,ct.depth,0,Wt,ce,$t.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{de&&Ee&&e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ae[0].width,ae[0].height);for(let yt=0,Vt=ae.length;yt<Vt;yt++)$t=ae[yt],w.format!==Ai?Wt!==null?de?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,$t.width,$t.height,Wt,$t.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,Yt,$t.width,$t.height,0,$t.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?j&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,$t.width,$t.height,Wt,ce,$t.data):e.texImage2D(i.TEXTURE_2D,yt,Yt,$t.width,$t.height,0,Wt,ce,$t.data)}else if(w.isDataArrayTexture)if(de){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Yt,ct.width,ct.height,ct.depth),j)if(w.layerUpdates.size>0){let yt=uf(ct.width,ct.height,w.format,w.type);for(let Vt of w.layerUpdates){let jt=ct.data.subarray(Vt*yt/ct.data.BYTES_PER_ELEMENT,(Vt+1)*yt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Vt,ct.width,ct.height,1,Wt,ce,jt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Wt,ce,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,ct.width,ct.height,ct.depth,0,Wt,ce,ct.data);else if(w.isData3DTexture)de?(Ee&&e.texStorage3D(i.TEXTURE_3D,Xt,Yt,ct.width,ct.height,ct.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Wt,ce,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,ct.width,ct.height,ct.depth,0,Wt,ce,ct.data);else if(w.isFramebufferTexture){if(Ee)if(de)e.texStorage2D(i.TEXTURE_2D,Xt,Yt,ct.width,ct.height);else{let yt=ct.width,Vt=ct.height;for(let jt=0;jt<Xt;jt++)e.texImage2D(i.TEXTURE_2D,jt,Yt,yt,Vt,0,Wt,ce,null),yt>>=1,Vt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),ct.parentNode!==yt){yt.appendChild(ct),v.add(w),yt.onpaint=Vt=>{let jt=Vt.changedElements;for(let Et of v)jt.includes(Et.image)&&(Et.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let jt=i.RGBA,Et=i.RGBA,ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,jt,Et,ie,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(de&&Ee){let yt=Pe(ae[0]);e.texStorage2D(i.TEXTURE_2D,Xt,Yt,yt.width,yt.height)}for(let yt=0,Vt=ae.length;yt<Vt;yt++)$t=ae[yt],de?j&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Wt,ce,$t):e.texImage2D(i.TEXTURE_2D,yt,Yt,Wt,ce,$t);w.generateMipmaps=!1}else if(de){if(Ee){let yt=Pe(ct);e.texStorage2D(i.TEXTURE_2D,Xt,Yt,yt.width,yt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,ce,ct)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Wt,ce,ct);_(w)&&B(at),kt.__version=It.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function oe(U,w,et){if(w.image.length!==6)return;let at=$e(U,w),_t=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+et);let It=n.get(_t);if(_t.version!==It.__version||at===!0){e.activeTexture(i.TEXTURE0+et);let kt=Ve.getPrimaries(Ve.workingColorSpace),pt=w.colorSpace===Ts?null:Ve.getPrimaries(w.colorSpace),ct=w.colorSpace===Ts||kt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Wt=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let Et=0;Et<6;Et++)!Wt&&!ce?Yt[Et]=x(w.image[Et],!0,s.maxCubemapSize):Yt[Et]=ce?w.image[Et].image:w.image[Et],Yt[Et]=Ue(w,Yt[Et]);let $t=Yt[0],ae=r.convert(w.format,w.colorSpace),de=r.convert(w.type),Ee=R(w.internalFormat,ae,de,w.normalized,w.colorSpace),j=w.isVideoTexture!==!0,Xt=It.__version===void 0||at===!0,yt=_t.dataReady,Vt=O(w,$t);Ie(i.TEXTURE_CUBE_MAP,w);let jt;if(Wt){j&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Ee,$t.width,$t.height);for(let Et=0;Et<6;Et++){jt=Yt[Et].mipmaps;for(let ie=0;ie<jt.length;ie++){let te=jt[ie];w.format!==Ai?ae!==null?j?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie,0,0,te.width,te.height,ae,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie,Ee,te.width,te.height,0,te.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie,0,0,te.width,te.height,ae,de,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie,Ee,te.width,te.height,0,ae,de,te.data)}}}else{if(jt=w.mipmaps,j&&Xt){jt.length>0&&Vt++;let Et=Pe(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Ee,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(ce){j?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Yt[Et].width,Yt[Et].height,ae,de,Yt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ee,Yt[Et].width,Yt[Et].height,0,ae,de,Yt[Et].data);for(let ie=0;ie<jt.length;ie++){let Je=jt[ie].image[Et].image;j?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie+1,0,0,Je.width,Je.height,ae,de,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie+1,Ee,Je.width,Je.height,0,ae,de,Je.data)}}else{j?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,de,Yt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ee,ae,de,Yt[Et]);for(let ie=0;ie<jt.length;ie++){let te=jt[ie];j?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie+1,0,0,ae,de,te.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ie+1,Ee,ae,de,te.image[Et])}}}_(w)&&B(i.TEXTURE_CUBE_MAP),It.__version=_t.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Zt(U,w,et,at,_t,It){let kt=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),ct=R(et.internalFormat,kt,pt,et.normalized,et.colorSpace),Wt=n.get(w),ce=n.get(et);if(ce.__renderTarget=w,!Wt.__hasExternalTextures){let Yt=Math.max(1,w.width>>It),$t=Math.max(1,w.height>>It);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,It,ct,Yt,$t,w.depth,0,kt,pt,null):e.texImage2D(_t,It,ct,Yt,$t,0,kt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,_t,ce.__webglTexture,0,he(w)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,_t,ce.__webglTexture,It),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(U,w,et){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let at=w.depthTexture,_t=at&&at.isDepthTexture?at.type:null,It=E(w.stencilBuffer,_t),kt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(w),It,w.width,w.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(w),It,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,It,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,U)}else{let at=w.textures;for(let _t=0;_t<at.length;_t++){let It=at[_t],kt=r.convert(It.format,It.colorSpace),pt=r.convert(It.type),ct=R(It.internalFormat,kt,pt,It.normalized,It.colorSpace);we(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(w),ct,w.width,w.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(w),ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ct,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(U,w,et){let at=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _t=n.get(w.depthTexture);if(_t.__renderTarget=w,(!_t.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),at){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,w.depthTexture.addEventListener("dispose",G)),_t.__webglTexture===void 0){_t.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w.depthTexture);let Wt=r.convert(w.depthTexture.format),ce=r.convert(w.depthTexture.type),Yt;w.depthTexture.format===Qi?Yt=i.DEPTH_COMPONENT24:w.depthTexture.format===Zs&&(Yt=i.DEPTH24_STENCIL8);for(let $t=0;$t<6;$t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Yt,w.width,w.height,0,Wt,ce,null)}}else Tt(w.depthTexture,0);let It=_t.__webglTexture,kt=he(w),pt=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,ct=w.depthTexture.format===Zs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Qi)we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,It,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,It,0);else if(w.depthTexture.format===Zs)we(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,It,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let w=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let at=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),at){let _t=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,at.removeEventListener("dispose",_t)};at.addEventListener("dispose",_t),w.__depthDisposeCallback=_t}w.__boundDepthTexture=at}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(et)for(let at=0;at<6;at++)ne(w.__webglFramebuffer[at],U,at);else{let at=U.texture.mipmaps;at&&at.length>0?ne(w.__webglFramebuffer[0],U,0):ne(w.__webglFramebuffer,U,0)}else if(et){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]===void 0)w.__webglDepthbuffer[at]=i.createRenderbuffer(),_e(w.__webglDepthbuffer[at],U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=w.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,It)}}else{let at=U.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),_e(w.__webglDepthbuffer,U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,It)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(U,w,et){let at=n.get(U);w!==void 0&&Zt(at.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&nt(U)}function V(U){let w=U.texture,et=n.get(U),at=n.get(w);U.addEventListener("dispose",A);let _t=U.textures,It=U.isWebGLCubeRenderTarget===!0,kt=_t.length>1;if(kt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=w.version,a.memory.textures++),It){et.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){et.__webglFramebuffer[pt]=[];for(let ct=0;ct<w.mipmaps.length;ct++)et.__webglFramebuffer[pt][ct]=i.createFramebuffer()}else et.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){et.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)et.__webglFramebuffer[pt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(kt)for(let pt=0,ct=_t.length;pt<ct;pt++){let Wt=n.get(_t[pt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&we(U)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let pt=0;pt<_t.length;pt++){let ct=_t[pt];et.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[pt]);let Wt=r.convert(ct.format,ct.colorSpace),ce=r.convert(ct.type),Yt=R(ct.internalFormat,Wt,ce,ct.normalized,ct.colorSpace,U.isXRRenderTarget===!0),$t=he(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Yt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,et.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(It){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let ct=0;ct<w.mipmaps.length;ct++)Zt(et.__webglFramebuffer[pt][ct],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ct);else Zt(et.__webglFramebuffer[pt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(w)&&B(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let pt=0,ct=_t.length;pt<ct;pt++){let Wt=_t[pt],ce=n.get(Wt),Yt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Yt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Yt,ce.__webglTexture),Ie(Yt,Wt),Zt(et.__webglFramebuffer,U,Wt,i.COLOR_ATTACHMENT0+pt,Yt,0),_(Wt)&&B(Yt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),Ie(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let ct=0;ct<w.mipmaps.length;ct++)Zt(et.__webglFramebuffer[ct],U,w,i.COLOR_ATTACHMENT0,pt,ct);else Zt(et.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,pt,0);_(w)&&B(pt),e.unbindTexture()}U.depthBuffer&&nt(U)}function Rt(U){let w=U.textures;for(let et=0,at=w.length;et<at;et++){let _t=w[et];if(_(_t)){let It=k(U),kt=n.get(_t).__webglTexture;e.bindTexture(It,kt),B(It),e.unbindTexture()}}}let Bt=[],le=[];function ue(U){if(U.samples>0){if(we(U)===!1){let w=U.textures,et=U.width,at=U.height,_t=i.COLOR_BUFFER_BIT,It=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(U),pt=w.length>1;if(pt)for(let Wt=0;Wt<w.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let ct=U.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Wt=0;Wt<w.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Wt]);let ce=n.get(w[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,et,at,0,0,et,at,_t,i.NEAREST),h===!0&&(Bt.length=0,le.length=0,Bt.push(i.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Bt.push(It),le.push(It),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Wt=0;Wt<w.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Wt]);let ce=n.get(w[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function he(U){return Math.min(s.maxSamples,U.samples)}function we(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(U){let w=a.render.frame;d.get(U)!==w&&(d.set(U,w),U.update())}function Ue(U,w){let et=U.colorSpace,at=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==yo&&et!==Ts&&(Ve.getTransfer(et)===en?(at!==Ai||_t!==di)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",et)),w}function Pe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=dt,this.resetTextureUnits=lt,this.getTextureUnits=J,this.setTextureUnits=tt,this.setTexture2D=Tt,this.setTexture2DArray=gt,this.setTexture3D=bt,this.setTextureCube=St,this.rebindTextures=Ct,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Db(i,t){function e(n,s=Ts){let r,a=Ve.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===ph)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zd)return i.BYTE;if(n===jd)return i.SHORT;if(n===wa)return i.UNSIGNED_SHORT;if(n===fh)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===ef)return i.RGB;if(n===Ai)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===gh)return i.RED;if(n===_h)return i.RED_INTEGER;if(n===js)return i.RG;if(n===xh)return i.RG_INTEGER;if(n===vh)return i.RGBA_INTEGER;if(n===il||n===sl||n===rl||n===al)if(a===en)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yh||n===Sh||n===Mh||n===bh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wh||n===Eh||n===Th||n===Ah||n===Ch||n===ol||n===Rh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wh||n===Eh)return a===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Th)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ah)return r.COMPRESSED_R11_EAC;if(n===Ch)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ol)return r.COMPRESSED_RG11_EAC;if(n===Rh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ih||n===Ph||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===$h||n===Vh||n===Hh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ih)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ph)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$h)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gh||n===Wh||n===Xh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gh)return a===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===Yh||n===ll||n===Jh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ea?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ub=`
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

}`,Ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Do(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:Nb,fragmentShader:Ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new Ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tf=class extends ts{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",h=1,u=null,d=null,v=null,g=null,S=null,M=null,I=typeof XRWebGLBinding<"u",x=new Ef,_={},B=e.getContextAttributes(),k=null,R=null,E=[],O=[],G=new zt,A=null,F=null,H=new Yn;H.viewport=new nn;let W=new Yn;W.viewport=new nn;let st=[H,W],lt=new lh,J=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xt){let vt=E[xt];return vt===void 0&&(vt=new ma,E[xt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(xt){let vt=E[xt];return vt===void 0&&(vt=new ma,E[xt]=vt),vt.getGripSpace()},this.getHand=function(xt){let vt=E[xt];return vt===void 0&&(vt=new ma,E[xt]=vt),vt.getHandSpace()};function dt(xt){let vt=O.indexOf(xt.inputSource);if(vt===-1)return;let Pt=E[vt];Pt!==void 0&&(Pt.update(xt.inputSource,xt.frame,u||a),Pt.dispatchEvent({type:xt.type,data:xt.inputSource}))}function mt(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",mt),s.removeEventListener("inputsourceschange",Tt);for(let xt=0;xt<E.length;xt++){let vt=O[xt];vt!==null&&(O[xt]=null,E[xt].disconnect(vt))}J=null,tt=null,x.reset();for(let xt in _)delete _[xt];if(t.setRenderTarget(k),S=null,g=null,v=null,s=null,R=null,$e.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(G.width,G.height,!1),F!==null){let xt=F.camera;xt.fov=F.fov,xt.zoom=F.zoom,xt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xt){r=xt,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xt){l=xt,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(xt){u=xt},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(xt){if(s=xt,s!==null){if(k=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",mt),s.addEventListener("inputsourceschange",Tt),B.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,oe=null,Zt=null;B.depth&&(Zt=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=B.stencil?Zs:Qi,oe=B.stencil?Ea:Gi);let _e={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:r};v=this.getBinding(),g=v.createProjectionLayer(_e),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new hi(g.textureWidth,g.textureHeight,{format:Ai,type:di,depthTexture:new Vs(g.textureWidth,g.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Pt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r};S=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new hi(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:di,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await s.requestReferenceSpace(l),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Tt(xt){for(let vt=0;vt<xt.removed.length;vt++){let Pt=xt.removed[vt],oe=O.indexOf(Pt);oe>=0&&(O[oe]=null,E[oe].disconnect(Pt))}for(let vt=0;vt<xt.added.length;vt++){let Pt=xt.added[vt],oe=O.indexOf(Pt);if(oe===-1){for(let _e=0;_e<E.length;_e++)if(_e>=O.length){O.push(Pt),oe=_e;break}else if(O[_e]===null){O[_e]=Pt,oe=_e;break}if(oe===-1)break}let Zt=E[oe];Zt&&Zt.connect(Pt)}}let gt=new q,bt=new q;function St(xt,vt,Pt){gt.setFromMatrixPosition(vt.matrixWorld),bt.setFromMatrixPosition(Pt.matrixWorld);let oe=gt.distanceTo(bt),Zt=vt.projectionMatrix.elements,_e=Pt.projectionMatrix.elements,ne=Zt[14]/(Zt[10]-1),nt=Zt[14]/(Zt[10]+1),Ct=(Zt[9]+1)/Zt[5],V=(Zt[9]-1)/Zt[5],Rt=(Zt[8]-1)/Zt[0],Bt=(_e[8]+1)/_e[0],le=ne*Rt,ue=ne*Bt,he=oe/(-Rt+Bt),we=he*-Rt;if(vt.matrixWorld.decompose(xt.position,xt.quaternion,xt.scale),xt.translateX(we),xt.translateZ(he),xt.matrixWorld.compose(xt.position,xt.quaternion,xt.scale),xt.matrixWorldInverse.copy(xt.matrixWorld).invert(),Zt[10]===-1)xt.projectionMatrix.copy(vt.projectionMatrix),xt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let X=ne+he,Ue=nt+he,Pe=le-we,U=ue+(oe-we),w=Ct*nt/Ue*X,et=V*nt/Ue*X;xt.projectionMatrix.makePerspective(Pe,U,w,et,X,Ue),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert()}}function qt(xt,vt){vt===null?xt.matrixWorld.copy(xt.matrix):xt.matrixWorld.multiplyMatrices(vt.matrixWorld,xt.matrix),xt.matrixWorldInverse.copy(xt.matrixWorld).invert()}this.updateCamera=function(xt){if(s===null)return;let vt=xt.near,Pt=xt.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),lt.near=W.near=H.near=vt,lt.far=W.far=H.far=Pt,(J!==lt.near||tt!==lt.far)&&(s.updateRenderState({depthNear:lt.near,depthFar:lt.far}),J=lt.near,tt=lt.far),lt.layers.mask=xt.layers.mask|6,H.layers.mask=lt.layers.mask&-5,W.layers.mask=lt.layers.mask&-3;let oe=xt.parent,Zt=lt.cameras;qt(lt,oe);for(let _e=0;_e<Zt.length;_e++)qt(Zt[_e],oe);Zt.length===2?St(lt,H,W):lt.projectionMatrix.copy(H.projectionMatrix),F===null&&xt.isPerspectiveCamera&&(F={camera:xt,fov:xt.fov,zoom:xt.zoom}),Qt(xt,lt,oe)};function Qt(xt,vt,Pt){Pt===null?xt.matrix.copy(vt.matrixWorld):(xt.matrix.copy(Pt.matrixWorld),xt.matrix.invert(),xt.matrix.multiply(vt.matrixWorld)),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.updateMatrixWorld(!0),xt.projectionMatrix.copy(vt.projectionMatrix),xt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),xt.isPerspectiveCamera&&(xt.fov=da*2*Math.atan(1/xt.projectionMatrix.elements[5]),xt.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(xt){h=xt,g!==null&&(g.fixedFoveation=xt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=xt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(lt)},this.getCameraTexture=function(xt){return _[xt]};let Ge=null;function Ie(xt,vt){if(d=vt.getViewerPose(u||a),M=vt,d!==null){let Pt=d.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let oe=!1;Pt.length!==lt.cameras.length&&(lt.cameras.length=0,oe=!0);for(let nt=0;nt<Pt.length;nt++){let Ct=Pt[nt],V=null;if(S!==null)V=S.getViewport(Ct);else{let Bt=v.getViewSubImage(g,Ct);V=Bt.viewport,nt===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Rt=st[nt];Rt===void 0&&(Rt=new Yn,Rt.layers.enable(nt),Rt.viewport=new nn,st[nt]=Rt),Rt.matrix.fromArray(Ct.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ct.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(V.x,V.y,V.width,V.height),nt===0&&(lt.matrix.copy(Rt.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),oe===!0&&lt.cameras.push(Rt)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let nt=v.getDepthInformation(Pt[0]);nt&&nt.isValid&&nt.texture&&x.init(nt,s.renderState)}if(Zt&&Zt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let nt=0;nt<Pt.length;nt++){let Ct=Pt[nt].camera;if(Ct){let V=_[Ct];V||(V=new Do,_[Ct]=V);let Rt=v.getCameraImage(Ct);V.sourceTexture=Rt}}}}for(let Pt=0;Pt<E.length;Pt++){let oe=O[Pt],Zt=E[Pt];oe!==null&&Zt!==void 0&&Zt.update(oe,vt,u||a)}Ge&&Ge(xt,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),M=null}let $e=new Vg;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(xt){Ge=xt},this.dispose=function(){}}},Fb=new He,Yg=new Ce;Yg.set(-1,0,0,0,1,0,0,0,1);function Ob(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,lf(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,B,k,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),v(x,_)):_.isMeshPhongMaterial?(r(x,_),d(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),g(x,_),_.isMeshPhysicalMaterial&&S(x,_,R)):_.isMeshMatcapMaterial?(r(x,_),M(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),I(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?h(x,_,B,k):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ei&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ei&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let B=t.get(_),k=B.envMap,R=B.envMapRotation;k&&(x.envMap.value=k,x.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Yg),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,B,k){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*B,x.scale.value=k*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,B){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ei&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function I(x,_){let B=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,E){let O=E.program;n.uniformBlockBinding(R,O)}function u(R,E){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",B));let G=E.program;n.updateUBOMapping(R,G);let A=t.render.frame;r[R.id]!==A&&(g(R),r[R.id]=A)}function d(R){let E=v();R.__bindingPointIndex=E;let O=i.createBuffer(),G=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,G,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){let E=s[R.id],O=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,F=O.length;A<F;A++){let H=O[A];if(Array.isArray(H))for(let W=0,st=H.length;W<st;W++)S(H[W],A,W,G);else S(H,A,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(R,E,O,G){if(I(R,E,O,G)===!0){let A=R.__offset,F=R.value;if(Array.isArray(F)){let H=0;for(let W=0;W<F.length;W++){let st=F[W],lt=_(st);M(st,R.__data,H),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(H+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function M(R,E,O){typeof R=="number"||typeof R=="boolean"?E[0]=R:R.isMatrix3?(E[0]=R.elements[0],E[1]=R.elements[1],E[2]=R.elements[2],E[3]=0,E[4]=R.elements[3],E[5]=R.elements[4],E[6]=R.elements[5],E[7]=0,E[8]=R.elements[6],E[9]=R.elements[7],E[10]=R.elements[8],E[11]=0):ArrayBuffer.isView(R)?E.set(new R.constructor(R.buffer,R.byteOffset,E.length)):R.toArray(E,O)}function I(R,E,O,G){let A=R.value,F=E+"_"+O;if(G[F]===void 0)return typeof A=="number"||typeof A=="boolean"?G[F]=A:ArrayBuffer.isView(A)?G[F]=A.slice():G[F]=A.clone(),!0;{let H=G[F];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return G[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(H.equals(A)===!1)return H.copy(A),!0}}return!1}function x(R){let E=R.uniforms,O=0,G=16;for(let F=0,H=E.length;F<H;F++){let W=Array.isArray(E[F])?E[F]:[E[F]];for(let st=0,lt=W.length;st<lt;st++){let J=W[st],tt=Array.isArray(J.value)?J.value:[J.value];for(let dt=0,mt=tt.length;dt<mt;dt++){let Tt=tt[dt],gt=_(Tt),bt=O%G,St=bt%gt.boundary,qt=bt+St;O+=St,qt!==0&&G-qt<gt.storage&&(O+=G-qt),J.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=gt.storage}}}let A=O%G;return A>0&&(O+=G-A),R.__size=O,R.__cache={},this}function _(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(E.boundary=16,E.storage=R.byteLength):ye("WebGLRenderer: Unsupported uniform value type.",R),E}function B(R){let E=R.target;E.removeEventListener("dispose",B);let O=a.indexOf(E.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:h,update:u,dispose:k}}var kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rs=null;function zb(){return rs===null&&(rs=new Co(kb,16,16,js,Wi),rs.name="DFG_LUT",rs.minFilter=$n,rs.magFilter=$n,rs.wrapS=ji,rs.wrapT=ji,rs.generateMipmaps=!1,rs.needsUpdate=!0),rs}var iu=class{constructor(t={}){let{canvas:e=hg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=di}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let I=S,x=new Set([vh,xh,_h]),_=new Set([di,Gi,wa,Ea,ph,mh]),B=new Uint32Array(4),k=new Int32Array(4),R=new q,E=null,O=null,G=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,W=!1,st=null,lt=null,J=null,tt=null;this._outputColorSpace=xi;let dt=0,mt=0,Tt=null,gt=-1,bt=null,St=new nn,qt=new nn,Qt=null,Ge=new ve(0),Ie=0,$e=e.width,xt=e.height,vt=1,Pt=null,oe=null,Zt=new nn(0,0,$e,xt),_e=new nn(0,0,$e,xt),ne=!1,nt=new ga,Ct=!1,V=!1,Rt=new He,Bt=new q,le=new nn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function we(){return Tt===null?vt:1}let X=n;function Ue(C,Z){return e.getContext(C,Z)}let Pe,U,w,et,at,_t,It,kt,pt,ct,Wt,ce,Yt,$t,ae,de,Ee,j,Xt,yt,Vt,jt,Et;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),X===null){let Z="webgl2";if(X=Ue(Z,C),X===null)throw Ue(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(C){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),be("WebGLRenderer: "+C.message),C}function ie(){Pe=new qS(X),Pe.init(),Vt=new Db(X,Pe),U=new OS(X,Pe,t,Vt),w=new Pb(X,Pe),U.reversedDepthBuffer&&g&&w.buffers.depth.setReversed(!0),lt=X.createFramebuffer(),J=X.createFramebuffer(),tt=X.createFramebuffer(),et=new ZS(X),at=new _b,_t=new Lb(X,Pe,w,at,U,Vt,et),It=new XS(H),kt=new Kx(X),jt=new US(X,kt),pt=new YS(X,kt,et,jt),ct=new KS(X,pt,kt,jt,et),j=new jS(X,U,_t),ae=new BS(at),Wt=new gb(H,It,Pe,U,jt,ae),ce=new Ob(H,at),Yt=new vb,$t=new Eb(Pe),Ee=new NS(H,It,w,ct,M,h),de=new Ib(H,ct,U),Et=new Bb(X,et,U,w),Xt=new FS(X,Pe,et),yt=new JS(X,Pe,et),et.programs=Wt.programs,H.capabilities=U,H.extensions=Pe,H.properties=at,H.renderLists=Yt,H.shadowMap=de,H.state=w,H.info=et}I!==di&&(F=new tM(I,e.width,e.height,l,s,r));let te=new Tf(H,X);this.xr=te,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=Pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize($e,xt,!1))},this.getSize=function(C){return C.set($e,xt)},this.setSize=function(C,Z,ut=!0){if(te.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=C,xt=Z,e.width=Math.floor(C*vt),e.height=Math.floor(Z*vt),ut===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set($e*vt,xt*vt).floor()},this.setDrawingBufferSize=function(C,Z,ut){$e=C,xt=Z,vt=ut,e.width=Math.floor(C*ut),e.height=Math.floor(Z*ut),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(I===di){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(St)},this.getViewport=function(C){return C.copy(Zt)},this.setViewport=function(C,Z,ut,rt){C.isVector4?Zt.set(C.x,C.y,C.z,C.w):Zt.set(C,Z,ut,rt),w.viewport(St.copy(Zt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(_e)},this.setScissor=function(C,Z,ut,rt){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,Z,ut,rt),w.scissor(qt.copy(_e).multiplyScalar(vt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){w.setScissorTest(ne=C)},this.setOpaqueSort=function(C){Pt=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ut=!0){let rt=0;if(C){let ot=!1;if(Tt!==null){let Ft=Tt.texture.format;ot=x.has(Ft)}if(ot){let Ft=Tt.texture.type,Nt=_.has(Ft),At=Ee.getClearColor(),Jt=Ee.getClearAlpha(),ee=At.r,re=At.g,Se=At.b;Nt?(B[0]=ee,B[1]=re,B[2]=Se,B[3]=Jt,X.clearBufferuiv(X.COLOR,0,B)):(k[0]=ee,k[1]=re,k[2]=Se,k[3]=Jt,X.clearBufferiv(X.COLOR,0,k))}else rt|=X.COLOR_BUFFER_BIT}Z&&(rt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ut&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),st=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Ee.dispose(),Yt.dispose(),$t.dispose(),at.dispose(),It.dispose(),ct.dispose(),jt.dispose(),Et.dispose(),Wt.dispose(),te.dispose(),te.removeEventListener("sessionstart",tr),te.removeEventListener("sessionend",er),Ri.stop()};function Je(C){C.preventDefault(),bo("WebGLRenderer: Context Lost."),W=!0}function We(){bo("WebGLRenderer: Context Restored."),W=!1;let C=et.autoReset,Z=de.enabled,ut=de.autoUpdate,rt=de.needsUpdate,ot=de.type;ie(),et.autoReset=C,de.enabled=Z,de.autoUpdate=ut,de.needsUpdate=rt,de.type=ot}function Bn(C){be("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function si(C){let Z=C.target;Z.removeEventListener("dispose",si),yl(Z)}function yl(C){Na(C),at.remove(C)}function Na(C){let Z=at.get(C).programs;Z!==void 0&&(Z.forEach(function(ut){Wt.releaseProgram(ut)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ut,rt,ot,Ft){Z===null&&(Z=ue);let Nt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,At=Oa(C,Z,ut,rt,ot);w.setMaterial(rt,Nt);let Jt=ut.index,ee=1;if(rt.wireframe===!0){if(Jt=pt.getWireframeAttribute(ut),Jt===void 0)return;ee=2}let re=ut.drawRange,Se=ut.attributes.position,Ot=re.start*ee,wt=(re.start+re.count)*ee;Ft!==null&&(Ot=Math.max(Ot,Ft.start*ee),wt=Math.min(wt,(Ft.start+Ft.count)*ee)),Jt!==null?(Ot=Math.max(Ot,0),wt=Math.min(wt,Jt.count)):Se!=null&&(Ot=Math.max(Ot,0),wt=Math.min(wt,Se.count));let ge=wt-Ot;if(ge<0||ge===1/0)return;jt.setup(ot,rt,At,ut,Jt);let xe,Ke=Xt;if(Jt!==null&&(xe=kt.get(Jt),Ke=yt,Ke.setIndex(xe)),ot.isMesh)rt.wireframe===!0?(w.setLineWidth(rt.wireframeLinewidth*we()),Ke.setMode(X.LINES)):Ke.setMode(X.TRIANGLES);else if(ot.isLine){let wn=rt.linewidth;wn===void 0&&(wn=1),w.setLineWidth(wn*we()),ot.isLineSegments?Ke.setMode(X.LINES):ot.isLineLoop?Ke.setMode(X.LINE_LOOP):Ke.setMode(X.LINE_STRIP)}else ot.isPoints?Ke.setMode(X.POINTS):ot.isSprite&&Ke.setMode(X.TRIANGLES);if(ot.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let wn=ot._multiDrawStarts,Kt=ot._multiDrawCounts,An=ot._multiDrawCount,Fe=Jt?kt.get(Jt).bytesPerElement:1,zn=at.get(rt).currentProgram.getUniforms();for(let Mn=0;Mn<An;Mn++)zn.setValue(X,"_gl_DrawID",Mn),Ke.render(wn[Mn]/Fe,Kt[Mn])}else if(ot.isInstancedMesh)Ke.renderInstances(Ot,ge,ot.count);else if(ut.isInstancedBufferGeometry){let wn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Kt=Math.min(ut.instanceCount,wn);Ke.renderInstances(Ot,ge,Kt)}else Ke.render(Ot,ge)};function kn(C,Z,ut,rt){st!==null&&C.isNodeMaterial&&st.setObject(rt,C),Ct===!0&&ae.setState(C,ut,!1),C.transparent===!0&&C.side===is&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,ps(C,Z,rt),C.side=qs,C.needsUpdate=!0,ps(C,Z,rt),C.side=is):ps(C,Z,rt)}this.compile=function(C,Z,ut=null){ut===null&&(ut=C),st!==null&&st.renderStart(C,Z,ut),O=$t.get(ut),O.init(Z),A.push(O),ut.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),C!==ut&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),O.setupLights(),st!==null&&st.updateLights(O.state.lightsArray),V=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,V),Ct===!0&&ae.setGlobalState(this.clippingPlanes,Z),st!==null&&de.render(O.state.shadowsArray,ut,Z);let rt=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Ft=ot.material;if(Ft)if(Array.isArray(Ft))for(let Nt=0;Nt<Ft.length;Nt++){let At=Ft[Nt];kn(At,ut,Z,ot),rt.add(At)}else kn(Ft,ut,Z,ot),rt.add(Ft)}),O=A.pop(),st!==null&&st.renderEnd(),rt},this.compileAsync=function(C,Z,ut=null){let rt=this.compile(C,Z,ut);return new Promise(ot=>{function Ft(){if(rt.forEach(function(Nt){let Jt=at.get(Nt).currentProgram;(Jt===void 0||Jt.isReady())&&rt.delete(Nt)}),rt.size===0){ot(C);return}setTimeout(Ft,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let ri=null;function Ci(C){ri&&ri(C)}function tr(){Ri.stop()}function er(){Ri.start()}let Ri=new Vg;Ri.setAnimationLoop(Ci),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){ri=C,te.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},te.addEventListener("sessionstart",tr),te.addEventListener("sessionend",er),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;st!==null&&st.renderStart(C,Z);let ut=te.enabled===!0&&te.isPresenting===!0,rt=F!==null&&(Tt===null||ut)&&F.begin(H,Tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(Z),Z=te.getCamera()),C.isScene===!0&&C.onBeforeRender(H,C,Z,Tt),O=$t.get(C,A.length),O.init(Z),O.state.textureUnits=_t.getTextureUnits(),A.push(O),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),nt.setFromProjectionMatrix(Rt,zi,Z.reversedDepth),V=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,V),E=Yt.get(C,G.length),E.init(),G.push(E),te.enabled===!0&&te.isPresenting===!0){let Nt=H.xr.getDepthSensingMesh();Nt!==null&&Or(Nt,Z,-1/0,H.sortObjects)}Or(C,Z,0,H.sortObjects),E.finish(),st!==null&&st.updateLights(O.state.lightsArray),H.sortObjects===!0&&E.sort(Pt,oe),he=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,he&&Ee.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ct===!0&&ae.beginShadows();let ot=O.state.shadowsArray;if(de.render(ot,C,Z),Ct===!0&&ae.endShadows(),(rt&&F.hasRenderPass())===!1){let Nt=E.opaque,At=E.transmissive;if(O.setupLights(),Z.isArrayCamera){let Jt=Z.cameras;if(At.length>0)for(let ee=0,re=Jt.length;ee<re;ee++){let Se=Jt[ee];Sl(Nt,At,C,Se)}he&&Ee.render(C);for(let ee=0,re=Jt.length;ee<re;ee++){let Se=Jt[ee];Is(E,C,Se,Se.viewport)}}else At.length>0&&Sl(Nt,At,C,Z),he&&Ee.render(C),Is(E,C,Z)}Tt!==null&&mt===0&&(_t.updateMultisampleRenderTarget(Tt),_t.updateRenderTargetMipmap(Tt)),rt&&F.end(H),C.isScene===!0&&C.onAfterRender(H,C,Z),jt.resetDefaultState(),gt=-1,bt=null,A.pop(),A.length>0?(O=A[A.length-1],_t.setTextureUnits(O.state.textureUnits),Ct===!0&&ae.setGlobalState(H.clippingPlanes,O.state.camera)):O=null,G.pop(),G.length>0?E=G[G.length-1]:E=null,st!==null&&st.renderEnd()};function Or(C,Z,ut,rt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ut=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(nt)){rt&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);let Nt=ct.update(C),At=C.material;At.visible&&E.push(C,Nt,At,ut,le.z,null,Z)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(nt))){let Nt=ct.update(C),At=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),le.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),le.copy(Nt.boundingSphere.center)),le.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(At)){let Jt=Nt.groups;for(let ee=0,re=Jt.length;ee<re;ee++){let Se=Jt[ee],Ot=At[Se.materialIndex];Ot&&Ot.visible&&E.push(C,Nt,Ot,ut,le.z,Se,Z)}}else At.visible&&E.push(C,Nt,At,ut,le.z,null,Z)}}let Ft=C.children;for(let Nt=0,At=Ft.length;Nt<At;Nt++)Or(Ft[Nt],Z,ut,rt)}function Is(C,Z,ut,rt){let{opaque:ot,transmissive:Ft,transparent:Nt}=C;O.setupLightsView(ut),Ct===!0&&ae.setGlobalState(H.clippingPlanes,ut),rt&&w.viewport(St.copy(rt)),ot.length>0&&Ps(ot,Z,ut),Ft.length>0&&Ps(Ft,Z,ut),Nt.length>0&&Ps(Nt,Z,ut),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Sl(C,Z,ut,rt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[rt.id]===void 0){let Ot=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[rt.id]=new hi(1,1,{generateMipmaps:!0,type:Ot?Wi:di,minFilter:Js,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let Ft=O.state.transmissionRenderTarget[rt.id],Nt=rt.viewport||St;Ft.setSize(Nt.z*H.transmissionResolutionScale,Nt.w*H.transmissionResolutionScale);let At=H.getRenderTarget(),Jt=H.getActiveCubeFace(),ee=H.getActiveMipmapLevel();H.setRenderTarget(Ft),H.getClearColor(Ge),Ie=H.getClearAlpha(),Ie<1&&H.setClearColor(16777215,.5),H.clear(),he&&Ee.render(ut);let re=H.toneMapping;H.toneMapping=Hi;let Se=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),O.setupLightsView(rt),Ct===!0&&ae.setGlobalState(H.clippingPlanes,rt),Ps(C,ut,rt),_t.updateMultisampleRenderTarget(Ft),_t.updateRenderTargetMipmap(Ft),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let wt=0,ge=Z.length;wt<ge;wt++){let xe=Z[wt],{object:Ke,geometry:wn,material:Kt,group:An}=xe;if(Kt.side===is&&Ke.layers.test(rt.layers)){let Fe=Kt.side;Kt.side=ei,Kt.needsUpdate=!0,qi(Ke,ut,rt,wn,Kt,An),Kt.side=Fe,Kt.needsUpdate=!0,Ot=!0}}Ot===!0&&(_t.updateMultisampleRenderTarget(Ft),_t.updateRenderTargetMipmap(Ft))}H.setRenderTarget(At,Jt,ee),H.setClearColor(Ge,Ie),Se!==void 0&&(rt.viewport=Se),H.toneMapping=re}function Ps(C,Z,ut){let rt=Z.isScene===!0?Z.overrideMaterial:null;for(let ot=0,Ft=C.length;ot<Ft;ot++){let Nt=C[ot],{object:At,geometry:Jt,group:ee}=Nt,re=Nt.material;re.allowOverride===!0&&rt!==null&&(re=rt),At.layers.test(ut.layers)&&qi(At,Z,ut,Jt,re,ee)}}function qi(C,Z,ut,rt,ot,Ft){st!==null&&ot.isNodeMaterial&&st.setObject(C,ot),C.onBeforeRender(H,Z,ut,rt,ot,Ft),C.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(H,Z,ut,rt,C,Ft),ot.transparent===!0&&ot.side===is&&ot.forceSinglePass===!1?(ot.side=ei,ot.needsUpdate=!0,H.renderBufferDirect(ut,Z,rt,ot,C,Ft),ot.side=qs,ot.needsUpdate=!0,H.renderBufferDirect(ut,Z,rt,ot,C,Ft),ot.side=is):H.renderBufferDirect(ut,Z,rt,ot,C,Ft),C.onAfterRender(H,Z,ut,rt,ot,Ft)}function ps(C,Z,ut){Z.isScene!==!0&&(Z=ue);let rt=at.get(C),ot=O.state.lights,Ft=O.state.shadowsArray,Nt=ot.state.version,At=Wt.getParameters(C,ot.state,Ft,Z,ut,O.state.lightProbeGridArray),Jt=Wt.getProgramCacheKey(At),ee=rt.programs;rt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,rt.fog=Z.fog;let re=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;rt.envMap=It.get(C.envMap||rt.environment,re),rt.envMapRotation=rt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",si),ee=new Map,rt.programs=ee);let Se=ee.get(Jt);if(Se!==void 0){if(rt.currentProgram===Se&&rt.lightsStateVersion===Nt)return Fa(C,At),Se}else At.uniforms=Wt.getUniforms(C),st!==null&&C.isNodeMaterial&&st.build(C,ut,At),C.onBeforeCompile(At,H),Se=Wt.acquireProgram(At,Jt),ee.set(Jt,Se),rt.uniforms=At.uniforms;let Ot=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ot.clippingPlanes=ae.uniform),Fa(C,At),rt.needsLights=wl(C),rt.lightsStateVersion=Nt,rt.needsLights&&(Ot.ambientLightColor.value=ot.state.ambient,Ot.lightProbe.value=ot.state.probe,Ot.sunLights.value=ot.state.sun,Ot.sunLightShadows.value=ot.state.sunShadow,Ot.directionalLights.value=ot.state.directional,Ot.directionalLightShadows.value=ot.state.directionalShadow,Ot.spotLights.value=ot.state.spot,Ot.spotLightShadows.value=ot.state.spotShadow,Ot.rectAreaLights.value=ot.state.rectArea,Ot.ltc_1.value=ot.state.rectAreaLTC1,Ot.ltc_2.value=ot.state.rectAreaLTC2,Ot.pointLights.value=ot.state.point,Ot.pointLightShadows.value=ot.state.pointShadow,Ot.hemisphereLights.value=ot.state.hemi,Ot.sunShadowMatrix.value=ot.state.sunShadowMatrix,Ot.sunShadowCascade.value=ot.state.sunShadowCascade,Ot.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Ot.spotLightMatrix.value=ot.state.spotLightMatrix,Ot.spotLightMap.value=ot.state.spotLightMap,Ot.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=O.state.lightProbeGridArray.length>0,rt.currentProgram=Se,rt.uniformsList=null,Se}function Ua(C){if(C.uniformsList===null){let Z=C.currentProgram.getUniforms();C.uniformsList=Ca.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Fa(C,Z){let ut=at.get(C);ut.outputColorSpace=Z.outputColorSpace,ut.batching=Z.batching,ut.batchingColor=Z.batchingColor,ut.instancing=Z.instancing,ut.instancingColor=Z.instancingColor,ut.instancingMorph=Z.instancingMorph,ut.skinning=Z.skinning,ut.morphTargets=Z.morphTargets,ut.morphNormals=Z.morphNormals,ut.morphColors=Z.morphColors,ut.morphTargetsCount=Z.morphTargetsCount,ut.numClippingPlanes=Z.numClippingPlanes,ut.numIntersection=Z.numClipIntersection,ut.vertexAlphas=Z.vertexAlphas,ut.vertexTangents=Z.vertexTangents,ut.toneMapping=Z.toneMapping}function Ml(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Z.matrixWorld);for(let ut=0,rt=C.length;ut<rt;ut++){let ot=C[ut];if(ot.texture!==null&&ot.boundingBox.containsPoint(R))return ot}return null}function Oa(C,Z,ut,rt,ot){Z.isScene!==!0&&(Z=ue),_t.resetTextureUnits();let Ft=Z.fog,Nt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Z.environment:null,At=Tt===null?H.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ve.workingColorSpace,Jt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,ee=It.get(rt.envMap||Nt,Jt),re=rt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Se=!!ut.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ot=!!ut.morphAttributes.position,wt=!!ut.morphAttributes.normal,ge=!!ut.morphAttributes.color,xe=Hi;rt.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(xe=H.toneMapping);let Ke=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,wn=Ke!==void 0?Ke.length:0,Kt=at.get(rt),An=O.state.lights;if(Ct===!0&&(V===!0||C!==bt)){let an=C===bt&&rt.id===gt;ae.setState(rt,C,an)}let Fe=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==An.state.version||Kt.outputColorSpace!==At||ot.isBatchedMesh&&Kt.batching===!1||!ot.isBatchedMesh&&Kt.batching===!0||ot.isBatchedMesh&&Kt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Kt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Kt.instancing===!1||!ot.isInstancedMesh&&Kt.instancing===!0||ot.isSkinnedMesh&&Kt.skinning===!1||!ot.isSkinnedMesh&&Kt.skinning===!0||ot.isInstancedMesh&&Kt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Kt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Kt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Kt.instancingMorph===!1&&ot.morphTexture!==null||Kt.envMap!==ee||rt.fog===!0&&Kt.fog!==Ft||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ae.numPlanes||Kt.numIntersection!==ae.numIntersection)||Kt.vertexAlphas!==re||Kt.vertexTangents!==Se||Kt.morphTargets!==Ot||Kt.morphNormals!==wt||Kt.morphColors!==ge||Kt.toneMapping!==xe||Kt.morphTargetsCount!==wn||!!Kt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Kt.__version=rt.version);let zn=Kt.currentProgram;Fe===!0&&(zn=ps(rt,Z,ot),st&&rt.isNodeMaterial&&st.onUpdateProgram(rt,zn,Kt));let Mn=!1,Yi=!1,Ds=!1,Qe=zn.getUniforms(),mn=Kt.uniforms;if(w.useProgram(zn.program)&&(Mn=!0,Yi=!0,Ds=!0),rt.id!==gt&&(gt=rt.id,Yi=!0),Kt.needsLights){let an=Ml(O.state.lightProbeGridArray,ot);Kt.lightProbeGrid!==an&&(Kt.lightProbeGrid=an,Yi=!0)}if(Mn||bt!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Qe.setValue(X,"projectionMatrix",C.projectionMatrix),Qe.setValue(X,"viewMatrix",C.matrixWorldInverse);let Ii=Qe.map.cameraPosition;Ii!==void 0&&Ii.setValue(X,Bt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Qe.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Qe.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),bt!==C&&(bt=C,Yi=!0,Ds=!0)}if(Kt.needsLights&&(An.state.sunShadowMap.length>0&&Qe.setValue(X,"sunShadowMap",An.state.sunShadowMap,_t),An.state.directionalShadowMap.length>0&&Qe.setValue(X,"directionalShadowMap",An.state.directionalShadowMap,_t),An.state.spotShadowMap.length>0&&Qe.setValue(X,"spotShadowMap",An.state.spotShadowMap,_t),An.state.pointShadowMap.length>0&&Qe.setValue(X,"pointShadowMap",An.state.pointShadowMap,_t)),ot.isSkinnedMesh){Qe.setOptional(X,ot,"bindMatrix"),Qe.setOptional(X,ot,"bindMatrixInverse");let an=ot.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Qe.setValue(X,"boneTexture",an.boneTexture,_t))}ot.isBatchedMesh&&(Qe.setOptional(X,ot,"batchingTexture"),Qe.setValue(X,"batchingTexture",ot._matricesTexture,_t),Qe.setOptional(X,ot,"batchingIdTexture"),Qe.setValue(X,"batchingIdTexture",ot._indirectTexture,_t),Qe.setOptional(X,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Qe.setValue(X,"batchingColorTexture",ot._colorsTexture,_t));let Ji=ut.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&j.update(ot,ut,zn),(Yi||Kt.receiveShadow!==ot.receiveShadow)&&(Kt.receiveShadow=ot.receiveShadow,Qe.setValue(X,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Z.environment!==null&&(mn.envMapIntensity.value=Z.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=zb()),Yi){if(Qe.setValue(X,"toneMappingExposure",H.toneMappingExposure),Kt.needsLights&&bl(mn,Ds),Ft&&rt.fog===!0&&ce.refreshFogUniforms(mn,Ft),ce.refreshMaterialUniforms(mn,rt,vt,xt,O.state.transmissionRenderTarget[C.id]),Kt.needsLights&&Kt.lightProbeGrid){let an=Kt.lightProbeGrid;mn.probesSH.value=an.texture,mn.probesMin.value.copy(an.boundingBox.min),mn.probesMax.value.copy(an.boundingBox.max),mn.probesResolution.value.copy(an.resolution)}Ca.upload(X,Ua(Kt),mn,_t)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ca.upload(X,Ua(Kt),mn,_t),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Qe.setValue(X,"center",ot.center),Qe.setValue(X,"modelViewMatrix",ot.modelViewMatrix),Qe.setValue(X,"normalMatrix",ot.normalMatrix),Qe.setValue(X,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let an=rt.uniformsGroups;for(let Ii=0,Ne=an.length;Ii<Ne;Ii++){let El=an[Ii];Et.update(El,zn),Et.bind(El,zn)}}return zn}function bl(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.sunLights.needsUpdate=Z,C.sunLightShadows.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function wl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return mt},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(C,Z,ut){let rt=at.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),at.get(C.texture).__webglTexture=Z,at.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ut,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){let ut=at.get(C);ut.__webglFramebuffer=Z,ut.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,ut=0){Tt=C,dt=Z,mt=ut;let rt=null,ot=!1,Ft=!1;if(C){let At=at.get(C);if(At.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,At.__webglFramebuffer),St.copy(C.viewport),qt.copy(C.scissor),Qt=C.scissorTest,w.viewport(St),w.scissor(qt),w.setScissorTest(Qt),gt=-1;return}else if(At.__webglFramebuffer===void 0)_t.setupRenderTarget(C);else if(At.__hasExternalTextures)_t.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let re=C.depthTexture;if(At.__boundDepthTexture!==re){if(re!==null&&at.has(re)&&(C.width!==re.image.width||C.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(C)}}let Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ft=!0);let ee=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?rt=ee[Z][ut]:rt=ee[Z],ot=!0):C.samples>0&&_t.useMultisampledRTT(C)===!1?rt=at.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?rt=ee[ut]:rt=ee,St.copy(C.viewport),qt.copy(C.scissor),Qt=C.scissorTest}else St.copy(Zt).multiplyScalar(vt).floor(),qt.copy(_e).multiplyScalar(vt).floor(),Qt=ne;if(ut!==0&&(rt=lt),w.bindFramebuffer(X.FRAMEBUFFER,rt)&&w.drawBuffers(C,rt),w.viewport(St),w.scissor(qt),w.setScissorTest(Qt),ot){let At=at.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At.__webglTexture,ut)}else if(Ft){let At=Z;for(let Jt=0;Jt<C.textures.length;Jt++){let ee=at.get(C.textures[Jt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,ut,At)}}else if(C!==null&&ut!==0){let At=at.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,At.__webglTexture,ut)}gt=-1};function Ls(C){let Z=at.get(C);return(Z.__readFormat!==C.format||Z.__readType!==C.type)&&(Z.__readFormat=C.format,Z.__readType=C.type,Z.__formatReadable=U.textureFormatReadable(C.format),Z.__typeReadable=U.textureTypeReadable(C.type)),Z}this.readRenderTargetPixels=function(C,Z,ut,rt,ot,Ft,Nt,At=0){if(!(C&&C.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Jt=Jt[Nt]),Jt){w.bindFramebuffer(X.FRAMEBUFFER,Jt);try{let ee=C.textures[At],re=ee.format,Se=ee.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+At);let Ot=Ls(ee);if(Ot.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-rt&&ut>=0&&ut<=C.height-ot&&X.readPixels(Z,ut,rt,ot,Vt.convert(re),Vt.convert(Se),Ft)}finally{let ee=Tt!==null?at.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ut,rt,ot,Ft,Nt,At=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Jt=Jt[Nt]),Jt)if(Z>=0&&Z<=C.width-rt&&ut>=0&&ut<=C.height-ot){w.bindFramebuffer(X.FRAMEBUFFER,Jt);let ee=C.textures[At],re=ee.format,Se=ee.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+At);let Ot=Ls(ee);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.bufferData(X.PIXEL_PACK_BUFFER,Ft.byteLength,X.STREAM_READ),X.readPixels(Z,ut,rt,ot,Vt.convert(re),Vt.convert(Se),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let ge=Tt!==null?at.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,ge);let xe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await dg(X,xe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ft),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(wt),X.deleteSync(xe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ut=0){let rt=Math.pow(2,-ut),ot=Math.floor(C.image.width*rt),Ft=Math.floor(C.image.height*rt),Nt=Z!==null?Z.x:0,At=Z!==null?Z.y:0;_t.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ut,0,0,Nt,At,ot,Ft),w.unbindTexture()},this.copyTextureToTexture=function(C,Z,ut=null,rt=null,ot=0,Ft=0){let Nt,At,Jt,ee,re,Se,Ot,wt,ge,xe=C.isCompressedTexture?C.mipmaps[Ft]:C.image;if(ut!==null)Nt=ut.max.x-ut.min.x,At=ut.max.y-ut.min.y,Jt=ut.isBox3?ut.max.z-ut.min.z:1,ee=ut.min.x,re=ut.min.y,Se=ut.isBox3?ut.min.z:0;else{let mn=Math.pow(2,-ot);Nt=Math.floor(xe.width*mn),At=Math.floor(xe.height*mn),C.isDataArrayTexture?Jt=xe.depth:C.isData3DTexture?Jt=Math.floor(xe.depth*mn):Jt=1,ee=0,re=0,Se=0}rt!==null?(Ot=rt.x,wt=rt.y,ge=rt.z):(Ot=0,wt=0,ge=0);let Ke=Vt.convert(Z.format),wn=Vt.convert(Z.type),Kt;Z.isData3DTexture?(_t.setTexture3D(Z,0),Kt=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(_t.setTexture2DArray(Z,0),Kt=X.TEXTURE_2D_ARRAY):(_t.setTexture2D(Z,0),Kt=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);let An=w.getParameter(X.UNPACK_ROW_LENGTH),Fe=w.getParameter(X.UNPACK_IMAGE_HEIGHT),zn=w.getParameter(X.UNPACK_SKIP_PIXELS),Mn=w.getParameter(X.UNPACK_SKIP_ROWS),Yi=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,xe.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xe.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,ee),w.pixelStorei(X.UNPACK_SKIP_ROWS,re),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Se);let Ds=C.isDataArrayTexture||C.isData3DTexture,Qe=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){let mn=at.get(C),Ji=at.get(Z),an=at.get(mn.__renderTarget),Ii=at.get(Ji.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,an.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ne=0;Ne<Jt;Ne++)Ds&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,at.get(C).__webglTexture,ot,Se+Ne),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,at.get(Z).__webglTexture,Ft,ge+Ne)),X.blitFramebuffer(ee,re,Nt,At,Ot,wt,Nt,At,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||at.has(C)){let mn=at.get(C),Ji=at.get(Z);w.bindFramebuffer(X.READ_FRAMEBUFFER,J),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,tt);for(let an=0;an<Jt;an++)Ds?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,ot,Se+an):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,ot),Qe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ji.__webglTexture,Ft,ge+an):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ji.__webglTexture,Ft),ot!==0?X.blitFramebuffer(ee,re,Nt,At,Ot,wt,Nt,At,X.COLOR_BUFFER_BIT,X.NEAREST):Qe?X.copyTexSubImage3D(Kt,Ft,Ot,wt,ge+an,ee,re,Nt,At):X.copyTexSubImage2D(Kt,Ft,Ot,wt,ee,re,Nt,At);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Qe?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Kt,Ft,Ot,wt,ge,Nt,At,Jt,Ke,wn,xe.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Kt,Ft,Ot,wt,ge,Nt,At,Jt,Ke,xe.data):X.texSubImage3D(Kt,Ft,Ot,wt,ge,Nt,At,Jt,Ke,wn,xe):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ft,Ot,wt,Nt,At,Ke,wn,xe.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ft,Ot,wt,xe.width,xe.height,Ke,xe.data):X.texSubImage2D(X.TEXTURE_2D,Ft,Ot,wt,Nt,At,Ke,wn,xe);w.pixelStorei(X.UNPACK_ROW_LENGTH,An),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Fe),w.pixelStorei(X.UNPACK_SKIP_PIXELS,zn),w.pixelStorei(X.UNPACK_SKIP_ROWS,Mn),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Yi),Ft===0&&Z.generateMipmaps&&X.generateMipmap(Kt),w.unbindTexture()},this.initRenderTarget=function(C){at.get(C).__webglFramebuffer===void 0&&_t.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?_t.setTextureCube(C,0):C.isData3DTexture?_t.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?_t.setTexture2DArray(C,0):_t.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){dt=0,mt=0,Tt=null,w.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ve._getUnpackColorSpace()}};var Zg=new ti,au=new q,Xi=class extends jo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new xn(t,3)),this.setAttribute("uv",new xn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Xs(e,6,1);return this.setAttribute("instanceStart",new Vi(n,3,0)),this.setAttribute("instanceEnd",new Vi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Xs(e,6,1);return this.setAttribute("instanceColorStart",new Vi(n,3,0)),this.setAttribute("instanceColorEnd",new Vi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Go(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Zg.setFromBufferAttribute(e),this.boundingBox.union(Zg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)au.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(au)),au.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(au));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new zt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ni.line={uniforms:cl.merge([Gt.common,Gt.fog,Gt.line]),vertexShader:`
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
		`};var as=class extends Fn{constructor(t){super({type:"LineMaterial",uniforms:cl.clone(ni.line.uniforms),vertexShader:ni.line.vertexShader,fragmentShader:ni.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Af=new nn,jg=new q,Kg=new q,Vn=new nn,Hn=new nn,os=new nn,Cf=new q,Rf=new He,Gn=new Qo,Qg=new q,ou=new ti,lu=new ui,ls=new nn,cs,Ir;function t0(i,t,e){return ls.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ls.multiplyScalar(1/ls.w),ls.x=Ir/e.width,ls.y=Ir/e.height,ls.applyMatrix4(i.projectionMatrixInverse),ls.multiplyScalar(1/ls.w),Math.abs(Math.max(ls.x,ls.y))}function $b(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,h=a;l<h;l++){Gn.start.fromBufferAttribute(s,l),Gn.end.fromBufferAttribute(r,l),Gn.applyMatrix4(e);let u=new q,d=new q;cs.distanceSqToSegment(Gn.start,Gn.end,d,u),d.distanceTo(u)<Ir*.5&&t.push({point:d,pointOnLine:u,distance:cs.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Vb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,h=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,h.count),v=-t.near;cs.at(1,os),os.w=1,os.applyMatrix4(t.matrixWorldInverse),os.applyMatrix4(n),os.multiplyScalar(1/os.w),os.x*=r.x/2,os.y*=r.y/2,os.z=0,Cf.copy(os),Rf.multiplyMatrices(t.matrixWorldInverse,a);for(let g=0,S=d;g<S;g++){if(Vn.fromBufferAttribute(h,g),Hn.fromBufferAttribute(u,g),Vn.w=1,Hn.w=1,Vn.applyMatrix4(Rf),Hn.applyMatrix4(Rf),Vn.z>v&&Hn.z>v)continue;if(Vn.z>v){let k=Vn.z-Hn.z,R=(Vn.z-v)/k;Vn.lerp(Hn,R)}else if(Hn.z>v){let k=Hn.z-Vn.z,R=(Hn.z-v)/k;Hn.lerp(Vn,R)}Vn.applyMatrix4(n),Hn.applyMatrix4(n),Vn.multiplyScalar(1/Vn.w),Hn.multiplyScalar(1/Hn.w),Vn.x*=r.x/2,Vn.y*=r.y/2,Hn.x*=r.x/2,Hn.y*=r.y/2,Gn.start.copy(Vn),Gn.start.z=0,Gn.end.copy(Hn),Gn.end.z=0;let I=Gn.closestPointToPointParameter(Cf,!0);Gn.at(I,Qg);let x=af.lerp(Vn.z,Hn.z,I),_=x>=-1&&x<=1,B=Cf.distanceTo(Qg)<Ir*.5;if(_&&B){Gn.start.fromBufferAttribute(h,g),Gn.end.fromBufferAttribute(u,g),Gn.start.applyMatrix4(a),Gn.end.applyMatrix4(a);let k=new q,R=new q;cs.distanceSqToSegment(Gn.start,Gn.end,R,k),e.push({point:R,pointOnLine:k,distance:cs.origin.distanceTo(R),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var Pr=class extends Un{constructor(t=new Xi,e=new as({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,h=e.count;a<h;a++,l+=2)jg.fromBufferAttribute(e,a),Kg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+jg.distanceTo(Kg);let r=new Xs(s,2,1);return t.setAttribute("instanceDistanceStart",new Vi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Vi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;cs=t.ray;let a=this.matrixWorld,l=this.geometry,h=this.material;Ir=h.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),lu.copy(l.boundingSphere).applyMatrix4(a);let u;if(n)u=Ir*.5;else{let v=Math.max(s.near,lu.distanceToPoint(cs.origin));u=t0(s,v,h.resolution)}if(lu.radius+=u,cs.intersectsSphere(lu)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),ou.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Ir*.5;else{let v=Math.max(s.near,ou.distanceToPoint(cs.origin));d=t0(s,v,h.resolution)}ou.expandByScalar(d),cs.intersectsBox(ou)!==!1&&(n?$b(this,e):Vb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Af),this.material.uniforms.resolution.value.set(Af.z,Af.w))}};var cu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),hs=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function e0(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:h,CY:u,mcs:d,q:v,list:g,clamp:S,norm:M,munis:I}=i,x=o=>document.querySelector(o),_=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),B=(o,c)=>[(o-h)*l,(c-u)*l],k=.06,R=t.segs.map(o=>{let c=[],f=[0];for(let m=0;m<o.length;m+=2){let y=B(o[m],o[m+1]);c.length&&f.push(f[f.length-1]+Math.hypot(y[0]-c[c.length-1][0],y[1]-c[c.length-1][1])),c.push(y)}return{p:c,c:f,L:f[f.length-1]}}),E=t.stops.map(([o,c,f,m])=>({n:o,id:m,w:B(c,f),fams:new Set})),O=t.routes.map(([o,c,f])=>({s:o,l:c,c:f})),G=new Map;(t.bus||[]).forEach(([o,c,f,m])=>{let y={days:new Set(o),name:c,stops:f,times:m};f.forEach((b,P)=>{if(P<f.length-1){let D=G.get(b)||[];D.push([y,P]),G.set(b,D)}})});function A(o,c,f){let m=ne(),y=t.days.indexOf(m.ymd),b=[];for(let[P,D]of G.get(o)||[]){if(!P.days.has(y))continue;let L=P.times[D];if(L<c||L>f)continue;let z=P.stops[P.stops.length-1];b.push({sm:L,est:L,dl:0,fam:P.name,dest:E[z].n,destId:E[z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(D)})}return b}let F=(o,c)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),m=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(m[1]||"")||(+f[2]||0)-(+m[2]||0)||f[3].localeCompare(m[3])},H=[...new Set(O.map(o=>o.s))].sort(F),W={};O.forEach(o=>{W[o.s]||(W[o.s]=o.c)});let st=t.pats.map(([o,c,f])=>({stops:o,t:c,segs:f})),lt=t.trips.map(([o,c,f,m,y],b)=>({day:o,pat:st[c],fam:O[f].s,c:O[f].c,t0:m,num:y,tid:t.tids[b]})),J={};H.forEach(o=>J[o]=new Set),lt.forEach(o=>{o.pat.segs.forEach(c=>J[o.fam].add(c)),o.pat.stops.forEach(c=>E[c].fams.add(o.fam))});let tt=t.days.map((o,c)=>lt.filter(f=>f.day===c)),dt=new Map(lt.map(o=>[o.tid,o])),mt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,gt=3.922*Tt,bt=-39.705*Tt;function St(o,c){let f=o*Tt+gt,m=c*Tt,y=Math.cos(bt),b=Math.sin(bt),P=Math.cos(m),D=Math.cos(f)*P,L=Math.sin(f)*P,z=Math.sin(m),Y=Math.atan2(L,D*y-z*b),p=Math.asin(z*y+D*b),T=Math.sqrt(2/(1+Math.cos(Y)*Math.cos(p))),N=T*Math.cos(p)*Math.sin(Y),$=T*Math.sin(p),[ht,Mt,Q,ft,K,fe,Me]=mt;return B((Mt+ht*N-K)*Me,(fe-(ft-Q*$))*Me)}let qt=new Map(E.map((o,c)=>[o.id,c]));function Qt(o){if(o.g)return o.g;let c=[],f=[],m=[0],y=0;return o.segs.forEach((b,P)=>{let D=R[b];D.p.forEach((L,z)=>{P&&!z||(c.push(L),f.push(y+D.c[z]))}),y+=D.L,m.push(y)}),o.g={pts:c,cum:f,stopD:m}}function Ge(o,c,f,m){let y=1e18,b=0;for(let P=0;P+1<o.pts.length;P++){if(o.cum[P+1]<f||o.cum[P]>m)continue;let D=o.pts[P],L=o.pts[P+1],z=L[0]-D[0],Y=L[1]-D[1],p=z*z+Y*Y||1e-9,T=Math.max(0,Math.min(1,((c[0]-D[0])*z+(c[1]-D[1])*Y)/p)),N=D[0]+z*T-c[0],$=D[1]+Y*T-c[1],ht=N*N+$*$;ht<y&&(y=ht,b=o.cum[P]+T*(o.cum[P+1]-o.cum[P]))}return{d:b,err:Math.sqrt(y)}}function Ie(o,c){let f=0,m=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[m])return o.pts[m];for(;m-f>1;){let D=f+m>>1;o.cum[D]<=c?f=D:m=D}let y=(c-o.cum[f])/(o.cum[m]-o.cum[f]||1),b=o.pts[f],P=o.pts[m];return[b[0]+(P[0]-b[0])*y,b[1]+(P[1]-b[1])*y]}let $e=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,xt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let c={};return xt.formatToParts(o).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Pt=0,oe=null,Zt=0,_e=0;function ne(){let o=vt(new Date);if(Pt===0&&oe==null)return{...o,live:!0};let c=oe==null?o.min:Zt+(Pt?(performance.now()-_e)/6e4*Pt:0);return{ymd:o.ymd,min:c,live:!1}}let nt=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Ct="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Ct,localStorage.setItem("rod_rt",c)),V.url=c||Ct}catch{V.url=Ct}let Rt=(o,c)=>{let f=new AbortController,m=setTimeout(()=>f.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:f.signal}).then(y=>{if(clearTimeout(m),!y.ok)throw new Error("HTTP "+y.status);return y.json()},y=>{throw clearTimeout(m),y})},Bt="https://rodalies.jhmuyo.workers.dev";function le(){return(V.url===Ct&&V.altUntil>Date.now()?Bt:V.url).replace(/\/+$/,"")}let ue=o=>/^51/.test(o||"");async function he(){if(!V.url){et();return}let o=le();if(!he.busy){he.busy=1;try{await we(o)}finally{he.busy=0}}}async function we(o){let c=!V.adifAt||Date.now()-V.adifAt>11e4,f=p=>({status:"fulfilled",value:p}),m=p=>({status:"rejected",reason:p}),y,b,P,D,L,z=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{z=await Rt(o,"/live.json")}catch(p){if(/HTTP 404/.test(p.message))V.noLive=Date.now();else{if(V.url===Ct&&o!==Bt)return V.altUntil=Date.now()+30*6e4,we(Bt);o===Bt&&(V.altUntil=0),z={__fail:p}}}if(z&&z.__fail)y=b=P=D=L=m(z.__fail);else if(z&&z.v===1){let p=N=>z[N]&&!z[N].__err?f(z[N]):m(new Error(z[N]&&z[N].__err||"sin dato"));y=p("tu"),b=p("vp"),P=p("al"),D=p("nt"),L=c?p("ad"):m(0);let T=z.rep;T&&Array.isArray(T.items)&&(V.rep=T.items,V.repSkew=(T.now||Date.now())-Date.now(),T.tipos&&(V.tipos=T.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&Rt(o,"/reports.json").then(p=>{p&&Array.isArray(p.items)?(V.rep=p.items,V.repSkew=(p.now||Date.now())-Date.now(),p.tipos&&(V.tipos=p.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[y,b,P,D,L]=await Promise.allSettled([Rt(o,"/trip_updates.json"),Rt(o,"/vehicle_positions.json"),Rt(o,"/alerts.json"),Rt(o,"/notices.json"),c?Rt(o,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?(V.adif=L.value,V.adifAt=Date.now()):c&&(V.adifAt=Date.now()-6e4),y.status==="fulfilled"){let p=new Map,T=new Map;for(let N of y.value.entity||[]){let $=N.tripUpdate;if(!$||!$.trip||!ue($.trip.tripId))continue;let ht=$.trip.tripId,Mt=($.stopTimeUpdate||[])[0],Q=$.delay;Q==null&&Mt&&(Q=(Mt.arrival||Mt.departure||{}).delay),$.trip.scheduleRelationship==="CANCELED"&&(Q="X"),Q!=null&&p.set(ht,Q),T.set(ht,{next:Mt?{sid:Mt.stopId,t:+((Mt.arrival||Mt.departure||{}).time||0)}:null})}V.delays=p,V.tu=T,V.ok=Date.now(),V.feedTs=+((y.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=y.reason&&y.reason.message||__t(0);if(b.status==="fulfilled"){let p=new Map,T=Date.now()/1e3;for(let N of b.value.entity||[]){let $=N.vehicle;if(!$||!$.trip||!ue($.trip.tripId)||!$.position)continue;let ht=$.vehicle&&$.vehicle.label||"",Mt=ht.match(/PLATF\.\(([^)]+)\)/),Q=V.vp.get($.trip.tripId),ft={tid:$.trip.tripId,w:St(+$.position.longitude,+$.position.latitude),st:$.currentStatus||"",sid:$.stopId||"",ts:+$.timestamp||T,label:ht,plat:Mt?Mt[1]:"",fam:(ht.split("-")[0]||"").trim(),num:$.vehicle&&$.vehicle.id||""};ft.disp=Q?Q.disp:null,p.set(ft.tid,ft)}V.vp=p,V.okVP=Date.now()}let Y=[];if(D.status==="fulfilled"&&Array.isArray(D.value.included)){V.okNotices=Date.now();for(let p of D.value.included){let T=new Set((p.lines||[]).map(Q=>Q.id).filter(Q=>W[Q])),N=(Q,ft)=>{Q=Q||{},ft=ft||window.__L;let K=Q[ft];return ft==="en"&&K&&(K===Q.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(K))&&(K=""),(K||Q.es||Q.ca||"").trim()},$=Q=>[N(p.description,Q),N(p.title,Q)].sort((ft,K)=>K.length-ft.length)[0],ht=$(),Mt=$("es");ht&&Y.push({id:"N"+p.externalId,fams:T,stops:new Set,txt:ht,es:Mt,when:(p.date||"")+"T"+(p.time||""),src:"Rodalies",core:p.core||""})}}if(P.status==="fulfilled"){let p=+((P.value.header||{}).timestamp||0);if(V.alertsTs=p,Date.now()/1e3-p<6*3600)for(let T of P.value.entity||[]){let N=T.alert;if(!N)continue;let $=new Set,ht=new Set;for(let K of N.informedEntity||[])(K.routeId||"").startsWith("51")&&$.add(K.routeId.replace(/^51T\d+/,"")),K.stopId&&qt.has(K.stopId)&&ht.add(qt.get(K.stopId));if(!$.size&&!ht.size)continue;let Mt=(N.descriptionText||N.headerText||{translation:[]}).translation||[],Q=((Mt.find(K=>K.language==="es")||Mt[0]||{}).text||"").trim(),ft=+((N.activePeriod||[])[0]||{}).start||0;Y.some(K=>K.txt===Q)||Y.push({id:T.id,fams:$,stops:ht,txt:Q,when:ft?new Date(ft*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[p,T]of(V.adif.items||[]).entries()){let N=(T.t?T.t+". ":"")+T.txt,$=new Set,ht=new Set,Mt=M(N);for(let Q of N.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))W[Q[1]]&&$.add(Q[1]);E.forEach((Q,ft)=>{Q.fams.size&&Q.n.length>4&&Mt.includes(M(Q.n))&&(ht.add(ft),$.size||Q.fams.forEach(K=>$.add(K)))}),Y.some(Q=>Q.txt===N)||Y.push({id:"A"+p,fams:$,stops:ht,txt:N,when:V.adif.upd||"",src:"Adif",lvl:T.lvl})}if(D.status==="fulfilled"||P.status==="fulfilled"){V.alerts=Y.sort((p,T)=>T.when>p.when?1:-1);try{t_()}catch{}}et(),Ru(),Se=0,a()}let X=()=>V.okVP&&Date.now()-V.okVP<10*6e4,Ue=()=>V.okVP&&Date.now()-V.okVP<9e4,Pe={at:0,v:!1},U=()=>{if(!X()||V.vp.size>0)return!1;if(Date.now()-Pe.at>3e4){Pe.at=Date.now();let o=vt(new Date),c=t.days.indexOf(o.ymd),f=0;if(c>=0)for(let m of tt[c]){let y=o.min-m.t0;y>m.pat.t[1]+2&&y<m.pat.t[m.pat.t.length-2]-2&&f++}Pe.v=f>=6}return Pe.v},w=()=>X()&&!U();function et(){let o=x("#rtst"),c=x("#mode");if(c){let m=[...ct].filter(D=>{Za("");let L=Di.m.get(D);return L&&L[0]>=2}),y=Ja(m),b=!!w()&&ne().live&&!(m.length&&y.length===m.length);c.classList.toggle("on",b&&Ue()),c.classList.toggle("pre",!(b&&Ue())),c.textContent=b&&!Ue()?__t(1):b?__t(2):It.cur?__t(3):__t(4),c.classList.toggle("past",!!It.cur);let P=x("#rcgrab");if(P){let D=P.querySelector(".rdot");D||(D=document.createElement("b"),D.className="rdot",P.insertBefore(D,P.firstChild)),D.className="rdot "+(It.cur?"past":b&&Ue()?"on":"pre"),D.title=c.textContent}c.title=It.cur?`${__t(5)}${It.cur.sn.t}${__t(6)}`:""}if(!o)return;V.url?V.err?o.textContent=__t(8)+V.err+__t(9):w()?o.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:U()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=V.err||__t(7);let f=x("#rturl");f&&f._shown!==V.url&&(f.value=V.url,f._shown=V.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){V.err=__t(15),et();return}V.url=o;try{localStorage.setItem("rod_rt",o)}catch{}V.ok=0,V.err="",et(),he()},x("#rtoff").onclick=()=>{V.url=Ct;try{localStorage.removeItem("rod_rt")}catch{}d._h="",he()};let at=0;setInterval(()=>{let o=Rn.size||Le;(document.hidden?!o||Date.now()-at<115e3:Date.now()-at<15e3)||(at=Date.now(),he())},2e4),setTimeout(()=>{at=Date.now(),he()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-at>15e3&&(at=Date.now(),he())});let It={snap:null,key:""};function kt(){let o=ne();if(o.live||!Ne.hoy||!Ne.hoy.snaps||Pt&&oe==null)return null;let c=vt(new Date).min;if(o.min>c+1)return null;let f=null;for(let m of Ne.hoy.snaps){if(!m.d)continue;let y=cp(m.t);y<=o.min+1&&(!f||y>f.m)&&(f={m:y,sn:m})}return f&&o.min-f.m<=25?f:null}let pt=o=>{{let y=Eu(o.num);if(y&&y.cx&&ne().live)return"X"}let c=It.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let y=c.sn.d[o.tid];return y??0}if(!w())return null;let f=V.delays.get(o.tid),m=V.vp.get(o.tid);return f==="X"?f:m&&m.pre&&m.preDl>=1?Math.max(typeof f=="number"?f:0,m.preDl*60):f??null},ct=new Set(H);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>H.includes(c))&&(ct.clear(),o.forEach(c=>H.includes(c)&&ct.add(c)))}catch{}let Wt=new Xi,ce=new Xi,Yt=new as({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),$t=new as({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ae=new Pr(Wt,Yt),de=new Pr(ce,$t);de.renderOrder=20,ae.renderOrder=21,ae.frustumCulled=de.frustumCulled=!1,e.add(de,ae);function Ee(o){let c=o[0]/l+h,f=o[1]/l+u;for(let m of I){if(m._bb===void 0){let b=1e9,P=1e9,D=-1e9,L=-1e9;for(let z of m.rings||[]){let Y=z[0]||[];for(let p=0;p<Y.length;p+=2)Y[p]<b&&(b=Y[p]),Y[p]>D&&(D=Y[p]),Y[p+1]<P&&(P=Y[p+1]),Y[p+1]>L&&(L=Y[p+1])}m._bb=[b,P,D,L]}let y=m._bb;if(!(c<y[0]||c>y[2]||f<y[1]||f>y[3]))for(let b of m.rings||[]){let P=b[0]||[],D=!1;for(let L=0,z=P.length,Y=z-2;L<z;Y=L,L+=2){let p=P[L+1],T=P[Y+1];p>f!=T>f&&c<(P[Y]-P[L])*(f-p)/(T-p)+P[L]&&(D=!D)}if(D)return!0}}return!1}let j=!1;function Xt(){j||!I.length||(j=!0,E.forEach(o=>{o.ext=!Ee(o.w)}),R.forEach(o=>{o.ext=!Ee(o.p[0])&&!Ee(o.p[o.p.length-1])&&!Ee(o.p[o.p.length>>1])}))}let yt=()=>{let o=new Set(ct.size<=2?ct:[]);try{wt&&wt.fam&&o.add(wt.fam)}catch{}return o},Vt="";function jt(){Xt();let o=[],c=[],f=new Set,m=new ve,y=new ve("#d2d0d0"),b=yt();Vt=[...b].join();for(let Y of H)if(ct.has(Y))for(let p of J[Y]){if(f.has(p))continue;f.add(p);let T=R[p].p;m.set(W[Y]),R[p].ext&&!b.has(Y)&&m.lerp(y,.55);for(let N=0;N+1<T.length;N++)o.push(T[N][0],T[N][1],k,T[N+1][0],T[N+1][1],k),c.push(m.r,m.g,m.b,m.r,m.g,m.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let P=new Xi,D=new Xi;P.setPositions(o),P.setColors(c),D.setPositions(o);let L=ae.geometry,z=de.geometry;ae.geometry=P,de.geometry=D,L&&L.dispose(),z&&z.dispose(),a()}jt();let Et=o=>new Fn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ve(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),ie=new vn,te=E.length,Je=new Float32Array(te*3),We=new Float32Array(te*3),Bn=new Float32Array(te),si=new Float32Array(te);E.forEach((o,c)=>{Je[c*3]=o.w[0],Je[c*3+1]=o.w[1],Je[c*3+2]=k,We.set([1,1,1],c*3),Bn[c]=6,si[c]=1.6}),ie.setAttribute("position",new ln(Je,3)),ie.setAttribute("fill",new ln(We,3)),ie.setAttribute("size",new ln(Bn,1)),ie.setAttribute("bw",new ln(si,1));let yl=Et("#1d2330"),Na=new br(ie,yl);Na.renderOrder=22,Na.frustumCulled=!1,e.add(Na);function kn(){let o=r.dist<45,c=yt();E.forEach((f,m)=>{let y=[...f.fams].some(P=>ct.has(P)),b=f.ext&&![...f.fams].some(P=>c.has(P))&&m!==ge;Bn[m]=y?m===ge?13:b?3:o?8:5:0,si[m]=m===ge?3:1.6}),ie.attributes.size.needsUpdate=!0,ie.attributes.bw.needsUpdate=!0}let ri=600,Ci=new vn,tr=new Float32Array(ri*3),er=new Float32Array(ri*3),Ri=new Float32Array(ri),Or=new Float32Array(ri);Ci.setAttribute("position",new ln(tr,3)),Ci.setAttribute("fill",new ln(er,3)),Ci.setAttribute("size",new ln(Ri,1)),Ci.setAttribute("bw",new ln(Or,1));let Is=new Float32Array(ri);Ci.setAttribute("ang",new ln(Is,1));let Sl=new Fn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ve("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ps=new br(Ci,Sl);Ps.renderOrder=24,Ps.frustumCulled=!1,e.add(Ps);let qi=new vn,ps=new Float32Array(ri*3),Ua=new Float32Array(ri*3),Fa=new Float32Array(ri),Ml=new Float32Array(ri);qi.setAttribute("position",new ln(ps,3)),qi.setAttribute("fill",new ln(Ua,3)),qi.setAttribute("size",new ln(Fa,1)),qi.setAttribute("bw",new ln(Ml,1));let Oa=new br(qi,Et("#ffffff"));Oa.renderOrder=23,Oa.frustumCulled=!1,e.add(Oa);function bl(o,c){let f=R[o],m=c*f.L,y=0,b=f.c.length-1;for(;b-y>1;){let Y=y+b>>1;f.c[Y]<=m?y=Y:b=Y}let P=f.c[b]-f.c[y]||1,D=(m-f.c[y])/P,L=f.p[y],z=f.p[b];return[L[0]+(z[0]-L[0])*D,L[1]+(z[1]-L[1])*D]}let wl=o=>o*o*(3-2*o)*.35+o*.65;function Ls(o,c){let f=o.pat.t,m=o.pat.stops.length,y=f[2*m-2];if(c<f[1]-2||c>y+1)return null;if(c<=f[1])return{w:E[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let b=0;b<m-1;b++){let P=f[2*b+1],D=f[2*b+2],L=f[2*b+3];if(c<=D){let z=D>P?(c-P)/(D-P):1;return{w:bl(o.pat.segs[b],wl(S(z,0,1))),at:-1,next:b+1,prev:b,moving:!0}}if(c<=L)return{w:E[o.pat.stops[b+1]].w,at:b+1,next:b+1,moving:!1}}return{w:E[o.pat.stops[m-1]].w,at:m-1,next:m-1,moving:!1}}function C(o){let c=t.days.indexOf(o.ymd),f=[];if(c<0)return{k:c,out:f};let m=(y,b)=>{for(let P of y){if(!ct.has(P.fam))continue;let D=pt(P);if(D==="X")continue;let L=(D||0)/60,z=o.min+b-P.t0-L;if(z<-2||z>P.pat.t[P.pat.t.length-2]+1)continue;let Y=Ls(P,z);Y&&f.push({tr:P,p:Y,rel:z,dl:L,live:D!=null})}};return m(tt[c],0),c>0&&m(tt[c-1],1440),{k:c,out:f}}function Z(o,c,f,m){let y=o.pat.stops[0],b=c.dep0,P=null,D=(z,Y)=>{for(let p of z||[]){let T=p.pat.stops,N=T.length;if(T[N-1]!==y||p===o)continue;let $=p.t0+p.pat.t[2*(N-1)]-Y;if($>b+5||$<b-120)continue;let ht=Qt(p.pat),Mt=Ge(ht,c.w,-1,1e9);if(Mt.err>.6)continue;let Q=ht.stopD,ft=p.pat.t,K=Q.findIndex(Ht=>Ht>Mt.d);K<0&&(K=N-1);let fe=K===0?ft[1]:ft[2*K-1]+(Q[K]>Q[K-1]?(Mt.d-Q[K-1])/(Q[K]-Q[K-1]):1)*(ft[2*K]-ft[2*K-1]),Me=f-(p.t0+fe-Y);Me<-5||Me>120||(!P||Math.abs(Me)<Math.abs(P.prevDl))&&(P={prevTr:p,dPrev:Mt.d,prevDl:Me,arrO:$+Math.max(0,Me)})}};if(D(tt[m],0),m>0&&D(tt[m-1],1440),!P)return{prevTr:null,preDl:0};let L=Math.max(b,P.arrO+3);return{...P,depEst:L,preDl:Math.max(0,L-b)}}function ut(o,c,f){let m=o.pat.t,y=c.length;if(!(f>=0))return f<0?c[0]:null;for(let b=0;b<y;b++)if(f<=m[2*b+1]){if(f>=m[2*b]||b===0)return c[b];let P=m[2*b-1],D=m[2*b];return c[b-1]+(c[b]-c[b-1])*(D>P?(f-P)/(D-P):1)}return c[y-1]}let rt=performance.now();function ot(){let o=[],c=Date.now()/1e3,f=performance.now(),m=Math.min(1,(f-rt)/1e3);rt=f;for(let y of V.vp.values()){let b=dt.get(y.tid),P=b?b.fam:y.fam;if(P&&W[P]&&!ct.has(P))continue;let D=V.delays.get(y.tid),L=typeof D=="number"?D/60:0,z=Math.max(0,c-y.ts);y.mvTs!==y.ts&&((!y.mvW||Math.hypot(y.w[0]-y.mvW[0],y.w[1]-y.mvW[1])>.025)&&(y.mvW=y.w,y.mvAt=y.ts),y.mvTs=y.ts),y.still=y.ts-(y.mvAt||y.ts);let Y=y.w,p=-1;if(b){let N=Qt(b.pat),$=N.stopD;if(y.dObs==null||y.obsAt!==y.ts){let K=Ge(N,y.w,-1,1e9);y.dObs=K.d,y.err=K.err,y.obsAt=y.ts}let ht=ne(),Mt=t.days.indexOf(ht.ymd),Q=b.day===Mt-1?1440:0,ft=b.t0+b.pat.t[1]-Q;if(y.pre=ht.min+L<ft-1&&(y.dObs>$[0]+.35||y.err>.6)&&!(y.st==="STOPPED_AT"&&y.sid===E[b.pat.stops[0]].id),y.dep0=ft,y.pre){if(y.atStop=-1,y.next=0,p=0,y.disp=null,y.prevAt!==y.ts&&(y.prevAt=y.ts,Object.assign(y,Z(b,y,ht.min,Mt))),y.prevTr){let K=Qt(y.prevTr.pat);Y=Ie(K,y.dPrev)}}else if(!Ue()&&b){let K=ne(),fe=t.days.indexOf(K.ymd),Me=b.day===fe-1?1440:0,Ht=Ls(b,K.min+Me-b.t0-L);Ht?(Y=Ht.w,y.est=!0,p=Ht.next,y.atStop=Ht.moving?-1:Ht.at,y.next=Ht.next,y.before=!1):(y.atStop=-1,y.next=-1)}else if(y.err<=.6){let K=$.findIndex(Ht=>Ht>y.dObs+.08);K<0&&(K=$.length-1);let fe=$.reduce((Ht,Xe,Ae)=>Math.abs(Xe-y.dObs)<Math.abs($[Ht]-y.dObs)?Ae:Ht,0);y.atStop=Math.abs($[fe]-y.dObs)<.16?fe:-1;{let Ht=y.st==="STOPPED_AT"&&y.sid?b.pat.stops.findIndex(Xe=>E[Xe].id===y.sid):-1;Ht>=0&&Math.abs($[Ht]-y.dObs)<.6&&(y.atStop=Ht,K<=Ht&&(K=Math.min(Ht+1,$.length-1)))}y.before=y.atStop>=0&&y.dObs<$[y.atStop]-.15,y.next=K,p=K;let Me=y.dObs;if(y.st==="STOPPED_AT"&&y.atStop>=0)Me=$[y.atStop];else if(K>0){let Ht=(b.pat.t[2*K]-b.pat.t[2*K-1])*60,Xe=Ht>0?($[K]-$[K-1])/Ht:0,Ae=ne(),pe=t.days.indexOf(Ae.ymd),fn=b.day===pe-1?1440:0,Oe=ut(b,$,Ae.min+fn-b.t0-L),mi=y.dObs+Xe*Math.min(z,60);Oe!=null&&(mi=Math.min(mi,Math.max(y.dObs,Oe))),Me=Math.max(y.dObs,Math.min($[K]-.03,mi))}y.disp==null||Math.abs(y.disp-Me)>1.2?y.disp=Me:Me>y.disp&&(y.disp+=(Me-y.disp)*Math.min(1,m*1.5)),Y=Ie(N,y.disp)}else if(y.err>2){let K=ne(),fe=t.days.indexOf(K.ymd),Me=b.day===fe-1?1440:0,Ht=Ls(b,K.min+Me-b.t0-L);Ht&&(Y=Ht.w,y.est=!0,p=Ht.next),y.atStop=-1,y.next=Ht?Ht.next:-1}else y.atStop=-1,y.next=-1}let T=y.pre?"":y.st==="STOPPED_AT"&&y.atStop>=0||y.atStop>=0&&y.still>30?"st":y.still>=90&&y.atStop<0?"via":"";o.push({tr:b,v:y,w:Y,stop:T,p:{w:Y},fam:P||"?",c:b?b.c:W[P]||"#6b7385",dl:L,live:!0,real:!0,idx:p,age:z,cancel:D==="X"})}return o}let Ft=new Map,Nt=!1,At=!1,Jt="",ee={st:-1},re=[],Se=0,Ot=null,wt=null,ge=-1,xe=!1,Ke=0,wn="";function Kt(o){let c=Pt>0||w()&&oe==null||!!wt,f=window.__mapHidden?1e3:c?50:250;if(o-Se<f)return!1;Se=o,[...yt()].join()!==Vt&&(jt(),kn());{let p=kt(),T=p?p.sn.t:"";It.cur=p,T!==It.key&&(It.key=T,et()),!p&&!ne().live&&!Ne.at&&Tl()}let m=ne(),y=w()&&m.live,b=y?{k:t.days.indexOf(m.ymd),out:ot()}:C(m);re=b.out;let P=new ve,D=0,L=0;for(let p of re){if(D>=ri)break;tr[D*3]=p.p.w[0],tr[D*3+1]=p.p.w[1],tr[D*3+2]=k+.02;let T=null;if(p.real&&p.v.pre&&p.v.prevTr)T=Ie(Qt(p.v.prevTr.pat),p.v.dPrev+.35);else if(p.real&&p.tr&&!p.v.pre&&p.v.err<=.6&&p.v.disp!=null&&!(p.v.st==="STOPPED_AT"&&p.v.atStop>=0))T=Ie(Qt(p.tr.pat),p.v.disp+.35);else if(!p.real&&p.p.moving){let Q=p.tr.pat.t,ft=p.p.prev,K=Q[2*ft+1],fe=Q[2*ft+2],Me=fe>K?(p.rel-K)/(fe-K):1;T=bl(p.tr.pat.segs[ft],Math.min(1,wl(S(Me,0,1))+.04))}let N=p.real?!!p.stop:!p.p.moving;if(p.broke=Qf(p),p.broke)Is[D]=85;else if(N)Is[D]=75;else if(T){let Q=Al(p.p.w),ft=Al(T),K=ft[0]-Q[0],fe=ft[1]-Q[1];Is[D]=Math.hypot(K,fe)>.05?Math.atan2(K,-fe):99}else Is[D]=99;P.set(p.c||p.tr.c),er[D*3]=P.r,er[D*3+1]=P.g,er[D*3+2]=P.b;let $=p.tr?p.tr===wt:wt&&wt.vtid===p.v.tid;Ri[D]=$?22:r.dist<45?17:14,Or[D]=$?3.5:2.2;let ht=p.real&&p.stop==="via"||!!p.broke,Mt=p.cancel||p.broke?[.86,.15,.15]:p.dl>10?[.86,.15,.15]:p.dl>5?[.92,.48,.05]:p.dl>=1?[.98,.8,.08]:[.09,.64,.29];(p.live&&p.dl>=5||$||ht)&&(ps[L*3]=p.p.w[0],ps[L*3+1]=p.p.w[1],ps[L*3+2]=k+.01,Ua.set($?Mt:ht?[.86,.15,.15]:[.98,.45,.09],L*3),Fa[L]=Ri[D]+($?16+5*Math.sin(o/220):ht?10+3*Math.sin(o/400):8),Ml[L]=$?2:3,L++),D++}if(Ci.setDrawRange(0,D),qi.setDrawRange(0,L),["position","fill","size","bw"].forEach(p=>{Ci.attributes[p].needsUpdate=!0,qi.attributes[p].needsUpdate=!0}),Ci.attributes.ang.needsUpdate=!0,Ot){let p=re.find(T=>T.tr===Ot);if(p){let T=0,N=innerHeight,$=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ht=x("#rc").getBoundingClientRect();innerWidth<=640&&($&&(T=$.bottom),N=Math.min(N,ht.top));let Mt=T+(N-T)/2,Q=Mt-innerHeight/2,ft=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=p.p.w[0]-Math.sin(r.yaw)*Q*ft,s.ty=p.p.w[1]+Math.cos(r.yaw)*Q*ft}else w()&&ne().live&&(Ot=null)}let z=nt(Math.floor(m.min+1e-6));z!==wn&&(wn=z,x("#ctime").textContent=z),x("#ntr").textContent=String(re.length),x("#ntrl").textContent=y?__t(16):__t(17);{let p=ct.size<H.length?[...ct].sort(F).join(", "):"",T=x("#ccount"),N=It.cur?`\u23EA ${re.length}${__t(18)}${It.cur.sn.t} \xB7 ${Object.values(It.cur.sn.d).filter($=>$>=60).length}${__t(19)}`:!m.live&&m.min<vt(new Date).min-1&&!Pt?`${__t(20)}${Ne.hoy&&Ne.hoy.snaps&&Ne.hoy.snaps.some($=>$.d)?`${__t(21)}${Ne.hoy.snaps.find($=>$.d).t}`:__t(22)}`:y&&!Ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${hs(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:y&&!re.some($=>$.real)&&Ja(ct).length?`\u{1F4E1} ${__t(25)}${p?` <small>\xB7 ${_(p)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${re.length} ${y?__t(27):__t(28)}${p?` <small>\xB7 ${_(p)}</small>`:""}${y&&V.okVP?(()=>{let $=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${$<3?" new":""}">\u25CF ${__t(29)}${hs($+" s")}</small>`})():""}`;T&&T._t!==N&&(T.innerHTML=N,T._t=N)}{let p=x("#p");p&&p.classList.toggle("ttf",!m.live||!!Pt)}let Y=new Date;if(x("#cdate").textContent=m.live?__t(30):Pt?__t(31)+Pt:wi?__t(32):__t(33),b.k<0?x("#src").innerHTML=`${__t(34)}${$e(t.days[0])}${__t(35)}${$e(t.days[t.days.length-1])}${__t(36)}`:y?x("#src").textContent=`${Ue()?__t(37):__t(38)}${hs(cu(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(p=>p.ts),0))))}`:U()&&m.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),m.live){let p=Math.round(m.min),T=x("#tsl");document.activeElement!==T&&(T.value=p<240?p+1440:p)}{let p=wt?String(wt.num||wt.vtid||""):"";p!==Kt._sk&&(Kt._sk=p,De(!0))}return De(),!Kt._sp&&(y||!m.live||U()||!V.url)&&(Kt._sp=1,window.__splashOff&&window.__splashOff()),o-Ke>3e3&&(wt||ge>=0||xe||At||Jt)&&(Ke=o,ke()),et(),!0}let An=-1,Fe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),zn=[],Mn=document.createElement("button");Mn.type="button",Mn.id="mbtn",Mn.title=__t(44),Mn.innerHTML=__t(45),Mn.onclick=()=>{Fe=!Fe;try{localStorage.setItem("rod_mun",Fe?"1":"")}catch{}Mn.classList.toggle("on",Fe),a(),Ii()},Mn.classList.toggle("on",Fe),document.body.appendChild(Mn);let Yi=I.slice().sort((o,c)=>c.pop-o.pop);function Ds(o){if(o._a)return o._a;let c=null,f=0;for(let m of o.rings||[]){let y=m[0];if(!y)continue;let b=0,P=0,D=0;for(let L=0,z=y.length;L<z;L+=2){let Y=y[L],p=y[L+1],T=y[(L+2)%z],N=y[(L+3)%z],$=Y*N-T*p;b+=$,P+=(Y+T)*$,D+=(p+N)*$}Math.abs(b)>f&&(f=Math.abs(b),c=[P/(3*b),D/(3*b)])}return o._a=c?[(c[0]-h)*l,(c[1]-u)*l]:[o.cx,o.cy]}let Qe=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,mn=[0,7.6,6.7,6,5.4],Ji=[0,17,15,13,12],an=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Ii(){let o=s.tilt<.06&&r.tilt<.08;Mn.classList.toggle("show",o);let c=0;if(Fe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(b=>b.offsetParent!==null||b.style.display==="block").map(b=>{let P=b.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(b=>b[2]>b[0]),m=r.dist,y=m>160?5e4:m>130?2e4:m>105?8e3:m>80?3e3:m>62?800:0;for(let b of Yi){let P=Qe(b.pop);if(b.pop<y)break;let D=Ds(b);if(yn.set(D[0],D[1],k).project(n),Math.abs(yn.x)>1.02||Math.abs(yn.y)>1.02)continue;let L=(yn.x*.5+.5)*innerWidth,z=(-yn.y*.5+.5)*innerHeight,Y=an(b.name),p=Y.length*mn[P]+8,T=Ji[P],N=[L-p/2,z-T/2,L+p/2,z+T/2];if(f.some(ht=>N[0]<ht[2]&&ht[0]<N[2]&&N[1]<ht[3]&&ht[1]<N[3]))continue;f.push(N);let $=zn[c]||(zn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));$.isConnected||document.body.appendChild($),$._n!==Y&&($.textContent=Y,$._n=Y),$._t!==P&&($.className="mlab t"+P,$._t=P),$.style.transform=`translate(${Math.round(L)}px,${Math.round(z)}px) translate(-50%,-50%)`,$.style.display="block",c++}}for(;c<zn.length;c++)zn[c].style.display="none"}let Ne={at:0,hoy:null,ayer:null,err:""},El="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Tl(){Date.now()-Ne.at<5*6e4||(Ne.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(El+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null))).then(([o,c,f])=>{Ne.hoy=o,Ne.ayer=c,Ne.hist=f,Ne.tr=null,Ne.err=o?"":__t(46),At&&(d._h="",ke()),De(!0)}))}function T0(o){let c={};for(let m of o&&o.snaps||[])for(let y of m.r||[]){let b=/^\d+[A-Z](\d+)/.exec(y);b&&(c[b[1]]=c[b[1]]||[]).push(Math.max(0,m.d&&m.d[y]||0)/60)}let f={};for(let m in c){let y=c[m].sort((b,P)=>b-P);f[m]=Math.round(y[y.length>>1])}return f}function wu(o){if(!Ne.tr){let f=new Map;for(let m of Ne.hist&&Ne.hist.days||[])f.set(m.day,m.tr);for(let m of[Ne.ayer,Ne.hoy])if(m&&m.day&&!f.has(m.day)){let y=T0(m);Object.keys(y).length&&f.set(m.day,y)}Ne.tr=f}let c=[...Ne.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,m)=>f+m,0)/c.length}:null}let Ns=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",ms={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Yf=o=>o>10?ms.b:o>5?ms.w:o>=1?ms.y:ms.g,nr=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Ba(o,c,f){return`<div class="sbars">${o.map(m=>`<div class="sbar" title="${_(m.tip||"")}"><span class="sl">${m.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(m.w*100))}%;background:${m.c}"></i></span><b class="sv" style="color:${m.c===ms.y?"var(--svy,#a16207)":m.c===ms.w?"var(--svw,#c2410c)":m.c}">${m.val}</b></div>`).join("")}</div>`}function A0(o){if(o=(o||[]).filter(Q=>Q.n>=10),!o||o.length<2){let Q=o&&o[0];return Q?`${__t(47)}${Q.t}: ${Math.round(Q.ok/Q.n*100)}${__t(48)}${Q.n}${__t(49)}`:__t(50)}let c=Q=>{let[ft,K]=Q.t.split(":").map(Number);return ft*60+K},f=c(o[0]),m=Math.max(f+60,c(o[o.length-1])),y=300,b=112,P=24,D=Q=>P+(Q-f)*(y-P-8)/(m-f),L=Q=>8+(100-Q)/100*(b-26),z=Q=>Q.n?Q.ok/Q.n*100:100,Y=o.map(Q=>[D(c(Q)),L(z(Q)),Q]),p=Q=>Q[0].toFixed(1)+","+Q[1].toFixed(1),T=[],N=[];Y.forEach((Q,ft)=>{ft&&c(Q[2])-c(Y[ft-1][2])>45&&(T.push(N),N=[]),N.push(Q)}),T.push(N);let $=Y[Y.length-1],ht=[];for(let Q=Math.ceil(f/180)*3;Q*60<m;Q+=3)Q*60>f+20&&ht.push(Q);let Mt=Math.round(o.reduce((Q,ft)=>Q+ft.ok,0)/Math.max(1,o.reduce((Q,ft)=>Q+ft.n,0))*100);return`<svg class="schart" viewBox="0 0 ${y} ${b}${__t(51)}${[100,75,50,25].map(Q=>`<line x1="${P}" x2="${y-4}" y1="${L(Q)}" y2="${L(Q)}" class="gl"/><text x="2" y="${L(Q)+3}" class="ax">${Q}%</text>`).join("")}
      <line x1="${P}" x2="${y-4}" y1="${L(Mt)}" y2="${L(Mt)}" class="avg"/>
      ${T.filter(Q=>Q.length).map(Q=>`<polygon points="${p([Q[0][0],L(0)])} ${Q.map(p).join(" ")} ${p([Q[Q.length-1][0],L(0)])}" class="ar"/><polyline points="${Q.map(p).join(" ")}" class="ln"/>`).join("")}
      ${Y.map(([Q,ft,K])=>`<circle cx="${Q.toFixed(1)}" cy="${ft.toFixed(1)}" r="6" class="hit"><title>${K.t} \xB7 ${Math.round(z(K))}${__t(52)}${K.n}${__t(53)}${K.d5}${__t(54)}${nr(K.avg)}${K.nd?` \xB7 ${K.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${$[0].toFixed(1)}" cy="${$[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min($[0],y-30).toFixed(1)}" y="${($[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(z($[2]))}%</text>
      ${ht.map(Q=>`<text x="${D(Q*60).toFixed(1)}" y="${b-4}" class="ax" text-anchor="middle">${String(Q).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${b-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${Mt}%)</small>`}function C0(){Tl();let o=ne(),c=re.filter(D=>D.real&&w()&&o.live),f=c.filter(D=>V.delays.has(D.v.tid)),m=f.length,y=c.length-m,b=`${__t(57)}`;if(m){let D=f.filter(ft=>ft.dl<3).length,L=f.filter(ft=>ft.dl>=5).length,z=f.filter(ft=>ft.stop==="via").length,Y=Math.round(D/m*100);b+=`${__t(58)}${m}${__t(59)}${y?` \xB7 ${y}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Ns(Y)}"><b>${Y}${__t(60)}${Ns(100-L/m*100*2)}" title="${Math.round(L/m*100)}${__t(61)}${L}${__t(62)}${z===0?"g":z<=2?"w":"b"}"><b>${z}${__t(63)}`;let p=new Map;f.forEach(ft=>{let K=ft.fam,fe=p.get(K)||{n:0,ok:0,sum:0};fe.n++,fe.ok+=ft.dl<3,fe.sum+=Math.max(0,ft.dl),p.set(K,fe)});let T=[...p].filter(([ft])=>W[ft]).sort((ft,K)=>ft[1].ok/ft[1].n-K[1].ok/K[1].n||K[1].sum/K[1].n-ft[1].sum/ft[1].n),N=T.filter(([,ft])=>ft.ok<ft.n),$=T.filter(([,ft])=>ft.ok===ft.n);b+=`${__t(65)}`+(N.length?"":__t(66))+Ba(N.map(([ft,K])=>({lab:Cn(ft),w:K.ok/K.n,c:ms[Ns(K.ok/K.n*100)],val:`${Math.round(K.ok/K.n*100)}% <small>${nr(K.sum/K.n)}</small>`,tip:`${ft}: ${K.ok}${__t(67)}${K.n}${__t(68)}${nr(K.sum/K.n)}`})))+($.length?`${__t(69)}${$.map(([ft])=>Cn(ft)).join(" ")}</p>`:"");let ht=new Map;f.forEach(ft=>{if(!ft.tr||ft.v.next==null||ft.v.next<0||ft.v.pre)return;let K=ft.tr.pat.stops[ft.v.next],fe=ht.get(K)||{n:0,sum:0};fe.n++,fe.sum+=Math.max(0,ft.dl),ht.set(K,fe)});let Mt=[...ht].filter(([,ft])=>ft.sum/ft.n>=1).sort((ft,K)=>K[1].sum/K[1].n-ft[1].sum/ft[1].n).slice(0,8),Q=Mt.length?Mt[0][1].sum/Mt[0][1].n:1;b+=`${__t(70)}`+(Mt.length?Ba(Mt.map(([ft,K])=>({lab:`<span class="sn" data-gs="${ft}">${_(E[ft].n)}</span>`,w:K.sum/K.n/Q,c:Yf(K.sum/K.n),val:`${nr(K.sum/K.n)} <small>${K.n} ${K.n===1?"tren":__t(71)}</small>`,tip:`${E[ft].n}: ${K.n}${__t(72)}${nr(K.sum/K.n)}${__t(73)}`}))):__t(74))}else b+=`${__t(75)}`;let P=Ne.hoy;b+=`<button type="button" class="hmore" data-cols>${dn.on?__t(76):__t(77)}</button>`;{Za("");let D=[...Di.m].filter(([L,z])=>W[L]&&z[0]>=3).map(([L,z])=>[L,z[1]/z[0]]).sort((L,z)=>L[1]-z[1]);D.length&&!w()?b+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:D.length&&(b+=`${__t(80)}`+Ba(D.slice(0,8).map(([L,z])=>({lab:Cn(L),w:z,c:ms[Ns(z*100)],val:`${Math.round(z*100)}%`,tip:`${L}: ${Math.round(z*100)}${__t(81)}`}))))}{let D=(N,$)=>{let ht=(N&&N.snaps||[]).filter(ft=>ft.n&&(!$||ft.t<=$)),Mt=ht.reduce((ft,K)=>ft+K.n,0),Q=ht.reduce((ft,K)=>ft+K.ok,0);return Mt?Q/Mt*100:null},L=(Ne.hoy&&Ne.hoy.snaps||[]).filter(N=>N.n).map(N=>N.t).pop(),z=D(Ne.hoy),Y=D(Ne.ayer,L),p=z!=null?Math.round(z):null,T=Y!=null?Math.round(Y):null;z!=null&&(b+=`${__t(82)}${Ns(z)}">${Math.round(z)}${__t(83)}${Y!=null?`<span>${L?__t(84):__t(85)} <b class="${Ns(Y)}">${T} %</b></span><span>${p>T?__t(86):p<T?__t(87):__t(88)}</span>`:""}</div>`)}if(b+=`${__t(89)}`,P&&P.snaps){b+=A0(P.snaps);let D=Object.entries(P.st||{}).map(([Y,p])=>[qt.get(Y),p]).filter(([Y,p])=>Y!=null&&p.n>=3).map(([Y,p])=>[Y,p.sum/p.n/60,p]).filter(Y=>Y[1]>=1).sort((Y,p)=>p[1]-Y[1]).slice(0,8);if(D.length){let Y=D[0][1];b+=`${__t(90)}`+Ba(D.map(([p,T,N])=>({lab:`<span class="sn" data-gs="${p}">${_(E[p].n)}</span>`,w:T/Y,c:Yf(T),val:`${nr(T)}${__t(91)}${Math.round(N.max/60)}</small>`,tip:`${E[p].n}: ${N.n}${__t(92)}${N.d5}${__t(93)}${Math.round(N.max/60)} min`})))}let L=Object.entries(P.lines||{}).filter(([Y,p])=>W[Y]&&p.n>=3).sort((Y,p)=>Y[1].ok/Y[1].n-p[1].ok/p[1].n);L.length&&(b+=`${__t(94)}`+Ba(L.map(([Y,p])=>({lab:Cn(Y),w:p.ok/p.n,c:ms[Ns(p.ok/p.n*100)],val:`${Math.round(p.ok/p.n*100)}% <small>${nr(p.sum/p.n/60)}</small>`,tip:`${Y}${__t(95)}${Math.round(p.ok/p.n*100)}${__t(96)}${Math.round(p.max/60)} min`}))));let z=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;b+=`<small class="snote">${z>40?`${__t(98)}${hs(z<90?Math.round(z)+" min":z<2160?Math.round(z/60)+" h":Math.round(z/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${_((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else b+=`<p class="snote">${Ne.at?__t(102):__t(103)}</p>`;return b+"</div>"}function R0(o){let c=ne(),f=re.filter(T=>(T.fam||T.tr&&T.tr.fam)===o),m=f.filter(T=>T.real),y=f.length,b=f.filter(T=>T.dl>=5).length,P=f.filter(T=>T.dl<3).length,D=f.filter(T=>T.stop==="via"||T.broke).length,L=V.alerts.filter(T=>T.fams.has(o)),z=T=>{let N=T.tr;if(!N)return"";let $=T.v;if(T.real&&$){let Mt=$.next>=0?E[N.pat.stops[$.next]].n:"";return $.atStop>=0?`${__t(104)}${E[N.pat.stops[$.atStop]].n}`:Mt?`${__t(105)}${Mt}`:""}let ht=T.p;return ht&&ht.next!=null&&ht.next>=0?`${__t(105)}${E[N.pat.stops[ht.next]].n}`:""},Y=f.slice().sort((T,N)=>N.dl-T.dl).slice(0,40).map(T=>{let N=T.tr;return`<li class="go${Va({num:N?N.num:T.v.num,tid:N?N.tid:T.v.tid})?" sel":""}" data-gt="${_(N?N.num:T.v.num)}|${_(T.real?T.v.tid:N?N.tid:"")}"><b>${_(N?N.num:T.v.num)}</b><span>${N?bi(E[N.pat.stops[N.pat.stops.length-1]].n,o):""} <small>${_(z(T))}</small></span>${T.dl>=1?`<em class="dl ${Pi(T.dl)}">+${Math.round(T.dl)}</em>`:__t(106)}</li>`}).join(""),p=Za(o);return`<div class="tc sts" style="--c:${W[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Cn(o)}${__t(107)}${c.live?`${__t(113)}${y}${__t(114)}${m.length<y?` (${m.length}${__t(115)}`:""}`:`${__t(116)}${nt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${y?Ns(P/y*100):""}"><b>${y?Math.round(P/y*100)+"%":"\u2014"}${__t(108)}${b?b/Math.max(1,y)>.2?"b":"w":"g"}"><b>${b}${__t(109)}${D?"b":"g"}"><b>${D}${__t(110)}${L.length?I0(L):__t(117)}${p<.7?`${__t(118)}${Math.round(p*100)}${__t(119)}`:""}${__t(111)}${Y||__t(120)}${__t(112)}`}let I0=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${Wa(c)} ${_(c.txt)} <small>${Xa(c)}</small></p>`).join("")}</div>`,dn={on:!1,mesh:null};function Jf(){let o=Ne.hoy,c=[];if(o&&o.st)for(let[f,m]of Object.entries(o.st)){let y=qt.get(f);y!=null&&m.n>=2&&c.push([y,m.sum/m.n/60,m.n])}if(!c.length){let f=new Map;re.forEach(m=>{if(!m.real||!m.tr||m.v.next==null||m.v.next<0||m.v.pre||!V.delays.has(m.v.tid))return;let y=m.tr.pat.stops[m.v.next],b=f.get(y)||[0,0];b[0]+=Math.max(0,m.dl),b[1]++,f.set(y,b)}),f.forEach((m,y)=>c.push([y,m[0]/m[1],m[1]]))}return c}let Zf=()=>Math.min(1,Math.max(.22,r.dist/110));function P0(){if(!dn.mesh||!dn.d)return;let o=Zf();if(Math.abs(o-dn.r)<.04)return;dn.r=o;let c=new He;dn.d.forEach(([f,m],y)=>{c.makeScale(o,o,.3+Math.min(m,40)*.3),c.setPosition(E[f].w[0],E[f].w[1],k),dn.mesh.setMatrixAt(y,c)}),dn.mesh.instanceMatrix.needsUpdate=!0,a()}function L0(){if(dn.mesh&&(e.remove(dn.mesh),dn.mesh.geometry.dispose(),dn.mesh.material.dispose(),dn.mesh=null),!dn.on){a();return}let o=Jf();if(!o.length){sn(__t(121)),dn.on=!1;return}let c=new No(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new Sr({fog:!1}),m=new Io(c,f,o.length),y=new He,b=new ve;dn.d=o,dn.r=Zf(),o.forEach(([P,D],L)=>{let z=.3+Math.min(D,40)*.3;y.makeScale(dn.r,dn.r,z),y.setPosition(E[P].w[0],E[P].w[1],k),m.setMatrixAt(L,y),b.set(D>10?"#dc2626":D>5?"#ea7a0c":D>=1?"#eab308":"#16a34a"),m.setColorAt(L,b)}),m.renderOrder=25,m.frustumCulled=!1,e.add(m),dn.mesh=m,s.tilt<.5&&(s.tilt=.85),a()}let Br=document.createElement("button");Br.type="button",Br.id="sbtn",Br.title=__t(122),Br.innerHTML=__t(123),Br.onclick=()=>{At=!At,At&&(Nt=xe=!1,Ne.at=0),d._h="",ke(),a()},document.body.appendChild(Br);function D0(){r.dist<45!=An<45&&(An=r.dist,kn()),P0(),N0(),Ii()}let gs=[],yn=new q;function N0(){let o=0;if(dn.on){let f=Jf().sort((y,b)=>b[1]-y[1]),m=[];for(let[y,b]of f){if(o>=30)break;if(yn.set(E[y].w[0],E[y].w[1],k).project(n),yn.z>1||Math.abs(yn.x)>1||Math.abs(yn.y)>1)continue;let P=(yn.x*.5+.5)*innerWidth,D=(-yn.y*.5+.5)*innerHeight;if(m.some(([z,Y])=>Math.abs(z-P)<90&&Math.abs(Y-D)<18))continue;m.push([P,D]);let L=gs[o]||(gs[o]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=E[y].n+" +"+Math.round(b)+"\u2032",L.dataset.i=y,L.style.display="block",L.style.transform=`translate(${Math.round(P+8)}px,${Math.round(D-8)}px)`,o++}for(;o<gs.length;o++)gs[o].style.display="none";return}if(r.dist<30){let f=[];for(let m=0;m<te;m++)Bn[m]<4||(yn.set(E[m].w[0],E[m].w[1],k).project(n),!(yn.z>1||Math.abs(yn.x)>1.05||Math.abs(yn.y)>1.05)&&f.push([m,(yn.x*.5+.5)*innerWidth,(-yn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[m,y,b]of f){let P=gs[o]||(gs[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=E[m].n,P.dataset.i=m,P.style.display="block",P.style.transform=`translate(${Math.round(y+8)}px,${Math.round(b-7)}px)`,o++}}for(;o<gs.length;o++)gs[o].style.display="none"}function Al(o){return yn.set(o[0],o[1],k).project(n),[(yn.x*.5+.5)*innerWidth,(-yn.y*.5+.5)*innerHeight,yn.z]}function jf(o,c,f,m){let y=null,b=f*f;for(let P of re){let[D,L,z]=Al(P.p.w);if(z>1)continue;let Y=(D-o)**2+(L-c)**2;Y<b&&(b=Y,y={a:P})}if(y)return y;b=m*m;for(let P=0;P<te;P++){if(!Bn[P])continue;let[D,L,z]=Al(E[P].w);if(z>1)continue;let Y=(D-o)**2+(L-c)**2;Y<b&&(b=Y,y={s:P})}return y}let ir=!1;window.__rodHide=()=>{ir=!0},document.addEventListener("click",o=>{ir&&!o.target.closest("#mcs, canvas")&&(ir=!1)},!0),window.__rodTap=(o,c)=>{let f=null,m=1e9;for(let b of gs){if(b.style.display==="none")continue;let P=b.getBoundingClientRect();if(o>=P.left-4&&o<=P.right+4&&c>=P.top-4&&c<=P.bottom+4){let D=Math.abs(c-(P.top+P.bottom)/2)*4+(o-P.left);D<m&&(m=D,f=b)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let y=jf(o,c,24,18);return y&&(y.a||y.s!=null)&&(ir=!1),y&&(y.a||y.s!=null)&&(ee.st=-1),y&&y.a?(Nt=!1,xe=!1,At=!1,wt=y.a.tr||{vtid:y.a.v.tid},ge=-1,Ot=null,kn(),ke(),Se=0,a(),!0):y&&y.s!=null?(Nt=!1,xe=!1,At=!1,ge=y.s,wt=null,Ot=null,kn(),ke(),a(),!0):!1},window.__rodHover=(o,c)=>{let f=jf(o,c,14,10);if(f&&f.a){let m=f.a,y=m.tr?E[m.tr.pat.stops[m.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${m.c}">\u25A0</span> ${_(m.fam||m.tr&&m.tr.fam||"?")}${__t(124)}${_(m.tr?m.tr.num:m.v.num)}</b><small>${y?__t(105)+_(y):""}${m.real?(m.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(m.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${_(E[f.s].n)}</b><small>${[...E[f.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ee.st=-1,ir=!1,Nt=xe=At=!1,wt=null,Ot=null,ge=o,kn(),d._h="",ke(),a()};{let o=x("#rc"),c=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(m=>m.text()).then(m=>{let y=(m.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];y&&f&&y!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Tl()}catch{}},2500),setInterval(()=>{try{Ne.at=0,Tl()}catch{}},15*6e4);let ai={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},ka=matchMedia("(prefers-color-scheme: dark)");function Cl(){let o=ai.mode==="dark"||ai.mode==="auto"&&ka.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<te;f++)We.set(o?[.06,.08,.11]:[1,1,1],f*3);ie.attributes.fill.needsUpdate=!0,yl.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),sr.textContent=ai.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ai.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",sr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ai.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let sr=document.createElement("button");sr.type="button",sr.id="tbtn",sr.onclick=()=>{ai.mode=ai.mode==="auto"?ka.matches?"light":"dark":ai.mode==="dark"?"light":"dark",ai.mode==="dark"===ka.matches&&(ai.mode="auto");try{localStorage.setItem("rod_theme",ai.mode)}catch{}Cl(),sn(sr.title)},document.body.appendChild(sr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}ka.addEventListener&&ka.addEventListener("change",Cl),Cl(),window.__rodTick=Kt,window.__rodFrame=D0,window.__rodResize=()=>{Yt.resolution.set(innerWidth,innerHeight),$t.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Mi={st:-1,f:new Set},Kf=o=>{let c=[...E[o].fams].sort(F);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Mi.f.size?"":"on"}${__t(133)}`:""}${c.map(f=>`<button type="button" data-sf="${_(f)}" class="ln ${Mi.f.size&&!Mi.f.has(f)?"off":""}${ct.has(f)?"":" hid"}" style="--c:${W[f]}">${_(f)}</button>`).join("")}</div>${c.some(f=>!ct.has(f))?__t(134):""}`},U0=o=>{let c=(o||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),m=parseInt(c.slice(2,4),16),y=parseInt(c.slice(4,6),16);return(.299*f+.587*m+.114*y)/255>.62?"#1d2330":"#fff"},bi=(o,c)=>{let f=W[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${U0(f)}" title="${_(c||"")}">${_(o)}</span>`},Rl=o=>{let c=E[o]&&E[o].id;return on.st.includes(c)?"\u{1F3E0} ":Ze.st.includes(c)?"\u{1F4BC} ":""},Pi=o=>o>10?"d-hi":o>5?"d-md":"d-lo",F0=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,za={ref:null,m:new Map};function Eu(o){if(za.ref!==V.alerts){za.ref=V.alerts,za.m=new Map;for(let c of V.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let m of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))za.m.set(m[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return za.m.get(String(o))||null}let $a={ref:null,m:new Map};function Qf(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if($a.ref!==V.alerts){$a.ref=V.alerts,$a.m=new Map;for(let m of V.alerts)if(m.src==="Rodalies"&&F0.test(m.es||m.txt))for(let y of(m.es||m.txt).matchAll(/\b(\d{4,6})\b/g))$a.m.set(y[1],m)}let f=$a.m.get(c);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Va=o=>{try{let c=wt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},tp=(o,c)=>{let f=A(o,c.min-1,c.min+240).sort((m,y)=>m.est-y.est).slice(0,6);return f.length?`${__t(135)}${f.map(m=>`<li><b>${nt(m.est)}</b>${Cn(m.fam)}<span>${bi(m.dest,m.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Li=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),O0=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Li))}catch{}},ep=o=>!!o&&Li.some(c=>c.num===String(o.num)),Le=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),rr=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Le))}catch{}},Il=(o,c)=>!!(Le&&o&&Le.num===String(o.num)&&Le.sid===E[o.pat.stops[c]].id);function Pl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}sn(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function B0(){if(!Le||Le.done)return;let o=ne();if(!o.live)return;let c=t.days.indexOf(o.ymd),f=(tt[c]||[]).find(L=>String(L.num)===Le.num)||(tt[c-1]||[]).find(L=>String(L.num)===Le.num);if(!f)return;let m=f.pat.stops.findIndex(L=>E[L].id===Le.sid);if(m<0)return;let y=pt(f),b=typeof y=="number"?Math.max(0,y/60):0,P=f.day===c-1?1440:0,D=f.t0+f.pat.t[2*m]+b-P;if(D-o.min<-3){Le.done=!0,rr();return}if(window.__schedAt&&D-2-o.min>.1&&(Le.sch==null||Math.abs(Le.sch-D)>=.5)&&(Le.sch=D,Le.nat=Date.now()+(D-2-o.min)*6e4,rr(),window.__schedAt(7701,`${__t(136)}${E[f.pat.stops[m]].n}`,__t(137)+` (${nt(D)})`+(L=>L?` \xB7 ${__t(138)} ${L.fam} ${__t(139)} ${nt(L.est)}${L.plat?__t(140)+L.plat:""}`:"")(Bl.get(Le.sid)),Date.now()+(D-2-o.min)*6e4)),D-o.min<=2){Le.done=!0,rr();let L=Bl.get(Le.sid),z=L?` \xB7 ${L.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${L.fam} ${__t(139)} ${nt(L.est)}${L.plat?__t(140)+L.plat:""}`:"",Y=Math.round(D-o.min),T=(Y>=1?`${__t(144)} ${Y}${__t(143)}${nt(D)}) \xB7 ${__t(145)}`:`${__t(146)} (${nt(D)}) \xB7 ${__t(145)}`)+z;window.__schedAt&&Le.nat&&Date.now()>=Le.nat-2e4?document.hidden||Pl(`${__t(136)}${E[f.pat.stops[m]].n}`,T):(window.__schedOff&&window.__schedOff(7701),Pl(`${__t(136)}${E[f.pat.stops[m]].n}`,T))}}function Tu(o,c){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),m=tt[c]||[],y=(D,L)=>D.t0+D.pat.t[2*L+1],b=null,P=11;for(let D of m){let L=D.pat.stops.findIndex(Y=>E[Y].id===o.sid);if(L<0||L===D.pat.stops.length-1)continue;let z=Math.abs(y(D,L)-f)+(String(D.num)===o.num?-5:0)+(D.fam===o.fam?0:20)+(o.dest&&E[D.pat.stops[D.pat.stops.length-1]].id!==o.dest?3:0);z<P&&(P=z,b=D)}return b}let Ll=new Set;function k0(){if(!Li.length)return;let o=ne();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let f of Li){let m=Tu(f,c);if(!m)continue;let y=m.pat.stops.findIndex(Y=>E[Y].id===f.sid);if(y<0)continue;let b=m.t0+m.pat.t[2*y+1],P=pt(m),D=typeof P=="number"?P/60:0,L=b-o.min;if(L<-2||L>60)continue;let z=o.ymd+f.num+(P==="X"?"X":D>=10?10:D>=5?5:0);Ll.has(z)||(P==="X"||D>=5?(Ll.add(z),Pl(`${__t(147)}${nt(b)} ${P==="X"?__t(148):`${__t(149)}${Math.round(D)} min`}`,`${m.fam} ${m.num}${__t(150)}${E[m.pat.stops[y]].n}${P==="X"?"":`${__t(151)}${nt(b+D)}`}`)):L<=20&&!Ll.has(o.ymd+f.num+"ok")&&V.vp.has(m.tid)&&(Ll.add(o.ymd+f.num+"ok"),sn(`${__t(147)}${nt(b)}${__t(152)}`)))}}setInterval(()=>{try{B0(),k0()}catch{}},15e3);let Cn=o=>`<span class="ln" style="--c:${W[o]}">${_(o)}</span>`;{let o=f=>{let m=/^#?([0-9a-f]{6})$/i.exec(f||"");return m?[0,2,4].map(y=>{let b=parseInt(m[1].slice(y,y+2),16)/255;return b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4)}).reduce((y,b,P)=>y+b*[.2126,.7152,.0722][P],0):0},c=[...new Set(Object.values(W))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function np(o,c){return c?o==="X"?__t(154):o>=60?`<span class="st late ${Pi(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function Au(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,m=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let y=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;y&&(m=Math.min(m,y.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,m)))+"px")}function _s(){try{let o=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!Ye.on||Ye.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(p=>o.style.removeProperty(p)),o._fit=0);return}let y=o.getBoundingClientRect().top,b=c.getBoundingClientRect().top-8,P=Math.max(140,Math.floor(b-y)),D=f&&f.getClientRects().length?f.getBoundingClientRect():null,L=D?Math.max(10,Math.ceil(innerWidth-D.left+8)):10;o._fit=P+"|"+L;let z=o.style,Y={"max-height":P+"px",height:"auto",bottom:"auto",width:"auto",right:L+"px"};for(let p in Y)(z.getPropertyValue(p)!==Y[p]||z.getPropertyPriority(p)!=="important")&&z.setProperty(p,Y[p],"important")}catch{}}setInterval(()=>{Ye.on&&Ye.cur==="map"&&_s()},700);try{new MutationObserver(()=>_s()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=_s;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=m=>{let y=document.querySelector(m);if(!y||!y.getClientRects().length)return"\u2014";let b=y.getBoundingClientRect();return[b.left,b.top,b.right,b.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Ye.on?Ye.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(_s,80));try{new ResizeObserver(()=>_s()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(_s,80));function ke(){try{z0()}finally{requestAnimationFrame(_s),window.__rodTabSync&&window.__rodTabSync();try{Au()}catch{}}}function z0(){if(!wt&&ge<0&&!xe&&!Nt&&!At&&!Jt){ir=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Bu();return}let o=ne(),c="",f=w()&&o.live,m=(p,T)=>V.alerts.filter(N=>[...N.fams].some($=>p.has($))||T!=null&&N.stops.has(T)),y=p=>p.length?`<div class="al">${p.slice(0,4).map(T=>`<p>\u26A0\uFE0F ${Wa(T)} ${[...T.fams].sort(F).slice(0,6).map(Cn).join(" ")} ${_(T.txt)} <small>${Xa(T)}</small></p>`).join("")}${p.length>4?`<small>y ${p.length-4}${__t(157)}`:""}</div>`:"",b=wt&&f?re.find(p=>p.real&&(wt.vtid?p.v.tid===wt.vtid:p.tr===wt)):null;if(Jt&&!At&&!Nt&&!xe&&!wt&&ge<0)c=R0(Jt);else if(At)c=C0();else if(Nt)c=`${__t(158)}${_(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(xe){let p=V.alerts.filter(T=>[...T.fams].some(N=>ct.has(N))||!T.fams.size);c=`${__t(161)}${p.length}${__t(162)}${p.map(T=>`<div class="al"><p>${Wa(T)} ${[...T.fams].sort(F).map(Cn).join(" ")} <small>${Xa(T)}</small></p><p>${_(T.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(165):`${__t(166)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(b){let p=b.v,T=b.tr,N=Ae=>_(E[T.pat.stops[Ae]].n),$=T?T.pat.stops.length:0,ht=qt.get(p.sid),Mt=ht!=null?_(E[ht].n):_(p.sid),Q=T&&p.atStop>=0?N(p.atStop):"",ft=T&&p.next>=0?N(p.next):Mt,K=T&&p.next>0?N(p.next-1):"",fe=b.broke||Qf(b),Me=fe?`<b class="stopv">\u26A0\uFE0F ${fe.why==="aviso"?__t(167):`${__t(168)}${fe.min} min`}</b>${T&&K?`${__t(169)}${K}${__t(170)}${ft}</b>`:""}`:b.stop==="via"&&T?`${__t(171)}${K?`${__t(173)}${K}${__t(170)}${ft}</b>`:`${__t(174)}${ft}</b>`}${__t(172)}${Math.max(1,Math.round(p.still/60))} min`:p.pre&&T?p.prevTr?`${__t(175)}${_(p.prevTr.num)}${__t(176)}${N(0)}</b>${p.prevDl>=1?`${__t(179)}${Math.round(p.prevDl)} min</b>`:""}${__t(177)}${nt(p.arrO)}${__t(178)}${nt(p.depEst)}</b>${p.preDl>=1?`${__t(180)}${nt(p.dep0)})`:""}`:`${__t(181)}${N(0)}${__t(182)}${nt(p.dep0+b.dl)}</b>`:Q&&p.before?`Llegando a <b>${Q}</b>`:(p.st==="STOPPED_AT"||b.stop==="st")&&Q?`${__t(183)}${Q}</b>`:Q&&p.next>=0&&p.atStop!==p.next?`${__t(184)}${Q}${__t(176)}${ft}</b>`:K?`${__t(185)}${K}${__t(170)}${ft}</b>`:`${__t(186)}${ft}</b>`,Ht=T&&p.next>=0&&!p.pre?nt(ja(T,p,p.next,T.t0+T.pat.t[2*p.next]+b.dl)):"",Xe=[];if(T){let Ae=b.idx>=0?b.idx:0,pe=p.pre?Math.max(b.dl,p.preDl||0):b.dl,fn=Oe=>T.t0+T.pat.t[Oe]+pe;for(let Oe=Ae;Oe<$;Oe++)Xe.push(`<li class="${Rl(T.pat.stops[Oe])?"mine":""}${Il(T,Oe)?" alm":""}"><b>${nt(ja(T,p,Oe,fn(Oe===0?1:2*Oe)))}</b><span title="${N(Oe)}">${Rl(T.pat.stops[Oe])}${N(Oe)}</span>${pe>=1?`<em class="dl ${Pi(pe)}">${p.pre?"\u2248":""}+${Math.round(pe)}</em>`:""}${Oe>0?`<button type="button" class="abtn" data-alarm="${Oe}" title="${__t(187)}">${Il(T,Oe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${b.c}"><button class="x" data-cx>\xD7</button><div>${Cn(b.fam)}${__t(188)}${_(T?T.num:p.num)}${__t(189)}${T?`<h3 class="rt"><span class="o" title="${N(0)}">${N(0)}</span><span class="ar">\u2192</span>${bi(E[T.pat.stops[$-1]].n,T.fam)}</h3>`:""}
        <p>${Me}${Ht?`${__t(190)}${Ht}`:""}${p.plat&&p.st==="STOPPED_AT"&&Q?`${__t(191)}${_(p.plat)}</b>`:""}</p><p>${p.pre&&p.prevTr?p.preDl>=1?`${__t(192)}${Math.round(p.preDl)}${__t(193)}`:__t(194):np(V.delays.get(p.tid),V.delays.has(p.tid))}${(()=>{let Ae=T&&wu(T.num);return Ae&&Ae.n>=2?`${__t(195)}${Ae.n}${__t(196)}${Ae.late?`${__t(197)} <b>${Ae.late} ${__t(198)} ${Ae.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ae.avg<.5?"0":"+"+Math.round(Ae.avg)} min</span>`:""})()}${(()=>{let Ae=T&&Eu(T.num);return Ae?`<span class="why" title="${_(Ae.txt)}">${Ae.why?__t(203)+_(Ae.why):__t(204)}</span>`:""})()}</p>
        <small>${p.pre?`${__t(205)}${hs(cu(b.age))}`:p.est?__t(206):`${__t(207)}${hs(cu(b.age))}${b.age>120?__t(208):""}`}</small>
        ${Xe.length?`${b.dl>=1||p.pre&&p.preDl>=1?`${__t(209)}`:""}<ol class="stops">${Xe.join("")}</ol>`:""}${y(m(new Set([b.fam])))}
        ${Ul(T?T.num:p.num,"",b.fam)}${T?`<div class="rtb two"><button type="button" data-fav>${ep(T)?__t(210):__t(211)}</button><button type="button" data-follow>${Ol(T)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(wt&&f&&!wt.pat)c=`${__t(214)}${_(wt.num||wt.vtid||"")}${__t(215)}`;else if(wt){let p=wt,T=p.pat,N=T.stops.length,$=pt(p),ht=typeof $=="number"?$/60:0,Mt=t.days.indexOf(o.ymd),Q=p.day===Mt-1?1440:0,ft=o.min+Q-p.t0-ht,K=Ls(p,ft),fe=pe=>p.t0+T.t[pe]+ht,Me=pe=>_(E[T.stops[pe]].n),Ht=__t(216);K&&(Ht=K.moving?`${__t(217)}${Me(K.next)}${__t(218)}${nt(fe(2*K.next))}`:K.at===N-1?`${__t(219)}${Me(N-1)}</b>`:`${__t(183)}${Me(K.at)}${__t(220)}${nt(fe(2*K.at+1))}`);let Xe=K?K.next:0,Ae=[];for(let pe=Xe;pe<N;pe++)Ae.push(`<li class="${Rl(T.stops[pe])?"mine":""}${Il(p,pe)?" alm":""}"><b>${nt(ja(p,null,pe,fe(2*pe)))}</b><span title="${Me(pe)}">${Rl(T.stops[pe])}${Me(pe)}</span>${ht>=1?`<em class="dl ${Pi(ht)}">+${Math.round(ht)}</em>`:""}${pe>0?`<button type="button" class="abtn" data-alarm="${pe}" title="${__t(187)}">${Il(p,pe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${p.c}"><button class="x" data-cx>\xD7</button><div>${Cn(p.fam)}${__t(188)}${_(p.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${Me(0)}">${Me(0)}</span><span class="ar">\u2192</span>${bi(E[p.pat.stops[N-1]].n,p.fam)}</h3>
        <p>${Ht}</p><p>${np($,$!=null)}${(()=>{let pe=wu(p.num);return pe&&pe.n>=2?`${__t(195)}${pe.n}${__t(196)}${pe.late?`${__t(197)} <b>${pe.late} ${__t(198)} ${pe.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${pe.avg<.5?"0":"+"+Math.round(pe.avg)} min</span>`:""})()}${__t(221)}${nt(p.t0+T.t[1])}${__t(222)}${nt(p.t0+T.t[2*N-2])}${__t(223)}${ht>=1?__t(209):""}<ol class="stops">${Ae.join("")}</ol>${Ul(p.num,"",p.fam)}<div class="rtb two"><button type="button" data-fav>${ep(p)?__t(210):__t(211)}</button><button type="button" data-follow>${Ol(p)?__t(212):__t(213)}</button></div></div>`}else{let p=ge,T=t.days.indexOf(o.ymd),N=[];Mi.st!==p&&(Mi.st=p,Mi.f.clear());let $=K=>(!W[K]||ct.has(K))&&(!Mi.f.size||Mi.f.has(K));if(T>=0){let K=(fe,Me)=>{for(let Ht of fe){if(!$(Ht.fam))continue;let Xe=Ht.pat.stops.indexOf(p);if(Xe<0||Xe===Ht.pat.stops.length-1)continue;let Ae=pt(Ht),pe=typeof Ae=="number"?Ae/60:0,fn=Ht.t0+Ht.pat.t[2*Xe+1]-Me;fn+pe<o.min-1||fn>o.min+360||N.push({tr:Ht,t:fn,dl:pe,d:Ae,on:V.vp.has(Ht.tid),past:o.min>Ht.t0+Ht.pat.t[1]-Me+2})}};K(tt[T],0),T>0&&K(tt[T-1],1440)}N.sort((K,fe)=>K.t+K.dl-fe.t-fe.dl);let ht=E[p].id,Mt=Ft.get(ht),Q=(f||U()&&o.live)&&V.url;Q&&(!Mt||Date.now()-Mt.at>op())&&!Mt?.loading&&(Ft.set(ht,{...Mt||{},loading:!0,at:Mt?Mt.at:0}),Rt(le(),"/departures.json?stationId="+ht).then(K=>{Ft.set(ht,{at:Date.now(),d:K}),ge===p&&(d._h="",ke())}).catch(()=>Ft.set(ht,{at:Date.now(),err:1})));let ft=Q&&Mt&&Mt.d&&Array.isArray(Mt.d.trains)&&Mt.d.trains.length?Mt.d.trains:null;if(ft){let K=new Map([...V.vp.values()].map(Ht=>[String((dt.get(Ht.tid)||{}).num||Ht.num),Ht])),fe=new Map(oi(p).map(Ht=>[String(Ht.num),Ht])),Me=ft.filter(Ht=>$((Ht.line||{}).id||"")).slice(0,40).map(Ht=>{let Xe=String(Ht.commercialNumber||Ht.technicalNumber||""),Ae=fe.get(Xe),pe=Ae?nt(Ae.est):(Ht.departureDateHourSelectedStation||"").slice(11,16),fn=(Ht.line||{}).id||"",Oe=K.get(Xe),mi=Ae?Math.round(Ae.dl)*60:Oe?V.delays.get(Oe.tid):null,Wl=Ae&&(Ae.gone||!Ae.live&&Ae.est<o.min-1);return`<li class="go${Wl?" old":""}${Va({num:Xe,tid:Oe?Oe.tid:""})?" sel":""}" data-gt="${_(Xe)}|${Oe?_(Oe.tid):""}"><b>${_(pe)}</b>${W[fn]?Cn(fn):`<span class="ln" style="--c:#6b7385">${_(fn||"?")}</span>`}<span>${bi((Ht.destinationStation||{}).name||"",fn)}${Ht.trainObservations?` \xB7 <i>${_(Ht.trainObservations)}</i>`:""}${Wl?` <small class="oldt">${Ae.gone?__t(225):__t(226)}</small>`:""}</span>${Ht.trainCancelled?__t(227):typeof mi=="number"&&mi>=60?`<em class="dl ${Pi(mi/60)}">+${Math.round(mi/60)}</em>`:""}${Ht.platformSelectedStation?`${__t(228)}${_(Ht.platformSelectedStation)}</i>`:""}${Oe?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${_(E[p].n)}</h3>${Kf(p)}${Ul("",E[p].id,"")}${__t(229)}${Me||__t(231)}</ol>${tp(p,o)}${y(m(E[p].fams,p))}${__t(230)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${_(E[p].n)}</h3>${Kf(p)}${Ul("",E[p].id,"")}
        <small style="margin-top:6px">${f&&V.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${N.slice(0,40).map(K=>`<li class="go${Va({num:K.tr.num,tid:K.tr.tid})?" sel":""}" data-gt="${_(K.tr.num)}|${_(K.tr.tid)}"><b>${nt(K.t+K.dl)}</b>${Cn(K.tr.fam)}<span>${bi(E[K.tr.pat.stops[K.tr.pat.stops.length-1]].n,K.tr.fam)}</span>${K.d==="X"?__t(227):K.dl>=1?`<em class="dl ${Pi(K.dl)}">+${Math.round(K.dl)}</em>`:""}${f?K.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':K.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${tp(p,o)}${y(m(E[p].fams,p))}${__t(230)}`}let P=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())&&(d.innerHTML=c,d._h=c,d.scrollTop=P),d.style.display="flex",d.classList.toggle("min",ir),Bu(),innerWidth<=640){let p=d.querySelector(".tc");if(p&&!p.querySelector(".mn")){let T=document.createElement("button");T.type="button",T.className="mn",T.setAttribute("aria-label",__t(238)),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",T.onclick=$=>{$.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(_s),Au(),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let N=p.querySelector(".x");p.insertBefore(T,N?N.nextSibling:p.firstChild)}}else d.classList.remove("peek");let D=x("#rc");if(innerWidth<=640&&!D.classList.contains("min")&&!ke.done&&(ke.done=1,x("#rcgrab").click()),innerWidth<=640){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-p-16)+"px"}else if(innerHeight<=500){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-p-20+"px"}else d.style.top="",d.style.width=At?"390px":"300px",d.style.maxHeight="";_s();let z=d.querySelector("[data-cx]");z&&(z.onclick=p=>{if(p.stopPropagation(),ke.done=0,At||Nt||xe||Jt&&!wt&&ge<0){At=Nt=xe=!1,wt||ge>=0||(Jt=""),d._h="",ke(),a();return}if(wt&&ee.st>=0){let T=ee.st;ee.st=-1,wt=null,Ot=null,ge=T,kn(),d._h="",ke(),Se=0,a();return}if(wt&&Ol(wt)){let T=wt,N=[...Rn],$=Le?{...Le}:null,ht=d.querySelector("[data-follow]");ht&&ht.click(),setTimeout(()=>sn(`${__t(239)} \xB7 ${T.fam||""} ${T.num}`,{label:__t(240),fn:()=>{N.forEach(([Mt,Q])=>Us(Mt,Q)),$&&!Le&&(Le=$,rr()),ur("map"),eo({num:String(T.num),tid:T.tid&&V.vp.has(T.tid)?T.tid:"",tr:T}),Ot=wt,d._h="",ke(),De(!0),a()}}),0)}ee.st=-1,xe=!1,Nt=!1,At=!1,wt=null,ge=-1,Ot=null,kn(),ke(),Se=0,a()}),ap(d),d.querySelectorAll("[data-alarm]").forEach(p=>p.onclick=T=>{T.stopPropagation();let N=wt&&wt.pat?wt:dt.get(wt&&wt.vtid)||null;if(!N)return;let $=+p.dataset.alarm,ht=E[N.pat.stops[$]].id;Le&&Le.num===String(N.num)&&Le.sid===ht?(Le=null,window.__schedOff&&window.__schedOff(7701),sn(__t(241))):(Le={num:String(N.num),sid:ht,at:Date.now()},sn(`${__t(242)}${E[N.pat.stops[$]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),rr(),d._h="",ke()});{let p=d.querySelector("[data-fav]");p&&(p.onclick=T=>{T.stopPropagation();let N=wt&&wt.pat?wt:dt.get(wt&&wt.vtid)||null;if(!N)return;let $=Li.findIndex(ht=>ht.num===String(N.num));if($>=0)Li.splice($,1),sn(__t(243));else{let ht=[...on.st,...Ze.st,...Lt.st],Mt=N.pat.stops.find(Q=>ht.includes(E[Q].id))??N.pat.stops[0];Li.push({num:String(N.num),fam:N.fam,sid:E[Mt].id,dest:E[N.pat.stops[N.pat.stops.length-1]].id,t:nt(N.t0+N.pat.t[2*N.pat.stops.indexOf(Mt)+1])}),sn(`${__t(244)}${N.fam}${__t(245)}${Li[Li.length-1].t}${__t(150)}${E[Mt].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}O0(),d._h="",ke(),De(!0)})}{let p=d.querySelector("[data-share]");p&&(p.onclick=()=>{let T=Jt,N=re.filter(Q=>(Q.fam||Q.tr&&Q.tr.fam)===T),$=N.filter(Q=>Q.dl>=5).sort((Q,ft)=>ft.dl-Q.dl),ht=V.alerts.filter(Q=>Q.fams.has(T)),Mt=`${T}${__t(247)}${nt(ne().min)}: ${N.length}${__t(248)}${$.length}${__t(249)}${$.length?" ("+$.slice(0,4).map(Q=>`${Q.tr?Q.tr.num:Q.v.num} +${Math.round(Q.dl)}`).join(", ")+")":""}.${ht.length?__t(250)+ht[0].txt:__t(251)}`;navigator.share?navigator.share({text:Mt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Mt),sn(__t(252)+Mt.slice(0,60)+"\u2026"))})}{let p=d.querySelector("[data-cols]");p&&(p.onclick=()=>{dn.on=!dn.on,L0(),d._h="",ke()})}d.querySelectorAll("[data-gs]").forEach(p=>p.onclick=()=>{let T=+p.dataset.gs;At=!1,window.__rodPickStation(T),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(p=>p.onclick=T=>{T.stopPropagation();let N=p.dataset.sf;N?Mi.f.has(N)?Mi.f.delete(N):Mi.f.add(N):Mi.f.clear(),d._h="",ke()}),d.querySelectorAll("[data-gt]").forEach(p=>p.onclick=()=>{ee.st=ge;let[T,N]=p.dataset.gt.split("|"),$=dt.get(N);eo({num:T,tid:V.vp.has(N)?N:"",tr:$||null})}),d.querySelectorAll("[data-sethome]").forEach(p=>p.onclick=()=>$u(ge,p.dataset.sethome));let Y=d.querySelector("[data-follow]");Y&&(Y.onclick=()=>{let p=Ol(wt);if(Ot=p?null:wt,!p&&wt&&wt.num!=null){let T=wt.pat.stops,N=String(wt.num),$=null,ht=1e9;for(let Mt of[Lt,on,Ze]){let Q=jn(Mt);if(Q==null||!T.includes(Q)||Mt===Lt&&!Lt.st.length)continue;let ft=oi(Q).find(K=>String(K.num)===N&&!K.gone);ft&&ft.est<ht&&(ht=ft.est,$=Mt)}$&&Us($.key,N),De(!0)}if(p&&wt&&wt.num!=null){let T=String(wt.num);[...Rn].forEach(([N,$])=>{String($)===T&&Us(N,null)}),li.num===T&&(li.num=""),Dt.tid===T&&(Dt.tid="",Dt.lock=!1,Dt.manual=0,Dt.quiet=Date.now()+10*6e4),Le&&Le.num===T&&(Le=null,rr(),window.__schedOff&&window.__schedOff(7701)),De(!0)}Ot?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",ke(),a()})}window.__rodCard=ke;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(wt||ge>=0||xe||Nt)&&(d._h="",ke())},x("#ver").onclick=()=>{Nt=!0,At=!1,xe=!1,d._h="",ke()};let $0={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},V0={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function ip(o){let c={vacio:1,lleno:2,petado:3}[o],f=c?[0,1,2].map(m=>`<rect x="${4+m*6}" y="${14-m*4}" width="4" height="${6+m*4}" rx="1" ${m<c?'fill="currentColor"':""}/>`).join(""):$0[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${V0[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let Dl=new Proxy({},{get:(o,c)=>ip(c)}),Ha="",H0=["vacio","lleno","petado",__t(253),"calor","abordo"],G0=["gente","retraso","cancel","ascensor","via"],W0={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},Nl=o=>(V.tipos||W0)[o]||o,Cu=(o,c)=>(V.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||c&&f.sid===String(c)&&!f.num||o&&c&&f.num===String(o)&&f.sid===String(c)),sp=o=>{let c=Math.round((Date.now()+(V.repSkew||0)-o.at)/6e4);return c<1?__t(265):hs(c+" min")},Ga=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Ul(o,c,f){if(!V.url||!V.repOk)return"";let m=Cu(o,c),y=o?H0:G0;return`<div class="crowd"><small>${ip("gente")} ${__t(267)}${m.length?"":__t(268)}</small>${m.map(b=>`<p><span>${Dl[b.kind]||"\u2022"} <b>${_(Nl(b.kind))}</b> <small>${b.up>1?b.up+__t(269):""}${sp(b)}</small></span>${Ga.has(b.id)?"<small>\u2713</small>":`<button type="button" data-rv="${b.id}:1">${__t(270)}</button><button type="button" data-rv="${b.id}:-1">${__t(271)}</button>`}</p>`).join("")}
      <details data-ckd="${_(String(o||"")+"|"+String(c||""))}"${Ha===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(272):__t(273)}</summary><div class="ckb">${y.map(b=>`<button type="button" data-rk="${b}" data-rn="${_(o||"")}" data-rs="${_(c||"")}" data-rl="${_(f||"")}">${Dl[b]} ${_(Nl(b))}</button>`).join("")}${__t(266)}`}async function rp(o,c){try{let m=await(await fetch(le()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!m.ok){sn(m.err||__t(274));return}if(m.id){Ga.add(m.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ga].slice(-300)))}catch{}}sn(c==="/vote"?__t(275):m.n>1?`${__t(276)}${m.n}${__t(277)}`:__t(278));let y=await Rt(le(),"/reports.json");y&&y.items&&(V.rep=y.items),d._h="",ke(),De(!0)}catch{sn(__t(279))}}function ap(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Ha=c.open?c.dataset.ckd:Ha===c.dataset.ckd?"":Ha,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Ha="",rp({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[m,y]=c.dataset.rv.split(":");Ga.add(+m);try{localStorage.setItem("rod_votes",JSON.stringify([...Ga].slice(-300)))}catch{}rp({id:+m,v:+y},"/vote")})}let Fl=0;function sn(o,c){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,c){let m=document.createElement("button");m.type="button",m.className="tact",m.textContent=c.label,m.onclick=y=>{y.stopPropagation(),clearTimeout(Fl),f.className="",c.fn()},f.appendChild(m)}f.className="on",clearTimeout(Fl),Fl=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),f._tap||(f._tap=1,f.onclick=()=>{clearTimeout(Fl),f.className=""})}function Wa(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(280):_(o.src)}</b>`:""}function Xa(o){if(!o.when)return"";let[c,f]=o.when.split("T"),m=vt(new Date),y=m.ymd.slice(0,4)+"-"+m.ymd.slice(4,6)+"-"+m.ymd.slice(6,8);if(c===y&&f){let b=Math.round(m.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return b<1?__t(265):b<60?hs(b+" min"):`${__t(281)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Ru(){let o=x("#alr");if(!o)return;let c=V.alerts.filter(f=>[...f.fams].some(m=>ct.has(m))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(282):__t(283)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{Nt=!1,At=!1,xe=!0,ke()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(284)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let m=getSelection();m.removeAllRanges(),m.addRange(f),x("#wcopy").textContent=__t(285)}setTimeout(()=>x("#wcopy").textContent=__t(286),2500)};let X0=qt.get("71801");function op(){return document.hidden?Rn.size||Le?12e4:1e12:3e4}function lp(o,c){let f=E[o].id,m=Ft.get(f);!(X()&&V.url)||m&&(m.loading||Date.now()-m.at<op())||(Ft.set(f,{...m||{},loading:!0,at:m?m.at:0}),Rt(le(),"/departures.json?stationId="+f).then(y=>{Ft.set(f,{at:Date.now(),d:y}),c&&c()}).catch(()=>Ft.set(f,{at:Date.now(),err:1})))}let cp=o=>+o.slice(0,2)*60+ +o.slice(3,5),qa={k:-2,m:null};function Ya(o){let c=t.days.indexOf(ne().ymd);if(qa.k!==c){qa.k=c,qa.m=new Map;for(let f of tt[c]||[])qa.m.set(String(f.num),f)}return qa.m.get(String(o))||null}let Di={at:0,m:new Map},Ja=o=>w()?(Za(""),[...o].filter(c=>{let f=Di.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(F)):[];function Za(o){if(Date.now()-Di.at>6e4||Di.vp!==V.vp){Di.at=Date.now(),Di.vp=V.vp,Di.m=new Map;let f=ne(),m=t.days.indexOf(f.ymd);if(m>=0)for(let y of tt[m]){let b=f.min-y.t0;if(b<y.pat.t[1]+3||b>y.pat.t[y.pat.t.length-2]-3)continue;let P=Di.m.get(y.fam)||[0,0];P[0]++,V.vp.has(y.tid)&&P[1]++,Di.m.set(y.fam,P)}}let c=Di.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function ja(o,c,f,m){let y=E[o.pat.stops[f]].id;if([...on.st,...Ze.st].includes(y)){let b=oi(o.pat.stops[f]).find(P=>String(P.num)===String(o.num));if(b&&!b.gone)return b.est}return Iu(o,c,f,0,m)}function hp(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let m=Qt(o.pat).stopD,y=o.pat.t,b,P,D=m.reduce((L,z,Y)=>Math.abs(z-c.dObs)<Math.abs(m[L]-c.dObs)?Y:L,0);if(Math.abs(m[D]-c.dObs)<.16||c.atStop===D)b=y[2*D+1]??y[2*D],P=D;else{let L=m.findIndex(Y=>Y>c.dObs);if(L<=0)return null;let z=Math.min(1,Math.max(0,(c.dObs-m[L-1])/(m[L]-m[L-1]||1)));b=y[2*L-1]+z*(y[2*L]-y[2*L-1]),P=L-1}return{t:vt(new Date).min-f/60,tpos:b,j0:P,sd:m}}function Iu(o,c,f,m,y){let b=hp(o,c);if(!b||f<=b.j0&&!(f===b.j0&&m===1))return y;let P=o.pat.t,D=b.t+(P[2*f+m]??P[2*f])-b.tpos;if(D-b.t>45)return y;let L=(y%1440+1440)%1440,z=((D-L+720)%1440+1440)%1440-720;return z>=-3&&z<=5?y+z:y}function r1(o,c,f,m){let y=hp(o,c);if(!y)return null;let b=Iu(o,c,f,1,y.t+o.pat.t[2*f+1]-y.tpos);return b-m.min>30||b<m.min-1?null:b}function oi(o,c){let f=ne(),m=(w()||U())&&f.live&&!c,y=Ft.get(E[o].id),b=[],P=new Map([...V.vp.values()].map(L=>[String((dt.get(L.tid)||{}).num||L.num),L]));if(m&&y&&y.d&&Array.isArray(y.d.trains)&&y.d.trains.length)for(let L of y.d.trains){let z=(L.departureDateHourSelectedStation||"").slice(11,16);if(!z)continue;let Y=String(L.commercialNumber||L.technicalNumber||""),p=P.get(Y),T=p?V.delays.get(p.tid):null,N=Math.max(typeof T=="number"?Math.max(0,T/60):0,p&&p.pre&&p.preDl||0),$=cp(z);$<f.min-720&&($+=1440);let ht=+(L.departureDateHourSelectedStation||"").slice(17,19)||0,Mt=$+ht/60,Q=p&&dt.get(p.tid)||Ya(Y),ft=Q?Q.pat.stops.indexOf(o):-1,K=ft>=0?(Q.t0+Q.pat.t[2*ft+1])%1440:null;if(K!=null){for(;K<Mt-720;)K+=1440;for(;K>Mt+720;)K-=1440;Math.abs(Mt-K)>120&&(K=null)}let fe,Me;K==null?(fe=ht||!N?Mt:Mt+N,Me=ht?0:N):ht||Math.abs(Mt-K)>=1?(fe=Mt,Me=Math.max(0,Mt-K)):(fe=K+N,Me=N);let Ht=!1;if(Q&&!p&&ft>0&&!ht){let Xe=t.days.indexOf(f.ymd),Ae=Q.day===Xe-1?1440:Q.day===Xe+1?-1440:0,pe=Q.t0+Q.pat.t[1]-Ae;if(f.min<pe){let fn=pe+(Q.pat.t[2*ft+1]-Q.pat.t[1]);fn>fe+1&&(fe=fn,Ht=!0,K!=null&&(Me=Math.max(0,fe-K)))}}if(K!=null&&($=Math.round(K)),p&&Q&&ft>=0){let Xe=Iu(Q,p,ft,1,fe);Xe!==fe&&(fe=Math.max(Xe,f.min),K!=null&&(Me=Math.max(0,fe-K)))}b.push({dubious:Ht,rodLive:!!ht,sm:$,est:fe,dl:Me,fam:(L.line||{}).id||"",dest:(L.destinationStation||{}).name||"",destId:(L.destinationStation||{}).id||"",plat:L.platformSelectedStation||"",cancel:!!L.trainCancelled,obs:L.trainObservations||"",live:!!p,num:Y,tid:p?p.tid:"",tr:p&&dt.get(p.tid)||Ya(Y),src:"oficial"})}else{let L=t.days.indexOf(f.ymd);if(L<0)return b;let z=(Y,p)=>{for(let T of Y){let N=T.pat.stops.indexOf(o);if(N<0||N===T.pat.stops.length-1)continue;let $=pt(T),ht=typeof $=="number"?Math.max(0,$/60):0,Mt=T.t0+T.pat.t[2*N+1]-p;if(Mt+ht<f.min-1||Mt>f.min+(f.min>1080||f.min<300?600:360))continue;let Q=T.pat.stops[T.pat.stops.length-1];b.push({sm:Mt,est:Mt+ht,dl:ht,fam:T.fam,dest:E[Q].n,destId:E[Q].id,plat:"",cancel:$==="X",obs:"",live:V.vp.has(T.tid),num:T.num,tid:T.tid,tr:T,src:"horario"})}};z(tt[L],0),L>0&&z(tt[L-1],1440),L+1<t.days.length&&f.min>1080&&z(tt[L+1],-1440)}if(m){let L=new Set(b.map(p=>String(p.num))),z=t.days.indexOf(f.ymd),Y=(p,T)=>{for(let N of p||[]){if(L.has(String(N.num)))continue;let $=N.pat.stops.indexOf(o);if($<0||$===N.pat.stops.length-1)continue;let ht=N.t0+N.pat.t[2*$+1]-T;if(ht<f.min-45||ht>f.min+1||!V.vp.get(N.tid))continue;let Q=V.delays.get(N.tid),ft=typeof Q=="number"?Math.max(0,Q/60):0,K=N.pat.stops[N.pat.stops.length-1];b.push({sm:ht,est:ht+ft,dl:ft,fam:N.fam,dest:E[K].n,destId:E[K].id,plat:"",cancel:!1,obs:"",live:!0,num:N.num,tid:N.tid,tr:N,src:"horario"})}};z>=0&&(Y(tt[z],0),z>0&&Y(tt[z-1],1440));for(let p of b){let T=p.tid&&V.vp.get(p.tid),N=p.tr?p.tr.pat.stops.indexOf(o):-1;p.passed=!!(T&&N>=0&&!T.pre&&T.next!=null&&T.next>=0&&T.next>N&&T.atStop!==N),!p.passed&&p.live&&p.est<f.min&&(p.est=f.min,p.late=!0),p.passed&&(p.gone=!0)}}let D=b.filter(L=>L.gone?f.min-L.est<20:L.est>=f.min-.5).sort((L,z)=>L.est-z.est);{let L=D.filter(z=>z.gone);if(L.length>2){let z=new Set(L.slice(0,L.length-2));D=D.filter(Y=>!z.has(Y))}}if(!D.filter(L=>!L.gone).length&&b.length&&b[0].src==="oficial"&&!c)return oi(o,!0);for(let L of D){let z=L.num&&Eu(L.num);z&&z.cx&&(L.cancel=!0,L.cxWhy=z.txt)}if(w()&&f.live){let L=t.days.indexOf(f.ymd);for(let z of D){if(z.live||z.cancel||!z.tr)continue;let Y=z.tr.day===L-1?1440:z.tr.day===L+1?-1440:0,p=z.tr.t0+z.tr.pat.t[1]-Y+(z.dl||0);z.noPos=f.min>p+3&&!z.rodLive,z.ghost=z.noPos&&Za(z.fam)>=.7}}if(c||(D=D.concat(A(o,f.min-.5,f.min+360)).sort((L,z)=>L.est-z.est)),!c&&D.some(L=>L.src==="oficial")){let L=b.filter(p=>p.src==="oficial"),z=Math.max(...L.map(p=>p.sm)),Y=new Set(D.map(p=>String(p.num)));D=D.concat(oi(o,!0).filter(p=>!p.gone&&p.sm<=z&&p.est>=f.min-.5&&!Y.has(String(p.num))).map(p=>Object.assign(p,{unconf:!0}))).sort((p,T)=>p.est-T.est)}if(D.some(L=>L.src==="oficial")){let L=Math.max(...D.map(Y=>Y.sm)),z=new Set(D.map(Y=>String(Y.num)));D=D.concat(oi(o,!0).filter(Y=>Y.sm>L&&!z.has(String(Y.num))))}return D}let up=(o,c,f,m)=>{let y={key:o,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let b=JSON.parse(localStorage.getItem("rod_"+o)||"null");b&&Object.assign(y,b)}catch{}return!y.st.length&&m&&(y.st=m),y},on=up("home","\u{1F3E0}",__t(287),null),Ze=up("work","\u{1F4BC}",__t(288),null),Lt={key:"near",ico:"\u{1F4CD}",name:__t(289),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},ar=[Lt,on,Ze];try{Lt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}on.open=!1,Ze.open=!1;function dp(o,c){let f=St(o,c),m=St(o,c+.009);return 1/Math.hypot(m[0]-f[0],m[1]-f[1])}function Pu(o){if(!navigator.geolocation){Lt.err=__t(290),De(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:m}=c.coords,y=St(f,m),b=dp(f,m),P=E.map((Y,p)=>[p,Math.hypot(Y.w[0]-y[0],Y.w[1]-y[1])*b]).filter(([Y])=>E[Y].fams.size).sort((Y,p)=>Y[1]-p[1]),D=P.filter(([,Y],p)=>p===0||Y<Math.max(2.5,P[0][1]*1.6)).slice(0,3),L=Lt.st[0]!==E[D[0][0]].id;Lt.w=y,Lt.k=b,Lt.acc=c.coords.accuracy!=null?c.coords.accuracy:999,Lt.st=D.map(([Y])=>E[Y].id),Lt.dist=Object.fromEntries(D.map(([Y,p])=>[E[Y].id,p])),Lt.fix=Date.now(),Lt.err="",L&&(Lt.i=0);let z=[on,Ze].find(Y=>Y.st.includes(Lt.st[0])&&Lt.dist[Lt.st[0]]<1.5);De(!0)},c=>{Lt.err=c.code===1?__t(291):__t(292),De(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let fp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Pu(!0),400);let Dt={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===vt(new Date).ymd&&(Dt.tid=o.tid,Dt.manual=o.manual||0,Dt.lock=!!o.lock)}catch{}let pp="";setInterval(()=>{let o=Dt.tid+"|"+(Dt.manual||0)+"|"+(Dt.lock?1:0);if(o!==pp){pp=o;try{Dt.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:Dt.tid,manual:Dt.manual||0,lock:!!Dt.lock,at:Date.now(),ymd:vt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let li={num:"",until:0};function Ol(o){return!!o&&(Ot===o||o.num!=null&&[...Rn.values()].some(c=>String(c)===String(o.num)))}let mp=()=>{let o=new Set([...Rn.values()].map(String));return li.num&&li.until>Date.now()&&o.add(li.num),o};function Lu(o,c){o=String(o),Dt.tid&&Dt.tid!==o&&Dt.no.set(Dt.tid,Date.now()+20*6e4),Dt.tid=o,Dt.cand=null,Dt.lock=c==="lock",Dt.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),c!=="auto"&&[...Rn].forEach(([y,b])=>{String(b)!==o&&Us(y,null)}),li.num=o,li.until=Date.now()+90*6e4;let f=new Set;for(let y of ar){let b=jn(y);b!=null&&(y.platAt||y.goAt||y===Lt&&Lt.st&&Lt.st.length)&&f.add(b)}for(let y of ar)(y.platAt||y.goAt)&&(y.platAt=0,y.goAt=0,pi(y));let m=re.find(y=>y.tr&&String(y.tr.num)===o)||C(ne()).out.find(y=>y.tr&&String(y.tr.num)===o);if(m){Ot=m.tr;let y=m.tr.pat.stops,b=m.real?m.v.next:m.p.next,P=[...on.st,...Ze.st,...Bl.keys()],D=y.findIndex((L,z)=>z>=b&&!f.has(L)&&P.includes(E[L].id));D>0&&!(Le&&Le.num===o)&&(Le={num:o,sid:E[y[D]].id,at:Date.now()},rr())}return m}function q0(){let o=Dt.fixes;if(o.length<2)return;let c=o[o.length-1],f=o.slice().reverse().find(N=>c.t-N.t>=8e3&&c.t-N.t<=9e4);if(!f)return;let m=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,y=c.spd!=null&&c.spd>0?c.spd*3.6:m/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(Dt.tid&&!Dt.lock&&y<8){if(!Dt.slow)Dt.slow=c.t;else if(c.t-Dt.slow>9e4&&E.some(N=>N.w&&Math.hypot(N.w[0]-c.w[0],N.w[1]-c.w[1])*c.k<.35)){Dt.tid="",Dt.manual=0,Dt.lock=!1,Dt.slow=0,Dt.quiet=Date.now()+10*6e4,Ot=null,De(!0);return}}else Dt.slow=0;if(!Dt.tid&&Dt.quiet&&Date.now()<Dt.quiet||Dt.manual&&Date.now()<Dt.manual)return;if(Dt.tid){if(y<22)return;let N=re.find($=>$.tr&&String($.tr.num)===Dt.tid)||C(ne()).out.find($=>$.tr&&String($.tr.num)===Dt.tid);if(N){if(Math.hypot(N.p.w[0]-c.w[0],N.p.w[1]-c.w[1])*c.k<=5){Dt.far=0;return}if(Dt.far||(Dt.far=c.t),c.t-Dt.far<12e4)return}Dt.far=0}let b=mp();if(!Dt.tid&&b.size&&y>=15&&y<=200&&!(c.acc!=null&&c.acc>80))for(let N of[...re.filter($=>$.real),...C(ne()).out]){if(!N.tr||!b.has(String(N.tr.num))||(Dt.no.get(String(N.tr.num))||0)>Date.now())continue;if(Math.hypot(N.p.w[0]-c.w[0],N.p.w[1]-c.w[1])*c.k<=(N.real?1.6:2.2)){gp(N);return}}if(y<22||y>200)return;let P=[c.w[0]-f.w[0],c.w[1]-f.w[1]],D=null,L=2.5,z=re.filter(N=>N.real),Y=C(ne()).out.filter(N=>N.tr&&!z.some($=>$.tr&&String($.tr.num)===String(N.tr.num))),p=mp();for(let N of[...z,...Y]){if(!N.tr||p.size&&!p.has(String(N.tr.num)))continue;let $=N.real?2.5:3.5,ht=Math.hypot(N.p.w[0]-c.w[0],N.p.w[1]-c.w[1])*c.k;if(ht>Math.min(L,$)||D&&D.real&&!N.real)continue;let Mt=N.real?N.v.next:N.p.next;if(Mt==null||Mt<0)continue;let Q=E[N.tr.pat.stops[Mt]].w,ft=[Q[0]-N.p.w[0],Q[1]-N.p.w[1]];if(ft[0]*P[0]+ft[1]*P[1]<=0)continue;let K=String(N.tr.num);(Dt.no.get(K)||0)>Date.now()||(L=ht,D=N)}if(!D){Dt.cand=null;return}let T=String(D.tr.num);if(Dt.tid!==T&&!(c.acc!=null&&c.acc>50)){if(!Dt.cand||Dt.cand.k!==T){Dt.cand={k:T,t:c.t};return}c.t-Dt.cand.t<2e4||gp(D)}}function gp(o){let c=String(o.tr.num);Lu(c,"auto"),Nt=xe=At=!1,ge=-1,wt=o.tr,Ot=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click()),kn(),d._h="",ke(),Se=0,a();let f=x("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(293)}${_(o.tr.fam)} ${_(o.tr.num)}${__t(294)}${_(E[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(295)}${Le&&Le.num===c?`${__t(297)}${_(E[qt.get(Le.sid)].n)}`:""}${__t(296)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{Dt.no.set(c,Date.now()+20*6e4),Dt.tid="",Dt.lock=!1,Ot=null,wt=null,d._h="",ke(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=()=>{o==null&&(o=navigator.geolocation.watchPosition(m=>{let{longitude:y,latitude:b}=m.coords,P={t:m.timestamp||Date.now(),w:St(y,b),k:dp(y,b),spd:m.coords.speed,acc:m.coords.accuracy};Dt.fixes.push(P),Dt.fixes=Dt.fixes.filter(D=>P.t-D.t<12e4);try{ne().live&&q0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},f=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(c,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?f():(Dt.fixes=[],c())})}setInterval(()=>{!document.hidden&&(Date.now()-Lt.fix>11e4||ar.some(o=>o.goAt))&&Pu(!1)},3e4);let pi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},jn=o=>o.st.length?qt.get(o.st[o.i]||o.st[0]):null;function _p(o,c,f,m){if(m&&c.bus)return c.bstops.slice(1).some(P=>m.has(P))?"to":"out";if(m&&c.tr){let P=c.tr.pat.stops,D=P.indexOf(o);if(D>=0&&P.slice(D+1).some(L=>m.has(L)))return"to"}if(m&&c.tr)return"out";let y=qt.get(c.destId)??E.findIndex(P=>P.n===c.dest);if(y<0||y==null||f==null)return"otros";let b=P=>Math.hypot(E[P].w[0]-E[f].w[0],E[P].w[1]-E[f].w[1]);return b(y)<b(o)?"to":"out"}let or=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),xp=0,Y0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,vp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,yp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Ka=o=>{let c=o.es||o.txt;return vp.test(c)||vp.test(o.txt)?3:yp.test(c)||yp.test(o.txt)||o.lvl>=2?2:1},Sp=4,Du=new Map,Bl=new Map;function Mp(o,c){let f=t.days.indexOf(ne().ymd),m=f+"|"+o+"|"+[...c].join(",");if(Du.has(m))return Du.get(m);let y=!1,b=new Set,P=new Set;for(let L of tt[f]||[]){let z=L.pat.stops,Y=z.indexOf(o);if(Y>=0)for(let T=Y+1;T<z.length;T++){if(c.has(z[T])){y=!0;break}b.add(z[T])}let p=-1;for(let T=1;T<z.length;T++)if(c.has(z[T])){p=T;break}if(p>0)for(let T=0;T<p;T++)P.add(z[T])}let D=y?null:[...b].filter(L=>P.has(L)&&L!==o&&!c.has(L));return Du.set(m,D),D}function Nu(o,c,f,m){for(let y of m||oi(o)){if(y.cancel||y.gone||!y.tr||y.est<c-.01)continue;let b=y.tr.pat.stops,P=b.indexOf(o);if(P<0)continue;let D=-1;for(let L=P+1;L<b.length;L++)if(f.has(b[L])){D=L;break}if(!(D<0))return{c:y,fin:y.est+(y.tr.pat.t[2*D]-y.tr.pat.t[2*P+1])}}return null}function J0(o,c,f){let m=Nu(o,c+2,f,oi(o));return m?{c:m.c,fin:m.fin,m:m.c.est-c,lost:!1}:null}function Uu(o,c,f,m,y){let b=null,P=new Map,D=oi(o).filter(L=>!L.cancel&&!L.gone&&L.tr&&L.est-y.min>=m).slice(0,8);for(let L of D){let z=L.tr.pat.stops,Y=z.indexOf(o);if(!(Y<0))for(let p of f){let T=z.indexOf(p);if(T<=Y)continue;let N=L.est+(L.tr.pat.t[2*T]-L.tr.pat.t[2*Y+1]);P.has(p)||P.set(p,oi(p));let $=Nu(p,N+Sp,c,P.get(p));$&&(!b||$.fin<b.finAt-.01||Math.abs($.fin-b.finAt)<.01&&L.est>b.x.est)&&(b={T:p,x:L,finAt:$.fin})}}return b}function Z0(o,c,f,m,y){let b=c.T,P=oi(b),D=c.fin,L=[];for(let p of P){if(L.length>=5)break;if(p.cancel||p.gone||!p.tr)continue;let T=p.tr.pat.stops,N=T.indexOf(b),$=-1;for(let Q=N+1;Q<T.length;Q++)if(D.has(T[Q])){$=Q;break}if($<0||f.x&&f.x.arr!=null&&p.est<f.x.arr-.01)continue;let ht=p.est+(p.tr.pat.t[2*$]-p.tr.pat.t[2*N+1]),Mt=m&&m.c===p;L.push(`<li class="hr${Mt?" pin":""}" style="--lc:${W[p.fam]||"#6b7385"}"><span class="hrt"><b>${nt(p.est)}</b><small>${f.x&&f.x.arr!=null?p.est-f.x.arr<2?__t(298):Math.floor(p.est-f.x.arr)+" "+__t(299):""}</small></span><span class="hrd">${bi(p.fam+" \xB7 "+p.dest,p.fam)}<small class="hro">${__t(300)} ${nt(ht)}${p.num?" \xB7 "+__t(301)+_(p.num):""}</small></span><span class="hrm">${p.dl>=1?`<em class="dl ${Pi(p.dl)}">+${Math.round(p.dl)}</em>`:""}${p.plat?`${__t(228)}${_(p.plat)}</i>`:""}</span></li>`)}let z=(()=>{let p=[];for(let T of c.cands){let N=Uu(jn(o),D,[T],0,y);N&&p.push([T,N.finAt])}return p.sort((T,N)=>T[1]-N[1]),p.filter(([T,N])=>N<=p[0][1]+30||c.fixed&&T===b).slice(0,4)})(),Y=z.length>1||c.fixed?`<div class="hxst"><span>${__t(302)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(303)}</button>${z.map(([p])=>`<button type="button" data-hxf="${o.key}:${_(E[p].id)}" class="${c.fixed&&p===b?"on":""}">${_(E[p].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(302)} ${bi(E[b].n,m?m.c.fam:"")} \u2192 ${_(c.finName)}</div><ol class="hxl">${L.join("")||`<li class="hr"><span class="hrd">${__t(304)}</span></li>`}</ol>${Y}</div>`}let bp=new Set;function j0(o,c,f){bp.has(o)||(bp.add(o),Dp(c,f,o))}function K0(o,c,f){let m=jn(o);if(o===Lt){if(Dt.tid)return"";if(m==null)return`${__t(305)}${Lt.err?_(Lt.err)+__t(306):__t(307)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([on,Ze].find(Ut=>Ut.st.includes(Lt.st[0])&&Lt.dist[Lt.st[0]]<1.5)||Date.now()-Lt.fix>10*6e4)return"";o.walk=fp(Lt.dist[o.st[o.i]]||0)}if(m==null){let it=Lt.st.length?qt.get(Lt.st[0]):null,Ut=o===Ze?on:Ze,se=it!=null&&!Ut.st.includes(Lt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${se?`${__t(308)}${_(E[it].n)}</b>`:__t(309)}</small></span>${se?`<button type="button" class="hpick" data-hnear="${o.key}${__t(310)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${se?__t(311):__t(312)}</button></div></div>`}lp(m,()=>De(!0));let y=o===Lt?null:o===on?Ze:on,b=y?jn(y):null,P=b!=null&&b!==m?b:X0,D=b!=null&&b!==m?y===Ze?__t(313):"casa":"Barcelona",L=E[m].fams,z=new Set([...L].filter(it=>ct.has(it))),Y=z.size<L.size,p=!1;z.size||(z=new Set(L),Y=!1,p=!0);let T=Lt.w?Math.hypot(E[m].w[0]-Lt.w[0],E[m].w[1]-Lt.w[1])*Lt.k:null,N=T!=null&&Date.now()-Lt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,pi(o));let $=o!==Lt&&!!o.platAt,ht=o===Lt||N&&T>3&&!o.goAt&&!$,Mt=$||o!==Lt&&N&&(T<.08&&Lt.acc<=40||T<.15&&Lt.acc<=100&&Date.now()-Lt.fix<3*6e4)&&!(o===on&&Lt.homeW&&Math.hypot(Lt.homeW[0]-Lt.w[0],Lt.homeW[1]-Lt.w[1])*Lt.k<.05),Q=o.goAt?(Date.now()-o.goAt)/6e4:null;Q!=null&&(Q>60||Mt)&&(o.goAt=0,pi(o));let ft=!Mt&&o!==Lt&&!!o.goAt,K=ft?N&&T<=3?fp(T):Math.max(0,o.walk-Q):0,fe=oi(m),Me=fe.filter(it=>!W[it.fam]||ct.has(it.fam)||p),Ht=ht||Mt?0:ft?K:o.walk,Xe=V.alerts.filter(it=>[...it.fams].some(Ut=>z.has(Ut))||it.stops&&it.stops.has(m)),Ae=Xe.some(it=>Y0.test(it.es||it.txt)),pe={to:[],out:[],otros:[],all:Me},fn=D!=="Barcelona"?new Set(y.st.map(it=>qt.get(it)).filter(it=>it!=null)):null,Oe=null;if(fn&&o!==Lt){let it=Mp(m,fn);if(it&&it.length){let Ut=o.xfer!=null?qt.get(o.xfer):null,se=Ut!=null&&it.includes(Ut)?[Ut]:it,me=Uu(m,fn,se,Ht,c);me&&(Oe=Object.assign(me,{fin:fn,finName:E[P].n,cands:it,fixed:Ut!=null&&it.includes(Ut)}),lp(me.T,()=>De(!0)),P=me.T,fn=new Set([me.T]))}}Me.forEach(it=>pe[_p(m,it,P,fn)].push(it));let mi="";if(fn&&!pe.to.length&&Me.length<fe.length){let it=fe.filter(Ut=>!Me.includes(Ut)&&_p(m,Ut,P,fn)==="to");it.length&&(pe.to=it,mi=[...new Set(it.map(Ut=>Ut.fam))].sort(F).join(", "))}let Wl=it=>{if(it==="all")return __t(314);let Ut=me=>(me.find(Pn=>Pn.fam)||{}).fam;if(it==="to")return __t(315)+bi(D==="Barcelona"?"Barcelona":E[P].n,Ut(pe.to)||[...z][0])+(()=>{let me=Y&&!mi?[...z].filter(Pn=>pe.to.some(xs=>xs.fam===Pn)).sort(F):[];return me.length?`<span class="hwf" title="${__t(316)}">${me.map(Cn).join("")}</span>`:""})();let se=[];for(let me of pe[it])se.some(Pn=>Pn[0]===me.dest)||se.push([me.dest,me.fam]);return se.length?__t(315)+se.slice(0,2).map(([me,Pn])=>bi(me,Pn)).join(" "):__t(317)},dr=Rn.get(o.key);dr&&!fe.some(it=>String(it.num)===dr&&!it.gone)&&(li.num=dr,li.until=Date.now()+90*6e4,Us(o.key,null));let Hr=it=>{let Ut=dr&&pe[it].find(un=>String(un.num)===dr&&!un.gone);if(Ut&&Ut.cancel)return{cls:"v-miss",pin:1,x:Ut,big:__t(318),small:`${nt(Ut.est)} \xB7 ${Ut.fam}${__t(319)}${Ut.dest}${Ut.num?" \xB7 "+__t(301)+Ut.num:""}`,warn:""};let se=Ut||pe[it].find(un=>!un.cancel&&!un.gone&&un.est-c.min>=Ht);if(!se){let un=pe[it].find(fr=>!fr.cancel);return un&&!ht?{cls:"v-miss",big:__t(320),small:`${__t(321)}${nt(un.est)}${__t(322)}${or(un.est-c.min)}${__t(323)}`}:{cls:"v-no",big:__t(324),small:__t(325)}}let me=se.est-c.min-Ht,Pn=ht||Mt?"v-info":ft?me<1.5?"v-warn":"v-ok":me<1.5?"v-bad":me<5?"v-warn":"v-ok",xs=se.ghost?pe[it].find(un=>!un.cancel&&!un.ghost&&un.live&&un.est>se.est):null;if(Ut&&me<0&&!ht&&!Mt){let un=pe[it].find(fr=>!fr.cancel&&!fr.gone&&!fr.ghost&&fr!==se&&fr.est-c.min>=Ht);return{cls:"v-miss",pin:1,miss:1,nxt:un,x:se,ghost:!!se.ghost,big:__t(326),small:`${nt(se.est)} \xB7 ${se.fam}${__t(319)}${se.dest}${se.plat?__t(140)+se.plat:""}${se.num?" \xB7 "+__t(301)+se.num:""}`,warn:un?`\u27A1\uFE0F ${__t(327)}: ${un.est-c.min-Ht<1?__t(328):__t(329)+" "+or(un.est-c.min-Ht)} \xB7 ${nt(un.est)}${un.arr!=null?" \u2192 "+nt(un.arr):""}${un.plat?__t(140)+un.plat:""}${un.num?" \xB7 "+__t(301)+un.num:""}`:""}}return{pin:Ut?1:0,cls:Pn,ghost:!!se.ghost,big:ht||Mt?me<1?__t(330):__t(331)+or(me):ft?me<1.5?__t(332):__t(333)+or(me)+__t(334):me<1.5?__t(335):__t(336)+or(me),warn:se.unconf?"\u26A0\uFE0F "+__t(337):Ut&&!se.live&&se.rodLive&&!se.ghost?"\u{1F4E1} "+__t(338):!se.ghost&&se.noPos&&Ut?"\u{1F4E1} "+__t(339):!se.ghost&&se.late&&Ut?__t(340):se.ghost?`\u26A0\uFE0F ${__t(341)}${xs?`${__t(342)}${nt(xs.est)}`:""}`:Ae?__t(343):"",small:`${se.bus?__t(344):""}${nt(se.est)} \xB7 ${se.fam}${__t(319)}${se.dest}${se.plat?__t(140)+se.plat:""}${se.dl>=1?` \xB7 +${Math.round(se.dl)} min`:""}${se.arr!=null?`${__t(345)}${nt(se.arr)}`:""}${se.num?" \xB7 "+__t(301)+se.num:""}`,x:se}},g_=fn||new Set([P]),__=it=>{let Ut=it.tr;if(!Ut)return null;let se=Ut.pat.stops,me=se.indexOf(m);if(me<0)return null;let Pn=-1;for(let xs=me+1;xs<se.length;xs++)if(g_.has(se[xs])){Pn=xs;break}return Pn<0?null:it.est+(Ut.pat.t[2*Pn]-Ut.pat.t[2*me+1])};pe.to.forEach(it=>{it.arr=__(it)});let Xl=pe.out.length?"out":"otros",tn=Hr("to"),so=Hr(Xl);if(Mt||o===Lt&&Lt.acc<=40&&(Lt.dist[o.st[o.i]]||9)<.08){for(let it of[tn.x,so.x].concat(o===Lt?[Hr("all").x]:[]))if(it&&Rn.has(o.key)&&String(Rn.get(o.key))===String(it.num)&&!it.cancel&&it.est-c.min<=2&&it.est-c.min>-.5){let Ut="w"+it.num+"|"+Math.round(it.sm);Lp.has(Ut)||(Lp.add(Ut),Pl(`${__t(346)}${it.fam}${__t(319)}${it.dest}`,`${Math.round(it.est-c.min)<=1?__t(347):__t(348)+Math.round(it.est-c.min)+" min"}${__t(319)}${E[m].n}${it.plat?__t(140)+it.plat:""}`))}}let Wp=w()&&c.live,Xp=z.size===1,x_=it=>{let Ut=it.est-c.min;return ht?it.cancel?"cx":Ut<0?"u-miss":"u-info":it.cancel?"cx":Ut<Ht?"u-miss":Ut<Ht+1.5?"u-now":Ut<Ht+5?"u-soon":"u-ok"},v_=it=>{if(it.gone)return`<li class="hr u-gone${it.live?" on":""}${Va(it)?" sel":""} go" data-dk="${f.push(it)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${nt(it.est)}${__t(349)}${hs(Math.max(1,Math.round(c.min-it.est))+" min")}</small></span><span class="hrd">${bi((Xp?"":it.fam+" \xB7 ")+it.dest,it.fam)}${__t(350)}${_(it.num)}</small></span><span class="hrm">${it.dl>=1?`<em class="dl ${Pi(it.dl)}">+${Math.round(it.dl)}</em>`:""}</span></li>`;let Ut=!it.cancel&&it.est-c.min<Ht,se=Cu(it.num,"");return`<li class="hr ${x_(it)}${it.live?" on":""}${it.ghost?" gh":""}${Va(it)?" sel":""}${dr&&String(it.num)===dr?" pin":""}${Li.some(me=>{let Pn=Tu(me,t.days.indexOf(c.ymd));return Pn&&String(Pn.num)===String(it.num)})?" fav":""} go" style="--lc:${W[it.fam]||"#6b7385"}" data-dk="${f.push(it)-1}" title="${it.cancel?__t(318):Ut?__t(326):__t(351)}"><span class="hrt"><b>${it.cancel?"\u2715":Ut?nt(it.est):or(it.est-c.min)}</b><small>${it.cancel?__t(352):it.late?__t(353):Ut?__t(354):it.ghost?__t(355):nt(it.est)}</small></span><span class="hrd">${it.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${bi((Xp?"":it.fam+" \xB7 ")+it.dest,it.fam)}${se.length?`<i class="cr" title="${_(se.map(me=>Nl(me.kind)).join(" \xB7 "))}">${se.slice(0,2).map(me=>Dl[me.kind]).join("")}</i>`:""}${it.arr!=null?`${__t(356)}${nt(it.arr)}${it.num?" \xB7 "+__t(301)+_(it.num):""}${(()=>{let me=it.num&&wu(it.num);return me&&me.n>=3&&me.late/me.n>=.5?`${__t(357)}${me.late}/${me.n})</b>`:""})()}</small>`:""}${it.obs?`<small class="hro">${_(it.obs)}</small>`:""}${it.unconf?`<small class="hro unc">${__t(358)}</small>`:""}</span><span class="hrm">${!it.cancel&&it.dl>=1?`<em class="dl ${Pi(it.dl)}">+${Math.round(it.dl)}</em>`:""}${it.plat?`${__t(228)}${_(it.plat)}</i>`:""}</span></li>`},ro=(it,Ut,se)=>`<div class="hcol"><div class="hdir">${Wl(it)}${se?`<button type="button" class="hhide" data-hhide="${o.key}:${se}" title="${__t(359)}">\u2715</button>`:""}</div><div class="hv ${Ut.cls}${Ut.ghost||Ut.pin&&Ut.x&&Ut.x.noPos&&!Ja([Ut.x.fam]).length?" gh":""}${Ut.x?" go":""}"${Ut.miss&&Ut.nxt&&Ut.nxt.num?` data-pinnext="${o.key}:${_(Ut.nxt.num)}" title="${__t(360)}"`:Ut.x?` data-dk="${f.push(Ut.x)-1}"`:""}><b>${Ut.big}</b>${Ut.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(361)}">\u{1F4CC} ${__t(362)} \u2715</button>`:""}<small>${_(Ut.small)}</small>${Ut.pin&&Ut.x&&Ut.x.num?(me=>me?`<span class="hwhere">\u{1F4CD} ${_(me)}</span>`:"")(zu(Ut.x.num)):""}${Ut.warn?`<span class="hvw">${_(Ut.warn)}</span>`:""}</div><ol>${pe[it].slice(0,(o.more?it==="all"||o.hide?20:10:it==="all"?7:o.hide?8:4)+pe[it].filter(me=>me.gone).length).map(v_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Lt){let it=Hr("all");var y_=it.x?`<span class="nw">${it.big}</span> \xB7 <span class="nw"><b>${nt(it.x.est)}</b> ${_(it.x.fam)}${__t(363)}${_(it.x.dest)}${it.x.plat?'<span class="nw">'+__t(140)+_(it.x.plat)+"</span>":""}`:it.big}let je=Oe&&tn.x&&tn.x.arr!=null?J0(Oe.T,tn.x.arr,Oe.fin):null;if(je){let it=o._xc;it&&it.leg===String(tn.x.num)&&it.conn!==String(je.c.num)&&it.est<je.c.est&&it.live?(je.lost=!0,je.missed=it.est):(!it||it.leg!==String(tn.x.num)||!it.live||it.conn===String(je.c.num))&&(o._xc={leg:String(tn.x.num),conn:String(je.c.num),est:je.c.est,live:!!(V.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}je&&(Bl.set(E[Oe.T].id,{fam:je.c.fam,est:je.c.est,plat:je.c.plat,lost:je.lost}),je.lost&&Rn.get(o.key)===String(tn.x.num)&&j0("xf"+tn.x.num+"|"+je.c.num,`\u21C4 ${__t(364)} ${E[Oe.T].n}`,`${__t(365)}: ${je.c.fam} ${nt(je.c.est)} \u2192 ${nt(je.fin)}${je.c.plat?" \xB7 v\xEDa "+je.c.plat:""}`));let S_=je?`<br><span class="nw hxf ${je.lost?"xbad":je.m<4?"xwarn":"xok"}">\u21C4 ${je.lost?`${__t(366)} ${nt(je.missed)} \xB7 ${__t(142)} `:`${_(E[Oe.T].n)} \xB7 `}${Cn(je.c.fam)} <b>${nt(je.c.est)}</b> \u2192 <b>${nt(je.fin)}</b>${je.lost?"":` \xB7 ${Math.floor(je.m)} ${__t(367)}`}</span>`:Oe?`<br><span class="nw hxf xbad">\u21C4 ${__t(368)} ${_(E[Oe.T].n)}</span>`:"",M_=o===Lt?y_:Oe&&tn.x?`<span class="nw">${tn.big}${tn.x.plat?__t(140)+_(tn.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(tn.x.est)}</b>${tn.x.arr!=null?` \u2192 ${_(E[Oe.T].n)} <b>${nt(tn.x.arr)}</b>`:""}</span>${S_}`:tn.x?`<span class="nw">${tn.big}${tn.x.plat?__t(140)+_(tn.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(tn.x.est)}</b>${tn.x.arr!=null?`${__t(370)}${nt(tn.x.arr)}</b>`:""}${__t(369)}${_(D)}</span>`:__t(371)+_(D),qe=o===Lt?(it=>it.pin?it:null)(Hr("all")):tn.pin?tn:so.pin?so:null;qe&&qe.x&&Rn.has(o.key)&&Np(qe,E[m].n);let b_=qe?o===Lt?"all":qe===tn?"to":Xl:"",Gr=!!(qe&&(qe.ghost||qe.x.noPos&&!Ja([qe.x.fam]).length||qe.x.cancel)),Zu=!!(qe&&qe.miss),Wr=Gr?pe[b_].find(it=>!it.cancel&&!it.ghost&&!it.gone&&it.est>qe.x.est-.01&&it!==qe.x&&it.est-c.min>=(ht||Mt?0:Ht)):null,w_=Zu?`<span class="nw">${__t(372)} <b>${nt(qe.x.est)}</b></span>${qe.nxt?`<br><span class="nw hnx">${__t(365)} <b>${nt(qe.nxt.est)}</b>${qe.nxt.arr!=null?` \u2192 <b>${nt(qe.nxt.arr)}</b>`:""}</span>`:""}`:"",E_=Gr?`<span class="nw">\u26A0\uFE0F ${qe.x.cancel?__t(318):qe.ghost?__t(373):__t(374)}</span>${qe.x.cancel?"":` \xB7 <span class="nw"><b>${nt(qe.x.est)}</b>${qe.x.arr!=null?` \u2192 <b>${nt(qe.x.arr)}</b>`:""}</span>`}${Wr?` \xB7 <span class="nw">${__t(142)} <b>${nt(Wr.est)}</b>${Wr.arr!=null?` \u2192 <b>${nt(Wr.arr)}</b>`:""}${Wr.plat?__t(140)+_(Wr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${qe?" pinned":""}${Gr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${_(E[m].n)}${qe&&qe.x.num?`<i class="hpn">\u{1F4CC} ${_(qe.x.num)}</i>`:""}</b><small class="c${Zu||Gr&&qe.x.cancel?"bad":Gr?"warn":Ae?"bad":tn.cls.slice(2)}">${Gr?E_:Zu?w_:M_}</small>${qe&&qe.x&&qe.x.num?(it=>it?`<small class="nofit hwh2">\u{1F4CD} ${_(it)}</small>`:"")(zu(qe.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((it,Ut)=>{let se=qt.get(it);return se==null?"":`<button type="button" data-hs="${o.key}:${Ut}" class="${Ut===o.i?"on":""}">${_(E[se].n)}</button>`}).join("")}</div>`:""}
        ${o===Lt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let it=Lt.dist[o.st[o.i]]||0;return it<1?Math.round(it*100)*10+" m":it.toFixed(1).replace(".",",")+" km"})()}${__t(376)}${o.walk}${__t(377)}`:""}
        ${$?`<div class="hwalk away">${__t(379)}<a data-hplat="${o.key}${__t(378)}`:Mt?`${__t(380)}${o.key}${__t(381)}`:ft?`${__t(382)}${Math.round(K)} min</b>${N&&T<=3?__t(383):""} \xB7 <a data-hgo="${o.key}${__t(378)}`:""}${ht&&o!==Lt?`${__t(384)}${T<10?T.toFixed(1).replace(".",","):Math.round(T)}${__t(385)}`:""}<div class="hwalk"${ht||Mt||ft?" hidden":""}><button type="button" class="hgo" data-hgo="${o.key}:1">\u{1F6B6} ${__t(386)}</button><button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(387)}</button><span class="hstep" title="${__t(388)}">${__t(389)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(390)}</span></div>
        ${(()=>{let it=Li.filter(Ut=>o.st.includes(Ut.sid));return it.length?`<div class="hfav">${it.map(Ut=>{let se=Tu(Ut,t.days.indexOf(c.ymd)),me=se&&Me.find(Pn=>String(Pn.num)===String(se.num));return`\u2B50 <b>${Ut.t}</b> ${_(Ut.fam)} ${me?me.cancel?__t(391):me.gone?__t(225):me.dl>=1?`<em class="dl ${Pi(me.dl)}">+${Math.round(me.dl)}${__t(392)}${nt(me.est)}`:__t(393):__t(394)}`}).join("<br>")}</div>`:""})()}
        ${Y&&mi?`${__t(395)}${[...z].sort(F).map(Cn).join(" ")}${__t(396)}${D}${__t(397)}${mi}${__t(398)}`:p?`${__t(399)}${[...ct].sort(F).slice(0,3).map(Cn).join(" ")}${__t(400)}`:""}
        ${Xe.length?`<div class="hal ${Ae?"bad":""}${Hu.v?" open":""}" data-halx>\u26A0\uFE0F ${Wa(Xe[0])} ${_(Xe[0].txt)} <small>${Xa(Xe[0])}</small>${Xe.length>1?` <a data-hal>+${Xe.length-1}${__t(401)}`:""}</div>`:`${__t(402)}${[...z].sort(F).join(", ")}</div>`}
        ${(()=>{let it=o.st.flatMap(Ut=>Cu("",Ut));return it.length?`<div class="hcr">${it.slice(0,3).map(Ut=>`${Dl[Ut.kind]} <b>${_(Nl(Ut.kind))}</b> <small>${Ut.up>1?Ut.up+__t(269):""}${sp(Ut)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Lt?`<div class="hcols one">${ro("all",Hr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${ro("to",tn)}</div><a class="hshow" data-hshow="${o.key}${__t(403)}`:o.hide==="to"?`<div class="hcols one">${ro(Xl,so)}</div><a class="hshow" data-hshow="${o.key}${__t(403)}`:`<div class="hcols">${ro("to",tn,"to")}${ro(Xl,so,"out")}</div>`}
        ${Oe?Z0(o,Oe,tn,je,c):""}
        ${Me.length>(o===Lt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(404):__t(405)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Wp?Ft.get(E[m].id)?.d?__t(406):__t(407):__t(408)} \xB7 \u25CF = ${__t(409)}">${Wp?Ft.get(E[m].id)?.d?__t(410):__t(411):__t(224)}</span><a data-hmap="${m}${__t(375)}${o===Lt?__t(412):`<a data-hset="${o.key}${__t(413)}`}${o===Ze?`${__t(414)}`:""}</div>
      </div>`:"")+"</div>"}let Ni={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},wp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ep=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,lr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),kl=()=>{let o=new Set;return[...on.st,...Ze.st].forEach(c=>{let f=qt.get(c);f!=null&&E[f].fams.forEach(m=>o.add(m))}),[...o].sort(F)},Qa=()=>({stations:[...on.st,...Ze.st],lines:kl().filter(o=>!lr.has(o))}),Q0=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function Tp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Ap(o){let f=await(await fetch(le()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...Qa()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Fu(){let o=jn(on),c=jn(Ze);if(o==null||c==null)return o!=null?on:c!=null?Ze:null;if(Lt.w&&Date.now()-Lt.fix<3*36e5){let f=m=>Math.hypot(E[m].w[0]-Lt.w[0],E[m].w[1]-Lt.w[1]);return f(o)<=f(c)?on:Ze}return new Date().getHours()<13?on:Ze}function Cp(o){let c=Fu(),f=c===on?Ze:on,m=c&&jn(c),y=f&&jn(f);if(m==null||y==null)return!0;let b=(o.es||"")+" "+(o.txt||""),P=t.days.indexOf(ne().ymd),D=ne(),L=[...new Set([...b.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(Y=>Y[1]))];if(L.length)return L.some(Y=>{let p=Ya(Y);if(!p)return!1;let T=p.pat.stops,N=T.indexOf(m),$=T.indexOf(y);if(N<0||$<0||N>$)return!1;let ht=p.t0+p.pat.t[2*N+1];return ht>D.min-60&&ht<D.min+150});let z=b.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(z){let Y=z[1].toLowerCase(),p=E.findIndex(T=>T.n&&Y.startsWith(T.n.toLowerCase()));if(p>=0){let T=(tt[P]||[]).find(N=>{let $=N.pat.stops;return $[$.length-1]===p&&$.includes(m)&&$.includes(y)});if(T){let N=T.pat.stops;return N.indexOf(m)<N.indexOf(y)}}}return!0}let Wn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function t_(){let{lines:o,stations:c}=Qa(),f=new Set(o),m=new Set(c.map(P=>qt.get(P))),y=V.alerts.filter(P=>([...P.fams].some(D=>f.has(D))||[...P.stops||[]].some(D=>m.has(D)))&&Cp(P));if(!Wn.seen){try{Wn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Wn.seen=new Set}if(!Wn.seen.size){y.forEach(P=>Wn.seen.add(P.id+"|"+P.txt.length)),Rp();return}}let b=y.filter(P=>!Wn.seen.has(P.id+"|"+P.txt.length));if(b.length&&(b.forEach(P=>Wn.seen.add(P.id+"|"+P.txt.length)),Rp(),!(!Wn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of b.slice(0,3)){let D=(P.src==="Adif"?__t(280):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(F).slice(0,4).join(" "):""),L={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(z=>z?z.showNotification(D,L):new Notification(D,L)).catch(()=>{try{new Notification(D,L)}catch{}})}}function Rp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Wn.seen].slice(-400)))}catch{}}async function e_(){if(Wn.on)Wn.on=!1,sn(__t(415));else{if(!("Notification"in window)){sn(wp&&!Ep()?__t(416):__t(417));return}if(await Notification.requestPermission()!=="granted"){sn(__t(418));return}Wn.on=!0,sn(__t(419)+Qa().lines.join(", ")+__t(420))}try{localStorage.setItem("rod_ln",Wn.on?"1":"")}catch{}De(!0)}async function n_(){if(!V.repOk)return e_();if(!Ni.busy){Ni.busy=!0;try{let o=await Tp();if(!o){sn(wp&&!Ep()?__t(421):__t(422));return}if(await navigator.serviceWorker.ready,Ni.on){let c=await o.pushManager.getSubscription();c&&(fetch(le()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Ni.on=!1,sn(__t(415))}else{if(!V.url){sn(__t(423));return}if(await Notification.requestPermission()!=="granted"){sn(__t(418));return}let f=(await Rt(le(),"/push/key")).key,m=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Q0(f)});await Ap(m),Ni.on=!0,sn(__t(424)+Qa().lines.join(", "))}try{localStorage.setItem("rod_push",Ni.on?"1":"")}catch{}}catch(o){sn(__t(425)+(o.message||o))}finally{Ni.busy=!1,De(!0)}}}async function Ip(){if(Ni.on)try{let o=await Tp(),c=o&&await o.pushManager.getSubscription();c&&await Ap(c)}catch{}}let Ou=!1,Pp="";function Bu(){let o=wt?"t"+(wt.tid||wt.vtid):ge>=0?"s"+ge:xe?"a":Nt?"n":"";o!==Pp&&(Ou=!1,Pp=o);let c=innerWidth<=640&&!!o&&!Ou&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let m=f.getBoundingClientRect().bottom;d.style.top=Math.round(m+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-m-16)+"px"}}))}let Lp=new Set,ku=(()=>{let o=vt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function Dp(o,c,f){if(!(!(Wn.on||Ni.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){sn(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(m=>m?m.showNotification(o,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function Np(o,c){let f=o.x,m=ne();if(!m.live||f.gone||f.est<m.min-1)return;let y=f.num+"|"+Math.round(f.sm),b=ku[y]||{},P=`${__t(426)} ${nt(f.sm)}`,D=`${f.fam} \u2192 ${f.dest}`,L="",z="";f.cancel?b.c||(b.c=1,L=`\u26A0\uFE0F ${P} ${__t(148)}`,z=`${D}. ${__t(427)}`):o.ghost&&!b.g?(b.g=1,L=`\u26A0\uFE0F ${P} ${__t(428)}`,z=`${D}: ${__t(429)}`):f.dl>=5&&f.dl>=(b.dl||0)+5?(b.dl=Math.round(f.dl),L=`\u23F3 ${P} ${__t(430)} +${b.dl} min`,z=`${D}: ${__t(431)} ${c} ${__t(432)} ${nt(f.est)}.`):f.plat&&b.p&&b.p!==String(f.plat)&&(L=`${__t(433)}: ${P}`,z=`${D}: ${__t(434)} ${f.plat} ${__t(435)} ${b.p}).`),f.plat&&(b.p=String(f.plat)),ku[y]=b;try{localStorage.setItem("rod_pn",JSON.stringify(ku))}catch{}L&&Dp(L,z,"pin-"+f.num)}let kr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))kr.open=!0;else{kr.open=!1,f.forEach(m=>kr.seen.add(m));try{localStorage.setItem("rod_seen",JSON.stringify([...kr.seen].slice(-200)))}catch{}}De(!0)}});function i_(o){let c=o.lines;if(!c.length&&Lt.st&&Lt.st.length){let p=new Set;Lt.st.forEach(T=>{let N=qt.get(T);N!=null&&E[N].fams.forEach($=>p.add($))}),c=[...p].sort(F)}let f=new Set(c),m=V.alerts.filter(p=>!f.size||[...p.fams].some(T=>f.has(T))),y=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,b=m.reduce((p,T)=>Math.max(p,Ka(T)),0),P=b===3?"\u26D4 ":b===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",D=`<div class="hnowh"><span class="hnowl"><b>${m.length?P+m.length+(m.length===1?__t(282):__t(283)):__t(436)}</b>${c.length?c.map(Cn).join(""):""}</span>${y}</div>`,L=m.filter(p=>!kr.seen.has(p.id)),z=m.length&&(kr.open||L.length>0),Y=m.reduce((p,T)=>Math.max(p,Ka(T)),0);return`<div class="hnow${Y===3?" bad":Y===2?" warn":Y===1?" info":""}${m.length&&!z?" col":""}" data-nowx="${_(m.map(p=>p.id).join("|"))}">${D}${Fp(o,!0)}${z?m.slice().sort((p,T)=>Ka(T)-Ka(p)).map(p=>`<p class="sv${Ka(p)}">${Wa(p)} ${_(p.txt)} <small>${Xa(p)}</small></p>`).join("")+`<small class="hnowt">${__t(437)}</small>`:""}</div>`}let Rn=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function zl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(m,y)=>{m.style.fontSize=y===1?"":(m._f0*y).toFixed(1)+"px",m.querySelectorAll("b").forEach(b=>b.style.fontSize=y===1?"":(m._b0*y).toFixed(1)+"px")},f=1;for(let m of o){if(m.style.whiteSpace="",c(m,1),!m.clientWidth)continue;m._f0=parseFloat(getComputedStyle(m).fontSize);let y=m.querySelector("b");for(m._b0=y?parseFloat(getComputedStyle(y).fontSize):0;m.scrollWidth>m.clientWidth+1&&f>.86;)f-=.02,c(m,f)}if(f<1)for(let m of o)m._f0&&c(m,f);for(let m of o)m.scrollWidth>m.clientWidth+1&&(m.style.whiteSpace="normal")}addEventListener("resize",()=>{try{zl()}catch{}});let s_=(o,c)=>{let f=o==="work"?Ze:o==="near"?Lt:on,m=f&&jn(f);return m==null?null:oi(m).find(y=>String(y.num)===String(c))||null};function Us(o,c){if(c&&!Rn.size)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>sn(__t(438)),600))}catch{}c?Rn.set(o,c):Rn.delete(o);try{let f=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...Rn].map(([m,y])=>[m,y,f])))}catch{}}let Up=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return c>=0?" \xB7 "+hs(cu(Math.round(c))):""};function zu(o){let c=re.find(b=>b.tr&&String(b.tr.num)===String(o));if(!c){let b=Ya(o),P=ne(),D=t.days.indexOf(P.ymd);if(!b)return"";let L=b.day===D-1?1440:0,z=b.t0+b.pat.t[1]-L;return z>P.min?__t(439)+E[b.pat.stops[0]].n+" ("+nt(z)+")":""}let f=c.tr,m=b=>E[f.pat.stops[b]].n;if(c.real){let b=c.v;return b.pre?__t(440):b.atStop>=0&&b.before?__t(441)+m(b.atStop):b.atStop>=0&&(b.st==="STOPPED_AT"||c.stop==="st")?Ue()?__t(442)+m(b.atStop):__t(443)+m(b.atStop)+Up(b):!Ue()&&b.next>0?__t(444)+m(b.next-1)+__t(445)+m(b.next)+Up(b):b.atStop>=0&&b.next>b.atStop?__t(446)+m(b.atStop)+__t(447)+m(b.next):b.atStop>=0?__t(448)+m(b.atStop):c.stop==="via"&&b.next>0?"\u23F8 "+__t(449)+m(b.next-1)+__t(445)+m(b.next):b.next>0?__t(185)+m(b.next-1)+__t(445)+m(b.next):b.next===0?__t(315)+m(0):""}let y=c.p&&c.p.next;return y>0?__t(450)+m(y-1)+__t(445)+m(y):""}let to={k:"",v:null};function r_(o){let c=ne(),f=t.days.indexOf(c.ymd);if(f<0||!o.length)return null;let m=Fu(),y=(m&&jn(m))??jn(on)??jn(Ze),b=c.ymd+o.join()+y;if(to.k===b)return to.v;to.k=b;let P=new Set(o),D=y!=null?p=>tt[p].filter(T=>{let N=T.pat.stops.indexOf(y);return N>=0&&N<T.pat.stops.length-1}).length:p=>tt[p].filter(T=>P.has(T.fam)).length,L=p=>{let T=new Date(+p.slice(0,4),+p.slice(4,6)-1,+p.slice(6)).getDay();return T===0?0:T===6?6:1},z=D(f),Y=Math.max(0,...t.days.map((p,T)=>T!==f&&L(p)===L(c.ymd)?D(T):0));return to.v=Y>=20&&z<Y*.8?{n:z,ref:Y,pct:Math.round(z/Y*100),st:y!=null?E[y].n:""}:null,to.v}function Fp(o,c){let f=o.lines||[],m=r_(f);if(!m)return"";let y=V.alerts.some(b=>[...b.fams].some(P=>f.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((b.es||"")+" "+b.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${y?__t(451):__t(452)}</b>: ${m.st?`${__t(453)} ${_(m.st)} ${m.n} ${__t(454)} ${m.ref} ${__t(455)}`:`${__t(456)} ${m.n} ${__t(454)} ${m.ref} ${__t(455)}`} (${m.pct} %). ${y?__t(457):__t(458)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${y?__t(459):__t(460)}</b> \xB7 ${__t(461)}: ${m.st?`${__t(462)} ${_(m.st)} ${__t(463)} ${m.n} ${__t(198)} ${m.ref} ${__t(71)}`:`${m.n} ${__t(198)} ${m.ref} ${__t(464)} ${f.join(", ")}`} (${m.pct} % ${__t(465)}).</div>`}function a_(o){let c=Ja(o.lines||[]);if(!c.length)return"";let f=[on,Ze].some(m=>{let y=jn(m),b=y!=null&&Ft.get(E[y].id);return b&&b.d&&Array.isArray(b.d.trains)&&!b.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(466)} ${c.join(", ")}</b> ${__t(467)}${f?" \xB7 "+__t(468):""}: ${__t(469)}</div>`}function o_(o){if(!Lt.w)return[];let c=Lt.k||1;return re.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-Lt.w[0],f.p.w[1]-Lt.w[1])*c<3).sort((f,m)=>Math.hypot(f.p.w[0]-Lt.w[0],f.p.w[1]-Lt.w[1])-Math.hypot(m.p.w[0]-Lt.w[0],m.p.w[1]-Lt.w[1])).slice(0,2).map(f=>f.tr)}function l_(o){try{return c_(o)}catch(c){return console.error(c),Dt.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(301)}${_(Dt.tid)}${Dt.lock?` <span class="hlk">${__t(470)}</span>`:""}</b></span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}}function c_(o){if(!Dt.tid)return"";let c=re.find($=>$.tr&&String($.tr.num)===Dt.tid)||C(o).out.find($=>$.tr&&String($.tr.num)===Dt.tid);if(!c)return"";let f=c.tr,m=f.pat.stops,y=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(y==null){let $=C(o).out.find(ht=>ht.tr&&String(ht.tr.num)===Dt.tid);y=$&&$.p&&$.p.next>=0?$.p.next:1}let b=pt(f),P=typeof b=="number"?Math.max(0,b/60):0,D=t.days.indexOf(o.ymd),L=f.day===D-1?1440:0,z=Le&&Le.num===Dt.tid?m.indexOf(qt.get(Le.sid)):-1;z<y&&(z=m.length-1);let Y=ja(f,c.real?c.v:null,z,f.t0+f.pat.t[2*z]+P-L),p=Y-o.min,T=c.real&&c.v.atStop>=0?c.v.atStop:-1,N=zu(f.num)||__t(315)+E[m[y]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Cn(f.fam)} ${__t(301)}${_(f.num)}${Dt.lock?` <span class="hlk">${__t(470)}</span>`:""}</b><small class="nofit cok">${_(N)} \xB7 <span class="nw">${__t(471)} ${_(E[m[z]].n)}</span> <span class="nw">${p>=1?__t(104)+or(p)+" \xB7 ":""}<b>${nt(Y)}</b>${P>=1?` <em class="dl ${Pi(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(472)}" title="${__t(472)}">\u2715</button>${($=>$.length&&!(Dt.manual&&Date.now()<Dt.manual)?`<div class="onbch">${$.map(ht=>`<button type="button" class="onbalt" data-onbpick="${_(ht.num)}">${__t(473)} ${_(ht.num)}?</button>`).join("")}</div>`:"")(o_(f))}</div>`}let $l={until:0};function Op(o){if(o.hasAttribute("data-onbx")){li.num===Dt.tid&&(li.num=""),Dt.no.set(Dt.tid,Date.now()+20*6e4),Dt.tid="",Dt.manual=0,Dt.lock=!1,Dt.quiet=Date.now()+10*6e4,Ot=null,De(!0);return}Lu(o.dataset.onbpick,"pick"),sn(`${__t(474)} ${Dt.tid}`),De(!0)}function De(o){let c=x("#home");if(!c)return;let f=performance.now();if(!o&&f-xp<4e3||!o&&$l.until>Date.now())return;xp=f;let m=ne(),y=[],b=Qa(),P=p=>{let T=jn(p);return T==null||!Lt.w?1:Math.hypot(E[T].w[0]-Lt.w[0],E[T].w[1]-Lt.w[1])},D=[Lt,...[on,Ze].sort((p,T)=>P(p)-P(T))],L=(document.documentElement.classList.contains("tabmode")?i_(b):Fp(b))+a_(b)+l_(m)+D.map(p=>K0(p,m,y)).join("")+(ar.some(p=>p.open)&&b.lines.length,"");c.className=ar.some(p=>p.open)?"open":"";let z=x("#bell");z||(z=document.createElement("button"),z.type="button",z.id="bell",z.onclick=n_,x("#inf .more").prepend(z));{let p=V.repOk?Ni.on:Wn.on;z.hidden=!b.lines.length,z.className=p?"on":"",z.textContent=(p?__t(482):__t(483))+b.lines.join(", "),z.title=(p?__t(484):__t(485))+__t(67)+b.lines.join(", ")+(V.repOk?"":__t(486))}if(c._h===L)return;c._h=L,c.innerHTML=L,zl(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{$l.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{$l.until=Date.now()+400},!0),c.addEventListener("click",p=>{let T=p.target.closest&&p.target.closest("[data-onbx],[data-onbpick]");T&&(p.stopPropagation(),$l.until=0,Op(T))},!0));{let p=c.querySelector("[data-onbgo]");p&&(p.onclick=T=>{if(T.target.closest("[data-onbx]")){Dt.no.set(Dt.tid,Date.now()+20*6e4),Dt.tid="",Dt.manual=0,Dt.lock=!1,Ot=null,De(!0);return}let N=T.target.closest("[data-onbpick]");if(N){Op(N);return}let $=re.find(ht=>ht.tr&&String(ht.tr.num)===Dt.tid);$&&(Nt=xe=At=!1,ge=-1,wt=$.tr,d._h="",ke())})}{let p=[...c.children].find(T=>T.classList.contains("hplace")&&!T.querySelector(".hnew"));p&&p.classList.add("lead")}let Y=p=>p==="work"?Ze:p==="near"?Lt:on;c.querySelectorAll("[data-hloc]").forEach(p=>p.onclick=()=>{Lt.err="",Pu(!0)}),c.querySelectorAll("[data-ht]").forEach(p=>p.onclick=()=>{if(x("#inf").classList.contains("compact")){Ou=!0,Bu();return}let T=Y(p.dataset.ht);T.open=!T.open,pi(T),De(!0),(wt||ge>=0||xe||Nt)&&(d._h="",ke())}),c.querySelectorAll("[data-hxf]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,$]=p.dataset.hxf.split(":"),ht=Y(N);ht.xfer=$||null,pi(ht),De(!0)}),c.querySelectorAll("[data-hs]").forEach(p=>p.onclick=()=>{let[T,N]=p.dataset.hs.split(":"),$=Y(T);$.i=+N,pi($),De(!0)}),c.querySelectorAll("[data-hw]").forEach(p=>p.onclick=()=>{let[T,N]=p.dataset.hw.split(":"),$=Y(T);$.walk=S($.walk+ +N,0,60),pi($),De(!0)}),c.querySelectorAll("[data-hmap]").forEach(p=>p.onclick=()=>{let T=+p.dataset.hmap;Nt=xe=At=!1,wt=null,ge=T,kn(),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",ke(),a()}),c.querySelectorAll("[data-hset]").forEach(p=>p.onclick=()=>Bp(p.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(p=>p.onclick=()=>{let T=qt.get(Lt.st[0]);T!=null&&$u(T,p.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(p=>p.onclick=()=>{let T=Y(p.dataset.hmore);T.more=!T.more,De(!0)}),c.querySelectorAll("[data-hhide]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,$]=p.dataset.hhide.split(":"),ht=Y(N);ht.hide=$,pi(ht),De(!0)}),c.querySelectorAll("[data-hshow]").forEach(p=>p.onclick=()=>{let T=Y(p.dataset.hshow);T.hide="",pi(T),De(!0)}),c.querySelectorAll("[data-hgo]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,$]=p.dataset.hgo.split(":"),ht=Y(N);ht.goAt=$==="1"?Date.now():0,ht.goAt&&(ht.platAt=0),pi(ht),De(!0)}),c.querySelectorAll("[data-hplat]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,$]=p.dataset.hplat.split(":"),ht=Y(N);ht.platAt=$==="1"?Date.now():0,ht.platAt&&(ht.goAt=0),pi(ht),De(!0)}),c.querySelectorAll("[data-hnotst]").forEach(p=>p.onclick=T=>{T.stopPropagation(),Lt.homeW=Lt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Lt.w))}catch{}De(!0)}),c.querySelectorAll("[data-hdel]").forEach(p=>p.onclick=()=>{Ze.st=[],Ze.open=!1,pi(Ze),De(!0),Ip()}),c.querySelectorAll("[data-dk]").forEach(p=>{let T=0,N=0,$=0,ht=()=>{clearTimeout(T),T=0,p.classList.remove("lpress")};p.addEventListener("pointerdown",Mt=>{let Q=y[+p.dataset.dk];!Q||Q.num==null||!p.matches("li.hr, .hv")||(N=Mt.clientX,$=Mt.clientY,p.classList.add("lpress"),T=setTimeout(()=>{T=0,p.classList.remove("lpress"),p._lpDone=Date.now();let ft=Lu(Q.num,"lock");try{navigator.vibrate&&navigator.vibrate(35)}catch{}sn(`${__t(474)} ${ft&&ft.tr.fam||Q.fam||""} ${Q.num} \xB7 ${__t(470)}`),De(!0)},700))}),p.addEventListener("pointermove",Mt=>{T&&Math.hypot(Mt.clientX-N,Mt.clientY-$)>10&&ht()}),["pointerup","pointercancel","pointerleave"].forEach(Mt=>p.addEventListener(Mt,()=>{T&&ht()})),p.addEventListener("contextmenu",Mt=>Mt.preventDefault())}),c.querySelectorAll("[data-dk]").forEach(p=>p.onclick=()=>{if(p._lpDone&&Date.now()-p._lpDone<1500)return;let T=y[+p.dataset.dk];if(p.matches("li.hr, .hv")&&!T.gone&&T.num!=null){let N=p.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(N){let $=Rn.get(N)===String(T.num);Us(N,$?null:String(T.num)),$&&li.num===String(T.num)&&(li.num=""),$?wt&&String(wt.num)===String(T.num)&&(wt=null,Ot=null,Ye.sk="",d._h="",ke()):eo(T,!0),De(!0);return}}eo(T)}),c.querySelectorAll("[data-pinnext]").forEach(p=>p.onclick=T=>{if(T.target.closest("[data-unpin]"))return;let[N,$]=p.dataset.pinnext.split(":");Us(N,$);let ht=s_(N,$);ht&&eo(ht,!0),De(!0)}),c.querySelectorAll("[data-unpin]").forEach(p=>p.onclick=T=>{T.stopPropagation(),Us(p.dataset.unpin,null),De(!0)}),c.querySelectorAll("[data-hal]").forEach(p=>p.onclick=()=>x("#alr").click()),ap(c)}function eo(o,c){if(!o)return;let f=t.days.indexOf(ne().ymd),m=re.find(P=>P.real?o.tid&&P.v.tid===o.tid||o.num&&String(P.tr?P.tr.num:P.v.num)===String(o.num):o.tr&&P.tr===o.tr||o.num&&P.tr&&String(P.tr.num)===String(o.num)),y=o.tr||m&&m.tr||(tt[f]||[]).find(P=>String(P.num)===String(o.num));if(Nt=xe=At=!1,ge=-1,c||void 0,wt=m?m.tr||{vtid:m.v.tid}:y||null,!wt)return;c&&(Ye.sk="t"+(wt.num||wt.vtid)),Ot=m&&m.tr?m.tr:null,Ot&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let b=m?m.p.w:null;b&&Object.assign(s,{tx:b[0],ty:b[1],dist:Math.min(s.dist,22)}),kn(),d._h="",ke(),Se=0,a()}let zr=!1;function Bp(o){zr=o||!1,v.value="",v.placeholder=o==="work"?__t(487):o==="home"?__t(488):__t(489),document.documentElement.classList.add("srch"),g.style.display="none",v.focus()}let kp=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>Bp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&kp(),zr&&!v.value.trim()&&(zr=!1,v.placeholder=__t(489))},600));function a1(){}function $u(o,c){let f=c==="work"?Ze:on,m=E[o].id,y=E.filter(b=>b.fams.size&&b!==E[o]&&Math.hypot(b.w[0]-E[o].w[0],b.w[1]-E[o].w[1])<.6).map(b=>b.id);f.st=[m,...y].slice(0,3),f.i=0,f.open=!0,pi(f),De(!0),Ip()}let Vl=x("#lines");Vl.innerHTML=`${__t(490)}`+H.map(o=>`<button type="button" style="--c:${W[o]}" data-f="${o}">${o}</button>`).join("");function zp(){try{De(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",Vl.after(o),o.onclick=()=>{Jt=[...ct][0],At=Nt=xe=!1,d._h="",ke()});let c=ct.size===1?[...ct][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(491)}${_(c)}${__t(492)}`)}Vl.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!ct.has(o.dataset.f))})}Vl.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?H.forEach(f=>ct.add(f)):ct.size===H.length?(ct.clear(),ct.add(c)):ct.has(c)?(ct.delete(c),ct.size||H.forEach(f=>ct.add(f))):ct.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...ct]))}catch{}zp(),jt(),kn(),Ru(),Se=0,a()});let Vu=[...document.querySelectorAll("[data-sp]")],wi=0;function $p(o){let c=ne();o&&(Pt===o||wi===o)?Pt?(Zt=c.min,oe=c.min,Pt=0,wi=o):(_e=performance.now(),Pt=o,wi=0):o===0?(Pt=0,oe=null,wi=0):(Zt=c.min,_e=performance.now(),oe=c.min,Pt=o,wi=0),Vu.forEach(f=>{let m=+f.dataset.sp;f.classList.toggle("on",m===(Pt||wi)||!Pt&&!wi&&oe==null&&m===0),f.classList.toggle("pz",!!wi&&m===wi),f.textContent=m===0?__t(493):wi===m?"\u25B6 \xD7"+m:Pt===m?"\u23F8 \xD7"+m:"\xD7"+m}),Se=0,a()}Vu.forEach(o=>o.onclick=()=>$p(+o.dataset.sp)),x("#tsl").oninput=o=>{let c=+o.target.value;Zt=c,oe=c,_e=performance.now(),Pt===0&&!wi&&Vu.forEach(f=>f.classList.remove("on")),Se=0,a()},setInterval(()=>{oe!=null&&Pt&&Zt+(performance.now()-_e)/6e4*Pt>1560&&(Zt=240,_e=performance.now())},1e3),window.__rodSearch=o=>{let c=M(o.trim());if(!c){g.style.display="none",g._pick=null;return}let f=[],m=[];E.forEach((D,L)=>{if(!D.fams.size)return;let z=M(D.n);z.startsWith(c)||z.includes(" "+c)||z.includes("-"+c)?f.push(L):z.includes(c)&&m.push(L)});let y=f.concat(m).slice(0,7),b=I.filter(D=>M(D.name).startsWith(c)).sort((D,L)=>L.pop-D.pop).slice(0,3),P=y.map(D=>({h:`\u{1F689} ${_(E[D].n)}<em>${[...E[D].fams].sort(F).slice(0,3).map(L=>`<em class="ls" style="background:${W[L]}">${L}</em>`).join(" ")}</em>`,go:()=>{if(kp(),zr){let L=zr;zr=!1,v.placeholder=__t(489),$u(D,L);return}Ye.on&&Ye.cur!=="map"&&ur("map"),Nt=!1,xe=!1,At=!1,ge=D,wt=null,Ot=null,kn(),Object.assign(s,{tx:E[D].w[0],ty:E[D].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),ke(),a()}})).concat(b.map(D=>({h:`${_(D.name)}${__t(494)}`,go:()=>{Object.assign(s,{tx:D.cx,ty:D.cy,dist:S(D.size*3+14,14,60)}),a()}})));g.innerHTML=P.map((D,L)=>`<li data-i="${L}">${D.h}</li>`).join("")||__t(495),g.style.display="block",g._pick=D=>{P[D]&&(P[D].go(),g.style.display="none",v.value="",v.blur())},g.querySelectorAll("li[data-i]").forEach(D=>D.onclick=()=>g._pick(+D.dataset.i))},zp(),kn();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=M(o),f=-1,m=0;E.forEach((y,b)=>{if(!y.fams.size)return;let P=M(y.n),D=P===c?3:P.startsWith(c)||c.startsWith(P)?2:P.includes(c)||c.includes(P)?1:0;D>m&&(m=D,f=b)}),f>=0&&setTimeout(()=>{ge=f,kn(),Object.assign(s,{tx:E[f].w[0],ty:E[f].w[1],dist:18,tilt:.5}),ke(),a()},300)}}catch{}let Hu={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Hu.v=!Hu.v,De(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&wt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,f=0,m=0;d.addEventListener("touchstart",y=>{m=innerWidth<=640&&wt&&y.touches.length===1&&!y.target.closest("input")?1:0,m&&(o=y.touches[0].clientX,c=y.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",y=>{if(!m)return;let b=y.touches[0].clientX-o,P=y.touches[0].clientY-c;m===1&&(Math.abs(b)<12&&Math.abs(P)<12||(m=Math.abs(b)>Math.abs(P)*1.3&&b<0?2:0,!m))||(y.preventDefault(),f=Math.min(0,b),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(m!==2){m=0;return}if(m=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let y=d.querySelector("[data-cx]");y&&y.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{m===2&&(d.style.transform="",d.style.opacity=""),m=0})}let Ye={on:!1,cur:"now",home:new Map},Hl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),In=document.createElement("nav");In.id="tabs";let h_=[["now","\u{1F552}",__t(493)],["map","\u{1F5FA}\uFE0F",__t(496)],["line","\u{1F4CA}",__t(497)],["set","\u2699\uFE0F",__t(498)]];In.innerHTML=h_.map(([o,c,f])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(In);let cr=document.createElement("i");cr.className="tind",cr.setAttribute("aria-hidden","true"),In.prepend(cr);let Vp=o=>[...In.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return o>=f.left&&o<f.right}),Gu=o=>{!o||!o.offsetWidth||(cr.style.width=o.offsetWidth+"px",cr.style.height=o.offsetHeight+"px",cr.style.top=o.offsetTop+"px",cr.style.transform=`translateX(${o.offsetLeft}px)`)},$r=()=>Gu(In.querySelector("[data-tab].on")),u_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},Kn={on:!1,b:null,moved:!1,until:0};In.addEventListener("pointerdown",o=>{let c=Vp(o.clientX);if(c){Kn.on=!0,Kn.b=c,Kn.moved=!1,In.classList.add("drag"),In.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),Gu(c);try{In.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,m=f&&f.Plugins&&f.Plugins.Haptics;m&&f.isNativePlatform()&&m.selectionStart().catch(()=>{})}catch{}}}),In.addEventListener("pointermove",o=>{if(!Kn.on)return;let c=Vp(o.clientX);c&&c!==Kn.b&&(Kn.b.classList.remove("hov"),c.classList.add("hov"),Kn.b=c,Kn.moved=!0,Gu(c),u_())});let Hp=o=>{if(Kn.on){Kn.on=!1,In.classList.remove("drag"),In.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&Kn.b?(Kn.until=Date.now()+500,Kn.b.dataset.tab!==Ye.cur?ur(Kn.b.dataset.tab):$r()):$r()}};In.addEventListener("pointerup",()=>Hp(!0)),In.addEventListener("pointercancel",()=>Hp(!1)),addEventListener("resize",()=>setTimeout($r,60));try{new ResizeObserver(()=>$r()).observe(In)}catch{}let Vr=document.createElement("div");Vr.id="tabL",document.body.appendChild(Vr);let hr=document.createElement("div");hr.id="tabA",hr.className="box",document.body.appendChild(hr);let Wu=(o,c)=>{o&&(Ye.home.has(o)||Ye.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},Gp=()=>{for(let[o,[c,f]]of Ye.home)try{c.insertBefore(o,f&&f.parentNode===c?f:null)}catch{}Ye.home.clear()};function Xu(){let o=ct.size===1?[...ct][0]:"",c=V.alerts.filter(m=>[...m.fams].some(y=>ct.has(y))).length,f=[At,xe,Jt,Nt,o,c].join("|");Vr._k!==f&&(Vr._k=f,Vr.innerHTML=`<button type="button" data-tl="stats" class="${At?"on":""}">\u{1F4CA} ${__t(499)}</button><button type="button" data-tl="alr" class="${xe?"on":""}">\u26A0\uFE0F ${c}${c===1?__t(282):__t(283)}</button>${o?`<button type="button" data-tl="line" class="${Jt?"on":""}">\u{1F4CB} ${_(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,Vr.querySelectorAll("[data-tl]").forEach(m=>m.onclick=()=>{let y=m.dataset.tl;At=y==="stats",xe=y==="alr",Jt=y==="line"?o:"",Nt=!1,wt=null,ge=-1,At&&(Ne.at=0),d._h="",ke(),Xu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let d_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",f_=()=>vt(new Date).ymd.replace(/-/g,"");function no(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(d_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=f_(),m=t.days.indexOf(f),y=c.days.indexOf(f),b=m<0?0:lt.filter(L=>L.day===m).length,P=0;if(y>=0)for(let L of c.trips)L[0]===y&&P++;let D=y>=0&&b&&(Math.abs(P-b)/b>.1||!P);if(m<0||m>=t.days.length-2||D){try{sessionStorage.setItem("rod_packmsg",D?"1":"")}catch{}location.reload();return}io.v=!0}).catch(()=>{})}let io={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&io.v?(io.v=!1,io.reload=!0):!document.hidden&&io.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>sn("\u{1F5D3}\uFE0F "+__t(500)),1500))}catch{}if(setTimeout(no,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(no.at||0)>6*36e5&&(no.at=Date.now(),no())}),no.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=x("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Gl(){Gp();let o=window.__L||"es",c=ai.mode;hr.innerHTML=`<h3>${__t(498)}</h3>
      <h4>\u{1F310} ${__t(501)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,m])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${m}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(502)}</h4><div class="seg2">${[["auto",__t(303)],["light",__t(503)],["dark",__t(504)]].map(([f,m])=>`<button type="button" data-th="${f}" class="${c===f?"on":""}">${m}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(505)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let m=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(303)],["0","Normal"],["1",__t(506)]].map(([y,b])=>`<button type="button" data-big="${y}" class="${m===y?"on":""}">${b}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(507)}</small>`})()}
      <h4>\u{1F514} ${__t(508)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(509)}</small>${kl().length?"":`<small class="tabAhint">${__t(510)}</small>`}${(()=>{let f=kl();return f.length>1?`<small class="tabAhint">${__t(511)}</small><div class="alch">${f.map(m=>`<button type="button" data-al="${_(m)}" class="ln${lr.has(m)?" off":""}" style="--c:${W[m]}">${_(m)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(512)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(513)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,hr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let m=f.dataset.al,y=kl();lr.has(m)?lr.delete(m):y.filter(b=>!lr.has(b)).length>1&&lr.add(m);try{localStorage.setItem("rod_aloff",JSON.stringify([...lr]))}catch{}De(!0),Gl()}),hr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let m=f.dataset.big;try{m==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",m)}catch{}window.__txt&&window.__txt(),Gl(),De(!0)}),hr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ai.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ai.mode)}catch{}Cl(),Gl()}),Wu(x("#bell"),x("#tabAbell")),Wu(x("#src"),x("#tabArt")),Wu(x("#ver"),x("#tabAinf"))}function ur(o){if(!Ye.on)return;let c=Ye.cur;if(Ye.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",In.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),$r(),o==="line")(wt||ge>=0)&&(Ye.keep={t:wt,s:ge,sk:Ye.sk}),!At&&!xe&&!Jt&&!Nt&&(At=!0,Ne.at=0),wt=null,ge=-1,d._h="",ke(),Xu();else if(c==="line"){At=xe=Nt=!1,Jt="";let f=Ye.keep;Ye.keep=null,f&&o==="map"&&!wt&&ge<0&&(wt=f.t,ge=f.s,Ye.sk=f.sk),d._h="",ke()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Au()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Gl(),o==="now"&&(De(!0),requestAnimationFrame(zl)),Se=0,a()}In.onclick=o=>{if(Date.now()<Kn.until)return;let c=o.target.closest("[data-tab]");c&&ur(c.dataset.tab)},window.__rodTabSync=()=>{if(!Ye.on)return;let o=wt?"t"+(wt.num||wt.vtid):ge>=0?"s"+ge:"",c=o!==Ye.sk;Ye.sk=o,o&&c&&Ye.cur!=="map"?ur("map"):(xe||Jt||Nt)&&Ye.cur!=="line"&&Ye.cur!=="map"&&ur("line"),Ye.cur==="line"&&Xu()};function qu(){let o=Hl.matches||document.documentElement.classList.contains("cap");if(o!==Ye.on)if(Ye.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame($r)),o||(window.__mapHidden=!1),o){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}ur(c)}else delete document.documentElement.dataset.tab,Gp()}Hl.addEventListener?Hl.addEventListener("change",qu):Hl.addListener(qu),qu();{let o=x("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let Yu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Ju=new RegExp("("+Object.keys(Yu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),p_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Yu[o]||Yu[o+"\uFE0F"]||""}</svg></span>`;function m_(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],m;for(;m=c.nextNode();)m.parentElement&&m.parentElement.closest(".ico,script,style,textarea,input")||(Ju.lastIndex=0,Ju.test(m.nodeValue)&&f.push(m));for(let y of f){let b=document.createElement("span");b.innerHTML=_(y.nodeValue).replace(Ju,(P,D)=>p_(D)),y.replaceWith(...b.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(y=>x(y)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let y=0;o().forEach(b=>{y+=m_(b)}),y&&Ye.on&&zl()}finally{c=!1}}},m=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(y=>m.observe(y,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:Rn,LASTPIN:li,get ONBX(){return{tid:Dt.tid,lock:Dt.lock,manual:Dt.manual}},xferCands:Mp,bestXfer:Uu,xferFirst:Nu,nowState:ne,XMIN:Sp,pinNotify:Np,toast:sn,cardEta:ja,HOME:on,WORK:Ze,ONB:Dt,alertForMe:Cp,whereAmI:Fu,departuresFor:oi,DEPS:Ft,tripByNum:Ya,delayOf:pt,TID:dt,SID:qt,byDay:tt,get days(){return t.days},get hist(){return Ne},get past(){return It.cur},get cols(){return dn.mesh?dn.mesh.count:-1},get dist(){return r.dist},get follow(){return Ot},get selTrip(){return wt},ST:E,TR:lt,FAM:H,act:()=>re,setSpeed:$p,RT:V,pollRT:he,nowState:ne,posAt:Ls,activeTrips:C,LL:St,select:o=>{wt=o,ke()}}}var Da=window.__DATA__;var ze=i=>document.querySelector(i),Cs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Zn=(i,t,e)=>Math.min(e,Math.max(t,i)),Lf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ii=ze("#c"),xl=new iu({canvas:ii,antialias:!0});xl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Rs=new Eo;Rs.background=new ve(15659509);var vu=35,fs=new Yn(vu,1,2,1500);Rs.add(new Yo(16777215,9080992,1));var c0=new Zo(16777215,.9);c0.position.set(-40,-70,90);Rs.add(c0);var us=100/Da.w,ml=Da.w/2,gl=Da.h/2,_n=[],Df=new $i;Rs.add(Df);var pu=new Mr({color:16777215,transparent:!0,opacity:.55});for(let i of Da.m){let t=new $i,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let S of i.g){let M=S.map(x=>{let _=[];for(let B=0;B<x.length;B+=2)_.push(new zt((x[B]-ml)*us,(x[B+1]-gl)*us));return _.length>1&&_[0].equals(_[_.length-1])&&_.pop(),_}).filter(x=>x.length>=3);if(!M.length)continue;let I=new va(M[0]);for(let x=1;x<M.length;x++)I.holes.push(new wr(M[x]));e.push(I);for(let x of M[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of M)n.push(new Po(new vn().setFromPoints(x.map(_=>new q(_.x,_.y,0))),pu))}if(!e.length)continue;let h;try{h=new Vo(e,{depth:1,bevelEnabled:!1})}catch{continue}let u=new Wo({color:13421772}),d=new Un(h,u);t.add(d);let v=new $i;n.forEach(S=>v.add(S)),v.position.z=.04,Df.add(v),t.scale.z=.01,Df.add(t);let g={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:u,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=g,_n.push(g)}var PT=_n.map(i=>i.mesh),n0=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},h0=0,u0=0;for(let i of _n){for(let t of i.rings)h0+=n0(t[0])-t.slice(1).reduce((e,n)=>e+n0(n),0);u0+=i.area}var Hb=Math.sqrt(u0/h0),uu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},d0={"08":__t(514),17:__t(515),25:__t(516),43:__t(517)},zf="sqrt",$f="pop",If=0,Nf=0,Ia=1,fl=1,Gb={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Uf=i=>$f==="pop"?i.pop:i.pop/i.area,hu=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ve(i));function Wb(i){i=Zn(i,0,1)*(hu.length-1);let t=Math.min(Math.floor(i),hu.length-2);return hu[t].clone().lerp(hu[t+1],i-t)}var Pa=i=>i>=100?Cs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Xb(){Nf=0;for(let i of _n)Nf+=i.pop;[..._n].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[..._n].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),m0()}var f0=new ve("#d3d8e2"),p0=new ve("#eceff3");window.__mapTheme=i=>{Rs.background=new ve(i?856345:15659509),p0.set(i?"#2b3242":"#eceff3"),f0.set(i?"#1a1f29":"#d3d8e2"),pu.color.set(i?856345:16777215),pu.opacity=i?.7:.55,Vf.color.set(i?329483:2764864),Hf.color.set(i?9081766:16777215);for(let t of _n)t.base&&yu(t);On()};function yu(i){i.mat.color.copy(i.base).lerp(p0,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(f0,.8)}function m0(){Ia=1,fl=1e12;for(let e of _n){let n=Uf(e);Ia=Math.max(Ia,n),fl=Math.min(fl,n)}let i=Math.log10(Math.max(fl,.01)),t=Math.log10(Ia);for(let e of _n)e.base=Wb((Math.log10(Math.max(Uf(e),.01))-i)/(t-i)),yu(e);ze("#lmin").textContent=Pa(fl),ze("#lmax").textContent=Pa(Ia),ze("#lname").textContent=$f==="pop"?__t(518):__t(519),Su()}function Su(){let i=Gb[zf],t=i(Ia),e=24*If;for(let n of _n)n.zt=If<=.001?.01:Math.max(.12*Math.min(1,If),e*i(Uf(n))/t)*(n.inF?1:.1);On()}var i0=Object.fromEntries(_n.map(i=>[i.code,i])),du=[],g0=[];for(let i of Da.bd){let t=i0[i.a],e=i0[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)g0.push((i.p[n]-ml)*us,(i.p[n+1]-gl)*us,0,(i.p[n+2]-ml)*us,(i.p[n+3]-gl)*us,0),du.push(t,e)}var mu=new Xi;mu.setPositions(g0);var Vf=new as({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Hf=new as({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Vf,Hf].forEach((i,t)=>{let e=new Pr(mu,i);e.frustumCulled=!1,e.renderOrder=10+t,Rs.add(e)});function qb(){let i=mu.attributes.instanceStart.data.array;for(let t=0;t<du.length;t+=2){let e=Math.max(du[t].z,du[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}mu.attributes.instanceStart.data.needsUpdate=!0}var gu={};for(let i of Object.keys(uu)){let t=_n.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,h=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),h=Math.max(h,d.cy);let u=document.createElement("div");u.className="plab",u.textContent=uu[i],u.title=__t(520)+d0[i],u.onclick=()=>s1("pr:"+i),document.body.appendChild(u),gu[i]={el:u,p:new q(n/e,s/e,0),cx:(r+a)/2,cy:(l+h)/2,ext:Math.max(a-r,h-l),ext2:[a-r,h-l],area:e,name:uu[i]}}var Pf=new q;function Yb(){for(let i in gu){let t=gu[i];Pf.copy(t.p).project(fs),t.el.style.transform=`translate(-50%,-50%) translate(${(Pf.x*.5+.5)*innerWidth}px,${(-Pf.y*.5+.5)*innerHeight}px)`}}var Sn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Te={...Sn};function Jb(){let i=innerWidth/innerHeight,t=Math.tan(vu*Math.PI/360);return Math.max(Da.h*us*1.1,100*1.1/i)/(2*t)}var Zb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Te.yaw=Math.round(Te.yaw/(2*Math.PI))*2*Math.PI,Te.tilt=0,On()});function Gf(){Object.assign(Te,{tilt:0,yaw:0,dist:Jb(),tx:0,ty:0}),On()}function jb(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Sn;fs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),fs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),fs.lookAt(n,s,0)}var pl=!0,s0=performance.now(),_l=new Map;function On(){pl=!0}function _0(i){requestAnimationFrame(_0);let t=Zn((i-s0)/1e3,0,.05);s0=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Sn)){let r=Te[s]-Sn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Sn[s]+=r*e,n=!0):Sn[s]=Te[s]}for(let s of _n){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of _l){let a=(i-r)/1800;a>=1?(_l.delete(s),Fr(s)):Fr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(pl=!0),window.__mapHidden){pl=!0;return}if(n||pl){Zb.style.transform=`rotate(${Sn.yaw}rad) scaleY(${(.55+.45*Math.cos(Sn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Te.yaw/2))<.02&&Te.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(521):__t(522))}jb(),qb(),Yb(),window.__rodFrame&&window.__rodFrame(),xl.render(Rs,fs),pl=n,ze("#tilt").value=Math.round(Te.tilt*180/Math.PI),ze("#yaw").value=Math.round(((Te.yaw*180/Math.PI+180)%360+360)%360-180)}}function x0(){xl.setSize(innerWidth,innerHeight,!1),fs.aspect=innerWidth/innerHeight,fs.updateProjectionMatrix(),Vf.resolution.set(innerWidth,innerHeight),Hf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),On()}addEventListener("resize",()=>{x0(),hn.length&&Qs()});ii.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Te.yaw+=n*.0035}else i.ctrlKey?Te.dist=Zn(Te.dist*Math.exp(e*.01),6,400):Te.tilt=Zn(Te.tilt+e*.002,0,1.32);On()},{passive:!1});ii.addEventListener("contextmenu",i=>i.preventDefault());var ds=new Map,fi=null,Dr=0,Ff=0,Of=0;var _u=null;ii.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),hn.length&&setTimeout(Qs,50)),ii.setPointerCapture(i.pointerId),ds.set(i.pointerId,{x:i.clientX,y:i.clientY}),ds.size===1&&(fi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),ds.size===2){let[t,e]=[...ds.values()];Dr=Math.hypot(t.x-e.x,t.y-e.y),Ff=Math.atan2(e.y-t.y,e.x-t.x),Of=(t.y+e.y)/2,_u={mode:null,rot:0,sc:0,tl:0},fi&&(fi.multi=!0)}Wf()});ii.addEventListener("pointermove",i=>{let t=ds.get(i.pointerId);if(!t){As={x:i.clientX,y:i.clientY},Bf||(Bf=requestAnimationFrame(Qb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,ds.size===2){let[s,r]=[...ds.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),h=(s.y+r.y)/2,u=l-Ff;u>Math.PI&&(u-=2*Math.PI),u<-Math.PI&&(u+=2*Math.PI);let d=Dr?a-Dr:0,v=h-Of,g=_u||(_u={mode:null,rot:0,sc:0,tl:0});g.rot+=u,g.sc+=d,g.tl+=v,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&Dr&&(Te.dist=Zn(Te.dist*Dr/a,6,400)),g.mode==="rotate"&&(Te.yaw+=u,Sn.yaw=Te.yaw),g.mode==="tilt"&&(Te.tilt=Zn(Te.tilt-v*.006,0,1.32),Sn.tilt=Te.tilt),Dr=a,Ff=l,Of=h,On();return}if(fi.moved+=Math.abs(e)+Math.abs(n),fi.rot||i.altKey)Te.yaw+=e*.005,Te.tilt=Zn(Te.tilt+n*.004,0,1.32),Sn.yaw=Te.yaw,Sn.tilt=Te.tilt;else{let s=2*Sn.dist*Math.tan(vu*Math.PI/360)/innerHeight,r=Math.sin(Sn.yaw),a=Math.cos(Sn.yaw),l=1/Math.max(Math.cos(Sn.tilt),.3);Te.tx=Zn(Te.tx-a*e*s+-r*n*s*l,-70,70),Te.ty=Zn(Te.ty-r*e*s+a*n*s*l,-70,70),Sn.tx=Te.tx,Sn.ty=Te.ty}On()});var v0=i=>{let t=fi&&!fi.rot&&!fi.multi&&fi.moved<(fi.touch?12:6)&&i.type==="pointerup"&&ds.size===1,e=fi&&fi.touch;ds.delete(i.pointerId),Dr=0,_u=null,ds.size||(fi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ii.addEventListener("pointerup",v0);ii.addEventListener("pointercancel",v0);ii.addEventListener("dblclick",Gf);addEventListener("keydown",i=>{i.key==="Alt"&&(ii.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ii.style.cursor="")});addEventListener("blur",()=>{ii.style.cursor=""});var Kb=new Ko,r0=new zt,As=null,Bf=0,Nr=null;function Qb(){if(Bf=0,!As||fi)return;r0.set(As.x/innerWidth*2-1,-(As.y/innerHeight)*2+1),Kb.setFromCamera(r0,fs);let i=null;if(i!==Nr){let e=Nr;Nr=i,e&&Fr(e),i&&Fr(i),On()}let t=window.__rodHover&&window.__rodHover(As.x,As.y);if(t){Lr.innerHTML=t,Lr.style.display="block";let e=Lr.offsetWidth,n=Lr.offsetHeight;Lr.style.left=Zn(As.x+14,6,innerWidth-e-6)+"px",Lr.style.top=Zn(As.y+14,6,innerHeight-n-6)+"px",ii.style.cursor="pointer"}else Wf(),ii.style.cursor=""}ii.addEventListener("pointerleave",()=>{if(As=null,Nr){let i=Nr;Nr=null,Fr(i),On()}Wf()});var Lr=ze("#tip");function Wf(){Lr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{$f=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),m0()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{zf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Su()});ze("#yaw").oninput=i=>{Te.yaw=+i.target.value*Math.PI/180,On()};ze("#tilt").oninput=i=>{Te.tilt=+i.target.value*Math.PI/180,On()};ze("#zin").onclick=()=>{Te.dist=Zn(Te.dist*.75,6,400),On()};ze("#zout").onclick=()=>{Te.dist=Zn(Te.dist/.75,6,400),On()};ze("#rst").onclick=Gf;var a0=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],hn=[],o0={},t1=i=>o0[i]||(o0[i]=new Mr({color:i}));function y0(i,t){i.og.children.forEach(e=>e.material=t?t1(t):pu)}function Fr(i,t=0){let e=i.mat.emissive;i===Nr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Xf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let u of i)e=Math.min(e,u.cx-u.size/2),n=Math.max(n,u.cx+u.size/2),s=Math.min(s,u.cy-u.size/2),r=Math.max(r,u.cy+u.size/2);let a=innerWidth/innerHeight,l=Math.tan(vu*Math.PI/360),h=i.length===1?Zn(i[0].size*3.2+14,14,120):Zn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Te,{tx:(e+n)/2,ty:(s+r)/2,dist:h,tilt:t,yaw:0}),On()}var Ks=ze("#q"),Si=ze("#list"),cn=ze("#mcs");function Mu(i,t=!0){if(Si.style.display="none",Ks.value="",!i.sel){hn.length>=6&&S0(hn[0].o,!0);let e=new Set(hn.map(s=>s.color)),n=a0.find(s=>!e.has(s))||a0[0];i.sel={o:i,color:n,tint:new ve(n).multiplyScalar(.12)},hn.push(i.sel),y0(i,n)}cn.classList.contains("min")&&vl(!1),_l.set(i,performance.now()),Fr(i),t&&Xf([i],Math.max(Te.tilt,.9)),Qs()}function S0(i,t){let e=hn.indexOf(i.sel);e>=0&&hn.splice(e,1),i.sel=null,y0(i,null),Fr(i),On(),t||Qs()}function M0(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=hn.map(d=>{let v=1e9,g=-1e9,S=1e9,M=-1e9;for(let I of d.o.rings)for(let x=0;x<I[0].length;x+=2)v=Math.min(v,I[0][x]),g=Math.max(g,I[0][x]),S=Math.min(S,I[0][x+1]),M=Math.max(M,I[0][x+1]);return{x0:v,x1:g,y0:S,y1:M}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;hn.forEach((d,v)=>{let g=r[v],S=(g.x0+g.x1)/2,M=(g.y0+g.y1)/2;s.beginPath();for(let I of d.o.rings)for(let x of I)for(let _=0;_<x.length;_+=2){let B=e/2+(x[_]-S)*l,k=n/2-(x[_+1]-M)*l;_?s.lineTo(B,k):s.moveTo(B,k),_===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let h=l/Hb,u=[.5,1,2,5,10,20,50,100].find(d=>d*h>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,u*h,2),s.font="10px system-ui",s.fillText(u+" km",12+u*h,n-8)}function Qs(){if(!hn.length){cn.innerHTML="",cn.style.display="none",vl(!1);return}if(cn.style.display="flex",innerWidth<=640){let e=ze("#inf").getBoundingClientRect().bottom;cn.style.top=Math.round(e+8)+"px",cn.style.maxHeight=Math.max(110,Math.min(innerHeight*(ze("#rc").classList.contains("min")?.7:.4),ze("#rc").getBoundingClientRect().top-e-16))+"px",cn.style.width=""}else if(innerHeight<=500){let e=ze("#inf").getBoundingClientRect().bottom;cn.style.top=Math.round(e+8)+"px",cn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",cn.style.width="min(290px, 40vw)"}else cn.style.top="",cn.style.maxHeight="",cn.style.width="";window.__fitMcs&&window.__fitMcs();let i=hn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${uu[s.pr]}</em></div><div class="mb">${Cs(s.pop)}${__t(528)}${Pa(s.area)} km\xB2 \xB7 ${Pa(s.pop/s.area)}${__t(529)}${s.rankP}${__t(530)}`}).join("");if(hn.length>1){let e=s=>Math.max(...hn.map(s)),n=[[__t(531),s=>s.o.pop,Cs],[__t(532),s=>s.o.area,Pa],[__t(533),s=>s.o.pop/s.o.area,Pa]];if(i+=`${__t(534)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${hn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),hn.length===2){let[s,r]=hn.map(u=>u.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],h=(u,d)=>(u>=d?u/d:d/u).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(535)}${h(a.pop,l.pop)}${__t(536)}${l.name}${__t(537)}${h(a.area,l.area)}\xD7 ${a.area>=l.area?__t(538):__t(539)}.</small>`}i+="</div>"}cn.innerHTML=i,cn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),S0(hn[+e.dataset.x].o)}),cn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Xf([hn[+e.dataset.i].o],Math.max(Te.tilt,.9)),e.onmouseenter=()=>{let n=hn[+e.dataset.i].o;_l.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=hn.splice(s,1);hn.splice(r,0,a),Qs();let l=ze("#sil");l&&l.classList.add("flash")}}});let t=ze("#sil");t&&M0(t)}Ks.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ks.value);return}let i=Lf(Ks.value.trim());if(!i){Si.style.display="none";return}let t=[],e=[];for(let s of _n){let r=Lf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Si.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Cs(s.pop)}</em></li>`).join("")||__t(495),Si.style.display="block",Si.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Mu(n[+s.dataset.i])),Si._r=n});Ks.addEventListener("keydown",i=>{i.key==="Enter"&&Si._pick?Si._pick(0):i.key==="Enter"&&Si._r&&Si._r[0]&&Mu(Si._r[0]),i.key==="Escape"&&(Ks.value="",Si.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ks&&b0()});var l0=0;addEventListener("resize",()=>{clearTimeout(l0),l0=setTimeout(()=>{let i=ze("#sil");i&&M0(i)},120)});var xu=null,kf=ze("#chip");function e1(i,t,e=.8){xu={codes:new Set(i.map(n=>n.code)),label:t},_n.forEach(n=>{n.inF=xu.codes.has(n.code),yu(n)}),kf.innerHTML=`${__t(540)}${t}</b> \xB7 ${i.length}${i.length===1?__t(541):__t(542)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,kf.style.display="flex",ze("#chx").onclick=b0,Su(),Xf(i,e),i.slice(0,40).forEach(n=>_l.set(n,performance.now()))}function b0(){xu&&(xu=null,_n.forEach(i=>{i.inF=!0,yu(i)}),kf.style.display="none",Su())}var n1="prov";function i1(i){let t=[..._n].sort((a,l)=>l.pop-a.pop),e=[..._n].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[_n.filter(a=>a.pr===s),d0[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(543)]:[e.slice(0,10),__t(544)];if(n==="low")return s==="pop"?[t.slice(-10),__t(545)]:[e.slice(-10),__t(546)];if(n==="size")return[_n.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Cs(+s)}${__t(547)}`:+s==0?`${__t(548)}${Cs(+r)}${__t(549)}`:`${Cs(+s)} \u2013 ${Cs(+r-1)}${__t(549)}`];if(n==="n50"){let a=0,l=0;for(let h of t)if(a+=h.pop,l++,a>=Nf/2)break;return[t.slice(0,l),`${__t(550)}`]}return[[],""]}function s1(i){let[t,e]=i1(i);t.length&&e1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{n1=i.dataset.tab,ze("#dbody").scrollTop=0});var Ur=ze("#rc"),fu=ze("#mcstab");function La(i){Ur.classList.toggle("min",i),ze("#rcgrab span").textContent=i?__t(592):__t(593),hn.length&&Qs()}function vl(i){cn.classList.toggle("min",i),cn.style.transform="",cn.style.opacity="",fu.classList.toggle("on",i&&hn.length>0),i&&(fu.textContent=`\u25B8 ${hn.length} ${hn.length===1?"ficha":"fichas"}`,fu.style.top=cn.style.top||"124px")}function qf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!bu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y;!s.lock&&Math.hypot(l,h)>10&&(s.lock=Math.abs(l)>Math.abs(h)?"x":"y"),s.lock===n&&t&&t(l,h)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y,u=s.lock;s=null,e(u===n?l:0,u===n?h:0,u)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}ze("#rcgrab").onclick=()=>La(!Ur.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&La(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var w0=()=>innerWidth>640;qf(Ur,{axis:"y",onEnd:(i,t)=>{if(!w0())if(t>40&&!Ur.classList.contains("min")){let e=ze("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&La(!0)}else t<-30&&Ur.classList.contains("min")&&La(!1)}});qf(Ur,{axis:"x",onEnd:i=>{w0()&&(i>50?La(!0):i<-30&&Ur.classList.contains("min")&&La(!1))}});qf(cn,{axis:"x",onMove:i=>{i<0&&(cn.classList.add("sw"),cn.style.transform=`translateX(${i}px)`,cn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{cn.classList.remove("sw"),i<-60?(vl(!0),window.__rodHide&&!hn.length&&window.__rodHide()):(cn.style.transform="",cn.style.opacity="")}});fu.onclick=()=>{vl(!1),Qs()};ze("#dtoggle").onclick=()=>{let i=ze("#dp").classList.toggle("open");ze("#rc").classList.toggle("dopen",i),ze("#dtoggle").textContent=i?bu.matches&&innerWidth<=640?__t(594):__t(595):__t(596),window.__rodCard&&window.__rodCard()};var bu=matchMedia("(max-width:640px), (max-height:500px)");function E0(){let i=ze("#leg");bu.matches?ze("#rc").insertBefore(i,ze("#dtoggle")):document.body.appendChild(i),hn.length&&Qs()}bu.addEventListener("change",E0);E0();x0();Xb();Gf();Object.assign(Sn,Te);for(let i of _n)i.z=.01;requestAnimationFrame(_0);e0({scene:Rs,camera:fs,renderer:xl,goal:Te,cur:Sn,invalidate:On,flyTo:(i,t,e,n)=>{Object.assign(Te,{tx:(i-ml)*us,ty:(t-gl)*us,dist:e,tilt:n}),On()},K:us,CX:ml,CY:gl,mcs:cn,q:Ks,list:Si,munis:_n,select:Mu,norm:Lf,fmt:Cs,clamp:Zn,mcsMin:vl});window.__app={scene:Rs,renderer:xl,camera:fs,munis:_n,labs:gu,goal:Te,cur:Sn,select:Mu,get mode(){return zf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(602):__t(603)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
