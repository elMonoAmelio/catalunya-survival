(()=>{var _m=0,Cd=1,xm=2;var jo=1,vm=2,Sa=3,$s=0,Qn=1,ts=2,es=0,Ma=1,Rd=2,Id=3,Pd=4,ym=5;var vr=100,Sm=101,Mm=102,bm=103,wm=104,Em=200,Tm=201,Am=202,Cm=203,Ld=204,Dd=205,Rm=206,Im=207,Pm=208,Lm=209,Dm=210,Nm=211,Um=212,Fm=213,Om=214,gc=0,_c=1,xc=2,la=3,vc=4,yc=5,Sc=6,Mc=7,ih=0,Bm=1,km=2,Vi=0,Nd=1,Ud=2,Fd=3,Od=4,Bd=5,kd=6,zd=7;var $d=300,Vs=301,yr=302,sh=303,rh=304,Ko=306,bc=1e3,Yi=1001,wc=1002,Pn=1003,zm=1004;var Qo=1005;var On=1006,ah=1007;var Hs=1008;var hi=1009,Vd=1010,Hd=1011,ba=1012,oh=1013,Hi=1014,Ci=1015,Gi=1016,lh=1017,ch=1018,wa=1020,Gd=35902,Wd=35899,Xd=1021,qd=1022,Ri=1023,Ji=1026,Gs=1027,hh=1028,uh=1029,Ws=1030,dh=1031;var fh=1033,tl=33776,el=33777,nl=33778,il=33779,ph=35840,mh=35841,gh=35842,_h=35843,xh=36196,vh=37492,yh=37496,Sh=37488,Mh=37489,sl=37490,bh=37491,wh=37808,Eh=37809,Th=37810,Ah=37811,Ch=37812,Rh=37813,Ih=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Uh=37819,Fh=37820,Oh=37821,Bh=36492,kh=36494,zh=36495,$h=36283,Vh=36284,rl=36285,Hh=36286;var go=2300,Ec=2301,pc=2302,md=2303,gd=2400,_d=2401,xd=2402;var $m=3200;var Gh=0,Vm=1,Ms="",gi="srgb",_o="srgb-linear",xo="linear",tn="srgb";var mc=7680;var Hm=519,Gm=512,Wm=513,Xm=514,Wh=515,qm=516,Ym=517,Xh=518,Zm=519,Yd=35044;var Zd="300 es",ki=2e3,ca=2001;function d_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function f_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jm(){let i=vo("canvas");return i.style.display="block",i}var Dp={},ha=null;function yo(...i){let t="THREE."+i.shift();ha?ha("log",t,...i):console.log(t,...i)}function jm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=jm(i);let t="THREE."+i.shift();if(ha)ha("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ye(...i){i=jm(i);let t="THREE."+i.shift();if(ha)ha("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function dr(...i){let t=i.join(" ");t in Dp||(Dp[t]=!0,ve(...i))}function Km(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Qm={[gc]:_c,[xc]:Sc,[vc]:Mc,[la]:yc,[_c]:gc,[Sc]:xc,[Mc]:vc,[yc]:la},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,uo=Math.PI/180,ua=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Jd(i,t){return(i%t+t)%t}function p_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function m_(i,t,e){return i!==t?(e-i)/(t-i):0}function fo(i,t,e){return(1-e)*i+e*t}function g_(i,t,e,n){return fo(i,t,1-Math.exp(-e*n))}function __(i,t=1){return t-Math.abs(Jd(i,t*2)-t)}function x_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function v_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function y_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function S_(i,t){return i+Math.random()*(t-i)}function M_(i){return i*(.5-Math.random())}function b_(i){i!==void 0&&(Np=i);let t=Np+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w_(i){return i*uo}function E_(i){return i*ua}function T_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function A_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function C_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function R_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),p=a((t-n)/2),y=r((n-t)/2),M=a((n-t)/2);switch(s){case"XYX":i.set(l*d,c*v,c*p,l*h);break;case"YZY":i.set(c*p,l*d,c*v,l*h);break;case"ZXZ":i.set(c*v,c*p,l*d,l*h);break;case"XZX":i.set(l*d,c*M,c*y,l*h);break;case"YXY":i.set(c*y,l*d,c*M,l*h);break;case"ZYZ":i.set(c*M,c*y,l*d,l*h);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jd={DEG2RAD:uo,RAD2DEG:ua,generateUUID:Zi,clamp:Re,euclideanModulo:Jd,mapLinear:p_,inverseLerp:m_,lerp:fo,damp:g_,pingpong:__,smoothstep:x_,smootherstep:v_,randInt:y_,randFloat:S_,randFloatSpread:M_,seededRandom:b_,degToRad:w_,radToDeg:E_,isPowerOfTwo:T_,ceilPowerOfTwo:A_,floorPowerOfTwo:C_,setQuaternionFromProperEuler:R_,normalize:nn,denormalize:Bi},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ki=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],d=n[s+2],v=n[s+3],p=r[a+0],y=r[a+1],M=r[a+2],I=r[a+3];if(v!==I||c!==p||h!==y||d!==M){let x=c*p+h*y+d*M+v*I;x<0&&(p=-p,y=-y,M=-M,I=-I,x=-x);let m=1-l;if(x<.9995){let B=Math.acos(x),k=Math.sin(B);m=Math.sin(m*B)/k,l=Math.sin(l*B)/k,c=c*m+p*l,h=h*m+y*l,d=d*m+M*l,v=v*m+I*l}else{c=c*m+p*l,h=h*m+y*l,d=d*m+M*l,v=v*m+I*l;let B=1/Math.sqrt(c*c+h*h+d*d+v*v);c*=B,h*=B,d*=B,v*=B}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],d=n[s+3],v=r[a],p=r[a+1],y=r[a+2],M=r[a+3];return t[e]=l*M+d*v+c*y-h*p,t[e+1]=c*M+d*p+h*v-l*y,t[e+2]=h*M+d*y+l*p-c*v,t[e+3]=d*M-l*v-c*p-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(s/2),v=l(r/2),p=c(n/2),y=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=p*d*v+h*y*M,this._y=h*y*v-p*d*M,this._z=h*d*M+p*y*v,this._w=h*d*v-p*y*M;break;case"YXZ":this._x=p*d*v+h*y*M,this._y=h*y*v-p*d*M,this._z=h*d*M-p*y*v,this._w=h*d*v+p*y*M;break;case"ZXY":this._x=p*d*v-h*y*M,this._y=h*y*v+p*d*M,this._z=h*d*M+p*y*v,this._w=h*d*v-p*y*M;break;case"ZYX":this._x=p*d*v-h*y*M,this._y=h*y*v+p*d*M,this._z=h*d*M-p*y*v,this._w=h*d*v+p*y*M;break;case"YZX":this._x=p*d*v+h*y*M,this._y=h*y*v+p*d*M,this._z=h*d*M-p*y*v,this._w=h*d*v-p*y*M;break;case"XZY":this._x=p*d*v-h*y*M,this._y=h*y*v-p*d*M,this._z=h*d*M+p*y*v,this._w=h*d*v+p*y*M;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],d=e[6],v=e[10],p=n+l+v;if(p>0){let y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(d-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>l&&n>v){let y=2*Math.sqrt(1+n-l-v);this._w=(d-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(l>v){let y=2*Math.sqrt(1+l-n-v);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+d)/y}else{let y=2*Math.sqrt(1+v-n-l);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*c,this._y=s*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-s*l,this._w=a*d-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,e=Math.sin(e*h)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Up.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Up.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+c*h+a*v-l*d,this.y=n+c*d+l*h-r*v,this.z=s+c*v+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hu.copy(this).projectOnVector(t),this.sub(Hu)}reflect(t){return this.sub(Hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hu=new Z,Up=new Ki,Ae=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],v=n[7],p=n[2],y=n[5],M=n[8],I=s[0],x=s[3],m=s[6],B=s[1],k=s[4],R=s[7],E=s[2],O=s[5],X=s[8];return r[0]=a*I+l*B+c*E,r[3]=a*x+l*k+c*O,r[6]=a*m+l*R+c*X,r[1]=h*I+d*B+v*E,r[4]=h*x+d*k+v*O,r[7]=h*m+d*R+v*X,r[2]=p*I+y*B+M*E,r[5]=p*x+y*k+M*O,r[8]=p*m+y*R+M*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=d*a-l*h,p=l*c-d*r,y=h*r-a*c,M=e*v+n*p+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/M;return t[0]=v*I,t[1]=(s*h-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=p*I,t[4]=(d*e-s*c)*I,t[5]=(s*r-l*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gu=new Ae,Fp=new Ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new Ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){let i={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tn&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tn&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_o]:{primaries:t,whitePoint:n,transfer:xo,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:n,transfer:tn,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),i}var ze=I_();function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wr,Tc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=vo("canvas")),Wr.width=t.width,Wr.height=t.height;let s=Wr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},P_=0,da=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Wu(s[a].image)):r.push(Wu(s[a]))}else r=Wu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var L_=0,Xu=new Z,oi=class i extends ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=On,a=Hs,l=Ri,c=hi,h=i.DEFAULT_ANISOTROPY,d=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Zi(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ve(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=$d;oi.DEFAULT_ANISOTROPY=1;var en=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],d=c[4],v=c[8],p=c[1],y=c[5],M=c[9],I=c[2],x=c[6],m=c[10];if(Math.abs(d-p)<.01&&Math.abs(v-I)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(v+I)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let k=(h+1)/2,R=(y+1)/2,E=(m+1)/2,O=(d+p)/4,X=(v+I)/4,A=(M+x)/4;return k>R&&k>E?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=O/n,r=X/n):R>E?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=X/r,s=A/r),this.set(n,s,r,e),this}let B=Math.sqrt((x-M)*(x-M)+(v-I)*(v-I)+(p-d)*(p-d));return Math.abs(B)<.001&&(B=1),this.x=(x-M)/B,this.y=(v-I)/B,this.z=(p-d)/B,this.w=Math.acos((h+y+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new oi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new da(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Ac{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},So=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,d,v,p,y,M,I,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,d,v,p,y,M,I,x)}set(t,e,n,s,r,a,l,c,h,d,v,p,y,M,I,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=c,m[2]=h,m[6]=d,m[10]=v,m[14]=p,m[3]=y,m[7]=M,m[11]=I,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),a=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let p=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=-c*v,e[8]=h,e[1]=y+M*h,e[5]=p-I*h,e[9]=-l*c,e[2]=I-p*h,e[6]=M+y*h,e[10]=a*c}else if(t.order==="YXZ"){let p=c*d,y=c*v,M=h*d,I=h*v;e[0]=p+I*l,e[4]=M*l-y,e[8]=a*h,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=y*l-M,e[6]=I+p*l,e[10]=a*c}else if(t.order==="ZXY"){let p=c*d,y=c*v,M=h*d,I=h*v;e[0]=p-I*l,e[4]=-a*v,e[8]=M+y*l,e[1]=y+M*l,e[5]=a*d,e[9]=I-p*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let p=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=M*h-y,e[8]=p*h+I,e[1]=c*v,e[5]=I*h+p,e[9]=y*h-M,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=I-p*v,e[8]=M*v+y,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=y*v+M,e[10]=p-I*v}else if(t.order==="XZY"){let p=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=-v,e[8]=h*d,e[1]=p*v+I,e[5]=a*d,e[9]=y*v-M,e[2]=M*v-y,e[6]=l*d,e[10]=I*v+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D_,t,N_)}lookAt(t,e,n){let s=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Is.crossVectors(n,pi),Is.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Is.crossVectors(n,pi)),Is.normalize(),$l.crossVectors(pi,Is),s[0]=Is.x,s[4]=$l.x,s[8]=pi.x,s[1]=Is.y,s[5]=$l.y,s[9]=pi.y,s[2]=Is.z,s[6]=$l.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],v=n[5],p=n[9],y=n[13],M=n[2],I=n[6],x=n[10],m=n[14],B=n[3],k=n[7],R=n[11],E=n[15],O=s[0],X=s[4],A=s[8],U=s[12],W=s[1],Y=s[5],at=s[9],lt=s[13],J=s[2],Q=s[6],ut=s[10],ft=s[14],Tt=s[3],pt=s[7],wt=s[11],bt=s[15];return r[0]=a*O+l*W+c*J+h*Tt,r[4]=a*X+l*Y+c*Q+h*pt,r[8]=a*A+l*at+c*ut+h*wt,r[12]=a*U+l*lt+c*ft+h*bt,r[1]=d*O+v*W+p*J+y*Tt,r[5]=d*X+v*Y+p*Q+y*pt,r[9]=d*A+v*at+p*ut+y*wt,r[13]=d*U+v*lt+p*ft+y*bt,r[2]=M*O+I*W+x*J+m*Tt,r[6]=M*X+I*Y+x*Q+m*pt,r[10]=M*A+I*at+x*ut+m*wt,r[14]=M*U+I*lt+x*ft+m*bt,r[3]=B*O+k*W+R*J+E*Tt,r[7]=B*X+k*Y+R*Q+E*pt,r[11]=B*A+k*at+R*ut+E*wt,r[15]=B*U+k*lt+R*ft+E*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],d=t[2],v=t[6],p=t[10],y=t[14],M=t[3],I=t[7],x=t[11],m=t[15],B=c*y-h*p,k=l*y-h*v,R=l*p-c*v,E=a*y-h*d,O=a*p-c*d,X=a*v-l*d;return e*(I*B-x*k+m*R)-n*(M*B-x*E+m*O)+s*(M*k-I*E+m*X)-r*(M*R-I*O+x*X)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=t[9],p=t[10],y=t[11],M=t[12],I=t[13],x=t[14],m=t[15],B=e*l-n*a,k=e*c-s*a,R=e*h-r*a,E=n*c-s*l,O=n*h-r*l,X=s*h-r*c,A=d*I-v*M,U=d*x-p*M,W=d*m-y*M,Y=v*x-p*I,at=v*m-y*I,lt=p*m-y*x,J=B*lt-k*at+R*Y+E*W-O*U+X*A;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/J;return t[0]=(l*lt-c*at+h*Y)*Q,t[1]=(s*at-n*lt-r*Y)*Q,t[2]=(I*X-x*O+m*E)*Q,t[3]=(p*O-v*X-y*E)*Q,t[4]=(c*W-a*lt-h*U)*Q,t[5]=(e*lt-s*W+r*U)*Q,t[6]=(x*R-M*X-m*k)*Q,t[7]=(d*X-p*R+y*k)*Q,t[8]=(a*at-l*W+h*A)*Q,t[9]=(n*W-e*at-r*A)*Q,t[10]=(M*O-I*R+m*B)*Q,t[11]=(v*R-d*O-y*B)*Q,t[12]=(l*U-a*Y-c*A)*Q,t[13]=(e*Y-n*U+s*A)*Q,t[14]=(I*k-M*E-x*B)*Q,t[15]=(d*E-v*k+p*B)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+n,d*c-s*a,0,h*c-s*l,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,d=a+a,v=l+l,p=r*h,y=r*d,M=r*v,I=a*d,x=a*v,m=l*v,B=c*h,k=c*d,R=c*v,E=n.x,O=n.y,X=n.z;return s[0]=(1-(I+m))*E,s[1]=(y+R)*E,s[2]=(M-k)*E,s[3]=0,s[4]=(y-R)*O,s[5]=(1-(p+m))*O,s[6]=(x+B)*O,s[7]=0,s[8]=(M+k)*X,s[9]=(x-B)*X,s[10]=(1-(p+I))*X,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xr.set(s[0],s[1],s[2]).length(),l=Xr.set(s[4],s[5],s[6]).length(),c=Xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ni.copy(this);let h=1/a,d=1/l,v=1/c;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=d,Ni.elements[5]*=d,Ni.elements[6]*=d,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,e.setFromRotationMatrix(Ni),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=ki,c=!1){let h=this.elements,d=2*r/(e-t),v=2*r/(n-s),p=(e+t)/(e-t),y=(n+s)/(n-s),M,I;if(c)M=r/(a-r),I=a*r/(a-r);else if(l===ki)M=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===ca)M=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=ki,c=!1){let h=this.elements,d=2/(e-t),v=2/(n-s),p=-(e+t)/(e-t),y=-(n+s)/(n-s),M,I;if(c)M=1/(a-r),I=a/(a-r);else if(l===ki)M=-2/(a-r),I=-(a+r)/(a-r);else if(l===ca)M=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xr=new Z,Ni=new Ve,D_=new Z(0,0,0),N_=new Z(1,1,1),Is=new Z,$l=new Z,pi=new Z,Bp=new Ve,kp=new Ki,Ss=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],v=s[2],p=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,y),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kp.setFromEuler(this),this.setFromQuaternion(kp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U_=0,zp=new Z,qr=new Ki,ms=new Ve,Vl=new Z,io=new Z,F_=new Z,O_=new Ki,$p=new Z(1,0,0),Vp=new Z(0,1,0),Hp=new Z(0,0,1),Gp={type:"added"},B_={type:"removed"},Yr={type:"childadded",child:null},qu={type:"childremoved",child:null},Ln=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Ss,n=new Ki,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ae}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis($p,t)}rotateY(t){return this.rotateOnAxis(Vp,t)}rotateZ(t){return this.rotateOnAxis(Hp,t)}translateOnAxis(t,e){return zp.copy(t).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($p,t)}translateY(t){return this.translateOnAxis(Vp,t)}translateZ(t){return this.translateOnAxis(Hp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vl.copy(t):Vl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(io,Vl,this.up):ms.lookAt(Vl,io,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(ms),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gp),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_),qu.child=t,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gp),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,F_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,O_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let v=c[h];r(t.shapes,v)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),v=a(t.shapes),p=a(t.skeletons),y=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),p.length>0&&(n.skeletons=p),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.DEFAULT_UP=new Z(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let x=e.getJointPose(I,n),m=this._getHandJoint(h,I);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let d=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],p=d.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&p>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Yu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _e=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ze.workingColorSpace){if(t=Jd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yu(a,r,t+1/3),this.g=Yu(a,r,t),this.b=Yu(a,r,t-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(t,e=gi){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ve("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gi){let n=tg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return ze.workingToColorSpace(Hn.copy(this),t),Math.round(Re(Hn.r*255,0,255))*65536+Math.round(Re(Hn.g*255,0,255))*256+Math.round(Re(Hn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ze.workingColorSpace){ze.workingToColorSpace(Hn.copy(this),e);let n=Hn.r,s=Hn.g,r=Hn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,d=(l+a)/2;if(l===a)c=0,h=0;else{let v=a-l;switch(h=d<=.5?v/(a+l):v/(2-a-l),a){case n:c=(s-r)/v+(s<r?6:0);break;case s:c=(r-n)/v+2;break;case r:c=(n-s)/v+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ze.workingColorSpace){return ze.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=gi){ze.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,s=Hn.b;return t!==gi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ps),this.setHSL(Ps.h+t,Ps.s+e,Ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ps),t.getHSL(Hl);let n=fo(Ps.h,Hl.h,e),s=fo(Ps.s,Hl.s,e),r=fo(Ps.l,Hl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new _e;_e.NAMES=tg;var Mo=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ui=new Z,gs=new Z,Zu=new Z,_s=new Z,Zr=new Z,Jr=new Z,Wp=new Z,Ju=new Z,ju=new Z,Ku=new Z,Qu=new en,td=new en,ed=new en,Us=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ui.subVectors(t,e),s.cross(Ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ui.subVectors(s,e),gs.subVectors(n,e),Zu.subVectors(t,e);let a=Ui.dot(Ui),l=Ui.dot(gs),c=Ui.dot(Zu),h=gs.dot(gs),d=gs.dot(Zu),v=a*h-l*l;if(v===0)return r.set(0,0,0),null;let p=1/v,y=(h*c-l*d)*p,M=(a*d-l*c)*p;return r.set(1-y-M,M,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,_s)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_s.x),c.addScaledVector(a,_s.y),c.addScaledVector(l,_s.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qu.setScalar(0),td.setScalar(0),ed.setScalar(0),Qu.fromBufferAttribute(t,e),td.fromBufferAttribute(t,n),ed.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qu,r.x),a.addScaledVector(td,r.y),a.addScaledVector(ed,r.z),a}static isFrontFacing(t,e,n,s){return Ui.subVectors(n,e),gs.subVectors(t,e),Ui.cross(gs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),Ui.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Zr.subVectors(s,n),Jr.subVectors(r,n),Ju.subVectors(t,n);let c=Zr.dot(Ju),h=Jr.dot(Ju);if(c<=0&&h<=0)return e.copy(n);ju.subVectors(t,s);let d=Zr.dot(ju),v=Jr.dot(ju);if(d>=0&&v<=d)return e.copy(s);let p=c*v-d*h;if(p<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Zr,a);Ku.subVectors(t,r);let y=Zr.dot(Ku),M=Jr.dot(Ku);if(M>=0&&y<=M)return e.copy(r);let I=y*h-c*M;if(I<=0&&h>=0&&M<=0)return l=h/(h-M),e.copy(n).addScaledVector(Jr,l);let x=d*M-y*v;if(x<=0&&v-d>=0&&y-M>=0)return Wp.subVectors(r,s),l=(v-d)/(v-d+(y-M)),e.copy(s).addScaledVector(Wp,l);let m=1/(x+I+p);return a=I*m,l=p*m,e.copy(n).addScaledVector(Zr,a).addScaledVector(Jr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Fi):Fi.fromBufferAttribute(r,a),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(t.matrixWorld),this.union(Gl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),Wl.subVectors(this.max,so),jr.subVectors(t.a,so),Kr.subVectors(t.b,so),Qr.subVectors(t.c,so),Ls.subVectors(Kr,jr),Ds.subVectors(Qr,Kr),or.subVectors(jr,Qr);let e=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-or.z,or.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,or.z,0,-or.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-or.y,or.x,0];return!nd(e,jr,Kr,Qr,Wl)||(e=[1,0,0,0,1,0,0,0,1],!nd(e,jr,Kr,Qr,Wl))?!1:(Xl.crossVectors(Ls,Ds),e=[Xl.x,Xl.y,Xl.z],nd(e,jr,Kr,Qr,Wl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xs=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fi=new Z,Gl=new Kn,jr=new Z,Kr=new Z,Qr=new Z,Ls=new Z,Ds=new Z,or=new Z,so=new Z,Wl=new Z,Xl=new Z,lr=new Z;function nd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){lr.fromArray(i,r);let l=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),c=t.dot(lr),h=e.dot(lr),d=n.dot(lr);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}var wn=new Z,ql=new $t,z_=0,rn=class extends ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yd,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ql.fromBufferAttribute(this,e),ql.applyMatrix3(t),this.setXY(e,ql.x,ql.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix3(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wo=class extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var vn=class extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},$_=new Kn,ro=new Z,id=new Z,ci=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(id)),this.expandByPoint(ro.copy(t.center).sub(id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},V_=0,Ai=new Ve,sd=new Ln,ta=new Z,mi=new Kn,ao=new Kn,In=new Z,yn=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d_(t)?wo:bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,n){return Ai.makeTranslation(t,e,n),this.applyMatrix4(Ai),this}scale(t,e,n){return Ai.makeScale(t,e,n),this.applyMatrix4(Ai),this}lookAt(t){return sd.lookAt(t),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];ao.setFromBufferAttribute(l),this.morphTargetsRelative?(In.addVectors(mi.min,ao.min),mi.expandByPoint(In),In.addVectors(mi.max,ao.max),mi.expandByPoint(In)):(mi.expandByPoint(ao.min),mi.expandByPoint(ao.max))}mi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)In.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(In));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)In.fromBufferAttribute(l,h),c&&(ta.fromBufferAttribute(t,h),In.add(ta)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let A=0;A<n.count;A++)l[A]=new Z,c[A]=new Z;let h=new Z,d=new Z,v=new Z,p=new $t,y=new $t,M=new $t,I=new Z,x=new Z;function m(A,U,W){h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,U),v.fromBufferAttribute(n,W),p.fromBufferAttribute(r,A),y.fromBufferAttribute(r,U),M.fromBufferAttribute(r,W),d.sub(h),v.sub(h),y.sub(p),M.sub(p);let Y=1/(y.x*M.y-M.x*y.y);isFinite(Y)&&(I.copy(d).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(Y),x.copy(v).multiplyScalar(y.x).addScaledVector(d,-M.x).multiplyScalar(Y),l[A].add(I),l[U].add(I),l[W].add(I),c[A].add(x),c[U].add(x),c[W].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let A=0,U=B.length;A<U;++A){let W=B[A],Y=W.start,at=W.count;for(let lt=Y,J=Y+at;lt<J;lt+=3)m(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}let k=new Z,R=new Z,E=new Z,O=new Z;function X(A){E.fromBufferAttribute(s,A),O.copy(E);let U=l[A];k.copy(U),k.sub(E.multiplyScalar(E.dot(U))).normalize(),R.crossVectors(O,U);let Y=R.dot(c[A])<0?-1:1;a.setXYZW(A,k.x,k.y,k.z,Y)}for(let A=0,U=B.length;A<U;++A){let W=B[A],Y=W.start,at=W.count;for(let lt=Y,J=Y+at;lt<J;lt+=3)X(t.getX(lt+0)),X(t.getX(lt+1)),X(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,y=n.count;p<y;p++)n.setXYZ(p,0,0,0);let s=new Z,r=new Z,a=new Z,l=new Z,c=new Z,h=new Z,d=new Z,v=new Z;if(t)for(let p=0,y=t.count;p<y;p+=3){let M=t.getX(p+0),I=t.getX(p+1),x=t.getX(p+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,x),l.add(d),c.add(d),h.add(d),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,y=e.count;p<y;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)In.fromBufferAttribute(t,e),In.normalize(),t.setXYZ(e,In.x,In.y,In.z)}toNonIndexed(){function t(l,c){let h=l.array,d=l.itemSize,v=l.normalized,p=new h.constructor(c.length*d),y=0,M=0;for(let I=0,x=c.length;I<x;I++){l.isInterleavedBufferAttribute?y=c[I]*l.data.stride+l.offset:y=c[I]*d;for(let m=0;m<d;m++)p[M++]=h[y++]}return new rn(p,d,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let d=0,v=h.length;d<v;d++){let p=h[d],y=t(p,n);c.push(y)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let v=0,p=h.length;v<p;v++){let y=h[v];d.push(y.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],v=r[h];for(let p=0,y=v.length;p<y;p++)d.push(v[p].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let v=a[h];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yd,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},jn=new Z,$i=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyMatrix4(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.applyNormalMatrix(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jn.fromBufferAttribute(this,e),jn.transformDirection(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rd=new Z,H_=new Z,G_=new Ae,Oi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rd.subVectors(n,e).cross(H_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(rd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||G_.getNormalMatrix(t),s=this.coplanarPoint(rd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},W_=0,Qi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ma,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ve(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new Z,ad=new Z,Yl=new Z,Zl=new Z,fr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ad.copy(t).add(e).multiplyScalar(.5),Yl.copy(e).sub(t).normalize(),Zl.copy(this.origin).sub(ad);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yl),l=Zl.dot(this.direction),c=-Zl.dot(Yl),h=Zl.lengthSq(),d=Math.abs(1-a*a),v,p,y,M;if(d>0)if(v=a*c-l,p=a*l-c,M=r*d,v>=0)if(p>=-M)if(p<=M){let I=1/d;v*=I,p*=I,y=v*(v+a*p+2*l)+p*(a*v+p+2*c)+h}else p=r,v=Math.max(0,-(a*p+l)),y=-v*v+p*(p+2*c)+h;else p=-r,v=Math.max(0,-(a*p+l)),y=-v*v+p*(p+2*c)+h;else p<=-M?(v=Math.max(0,-(-a*r+l)),p=v>0?-r:Math.min(Math.max(-r,-c),r),y=-v*v+p*(p+2*c)+h):p<=M?(v=0,p=Math.min(Math.max(-r,-c),r),y=p*(p+2*c)+h):(v=Math.max(0,-(a*r+l)),p=v>0?r:Math.min(Math.max(-r,-c),r),y=-v*v+p*(p+2*c)+h);else p=a>0?-r:r,v=Math.max(0,-(a*p+l)),y=-v*v+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(ad).addScaledVector(Yl,p),y}intersectSphere(t,e){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let n=vs.dot(this.direction),s=vs.dot(vs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-p.z)*v,c=(t.max.z-p.z)*v):(l=(t.max.z-p.z)*v,c=(t.min.z-p.z)*v),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,v=t.x-a.x,p=t.y-a.y,y=t.z-a.z,M=e.x-a.x,I=e.y-a.y,x=e.z-a.z,m=n.x-a.x,B=n.y-a.y,k=n.z-a.z,R=Math.abs(c),E=Math.abs(h),O=Math.abs(d),X,A,U,W,Y,at,lt,J,Q,ut,ft,Tt;if(R>=E&&R>=O?(U=c,at=v,Q=M,Tt=m,c>=0?(X=h,A=d,W=p,Y=y,lt=I,J=x,ut=B,ft=k):(X=d,A=h,W=y,Y=p,lt=x,J=I,ut=k,ft=B)):E>=O?(U=h,at=p,Q=I,Tt=B,h>=0?(X=d,A=c,W=y,Y=v,lt=x,J=M,ut=k,ft=m):(X=c,A=d,W=v,Y=y,lt=M,J=x,ut=m,ft=k)):(U=d,at=y,Q=x,Tt=k,d>=0?(X=c,A=h,W=v,Y=p,lt=M,J=I,ut=m,ft=B):(X=h,A=c,W=p,Y=v,lt=I,J=M,ut=B,ft=m)),U===0)return null;let pt=X/U,wt=A/U,bt=1/U,Xt=W-pt*at,jt=Y-wt*at,He=lt-pt*Q,Ie=J-wt*Q,Be=ut-pt*Tt,_t=ft-wt*Tt,vt=Be*Ie-_t*He,Pt=Xt*_t-jt*Be,oe=He*jt-Ie*Xt;if(s){if(vt<0||Pt<0||oe<0)return null}else if((vt<0||Pt<0||oe<0)&&(vt>0||Pt>0||oe>0))return null;let Zt=vt+Pt+oe;if(Zt===0)return null;let me=bt*(vt*at+Pt*Q+oe*Tt);return(Zt>0?me<0:me>0)?null:this.at(me/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pr=class extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xp=new Ve,cr=new fr,Jl=new ci,qp=new Z,jl=new Z,Kl=new Z,Ql=new Z,od=new Z,tc=new Z,Yp=new Z,ec=new Z,Dn=class extends Ln{constructor(t=new yn,e=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){tc.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let d=l[c],v=r[c];d!==0&&(od.fromBufferAttribute(v,t),a?tc.addScaledVector(od,d):tc.addScaledVector(od.sub(e),d))}e.add(tc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(r),cr.copy(t.ray).recast(t.near),!(Jl.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Jl,qp)===null||cr.origin.distanceToSquared(qp)>(t.far-t.near)**2))&&(Xp.copy(r).invert(),cr.copy(t.ray).applyMatrix4(Xp),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,p=r.groups,y=r.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,I=p.length;M<I;M++){let x=p[M],m=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=l.getX(R),X=l.getX(R+1),A=l.getX(R+2);s=nc(this,m,t,n,h,d,v,O,X,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(l.count,y.start+y.count);for(let x=M,m=I;x<m;x+=3){let B=l.getX(x),k=l.getX(x+1),R=l.getX(x+2);s=nc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,I=p.length;M<I;M++){let x=p[M],m=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=R,X=R+1,A=R+2;s=nc(this,m,t,n,h,d,v,O,X,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let x=M,m=I;x<m;x+=3){let B=x,k=x+1,R=x+2;s=nc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function X_(i,t,e,n,s,r,a,l){let c;if(t.side===Qn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===$s,l),c===null)return null;ec.copy(l),ec.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ec);return h<e.near||h>e.far?null:{distance:h,point:ec.clone(),object:i}}function nc(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,jl),i.getVertexPosition(c,Kl),i.getVertexPosition(h,Ql);let d=X_(i,t,e,n,jl,Kl,Ql,Yp);if(d){let v=new Z;Us.getBarycoord(Yp,jl,Kl,Ql,v),s&&(d.uv=Us.getInterpolatedAttribute(s,l,c,h,v,new $t)),r&&(d.uv1=Us.getInterpolatedAttribute(r,l,c,h,v,new $t)),a&&(d.normal=Us.getInterpolatedAttribute(a,l,c,h,v,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:l,b:c,c:h,normal:new Z,materialIndex:0};Us.getNormal(jl,Kl,Ql,p.normal),d.face=p,d.barycoord=v}return d}var Eo=class extends oi{constructor(t=null,e=1,n=1,s,r,a,l,c,h=Pn,d=Pn,v,p){super(null,a,l,c,h,d,s,r,v,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var To=class extends rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ea=new Ve,Zp=new Ve,ic=[],Jp=new Kn,q_=new Ve,oo=new Dn,lo=new ci,Ao=class extends Dn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ea),Jp.copy(t.boundingBox).applyMatrix4(ea),this.boundingBox.union(Jp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ea),lo.copy(t.boundingSphere).applyMatrix4(ea),this.boundingSphere.union(lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),t.ray.intersectsSphere(lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ea),Zp.multiplyMatrices(n,ea),oo.matrixWorld=Zp,oo.raycast(t,ic);for(let a=0,l=ic.length;a<l;a++){let c=ic[a];c.instanceId=r,c.object=this,e.push(c)}ic.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(s*this.count),s,this.count,hh,Ci));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hr=new ci,Y_=new $t(.5,.5),sc=new Z,ma=class{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],d=r[4],v=r[5],p=r[6],y=r[7],M=r[8],I=r[9],x=r[10],m=r[11],B=r[12],k=r[13],R=r[14],E=r[15];if(s[0].setComponents(h-a,y-d,m-M,E-B).normalize(),s[1].setComponents(h+a,y+d,m+M,E+B).normalize(),s[2].setComponents(h+l,y+v,m+I,E+k).normalize(),s[3].setComponents(h-l,y-v,m-I,E-k).normalize(),n)s[4].setComponents(c,p,x,R).normalize(),s[5].setComponents(h-c,y-p,m-x,E-R).normalize();else if(s[4].setComponents(h-c,y-p,m-x,E-R).normalize(),e===ki)s[5].setComponents(h+c,y+p,m+x,E+R).normalize();else if(e===ca)s[5].setComponents(c,p,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);let e=Y_.distanceTo(t.center);return hr.radius=.7071067811865476+e,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sc.x=s.normal.x>0?t.max.x:t.min.x,sc.y=s.normal.y>0?t.max.y:t.min.y,sc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends Qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ic=new Z,Pc=new Z,jp=new Ve,co=new fr,rc=new ci,ld=new Z,Kp=new Z,Lc=class extends Ln{constructor(t=new yn,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ic.fromBufferAttribute(e,s-1),Pc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ic.distanceTo(Pc);t.setAttribute("lineDistance",new vn(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,t.ray.intersectsSphere(rc)===!1)return;jp.copy(s).invert(),co.copy(t.ray).applyMatrix4(jp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){let y=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let m=d.getX(I),B=d.getX(I+1),k=ac(this,t,co,c,m,B,I);k&&e.push(k)}if(this.isLineLoop){let I=d.getX(M-1),x=d.getX(y),m=ac(this,t,co,c,I,x,M-1);m&&e.push(m)}}else{let y=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let m=ac(this,t,co,c,I,I+1,I);m&&e.push(m)}if(this.isLineLoop){let I=ac(this,t,co,c,M-1,y,M-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function ac(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Ic.fromBufferAttribute(l,s),Pc.fromBufferAttribute(l,r),e.distanceSqToSegment(Ic,Pc,ld,Kp)>n)return;ld.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(ld);if(!(h<t.near||h>t.far))return{distance:h,point:Kp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Co=class extends Lc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Dc=class extends Qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qp=new Ve,vd=new fr,oc=new ci,lc=new Z,gr=class extends Ln{constructor(t=new yn,e=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,t.ray.intersectsSphere(oc)===!1)return;Qp.copy(s).invert(),vd.copy(t.ray).applyMatrix4(Qp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,v=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let M=p,I=y;M<I;M++){let x=h.getX(M);lc.fromBufferAttribute(v,x),tm(lc,x,c,s,t,e,this)}}else{let p=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let M=p,I=y;M<I;M++)lc.fromBufferAttribute(v,M),tm(lc,M,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function tm(i,t,e,n,s,r,a){let l=vd.distanceSqToPoint(i);if(l<e){let c=new Z;vd.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ro=class extends oi{constructor(t=[],e=Vs,n,s,r,a,l,c,h,d){super(t,e,n,s,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Fs=class extends oi{constructor(t,e,n=Hi,s,r,a,l=Pn,c=Pn,h,d=Ji,v=1){if(d!==Ji&&d!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:v};super(p,s,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Nc=class extends Fs{constructor(t,e=Hi,n=Vs,s,r,a=Pn,l=Pn,c,h=Ji){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,c,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Io=class extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ga=class i extends yn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],d=[],v=[],p=0,y=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(v,2));function M(I,x,m,B,k,R,E,O,X,A,U){let W=R/X,Y=E/A,at=R/2,lt=E/2,J=O/2,Q=X+1,ut=A+1,ft=0,Tt=0,pt=new Z;for(let wt=0;wt<ut;wt++){let bt=wt*Y-lt;for(let Xt=0;Xt<Q;Xt++){let jt=Xt*W-at;pt[I]=jt*B,pt[x]=bt*k,pt[m]=J,h.push(pt.x,pt.y,pt.z),pt[I]=0,pt[x]=0,pt[m]=O>0?1:-1,d.push(pt.x,pt.y,pt.z),v.push(Xt/X),v.push(1-wt/A),ft+=1}}for(let wt=0;wt<A;wt++)for(let bt=0;bt<X;bt++){let Xt=p+bt+Q*wt,jt=p+bt+Q*(wt+1),He=p+(bt+1)+Q*(wt+1),Ie=p+(bt+1)+Q*wt;c.push(Xt,jt,Ie),c.push(jt,He,Ie),Tt+=6}l.addGroup(y,Tt,U),y+=Tt,p+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Po=class i extends yn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],p=[],y=[],M=0,I=[],x=n/2,m=0;B(),a===!1&&(t>0&&k(!0),e>0&&k(!1)),this.setIndex(d),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(p,3)),this.setAttribute("uv",new vn(y,2));function B(){let R=new Z,E=new Z,O=0,X=(e-t)/n;for(let A=0;A<=r;A++){let U=[],W=A/r,Y=W*(e-t)+t;for(let at=0;at<=s;at++){let lt=at/s,J=lt*c+l,Q=Math.sin(J),ut=Math.cos(J);E.x=Y*Q,E.y=-W*n+x,E.z=Y*ut,v.push(E.x,E.y,E.z),R.set(Q,X,ut).normalize(),p.push(R.x,R.y,R.z),y.push(lt,1-W),U.push(M++)}I.push(U)}for(let A=0;A<s;A++)for(let U=0;U<r;U++){let W=I[U][A],Y=I[U+1][A],at=I[U+1][A+1],lt=I[U][A+1];(t>0||U!==0)&&(d.push(W,Y,lt),O+=3),(e>0||U!==r-1)&&(d.push(Y,at,lt),O+=3)}h.addGroup(m,O,0),m+=O}function k(R){let E=M,O=new $t,X=new Z,A=0,U=R===!0?t:e,W=R===!0?1:-1;for(let at=1;at<=s;at++)v.push(0,x*W,0),p.push(0,W,0),y.push(.5,.5),M++;let Y=M;for(let at=0;at<=s;at++){let J=at/s*c+l,Q=Math.cos(J),ut=Math.sin(J);X.x=U*ut,X.y=x*W,X.z=U*Q,v.push(X.x,X.y,X.z),p.push(0,W,0),O.x=Q*.5+.5,O.y=ut*.5*W+.5,y.push(O.x,O.y),M++}for(let at=0;at<s;at++){let lt=E+at,J=Y+at;R===!0?d.push(J,J+1,lt):d.push(J+1,J,lt),A+=3}h.addGroup(m,A,R===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,c=r-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,y=(a-d)/p;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),c=e||(a.isVector2?new $t:new Z);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,s=[],r=[],a=[],l=new Z,c=new Ve;for(let y=0;y<=t;y++){let M=y/t;s[y]=this.getTangentAt(M,new Z)}r[0]=new Z,a[0]=new Z;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),v<=h&&(h=v,n.set(0,1,0)),p<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),l.crossVectors(s[y-1],s[y]),l.length()>Number.EPSILON){l.normalize();let M=Math.acos(Re(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(l,M))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Re(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(y=-y);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],y*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_a=class extends _i{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),p=c-this.aX,y=h-this.aY;c=p*d-y*v+this.aX,h=p*v+y*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uc=class extends _a{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kd(){let i=0,t=0,e=0,n=0;function s(r,a,l,c){i=r,t=l,e=-3*r+3*a-2*l-c,n=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,h){s(a,l,h*(l-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,h,d,v){let p=(a-r)/h-(l-r)/(h+d)+(l-a)/d,y=(l-a)/d-(c-a)/(d+v)+(c-l)/v;p*=d,y*=d,s(a,l,p,y)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var em=new Z,nm=new Z,cd=new Kd,hd=new Kd,ud=new Kd,Fc=class extends _i{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(nm.subVectors(s[0],s[1]).add(s[0]),h=nm);let v=s[l%r],p=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(em.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=em),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,M=Math.pow(h.distanceToSquared(v),y),I=Math.pow(v.distanceToSquared(p),y),x=Math.pow(p.distanceToSquared(d),y);I<1e-4&&(I=1),M<1e-4&&(M=I),x<1e-4&&(x=I),cd.initNonuniformCatmullRom(h.x,v.x,p.x,d.x,M,I,x),hd.initNonuniformCatmullRom(h.y,v.y,p.y,d.y,M,I,x),ud.initNonuniformCatmullRom(h.z,v.z,p.z,d.z,M,I,x)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(h.x,v.x,p.x,d.x,this.tension),hd.initCatmullRom(h.y,v.y,p.y,d.y,this.tension),ud.initCatmullRom(h.z,v.z,p.z,d.z,this.tension));return n.set(cd.calc(c),hd.calc(c),ud.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function im(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,c=i*l;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*l+r*i+e}function Z_(i,t){let e=1-i;return e*e*t}function J_(i,t){return 2*(1-i)*i*t}function j_(i,t){return i*i*t}function po(i,t,e,n){return Z_(i,t)+J_(i,e)+j_(i,n)}function K_(i,t){let e=1-i;return e*e*e*t}function Q_(i,t){let e=1-i;return 3*e*e*i*t}function tx(i,t){return 3*(1-i)*i*i*t}function ex(i,t){return i*i*i*t}function mo(i,t,e,n,s){return K_(i,t)+Q_(i,e)+tx(i,n)+ex(i,s)}var Lo=class extends _i{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(mo(t,s.x,r.x,a.x,l.x),mo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends _i{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(mo(t,s.x,r.x,a.x,l.x),mo(t,s.y,r.y,a.y,l.y),mo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends _i{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends _i{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends _i{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(po(t,s.x,r.x,a.x),po(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kc=class extends _i{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(po(t,s.x,r.x,a.x),po(t,s.y,r.y,a.y),po(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(im(l,c.x,h.x,d.x,v.x),im(l,c.y,h.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},yd=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Fc,CubicBezierCurve:Lo,CubicBezierCurve3:Oc,EllipseCurve:_a,LineCurve:Do,LineCurve3:Bc,QuadraticBezierCurve:No,QuadraticBezierCurve3:kc,SplineCurve:Uo}),zc=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){let d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yd[s.type]().fromJSON(s))}return this}},_r=class extends zc{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Do(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new No(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Lo(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,c){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,c),this}absellipse(t,e,n,s,r,a,l,c){let h=new _a(t,e,n,s,r,a,l,c);if(this.curves.length>0){let v=h.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xa=class extends _r{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new _r().fromJSON(s))}return this}};function nx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=eg(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,c,h;if(n&&(r=ox(i,t,r,e)),i.length>80*e){l=i[0],c=i[1];let d=l,v=c;for(let p=e;p<s;p+=e){let y=i[p],M=i[p+1];y<l&&(l=y),M<c&&(c=M),y>d&&(d=y),M>v&&(v=M)}h=Math.max(d-l,v-c),h=h!==0?32767/h:0}return Fo(r,a,e,l,c,h,0),a}function eg(i,t,e,n,s){let r;if(s===xx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=sm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=sm(a/n|0,i[a],i[a+1],r);return r&&va(r,r.next)&&(Bo(r),r=r.next),r}function xr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(va(e,e.next)||gn(e.prev,e,e.next)===0)){if(Bo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?sx(i,n,s,r):ix(i)){t.push(c.i,i.i,h.i),Bo(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=rx(xr(i),t),Fo(i,t,e,n,s,r,2)):a===2&&ax(i,t,e,n,s,r):Fo(xr(i),t,e,n,s,r,1);break}}}function ix(i){let t=i.prev,e=i,n=i.next;if(gn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,c=e.y,h=n.y,d=Math.min(s,r,a),v=Math.min(l,c,h),p=Math.max(s,r,a),y=Math.max(l,c,h),M=n.next;for(;M!==t;){if(M.x>=d&&M.x<=p&&M.y>=v&&M.y<=y&&ho(s,l,r,c,a,h,M.x,M.y)&&gn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function sx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(gn(s,r,a)>=0)return!1;let l=s.x,c=r.x,h=a.x,d=s.y,v=r.y,p=a.y,y=Math.min(l,c,h),M=Math.min(d,v,p),I=Math.max(l,c,h),x=Math.max(d,v,p),m=Sd(y,M,t,e,n),B=Sd(I,x,t,e,n),k=i.prevZ,R=i.nextZ;for(;k&&k.z>=m&&R&&R.z<=B;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&ho(l,d,c,v,h,p,k.x,k.y)&&gn(k.prev,k,k.next)>=0||(k=k.prevZ,R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&ho(l,d,c,v,h,p,R.x,R.y)&&gn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;k&&k.z>=m;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&ho(l,d,c,v,h,p,k.x,k.y)&&gn(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;R&&R.z<=B;){if(R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&ho(l,d,c,v,h,p,R.x,R.y)&&gn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function rx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!va(n,s)&&ig(n,e,e.next,s)&&Oo(n,s)&&Oo(s,n)&&(t.push(n.i,e.i,s.i),Bo(e),Bo(e.next),e=i=s),e=e.next}while(e!==i);return xr(e)}function ax(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&mx(a,l)){let c=sg(a,l);a=xr(a,a.next),c=xr(c,c.next),Fo(a,t,e,n,s,r,0),Fo(c,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function ox(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=eg(i,l,c,n,!1);h===h.next&&(h.steiner=!0),s.push(px(h))}s.sort(lx);for(let r=0;r<s.length;r++)e=cx(s[r],e);return e}function lx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cx(i,t){let e=hx(i,t);if(!e)return t;let n=sg(e,i);return xr(n,n.next),xr(e,e.next)}function hx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(va(i,e))return e;do{if(va(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,c=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ng(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Oo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&ux(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function ux(i,t){return gn(i.prev,i,t.prev)<0&&gn(t.next,i,i.next)<0}function dx(i,t,e,n){let s=i;do s.z===0&&(s.z=Sd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fx(s)}function fx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Sd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function px(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ng(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function ho(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&ng(i,t,e,n,s,r,a,l)}function mx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gx(i,t)&&(Oo(i,t)&&Oo(t,i)&&_x(i,t)&&(gn(i.prev,i,t.prev)||gn(i,t.prev,t))||va(i,t)&&gn(i.prev,i,i.next)>0&&gn(t.prev,t,t.next)>0)}function gn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function va(i,t){return i.x===t.x&&i.y===t.y}function ig(i,t,e,n){let s=hc(gn(i,t,e)),r=hc(gn(i,t,n)),a=hc(gn(e,n,i)),l=hc(gn(e,n,t));return!!(s!==r&&a!==l||s===0&&cc(i,e,t)||r===0&&cc(i,n,t)||a===0&&cc(e,i,n)||l===0&&cc(e,t,n))}function cc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hc(i){return i>0?1:i<0?-1:0}function gx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ig(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Oo(i,t){return gn(i.prev,i,i.next)<0?gn(i,t,i.next)>=0&&gn(i,i.prev,t)>=0:gn(i,t,i.prev)<0||gn(i,i.next,t)<0}function _x(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sg(i,t){let e=Md(i.i,i.x,i.y),n=Md(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sm(i,t,e,n){let s=Md(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Md(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bd=class{static triangulate(t,e,n=2){return nx(t,e,n)}},ur=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];rm(t),am(n,t);let a=t.length;e.forEach(rm);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,am(n,e[c]);let l=bd.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function rm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function am(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ko=class i extends yn{constructor(t=new xa([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,c=t.length;l<c;l++){let h=t[l];a(h)}this.setAttribute("position",new vn(s,3)),this.setAttribute("uv",new vn(r,2)),this.computeVertexNormals();function a(l){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,B=e.UVGenerator!==void 0?e.UVGenerator:vx,k,R=!1,E,O,X,A;if(m){k=m.getSpacedPoints(d),R=!0,p=!1;let et=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(d,et),O=new Z,X=new Z,A=new Z}p||(x=0,y=0,M=0,I=0);let U=l.extractPoints(h),W=U.shape,Y=U.holes;if(!ur.isClockWise(W)){W=W.reverse();for(let et=0,At=Y.length;et<At;et++){let H=Y[et];ur.isClockWise(H)&&(Y[et]=H.reverse())}}function lt(et){let H=10000000000000001e-36,Ct=et[0];for(let Bt=1;Bt<=et.length;Bt++){let de=Bt%et.length,he=et[de],ue=he.x-Ct.x,Se=he.y-Ct.y,q=ue*ue+Se*Se,Ce=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(Ct.x),Math.abs(Ct.y)),we=H*Ce*Ce;if(q<=we){et.splice(de,1),Bt--;continue}Ct=he}}lt(W),Y.forEach(lt);let J=Y.length,Q=W;for(let et=0;et<J;et++){let At=Y[et];W=W.concat(At)}function ut(et,At,H){return At||ye("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(At,H)}let ft=W.length;function Tt(et,At,H){let Ct,Bt,de,he=et.x-At.x,ue=et.y-At.y,Se=H.x-et.x,q=H.y-et.y,Ce=he*he+ue*ue,we=he*q-ue*Se;if(Math.abs(we)>Number.EPSILON){let N=Math.sqrt(Ce),w=Math.sqrt(Se*Se+q*q),tt=At.x-ue/N,K=At.y+he/N,mt=H.x-q/w,Ut=H.y+Se/w,Ot=((mt-tt)*q-(Ut-K)*Se)/(he*q-ue*Se);Ct=tt+he*Ot-et.x,Bt=K+ue*Ot-et.y;let gt=Ct*Ct+Bt*Bt;if(gt<=2)return new $t(Ct,Bt);de=Math.sqrt(gt/2)}else{let N=!1;he>Number.EPSILON?Se>Number.EPSILON&&(N=!0):he<-Number.EPSILON?Se<-Number.EPSILON&&(N=!0):Math.sign(ue)===Math.sign(q)&&(N=!0),N?(Ct=-ue,Bt=he,de=Math.sqrt(Ce)):(Ct=he,Bt=ue,de=Math.sqrt(Ce/2))}return new $t(Ct/de,Bt/de)}let pt=[];for(let et=0,At=Q.length,H=At-1,Ct=et+1;et<At;et++,H++,Ct++)H===At&&(H=0),Ct===At&&(Ct=0),pt[et]=Tt(Q[et],Q[H],Q[Ct]);let wt=[],bt,Xt=pt.concat();for(let et=0,At=J;et<At;et++){let H=Y[et];bt=[];for(let Ct=0,Bt=H.length,de=Bt-1,he=Ct+1;Ct<Bt;Ct++,de++,he++)de===Bt&&(de=0),he===Bt&&(he=0),bt[Ct]=Tt(H[Ct],H[de],H[he]);wt.push(bt),Xt=Xt.concat(bt)}let jt;if(x===0)jt=ur.triangulateShape(Q,Y);else{let et=[],At=[];for(let H=0;H<x;H++){let Ct=H/x,Bt=y*Math.cos(Ct*Math.PI/2),de=M*Math.sin(Ct*Math.PI/2)+I;for(let he=0,ue=Q.length;he<ue;he++){let Se=ut(Q[he],pt[he],de);Pt(Se.x,Se.y,-Bt),Ct===0&&et.push(Se)}for(let he=0,ue=J;he<ue;he++){let Se=Y[he];bt=wt[he];let q=[];for(let Ce=0,we=Se.length;Ce<we;Ce++){let N=ut(Se[Ce],bt[Ce],de);Pt(N.x,N.y,-Bt),Ct===0&&q.push(N)}Ct===0&&At.push(q)}}jt=ur.triangulateShape(et,At)}let He=jt.length,Ie=M+I;for(let et=0;et<ft;et++){let At=p?ut(W[et],Xt[et],Ie):W[et];R?(X.copy(E.normals[0]).multiplyScalar(At.x),O.copy(E.binormals[0]).multiplyScalar(At.y),A.copy(k[0]).add(X).add(O),Pt(A.x,A.y,A.z)):Pt(At.x,At.y,0)}for(let et=1;et<=d;et++)for(let At=0;At<ft;At++){let H=p?ut(W[At],Xt[At],Ie):W[At];R?(X.copy(E.normals[et]).multiplyScalar(H.x),O.copy(E.binormals[et]).multiplyScalar(H.y),A.copy(k[et]).add(X).add(O),Pt(A.x,A.y,A.z)):Pt(H.x,H.y,v/d*et)}for(let et=x-1;et>=0;et--){let At=et/x,H=y*Math.cos(At*Math.PI/2),Ct=M*Math.sin(At*Math.PI/2)+I;for(let Bt=0,de=Q.length;Bt<de;Bt++){let he=ut(Q[Bt],pt[Bt],Ct);Pt(he.x,he.y,v+H)}for(let Bt=0,de=Y.length;Bt<de;Bt++){let he=Y[Bt];bt=wt[Bt];for(let ue=0,Se=he.length;ue<Se;ue++){let q=ut(he[ue],bt[ue],Ct);R?Pt(q.x,q.y+k[d-1].y,k[d-1].x+H):Pt(q.x,q.y,v+H)}}}Be(),_t();function Be(){let et=s.length/3;if(p){let At=0,H=ft*At;for(let Ct=0;Ct<He;Ct++){let Bt=jt[Ct];oe(Bt[2]+H,Bt[1]+H,Bt[0]+H)}At=d+x*2,H=ft*At;for(let Ct=0;Ct<He;Ct++){let Bt=jt[Ct];oe(Bt[0]+H,Bt[1]+H,Bt[2]+H)}}else{for(let At=0;At<He;At++){let H=jt[At];oe(H[2],H[1],H[0])}for(let At=0;At<He;At++){let H=jt[At];oe(H[0]+ft*d,H[1]+ft*d,H[2]+ft*d)}}n.addGroup(et,s.length/3-et,0)}function _t(){let et=s.length/3,At=0;vt(Q,At),At+=Q.length;for(let H=0,Ct=Y.length;H<Ct;H++){let Bt=Y[H];vt(Bt,At),At+=Bt.length}n.addGroup(et,s.length/3-et,1)}function vt(et,At){let H=et.length;for(;--H>=0;){let Ct=H,Bt=H-1;Bt<0&&(Bt=et.length-1);for(let de=0,he=d+x*2;de<he;de++){let ue=ft*de,Se=ft*(de+1),q=At+Ct+ue,Ce=At+Bt+ue,we=At+Bt+Se,N=At+Ct+Se;Zt(q,Ce,we,N)}}}function Pt(et,At,H){c.push(et),c.push(At),c.push(H)}function oe(et,At,H){me(et),me(At),me(H);let Ct=s.length/3,Bt=B.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);ne(Bt[0]),ne(Bt[1]),ne(Bt[2])}function Zt(et,At,H,Ct){me(et),me(At),me(Ct),me(At),me(H),me(Ct);let Bt=s.length/3,de=B.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ne(de[0]),ne(de[1]),ne(de[3]),ne(de[1]),ne(de[2]),ne(de[3])}function me(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function ne(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yd[s.type]().fromJSON(s)),new i(n,t.options)}},vx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new $t(r,a),new $t(l,c),new $t(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],v=t[n*3+2],p=t[s*3],y=t[s*3+1],M=t[s*3+2],I=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new $t(a,1-c),new $t(h,1-v),new $t(p,1-M),new $t(I,1-m)]:[new $t(l,1-c),new $t(d,1-v),new $t(y,1-M),new $t(x,1-m)]}};function yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zo=class i extends yn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,d=c+1,v=t/l,p=e/c,y=[],M=[],I=[],x=[];for(let m=0;m<d;m++){let B=m*p-a;for(let k=0;k<h;k++){let R=k*v-r;M.push(R,-B,0),I.push(0,0,1),x.push(k/l),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let B=0;B<l;B++){let k=B+h*m,R=B+h*(m+1),E=B+1+h*(m+1),O=B+1+h*m;y.push(k,R,O),y.push(R,E,O)}this.setIndex(y),this.setAttribute("position",new vn(M,3)),this.setAttribute("normal",new vn(I,3)),this.setAttribute("uv",new vn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var $o=class extends yn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Z,r=new Z;if(t.index!==null){let a=t.attributes.position,l=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=c.length;h<d;++h){let v=c[h],p=v.start,y=v.count;for(let M=p,I=p+y;M<I;M+=3)for(let x=0;x<3;x++){let m=l.getX(M+x),B=l.getX(M+(x+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,B),om(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){let d=3*l+h,v=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),om(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new vn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function om(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Sr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(lm(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=Sr(i[e]);for(let s in n)t[s]=n[s]}return t}function lm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var al={clone:Sr,merge:Wn},Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=Sx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new en().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$c=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Vo=class extends Qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=ih,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vc=class extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function na(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gc=class extends Os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gd,endingEnd:gd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case _d:r=t,l=2*e-n;break;case xd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _d:a=t,c=2*n-e;break;case xd:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this._offsetPrev,v=this._offsetNext,p=this._weightPrev,y=this._weightNext,M=(n-e)/(s-e),I=M*M,x=I*M,m=-p*x+2*p*I-p*M,B=(1+p)*x+(-1.5-2*p)*I+(-.5+p)*M+1,k=(-1-y)*x+(1.5+y)*I+.5*M,R=y*x-y*I;for(let E=0;E!==l;++E)r[E]=m*a[d+E]+B*a[h+E]+k*a[c+E]+R*a[v+E];return r}},Wc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=(n-e)/(s-e),v=1-d;for(let p=0;p!==l;++p)r[p]=a[h+p]*v+a[c+p]*d;return r}},Xc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qc=class extends Os{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let M=(n-e)/(s-e),I=1-M;for(let x=0;x!==l;++x)r[x]=a[h+x]*I+a[c+x]*M;return r}let p=l*2,y=t-1;for(let M=0;M!==l;++M){let I=a[h+M],x=a[c+M],m=y*p+M*2,B=v[m],k=v[m+1],R=t*p+M*2,E=d[R],O=d[R+1],X=Ex(n,e,B,E,s);r[M]=rg(X,I,k,O,x)}return r}};function rg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ex(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=rg(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=wx(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var xi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dd(t.settings)&&(n.settings={inTangents:na(t.settings.inTangents,Array),outTangents:na(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case Ec:e=this.InterpolantFactoryMethodLinear;break;case pc:e=this.InterpolantFactoryMethodSmooth;break;case md:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return pc;case this.InterpolantFactoryMethodBezier:return md}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dd(this.settings)&&(cm(this.settings.inTangents,t),cm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){ye("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){ye("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&f_(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){ye("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pc,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)c=!0;else{let v=l*n,p=v-n,y=v+n;for(let M=0;M!==n;++M){let I=e[v+M];if(I!==e[p+M]||I!==e[y+M]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let v=l*n,p=a*n;for(let y=0;y!==n;++y)e[p+y]=e[v+y]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Ec;var Bs=class extends xi{constructor(t,e,n){super(t,e,n)}};Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=go;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};Yc.prototype.ValueTypeName="color";var Zc=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};Zc.prototype.ValueTypeName="number";var Jc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)Ki.slerpFlat(r,0,a,h-l,a,h,c);return r}},Ho=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends xi{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=go;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}};jc.prototype.ValueTypeName="vector";var Kc=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,v){return h.push(d,v),this},this.removeHandler=function(d){let v=h.indexOf(d);return v!==-1&&h.splice(v,2),this},this.getHandler=function(d){for(let v=0,p=h.length;v<p;v+=2){let y=h[v],M=h[v+1];if(y.global&&(y.lastIndex=0),y.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ag=new Kc,Qc=class{constructor(t){this.manager=t!==void 0?t:ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Go=class extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wo=class extends Go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fd=new Ve,hm=new Z,um=new Z,th=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hm.setFromMatrixPosition(t.matrixWorld),e.position.copy(hm),um.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(um),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ca||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},uc=new Z,dc=new Ki,qi=new Z,Xo=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uc,dc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(uc,dc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new Z,dm=new $t,fm=new $t,Gn=class extends Xo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z)}getViewSize(t,e){return this.getViewBounds(t,dm,fm),e.subVectors(fm,dm)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ya=class extends Xo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wd=class extends th{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends Go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new wd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Yo=class extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ia=-90,sa=1,eh=class extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gn(ia,sa,t,e);s.layers=this.layers,this.add(s);let r=new Gn(ia,sa,t,e);r.layers=this.layers,this.add(r);let a=new Gn(ia,sa,t,e);a.layers=this.layers,this.add(a);let l=new Gn(ia,sa,t,e);l.layers=this.layers,this.add(l);let c=new Gn(ia,sa,t,e);c.layers=this.layers,this.add(c);let h=new Gn(ia,sa,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,d]=this.children,v=t.getRenderTarget(),p=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,p,y),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},nh=class extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var tf="\\[\\]\\.:\\/",Tx=new RegExp("["+tf+"]","g"),ef="[^"+tf+"]",Ax="[^"+tf.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",ef),Rx=/(WCOD+)?/.source.replace("WCOD",Ax),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),Lx=new RegExp("^"+Cx+Rx+Ix+Px+"$"),Dx=["material","materials","bones","map"],Ed=class{constructor(t,e,n){let s=n||fn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tx,"")}static parseTrackName(t){let e=Lx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fn.Composite=Ed;fn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fn.prototype.GetterByBindingType=[fn.prototype._getValue_direct,fn.prototype._getValue_array,fn.prototype._getValue_arrayElement,fn.prototype._getValue_toArray];fn.prototype.SetterByBindingTypeAndVersioning=[[fn.prototype._setValue_direct,fn.prototype._setValue_direct_setNeedsUpdate,fn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_array,fn.prototype._setValue_array_setNeedsUpdate,fn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_arrayElement,fn.prototype._setValue_arrayElement_setNeedsUpdate,fn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_fromArray,fn.prototype._setValue_fromArray_setNeedsUpdate,fn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qb=new Float32Array(1);var zs=class extends Rc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var pm=new Ve,Zo=class{constructor(t,e,n=0,s=1/0){this.ray=new fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pm),this}intersectObject(t,e=!0,n=[]){return Td(t,this,n,e),n.sort(mm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Td(t[s],this,n,e);return n.sort(mm),n}};function mm(i,t){return i.distance-t.distance}function Td(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Td(r[a],t,e,!0)}}var Ad=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var gm=new Z,fc=new Z,ra=new Z,aa=new Z,pd=new Z,Nx=new Z,Ux=new Z,Jo=class{constructor(t=new Z,e=new Z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){gm.subVectors(t,this.start),fc.subVectors(this.end,this.start);let n=fc.dot(fc);if(n===0)return 0;let r=fc.dot(gm)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Nx,n=Ux){let s=10000000000000001e-32,r,a,l=this.start,c=t.start,h=this.end,d=t.end;ra.subVectors(h,l),aa.subVectors(d,c),pd.subVectors(l,c);let v=ra.dot(ra),p=aa.dot(aa),y=aa.dot(pd);if(v<=s&&p<=s)return e.copy(l),n.copy(c),e.sub(n),e.dot(e);if(v<=s)r=0,a=y/p,a=Re(a,0,1);else{let M=ra.dot(pd);if(p<=s)a=0,r=Re(-M/v,0,1);else{let I=ra.dot(aa),x=v*p-I*I;x!==0?r=Re((I*y-M*p)/x,0,1):r=0,a=(I*r+y)/p,a<0?(a=0,r=Re(-M/v,0,1)):a>1&&(a=1,r=Re((I-M)/v,0,1))}}return e.copy(l).addScaledVector(ra,r),n.copy(c).addScaledVector(aa,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function nf(i,t,e,n){let s=Fx(n);switch(e){case Xd:return i*t;case hh:return i*t/s.components*s.byteLength;case uh:return i*t/s.components*s.byteLength;case Ws:return i*t*2/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case qd:return i*t*3/s.components*s.byteLength;case Ri:return i*t*4/s.components*s.byteLength;case fh:return i*t*4/s.components*s.byteLength;case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mh:case _h:return Math.max(i,16)*Math.max(t,8)/4;case ph:case gh:return Math.max(i,8)*Math.max(t,8)/2;case xh:case vh:case Sh:case Mh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yh:case sl:case bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bh:case kh:case zh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case Vh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rl:case Hh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fx(i){switch(i){case hi:case Vd:return{byteLength:1,components:1};case ba:case Hd:case Gi:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Hi:case oh:case Ci:return{byteLength:4,components:1};case Gd:case Wd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bx(i){let t=new WeakMap;function e(l,c){let h=l.array,d=l.usage,v=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,c,h){let d=c.array,v=c.updateRanges;if(i.bindBuffer(h,l),v.length===0)i.bufferSubData(h,0,d);else{v.sort((y,M)=>y.start-M.start);let p=0;for(let y=1;y<v.length;y++){let M=v[p],I=v[y];I.start<=M.start+M.count+1?M.count=Math.max(M.count,I.start+I.count-M.start):(++p,v[p]=I)}v.length=p+1;for(let y=0,M=v.length;y<M;y++){let I=v[y];i.bufferSubData(h,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var kx=`#ifdef USE_ALPHAHASH
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
}`,Ne={alphahash_fragment:kx,alphahash_pars_fragment:zx,alphamap_fragment:$x,alphamap_pars_fragment:Vx,alphatest_fragment:Hx,alphatest_pars_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:qx,batching_vertex:Yx,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:jx,iridescence_fragment:Kx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:tv,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:av,color_vertex:ov,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:hv,displacementmap_pars_vertex:uv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:_v,envmap_common_pars_fragment:xv,envmap_pars_fragment:vv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Pv,envmap_vertex:Sv,fog_vertex:Mv,fog_pars_vertex:bv,fog_fragment:wv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Iv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Dv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:zv,lightprobes_pars_fragment:$v,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:jv,morphinstance_vertex:Kv,morphcolor_vertex:Qv,morphnormal_vertex:ty,morphtarget_pars_vertex:ey,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:ay,normal_vertex:oy,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:_y,dithering_pars_fragment:xy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:My,shadowmap_vertex:by,shadowmask_pars_fragment:wy,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Ry,specularmap_pars_fragment:Iy,tonemapping_fragment:Py,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Ny,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:ky,background_frag:zy,backgroundCube_vert:$y,backgroundCube_frag:Vy,cube_vert:Hy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distance_vert:qy,distance_frag:Yy,equirect_vert:Zy,equirect_frag:Jy,linedashed_vert:jy,linedashed_frag:Ky,meshbasic_vert:Qy,meshbasic_frag:tS,meshlambert_vert:eS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:sS,meshnormal_vert:rS,meshnormal_frag:aS,meshphong_vert:oS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:hS,meshtoon_vert:uS,meshtoon_frag:dS,points_vert:fS,points_frag:pS,shadow_vert:mS,shadow_frag:gS,sprite_vert:_S,sprite_frag:xS},Ht={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},ti={basic:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Wn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Wn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Wn([Ht.points,Ht.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Wn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Wn([Ht.common,Ht.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Wn([Ht.sprite,Ht.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Wn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Wn([Ht.lights,Ht.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ti.physical={uniforms:Wn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var qh={r:0,b:0,g:0},vS=new Ve,Rg=new Ae;Rg.set(-1,0,0,0,1,0,0,0,1);function yS(i,t,e,n,s,r){let a=new _e(0),l=s===!0?0:1,c,h,d=null,v=0,p=null;function y(B){let k=B.isScene===!0?B.background:null;if(k&&k.isTexture){let R=B.backgroundBlurriness>0;k=t.get(k,R)}return k}function M(B){let k=!1,R=y(B);R===null?x(a,l):R&&R.isColor&&(x(R,1),k=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(B,k){let R=y(k);R&&(R.isCubeTexture||R.mapping===Ko)?(h===void 0&&(h=new Dn(new ga(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Sr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vS.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Rg),h.material.toneMapped=ze.getTransfer(R.colorSpace)!==tn,(d!==R||v!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,p=i.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Dn(new zo(2,2),new Nn({name:"BackgroundMaterial",uniforms:Sr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,c.material.toneMapped=ze.getTransfer(R.colorSpace)!==tn,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,v=R.version,p=i.toneMapping),c.layers.enableAll(),B.unshift(c,c.geometry,c.material,0,0,null))}function x(B,k){B.getRGB(qh,Qd(i)),e.buffers.color.setClear(qh.r,qh.g,qh.b,k,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(B,k=1){a.set(B),l=k,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(B){l=B,x(a,l)},render:M,addToRenderList:I,dispose:m}}function SS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function l(Y,at,lt,J,Q){let ut=!1,ft=v(Y,J,lt,at);r!==ft&&(r=ft,h(r.object)),ut=y(Y,J,lt,Q),ut&&M(Y,J,lt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ut||a)&&(a=!1,R(Y,at,lt,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(Y){return i.bindVertexArray(Y)}function d(Y){return i.deleteVertexArray(Y)}function v(Y,at,lt,J){let Q=J.wireframe===!0,ut=n[at.id];ut===void 0&&(ut={},n[at.id]=ut);let ft=Y.isInstancedMesh===!0?Y.id:0,Tt=ut[ft];Tt===void 0&&(Tt={},ut[ft]=Tt);let pt=Tt[lt.id];pt===void 0&&(pt={},Tt[lt.id]=pt);let wt=pt[Q];return wt===void 0&&(wt=p(c()),pt[Q]=wt),wt}function p(Y){let at=[],lt=[],J=[];for(let Q=0;Q<e;Q++)at[Q]=0,lt[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:lt,attributeDivisors:J,object:Y,attributes:{},index:null}}function y(Y,at,lt,J){let Q=r.attributes,ut=at.attributes,ft=0,Tt=lt.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let bt=Q[pt],Xt=ut[pt];if(Xt===void 0&&(pt==="instanceMatrix"&&Y.instanceMatrix&&(Xt=Y.instanceMatrix),pt==="instanceColor"&&Y.instanceColor&&(Xt=Y.instanceColor)),bt===void 0||bt.attribute!==Xt||Xt&&bt.data!==Xt.data)return!0;ft++}return r.attributesNum!==ft||r.index!==J}function M(Y,at,lt,J){let Q={},ut=at.attributes,ft=0,Tt=lt.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let bt=ut[pt];bt===void 0&&(pt==="instanceMatrix"&&Y.instanceMatrix&&(bt=Y.instanceMatrix),pt==="instanceColor"&&Y.instanceColor&&(bt=Y.instanceColor));let Xt={};Xt.attribute=bt,bt&&bt.data&&(Xt.data=bt.data),Q[pt]=Xt,ft++}r.attributes=Q,r.attributesNum=ft,r.index=J}function I(){let Y=r.newAttributes;for(let at=0,lt=Y.length;at<lt;at++)Y[at]=0}function x(Y){m(Y,0)}function m(Y,at){let lt=r.newAttributes,J=r.enabledAttributes,Q=r.attributeDivisors;lt[Y]=1,J[Y]===0&&(i.enableVertexAttribArray(Y),J[Y]=1),Q[Y]!==at&&(i.vertexAttribDivisor(Y,at),Q[Y]=at)}function B(){let Y=r.newAttributes,at=r.enabledAttributes;for(let lt=0,J=at.length;lt<J;lt++)at[lt]!==Y[lt]&&(i.disableVertexAttribArray(lt),at[lt]=0)}function k(Y,at,lt,J,Q,ut,ft){ft===!0?i.vertexAttribIPointer(Y,at,lt,Q,ut):i.vertexAttribPointer(Y,at,lt,J,Q,ut)}function R(Y,at,lt,J){I();let Q=J.attributes,ut=lt.getAttributes(),ft=at.defaultAttributeValues;for(let Tt in ut){let pt=ut[Tt];if(pt.location>=0){let wt=Q[Tt];if(wt===void 0&&(Tt==="instanceMatrix"&&Y.instanceMatrix&&(wt=Y.instanceMatrix),Tt==="instanceColor"&&Y.instanceColor&&(wt=Y.instanceColor)),wt!==void 0){let bt=wt.normalized,Xt=wt.itemSize,jt=t.get(wt);if(jt===void 0)continue;let He=jt.buffer,Ie=jt.type,Be=jt.bytesPerElement,_t=Ie===i.INT||Ie===i.UNSIGNED_INT||wt.gpuType===oh;if(wt.isInterleavedBufferAttribute){let vt=wt.data,Pt=vt.stride,oe=wt.offset;if(vt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<pt.locationSize;Zt++)m(pt.location+Zt,vt.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Zt=0;Zt<pt.locationSize;Zt++)x(pt.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Zt=0;Zt<pt.locationSize;Zt++)k(pt.location+Zt,Xt/pt.locationSize,Ie,bt,Pt*Be,(oe+Xt/pt.locationSize*Zt)*Be,_t)}else{if(wt.isInstancedBufferAttribute){for(let vt=0;vt<pt.locationSize;vt++)m(pt.location+vt,wt.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let vt=0;vt<pt.locationSize;vt++)x(pt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let vt=0;vt<pt.locationSize;vt++)k(pt.location+vt,Xt/pt.locationSize,Ie,bt,Xt*Be,Xt/pt.locationSize*vt*Be,_t)}}else if(ft!==void 0){let bt=ft[Tt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(pt.location,bt);break;case 3:i.vertexAttrib3fv(pt.location,bt);break;case 4:i.vertexAttrib4fv(pt.location,bt);break;default:i.vertexAttrib1fv(pt.location,bt)}}}}B()}function E(){U();for(let Y in n){let at=n[Y];for(let lt in at){let J=at[lt];for(let Q in J){let ut=J[Q];for(let ft in ut)d(ut[ft].object),delete ut[ft];delete J[Q]}}delete n[Y]}}function O(Y){if(n[Y.id]===void 0)return;let at=n[Y.id];for(let lt in at){let J=at[lt];for(let Q in J){let ut=J[Q];for(let ft in ut)d(ut[ft].object),delete ut[ft];delete J[Q]}}delete n[Y.id]}function X(Y){for(let at in n){let lt=n[at];for(let J in lt){let Q=lt[J];if(Q[Y.id]===void 0)continue;let ut=Q[Y.id];for(let ft in ut)d(ut[ft].object),delete ut[ft];delete Q[Y.id]}}}function A(Y){for(let at in n){let lt=n[at],J=Y.isInstancedMesh===!0?Y.id:0,Q=lt[J];if(Q!==void 0){for(let ut in Q){let ft=Q[ut];for(let Tt in ft)d(ft[Tt].object),delete ft[Tt];delete Q[ut]}delete lt[J],Object.keys(lt).length===0&&delete n[at]}}}function U(){W(),a=!0,r!==s&&(r=s,h(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:U,resetDefaultState:W,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:X,initAttributes:I,enableAttribute:x,disableUnusedAttributes:B}}function MS(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function l(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];e.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function bS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let X=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(X){return!(X!==Ri&&n.convert(X)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(X){let A=X===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(X!==hi&&X!==Ci&&!A&&n.convert(X)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(X){if(X==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=c(h);d!==h&&(ve("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let v=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:B,maxVaryings:k,maxFragmentUniforms:R,maxSamples:E,samples:O}}function wS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Oi,l=new Ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){let y=v.length!==0||p||n!==0||s;return s=p,n=v.length,y},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,p){e=d(v,p,0)},this.setState=function(v,p,y){let M=v.clippingPlanes,I=v.clipIntersection,x=v.clipShadows,m=i.get(v);if(!s||M===null||M.length===0||r&&!x)r?d(null):h();else{let B=r?0:n,k=B*4,R=m.clippingState||null;c.value=R,R=d(M,p,k,y);for(let E=0;E!==k;++E)R[E]=e[E];m.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=B}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,p,y,M){let I=v!==null?v.length:0,x=null;if(I!==0){if(x=c.value,M!==!0||x===null){let m=y+I*4,B=p.matrixWorldInverse;l.getNormalMatrix(B),(x===null||x.length<m)&&(x=new Float32Array(m));for(let k=0,R=y;k!==I;++k,R+=4)a.copy(v[k]).applyMatrix4(B,l),a.normal.toArray(x,R),x[R+3]=a.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,x}}var Ta=4,ES=6,TS=20,AS=256,ol=new ya,og=new _e,sf=null,rf=0,af=0,of=!1,CS=new Z,Mr=new Z,Zh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=CS}=r;sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sf,rf,af),this._renderer.xr.enabled=of,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Gi,format:Ri,colorSpace:_o,depthBuffer:!1},s=lg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RS(r)),this._blurMaterial=PS(r,t,e),this._ggxMaterial=IS(r,t,e)}return s}_compileMaterial(t){let e=new Dn(new yn,t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,n,s,r){let c=new Gn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,y=v.toneMapping;v.getClearColor(og),v.toneMapping=Vi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new ga,new pr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,x=I.material,m=!1,B=t.background;B?B.isColor&&(x.color.copy(B),t.background=null,m=!0):(x.color.copy(og),m=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[k],r.y,r.z)):R===1?(c.up.set(0,0,h[k]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[k],r.z)):(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[k]));let E=this._cubeSize;Ea(s,R*E,k>2?E:0,E,E),v.setRenderTarget(s),m&&v.render(I,c),v.render(t,c)}v.toneMapping=y,v.autoClear=p,t.background=B}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vs||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ol)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-d*d),p=h*1.25,y=v*p,{_lodMax:M}=this,I=this._sizeLods[n],x=3*I*(n>M-Ta?n-M+Ta:0),m=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=M-e,Ea(r,x,m,3*I,2*I),s.setRenderTarget(r),s.render(l,ol),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,Ea(t,x,m,3*I,2*I),s.setRenderTarget(t),s.render(l,ol)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-Ta?s-this._lodMax+Ta:0),p=4*(this._cubeSize-d);Ea(e,v,p,3*d,2*d),a.setRenderTarget(e),a.render(c,ol)}};function RS(i){let t=[],e=[],n=i,s=i-Ta+1+ES;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],v=6,p=6,y=3,M=new Float32Array(y*p*v),I=new Float32Array(y*p*v);for(let m=0;m<v;m++){let B=m%3*2/3-1,k=m>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];M.set(R,y*p*m);for(let E=0;E<p;E++){let O=d[E*2]*2-1,X=d[E*2+1]*2-1;m===0?Mr.set(1,X,O):m===1?Mr.set(-O,1,-X):m===2?Mr.set(-O,X,1):m===3?Mr.set(-1,X,-O):m===4?Mr.set(-O,-1,X):Mr.set(O,X,-1),Mr.toArray(I,(m*p+E)*y)}}let x=new yn;x.setAttribute("position",new rn(M,y)),x.setAttribute("outputDirection",new rn(I,y)),e.push(new Dn(x,null)),n>Ta&&n--}return{lodMeshes:e,sizeLods:t}}function lg(i,t,e){let n=new li(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function IS(i,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function cg(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function hg(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

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
	`}var Jh=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ro(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ga(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:es});r.uniforms.tEquirect.value=e;let a=new Dn(s,r),l=e.minFilter;return e.minFilter===Hs&&(e.minFilter=On),new eh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function LS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(p,y=!1){return p==null?null:y?a(p):r(p)}function r(p){if(p&&p.isTexture){let y=p.mapping;if(y===sh||y===rh)if(t.has(p)){let M=t.get(p).texture;return l(M,p.mapping)}else{let M=p.image;if(M&&M.height>0){let I=new Jh(M.height);return I.fromEquirectangularTexture(i,p),t.set(p,I),p.addEventListener("dispose",h),l(I.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let y=p.mapping,M=y===sh||y===rh,I=y===Vs||y===yr;if(M||I){let x=e.get(p),m=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new Zh(i)),x=M?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),x.texture;if(x!==void 0)return x.texture;{let B=p.image;return M&&B&&B.height>0||I&&B&&c(B)?(n===null&&(n=new Zh(i)),x=M?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),p.addEventListener("dispose",d),x.texture):null}}}return p}function l(p,y){return y===sh?p.mapping=Vs:y===rh&&(p.mapping=yr),p}function c(p){let y=0,M=6;for(let I=0;I<M;I++)p[I]!==void 0&&y++;return y===M}function h(p){let y=p.target;y.removeEventListener("dispose",h);let M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function d(p){let y=p.target;y.removeEventListener("dispose",d);let M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function DS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&dr("WebGLRenderer: "+n+" extension not supported."),s}}}function NS(i,t,e,n){let s={},r=new WeakMap;function a(v){let p=v.target;p.index!==null&&t.remove(p.index);for(let M in p.attributes)t.remove(p.attributes[M]);p.removeEventListener("dispose",a),delete s[p.id];let y=r.get(p);y&&(t.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(v,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(v){let p=v.attributes;for(let y in p)t.update(p[y],i.ARRAY_BUFFER)}function h(v){let p=[],y=v.index,M=v.attributes.position,I=0;if(M===void 0)return;if(y!==null){let B=y.array;I=y.version;for(let k=0,R=B.length;k<R;k+=3){let E=B[k+0],O=B[k+1],X=B[k+2];p.push(E,O,O,X,X,E)}}else{let B=M.array;I=M.version;for(let k=0,R=B.length/3-1;k<R;k+=3){let E=k+0,O=k+1,X=k+2;p.push(E,O,O,X,X,E)}}let x=new(M.count>=65535?wo:bo)(p,1);x.version=I;let m=r.get(v);m&&t.remove(m),r.set(v,x)}function d(v){let p=r.get(v);if(p){let y=v.index;y!==null&&p.version<y.version&&h(v)}else h(v);return r.get(v)}return{get:l,update:c,getWireframeAttribute:d}}function US(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function c(v,p){i.drawElements(n,p,r,v*a),e.update(p,n,1)}function h(v,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,v*a,y),e.update(p,n,y))}function d(v,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,v,0,y);let I=0;for(let x=0;x<y;x++)I+=p[x];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function FS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function OS(i,t,e){let n=new WeakMap,s=new en;function r(a,l,c){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,p=n.get(l);if(p===void 0||p.count!==v){let U=function(){X.dispose(),n.delete(l),l.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();let y=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],B=l.morphAttributes.color||[],k=0;y===!0&&(k=1),M===!0&&(k=2),I===!0&&(k=3);let R=l.attributes.position.count*k,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*E*4*v),X=new So(O,R,E,v);X.type=Ci,X.needsUpdate=!0;let A=k*4;for(let W=0;W<v;W++){let Y=x[W],at=m[W],lt=B[W],J=R*E*4*W;for(let Q=0;Q<Y.count;Q++){let ut=Q*A;y===!0&&(s.fromBufferAttribute(Y,Q),O[J+ut+0]=s.x,O[J+ut+1]=s.y,O[J+ut+2]=s.z,O[J+ut+3]=0),M===!0&&(s.fromBufferAttribute(at,Q),O[J+ut+4]=s.x,O[J+ut+5]=s.y,O[J+ut+6]=s.z,O[J+ut+7]=0),I===!0&&(s.fromBufferAttribute(lt,Q),O[J+ut+8]=s.x,O[J+ut+9]=s.y,O[J+ut+10]=s.z,O[J+ut+11]=lt.itemSize===4?s.w:1)}}p={count:v,texture:X,size:new $t(R,E)},n.set(l,p),l.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let M=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function BS(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,v=h.geometry,p=t.get(h,v);if(r.get(p)!==d&&(t.update(p),r.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==d&&(y.update(),r.set(y,d))}return p}function l(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var kS={[Nd]:"LINEAR_TONE_MAPPING",[Ud]:"REINHARD_TONE_MAPPING",[Fd]:"CINEON_TONE_MAPPING",[Od]:"ACES_FILMIC_TONE_MAPPING",[kd]:"AGX_TONE_MAPPING",[zd]:"NEUTRAL_TONE_MAPPING",[Bd]:"CUSTOM_TONE_MAPPING"};function zS(i,t,e,n,s,r){let a=new li(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new yn;h.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vn([0,2,0,0,2,0],2));let d=new $c({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Dn(h,d),p=new ya(-1,1,1,-1,0,1),y=null,M=null,I=!1,x,m=null,B=[],k=!1;this.setSize=function(R,E){a.setSize(R,E),l!==null&&l.setSize(R,E),c!==null&&c.setSize(R,E);for(let O=0;O<B.length;O++){let X=B[O];X.setSize&&X.setSize(R,E)}},this.setEffects=function(R){B=R,k=B.length>0&&B[0].isRenderPass===!0;let E=a.width,O=a.height;B.length>0&&l===null&&(l=new li(E,O,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),c=new li(E,O,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let X=0;X<B.length;X++){let A=B[X];A.setSize&&A.setSize(E,O)}},this.begin=function(R,E){if(I||R.toneMapping===Vi&&B.length===0)return!1;if(m=E,E!==null){let O=E.width,X=E.height;(a.width!==O||a.height!==X)&&this.setSize(O,X)}return k===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return k},this.end=function(R,E){R.toneMapping=x,I=!0;let O=a,X=l;for(let A=0;A<B.length;A++){let U=B[A];U.enabled!==!1&&(U.render(R,X,O,E),U.needsSwap!==!1&&(O=X,X=X===l?c:l))}if(y!==R.outputColorSpace||M!==R.toneMapping){y=R.outputColorSpace,M=R.toneMapping,d.defines={},ze.getTransfer(y)===tn&&(d.defines.SRGB_TRANSFER="");let A=kS[M];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(m),R.render(v,p),m=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Ig=new oi,hf=new Fs(1,1),Pg=new So,Lg=new Cc,Dg=new Ro,ug=[],dg=[],fg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function Ca(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ug[s];if(r===void 0&&(r=new Float32Array(s),ug[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function En(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qh(i,t){let e=dg[t];e===void 0&&(e=new Int32Array(t),dg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $S(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function VS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2fv(this.addr,t),Tn(e,t)}}function HS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;i.uniform3fv(this.addr,t),Tn(e,t)}}function GS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4fv(this.addr,t),Tn(e,t)}}function WS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;mg.set(n),i.uniformMatrix2fv(this.addr,!1,mg),Tn(e,n)}}function XS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;pg.set(n),i.uniformMatrix3fv(this.addr,!1,pg),Tn(e,n)}}function qS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;fg.set(n),i.uniformMatrix4fv(this.addr,!1,fg),Tn(e,n)}}function YS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ZS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2iv(this.addr,t),Tn(e,t)}}function JS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3iv(this.addr,t),Tn(e,t)}}function jS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4iv(this.addr,t),Tn(e,t)}}function KS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function QS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2uiv(this.addr,t),Tn(e,t)}}function tM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3uiv(this.addr,t),Tn(e,t)}}function eM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4uiv(this.addr,t),Tn(e,t)}}function nM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=e.isReversedDepthBuffer()?Xh:Wh,r=hf):r=Ig,e.setTexture2D(t||r,s)}function iM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lg,s)}function sM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dg,s)}function rM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pg,s)}function aM(i){switch(i){case 5126:return $S;case 35664:return VS;case 35665:return HS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return ZS;case 35668:case 35672:return JS;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return QS;case 36295:return tM;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function oM(i,t){i.uniform1fv(this.addr,t)}function lM(i,t){let e=Ca(t,this.size,2);i.uniform2fv(this.addr,e)}function cM(i,t){let e=Ca(t,this.size,3);i.uniform3fv(this.addr,e)}function hM(i,t){let e=Ca(t,this.size,4);i.uniform4fv(this.addr,e)}function uM(i,t){let e=Ca(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dM(i,t){let e=Ca(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fM(i,t){let e=Ca(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pM(i,t){i.uniform1iv(this.addr,t)}function mM(i,t){i.uniform2iv(this.addr,t)}function gM(i,t){i.uniform3iv(this.addr,t)}function _M(i,t){i.uniform4iv(this.addr,t)}function xM(i,t){i.uniform1uiv(this.addr,t)}function vM(i,t){i.uniform2uiv(this.addr,t)}function yM(i,t){i.uniform3uiv(this.addr,t)}function SM(i,t){i.uniform4uiv(this.addr,t)}function MM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=hf:a=Ig;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function bM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lg,r[a])}function wM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dg,r[a])}function EM(i,t,e){let n=this.cache,s=t.length,r=Qh(e,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pg,r[a])}function TM(i){switch(i){case 5126:return oM;case 35664:return lM;case 35665:return cM;case 35666:return hM;case 35674:return uM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return xM;case 36294:return vM;case 36295:return yM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return EM}}var uf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=aM(e.type)}},df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=TM(e.type)}},ff=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function gg(i,t){i.seq.push(t),i.map[t.id]=t}function AM(i,t,e){let n=i.name,s=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),a=lf.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){gg(e,h===void 0?new uf(l,i,t):new df(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new ff(l),gg(e,v)),e=v}}}var Aa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);AM(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function _g(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var CM=37297,RM=0;function IM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var xg=new Ae;function PM(i){ze._getMatrix(xg,ze.workingColorSpace,i);let t=`mat3( ${xg.elements.map(e=>e.toFixed(4))} )`;switch(ze.getTransfer(i)){case xo:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+IM(i.getShaderSource(t),l)}else return r}function LM(i,t){let e=PM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var DM={[Nd]:"Linear",[Ud]:"Reinhard",[Fd]:"Cineon",[Od]:"ACESFilmic",[kd]:"AgX",[zd]:"Neutral",[Bd]:"Custom"};function NM(i,t){let e=DM[t];return e===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yh=new Z;function UM(){ze.getLuminanceCoefficients(Yh);let i=Yh.x.toFixed(4),t=Yh.y.toFixed(4),e=Yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function OM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function BM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function cl(i){return i!==""}function yg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(kM,$M)}var zM=new Map;function $M(i,t){let e=Ne[t];if(e===void 0){let n=zM.get(t);if(n!==void 0)e=Ne[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pf(e)}var VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(i){return i.replace(VM,HM)}function HM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var GM={[jo]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function WM(i){return GM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XM={[Vs]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Ko]:"ENVMAP_TYPE_CUBE_UV"};function qM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":XM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var YM={[yr]:"ENVMAP_MODE_REFRACTION"};function ZM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JM={[ih]:"ENVMAP_BLENDING_MULTIPLY",[Bm]:"ENVMAP_BLENDING_MIX",[km]:"ENVMAP_BLENDING_ADD"};function jM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":JM[i.combine]||"ENVMAP_BLENDING_NONE"}function KM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function QM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=WM(e),h=qM(e),d=ZM(e),v=jM(e),p=KM(e),y=FM(e),M=OM(r),I=s.createProgram(),x,m,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(cl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(cl).join(`
`),m.length>0&&(m+=`
`)):(x=[bg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),m=[bg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Ne.tonemapping_pars_fragment:"",e.toneMapping!==Vi?NM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,LM("linearToOutputTexel",e.outputColorSpace),UM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cl).join(`
`)),a=pf(a),a=yg(a,e),a=Sg(a,e),l=pf(l),l=yg(l,e),l=Sg(l,e),a=Mg(a),l=Mg(l),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let k=B+x+a,R=B+m+l,E=_g(s,s.VERTEX_SHADER,k),O=_g(s,s.FRAGMENT_SHADER,R);s.attachShader(I,E),s.attachShader(I,O),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function X(Y){if(i.debug.checkShaderErrors){let at=s.getProgramInfoLog(I)||"",lt=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(O)||"",Q=at.trim(),ut=lt.trim(),ft=J.trim(),Tt=!0,pt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,E,O);else{let wt=vg(s,E,"vertex"),bt=vg(s,O,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+Q+`
`+wt+`
`+bt)}else Q!==""?ve("WebGLProgram: Program Info Log:",Q):(ut===""||ft==="")&&(pt=!1);pt&&(Y.diagnostics={runnable:Tt,programLog:Q,vertexShader:{log:ut,prefix:x},fragmentShader:{log:ft,prefix:m}})}s.deleteShader(E),s.deleteShader(O),A=new Aa(s,I),U=BM(s,I)}let A;this.getUniforms=function(){return A===void 0&&X(this),A};let U;this.getAttributes=function(){return U===void 0&&X(this),U};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(I,CM)),W},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=E,this.fragmentShader=O,this}var tb=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gf(t),e.set(t,n)),n}},gf=class{constructor(t){this.id=tb++,this.code=t,this.usedTimes=0}};function eb(i){return i===Ws||i===sl||i===rl}function nb(i,t,e,n,s,r){let a=new fa,l=new mf,c=new Set,h=[],d=new Map,v=n.logarithmicDepthBuffer,p=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return c.add(A),A===0?"uv":`uv${A}`}function I(A,U,W,Y,at,lt){let J=Y.fog,Q=at.geometry,ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,Tt=t.get(A.envMap||ut,ft),pt=Tt&&Tt.mapping===Ko?Tt.image.height:null,wt=y[A.type];A.precision!==null&&(p=n.getMaxPrecision(A.precision),p!==A.precision&&ve("WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));let bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xt=bt!==void 0?bt.length:0,jt=0;Q.morphAttributes.position!==void 0&&(jt=1),Q.morphAttributes.normal!==void 0&&(jt=2),Q.morphAttributes.color!==void 0&&(jt=3);let He,Ie,Be,_t;if(wt){let je=ti[wt];He=je.vertexShader,Ie=je.fragmentShader}else{He=A.vertexShader,Ie=A.fragmentShader;let je=l.getVertexShaderStage(A),Ee=l.getFragmentShaderStage(A);l.update(A,je,Ee),Be=je.id,_t=Ee.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),oe=at.isInstancedMesh===!0,Zt=at.isBatchedMesh===!0,me=!!A.map,ne=!!A.matcap,et=!!Tt,At=!!A.aoMap,H=!!A.lightMap,Ct=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,de=!!A.displacementMap,he=!!A.emissiveMap,ue=!!A.metalnessMap,Se=!!A.roughnessMap,q=A.anisotropy>0,Ce=A.clearcoat>0,we=A.dispersion>0,N=A.retroreflectivity>0,w=A.iridescence>0,tt=A.sheen>0,K=A.transmission>0,mt=q&&!!A.anisotropyMap,Ut=Ce&&!!A.clearcoatMap,Ot=Ce&&!!A.clearcoatNormalMap,gt=Ce&&!!A.clearcoatRoughnessMap,St=w&&!!A.iridescenceMap,kt=w&&!!A.iridescenceThicknessMap,re=tt&&!!A.sheenColorMap,qt=tt&&!!A.sheenRoughnessMap,Gt=!!A.specularMap,ae=!!A.specularColorMap,ge=!!A.specularIntensityMap,Me=K&&!!A.transmissionMap,j=K&&!!A.thicknessMap,Ft=!!A.gradientMap,xt=!!A.alphaMap,zt=A.alphaTest>0,Jt=!!A.alphaHash,Et=!!A.extensions,le=Vi;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(le=i.toneMapping);let ie={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:He,fragmentShader:Ie,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:_t,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Zt,batchingColor:Zt&&at._colorsTexture!==null,instancing:oe,instancingColor:oe&&at.instanceColor!==null,instancingMorph:oe&&at.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:me,matcap:ne,envMap:et,envMapMode:et&&Tt.mapping,envMapCubeUVHeight:pt,aoMap:At,lightMap:H,bumpMap:Ct,normalMap:Bt,displacementMap:de,emissiveMap:he,normalMapObjectSpace:Bt&&A.normalMapType===Vm,normalMapTangentSpace:Bt&&A.normalMapType===Gh,packedNormalMap:Bt&&A.normalMapType===Gh&&eb(A.normalMap.format),metalnessMap:ue,roughnessMap:Se,anisotropy:q,anisotropyMap:mt,clearcoat:Ce,clearcoatMap:Ut,clearcoatNormalMap:Ot,clearcoatRoughnessMap:gt,dispersion:we,retroreflection:N,iridescence:w,iridescenceMap:St,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:re,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:ae,specularIntensityMap:ge,transmission:K,transmissionMap:Me,thicknessMap:j,gradientMap:Ft,opaque:A.transparent===!1&&A.blending===Ma&&A.alphaToCoverage===!1,alphaMap:xt,alphaTest:zt,alphaHash:Jt,combine:A.combine,mapUv:me&&M(A.map.channel),aoMapUv:At&&M(A.aoMap.channel),lightMapUv:H&&M(A.lightMap.channel),bumpMapUv:Ct&&M(A.bumpMap.channel),normalMapUv:Bt&&M(A.normalMap.channel),displacementMapUv:de&&M(A.displacementMap.channel),emissiveMapUv:he&&M(A.emissiveMap.channel),metalnessMapUv:ue&&M(A.metalnessMap.channel),roughnessMapUv:Se&&M(A.roughnessMap.channel),anisotropyMapUv:mt&&M(A.anisotropyMap.channel),clearcoatMapUv:Ut&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:qt&&M(A.sheenRoughnessMap.channel),specularMapUv:Gt&&M(A.specularMap.channel),specularColorMapUv:ae&&M(A.specularColorMap.channel),specularIntensityMapUv:ge&&M(A.specularIntensityMap.channel),transmissionMapUv:Me&&M(A.transmissionMap.channel),thicknessMapUv:j&&M(A.thicknessMap.channel),alphaMapUv:xt&&M(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Bt||q),vertexNormals:!!Q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!Q.attributes.uv&&(me||xt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:at.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:jt,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:me&&A.map.isVideoTexture===!0&&ze.getTransfer(A.map.colorSpace)===tn,decodeVideoTextureEmissive:he&&A.emissiveMap.isVideoTexture===!0&&ze.getTransfer(A.emissiveMap.colorSpace)===tn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ts,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function x(A){let U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(let W in A.defines)U.push(W),U.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(m(U,A),B(U,A),U.push(i.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function m(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numSunLights),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numSunLightShadows),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function B(A,U){a.disableAll(),U.instancing&&a.enable(0),U.instancingColor&&a.enable(1),U.instancingMorph&&a.enable(2),U.matcap&&a.enable(3),U.envMap&&a.enable(4),U.normalMapObjectSpace&&a.enable(5),U.normalMapTangentSpace&&a.enable(6),U.clearcoat&&a.enable(7),U.iridescence&&a.enable(8),U.alphaTest&&a.enable(9),U.vertexColors&&a.enable(10),U.vertexAlphas&&a.enable(11),U.vertexUv1s&&a.enable(12),U.vertexUv2s&&a.enable(13),U.vertexUv3s&&a.enable(14),U.vertexTangents&&a.enable(15),U.anisotropy&&a.enable(16),U.alphaHash&&a.enable(17),U.batching&&a.enable(18),U.dispersion&&a.enable(19),U.retroreflection&&a.enable(24),U.batchingColor&&a.enable(20),U.gradientMap&&a.enable(21),U.packedNormalMap&&a.enable(22),U.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),U.fog&&a.enable(0),U.useFog&&a.enable(1),U.flatShading&&a.enable(2),U.logarithmicDepthBuffer&&a.enable(3),U.reversedDepthBuffer&&a.enable(4),U.skinning&&a.enable(5),U.morphTargets&&a.enable(6),U.morphNormals&&a.enable(7),U.morphColors&&a.enable(8),U.premultipliedAlpha&&a.enable(9),U.shadowMapEnabled&&a.enable(10),U.doubleSided&&a.enable(11),U.flipSided&&a.enable(12),U.useDepthPacking&&a.enable(13),U.dithering&&a.enable(14),U.transmission&&a.enable(15),U.sheen&&a.enable(16),U.opaque&&a.enable(17),U.pointsUvs&&a.enable(18),U.decodeVideoTexture&&a.enable(19),U.decodeVideoTextureEmissive&&a.enable(20),U.alphaToCoverage&&a.enable(21),U.numLightProbeGrids>0&&a.enable(22),U.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function k(A){let U=y[A.type],W;if(U){let Y=ti[U];W=al.clone(Y.uniforms)}else W=A.uniforms;return W}function R(A,U){let W=d.get(U);return W!==void 0?++W.usedTimes:(W=new QM(i,U,A,s),h.push(W),d.set(U,W)),W}function E(A){if(--A.usedTimes===0){let U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function X(){l.dispose()}return{getParameters:I,getProgramCacheKey:x,getUniforms:k,acquireProgram:R,releaseProgram:E,releaseShaderCache:O,programs:h,dispose:X}}function ib(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function l(p,y,M,I,x,m){let B=i[t];return B===void 0?(B={id:p.id,object:p,geometry:y,material:M,materialVariant:a(p),groupOrder:I,renderOrder:p.renderOrder,z:x,group:m},i[t]=B):(B.id=p.id,B.object=p,B.geometry=y,B.material=M,B.materialVariant=a(p),B.groupOrder=I,B.renderOrder=p.renderOrder,B.z=x,B.group=m),t++,B}function c(p,y,M,I,x,m,B){B.reversedDepth===!0&&(x=-x);let k=l(p,y,M,I,x,m);M.transmission>0?n.push(k):M.transparent===!0?s.push(k):e.push(k)}function h(p,y,M,I,x,m){let B=l(p,y,M,I,x,m);M.transmission>0?n.unshift(B):M.transparent===!0?s.unshift(B):e.unshift(B)}function d(p,y){e.length>1&&e.sort(p||sb),n.length>1&&n.sort(y||wg),s.length>1&&s.sort(y||wg)}function v(){for(let p=t,y=i.length;p<y;p++){let M=i[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:v,sort:d}}function rb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Eg,i.set(n,[a])):s>=r.length?(a=new Eg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ab(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new _e};break;case"SpotLight":e={position:new Z,direction:new Z,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function ob(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lb=0;function cb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hb(i){let t=new ab,e=ob(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Z);let s=new Z,r=new Ve,a=new Ve;function l(h){let d=0,v=0,p=0;for(let at=0;at<9;at++)n.probe[at].set(0,0,0);let y=0,M=0,I=0,x=0,m=0,B=0,k=0,R=0,E=0,O=0,X=0,A=0,U=0,W=0;h.sort(cb);for(let at=0,lt=h.length;at<lt;at++){let J=h[at],Q=J.color,ut=J.intensity,ft=J.distance,Tt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Ws?Tt=J.shadow.map.texture:Tt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)d+=Q.r*ut,v+=Q.g*ut,p+=Q.b*ut;else if(J.isLightProbe){for(let pt=0;pt<9;pt++)n.probe[pt].addScaledVector(J.sh.coefficients[pt],ut);W++}else if(J.isSunLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let wt=J.shadow,bt=e.get(J);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[M]=bt,n.sunShadowMap[M]=Tt;let Xt=wt.getViewportCount();for(let jt=0;jt<Xt;jt++)n.sunShadowMatrix[I+jt]=wt.getMatrix(jt),n.sunShadowCascade[I+jt]=wt._cascadeData[jt];I+=Xt,M++}n.sun[y]=pt,y++}else if(J.isDirectionalLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let wt=J.shadow,bt=e.get(J);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.directionalShadow[x]=bt,n.directionalShadowMap[x]=Tt,n.directionalShadowMatrix[x]=J.shadow.matrix,E++}n.directional[x]=pt,x++}else if(J.isSpotLight){let pt=t.get(J);pt.position.setFromMatrixPosition(J.matrixWorld),pt.color.copy(Q).multiplyScalar(ut),pt.distance=ft,pt.coneCos=Math.cos(J.angle),pt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),pt.decay=J.decay,n.spot[B]=pt;let wt=J.shadow;if(J.map&&(n.spotLightMap[A]=J.map,A++,wt.updateMatrices(J),J.castShadow&&U++),n.spotLightMatrix[B]=wt.matrix,J.castShadow){let bt=e.get(J);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.spotShadow[B]=bt,n.spotShadowMap[B]=Tt,X++}B++}else if(J.isRectAreaLight){let pt=t.get(J);pt.color.copy(Q).multiplyScalar(ut),pt.halfWidth.set(J.width*.5,0,0),pt.halfHeight.set(0,J.height*.5,0),n.rectArea[k]=pt,k++}else if(J.isPointLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),pt.distance=J.distance,pt.decay=J.decay,J.castShadow){let wt=J.shadow,bt=e.get(J);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,bt.shadowCameraNear=wt.camera.near,bt.shadowCameraFar=wt.camera.far,n.pointShadow[m]=bt,n.pointShadowMap[m]=Tt,n.pointShadowMatrix[m]=J.shadow.matrix,O++}n.point[m]=pt,m++}else if(J.isHemisphereLight){let pt=t.get(J);pt.skyColor.copy(J.color).multiplyScalar(ut),pt.groundColor.copy(J.groundColor).multiplyScalar(ut),n.hemi[R]=pt,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=p;let Y=n.hash;(Y.sunLength!==y||Y.directionalLength!==x||Y.pointLength!==m||Y.spotLength!==B||Y.rectAreaLength!==k||Y.hemiLength!==R||Y.numSunShadows!==M||Y.numDirectionalShadows!==E||Y.numPointShadows!==O||Y.numSpotShadows!==X||Y.numSpotMaps!==A||Y.numLightProbes!==W)&&(n.sun.length=y,n.directional.length=x,n.spot.length=B,n.rectArea.length=k,n.point.length=m,n.hemi.length=R,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=X,n.spotShadowMap.length=X,n.spotLightMatrix.length=X+A-U,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=W,Y.sunLength=y,Y.directionalLength=x,Y.pointLength=m,Y.spotLength=B,Y.rectAreaLength=k,Y.hemiLength=R,Y.numSunShadows=M,Y.numDirectionalShadows=E,Y.numPointShadows=O,Y.numSpotShadows=X,Y.numSpotMaps=A,Y.numLightProbes=W,n.version=lb++)}function c(h,d){let v=0,p=0,y=0,M=0,I=0,x=0,m=d.matrixWorldInverse;for(let B=0,k=h.length;B<k;B++){let R=h[B];if(R.isSunLight){let E=n.sun[v];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(m),v++}else if(R.isDirectionalLight){let E=n.directional[p];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(R.isSpotLight){let E=n.spot[M];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),M++}else if(R.isRectAreaLight){let E=n.rectArea[I];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let E=n.point[y];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(m),y++}else if(R.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:l,setupView:c,state:n}}function Tg(i){let t=new hb(i),e=[],n=[],s=[];function r(p){v.camera=p,e.length=0,n.length=0,s.length=0}function a(p){e.push(p)}function l(p){n.push(p)}function c(p){s.push(p)}function h(){t.setup(e)}function d(p){t.setupView(e,p)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function ub(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Tg(i),t.set(s,[l])):r>=a.length?(l=new Tg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var db=`void main() {
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
}`,pb=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],mb=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ag=new Ve,ll=new Z,cf=new Z;function gb(i,t,e){let n=new ma,s=new $t,r=new $t,a=new en,l=new Vc,c=new Hc,h={},d=e.maxTextureSize,v={[$s]:Qn,[Qn]:$s,[ts]:ts},p=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:db,fragmentShader:fb}),y=p.clone();y.defines.HORIZONTAL_PASS=1;let M=new yn;M.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Dn(M,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let m=this.type;this.render=function(O,X,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===vm&&(ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jo);let U=i.getRenderTarget(),W=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),at=i.state;at.setBlending(es),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let lt=m!==this.type;lt&&X.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=O.length;J<Q;J++){let ut=O[J],ft=ut.shadow;if(ft===void 0){ve("WebGLShadowMap:",ut,"has no shadow.");continue}if(ft.autoUpdate===!1&&ft.needsUpdate===!1)continue;s.copy(ft.mapSize);let Tt=ft.getFrameExtents();s.multiply(Tt),r.copy(ft.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Tt.x),s.x=r.x*Tt.x,ft.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Tt.y),s.y=r.y*Tt.y,ft.mapSize.y=r.y));let pt=i.state.buffers.depth.getReversed();if(ft.camera._reversedDepth=pt,ft.map===null||lt===!0){if(ft.map!==null&&(ft.map.depthTexture!==null&&(ft.map.depthTexture.dispose(),ft.map.depthTexture=null),ft.map.dispose()),this.type===Sa){if(ut.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ft.map=new li(s.x,s.y,{format:Ws,type:Gi,minFilter:On,magFilter:On,generateMipmaps:!1}),ft.map.texture.name=ut.name+".shadowMap",ft.map.depthTexture=new Fs(s.x,s.y,Ci),ft.map.depthTexture.name=ut.name+".shadowMapDepth",ft.map.depthTexture.format=Ji,ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=Pn,ft.map.depthTexture.magFilter=Pn}else ut.isPointLight?(ft.map=new Jh(s.x),ft.map.depthTexture=new Nc(s.x,Hi)):(ft.map=new li(s.x,s.y),ft.map.depthTexture=new Fs(s.x,s.y,Hi)),ft.map.depthTexture.name=ut.name+".shadowMap",ft.map.depthTexture.format=Ji,this.type===jo?(ft.map.depthTexture.compareFunction=pt?Xh:Wh,ft.map.depthTexture.minFilter=On,ft.map.depthTexture.magFilter=On):(ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=Pn,ft.map.depthTexture.magFilter=Pn);ft.camera.updateProjectionMatrix()}ft.map.isWebGLCubeRenderTarget!==!0&&(ft.map.width!==s.x||ft.map.height!==s.y)&&ft.map.setSize(s.x,s.y);let wt=ft.map.isWebGLCubeRenderTarget?6:ft.getViewportCount();ut.isPointLight!==!0&&ft.updateMatrices(ut,A);for(let bt=0;bt<wt;bt++){let Xt=ft.getCamera(bt);if(ut.isPointLight){let jt=ft.camera,He=ft.matrix,Ie=ut.distance||jt.far;Ie!==jt.far&&(jt.far=Ie,jt.updateProjectionMatrix()),ll.setFromMatrixPosition(ut.matrixWorld),jt.position.copy(ll),cf.copy(jt.position),cf.add(pb[bt]),jt.up.copy(mb[bt]),jt.lookAt(cf),jt.updateMatrixWorld(),He.makeTranslation(-ll.x,-ll.y,-ll.z),Ag.multiplyMatrices(jt.projectionMatrix,jt.matrixWorldInverse),ft._frustum.setFromProjectionMatrix(Ag,jt.coordinateSystem,jt.reversedDepth)}if(ft.map.isWebGLCubeRenderTarget)i.setRenderTarget(ft.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(ft.map),i.clear());let jt=ft.getViewport(bt);a.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),at.viewport(a)}n=ft.getFrustum(bt),R(X,A,Xt,ut,this.type)}ft.isPointLightShadow!==!0&&this.type===Sa&&B(ft,A),ft.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(U,W,Y)};function B(O,X){let A=t.update(I);p.defines.VSM_SAMPLES!==O.blurSamples&&(p.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null?O.mapPass=new li(s.x,s.y,{format:Ws,type:Gi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),p.uniforms.shadow_pass.value=O.map.depthTexture,p.uniforms.resolution.value.set(O.map.width,O.map.height),p.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(X,null,A,p,I,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value.set(O.map.width,O.map.height),y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(X,null,A,y,I,null)}function k(O,X,A,U){let W=null,Y=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(Y!==void 0)W=Y;else if(W=A.isPointLight===!0?c:l,i.localClippingEnabled&&X.clipShadows===!0&&Array.isArray(X.clippingPlanes)&&X.clippingPlanes.length!==0||X.displacementMap&&X.displacementScale!==0||X.alphaMap&&X.alphaTest>0||X.map&&X.alphaTest>0||X.alphaToCoverage===!0){let at=W.uuid,lt=X.uuid,J=h[at];J===void 0&&(J={},h[at]=J);let Q=J[lt];Q===void 0&&(Q=W.clone(),J[lt]=Q,X.addEventListener("dispose",E)),W=Q}if(W.visible=X.visible,W.wireframe=X.wireframe,U===Sa?W.side=X.shadowSide!==null?X.shadowSide:X.side:W.side=X.shadowSide!==null?X.shadowSide:v[X.side],W.alphaMap=X.alphaMap,W.alphaTest=X.alphaToCoverage===!0?.5:X.alphaTest,W.map=X.map,W.clipShadows=X.clipShadows,W.clippingPlanes=X.clippingPlanes,W.clipIntersection=X.clipIntersection,W.displacementMap=X.displacementMap,W.displacementScale=X.displacementScale,W.displacementBias=X.displacementBias,W.wireframeLinewidth=X.wireframeLinewidth,W.linewidth=X.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let at=i.properties.get(W);at.light=A}return W}function R(O,X,A,U,W){if(O.visible===!1)return;if(O.layers.test(X.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&W===Sa)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let lt=t.update(O),J=O.material;if(Array.isArray(J)){let Q=lt.groups;for(let ut=0,ft=Q.length;ut<ft;ut++){let Tt=Q[ut],pt=J[Tt.materialIndex];if(pt&&pt.visible){let wt=k(O,pt,U,W);O.onBeforeShadow(i,O,X,A,lt,wt,Tt),i.renderBufferDirect(A,null,lt,wt,O,Tt),O.onAfterShadow(i,O,X,A,lt,wt,Tt)}}}else if(J.visible){let Q=k(O,J,U,W);O.onBeforeShadow(i,O,X,A,lt,Q,null),i.renderBufferDirect(A,null,lt,Q,O,null),O.onAfterShadow(i,O,X,A,lt,Q,null)}}let at=O.children;for(let lt=0,J=at.length;lt<J;lt++)R(at[lt],X,A,U,W)}function E(O){O.target.removeEventListener("dispose",E);for(let A in h){let U=h[A],W=O.target.uuid;W in U&&(U[W].dispose(),delete U[W])}}}function _b(i,t){function e(){let j=!1,Ft=new en,xt=null,zt=new en(0,0,0,0);return{setMask:function(Jt){xt!==Jt&&!j&&(i.colorMask(Jt,Jt,Jt,Jt),xt=Jt)},setLocked:function(Jt){j=Jt},setClear:function(Jt,Et,le,ie,je){je===!0&&(Jt*=ie,Et*=ie,le*=ie),Ft.set(Jt,Et,le,ie),zt.equals(Ft)===!1&&(i.clearColor(Jt,Et,le,ie),zt.copy(Ft))},reset:function(){j=!1,xt=null,zt.set(-1,0,0,0)}}}function n(){let j=!1,Ft=!1,xt=null,zt=null,Jt=null;return{setReversed:function(Et){if(Ft!==Et){let le=t.get("EXT_clip_control");Et?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Ft=Et;let ie=Jt;Jt=null,this.setClear(ie)}},getReversed:function(){return Ft},setTest:function(Et){Et?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!j&&(i.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ft&&(Et=Qm[Et]),zt!==Et){switch(Et){case gc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=Et}},setLocked:function(Et){j=Et},setClear:function(Et){Jt!==Et&&(Jt=Et,Ft&&(Et=1-Et),i.clearDepth(Et))},reset:function(){j=!1,xt=null,zt=null,Jt=null,Ft=!1}}}function s(){let j=!1,Ft=null,xt=null,zt=null,Jt=null,Et=null,le=null,ie=null,je=null;return{setTest:function(Ee){j||(Ee?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Ee){Ft!==Ee&&!j&&(i.stencilMask(Ee),Ft=Ee)},setFunc:function(Ee,xn,bn){(xt!==Ee||zt!==xn||Jt!==bn)&&(i.stencilFunc(Ee,xn,bn),xt=Ee,zt=xn,Jt=bn)},setOp:function(Ee,xn,bn){(Et!==Ee||le!==xn||ie!==bn)&&(i.stencilOp(Ee,xn,bn),Et=Ee,le=xn,ie=bn)},setLocked:function(Ee){j=Ee},setClear:function(Ee){je!==Ee&&(i.clearStencil(Ee),je=Ee)},reset:function(){j=!1,Ft=null,xt=null,zt=null,Jt=null,Et=null,le=null,ie=null,je=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,d={},v={},p={},y=new WeakMap,M=[],I=null,x=!1,m=null,B=null,k=null,R=null,E=null,O=null,X=null,A=new _e(0,0,0),U=0,W=!1,Y=null,at=null,lt=null,J=null,Q=null,ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ft=!1,Tt=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),ft=Tt>=1):pt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),ft=Tt>=2);let wt=null,bt={},Xt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),He=new en().fromArray(Xt),Ie=new en().fromArray(jt);function Be(j,Ft,xt,zt){let Jt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(j,Et),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<xt;le++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Ft,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Jt):i.texImage2D(Ft+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Jt);return Et}let _t={};_t[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(la),Ct(!1),Bt(Cd),vt(i.CULL_FACE),At(es);function vt(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function Pt(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function oe(j,Ft){return p[j]!==Ft?(i.bindFramebuffer(j,Ft),p[j]=Ft,j===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ft),j===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ft),!0):!1}function Zt(j,Ft){let xt=M,zt=!1;if(j){xt=y.get(Ft),xt===void 0&&(xt=[],y.set(Ft,xt));let Jt=j.textures;if(xt.length!==Jt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,le=Jt.length;Et<le;Et++)xt[Et]=i.COLOR_ATTACHMENT0+Et;xt.length=Jt.length,zt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(xt)}function me(j){return I!==j?(i.useProgram(j),I=j,!0):!1}let ne={[vr]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[Mm]:i.FUNC_REVERSE_SUBTRACT};ne[bm]=i.MIN,ne[wm]=i.MAX;let et={[Em]:i.ZERO,[Tm]:i.ONE,[Am]:i.SRC_COLOR,[Ld]:i.SRC_ALPHA,[Dm]:i.SRC_ALPHA_SATURATE,[Pm]:i.DST_COLOR,[Rm]:i.DST_ALPHA,[Cm]:i.ONE_MINUS_SRC_COLOR,[Dd]:i.ONE_MINUS_SRC_ALPHA,[Lm]:i.ONE_MINUS_DST_COLOR,[Im]:i.ONE_MINUS_DST_ALPHA,[Nm]:i.CONSTANT_COLOR,[Um]:i.ONE_MINUS_CONSTANT_COLOR,[Fm]:i.CONSTANT_ALPHA,[Om]:i.ONE_MINUS_CONSTANT_ALPHA};function At(j,Ft,xt,zt,Jt,Et,le,ie,je,Ee){if(j===es){x===!0&&(Pt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),j!==ym){if(j!==m||Ee!==W){if((B!==vr||E!==vr)&&(i.blendEquation(i.FUNC_ADD),B=vr,E=vr),Ee)switch(j){case Ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rd:i.blendFunc(i.ONE,i.ONE);break;case Id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ye("WebGLState: Invalid blending: ",j);break}else switch(j){case Ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Id:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pd:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",j);break}k=null,R=null,O=null,X=null,A.set(0,0,0),U=0,m=j,W=Ee}return}Jt=Jt||Ft,Et=Et||xt,le=le||zt,(Ft!==B||Jt!==E)&&(i.blendEquationSeparate(ne[Ft],ne[Jt]),B=Ft,E=Jt),(xt!==k||zt!==R||Et!==O||le!==X)&&(i.blendFuncSeparate(et[xt],et[zt],et[Et],et[le]),k=xt,R=zt,O=Et,X=le),(ie.equals(A)===!1||je!==U)&&(i.blendColor(ie.r,ie.g,ie.b,je),A.copy(ie),U=je),m=j,W=!1}function H(j,Ft){j.side===ts?Pt(i.CULL_FACE):vt(i.CULL_FACE);let xt=j.side===Qn;Ft&&(xt=!xt),Ct(xt),j.blending===Ma&&j.transparent===!1?At(es):At(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);let zt=j.stencilWrite;l.setTest(zt),zt&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),he(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(j){Y!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),Y=j)}function Bt(j){j!==_m?(vt(i.CULL_FACE),j!==at&&(j===Cd?i.cullFace(i.BACK):j===xm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),at=j}function de(j){j!==lt&&(ft&&i.lineWidth(j),lt=j)}function he(j,Ft,xt){j?(vt(i.POLYGON_OFFSET_FILL),(J!==Ft||Q!==xt)&&(J=Ft,Q=xt,a.getReversed()&&(Ft=-Ft),i.polygonOffset(Ft,xt))):Pt(i.POLYGON_OFFSET_FILL)}function ue(j){j?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Se(j){j===void 0&&(j=i.TEXTURE0+ut-1),wt!==j&&(i.activeTexture(j),wt=j)}function q(j,Ft,xt){xt===void 0&&(wt===null?xt=i.TEXTURE0+ut-1:xt=wt);let zt=bt[xt];zt===void 0&&(zt={type:void 0,texture:void 0},bt[xt]=zt),(zt.type!==j||zt.texture!==Ft)&&(wt!==xt&&(i.activeTexture(xt),wt=xt),i.bindTexture(j,Ft||_t[j]),zt.type=j,zt.texture=Ft)}function Ce(){let j=bt[wt];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function we(){try{i.compressedTexImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function w(){try{i.texSubImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function tt(){try{i.texSubImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function Ut(){try{i.texStorage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function Ot(){try{i.texStorage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function gt(){try{i.texImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function St(){try{i.texImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function kt(j){return v[j]!==void 0?v[j]:i.getParameter(j)}function re(j,Ft){v[j]!==Ft&&(i.pixelStorei(j,Ft),v[j]=Ft)}function qt(j){He.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),He.copy(j))}function Gt(j){Ie.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Ie.copy(j))}function ae(j,Ft){let xt=h.get(Ft);xt===void 0&&(xt=new WeakMap,h.set(Ft,xt));let zt=xt.get(j);zt===void 0&&(zt=i.getUniformBlockIndex(Ft,j.name),xt.set(j,zt))}function ge(j,Ft){let zt=h.get(Ft).get(j);c.get(Ft)!==zt&&(i.uniformBlockBinding(Ft,zt,j.__bindingPointIndex),c.set(Ft,zt))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},wt=null,bt={},p={},y=new WeakMap,M=[],I=null,x=!1,m=null,B=null,k=null,R=null,E=null,O=null,X=null,A=new _e(0,0,0),U=0,W=!1,Y=null,at=null,lt=null,J=null,Q=null,He.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Pt,bindFramebuffer:oe,drawBuffers:Zt,useProgram:me,setBlending:At,setMaterial:H,setFlipSided:Ct,setCullFace:Bt,setLineWidth:de,setPolygonOffset:he,setScissorTest:ue,activeTexture:Se,bindTexture:q,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:N,texImage2D:gt,texImage3D:St,pixelStorei:re,getParameter:kt,updateUBOMapping:ae,uniformBlockBinding:ge,texStorage2D:Ut,texStorage3D:Ot,texSubImage2D:w,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:mt,scissor:qt,viewport:Gt,reset:Me}}function xb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,d=new WeakMap,v=new Set,p,y=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(N,w){return M?new OffscreenCanvas(N,w):vo("canvas")}function x(N,w,tt){let K=1,mt=we(N);if((mt.width>tt||mt.height>tt)&&(K=tt/Math.max(mt.width,mt.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Ut=Math.floor(K*mt.width),Ot=Math.floor(K*mt.height);p===void 0&&(p=I(Ut,Ot));let gt=w?I(Ut,Ot):p;return gt.width=Ut,gt.height=Ot,gt.getContext("2d").drawImage(N,0,0,Ut,Ot),ve("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Ut+"x"+Ot+")."),gt}else return"data"in N&&ve("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),N;return N}function m(N){return N.generateMipmaps}function B(N){i.generateMipmap(N)}function k(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(N,w,tt,K,mt,Ut=!1){if(N!==null){if(i[N]!==void 0)return i[N];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ot;K&&(Ot=t.get("EXT_texture_norm16"),Ot||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=w;if(w===i.RED&&(tt===i.FLOAT&&(gt=i.R32F),tt===i.HALF_FLOAT&&(gt=i.R16F),tt===i.UNSIGNED_BYTE&&(gt=i.R8),tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.R16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.R8UI),tt===i.UNSIGNED_SHORT&&(gt=i.R16UI),tt===i.UNSIGNED_INT&&(gt=i.R32UI),tt===i.BYTE&&(gt=i.R8I),tt===i.SHORT&&(gt=i.R16I),tt===i.INT&&(gt=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(gt=i.RG32F),tt===i.HALF_FLOAT&&(gt=i.RG16F),tt===i.UNSIGNED_BYTE&&(gt=i.RG8),tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.RG16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),tt===i.UNSIGNED_INT&&(gt=i.RG32UI),tt===i.BYTE&&(gt=i.RG8I),tt===i.SHORT&&(gt=i.RG16I),tt===i.INT&&(gt=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),tt===i.UNSIGNED_INT&&(gt=i.RGB32UI),tt===i.BYTE&&(gt=i.RGB8I),tt===i.SHORT&&(gt=i.RGB16I),tt===i.INT&&(gt=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),tt===i.BYTE&&(gt=i.RGBA8I),tt===i.SHORT&&(gt=i.RGBA16I),tt===i.INT&&(gt=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.RGB16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),w===i.RGBA){let St=Ut?xo:ze.getTransfer(mt);tt===i.FLOAT&&(gt=i.RGBA32F),tt===i.HALF_FLOAT&&(gt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(gt=St===tn?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&Ot&&(gt=Ot.RGBA16_EXT),tt===i.SHORT&&Ot&&(gt=Ot.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function E(N,w){let tt;return N?w===null||w===Hi||w===wa?tt=i.DEPTH24_STENCIL8:w===Ci?tt=i.DEPTH32F_STENCIL8:w===ba&&(tt=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===wa?tt=i.DEPTH_COMPONENT24:w===Ci?tt=i.DEPTH_COMPONENT32F:w===ba&&(tt=i.DEPTH_COMPONENT16),tt}function O(N,w){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Pn&&N.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function X(N){let w=N.target;w.removeEventListener("dispose",X),U(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&v.delete(w)}function A(N){let w=N.target;w.removeEventListener("dispose",A),Y(w)}function U(N){let w=n.get(N);if(w.__webglInit===void 0)return;let tt=N.source,K=y.get(tt);if(K){let mt=K[w.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&W(N),Object.keys(K).length===0&&y.delete(tt)}n.remove(N)}function W(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let tt=N.source,K=y.get(tt);delete K[w.__cacheKey],a.memory.textures--}function Y(N){let w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let mt=0;mt<w.__webglFramebuffer[K].length;mt++)i.deleteFramebuffer(w.__webglFramebuffer[K][mt]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let tt=N.textures;for(let K=0,mt=tt.length;K<mt;K++){let Ut=n.get(tt[K]);Ut.__webglTexture&&(i.deleteTexture(Ut.__webglTexture),a.memory.textures--),n.remove(tt[K])}n.remove(N)}let at=0;function lt(){at=0}function J(){return at}function Q(N){at=N}function ut(){let N=at;return N>=s.maxTextures&&ve("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),at+=1,N}function ft(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function Tt(N,w){let tt=n.get(N);if(N.isVideoTexture&&q(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){let K=N.image;if(K===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(tt,N,w);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function pt(N,w){let tt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){Pt(tt,N,w);return}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function wt(N,w){let tt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){Pt(tt,N,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function bt(N,w){let tt=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&tt.__version!==N.version){oe(tt,N,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}let Xt={[bc]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},jt={[Pn]:i.NEAREST,[zm]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[ah]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},He={[Gm]:i.NEVER,[Zm]:i.ALWAYS,[Wm]:i.LESS,[Wh]:i.LEQUAL,[Xm]:i.EQUAL,[Xh]:i.GEQUAL,[qm]:i.GREATER,[Ym]:i.NOTEQUAL};function Ie(N,w){if(w.type===Ci&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===ah||w.magFilter===Qo||w.magFilter===Hs||w.minFilter===On||w.minFilter===ah||w.minFilter===Qo||w.minFilter===Hs)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Xt[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Xt[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Xt[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,jt[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,jt[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,He[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pn||w.minFilter!==Qo&&w.minFilter!==Hs||w.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Be(N,w){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",X));let K=w.source,mt=y.get(K);mt===void 0&&(mt={},y.set(K,mt));let Ut=ft(w);if(Ut!==N.__cacheKey){mt[Ut]===void 0&&(mt[Ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),mt[Ut].usedTimes++;let Ot=mt[N.__cacheKey];Ot!==void 0&&(mt[N.__cacheKey].usedTimes--,Ot.usedTimes===0&&W(w)),N.__cacheKey=Ut,N.__webglTexture=mt[Ut].texture}return tt}function _t(N,w,tt){return Math.floor(Math.floor(N/tt)/w)}function vt(N,w,tt,K){let Ut=N.updateRanges;if(Ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,K,w.data);else{Ut.sort((re,qt)=>re.start-qt.start);let Ot=0;for(let re=1;re<Ut.length;re++){let qt=Ut[Ot],Gt=Ut[re],ae=qt.start+qt.count,ge=_t(Gt.start,w.width,4),Me=_t(qt.start,w.width,4);Gt.start<=ae+1&&ge===Me&&_t(Gt.start+Gt.count-1,w.width,4)===ge?qt.count=Math.max(qt.count,Gt.start+Gt.count-qt.start):(++Ot,Ut[Ot]=Gt)}Ut.length=Ot+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),St=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let re=0,qt=Ut.length;re<qt;re++){let Gt=Ut[re],ae=Math.floor(Gt.start/4),ge=Math.ceil(Gt.count/4),Me=ae%w.width,j=Math.floor(ae/w.width),Ft=ge,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,Me,j,Ft,xt,tt,K,w.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Pt(N,w,tt){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);let mt=Be(N,w),Ut=w.source;e.bindTexture(K,N.__webglTexture,i.TEXTURE0+tt);let Ot=n.get(Ut);if(Ut.version!==Ot.__version||mt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let xt=ze.getPrimaries(ze.workingColorSpace),zt=w.colorSpace===Ms?null:ze.getPrimaries(w.colorSpace),Jt=w.colorSpace===Ms||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let St=x(w.image,!1,s.maxTextureSize);St=Ce(w,St);let kt=r.convert(w.format,w.colorSpace),re=r.convert(w.type),qt=R(w.internalFormat,kt,re,w.normalized,w.colorSpace,w.isVideoTexture);Ie(K,w);let Gt,ae=w.mipmaps,ge=w.isVideoTexture!==!0,Me=Ot.__version===void 0||mt===!0,j=Ut.dataReady,Ft=O(w,St);if(w.isDepthTexture)qt=E(w.format===Gs,w.type),Me&&(ge?e.texStorage2D(i.TEXTURE_2D,1,qt,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,qt,St.width,St.height,0,kt,re,null));else if(w.isDataTexture)if(ae.length>0){ge&&Me&&e.texStorage2D(i.TEXTURE_2D,Ft,qt,ae[0].width,ae[0].height);for(let xt=0,zt=ae.length;xt<zt;xt++)Gt=ae[xt],ge?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,re,Gt.data):e.texImage2D(i.TEXTURE_2D,xt,qt,Gt.width,Gt.height,0,kt,re,Gt.data);w.generateMipmaps=!1}else ge?(Me&&e.texStorage2D(i.TEXTURE_2D,Ft,qt,St.width,St.height),j&&vt(w,St,kt,re)):e.texImage2D(i.TEXTURE_2D,0,qt,St.width,St.height,0,kt,re,St.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ge&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,qt,ae[0].width,ae[0].height,St.depth);for(let xt=0,zt=ae.length;xt<zt;xt++)if(Gt=ae[xt],w.format!==Ri)if(kt!==null)if(ge){if(j)if(w.layerUpdates.size>0){let Jt=nf(Gt.width,Gt.height,w.format,w.type);for(let Et of w.layerUpdates){let le=Gt.data.subarray(Et*Jt/Gt.data.BYTES_PER_ELEMENT,(Et+1)*Jt/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Et,Gt.width,Gt.height,1,kt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Gt.width,Gt.height,St.depth,kt,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,qt,Gt.width,Gt.height,St.depth,0,Gt.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Gt.width,Gt.height,St.depth,kt,re,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,qt,Gt.width,Gt.height,St.depth,0,kt,re,Gt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ge&&Me&&e.texStorage2D(i.TEXTURE_2D,Ft,qt,ae[0].width,ae[0].height);for(let xt=0,zt=ae.length;xt<zt;xt++)Gt=ae[xt],w.format!==Ri?kt!==null?ge?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,qt,Gt.width,Gt.height,0,Gt.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Gt.width,Gt.height,kt,re,Gt.data):e.texImage2D(i.TEXTURE_2D,xt,qt,Gt.width,Gt.height,0,kt,re,Gt.data)}else if(w.isDataArrayTexture)if(ge){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,qt,St.width,St.height,St.depth),j)if(w.layerUpdates.size>0){let xt=nf(St.width,St.height,w.format,w.type);for(let zt of w.layerUpdates){let Jt=St.data.subarray(zt*xt/St.data.BYTES_PER_ELEMENT,(zt+1)*xt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,St.width,St.height,1,kt,re,Jt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,kt,re,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,St.width,St.height,St.depth,0,kt,re,St.data);else if(w.isData3DTexture)ge?(Me&&e.texStorage3D(i.TEXTURE_3D,Ft,qt,St.width,St.height,St.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,kt,re,St.data)):e.texImage3D(i.TEXTURE_3D,0,qt,St.width,St.height,St.depth,0,kt,re,St.data);else if(w.isFramebufferTexture){if(Me)if(ge)e.texStorage2D(i.TEXTURE_2D,Ft,qt,St.width,St.height);else{let xt=St.width,zt=St.height;for(let Jt=0;Jt<Ft;Jt++)e.texImage2D(i.TEXTURE_2D,Jt,qt,xt,zt,0,kt,re,null),xt>>=1,zt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),St.parentNode!==xt){xt.appendChild(St),v.add(w),xt.onpaint=zt=>{let Jt=zt.changedElements;for(let Et of v)Jt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,St);else{let Jt=i.RGBA,Et=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Jt,Et,le,St)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(ge&&Me){let xt=we(ae[0]);e.texStorage2D(i.TEXTURE_2D,Ft,qt,xt.width,xt.height)}for(let xt=0,zt=ae.length;xt<zt;xt++)Gt=ae[xt],ge?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt,re,Gt):e.texImage2D(i.TEXTURE_2D,xt,qt,kt,re,Gt);w.generateMipmaps=!1}else if(ge){if(Me){let xt=we(St);e.texStorage2D(i.TEXTURE_2D,Ft,qt,xt.width,xt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,re,St)}else e.texImage2D(i.TEXTURE_2D,0,qt,kt,re,St);m(w)&&B(K),Ot.__version=Ut.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function oe(N,w,tt){if(w.image.length!==6)return;let K=Be(N,w),mt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+tt);let Ut=n.get(mt);if(mt.version!==Ut.__version||K===!0){e.activeTexture(i.TEXTURE0+tt);let Ot=ze.getPrimaries(ze.workingColorSpace),gt=w.colorSpace===Ms?null:ze.getPrimaries(w.colorSpace),St=w.colorSpace===Ms||Ot===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let kt=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,qt=[];for(let Et=0;Et<6;Et++)!kt&&!re?qt[Et]=x(w.image[Et],!0,s.maxCubemapSize):qt[Et]=re?w.image[Et].image:w.image[Et],qt[Et]=Ce(w,qt[Et]);let Gt=qt[0],ae=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Me=R(w.internalFormat,ae,ge,w.normalized,w.colorSpace),j=w.isVideoTexture!==!0,Ft=Ut.__version===void 0||K===!0,xt=mt.dataReady,zt=O(w,Gt);Ie(i.TEXTURE_CUBE_MAP,w);let Jt;if(kt){j&&Ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Me,Gt.width,Gt.height);for(let Et=0;Et<6;Et++){Jt=qt[Et].mipmaps;for(let le=0;le<Jt.length;le++){let ie=Jt[le];w.format!==Ri?ae!==null?j?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,0,0,ie.width,ie.height,ae,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,Me,ie.width,ie.height,0,ie.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,0,0,ie.width,ie.height,ae,ge,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,Me,ie.width,ie.height,0,ae,ge,ie.data)}}}else{if(Jt=w.mipmaps,j&&Ft){Jt.length>0&&zt++;let Et=we(qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Me,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(re){j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,qt[Et].width,qt[Et].height,ae,ge,qt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Me,qt[Et].width,qt[Et].height,0,ae,ge,qt[Et].data);for(let le=0;le<Jt.length;le++){let je=Jt[le].image[Et].image;j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,0,0,je.width,je.height,ae,ge,je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,Me,je.width,je.height,0,ae,ge,je.data)}}else{j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,ge,qt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Me,ae,ge,qt[Et]);for(let le=0;le<Jt.length;le++){let ie=Jt[le];j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,0,0,ae,ge,ie.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,Me,ae,ge,ie.image[Et])}}}m(w)&&B(i.TEXTURE_CUBE_MAP),Ut.__version=mt.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Zt(N,w,tt,K,mt,Ut){let Ot=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),St=R(tt.internalFormat,Ot,gt,tt.normalized,tt.colorSpace),kt=n.get(w),re=n.get(tt);if(re.__renderTarget=w,!kt.__hasExternalTextures){let qt=Math.max(1,w.width>>Ut),Gt=Math.max(1,w.height>>Ut);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,Ut,St,qt,Gt,w.depth,0,Ot,gt,null):e.texImage2D(mt,Ut,St,qt,Gt,0,Ot,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,mt,re.__webglTexture,0,ue(w)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,mt,re.__webglTexture,Ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(N,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let K=w.depthTexture,mt=K&&K.isDepthTexture?K.type:null,Ut=E(w.stencilBuffer,mt),Ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),Ut,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),Ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,N)}else{let K=w.textures;for(let mt=0;mt<K.length;mt++){let Ut=K[mt],Ot=r.convert(Ut.format,Ut.colorSpace),gt=r.convert(Ut.type),St=R(Ut.internalFormat,Ot,gt,Ut.normalized,Ut.colorSpace);Se(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),St,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),St,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,St,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(N,w,tt){let K=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=n.get(w.depthTexture);if(mt.__renderTarget=w,(!mt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,w.depthTexture.addEventListener("dispose",X)),mt.__webglTexture===void 0){mt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w.depthTexture);let kt=r.convert(w.depthTexture.format),re=r.convert(w.depthTexture.type),qt;w.depthTexture.format===Ji?qt=i.DEPTH_COMPONENT24:w.depthTexture.format===Gs&&(qt=i.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,qt,w.width,w.height,0,kt,re,null)}}else Tt(w.depthTexture,0);let Ut=mt.__webglTexture,Ot=ue(w),gt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,St=w.depthTexture.format===Gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ji)Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,gt,Ut,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,St,gt,Ut,0);else if(w.depthTexture.format===Gs)Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,gt,Ut,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,St,gt,Ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(N){let w=n.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let mt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",mt)};K.addEventListener("dispose",mt),w.__depthDisposeCallback=mt}w.__boundDepthTexture=K}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let K=0;K<6;K++)ne(w.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?ne(w.__webglFramebuffer[0],N,0):ne(w.__webglFramebuffer,N,0)}else if(tt){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),me(w.__webglDepthbuffer[K],N,!1);else{let mt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Ut)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),me(w.__webglDepthbuffer,N,!1);else{let mt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(N,w,tt){let K=n.get(N);w!==void 0&&Zt(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&et(N)}function H(N){let w=N.texture,tt=n.get(N),K=n.get(w);N.addEventListener("dispose",A);let mt=N.textures,Ut=N.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,a.memory.textures++),Ut){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let St=0;St<w.mipmaps.length;St++)tt.__webglFramebuffer[gt][St]=i.createFramebuffer()}else tt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let gt=0,St=mt.length;gt<St;gt++){let kt=n.get(mt[gt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Se(N)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){let St=mt[gt];tt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);let kt=r.convert(St.format,St.colorSpace),re=r.convert(St.type),qt=R(St.internalFormat,kt,re,St.normalized,St.colorSpace,N.isXRRenderTarget===!0),Gt=ue(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,qt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),me(tt.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ut){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)Zt(tt.__webglFramebuffer[gt][St],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else Zt(tt.__webglFramebuffer[gt],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(w)&&B(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let gt=0,St=mt.length;gt<St;gt++){let kt=mt[gt],re=n.get(kt),qt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(qt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(qt,re.__webglTexture),Ie(qt,kt),Zt(tt.__webglFramebuffer,N,kt,i.COLOR_ATTACHMENT0+gt,qt,0),m(kt)&&B(qt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(gt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,K.__webglTexture),Ie(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)Zt(tt.__webglFramebuffer[St],N,w,i.COLOR_ATTACHMENT0,gt,St);else Zt(tt.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,gt,0);m(w)&&B(gt),e.unbindTexture()}N.depthBuffer&&et(N)}function Ct(N){let w=N.textures;for(let tt=0,K=w.length;tt<K;tt++){let mt=w[tt];if(m(mt)){let Ut=k(N),Ot=n.get(mt).__webglTexture;e.bindTexture(Ut,Ot),B(Ut),e.unbindTexture()}}}let Bt=[],de=[];function he(N){if(N.samples>0){if(Se(N)===!1){let w=N.textures,tt=N.width,K=N.height,mt=i.COLOR_BUFFER_BIT,Ut=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(N),gt=w.length>1;if(gt)for(let kt=0;kt<w.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);let St=N.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let kt=0;kt<w.length;kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);let re=n.get(w[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,tt,K,0,0,tt,K,mt,i.NEAREST),c===!0&&(Bt.length=0,de.length=0,Bt.push(i.COLOR_ATTACHMENT0+kt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Bt.push(Ut),de.push(Ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let kt=0;kt<w.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);let re=n.get(w[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ue(N){return Math.min(s.maxSamples,N.samples)}function Se(N){let w=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function q(N){let w=a.render.frame;d.get(N)!==w&&(d.set(N,w),N.update())}function Ce(N,w){let tt=N.colorSpace,K=N.format,mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==_o&&tt!==Ms&&(ze.getTransfer(tt)===tn?(K!==Ri||mt!==hi)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",tt)),w}function we(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ut,this.resetTextureUnits=lt,this.getTextureUnits=J,this.setTextureUnits=Q,this.setTexture2D=Tt,this.setTexture2DArray=pt,this.setTexture3D=wt,this.setTextureCube=bt,this.rebindTextures=At,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function vb(i,t){function e(n,s=Ms){let r,a=ze.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===lh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vd)return i.BYTE;if(n===Hd)return i.SHORT;if(n===ba)return i.UNSIGNED_SHORT;if(n===oh)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Xd)return i.ALPHA;if(n===qd)return i.RGB;if(n===Ri)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===hh)return i.RED;if(n===uh)return i.RED_INTEGER;if(n===Ws)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===fh)return i.RGBA_INTEGER;if(n===tl||n===el||n===nl||n===il)if(a===tn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===mh||n===gh||n===_h)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xh||n===vh||n===yh||n===Sh||n===Mh||n===sl||n===bh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xh||n===vh)return a===tn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sh)return r.COMPRESSED_R11_EAC;if(n===Mh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sl)return r.COMPRESSED_RG11_EAC;if(n===bh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wh||n===Eh||n===Th||n===Ah||n===Ch||n===Rh||n===Ih||n===Ph||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ih)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return a===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bh||n===kh||n===zh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bh)return a===tn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===Vh||n===rl||n===Hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$h)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yb=`
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

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:yb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends ji{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,v=null,p=null,y=null,M=null,I=typeof XRWebGLBinding<"u",x=new _f,m={},B=e.getContextAttributes(),k=null,R=null,E=[],O=[],X=new $t,A=null,U=null,W=new Gn;W.viewport=new en;let Y=new Gn;Y.viewport=new en;let at=[W,Y],lt=new nh,J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let vt=E[_t];return vt===void 0&&(vt=new pa,E[_t]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(_t){let vt=E[_t];return vt===void 0&&(vt=new pa,E[_t]=vt),vt.getGripSpace()},this.getHand=function(_t){let vt=E[_t];return vt===void 0&&(vt=new pa,E[_t]=vt),vt.getHandSpace()};function ut(_t){let vt=O.indexOf(_t.inputSource);if(vt===-1)return;let Pt=E[vt];Pt!==void 0&&(Pt.update(_t.inputSource,_t.frame,h||a),Pt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function ft(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",Tt);for(let _t=0;_t<E.length;_t++){let vt=O[_t];vt!==null&&(O[_t]=null,E[_t].disconnect(vt))}J=null,Q=null,x.reset();for(let _t in m)delete m[_t];if(t.setRenderTarget(k),y=null,p=null,v=null,s=null,R=null,Be.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(X.width,X.height,!1),U!==null){let _t=U.camera;_t.fov=U.fov,_t.zoom=U.zoom,_t.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){l=_t,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(k=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",Tt),B.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(X),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,oe=null,Zt=null;B.depth&&(Zt=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=B.stencil?Gs:Ji,oe=B.stencil?wa:Hi);let me={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:r};v=this.getBinding(),p=v.createProjectionLayer(me),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new li(p.textureWidth,p.textureHeight,{format:Ri,type:hi,depthTexture:new Fs(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Pt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new li(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Tt(_t){for(let vt=0;vt<_t.removed.length;vt++){let Pt=_t.removed[vt],oe=O.indexOf(Pt);oe>=0&&(O[oe]=null,E[oe].disconnect(Pt))}for(let vt=0;vt<_t.added.length;vt++){let Pt=_t.added[vt],oe=O.indexOf(Pt);if(oe===-1){for(let me=0;me<E.length;me++)if(me>=O.length){O.push(Pt),oe=me;break}else if(O[me]===null){O[me]=Pt,oe=me;break}if(oe===-1)break}let Zt=E[oe];Zt&&Zt.connect(Pt)}}let pt=new Z,wt=new Z;function bt(_t,vt,Pt){pt.setFromMatrixPosition(vt.matrixWorld),wt.setFromMatrixPosition(Pt.matrixWorld);let oe=pt.distanceTo(wt),Zt=vt.projectionMatrix.elements,me=Pt.projectionMatrix.elements,ne=Zt[14]/(Zt[10]-1),et=Zt[14]/(Zt[10]+1),At=(Zt[9]+1)/Zt[5],H=(Zt[9]-1)/Zt[5],Ct=(Zt[8]-1)/Zt[0],Bt=(me[8]+1)/me[0],de=ne*Ct,he=ne*Bt,ue=oe/(-Ct+Bt),Se=ue*-Ct;if(vt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Se),_t.translateZ(ue),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Zt[10]===-1)_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let q=ne+ue,Ce=et+ue,we=de-Se,N=he+(oe-Se),w=At*et/Ce*q,tt=H*et/Ce*q;_t.projectionMatrix.makePerspective(we,N,w,tt,q,Ce),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function Xt(_t,vt){vt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(vt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let vt=_t.near,Pt=_t.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),lt.near=Y.near=W.near=vt,lt.far=Y.far=W.far=Pt,(J!==lt.near||Q!==lt.far)&&(s.updateRenderState({depthNear:lt.near,depthFar:lt.far}),J=lt.near,Q=lt.far),lt.layers.mask=_t.layers.mask|6,W.layers.mask=lt.layers.mask&-5,Y.layers.mask=lt.layers.mask&-3;let oe=_t.parent,Zt=lt.cameras;Xt(lt,oe);for(let me=0;me<Zt.length;me++)Xt(Zt[me],oe);Zt.length===2?bt(lt,W,Y):lt.projectionMatrix.copy(W.projectionMatrix),U===null&&_t.isPerspectiveCamera&&(U={camera:_t,fov:_t.fov,zoom:_t.zoom}),jt(_t,lt,oe)};function jt(_t,vt,Pt){Pt===null?_t.matrix.copy(vt.matrixWorld):(_t.matrix.copy(Pt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(vt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=ua*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(p===null&&y===null))return c},this.setFoveation=function(_t){c=_t,p!==null&&(p.fixedFoveation=_t),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=_t)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(lt)},this.getCameraTexture=function(_t){return m[_t]};let He=null;function Ie(_t,vt){if(d=vt.getViewerPose(h||a),M=vt,d!==null){let Pt=d.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let oe=!1;Pt.length!==lt.cameras.length&&(lt.cameras.length=0,oe=!0);for(let et=0;et<Pt.length;et++){let At=Pt[et],H=null;if(y!==null)H=y.getViewport(At);else{let Bt=v.getViewSubImage(p,At);H=Bt.viewport,et===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Ct=at[et];Ct===void 0&&(Ct=new Gn,Ct.layers.enable(et),Ct.viewport=new en,at[et]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(H.x,H.y,H.width,H.height),et===0&&(lt.matrix.copy(Ct.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),oe===!0&&lt.cameras.push(Ct)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let et=v.getDepthInformation(Pt[0]);et&&et.isValid&&et.texture&&x.init(et,s.renderState)}if(Zt&&Zt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let et=0;et<Pt.length;et++){let At=Pt[et].camera;if(At){let H=m[At];H||(H=new Io,m[At]=H);let Ct=v.getCameraImage(At);H.sourceTexture=Ct}}}}for(let Pt=0;Pt<E.length;Pt++){let oe=O[Pt],Zt=E[Pt];oe!==null&&Zt!==void 0&&Zt.update(oe,vt,h||a)}He&&He(_t,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),M=null}let Be=new Cg;Be.setAnimationLoop(Ie),this.setAnimationLoop=function(_t){He=_t},this.dispose=function(){}}},Mb=new Ve,Ng=new Ae;Ng.set(-1,0,0,0,1,0,0,0,1);function bb(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Qd(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,B,k,R){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),v(x,m)):m.isMeshPhongMaterial?(r(x,m),d(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),p(x,m),m.isMeshPhysicalMaterial&&y(x,m,R)):m.isMeshMatcapMaterial?(r(x,m),M(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),I(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?c(x,m,B,k):m.isSpriteMaterial?h(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Qn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Qn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let B=t.get(m),k=B.envMap,R=B.envMapRotation;k&&(x.envMap.value=k,x.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ng),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,B,k){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*B,x.scale.value=k*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function y(x,m,B){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,m){m.matcap&&(x.matcap.value=m.matcap)}function I(x,m){let B=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let O=E.program;n.uniformBlockBinding(R,O)}function h(R,E){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",B));let X=E.program;n.updateUBOMapping(R,X);let A=t.render.frame;r[R.id]!==A&&(p(R),r[R.id]=A)}function d(R){let E=v();R.__bindingPointIndex=E;let O=i.createBuffer(),X=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,X,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let E=s[R.id],O=R.uniforms,X=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,U=O.length;A<U;A++){let W=O[A];if(Array.isArray(W))for(let Y=0,at=W.length;Y<at;Y++)y(W[Y],A,Y,X);else y(W,A,0,X)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,E,O,X){if(I(R,E,O,X)===!0){let A=R.__offset,U=R.value;if(Array.isArray(U)){let W=0;for(let Y=0;Y<U.length;Y++){let at=U[Y],lt=m(at);M(at,R.__data,W),typeof at!="number"&&typeof at!="boolean"&&!at.isMatrix3&&!ArrayBuffer.isView(at)&&(W+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(U,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function M(R,E,O){typeof R=="number"||typeof R=="boolean"?E[0]=R:R.isMatrix3?(E[0]=R.elements[0],E[1]=R.elements[1],E[2]=R.elements[2],E[3]=0,E[4]=R.elements[3],E[5]=R.elements[4],E[6]=R.elements[5],E[7]=0,E[8]=R.elements[6],E[9]=R.elements[7],E[10]=R.elements[8],E[11]=0):ArrayBuffer.isView(R)?E.set(new R.constructor(R.buffer,R.byteOffset,E.length)):R.toArray(E,O)}function I(R,E,O,X){let A=R.value,U=E+"_"+O;if(X[U]===void 0)return typeof A=="number"||typeof A=="boolean"?X[U]=A:ArrayBuffer.isView(A)?X[U]=A.slice():X[U]=A.clone(),!0;{let W=X[U];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return X[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(W.equals(A)===!1)return W.copy(A),!0}}return!1}function x(R){let E=R.uniforms,O=0,X=16;for(let U=0,W=E.length;U<W;U++){let Y=Array.isArray(E[U])?E[U]:[E[U]];for(let at=0,lt=Y.length;at<lt;at++){let J=Y[at],Q=Array.isArray(J.value)?J.value:[J.value];for(let ut=0,ft=Q.length;ut<ft;ut++){let Tt=Q[ut],pt=m(Tt),wt=O%X,bt=wt%pt.boundary,Xt=wt+bt;O+=bt,Xt!==0&&X-Xt<pt.storage&&(O+=X-Xt),J.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=pt.storage}}}let A=O%X;return A>0&&(O+=X-A),R.__size=O,R.__cache={},this}function m(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(E.boundary=16,E.storage=R.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",R),E}function B(R){let E=R.target;E.removeEventListener("dispose",B);let O=a.indexOf(E.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:k}}var Eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function Tb(){return ns===null&&(ns=new Eo(Eb,16,16,Ws,Gi),ns.name="DFG_LUT",ns.minFilter=On,ns.magFilter=On,ns.wrapS=Yi,ns.wrapT=Yi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var jh=class{constructor(t={}){let{canvas:e=Jm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let I=y,x=new Set([fh,dh,uh]),m=new Set([hi,Hi,ba,wa,lh,ch]),B=new Uint32Array(4),k=new Int32Array(4),R=new Z,E=null,O=null,X=[],A=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,Y=!1,at=null,lt=null,J=null,Q=null;this._outputColorSpace=gi;let ut=0,ft=0,Tt=null,pt=-1,wt=null,bt=new en,Xt=new en,jt=null,He=new _e(0),Ie=0,Be=e.width,_t=e.height,vt=1,Pt=null,oe=null,Zt=new en(0,0,Be,_t),me=new en(0,0,Be,_t),ne=!1,et=new ma,At=!1,H=!1,Ct=new Ve,Bt=new Z,de=new en,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Se(){return Tt===null?vt:1}let q=n;function Ce(C,G){return e.getContext(C,G)}let we,N,w,tt,K,mt,Ut,Ot,gt,St,kt,re,qt,Gt,ae,ge,Me,j,Ft,xt,zt,Jt,Et;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",je,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",xn,!1),q===null){let G="webgl2";if(q=Ce(G,C),q===null)throw Ce(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(C){throw e.removeEventListener("webglcontextlost",je,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),ye("WebGLRenderer: "+C.message),C}function le(){we=new DS(q),we.init(),zt=new vb(q,we),N=new bS(q,we,t,zt),w=new _b(q,we),N.reversedDepthBuffer&&p&&w.buffers.depth.setReversed(!0),lt=q.createFramebuffer(),J=q.createFramebuffer(),Q=q.createFramebuffer(),tt=new FS(q),K=new ib,mt=new xb(q,we,w,K,N,zt,tt),Ut=new LS(W),Ot=new Bx(q),Jt=new SS(q,Ot),gt=new NS(q,Ot,tt,Jt),St=new BS(q,gt,Ot,Jt,tt),j=new OS(q,N,mt),ae=new wS(K),kt=new nb(W,Ut,we,N,Jt,ae),re=new bb(W,K),qt=new rb,Gt=new ub(we),Me=new yS(W,Ut,w,St,M,c),ge=new gb(W,St,N),Et=new wb(q,tt,N,w),Ft=new MS(q,we,tt),xt=new US(q,we,tt),tt.programs=kt.programs,W.capabilities=N,W.extensions=we,W.properties=K,W.renderLists=qt,W.shadowMap=ge,W.state=w,W.info=tt}I!==hi&&(U=new zS(I,e.width,e.height,l,s,r));let ie=new xf(W,q);this.xr=ie,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(Be,_t,!1))},this.getSize=function(C){return C.set(Be,_t)},this.setSize=function(C,G,nt=!0){if(ie.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=C,_t=G,e.width=Math.floor(C*vt),e.height=Math.floor(G*vt),nt===!0&&(e.style.width=C+"px",e.style.height=G+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(Be*vt,_t*vt).floor()},this.setDrawingBufferSize=function(C,G,nt){Be=C,_t=G,vt=nt,e.width=Math.floor(C*nt),e.height=Math.floor(G*nt),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(I===hi){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(bt)},this.getViewport=function(C){return C.copy(Zt)},this.setViewport=function(C,G,nt,st){C.isVector4?Zt.set(C.x,C.y,C.z,C.w):Zt.set(C,G,nt,st),w.viewport(bt.copy(Zt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,G,nt,st){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,G,nt,st),w.scissor(Xt.copy(me).multiplyScalar(vt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){w.setScissorTest(ne=C)},this.setOpaqueSort=function(C){Pt=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,nt=!0){let st=0;if(C){let ot=!1;if(Tt!==null){let It=Tt.texture.format;ot=x.has(It)}if(ot){let It=Tt.texture.type,Wt=m.has(It),Rt=Me.getClearColor(),ht=Me.getClearAlpha(),Lt=Rt.r,Kt=Rt.g,Le=Rt.b;Wt?(B[0]=Lt,B[1]=Kt,B[2]=Le,B[3]=ht,q.clearBufferuiv(q.COLOR,0,B)):(k[0]=Lt,k[1]=Kt,k[2]=Le,k[3]=ht,q.clearBufferiv(q.COLOR,0,k))}else st|=q.COLOR_BUFFER_BIT}G&&(st|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(st|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&q.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),at=C},this.dispose=function(){e.removeEventListener("webglcontextlost",je,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Me.dispose(),qt.dispose(),Gt.dispose(),K.dispose(),Ut.dispose(),St.dispose(),Jt.dispose(),Et.dispose(),kt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",_l),ie.removeEventListener("sessionend",Nr),qn.stop()};function je(C){C.preventDefault(),yo("WebGLRenderer: Context Lost."),Y=!0}function Ee(){yo("WebGLRenderer: Context Restored."),Y=!1;let C=tt.autoReset,G=ge.enabled,nt=ge.autoUpdate,st=ge.needsUpdate,ot=ge.type;le(),tt.autoReset=C,ge.enabled=G,ge.autoUpdate=nt,ge.needsUpdate=st,ge.type=ot}function xn(C){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bn(C){let G=C.target;G.removeEventListener("dispose",bn),Ir(G)}function Ir(C){Pr(C),K.remove(C)}function Pr(C){let G=K.get(C).programs;G!==void 0&&(G.forEach(function(nt){kt.releaseProgram(nt)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,nt,st,ot,It){G===null&&(G=he);let Wt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Rt=xu(C,G,nt,st,ot);w.setMaterial(st,Wt);let ht=nt.index,Lt=1;if(st.wireframe===!0){if(ht=gt.getWireframeAttribute(nt),ht===void 0)return;Lt=2}let Kt=nt.drawRange,Le=nt.attributes.position,te=Kt.start*Lt,ke=(Kt.start+Kt.count)*Lt;It!==null&&(te=Math.max(te,It.start*Lt),ke=Math.min(ke,(It.start+It.count)*Lt)),ht!==null?(te=Math.max(te,0),ke=Math.min(ke,ht.count)):Le!=null&&(te=Math.max(te,0),ke=Math.min(ke,Le.count));let pn=ke-te;if(pn<0||pn===1/0)return;Jt.setup(ot,st,Rt,nt,ht);let Ye,Ze=Ft;if(ht!==null&&(Ye=Ot.get(ht),Ze=xt,Ze.setIndex(Ye)),ot.isMesh)st.wireframe===!0?(w.setLineWidth(st.wireframeLinewidth*Se()),Ze.setMode(q.LINES)):Ze.setMode(q.TRIANGLES);else if(ot.isLine){let hn=st.linewidth;hn===void 0&&(hn=1),w.setLineWidth(hn*Se()),ot.isLineSegments?Ze.setMode(q.LINES):ot.isLineLoop?Ze.setMode(q.LINE_LOOP):Ze.setMode(q.LINE_STRIP)}else ot.isPoints?Ze.setMode(q.POINTS):ot.isSprite&&Ze.setMode(q.TRIANGLES);if(ot.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ze.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let hn=ot._multiDrawStarts,Qt=ot._multiDrawCounts,Fn=ot._multiDrawCount,$e=ht?Ot.get(ht).bytesPerElement:1,ni=K.get(st).currentProgram.getUniforms();for(let yi=0;yi<Fn;yi++)ni.setValue(q,"_gl_DrawID",yi),Ze.render(hn[yi]/$e,Qt[yi])}else if(ot.isInstancedMesh)Ze.renderInstances(te,pn,ot.count);else if(nt.isInstancedBufferGeometry){let hn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Qt=Math.min(nt.instanceCount,hn);Ze.renderInstances(te,pn,Qt)}else Ze.render(te,pn)};function Lr(C,G,nt,st){at!==null&&C.isNodeMaterial&&at.setObject(st,C),At===!0&&ae.setState(C,nt,!1),C.transparent===!0&&C.side===ts&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Js(C,G,st),C.side=$s,C.needsUpdate=!0,Js(C,G,st),C.side=ts):Js(C,G,st)}this.compile=function(C,G,nt=null){nt===null&&(nt=C),at!==null&&at.renderStart(C,G,nt),O=Gt.get(nt),O.init(G),A.push(O),nt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(G.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),C!==nt&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(G.layers)&&(O.pushLight(ot),ot.castShadow&&O.pushShadow(ot))}),O.setupLights(),at!==null&&at.updateLights(O.state.lightsArray),H=this.localClippingEnabled,At=ae.init(this.clippingPlanes,H),At===!0&&ae.setGlobalState(this.clippingPlanes,G),at!==null&&ge.render(O.state.shadowsArray,nt,G);let st=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let It=ot.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){let Rt=It[Wt];Lr(Rt,nt,G,ot),st.add(Rt)}else Lr(It,nt,G,ot),st.add(It)}),O=A.pop(),at!==null&&at.renderEnd(),st},this.compileAsync=function(C,G,nt=null){let st=this.compile(C,G,nt);return new Promise(ot=>{function It(){if(st.forEach(function(Wt){let ht=K.get(Wt).currentProgram;(ht===void 0||ht.isReady())&&st.delete(Wt)}),st.size===0){ot(C);return}setTimeout(It,10)}we.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Dr=null;function Ys(C){Dr&&Dr(C)}function _l(){qn.stop()}function Nr(){qn.start()}let qn=new Cg;qn.setAnimationLoop(Ys),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Dr=C,ie.setAnimationLoop(C),C===null?qn.stop():qn.start()},ie.addEventListener("sessionstart",_l),ie.addEventListener("sessionend",Nr),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;at!==null&&at.renderStart(C,G);let nt=ie.enabled===!0&&ie.isPresenting===!0,st=U!==null&&(Tt===null||nt)&&U.begin(W,Tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,G,Tt),O=Gt.get(C,A.length),O.init(G),O.state.textureUnits=mt.getTextureUnits(),A.push(O),Ct.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(Ct,ki,G.reversedDepth),H=this.localClippingEnabled,At=ae.init(this.clippingPlanes,H),E=qt.get(C,X.length),E.init(),X.push(E),ie.enabled===!0&&ie.isPresenting===!0){let Wt=W.xr.getDepthSensingMesh();Wt!==null&&Ts(Wt,G,-1/0,W.sortObjects)}Ts(C,G,0,W.sortObjects),E.finish(),at!==null&&at.updateLights(O.state.lightsArray),W.sortObjects===!0&&E.sort(Pt,oe),ue=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ue&&Me.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&ae.beginShadows();let ot=O.state.shadowsArray;if(ge.render(ot,C,G),At===!0&&ae.endShadows(),(st&&U.hasRenderPass())===!1){let Wt=E.opaque,Rt=E.transmissive;if(O.setupLights(),G.isArrayCamera){let ht=G.cameras;if(Rt.length>0)for(let Lt=0,Kt=ht.length;Lt<Kt;Lt++){let Le=ht[Lt];Na(Wt,Rt,C,Le)}ue&&Me.render(C);for(let Lt=0,Kt=ht.length;Lt<Kt;Lt++){let Le=ht[Lt];Da(E,C,Le,Le.viewport)}}else Rt.length>0&&Na(Wt,Rt,C,G),ue&&Me.render(C),Da(E,C,G)}Tt!==null&&ft===0&&(mt.updateMultisampleRenderTarget(Tt),mt.updateRenderTargetMipmap(Tt)),st&&U.end(W),C.isScene===!0&&C.onAfterRender(W,C,G),Jt.resetDefaultState(),pt=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],mt.setTextureUnits(O.state.textureUnits),At===!0&&ae.setGlobalState(W.clippingPlanes,O.state.camera)):O=null,X.pop(),X.length>0?E=X[X.length-1]:E=null,at!==null&&at.renderEnd()};function Ts(C,G,nt,st){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(et)){st&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);let Wt=St.update(C),Rt=C.material;Rt.visible&&E.push(C,Wt,Rt,nt,de.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(et))){let Wt=St.update(C),Rt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),de.copy(Wt.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Rt)){let ht=Wt.groups;for(let Lt=0,Kt=ht.length;Lt<Kt;Lt++){let Le=ht[Lt],te=Rt[Le.materialIndex];te&&te.visible&&E.push(C,Wt,te,nt,de.z,Le,G)}}else Rt.visible&&E.push(C,Wt,Rt,nt,de.z,null,G)}}let It=C.children;for(let Wt=0,Rt=It.length;Wt<Rt;Wt++)Ts(It[Wt],G,nt,st)}function Da(C,G,nt,st){let{opaque:ot,transmissive:It,transparent:Wt}=C;O.setupLightsView(nt),At===!0&&ae.setGlobalState(W.clippingPlanes,nt),st&&w.viewport(bt.copy(st)),ot.length>0&&Zs(ot,G,nt),It.length>0&&Zs(It,G,nt),Wt.length>0&&Zs(Wt,G,nt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Na(C,G,nt,st){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[st.id]===void 0){let te=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[st.id]=new li(1,1,{generateMipmaps:!0,type:te?Gi:hi,minFilter:Hs,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let It=O.state.transmissionRenderTarget[st.id],Wt=st.viewport||bt;It.setSize(Wt.z*W.transmissionResolutionScale,Wt.w*W.transmissionResolutionScale);let Rt=W.getRenderTarget(),ht=W.getActiveCubeFace(),Lt=W.getActiveMipmapLevel();W.setRenderTarget(It),W.getClearColor(He),Ie=W.getClearAlpha(),Ie<1&&W.setClearColor(16777215,.5),W.clear(),ue&&Me.render(nt);let Kt=W.toneMapping;W.toneMapping=Vi;let Le=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),O.setupLightsView(st),At===!0&&ae.setGlobalState(W.clippingPlanes,st),Zs(C,nt,st),mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It),we.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ke=0,pn=G.length;ke<pn;ke++){let Ye=G[ke],{object:Ze,geometry:hn,material:Qt,group:Fn}=Ye;if(Qt.side===ts&&Ze.layers.test(st.layers)){let $e=Qt.side;Qt.side=Qn,Qt.needsUpdate=!0,Ur(Ze,nt,st,hn,Qt,Fn),Qt.side=$e,Qt.needsUpdate=!0,te=!0}}te===!0&&(mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It))}W.setRenderTarget(Rt,ht,Lt),W.setClearColor(He,Ie),Le!==void 0&&(st.viewport=Le),W.toneMapping=Kt}function Zs(C,G,nt){let st=G.isScene===!0?G.overrideMaterial:null;for(let ot=0,It=C.length;ot<It;ot++){let Wt=C[ot],{object:Rt,geometry:ht,group:Lt}=Wt,Kt=Wt.material;Kt.allowOverride===!0&&st!==null&&(Kt=st),Rt.layers.test(nt.layers)&&Ur(Rt,G,nt,ht,Kt,Lt)}}function Ur(C,G,nt,st,ot,It){at!==null&&ot.isNodeMaterial&&at.setObject(C,ot),C.onBeforeRender(W,G,nt,st,ot,It),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(W,G,nt,st,C,It),ot.transparent===!0&&ot.side===ts&&ot.forceSinglePass===!1?(ot.side=Qn,ot.needsUpdate=!0,W.renderBufferDirect(nt,G,st,ot,C,It),ot.side=$s,ot.needsUpdate=!0,W.renderBufferDirect(nt,G,st,ot,C,It),ot.side=ts):W.renderBufferDirect(nt,G,st,ot,C,It),C.onAfterRender(W,G,nt,st,ot,It)}function Js(C,G,nt){G.isScene!==!0&&(G=he);let st=K.get(C),ot=O.state.lights,It=O.state.shadowsArray,Wt=ot.state.version,Rt=kt.getParameters(C,ot.state,It,G,nt,O.state.lightProbeGridArray),ht=kt.getProgramCacheKey(Rt),Lt=st.programs;st.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,st.fog=G.fog;let Kt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;st.envMap=Ut.get(C.envMap||st.environment,Kt),st.envMapRotation=st.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Lt===void 0&&(C.addEventListener("dispose",bn),Lt=new Map,st.programs=Lt);let Le=Lt.get(ht);if(Le!==void 0){if(st.currentProgram===Le&&st.lightsStateVersion===Wt)return As(C,Rt),Le}else Rt.uniforms=kt.getUniforms(C),at!==null&&C.isNodeMaterial&&at.build(C,nt,Rt),C.onBeforeCompile(Rt,W),Le=kt.acquireProgram(Rt,ht),Lt.set(ht,Le),st.uniforms=Rt.uniforms;let te=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=ae.uniform),As(C,Rt),st.needsLights=xl(C),st.lightsStateVersion=Wt,st.needsLights&&(te.ambientLightColor.value=ot.state.ambient,te.lightProbe.value=ot.state.probe,te.sunLights.value=ot.state.sun,te.sunLightShadows.value=ot.state.sunShadow,te.directionalLights.value=ot.state.directional,te.directionalLightShadows.value=ot.state.directionalShadow,te.spotLights.value=ot.state.spot,te.spotLightShadows.value=ot.state.spotShadow,te.rectAreaLights.value=ot.state.rectArea,te.ltc_1.value=ot.state.rectAreaLTC1,te.ltc_2.value=ot.state.rectAreaLTC2,te.pointLights.value=ot.state.point,te.pointLightShadows.value=ot.state.pointShadow,te.hemisphereLights.value=ot.state.hemi,te.sunShadowMatrix.value=ot.state.sunShadowMatrix,te.sunShadowCascade.value=ot.state.sunShadowCascade,te.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,te.spotLightMatrix.value=ot.state.spotLightMatrix,te.spotLightMap.value=ot.state.spotLightMap,te.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=O.state.lightProbeGridArray.length>0,st.currentProgram=Le,st.uniformsList=null,Le}function Ua(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=Aa.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function As(C,G){let nt=K.get(C);nt.outputColorSpace=G.outputColorSpace,nt.batching=G.batching,nt.batchingColor=G.batchingColor,nt.instancing=G.instancing,nt.instancingColor=G.instancingColor,nt.instancingMorph=G.instancingMorph,nt.skinning=G.skinning,nt.morphTargets=G.morphTargets,nt.morphNormals=G.morphNormals,nt.morphColors=G.morphColors,nt.morphTargetsCount=G.morphTargetsCount,nt.numClippingPlanes=G.numClippingPlanes,nt.numIntersection=G.numClipIntersection,nt.vertexAlphas=G.vertexAlphas,nt.vertexTangents=G.vertexTangents,nt.toneMapping=G.toneMapping}function js(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(G.matrixWorld);for(let nt=0,st=C.length;nt<st;nt++){let ot=C[nt];if(ot.texture!==null&&ot.boundingBox.containsPoint(R))return ot}return null}function xu(C,G,nt,st,ot){G.isScene!==!0&&(G=he),mt.resetTextureUnits();let It=G.fog,Wt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?G.environment:null,Rt=Tt===null?W.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:ze.workingColorSpace,ht=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Lt=Ut.get(st.envMap||Wt,ht),Kt=st.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Le=!!nt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!nt.morphAttributes.position,ke=!!nt.morphAttributes.normal,pn=!!nt.morphAttributes.color,Ye=Vi;st.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ye=W.toneMapping);let Ze=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,hn=Ze!==void 0?Ze.length:0,Qt=K.get(st),Fn=O.state.lights;if(At===!0&&(H===!0||C!==wt)){let sn=C===wt&&st.id===pt;ae.setState(st,C,sn)}let $e=!1;st.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Fn.state.version||Qt.outputColorSpace!==Rt||ot.isBatchedMesh&&Qt.batching===!1||!ot.isBatchedMesh&&Qt.batching===!0||ot.isBatchedMesh&&Qt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Qt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Qt.instancing===!1||!ot.isInstancedMesh&&Qt.instancing===!0||ot.isSkinnedMesh&&Qt.skinning===!1||!ot.isSkinnedMesh&&Qt.skinning===!0||ot.isInstancedMesh&&Qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Qt.instancingMorph===!1&&ot.morphTexture!==null||Qt.envMap!==Lt||st.fog===!0&&Qt.fog!==It||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ae.numPlanes||Qt.numIntersection!==ae.numIntersection)||Qt.vertexAlphas!==Kt||Qt.vertexTangents!==Le||Qt.morphTargets!==te||Qt.morphNormals!==ke||Qt.morphColors!==pn||Qt.toneMapping!==Ye||Qt.morphTargetsCount!==hn||!!Qt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,Qt.__version=st.version);let ni=Qt.currentProgram;$e===!0&&(ni=Js(st,G,ot),at&&st.isNodeMaterial&&at.onUpdateProgram(st,ni,Qt));let yi=!1,Xi=!1,us=!1,se=ni.getUniforms(),mn=Qt.uniforms;if(w.useProgram(ni.program)&&(yi=!0,Xi=!0,us=!0),st.id!==pt&&(pt=st.id,Xi=!0),Qt.needsLights){let sn=js(O.state.lightProbeGridArray,ot);Qt.lightProbeGrid!==sn&&(Qt.lightProbeGrid=sn,Xi=!0)}if(yi||wt!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),se.setValue(q,"projectionMatrix",C.projectionMatrix),se.setValue(q,"viewMatrix",C.matrixWorldInverse);let Si=se.map.cameraPosition;Si!==void 0&&Si.setValue(q,Bt.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&se.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&se.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),wt!==C&&(wt=C,Xi=!0,us=!0)}if(Qt.needsLights&&(Fn.state.sunShadowMap.length>0&&se.setValue(q,"sunShadowMap",Fn.state.sunShadowMap,mt),Fn.state.directionalShadowMap.length>0&&se.setValue(q,"directionalShadowMap",Fn.state.directionalShadowMap,mt),Fn.state.spotShadowMap.length>0&&se.setValue(q,"spotShadowMap",Fn.state.spotShadowMap,mt),Fn.state.pointShadowMap.length>0&&se.setValue(q,"pointShadowMap",Fn.state.pointShadowMap,mt)),ot.isSkinnedMesh){se.setOptional(q,ot,"bindMatrix"),se.setOptional(q,ot,"bindMatrixInverse");let sn=ot.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),se.setValue(q,"boneTexture",sn.boneTexture,mt))}ot.isBatchedMesh&&(se.setOptional(q,ot,"batchingTexture"),se.setValue(q,"batchingTexture",ot._matricesTexture,mt),se.setOptional(q,ot,"batchingIdTexture"),se.setValue(q,"batchingIdTexture",ot._indirectTexture,mt),se.setOptional(q,ot,"batchingColorTexture"),ot._colorsTexture!==null&&se.setValue(q,"batchingColorTexture",ot._colorsTexture,mt));let di=nt.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&j.update(ot,nt,ni),(Xi||Qt.receiveShadow!==ot.receiveShadow)&&(Qt.receiveShadow=ot.receiveShadow,se.setValue(q,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&G.environment!==null&&(mn.envMapIntensity.value=G.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Tb()),Xi){if(se.setValue(q,"toneMappingExposure",W.toneMappingExposure),Qt.needsLights&&vu(mn,us),It&&st.fog===!0&&re.refreshFogUniforms(mn,It),re.refreshMaterialUniforms(mn,st,vt,_t,O.state.transmissionRenderTarget[C.id]),Qt.needsLights&&Qt.lightProbeGrid){let sn=Qt.lightProbeGrid;mn.probesSH.value=sn.texture,mn.probesMin.value.copy(sn.boundingBox.min),mn.probesMax.value.copy(sn.boundingBox.max),mn.probesResolution.value.copy(sn.resolution)}Aa.upload(q,Ua(Qt),mn,mt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Aa.upload(q,Ua(Qt),mn,mt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&se.setValue(q,"center",ot.center),se.setValue(q,"modelViewMatrix",ot.modelViewMatrix),se.setValue(q,"normalMatrix",ot.normalMatrix),se.setValue(q,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){let sn=st.uniformsGroups;for(let Si=0,Yn=sn.length;Si<Yn;Si++){let Mi=sn[Si];Et.update(Mi,ni),Et.bind(Mi,ni)}}return ni}function vu(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function xl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(C,G,nt){let st=K.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),K.get(C.texture).__webglTexture=G,K.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:nt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){let nt=K.get(C);nt.__webglFramebuffer=G,nt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,nt=0){Tt=C,ut=G,ft=nt;let st=null,ot=!1,It=!1;if(C){let Rt=K.get(C);if(Rt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(q.FRAMEBUFFER,Rt.__webglFramebuffer),bt.copy(C.viewport),Xt.copy(C.scissor),jt=C.scissorTest,w.viewport(bt),w.scissor(Xt),w.setScissorTest(jt),pt=-1;return}else if(Rt.__webglFramebuffer===void 0)mt.setupRenderTarget(C);else if(Rt.__hasExternalTextures)mt.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Kt=C.depthTexture;if(Rt.__boundDepthTexture!==Kt){if(Kt!==null&&K.has(Kt)&&(C.width!==Kt.image.width||C.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(C)}}let ht=C.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(It=!0);let Lt=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Lt[G])?st=Lt[G][nt]:st=Lt[G],ot=!0):C.samples>0&&mt.useMultisampledRTT(C)===!1?st=K.get(C).__webglMultisampledFramebuffer:Array.isArray(Lt)?st=Lt[nt]:st=Lt,bt.copy(C.viewport),Xt.copy(C.scissor),jt=C.scissorTest}else bt.copy(Zt).multiplyScalar(vt).floor(),Xt.copy(me).multiplyScalar(vt).floor(),jt=ne;if(nt!==0&&(st=lt),w.bindFramebuffer(q.FRAMEBUFFER,st)&&w.drawBuffers(C,st),w.viewport(bt),w.scissor(Xt),w.setScissorTest(jt),ot){let Rt=K.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Rt.__webglTexture,nt)}else if(It){let Rt=G;for(let ht=0;ht<C.textures.length;ht++){let Lt=K.get(C.textures[ht]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ht,Lt.__webglTexture,nt,Rt)}}else if(C!==null&&nt!==0){let Rt=K.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Rt.__webglTexture,nt)}pt=-1};function vl(C){let G=K.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=N.textureFormatReadable(C.format),G.__typeReadable=N.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,nt,st,ot,It,Wt,Rt=0){if(!(C&&C.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Wt!==void 0&&(ht=ht[Wt]),ht){w.bindFramebuffer(q.FRAMEBUFFER,ht);try{let Lt=C.textures[Rt],Kt=Lt.format,Le=Lt.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Rt);let te=vl(Lt);if(te.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-st&&nt>=0&&nt<=C.height-ot&&q.readPixels(G,nt,st,ot,zt.convert(Kt),zt.convert(Le),It)}finally{let Lt=Tt!==null?K.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(C,G,nt,st,ot,It,Wt,Rt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Wt!==void 0&&(ht=ht[Wt]),ht)if(G>=0&&G<=C.width-st&&nt>=0&&nt<=C.height-ot){w.bindFramebuffer(q.FRAMEBUFFER,ht);let Lt=C.textures[Rt],Kt=Lt.format,Le=Lt.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Rt);let te=vl(Lt);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ke),q.bufferData(q.PIXEL_PACK_BUFFER,It.byteLength,q.STREAM_READ),q.readPixels(G,nt,st,ot,zt.convert(Kt),zt.convert(Le),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let pn=Tt!==null?K.get(Tt).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,pn);let Ye=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Km(q,Ye,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ke),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,It),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(ke),q.deleteSync(Ye),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,nt=0){let st=Math.pow(2,-nt),ot=Math.floor(C.image.width*st),It=Math.floor(C.image.height*st),Wt=G!==null?G.x:0,Rt=G!==null?G.y:0;mt.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,nt,0,0,Wt,Rt,ot,It),w.unbindTexture()},this.copyTextureToTexture=function(C,G,nt=null,st=null,ot=0,It=0){let Wt,Rt,ht,Lt,Kt,Le,te,ke,pn,Ye=C.isCompressedTexture?C.mipmaps[It]:C.image;if(nt!==null)Wt=nt.max.x-nt.min.x,Rt=nt.max.y-nt.min.y,ht=nt.isBox3?nt.max.z-nt.min.z:1,Lt=nt.min.x,Kt=nt.min.y,Le=nt.isBox3?nt.min.z:0;else{let mn=Math.pow(2,-ot);Wt=Math.floor(Ye.width*mn),Rt=Math.floor(Ye.height*mn),C.isDataArrayTexture?ht=Ye.depth:C.isData3DTexture?ht=Math.floor(Ye.depth*mn):ht=1,Lt=0,Kt=0,Le=0}st!==null?(te=st.x,ke=st.y,pn=st.z):(te=0,ke=0,pn=0);let Ze=zt.convert(G.format),hn=zt.convert(G.type),Qt;G.isData3DTexture?(mt.setTexture3D(G,0),Qt=q.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(mt.setTexture2DArray(G,0),Qt=q.TEXTURE_2D_ARRAY):(mt.setTexture2D(G,0),Qt=q.TEXTURE_2D),w.activeTexture(q.TEXTURE0),w.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(q.UNPACK_ALIGNMENT,G.unpackAlignment);let Fn=w.getParameter(q.UNPACK_ROW_LENGTH),$e=w.getParameter(q.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(q.UNPACK_SKIP_PIXELS),yi=w.getParameter(q.UNPACK_SKIP_ROWS),Xi=w.getParameter(q.UNPACK_SKIP_IMAGES);w.pixelStorei(q.UNPACK_ROW_LENGTH,Ye.width),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ye.height),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(q.UNPACK_SKIP_ROWS,Kt),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Le);let us=C.isDataArrayTexture||C.isData3DTexture,se=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){let mn=K.get(C),di=K.get(G),sn=K.get(mn.__renderTarget),Si=K.get(di.__renderTarget);w.bindFramebuffer(q.READ_FRAMEBUFFER,sn.__webglFramebuffer),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Yn=0;Yn<ht;Yn++)us&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.get(C).__webglTexture,ot,Le+Yn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.get(G).__webglTexture,It,pn+Yn)),q.blitFramebuffer(Lt,Kt,Wt,Rt,te,ke,Wt,Rt,q.DEPTH_BUFFER_BIT,q.NEAREST);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||K.has(C)){let mn=K.get(C),di=K.get(G);w.bindFramebuffer(q.READ_FRAMEBUFFER,J),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Q);for(let sn=0;sn<ht;sn++)us?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,mn.__webglTexture,ot,Le+sn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,mn.__webglTexture,ot),se?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,di.__webglTexture,It,pn+sn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,di.__webglTexture,It),ot!==0?q.blitFramebuffer(Lt,Kt,Wt,Rt,te,ke,Wt,Rt,q.COLOR_BUFFER_BIT,q.NEAREST):se?q.copyTexSubImage3D(Qt,It,te,ke,pn+sn,Lt,Kt,Wt,Rt):q.copyTexSubImage2D(Qt,It,te,ke,Lt,Kt,Wt,Rt);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else se?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Qt,It,te,ke,pn,Wt,Rt,ht,Ze,hn,Ye.data):G.isCompressedArrayTexture?q.compressedTexSubImage3D(Qt,It,te,ke,pn,Wt,Rt,ht,Ze,Ye.data):q.texSubImage3D(Qt,It,te,ke,pn,Wt,Rt,ht,Ze,hn,Ye):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,It,te,ke,Wt,Rt,Ze,hn,Ye.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,It,te,ke,Ye.width,Ye.height,Ze,Ye.data):q.texSubImage2D(q.TEXTURE_2D,It,te,ke,Wt,Rt,Ze,hn,Ye);w.pixelStorei(q.UNPACK_ROW_LENGTH,Fn),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$e),w.pixelStorei(q.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(q.UNPACK_SKIP_ROWS,yi),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Xi),It===0&&G.generateMipmaps&&q.generateMipmap(Qt),w.unbindTexture()},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&mt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?mt.setTextureCube(C,0):C.isData3DTexture?mt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?mt.setTexture2DArray(C,0):mt.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){ut=0,ft=0,Tt=null,w.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),e.unpackColorSpace=ze._getUnpackColorSpace()}};var Fg=new Kn,tu=new Z,Wi=class extends Yo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new vn(t,3)),this.setAttribute("uv",new vn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new zs(e,6,1);return this.setAttribute("instanceStart",new $i(n,3,0)),this.setAttribute("instanceEnd",new $i(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new zs(e,6,1);return this.setAttribute("instanceColorStart",new $i(n,3,0)),this.setAttribute("instanceColorEnd",new $i(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new $o(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Fg.setFromBufferAttribute(e),this.boundingBox.union(Fg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)tu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tu)),tu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ti.line={uniforms:al.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var is=class extends Nn{constructor(t){super({type:"LineMaterial",uniforms:al.clone(ti.line.uniforms),vertexShader:ti.line.vertexShader,fragmentShader:ti.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var vf=new en,Og=new Z,Bg=new Z,Bn=new en,kn=new en,ss=new en,yf=new Z,Sf=new Ve,zn=new Jo,kg=new Z,eu=new Kn,nu=new ci,rs=new en,as,br;function zg(i,t,e){return rs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),rs.multiplyScalar(1/rs.w),rs.x=br/e.width,rs.y=br/e.height,rs.applyMatrix4(i.projectionMatrixInverse),rs.multiplyScalar(1/rs.w),Math.abs(Math.max(rs.x,rs.y))}function Ab(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,c=a;l<c;l++){zn.start.fromBufferAttribute(s,l),zn.end.fromBufferAttribute(r,l),zn.applyMatrix4(e);let h=new Z,d=new Z;as.distanceSqToSegment(zn.start,zn.end,d,h),d.distanceTo(h)<br*.5&&t.push({point:d,pointOnLine:h,distance:as.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Cb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,c=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),v=-t.near;as.at(1,ss),ss.w=1,ss.applyMatrix4(t.matrixWorldInverse),ss.applyMatrix4(n),ss.multiplyScalar(1/ss.w),ss.x*=r.x/2,ss.y*=r.y/2,ss.z=0,yf.copy(ss),Sf.multiplyMatrices(t.matrixWorldInverse,a);for(let p=0,y=d;p<y;p++){if(Bn.fromBufferAttribute(c,p),kn.fromBufferAttribute(h,p),Bn.w=1,kn.w=1,Bn.applyMatrix4(Sf),kn.applyMatrix4(Sf),Bn.z>v&&kn.z>v)continue;if(Bn.z>v){let k=Bn.z-kn.z,R=(Bn.z-v)/k;Bn.lerp(kn,R)}else if(kn.z>v){let k=kn.z-Bn.z,R=(kn.z-v)/k;kn.lerp(Bn,R)}Bn.applyMatrix4(n),kn.applyMatrix4(n),Bn.multiplyScalar(1/Bn.w),kn.multiplyScalar(1/kn.w),Bn.x*=r.x/2,Bn.y*=r.y/2,kn.x*=r.x/2,kn.y*=r.y/2,zn.start.copy(Bn),zn.start.z=0,zn.end.copy(kn),zn.end.z=0;let I=zn.closestPointToPointParameter(yf,!0);zn.at(I,kg);let x=jd.lerp(Bn.z,kn.z,I),m=x>=-1&&x<=1,B=yf.distanceTo(kg)<br*.5;if(m&&B){zn.start.fromBufferAttribute(c,p),zn.end.fromBufferAttribute(h,p),zn.start.applyMatrix4(a),zn.end.applyMatrix4(a);let k=new Z,R=new Z;as.distanceSqToSegment(zn.start,zn.end,R,k),e.push({point:R,pointOnLine:k,distance:as.origin.distanceTo(R),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}var wr=class extends Dn{constructor(t=new Wi,e=new is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,c=e.count;a<c;a++,l+=2)Og.fromBufferAttribute(e,a),Bg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Og.distanceTo(Bg);let r=new zs(s,2,1);return t.setAttribute("instanceDistanceStart",new $i(r,1,0)),t.setAttribute("instanceDistanceEnd",new $i(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;as=t.ray;let a=this.matrixWorld,l=this.geometry,c=this.material;br=c.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),nu.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=br*.5;else{let v=Math.max(s.near,nu.distanceToPoint(as.origin));h=zg(s,v,c.resolution)}if(nu.radius+=h,as.intersectsSphere(nu)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),eu.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=br*.5;else{let v=Math.max(s.near,eu.distanceToPoint(as.origin));d=zg(s,v,c.resolution)}eu.expandByScalar(d),as.intersectsBox(eu)!==!1&&(n?Ab(this,e):Cb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(vf),this.material.uniforms.resolution.value.set(vf.z,vf.w))}};var iu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),os=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function $g(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:c,CY:h,mcs:d,q:v,list:p,clamp:y,norm:M,munis:I}=i,x=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,u=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[u]),B=(o,u)=>[(o-c)*l,(u-h)*l],k=.06,R=t.segs.map(o=>{let u=[],f=[0];for(let g=0;g<o.length;g+=2){let S=B(o[g],o[g+1]);u.length&&f.push(f[f.length-1]+Math.hypot(S[0]-u[u.length-1][0],S[1]-u[u.length-1][1])),u.push(S)}return{p:u,c:f,L:f[f.length-1]}}),E=t.stops.map(([o,u,f,g])=>({n:o,id:g,w:B(u,f),fams:new Set})),O=t.routes.map(([o,u,f])=>({s:o,l:u,c:f})),X=new Map;(t.bus||[]).forEach(([o,u,f,g])=>{let S={days:new Set(o),name:u,stops:f,times:g};f.forEach((b,L)=>{if(L<f.length-1){let D=X.get(b)||[];D.push([S,L]),X.set(b,D)}})});function A(o,u,f){let g=ne(),S=t.days.indexOf(g.ymd),b=[];for(let[L,D]of X.get(o)||[]){if(!L.days.has(S))continue;let P=L.times[D];if(P<u||P>f)continue;let z=L.stops[L.stops.length-1];b.push({sm:P,est:P,dl:0,fam:L.name,dest:E[z].n,destId:E[z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:L.stops.slice(D)})}return b}let U=(o,u)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),g=u.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(g[1]||"")||(+f[2]||0)-(+g[2]||0)||f[3].localeCompare(g[3])},W=[...new Set(O.map(o=>o.s))].sort(U),Y={};O.forEach(o=>{Y[o.s]||(Y[o.s]=o.c)});let at=t.pats.map(([o,u,f])=>({stops:o,t:u,segs:f})),lt=t.trips.map(([o,u,f,g,S],b)=>({day:o,pat:at[u],fam:O[f].s,c:O[f].c,t0:g,num:S,tid:t.tids[b]})),J={};W.forEach(o=>J[o]=new Set),lt.forEach(o=>{o.pat.segs.forEach(u=>J[o.fam].add(u)),o.pat.stops.forEach(u=>E[u].fams.add(o.fam))});let Q=t.days.map((o,u)=>lt.filter(f=>f.day===u)),ut=new Map(lt.map(o=>[o.tid,o])),ft=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,pt=3.922*Tt,wt=-39.705*Tt;function bt(o,u){let f=o*Tt+pt,g=u*Tt,S=Math.cos(wt),b=Math.sin(wt),L=Math.cos(g),D=Math.cos(f)*L,P=Math.sin(f)*L,z=Math.sin(g),$=Math.atan2(P,D*S-z*b),_=Math.asin(z*S+D*b),T=Math.sqrt(2/(1+Math.cos($)*Math.cos(_))),F=T*Math.cos(_)*Math.sin($),V=T*Math.sin(_),[ct,Mt,dt,yt,it,ce,xe]=ft;return B((Mt+ct*F-it)*xe,(ce-(yt-dt*V))*xe)}let Xt=new Map(E.map((o,u)=>[o.id,u]));function jt(o){if(o.g)return o.g;let u=[],f=[],g=[0],S=0;return o.segs.forEach((b,L)=>{let D=R[b];D.p.forEach((P,z)=>{L&&!z||(u.push(P),f.push(S+D.c[z]))}),S+=D.L,g.push(S)}),o.g={pts:u,cum:f,stopD:g}}function He(o,u,f,g){let S=1e18,b=0;for(let L=0;L+1<o.pts.length;L++){if(o.cum[L+1]<f||o.cum[L]>g)continue;let D=o.pts[L],P=o.pts[L+1],z=P[0]-D[0],$=P[1]-D[1],_=z*z+$*$||1e-9,T=Math.max(0,Math.min(1,((u[0]-D[0])*z+(u[1]-D[1])*$)/_)),F=D[0]+z*T-u[0],V=D[1]+$*T-u[1],ct=F*F+V*V;ct<S&&(S=ct,b=o.cum[L]+T*(o.cum[L+1]-o.cum[L]))}return{d:b,err:Math.sqrt(S)}}function Ie(o,u){let f=0,g=o.cum.length-1;if(u<=0)return o.pts[0];if(u>=o.cum[g])return o.pts[g];for(;g-f>1;){let D=f+g>>1;o.cum[D]<=u?f=D:g=D}let S=(u-o.cum[f])/(o.cum[g]-o.cum[f]||1),b=o.pts[f],L=o.pts[g];return[b[0]+(L[0]-b[0])*S,b[1]+(L[1]-b[1])*S]}let Be=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let u={};return _t.formatToParts(o).forEach(f=>u[f.type]=f.value),{ymd:u.year+u.month+u.day,min:+u.hour*60+ +u.minute+ +u.second/60}}let Pt=0,oe=null,Zt=0,me=0;function ne(){let o=vt(new Date);if(Pt===0&&oe==null)return{...o,live:!0};let u=oe==null?o.min:Zt+(Pt?(performance.now()-me)/6e4*Pt:0);return{ymd:o.ymd,min:u,live:!1}}let et=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),At="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let u=localStorage.getItem("rod_rt");u&&/jhmuyo\.workers\.dev/.test(u)&&(u=At,localStorage.setItem("rod_rt",u)),H.url=u||At}catch{H.url=At}let Ct=(o,u)=>fetch(o+u,{cache:"no-store"}).then(f=>{if(!f.ok)throw new Error("HTTP "+f.status);return f.json()}),Bt=o=>/^51/.test(o||"");async function de(){if(!H.url){we();return}let o=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&Ct(o,"/reports.json").then(P=>{P&&Array.isArray(P.items)?(H.rep=P.items,H.repSkew=(P.now||Date.now())-Date.now(),P.tipos&&(H.tipos=P.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let u=!H.adifAt||Date.now()-H.adifAt>11e4,[f,g,S,b,L]=await Promise.allSettled([Ct(o,"/trip_updates.json"),Ct(o,"/vehicle_positions.json"),Ct(o,"/alerts.json"),Ct(o,"/notices.json"),u?Ct(o,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?(H.adif=L.value,H.adifAt=Date.now()):u&&(H.adifAt=Date.now()-6e4),f.status==="fulfilled"){let P=new Map,z=new Map;for(let $ of f.value.entity||[]){let _=$.tripUpdate;if(!_||!_.trip||!Bt(_.trip.tripId))continue;let T=_.trip.tripId,F=(_.stopTimeUpdate||[])[0],V=_.delay;V==null&&F&&(V=(F.arrival||F.departure||{}).delay),_.trip.scheduleRelationship==="CANCELED"&&(V="X"),V!=null&&P.set(T,V),z.set(T,{next:F?{sid:F.stopId,t:+((F.arrival||F.departure||{}).time||0)}:null})}H.delays=P,H.tu=z,H.ok=Date.now(),H.feedTs=+((f.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=f.reason&&f.reason.message||__t(0);if(g.status==="fulfilled"){let P=new Map,z=Date.now()/1e3;for(let $ of g.value.entity||[]){let _=$.vehicle;if(!_||!_.trip||!Bt(_.trip.tripId)||!_.position)continue;let T=_.vehicle&&_.vehicle.label||"",F=T.match(/PLATF\.\(([^)]+)\)/),V=H.vp.get(_.trip.tripId),ct={tid:_.trip.tripId,w:bt(+_.position.longitude,+_.position.latitude),st:_.currentStatus||"",sid:_.stopId||"",ts:+_.timestamp||z,label:T,plat:F?F[1]:"",fam:(T.split("-")[0]||"").trim(),num:_.vehicle&&_.vehicle.id||""};ct.disp=V?V.disp:null,P.set(ct.tid,ct)}H.vp=P,H.okVP=Date.now()}let D=[];if(b.status==="fulfilled"&&Array.isArray(b.value.included)){H.okNotices=Date.now();for(let P of b.value.included){let z=new Set((P.lines||[]).map(V=>V.id).filter(V=>Y[V])),$=(V,ct)=>{V=V||{},ct=ct||window.__L;let Mt=V[ct];return ct==="en"&&Mt&&(Mt===V.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Mt))&&(Mt=""),(Mt||V.es||V.ca||"").trim()},_=V=>[$(P.description,V),$(P.title,V)].sort((ct,Mt)=>Mt.length-ct.length)[0],T=_(),F=_("es");T&&D.push({id:"N"+P.externalId,fams:z,stops:new Set,txt:T,es:F,when:(P.date||"")+"T"+(P.time||""),src:"Rodalies",core:P.core||""})}}if(S.status==="fulfilled"){let P=+((S.value.header||{}).timestamp||0);if(H.alertsTs=P,Date.now()/1e3-P<6*3600)for(let z of S.value.entity||[]){let $=z.alert;if(!$)continue;let _=new Set,T=new Set;for(let Mt of $.informedEntity||[])(Mt.routeId||"").startsWith("51")&&_.add(Mt.routeId.replace(/^51T\d+/,"")),Mt.stopId&&Xt.has(Mt.stopId)&&T.add(Xt.get(Mt.stopId));if(!_.size&&!T.size)continue;let F=($.descriptionText||$.headerText||{translation:[]}).translation||[],V=((F.find(Mt=>Mt.language==="es")||F[0]||{}).text||"").trim(),ct=+(($.activePeriod||[])[0]||{}).start||0;D.some(Mt=>Mt.txt===V)||D.push({id:z.id,fams:_,stops:T,txt:V,when:ct?new Date(ct*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[P,z]of(H.adif.items||[]).entries()){let $=(z.t?z.t+". ":"")+z.txt,_=new Set,T=new Set,F=M($);for(let V of $.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))Y[V[1]]&&_.add(V[1]);E.forEach((V,ct)=>{V.fams.size&&V.n.length>4&&F.includes(M(V.n))&&(T.add(ct),_.size||V.fams.forEach(Mt=>_.add(Mt)))}),D.some(V=>V.txt===$)||D.push({id:"A"+P,fams:_,stops:T,txt:$,when:H.adif.upd||"",src:"Adif",lvl:z.lvl})}if(b.status==="fulfilled"||S.status==="fulfilled"){H.alerts=D.sort((P,z)=>z.when>P.when?1:-1);try{z0()}catch{}}we(),wu(),Wt=0,a()}let he=()=>H.okVP&&Date.now()-H.okVP<10*6e4,ue=()=>H.okVP&&Date.now()-H.okVP<9e4,Se={at:0,v:!1},q=()=>{if(!he()||H.vp.size>0)return!1;if(Date.now()-Se.at>3e4){Se.at=Date.now();let o=vt(new Date),u=t.days.indexOf(o.ymd),f=0;if(u>=0)for(let g of Q[u]){let S=o.min-g.t0;S>g.pat.t[1]+2&&S<g.pat.t[g.pat.t.length-2]-2&&f++}Se.v=f>=6}return Se.v},Ce=()=>he()&&!q();function we(){let o=x("#rtst"),u=x("#mode");if(u){let g=[...K].filter(D=>{qa("");let P=Li.m.get(D);return P&&P[0]>=2}),S=Xa(g),b=!!Ce()&&ne().live&&!(g.length&&S.length===g.length);u.classList.toggle("on",b&&ue()),u.classList.toggle("pre",!(b&&ue())),u.textContent=b&&!ue()?__t(1):b?__t(2):N.cur?__t(3):__t(4),u.classList.toggle("past",!!N.cur);let L=x("#rcgrab");if(L){let D=L.querySelector(".rdot");D||(D=document.createElement("b"),D.className="rdot",L.insertBefore(D,L.firstChild)),D.className="rdot "+(N.cur?"past":b&&ue()?"on":"pre"),D.title=u.textContent}u.title=N.cur?`${__t(5)}${N.cur.sn.t}${__t(6)}`:""}if(!o)return;H.url?H.err?o.textContent=__t(8)+H.err+__t(9):Ce()?o.innerHTML=`${__t(10)}${H.vp.size}${__t(11)}${H.delays.size}${__t(12)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:q()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=H.err||__t(7);let f=x("#rturl");f&&f._shown!==H.url&&(f.value=H.url,f._shown=H.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){H.err=__t(15),we();return}H.url=o;try{localStorage.setItem("rod_rt",o)}catch{}H.ok=0,H.err="",we(),de()},x("#rtoff").onclick=()=>{H.url=At;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()},setInterval(de,2e4),setTimeout(de,50);let N={snap:null,key:""};function w(){let o=ne();if(o.live||!se.hoy||!se.hoy.snaps||Pt&&oe==null)return null;let u=vt(new Date).min;if(o.min>u+1)return null;let f=null;for(let g of se.hoy.snaps){if(!g.d)continue;let S=Qf(g.t);S<=o.min+1&&(!f||S>f.m)&&(f={m:S,sn:g})}return f&&o.min-f.m<=25?f:null}let tt=o=>{{let S=yu(o.num);if(S&&S.cx&&ne().live)return"X"}let u=N.cur;if(u){if(u.sn.x&&u.sn.x.includes(o.tid))return"X";let S=u.sn.d[o.tid];return S??0}if(!Ce())return null;let f=H.delays.get(o.tid),g=H.vp.get(o.tid);return f==="X"?f:g&&g.pre&&g.preDl>=1?Math.max(typeof f=="number"?f:0,g.preDl*60):f??null},K=new Set(W);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(u=>W.includes(u))&&(K.clear(),o.forEach(u=>W.includes(u)&&K.add(u)))}catch{}let mt=new Wi,Ut=new Wi,Ot=new is({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),gt=new is({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),St=new wr(mt,Ot),kt=new wr(Ut,gt);kt.renderOrder=20,St.renderOrder=21,St.frustumCulled=kt.frustumCulled=!1,e.add(kt,St);function re(o){let u=o[0]/l+c,f=o[1]/l+h;for(let g of I){if(g._bb===void 0){let b=1e9,L=1e9,D=-1e9,P=-1e9;for(let z of g.rings||[]){let $=z[0]||[];for(let _=0;_<$.length;_+=2)$[_]<b&&(b=$[_]),$[_]>D&&(D=$[_]),$[_+1]<L&&(L=$[_+1]),$[_+1]>P&&(P=$[_+1])}g._bb=[b,L,D,P]}let S=g._bb;if(!(u<S[0]||u>S[2]||f<S[1]||f>S[3]))for(let b of g.rings||[]){let L=b[0]||[],D=!1;for(let P=0,z=L.length,$=z-2;P<z;$=P,P+=2){let _=L[P+1],T=L[$+1];_>f!=T>f&&u<(L[$]-L[P])*(f-_)/(T-_)+L[P]&&(D=!D)}if(D)return!0}}return!1}let qt=!1;function Gt(){qt||!I.length||(qt=!0,E.forEach(o=>{o.ext=!re(o.w)}),R.forEach(o=>{o.ext=!re(o.p[0])&&!re(o.p[o.p.length-1])&&!re(o.p[o.p.length>>1])}))}let ae=()=>{let o=new Set(K.size<=2?K:[]);try{ht&&ht.fam&&o.add(ht.fam)}catch{}return o},ge="";function Me(){Gt();let o=[],u=[],f=new Set,g=new _e,S=new _e("#d2d0d0"),b=ae();ge=[...b].join();for(let $ of W)if(K.has($))for(let _ of J[$]){if(f.has(_))continue;f.add(_);let T=R[_].p;g.set(Y[$]),R[_].ext&&!b.has($)&&g.lerp(S,.55);for(let F=0;F+1<T.length;F++)o.push(T[F][0],T[F][1],k,T[F+1][0],T[F+1][1],k),u.push(g.r,g.g,g.b,g.r,g.g,g.b)}o.length||(o.push(0,0,-50,0,0,-50),u.push(0,0,0,0,0,0));let L=new Wi,D=new Wi;L.setPositions(o),L.setColors(u),D.setPositions(o);let P=St.geometry,z=kt.geometry;St.geometry=L,kt.geometry=D,P&&P.dispose(),z&&z.dispose(),a()}Me();let j=o=>new Nn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new _e(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ft=new yn,xt=E.length,zt=new Float32Array(xt*3),Jt=new Float32Array(xt*3),Et=new Float32Array(xt),le=new Float32Array(xt);E.forEach((o,u)=>{zt[u*3]=o.w[0],zt[u*3+1]=o.w[1],zt[u*3+2]=k,Jt.set([1,1,1],u*3),Et[u]=6,le[u]=1.6}),Ft.setAttribute("position",new rn(zt,3)),Ft.setAttribute("fill",new rn(Jt,3)),Ft.setAttribute("size",new rn(Et,1)),Ft.setAttribute("bw",new rn(le,1));let ie=j("#1d2330"),je=new gr(Ft,ie);je.renderOrder=22,je.frustumCulled=!1,e.add(je);function Ee(){let o=r.dist<45,u=ae();E.forEach((f,g)=>{let S=[...f.fams].some(L=>K.has(L)),b=f.ext&&![...f.fams].some(L=>u.has(L))&&g!==Lt;Et[g]=S?g===Lt?13:b?3:o?8:5:0,le[g]=g===Lt?3:1.6}),Ft.attributes.size.needsUpdate=!0,Ft.attributes.bw.needsUpdate=!0}let xn=600,bn=new yn,Ir=new Float32Array(xn*3),Pr=new Float32Array(xn*3),Lr=new Float32Array(xn),Dr=new Float32Array(xn);bn.setAttribute("position",new rn(Ir,3)),bn.setAttribute("fill",new rn(Pr,3)),bn.setAttribute("size",new rn(Lr,1)),bn.setAttribute("bw",new rn(Dr,1));let Ys=new Float32Array(xn);bn.setAttribute("ang",new rn(Ys,1));let _l=new Nn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new _e("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Nr=new gr(bn,_l);Nr.renderOrder=24,Nr.frustumCulled=!1,e.add(Nr);let qn=new yn,Ts=new Float32Array(xn*3),Da=new Float32Array(xn*3),Na=new Float32Array(xn),Zs=new Float32Array(xn);qn.setAttribute("position",new rn(Ts,3)),qn.setAttribute("fill",new rn(Da,3)),qn.setAttribute("size",new rn(Na,1)),qn.setAttribute("bw",new rn(Zs,1));let Ur=new gr(qn,j("#ffffff"));Ur.renderOrder=23,Ur.frustumCulled=!1,e.add(Ur);function Js(o,u){let f=R[o],g=u*f.L,S=0,b=f.c.length-1;for(;b-S>1;){let $=S+b>>1;f.c[$]<=g?S=$:b=$}let L=f.c[b]-f.c[S]||1,D=(g-f.c[S])/L,P=f.p[S],z=f.p[b];return[P[0]+(z[0]-P[0])*D,P[1]+(z[1]-P[1])*D]}let Ua=o=>o*o*(3-2*o)*.35+o*.65;function As(o,u){let f=o.pat.t,g=o.pat.stops.length,S=f[2*g-2];if(u<f[1]-2||u>S+1)return null;if(u<=f[1])return{w:E[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let b=0;b<g-1;b++){let L=f[2*b+1],D=f[2*b+2],P=f[2*b+3];if(u<=D){let z=D>L?(u-L)/(D-L):1;return{w:Js(o.pat.segs[b],Ua(y(z,0,1))),at:-1,next:b+1,prev:b,moving:!0}}if(u<=P)return{w:E[o.pat.stops[b+1]].w,at:b+1,next:b+1,moving:!1}}return{w:E[o.pat.stops[g-1]].w,at:g-1,next:g-1,moving:!1}}function js(o){let u=t.days.indexOf(o.ymd),f=[];if(u<0)return{k:u,out:f};let g=(S,b)=>{for(let L of S){if(!K.has(L.fam))continue;let D=tt(L);if(D==="X")continue;let P=(D||0)/60,z=o.min+b-L.t0-P;if(z<-2||z>L.pat.t[L.pat.t.length-2]+1)continue;let $=As(L,z);$&&f.push({tr:L,p:$,rel:z,dl:P,live:D!=null})}};return g(Q[u],0),u>0&&g(Q[u-1],1440),{k:u,out:f}}function xu(o,u,f,g){let S=o.pat.stops[0],b=u.dep0,L=null,D=(z,$)=>{for(let _ of z||[]){let T=_.pat.stops,F=T.length;if(T[F-1]!==S||_===o)continue;let V=_.t0+_.pat.t[2*(F-1)]-$;if(V>b+5||V<b-120)continue;let ct=jt(_.pat),Mt=He(ct,u.w,-1,1e9);if(Mt.err>.6)continue;let dt=ct.stopD,yt=_.pat.t,it=dt.findIndex(Vt=>Vt>Mt.d);it<0&&(it=F-1);let ce=it===0?yt[1]:yt[2*it-1]+(dt[it]>dt[it-1]?(Mt.d-dt[it-1])/(dt[it]-dt[it-1]):1)*(yt[2*it]-yt[2*it-1]),xe=f-(_.t0+ce-$);xe<-5||xe>120||(!L||Math.abs(xe)<Math.abs(L.prevDl))&&(L={prevTr:_,dPrev:Mt.d,prevDl:xe,arrO:V+Math.max(0,xe)})}};if(D(Q[g],0),g>0&&D(Q[g-1],1440),!L)return{prevTr:null,preDl:0};let P=Math.max(b,L.arrO+3);return{...L,depEst:P,preDl:Math.max(0,P-b)}}function vu(o,u,f){let g=o.pat.t,S=u.length;if(!(f>=0))return f<0?u[0]:null;for(let b=0;b<S;b++)if(f<=g[2*b+1]){if(f>=g[2*b]||b===0)return u[b];let L=g[2*b-1],D=g[2*b];return u[b-1]+(u[b]-u[b-1])*(D>L?(f-L)/(D-L):1)}return u[S-1]}let xl=performance.now();function vl(){let o=[],u=Date.now()/1e3,f=performance.now(),g=Math.min(1,(f-xl)/1e3);xl=f;for(let S of H.vp.values()){let b=ut.get(S.tid),L=b?b.fam:S.fam;if(L&&Y[L]&&!K.has(L))continue;let D=H.delays.get(S.tid),P=typeof D=="number"?D/60:0,z=Math.max(0,u-S.ts);S.mvTs!==S.ts&&((!S.mvW||Math.hypot(S.w[0]-S.mvW[0],S.w[1]-S.mvW[1])>.025)&&(S.mvW=S.w,S.mvAt=S.ts),S.mvTs=S.ts),S.still=S.ts-(S.mvAt||S.ts);let $=S.w,_=-1;if(b){let F=jt(b.pat),V=F.stopD;if(S.dObs==null||S.obsAt!==S.ts){let it=He(F,S.w,-1,1e9);S.dObs=it.d,S.err=it.err,S.obsAt=S.ts}let ct=ne(),Mt=t.days.indexOf(ct.ymd),dt=b.day===Mt-1?1440:0,yt=b.t0+b.pat.t[1]-dt;if(S.pre=ct.min+P<yt-1&&(S.dObs>V[0]+.35||S.err>.6)&&!(S.st==="STOPPED_AT"&&S.sid===E[b.pat.stops[0]].id),S.dep0=yt,S.pre){if(S.atStop=-1,S.next=0,_=0,S.disp=null,S.prevAt!==S.ts&&(S.prevAt=S.ts,Object.assign(S,xu(b,S,ct.min,Mt))),S.prevTr){let it=jt(S.prevTr.pat);$=Ie(it,S.dPrev)}}else if(!ue()&&b){let it=ne(),ce=t.days.indexOf(it.ymd),xe=b.day===ce-1?1440:0,Vt=As(b,it.min+xe-b.t0-P);Vt?($=Vt.w,S.est=!0,_=Vt.next,S.atStop=Vt.moving?-1:Vt.at,S.next=Vt.next,S.before=!1):(S.atStop=-1,S.next=-1)}else if(S.err<=.6){let it=V.findIndex(Vt=>Vt>S.dObs+.08);it<0&&(it=V.length-1);let ce=V.reduce((Vt,Ge,Te)=>Math.abs(Ge-S.dObs)<Math.abs(V[Vt]-S.dObs)?Te:Vt,0);S.atStop=Math.abs(V[ce]-S.dObs)<.16?ce:-1;{let Vt=S.st==="STOPPED_AT"&&S.sid?b.pat.stops.findIndex(Ge=>E[Ge].id===S.sid):-1;Vt>=0&&Math.abs(V[Vt]-S.dObs)<.6&&(S.atStop=Vt,it<=Vt&&(it=Math.min(Vt+1,V.length-1)))}S.before=S.atStop>=0&&S.dObs<V[S.atStop]-.15,S.next=it,_=it;let xe=S.dObs;if(S.st==="STOPPED_AT"&&S.atStop>=0)xe=V[S.atStop];else if(it>0){let Vt=(b.pat.t[2*it]-b.pat.t[2*it-1])*60,Ge=Vt>0?(V[it]-V[it-1])/Vt:0,Te=ne(),fe=t.days.indexOf(Te.ymd),dn=b.day===fe-1?1440:0,De=vu(b,V,Te.min+dn-b.t0-P),fi=S.dObs+Ge*Math.min(z,60);De!=null&&(fi=Math.min(fi,Math.max(S.dObs,De))),xe=Math.max(S.dObs,Math.min(V[it]-.03,fi))}S.disp==null||Math.abs(S.disp-xe)>1.2?S.disp=xe:xe>S.disp&&(S.disp+=(xe-S.disp)*Math.min(1,g*1.5)),$=Ie(F,S.disp)}else if(S.err>2){let it=ne(),ce=t.days.indexOf(it.ymd),xe=b.day===ce-1?1440:0,Vt=As(b,it.min+xe-b.t0-P);Vt&&($=Vt.w,S.est=!0,_=Vt.next),S.atStop=-1,S.next=Vt?Vt.next:-1}else S.atStop=-1,S.next=-1}let T=S.pre?"":S.st==="STOPPED_AT"&&S.atStop>=0||S.atStop>=0&&S.still>30?"st":S.still>=90&&S.atStop<0?"via":"";o.push({tr:b,v:S,w:$,stop:T,p:{w:$},fam:L||"?",c:b?b.c:Y[L]||"#6b7385",dl:P,live:!0,real:!0,idx:_,age:z,cancel:D==="X"})}return o}let C=new Map,G=!1,nt=!1,st="",ot={st:-1},It=[],Wt=0,Rt=null,ht=null,Lt=-1,Kt=!1,Le=0,te="";function ke(o){let u=Pt>0||Ce()&&oe==null||!!ht,f=window.__mapHidden?1e3:u?50:250;if(o-Wt<f)return!1;Wt=o,[...ae()].join()!==ge&&(Me(),Ee());{let _=w(),T=_?_.sn.t:"";N.cur=_,T!==N.key&&(N.key=T,we()),!_&&!ne().live&&!se.at&&di()}let g=ne(),S=Ce()&&g.live,b=S?{k:t.days.indexOf(g.ymd),out:vl()}:js(g);It=b.out;let L=new _e,D=0,P=0;for(let _ of It){if(D>=xn)break;Ir[D*3]=_.p.w[0],Ir[D*3+1]=_.p.w[1],Ir[D*3+2]=k+.02;let T=null;if(_.real&&_.v.pre&&_.v.prevTr)T=Ie(jt(_.v.prevTr.pat),_.v.dPrev+.35);else if(_.real&&_.tr&&!_.v.pre&&_.v.err<=.6&&_.v.disp!=null&&!(_.v.st==="STOPPED_AT"&&_.v.atStop>=0))T=Ie(jt(_.tr.pat),_.v.disp+.35);else if(!_.real&&_.p.moving){let dt=_.tr.pat.t,yt=_.p.prev,it=dt[2*yt+1],ce=dt[2*yt+2],xe=ce>it?(_.rel-it)/(ce-it):1;T=Js(_.tr.pat.segs[yt],Math.min(1,Ua(y(xe,0,1))+.04))}let F=_.real?!!_.stop:!_.p.moving;if(_.broke=Wf(_),_.broke)Ys[D]=85;else if(F)Ys[D]=75;else if(T){let dt=yl(_.p.w),yt=yl(T),it=yt[0]-dt[0],ce=yt[1]-dt[1];Ys[D]=Math.hypot(it,ce)>.05?Math.atan2(it,-ce):99}else Ys[D]=99;L.set(_.c||_.tr.c),Pr[D*3]=L.r,Pr[D*3+1]=L.g,Pr[D*3+2]=L.b;let V=_.tr?_.tr===ht:ht&&ht.vtid===_.v.tid;Lr[D]=V?22:r.dist<45?17:14,Dr[D]=V?3.5:2.2;let ct=_.real&&_.stop==="via"||!!_.broke,Mt=_.cancel||_.broke?[.86,.15,.15]:_.dl>10?[.86,.15,.15]:_.dl>5?[.92,.48,.05]:_.dl>=1?[.98,.8,.08]:[.09,.64,.29];(_.live&&_.dl>=5||V||ct)&&(Ts[P*3]=_.p.w[0],Ts[P*3+1]=_.p.w[1],Ts[P*3+2]=k+.01,Da.set(V?Mt:ct?[.86,.15,.15]:[.98,.45,.09],P*3),Na[P]=Lr[D]+(V?16+5*Math.sin(o/220):ct?10+3*Math.sin(o/400):8),Zs[P]=V?2:3,P++),D++}if(bn.setDrawRange(0,D),qn.setDrawRange(0,P),["position","fill","size","bw"].forEach(_=>{bn.attributes[_].needsUpdate=!0,qn.attributes[_].needsUpdate=!0}),bn.attributes.ang.needsUpdate=!0,Rt){let _=It.find(T=>T.tr===Rt);if(_){let T=0,F=innerHeight,V=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ct=x("#rc").getBoundingClientRect();innerWidth<=640&&(V&&(T=V.bottom),F=Math.min(F,ct.top));let Mt=T+(F-T)/2,dt=Mt-innerHeight/2,yt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=_.p.w[0]-Math.sin(r.yaw)*dt*yt,s.ty=_.p.w[1]+Math.cos(r.yaw)*dt*yt}else Ce()&&ne().live&&(Rt=null)}let z=et(Math.floor(g.min+1e-6));z!==te&&(te=z,x("#ctime").textContent=z),x("#ntr").textContent=String(It.length),x("#ntrl").textContent=S?__t(16):__t(17);{let _=K.size<W.length?[...K].sort(U).join(", "):"",T=x("#ccount"),F=N.cur?`\u23EA ${It.length}${__t(18)}${N.cur.sn.t} \xB7 ${Object.values(N.cur.sn.d).filter(V=>V>=60).length}${__t(19)}`:!g.live&&g.min<vt(new Date).min-1&&!Pt?`${__t(20)}${se.hoy&&se.hoy.snaps&&se.hoy.snaps.some(V=>V.d)?`${__t(21)}${se.hoy.snaps.find(V=>V.d).t}`:__t(22)}`:S&&!ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${os(Math.round((Date.now()-H.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:S&&!It.some(V=>V.real)&&Xa(K).length?`\u{1F4E1} ${__t(25)}${_?` <small>\xB7 ${m(_)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${It.length} ${S?__t(27):__t(28)}${_?` <small>\xB7 ${m(_)}</small>`:""}${S&&H.okVP?(()=>{let V=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${V<3?" new":""}">\u25CF ${__t(29)}${os(V+" s")}</small>`})():""}`;T&&T._t!==F&&(T.innerHTML=F,T._t=F)}{let _=x("#p");_&&_.classList.toggle("ttf",!g.live||!!Pt)}let $=new Date;if(x("#cdate").textContent=g.live?__t(30):Pt?__t(31)+Pt:Ti?__t(32):__t(33),b.k<0?x("#src").innerHTML=`${__t(34)}${Be(t.days[0])}${__t(35)}${Be(t.days[t.days.length-1])}${__t(36)}`:S?x("#src").textContent=`${ue()?__t(37):__t(38)}${os(iu(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(_=>_.ts),0))))}`:q()&&g.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(H.url?__t(41):__t(42))+__t(43),g.live){let _=Math.round(g.min),T=x("#tsl");document.activeElement!==T&&(T.value=_<240?_+1440:_)}{let _=ht?String(ht.num||ht.vtid||""):"";_!==ke._sk&&(ke._sk=_,Pe(!0))}return Pe(),!ke._sp&&(S||!g.live||q()||!H.url)&&(ke._sp=1,window.__splashOff&&window.__splashOff()),o-Le>3e3&&(ht||Lt>=0||Kt||nt||st)&&(Le=o,Fe()),we(),!0}let pn=-1,Ye=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ze=[],hn=document.createElement("button");hn.type="button",hn.id="mbtn",hn.title=__t(44),hn.innerHTML=__t(45),hn.onclick=()=>{Ye=!Ye;try{localStorage.setItem("rod_mun",Ye?"1":"")}catch{}hn.classList.toggle("on",Ye),a(),us()},hn.classList.toggle("on",Ye),document.body.appendChild(hn);let Qt=I.slice().sort((o,u)=>u.pop-o.pop);function Fn(o){if(o._a)return o._a;let u=null,f=0;for(let g of o.rings||[]){let S=g[0];if(!S)continue;let b=0,L=0,D=0;for(let P=0,z=S.length;P<z;P+=2){let $=S[P],_=S[P+1],T=S[(P+2)%z],F=S[(P+3)%z],V=$*F-T*_;b+=V,L+=($+T)*V,D+=(_+F)*V}Math.abs(b)>f&&(f=Math.abs(b),u=[L/(3*b),D/(3*b)])}return o._a=u?[(u[0]-c)*l,(u[1]-h)*l]:[o.cx,o.cy]}let $e=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,ni=[0,7.6,6.7,6,5.4],yi=[0,17,15,13,12],Xi=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function us(){let o=s.tilt<.06&&r.tilt<.08;hn.classList.toggle("show",o);let u=0;if(Ye&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(b=>b.offsetParent!==null||b.style.display==="block").map(b=>{let L=b.getBoundingClientRect();return[L.left-2,L.top-2,L.right+2,L.bottom+2]}).filter(b=>b[2]>b[0]),g=r.dist,S=g>160?5e4:g>130?2e4:g>105?8e3:g>80?3e3:g>62?800:0;for(let b of Qt){let L=$e(b.pop);if(b.pop<S)break;let D=Fn(b);if(Sn.set(D[0],D[1],k).project(n),Math.abs(Sn.x)>1.02||Math.abs(Sn.y)>1.02)continue;let P=(Sn.x*.5+.5)*innerWidth,z=(-Sn.y*.5+.5)*innerHeight,$=Xi(b.name),_=$.length*ni[L]+8,T=yi[L],F=[P-_/2,z-T/2,P+_/2,z+T/2];if(f.some(ct=>F[0]<ct[2]&&ct[0]<F[2]&&F[1]<ct[3]&&ct[1]<F[3]))continue;f.push(F);let V=Ze[u]||(Ze[u]=Object.assign(document.createElement("div"),{className:"mlab"}));V.isConnected||document.body.appendChild(V),V._n!==$&&(V.textContent=$,V._n=$),V._t!==L&&(V.className="mlab t"+L,V._t=L),V.style.transform=`translate(${Math.round(P)}px,${Math.round(z)}px) translate(-50%,-50%)`,V.style.display="block",u++}}for(;u<Ze.length;u++)Ze[u].style.display="none"}let se={at:0,hoy:null,ayer:null,err:""},mn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function di(){Date.now()-se.at<5*6e4||(se.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(mn+o+".json",{cache:"no-store"}).then(u=>u.ok?u.json():null).catch(()=>null))).then(([o,u,f])=>{se.hoy=o,se.ayer=u,se.hist=f,se.tr=null,se.err=o?"":__t(46),nt&&(d._h="",Fe()),Pe(!0)}))}function sn(o){let u={};for(let g of o&&o.snaps||[])for(let S of g.r||[]){let b=/^\d+[A-Z](\d+)/.exec(S);b&&(u[b[1]]=u[b[1]]||[]).push(Math.max(0,g.d&&g.d[S]||0)/60)}let f={};for(let g in u){let S=u[g].sort((b,L)=>b-L);f[g]=Math.round(S[S.length>>1])}return f}function Si(o){if(!se.tr){let f=new Map;for(let g of se.hist&&se.hist.days||[])f.set(g.day,g.tr);for(let g of[se.ayer,se.hoy])if(g&&g.day&&!f.has(g.day)){let S=sn(g);Object.keys(S).length&&f.set(g.day,S)}se.tr=f}let u=[...se.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return u.length?{n:u.length,late:u.filter(f=>f>=5).length,avg:u.reduce((f,g)=>f+g,0)/u.length}:null}let Yn=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",Mi={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},zf=o=>o>10?Mi.b:o>5?Mi.w:o>=1?Mi.y:Mi.g,Ks=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Fa(o,u,f){return`<div class="sbars">${o.map(g=>`<div class="sbar" title="${m(g.tip||"")}"><span class="sl">${g.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(g.w*100))}%;background:${g.c}"></i></span><b class="sv" style="color:${g.c===Mi.y?"var(--svy,#a16207)":g.c===Mi.w?"var(--svw,#c2410c)":g.c}">${g.val}</b></div>`).join("")}</div>`}function d0(o){if(o=(o||[]).filter(dt=>dt.n>=10),!o||o.length<2){let dt=o&&o[0];return dt?`${__t(47)}${dt.t}: ${Math.round(dt.ok/dt.n*100)}${__t(48)}${dt.n}${__t(49)}`:__t(50)}let u=dt=>{let[yt,it]=dt.t.split(":").map(Number);return yt*60+it},f=u(o[0]),g=Math.max(f+60,u(o[o.length-1])),S=300,b=112,L=24,D=dt=>L+(dt-f)*(S-L-8)/(g-f),P=dt=>8+(100-dt)/100*(b-26),z=dt=>dt.n?dt.ok/dt.n*100:100,$=o.map(dt=>[D(u(dt)),P(z(dt)),dt]),_=dt=>dt[0].toFixed(1)+","+dt[1].toFixed(1),T=[],F=[];$.forEach((dt,yt)=>{yt&&u(dt[2])-u($[yt-1][2])>45&&(T.push(F),F=[]),F.push(dt)}),T.push(F);let V=$[$.length-1],ct=[];for(let dt=Math.ceil(f/180)*3;dt*60<g;dt+=3)dt*60>f+20&&ct.push(dt);let Mt=Math.round(o.reduce((dt,yt)=>dt+yt.ok,0)/Math.max(1,o.reduce((dt,yt)=>dt+yt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${S} ${b}${__t(51)}${[100,75,50,25].map(dt=>`<line x1="${L}" x2="${S-4}" y1="${P(dt)}" y2="${P(dt)}" class="gl"/><text x="2" y="${P(dt)+3}" class="ax">${dt}%</text>`).join("")}
      <line x1="${L}" x2="${S-4}" y1="${P(Mt)}" y2="${P(Mt)}" class="avg"/>
      ${T.filter(dt=>dt.length).map(dt=>`<polygon points="${_([dt[0][0],P(0)])} ${dt.map(_).join(" ")} ${_([dt[dt.length-1][0],P(0)])}" class="ar"/><polyline points="${dt.map(_).join(" ")}" class="ln"/>`).join("")}
      ${$.map(([dt,yt,it])=>`<circle cx="${dt.toFixed(1)}" cy="${yt.toFixed(1)}" r="6" class="hit"><title>${it.t} \xB7 ${Math.round(z(it))}${__t(52)}${it.n}${__t(53)}${it.d5}${__t(54)}${Ks(it.avg)}${it.nd?` \xB7 ${it.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${V[0].toFixed(1)}" cy="${V[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(V[0],S-30).toFixed(1)}" y="${(V[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(z(V[2]))}%</text>
      ${ct.map(dt=>`<text x="${D(dt*60).toFixed(1)}" y="${b-4}" class="ax" text-anchor="middle">${String(dt).padStart(2,"0")}h</text>`).join("")}
      <text x="${L}" y="${b-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${Mt}%)</small>`}function f0(){di();let o=ne(),u=It.filter(D=>D.real&&Ce()&&o.live),f=u.filter(D=>H.delays.has(D.v.tid)),g=f.length,S=u.length-g,b=`${__t(57)}`;if(g){let D=f.filter(yt=>yt.dl<3).length,P=f.filter(yt=>yt.dl>=5).length,z=f.filter(yt=>yt.stop==="via").length,$=Math.round(D/g*100);b+=`${__t(58)}${g}${__t(59)}${S?` \xB7 ${S}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Yn($)}"><b>${$}${__t(60)}${Yn(100-P/g*100*2)}" title="${Math.round(P/g*100)}${__t(61)}${P}${__t(62)}${z===0?"g":z<=2?"w":"b"}"><b>${z}${__t(63)}`;let _=new Map;f.forEach(yt=>{let it=yt.fam,ce=_.get(it)||{n:0,ok:0,sum:0};ce.n++,ce.ok+=yt.dl<3,ce.sum+=Math.max(0,yt.dl),_.set(it,ce)});let T=[..._].filter(([yt])=>Y[yt]).sort((yt,it)=>yt[1].ok/yt[1].n-it[1].ok/it[1].n||it[1].sum/it[1].n-yt[1].sum/yt[1].n),F=T.filter(([,yt])=>yt.ok<yt.n),V=T.filter(([,yt])=>yt.ok===yt.n);b+=`${__t(65)}`+(F.length?"":__t(66))+Fa(F.map(([yt,it])=>({lab:An(yt),w:it.ok/it.n,c:Mi[Yn(it.ok/it.n*100)],val:`${Math.round(it.ok/it.n*100)}% <small>${Ks(it.sum/it.n)}</small>`,tip:`${yt}: ${it.ok}${__t(67)}${it.n}${__t(68)}${Ks(it.sum/it.n)}`})))+(V.length?`${__t(69)}${V.map(([yt])=>An(yt)).join(" ")}</p>`:"");let ct=new Map;f.forEach(yt=>{if(!yt.tr||yt.v.next==null||yt.v.next<0||yt.v.pre)return;let it=yt.tr.pat.stops[yt.v.next],ce=ct.get(it)||{n:0,sum:0};ce.n++,ce.sum+=Math.max(0,yt.dl),ct.set(it,ce)});let Mt=[...ct].filter(([,yt])=>yt.sum/yt.n>=1).sort((yt,it)=>it[1].sum/it[1].n-yt[1].sum/yt[1].n).slice(0,8),dt=Mt.length?Mt[0][1].sum/Mt[0][1].n:1;b+=`${__t(70)}`+(Mt.length?Fa(Mt.map(([yt,it])=>({lab:`<span class="sn" data-gs="${yt}">${m(E[yt].n)}</span>`,w:it.sum/it.n/dt,c:zf(it.sum/it.n),val:`${Ks(it.sum/it.n)} <small>${it.n} ${it.n===1?"tren":__t(71)}</small>`,tip:`${E[yt].n}: ${it.n}${__t(72)}${Ks(it.sum/it.n)}${__t(73)}`}))):__t(74))}else b+=`${__t(75)}`;let L=se.hoy;b+=`<button type="button" class="hmore" data-cols>${un.on?__t(76):__t(77)}</button>`;{qa("");let D=[...Li.m].filter(([P,z])=>Y[P]&&z[0]>=3).map(([P,z])=>[P,z[1]/z[0]]).sort((P,z)=>P[1]-z[1]);D.length&&!Ce()?b+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:D.length&&(b+=`${__t(80)}`+Fa(D.slice(0,8).map(([P,z])=>({lab:An(P),w:z,c:Mi[Yn(z*100)],val:`${Math.round(z*100)}%`,tip:`${P}: ${Math.round(z*100)}${__t(81)}`}))))}{let D=(F,V)=>{let ct=(F&&F.snaps||[]).filter(yt=>yt.n&&(!V||yt.t<=V)),Mt=ct.reduce((yt,it)=>yt+it.n,0),dt=ct.reduce((yt,it)=>yt+it.ok,0);return Mt?dt/Mt*100:null},P=(se.hoy&&se.hoy.snaps||[]).filter(F=>F.n).map(F=>F.t).pop(),z=D(se.hoy),$=D(se.ayer,P),_=z!=null?Math.round(z):null,T=$!=null?Math.round($):null;z!=null&&(b+=`${__t(82)}${Yn(z)}">${Math.round(z)}${__t(83)}${$!=null?`<span>${P?__t(84):__t(85)} <b class="${Yn($)}">${T} %</b></span><span>${_>T?__t(86):_<T?__t(87):__t(88)}</span>`:""}</div>`)}if(b+=`${__t(89)}`,L&&L.snaps){b+=d0(L.snaps);let D=Object.entries(L.st||{}).map(([$,_])=>[Xt.get($),_]).filter(([$,_])=>$!=null&&_.n>=3).map(([$,_])=>[$,_.sum/_.n/60,_]).filter($=>$[1]>=1).sort(($,_)=>_[1]-$[1]).slice(0,8);if(D.length){let $=D[0][1];b+=`${__t(90)}`+Fa(D.map(([_,T,F])=>({lab:`<span class="sn" data-gs="${_}">${m(E[_].n)}</span>`,w:T/$,c:zf(T),val:`${Ks(T)}${__t(91)}${Math.round(F.max/60)}</small>`,tip:`${E[_].n}: ${F.n}${__t(92)}${F.d5}${__t(93)}${Math.round(F.max/60)} min`})))}let P=Object.entries(L.lines||{}).filter(([$,_])=>Y[$]&&_.n>=3).sort(($,_)=>$[1].ok/$[1].n-_[1].ok/_[1].n);P.length&&(b+=`${__t(94)}`+Fa(P.map(([$,_])=>({lab:An($),w:_.ok/_.n,c:Mi[Yn(_.ok/_.n*100)],val:`${Math.round(_.ok/_.n*100)}% <small>${Ks(_.sum/_.n/60)}</small>`,tip:`${$}${__t(95)}${Math.round(_.ok/_.n*100)}${__t(96)}${Math.round(_.max/60)} min`}))));let z=L.upd?(Date.now()-Date.parse(L.upd))/6e4:0;b+=`<small class="snote">${z>40?`${__t(98)}${os(z<90?Math.round(z)+" min":z<2160?Math.round(z/60)+" h":Math.round(z/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((L.upd||"").slice(11,16))} \xB7 ${(L.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else b+=`<p class="snote">${se.at?__t(102):__t(103)}</p>`;return b+"</div>"}function p0(o){let u=ne(),f=It.filter(T=>(T.fam||T.tr&&T.tr.fam)===o),g=f.filter(T=>T.real),S=f.length,b=f.filter(T=>T.dl>=5).length,L=f.filter(T=>T.dl<3).length,D=f.filter(T=>T.stop==="via"||T.broke).length,P=H.alerts.filter(T=>T.fams.has(o)),z=T=>{let F=T.tr;if(!F)return"";let V=T.v;if(T.real&&V){let Mt=V.next>=0?E[F.pat.stops[V.next]].n:"";return V.atStop>=0?`${__t(104)}${E[F.pat.stops[V.atStop]].n}`:Mt?`${__t(105)}${Mt}`:""}let ct=T.p;return ct&&ct.next!=null&&ct.next>=0?`${__t(105)}${E[F.pat.stops[ct.next]].n}`:""},$=f.slice().sort((T,F)=>F.dl-T.dl).slice(0,40).map(T=>{let F=T.tr;return`<li class="go${za({num:F?F.num:T.v.num,tid:F?F.tid:T.v.tid})?" sel":""}" data-gt="${m(F?F.num:T.v.num)}|${m(T.real?T.v.tid:F?F.tid:"")}"><b>${m(F?F.num:T.v.num)}</b><span>${F?wi(E[F.pat.stops[F.pat.stops.length-1]].n,o):""} <small>${m(z(T))}</small></span>${T.dl>=1?`<em class="dl ${Ii(T.dl)}">+${Math.round(T.dl)}</em>`:__t(106)}</li>`}).join(""),_=qa(o);return`<div class="tc sts" style="--c:${Y[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${An(o)}${__t(107)}${u.live?`${__t(113)}${S}${__t(114)}${g.length<S?` (${g.length}${__t(115)}`:""}`:`${__t(116)}${et(u.min)}`}</small>
      <div class="kpis"><div class="kpi ${S?Yn(L/S*100):""}"><b>${S?Math.round(L/S*100)+"%":"\u2014"}${__t(108)}${b?b/Math.max(1,S)>.2?"b":"w":"g"}"><b>${b}${__t(109)}${D?"b":"g"}"><b>${D}${__t(110)}${P.length?m0(P):__t(117)}${_<.7?`${__t(118)}${Math.round(_*100)}${__t(119)}`:""}${__t(111)}${$||__t(120)}${__t(112)}`}let m0=o=>`<div class="al">${o.slice(0,3).map(u=>`<p>\u26A0\uFE0F ${Va(u)} ${m(u.txt)} <small>${Ha(u)}</small></p>`).join("")}</div>`,un={on:!1,mesh:null};function $f(){let o=se.hoy,u=[];if(o&&o.st)for(let[f,g]of Object.entries(o.st)){let S=Xt.get(f);S!=null&&g.n>=2&&u.push([S,g.sum/g.n/60,g.n])}if(!u.length){let f=new Map;It.forEach(g=>{if(!g.real||!g.tr||g.v.next==null||g.v.next<0||g.v.pre||!H.delays.has(g.v.tid))return;let S=g.tr.pat.stops[g.v.next],b=f.get(S)||[0,0];b[0]+=Math.max(0,g.dl),b[1]++,f.set(S,b)}),f.forEach((g,S)=>u.push([S,g[0]/g[1],g[1]]))}return u}let Vf=()=>Math.min(1,Math.max(.22,r.dist/110));function g0(){if(!un.mesh||!un.d)return;let o=Vf();if(Math.abs(o-un.r)<.04)return;un.r=o;let u=new Ve;un.d.forEach(([f,g],S)=>{u.makeScale(o,o,.3+Math.min(g,40)*.3),u.setPosition(E[f].w[0],E[f].w[1],k),un.mesh.setMatrixAt(S,u)}),un.mesh.instanceMatrix.needsUpdate=!0,a()}function _0(){if(un.mesh&&(e.remove(un.mesh),un.mesh.geometry.dispose(),un.mesh.material.dispose(),un.mesh=null),!un.on){a();return}let o=$f();if(!o.length){ln(__t(121)),un.on=!1;return}let u=new Po(.32,.32,1,16);u.rotateX(Math.PI/2),u.translate(0,0,.5);let f=new pr({fog:!1}),g=new Ao(u,f,o.length),S=new Ve,b=new _e;un.d=o,un.r=Vf(),o.forEach(([L,D],P)=>{let z=.3+Math.min(D,40)*.3;S.makeScale(un.r,un.r,z),S.setPosition(E[L].w[0],E[L].w[1],k),g.setMatrixAt(P,S),b.set(D>10?"#dc2626":D>5?"#ea7a0c":D>=1?"#eab308":"#16a34a"),g.setColorAt(P,b)}),g.renderOrder=25,g.frustumCulled=!1,e.add(g),un.mesh=g,s.tilt<.5&&(s.tilt=.85),a()}let Fr=document.createElement("button");Fr.type="button",Fr.id="sbtn",Fr.title=__t(122),Fr.innerHTML=__t(123),Fr.onclick=()=>{nt=!nt,nt&&(G=Kt=!1,se.at=0),d._h="",Fe(),a()},document.body.appendChild(Fr);function x0(){r.dist<45!=pn<45&&(pn=r.dist,Ee()),g0(),v0(),us()}let ds=[],Sn=new Z;function v0(){let o=0;if(un.on){let f=$f().sort((S,b)=>b[1]-S[1]),g=[];for(let[S,b]of f){if(o>=30)break;if(Sn.set(E[S].w[0],E[S].w[1],k).project(n),Sn.z>1||Math.abs(Sn.x)>1||Math.abs(Sn.y)>1)continue;let L=(Sn.x*.5+.5)*innerWidth,D=(-Sn.y*.5+.5)*innerHeight;if(g.some(([z,$])=>Math.abs(z-L)<90&&Math.abs($-D)<18))continue;g.push([L,D]);let P=ds[o]||(ds[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=E[S].n+" +"+Math.round(b)+"\u2032",P.dataset.i=S,P.style.display="block",P.style.transform=`translate(${Math.round(L+8)}px,${Math.round(D-8)}px)`,o++}for(;o<ds.length;o++)ds[o].style.display="none";return}if(r.dist<30){let f=[];for(let g=0;g<xt;g++)Et[g]<4||(Sn.set(E[g].w[0],E[g].w[1],k).project(n),!(Sn.z>1||Math.abs(Sn.x)>1.05||Math.abs(Sn.y)>1.05)&&f.push([g,(Sn.x*.5+.5)*innerWidth,(-Sn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[g,S,b]of f){let L=ds[o]||(ds[o]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=E[g].n,L.dataset.i=g,L.style.display="block",L.style.transform=`translate(${Math.round(S+8)}px,${Math.round(b-7)}px)`,o++}}for(;o<ds.length;o++)ds[o].style.display="none"}function yl(o){return Sn.set(o[0],o[1],k).project(n),[(Sn.x*.5+.5)*innerWidth,(-Sn.y*.5+.5)*innerHeight,Sn.z]}function Hf(o,u,f,g){let S=null,b=f*f;for(let L of It){let[D,P,z]=yl(L.p.w);if(z>1)continue;let $=(D-o)**2+(P-u)**2;$<b&&(b=$,S={a:L})}if(S)return S;b=g*g;for(let L=0;L<xt;L++){if(!Et[L])continue;let[D,P,z]=yl(E[L].w);if(z>1)continue;let $=(D-o)**2+(P-u)**2;$<b&&(b=$,S={s:L})}return S}let Qs=!1;window.__rodHide=()=>{Qs=!0},document.addEventListener("click",o=>{Qs&&!o.target.closest("#mcs, canvas")&&(Qs=!1)},!0),window.__rodTap=(o,u)=>{let f=null,g=1e9;for(let b of ds){if(b.style.display==="none")continue;let L=b.getBoundingClientRect();if(o>=L.left-4&&o<=L.right+4&&u>=L.top-4&&u<=L.bottom+4){let D=Math.abs(u-(L.top+L.bottom)/2)*4+(o-L.left);D<g&&(g=D,f=b)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let S=Hf(o,u,24,18);return S&&(S.a||S.s!=null)&&(Qs=!1),S&&(S.a||S.s!=null)&&(ot.st=-1),S&&S.a?(G=!1,Kt=!1,nt=!1,ht=S.a.tr||{vtid:S.a.v.tid},Lt=-1,Rt=null,Ee(),Fe(),Wt=0,a(),!0):S&&S.s!=null?(G=!1,Kt=!1,nt=!1,Lt=S.s,ht=null,Rt=null,Ee(),Fe(),a(),!0):!1},window.__rodHover=(o,u)=>{let f=Hf(o,u,14,10);if(f&&f.a){let g=f.a,S=g.tr?E[g.tr.pat.stops[g.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${g.c}">\u25A0</span> ${m(g.fam||g.tr&&g.tr.fam||"?")}${__t(124)}${m(g.tr?g.tr.num:g.v.num)}</b><small>${S?__t(105)+m(S):""}${g.real?(g.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(g.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${m(E[f.s].n)}</b><small>${[...E[f.s].fams].sort(U).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ot.st=-1,Qs=!1,G=Kt=nt=!1,ht=null,Rt=null,Lt=o,Ee(),d._h="",Fe(),a()};{let o=x("#rc"),u=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(u).observe(o)}catch{}addEventListener("resize",u),setTimeout(u,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,u=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!u||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(g=>g.text()).then(g=>{let S=(g.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];S&&f&&S!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{di()}catch{}},2500),setInterval(()=>{try{se.at=0,di()}catch{}},15*6e4);let ii={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Oa=matchMedia("(prefers-color-scheme: dark)");function Sl(){let o=ii.mode==="dark"||ii.mode==="auto"&&Oa.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<xt;f++)Jt.set(o?[.06,.08,.11]:[1,1,1],f*3);Ft.attributes.fill.needsUpdate=!0,ie.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),tr.textContent=ii.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ii.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",tr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ii.mode];let u=document.querySelector("meta[name=theme-color]");u&&(u.content=o?"#0d1119":"#eef1f5"),a()}let tr=document.createElement("button");tr.type="button",tr.id="tbtn",tr.onclick=()=>{ii.mode=ii.mode==="auto"?Oa.matches?"light":"dark":ii.mode==="dark"?"light":"dark",ii.mode==="dark"===Oa.matches&&(ii.mode="auto");try{localStorage.setItem("rod_theme",ii.mode)}catch{}Sl(),ln(tr.title)},document.body.appendChild(tr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Oa.addEventListener&&Oa.addEventListener("change",Sl),Sl(),window.__rodTick=ke,window.__rodFrame=x0,window.__rodResize=()=>{Ot.resolution.set(innerWidth,innerHeight),gt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let bi={st:-1,f:new Set},Gf=o=>{let u=[...E[o].fams].sort(U);return`<div class="sfc">${u.length>1?`<button type="button" data-sf="" class="${bi.f.size?"":"on"}${__t(133)}`:""}${u.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${bi.f.size&&!bi.f.has(f)?"off":""}${K.has(f)?"":" hid"}" style="--c:${Y[f]}">${m(f)}</button>`).join("")}</div>${u.some(f=>!K.has(f))?__t(134):""}`},y0=o=>{let u=(o||"#6b7385").replace("#",""),f=parseInt(u.slice(0,2),16),g=parseInt(u.slice(2,4),16),S=parseInt(u.slice(4,6),16);return(.299*f+.587*g+.114*S)/255>.62?"#1d2330":"#fff"},wi=(o,u)=>{let f=Y[u]||"#6b7385";return`<span class="dst" style="background:${f};color:${y0(f)}" title="${m(u||"")}">${m(o)}</span>`},Ml=o=>{let u=E[o]&&E[o].id;return Ke.st.includes(u)?"\u{1F3E0} ":Xe.st.includes(u)?"\u{1F4BC} ":""},Ii=o=>o>10?"d-hi":o>5?"d-md":"d-lo",S0=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Ba={ref:null,m:new Map};function yu(o){if(Ba.ref!==H.alerts){Ba.ref=H.alerts,Ba.m=new Map;for(let u of H.alerts){if(u.src!=="Rodalies")continue;let f=u.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let g of(u.es||u.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Ba.m.set(g[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:u.txt,when:u.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(u.es||u.txt)})}}return Ba.m.get(String(o))||null}let ka={ref:null,m:new Map};function Wf(o){let u=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!u)return null;if(ka.ref!==H.alerts){ka.ref=H.alerts,ka.m=new Map;for(let g of H.alerts)if(g.src==="Rodalies"&&S0.test(g.es||g.txt))for(let S of(g.es||g.txt).matchAll(/\b(\d{4,6})\b/g))ka.m.set(S[1],g)}let f=ka.m.get(u);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let za=o=>{try{let u=ht;return u?u.num!=null&&String(u.num)===String(o.num)||o.tid&&(u.tid===o.tid||u.vtid===o.tid):!1}catch{return!1}},Xf=(o,u)=>{let f=A(o,u.min-1,u.min+240).sort((g,S)=>g.est-S.est).slice(0,6);return f.length?`${__t(135)}${f.map(g=>`<li><b>${et(g.est)}</b>${An(g.fam)}<span>${wi(g.dest,g.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Pi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),M0=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Pi))}catch{}},qf=o=>!!o&&Pi.some(u=>u.num===String(o.num)),Ue=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),Cs=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Ue))}catch{}},bl=(o,u)=>!!(Ue&&o&&Ue.num===String(o.num)&&Ue.sid===E[o.pat.stops[u]].id);function wl(o,u){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}ln(o+" \xB7 "+u),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:u,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:u})).catch(()=>{})}function b0(){if(!Ue||Ue.done)return;let o=ne();if(!o.live)return;let u=t.days.indexOf(o.ymd),f=(Q[u]||[]).find(P=>String(P.num)===Ue.num)||(Q[u-1]||[]).find(P=>String(P.num)===Ue.num);if(!f)return;let g=f.pat.stops.findIndex(P=>E[P].id===Ue.sid);if(g<0)return;let S=tt(f),b=typeof S=="number"?Math.max(0,S/60):0,L=f.day===u-1?1440:0,D=f.t0+f.pat.t[2*g]+b-L;if(D-o.min<-3){Ue.done=!0,Cs();return}if(window.__schedAt&&D-2-o.min>.1&&(Ue.sch==null||Math.abs(Ue.sch-D)>=.5)&&(Ue.sch=D,Ue.nat=Date.now()+(D-2-o.min)*6e4,Cs(),window.__schedAt(7701,`${__t(136)}${E[f.pat.stops[g]].n}`,__t(137)+` (${et(D)})`+(P=>P?` \xB7 ${__t(138)} ${P.fam} ${__t(139)} ${et(P.est)}${P.plat?__t(140)+P.plat:""}`:"")(Pl.get(Ue.sid)),Date.now()+(D-2-o.min)*6e4)),D-o.min<=2){Ue.done=!0,Cs();let P=Pl.get(Ue.sid),z=P?` \xB7 ${P.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${P.fam} ${__t(139)} ${et(P.est)}${P.plat?__t(140)+P.plat:""}`:"",$=Math.round(D-o.min),T=($>=1?`${__t(144)} ${$}${__t(143)}${et(D)}) \xB7 ${__t(145)}`:`${__t(146)} (${et(D)}) \xB7 ${__t(145)}`)+z;window.__schedAt&&Ue.nat&&Date.now()>=Ue.nat-2e4?document.hidden||wl(`${__t(136)}${E[f.pat.stops[g]].n}`,T):(window.__schedOff&&window.__schedOff(7701),wl(`${__t(136)}${E[f.pat.stops[g]].n}`,T))}}function Su(o,u){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),g=Q[u]||[],S=(D,P)=>D.t0+D.pat.t[2*P+1],b=null,L=11;for(let D of g){let P=D.pat.stops.findIndex($=>E[$].id===o.sid);if(P<0||P===D.pat.stops.length-1)continue;let z=Math.abs(S(D,P)-f)+(String(D.num)===o.num?-5:0)+(D.fam===o.fam?0:20)+(o.dest&&E[D.pat.stops[D.pat.stops.length-1]].id!==o.dest?3:0);z<L&&(L=z,b=D)}return b}let El=new Set;function w0(){if(!Pi.length)return;let o=ne();if(!o.live)return;let u=t.days.indexOf(o.ymd);for(let f of Pi){let g=Su(f,u);if(!g)continue;let S=g.pat.stops.findIndex($=>E[$].id===f.sid);if(S<0)continue;let b=g.t0+g.pat.t[2*S+1],L=tt(g),D=typeof L=="number"?L/60:0,P=b-o.min;if(P<-2||P>60)continue;let z=o.ymd+f.num+(L==="X"?"X":D>=10?10:D>=5?5:0);El.has(z)||(L==="X"||D>=5?(El.add(z),wl(`${__t(147)}${et(b)} ${L==="X"?__t(148):`${__t(149)}${Math.round(D)} min`}`,`${g.fam} ${g.num}${__t(150)}${E[g.pat.stops[S]].n}${L==="X"?"":`${__t(151)}${et(b+D)}`}`)):P<=20&&!El.has(o.ymd+f.num+"ok")&&H.vp.has(g.tid)&&(El.add(o.ymd+f.num+"ok"),ln(`${__t(147)}${et(b)}${__t(152)}`)))}}setInterval(()=>{try{b0(),w0()}catch{}},15e3);let An=o=>`<span class="ln" style="--c:${Y[o]}">${m(o)}</span>`;{let o=f=>{let g=/^#?([0-9a-f]{6})$/i.exec(f||"");return g?[0,2,4].map(S=>{let b=parseInt(g[1].slice(S,S+2),16)/255;return b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4)}).reduce((S,b,L)=>S+b*[.2126,.7152,.0722][L],0):0},u=[...new Set(Object.values(Y))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(u){let f=document.createElement("style");f.textContent=u,document.head.appendChild(f)}}function Yf(o,u){return u?o==="X"?__t(154):o>=60?`<span class="st late ${Ii(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):__t(153)}function Mu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let u=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,g=u?u.getBoundingClientRect().bottom-f+3:150;if(u){let S=u.nextElementSibling||u.parentElement!==o&&u.parentElement.nextElementSibling;S&&(g=Math.min(g,S.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,g)))+"px")}function fs(){try{let o=d,u=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!qe.on||qe.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!u||!u.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(_=>o.style.removeProperty(_)),o._fit=0);return}let S=o.getBoundingClientRect().top,b=u.getBoundingClientRect().top-8,L=Math.max(140,Math.floor(b-S)),D=f&&f.getClientRects().length?f.getBoundingClientRect():null,P=D?Math.max(10,Math.ceil(innerWidth-D.left+8)):10;o._fit=L+"|"+P;let z=o.style,$={"max-height":L+"px",height:"auto",bottom:"auto",width:"auto",right:P+"px"};for(let _ in $)(z.getPropertyValue(_)!==$[_]||z.getPropertyPriority(_)!=="important")&&z.setProperty(_,$[_],"important")}catch{}}setInterval(()=>{qe.on&&qe.cur==="map"&&fs()},700);try{new MutationObserver(()=>fs()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=fs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let u=g=>{let S=document.querySelector(g);if(!S||!S.getClientRects().length)return"\u2014";let b=S.getBoundingClientRect();return[b.left,b.top,b.right,b.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${qe.on?qe.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${u("#mcs")}
tc ${u("#mcs .tc")}
rc ${u("#rcgrab")} z ${u("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(u){o.textContent="err "+u.message}},1e3)}addEventListener("resize",()=>setTimeout(fs,80));try{new ResizeObserver(()=>fs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(fs,80));function Fe(){try{E0()}finally{requestAnimationFrame(fs),window.__rodTabSync&&window.__rodTabSync();try{Mu()}catch{}}}function E0(){if(!ht&&Lt<0&&!Kt&&!G&&!nt&&!st){Qs=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Iu();return}let o=ne(),u="",f=Ce()&&o.live,g=(_,T)=>H.alerts.filter(F=>[...F.fams].some(V=>_.has(V))||T!=null&&F.stops.has(T)),S=_=>_.length?`<div class="al">${_.slice(0,4).map(T=>`<p>\u26A0\uFE0F ${Va(T)} ${[...T.fams].sort(U).slice(0,6).map(An).join(" ")} ${m(T.txt)} <small>${Ha(T)}</small></p>`).join("")}${_.length>4?`<small>y ${_.length-4}${__t(157)}`:""}</div>`:"",b=ht&&f?It.find(_=>_.real&&(ht.vtid?_.v.tid===ht.vtid:_.tr===ht)):null;if(st&&!nt&&!G&&!Kt&&!ht&&Lt<0)u=p0(st);else if(nt)u=f0();else if(G)u=`${__t(158)}${m(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(Kt){let _=H.alerts.filter(T=>[...T.fams].some(F=>K.has(F))||!T.fams.size);u=`${__t(161)}${_.length}${__t(162)}${_.map(T=>`<div class="al"><p>${Va(T)} ${[...T.fams].sort(U).map(An).join(" ")} <small>${Ha(T)}</small></p><p>${m(T.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(165):`${__t(166)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(b){let _=b.v,T=b.tr,F=Te=>m(E[T.pat.stops[Te]].n),V=T?T.pat.stops.length:0,ct=Xt.get(_.sid),Mt=ct!=null?m(E[ct].n):m(_.sid),dt=T&&_.atStop>=0?F(_.atStop):"",yt=T&&_.next>=0?F(_.next):Mt,it=T&&_.next>0?F(_.next-1):"",ce=b.broke||Wf(b),xe=ce?`<b class="stopv">\u26A0\uFE0F ${ce.why==="aviso"?__t(167):`${__t(168)}${ce.min} min`}</b>${T&&it?`${__t(169)}${it}${__t(170)}${yt}</b>`:""}`:b.stop==="via"&&T?`${__t(171)}${it?`${__t(173)}${it}${__t(170)}${yt}</b>`:`${__t(174)}${yt}</b>`}${__t(172)}${Math.max(1,Math.round(_.still/60))} min`:_.pre&&T?_.prevTr?`${__t(175)}${m(_.prevTr.num)}${__t(176)}${F(0)}</b>${_.prevDl>=1?`${__t(179)}${Math.round(_.prevDl)} min</b>`:""}${__t(177)}${et(_.arrO)}${__t(178)}${et(_.depEst)}</b>${_.preDl>=1?`${__t(180)}${et(_.dep0)})`:""}`:`${__t(181)}${F(0)}${__t(182)}${et(_.dep0+b.dl)}</b>`:dt&&_.before?`Llegando a <b>${dt}</b>`:(_.st==="STOPPED_AT"||b.stop==="st")&&dt?`${__t(183)}${dt}</b>`:dt&&_.next>=0&&_.atStop!==_.next?`${__t(184)}${dt}${__t(176)}${yt}</b>`:it?`${__t(185)}${it}${__t(170)}${yt}</b>`:`${__t(186)}${yt}</b>`,Vt=T&&_.next>=0&&!_.pre?et(Ya(T,_,_.next,T.t0+T.pat.t[2*_.next]+b.dl)):"",Ge=[];if(T){let Te=b.idx>=0?b.idx:0,fe=_.pre?Math.max(b.dl,_.preDl||0):b.dl,dn=De=>T.t0+T.pat.t[De]+fe;for(let De=Te;De<V;De++)Ge.push(`<li class="${Ml(T.pat.stops[De])?"mine":""}${bl(T,De)?" alm":""}"><b>${et(Ya(T,_,De,dn(De===0?1:2*De)))}</b><span title="${F(De)}">${Ml(T.pat.stops[De])}${F(De)}</span>${fe>=1?`<em class="dl ${Ii(fe)}">${_.pre?"\u2248":""}+${Math.round(fe)}</em>`:""}${De>0?`<button type="button" class="abtn" data-alarm="${De}" title="${__t(187)}">${bl(T,De)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}u=`<div class="tc" style="--c:${b.c}"><button class="x" data-cx>\xD7</button><div>${An(b.fam)}${__t(188)}${m(T?T.num:_.num)}${__t(189)}${T?`<h3 class="rt"><span class="o" title="${F(0)}">${F(0)}</span><span class="ar">\u2192</span>${wi(E[T.pat.stops[V-1]].n,T.fam)}</h3>`:""}
        <p>${xe}${Vt?`${__t(190)}${Vt}`:""}${_.plat&&_.st==="STOPPED_AT"&&dt?`${__t(191)}${m(_.plat)}</b>`:""}</p><p>${_.pre&&_.prevTr?_.preDl>=1?`${__t(192)}${Math.round(_.preDl)}${__t(193)}`:__t(194):Yf(H.delays.get(_.tid),H.delays.has(_.tid))}${(()=>{let Te=T&&Si(T.num);return Te&&Te.n>=2?`${__t(195)}${Te.n}${__t(196)}${Te.late?`${__t(197)} <b>${Te.late} ${__t(198)} ${Te.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Te.avg<.5?"0":"+"+Math.round(Te.avg)} min</span>`:""})()}${(()=>{let Te=T&&yu(T.num);return Te?`<span class="why" title="${m(Te.txt)}">${Te.why?__t(203)+m(Te.why):__t(204)}</span>`:""})()}</p>
        <small>${_.pre?`${__t(205)}${os(iu(b.age))}`:_.est?__t(206):`${__t(207)}${os(iu(b.age))}${b.age>120?__t(208):""}`}</small>
        ${Ge.length?`${b.dl>=1||_.pre&&_.preDl>=1?`${__t(209)}`:""}<ol class="stops">${Ge.join("")}</ol>`:""}${S(g(new Set([b.fam])))}
        ${Cl(T?T.num:_.num,"",b.fam)}${T?`<div class="rtb two"><button type="button" data-fav>${qf(T)?__t(210):__t(211)}</button><button type="button" data-follow>${Il(T)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(ht&&f&&!ht.pat)u=`${__t(214)}${m(ht.num||ht.vtid||"")}${__t(215)}`;else if(ht){let _=ht,T=_.pat,F=T.stops.length,V=tt(_),ct=typeof V=="number"?V/60:0,Mt=t.days.indexOf(o.ymd),dt=_.day===Mt-1?1440:0,yt=o.min+dt-_.t0-ct,it=As(_,yt),ce=fe=>_.t0+T.t[fe]+ct,xe=fe=>m(E[T.stops[fe]].n),Vt=__t(216);it&&(Vt=it.moving?`${__t(217)}${xe(it.next)}${__t(218)}${et(ce(2*it.next))}`:it.at===F-1?`${__t(219)}${xe(F-1)}</b>`:`${__t(183)}${xe(it.at)}${__t(220)}${et(ce(2*it.at+1))}`);let Ge=it?it.next:0,Te=[];for(let fe=Ge;fe<F;fe++)Te.push(`<li class="${Ml(T.stops[fe])?"mine":""}${bl(_,fe)?" alm":""}"><b>${et(Ya(_,null,fe,ce(2*fe)))}</b><span title="${xe(fe)}">${Ml(T.stops[fe])}${xe(fe)}</span>${ct>=1?`<em class="dl ${Ii(ct)}">+${Math.round(ct)}</em>`:""}${fe>0?`<button type="button" class="abtn" data-alarm="${fe}" title="${__t(187)}">${bl(_,fe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);u=`<div class="tc" style="--c:${_.c}"><button class="x" data-cx>\xD7</button><div>${An(_.fam)}${__t(188)}${m(_.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${xe(0)}">${xe(0)}</span><span class="ar">\u2192</span>${wi(E[_.pat.stops[F-1]].n,_.fam)}</h3>
        <p>${Vt}</p><p>${Yf(V,V!=null)}${(()=>{let fe=Si(_.num);return fe&&fe.n>=2?`${__t(195)}${fe.n}${__t(196)}${fe.late?`${__t(197)} <b>${fe.late} ${__t(198)} ${fe.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${fe.avg<.5?"0":"+"+Math.round(fe.avg)} min</span>`:""})()}${__t(221)}${et(_.t0+T.t[1])}${__t(222)}${et(_.t0+T.t[2*F-2])}${__t(223)}${ct>=1?__t(209):""}<ol class="stops">${Te.join("")}</ol>${Cl(_.num,"",_.fam)}<div class="rtb two"><button type="button" data-fav>${qf(_)?__t(210):__t(211)}</button><button type="button" data-follow>${Il(_)?__t(212):__t(213)}</button></div></div>`}else{let _=Lt,T=t.days.indexOf(o.ymd),F=[];bi.st!==_&&(bi.st=_,bi.f.clear());let V=it=>(!Y[it]||K.has(it))&&(!bi.f.size||bi.f.has(it));if(T>=0){let it=(ce,xe)=>{for(let Vt of ce){if(!V(Vt.fam))continue;let Ge=Vt.pat.stops.indexOf(_);if(Ge<0||Ge===Vt.pat.stops.length-1)continue;let Te=tt(Vt),fe=typeof Te=="number"?Te/60:0,dn=Vt.t0+Vt.pat.t[2*Ge+1]-xe;dn+fe<o.min-1||dn>o.min+360||F.push({tr:Vt,t:dn,dl:fe,d:Te,on:H.vp.has(Vt.tid),past:o.min>Vt.t0+Vt.pat.t[1]-xe+2})}};it(Q[T],0),T>0&&it(Q[T-1],1440)}F.sort((it,ce)=>it.t+it.dl-ce.t-ce.dl);let ct=E[_].id,Mt=C.get(ct),dt=(f||q()&&o.live)&&H.url;dt&&(!Mt||Date.now()-Mt.at>3e4)&&!Mt?.loading&&(C.set(ct,{...Mt||{},loading:!0,at:Mt?Mt.at:0}),Ct(H.url.replace(/\/+$/,""),"/departures.json?stationId="+ct).then(it=>{C.set(ct,{at:Date.now(),d:it}),Lt===_&&(d._h="",Fe())}).catch(()=>C.set(ct,{at:Date.now(),err:1})));let yt=dt&&Mt&&Mt.d&&Array.isArray(Mt.d.trains)&&Mt.d.trains.length?Mt.d.trains:null;if(yt){let it=new Map([...H.vp.values()].map(Vt=>[String((ut.get(Vt.tid)||{}).num||Vt.num),Vt])),ce=new Map(si(_).map(Vt=>[String(Vt.num),Vt])),xe=yt.filter(Vt=>V((Vt.line||{}).id||"")).slice(0,40).map(Vt=>{let Ge=String(Vt.commercialNumber||Vt.technicalNumber||""),Te=ce.get(Ge),fe=Te?et(Te.est):(Vt.departureDateHourSelectedStation||"").slice(11,16),dn=(Vt.line||{}).id||"",De=it.get(Ge),fi=Te?Math.round(Te.dl)*60:De?H.delays.get(De.tid):null,kl=Te&&(Te.gone||!Te.live&&Te.est<o.min-1);return`<li class="go${kl?" old":""}${za({num:Ge,tid:De?De.tid:""})?" sel":""}" data-gt="${m(Ge)}|${De?m(De.tid):""}"><b>${m(fe)}</b>${Y[dn]?An(dn):`<span class="ln" style="--c:#6b7385">${m(dn||"?")}</span>`}<span>${wi((Vt.destinationStation||{}).name||"",dn)}${Vt.trainObservations?` \xB7 <i>${m(Vt.trainObservations)}</i>`:""}${kl?` <small class="oldt">${Te.gone?__t(225):__t(226)}</small>`:""}</span>${Vt.trainCancelled?__t(227):typeof fi=="number"&&fi>=60?`<em class="dl ${Ii(fi/60)}">+${Math.round(fi/60)}</em>`:""}${Vt.platformSelectedStation?`${__t(228)}${m(Vt.platformSelectedStation)}</i>`:""}${De?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(E[_].n)}</h3>${Gf(_)}${Cl("",E[_].id,"")}${__t(229)}${xe||__t(231)}</ol>${Xf(_,o)}${S(g(E[_].fams,_))}${__t(230)}`}else u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(E[_].n)}</h3>${Gf(_)}${Cl("",E[_].id,"")}
        <small style="margin-top:6px">${f&&H.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${F.slice(0,40).map(it=>`<li class="go${za({num:it.tr.num,tid:it.tr.tid})?" sel":""}" data-gt="${m(it.tr.num)}|${m(it.tr.tid)}"><b>${et(it.t+it.dl)}</b>${An(it.tr.fam)}<span>${wi(E[it.tr.pat.stops[it.tr.pat.stops.length-1]].n,it.tr.fam)}</span>${it.d==="X"?__t(227):it.dl>=1?`<em class="dl ${Ii(it.dl)}">+${Math.round(it.dl)}</em>`:""}${f?it.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':it.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${Xf(_,o)}${S(g(E[_].fams,_))}${__t(230)}`}let L=d.scrollTop;if(d._h!==u&&(d.innerHTML=u,d._h=u,d.scrollTop=L),d.style.display="flex",d.classList.toggle("min",Qs),Iu(),innerWidth<=640){let _=d.querySelector(".tc");if(_&&!_.querySelector(".mn")){let T=document.createElement("button");T.type="button",T.className="mn",T.setAttribute("aria-label",__t(238)),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",T.onclick=V=>{V.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(fs),Mu(),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let F=_.querySelector(".x");_.insertBefore(T,F?F.nextSibling:_.firstChild)}}else d.classList.remove("peek");let D=x("#rc");if(innerWidth<=640&&!D.classList.contains("min")&&!Fe.done&&(Fe.done=1,x("#rcgrab").click()),innerWidth<=640){let _=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-_-16)+"px"}else if(innerHeight<=500){let _=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-_-20+"px"}else d.style.top="",d.style.width=nt?"390px":"300px",d.style.maxHeight="";fs();let z=d.querySelector("[data-cx]");z&&(z.onclick=_=>{if(_.stopPropagation(),Fe.done=0,nt||G||Kt||st&&!ht&&Lt<0){nt=G=Kt=!1,ht||Lt>=0||(st=""),d._h="",Fe(),a();return}if(ht&&ot.st>=0){let T=ot.st;ot.st=-1,ht=null,Rt=null,Lt=T,Ee(),d._h="",Fe(),Wt=0,a();return}ot.st=-1,Kt=!1,G=!1,nt=!1,ht=null,Lt=-1,Rt=null,Ee(),Fe(),Wt=0,a()}),jf(d),d.querySelectorAll("[data-alarm]").forEach(_=>_.onclick=T=>{T.stopPropagation();let F=ht&&ht.pat?ht:ut.get(ht&&ht.vtid)||null;if(!F)return;let V=+_.dataset.alarm,ct=E[F.pat.stops[V]].id;Ue&&Ue.num===String(F.num)&&Ue.sid===ct?(Ue=null,window.__schedOff&&window.__schedOff(7701),ln(__t(239))):(Ue={num:String(F.num),sid:ct,at:Date.now()},ln(`${__t(240)}${E[F.pat.stops[V]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Cs(),d._h="",Fe()});{let _=d.querySelector("[data-fav]");_&&(_.onclick=T=>{T.stopPropagation();let F=ht&&ht.pat?ht:ut.get(ht&&ht.vtid)||null;if(!F)return;let V=Pi.findIndex(ct=>ct.num===String(F.num));if(V>=0)Pi.splice(V,1),ln(__t(241));else{let ct=[...Ke.st,...Xe.st,...Dt.st],Mt=F.pat.stops.find(dt=>ct.includes(E[dt].id))??F.pat.stops[0];Pi.push({num:String(F.num),fam:F.fam,sid:E[Mt].id,dest:E[F.pat.stops[F.pat.stops.length-1]].id,t:et(F.t0+F.pat.t[2*F.pat.stops.indexOf(Mt)+1])}),ln(`${__t(242)}${F.fam}${__t(243)}${Pi[Pi.length-1].t}${__t(150)}${E[Mt].n}${__t(244)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}M0(),d._h="",Fe(),Pe(!0)})}{let _=d.querySelector("[data-share]");_&&(_.onclick=()=>{let T=st,F=It.filter(dt=>(dt.fam||dt.tr&&dt.tr.fam)===T),V=F.filter(dt=>dt.dl>=5).sort((dt,yt)=>yt.dl-dt.dl),ct=H.alerts.filter(dt=>dt.fams.has(T)),Mt=`${T}${__t(245)}${et(ne().min)}: ${F.length}${__t(246)}${V.length}${__t(247)}${V.length?" ("+V.slice(0,4).map(dt=>`${dt.tr?dt.tr.num:dt.v.num} +${Math.round(dt.dl)}`).join(", ")+")":""}.${ct.length?__t(248)+ct[0].txt:__t(249)}`;navigator.share?navigator.share({text:Mt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Mt),ln(__t(250)+Mt.slice(0,60)+"\u2026"))})}{let _=d.querySelector("[data-cols]");_&&(_.onclick=()=>{un.on=!un.on,_0(),d._h="",Fe()})}d.querySelectorAll("[data-gs]").forEach(_=>_.onclick=()=>{let T=+_.dataset.gs;nt=!1,window.__rodPickStation(T),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(_=>_.onclick=T=>{T.stopPropagation();let F=_.dataset.sf;F?bi.f.has(F)?bi.f.delete(F):bi.f.add(F):bi.f.clear(),d._h="",Fe()}),d.querySelectorAll("[data-gt]").forEach(_=>_.onclick=()=>{ot.st=Lt;let[T,F]=_.dataset.gt.split("|"),V=ut.get(F);Ul({num:T,tid:H.vp.has(F)?F:"",tr:V||null})}),d.querySelectorAll("[data-sethome]").forEach(_=>_.onclick=()=>Du(Lt,_.dataset.sethome));let $=d.querySelector("[data-follow]");$&&($.onclick=()=>{let _=Il(ht);if(Rt=_?null:ht,!_&&ht&&ht.num!=null){let T=ht.pat.stops,F=String(ht.num),V=null,ct=1e9;for(let Mt of[Dt,Ke,Xe]){let dt=ai(Mt);if(dt==null||!T.includes(dt)||Mt===Dt&&!Dt.st.length)continue;let yt=si(dt).find(it=>String(it.num)===F&&!it.gone);yt&&yt.est<ct&&(ct=yt.est,V=Mt)}V&&Rs(V.key,F),Pe(!0)}if(_&&ht&&ht.num!=null){let T=String(ht.num);[...Zn].forEach(([F,V])=>{String(V)===T&&Rs(F,null)}),ri.num===T&&(ri.num=""),Yt.tid===T&&(Yt.tid="",Yt.manual=0,Yt.quiet=Date.now()+10*6e4),Ue&&Ue.num===T&&(Ue=null,Cs(),window.__schedOff&&window.__schedOff(7701)),Pe(!0)}Rt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Fe(),a()})}window.__rodCard=Fe;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(ht||Lt>=0||Kt||G)&&(d._h="",Fe())},x("#ver").onclick=()=>{G=!0,nt=!1,Kt=!1,d._h="",Fe()};let Tl={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},T0=["vacio","lleno","petado",__t(251),"calor","abordo"],A0=["gente","retraso","cancel","ascensor","via"],C0={vacio:__t(252),lleno:__t(253),petado:__t(254),parado:__t(255),calor:__t(256),abordo:__t(257),gente:__t(258),retraso:__t(259),cancel:__t(260),ascensor:__t(261),via:__t(262)},Al=o=>(H.tipos||C0)[o]||o,bu=(o,u)=>(H.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||u&&f.sid===String(u)&&!f.num||o&&u&&f.num===String(o)&&f.sid===String(u)),Zf=o=>{let u=Math.round((Date.now()+(H.repSkew||0)-o.at)/6e4);return u<1?__t(263):os(u+" min")},$a=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Cl(o,u,f){if(!H.url||!H.repOk)return"";let g=bu(o,u),S=o?T0:A0;return`${__t(264)}${g.length?"":__t(266)}</small>${g.map(b=>`<p><span>${Tl[b.kind]||"\u2022"} <b>${m(Al(b.kind))}</b> <small>${b.up>1?b.up+__t(267):""}${Zf(b)}</small></span>${$a.has(b.id)?"<small>\u2713</small>":`<button type="button" data-rv="${b.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${b.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${o?__t(268):__t(269)}</summary><div class="ckb">${S.map(b=>`<button type="button" data-rk="${b}" data-rn="${m(o||"")}" data-rs="${m(u||"")}" data-rl="${m(f||"")}">${Tl[b]} ${m(Al(b))}</button>`).join("")}${__t(265)}`}async function Jf(o,u){try{let g=await(await fetch(H.url.replace(/\/+$/,"")+u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!g.ok){ln(g.err||__t(270));return}if(g.id){$a.add(g.id);try{localStorage.setItem("rod_votes",JSON.stringify([...$a].slice(-300)))}catch{}}ln(u==="/vote"?__t(271):g.n>1?`${__t(272)}${g.n}${__t(273)}`:__t(274));let S=await Ct(H.url.replace(/\/+$/,""),"/reports.json");S&&S.items&&(H.rep=S.items),d._h="",Fe(),Pe(!0)}catch{ln(__t(275))}}function jf(o){o.querySelectorAll("[data-rk]").forEach(u=>u.onclick=f=>{f.stopPropagation(),u.disabled=!0,Jf({kind:u.dataset.rk,num:u.dataset.rn,sid:u.dataset.rs,line:u.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(u=>u.onclick=f=>{f.stopPropagation();let[g,S]=u.dataset.rv.split(":");$a.add(+g);try{localStorage.setItem("rod_votes",JSON.stringify([...$a].slice(-300)))}catch{}Jf({id:+g,v:+S},"/vote")})}let Rl=0;function ln(o,u){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,u){let g=document.createElement("button");g.type="button",g.className="tact",g.textContent=u.label,g.onclick=S=>{S.stopPropagation(),clearTimeout(Rl),f.className="",u.fn()},f.appendChild(g)}f.className="on",clearTimeout(Rl),Rl=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),f._tap||(f._tap=1,f.onclick=()=>{clearTimeout(Rl),f.className=""})}function Va(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(276):m(o.src)}</b>`:""}function Ha(o){if(!o.when)return"";let[u,f]=o.when.split("T"),g=vt(new Date),S=g.ymd.slice(0,4)+"-"+g.ymd.slice(4,6)+"-"+g.ymd.slice(6,8);if(u===S&&f){let b=Math.round(g.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return b<1?__t(263):b<60?os(b+" min"):`${__t(277)}${f.slice(0,5)}`}return`${u.slice(8,10)}/${u.slice(5,7)}${f?" "+f.slice(0,5):""}`}function wu(){let o=x("#alr");if(!o)return;let u=H.alerts.filter(f=>[...f.fams].some(g=>K.has(g))).length;o.hidden=!u,o.textContent=`\u26A0\uFE0F ${u}${u===1?__t(278):__t(279)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{G=!1,nt=!1,Kt=!0,Fe()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(280)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let g=getSelection();g.removeAllRanges(),g.addRange(f),x("#wcopy").textContent=__t(281)}setTimeout(()=>x("#wcopy").textContent=__t(282),2500)};let R0=Xt.get("71801");function Kf(o,u){let f=E[o].id,g=C.get(f);!(he()&&H.url)||g&&(g.loading||Date.now()-g.at<3e4)||(C.set(f,{...g||{},loading:!0,at:g?g.at:0}),Ct(H.url.replace(/\/+$/,""),"/departures.json?stationId="+f).then(S=>{C.set(f,{at:Date.now(),d:S}),u&&u()}).catch(()=>C.set(f,{at:Date.now(),err:1})))}let Qf=o=>+o.slice(0,2)*60+ +o.slice(3,5),Ga={k:-2,m:null};function Wa(o){let u=t.days.indexOf(ne().ymd);if(Ga.k!==u){Ga.k=u,Ga.m=new Map;for(let f of Q[u]||[])Ga.m.set(String(f.num),f)}return Ga.m.get(String(o))||null}let Li={at:0,m:new Map},Xa=o=>Ce()?(qa(""),[...o].filter(u=>{let f=Li.m.get(u);return f&&f[0]>=2&&f[1]===0}).sort(U)):[];function qa(o){if(Date.now()-Li.at>6e4||Li.vp!==H.vp){Li.at=Date.now(),Li.vp=H.vp,Li.m=new Map;let f=ne(),g=t.days.indexOf(f.ymd);if(g>=0)for(let S of Q[g]){let b=f.min-S.t0;if(b<S.pat.t[1]+3||b>S.pat.t[S.pat.t.length-2]-3)continue;let L=Li.m.get(S.fam)||[0,0];L[0]++,H.vp.has(S.tid)&&L[1]++,Li.m.set(S.fam,L)}}let u=Li.m.get(o);return u&&u[0]>=3?u[1]/u[0]:1}function Ya(o,u,f,g){let S=E[o.pat.stops[f]].id;if([...Ke.st,...Xe.st].includes(S)){let b=si(o.pat.stops[f]).find(L=>String(L.num)===String(o.num));if(b&&!b.gone)return b.est}return Eu(o,u,f,0,g)}function tp(o,u){if(!o||!u||u.pre||u.dObs==null||u.err==null||u.err>.6)return null;let f=Date.now()/1e3-u.ts;if(f>150||f<-30||(u.still||0)>=90)return null;let g=jt(o.pat).stopD,S=o.pat.t,b,L,D=g.reduce((P,z,$)=>Math.abs(z-u.dObs)<Math.abs(g[P]-u.dObs)?$:P,0);if(Math.abs(g[D]-u.dObs)<.16||u.atStop===D)b=S[2*D+1]??S[2*D],L=D;else{let P=g.findIndex($=>$>u.dObs);if(P<=0)return null;let z=Math.min(1,Math.max(0,(u.dObs-g[P-1])/(g[P]-g[P-1]||1)));b=S[2*P-1]+z*(S[2*P]-S[2*P-1]),L=P-1}return{t:vt(new Date).min-f/60,tpos:b,j0:L,sd:g}}function Eu(o,u,f,g,S){let b=tp(o,u);if(!b||f<=b.j0&&!(f===b.j0&&g===1))return S;let L=o.pat.t,D=b.t+(L[2*f+g]??L[2*f])-b.tpos;if(D-b.t>45)return S;let P=(S%1440+1440)%1440,z=((D-P+720)%1440+1440)%1440-720;return z>=-3&&z<=5?S+z:S}function Wb(o,u,f,g){let S=tp(o,u);if(!S)return null;let b=Eu(o,u,f,1,S.t+o.pat.t[2*f+1]-S.tpos);return b-g.min>30||b<g.min-1?null:b}function si(o,u){let f=ne(),g=(Ce()||q())&&f.live&&!u,S=C.get(E[o].id),b=[],L=new Map([...H.vp.values()].map(P=>[String((ut.get(P.tid)||{}).num||P.num),P]));if(g&&S&&S.d&&Array.isArray(S.d.trains)&&S.d.trains.length)for(let P of S.d.trains){let z=(P.departureDateHourSelectedStation||"").slice(11,16);if(!z)continue;let $=String(P.commercialNumber||P.technicalNumber||""),_=L.get($),T=_?H.delays.get(_.tid):null,F=Math.max(typeof T=="number"?Math.max(0,T/60):0,_&&_.pre&&_.preDl||0),V=Qf(z);V<f.min-720&&(V+=1440);let ct=+(P.departureDateHourSelectedStation||"").slice(17,19)||0,Mt=V+ct/60,dt=_&&ut.get(_.tid)||Wa($),yt=dt?dt.pat.stops.indexOf(o):-1,it=yt>=0?(dt.t0+dt.pat.t[2*yt+1])%1440:null;if(it!=null){for(;it<Mt-720;)it+=1440;for(;it>Mt+720;)it-=1440;Math.abs(Mt-it)>120&&(it=null)}let ce,xe;it==null?(ce=ct||!F?Mt:Mt+F,xe=ct?0:F):ct||Math.abs(Mt-it)>=1?(ce=Mt,xe=Math.max(0,Mt-it)):(ce=it+F,xe=F);let Vt=!1;if(dt&&!_&&yt>0&&!ct){let Ge=t.days.indexOf(f.ymd),Te=dt.day===Ge-1?1440:dt.day===Ge+1?-1440:0,fe=dt.t0+dt.pat.t[1]-Te;if(f.min<fe){let dn=fe+(dt.pat.t[2*yt+1]-dt.pat.t[1]);dn>ce+1&&(ce=dn,Vt=!0,it!=null&&(xe=Math.max(0,ce-it)))}}if(it!=null&&(V=Math.round(it)),_&&dt&&yt>=0){let Ge=Eu(dt,_,yt,1,ce);Ge!==ce&&(ce=Math.max(Ge,f.min),it!=null&&(xe=Math.max(0,ce-it)))}b.push({dubious:Vt,rodLive:!!ct,sm:V,est:ce,dl:xe,fam:(P.line||{}).id||"",dest:(P.destinationStation||{}).name||"",destId:(P.destinationStation||{}).id||"",plat:P.platformSelectedStation||"",cancel:!!P.trainCancelled,obs:P.trainObservations||"",live:!!_,num:$,tid:_?_.tid:"",tr:_&&ut.get(_.tid)||Wa($),src:"oficial"})}else{let P=t.days.indexOf(f.ymd);if(P<0)return b;let z=($,_)=>{for(let T of $){let F=T.pat.stops.indexOf(o);if(F<0||F===T.pat.stops.length-1)continue;let V=tt(T),ct=typeof V=="number"?Math.max(0,V/60):0,Mt=T.t0+T.pat.t[2*F+1]-_;if(Mt+ct<f.min-1||Mt>f.min+(f.min>1080||f.min<300?600:360))continue;let dt=T.pat.stops[T.pat.stops.length-1];b.push({sm:Mt,est:Mt+ct,dl:ct,fam:T.fam,dest:E[dt].n,destId:E[dt].id,plat:"",cancel:V==="X",obs:"",live:H.vp.has(T.tid),num:T.num,tid:T.tid,tr:T,src:"horario"})}};z(Q[P],0),P>0&&z(Q[P-1],1440),P+1<t.days.length&&f.min>1080&&z(Q[P+1],-1440)}if(g){let P=new Set(b.map(_=>String(_.num))),z=t.days.indexOf(f.ymd),$=(_,T)=>{for(let F of _||[]){if(P.has(String(F.num)))continue;let V=F.pat.stops.indexOf(o);if(V<0||V===F.pat.stops.length-1)continue;let ct=F.t0+F.pat.t[2*V+1]-T;if(ct<f.min-45||ct>f.min+1||!H.vp.get(F.tid))continue;let dt=H.delays.get(F.tid),yt=typeof dt=="number"?Math.max(0,dt/60):0,it=F.pat.stops[F.pat.stops.length-1];b.push({sm:ct,est:ct+yt,dl:yt,fam:F.fam,dest:E[it].n,destId:E[it].id,plat:"",cancel:!1,obs:"",live:!0,num:F.num,tid:F.tid,tr:F,src:"horario"})}};z>=0&&($(Q[z],0),z>0&&$(Q[z-1],1440));for(let _ of b){let T=_.tid&&H.vp.get(_.tid),F=_.tr?_.tr.pat.stops.indexOf(o):-1;_.passed=!!(T&&F>=0&&!T.pre&&T.next!=null&&T.next>=0&&T.next>F&&T.atStop!==F),!_.passed&&_.live&&_.est<f.min&&(_.est=f.min,_.late=!0),_.passed&&(_.gone=!0)}}let D=b.filter(P=>P.gone?f.min-P.est<20:P.est>=f.min-.5).sort((P,z)=>P.est-z.est);{let P=D.filter(z=>z.gone);if(P.length>2){let z=new Set(P.slice(0,P.length-2));D=D.filter($=>!z.has($))}}if(!D.filter(P=>!P.gone).length&&b.length&&b[0].src==="oficial"&&!u)return si(o,!0);for(let P of D){let z=P.num&&yu(P.num);z&&z.cx&&(P.cancel=!0,P.cxWhy=z.txt)}if(Ce()&&f.live){let P=t.days.indexOf(f.ymd);for(let z of D){if(z.live||z.cancel||!z.tr)continue;let $=z.tr.day===P-1?1440:z.tr.day===P+1?-1440:0,_=z.tr.t0+z.tr.pat.t[1]-$+(z.dl||0);z.noPos=f.min>_+3&&!z.rodLive,z.ghost=z.noPos&&qa(z.fam)>=.7}}if(u||(D=D.concat(A(o,f.min-.5,f.min+360)).sort((P,z)=>P.est-z.est)),!u&&D.some(P=>P.src==="oficial")){let P=b.filter(_=>_.src==="oficial"),z=Math.max(...P.map(_=>_.sm)),$=new Set(D.map(_=>String(_.num)));D=D.concat(si(o,!0).filter(_=>!_.gone&&_.sm<=z&&_.est>=f.min-.5&&!$.has(String(_.num))).map(_=>Object.assign(_,{unconf:!0}))).sort((_,T)=>_.est-T.est)}if(D.some(P=>P.src==="oficial")){let P=Math.max(...D.map($=>$.sm)),z=new Set(D.map($=>String($.num)));D=D.concat(si(o,!0).filter($=>$.sm>P&&!z.has(String($.num))))}return D}let ep=(o,u,f,g)=>{let S={key:o,ico:u,name:f,st:[],i:0,walk:10,open:!1};try{let b=JSON.parse(localStorage.getItem("rod_"+o)||"null");b&&Object.assign(S,b)}catch{}return!S.st.length&&g&&(S.st=g),S},Ke=ep("home","\u{1F3E0}",__t(283),null),Xe=ep("work","\u{1F4BC}",__t(284),null),Dt={key:"near",ico:"\u{1F4CD}",name:__t(285),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Za=[Dt,Ke,Xe];try{Dt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Ke.open=!1,Xe.open=!1;function np(o,u){let f=bt(o,u),g=bt(o,u+.009);return 1/Math.hypot(g[0]-f[0],g[1]-f[1])}function Tu(o){if(!navigator.geolocation){Dt.err=__t(286),Pe(!0);return}navigator.geolocation.getCurrentPosition(u=>{let{longitude:f,latitude:g}=u.coords,S=bt(f,g),b=np(f,g),L=E.map(($,_)=>[_,Math.hypot($.w[0]-S[0],$.w[1]-S[1])*b]).filter(([$])=>E[$].fams.size).sort(($,_)=>$[1]-_[1]),D=L.filter(([,$],_)=>_===0||$<Math.max(2.5,L[0][1]*1.6)).slice(0,3),P=Dt.st[0]!==E[D[0][0]].id;Dt.w=S,Dt.k=b,Dt.acc=u.coords.accuracy!=null?u.coords.accuracy:999,Dt.st=D.map(([$])=>E[$].id),Dt.dist=Object.fromEntries(D.map(([$,_])=>[E[$].id,_])),Dt.fix=Date.now(),Dt.err="",P&&(Dt.i=0);let z=[Ke,Xe].find($=>$.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5);Pe(!0)},u=>{Dt.err=u.code===1?__t(287):__t(288),Pe(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let ip=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Tu(!0),400);let Yt={fixes:[],tid:"",no:new Map,shown:""},ri={num:"",until:0};function Il(o){return!!o&&(Rt===o||o.num!=null&&[...Zn.values()].some(u=>String(u)===String(o.num)))}let I0=()=>{let o=new Set([...Zn.values()].map(String));return ri.num&&ri.until>Date.now()&&o.add(ri.num),o};function P0(){let o=Yt.fixes;if(o.length<2)return;let u=o[o.length-1],f=o.slice().reverse().find(F=>u.t-F.t>=8e3&&u.t-F.t<=9e4);if(!f)return;let g=Math.hypot(u.w[0]-f.w[0],u.w[1]-f.w[1])*u.k,S=u.spd!=null&&u.spd>0?u.spd*3.6:g/((u.t-f.t)/36e5);if(u.acc!=null&&u.acc>100)return;if(Yt.tid&&S<8){if(!Yt.slow)Yt.slow=u.t;else if(u.t-Yt.slow>9e4&&E.some(F=>F.w&&Math.hypot(F.w[0]-u.w[0],F.w[1]-u.w[1])*u.k<.35)){Yt.tid="",Yt.manual=0,Yt.slow=0,Yt.quiet=Date.now()+10*6e4,Rt=null,Pe(!0);return}}else Yt.slow=0;if(!Yt.tid&&Yt.quiet&&Date.now()<Yt.quiet||Yt.manual&&Date.now()<Yt.manual)return;if(Yt.tid){if(S<22)return;let F=It.find(V=>V.tr&&String(V.tr.num)===Yt.tid)||js(ne()).out.find(V=>V.tr&&String(V.tr.num)===Yt.tid);if(F){if(Math.hypot(F.p.w[0]-u.w[0],F.p.w[1]-u.w[1])*u.k<=5){Yt.far=0;return}if(Yt.far||(Yt.far=u.t),u.t-Yt.far<12e4)return}Yt.far=0}if(S<22||S>200)return;let b=[u.w[0]-f.w[0],u.w[1]-f.w[1]],L=null,D=2.5,P=It.filter(F=>F.real),z=js(ne()).out.filter(F=>F.tr&&!P.some(V=>V.tr&&String(V.tr.num)===String(F.tr.num))),$=I0();for(let F of[...P,...z]){if(!F.tr||$.size&&!$.has(String(F.tr.num)))continue;let V=F.real?2.5:3.5,ct=Math.hypot(F.p.w[0]-u.w[0],F.p.w[1]-u.w[1])*u.k;if(ct>Math.min(D,V)||L&&L.real&&!F.real)continue;let Mt=F.real?F.v.next:F.p.next;if(Mt==null||Mt<0)continue;let dt=E[F.tr.pat.stops[Mt]].w,yt=[dt[0]-F.p.w[0],dt[1]-F.p.w[1]];if(yt[0]*b[0]+yt[1]*b[1]<=0)continue;let it=String(F.tr.num);(Yt.no.get(it)||0)>Date.now()||(D=ct,L=F)}if(!L){Yt.cand=null;return}let _=String(L.tr.num);if(Yt.tid===_||u.acc!=null&&u.acc>50)return;if(!Yt.cand||Yt.cand.k!==_){Yt.cand={k:_,t:u.t};return}if(u.t-Yt.cand.t<2e4)return;Yt.cand=null,Yt.tid=_,G=Kt=nt=!1,Lt=-1,ht=L.tr,Rt=L.tr,Object.assign(s,{tx:L.p.w[0],ty:L.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());{let F=L.tr.pat.stops,V=L.real?L.v.next:L.p.next,ct=[...Ke.st,...Xe.st],Mt=F.findIndex((dt,yt)=>yt>=V&&ct.includes(E[dt].id));Mt>0&&!(Ue&&Ue.num===_)&&(Ue={num:_,sid:E[F[Mt]].id,at:Date.now()},Cs())}Ee(),d._h="",Fe(),Wt=0,a();let T=x("#onb");T||(T=document.createElement("div"),T.id="onb",document.body.appendChild(T)),T.innerHTML=`${__t(289)}${m(L.tr.fam)} ${m(L.tr.num)}${__t(290)}${m(E[L.tr.pat.stops[L.tr.pat.stops.length-1]].n)}${__t(291)}${Ue&&Ue.num===_?`${__t(293)}${m(E[Xt.get(Ue.sid)].n)}`:""}${__t(292)}`,T.className="on",T.querySelector("[data-onb-no]").onclick=()=>{Yt.no.set(_,Date.now()+20*6e4),Yt.tid="",Rt=null,ht=null,d._h="",Fe(),T.className=""},T.querySelector("[data-onb-x]").onclick=()=>{T.className=""},setTimeout(()=>{T.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,u=()=>{o==null&&(o=navigator.geolocation.watchPosition(g=>{let{longitude:S,latitude:b}=g.coords,L={t:g.timestamp||Date.now(),w:bt(S,b),k:np(S,b),spd:g.coords.speed,acc:g.coords.accuracy};Yt.fixes.push(L),Yt.fixes=Yt.fixes.filter(D=>L.t-D.t<12e4);try{ne().live&&P0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},f=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(u,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?f():(Yt.fixes=[],u())})}setInterval(()=>{!document.hidden&&(Date.now()-Dt.fix>11e4||Za.some(o=>o.goAt))&&Tu(!1)},3e4);let Ei=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},ai=o=>o.st.length?Xt.get(o.st[o.i]||o.st[0]):null;function sp(o,u,f,g){if(g&&u.bus)return u.bstops.slice(1).some(L=>g.has(L))?"to":"out";if(g&&u.tr){let L=u.tr.pat.stops,D=L.indexOf(o);if(D>=0&&L.slice(D+1).some(P=>g.has(P)))return"to"}if(g&&u.tr)return"out";let S=Xt.get(u.destId)??E.findIndex(L=>L.n===u.dest);if(S<0||S==null||f==null)return"otros";let b=L=>Math.hypot(E[L].w[0]-E[f].w[0],E[L].w[1]-E[f].w[1]);return b(S)<b(o)?"to":"out"}let er=o=>o<1?__t(263):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),rp=0,L0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,ap=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,op=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Ja=o=>{let u=o.es||o.txt;return ap.test(u)||ap.test(o.txt)?3:op.test(u)||op.test(o.txt)||o.lvl>=2?2:1},D0=4,Au=new Map,Pl=new Map;function N0(o,u){let f=t.days.indexOf(ne().ymd),g=f+"|"+o+"|"+[...u].join(",");if(Au.has(g))return Au.get(g);let S=!1,b=new Set,L=new Set;for(let P of Q[f]||[]){let z=P.pat.stops,$=z.indexOf(o);if($>=0)for(let T=$+1;T<z.length;T++){if(u.has(z[T])){S=!0;break}b.add(z[T])}let _=-1;for(let T=1;T<z.length;T++)if(u.has(z[T])){_=T;break}if(_>0)for(let T=0;T<_;T++)L.add(z[T])}let D=S?null:[...b].filter(P=>L.has(P)&&P!==o&&!u.has(P));return Au.set(g,D),D}function lp(o,u,f,g){for(let S of g||si(o)){if(S.cancel||S.gone||!S.tr||S.est<u-.01)continue;let b=S.tr.pat.stops,L=b.indexOf(o);if(L<0)continue;let D=-1;for(let P=L+1;P<b.length;P++)if(f.has(b[P])){D=P;break}if(!(D<0))return{c:S,fin:S.est+(S.tr.pat.t[2*D]-S.tr.pat.t[2*L+1])}}return null}function U0(o,u,f){let g=lp(o,u+2,f,si(o));return g?{c:g.c,fin:g.fin,m:g.c.est-u,lost:!1}:null}function cp(o,u,f,g,S){let b=null,L=new Map,D=si(o).filter(P=>!P.cancel&&!P.gone&&P.tr&&P.est-S.min>=g).slice(0,8);for(let P of D){let z=P.tr.pat.stops,$=z.indexOf(o);if(!($<0))for(let _ of f){let T=z.indexOf(_);if(T<=$)continue;let F=P.est+(P.tr.pat.t[2*T]-P.tr.pat.t[2*$+1]);L.has(_)||L.set(_,si(_));let V=lp(_,F+D0,u,L.get(_));V&&(!b||V.fin<b.finAt-.01||Math.abs(V.fin-b.finAt)<.01&&P.est>b.x.est)&&(b={T:_,x:P,finAt:V.fin})}}return b}function F0(o,u,f,g,S){let b=u.T,L=si(b),D=u.fin,P=[];for(let $ of L){if(P.length>=5)break;if($.cancel||$.gone||!$.tr)continue;let _=$.tr.pat.stops,T=_.indexOf(b),F=-1;for(let Mt=T+1;Mt<_.length;Mt++)if(D.has(_[Mt])){F=Mt;break}if(F<0||f.x&&f.x.arr!=null&&$.est<f.x.arr-.01)continue;let V=$.est+($.tr.pat.t[2*F]-$.tr.pat.t[2*T+1]),ct=g&&g.c===$;P.push(`<li class="hr${ct?" pin":""}" style="--lc:${Y[$.fam]||"#6b7385"}"><span class="hrt"><b>${et($.est)}</b><small>${f.x&&f.x.arr!=null?$.est-f.x.arr<2?__t(294):Math.floor($.est-f.x.arr)+" "+__t(295):""}</small></span><span class="hrd">${wi($.fam+" \xB7 "+$.dest,$.fam)}<small class="hro">${__t(296)} ${et(V)}${$.num?" \xB7 "+__t(297)+m($.num):""}</small></span><span class="hrm">${$.dl>=1?`<em class="dl ${Ii($.dl)}">+${Math.round($.dl)}</em>`:""}${$.plat?`${__t(228)}${m($.plat)}</i>`:""}</span></li>`)}let z=u.cands.length>1?`<div class="hxst"><span>${__t(298)}:</span><button type="button" data-hxf="${o.key}:" class="${u.fixed?"":"on"}">${__t(299)}</button>${(()=>{let $=[];for(let _ of u.cands){let T=cp(ai(o),D,[_],0,S);T&&$.push([_,T.finAt])}return $.sort((_,T)=>_[1]-T[1]).slice(0,4).map(([_])=>`<button type="button" data-hxf="${o.key}:${m(E[_].id)}" class="${u.fixed&&_===b?"on":""}">${m(E[_].n)}</button>`).join("")})()}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(298)} ${wi(E[b].n,g?g.c.fam:"")} \u2192 ${m(u.finName)}</div><ol class="hxl">${P.join("")||`<li class="hr"><span class="hrd">${__t(300)}</span></li>`}</ol>${z}</div>`}let hp=new Set;function O0(o,u,f){hp.has(o)||(hp.add(o),yp(u,f,o))}function B0(o,u,f){let g=ai(o);if(o===Dt){if(Yt.tid)return"";if(g==null)return`${__t(301)}${Dt.err?m(Dt.err)+__t(302):__t(303)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Ke,Xe].find(Nt=>Nt.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5)||Date.now()-Dt.fix>10*6e4)return"";o.walk=ip(Dt.dist[o.st[o.i]]||0)}if(g==null){let rt=Dt.st.length?Xt.get(Dt.st[0]):null,Nt=o===Xe?Ke:Xe,ee=rt!=null&&!Nt.st.includes(Dt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${ee?`${__t(304)}${m(E[rt].n)}</b>`:__t(305)}</small></span>${ee?`<button type="button" class="hpick" data-hnear="${o.key}${__t(306)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${ee?__t(307):__t(308)}</button></div></div>`}Kf(g,()=>Pe(!0));let S=o===Dt?null:o===Ke?Xe:Ke,b=S?ai(S):null,L=b!=null&&b!==g?b:R0,D=b!=null&&b!==g?S===Xe?__t(309):"casa":"Barcelona",P=E[g].fams,z=new Set([...P].filter(rt=>K.has(rt))),$=z.size<P.size,_=!1;z.size||(z=new Set(P),$=!1,_=!0);let T=Dt.w?Math.hypot(E[g].w[0]-Dt.w[0],E[g].w[1]-Dt.w[1])*Dt.k:null,F=T!=null&&Date.now()-Dt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,Ei(o));let V=o!==Dt&&!!o.platAt,ct=o===Dt||F&&T>3&&!o.goAt&&!V,Mt=V||o!==Dt&&F&&T<.08&&Dt.acc<=40&&!(o===Ke&&Dt.homeW&&Math.hypot(Dt.homeW[0]-Dt.w[0],Dt.homeW[1]-Dt.w[1])*Dt.k<.05),dt=o.goAt?(Date.now()-o.goAt)/6e4:null;dt!=null&&(dt>60||Mt)&&(o.goAt=0,Ei(o));let yt=!Mt&&o!==Dt&&!!o.goAt,it=yt?F&&T<=3?ip(T):Math.max(0,o.walk-dt):0,ce=si(g),xe=ce.filter(rt=>!Y[rt.fam]||K.has(rt.fam)||_),Vt=ct||Mt?0:yt?it:o.walk,Ge=H.alerts.filter(rt=>[...rt.fams].some(Nt=>z.has(Nt))||rt.stops&&rt.stops.has(g)),Te=Ge.some(rt=>L0.test(rt.es||rt.txt)),fe={to:[],out:[],otros:[],all:xe},dn=D!=="Barcelona"?new Set(S.st.map(rt=>Xt.get(rt)).filter(rt=>rt!=null)):null,De=null;if(dn&&o!==Dt){let rt=N0(g,dn);if(rt&&rt.length){let Nt=o.xfer!=null?Xt.get(o.xfer):null,ee=Nt!=null&&rt.includes(Nt)?[Nt]:rt,pe=cp(g,dn,ee,Vt,u);pe&&(De=Object.assign(pe,{fin:dn,finName:E[L].n,cands:rt,fixed:Nt!=null&&rt.includes(Nt)}),Kf(pe.T,()=>Pe(!0)),L=pe.T,dn=new Set([pe.T]))}}xe.forEach(rt=>fe[sp(g,rt,L,dn)].push(rt));let fi="";if(dn&&!fe.to.length&&xe.length<ce.length){let rt=ce.filter(Nt=>!xe.includes(Nt)&&sp(g,Nt,L,dn)==="to");rt.length&&(fe.to=rt,fi=[...new Set(rt.map(Nt=>Nt.fam))].sort(U).join(", "))}let kl=rt=>{if(rt==="all")return __t(310);let Nt=pe=>(pe.find(Rn=>Rn.fam)||{}).fam;if(rt==="to")return __t(311)+wi(D==="Barcelona"?"Barcelona":E[L].n,Nt(fe.to)||[...z][0])+(()=>{let pe=$&&!fi?[...z].filter(Rn=>fe.to.some(ps=>ps.fam===Rn)).sort(U):[];return pe.length?`<span class="hwf" title="${__t(312)}">${pe.map(An).join("")}</span>`:""})();let ee=[];for(let pe of fe[rt])ee.some(Rn=>Rn[0]===pe.dest)||ee.push([pe.dest,pe.fam]);return ee.length?__t(311)+ee.slice(0,2).map(([pe,Rn])=>wi(pe,Rn)).join(" "):__t(313)},rr=Zn.get(o.key);rr&&!ce.some(rt=>String(rt.num)===rr&&!rt.gone)&&(ri.num=rr,ri.until=Date.now()+90*6e4,Rs(o.key,null));let Vr=rt=>{let Nt=rr&&fe[rt].find(cn=>String(cn.num)===rr&&!cn.gone);if(Nt&&Nt.cancel)return{cls:"v-miss",pin:1,x:Nt,big:__t(314),small:`${et(Nt.est)} \xB7 ${Nt.fam}${__t(315)}${Nt.dest}${Nt.num?" \xB7 "+__t(297)+Nt.num:""}`,warn:""};let ee=Nt||fe[rt].find(cn=>!cn.cancel&&!cn.gone&&cn.est-u.min>=Vt);if(!ee){let cn=fe[rt].find(ar=>!ar.cancel);return cn&&!ct?{cls:"v-miss",big:__t(316),small:`${__t(317)}${et(cn.est)}${__t(318)}${er(cn.est-u.min)}${__t(319)}`}:{cls:"v-no",big:__t(320),small:__t(321)}}let pe=ee.est-u.min-Vt,Rn=ct||Mt?"v-info":yt?pe<1.5?"v-warn":"v-ok":pe<1.5?"v-bad":pe<5?"v-warn":"v-ok",ps=ee.ghost?fe[rt].find(cn=>!cn.cancel&&!cn.ghost&&cn.live&&cn.est>ee.est):null;if(Nt&&pe<0&&!ct&&!Mt){let cn=fe[rt].find(ar=>!ar.cancel&&!ar.gone&&!ar.ghost&&ar!==ee&&ar.est-u.min>=Vt);return{cls:"v-miss",pin:1,miss:1,nxt:cn,x:ee,ghost:!!ee.ghost,big:__t(322),small:`${et(ee.est)} \xB7 ${ee.fam}${__t(315)}${ee.dest}${ee.plat?__t(140)+ee.plat:""}${ee.num?" \xB7 "+__t(297)+ee.num:""}`,warn:cn?`\u27A1\uFE0F ${__t(323)}: ${cn.est-u.min-Vt<1?__t(324):__t(325)+" "+er(cn.est-u.min-Vt)} \xB7 ${et(cn.est)}${cn.arr!=null?" \u2192 "+et(cn.arr):""}${cn.plat?__t(140)+cn.plat:""}${cn.num?" \xB7 "+__t(297)+cn.num:""}`:""}}return{pin:Nt?1:0,cls:Rn,ghost:!!ee.ghost,big:ct||Mt?pe<1?__t(326):__t(327)+er(pe):yt?pe<1.5?__t(328):__t(329)+er(pe)+__t(330):pe<1.5?__t(331):__t(332)+er(pe),warn:ee.unconf?"\u26A0\uFE0F "+__t(333):Nt&&!ee.live&&ee.rodLive&&!ee.ghost?"\u{1F4E1} "+__t(334):!ee.ghost&&ee.noPos&&Nt?"\u{1F4E1} "+__t(335):!ee.ghost&&ee.late&&Nt?__t(336):ee.ghost?`\u26A0\uFE0F ${__t(337)}${ps?`${__t(338)}${et(ps.est)}`:""}`:Te?__t(339):"",small:`${ee.bus?__t(340):""}${et(ee.est)} \xB7 ${ee.fam}${__t(315)}${ee.dest}${ee.plat?__t(140)+ee.plat:""}${ee.dl>=1?` \xB7 +${Math.round(ee.dl)} min`:""}${ee.arr!=null?`${__t(341)}${et(ee.arr)}`:""}${ee.num?" \xB7 "+__t(297)+ee.num:""}`,x:ee}},n_=dn||new Set([L]),i_=rt=>{let Nt=rt.tr;if(!Nt)return null;let ee=Nt.pat.stops,pe=ee.indexOf(g);if(pe<0)return null;let Rn=-1;for(let ps=pe+1;ps<ee.length;ps++)if(n_.has(ee[ps])){Rn=ps;break}return Rn<0?null:rt.est+(Nt.pat.t[2*Rn]-Nt.pat.t[2*pe+1])};fe.to.forEach(rt=>{rt.arr=i_(rt)});let zl=fe.out.length?"out":"otros",Qe=Vr("to"),eo=Vr(zl);if(Mt||o===Dt&&Dt.acc<=40&&(Dt.dist[o.st[o.i]]||9)<.08){for(let rt of[Qe.x,eo.x].concat(o===Dt?[Vr("all").x]:[]))if(rt&&Zn.has(o.key)&&String(Zn.get(o.key))===String(rt.num)&&!rt.cancel&&rt.est-u.min<=2&&rt.est-u.min>-.5){let Nt="w"+rt.num+"|"+Math.round(rt.sm);vp.has(Nt)||(vp.add(Nt),wl(`${__t(342)}${rt.fam}${__t(315)}${rt.dest}`,`${Math.round(rt.est-u.min)<=1?__t(343):__t(344)+Math.round(rt.est-u.min)+" min"}${__t(315)}${E[g].n}${rt.plat?__t(140)+rt.plat:""}`))}}let Pp=Ce()&&u.live,Lp=z.size===1,s_=rt=>{let Nt=rt.est-u.min;return ct?rt.cancel?"cx":Nt<0?"u-miss":"u-info":rt.cancel?"cx":Nt<Vt?"u-miss":Nt<Vt+1.5?"u-now":Nt<Vt+5?"u-soon":"u-ok"},r_=rt=>{if(rt.gone)return`<li class="hr u-gone${rt.live?" on":""}${za(rt)?" sel":""} go" data-dk="${f.push(rt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${et(rt.est)}${__t(345)}${os(Math.max(1,Math.round(u.min-rt.est))+" min")}</small></span><span class="hrd">${wi((Lp?"":rt.fam+" \xB7 ")+rt.dest,rt.fam)}${__t(346)}${m(rt.num)}</small></span><span class="hrm">${rt.dl>=1?`<em class="dl ${Ii(rt.dl)}">+${Math.round(rt.dl)}</em>`:""}</span></li>`;let Nt=!rt.cancel&&rt.est-u.min<Vt,ee=bu(rt.num,"");return`<li class="hr ${s_(rt)}${rt.live?" on":""}${rt.ghost?" gh":""}${za(rt)?" sel":""}${rr&&String(rt.num)===rr?" pin":""}${Pi.some(pe=>{let Rn=Su(pe,t.days.indexOf(u.ymd));return Rn&&String(Rn.num)===String(rt.num)})?" fav":""} go" style="--lc:${Y[rt.fam]||"#6b7385"}" data-dk="${f.push(rt)-1}" title="${rt.cancel?__t(314):Nt?__t(322):__t(347)}"><span class="hrt"><b>${rt.cancel?"\u2715":Nt?et(rt.est):er(rt.est-u.min)}</b><small>${rt.cancel?__t(348):rt.late?__t(349):Nt?__t(350):rt.ghost?__t(351):et(rt.est)}</small></span><span class="hrd">${rt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${wi((Lp?"":rt.fam+" \xB7 ")+rt.dest,rt.fam)}${ee.length?`<i class="cr" title="${m(ee.map(pe=>Al(pe.kind)).join(" \xB7 "))}">${ee.slice(0,2).map(pe=>Tl[pe.kind]).join("")}</i>`:""}${rt.arr!=null?`${__t(352)}${et(rt.arr)}${rt.num?" \xB7 "+__t(297)+m(rt.num):""}${(()=>{let pe=rt.num&&Si(rt.num);return pe&&pe.n>=3&&pe.late/pe.n>=.5?`${__t(353)}${pe.late}/${pe.n})</b>`:""})()}</small>`:""}${rt.obs?`<small class="hro">${m(rt.obs)}</small>`:""}${rt.unconf?`<small class="hro unc">${__t(354)}</small>`:""}</span><span class="hrm">${!rt.cancel&&rt.dl>=1?`<em class="dl ${Ii(rt.dl)}">+${Math.round(rt.dl)}</em>`:""}${rt.plat?`${__t(228)}${m(rt.plat)}</i>`:""}</span></li>`},no=(rt,Nt,ee)=>`<div class="hcol"><div class="hdir">${kl(rt)}${ee?`<button type="button" class="hhide" data-hhide="${o.key}:${ee}" title="${__t(355)}">\u2715</button>`:""}</div><div class="hv ${Nt.cls}${Nt.ghost||Nt.pin&&Nt.x&&Nt.x.noPos&&!Xa([Nt.x.fam]).length?" gh":""}${Nt.x?" go":""}"${Nt.miss&&Nt.nxt&&Nt.nxt.num?` data-pinnext="${o.key}:${m(Nt.nxt.num)}" title="${__t(356)}"`:Nt.x?` data-dk="${f.push(Nt.x)-1}"`:""}><b>${Nt.big}</b>${Nt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(357)}">\u{1F4CC} ${__t(358)} \u2715</button>`:""}<small>${m(Nt.small)}</small>${Nt.pin&&Nt.x&&Nt.x.num?(pe=>pe?`<span class="hwhere">\u{1F4CD} ${m(pe)}</span>`:"")(Lu(Nt.x.num)):""}${Nt.warn?`<span class="hvw">${m(Nt.warn)}</span>`:""}</div><ol>${fe[rt].slice(0,(o.more?rt==="all"||o.hide?20:10:rt==="all"?7:o.hide?8:4)+fe[rt].filter(pe=>pe.gone).length).map(r_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Dt){let rt=Vr("all");var a_=rt.x?`<span class="nw">${rt.big}</span> \xB7 <span class="nw"><b>${et(rt.x.est)}</b> ${m(rt.x.fam)}${__t(359)}${m(rt.x.dest)}${rt.x.plat?'<span class="nw">'+__t(140)+m(rt.x.plat)+"</span>":""}`:rt.big}let Je=De&&Qe.x&&Qe.x.arr!=null?U0(De.T,Qe.x.arr,De.fin):null;if(Je){let rt=o._xc;rt&&rt.leg===String(Qe.x.num)&&rt.conn!==String(Je.c.num)&&rt.est<Je.c.est&&rt.live?(Je.lost=!0,Je.missed=rt.est):(!rt||rt.leg!==String(Qe.x.num)||!rt.live||rt.conn===String(Je.c.num))&&(o._xc={leg:String(Qe.x.num),conn:String(Je.c.num),est:Je.c.est,live:!!(H.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}Je&&(Pl.set(E[De.T].id,{fam:Je.c.fam,est:Je.c.est,plat:Je.c.plat,lost:Je.lost}),Je.lost&&Zn.get(o.key)===String(Qe.x.num)&&O0("xf"+Qe.x.num+"|"+Je.c.num,`\u21C4 ${__t(360)} ${E[De.T].n}`,`${__t(361)}: ${Je.c.fam} ${et(Je.c.est)} \u2192 ${et(Je.fin)}${Je.c.plat?" \xB7 v\xEDa "+Je.c.plat:""}`));let o_=Je?`<br><span class="nw hxf ${Je.lost?"xbad":Je.m<4?"xwarn":"xok"}">\u21C4 ${Je.lost?`${__t(362)} ${et(Je.missed)} \xB7 ${__t(142)} `:`${m(E[De.T].n)} \xB7 `}${An(Je.c.fam)} <b>${et(Je.c.est)}</b> \u2192 <b>${et(Je.fin)}</b>${Je.lost?"":` \xB7 ${Math.floor(Je.m)} ${__t(363)}`}</span>`:De?`<br><span class="nw hxf xbad">\u21C4 ${__t(364)} ${m(E[De.T].n)}</span>`:"",l_=o===Dt?a_:De&&Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(140)+m(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${et(Qe.x.est)}</b>${Qe.x.arr!=null?` \u2192 ${m(E[De.T].n)} <b>${et(Qe.x.arr)}</b>`:""}</span>${o_}`:Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(140)+m(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${et(Qe.x.est)}</b>${Qe.x.arr!=null?`${__t(366)}${et(Qe.x.arr)}</b>`:""}${__t(365)}${m(D)}</span>`:__t(367)+m(D),We=o===Dt?(rt=>rt.pin?rt:null)(Vr("all")):Qe.pin?Qe:eo.pin?eo:null;We&&We.x&&Zn.has(o.key)&&Sp(We,E[g].n);let c_=We?o===Dt?"all":We===Qe?"to":zl:"",Hr=!!(We&&(We.ghost||We.x.noPos&&!Xa([We.x.fam]).length||We.x.cancel)),Vu=!!(We&&We.miss),Gr=Hr?fe[c_].find(rt=>!rt.cancel&&!rt.ghost&&!rt.gone&&rt.est>We.x.est-.01&&rt!==We.x&&rt.est-u.min>=(ct||Mt?0:Vt)):null,h_=Vu?`<span class="nw">${__t(368)} <b>${et(We.x.est)}</b></span>${We.nxt?`<br><span class="nw hnx">${__t(361)} <b>${et(We.nxt.est)}</b>${We.nxt.arr!=null?` \u2192 <b>${et(We.nxt.arr)}</b>`:""}</span>`:""}`:"",u_=Hr?`<span class="nw">\u26A0\uFE0F ${We.x.cancel?__t(314):We.ghost?__t(369):__t(370)}</span>${We.x.cancel?"":` \xB7 <span class="nw"><b>${et(We.x.est)}</b>${We.x.arr!=null?` \u2192 <b>${et(We.x.arr)}</b>`:""}</span>`}${Gr?` \xB7 <span class="nw">${__t(142)} <b>${et(Gr.est)}</b>${Gr.arr!=null?` \u2192 <b>${et(Gr.arr)}</b>`:""}${Gr.plat?__t(140)+m(Gr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${We?" pinned":""}${Hr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(E[g].n)}${We&&We.x.num?`<i class="hpn">\u{1F4CC} ${m(We.x.num)}</i>`:""}</b><small class="c${Vu||Hr&&We.x.cancel?"bad":Hr?"warn":Te?"bad":Qe.cls.slice(2)}">${Hr?u_:Vu?h_:l_}</small>${We&&We.x&&We.x.num?(rt=>rt?`<small class="nofit hwh2">\u{1F4CD} ${m(rt)}</small>`:"")(Lu(We.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((rt,Nt)=>{let ee=Xt.get(rt);return ee==null?"":`<button type="button" data-hs="${o.key}:${Nt}" class="${Nt===o.i?"on":""}">${m(E[ee].n)}</button>`}).join("")}</div>`:""}
        ${o===Dt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let rt=Dt.dist[o.st[o.i]]||0;return rt<1?Math.round(rt*100)*10+" m":rt.toFixed(1).replace(".",",")+" km"})()}${__t(372)}${o.walk}${__t(373)}`:""}
        ${V?`<div class="hwalk away">${__t(375)}<a data-hplat="${o.key}${__t(374)}`:Mt?`${__t(376)}${o.key}${__t(377)}`:yt?`${__t(378)}${Math.round(it)} min</b>${F&&T<=3?__t(379):""} \xB7 <a data-hgo="${o.key}${__t(374)}`:""}${ct&&o!==Dt?`${__t(380)}${T<10?T.toFixed(1).replace(".",","):Math.round(T)}${__t(381)}`:""}<div class="hwalk"${ct||Mt||yt?" hidden":""}><button type="button" class="hgo" data-hgo="${o.key}:1">\u{1F6B6} ${__t(382)}</button><button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(383)}</button><span class="hstep" title="${__t(384)}">${__t(385)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(386)}</span></div>
        ${(()=>{let rt=Pi.filter(Nt=>o.st.includes(Nt.sid));return rt.length?`<div class="hfav">${rt.map(Nt=>{let ee=Su(Nt,t.days.indexOf(u.ymd)),pe=ee&&xe.find(Rn=>String(Rn.num)===String(ee.num));return`\u2B50 <b>${Nt.t}</b> ${m(Nt.fam)} ${pe?pe.cancel?__t(387):pe.gone?__t(225):pe.dl>=1?`<em class="dl ${Ii(pe.dl)}">+${Math.round(pe.dl)}${__t(388)}${et(pe.est)}`:__t(389):__t(390)}`}).join("<br>")}</div>`:""})()}
        ${$&&fi?`${__t(391)}${[...z].sort(U).map(An).join(" ")}${__t(392)}${D}${__t(393)}${fi}${__t(394)}`:_?`${__t(395)}${[...K].sort(U).slice(0,3).map(An).join(" ")}${__t(396)}`:""}
        ${Ge.length?`<div class="hal ${Te?"bad":""}${Uu.v?" open":""}" data-halx>\u26A0\uFE0F ${Va(Ge[0])} ${m(Ge[0].txt)} <small>${Ha(Ge[0])}</small>${Ge.length>1?` <a data-hal>+${Ge.length-1}${__t(397)}`:""}</div>`:`${__t(398)}${[...z].sort(U).join(", ")}</div>`}
        ${(()=>{let rt=o.st.flatMap(Nt=>bu("",Nt));return rt.length?`<div class="hcr">${rt.slice(0,3).map(Nt=>`${Tl[Nt.kind]} <b>${m(Al(Nt.kind))}</b> <small>${Nt.up>1?Nt.up+__t(267):""}${Zf(Nt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Dt?`<div class="hcols one">${no("all",Vr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${no("to",Qe)}</div><a class="hshow" data-hshow="${o.key}${__t(399)}`:o.hide==="to"?`<div class="hcols one">${no(zl,eo)}</div><a class="hshow" data-hshow="${o.key}${__t(399)}`:`<div class="hcols">${no("to",Qe,"to")}${no(zl,eo,"out")}</div>`}
        ${De?F0(o,De,Qe,Je,u):""}
        ${xe.length>(o===Dt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(400):__t(401)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Pp?C.get(E[g].id)?.d?__t(402):__t(403):__t(404)} \xB7 \u25CF = ${__t(405)}">${Pp?C.get(E[g].id)?.d?__t(406):__t(407):__t(224)}</span><a data-hmap="${g}${__t(371)}${o===Dt?__t(408):`<a data-hset="${o.key}${__t(409)}`}${o===Xe?`${__t(410)}`:""}</div>
      </div>`:"")+"</div>"}let Di={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},up=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,dp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,nr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Ll=()=>{let o=new Set;return[...Ke.st,...Xe.st].forEach(u=>{let f=Xt.get(u);f!=null&&E[f].fams.forEach(g=>o.add(g))}),[...o].sort(U)},ja=()=>({stations:[...Ke.st,...Xe.st],lines:Ll().filter(o=>!nr.has(o))}),k0=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),u=>u.charCodeAt(0));async function fp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function pp(o){let f=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...ja()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Cu(){let o=ai(Ke),u=ai(Xe);if(o==null||u==null)return o!=null?Ke:u!=null?Xe:null;if(Dt.w&&Date.now()-Dt.fix<3*36e5){let f=g=>Math.hypot(E[g].w[0]-Dt.w[0],E[g].w[1]-Dt.w[1]);return f(o)<=f(u)?Ke:Xe}return new Date().getHours()<13?Ke:Xe}function mp(o){let u=Cu(),f=u===Ke?Xe:Ke,g=u&&ai(u),S=f&&ai(f);if(g==null||S==null)return!0;let b=(o.es||"")+" "+(o.txt||""),L=t.days.indexOf(ne().ymd),D=ne(),P=[...new Set([...b.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map($=>$[1]))];if(P.length)return P.some($=>{let _=Wa($);if(!_)return!1;let T=_.pat.stops,F=T.indexOf(g),V=T.indexOf(S);if(F<0||V<0||F>V)return!1;let ct=_.t0+_.pat.t[2*F+1];return ct>D.min-60&&ct<D.min+150});let z=b.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(z){let $=z[1].toLowerCase(),_=E.findIndex(T=>T.n&&$.startsWith(T.n.toLowerCase()));if(_>=0){let T=(Q[L]||[]).find(F=>{let V=F.pat.stops;return V[V.length-1]===_&&V.includes(g)&&V.includes(S)});if(T){let F=T.pat.stops;return F.indexOf(g)<F.indexOf(S)}}}return!0}let $n={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function z0(){let{lines:o,stations:u}=ja(),f=new Set(o),g=new Set(u.map(L=>Xt.get(L))),S=H.alerts.filter(L=>([...L.fams].some(D=>f.has(D))||[...L.stops||[]].some(D=>g.has(D)))&&mp(L));if(!$n.seen){try{$n.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{$n.seen=new Set}if(!$n.seen.size){S.forEach(L=>$n.seen.add(L.id+"|"+L.txt.length)),gp();return}}let b=S.filter(L=>!$n.seen.has(L.id+"|"+L.txt.length));if(b.length&&(b.forEach(L=>$n.seen.add(L.id+"|"+L.txt.length)),gp(),!(!$n.on||!("Notification"in window)||Notification.permission!=="granted")))for(let L of b.slice(0,3)){let D=(L.src==="Adif"?__t(276):"Rodalies")+(L.fams.size?" \xB7 "+[...L.fams].sort(U).slice(0,4).join(" "):""),P={body:L.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+L.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(z=>z?z.showNotification(D,P):new Notification(D,P)).catch(()=>{try{new Notification(D,P)}catch{}})}}function gp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...$n.seen].slice(-400)))}catch{}}async function $0(){if($n.on)$n.on=!1,ln(__t(411));else{if(!("Notification"in window)){ln(up&&!dp()?__t(412):__t(413));return}if(await Notification.requestPermission()!=="granted"){ln(__t(414));return}$n.on=!0,ln(__t(415)+ja().lines.join(", ")+__t(416))}try{localStorage.setItem("rod_ln",$n.on?"1":"")}catch{}Pe(!0)}async function V0(){if(!H.repOk)return $0();if(!Di.busy){Di.busy=!0;try{let o=await fp();if(!o){ln(up&&!dp()?__t(417):__t(418));return}if(await navigator.serviceWorker.ready,Di.on){let u=await o.pushManager.getSubscription();u&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:u.endpoint})}).catch(()=>{}),await u.unsubscribe().catch(()=>{})),Di.on=!1,ln(__t(411))}else{if(!H.url){ln(__t(419));return}if(await Notification.requestPermission()!=="granted"){ln(__t(414));return}let f=(await Ct(H.url.replace(/\/+$/,""),"/push/key")).key,g=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:k0(f)});await pp(g),Di.on=!0,ln(__t(420)+ja().lines.join(", "))}try{localStorage.setItem("rod_push",Di.on?"1":"")}catch{}}catch(o){ln(__t(421)+(o.message||o))}finally{Di.busy=!1,Pe(!0)}}}async function _p(){if(Di.on)try{let o=await fp(),u=o&&await o.pushManager.getSubscription();u&&await pp(u)}catch{}}let Ru=!1,xp="";function Iu(){let o=ht?"t"+(ht.tid||ht.vtid):Lt>=0?"s"+Lt:Kt?"a":G?"n":"";o!==xp&&(Ru=!1,xp=o);let u=innerWidth<=640&&!!o&&!Ru&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==u&&(f.classList.toggle("compact",u),requestAnimationFrame(()=>{if(d.style.display!=="none"){let g=f.getBoundingClientRect().bottom;d.style.top=Math.round(g+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-g-16)+"px"}}))}let vp=new Set,Pu=(()=>{let o=vt(new Date).ymd;try{let u=JSON.parse(localStorage.getItem("rod_pn")||"{}");return u.d===o?u:{d:o}}catch{return{d:o}}})();function yp(o,u,f){if(!(!($n.on||Di.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){ln(o+" \xB7 "+u);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(g=>g?g.showNotification(o,{body:u,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:u})).catch(()=>{try{new Notification(o,{body:u})}catch{}})}}function Sp(o,u){let f=o.x,g=ne();if(!g.live||f.gone||f.est<g.min-1)return;let S=f.num+"|"+Math.round(f.sm),b=Pu[S]||{},L=`${__t(422)} ${et(f.sm)}`,D=`${f.fam} \u2192 ${f.dest}`,P="",z="";f.cancel?b.c||(b.c=1,P=`\u26A0\uFE0F ${L} ${__t(148)}`,z=`${D}. ${__t(423)}`):o.ghost&&!b.g?(b.g=1,P=`\u26A0\uFE0F ${L} ${__t(424)}`,z=`${D}: ${__t(425)}`):f.dl>=5&&f.dl>=(b.dl||0)+5?(b.dl=Math.round(f.dl),P=`\u23F3 ${L} ${__t(426)} +${b.dl} min`,z=`${D}: ${__t(427)} ${u} ${__t(428)} ${et(f.est)}.`):f.plat&&b.p&&b.p!==String(f.plat)&&(P=`${__t(429)}: ${L}`,z=`${D}: ${__t(430)} ${f.plat} ${__t(431)} ${b.p}).`),f.plat&&(b.p=String(f.plat)),Pu[S]=b;try{localStorage.setItem("rod_pn",JSON.stringify(Pu))}catch{}P&&yp(P,z,"pin-"+f.num)}let Or={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let u=o.target.closest&&o.target.closest("[data-nowx]");if(!u||o.target.closest("a"))return;let f=u.dataset.nowx?u.dataset.nowx.split("|"):[];if(f.length){if(u.classList.contains("col"))Or.open=!0;else{Or.open=!1,f.forEach(g=>Or.seen.add(g));try{localStorage.setItem("rod_seen",JSON.stringify([...Or.seen].slice(-200)))}catch{}}Pe(!0)}});function H0(o){let u=o.lines;if(!u.length&&Dt.st&&Dt.st.length){let _=new Set;Dt.st.forEach(T=>{let F=Xt.get(T);F!=null&&E[F].fams.forEach(V=>_.add(V))}),u=[..._].sort(U)}let f=new Set(u),g=H.alerts.filter(_=>!f.size||[..._.fams].some(T=>f.has(T))),S=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,b=g.reduce((_,T)=>Math.max(_,Ja(T)),0),L=b===3?"\u26D4 ":b===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",D=`<div class="hnowh"><span class="hnowl"><b>${g.length?L+g.length+(g.length===1?__t(278):__t(279)):__t(432)}</b>${u.length?u.map(An).join(""):""}</span>${S}</div>`,P=g.filter(_=>!Or.seen.has(_.id)),z=g.length&&(Or.open||P.length>0),$=g.reduce((_,T)=>Math.max(_,Ja(T)),0);return`<div class="hnow${$===3?" bad":$===2?" warn":$===1?" info":""}${g.length&&!z?" col":""}" data-nowx="${m(g.map(_=>_.id).join("|"))}">${D}${bp(o,!0)}${z?g.slice().sort((_,T)=>Ja(T)-Ja(_)).map(_=>`<p class="sv${Ja(_)}">${Va(_)} ${m(_.txt)} <small>${Ha(_)}</small></p>`).join("")+`<small class="hnowt">${__t(433)}</small>`:""}</div>`}let Zn=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(u=>u[2]===o).map(u=>[u[0],u[1]])}catch{return[]}})());function Dl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],u=(g,S)=>{g.style.fontSize=S===1?"":(g._f0*S).toFixed(1)+"px",g.querySelectorAll("b").forEach(b=>b.style.fontSize=S===1?"":(g._b0*S).toFixed(1)+"px")},f=1;for(let g of o){if(g.style.whiteSpace="",u(g,1),!g.clientWidth)continue;g._f0=parseFloat(getComputedStyle(g).fontSize);let S=g.querySelector("b");for(g._b0=S?parseFloat(getComputedStyle(S).fontSize):0;g.scrollWidth>g.clientWidth+1&&f>.86;)f-=.02,u(g,f)}if(f<1)for(let g of o)g._f0&&u(g,f);for(let g of o)g.scrollWidth>g.clientWidth+1&&(g.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Dl()}catch{}});let G0=(o,u)=>{let f=o==="work"?Xe:o==="near"?Dt:Ke,g=f&&ai(f);return g==null?null:si(g).find(S=>String(S.num)===String(u))||null};function Rs(o,u){u?Zn.set(o,u):Zn.delete(o);try{let f=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...Zn].map(([g,S])=>[g,S,f])))}catch{}}let Mp=o=>{let u=o&&o.ts?Date.now()/1e3-o.ts:H.okVP?(Date.now()-H.okVP)/1e3:-1;return u>=0?" \xB7 "+os(iu(Math.round(u))):""};function Lu(o){let u=It.find(b=>b.tr&&String(b.tr.num)===String(o));if(!u){let b=Wa(o),L=ne(),D=t.days.indexOf(L.ymd);if(!b)return"";let P=b.day===D-1?1440:0,z=b.t0+b.pat.t[1]-P;return z>L.min?__t(434)+E[b.pat.stops[0]].n+" ("+et(z)+")":""}let f=u.tr,g=b=>E[f.pat.stops[b]].n;if(u.real){let b=u.v;return b.pre?__t(435):b.atStop>=0&&b.before?__t(436)+g(b.atStop):b.atStop>=0&&(b.st==="STOPPED_AT"||u.stop==="st")?ue()?__t(437)+g(b.atStop):__t(438)+g(b.atStop)+Mp(b):!ue()&&b.next>0?__t(439)+g(b.next-1)+__t(440)+g(b.next)+Mp(b):b.atStop>=0&&b.next>b.atStop?__t(441)+g(b.atStop)+__t(442)+g(b.next):b.atStop>=0?__t(443)+g(b.atStop):u.stop==="via"&&b.next>0?"\u23F8 "+__t(444)+g(b.next-1)+__t(440)+g(b.next):b.next>0?__t(185)+g(b.next-1)+__t(440)+g(b.next):b.next===0?__t(311)+g(0):""}let S=u.p&&u.p.next;return S>0?__t(445)+g(S-1)+__t(440)+g(S):""}let Ka={k:"",v:null};function W0(o){let u=ne(),f=t.days.indexOf(u.ymd);if(f<0||!o.length)return null;let g=Cu(),S=(g&&ai(g))??ai(Ke)??ai(Xe),b=u.ymd+o.join()+S;if(Ka.k===b)return Ka.v;Ka.k=b;let L=new Set(o),D=S!=null?_=>Q[_].filter(T=>{let F=T.pat.stops.indexOf(S);return F>=0&&F<T.pat.stops.length-1}).length:_=>Q[_].filter(T=>L.has(T.fam)).length,P=_=>{let T=new Date(+_.slice(0,4),+_.slice(4,6)-1,+_.slice(6)).getDay();return T===0?0:T===6?6:1},z=D(f),$=Math.max(0,...t.days.map((_,T)=>T!==f&&P(_)===P(u.ymd)?D(T):0));return Ka.v=$>=20&&z<$*.8?{n:z,ref:$,pct:Math.round(z/$*100),st:S!=null?E[S].n:""}:null,Ka.v}function bp(o,u){let f=o.lines||[],g=W0(f);if(!g)return"";let S=H.alerts.some(b=>[...b.fams].some(L=>f.includes(L))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((b.es||"")+" "+b.txt));return u?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${S?__t(446):__t(447)}</b>: ${g.st?`${__t(448)} ${m(g.st)} ${g.n} ${__t(449)} ${g.ref} ${__t(450)}`:`${__t(451)} ${g.n} ${__t(449)} ${g.ref} ${__t(450)}`} (${g.pct} %). ${S?__t(452):__t(453)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${S?__t(454):__t(455)}</b> \xB7 ${__t(456)}: ${g.st?`${__t(457)} ${m(g.st)} ${__t(458)} ${g.n} ${__t(198)} ${g.ref} ${__t(71)}`:`${g.n} ${__t(198)} ${g.ref} ${__t(459)} ${f.join(", ")}`} (${g.pct} % ${__t(460)}).</div>`}function X0(o){let u=Xa(o.lines||[]);if(!u.length)return"";let f=[Ke,Xe].some(g=>{let S=ai(g),b=S!=null&&C.get(E[S].id);return b&&b.d&&Array.isArray(b.d.trains)&&!b.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(461)} ${u.join(", ")}</b> ${__t(462)}${f?" \xB7 "+__t(463):""}: ${__t(464)}</div>`}function q0(o){if(!Dt.w)return[];let u=Dt.k||1;return It.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])*u<3).sort((f,g)=>Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])-Math.hypot(g.p.w[0]-Dt.w[0],g.p.w[1]-Dt.w[1])).slice(0,2).map(f=>f.tr)}function Y0(o){if(!Yt.tid)return"";let u=It.find(V=>V.tr&&String(V.tr.num)===Yt.tid)||js(o).out.find(V=>V.tr&&String(V.tr.num)===Yt.tid);if(!u)return"";let f=u.tr,g=f.pat.stops,S=u.real?u.v.next:u.p.next;if(S==null||S<0)return"";let b=tt(f),L=typeof b=="number"?Math.max(0,b/60):0,D=t.days.indexOf(o.ymd),P=f.day===D-1?1440:0,z=Ue&&Ue.num===Yt.tid?g.indexOf(Xt.get(Ue.sid)):-1;z<S&&(z=g.length-1);let $=Ya(f,u.real?u.v:null,z,f.t0+f.pat.t[2*z]+L-P),_=$-o.min,T=u.real&&u.v.atStop>=0?u.v.atStop:-1,F=Lu(f.num)||__t(311)+E[g[S]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${An(f.fam)} ${__t(297)}${m(f.num)}</b><small class="nofit cok">${m(F)} \xB7 <span class="nw">${__t(465)} ${m(E[g[z]].n)}</span> <span class="nw">${_>=1?__t(104)+er(_)+" \xB7 ":""}<b>${et($)}</b>${L>=1?` <em class="dl ${Ii(L)}">+${Math.round(L)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(466)}" title="${__t(466)}">\u2715</button>${(V=>V.length&&!(Yt.manual&&Date.now()<Yt.manual)?`<div class="onbch">${V.map(ct=>`<button type="button" class="onbalt" data-onbpick="${m(ct.num)}">${__t(467)} ${m(ct.num)}?</button>`).join("")}</div>`:"")(q0(f))}</div>`}let Nl={until:0};function Z0(o){if(o.hasAttribute("data-onbx")){ri.num===Yt.tid&&(ri.num=""),Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid="",Yt.manual=0,Yt.quiet=Date.now()+10*6e4,Rt=null,Pe(!0);return}Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid=o.dataset.onbpick,Yt.manual=Date.now()+90*6e4,[...Zn].forEach(([f,g])=>{String(g)!==Yt.tid&&Rs(f,null)}),ri.num=Yt.tid,ri.until=Date.now()+90*6e4;let u=It.find(f=>f.tr&&String(f.tr.num)===Yt.tid);if(u){Rt=u.tr;let f=u.tr.pat.stops,g=u.real?u.v.next:u.p.next,S=[...Ke.st,...Xe.st,...Pl.keys()],b=f.findIndex((L,D)=>D>=g&&S.includes(E[L].id));b>0&&(Ue={num:Yt.tid,sid:E[f[b]].id,at:Date.now()},Cs())}ln(`${__t(468)} ${Yt.tid}`),Pe(!0)}function Pe(o){let u=x("#home");if(!u)return;let f=performance.now();if(!o&&f-rp<4e3||!o&&Nl.until>Date.now())return;rp=f;let g=ne(),S=[],b=ja(),L=_=>{let T=ai(_);return T==null||!Dt.w?1:Math.hypot(E[T].w[0]-Dt.w[0],E[T].w[1]-Dt.w[1])},D=[Dt,...[Ke,Xe].sort((_,T)=>L(_)-L(T))],P=(document.documentElement.classList.contains("tabmode")?H0(b):bp(b))+X0(b)+Y0(g)+D.map(_=>B0(_,g,S)).join("")+(Za.some(_=>_.open)&&b.lines.length,"");u.className=Za.some(_=>_.open)?"open":"";let z=x("#bell");z||(z=document.createElement("button"),z.type="button",z.id="bell",z.onclick=V0,x("#inf .more").prepend(z));{let _=H.repOk?Di.on:$n.on;z.hidden=!b.lines.length,z.className=_?"on":"",z.textContent=(_?__t(476):__t(477))+b.lines.join(", "),z.title=(_?__t(478):__t(479))+__t(67)+b.lines.join(", ")+(H.repOk?"":__t(480))}if(u._h===P)return;u._h=P,u.innerHTML=P,Dl(),u._onbDel||(u._onbDel=1,u.addEventListener("pointerdown",()=>{Nl.until=Date.now()+1500},!0),u.addEventListener("pointerup",()=>{Nl.until=Date.now()+400},!0),u.addEventListener("click",_=>{let T=_.target.closest&&_.target.closest("[data-onbx],[data-onbpick]");T&&(_.stopPropagation(),Nl.until=0,Z0(T))},!0));{let _=u.querySelector("[data-onbgo]");_&&(_.onclick=T=>{if(T.target.closest("[data-onbx]")){Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid="",Yt.manual=0,Rt=null,Pe(!0);return}let F=T.target.closest("[data-onbpick]");if(F){Yt.no.set(Yt.tid,Date.now()+20*6e4),Yt.tid=F.dataset.onbpick,Yt.manual=Date.now()+90*6e4;let ct=It.find(Mt=>Mt.tr&&String(Mt.tr.num)===Yt.tid);if(ct){Rt=ct.tr,ht=ct.tr;let Mt=ct.tr.pat.stops,dt=ct.real?ct.v.next:ct.p.next,yt=[...Ke.st,...Xe.st],it=Mt.findIndex((ce,xe)=>xe>=dt&&yt.includes(E[ce].id));it>0&&(Ue={num:Yt.tid,sid:E[Mt[it]].id,at:Date.now()},Cs()),d._h="",Fe()}Pe(!0);return}let V=It.find(ct=>ct.tr&&String(ct.tr.num)===Yt.tid);V&&(G=Kt=nt=!1,Lt=-1,ht=V.tr,d._h="",Fe())})}{let _=[...u.children].find(T=>T.classList.contains("hplace")&&!T.querySelector(".hnew"));_&&_.classList.add("lead")}let $=_=>_==="work"?Xe:_==="near"?Dt:Ke;u.querySelectorAll("[data-hloc]").forEach(_=>_.onclick=()=>{Dt.err="",Tu(!0)}),u.querySelectorAll("[data-ht]").forEach(_=>_.onclick=()=>{if(x("#inf").classList.contains("compact")){Ru=!0,Iu();return}let T=$(_.dataset.ht);T.open=!T.open,Ei(T),Pe(!0),(ht||Lt>=0||Kt||G)&&(d._h="",Fe())}),u.querySelectorAll("[data-hxf]").forEach(_=>_.onclick=T=>{T.stopPropagation();let[F,V]=_.dataset.hxf.split(":"),ct=$(F);ct.xfer=V||null,Ei(ct),Pe(!0)}),u.querySelectorAll("[data-hs]").forEach(_=>_.onclick=()=>{let[T,F]=_.dataset.hs.split(":"),V=$(T);V.i=+F,Ei(V),Pe(!0)}),u.querySelectorAll("[data-hw]").forEach(_=>_.onclick=()=>{let[T,F]=_.dataset.hw.split(":"),V=$(T);V.walk=y(V.walk+ +F,0,60),Ei(V),Pe(!0)}),u.querySelectorAll("[data-hmap]").forEach(_=>_.onclick=()=>{let T=+_.dataset.hmap;G=Kt=nt=!1,ht=null,Lt=T,Ee(),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Fe(),a()}),u.querySelectorAll("[data-hset]").forEach(_=>_.onclick=()=>wp(_.dataset.hset)),u.querySelectorAll("[data-hnear]").forEach(_=>_.onclick=()=>{let T=Xt.get(Dt.st[0]);T!=null&&Du(T,_.dataset.hnear)}),u.querySelectorAll("[data-hmore]").forEach(_=>_.onclick=()=>{let T=$(_.dataset.hmore);T.more=!T.more,Pe(!0)}),u.querySelectorAll("[data-hhide]").forEach(_=>_.onclick=T=>{T.stopPropagation();let[F,V]=_.dataset.hhide.split(":"),ct=$(F);ct.hide=V,Ei(ct),Pe(!0)}),u.querySelectorAll("[data-hshow]").forEach(_=>_.onclick=()=>{let T=$(_.dataset.hshow);T.hide="",Ei(T),Pe(!0)}),u.querySelectorAll("[data-hgo]").forEach(_=>_.onclick=T=>{T.stopPropagation();let[F,V]=_.dataset.hgo.split(":"),ct=$(F);ct.goAt=V==="1"?Date.now():0,ct.goAt&&(ct.platAt=0),Ei(ct),Pe(!0)}),u.querySelectorAll("[data-hplat]").forEach(_=>_.onclick=T=>{T.stopPropagation();let[F,V]=_.dataset.hplat.split(":"),ct=$(F);ct.platAt=V==="1"?Date.now():0,ct.platAt&&(ct.goAt=0),Ei(ct),Pe(!0)}),u.querySelectorAll("[data-hnotst]").forEach(_=>_.onclick=T=>{T.stopPropagation(),Dt.homeW=Dt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Dt.w))}catch{}Pe(!0)}),u.querySelectorAll("[data-hdel]").forEach(_=>_.onclick=()=>{Xe.st=[],Xe.open=!1,Ei(Xe),Pe(!0),_p()}),u.querySelectorAll("[data-dk]").forEach(_=>_.onclick=()=>{let T=S[+_.dataset.dk];if(_.matches("li.hr, .hv")&&!T.gone&&T.num!=null){let F=_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(F){let V=Zn.get(F)===String(T.num);Rs(F,V?null:String(T.num)),V&&ri.num===String(T.num)&&(ri.num=""),V?ht&&String(ht.num)===String(T.num)&&(ht=null,Rt=null,qe.sk="",d._h="",Fe()):Ul(T,!0),Pe(!0);return}}Ul(T)}),u.querySelectorAll("[data-pinnext]").forEach(_=>_.onclick=T=>{if(T.target.closest("[data-unpin]"))return;let[F,V]=_.dataset.pinnext.split(":");Rs(F,V);let ct=G0(F,V);ct&&Ul(ct,!0),Pe(!0)}),u.querySelectorAll("[data-unpin]").forEach(_=>_.onclick=T=>{T.stopPropagation(),Rs(_.dataset.unpin,null),Pe(!0)}),u.querySelectorAll("[data-hal]").forEach(_=>_.onclick=()=>x("#alr").click()),jf(u)}function Ul(o,u){if(!o)return;let f=t.days.indexOf(ne().ymd),g=It.find(L=>L.real?o.tid&&L.v.tid===o.tid||o.num&&String(L.tr?L.tr.num:L.v.num)===String(o.num):o.tr&&L.tr===o.tr||o.num&&L.tr&&String(L.tr.num)===String(o.num)),S=o.tr||g&&g.tr||(Q[f]||[]).find(L=>String(L.num)===String(o.num));if(G=Kt=nt=!1,Lt=-1,u||void 0,ht=g?g.tr||{vtid:g.v.tid}:S||null,!ht)return;u&&(qe.sk="t"+(ht.num||ht.vtid)),Rt=g&&g.tr?g.tr:null,Rt&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let b=g?g.p.w:null;b&&Object.assign(s,{tx:b[0],ty:b[1],dist:Math.min(s.dist,22)}),Ee(),d._h="",Fe(),Wt=0,a()}let Br=!1;function wp(o){Br=o||!1,v.value="",v.placeholder=o==="work"?__t(481):o==="home"?__t(482):__t(483),document.documentElement.classList.add("srch"),p.style.display="none",v.focus()}let Ep=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>wp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Ep(),Br&&!v.value.trim()&&(Br=!1,v.placeholder=__t(483))},600));function Xb(){}function Du(o,u){let f=u==="work"?Xe:Ke,g=E[o].id,S=E.filter(b=>b.fams.size&&b!==E[o]&&Math.hypot(b.w[0]-E[o].w[0],b.w[1]-E[o].w[1])<.6).map(b=>b.id);f.st=[g,...S].slice(0,3),f.i=0,f.open=!0,Ei(f),Pe(!0),_p()}let Fl=x("#lines");Fl.innerHTML=`${__t(484)}`+W.map(o=>`<button type="button" style="--c:${Y[o]}" data-f="${o}">${o}</button>`).join("");function Tp(){try{Pe(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",Fl.after(o),o.onclick=()=>{st=[...K][0],nt=G=Kt=!1,d._h="",Fe()});let u=K.size===1?[...K][0]:"";o.hidden=!u,u&&(o.innerHTML=`${__t(485)}${m(u)}${__t(486)}`)}Fl.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!K.has(o.dataset.f))})}Fl.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let u=o.dataset.f;u==="*"?W.forEach(f=>K.add(f)):K.size===W.length?(K.clear(),K.add(u)):K.has(u)?(K.delete(u),K.size||W.forEach(f=>K.add(f))):K.add(u);try{localStorage.setItem("rod_lines",JSON.stringify([...K]))}catch{}Tp(),Me(),Ee(),wu(),Wt=0,a()});let Nu=[...document.querySelectorAll("[data-sp]")],Ti=0;function Ap(o){let u=ne();o&&(Pt===o||Ti===o)?Pt?(Zt=u.min,oe=u.min,Pt=0,Ti=o):(me=performance.now(),Pt=o,Ti=0):o===0?(Pt=0,oe=null,Ti=0):(Zt=u.min,me=performance.now(),oe=u.min,Pt=o,Ti=0),Nu.forEach(f=>{let g=+f.dataset.sp;f.classList.toggle("on",g===(Pt||Ti)||!Pt&&!Ti&&oe==null&&g===0),f.classList.toggle("pz",!!Ti&&g===Ti),f.textContent=g===0?__t(487):Ti===g?"\u25B6 \xD7"+g:Pt===g?"\u23F8 \xD7"+g:"\xD7"+g}),Wt=0,a()}Nu.forEach(o=>o.onclick=()=>Ap(+o.dataset.sp)),x("#tsl").oninput=o=>{let u=+o.target.value;Zt=u,oe=u,me=performance.now(),Pt===0&&!Ti&&Nu.forEach(f=>f.classList.remove("on")),Wt=0,a()},setInterval(()=>{oe!=null&&Pt&&Zt+(performance.now()-me)/6e4*Pt>1560&&(Zt=240,me=performance.now())},1e3),window.__rodSearch=o=>{let u=M(o.trim());if(!u){p.style.display="none",p._pick=null;return}let f=[],g=[];E.forEach((D,P)=>{if(!D.fams.size)return;let z=M(D.n);z.startsWith(u)||z.includes(" "+u)||z.includes("-"+u)?f.push(P):z.includes(u)&&g.push(P)});let S=f.concat(g).slice(0,7),b=I.filter(D=>M(D.name).startsWith(u)).sort((D,P)=>P.pop-D.pop).slice(0,3),L=S.map(D=>({h:`\u{1F689} ${m(E[D].n)}<em>${[...E[D].fams].sort(U).slice(0,3).map(P=>`<em class="ls" style="background:${Y[P]}">${P}</em>`).join(" ")}</em>`,go:()=>{if(Ep(),Br){let P=Br;Br=!1,v.placeholder=__t(483),Du(D,P);return}qe.on&&qe.cur!=="map"&&$r("map"),G=!1,Kt=!1,nt=!1,Lt=D,ht=null,Rt=null,Ee(),Object.assign(s,{tx:E[D].w[0],ty:E[D].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Fe(),a()}})).concat(b.map(D=>({h:`${m(D.name)}${__t(488)}`,go:()=>{Object.assign(s,{tx:D.cx,ty:D.cy,dist:y(D.size*3+14,14,60)}),a()}})));p.innerHTML=L.map((D,P)=>`<li data-i="${P}">${D.h}</li>`).join("")||__t(489),p.style.display="block",p._pick=D=>{L[D]&&(L[D].go(),p.style.display="none",v.value="",v.blur())},p.querySelectorAll("li[data-i]").forEach(D=>D.onclick=()=>p._pick(+D.dataset.i))},Tp(),Ee();try{let o=new URLSearchParams(location.search).get("st");if(o){let u=M(o),f=-1,g=0;E.forEach((S,b)=>{if(!S.fams.size)return;let L=M(S.n),D=L===u?3:L.startsWith(u)||u.startsWith(L)?2:L.includes(u)||u.includes(L)?1:0;D>g&&(g=D,f=b)}),f>=0&&setTimeout(()=>{Lt=f,Ee(),Object.assign(s,{tx:E[f].w[0],ty:E[f].w[1],dist:18,tilt:.5}),Fe(),a()},300)}}catch{}let Uu={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Uu.v=!Uu.v,Pe(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&ht&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let u=d.querySelector(".mn");u&&(u.textContent="\u25BE"),d.scrollTop=0},!0);{let o=0,u=0,f=0,g=0;d.addEventListener("touchstart",S=>{g=innerWidth<=640&&ht&&S.touches.length===1&&!S.target.closest("input")?1:0,g&&(o=S.touches[0].clientX,u=S.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",S=>{if(!g)return;let b=S.touches[0].clientX-o,L=S.touches[0].clientY-u;g===1&&(Math.abs(b)<12&&Math.abs(L)<12||(g=Math.abs(b)>Math.abs(L)*1.3&&b<0?2:0,!g))||(S.preventDefault(),f=Math.min(0,b),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(g!==2){g=0;return}if(g=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let S=ht,b=[...Zn],L=Il(S);if(L){let P=d.querySelector("[data-follow]");P&&P.click()}let D=d.querySelector("[data-cx]");D&&D.click(),d.style.transition="",d.style.transform="",d.style.opacity="",L&&S&&ln(`${__t(490)} \xB7 ${S.fam||""} ${S.num}`,{label:__t(491),fn:()=>{b.forEach(([P,z])=>Rs(P,z)),Pe(!0)}})},180)}),d.addEventListener("touchcancel",()=>{g===2&&(d.style.transform="",d.style.opacity=""),g=0})}let qe={on:!1,cur:"now",home:new Map},Ol=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Cn=document.createElement("nav");Cn.id="tabs";let J0=[["now","\u{1F552}",__t(487)],["map","\u{1F5FA}\uFE0F",__t(492)],["line","\u{1F4CA}",__t(493)],["set","\u2699\uFE0F",__t(494)]];Cn.innerHTML=J0.map(([o,u,f])=>`<button type="button" data-tab="${o}"><span>${u}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Cn);let ir=document.createElement("i");ir.className="tind",ir.setAttribute("aria-hidden","true"),Cn.prepend(ir);let Cp=o=>[...Cn.querySelectorAll("[data-tab]")].find(u=>{let f=u.getBoundingClientRect();return o>=f.left&&o<f.right}),Fu=o=>{!o||!o.offsetWidth||(ir.style.width=o.offsetWidth+"px",ir.style.height=o.offsetHeight+"px",ir.style.top=o.offsetTop+"px",ir.style.transform=`translateX(${o.offsetLeft}px)`)},kr=()=>Fu(Cn.querySelector("[data-tab].on")),j0=()=>{try{let o=window.Capacitor,u=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;u&&u.selectionChanged().catch(()=>{})}catch{}},Jn={on:!1,b:null,moved:!1,until:0};Cn.addEventListener("pointerdown",o=>{let u=Cp(o.clientX);if(u){Jn.on=!0,Jn.b=u,Jn.moved=!1,Cn.classList.add("drag"),Cn.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),u.classList.add("hov"),Fu(u);try{Cn.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,g=f&&f.Plugins&&f.Plugins.Haptics;g&&f.isNativePlatform()&&g.selectionStart().catch(()=>{})}catch{}}}),Cn.addEventListener("pointermove",o=>{if(!Jn.on)return;let u=Cp(o.clientX);u&&u!==Jn.b&&(Jn.b.classList.remove("hov"),u.classList.add("hov"),Jn.b=u,Jn.moved=!0,Fu(u),j0())});let Rp=o=>{if(Jn.on){Jn.on=!1,Cn.classList.remove("drag"),Cn.querySelectorAll(".hov").forEach(u=>u.classList.remove("hov"));try{let u=window.Capacitor,f=u&&u.Plugins&&u.Plugins.Haptics;f&&u.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&Jn.b?(Jn.until=Date.now()+500,Jn.b.dataset.tab!==qe.cur?$r(Jn.b.dataset.tab):kr()):kr()}};Cn.addEventListener("pointerup",()=>Rp(!0)),Cn.addEventListener("pointercancel",()=>Rp(!1)),addEventListener("resize",()=>setTimeout(kr,60));try{new ResizeObserver(()=>kr()).observe(Cn)}catch{}let zr=document.createElement("div");zr.id="tabL",document.body.appendChild(zr);let sr=document.createElement("div");sr.id="tabA",sr.className="box",document.body.appendChild(sr);let Ou=(o,u)=>{o&&(qe.home.has(o)||qe.home.set(o,[o.parentNode,o.nextSibling]),u.appendChild(o))},Ip=()=>{for(let[o,[u,f]]of qe.home)try{u.insertBefore(o,f&&f.parentNode===u?f:null)}catch{}qe.home.clear()};function Bu(){let o=K.size===1?[...K][0]:"",u=H.alerts.filter(g=>[...g.fams].some(S=>K.has(S))).length,f=[nt,Kt,st,G,o,u].join("|");zr._k!==f&&(zr._k=f,zr.innerHTML=`<button type="button" data-tl="stats" class="${nt?"on":""}">\u{1F4CA} ${__t(495)}</button><button type="button" data-tl="alr" class="${Kt?"on":""}">\u26A0\uFE0F ${u}${u===1?__t(278):__t(279)}</button>${o?`<button type="button" data-tl="line" class="${st?"on":""}">\u{1F4CB} ${m(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,zr.querySelectorAll("[data-tl]").forEach(g=>g.onclick=()=>{let S=g.dataset.tl;nt=S==="stats",Kt=S==="alr",st=S==="line"?o:"",G=!1,ht=null,Lt=-1,nt&&(se.at=0),d._h="",Fe(),Bu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let K0="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",Q0=()=>vt(new Date).ymd.replace(/-/g,"");function Qa(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(K0,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let u;try{u=JSON.parse(o)}catch{return}if(!u||!u.gen||!Array.isArray(u.days)||!u.trips||u.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=Q0(),g=t.days.indexOf(f),S=u.days.indexOf(f),b=g<0?0:lt.filter(P=>P.day===g).length,L=0;if(S>=0)for(let P of u.trips)P[0]===S&&L++;let D=S>=0&&b&&(Math.abs(L-b)/b>.1||!L);if(g<0||g>=t.days.length-2||D){try{sessionStorage.setItem("rod_packmsg",D?"1":"")}catch{}location.reload();return}to.v=!0}).catch(()=>{})}let to={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&to.v?(to.v=!1,to.reload=!0):!document.hidden&&to.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>ln("\u{1F5D3}\uFE0F "+__t(496)),1500))}catch{}if(setTimeout(Qa,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(Qa.at||0)>6*36e5&&(Qa.at=Date.now(),Qa())}),Qa.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,u=x("#ver");u&&u.firstChild&&u.firstChild.nodeType===3&&(u.firstChild.textContent=u.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Bl(){Ip();let o=window.__L||"es",u=ii.mode;sr.innerHTML=`<h3>${__t(494)}</h3>
      <h4>\u{1F310} ${__t(497)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,g])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${g}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(498)}</h4><div class="seg2">${[["auto",__t(299)],["light",__t(499)],["dark",__t(500)]].map(([f,g])=>`<button type="button" data-th="${f}" class="${u===f?"on":""}">${g}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(501)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let g=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(299)],["0","Normal"],["1",__t(502)]].map(([S,b])=>`<button type="button" data-big="${S}" class="${g===S?"on":""}">${b}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(503)}</small>`})()}
      <h4>\u{1F514} ${__t(504)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(505)}</small>${Ll().length?"":`<small class="tabAhint">${__t(506)}</small>`}${(()=>{let f=Ll();return f.length>1?`<small class="tabAhint">${__t(507)}</small><div class="alch">${f.map(g=>`<button type="button" data-al="${m(g)}" class="ln${nr.has(g)?" off":""}" style="--c:${Y[g]}">${m(g)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(508)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(509)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,sr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let g=f.dataset.al,S=Ll();nr.has(g)?nr.delete(g):S.filter(b=>!nr.has(b)).length>1&&nr.add(g);try{localStorage.setItem("rod_aloff",JSON.stringify([...nr]))}catch{}Pe(!0),Bl()}),sr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let g=f.dataset.big;try{g==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",g)}catch{}window.__txt&&window.__txt(),Bl(),Pe(!0)}),sr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ii.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ii.mode)}catch{}Sl(),Bl()}),Ou(x("#bell"),x("#tabAbell")),Ou(x("#src"),x("#tabArt")),Ou(x("#ver"),x("#tabAinf"))}function $r(o){if(!qe.on)return;let u=qe.cur;if(qe.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",Cn.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),kr(),o==="line")(ht||Lt>=0)&&(qe.keep={t:ht,s:Lt,sk:qe.sk}),!nt&&!Kt&&!st&&!G&&(nt=!0,se.at=0),ht=null,Lt=-1,d._h="",Fe(),Bu();else if(u==="line"){nt=Kt=G=!1,st="";let f=qe.keep;qe.keep=null,f&&o==="map"&&!ht&&Lt<0&&(ht=f.t,Lt=f.s,qe.sk=f.sk),d._h="",Fe()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Mu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Bl(),o==="now"&&(Pe(!0),requestAnimationFrame(Dl)),Wt=0,a()}Cn.onclick=o=>{if(Date.now()<Jn.until)return;let u=o.target.closest("[data-tab]");u&&$r(u.dataset.tab)},window.__rodTabSync=()=>{if(!qe.on)return;let o=ht?"t"+(ht.num||ht.vtid):Lt>=0?"s"+Lt:"",u=o!==qe.sk;qe.sk=o,o&&u&&qe.cur!=="map"?$r("map"):(Kt||st||G)&&qe.cur!=="line"&&qe.cur!=="map"&&$r("line"),qe.cur==="line"&&Bu()};function ku(){let o=Ol.matches||document.documentElement.classList.contains("cap");if(o!==qe.on)if(qe.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(kr)),o||(window.__mapHidden=!1),o){let u="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(u=f))}catch{}$r(u)}else delete document.documentElement.dataset.tab,Ip()}Ol.addEventListener?Ol.addEventListener("change",ku):Ol.addListener(ku),ku();{let o=x("#rc"),u=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(u).observe(o),u()}let zu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},$u=new RegExp("("+Object.keys(zu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),t_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${zu[o]||zu[o+"\uFE0F"]||""}</svg></span>`;function e_(o){let u=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],g;for(;g=u.nextNode();)g.parentElement&&g.parentElement.closest(".ico,script,style,textarea,input")||($u.lastIndex=0,$u.test(g.nodeValue)&&f.push(g));for(let S of f){let b=document.createElement("span");b.innerHTML=m(S.nodeValue).replace($u,(L,D)=>t_(D)),S.replaceWith(...b.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(S=>x(S)).filter(Boolean),u=!1,f=()=>{if(!u){u=!0;try{let S=0;o().forEach(b=>{S+=e_(b)}),S&&qe.on&&Dl()}finally{u=!1}}},g=new MutationObserver(()=>{u||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(S=>g.observe(S,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:Zn,LASTPIN:ri,pinNotify:Sp,toast:ln,cardEta:Ya,HOME:Ke,WORK:Xe,ONB:Yt,alertForMe:mp,whereAmI:Cu,departuresFor:si,DEPS:C,tripByNum:Wa,delayOf:tt,TID:ut,SID:Xt,byDay:Q,get days(){return t.days},get hist(){return se},get past(){return N.cur},get cols(){return un.mesh?un.mesh.count:-1},get dist(){return r.dist},get follow(){return Rt},get selTrip(){return ht},ST:E,TR:lt,FAM:W,act:()=>It,setSpeed:Ap,RT:H,pollRT:de,nowState:ne,posAt:As,activeTrips:js,LL:bt,select:o=>{ht=o,Fe()}}}var La=window.__DATA__;var Oe=i=>document.querySelector(i),ws=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Xn=(i,t,e)=>Math.min(e,Math.max(t,i)),wf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ei=Oe("#c"),ml=new jh({canvas:ei,antialias:!0});ml.setPixelRatio(Math.min(devicePixelRatio||1,2));var Es=new Mo;Es.background=new _e(15659509);var fu=35,hs=new Gn(fu,1,2,1500);Es.add(new Wo(16777215,9080992,1));var Zg=new qo(16777215,.9);Zg.position.set(-40,-70,90);Es.add(Zg);var ls=100/La.w,dl=La.w/2,fl=La.h/2,_n=[],Ef=new zi;Es.add(Ef);var lu=new mr({color:16777215,transparent:!0,opacity:.55});for(let i of La.m){let t=new zi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let y of i.g){let M=y.map(x=>{let m=[];for(let B=0;B<x.length;B+=2)m.push(new $t((x[B]-dl)*ls,(x[B+1]-fl)*ls));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(x=>x.length>=3);if(!M.length)continue;let I=new xa(M[0]);for(let x=1;x<M.length;x++)I.holes.push(new _r(M[x]));e.push(I);for(let x of M[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of M)n.push(new Co(new yn().setFromPoints(x.map(m=>new Z(m.x,m.y,0))),lu))}if(!e.length)continue;let c;try{c=new ko(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new Vo({color:13421772}),d=new Dn(c,h);t.add(d);let v=new zi;n.forEach(y=>v.add(y)),v.position.z=.04,Ef.add(v),t.scale.z=.01,Ef.add(t);let p={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=p,_n.push(p)}var _T=_n.map(i=>i.mesh),Vg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Jg=0,jg=0;for(let i of _n){for(let t of i.rings)Jg+=Vg(t[0])-t.slice(1).reduce((e,n)=>e+Vg(n),0);jg+=i.area}var Rb=Math.sqrt(jg/Jg),ru={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Kg={"08":__t(510),17:__t(511),25:__t(512),43:__t(513)},Lf="sqrt",Df="pop",Mf=0,Tf=0,Ra=1,hl=1,Ib={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Af=i=>Df==="pop"?i.pop:i.pop/i.area,su=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new _e(i));function Pb(i){i=Xn(i,0,1)*(su.length-1);let t=Math.min(Math.floor(i),su.length-2);return su[t].clone().lerp(su[t+1],i-t)}var Ia=i=>i>=100?ws(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Lb(){Tf=0;for(let i of _n)Tf+=i.pop;[..._n].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[..._n].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),e0()}var Qg=new _e("#d3d8e2"),t0=new _e("#eceff3");window.__mapTheme=i=>{Es.background=new _e(i?856345:15659509),t0.set(i?"#2b3242":"#eceff3"),Qg.set(i?"#1a1f29":"#d3d8e2"),lu.color.set(i?856345:16777215),lu.opacity=i?.7:.55,Nf.color.set(i?329483:2764864),Uf.color.set(i?9081766:16777215);for(let t of _n)t.base&&pu(t);Un()};function pu(i){i.mat.color.copy(i.base).lerp(t0,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Qg,.8)}function e0(){Ra=1,hl=1e12;for(let e of _n){let n=Af(e);Ra=Math.max(Ra,n),hl=Math.min(hl,n)}let i=Math.log10(Math.max(hl,.01)),t=Math.log10(Ra);for(let e of _n)e.base=Pb((Math.log10(Math.max(Af(e),.01))-i)/(t-i)),pu(e);Oe("#lmin").textContent=Ia(hl),Oe("#lmax").textContent=Ia(Ra),Oe("#lname").textContent=Df==="pop"?__t(514):__t(515),mu()}function mu(){let i=Ib[Lf],t=i(Ra),e=24*Mf;for(let n of _n)n.zt=Mf<=.001?.01:Math.max(.12*Math.min(1,Mf),e*i(Af(n))/t)*(n.inF?1:.1);Un()}var Hg=Object.fromEntries(_n.map(i=>[i.code,i])),au=[],n0=[];for(let i of La.bd){let t=Hg[i.a],e=Hg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)n0.push((i.p[n]-dl)*ls,(i.p[n+1]-fl)*ls,0,(i.p[n+2]-dl)*ls,(i.p[n+3]-fl)*ls,0),au.push(t,e)}var cu=new Wi;cu.setPositions(n0);var Nf=new is({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Uf=new is({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Nf,Uf].forEach((i,t)=>{let e=new wr(cu,i);e.frustumCulled=!1,e.renderOrder=10+t,Es.add(e)});function Db(){let i=cu.attributes.instanceStart.data.array;for(let t=0;t<au.length;t+=2){let e=Math.max(au[t].z,au[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}cu.attributes.instanceStart.data.needsUpdate=!0}var hu={};for(let i of Object.keys(ru)){let t=_n.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,c=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),c=Math.max(c,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=ru[i],h.title=__t(516)+Kg[i],h.onclick=()=>Gb("pr:"+i),document.body.appendChild(h),hu[i]={el:h,p:new Z(n/e,s/e,0),cx:(r+a)/2,cy:(l+c)/2,ext:Math.max(a-r,c-l),ext2:[a-r,c-l],area:e,name:ru[i]}}var bf=new Z;function Nb(){for(let i in hu){let t=hu[i];bf.copy(t.p).project(hs),t.el.style.transform=`translate(-50%,-50%) translate(${(bf.x*.5+.5)*innerWidth}px,${(-bf.y*.5+.5)*innerHeight}px)`}}var Mn={tilt:0,yaw:0,dist:150,tx:0,ty:0},be={...Mn};function Ub(){let i=innerWidth/innerHeight,t=Math.tan(fu*Math.PI/360);return Math.max(La.h*ls*1.1,100*1.1/i)/(2*t)}var Fb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{be.yaw=Math.round(be.yaw/(2*Math.PI))*2*Math.PI,be.tilt=0,Un()});function Ff(){Object.assign(be,{tilt:0,yaw:0,dist:Ub(),tx:0,ty:0}),Un()}function Ob(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Mn;hs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),hs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),hs.lookAt(n,s,0)}var ul=!0,Gg=performance.now(),pl=new Map;function Un(){ul=!0}function i0(i){requestAnimationFrame(i0);let t=Xn((i-Gg)/1e3,0,.05);Gg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Mn)){let r=be[s]-Mn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Mn[s]+=r*e,n=!0):Mn[s]=be[s]}for(let s of _n){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of pl){let a=(i-r)/1800;a>=1?(pl.delete(s),Rr(s)):Rr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(ul=!0),window.__mapHidden){ul=!0;return}if(n||ul){Fb.style.transform=`rotate(${Mn.yaw}rad) scaleY(${(.55+.45*Math.cos(Mn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(be.yaw/2))<.02&&be.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(517):__t(518))}Ob(),Db(),Nb(),window.__rodFrame&&window.__rodFrame(),ml.render(Es,hs),ul=n,Oe("#tilt").value=Math.round(be.tilt*180/Math.PI),Oe("#yaw").value=Math.round(((be.yaw*180/Math.PI+180)%360+360)%360-180)}}function s0(){ml.setSize(innerWidth,innerHeight,!1),hs.aspect=innerWidth/innerHeight,hs.updateProjectionMatrix(),Nf.resolution.set(innerWidth,innerHeight),Uf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Un()}addEventListener("resize",()=>{s0(),on.length&&qs()});ei.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;be.yaw+=n*.0035}else i.ctrlKey?be.dist=Xn(be.dist*Math.exp(e*.01),6,400):be.tilt=Xn(be.tilt+e*.002,0,1.32);Un()},{passive:!1});ei.addEventListener("contextmenu",i=>i.preventDefault());var cs=new Map,ui=null,Tr=0,Cf=0,Rf=0;var uu=null;ei.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),on.length&&setTimeout(qs,50)),ei.setPointerCapture(i.pointerId),cs.set(i.pointerId,{x:i.clientX,y:i.clientY}),cs.size===1&&(ui={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),cs.size===2){let[t,e]=[...cs.values()];Tr=Math.hypot(t.x-e.x,t.y-e.y),Cf=Math.atan2(e.y-t.y,e.x-t.x),Rf=(t.y+e.y)/2,uu={mode:null,rot:0,sc:0,tl:0},ui&&(ui.multi=!0)}Of()});ei.addEventListener("pointermove",i=>{let t=cs.get(i.pointerId);if(!t){bs={x:i.clientX,y:i.clientY},If||(If=requestAnimationFrame(kb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,cs.size===2){let[s,r]=[...cs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=l-Cf;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=Tr?a-Tr:0,v=c-Rf,p=uu||(uu={mode:null,rot:0,sc:0,tl:0});p.rot+=h,p.sc+=d,p.tl+=v,p.mode?p.mode==="zoom"&&Math.abs(p.rot)>.45&&(p.mode="rotate"):Math.abs(p.rot)>.3?p.mode="rotate":Math.abs(p.tl)>30&&Math.abs(p.sc)<18?p.mode="tilt":Math.abs(p.sc)>12&&(p.mode="zoom"),(p.mode==="zoom"||p.mode==="rotate")&&Tr&&(be.dist=Xn(be.dist*Tr/a,6,400)),p.mode==="rotate"&&(be.yaw+=h,Mn.yaw=be.yaw),p.mode==="tilt"&&(be.tilt=Xn(be.tilt-v*.006,0,1.32),Mn.tilt=be.tilt),Tr=a,Cf=l,Rf=c,Un();return}if(ui.moved+=Math.abs(e)+Math.abs(n),ui.rot||i.altKey)be.yaw+=e*.005,be.tilt=Xn(be.tilt+n*.004,0,1.32),Mn.yaw=be.yaw,Mn.tilt=be.tilt;else{let s=2*Mn.dist*Math.tan(fu*Math.PI/360)/innerHeight,r=Math.sin(Mn.yaw),a=Math.cos(Mn.yaw),l=1/Math.max(Math.cos(Mn.tilt),.3);be.tx=Xn(be.tx-a*e*s+-r*n*s*l,-70,70),be.ty=Xn(be.ty-r*e*s+a*n*s*l,-70,70),Mn.tx=be.tx,Mn.ty=be.ty}Un()});var r0=i=>{let t=ui&&!ui.rot&&!ui.multi&&ui.moved<(ui.touch?12:6)&&i.type==="pointerup"&&cs.size===1,e=ui&&ui.touch;cs.delete(i.pointerId),Tr=0,uu=null,cs.size||(ui=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ei.addEventListener("pointerup",r0);ei.addEventListener("pointercancel",r0);ei.addEventListener("dblclick",Ff);addEventListener("keydown",i=>{i.key==="Alt"&&(ei.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ei.style.cursor="")});addEventListener("blur",()=>{ei.style.cursor=""});var Bb=new Zo,Wg=new $t,bs=null,If=0,Ar=null;function kb(){if(If=0,!bs||ui)return;Wg.set(bs.x/innerWidth*2-1,-(bs.y/innerHeight)*2+1),Bb.setFromCamera(Wg,hs);let i=null;if(i!==Ar){let e=Ar;Ar=i,e&&Rr(e),i&&Rr(i),Un()}let t=window.__rodHover&&window.__rodHover(bs.x,bs.y);if(t){Er.innerHTML=t,Er.style.display="block";let e=Er.offsetWidth,n=Er.offsetHeight;Er.style.left=Xn(bs.x+14,6,innerWidth-e-6)+"px",Er.style.top=Xn(bs.y+14,6,innerHeight-n-6)+"px",ei.style.cursor="pointer"}else Of(),ei.style.cursor=""}ei.addEventListener("pointerleave",()=>{if(bs=null,Ar){let i=Ar;Ar=null,Rr(i),Un()}Of()});var Er=Oe("#tip");function Of(){Er.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Df=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),e0()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Lf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),mu()});Oe("#yaw").oninput=i=>{be.yaw=+i.target.value*Math.PI/180,Un()};Oe("#tilt").oninput=i=>{be.tilt=+i.target.value*Math.PI/180,Un()};Oe("#zin").onclick=()=>{be.dist=Xn(be.dist*.75,6,400),Un()};Oe("#zout").onclick=()=>{be.dist=Xn(be.dist/.75,6,400),Un()};Oe("#rst").onclick=Ff;var Xg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],on=[],qg={},zb=i=>qg[i]||(qg[i]=new mr({color:i}));function a0(i,t){i.og.children.forEach(e=>e.material=t?zb(t):lu)}function Rr(i,t=0){let e=i.mat.emissive;i===Ar?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Bf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(fu*Math.PI/360),c=i.length===1?Xn(i[0].size*3.2+14,14,120):Xn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(be,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Un()}var Xs=Oe("#q"),vi=Oe("#list"),an=Oe("#mcs");function gu(i,t=!0){if(vi.style.display="none",Xs.value="",!i.sel){on.length>=6&&o0(on[0].o,!0);let e=new Set(on.map(s=>s.color)),n=Xg.find(s=>!e.has(s))||Xg[0];i.sel={o:i,color:n,tint:new _e(n).multiplyScalar(.12)},on.push(i.sel),a0(i,n)}an.classList.contains("min")&&gl(!1),pl.set(i,performance.now()),Rr(i),t&&Bf([i],Math.max(be.tilt,.9)),qs()}function o0(i,t){let e=on.indexOf(i.sel);e>=0&&on.splice(e,1),i.sel=null,a0(i,null),Rr(i),Un(),t||qs()}function l0(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=on.map(d=>{let v=1e9,p=-1e9,y=1e9,M=-1e9;for(let I of d.o.rings)for(let x=0;x<I[0].length;x+=2)v=Math.min(v,I[0][x]),p=Math.max(p,I[0][x]),y=Math.min(y,I[0][x+1]),M=Math.max(M,I[0][x+1]);return{x0:v,x1:p,y0:y,y1:M}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;on.forEach((d,v)=>{let p=r[v],y=(p.x0+p.x1)/2,M=(p.y0+p.y1)/2;s.beginPath();for(let I of d.o.rings)for(let x of I)for(let m=0;m<x.length;m+=2){let B=e/2+(x[m]-y)*l,k=n/2-(x[m+1]-M)*l;m?s.lineTo(B,k):s.moveTo(B,k),m===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let c=l/Rb,h=[.5,1,2,5,10,20,50,100].find(d=>d*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function qs(){if(!on.length){an.innerHTML="",an.style.display="none",gl(!1);return}if(an.style.display="flex",innerWidth<=640){let e=Oe("#inf").getBoundingClientRect().bottom;an.style.top=Math.round(e+8)+"px",an.style.maxHeight=Math.max(110,Math.min(innerHeight*(Oe("#rc").classList.contains("min")?.7:.4),Oe("#rc").getBoundingClientRect().top-e-16))+"px",an.style.width=""}else if(innerHeight<=500){let e=Oe("#inf").getBoundingClientRect().bottom;an.style.top=Math.round(e+8)+"px",an.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",an.style.width="min(290px, 40vw)"}else an.style.top="",an.style.maxHeight="",an.style.width="";window.__fitMcs&&window.__fitMcs();let i=on.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${ru[s.pr]}</em></div><div class="mb">${ws(s.pop)}${__t(524)}${Ia(s.area)} km\xB2 \xB7 ${Ia(s.pop/s.area)}${__t(525)}${s.rankP}${__t(526)}`}).join("");if(on.length>1){let e=s=>Math.max(...on.map(s)),n=[[__t(527),s=>s.o.pop,ws],[__t(528),s=>s.o.area,Ia],[__t(529),s=>s.o.pop/s.o.area,Ia]];if(i+=`${__t(530)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${on.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),on.length===2){let[s,r]=on.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],c=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(531)}${c(a.pop,l.pop)}${__t(532)}${l.name}${__t(533)}${c(a.area,l.area)}\xD7 ${a.area>=l.area?__t(534):__t(535)}.</small>`}i+="</div>"}an.innerHTML=i,an.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),o0(on[+e.dataset.x].o)}),an.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Bf([on[+e.dataset.i].o],Math.max(be.tilt,.9)),e.onmouseenter=()=>{let n=on[+e.dataset.i].o;pl.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=on.splice(s,1);on.splice(r,0,a),qs();let l=Oe("#sil");l&&l.classList.add("flash")}}});let t=Oe("#sil");t&&l0(t)}Xs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Xs.value);return}let i=wf(Xs.value.trim());if(!i){vi.style.display="none";return}let t=[],e=[];for(let s of _n){let r=wf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);vi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${ws(s.pop)}</em></li>`).join("")||__t(489),vi.style.display="block",vi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>gu(n[+s.dataset.i])),vi._r=n});Xs.addEventListener("keydown",i=>{i.key==="Enter"&&vi._pick?vi._pick(0):i.key==="Enter"&&vi._r&&vi._r[0]&&gu(vi._r[0]),i.key==="Escape"&&(Xs.value="",vi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Xs&&c0()});var Yg=0;addEventListener("resize",()=>{clearTimeout(Yg),Yg=setTimeout(()=>{let i=Oe("#sil");i&&l0(i)},120)});var du=null,Pf=Oe("#chip");function $b(i,t,e=.8){du={codes:new Set(i.map(n=>n.code)),label:t},_n.forEach(n=>{n.inF=du.codes.has(n.code),pu(n)}),Pf.innerHTML=`${__t(536)}${t}</b> \xB7 ${i.length}${i.length===1?__t(537):__t(538)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Pf.style.display="flex",Oe("#chx").onclick=c0,mu(),Bf(i,e),i.slice(0,40).forEach(n=>pl.set(n,performance.now()))}function c0(){du&&(du=null,_n.forEach(i=>{i.inF=!0,pu(i)}),Pf.style.display="none",mu())}var Vb="prov";function Hb(i){let t=[..._n].sort((a,l)=>l.pop-a.pop),e=[..._n].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[_n.filter(a=>a.pr===s),Kg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(539)]:[e.slice(0,10),__t(540)];if(n==="low")return s==="pop"?[t.slice(-10),__t(541)]:[e.slice(-10),__t(542)];if(n==="size")return[_n.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${ws(+s)}${__t(543)}`:+s==0?`${__t(544)}${ws(+r)}${__t(545)}`:`${ws(+s)} \u2013 ${ws(+r-1)}${__t(545)}`];if(n==="n50"){let a=0,l=0;for(let c of t)if(a+=c.pop,l++,a>=Tf/2)break;return[t.slice(0,l),`${__t(546)}`]}return[[],""]}function Gb(i){let[t,e]=Hb(i);t.length&&$b(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Vb=i.dataset.tab,Oe("#dbody").scrollTop=0});var Cr=Oe("#rc"),ou=Oe("#mcstab");function Pa(i){Cr.classList.toggle("min",i),Oe("#rcgrab span").textContent=i?__t(588):__t(589),on.length&&qs()}function gl(i){an.classList.toggle("min",i),an.style.transform="",an.style.opacity="",ou.classList.toggle("on",i&&on.length>0),i&&(ou.textContent=`\u25B8 ${on.length} ${on.length===1?"ficha":"fichas"}`,ou.style.top=an.style.top||"124px")}function kf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!_u.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(l,c)>10&&(s.lock=Math.abs(l)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(l,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Oe("#rcgrab").onclick=()=>Pa(!Cr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Pa(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var h0=()=>innerWidth>640;kf(Cr,{axis:"y",onEnd:(i,t)=>{if(!h0())if(t>40&&!Cr.classList.contains("min")){let e=Oe("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Pa(!0)}else t<-30&&Cr.classList.contains("min")&&Pa(!1)}});kf(Cr,{axis:"x",onEnd:i=>{h0()&&(i>50?Pa(!0):i<-30&&Cr.classList.contains("min")&&Pa(!1))}});kf(an,{axis:"x",onMove:i=>{i<0&&(an.classList.add("sw"),an.style.transform=`translateX(${i}px)`,an.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{an.classList.remove("sw"),i<-60?(gl(!0),window.__rodHide&&!on.length&&window.__rodHide()):(an.style.transform="",an.style.opacity="")}});ou.onclick=()=>{gl(!1),qs()};Oe("#dtoggle").onclick=()=>{let i=Oe("#dp").classList.toggle("open");Oe("#rc").classList.toggle("dopen",i),Oe("#dtoggle").textContent=i?_u.matches&&innerWidth<=640?__t(590):__t(591):__t(592),window.__rodCard&&window.__rodCard()};var _u=matchMedia("(max-width:640px), (max-height:500px)");function u0(){let i=Oe("#leg");_u.matches?Oe("#rc").insertBefore(i,Oe("#dtoggle")):document.body.appendChild(i),on.length&&qs()}_u.addEventListener("change",u0);u0();s0();Lb();Ff();Object.assign(Mn,be);for(let i of _n)i.z=.01;requestAnimationFrame(i0);$g({scene:Es,camera:hs,renderer:ml,goal:be,cur:Mn,invalidate:Un,flyTo:(i,t,e,n)=>{Object.assign(be,{tx:(i-dl)*ls,ty:(t-fl)*ls,dist:e,tilt:n}),Un()},K:ls,CX:dl,CY:fl,mcs:an,q:Xs,list:vi,munis:_n,select:gu,norm:wf,fmt:ws,clamp:Xn,mcsMin:gl});window.__app={scene:Es,renderer:ml,camera:hs,munis:_n,labs:hu,goal:be,cur:Mn,select:gu,get mode(){return Lf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(598):__t(599)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
