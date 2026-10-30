(()=>{var vm=0,Id=1,ym=2;var Ko=1,Sm=2,Sa=3,$s=0,Qn=1,ts=2,es=0,Ma=1,Pd=2,Ld=3,Dd=4,Mm=5;var yr=100,bm=101,wm=102,Em=103,Tm=104,Am=200,Cm=201,Rm=202,Im=203,Nd=204,Ud=205,Pm=206,Lm=207,Dm=208,Nm=209,Um=210,Fm=211,Om=212,Bm=213,km=214,gc=0,_c=1,xc=2,la=3,vc=4,yc=5,Sc=6,Mc=7,ih=0,zm=1,$m=2,Vi=0,Fd=1,Od=2,Bd=3,kd=4,zd=5,$d=6,Vd=7;var Hd=300,Vs=301,Sr=302,sh=303,rh=304,Qo=306,bc=1e3,Yi=1001,wc=1002,Pn=1003,Vm=1004;var tl=1005;var On=1006,ah=1007;var Hs=1008;var hi=1009,Gd=1010,Wd=1011,ba=1012,oh=1013,Hi=1014,Ci=1015,Gi=1016,lh=1017,ch=1018,wa=1020,Xd=35902,qd=35899,Yd=1021,Zd=1022,Ri=1023,Ji=1026,Gs=1027,hh=1028,uh=1029,Ws=1030,dh=1031;var fh=1033,el=33776,nl=33777,il=33778,sl=33779,ph=35840,mh=35841,gh=35842,_h=35843,xh=36196,vh=37492,yh=37496,Sh=37488,Mh=37489,rl=37490,bh=37491,wh=37808,Eh=37809,Th=37810,Ah=37811,Ch=37812,Rh=37813,Ih=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Uh=37819,Fh=37820,Oh=37821,Bh=36492,kh=36494,zh=36495,$h=36283,Vh=36284,al=36285,Hh=36286;var _o=2300,Ec=2301,pc=2302,_d=2303,xd=2400,vd=2401,yd=2402;var Hm=3200;var Gh=0,Gm=1,bs="",gi="srgb",xo="srgb-linear",vo="linear",tn="srgb";var mc=7680;var Wm=519,Xm=512,qm=513,Ym=514,Wh=515,Zm=516,Jm=517,Xh=518,jm=519,Jd=35044;var jd="300 es",ki=2e3,ca=2001;function d_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function f_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Km(){let i=yo("canvas");return i.style.display="block",i}var Up={},ha=null;function So(...i){let t="THREE."+i.shift();ha?ha("log",t,...i):console.log(t,...i)}function Qm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=Qm(i);let t="THREE."+i.shift();if(ha)ha("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ye(...i){i=Qm(i);let t="THREE."+i.shift();if(ha)ha("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fr(...i){let t=i.join(" ");t in Up||(Up[t]=!0,ve(...i))}function tg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var eg={[gc]:_c,[xc]:Sc,[vc]:Mc,[la]:yc,[_c]:gc,[Sc]:xc,[Mc]:vc,[yc]:la},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fp=1234567,fo=Math.PI/180,ua=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Kd(i,t){return(i%t+t)%t}function p_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function m_(i,t,e){return i!==t?(e-i)/(t-i):0}function po(i,t,e){return(1-e)*i+e*t}function g_(i,t,e,n){return po(i,t,1-Math.exp(-e*n))}function __(i,t=1){return t-Math.abs(Kd(i,t*2)-t)}function x_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function v_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function y_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function S_(i,t){return i+Math.random()*(t-i)}function M_(i){return i*(.5-Math.random())}function b_(i){i!==void 0&&(Fp=i);let t=Fp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w_(i){return i*fo}function E_(i){return i*ua}function T_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function A_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function C_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function R_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),p=a((t-n)/2),y=r((n-t)/2),M=a((n-t)/2);switch(s){case"XYX":i.set(l*d,c*v,c*p,l*h);break;case"YZY":i.set(c*p,l*d,c*v,l*h);break;case"ZXZ":i.set(c*v,c*p,l*d,l*h);break;case"XZX":i.set(l*d,c*M,c*y,l*h);break;case"YXY":i.set(c*y,l*d,c*M,l*h);break;case"ZYZ":i.set(c*M,c*y,l*d,l*h);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qd={DEG2RAD:fo,RAD2DEG:ua,generateUUID:Zi,clamp:Re,euclideanModulo:Kd,mapLinear:p_,inverseLerp:m_,lerp:po,damp:g_,pingpong:__,smoothstep:x_,smootherstep:v_,randInt:y_,randFloat:S_,randFloatSpread:M_,seededRandom:b_,degToRad:w_,radToDeg:E_,isPowerOfTwo:T_,ceilPowerOfTwo:A_,floorPowerOfTwo:C_,setQuaternionFromProperEuler:R_,normalize:nn,denormalize:Bi},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ki=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],d=n[s+2],v=n[s+3],p=r[a+0],y=r[a+1],M=r[a+2],I=r[a+3];if(v!==I||c!==p||h!==y||d!==M){let x=c*p+h*y+d*M+v*I;x<0&&(p=-p,y=-y,M=-M,I=-I,x=-x);let g=1-l;if(x<.9995){let B=Math.acos(x),k=Math.sin(B);g=Math.sin(g*B)/k,l=Math.sin(l*B)/k,c=c*g+p*l,h=h*g+y*l,d=d*g+M*l,v=v*g+I*l}else{c=c*g+p*l,h=h*g+y*l,d=d*g+M*l,v=v*g+I*l;let B=1/Math.sqrt(c*c+h*h+d*d+v*v);c*=B,h*=B,d*=B,v*=B}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],d=n[s+3],v=r[a],p=r[a+1],y=r[a+2],M=r[a+3];return t[e]=l*M+d*v+c*y-h*p,t[e+1]=c*M+d*p+h*v-l*y,t[e+2]=h*M+d*y+l*p-c*v,t[e+3]=d*M-l*v-c*p-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(s/2),v=l(r/2),p=c(n/2),y=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=p*d*v+h*y*M,this._y=h*y*v-p*d*M,this._z=h*d*M+p*y*v,this._w=h*d*v-p*y*M;break;case"YXZ":this._x=p*d*v+h*y*M,this._y=h*y*v-p*d*M,this._z=h*d*M-p*y*v,this._w=h*d*v+p*y*M;break;case"ZXY":this._x=p*d*v-h*y*M,this._y=h*y*v+p*d*M,this._z=h*d*M+p*y*v,this._w=h*d*v-p*y*M;break;case"ZYX":this._x=p*d*v-h*y*M,this._y=h*y*v+p*d*M,this._z=h*d*M-p*y*v,this._w=h*d*v+p*y*M;break;case"YZX":this._x=p*d*v+h*y*M,this._y=h*y*v+p*d*M,this._z=h*d*M-p*y*v,this._w=h*d*v-p*y*M;break;case"XZY":this._x=p*d*v-h*y*M,this._y=h*y*v-p*d*M,this._z=h*d*M+p*y*v,this._w=h*d*v+p*y*M;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],d=e[6],v=e[10],p=n+l+v;if(p>0){let y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(d-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>l&&n>v){let y=2*Math.sqrt(1+n-l-v);this._w=(d-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(l>v){let y=2*Math.sqrt(1+l-n-v);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+d)/y}else{let y=2*Math.sqrt(1+v-n-l);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*c,this._y=s*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-s*l,this._w=a*d-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,e=Math.sin(e*h)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Op.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Op.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+c*h+a*v-l*d,this.y=n+c*d+l*h-r*v,this.z=s+c*v+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wu.copy(this).projectOnVector(t),this.sub(Wu)}reflect(t){return this.sub(Wu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wu=new Z,Op=new Ki,Ae=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],v=n[7],p=n[2],y=n[5],M=n[8],I=s[0],x=s[3],g=s[6],B=s[1],k=s[4],R=s[7],E=s[2],O=s[5],W=s[8];return r[0]=a*I+l*B+c*E,r[3]=a*x+l*k+c*O,r[6]=a*g+l*R+c*W,r[1]=h*I+d*B+v*E,r[4]=h*x+d*k+v*O,r[7]=h*g+d*R+v*W,r[2]=p*I+y*B+M*E,r[5]=p*x+y*k+M*O,r[8]=p*g+y*R+M*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=d*a-l*h,p=l*c-d*r,y=h*r-a*c,M=e*v+n*p+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/M;return t[0]=v*I,t[1]=(s*h-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=p*I,t[4]=(d*e-s*c)*I,t[5]=(s*r-l*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xu.makeScale(t,e)),this}rotate(t){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xu.makeRotation(-t)),this}translate(t,e){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xu=new Ae,Bp=new Ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new Ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){let i={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tn&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tn&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bs?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xo]:{primaries:t,whitePoint:n,transfer:vo,toXYZ:Bp,fromXYZ:kp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:n,transfer:tn,toXYZ:Bp,fromXYZ:kp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),i}var ze=I_();function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wr,Tc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=yo("canvas")),Wr.width=t.width,Wr.height=t.height;let s=Wr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ss(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},P_=0,da=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(qu(s[a].image)):r.push(qu(s[a]))}else r=qu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var L_=0,Yu=new Z,oi=class i extends ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=On,a=Hs,l=Ri,c=hi,h=i.DEFAULT_ANISOTROPY,d=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Zi(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yu).x}get height(){return this.source.getSize(Yu).y}get depth(){return this.source.getSize(Yu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ve(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=Hd;oi.DEFAULT_ANISOTROPY=1;var en=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],d=c[4],v=c[8],p=c[1],y=c[5],M=c[9],I=c[2],x=c[6],g=c[10];if(Math.abs(d-p)<.01&&Math.abs(v-I)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(v+I)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let k=(h+1)/2,R=(y+1)/2,E=(g+1)/2,O=(d+p)/4,W=(v+I)/4,A=(M+x)/4;return k>R&&k>E?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=O/n,r=W/n):R>E?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=W/r,s=A/r),this.set(n,s,r,e),this}let B=Math.sqrt((x-M)*(x-M)+(v-I)*(v-I)+(p-d)*(p-d));return Math.abs(B)<.001&&(B=1),this.x=(x-M)/B,this.y=(v-I)/B,this.z=(p-d)/B,this.w=Math.acos((h+y+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new oi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new da(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Ac{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mo=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,d,v,p,y,M,I,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,d,v,p,y,M,I,x)}set(t,e,n,s,r,a,l,c,h,d,v,p,y,M,I,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=l,g[13]=c,g[2]=h,g[6]=d,g[10]=v,g[14]=p,g[3]=y,g[7]=M,g[11]=I,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),a=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let p=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=-c*v,e[8]=h,e[1]=y+M*h,e[5]=p-I*h,e[9]=-l*c,e[2]=I-p*h,e[6]=M+y*h,e[10]=a*c}else if(t.order==="YXZ"){let p=c*d,y=c*v,M=h*d,I=h*v;e[0]=p+I*l,e[4]=M*l-y,e[8]=a*h,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=y*l-M,e[6]=I+p*l,e[10]=a*c}else if(t.order==="ZXY"){let p=c*d,y=c*v,M=h*d,I=h*v;e[0]=p-I*l,e[4]=-a*v,e[8]=M+y*l,e[1]=y+M*l,e[5]=a*d,e[9]=I-p*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let p=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=M*h-y,e[8]=p*h+I,e[1]=c*v,e[5]=I*h+p,e[9]=y*h-M,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=I-p*v,e[8]=M*v+y,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=y*v+M,e[10]=p-I*v}else if(t.order==="XZY"){let p=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=-v,e[8]=h*d,e[1]=p*v+I,e[5]=a*d,e[9]=y*v-M,e[2]=M*v-y,e[6]=l*d,e[10]=I*v+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D_,t,N_)}lookAt(t,e,n){let s=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Is.crossVectors(n,pi),Is.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Is.crossVectors(n,pi)),Is.normalize(),$l.crossVectors(pi,Is),s[0]=Is.x,s[4]=$l.x,s[8]=pi.x,s[1]=Is.y,s[5]=$l.y,s[9]=pi.y,s[2]=Is.z,s[6]=$l.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],v=n[5],p=n[9],y=n[13],M=n[2],I=n[6],x=n[10],g=n[14],B=n[3],k=n[7],R=n[11],E=n[15],O=s[0],W=s[4],A=s[8],F=s[12],G=s[1],Y=s[5],at=s[9],lt=s[13],J=s[2],Q=s[6],dt=s[10],ft=s[14],Tt=s[3],pt=s[7],wt=s[11],Mt=s[15];return r[0]=a*O+l*G+c*J+h*Tt,r[4]=a*W+l*Y+c*Q+h*pt,r[8]=a*A+l*at+c*dt+h*wt,r[12]=a*F+l*lt+c*ft+h*Mt,r[1]=d*O+v*G+p*J+y*Tt,r[5]=d*W+v*Y+p*Q+y*pt,r[9]=d*A+v*at+p*dt+y*wt,r[13]=d*F+v*lt+p*ft+y*Mt,r[2]=M*O+I*G+x*J+g*Tt,r[6]=M*W+I*Y+x*Q+g*pt,r[10]=M*A+I*at+x*dt+g*wt,r[14]=M*F+I*lt+x*ft+g*Mt,r[3]=B*O+k*G+R*J+E*Tt,r[7]=B*W+k*Y+R*Q+E*pt,r[11]=B*A+k*at+R*dt+E*wt,r[15]=B*F+k*lt+R*ft+E*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],d=t[2],v=t[6],p=t[10],y=t[14],M=t[3],I=t[7],x=t[11],g=t[15],B=c*y-h*p,k=l*y-h*v,R=l*p-c*v,E=a*y-h*d,O=a*p-c*d,W=a*v-l*d;return e*(I*B-x*k+g*R)-n*(M*B-x*E+g*O)+s*(M*k-I*E+g*W)-r*(M*R-I*O+x*W)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=t[9],p=t[10],y=t[11],M=t[12],I=t[13],x=t[14],g=t[15],B=e*l-n*a,k=e*c-s*a,R=e*h-r*a,E=n*c-s*l,O=n*h-r*l,W=s*h-r*c,A=d*I-v*M,F=d*x-p*M,G=d*g-y*M,Y=v*x-p*I,at=v*g-y*I,lt=p*g-y*x,J=B*lt-k*at+R*Y+E*G-O*F+W*A;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/J;return t[0]=(l*lt-c*at+h*Y)*Q,t[1]=(s*at-n*lt-r*Y)*Q,t[2]=(I*W-x*O+g*E)*Q,t[3]=(p*O-v*W-y*E)*Q,t[4]=(c*G-a*lt-h*F)*Q,t[5]=(e*lt-s*G+r*F)*Q,t[6]=(x*R-M*W-g*k)*Q,t[7]=(d*W-p*R+y*k)*Q,t[8]=(a*at-l*G+h*A)*Q,t[9]=(n*G-e*at-r*A)*Q,t[10]=(M*O-I*R+g*B)*Q,t[11]=(v*R-d*O-y*B)*Q,t[12]=(l*F-a*Y-c*A)*Q,t[13]=(e*Y-n*F+s*A)*Q,t[14]=(I*k-M*E-x*B)*Q,t[15]=(d*E-v*k+p*B)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+n,d*c-s*a,0,h*c-s*l,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,d=a+a,v=l+l,p=r*h,y=r*d,M=r*v,I=a*d,x=a*v,g=l*v,B=c*h,k=c*d,R=c*v,E=n.x,O=n.y,W=n.z;return s[0]=(1-(I+g))*E,s[1]=(y+R)*E,s[2]=(M-k)*E,s[3]=0,s[4]=(y-R)*O,s[5]=(1-(p+g))*O,s[6]=(x+B)*O,s[7]=0,s[8]=(M+k)*W,s[9]=(x-B)*W,s[10]=(1-(p+I))*W,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xr.set(s[0],s[1],s[2]).length(),l=Xr.set(s[4],s[5],s[6]).length(),c=Xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ni.copy(this);let h=1/a,d=1/l,v=1/c;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=d,Ni.elements[5]*=d,Ni.elements[6]*=d,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,e.setFromRotationMatrix(Ni),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=ki,c=!1){let h=this.elements,d=2*r/(e-t),v=2*r/(n-s),p=(e+t)/(e-t),y=(n+s)/(n-s),M,I;if(c)M=r/(a-r),I=a*r/(a-r);else if(l===ki)M=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===ca)M=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=ki,c=!1){let h=this.elements,d=2/(e-t),v=2/(n-s),p=-(e+t)/(e-t),y=-(n+s)/(n-s),M,I;if(c)M=1/(a-r),I=a/(a-r);else if(l===ki)M=-2/(a-r),I=-(a+r)/(a-r);else if(l===ca)M=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xr=new Z,Ni=new Ve,D_=new Z(0,0,0),N_=new Z(1,1,1),Is=new Z,$l=new Z,pi=new Z,zp=new Ve,$p=new Ki,Ms=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],v=s[2],p=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,y),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $p.setFromEuler(this),this.setFromQuaternion($p,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U_=0,Vp=new Z,qr=new Ki,gs=new Ve,Vl=new Z,so=new Z,F_=new Z,O_=new Ki,Hp=new Z(1,0,0),Gp=new Z(0,1,0),Wp=new Z(0,0,1),Xp={type:"added"},B_={type:"removed"},Yr={type:"childadded",child:null},Zu={type:"childremoved",child:null},Ln=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Ms,n=new Ki,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ae}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(Hp,t)}rotateY(t){return this.rotateOnAxis(Gp,t)}rotateZ(t){return this.rotateOnAxis(Wp,t)}translateOnAxis(t,e){return Vp.copy(t).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hp,t)}translateY(t){return this.translateOnAxis(Gp,t)}translateZ(t){return this.translateOnAxis(Wp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vl.copy(t):Vl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(so,Vl,this.up):gs.lookAt(Vl,so,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(gs),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xp),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_),Zu.child=t,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gs.multiply(t.parent.matrixWorld)),t.applyMatrix4(gs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xp),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,F_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,O_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let v=c[h];r(t.shapes,v)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),v=a(t.shapes),p=a(t.skeletons),y=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),p.length>0&&(n.skeletons=p),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.DEFAULT_UP=new Z(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let x=e.getJointPose(I,n),g=this._getHandJoint(h,I);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let d=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],p=d.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&p>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Ju(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _e=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ze.workingColorSpace){if(t=Kd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ju(a,r,t+1/3),this.g=Ju(a,r,t),this.b=Ju(a,r,t-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(t,e=gi){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ve("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gi){let n=ng[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return ze.workingToColorSpace(Hn.copy(this),t),Math.round(Re(Hn.r*255,0,255))*65536+Math.round(Re(Hn.g*255,0,255))*256+Math.round(Re(Hn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ze.workingColorSpace){ze.workingToColorSpace(Hn.copy(this),e);let n=Hn.r,s=Hn.g,r=Hn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,d=(l+a)/2;if(l===a)c=0,h=0;else{let v=a-l;switch(h=d<=.5?v/(a+l):v/(2-a-l),a){case n:c=(s-r)/v+(s<r?6:0);break;case s:c=(r-n)/v+2;break;case r:c=(n-s)/v+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ze.workingColorSpace){return ze.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=gi){ze.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,s=Hn.b;return t!==gi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ps),this.setHSL(Ps.h+t,Ps.s+e,Ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ps),t.getHSL(Hl);let n=po(Ps.h,Hl.h,e),s=po(Ps.s,Hl.s,e),r=po(Ps.l,Hl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new _e;_e.NAMES=ng;var bo=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ui=new Z,_s=new Z,ju=new Z,xs=new Z,Zr=new Z,Jr=new Z,qp=new Z,Ku=new Z,Qu=new Z,td=new Z,ed=new en,nd=new en,id=new en,Us=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ui.subVectors(t,e),s.cross(Ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ui.subVectors(s,e),_s.subVectors(n,e),ju.subVectors(t,e);let a=Ui.dot(Ui),l=Ui.dot(_s),c=Ui.dot(ju),h=_s.dot(_s),d=_s.dot(ju),v=a*h-l*l;if(v===0)return r.set(0,0,0),null;let p=1/v,y=(h*c-l*d)*p,M=(a*d-l*c)*p;return r.set(1-y-M,M,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,xs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xs.x),c.addScaledVector(a,xs.y),c.addScaledVector(l,xs.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ed.setScalar(0),nd.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(t,e),nd.fromBufferAttribute(t,n),id.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ed,r.x),a.addScaledVector(nd,r.y),a.addScaledVector(id,r.z),a}static isFrontFacing(t,e,n,s){return Ui.subVectors(n,e),_s.subVectors(t,e),Ui.cross(_s).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),Ui.cross(_s).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Zr.subVectors(s,n),Jr.subVectors(r,n),Ku.subVectors(t,n);let c=Zr.dot(Ku),h=Jr.dot(Ku);if(c<=0&&h<=0)return e.copy(n);Qu.subVectors(t,s);let d=Zr.dot(Qu),v=Jr.dot(Qu);if(d>=0&&v<=d)return e.copy(s);let p=c*v-d*h;if(p<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Zr,a);td.subVectors(t,r);let y=Zr.dot(td),M=Jr.dot(td);if(M>=0&&y<=M)return e.copy(r);let I=y*h-c*M;if(I<=0&&h>=0&&M<=0)return l=h/(h-M),e.copy(n).addScaledVector(Jr,l);let x=d*M-y*v;if(x<=0&&v-d>=0&&y-M>=0)return qp.subVectors(r,s),l=(v-d)/(v-d+(y-M)),e.copy(s).addScaledVector(qp,l);let g=1/(x+I+p);return a=I*g,l=p*g,e.copy(n).addScaledVector(Zr,a).addScaledVector(Jr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Fi):Fi.fromBufferAttribute(r,a),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(t.matrixWorld),this.union(Gl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),Wl.subVectors(this.max,ro),jr.subVectors(t.a,ro),Kr.subVectors(t.b,ro),Qr.subVectors(t.c,ro),Ls.subVectors(Kr,jr),Ds.subVectors(Qr,Kr),lr.subVectors(jr,Qr);let e=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-lr.z,lr.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,lr.z,0,-lr.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-lr.y,lr.x,0];return!sd(e,jr,Kr,Qr,Wl)||(e=[1,0,0,0,1,0,0,0,1],!sd(e,jr,Kr,Qr,Wl))?!1:(Xl.crossVectors(Ls,Ds),e=[Xl.x,Xl.y,Xl.z],sd(e,jr,Kr,Qr,Wl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vs=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fi=new Z,Gl=new Kn,jr=new Z,Kr=new Z,Qr=new Z,Ls=new Z,Ds=new Z,lr=new Z,ro=new Z,Wl=new Z,Xl=new Z,cr=new Z;function sd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){cr.fromArray(i,r);let l=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),c=t.dot(cr),h=e.dot(cr),d=n.dot(cr);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}var wn=new Z,ql=new $t,z_=0,rn=class extends ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jd,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ql.fromBufferAttribute(this,e),ql.applyMatrix3(t),this.setXY(e,ql.x,ql.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix3(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wo=class extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Eo=class extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var vn=class extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},$_=new Kn,ao=new Z,rd=new Z,ci=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(rd)),this.expandByPoint(ao.copy(t.center).sub(rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},V_=0,Ai=new Ve,ad=new Ln,ta=new Z,mi=new Kn,oo=new Kn,In=new Z,yn=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d_(t)?Eo:wo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,n){return Ai.makeTranslation(t,e,n),this.applyMatrix4(Ai),this}scale(t,e,n){return Ai.makeScale(t,e,n),this.applyMatrix4(Ai),this}lookAt(t){return ad.lookAt(t),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];oo.setFromBufferAttribute(l),this.morphTargetsRelative?(In.addVectors(mi.min,oo.min),mi.expandByPoint(In),In.addVectors(mi.max,oo.max),mi.expandByPoint(In)):(mi.expandByPoint(oo.min),mi.expandByPoint(oo.max))}mi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)In.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(In));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)In.fromBufferAttribute(l,h),c&&(ta.fromBufferAttribute(t,h),In.add(ta)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let A=0;A<n.count;A++)l[A]=new Z,c[A]=new Z;let h=new Z,d=new Z,v=new Z,p=new $t,y=new $t,M=new $t,I=new Z,x=new Z;function g(A,F,G){h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,G),p.fromBufferAttribute(r,A),y.fromBufferAttribute(r,F),M.fromBufferAttribute(r,G),d.sub(h),v.sub(h),y.sub(p),M.sub(p);let Y=1/(y.x*M.y-M.x*y.y);isFinite(Y)&&(I.copy(d).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(Y),x.copy(v).multiplyScalar(y.x).addScaledVector(d,-M.x).multiplyScalar(Y),l[A].add(I),l[F].add(I),l[G].add(I),c[A].add(x),c[F].add(x),c[G].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let A=0,F=B.length;A<F;++A){let G=B[A],Y=G.start,at=G.count;for(let lt=Y,J=Y+at;lt<J;lt+=3)g(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}let k=new Z,R=new Z,E=new Z,O=new Z;function W(A){E.fromBufferAttribute(s,A),O.copy(E);let F=l[A];k.copy(F),k.sub(E.multiplyScalar(E.dot(F))).normalize(),R.crossVectors(O,F);let Y=R.dot(c[A])<0?-1:1;a.setXYZW(A,k.x,k.y,k.z,Y)}for(let A=0,F=B.length;A<F;++A){let G=B[A],Y=G.start,at=G.count;for(let lt=Y,J=Y+at;lt<J;lt+=3)W(t.getX(lt+0)),W(t.getX(lt+1)),W(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,y=n.count;p<y;p++)n.setXYZ(p,0,0,0);let s=new Z,r=new Z,a=new Z,l=new Z,c=new Z,h=new Z,d=new Z,v=new Z;if(t)for(let p=0,y=t.count;p<y;p+=3){let M=t.getX(p+0),I=t.getX(p+1),x=t.getX(p+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,x),l.add(d),c.add(d),h.add(d),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,y=e.count;p<y;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)In.fromBufferAttribute(t,e),In.normalize(),t.setXYZ(e,In.x,In.y,In.z)}toNonIndexed(){function t(l,c){let h=l.array,d=l.itemSize,v=l.normalized,p=new h.constructor(c.length*d),y=0,M=0;for(let I=0,x=c.length;I<x;I++){l.isInterleavedBufferAttribute?y=c[I]*l.data.stride+l.offset:y=c[I]*d;for(let g=0;g<d;g++)p[M++]=h[y++]}return new rn(p,d,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let d=0,v=h.length;d<v;d++){let p=h[d],y=t(p,n);c.push(y)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let v=0,p=h.length;v<p;v++){let y=h[v];d.push(y.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],v=r[h];for(let p=0,y=v.length;p<y;p++)d.push(v[p].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let v=a[h];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jd,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},jn=new Z,$i=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyMatrix4(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyNormalMatrix(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.transformDirection(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},od=new Z,H_=new Z,G_=new Ae,Oi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=od.subVectors(n,e).cross(H_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(od),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||G_.getNormalMatrix(t),s=this.coplanarPoint(od).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},W_=0,Qi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ma,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Ud,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ve(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ys=new Z,ld=new Z,Yl=new Z,Zl=new Z,pr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ys.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,e),ys.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ld.copy(t).add(e).multiplyScalar(.5),Yl.copy(e).sub(t).normalize(),Zl.copy(this.origin).sub(ld);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yl),l=Zl.dot(this.direction),c=-Zl.dot(Yl),h=Zl.lengthSq(),d=Math.abs(1-a*a),v,p,y,M;if(d>0)if(v=a*c-l,p=a*l-c,M=r*d,v>=0)if(p>=-M)if(p<=M){let I=1/d;v*=I,p*=I,y=v*(v+a*p+2*l)+p*(a*v+p+2*c)+h}else p=r,v=Math.max(0,-(a*p+l)),y=-v*v+p*(p+2*c)+h;else p=-r,v=Math.max(0,-(a*p+l)),y=-v*v+p*(p+2*c)+h;else p<=-M?(v=Math.max(0,-(-a*r+l)),p=v>0?-r:Math.min(Math.max(-r,-c),r),y=-v*v+p*(p+2*c)+h):p<=M?(v=0,p=Math.min(Math.max(-r,-c),r),y=p*(p+2*c)+h):(v=Math.max(0,-(a*r+l)),p=v>0?r:Math.min(Math.max(-r,-c),r),y=-v*v+p*(p+2*c)+h);else p=a>0?-r:r,v=Math.max(0,-(a*p+l)),y=-v*v+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(ld).addScaledVector(Yl,p),y}intersectSphere(t,e){if(t.radius<0)return null;ys.subVectors(t.center,this.origin);let n=ys.dot(this.direction),s=ys.dot(ys)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-p.z)*v,c=(t.max.z-p.z)*v):(l=(t.max.z-p.z)*v,c=(t.min.z-p.z)*v),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,v=t.x-a.x,p=t.y-a.y,y=t.z-a.z,M=e.x-a.x,I=e.y-a.y,x=e.z-a.z,g=n.x-a.x,B=n.y-a.y,k=n.z-a.z,R=Math.abs(c),E=Math.abs(h),O=Math.abs(d),W,A,F,G,Y,at,lt,J,Q,dt,ft,Tt;if(R>=E&&R>=O?(F=c,at=v,Q=M,Tt=g,c>=0?(W=h,A=d,G=p,Y=y,lt=I,J=x,dt=B,ft=k):(W=d,A=h,G=y,Y=p,lt=x,J=I,dt=k,ft=B)):E>=O?(F=h,at=p,Q=I,Tt=B,h>=0?(W=d,A=c,G=y,Y=v,lt=x,J=M,dt=k,ft=g):(W=c,A=d,G=v,Y=y,lt=M,J=x,dt=g,ft=k)):(F=d,at=y,Q=x,Tt=k,d>=0?(W=c,A=h,G=v,Y=p,lt=M,J=I,dt=g,ft=B):(W=h,A=c,G=p,Y=v,lt=I,J=M,dt=B,ft=g)),F===0)return null;let pt=W/F,wt=A/F,Mt=1/F,Xt=G-pt*at,jt=Y-wt*at,He=lt-pt*Q,Ie=J-wt*Q,Be=dt-pt*Tt,_t=ft-wt*Tt,vt=Be*Ie-_t*He,Pt=Xt*_t-jt*Be,oe=He*jt-Ie*Xt;if(s){if(vt<0||Pt<0||oe<0)return null}else if((vt<0||Pt<0||oe<0)&&(vt>0||Pt>0||oe>0))return null;let Zt=vt+Pt+oe;if(Zt===0)return null;let me=Mt*(vt*at+Pt*Q+oe*Tt);return(Zt>0?me<0:me>0)?null:this.at(me/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mr=class extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yp=new Ve,hr=new pr,Jl=new ci,Zp=new Z,jl=new Z,Kl=new Z,Ql=new Z,cd=new Z,tc=new Z,Jp=new Z,ec=new Z,Dn=class extends Ln{constructor(t=new yn,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){tc.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let d=l[c],v=r[c];d!==0&&(cd.fromBufferAttribute(v,t),a?tc.addScaledVector(cd,d):tc.addScaledVector(cd.sub(e),d))}e.add(tc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(r),hr.copy(t.ray).recast(t.near),!(Jl.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Jl,Zp)===null||hr.origin.distanceToSquared(Zp)>(t.far-t.near)**2))&&(Yp.copy(r).invert(),hr.copy(t.ray).applyMatrix4(Yp),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,p=r.groups,y=r.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,I=p.length;M<I;M++){let x=p[M],g=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=l.getX(R),W=l.getX(R+1),A=l.getX(R+2);s=nc(this,g,t,n,h,d,v,O,W,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(l.count,y.start+y.count);for(let x=M,g=I;x<g;x+=3){let B=l.getX(x),k=l.getX(x+1),R=l.getX(x+2);s=nc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,I=p.length;M<I;M++){let x=p[M],g=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=R,W=R+1,A=R+2;s=nc(this,g,t,n,h,d,v,O,W,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let x=M,g=I;x<g;x+=3){let B=x,k=x+1,R=x+2;s=nc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function X_(i,t,e,n,s,r,a,l){let c;if(t.side===Qn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===$s,l),c===null)return null;ec.copy(l),ec.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ec);return h<e.near||h>e.far?null:{distance:h,point:ec.clone(),object:i}}function nc(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,jl),i.getVertexPosition(c,Kl),i.getVertexPosition(h,Ql);let d=X_(i,t,e,n,jl,Kl,Ql,Jp);if(d){let v=new Z;Us.getBarycoord(Jp,jl,Kl,Ql,v),s&&(d.uv=Us.getInterpolatedAttribute(s,l,c,h,v,new $t)),r&&(d.uv1=Us.getInterpolatedAttribute(r,l,c,h,v,new $t)),a&&(d.normal=Us.getInterpolatedAttribute(a,l,c,h,v,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:l,b:c,c:h,normal:new Z,materialIndex:0};Us.getNormal(jl,Kl,Ql,p.normal),d.face=p,d.barycoord=v}return d}var To=class extends oi{constructor(t=null,e=1,n=1,s,r,a,l,c,h=Pn,d=Pn,v,p){super(null,a,l,c,h,d,s,r,v,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ao=class extends rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ea=new Ve,jp=new Ve,ic=[],Kp=new Kn,q_=new Ve,lo=new Dn,co=new ci,Co=class extends Dn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ea),Kp.copy(t.boundingBox).applyMatrix4(ea),this.boundingBox.union(Kp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ea),co.copy(t.boundingSphere).applyMatrix4(ea),this.boundingSphere.union(co)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(n),t.ray.intersectsSphere(co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ea),jp.multiplyMatrices(n,ea),lo.matrixWorld=jp,lo.raycast(t,ic);for(let a=0,l=ic.length;a<l;a++){let c=ic[a];c.instanceId=r,c.object=this,e.push(c)}ic.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(s*this.count),s,this.count,hh,Ci));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ur=new ci,Y_=new $t(.5,.5),sc=new Z,ma=class{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],d=r[4],v=r[5],p=r[6],y=r[7],M=r[8],I=r[9],x=r[10],g=r[11],B=r[12],k=r[13],R=r[14],E=r[15];if(s[0].setComponents(h-a,y-d,g-M,E-B).normalize(),s[1].setComponents(h+a,y+d,g+M,E+B).normalize(),s[2].setComponents(h+l,y+v,g+I,E+k).normalize(),s[3].setComponents(h-l,y-v,g-I,E-k).normalize(),n)s[4].setComponents(c,p,x,R).normalize(),s[5].setComponents(h-c,y-p,g-x,E-R).normalize();else if(s[4].setComponents(h-c,y-p,g-x,E-R).normalize(),e===ki)s[5].setComponents(h+c,y+p,g+x,E+R).normalize();else if(e===ca)s[5].setComponents(c,p,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);let e=Y_.distanceTo(t.center);return ur.radius=.7071067811865476+e,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sc.x=s.normal.x>0?t.max.x:t.min.x,sc.y=s.normal.y>0?t.max.y:t.min.y,sc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends Qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ic=new Z,Pc=new Z,Qp=new Ve,ho=new pr,rc=new ci,hd=new Z,tm=new Z,Lc=class extends Ln{constructor(t=new yn,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ic.fromBufferAttribute(e,s-1),Pc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ic.distanceTo(Pc);t.setAttribute("lineDistance",new vn(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,t.ray.intersectsSphere(rc)===!1)return;Qp.copy(s).invert(),ho.copy(t.ray).applyMatrix4(Qp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){let y=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let g=d.getX(I),B=d.getX(I+1),k=ac(this,t,ho,c,g,B,I);k&&e.push(k)}if(this.isLineLoop){let I=d.getX(M-1),x=d.getX(y),g=ac(this,t,ho,c,I,x,M-1);g&&e.push(g)}}else{let y=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let g=ac(this,t,ho,c,I,I+1,I);g&&e.push(g)}if(this.isLineLoop){let I=ac(this,t,ho,c,M-1,y,M-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function ac(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Ic.fromBufferAttribute(l,s),Pc.fromBufferAttribute(l,r),e.distanceSqToSegment(Ic,Pc,hd,tm)>n)return;hd.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(hd);if(!(h<t.near||h>t.far))return{distance:h,point:tm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ro=class extends Lc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Dc=class extends Qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},em=new Ve,Sd=new pr,oc=new ci,lc=new Z,_r=class extends Ln{constructor(t=new yn,e=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,t.ray.intersectsSphere(oc)===!1)return;em.copy(s).invert(),Sd.copy(t.ray).applyMatrix4(em);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,v=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let M=p,I=y;M<I;M++){let x=h.getX(M);lc.fromBufferAttribute(v,x),nm(lc,x,c,s,t,e,this)}}else{let p=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let M=p,I=y;M<I;M++)lc.fromBufferAttribute(v,M),nm(lc,M,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function nm(i,t,e,n,s,r,a){let l=Sd.distanceSqToPoint(i);if(l<e){let c=new Z;Sd.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Io=class extends oi{constructor(t=[],e=Vs,n,s,r,a,l,c,h,d){super(t,e,n,s,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Fs=class extends oi{constructor(t,e,n=Hi,s,r,a,l=Pn,c=Pn,h,d=Ji,v=1){if(d!==Ji&&d!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:v};super(p,s,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Nc=class extends Fs{constructor(t,e=Hi,n=Vs,s,r,a=Pn,l=Pn,c,h=Ji){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,c,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Po=class extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ga=class i extends yn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],d=[],v=[],p=0,y=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(v,2));function M(I,x,g,B,k,R,E,O,W,A,F){let G=R/W,Y=E/A,at=R/2,lt=E/2,J=O/2,Q=W+1,dt=A+1,ft=0,Tt=0,pt=new Z;for(let wt=0;wt<dt;wt++){let Mt=wt*Y-lt;for(let Xt=0;Xt<Q;Xt++){let jt=Xt*G-at;pt[I]=jt*B,pt[x]=Mt*k,pt[g]=J,h.push(pt.x,pt.y,pt.z),pt[I]=0,pt[x]=0,pt[g]=O>0?1:-1,d.push(pt.x,pt.y,pt.z),v.push(Xt/W),v.push(1-wt/A),ft+=1}}for(let wt=0;wt<A;wt++)for(let Mt=0;Mt<W;Mt++){let Xt=p+Mt+Q*wt,jt=p+Mt+Q*(wt+1),He=p+(Mt+1)+Q*(wt+1),Ie=p+(Mt+1)+Q*wt;c.push(Xt,jt,Ie),c.push(jt,He,Ie),Tt+=6}l.addGroup(y,Tt,F),y+=Tt,p+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Lo=class i extends yn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],p=[],y=[],M=0,I=[],x=n/2,g=0;B(),a===!1&&(t>0&&k(!0),e>0&&k(!1)),this.setIndex(d),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(p,3)),this.setAttribute("uv",new vn(y,2));function B(){let R=new Z,E=new Z,O=0,W=(e-t)/n;for(let A=0;A<=r;A++){let F=[],G=A/r,Y=G*(e-t)+t;for(let at=0;at<=s;at++){let lt=at/s,J=lt*c+l,Q=Math.sin(J),dt=Math.cos(J);E.x=Y*Q,E.y=-G*n+x,E.z=Y*dt,v.push(E.x,E.y,E.z),R.set(Q,W,dt).normalize(),p.push(R.x,R.y,R.z),y.push(lt,1-G),F.push(M++)}I.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let G=I[F][A],Y=I[F+1][A],at=I[F+1][A+1],lt=I[F][A+1];(t>0||F!==0)&&(d.push(G,Y,lt),O+=3),(e>0||F!==r-1)&&(d.push(Y,at,lt),O+=3)}h.addGroup(g,O,0),g+=O}function k(R){let E=M,O=new $t,W=new Z,A=0,F=R===!0?t:e,G=R===!0?1:-1;for(let at=1;at<=s;at++)v.push(0,x*G,0),p.push(0,G,0),y.push(.5,.5),M++;let Y=M;for(let at=0;at<=s;at++){let J=at/s*c+l,Q=Math.cos(J),dt=Math.sin(J);W.x=F*dt,W.y=x*G,W.z=F*Q,v.push(W.x,W.y,W.z),p.push(0,G,0),O.x=Q*.5+.5,O.y=dt*.5*G+.5,y.push(O.x,O.y),M++}for(let at=0;at<s;at++){let lt=E+at,J=Y+at;R===!0?d.push(J,J+1,lt):d.push(J+1,J,lt),A+=3}h.addGroup(g,A,R===!0?1:2),g+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,c=r-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,y=(a-d)/p;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),c=e||(a.isVector2?new $t:new Z);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,s=[],r=[],a=[],l=new Z,c=new Ve;for(let y=0;y<=t;y++){let M=y/t;s[y]=this.getTangentAt(M,new Z)}r[0]=new Z,a[0]=new Z;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),v<=h&&(h=v,n.set(0,1,0)),p<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),l.crossVectors(s[y-1],s[y]),l.length()>Number.EPSILON){l.normalize();let M=Math.acos(Re(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(l,M))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Re(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(y=-y);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],y*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_a=class extends _i{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),p=c-this.aX,y=h-this.aY;c=p*d-y*v+this.aX,h=p*v+y*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uc=class extends _a{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tf(){let i=0,t=0,e=0,n=0;function s(r,a,l,c){i=r,t=l,e=-3*r+3*a-2*l-c,n=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,h){s(a,l,h*(l-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,h,d,v){let p=(a-r)/h-(l-r)/(h+d)+(l-a)/d,y=(l-a)/d-(c-a)/(d+v)+(c-l)/v;p*=d,y*=d,s(a,l,p,y)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var im=new Z,sm=new Z,ud=new tf,dd=new tf,fd=new tf,Fc=class extends _i{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(sm.subVectors(s[0],s[1]).add(s[0]),h=sm);let v=s[l%r],p=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(im.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=im),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,M=Math.pow(h.distanceToSquared(v),y),I=Math.pow(v.distanceToSquared(p),y),x=Math.pow(p.distanceToSquared(d),y);I<1e-4&&(I=1),M<1e-4&&(M=I),x<1e-4&&(x=I),ud.initNonuniformCatmullRom(h.x,v.x,p.x,d.x,M,I,x),dd.initNonuniformCatmullRom(h.y,v.y,p.y,d.y,M,I,x),fd.initNonuniformCatmullRom(h.z,v.z,p.z,d.z,M,I,x)}else this.curveType==="catmullrom"&&(ud.initCatmullRom(h.x,v.x,p.x,d.x,this.tension),dd.initCatmullRom(h.y,v.y,p.y,d.y,this.tension),fd.initCatmullRom(h.z,v.z,p.z,d.z,this.tension));return n.set(ud.calc(c),dd.calc(c),fd.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,c=i*l;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*l+r*i+e}function Z_(i,t){let e=1-i;return e*e*t}function J_(i,t){return 2*(1-i)*i*t}function j_(i,t){return i*i*t}function mo(i,t,e,n){return Z_(i,t)+J_(i,e)+j_(i,n)}function K_(i,t){let e=1-i;return e*e*e*t}function Q_(i,t){let e=1-i;return 3*e*e*i*t}function tx(i,t){return 3*(1-i)*i*i*t}function ex(i,t){return i*i*i*t}function go(i,t,e,n,s){return K_(i,t)+Q_(i,e)+tx(i,n)+ex(i,s)}var Do=class extends _i{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(go(t,s.x,r.x,a.x,l.x),go(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends _i{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(go(t,s.x,r.x,a.x,l.x),go(t,s.y,r.y,a.y,l.y),go(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends _i{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends _i{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends _i{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(mo(t,s.x,r.x,a.x),mo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kc=class extends _i{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(mo(t,s.x,r.x,a.x),mo(t,s.y,r.y,a.y),mo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(rm(l,c.x,h.x,d.x,v.x),rm(l,c.y,h.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},Md=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Fc,CubicBezierCurve:Do,CubicBezierCurve3:Oc,EllipseCurve:_a,LineCurve:No,LineCurve3:Bc,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:kc,SplineCurve:Fo}),zc=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Md[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){let d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Md[s.type]().fromJSON(s))}return this}},xr=class extends zc{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new No(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Uo(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Do(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,c){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,c),this}absellipse(t,e,n,s,r,a,l,c){let h=new _a(t,e,n,s,r,a,l,c);if(this.curves.length>0){let v=h.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xa=class extends xr{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}};function nx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ig(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,c,h;if(n&&(r=ox(i,t,r,e)),i.length>80*e){l=i[0],c=i[1];let d=l,v=c;for(let p=e;p<s;p+=e){let y=i[p],M=i[p+1];y<l&&(l=y),M<c&&(c=M),y>d&&(d=y),M>v&&(v=M)}h=Math.max(d-l,v-c),h=h!==0?32767/h:0}return Oo(r,a,e,l,c,h,0),a}function ig(i,t,e,n,s){let r;if(s===xx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=am(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=am(a/n|0,i[a],i[a+1],r);return r&&va(r,r.next)&&(ko(r),r=r.next),r}function vr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(va(e,e.next)||gn(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?sx(i,n,s,r):ix(i)){t.push(c.i,i.i,h.i),ko(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=rx(vr(i),t),Oo(i,t,e,n,s,r,2)):a===2&&ax(i,t,e,n,s,r):Oo(vr(i),t,e,n,s,r,1);break}}}function ix(i){let t=i.prev,e=i,n=i.next;if(gn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,c=e.y,h=n.y,d=Math.min(s,r,a),v=Math.min(l,c,h),p=Math.max(s,r,a),y=Math.max(l,c,h),M=n.next;for(;M!==t;){if(M.x>=d&&M.x<=p&&M.y>=v&&M.y<=y&&uo(s,l,r,c,a,h,M.x,M.y)&&gn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function sx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(gn(s,r,a)>=0)return!1;let l=s.x,c=r.x,h=a.x,d=s.y,v=r.y,p=a.y,y=Math.min(l,c,h),M=Math.min(d,v,p),I=Math.max(l,c,h),x=Math.max(d,v,p),g=bd(y,M,t,e,n),B=bd(I,x,t,e,n),k=i.prevZ,R=i.nextZ;for(;k&&k.z>=g&&R&&R.z<=B;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&uo(l,d,c,v,h,p,k.x,k.y)&&gn(k.prev,k,k.next)>=0||(k=k.prevZ,R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&uo(l,d,c,v,h,p,R.x,R.y)&&gn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;k&&k.z>=g;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&uo(l,d,c,v,h,p,k.x,k.y)&&gn(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;R&&R.z<=B;){if(R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&uo(l,d,c,v,h,p,R.x,R.y)&&gn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function rx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!va(n,s)&&rg(n,e,e.next,s)&&Bo(n,s)&&Bo(s,n)&&(t.push(n.i,e.i,s.i),ko(e),ko(e.next),e=i=s),e=e.next}while(e!==i);return vr(e)}function ax(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&mx(a,l)){let c=ag(a,l);a=vr(a,a.next),c=vr(c,c.next),Oo(a,t,e,n,s,r,0),Oo(c,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function ox(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=ig(i,l,c,n,!1);h===h.next&&(h.steiner=!0),s.push(px(h))}s.sort(lx);for(let r=0;r<s.length;r++)e=cx(s[r],e);return e}function lx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cx(i,t){let e=hx(i,t);if(!e)return t;let n=ag(e,i);return vr(n,n.next),vr(e,e.next)}function hx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(va(i,e))return e;do{if(va(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,c=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&sg(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Bo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&ux(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function ux(i,t){return gn(i.prev,i,t.prev)<0&&gn(t.next,i,i.next)<0}function dx(i,t,e,n){let s=i;do s.z===0&&(s.z=bd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fx(s)}function fx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function bd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function px(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sg(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function uo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&sg(i,t,e,n,s,r,a,l)}function mx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gx(i,t)&&(Bo(i,t)&&Bo(t,i)&&_x(i,t)&&(gn(i.prev,i,t.prev)||gn(i,t.prev,t))||va(i,t)&&gn(i.prev,i,i.next)>0&&gn(t.prev,t,t.next)>0)}function gn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function va(i,t){return i.x===t.x&&i.y===t.y}function rg(i,t,e,n){let s=hc(gn(i,t,e)),r=hc(gn(i,t,n)),a=hc(gn(e,n,i)),l=hc(gn(e,n,t));return!!(s!==r&&a!==l||s===0&&cc(i,e,t)||r===0&&cc(i,n,t)||a===0&&cc(e,i,n)||l===0&&cc(e,t,n))}function cc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hc(i){return i>0?1:i<0?-1:0}function gx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bo(i,t){return gn(i.prev,i,i.next)<0?gn(i,t,i.next)>=0&&gn(i,i.prev,t)>=0:gn(i,t,i.prev)<0||gn(i,i.next,t)<0}function _x(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ag(i,t){let e=wd(i.i,i.x,i.y),n=wd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function am(i,t,e,n){let s=wd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ed=class{static triangulate(t,e,n=2){return nx(t,e,n)}},dr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];om(t),lm(n,t);let a=t.length;e.forEach(om);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,lm(n,e[c]);let l=Ed.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function om(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zo=class i extends yn{constructor(t=new xa([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,c=t.length;l<c;l++){let h=t[l];a(h)}this.setAttribute("position",new vn(s,3)),this.setAttribute("uv",new vn(r,2)),this.computeVertexNormals();function a(l){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,B=e.UVGenerator!==void 0?e.UVGenerator:vx,k,R=!1,E,O,W,A;if(g){k=g.getSpacedPoints(d),R=!0,p=!1;let et=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(d,et),O=new Z,W=new Z,A=new Z}p||(x=0,y=0,M=0,I=0);let F=l.extractPoints(h),G=F.shape,Y=F.holes;if(!dr.isClockWise(G)){G=G.reverse();for(let et=0,At=Y.length;et<At;et++){let V=Y[et];dr.isClockWise(V)&&(Y[et]=V.reverse())}}function lt(et){let V=10000000000000001e-36,Ct=et[0];for(let Bt=1;Bt<=et.length;Bt++){let de=Bt%et.length,he=et[de],ue=he.x-Ct.x,Se=he.y-Ct.y,X=ue*ue+Se*Se,Ce=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(Ct.x),Math.abs(Ct.y)),we=V*Ce*Ce;if(X<=we){et.splice(de,1),Bt--;continue}Ct=he}}lt(G),Y.forEach(lt);let J=Y.length,Q=G;for(let et=0;et<J;et++){let At=Y[et];G=G.concat(At)}function dt(et,At,V){return At||ye("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(At,V)}let ft=G.length;function Tt(et,At,V){let Ct,Bt,de,he=et.x-At.x,ue=et.y-At.y,Se=V.x-et.x,X=V.y-et.y,Ce=he*he+ue*ue,we=he*X-ue*Se;if(Math.abs(we)>Number.EPSILON){let D=Math.sqrt(Ce),w=Math.sqrt(Se*Se+X*X),tt=At.x-ue/D,K=At.y+he/D,mt=V.x-X/w,Ut=V.y+Se/w,Ot=((mt-tt)*X-(Ut-K)*Se)/(he*X-ue*Se);Ct=tt+he*Ot-et.x,Bt=K+ue*Ot-et.y;let gt=Ct*Ct+Bt*Bt;if(gt<=2)return new $t(Ct,Bt);de=Math.sqrt(gt/2)}else{let D=!1;he>Number.EPSILON?Se>Number.EPSILON&&(D=!0):he<-Number.EPSILON?Se<-Number.EPSILON&&(D=!0):Math.sign(ue)===Math.sign(X)&&(D=!0),D?(Ct=-ue,Bt=he,de=Math.sqrt(Ce)):(Ct=he,Bt=ue,de=Math.sqrt(Ce/2))}return new $t(Ct/de,Bt/de)}let pt=[];for(let et=0,At=Q.length,V=At-1,Ct=et+1;et<At;et++,V++,Ct++)V===At&&(V=0),Ct===At&&(Ct=0),pt[et]=Tt(Q[et],Q[V],Q[Ct]);let wt=[],Mt,Xt=pt.concat();for(let et=0,At=J;et<At;et++){let V=Y[et];Mt=[];for(let Ct=0,Bt=V.length,de=Bt-1,he=Ct+1;Ct<Bt;Ct++,de++,he++)de===Bt&&(de=0),he===Bt&&(he=0),Mt[Ct]=Tt(V[Ct],V[de],V[he]);wt.push(Mt),Xt=Xt.concat(Mt)}let jt;if(x===0)jt=dr.triangulateShape(Q,Y);else{let et=[],At=[];for(let V=0;V<x;V++){let Ct=V/x,Bt=y*Math.cos(Ct*Math.PI/2),de=M*Math.sin(Ct*Math.PI/2)+I;for(let he=0,ue=Q.length;he<ue;he++){let Se=dt(Q[he],pt[he],de);Pt(Se.x,Se.y,-Bt),Ct===0&&et.push(Se)}for(let he=0,ue=J;he<ue;he++){let Se=Y[he];Mt=wt[he];let X=[];for(let Ce=0,we=Se.length;Ce<we;Ce++){let D=dt(Se[Ce],Mt[Ce],de);Pt(D.x,D.y,-Bt),Ct===0&&X.push(D)}Ct===0&&At.push(X)}}jt=dr.triangulateShape(et,At)}let He=jt.length,Ie=M+I;for(let et=0;et<ft;et++){let At=p?dt(G[et],Xt[et],Ie):G[et];R?(W.copy(E.normals[0]).multiplyScalar(At.x),O.copy(E.binormals[0]).multiplyScalar(At.y),A.copy(k[0]).add(W).add(O),Pt(A.x,A.y,A.z)):Pt(At.x,At.y,0)}for(let et=1;et<=d;et++)for(let At=0;At<ft;At++){let V=p?dt(G[At],Xt[At],Ie):G[At];R?(W.copy(E.normals[et]).multiplyScalar(V.x),O.copy(E.binormals[et]).multiplyScalar(V.y),A.copy(k[et]).add(W).add(O),Pt(A.x,A.y,A.z)):Pt(V.x,V.y,v/d*et)}for(let et=x-1;et>=0;et--){let At=et/x,V=y*Math.cos(At*Math.PI/2),Ct=M*Math.sin(At*Math.PI/2)+I;for(let Bt=0,de=Q.length;Bt<de;Bt++){let he=dt(Q[Bt],pt[Bt],Ct);Pt(he.x,he.y,v+V)}for(let Bt=0,de=Y.length;Bt<de;Bt++){let he=Y[Bt];Mt=wt[Bt];for(let ue=0,Se=he.length;ue<Se;ue++){let X=dt(he[ue],Mt[ue],Ct);R?Pt(X.x,X.y+k[d-1].y,k[d-1].x+V):Pt(X.x,X.y,v+V)}}}Be(),_t();function Be(){let et=s.length/3;if(p){let At=0,V=ft*At;for(let Ct=0;Ct<He;Ct++){let Bt=jt[Ct];oe(Bt[2]+V,Bt[1]+V,Bt[0]+V)}At=d+x*2,V=ft*At;for(let Ct=0;Ct<He;Ct++){let Bt=jt[Ct];oe(Bt[0]+V,Bt[1]+V,Bt[2]+V)}}else{for(let At=0;At<He;At++){let V=jt[At];oe(V[2],V[1],V[0])}for(let At=0;At<He;At++){let V=jt[At];oe(V[0]+ft*d,V[1]+ft*d,V[2]+ft*d)}}n.addGroup(et,s.length/3-et,0)}function _t(){let et=s.length/3,At=0;vt(Q,At),At+=Q.length;for(let V=0,Ct=Y.length;V<Ct;V++){let Bt=Y[V];vt(Bt,At),At+=Bt.length}n.addGroup(et,s.length/3-et,1)}function vt(et,At){let V=et.length;for(;--V>=0;){let Ct=V,Bt=V-1;Bt<0&&(Bt=et.length-1);for(let de=0,he=d+x*2;de<he;de++){let ue=ft*de,Se=ft*(de+1),X=At+Ct+ue,Ce=At+Bt+ue,we=At+Bt+Se,D=At+Ct+Se;Zt(X,Ce,we,D)}}}function Pt(et,At,V){c.push(et),c.push(At),c.push(V)}function oe(et,At,V){me(et),me(At),me(V);let Ct=s.length/3,Bt=B.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);ne(Bt[0]),ne(Bt[1]),ne(Bt[2])}function Zt(et,At,V,Ct){me(et),me(At),me(Ct),me(At),me(V),me(Ct);let Bt=s.length/3,de=B.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ne(de[0]),ne(de[1]),ne(de[3]),ne(de[1]),ne(de[2]),ne(de[3])}function me(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function ne(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Md[s.type]().fromJSON(s)),new i(n,t.options)}},vx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new $t(r,a),new $t(l,c),new $t(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],v=t[n*3+2],p=t[s*3],y=t[s*3+1],M=t[s*3+2],I=t[r*3],x=t[r*3+1],g=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new $t(a,1-c),new $t(h,1-v),new $t(p,1-M),new $t(I,1-g)]:[new $t(l,1-c),new $t(d,1-v),new $t(y,1-M),new $t(x,1-g)]}};function yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $o=class i extends yn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,d=c+1,v=t/l,p=e/c,y=[],M=[],I=[],x=[];for(let g=0;g<d;g++){let B=g*p-a;for(let k=0;k<h;k++){let R=k*v-r;M.push(R,-B,0),I.push(0,0,1),x.push(k/l),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let B=0;B<l;B++){let k=B+h*g,R=B+h*(g+1),E=B+1+h*(g+1),O=B+1+h*g;y.push(k,R,O),y.push(R,E,O)}this.setIndex(y),this.setAttribute("position",new vn(M,3)),this.setAttribute("normal",new vn(I,3)),this.setAttribute("uv",new vn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Vo=class extends yn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Z,r=new Z;if(t.index!==null){let a=t.attributes.position,l=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=c.length;h<d;++h){let v=c[h],p=v.start,y=v.count;for(let M=p,I=p+y;M<I;M+=3)for(let x=0;x<3;x++){let g=l.getX(M+x),B=l.getX(M+(x+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,B),cm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){let d=3*l+h,v=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),cm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new vn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function cm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Mr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hm(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=Mr(i[e]);for(let s in n)t[s]=n[s]}return t}function hm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ef(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var ol={clone:Mr,merge:Wn},Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Sx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new en().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$c=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ho=class extends Qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=ih,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vc=class extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function na(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gc=class extends Os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xd,endingEnd:xd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case vd:r=t,l=2*e-n;break;case yd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vd:a=t,c=2*n-e;break;case yd:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this._offsetPrev,v=this._offsetNext,p=this._weightPrev,y=this._weightNext,M=(n-e)/(s-e),I=M*M,x=I*M,g=-p*x+2*p*I-p*M,B=(1+p)*x+(-1.5-2*p)*I+(-.5+p)*M+1,k=(-1-y)*x+(1.5+y)*I+.5*M,R=y*x-y*I;for(let E=0;E!==l;++E)r[E]=g*a[d+E]+B*a[h+E]+k*a[c+E]+R*a[v+E];return r}},Wc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=(n-e)/(s-e),v=1-d;for(let p=0;p!==l;++p)r[p]=a[h+p]*v+a[c+p]*d;return r}},Xc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qc=class extends Os{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let M=(n-e)/(s-e),I=1-M;for(let x=0;x!==l;++x)r[x]=a[h+x]*I+a[c+x]*M;return r}let p=l*2,y=t-1;for(let M=0;M!==l;++M){let I=a[h+M],x=a[c+M],g=y*p+M*2,B=v[g],k=v[g+1],R=t*p+M*2,E=d[R],O=d[R+1],W=Ex(n,e,B,E,s);r[M]=og(W,I,k,O,x)}return r}};function og(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ex(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=og(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=wx(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var xi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),pd(t.settings)&&(n.settings={inTangents:na(t.settings.inTangents,Array),outTangents:na(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case Ec:e=this.InterpolantFactoryMethodLinear;break;case pc:e=this.InterpolantFactoryMethodSmooth;break;case _d:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return pc;case this.InterpolantFactoryMethodBezier:return _d}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;pd(this.settings)&&(um(this.settings.inTangents,t),um(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){ye("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){ye("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&f_(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){ye("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pc,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)c=!0;else{let v=l*n,p=v-n,y=v+n;for(let M=0;M!==n;++M){let I=e[v+M];if(I!==e[p+M]||I!==e[y+M]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let v=l*n,p=a*n;for(let y=0;y!==n;++y)e[p+y]=e[v+y]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,pd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function um(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Ec;var Bs=class extends xi{constructor(t,e,n){super(t,e,n)}};Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=_o;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};Yc.prototype.ValueTypeName="color";var Zc=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};Zc.prototype.ValueTypeName="number";var Jc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)Ki.slerpFlat(r,0,a,h-l,a,h,c);return r}},Go=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends xi{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=_o;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};jc.prototype.ValueTypeName="vector";var Kc=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,v){return h.push(d,v),this},this.removeHandler=function(d){let v=h.indexOf(d);return v!==-1&&h.splice(v,2),this},this.getHandler=function(d){for(let v=0,p=h.length;v<p;v+=2){let y=h[v],M=h[v+1];if(y.global&&(y.lastIndex=0),y.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lg=new Kc,Qc=class{constructor(t){this.manager=t!==void 0?t:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wo=class extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xo=class extends Wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},md=new Ve,dm=new Z,fm=new Z,th=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;dm.setFromMatrixPosition(t.matrixWorld),e.position.copy(dm),fm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(md,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ca||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},uc=new Z,dc=new Ki,qi=new Z,qo=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uc,dc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(uc,dc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new Z,pm=new $t,mm=new $t,Gn=class extends qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z)}getViewSize(t,e){return this.getViewBounds(t,pm,mm),e.subVectors(mm,pm)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ya=class extends qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Td=class extends th{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yo=class extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new Td}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zo=class extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ia=-90,sa=1,eh=class extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gn(ia,sa,t,e);s.layers=this.layers,this.add(s);let r=new Gn(ia,sa,t,e);r.layers=this.layers,this.add(r);let a=new Gn(ia,sa,t,e);a.layers=this.layers,this.add(a);let l=new Gn(ia,sa,t,e);l.layers=this.layers,this.add(l);let c=new Gn(ia,sa,t,e);c.layers=this.layers,this.add(c);let h=new Gn(ia,sa,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,d]=this.children,v=t.getRenderTarget(),p=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,p,y),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},nh=class extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nf="\\[\\]\\.:\\/",Tx=new RegExp("["+nf+"]","g"),sf="[^"+nf+"]",Ax="[^"+nf.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",sf),Rx=/(WCOD+)?/.source.replace("WCOD",Ax),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),Lx=new RegExp("^"+Cx+Rx+Ix+Px+"$"),Dx=["material","materials","bones","map"],Ad=class{constructor(t,e,n){let s=n||fn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tx,"")}static parseTrackName(t){let e=Lx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fn.Composite=Ad;fn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fn.prototype.GetterByBindingType=[fn.prototype._getValue_direct,fn.prototype._getValue_array,fn.prototype._getValue_arrayElement,fn.prototype._getValue_toArray];fn.prototype.SetterByBindingTypeAndVersioning=[[fn.prototype._setValue_direct,fn.prototype._setValue_direct_setNeedsUpdate,fn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_array,fn.prototype._setValue_array_setNeedsUpdate,fn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_arrayElement,fn.prototype._setValue_arrayElement_setNeedsUpdate,fn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_fromArray,fn.prototype._setValue_fromArray_setNeedsUpdate,fn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qb=new Float32Array(1);var zs=class extends Rc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var gm=new Ve,Jo=class{constructor(t,e,n=0,s=1/0){this.ray=new pr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gm),this}intersectObject(t,e=!0,n=[]){return Cd(t,this,n,e),n.sort(_m),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Cd(t[s],this,n,e);return n.sort(_m),n}};function _m(i,t){return i.distance-t.distance}function Cd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Cd(r[a],t,e,!0)}}var Rd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var xm=new Z,fc=new Z,ra=new Z,aa=new Z,gd=new Z,Nx=new Z,Ux=new Z,jo=class{constructor(t=new Z,e=new Z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){xm.subVectors(t,this.start),fc.subVectors(this.end,this.start);let n=fc.dot(fc);if(n===0)return 0;let r=fc.dot(xm)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Nx,n=Ux){let s=10000000000000001e-32,r,a,l=this.start,c=t.start,h=this.end,d=t.end;ra.subVectors(h,l),aa.subVectors(d,c),gd.subVectors(l,c);let v=ra.dot(ra),p=aa.dot(aa),y=aa.dot(gd);if(v<=s&&p<=s)return e.copy(l),n.copy(c),e.sub(n),e.dot(e);if(v<=s)r=0,a=y/p,a=Re(a,0,1);else{let M=ra.dot(gd);if(p<=s)a=0,r=Re(-M/v,0,1);else{let I=ra.dot(aa),x=v*p-I*I;x!==0?r=Re((I*y-M*p)/x,0,1):r=0,a=(I*r+y)/p,a<0?(a=0,r=Re(-M/v,0,1)):a>1&&(a=1,r=Re((I-M)/v,0,1))}}return e.copy(l).addScaledVector(ra,r),n.copy(c).addScaledVector(aa,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function rf(i,t,e,n){let s=Fx(n);switch(e){case Yd:return i*t;case hh:return i*t/s.components*s.byteLength;case uh:return i*t/s.components*s.byteLength;case Ws:return i*t*2/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case Zd:return i*t*3/s.components*s.byteLength;case Ri:return i*t*4/s.components*s.byteLength;case fh:return i*t*4/s.components*s.byteLength;case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mh:case _h:return Math.max(i,16)*Math.max(t,8)/4;case ph:case gh:return Math.max(i,8)*Math.max(t,8)/2;case xh:case vh:case Sh:case Mh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yh:case rl:case bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bh:case kh:case zh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case Vh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case al:case Hh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fx(i){switch(i){case hi:case Gd:return{byteLength:1,components:1};case ba:case Wd:case Gi:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Hi:case oh:case Ci:return{byteLength:4,components:1};case Xd:case qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ig(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bx(i){let t=new WeakMap;function e(l,c){let h=l.array,d=l.usage,v=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,c,h){let d=c.array,v=c.updateRanges;if(i.bindBuffer(h,l),v.length===0)i.bufferSubData(h,0,d);else{v.sort((y,M)=>y.start-M.start);let p=0;for(let y=1;y<v.length;y++){let M=v[p],I=v[y];I.start<=M.start+M.count+1?M.count=Math.max(M.count,I.start+I.count-M.start):(++p,v[p]=I)}v.length=p+1;for(let y=0,M=v.length;y<M;y++){let I=v[y];i.bufferSubData(h,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lv=`#define PI 3.141592653589793
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
} // validated`,cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
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
#endif`,Ov=`uniform sampler2D dfgLUT;
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
}`,Bv=`
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zv=`#if defined( USE_POINTS_UV )
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
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wy=`float getShadowMask() {
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,Yy=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`uniform float scale;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,eS=`#define LAMBERT
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,rS=`#define NORMAL
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
}`,aS=`#define NORMAL
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
}`,oS=`#define PHONG
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
}`,lS=`#define PHONG
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
}`,cS=`#define STANDARD
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
}`,hS=`#define STANDARD
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
}`,uS=`#define TOON
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
}`,dS=`#define TOON
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
}`,fS=`uniform float size;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,xS=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:kx,alphahash_pars_fragment:zx,alphamap_fragment:$x,alphamap_pars_fragment:Vx,alphatest_fragment:Hx,alphatest_pars_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:qx,batching_vertex:Yx,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:jx,iridescence_fragment:Kx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:tv,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:av,color_vertex:ov,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:hv,displacementmap_pars_vertex:uv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:_v,envmap_common_pars_fragment:xv,envmap_pars_fragment:vv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Pv,envmap_vertex:Sv,fog_vertex:Mv,fog_pars_vertex:bv,fog_fragment:wv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Iv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Dv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:zv,lightprobes_pars_fragment:$v,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:jv,morphinstance_vertex:Kv,morphcolor_vertex:Qv,morphnormal_vertex:ty,morphtarget_pars_vertex:ey,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:ay,normal_vertex:oy,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:_y,dithering_pars_fragment:xy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:My,shadowmap_vertex:by,shadowmask_pars_fragment:wy,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Ry,specularmap_pars_fragment:Iy,tonemapping_fragment:Py,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Ny,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:ky,background_frag:zy,backgroundCube_vert:$y,backgroundCube_frag:Vy,cube_vert:Hy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distance_vert:qy,distance_frag:Yy,equirect_vert:Zy,equirect_frag:Jy,linedashed_vert:jy,linedashed_frag:Ky,meshbasic_vert:Qy,meshbasic_frag:tS,meshlambert_vert:eS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:sS,meshnormal_vert:rS,meshnormal_frag:aS,meshphong_vert:oS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:hS,meshtoon_vert:uS,meshtoon_frag:dS,points_vert:fS,points_frag:pS,shadow_vert:mS,shadow_frag:gS,sprite_vert:_S,sprite_frag:xS},Ht={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},ti={basic:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Wn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Wn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Wn([Ht.points,Ht.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Wn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Wn([Ht.common,Ht.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Wn([Ht.sprite,Ht.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Wn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Wn([Ht.lights,Ht.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ti.physical={uniforms:Wn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var qh={r:0,b:0,g:0},vS=new Ve,Pg=new Ae;Pg.set(-1,0,0,0,1,0,0,0,1);function yS(i,t,e,n,s,r){let a=new _e(0),l=s===!0?0:1,c,h,d=null,v=0,p=null;function y(B){let k=B.isScene===!0?B.background:null;if(k&&k.isTexture){let R=B.backgroundBlurriness>0;k=t.get(k,R)}return k}function M(B){let k=!1,R=y(B);R===null?x(a,l):R&&R.isColor&&(x(R,1),k=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(B,k){let R=y(k);R&&(R.isCubeTexture||R.mapping===Qo)?(h===void 0&&(h=new Dn(new ga(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Mr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vS.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Pg),h.material.toneMapped=ze.getTransfer(R.colorSpace)!==tn,(d!==R||v!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,p=i.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Dn(new $o(2,2),new Nn({name:"BackgroundMaterial",uniforms:Mr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,c.material.toneMapped=ze.getTransfer(R.colorSpace)!==tn,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,v=R.version,p=i.toneMapping),c.layers.enableAll(),B.unshift(c,c.geometry,c.material,0,0,null))}function x(B,k){B.getRGB(qh,ef(i)),e.buffers.color.setClear(qh.r,qh.g,qh.b,k,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(B,k=1){a.set(B),l=k,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(B){l=B,x(a,l)},render:M,addToRenderList:I,dispose:g}}function SS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function l(Y,at,lt,J,Q){let dt=!1,ft=v(Y,J,lt,at);r!==ft&&(r=ft,h(r.object)),dt=y(Y,J,lt,Q),dt&&M(Y,J,lt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(dt||a)&&(a=!1,R(Y,at,lt,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(Y){return i.bindVertexArray(Y)}function d(Y){return i.deleteVertexArray(Y)}function v(Y,at,lt,J){let Q=J.wireframe===!0,dt=n[at.id];dt===void 0&&(dt={},n[at.id]=dt);let ft=Y.isInstancedMesh===!0?Y.id:0,Tt=dt[ft];Tt===void 0&&(Tt={},dt[ft]=Tt);let pt=Tt[lt.id];pt===void 0&&(pt={},Tt[lt.id]=pt);let wt=pt[Q];return wt===void 0&&(wt=p(c()),pt[Q]=wt),wt}function p(Y){let at=[],lt=[],J=[];for(let Q=0;Q<e;Q++)at[Q]=0,lt[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:lt,attributeDivisors:J,object:Y,attributes:{},index:null}}function y(Y,at,lt,J){let Q=r.attributes,dt=at.attributes,ft=0,Tt=lt.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let Mt=Q[pt],Xt=dt[pt];if(Xt===void 0&&(pt==="instanceMatrix"&&Y.instanceMatrix&&(Xt=Y.instanceMatrix),pt==="instanceColor"&&Y.instanceColor&&(Xt=Y.instanceColor)),Mt===void 0||Mt.attribute!==Xt||Xt&&Mt.data!==Xt.data)return!0;ft++}return r.attributesNum!==ft||r.index!==J}function M(Y,at,lt,J){let Q={},dt=at.attributes,ft=0,Tt=lt.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let Mt=dt[pt];Mt===void 0&&(pt==="instanceMatrix"&&Y.instanceMatrix&&(Mt=Y.instanceMatrix),pt==="instanceColor"&&Y.instanceColor&&(Mt=Y.instanceColor));let Xt={};Xt.attribute=Mt,Mt&&Mt.data&&(Xt.data=Mt.data),Q[pt]=Xt,ft++}r.attributes=Q,r.attributesNum=ft,r.index=J}function I(){let Y=r.newAttributes;for(let at=0,lt=Y.length;at<lt;at++)Y[at]=0}function x(Y){g(Y,0)}function g(Y,at){let lt=r.newAttributes,J=r.enabledAttributes,Q=r.attributeDivisors;lt[Y]=1,J[Y]===0&&(i.enableVertexAttribArray(Y),J[Y]=1),Q[Y]!==at&&(i.vertexAttribDivisor(Y,at),Q[Y]=at)}function B(){let Y=r.newAttributes,at=r.enabledAttributes;for(let lt=0,J=at.length;lt<J;lt++)at[lt]!==Y[lt]&&(i.disableVertexAttribArray(lt),at[lt]=0)}function k(Y,at,lt,J,Q,dt,ft){ft===!0?i.vertexAttribIPointer(Y,at,lt,Q,dt):i.vertexAttribPointer(Y,at,lt,J,Q,dt)}function R(Y,at,lt,J){I();let Q=J.attributes,dt=lt.getAttributes(),ft=at.defaultAttributeValues;for(let Tt in dt){let pt=dt[Tt];if(pt.location>=0){let wt=Q[Tt];if(wt===void 0&&(Tt==="instanceMatrix"&&Y.instanceMatrix&&(wt=Y.instanceMatrix),Tt==="instanceColor"&&Y.instanceColor&&(wt=Y.instanceColor)),wt!==void 0){let Mt=wt.normalized,Xt=wt.itemSize,jt=t.get(wt);if(jt===void 0)continue;let He=jt.buffer,Ie=jt.type,Be=jt.bytesPerElement,_t=Ie===i.INT||Ie===i.UNSIGNED_INT||wt.gpuType===oh;if(wt.isInterleavedBufferAttribute){let vt=wt.data,Pt=vt.stride,oe=wt.offset;if(vt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<pt.locationSize;Zt++)g(pt.location+Zt,vt.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Zt=0;Zt<pt.locationSize;Zt++)x(pt.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Zt=0;Zt<pt.locationSize;Zt++)k(pt.location+Zt,Xt/pt.locationSize,Ie,Mt,Pt*Be,(oe+Xt/pt.locationSize*Zt)*Be,_t)}else{if(wt.isInstancedBufferAttribute){for(let vt=0;vt<pt.locationSize;vt++)g(pt.location+vt,wt.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let vt=0;vt<pt.locationSize;vt++)x(pt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let vt=0;vt<pt.locationSize;vt++)k(pt.location+vt,Xt/pt.locationSize,Ie,Mt,Xt*Be,Xt/pt.locationSize*vt*Be,_t)}}else if(ft!==void 0){let Mt=ft[Tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(pt.location,Mt);break;case 3:i.vertexAttrib3fv(pt.location,Mt);break;case 4:i.vertexAttrib4fv(pt.location,Mt);break;default:i.vertexAttrib1fv(pt.location,Mt)}}}}B()}function E(){F();for(let Y in n){let at=n[Y];for(let lt in at){let J=at[lt];for(let Q in J){let dt=J[Q];for(let ft in dt)d(dt[ft].object),delete dt[ft];delete J[Q]}}delete n[Y]}}function O(Y){if(n[Y.id]===void 0)return;let at=n[Y.id];for(let lt in at){let J=at[lt];for(let Q in J){let dt=J[Q];for(let ft in dt)d(dt[ft].object),delete dt[ft];delete J[Q]}}delete n[Y.id]}function W(Y){for(let at in n){let lt=n[at];for(let J in lt){let Q=lt[J];if(Q[Y.id]===void 0)continue;let dt=Q[Y.id];for(let ft in dt)d(dt[ft].object),delete dt[ft];delete Q[Y.id]}}}function A(Y){for(let at in n){let lt=n[at],J=Y.isInstancedMesh===!0?Y.id:0,Q=lt[J];if(Q!==void 0){for(let dt in Q){let ft=Q[dt];for(let Tt in ft)d(ft[Tt].object),delete ft[Tt];delete Q[dt]}delete lt[J],Object.keys(lt).length===0&&delete n[at]}}}function F(){G(),a=!0,r!==s&&(r=s,h(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:G,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:W,initAttributes:I,enableAttribute:x,disableUnusedAttributes:B}}function MS(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function l(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];e.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function bS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let W=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(W){return!(W!==Ri&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(W){let A=W===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(W!==hi&&W!==Ci&&!A&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=c(h);d!==h&&(ve("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let v=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:B,maxVaryings:k,maxFragmentUniforms:R,maxSamples:E,samples:O}}function wS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Oi,l=new Ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){let y=v.length!==0||p||n!==0||s;return s=p,n=v.length,y},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,p){e=d(v,p,0)},this.setState=function(v,p,y){let M=v.clippingPlanes,I=v.clipIntersection,x=v.clipShadows,g=i.get(v);if(!s||M===null||M.length===0||r&&!x)r?d(null):h();else{let B=r?0:n,k=B*4,R=g.clippingState||null;c.value=R,R=d(M,p,k,y);for(let E=0;E!==k;++E)R[E]=e[E];g.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=B}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,p,y,M){let I=v!==null?v.length:0,x=null;if(I!==0){if(x=c.value,M!==!0||x===null){let g=y+I*4,B=p.matrixWorldInverse;l.getNormalMatrix(B),(x===null||x.length<g)&&(x=new Float32Array(g));for(let k=0,R=y;k!==I;++k,R+=4)a.copy(v[k]).applyMatrix4(B,l),a.normal.toArray(x,R),x[R+3]=a.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,x}}var Ta=4,ES=6,TS=20,AS=256,ll=new ya,cg=new _e,af=null,of=0,lf=0,cf=!1,CS=new Z,br=new Z,Zh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=CS}=r;af=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(af,of,lf),this._renderer.xr.enabled=cf,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),af=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Gi,format:Ri,colorSpace:xo,depthBuffer:!1},s=hg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RS(r)),this._blurMaterial=PS(r,t,e),this._ggxMaterial=IS(r,t,e)}return s}_compileMaterial(t){let e=new Dn(new yn,t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,s,r){let c=new Gn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,y=v.toneMapping;v.getClearColor(cg),v.toneMapping=Vi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new ga,new mr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,x=I.material,g=!1,B=t.background;B?B.isColor&&(x.color.copy(B),t.background=null,g=!0):(x.color.copy(cg),g=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[k],r.y,r.z)):R===1?(c.up.set(0,0,h[k]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[k],r.z)):(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[k]));let E=this._cubeSize;Ea(s,R*E,k>2?E:0,E,E),v.setRenderTarget(s),g&&v.render(I,c),v.render(t,c)}v.toneMapping=y,v.autoClear=p,t.background=B}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vs||t.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-d*d),p=h*1.25,y=v*p,{_lodMax:M}=this,I=this._sizeLods[n],x=3*I*(n>M-Ta?n-M+Ta:0),g=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=M-e,Ea(r,x,g,3*I,2*I),s.setRenderTarget(r),s.render(l,ll),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,Ea(t,x,g,3*I,2*I),s.setRenderTarget(t),s.render(l,ll)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-Ta?s-this._lodMax+Ta:0),p=4*(this._cubeSize-d);Ea(e,v,p,3*d,2*d),a.setRenderTarget(e),a.render(c,ll)}};function RS(i){let t=[],e=[],n=i,s=i-Ta+1+ES;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],v=6,p=6,y=3,M=new Float32Array(y*p*v),I=new Float32Array(y*p*v);for(let g=0;g<v;g++){let B=g%3*2/3-1,k=g>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];M.set(R,y*p*g);for(let E=0;E<p;E++){let O=d[E*2]*2-1,W=d[E*2+1]*2-1;g===0?br.set(1,W,O):g===1?br.set(-O,1,-W):g===2?br.set(-O,W,1):g===3?br.set(-1,W,-O):g===4?br.set(-O,-1,W):br.set(O,W,-1),br.toArray(I,(g*p+E)*y)}}let x=new yn;x.setAttribute("position",new rn(M,y)),x.setAttribute("outputDirection",new rn(I,y)),e.push(new Dn(x,null)),n>Ta&&n--}return{lodMeshes:e,sizeLods:t}}function hg(i,t,e){let n=new li(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function IS(i,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function PS(i,t,e){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:TS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function ug(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function dg(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jh=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ga(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:es});r.uniforms.tEquirect.value=e;let a=new Dn(s,r),l=e.minFilter;return e.minFilter===Hs&&(e.minFilter=On),new eh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function LS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(p,y=!1){return p==null?null:y?a(p):r(p)}function r(p){if(p&&p.isTexture){let y=p.mapping;if(y===sh||y===rh)if(t.has(p)){let M=t.get(p).texture;return l(M,p.mapping)}else{let M=p.image;if(M&&M.height>0){let I=new Jh(M.height);return I.fromEquirectangularTexture(i,p),t.set(p,I),p.addEventListener("dispose",h),l(I.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let y=p.mapping,M=y===sh||y===rh,I=y===Vs||y===Sr;if(M||I){let x=e.get(p),g=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==g)return n===null&&(n=new Zh(i)),x=M?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),x.texture;if(x!==void 0)return x.texture;{let B=p.image;return M&&B&&B.height>0||I&&B&&c(B)?(n===null&&(n=new Zh(i)),x=M?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),p.addEventListener("dispose",d),x.texture):null}}}return p}function l(p,y){return y===sh?p.mapping=Vs:y===rh&&(p.mapping=Sr),p}function c(p){let y=0,M=6;for(let I=0;I<M;I++)p[I]!==void 0&&y++;return y===M}function h(p){let y=p.target;y.removeEventListener("dispose",h);let M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function d(p){let y=p.target;y.removeEventListener("dispose",d);let M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function DS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fr("WebGLRenderer: "+n+" extension not supported."),s}}}function NS(i,t,e,n){let s={},r=new WeakMap;function a(v){let p=v.target;p.index!==null&&t.remove(p.index);for(let M in p.attributes)t.remove(p.attributes[M]);p.removeEventListener("dispose",a),delete s[p.id];let y=r.get(p);y&&(t.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(v,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(v){let p=v.attributes;for(let y in p)t.update(p[y],i.ARRAY_BUFFER)}function h(v){let p=[],y=v.index,M=v.attributes.position,I=0;if(M===void 0)return;if(y!==null){let B=y.array;I=y.version;for(let k=0,R=B.length;k<R;k+=3){let E=B[k+0],O=B[k+1],W=B[k+2];p.push(E,O,O,W,W,E)}}else{let B=M.array;I=M.version;for(let k=0,R=B.length/3-1;k<R;k+=3){let E=k+0,O=k+1,W=k+2;p.push(E,O,O,W,W,E)}}let x=new(M.count>=65535?Eo:wo)(p,1);x.version=I;let g=r.get(v);g&&t.remove(g),r.set(v,x)}function d(v){let p=r.get(v);if(p){let y=v.index;y!==null&&p.version<y.version&&h(v)}else h(v);return r.get(v)}return{get:l,update:c,getWireframeAttribute:d}}function US(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function c(v,p){i.drawElements(n,p,r,v*a),e.update(p,n,1)}function h(v,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,v*a,y),e.update(p,n,y))}function d(v,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,v,0,y);let I=0;for(let x=0;x<y;x++)I+=p[x];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function FS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function OS(i,t,e){let n=new WeakMap,s=new en;function r(a,l,c){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,p=n.get(l);if(p===void 0||p.count!==v){let F=function(){W.dispose(),n.delete(l),l.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();let y=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],B=l.morphAttributes.color||[],k=0;y===!0&&(k=1),M===!0&&(k=2),I===!0&&(k=3);let R=l.attributes.position.count*k,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*E*4*v),W=new Mo(O,R,E,v);W.type=Ci,W.needsUpdate=!0;let A=k*4;for(let G=0;G<v;G++){let Y=x[G],at=g[G],lt=B[G],J=R*E*4*G;for(let Q=0;Q<Y.count;Q++){let dt=Q*A;y===!0&&(s.fromBufferAttribute(Y,Q),O[J+dt+0]=s.x,O[J+dt+1]=s.y,O[J+dt+2]=s.z,O[J+dt+3]=0),M===!0&&(s.fromBufferAttribute(at,Q),O[J+dt+4]=s.x,O[J+dt+5]=s.y,O[J+dt+6]=s.z,O[J+dt+7]=0),I===!0&&(s.fromBufferAttribute(lt,Q),O[J+dt+8]=s.x,O[J+dt+9]=s.y,O[J+dt+10]=s.z,O[J+dt+11]=lt.itemSize===4?s.w:1)}}p={count:v,texture:W,size:new $t(R,E)},n.set(l,p),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let M=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function BS(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,v=h.geometry,p=t.get(h,v);if(r.get(p)!==d&&(t.update(p),r.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==d&&(y.update(),r.set(y,d))}return p}function l(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var kS={[Fd]:"LINEAR_TONE_MAPPING",[Od]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[kd]:"ACES_FILMIC_TONE_MAPPING",[$d]:"AGX_TONE_MAPPING",[Vd]:"NEUTRAL_TONE_MAPPING",[zd]:"CUSTOM_TONE_MAPPING"};function zS(i,t,e,n,s,r){let a=new li(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new yn;h.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vn([0,2,0,0,2,0],2));let d=new $c({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Dn(h,d),p=new ya(-1,1,1,-1,0,1),y=null,M=null,I=!1,x,g=null,B=[],k=!1;this.setSize=function(R,E){a.setSize(R,E),l!==null&&l.setSize(R,E),c!==null&&c.setSize(R,E);for(let O=0;O<B.length;O++){let W=B[O];W.setSize&&W.setSize(R,E)}},this.setEffects=function(R){B=R,k=B.length>0&&B[0].isRenderPass===!0;let E=a.width,O=a.height;B.length>0&&l===null&&(l=new li(E,O,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),c=new li(E,O,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let W=0;W<B.length;W++){let A=B[W];A.setSize&&A.setSize(E,O)}},this.begin=function(R,E){if(I||R.toneMapping===Vi&&B.length===0)return!1;if(g=E,E!==null){let O=E.width,W=E.height;(a.width!==O||a.height!==W)&&this.setSize(O,W)}return k===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return k},this.end=function(R,E){R.toneMapping=x,I=!0;let O=a,W=l;for(let A=0;A<B.length;A++){let F=B[A];F.enabled!==!1&&(F.render(R,W,O,E),F.needsSwap!==!1&&(O=W,W=W===l?c:l))}if(y!==R.outputColorSpace||M!==R.toneMapping){y=R.outputColorSpace,M=R.toneMapping,d.defines={},ze.getTransfer(y)===tn&&(d.defines.SRGB_TRANSFER="");let A=kS[M];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(g),R.render(v,p),g=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Lg=new oi,df=new Fs(1,1),Dg=new Mo,Ng=new Cc,Ug=new Io,fg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),_g=new Float32Array(4);function Ca(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fg[s];if(r===void 0&&(r=new Float32Array(s),fg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function En(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qh(i,t){let e=pg[t];e===void 0&&(e=new Int32Array(t),pg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $S(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function VS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2fv(this.addr,t),Tn(e,t)}}function HS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;i.uniform3fv(this.addr,t),Tn(e,t)}}function GS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4fv(this.addr,t),Tn(e,t)}}function WS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;_g.set(n),i.uniformMatrix2fv(this.addr,!1,_g),Tn(e,n)}}function XS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;gg.set(n),i.uniformMatrix3fv(this.addr,!1,gg),Tn(e,n)}}function qS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;mg.set(n),i.uniformMatrix4fv(this.addr,!1,mg),Tn(e,n)}}function YS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ZS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2iv(this.addr,t),Tn(e,t)}}function JS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3iv(this.addr,t),Tn(e,t)}}function jS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4iv(this.addr,t),Tn(e,t)}}function KS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function QS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2uiv(this.addr,t),Tn(e,t)}}function tM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3uiv(this.addr,t),Tn(e,t)}}function eM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4uiv(this.addr,t),Tn(e,t)}}function nM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=e.isReversedDepthBuffer()?Xh:Wh,r=df):r=Lg,e.setTexture2D(t||r,s)}function iM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ng,s)}function sM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ug,s)}function rM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dg,s)}function aM(i){switch(i){case 5126:return $S;case 35664:return VS;case 35665:return HS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return ZS;case 35668:case 35672:return JS;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return QS;case 36295:return tM;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function oM(i,t){i.uniform1fv(this.addr,t)}function lM(i,t){let e=Ca(t,this.size,2);i.uniform2fv(this.addr,e)}function cM(i,t){let e=Ca(t,this.size,3);i.uniform3fv(this.addr,e)}function hM(i,t){let e=Ca(t,this.size,4);i.uniform4fv(this.addr,e)}function uM(i,t){let e=Ca(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dM(i,t){let e=Ca(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fM(i,t){let e=Ca(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pM(i,t){i.uniform1iv(this.addr,t)}function mM(i,t){i.uniform2iv(this.addr,t)}function gM(i,t){i.uniform3iv(this.addr,t)}function _M(i,t){i.uniform4iv(this.addr,t)}function xM(i,t){i.uniform1uiv(this.addr,t)}function vM(i,t){i.uniform2uiv(this.addr,t)}function yM(i,t){i.uniform3uiv(this.addr,t)}function SM(i,t){i.uniform4uiv(this.addr,t)}function MM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=df:a=Lg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function bM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ng,r[a])}function wM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ug,r[a])}function EM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dg,r[a])}function TM(i){switch(i){case 5126:return oM;case 35664:return lM;case 35665:return cM;case 35666:return hM;case 35674:return uM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return xM;case 36294:return vM;case 36295:return yM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return EM}}var ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=aM(e.type)}},pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=TM(e.type)}},mf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},hf=/(\w+)(\])?(\[|\.)?/g;function xg(i,t){i.seq.push(t),i.map[t.id]=t}function AM(i,t,e){let n=i.name,s=n.length;for(hf.lastIndex=0;;){let r=hf.exec(n),a=hf.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){xg(e,h===void 0?new ff(l,i,t):new pf(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new mf(l),xg(e,v)),e=v}}}var Aa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);AM(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var CM=37297,RM=0;function IM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var yg=new Ae;function PM(i){ze._getMatrix(yg,ze.workingColorSpace,i);let t=`mat3( ${yg.elements.map(e=>e.toFixed(4))} )`;switch(ze.getTransfer(i)){case vo:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+IM(i.getShaderSource(t),l)}else return r}function LM(i,t){let e=PM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var DM={[Fd]:"Linear",[Od]:"Reinhard",[Bd]:"Cineon",[kd]:"ACESFilmic",[$d]:"AgX",[Vd]:"Neutral",[zd]:"Custom"};function NM(i,t){let e=DM[t];return e===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yh=new Z;function UM(){ze.getLuminanceCoefficients(Yh);let i=Yh.x.toFixed(4),t=Yh.y.toFixed(4),e=Yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function OM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function BM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function hl(i){return i!==""}function Mg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(i){return i.replace(kM,$M)}var zM=new Map;function $M(i,t){let e=Ue[t];if(e===void 0){let n=zM.get(t);if(n!==void 0)e=Ue[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gf(e)}var VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(i){return i.replace(VM,HM)}function HM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var GM={[Ko]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function WM(i){return GM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XM={[Vs]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function qM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":XM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var YM={[Sr]:"ENVMAP_MODE_REFRACTION"};function ZM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JM={[ih]:"ENVMAP_BLENDING_MULTIPLY",[zm]:"ENVMAP_BLENDING_MIX",[$m]:"ENVMAP_BLENDING_ADD"};function jM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":JM[i.combine]||"ENVMAP_BLENDING_NONE"}function KM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function QM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=WM(e),h=qM(e),d=ZM(e),v=jM(e),p=KM(e),y=FM(e),M=OM(r),I=s.createProgram(),x,g,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(hl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(hl).join(`
`),g.length>0&&(g+=`
`)):(x=[Eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),g=[Eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Ue.tonemapping_pars_fragment:"",e.toneMapping!==Vi?NM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,LM("linearToOutputTexel",e.outputColorSpace),UM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hl).join(`
`)),a=gf(a),a=Mg(a,e),a=bg(a,e),l=gf(l),l=Mg(l,e),l=bg(l,e),a=wg(a),l=wg(l),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let k=B+x+a,R=B+g+l,E=vg(s,s.VERTEX_SHADER,k),O=vg(s,s.FRAGMENT_SHADER,R);s.attachShader(I,E),s.attachShader(I,O),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function W(Y){if(i.debug.checkShaderErrors){let at=s.getProgramInfoLog(I)||"",lt=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(O)||"",Q=at.trim(),dt=lt.trim(),ft=J.trim(),Tt=!0,pt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,E,O);else{let wt=Sg(s,E,"vertex"),Mt=Sg(s,O,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+Q+`
`+wt+`
`+Mt)}else Q!==""?ve("WebGLProgram: Program Info Log:",Q):(dt===""||ft==="")&&(pt=!1);pt&&(Y.diagnostics={runnable:Tt,programLog:Q,vertexShader:{log:dt,prefix:x},fragmentShader:{log:ft,prefix:g}})}s.deleteShader(E),s.deleteShader(O),A=new Aa(s,I),F=BM(s,I)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let F;this.getAttributes=function(){return F===void 0&&W(this),F};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(I,CM)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=E,this.fragmentShader=O,this}var tb=0,_f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xf(t),e.set(t,n)),n}},xf=class{constructor(t){this.id=tb++,this.code=t,this.usedTimes=0}};function eb(i){return i===Ws||i===rl||i===al}function nb(i,t,e,n,s,r){let a=new fa,l=new _f,c=new Set,h=[],d=new Map,v=n.logarithmicDepthBuffer,p=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return c.add(A),A===0?"uv":`uv${A}`}function I(A,F,G,Y,at,lt){let J=Y.fog,Q=at.geometry,dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Tt=t.get(A.envMap||dt,ft),pt=Tt&&Tt.mapping===Qo?Tt.image.height:null,wt=y[A.type];A.precision!==null&&(p=n.getMaxPrecision(A.precision),p!==A.precision&&ve("WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));let Mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xt=Mt!==void 0?Mt.length:0,jt=0;Q.morphAttributes.position!==void 0&&(jt=1),Q.morphAttributes.normal!==void 0&&(jt=2),Q.morphAttributes.color!==void 0&&(jt=3);let He,Ie,Be,_t;if(wt){let je=ti[wt];He=je.vertexShader,Ie=je.fragmentShader}else{He=A.vertexShader,Ie=A.fragmentShader;let je=l.getVertexShaderStage(A),Ee=l.getFragmentShaderStage(A);l.update(A,je,Ee),Be=je.id,_t=Ee.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),oe=at.isInstancedMesh===!0,Zt=at.isBatchedMesh===!0,me=!!A.map,ne=!!A.matcap,et=!!Tt,At=!!A.aoMap,V=!!A.lightMap,Ct=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,de=!!A.displacementMap,he=!!A.emissiveMap,ue=!!A.metalnessMap,Se=!!A.roughnessMap,X=A.anisotropy>0,Ce=A.clearcoat>0,we=A.dispersion>0,D=A.retroreflectivity>0,w=A.iridescence>0,tt=A.sheen>0,K=A.transmission>0,mt=X&&!!A.anisotropyMap,Ut=Ce&&!!A.clearcoatMap,Ot=Ce&&!!A.clearcoatNormalMap,gt=Ce&&!!A.clearcoatRoughnessMap,St=w&&!!A.iridescenceMap,kt=w&&!!A.iridescenceThicknessMap,re=tt&&!!A.sheenColorMap,qt=tt&&!!A.sheenRoughnessMap,Gt=!!A.specularMap,ae=!!A.specularColorMap,ge=!!A.specularIntensityMap,Me=K&&!!A.transmissionMap,j=K&&!!A.thicknessMap,Ft=!!A.gradientMap,xt=!!A.alphaMap,zt=A.alphaTest>0,Jt=!!A.alphaHash,Et=!!A.extensions,le=Vi;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(le=i.toneMapping);let ie={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:He,fragmentShader:Ie,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:_t,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Zt,batchingColor:Zt&&at._colorsTexture!==null,instancing:oe,instancingColor:oe&&at.instanceColor!==null,instancingMorph:oe&&at.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:me,matcap:ne,envMap:et,envMapMode:et&&Tt.mapping,envMapCubeUVHeight:pt,aoMap:At,lightMap:V,bumpMap:Ct,normalMap:Bt,displacementMap:de,emissiveMap:he,normalMapObjectSpace:Bt&&A.normalMapType===Gm,normalMapTangentSpace:Bt&&A.normalMapType===Gh,packedNormalMap:Bt&&A.normalMapType===Gh&&eb(A.normalMap.format),metalnessMap:ue,roughnessMap:Se,anisotropy:X,anisotropyMap:mt,clearcoat:Ce,clearcoatMap:Ut,clearcoatNormalMap:Ot,clearcoatRoughnessMap:gt,dispersion:we,retroreflection:D,iridescence:w,iridescenceMap:St,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:re,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:ae,specularIntensityMap:ge,transmission:K,transmissionMap:Me,thicknessMap:j,gradientMap:Ft,opaque:A.transparent===!1&&A.blending===Ma&&A.alphaToCoverage===!1,alphaMap:xt,alphaTest:zt,alphaHash:Jt,combine:A.combine,mapUv:me&&M(A.map.channel),aoMapUv:At&&M(A.aoMap.channel),lightMapUv:V&&M(A.lightMap.channel),bumpMapUv:Ct&&M(A.bumpMap.channel),normalMapUv:Bt&&M(A.normalMap.channel),displacementMapUv:de&&M(A.displacementMap.channel),emissiveMapUv:he&&M(A.emissiveMap.channel),metalnessMapUv:ue&&M(A.metalnessMap.channel),roughnessMapUv:Se&&M(A.roughnessMap.channel),anisotropyMapUv:mt&&M(A.anisotropyMap.channel),clearcoatMapUv:Ut&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:qt&&M(A.sheenRoughnessMap.channel),specularMapUv:Gt&&M(A.specularMap.channel),specularColorMapUv:ae&&M(A.specularColorMap.channel),specularIntensityMapUv:ge&&M(A.specularIntensityMap.channel),transmissionMapUv:Me&&M(A.transmissionMap.channel),thicknessMapUv:j&&M(A.thicknessMap.channel),alphaMapUv:xt&&M(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Bt||X),vertexNormals:!!Q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!Q.attributes.uv&&(me||xt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:at.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:jt,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:me&&A.map.isVideoTexture===!0&&ze.getTransfer(A.map.colorSpace)===tn,decodeVideoTextureEmissive:he&&A.emissiveMap.isVideoTexture===!0&&ze.getTransfer(A.emissiveMap.colorSpace)===tn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ts,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function x(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let G in A.defines)F.push(G),F.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(g(F,A),B(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function g(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function B(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function k(A){let F=y[A.type],G;if(F){let Y=ti[F];G=ol.clone(Y.uniforms)}else G=A.uniforms;return G}function R(A,F){let G=d.get(F);return G!==void 0?++G.usedTimes:(G=new QM(i,F,A,s),h.push(G),d.set(F,G)),G}function E(A){if(--A.usedTimes===0){let F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function W(){l.dispose()}return{getParameters:I,getProgramCacheKey:x,getUniforms:k,acquireProgram:R,releaseProgram:E,releaseShaderCache:O,programs:h,dispose:W}}function ib(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ag(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function l(p,y,M,I,x,g){let B=i[t];return B===void 0?(B={id:p.id,object:p,geometry:y,material:M,materialVariant:a(p),groupOrder:I,renderOrder:p.renderOrder,z:x,group:g},i[t]=B):(B.id=p.id,B.object=p,B.geometry=y,B.material=M,B.materialVariant=a(p),B.groupOrder=I,B.renderOrder=p.renderOrder,B.z=x,B.group=g),t++,B}function c(p,y,M,I,x,g,B){B.reversedDepth===!0&&(x=-x);let k=l(p,y,M,I,x,g);M.transmission>0?n.push(k):M.transparent===!0?s.push(k):e.push(k)}function h(p,y,M,I,x,g){let B=l(p,y,M,I,x,g);M.transmission>0?n.unshift(B):M.transparent===!0?s.unshift(B):e.unshift(B)}function d(p,y){e.length>1&&e.sort(p||sb),n.length>1&&n.sort(y||Tg),s.length>1&&s.sort(y||Tg)}function v(){for(let p=t,y=i.length;p<y;p++){let M=i[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:v,sort:d}}function rb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ag,i.set(n,[a])):s>=r.length?(a=new Ag,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ab(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new _e};break;case"SpotLight":e={position:new Z,direction:new Z,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function ob(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lb=0;function cb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hb(i){let t=new ab,e=ob(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Z);let s=new Z,r=new Ve,a=new Ve;function l(h){let d=0,v=0,p=0;for(let at=0;at<9;at++)n.probe[at].set(0,0,0);let y=0,M=0,I=0,x=0,g=0,B=0,k=0,R=0,E=0,O=0,W=0,A=0,F=0,G=0;h.sort(cb);for(let at=0,lt=h.length;at<lt;at++){let J=h[at],Q=J.color,dt=J.intensity,ft=J.distance,Tt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Ws?Tt=J.shadow.map.texture:Tt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)d+=Q.r*dt,v+=Q.g*dt,p+=Q.b*dt;else if(J.isLightProbe){for(let pt=0;pt<9;pt++)n.probe[pt].addScaledVector(J.sh.coefficients[pt],dt);G++}else if(J.isSunLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let wt=J.shadow,Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[M]=Mt,n.sunShadowMap[M]=Tt;let Xt=wt.getViewportCount();for(let jt=0;jt<Xt;jt++)n.sunShadowMatrix[I+jt]=wt.getMatrix(jt),n.sunShadowCascade[I+jt]=wt._cascadeData[jt];I+=Xt,M++}n.sun[y]=pt,y++}else if(J.isDirectionalLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let wt=J.shadow,Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,n.directionalShadow[x]=Mt,n.directionalShadowMap[x]=Tt,n.directionalShadowMatrix[x]=J.shadow.matrix,E++}n.directional[x]=pt,x++}else if(J.isSpotLight){let pt=t.get(J);pt.position.setFromMatrixPosition(J.matrixWorld),pt.color.copy(Q).multiplyScalar(dt),pt.distance=ft,pt.coneCos=Math.cos(J.angle),pt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),pt.decay=J.decay,n.spot[B]=pt;let wt=J.shadow;if(J.map&&(n.spotLightMap[A]=J.map,A++,wt.updateMatrices(J),J.castShadow&&F++),n.spotLightMatrix[B]=wt.matrix,J.castShadow){let Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,n.spotShadow[B]=Mt,n.spotShadowMap[B]=Tt,W++}B++}else if(J.isRectAreaLight){let pt=t.get(J);pt.color.copy(Q).multiplyScalar(dt),pt.halfWidth.set(J.width*.5,0,0),pt.halfHeight.set(0,J.height*.5,0),n.rectArea[k]=pt,k++}else if(J.isPointLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),pt.distance=J.distance,pt.decay=J.decay,J.castShadow){let wt=J.shadow,Mt=e.get(J);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,Mt.shadowCameraNear=wt.camera.near,Mt.shadowCameraFar=wt.camera.far,n.pointShadow[g]=Mt,n.pointShadowMap[g]=Tt,n.pointShadowMatrix[g]=J.shadow.matrix,O++}n.point[g]=pt,g++}else if(J.isHemisphereLight){let pt=t.get(J);pt.skyColor.copy(J.color).multiplyScalar(dt),pt.groundColor.copy(J.groundColor).multiplyScalar(dt),n.hemi[R]=pt,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=p;let Y=n.hash;(Y.sunLength!==y||Y.directionalLength!==x||Y.pointLength!==g||Y.spotLength!==B||Y.rectAreaLength!==k||Y.hemiLength!==R||Y.numSunShadows!==M||Y.numDirectionalShadows!==E||Y.numPointShadows!==O||Y.numSpotShadows!==W||Y.numSpotMaps!==A||Y.numLightProbes!==G)&&(n.sun.length=y,n.directional.length=x,n.spot.length=B,n.rectArea.length=k,n.point.length=g,n.hemi.length=R,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=W,n.spotShadowMap.length=W,n.spotLightMatrix.length=W+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=G,Y.sunLength=y,Y.directionalLength=x,Y.pointLength=g,Y.spotLength=B,Y.rectAreaLength=k,Y.hemiLength=R,Y.numSunShadows=M,Y.numDirectionalShadows=E,Y.numPointShadows=O,Y.numSpotShadows=W,Y.numSpotMaps=A,Y.numLightProbes=G,n.version=lb++)}function c(h,d){let v=0,p=0,y=0,M=0,I=0,x=0,g=d.matrixWorldInverse;for(let B=0,k=h.length;B<k;B++){let R=h[B];if(R.isSunLight){let E=n.sun[v];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),v++}else if(R.isDirectionalLight){let E=n.directional[p];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(R.isSpotLight){let E=n.spot[M];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),M++}else if(R.isRectAreaLight){let E=n.rectArea[I];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let E=n.point[y];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),y++}else if(R.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:l,setupView:c,state:n}}function Cg(i){let t=new hb(i),e=[],n=[],s=[];function r(p){v.camera=p,e.length=0,n.length=0,s.length=0}function a(p){e.push(p)}function l(p){n.push(p)}function c(p){s.push(p)}function h(){t.setup(e)}function d(p){t.setupView(e,p)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function ub(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Cg(i),t.set(s,[l])):r>=a.length?(l=new Cg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fb=`uniform sampler2D shadow_pass;
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
}`,pb=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],mb=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Rg=new Ve,cl=new Z,uf=new Z;function gb(i,t,e){let n=new ma,s=new $t,r=new $t,a=new en,l=new Vc,c=new Hc,h={},d=e.maxTextureSize,v={[$s]:Qn,[Qn]:$s,[ts]:ts},p=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:db,fragmentShader:fb}),y=p.clone();y.defines.HORIZONTAL_PASS=1;let M=new yn;M.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Dn(M,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let g=this.type;this.render=function(O,W,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===Sm&&(ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ko);let F=i.getRenderTarget(),G=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),at=i.state;at.setBlending(es),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let lt=g!==this.type;lt&&W.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=O.length;J<Q;J++){let dt=O[J],ft=dt.shadow;if(ft===void 0){ve("WebGLShadowMap:",dt,"has no shadow.");continue}if(ft.autoUpdate===!1&&ft.needsUpdate===!1)continue;s.copy(ft.mapSize);let Tt=ft.getFrameExtents();s.multiply(Tt),r.copy(ft.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Tt.x),s.x=r.x*Tt.x,ft.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Tt.y),s.y=r.y*Tt.y,ft.mapSize.y=r.y));let pt=i.state.buffers.depth.getReversed();if(ft.camera._reversedDepth=pt,ft.map===null||lt===!0){if(ft.map!==null&&(ft.map.depthTexture!==null&&(ft.map.depthTexture.dispose(),ft.map.depthTexture=null),ft.map.dispose()),this.type===Sa){if(dt.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ft.map=new li(s.x,s.y,{format:Ws,type:Gi,minFilter:On,magFilter:On,generateMipmaps:!1}),ft.map.texture.name=dt.name+".shadowMap",ft.map.depthTexture=new Fs(s.x,s.y,Ci),ft.map.depthTexture.name=dt.name+".shadowMapDepth",ft.map.depthTexture.format=Ji,ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=Pn,ft.map.depthTexture.magFilter=Pn}else dt.isPointLight?(ft.map=new Jh(s.x),ft.map.depthTexture=new Nc(s.x,Hi)):(ft.map=new li(s.x,s.y),ft.map.depthTexture=new Fs(s.x,s.y,Hi)),ft.map.depthTexture.name=dt.name+".shadowMap",ft.map.depthTexture.format=Ji,this.type===Ko?(ft.map.depthTexture.compareFunction=pt?Xh:Wh,ft.map.depthTexture.minFilter=On,ft.map.depthTexture.magFilter=On):(ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=Pn,ft.map.depthTexture.magFilter=Pn);ft.camera.updateProjectionMatrix()}ft.map.isWebGLCubeRenderTarget!==!0&&(ft.map.width!==s.x||ft.map.height!==s.y)&&ft.map.setSize(s.x,s.y);let wt=ft.map.isWebGLCubeRenderTarget?6:ft.getViewportCount();dt.isPointLight!==!0&&ft.updateMatrices(dt,A);for(let Mt=0;Mt<wt;Mt++){let Xt=ft.getCamera(Mt);if(dt.isPointLight){let jt=ft.camera,He=ft.matrix,Ie=dt.distance||jt.far;Ie!==jt.far&&(jt.far=Ie,jt.updateProjectionMatrix()),cl.setFromMatrixPosition(dt.matrixWorld),jt.position.copy(cl),uf.copy(jt.position),uf.add(pb[Mt]),jt.up.copy(mb[Mt]),jt.lookAt(uf),jt.updateMatrixWorld(),He.makeTranslation(-cl.x,-cl.y,-cl.z),Rg.multiplyMatrices(jt.projectionMatrix,jt.matrixWorldInverse),ft._frustum.setFromProjectionMatrix(Rg,jt.coordinateSystem,jt.reversedDepth)}if(ft.map.isWebGLCubeRenderTarget)i.setRenderTarget(ft.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(ft.map),i.clear());let jt=ft.getViewport(Mt);a.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),at.viewport(a)}n=ft.getFrustum(Mt),R(W,A,Xt,dt,this.type)}ft.isPointLightShadow!==!0&&this.type===Sa&&B(ft,A),ft.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(F,G,Y)};function B(O,W){let A=t.update(I);p.defines.VSM_SAMPLES!==O.blurSamples&&(p.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null?O.mapPass=new li(s.x,s.y,{format:Ws,type:Gi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),p.uniforms.shadow_pass.value=O.map.depthTexture,p.uniforms.resolution.value.set(O.map.width,O.map.height),p.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(W,null,A,p,I,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value.set(O.map.width,O.map.height),y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(W,null,A,y,I,null)}function k(O,W,A,F){let G=null,Y=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(Y!==void 0)G=Y;else if(G=A.isPointLight===!0?c:l,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let at=G.uuid,lt=W.uuid,J=h[at];J===void 0&&(J={},h[at]=J);let Q=J[lt];Q===void 0&&(Q=G.clone(),J[lt]=Q,W.addEventListener("dispose",E)),G=Q}if(G.visible=W.visible,G.wireframe=W.wireframe,F===Sa?G.side=W.shadowSide!==null?W.shadowSide:W.side:G.side=W.shadowSide!==null?W.shadowSide:v[W.side],G.alphaMap=W.alphaMap,G.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,G.map=W.map,G.clipShadows=W.clipShadows,G.clippingPlanes=W.clippingPlanes,G.clipIntersection=W.clipIntersection,G.displacementMap=W.displacementMap,G.displacementScale=W.displacementScale,G.displacementBias=W.displacementBias,G.wireframeLinewidth=W.wireframeLinewidth,G.linewidth=W.linewidth,A.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let at=i.properties.get(G);at.light=A}return G}function R(O,W,A,F,G){if(O.visible===!1)return;if(O.layers.test(W.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&G===Sa)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let lt=t.update(O),J=O.material;if(Array.isArray(J)){let Q=lt.groups;for(let dt=0,ft=Q.length;dt<ft;dt++){let Tt=Q[dt],pt=J[Tt.materialIndex];if(pt&&pt.visible){let wt=k(O,pt,F,G);O.onBeforeShadow(i,O,W,A,lt,wt,Tt),i.renderBufferDirect(A,null,lt,wt,O,Tt),O.onAfterShadow(i,O,W,A,lt,wt,Tt)}}}else if(J.visible){let Q=k(O,J,F,G);O.onBeforeShadow(i,O,W,A,lt,Q,null),i.renderBufferDirect(A,null,lt,Q,O,null),O.onAfterShadow(i,O,W,A,lt,Q,null)}}let at=O.children;for(let lt=0,J=at.length;lt<J;lt++)R(at[lt],W,A,F,G)}function E(O){O.target.removeEventListener("dispose",E);for(let A in h){let F=h[A],G=O.target.uuid;G in F&&(F[G].dispose(),delete F[G])}}}function _b(i,t){function e(){let j=!1,Ft=new en,xt=null,zt=new en(0,0,0,0);return{setMask:function(Jt){xt!==Jt&&!j&&(i.colorMask(Jt,Jt,Jt,Jt),xt=Jt)},setLocked:function(Jt){j=Jt},setClear:function(Jt,Et,le,ie,je){je===!0&&(Jt*=ie,Et*=ie,le*=ie),Ft.set(Jt,Et,le,ie),zt.equals(Ft)===!1&&(i.clearColor(Jt,Et,le,ie),zt.copy(Ft))},reset:function(){j=!1,xt=null,zt.set(-1,0,0,0)}}}function n(){let j=!1,Ft=!1,xt=null,zt=null,Jt=null;return{setReversed:function(Et){if(Ft!==Et){let le=t.get("EXT_clip_control");Et?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Ft=Et;let ie=Jt;Jt=null,this.setClear(ie)}},getReversed:function(){return Ft},setTest:function(Et){Et?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!j&&(i.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ft&&(Et=eg[Et]),zt!==Et){switch(Et){case gc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=Et}},setLocked:function(Et){j=Et},setClear:function(Et){Jt!==Et&&(Jt=Et,Ft&&(Et=1-Et),i.clearDepth(Et))},reset:function(){j=!1,xt=null,zt=null,Jt=null,Ft=!1}}}function s(){let j=!1,Ft=null,xt=null,zt=null,Jt=null,Et=null,le=null,ie=null,je=null;return{setTest:function(Ee){j||(Ee?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Ee){Ft!==Ee&&!j&&(i.stencilMask(Ee),Ft=Ee)},setFunc:function(Ee,xn,bn){(xt!==Ee||zt!==xn||Jt!==bn)&&(i.stencilFunc(Ee,xn,bn),xt=Ee,zt=xn,Jt=bn)},setOp:function(Ee,xn,bn){(Et!==Ee||le!==xn||ie!==bn)&&(i.stencilOp(Ee,xn,bn),Et=Ee,le=xn,ie=bn)},setLocked:function(Ee){j=Ee},setClear:function(Ee){je!==Ee&&(i.clearStencil(Ee),je=Ee)},reset:function(){j=!1,Ft=null,xt=null,zt=null,Jt=null,Et=null,le=null,ie=null,je=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,d={},v={},p={},y=new WeakMap,M=[],I=null,x=!1,g=null,B=null,k=null,R=null,E=null,O=null,W=null,A=new _e(0,0,0),F=0,G=!1,Y=null,at=null,lt=null,J=null,Q=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ft=!1,Tt=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),ft=Tt>=1):pt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),ft=Tt>=2);let wt=null,Mt={},Xt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),He=new en().fromArray(Xt),Ie=new en().fromArray(jt);function Be(j,Ft,xt,zt){let Jt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(j,Et),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<xt;le++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Ft,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Jt):i.texImage2D(Ft+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Jt);return Et}let _t={};_t[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(la),Ct(!1),Bt(Id),vt(i.CULL_FACE),At(es);function vt(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function Pt(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function oe(j,Ft){return p[j]!==Ft?(i.bindFramebuffer(j,Ft),p[j]=Ft,j===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ft),j===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ft),!0):!1}function Zt(j,Ft){let xt=M,zt=!1;if(j){xt=y.get(Ft),xt===void 0&&(xt=[],y.set(Ft,xt));let Jt=j.textures;if(xt.length!==Jt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,le=Jt.length;Et<le;Et++)xt[Et]=i.COLOR_ATTACHMENT0+Et;xt.length=Jt.length,zt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(xt)}function me(j){return I!==j?(i.useProgram(j),I=j,!0):!1}let ne={[yr]:i.FUNC_ADD,[bm]:i.FUNC_SUBTRACT,[wm]:i.FUNC_REVERSE_SUBTRACT};ne[Em]=i.MIN,ne[Tm]=i.MAX;let et={[Am]:i.ZERO,[Cm]:i.ONE,[Rm]:i.SRC_COLOR,[Nd]:i.SRC_ALPHA,[Um]:i.SRC_ALPHA_SATURATE,[Dm]:i.DST_COLOR,[Pm]:i.DST_ALPHA,[Im]:i.ONE_MINUS_SRC_COLOR,[Ud]:i.ONE_MINUS_SRC_ALPHA,[Nm]:i.ONE_MINUS_DST_COLOR,[Lm]:i.ONE_MINUS_DST_ALPHA,[Fm]:i.CONSTANT_COLOR,[Om]:i.ONE_MINUS_CONSTANT_COLOR,[Bm]:i.CONSTANT_ALPHA,[km]:i.ONE_MINUS_CONSTANT_ALPHA};function At(j,Ft,xt,zt,Jt,Et,le,ie,je,Ee){if(j===es){x===!0&&(Pt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),j!==Mm){if(j!==g||Ee!==G){if((B!==yr||E!==yr)&&(i.blendEquation(i.FUNC_ADD),B=yr,E=yr),Ee)switch(j){case Ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pd:i.blendFunc(i.ONE,i.ONE);break;case Ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ye("WebGLState: Invalid blending: ",j);break}else switch(j){case Ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ld:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dd:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",j);break}k=null,R=null,O=null,W=null,A.set(0,0,0),F=0,g=j,G=Ee}return}Jt=Jt||Ft,Et=Et||xt,le=le||zt,(Ft!==B||Jt!==E)&&(i.blendEquationSeparate(ne[Ft],ne[Jt]),B=Ft,E=Jt),(xt!==k||zt!==R||Et!==O||le!==W)&&(i.blendFuncSeparate(et[xt],et[zt],et[Et],et[le]),k=xt,R=zt,O=Et,W=le),(ie.equals(A)===!1||je!==F)&&(i.blendColor(ie.r,ie.g,ie.b,je),A.copy(ie),F=je),g=j,G=!1}function V(j,Ft){j.side===ts?Pt(i.CULL_FACE):vt(i.CULL_FACE);let xt=j.side===Qn;Ft&&(xt=!xt),Ct(xt),j.blending===Ma&&j.transparent===!1?At(es):At(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);let zt=j.stencilWrite;l.setTest(zt),zt&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),he(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(j){Y!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),Y=j)}function Bt(j){j!==vm?(vt(i.CULL_FACE),j!==at&&(j===Id?i.cullFace(i.BACK):j===ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),at=j}function de(j){j!==lt&&(ft&&i.lineWidth(j),lt=j)}function he(j,Ft,xt){j?(vt(i.POLYGON_OFFSET_FILL),(J!==Ft||Q!==xt)&&(J=Ft,Q=xt,a.getReversed()&&(Ft=-Ft),i.polygonOffset(Ft,xt))):Pt(i.POLYGON_OFFSET_FILL)}function ue(j){j?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Se(j){j===void 0&&(j=i.TEXTURE0+dt-1),wt!==j&&(i.activeTexture(j),wt=j)}function X(j,Ft,xt){xt===void 0&&(wt===null?xt=i.TEXTURE0+dt-1:xt=wt);let zt=Mt[xt];zt===void 0&&(zt={type:void 0,texture:void 0},Mt[xt]=zt),(zt.type!==j||zt.texture!==Ft)&&(wt!==xt&&(i.activeTexture(xt),wt=xt),i.bindTexture(j,Ft||_t[j]),zt.type=j,zt.texture=Ft)}function Ce(){let j=Mt[wt];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function we(){try{i.compressedTexImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function w(){try{i.texSubImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function tt(){try{i.texSubImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function Ut(){try{i.texStorage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function Ot(){try{i.texStorage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function gt(){try{i.texImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function St(){try{i.texImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function kt(j){return v[j]!==void 0?v[j]:i.getParameter(j)}function re(j,Ft){v[j]!==Ft&&(i.pixelStorei(j,Ft),v[j]=Ft)}function qt(j){He.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),He.copy(j))}function Gt(j){Ie.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Ie.copy(j))}function ae(j,Ft){let xt=h.get(Ft);xt===void 0&&(xt=new WeakMap,h.set(Ft,xt));let zt=xt.get(j);zt===void 0&&(zt=i.getUniformBlockIndex(Ft,j.name),xt.set(j,zt))}function ge(j,Ft){let zt=h.get(Ft).get(j);c.get(Ft)!==zt&&(i.uniformBlockBinding(Ft,zt,j.__bindingPointIndex),c.set(Ft,zt))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},wt=null,Mt={},p={},y=new WeakMap,M=[],I=null,x=!1,g=null,B=null,k=null,R=null,E=null,O=null,W=null,A=new _e(0,0,0),F=0,G=!1,Y=null,at=null,lt=null,J=null,Q=null,He.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Pt,bindFramebuffer:oe,drawBuffers:Zt,useProgram:me,setBlending:At,setMaterial:V,setFlipSided:Ct,setCullFace:Bt,setLineWidth:de,setPolygonOffset:he,setScissorTest:ue,activeTexture:Se,bindTexture:X,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:D,texImage2D:gt,texImage3D:St,pixelStorei:re,getParameter:kt,updateUBOMapping:ae,uniformBlockBinding:ge,texStorage2D:Ut,texStorage3D:Ot,texSubImage2D:w,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:mt,scissor:qt,viewport:Gt,reset:Me}}function xb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,d=new WeakMap,v=new Set,p,y=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(D,w){return M?new OffscreenCanvas(D,w):yo("canvas")}function x(D,w,tt){let K=1,mt=we(D);if((mt.width>tt||mt.height>tt)&&(K=tt/Math.max(mt.width,mt.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Ut=Math.floor(K*mt.width),Ot=Math.floor(K*mt.height);p===void 0&&(p=I(Ut,Ot));let gt=w?I(Ut,Ot):p;return gt.width=Ut,gt.height=Ot,gt.getContext("2d").drawImage(D,0,0,Ut,Ot),ve("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Ut+"x"+Ot+")."),gt}else return"data"in D&&ve("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function g(D){return D.generateMipmaps}function B(D){i.generateMipmap(D)}function k(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(D,w,tt,K,mt,Ut=!1){if(D!==null){if(i[D]!==void 0)return i[D];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ot;K&&(Ot=t.get("EXT_texture_norm16"),Ot||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=w;if(w===i.RED&&(tt===i.FLOAT&&(gt=i.R32F),tt===i.HALF_FLOAT&&(gt=i.R16F),tt===i.UNSIGNED_BYTE&&(gt=i.R8),tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.R16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.R8UI),tt===i.UNSIGNED_SHORT&&(gt=i.R16UI),tt===i.UNSIGNED_INT&&(gt=i.R32UI),tt===i.BYTE&&(gt=i.R8I),tt===i.SHORT&&(gt=i.R16I),tt===i.INT&&(gt=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(gt=i.RG32F),tt===i.HALF_FLOAT&&(gt=i.RG16F),tt===i.UNSIGNED_BYTE&&(gt=i.RG8),tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.RG16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),tt===i.UNSIGNED_INT&&(gt=i.RG32UI),tt===i.BYTE&&(gt=i.RG8I),tt===i.SHORT&&(gt=i.RG16I),tt===i.INT&&(gt=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),tt===i.UNSIGNED_INT&&(gt=i.RGB32UI),tt===i.BYTE&&(gt=i.RGB8I),tt===i.SHORT&&(gt=i.RGB16I),tt===i.INT&&(gt=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),tt===i.BYTE&&(gt=i.RGBA8I),tt===i.SHORT&&(gt=i.RGBA16I),tt===i.INT&&(gt=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.RGB16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),w===i.RGBA){let St=Ut?vo:ze.getTransfer(mt);tt===i.FLOAT&&(gt=i.RGBA32F),tt===i.HALF_FLOAT&&(gt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(gt=St===tn?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.RGBA16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function E(D,w){let tt;return D?w===null||w===Hi||w===wa?tt=i.DEPTH24_STENCIL8:w===Ci?tt=i.DEPTH32F_STENCIL8:w===ba&&(tt=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===wa?tt=i.DEPTH_COMPONENT24:w===Ci?tt=i.DEPTH_COMPONENT32F:w===ba&&(tt=i.DEPTH_COMPONENT16),tt}function O(D,w){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function W(D){let w=D.target;w.removeEventListener("dispose",W),F(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&v.delete(w)}function A(D){let w=D.target;w.removeEventListener("dispose",A),Y(w)}function F(D){let w=n.get(D);if(w.__webglInit===void 0)return;let tt=D.source,K=y.get(tt);if(K){let mt=K[w.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&G(D),Object.keys(K).length===0&&y.delete(tt)}n.remove(D)}function G(D){let w=n.get(D);i.deleteTexture(w.__webglTexture);let tt=D.source,K=y.get(tt);delete K[w.__cacheKey],a.memory.textures--}function Y(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let mt=0;mt<w.__webglFramebuffer[K].length;mt++)i.deleteFramebuffer(w.__webglFramebuffer[K][mt]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let tt=D.textures;for(let K=0,mt=tt.length;K<mt;K++){let Ut=n.get(tt[K]);Ut.__webglTexture&&(i.deleteTexture(Ut.__webglTexture),a.memory.textures--),n.remove(tt[K])}n.remove(D)}let at=0;function lt(){at=0}function J(){return at}function Q(D){at=D}function dt(){let D=at;return D>=s.maxTextures&&ve("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),at+=1,D}function ft(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function Tt(D,w){let tt=n.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&tt.__version!==D.version){let K=D.image;if(K===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(tt,D,w);return}}else D.isExternalTexture&&(tt.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function pt(D,w){let tt=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){Pt(tt,D,w);return}else D.isExternalTexture&&(tt.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function wt(D,w){let tt=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){Pt(tt,D,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function Mt(D,w){let tt=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&tt.__version!==D.version){oe(tt,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}let Xt={[bc]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},jt={[Pn]:i.NEAREST,[Vm]:i.NEAREST_MIPMAP_NEAREST,[tl]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[ah]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},He={[Xm]:i.NEVER,[jm]:i.ALWAYS,[qm]:i.LESS,[Wh]:i.LEQUAL,[Ym]:i.EQUAL,[Xh]:i.GEQUAL,[Zm]:i.GREATER,[Jm]:i.NOTEQUAL};function Ie(D,w){if(w.type===Ci&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===ah||w.magFilter===tl||w.magFilter===Hs||w.minFilter===On||w.minFilter===ah||w.minFilter===tl||w.minFilter===Hs)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Xt[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Xt[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Xt[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,jt[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,jt[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,He[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pn||w.minFilter!==tl&&w.minFilter!==Hs||w.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Be(D,w){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",W));let K=w.source,mt=y.get(K);mt===void 0&&(mt={},y.set(K,mt));let Ut=ft(w);if(Ut!==D.__cacheKey){mt[Ut]===void 0&&(mt[Ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),mt[Ut].usedTimes++;let Ot=mt[D.__cacheKey];Ot!==void 0&&(mt[D.__cacheKey].usedTimes--,Ot.usedTimes===0&&G(w)),D.__cacheKey=Ut,D.__webglTexture=mt[Ut].texture}return tt}function _t(D,w,tt){return Math.floor(Math.floor(D/tt)/w)}function vt(D,w,tt,K){let Ut=D.updateRanges;if(Ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,K,w.data);else{Ut.sort((re,qt)=>re.start-qt.start);let Ot=0;for(let re=1;re<Ut.length;re++){let qt=Ut[Ot],Gt=Ut[re],ae=qt.start+qt.count,ge=_t(Gt.start,w.width,4),Me=_t(qt.start,w.width,4);Gt.start<=ae+1&&ge===Me&&_t(Gt.start+Gt.count-1,w.width,4)===ge?qt.count=Math.max(qt.count,Gt.start+Gt.count-qt.start):(++Ot,Ut[Ot]=Gt)}Ut.length=Ot+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),St=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let re=0,qt=Ut.length;re<qt;re++){let Gt=Ut[re],ae=Math.floor(Gt.start/4),ge=Math.ceil(Gt.count/4),Me=ae%w.width,j=Math.floor(ae/w.width),Ft=ge,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,Me,j,Ft,xt,tt,K,w.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Pt(D,w,tt){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);let mt=Be(D,w),Ut=w.source;e.bindTexture(K,D.__webglTexture,i.TEXTURE0+tt);let Ot=n.get(Ut);if(Ut.version!==Ot.__version||mt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let xt=ze.getPrimaries(ze.workingColorSpace),zt=w.colorSpace===bs?null:ze.getPrimaries(w.colorSpace),Jt=w.colorSpace===bs||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let St=x(w.image,!1,s.maxTextureSize);St=Ce(w,St);let kt=r.convert(w.format,w.colorSpace),re=r.convert(w.type),qt=R(w.internalFormat,kt,re,w.normalized,w.colorSpace,w.isVideoTexture);Ie(K,w);let Gt,ae=w.mipmaps,ge=w.isVideoTexture!==!0,Me=Ot.__version===void 0||mt===!0,j=Ut.dataReady,Ft=O(w,St);if(w.isDepthTexture)qt=E(w.format===Gs,w.type),Me&&(ge?e.texStorage2D(i.TEXTURE_2D,1,qt,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,qt,St.width,St.height,0,kt,re,null));else if(w.isDataTexture)if(ae.length>0){ge&&Me&&e.texStorage2D(i.TEXTURE_2D,Ft,qt,ae[0].width,ae[0].height);for(let xt=0,zt=ae.length;xt<zt;xt++)Gt=ae[xt],ge?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,re,Gt.data):e.texImage2D(i.TEXTURE_2D,xt,qt,Gt.width,Gt.height,0,kt,re,Gt.data);w.generateMipmaps=!1}else ge?(Me&&e.texStorage2D(i.TEXTURE_2D,Ft,qt,St.width,St.height),j&&vt(w,St,kt,re)):e.texImage2D(i.TEXTURE_2D,0,qt,St.width,St.height,0,kt,re,St.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ge&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,qt,ae[0].width,ae[0].height,St.depth);for(let xt=0,zt=ae.length;xt<zt;xt++)if(Gt=ae[xt],w.format!==Ri)if(kt!==null)if(ge){if(j)if(w.layerUpdates.size>0){let Jt=rf(Gt.width,Gt.height,w.format,w.type);for(let Et of w.layerUpdates){let le=Gt.data.subarray(Et*Jt/Gt.data.BYTES_PER_ELEMENT,(Et+1)*Jt/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Et,Gt.width,Gt.height,1,kt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Gt.width,Gt.height,St.depth,kt,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,qt,Gt.width,Gt.height,St.depth,0,Gt.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Gt.width,Gt.height,St.depth,kt,re,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,qt,Gt.width,Gt.height,St.depth,0,kt,re,Gt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ge&&Me&&e.texStorage2D(i.TEXTURE_2D,Ft,qt,ae[0].width,ae[0].height);for(let xt=0,zt=ae.length;xt<zt;xt++)Gt=ae[xt],w.format!==Ri?kt!==null?ge?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,qt,Gt.width,Gt.height,0,Gt.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,re,Gt.data):e.texImage2D(i.TEXTURE_2D,xt,qt,Gt.width,Gt.height,0,kt,re,Gt.data)}else if(w.isDataArrayTexture)if(ge){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,qt,St.width,St.height,St.depth),j)if(w.layerUpdates.size>0){let xt=rf(St.width,St.height,w.format,w.type);for(let zt of w.layerUpdates){let Jt=St.data.subarray(zt*xt/St.data.BYTES_PER_ELEMENT,(zt+1)*xt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,St.width,St.height,1,kt,re,Jt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,kt,re,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,St.width,St.height,St.depth,0,kt,re,St.data);else if(w.isData3DTexture)ge?(Me&&e.texStorage3D(i.TEXTURE_3D,Ft,qt,St.width,St.height,St.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,kt,re,St.data)):e.texImage3D(i.TEXTURE_3D,0,qt,St.width,St.height,St.depth,0,kt,re,St.data);else if(w.isFramebufferTexture){if(Me)if(ge)e.texStorage2D(i.TEXTURE_2D,Ft,qt,St.width,St.height);else{let xt=St.width,zt=St.height;for(let Jt=0;Jt<Ft;Jt++)e.texImage2D(i.TEXTURE_2D,Jt,qt,xt,zt,0,kt,re,null),xt>>=1,zt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),St.parentNode!==xt){xt.appendChild(St),v.add(w),xt.onpaint=zt=>{let Jt=zt.changedElements;for(let Et of v)Jt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,St);else{let Jt=i.RGBA,Et=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Jt,Et,le,St)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(ge&&Me){let xt=we(ae[0]);e.texStorage2D(i.TEXTURE_2D,Ft,qt,xt.width,xt.height)}for(let xt=0,zt=ae.length;xt<zt;xt++)Gt=ae[xt],ge?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt,re,Gt):e.texImage2D(i.TEXTURE_2D,xt,qt,kt,re,Gt);w.generateMipmaps=!1}else if(ge){if(Me){let xt=we(St);e.texStorage2D(i.TEXTURE_2D,Ft,qt,xt.width,xt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,re,St)}else e.texImage2D(i.TEXTURE_2D,0,qt,kt,re,St);g(w)&&B(K),Ot.__version=Ut.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function oe(D,w,tt){if(w.image.length!==6)return;let K=Be(D,w),mt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+tt);let Ut=n.get(mt);if(mt.version!==Ut.__version||K===!0){e.activeTexture(i.TEXTURE0+tt);let Ot=ze.getPrimaries(ze.workingColorSpace),gt=w.colorSpace===bs?null:ze.getPrimaries(w.colorSpace),St=w.colorSpace===bs||Ot===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let kt=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,qt=[];for(let Et=0;Et<6;Et++)!kt&&!re?qt[Et]=x(w.image[Et],!0,s.maxCubemapSize):qt[Et]=re?w.image[Et].image:w.image[Et],qt[Et]=Ce(w,qt[Et]);let Gt=qt[0],ae=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Me=R(w.internalFormat,ae,ge,w.normalized,w.colorSpace),j=w.isVideoTexture!==!0,Ft=Ut.__version===void 0||K===!0,xt=mt.dataReady,zt=O(w,Gt);Ie(i.TEXTURE_CUBE_MAP,w);let Jt;if(kt){j&&Ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Me,Gt.width,Gt.height);for(let Et=0;Et<6;Et++){Jt=qt[Et].mipmaps;for(let le=0;le<Jt.length;le++){let ie=Jt[le];w.format!==Ri?ae!==null?j?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,0,0,ie.width,ie.height,ae,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,Me,ie.width,ie.height,0,ie.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,0,0,ie.width,ie.height,ae,ge,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,Me,ie.width,ie.height,0,ae,ge,ie.data)}}}else{if(Jt=w.mipmaps,j&&Ft){Jt.length>0&&zt++;let Et=we(qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Me,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(re){j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,qt[Et].width,qt[Et].height,ae,ge,qt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Me,qt[Et].width,qt[Et].height,0,ae,ge,qt[Et].data);for(let le=0;le<Jt.length;le++){let je=Jt[le].image[Et].image;j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,0,0,je.width,je.height,ae,ge,je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,Me,je.width,je.height,0,ae,ge,je.data)}}else{j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,ge,qt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Me,ae,ge,qt[Et]);for(let le=0;le<Jt.length;le++){let ie=Jt[le];j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,0,0,ae,ge,ie.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,Me,ae,ge,ie.image[Et])}}}g(w)&&B(i.TEXTURE_CUBE_MAP),Ut.__version=mt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Zt(D,w,tt,K,mt,Ut){let Ot=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),St=R(tt.internalFormat,Ot,gt,tt.normalized,tt.colorSpace),kt=n.get(w),re=n.get(tt);if(re.__renderTarget=w,!kt.__hasExternalTextures){let qt=Math.max(1,w.width>>Ut),Gt=Math.max(1,w.height>>Ut);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,Ut,St,qt,Gt,w.depth,0,Ot,gt,null):e.texImage2D(mt,Ut,St,qt,Gt,0,Ot,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,mt,re.__webglTexture,0,ue(w)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,mt,re.__webglTexture,Ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(D,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){let K=w.depthTexture,mt=K&&K.isDepthTexture?K.type:null,Ut=E(w.stencilBuffer,mt),Ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),Ut,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),Ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,D)}else{let K=w.textures;for(let mt=0;mt<K.length;mt++){let Ut=K[mt],Ot=r.convert(Ut.format,Ut.colorSpace),gt=r.convert(Ut.type),St=R(Ut.internalFormat,Ot,gt,Ut.normalized,Ut.colorSpace);Se(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),St,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),St,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,St,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(D,w,tt){let K=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=n.get(w.depthTexture);if(mt.__renderTarget=w,(!mt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,w.depthTexture.addEventListener("dispose",W)),mt.__webglTexture===void 0){mt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w.depthTexture);let kt=r.convert(w.depthTexture.format),re=r.convert(w.depthTexture.type),qt;w.depthTexture.format===Ji?qt=i.DEPTH_COMPONENT24:w.depthTexture.format===Gs&&(qt=i.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,qt,w.width,w.height,0,kt,re,null)}}else Tt(w.depthTexture,0);let Ut=mt.__webglTexture,Ot=ue(w),gt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,St=w.depthTexture.format===Gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ji)Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,gt,Ut,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,St,gt,Ut,0);else if(w.depthTexture.format===Gs)Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,gt,Ut,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,St,gt,Ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(D){let w=n.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let K=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let mt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",mt)};K.addEventListener("dispose",mt),w.__depthDisposeCallback=mt}w.__boundDepthTexture=K}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let K=0;K<6;K++)ne(w.__webglFramebuffer[K],D,K);else{let K=D.texture.mipmaps;K&&K.length>0?ne(w.__webglFramebuffer[0],D,0):ne(w.__webglFramebuffer,D,0)}else if(tt){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),me(w.__webglDepthbuffer[K],D,!1);else{let mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Ut)}}else{let K=D.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),me(w.__webglDepthbuffer,D,!1);else{let mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(D,w,tt){let K=n.get(D);w!==void 0&&Zt(K.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&et(D)}function V(D){let w=D.texture,tt=n.get(D),K=n.get(w);D.addEventListener("dispose",A);let mt=D.textures,Ut=D.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,a.memory.textures++),Ut){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let St=0;St<w.mipmaps.length;St++)tt.__webglFramebuffer[gt][St]=i.createFramebuffer()}else tt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let gt=0,St=mt.length;gt<St;gt++){let kt=n.get(mt[gt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Se(D)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){let St=mt[gt];tt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);let kt=r.convert(St.format,St.colorSpace),re=r.convert(St.type),qt=R(St.internalFormat,kt,re,St.normalized,St.colorSpace,D.isXRRenderTarget===!0),Gt=ue(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,qt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),me(tt.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ut){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)Zt(tt.__webglFramebuffer[gt][St],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else Zt(tt.__webglFramebuffer[gt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(w)&&B(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let gt=0,St=mt.length;gt<St;gt++){let kt=mt[gt],re=n.get(kt),qt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(qt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(qt,re.__webglTexture),Ie(qt,kt),Zt(tt.__webglFramebuffer,D,kt,i.COLOR_ATTACHMENT0+gt,qt,0),g(kt)&&B(qt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(gt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,K.__webglTexture),Ie(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)Zt(tt.__webglFramebuffer[St],D,w,i.COLOR_ATTACHMENT0,gt,St);else Zt(tt.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,gt,0);g(w)&&B(gt),e.unbindTexture()}D.depthBuffer&&et(D)}function Ct(D){let w=D.textures;for(let tt=0,K=w.length;tt<K;tt++){let mt=w[tt];if(g(mt)){let Ut=k(D),Ot=n.get(mt).__webglTexture;e.bindTexture(Ut,Ot),B(Ut),e.unbindTexture()}}}let Bt=[],de=[];function he(D){if(D.samples>0){if(Se(D)===!1){let w=D.textures,tt=D.width,K=D.height,mt=i.COLOR_BUFFER_BIT,Ut=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(D),gt=w.length>1;if(gt)for(let kt=0;kt<w.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);let St=D.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let kt=0;kt<w.length;kt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);let re=n.get(w[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,tt,K,0,0,tt,K,mt,i.NEAREST),c===!0&&(Bt.length=0,de.length=0,Bt.push(i.COLOR_ATTACHMENT0+kt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Bt.push(Ut),de.push(Ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let kt=0;kt<w.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);let re=n.get(w[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ue(D){return Math.min(s.maxSamples,D.samples)}function Se(D){let w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(D){let w=a.render.frame;d.get(D)!==w&&(d.set(D,w),D.update())}function Ce(D,w){let tt=D.colorSpace,K=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==xo&&tt!==bs&&(ze.getTransfer(tt)===tn?(K!==Ri||mt!==hi)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",tt)),w}function we(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=dt,this.resetTextureUnits=lt,this.getTextureUnits=J,this.setTextureUnits=Q,this.setTexture2D=Tt,this.setTexture2DArray=pt,this.setTexture3D=wt,this.setTextureCube=Mt,this.rebindTextures=At,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function vb(i,t){function e(n,s=bs){let r,a=ze.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===lh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gd)return i.BYTE;if(n===Wd)return i.SHORT;if(n===ba)return i.UNSIGNED_SHORT;if(n===oh)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===Zd)return i.RGB;if(n===Ri)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===hh)return i.RED;if(n===uh)return i.RED_INTEGER;if(n===Ws)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===fh)return i.RGBA_INTEGER;if(n===el||n===nl||n===il||n===sl)if(a===tn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===mh||n===gh||n===_h)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xh||n===vh||n===yh||n===Sh||n===Mh||n===rl||n===bh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xh||n===vh)return a===tn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sh)return r.COMPRESSED_R11_EAC;if(n===Mh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rl)return r.COMPRESSED_RG11_EAC;if(n===bh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wh||n===Eh||n===Th||n===Ah||n===Ch||n===Rh||n===Ih||n===Ph||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ih)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bh||n===kh||n===zh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bh)return a===tn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===Vh||n===al||n===Hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$h)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
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

}`,vf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:yb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new $o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends ji{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,v=null,p=null,y=null,M=null,I=typeof XRWebGLBinding<"u",x=new vf,g={},B=e.getContextAttributes(),k=null,R=null,E=[],O=[],W=new $t,A=null,F=null,G=new Gn;G.viewport=new en;let Y=new Gn;Y.viewport=new en;let at=[G,Y],lt=new nh,J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let vt=E[_t];return vt===void 0&&(vt=new pa,E[_t]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(_t){let vt=E[_t];return vt===void 0&&(vt=new pa,E[_t]=vt),vt.getGripSpace()},this.getHand=function(_t){let vt=E[_t];return vt===void 0&&(vt=new pa,E[_t]=vt),vt.getHandSpace()};function dt(_t){let vt=O.indexOf(_t.inputSource);if(vt===-1)return;let Pt=E[vt];Pt!==void 0&&(Pt.update(_t.inputSource,_t.frame,h||a),Pt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function ft(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",Tt);for(let _t=0;_t<E.length;_t++){let vt=O[_t];vt!==null&&(O[_t]=null,E[_t].disconnect(vt))}J=null,Q=null,x.reset();for(let _t in g)delete g[_t];if(t.setRenderTarget(k),y=null,p=null,v=null,s=null,R=null,Be.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(W.width,W.height,!1),F!==null){let _t=F.camera;_t.fov=F.fov,_t.zoom=F.zoom,_t.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){l=_t,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(k=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",Tt),B.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(W),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,oe=null,Zt=null;B.depth&&(Zt=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=B.stencil?Gs:Ji,oe=B.stencil?wa:Hi);let me={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:r};v=this.getBinding(),p=v.createProjectionLayer(me),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new li(p.textureWidth,p.textureHeight,{format:Ri,type:hi,depthTexture:new Fs(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Pt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new li(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Tt(_t){for(let vt=0;vt<_t.removed.length;vt++){let Pt=_t.removed[vt],oe=O.indexOf(Pt);oe>=0&&(O[oe]=null,E[oe].disconnect(Pt))}for(let vt=0;vt<_t.added.length;vt++){let Pt=_t.added[vt],oe=O.indexOf(Pt);if(oe===-1){for(let me=0;me<E.length;me++)if(me>=O.length){O.push(Pt),oe=me;break}else if(O[me]===null){O[me]=Pt,oe=me;break}if(oe===-1)break}let Zt=E[oe];Zt&&Zt.connect(Pt)}}let pt=new Z,wt=new Z;function Mt(_t,vt,Pt){pt.setFromMatrixPosition(vt.matrixWorld),wt.setFromMatrixPosition(Pt.matrixWorld);let oe=pt.distanceTo(wt),Zt=vt.projectionMatrix.elements,me=Pt.projectionMatrix.elements,ne=Zt[14]/(Zt[10]-1),et=Zt[14]/(Zt[10]+1),At=(Zt[9]+1)/Zt[5],V=(Zt[9]-1)/Zt[5],Ct=(Zt[8]-1)/Zt[0],Bt=(me[8]+1)/me[0],de=ne*Ct,he=ne*Bt,ue=oe/(-Ct+Bt),Se=ue*-Ct;if(vt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Se),_t.translateZ(ue),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Zt[10]===-1)_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let X=ne+ue,Ce=et+ue,we=de-Se,D=he+(oe-Se),w=At*et/Ce*X,tt=V*et/Ce*X;_t.projectionMatrix.makePerspective(we,D,w,tt,X,Ce),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function Xt(_t,vt){vt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(vt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let vt=_t.near,Pt=_t.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),lt.near=Y.near=G.near=vt,lt.far=Y.far=G.far=Pt,(J!==lt.near||Q!==lt.far)&&(s.updateRenderState({depthNear:lt.near,depthFar:lt.far}),J=lt.near,Q=lt.far),lt.layers.mask=_t.layers.mask|6,G.layers.mask=lt.layers.mask&-5,Y.layers.mask=lt.layers.mask&-3;let oe=_t.parent,Zt=lt.cameras;Xt(lt,oe);for(let me=0;me<Zt.length;me++)Xt(Zt[me],oe);Zt.length===2?Mt(lt,G,Y):lt.projectionMatrix.copy(G.projectionMatrix),F===null&&_t.isPerspectiveCamera&&(F={camera:_t,fov:_t.fov,zoom:_t.zoom}),jt(_t,lt,oe)};function jt(_t,vt,Pt){Pt===null?_t.matrix.copy(vt.matrixWorld):(_t.matrix.copy(Pt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(vt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=ua*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(p===null&&y===null))return c},this.setFoveation=function(_t){c=_t,p!==null&&(p.fixedFoveation=_t),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=_t)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(lt)},this.getCameraTexture=function(_t){return g[_t]};let He=null;function Ie(_t,vt){if(d=vt.getViewerPose(h||a),M=vt,d!==null){let Pt=d.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let oe=!1;Pt.length!==lt.cameras.length&&(lt.cameras.length=0,oe=!0);for(let et=0;et<Pt.length;et++){let At=Pt[et],V=null;if(y!==null)V=y.getViewport(At);else{let Bt=v.getViewSubImage(p,At);V=Bt.viewport,et===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Ct=at[et];Ct===void 0&&(Ct=new Gn,Ct.layers.enable(et),Ct.viewport=new en,at[et]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(V.x,V.y,V.width,V.height),et===0&&(lt.matrix.copy(Ct.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),oe===!0&&lt.cameras.push(Ct)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let et=v.getDepthInformation(Pt[0]);et&&et.isValid&&et.texture&&x.init(et,s.renderState)}if(Zt&&Zt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let et=0;et<Pt.length;et++){let At=Pt[et].camera;if(At){let V=g[At];V||(V=new Po,g[At]=V);let Ct=v.getCameraImage(At);V.sourceTexture=Ct}}}}for(let Pt=0;Pt<E.length;Pt++){let oe=O[Pt],Zt=E[Pt];oe!==null&&Zt!==void 0&&Zt.update(oe,vt,h||a)}He&&He(_t,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),M=null}let Be=new Ig;Be.setAnimationLoop(Ie),this.setAnimationLoop=function(_t){He=_t},this.dispose=function(){}}},Mb=new Ve,Fg=new Ae;Fg.set(-1,0,0,0,1,0,0,0,1);function bb(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,ef(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,B,k,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),v(x,g)):g.isMeshPhongMaterial?(r(x,g),d(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),p(x,g),g.isMeshPhysicalMaterial&&y(x,g,R)):g.isMeshMatcapMaterial?(r(x,g),M(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),I(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&l(x,g)):g.isPointsMaterial?c(x,g,B,k):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Qn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Qn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let B=t.get(g),k=B.envMap,R=B.envMapRotation;k&&(x.envMap.value=k,x.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Fg),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function l(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,B,k){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*B,x.scale.value=k*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function p(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,B){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,g){g.matcap&&(x.matcap.value=g.matcap)}function I(x,g){let B=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let O=E.program;n.uniformBlockBinding(R,O)}function h(R,E){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",B));let W=E.program;n.updateUBOMapping(R,W);let A=t.render.frame;r[R.id]!==A&&(p(R),r[R.id]=A)}function d(R){let E=v();R.__bindingPointIndex=E;let O=i.createBuffer(),W=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,W,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let E=s[R.id],O=R.uniforms,W=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,F=O.length;A<F;A++){let G=O[A];if(Array.isArray(G))for(let Y=0,at=G.length;Y<at;Y++)y(G[Y],A,Y,W);else y(G,A,0,W)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,E,O,W){if(I(R,E,O,W)===!0){let A=R.__offset,F=R.value;if(Array.isArray(F)){let G=0;for(let Y=0;Y<F.length;Y++){let at=F[Y],lt=g(at);M(at,R.__data,G),typeof at!="number"&&typeof at!="boolean"&&!at.isMatrix3&&!ArrayBuffer.isView(at)&&(G+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function M(R,E,O){typeof R=="number"||typeof R=="boolean"?E[0]=R:R.isMatrix3?(E[0]=R.elements[0],E[1]=R.elements[1],E[2]=R.elements[2],E[3]=0,E[4]=R.elements[3],E[5]=R.elements[4],E[6]=R.elements[5],E[7]=0,E[8]=R.elements[6],E[9]=R.elements[7],E[10]=R.elements[8],E[11]=0):ArrayBuffer.isView(R)?E.set(new R.constructor(R.buffer,R.byteOffset,E.length)):R.toArray(E,O)}function I(R,E,O,W){let A=R.value,F=E+"_"+O;if(W[F]===void 0)return typeof A=="number"||typeof A=="boolean"?W[F]=A:ArrayBuffer.isView(A)?W[F]=A.slice():W[F]=A.clone(),!0;{let G=W[F];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return W[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(G.equals(A)===!1)return G.copy(A),!0}}return!1}function x(R){let E=R.uniforms,O=0,W=16;for(let F=0,G=E.length;F<G;F++){let Y=Array.isArray(E[F])?E[F]:[E[F]];for(let at=0,lt=Y.length;at<lt;at++){let J=Y[at],Q=Array.isArray(J.value)?J.value:[J.value];for(let dt=0,ft=Q.length;dt<ft;dt++){let Tt=Q[dt],pt=g(Tt),wt=O%W,Mt=wt%pt.boundary,Xt=wt+Mt;O+=Mt,Xt!==0&&W-Xt<pt.storage&&(O+=W-Xt),J.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=pt.storage}}}let A=O%W;return A>0&&(O+=W-A),R.__size=O,R.__cache={},this}function g(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(E.boundary=16,E.storage=R.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",R),E}function B(R){let E=R.target;E.removeEventListener("dispose",B);let O=a.indexOf(E.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:k}}var Eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function Tb(){return ns===null&&(ns=new To(Eb,16,16,Ws,Gi),ns.name="DFG_LUT",ns.minFilter=On,ns.magFilter=On,ns.wrapS=Yi,ns.wrapT=Yi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var jh=class{constructor(t={}){let{canvas:e=Km(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let I=y,x=new Set([fh,dh,uh]),g=new Set([hi,Hi,ba,wa,lh,ch]),B=new Uint32Array(4),k=new Int32Array(4),R=new Z,E=null,O=null,W=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,Y=!1,at=null,lt=null,J=null,Q=null;this._outputColorSpace=gi;let dt=0,ft=0,Tt=null,pt=-1,wt=null,Mt=new en,Xt=new en,jt=null,He=new _e(0),Ie=0,Be=e.width,_t=e.height,vt=1,Pt=null,oe=null,Zt=new en(0,0,Be,_t),me=new en(0,0,Be,_t),ne=!1,et=new ma,At=!1,V=!1,Ct=new Ve,Bt=new Z,de=new en,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Se(){return Tt===null?vt:1}let X=n;function Ce(C,H){return e.getContext(C,H)}let we,D,w,tt,K,mt,Ut,Ot,gt,St,kt,re,qt,Gt,ae,ge,Me,j,Ft,xt,zt,Jt,Et;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",je,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",xn,!1),X===null){let H="webgl2";if(X=Ce(H,C),X===null)throw Ce(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(C){throw e.removeEventListener("webglcontextlost",je,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),ye("WebGLRenderer: "+C.message),C}function le(){we=new DS(X),we.init(),zt=new vb(X,we),D=new bS(X,we,t,zt),w=new _b(X,we),D.reversedDepthBuffer&&p&&w.buffers.depth.setReversed(!0),lt=X.createFramebuffer(),J=X.createFramebuffer(),Q=X.createFramebuffer(),tt=new FS(X),K=new ib,mt=new xb(X,we,w,K,D,zt,tt),Ut=new LS(G),Ot=new Bx(X),Jt=new SS(X,Ot),gt=new NS(X,Ot,tt,Jt),St=new BS(X,gt,Ot,Jt,tt),j=new OS(X,D,mt),ae=new wS(K),kt=new nb(G,Ut,we,D,Jt,ae),re=new bb(G,K),qt=new rb,Gt=new ub(we),Me=new yS(G,Ut,w,St,M,c),ge=new gb(G,St,D),Et=new wb(X,tt,D,w),Ft=new MS(X,we,tt),xt=new US(X,we,tt),tt.programs=kt.programs,G.capabilities=D,G.extensions=we,G.properties=K,G.renderLists=qt,G.shadowMap=ge,G.state=w,G.info=tt}I!==hi&&(F=new zS(I,e.width,e.height,l,s,r));let ie=new yf(G,X);this.xr=ie,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(Be,_t,!1))},this.getSize=function(C){return C.set(Be,_t)},this.setSize=function(C,H,nt=!0){if(ie.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=C,_t=H,e.width=Math.floor(C*vt),e.height=Math.floor(H*vt),nt===!0&&(e.style.width=C+"px",e.style.height=H+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(Be*vt,_t*vt).floor()},this.setDrawingBufferSize=function(C,H,nt){Be=C,_t=H,vt=nt,e.width=Math.floor(C*nt),e.height=Math.floor(H*nt),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(I===hi){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Mt)},this.getViewport=function(C){return C.copy(Zt)},this.setViewport=function(C,H,nt,st){C.isVector4?Zt.set(C.x,C.y,C.z,C.w):Zt.set(C,H,nt,st),w.viewport(Mt.copy(Zt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,H,nt,st){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,H,nt,st),w.scissor(Xt.copy(me).multiplyScalar(vt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){w.setScissorTest(ne=C)},this.setOpaqueSort=function(C){Pt=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,nt=!0){let st=0;if(C){let ot=!1;if(Tt!==null){let It=Tt.texture.format;ot=x.has(It)}if(ot){let It=Tt.texture.type,Wt=g.has(It),Rt=Me.getClearColor(),ut=Me.getClearAlpha(),Lt=Rt.r,Kt=Rt.g,De=Rt.b;Wt?(B[0]=Lt,B[1]=Kt,B[2]=De,B[3]=ut,X.clearBufferuiv(X.COLOR,0,B)):(k[0]=Lt,k[1]=Kt,k[2]=De,k[3]=ut,X.clearBufferiv(X.COLOR,0,k))}else st|=X.COLOR_BUFFER_BIT}H&&(st|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),at=C},this.dispose=function(){e.removeEventListener("webglcontextlost",je,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Me.dispose(),qt.dispose(),Gt.dispose(),K.dispose(),Ut.dispose(),St.dispose(),Jt.dispose(),Et.dispose(),kt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",xl),ie.removeEventListener("sessionend",Ur),qn.stop()};function je(C){C.preventDefault(),So("WebGLRenderer: Context Lost."),Y=!0}function Ee(){So("WebGLRenderer: Context Restored."),Y=!1;let C=tt.autoReset,H=ge.enabled,nt=ge.autoUpdate,st=ge.needsUpdate,ot=ge.type;le(),tt.autoReset=C,ge.enabled=H,ge.autoUpdate=nt,ge.needsUpdate=st,ge.type=ot}function xn(C){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bn(C){let H=C.target;H.removeEventListener("dispose",bn),Pr(H)}function Pr(C){Lr(C),K.remove(C)}function Lr(C){let H=K.get(C).programs;H!==void 0&&(H.forEach(function(nt){kt.releaseProgram(nt)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,nt,st,ot,It){H===null&&(H=he);let Wt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Rt=xu(C,H,nt,st,ot);w.setMaterial(st,Wt);let ut=nt.index,Lt=1;if(st.wireframe===!0){if(ut=gt.getWireframeAttribute(nt),ut===void 0)return;Lt=2}let Kt=nt.drawRange,De=nt.attributes.position,te=Kt.start*Lt,ke=(Kt.start+Kt.count)*Lt;It!==null&&(te=Math.max(te,It.start*Lt),ke=Math.min(ke,(It.start+It.count)*Lt)),ut!==null?(te=Math.max(te,0),ke=Math.min(ke,ut.count)):De!=null&&(te=Math.max(te,0),ke=Math.min(ke,De.count));let pn=ke-te;if(pn<0||pn===1/0)return;Jt.setup(ot,st,Rt,nt,ut);let Ye,Ze=Ft;if(ut!==null&&(Ye=Ot.get(ut),Ze=xt,Ze.setIndex(Ye)),ot.isMesh)st.wireframe===!0?(w.setLineWidth(st.wireframeLinewidth*Se()),Ze.setMode(X.LINES)):Ze.setMode(X.TRIANGLES);else if(ot.isLine){let hn=st.linewidth;hn===void 0&&(hn=1),w.setLineWidth(hn*Se()),ot.isLineSegments?Ze.setMode(X.LINES):ot.isLineLoop?Ze.setMode(X.LINE_LOOP):Ze.setMode(X.LINE_STRIP)}else ot.isPoints?Ze.setMode(X.POINTS):ot.isSprite&&Ze.setMode(X.TRIANGLES);if(ot.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ze.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let hn=ot._multiDrawStarts,Qt=ot._multiDrawCounts,Fn=ot._multiDrawCount,$e=ut?Ot.get(ut).bytesPerElement:1,ni=K.get(st).currentProgram.getUniforms();for(let yi=0;yi<Fn;yi++)ni.setValue(X,"_gl_DrawID",yi),Ze.render(hn[yi]/$e,Qt[yi])}else if(ot.isInstancedMesh)Ze.renderInstances(te,pn,ot.count);else if(nt.isInstancedBufferGeometry){let hn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Qt=Math.min(nt.instanceCount,hn);Ze.renderInstances(te,pn,Qt)}else Ze.render(te,pn)};function Dr(C,H,nt,st){at!==null&&C.isNodeMaterial&&at.setObject(st,C),At===!0&&ae.setState(C,nt,!1),C.transparent===!0&&C.side===ts&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Js(C,H,st),C.side=$s,C.needsUpdate=!0,Js(C,H,st),C.side=ts):Js(C,H,st)}this.compile=function(C,H,nt=null){nt===null&&(nt=C),at!==null&&at.renderStart(C,H,nt),O=Gt.get(nt),O.init(H),A.push(O),nt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(H.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),C!==nt&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(H.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),O.setupLights(),at!==null&&at.updateLights(O.state.lightsArray),V=this.localClippingEnabled,At=ae.init(this.clippingPlanes,V),At===!0&&ae.setGlobalState(this.clippingPlanes,H),at!==null&&ge.render(O.state.shadowsArray,nt,H);let st=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let It=ot.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){let Rt=It[Wt];Dr(Rt,nt,H,ot),st.add(Rt)}else Dr(It,nt,H,ot),st.add(It)}),O=A.pop(),at!==null&&at.renderEnd(),st},this.compileAsync=function(C,H,nt=null){let st=this.compile(C,H,nt);return new Promise(ot=>{function It(){if(st.forEach(function(Wt){let ut=K.get(Wt).currentProgram;(ut===void 0||ut.isReady())&&st.delete(Wt)}),st.size===0){ot(C);return}setTimeout(It,10)}we.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Nr=null;function Ys(C){Nr&&Nr(C)}function xl(){qn.stop()}function Ur(){qn.start()}let qn=new Ig;qn.setAnimationLoop(Ys),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Nr=C,ie.setAnimationLoop(C),C===null?qn.stop():qn.start()},ie.addEventListener("sessionstart",xl),ie.addEventListener("sessionend",Ur),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;at!==null&&at.renderStart(C,H);let nt=ie.enabled===!0&&ie.isPresenting===!0,st=F!==null&&(Tt===null||nt)&&F.begin(G,Tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,H,Tt),O=Gt.get(C,A.length),O.init(H),O.state.textureUnits=mt.getTextureUnits(),A.push(O),Ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),et.setFromProjectionMatrix(Ct,ki,H.reversedDepth),V=this.localClippingEnabled,At=ae.init(this.clippingPlanes,V),E=qt.get(C,W.length),E.init(),W.push(E),ie.enabled===!0&&ie.isPresenting===!0){let Wt=G.xr.getDepthSensingMesh();Wt!==null&&As(Wt,H,-1/0,G.sortObjects)}As(C,H,0,G.sortObjects),E.finish(),at!==null&&at.updateLights(O.state.lightsArray),G.sortObjects===!0&&E.sort(Pt,oe),ue=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ue&&Me.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&ae.beginShadows();let ot=O.state.shadowsArray;if(ge.render(ot,C,H),At===!0&&ae.endShadows(),(st&&F.hasRenderPass())===!1){let Wt=E.opaque,Rt=E.transmissive;if(O.setupLights(),H.isArrayCamera){let ut=H.cameras;if(Rt.length>0)for(let Lt=0,Kt=ut.length;Lt<Kt;Lt++){let De=ut[Lt];Na(Wt,Rt,C,De)}ue&&Me.render(C);for(let Lt=0,Kt=ut.length;Lt<Kt;Lt++){let De=ut[Lt];Da(E,C,De,De.viewport)}}else Rt.length>0&&Na(Wt,Rt,C,H),ue&&Me.render(C),Da(E,C,H)}Tt!==null&&ft===0&&(mt.updateMultisampleRenderTarget(Tt),mt.updateRenderTargetMipmap(Tt)),st&&F.end(G),C.isScene===!0&&C.onAfterRender(G,C,H),Jt.resetDefaultState(),pt=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],mt.setTextureUnits(O.state.textureUnits),At===!0&&ae.setGlobalState(G.clippingPlanes,O.state.camera)):O=null,W.pop(),W.length>0?E=W[W.length-1]:E=null,at!==null&&at.renderEnd()};function As(C,H,nt,st){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(et)){st&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);let Wt=St.update(C),Rt=C.material;Rt.visible&&E.push(C,Wt,Rt,nt,de.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(et))){let Wt=St.update(C),Rt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),de.copy(Wt.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Rt)){let ut=Wt.groups;for(let Lt=0,Kt=ut.length;Lt<Kt;Lt++){let De=ut[Lt],te=Rt[De.materialIndex];te&&te.visible&&E.push(C,Wt,te,nt,de.z,De,H)}}else Rt.visible&&E.push(C,Wt,Rt,nt,de.z,null,H)}}let It=C.children;for(let Wt=0,Rt=It.length;Wt<Rt;Wt++)As(It[Wt],H,nt,st)}function Da(C,H,nt,st){let{opaque:ot,transmissive:It,transparent:Wt}=C;O.setupLightsView(nt),At===!0&&ae.setGlobalState(G.clippingPlanes,nt),st&&w.viewport(Mt.copy(st)),ot.length>0&&Zs(ot,H,nt),It.length>0&&Zs(It,H,nt),Wt.length>0&&Zs(Wt,H,nt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Na(C,H,nt,st){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[st.id]===void 0){let te=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[st.id]=new li(1,1,{generateMipmaps:!0,type:te?Gi:hi,minFilter:Hs,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let It=O.state.transmissionRenderTarget[st.id],Wt=st.viewport||Mt;It.setSize(Wt.z*G.transmissionResolutionScale,Wt.w*G.transmissionResolutionScale);let Rt=G.getRenderTarget(),ut=G.getActiveCubeFace(),Lt=G.getActiveMipmapLevel();G.setRenderTarget(It),G.getClearColor(He),Ie=G.getClearAlpha(),Ie<1&&G.setClearColor(16777215,.5),G.clear(),ue&&Me.render(nt);let Kt=G.toneMapping;G.toneMapping=Vi;let De=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),O.setupLightsView(st),At===!0&&ae.setGlobalState(G.clippingPlanes,st),Zs(C,nt,st),mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It),we.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ke=0,pn=H.length;ke<pn;ke++){let Ye=H[ke],{object:Ze,geometry:hn,material:Qt,group:Fn}=Ye;if(Qt.side===ts&&Ze.layers.test(st.layers)){let $e=Qt.side;Qt.side=Qn,Qt.needsUpdate=!0,Fr(Ze,nt,st,hn,Qt,Fn),Qt.side=$e,Qt.needsUpdate=!0,te=!0}}te===!0&&(mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It))}G.setRenderTarget(Rt,ut,Lt),G.setClearColor(He,Ie),De!==void 0&&(st.viewport=De),G.toneMapping=Kt}function Zs(C,H,nt){let st=H.isScene===!0?H.overrideMaterial:null;for(let ot=0,It=C.length;ot<It;ot++){let Wt=C[ot],{object:Rt,geometry:ut,group:Lt}=Wt,Kt=Wt.material;Kt.allowOverride===!0&&st!==null&&(Kt=st),Rt.layers.test(nt.layers)&&Fr(Rt,H,nt,ut,Kt,Lt)}}function Fr(C,H,nt,st,ot,It){at!==null&&ot.isNodeMaterial&&at.setObject(C,ot),C.onBeforeRender(G,H,nt,st,ot,It),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(G,H,nt,st,C,It),ot.transparent===!0&&ot.side===ts&&ot.forceSinglePass===!1?(ot.side=Qn,ot.needsUpdate=!0,G.renderBufferDirect(nt,H,st,ot,C,It),ot.side=$s,ot.needsUpdate=!0,G.renderBufferDirect(nt,H,st,ot,C,It),ot.side=ts):G.renderBufferDirect(nt,H,st,ot,C,It),C.onAfterRender(G,H,nt,st,ot,It)}function Js(C,H,nt){H.isScene!==!0&&(H=he);let st=K.get(C),ot=O.state.lights,It=O.state.shadowsArray,Wt=ot.state.version,Rt=kt.getParameters(C,ot.state,It,H,nt,O.state.lightProbeGridArray),ut=kt.getProgramCacheKey(Rt),Lt=st.programs;st.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,st.fog=H.fog;let Kt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;st.envMap=Ut.get(C.envMap||st.environment,Kt),st.envMapRotation=st.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Lt===void 0&&(C.addEventListener("dispose",bn),Lt=new Map,st.programs=Lt);let De=Lt.get(ut);if(De!==void 0){if(st.currentProgram===De&&st.lightsStateVersion===Wt)return Cs(C,Rt),De}else Rt.uniforms=kt.getUniforms(C),at!==null&&C.isNodeMaterial&&at.build(C,nt,Rt),C.onBeforeCompile(Rt,G),De=kt.acquireProgram(Rt,ut),Lt.set(ut,De),st.uniforms=Rt.uniforms;let te=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=ae.uniform),Cs(C,Rt),st.needsLights=vl(C),st.lightsStateVersion=Wt,st.needsLights&&(te.ambientLightColor.value=ot.state.ambient,te.lightProbe.value=ot.state.probe,te.sunLights.value=ot.state.sun,te.sunLightShadows.value=ot.state.sunShadow,te.directionalLights.value=ot.state.directional,te.directionalLightShadows.value=ot.state.directionalShadow,te.spotLights.value=ot.state.spot,te.spotLightShadows.value=ot.state.spotShadow,te.rectAreaLights.value=ot.state.rectArea,te.ltc_1.value=ot.state.rectAreaLTC1,te.ltc_2.value=ot.state.rectAreaLTC2,te.pointLights.value=ot.state.point,te.pointLightShadows.value=ot.state.pointShadow,te.hemisphereLights.value=ot.state.hemi,te.sunShadowMatrix.value=ot.state.sunShadowMatrix,te.sunShadowCascade.value=ot.state.sunShadowCascade,te.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,te.spotLightMatrix.value=ot.state.spotLightMatrix,te.spotLightMap.value=ot.state.spotLightMap,te.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=O.state.lightProbeGridArray.length>0,st.currentProgram=De,st.uniformsList=null,De}function Ua(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=Aa.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Cs(C,H){let nt=K.get(C);nt.outputColorSpace=H.outputColorSpace,nt.batching=H.batching,nt.batchingColor=H.batchingColor,nt.instancing=H.instancing,nt.instancingColor=H.instancingColor,nt.instancingMorph=H.instancingMorph,nt.skinning=H.skinning,nt.morphTargets=H.morphTargets,nt.morphNormals=H.morphNormals,nt.morphColors=H.morphColors,nt.morphTargetsCount=H.morphTargetsCount,nt.numClippingPlanes=H.numClippingPlanes,nt.numIntersection=H.numClipIntersection,nt.vertexAlphas=H.vertexAlphas,nt.vertexTangents=H.vertexTangents,nt.toneMapping=H.toneMapping}function js(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(H.matrixWorld);for(let nt=0,st=C.length;nt<st;nt++){let ot=C[nt];if(ot.texture!==null&&ot.boundingBox.containsPoint(R))return ot}return null}function xu(C,H,nt,st,ot){H.isScene!==!0&&(H=he),mt.resetTextureUnits();let It=H.fog,Wt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?H.environment:null,Rt=Tt===null?G.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:ze.workingColorSpace,ut=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Lt=Ut.get(st.envMap||Wt,ut),Kt=st.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,De=!!nt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!nt.morphAttributes.position,ke=!!nt.morphAttributes.normal,pn=!!nt.morphAttributes.color,Ye=Vi;st.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ye=G.toneMapping);let Ze=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,hn=Ze!==void 0?Ze.length:0,Qt=K.get(st),Fn=O.state.lights;if(At===!0&&(V===!0||C!==wt)){let sn=C===wt&&st.id===pt;ae.setState(st,C,sn)}let $e=!1;st.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Fn.state.version||Qt.outputColorSpace!==Rt||ot.isBatchedMesh&&Qt.batching===!1||!ot.isBatchedMesh&&Qt.batching===!0||ot.isBatchedMesh&&Qt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Qt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Qt.instancing===!1||!ot.isInstancedMesh&&Qt.instancing===!0||ot.isSkinnedMesh&&Qt.skinning===!1||!ot.isSkinnedMesh&&Qt.skinning===!0||ot.isInstancedMesh&&Qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Qt.instancingMorph===!1&&ot.morphTexture!==null||Qt.envMap!==Lt||st.fog===!0&&Qt.fog!==It||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ae.numPlanes||Qt.numIntersection!==ae.numIntersection)||Qt.vertexAlphas!==Kt||Qt.vertexTangents!==De||Qt.morphTargets!==te||Qt.morphNormals!==ke||Qt.morphColors!==pn||Qt.toneMapping!==Ye||Qt.morphTargetsCount!==hn||!!Qt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,Qt.__version=st.version);let ni=Qt.currentProgram;$e===!0&&(ni=Js(st,H,ot),at&&st.isNodeMaterial&&at.onUpdateProgram(st,ni,Qt));let yi=!1,Xi=!1,us=!1,se=ni.getUniforms(),mn=Qt.uniforms;if(w.useProgram(ni.program)&&(yi=!0,Xi=!0,us=!0),st.id!==pt&&(pt=st.id,Xi=!0),Qt.needsLights){let sn=js(O.state.lightProbeGridArray,ot);Qt.lightProbeGrid!==sn&&(Qt.lightProbeGrid=sn,Xi=!0)}if(yi||wt!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),se.setValue(X,"projectionMatrix",C.projectionMatrix),se.setValue(X,"viewMatrix",C.matrixWorldInverse);let Si=se.map.cameraPosition;Si!==void 0&&Si.setValue(X,Bt.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&se.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&se.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),wt!==C&&(wt=C,Xi=!0,us=!0)}if(Qt.needsLights&&(Fn.state.sunShadowMap.length>0&&se.setValue(X,"sunShadowMap",Fn.state.sunShadowMap,mt),Fn.state.directionalShadowMap.length>0&&se.setValue(X,"directionalShadowMap",Fn.state.directionalShadowMap,mt),Fn.state.spotShadowMap.length>0&&se.setValue(X,"spotShadowMap",Fn.state.spotShadowMap,mt),Fn.state.pointShadowMap.length>0&&se.setValue(X,"pointShadowMap",Fn.state.pointShadowMap,mt)),ot.isSkinnedMesh){se.setOptional(X,ot,"bindMatrix"),se.setOptional(X,ot,"bindMatrixInverse");let sn=ot.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),se.setValue(X,"boneTexture",sn.boneTexture,mt))}ot.isBatchedMesh&&(se.setOptional(X,ot,"batchingTexture"),se.setValue(X,"batchingTexture",ot._matricesTexture,mt),se.setOptional(X,ot,"batchingIdTexture"),se.setValue(X,"batchingIdTexture",ot._indirectTexture,mt),se.setOptional(X,ot,"batchingColorTexture"),ot._colorsTexture!==null&&se.setValue(X,"batchingColorTexture",ot._colorsTexture,mt));let di=nt.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&j.update(ot,nt,ni),(Xi||Qt.receiveShadow!==ot.receiveShadow)&&(Qt.receiveShadow=ot.receiveShadow,se.setValue(X,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Tb()),Xi){if(se.setValue(X,"toneMappingExposure",G.toneMappingExposure),Qt.needsLights&&vu(mn,us),It&&st.fog===!0&&re.refreshFogUniforms(mn,It),re.refreshMaterialUniforms(mn,st,vt,_t,O.state.transmissionRenderTarget[C.id]),Qt.needsLights&&Qt.lightProbeGrid){let sn=Qt.lightProbeGrid;mn.probesSH.value=sn.texture,mn.probesMin.value.copy(sn.boundingBox.min),mn.probesMax.value.copy(sn.boundingBox.max),mn.probesResolution.value.copy(sn.resolution)}Aa.upload(X,Ua(Qt),mn,mt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Aa.upload(X,Ua(Qt),mn,mt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&se.setValue(X,"center",ot.center),se.setValue(X,"modelViewMatrix",ot.modelViewMatrix),se.setValue(X,"normalMatrix",ot.normalMatrix),se.setValue(X,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){let sn=st.uniformsGroups;for(let Si=0,Yn=sn.length;Si<Yn;Si++){let Mi=sn[Si];Et.update(Mi,ni),Et.bind(Mi,ni)}}return ni}function vu(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function vl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(C,H,nt){let st=K.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),K.get(C.texture).__webglTexture=H,K.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:nt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let nt=K.get(C);nt.__webglFramebuffer=H,nt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,nt=0){Tt=C,dt=H,ft=nt;let st=null,ot=!1,It=!1;if(C){let Rt=K.get(C);if(Rt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,Rt.__webglFramebuffer),Mt.copy(C.viewport),Xt.copy(C.scissor),jt=C.scissorTest,w.viewport(Mt),w.scissor(Xt),w.setScissorTest(jt),pt=-1;return}else if(Rt.__webglFramebuffer===void 0)mt.setupRenderTarget(C);else if(Rt.__hasExternalTextures)mt.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Kt=C.depthTexture;if(Rt.__boundDepthTexture!==Kt){if(Kt!==null&&K.has(Kt)&&(C.width!==Kt.image.width||C.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(C)}}let ut=C.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(It=!0);let Lt=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Lt[H])?st=Lt[H][nt]:st=Lt[H],ot=!0):C.samples>0&&mt.useMultisampledRTT(C)===!1?st=K.get(C).__webglMultisampledFramebuffer:Array.isArray(Lt)?st=Lt[nt]:st=Lt,Mt.copy(C.viewport),Xt.copy(C.scissor),jt=C.scissorTest}else Mt.copy(Zt).multiplyScalar(vt).floor(),Xt.copy(me).multiplyScalar(vt).floor(),jt=ne;if(nt!==0&&(st=lt),w.bindFramebuffer(X.FRAMEBUFFER,st)&&w.drawBuffers(C,st),w.viewport(Mt),w.scissor(Xt),w.setScissorTest(jt),ot){let Rt=K.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,nt)}else if(It){let Rt=H;for(let ut=0;ut<C.textures.length;ut++){let Lt=K.get(C.textures[ut]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ut,Lt.__webglTexture,nt,Rt)}}else if(C!==null&&nt!==0){let Rt=K.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Rt.__webglTexture,nt)}pt=-1};function yl(C){let H=K.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=D.textureFormatReadable(C.format),H.__typeReadable=D.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,nt,st,ot,It,Wt,Rt=0){if(!(C&&C.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Wt!==void 0&&(ut=ut[Wt]),ut){w.bindFramebuffer(X.FRAMEBUFFER,ut);try{let Lt=C.textures[Rt],Kt=Lt.format,De=Lt.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Rt);let te=yl(Lt);if(te.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-st&&nt>=0&&nt<=C.height-ot&&X.readPixels(H,nt,st,ot,zt.convert(Kt),zt.convert(De),It)}finally{let Lt=Tt!==null?K.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(C,H,nt,st,ot,It,Wt,Rt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Wt!==void 0&&(ut=ut[Wt]),ut)if(H>=0&&H<=C.width-st&&nt>=0&&nt<=C.height-ot){w.bindFramebuffer(X.FRAMEBUFFER,ut);let Lt=C.textures[Rt],Kt=Lt.format,De=Lt.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Rt);let te=yl(Lt);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ke),X.bufferData(X.PIXEL_PACK_BUFFER,It.byteLength,X.STREAM_READ),X.readPixels(H,nt,st,ot,zt.convert(Kt),zt.convert(De),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let pn=Tt!==null?K.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,pn);let Ye=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tg(X,Ye,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ke),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,It),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ke),X.deleteSync(Ye),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,nt=0){let st=Math.pow(2,-nt),ot=Math.floor(C.image.width*st),It=Math.floor(C.image.height*st),Wt=H!==null?H.x:0,Rt=H!==null?H.y:0;mt.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,nt,0,0,Wt,Rt,ot,It),w.unbindTexture()},this.copyTextureToTexture=function(C,H,nt=null,st=null,ot=0,It=0){let Wt,Rt,ut,Lt,Kt,De,te,ke,pn,Ye=C.isCompressedTexture?C.mipmaps[It]:C.image;if(nt!==null)Wt=nt.max.x-nt.min.x,Rt=nt.max.y-nt.min.y,ut=nt.isBox3?nt.max.z-nt.min.z:1,Lt=nt.min.x,Kt=nt.min.y,De=nt.isBox3?nt.min.z:0;else{let mn=Math.pow(2,-ot);Wt=Math.floor(Ye.width*mn),Rt=Math.floor(Ye.height*mn),C.isDataArrayTexture?ut=Ye.depth:C.isData3DTexture?ut=Math.floor(Ye.depth*mn):ut=1,Lt=0,Kt=0,De=0}st!==null?(te=st.x,ke=st.y,pn=st.z):(te=0,ke=0,pn=0);let Ze=zt.convert(H.format),hn=zt.convert(H.type),Qt;H.isData3DTexture?(mt.setTexture3D(H,0),Qt=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(mt.setTexture2DArray(H,0),Qt=X.TEXTURE_2D_ARRAY):(mt.setTexture2D(H,0),Qt=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let Fn=w.getParameter(X.UNPACK_ROW_LENGTH),$e=w.getParameter(X.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(X.UNPACK_SKIP_PIXELS),yi=w.getParameter(X.UNPACK_SKIP_ROWS),Xi=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Ye.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ye.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(X.UNPACK_SKIP_ROWS,Kt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,De);let us=C.isDataArrayTexture||C.isData3DTexture,se=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let mn=K.get(C),di=K.get(H),sn=K.get(mn.__renderTarget),Si=K.get(di.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,sn.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Yn=0;Yn<ut;Yn++)us&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(C).__webglTexture,ot,De+Yn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(H).__webglTexture,It,pn+Yn)),X.blitFramebuffer(Lt,Kt,Wt,Rt,te,ke,Wt,Rt,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||K.has(C)){let mn=K.get(C),di=K.get(H);w.bindFramebuffer(X.READ_FRAMEBUFFER,J),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Q);for(let sn=0;sn<ut;sn++)us?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,ot,De+sn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,ot),se?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,di.__webglTexture,It,pn+sn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,di.__webglTexture,It),ot!==0?X.blitFramebuffer(Lt,Kt,Wt,Rt,te,ke,Wt,Rt,X.COLOR_BUFFER_BIT,X.NEAREST):se?X.copyTexSubImage3D(Qt,It,te,ke,pn+sn,Lt,Kt,Wt,Rt):X.copyTexSubImage2D(Qt,It,te,ke,Lt,Kt,Wt,Rt);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else se?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Qt,It,te,ke,pn,Wt,Rt,ut,Ze,hn,Ye.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Qt,It,te,ke,pn,Wt,Rt,ut,Ze,Ye.data):X.texSubImage3D(Qt,It,te,ke,pn,Wt,Rt,ut,Ze,hn,Ye):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,It,te,ke,Wt,Rt,Ze,hn,Ye.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,It,te,ke,Ye.width,Ye.height,Ze,Ye.data):X.texSubImage2D(X.TEXTURE_2D,It,te,ke,Wt,Rt,Ze,hn,Ye);w.pixelStorei(X.UNPACK_ROW_LENGTH,Fn),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$e),w.pixelStorei(X.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(X.UNPACK_SKIP_ROWS,yi),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Xi),It===0&&H.generateMipmaps&&X.generateMipmap(Qt),w.unbindTexture()},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&mt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?mt.setTextureCube(C,0):C.isData3DTexture?mt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?mt.setTexture2DArray(C,0):mt.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){dt=0,ft=0,Tt=null,w.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),e.unpackColorSpace=ze._getUnpackColorSpace()}};var Bg=new Kn,tu=new Z,Wi=class extends Zo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new vn(t,3)),this.setAttribute("uv",new vn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new zs(e,6,1);return this.setAttribute("instanceStart",new $i(n,3,0)),this.setAttribute("instanceEnd",new $i(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new zs(e,6,1);return this.setAttribute("instanceColorStart",new $i(n,3,0)),this.setAttribute("instanceColorEnd",new $i(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Vo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Bg.setFromBufferAttribute(e),this.boundingBox.union(Bg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)tu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tu)),tu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ti.line={uniforms:ol.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var is=class extends Nn{constructor(t){super({type:"LineMaterial",uniforms:ol.clone(ti.line.uniforms),vertexShader:ti.line.vertexShader,fragmentShader:ti.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Sf=new en,kg=new Z,zg=new Z,Bn=new en,kn=new en,ss=new en,Mf=new Z,bf=new Ve,zn=new jo,$g=new Z,eu=new Kn,nu=new ci,rs=new en,as,wr;function Vg(i,t,e){return rs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),rs.multiplyScalar(1/rs.w),rs.x=wr/e.width,rs.y=wr/e.height,rs.applyMatrix4(i.projectionMatrixInverse),rs.multiplyScalar(1/rs.w),Math.abs(Math.max(rs.x,rs.y))}function Ab(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,c=a;l<c;l++){zn.start.fromBufferAttribute(s,l),zn.end.fromBufferAttribute(r,l),zn.applyMatrix4(e);let h=new Z,d=new Z;as.distanceSqToSegment(zn.start,zn.end,d,h),d.distanceTo(h)<wr*.5&&t.push({point:d,pointOnLine:h,distance:as.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Cb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,c=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),v=-t.near;as.at(1,ss),ss.w=1,ss.applyMatrix4(t.matrixWorldInverse),ss.applyMatrix4(n),ss.multiplyScalar(1/ss.w),ss.x*=r.x/2,ss.y*=r.y/2,ss.z=0,Mf.copy(ss),bf.multiplyMatrices(t.matrixWorldInverse,a);for(let p=0,y=d;p<y;p++){if(Bn.fromBufferAttribute(c,p),kn.fromBufferAttribute(h,p),Bn.w=1,kn.w=1,Bn.applyMatrix4(bf),kn.applyMatrix4(bf),Bn.z>v&&kn.z>v)continue;if(Bn.z>v){let k=Bn.z-kn.z,R=(Bn.z-v)/k;Bn.lerp(kn,R)}else if(kn.z>v){let k=kn.z-Bn.z,R=(kn.z-v)/k;kn.lerp(Bn,R)}Bn.applyMatrix4(n),kn.applyMatrix4(n),Bn.multiplyScalar(1/Bn.w),kn.multiplyScalar(1/kn.w),Bn.x*=r.x/2,Bn.y*=r.y/2,kn.x*=r.x/2,kn.y*=r.y/2,zn.start.copy(Bn),zn.start.z=0,zn.end.copy(kn),zn.end.z=0;let I=zn.closestPointToPointParameter(Mf,!0);zn.at(I,$g);let x=Qd.lerp(Bn.z,kn.z,I),g=x>=-1&&x<=1,B=Mf.distanceTo($g)<wr*.5;if(g&&B){zn.start.fromBufferAttribute(c,p),zn.end.fromBufferAttribute(h,p),zn.start.applyMatrix4(a),zn.end.applyMatrix4(a);let k=new Z,R=new Z;as.distanceSqToSegment(zn.start,zn.end,R,k),e.push({point:R,pointOnLine:k,distance:as.origin.distanceTo(R),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}var Er=class extends Dn{constructor(t=new Wi,e=new is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,c=e.count;a<c;a++,l+=2)kg.fromBufferAttribute(e,a),zg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+kg.distanceTo(zg);let r=new zs(s,2,1);return t.setAttribute("instanceDistanceStart",new $i(r,1,0)),t.setAttribute("instanceDistanceEnd",new $i(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;as=t.ray;let a=this.matrixWorld,l=this.geometry,c=this.material;wr=c.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),nu.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=wr*.5;else{let v=Math.max(s.near,nu.distanceToPoint(as.origin));h=Vg(s,v,c.resolution)}if(nu.radius+=h,as.intersectsSphere(nu)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),eu.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=wr*.5;else{let v=Math.max(s.near,eu.distanceToPoint(as.origin));d=Vg(s,v,c.resolution)}eu.expandByScalar(d),as.intersectsBox(eu)!==!1&&(n?Ab(this,e):Cb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Sf),this.material.uniforms.resolution.value.set(Sf.z,Sf.w))}};var iu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),os=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Hg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:c,CY:h,mcs:d,q:v,list:p,clamp:y,norm:M,munis:I}=i,x=o=>document.querySelector(o),g=o=>String(o).replace(/[<>&"]/g,u=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[u]),B=(o,u)=>[(o-c)*l,(u-h)*l],k=.06,R=t.segs.map(o=>{let u=[],f=[0];for(let _=0;_<o.length;_+=2){let S=B(o[_],o[_+1]);u.length&&f.push(f[f.length-1]+Math.hypot(S[0]-u[u.length-1][0],S[1]-u[u.length-1][1])),u.push(S)}return{p:u,c:f,L:f[f.length-1]}}),E=t.stops.map(([o,u,f,_])=>({n:o,id:_,w:B(u,f),fams:new Set})),O=t.routes.map(([o,u,f])=>({s:o,l:u,c:f})),W=new Map;(t.bus||[]).forEach(([o,u,f,_])=>{let S={days:new Set(o),name:u,stops:f,times:_};f.forEach((b,L)=>{if(L<f.length-1){let N=W.get(b)||[];N.push([S,L]),W.set(b,N)}})});function A(o,u,f){let _=ne(),S=t.days.indexOf(_.ymd),b=[];for(let[L,N]of W.get(o)||[]){if(!L.days.has(S))continue;let P=L.times[N];if(P<u||P>f)continue;let z=L.stops[L.stops.length-1];b.push({sm:P,est:P,dl:0,fam:L.name,dest:E[z].n,destId:E[z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:L.stops.slice(N)})}return b}let F=(o,u)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),_=u.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(_[1]||"")||(+f[2]||0)-(+_[2]||0)||f[3].localeCompare(_[3])},G=[...new Set(O.map(o=>o.s))].sort(F),Y={};O.forEach(o=>{Y[o.s]||(Y[o.s]=o.c)});let at=t.pats.map(([o,u,f])=>({stops:o,t:u,segs:f})),lt=t.trips.map(([o,u,f,_,S],b)=>({day:o,pat:at[u],fam:O[f].s,c:O[f].c,t0:_,num:S,tid:t.tids[b]})),J={};G.forEach(o=>J[o]=new Set),lt.forEach(o=>{o.pat.segs.forEach(u=>J[o.fam].add(u)),o.pat.stops.forEach(u=>E[u].fams.add(o.fam))});let Q=t.days.map((o,u)=>lt.filter(f=>f.day===u)),dt=new Map(lt.map(o=>[o.tid,o])),ft=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,pt=3.922*Tt,wt=-39.705*Tt;function Mt(o,u){let f=o*Tt+pt,_=u*Tt,S=Math.cos(wt),b=Math.sin(wt),L=Math.cos(_),N=Math.cos(f)*L,P=Math.sin(f)*L,z=Math.sin(_),q=Math.atan2(P,N*S-z*b),m=Math.asin(z*S+N*b),T=Math.sqrt(2/(1+Math.cos(q)*Math.cos(m))),U=T*Math.cos(m)*Math.sin(q),$=T*Math.sin(m),[ct,bt,ht,yt,it,ce,xe]=ft;return B((bt+ct*U-it)*xe,(ce-(yt-ht*$))*xe)}let Xt=new Map(E.map((o,u)=>[o.id,u]));function jt(o){if(o.g)return o.g;let u=[],f=[],_=[0],S=0;return o.segs.forEach((b,L)=>{let N=R[b];N.p.forEach((P,z)=>{L&&!z||(u.push(P),f.push(S+N.c[z]))}),S+=N.L,_.push(S)}),o.g={pts:u,cum:f,stopD:_}}function He(o,u,f,_){let S=1e18,b=0;for(let L=0;L+1<o.pts.length;L++){if(o.cum[L+1]<f||o.cum[L]>_)continue;let N=o.pts[L],P=o.pts[L+1],z=P[0]-N[0],q=P[1]-N[1],m=z*z+q*q||1e-9,T=Math.max(0,Math.min(1,((u[0]-N[0])*z+(u[1]-N[1])*q)/m)),U=N[0]+z*T-u[0],$=N[1]+q*T-u[1],ct=U*U+$*$;ct<S&&(S=ct,b=o.cum[L]+T*(o.cum[L+1]-o.cum[L]))}return{d:b,err:Math.sqrt(S)}}function Ie(o,u){let f=0,_=o.cum.length-1;if(u<=0)return o.pts[0];if(u>=o.cum[_])return o.pts[_];for(;_-f>1;){let N=f+_>>1;o.cum[N]<=u?f=N:_=N}let S=(u-o.cum[f])/(o.cum[_]-o.cum[f]||1),b=o.pts[f],L=o.pts[_];return[b[0]+(L[0]-b[0])*S,b[1]+(L[1]-b[1])*S]}let Be=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let u={};return _t.formatToParts(o).forEach(f=>u[f.type]=f.value),{ymd:u.year+u.month+u.day,min:+u.hour*60+ +u.minute+ +u.second/60}}let Pt=0,oe=null,Zt=0,me=0;function ne(){let o=vt(new Date);if(Pt===0&&oe==null)return{...o,live:!0};let u=oe==null?o.min:Zt+(Pt?(performance.now()-me)/6e4*Pt:0);return{ymd:o.ymd,min:u,live:!1}}let et=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),At="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let u=localStorage.getItem("rod_rt");u&&/jhmuyo\.workers\.dev/.test(u)&&(u=At,localStorage.setItem("rod_rt",u)),V.url=u||At}catch{V.url=At}let Ct=(o,u)=>fetch(o+u,{cache:"no-store"}).then(f=>{if(!f.ok)throw new Error("HTTP "+f.status);return f.json()}),Bt=o=>/^51/.test(o||"");async function de(){if(!V.url){we();return}let o=V.url.replace(/\/+$/,"");(!V.repFail||Date.now()-V.repFail>15*6e4)&&Ct(o,"/reports.json").then(P=>{P&&Array.isArray(P.items)?(V.rep=P.items,V.repSkew=(P.now||Date.now())-Date.now(),P.tipos&&(V.tipos=P.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0});let u=!V.adifAt||Date.now()-V.adifAt>11e4,[f,_,S,b,L]=await Promise.allSettled([Ct(o,"/trip_updates.json"),Ct(o,"/vehicle_positions.json"),Ct(o,"/alerts.json"),Ct(o,"/notices.json"),u?Ct(o,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?(V.adif=L.value,V.adifAt=Date.now()):u&&(V.adifAt=Date.now()-6e4),f.status==="fulfilled"){let P=new Map,z=new Map;for(let q of f.value.entity||[]){let m=q.tripUpdate;if(!m||!m.trip||!Bt(m.trip.tripId))continue;let T=m.trip.tripId,U=(m.stopTimeUpdate||[])[0],$=m.delay;$==null&&U&&($=(U.arrival||U.departure||{}).delay),m.trip.scheduleRelationship==="CANCELED"&&($="X"),$!=null&&P.set(T,$),z.set(T,{next:U?{sid:U.stopId,t:+((U.arrival||U.departure||{}).time||0)}:null})}V.delays=P,V.tu=z,V.ok=Date.now(),V.feedTs=+((f.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=f.reason&&f.reason.message||__t(0);if(_.status==="fulfilled"){let P=new Map,z=Date.now()/1e3;for(let q of _.value.entity||[]){let m=q.vehicle;if(!m||!m.trip||!Bt(m.trip.tripId)||!m.position)continue;let T=m.vehicle&&m.vehicle.label||"",U=T.match(/PLATF\.\(([^)]+)\)/),$=V.vp.get(m.trip.tripId),ct={tid:m.trip.tripId,w:Mt(+m.position.longitude,+m.position.latitude),st:m.currentStatus||"",sid:m.stopId||"",ts:+m.timestamp||z,label:T,plat:U?U[1]:"",fam:(T.split("-")[0]||"").trim(),num:m.vehicle&&m.vehicle.id||""};ct.disp=$?$.disp:null,P.set(ct.tid,ct)}V.vp=P,V.okVP=Date.now()}let N=[];if(b.status==="fulfilled"&&Array.isArray(b.value.included)){V.okNotices=Date.now();for(let P of b.value.included){let z=new Set((P.lines||[]).map($=>$.id).filter($=>Y[$])),q=($,ct)=>{$=$||{},ct=ct||window.__L;let bt=$[ct];return ct==="en"&&bt&&(bt===$.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(bt))&&(bt=""),(bt||$.es||$.ca||"").trim()},m=$=>[q(P.description,$),q(P.title,$)].sort((ct,bt)=>bt.length-ct.length)[0],T=m(),U=m("es");T&&N.push({id:"N"+P.externalId,fams:z,stops:new Set,txt:T,es:U,when:(P.date||"")+"T"+(P.time||""),src:"Rodalies",core:P.core||""})}}if(S.status==="fulfilled"){let P=+((S.value.header||{}).timestamp||0);if(V.alertsTs=P,Date.now()/1e3-P<6*3600)for(let z of S.value.entity||[]){let q=z.alert;if(!q)continue;let m=new Set,T=new Set;for(let bt of q.informedEntity||[])(bt.routeId||"").startsWith("51")&&m.add(bt.routeId.replace(/^51T\d+/,"")),bt.stopId&&Xt.has(bt.stopId)&&T.add(Xt.get(bt.stopId));if(!m.size&&!T.size)continue;let U=(q.descriptionText||q.headerText||{translation:[]}).translation||[],$=((U.find(bt=>bt.language==="es")||U[0]||{}).text||"").trim(),ct=+((q.activePeriod||[])[0]||{}).start||0;N.some(bt=>bt.txt===$)||N.push({id:z.id,fams:m,stops:T,txt:$,when:ct?new Date(ct*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[P,z]of(V.adif.items||[]).entries()){let q=(z.t?z.t+". ":"")+z.txt,m=new Set,T=new Set,U=M(q);for(let $ of q.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))Y[$[1]]&&m.add($[1]);E.forEach(($,ct)=>{$.fams.size&&$.n.length>4&&U.includes(M($.n))&&(T.add(ct),m.size||$.fams.forEach(bt=>m.add(bt)))}),N.some($=>$.txt===q)||N.push({id:"A"+P,fams:m,stops:T,txt:q,when:V.adif.upd||"",src:"Adif",lvl:z.lvl})}if(b.status==="fulfilled"||S.status==="fulfilled"){V.alerts=N.sort((P,z)=>z.when>P.when?1:-1);try{z0()}catch{}}we(),wu(),Wt=0,a()}let he=()=>V.okVP&&Date.now()-V.okVP<10*6e4,ue=()=>V.okVP&&Date.now()-V.okVP<9e4,Se={at:0,v:!1},X=()=>{if(!he()||V.vp.size>0)return!1;if(Date.now()-Se.at>3e4){Se.at=Date.now();let o=vt(new Date),u=t.days.indexOf(o.ymd),f=0;if(u>=0)for(let _ of Q[u]){let S=o.min-_.t0;S>_.pat.t[1]+2&&S<_.pat.t[_.pat.t.length-2]-2&&f++}Se.v=f>=6}return Se.v},Ce=()=>he()&&!X();function we(){let o=x("#rtst"),u=x("#mode");if(u){let _=[...K].filter(N=>{qa("");let P=Li.m.get(N);return P&&P[0]>=2}),S=Xa(_),b=!!Ce()&&ne().live&&!(_.length&&S.length===_.length);u.classList.toggle("on",b&&ue()),u.classList.toggle("pre",!(b&&ue())),u.textContent=b&&!ue()?__t(1):b?__t(2):D.cur?__t(3):__t(4),u.classList.toggle("past",!!D.cur);let L=x("#rcgrab");if(L){let N=L.querySelector(".rdot");N||(N=document.createElement("b"),N.className="rdot",L.insertBefore(N,L.firstChild)),N.className="rdot "+(D.cur?"past":b&&ue()?"on":"pre"),N.title=u.textContent}u.title=D.cur?`${__t(5)}${D.cur.sn.t}${__t(6)}`:""}if(!o)return;V.url?V.err?o.textContent=__t(8)+V.err+__t(9):Ce()?o.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:X()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=V.err||__t(7);let f=x("#rturl");f&&f._shown!==V.url&&(f.value=V.url,f._shown=V.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){V.err=__t(15),we();return}V.url=o;try{localStorage.setItem("rod_rt",o)}catch{}V.ok=0,V.err="",we(),de()},x("#rtoff").onclick=()=>{V.url=At;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()},setInterval(de,2e4),setTimeout(de,50);let D={snap:null,key:""};function w(){let o=ne();if(o.live||!se.hoy||!se.hoy.snaps||Pt&&oe==null)return null;let u=vt(new Date).min;if(o.min>u+1)return null;let f=null;for(let _ of se.hoy.snaps){if(!_.d)continue;let S=ep(_.t);S<=o.min+1&&(!f||S>f.m)&&(f={m:S,sn:_})}return f&&o.min-f.m<=25?f:null}let tt=o=>{{let S=yu(o.num);if(S&&S.cx&&ne().live)return"X"}let u=D.cur;if(u){if(u.sn.x&&u.sn.x.includes(o.tid))return"X";let S=u.sn.d[o.tid];return S??0}if(!Ce())return null;let f=V.delays.get(o.tid),_=V.vp.get(o.tid);return f==="X"?f:_&&_.pre&&_.preDl>=1?Math.max(typeof f=="number"?f:0,_.preDl*60):f??null},K=new Set(G);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(u=>G.includes(u))&&(K.clear(),o.forEach(u=>G.includes(u)&&K.add(u)))}catch{}let mt=new Wi,Ut=new Wi,Ot=new is({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),gt=new is({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),St=new Er(mt,Ot),kt=new Er(Ut,gt);kt.renderOrder=20,St.renderOrder=21,St.frustumCulled=kt.frustumCulled=!1,e.add(kt,St);function re(o){let u=o[0]/l+c,f=o[1]/l+h;for(let _ of I){if(_._bb===void 0){let b=1e9,L=1e9,N=-1e9,P=-1e9;for(let z of _.rings||[]){let q=z[0]||[];for(let m=0;m<q.length;m+=2)q[m]<b&&(b=q[m]),q[m]>N&&(N=q[m]),q[m+1]<L&&(L=q[m+1]),q[m+1]>P&&(P=q[m+1])}_._bb=[b,L,N,P]}let S=_._bb;if(!(u<S[0]||u>S[2]||f<S[1]||f>S[3]))for(let b of _.rings||[]){let L=b[0]||[],N=!1;for(let P=0,z=L.length,q=z-2;P<z;q=P,P+=2){let m=L[P+1],T=L[q+1];m>f!=T>f&&u<(L[q]-L[P])*(f-m)/(T-m)+L[P]&&(N=!N)}if(N)return!0}}return!1}let qt=!1;function Gt(){qt||!I.length||(qt=!0,E.forEach(o=>{o.ext=!re(o.w)}),R.forEach(o=>{o.ext=!re(o.p[0])&&!re(o.p[o.p.length-1])&&!re(o.p[o.p.length>>1])}))}let ae=()=>{let o=new Set(K.size<=2?K:[]);try{ut&&ut.fam&&o.add(ut.fam)}catch{}return o},ge="";function Me(){Gt();let o=[],u=[],f=new Set,_=new _e,S=new _e("#d2d0d0"),b=ae();ge=[...b].join();for(let q of G)if(K.has(q))for(let m of J[q]){if(f.has(m))continue;f.add(m);let T=R[m].p;_.set(Y[q]),R[m].ext&&!b.has(q)&&_.lerp(S,.55);for(let U=0;U+1<T.length;U++)o.push(T[U][0],T[U][1],k,T[U+1][0],T[U+1][1],k),u.push(_.r,_.g,_.b,_.r,_.g,_.b)}o.length||(o.push(0,0,-50,0,0,-50),u.push(0,0,0,0,0,0));let L=new Wi,N=new Wi;L.setPositions(o),L.setColors(u),N.setPositions(o);let P=St.geometry,z=kt.geometry;St.geometry=L,kt.geometry=N,P&&P.dispose(),z&&z.dispose(),a()}Me();let j=o=>new Nn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new _e(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ft=new yn,xt=E.length,zt=new Float32Array(xt*3),Jt=new Float32Array(xt*3),Et=new Float32Array(xt),le=new Float32Array(xt);E.forEach((o,u)=>{zt[u*3]=o.w[0],zt[u*3+1]=o.w[1],zt[u*3+2]=k,Jt.set([1,1,1],u*3),Et[u]=6,le[u]=1.6}),Ft.setAttribute("position",new rn(zt,3)),Ft.setAttribute("fill",new rn(Jt,3)),Ft.setAttribute("size",new rn(Et,1)),Ft.setAttribute("bw",new rn(le,1));let ie=j("#1d2330"),je=new _r(Ft,ie);je.renderOrder=22,je.frustumCulled=!1,e.add(je);function Ee(){let o=r.dist<45,u=ae();E.forEach((f,_)=>{let S=[...f.fams].some(L=>K.has(L)),b=f.ext&&![...f.fams].some(L=>u.has(L))&&_!==Lt;Et[_]=S?_===Lt?13:b?3:o?8:5:0,le[_]=_===Lt?3:1.6}),Ft.attributes.size.needsUpdate=!0,Ft.attributes.bw.needsUpdate=!0}let xn=600,bn=new yn,Pr=new Float32Array(xn*3),Lr=new Float32Array(xn*3),Dr=new Float32Array(xn),Nr=new Float32Array(xn);bn.setAttribute("position",new rn(Pr,3)),bn.setAttribute("fill",new rn(Lr,3)),bn.setAttribute("size",new rn(Dr,1)),bn.setAttribute("bw",new rn(Nr,1));let Ys=new Float32Array(xn);bn.setAttribute("ang",new rn(Ys,1));let xl=new Nn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new _e("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ur=new _r(bn,xl);Ur.renderOrder=24,Ur.frustumCulled=!1,e.add(Ur);let qn=new yn,As=new Float32Array(xn*3),Da=new Float32Array(xn*3),Na=new Float32Array(xn),Zs=new Float32Array(xn);qn.setAttribute("position",new rn(As,3)),qn.setAttribute("fill",new rn(Da,3)),qn.setAttribute("size",new rn(Na,1)),qn.setAttribute("bw",new rn(Zs,1));let Fr=new _r(qn,j("#ffffff"));Fr.renderOrder=23,Fr.frustumCulled=!1,e.add(Fr);function Js(o,u){let f=R[o],_=u*f.L,S=0,b=f.c.length-1;for(;b-S>1;){let q=S+b>>1;f.c[q]<=_?S=q:b=q}let L=f.c[b]-f.c[S]||1,N=(_-f.c[S])/L,P=f.p[S],z=f.p[b];return[P[0]+(z[0]-P[0])*N,P[1]+(z[1]-P[1])*N]}let Ua=o=>o*o*(3-2*o)*.35+o*.65;function Cs(o,u){let f=o.pat.t,_=o.pat.stops.length,S=f[2*_-2];if(u<f[1]-2||u>S+1)return null;if(u<=f[1])return{w:E[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let b=0;b<_-1;b++){let L=f[2*b+1],N=f[2*b+2],P=f[2*b+3];if(u<=N){let z=N>L?(u-L)/(N-L):1;return{w:Js(o.pat.segs[b],Ua(y(z,0,1))),at:-1,next:b+1,prev:b,moving:!0}}if(u<=P)return{w:E[o.pat.stops[b+1]].w,at:b+1,next:b+1,moving:!1}}return{w:E[o.pat.stops[_-1]].w,at:_-1,next:_-1,moving:!1}}function js(o){let u=t.days.indexOf(o.ymd),f=[];if(u<0)return{k:u,out:f};let _=(S,b)=>{for(let L of S){if(!K.has(L.fam))continue;let N=tt(L);if(N==="X")continue;let P=(N||0)/60,z=o.min+b-L.t0-P;if(z<-2||z>L.pat.t[L.pat.t.length-2]+1)continue;let q=Cs(L,z);q&&f.push({tr:L,p:q,rel:z,dl:P,live:N!=null})}};return _(Q[u],0),u>0&&_(Q[u-1],1440),{k:u,out:f}}function xu(o,u,f,_){let S=o.pat.stops[0],b=u.dep0,L=null,N=(z,q)=>{for(let m of z||[]){let T=m.pat.stops,U=T.length;if(T[U-1]!==S||m===o)continue;let $=m.t0+m.pat.t[2*(U-1)]-q;if($>b+5||$<b-120)continue;let ct=jt(m.pat),bt=He(ct,u.w,-1,1e9);if(bt.err>.6)continue;let ht=ct.stopD,yt=m.pat.t,it=ht.findIndex(Vt=>Vt>bt.d);it<0&&(it=U-1);let ce=it===0?yt[1]:yt[2*it-1]+(ht[it]>ht[it-1]?(bt.d-ht[it-1])/(ht[it]-ht[it-1]):1)*(yt[2*it]-yt[2*it-1]),xe=f-(m.t0+ce-q);xe<-5||xe>120||(!L||Math.abs(xe)<Math.abs(L.prevDl))&&(L={prevTr:m,dPrev:bt.d,prevDl:xe,arrO:$+Math.max(0,xe)})}};if(N(Q[_],0),_>0&&N(Q[_-1],1440),!L)return{prevTr:null,preDl:0};let P=Math.max(b,L.arrO+3);return{...L,depEst:P,preDl:Math.max(0,P-b)}}function vu(o,u,f){let _=o.pat.t,S=u.length;if(!(f>=0))return f<0?u[0]:null;for(let b=0;b<S;b++)if(f<=_[2*b+1]){if(f>=_[2*b]||b===0)return u[b];let L=_[2*b-1],N=_[2*b];return u[b-1]+(u[b]-u[b-1])*(N>L?(f-L)/(N-L):1)}return u[S-1]}let vl=performance.now();function yl(){let o=[],u=Date.now()/1e3,f=performance.now(),_=Math.min(1,(f-vl)/1e3);vl=f;for(let S of V.vp.values()){let b=dt.get(S.tid),L=b?b.fam:S.fam;if(L&&Y[L]&&!K.has(L))continue;let N=V.delays.get(S.tid),P=typeof N=="number"?N/60:0,z=Math.max(0,u-S.ts);S.mvTs!==S.ts&&((!S.mvW||Math.hypot(S.w[0]-S.mvW[0],S.w[1]-S.mvW[1])>.025)&&(S.mvW=S.w,S.mvAt=S.ts),S.mvTs=S.ts),S.still=S.ts-(S.mvAt||S.ts);let q=S.w,m=-1;if(b){let U=jt(b.pat),$=U.stopD;if(S.dObs==null||S.obsAt!==S.ts){let it=He(U,S.w,-1,1e9);S.dObs=it.d,S.err=it.err,S.obsAt=S.ts}let ct=ne(),bt=t.days.indexOf(ct.ymd),ht=b.day===bt-1?1440:0,yt=b.t0+b.pat.t[1]-ht;if(S.pre=ct.min+P<yt-1&&(S.dObs>$[0]+.35||S.err>.6)&&!(S.st==="STOPPED_AT"&&S.sid===E[b.pat.stops[0]].id),S.dep0=yt,S.pre){if(S.atStop=-1,S.next=0,m=0,S.disp=null,S.prevAt!==S.ts&&(S.prevAt=S.ts,Object.assign(S,xu(b,S,ct.min,bt))),S.prevTr){let it=jt(S.prevTr.pat);q=Ie(it,S.dPrev)}}else if(!ue()&&b){let it=ne(),ce=t.days.indexOf(it.ymd),xe=b.day===ce-1?1440:0,Vt=Cs(b,it.min+xe-b.t0-P);Vt?(q=Vt.w,S.est=!0,m=Vt.next,S.atStop=Vt.moving?-1:Vt.at,S.next=Vt.next,S.before=!1):(S.atStop=-1,S.next=-1)}else if(S.err<=.6){let it=$.findIndex(Vt=>Vt>S.dObs+.08);it<0&&(it=$.length-1);let ce=$.reduce((Vt,Ge,Te)=>Math.abs(Ge-S.dObs)<Math.abs($[Vt]-S.dObs)?Te:Vt,0);S.atStop=Math.abs($[ce]-S.dObs)<.16?ce:-1;{let Vt=S.st==="STOPPED_AT"&&S.sid?b.pat.stops.findIndex(Ge=>E[Ge].id===S.sid):-1;Vt>=0&&Math.abs($[Vt]-S.dObs)<.6&&(S.atStop=Vt,it<=Vt&&(it=Math.min(Vt+1,$.length-1)))}S.before=S.atStop>=0&&S.dObs<$[S.atStop]-.15,S.next=it,m=it;let xe=S.dObs;if(S.st==="STOPPED_AT"&&S.atStop>=0)xe=$[S.atStop];else if(it>0){let Vt=(b.pat.t[2*it]-b.pat.t[2*it-1])*60,Ge=Vt>0?($[it]-$[it-1])/Vt:0,Te=ne(),fe=t.days.indexOf(Te.ymd),dn=b.day===fe-1?1440:0,Ne=vu(b,$,Te.min+dn-b.t0-P),fi=S.dObs+Ge*Math.min(z,60);Ne!=null&&(fi=Math.min(fi,Math.max(S.dObs,Ne))),xe=Math.max(S.dObs,Math.min($[it]-.03,fi))}S.disp==null||Math.abs(S.disp-xe)>1.2?S.disp=xe:xe>S.disp&&(S.disp+=(xe-S.disp)*Math.min(1,_*1.5)),q=Ie(U,S.disp)}else if(S.err>2){let it=ne(),ce=t.days.indexOf(it.ymd),xe=b.day===ce-1?1440:0,Vt=Cs(b,it.min+xe-b.t0-P);Vt&&(q=Vt.w,S.est=!0,m=Vt.next),S.atStop=-1,S.next=Vt?Vt.next:-1}else S.atStop=-1,S.next=-1}let T=S.pre?"":S.st==="STOPPED_AT"&&S.atStop>=0||S.atStop>=0&&S.still>30?"st":S.still>=90&&S.atStop<0?"via":"";o.push({tr:b,v:S,w:q,stop:T,p:{w:q},fam:L||"?",c:b?b.c:Y[L]||"#6b7385",dl:P,live:!0,real:!0,idx:m,age:z,cancel:N==="X"})}return o}let C=new Map,H=!1,nt=!1,st="",ot={st:-1},It=[],Wt=0,Rt=null,ut=null,Lt=-1,Kt=!1,De=0,te="";function ke(o){let u=Pt>0||Ce()&&oe==null||!!ut,f=window.__mapHidden?1e3:u?50:250;if(o-Wt<f)return!1;Wt=o,[...ae()].join()!==ge&&(Me(),Ee());{let m=w(),T=m?m.sn.t:"";D.cur=m,T!==D.key&&(D.key=T,we()),!m&&!ne().live&&!se.at&&di()}let _=ne(),S=Ce()&&_.live,b=S?{k:t.days.indexOf(_.ymd),out:yl()}:js(_);It=b.out;let L=new _e,N=0,P=0;for(let m of It){if(N>=xn)break;Pr[N*3]=m.p.w[0],Pr[N*3+1]=m.p.w[1],Pr[N*3+2]=k+.02;let T=null;if(m.real&&m.v.pre&&m.v.prevTr)T=Ie(jt(m.v.prevTr.pat),m.v.dPrev+.35);else if(m.real&&m.tr&&!m.v.pre&&m.v.err<=.6&&m.v.disp!=null&&!(m.v.st==="STOPPED_AT"&&m.v.atStop>=0))T=Ie(jt(m.tr.pat),m.v.disp+.35);else if(!m.real&&m.p.moving){let ht=m.tr.pat.t,yt=m.p.prev,it=ht[2*yt+1],ce=ht[2*yt+2],xe=ce>it?(m.rel-it)/(ce-it):1;T=Js(m.tr.pat.segs[yt],Math.min(1,Ua(y(xe,0,1))+.04))}let U=m.real?!!m.stop:!m.p.moving;if(m.broke=qf(m),m.broke)Ys[N]=85;else if(U)Ys[N]=75;else if(T){let ht=Sl(m.p.w),yt=Sl(T),it=yt[0]-ht[0],ce=yt[1]-ht[1];Ys[N]=Math.hypot(it,ce)>.05?Math.atan2(it,-ce):99}else Ys[N]=99;L.set(m.c||m.tr.c),Lr[N*3]=L.r,Lr[N*3+1]=L.g,Lr[N*3+2]=L.b;let $=m.tr?m.tr===ut:ut&&ut.vtid===m.v.tid;Dr[N]=$?22:r.dist<45?17:14,Nr[N]=$?3.5:2.2;let ct=m.real&&m.stop==="via"||!!m.broke,bt=m.cancel||m.broke?[.86,.15,.15]:m.dl>10?[.86,.15,.15]:m.dl>5?[.92,.48,.05]:m.dl>=1?[.98,.8,.08]:[.09,.64,.29];(m.live&&m.dl>=5||$||ct)&&(As[P*3]=m.p.w[0],As[P*3+1]=m.p.w[1],As[P*3+2]=k+.01,Da.set($?bt:ct?[.86,.15,.15]:[.98,.45,.09],P*3),Na[P]=Dr[N]+($?16+5*Math.sin(o/220):ct?10+3*Math.sin(o/400):8),Zs[P]=$?2:3,P++),N++}if(bn.setDrawRange(0,N),qn.setDrawRange(0,P),["position","fill","size","bw"].forEach(m=>{bn.attributes[m].needsUpdate=!0,qn.attributes[m].needsUpdate=!0}),bn.attributes.ang.needsUpdate=!0,Rt){let m=It.find(T=>T.tr===Rt);if(m){let T=0,U=innerHeight,$=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ct=x("#rc").getBoundingClientRect();innerWidth<=640&&($&&(T=$.bottom),U=Math.min(U,ct.top));let bt=T+(U-T)/2,ht=bt-innerHeight/2,yt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=m.p.w[0]-Math.sin(r.yaw)*ht*yt,s.ty=m.p.w[1]+Math.cos(r.yaw)*ht*yt}else Ce()&&ne().live&&(Rt=null)}let z=et(Math.floor(_.min+1e-6));z!==te&&(te=z,x("#ctime").textContent=z),x("#ntr").textContent=String(It.length),x("#ntrl").textContent=S?__t(16):__t(17);{let m=K.size<G.length?[...K].sort(F).join(", "):"",T=x("#ccount"),U=D.cur?`\u23EA ${It.length}${__t(18)}${D.cur.sn.t} \xB7 ${Object.values(D.cur.sn.d).filter($=>$>=60).length}${__t(19)}`:!_.live&&_.min<vt(new Date).min-1&&!Pt?`${__t(20)}${se.hoy&&se.hoy.snaps&&se.hoy.snaps.some($=>$.d)?`${__t(21)}${se.hoy.snaps.find($=>$.d).t}`:__t(22)}`:S&&!ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${os(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:S&&!It.some($=>$.real)&&Xa(K).length?`\u{1F4E1} ${__t(25)}${m?` <small>\xB7 ${g(m)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${It.length} ${S?__t(27):__t(28)}${m?` <small>\xB7 ${g(m)}</small>`:""}${S&&V.okVP?(()=>{let $=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${$<3?" new":""}">\u25CF ${__t(29)}${os($+" s")}</small>`})():""}`;T&&T._t!==U&&(T.innerHTML=U,T._t=U)}{let m=x("#p");m&&m.classList.toggle("ttf",!_.live||!!Pt)}let q=new Date;if(x("#cdate").textContent=_.live?__t(30):Pt?__t(31)+Pt:Ti?__t(32):__t(33),b.k<0?x("#src").innerHTML=`${__t(34)}${Be(t.days[0])}${__t(35)}${Be(t.days[t.days.length-1])}${__t(36)}`:S?x("#src").textContent=`${ue()?__t(37):__t(38)}${os(iu(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(m=>m.ts),0))))}`:X()&&_.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),_.live){let m=Math.round(_.min),T=x("#tsl");document.activeElement!==T&&(T.value=m<240?m+1440:m)}{let m=ut?String(ut.num||ut.vtid||""):"";m!==ke._sk&&(ke._sk=m,Le(!0))}return Le(),!ke._sp&&(S||!_.live||X()||!V.url)&&(ke._sp=1,window.__splashOff&&window.__splashOff()),o-De>3e3&&(ut||Lt>=0||Kt||nt||st)&&(De=o,Fe()),we(),!0}let pn=-1,Ye=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ze=[],hn=document.createElement("button");hn.type="button",hn.id="mbtn",hn.title=__t(44),hn.innerHTML=__t(45),hn.onclick=()=>{Ye=!Ye;try{localStorage.setItem("rod_mun",Ye?"1":"")}catch{}hn.classList.toggle("on",Ye),a(),us()},hn.classList.toggle("on",Ye),document.body.appendChild(hn);let Qt=I.slice().sort((o,u)=>u.pop-o.pop);function Fn(o){if(o._a)return o._a;let u=null,f=0;for(let _ of o.rings||[]){let S=_[0];if(!S)continue;let b=0,L=0,N=0;for(let P=0,z=S.length;P<z;P+=2){let q=S[P],m=S[P+1],T=S[(P+2)%z],U=S[(P+3)%z],$=q*U-T*m;b+=$,L+=(q+T)*$,N+=(m+U)*$}Math.abs(b)>f&&(f=Math.abs(b),u=[L/(3*b),N/(3*b)])}return o._a=u?[(u[0]-c)*l,(u[1]-h)*l]:[o.cx,o.cy]}let $e=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,ni=[0,7.6,6.7,6,5.4],yi=[0,17,15,13,12],Xi=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function us(){let o=s.tilt<.06&&r.tilt<.08;hn.classList.toggle("show",o);let u=0;if(Ye&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(b=>b.offsetParent!==null||b.style.display==="block").map(b=>{let L=b.getBoundingClientRect();return[L.left-2,L.top-2,L.right+2,L.bottom+2]}).filter(b=>b[2]>b[0]),_=r.dist,S=_>160?5e4:_>130?2e4:_>105?8e3:_>80?3e3:_>62?800:0;for(let b of Qt){let L=$e(b.pop);if(b.pop<S)break;let N=Fn(b);if(Sn.set(N[0],N[1],k).project(n),Math.abs(Sn.x)>1.02||Math.abs(Sn.y)>1.02)continue;let P=(Sn.x*.5+.5)*innerWidth,z=(-Sn.y*.5+.5)*innerHeight,q=Xi(b.name),m=q.length*ni[L]+8,T=yi[L],U=[P-m/2,z-T/2,P+m/2,z+T/2];if(f.some(ct=>U[0]<ct[2]&&ct[0]<U[2]&&U[1]<ct[3]&&ct[1]<U[3]))continue;f.push(U);let $=Ze[u]||(Ze[u]=Object.assign(document.createElement("div"),{className:"mlab"}));$.isConnected||document.body.appendChild($),$._n!==q&&($.textContent=q,$._n=q),$._t!==L&&($.className="mlab t"+L,$._t=L),$.style.transform=`translate(${Math.round(P)}px,${Math.round(z)}px) translate(-50%,-50%)`,$.style.display="block",u++}}for(;u<Ze.length;u++)Ze[u].style.display="none"}let se={at:0,hoy:null,ayer:null,err:""},mn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function di(){Date.now()-se.at<5*6e4||(se.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(mn+o+".json",{cache:"no-store"}).then(u=>u.ok?u.json():null).catch(()=>null))).then(([o,u,f])=>{se.hoy=o,se.ayer=u,se.hist=f,se.tr=null,se.err=o?"":__t(46),nt&&(d._h="",Fe()),Le(!0)}))}function sn(o){let u={};for(let _ of o&&o.snaps||[])for(let S of _.r||[]){let b=/^\d+[A-Z](\d+)/.exec(S);b&&(u[b[1]]=u[b[1]]||[]).push(Math.max(0,_.d&&_.d[S]||0)/60)}let f={};for(let _ in u){let S=u[_].sort((b,L)=>b-L);f[_]=Math.round(S[S.length>>1])}return f}function Si(o){if(!se.tr){let f=new Map;for(let _ of se.hist&&se.hist.days||[])f.set(_.day,_.tr);for(let _ of[se.ayer,se.hoy])if(_&&_.day&&!f.has(_.day)){let S=sn(_);Object.keys(S).length&&f.set(_.day,S)}se.tr=f}let u=[...se.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return u.length?{n:u.length,late:u.filter(f=>f>=5).length,avg:u.reduce((f,_)=>f+_,0)/u.length}:null}let Yn=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",Mi={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Vf=o=>o>10?Mi.b:o>5?Mi.w:o>=1?Mi.y:Mi.g,Ks=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Fa(o,u,f){return`<div class="sbars">${o.map(_=>`<div class="sbar" title="${g(_.tip||"")}"><span class="sl">${_.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(_.w*100))}%;background:${_.c}"></i></span><b class="sv" style="color:${_.c===Mi.y?"var(--svy,#a16207)":_.c===Mi.w?"var(--svw,#c2410c)":_.c}">${_.val}</b></div>`).join("")}</div>`}function p0(o){if(o=(o||[]).filter(ht=>ht.n>=10),!o||o.length<2){let ht=o&&o[0];return ht?`${__t(47)}${ht.t}: ${Math.round(ht.ok/ht.n*100)}${__t(48)}${ht.n}${__t(49)}`:__t(50)}let u=ht=>{let[yt,it]=ht.t.split(":").map(Number);return yt*60+it},f=u(o[0]),_=Math.max(f+60,u(o[o.length-1])),S=300,b=112,L=24,N=ht=>L+(ht-f)*(S-L-8)/(_-f),P=ht=>8+(100-ht)/100*(b-26),z=ht=>ht.n?ht.ok/ht.n*100:100,q=o.map(ht=>[N(u(ht)),P(z(ht)),ht]),m=ht=>ht[0].toFixed(1)+","+ht[1].toFixed(1),T=[],U=[];q.forEach((ht,yt)=>{yt&&u(ht[2])-u(q[yt-1][2])>45&&(T.push(U),U=[]),U.push(ht)}),T.push(U);let $=q[q.length-1],ct=[];for(let ht=Math.ceil(f/180)*3;ht*60<_;ht+=3)ht*60>f+20&&ct.push(ht);let bt=Math.round(o.reduce((ht,yt)=>ht+yt.ok,0)/Math.max(1,o.reduce((ht,yt)=>ht+yt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${S} ${b}${__t(51)}${[100,75,50,25].map(ht=>`<line x1="${L}" x2="${S-4}" y1="${P(ht)}" y2="${P(ht)}" class="gl"/><text x="2" y="${P(ht)+3}" class="ax">${ht}%</text>`).join("")}
      <line x1="${L}" x2="${S-4}" y1="${P(bt)}" y2="${P(bt)}" class="avg"/>
      ${T.filter(ht=>ht.length).map(ht=>`<polygon points="${m([ht[0][0],P(0)])} ${ht.map(m).join(" ")} ${m([ht[ht.length-1][0],P(0)])}" class="ar"/><polyline points="${ht.map(m).join(" ")}" class="ln"/>`).join("")}
      ${q.map(([ht,yt,it])=>`<circle cx="${ht.toFixed(1)}" cy="${yt.toFixed(1)}" r="6" class="hit"><title>${it.t} \xB7 ${Math.round(z(it))}${__t(52)}${it.n}${__t(53)}${it.d5}${__t(54)}${Ks(it.avg)}${it.nd?` \xB7 ${it.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${$[0].toFixed(1)}" cy="${$[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min($[0],S-30).toFixed(1)}" y="${($[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(z($[2]))}%</text>
      ${ct.map(ht=>`<text x="${N(ht*60).toFixed(1)}" y="${b-4}" class="ax" text-anchor="middle">${String(ht).padStart(2,"0")}h</text>`).join("")}
      <text x="${L}" y="${b-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${bt}%)</small>`}function m0(){di();let o=ne(),u=It.filter(N=>N.real&&Ce()&&o.live),f=u.filter(N=>V.delays.has(N.v.tid)),_=f.length,S=u.length-_,b=`${__t(57)}`;if(_){let N=f.filter(yt=>yt.dl<3).length,P=f.filter(yt=>yt.dl>=5).length,z=f.filter(yt=>yt.stop==="via").length,q=Math.round(N/_*100);b+=`${__t(58)}${_}${__t(59)}${S?` \xB7 ${S}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Yn(q)}"><b>${q}${__t(60)}${Yn(100-P/_*100*2)}" title="${Math.round(P/_*100)}${__t(61)}${P}${__t(62)}${z===0?"g":z<=2?"w":"b"}"><b>${z}${__t(63)}`;let m=new Map;f.forEach(yt=>{let it=yt.fam,ce=m.get(it)||{n:0,ok:0,sum:0};ce.n++,ce.ok+=yt.dl<3,ce.sum+=Math.max(0,yt.dl),m.set(it,ce)});let T=[...m].filter(([yt])=>Y[yt]).sort((yt,it)=>yt[1].ok/yt[1].n-it[1].ok/it[1].n||it[1].sum/it[1].n-yt[1].sum/yt[1].n),U=T.filter(([,yt])=>yt.ok<yt.n),$=T.filter(([,yt])=>yt.ok===yt.n);b+=`${__t(65)}`+(U.length?"":__t(66))+Fa(U.map(([yt,it])=>({lab:An(yt),w:it.ok/it.n,c:Mi[Yn(it.ok/it.n*100)],val:`${Math.round(it.ok/it.n*100)}% <small>${Ks(it.sum/it.n)}</small>`,tip:`${yt}: ${it.ok}${__t(67)}${it.n}${__t(68)}${Ks(it.sum/it.n)}`})))+($.length?`${__t(69)}${$.map(([yt])=>An(yt)).join(" ")}</p>`:"");let ct=new Map;f.forEach(yt=>{if(!yt.tr||yt.v.next==null||yt.v.next<0||yt.v.pre)return;let it=yt.tr.pat.stops[yt.v.next],ce=ct.get(it)||{n:0,sum:0};ce.n++,ce.sum+=Math.max(0,yt.dl),ct.set(it,ce)});let bt=[...ct].filter(([,yt])=>yt.sum/yt.n>=1).sort((yt,it)=>it[1].sum/it[1].n-yt[1].sum/yt[1].n).slice(0,8),ht=bt.length?bt[0][1].sum/bt[0][1].n:1;b+=`${__t(70)}`+(bt.length?Fa(bt.map(([yt,it])=>({lab:`<span class="sn" data-gs="${yt}">${g(E[yt].n)}</span>`,w:it.sum/it.n/ht,c:Vf(it.sum/it.n),val:`${Ks(it.sum/it.n)} <small>${it.n} ${it.n===1?"tren":__t(71)}</small>`,tip:`${E[yt].n}: ${it.n}${__t(72)}${Ks(it.sum/it.n)}${__t(73)}`}))):__t(74))}else b+=`${__t(75)}`;let L=se.hoy;b+=`<button type="button" class="hmore" data-cols>${un.on?__t(76):__t(77)}</button>`;{qa("");let N=[...Li.m].filter(([P,z])=>Y[P]&&z[0]>=3).map(([P,z])=>[P,z[1]/z[0]]).sort((P,z)=>P[1]-z[1]);N.length&&!Ce()?b+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:N.length&&(b+=`${__t(80)}`+Fa(N.slice(0,8).map(([P,z])=>({lab:An(P),w:z,c:Mi[Yn(z*100)],val:`${Math.round(z*100)}%`,tip:`${P}: ${Math.round(z*100)}${__t(81)}`}))))}{let N=(U,$)=>{let ct=(U&&U.snaps||[]).filter(yt=>yt.n&&(!$||yt.t<=$)),bt=ct.reduce((yt,it)=>yt+it.n,0),ht=ct.reduce((yt,it)=>yt+it.ok,0);return bt?ht/bt*100:null},P=(se.hoy&&se.hoy.snaps||[]).filter(U=>U.n).map(U=>U.t).pop(),z=N(se.hoy),q=N(se.ayer,P),m=z!=null?Math.round(z):null,T=q!=null?Math.round(q):null;z!=null&&(b+=`${__t(82)}${Yn(z)}">${Math.round(z)}${__t(83)}${q!=null?`<span>${P?__t(84):__t(85)} <b class="${Yn(q)}">${T} %</b></span><span>${m>T?__t(86):m<T?__t(87):__t(88)}</span>`:""}</div>`)}if(b+=`${__t(89)}`,L&&L.snaps){b+=p0(L.snaps);let N=Object.entries(L.st||{}).map(([q,m])=>[Xt.get(q),m]).filter(([q,m])=>q!=null&&m.n>=3).map(([q,m])=>[q,m.sum/m.n/60,m]).filter(q=>q[1]>=1).sort((q,m)=>m[1]-q[1]).slice(0,8);if(N.length){let q=N[0][1];b+=`${__t(90)}`+Fa(N.map(([m,T,U])=>({lab:`<span class="sn" data-gs="${m}">${g(E[m].n)}</span>`,w:T/q,c:Vf(T),val:`${Ks(T)}${__t(91)}${Math.round(U.max/60)}</small>`,tip:`${E[m].n}: ${U.n}${__t(92)}${U.d5}${__t(93)}${Math.round(U.max/60)} min`})))}let P=Object.entries(L.lines||{}).filter(([q,m])=>Y[q]&&m.n>=3).sort((q,m)=>q[1].ok/q[1].n-m[1].ok/m[1].n);P.length&&(b+=`${__t(94)}`+Fa(P.map(([q,m])=>({lab:An(q),w:m.ok/m.n,c:Mi[Yn(m.ok/m.n*100)],val:`${Math.round(m.ok/m.n*100)}% <small>${Ks(m.sum/m.n/60)}</small>`,tip:`${q}${__t(95)}${Math.round(m.ok/m.n*100)}${__t(96)}${Math.round(m.max/60)} min`}))));let z=L.upd?(Date.now()-Date.parse(L.upd))/6e4:0;b+=`<small class="snote">${z>40?`${__t(98)}${os(z<90?Math.round(z)+" min":z<2160?Math.round(z/60)+" h":Math.round(z/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${g((L.upd||"").slice(11,16))} \xB7 ${(L.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else b+=`<p class="snote">${se.at?__t(102):__t(103)}</p>`;return b+"</div>"}function g0(o){let u=ne(),f=It.filter(T=>(T.fam||T.tr&&T.tr.fam)===o),_=f.filter(T=>T.real),S=f.length,b=f.filter(T=>T.dl>=5).length,L=f.filter(T=>T.dl<3).length,N=f.filter(T=>T.stop==="via"||T.broke).length,P=V.alerts.filter(T=>T.fams.has(o)),z=T=>{let U=T.tr;if(!U)return"";let $=T.v;if(T.real&&$){let bt=$.next>=0?E[U.pat.stops[$.next]].n:"";return $.atStop>=0?`${__t(104)}${E[U.pat.stops[$.atStop]].n}`:bt?`${__t(105)}${bt}`:""}let ct=T.p;return ct&&ct.next!=null&&ct.next>=0?`${__t(105)}${E[U.pat.stops[ct.next]].n}`:""},q=f.slice().sort((T,U)=>U.dl-T.dl).slice(0,40).map(T=>{let U=T.tr;return`<li class="go${za({num:U?U.num:T.v.num,tid:U?U.tid:T.v.tid})?" sel":""}" data-gt="${g(U?U.num:T.v.num)}|${g(T.real?T.v.tid:U?U.tid:"")}"><b>${g(U?U.num:T.v.num)}</b><span>${U?wi(E[U.pat.stops[U.pat.stops.length-1]].n,o):""} <small>${g(z(T))}</small></span>${T.dl>=1?`<em class="dl ${Ii(T.dl)}">+${Math.round(T.dl)}</em>`:__t(106)}</li>`}).join(""),m=qa(o);return`<div class="tc sts" style="--c:${Y[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${An(o)}${__t(107)}${u.live?`${__t(113)}${S}${__t(114)}${_.length<S?` (${_.length}${__t(115)}`:""}`:`${__t(116)}${et(u.min)}`}</small>
      <div class="kpis"><div class="kpi ${S?Yn(L/S*100):""}"><b>${S?Math.round(L/S*100)+"%":"\u2014"}${__t(108)}${b?b/Math.max(1,S)>.2?"b":"w":"g"}"><b>${b}${__t(109)}${N?"b":"g"}"><b>${N}${__t(110)}${P.length?_0(P):__t(117)}${m<.7?`${__t(118)}${Math.round(m*100)}${__t(119)}`:""}${__t(111)}${q||__t(120)}${__t(112)}`}let _0=o=>`<div class="al">${o.slice(0,3).map(u=>`<p>\u26A0\uFE0F ${Va(u)} ${g(u.txt)} <small>${Ha(u)}</small></p>`).join("")}</div>`,un={on:!1,mesh:null};function Hf(){let o=se.hoy,u=[];if(o&&o.st)for(let[f,_]of Object.entries(o.st)){let S=Xt.get(f);S!=null&&_.n>=2&&u.push([S,_.sum/_.n/60,_.n])}if(!u.length){let f=new Map;It.forEach(_=>{if(!_.real||!_.tr||_.v.next==null||_.v.next<0||_.v.pre||!V.delays.has(_.v.tid))return;let S=_.tr.pat.stops[_.v.next],b=f.get(S)||[0,0];b[0]+=Math.max(0,_.dl),b[1]++,f.set(S,b)}),f.forEach((_,S)=>u.push([S,_[0]/_[1],_[1]]))}return u}let Gf=()=>Math.min(1,Math.max(.22,r.dist/110));function x0(){if(!un.mesh||!un.d)return;let o=Gf();if(Math.abs(o-un.r)<.04)return;un.r=o;let u=new Ve;un.d.forEach(([f,_],S)=>{u.makeScale(o,o,.3+Math.min(_,40)*.3),u.setPosition(E[f].w[0],E[f].w[1],k),un.mesh.setMatrixAt(S,u)}),un.mesh.instanceMatrix.needsUpdate=!0,a()}function v0(){if(un.mesh&&(e.remove(un.mesh),un.mesh.geometry.dispose(),un.mesh.material.dispose(),un.mesh=null),!un.on){a();return}let o=Hf();if(!o.length){ln(__t(121)),un.on=!1;return}let u=new Lo(.32,.32,1,16);u.rotateX(Math.PI/2),u.translate(0,0,.5);let f=new mr({fog:!1}),_=new Co(u,f,o.length),S=new Ve,b=new _e;un.d=o,un.r=Gf(),o.forEach(([L,N],P)=>{let z=.3+Math.min(N,40)*.3;S.makeScale(un.r,un.r,z),S.setPosition(E[L].w[0],E[L].w[1],k),_.setMatrixAt(P,S),b.set(N>10?"#dc2626":N>5?"#ea7a0c":N>=1?"#eab308":"#16a34a"),_.setColorAt(P,b)}),_.renderOrder=25,_.frustumCulled=!1,e.add(_),un.mesh=_,s.tilt<.5&&(s.tilt=.85),a()}let Or=document.createElement("button");Or.type="button",Or.id="sbtn",Or.title=__t(122),Or.innerHTML=__t(123),Or.onclick=()=>{nt=!nt,nt&&(H=Kt=!1,se.at=0),d._h="",Fe(),a()},document.body.appendChild(Or);function y0(){r.dist<45!=pn<45&&(pn=r.dist,Ee()),x0(),S0(),us()}let ds=[],Sn=new Z;function S0(){let o=0;if(un.on){let f=Hf().sort((S,b)=>b[1]-S[1]),_=[];for(let[S,b]of f){if(o>=30)break;if(Sn.set(E[S].w[0],E[S].w[1],k).project(n),Sn.z>1||Math.abs(Sn.x)>1||Math.abs(Sn.y)>1)continue;let L=(Sn.x*.5+.5)*innerWidth,N=(-Sn.y*.5+.5)*innerHeight;if(_.some(([z,q])=>Math.abs(z-L)<90&&Math.abs(q-N)<18))continue;_.push([L,N]);let P=ds[o]||(ds[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=E[S].n+" +"+Math.round(b)+"\u2032",P.dataset.i=S,P.style.display="block",P.style.transform=`translate(${Math.round(L+8)}px,${Math.round(N-8)}px)`,o++}for(;o<ds.length;o++)ds[o].style.display="none";return}if(r.dist<30){let f=[];for(let _=0;_<xt;_++)Et[_]<4||(Sn.set(E[_].w[0],E[_].w[1],k).project(n),!(Sn.z>1||Math.abs(Sn.x)>1.05||Math.abs(Sn.y)>1.05)&&f.push([_,(Sn.x*.5+.5)*innerWidth,(-Sn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[_,S,b]of f){let L=ds[o]||(ds[o]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=E[_].n,L.dataset.i=_,L.style.display="block",L.style.transform=`translate(${Math.round(S+8)}px,${Math.round(b-7)}px)`,o++}}for(;o<ds.length;o++)ds[o].style.display="none"}function Sl(o){return Sn.set(o[0],o[1],k).project(n),[(Sn.x*.5+.5)*innerWidth,(-Sn.y*.5+.5)*innerHeight,Sn.z]}function Wf(o,u,f,_){let S=null,b=f*f;for(let L of It){let[N,P,z]=Sl(L.p.w);if(z>1)continue;let q=(N-o)**2+(P-u)**2;q<b&&(b=q,S={a:L})}if(S)return S;b=_*_;for(let L=0;L<xt;L++){if(!Et[L])continue;let[N,P,z]=Sl(E[L].w);if(z>1)continue;let q=(N-o)**2+(P-u)**2;q<b&&(b=q,S={s:L})}return S}let Qs=!1;window.__rodHide=()=>{Qs=!0},document.addEventListener("click",o=>{Qs&&!o.target.closest("#mcs, canvas")&&(Qs=!1)},!0),window.__rodTap=(o,u)=>{let f=null,_=1e9;for(let b of ds){if(b.style.display==="none")continue;let L=b.getBoundingClientRect();if(o>=L.left-4&&o<=L.right+4&&u>=L.top-4&&u<=L.bottom+4){let N=Math.abs(u-(L.top+L.bottom)/2)*4+(o-L.left);N<_&&(_=N,f=b)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let S=Wf(o,u,24,18);return S&&(S.a||S.s!=null)&&(Qs=!1),S&&(S.a||S.s!=null)&&(ot.st=-1),S&&S.a?(H=!1,Kt=!1,nt=!1,ut=S.a.tr||{vtid:S.a.v.tid},Lt=-1,Rt=null,Ee(),Fe(),Wt=0,a(),!0):S&&S.s!=null?(H=!1,Kt=!1,nt=!1,Lt=S.s,ut=null,Rt=null,Ee(),Fe(),a(),!0):!1},window.__rodHover=(o,u)=>{let f=Wf(o,u,14,10);if(f&&f.a){let _=f.a,S=_.tr?E[_.tr.pat.stops[_.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${_.c}">\u25A0</span> ${g(_.fam||_.tr&&_.tr.fam||"?")}${__t(124)}${g(_.tr?_.tr.num:_.v.num)}</b><small>${S?__t(105)+g(S):""}${_.real?(_.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(_.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${g(E[f.s].n)}</b><small>${[...E[f.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ot.st=-1,Qs=!1,H=Kt=nt=!1,ut=null,Rt=null,Lt=o,Ee(),d._h="",Fe(),a()};{let o=x("#rc"),u=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(u).observe(o)}catch{}addEventListener("resize",u),setTimeout(u,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,u=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!u||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(_=>_.text()).then(_=>{let S=(_.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];S&&f&&S!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{di()}catch{}},2500),setInterval(()=>{try{se.at=0,di()}catch{}},15*6e4);let ii={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Oa=matchMedia("(prefers-color-scheme: dark)");function Ml(){let o=ii.mode==="dark"||ii.mode==="auto"&&Oa.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<xt;f++)Jt.set(o?[.06,.08,.11]:[1,1,1],f*3);Ft.attributes.fill.needsUpdate=!0,ie.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),tr.textContent=ii.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ii.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",tr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ii.mode];let u=document.querySelector("meta[name=theme-color]");u&&(u.content=o?"#0d1119":"#eef1f5"),a()}let tr=document.createElement("button");tr.type="button",tr.id="tbtn",tr.onclick=()=>{ii.mode=ii.mode==="auto"?Oa.matches?"light":"dark":ii.mode==="dark"?"light":"dark",ii.mode==="dark"===Oa.matches&&(ii.mode="auto");try{localStorage.setItem("rod_theme",ii.mode)}catch{}Ml(),ln(tr.title)},document.body.appendChild(tr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Oa.addEventListener&&Oa.addEventListener("change",Ml),Ml(),window.__rodTick=ke,window.__rodFrame=y0,window.__rodResize=()=>{Ot.resolution.set(innerWidth,innerHeight),gt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let bi={st:-1,f:new Set},Xf=o=>{let u=[...E[o].fams].sort(F);return`<div class="sfc">${u.length>1?`<button type="button" data-sf="" class="${bi.f.size?"":"on"}${__t(133)}`:""}${u.map(f=>`<button type="button" data-sf="${g(f)}" class="ln ${bi.f.size&&!bi.f.has(f)?"off":""}${K.has(f)?"":" hid"}" style="--c:${Y[f]}">${g(f)}</button>`).join("")}</div>${u.some(f=>!K.has(f))?__t(134):""}`},M0=o=>{let u=(o||"#6b7385").replace("#",""),f=parseInt(u.slice(0,2),16),_=parseInt(u.slice(2,4),16),S=parseInt(u.slice(4,6),16);return(.299*f+.587*_+.114*S)/255>.62?"#1d2330":"#fff"},wi=(o,u)=>{let f=Y[u]||"#6b7385";return`<span class="dst" style="background:${f};color:${M0(f)}" title="${g(u||"")}">${g(o)}</span>`},bl=o=>{let u=E[o]&&E[o].id;return Ke.st.includes(u)?"\u{1F3E0} ":Xe.st.includes(u)?"\u{1F4BC} ":""},Ii=o=>o>10?"d-hi":o>5?"d-md":"d-lo",b0=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Ba={ref:null,m:new Map};function yu(o){if(Ba.ref!==V.alerts){Ba.ref=V.alerts,Ba.m=new Map;for(let u of V.alerts){if(u.src!=="Rodalies")continue;let f=u.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let _ of(u.es||u.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Ba.m.set(_[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:u.txt,when:u.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(u.es||u.txt)})}}return Ba.m.get(String(o))||null}let ka={ref:null,m:new Map};function qf(o){let u=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!u)return null;if(ka.ref!==V.alerts){ka.ref=V.alerts,ka.m=new Map;for(let _ of V.alerts)if(_.src==="Rodalies"&&b0.test(_.es||_.txt))for(let S of(_.es||_.txt).matchAll(/\b(\d{4,6})\b/g))ka.m.set(S[1],_)}let f=ka.m.get(u);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let za=o=>{try{let u=ut;return u?u.num!=null&&String(u.num)===String(o.num)||o.tid&&(u.tid===o.tid||u.vtid===o.tid):!1}catch{return!1}},Yf=(o,u)=>{let f=A(o,u.min-1,u.min+240).sort((_,S)=>_.est-S.est).slice(0,6);return f.length?`${__t(135)}${f.map(_=>`<li><b>${et(_.est)}</b>${An(_.fam)}<span>${wi(_.dest,_.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Pi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),w0=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Pi))}catch{}},Zf=o=>!!o&&Pi.some(u=>u.num===String(o.num)),Pe=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),fs=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Pe))}catch{}},wl=(o,u)=>!!(Pe&&o&&Pe.num===String(o.num)&&Pe.sid===E[o.pat.stops[u]].id);function El(o,u){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}ln(o+" \xB7 "+u),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:u,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:u})).catch(()=>{})}function E0(){if(!Pe||Pe.done)return;let o=ne();if(!o.live)return;let u=t.days.indexOf(o.ymd),f=(Q[u]||[]).find(P=>String(P.num)===Pe.num)||(Q[u-1]||[]).find(P=>String(P.num)===Pe.num);if(!f)return;let _=f.pat.stops.findIndex(P=>E[P].id===Pe.sid);if(_<0)return;let S=tt(f),b=typeof S=="number"?Math.max(0,S/60):0,L=f.day===u-1?1440:0,N=f.t0+f.pat.t[2*_]+b-L;if(N-o.min<-3){Pe.done=!0,fs();return}if(window.__schedAt&&N-2-o.min>.1&&(Pe.sch==null||Math.abs(Pe.sch-N)>=.5)&&(Pe.sch=N,Pe.nat=Date.now()+(N-2-o.min)*6e4,fs(),window.__schedAt(7701,`${__t(136)}${E[f.pat.stops[_]].n}`,__t(137)+` (${et(N)})`+(P=>P?` \xB7 ${__t(138)} ${P.fam} ${__t(139)} ${et(P.est)}${P.plat?__t(140)+P.plat:""}`:"")(Ll.get(Pe.sid)),Date.now()+(N-2-o.min)*6e4)),N-o.min<=2){Pe.done=!0,fs();let P=Ll.get(Pe.sid),z=P?` \xB7 ${P.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${P.fam} ${__t(139)} ${et(P.est)}${P.plat?__t(140)+P.plat:""}`:"",q=Math.round(N-o.min),T=(q>=1?`${__t(144)} ${q}${__t(143)}${et(N)}) \xB7 ${__t(145)}`:`${__t(146)} (${et(N)}) \xB7 ${__t(145)}`)+z;window.__schedAt&&Pe.nat&&Date.now()>=Pe.nat-2e4?document.hidden||El(`${__t(136)}${E[f.pat.stops[_]].n}`,T):(window.__schedOff&&window.__schedOff(7701),El(`${__t(136)}${E[f.pat.stops[_]].n}`,T))}}function Su(o,u){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),_=Q[u]||[],S=(N,P)=>N.t0+N.pat.t[2*P+1],b=null,L=11;for(let N of _){let P=N.pat.stops.findIndex(q=>E[q].id===o.sid);if(P<0||P===N.pat.stops.length-1)continue;let z=Math.abs(S(N,P)-f)+(String(N.num)===o.num?-5:0)+(N.fam===o.fam?0:20)+(o.dest&&E[N.pat.stops[N.pat.stops.length-1]].id!==o.dest?3:0);z<L&&(L=z,b=N)}return b}let Tl=new Set;function T0(){if(!Pi.length)return;let o=ne();if(!o.live)return;let u=t.days.indexOf(o.ymd);for(let f of Pi){let _=Su(f,u);if(!_)continue;let S=_.pat.stops.findIndex(q=>E[q].id===f.sid);if(S<0)continue;let b=_.t0+_.pat.t[2*S+1],L=tt(_),N=typeof L=="number"?L/60:0,P=b-o.min;if(P<-2||P>60)continue;let z=o.ymd+f.num+(L==="X"?"X":N>=10?10:N>=5?5:0);Tl.has(z)||(L==="X"||N>=5?(Tl.add(z),El(`${__t(147)}${et(b)} ${L==="X"?__t(148):`${__t(149)}${Math.round(N)} min`}`,`${_.fam} ${_.num}${__t(150)}${E[_.pat.stops[S]].n}${L==="X"?"":`${__t(151)}${et(b+N)}`}`)):P<=20&&!Tl.has(o.ymd+f.num+"ok")&&V.vp.has(_.tid)&&(Tl.add(o.ymd+f.num+"ok"),ln(`${__t(147)}${et(b)}${__t(152)}`)))}}setInterval(()=>{try{E0(),T0()}catch{}},15e3);let An=o=>`<span class="ln" style="--c:${Y[o]}">${g(o)}</span>`;{let o=f=>{let _=/^#?([0-9a-f]{6})$/i.exec(f||"");return _?[0,2,4].map(S=>{let b=parseInt(_[1].slice(S,S+2),16)/255;return b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4)}).reduce((S,b,L)=>S+b*[.2126,.7152,.0722][L],0):0},u=[...new Set(Object.values(Y))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(u){let f=document.createElement("style");f.textContent=u,document.head.appendChild(f)}}function Jf(o,u){return u?o==="X"?__t(154):o>=60?`<span class="st late ${Ii(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function Mu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let u=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,_=u?u.getBoundingClientRect().bottom-f+3:150;if(u){let S=u.nextElementSibling||u.parentElement!==o&&u.parentElement.nextElementSibling;S&&(_=Math.min(_,S.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,_)))+"px")}function ps(){try{let o=d,u=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!qe.on||qe.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!u||!u.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(m=>o.style.removeProperty(m)),o._fit=0);return}let S=o.getBoundingClientRect().top,b=u.getBoundingClientRect().top-8,L=Math.max(140,Math.floor(b-S)),N=f&&f.getClientRects().length?f.getBoundingClientRect():null,P=N?Math.max(10,Math.ceil(innerWidth-N.left+8)):10;o._fit=L+"|"+P;let z=o.style,q={"max-height":L+"px",height:"auto",bottom:"auto",width:"auto",right:P+"px"};for(let m in q)(z.getPropertyValue(m)!==q[m]||z.getPropertyPriority(m)!=="important")&&z.setProperty(m,q[m],"important")}catch{}}setInterval(()=>{qe.on&&qe.cur==="map"&&ps()},700);try{new MutationObserver(()=>ps()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=ps;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let u=_=>{let S=document.querySelector(_);if(!S||!S.getClientRects().length)return"\u2014";let b=S.getBoundingClientRect();return[b.left,b.top,b.right,b.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${qe.on?qe.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${u("#mcs")}
tc ${u("#mcs .tc")}
rc ${u("#rcgrab")} z ${u("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(u){o.textContent="err "+u.message}},1e3)}addEventListener("resize",()=>setTimeout(ps,80));try{new ResizeObserver(()=>ps()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(ps,80));function Fe(){try{A0()}finally{requestAnimationFrame(ps),window.__rodTabSync&&window.__rodTabSync();try{Mu()}catch{}}}function A0(){if(!ut&&Lt<0&&!Kt&&!H&&!nt&&!st){Qs=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Lu();return}let o=ne(),u="",f=Ce()&&o.live,_=(m,T)=>V.alerts.filter(U=>[...U.fams].some($=>m.has($))||T!=null&&U.stops.has(T)),S=m=>m.length?`<div class="al">${m.slice(0,4).map(T=>`<p>\u26A0\uFE0F ${Va(T)} ${[...T.fams].sort(F).slice(0,6).map(An).join(" ")} ${g(T.txt)} <small>${Ha(T)}</small></p>`).join("")}${m.length>4?`<small>y ${m.length-4}${__t(157)}`:""}</div>`:"",b=ut&&f?It.find(m=>m.real&&(ut.vtid?m.v.tid===ut.vtid:m.tr===ut)):null;if(st&&!nt&&!H&&!Kt&&!ut&&Lt<0)u=g0(st);else if(nt)u=m0();else if(H)u=`${__t(158)}${g(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(Kt){let m=V.alerts.filter(T=>[...T.fams].some(U=>K.has(U))||!T.fams.size);u=`${__t(161)}${m.length}${__t(162)}${m.map(T=>`<div class="al"><p>${Va(T)} ${[...T.fams].sort(F).map(An).join(" ")} <small>${Ha(T)}</small></p><p>${g(T.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(165):`${__t(166)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(b){let m=b.v,T=b.tr,U=Te=>g(E[T.pat.stops[Te]].n),$=T?T.pat.stops.length:0,ct=Xt.get(m.sid),bt=ct!=null?g(E[ct].n):g(m.sid),ht=T&&m.atStop>=0?U(m.atStop):"",yt=T&&m.next>=0?U(m.next):bt,it=T&&m.next>0?U(m.next-1):"",ce=b.broke||qf(b),xe=ce?`<b class="stopv">\u26A0\uFE0F ${ce.why==="aviso"?__t(167):`${__t(168)}${ce.min} min`}</b>${T&&it?`${__t(169)}${it}${__t(170)}${yt}</b>`:""}`:b.stop==="via"&&T?`${__t(171)}${it?`${__t(173)}${it}${__t(170)}${yt}</b>`:`${__t(174)}${yt}</b>`}${__t(172)}${Math.max(1,Math.round(m.still/60))} min`:m.pre&&T?m.prevTr?`${__t(175)}${g(m.prevTr.num)}${__t(176)}${U(0)}</b>${m.prevDl>=1?`${__t(179)}${Math.round(m.prevDl)} min</b>`:""}${__t(177)}${et(m.arrO)}${__t(178)}${et(m.depEst)}</b>${m.preDl>=1?`${__t(180)}${et(m.dep0)})`:""}`:`${__t(181)}${U(0)}${__t(182)}${et(m.dep0+b.dl)}</b>`:ht&&m.before?`Llegando a <b>${ht}</b>`:(m.st==="STOPPED_AT"||b.stop==="st")&&ht?`${__t(183)}${ht}</b>`:ht&&m.next>=0&&m.atStop!==m.next?`${__t(184)}${ht}${__t(176)}${yt}</b>`:it?`${__t(185)}${it}${__t(170)}${yt}</b>`:`${__t(186)}${yt}</b>`,Vt=T&&m.next>=0&&!m.pre?et(Ya(T,m,m.next,T.t0+T.pat.t[2*m.next]+b.dl)):"",Ge=[];if(T){let Te=b.idx>=0?b.idx:0,fe=m.pre?Math.max(b.dl,m.preDl||0):b.dl,dn=Ne=>T.t0+T.pat.t[Ne]+fe;for(let Ne=Te;Ne<$;Ne++)Ge.push(`<li class="${bl(T.pat.stops[Ne])?"mine":""}${wl(T,Ne)?" alm":""}"><b>${et(Ya(T,m,Ne,dn(Ne===0?1:2*Ne)))}</b><span title="${U(Ne)}">${bl(T.pat.stops[Ne])}${U(Ne)}</span>${fe>=1?`<em class="dl ${Ii(fe)}">${m.pre?"\u2248":""}+${Math.round(fe)}</em>`:""}${Ne>0?`<button type="button" class="abtn" data-alarm="${Ne}" title="${__t(187)}">${wl(T,Ne)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}u=`<div class="tc" style="--c:${b.c}"><button class="x" data-cx>\xD7</button><div>${An(b.fam)}${__t(188)}${g(T?T.num:m.num)}${__t(189)}${T?`<h3 class="rt"><span class="o" title="${U(0)}">${U(0)}</span><span class="ar">\u2192</span>${wi(E[T.pat.stops[$-1]].n,T.fam)}</h3>`:""}
        <p>${xe}${Vt?`${__t(190)}${Vt}`:""}${m.plat&&m.st==="STOPPED_AT"&&ht?`${__t(191)}${g(m.plat)}</b>`:""}</p><p>${m.pre&&m.prevTr?m.preDl>=1?`${__t(192)}${Math.round(m.preDl)}${__t(193)}`:__t(194):Jf(V.delays.get(m.tid),V.delays.has(m.tid))}${(()=>{let Te=T&&Si(T.num);return Te&&Te.n>=2?`${__t(195)}${Te.n}${__t(196)}${Te.late?`${__t(197)} <b>${Te.late} ${__t(198)} ${Te.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Te.avg<.5?"0":"+"+Math.round(Te.avg)} min</span>`:""})()}${(()=>{let Te=T&&yu(T.num);return Te?`<span class="why" title="${g(Te.txt)}">${Te.why?__t(203)+g(Te.why):__t(204)}</span>`:""})()}</p>
        <small>${m.pre?`${__t(205)}${os(iu(b.age))}`:m.est?__t(206):`${__t(207)}${os(iu(b.age))}${b.age>120?__t(208):""}`}</small>
        ${Ge.length?`${b.dl>=1||m.pre&&m.preDl>=1?`${__t(209)}`:""}<ol class="stops">${Ge.join("")}</ol>`:""}${S(_(new Set([b.fam])))}
        ${Rl(T?T.num:m.num,"",b.fam)}${T?`<div class="rtb two"><button type="button" data-fav>${Zf(T)?__t(210):__t(211)}</button><button type="button" data-follow>${Pl(T)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(ut&&f&&!ut.pat)u=`${__t(214)}${g(ut.num||ut.vtid||"")}${__t(215)}`;else if(ut){let m=ut,T=m.pat,U=T.stops.length,$=tt(m),ct=typeof $=="number"?$/60:0,bt=t.days.indexOf(o.ymd),ht=m.day===bt-1?1440:0,yt=o.min+ht-m.t0-ct,it=Cs(m,yt),ce=fe=>m.t0+T.t[fe]+ct,xe=fe=>g(E[T.stops[fe]].n),Vt=__t(216);it&&(Vt=it.moving?`${__t(217)}${xe(it.next)}${__t(218)}${et(ce(2*it.next))}`:it.at===U-1?`${__t(219)}${xe(U-1)}</b>`:`${__t(183)}${xe(it.at)}${__t(220)}${et(ce(2*it.at+1))}`);let Ge=it?it.next:0,Te=[];for(let fe=Ge;fe<U;fe++)Te.push(`<li class="${bl(T.stops[fe])?"mine":""}${wl(m,fe)?" alm":""}"><b>${et(Ya(m,null,fe,ce(2*fe)))}</b><span title="${xe(fe)}">${bl(T.stops[fe])}${xe(fe)}</span>${ct>=1?`<em class="dl ${Ii(ct)}">+${Math.round(ct)}</em>`:""}${fe>0?`<button type="button" class="abtn" data-alarm="${fe}" title="${__t(187)}">${wl(m,fe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);u=`<div class="tc" style="--c:${m.c}"><button class="x" data-cx>\xD7</button><div>${An(m.fam)}${__t(188)}${g(m.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${xe(0)}">${xe(0)}</span><span class="ar">\u2192</span>${wi(E[m.pat.stops[U-1]].n,m.fam)}</h3>
        <p>${Vt}</p><p>${Jf($,$!=null)}${(()=>{let fe=Si(m.num);return fe&&fe.n>=2?`${__t(195)}${fe.n}${__t(196)}${fe.late?`${__t(197)} <b>${fe.late} ${__t(198)} ${fe.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${fe.avg<.5?"0":"+"+Math.round(fe.avg)} min</span>`:""})()}${__t(221)}${et(m.t0+T.t[1])}${__t(222)}${et(m.t0+T.t[2*U-2])}${__t(223)}${ct>=1?__t(209):""}<ol class="stops">${Te.join("")}</ol>${Rl(m.num,"",m.fam)}<div class="rtb two"><button type="button" data-fav>${Zf(m)?__t(210):__t(211)}</button><button type="button" data-follow>${Pl(m)?__t(212):__t(213)}</button></div></div>`}else{let m=Lt,T=t.days.indexOf(o.ymd),U=[];bi.st!==m&&(bi.st=m,bi.f.clear());let $=it=>(!Y[it]||K.has(it))&&(!bi.f.size||bi.f.has(it));if(T>=0){let it=(ce,xe)=>{for(let Vt of ce){if(!$(Vt.fam))continue;let Ge=Vt.pat.stops.indexOf(m);if(Ge<0||Ge===Vt.pat.stops.length-1)continue;let Te=tt(Vt),fe=typeof Te=="number"?Te/60:0,dn=Vt.t0+Vt.pat.t[2*Ge+1]-xe;dn+fe<o.min-1||dn>o.min+360||U.push({tr:Vt,t:dn,dl:fe,d:Te,on:V.vp.has(Vt.tid),past:o.min>Vt.t0+Vt.pat.t[1]-xe+2})}};it(Q[T],0),T>0&&it(Q[T-1],1440)}U.sort((it,ce)=>it.t+it.dl-ce.t-ce.dl);let ct=E[m].id,bt=C.get(ct),ht=(f||X()&&o.live)&&V.url;ht&&(!bt||Date.now()-bt.at>3e4)&&!bt?.loading&&(C.set(ct,{...bt||{},loading:!0,at:bt?bt.at:0}),Ct(V.url.replace(/\/+$/,""),"/departures.json?stationId="+ct).then(it=>{C.set(ct,{at:Date.now(),d:it}),Lt===m&&(d._h="",Fe())}).catch(()=>C.set(ct,{at:Date.now(),err:1})));let yt=ht&&bt&&bt.d&&Array.isArray(bt.d.trains)&&bt.d.trains.length?bt.d.trains:null;if(yt){let it=new Map([...V.vp.values()].map(Vt=>[String((dt.get(Vt.tid)||{}).num||Vt.num),Vt])),ce=new Map(si(m).map(Vt=>[String(Vt.num),Vt])),xe=yt.filter(Vt=>$((Vt.line||{}).id||"")).slice(0,40).map(Vt=>{let Ge=String(Vt.commercialNumber||Vt.technicalNumber||""),Te=ce.get(Ge),fe=Te?et(Te.est):(Vt.departureDateHourSelectedStation||"").slice(11,16),dn=(Vt.line||{}).id||"",Ne=it.get(Ge),fi=Te?Math.round(Te.dl)*60:Ne?V.delays.get(Ne.tid):null,kl=Te&&(Te.gone||!Te.live&&Te.est<o.min-1);return`<li class="go${kl?" old":""}${za({num:Ge,tid:Ne?Ne.tid:""})?" sel":""}" data-gt="${g(Ge)}|${Ne?g(Ne.tid):""}"><b>${g(fe)}</b>${Y[dn]?An(dn):`<span class="ln" style="--c:#6b7385">${g(dn||"?")}</span>`}<span>${wi((Vt.destinationStation||{}).name||"",dn)}${Vt.trainObservations?` \xB7 <i>${g(Vt.trainObservations)}</i>`:""}${kl?` <small class="oldt">${Te.gone?__t(225):__t(226)}</small>`:""}</span>${Vt.trainCancelled?__t(227):typeof fi=="number"&&fi>=60?`<em class="dl ${Ii(fi/60)}">+${Math.round(fi/60)}</em>`:""}${Vt.platformSelectedStation?`${__t(228)}${g(Vt.platformSelectedStation)}</i>`:""}${Ne?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(E[m].n)}</h3>${Xf(m)}${Rl("",E[m].id,"")}${__t(229)}${xe||__t(231)}</ol>${Yf(m,o)}${S(_(E[m].fams,m))}${__t(230)}`}else u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(E[m].n)}</h3>${Xf(m)}${Rl("",E[m].id,"")}
        <small style="margin-top:6px">${f&&V.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${U.slice(0,40).map(it=>`<li class="go${za({num:it.tr.num,tid:it.tr.tid})?" sel":""}" data-gt="${g(it.tr.num)}|${g(it.tr.tid)}"><b>${et(it.t+it.dl)}</b>${An(it.tr.fam)}<span>${wi(E[it.tr.pat.stops[it.tr.pat.stops.length-1]].n,it.tr.fam)}</span>${it.d==="X"?__t(227):it.dl>=1?`<em class="dl ${Ii(it.dl)}">+${Math.round(it.dl)}</em>`:""}${f?it.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':it.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${Yf(m,o)}${S(_(E[m].fams,m))}${__t(230)}`}let L=d.scrollTop;if(d._h!==u&&!(d._touch>Date.now())&&(d.innerHTML=u,d._h=u,d.scrollTop=L),d.style.display="flex",d.classList.toggle("min",Qs),Lu(),innerWidth<=640){let m=d.querySelector(".tc");if(m&&!m.querySelector(".mn")){let T=document.createElement("button");T.type="button",T.className="mn",T.setAttribute("aria-label",__t(238)),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",T.onclick=$=>{$.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(ps),Mu(),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let U=m.querySelector(".x");m.insertBefore(T,U?U.nextSibling:m.firstChild)}}else d.classList.remove("peek");let N=x("#rc");if(innerWidth<=640&&!N.classList.contains("min")&&!Fe.done&&(Fe.done=1,x("#rcgrab").click()),innerWidth<=640){let m=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(m+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-m-16)+"px"}else if(innerHeight<=500){let m=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(m+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-m-20+"px"}else d.style.top="",d.style.width=nt?"390px":"300px",d.style.maxHeight="";ps();let z=d.querySelector("[data-cx]");z&&(z.onclick=m=>{if(m.stopPropagation(),Fe.done=0,nt||H||Kt||st&&!ut&&Lt<0){nt=H=Kt=!1,ut||Lt>=0||(st=""),d._h="",Fe(),a();return}if(ut&&ot.st>=0){let T=ot.st;ot.st=-1,ut=null,Rt=null,Lt=T,Ee(),d._h="",Fe(),Wt=0,a();return}if(ut&&Pl(ut)){let T=ut,U=[...Zn],$=Pe?{...Pe}:null,ct=d.querySelector("[data-follow]");ct&&ct.click(),setTimeout(()=>ln(`${__t(239)} \xB7 ${T.fam||""} ${T.num}`,{label:__t(240),fn:()=>{U.forEach(([bt,ht])=>Rs(bt,ht)),$&&!Pe&&(Pe=$,fs()),rr("map"),Qa({num:String(T.num),tid:T.tid&&V.vp.has(T.tid)?T.tid:"",tr:T}),Rt=ut,d._h="",Fe(),Le(!0),a()}}),0)}ot.st=-1,Kt=!1,H=!1,nt=!1,ut=null,Lt=-1,Rt=null,Ee(),Fe(),Wt=0,a()}),Qf(d),d.querySelectorAll("[data-alarm]").forEach(m=>m.onclick=T=>{T.stopPropagation();let U=ut&&ut.pat?ut:dt.get(ut&&ut.vtid)||null;if(!U)return;let $=+m.dataset.alarm,ct=E[U.pat.stops[$]].id;Pe&&Pe.num===String(U.num)&&Pe.sid===ct?(Pe=null,window.__schedOff&&window.__schedOff(7701),ln(__t(241))):(Pe={num:String(U.num),sid:ct,at:Date.now()},ln(`${__t(242)}${E[U.pat.stops[$]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),fs(),d._h="",Fe()});{let m=d.querySelector("[data-fav]");m&&(m.onclick=T=>{T.stopPropagation();let U=ut&&ut.pat?ut:dt.get(ut&&ut.vtid)||null;if(!U)return;let $=Pi.findIndex(ct=>ct.num===String(U.num));if($>=0)Pi.splice($,1),ln(__t(243));else{let ct=[...Ke.st,...Xe.st,...Dt.st],bt=U.pat.stops.find(ht=>ct.includes(E[ht].id))??U.pat.stops[0];Pi.push({num:String(U.num),fam:U.fam,sid:E[bt].id,dest:E[U.pat.stops[U.pat.stops.length-1]].id,t:et(U.t0+U.pat.t[2*U.pat.stops.indexOf(bt)+1])}),ln(`${__t(244)}${U.fam}${__t(245)}${Pi[Pi.length-1].t}${__t(150)}${E[bt].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}w0(),d._h="",Fe(),Le(!0)})}{let m=d.querySelector("[data-share]");m&&(m.onclick=()=>{let T=st,U=It.filter(ht=>(ht.fam||ht.tr&&ht.tr.fam)===T),$=U.filter(ht=>ht.dl>=5).sort((ht,yt)=>yt.dl-ht.dl),ct=V.alerts.filter(ht=>ht.fams.has(T)),bt=`${T}${__t(247)}${et(ne().min)}: ${U.length}${__t(248)}${$.length}${__t(249)}${$.length?" ("+$.slice(0,4).map(ht=>`${ht.tr?ht.tr.num:ht.v.num} +${Math.round(ht.dl)}`).join(", ")+")":""}.${ct.length?__t(250)+ct[0].txt:__t(251)}`;navigator.share?navigator.share({text:bt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(bt),ln(__t(252)+bt.slice(0,60)+"\u2026"))})}{let m=d.querySelector("[data-cols]");m&&(m.onclick=()=>{un.on=!un.on,v0(),d._h="",Fe()})}d.querySelectorAll("[data-gs]").forEach(m=>m.onclick=()=>{let T=+m.dataset.gs;nt=!1,window.__rodPickStation(T),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(m=>m.onclick=T=>{T.stopPropagation();let U=m.dataset.sf;U?bi.f.has(U)?bi.f.delete(U):bi.f.add(U):bi.f.clear(),d._h="",Fe()}),d.querySelectorAll("[data-gt]").forEach(m=>m.onclick=()=>{ot.st=Lt;let[T,U]=m.dataset.gt.split("|"),$=dt.get(U);Qa({num:T,tid:V.vp.has(U)?U:"",tr:$||null})}),d.querySelectorAll("[data-sethome]").forEach(m=>m.onclick=()=>Uu(Lt,m.dataset.sethome));let q=d.querySelector("[data-follow]");q&&(q.onclick=()=>{let m=Pl(ut);if(Rt=m?null:ut,!m&&ut&&ut.num!=null){let T=ut.pat.stops,U=String(ut.num),$=null,ct=1e9;for(let bt of[Dt,Ke,Xe]){let ht=ai(bt);if(ht==null||!T.includes(ht)||bt===Dt&&!Dt.st.length)continue;let yt=si(ht).find(it=>String(it.num)===U&&!it.gone);yt&&yt.est<ct&&(ct=yt.est,$=bt)}$&&Rs($.key,U),Le(!0)}if(m&&ut&&ut.num!=null){let T=String(ut.num);[...Zn].forEach(([U,$])=>{String($)===T&&Rs(U,null)}),ri.num===T&&(ri.num=""),Yt.tid===T&&(Yt.tid="",Yt.manual=0,Yt.quiet=Date.now()+10*6e4),Pe&&Pe.num===T&&(Pe=null,fs(),window.__schedOff&&window.__schedOff(7701)),Le(!0)}Rt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Fe(),a()})}window.__rodCard=Fe;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(ut||Lt>=0||Kt||H)&&(d._h="",Fe())},x("#ver").onclick=()=>{H=!0,nt=!1,Kt=!1,d._h="",Fe()};let Al={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},C0=["vacio","lleno","petado",__t(253),"calor","abordo"],R0=["gente","retraso","cancel","ascensor","via"],I0={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},Cl=o=>(V.tipos||I0)[o]||o,bu=(o,u)=>(V.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||u&&f.sid===String(u)&&!f.num||o&&u&&f.num===String(o)&&f.sid===String(u)),jf=o=>{let u=Math.round((Date.now()+(V.repSkew||0)-o.at)/6e4);return u<1?__t(265):os(u+" min")},$a=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Rl(o,u,f){if(!V.url||!V.repOk)return"";let _=bu(o,u),S=o?C0:R0;return`${__t(266)}${_.length?"":__t(268)}</small>${_.map(b=>`<p><span>${Al[b.kind]||"\u2022"} <b>${g(Cl(b.kind))}</b> <small>${b.up>1?b.up+__t(269):""}${jf(b)}</small></span>${$a.has(b.id)?"<small>\u2713</small>":`<button type="button" data-rv="${b.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${b.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${o?__t(270):__t(271)}</summary><div class="ckb">${S.map(b=>`<button type="button" data-rk="${b}" data-rn="${g(o||"")}" data-rs="${g(u||"")}" data-rl="${g(f||"")}">${Al[b]} ${g(Cl(b))}</button>`).join("")}${__t(267)}`}async function Kf(o,u){try{let _=await(await fetch(V.url.replace(/\/+$/,"")+u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!_.ok){ln(_.err||__t(272));return}if(_.id){$a.add(_.id);try{localStorage.setItem("rod_votes",JSON.stringify([...$a].slice(-300)))}catch{}}ln(u==="/vote"?__t(273):_.n>1?`${__t(274)}${_.n}${__t(275)}`:__t(276));let S=await Ct(V.url.replace(/\/+$/,""),"/reports.json");S&&S.items&&(V.rep=S.items),d._h="",Fe(),Le(!0)}catch{ln(__t(277))}}function Qf(o){o.querySelectorAll("[data-rk]").forEach(u=>u.onclick=f=>{f.stopPropagation(),u.disabled=!0,Kf({kind:u.dataset.rk,num:u.dataset.rn,sid:u.dataset.rs,line:u.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(u=>u.onclick=f=>{f.stopPropagation();let[_,S]=u.dataset.rv.split(":");$a.add(+_);try{localStorage.setItem("rod_votes",JSON.stringify([...$a].slice(-300)))}catch{}Kf({id:+_,v:+S},"/vote")})}let Il=0;function ln(o,u){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,u){let _=document.createElement("button");_.type="button",_.className="tact",_.textContent=u.label,_.onclick=S=>{S.stopPropagation(),clearTimeout(Il),f.className="",u.fn()},f.appendChild(_)}f.className="on",clearTimeout(Il),Il=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),f._tap||(f._tap=1,f.onclick=()=>{clearTimeout(Il),f.className=""})}function Va(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(278):g(o.src)}</b>`:""}function Ha(o){if(!o.when)return"";let[u,f]=o.when.split("T"),_=vt(new Date),S=_.ymd.slice(0,4)+"-"+_.ymd.slice(4,6)+"-"+_.ymd.slice(6,8);if(u===S&&f){let b=Math.round(_.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return b<1?__t(265):b<60?os(b+" min"):`${__t(279)}${f.slice(0,5)}`}return`${u.slice(8,10)}/${u.slice(5,7)}${f?" "+f.slice(0,5):""}`}function wu(){let o=x("#alr");if(!o)return;let u=V.alerts.filter(f=>[...f.fams].some(_=>K.has(_))).length;o.hidden=!u,o.textContent=`\u26A0\uFE0F ${u}${u===1?__t(280):__t(281)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{H=!1,nt=!1,Kt=!0,Fe()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(282)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let _=getSelection();_.removeAllRanges(),_.addRange(f),x("#wcopy").textContent=__t(283)}setTimeout(()=>x("#wcopy").textContent=__t(284),2500)};let P0=Xt.get("71801");function tp(o,u){let f=E[o].id,_=C.get(f);!(he()&&V.url)||_&&(_.loading||Date.now()-_.at<3e4)||(C.set(f,{..._||{},loading:!0,at:_?_.at:0}),Ct(V.url.replace(/\/+$/,""),"/departures.json?stationId="+f).then(S=>{C.set(f,{at:Date.now(),d:S}),u&&u()}).catch(()=>C.set(f,{at:Date.now(),err:1})))}let ep=o=>+o.slice(0,2)*60+ +o.slice(3,5),Ga={k:-2,m:null};function Wa(o){let u=t.days.indexOf(ne().ymd);if(Ga.k!==u){Ga.k=u,Ga.m=new Map;for(let f of Q[u]||[])Ga.m.set(String(f.num),f)}return Ga.m.get(String(o))||null}let Li={at:0,m:new Map},Xa=o=>Ce()?(qa(""),[...o].filter(u=>{let f=Li.m.get(u);return f&&f[0]>=2&&f[1]===0}).sort(F)):[];function qa(o){if(Date.now()-Li.at>6e4||Li.vp!==V.vp){Li.at=Date.now(),Li.vp=V.vp,Li.m=new Map;let f=ne(),_=t.days.indexOf(f.ymd);if(_>=0)for(let S of Q[_]){let b=f.min-S.t0;if(b<S.pat.t[1]+3||b>S.pat.t[S.pat.t.length-2]-3)continue;let L=Li.m.get(S.fam)||[0,0];L[0]++,V.vp.has(S.tid)&&L[1]++,Li.m.set(S.fam,L)}}let u=Li.m.get(o);return u&&u[0]>=3?u[1]/u[0]:1}function Ya(o,u,f,_){let S=E[o.pat.stops[f]].id;if([...Ke.st,...Xe.st].includes(S)){let b=si(o.pat.stops[f]).find(L=>String(L.num)===String(o.num));if(b&&!b.gone)return b.est}return Eu(o,u,f,0,_)}function np(o,u){if(!o||!u||u.pre||u.dObs==null||u.err==null||u.err>.6)return null;let f=Date.now()/1e3-u.ts;if(f>150||f<-30||(u.still||0)>=90)return null;let _=jt(o.pat).stopD,S=o.pat.t,b,L,N=_.reduce((P,z,q)=>Math.abs(z-u.dObs)<Math.abs(_[P]-u.dObs)?q:P,0);if(Math.abs(_[N]-u.dObs)<.16||u.atStop===N)b=S[2*N+1]??S[2*N],L=N;else{let P=_.findIndex(q=>q>u.dObs);if(P<=0)return null;let z=Math.min(1,Math.max(0,(u.dObs-_[P-1])/(_[P]-_[P-1]||1)));b=S[2*P-1]+z*(S[2*P]-S[2*P-1]),L=P-1}return{t:vt(new Date).min-f/60,tpos:b,j0:L,sd:_}}function Eu(o,u,f,_,S){let b=np(o,u);if(!b||f<=b.j0&&!(f===b.j0&&_===1))return S;let L=o.pat.t,N=b.t+(L[2*f+_]??L[2*f])-b.tpos;if(N-b.t>45)return S;let P=(S%1440+1440)%1440,z=((N-P+720)%1440+1440)%1440-720;return z>=-3&&z<=5?S+z:S}function Wb(o,u,f,_){let S=np(o,u);if(!S)return null;let b=Eu(o,u,f,1,S.t+o.pat.t[2*f+1]-S.tpos);return b-_.min>30||b<_.min-1?null:b}function si(o,u){let f=ne(),_=(Ce()||X())&&f.live&&!u,S=C.get(E[o].id),b=[],L=new Map([...V.vp.values()].map(P=>[String((dt.get(P.tid)||{}).num||P.num),P]));if(_&&S&&S.d&&Array.isArray(S.d.trains)&&S.d.trains.length)for(let P of S.d.trains){let z=(P.departureDateHourSelectedStation||"").slice(11,16);if(!z)continue;let q=String(P.commercialNumber||P.technicalNumber||""),m=L.get(q),T=m?V.delays.get(m.tid):null,U=Math.max(typeof T=="number"?Math.max(0,T/60):0,m&&m.pre&&m.preDl||0),$=ep(z);$<f.min-720&&($+=1440);let ct=+(P.departureDateHourSelectedStation||"").slice(17,19)||0,bt=$+ct/60,ht=m&&dt.get(m.tid)||Wa(q),yt=ht?ht.pat.stops.indexOf(o):-1,it=yt>=0?(ht.t0+ht.pat.t[2*yt+1])%1440:null;if(it!=null){for(;it<bt-720;)it+=1440;for(;it>bt+720;)it-=1440;Math.abs(bt-it)>120&&(it=null)}let ce,xe;it==null?(ce=ct||!U?bt:bt+U,xe=ct?0:U):ct||Math.abs(bt-it)>=1?(ce=bt,xe=Math.max(0,bt-it)):(ce=it+U,xe=U);let Vt=!1;if(ht&&!m&&yt>0&&!ct){let Ge=t.days.indexOf(f.ymd),Te=ht.day===Ge-1?1440:ht.day===Ge+1?-1440:0,fe=ht.t0+ht.pat.t[1]-Te;if(f.min<fe){let dn=fe+(ht.pat.t[2*yt+1]-ht.pat.t[1]);dn>ce+1&&(ce=dn,Vt=!0,it!=null&&(xe=Math.max(0,ce-it)))}}if(it!=null&&($=Math.round(it)),m&&ht&&yt>=0){let Ge=Eu(ht,m,yt,1,ce);Ge!==ce&&(ce=Math.max(Ge,f.min),it!=null&&(xe=Math.max(0,ce-it)))}b.push({dubious:Vt,rodLive:!!ct,sm:$,est:ce,dl:xe,fam:(P.line||{}).id||"",dest:(P.destinationStation||{}).name||"",destId:(P.destinationStation||{}).id||"",plat:P.platformSelectedStation||"",cancel:!!P.trainCancelled,obs:P.trainObservations||"",live:!!m,num:q,tid:m?m.tid:"",tr:m&&dt.get(m.tid)||Wa(q),src:"oficial"})}else{let P=t.days.indexOf(f.ymd);if(P<0)return b;let z=(q,m)=>{for(let T of q){let U=T.pat.stops.indexOf(o);if(U<0||U===T.pat.stops.length-1)continue;let $=tt(T),ct=typeof $=="number"?Math.max(0,$/60):0,bt=T.t0+T.pat.t[2*U+1]-m;if(bt+ct<f.min-1||bt>f.min+(f.min>1080||f.min<300?600:360))continue;let ht=T.pat.stops[T.pat.stops.length-1];b.push({sm:bt,est:bt+ct,dl:ct,fam:T.fam,dest:E[ht].n,destId:E[ht].id,plat:"",cancel:$==="X",obs:"",live:V.vp.has(T.tid),num:T.num,tid:T.tid,tr:T,src:"horario"})}};z(Q[P],0),P>0&&z(Q[P-1],1440),P+1<t.days.length&&f.min>1080&&z(Q[P+1],-1440)}if(_){let P=new Set(b.map(m=>String(m.num))),z=t.days.indexOf(f.ymd),q=(m,T)=>{for(let U of m||[]){if(P.has(String(U.num)))continue;let $=U.pat.stops.indexOf(o);if($<0||$===U.pat.stops.length-1)continue;let ct=U.t0+U.pat.t[2*$+1]-T;if(ct<f.min-45||ct>f.min+1||!V.vp.get(U.tid))continue;let ht=V.delays.get(U.tid),yt=typeof ht=="number"?Math.max(0,ht/60):0,it=U.pat.stops[U.pat.stops.length-1];b.push({sm:ct,est:ct+yt,dl:yt,fam:U.fam,dest:E[it].n,destId:E[it].id,plat:"",cancel:!1,obs:"",live:!0,num:U.num,tid:U.tid,tr:U,src:"horario"})}};z>=0&&(q(Q[z],0),z>0&&q(Q[z-1],1440));for(let m of b){let T=m.tid&&V.vp.get(m.tid),U=m.tr?m.tr.pat.stops.indexOf(o):-1;m.passed=!!(T&&U>=0&&!T.pre&&T.next!=null&&T.next>=0&&T.next>U&&T.atStop!==U),!m.passed&&m.live&&m.est<f.min&&(m.est=f.min,m.late=!0),m.passed&&(m.gone=!0)}}let N=b.filter(P=>P.gone?f.min-P.est<20:P.est>=f.min-.5).sort((P,z)=>P.est-z.est);{let P=N.filter(z=>z.gone);if(P.length>2){let z=new Set(P.slice(0,P.length-2));N=N.filter(q=>!z.has(q))}}if(!N.filter(P=>!P.gone).length&&b.length&&b[0].src==="oficial"&&!u)return si(o,!0);for(let P of N){let z=P.num&&yu(P.num);z&&z.cx&&(P.cancel=!0,P.cxWhy=z.txt)}if(Ce()&&f.live){let P=t.days.indexOf(f.ymd);for(let z of N){if(z.live||z.cancel||!z.tr)continue;let q=z.tr.day===P-1?1440:z.tr.day===P+1?-1440:0,m=z.tr.t0+z.tr.pat.t[1]-q+(z.dl||0);z.noPos=f.min>m+3&&!z.rodLive,z.ghost=z.noPos&&qa(z.fam)>=.7}}if(u||(N=N.concat(A(o,f.min-.5,f.min+360)).sort((P,z)=>P.est-z.est)),!u&&N.some(P=>P.src==="oficial")){let P=b.filter(m=>m.src==="oficial"),z=Math.max(...P.map(m=>m.sm)),q=new Set(N.map(m=>String(m.num)));N=N.concat(si(o,!0).filter(m=>!m.gone&&m.sm<=z&&m.est>=f.min-.5&&!q.has(String(m.num))).map(m=>Object.assign(m,{unconf:!0}))).sort((m,T)=>m.est-T.est)}if(N.some(P=>P.src==="oficial")){let P=Math.max(...N.map(q=>q.sm)),z=new Set(N.map(q=>String(q.num)));N=N.concat(si(o,!0).filter(q=>q.sm>P&&!z.has(String(q.num))))}return N}let ip=(o,u,f,_)=>{let S={key:o,ico:u,name:f,st:[],i:0,walk:10,open:!1};try{let b=JSON.parse(localStorage.getItem("rod_"+o)||"null");b&&Object.assign(S,b)}catch{}return!S.st.length&&_&&(S.st=_),S},Ke=ip("home","\u{1F3E0}",__t(285),null),Xe=ip("work","\u{1F4BC}",__t(286),null),Dt={key:"near",ico:"\u{1F4CD}",name:__t(287),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Za=[Dt,Ke,Xe];try{Dt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Ke.open=!1,Xe.open=!1;function sp(o,u){let f=Mt(o,u),_=Mt(o,u+.009);return 1/Math.hypot(_[0]-f[0],_[1]-f[1])}function Tu(o){if(!navigator.geolocation){Dt.err=__t(288),Le(!0);return}navigator.geolocation.getCurrentPosition(u=>{let{longitude:f,latitude:_}=u.coords,S=Mt(f,_),b=sp(f,_),L=E.map((q,m)=>[m,Math.hypot(q.w[0]-S[0],q.w[1]-S[1])*b]).filter(([q])=>E[q].fams.size).sort((q,m)=>q[1]-m[1]),N=L.filter(([,q],m)=>m===0||q<Math.max(2.5,L[0][1]*1.6)).slice(0,3),P=Dt.st[0]!==E[N[0][0]].id;Dt.w=S,Dt.k=b,Dt.acc=u.coords.accuracy!=null?u.coords.accuracy:999,Dt.st=N.map(([q])=>E[q].id),Dt.dist=Object.fromEntries(N.map(([q,m])=>[E[q].id,m])),Dt.fix=Date.now(),Dt.err="",P&&(Dt.i=0);let z=[Ke,Xe].find(q=>q.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5);Le(!0)},u=>{Dt.err=u.code===1?__t(289):__t(290),Le(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let rp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Tu(!0),400);let Yt={fixes:[],tid:"",no:new Map,shown:""},ri={num:"",until:0};function Pl(o){return!!o&&(Rt===o||o.num!=null&&[...Zn.values()].some(u=>String(u)===String(o.num)))}let L0=()=>{let o=new Set([...Zn.values()].map(String));return ri.num&&ri.until>Date.now()&&o.add(ri.num),o};function D0(){let o=Yt.fixes;if(o.length<2)return;let u=o[o.length-1],f=o.slice().reverse().find(U=>u.t-U.t>=8e3&&u.t-U.t<=9e4);if(!f)return;let _=Math.hypot(u.w[0]-f.w[0],u.w[1]-f.w[1])*u.k,S=u.spd!=null&&u.spd>0?u.spd*3.6:_/((u.t-f.t)/36e5);if(u.acc!=null&&u.acc>100)return;if(Yt.tid&&S<8){if(!Yt.slow)Yt.slow=u.t;else if(u.t-Yt.slow>9e4&&E.some(U=>U.w&&Math.hypot(U.w[0]-u.w[0],U.w[1]-u.w[1])*u.k<.35)){Yt.tid="",Yt.manual=0,Yt.slow=0,Yt.quiet=Date.now()+10*6e4,Rt=null,Le(!0);return}}else Yt.slow=0;if(!Yt.tid&&Yt.quiet&&Date.now()<Yt.quiet||Yt.manual&&Date.now()<Yt.manual)return;if(Yt.tid){if(S<22)return;let U=It.find($=>$.tr&&String($.tr.num)===Yt.tid)||js(ne()).out.find($=>$.tr&&String($.tr.num)===Yt.tid);if(U){if(Math.hypot(U.p.w[0]-u.w[0],U.p.w[1]-u.w[1])*u.k<=5){Yt.far=0;return}if(Yt.far||(Yt.far=u.t),u.t-Yt.far<12e4)return}Yt.far=0}if(S<22||S>200)return;let b=[u.w[0]-f.w[0],u.w[1]-f.w[1]],L=null,N=2.5,P=It.filter(U=>U.real),z=js(ne()).out.filter(U=>U.tr&&!P.some($=>$.tr&&String($.tr.num)===String(U.tr.num))),q=L0();for(let U of[...P,...z]){if(!U.tr||q.size&&!q.has(String(U.tr.num)))continue;let $=U.real?2.5:3.5,ct=Math.hypot(U.p.w[0]-u.w[0],U.p.w[1]-u.w[1])*u.k;if(ct>Math.min(N,$)||L&&L.real&&!U.real)continue;let bt=U.real?U.v.next:U.p.next;if(bt==null||bt<0)continue;let ht=E[U.tr.pat.stops[bt]].w,yt=[ht[0]-U.p.w[0],ht[1]-U.p.w[1]];if(yt[0]*b[0]+yt[1]*b[1]<=0)continue;let it=String(U.tr.num);(Yt.no.get(it)||0)>Date.now()||(N=ct,L=U)}if(!L){Yt.cand=null;return}let m=String(L.tr.num);if(Yt.tid===m||u.acc!=null&&u.acc>50)return;if(!Yt.cand||Yt.cand.k!==m){Yt.cand={k:m,t:u.t};return}if(u.t-Yt.cand.t<2e4)return;Yt.cand=null,Yt.tid=m,H=Kt=nt=!1,Lt=-1,ut=L.tr,Rt=L.tr,Object.assign(s,{tx:L.p.w[0],ty:L.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());{let U=L.tr.pat.stops,$=L.real?L.v.next:L.p.next,ct=[...Ke.st,...Xe.st],bt=U.findIndex((ht,yt)=>yt>=$&&ct.includes(E[ht].id));bt>0&&!(Pe&&Pe.num===m)&&(Pe={num:m,sid:E[U[bt]].id,at:Date.now()},fs())}Ee(),d._h="",Fe(),Wt=0,a();let T=x("#onb");T||(T=document.createElement("div"),T.id="onb",document.body.appendChild(T)),T.innerHTML=`${__t(291)}${g(L.tr.fam)} ${g(L.tr.num)}${__t(292)}${g(E[L.tr.pat.stops[L.tr.pat.stops.length-1]].n)}${__t(293)}${Pe&&Pe.num===m?`${__t(295)}${g(E[Xt.get(Pe.sid)].n)}`:""}${__t(294)}`,T.className="on",T.querySelector("[data-onb-no]").onclick=()=>{Yt.no.set(m,Date.now()+20*6e4),Yt.tid="",Rt=null,ut=null,d._h="",Fe(),T.className=""},T.querySelector("[data-onb-x]").onclick=()=>{T.className=""},setTimeout(()=>{T.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,u=()=>{o==null&&(o=navigator.geolocation.watchPosition(_=>{let{longitude:S,latitude:b}=_.coords,L={t:_.timestamp||Date.now(),w:Mt(S,b),k:sp(S,b),spd:_.coords.speed,acc:_.coords.accuracy};Yt.fixes.push(L),Yt.fixes=Yt.fixes.filter(N=>L.t-N.t<12e4);try{ne().live&&D0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},f=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(u,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?f():(Yt.fixes=[],u())})}setInterval(()=>{!document.hidden&&(Date.now()-Dt.fix>11e4||Za.some(o=>o.goAt))&&Tu(!1)},3e4);let Ei=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},ai=o=>o.st.length?Xt.get(o.st[o.i]||o.st[0]):null;function ap(o,u,f,_){if(_&&u.bus)return u.bstops.slice(1).some(L=>_.has(L))?"to":"out";if(_&&u.tr){let L=u.tr.pat.stops,N=L.indexOf(o);if(N>=0&&L.slice(N+1).some(P=>_.has(P)))return"to"}if(_&&u.tr)return"out";let S=Xt.get(u.destId)??E.findIndex(L=>L.n===u.dest);if(S<0||S==null||f==null)return"otros";let b=L=>Math.hypot(E[L].w[0]-E[f].w[0],E[L].w[1]-E[f].w[1]);return b(S)<b(o)?"to":"out"}let er=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),op=0,N0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,lp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,cp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Ja=o=>{let u=o.es||o.txt;return lp.test(u)||lp.test(o.txt)?3:cp.test(u)||cp.test(o.txt)||o.lvl>=2?2:1},hp=4,Au=new Map,Ll=new Map;function up(o,u){let f=t.days.indexOf(ne().ymd),_=f+"|"+o+"|"+[...u].join(",");if(Au.has(_))return Au.get(_);let S=!1,b=new Set,L=new Set;for(let P of Q[f]||[]){let z=P.pat.stops,q=z.indexOf(o);if(q>=0)for(let T=q+1;T<z.length;T++){if(u.has(z[T])){S=!0;break}b.add(z[T])}let m=-1;for(let T=1;T<z.length;T++)if(u.has(z[T])){m=T;break}if(m>0)for(let T=0;T<m;T++)L.add(z[T])}let N=S?null:[...b].filter(P=>L.has(P)&&P!==o&&!u.has(P));return Au.set(_,N),N}function Cu(o,u,f,_){for(let S of _||si(o)){if(S.cancel||S.gone||!S.tr||S.est<u-.01)continue;let b=S.tr.pat.stops,L=b.indexOf(o);if(L<0)continue;let N=-1;for(let P=L+1;P<b.length;P++)if(f.has(b[P])){N=P;break}if(!(N<0))return{c:S,fin:S.est+(S.tr.pat.t[2*N]-S.tr.pat.t[2*L+1])}}return null}function U0(o,u,f){let _=Cu(o,u+2,f,si(o));return _?{c:_.c,fin:_.fin,m:_.c.est-u,lost:!1}:null}function Ru(o,u,f,_,S){let b=null,L=new Map,N=si(o).filter(P=>!P.cancel&&!P.gone&&P.tr&&P.est-S.min>=_).slice(0,8);for(let P of N){let z=P.tr.pat.stops,q=z.indexOf(o);if(!(q<0))for(let m of f){let T=z.indexOf(m);if(T<=q)continue;let U=P.est+(P.tr.pat.t[2*T]-P.tr.pat.t[2*q+1]);L.has(m)||L.set(m,si(m));let $=Cu(m,U+hp,u,L.get(m));$&&(!b||$.fin<b.finAt-.01||Math.abs($.fin-b.finAt)<.01&&P.est>b.x.est)&&(b={T:m,x:P,finAt:$.fin})}}return b}function F0(o,u,f,_,S){let b=u.T,L=si(b),N=u.fin,P=[];for(let m of L){if(P.length>=5)break;if(m.cancel||m.gone||!m.tr)continue;let T=m.tr.pat.stops,U=T.indexOf(b),$=-1;for(let ht=U+1;ht<T.length;ht++)if(N.has(T[ht])){$=ht;break}if($<0||f.x&&f.x.arr!=null&&m.est<f.x.arr-.01)continue;let ct=m.est+(m.tr.pat.t[2*$]-m.tr.pat.t[2*U+1]),bt=_&&_.c===m;P.push(`<li class="hr${bt?" pin":""}" style="--lc:${Y[m.fam]||"#6b7385"}"><span class="hrt"><b>${et(m.est)}</b><small>${f.x&&f.x.arr!=null?m.est-f.x.arr<2?__t(296):Math.floor(m.est-f.x.arr)+" "+__t(297):""}</small></span><span class="hrd">${wi(m.fam+" \xB7 "+m.dest,m.fam)}<small class="hro">${__t(298)} ${et(ct)}${m.num?" \xB7 "+__t(299)+g(m.num):""}</small></span><span class="hrm">${m.dl>=1?`<em class="dl ${Ii(m.dl)}">+${Math.round(m.dl)}</em>`:""}${m.plat?`${__t(228)}${g(m.plat)}</i>`:""}</span></li>`)}let z=(()=>{let m=[];for(let T of u.cands){let U=Ru(ai(o),N,[T],0,S);U&&m.push([T,U.finAt])}return m.sort((T,U)=>T[1]-U[1]),m.filter(([T,U])=>U<=m[0][1]+30||u.fixed&&T===b).slice(0,4)})(),q=z.length>1||u.fixed?`<div class="hxst"><span>${__t(300)}:</span><button type="button" data-hxf="${o.key}:" class="${u.fixed?"":"on"}">${__t(301)}</button>${z.map(([m])=>`<button type="button" data-hxf="${o.key}:${g(E[m].id)}" class="${u.fixed&&m===b?"on":""}">${g(E[m].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(300)} ${wi(E[b].n,_?_.c.fam:"")} \u2192 ${g(u.finName)}</div><ol class="hxl">${P.join("")||`<li class="hr"><span class="hrd">${__t(302)}</span></li>`}</ol>${q}</div>`}let dp=new Set;function O0(o,u,f){dp.has(o)||(dp.add(o),Mp(u,f,o))}function B0(o,u,f){let _=ai(o);if(o===Dt){if(Yt.tid)return"";if(_==null)return`${__t(303)}${Dt.err?g(Dt.err)+__t(304):__t(305)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Ke,Xe].find(Nt=>Nt.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5)||Date.now()-Dt.fix>10*6e4)return"";o.walk=rp(Dt.dist[o.st[o.i]]||0)}if(_==null){let rt=Dt.st.length?Xt.get(Dt.st[0]):null,Nt=o===Xe?Ke:Xe,ee=rt!=null&&!Nt.st.includes(Dt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${ee?`${__t(306)}${g(E[rt].n)}</b>`:__t(307)}</small></span>${ee?`<button type="button" class="hpick" data-hnear="${o.key}${__t(308)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${ee?__t(309):__t(310)}</button></div></div>`}tp(_,()=>Le(!0));let S=o===Dt?null:o===Ke?Xe:Ke,b=S?ai(S):null,L=b!=null&&b!==_?b:P0,N=b!=null&&b!==_?S===Xe?__t(311):"casa":"Barcelona",P=E[_].fams,z=new Set([...P].filter(rt=>K.has(rt))),q=z.size<P.size,m=!1;z.size||(z=new Set(P),q=!1,m=!0);let T=Dt.w?Math.hypot(E[_].w[0]-Dt.w[0],E[_].w[1]-Dt.w[1])*Dt.k:null,U=T!=null&&Date.now()-Dt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,Ei(o));let $=o!==Dt&&!!o.platAt,ct=o===Dt||U&&T>3&&!o.goAt&&!$,bt=$||o!==Dt&&U&&T<.08&&Dt.acc<=40&&!(o===Ke&&Dt.homeW&&Math.hypot(Dt.homeW[0]-Dt.w[0],Dt.homeW[1]-Dt.w[1])*Dt.k<.05),ht=o.goAt?(Date.now()-o.goAt)/6e4:null;ht!=null&&(ht>60||bt)&&(o.goAt=0,Ei(o));let yt=!bt&&o!==Dt&&!!o.goAt,it=yt?U&&T<=3?rp(T):Math.max(0,o.walk-ht):0,ce=si(_),xe=ce.filter(rt=>!Y[rt.fam]||K.has(rt.fam)||m),Vt=ct||bt?0:yt?it:o.walk,Ge=V.alerts.filter(rt=>[...rt.fams].some(Nt=>z.has(Nt))||rt.stops&&rt.stops.has(_)),Te=Ge.some(rt=>N0.test(rt.es||rt.txt)),fe={to:[],out:[],otros:[],all:xe},dn=N!=="Barcelona"?new Set(S.st.map(rt=>Xt.get(rt)).filter(rt=>rt!=null)):null,Ne=null;if(dn&&o!==Dt){let rt=up(_,dn);if(rt&&rt.length){let Nt=o.xfer!=null?Xt.get(o.xfer):null,ee=Nt!=null&&rt.includes(Nt)?[Nt]:rt,pe=Ru(_,dn,ee,Vt,u);pe&&(Ne=Object.assign(pe,{fin:dn,finName:E[L].n,cands:rt,fixed:Nt!=null&&rt.includes(Nt)}),tp(pe.T,()=>Le(!0)),L=pe.T,dn=new Set([pe.T]))}}xe.forEach(rt=>fe[ap(_,rt,L,dn)].push(rt));let fi="";if(dn&&!fe.to.length&&xe.length<ce.length){let rt=ce.filter(Nt=>!xe.includes(Nt)&&ap(_,Nt,L,dn)==="to");rt.length&&(fe.to=rt,fi=[...new Set(rt.map(Nt=>Nt.fam))].sort(F).join(", "))}let kl=rt=>{if(rt==="all")return __t(312);let Nt=pe=>(pe.find(Rn=>Rn.fam)||{}).fam;if(rt==="to")return __t(313)+wi(N==="Barcelona"?"Barcelona":E[L].n,Nt(fe.to)||[...z][0])+(()=>{let pe=q&&!fi?[...z].filter(Rn=>fe.to.some(ms=>ms.fam===Rn)).sort(F):[];return pe.length?`<span class="hwf" title="${__t(314)}">${pe.map(An).join("")}</span>`:""})();let ee=[];for(let pe of fe[rt])ee.some(Rn=>Rn[0]===pe.dest)||ee.push([pe.dest,pe.fam]);return ee.length?__t(313)+ee.slice(0,2).map(([pe,Rn])=>wi(pe,Rn)).join(" "):__t(315)},ar=Zn.get(o.key);ar&&!ce.some(rt=>String(rt.num)===ar&&!rt.gone)&&(ri.num=ar,ri.until=Date.now()+90*6e4,Rs(o.key,null));let Vr=rt=>{let Nt=ar&&fe[rt].find(cn=>String(cn.num)===ar&&!cn.gone);if(Nt&&Nt.cancel)return{cls:"v-miss",pin:1,x:Nt,big:__t(316),small:`${et(Nt.est)} \xB7 ${Nt.fam}${__t(317)}${Nt.dest}${Nt.num?" \xB7 "+__t(299)+Nt.num:""}`,warn:""};let ee=Nt||fe[rt].find(cn=>!cn.cancel&&!cn.gone&&cn.est-u.min>=Vt);if(!ee){let cn=fe[rt].find(or=>!or.cancel);return cn&&!ct?{cls:"v-miss",big:__t(318),small:`${__t(319)}${et(cn.est)}${__t(320)}${er(cn.est-u.min)}${__t(321)}`}:{cls:"v-no",big:__t(322),small:__t(323)}}let pe=ee.est-u.min-Vt,Rn=ct||bt?"v-info":yt?pe<1.5?"v-warn":"v-ok":pe<1.5?"v-bad":pe<5?"v-warn":"v-ok",ms=ee.ghost?fe[rt].find(cn=>!cn.cancel&&!cn.ghost&&cn.live&&cn.est>ee.est):null;if(Nt&&pe<0&&!ct&&!bt){let cn=fe[rt].find(or=>!or.cancel&&!or.gone&&!or.ghost&&or!==ee&&or.est-u.min>=Vt);return{cls:"v-miss",pin:1,miss:1,nxt:cn,x:ee,ghost:!!ee.ghost,big:__t(324),small:`${et(ee.est)} \xB7 ${ee.fam}${__t(317)}${ee.dest}${ee.plat?__t(140)+ee.plat:""}${ee.num?" \xB7 "+__t(299)+ee.num:""}`,warn:cn?`\u27A1\uFE0F ${__t(325)}: ${cn.est-u.min-Vt<1?__t(326):__t(327)+" "+er(cn.est-u.min-Vt)} \xB7 ${et(cn.est)}${cn.arr!=null?" \u2192 "+et(cn.arr):""}${cn.plat?__t(140)+cn.plat:""}${cn.num?" \xB7 "+__t(299)+cn.num:""}`:""}}return{pin:Nt?1:0,cls:Rn,ghost:!!ee.ghost,big:ct||bt?pe<1?__t(328):__t(329)+er(pe):yt?pe<1.5?__t(330):__t(331)+er(pe)+__t(332):pe<1.5?__t(333):__t(334)+er(pe),warn:ee.unconf?"\u26A0\uFE0F "+__t(335):Nt&&!ee.live&&ee.rodLive&&!ee.ghost?"\u{1F4E1} "+__t(336):!ee.ghost&&ee.noPos&&Nt?"\u{1F4E1} "+__t(337):!ee.ghost&&ee.late&&Nt?__t(338):ee.ghost?`\u26A0\uFE0F ${__t(339)}${ms?`${__t(340)}${et(ms.est)}`:""}`:Te?__t(341):"",small:`${ee.bus?__t(342):""}${et(ee.est)} \xB7 ${ee.fam}${__t(317)}${ee.dest}${ee.plat?__t(140)+ee.plat:""}${ee.dl>=1?` \xB7 +${Math.round(ee.dl)} min`:""}${ee.arr!=null?`${__t(343)}${et(ee.arr)}`:""}${ee.num?" \xB7 "+__t(299)+ee.num:""}`,x:ee}},n_=dn||new Set([L]),i_=rt=>{let Nt=rt.tr;if(!Nt)return null;let ee=Nt.pat.stops,pe=ee.indexOf(_);if(pe<0)return null;let Rn=-1;for(let ms=pe+1;ms<ee.length;ms++)if(n_.has(ee[ms])){Rn=ms;break}return Rn<0?null:rt.est+(Nt.pat.t[2*Rn]-Nt.pat.t[2*pe+1])};fe.to.forEach(rt=>{rt.arr=i_(rt)});let zl=fe.out.length?"out":"otros",Qe=Vr("to"),no=Vr(zl);if(bt||o===Dt&&Dt.acc<=40&&(Dt.dist[o.st[o.i]]||9)<.08){for(let rt of[Qe.x,no.x].concat(o===Dt?[Vr("all").x]:[]))if(rt&&Zn.has(o.key)&&String(Zn.get(o.key))===String(rt.num)&&!rt.cancel&&rt.est-u.min<=2&&rt.est-u.min>-.5){let Nt="w"+rt.num+"|"+Math.round(rt.sm);Sp.has(Nt)||(Sp.add(Nt),El(`${__t(344)}${rt.fam}${__t(317)}${rt.dest}`,`${Math.round(rt.est-u.min)<=1?__t(345):__t(346)+Math.round(rt.est-u.min)+" min"}${__t(317)}${E[_].n}${rt.plat?__t(140)+rt.plat:""}`))}}let Dp=Ce()&&u.live,Np=z.size===1,s_=rt=>{let Nt=rt.est-u.min;return ct?rt.cancel?"cx":Nt<0?"u-miss":"u-info":rt.cancel?"cx":Nt<Vt?"u-miss":Nt<Vt+1.5?"u-now":Nt<Vt+5?"u-soon":"u-ok"},r_=rt=>{if(rt.gone)return`<li class="hr u-gone${rt.live?" on":""}${za(rt)?" sel":""} go" data-dk="${f.push(rt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${et(rt.est)}${__t(347)}${os(Math.max(1,Math.round(u.min-rt.est))+" min")}</small></span><span class="hrd">${wi((Np?"":rt.fam+" \xB7 ")+rt.dest,rt.fam)}${__t(348)}${g(rt.num)}</small></span><span class="hrm">${rt.dl>=1?`<em class="dl ${Ii(rt.dl)}">+${Math.round(rt.dl)}</em>`:""}</span></li>`;let Nt=!rt.cancel&&rt.est-u.min<Vt,ee=bu(rt.num,"");return`<li class="hr ${s_(rt)}${rt.live?" on":""}${rt.ghost?" gh":""}${za(rt)?" sel":""}${ar&&String(rt.num)===ar?" pin":""}${Pi.some(pe=>{let Rn=Su(pe,t.days.indexOf(u.ymd));return Rn&&String(Rn.num)===String(rt.num)})?" fav":""} go" style="--lc:${Y[rt.fam]||"#6b7385"}" data-dk="${f.push(rt)-1}" title="${rt.cancel?__t(316):Nt?__t(324):__t(349)}"><span class="hrt"><b>${rt.cancel?"\u2715":Nt?et(rt.est):er(rt.est-u.min)}</b><small>${rt.cancel?__t(350):rt.late?__t(351):Nt?__t(352):rt.ghost?__t(353):et(rt.est)}</small></span><span class="hrd">${rt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${wi((Np?"":rt.fam+" \xB7 ")+rt.dest,rt.fam)}${ee.length?`<i class="cr" title="${g(ee.map(pe=>Cl(pe.kind)).join(" \xB7 "))}">${ee.slice(0,2).map(pe=>Al[pe.kind]).join("")}</i>`:""}${rt.arr!=null?`${__t(354)}${et(rt.arr)}${rt.num?" \xB7 "+__t(299)+g(rt.num):""}${(()=>{let pe=rt.num&&Si(rt.num);return pe&&pe.n>=3&&pe.late/pe.n>=.5?`${__t(355)}${pe.late}/${pe.n})</b>`:""})()}</small>`:""}${rt.obs?`<small class="hro">${g(rt.obs)}</small>`:""}${rt.unconf?`<small class="hro unc">${__t(356)}</small>`:""}</span><span class="hrm">${!rt.cancel&&rt.dl>=1?`<em class="dl ${Ii(rt.dl)}">+${Math.round(rt.dl)}</em>`:""}${rt.plat?`${__t(228)}${g(rt.plat)}</i>`:""}</span></li>`},io=(rt,Nt,ee)=>`<div class="hcol"><div class="hdir">${kl(rt)}${ee?`<button type="button" class="hhide" data-hhide="${o.key}:${ee}" title="${__t(357)}">\u2715</button>`:""}</div><div class="hv ${Nt.cls}${Nt.ghost||Nt.pin&&Nt.x&&Nt.x.noPos&&!Xa([Nt.x.fam]).length?" gh":""}${Nt.x?" go":""}"${Nt.miss&&Nt.nxt&&Nt.nxt.num?` data-pinnext="${o.key}:${g(Nt.nxt.num)}" title="${__t(358)}"`:Nt.x?` data-dk="${f.push(Nt.x)-1}"`:""}><b>${Nt.big}</b>${Nt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(359)}">\u{1F4CC} ${__t(360)} \u2715</button>`:""}<small>${g(Nt.small)}</small>${Nt.pin&&Nt.x&&Nt.x.num?(pe=>pe?`<span class="hwhere">\u{1F4CD} ${g(pe)}</span>`:"")(Nu(Nt.x.num)):""}${Nt.warn?`<span class="hvw">${g(Nt.warn)}</span>`:""}</div><ol>${fe[rt].slice(0,(o.more?rt==="all"||o.hide?20:10:rt==="all"?7:o.hide?8:4)+fe[rt].filter(pe=>pe.gone).length).map(r_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Dt){let rt=Vr("all");var a_=rt.x?`<span class="nw">${rt.big}</span> \xB7 <span class="nw"><b>${et(rt.x.est)}</b> ${g(rt.x.fam)}${__t(361)}${g(rt.x.dest)}${rt.x.plat?'<span class="nw">'+__t(140)+g(rt.x.plat)+"</span>":""}`:rt.big}let Je=Ne&&Qe.x&&Qe.x.arr!=null?U0(Ne.T,Qe.x.arr,Ne.fin):null;if(Je){let rt=o._xc;rt&&rt.leg===String(Qe.x.num)&&rt.conn!==String(Je.c.num)&&rt.est<Je.c.est&&rt.live?(Je.lost=!0,Je.missed=rt.est):(!rt||rt.leg!==String(Qe.x.num)||!rt.live||rt.conn===String(Je.c.num))&&(o._xc={leg:String(Qe.x.num),conn:String(Je.c.num),est:Je.c.est,live:!!(V.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}Je&&(Ll.set(E[Ne.T].id,{fam:Je.c.fam,est:Je.c.est,plat:Je.c.plat,lost:Je.lost}),Je.lost&&Zn.get(o.key)===String(Qe.x.num)&&O0("xf"+Qe.x.num+"|"+Je.c.num,`\u21C4 ${__t(362)} ${E[Ne.T].n}`,`${__t(363)}: ${Je.c.fam} ${et(Je.c.est)} \u2192 ${et(Je.fin)}${Je.c.plat?" \xB7 v\xEDa "+Je.c.plat:""}`));let o_=Je?`<br><span class="nw hxf ${Je.lost?"xbad":Je.m<4?"xwarn":"xok"}">\u21C4 ${Je.lost?`${__t(364)} ${et(Je.missed)} \xB7 ${__t(142)} `:`${g(E[Ne.T].n)} \xB7 `}${An(Je.c.fam)} <b>${et(Je.c.est)}</b> \u2192 <b>${et(Je.fin)}</b>${Je.lost?"":` \xB7 ${Math.floor(Je.m)} ${__t(365)}`}</span>`:Ne?`<br><span class="nw hxf xbad">\u21C4 ${__t(366)} ${g(E[Ne.T].n)}</span>`:"",l_=o===Dt?a_:Ne&&Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(140)+g(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${et(Qe.x.est)}</b>${Qe.x.arr!=null?` \u2192 ${g(E[Ne.T].n)} <b>${et(Qe.x.arr)}</b>`:""}</span>${o_}`:Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(140)+g(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${et(Qe.x.est)}</b>${Qe.x.arr!=null?`${__t(368)}${et(Qe.x.arr)}</b>`:""}${__t(367)}${g(N)}</span>`:__t(369)+g(N),We=o===Dt?(rt=>rt.pin?rt:null)(Vr("all")):Qe.pin?Qe:no.pin?no:null;We&&We.x&&Zn.has(o.key)&&bp(We,E[_].n);let c_=We?o===Dt?"all":We===Qe?"to":zl:"",Hr=!!(We&&(We.ghost||We.x.noPos&&!Xa([We.x.fam]).length||We.x.cancel)),Gu=!!(We&&We.miss),Gr=Hr?fe[c_].find(rt=>!rt.cancel&&!rt.ghost&&!rt.gone&&rt.est>We.x.est-.01&&rt!==We.x&&rt.est-u.min>=(ct||bt?0:Vt)):null,h_=Gu?`<span class="nw">${__t(370)} <b>${et(We.x.est)}</b></span>${We.nxt?`<br><span class="nw hnx">${__t(363)} <b>${et(We.nxt.est)}</b>${We.nxt.arr!=null?` \u2192 <b>${et(We.nxt.arr)}</b>`:""}</span>`:""}`:"",u_=Hr?`<span class="nw">\u26A0\uFE0F ${We.x.cancel?__t(316):We.ghost?__t(371):__t(372)}</span>${We.x.cancel?"":` \xB7 <span class="nw"><b>${et(We.x.est)}</b>${We.x.arr!=null?` \u2192 <b>${et(We.x.arr)}</b>`:""}</span>`}${Gr?` \xB7 <span class="nw">${__t(142)} <b>${et(Gr.est)}</b>${Gr.arr!=null?` \u2192 <b>${et(Gr.arr)}</b>`:""}${Gr.plat?__t(140)+g(Gr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${We?" pinned":""}${Hr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${g(E[_].n)}${We&&We.x.num?`<i class="hpn">\u{1F4CC} ${g(We.x.num)}</i>`:""}</b><small class="c${Gu||Hr&&We.x.cancel?"bad":Hr?"warn":Te?"bad":Qe.cls.slice(2)}">${Hr?u_:Gu?h_:l_}</small>${We&&We.x&&We.x.num?(rt=>rt?`<small class="nofit hwh2">\u{1F4CD} ${g(rt)}</small>`:"")(Nu(We.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((rt,Nt)=>{let ee=Xt.get(rt);return ee==null?"":`<button type="button" data-hs="${o.key}:${Nt}" class="${Nt===o.i?"on":""}">${g(E[ee].n)}</button>`}).join("")}</div>`:""}
        ${o===Dt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let rt=Dt.dist[o.st[o.i]]||0;return rt<1?Math.round(rt*100)*10+" m":rt.toFixed(1).replace(".",",")+" km"})()}${__t(374)}${o.walk}${__t(375)}`:""}
        ${$?`<div class="hwalk away">${__t(377)}<a data-hplat="${o.key}${__t(376)}`:bt?`${__t(378)}${o.key}${__t(379)}`:yt?`${__t(380)}${Math.round(it)} min</b>${U&&T<=3?__t(381):""} \xB7 <a data-hgo="${o.key}${__t(376)}`:""}${ct&&o!==Dt?`${__t(382)}${T<10?T.toFixed(1).replace(".",","):Math.round(T)}${__t(383)}`:""}<div class="hwalk"${ct||bt||yt?" hidden":""}><button type="button" class="hgo" data-hgo="${o.key}:1">\u{1F6B6} ${__t(384)}</button><button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(385)}</button><span class="hstep" title="${__t(386)}">${__t(387)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(388)}</span></div>
        ${(()=>{let rt=Pi.filter(Nt=>o.st.includes(Nt.sid));return rt.length?`<div class="hfav">${rt.map(Nt=>{let ee=Su(Nt,t.days.indexOf(u.ymd)),pe=ee&&xe.find(Rn=>String(Rn.num)===String(ee.num));return`\u2B50 <b>${Nt.t}</b> ${g(Nt.fam)} ${pe?pe.cancel?__t(389):pe.gone?__t(225):pe.dl>=1?`<em class="dl ${Ii(pe.dl)}">+${Math.round(pe.dl)}${__t(390)}${et(pe.est)}`:__t(391):__t(392)}`}).join("<br>")}</div>`:""})()}
        ${q&&fi?`${__t(393)}${[...z].sort(F).map(An).join(" ")}${__t(394)}${N}${__t(395)}${fi}${__t(396)}`:m?`${__t(397)}${[...K].sort(F).slice(0,3).map(An).join(" ")}${__t(398)}`:""}
        ${Ge.length?`<div class="hal ${Te?"bad":""}${Ou.v?" open":""}" data-halx>\u26A0\uFE0F ${Va(Ge[0])} ${g(Ge[0].txt)} <small>${Ha(Ge[0])}</small>${Ge.length>1?` <a data-hal>+${Ge.length-1}${__t(399)}`:""}</div>`:`${__t(400)}${[...z].sort(F).join(", ")}</div>`}
        ${(()=>{let rt=o.st.flatMap(Nt=>bu("",Nt));return rt.length?`<div class="hcr">${rt.slice(0,3).map(Nt=>`${Al[Nt.kind]} <b>${g(Cl(Nt.kind))}</b> <small>${Nt.up>1?Nt.up+__t(269):""}${jf(Nt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Dt?`<div class="hcols one">${io("all",Vr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${io("to",Qe)}</div><a class="hshow" data-hshow="${o.key}${__t(401)}`:o.hide==="to"?`<div class="hcols one">${io(zl,no)}</div><a class="hshow" data-hshow="${o.key}${__t(401)}`:`<div class="hcols">${io("to",Qe,"to")}${io(zl,no,"out")}</div>`}
        ${Ne?F0(o,Ne,Qe,Je,u):""}
        ${xe.length>(o===Dt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(402):__t(403)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Dp?C.get(E[_].id)?.d?__t(404):__t(405):__t(406)} \xB7 \u25CF = ${__t(407)}">${Dp?C.get(E[_].id)?.d?__t(408):__t(409):__t(224)}</span><a data-hmap="${_}${__t(373)}${o===Dt?__t(410):`<a data-hset="${o.key}${__t(411)}`}${o===Xe?`${__t(412)}`:""}</div>
      </div>`:"")+"</div>"}let Di={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},fp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,pp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,nr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Dl=()=>{let o=new Set;return[...Ke.st,...Xe.st].forEach(u=>{let f=Xt.get(u);f!=null&&E[f].fams.forEach(_=>o.add(_))}),[...o].sort(F)},ja=()=>({stations:[...Ke.st,...Xe.st],lines:Dl().filter(o=>!nr.has(o))}),k0=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),u=>u.charCodeAt(0));async function mp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function gp(o){let f=await(await fetch(V.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...ja()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Iu(){let o=ai(Ke),u=ai(Xe);if(o==null||u==null)return o!=null?Ke:u!=null?Xe:null;if(Dt.w&&Date.now()-Dt.fix<3*36e5){let f=_=>Math.hypot(E[_].w[0]-Dt.w[0],E[_].w[1]-Dt.w[1]);return f(o)<=f(u)?Ke:Xe}return new Date().getHours()<13?Ke:Xe}function _p(o){let u=Iu(),f=u===Ke?Xe:Ke,_=u&&ai(u),S=f&&ai(f);if(_==null||S==null)return!0;let b=(o.es||"")+" "+(o.txt||""),L=t.days.indexOf(ne().ymd),N=ne(),P=[...new Set([...b.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(q=>q[1]))];if(P.length)return P.some(q=>{let m=Wa(q);if(!m)return!1;let T=m.pat.stops,U=T.indexOf(_),$=T.indexOf(S);if(U<0||$<0||U>$)return!1;let ct=m.t0+m.pat.t[2*U+1];return ct>N.min-60&&ct<N.min+150});let z=b.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(z){let q=z[1].toLowerCase(),m=E.findIndex(T=>T.n&&q.startsWith(T.n.toLowerCase()));if(m>=0){let T=(Q[L]||[]).find(U=>{let $=U.pat.stops;return $[$.length-1]===m&&$.includes(_)&&$.includes(S)});if(T){let U=T.pat.stops;return U.indexOf(_)<U.indexOf(S)}}}return!0}let $n={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function z0(){let{lines:o,stations:u}=ja(),f=new Set(o),_=new Set(u.map(L=>Xt.get(L))),S=V.alerts.filter(L=>([...L.fams].some(N=>f.has(N))||[...L.stops||[]].some(N=>_.has(N)))&&_p(L));if(!$n.seen){try{$n.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{$n.seen=new Set}if(!$n.seen.size){S.forEach(L=>$n.seen.add(L.id+"|"+L.txt.length)),xp();return}}let b=S.filter(L=>!$n.seen.has(L.id+"|"+L.txt.length));if(b.length&&(b.forEach(L=>$n.seen.add(L.id+"|"+L.txt.length)),xp(),!(!$n.on||!("Notification"in window)||Notification.permission!=="granted")))for(let L of b.slice(0,3)){let N=(L.src==="Adif"?__t(278):"Rodalies")+(L.fams.size?" \xB7 "+[...L.fams].sort(F).slice(0,4).join(" "):""),P={body:L.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+L.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(z=>z?z.showNotification(N,P):new Notification(N,P)).catch(()=>{try{new Notification(N,P)}catch{}})}}function xp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...$n.seen].slice(-400)))}catch{}}async function $0(){if($n.on)$n.on=!1,ln(__t(413));else{if(!("Notification"in window)){ln(fp&&!pp()?__t(414):__t(415));return}if(await Notification.requestPermission()!=="granted"){ln(__t(416));return}$n.on=!0,ln(__t(417)+ja().lines.join(", ")+__t(418))}try{localStorage.setItem("rod_ln",$n.on?"1":"")}catch{}Le(!0)}async function V0(){if(!V.repOk)return $0();if(!Di.busy){Di.busy=!0;try{let o=await mp();if(!o){ln(fp&&!pp()?__t(419):__t(420));return}if(await navigator.serviceWorker.ready,Di.on){let u=await o.pushManager.getSubscription();u&&(fetch(V.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:u.endpoint})}).catch(()=>{}),await u.unsubscribe().catch(()=>{})),Di.on=!1,ln(__t(413))}else{if(!V.url){ln(__t(421));return}if(await Notification.requestPermission()!=="granted"){ln(__t(416));return}let f=(await Ct(V.url.replace(/\/+$/,""),"/push/key")).key,_=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:k0(f)});await gp(_),Di.on=!0,ln(__t(422)+ja().lines.join(", "))}try{localStorage.setItem("rod_push",Di.on?"1":"")}catch{}}catch(o){ln(__t(423)+(o.message||o))}finally{Di.busy=!1,Le(!0)}}}async function vp(){if(Di.on)try{let o=await mp(),u=o&&await o.pushManager.getSubscription();u&&await gp(u)}catch{}}let Pu=!1,yp="";function Lu(){let o=ut?"t"+(ut.tid||ut.vtid):Lt>=0?"s"+Lt:Kt?"a":H?"n":"";o!==yp&&(Pu=!1,yp=o);let u=innerWidth<=640&&!!o&&!Pu&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==u&&(f.classList.toggle("compact",u),requestAnimationFrame(()=>{if(d.style.display!=="none"){let _=f.getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-_-16)+"px"}}))}let Sp=new Set,Du=(()=>{let o=vt(new Date).ymd;try{let u=JSON.parse(localStorage.getItem("rod_pn")||"{}");return u.d===o?u:{d:o}}catch{return{d:o}}})();function Mp(o,u,f){if(!(!($n.on||Di.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){ln(o+" \xB7 "+u);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(_=>_?_.showNotification(o,{body:u,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:u})).catch(()=>{try{new Notification(o,{body:u})}catch{}})}}function bp(o,u){let f=o.x,_=ne();if(!_.live||f.gone||f.est<_.min-1)return;let S=f.num+"|"+Math.round(f.sm),b=Du[S]||{},L=`${__t(424)} ${et(f.sm)}`,N=`${f.fam} \u2192 ${f.dest}`,P="",z="";f.cancel?b.c||(b.c=1,P=`\u26A0\uFE0F ${L} ${__t(148)}`,z=`${N}. ${__t(425)}`):o.ghost&&!b.g?(b.g=1,P=`\u26A0\uFE0F ${L} ${__t(426)}`,z=`${N}: ${__t(427)}`):f.dl>=5&&f.dl>=(b.dl||0)+5?(b.dl=Math.round(f.dl),P=`\u23F3 ${L} ${__t(428)} +${b.dl} min`,z=`${N}: ${__t(429)} ${u} ${__t(430)} ${et(f.est)}.`):f.plat&&b.p&&b.p!==String(f.plat)&&(P=`${__t(431)}: ${L}`,z=`${N}: ${__t(432)} ${f.plat} ${__t(433)} ${b.p}).`),f.plat&&(b.p=String(f.plat)),Du[S]=b;try{localStorage.setItem("rod_pn",JSON.stringify(Du))}catch{}P&&Mp(P,z,"pin-"+f.num)}let Br={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let u=o.target.closest&&o.target.closest("[data-nowx]");if(!u||o.target.closest("a"))return;let f=u.dataset.nowx?u.dataset.nowx.split("|"):[];if(f.length){if(u.classList.contains("col"))Br.open=!0;else{Br.open=!1,f.forEach(_=>Br.seen.add(_));try{localStorage.setItem("rod_seen",JSON.stringify([...Br.seen].slice(-200)))}catch{}}Le(!0)}});function H0(o){let u=o.lines;if(!u.length&&Dt.st&&Dt.st.length){let m=new Set;Dt.st.forEach(T=>{let U=Xt.get(T);U!=null&&E[U].fams.forEach($=>m.add($))}),u=[...m].sort(F)}let f=new Set(u),_=V.alerts.filter(m=>!f.size||[...m.fams].some(T=>f.has(T))),S=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,b=_.reduce((m,T)=>Math.max(m,Ja(T)),0),L=b===3?"\u26D4 ":b===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",N=`<div class="hnowh"><span class="hnowl"><b>${_.length?L+_.length+(_.length===1?__t(280):__t(281)):__t(434)}</b>${u.length?u.map(An).join(""):""}</span>${S}</div>`,P=_.filter(m=>!Br.seen.has(m.id)),z=_.length&&(Br.open||P.length>0),q=_.reduce((m,T)=>Math.max(m,Ja(T)),0);return`<div class="hnow${q===3?" bad":q===2?" warn":q===1?" info":""}${_.length&&!z?" col":""}" data-nowx="${g(_.map(m=>m.id).join("|"))}">${N}${Ep(o,!0)}${z?_.slice().sort((m,T)=>Ja(T)-Ja(m)).map(m=>`<p class="sv${Ja(m)}">${Va(m)} ${g(m.txt)} <small>${Ha(m)}</small></p>`).join("")+`<small class="hnowt">${__t(435)}</small>`:""}</div>`}let Zn=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(u=>u[2]===o).map(u=>[u[0],u[1]])}catch{return[]}})());function Nl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],u=(_,S)=>{_.style.fontSize=S===1?"":(_._f0*S).toFixed(1)+"px",_.querySelectorAll("b").forEach(b=>b.style.fontSize=S===1?"":(_._b0*S).toFixed(1)+"px")},f=1;for(let _ of o){if(_.style.whiteSpace="",u(_,1),!_.clientWidth)continue;_._f0=parseFloat(getComputedStyle(_).fontSize);let S=_.querySelector("b");for(_._b0=S?parseFloat(getComputedStyle(S).fontSize):0;_.scrollWidth>_.clientWidth+1&&f>.86;)f-=.02,u(_,f)}if(f<1)for(let _ of o)_._f0&&u(_,f);for(let _ of o)_.scrollWidth>_.clientWidth+1&&(_.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Nl()}catch{}});let G0=(o,u)=>{let f=o==="work"?Xe:o==="near"?Dt:Ke,_=f&&ai(f);return _==null?null:si(_).find(S=>String(S.num)===String(u))||null};function Rs(o,u){u?Zn.set(o,u):Zn.delete(o);try{let f=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...Zn].map(([_,S])=>[_,S,f])))}catch{}}let wp=o=>{let u=o&&o.ts?Date.now()/1e3-o.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return u>=0?" \xB7 "+os(iu(Math.round(u))):""};function Nu(o){let u=It.find(b=>b.tr&&String(b.tr.num)===String(o));if(!u){let b=Wa(o),L=ne(),N=t.days.indexOf(L.ymd);if(!b)return"";let P=b.day===N-1?1440:0,z=b.t0+b.pat.t[1]-P;return z>L.min?__t(436)+E[b.pat.stops[0]].n+" ("+et(z)+")":""}let f=u.tr,_=b=>E[f.pat.stops[b]].n;if(u.real){let b=u.v;return b.pre?__t(437):b.atStop>=0&&b.before?__t(438)+_(b.atStop):b.atStop>=0&&(b.st==="STOPPED_AT"||u.stop==="st")?ue()?__t(439)+_(b.atStop):__t(440)+_(b.atStop)+wp(b):!ue()&&b.next>0?__t(441)+_(b.next-1)+__t(442)+_(b.next)+wp(b):b.atStop>=0&&b.next>b.atStop?__t(443)+_(b.atStop)+__t(444)+_(b.next):b.atStop>=0?__t(445)+_(b.atStop):u.stop==="via"&&b.next>0?"\u23F8 "+__t(446)+_(b.next-1)+__t(442)+_(b.next):b.next>0?__t(185)+_(b.next-1)+__t(442)+_(b.next):b.next===0?__t(313)+_(0):""}let S=u.p&&u.p.next;return S>0?__t(447)+_(S-1)+__t(442)+_(S):""}let Ka={k:"",v:null};function W0(o){let u=ne(),f=t.days.indexOf(u.ymd);if(f<0||!o.length)return null;let _=Iu(),S=(_&&ai(_))??ai(Ke)??ai(Xe),b=u.ymd+o.join()+S;if(Ka.k===b)return Ka.v;Ka.k=b;let L=new Set(o),N=S!=null?m=>Q[m].filter(T=>{let U=T.pat.stops.indexOf(S);return U>=0&&U<T.pat.stops.length-1}).length:m=>Q[m].filter(T=>L.has(T.fam)).length,P=m=>{let T=new Date(+m.slice(0,4),+m.slice(4,6)-1,+m.slice(6)).getDay();return T===0?0:T===6?6:1},z=N(f),q=Math.max(0,...t.days.map((m,T)=>T!==f&&P(m)===P(u.ymd)?N(T):0));return Ka.v=q>=20&&z<q*.8?{n:z,ref:q,pct:Math.round(z/q*100),st:S!=null?E[S].n:""}:null,Ka.v}function Ep(o,u){let f=o.lines||[],_=W0(f);if(!_)return"";let S=V.alerts.some(b=>[...b.fams].some(L=>f.includes(L))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((b.es||"")+" "+b.txt));return u?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${S?__t(448):__t(449)}</b>: ${_.st?`${__t(450)} ${g(_.st)} ${_.n} ${__t(451)} ${_.ref} ${__t(452)}`:`${__t(453)} ${_.n} ${__t(451)} ${_.ref} ${__t(452)}`} (${_.pct} %). ${S?__t(454):__t(455)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${S?__t(456):__t(457)}</b> \xB7 ${__t(458)}: ${_.st?`${__t(459)} ${g(_.st)} ${__t(460)} ${_.n} ${__t(198)} ${_.ref} ${__t(71)}`:`${_.n} ${__t(198)} ${_.ref} ${__t(461)} ${f.join(", ")}`} (${_.pct} % ${__t(462)}).</div>`}function X0(o){let u=Xa(o.lines||[]);if(!u.length)return"";let f=[Ke,Xe].some(_=>{let S=ai(_),b=S!=null&&C.get(E[S].id);return b&&b.d&&Array.isArray(b.d.trains)&&!b.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(463)} ${u.join(", ")}</b> ${__t(464)}${f?" \xB7 "+__t(465):""}: ${__t(466)}</div>`}function q0(o){if(!Dt.w)return[];let u=Dt.k||1;return It.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])*u<3).sort((f,_)=>Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])-Math.hypot(_.p.w[0]-Dt.w[0],_.p.w[1]-Dt.w[1])).slice(0,2).map(f=>f.tr)}function Y0(o){if(!Yt.tid)return"";let u=It.find($=>$.tr&&String($.tr.num)===Yt.tid)||js(o).out.find($=>$.tr&&String($.tr.num)===Yt.tid);if(!u)return"";let f=u.tr,_=f.pat.stops,S=u.real?u.v.next:u.p.next;if(S==null||S<0)return"";let b=tt(f),L=typeof b=="number"?Math.max(0,b/60):0,N=t.days.indexOf(o.ymd),P=f.day===N-1?1440:0,z=Pe&&Pe.num===Yt.tid?_.indexOf(Xt.get(Pe.sid)):-1;z<S&&(z=_.length-1);let q=Ya(f,u.real?u.v:null,z,f.t0+f.pat.t[2*z]+L-P),m=q-o.min,T=u.real&&u.v.atStop>=0?u.v.atStop:-1,U=Nu(f.num)||__t(313)+E[_[S]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${An(f.fam)} ${__t(299)}${g(f.num)}</b><small class="nofit cok">${g(U)} \xB7 <span class="nw">${__t(467)} ${g(E[_[z]].n)}</span> <span class="nw">${m>=1?__t(104)+er(m)+" \xB7 ":""}<b>${et(q)}</b>${L>=1?` <em class="dl ${Ii(L)}">+${Math.round(L)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(468)}" title="${__t(468)}">\u2715</button>${($=>$.length&&!(Yt.manual&&Date.now()<Yt.manual)?`<div class="onbch">${$.map(ct=>`<button type="button" class="onbalt" data-onbpick="${g(ct.num)}">${__t(469)} ${g(ct.num)}?</button>`).join("")}</div>`:"")(q0(f))}</div>`}let Ul={until:0};function Z0(o){if(o.hasAttribute("data-onbx")){ri.num===Yt.tid&&(ri.num=""),Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid="",Yt.manual=0,Yt.quiet=Date.now()+10*6e4,Rt=null,Le(!0);return}Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid=o.dataset.onbpick,Yt.manual=Date.now()+90*6e4,[...Zn].forEach(([f,_])=>{String(_)!==Yt.tid&&Rs(f,null)}),ri.num=Yt.tid,ri.until=Date.now()+90*6e4;let u=It.find(f=>f.tr&&String(f.tr.num)===Yt.tid);if(u){Rt=u.tr;let f=u.tr.pat.stops,_=u.real?u.v.next:u.p.next,S=[...Ke.st,...Xe.st,...Ll.keys()],b=f.findIndex((L,N)=>N>=_&&S.includes(E[L].id));b>0&&(Pe={num:Yt.tid,sid:E[f[b]].id,at:Date.now()},fs())}ln(`${__t(470)} ${Yt.tid}`),Le(!0)}function Le(o){let u=x("#home");if(!u)return;let f=performance.now();if(!o&&f-op<4e3||!o&&Ul.until>Date.now())return;op=f;let _=ne(),S=[],b=ja(),L=m=>{let T=ai(m);return T==null||!Dt.w?1:Math.hypot(E[T].w[0]-Dt.w[0],E[T].w[1]-Dt.w[1])},N=[Dt,...[Ke,Xe].sort((m,T)=>L(m)-L(T))],P=(document.documentElement.classList.contains("tabmode")?H0(b):Ep(b))+X0(b)+Y0(_)+N.map(m=>B0(m,_,S)).join("")+(Za.some(m=>m.open)&&b.lines.length,"");u.className=Za.some(m=>m.open)?"open":"";let z=x("#bell");z||(z=document.createElement("button"),z.type="button",z.id="bell",z.onclick=V0,x("#inf .more").prepend(z));{let m=V.repOk?Di.on:$n.on;z.hidden=!b.lines.length,z.className=m?"on":"",z.textContent=(m?__t(478):__t(479))+b.lines.join(", "),z.title=(m?__t(480):__t(481))+__t(67)+b.lines.join(", ")+(V.repOk?"":__t(482))}if(u._h===P)return;u._h=P,u.innerHTML=P,Nl(),u._onbDel||(u._onbDel=1,u.addEventListener("pointerdown",()=>{Ul.until=Date.now()+1500},!0),u.addEventListener("pointerup",()=>{Ul.until=Date.now()+400},!0),u.addEventListener("click",m=>{let T=m.target.closest&&m.target.closest("[data-onbx],[data-onbpick]");T&&(m.stopPropagation(),Ul.until=0,Z0(T))},!0));{let m=u.querySelector("[data-onbgo]");m&&(m.onclick=T=>{if(T.target.closest("[data-onbx]")){Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid="",Yt.manual=0,Rt=null,Le(!0);return}let U=T.target.closest("[data-onbpick]");if(U){Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid=U.dataset.onbpick,Yt.manual=Date.now()+90*6e4;let ct=It.find(bt=>bt.tr&&String(bt.tr.num)===Yt.tid);if(ct){Rt=ct.tr,ut=ct.tr;let bt=ct.tr.pat.stops,ht=ct.real?ct.v.next:ct.p.next,yt=[...Ke.st,...Xe.st],it=bt.findIndex((ce,xe)=>xe>=ht&&yt.includes(E[ce].id));it>0&&(Pe={num:Yt.tid,sid:E[bt[it]].id,at:Date.now()},fs()),d._h="",Fe()}Le(!0);return}let $=It.find(ct=>ct.tr&&String(ct.tr.num)===Yt.tid);$&&(H=Kt=nt=!1,Lt=-1,ut=$.tr,d._h="",Fe())})}{let m=[...u.children].find(T=>T.classList.contains("hplace")&&!T.querySelector(".hnew"));m&&m.classList.add("lead")}let q=m=>m==="work"?Xe:m==="near"?Dt:Ke;u.querySelectorAll("[data-hloc]").forEach(m=>m.onclick=()=>{Dt.err="",Tu(!0)}),u.querySelectorAll("[data-ht]").forEach(m=>m.onclick=()=>{if(x("#inf").classList.contains("compact")){Pu=!0,Lu();return}let T=q(m.dataset.ht);T.open=!T.open,Ei(T),Le(!0),(ut||Lt>=0||Kt||H)&&(d._h="",Fe())}),u.querySelectorAll("[data-hxf]").forEach(m=>m.onclick=T=>{T.stopPropagation();let[U,$]=m.dataset.hxf.split(":"),ct=q(U);ct.xfer=$||null,Ei(ct),Le(!0)}),u.querySelectorAll("[data-hs]").forEach(m=>m.onclick=()=>{let[T,U]=m.dataset.hs.split(":"),$=q(T);$.i=+U,Ei($),Le(!0)}),u.querySelectorAll("[data-hw]").forEach(m=>m.onclick=()=>{let[T,U]=m.dataset.hw.split(":"),$=q(T);$.walk=y($.walk+ +U,0,60),Ei($),Le(!0)}),u.querySelectorAll("[data-hmap]").forEach(m=>m.onclick=()=>{let T=+m.dataset.hmap;H=Kt=nt=!1,ut=null,Lt=T,Ee(),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Fe(),a()}),u.querySelectorAll("[data-hset]").forEach(m=>m.onclick=()=>Tp(m.dataset.hset)),u.querySelectorAll("[data-hnear]").forEach(m=>m.onclick=()=>{let T=Xt.get(Dt.st[0]);T!=null&&Uu(T,m.dataset.hnear)}),u.querySelectorAll("[data-hmore]").forEach(m=>m.onclick=()=>{let T=q(m.dataset.hmore);T.more=!T.more,Le(!0)}),u.querySelectorAll("[data-hhide]").forEach(m=>m.onclick=T=>{T.stopPropagation();let[U,$]=m.dataset.hhide.split(":"),ct=q(U);ct.hide=$,Ei(ct),Le(!0)}),u.querySelectorAll("[data-hshow]").forEach(m=>m.onclick=()=>{let T=q(m.dataset.hshow);T.hide="",Ei(T),Le(!0)}),u.querySelectorAll("[data-hgo]").forEach(m=>m.onclick=T=>{T.stopPropagation();let[U,$]=m.dataset.hgo.split(":"),ct=q(U);ct.goAt=$==="1"?Date.now():0,ct.goAt&&(ct.platAt=0),Ei(ct),Le(!0)}),u.querySelectorAll("[data-hplat]").forEach(m=>m.onclick=T=>{T.stopPropagation();let[U,$]=m.dataset.hplat.split(":"),ct=q(U);ct.platAt=$==="1"?Date.now():0,ct.platAt&&(ct.goAt=0),Ei(ct),Le(!0)}),u.querySelectorAll("[data-hnotst]").forEach(m=>m.onclick=T=>{T.stopPropagation(),Dt.homeW=Dt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Dt.w))}catch{}Le(!0)}),u.querySelectorAll("[data-hdel]").forEach(m=>m.onclick=()=>{Xe.st=[],Xe.open=!1,Ei(Xe),Le(!0),vp()}),u.querySelectorAll("[data-dk]").forEach(m=>m.onclick=()=>{let T=S[+m.dataset.dk];if(m.matches("li.hr, .hv")&&!T.gone&&T.num!=null){let U=m.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(U){let $=Zn.get(U)===String(T.num);Rs(U,$?null:String(T.num)),$&&ri.num===String(T.num)&&(ri.num=""),$?ut&&String(ut.num)===String(T.num)&&(ut=null,Rt=null,qe.sk="",d._h="",Fe()):Qa(T,!0),Le(!0);return}}Qa(T)}),u.querySelectorAll("[data-pinnext]").forEach(m=>m.onclick=T=>{if(T.target.closest("[data-unpin]"))return;let[U,$]=m.dataset.pinnext.split(":");Rs(U,$);let ct=G0(U,$);ct&&Qa(ct,!0),Le(!0)}),u.querySelectorAll("[data-unpin]").forEach(m=>m.onclick=T=>{T.stopPropagation(),Rs(m.dataset.unpin,null),Le(!0)}),u.querySelectorAll("[data-hal]").forEach(m=>m.onclick=()=>x("#alr").click()),Qf(u)}function Qa(o,u){if(!o)return;let f=t.days.indexOf(ne().ymd),_=It.find(L=>L.real?o.tid&&L.v.tid===o.tid||o.num&&String(L.tr?L.tr.num:L.v.num)===String(o.num):o.tr&&L.tr===o.tr||o.num&&L.tr&&String(L.tr.num)===String(o.num)),S=o.tr||_&&_.tr||(Q[f]||[]).find(L=>String(L.num)===String(o.num));if(H=Kt=nt=!1,Lt=-1,u||void 0,ut=_?_.tr||{vtid:_.v.tid}:S||null,!ut)return;u&&(qe.sk="t"+(ut.num||ut.vtid)),Rt=_&&_.tr?_.tr:null,Rt&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let b=_?_.p.w:null;b&&Object.assign(s,{tx:b[0],ty:b[1],dist:Math.min(s.dist,22)}),Ee(),d._h="",Fe(),Wt=0,a()}let kr=!1;function Tp(o){kr=o||!1,v.value="",v.placeholder=o==="work"?__t(483):o==="home"?__t(484):__t(485),document.documentElement.classList.add("srch"),p.style.display="none",v.focus()}let Ap=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>Tp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Ap(),kr&&!v.value.trim()&&(kr=!1,v.placeholder=__t(485))},600));function Xb(){}function Uu(o,u){let f=u==="work"?Xe:Ke,_=E[o].id,S=E.filter(b=>b.fams.size&&b!==E[o]&&Math.hypot(b.w[0]-E[o].w[0],b.w[1]-E[o].w[1])<.6).map(b=>b.id);f.st=[_,...S].slice(0,3),f.i=0,f.open=!0,Ei(f),Le(!0),vp()}let Fl=x("#lines");Fl.innerHTML=`${__t(486)}`+G.map(o=>`<button type="button" style="--c:${Y[o]}" data-f="${o}">${o}</button>`).join("");function Cp(){try{Le(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",Fl.after(o),o.onclick=()=>{st=[...K][0],nt=H=Kt=!1,d._h="",Fe()});let u=K.size===1?[...K][0]:"";o.hidden=!u,u&&(o.innerHTML=`${__t(487)}${g(u)}${__t(488)}`)}Fl.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!K.has(o.dataset.f))})}Fl.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let u=o.dataset.f;u==="*"?G.forEach(f=>K.add(f)):K.size===G.length?(K.clear(),K.add(u)):K.has(u)?(K.delete(u),K.size||G.forEach(f=>K.add(f))):K.add(u);try{localStorage.setItem("rod_lines",JSON.stringify([...K]))}catch{}Cp(),Me(),Ee(),wu(),Wt=0,a()});let Fu=[...document.querySelectorAll("[data-sp]")],Ti=0;function Rp(o){let u=ne();o&&(Pt===o||Ti===o)?Pt?(Zt=u.min,oe=u.min,Pt=0,Ti=o):(me=performance.now(),Pt=o,Ti=0):o===0?(Pt=0,oe=null,Ti=0):(Zt=u.min,me=performance.now(),oe=u.min,Pt=o,Ti=0),Fu.forEach(f=>{let _=+f.dataset.sp;f.classList.toggle("on",_===(Pt||Ti)||!Pt&&!Ti&&oe==null&&_===0),f.classList.toggle("pz",!!Ti&&_===Ti),f.textContent=_===0?__t(489):Ti===_?"\u25B6 \xD7"+_:Pt===_?"\u23F8 \xD7"+_:"\xD7"+_}),Wt=0,a()}Fu.forEach(o=>o.onclick=()=>Rp(+o.dataset.sp)),x("#tsl").oninput=o=>{let u=+o.target.value;Zt=u,oe=u,me=performance.now(),Pt===0&&!Ti&&Fu.forEach(f=>f.classList.remove("on")),Wt=0,a()},setInterval(()=>{oe!=null&&Pt&&Zt+(performance.now()-me)/6e4*Pt>1560&&(Zt=240,me=performance.now())},1e3),window.__rodSearch=o=>{let u=M(o.trim());if(!u){p.style.display="none",p._pick=null;return}let f=[],_=[];E.forEach((N,P)=>{if(!N.fams.size)return;let z=M(N.n);z.startsWith(u)||z.includes(" "+u)||z.includes("-"+u)?f.push(P):z.includes(u)&&_.push(P)});let S=f.concat(_).slice(0,7),b=I.filter(N=>M(N.name).startsWith(u)).sort((N,P)=>P.pop-N.pop).slice(0,3),L=S.map(N=>({h:`\u{1F689} ${g(E[N].n)}<em>${[...E[N].fams].sort(F).slice(0,3).map(P=>`<em class="ls" style="background:${Y[P]}">${P}</em>`).join(" ")}</em>`,go:()=>{if(Ap(),kr){let P=kr;kr=!1,v.placeholder=__t(485),Uu(N,P);return}qe.on&&qe.cur!=="map"&&rr("map"),H=!1,Kt=!1,nt=!1,Lt=N,ut=null,Rt=null,Ee(),Object.assign(s,{tx:E[N].w[0],ty:E[N].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Fe(),a()}})).concat(b.map(N=>({h:`${g(N.name)}${__t(490)}`,go:()=>{Object.assign(s,{tx:N.cx,ty:N.cy,dist:y(N.size*3+14,14,60)}),a()}})));p.innerHTML=L.map((N,P)=>`<li data-i="${P}">${N.h}</li>`).join("")||__t(491),p.style.display="block",p._pick=N=>{L[N]&&(L[N].go(),p.style.display="none",v.value="",v.blur())},p.querySelectorAll("li[data-i]").forEach(N=>N.onclick=()=>p._pick(+N.dataset.i))},Cp(),Ee();try{let o=new URLSearchParams(location.search).get("st");if(o){let u=M(o),f=-1,_=0;E.forEach((S,b)=>{if(!S.fams.size)return;let L=M(S.n),N=L===u?3:L.startsWith(u)||u.startsWith(L)?2:L.includes(u)||u.includes(L)?1:0;N>_&&(_=N,f=b)}),f>=0&&setTimeout(()=>{Lt=f,Ee(),Object.assign(s,{tx:E[f].w[0],ty:E[f].w[1],dist:18,tilt:.5}),Fe(),a()},300)}}catch{}let Ou={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Ou.v=!Ou.v,Le(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&ut&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let u=d.querySelector(".mn");u&&(u.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,u=0,f=0,_=0;d.addEventListener("touchstart",S=>{_=innerWidth<=640&&ut&&S.touches.length===1&&!S.target.closest("input")?1:0,_&&(o=S.touches[0].clientX,u=S.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",S=>{if(!_)return;let b=S.touches[0].clientX-o,L=S.touches[0].clientY-u;_===1&&(Math.abs(b)<12&&Math.abs(L)<12||(_=Math.abs(b)>Math.abs(L)*1.3&&b<0?2:0,!_))||(S.preventDefault(),f=Math.min(0,b),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(_!==2){_=0;return}if(_=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let S=d.querySelector("[data-cx]");S&&S.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{_===2&&(d.style.transform="",d.style.opacity=""),_=0})}let qe={on:!1,cur:"now",home:new Map},Ol=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Cn=document.createElement("nav");Cn.id="tabs";let J0=[["now","\u{1F552}",__t(489)],["map","\u{1F5FA}\uFE0F",__t(492)],["line","\u{1F4CA}",__t(493)],["set","\u2699\uFE0F",__t(494)]];Cn.innerHTML=J0.map(([o,u,f])=>`<button type="button" data-tab="${o}"><span>${u}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Cn);let ir=document.createElement("i");ir.className="tind",ir.setAttribute("aria-hidden","true"),Cn.prepend(ir);let Ip=o=>[...Cn.querySelectorAll("[data-tab]")].find(u=>{let f=u.getBoundingClientRect();return o>=f.left&&o<f.right}),Bu=o=>{!o||!o.offsetWidth||(ir.style.width=o.offsetWidth+"px",ir.style.height=o.offsetHeight+"px",ir.style.top=o.offsetTop+"px",ir.style.transform=`translateX(${o.offsetLeft}px)`)},zr=()=>Bu(Cn.querySelector("[data-tab].on")),j0=()=>{try{let o=window.Capacitor,u=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;u&&u.selectionChanged().catch(()=>{})}catch{}},Jn={on:!1,b:null,moved:!1,until:0};Cn.addEventListener("pointerdown",o=>{let u=Ip(o.clientX);if(u){Jn.on=!0,Jn.b=u,Jn.moved=!1,Cn.classList.add("drag"),Cn.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),u.classList.add("hov"),Bu(u);try{Cn.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,_=f&&f.Plugins&&f.Plugins.Haptics;_&&f.isNativePlatform()&&_.selectionStart().catch(()=>{})}catch{}}}),Cn.addEventListener("pointermove",o=>{if(!Jn.on)return;let u=Ip(o.clientX);u&&u!==Jn.b&&(Jn.b.classList.remove("hov"),u.classList.add("hov"),Jn.b=u,Jn.moved=!0,Bu(u),j0())});let Pp=o=>{if(Jn.on){Jn.on=!1,Cn.classList.remove("drag"),Cn.querySelectorAll(".hov").forEach(u=>u.classList.remove("hov"));try{let u=window.Capacitor,f=u&&u.Plugins&&u.Plugins.Haptics;f&&u.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&Jn.b?(Jn.until=Date.now()+500,Jn.b.dataset.tab!==qe.cur?rr(Jn.b.dataset.tab):zr()):zr()}};Cn.addEventListener("pointerup",()=>Pp(!0)),Cn.addEventListener("pointercancel",()=>Pp(!1)),addEventListener("resize",()=>setTimeout(zr,60));try{new ResizeObserver(()=>zr()).observe(Cn)}catch{}let $r=document.createElement("div");$r.id="tabL",document.body.appendChild($r);let sr=document.createElement("div");sr.id="tabA",sr.className="box",document.body.appendChild(sr);let ku=(o,u)=>{o&&(qe.home.has(o)||qe.home.set(o,[o.parentNode,o.nextSibling]),u.appendChild(o))},Lp=()=>{for(let[o,[u,f]]of qe.home)try{u.insertBefore(o,f&&f.parentNode===u?f:null)}catch{}qe.home.clear()};function zu(){let o=K.size===1?[...K][0]:"",u=V.alerts.filter(_=>[..._.fams].some(S=>K.has(S))).length,f=[nt,Kt,st,H,o,u].join("|");$r._k!==f&&($r._k=f,$r.innerHTML=`<button type="button" data-tl="stats" class="${nt?"on":""}">\u{1F4CA} ${__t(495)}</button><button type="button" data-tl="alr" class="${Kt?"on":""}">\u26A0\uFE0F ${u}${u===1?__t(280):__t(281)}</button>${o?`<button type="button" data-tl="line" class="${st?"on":""}">\u{1F4CB} ${g(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,$r.querySelectorAll("[data-tl]").forEach(_=>_.onclick=()=>{let S=_.dataset.tl;nt=S==="stats",Kt=S==="alr",st=S==="line"?o:"",H=!1,ut=null,Lt=-1,nt&&(se.at=0),d._h="",Fe(),zu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let K0="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",Q0=()=>vt(new Date).ymd.replace(/-/g,"");function to(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(K0,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let u;try{u=JSON.parse(o)}catch{return}if(!u||!u.gen||!Array.isArray(u.days)||!u.trips||u.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=Q0(),_=t.days.indexOf(f),S=u.days.indexOf(f),b=_<0?0:lt.filter(P=>P.day===_).length,L=0;if(S>=0)for(let P of u.trips)P[0]===S&&L++;let N=S>=0&&b&&(Math.abs(L-b)/b>.1||!L);if(_<0||_>=t.days.length-2||N){try{sessionStorage.setItem("rod_packmsg",N?"1":"")}catch{}location.reload();return}eo.v=!0}).catch(()=>{})}let eo={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&eo.v?(eo.v=!1,eo.reload=!0):!document.hidden&&eo.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>ln("\u{1F5D3}\uFE0F "+__t(496)),1500))}catch{}if(setTimeout(to,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(to.at||0)>6*36e5&&(to.at=Date.now(),to())}),to.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,u=x("#ver");u&&u.firstChild&&u.firstChild.nodeType===3&&(u.firstChild.textContent=u.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Bl(){Lp();let o=window.__L||"es",u=ii.mode;sr.innerHTML=`<h3>${__t(494)}</h3>
      <h4>\u{1F310} ${__t(497)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,_])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${_}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(498)}</h4><div class="seg2">${[["auto",__t(301)],["light",__t(499)],["dark",__t(500)]].map(([f,_])=>`<button type="button" data-th="${f}" class="${u===f?"on":""}">${_}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(501)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let _=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(301)],["0","Normal"],["1",__t(502)]].map(([S,b])=>`<button type="button" data-big="${S}" class="${_===S?"on":""}">${b}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(503)}</small>`})()}
      <h4>\u{1F514} ${__t(504)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(505)}</small>${Dl().length?"":`<small class="tabAhint">${__t(506)}</small>`}${(()=>{let f=Dl();return f.length>1?`<small class="tabAhint">${__t(507)}</small><div class="alch">${f.map(_=>`<button type="button" data-al="${g(_)}" class="ln${nr.has(_)?" off":""}" style="--c:${Y[_]}">${g(_)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(508)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(509)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,sr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let _=f.dataset.al,S=Dl();nr.has(_)?nr.delete(_):S.filter(b=>!nr.has(b)).length>1&&nr.add(_);try{localStorage.setItem("rod_aloff",JSON.stringify([...nr]))}catch{}Le(!0),Bl()}),sr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let _=f.dataset.big;try{_==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",_)}catch{}window.__txt&&window.__txt(),Bl(),Le(!0)}),sr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ii.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ii.mode)}catch{}Ml(),Bl()}),ku(x("#bell"),x("#tabAbell")),ku(x("#src"),x("#tabArt")),ku(x("#ver"),x("#tabAinf"))}function rr(o){if(!qe.on)return;let u=qe.cur;if(qe.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",Cn.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),zr(),o==="line")(ut||Lt>=0)&&(qe.keep={t:ut,s:Lt,sk:qe.sk}),!nt&&!Kt&&!st&&!H&&(nt=!0,se.at=0),ut=null,Lt=-1,d._h="",Fe(),zu();else if(u==="line"){nt=Kt=H=!1,st="";let f=qe.keep;qe.keep=null,f&&o==="map"&&!ut&&Lt<0&&(ut=f.t,Lt=f.s,qe.sk=f.sk),d._h="",Fe()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Mu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Bl(),o==="now"&&(Le(!0),requestAnimationFrame(Nl)),Wt=0,a()}Cn.onclick=o=>{if(Date.now()<Jn.until)return;let u=o.target.closest("[data-tab]");u&&rr(u.dataset.tab)},window.__rodTabSync=()=>{if(!qe.on)return;let o=ut?"t"+(ut.num||ut.vtid):Lt>=0?"s"+Lt:"",u=o!==qe.sk;qe.sk=o,o&&u&&qe.cur!=="map"?rr("map"):(Kt||st||H)&&qe.cur!=="line"&&qe.cur!=="map"&&rr("line"),qe.cur==="line"&&zu()};function $u(){let o=Ol.matches||document.documentElement.classList.contains("cap");if(o!==qe.on)if(qe.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(zr)),o||(window.__mapHidden=!1),o){let u="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(u=f))}catch{}rr(u)}else delete document.documentElement.dataset.tab,Lp()}Ol.addEventListener?Ol.addEventListener("change",$u):Ol.addListener($u),$u();{let o=x("#rc"),u=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(u).observe(o),u()}let Vu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Hu=new RegExp("("+Object.keys(Vu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),t_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Vu[o]||Vu[o+"\uFE0F"]||""}</svg></span>`;function e_(o){let u=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],_;for(;_=u.nextNode();)_.parentElement&&_.parentElement.closest(".ico,script,style,textarea,input")||(Hu.lastIndex=0,Hu.test(_.nodeValue)&&f.push(_));for(let S of f){let b=document.createElement("span");b.innerHTML=g(S.nodeValue).replace(Hu,(L,N)=>t_(N)),S.replaceWith(...b.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(S=>x(S)).filter(Boolean),u=!1,f=()=>{if(!u){u=!0;try{let S=0;o().forEach(b=>{S+=e_(b)}),S&&qe.on&&Nl()}finally{u=!1}}},_=new MutationObserver(()=>{u||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(S=>_.observe(S,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:Zn,LASTPIN:ri,xferCands:up,bestXfer:Ru,xferFirst:Cu,nowState:ne,XMIN:hp,pinNotify:bp,toast:ln,cardEta:Ya,HOME:Ke,WORK:Xe,ONB:Yt,alertForMe:_p,whereAmI:Iu,departuresFor:si,DEPS:C,tripByNum:Wa,delayOf:tt,TID:dt,SID:Xt,byDay:Q,get days(){return t.days},get hist(){return se},get past(){return D.cur},get cols(){return un.mesh?un.mesh.count:-1},get dist(){return r.dist},get follow(){return Rt},get selTrip(){return ut},ST:E,TR:lt,FAM:G,act:()=>It,setSpeed:Rp,RT:V,pollRT:de,nowState:ne,posAt:Cs,activeTrips:js,LL:Mt,select:o=>{ut=o,Fe()}}}var La=window.__DATA__;var Oe=i=>document.querySelector(i),Es=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Xn=(i,t,e)=>Math.min(e,Math.max(t,i)),Tf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ei=Oe("#c"),gl=new jh({canvas:ei,antialias:!0});gl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ts=new bo;Ts.background=new _e(15659509);var fu=35,hs=new Gn(fu,1,2,1500);Ts.add(new Xo(16777215,9080992,1));var jg=new Yo(16777215,.9);jg.position.set(-40,-70,90);Ts.add(jg);var ls=100/La.w,fl=La.w/2,pl=La.h/2,_n=[],Af=new zi;Ts.add(Af);var lu=new gr({color:16777215,transparent:!0,opacity:.55});for(let i of La.m){let t=new zi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let y of i.g){let M=y.map(x=>{let g=[];for(let B=0;B<x.length;B+=2)g.push(new $t((x[B]-fl)*ls,(x[B+1]-pl)*ls));return g.length>1&&g[0].equals(g[g.length-1])&&g.pop(),g}).filter(x=>x.length>=3);if(!M.length)continue;let I=new xa(M[0]);for(let x=1;x<M.length;x++)I.holes.push(new xr(M[x]));e.push(I);for(let x of M[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of M)n.push(new Ro(new yn().setFromPoints(x.map(g=>new Z(g.x,g.y,0))),lu))}if(!e.length)continue;let c;try{c=new zo(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new Ho({color:13421772}),d=new Dn(c,h);t.add(d);let v=new zi;n.forEach(y=>v.add(y)),v.position.z=.04,Af.add(v),t.scale.z=.01,Af.add(t);let p={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=p,_n.push(p)}var _T=_n.map(i=>i.mesh),Gg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Kg=0,Qg=0;for(let i of _n){for(let t of i.rings)Kg+=Gg(t[0])-t.slice(1).reduce((e,n)=>e+Gg(n),0);Qg+=i.area}var Rb=Math.sqrt(Qg/Kg),ru={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},t0={"08":__t(510),17:__t(511),25:__t(512),43:__t(513)},Nf="sqrt",Uf="pop",wf=0,Cf=0,Ra=1,ul=1,Ib={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Rf=i=>Uf==="pop"?i.pop:i.pop/i.area,su=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new _e(i));function Pb(i){i=Xn(i,0,1)*(su.length-1);let t=Math.min(Math.floor(i),su.length-2);return su[t].clone().lerp(su[t+1],i-t)}var Ia=i=>i>=100?Es(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Lb(){Cf=0;for(let i of _n)Cf+=i.pop;[..._n].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[..._n].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),i0()}var e0=new _e("#d3d8e2"),n0=new _e("#eceff3");window.__mapTheme=i=>{Ts.background=new _e(i?856345:15659509),n0.set(i?"#2b3242":"#eceff3"),e0.set(i?"#1a1f29":"#d3d8e2"),lu.color.set(i?856345:16777215),lu.opacity=i?.7:.55,Ff.color.set(i?329483:2764864),Of.color.set(i?9081766:16777215);for(let t of _n)t.base&&pu(t);Un()};function pu(i){i.mat.color.copy(i.base).lerp(n0,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(e0,.8)}function i0(){Ra=1,ul=1e12;for(let e of _n){let n=Rf(e);Ra=Math.max(Ra,n),ul=Math.min(ul,n)}let i=Math.log10(Math.max(ul,.01)),t=Math.log10(Ra);for(let e of _n)e.base=Pb((Math.log10(Math.max(Rf(e),.01))-i)/(t-i)),pu(e);Oe("#lmin").textContent=Ia(ul),Oe("#lmax").textContent=Ia(Ra),Oe("#lname").textContent=Uf==="pop"?__t(514):__t(515),mu()}function mu(){let i=Ib[Nf],t=i(Ra),e=24*wf;for(let n of _n)n.zt=wf<=.001?.01:Math.max(.12*Math.min(1,wf),e*i(Rf(n))/t)*(n.inF?1:.1);Un()}var Wg=Object.fromEntries(_n.map(i=>[i.code,i])),au=[],s0=[];for(let i of La.bd){let t=Wg[i.a],e=Wg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)s0.push((i.p[n]-fl)*ls,(i.p[n+1]-pl)*ls,0,(i.p[n+2]-fl)*ls,(i.p[n+3]-pl)*ls,0),au.push(t,e)}var cu=new Wi;cu.setPositions(s0);var Ff=new is({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Of=new is({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Ff,Of].forEach((i,t)=>{let e=new Er(cu,i);e.frustumCulled=!1,e.renderOrder=10+t,Ts.add(e)});function Db(){let i=cu.attributes.instanceStart.data.array;for(let t=0;t<au.length;t+=2){let e=Math.max(au[t].z,au[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}cu.attributes.instanceStart.data.needsUpdate=!0}var hu={};for(let i of Object.keys(ru)){let t=_n.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,c=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),c=Math.max(c,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=ru[i],h.title=__t(516)+t0[i],h.onclick=()=>Gb("pr:"+i),document.body.appendChild(h),hu[i]={el:h,p:new Z(n/e,s/e,0),cx:(r+a)/2,cy:(l+c)/2,ext:Math.max(a-r,c-l),ext2:[a-r,c-l],area:e,name:ru[i]}}var Ef=new Z;function Nb(){for(let i in hu){let t=hu[i];Ef.copy(t.p).project(hs),t.el.style.transform=`translate(-50%,-50%) translate(${(Ef.x*.5+.5)*innerWidth}px,${(-Ef.y*.5+.5)*innerHeight}px)`}}var Mn={tilt:0,yaw:0,dist:150,tx:0,ty:0},be={...Mn};function Ub(){let i=innerWidth/innerHeight,t=Math.tan(fu*Math.PI/360);return Math.max(La.h*ls*1.1,100*1.1/i)/(2*t)}var Fb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{be.yaw=Math.round(be.yaw/(2*Math.PI))*2*Math.PI,be.tilt=0,Un()});function Bf(){Object.assign(be,{tilt:0,yaw:0,dist:Ub(),tx:0,ty:0}),Un()}function Ob(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Mn;hs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),hs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),hs.lookAt(n,s,0)}var dl=!0,Xg=performance.now(),ml=new Map;function Un(){dl=!0}function r0(i){requestAnimationFrame(r0);let t=Xn((i-Xg)/1e3,0,.05);Xg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Mn)){let r=be[s]-Mn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Mn[s]+=r*e,n=!0):Mn[s]=be[s]}for(let s of _n){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of ml){let a=(i-r)/1800;a>=1?(ml.delete(s),Ir(s)):Ir(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(dl=!0),window.__mapHidden){dl=!0;return}if(n||dl){Fb.style.transform=`rotate(${Mn.yaw}rad) scaleY(${(.55+.45*Math.cos(Mn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(be.yaw/2))<.02&&be.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(517):__t(518))}Ob(),Db(),Nb(),window.__rodFrame&&window.__rodFrame(),gl.render(Ts,hs),dl=n,Oe("#tilt").value=Math.round(be.tilt*180/Math.PI),Oe("#yaw").value=Math.round(((be.yaw*180/Math.PI+180)%360+360)%360-180)}}function a0(){gl.setSize(innerWidth,innerHeight,!1),hs.aspect=innerWidth/innerHeight,hs.updateProjectionMatrix(),Ff.resolution.set(innerWidth,innerHeight),Of.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Un()}addEventListener("resize",()=>{a0(),on.length&&qs()});ei.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;be.yaw+=n*.0035}else i.ctrlKey?be.dist=Xn(be.dist*Math.exp(e*.01),6,400):be.tilt=Xn(be.tilt+e*.002,0,1.32);Un()},{passive:!1});ei.addEventListener("contextmenu",i=>i.preventDefault());var cs=new Map,ui=null,Ar=0,If=0,Pf=0;var uu=null;ei.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),on.length&&setTimeout(qs,50)),ei.setPointerCapture(i.pointerId),cs.set(i.pointerId,{x:i.clientX,y:i.clientY}),cs.size===1&&(ui={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),cs.size===2){let[t,e]=[...cs.values()];Ar=Math.hypot(t.x-e.x,t.y-e.y),If=Math.atan2(e.y-t.y,e.x-t.x),Pf=(t.y+e.y)/2,uu={mode:null,rot:0,sc:0,tl:0},ui&&(ui.multi=!0)}kf()});ei.addEventListener("pointermove",i=>{let t=cs.get(i.pointerId);if(!t){ws={x:i.clientX,y:i.clientY},Lf||(Lf=requestAnimationFrame(kb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,cs.size===2){let[s,r]=[...cs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=l-If;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=Ar?a-Ar:0,v=c-Pf,p=uu||(uu={mode:null,rot:0,sc:0,tl:0});p.rot+=h,p.sc+=d,p.tl+=v,p.mode?p.mode==="zoom"&&Math.abs(p.rot)>.45&&(p.mode="rotate"):Math.abs(p.rot)>.3?p.mode="rotate":Math.abs(p.tl)>30&&Math.abs(p.sc)<18?p.mode="tilt":Math.abs(p.sc)>12&&(p.mode="zoom"),(p.mode==="zoom"||p.mode==="rotate")&&Ar&&(be.dist=Xn(be.dist*Ar/a,6,400)),p.mode==="rotate"&&(be.yaw+=h,Mn.yaw=be.yaw),p.mode==="tilt"&&(be.tilt=Xn(be.tilt-v*.006,0,1.32),Mn.tilt=be.tilt),Ar=a,If=l,Pf=c,Un();return}if(ui.moved+=Math.abs(e)+Math.abs(n),ui.rot||i.altKey)be.yaw+=e*.005,be.tilt=Xn(be.tilt+n*.004,0,1.32),Mn.yaw=be.yaw,Mn.tilt=be.tilt;else{let s=2*Mn.dist*Math.tan(fu*Math.PI/360)/innerHeight,r=Math.sin(Mn.yaw),a=Math.cos(Mn.yaw),l=1/Math.max(Math.cos(Mn.tilt),.3);be.tx=Xn(be.tx-a*e*s+-r*n*s*l,-70,70),be.ty=Xn(be.ty-r*e*s+a*n*s*l,-70,70),Mn.tx=be.tx,Mn.ty=be.ty}Un()});var o0=i=>{let t=ui&&!ui.rot&&!ui.multi&&ui.moved<(ui.touch?12:6)&&i.type==="pointerup"&&cs.size===1,e=ui&&ui.touch;cs.delete(i.pointerId),Ar=0,uu=null,cs.size||(ui=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ei.addEventListener("pointerup",o0);ei.addEventListener("pointercancel",o0);ei.addEventListener("dblclick",Bf);addEventListener("keydown",i=>{i.key==="Alt"&&(ei.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ei.style.cursor="")});addEventListener("blur",()=>{ei.style.cursor=""});var Bb=new Jo,qg=new $t,ws=null,Lf=0,Cr=null;function kb(){if(Lf=0,!ws||ui)return;qg.set(ws.x/innerWidth*2-1,-(ws.y/innerHeight)*2+1),Bb.setFromCamera(qg,hs);let i=null;if(i!==Cr){let e=Cr;Cr=i,e&&Ir(e),i&&Ir(i),Un()}let t=window.__rodHover&&window.__rodHover(ws.x,ws.y);if(t){Tr.innerHTML=t,Tr.style.display="block";let e=Tr.offsetWidth,n=Tr.offsetHeight;Tr.style.left=Xn(ws.x+14,6,innerWidth-e-6)+"px",Tr.style.top=Xn(ws.y+14,6,innerHeight-n-6)+"px",ei.style.cursor="pointer"}else kf(),ei.style.cursor=""}ei.addEventListener("pointerleave",()=>{if(ws=null,Cr){let i=Cr;Cr=null,Ir(i),Un()}kf()});var Tr=Oe("#tip");function kf(){Tr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Uf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),i0()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Nf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),mu()});Oe("#yaw").oninput=i=>{be.yaw=+i.target.value*Math.PI/180,Un()};Oe("#tilt").oninput=i=>{be.tilt=+i.target.value*Math.PI/180,Un()};Oe("#zin").onclick=()=>{be.dist=Xn(be.dist*.75,6,400),Un()};Oe("#zout").onclick=()=>{be.dist=Xn(be.dist/.75,6,400),Un()};Oe("#rst").onclick=Bf;var Yg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],on=[],Zg={},zb=i=>Zg[i]||(Zg[i]=new gr({color:i}));function l0(i,t){i.og.children.forEach(e=>e.material=t?zb(t):lu)}function Ir(i,t=0){let e=i.mat.emissive;i===Cr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function zf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(fu*Math.PI/360),c=i.length===1?Xn(i[0].size*3.2+14,14,120):Xn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(be,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Un()}var Xs=Oe("#q"),vi=Oe("#list"),an=Oe("#mcs");function gu(i,t=!0){if(vi.style.display="none",Xs.value="",!i.sel){on.length>=6&&c0(on[0].o,!0);let e=new Set(on.map(s=>s.color)),n=Yg.find(s=>!e.has(s))||Yg[0];i.sel={o:i,color:n,tint:new _e(n).multiplyScalar(.12)},on.push(i.sel),l0(i,n)}an.classList.contains("min")&&_l(!1),ml.set(i,performance.now()),Ir(i),t&&zf([i],Math.max(be.tilt,.9)),qs()}function c0(i,t){let e=on.indexOf(i.sel);e>=0&&on.splice(e,1),i.sel=null,l0(i,null),Ir(i),Un(),t||qs()}function h0(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=on.map(d=>{let v=1e9,p=-1e9,y=1e9,M=-1e9;for(let I of d.o.rings)for(let x=0;x<I[0].length;x+=2)v=Math.min(v,I[0][x]),p=Math.max(p,I[0][x]),y=Math.min(y,I[0][x+1]),M=Math.max(M,I[0][x+1]);return{x0:v,x1:p,y0:y,y1:M}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;on.forEach((d,v)=>{let p=r[v],y=(p.x0+p.x1)/2,M=(p.y0+p.y1)/2;s.beginPath();for(let I of d.o.rings)for(let x of I)for(let g=0;g<x.length;g+=2){let B=e/2+(x[g]-y)*l,k=n/2-(x[g+1]-M)*l;g?s.lineTo(B,k):s.moveTo(B,k),g===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let c=l/Rb,h=[.5,1,2,5,10,20,50,100].find(d=>d*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function qs(){if(!on.length){an.innerHTML="",an.style.display="none",_l(!1);return}if(an.style.display="flex",innerWidth<=640){let e=Oe("#inf").getBoundingClientRect().bottom;an.style.top=Math.round(e+8)+"px",an.style.maxHeight=Math.max(110,Math.min(innerHeight*(Oe("#rc").classList.contains("min")?.7:.4),Oe("#rc").getBoundingClientRect().top-e-16))+"px",an.style.width=""}else if(innerHeight<=500){let e=Oe("#inf").getBoundingClientRect().bottom;an.style.top=Math.round(e+8)+"px",an.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",an.style.width="min(290px, 40vw)"}else an.style.top="",an.style.maxHeight="",an.style.width="";window.__fitMcs&&window.__fitMcs();let i=on.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${ru[s.pr]}</em></div><div class="mb">${Es(s.pop)}${__t(524)}${Ia(s.area)} km\xB2 \xB7 ${Ia(s.pop/s.area)}${__t(525)}${s.rankP}${__t(526)}`}).join("");if(on.length>1){let e=s=>Math.max(...on.map(s)),n=[[__t(527),s=>s.o.pop,Es],[__t(528),s=>s.o.area,Ia],[__t(529),s=>s.o.pop/s.o.area,Ia]];if(i+=`${__t(530)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${on.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),on.length===2){let[s,r]=on.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],c=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(531)}${c(a.pop,l.pop)}${__t(532)}${l.name}${__t(533)}${c(a.area,l.area)}\xD7 ${a.area>=l.area?__t(534):__t(535)}.</small>`}i+="</div>"}an.innerHTML=i,an.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),c0(on[+e.dataset.x].o)}),an.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>zf([on[+e.dataset.i].o],Math.max(be.tilt,.9)),e.onmouseenter=()=>{let n=on[+e.dataset.i].o;ml.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=on.splice(s,1);on.splice(r,0,a),qs();let l=Oe("#sil");l&&l.classList.add("flash")}}});let t=Oe("#sil");t&&h0(t)}Xs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Xs.value);return}let i=Tf(Xs.value.trim());if(!i){vi.style.display="none";return}let t=[],e=[];for(let s of _n){let r=Tf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);vi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Es(s.pop)}</em></li>`).join("")||__t(491),vi.style.display="block",vi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>gu(n[+s.dataset.i])),vi._r=n});Xs.addEventListener("keydown",i=>{i.key==="Enter"&&vi._pick?vi._pick(0):i.key==="Enter"&&vi._r&&vi._r[0]&&gu(vi._r[0]),i.key==="Escape"&&(Xs.value="",vi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Xs&&u0()});var Jg=0;addEventListener("resize",()=>{clearTimeout(Jg),Jg=setTimeout(()=>{let i=Oe("#sil");i&&h0(i)},120)});var du=null,Df=Oe("#chip");function $b(i,t,e=.8){du={codes:new Set(i.map(n=>n.code)),label:t},_n.forEach(n=>{n.inF=du.codes.has(n.code),pu(n)}),Df.innerHTML=`${__t(536)}${t}</b> \xB7 ${i.length}${i.length===1?__t(537):__t(538)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Df.style.display="flex",Oe("#chx").onclick=u0,mu(),zf(i,e),i.slice(0,40).forEach(n=>ml.set(n,performance.now()))}function u0(){du&&(du=null,_n.forEach(i=>{i.inF=!0,pu(i)}),Df.style.display="none",mu())}var Vb="prov";function Hb(i){let t=[..._n].sort((a,l)=>l.pop-a.pop),e=[..._n].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[_n.filter(a=>a.pr===s),t0[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(539)]:[e.slice(0,10),__t(540)];if(n==="low")return s==="pop"?[t.slice(-10),__t(541)]:[e.slice(-10),__t(542)];if(n==="size")return[_n.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Es(+s)}${__t(543)}`:+s==0?`${__t(544)}${Es(+r)}${__t(545)}`:`${Es(+s)} \u2013 ${Es(+r-1)}${__t(545)}`];if(n==="n50"){let a=0,l=0;for(let c of t)if(a+=c.pop,l++,a>=Cf/2)break;return[t.slice(0,l),`${__t(546)}`]}return[[],""]}function Gb(i){let[t,e]=Hb(i);t.length&&$b(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Vb=i.dataset.tab,Oe("#dbody").scrollTop=0});var Rr=Oe("#rc"),ou=Oe("#mcstab");function Pa(i){Rr.classList.toggle("min",i),Oe("#rcgrab span").textContent=i?__t(588):__t(589),on.length&&qs()}function _l(i){an.classList.toggle("min",i),an.style.transform="",an.style.opacity="",ou.classList.toggle("on",i&&on.length>0),i&&(ou.textContent=`\u25B8 ${on.length} ${on.length===1?"ficha":"fichas"}`,ou.style.top=an.style.top||"124px")}function $f(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!_u.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(l,c)>10&&(s.lock=Math.abs(l)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(l,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Oe("#rcgrab").onclick=()=>Pa(!Rr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Pa(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var d0=()=>innerWidth>640;$f(Rr,{axis:"y",onEnd:(i,t)=>{if(!d0())if(t>40&&!Rr.classList.contains("min")){let e=Oe("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Pa(!0)}else t<-30&&Rr.classList.contains("min")&&Pa(!1)}});$f(Rr,{axis:"x",onEnd:i=>{d0()&&(i>50?Pa(!0):i<-30&&Rr.classList.contains("min")&&Pa(!1))}});$f(an,{axis:"x",onMove:i=>{i<0&&(an.classList.add("sw"),an.style.transform=`translateX(${i}px)`,an.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{an.classList.remove("sw"),i<-60?(_l(!0),window.__rodHide&&!on.length&&window.__rodHide()):(an.style.transform="",an.style.opacity="")}});ou.onclick=()=>{_l(!1),qs()};Oe("#dtoggle").onclick=()=>{let i=Oe("#dp").classList.toggle("open");Oe("#rc").classList.toggle("dopen",i),Oe("#dtoggle").textContent=i?_u.matches&&innerWidth<=640?__t(590):__t(591):__t(592),window.__rodCard&&window.__rodCard()};var _u=matchMedia("(max-width:640px), (max-height:500px)");function f0(){let i=Oe("#leg");_u.matches?Oe("#rc").insertBefore(i,Oe("#dtoggle")):document.body.appendChild(i),on.length&&qs()}_u.addEventListener("change",f0);f0();a0();Lb();Bf();Object.assign(Mn,be);for(let i of _n)i.z=.01;requestAnimationFrame(r0);Hg({scene:Ts,camera:hs,renderer:gl,goal:be,cur:Mn,invalidate:Un,flyTo:(i,t,e,n)=>{Object.assign(be,{tx:(i-fl)*ls,ty:(t-pl)*ls,dist:e,tilt:n}),Un()},K:ls,CX:fl,CY:pl,mcs:an,q:Xs,list:vi,munis:_n,select:gu,norm:Tf,fmt:Es,clamp:Xn,mcsMin:_l});window.__app={scene:Ts,renderer:gl,camera:hs,munis:_n,labs:hu,goal:be,cur:Mn,select:gu,get mode(){return Nf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(598):__t(599)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
