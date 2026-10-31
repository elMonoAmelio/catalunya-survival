(()=>{var wm=0,Nd=1,Em=2;var Qo=1,Tm=2,Sa=3,Ys=0,ti=1,is=2,ss=0,Ma=1,Ud=2,Fd=3,Od=4,Am=5;var Er=100,Cm=101,Rm=102,Im=103,Pm=104,Lm=200,Dm=201,Nm=202,Um=203,Bd=204,kd=205,Fm=206,Om=207,Bm=208,km=209,zm=210,$m=211,Vm=212,Hm=213,Gm=214,Sc=0,Mc=1,bc=2,la=3,wc=4,Ec=5,Tc=6,Ac=7,lh=0,Wm=1,Xm=2,Hi=0,zd=1,$d=2,Vd=3,Hd=4,Gd=5,Wd=6,Xd=7;var qd=300,Zs=301,Tr=302,ch=303,hh=304,tl=306,Cc=1e3,ji=1001,Rc=1002,Ln=1003,qm=1004;var el=1005;var $n=1006,uh=1007;var Js=1008;var di=1009,Yd=1010,Zd=1011,ba=1012,dh=1013,Gi=1014,Ti=1015,Wi=1016,fh=1017,ph=1018,wa=1020,Jd=35902,jd=35899,Kd=1021,Qd=1022,Ai=1023,Qi=1026,js=1027,mh=1028,gh=1029,Ks=1030,_h=1031;var xh=1033,nl=33776,il=33777,sl=33778,rl=33779,vh=35840,yh=35841,Sh=35842,Mh=35843,bh=36196,wh=37492,Eh=37496,Th=37488,Ah=37489,al=37490,Ch=37491,Rh=37808,Ih=37809,Ph=37810,Lh=37811,Dh=37812,Nh=37813,Uh=37814,Fh=37815,Oh=37816,Bh=37817,kh=37818,zh=37819,$h=37820,Vh=37821,Hh=36492,Gh=36494,Wh=36495,Xh=36283,qh=36284,ol=36285,Yh=36286;var xo=2300,Ic=2301,vc=2302,Sd=2303,Md=2400,bd=2401,wd=2402;var Ym=3200;var Zh=0,Zm=1,As="",_i="srgb",vo="srgb-linear",yo="linear",nn="srgb";var yc=7680;var Jm=519,jm=512,Km=513,Qm=514,Jh=515,tg=516,eg=517,jh=518,ng=519,tf=35044;var ef="300 es",zi=2e3,ca=2001;function x_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function v_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ig(){let i=So("canvas");return i.style.display="block",i}var zp={},ha=null;function Mo(...i){let t="THREE."+i.shift();ha?ha("log",t,...i):console.log(t,...i)}function sg(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Se(...i){i=sg(i);let t="THREE."+i.shift();if(ha)ha("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=sg(i);let t="THREE."+i.shift();if(ha)ha("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xr(...i){let t=i.join(" ");t in zp||(zp[t]=!0,Se(...i))}function rg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ag={[Sc]:Mc,[bc]:Tc,[wc]:Ac,[la]:Ec,[Mc]:Sc,[Tc]:bc,[Ac]:wc,[Ec]:la},ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$p=1234567,po=Math.PI/180,ua=180/Math.PI;function Ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[e&63|128]+Xn[e>>8&255]+"-"+Xn[e>>16&255]+Xn[e>>24&255]+Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function nf(i,t){return(i%t+t)%t}function y_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function S_(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function M_(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function b_(i,t=1){return t-Math.abs(nf(i,t*2)-t)}function w_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function E_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function T_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function A_(i,t){return i+Math.random()*(t-i)}function C_(i){return i*(.5-Math.random())}function R_(i){i!==void 0&&($p=i);let t=$p+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function I_(i){return i*po}function P_(i){return i*ua}function L_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function D_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function N_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function U_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),m=a((t-n)/2),y=r((n-t)/2),M=a((n-t)/2);switch(s){case"XYX":i.set(l*d,c*v,c*m,l*h);break;case"YZY":i.set(c*m,l*d,c*v,l*h);break;case"ZXZ":i.set(c*v,c*m,l*d,l*h);break;case"XZX":i.set(l*d,c*M,c*y,l*h);break;case"YXY":i.set(c*y,l*d,c*M,l*h);break;case"ZYZ":i.set(c*M,c*y,l*d,l*h);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sf={DEG2RAD:po,RAD2DEG:ua,generateUUID:Ki,clamp:Ie,euclideanModulo:nf,mapLinear:y_,inverseLerp:S_,lerp:mo,damp:M_,pingpong:b_,smoothstep:w_,smootherstep:E_,randInt:T_,randFloat:A_,randFloatSpread:C_,seededRandom:R_,degToRad:I_,radToDeg:P_,isPowerOfTwo:L_,ceilPowerOfTwo:D_,floorPowerOfTwo:N_,setQuaternionFromProperEuler:U_,normalize:rn,denormalize:ki},kt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},es=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],d=n[s+2],v=n[s+3],m=r[a+0],y=r[a+1],M=r[a+2],I=r[a+3];if(v!==I||c!==m||h!==y||d!==M){let x=c*m+h*y+d*M+v*I;x<0&&(m=-m,y=-y,M=-M,I=-I,x=-x);let g=1-l;if(x<.9995){let B=Math.acos(x),k=Math.sin(B);g=Math.sin(g*B)/k,l=Math.sin(l*B)/k,c=c*g+m*l,h=h*g+y*l,d=d*g+M*l,v=v*g+I*l}else{c=c*g+m*l,h=h*g+y*l,d=d*g+M*l,v=v*g+I*l;let B=1/Math.sqrt(c*c+h*h+d*d+v*v);c*=B,h*=B,d*=B,v*=B}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],d=n[s+3],v=r[a],m=r[a+1],y=r[a+2],M=r[a+3];return t[e]=l*M+d*v+c*y-h*m,t[e+1]=c*M+d*m+h*v-l*y,t[e+2]=h*M+d*y+l*m-c*v,t[e+3]=d*M-l*v-c*m-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(s/2),v=l(r/2),m=c(n/2),y=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=m*d*v+h*y*M,this._y=h*y*v-m*d*M,this._z=h*d*M+m*y*v,this._w=h*d*v-m*y*M;break;case"YXZ":this._x=m*d*v+h*y*M,this._y=h*y*v-m*d*M,this._z=h*d*M-m*y*v,this._w=h*d*v+m*y*M;break;case"ZXY":this._x=m*d*v-h*y*M,this._y=h*y*v+m*d*M,this._z=h*d*M+m*y*v,this._w=h*d*v-m*y*M;break;case"ZYX":this._x=m*d*v-h*y*M,this._y=h*y*v+m*d*M,this._z=h*d*M-m*y*v,this._w=h*d*v+m*y*M;break;case"YZX":this._x=m*d*v+h*y*M,this._y=h*y*v+m*d*M,this._z=h*d*M-m*y*v,this._w=h*d*v-m*y*M;break;case"XZY":this._x=m*d*v-h*y*M,this._y=h*y*v-m*d*M,this._z=h*d*M+m*y*v,this._w=h*d*v+m*y*M;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],d=e[6],v=e[10],m=n+l+v;if(m>0){let y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(d-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>l&&n>v){let y=2*Math.sqrt(1+n-l-v);this._w=(d-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(l>v){let y=2*Math.sqrt(1+l-n-v);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+d)/y}else{let y=2*Math.sqrt(1+v-n-l);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*c,this._y=s*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-s*l,this._w=a*d-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,e=Math.sin(e*h)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+c*h+a*v-l*d,this.y=n+c*d+l*h-r*v,this.z=s+c*v+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zu.copy(this).projectOnVector(t),this.sub(Zu)}reflect(t){return this.sub(Zu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zu=new q,Vp=new es,Ce=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],v=n[7],m=n[2],y=n[5],M=n[8],I=s[0],x=s[3],g=s[6],B=s[1],k=s[4],R=s[7],E=s[2],O=s[5],G=s[8];return r[0]=a*I+l*B+c*E,r[3]=a*x+l*k+c*O,r[6]=a*g+l*R+c*G,r[1]=h*I+d*B+v*E,r[4]=h*x+d*k+v*O,r[7]=h*g+d*R+v*G,r[2]=m*I+y*B+M*E,r[5]=m*x+y*k+M*O,r[8]=m*g+y*R+M*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=d*a-l*h,m=l*c-d*r,y=h*r-a*c,M=e*v+n*m+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/M;return t[0]=v*I,t[1]=(s*h-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=m*I,t[4]=(d*e-s*c)*I,t[5]=(s*r-l*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(t,e)),this}rotate(t){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-t)),this}translate(t,e){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ju=new Ce,Hp=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){let i={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nn&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nn&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===As?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vo]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:Hp,fromXYZ:Gp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:n,transfer:nn,toXYZ:Hp,fromXYZ:Gp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),i}var Ve=F_();function Es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wr,Pc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=So("canvas")),Wr.width=t.width,Wr.height=t.height;let s=Wr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Es(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Es(e[n]/255)*255):e[n]=Es(e[n]);return{data:e,width:t.width,height:t.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},O_=0,da=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ju(s[a].image)):r.push(ju(s[a]))}else r=ju(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}var B_=0,Ku=new q,ci=class i extends ts{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ji,s=ji,r=$n,a=Js,l=Ai,c=di,h=i.DEFAULT_ANISOTROPY,d=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ki(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=qd;ci.DEFAULT_ANISOTROPY=1;var sn=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],d=c[4],v=c[8],m=c[1],y=c[5],M=c[9],I=c[2],x=c[6],g=c[10];if(Math.abs(d-m)<.01&&Math.abs(v-I)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(v+I)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let k=(h+1)/2,R=(y+1)/2,E=(g+1)/2,O=(d+m)/4,G=(v+I)/4,A=(M+x)/4;return k>R&&k>E?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=O/n,r=G/n):R>E?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=G/r,s=A/r),this.set(n,s,r,e),this}let B=Math.sqrt((x-M)*(x-M)+(v-I)*(v-I)+(m-d)*(m-d));return Math.abs(B)<.001&&(B=1),this.x=(x-M)/B,this.y=(v-I)/B,this.z=(m-d)/B,this.w=Math.acos((h+y+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this.w=Ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this.w=Ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lc=class extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ci(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new da(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bo=class extends ci{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dc=class extends ci{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,d,v,m,y,M,I,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,d,v,m,y,M,I,x)}set(t,e,n,s,r,a,l,c,h,d,v,m,y,M,I,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=l,g[13]=c,g[2]=h,g[6]=d,g[10]=v,g[14]=m,g[3]=y,g[7]=M,g[11]=I,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),a=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let m=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=-c*v,e[8]=h,e[1]=y+M*h,e[5]=m-I*h,e[9]=-l*c,e[2]=I-m*h,e[6]=M+y*h,e[10]=a*c}else if(t.order==="YXZ"){let m=c*d,y=c*v,M=h*d,I=h*v;e[0]=m+I*l,e[4]=M*l-y,e[8]=a*h,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=y*l-M,e[6]=I+m*l,e[10]=a*c}else if(t.order==="ZXY"){let m=c*d,y=c*v,M=h*d,I=h*v;e[0]=m-I*l,e[4]=-a*v,e[8]=M+y*l,e[1]=y+M*l,e[5]=a*d,e[9]=I-m*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let m=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=M*h-y,e[8]=m*h+I,e[1]=c*v,e[5]=I*h+m,e[9]=y*h-M,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let m=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=I-m*v,e[8]=M*v+y,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=y*v+M,e[10]=m-I*v}else if(t.order==="XZY"){let m=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=-v,e[8]=h*d,e[1]=m*v+I,e[5]=a*d,e[9]=y*v-M,e[2]=M*v-y,e[6]=l*d,e[10]=I*v+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k_,t,z_)}lookAt(t,e,n){let s=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Os.crossVectors(n,mi),Os.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Os.crossVectors(n,mi)),Os.normalize(),Xl.crossVectors(mi,Os),s[0]=Os.x,s[4]=Xl.x,s[8]=mi.x,s[1]=Os.y,s[5]=Xl.y,s[9]=mi.y,s[2]=Os.z,s[6]=Xl.z,s[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],v=n[5],m=n[9],y=n[13],M=n[2],I=n[6],x=n[10],g=n[14],B=n[3],k=n[7],R=n[11],E=n[15],O=s[0],G=s[4],A=s[8],F=s[12],H=s[1],W=s[5],st=s[9],lt=s[13],Z=s[2],Q=s[6],dt=s[10],mt=s[14],Tt=s[3],gt=s[7],Mt=s[11],St=s[15];return r[0]=a*O+l*H+c*Z+h*Tt,r[4]=a*G+l*W+c*Q+h*gt,r[8]=a*A+l*st+c*dt+h*Mt,r[12]=a*F+l*lt+c*mt+h*St,r[1]=d*O+v*H+m*Z+y*Tt,r[5]=d*G+v*W+m*Q+y*gt,r[9]=d*A+v*st+m*dt+y*Mt,r[13]=d*F+v*lt+m*mt+y*St,r[2]=M*O+I*H+x*Z+g*Tt,r[6]=M*G+I*W+x*Q+g*gt,r[10]=M*A+I*st+x*dt+g*Mt,r[14]=M*F+I*lt+x*mt+g*St,r[3]=B*O+k*H+R*Z+E*Tt,r[7]=B*G+k*W+R*Q+E*gt,r[11]=B*A+k*st+R*dt+E*Mt,r[15]=B*F+k*lt+R*mt+E*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],d=t[2],v=t[6],m=t[10],y=t[14],M=t[3],I=t[7],x=t[11],g=t[15],B=c*y-h*m,k=l*y-h*v,R=l*m-c*v,E=a*y-h*d,O=a*m-c*d,G=a*v-l*d;return e*(I*B-x*k+g*R)-n*(M*B-x*E+g*O)+s*(M*k-I*E+g*G)-r*(M*R-I*O+x*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=t[9],m=t[10],y=t[11],M=t[12],I=t[13],x=t[14],g=t[15],B=e*l-n*a,k=e*c-s*a,R=e*h-r*a,E=n*c-s*l,O=n*h-r*l,G=s*h-r*c,A=d*I-v*M,F=d*x-m*M,H=d*g-y*M,W=v*x-m*I,st=v*g-y*I,lt=m*g-y*x,Z=B*lt-k*st+R*W+E*H-O*F+G*A;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/Z;return t[0]=(l*lt-c*st+h*W)*Q,t[1]=(s*st-n*lt-r*W)*Q,t[2]=(I*G-x*O+g*E)*Q,t[3]=(m*O-v*G-y*E)*Q,t[4]=(c*H-a*lt-h*F)*Q,t[5]=(e*lt-s*H+r*F)*Q,t[6]=(x*R-M*G-g*k)*Q,t[7]=(d*G-m*R+y*k)*Q,t[8]=(a*st-l*H+h*A)*Q,t[9]=(n*H-e*st-r*A)*Q,t[10]=(M*O-I*R+g*B)*Q,t[11]=(v*R-d*O-y*B)*Q,t[12]=(l*F-a*W-c*A)*Q,t[13]=(e*W-n*F+s*A)*Q,t[14]=(I*k-M*E-x*B)*Q,t[15]=(d*E-v*k+m*B)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+n,d*c-s*a,0,h*c-s*l,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,d=a+a,v=l+l,m=r*h,y=r*d,M=r*v,I=a*d,x=a*v,g=l*v,B=c*h,k=c*d,R=c*v,E=n.x,O=n.y,G=n.z;return s[0]=(1-(I+g))*E,s[1]=(y+R)*E,s[2]=(M-k)*E,s[3]=0,s[4]=(y-R)*O,s[5]=(1-(m+g))*O,s[6]=(x+B)*O,s[7]=0,s[8]=(M+k)*G,s[9]=(x-B)*G,s[10]=(1-(m+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xr.set(s[0],s[1],s[2]).length(),l=Xr.set(s[4],s[5],s[6]).length(),c=Xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ui.copy(this);let h=1/a,d=1/l,v=1/c;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=d,Ui.elements[5]*=d,Ui.elements[6]*=d,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,e.setFromRotationMatrix(Ui),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=zi,c=!1){let h=this.elements,d=2*r/(e-t),v=2*r/(n-s),m=(e+t)/(e-t),y=(n+s)/(n-s),M,I;if(c)M=r/(a-r),I=a*r/(a-r);else if(l===zi)M=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===ca)M=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=zi,c=!1){let h=this.elements,d=2/(e-t),v=2/(n-s),m=-(e+t)/(e-t),y=-(n+s)/(n-s),M,I;if(c)M=1/(a-r),I=a/(a-r);else if(l===zi)M=-2/(a-r),I=-(a+r)/(a-r);else if(l===ca)M=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xr=new q,Ui=new He,k_=new q(0,0,0),z_=new q(1,1,1),Os=new q,Xl=new q,mi=new q,Wp=new He,Xp=new es,Ts=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],v=s[2],m=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,y),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ts.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$_=0,qp=new q,qr=new es,ys=new He,ql=new q,ro=new q,V_=new q,H_=new es,Yp=new q(1,0,0),Zp=new q(0,1,0),Jp=new q(0,0,1),jp={type:"added"},G_={type:"removed"},Yr={type:"childadded",child:null},Qu={type:"childremoved",child:null},Dn=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new Ts,n=new es,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ce}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(Yp,t)}rotateY(t){return this.rotateOnAxis(Zp,t)}rotateZ(t){return this.rotateOnAxis(Jp,t)}translateOnAxis(t,e){return qp.copy(t).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yp,t)}translateY(t){return this.translateOnAxis(Zp,t)}translateZ(t){return this.translateOnAxis(Jp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ys.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ql.copy(t):ql.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ys.lookAt(ro,ql,this.up):ys.lookAt(ql,ro,this.up),this.quaternion.setFromRotationMatrix(ys),s&&(ys.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(ys),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jp),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G_),Qu.child=t,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ys.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ys.multiply(t.parent.matrixWorld)),t.applyMatrix4(ys),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jp),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,V_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,H_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let v=c[h];r(t.shapes,v)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),v=a(t.shapes),m=a(t.skeletons),y=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),m.length>0&&(n.skeletons=m),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dn.DEFAULT_UP=new q(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W_={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let x=e.getJointPose(I,n),g=this._getHandJoint(h,I);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let d=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=d.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function td(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ve.workingColorSpace){if(t=nf(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=td(a,r,t+1/3),this.g=td(a,r,t),this.b=td(a,r,t-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(t,e=_i){function n(r){r!==void 0&&parseFloat(r)<1&&Se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){let n=og[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Ve.workingToColorSpace(qn.copy(this),t),Math.round(Ie(qn.r*255,0,255))*65536+Math.round(Ie(qn.g*255,0,255))*256+Math.round(Ie(qn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ve.workingColorSpace){Ve.workingToColorSpace(qn.copy(this),e);let n=qn.r,s=qn.g,r=qn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,d=(l+a)/2;if(l===a)c=0,h=0;else{let v=a-l;switch(h=d<=.5?v/(a+l):v/(2-a-l),a){case n:c=(s-r)/v+(s<r?6:0);break;case s:c=(r-n)/v+2;break;case r:c=(n-s)/v+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=Ve.workingColorSpace){return Ve.workingToColorSpace(qn.copy(this),e),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=_i){Ve.workingToColorSpace(qn.copy(this),t);let e=qn.r,n=qn.g,s=qn.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bs),this.setHSL(Bs.h+t,Bs.s+e,Bs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bs),t.getHSL(Yl);let n=mo(Bs.h,Yl.h,e),s=mo(Bs.s,Yl.s,e),r=mo(Bs.l,Yl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new ve;ve.NAMES=og;var wo=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fi=new q,Ss=new q,ed=new q,Ms=new q,Zr=new q,Jr=new q,Kp=new q,nd=new q,id=new q,sd=new q,rd=new sn,ad=new sn,od=new sn,Vs=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fi.subVectors(t,e),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fi.subVectors(s,e),Ss.subVectors(n,e),ed.subVectors(t,e);let a=Fi.dot(Fi),l=Fi.dot(Ss),c=Fi.dot(ed),h=Ss.dot(Ss),d=Ss.dot(ed),v=a*h-l*l;if(v===0)return r.set(0,0,0),null;let m=1/v,y=(h*c-l*d)*m,M=(a*d-l*c)*m;return r.set(1-y-M,M,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,Ms)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ms.x),c.addScaledVector(a,Ms.y),c.addScaledVector(l,Ms.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return rd.setScalar(0),ad.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(t,e),ad.fromBufferAttribute(t,n),od.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(rd,r.x),a.addScaledVector(ad,r.y),a.addScaledVector(od,r.z),a}static isFrontFacing(t,e,n,s){return Fi.subVectors(n,e),Ss.subVectors(t,e),Fi.cross(Ss).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ss.subVectors(this.a,this.b),Fi.cross(Ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Zr.subVectors(s,n),Jr.subVectors(r,n),nd.subVectors(t,n);let c=Zr.dot(nd),h=Jr.dot(nd);if(c<=0&&h<=0)return e.copy(n);id.subVectors(t,s);let d=Zr.dot(id),v=Jr.dot(id);if(d>=0&&v<=d)return e.copy(s);let m=c*v-d*h;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Zr,a);sd.subVectors(t,r);let y=Zr.dot(sd),M=Jr.dot(sd);if(M>=0&&y<=M)return e.copy(r);let I=y*h-c*M;if(I<=0&&h>=0&&M<=0)return l=h/(h-M),e.copy(n).addScaledVector(Jr,l);let x=d*M-y*v;if(x<=0&&v-d>=0&&y-M>=0)return Kp.subVectors(r,s),l=(v-d)/(v-d+(y-M)),e.copy(s).addScaledVector(Kp,l);let g=1/(x+I+m);return a=I*g,l=m*g,e.copy(n).addScaledVector(Zr,a).addScaledVector(Jr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zl.copy(n.boundingBox)),Zl.applyMatrix4(t.matrixWorld),this.union(Zl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ao),Jl.subVectors(this.max,ao),jr.subVectors(t.a,ao),Kr.subVectors(t.b,ao),Qr.subVectors(t.c,ao),ks.subVectors(Kr,jr),zs.subVectors(Qr,Kr),fr.subVectors(jr,Qr);let e=[0,-ks.z,ks.y,0,-zs.z,zs.y,0,-fr.z,fr.y,ks.z,0,-ks.x,zs.z,0,-zs.x,fr.z,0,-fr.x,-ks.y,ks.x,0,-zs.y,zs.x,0,-fr.y,fr.x,0];return!ld(e,jr,Kr,Qr,Jl)||(e=[1,0,0,0,1,0,0,0,1],!ld(e,jr,Kr,Qr,Jl))?!1:(jl.crossVectors(ks,zs),e=[jl.x,jl.y,jl.z],ld(e,jr,Kr,Qr,Jl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bs=[new q,new q,new q,new q,new q,new q,new q,new q],Oi=new q,Zl=new Qn,jr=new q,Kr=new q,Qr=new q,ks=new q,zs=new q,fr=new q,ao=new q,Jl=new q,jl=new q,pr=new q;function ld(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pr.fromArray(i,r);let l=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),c=t.dot(pr),h=e.dot(pr),d=n.dot(pr);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}var bn=new q,Kl=new kt,X_=0,on=class extends ts{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tf,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kl.fromBufferAttribute(this,e),Kl.applyMatrix3(t),this.setXY(e,Kl.x,Kl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix3(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Eo=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var To=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xn=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},q_=new Qn,oo=new q,cd=new q,ui=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):q_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oo.subVectors(t,this.center);let e=oo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(oo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oo.copy(t.center).add(cd)),this.expandByPoint(oo.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Y_=0,Ei=new He,hd=new Dn,ta=new q,gi=new Qn,lo=new Qn,Pn=new q,vn=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x_(t)?To:Eo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];lo.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(gi.min,lo.min),gi.expandByPoint(Pn),Pn.addVectors(gi.max,lo.max),gi.expandByPoint(Pn)):(gi.expandByPoint(lo.min),gi.expandByPoint(lo.max))}gi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pn));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Pn.fromBufferAttribute(l,h),c&&(ta.fromBufferAttribute(t,h),Pn.add(ta)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let A=0;A<n.count;A++)l[A]=new q,c[A]=new q;let h=new q,d=new q,v=new q,m=new kt,y=new kt,M=new kt,I=new q,x=new q;function g(A,F,H){h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,H),m.fromBufferAttribute(r,A),y.fromBufferAttribute(r,F),M.fromBufferAttribute(r,H),d.sub(h),v.sub(h),y.sub(m),M.sub(m);let W=1/(y.x*M.y-M.x*y.y);isFinite(W)&&(I.copy(d).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(W),x.copy(v).multiplyScalar(y.x).addScaledVector(d,-M.x).multiplyScalar(W),l[A].add(I),l[F].add(I),l[H].add(I),c[A].add(x),c[F].add(x),c[H].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let A=0,F=B.length;A<F;++A){let H=B[A],W=H.start,st=H.count;for(let lt=W,Z=W+st;lt<Z;lt+=3)g(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}let k=new q,R=new q,E=new q,O=new q;function G(A){E.fromBufferAttribute(s,A),O.copy(E);let F=l[A];k.copy(F),k.sub(E.multiplyScalar(E.dot(F))).normalize(),R.crossVectors(O,F);let W=R.dot(c[A])<0?-1:1;a.setXYZW(A,k.x,k.y,k.z,W)}for(let A=0,F=B.length;A<F;++A){let H=B[A],W=H.start,st=H.count;for(let lt=W,Z=W+st;lt<Z;lt+=3)G(t.getX(lt+0)),G(t.getX(lt+1)),G(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,y=n.count;m<y;m++)n.setXYZ(m,0,0,0);let s=new q,r=new q,a=new q,l=new q,c=new q,h=new q,d=new q,v=new q;if(t)for(let m=0,y=t.count;m<y;m+=3){let M=t.getX(m+0),I=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,x),l.add(d),c.add(d),h.add(d),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,y=e.count;m<y;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pn.fromBufferAttribute(t,e),Pn.normalize(),t.setXYZ(e,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(l,c){let h=l.array,d=l.itemSize,v=l.normalized,m=new h.constructor(c.length*d),y=0,M=0;for(let I=0,x=c.length;I<x;I++){l.isInterleavedBufferAttribute?y=c[I]*l.data.stride+l.offset:y=c[I]*d;for(let g=0;g<d;g++)m[M++]=h[y++]}return new on(m,d,v)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let d=0,v=h.length;d<v;d++){let m=h[d],y=t(m,n);c.push(y)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let v=0,m=h.length;v<m;v++){let y=h[v];d.push(y.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],v=r[h];for(let m=0,y=v.length;m<y;m++)d.push(v[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let v=a[h];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tf,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Kn=new q,Vi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix4(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyNormalMatrix(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.transformDirection(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ki(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ki(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ki(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ki(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ud=new q,Z_=new q,J_=new Ce,Bi=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ud.subVectors(n,e).cross(Z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ud),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||J_.getNormalMatrix(t),s=this.coplanarPoint(ud).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},j_=0,ns=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Ma,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ws=new q,dd=new q,Ql=new q,tc=new q,vr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ws)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ws.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ws.copy(this.origin).addScaledVector(this.direction,e),ws.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dd.copy(t).add(e).multiplyScalar(.5),Ql.copy(e).sub(t).normalize(),tc.copy(this.origin).sub(dd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ql),l=tc.dot(this.direction),c=-tc.dot(Ql),h=tc.lengthSq(),d=Math.abs(1-a*a),v,m,y,M;if(d>0)if(v=a*c-l,m=a*l-c,M=r*d,v>=0)if(m>=-M)if(m<=M){let I=1/d;v*=I,m*=I,y=v*(v+a*m+2*l)+m*(a*v+m+2*c)+h}else m=r,v=Math.max(0,-(a*m+l)),y=-v*v+m*(m+2*c)+h;else m=-r,v=Math.max(0,-(a*m+l)),y=-v*v+m*(m+2*c)+h;else m<=-M?(v=Math.max(0,-(-a*r+l)),m=v>0?-r:Math.min(Math.max(-r,-c),r),y=-v*v+m*(m+2*c)+h):m<=M?(v=0,m=Math.min(Math.max(-r,-c),r),y=m*(m+2*c)+h):(v=Math.max(0,-(a*r+l)),m=v>0?r:Math.min(Math.max(-r,-c),r),y=-v*v+m*(m+2*c)+h);else m=a>0?-r:r,v=Math.max(0,-(a*m+l)),y=-v*v+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(dd).addScaledVector(Ql,m),y}intersectSphere(t,e){if(t.radius<0)return null;ws.subVectors(t.center,this.origin);let n=ws.dot(this.direction),s=ws.dot(ws)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),d>=0?(r=(t.min.y-m.y)*d,a=(t.max.y-m.y)*d):(r=(t.max.y-m.y)*d,a=(t.min.y-m.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-m.z)*v,c=(t.max.z-m.z)*v):(l=(t.max.z-m.z)*v,c=(t.min.z-m.z)*v),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ws)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,v=t.x-a.x,m=t.y-a.y,y=t.z-a.z,M=e.x-a.x,I=e.y-a.y,x=e.z-a.z,g=n.x-a.x,B=n.y-a.y,k=n.z-a.z,R=Math.abs(c),E=Math.abs(h),O=Math.abs(d),G,A,F,H,W,st,lt,Z,Q,dt,mt,Tt;if(R>=E&&R>=O?(F=c,st=v,Q=M,Tt=g,c>=0?(G=h,A=d,H=m,W=y,lt=I,Z=x,dt=B,mt=k):(G=d,A=h,H=y,W=m,lt=x,Z=I,dt=k,mt=B)):E>=O?(F=h,st=m,Q=I,Tt=B,h>=0?(G=d,A=c,H=y,W=v,lt=x,Z=M,dt=k,mt=g):(G=c,A=d,H=v,W=y,lt=M,Z=x,dt=g,mt=k)):(F=d,st=y,Q=x,Tt=k,d>=0?(G=c,A=h,H=v,W=m,lt=M,Z=I,dt=g,mt=B):(G=h,A=c,H=m,W=v,lt=I,Z=M,dt=B,mt=g)),F===0)return null;let gt=G/F,Mt=A/F,St=1/F,Xt=H-gt*st,Qt=W-Mt*st,Ge=lt-gt*Q,Pe=Z-Mt*Q,$e=dt-gt*Tt,xt=mt-Mt*Tt,vt=$e*Pe-xt*Ge,Pt=Xt*xt-Qt*$e,oe=Ge*Qt-Pe*Xt;if(s){if(vt<0||Pt<0||oe<0)return null}else if((vt<0||Pt<0||oe<0)&&(vt>0||Pt>0||oe>0))return null;let Jt=vt+Pt+oe;if(Jt===0)return null;let _e=St*(vt*st+Pt*Q+oe*Tt);return(Jt>0?_e<0:_e>0)?null:this.at(_e/Jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yr=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qp=new He,mr=new vr,ec=new ui,tm=new q,nc=new q,ic=new q,sc=new q,fd=new q,rc=new q,em=new q,ac=new q,Nn=class extends Dn{constructor(t=new vn,e=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){rc.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let d=l[c],v=r[c];d!==0&&(fd.fromBufferAttribute(v,t),a?rc.addScaledVector(fd,d):rc.addScaledVector(fd.sub(e),d))}e.add(rc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(r),mr.copy(t.ray).recast(t.near),!(ec.containsPoint(mr.origin)===!1&&(mr.intersectSphere(ec,tm)===null||mr.origin.distanceToSquared(tm)>(t.far-t.near)**2))&&(Qp.copy(r).invert(),mr.copy(t.ray).applyMatrix4(Qp),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,m=r.groups,y=r.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,I=m.length;M<I;M++){let x=m[M],g=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=l.getX(R),G=l.getX(R+1),A=l.getX(R+2);s=oc(this,g,t,n,h,d,v,O,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(l.count,y.start+y.count);for(let x=M,g=I;x<g;x+=3){let B=l.getX(x),k=l.getX(x+1),R=l.getX(x+2);s=oc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,I=m.length;M<I;M++){let x=m[M],g=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=R,G=R+1,A=R+2;s=oc(this,g,t,n,h,d,v,O,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let x=M,g=I;x<g;x+=3){let B=x,k=x+1,R=x+2;s=oc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function K_(i,t,e,n,s,r,a,l){let c;if(t.side===ti?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===Ys,l),c===null)return null;ac.copy(l),ac.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ac);return h<e.near||h>e.far?null:{distance:h,point:ac.clone(),object:i}}function oc(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,nc),i.getVertexPosition(c,ic),i.getVertexPosition(h,sc);let d=K_(i,t,e,n,nc,ic,sc,em);if(d){let v=new q;Vs.getBarycoord(em,nc,ic,sc,v),s&&(d.uv=Vs.getInterpolatedAttribute(s,l,c,h,v,new kt)),r&&(d.uv1=Vs.getInterpolatedAttribute(r,l,c,h,v,new kt)),a&&(d.normal=Vs.getInterpolatedAttribute(a,l,c,h,v,new q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let m={a:l,b:c,c:h,normal:new q,materialIndex:0};Vs.getNormal(nc,ic,sc,m.normal),d.face=m,d.barycoord=v}return d}var Ao=class extends ci{constructor(t=null,e=1,n=1,s,r,a,l,c,h=Ln,d=Ln,v,m){super(null,a,l,c,h,d,s,r,v,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Co=class extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ea=new He,nm=new He,lc=[],im=new Qn,Q_=new He,co=new Nn,ho=new ui,Ro=class extends Nn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ea),im.copy(t.boundingBox).applyMatrix4(ea),this.boundingBox.union(im)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ea),ho.copy(t.boundingSphere).applyMatrix4(ea),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),t.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ea),nm.multiplyMatrices(n,ea),co.matrixWorld=nm,co.raycast(t,lc);for(let a=0,l=lc.length;a<l;a++){let c=lc[a];c.instanceId=r,c.object=this,e.push(c)}lc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(s*this.count),s,this.count,mh,Ti));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gr=new ui,tx=new kt(.5,.5),cc=new q,ma=class{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],d=r[4],v=r[5],m=r[6],y=r[7],M=r[8],I=r[9],x=r[10],g=r[11],B=r[12],k=r[13],R=r[14],E=r[15];if(s[0].setComponents(h-a,y-d,g-M,E-B).normalize(),s[1].setComponents(h+a,y+d,g+M,E+B).normalize(),s[2].setComponents(h+l,y+v,g+I,E+k).normalize(),s[3].setComponents(h-l,y-v,g-I,E-k).normalize(),n)s[4].setComponents(c,m,x,R).normalize(),s[5].setComponents(h-c,y-m,g-x,E-R).normalize();else if(s[4].setComponents(h-c,y-m,g-x,E-R).normalize(),e===zi)s[5].setComponents(h+c,y+m,g+x,E+R).normalize();else if(e===ca)s[5].setComponents(c,m,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){gr.center.set(0,0,0);let e=tx.distanceTo(t.center);return gr.radius=.7071067811865476+e,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cc.x=s.normal.x>0?t.max.x:t.min.x,cc.y=s.normal.y>0?t.max.y:t.min.y,cc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sr=class extends ns{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Uc=new q,Fc=new q,sm=new He,uo=new vr,hc=new ui,pd=new q,rm=new q,Oc=class extends Dn{constructor(t=new vn,e=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Uc.fromBufferAttribute(e,s-1),Fc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Uc.distanceTo(Fc);t.setAttribute("lineDistance",new xn(n,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(s),hc.radius+=r,t.ray.intersectsSphere(hc)===!1)return;sm.copy(s).invert(),uo.copy(t.ray).applyMatrix4(sm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){let y=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let g=d.getX(I),B=d.getX(I+1),k=uc(this,t,uo,c,g,B,I);k&&e.push(k)}if(this.isLineLoop){let I=d.getX(M-1),x=d.getX(y),g=uc(this,t,uo,c,I,x,M-1);g&&e.push(g)}}else{let y=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let g=uc(this,t,uo,c,I,I+1,I);g&&e.push(g)}if(this.isLineLoop){let I=uc(this,t,uo,c,M-1,y,M-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function uc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Uc.fromBufferAttribute(l,s),Fc.fromBufferAttribute(l,r),e.distanceSqToSegment(Uc,Fc,pd,rm)>n)return;pd.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(pd);if(!(h<t.near||h>t.far))return{distance:h,point:rm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Io=class extends Oc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Bc=class extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},am=new He,Ed=new vr,dc=new ui,fc=new q,Mr=class extends Dn{constructor(t=new vn,e=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),dc.radius+=r,t.ray.intersectsSphere(dc)===!1)return;am.copy(s).invert(),Ed.copy(t.ray).applyMatrix4(am);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,v=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let M=m,I=y;M<I;M++){let x=h.getX(M);fc.fromBufferAttribute(v,x),om(fc,x,c,s,t,e,this)}}else{let m=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let M=m,I=y;M<I;M++)fc.fromBufferAttribute(v,M),om(fc,M,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function om(i,t,e,n,s,r,a){let l=Ed.distanceSqToPoint(i);if(l<e){let c=new q;Ed.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Po=class extends ci{constructor(t=[],e=Zs,n,s,r,a,l,c,h,d){super(t,e,n,s,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Hs=class extends ci{constructor(t,e,n=Gi,s,r,a,l=Ln,c=Ln,h,d=Qi,v=1){if(d!==Qi&&d!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:v};super(m,s,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},kc=class extends Hs{constructor(t,e=Gi,n=Zs,s,r,a=Ln,l=Ln,c,h=Qi){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,c,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lo=class extends ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ga=class i extends vn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],d=[],v=[],m=0,y=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(d,3)),this.setAttribute("uv",new xn(v,2));function M(I,x,g,B,k,R,E,O,G,A,F){let H=R/G,W=E/A,st=R/2,lt=E/2,Z=O/2,Q=G+1,dt=A+1,mt=0,Tt=0,gt=new q;for(let Mt=0;Mt<dt;Mt++){let St=Mt*W-lt;for(let Xt=0;Xt<Q;Xt++){let Qt=Xt*H-st;gt[I]=Qt*B,gt[x]=St*k,gt[g]=Z,h.push(gt.x,gt.y,gt.z),gt[I]=0,gt[x]=0,gt[g]=O>0?1:-1,d.push(gt.x,gt.y,gt.z),v.push(Xt/G),v.push(1-Mt/A),mt+=1}}for(let Mt=0;Mt<A;Mt++)for(let St=0;St<G;St++){let Xt=m+St+Q*Mt,Qt=m+St+Q*(Mt+1),Ge=m+(St+1)+Q*(Mt+1),Pe=m+(St+1)+Q*Mt;c.push(Xt,Qt,Pe),c.push(Qt,Ge,Pe),Tt+=6}l.addGroup(y,Tt,F),y+=Tt,m+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Do=class i extends vn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],m=[],y=[],M=0,I=[],x=n/2,g=0;B(),a===!1&&(t>0&&k(!0),e>0&&k(!1)),this.setIndex(d),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(m,3)),this.setAttribute("uv",new xn(y,2));function B(){let R=new q,E=new q,O=0,G=(e-t)/n;for(let A=0;A<=r;A++){let F=[],H=A/r,W=H*(e-t)+t;for(let st=0;st<=s;st++){let lt=st/s,Z=lt*c+l,Q=Math.sin(Z),dt=Math.cos(Z);E.x=W*Q,E.y=-H*n+x,E.z=W*dt,v.push(E.x,E.y,E.z),R.set(Q,G,dt).normalize(),m.push(R.x,R.y,R.z),y.push(lt,1-H),F.push(M++)}I.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let H=I[F][A],W=I[F+1][A],st=I[F+1][A+1],lt=I[F][A+1];(t>0||F!==0)&&(d.push(H,W,lt),O+=3),(e>0||F!==r-1)&&(d.push(W,st,lt),O+=3)}h.addGroup(g,O,0),g+=O}function k(R){let E=M,O=new kt,G=new q,A=0,F=R===!0?t:e,H=R===!0?1:-1;for(let st=1;st<=s;st++)v.push(0,x*H,0),m.push(0,H,0),y.push(.5,.5),M++;let W=M;for(let st=0;st<=s;st++){let Z=st/s*c+l,Q=Math.cos(Z),dt=Math.sin(Z);G.x=F*dt,G.y=x*H,G.z=F*Q,v.push(G.x,G.y,G.z),m.push(0,H,0),O.x=Q*.5+.5,O.y=dt*.5*H+.5,y.push(O.x,O.y),M++}for(let st=0;st<s;st++){let lt=E+st,Z=W+st;R===!0?d.push(Z,Z+1,lt):d.push(Z+1,Z,lt),A+=3}h.addGroup(g,A,R===!0?1:2),g+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,c=r-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],m=n[s+1]-d,y=(a-d)/m;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),c=e||(a.isVector2?new kt:new q);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new q,s=[],r=[],a=[],l=new q,c=new He;for(let y=0;y<=t;y++){let M=y/t;s[y]=this.getTangentAt(M,new q)}r[0]=new q,a[0]=new q;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),v<=h&&(h=v,n.set(0,1,0)),m<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),l.crossVectors(s[y-1],s[y]),l.length()>Number.EPSILON){l.normalize();let M=Math.acos(Ie(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(l,M))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Ie(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(y=-y);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],y*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_a=class extends xi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new kt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),m=c-this.aX,y=h-this.aY;c=m*d-y*v+this.aX,h=m*v+y*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zc=class extends _a{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rf(){let i=0,t=0,e=0,n=0;function s(r,a,l,c){i=r,t=l,e=-3*r+3*a-2*l-c,n=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,h){s(a,l,h*(l-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,h,d,v){let m=(a-r)/h-(l-r)/(h+d)+(l-a)/d,y=(l-a)/d-(c-a)/(d+v)+(c-l)/v;m*=d,y*=d,s(a,l,m,y)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var lm=new q,cm=new q,md=new rf,gd=new rf,_d=new rf,$c=class extends xi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(cm.subVectors(s[0],s[1]).add(s[0]),h=cm);let v=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(lm.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=lm),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,M=Math.pow(h.distanceToSquared(v),y),I=Math.pow(v.distanceToSquared(m),y),x=Math.pow(m.distanceToSquared(d),y);I<1e-4&&(I=1),M<1e-4&&(M=I),x<1e-4&&(x=I),md.initNonuniformCatmullRom(h.x,v.x,m.x,d.x,M,I,x),gd.initNonuniformCatmullRom(h.y,v.y,m.y,d.y,M,I,x),_d.initNonuniformCatmullRom(h.z,v.z,m.z,d.z,M,I,x)}else this.curveType==="catmullrom"&&(md.initCatmullRom(h.x,v.x,m.x,d.x,this.tension),gd.initCatmullRom(h.y,v.y,m.y,d.y,this.tension),_d.initCatmullRom(h.z,v.z,m.z,d.z,this.tension));return n.set(md.calc(c),gd.calc(c),_d.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,c=i*l;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*l+r*i+e}function ex(i,t){let e=1-i;return e*e*t}function nx(i,t){return 2*(1-i)*i*t}function ix(i,t){return i*i*t}function go(i,t,e,n){return ex(i,t)+nx(i,e)+ix(i,n)}function sx(i,t){let e=1-i;return e*e*e*t}function rx(i,t){let e=1-i;return 3*e*e*i*t}function ax(i,t){return 3*(1-i)*i*i*t}function ox(i,t){return i*i*i*t}function _o(i,t,e,n,s){return sx(i,t)+rx(i,e)+ax(i,n)+ox(i,s)}var No=class extends xi{constructor(t=new kt,e=new kt,n=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new kt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(_o(t,s.x,r.x,a.x,l.x),_o(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vc=class extends xi{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(_o(t,s.x,r.x,a.x,l.x),_o(t,s.y,r.y,a.y,l.y),_o(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uo=class extends xi{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends xi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends xi{constructor(t=new kt,e=new kt,n=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new kt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(go(t,s.x,r.x,a.x),go(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends xi{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(go(t,s.x,r.x,a.x),go(t,s.y,r.y,a.y),go(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(hm(l,c.x,h.x,d.x,v.x),hm(l,c.y,h.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new kt().fromArray(s))}return this}},Td=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:$c,CubicBezierCurve:No,CubicBezierCurve3:Vc,EllipseCurve:_a,LineCurve:Uo,LineCurve3:Hc,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:Gc,SplineCurve:Oo}),Wc=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Td[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){let d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Td[s.type]().fromJSON(s))}return this}},br=class extends Wc{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Uo(this.currentPoint.clone(),new kt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fo(this.currentPoint.clone(),new kt(t,e),new kt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new No(this.currentPoint.clone(),new kt(t,e),new kt(n,s),new kt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,c){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,c),this}absellipse(t,e,n,s,r,a,l,c){let h=new _a(t,e,n,s,r,a,l,c);if(this.curves.length>0){let v=h.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xa=class extends br{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new br().fromJSON(s))}return this}};function lx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lg(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,c,h;if(n&&(r=fx(i,t,r,e)),i.length>80*e){l=i[0],c=i[1];let d=l,v=c;for(let m=e;m<s;m+=e){let y=i[m],M=i[m+1];y<l&&(l=y),M<c&&(c=M),y>d&&(d=y),M>v&&(v=M)}h=Math.max(d-l,v-c),h=h!==0?32767/h:0}return Bo(r,a,e,l,c,h,0),a}function lg(i,t,e,n,s){let r;if(s===wx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=um(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=um(a/n|0,i[a],i[a+1],r);return r&&va(r,r.next)&&(zo(r),r=r.next),r}function wr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(va(e,e.next)||gn(e.prev,e,e.next)===0)){if(zo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&xx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?hx(i,n,s,r):cx(i)){t.push(c.i,i.i,h.i),zo(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=ux(wr(i),t),Bo(i,t,e,n,s,r,2)):a===2&&dx(i,t,e,n,s,r):Bo(wr(i),t,e,n,s,r,1);break}}}function cx(i){let t=i.prev,e=i,n=i.next;if(gn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,c=e.y,h=n.y,d=Math.min(s,r,a),v=Math.min(l,c,h),m=Math.max(s,r,a),y=Math.max(l,c,h),M=n.next;for(;M!==t;){if(M.x>=d&&M.x<=m&&M.y>=v&&M.y<=y&&fo(s,l,r,c,a,h,M.x,M.y)&&gn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function hx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(gn(s,r,a)>=0)return!1;let l=s.x,c=r.x,h=a.x,d=s.y,v=r.y,m=a.y,y=Math.min(l,c,h),M=Math.min(d,v,m),I=Math.max(l,c,h),x=Math.max(d,v,m),g=Ad(y,M,t,e,n),B=Ad(I,x,t,e,n),k=i.prevZ,R=i.nextZ;for(;k&&k.z>=g&&R&&R.z<=B;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&fo(l,d,c,v,h,m,k.x,k.y)&&gn(k.prev,k,k.next)>=0||(k=k.prevZ,R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&fo(l,d,c,v,h,m,R.x,R.y)&&gn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;k&&k.z>=g;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&fo(l,d,c,v,h,m,k.x,k.y)&&gn(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;R&&R.z<=B;){if(R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&fo(l,d,c,v,h,m,R.x,R.y)&&gn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function ux(i,t){let e=i;do{let n=e.prev,s=e.next.next;!va(n,s)&&hg(n,e,e.next,s)&&ko(n,s)&&ko(s,n)&&(t.push(n.i,e.i,s.i),zo(e),zo(e.next),e=i=s),e=e.next}while(e!==i);return wr(e)}function dx(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Sx(a,l)){let c=ug(a,l);a=wr(a,a.next),c=wr(c,c.next),Bo(a,t,e,n,s,r,0),Bo(c,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function fx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=lg(i,l,c,n,!1);h===h.next&&(h.steiner=!0),s.push(yx(h))}s.sort(px);for(let r=0;r<s.length;r++)e=mx(s[r],e);return e}function px(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mx(i,t){let e=gx(i,t);if(!e)return t;let n=ug(e,i);return wr(n,n.next),wr(e,e.next)}function gx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(va(i,e))return e;do{if(va(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,c=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&cg(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);ko(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&_x(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function _x(i,t){return gn(i.prev,i,t.prev)<0&&gn(t.next,i,i.next)<0}function xx(i,t,e,n){let s=i;do s.z===0&&(s.z=Ad(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ad(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cg(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function fo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&cg(i,t,e,n,s,r,a,l)}function Sx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mx(i,t)&&(ko(i,t)&&ko(t,i)&&bx(i,t)&&(gn(i.prev,i,t.prev)||gn(i,t.prev,t))||va(i,t)&&gn(i.prev,i,i.next)>0&&gn(t.prev,t,t.next)>0)}function gn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function va(i,t){return i.x===t.x&&i.y===t.y}function hg(i,t,e,n){let s=mc(gn(i,t,e)),r=mc(gn(i,t,n)),a=mc(gn(e,n,i)),l=mc(gn(e,n,t));return!!(s!==r&&a!==l||s===0&&pc(i,e,t)||r===0&&pc(i,n,t)||a===0&&pc(e,i,n)||l===0&&pc(e,t,n))}function pc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mc(i){return i>0?1:i<0?-1:0}function Mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ko(i,t){return gn(i.prev,i,i.next)<0?gn(i,t,i.next)>=0&&gn(i,i.prev,t)>=0:gn(i,t,i.prev)<0||gn(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ug(i,t){let e=Cd(i.i,i.x,i.y),n=Cd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function um(i,t,e,n){let s=Cd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Rd=class{static triangulate(t,e,n=2){return lx(t,e,n)}},_r=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dm(t),fm(n,t);let a=t.length;e.forEach(dm);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,fm(n,e[c]);let l=Rd.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function dm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $o=class i extends vn{constructor(t=new xa([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,c=t.length;l<c;l++){let h=t[l];a(h)}this.setAttribute("position",new xn(s,3)),this.setAttribute("uv",new xn(r,2)),this.computeVertexNormals();function a(l){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,B=e.UVGenerator!==void 0?e.UVGenerator:Ex,k,R=!1,E,O,G,A;if(g){k=g.getSpacedPoints(d),R=!0,m=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(d,nt),O=new q,G=new q,A=new q}m||(x=0,y=0,M=0,I=0);let F=l.extractPoints(h),H=F.shape,W=F.holes;if(!_r.isClockWise(H)){H=H.reverse();for(let nt=0,Ct=W.length;nt<Ct;nt++){let $=W[nt];_r.isClockWise($)&&(W[nt]=$.reverse())}}function lt(nt){let $=10000000000000001e-36,Rt=nt[0];for(let Ot=1;Ot<=nt.length;Ot++){let le=Ot%nt.length,de=nt[le],ue=de.x-Rt.x,we=de.y-Rt.y,X=ue*ue+we*we,Ue=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(Rt.x),Math.abs(Rt.y)),Le=$*Ue*Ue;if(X<=Le){nt.splice(le,1),Ot--;continue}Rt=de}}lt(H),W.forEach(lt);let Z=W.length,Q=H;for(let nt=0;nt<Z;nt++){let Ct=W[nt];H=H.concat(Ct)}function dt(nt,Ct,$){return Ct||be("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Ct,$)}let mt=H.length;function Tt(nt,Ct,$){let Rt,Ot,le,de=nt.x-Ct.x,ue=nt.y-Ct.y,we=$.x-nt.x,X=$.y-nt.y,Ue=de*de+ue*ue,Le=de*X-ue*we;if(Math.abs(Le)>Number.EPSILON){let U=Math.sqrt(Ue),b=Math.sqrt(we*we+X*X),et=Ct.x-ue/U,at=Ct.y+de/U,_t=$.x-X/b,It=$.y+we/b,Bt=((_t-et)*X-(It-at)*we)/(de*X-ue*we);Rt=et+de*Bt-nt.x,Ot=at+ue*Bt-nt.y;let pt=Rt*Rt+Ot*Ot;if(pt<=2)return new kt(Rt,Ot);le=Math.sqrt(pt/2)}else{let U=!1;de>Number.EPSILON?we>Number.EPSILON&&(U=!0):de<-Number.EPSILON?we<-Number.EPSILON&&(U=!0):Math.sign(ue)===Math.sign(X)&&(U=!0),U?(Rt=-ue,Ot=de,le=Math.sqrt(Ue)):(Rt=de,Ot=ue,le=Math.sqrt(Ue/2))}return new kt(Rt/le,Ot/le)}let gt=[];for(let nt=0,Ct=Q.length,$=Ct-1,Rt=nt+1;nt<Ct;nt++,$++,Rt++)$===Ct&&($=0),Rt===Ct&&(Rt=0),gt[nt]=Tt(Q[nt],Q[$],Q[Rt]);let Mt=[],St,Xt=gt.concat();for(let nt=0,Ct=Z;nt<Ct;nt++){let $=W[nt];St=[];for(let Rt=0,Ot=$.length,le=Ot-1,de=Rt+1;Rt<Ot;Rt++,le++,de++)le===Ot&&(le=0),de===Ot&&(de=0),St[Rt]=Tt($[Rt],$[le],$[de]);Mt.push(St),Xt=Xt.concat(St)}let Qt;if(x===0)Qt=_r.triangulateShape(Q,W);else{let nt=[],Ct=[];for(let $=0;$<x;$++){let Rt=$/x,Ot=y*Math.cos(Rt*Math.PI/2),le=M*Math.sin(Rt*Math.PI/2)+I;for(let de=0,ue=Q.length;de<ue;de++){let we=dt(Q[de],gt[de],le);Pt(we.x,we.y,-Ot),Rt===0&&nt.push(we)}for(let de=0,ue=Z;de<ue;de++){let we=W[de];St=Mt[de];let X=[];for(let Ue=0,Le=we.length;Ue<Le;Ue++){let U=dt(we[Ue],St[Ue],le);Pt(U.x,U.y,-Ot),Rt===0&&X.push(U)}Rt===0&&Ct.push(X)}}Qt=_r.triangulateShape(nt,Ct)}let Ge=Qt.length,Pe=M+I;for(let nt=0;nt<mt;nt++){let Ct=m?dt(H[nt],Xt[nt],Pe):H[nt];R?(G.copy(E.normals[0]).multiplyScalar(Ct.x),O.copy(E.binormals[0]).multiplyScalar(Ct.y),A.copy(k[0]).add(G).add(O),Pt(A.x,A.y,A.z)):Pt(Ct.x,Ct.y,0)}for(let nt=1;nt<=d;nt++)for(let Ct=0;Ct<mt;Ct++){let $=m?dt(H[Ct],Xt[Ct],Pe):H[Ct];R?(G.copy(E.normals[nt]).multiplyScalar($.x),O.copy(E.binormals[nt]).multiplyScalar($.y),A.copy(k[nt]).add(G).add(O),Pt(A.x,A.y,A.z)):Pt($.x,$.y,v/d*nt)}for(let nt=x-1;nt>=0;nt--){let Ct=nt/x,$=y*Math.cos(Ct*Math.PI/2),Rt=M*Math.sin(Ct*Math.PI/2)+I;for(let Ot=0,le=Q.length;Ot<le;Ot++){let de=dt(Q[Ot],gt[Ot],Rt);Pt(de.x,de.y,v+$)}for(let Ot=0,le=W.length;Ot<le;Ot++){let de=W[Ot];St=Mt[Ot];for(let ue=0,we=de.length;ue<we;ue++){let X=dt(de[ue],St[ue],Rt);R?Pt(X.x,X.y+k[d-1].y,k[d-1].x+$):Pt(X.x,X.y,v+$)}}}$e(),xt();function $e(){let nt=s.length/3;if(m){let Ct=0,$=mt*Ct;for(let Rt=0;Rt<Ge;Rt++){let Ot=Qt[Rt];oe(Ot[2]+$,Ot[1]+$,Ot[0]+$)}Ct=d+x*2,$=mt*Ct;for(let Rt=0;Rt<Ge;Rt++){let Ot=Qt[Rt];oe(Ot[0]+$,Ot[1]+$,Ot[2]+$)}}else{for(let Ct=0;Ct<Ge;Ct++){let $=Qt[Ct];oe($[2],$[1],$[0])}for(let Ct=0;Ct<Ge;Ct++){let $=Qt[Ct];oe($[0]+mt*d,$[1]+mt*d,$[2]+mt*d)}}n.addGroup(nt,s.length/3-nt,0)}function xt(){let nt=s.length/3,Ct=0;vt(Q,Ct),Ct+=Q.length;for(let $=0,Rt=W.length;$<Rt;$++){let Ot=W[$];vt(Ot,Ct),Ct+=Ot.length}n.addGroup(nt,s.length/3-nt,1)}function vt(nt,Ct){let $=nt.length;for(;--$>=0;){let Rt=$,Ot=$-1;Ot<0&&(Ot=nt.length-1);for(let le=0,de=d+x*2;le<de;le++){let ue=mt*le,we=mt*(le+1),X=Ct+Rt+ue,Ue=Ct+Ot+ue,Le=Ct+Ot+we,U=Ct+Rt+we;Jt(X,Ue,Le,U)}}}function Pt(nt,Ct,$){c.push(nt),c.push(Ct),c.push($)}function oe(nt,Ct,$){_e(nt),_e(Ct),_e($);let Rt=s.length/3,Ot=B.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);se(Ot[0]),se(Ot[1]),se(Ot[2])}function Jt(nt,Ct,$,Rt){_e(nt),_e(Ct),_e(Rt),_e(Ct),_e($),_e(Rt);let Ot=s.length/3,le=B.generateSideWallUV(n,s,Ot-6,Ot-3,Ot-2,Ot-1);se(le[0]),se(le[1]),se(le[3]),se(le[1]),se(le[2]),se(le[3])}function _e(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function se(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Tx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Td[s.type]().fromJSON(s)),new i(n,t.options)}},Ex={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new kt(r,a),new kt(l,c),new kt(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],v=t[n*3+2],m=t[s*3],y=t[s*3+1],M=t[s*3+2],I=t[r*3],x=t[r*3+1],g=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new kt(a,1-c),new kt(h,1-v),new kt(m,1-M),new kt(I,1-g)]:[new kt(l,1-c),new kt(d,1-v),new kt(y,1-M),new kt(x,1-g)]}};function Tx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vo=class i extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,d=c+1,v=t/l,m=e/c,y=[],M=[],I=[],x=[];for(let g=0;g<d;g++){let B=g*m-a;for(let k=0;k<h;k++){let R=k*v-r;M.push(R,-B,0),I.push(0,0,1),x.push(k/l),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let B=0;B<l;B++){let k=B+h*g,R=B+h*(g+1),E=B+1+h*(g+1),O=B+1+h*g;y.push(k,R,O),y.push(R,E,O)}this.setIndex(y),this.setAttribute("position",new xn(M,3)),this.setAttribute("normal",new xn(I,3)),this.setAttribute("uv",new xn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ho=class extends vn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new q,r=new q;if(t.index!==null){let a=t.attributes.position,l=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=c.length;h<d;++h){let v=c[h],m=v.start,y=v.count;for(let M=m,I=m+y;M<I;M+=3)for(let x=0;x<3;x++){let g=l.getX(M+x),B=l.getX(M+(x+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,B),pm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){let d=3*l+h,v=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),pm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new xn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function pm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Ar(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mm(s))s.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Zn(i){let t={};for(let e=0;e<i.length;e++){let n=Ar(i[e]);for(let s in n)t[s]=n[s]}return t}function mm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ax(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function af(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}var ll={clone:Ar,merge:Zn},Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=Ax(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xc=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Go=class extends ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=lh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qc=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yc=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function na(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case bd:r=t,l=2*e-n;break;case wd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bd:a=t,c=2*n-e;break;case wd:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this._offsetPrev,v=this._offsetNext,m=this._weightPrev,y=this._weightNext,M=(n-e)/(s-e),I=M*M,x=I*M,g=-m*x+2*m*I-m*M,B=(1+m)*x+(-1.5-2*m)*I+(-.5+m)*M+1,k=(-1-y)*x+(1.5+y)*I+.5*M,R=y*x-y*I;for(let E=0;E!==l;++E)r[E]=g*a[d+E]+B*a[h+E]+k*a[c+E]+R*a[v+E];return r}},Jc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=(n-e)/(s-e),v=1-d;for(let m=0;m!==l;++m)r[m]=a[h+m]*v+a[c+m]*d;return r}},jc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kc=class extends Gs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let M=(n-e)/(s-e),I=1-M;for(let x=0;x!==l;++x)r[x]=a[h+x]*I+a[c+x]*M;return r}let m=l*2,y=t-1;for(let M=0;M!==l;++M){let I=a[h+M],x=a[c+M],g=y*m+M*2,B=v[g],k=v[g+1],R=t*m+M*2,E=d[R],O=d[R+1],G=Px(n,e,B,E,s);r[M]=dg(G,I,k,O,x)}return r}};function dg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ix(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Px(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=dg(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Ix(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var vi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xd(t.settings)&&(n.settings={inTangents:na(t.settings.inTangents,Array),outTangents:na(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case Ic:e=this.InterpolantFactoryMethodLinear;break;case vc:e=this.InterpolantFactoryMethodSmooth;break;case Sd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return Sd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xd(this.settings)&&(gm(this.settings.inTangents,t),gm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){be("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){be("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&v_(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){be("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vc,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)c=!0;else{let v=l*n,m=v-n,y=v+n;for(let M=0;M!==n;++M){let I=e[v+M];if(I!==e[m+M]||I!==e[y+M]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let v=l*n,m=a*n;for(let y=0;y!==n;++y)e[m+y]=e[v+y]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Ic;var Ws=class extends vi{constructor(t,e,n){super(t,e,n)}};Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=xo;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}};Qc.prototype.ValueTypeName="color";var th=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}};th.prototype.ValueTypeName="number";var eh=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)es.slerpFlat(r,0,a,h-l,a,h,c);return r}},Wo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends vi{constructor(t,e,n){super(t,e,n)}};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=xo;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}};nh.prototype.ValueTypeName="vector";var ih=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,v){return h.push(d,v),this},this.removeHandler=function(d){let v=h.indexOf(d);return v!==-1&&h.splice(v,2),this},this.getHandler=function(d){for(let v=0,m=h.length;v<m;v+=2){let y=h[v],M=h[v+1];if(y.global&&(y.lastIndex=0),y.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fg=new ih,sh=class{constructor(t){this.manager=t!==void 0?t:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xo=class extends Dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},qo=class extends Xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vd=new He,_m=new q,xm=new q,rh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;_m.setFromMatrixPosition(t.matrixWorld),e.position.copy(_m),xm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ca||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gc=new q,_c=new es,Ji=new q,Yo=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gc,_c,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(gc,_c,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$s=new q,vm=new kt,ym=new kt,Yn=class extends Yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($s.x,$s.y).multiplyScalar(-t/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($s.x,$s.y).multiplyScalar(-t/$s.z)}getViewSize(t,e){return this.getViewBounds(t,vm,ym),e.subVectors(ym,vm)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ya=class extends Yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Id=class extends rh{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zo=class extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Id}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Jo=class extends vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ia=-90,sa=1,ah=class extends Dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yn(ia,sa,t,e);s.layers=this.layers,this.add(s);let r=new Yn(ia,sa,t,e);r.layers=this.layers,this.add(r);let a=new Yn(ia,sa,t,e);a.layers=this.layers,this.add(a);let l=new Yn(ia,sa,t,e);l.layers=this.layers,this.add(l);let c=new Yn(ia,sa,t,e);c.layers=this.layers,this.add(c);let h=new Yn(ia,sa,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,d]=this.children,v=t.getRenderTarget(),m=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,m,y),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},oh=class extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var of="\\[\\]\\.:\\/",Lx=new RegExp("["+of+"]","g"),lf="[^"+of+"]",Dx="[^"+of.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",lf),Ux=/(WCOD+)?/.source.replace("WCOD",Dx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),Bx=new RegExp("^"+Nx+Ux+Fx+Ox+"$"),kx=["material","materials","bones","map"],Pd=class{constructor(t,e,n){let s=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lx,"")}static parseTrackName(t){let e=Bx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;be("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=Pd;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qb=new Float32Array(1);var qs=class extends Nc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Sm=new He,jo=class{constructor(t,e,n=0,s=1/0){this.ray=new vr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sm),this}intersectObject(t,e=!0,n=[]){return Ld(t,this,n,e),n.sort(Mm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ld(t[s],this,n,e);return n.sort(Mm),n}};function Mm(i,t){return i.distance-t.distance}function Ld(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Ld(r[a],t,e,!0)}}var Dd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var bm=new q,xc=new q,ra=new q,aa=new q,yd=new q,zx=new q,$x=new q,Ko=class{constructor(t=new q,e=new q){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){bm.subVectors(t,this.start),xc.subVectors(this.end,this.start);let n=xc.dot(xc);if(n===0)return 0;let r=xc.dot(bm)/n;return e&&(r=Ie(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=zx,n=$x){let s=10000000000000001e-32,r,a,l=this.start,c=t.start,h=this.end,d=t.end;ra.subVectors(h,l),aa.subVectors(d,c),yd.subVectors(l,c);let v=ra.dot(ra),m=aa.dot(aa),y=aa.dot(yd);if(v<=s&&m<=s)return e.copy(l),n.copy(c),e.sub(n),e.dot(e);if(v<=s)r=0,a=y/m,a=Ie(a,0,1);else{let M=ra.dot(yd);if(m<=s)a=0,r=Ie(-M/v,0,1);else{let I=ra.dot(aa),x=v*m-I*I;x!==0?r=Ie((I*y-M*m)/x,0,1):r=0,a=(I*r+y)/m,a<0?(a=0,r=Ie(-M/v,0,1)):a>1&&(a=1,r=Ie((I-M)/v,0,1))}}return e.copy(l).addScaledVector(ra,r),n.copy(c).addScaledVector(aa,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function cf(i,t,e,n){let s=Vx(n);switch(e){case Kd:return i*t;case mh:return i*t/s.components*s.byteLength;case gh:return i*t/s.components*s.byteLength;case Ks:return i*t*2/s.components*s.byteLength;case _h:return i*t*2/s.components*s.byteLength;case Qd:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case xh:return i*t*4/s.components*s.byteLength;case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yh:case Mh:return Math.max(i,16)*Math.max(t,8)/4;case vh:case Sh:return Math.max(i,8)*Math.max(t,8)/2;case bh:case wh:case Th:case Ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eh:case al:case Ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hh:case Gh:case Wh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xh:case qh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ol:case Yh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vx(i){switch(i){case di:case Yd:return{byteLength:1,components:1};case ba:case Zd:case Wi:return{byteLength:2,components:1};case fh:case ph:return{byteLength:2,components:4};case Gi:case dh:case Ti:return{byteLength:4,components:1};case Jd:case jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ug(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gx(i){let t=new WeakMap;function e(l,c){let h=l.array,d=l.usage,v=h.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,c,h){let d=c.array,v=c.updateRanges;if(i.bindBuffer(h,l),v.length===0)i.bufferSubData(h,0,d);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){let M=v[m],I=v[y];I.start<=M.start+M.count+1?M.count=Math.max(M.count,I.start+I.count-M.start):(++m,v[m]=I)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){let I=v[y];i.bufferSubData(h,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
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
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
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
#endif`,tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sv=`#ifdef USE_IRIDESCENCE
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
#endif`,rv=`#ifdef USE_BUMPMAP
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
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pv=`#define PI 3.141592653589793
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
} // validated`,mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lv=`#ifdef USE_GRADIENTMAP
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
}`,Dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vv=`PhysicalMaterial material;
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
#endif`,Hv=`uniform sampler2D dfgLUT;
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
}`,Gv=`
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
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ey=`#if defined( USE_POINTS_UV )
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
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
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
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
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
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,Py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,By=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
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
}`,Ky=`#if DEPTH_PACKING == 3200
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
}`,Qy=`#define DISTANCE
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
}`,tS=`#define DISTANCE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
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
}`,sS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,aS=`uniform vec3 diffuse;
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
}`,oS=`#define LAMBERT
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
}`,lS=`#define LAMBERT
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
}`,cS=`#define MATCAP
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
}`,hS=`#define MATCAP
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
}`,uS=`#define NORMAL
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
}`,dS=`#define NORMAL
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
}`,fS=`#define PHONG
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
}`,pS=`#define PHONG
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
}`,mS=`#define STANDARD
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
}`,gS=`#define STANDARD
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
}`,_S=`#define TOON
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
}`,xS=`#define TOON
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
}`,vS=`uniform float size;
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
}`,yS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,MS=`uniform vec3 color;
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
}`,bS=`uniform float rotation;
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
}`,wS=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:jx,aomap_pars_fragment:Kx,batching_pars_vertex:Qx,batching_vertex:tv,begin_vertex:ev,beginnormal_vertex:nv,bsdfs:iv,iridescence_fragment:sv,bumpmap_pars_fragment:rv,clipping_planes_fragment:av,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:lv,clipping_planes_vertex:cv,color_fragment:hv,color_pars_fragment:uv,color_pars_vertex:dv,color_vertex:fv,common:pv,cube_uv_reflection_fragment:mv,defaultnormal_vertex:gv,displacementmap_pars_vertex:_v,displacementmap_vertex:xv,emissivemap_fragment:vv,emissivemap_pars_fragment:yv,colorspace_fragment:Sv,colorspace_pars_fragment:Mv,envmap_fragment:bv,envmap_common_pars_fragment:wv,envmap_pars_fragment:Ev,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Ov,envmap_vertex:Av,fog_vertex:Cv,fog_pars_vertex:Rv,fog_fragment:Iv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Lv,lightmap_pars_fragment:Dv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Uv,lights_pars_begin:Fv,lights_toon_fragment:Bv,lights_toon_pars_fragment:kv,lights_phong_fragment:zv,lights_phong_pars_fragment:$v,lights_physical_fragment:Vv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Wv,lights_fragment_end:Xv,lightprobes_pars_fragment:qv,logdepthbuf_fragment:Yv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:jv,map_fragment:Kv,map_pars_fragment:Qv,map_particle_fragment:ty,map_particle_pars_fragment:ey,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:sy,morphcolor_vertex:ry,morphnormal_vertex:ay,morphtarget_pars_vertex:oy,morphtarget_vertex:ly,normal_fragment_begin:cy,normal_fragment_maps:hy,normal_pars_fragment:uy,normal_pars_vertex:dy,normal_vertex:fy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:xy,opaque_fragment:vy,packing:yy,premultiplied_alpha_fragment:Sy,project_vertex:My,dithering_fragment:by,dithering_pars_fragment:wy,roughnessmap_fragment:Ey,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:Iy,skinbase_vertex:Py,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Ny,specularmap_fragment:Uy,specularmap_pars_fragment:Fy,tonemapping_fragment:Oy,tonemapping_pars_fragment:By,transmission_fragment:ky,transmission_pars_fragment:zy,uv_pars_fragment:$y,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:qy,backgroundCube_frag:Yy,cube_vert:Zy,cube_frag:Jy,depth_vert:jy,depth_frag:Ky,distance_vert:Qy,distance_frag:tS,equirect_vert:eS,equirect_frag:nS,linedashed_vert:iS,linedashed_frag:sS,meshbasic_vert:rS,meshbasic_frag:aS,meshlambert_vert:oS,meshlambert_frag:lS,meshmatcap_vert:cS,meshmatcap_frag:hS,meshnormal_vert:uS,meshnormal_frag:dS,meshphong_vert:fS,meshphong_frag:pS,meshphysical_vert:mS,meshphysical_frag:gS,meshtoon_vert:_S,meshtoon_frag:xS,points_vert:vS,points_frag:yS,shadow_vert:SS,shadow_frag:MS,sprite_vert:bS,sprite_frag:wS},Ht={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},ei={basic:{uniforms:Zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Zn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Zn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Zn([Ht.points,Ht.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Zn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Zn([Ht.common,Ht.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Zn([Ht.sprite,Ht.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Zn([Ht.common,Ht.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Zn([Ht.lights,Ht.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ei.physical={uniforms:Zn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Kh={r:0,b:0,g:0},ES=new He,Fg=new Ce;Fg.set(-1,0,0,0,1,0,0,0,1);function TS(i,t,e,n,s,r){let a=new ve(0),l=s===!0?0:1,c,h,d=null,v=0,m=null;function y(B){let k=B.isScene===!0?B.background:null;if(k&&k.isTexture){let R=B.backgroundBlurriness>0;k=t.get(k,R)}return k}function M(B){let k=!1,R=y(B);R===null?x(a,l):R&&R.isColor&&(x(R,1),k=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(B,k){let R=y(k);R&&(R.isCubeTexture||R.mapping===tl)?(h===void 0&&(h=new Nn(new ga(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ar(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ES.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Fg),h.material.toneMapped=Ve.getTransfer(R.colorSpace)!==nn,(d!==R||v!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,m=i.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Nn(new Vo(2,2),new Un({name:"BackgroundMaterial",uniforms:Ar(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(R.colorSpace)!==nn,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,v=R.version,m=i.toneMapping),c.layers.enableAll(),B.unshift(c,c.geometry,c.material,0,0,null))}function x(B,k){B.getRGB(Kh,af(i)),e.buffers.color.setClear(Kh.r,Kh.g,Kh.b,k,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(B,k=1){a.set(B),l=k,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(B){l=B,x(a,l)},render:M,addToRenderList:I,dispose:g}}function AS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,a=!1;function l(W,st,lt,Z,Q){let dt=!1,mt=v(W,Z,lt,st);r!==mt&&(r=mt,h(r.object)),dt=y(W,Z,lt,Q),dt&&M(W,Z,lt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(dt||a)&&(a=!1,R(W,st,lt,Z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(W){return i.bindVertexArray(W)}function d(W){return i.deleteVertexArray(W)}function v(W,st,lt,Z){let Q=Z.wireframe===!0,dt=n[st.id];dt===void 0&&(dt={},n[st.id]=dt);let mt=W.isInstancedMesh===!0?W.id:0,Tt=dt[mt];Tt===void 0&&(Tt={},dt[mt]=Tt);let gt=Tt[lt.id];gt===void 0&&(gt={},Tt[lt.id]=gt);let Mt=gt[Q];return Mt===void 0&&(Mt=m(c()),gt[Q]=Mt),Mt}function m(W){let st=[],lt=[],Z=[];for(let Q=0;Q<e;Q++)st[Q]=0,lt[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:lt,attributeDivisors:Z,object:W,attributes:{},index:null}}function y(W,st,lt,Z){let Q=r.attributes,dt=st.attributes,mt=0,Tt=lt.getAttributes();for(let gt in Tt)if(Tt[gt].location>=0){let St=Q[gt],Xt=dt[gt];if(Xt===void 0&&(gt==="instanceMatrix"&&W.instanceMatrix&&(Xt=W.instanceMatrix),gt==="instanceColor"&&W.instanceColor&&(Xt=W.instanceColor)),St===void 0||St.attribute!==Xt||Xt&&St.data!==Xt.data)return!0;mt++}return r.attributesNum!==mt||r.index!==Z}function M(W,st,lt,Z){let Q={},dt=st.attributes,mt=0,Tt=lt.getAttributes();for(let gt in Tt)if(Tt[gt].location>=0){let St=dt[gt];St===void 0&&(gt==="instanceMatrix"&&W.instanceMatrix&&(St=W.instanceMatrix),gt==="instanceColor"&&W.instanceColor&&(St=W.instanceColor));let Xt={};Xt.attribute=St,St&&St.data&&(Xt.data=St.data),Q[gt]=Xt,mt++}r.attributes=Q,r.attributesNum=mt,r.index=Z}function I(){let W=r.newAttributes;for(let st=0,lt=W.length;st<lt;st++)W[st]=0}function x(W){g(W,0)}function g(W,st){let lt=r.newAttributes,Z=r.enabledAttributes,Q=r.attributeDivisors;lt[W]=1,Z[W]===0&&(i.enableVertexAttribArray(W),Z[W]=1),Q[W]!==st&&(i.vertexAttribDivisor(W,st),Q[W]=st)}function B(){let W=r.newAttributes,st=r.enabledAttributes;for(let lt=0,Z=st.length;lt<Z;lt++)st[lt]!==W[lt]&&(i.disableVertexAttribArray(lt),st[lt]=0)}function k(W,st,lt,Z,Q,dt,mt){mt===!0?i.vertexAttribIPointer(W,st,lt,Q,dt):i.vertexAttribPointer(W,st,lt,Z,Q,dt)}function R(W,st,lt,Z){I();let Q=Z.attributes,dt=lt.getAttributes(),mt=st.defaultAttributeValues;for(let Tt in dt){let gt=dt[Tt];if(gt.location>=0){let Mt=Q[Tt];if(Mt===void 0&&(Tt==="instanceMatrix"&&W.instanceMatrix&&(Mt=W.instanceMatrix),Tt==="instanceColor"&&W.instanceColor&&(Mt=W.instanceColor)),Mt!==void 0){let St=Mt.normalized,Xt=Mt.itemSize,Qt=t.get(Mt);if(Qt===void 0)continue;let Ge=Qt.buffer,Pe=Qt.type,$e=Qt.bytesPerElement,xt=Pe===i.INT||Pe===i.UNSIGNED_INT||Mt.gpuType===dh;if(Mt.isInterleavedBufferAttribute){let vt=Mt.data,Pt=vt.stride,oe=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<gt.locationSize;Jt++)g(gt.location+Jt,vt.meshPerAttribute);W.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Jt=0;Jt<gt.locationSize;Jt++)x(gt.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Jt=0;Jt<gt.locationSize;Jt++)k(gt.location+Jt,Xt/gt.locationSize,Pe,St,Pt*$e,(oe+Xt/gt.locationSize*Jt)*$e,xt)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<gt.locationSize;vt++)g(gt.location+vt,Mt.meshPerAttribute);W.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<gt.locationSize;vt++)x(gt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let vt=0;vt<gt.locationSize;vt++)k(gt.location+vt,Xt/gt.locationSize,Pe,St,Xt*$e,Xt/gt.locationSize*vt*$e,xt)}}else if(mt!==void 0){let St=mt[Tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(gt.location,St);break;case 3:i.vertexAttrib3fv(gt.location,St);break;case 4:i.vertexAttrib4fv(gt.location,St);break;default:i.vertexAttrib1fv(gt.location,St)}}}}B()}function E(){F();for(let W in n){let st=n[W];for(let lt in st){let Z=st[lt];for(let Q in Z){let dt=Z[Q];for(let mt in dt)d(dt[mt].object),delete dt[mt];delete Z[Q]}}delete n[W]}}function O(W){if(n[W.id]===void 0)return;let st=n[W.id];for(let lt in st){let Z=st[lt];for(let Q in Z){let dt=Z[Q];for(let mt in dt)d(dt[mt].object),delete dt[mt];delete Z[Q]}}delete n[W.id]}function G(W){for(let st in n){let lt=n[st];for(let Z in lt){let Q=lt[Z];if(Q[W.id]===void 0)continue;let dt=Q[W.id];for(let mt in dt)d(dt[mt].object),delete dt[mt];delete Q[W.id]}}}function A(W){for(let st in n){let lt=n[st],Z=W.isInstancedMesh===!0?W.id:0,Q=lt[Z];if(Q!==void 0){for(let dt in Q){let mt=Q[dt];for(let Tt in mt)d(mt[Tt].object),delete mt[Tt];delete Q[dt]}delete lt[Z],Object.keys(lt).length===0&&delete n[st]}}}function F(){H(),a=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:x,disableUnusedAttributes:B}}function CS(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function l(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function RS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==Ai&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(G){let A=G===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==di&&G!==Ti&&!A&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=c(h);d!==h&&(Se("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let v=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:B,maxVaryings:k,maxFragmentUniforms:R,maxSamples:E,samples:O}}function IS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bi,l=new Ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){let y=v.length!==0||m||n!==0||s;return s=m,n=v.length,y},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,m){e=d(v,m,0)},this.setState=function(v,m,y){let M=v.clippingPlanes,I=v.clipIntersection,x=v.clipShadows,g=i.get(v);if(!s||M===null||M.length===0||r&&!x)r?d(null):h();else{let B=r?0:n,k=B*4,R=g.clippingState||null;c.value=R,R=d(M,m,k,y);for(let E=0;E!==k;++E)R[E]=e[E];g.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=B}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,m,y,M){let I=v!==null?v.length:0,x=null;if(I!==0){if(x=c.value,M!==!0||x===null){let g=y+I*4,B=m.matrixWorldInverse;l.getNormalMatrix(B),(x===null||x.length<g)&&(x=new Float32Array(g));for(let k=0,R=y;k!==I;++k,R+=4)a.copy(v[k]).applyMatrix4(B,l),a.normal.toArray(x,R),x[R+3]=a.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,x}}var Ta=4,PS=6,LS=20,DS=256,cl=new ya,pg=new ve,hf=null,uf=0,df=0,ff=!1,NS=new q,Cr=new q,tu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=NS}=r;hf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hf,uf,df),this._renderer.xr.enabled=ff,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Wi,format:Ai,colorSpace:vo,depthBuffer:!1},s=mg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=US(r)),this._blurMaterial=OS(r,t,e),this._ggxMaterial=FS(r,t,e)}return s}_compileMaterial(t){let e=new Nn(new vn,t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,n,s,r){let c=new Yn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(pg),v.toneMapping=Hi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new ga,new yr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,x=I.material,g=!1,B=t.background;B?B.isColor&&(x.color.copy(B),t.background=null,g=!0):(x.color.copy(pg),g=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[k],r.y,r.z)):R===1?(c.up.set(0,0,h[k]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[k],r.z)):(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[k]));let E=this._cubeSize;Ea(s,R*E,k>2?E:0,E,E),v.setRenderTarget(s),g&&v.render(I,c),v.render(t,c)}v.toneMapping=y,v.autoClear=m,t.background=B}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zs||t.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,cl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-d*d),m=h*1.25,y=v*m,{_lodMax:M}=this,I=this._sizeLods[n],x=3*I*(n>M-Ta?n-M+Ta:0),g=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=M-e,Ea(r,x,g,3*I,2*I),s.setRenderTarget(r),s.render(l,cl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,Ea(t,x,g,3*I,2*I),s.setRenderTarget(t),s.render(l,cl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-Ta?s-this._lodMax+Ta:0),m=4*(this._cubeSize-d);Ea(e,v,m,3*d,2*d),a.setRenderTarget(e),a.render(c,cl)}};function US(i){let t=[],e=[],n=i,s=i-Ta+1+PS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],v=6,m=6,y=3,M=new Float32Array(y*m*v),I=new Float32Array(y*m*v);for(let g=0;g<v;g++){let B=g%3*2/3-1,k=g>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];M.set(R,y*m*g);for(let E=0;E<m;E++){let O=d[E*2]*2-1,G=d[E*2+1]*2-1;g===0?Cr.set(1,G,O):g===1?Cr.set(-O,1,-G):g===2?Cr.set(-O,G,1):g===3?Cr.set(-1,G,-O):g===4?Cr.set(-O,-1,G):Cr.set(O,G,-1),Cr.toArray(I,(g*m+E)*y)}}let x=new vn;x.setAttribute("position",new on(M,y)),x.setAttribute("outputDirection",new on(I,y)),e.push(new Nn(x,null)),n>Ta&&n--}return{lodMeshes:e,sizeLods:t}}function mg(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function FS(i,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function OS(i,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:LS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function gg(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function _g(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eu=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ga(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:ss});r.uniforms.tEquirect.value=e;let a=new Nn(s,r),l=e.minFilter;return e.minFilter===Js&&(e.minFilter=$n),new ah(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function BS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,y=!1){return m==null?null:y?a(m):r(m)}function r(m){if(m&&m.isTexture){let y=m.mapping;if(y===ch||y===hh)if(t.has(m)){let M=t.get(m).texture;return l(M,m.mapping)}else{let M=m.image;if(M&&M.height>0){let I=new eu(M.height);return I.fromEquirectangularTexture(i,m),t.set(m,I),m.addEventListener("dispose",h),l(I.texture,m.mapping)}else return null}}return m}function a(m){if(m&&m.isTexture){let y=m.mapping,M=y===ch||y===hh,I=y===Zs||y===Tr;if(M||I){let x=e.get(m),g=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==g)return n===null&&(n=new tu(i)),x=M?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),x.texture;if(x!==void 0)return x.texture;{let B=m.image;return M&&B&&B.height>0||I&&B&&c(B)?(n===null&&(n=new tu(i)),x=M?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),m.addEventListener("dispose",d),x.texture):null}}}return m}function l(m,y){return y===ch?m.mapping=Zs:y===hh&&(m.mapping=Tr),m}function c(m){let y=0,M=6;for(let I=0;I<M;I++)m[I]!==void 0&&y++;return y===M}function h(m){let y=m.target;y.removeEventListener("dispose",h);let M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function d(m){let y=m.target;y.removeEventListener("dispose",d);let M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function kS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xr("WebGLRenderer: "+n+" extension not supported."),s}}}function zS(i,t,e,n){let s={},r=new WeakMap;function a(v){let m=v.target;m.index!==null&&t.remove(m.index);for(let M in m.attributes)t.remove(m.attributes[M]);m.removeEventListener("dispose",a),delete s[m.id];let y=r.get(m);y&&(t.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(v,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,e.memory.geometries++),m}function c(v){let m=v.attributes;for(let y in m)t.update(m[y],i.ARRAY_BUFFER)}function h(v){let m=[],y=v.index,M=v.attributes.position,I=0;if(M===void 0)return;if(y!==null){let B=y.array;I=y.version;for(let k=0,R=B.length;k<R;k+=3){let E=B[k+0],O=B[k+1],G=B[k+2];m.push(E,O,O,G,G,E)}}else{let B=M.array;I=M.version;for(let k=0,R=B.length/3-1;k<R;k+=3){let E=k+0,O=k+1,G=k+2;m.push(E,O,O,G,G,E)}}let x=new(M.count>=65535?To:Eo)(m,1);x.version=I;let g=r.get(v);g&&t.remove(g),r.set(v,x)}function d(v){let m=r.get(v);if(m){let y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return r.get(v)}return{get:l,update:c,getWireframeAttribute:d}}function $S(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function c(v,m){i.drawElements(n,m,r,v*a),e.update(m,n,1)}function h(v,m,y){y!==0&&(i.drawElementsInstanced(n,m,r,v*a,y),e.update(m,n,y))}function d(v,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,v,0,y);let I=0;for(let x=0;x<y;x++)I+=m[x];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function VS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:be("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function HS(i,t,e){let n=new WeakMap,s=new sn;function r(a,l,c){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,m=n.get(l);if(m===void 0||m.count!==v){let F=function(){G.dispose(),n.delete(l),l.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();let y=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],B=l.morphAttributes.color||[],k=0;y===!0&&(k=1),M===!0&&(k=2),I===!0&&(k=3);let R=l.attributes.position.count*k,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*E*4*v),G=new bo(O,R,E,v);G.type=Ti,G.needsUpdate=!0;let A=k*4;for(let H=0;H<v;H++){let W=x[H],st=g[H],lt=B[H],Z=R*E*4*H;for(let Q=0;Q<W.count;Q++){let dt=Q*A;y===!0&&(s.fromBufferAttribute(W,Q),O[Z+dt+0]=s.x,O[Z+dt+1]=s.y,O[Z+dt+2]=s.z,O[Z+dt+3]=0),M===!0&&(s.fromBufferAttribute(st,Q),O[Z+dt+4]=s.x,O[Z+dt+5]=s.y,O[Z+dt+6]=s.z,O[Z+dt+7]=0),I===!0&&(s.fromBufferAttribute(lt,Q),O[Z+dt+8]=s.x,O[Z+dt+9]=s.y,O[Z+dt+10]=s.z,O[Z+dt+11]=lt.itemSize===4?s.w:1)}}m={count:v,texture:G,size:new kt(R,E)},n.set(l,m),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let M=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function GS(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,v=h.geometry,m=t.get(h,v);if(r.get(m)!==d&&(t.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==d&&(y.update(),r.set(y,d))}return m}function l(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var WS={[zd]:"LINEAR_TONE_MAPPING",[$d]:"REINHARD_TONE_MAPPING",[Vd]:"CINEON_TONE_MAPPING",[Hd]:"ACES_FILMIC_TONE_MAPPING",[Wd]:"AGX_TONE_MAPPING",[Xd]:"NEUTRAL_TONE_MAPPING",[Gd]:"CUSTOM_TONE_MAPPING"};function XS(i,t,e,n,s,r){let a=new hi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new vn;h.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xn([0,2,0,0,2,0],2));let d=new Xc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Nn(h,d),m=new ya(-1,1,1,-1,0,1),y=null,M=null,I=!1,x,g=null,B=[],k=!1;this.setSize=function(R,E){a.setSize(R,E),l!==null&&l.setSize(R,E),c!==null&&c.setSize(R,E);for(let O=0;O<B.length;O++){let G=B[O];G.setSize&&G.setSize(R,E)}},this.setEffects=function(R){B=R,k=B.length>0&&B[0].isRenderPass===!0;let E=a.width,O=a.height;B.length>0&&l===null&&(l=new hi(E,O,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),c=new hi(E,O,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<B.length;G++){let A=B[G];A.setSize&&A.setSize(E,O)}},this.begin=function(R,E){if(I||R.toneMapping===Hi&&B.length===0)return!1;if(g=E,E!==null){let O=E.width,G=E.height;(a.width!==O||a.height!==G)&&this.setSize(O,G)}return k===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=Hi,!0},this.hasRenderPass=function(){return k},this.end=function(R,E){R.toneMapping=x,I=!0;let O=a,G=l;for(let A=0;A<B.length;A++){let F=B[A];F.enabled!==!1&&(F.render(R,G,O,E),F.needsSwap!==!1&&(O=G,G=G===l?c:l))}if(y!==R.outputColorSpace||M!==R.toneMapping){y=R.outputColorSpace,M=R.toneMapping,d.defines={},Ve.getTransfer(y)===nn&&(d.defines.SRGB_TRANSFER="");let A=WS[M];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(g),R.render(v,m),g=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Og=new ci,gf=new Hs(1,1),Bg=new bo,kg=new Dc,zg=new Po,xg=[],vg=[],yg=new Float32Array(16),Sg=new Float32Array(9),Mg=new Float32Array(4);function Ca(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xg[s];if(r===void 0&&(r=new Float32Array(s),xg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function En(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function su(i,t){let e=vg[t];e===void 0&&(e=new Int32Array(t),vg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function YS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2fv(this.addr,t),Tn(e,t)}}function ZS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;i.uniform3fv(this.addr,t),Tn(e,t)}}function JS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4fv(this.addr,t),Tn(e,t)}}function jS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Mg.set(n),i.uniformMatrix2fv(this.addr,!1,Mg),Tn(e,n)}}function KS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Sg.set(n),i.uniformMatrix3fv(this.addr,!1,Sg),Tn(e,n)}}function QS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;yg.set(n),i.uniformMatrix4fv(this.addr,!1,yg),Tn(e,n)}}function tM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2iv(this.addr,t),Tn(e,t)}}function nM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3iv(this.addr,t),Tn(e,t)}}function iM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4iv(this.addr,t),Tn(e,t)}}function sM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2uiv(this.addr,t),Tn(e,t)}}function aM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3uiv(this.addr,t),Tn(e,t)}}function oM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4uiv(this.addr,t),Tn(e,t)}}function lM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gf.compareFunction=e.isReversedDepthBuffer()?jh:Jh,r=gf):r=Og,e.setTexture2D(t||r,s)}function cM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kg,s)}function hM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zg,s)}function uM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bg,s)}function dM(i){switch(i){case 5126:return qS;case 35664:return YS;case 35665:return ZS;case 35666:return JS;case 35674:return jS;case 35675:return KS;case 35676:return QS;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return rM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(i,t){i.uniform1fv(this.addr,t)}function pM(i,t){let e=Ca(t,this.size,2);i.uniform2fv(this.addr,e)}function mM(i,t){let e=Ca(t,this.size,3);i.uniform3fv(this.addr,e)}function gM(i,t){let e=Ca(t,this.size,4);i.uniform4fv(this.addr,e)}function _M(i,t){let e=Ca(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xM(i,t){let e=Ca(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vM(i,t){let e=Ca(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yM(i,t){i.uniform1iv(this.addr,t)}function SM(i,t){i.uniform2iv(this.addr,t)}function MM(i,t){i.uniform3iv(this.addr,t)}function bM(i,t){i.uniform4iv(this.addr,t)}function wM(i,t){i.uniform1uiv(this.addr,t)}function EM(i,t){i.uniform2uiv(this.addr,t)}function TM(i,t){i.uniform3uiv(this.addr,t)}function AM(i,t){i.uniform4uiv(this.addr,t)}function CM(i,t,e){let n=this.cache,s=t.length,r=su(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gf:a=Og;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function RM(i,t,e){let n=this.cache,s=t.length,r=su(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kg,r[a])}function IM(i,t,e){let n=this.cache,s=t.length,r=su(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zg,r[a])}function PM(i,t,e){let n=this.cache,s=t.length,r=su(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bg,r[a])}function LM(i){switch(i){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return bM;case 5125:return wM;case 36294:return EM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return PM}}var _f=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dM(e.type)}},xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LM(e.type)}},vf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},pf=/(\w+)(\])?(\[|\.)?/g;function bg(i,t){i.seq.push(t),i.map[t.id]=t}function DM(i,t,e){let n=i.name,s=n.length;for(pf.lastIndex=0;;){let r=pf.exec(n),a=pf.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){bg(e,h===void 0?new _f(l,i,t):new xf(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new vf(l),bg(e,v)),e=v}}}var Aa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);DM(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var NM=37297,UM=0;function FM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Eg=new Ce;function OM(i){Ve._getMatrix(Eg,Ve.workingColorSpace,i);let t=`mat3( ${Eg.elements.map(e=>e.toFixed(4))} )`;switch(Ve.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+FM(i.getShaderSource(t),l)}else return r}function BM(i,t){let e=OM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var kM={[zd]:"Linear",[$d]:"Reinhard",[Vd]:"Cineon",[Hd]:"ACESFilmic",[Wd]:"AgX",[Xd]:"Neutral",[Gd]:"Custom"};function zM(i,t){let e=kM[t];return e===void 0?(Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qh=new q;function $M(){Ve.getLuminanceCoefficients(Qh);let i=Qh.x.toFixed(4),t=Qh.y.toFixed(4),e=Qh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function HM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function GM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function ul(i){return i!==""}function Ag(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(i){return i.replace(WM,qM)}var XM=new Map;function qM(i,t){let e=Be[t];if(e===void 0){let n=XM.get(t);if(n!==void 0)e=Be[n],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yf(e)}var YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(i){return i.replace(YM,ZM)}function ZM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ig(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var JM={[Qo]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function jM(i){return JM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var KM={[Zs]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};function QM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":KM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var tb={[Tr]:"ENVMAP_MODE_REFRACTION"};function eb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nb={[lh]:"ENVMAP_BLENDING_MULTIPLY",[Wm]:"ENVMAP_BLENDING_MIX",[Xm]:"ENVMAP_BLENDING_ADD"};function ib(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nb[i.combine]||"ENVMAP_BLENDING_NONE"}function sb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=jM(e),h=QM(e),d=eb(e),v=ib(e),m=sb(e),y=VM(e),M=HM(r),I=s.createProgram(),x,g,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ul).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ul).join(`
`),g.length>0&&(g+=`
`)):(x=[Ig(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),g=[Ig(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Hi?zM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,BM("linearToOutputTexel",e.outputColorSpace),$M(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ul).join(`
`)),a=yf(a),a=Ag(a,e),a=Cg(a,e),l=yf(l),l=Ag(l,e),l=Cg(l,e),a=Rg(a),l=Rg(l),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let k=B+x+a,R=B+g+l,E=wg(s,s.VERTEX_SHADER,k),O=wg(s,s.FRAGMENT_SHADER,R);s.attachShader(I,E),s.attachShader(I,O),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(W){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(I)||"",lt=s.getShaderInfoLog(E)||"",Z=s.getShaderInfoLog(O)||"",Q=st.trim(),dt=lt.trim(),mt=Z.trim(),Tt=!0,gt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,E,O);else{let Mt=Tg(s,E,"vertex"),St=Tg(s,O,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Q+`
`+Mt+`
`+St)}else Q!==""?Se("WebGLProgram: Program Info Log:",Q):(dt===""||mt==="")&&(gt=!1);gt&&(W.diagnostics={runnable:Tt,programLog:Q,vertexShader:{log:dt,prefix:x},fragmentShader:{log:mt,prefix:g}})}s.deleteShader(E),s.deleteShader(O),A=new Aa(s,I),F=GM(s,I)}let A;this.getUniforms=function(){return A===void 0&&G(this),A};let F;this.getAttributes=function(){return F===void 0&&G(this),F};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(I,NM)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=E,this.fragmentShader=O,this}var ab=0,Sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mf(t),e.set(t,n)),n}},Mf=class{constructor(t){this.id=ab++,this.code=t,this.usedTimes=0}};function ob(i){return i===Ks||i===al||i===ol}function lb(i,t,e,n,s,r){let a=new fa,l=new Sf,c=new Set,h=[],d=new Map,v=n.logarithmicDepthBuffer,m=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return c.add(A),A===0?"uv":`uv${A}`}function I(A,F,H,W,st,lt){let Z=W.fog,Q=st.geometry,dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Tt=t.get(A.envMap||dt,mt),gt=Tt&&Tt.mapping===tl?Tt.image.height:null,Mt=y[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&Se("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xt=St!==void 0?St.length:0,Qt=0;Q.morphAttributes.position!==void 0&&(Qt=1),Q.morphAttributes.normal!==void 0&&(Qt=2),Q.morphAttributes.color!==void 0&&(Qt=3);let Ge,Pe,$e,xt;if(Mt){let Je=ei[Mt];Ge=Je.vertexShader,Pe=Je.fragmentShader}else{Ge=A.vertexShader,Pe=A.fragmentShader;let Je=l.getVertexShaderStage(A),We=l.getFragmentShaderStage(A);l.update(A,Je,We),$e=Je.id,xt=We.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Jt=st.isBatchedMesh===!0,_e=!!A.map,se=!!A.matcap,nt=!!Tt,Ct=!!A.aoMap,$=!!A.lightMap,Rt=!!A.bumpMap&&A.wireframe===!1,Ot=!!A.normalMap,le=!!A.displacementMap,de=!!A.emissiveMap,ue=!!A.metalnessMap,we=!!A.roughnessMap,X=A.anisotropy>0,Ue=A.clearcoat>0,Le=A.dispersion>0,U=A.retroreflectivity>0,b=A.iridescence>0,et=A.sheen>0,at=A.transmission>0,_t=X&&!!A.anisotropyMap,It=Ue&&!!A.clearcoatMap,Bt=Ue&&!!A.clearcoatNormalMap,pt=Ue&&!!A.clearcoatRoughnessMap,ct=b&&!!A.iridescenceMap,Gt=b&&!!A.iridescenceThicknessMap,ce=et&&!!A.sheenColorMap,qt=et&&!!A.sheenRoughnessMap,zt=!!A.specularMap,ae=!!A.specularColorMap,fe=!!A.specularIntensityMap,Ee=at&&!!A.transmissionMap,K=at&&!!A.thicknessMap,Wt=!!A.gradientMap,yt=!!A.alphaMap,$t=A.alphaTest>0,jt=!!A.alphaHash,Et=!!A.extensions,ne=Hi;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=i.toneMapping);let te={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:Ge,fragmentShader:Pe,defines:A.defines,customVertexShaderID:$e,customFragmentShaderID:xt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Jt,batchingColor:Jt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:_e,matcap:se,envMap:nt,envMapMode:nt&&Tt.mapping,envMapCubeUVHeight:gt,aoMap:Ct,lightMap:$,bumpMap:Rt,normalMap:Ot,displacementMap:le,emissiveMap:de,normalMapObjectSpace:Ot&&A.normalMapType===Zm,normalMapTangentSpace:Ot&&A.normalMapType===Zh,packedNormalMap:Ot&&A.normalMapType===Zh&&ob(A.normalMap.format),metalnessMap:ue,roughnessMap:we,anisotropy:X,anisotropyMap:_t,clearcoat:Ue,clearcoatMap:It,clearcoatNormalMap:Bt,clearcoatRoughnessMap:pt,dispersion:Le,retroreflection:U,iridescence:b,iridescenceMap:ct,iridescenceThicknessMap:Gt,sheen:et,sheenColorMap:ce,sheenRoughnessMap:qt,specularMap:zt,specularColorMap:ae,specularIntensityMap:fe,transmission:at,transmissionMap:Ee,thicknessMap:K,gradientMap:Wt,opaque:A.transparent===!1&&A.blending===Ma&&A.alphaToCoverage===!1,alphaMap:yt,alphaTest:$t,alphaHash:jt,combine:A.combine,mapUv:_e&&M(A.map.channel),aoMapUv:Ct&&M(A.aoMap.channel),lightMapUv:$&&M(A.lightMap.channel),bumpMapUv:Rt&&M(A.bumpMap.channel),normalMapUv:Ot&&M(A.normalMap.channel),displacementMapUv:le&&M(A.displacementMap.channel),emissiveMapUv:de&&M(A.emissiveMap.channel),metalnessMapUv:ue&&M(A.metalnessMap.channel),roughnessMapUv:we&&M(A.roughnessMap.channel),anisotropyMapUv:_t&&M(A.anisotropyMap.channel),clearcoatMapUv:It&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:qt&&M(A.sheenRoughnessMap.channel),specularMapUv:zt&&M(A.specularMap.channel),specularColorMapUv:ae&&M(A.specularColorMap.channel),specularIntensityMapUv:fe&&M(A.specularIntensityMap.channel),transmissionMapUv:Ee&&M(A.transmissionMap.channel),thicknessMapUv:K&&M(A.thicknessMap.channel),alphaMapUv:yt&&M(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ot||X),vertexNormals:!!Q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!Q.attributes.uv&&(_e||yt),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&Ot===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Qt,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:_e&&A.map.isVideoTexture===!0&&Ve.getTransfer(A.map.colorSpace)===nn,decodeVideoTextureEmissive:de&&A.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(A.emissiveMap.colorSpace)===nn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===is,flipSided:A.side===ti,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function x(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let H in A.defines)F.push(H),F.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(g(F,A),B(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function g(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function B(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function k(A){let F=y[A.type],H;if(F){let W=ei[F];H=ll.clone(W.uniforms)}else H=A.uniforms;return H}function R(A,F){let H=d.get(F);return H!==void 0?++H.usedTimes:(H=new rb(i,F,A,s),h.push(H),d.set(F,H)),H}function E(A){if(--A.usedTimes===0){let F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function G(){l.dispose()}return{getParameters:I,getProgramCacheKey:x,getUniforms:k,acquireProgram:R,releaseProgram:E,releaseShaderCache:O,programs:h,dispose:G}}function cb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function l(m,y,M,I,x,g){let B=i[t];return B===void 0?(B={id:m.id,object:m,geometry:y,material:M,materialVariant:a(m),groupOrder:I,renderOrder:m.renderOrder,z:x,group:g},i[t]=B):(B.id=m.id,B.object=m,B.geometry=y,B.material=M,B.materialVariant=a(m),B.groupOrder=I,B.renderOrder=m.renderOrder,B.z=x,B.group=g),t++,B}function c(m,y,M,I,x,g,B){B.reversedDepth===!0&&(x=-x);let k=l(m,y,M,I,x,g);M.transmission>0?n.push(k):M.transparent===!0?s.push(k):e.push(k)}function h(m,y,M,I,x,g){let B=l(m,y,M,I,x,g);M.transmission>0?n.unshift(B):M.transparent===!0?s.unshift(B):e.unshift(B)}function d(m,y){e.length>1&&e.sort(m||hb),n.length>1&&n.sort(y||Pg),s.length>1&&s.sort(y||Pg)}function v(){for(let m=t,y=i.length;m<y;m++){let M=i[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:v,sort:d}}function ub(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lg,i.set(n,[a])):s>=r.length?(a=new Lg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function db(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new ve};break;case"SpotLight":e={position:new q,direction:new q,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function fb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var pb=0;function mb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gb(i){let t=new db,e=fb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new q);let s=new q,r=new He,a=new He;function l(h){let d=0,v=0,m=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let y=0,M=0,I=0,x=0,g=0,B=0,k=0,R=0,E=0,O=0,G=0,A=0,F=0,H=0;h.sort(mb);for(let st=0,lt=h.length;st<lt;st++){let Z=h[st],Q=Z.color,dt=Z.intensity,mt=Z.distance,Tt=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===Ks?Tt=Z.shadow.map.texture:Tt=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)d+=Q.r*dt,v+=Q.g*dt,m+=Q.b*dt;else if(Z.isLightProbe){for(let gt=0;gt<9;gt++)n.probe[gt].addScaledVector(Z.sh.coefficients[gt],dt);H++}else if(Z.isSunLight){let gt=t.get(Z);if(gt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let Mt=Z.shadow,St=e.get(Z);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[M]=St,n.sunShadowMap[M]=Tt;let Xt=Mt.getViewportCount();for(let Qt=0;Qt<Xt;Qt++)n.sunShadowMatrix[I+Qt]=Mt.getMatrix(Qt),n.sunShadowCascade[I+Qt]=Mt._cascadeData[Qt];I+=Xt,M++}n.sun[y]=gt,y++}else if(Z.isDirectionalLight){let gt=t.get(Z);if(gt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let Mt=Z.shadow,St=e.get(Z);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.directionalShadow[x]=St,n.directionalShadowMap[x]=Tt,n.directionalShadowMatrix[x]=Z.shadow.matrix,E++}n.directional[x]=gt,x++}else if(Z.isSpotLight){let gt=t.get(Z);gt.position.setFromMatrixPosition(Z.matrixWorld),gt.color.copy(Q).multiplyScalar(dt),gt.distance=mt,gt.coneCos=Math.cos(Z.angle),gt.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),gt.decay=Z.decay,n.spot[B]=gt;let Mt=Z.shadow;if(Z.map&&(n.spotLightMap[A]=Z.map,A++,Mt.updateMatrices(Z),Z.castShadow&&F++),n.spotLightMatrix[B]=Mt.matrix,Z.castShadow){let St=e.get(Z);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.spotShadow[B]=St,n.spotShadowMap[B]=Tt,G++}B++}else if(Z.isRectAreaLight){let gt=t.get(Z);gt.color.copy(Q).multiplyScalar(dt),gt.halfWidth.set(Z.width*.5,0,0),gt.halfHeight.set(0,Z.height*.5,0),n.rectArea[k]=gt,k++}else if(Z.isPointLight){let gt=t.get(Z);if(gt.color.copy(Z.color).multiplyScalar(Z.intensity),gt.distance=Z.distance,gt.decay=Z.decay,Z.castShadow){let Mt=Z.shadow,St=e.get(Z);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,St.shadowCameraNear=Mt.camera.near,St.shadowCameraFar=Mt.camera.far,n.pointShadow[g]=St,n.pointShadowMap[g]=Tt,n.pointShadowMatrix[g]=Z.shadow.matrix,O++}n.point[g]=gt,g++}else if(Z.isHemisphereLight){let gt=t.get(Z);gt.skyColor.copy(Z.color).multiplyScalar(dt),gt.groundColor.copy(Z.groundColor).multiplyScalar(dt),n.hemi[R]=gt,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=m;let W=n.hash;(W.sunLength!==y||W.directionalLength!==x||W.pointLength!==g||W.spotLength!==B||W.rectAreaLength!==k||W.hemiLength!==R||W.numSunShadows!==M||W.numDirectionalShadows!==E||W.numPointShadows!==O||W.numSpotShadows!==G||W.numSpotMaps!==A||W.numLightProbes!==H)&&(n.sun.length=y,n.directional.length=x,n.spot.length=B,n.rectArea.length=k,n.point.length=g,n.hemi.length=R,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=H,W.sunLength=y,W.directionalLength=x,W.pointLength=g,W.spotLength=B,W.rectAreaLength=k,W.hemiLength=R,W.numSunShadows=M,W.numDirectionalShadows=E,W.numPointShadows=O,W.numSpotShadows=G,W.numSpotMaps=A,W.numLightProbes=H,n.version=pb++)}function c(h,d){let v=0,m=0,y=0,M=0,I=0,x=0,g=d.matrixWorldInverse;for(let B=0,k=h.length;B<k;B++){let R=h[B];if(R.isSunLight){let E=n.sun[v];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),v++}else if(R.isDirectionalLight){let E=n.directional[m];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(R.isSpotLight){let E=n.spot[M];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),M++}else if(R.isRectAreaLight){let E=n.rectArea[I];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let E=n.point[y];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),y++}else if(R.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:l,setupView:c,state:n}}function Dg(i){let t=new gb(i),e=[],n=[],s=[];function r(m){v.camera=m,e.length=0,n.length=0,s.length=0}function a(m){e.push(m)}function l(m){n.push(m)}function c(m){s.push(m)}function h(){t.setup(e)}function d(m){t.setupView(e,m)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function _b(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Dg(i),t.set(s,[l])):r>=a.length?(l=new Dg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
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
}`,yb=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Sb=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Ng=new He,hl=new q,mf=new q;function Mb(i,t,e){let n=new ma,s=new kt,r=new kt,a=new sn,l=new qc,c=new Yc,h={},d=e.maxTextureSize,v={[Ys]:ti,[ti]:Ys,[is]:is},m=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:xb,fragmentShader:vb}),y=m.clone();y.defines.HORIZONTAL_PASS=1;let M=new vn;M.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Nn(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let g=this.type;this.render=function(O,G,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===Tm&&(Se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qo);let F=i.getRenderTarget(),H=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),st=i.state;st.setBlending(ss),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let lt=g!==this.type;lt&&G.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(Q=>Q.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,Q=O.length;Z<Q;Z++){let dt=O[Z],mt=dt.shadow;if(mt===void 0){Se("WebGLShadowMap:",dt,"has no shadow.");continue}if(mt.autoUpdate===!1&&mt.needsUpdate===!1)continue;s.copy(mt.mapSize);let Tt=mt.getFrameExtents();s.multiply(Tt),r.copy(mt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Tt.x),s.x=r.x*Tt.x,mt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Tt.y),s.y=r.y*Tt.y,mt.mapSize.y=r.y));let gt=i.state.buffers.depth.getReversed();if(mt.camera._reversedDepth=gt,mt.map===null||lt===!0){if(mt.map!==null&&(mt.map.depthTexture!==null&&(mt.map.depthTexture.dispose(),mt.map.depthTexture=null),mt.map.dispose()),this.type===Sa){if(dt.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}mt.map=new hi(s.x,s.y,{format:Ks,type:Wi,minFilter:$n,magFilter:$n,generateMipmaps:!1}),mt.map.texture.name=dt.name+".shadowMap",mt.map.depthTexture=new Hs(s.x,s.y,Ti),mt.map.depthTexture.name=dt.name+".shadowMapDepth",mt.map.depthTexture.format=Qi,mt.map.depthTexture.compareFunction=null,mt.map.depthTexture.minFilter=Ln,mt.map.depthTexture.magFilter=Ln}else dt.isPointLight?(mt.map=new eu(s.x),mt.map.depthTexture=new kc(s.x,Gi)):(mt.map=new hi(s.x,s.y),mt.map.depthTexture=new Hs(s.x,s.y,Gi)),mt.map.depthTexture.name=dt.name+".shadowMap",mt.map.depthTexture.format=Qi,this.type===Qo?(mt.map.depthTexture.compareFunction=gt?jh:Jh,mt.map.depthTexture.minFilter=$n,mt.map.depthTexture.magFilter=$n):(mt.map.depthTexture.compareFunction=null,mt.map.depthTexture.minFilter=Ln,mt.map.depthTexture.magFilter=Ln);mt.camera.updateProjectionMatrix()}mt.map.isWebGLCubeRenderTarget!==!0&&(mt.map.width!==s.x||mt.map.height!==s.y)&&mt.map.setSize(s.x,s.y);let Mt=mt.map.isWebGLCubeRenderTarget?6:mt.getViewportCount();dt.isPointLight!==!0&&mt.updateMatrices(dt,A);for(let St=0;St<Mt;St++){let Xt=mt.getCamera(St);if(dt.isPointLight){let Qt=mt.camera,Ge=mt.matrix,Pe=dt.distance||Qt.far;Pe!==Qt.far&&(Qt.far=Pe,Qt.updateProjectionMatrix()),hl.setFromMatrixPosition(dt.matrixWorld),Qt.position.copy(hl),mf.copy(Qt.position),mf.add(yb[St]),Qt.up.copy(Sb[St]),Qt.lookAt(mf),Qt.updateMatrixWorld(),Ge.makeTranslation(-hl.x,-hl.y,-hl.z),Ng.multiplyMatrices(Qt.projectionMatrix,Qt.matrixWorldInverse),mt._frustum.setFromProjectionMatrix(Ng,Qt.coordinateSystem,Qt.reversedDepth)}if(mt.map.isWebGLCubeRenderTarget)i.setRenderTarget(mt.map,St),i.clear();else{St===0&&(i.setRenderTarget(mt.map),i.clear());let Qt=mt.getViewport(St);a.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),st.viewport(a)}n=mt.getFrustum(St),R(G,A,Xt,dt,this.type)}mt.isPointLightShadow!==!0&&this.type===Sa&&B(mt,A),mt.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(F,H,W)};function B(O,G){let A=t.update(I);m.defines.VSM_SAMPLES!==O.blurSamples&&(m.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null?O.mapPass=new hi(s.x,s.y,{format:Ks,type:Wi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),m.uniforms.shadow_pass.value=O.map.depthTexture,m.uniforms.resolution.value.set(O.map.width,O.map.height),m.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(G,null,A,m,I,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value.set(O.map.width,O.map.height),y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(G,null,A,y,I,null)}function k(O,G,A,F){let H=null,W=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(W!==void 0)H=W;else if(H=A.isPointLight===!0?c:l,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let st=H.uuid,lt=G.uuid,Z=h[st];Z===void 0&&(Z={},h[st]=Z);let Q=Z[lt];Q===void 0&&(Q=H.clone(),Z[lt]=Q,G.addEventListener("dispose",E)),H=Q}if(H.visible=G.visible,H.wireframe=G.wireframe,F===Sa?H.side=G.shadowSide!==null?G.shadowSide:G.side:H.side=G.shadowSide!==null?G.shadowSide:v[G.side],H.alphaMap=G.alphaMap,H.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,H.map=G.map,H.clipShadows=G.clipShadows,H.clippingPlanes=G.clippingPlanes,H.clipIntersection=G.clipIntersection,H.displacementMap=G.displacementMap,H.displacementScale=G.displacementScale,H.displacementBias=G.displacementBias,H.wireframeLinewidth=G.wireframeLinewidth,H.linewidth=G.linewidth,A.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let st=i.properties.get(H);st.light=A}return H}function R(O,G,A,F,H){if(O.visible===!1)return;if(O.layers.test(G.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&H===Sa)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let lt=t.update(O),Z=O.material;if(Array.isArray(Z)){let Q=lt.groups;for(let dt=0,mt=Q.length;dt<mt;dt++){let Tt=Q[dt],gt=Z[Tt.materialIndex];if(gt&&gt.visible){let Mt=k(O,gt,F,H);O.onBeforeShadow(i,O,G,A,lt,Mt,Tt),i.renderBufferDirect(A,null,lt,Mt,O,Tt),O.onAfterShadow(i,O,G,A,lt,Mt,Tt)}}}else if(Z.visible){let Q=k(O,Z,F,H);O.onBeforeShadow(i,O,G,A,lt,Q,null),i.renderBufferDirect(A,null,lt,Q,O,null),O.onAfterShadow(i,O,G,A,lt,Q,null)}}let st=O.children;for(let lt=0,Z=st.length;lt<Z;lt++)R(st[lt],G,A,F,H)}function E(O){O.target.removeEventListener("dispose",E);for(let A in h){let F=h[A],H=O.target.uuid;H in F&&(F[H].dispose(),delete F[H])}}}function bb(i,t){function e(){let K=!1,Wt=new sn,yt=null,$t=new sn(0,0,0,0);return{setMask:function(jt){yt!==jt&&!K&&(i.colorMask(jt,jt,jt,jt),yt=jt)},setLocked:function(jt){K=jt},setClear:function(jt,Et,ne,te,Je){Je===!0&&(jt*=te,Et*=te,ne*=te),Wt.set(jt,Et,ne,te),$t.equals(Wt)===!1&&(i.clearColor(jt,Et,ne,te),$t.copy(Wt))},reset:function(){K=!1,yt=null,$t.set(-1,0,0,0)}}}function n(){let K=!1,Wt=!1,yt=null,$t=null,jt=null;return{setReversed:function(Et){if(Wt!==Et){let ne=t.get("EXT_clip_control");Et?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Wt=Et;let te=jt;jt=null,this.setClear(te)}},getReversed:function(){return Wt},setTest:function(Et){Et?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Et){yt!==Et&&!K&&(i.depthMask(Et),yt=Et)},setFunc:function(Et){if(Wt&&(Et=ag[Et]),$t!==Et){switch(Et){case Sc:i.depthFunc(i.NEVER);break;case Mc:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case wc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$t=Et}},setLocked:function(Et){K=Et},setClear:function(Et){jt!==Et&&(jt=Et,Wt&&(Et=1-Et),i.clearDepth(Et))},reset:function(){K=!1,yt=null,$t=null,jt=null,Wt=!1}}}function s(){let K=!1,Wt=null,yt=null,$t=null,jt=null,Et=null,ne=null,te=null,Je=null;return{setTest:function(We){K||(We?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(We){Wt!==We&&!K&&(i.stencilMask(We),Wt=We)},setFunc:function(We,On,ii){(yt!==We||$t!==On||jt!==ii)&&(i.stencilFunc(We,On,ii),yt=We,$t=On,jt=ii)},setOp:function(We,On,ii){(Et!==We||ne!==On||te!==ii)&&(i.stencilOp(We,On,ii),Et=We,ne=On,te=ii)},setLocked:function(We){K=We},setClear:function(We){Je!==We&&(i.clearStencil(We),Je=We)},reset:function(){K=!1,Wt=null,yt=null,$t=null,jt=null,Et=null,ne=null,te=null,Je=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,d={},v={},m={},y=new WeakMap,M=[],I=null,x=!1,g=null,B=null,k=null,R=null,E=null,O=null,G=null,A=new ve(0,0,0),F=0,H=!1,W=null,st=null,lt=null,Z=null,Q=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),mt=!1,Tt=0,gt=i.getParameter(i.VERSION);gt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(gt)[1]),mt=Tt>=1):gt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),mt=Tt>=2);let Mt=null,St={},Xt=i.getParameter(i.SCISSOR_BOX),Qt=i.getParameter(i.VIEWPORT),Ge=new sn().fromArray(Xt),Pe=new sn().fromArray(Qt);function $e(K,Wt,yt,$t){let jt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(K,Et),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<yt;ne++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Wt,0,i.RGBA,1,1,$t,0,i.RGBA,i.UNSIGNED_BYTE,jt):i.texImage2D(Wt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,jt);return Et}let xt={};xt[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(la),Rt(!1),Ot(Nd),vt(i.CULL_FACE),Ct(ss);function vt(K){d[K]!==!0&&(i.enable(K),d[K]=!0)}function Pt(K){d[K]!==!1&&(i.disable(K),d[K]=!1)}function oe(K,Wt){return m[K]!==Wt?(i.bindFramebuffer(K,Wt),m[K]=Wt,K===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Wt),K===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Wt),!0):!1}function Jt(K,Wt){let yt=M,$t=!1;if(K){yt=y.get(Wt),yt===void 0&&(yt=[],y.set(Wt,yt));let jt=K.textures;if(yt.length!==jt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,ne=jt.length;Et<ne;Et++)yt[Et]=i.COLOR_ATTACHMENT0+Et;yt.length=jt.length,$t=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,$t=!0);$t&&i.drawBuffers(yt)}function _e(K){return I!==K?(i.useProgram(K),I=K,!0):!1}let se={[Er]:i.FUNC_ADD,[Cm]:i.FUNC_SUBTRACT,[Rm]:i.FUNC_REVERSE_SUBTRACT};se[Im]=i.MIN,se[Pm]=i.MAX;let nt={[Lm]:i.ZERO,[Dm]:i.ONE,[Nm]:i.SRC_COLOR,[Bd]:i.SRC_ALPHA,[zm]:i.SRC_ALPHA_SATURATE,[Bm]:i.DST_COLOR,[Fm]:i.DST_ALPHA,[Um]:i.ONE_MINUS_SRC_COLOR,[kd]:i.ONE_MINUS_SRC_ALPHA,[km]:i.ONE_MINUS_DST_COLOR,[Om]:i.ONE_MINUS_DST_ALPHA,[$m]:i.CONSTANT_COLOR,[Vm]:i.ONE_MINUS_CONSTANT_COLOR,[Hm]:i.CONSTANT_ALPHA,[Gm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(K,Wt,yt,$t,jt,Et,ne,te,Je,We){if(K===ss){x===!0&&(Pt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),K!==Am){if(K!==g||We!==H){if((B!==Er||E!==Er)&&(i.blendEquation(i.FUNC_ADD),B=Er,E=Er),We)switch(K){case Ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ud:i.blendFunc(i.ONE,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Od:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",K);break}else switch(K){case Ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ud:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fd:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Od:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",K);break}k=null,R=null,O=null,G=null,A.set(0,0,0),F=0,g=K,H=We}return}jt=jt||Wt,Et=Et||yt,ne=ne||$t,(Wt!==B||jt!==E)&&(i.blendEquationSeparate(se[Wt],se[jt]),B=Wt,E=jt),(yt!==k||$t!==R||Et!==O||ne!==G)&&(i.blendFuncSeparate(nt[yt],nt[$t],nt[Et],nt[ne]),k=yt,R=$t,O=Et,G=ne),(te.equals(A)===!1||Je!==F)&&(i.blendColor(te.r,te.g,te.b,Je),A.copy(te),F=Je),g=K,H=!1}function $(K,Wt){K.side===is?Pt(i.CULL_FACE):vt(i.CULL_FACE);let yt=K.side===ti;Wt&&(yt=!yt),Rt(yt),K.blending===Ma&&K.transparent===!1?Ct(ss):Ct(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let $t=K.stencilWrite;l.setTest($t),$t&&(l.setMask(K.stencilWriteMask),l.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),l.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),de(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(K){W!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),W=K)}function Ot(K){K!==wm?(vt(i.CULL_FACE),K!==st&&(K===Nd?i.cullFace(i.BACK):K===Em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),st=K}function le(K){K!==lt&&(mt&&i.lineWidth(K),lt=K)}function de(K,Wt,yt){K?(vt(i.POLYGON_OFFSET_FILL),(Z!==Wt||Q!==yt)&&(Z=Wt,Q=yt,a.getReversed()&&(Wt=-Wt),i.polygonOffset(Wt,yt))):Pt(i.POLYGON_OFFSET_FILL)}function ue(K){K?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function we(K){K===void 0&&(K=i.TEXTURE0+dt-1),Mt!==K&&(i.activeTexture(K),Mt=K)}function X(K,Wt,yt){yt===void 0&&(Mt===null?yt=i.TEXTURE0+dt-1:yt=Mt);let $t=St[yt];$t===void 0&&($t={type:void 0,texture:void 0},St[yt]=$t),($t.type!==K||$t.texture!==Wt)&&(Mt!==yt&&(i.activeTexture(yt),Mt=yt),i.bindTexture(K,Wt||xt[K]),$t.type=K,$t.texture=Wt)}function Ue(){let K=St[Mt];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Le(){try{i.compressedTexImage2D(...arguments)}catch(K){be("WebGLState:",K)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(K){be("WebGLState:",K)}}function b(){try{i.texSubImage2D(...arguments)}catch(K){be("WebGLState:",K)}}function et(){try{i.texSubImage3D(...arguments)}catch(K){be("WebGLState:",K)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(K){be("WebGLState:",K)}}function _t(){try{i.compressedTexSubImage3D(...arguments)}catch(K){be("WebGLState:",K)}}function It(){try{i.texStorage2D(...arguments)}catch(K){be("WebGLState:",K)}}function Bt(){try{i.texStorage3D(...arguments)}catch(K){be("WebGLState:",K)}}function pt(){try{i.texImage2D(...arguments)}catch(K){be("WebGLState:",K)}}function ct(){try{i.texImage3D(...arguments)}catch(K){be("WebGLState:",K)}}function Gt(K){return v[K]!==void 0?v[K]:i.getParameter(K)}function ce(K,Wt){v[K]!==Wt&&(i.pixelStorei(K,Wt),v[K]=Wt)}function qt(K){Ge.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Ge.copy(K))}function zt(K){Pe.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Pe.copy(K))}function ae(K,Wt){let yt=h.get(Wt);yt===void 0&&(yt=new WeakMap,h.set(Wt,yt));let $t=yt.get(K);$t===void 0&&($t=i.getUniformBlockIndex(Wt,K.name),yt.set(K,$t))}function fe(K,Wt){let $t=h.get(Wt).get(K);c.get(Wt)!==$t&&(i.uniformBlockBinding(Wt,$t,K.__bindingPointIndex),c.set(Wt,$t))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},Mt=null,St={},m={},y=new WeakMap,M=[],I=null,x=!1,g=null,B=null,k=null,R=null,E=null,O=null,G=null,A=new ve(0,0,0),F=0,H=!1,W=null,st=null,lt=null,Z=null,Q=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Pt,bindFramebuffer:oe,drawBuffers:Jt,useProgram:_e,setBlending:Ct,setMaterial:$,setFlipSided:Rt,setCullFace:Ot,setLineWidth:le,setPolygonOffset:de,setScissorTest:ue,activeTexture:we,bindTexture:X,unbindTexture:Ue,compressedTexImage2D:Le,compressedTexImage3D:U,texImage2D:pt,texImage3D:ct,pixelStorei:ce,getParameter:Gt,updateUBOMapping:ae,uniformBlockBinding:fe,texStorage2D:It,texStorage3D:Bt,texSubImage2D:b,texSubImage3D:et,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:qt,viewport:zt,reset:Ee}}function wb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap,v=new Set,m,y=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,b){return M?new OffscreenCanvas(U,b):So("canvas")}function x(U,b,et){let at=1,_t=Le(U);if((_t.width>et||_t.height>et)&&(at=et/Math.max(_t.width,_t.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let It=Math.floor(at*_t.width),Bt=Math.floor(at*_t.height);m===void 0&&(m=I(It,Bt));let pt=b?I(It,Bt):m;return pt.width=It,pt.height=Bt,pt.getContext("2d").drawImage(U,0,0,It,Bt),Se("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+It+"x"+Bt+")."),pt}else return"data"in U&&Se("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),U;return U}function g(U){return U.generateMipmaps}function B(U){i.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(U,b,et,at,_t,It=!1){if(U!==null){if(i[U]!==void 0)return i[U];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Bt;at&&(Bt=t.get("EXT_texture_norm16"),Bt||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=b;if(b===i.RED&&(et===i.FLOAT&&(pt=i.R32F),et===i.HALF_FLOAT&&(pt=i.R16F),et===i.UNSIGNED_BYTE&&(pt=i.R8),et===i.UNSIGNED_SHORT&&Bt&&(pt=Bt.R16_EXT),et===i.SHORT&&Bt&&(pt=Bt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.R8UI),et===i.UNSIGNED_SHORT&&(pt=i.R16UI),et===i.UNSIGNED_INT&&(pt=i.R32UI),et===i.BYTE&&(pt=i.R8I),et===i.SHORT&&(pt=i.R16I),et===i.INT&&(pt=i.R32I)),b===i.RG&&(et===i.FLOAT&&(pt=i.RG32F),et===i.HALF_FLOAT&&(pt=i.RG16F),et===i.UNSIGNED_BYTE&&(pt=i.RG8),et===i.UNSIGNED_SHORT&&Bt&&(pt=Bt.RG16_EXT),et===i.SHORT&&Bt&&(pt=Bt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RG8UI),et===i.UNSIGNED_SHORT&&(pt=i.RG16UI),et===i.UNSIGNED_INT&&(pt=i.RG32UI),et===i.BYTE&&(pt=i.RG8I),et===i.SHORT&&(pt=i.RG16I),et===i.INT&&(pt=i.RG32I)),b===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),et===i.UNSIGNED_INT&&(pt=i.RGB32UI),et===i.BYTE&&(pt=i.RGB8I),et===i.SHORT&&(pt=i.RGB16I),et===i.INT&&(pt=i.RGB32I)),b===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),et===i.UNSIGNED_INT&&(pt=i.RGBA32UI),et===i.BYTE&&(pt=i.RGBA8I),et===i.SHORT&&(pt=i.RGBA16I),et===i.INT&&(pt=i.RGBA32I)),b===i.RGB&&(et===i.UNSIGNED_SHORT&&Bt&&(pt=Bt.RGB16_EXT),et===i.SHORT&&Bt&&(pt=Bt.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),b===i.RGBA){let ct=It?yo:Ve.getTransfer(_t);et===i.FLOAT&&(pt=i.RGBA32F),et===i.HALF_FLOAT&&(pt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(pt=ct===nn?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&Bt&&(pt=Bt.RGBA16_EXT),et===i.SHORT&&Bt&&(pt=Bt.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function E(U,b){let et;return U?b===null||b===Gi||b===wa?et=i.DEPTH24_STENCIL8:b===Ti?et=i.DEPTH32F_STENCIL8:b===ba&&(et=i.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===wa?et=i.DEPTH_COMPONENT24:b===Ti?et=i.DEPTH_COMPONENT32F:b===ba&&(et=i.DEPTH_COMPONENT16),et}function O(U,b){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==$n?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function G(U){let b=U.target;b.removeEventListener("dispose",G),F(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&v.delete(b)}function A(U){let b=U.target;b.removeEventListener("dispose",A),W(b)}function F(U){let b=n.get(U);if(b.__webglInit===void 0)return;let et=U.source,at=y.get(et);if(at){let _t=at[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&H(U),Object.keys(at).length===0&&y.delete(et)}n.remove(U)}function H(U){let b=n.get(U);i.deleteTexture(b.__webglTexture);let et=U.source,at=y.get(et);delete at[b.__cacheKey],a.memory.textures--}function W(U){let b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(b.__webglFramebuffer[at]))for(let _t=0;_t<b.__webglFramebuffer[at].length;_t++)i.deleteFramebuffer(b.__webglFramebuffer[at][_t]);else i.deleteFramebuffer(b.__webglFramebuffer[at]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[at])}else{if(Array.isArray(b.__webglFramebuffer))for(let at=0;at<b.__webglFramebuffer.length;at++)i.deleteFramebuffer(b.__webglFramebuffer[at]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let at=0;at<b.__webglColorRenderbuffer.length;at++)b.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[at]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let et=U.textures;for(let at=0,_t=et.length;at<_t;at++){let It=n.get(et[at]);It.__webglTexture&&(i.deleteTexture(It.__webglTexture),a.memory.textures--),n.remove(et[at])}n.remove(U)}let st=0;function lt(){st=0}function Z(){return st}function Q(U){st=U}function dt(){let U=st;return U>=s.maxTextures&&Se("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,U}function mt(U){let b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function Tt(U,b){let et=n.get(U);if(U.isVideoTexture&&X(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){let at=U.image;if(at===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(et,U,b);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+b)}function gt(U,b){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Pt(et,U,b);return}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+b)}function Mt(U,b){let et=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Pt(et,U,b);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+b)}function St(U,b){let et=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&et.__version!==U.version){oe(et,U,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+b)}let Xt={[Cc]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[Rc]:i.MIRRORED_REPEAT},Qt={[Ln]:i.NEAREST,[qm]:i.NEAREST_MIPMAP_NEAREST,[el]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[uh]:i.LINEAR_MIPMAP_NEAREST,[Js]:i.LINEAR_MIPMAP_LINEAR},Ge={[jm]:i.NEVER,[ng]:i.ALWAYS,[Km]:i.LESS,[Jh]:i.LEQUAL,[Qm]:i.EQUAL,[jh]:i.GEQUAL,[tg]:i.GREATER,[eg]:i.NOTEQUAL};function Pe(U,b){if(b.type===Ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===$n||b.magFilter===uh||b.magFilter===el||b.magFilter===Js||b.minFilter===$n||b.minFilter===uh||b.minFilter===el||b.minFilter===Js)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Xt[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Xt[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Xt[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Qt[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Qt[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ge[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==el&&b.minFilter!==Js||b.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function $e(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",G));let at=b.source,_t=y.get(at);_t===void 0&&(_t={},y.set(at,_t));let It=mt(b);if(It!==U.__cacheKey){_t[It]===void 0&&(_t[It]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),_t[It].usedTimes++;let Bt=_t[U.__cacheKey];Bt!==void 0&&(_t[U.__cacheKey].usedTimes--,Bt.usedTimes===0&&H(b)),U.__cacheKey=It,U.__webglTexture=_t[It].texture}return et}function xt(U,b,et){return Math.floor(Math.floor(U/et)/b)}function vt(U,b,et,at){let It=U.updateRanges;if(It.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,et,at,b.data);else{It.sort((ce,qt)=>ce.start-qt.start);let Bt=0;for(let ce=1;ce<It.length;ce++){let qt=It[Bt],zt=It[ce],ae=qt.start+qt.count,fe=xt(zt.start,b.width,4),Ee=xt(qt.start,b.width,4);zt.start<=ae+1&&fe===Ee&&xt(zt.start+zt.count-1,b.width,4)===fe?qt.count=Math.max(qt.count,zt.start+zt.count-qt.start):(++Bt,It[Bt]=zt)}It.length=Bt+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ce=0,qt=It.length;ce<qt;ce++){let zt=It[ce],ae=Math.floor(zt.start/4),fe=Math.ceil(zt.count/4),Ee=ae%b.width,K=Math.floor(ae/b.width),Wt=fe,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,Ee,K,Wt,yt,et,at,b.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function Pt(U,b,et){let at=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(at=i.TEXTURE_3D);let _t=$e(U,b),It=b.source;e.bindTexture(at,U.__webglTexture,i.TEXTURE0+et);let Bt=n.get(It);if(It.version!==Bt.__version||_t===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let yt=Ve.getPrimaries(Ve.workingColorSpace),$t=b.colorSpace===As?null:Ve.getPrimaries(b.colorSpace),jt=b.colorSpace===As||yt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ct=x(b.image,!1,s.maxTextureSize);ct=Ue(b,ct);let Gt=r.convert(b.format,b.colorSpace),ce=r.convert(b.type),qt=R(b.internalFormat,Gt,ce,b.normalized,b.colorSpace,b.isVideoTexture);Pe(at,b);let zt,ae=b.mipmaps,fe=b.isVideoTexture!==!0,Ee=Bt.__version===void 0||_t===!0,K=It.dataReady,Wt=O(b,ct);if(b.isDepthTexture)qt=E(b.format===js,b.type),Ee&&(fe?e.texStorage2D(i.TEXTURE_2D,1,qt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,qt,ct.width,ct.height,0,Gt,ce,null));else if(b.isDataTexture)if(ae.length>0){fe&&Ee&&e.texStorage2D(i.TEXTURE_2D,Wt,qt,ae[0].width,ae[0].height);for(let yt=0,$t=ae.length;yt<$t;yt++)zt=ae[yt],fe?K&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,zt.width,zt.height,Gt,ce,zt.data):e.texImage2D(i.TEXTURE_2D,yt,qt,zt.width,zt.height,0,Gt,ce,zt.data);b.generateMipmaps=!1}else fe?(Ee&&e.texStorage2D(i.TEXTURE_2D,Wt,qt,ct.width,ct.height),K&&vt(b,ct,Gt,ce)):e.texImage2D(i.TEXTURE_2D,0,qt,ct.width,ct.height,0,Gt,ce,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,qt,ae[0].width,ae[0].height,ct.depth);for(let yt=0,$t=ae.length;yt<$t;yt++)if(zt=ae[yt],b.format!==Ai)if(Gt!==null)if(fe){if(K)if(b.layerUpdates.size>0){let jt=cf(zt.width,zt.height,b.format,b.type);for(let Et of b.layerUpdates){let ne=zt.data.subarray(Et*jt/zt.data.BYTES_PER_ELEMENT,(Et+1)*jt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Et,zt.width,zt.height,1,Gt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,ct.depth,Gt,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,qt,zt.width,zt.height,ct.depth,0,zt.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,ct.depth,Gt,ce,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,qt,zt.width,zt.height,ct.depth,0,Gt,ce,zt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{fe&&Ee&&e.texStorage2D(i.TEXTURE_2D,Wt,qt,ae[0].width,ae[0].height);for(let yt=0,$t=ae.length;yt<$t;yt++)zt=ae[yt],b.format!==Ai?Gt!==null?fe?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,zt.width,zt.height,Gt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,qt,zt.width,zt.height,0,zt.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?K&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,zt.width,zt.height,Gt,ce,zt.data):e.texImage2D(i.TEXTURE_2D,yt,qt,zt.width,zt.height,0,Gt,ce,zt.data)}else if(b.isDataArrayTexture)if(fe){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,qt,ct.width,ct.height,ct.depth),K)if(b.layerUpdates.size>0){let yt=cf(ct.width,ct.height,b.format,b.type);for(let $t of b.layerUpdates){let jt=ct.data.subarray($t*yt/ct.data.BYTES_PER_ELEMENT,($t+1)*yt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,ct.width,ct.height,1,Gt,ce,jt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Gt,ce,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,ct.width,ct.height,ct.depth,0,Gt,ce,ct.data);else if(b.isData3DTexture)fe?(Ee&&e.texStorage3D(i.TEXTURE_3D,Wt,qt,ct.width,ct.height,ct.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Gt,ce,ct.data)):e.texImage3D(i.TEXTURE_3D,0,qt,ct.width,ct.height,ct.depth,0,Gt,ce,ct.data);else if(b.isFramebufferTexture){if(Ee)if(fe)e.texStorage2D(i.TEXTURE_2D,Wt,qt,ct.width,ct.height);else{let yt=ct.width,$t=ct.height;for(let jt=0;jt<Wt;jt++)e.texImage2D(i.TEXTURE_2D,jt,qt,yt,$t,0,Gt,ce,null),yt>>=1,$t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),ct.parentNode!==yt){yt.appendChild(ct),v.add(b),yt.onpaint=$t=>{let jt=$t.changedElements;for(let Et of v)jt.includes(Et.image)&&(Et.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let jt=i.RGBA,Et=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,jt,Et,ne,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(fe&&Ee){let yt=Le(ae[0]);e.texStorage2D(i.TEXTURE_2D,Wt,qt,yt.width,yt.height)}for(let yt=0,$t=ae.length;yt<$t;yt++)zt=ae[yt],fe?K&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Gt,ce,zt):e.texImage2D(i.TEXTURE_2D,yt,qt,Gt,ce,zt);b.generateMipmaps=!1}else if(fe){if(Ee){let yt=Le(ct);e.texStorage2D(i.TEXTURE_2D,Wt,qt,yt.width,yt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,ce,ct)}else e.texImage2D(i.TEXTURE_2D,0,qt,Gt,ce,ct);g(b)&&B(at),Bt.__version=It.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function oe(U,b,et){if(b.image.length!==6)return;let at=$e(U,b),_t=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+et);let It=n.get(_t);if(_t.version!==It.__version||at===!0){e.activeTexture(i.TEXTURE0+et);let Bt=Ve.getPrimaries(Ve.workingColorSpace),pt=b.colorSpace===As?null:Ve.getPrimaries(b.colorSpace),ct=b.colorSpace===As||Bt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Gt=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,qt=[];for(let Et=0;Et<6;Et++)!Gt&&!ce?qt[Et]=x(b.image[Et],!0,s.maxCubemapSize):qt[Et]=ce?b.image[Et].image:b.image[Et],qt[Et]=Ue(b,qt[Et]);let zt=qt[0],ae=r.convert(b.format,b.colorSpace),fe=r.convert(b.type),Ee=R(b.internalFormat,ae,fe,b.normalized,b.colorSpace),K=b.isVideoTexture!==!0,Wt=It.__version===void 0||at===!0,yt=_t.dataReady,$t=O(b,zt);Pe(i.TEXTURE_CUBE_MAP,b);let jt;if(Gt){K&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Ee,zt.width,zt.height);for(let Et=0;Et<6;Et++){jt=qt[Et].mipmaps;for(let ne=0;ne<jt.length;ne++){let te=jt[ne];b.format!==Ai?ae!==null?K?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne,0,0,te.width,te.height,ae,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne,Ee,te.width,te.height,0,te.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne,0,0,te.width,te.height,ae,fe,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne,Ee,te.width,te.height,0,ae,fe,te.data)}}}else{if(jt=b.mipmaps,K&&Wt){jt.length>0&&$t++;let Et=Le(qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Ee,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(ce){K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,qt[Et].width,qt[Et].height,ae,fe,qt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ee,qt[Et].width,qt[Et].height,0,ae,fe,qt[Et].data);for(let ne=0;ne<jt.length;ne++){let Je=jt[ne].image[Et].image;K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne+1,0,0,Je.width,Je.height,ae,fe,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne+1,Ee,Je.width,Je.height,0,ae,fe,Je.data)}}else{K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,fe,qt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ee,ae,fe,qt[Et]);for(let ne=0;ne<jt.length;ne++){let te=jt[ne];K?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne+1,0,0,ae,fe,te.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ne+1,Ee,ae,fe,te.image[Et])}}}g(b)&&B(i.TEXTURE_CUBE_MAP),It.__version=_t.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Jt(U,b,et,at,_t,It){let Bt=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),ct=R(et.internalFormat,Bt,pt,et.normalized,et.colorSpace),Gt=n.get(b),ce=n.get(et);if(ce.__renderTarget=b,!Gt.__hasExternalTextures){let qt=Math.max(1,b.width>>It),zt=Math.max(1,b.height>>It);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,It,ct,qt,zt,b.depth,0,Bt,pt,null):e.texImage2D(_t,It,ct,qt,zt,0,Bt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),we(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,_t,ce.__webglTexture,0,ue(b)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,_t,ce.__webglTexture,It),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(U,b,et){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){let at=b.depthTexture,_t=at&&at.isDepthTexture?at.type:null,It=E(b.stencilBuffer,_t),Bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(b),It,b.width,b.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(b),It,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,It,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,U)}else{let at=b.textures;for(let _t=0;_t<at.length;_t++){let It=at[_t],Bt=r.convert(It.format,It.colorSpace),pt=r.convert(It.type),ct=R(It.internalFormat,Bt,pt,It.normalized,It.colorSpace);we(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(b),ct,b.width,b.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(b),ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ct,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(U,b,et){let at=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _t=n.get(b.depthTexture);if(_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,b.depthTexture.addEventListener("dispose",G)),_t.__webglTexture===void 0){_t.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,b.depthTexture);let Gt=r.convert(b.depthTexture.format),ce=r.convert(b.depthTexture.type),qt;b.depthTexture.format===Qi?qt=i.DEPTH_COMPONENT24:b.depthTexture.format===js&&(qt=i.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,qt,b.width,b.height,0,Gt,ce,null)}}else Tt(b.depthTexture,0);let It=_t.__webglTexture,Bt=ue(b),pt=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,ct=b.depthTexture.format===js?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Qi)we(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,It,0,Bt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,It,0);else if(b.depthTexture.format===js)we(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,It,0,Bt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let b=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){let at=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),at){let _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,at.removeEventListener("dispose",_t)};at.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=at}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(et)for(let at=0;at<6;at++)se(b.__webglFramebuffer[at],U,at);else{let at=U.texture.mipmaps;at&&at.length>0?se(b.__webglFramebuffer[0],U,0):se(b.__webglFramebuffer,U,0)}else if(et){b.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[at]),b.__webglDepthbuffer[at]===void 0)b.__webglDepthbuffer[at]=i.createRenderbuffer(),_e(b.__webglDepthbuffer[at],U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=b.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,It)}}else{let at=U.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),_e(b.__webglDepthbuffer,U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,It)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(U,b,et){let at=n.get(U);b!==void 0&&Jt(at.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&nt(U)}function $(U){let b=U.texture,et=n.get(U),at=n.get(b);U.addEventListener("dispose",A);let _t=U.textures,It=U.isWebGLCubeRenderTarget===!0,Bt=_t.length>1;if(Bt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=b.version,a.memory.textures++),It){et.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[pt]=[];for(let ct=0;ct<b.mipmaps.length;ct++)et.__webglFramebuffer[pt][ct]=i.createFramebuffer()}else et.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)et.__webglFramebuffer[pt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let pt=0,ct=_t.length;pt<ct;pt++){let Gt=n.get(_t[pt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&we(U)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let pt=0;pt<_t.length;pt++){let ct=_t[pt];et.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[pt]);let Gt=r.convert(ct.format,ct.colorSpace),ce=r.convert(ct.type),qt=R(ct.internalFormat,Gt,ce,ct.normalized,ct.colorSpace,U.isXRRenderTarget===!0),zt=ue(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,qt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,et.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(It){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ct=0;ct<b.mipmaps.length;ct++)Jt(et.__webglFramebuffer[pt][ct],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ct);else Jt(et.__webglFramebuffer[pt],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&B(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let pt=0,ct=_t.length;pt<ct;pt++){let Gt=_t[pt],ce=n.get(Gt),qt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(qt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(qt,ce.__webglTexture),Pe(qt,Gt),Jt(et.__webglFramebuffer,U,Gt,i.COLOR_ATTACHMENT0+pt,qt,0),g(Gt)&&B(qt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),Pe(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let ct=0;ct<b.mipmaps.length;ct++)Jt(et.__webglFramebuffer[ct],U,b,i.COLOR_ATTACHMENT0,pt,ct);else Jt(et.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,pt,0);g(b)&&B(pt),e.unbindTexture()}U.depthBuffer&&nt(U)}function Rt(U){let b=U.textures;for(let et=0,at=b.length;et<at;et++){let _t=b[et];if(g(_t)){let It=k(U),Bt=n.get(_t).__webglTexture;e.bindTexture(It,Bt),B(It),e.unbindTexture()}}}let Ot=[],le=[];function de(U){if(U.samples>0){if(we(U)===!1){let b=U.textures,et=U.width,at=U.height,_t=i.COLOR_BUFFER_BIT,It=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(U),pt=b.length>1;if(pt)for(let Gt=0;Gt<b.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);let ct=U.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Gt=0;Gt<b.length;Gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Gt]);let ce=n.get(b[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,et,at,0,0,et,at,_t,i.NEAREST),c===!0&&(Ot.length=0,le.length=0,Ot.push(i.COLOR_ATTACHMENT0+Gt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ot.push(It),le.push(It),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Gt=0;Gt<b.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Gt]);let ce=n.get(b[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ue(U){return Math.min(s.maxSamples,U.samples)}function we(U){let b=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(U){let b=a.render.frame;d.get(U)!==b&&(d.set(U,b),U.update())}function Ue(U,b){let et=U.colorSpace,at=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==vo&&et!==As&&(Ve.getTransfer(et)===nn?(at!==Ai||_t!==di)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",et)),b}function Le(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=dt,this.resetTextureUnits=lt,this.getTextureUnits=Z,this.setTextureUnits=Q,this.setTexture2D=Tt,this.setTexture2DArray=gt,this.setTexture3D=Mt,this.setTextureCube=St,this.rebindTextures=Ct,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Eb(i,t){function e(n,s=As){let r,a=Ve.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===fh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yd)return i.BYTE;if(n===Zd)return i.SHORT;if(n===ba)return i.UNSIGNED_SHORT;if(n===dh)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===Kd)return i.ALPHA;if(n===Qd)return i.RGB;if(n===Ai)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===js)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===gh)return i.RED_INTEGER;if(n===Ks)return i.RG;if(n===_h)return i.RG_INTEGER;if(n===xh)return i.RGBA_INTEGER;if(n===nl||n===il||n===sl||n===rl)if(a===nn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vh||n===yh||n===Sh||n===Mh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bh||n===wh||n===Eh||n===Th||n===Ah||n===al||n===Ch)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bh||n===wh)return a===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Th)return r.COMPRESSED_R11_EAC;if(n===Ah)return r.COMPRESSED_SIGNED_R11_EAC;if(n===al)return r.COMPRESSED_RG11_EAC;if(n===Ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rh||n===Ih||n===Ph||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===$h||n===Vh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ih)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ph)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$h)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hh||n===Gh||n===Wh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hh)return a===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===qh||n===ol||n===Yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
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

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:Tb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new Vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wf=class extends ts{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,v=null,m=null,y=null,M=null,I=typeof XRWebGLBinding<"u",x=new bf,g={},B=e.getContextAttributes(),k=null,R=null,E=[],O=[],G=new kt,A=null,F=null,H=new Yn;H.viewport=new sn;let W=new Yn;W.viewport=new sn;let st=[H,W],lt=new oh,Z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xt){let vt=E[xt];return vt===void 0&&(vt=new pa,E[xt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(xt){let vt=E[xt];return vt===void 0&&(vt=new pa,E[xt]=vt),vt.getGripSpace()},this.getHand=function(xt){let vt=E[xt];return vt===void 0&&(vt=new pa,E[xt]=vt),vt.getHandSpace()};function dt(xt){let vt=O.indexOf(xt.inputSource);if(vt===-1)return;let Pt=E[vt];Pt!==void 0&&(Pt.update(xt.inputSource,xt.frame,h||a),Pt.dispatchEvent({type:xt.type,data:xt.inputSource}))}function mt(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",mt),s.removeEventListener("inputsourceschange",Tt);for(let xt=0;xt<E.length;xt++){let vt=O[xt];vt!==null&&(O[xt]=null,E[xt].disconnect(vt))}Z=null,Q=null,x.reset();for(let xt in g)delete g[xt];if(t.setRenderTarget(k),y=null,m=null,v=null,s=null,R=null,$e.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(G.width,G.height,!1),F!==null){let xt=F.camera;xt.fov=F.fov,xt.zoom=F.zoom,xt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xt){r=xt,n.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xt){l=xt,n.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(xt){h=xt},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(xt){if(s=xt,s!==null){if(k=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",mt),s.addEventListener("inputsourceschange",Tt),B.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,oe=null,Jt=null;B.depth&&(Jt=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=B.stencil?js:Qi,oe=B.stencil?wa:Gi);let _e={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};v=this.getBinding(),m=v.createProjectionLayer(_e),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),R=new hi(m.textureWidth,m.textureHeight,{format:Ai,type:di,depthTexture:new Hs(m.textureWidth,m.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Pt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new hi(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:di,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Tt(xt){for(let vt=0;vt<xt.removed.length;vt++){let Pt=xt.removed[vt],oe=O.indexOf(Pt);oe>=0&&(O[oe]=null,E[oe].disconnect(Pt))}for(let vt=0;vt<xt.added.length;vt++){let Pt=xt.added[vt],oe=O.indexOf(Pt);if(oe===-1){for(let _e=0;_e<E.length;_e++)if(_e>=O.length){O.push(Pt),oe=_e;break}else if(O[_e]===null){O[_e]=Pt,oe=_e;break}if(oe===-1)break}let Jt=E[oe];Jt&&Jt.connect(Pt)}}let gt=new q,Mt=new q;function St(xt,vt,Pt){gt.setFromMatrixPosition(vt.matrixWorld),Mt.setFromMatrixPosition(Pt.matrixWorld);let oe=gt.distanceTo(Mt),Jt=vt.projectionMatrix.elements,_e=Pt.projectionMatrix.elements,se=Jt[14]/(Jt[10]-1),nt=Jt[14]/(Jt[10]+1),Ct=(Jt[9]+1)/Jt[5],$=(Jt[9]-1)/Jt[5],Rt=(Jt[8]-1)/Jt[0],Ot=(_e[8]+1)/_e[0],le=se*Rt,de=se*Ot,ue=oe/(-Rt+Ot),we=ue*-Rt;if(vt.matrixWorld.decompose(xt.position,xt.quaternion,xt.scale),xt.translateX(we),xt.translateZ(ue),xt.matrixWorld.compose(xt.position,xt.quaternion,xt.scale),xt.matrixWorldInverse.copy(xt.matrixWorld).invert(),Jt[10]===-1)xt.projectionMatrix.copy(vt.projectionMatrix),xt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let X=se+ue,Ue=nt+ue,Le=le-we,U=de+(oe-we),b=Ct*nt/Ue*X,et=$*nt/Ue*X;xt.projectionMatrix.makePerspective(Le,U,b,et,X,Ue),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert()}}function Xt(xt,vt){vt===null?xt.matrixWorld.copy(xt.matrix):xt.matrixWorld.multiplyMatrices(vt.matrixWorld,xt.matrix),xt.matrixWorldInverse.copy(xt.matrixWorld).invert()}this.updateCamera=function(xt){if(s===null)return;let vt=xt.near,Pt=xt.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),lt.near=W.near=H.near=vt,lt.far=W.far=H.far=Pt,(Z!==lt.near||Q!==lt.far)&&(s.updateRenderState({depthNear:lt.near,depthFar:lt.far}),Z=lt.near,Q=lt.far),lt.layers.mask=xt.layers.mask|6,H.layers.mask=lt.layers.mask&-5,W.layers.mask=lt.layers.mask&-3;let oe=xt.parent,Jt=lt.cameras;Xt(lt,oe);for(let _e=0;_e<Jt.length;_e++)Xt(Jt[_e],oe);Jt.length===2?St(lt,H,W):lt.projectionMatrix.copy(H.projectionMatrix),F===null&&xt.isPerspectiveCamera&&(F={camera:xt,fov:xt.fov,zoom:xt.zoom}),Qt(xt,lt,oe)};function Qt(xt,vt,Pt){Pt===null?xt.matrix.copy(vt.matrixWorld):(xt.matrix.copy(Pt.matrixWorld),xt.matrix.invert(),xt.matrix.multiply(vt.matrixWorld)),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.updateMatrixWorld(!0),xt.projectionMatrix.copy(vt.projectionMatrix),xt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),xt.isPerspectiveCamera&&(xt.fov=ua*2*Math.atan(1/xt.projectionMatrix.elements[5]),xt.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(m===null&&y===null))return c},this.setFoveation=function(xt){c=xt,m!==null&&(m.fixedFoveation=xt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=xt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(lt)},this.getCameraTexture=function(xt){return g[xt]};let Ge=null;function Pe(xt,vt){if(d=vt.getViewerPose(h||a),M=vt,d!==null){let Pt=d.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let oe=!1;Pt.length!==lt.cameras.length&&(lt.cameras.length=0,oe=!0);for(let nt=0;nt<Pt.length;nt++){let Ct=Pt[nt],$=null;if(y!==null)$=y.getViewport(Ct);else{let Ot=v.getViewSubImage(m,Ct);$=Ot.viewport,nt===0&&(t.setRenderTargetTextures(R,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(R))}let Rt=st[nt];Rt===void 0&&(Rt=new Yn,Rt.layers.enable(nt),Rt.viewport=new sn,st[nt]=Rt),Rt.matrix.fromArray(Ct.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ct.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set($.x,$.y,$.width,$.height),nt===0&&(lt.matrix.copy(Rt.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),oe===!0&&lt.cameras.push(Rt)}let Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let nt=v.getDepthInformation(Pt[0]);nt&&nt.isValid&&nt.texture&&x.init(nt,s.renderState)}if(Jt&&Jt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let nt=0;nt<Pt.length;nt++){let Ct=Pt[nt].camera;if(Ct){let $=g[Ct];$||($=new Lo,g[Ct]=$);let Rt=v.getCameraImage(Ct);$.sourceTexture=Rt}}}}for(let Pt=0;Pt<E.length;Pt++){let oe=O[Pt],Jt=E[Pt];oe!==null&&Jt!==void 0&&Jt.update(oe,vt,h||a)}Ge&&Ge(xt,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),M=null}let $e=new Ug;$e.setAnimationLoop(Pe),this.setAnimationLoop=function(xt){Ge=xt},this.dispose=function(){}}},Cb=new He,$g=new Ce;$g.set(-1,0,0,0,1,0,0,0,1);function Rb(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,af(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,B,k,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),v(x,g)):g.isMeshPhongMaterial?(r(x,g),d(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),m(x,g),g.isMeshPhysicalMaterial&&y(x,g,R)):g.isMeshMatcapMaterial?(r(x,g),M(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),I(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&l(x,g)):g.isPointsMaterial?c(x,g,B,k):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===ti&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===ti&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let B=t.get(g),k=B.envMap,R=B.envMapRotation;k&&(x.envMap.value=k,x.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply($g),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function l(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,B,k){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*B,x.scale.value=k*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,B){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ti&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,g){g.matcap&&(x.matcap.value=g.matcap)}function I(x,g){let B=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ib(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let O=E.program;n.uniformBlockBinding(R,O)}function h(R,E){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",B));let G=E.program;n.updateUBOMapping(R,G);let A=t.render.frame;r[R.id]!==A&&(m(R),r[R.id]=A)}function d(R){let E=v();R.__bindingPointIndex=E;let O=i.createBuffer(),G=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,G,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){let E=s[R.id],O=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,F=O.length;A<F;A++){let H=O[A];if(Array.isArray(H))for(let W=0,st=H.length;W<st;W++)y(H[W],A,W,G);else y(H,A,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,E,O,G){if(I(R,E,O,G)===!0){let A=R.__offset,F=R.value;if(Array.isArray(F)){let H=0;for(let W=0;W<F.length;W++){let st=F[W],lt=g(st);M(st,R.__data,H),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(H+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function M(R,E,O){typeof R=="number"||typeof R=="boolean"?E[0]=R:R.isMatrix3?(E[0]=R.elements[0],E[1]=R.elements[1],E[2]=R.elements[2],E[3]=0,E[4]=R.elements[3],E[5]=R.elements[4],E[6]=R.elements[5],E[7]=0,E[8]=R.elements[6],E[9]=R.elements[7],E[10]=R.elements[8],E[11]=0):ArrayBuffer.isView(R)?E.set(new R.constructor(R.buffer,R.byteOffset,E.length)):R.toArray(E,O)}function I(R,E,O,G){let A=R.value,F=E+"_"+O;if(G[F]===void 0)return typeof A=="number"||typeof A=="boolean"?G[F]=A:ArrayBuffer.isView(A)?G[F]=A.slice():G[F]=A.clone(),!0;{let H=G[F];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return G[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(H.equals(A)===!1)return H.copy(A),!0}}return!1}function x(R){let E=R.uniforms,O=0,G=16;for(let F=0,H=E.length;F<H;F++){let W=Array.isArray(E[F])?E[F]:[E[F]];for(let st=0,lt=W.length;st<lt;st++){let Z=W[st],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let dt=0,mt=Q.length;dt<mt;dt++){let Tt=Q[dt],gt=g(Tt),Mt=O%G,St=Mt%gt.boundary,Xt=Mt+St;O+=St,Xt!==0&&G-Xt<gt.storage&&(O+=G-Xt),Z.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=O,O+=gt.storage}}}let A=O%G;return A>0&&(O+=G-A),R.__size=O,R.__cache={},this}function g(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(E.boundary=16,E.storage=R.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",R),E}function B(R){let E=R.target;E.removeEventListener("dispose",B);let O=a.indexOf(E.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:k}}var Pb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rs=null;function Lb(){return rs===null&&(rs=new Ao(Pb,16,16,Ks,Wi),rs.name="DFG_LUT",rs.minFilter=$n,rs.magFilter=$n,rs.wrapS=ji,rs.wrapT=ji,rs.generateMipmaps=!1,rs.needsUpdate=!0),rs}var nu=class{constructor(t={}){let{canvas:e=ig(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=di}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let I=y,x=new Set([xh,_h,gh]),g=new Set([di,Gi,ba,wa,fh,ph]),B=new Uint32Array(4),k=new Int32Array(4),R=new q,E=null,O=null,G=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,W=!1,st=null,lt=null,Z=null,Q=null;this._outputColorSpace=_i;let dt=0,mt=0,Tt=null,gt=-1,Mt=null,St=new sn,Xt=new sn,Qt=null,Ge=new ve(0),Pe=0,$e=e.width,xt=e.height,vt=1,Pt=null,oe=null,Jt=new sn(0,0,$e,xt),_e=new sn(0,0,$e,xt),se=!1,nt=new ma,Ct=!1,$=!1,Rt=new He,Ot=new q,le=new sn,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function we(){return Tt===null?vt:1}let X=n;function Ue(C,J){return e.getContext(C,J)}let Le,U,b,et,at,_t,It,Bt,pt,ct,Gt,ce,qt,zt,ae,fe,Ee,K,Wt,yt,$t,jt,Et;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",On,!1),X===null){let J="webgl2";if(X=Ue(J,C),X===null)throw Ue(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(C){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",On,!1),be("WebGLRenderer: "+C.message),C}function ne(){Le=new kS(X),Le.init(),$t=new Eb(X,Le),U=new RS(X,Le,t,$t),b=new bb(X,Le),U.reversedDepthBuffer&&m&&b.buffers.depth.setReversed(!0),lt=X.createFramebuffer(),Z=X.createFramebuffer(),Q=X.createFramebuffer(),et=new VS(X),at=new cb,_t=new wb(X,Le,b,at,U,$t,et),It=new BS(H),Bt=new Gx(X),jt=new AS(X,Bt),pt=new zS(X,Bt,et,jt),ct=new GS(X,pt,Bt,jt,et),K=new HS(X,U,_t),ae=new IS(at),Gt=new lb(H,It,Le,U,jt,ae),ce=new Rb(H,at),qt=new ub,zt=new _b(Le),Ee=new TS(H,It,b,ct,M,c),fe=new Mb(H,ct,U),Et=new Ib(X,et,U,b),Wt=new CS(X,Le,et),yt=new $S(X,Le,et),et.programs=Gt.programs,H.capabilities=U,H.extensions=Le,H.properties=at,H.renderLists=qt,H.shadowMap=fe,H.state=b,H.info=et}I!==di&&(F=new XS(I,e.width,e.height,l,s,r));let te=new wf(H,X);this.xr=te,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=Le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize($e,xt,!1))},this.getSize=function(C){return C.set($e,xt)},this.setSize=function(C,J,ut=!0){if(te.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=C,xt=J,e.width=Math.floor(C*vt),e.height=Math.floor(J*vt),ut===!0&&(e.style.width=C+"px",e.style.height=J+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set($e*vt,xt*vt).floor()},this.setDrawingBufferSize=function(C,J,ut){$e=C,xt=J,vt=ut,e.width=Math.floor(C*ut),e.height=Math.floor(J*ut),this.setViewport(0,0,C,J)},this.setEffects=function(C){if(I===di){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let J=0;J<C.length;J++)if(C[J].isOutputPass===!0){Se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(St)},this.getViewport=function(C){return C.copy(Jt)},this.setViewport=function(C,J,ut,rt){C.isVector4?Jt.set(C.x,C.y,C.z,C.w):Jt.set(C,J,ut,rt),b.viewport(St.copy(Jt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(_e)},this.setScissor=function(C,J,ut,rt){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,J,ut,rt),b.scissor(Xt.copy(_e).multiplyScalar(vt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){b.setScissorTest(se=C)},this.setOpaqueSort=function(C){Pt=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,ut=!0){let rt=0;if(C){let ot=!1;if(Tt!==null){let Ut=Tt.texture.format;ot=x.has(Ut)}if(ot){let Ut=Tt.texture.type,Lt=g.has(Ut),At=Ee.getClearColor(),Yt=Ee.getClearAlpha(),ee=At.r,re=At.g,Me=At.b;Lt?(B[0]=ee,B[1]=re,B[2]=Me,B[3]=Yt,X.clearBufferuiv(X.COLOR,0,B)):(k[0]=ee,k[1]=re,k[2]=Me,k[3]=Yt,X.clearBufferiv(X.COLOR,0,k))}else rt|=X.COLOR_BUFFER_BIT}J&&(rt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ut&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),st=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Ee.dispose(),qt.dispose(),zt.dispose(),at.dispose(),It.dispose(),ct.dispose(),jt.dispose(),Et.dispose(),Gt.dispose(),te.dispose(),te.removeEventListener("sessionstart",er),te.removeEventListener("sessionend",nr),Ri.stop()};function Je(C){C.preventDefault(),Mo("WebGLRenderer: Context Lost."),W=!0}function We(){Mo("WebGLRenderer: Context Restored."),W=!1;let C=et.autoReset,J=fe.enabled,ut=fe.autoUpdate,rt=fe.needsUpdate,ot=fe.type;ne(),et.autoReset=C,fe.enabled=J,fe.autoUpdate=ut,fe.needsUpdate=rt,fe.type=ot}function On(C){be("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ii(C){let J=C.target;J.removeEventListener("dispose",ii),vl(J)}function vl(C){Da(C),at.remove(C)}function Da(C){let J=at.get(C).programs;J!==void 0&&(J.forEach(function(ut){Gt.releaseProgram(ut)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ut,rt,ot,Ut){J===null&&(J=de);let Lt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,At=Fa(C,J,ut,rt,ot);b.setMaterial(rt,Lt);let Yt=ut.index,ee=1;if(rt.wireframe===!0){if(Yt=pt.getWireframeAttribute(ut),Yt===void 0)return;ee=2}let re=ut.drawRange,Me=ut.attributes.position,Ft=re.start*ee,wt=(re.start+re.count)*ee;Ut!==null&&(Ft=Math.max(Ft,Ut.start*ee),wt=Math.min(wt,(Ut.start+Ut.count)*ee)),Yt!==null?(Ft=Math.max(Ft,0),wt=Math.min(wt,Yt.count)):Me!=null&&(Ft=Math.max(Ft,0),wt=Math.min(wt,Me.count));let ge=wt-Ft;if(ge<0||ge===1/0)return;jt.setup(ot,rt,At,ut,Yt);let xe,Ke=Wt;if(Yt!==null&&(xe=Bt.get(Yt),Ke=yt,Ke.setIndex(xe)),ot.isMesh)rt.wireframe===!0?(b.setLineWidth(rt.wireframeLinewidth*we()),Ke.setMode(X.LINES)):Ke.setMode(X.TRIANGLES);else if(ot.isLine){let wn=rt.linewidth;wn===void 0&&(wn=1),b.setLineWidth(wn*we()),ot.isLineSegments?Ke.setMode(X.LINES):ot.isLineLoop?Ke.setMode(X.LINE_LOOP):Ke.setMode(X.LINE_STRIP)}else ot.isPoints?Ke.setMode(X.POINTS):ot.isSprite&&Ke.setMode(X.TRIANGLES);if(ot.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))Ke.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let wn=ot._multiDrawStarts,Kt=ot._multiDrawCounts,An=ot._multiDrawCount,Fe=Yt?Bt.get(Yt).bytesPerElement:1,kn=at.get(rt).currentProgram.getUniforms();for(let Mn=0;Mn<An;Mn++)kn.setValue(X,"_gl_DrawID",Mn),Ke.render(wn[Mn]/Fe,Kt[Mn])}else if(ot.isInstancedMesh)Ke.renderInstances(Ft,ge,ot.count);else if(ut.isInstancedBufferGeometry){let wn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Kt=Math.min(ut.instanceCount,wn);Ke.renderInstances(Ft,ge,Kt)}else Ke.render(Ft,ge)};function Bn(C,J,ut,rt){st!==null&&C.isNodeMaterial&&st.setObject(rt,C),Ct===!0&&ae.setState(C,ut,!1),C.transparent===!0&&C.side===is&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,ps(C,J,rt),C.side=Ys,C.needsUpdate=!0,ps(C,J,rt),C.side=is):ps(C,J,rt)}this.compile=function(C,J,ut=null){ut===null&&(ut=C),st!==null&&st.renderStart(C,J,ut),O=zt.get(ut),O.init(J),A.push(O),ut.traverseVisible(function(ot){ot.isLight&&ot.layers.test(J.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),C!==ut&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(J.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),O.setupLights(),st!==null&&st.updateLights(O.state.lightsArray),$=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,$),Ct===!0&&ae.setGlobalState(this.clippingPlanes,J),st!==null&&fe.render(O.state.shadowsArray,ut,J);let rt=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Ut=ot.material;if(Ut)if(Array.isArray(Ut))for(let Lt=0;Lt<Ut.length;Lt++){let At=Ut[Lt];Bn(At,ut,J,ot),rt.add(At)}else Bn(Ut,ut,J,ot),rt.add(Ut)}),O=A.pop(),st!==null&&st.renderEnd(),rt},this.compileAsync=function(C,J,ut=null){let rt=this.compile(C,J,ut);return new Promise(ot=>{function Ut(){if(rt.forEach(function(Lt){let Yt=at.get(Lt).currentProgram;(Yt===void 0||Yt.isReady())&&rt.delete(Lt)}),rt.size===0){ot(C);return}setTimeout(Ut,10)}Le.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let si=null;function Ci(C){si&&si(C)}function er(){Ri.stop()}function nr(){Ri.start()}let Ri=new Ug;Ri.setAnimationLoop(Ci),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){si=C,te.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},te.addEventListener("sessionstart",er),te.addEventListener("sessionend",nr),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;st!==null&&st.renderStart(C,J);let ut=te.enabled===!0&&te.isPresenting===!0,rt=F!==null&&(Tt===null||ut)&&F.begin(H,Tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(J),J=te.getCamera()),C.isScene===!0&&C.onBeforeRender(H,C,J,Tt),O=zt.get(C,A.length),O.init(J),O.state.textureUnits=_t.getTextureUnits(),A.push(O),Rt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),nt.setFromProjectionMatrix(Rt,zi,J.reversedDepth),$=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,$),E=qt.get(C,G.length),E.init(),G.push(E),te.enabled===!0&&te.isPresenting===!0){let Lt=H.xr.getDepthSensingMesh();Lt!==null&&Fr(Lt,J,-1/0,H.sortObjects)}Fr(C,J,0,H.sortObjects),E.finish(),st!==null&&st.updateLights(O.state.lightsArray),H.sortObjects===!0&&E.sort(Pt,oe),ue=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ue&&Ee.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ct===!0&&ae.beginShadows();let ot=O.state.shadowsArray;if(fe.render(ot,C,J),Ct===!0&&ae.endShadows(),(rt&&F.hasRenderPass())===!1){let Lt=E.opaque,At=E.transmissive;if(O.setupLights(),J.isArrayCamera){let Yt=J.cameras;if(At.length>0)for(let ee=0,re=Yt.length;ee<re;ee++){let Me=Yt[ee];yl(Lt,At,C,Me)}ue&&Ee.render(C);for(let ee=0,re=Yt.length;ee<re;ee++){let Me=Yt[ee];Ps(E,C,Me,Me.viewport)}}else At.length>0&&yl(Lt,At,C,J),ue&&Ee.render(C),Ps(E,C,J)}Tt!==null&&mt===0&&(_t.updateMultisampleRenderTarget(Tt),_t.updateRenderTargetMipmap(Tt)),rt&&F.end(H),C.isScene===!0&&C.onAfterRender(H,C,J),jt.resetDefaultState(),gt=-1,Mt=null,A.pop(),A.length>0?(O=A[A.length-1],_t.setTextureUnits(O.state.textureUnits),Ct===!0&&ae.setGlobalState(H.clippingPlanes,O.state.camera)):O=null,G.pop(),G.length>0?E=G[G.length-1]:E=null,st!==null&&st.renderEnd()};function Fr(C,J,ut,rt){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ut=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(nt)){rt&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);let Lt=ct.update(C),At=C.material;At.visible&&E.push(C,Lt,At,ut,le.z,null,J)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(nt))){let Lt=ct.update(C),At=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),le.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),le.copy(Lt.boundingSphere.center)),le.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(At)){let Yt=Lt.groups;for(let ee=0,re=Yt.length;ee<re;ee++){let Me=Yt[ee],Ft=At[Me.materialIndex];Ft&&Ft.visible&&E.push(C,Lt,Ft,ut,le.z,Me,J)}}else At.visible&&E.push(C,Lt,At,ut,le.z,null,J)}}let Ut=C.children;for(let Lt=0,At=Ut.length;Lt<At;Lt++)Fr(Ut[Lt],J,ut,rt)}function Ps(C,J,ut,rt){let{opaque:ot,transmissive:Ut,transparent:Lt}=C;O.setupLightsView(ut),Ct===!0&&ae.setGlobalState(H.clippingPlanes,ut),rt&&b.viewport(St.copy(rt)),ot.length>0&&Ls(ot,J,ut),Ut.length>0&&Ls(Ut,J,ut),Lt.length>0&&Ls(Lt,J,ut),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function yl(C,J,ut,rt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[rt.id]===void 0){let Ft=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[rt.id]=new hi(1,1,{generateMipmaps:!0,type:Ft?Wi:di,minFilter:Js,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let Ut=O.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||St;Ut.setSize(Lt.z*H.transmissionResolutionScale,Lt.w*H.transmissionResolutionScale);let At=H.getRenderTarget(),Yt=H.getActiveCubeFace(),ee=H.getActiveMipmapLevel();H.setRenderTarget(Ut),H.getClearColor(Ge),Pe=H.getClearAlpha(),Pe<1&&H.setClearColor(16777215,.5),H.clear(),ue&&Ee.render(ut);let re=H.toneMapping;H.toneMapping=Hi;let Me=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),O.setupLightsView(rt),Ct===!0&&ae.setGlobalState(H.clippingPlanes,rt),Ls(C,ut,rt),_t.updateMultisampleRenderTarget(Ut),_t.updateRenderTargetMipmap(Ut),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,ge=J.length;wt<ge;wt++){let xe=J[wt],{object:Ke,geometry:wn,material:Kt,group:An}=xe;if(Kt.side===is&&Ke.layers.test(rt.layers)){let Fe=Kt.side;Kt.side=ti,Kt.needsUpdate=!0,qi(Ke,ut,rt,wn,Kt,An),Kt.side=Fe,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(_t.updateMultisampleRenderTarget(Ut),_t.updateRenderTargetMipmap(Ut))}H.setRenderTarget(At,Yt,ee),H.setClearColor(Ge,Pe),Me!==void 0&&(rt.viewport=Me),H.toneMapping=re}function Ls(C,J,ut){let rt=J.isScene===!0?J.overrideMaterial:null;for(let ot=0,Ut=C.length;ot<Ut;ot++){let Lt=C[ot],{object:At,geometry:Yt,group:ee}=Lt,re=Lt.material;re.allowOverride===!0&&rt!==null&&(re=rt),At.layers.test(ut.layers)&&qi(At,J,ut,Yt,re,ee)}}function qi(C,J,ut,rt,ot,Ut){st!==null&&ot.isNodeMaterial&&st.setObject(C,ot),C.onBeforeRender(H,J,ut,rt,ot,Ut),C.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(H,J,ut,rt,C,Ut),ot.transparent===!0&&ot.side===is&&ot.forceSinglePass===!1?(ot.side=ti,ot.needsUpdate=!0,H.renderBufferDirect(ut,J,rt,ot,C,Ut),ot.side=Ys,ot.needsUpdate=!0,H.renderBufferDirect(ut,J,rt,ot,C,Ut),ot.side=is):H.renderBufferDirect(ut,J,rt,ot,C,Ut),C.onAfterRender(H,J,ut,rt,ot,Ut)}function ps(C,J,ut){J.isScene!==!0&&(J=de);let rt=at.get(C),ot=O.state.lights,Ut=O.state.shadowsArray,Lt=ot.state.version,At=Gt.getParameters(C,ot.state,Ut,J,ut,O.state.lightProbeGridArray),Yt=Gt.getProgramCacheKey(At),ee=rt.programs;rt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?J.environment:null,rt.fog=J.fog;let re=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;rt.envMap=It.get(C.envMap||rt.environment,re),rt.envMapRotation=rt.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",ii),ee=new Map,rt.programs=ee);let Me=ee.get(Yt);if(Me!==void 0){if(rt.currentProgram===Me&&rt.lightsStateVersion===Lt)return Ua(C,At),Me}else At.uniforms=Gt.getUniforms(C),st!==null&&C.isNodeMaterial&&st.build(C,ut,At),C.onBeforeCompile(At,H),Me=Gt.acquireProgram(At,Yt),ee.set(Yt,Me),rt.uniforms=At.uniforms;let Ft=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=ae.uniform),Ua(C,At),rt.needsLights=bl(C),rt.lightsStateVersion=Lt,rt.needsLights&&(Ft.ambientLightColor.value=ot.state.ambient,Ft.lightProbe.value=ot.state.probe,Ft.sunLights.value=ot.state.sun,Ft.sunLightShadows.value=ot.state.sunShadow,Ft.directionalLights.value=ot.state.directional,Ft.directionalLightShadows.value=ot.state.directionalShadow,Ft.spotLights.value=ot.state.spot,Ft.spotLightShadows.value=ot.state.spotShadow,Ft.rectAreaLights.value=ot.state.rectArea,Ft.ltc_1.value=ot.state.rectAreaLTC1,Ft.ltc_2.value=ot.state.rectAreaLTC2,Ft.pointLights.value=ot.state.point,Ft.pointLightShadows.value=ot.state.pointShadow,Ft.hemisphereLights.value=ot.state.hemi,Ft.sunShadowMatrix.value=ot.state.sunShadowMatrix,Ft.sunShadowCascade.value=ot.state.sunShadowCascade,Ft.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Ft.spotLightMatrix.value=ot.state.spotLightMatrix,Ft.spotLightMap.value=ot.state.spotLightMap,Ft.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=O.state.lightProbeGridArray.length>0,rt.currentProgram=Me,rt.uniformsList=null,Me}function Na(C){if(C.uniformsList===null){let J=C.currentProgram.getUniforms();C.uniformsList=Aa.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Ua(C,J){let ut=at.get(C);ut.outputColorSpace=J.outputColorSpace,ut.batching=J.batching,ut.batchingColor=J.batchingColor,ut.instancing=J.instancing,ut.instancingColor=J.instancingColor,ut.instancingMorph=J.instancingMorph,ut.skinning=J.skinning,ut.morphTargets=J.morphTargets,ut.morphNormals=J.morphNormals,ut.morphColors=J.morphColors,ut.morphTargetsCount=J.morphTargetsCount,ut.numClippingPlanes=J.numClippingPlanes,ut.numIntersection=J.numClipIntersection,ut.vertexAlphas=J.vertexAlphas,ut.vertexTangents=J.vertexTangents,ut.toneMapping=J.toneMapping}function Sl(C,J){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(J.matrixWorld);for(let ut=0,rt=C.length;ut<rt;ut++){let ot=C[ut];if(ot.texture!==null&&ot.boundingBox.containsPoint(R))return ot}return null}function Fa(C,J,ut,rt,ot){J.isScene!==!0&&(J=de),_t.resetTextureUnits();let Ut=J.fog,Lt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?J.environment:null,At=Tt===null?H.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ve.workingColorSpace,Yt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,ee=It.get(rt.envMap||Lt,Yt),re=rt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Me=!!ut.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ft=!!ut.morphAttributes.position,wt=!!ut.morphAttributes.normal,ge=!!ut.morphAttributes.color,xe=Hi;rt.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(xe=H.toneMapping);let Ke=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,wn=Ke!==void 0?Ke.length:0,Kt=at.get(rt),An=O.state.lights;if(Ct===!0&&($===!0||C!==Mt)){let an=C===Mt&&rt.id===gt;ae.setState(rt,C,an)}let Fe=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==An.state.version||Kt.outputColorSpace!==At||ot.isBatchedMesh&&Kt.batching===!1||!ot.isBatchedMesh&&Kt.batching===!0||ot.isBatchedMesh&&Kt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Kt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Kt.instancing===!1||!ot.isInstancedMesh&&Kt.instancing===!0||ot.isSkinnedMesh&&Kt.skinning===!1||!ot.isSkinnedMesh&&Kt.skinning===!0||ot.isInstancedMesh&&Kt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Kt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Kt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Kt.instancingMorph===!1&&ot.morphTexture!==null||Kt.envMap!==ee||rt.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ae.numPlanes||Kt.numIntersection!==ae.numIntersection)||Kt.vertexAlphas!==re||Kt.vertexTangents!==Me||Kt.morphTargets!==Ft||Kt.morphNormals!==wt||Kt.morphColors!==ge||Kt.toneMapping!==xe||Kt.morphTargetsCount!==wn||!!Kt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Kt.__version=rt.version);let kn=Kt.currentProgram;Fe===!0&&(kn=ps(rt,J,ot),st&&rt.isNodeMaterial&&st.onUpdateProgram(rt,kn,Kt));let Mn=!1,Yi=!1,Ns=!1,Qe=kn.getUniforms(),mn=Kt.uniforms;if(b.useProgram(kn.program)&&(Mn=!0,Yi=!0,Ns=!0),rt.id!==gt&&(gt=rt.id,Yi=!0),Kt.needsLights){let an=Sl(O.state.lightProbeGridArray,ot);Kt.lightProbeGrid!==an&&(Kt.lightProbeGrid=an,Yi=!0)}if(Mn||Mt!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Qe.setValue(X,"projectionMatrix",C.projectionMatrix),Qe.setValue(X,"viewMatrix",C.matrixWorldInverse);let Ii=Qe.map.cameraPosition;Ii!==void 0&&Ii.setValue(X,Ot.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Qe.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Qe.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),Mt!==C&&(Mt=C,Yi=!0,Ns=!0)}if(Kt.needsLights&&(An.state.sunShadowMap.length>0&&Qe.setValue(X,"sunShadowMap",An.state.sunShadowMap,_t),An.state.directionalShadowMap.length>0&&Qe.setValue(X,"directionalShadowMap",An.state.directionalShadowMap,_t),An.state.spotShadowMap.length>0&&Qe.setValue(X,"spotShadowMap",An.state.spotShadowMap,_t),An.state.pointShadowMap.length>0&&Qe.setValue(X,"pointShadowMap",An.state.pointShadowMap,_t)),ot.isSkinnedMesh){Qe.setOptional(X,ot,"bindMatrix"),Qe.setOptional(X,ot,"bindMatrixInverse");let an=ot.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Qe.setValue(X,"boneTexture",an.boneTexture,_t))}ot.isBatchedMesh&&(Qe.setOptional(X,ot,"batchingTexture"),Qe.setValue(X,"batchingTexture",ot._matricesTexture,_t),Qe.setOptional(X,ot,"batchingIdTexture"),Qe.setValue(X,"batchingIdTexture",ot._indirectTexture,_t),Qe.setOptional(X,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Qe.setValue(X,"batchingColorTexture",ot._colorsTexture,_t));let Zi=ut.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&K.update(ot,ut,kn),(Yi||Kt.receiveShadow!==ot.receiveShadow)&&(Kt.receiveShadow=ot.receiveShadow,Qe.setValue(X,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&J.environment!==null&&(mn.envMapIntensity.value=J.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Lb()),Yi){if(Qe.setValue(X,"toneMappingExposure",H.toneMappingExposure),Kt.needsLights&&Ml(mn,Ns),Ut&&rt.fog===!0&&ce.refreshFogUniforms(mn,Ut),ce.refreshMaterialUniforms(mn,rt,vt,xt,O.state.transmissionRenderTarget[C.id]),Kt.needsLights&&Kt.lightProbeGrid){let an=Kt.lightProbeGrid;mn.probesSH.value=an.texture,mn.probesMin.value.copy(an.boundingBox.min),mn.probesMax.value.copy(an.boundingBox.max),mn.probesResolution.value.copy(an.resolution)}Aa.upload(X,Na(Kt),mn,_t)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Aa.upload(X,Na(Kt),mn,_t),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Qe.setValue(X,"center",ot.center),Qe.setValue(X,"modelViewMatrix",ot.modelViewMatrix),Qe.setValue(X,"normalMatrix",ot.normalMatrix),Qe.setValue(X,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let an=rt.uniformsGroups;for(let Ii=0,Ne=an.length;Ii<Ne;Ii++){let wl=an[Ii];Et.update(wl,kn),Et.bind(wl,kn)}}return kn}function Ml(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.sunLights.needsUpdate=J,C.sunLightShadows.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function bl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return mt},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(C,J,ut){let rt=at.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),at.get(C.texture).__webglTexture=J,at.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ut,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){let ut=at.get(C);ut.__webglFramebuffer=J,ut.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ut=0){Tt=C,dt=J,mt=ut;let rt=null,ot=!1,Ut=!1;if(C){let At=at.get(C);if(At.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,At.__webglFramebuffer),St.copy(C.viewport),Xt.copy(C.scissor),Qt=C.scissorTest,b.viewport(St),b.scissor(Xt),b.setScissorTest(Qt),gt=-1;return}else if(At.__webglFramebuffer===void 0)_t.setupRenderTarget(C);else if(At.__hasExternalTextures)_t.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let re=C.depthTexture;if(At.__boundDepthTexture!==re){if(re!==null&&at.has(re)&&(C.width!==re.image.width||C.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(C)}}let Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ut=!0);let ee=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[J])?rt=ee[J][ut]:rt=ee[J],ot=!0):C.samples>0&&_t.useMultisampledRTT(C)===!1?rt=at.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?rt=ee[ut]:rt=ee,St.copy(C.viewport),Xt.copy(C.scissor),Qt=C.scissorTest}else St.copy(Jt).multiplyScalar(vt).floor(),Xt.copy(_e).multiplyScalar(vt).floor(),Qt=se;if(ut!==0&&(rt=lt),b.bindFramebuffer(X.FRAMEBUFFER,rt)&&b.drawBuffers(C,rt),b.viewport(St),b.scissor(Xt),b.setScissorTest(Qt),ot){let At=at.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,At.__webglTexture,ut)}else if(Ut){let At=J;for(let Yt=0;Yt<C.textures.length;Yt++){let ee=at.get(C.textures[Yt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Yt,ee.__webglTexture,ut,At)}}else if(C!==null&&ut!==0){let At=at.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,At.__webglTexture,ut)}gt=-1};function Ds(C){let J=at.get(C);return(J.__readFormat!==C.format||J.__readType!==C.type)&&(J.__readFormat=C.format,J.__readType=C.type,J.__formatReadable=U.textureFormatReadable(C.format),J.__typeReadable=U.textureTypeReadable(C.type)),J}this.readRenderTargetPixels=function(C,J,ut,rt,ot,Ut,Lt,At=0){if(!(C&&C.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Yt=Yt[Lt]),Yt){b.bindFramebuffer(X.FRAMEBUFFER,Yt);try{let ee=C.textures[At],re=ee.format,Me=ee.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+At);let Ft=Ds(ee);if(Ft.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-rt&&ut>=0&&ut<=C.height-ot&&X.readPixels(J,ut,rt,ot,$t.convert(re),$t.convert(Me),Ut)}finally{let ee=Tt!==null?at.get(Tt).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,J,ut,rt,ot,Ut,Lt,At=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Yt=Yt[Lt]),Yt)if(J>=0&&J<=C.width-rt&&ut>=0&&ut<=C.height-ot){b.bindFramebuffer(X.FRAMEBUFFER,Yt);let ee=C.textures[At],re=ee.format,Me=ee.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+At);let Ft=Ds(ee);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.bufferData(X.PIXEL_PACK_BUFFER,Ut.byteLength,X.STREAM_READ),X.readPixels(J,ut,rt,ot,$t.convert(re),$t.convert(Me),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let ge=Tt!==null?at.get(Tt).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,ge);let xe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await rg(X,xe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ut),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(wt),X.deleteSync(xe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,ut=0){let rt=Math.pow(2,-ut),ot=Math.floor(C.image.width*rt),Ut=Math.floor(C.image.height*rt),Lt=J!==null?J.x:0,At=J!==null?J.y:0;_t.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ut,0,0,Lt,At,ot,Ut),b.unbindTexture()},this.copyTextureToTexture=function(C,J,ut=null,rt=null,ot=0,Ut=0){let Lt,At,Yt,ee,re,Me,Ft,wt,ge,xe=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(ut!==null)Lt=ut.max.x-ut.min.x,At=ut.max.y-ut.min.y,Yt=ut.isBox3?ut.max.z-ut.min.z:1,ee=ut.min.x,re=ut.min.y,Me=ut.isBox3?ut.min.z:0;else{let mn=Math.pow(2,-ot);Lt=Math.floor(xe.width*mn),At=Math.floor(xe.height*mn),C.isDataArrayTexture?Yt=xe.depth:C.isData3DTexture?Yt=Math.floor(xe.depth*mn):Yt=1,ee=0,re=0,Me=0}rt!==null?(Ft=rt.x,wt=rt.y,ge=rt.z):(Ft=0,wt=0,ge=0);let Ke=$t.convert(J.format),wn=$t.convert(J.type),Kt;J.isData3DTexture?(_t.setTexture3D(J,0),Kt=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(_t.setTexture2DArray(J,0),Kt=X.TEXTURE_2D_ARRAY):(_t.setTexture2D(J,0),Kt=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);let An=b.getParameter(X.UNPACK_ROW_LENGTH),Fe=b.getParameter(X.UNPACK_IMAGE_HEIGHT),kn=b.getParameter(X.UNPACK_SKIP_PIXELS),Mn=b.getParameter(X.UNPACK_SKIP_ROWS),Yi=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,xe.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xe.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,ee),b.pixelStorei(X.UNPACK_SKIP_ROWS,re),b.pixelStorei(X.UNPACK_SKIP_IMAGES,Me);let Ns=C.isDataArrayTexture||C.isData3DTexture,Qe=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){let mn=at.get(C),Zi=at.get(J),an=at.get(mn.__renderTarget),Ii=at.get(Zi.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,an.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ne=0;Ne<Yt;Ne++)Ns&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,at.get(C).__webglTexture,ot,Me+Ne),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,at.get(J).__webglTexture,Ut,ge+Ne)),X.blitFramebuffer(ee,re,Lt,At,Ft,wt,Lt,At,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||at.has(C)){let mn=at.get(C),Zi=at.get(J);b.bindFramebuffer(X.READ_FRAMEBUFFER,Z),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Q);for(let an=0;an<Yt;an++)Ns?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,ot,Me+an):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,ot),Qe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zi.__webglTexture,Ut,ge+an):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Zi.__webglTexture,Ut),ot!==0?X.blitFramebuffer(ee,re,Lt,At,Ft,wt,Lt,At,X.COLOR_BUFFER_BIT,X.NEAREST):Qe?X.copyTexSubImage3D(Kt,Ut,Ft,wt,ge+an,ee,re,Lt,At):X.copyTexSubImage2D(Kt,Ut,Ft,wt,ee,re,Lt,At);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Qe?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Kt,Ut,Ft,wt,ge,Lt,At,Yt,Ke,wn,xe.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(Kt,Ut,Ft,wt,ge,Lt,At,Yt,Ke,xe.data):X.texSubImage3D(Kt,Ut,Ft,wt,ge,Lt,At,Yt,Ke,wn,xe):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ut,Ft,wt,Lt,At,Ke,wn,xe.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ut,Ft,wt,xe.width,xe.height,Ke,xe.data):X.texSubImage2D(X.TEXTURE_2D,Ut,Ft,wt,Lt,At,Ke,wn,xe);b.pixelStorei(X.UNPACK_ROW_LENGTH,An),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Fe),b.pixelStorei(X.UNPACK_SKIP_PIXELS,kn),b.pixelStorei(X.UNPACK_SKIP_ROWS,Mn),b.pixelStorei(X.UNPACK_SKIP_IMAGES,Yi),Ut===0&&J.generateMipmaps&&X.generateMipmap(Kt),b.unbindTexture()},this.initRenderTarget=function(C){at.get(C).__webglFramebuffer===void 0&&_t.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?_t.setTextureCube(C,0):C.isData3DTexture?_t.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?_t.setTexture2DArray(C,0):_t.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){dt=0,mt=0,Tt=null,b.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ve._getUnpackColorSpace()}};var Hg=new Qn,ru=new q,Xi=class extends Jo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new xn(t,3)),this.setAttribute("uv",new xn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new qs(e,6,1);return this.setAttribute("instanceStart",new Vi(n,3,0)),this.setAttribute("instanceEnd",new Vi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new qs(e,6,1);return this.setAttribute("instanceColorStart",new Vi(n,3,0)),this.setAttribute("instanceColorEnd",new Vi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ho(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Hg.setFromBufferAttribute(e),this.boundingBox.union(Hg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ru.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ru)),ru.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ru));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new kt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ei.line={uniforms:ll.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var as=class extends Un{constructor(t){super({type:"LineMaterial",uniforms:ll.clone(ei.line.uniforms),vertexShader:ei.line.vertexShader,fragmentShader:ei.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Ef=new sn,Gg=new q,Wg=new q,Vn=new sn,Hn=new sn,os=new sn,Tf=new q,Af=new He,Gn=new Ko,Xg=new q,au=new Qn,ou=new ui,ls=new sn,cs,Rr;function qg(i,t,e){return ls.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ls.multiplyScalar(1/ls.w),ls.x=Rr/e.width,ls.y=Rr/e.height,ls.applyMatrix4(i.projectionMatrixInverse),ls.multiplyScalar(1/ls.w),Math.abs(Math.max(ls.x,ls.y))}function Db(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,c=a;l<c;l++){Gn.start.fromBufferAttribute(s,l),Gn.end.fromBufferAttribute(r,l),Gn.applyMatrix4(e);let h=new q,d=new q;cs.distanceSqToSegment(Gn.start,Gn.end,d,h),d.distanceTo(h)<Rr*.5&&t.push({point:d,pointOnLine:h,distance:cs.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Nb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,c=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),v=-t.near;cs.at(1,os),os.w=1,os.applyMatrix4(t.matrixWorldInverse),os.applyMatrix4(n),os.multiplyScalar(1/os.w),os.x*=r.x/2,os.y*=r.y/2,os.z=0,Tf.copy(os),Af.multiplyMatrices(t.matrixWorldInverse,a);for(let m=0,y=d;m<y;m++){if(Vn.fromBufferAttribute(c,m),Hn.fromBufferAttribute(h,m),Vn.w=1,Hn.w=1,Vn.applyMatrix4(Af),Hn.applyMatrix4(Af),Vn.z>v&&Hn.z>v)continue;if(Vn.z>v){let k=Vn.z-Hn.z,R=(Vn.z-v)/k;Vn.lerp(Hn,R)}else if(Hn.z>v){let k=Hn.z-Vn.z,R=(Hn.z-v)/k;Hn.lerp(Vn,R)}Vn.applyMatrix4(n),Hn.applyMatrix4(n),Vn.multiplyScalar(1/Vn.w),Hn.multiplyScalar(1/Hn.w),Vn.x*=r.x/2,Vn.y*=r.y/2,Hn.x*=r.x/2,Hn.y*=r.y/2,Gn.start.copy(Vn),Gn.start.z=0,Gn.end.copy(Hn),Gn.end.z=0;let I=Gn.closestPointToPointParameter(Tf,!0);Gn.at(I,Xg);let x=sf.lerp(Vn.z,Hn.z,I),g=x>=-1&&x<=1,B=Tf.distanceTo(Xg)<Rr*.5;if(g&&B){Gn.start.fromBufferAttribute(c,m),Gn.end.fromBufferAttribute(h,m),Gn.start.applyMatrix4(a),Gn.end.applyMatrix4(a);let k=new q,R=new q;cs.distanceSqToSegment(Gn.start,Gn.end,R,k),e.push({point:R,pointOnLine:k,distance:cs.origin.distanceTo(R),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}var Ir=class extends Nn{constructor(t=new Xi,e=new as({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,c=e.count;a<c;a++,l+=2)Gg.fromBufferAttribute(e,a),Wg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Gg.distanceTo(Wg);let r=new qs(s,2,1);return t.setAttribute("instanceDistanceStart",new Vi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Vi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;cs=t.ray;let a=this.matrixWorld,l=this.geometry,c=this.material;Rr=c.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),ou.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=Rr*.5;else{let v=Math.max(s.near,ou.distanceToPoint(cs.origin));h=qg(s,v,c.resolution)}if(ou.radius+=h,cs.intersectsSphere(ou)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),au.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Rr*.5;else{let v=Math.max(s.near,au.distanceToPoint(cs.origin));d=qg(s,v,c.resolution)}au.expandByScalar(d),cs.intersectsBox(au)!==!1&&(n?Db(this,e):Nb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ef),this.material.uniforms.resolution.value.set(Ef.z,Ef.w))}};var lu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),hs=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Yg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:c,CY:h,mcs:d,q:v,list:m,clamp:y,norm:M,munis:I}=i,x=o=>document.querySelector(o),g=o=>String(o).replace(/[<>&"]/g,u=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[u]),B=(o,u)=>[(o-c)*l,(u-h)*l],k=.06,R=t.segs.map(o=>{let u=[],f=[0];for(let _=0;_<o.length;_+=2){let S=B(o[_],o[_+1]);u.length&&f.push(f[f.length-1]+Math.hypot(S[0]-u[u.length-1][0],S[1]-u[u.length-1][1])),u.push(S)}return{p:u,c:f,L:f[f.length-1]}}),E=t.stops.map(([o,u,f,_])=>({n:o,id:_,w:B(u,f),fams:new Set})),O=t.routes.map(([o,u,f])=>({s:o,l:u,c:f})),G=new Map;(t.bus||[]).forEach(([o,u,f,_])=>{let S={days:new Set(o),name:u,stops:f,times:_};f.forEach((w,P)=>{if(P<f.length-1){let D=G.get(w)||[];D.push([S,P]),G.set(w,D)}})});function A(o,u,f){let _=se(),S=t.days.indexOf(_.ymd),w=[];for(let[P,D]of G.get(o)||[]){if(!P.days.has(S))continue;let L=P.times[D];if(L<u||L>f)continue;let z=P.stops[P.stops.length-1];w.push({sm:L,est:L,dl:0,fam:P.name,dest:E[z].n,destId:E[z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(D)})}return w}let F=(o,u)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),_=u.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(_[1]||"")||(+f[2]||0)-(+_[2]||0)||f[3].localeCompare(_[3])},H=[...new Set(O.map(o=>o.s))].sort(F),W={};O.forEach(o=>{W[o.s]||(W[o.s]=o.c)});let st=t.pats.map(([o,u,f])=>({stops:o,t:u,segs:f})),lt=t.trips.map(([o,u,f,_,S],w)=>({day:o,pat:st[u],fam:O[f].s,c:O[f].c,t0:_,num:S,tid:t.tids[w]})),Z={};H.forEach(o=>Z[o]=new Set),lt.forEach(o=>{o.pat.segs.forEach(u=>Z[o.fam].add(u)),o.pat.stops.forEach(u=>E[u].fams.add(o.fam))});let Q=t.days.map((o,u)=>lt.filter(f=>f.day===u)),dt=new Map(lt.map(o=>[o.tid,o])),mt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,gt=3.922*Tt,Mt=-39.705*Tt;function St(o,u){let f=o*Tt+gt,_=u*Tt,S=Math.cos(Mt),w=Math.sin(Mt),P=Math.cos(_),D=Math.cos(f)*P,L=Math.sin(f)*P,z=Math.sin(_),Y=Math.atan2(L,D*S-z*w),p=Math.asin(z*S+D*w),T=Math.sqrt(2/(1+Math.cos(Y)*Math.cos(p))),N=T*Math.cos(p)*Math.sin(Y),V=T*Math.sin(p),[ht,bt,tt,ft,j,he,ye]=mt;return B((bt+ht*N-j)*ye,(he-(ft-tt*V))*ye)}let Xt=new Map(E.map((o,u)=>[o.id,u]));function Qt(o){if(o.g)return o.g;let u=[],f=[],_=[0],S=0;return o.segs.forEach((w,P)=>{let D=R[w];D.p.forEach((L,z)=>{P&&!z||(u.push(L),f.push(S+D.c[z]))}),S+=D.L,_.push(S)}),o.g={pts:u,cum:f,stopD:_}}function Ge(o,u,f,_){let S=1e18,w=0;for(let P=0;P+1<o.pts.length;P++){if(o.cum[P+1]<f||o.cum[P]>_)continue;let D=o.pts[P],L=o.pts[P+1],z=L[0]-D[0],Y=L[1]-D[1],p=z*z+Y*Y||1e-9,T=Math.max(0,Math.min(1,((u[0]-D[0])*z+(u[1]-D[1])*Y)/p)),N=D[0]+z*T-u[0],V=D[1]+Y*T-u[1],ht=N*N+V*V;ht<S&&(S=ht,w=o.cum[P]+T*(o.cum[P+1]-o.cum[P]))}return{d:w,err:Math.sqrt(S)}}function Pe(o,u){let f=0,_=o.cum.length-1;if(u<=0)return o.pts[0];if(u>=o.cum[_])return o.pts[_];for(;_-f>1;){let D=f+_>>1;o.cum[D]<=u?f=D:_=D}let S=(u-o.cum[f])/(o.cum[_]-o.cum[f]||1),w=o.pts[f],P=o.pts[_];return[w[0]+(P[0]-w[0])*S,w[1]+(P[1]-w[1])*S]}let $e=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,xt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let u={};return xt.formatToParts(o).forEach(f=>u[f.type]=f.value),{ymd:u.year+u.month+u.day,min:+u.hour*60+ +u.minute+ +u.second/60}}let Pt=0,oe=null,Jt=0,_e=0;function se(){let o=vt(new Date);if(Pt===0&&oe==null)return{...o,live:!0};let u=oe==null?o.min:Jt+(Pt?(performance.now()-_e)/6e4*Pt:0);return{ymd:o.ymd,min:u,live:!1}}let nt=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Ct="https://rodalies.erathegameoftime.com",$={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let u=localStorage.getItem("rod_rt");u&&/jhmuyo\.workers\.dev/.test(u)&&(u=Ct,localStorage.setItem("rod_rt",u)),$.url=u||Ct}catch{$.url=Ct}let Rt=(o,u)=>{let f=new AbortController,_=setTimeout(()=>f.abort(),12e3);return fetch(o+u,{cache:"no-store",signal:f.signal}).then(S=>{if(clearTimeout(_),!S.ok)throw new Error("HTTP "+S.status);return S.json()},S=>{throw clearTimeout(_),S})},Ot="https://rodalies.jhmuyo.workers.dev";function le(){return($.url===Ct&&$.altUntil>Date.now()?Ot:$.url).replace(/\/+$/,"")}let de=o=>/^51/.test(o||"");async function ue(){if(!$.url){et();return}let o=le();if(!ue.busy){ue.busy=1;try{await we(o)}finally{ue.busy=0}}}async function we(o){let u=!$.adifAt||Date.now()-$.adifAt>11e4,f=p=>({status:"fulfilled",value:p}),_=p=>({status:"rejected",reason:p}),S,w,P,D,L,z=null;if($.noLive&&Date.now()-$.noLive>30*6e4&&($.noLive=0),!$.noLive)try{z=await Rt(o,"/live.json")}catch(p){if(/HTTP 404/.test(p.message))$.noLive=Date.now();else{if($.url===Ct&&o!==Ot)return $.altUntil=Date.now()+30*6e4,we(Ot);o===Ot&&($.altUntil=0),z={__fail:p}}}if(z&&z.__fail)S=w=P=D=L=_(z.__fail);else if(z&&z.v===1){let p=N=>z[N]&&!z[N].__err?f(z[N]):_(new Error(z[N]&&z[N].__err||"sin dato"));S=p("tu"),w=p("vp"),P=p("al"),D=p("nt"),L=u?p("ad"):_(0);let T=z.rep;T&&Array.isArray(T.items)&&($.rep=T.items,$.repSkew=(T.now||Date.now())-Date.now(),T.tipos&&($.tipos=T.tipos),$.repOk=Date.now(),$.repFail=0)}else(!$.repFail||Date.now()-$.repFail>15*6e4)&&Rt(o,"/reports.json").then(p=>{p&&Array.isArray(p.items)?($.rep=p.items,$.repSkew=(p.now||Date.now())-Date.now(),p.tipos&&($.tipos=p.tipos),$.repOk=Date.now(),$.repFail=0):$.repFail=Date.now()}).catch(()=>{$.repFail=Date.now(),$.repOk=0}),[S,w,P,D,L]=await Promise.allSettled([Rt(o,"/trip_updates.json"),Rt(o,"/vehicle_positions.json"),Rt(o,"/alerts.json"),Rt(o,"/notices.json"),u?Rt(o,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?($.adif=L.value,$.adifAt=Date.now()):u&&($.adifAt=Date.now()-6e4),S.status==="fulfilled"){let p=new Map,T=new Map;for(let N of S.value.entity||[]){let V=N.tripUpdate;if(!V||!V.trip||!de(V.trip.tripId))continue;let ht=V.trip.tripId,bt=(V.stopTimeUpdate||[])[0],tt=V.delay;tt==null&&bt&&(tt=(bt.arrival||bt.departure||{}).delay),V.trip.scheduleRelationship==="CANCELED"&&(tt="X"),tt!=null&&p.set(ht,tt),T.set(ht,{next:bt?{sid:bt.stopId,t:+((bt.arrival||bt.departure||{}).time||0)}:null})}$.delays=p,$.tu=T,$.ok=Date.now(),$.feedTs=+((S.value.header||{}).timestamp||0)*1e3,$.err=""}else $.err=S.reason&&S.reason.message||__t(0);if(w.status==="fulfilled"){let p=new Map,T=Date.now()/1e3;for(let N of w.value.entity||[]){let V=N.vehicle;if(!V||!V.trip||!de(V.trip.tripId)||!V.position)continue;let ht=V.vehicle&&V.vehicle.label||"",bt=ht.match(/PLATF\.\(([^)]+)\)/),tt=$.vp.get(V.trip.tripId),ft={tid:V.trip.tripId,w:St(+V.position.longitude,+V.position.latitude),st:V.currentStatus||"",sid:V.stopId||"",ts:+V.timestamp||T,label:ht,plat:bt?bt[1]:"",fam:(ht.split("-")[0]||"").trim(),num:V.vehicle&&V.vehicle.id||""};ft.disp=tt?tt.disp:null,p.set(ft.tid,ft)}$.vp=p,$.okVP=Date.now()}let Y=[];if(D.status==="fulfilled"&&Array.isArray(D.value.included)){$.okNotices=Date.now();for(let p of D.value.included){let T=new Set((p.lines||[]).map(tt=>tt.id).filter(tt=>W[tt])),N=(tt,ft)=>{tt=tt||{},ft=ft||window.__L;let j=tt[ft];return ft==="en"&&j&&(j===tt.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(j))&&(j=""),(j||tt.es||tt.ca||"").trim()},V=tt=>[N(p.description,tt),N(p.title,tt)].sort((ft,j)=>j.length-ft.length)[0],ht=V(),bt=V("es");ht&&Y.push({id:"N"+p.externalId,fams:T,stops:new Set,txt:ht,es:bt,when:(p.date||"")+"T"+(p.time||""),src:"Rodalies",core:p.core||""})}}if(P.status==="fulfilled"){let p=+((P.value.header||{}).timestamp||0);if($.alertsTs=p,Date.now()/1e3-p<6*3600)for(let T of P.value.entity||[]){let N=T.alert;if(!N)continue;let V=new Set,ht=new Set;for(let j of N.informedEntity||[])(j.routeId||"").startsWith("51")&&V.add(j.routeId.replace(/^51T\d+/,"")),j.stopId&&Xt.has(j.stopId)&&ht.add(Xt.get(j.stopId));if(!V.size&&!ht.size)continue;let bt=(N.descriptionText||N.headerText||{translation:[]}).translation||[],tt=((bt.find(j=>j.language==="es")||bt[0]||{}).text||"").trim(),ft=+((N.activePeriod||[])[0]||{}).start||0;Y.some(j=>j.txt===tt)||Y.push({id:T.id,fams:V,stops:ht,txt:tt,when:ft?new Date(ft*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if($.adif&&Date.now()-$.adifAt<15*6e4)for(let[p,T]of($.adif.items||[]).entries()){let N=(T.t?T.t+". ":"")+T.txt,V=new Set,ht=new Set,bt=M(N);for(let tt of N.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))W[tt[1]]&&V.add(tt[1]);E.forEach((tt,ft)=>{tt.fams.size&&tt.n.length>4&&bt.includes(M(tt.n))&&(ht.add(ft),V.size||tt.fams.forEach(j=>V.add(j)))}),Y.some(tt=>tt.txt===N)||Y.push({id:"A"+p,fams:V,stops:ht,txt:N,when:$.adif.upd||"",src:"Adif",lvl:T.lvl})}if(D.status==="fulfilled"||P.status==="fulfilled"){$.alerts=Y.sort((p,T)=>T.when>p.when?1:-1);try{X0()}catch{}}et(),Cu(),Me=0,a()}let X=()=>$.okVP&&Date.now()-$.okVP<10*6e4,Ue=()=>$.okVP&&Date.now()-$.okVP<9e4,Le={at:0,v:!1},U=()=>{if(!X()||$.vp.size>0)return!1;if(Date.now()-Le.at>3e4){Le.at=Date.now();let o=vt(new Date),u=t.days.indexOf(o.ymd),f=0;if(u>=0)for(let _ of Q[u]){let S=o.min-_.t0;S>_.pat.t[1]+2&&S<_.pat.t[_.pat.t.length-2]-2&&f++}Le.v=f>=6}return Le.v},b=()=>X()&&!U();function et(){let o=x("#rtst"),u=x("#mode");if(u){let _=[...ct].filter(D=>{Ya("");let L=Di.m.get(D);return L&&L[0]>=2}),S=qa(_),w=!!b()&&se().live&&!(_.length&&S.length===_.length);u.classList.toggle("on",w&&Ue()),u.classList.toggle("pre",!(w&&Ue())),u.textContent=w&&!Ue()?__t(1):w?__t(2):It.cur?__t(3):__t(4),u.classList.toggle("past",!!It.cur);let P=x("#rcgrab");if(P){let D=P.querySelector(".rdot");D||(D=document.createElement("b"),D.className="rdot",P.insertBefore(D,P.firstChild)),D.className="rdot "+(It.cur?"past":w&&Ue()?"on":"pre"),D.title=u.textContent}u.title=It.cur?`${__t(5)}${It.cur.sn.t}${__t(6)}`:""}if(!o)return;$.url?$.err?o.textContent=__t(8)+$.err+__t(9):b()?o.innerHTML=`${__t(10)}${$.vp.size}${__t(11)}${$.delays.size}${__t(12)}${new Date($.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:U()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=$.err||__t(7);let f=x("#rturl");f&&f._shown!==$.url&&(f.value=$.url,f._shown=$.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){$.err=__t(15),et();return}$.url=o;try{localStorage.setItem("rod_rt",o)}catch{}$.ok=0,$.err="",et(),ue()},x("#rtoff").onclick=()=>{$.url=Ct;try{localStorage.removeItem("rod_rt")}catch{}d._h="",ue()};let at=0;setInterval(()=>{let o=zn.size||Re;(document.hidden?!o||Date.now()-at<115e3:Date.now()-at<15e3)||(at=Date.now(),ue())},2e4),setTimeout(()=>{at=Date.now(),ue()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-at>15e3&&(at=Date.now(),ue())});let It={snap:null,key:""};function Bt(){let o=se();if(o.live||!Ne.hoy||!Ne.hoy.snaps||Pt&&oe==null)return null;let u=vt(new Date).min;if(o.min>u+1)return null;let f=null;for(let _ of Ne.hoy.snaps){if(!_.d)continue;let S=ap(_.t);S<=o.min+1&&(!f||S>f.m)&&(f={m:S,sn:_})}return f&&o.min-f.m<=25?f:null}let pt=o=>{{let S=wu(o.num);if(S&&S.cx&&se().live)return"X"}let u=It.cur;if(u){if(u.sn.x&&u.sn.x.includes(o.tid))return"X";let S=u.sn.d[o.tid];return S??0}if(!b())return null;let f=$.delays.get(o.tid),_=$.vp.get(o.tid);return f==="X"?f:_&&_.pre&&_.preDl>=1?Math.max(typeof f=="number"?f:0,_.preDl*60):f??null},ct=new Set(H);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(u=>H.includes(u))&&(ct.clear(),o.forEach(u=>H.includes(u)&&ct.add(u)))}catch{}let Gt=new Xi,ce=new Xi,qt=new as({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),zt=new as({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ae=new Ir(Gt,qt),fe=new Ir(ce,zt);fe.renderOrder=20,ae.renderOrder=21,ae.frustumCulled=fe.frustumCulled=!1,e.add(fe,ae);function Ee(o){let u=o[0]/l+c,f=o[1]/l+h;for(let _ of I){if(_._bb===void 0){let w=1e9,P=1e9,D=-1e9,L=-1e9;for(let z of _.rings||[]){let Y=z[0]||[];for(let p=0;p<Y.length;p+=2)Y[p]<w&&(w=Y[p]),Y[p]>D&&(D=Y[p]),Y[p+1]<P&&(P=Y[p+1]),Y[p+1]>L&&(L=Y[p+1])}_._bb=[w,P,D,L]}let S=_._bb;if(!(u<S[0]||u>S[2]||f<S[1]||f>S[3]))for(let w of _.rings||[]){let P=w[0]||[],D=!1;for(let L=0,z=P.length,Y=z-2;L<z;Y=L,L+=2){let p=P[L+1],T=P[Y+1];p>f!=T>f&&u<(P[Y]-P[L])*(f-p)/(T-p)+P[L]&&(D=!D)}if(D)return!0}}return!1}let K=!1;function Wt(){K||!I.length||(K=!0,E.forEach(o=>{o.ext=!Ee(o.w)}),R.forEach(o=>{o.ext=!Ee(o.p[0])&&!Ee(o.p[o.p.length-1])&&!Ee(o.p[o.p.length>>1])}))}let yt=()=>{let o=new Set(ct.size<=2?ct:[]);try{wt&&wt.fam&&o.add(wt.fam)}catch{}return o},$t="";function jt(){Wt();let o=[],u=[],f=new Set,_=new ve,S=new ve("#d2d0d0"),w=yt();$t=[...w].join();for(let Y of H)if(ct.has(Y))for(let p of Z[Y]){if(f.has(p))continue;f.add(p);let T=R[p].p;_.set(W[Y]),R[p].ext&&!w.has(Y)&&_.lerp(S,.55);for(let N=0;N+1<T.length;N++)o.push(T[N][0],T[N][1],k,T[N+1][0],T[N+1][1],k),u.push(_.r,_.g,_.b,_.r,_.g,_.b)}o.length||(o.push(0,0,-50,0,0,-50),u.push(0,0,0,0,0,0));let P=new Xi,D=new Xi;P.setPositions(o),P.setColors(u),D.setPositions(o);let L=ae.geometry,z=fe.geometry;ae.geometry=P,fe.geometry=D,L&&L.dispose(),z&&z.dispose(),a()}jt();let Et=o=>new Un({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ve(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),ne=new vn,te=E.length,Je=new Float32Array(te*3),We=new Float32Array(te*3),On=new Float32Array(te),ii=new Float32Array(te);E.forEach((o,u)=>{Je[u*3]=o.w[0],Je[u*3+1]=o.w[1],Je[u*3+2]=k,We.set([1,1,1],u*3),On[u]=6,ii[u]=1.6}),ne.setAttribute("position",new on(Je,3)),ne.setAttribute("fill",new on(We,3)),ne.setAttribute("size",new on(On,1)),ne.setAttribute("bw",new on(ii,1));let vl=Et("#1d2330"),Da=new Mr(ne,vl);Da.renderOrder=22,Da.frustumCulled=!1,e.add(Da);function Bn(){let o=r.dist<45,u=yt();E.forEach((f,_)=>{let S=[...f.fams].some(P=>ct.has(P)),w=f.ext&&![...f.fams].some(P=>u.has(P))&&_!==ge;On[_]=S?_===ge?13:w?3:o?8:5:0,ii[_]=_===ge?3:1.6}),ne.attributes.size.needsUpdate=!0,ne.attributes.bw.needsUpdate=!0}let si=600,Ci=new vn,er=new Float32Array(si*3),nr=new Float32Array(si*3),Ri=new Float32Array(si),Fr=new Float32Array(si);Ci.setAttribute("position",new on(er,3)),Ci.setAttribute("fill",new on(nr,3)),Ci.setAttribute("size",new on(Ri,1)),Ci.setAttribute("bw",new on(Fr,1));let Ps=new Float32Array(si);Ci.setAttribute("ang",new on(Ps,1));let yl=new Un({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ve("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ls=new Mr(Ci,yl);Ls.renderOrder=24,Ls.frustumCulled=!1,e.add(Ls);let qi=new vn,ps=new Float32Array(si*3),Na=new Float32Array(si*3),Ua=new Float32Array(si),Sl=new Float32Array(si);qi.setAttribute("position",new on(ps,3)),qi.setAttribute("fill",new on(Na,3)),qi.setAttribute("size",new on(Ua,1)),qi.setAttribute("bw",new on(Sl,1));let Fa=new Mr(qi,Et("#ffffff"));Fa.renderOrder=23,Fa.frustumCulled=!1,e.add(Fa);function Ml(o,u){let f=R[o],_=u*f.L,S=0,w=f.c.length-1;for(;w-S>1;){let Y=S+w>>1;f.c[Y]<=_?S=Y:w=Y}let P=f.c[w]-f.c[S]||1,D=(_-f.c[S])/P,L=f.p[S],z=f.p[w];return[L[0]+(z[0]-L[0])*D,L[1]+(z[1]-L[1])*D]}let bl=o=>o*o*(3-2*o)*.35+o*.65;function Ds(o,u){let f=o.pat.t,_=o.pat.stops.length,S=f[2*_-2];if(u<f[1]-2||u>S+1)return null;if(u<=f[1])return{w:E[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let w=0;w<_-1;w++){let P=f[2*w+1],D=f[2*w+2],L=f[2*w+3];if(u<=D){let z=D>P?(u-P)/(D-P):1;return{w:Ml(o.pat.segs[w],bl(y(z,0,1))),at:-1,next:w+1,prev:w,moving:!0}}if(u<=L)return{w:E[o.pat.stops[w+1]].w,at:w+1,next:w+1,moving:!1}}return{w:E[o.pat.stops[_-1]].w,at:_-1,next:_-1,moving:!1}}function C(o){let u=t.days.indexOf(o.ymd),f=[];if(u<0)return{k:u,out:f};let _=(S,w)=>{for(let P of S){if(!ct.has(P.fam))continue;let D=pt(P);if(D==="X")continue;let L=(D||0)/60,z=o.min+w-P.t0-L;if(z<-2||z>P.pat.t[P.pat.t.length-2]+1)continue;let Y=Ds(P,z);Y&&f.push({tr:P,p:Y,rel:z,dl:L,live:D!=null})}};return _(Q[u],0),u>0&&_(Q[u-1],1440),{k:u,out:f}}function J(o,u,f,_){let S=o.pat.stops[0],w=u.dep0,P=null,D=(z,Y)=>{for(let p of z||[]){let T=p.pat.stops,N=T.length;if(T[N-1]!==S||p===o)continue;let V=p.t0+p.pat.t[2*(N-1)]-Y;if(V>w+5||V<w-120)continue;let ht=Qt(p.pat),bt=Ge(ht,u.w,-1,1e9);if(bt.err>.6)continue;let tt=ht.stopD,ft=p.pat.t,j=tt.findIndex(Vt=>Vt>bt.d);j<0&&(j=N-1);let he=j===0?ft[1]:ft[2*j-1]+(tt[j]>tt[j-1]?(bt.d-tt[j-1])/(tt[j]-tt[j-1]):1)*(ft[2*j]-ft[2*j-1]),ye=f-(p.t0+he-Y);ye<-5||ye>120||(!P||Math.abs(ye)<Math.abs(P.prevDl))&&(P={prevTr:p,dPrev:bt.d,prevDl:ye,arrO:V+Math.max(0,ye)})}};if(D(Q[_],0),_>0&&D(Q[_-1],1440),!P)return{prevTr:null,preDl:0};let L=Math.max(w,P.arrO+3);return{...P,depEst:L,preDl:Math.max(0,L-w)}}function ut(o,u,f){let _=o.pat.t,S=u.length;if(!(f>=0))return f<0?u[0]:null;for(let w=0;w<S;w++)if(f<=_[2*w+1]){if(f>=_[2*w]||w===0)return u[w];let P=_[2*w-1],D=_[2*w];return u[w-1]+(u[w]-u[w-1])*(D>P?(f-P)/(D-P):1)}return u[S-1]}let rt=performance.now();function ot(){let o=[],u=Date.now()/1e3,f=performance.now(),_=Math.min(1,(f-rt)/1e3);rt=f;for(let S of $.vp.values()){let w=dt.get(S.tid),P=w?w.fam:S.fam;if(P&&W[P]&&!ct.has(P))continue;let D=$.delays.get(S.tid),L=typeof D=="number"?D/60:0,z=Math.max(0,u-S.ts);S.mvTs!==S.ts&&((!S.mvW||Math.hypot(S.w[0]-S.mvW[0],S.w[1]-S.mvW[1])>.025)&&(S.mvW=S.w,S.mvAt=S.ts),S.mvTs=S.ts),S.still=S.ts-(S.mvAt||S.ts);let Y=S.w,p=-1;if(w){let N=Qt(w.pat),V=N.stopD;if(S.dObs==null||S.obsAt!==S.ts){let j=Ge(N,S.w,-1,1e9);S.dObs=j.d,S.err=j.err,S.obsAt=S.ts}let ht=se(),bt=t.days.indexOf(ht.ymd),tt=w.day===bt-1?1440:0,ft=w.t0+w.pat.t[1]-tt;if(S.pre=ht.min+L<ft-1&&(S.dObs>V[0]+.35||S.err>.6)&&!(S.st==="STOPPED_AT"&&S.sid===E[w.pat.stops[0]].id),S.dep0=ft,S.pre){if(S.atStop=-1,S.next=0,p=0,S.disp=null,S.prevAt!==S.ts&&(S.prevAt=S.ts,Object.assign(S,J(w,S,ht.min,bt))),S.prevTr){let j=Qt(S.prevTr.pat);Y=Pe(j,S.dPrev)}}else if(!Ue()&&w){let j=se(),he=t.days.indexOf(j.ymd),ye=w.day===he-1?1440:0,Vt=Ds(w,j.min+ye-w.t0-L);Vt?(Y=Vt.w,S.est=!0,p=Vt.next,S.atStop=Vt.moving?-1:Vt.at,S.next=Vt.next,S.before=!1):(S.atStop=-1,S.next=-1)}else if(S.err<=.6){let j=V.findIndex(Vt=>Vt>S.dObs+.08);j<0&&(j=V.length-1);let he=V.reduce((Vt,Xe,Ae)=>Math.abs(Xe-S.dObs)<Math.abs(V[Vt]-S.dObs)?Ae:Vt,0);S.atStop=Math.abs(V[he]-S.dObs)<.16?he:-1;{let Vt=S.st==="STOPPED_AT"&&S.sid?w.pat.stops.findIndex(Xe=>E[Xe].id===S.sid):-1;Vt>=0&&Math.abs(V[Vt]-S.dObs)<.6&&(S.atStop=Vt,j<=Vt&&(j=Math.min(Vt+1,V.length-1)))}S.before=S.atStop>=0&&S.dObs<V[S.atStop]-.15,S.next=j,p=j;let ye=S.dObs;if(S.st==="STOPPED_AT"&&S.atStop>=0)ye=V[S.atStop];else if(j>0){let Vt=(w.pat.t[2*j]-w.pat.t[2*j-1])*60,Xe=Vt>0?(V[j]-V[j-1])/Vt:0,Ae=se(),pe=t.days.indexOf(Ae.ymd),fn=w.day===pe-1?1440:0,Oe=ut(w,V,Ae.min+fn-w.t0-L),pi=S.dObs+Xe*Math.min(z,60);Oe!=null&&(pi=Math.min(pi,Math.max(S.dObs,Oe))),ye=Math.max(S.dObs,Math.min(V[j]-.03,pi))}S.disp==null||Math.abs(S.disp-ye)>1.2?S.disp=ye:ye>S.disp&&(S.disp+=(ye-S.disp)*Math.min(1,_*1.5)),Y=Pe(N,S.disp)}else if(S.err>2){let j=se(),he=t.days.indexOf(j.ymd),ye=w.day===he-1?1440:0,Vt=Ds(w,j.min+ye-w.t0-L);Vt&&(Y=Vt.w,S.est=!0,p=Vt.next),S.atStop=-1,S.next=Vt?Vt.next:-1}else S.atStop=-1,S.next=-1}let T=S.pre?"":S.st==="STOPPED_AT"&&S.atStop>=0||S.atStop>=0&&S.still>30?"st":S.still>=90&&S.atStop<0?"via":"";o.push({tr:w,v:S,w:Y,stop:T,p:{w:Y},fam:P||"?",c:w?w.c:W[P]||"#6b7385",dl:L,live:!0,real:!0,idx:p,age:z,cancel:D==="X"})}return o}let Ut=new Map,Lt=!1,At=!1,Yt="",ee={st:-1},re=[],Me=0,Ft=null,wt=null,ge=-1,xe=!1,Ke=0,wn="";function Kt(o){let u=Pt>0||b()&&oe==null||!!wt,f=window.__mapHidden?1e3:u?50:250;if(o-Me<f)return!1;Me=o,[...yt()].join()!==$t&&(jt(),Bn());{let p=Bt(),T=p?p.sn.t:"";It.cur=p,T!==It.key&&(It.key=T,et()),!p&&!se().live&&!Ne.at&&El()}let _=se(),S=b()&&_.live,w=S?{k:t.days.indexOf(_.ymd),out:ot()}:C(_);re=w.out;let P=new ve,D=0,L=0;for(let p of re){if(D>=si)break;er[D*3]=p.p.w[0],er[D*3+1]=p.p.w[1],er[D*3+2]=k+.02;let T=null;if(p.real&&p.v.pre&&p.v.prevTr)T=Pe(Qt(p.v.prevTr.pat),p.v.dPrev+.35);else if(p.real&&p.tr&&!p.v.pre&&p.v.err<=.6&&p.v.disp!=null&&!(p.v.st==="STOPPED_AT"&&p.v.atStop>=0))T=Pe(Qt(p.tr.pat),p.v.disp+.35);else if(!p.real&&p.p.moving){let tt=p.tr.pat.t,ft=p.p.prev,j=tt[2*ft+1],he=tt[2*ft+2],ye=he>j?(p.rel-j)/(he-j):1;T=Ml(p.tr.pat.segs[ft],Math.min(1,bl(y(ye,0,1))+.04))}let N=p.real?!!p.stop:!p.p.moving;if(p.broke=jf(p),p.broke)Ps[D]=85;else if(N)Ps[D]=75;else if(T){let tt=Tl(p.p.w),ft=Tl(T),j=ft[0]-tt[0],he=ft[1]-tt[1];Ps[D]=Math.hypot(j,he)>.05?Math.atan2(j,-he):99}else Ps[D]=99;P.set(p.c||p.tr.c),nr[D*3]=P.r,nr[D*3+1]=P.g,nr[D*3+2]=P.b;let V=p.tr?p.tr===wt:wt&&wt.vtid===p.v.tid;Ri[D]=V?22:r.dist<45?17:14,Fr[D]=V?3.5:2.2;let ht=p.real&&p.stop==="via"||!!p.broke,bt=p.cancel||p.broke?[.86,.15,.15]:p.dl>10?[.86,.15,.15]:p.dl>5?[.92,.48,.05]:p.dl>=1?[.98,.8,.08]:[.09,.64,.29];(p.live&&p.dl>=5||V||ht)&&(ps[L*3]=p.p.w[0],ps[L*3+1]=p.p.w[1],ps[L*3+2]=k+.01,Na.set(V?bt:ht?[.86,.15,.15]:[.98,.45,.09],L*3),Ua[L]=Ri[D]+(V?16+5*Math.sin(o/220):ht?10+3*Math.sin(o/400):8),Sl[L]=V?2:3,L++),D++}if(Ci.setDrawRange(0,D),qi.setDrawRange(0,L),["position","fill","size","bw"].forEach(p=>{Ci.attributes[p].needsUpdate=!0,qi.attributes[p].needsUpdate=!0}),Ci.attributes.ang.needsUpdate=!0,Ft){let p=re.find(T=>T.tr===Ft);if(p){let T=0,N=innerHeight,V=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ht=x("#rc").getBoundingClientRect();innerWidth<=640&&(V&&(T=V.bottom),N=Math.min(N,ht.top));let bt=T+(N-T)/2,tt=bt-innerHeight/2,ft=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=p.p.w[0]-Math.sin(r.yaw)*tt*ft,s.ty=p.p.w[1]+Math.cos(r.yaw)*tt*ft}else b()&&se().live&&(Ft=null)}let z=nt(Math.floor(_.min+1e-6));z!==wn&&(wn=z,x("#ctime").textContent=z),x("#ntr").textContent=String(re.length),x("#ntrl").textContent=S?__t(16):__t(17);{let p=ct.size<H.length?[...ct].sort(F).join(", "):"",T=x("#ccount"),N=It.cur?`\u23EA ${re.length}${__t(18)}${It.cur.sn.t} \xB7 ${Object.values(It.cur.sn.d).filter(V=>V>=60).length}${__t(19)}`:!_.live&&_.min<vt(new Date).min-1&&!Pt?`${__t(20)}${Ne.hoy&&Ne.hoy.snaps&&Ne.hoy.snaps.some(V=>V.d)?`${__t(21)}${Ne.hoy.snaps.find(V=>V.d).t}`:__t(22)}`:S&&!Ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${hs(Math.round((Date.now()-$.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:S&&!re.some(V=>V.real)&&qa(ct).length?`\u{1F4E1} ${__t(25)}${p?` <small>\xB7 ${g(p)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${re.length} ${S?__t(27):__t(28)}${p?` <small>\xB7 ${g(p)}</small>`:""}${S&&$.okVP?(()=>{let V=Math.max(0,Math.round((Date.now()-$.okVP)/1e3));return` <small class="fresh${V<3?" new":""}">\u25CF ${__t(29)}${hs(V+" s")}</small>`})():""}`;T&&T._t!==N&&(T.innerHTML=N,T._t=N)}{let p=x("#p");p&&p.classList.toggle("ttf",!_.live||!!Pt)}let Y=new Date;if(x("#cdate").textContent=_.live?__t(30):Pt?__t(31)+Pt:wi?__t(32):__t(33),w.k<0?x("#src").innerHTML=`${__t(34)}${$e(t.days[0])}${__t(35)}${$e(t.days[t.days.length-1])}${__t(36)}`:S?x("#src").textContent=`${Ue()?__t(37):__t(38)}${hs(lu(Math.max(0,Date.now()/1e3-Math.max(...[...$.vp.values()].map(p=>p.ts),0))))}`:U()&&_.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+($.url?__t(41):__t(42))+__t(43),_.live){let p=Math.round(_.min),T=x("#tsl");document.activeElement!==T&&(T.value=p<240?p+1440:p)}{let p=wt?String(wt.num||wt.vtid||""):"";p!==Kt._sk&&(Kt._sk=p,De(!0))}return De(),!Kt._sp&&(S||!_.live||U()||!$.url)&&(Kt._sp=1,window.__splashOff&&window.__splashOff()),o-Ke>3e3&&(wt||ge>=0||xe||At||Yt)&&(Ke=o,ke()),et(),!0}let An=-1,Fe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),kn=[],Mn=document.createElement("button");Mn.type="button",Mn.id="mbtn",Mn.title=__t(44),Mn.innerHTML=__t(45),Mn.onclick=()=>{Fe=!Fe;try{localStorage.setItem("rod_mun",Fe?"1":"")}catch{}Mn.classList.toggle("on",Fe),a(),Ii()},Mn.classList.toggle("on",Fe),document.body.appendChild(Mn);let Yi=I.slice().sort((o,u)=>u.pop-o.pop);function Ns(o){if(o._a)return o._a;let u=null,f=0;for(let _ of o.rings||[]){let S=_[0];if(!S)continue;let w=0,P=0,D=0;for(let L=0,z=S.length;L<z;L+=2){let Y=S[L],p=S[L+1],T=S[(L+2)%z],N=S[(L+3)%z],V=Y*N-T*p;w+=V,P+=(Y+T)*V,D+=(p+N)*V}Math.abs(w)>f&&(f=Math.abs(w),u=[P/(3*w),D/(3*w)])}return o._a=u?[(u[0]-c)*l,(u[1]-h)*l]:[o.cx,o.cy]}let Qe=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,mn=[0,7.6,6.7,6,5.4],Zi=[0,17,15,13,12],an=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Ii(){let o=s.tilt<.06&&r.tilt<.08;Mn.classList.toggle("show",o);let u=0;if(Fe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(w=>w.offsetParent!==null||w.style.display==="block").map(w=>{let P=w.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(w=>w[2]>w[0]),_=r.dist,S=_>160?5e4:_>130?2e4:_>105?8e3:_>80?3e3:_>62?800:0;for(let w of Yi){let P=Qe(w.pop);if(w.pop<S)break;let D=Ns(w);if(yn.set(D[0],D[1],k).project(n),Math.abs(yn.x)>1.02||Math.abs(yn.y)>1.02)continue;let L=(yn.x*.5+.5)*innerWidth,z=(-yn.y*.5+.5)*innerHeight,Y=an(w.name),p=Y.length*mn[P]+8,T=Zi[P],N=[L-p/2,z-T/2,L+p/2,z+T/2];if(f.some(ht=>N[0]<ht[2]&&ht[0]<N[2]&&N[1]<ht[3]&&ht[1]<N[3]))continue;f.push(N);let V=kn[u]||(kn[u]=Object.assign(document.createElement("div"),{className:"mlab"}));V.isConnected||document.body.appendChild(V),V._n!==Y&&(V.textContent=Y,V._n=Y),V._t!==P&&(V.className="mlab t"+P,V._t=P),V.style.transform=`translate(${Math.round(L)}px,${Math.round(z)}px) translate(-50%,-50%)`,V.style.display="block",u++}}for(;u<kn.length;u++)kn[u].style.display="none"}let Ne={at:0,hoy:null,ayer:null,err:""},wl="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function El(){Date.now()-Ne.at<5*6e4||(Ne.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(wl+o+".json",{cache:"no-store"}).then(u=>u.ok?u.json():null).catch(()=>null))).then(([o,u,f])=>{Ne.hoy=o,Ne.ayer=u,Ne.hist=f,Ne.tr=null,Ne.err=o?"":__t(46),At&&(d._h="",ke()),De(!0)}))}function v0(o){let u={};for(let _ of o&&o.snaps||[])for(let S of _.r||[]){let w=/^\d+[A-Z](\d+)/.exec(S);w&&(u[w[1]]=u[w[1]]||[]).push(Math.max(0,_.d&&_.d[S]||0)/60)}let f={};for(let _ in u){let S=u[_].sort((w,P)=>w-P);f[_]=Math.round(S[S.length>>1])}return f}function bu(o){if(!Ne.tr){let f=new Map;for(let _ of Ne.hist&&Ne.hist.days||[])f.set(_.day,_.tr);for(let _ of[Ne.ayer,Ne.hoy])if(_&&_.day&&!f.has(_.day)){let S=v0(_);Object.keys(S).length&&f.set(_.day,S)}Ne.tr=f}let u=[...Ne.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return u.length?{n:u.length,late:u.filter(f=>f>=5).length,avg:u.reduce((f,_)=>f+_,0)/u.length}:null}let Us=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",ms={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Xf=o=>o>10?ms.b:o>5?ms.w:o>=1?ms.y:ms.g,ir=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Oa(o,u,f){return`<div class="sbars">${o.map(_=>`<div class="sbar" title="${g(_.tip||"")}"><span class="sl">${_.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(_.w*100))}%;background:${_.c}"></i></span><b class="sv" style="color:${_.c===ms.y?"var(--svy,#a16207)":_.c===ms.w?"var(--svw,#c2410c)":_.c}">${_.val}</b></div>`).join("")}</div>`}function y0(o){if(o=(o||[]).filter(tt=>tt.n>=10),!o||o.length<2){let tt=o&&o[0];return tt?`${__t(47)}${tt.t}: ${Math.round(tt.ok/tt.n*100)}${__t(48)}${tt.n}${__t(49)}`:__t(50)}let u=tt=>{let[ft,j]=tt.t.split(":").map(Number);return ft*60+j},f=u(o[0]),_=Math.max(f+60,u(o[o.length-1])),S=300,w=112,P=24,D=tt=>P+(tt-f)*(S-P-8)/(_-f),L=tt=>8+(100-tt)/100*(w-26),z=tt=>tt.n?tt.ok/tt.n*100:100,Y=o.map(tt=>[D(u(tt)),L(z(tt)),tt]),p=tt=>tt[0].toFixed(1)+","+tt[1].toFixed(1),T=[],N=[];Y.forEach((tt,ft)=>{ft&&u(tt[2])-u(Y[ft-1][2])>45&&(T.push(N),N=[]),N.push(tt)}),T.push(N);let V=Y[Y.length-1],ht=[];for(let tt=Math.ceil(f/180)*3;tt*60<_;tt+=3)tt*60>f+20&&ht.push(tt);let bt=Math.round(o.reduce((tt,ft)=>tt+ft.ok,0)/Math.max(1,o.reduce((tt,ft)=>tt+ft.n,0))*100);return`<svg class="schart" viewBox="0 0 ${S} ${w}${__t(51)}${[100,75,50,25].map(tt=>`<line x1="${P}" x2="${S-4}" y1="${L(tt)}" y2="${L(tt)}" class="gl"/><text x="2" y="${L(tt)+3}" class="ax">${tt}%</text>`).join("")}
      <line x1="${P}" x2="${S-4}" y1="${L(bt)}" y2="${L(bt)}" class="avg"/>
      ${T.filter(tt=>tt.length).map(tt=>`<polygon points="${p([tt[0][0],L(0)])} ${tt.map(p).join(" ")} ${p([tt[tt.length-1][0],L(0)])}" class="ar"/><polyline points="${tt.map(p).join(" ")}" class="ln"/>`).join("")}
      ${Y.map(([tt,ft,j])=>`<circle cx="${tt.toFixed(1)}" cy="${ft.toFixed(1)}" r="6" class="hit"><title>${j.t} \xB7 ${Math.round(z(j))}${__t(52)}${j.n}${__t(53)}${j.d5}${__t(54)}${ir(j.avg)}${j.nd?` \xB7 ${j.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${V[0].toFixed(1)}" cy="${V[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(V[0],S-30).toFixed(1)}" y="${(V[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(z(V[2]))}%</text>
      ${ht.map(tt=>`<text x="${D(tt*60).toFixed(1)}" y="${w-4}" class="ax" text-anchor="middle">${String(tt).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${w-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${bt}%)</small>`}function S0(){El();let o=se(),u=re.filter(D=>D.real&&b()&&o.live),f=u.filter(D=>$.delays.has(D.v.tid)),_=f.length,S=u.length-_,w=`${__t(57)}`;if(_){let D=f.filter(ft=>ft.dl<3).length,L=f.filter(ft=>ft.dl>=5).length,z=f.filter(ft=>ft.stop==="via").length,Y=Math.round(D/_*100);w+=`${__t(58)}${_}${__t(59)}${S?` \xB7 ${S}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Us(Y)}"><b>${Y}${__t(60)}${Us(100-L/_*100*2)}" title="${Math.round(L/_*100)}${__t(61)}${L}${__t(62)}${z===0?"g":z<=2?"w":"b"}"><b>${z}${__t(63)}`;let p=new Map;f.forEach(ft=>{let j=ft.fam,he=p.get(j)||{n:0,ok:0,sum:0};he.n++,he.ok+=ft.dl<3,he.sum+=Math.max(0,ft.dl),p.set(j,he)});let T=[...p].filter(([ft])=>W[ft]).sort((ft,j)=>ft[1].ok/ft[1].n-j[1].ok/j[1].n||j[1].sum/j[1].n-ft[1].sum/ft[1].n),N=T.filter(([,ft])=>ft.ok<ft.n),V=T.filter(([,ft])=>ft.ok===ft.n);w+=`${__t(65)}`+(N.length?"":__t(66))+Oa(N.map(([ft,j])=>({lab:Cn(ft),w:j.ok/j.n,c:ms[Us(j.ok/j.n*100)],val:`${Math.round(j.ok/j.n*100)}% <small>${ir(j.sum/j.n)}</small>`,tip:`${ft}: ${j.ok}${__t(67)}${j.n}${__t(68)}${ir(j.sum/j.n)}`})))+(V.length?`${__t(69)}${V.map(([ft])=>Cn(ft)).join(" ")}</p>`:"");let ht=new Map;f.forEach(ft=>{if(!ft.tr||ft.v.next==null||ft.v.next<0||ft.v.pre)return;let j=ft.tr.pat.stops[ft.v.next],he=ht.get(j)||{n:0,sum:0};he.n++,he.sum+=Math.max(0,ft.dl),ht.set(j,he)});let bt=[...ht].filter(([,ft])=>ft.sum/ft.n>=1).sort((ft,j)=>j[1].sum/j[1].n-ft[1].sum/ft[1].n).slice(0,8),tt=bt.length?bt[0][1].sum/bt[0][1].n:1;w+=`${__t(70)}`+(bt.length?Oa(bt.map(([ft,j])=>({lab:`<span class="sn" data-gs="${ft}">${g(E[ft].n)}</span>`,w:j.sum/j.n/tt,c:Xf(j.sum/j.n),val:`${ir(j.sum/j.n)} <small>${j.n} ${j.n===1?"tren":__t(71)}</small>`,tip:`${E[ft].n}: ${j.n}${__t(72)}${ir(j.sum/j.n)}${__t(73)}`}))):__t(74))}else w+=`${__t(75)}`;let P=Ne.hoy;w+=`<button type="button" class="hmore" data-cols>${dn.on?__t(76):__t(77)}</button>`;{Ya("");let D=[...Di.m].filter(([L,z])=>W[L]&&z[0]>=3).map(([L,z])=>[L,z[1]/z[0]]).sort((L,z)=>L[1]-z[1]);D.length&&!b()?w+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:D.length&&(w+=`${__t(80)}`+Oa(D.slice(0,8).map(([L,z])=>({lab:Cn(L),w:z,c:ms[Us(z*100)],val:`${Math.round(z*100)}%`,tip:`${L}: ${Math.round(z*100)}${__t(81)}`}))))}{let D=(N,V)=>{let ht=(N&&N.snaps||[]).filter(ft=>ft.n&&(!V||ft.t<=V)),bt=ht.reduce((ft,j)=>ft+j.n,0),tt=ht.reduce((ft,j)=>ft+j.ok,0);return bt?tt/bt*100:null},L=(Ne.hoy&&Ne.hoy.snaps||[]).filter(N=>N.n).map(N=>N.t).pop(),z=D(Ne.hoy),Y=D(Ne.ayer,L),p=z!=null?Math.round(z):null,T=Y!=null?Math.round(Y):null;z!=null&&(w+=`${__t(82)}${Us(z)}">${Math.round(z)}${__t(83)}${Y!=null?`<span>${L?__t(84):__t(85)} <b class="${Us(Y)}">${T} %</b></span><span>${p>T?__t(86):p<T?__t(87):__t(88)}</span>`:""}</div>`)}if(w+=`${__t(89)}`,P&&P.snaps){w+=y0(P.snaps);let D=Object.entries(P.st||{}).map(([Y,p])=>[Xt.get(Y),p]).filter(([Y,p])=>Y!=null&&p.n>=3).map(([Y,p])=>[Y,p.sum/p.n/60,p]).filter(Y=>Y[1]>=1).sort((Y,p)=>p[1]-Y[1]).slice(0,8);if(D.length){let Y=D[0][1];w+=`${__t(90)}`+Oa(D.map(([p,T,N])=>({lab:`<span class="sn" data-gs="${p}">${g(E[p].n)}</span>`,w:T/Y,c:Xf(T),val:`${ir(T)}${__t(91)}${Math.round(N.max/60)}</small>`,tip:`${E[p].n}: ${N.n}${__t(92)}${N.d5}${__t(93)}${Math.round(N.max/60)} min`})))}let L=Object.entries(P.lines||{}).filter(([Y,p])=>W[Y]&&p.n>=3).sort((Y,p)=>Y[1].ok/Y[1].n-p[1].ok/p[1].n);L.length&&(w+=`${__t(94)}`+Oa(L.map(([Y,p])=>({lab:Cn(Y),w:p.ok/p.n,c:ms[Us(p.ok/p.n*100)],val:`${Math.round(p.ok/p.n*100)}% <small>${ir(p.sum/p.n/60)}</small>`,tip:`${Y}${__t(95)}${Math.round(p.ok/p.n*100)}${__t(96)}${Math.round(p.max/60)} min`}))));let z=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;w+=`<small class="snote">${z>40?`${__t(98)}${hs(z<90?Math.round(z)+" min":z<2160?Math.round(z/60)+" h":Math.round(z/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${g((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else w+=`<p class="snote">${Ne.at?__t(102):__t(103)}</p>`;return w+"</div>"}function M0(o){let u=se(),f=re.filter(T=>(T.fam||T.tr&&T.tr.fam)===o),_=f.filter(T=>T.real),S=f.length,w=f.filter(T=>T.dl>=5).length,P=f.filter(T=>T.dl<3).length,D=f.filter(T=>T.stop==="via"||T.broke).length,L=$.alerts.filter(T=>T.fams.has(o)),z=T=>{let N=T.tr;if(!N)return"";let V=T.v;if(T.real&&V){let bt=V.next>=0?E[N.pat.stops[V.next]].n:"";return V.atStop>=0?`${__t(104)}${E[N.pat.stops[V.atStop]].n}`:bt?`${__t(105)}${bt}`:""}let ht=T.p;return ht&&ht.next!=null&&ht.next>=0?`${__t(105)}${E[N.pat.stops[ht.next]].n}`:""},Y=f.slice().sort((T,N)=>N.dl-T.dl).slice(0,40).map(T=>{let N=T.tr;return`<li class="go${$a({num:N?N.num:T.v.num,tid:N?N.tid:T.v.tid})?" sel":""}" data-gt="${g(N?N.num:T.v.num)}|${g(T.real?T.v.tid:N?N.tid:"")}"><b>${g(N?N.num:T.v.num)}</b><span>${N?Mi(E[N.pat.stops[N.pat.stops.length-1]].n,o):""} <small>${g(z(T))}</small></span>${T.dl>=1?`<em class="dl ${Pi(T.dl)}">+${Math.round(T.dl)}</em>`:__t(106)}</li>`}).join(""),p=Ya(o);return`<div class="tc sts" style="--c:${W[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Cn(o)}${__t(107)}${u.live?`${__t(113)}${S}${__t(114)}${_.length<S?` (${_.length}${__t(115)}`:""}`:`${__t(116)}${nt(u.min)}`}</small>
      <div class="kpis"><div class="kpi ${S?Us(P/S*100):""}"><b>${S?Math.round(P/S*100)+"%":"\u2014"}${__t(108)}${w?w/Math.max(1,S)>.2?"b":"w":"g"}"><b>${w}${__t(109)}${D?"b":"g"}"><b>${D}${__t(110)}${L.length?b0(L):__t(117)}${p<.7?`${__t(118)}${Math.round(p*100)}${__t(119)}`:""}${__t(111)}${Y||__t(120)}${__t(112)}`}let b0=o=>`<div class="al">${o.slice(0,3).map(u=>`<p>\u26A0\uFE0F ${Ha(u)} ${g(u.txt)} <small>${Ga(u)}</small></p>`).join("")}</div>`,dn={on:!1,mesh:null};function qf(){let o=Ne.hoy,u=[];if(o&&o.st)for(let[f,_]of Object.entries(o.st)){let S=Xt.get(f);S!=null&&_.n>=2&&u.push([S,_.sum/_.n/60,_.n])}if(!u.length){let f=new Map;re.forEach(_=>{if(!_.real||!_.tr||_.v.next==null||_.v.next<0||_.v.pre||!$.delays.has(_.v.tid))return;let S=_.tr.pat.stops[_.v.next],w=f.get(S)||[0,0];w[0]+=Math.max(0,_.dl),w[1]++,f.set(S,w)}),f.forEach((_,S)=>u.push([S,_[0]/_[1],_[1]]))}return u}let Yf=()=>Math.min(1,Math.max(.22,r.dist/110));function w0(){if(!dn.mesh||!dn.d)return;let o=Yf();if(Math.abs(o-dn.r)<.04)return;dn.r=o;let u=new He;dn.d.forEach(([f,_],S)=>{u.makeScale(o,o,.3+Math.min(_,40)*.3),u.setPosition(E[f].w[0],E[f].w[1],k),dn.mesh.setMatrixAt(S,u)}),dn.mesh.instanceMatrix.needsUpdate=!0,a()}function E0(){if(dn.mesh&&(e.remove(dn.mesh),dn.mesh.geometry.dispose(),dn.mesh.material.dispose(),dn.mesh=null),!dn.on){a();return}let o=qf();if(!o.length){hn(__t(121)),dn.on=!1;return}let u=new Do(.32,.32,1,16);u.rotateX(Math.PI/2),u.translate(0,0,.5);let f=new yr({fog:!1}),_=new Ro(u,f,o.length),S=new He,w=new ve;dn.d=o,dn.r=Yf(),o.forEach(([P,D],L)=>{let z=.3+Math.min(D,40)*.3;S.makeScale(dn.r,dn.r,z),S.setPosition(E[P].w[0],E[P].w[1],k),_.setMatrixAt(L,S),w.set(D>10?"#dc2626":D>5?"#ea7a0c":D>=1?"#eab308":"#16a34a"),_.setColorAt(L,w)}),_.renderOrder=25,_.frustumCulled=!1,e.add(_),dn.mesh=_,s.tilt<.5&&(s.tilt=.85),a()}let Or=document.createElement("button");Or.type="button",Or.id="sbtn",Or.title=__t(122),Or.innerHTML=__t(123),Or.onclick=()=>{At=!At,At&&(Lt=xe=!1,Ne.at=0),d._h="",ke(),a()},document.body.appendChild(Or);function T0(){r.dist<45!=An<45&&(An=r.dist,Bn()),w0(),A0(),Ii()}let gs=[],yn=new q;function A0(){let o=0;if(dn.on){let f=qf().sort((S,w)=>w[1]-S[1]),_=[];for(let[S,w]of f){if(o>=30)break;if(yn.set(E[S].w[0],E[S].w[1],k).project(n),yn.z>1||Math.abs(yn.x)>1||Math.abs(yn.y)>1)continue;let P=(yn.x*.5+.5)*innerWidth,D=(-yn.y*.5+.5)*innerHeight;if(_.some(([z,Y])=>Math.abs(z-P)<90&&Math.abs(Y-D)<18))continue;_.push([P,D]);let L=gs[o]||(gs[o]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=E[S].n+" +"+Math.round(w)+"\u2032",L.dataset.i=S,L.style.display="block",L.style.transform=`translate(${Math.round(P+8)}px,${Math.round(D-8)}px)`,o++}for(;o<gs.length;o++)gs[o].style.display="none";return}if(r.dist<30){let f=[];for(let _=0;_<te;_++)On[_]<4||(yn.set(E[_].w[0],E[_].w[1],k).project(n),!(yn.z>1||Math.abs(yn.x)>1.05||Math.abs(yn.y)>1.05)&&f.push([_,(yn.x*.5+.5)*innerWidth,(-yn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[_,S,w]of f){let P=gs[o]||(gs[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=E[_].n,P.dataset.i=_,P.style.display="block",P.style.transform=`translate(${Math.round(S+8)}px,${Math.round(w-7)}px)`,o++}}for(;o<gs.length;o++)gs[o].style.display="none"}function Tl(o){return yn.set(o[0],o[1],k).project(n),[(yn.x*.5+.5)*innerWidth,(-yn.y*.5+.5)*innerHeight,yn.z]}function Zf(o,u,f,_){let S=null,w=f*f;for(let P of re){let[D,L,z]=Tl(P.p.w);if(z>1)continue;let Y=(D-o)**2+(L-u)**2;Y<w&&(w=Y,S={a:P})}if(S)return S;w=_*_;for(let P=0;P<te;P++){if(!On[P])continue;let[D,L,z]=Tl(E[P].w);if(z>1)continue;let Y=(D-o)**2+(L-u)**2;Y<w&&(w=Y,S={s:P})}return S}let sr=!1;window.__rodHide=()=>{sr=!0},document.addEventListener("click",o=>{sr&&!o.target.closest("#mcs, canvas")&&(sr=!1)},!0),window.__rodTap=(o,u)=>{let f=null,_=1e9;for(let w of gs){if(w.style.display==="none")continue;let P=w.getBoundingClientRect();if(o>=P.left-4&&o<=P.right+4&&u>=P.top-4&&u<=P.bottom+4){let D=Math.abs(u-(P.top+P.bottom)/2)*4+(o-P.left);D<_&&(_=D,f=w)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let S=Zf(o,u,24,18);return S&&(S.a||S.s!=null)&&(sr=!1),S&&(S.a||S.s!=null)&&(ee.st=-1),S&&S.a?(Lt=!1,xe=!1,At=!1,wt=S.a.tr||{vtid:S.a.v.tid},ge=-1,Ft=null,Bn(),ke(),Me=0,a(),!0):S&&S.s!=null?(Lt=!1,xe=!1,At=!1,ge=S.s,wt=null,Ft=null,Bn(),ke(),a(),!0):!1},window.__rodHover=(o,u)=>{let f=Zf(o,u,14,10);if(f&&f.a){let _=f.a,S=_.tr?E[_.tr.pat.stops[_.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${_.c}">\u25A0</span> ${g(_.fam||_.tr&&_.tr.fam||"?")}${__t(124)}${g(_.tr?_.tr.num:_.v.num)}</b><small>${S?__t(105)+g(S):""}${_.real?(_.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(_.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${g(E[f.s].n)}</b><small>${[...E[f.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ee.st=-1,sr=!1,Lt=xe=At=!1,wt=null,Ft=null,ge=o,Bn(),d._h="",ke(),a()};{let o=x("#rc"),u=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(u).observe(o)}catch{}addEventListener("resize",u),setTimeout(u,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,u=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!u||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(_=>_.text()).then(_=>{let S=(_.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];S&&f&&S!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{El()}catch{}},2500),setInterval(()=>{try{Ne.at=0,El()}catch{}},15*6e4);let ri={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Ba=matchMedia("(prefers-color-scheme: dark)");function Al(){let o=ri.mode==="dark"||ri.mode==="auto"&&Ba.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<te;f++)We.set(o?[.06,.08,.11]:[1,1,1],f*3);ne.attributes.fill.needsUpdate=!0,vl.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),rr.textContent=ri.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ri.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",rr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ri.mode];let u=document.querySelector("meta[name=theme-color]");u&&(u.content=o?"#0d1119":"#eef1f5"),a()}let rr=document.createElement("button");rr.type="button",rr.id="tbtn",rr.onclick=()=>{ri.mode=ri.mode==="auto"?Ba.matches?"light":"dark":ri.mode==="dark"?"light":"dark",ri.mode==="dark"===Ba.matches&&(ri.mode="auto");try{localStorage.setItem("rod_theme",ri.mode)}catch{}Al(),hn(rr.title)},document.body.appendChild(rr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Ba.addEventListener&&Ba.addEventListener("change",Al),Al(),window.__rodTick=Kt,window.__rodFrame=T0,window.__rodResize=()=>{qt.resolution.set(innerWidth,innerHeight),zt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Si={st:-1,f:new Set},Jf=o=>{let u=[...E[o].fams].sort(F);return`<div class="sfc">${u.length>1?`<button type="button" data-sf="" class="${Si.f.size?"":"on"}${__t(133)}`:""}${u.map(f=>`<button type="button" data-sf="${g(f)}" class="ln ${Si.f.size&&!Si.f.has(f)?"off":""}${ct.has(f)?"":" hid"}" style="--c:${W[f]}">${g(f)}</button>`).join("")}</div>${u.some(f=>!ct.has(f))?__t(134):""}`},C0=o=>{let u=(o||"#6b7385").replace("#",""),f=parseInt(u.slice(0,2),16),_=parseInt(u.slice(2,4),16),S=parseInt(u.slice(4,6),16);return(.299*f+.587*_+.114*S)/255>.62?"#1d2330":"#fff"},Mi=(o,u)=>{let f=W[u]||"#6b7385";return`<span class="dst" style="background:${f};color:${C0(f)}" title="${g(u||"")}">${g(o)}</span>`},Cl=o=>{let u=E[o]&&E[o].id;return tn.st.includes(u)?"\u{1F3E0} ":Ye.st.includes(u)?"\u{1F4BC} ":""},Pi=o=>o>10?"d-hi":o>5?"d-md":"d-lo",R0=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ka={ref:null,m:new Map};function wu(o){if(ka.ref!==$.alerts){ka.ref=$.alerts,ka.m=new Map;for(let u of $.alerts){if(u.src!=="Rodalies")continue;let f=u.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let _ of(u.es||u.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ka.m.set(_[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:u.txt,when:u.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(u.es||u.txt)})}}return ka.m.get(String(o))||null}let za={ref:null,m:new Map};function jf(o){let u=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!u)return null;if(za.ref!==$.alerts){za.ref=$.alerts,za.m=new Map;for(let _ of $.alerts)if(_.src==="Rodalies"&&R0.test(_.es||_.txt))for(let S of(_.es||_.txt).matchAll(/\b(\d{4,6})\b/g))za.m.set(S[1],_)}let f=za.m.get(u);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let $a=o=>{try{let u=wt;return u?u.num!=null&&String(u.num)===String(o.num)||o.tid&&(u.tid===o.tid||u.vtid===o.tid):!1}catch{return!1}},Kf=(o,u)=>{let f=A(o,u.min-1,u.min+240).sort((_,S)=>_.est-S.est).slice(0,6);return f.length?`${__t(135)}${f.map(_=>`<li><b>${nt(_.est)}</b>${Cn(_.fam)}<span>${Mi(_.dest,_.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Li=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),I0=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Li))}catch{}},Qf=o=>!!o&&Li.some(u=>u.num===String(o.num)),Re=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),_s=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Re))}catch{}},Rl=(o,u)=>!!(Re&&o&&Re.num===String(o.num)&&Re.sid===E[o.pat.stops[u]].id);function Il(o,u){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}hn(o+" \xB7 "+u),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:u,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:u})).catch(()=>{})}function P0(){if(!Re||Re.done)return;let o=se();if(!o.live)return;let u=t.days.indexOf(o.ymd),f=(Q[u]||[]).find(L=>String(L.num)===Re.num)||(Q[u-1]||[]).find(L=>String(L.num)===Re.num);if(!f)return;let _=f.pat.stops.findIndex(L=>E[L].id===Re.sid);if(_<0)return;let S=pt(f),w=typeof S=="number"?Math.max(0,S/60):0,P=f.day===u-1?1440:0,D=f.t0+f.pat.t[2*_]+w-P;if(D-o.min<-3){Re.done=!0,_s();return}if(window.__schedAt&&D-2-o.min>.1&&(Re.sch==null||Math.abs(Re.sch-D)>=.5)&&(Re.sch=D,Re.nat=Date.now()+(D-2-o.min)*6e4,_s(),window.__schedAt(7701,`${__t(136)}${E[f.pat.stops[_]].n}`,__t(137)+` (${nt(D)})`+(L=>L?` \xB7 ${__t(138)} ${L.fam} ${__t(139)} ${nt(L.est)}${L.plat?__t(140)+L.plat:""}`:"")(Ol.get(Re.sid)),Date.now()+(D-2-o.min)*6e4)),D-o.min<=2){Re.done=!0,_s();let L=Ol.get(Re.sid),z=L?` \xB7 ${L.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${L.fam} ${__t(139)} ${nt(L.est)}${L.plat?__t(140)+L.plat:""}`:"",Y=Math.round(D-o.min),T=(Y>=1?`${__t(144)} ${Y}${__t(143)}${nt(D)}) \xB7 ${__t(145)}`:`${__t(146)} (${nt(D)}) \xB7 ${__t(145)}`)+z;window.__schedAt&&Re.nat&&Date.now()>=Re.nat-2e4?document.hidden||Il(`${__t(136)}${E[f.pat.stops[_]].n}`,T):(window.__schedOff&&window.__schedOff(7701),Il(`${__t(136)}${E[f.pat.stops[_]].n}`,T))}}function Eu(o,u){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),_=Q[u]||[],S=(D,L)=>D.t0+D.pat.t[2*L+1],w=null,P=11;for(let D of _){let L=D.pat.stops.findIndex(Y=>E[Y].id===o.sid);if(L<0||L===D.pat.stops.length-1)continue;let z=Math.abs(S(D,L)-f)+(String(D.num)===o.num?-5:0)+(D.fam===o.fam?0:20)+(o.dest&&E[D.pat.stops[D.pat.stops.length-1]].id!==o.dest?3:0);z<P&&(P=z,w=D)}return w}let Pl=new Set;function L0(){if(!Li.length)return;let o=se();if(!o.live)return;let u=t.days.indexOf(o.ymd);for(let f of Li){let _=Eu(f,u);if(!_)continue;let S=_.pat.stops.findIndex(Y=>E[Y].id===f.sid);if(S<0)continue;let w=_.t0+_.pat.t[2*S+1],P=pt(_),D=typeof P=="number"?P/60:0,L=w-o.min;if(L<-2||L>60)continue;let z=o.ymd+f.num+(P==="X"?"X":D>=10?10:D>=5?5:0);Pl.has(z)||(P==="X"||D>=5?(Pl.add(z),Il(`${__t(147)}${nt(w)} ${P==="X"?__t(148):`${__t(149)}${Math.round(D)} min`}`,`${_.fam} ${_.num}${__t(150)}${E[_.pat.stops[S]].n}${P==="X"?"":`${__t(151)}${nt(w+D)}`}`)):L<=20&&!Pl.has(o.ymd+f.num+"ok")&&$.vp.has(_.tid)&&(Pl.add(o.ymd+f.num+"ok"),hn(`${__t(147)}${nt(w)}${__t(152)}`)))}}setInterval(()=>{try{P0(),L0()}catch{}},15e3);let Cn=o=>`<span class="ln" style="--c:${W[o]}">${g(o)}</span>`;{let o=f=>{let _=/^#?([0-9a-f]{6})$/i.exec(f||"");return _?[0,2,4].map(S=>{let w=parseInt(_[1].slice(S,S+2),16)/255;return w<=.03928?w/12.92:Math.pow((w+.055)/1.055,2.4)}).reduce((S,w,P)=>S+w*[.2126,.7152,.0722][P],0):0},u=[...new Set(Object.values(W))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(u){let f=document.createElement("style");f.textContent=u,document.head.appendChild(f)}}function tp(o,u){return u?o==="X"?__t(154):o>=60?`<span class="st late ${Pi(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function Tu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let u=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,_=u?u.getBoundingClientRect().bottom-f+3:150;if(u){let S=u.nextElementSibling||u.parentElement!==o&&u.parentElement.nextElementSibling;S&&(_=Math.min(_,S.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,_)))+"px")}function xs(){try{let o=d,u=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!Ze.on||Ze.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!u||!u.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(p=>o.style.removeProperty(p)),o._fit=0);return}let S=o.getBoundingClientRect().top,w=u.getBoundingClientRect().top-8,P=Math.max(140,Math.floor(w-S)),D=f&&f.getClientRects().length?f.getBoundingClientRect():null,L=D?Math.max(10,Math.ceil(innerWidth-D.left+8)):10;o._fit=P+"|"+L;let z=o.style,Y={"max-height":P+"px",height:"auto",bottom:"auto",width:"auto",right:L+"px"};for(let p in Y)(z.getPropertyValue(p)!==Y[p]||z.getPropertyPriority(p)!=="important")&&z.setProperty(p,Y[p],"important")}catch{}}setInterval(()=>{Ze.on&&Ze.cur==="map"&&xs()},700);try{new MutationObserver(()=>xs()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=xs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let u=_=>{let S=document.querySelector(_);if(!S||!S.getClientRects().length)return"\u2014";let w=S.getBoundingClientRect();return[w.left,w.top,w.right,w.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Ze.on?Ze.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${u("#mcs")}
tc ${u("#mcs .tc")}
rc ${u("#rcgrab")} z ${u("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(u){o.textContent="err "+u.message}},1e3)}addEventListener("resize",()=>setTimeout(xs,80));try{new ResizeObserver(()=>xs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(xs,80));function ke(){try{D0()}finally{requestAnimationFrame(xs),window.__rodTabSync&&window.__rodTabSync();try{Tu()}catch{}}}function D0(){if(!wt&&ge<0&&!xe&&!Lt&&!At&&!Yt){sr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Fu();return}let o=se(),u="",f=b()&&o.live,_=(p,T)=>$.alerts.filter(N=>[...N.fams].some(V=>p.has(V))||T!=null&&N.stops.has(T)),S=p=>p.length?`<div class="al">${p.slice(0,4).map(T=>`<p>\u26A0\uFE0F ${Ha(T)} ${[...T.fams].sort(F).slice(0,6).map(Cn).join(" ")} ${g(T.txt)} <small>${Ga(T)}</small></p>`).join("")}${p.length>4?`<small>y ${p.length-4}${__t(157)}`:""}</div>`:"",w=wt&&f?re.find(p=>p.real&&(wt.vtid?p.v.tid===wt.vtid:p.tr===wt)):null;if(Yt&&!At&&!Lt&&!xe&&!wt&&ge<0)u=M0(Yt);else if(At)u=S0();else if(Lt)u=`${__t(158)}${g(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(xe){let p=$.alerts.filter(T=>[...T.fams].some(N=>ct.has(N))||!T.fams.size);u=`${__t(161)}${p.length}${__t(162)}${p.map(T=>`<div class="al"><p>${Ha(T)} ${[...T.fams].sort(F).map(Cn).join(" ")} <small>${Ga(T)}</small></p><p>${g(T.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${$.alertsTs&&Date.now()/1e3-$.alertsTs<6*3600?__t(165):`${__t(166)}${$.alertsTs?new Date($.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(w){let p=w.v,T=w.tr,N=Ae=>g(E[T.pat.stops[Ae]].n),V=T?T.pat.stops.length:0,ht=Xt.get(p.sid),bt=ht!=null?g(E[ht].n):g(p.sid),tt=T&&p.atStop>=0?N(p.atStop):"",ft=T&&p.next>=0?N(p.next):bt,j=T&&p.next>0?N(p.next-1):"",he=w.broke||jf(w),ye=he?`<b class="stopv">\u26A0\uFE0F ${he.why==="aviso"?__t(167):`${__t(168)}${he.min} min`}</b>${T&&j?`${__t(169)}${j}${__t(170)}${ft}</b>`:""}`:w.stop==="via"&&T?`${__t(171)}${j?`${__t(173)}${j}${__t(170)}${ft}</b>`:`${__t(174)}${ft}</b>`}${__t(172)}${Math.max(1,Math.round(p.still/60))} min`:p.pre&&T?p.prevTr?`${__t(175)}${g(p.prevTr.num)}${__t(176)}${N(0)}</b>${p.prevDl>=1?`${__t(179)}${Math.round(p.prevDl)} min</b>`:""}${__t(177)}${nt(p.arrO)}${__t(178)}${nt(p.depEst)}</b>${p.preDl>=1?`${__t(180)}${nt(p.dep0)})`:""}`:`${__t(181)}${N(0)}${__t(182)}${nt(p.dep0+w.dl)}</b>`:tt&&p.before?`Llegando a <b>${tt}</b>`:(p.st==="STOPPED_AT"||w.stop==="st")&&tt?`${__t(183)}${tt}</b>`:tt&&p.next>=0&&p.atStop!==p.next?`${__t(184)}${tt}${__t(176)}${ft}</b>`:j?`${__t(185)}${j}${__t(170)}${ft}</b>`:`${__t(186)}${ft}</b>`,Vt=T&&p.next>=0&&!p.pre?nt(Za(T,p,p.next,T.t0+T.pat.t[2*p.next]+w.dl)):"",Xe=[];if(T){let Ae=w.idx>=0?w.idx:0,pe=p.pre?Math.max(w.dl,p.preDl||0):w.dl,fn=Oe=>T.t0+T.pat.t[Oe]+pe;for(let Oe=Ae;Oe<V;Oe++)Xe.push(`<li class="${Cl(T.pat.stops[Oe])?"mine":""}${Rl(T,Oe)?" alm":""}"><b>${nt(Za(T,p,Oe,fn(Oe===0?1:2*Oe)))}</b><span title="${N(Oe)}">${Cl(T.pat.stops[Oe])}${N(Oe)}</span>${pe>=1?`<em class="dl ${Pi(pe)}">${p.pre?"\u2248":""}+${Math.round(pe)}</em>`:""}${Oe>0?`<button type="button" class="abtn" data-alarm="${Oe}" title="${__t(187)}">${Rl(T,Oe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}u=`<div class="tc" style="--c:${w.c}"><button class="x" data-cx>\xD7</button><div>${Cn(w.fam)}${__t(188)}${g(T?T.num:p.num)}${__t(189)}${T?`<h3 class="rt"><span class="o" title="${N(0)}">${N(0)}</span><span class="ar">\u2192</span>${Mi(E[T.pat.stops[V-1]].n,T.fam)}</h3>`:""}
        <p>${ye}${Vt?`${__t(190)}${Vt}`:""}${p.plat&&p.st==="STOPPED_AT"&&tt?`${__t(191)}${g(p.plat)}</b>`:""}</p><p>${p.pre&&p.prevTr?p.preDl>=1?`${__t(192)}${Math.round(p.preDl)}${__t(193)}`:__t(194):tp($.delays.get(p.tid),$.delays.has(p.tid))}${(()=>{let Ae=T&&bu(T.num);return Ae&&Ae.n>=2?`${__t(195)}${Ae.n}${__t(196)}${Ae.late?`${__t(197)} <b>${Ae.late} ${__t(198)} ${Ae.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ae.avg<.5?"0":"+"+Math.round(Ae.avg)} min</span>`:""})()}${(()=>{let Ae=T&&wu(T.num);return Ae?`<span class="why" title="${g(Ae.txt)}">${Ae.why?__t(203)+g(Ae.why):__t(204)}</span>`:""})()}</p>
        <small>${p.pre?`${__t(205)}${hs(lu(w.age))}`:p.est?__t(206):`${__t(207)}${hs(lu(w.age))}${w.age>120?__t(208):""}`}</small>
        ${Xe.length?`${w.dl>=1||p.pre&&p.preDl>=1?`${__t(209)}`:""}<ol class="stops">${Xe.join("")}</ol>`:""}${S(_(new Set([w.fam])))}
        ${Nl(T?T.num:p.num,"",w.fam)}${T?`<div class="rtb two"><button type="button" data-fav>${Qf(T)?__t(210):__t(211)}</button><button type="button" data-follow>${Fl(T)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(wt&&f&&!wt.pat)u=`${__t(214)}${g(wt.num||wt.vtid||"")}${__t(215)}`;else if(wt){let p=wt,T=p.pat,N=T.stops.length,V=pt(p),ht=typeof V=="number"?V/60:0,bt=t.days.indexOf(o.ymd),tt=p.day===bt-1?1440:0,ft=o.min+tt-p.t0-ht,j=Ds(p,ft),he=pe=>p.t0+T.t[pe]+ht,ye=pe=>g(E[T.stops[pe]].n),Vt=__t(216);j&&(Vt=j.moving?`${__t(217)}${ye(j.next)}${__t(218)}${nt(he(2*j.next))}`:j.at===N-1?`${__t(219)}${ye(N-1)}</b>`:`${__t(183)}${ye(j.at)}${__t(220)}${nt(he(2*j.at+1))}`);let Xe=j?j.next:0,Ae=[];for(let pe=Xe;pe<N;pe++)Ae.push(`<li class="${Cl(T.stops[pe])?"mine":""}${Rl(p,pe)?" alm":""}"><b>${nt(Za(p,null,pe,he(2*pe)))}</b><span title="${ye(pe)}">${Cl(T.stops[pe])}${ye(pe)}</span>${ht>=1?`<em class="dl ${Pi(ht)}">+${Math.round(ht)}</em>`:""}${pe>0?`<button type="button" class="abtn" data-alarm="${pe}" title="${__t(187)}">${Rl(p,pe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);u=`<div class="tc" style="--c:${p.c}"><button class="x" data-cx>\xD7</button><div>${Cn(p.fam)}${__t(188)}${g(p.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${ye(0)}">${ye(0)}</span><span class="ar">\u2192</span>${Mi(E[p.pat.stops[N-1]].n,p.fam)}</h3>
        <p>${Vt}</p><p>${tp(V,V!=null)}${(()=>{let pe=bu(p.num);return pe&&pe.n>=2?`${__t(195)}${pe.n}${__t(196)}${pe.late?`${__t(197)} <b>${pe.late} ${__t(198)} ${pe.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${pe.avg<.5?"0":"+"+Math.round(pe.avg)} min</span>`:""})()}${__t(221)}${nt(p.t0+T.t[1])}${__t(222)}${nt(p.t0+T.t[2*N-2])}${__t(223)}${ht>=1?__t(209):""}<ol class="stops">${Ae.join("")}</ol>${Nl(p.num,"",p.fam)}<div class="rtb two"><button type="button" data-fav>${Qf(p)?__t(210):__t(211)}</button><button type="button" data-follow>${Fl(p)?__t(212):__t(213)}</button></div></div>`}else{let p=ge,T=t.days.indexOf(o.ymd),N=[];Si.st!==p&&(Si.st=p,Si.f.clear());let V=j=>(!W[j]||ct.has(j))&&(!Si.f.size||Si.f.has(j));if(T>=0){let j=(he,ye)=>{for(let Vt of he){if(!V(Vt.fam))continue;let Xe=Vt.pat.stops.indexOf(p);if(Xe<0||Xe===Vt.pat.stops.length-1)continue;let Ae=pt(Vt),pe=typeof Ae=="number"?Ae/60:0,fn=Vt.t0+Vt.pat.t[2*Xe+1]-ye;fn+pe<o.min-1||fn>o.min+360||N.push({tr:Vt,t:fn,dl:pe,d:Ae,on:$.vp.has(Vt.tid),past:o.min>Vt.t0+Vt.pat.t[1]-ye+2})}};j(Q[T],0),T>0&&j(Q[T-1],1440)}N.sort((j,he)=>j.t+j.dl-he.t-he.dl);let ht=E[p].id,bt=Ut.get(ht),tt=(f||U()&&o.live)&&$.url;tt&&(!bt||Date.now()-bt.at>sp())&&!bt?.loading&&(Ut.set(ht,{...bt||{},loading:!0,at:bt?bt.at:0}),Rt(le(),"/departures.json?stationId="+ht).then(j=>{Ut.set(ht,{at:Date.now(),d:j}),ge===p&&(d._h="",ke())}).catch(()=>Ut.set(ht,{at:Date.now(),err:1})));let ft=tt&&bt&&bt.d&&Array.isArray(bt.d.trains)&&bt.d.trains.length?bt.d.trains:null;if(ft){let j=new Map([...$.vp.values()].map(Vt=>[String((dt.get(Vt.tid)||{}).num||Vt.num),Vt])),he=new Map(ai(p).map(Vt=>[String(Vt.num),Vt])),ye=ft.filter(Vt=>V((Vt.line||{}).id||"")).slice(0,40).map(Vt=>{let Xe=String(Vt.commercialNumber||Vt.technicalNumber||""),Ae=he.get(Xe),pe=Ae?nt(Ae.est):(Vt.departureDateHourSelectedStation||"").slice(11,16),fn=(Vt.line||{}).id||"",Oe=j.get(Xe),pi=Ae?Math.round(Ae.dl)*60:Oe?$.delays.get(Oe.tid):null,Gl=Ae&&(Ae.gone||!Ae.live&&Ae.est<o.min-1);return`<li class="go${Gl?" old":""}${$a({num:Xe,tid:Oe?Oe.tid:""})?" sel":""}" data-gt="${g(Xe)}|${Oe?g(Oe.tid):""}"><b>${g(pe)}</b>${W[fn]?Cn(fn):`<span class="ln" style="--c:#6b7385">${g(fn||"?")}</span>`}<span>${Mi((Vt.destinationStation||{}).name||"",fn)}${Vt.trainObservations?` \xB7 <i>${g(Vt.trainObservations)}</i>`:""}${Gl?` <small class="oldt">${Ae.gone?__t(225):__t(226)}</small>`:""}</span>${Vt.trainCancelled?__t(227):typeof pi=="number"&&pi>=60?`<em class="dl ${Pi(pi/60)}">+${Math.round(pi/60)}</em>`:""}${Vt.platformSelectedStation?`${__t(228)}${g(Vt.platformSelectedStation)}</i>`:""}${Oe?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(E[p].n)}</h3>${Jf(p)}${Nl("",E[p].id,"")}${__t(229)}${ye||__t(231)}</ol>${Kf(p,o)}${S(_(E[p].fams,p))}${__t(230)}`}else u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(E[p].n)}</h3>${Jf(p)}${Nl("",E[p].id,"")}
        <small style="margin-top:6px">${f&&$.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${N.slice(0,40).map(j=>`<li class="go${$a({num:j.tr.num,tid:j.tr.tid})?" sel":""}" data-gt="${g(j.tr.num)}|${g(j.tr.tid)}"><b>${nt(j.t+j.dl)}</b>${Cn(j.tr.fam)}<span>${Mi(E[j.tr.pat.stops[j.tr.pat.stops.length-1]].n,j.tr.fam)}</span>${j.d==="X"?__t(227):j.dl>=1?`<em class="dl ${Pi(j.dl)}">+${Math.round(j.dl)}</em>`:""}${f?j.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':j.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${Kf(p,o)}${S(_(E[p].fams,p))}${__t(230)}`}let P=d.scrollTop;if(d._h!==u&&!(d._touch>Date.now())&&(d.innerHTML=u,d._h=u,d.scrollTop=P),d.style.display="flex",d.classList.toggle("min",sr),Fu(),innerWidth<=640){let p=d.querySelector(".tc");if(p&&!p.querySelector(".mn")){let T=document.createElement("button");T.type="button",T.className="mn",T.setAttribute("aria-label",__t(238)),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",T.onclick=V=>{V.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(xs),Tu(),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let N=p.querySelector(".x");p.insertBefore(T,N?N.nextSibling:p.firstChild)}}else d.classList.remove("peek");let D=x("#rc");if(innerWidth<=640&&!D.classList.contains("min")&&!ke.done&&(ke.done=1,x("#rcgrab").click()),innerWidth<=640){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-p-16)+"px"}else if(innerHeight<=500){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-p-20+"px"}else d.style.top="",d.style.width=At?"390px":"300px",d.style.maxHeight="";xs();let z=d.querySelector("[data-cx]");z&&(z.onclick=p=>{if(p.stopPropagation(),ke.done=0,At||Lt||xe||Yt&&!wt&&ge<0){At=Lt=xe=!1,wt||ge>=0||(Yt=""),d._h="",ke(),a();return}if(wt&&ee.st>=0){let T=ee.st;ee.st=-1,wt=null,Ft=null,ge=T,Bn(),d._h="",ke(),Me=0,a();return}if(wt&&Fl(wt)){let T=wt,N=[...zn],V=Re?{...Re}:null,ht=d.querySelector("[data-follow]");ht&&ht.click(),setTimeout(()=>hn(`${__t(239)} \xB7 ${T.fam||""} ${T.num}`,{label:__t(240),fn:()=>{N.forEach(([bt,tt])=>Fs(bt,tt)),V&&!Re&&(Re=V,_s()),hr("map"),to({num:String(T.num),tid:T.tid&&$.vp.has(T.tid)?T.tid:"",tr:T}),Ft=wt,d._h="",ke(),De(!0),a()}}),0)}ee.st=-1,xe=!1,Lt=!1,At=!1,wt=null,ge=-1,Ft=null,Bn(),ke(),Me=0,a()}),ip(d),d.querySelectorAll("[data-alarm]").forEach(p=>p.onclick=T=>{T.stopPropagation();let N=wt&&wt.pat?wt:dt.get(wt&&wt.vtid)||null;if(!N)return;let V=+p.dataset.alarm,ht=E[N.pat.stops[V]].id;Re&&Re.num===String(N.num)&&Re.sid===ht?(Re=null,window.__schedOff&&window.__schedOff(7701),hn(__t(241))):(Re={num:String(N.num),sid:ht,at:Date.now()},hn(`${__t(242)}${E[N.pat.stops[V]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),_s(),d._h="",ke()});{let p=d.querySelector("[data-fav]");p&&(p.onclick=T=>{T.stopPropagation();let N=wt&&wt.pat?wt:dt.get(wt&&wt.vtid)||null;if(!N)return;let V=Li.findIndex(ht=>ht.num===String(N.num));if(V>=0)Li.splice(V,1),hn(__t(243));else{let ht=[...tn.st,...Ye.st,...Dt.st],bt=N.pat.stops.find(tt=>ht.includes(E[tt].id))??N.pat.stops[0];Li.push({num:String(N.num),fam:N.fam,sid:E[bt].id,dest:E[N.pat.stops[N.pat.stops.length-1]].id,t:nt(N.t0+N.pat.t[2*N.pat.stops.indexOf(bt)+1])}),hn(`${__t(244)}${N.fam}${__t(245)}${Li[Li.length-1].t}${__t(150)}${E[bt].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}I0(),d._h="",ke(),De(!0)})}{let p=d.querySelector("[data-share]");p&&(p.onclick=()=>{let T=Yt,N=re.filter(tt=>(tt.fam||tt.tr&&tt.tr.fam)===T),V=N.filter(tt=>tt.dl>=5).sort((tt,ft)=>ft.dl-tt.dl),ht=$.alerts.filter(tt=>tt.fams.has(T)),bt=`${T}${__t(247)}${nt(se().min)}: ${N.length}${__t(248)}${V.length}${__t(249)}${V.length?" ("+V.slice(0,4).map(tt=>`${tt.tr?tt.tr.num:tt.v.num} +${Math.round(tt.dl)}`).join(", ")+")":""}.${ht.length?__t(250)+ht[0].txt:__t(251)}`;navigator.share?navigator.share({text:bt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(bt),hn(__t(252)+bt.slice(0,60)+"\u2026"))})}{let p=d.querySelector("[data-cols]");p&&(p.onclick=()=>{dn.on=!dn.on,E0(),d._h="",ke()})}d.querySelectorAll("[data-gs]").forEach(p=>p.onclick=()=>{let T=+p.dataset.gs;At=!1,window.__rodPickStation(T),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(p=>p.onclick=T=>{T.stopPropagation();let N=p.dataset.sf;N?Si.f.has(N)?Si.f.delete(N):Si.f.add(N):Si.f.clear(),d._h="",ke()}),d.querySelectorAll("[data-gt]").forEach(p=>p.onclick=()=>{ee.st=ge;let[T,N]=p.dataset.gt.split("|"),V=dt.get(N);to({num:T,tid:$.vp.has(N)?N:"",tr:V||null})}),d.querySelectorAll("[data-sethome]").forEach(p=>p.onclick=()=>ku(ge,p.dataset.sethome));let Y=d.querySelector("[data-follow]");Y&&(Y.onclick=()=>{let p=Fl(wt);if(Ft=p?null:wt,!p&&wt&&wt.num!=null){let T=wt.pat.stops,N=String(wt.num),V=null,ht=1e9;for(let bt of[Dt,tn,Ye]){let tt=li(bt);if(tt==null||!T.includes(tt)||bt===Dt&&!Dt.st.length)continue;let ft=ai(tt).find(j=>String(j.num)===N&&!j.gone);ft&&ft.est<ht&&(ht=ft.est,V=bt)}V&&Fs(V.key,N),De(!0)}if(p&&wt&&wt.num!=null){let T=String(wt.num);[...zn].forEach(([N,V])=>{String(V)===T&&Fs(N,null)}),oi.num===T&&(oi.num=""),Zt.tid===T&&(Zt.tid="",Zt.manual=0,Zt.quiet=Date.now()+10*6e4),Re&&Re.num===T&&(Re=null,_s(),window.__schedOff&&window.__schedOff(7701)),De(!0)}Ft?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",ke(),a()})}window.__rodCard=ke;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(wt||ge>=0||xe||Lt)&&(d._h="",ke())},x("#ver").onclick=()=>{Lt=!0,At=!1,xe=!1,d._h="",ke()};let Ll={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},N0=["vacio","lleno","petado",__t(253),"calor","abordo"],U0=["gente","retraso","cancel","ascensor","via"],F0={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},Dl=o=>($.tipos||F0)[o]||o,Au=(o,u)=>($.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||u&&f.sid===String(u)&&!f.num||o&&u&&f.num===String(o)&&f.sid===String(u)),ep=o=>{let u=Math.round((Date.now()+($.repSkew||0)-o.at)/6e4);return u<1?__t(265):hs(u+" min")},Va=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Nl(o,u,f){if(!$.url||!$.repOk)return"";let _=Au(o,u),S=o?N0:U0;return`${__t(266)}${_.length?"":__t(268)}</small>${_.map(w=>`<p><span>${Ll[w.kind]||"\u2022"} <b>${g(Dl(w.kind))}</b> <small>${w.up>1?w.up+__t(269):""}${ep(w)}</small></span>${Va.has(w.id)?"<small>\u2713</small>":`<button type="button" data-rv="${w.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${w.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${o?__t(270):__t(271)}</summary><div class="ckb">${S.map(w=>`<button type="button" data-rk="${w}" data-rn="${g(o||"")}" data-rs="${g(u||"")}" data-rl="${g(f||"")}">${Ll[w]} ${g(Dl(w))}</button>`).join("")}${__t(267)}`}async function np(o,u){try{let _=await(await fetch(le()+u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!_.ok){hn(_.err||__t(272));return}if(_.id){Va.add(_.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Va].slice(-300)))}catch{}}hn(u==="/vote"?__t(273):_.n>1?`${__t(274)}${_.n}${__t(275)}`:__t(276));let S=await Rt(le(),"/reports.json");S&&S.items&&($.rep=S.items),d._h="",ke(),De(!0)}catch{hn(__t(277))}}function ip(o){o.querySelectorAll("[data-rk]").forEach(u=>u.onclick=f=>{f.stopPropagation(),u.disabled=!0,np({kind:u.dataset.rk,num:u.dataset.rn,sid:u.dataset.rs,line:u.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(u=>u.onclick=f=>{f.stopPropagation();let[_,S]=u.dataset.rv.split(":");Va.add(+_);try{localStorage.setItem("rod_votes",JSON.stringify([...Va].slice(-300)))}catch{}np({id:+_,v:+S},"/vote")})}let Ul=0;function hn(o,u){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,u){let _=document.createElement("button");_.type="button",_.className="tact",_.textContent=u.label,_.onclick=S=>{S.stopPropagation(),clearTimeout(Ul),f.className="",u.fn()},f.appendChild(_)}f.className="on",clearTimeout(Ul),Ul=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),f._tap||(f._tap=1,f.onclick=()=>{clearTimeout(Ul),f.className=""})}function Ha(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(278):g(o.src)}</b>`:""}function Ga(o){if(!o.when)return"";let[u,f]=o.when.split("T"),_=vt(new Date),S=_.ymd.slice(0,4)+"-"+_.ymd.slice(4,6)+"-"+_.ymd.slice(6,8);if(u===S&&f){let w=Math.round(_.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return w<1?__t(265):w<60?hs(w+" min"):`${__t(279)}${f.slice(0,5)}`}return`${u.slice(8,10)}/${u.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Cu(){let o=x("#alr");if(!o)return;let u=$.alerts.filter(f=>[...f.fams].some(_=>ct.has(_))).length;o.hidden=!u,o.textContent=`\u26A0\uFE0F ${u}${u===1?__t(280):__t(281)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{Lt=!1,At=!1,xe=!0,ke()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(282)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let _=getSelection();_.removeAllRanges(),_.addRange(f),x("#wcopy").textContent=__t(283)}setTimeout(()=>x("#wcopy").textContent=__t(284),2500)};let O0=Xt.get("71801");function sp(){return document.hidden?zn.size||Re?12e4:1e12:3e4}function rp(o,u){let f=E[o].id,_=Ut.get(f);!(X()&&$.url)||_&&(_.loading||Date.now()-_.at<sp())||(Ut.set(f,{..._||{},loading:!0,at:_?_.at:0}),Rt(le(),"/departures.json?stationId="+f).then(S=>{Ut.set(f,{at:Date.now(),d:S}),u&&u()}).catch(()=>Ut.set(f,{at:Date.now(),err:1})))}let ap=o=>+o.slice(0,2)*60+ +o.slice(3,5),Wa={k:-2,m:null};function Xa(o){let u=t.days.indexOf(se().ymd);if(Wa.k!==u){Wa.k=u,Wa.m=new Map;for(let f of Q[u]||[])Wa.m.set(String(f.num),f)}return Wa.m.get(String(o))||null}let Di={at:0,m:new Map},qa=o=>b()?(Ya(""),[...o].filter(u=>{let f=Di.m.get(u);return f&&f[0]>=2&&f[1]===0}).sort(F)):[];function Ya(o){if(Date.now()-Di.at>6e4||Di.vp!==$.vp){Di.at=Date.now(),Di.vp=$.vp,Di.m=new Map;let f=se(),_=t.days.indexOf(f.ymd);if(_>=0)for(let S of Q[_]){let w=f.min-S.t0;if(w<S.pat.t[1]+3||w>S.pat.t[S.pat.t.length-2]-3)continue;let P=Di.m.get(S.fam)||[0,0];P[0]++,$.vp.has(S.tid)&&P[1]++,Di.m.set(S.fam,P)}}let u=Di.m.get(o);return u&&u[0]>=3?u[1]/u[0]:1}function Za(o,u,f,_){let S=E[o.pat.stops[f]].id;if([...tn.st,...Ye.st].includes(S)){let w=ai(o.pat.stops[f]).find(P=>String(P.num)===String(o.num));if(w&&!w.gone)return w.est}return Ru(o,u,f,0,_)}function op(o,u){if(!o||!u||u.pre||u.dObs==null||u.err==null||u.err>.6)return null;let f=Date.now()/1e3-u.ts;if(f>150||f<-30||(u.still||0)>=90)return null;let _=Qt(o.pat).stopD,S=o.pat.t,w,P,D=_.reduce((L,z,Y)=>Math.abs(z-u.dObs)<Math.abs(_[L]-u.dObs)?Y:L,0);if(Math.abs(_[D]-u.dObs)<.16||u.atStop===D)w=S[2*D+1]??S[2*D],P=D;else{let L=_.findIndex(Y=>Y>u.dObs);if(L<=0)return null;let z=Math.min(1,Math.max(0,(u.dObs-_[L-1])/(_[L]-_[L-1]||1)));w=S[2*L-1]+z*(S[2*L]-S[2*L-1]),P=L-1}return{t:vt(new Date).min-f/60,tpos:w,j0:P,sd:_}}function Ru(o,u,f,_,S){let w=op(o,u);if(!w||f<=w.j0&&!(f===w.j0&&_===1))return S;let P=o.pat.t,D=w.t+(P[2*f+_]??P[2*f])-w.tpos;if(D-w.t>45)return S;let L=(S%1440+1440)%1440,z=((D-L+720)%1440+1440)%1440-720;return z>=-3&&z<=5?S+z:S}function jb(o,u,f,_){let S=op(o,u);if(!S)return null;let w=Ru(o,u,f,1,S.t+o.pat.t[2*f+1]-S.tpos);return w-_.min>30||w<_.min-1?null:w}function ai(o,u){let f=se(),_=(b()||U())&&f.live&&!u,S=Ut.get(E[o].id),w=[],P=new Map([...$.vp.values()].map(L=>[String((dt.get(L.tid)||{}).num||L.num),L]));if(_&&S&&S.d&&Array.isArray(S.d.trains)&&S.d.trains.length)for(let L of S.d.trains){let z=(L.departureDateHourSelectedStation||"").slice(11,16);if(!z)continue;let Y=String(L.commercialNumber||L.technicalNumber||""),p=P.get(Y),T=p?$.delays.get(p.tid):null,N=Math.max(typeof T=="number"?Math.max(0,T/60):0,p&&p.pre&&p.preDl||0),V=ap(z);V<f.min-720&&(V+=1440);let ht=+(L.departureDateHourSelectedStation||"").slice(17,19)||0,bt=V+ht/60,tt=p&&dt.get(p.tid)||Xa(Y),ft=tt?tt.pat.stops.indexOf(o):-1,j=ft>=0?(tt.t0+tt.pat.t[2*ft+1])%1440:null;if(j!=null){for(;j<bt-720;)j+=1440;for(;j>bt+720;)j-=1440;Math.abs(bt-j)>120&&(j=null)}let he,ye;j==null?(he=ht||!N?bt:bt+N,ye=ht?0:N):ht||Math.abs(bt-j)>=1?(he=bt,ye=Math.max(0,bt-j)):(he=j+N,ye=N);let Vt=!1;if(tt&&!p&&ft>0&&!ht){let Xe=t.days.indexOf(f.ymd),Ae=tt.day===Xe-1?1440:tt.day===Xe+1?-1440:0,pe=tt.t0+tt.pat.t[1]-Ae;if(f.min<pe){let fn=pe+(tt.pat.t[2*ft+1]-tt.pat.t[1]);fn>he+1&&(he=fn,Vt=!0,j!=null&&(ye=Math.max(0,he-j)))}}if(j!=null&&(V=Math.round(j)),p&&tt&&ft>=0){let Xe=Ru(tt,p,ft,1,he);Xe!==he&&(he=Math.max(Xe,f.min),j!=null&&(ye=Math.max(0,he-j)))}w.push({dubious:Vt,rodLive:!!ht,sm:V,est:he,dl:ye,fam:(L.line||{}).id||"",dest:(L.destinationStation||{}).name||"",destId:(L.destinationStation||{}).id||"",plat:L.platformSelectedStation||"",cancel:!!L.trainCancelled,obs:L.trainObservations||"",live:!!p,num:Y,tid:p?p.tid:"",tr:p&&dt.get(p.tid)||Xa(Y),src:"oficial"})}else{let L=t.days.indexOf(f.ymd);if(L<0)return w;let z=(Y,p)=>{for(let T of Y){let N=T.pat.stops.indexOf(o);if(N<0||N===T.pat.stops.length-1)continue;let V=pt(T),ht=typeof V=="number"?Math.max(0,V/60):0,bt=T.t0+T.pat.t[2*N+1]-p;if(bt+ht<f.min-1||bt>f.min+(f.min>1080||f.min<300?600:360))continue;let tt=T.pat.stops[T.pat.stops.length-1];w.push({sm:bt,est:bt+ht,dl:ht,fam:T.fam,dest:E[tt].n,destId:E[tt].id,plat:"",cancel:V==="X",obs:"",live:$.vp.has(T.tid),num:T.num,tid:T.tid,tr:T,src:"horario"})}};z(Q[L],0),L>0&&z(Q[L-1],1440),L+1<t.days.length&&f.min>1080&&z(Q[L+1],-1440)}if(_){let L=new Set(w.map(p=>String(p.num))),z=t.days.indexOf(f.ymd),Y=(p,T)=>{for(let N of p||[]){if(L.has(String(N.num)))continue;let V=N.pat.stops.indexOf(o);if(V<0||V===N.pat.stops.length-1)continue;let ht=N.t0+N.pat.t[2*V+1]-T;if(ht<f.min-45||ht>f.min+1||!$.vp.get(N.tid))continue;let tt=$.delays.get(N.tid),ft=typeof tt=="number"?Math.max(0,tt/60):0,j=N.pat.stops[N.pat.stops.length-1];w.push({sm:ht,est:ht+ft,dl:ft,fam:N.fam,dest:E[j].n,destId:E[j].id,plat:"",cancel:!1,obs:"",live:!0,num:N.num,tid:N.tid,tr:N,src:"horario"})}};z>=0&&(Y(Q[z],0),z>0&&Y(Q[z-1],1440));for(let p of w){let T=p.tid&&$.vp.get(p.tid),N=p.tr?p.tr.pat.stops.indexOf(o):-1;p.passed=!!(T&&N>=0&&!T.pre&&T.next!=null&&T.next>=0&&T.next>N&&T.atStop!==N),!p.passed&&p.live&&p.est<f.min&&(p.est=f.min,p.late=!0),p.passed&&(p.gone=!0)}}let D=w.filter(L=>L.gone?f.min-L.est<20:L.est>=f.min-.5).sort((L,z)=>L.est-z.est);{let L=D.filter(z=>z.gone);if(L.length>2){let z=new Set(L.slice(0,L.length-2));D=D.filter(Y=>!z.has(Y))}}if(!D.filter(L=>!L.gone).length&&w.length&&w[0].src==="oficial"&&!u)return ai(o,!0);for(let L of D){let z=L.num&&wu(L.num);z&&z.cx&&(L.cancel=!0,L.cxWhy=z.txt)}if(b()&&f.live){let L=t.days.indexOf(f.ymd);for(let z of D){if(z.live||z.cancel||!z.tr)continue;let Y=z.tr.day===L-1?1440:z.tr.day===L+1?-1440:0,p=z.tr.t0+z.tr.pat.t[1]-Y+(z.dl||0);z.noPos=f.min>p+3&&!z.rodLive,z.ghost=z.noPos&&Ya(z.fam)>=.7}}if(u||(D=D.concat(A(o,f.min-.5,f.min+360)).sort((L,z)=>L.est-z.est)),!u&&D.some(L=>L.src==="oficial")){let L=w.filter(p=>p.src==="oficial"),z=Math.max(...L.map(p=>p.sm)),Y=new Set(D.map(p=>String(p.num)));D=D.concat(ai(o,!0).filter(p=>!p.gone&&p.sm<=z&&p.est>=f.min-.5&&!Y.has(String(p.num))).map(p=>Object.assign(p,{unconf:!0}))).sort((p,T)=>p.est-T.est)}if(D.some(L=>L.src==="oficial")){let L=Math.max(...D.map(Y=>Y.sm)),z=new Set(D.map(Y=>String(Y.num)));D=D.concat(ai(o,!0).filter(Y=>Y.sm>L&&!z.has(String(Y.num))))}return D}let lp=(o,u,f,_)=>{let S={key:o,ico:u,name:f,st:[],i:0,walk:10,open:!1};try{let w=JSON.parse(localStorage.getItem("rod_"+o)||"null");w&&Object.assign(S,w)}catch{}return!S.st.length&&_&&(S.st=_),S},tn=lp("home","\u{1F3E0}",__t(285),null),Ye=lp("work","\u{1F4BC}",__t(286),null),Dt={key:"near",ico:"\u{1F4CD}",name:__t(287),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Ja=[Dt,tn,Ye];try{Dt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}tn.open=!1,Ye.open=!1;function cp(o,u){let f=St(o,u),_=St(o,u+.009);return 1/Math.hypot(_[0]-f[0],_[1]-f[1])}function Iu(o){if(!navigator.geolocation){Dt.err=__t(288),De(!0);return}navigator.geolocation.getCurrentPosition(u=>{let{longitude:f,latitude:_}=u.coords,S=St(f,_),w=cp(f,_),P=E.map((Y,p)=>[p,Math.hypot(Y.w[0]-S[0],Y.w[1]-S[1])*w]).filter(([Y])=>E[Y].fams.size).sort((Y,p)=>Y[1]-p[1]),D=P.filter(([,Y],p)=>p===0||Y<Math.max(2.5,P[0][1]*1.6)).slice(0,3),L=Dt.st[0]!==E[D[0][0]].id;Dt.w=S,Dt.k=w,Dt.acc=u.coords.accuracy!=null?u.coords.accuracy:999,Dt.st=D.map(([Y])=>E[Y].id),Dt.dist=Object.fromEntries(D.map(([Y,p])=>[E[Y].id,p])),Dt.fix=Date.now(),Dt.err="",L&&(Dt.i=0);let z=[tn,Ye].find(Y=>Y.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5);De(!0)},u=>{Dt.err=u.code===1?__t(289):__t(290),De(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let hp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Iu(!0),400);let Zt={fixes:[],tid:"",no:new Map,shown:""},oi={num:"",until:0};function Fl(o){return!!o&&(Ft===o||o.num!=null&&[...zn.values()].some(u=>String(u)===String(o.num)))}let B0=()=>{let o=new Set([...zn.values()].map(String));return oi.num&&oi.until>Date.now()&&o.add(oi.num),o};function k0(){let o=Zt.fixes;if(o.length<2)return;let u=o[o.length-1],f=o.slice().reverse().find(N=>u.t-N.t>=8e3&&u.t-N.t<=9e4);if(!f)return;let _=Math.hypot(u.w[0]-f.w[0],u.w[1]-f.w[1])*u.k,S=u.spd!=null&&u.spd>0?u.spd*3.6:_/((u.t-f.t)/36e5);if(u.acc!=null&&u.acc>100)return;if(Zt.tid&&S<8){if(!Zt.slow)Zt.slow=u.t;else if(u.t-Zt.slow>9e4&&E.some(N=>N.w&&Math.hypot(N.w[0]-u.w[0],N.w[1]-u.w[1])*u.k<.35)){Zt.tid="",Zt.manual=0,Zt.slow=0,Zt.quiet=Date.now()+10*6e4,Ft=null,De(!0);return}}else Zt.slow=0;if(!Zt.tid&&Zt.quiet&&Date.now()<Zt.quiet||Zt.manual&&Date.now()<Zt.manual)return;if(Zt.tid){if(S<22)return;let N=re.find(V=>V.tr&&String(V.tr.num)===Zt.tid)||C(se()).out.find(V=>V.tr&&String(V.tr.num)===Zt.tid);if(N){if(Math.hypot(N.p.w[0]-u.w[0],N.p.w[1]-u.w[1])*u.k<=5){Zt.far=0;return}if(Zt.far||(Zt.far=u.t),u.t-Zt.far<12e4)return}Zt.far=0}if(S<22||S>200)return;let w=[u.w[0]-f.w[0],u.w[1]-f.w[1]],P=null,D=2.5,L=re.filter(N=>N.real),z=C(se()).out.filter(N=>N.tr&&!L.some(V=>V.tr&&String(V.tr.num)===String(N.tr.num))),Y=B0();for(let N of[...L,...z]){if(!N.tr||Y.size&&!Y.has(String(N.tr.num)))continue;let V=N.real?2.5:3.5,ht=Math.hypot(N.p.w[0]-u.w[0],N.p.w[1]-u.w[1])*u.k;if(ht>Math.min(D,V)||P&&P.real&&!N.real)continue;let bt=N.real?N.v.next:N.p.next;if(bt==null||bt<0)continue;let tt=E[N.tr.pat.stops[bt]].w,ft=[tt[0]-N.p.w[0],tt[1]-N.p.w[1]];if(ft[0]*w[0]+ft[1]*w[1]<=0)continue;let j=String(N.tr.num);(Zt.no.get(j)||0)>Date.now()||(D=ht,P=N)}if(!P){Zt.cand=null;return}let p=String(P.tr.num);if(Zt.tid===p||u.acc!=null&&u.acc>50)return;if(!Zt.cand||Zt.cand.k!==p){Zt.cand={k:p,t:u.t};return}if(u.t-Zt.cand.t<2e4)return;Zt.cand=null,Zt.tid=p,Lt=xe=At=!1,ge=-1,wt=P.tr,Ft=P.tr,Object.assign(s,{tx:P.p.w[0],ty:P.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());{let N=P.tr.pat.stops,V=P.real?P.v.next:P.p.next,ht=[...tn.st,...Ye.st],bt=N.findIndex((tt,ft)=>ft>=V&&ht.includes(E[tt].id));bt>0&&!(Re&&Re.num===p)&&(Re={num:p,sid:E[N[bt]].id,at:Date.now()},_s())}Bn(),d._h="",ke(),Me=0,a();let T=x("#onb");T||(T=document.createElement("div"),T.id="onb",document.body.appendChild(T)),T.innerHTML=`${__t(291)}${g(P.tr.fam)} ${g(P.tr.num)}${__t(292)}${g(E[P.tr.pat.stops[P.tr.pat.stops.length-1]].n)}${__t(293)}${Re&&Re.num===p?`${__t(295)}${g(E[Xt.get(Re.sid)].n)}`:""}${__t(294)}`,T.className="on",T.querySelector("[data-onb-no]").onclick=()=>{Zt.no.set(p,Date.now()+20*6e4),Zt.tid="",Ft=null,wt=null,d._h="",ke(),T.className=""},T.querySelector("[data-onb-x]").onclick=()=>{T.className=""},setTimeout(()=>{T.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,u=()=>{o==null&&(o=navigator.geolocation.watchPosition(_=>{let{longitude:S,latitude:w}=_.coords,P={t:_.timestamp||Date.now(),w:St(S,w),k:cp(S,w),spd:_.coords.speed,acc:_.coords.accuracy};Zt.fixes.push(P),Zt.fixes=Zt.fixes.filter(D=>P.t-D.t<12e4);try{se().live&&k0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},f=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(u,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?f():(Zt.fixes=[],u())})}setInterval(()=>{!document.hidden&&(Date.now()-Dt.fix>11e4||Ja.some(o=>o.goAt))&&Iu(!1)},3e4);let bi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},li=o=>o.st.length?Xt.get(o.st[o.i]||o.st[0]):null;function up(o,u,f,_){if(_&&u.bus)return u.bstops.slice(1).some(P=>_.has(P))?"to":"out";if(_&&u.tr){let P=u.tr.pat.stops,D=P.indexOf(o);if(D>=0&&P.slice(D+1).some(L=>_.has(L)))return"to"}if(_&&u.tr)return"out";let S=Xt.get(u.destId)??E.findIndex(P=>P.n===u.dest);if(S<0||S==null||f==null)return"otros";let w=P=>Math.hypot(E[P].w[0]-E[f].w[0],E[P].w[1]-E[f].w[1]);return w(S)<w(o)?"to":"out"}let ar=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),dp=0,z0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,fp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,pp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,ja=o=>{let u=o.es||o.txt;return fp.test(u)||fp.test(o.txt)?3:pp.test(u)||pp.test(o.txt)||o.lvl>=2?2:1},mp=4,Pu=new Map,Ol=new Map;function gp(o,u){let f=t.days.indexOf(se().ymd),_=f+"|"+o+"|"+[...u].join(",");if(Pu.has(_))return Pu.get(_);let S=!1,w=new Set,P=new Set;for(let L of Q[f]||[]){let z=L.pat.stops,Y=z.indexOf(o);if(Y>=0)for(let T=Y+1;T<z.length;T++){if(u.has(z[T])){S=!0;break}w.add(z[T])}let p=-1;for(let T=1;T<z.length;T++)if(u.has(z[T])){p=T;break}if(p>0)for(let T=0;T<p;T++)P.add(z[T])}let D=S?null:[...w].filter(L=>P.has(L)&&L!==o&&!u.has(L));return Pu.set(_,D),D}function Lu(o,u,f,_){for(let S of _||ai(o)){if(S.cancel||S.gone||!S.tr||S.est<u-.01)continue;let w=S.tr.pat.stops,P=w.indexOf(o);if(P<0)continue;let D=-1;for(let L=P+1;L<w.length;L++)if(f.has(w[L])){D=L;break}if(!(D<0))return{c:S,fin:S.est+(S.tr.pat.t[2*D]-S.tr.pat.t[2*P+1])}}return null}function $0(o,u,f){let _=Lu(o,u+2,f,ai(o));return _?{c:_.c,fin:_.fin,m:_.c.est-u,lost:!1}:null}function Du(o,u,f,_,S){let w=null,P=new Map,D=ai(o).filter(L=>!L.cancel&&!L.gone&&L.tr&&L.est-S.min>=_).slice(0,8);for(let L of D){let z=L.tr.pat.stops,Y=z.indexOf(o);if(!(Y<0))for(let p of f){let T=z.indexOf(p);if(T<=Y)continue;let N=L.est+(L.tr.pat.t[2*T]-L.tr.pat.t[2*Y+1]);P.has(p)||P.set(p,ai(p));let V=Lu(p,N+mp,u,P.get(p));V&&(!w||V.fin<w.finAt-.01||Math.abs(V.fin-w.finAt)<.01&&L.est>w.x.est)&&(w={T:p,x:L,finAt:V.fin})}}return w}function V0(o,u,f,_,S){let w=u.T,P=ai(w),D=u.fin,L=[];for(let p of P){if(L.length>=5)break;if(p.cancel||p.gone||!p.tr)continue;let T=p.tr.pat.stops,N=T.indexOf(w),V=-1;for(let tt=N+1;tt<T.length;tt++)if(D.has(T[tt])){V=tt;break}if(V<0||f.x&&f.x.arr!=null&&p.est<f.x.arr-.01)continue;let ht=p.est+(p.tr.pat.t[2*V]-p.tr.pat.t[2*N+1]),bt=_&&_.c===p;L.push(`<li class="hr${bt?" pin":""}" style="--lc:${W[p.fam]||"#6b7385"}"><span class="hrt"><b>${nt(p.est)}</b><small>${f.x&&f.x.arr!=null?p.est-f.x.arr<2?__t(296):Math.floor(p.est-f.x.arr)+" "+__t(297):""}</small></span><span class="hrd">${Mi(p.fam+" \xB7 "+p.dest,p.fam)}<small class="hro">${__t(298)} ${nt(ht)}${p.num?" \xB7 "+__t(299)+g(p.num):""}</small></span><span class="hrm">${p.dl>=1?`<em class="dl ${Pi(p.dl)}">+${Math.round(p.dl)}</em>`:""}${p.plat?`${__t(228)}${g(p.plat)}</i>`:""}</span></li>`)}let z=(()=>{let p=[];for(let T of u.cands){let N=Du(li(o),D,[T],0,S);N&&p.push([T,N.finAt])}return p.sort((T,N)=>T[1]-N[1]),p.filter(([T,N])=>N<=p[0][1]+30||u.fixed&&T===w).slice(0,4)})(),Y=z.length>1||u.fixed?`<div class="hxst"><span>${__t(300)}:</span><button type="button" data-hxf="${o.key}:" class="${u.fixed?"":"on"}">${__t(301)}</button>${z.map(([p])=>`<button type="button" data-hxf="${o.key}:${g(E[p].id)}" class="${u.fixed&&p===w?"on":""}">${g(E[p].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(300)} ${Mi(E[w].n,_?_.c.fam:"")} \u2192 ${g(u.finName)}</div><ol class="hxl">${L.join("")||`<li class="hr"><span class="hrd">${__t(302)}</span></li>`}</ol>${Y}</div>`}let _p=new Set;function H0(o,u,f){_p.has(o)||(_p.add(o),Ap(u,f,o))}function G0(o,u,f){let _=li(o);if(o===Dt){if(Zt.tid)return"";if(_==null)return`${__t(303)}${Dt.err?g(Dt.err)+__t(304):__t(305)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([tn,Ye].find(Nt=>Nt.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5)||Date.now()-Dt.fix>10*6e4)return"";o.walk=hp(Dt.dist[o.st[o.i]]||0)}if(_==null){let it=Dt.st.length?Xt.get(Dt.st[0]):null,Nt=o===Ye?tn:Ye,ie=it!=null&&!Nt.st.includes(Dt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${ie?`${__t(306)}${g(E[it].n)}</b>`:__t(307)}</small></span>${ie?`<button type="button" class="hpick" data-hnear="${o.key}${__t(308)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${ie?__t(309):__t(310)}</button></div></div>`}rp(_,()=>De(!0));let S=o===Dt?null:o===tn?Ye:tn,w=S?li(S):null,P=w!=null&&w!==_?w:O0,D=w!=null&&w!==_?S===Ye?__t(311):"casa":"Barcelona",L=E[_].fams,z=new Set([...L].filter(it=>ct.has(it))),Y=z.size<L.size,p=!1;z.size||(z=new Set(L),Y=!1,p=!0);let T=Dt.w?Math.hypot(E[_].w[0]-Dt.w[0],E[_].w[1]-Dt.w[1])*Dt.k:null,N=T!=null&&Date.now()-Dt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,bi(o));let V=o!==Dt&&!!o.platAt,ht=o===Dt||N&&T>3&&!o.goAt&&!V,bt=V||o!==Dt&&N&&T<.08&&Dt.acc<=40&&!(o===tn&&Dt.homeW&&Math.hypot(Dt.homeW[0]-Dt.w[0],Dt.homeW[1]-Dt.w[1])*Dt.k<.05),tt=o.goAt?(Date.now()-o.goAt)/6e4:null;tt!=null&&(tt>60||bt)&&(o.goAt=0,bi(o));let ft=!bt&&o!==Dt&&!!o.goAt,j=ft?N&&T<=3?hp(T):Math.max(0,o.walk-tt):0,he=ai(_),ye=he.filter(it=>!W[it.fam]||ct.has(it.fam)||p),Vt=ht||bt?0:ft?j:o.walk,Xe=$.alerts.filter(it=>[...it.fams].some(Nt=>z.has(Nt))||it.stops&&it.stops.has(_)),Ae=Xe.some(it=>z0.test(it.es||it.txt)),pe={to:[],out:[],otros:[],all:ye},fn=D!=="Barcelona"?new Set(S.st.map(it=>Xt.get(it)).filter(it=>it!=null)):null,Oe=null;if(fn&&o!==Dt){let it=gp(_,fn);if(it&&it.length){let Nt=o.xfer!=null?Xt.get(o.xfer):null,ie=Nt!=null&&it.includes(Nt)?[Nt]:it,me=Du(_,fn,ie,Vt,u);me&&(Oe=Object.assign(me,{fin:fn,finName:E[P].n,cands:it,fixed:Nt!=null&&it.includes(Nt)}),rp(me.T,()=>De(!0)),P=me.T,fn=new Set([me.T]))}}ye.forEach(it=>pe[up(_,it,P,fn)].push(it));let pi="";if(fn&&!pe.to.length&&ye.length<he.length){let it=he.filter(Nt=>!ye.includes(Nt)&&up(_,Nt,P,fn)==="to");it.length&&(pe.to=it,pi=[...new Set(it.map(Nt=>Nt.fam))].sort(F).join(", "))}let Gl=it=>{if(it==="all")return __t(312);let Nt=me=>(me.find(In=>In.fam)||{}).fam;if(it==="to")return __t(313)+Mi(D==="Barcelona"?"Barcelona":E[P].n,Nt(pe.to)||[...z][0])+(()=>{let me=Y&&!pi?[...z].filter(In=>pe.to.some(vs=>vs.fam===In)).sort(F):[];return me.length?`<span class="hwf" title="${__t(314)}">${me.map(Cn).join("")}</span>`:""})();let ie=[];for(let me of pe[it])ie.some(In=>In[0]===me.dest)||ie.push([me.dest,me.fam]);return ie.length?__t(313)+ie.slice(0,2).map(([me,In])=>Mi(me,In)).join(" "):__t(315)},ur=zn.get(o.key);ur&&!he.some(it=>String(it.num)===ur&&!it.gone)&&(oi.num=ur,oi.until=Date.now()+90*6e4,Fs(o.key,null));let Vr=it=>{let Nt=ur&&pe[it].find(un=>String(un.num)===ur&&!un.gone);if(Nt&&Nt.cancel)return{cls:"v-miss",pin:1,x:Nt,big:__t(316),small:`${nt(Nt.est)} \xB7 ${Nt.fam}${__t(317)}${Nt.dest}${Nt.num?" \xB7 "+__t(299)+Nt.num:""}`,warn:""};let ie=Nt||pe[it].find(un=>!un.cancel&&!un.gone&&un.est-u.min>=Vt);if(!ie){let un=pe[it].find(dr=>!dr.cancel);return un&&!ht?{cls:"v-miss",big:__t(318),small:`${__t(319)}${nt(un.est)}${__t(320)}${ar(un.est-u.min)}${__t(321)}`}:{cls:"v-no",big:__t(322),small:__t(323)}}let me=ie.est-u.min-Vt,In=ht||bt?"v-info":ft?me<1.5?"v-warn":"v-ok":me<1.5?"v-bad":me<5?"v-warn":"v-ok",vs=ie.ghost?pe[it].find(un=>!un.cancel&&!un.ghost&&un.live&&un.est>ie.est):null;if(Nt&&me<0&&!ht&&!bt){let un=pe[it].find(dr=>!dr.cancel&&!dr.gone&&!dr.ghost&&dr!==ie&&dr.est-u.min>=Vt);return{cls:"v-miss",pin:1,miss:1,nxt:un,x:ie,ghost:!!ie.ghost,big:__t(324),small:`${nt(ie.est)} \xB7 ${ie.fam}${__t(317)}${ie.dest}${ie.plat?__t(140)+ie.plat:""}${ie.num?" \xB7 "+__t(299)+ie.num:""}`,warn:un?`\u27A1\uFE0F ${__t(325)}: ${un.est-u.min-Vt<1?__t(326):__t(327)+" "+ar(un.est-u.min-Vt)} \xB7 ${nt(un.est)}${un.arr!=null?" \u2192 "+nt(un.arr):""}${un.plat?__t(140)+un.plat:""}${un.num?" \xB7 "+__t(299)+un.num:""}`:""}}return{pin:Nt?1:0,cls:In,ghost:!!ie.ghost,big:ht||bt?me<1?__t(328):__t(329)+ar(me):ft?me<1.5?__t(330):__t(331)+ar(me)+__t(332):me<1.5?__t(333):__t(334)+ar(me),warn:ie.unconf?"\u26A0\uFE0F "+__t(335):Nt&&!ie.live&&ie.rodLive&&!ie.ghost?"\u{1F4E1} "+__t(336):!ie.ghost&&ie.noPos&&Nt?"\u{1F4E1} "+__t(337):!ie.ghost&&ie.late&&Nt?__t(338):ie.ghost?`\u26A0\uFE0F ${__t(339)}${vs?`${__t(340)}${nt(vs.est)}`:""}`:Ae?__t(341):"",small:`${ie.bus?__t(342):""}${nt(ie.est)} \xB7 ${ie.fam}${__t(317)}${ie.dest}${ie.plat?__t(140)+ie.plat:""}${ie.dl>=1?` \xB7 +${Math.round(ie.dl)} min`:""}${ie.arr!=null?`${__t(343)}${nt(ie.arr)}`:""}${ie.num?" \xB7 "+__t(299)+ie.num:""}`,x:ie}},l_=fn||new Set([P]),c_=it=>{let Nt=it.tr;if(!Nt)return null;let ie=Nt.pat.stops,me=ie.indexOf(_);if(me<0)return null;let In=-1;for(let vs=me+1;vs<ie.length;vs++)if(l_.has(ie[vs])){In=vs;break}return In<0?null:it.est+(Nt.pat.t[2*In]-Nt.pat.t[2*me+1])};pe.to.forEach(it=>{it.arr=c_(it)});let Wl=pe.out.length?"out":"otros",en=Vr("to"),io=Vr(Wl);if(bt||o===Dt&&Dt.acc<=40&&(Dt.dist[o.st[o.i]]||9)<.08){for(let it of[en.x,io.x].concat(o===Dt?[Vr("all").x]:[]))if(it&&zn.has(o.key)&&String(zn.get(o.key))===String(it.num)&&!it.cancel&&it.est-u.min<=2&&it.est-u.min>-.5){let Nt="w"+it.num+"|"+Math.round(it.sm);Tp.has(Nt)||(Tp.add(Nt),Il(`${__t(344)}${it.fam}${__t(317)}${it.dest}`,`${Math.round(it.est-u.min)<=1?__t(345):__t(346)+Math.round(it.est-u.min)+" min"}${__t(317)}${E[_].n}${it.plat?__t(140)+it.plat:""}`))}}let Bp=b()&&u.live,kp=z.size===1,h_=it=>{let Nt=it.est-u.min;return ht?it.cancel?"cx":Nt<0?"u-miss":"u-info":it.cancel?"cx":Nt<Vt?"u-miss":Nt<Vt+1.5?"u-now":Nt<Vt+5?"u-soon":"u-ok"},u_=it=>{if(it.gone)return`<li class="hr u-gone${it.live?" on":""}${$a(it)?" sel":""} go" data-dk="${f.push(it)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${nt(it.est)}${__t(347)}${hs(Math.max(1,Math.round(u.min-it.est))+" min")}</small></span><span class="hrd">${Mi((kp?"":it.fam+" \xB7 ")+it.dest,it.fam)}${__t(348)}${g(it.num)}</small></span><span class="hrm">${it.dl>=1?`<em class="dl ${Pi(it.dl)}">+${Math.round(it.dl)}</em>`:""}</span></li>`;let Nt=!it.cancel&&it.est-u.min<Vt,ie=Au(it.num,"");return`<li class="hr ${h_(it)}${it.live?" on":""}${it.ghost?" gh":""}${$a(it)?" sel":""}${ur&&String(it.num)===ur?" pin":""}${Li.some(me=>{let In=Eu(me,t.days.indexOf(u.ymd));return In&&String(In.num)===String(it.num)})?" fav":""} go" style="--lc:${W[it.fam]||"#6b7385"}" data-dk="${f.push(it)-1}" title="${it.cancel?__t(316):Nt?__t(324):__t(349)}"><span class="hrt"><b>${it.cancel?"\u2715":Nt?nt(it.est):ar(it.est-u.min)}</b><small>${it.cancel?__t(350):it.late?__t(351):Nt?__t(352):it.ghost?__t(353):nt(it.est)}</small></span><span class="hrd">${it.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Mi((kp?"":it.fam+" \xB7 ")+it.dest,it.fam)}${ie.length?`<i class="cr" title="${g(ie.map(me=>Dl(me.kind)).join(" \xB7 "))}">${ie.slice(0,2).map(me=>Ll[me.kind]).join("")}</i>`:""}${it.arr!=null?`${__t(354)}${nt(it.arr)}${it.num?" \xB7 "+__t(299)+g(it.num):""}${(()=>{let me=it.num&&bu(it.num);return me&&me.n>=3&&me.late/me.n>=.5?`${__t(355)}${me.late}/${me.n})</b>`:""})()}</small>`:""}${it.obs?`<small class="hro">${g(it.obs)}</small>`:""}${it.unconf?`<small class="hro unc">${__t(356)}</small>`:""}</span><span class="hrm">${!it.cancel&&it.dl>=1?`<em class="dl ${Pi(it.dl)}">+${Math.round(it.dl)}</em>`:""}${it.plat?`${__t(228)}${g(it.plat)}</i>`:""}</span></li>`},so=(it,Nt,ie)=>`<div class="hcol"><div class="hdir">${Gl(it)}${ie?`<button type="button" class="hhide" data-hhide="${o.key}:${ie}" title="${__t(357)}">\u2715</button>`:""}</div><div class="hv ${Nt.cls}${Nt.ghost||Nt.pin&&Nt.x&&Nt.x.noPos&&!qa([Nt.x.fam]).length?" gh":""}${Nt.x?" go":""}"${Nt.miss&&Nt.nxt&&Nt.nxt.num?` data-pinnext="${o.key}:${g(Nt.nxt.num)}" title="${__t(358)}"`:Nt.x?` data-dk="${f.push(Nt.x)-1}"`:""}><b>${Nt.big}</b>${Nt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(359)}">\u{1F4CC} ${__t(360)} \u2715</button>`:""}<small>${g(Nt.small)}</small>${Nt.pin&&Nt.x&&Nt.x.num?(me=>me?`<span class="hwhere">\u{1F4CD} ${g(me)}</span>`:"")(Bu(Nt.x.num)):""}${Nt.warn?`<span class="hvw">${g(Nt.warn)}</span>`:""}</div><ol>${pe[it].slice(0,(o.more?it==="all"||o.hide?20:10:it==="all"?7:o.hide?8:4)+pe[it].filter(me=>me.gone).length).map(u_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Dt){let it=Vr("all");var d_=it.x?`<span class="nw">${it.big}</span> \xB7 <span class="nw"><b>${nt(it.x.est)}</b> ${g(it.x.fam)}${__t(361)}${g(it.x.dest)}${it.x.plat?'<span class="nw">'+__t(140)+g(it.x.plat)+"</span>":""}`:it.big}let je=Oe&&en.x&&en.x.arr!=null?$0(Oe.T,en.x.arr,Oe.fin):null;if(je){let it=o._xc;it&&it.leg===String(en.x.num)&&it.conn!==String(je.c.num)&&it.est<je.c.est&&it.live?(je.lost=!0,je.missed=it.est):(!it||it.leg!==String(en.x.num)||!it.live||it.conn===String(je.c.num))&&(o._xc={leg:String(en.x.num),conn:String(je.c.num),est:je.c.est,live:!!($.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}je&&(Ol.set(E[Oe.T].id,{fam:je.c.fam,est:je.c.est,plat:je.c.plat,lost:je.lost}),je.lost&&zn.get(o.key)===String(en.x.num)&&H0("xf"+en.x.num+"|"+je.c.num,`\u21C4 ${__t(362)} ${E[Oe.T].n}`,`${__t(363)}: ${je.c.fam} ${nt(je.c.est)} \u2192 ${nt(je.fin)}${je.c.plat?" \xB7 v\xEDa "+je.c.plat:""}`));let f_=je?`<br><span class="nw hxf ${je.lost?"xbad":je.m<4?"xwarn":"xok"}">\u21C4 ${je.lost?`${__t(364)} ${nt(je.missed)} \xB7 ${__t(142)} `:`${g(E[Oe.T].n)} \xB7 `}${Cn(je.c.fam)} <b>${nt(je.c.est)}</b> \u2192 <b>${nt(je.fin)}</b>${je.lost?"":` \xB7 ${Math.floor(je.m)} ${__t(365)}`}</span>`:Oe?`<br><span class="nw hxf xbad">\u21C4 ${__t(366)} ${g(E[Oe.T].n)}</span>`:"",p_=o===Dt?d_:Oe&&en.x?`<span class="nw">${en.big}${en.x.plat?__t(140)+g(en.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(en.x.est)}</b>${en.x.arr!=null?` \u2192 ${g(E[Oe.T].n)} <b>${nt(en.x.arr)}</b>`:""}</span>${f_}`:en.x?`<span class="nw">${en.big}${en.x.plat?__t(140)+g(en.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(en.x.est)}</b>${en.x.arr!=null?`${__t(368)}${nt(en.x.arr)}</b>`:""}${__t(367)}${g(D)}</span>`:__t(369)+g(D),qe=o===Dt?(it=>it.pin?it:null)(Vr("all")):en.pin?en:io.pin?io:null;qe&&qe.x&&zn.has(o.key)&&Cp(qe,E[_].n);let m_=qe?o===Dt?"all":qe===en?"to":Wl:"",Hr=!!(qe&&(qe.ghost||qe.x.noPos&&!qa([qe.x.fam]).length||qe.x.cancel)),Yu=!!(qe&&qe.miss),Gr=Hr?pe[m_].find(it=>!it.cancel&&!it.ghost&&!it.gone&&it.est>qe.x.est-.01&&it!==qe.x&&it.est-u.min>=(ht||bt?0:Vt)):null,g_=Yu?`<span class="nw">${__t(370)} <b>${nt(qe.x.est)}</b></span>${qe.nxt?`<br><span class="nw hnx">${__t(363)} <b>${nt(qe.nxt.est)}</b>${qe.nxt.arr!=null?` \u2192 <b>${nt(qe.nxt.arr)}</b>`:""}</span>`:""}`:"",__=Hr?`<span class="nw">\u26A0\uFE0F ${qe.x.cancel?__t(316):qe.ghost?__t(371):__t(372)}</span>${qe.x.cancel?"":` \xB7 <span class="nw"><b>${nt(qe.x.est)}</b>${qe.x.arr!=null?` \u2192 <b>${nt(qe.x.arr)}</b>`:""}</span>`}${Gr?` \xB7 <span class="nw">${__t(142)} <b>${nt(Gr.est)}</b>${Gr.arr!=null?` \u2192 <b>${nt(Gr.arr)}</b>`:""}${Gr.plat?__t(140)+g(Gr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${qe?" pinned":""}${Hr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${g(E[_].n)}${qe&&qe.x.num?`<i class="hpn">\u{1F4CC} ${g(qe.x.num)}</i>`:""}</b><small class="c${Yu||Hr&&qe.x.cancel?"bad":Hr?"warn":Ae?"bad":en.cls.slice(2)}">${Hr?__:Yu?g_:p_}</small>${qe&&qe.x&&qe.x.num?(it=>it?`<small class="nofit hwh2">\u{1F4CD} ${g(it)}</small>`:"")(Bu(qe.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((it,Nt)=>{let ie=Xt.get(it);return ie==null?"":`<button type="button" data-hs="${o.key}:${Nt}" class="${Nt===o.i?"on":""}">${g(E[ie].n)}</button>`}).join("")}</div>`:""}
        ${o===Dt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let it=Dt.dist[o.st[o.i]]||0;return it<1?Math.round(it*100)*10+" m":it.toFixed(1).replace(".",",")+" km"})()}${__t(374)}${o.walk}${__t(375)}`:""}
        ${V?`<div class="hwalk away">${__t(377)}<a data-hplat="${o.key}${__t(376)}`:bt?`${__t(378)}${o.key}${__t(379)}`:ft?`${__t(380)}${Math.round(j)} min</b>${N&&T<=3?__t(381):""} \xB7 <a data-hgo="${o.key}${__t(376)}`:""}${ht&&o!==Dt?`${__t(382)}${T<10?T.toFixed(1).replace(".",","):Math.round(T)}${__t(383)}`:""}<div class="hwalk"${ht||bt||ft?" hidden":""}><button type="button" class="hgo" data-hgo="${o.key}:1">\u{1F6B6} ${__t(384)}</button><button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(385)}</button><span class="hstep" title="${__t(386)}">${__t(387)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(388)}</span></div>
        ${(()=>{let it=Li.filter(Nt=>o.st.includes(Nt.sid));return it.length?`<div class="hfav">${it.map(Nt=>{let ie=Eu(Nt,t.days.indexOf(u.ymd)),me=ie&&ye.find(In=>String(In.num)===String(ie.num));return`\u2B50 <b>${Nt.t}</b> ${g(Nt.fam)} ${me?me.cancel?__t(389):me.gone?__t(225):me.dl>=1?`<em class="dl ${Pi(me.dl)}">+${Math.round(me.dl)}${__t(390)}${nt(me.est)}`:__t(391):__t(392)}`}).join("<br>")}</div>`:""})()}
        ${Y&&pi?`${__t(393)}${[...z].sort(F).map(Cn).join(" ")}${__t(394)}${D}${__t(395)}${pi}${__t(396)}`:p?`${__t(397)}${[...ct].sort(F).slice(0,3).map(Cn).join(" ")}${__t(398)}`:""}
        ${Xe.length?`<div class="hal ${Ae?"bad":""}${$u.v?" open":""}" data-halx>\u26A0\uFE0F ${Ha(Xe[0])} ${g(Xe[0].txt)} <small>${Ga(Xe[0])}</small>${Xe.length>1?` <a data-hal>+${Xe.length-1}${__t(399)}`:""}</div>`:`${__t(400)}${[...z].sort(F).join(", ")}</div>`}
        ${(()=>{let it=o.st.flatMap(Nt=>Au("",Nt));return it.length?`<div class="hcr">${it.slice(0,3).map(Nt=>`${Ll[Nt.kind]} <b>${g(Dl(Nt.kind))}</b> <small>${Nt.up>1?Nt.up+__t(269):""}${ep(Nt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Dt?`<div class="hcols one">${so("all",Vr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${so("to",en)}</div><a class="hshow" data-hshow="${o.key}${__t(401)}`:o.hide==="to"?`<div class="hcols one">${so(Wl,io)}</div><a class="hshow" data-hshow="${o.key}${__t(401)}`:`<div class="hcols">${so("to",en,"to")}${so(Wl,io,"out")}</div>`}
        ${Oe?V0(o,Oe,en,je,u):""}
        ${ye.length>(o===Dt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(402):__t(403)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Bp?Ut.get(E[_].id)?.d?__t(404):__t(405):__t(406)} \xB7 \u25CF = ${__t(407)}">${Bp?Ut.get(E[_].id)?.d?__t(408):__t(409):__t(224)}</span><a data-hmap="${_}${__t(373)}${o===Dt?__t(410):`<a data-hset="${o.key}${__t(411)}`}${o===Ye?`${__t(412)}`:""}</div>
      </div>`:"")+"</div>"}let Ni={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},xp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,vp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,or=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Bl=()=>{let o=new Set;return[...tn.st,...Ye.st].forEach(u=>{let f=Xt.get(u);f!=null&&E[f].fams.forEach(_=>o.add(_))}),[...o].sort(F)},Ka=()=>({stations:[...tn.st,...Ye.st],lines:Bl().filter(o=>!or.has(o))}),W0=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),u=>u.charCodeAt(0));async function yp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Sp(o){let f=await(await fetch(le()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...Ka()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Nu(){let o=li(tn),u=li(Ye);if(o==null||u==null)return o!=null?tn:u!=null?Ye:null;if(Dt.w&&Date.now()-Dt.fix<3*36e5){let f=_=>Math.hypot(E[_].w[0]-Dt.w[0],E[_].w[1]-Dt.w[1]);return f(o)<=f(u)?tn:Ye}return new Date().getHours()<13?tn:Ye}function Mp(o){let u=Nu(),f=u===tn?Ye:tn,_=u&&li(u),S=f&&li(f);if(_==null||S==null)return!0;let w=(o.es||"")+" "+(o.txt||""),P=t.days.indexOf(se().ymd),D=se(),L=[...new Set([...w.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(Y=>Y[1]))];if(L.length)return L.some(Y=>{let p=Xa(Y);if(!p)return!1;let T=p.pat.stops,N=T.indexOf(_),V=T.indexOf(S);if(N<0||V<0||N>V)return!1;let ht=p.t0+p.pat.t[2*N+1];return ht>D.min-60&&ht<D.min+150});let z=w.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(z){let Y=z[1].toLowerCase(),p=E.findIndex(T=>T.n&&Y.startsWith(T.n.toLowerCase()));if(p>=0){let T=(Q[P]||[]).find(N=>{let V=N.pat.stops;return V[V.length-1]===p&&V.includes(_)&&V.includes(S)});if(T){let N=T.pat.stops;return N.indexOf(_)<N.indexOf(S)}}}return!0}let Wn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function X0(){let{lines:o,stations:u}=Ka(),f=new Set(o),_=new Set(u.map(P=>Xt.get(P))),S=$.alerts.filter(P=>([...P.fams].some(D=>f.has(D))||[...P.stops||[]].some(D=>_.has(D)))&&Mp(P));if(!Wn.seen){try{Wn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Wn.seen=new Set}if(!Wn.seen.size){S.forEach(P=>Wn.seen.add(P.id+"|"+P.txt.length)),bp();return}}let w=S.filter(P=>!Wn.seen.has(P.id+"|"+P.txt.length));if(w.length&&(w.forEach(P=>Wn.seen.add(P.id+"|"+P.txt.length)),bp(),!(!Wn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of w.slice(0,3)){let D=(P.src==="Adif"?__t(278):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(F).slice(0,4).join(" "):""),L={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(z=>z?z.showNotification(D,L):new Notification(D,L)).catch(()=>{try{new Notification(D,L)}catch{}})}}function bp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Wn.seen].slice(-400)))}catch{}}async function q0(){if(Wn.on)Wn.on=!1,hn(__t(413));else{if(!("Notification"in window)){hn(xp&&!vp()?__t(414):__t(415));return}if(await Notification.requestPermission()!=="granted"){hn(__t(416));return}Wn.on=!0,hn(__t(417)+Ka().lines.join(", ")+__t(418))}try{localStorage.setItem("rod_ln",Wn.on?"1":"")}catch{}De(!0)}async function Y0(){if(!$.repOk)return q0();if(!Ni.busy){Ni.busy=!0;try{let o=await yp();if(!o){hn(xp&&!vp()?__t(419):__t(420));return}if(await navigator.serviceWorker.ready,Ni.on){let u=await o.pushManager.getSubscription();u&&(fetch(le()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:u.endpoint})}).catch(()=>{}),await u.unsubscribe().catch(()=>{})),Ni.on=!1,hn(__t(413))}else{if(!$.url){hn(__t(421));return}if(await Notification.requestPermission()!=="granted"){hn(__t(416));return}let f=(await Rt(le(),"/push/key")).key,_=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:W0(f)});await Sp(_),Ni.on=!0,hn(__t(422)+Ka().lines.join(", "))}try{localStorage.setItem("rod_push",Ni.on?"1":"")}catch{}}catch(o){hn(__t(423)+(o.message||o))}finally{Ni.busy=!1,De(!0)}}}async function wp(){if(Ni.on)try{let o=await yp(),u=o&&await o.pushManager.getSubscription();u&&await Sp(u)}catch{}}let Uu=!1,Ep="";function Fu(){let o=wt?"t"+(wt.tid||wt.vtid):ge>=0?"s"+ge:xe?"a":Lt?"n":"";o!==Ep&&(Uu=!1,Ep=o);let u=innerWidth<=640&&!!o&&!Uu&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==u&&(f.classList.toggle("compact",u),requestAnimationFrame(()=>{if(d.style.display!=="none"){let _=f.getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-_-16)+"px"}}))}let Tp=new Set,Ou=(()=>{let o=vt(new Date).ymd;try{let u=JSON.parse(localStorage.getItem("rod_pn")||"{}");return u.d===o?u:{d:o}}catch{return{d:o}}})();function Ap(o,u,f){if(!(!(Wn.on||Ni.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){hn(o+" \xB7 "+u);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(_=>_?_.showNotification(o,{body:u,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:u})).catch(()=>{try{new Notification(o,{body:u})}catch{}})}}function Cp(o,u){let f=o.x,_=se();if(!_.live||f.gone||f.est<_.min-1)return;let S=f.num+"|"+Math.round(f.sm),w=Ou[S]||{},P=`${__t(424)} ${nt(f.sm)}`,D=`${f.fam} \u2192 ${f.dest}`,L="",z="";f.cancel?w.c||(w.c=1,L=`\u26A0\uFE0F ${P} ${__t(148)}`,z=`${D}. ${__t(425)}`):o.ghost&&!w.g?(w.g=1,L=`\u26A0\uFE0F ${P} ${__t(426)}`,z=`${D}: ${__t(427)}`):f.dl>=5&&f.dl>=(w.dl||0)+5?(w.dl=Math.round(f.dl),L=`\u23F3 ${P} ${__t(428)} +${w.dl} min`,z=`${D}: ${__t(429)} ${u} ${__t(430)} ${nt(f.est)}.`):f.plat&&w.p&&w.p!==String(f.plat)&&(L=`${__t(431)}: ${P}`,z=`${D}: ${__t(432)} ${f.plat} ${__t(433)} ${w.p}).`),f.plat&&(w.p=String(f.plat)),Ou[S]=w;try{localStorage.setItem("rod_pn",JSON.stringify(Ou))}catch{}L&&Ap(L,z,"pin-"+f.num)}let Br={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let u=o.target.closest&&o.target.closest("[data-nowx]");if(!u||o.target.closest("a"))return;let f=u.dataset.nowx?u.dataset.nowx.split("|"):[];if(f.length){if(u.classList.contains("col"))Br.open=!0;else{Br.open=!1,f.forEach(_=>Br.seen.add(_));try{localStorage.setItem("rod_seen",JSON.stringify([...Br.seen].slice(-200)))}catch{}}De(!0)}});function Z0(o){let u=o.lines;if(!u.length&&Dt.st&&Dt.st.length){let p=new Set;Dt.st.forEach(T=>{let N=Xt.get(T);N!=null&&E[N].fams.forEach(V=>p.add(V))}),u=[...p].sort(F)}let f=new Set(u),_=$.alerts.filter(p=>!f.size||[...p.fams].some(T=>f.has(T))),S=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,w=_.reduce((p,T)=>Math.max(p,ja(T)),0),P=w===3?"\u26D4 ":w===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",D=`<div class="hnowh"><span class="hnowl"><b>${_.length?P+_.length+(_.length===1?__t(280):__t(281)):__t(434)}</b>${u.length?u.map(Cn).join(""):""}</span>${S}</div>`,L=_.filter(p=>!Br.seen.has(p.id)),z=_.length&&(Br.open||L.length>0),Y=_.reduce((p,T)=>Math.max(p,ja(T)),0);return`<div class="hnow${Y===3?" bad":Y===2?" warn":Y===1?" info":""}${_.length&&!z?" col":""}" data-nowx="${g(_.map(p=>p.id).join("|"))}">${D}${Ip(o,!0)}${z?_.slice().sort((p,T)=>ja(T)-ja(p)).map(p=>`<p class="sv${ja(p)}">${Ha(p)} ${g(p.txt)} <small>${Ga(p)}</small></p>`).join("")+`<small class="hnowt">${__t(435)}</small>`:""}</div>`}let zn=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(u=>u[2]===o).map(u=>[u[0],u[1]])}catch{return[]}})());function kl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],u=(_,S)=>{_.style.fontSize=S===1?"":(_._f0*S).toFixed(1)+"px",_.querySelectorAll("b").forEach(w=>w.style.fontSize=S===1?"":(_._b0*S).toFixed(1)+"px")},f=1;for(let _ of o){if(_.style.whiteSpace="",u(_,1),!_.clientWidth)continue;_._f0=parseFloat(getComputedStyle(_).fontSize);let S=_.querySelector("b");for(_._b0=S?parseFloat(getComputedStyle(S).fontSize):0;_.scrollWidth>_.clientWidth+1&&f>.86;)f-=.02,u(_,f)}if(f<1)for(let _ of o)_._f0&&u(_,f);for(let _ of o)_.scrollWidth>_.clientWidth+1&&(_.style.whiteSpace="normal")}addEventListener("resize",()=>{try{kl()}catch{}});let J0=(o,u)=>{let f=o==="work"?Ye:o==="near"?Dt:tn,_=f&&li(f);return _==null?null:ai(_).find(S=>String(S.num)===String(u))||null};function Fs(o,u){u?zn.set(o,u):zn.delete(o);try{let f=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...zn].map(([_,S])=>[_,S,f])))}catch{}}let Rp=o=>{let u=o&&o.ts?Date.now()/1e3-o.ts:$.okVP?(Date.now()-$.okVP)/1e3:-1;return u>=0?" \xB7 "+hs(lu(Math.round(u))):""};function Bu(o){let u=re.find(w=>w.tr&&String(w.tr.num)===String(o));if(!u){let w=Xa(o),P=se(),D=t.days.indexOf(P.ymd);if(!w)return"";let L=w.day===D-1?1440:0,z=w.t0+w.pat.t[1]-L;return z>P.min?__t(436)+E[w.pat.stops[0]].n+" ("+nt(z)+")":""}let f=u.tr,_=w=>E[f.pat.stops[w]].n;if(u.real){let w=u.v;return w.pre?__t(437):w.atStop>=0&&w.before?__t(438)+_(w.atStop):w.atStop>=0&&(w.st==="STOPPED_AT"||u.stop==="st")?Ue()?__t(439)+_(w.atStop):__t(440)+_(w.atStop)+Rp(w):!Ue()&&w.next>0?__t(441)+_(w.next-1)+__t(442)+_(w.next)+Rp(w):w.atStop>=0&&w.next>w.atStop?__t(443)+_(w.atStop)+__t(444)+_(w.next):w.atStop>=0?__t(445)+_(w.atStop):u.stop==="via"&&w.next>0?"\u23F8 "+__t(446)+_(w.next-1)+__t(442)+_(w.next):w.next>0?__t(185)+_(w.next-1)+__t(442)+_(w.next):w.next===0?__t(313)+_(0):""}let S=u.p&&u.p.next;return S>0?__t(447)+_(S-1)+__t(442)+_(S):""}let Qa={k:"",v:null};function j0(o){let u=se(),f=t.days.indexOf(u.ymd);if(f<0||!o.length)return null;let _=Nu(),S=(_&&li(_))??li(tn)??li(Ye),w=u.ymd+o.join()+S;if(Qa.k===w)return Qa.v;Qa.k=w;let P=new Set(o),D=S!=null?p=>Q[p].filter(T=>{let N=T.pat.stops.indexOf(S);return N>=0&&N<T.pat.stops.length-1}).length:p=>Q[p].filter(T=>P.has(T.fam)).length,L=p=>{let T=new Date(+p.slice(0,4),+p.slice(4,6)-1,+p.slice(6)).getDay();return T===0?0:T===6?6:1},z=D(f),Y=Math.max(0,...t.days.map((p,T)=>T!==f&&L(p)===L(u.ymd)?D(T):0));return Qa.v=Y>=20&&z<Y*.8?{n:z,ref:Y,pct:Math.round(z/Y*100),st:S!=null?E[S].n:""}:null,Qa.v}function Ip(o,u){let f=o.lines||[],_=j0(f);if(!_)return"";let S=$.alerts.some(w=>[...w.fams].some(P=>f.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((w.es||"")+" "+w.txt));return u?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${S?__t(448):__t(449)}</b>: ${_.st?`${__t(450)} ${g(_.st)} ${_.n} ${__t(451)} ${_.ref} ${__t(452)}`:`${__t(453)} ${_.n} ${__t(451)} ${_.ref} ${__t(452)}`} (${_.pct} %). ${S?__t(454):__t(455)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${S?__t(456):__t(457)}</b> \xB7 ${__t(458)}: ${_.st?`${__t(459)} ${g(_.st)} ${__t(460)} ${_.n} ${__t(198)} ${_.ref} ${__t(71)}`:`${_.n} ${__t(198)} ${_.ref} ${__t(461)} ${f.join(", ")}`} (${_.pct} % ${__t(462)}).</div>`}function K0(o){let u=qa(o.lines||[]);if(!u.length)return"";let f=[tn,Ye].some(_=>{let S=li(_),w=S!=null&&Ut.get(E[S].id);return w&&w.d&&Array.isArray(w.d.trains)&&!w.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(463)} ${u.join(", ")}</b> ${__t(464)}${f?" \xB7 "+__t(465):""}: ${__t(466)}</div>`}function Q0(o){if(!Dt.w)return[];let u=Dt.k||1;return re.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])*u<3).sort((f,_)=>Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])-Math.hypot(_.p.w[0]-Dt.w[0],_.p.w[1]-Dt.w[1])).slice(0,2).map(f=>f.tr)}function t_(o){if(!Zt.tid)return"";let u=re.find(V=>V.tr&&String(V.tr.num)===Zt.tid)||C(o).out.find(V=>V.tr&&String(V.tr.num)===Zt.tid);if(!u)return"";let f=u.tr,_=f.pat.stops,S=u.real?u.v.next:u.p.next;if(S==null||S<0)return"";let w=pt(f),P=typeof w=="number"?Math.max(0,w/60):0,D=t.days.indexOf(o.ymd),L=f.day===D-1?1440:0,z=Re&&Re.num===Zt.tid?_.indexOf(Xt.get(Re.sid)):-1;z<S&&(z=_.length-1);let Y=Za(f,u.real?u.v:null,z,f.t0+f.pat.t[2*z]+P-L),p=Y-o.min,T=u.real&&u.v.atStop>=0?u.v.atStop:-1,N=Bu(f.num)||__t(313)+E[_[S]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Cn(f.fam)} ${__t(299)}${g(f.num)}</b><small class="nofit cok">${g(N)} \xB7 <span class="nw">${__t(467)} ${g(E[_[z]].n)}</span> <span class="nw">${p>=1?__t(104)+ar(p)+" \xB7 ":""}<b>${nt(Y)}</b>${P>=1?` <em class="dl ${Pi(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(468)}" title="${__t(468)}">\u2715</button>${(V=>V.length&&!(Zt.manual&&Date.now()<Zt.manual)?`<div class="onbch">${V.map(ht=>`<button type="button" class="onbalt" data-onbpick="${g(ht.num)}">${__t(469)} ${g(ht.num)}?</button>`).join("")}</div>`:"")(Q0(f))}</div>`}let zl={until:0};function e_(o){if(o.hasAttribute("data-onbx")){oi.num===Zt.tid&&(oi.num=""),Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid="",Zt.manual=0,Zt.quiet=Date.now()+10*6e4,Ft=null,De(!0);return}Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid=o.dataset.onbpick,Zt.manual=Date.now()+90*6e4,[...zn].forEach(([f,_])=>{String(_)!==Zt.tid&&Fs(f,null)}),oi.num=Zt.tid,oi.until=Date.now()+90*6e4;let u=re.find(f=>f.tr&&String(f.tr.num)===Zt.tid);if(u){Ft=u.tr;let f=u.tr.pat.stops,_=u.real?u.v.next:u.p.next,S=[...tn.st,...Ye.st,...Ol.keys()],w=f.findIndex((P,D)=>D>=_&&S.includes(E[P].id));w>0&&(Re={num:Zt.tid,sid:E[f[w]].id,at:Date.now()},_s())}hn(`${__t(470)} ${Zt.tid}`),De(!0)}function De(o){let u=x("#home");if(!u)return;let f=performance.now();if(!o&&f-dp<4e3||!o&&zl.until>Date.now())return;dp=f;let _=se(),S=[],w=Ka(),P=p=>{let T=li(p);return T==null||!Dt.w?1:Math.hypot(E[T].w[0]-Dt.w[0],E[T].w[1]-Dt.w[1])},D=[Dt,...[tn,Ye].sort((p,T)=>P(p)-P(T))],L=(document.documentElement.classList.contains("tabmode")?Z0(w):Ip(w))+K0(w)+t_(_)+D.map(p=>G0(p,_,S)).join("")+(Ja.some(p=>p.open)&&w.lines.length,"");u.className=Ja.some(p=>p.open)?"open":"";let z=x("#bell");z||(z=document.createElement("button"),z.type="button",z.id="bell",z.onclick=Y0,x("#inf .more").prepend(z));{let p=$.repOk?Ni.on:Wn.on;z.hidden=!w.lines.length,z.className=p?"on":"",z.textContent=(p?__t(478):__t(479))+w.lines.join(", "),z.title=(p?__t(480):__t(481))+__t(67)+w.lines.join(", ")+($.repOk?"":__t(482))}if(u._h===L)return;u._h=L,u.innerHTML=L,kl(),u._onbDel||(u._onbDel=1,u.addEventListener("pointerdown",()=>{zl.until=Date.now()+1500},!0),u.addEventListener("pointerup",()=>{zl.until=Date.now()+400},!0),u.addEventListener("click",p=>{let T=p.target.closest&&p.target.closest("[data-onbx],[data-onbpick]");T&&(p.stopPropagation(),zl.until=0,e_(T))},!0));{let p=u.querySelector("[data-onbgo]");p&&(p.onclick=T=>{if(T.target.closest("[data-onbx]")){Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid="",Zt.manual=0,Ft=null,De(!0);return}let N=T.target.closest("[data-onbpick]");if(N){Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid=N.dataset.onbpick,Zt.manual=Date.now()+90*6e4;let ht=re.find(bt=>bt.tr&&String(bt.tr.num)===Zt.tid);if(ht){Ft=ht.tr,wt=ht.tr;let bt=ht.tr.pat.stops,tt=ht.real?ht.v.next:ht.p.next,ft=[...tn.st,...Ye.st],j=bt.findIndex((he,ye)=>ye>=tt&&ft.includes(E[he].id));j>0&&(Re={num:Zt.tid,sid:E[bt[j]].id,at:Date.now()},_s()),d._h="",ke()}De(!0);return}let V=re.find(ht=>ht.tr&&String(ht.tr.num)===Zt.tid);V&&(Lt=xe=At=!1,ge=-1,wt=V.tr,d._h="",ke())})}{let p=[...u.children].find(T=>T.classList.contains("hplace")&&!T.querySelector(".hnew"));p&&p.classList.add("lead")}let Y=p=>p==="work"?Ye:p==="near"?Dt:tn;u.querySelectorAll("[data-hloc]").forEach(p=>p.onclick=()=>{Dt.err="",Iu(!0)}),u.querySelectorAll("[data-ht]").forEach(p=>p.onclick=()=>{if(x("#inf").classList.contains("compact")){Uu=!0,Fu();return}let T=Y(p.dataset.ht);T.open=!T.open,bi(T),De(!0),(wt||ge>=0||xe||Lt)&&(d._h="",ke())}),u.querySelectorAll("[data-hxf]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hxf.split(":"),ht=Y(N);ht.xfer=V||null,bi(ht),De(!0)}),u.querySelectorAll("[data-hs]").forEach(p=>p.onclick=()=>{let[T,N]=p.dataset.hs.split(":"),V=Y(T);V.i=+N,bi(V),De(!0)}),u.querySelectorAll("[data-hw]").forEach(p=>p.onclick=()=>{let[T,N]=p.dataset.hw.split(":"),V=Y(T);V.walk=y(V.walk+ +N,0,60),bi(V),De(!0)}),u.querySelectorAll("[data-hmap]").forEach(p=>p.onclick=()=>{let T=+p.dataset.hmap;Lt=xe=At=!1,wt=null,ge=T,Bn(),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",ke(),a()}),u.querySelectorAll("[data-hset]").forEach(p=>p.onclick=()=>Pp(p.dataset.hset)),u.querySelectorAll("[data-hnear]").forEach(p=>p.onclick=()=>{let T=Xt.get(Dt.st[0]);T!=null&&ku(T,p.dataset.hnear)}),u.querySelectorAll("[data-hmore]").forEach(p=>p.onclick=()=>{let T=Y(p.dataset.hmore);T.more=!T.more,De(!0)}),u.querySelectorAll("[data-hhide]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hhide.split(":"),ht=Y(N);ht.hide=V,bi(ht),De(!0)}),u.querySelectorAll("[data-hshow]").forEach(p=>p.onclick=()=>{let T=Y(p.dataset.hshow);T.hide="",bi(T),De(!0)}),u.querySelectorAll("[data-hgo]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hgo.split(":"),ht=Y(N);ht.goAt=V==="1"?Date.now():0,ht.goAt&&(ht.platAt=0),bi(ht),De(!0)}),u.querySelectorAll("[data-hplat]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hplat.split(":"),ht=Y(N);ht.platAt=V==="1"?Date.now():0,ht.platAt&&(ht.goAt=0),bi(ht),De(!0)}),u.querySelectorAll("[data-hnotst]").forEach(p=>p.onclick=T=>{T.stopPropagation(),Dt.homeW=Dt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Dt.w))}catch{}De(!0)}),u.querySelectorAll("[data-hdel]").forEach(p=>p.onclick=()=>{Ye.st=[],Ye.open=!1,bi(Ye),De(!0),wp()}),u.querySelectorAll("[data-dk]").forEach(p=>p.onclick=()=>{let T=S[+p.dataset.dk];if(p.matches("li.hr, .hv")&&!T.gone&&T.num!=null){let N=p.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(N){let V=zn.get(N)===String(T.num);Fs(N,V?null:String(T.num)),V&&oi.num===String(T.num)&&(oi.num=""),V?wt&&String(wt.num)===String(T.num)&&(wt=null,Ft=null,Ze.sk="",d._h="",ke()):to(T,!0),De(!0);return}}to(T)}),u.querySelectorAll("[data-pinnext]").forEach(p=>p.onclick=T=>{if(T.target.closest("[data-unpin]"))return;let[N,V]=p.dataset.pinnext.split(":");Fs(N,V);let ht=J0(N,V);ht&&to(ht,!0),De(!0)}),u.querySelectorAll("[data-unpin]").forEach(p=>p.onclick=T=>{T.stopPropagation(),Fs(p.dataset.unpin,null),De(!0)}),u.querySelectorAll("[data-hal]").forEach(p=>p.onclick=()=>x("#alr").click()),ip(u)}function to(o,u){if(!o)return;let f=t.days.indexOf(se().ymd),_=re.find(P=>P.real?o.tid&&P.v.tid===o.tid||o.num&&String(P.tr?P.tr.num:P.v.num)===String(o.num):o.tr&&P.tr===o.tr||o.num&&P.tr&&String(P.tr.num)===String(o.num)),S=o.tr||_&&_.tr||(Q[f]||[]).find(P=>String(P.num)===String(o.num));if(Lt=xe=At=!1,ge=-1,u||void 0,wt=_?_.tr||{vtid:_.v.tid}:S||null,!wt)return;u&&(Ze.sk="t"+(wt.num||wt.vtid)),Ft=_&&_.tr?_.tr:null,Ft&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let w=_?_.p.w:null;w&&Object.assign(s,{tx:w[0],ty:w[1],dist:Math.min(s.dist,22)}),Bn(),d._h="",ke(),Me=0,a()}let kr=!1;function Pp(o){kr=o||!1,v.value="",v.placeholder=o==="work"?__t(483):o==="home"?__t(484):__t(485),document.documentElement.classList.add("srch"),m.style.display="none",v.focus()}let Lp=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>Pp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Lp(),kr&&!v.value.trim()&&(kr=!1,v.placeholder=__t(485))},600));function Kb(){}function ku(o,u){let f=u==="work"?Ye:tn,_=E[o].id,S=E.filter(w=>w.fams.size&&w!==E[o]&&Math.hypot(w.w[0]-E[o].w[0],w.w[1]-E[o].w[1])<.6).map(w=>w.id);f.st=[_,...S].slice(0,3),f.i=0,f.open=!0,bi(f),De(!0),wp()}let $l=x("#lines");$l.innerHTML=`${__t(486)}`+H.map(o=>`<button type="button" style="--c:${W[o]}" data-f="${o}">${o}</button>`).join("");function Dp(){try{De(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",$l.after(o),o.onclick=()=>{Yt=[...ct][0],At=Lt=xe=!1,d._h="",ke()});let u=ct.size===1?[...ct][0]:"";o.hidden=!u,u&&(o.innerHTML=`${__t(487)}${g(u)}${__t(488)}`)}$l.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!ct.has(o.dataset.f))})}$l.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let u=o.dataset.f;u==="*"?H.forEach(f=>ct.add(f)):ct.size===H.length?(ct.clear(),ct.add(u)):ct.has(u)?(ct.delete(u),ct.size||H.forEach(f=>ct.add(f))):ct.add(u);try{localStorage.setItem("rod_lines",JSON.stringify([...ct]))}catch{}Dp(),jt(),Bn(),Cu(),Me=0,a()});let zu=[...document.querySelectorAll("[data-sp]")],wi=0;function Np(o){let u=se();o&&(Pt===o||wi===o)?Pt?(Jt=u.min,oe=u.min,Pt=0,wi=o):(_e=performance.now(),Pt=o,wi=0):o===0?(Pt=0,oe=null,wi=0):(Jt=u.min,_e=performance.now(),oe=u.min,Pt=o,wi=0),zu.forEach(f=>{let _=+f.dataset.sp;f.classList.toggle("on",_===(Pt||wi)||!Pt&&!wi&&oe==null&&_===0),f.classList.toggle("pz",!!wi&&_===wi),f.textContent=_===0?__t(489):wi===_?"\u25B6 \xD7"+_:Pt===_?"\u23F8 \xD7"+_:"\xD7"+_}),Me=0,a()}zu.forEach(o=>o.onclick=()=>Np(+o.dataset.sp)),x("#tsl").oninput=o=>{let u=+o.target.value;Jt=u,oe=u,_e=performance.now(),Pt===0&&!wi&&zu.forEach(f=>f.classList.remove("on")),Me=0,a()},setInterval(()=>{oe!=null&&Pt&&Jt+(performance.now()-_e)/6e4*Pt>1560&&(Jt=240,_e=performance.now())},1e3),window.__rodSearch=o=>{let u=M(o.trim());if(!u){m.style.display="none",m._pick=null;return}let f=[],_=[];E.forEach((D,L)=>{if(!D.fams.size)return;let z=M(D.n);z.startsWith(u)||z.includes(" "+u)||z.includes("-"+u)?f.push(L):z.includes(u)&&_.push(L)});let S=f.concat(_).slice(0,7),w=I.filter(D=>M(D.name).startsWith(u)).sort((D,L)=>L.pop-D.pop).slice(0,3),P=S.map(D=>({h:`\u{1F689} ${g(E[D].n)}<em>${[...E[D].fams].sort(F).slice(0,3).map(L=>`<em class="ls" style="background:${W[L]}">${L}</em>`).join(" ")}</em>`,go:()=>{if(Lp(),kr){let L=kr;kr=!1,v.placeholder=__t(485),ku(D,L);return}Ze.on&&Ze.cur!=="map"&&hr("map"),Lt=!1,xe=!1,At=!1,ge=D,wt=null,Ft=null,Bn(),Object.assign(s,{tx:E[D].w[0],ty:E[D].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),ke(),a()}})).concat(w.map(D=>({h:`${g(D.name)}${__t(490)}`,go:()=>{Object.assign(s,{tx:D.cx,ty:D.cy,dist:y(D.size*3+14,14,60)}),a()}})));m.innerHTML=P.map((D,L)=>`<li data-i="${L}">${D.h}</li>`).join("")||__t(491),m.style.display="block",m._pick=D=>{P[D]&&(P[D].go(),m.style.display="none",v.value="",v.blur())},m.querySelectorAll("li[data-i]").forEach(D=>D.onclick=()=>m._pick(+D.dataset.i))},Dp(),Bn();try{let o=new URLSearchParams(location.search).get("st");if(o){let u=M(o),f=-1,_=0;E.forEach((S,w)=>{if(!S.fams.size)return;let P=M(S.n),D=P===u?3:P.startsWith(u)||u.startsWith(P)?2:P.includes(u)||u.includes(P)?1:0;D>_&&(_=D,f=w)}),f>=0&&setTimeout(()=>{ge=f,Bn(),Object.assign(s,{tx:E[f].w[0],ty:E[f].w[1],dist:18,tilt:.5}),ke(),a()},300)}}catch{}let $u={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||($u.v=!$u.v,De(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&wt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let u=d.querySelector(".mn");u&&(u.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,u=0,f=0,_=0;d.addEventListener("touchstart",S=>{_=innerWidth<=640&&wt&&S.touches.length===1&&!S.target.closest("input")?1:0,_&&(o=S.touches[0].clientX,u=S.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",S=>{if(!_)return;let w=S.touches[0].clientX-o,P=S.touches[0].clientY-u;_===1&&(Math.abs(w)<12&&Math.abs(P)<12||(_=Math.abs(w)>Math.abs(P)*1.3&&w<0?2:0,!_))||(S.preventDefault(),f=Math.min(0,w),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(_!==2){_=0;return}if(_=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let S=d.querySelector("[data-cx]");S&&S.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{_===2&&(d.style.transform="",d.style.opacity=""),_=0})}let Ze={on:!1,cur:"now",home:new Map},Vl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Rn=document.createElement("nav");Rn.id="tabs";let n_=[["now","\u{1F552}",__t(489)],["map","\u{1F5FA}\uFE0F",__t(492)],["line","\u{1F4CA}",__t(493)],["set","\u2699\uFE0F",__t(494)]];Rn.innerHTML=n_.map(([o,u,f])=>`<button type="button" data-tab="${o}"><span>${u}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Rn);let lr=document.createElement("i");lr.className="tind",lr.setAttribute("aria-hidden","true"),Rn.prepend(lr);let Up=o=>[...Rn.querySelectorAll("[data-tab]")].find(u=>{let f=u.getBoundingClientRect();return o>=f.left&&o<f.right}),Vu=o=>{!o||!o.offsetWidth||(lr.style.width=o.offsetWidth+"px",lr.style.height=o.offsetHeight+"px",lr.style.top=o.offsetTop+"px",lr.style.transform=`translateX(${o.offsetLeft}px)`)},zr=()=>Vu(Rn.querySelector("[data-tab].on")),i_=()=>{try{let o=window.Capacitor,u=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;u&&u.selectionChanged().catch(()=>{})}catch{}},jn={on:!1,b:null,moved:!1,until:0};Rn.addEventListener("pointerdown",o=>{let u=Up(o.clientX);if(u){jn.on=!0,jn.b=u,jn.moved=!1,Rn.classList.add("drag"),Rn.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),u.classList.add("hov"),Vu(u);try{Rn.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,_=f&&f.Plugins&&f.Plugins.Haptics;_&&f.isNativePlatform()&&_.selectionStart().catch(()=>{})}catch{}}}),Rn.addEventListener("pointermove",o=>{if(!jn.on)return;let u=Up(o.clientX);u&&u!==jn.b&&(jn.b.classList.remove("hov"),u.classList.add("hov"),jn.b=u,jn.moved=!0,Vu(u),i_())});let Fp=o=>{if(jn.on){jn.on=!1,Rn.classList.remove("drag"),Rn.querySelectorAll(".hov").forEach(u=>u.classList.remove("hov"));try{let u=window.Capacitor,f=u&&u.Plugins&&u.Plugins.Haptics;f&&u.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&jn.b?(jn.until=Date.now()+500,jn.b.dataset.tab!==Ze.cur?hr(jn.b.dataset.tab):zr()):zr()}};Rn.addEventListener("pointerup",()=>Fp(!0)),Rn.addEventListener("pointercancel",()=>Fp(!1)),addEventListener("resize",()=>setTimeout(zr,60));try{new ResizeObserver(()=>zr()).observe(Rn)}catch{}let $r=document.createElement("div");$r.id="tabL",document.body.appendChild($r);let cr=document.createElement("div");cr.id="tabA",cr.className="box",document.body.appendChild(cr);let Hu=(o,u)=>{o&&(Ze.home.has(o)||Ze.home.set(o,[o.parentNode,o.nextSibling]),u.appendChild(o))},Op=()=>{for(let[o,[u,f]]of Ze.home)try{u.insertBefore(o,f&&f.parentNode===u?f:null)}catch{}Ze.home.clear()};function Gu(){let o=ct.size===1?[...ct][0]:"",u=$.alerts.filter(_=>[..._.fams].some(S=>ct.has(S))).length,f=[At,xe,Yt,Lt,o,u].join("|");$r._k!==f&&($r._k=f,$r.innerHTML=`<button type="button" data-tl="stats" class="${At?"on":""}">\u{1F4CA} ${__t(495)}</button><button type="button" data-tl="alr" class="${xe?"on":""}">\u26A0\uFE0F ${u}${u===1?__t(280):__t(281)}</button>${o?`<button type="button" data-tl="line" class="${Yt?"on":""}">\u{1F4CB} ${g(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,$r.querySelectorAll("[data-tl]").forEach(_=>_.onclick=()=>{let S=_.dataset.tl;At=S==="stats",xe=S==="alr",Yt=S==="line"?o:"",Lt=!1,wt=null,ge=-1,At&&(Ne.at=0),d._h="",ke(),Gu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let s_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",r_=()=>vt(new Date).ymd.replace(/-/g,"");function eo(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(s_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let u;try{u=JSON.parse(o)}catch{return}if(!u||!u.gen||!Array.isArray(u.days)||!u.trips||u.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=r_(),_=t.days.indexOf(f),S=u.days.indexOf(f),w=_<0?0:lt.filter(L=>L.day===_).length,P=0;if(S>=0)for(let L of u.trips)L[0]===S&&P++;let D=S>=0&&w&&(Math.abs(P-w)/w>.1||!P);if(_<0||_>=t.days.length-2||D){try{sessionStorage.setItem("rod_packmsg",D?"1":"")}catch{}location.reload();return}no.v=!0}).catch(()=>{})}let no={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&no.v?(no.v=!1,no.reload=!0):!document.hidden&&no.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>hn("\u{1F5D3}\uFE0F "+__t(496)),1500))}catch{}if(setTimeout(eo,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(eo.at||0)>6*36e5&&(eo.at=Date.now(),eo())}),eo.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,u=x("#ver");u&&u.firstChild&&u.firstChild.nodeType===3&&(u.firstChild.textContent=u.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Hl(){Op();let o=window.__L||"es",u=ri.mode;cr.innerHTML=`<h3>${__t(494)}</h3>
      <h4>\u{1F310} ${__t(497)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,_])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${_}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(498)}</h4><div class="seg2">${[["auto",__t(301)],["light",__t(499)],["dark",__t(500)]].map(([f,_])=>`<button type="button" data-th="${f}" class="${u===f?"on":""}">${_}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(501)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let _=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(301)],["0","Normal"],["1",__t(502)]].map(([S,w])=>`<button type="button" data-big="${S}" class="${_===S?"on":""}">${w}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(503)}</small>`})()}
      <h4>\u{1F514} ${__t(504)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(505)}</small>${Bl().length?"":`<small class="tabAhint">${__t(506)}</small>`}${(()=>{let f=Bl();return f.length>1?`<small class="tabAhint">${__t(507)}</small><div class="alch">${f.map(_=>`<button type="button" data-al="${g(_)}" class="ln${or.has(_)?" off":""}" style="--c:${W[_]}">${g(_)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(508)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(509)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,cr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let _=f.dataset.al,S=Bl();or.has(_)?or.delete(_):S.filter(w=>!or.has(w)).length>1&&or.add(_);try{localStorage.setItem("rod_aloff",JSON.stringify([...or]))}catch{}De(!0),Hl()}),cr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let _=f.dataset.big;try{_==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",_)}catch{}window.__txt&&window.__txt(),Hl(),De(!0)}),cr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ri.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ri.mode)}catch{}Al(),Hl()}),Hu(x("#bell"),x("#tabAbell")),Hu(x("#src"),x("#tabArt")),Hu(x("#ver"),x("#tabAinf"))}function hr(o){if(!Ze.on)return;let u=Ze.cur;if(Ze.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",Rn.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),zr(),o==="line")(wt||ge>=0)&&(Ze.keep={t:wt,s:ge,sk:Ze.sk}),!At&&!xe&&!Yt&&!Lt&&(At=!0,Ne.at=0),wt=null,ge=-1,d._h="",ke(),Gu();else if(u==="line"){At=xe=Lt=!1,Yt="";let f=Ze.keep;Ze.keep=null,f&&o==="map"&&!wt&&ge<0&&(wt=f.t,ge=f.s,Ze.sk=f.sk),d._h="",ke()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Tu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Hl(),o==="now"&&(De(!0),requestAnimationFrame(kl)),Me=0,a()}Rn.onclick=o=>{if(Date.now()<jn.until)return;let u=o.target.closest("[data-tab]");u&&hr(u.dataset.tab)},window.__rodTabSync=()=>{if(!Ze.on)return;let o=wt?"t"+(wt.num||wt.vtid):ge>=0?"s"+ge:"",u=o!==Ze.sk;Ze.sk=o,o&&u&&Ze.cur!=="map"?hr("map"):(xe||Yt||Lt)&&Ze.cur!=="line"&&Ze.cur!=="map"&&hr("line"),Ze.cur==="line"&&Gu()};function Wu(){let o=Vl.matches||document.documentElement.classList.contains("cap");if(o!==Ze.on)if(Ze.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(zr)),o||(window.__mapHidden=!1),o){let u="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(u=f))}catch{}hr(u)}else delete document.documentElement.dataset.tab,Op()}Vl.addEventListener?Vl.addEventListener("change",Wu):Vl.addListener(Wu),Wu();{let o=x("#rc"),u=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(u).observe(o),u()}let Xu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},qu=new RegExp("("+Object.keys(Xu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),a_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Xu[o]||Xu[o+"\uFE0F"]||""}</svg></span>`;function o_(o){let u=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],_;for(;_=u.nextNode();)_.parentElement&&_.parentElement.closest(".ico,script,style,textarea,input")||(qu.lastIndex=0,qu.test(_.nodeValue)&&f.push(_));for(let S of f){let w=document.createElement("span");w.innerHTML=g(S.nodeValue).replace(qu,(P,D)=>a_(D)),S.replaceWith(...w.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(S=>x(S)).filter(Boolean),u=!1,f=()=>{if(!u){u=!0;try{let S=0;o().forEach(w=>{S+=o_(w)}),S&&Ze.on&&kl()}finally{u=!1}}},_=new MutationObserver(()=>{u||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(S=>_.observe(S,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:zn,LASTPIN:oi,xferCands:gp,bestXfer:Du,xferFirst:Lu,nowState:se,XMIN:mp,pinNotify:Cp,toast:hn,cardEta:Za,HOME:tn,WORK:Ye,ONB:Zt,alertForMe:Mp,whereAmI:Nu,departuresFor:ai,DEPS:Ut,tripByNum:Xa,delayOf:pt,TID:dt,SID:Xt,byDay:Q,get days(){return t.days},get hist(){return Ne},get past(){return It.cur},get cols(){return dn.mesh?dn.mesh.count:-1},get dist(){return r.dist},get follow(){return Ft},get selTrip(){return wt},ST:E,TR:lt,FAM:H,act:()=>re,setSpeed:Np,RT:$,pollRT:ue,nowState:se,posAt:Ds,activeTrips:C,LL:St,select:o=>{wt=o,ke()}}}var La=window.__DATA__;var ze=i=>document.querySelector(i),Rs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Jn=(i,t,e)=>Math.min(e,Math.max(t,i)),If=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ni=ze("#c"),_l=new nu({canvas:ni,antialias:!0});_l.setPixelRatio(Math.min(devicePixelRatio||1,2));var Is=new wo;Is.background=new ve(15659509);var xu=35,fs=new Yn(xu,1,2,1500);Is.add(new qo(16777215,9080992,1));var n0=new Zo(16777215,.9);n0.position.set(-40,-70,90);Is.add(n0);var us=100/La.w,pl=La.w/2,ml=La.h/2,_n=[],Pf=new $i;Is.add(Pf);var fu=new Sr({color:16777215,transparent:!0,opacity:.55});for(let i of La.m){let t=new $i,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let y of i.g){let M=y.map(x=>{let g=[];for(let B=0;B<x.length;B+=2)g.push(new kt((x[B]-pl)*us,(x[B+1]-ml)*us));return g.length>1&&g[0].equals(g[g.length-1])&&g.pop(),g}).filter(x=>x.length>=3);if(!M.length)continue;let I=new xa(M[0]);for(let x=1;x<M.length;x++)I.holes.push(new br(M[x]));e.push(I);for(let x of M[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of M)n.push(new Io(new vn().setFromPoints(x.map(g=>new q(g.x,g.y,0))),fu))}if(!e.length)continue;let c;try{c=new $o(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new Go({color:13421772}),d=new Nn(c,h);t.add(d);let v=new $i;n.forEach(y=>v.add(y)),v.position.z=.04,Pf.add(v),t.scale.z=.01,Pf.add(t);let m={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=m,_n.push(m)}var bT=_n.map(i=>i.mesh),Zg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},i0=0,s0=0;for(let i of _n){for(let t of i.rings)i0+=Zg(t[0])-t.slice(1).reduce((e,n)=>e+Zg(n),0);s0+=i.area}var Ub=Math.sqrt(s0/i0),hu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},r0={"08":__t(510),17:__t(511),25:__t(512),43:__t(513)},Bf="sqrt",kf="pop",Cf=0,Lf=0,Ra=1,dl=1,Fb={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Df=i=>kf==="pop"?i.pop:i.pop/i.area,cu=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ve(i));function Ob(i){i=Jn(i,0,1)*(cu.length-1);let t=Math.min(Math.floor(i),cu.length-2);return cu[t].clone().lerp(cu[t+1],i-t)}var Ia=i=>i>=100?Rs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Bb(){Lf=0;for(let i of _n)Lf+=i.pop;[..._n].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[..._n].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),l0()}var a0=new ve("#d3d8e2"),o0=new ve("#eceff3");window.__mapTheme=i=>{Is.background=new ve(i?856345:15659509),o0.set(i?"#2b3242":"#eceff3"),a0.set(i?"#1a1f29":"#d3d8e2"),fu.color.set(i?856345:16777215),fu.opacity=i?.7:.55,zf.color.set(i?329483:2764864),$f.color.set(i?9081766:16777215);for(let t of _n)t.base&&vu(t);Fn()};function vu(i){i.mat.color.copy(i.base).lerp(o0,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(a0,.8)}function l0(){Ra=1,dl=1e12;for(let e of _n){let n=Df(e);Ra=Math.max(Ra,n),dl=Math.min(dl,n)}let i=Math.log10(Math.max(dl,.01)),t=Math.log10(Ra);for(let e of _n)e.base=Ob((Math.log10(Math.max(Df(e),.01))-i)/(t-i)),vu(e);ze("#lmin").textContent=Ia(dl),ze("#lmax").textContent=Ia(Ra),ze("#lname").textContent=kf==="pop"?__t(514):__t(515),yu()}function yu(){let i=Fb[Bf],t=i(Ra),e=24*Cf;for(let n of _n)n.zt=Cf<=.001?.01:Math.max(.12*Math.min(1,Cf),e*i(Df(n))/t)*(n.inF?1:.1);Fn()}var Jg=Object.fromEntries(_n.map(i=>[i.code,i])),uu=[],c0=[];for(let i of La.bd){let t=Jg[i.a],e=Jg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)c0.push((i.p[n]-pl)*us,(i.p[n+1]-ml)*us,0,(i.p[n+2]-pl)*us,(i.p[n+3]-ml)*us,0),uu.push(t,e)}var pu=new Xi;pu.setPositions(c0);var zf=new as({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),$f=new as({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[zf,$f].forEach((i,t)=>{let e=new Ir(pu,i);e.frustumCulled=!1,e.renderOrder=10+t,Is.add(e)});function kb(){let i=pu.attributes.instanceStart.data.array;for(let t=0;t<uu.length;t+=2){let e=Math.max(uu[t].z,uu[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}pu.attributes.instanceStart.data.needsUpdate=!0}var mu={};for(let i of Object.keys(hu)){let t=_n.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,c=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),c=Math.max(c,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=hu[i],h.title=__t(516)+r0[i],h.onclick=()=>Jb("pr:"+i),document.body.appendChild(h),mu[i]={el:h,p:new q(n/e,s/e,0),cx:(r+a)/2,cy:(l+c)/2,ext:Math.max(a-r,c-l),ext2:[a-r,c-l],area:e,name:hu[i]}}var Rf=new q;function zb(){for(let i in mu){let t=mu[i];Rf.copy(t.p).project(fs),t.el.style.transform=`translate(-50%,-50%) translate(${(Rf.x*.5+.5)*innerWidth}px,${(-Rf.y*.5+.5)*innerHeight}px)`}}var Sn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Te={...Sn};function $b(){let i=innerWidth/innerHeight,t=Math.tan(xu*Math.PI/360);return Math.max(La.h*us*1.1,100*1.1/i)/(2*t)}var Vb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Te.yaw=Math.round(Te.yaw/(2*Math.PI))*2*Math.PI,Te.tilt=0,Fn()});function Vf(){Object.assign(Te,{tilt:0,yaw:0,dist:$b(),tx:0,ty:0}),Fn()}function Hb(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Sn;fs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),fs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),fs.lookAt(n,s,0)}var fl=!0,jg=performance.now(),gl=new Map;function Fn(){fl=!0}function h0(i){requestAnimationFrame(h0);let t=Jn((i-jg)/1e3,0,.05);jg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Sn)){let r=Te[s]-Sn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Sn[s]+=r*e,n=!0):Sn[s]=Te[s]}for(let s of _n){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of gl){let a=(i-r)/1800;a>=1?(gl.delete(s),Ur(s)):Ur(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(fl=!0),window.__mapHidden){fl=!0;return}if(n||fl){Vb.style.transform=`rotate(${Sn.yaw}rad) scaleY(${(.55+.45*Math.cos(Sn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Te.yaw/2))<.02&&Te.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(517):__t(518))}Hb(),kb(),zb(),window.__rodFrame&&window.__rodFrame(),_l.render(Is,fs),fl=n,ze("#tilt").value=Math.round(Te.tilt*180/Math.PI),ze("#yaw").value=Math.round(((Te.yaw*180/Math.PI+180)%360+360)%360-180)}}function u0(){_l.setSize(innerWidth,innerHeight,!1),fs.aspect=innerWidth/innerHeight,fs.updateProjectionMatrix(),zf.resolution.set(innerWidth,innerHeight),$f.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Fn()}addEventListener("resize",()=>{u0(),cn.length&&tr()});ni.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Te.yaw+=n*.0035}else i.ctrlKey?Te.dist=Jn(Te.dist*Math.exp(e*.01),6,400):Te.tilt=Jn(Te.tilt+e*.002,0,1.32);Fn()},{passive:!1});ni.addEventListener("contextmenu",i=>i.preventDefault());var ds=new Map,fi=null,Lr=0,Nf=0,Uf=0;var gu=null;ni.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),cn.length&&setTimeout(tr,50)),ni.setPointerCapture(i.pointerId),ds.set(i.pointerId,{x:i.clientX,y:i.clientY}),ds.size===1&&(fi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),ds.size===2){let[t,e]=[...ds.values()];Lr=Math.hypot(t.x-e.x,t.y-e.y),Nf=Math.atan2(e.y-t.y,e.x-t.x),Uf=(t.y+e.y)/2,gu={mode:null,rot:0,sc:0,tl:0},fi&&(fi.multi=!0)}Hf()});ni.addEventListener("pointermove",i=>{let t=ds.get(i.pointerId);if(!t){Cs={x:i.clientX,y:i.clientY},Ff||(Ff=requestAnimationFrame(Wb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,ds.size===2){let[s,r]=[...ds.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=l-Nf;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=Lr?a-Lr:0,v=c-Uf,m=gu||(gu={mode:null,rot:0,sc:0,tl:0});m.rot+=h,m.sc+=d,m.tl+=v,m.mode?m.mode==="zoom"&&Math.abs(m.rot)>.45&&(m.mode="rotate"):Math.abs(m.rot)>.3?m.mode="rotate":Math.abs(m.tl)>30&&Math.abs(m.sc)<18?m.mode="tilt":Math.abs(m.sc)>12&&(m.mode="zoom"),(m.mode==="zoom"||m.mode==="rotate")&&Lr&&(Te.dist=Jn(Te.dist*Lr/a,6,400)),m.mode==="rotate"&&(Te.yaw+=h,Sn.yaw=Te.yaw),m.mode==="tilt"&&(Te.tilt=Jn(Te.tilt-v*.006,0,1.32),Sn.tilt=Te.tilt),Lr=a,Nf=l,Uf=c,Fn();return}if(fi.moved+=Math.abs(e)+Math.abs(n),fi.rot||i.altKey)Te.yaw+=e*.005,Te.tilt=Jn(Te.tilt+n*.004,0,1.32),Sn.yaw=Te.yaw,Sn.tilt=Te.tilt;else{let s=2*Sn.dist*Math.tan(xu*Math.PI/360)/innerHeight,r=Math.sin(Sn.yaw),a=Math.cos(Sn.yaw),l=1/Math.max(Math.cos(Sn.tilt),.3);Te.tx=Jn(Te.tx-a*e*s+-r*n*s*l,-70,70),Te.ty=Jn(Te.ty-r*e*s+a*n*s*l,-70,70),Sn.tx=Te.tx,Sn.ty=Te.ty}Fn()});var d0=i=>{let t=fi&&!fi.rot&&!fi.multi&&fi.moved<(fi.touch?12:6)&&i.type==="pointerup"&&ds.size===1,e=fi&&fi.touch;ds.delete(i.pointerId),Lr=0,gu=null,ds.size||(fi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ni.addEventListener("pointerup",d0);ni.addEventListener("pointercancel",d0);ni.addEventListener("dblclick",Vf);addEventListener("keydown",i=>{i.key==="Alt"&&(ni.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ni.style.cursor="")});addEventListener("blur",()=>{ni.style.cursor=""});var Gb=new jo,Kg=new kt,Cs=null,Ff=0,Dr=null;function Wb(){if(Ff=0,!Cs||fi)return;Kg.set(Cs.x/innerWidth*2-1,-(Cs.y/innerHeight)*2+1),Gb.setFromCamera(Kg,fs);let i=null;if(i!==Dr){let e=Dr;Dr=i,e&&Ur(e),i&&Ur(i),Fn()}let t=window.__rodHover&&window.__rodHover(Cs.x,Cs.y);if(t){Pr.innerHTML=t,Pr.style.display="block";let e=Pr.offsetWidth,n=Pr.offsetHeight;Pr.style.left=Jn(Cs.x+14,6,innerWidth-e-6)+"px",Pr.style.top=Jn(Cs.y+14,6,innerHeight-n-6)+"px",ni.style.cursor="pointer"}else Hf(),ni.style.cursor=""}ni.addEventListener("pointerleave",()=>{if(Cs=null,Dr){let i=Dr;Dr=null,Ur(i),Fn()}Hf()});var Pr=ze("#tip");function Hf(){Pr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{kf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),l0()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Bf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),yu()});ze("#yaw").oninput=i=>{Te.yaw=+i.target.value*Math.PI/180,Fn()};ze("#tilt").oninput=i=>{Te.tilt=+i.target.value*Math.PI/180,Fn()};ze("#zin").onclick=()=>{Te.dist=Jn(Te.dist*.75,6,400),Fn()};ze("#zout").onclick=()=>{Te.dist=Jn(Te.dist/.75,6,400),Fn()};ze("#rst").onclick=Vf;var Qg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],cn=[],t0={},Xb=i=>t0[i]||(t0[i]=new Sr({color:i}));function f0(i,t){i.og.children.forEach(e=>e.material=t?Xb(t):fu)}function Ur(i,t=0){let e=i.mat.emissive;i===Dr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Gf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(xu*Math.PI/360),c=i.length===1?Jn(i[0].size*3.2+14,14,120):Jn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Te,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Fn()}var Qs=ze("#q"),yi=ze("#list"),ln=ze("#mcs");function Su(i,t=!0){if(yi.style.display="none",Qs.value="",!i.sel){cn.length>=6&&p0(cn[0].o,!0);let e=new Set(cn.map(s=>s.color)),n=Qg.find(s=>!e.has(s))||Qg[0];i.sel={o:i,color:n,tint:new ve(n).multiplyScalar(.12)},cn.push(i.sel),f0(i,n)}ln.classList.contains("min")&&xl(!1),gl.set(i,performance.now()),Ur(i),t&&Gf([i],Math.max(Te.tilt,.9)),tr()}function p0(i,t){let e=cn.indexOf(i.sel);e>=0&&cn.splice(e,1),i.sel=null,f0(i,null),Ur(i),Fn(),t||tr()}function m0(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=cn.map(d=>{let v=1e9,m=-1e9,y=1e9,M=-1e9;for(let I of d.o.rings)for(let x=0;x<I[0].length;x+=2)v=Math.min(v,I[0][x]),m=Math.max(m,I[0][x]),y=Math.min(y,I[0][x+1]),M=Math.max(M,I[0][x+1]);return{x0:v,x1:m,y0:y,y1:M}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;cn.forEach((d,v)=>{let m=r[v],y=(m.x0+m.x1)/2,M=(m.y0+m.y1)/2;s.beginPath();for(let I of d.o.rings)for(let x of I)for(let g=0;g<x.length;g+=2){let B=e/2+(x[g]-y)*l,k=n/2-(x[g+1]-M)*l;g?s.lineTo(B,k):s.moveTo(B,k),g===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let c=l/Ub,h=[.5,1,2,5,10,20,50,100].find(d=>d*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function tr(){if(!cn.length){ln.innerHTML="",ln.style.display="none",xl(!1);return}if(ln.style.display="flex",innerWidth<=640){let e=ze("#inf").getBoundingClientRect().bottom;ln.style.top=Math.round(e+8)+"px",ln.style.maxHeight=Math.max(110,Math.min(innerHeight*(ze("#rc").classList.contains("min")?.7:.4),ze("#rc").getBoundingClientRect().top-e-16))+"px",ln.style.width=""}else if(innerHeight<=500){let e=ze("#inf").getBoundingClientRect().bottom;ln.style.top=Math.round(e+8)+"px",ln.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",ln.style.width="min(290px, 40vw)"}else ln.style.top="",ln.style.maxHeight="",ln.style.width="";window.__fitMcs&&window.__fitMcs();let i=cn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${hu[s.pr]}</em></div><div class="mb">${Rs(s.pop)}${__t(524)}${Ia(s.area)} km\xB2 \xB7 ${Ia(s.pop/s.area)}${__t(525)}${s.rankP}${__t(526)}`}).join("");if(cn.length>1){let e=s=>Math.max(...cn.map(s)),n=[[__t(527),s=>s.o.pop,Rs],[__t(528),s=>s.o.area,Ia],[__t(529),s=>s.o.pop/s.o.area,Ia]];if(i+=`${__t(530)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${cn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),cn.length===2){let[s,r]=cn.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],c=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(531)}${c(a.pop,l.pop)}${__t(532)}${l.name}${__t(533)}${c(a.area,l.area)}\xD7 ${a.area>=l.area?__t(534):__t(535)}.</small>`}i+="</div>"}ln.innerHTML=i,ln.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),p0(cn[+e.dataset.x].o)}),ln.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Gf([cn[+e.dataset.i].o],Math.max(Te.tilt,.9)),e.onmouseenter=()=>{let n=cn[+e.dataset.i].o;gl.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=cn.splice(s,1);cn.splice(r,0,a),tr();let l=ze("#sil");l&&l.classList.add("flash")}}});let t=ze("#sil");t&&m0(t)}Qs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Qs.value);return}let i=If(Qs.value.trim());if(!i){yi.style.display="none";return}let t=[],e=[];for(let s of _n){let r=If(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);yi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Rs(s.pop)}</em></li>`).join("")||__t(491),yi.style.display="block",yi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Su(n[+s.dataset.i])),yi._r=n});Qs.addEventListener("keydown",i=>{i.key==="Enter"&&yi._pick?yi._pick(0):i.key==="Enter"&&yi._r&&yi._r[0]&&Su(yi._r[0]),i.key==="Escape"&&(Qs.value="",yi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Qs&&g0()});var e0=0;addEventListener("resize",()=>{clearTimeout(e0),e0=setTimeout(()=>{let i=ze("#sil");i&&m0(i)},120)});var _u=null,Of=ze("#chip");function qb(i,t,e=.8){_u={codes:new Set(i.map(n=>n.code)),label:t},_n.forEach(n=>{n.inF=_u.codes.has(n.code),vu(n)}),Of.innerHTML=`${__t(536)}${t}</b> \xB7 ${i.length}${i.length===1?__t(537):__t(538)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Of.style.display="flex",ze("#chx").onclick=g0,yu(),Gf(i,e),i.slice(0,40).forEach(n=>gl.set(n,performance.now()))}function g0(){_u&&(_u=null,_n.forEach(i=>{i.inF=!0,vu(i)}),Of.style.display="none",yu())}var Yb="prov";function Zb(i){let t=[..._n].sort((a,l)=>l.pop-a.pop),e=[..._n].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[_n.filter(a=>a.pr===s),r0[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(539)]:[e.slice(0,10),__t(540)];if(n==="low")return s==="pop"?[t.slice(-10),__t(541)]:[e.slice(-10),__t(542)];if(n==="size")return[_n.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Rs(+s)}${__t(543)}`:+s==0?`${__t(544)}${Rs(+r)}${__t(545)}`:`${Rs(+s)} \u2013 ${Rs(+r-1)}${__t(545)}`];if(n==="n50"){let a=0,l=0;for(let c of t)if(a+=c.pop,l++,a>=Lf/2)break;return[t.slice(0,l),`${__t(546)}`]}return[[],""]}function Jb(i){let[t,e]=Zb(i);t.length&&qb(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Yb=i.dataset.tab,ze("#dbody").scrollTop=0});var Nr=ze("#rc"),du=ze("#mcstab");function Pa(i){Nr.classList.toggle("min",i),ze("#rcgrab span").textContent=i?__t(588):__t(589),cn.length&&tr()}function xl(i){ln.classList.toggle("min",i),ln.style.transform="",ln.style.opacity="",du.classList.toggle("on",i&&cn.length>0),i&&(du.textContent=`\u25B8 ${cn.length} ${cn.length===1?"ficha":"fichas"}`,du.style.top=ln.style.top||"124px")}function Wf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Mu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(l,c)>10&&(s.lock=Math.abs(l)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(l,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}ze("#rcgrab").onclick=()=>Pa(!Nr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Pa(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var _0=()=>innerWidth>640;Wf(Nr,{axis:"y",onEnd:(i,t)=>{if(!_0())if(t>40&&!Nr.classList.contains("min")){let e=ze("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Pa(!0)}else t<-30&&Nr.classList.contains("min")&&Pa(!1)}});Wf(Nr,{axis:"x",onEnd:i=>{_0()&&(i>50?Pa(!0):i<-30&&Nr.classList.contains("min")&&Pa(!1))}});Wf(ln,{axis:"x",onMove:i=>{i<0&&(ln.classList.add("sw"),ln.style.transform=`translateX(${i}px)`,ln.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{ln.classList.remove("sw"),i<-60?(xl(!0),window.__rodHide&&!cn.length&&window.__rodHide()):(ln.style.transform="",ln.style.opacity="")}});du.onclick=()=>{xl(!1),tr()};ze("#dtoggle").onclick=()=>{let i=ze("#dp").classList.toggle("open");ze("#rc").classList.toggle("dopen",i),ze("#dtoggle").textContent=i?Mu.matches&&innerWidth<=640?__t(590):__t(591):__t(592),window.__rodCard&&window.__rodCard()};var Mu=matchMedia("(max-width:640px), (max-height:500px)");function x0(){let i=ze("#leg");Mu.matches?ze("#rc").insertBefore(i,ze("#dtoggle")):document.body.appendChild(i),cn.length&&tr()}Mu.addEventListener("change",x0);x0();u0();Bb();Vf();Object.assign(Sn,Te);for(let i of _n)i.z=.01;requestAnimationFrame(h0);Yg({scene:Is,camera:fs,renderer:_l,goal:Te,cur:Sn,invalidate:Fn,flyTo:(i,t,e,n)=>{Object.assign(Te,{tx:(i-pl)*us,ty:(t-ml)*us,dist:e,tilt:n}),Fn()},K:us,CX:pl,CY:ml,mcs:ln,q:Qs,list:yi,munis:_n,select:Su,norm:If,fmt:Rs,clamp:Jn,mcsMin:xl});window.__app={scene:Is,renderer:_l,camera:fs,munis:_n,labs:mu,goal:Te,cur:Sn,select:Su,get mode(){return Bf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(598):__t(599)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
