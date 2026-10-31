(()=>{var Mm=0,Ld=1,bm=2;var nl=1,wm=2,wa=3,Ws=0,Kn=1,ts=2,es=0,Ea=1,Dd=2,Nd=3,Ud=4,Em=5;var Ar=100,Tm=101,Am=102,Cm=103,Rm=104,Im=200,Pm=201,Lm=202,Dm=203,Fd=204,Od=205,Nm=206,Um=207,Fm=208,Om=209,Bm=210,km=211,zm=212,$m=213,Vm=214,vc=0,yc=1,Sc=2,ua=3,Mc=4,bc=5,wc=6,Ec=7,ah=0,Hm=1,Gm=2,$i=0,Bd=1,kd=2,zd=3,$d=4,Vd=5,Hd=6,Gd=7;var Wd=300,Xs=301,Cr=302,oh=303,lh=304,il=306,Tc=1e3,Yi=1001,Ac=1002,Ln=1003,Wm=1004;var sl=1005;var Bn=1006,ch=1007;var qs=1008;var ci=1009,Xd=1010,qd=1011,Ta=1012,hh=1013,Vi=1014,Ti=1015,Hi=1016,uh=1017,dh=1018,Aa=1020,Yd=35902,Zd=35899,Jd=1021,jd=1022,Ai=1023,Ji=1026,Ys=1027,fh=1028,ph=1029,Zs=1030,mh=1031;var gh=1033,rl=33776,al=33777,ol=33778,ll=33779,_h=35840,xh=35841,vh=35842,yh=35843,Sh=36196,Mh=37492,bh=37496,wh=37488,Eh=37489,cl=37490,Th=37491,Ah=37808,Ch=37809,Rh=37810,Ih=37811,Ph=37812,Lh=37813,Dh=37814,Nh=37815,Uh=37816,Fh=37817,Oh=37818,Bh=37819,kh=37820,zh=37821,$h=36492,Vh=36494,Hh=36495,Gh=36283,Wh=36284,hl=36285,Xh=36286;var So=2300,Cc=2301,_c=2302,vd=2303,yd=2400,Sd=2401,Md=2402;var Xm=3200;var qh=0,qm=1,ws="",mi="srgb",Mo="srgb-linear",bo="linear",en="srgb";var xc=7680;var Ym=519,Zm=512,Jm=513,jm=514,Yh=515,Km=516,Qm=517,Zh=518,tg=519,Kd=35044;var Qd="300 es",Bi=2e3,da=2001;function m_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function g_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eg(){let i=wo("canvas");return i.style.display="block",i}var Bp={},fa=null;function Eo(...i){let t="THREE."+i.shift();fa?fa("log",t,...i):console.log(t,...i)}function ng(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=ng(i);let t="THREE."+i.shift();if(fa)fa("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ye(...i){i=ng(i);let t="THREE."+i.shift();if(fa)fa("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yr(...i){let t=i.join(" ");t in Bp||(Bp[t]=!0,ve(...i))}function ig(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var sg={[vc]:yc,[Sc]:wc,[Mc]:Ec,[ua]:bc,[yc]:vc,[wc]:Sc,[Ec]:Mc,[bc]:ua},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kp=1234567,_o=Math.PI/180,pa=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function tf(i,t){return(i%t+t)%t}function __(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function x_(i,t,e){return i!==t?(e-i)/(t-i):0}function xo(i,t,e){return(1-e)*i+e*t}function v_(i,t,e,n){return xo(i,t,1-Math.exp(-e*n))}function y_(i,t=1){return t-Math.abs(tf(i,t*2)-t)}function S_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function M_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function b_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function w_(i,t){return i+Math.random()*(t-i)}function E_(i){return i*(.5-Math.random())}function T_(i){i!==void 0&&(kp=i);let t=kp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A_(i){return i*_o}function C_(i){return i*pa}function R_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function I_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function P_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function L_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),m=a((t-n)/2),y=r((n-t)/2),M=a((n-t)/2);switch(s){case"XYX":i.set(l*d,c*v,c*m,l*h);break;case"YZY":i.set(c*m,l*d,c*v,l*h);break;case"ZXZ":i.set(c*v,c*m,l*d,l*h);break;case"XZX":i.set(l*d,c*M,c*y,l*h);break;case"YXY":i.set(c*y,l*d,c*M,l*h);break;case"ZYZ":i.set(c*M,c*y,l*d,l*h);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ef={DEG2RAD:_o,RAD2DEG:pa,generateUUID:Zi,clamp:Re,euclideanModulo:tf,mapLinear:__,inverseLerp:x_,lerp:xo,damp:v_,pingpong:y_,smoothstep:S_,smootherstep:M_,randInt:b_,randFloat:w_,randFloatSpread:E_,seededRandom:T_,degToRad:A_,radToDeg:C_,isPowerOfTwo:R_,ceilPowerOfTwo:I_,floorPowerOfTwo:P_,setQuaternionFromProperEuler:L_,normalize:sn,denormalize:Oi},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ki=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],d=n[s+2],v=n[s+3],m=r[a+0],y=r[a+1],M=r[a+2],I=r[a+3];if(v!==I||c!==m||h!==y||d!==M){let x=c*m+h*y+d*M+v*I;x<0&&(m=-m,y=-y,M=-M,I=-I,x=-x);let g=1-l;if(x<.9995){let B=Math.acos(x),k=Math.sin(B);g=Math.sin(g*B)/k,l=Math.sin(l*B)/k,c=c*g+m*l,h=h*g+y*l,d=d*g+M*l,v=v*g+I*l}else{c=c*g+m*l,h=h*g+y*l,d=d*g+M*l,v=v*g+I*l;let B=1/Math.sqrt(c*c+h*h+d*d+v*v);c*=B,h*=B,d*=B,v*=B}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],d=n[s+3],v=r[a],m=r[a+1],y=r[a+2],M=r[a+3];return t[e]=l*M+d*v+c*y-h*m,t[e+1]=c*M+d*m+h*v-l*y,t[e+2]=h*M+d*y+l*m-c*v,t[e+3]=d*M-l*v-c*m-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(s/2),v=l(r/2),m=c(n/2),y=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=m*d*v+h*y*M,this._y=h*y*v-m*d*M,this._z=h*d*M+m*y*v,this._w=h*d*v-m*y*M;break;case"YXZ":this._x=m*d*v+h*y*M,this._y=h*y*v-m*d*M,this._z=h*d*M-m*y*v,this._w=h*d*v+m*y*M;break;case"ZXY":this._x=m*d*v-h*y*M,this._y=h*y*v+m*d*M,this._z=h*d*M+m*y*v,this._w=h*d*v-m*y*M;break;case"ZYX":this._x=m*d*v-h*y*M,this._y=h*y*v+m*d*M,this._z=h*d*M-m*y*v,this._w=h*d*v+m*y*M;break;case"YZX":this._x=m*d*v+h*y*M,this._y=h*y*v+m*d*M,this._z=h*d*M-m*y*v,this._w=h*d*v-m*y*M;break;case"XZY":this._x=m*d*v-h*y*M,this._y=h*y*v-m*d*M,this._z=h*d*M+m*y*v,this._w=h*d*v+m*y*M;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],d=e[6],v=e[10],m=n+l+v;if(m>0){let y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(d-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>l&&n>v){let y=2*Math.sqrt(1+n-l-v);this._w=(d-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(l>v){let y=2*Math.sqrt(1+l-n-v);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+d)/y}else{let y=2*Math.sqrt(1+v-n-l);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*c,this._y=s*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-s*l,this._w=a*d-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,e=Math.sin(e*h)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+c*h+a*v-l*d,this.y=n+c*d+l*h-r*v,this.z=s+c*v+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qu.copy(this).projectOnVector(t),this.sub(qu)}reflect(t){return this.sub(qu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qu=new q,zp=new Ki,Te=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],v=n[7],m=n[2],y=n[5],M=n[8],I=s[0],x=s[3],g=s[6],B=s[1],k=s[4],R=s[7],E=s[2],O=s[5],G=s[8];return r[0]=a*I+l*B+c*E,r[3]=a*x+l*k+c*O,r[6]=a*g+l*R+c*G,r[1]=h*I+d*B+v*E,r[4]=h*x+d*k+v*O,r[7]=h*g+d*R+v*G,r[2]=m*I+y*B+M*E,r[5]=m*x+y*k+M*O,r[8]=m*g+y*R+M*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=d*a-l*h,m=l*c-d*r,y=h*r-a*c,M=e*v+n*m+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/M;return t[0]=v*I,t[1]=(s*h-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=m*I,t[4]=(d*e-s*c)*I,t[5]=(s*r-l*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yu.makeScale(t,e)),this}rotate(t){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yu.makeRotation(-t)),this}translate(t,e){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yu=new Te,$p=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){let i={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===en&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===en&&(s.r=ha(s.r),s.g=ha(s.g),s.b=ha(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mo]:{primaries:t,whitePoint:n,transfer:bo,toXYZ:$p,fromXYZ:Vp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:n,transfer:en,toXYZ:$p,fromXYZ:Vp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),i}var Be=D_();function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yr,Rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yr===void 0&&(Yr=wo("canvas")),Yr.width=t.width,Yr.height=t.height;let s=Yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ms(e[n]/255)*255):e[n]=Ms(e[n]);return{data:e,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},N_=0,ma=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Zu(s[a].image)):r.push(Zu(s[a]))}else r=Zu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var U_=0,Ju=new q,ai=class i extends ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=Bn,a=qs,l=Ai,c=ci,h=i.DEFAULT_ANISOTROPY,d=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Zi(),this.name="",this.source=new ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ve(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Wd;ai.DEFAULT_ANISOTROPY=1;var nn=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],d=c[4],v=c[8],m=c[1],y=c[5],M=c[9],I=c[2],x=c[6],g=c[10];if(Math.abs(d-m)<.01&&Math.abs(v-I)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(v+I)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let k=(h+1)/2,R=(y+1)/2,E=(g+1)/2,O=(d+m)/4,G=(v+I)/4,A=(M+x)/4;return k>R&&k>E?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=O/n,r=G/n):R>E?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=O/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=G/r,s=A/r),this.set(n,s,r,e),this}let B=Math.sqrt((x-M)*(x-M)+(v-I)*(v-I)+(m-d)*(m-d));return Math.abs(B)<.001&&(B=1),this.x=(x-M)/B,this.y=(v-I)/B,this.z=(m-d)/B,this.w=Math.acos((h+y+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ai(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ma(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,d,v,m,y,M,I,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,d,v,m,y,M,I,x)}set(t,e,n,s,r,a,l,c,h,d,v,m,y,M,I,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=l,g[13]=c,g[2]=h,g[6]=d,g[10]=v,g[14]=m,g[3]=y,g[7]=M,g[11]=I,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),r=1/Zr.setFromMatrixColumn(t,1).length(),a=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let m=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=-c*v,e[8]=h,e[1]=y+M*h,e[5]=m-I*h,e[9]=-l*c,e[2]=I-m*h,e[6]=M+y*h,e[10]=a*c}else if(t.order==="YXZ"){let m=c*d,y=c*v,M=h*d,I=h*v;e[0]=m+I*l,e[4]=M*l-y,e[8]=a*h,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=y*l-M,e[6]=I+m*l,e[10]=a*c}else if(t.order==="ZXY"){let m=c*d,y=c*v,M=h*d,I=h*v;e[0]=m-I*l,e[4]=-a*v,e[8]=M+y*l,e[1]=y+M*l,e[5]=a*d,e[9]=I-m*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let m=a*d,y=a*v,M=l*d,I=l*v;e[0]=c*d,e[4]=M*h-y,e[8]=m*h+I,e[1]=c*v,e[5]=I*h+m,e[9]=y*h-M,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let m=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=I-m*v,e[8]=M*v+y,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=y*v+M,e[10]=m-I*v}else if(t.order==="XZY"){let m=a*c,y=a*h,M=l*c,I=l*h;e[0]=c*d,e[4]=-v,e[8]=h*d,e[1]=m*v+I,e[5]=a*d,e[9]=y*v-M,e[2]=M*v-y,e[6]=l*d,e[10]=I*v+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(F_,t,O_)}lookAt(t,e,n){let s=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Ns.crossVectors(n,fi),Ns.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Ns.crossVectors(n,fi)),Ns.normalize(),Gl.crossVectors(fi,Ns),s[0]=Ns.x,s[4]=Gl.x,s[8]=fi.x,s[1]=Ns.y,s[5]=Gl.y,s[9]=fi.y,s[2]=Ns.z,s[6]=Gl.z,s[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],v=n[5],m=n[9],y=n[13],M=n[2],I=n[6],x=n[10],g=n[14],B=n[3],k=n[7],R=n[11],E=n[15],O=s[0],G=s[4],A=s[8],F=s[12],H=s[1],X=s[5],at=s[9],ot=s[13],Z=s[2],et=s[6],ut=s[10],pt=s[14],At=s[3],mt=s[7],wt=s[11],Mt=s[15];return r[0]=a*O+l*H+c*Z+h*At,r[4]=a*G+l*X+c*et+h*mt,r[8]=a*A+l*at+c*ut+h*wt,r[12]=a*F+l*ot+c*pt+h*Mt,r[1]=d*O+v*H+m*Z+y*At,r[5]=d*G+v*X+m*et+y*mt,r[9]=d*A+v*at+m*ut+y*wt,r[13]=d*F+v*ot+m*pt+y*Mt,r[2]=M*O+I*H+x*Z+g*At,r[6]=M*G+I*X+x*et+g*mt,r[10]=M*A+I*at+x*ut+g*wt,r[14]=M*F+I*ot+x*pt+g*Mt,r[3]=B*O+k*H+R*Z+E*At,r[7]=B*G+k*X+R*et+E*mt,r[11]=B*A+k*at+R*ut+E*wt,r[15]=B*F+k*ot+R*pt+E*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],d=t[2],v=t[6],m=t[10],y=t[14],M=t[3],I=t[7],x=t[11],g=t[15],B=c*y-h*m,k=l*y-h*v,R=l*m-c*v,E=a*y-h*d,O=a*m-c*d,G=a*v-l*d;return e*(I*B-x*k+g*R)-n*(M*B-x*E+g*O)+s*(M*k-I*E+g*G)-r*(M*R-I*O+x*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=t[9],m=t[10],y=t[11],M=t[12],I=t[13],x=t[14],g=t[15],B=e*l-n*a,k=e*c-s*a,R=e*h-r*a,E=n*c-s*l,O=n*h-r*l,G=s*h-r*c,A=d*I-v*M,F=d*x-m*M,H=d*g-y*M,X=v*x-m*I,at=v*g-y*I,ot=m*g-y*x,Z=B*ot-k*at+R*X+E*H-O*F+G*A;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/Z;return t[0]=(l*ot-c*at+h*X)*et,t[1]=(s*at-n*ot-r*X)*et,t[2]=(I*G-x*O+g*E)*et,t[3]=(m*O-v*G-y*E)*et,t[4]=(c*H-a*ot-h*F)*et,t[5]=(e*ot-s*H+r*F)*et,t[6]=(x*R-M*G-g*k)*et,t[7]=(d*G-m*R+y*k)*et,t[8]=(a*at-l*H+h*A)*et,t[9]=(n*H-e*at-r*A)*et,t[10]=(M*O-I*R+g*B)*et,t[11]=(v*R-d*O-y*B)*et,t[12]=(l*F-a*X-c*A)*et,t[13]=(e*X-n*F+s*A)*et,t[14]=(I*k-M*E-x*B)*et,t[15]=(d*E-v*k+m*B)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+n,d*c-s*a,0,h*c-s*l,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,d=a+a,v=l+l,m=r*h,y=r*d,M=r*v,I=a*d,x=a*v,g=l*v,B=c*h,k=c*d,R=c*v,E=n.x,O=n.y,G=n.z;return s[0]=(1-(I+g))*E,s[1]=(y+R)*E,s[2]=(M-k)*E,s[3]=0,s[4]=(y-R)*O,s[5]=(1-(m+g))*O,s[6]=(x+B)*O,s[7]=0,s[8]=(M+k)*G,s[9]=(x-B)*G,s[10]=(1-(m+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zr.set(s[0],s[1],s[2]).length(),l=Zr.set(s[4],s[5],s[6]).length(),c=Zr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Di.copy(this);let h=1/a,d=1/l,v=1/c;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=d,Di.elements[5]*=d,Di.elements[6]*=d,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,e.setFromRotationMatrix(Di),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=Bi,c=!1){let h=this.elements,d=2*r/(e-t),v=2*r/(n-s),m=(e+t)/(e-t),y=(n+s)/(n-s),M,I;if(c)M=r/(a-r),I=a*r/(a-r);else if(l===Bi)M=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===da)M=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Bi,c=!1){let h=this.elements,d=2/(e-t),v=2/(n-s),m=-(e+t)/(e-t),y=-(n+s)/(n-s),M,I;if(c)M=1/(a-r),I=a/(a-r);else if(l===Bi)M=-2/(a-r),I=-(a+r)/(a-r);else if(l===da)M=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zr=new q,Di=new ze,F_=new q(0,0,0),O_=new q(1,1,1),Ns=new q,Gl=new q,fi=new q,Hp=new ze,Gp=new Ki,bs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],v=s[2],m=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,y),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bs.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},B_=0,Wp=new q,Jr=new Ki,_s=new ze,Wl=new q,lo=new q,k_=new q,z_=new Ki,Xp=new q(1,0,0),qp=new q(0,1,0),Yp=new q(0,0,1),Zp={type:"added"},$_={type:"removed"},jr={type:"childadded",child:null},ju={type:"childremoved",child:null},Dn=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new bs,n=new Ki,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Te}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Xp,t)}rotateY(t){return this.rotateOnAxis(qp,t)}rotateZ(t){return this.rotateOnAxis(Yp,t)}translateOnAxis(t,e){return Wp.copy(t).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xp,t)}translateY(t){return this.translateOnAxis(qp,t)}translateZ(t){return this.translateOnAxis(Yp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wl.copy(t):Wl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(lo,Wl,this.up):_s.lookAt(Wl,lo,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(_s),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zp),jr.child=t,this.dispatchEvent(jr),jr.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($_),ju.child=t,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_s.multiply(t.parent.matrixWorld)),t.applyMatrix4(_s),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zp),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,k_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,z_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let v=c[h];r(t.shapes,v)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),v=a(t.shapes),m=a(t.skeletons),y=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),m.length>0&&(n.skeletons=m),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dn.DEFAULT_UP=new q(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ki=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},V_={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let x=e.getJointPose(I,n),g=this._getHandJoint(h,I);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let d=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=d.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Ku(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _e=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Be.workingColorSpace){return this.r=t,this.g=e,this.b=n,Be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Be.workingColorSpace){if(t=tf(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ku(a,r,t+1/3),this.g=Ku(a,r,t),this.b=Ku(a,r,t-1/3)}return Be.colorSpaceToWorking(this,s),this}setStyle(t,e=mi){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ve("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mi){let n=rg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Be.workingToColorSpace(Gn.copy(this),t),Math.round(Re(Gn.r*255,0,255))*65536+Math.round(Re(Gn.g*255,0,255))*256+Math.round(Re(Gn.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Be.workingColorSpace){Be.workingToColorSpace(Gn.copy(this),e);let n=Gn.r,s=Gn.g,r=Gn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,d=(l+a)/2;if(l===a)c=0,h=0;else{let v=a-l;switch(h=d<=.5?v/(a+l):v/(2-a-l),a){case n:c=(s-r)/v+(s<r?6:0);break;case s:c=(r-n)/v+2;break;case r:c=(n-s)/v+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=Be.workingColorSpace){return Be.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=mi){Be.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,n=Gn.g,s=Gn.b;return t!==mi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+e,Us.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Us),t.getHSL(Xl);let n=xo(Us.h,Xl.h,e),s=xo(Us.s,Xl.s,e),r=xo(Us.l,Xl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new _e;_e.NAMES=rg;var Ao=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bs,this.environmentIntensity=1,this.environmentRotation=new bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=new q,xs=new q,Qu=new q,vs=new q,Kr=new q,Qr=new q,Jp=new q,td=new q,ed=new q,nd=new q,id=new nn,sd=new nn,rd=new nn,ks=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ni.subVectors(t,e),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ni.subVectors(s,e),xs.subVectors(n,e),Qu.subVectors(t,e);let a=Ni.dot(Ni),l=Ni.dot(xs),c=Ni.dot(Qu),h=xs.dot(xs),d=xs.dot(Qu),v=a*h-l*l;if(v===0)return r.set(0,0,0),null;let m=1/v,y=(h*c-l*d)*m,M=(a*d-l*c)*m;return r.set(1-y-M,M,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,vs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vs.x),c.addScaledVector(a,vs.y),c.addScaledVector(l,vs.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return id.setScalar(0),sd.setScalar(0),rd.setScalar(0),id.fromBufferAttribute(t,e),sd.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(id,r.x),a.addScaledVector(sd,r.y),a.addScaledVector(rd,r.z),a}static isFrontFacing(t,e,n,s){return Ni.subVectors(n,e),xs.subVectors(t,e),Ni.cross(xs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Ni.cross(xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Kr.subVectors(s,n),Qr.subVectors(r,n),td.subVectors(t,n);let c=Kr.dot(td),h=Qr.dot(td);if(c<=0&&h<=0)return e.copy(n);ed.subVectors(t,s);let d=Kr.dot(ed),v=Qr.dot(ed);if(d>=0&&v<=d)return e.copy(s);let m=c*v-d*h;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Kr,a);nd.subVectors(t,r);let y=Kr.dot(nd),M=Qr.dot(nd);if(M>=0&&y<=M)return e.copy(r);let I=y*h-c*M;if(I<=0&&h>=0&&M<=0)return l=h/(h-M),e.copy(n).addScaledVector(Qr,l);let x=d*M-y*v;if(x<=0&&v-d>=0&&y-M>=0)return Jp.subVectors(r,s),l=(v-d)/(v-d+(y-M)),e.copy(s).addScaledVector(Jp,l);let g=1/(x+I+m);return a=I*g,l=m*g,e.copy(n).addScaledVector(Kr,a).addScaledVector(Qr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ql.copy(n.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),Yl.subVectors(this.max,co),ta.subVectors(t.a,co),ea.subVectors(t.b,co),na.subVectors(t.c,co),Fs.subVectors(ea,ta),Os.subVectors(na,ea),mr.subVectors(ta,na);let e=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-mr.z,mr.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,mr.z,0,-mr.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-mr.y,mr.x,0];return!ad(e,ta,ea,na,Yl)||(e=[1,0,0,0,1,0,0,0,1],!ad(e,ta,ea,na,Yl))?!1:(Zl.crossVectors(Fs,Os),e=[Zl.x,Zl.y,Zl.z],ad(e,ta,ea,na,Yl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ys),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ys=[new q,new q,new q,new q,new q,new q,new q,new q],Ui=new q,ql=new jn,ta=new q,ea=new q,na=new q,Fs=new q,Os=new q,mr=new q,co=new q,Yl=new q,Zl=new q,gr=new q;function ad(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gr.fromArray(i,r);let l=s.x*Math.abs(gr.x)+s.y*Math.abs(gr.y)+s.z*Math.abs(gr.z),c=t.dot(gr),h=e.dot(gr),d=n.dot(gr);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}var En=new q,Jl=new $t,H_=0,an=class extends ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kd,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jl.fromBufferAttribute(this,e),Jl.applyMatrix3(t),this.setXY(e,Jl.x,Jl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix3(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Co=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ro=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Sn=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},G_=new jn,ho=new q,od=new q,li=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):G_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ho.subVectors(t,this.center);let e=ho.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ho,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ho.copy(t.center).add(od)),this.expandByPoint(ho.copy(t.center).sub(od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},W_=0,Ei=new ze,ld=new Dn,ia=new q,pi=new jn,uo=new jn,Pn=new q,Mn=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m_(t)?Ro:Co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return ld.lookAt(t),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];uo.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(pi.min,uo.min),pi.expandByPoint(Pn),Pn.addVectors(pi.max,uo.max),pi.expandByPoint(Pn)):(pi.expandByPoint(uo.min),pi.expandByPoint(uo.max))}pi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pn));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Pn.fromBufferAttribute(l,h),c&&(ia.fromBufferAttribute(t,h),Pn.add(ia)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let A=0;A<n.count;A++)l[A]=new q,c[A]=new q;let h=new q,d=new q,v=new q,m=new $t,y=new $t,M=new $t,I=new q,x=new q;function g(A,F,H){h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,H),m.fromBufferAttribute(r,A),y.fromBufferAttribute(r,F),M.fromBufferAttribute(r,H),d.sub(h),v.sub(h),y.sub(m),M.sub(m);let X=1/(y.x*M.y-M.x*y.y);isFinite(X)&&(I.copy(d).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(X),x.copy(v).multiplyScalar(y.x).addScaledVector(d,-M.x).multiplyScalar(X),l[A].add(I),l[F].add(I),l[H].add(I),c[A].add(x),c[F].add(x),c[H].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let A=0,F=B.length;A<F;++A){let H=B[A],X=H.start,at=H.count;for(let ot=X,Z=X+at;ot<Z;ot+=3)g(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}let k=new q,R=new q,E=new q,O=new q;function G(A){E.fromBufferAttribute(s,A),O.copy(E);let F=l[A];k.copy(F),k.sub(E.multiplyScalar(E.dot(F))).normalize(),R.crossVectors(O,F);let X=R.dot(c[A])<0?-1:1;a.setXYZW(A,k.x,k.y,k.z,X)}for(let A=0,F=B.length;A<F;++A){let H=B[A],X=H.start,at=H.count;for(let ot=X,Z=X+at;ot<Z;ot+=3)G(t.getX(ot+0)),G(t.getX(ot+1)),G(t.getX(ot+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,y=n.count;m<y;m++)n.setXYZ(m,0,0,0);let s=new q,r=new q,a=new q,l=new q,c=new q,h=new q,d=new q,v=new q;if(t)for(let m=0,y=t.count;m<y;m+=3){let M=t.getX(m+0),I=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,x),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,x),l.add(d),c.add(d),h.add(d),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,y=e.count;m<y;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pn.fromBufferAttribute(t,e),Pn.normalize(),t.setXYZ(e,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(l,c){let h=l.array,d=l.itemSize,v=l.normalized,m=new h.constructor(c.length*d),y=0,M=0;for(let I=0,x=c.length;I<x;I++){l.isInterleavedBufferAttribute?y=c[I]*l.data.stride+l.offset:y=c[I]*d;for(let g=0;g<d;g++)m[M++]=h[y++]}return new an(m,d,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let d=0,v=h.length;d<v;d++){let m=h[d],y=t(m,n);c.push(y)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let v=0,m=h.length;v<m;v++){let y=h[v];d.push(y.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],v=r[h];for(let m=0,y=v.length;m<y;m++)d.push(v[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let v=a[h];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Jn=new q,zi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyMatrix4(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyNormalMatrix(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.transformDirection(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cd=new q,X_=new q,q_=new Te,Fi=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=cd.subVectors(n,e).cross(X_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(cd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||q_.getNormalMatrix(t),s=this.coplanarPoint(cd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Y_=0,Qi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ea,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ve(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ss=new q,hd=new q,jl=new q,Kl=new q,Sr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ss.copy(this.origin).addScaledVector(this.direction,e),Ss.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hd.copy(t).add(e).multiplyScalar(.5),jl.copy(e).sub(t).normalize(),Kl.copy(this.origin).sub(hd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jl),l=Kl.dot(this.direction),c=-Kl.dot(jl),h=Kl.lengthSq(),d=Math.abs(1-a*a),v,m,y,M;if(d>0)if(v=a*c-l,m=a*l-c,M=r*d,v>=0)if(m>=-M)if(m<=M){let I=1/d;v*=I,m*=I,y=v*(v+a*m+2*l)+m*(a*v+m+2*c)+h}else m=r,v=Math.max(0,-(a*m+l)),y=-v*v+m*(m+2*c)+h;else m=-r,v=Math.max(0,-(a*m+l)),y=-v*v+m*(m+2*c)+h;else m<=-M?(v=Math.max(0,-(-a*r+l)),m=v>0?-r:Math.min(Math.max(-r,-c),r),y=-v*v+m*(m+2*c)+h):m<=M?(v=0,m=Math.min(Math.max(-r,-c),r),y=m*(m+2*c)+h):(v=Math.max(0,-(a*r+l)),m=v>0?r:Math.min(Math.max(-r,-c),r),y=-v*v+m*(m+2*c)+h);else m=a>0?-r:r,v=Math.max(0,-(a*m+l)),y=-v*v+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(hd).addScaledVector(jl,m),y}intersectSphere(t,e){if(t.radius<0)return null;Ss.subVectors(t.center,this.origin);let n=Ss.dot(this.direction),s=Ss.dot(Ss)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),d>=0?(r=(t.min.y-m.y)*d,a=(t.max.y-m.y)*d):(r=(t.max.y-m.y)*d,a=(t.min.y-m.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-m.z)*v,c=(t.max.z-m.z)*v):(l=(t.max.z-m.z)*v,c=(t.min.z-m.z)*v),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ss)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,v=t.x-a.x,m=t.y-a.y,y=t.z-a.z,M=e.x-a.x,I=e.y-a.y,x=e.z-a.z,g=n.x-a.x,B=n.y-a.y,k=n.z-a.z,R=Math.abs(c),E=Math.abs(h),O=Math.abs(d),G,A,F,H,X,at,ot,Z,et,ut,pt,At;if(R>=E&&R>=O?(F=c,at=v,et=M,At=g,c>=0?(G=h,A=d,H=m,X=y,ot=I,Z=x,ut=B,pt=k):(G=d,A=h,H=y,X=m,ot=x,Z=I,ut=k,pt=B)):E>=O?(F=h,at=m,et=I,At=B,h>=0?(G=d,A=c,H=y,X=v,ot=x,Z=M,ut=k,pt=g):(G=c,A=d,H=v,X=y,ot=M,Z=x,ut=g,pt=k)):(F=d,at=y,et=x,At=k,d>=0?(G=c,A=h,H=v,X=m,ot=M,Z=I,ut=g,pt=B):(G=h,A=c,H=m,X=v,ot=I,Z=M,ut=B,pt=g)),F===0)return null;let mt=G/F,wt=A/F,Mt=1/F,Yt=H-mt*at,ee=X-wt*at,$e=ot-mt*et,Pe=Z-wt*et,Oe=ut-mt*At,_t=pt-wt*At,vt=Oe*Pe-_t*$e,Pt=Yt*_t-ee*Oe,ae=$e*ee-Pe*Yt;if(s){if(vt<0||Pt<0||ae<0)return null}else if((vt<0||Pt<0||ae<0)&&(vt>0||Pt>0||ae>0))return null;let Jt=vt+Pt+ae;if(Jt===0)return null;let me=Mt*(vt*at+Pt*et+ae*At);return(Jt>0?me<0:me>0)?null:this.at(me/Jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mr=class extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jp=new ze,_r=new Sr,Ql=new li,Kp=new q,tc=new q,ec=new q,nc=new q,ud=new q,ic=new q,Qp=new q,sc=new q,Nn=class extends Dn{constructor(t=new Mn,e=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){ic.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let d=l[c],v=r[c];d!==0&&(ud.fromBufferAttribute(v,t),a?ic.addScaledVector(ud,d):ic.addScaledVector(ud.sub(e),d))}e.add(ic)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(r),_r.copy(t.ray).recast(t.near),!(Ql.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ql,Kp)===null||_r.origin.distanceToSquared(Kp)>(t.far-t.near)**2))&&(jp.copy(r).invert(),_r.copy(t.ray).applyMatrix4(jp),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_r)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,m=r.groups,y=r.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,I=m.length;M<I;M++){let x=m[M],g=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=l.getX(R),G=l.getX(R+1),A=l.getX(R+2);s=rc(this,g,t,n,h,d,v,O,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(l.count,y.start+y.count);for(let x=M,g=I;x<g;x+=3){let B=l.getX(x),k=l.getX(x+1),R=l.getX(x+2);s=rc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,I=m.length;M<I;M++){let x=m[M],g=a[x.materialIndex],B=Math.max(x.start,y.start),k=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let R=B,E=k;R<E;R+=3){let O=R,G=R+1,A=R+2;s=rc(this,g,t,n,h,d,v,O,G,A),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let M=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let x=M,g=I;x<g;x+=3){let B=x,k=x+1,R=x+2;s=rc(this,a,t,n,h,d,v,B,k,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Z_(i,t,e,n,s,r,a,l){let c;if(t.side===Kn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===Ws,l),c===null)return null;sc.copy(l),sc.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(sc);return h<e.near||h>e.far?null:{distance:h,point:sc.clone(),object:i}}function rc(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,tc),i.getVertexPosition(c,ec),i.getVertexPosition(h,nc);let d=Z_(i,t,e,n,tc,ec,nc,Qp);if(d){let v=new q;ks.getBarycoord(Qp,tc,ec,nc,v),s&&(d.uv=ks.getInterpolatedAttribute(s,l,c,h,v,new $t)),r&&(d.uv1=ks.getInterpolatedAttribute(r,l,c,h,v,new $t)),a&&(d.normal=ks.getInterpolatedAttribute(a,l,c,h,v,new q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let m={a:l,b:c,c:h,normal:new q,materialIndex:0};ks.getNormal(tc,ec,nc,m.normal),d.face=m,d.barycoord=v}return d}var Io=class extends ai{constructor(t=null,e=1,n=1,s,r,a,l,c,h=Ln,d=Ln,v,m){super(null,a,l,c,h,d,s,r,v,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sa=new ze,tm=new ze,ac=[],em=new jn,J_=new ze,fo=new Nn,po=new li,Lo=class extends Nn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,J_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sa),em.copy(t.boundingBox).applyMatrix4(sa),this.boundingBox.union(em)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sa),po.copy(t.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),t.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sa),tm.multiplyMatrices(n,sa),fo.matrixWorld=tm,fo.raycast(t,ac);for(let a=0,l=ac.length;a<l;a++){let c=ac[a];c.instanceId=r,c.object=this,e.push(c)}ac.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(s*this.count),s,this.count,fh,Ti));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xr=new li,j_=new $t(.5,.5),oc=new q,xa=class{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],d=r[4],v=r[5],m=r[6],y=r[7],M=r[8],I=r[9],x=r[10],g=r[11],B=r[12],k=r[13],R=r[14],E=r[15];if(s[0].setComponents(h-a,y-d,g-M,E-B).normalize(),s[1].setComponents(h+a,y+d,g+M,E+B).normalize(),s[2].setComponents(h+l,y+v,g+I,E+k).normalize(),s[3].setComponents(h-l,y-v,g-I,E-k).normalize(),n)s[4].setComponents(c,m,x,R).normalize(),s[5].setComponents(h-c,y-m,g-x,E-R).normalize();else if(s[4].setComponents(h-c,y-m,g-x,E-R).normalize(),e===Bi)s[5].setComponents(h+c,y+m,g+x,E+R).normalize();else if(e===da)s[5].setComponents(c,m,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);let e=j_.distanceTo(t.center);return xr.radius=.7071067811865476+e,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oc.x=s.normal.x>0?t.max.x:t.min.x,oc.y=s.normal.y>0?t.max.y:t.min.y,oc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var br=class extends Qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dc=new q,Nc=new q,nm=new ze,mo=new Sr,lc=new li,dd=new q,im=new q,Uc=class extends Dn{constructor(t=new Mn,e=new br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dc.fromBufferAttribute(e,s-1),Nc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dc.distanceTo(Nc);t.setAttribute("lineDistance",new Sn(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,t.ray.intersectsSphere(lc)===!1)return;nm.copy(s).invert(),mo.copy(t.ray).applyMatrix4(nm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){let y=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let g=d.getX(I),B=d.getX(I+1),k=cc(this,t,mo,c,g,B,I);k&&e.push(k)}if(this.isLineLoop){let I=d.getX(M-1),x=d.getX(y),g=cc(this,t,mo,c,I,x,M-1);g&&e.push(g)}}else{let y=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let I=y,x=M-1;I<x;I+=h){let g=cc(this,t,mo,c,I,I+1,I);g&&e.push(g)}if(this.isLineLoop){let I=cc(this,t,mo,c,M-1,y,M-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function cc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Dc.fromBufferAttribute(l,s),Nc.fromBufferAttribute(l,r),e.distanceSqToSegment(Dc,Nc,dd,im)>n)return;dd.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(dd);if(!(h<t.near||h>t.far))return{distance:h,point:im.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Do=class extends Uc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Fc=class extends Qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sm=new ze,bd=new Sr,hc=new li,uc=new q,wr=class extends Dn{constructor(t=new Mn,e=new Fc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(s),hc.radius+=r,t.ray.intersectsSphere(hc)===!1)return;sm.copy(s).invert(),bd.copy(t.ray).applyMatrix4(sm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,v=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let M=m,I=y;M<I;M++){let x=h.getX(M);uc.fromBufferAttribute(v,x),rm(uc,x,c,s,t,e,this)}}else{let m=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let M=m,I=y;M<I;M++)uc.fromBufferAttribute(v,M),rm(uc,M,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function rm(i,t,e,n,s,r,a){let l=bd.distanceSqToPoint(i);if(l<e){let c=new q;bd.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var No=class extends ai{constructor(t=[],e=Xs,n,s,r,a,l,c,h,d){super(t,e,n,s,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var zs=class extends ai{constructor(t,e,n=Vi,s,r,a,l=Ln,c=Ln,h,d=Ji,v=1){if(d!==Ji&&d!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:v};super(m,s,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ma(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oc=class extends zs{constructor(t,e=Vi,n=Xs,s,r,a=Ln,l=Ln,c,h=Ji){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,c,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uo=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},va=class i extends Mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],d=[],v=[],m=0,y=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(v,2));function M(I,x,g,B,k,R,E,O,G,A,F){let H=R/G,X=E/A,at=R/2,ot=E/2,Z=O/2,et=G+1,ut=A+1,pt=0,At=0,mt=new q;for(let wt=0;wt<ut;wt++){let Mt=wt*X-ot;for(let Yt=0;Yt<et;Yt++){let ee=Yt*H-at;mt[I]=ee*B,mt[x]=Mt*k,mt[g]=Z,h.push(mt.x,mt.y,mt.z),mt[I]=0,mt[x]=0,mt[g]=O>0?1:-1,d.push(mt.x,mt.y,mt.z),v.push(Yt/G),v.push(1-wt/A),pt+=1}}for(let wt=0;wt<A;wt++)for(let Mt=0;Mt<G;Mt++){let Yt=m+Mt+et*wt,ee=m+Mt+et*(wt+1),$e=m+(Mt+1)+et*(wt+1),Pe=m+(Mt+1)+et*wt;c.push(Yt,ee,Pe),c.push(ee,$e,Pe),At+=6}l.addGroup(y,At,F),y+=At,m+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fo=class i extends Mn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],m=[],y=[],M=0,I=[],x=n/2,g=0;B(),a===!1&&(t>0&&k(!0),e>0&&k(!1)),this.setIndex(d),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(m,3)),this.setAttribute("uv",new Sn(y,2));function B(){let R=new q,E=new q,O=0,G=(e-t)/n;for(let A=0;A<=r;A++){let F=[],H=A/r,X=H*(e-t)+t;for(let at=0;at<=s;at++){let ot=at/s,Z=ot*c+l,et=Math.sin(Z),ut=Math.cos(Z);E.x=X*et,E.y=-H*n+x,E.z=X*ut,v.push(E.x,E.y,E.z),R.set(et,G,ut).normalize(),m.push(R.x,R.y,R.z),y.push(ot,1-H),F.push(M++)}I.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let H=I[F][A],X=I[F+1][A],at=I[F+1][A+1],ot=I[F][A+1];(t>0||F!==0)&&(d.push(H,X,ot),O+=3),(e>0||F!==r-1)&&(d.push(X,at,ot),O+=3)}h.addGroup(g,O,0),g+=O}function k(R){let E=M,O=new $t,G=new q,A=0,F=R===!0?t:e,H=R===!0?1:-1;for(let at=1;at<=s;at++)v.push(0,x*H,0),m.push(0,H,0),y.push(.5,.5),M++;let X=M;for(let at=0;at<=s;at++){let Z=at/s*c+l,et=Math.cos(Z),ut=Math.sin(Z);G.x=F*ut,G.y=x*H,G.z=F*et,v.push(G.x,G.y,G.z),m.push(0,H,0),O.x=et*.5+.5,O.y=ut*.5*H+.5,y.push(O.x,O.y),M++}for(let at=0;at<s;at++){let ot=E+at,Z=X+at;R===!0?d.push(Z,Z+1,ot):d.push(Z+1,Z,ot),A+=3}h.addGroup(g,A,R===!0?1:2),g+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,c=r-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],m=n[s+1]-d,y=(a-d)/m;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),c=e||(a.isVector2?new $t:new q);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new q,s=[],r=[],a=[],l=new q,c=new ze;for(let y=0;y<=t;y++){let M=y/t;s[y]=this.getTangentAt(M,new q)}r[0]=new q,a[0]=new q;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),v<=h&&(h=v,n.set(0,1,0)),m<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),l.crossVectors(s[y-1],s[y]),l.length()>Number.EPSILON){l.normalize();let M=Math.acos(Re(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(l,M))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Re(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(y=-y);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],y*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ya=class extends gi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),m=c-this.aX,y=h-this.aY;c=m*d-y*v+this.aX,h=m*v+y*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bc=class extends ya{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nf(){let i=0,t=0,e=0,n=0;function s(r,a,l,c){i=r,t=l,e=-3*r+3*a-2*l-c,n=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,h){s(a,l,h*(l-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,h,d,v){let m=(a-r)/h-(l-r)/(h+d)+(l-a)/d,y=(l-a)/d-(c-a)/(d+v)+(c-l)/v;m*=d,y*=d,s(a,l,m,y)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var am=new q,om=new q,fd=new nf,pd=new nf,md=new nf,kc=class extends gi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(om.subVectors(s[0],s[1]).add(s[0]),h=om);let v=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(am.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=am),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,M=Math.pow(h.distanceToSquared(v),y),I=Math.pow(v.distanceToSquared(m),y),x=Math.pow(m.distanceToSquared(d),y);I<1e-4&&(I=1),M<1e-4&&(M=I),x<1e-4&&(x=I),fd.initNonuniformCatmullRom(h.x,v.x,m.x,d.x,M,I,x),pd.initNonuniformCatmullRom(h.y,v.y,m.y,d.y,M,I,x),md.initNonuniformCatmullRom(h.z,v.z,m.z,d.z,M,I,x)}else this.curveType==="catmullrom"&&(fd.initCatmullRom(h.x,v.x,m.x,d.x,this.tension),pd.initCatmullRom(h.y,v.y,m.y,d.y,this.tension),md.initCatmullRom(h.z,v.z,m.z,d.z,this.tension));return n.set(fd.calc(c),pd.calc(c),md.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,c=i*l;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*l+r*i+e}function K_(i,t){let e=1-i;return e*e*t}function Q_(i,t){return 2*(1-i)*i*t}function tx(i,t){return i*i*t}function vo(i,t,e,n){return K_(i,t)+Q_(i,e)+tx(i,n)}function ex(i,t){let e=1-i;return e*e*e*t}function nx(i,t){let e=1-i;return 3*e*e*i*t}function ix(i,t){return 3*(1-i)*i*i*t}function sx(i,t){return i*i*i*t}function yo(i,t,e,n,s){return ex(i,t)+nx(i,e)+ix(i,n)+sx(i,s)}var Oo=class extends gi{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(yo(t,s.x,r.x,a.x,l.x),yo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zc=class extends gi{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(yo(t,s.x,r.x,a.x,l.x),yo(t,s.y,r.y,a.y,l.y),yo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends gi{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$c=class extends gi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends gi{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vo(t,s.x,r.x,a.x),vo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends gi{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vo(t,s.x,r.x,a.x),vo(t,s.y,r.y,a.y),vo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(lm(l,c.x,h.x,d.x,v.x),lm(l,c.y,h.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},wd=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:kc,CubicBezierCurve:Oo,CubicBezierCurve3:zc,EllipseCurve:ya,LineCurve:Bo,LineCurve3:$c,QuadraticBezierCurve:ko,QuadraticBezierCurve3:Vc,SplineCurve:zo}),Hc=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){let d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wd[s.type]().fromJSON(s))}return this}},Er=class extends Hc{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Bo(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ko(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Oo(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,c){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,c),this}absellipse(t,e,n,s,r,a,l,c){let h=new ya(t,e,n,s,r,a,l,c);if(this.curves.length>0){let v=h.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sa=class extends Er{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Er().fromJSON(s))}return this}};function rx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ag(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,c,h;if(n&&(r=hx(i,t,r,e)),i.length>80*e){l=i[0],c=i[1];let d=l,v=c;for(let m=e;m<s;m+=e){let y=i[m],M=i[m+1];y<l&&(l=y),M<c&&(c=M),y>d&&(d=y),M>v&&(v=M)}h=Math.max(d-l,v-c),h=h!==0?32767/h:0}return $o(r,a,e,l,c,h,0),a}function ag(i,t,e,n,s){let r;if(s===Sx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=cm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=cm(a/n|0,i[a],i[a+1],r);return r&&Ma(r,r.next)&&(Ho(r),r=r.next),r}function Tr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ma(e,e.next)||vn(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $o(i,t,e,n,s,r,a){if(!i)return;!a&&r&&mx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?ox(i,n,s,r):ax(i)){t.push(c.i,i.i,h.i),Ho(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=lx(Tr(i),t),$o(i,t,e,n,s,r,2)):a===2&&cx(i,t,e,n,s,r):$o(Tr(i),t,e,n,s,r,1);break}}}function ax(i){let t=i.prev,e=i,n=i.next;if(vn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,c=e.y,h=n.y,d=Math.min(s,r,a),v=Math.min(l,c,h),m=Math.max(s,r,a),y=Math.max(l,c,h),M=n.next;for(;M!==t;){if(M.x>=d&&M.x<=m&&M.y>=v&&M.y<=y&&go(s,l,r,c,a,h,M.x,M.y)&&vn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ox(i,t,e,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let l=s.x,c=r.x,h=a.x,d=s.y,v=r.y,m=a.y,y=Math.min(l,c,h),M=Math.min(d,v,m),I=Math.max(l,c,h),x=Math.max(d,v,m),g=Ed(y,M,t,e,n),B=Ed(I,x,t,e,n),k=i.prevZ,R=i.nextZ;for(;k&&k.z>=g&&R&&R.z<=B;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&go(l,d,c,v,h,m,k.x,k.y)&&vn(k.prev,k,k.next)>=0||(k=k.prevZ,R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&go(l,d,c,v,h,m,R.x,R.y)&&vn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;k&&k.z>=g;){if(k.x>=y&&k.x<=I&&k.y>=M&&k.y<=x&&k!==s&&k!==a&&go(l,d,c,v,h,m,k.x,k.y)&&vn(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;R&&R.z<=B;){if(R.x>=y&&R.x<=I&&R.y>=M&&R.y<=x&&R!==s&&R!==a&&go(l,d,c,v,h,m,R.x,R.y)&&vn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function lx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ma(n,s)&&lg(n,e,e.next,s)&&Vo(n,s)&&Vo(s,n)&&(t.push(n.i,e.i,s.i),Ho(e),Ho(e.next),e=i=s),e=e.next}while(e!==i);return Tr(e)}function cx(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&xx(a,l)){let c=cg(a,l);a=Tr(a,a.next),c=Tr(c,c.next),$o(a,t,e,n,s,r,0),$o(c,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function hx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=ag(i,l,c,n,!1);h===h.next&&(h.steiner=!0),s.push(_x(h))}s.sort(ux);for(let r=0;r<s.length;r++)e=dx(s[r],e);return e}function ux(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dx(i,t){let e=fx(i,t);if(!e)return t;let n=cg(e,i);return Tr(n,n.next),Tr(e,e.next)}function fx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ma(i,e))return e;do{if(Ma(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,c=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&og(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Vo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&px(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function px(i,t){return vn(i.prev,i,t.prev)<0&&vn(t.next,i,i.next)<0}function mx(i,t,e,n){let s=i;do s.z===0&&(s.z=Ed(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gx(s)}function gx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ed(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _x(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function og(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function go(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&og(i,t,e,n,s,r,a,l)}function xx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vx(i,t)&&(Vo(i,t)&&Vo(t,i)&&yx(i,t)&&(vn(i.prev,i,t.prev)||vn(i,t.prev,t))||Ma(i,t)&&vn(i.prev,i,i.next)>0&&vn(t.prev,t,t.next)>0)}function vn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ma(i,t){return i.x===t.x&&i.y===t.y}function lg(i,t,e,n){let s=fc(vn(i,t,e)),r=fc(vn(i,t,n)),a=fc(vn(e,n,i)),l=fc(vn(e,n,t));return!!(s!==r&&a!==l||s===0&&dc(i,e,t)||r===0&&dc(i,n,t)||a===0&&dc(e,i,n)||l===0&&dc(e,t,n))}function dc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fc(i){return i>0?1:i<0?-1:0}function vx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vo(i,t){return vn(i.prev,i,i.next)<0?vn(i,t,i.next)>=0&&vn(i,i.prev,t)>=0:vn(i,t,i.prev)<0||vn(i,i.next,t)<0}function yx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cg(i,t){let e=Td(i.i,i.x,i.y),n=Td(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cm(i,t,e,n){let s=Td(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Td(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ad=class{static triangulate(t,e,n=2){return rx(t,e,n)}},vr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hm(t),um(n,t);let a=t.length;e.forEach(hm);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,um(n,e[c]);let l=Ad.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function hm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function um(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Go=class i extends Mn{constructor(t=new Sa([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,c=t.length;l<c;l++){let h=t[l];a(h)}this.setAttribute("position",new Sn(s,3)),this.setAttribute("uv",new Sn(r,2)),this.computeVertexNormals();function a(l){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,B=e.UVGenerator!==void 0?e.UVGenerator:Mx,k,R=!1,E,O,G,A;if(g){k=g.getSpacedPoints(d),R=!0,m=!1;let st=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(d,st),O=new q,G=new q,A=new q}m||(x=0,y=0,M=0,I=0);let F=l.extractPoints(h),H=F.shape,X=F.holes;if(!vr.isClockWise(H)){H=H.reverse();for(let st=0,Ct=X.length;st<Ct;st++){let $=X[st];vr.isClockWise($)&&(X[st]=$.reverse())}}function ot(st){let $=10000000000000001e-36,Rt=st[0];for(let Bt=1;Bt<=st.length;Bt++){let he=Bt%st.length,ue=st[he],de=ue.x-Rt.x,Se=ue.y-Rt.y,W=de*de+Se*Se,Ae=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(Rt.x),Math.abs(Rt.y)),we=$*Ae*Ae;if(W<=we){st.splice(he,1),Bt--;continue}Rt=ue}}ot(H),X.forEach(ot);let Z=X.length,et=H;for(let st=0;st<Z;st++){let Ct=X[st];H=H.concat(Ct)}function ut(st,Ct,$){return Ct||ye("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(Ct,$)}let pt=H.length;function At(st,Ct,$){let Rt,Bt,he,ue=st.x-Ct.x,de=st.y-Ct.y,Se=$.x-st.x,W=$.y-st.y,Ae=ue*ue+de*de,we=ue*W-de*Se;if(Math.abs(we)>Number.EPSILON){let U=Math.sqrt(Ae),w=Math.sqrt(Se*Se+W*W),tt=Ct.x-de/U,ct=Ct.y+ue/U,dt=$.x-W/w,yt=$.y+Se/w,kt=((dt-tt)*W-(yt-ct)*Se)/(ue*W-de*Se);Rt=tt+ue*kt-st.x,Bt=ct+de*kt-st.y;let gt=Rt*Rt+Bt*Bt;if(gt<=2)return new $t(Rt,Bt);he=Math.sqrt(gt/2)}else{let U=!1;ue>Number.EPSILON?Se>Number.EPSILON&&(U=!0):ue<-Number.EPSILON?Se<-Number.EPSILON&&(U=!0):Math.sign(de)===Math.sign(W)&&(U=!0),U?(Rt=-de,Bt=ue,he=Math.sqrt(Ae)):(Rt=ue,Bt=de,he=Math.sqrt(Ae/2))}return new $t(Rt/he,Bt/he)}let mt=[];for(let st=0,Ct=et.length,$=Ct-1,Rt=st+1;st<Ct;st++,$++,Rt++)$===Ct&&($=0),Rt===Ct&&(Rt=0),mt[st]=At(et[st],et[$],et[Rt]);let wt=[],Mt,Yt=mt.concat();for(let st=0,Ct=Z;st<Ct;st++){let $=X[st];Mt=[];for(let Rt=0,Bt=$.length,he=Bt-1,ue=Rt+1;Rt<Bt;Rt++,he++,ue++)he===Bt&&(he=0),ue===Bt&&(ue=0),Mt[Rt]=At($[Rt],$[he],$[ue]);wt.push(Mt),Yt=Yt.concat(Mt)}let ee;if(x===0)ee=vr.triangulateShape(et,X);else{let st=[],Ct=[];for(let $=0;$<x;$++){let Rt=$/x,Bt=y*Math.cos(Rt*Math.PI/2),he=M*Math.sin(Rt*Math.PI/2)+I;for(let ue=0,de=et.length;ue<de;ue++){let Se=ut(et[ue],mt[ue],he);Pt(Se.x,Se.y,-Bt),Rt===0&&st.push(Se)}for(let ue=0,de=Z;ue<de;ue++){let Se=X[ue];Mt=wt[ue];let W=[];for(let Ae=0,we=Se.length;Ae<we;Ae++){let U=ut(Se[Ae],Mt[Ae],he);Pt(U.x,U.y,-Bt),Rt===0&&W.push(U)}Rt===0&&Ct.push(W)}}ee=vr.triangulateShape(st,Ct)}let $e=ee.length,Pe=M+I;for(let st=0;st<pt;st++){let Ct=m?ut(H[st],Yt[st],Pe):H[st];R?(G.copy(E.normals[0]).multiplyScalar(Ct.x),O.copy(E.binormals[0]).multiplyScalar(Ct.y),A.copy(k[0]).add(G).add(O),Pt(A.x,A.y,A.z)):Pt(Ct.x,Ct.y,0)}for(let st=1;st<=d;st++)for(let Ct=0;Ct<pt;Ct++){let $=m?ut(H[Ct],Yt[Ct],Pe):H[Ct];R?(G.copy(E.normals[st]).multiplyScalar($.x),O.copy(E.binormals[st]).multiplyScalar($.y),A.copy(k[st]).add(G).add(O),Pt(A.x,A.y,A.z)):Pt($.x,$.y,v/d*st)}for(let st=x-1;st>=0;st--){let Ct=st/x,$=y*Math.cos(Ct*Math.PI/2),Rt=M*Math.sin(Ct*Math.PI/2)+I;for(let Bt=0,he=et.length;Bt<he;Bt++){let ue=ut(et[Bt],mt[Bt],Rt);Pt(ue.x,ue.y,v+$)}for(let Bt=0,he=X.length;Bt<he;Bt++){let ue=X[Bt];Mt=wt[Bt];for(let de=0,Se=ue.length;de<Se;de++){let W=ut(ue[de],Mt[de],Rt);R?Pt(W.x,W.y+k[d-1].y,k[d-1].x+$):Pt(W.x,W.y,v+$)}}}Oe(),_t();function Oe(){let st=s.length/3;if(m){let Ct=0,$=pt*Ct;for(let Rt=0;Rt<$e;Rt++){let Bt=ee[Rt];ae(Bt[2]+$,Bt[1]+$,Bt[0]+$)}Ct=d+x*2,$=pt*Ct;for(let Rt=0;Rt<$e;Rt++){let Bt=ee[Rt];ae(Bt[0]+$,Bt[1]+$,Bt[2]+$)}}else{for(let Ct=0;Ct<$e;Ct++){let $=ee[Ct];ae($[2],$[1],$[0])}for(let Ct=0;Ct<$e;Ct++){let $=ee[Ct];ae($[0]+pt*d,$[1]+pt*d,$[2]+pt*d)}}n.addGroup(st,s.length/3-st,0)}function _t(){let st=s.length/3,Ct=0;vt(et,Ct),Ct+=et.length;for(let $=0,Rt=X.length;$<Rt;$++){let Bt=X[$];vt(Bt,Ct),Ct+=Bt.length}n.addGroup(st,s.length/3-st,1)}function vt(st,Ct){let $=st.length;for(;--$>=0;){let Rt=$,Bt=$-1;Bt<0&&(Bt=st.length-1);for(let he=0,ue=d+x*2;he<ue;he++){let de=pt*he,Se=pt*(he+1),W=Ct+Rt+de,Ae=Ct+Bt+de,we=Ct+Bt+Se,U=Ct+Rt+Se;Jt(W,Ae,we,U)}}}function Pt(st,Ct,$){c.push(st),c.push(Ct),c.push($)}function ae(st,Ct,$){me(st),me(Ct),me($);let Rt=s.length/3,Bt=B.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);se(Bt[0]),se(Bt[1]),se(Bt[2])}function Jt(st,Ct,$,Rt){me(st),me(Ct),me(Rt),me(Ct),me($),me(Rt);let Bt=s.length/3,he=B.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);se(he[0]),se(he[1]),se(he[3]),se(he[1]),se(he[2]),se(he[3])}function me(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function se(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wd[s.type]().fromJSON(s)),new i(n,t.options)}},Mx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new $t(r,a),new $t(l,c),new $t(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],v=t[n*3+2],m=t[s*3],y=t[s*3+1],M=t[s*3+2],I=t[r*3],x=t[r*3+1],g=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new $t(a,1-c),new $t(h,1-v),new $t(m,1-M),new $t(I,1-g)]:[new $t(l,1-c),new $t(d,1-v),new $t(y,1-M),new $t(x,1-g)]}};function bx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wo=class i extends Mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,d=c+1,v=t/l,m=e/c,y=[],M=[],I=[],x=[];for(let g=0;g<d;g++){let B=g*m-a;for(let k=0;k<h;k++){let R=k*v-r;M.push(R,-B,0),I.push(0,0,1),x.push(k/l),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let B=0;B<l;B++){let k=B+h*g,R=B+h*(g+1),E=B+1+h*(g+1),O=B+1+h*g;y.push(k,R,O),y.push(R,E,O)}this.setIndex(y),this.setAttribute("position",new Sn(M,3)),this.setAttribute("normal",new Sn(I,3)),this.setAttribute("uv",new Sn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Xo=class extends Mn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new q,r=new q;if(t.index!==null){let a=t.attributes.position,l=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=c.length;h<d;++h){let v=c[h],m=v.start,y=v.count;for(let M=m,I=m+y;M<I;M+=3)for(let x=0;x<3;x++){let g=l.getX(M+x),B=l.getX(M+(x+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,B),dm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){let d=3*l+h,v=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),dm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function dm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Rr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fm(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xn(i){let t={};for(let e=0;e<i.length;e++){let n=Rr(i[e]);for(let s in n)t[s]=n[s]}return t}function fm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}var ul={clone:Rr,merge:Xn},Ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ex,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=wx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gc=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qo=class extends Qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.combine=ah,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wc=class extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xc=class extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ra(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qc=class extends $s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yd,endingEnd:yd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Sd:r=t,l=2*e-n;break;case Md:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sd:a=t,c=2*n-e;break;case Md:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this._offsetPrev,v=this._offsetNext,m=this._weightPrev,y=this._weightNext,M=(n-e)/(s-e),I=M*M,x=I*M,g=-m*x+2*m*I-m*M,B=(1+m)*x+(-1.5-2*m)*I+(-.5+m)*M+1,k=(-1-y)*x+(1.5+y)*I+.5*M,R=y*x-y*I;for(let E=0;E!==l;++E)r[E]=g*a[d+E]+B*a[h+E]+k*a[c+E]+R*a[v+E];return r}},Yc=class extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=(n-e)/(s-e),v=1-d;for(let m=0;m!==l;++m)r[m]=a[h+m]*v+a[c+m]*d;return r}},Zc=class extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jc=class extends $s{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let M=(n-e)/(s-e),I=1-M;for(let x=0;x!==l;++x)r[x]=a[h+x]*I+a[c+x]*M;return r}let m=l*2,y=t-1;for(let M=0;M!==l;++M){let I=a[h+M],x=a[c+M],g=y*m+M*2,B=v[g],k=v[g+1],R=t*m+M*2,E=d[R],O=d[R+1],G=Cx(n,e,B,E,s);r[M]=hg(G,I,k,O,x)}return r}};function hg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ax(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Cx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=hg(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Ax(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var _i=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),gd(t.settings)&&(n.settings={inTangents:ra(t.settings.inTangents,Array),outTangents:ra(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case Cc:e=this.InterpolantFactoryMethodLinear;break;case _c:e=this.InterpolantFactoryMethodSmooth;break;case vd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return vd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;gd(this.settings)&&(pm(this.settings.inTangents,t),pm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){ye("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){ye("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&g_(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){ye("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_c,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)c=!0;else{let v=l*n,m=v-n,y=v+n;for(let M=0;M!==n;++M){let I=e[v+M];if(I!==e[m+M]||I!==e[y+M]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let v=l*n,m=a*n;for(let y=0;y!==n;++y)e[m+y]=e[v+y]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,gd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Cc;var Vs=class extends _i{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=So;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}};jc.prototype.ValueTypeName="color";var Kc=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}};Kc.prototype.ValueTypeName="number";var Qc=class extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)Ki.slerpFlat(r,0,a,h-l,a,h,c);return r}},Yo=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends _i{constructor(t,e,n){super(t,e,n)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=So;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}};th.prototype.ValueTypeName="vector";var eh=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,v){return h.push(d,v),this},this.removeHandler=function(d){let v=h.indexOf(d);return v!==-1&&h.splice(v,2),this},this.getHandler=function(d){for(let v=0,m=h.length;v<m;v+=2){let y=h[v],M=h[v+1];if(y.global&&(y.lastIndex=0),y.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ug=new eh,nh=class{constructor(t){this.manager=t!==void 0?t:ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zo=class extends Dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Jo=class extends Zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_d=new ze,mm=new q,gm=new q,ih=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mm.setFromMatrixPosition(t.matrixWorld),e.position.copy(mm),gm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_d.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_d,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===da||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(_d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pc=new q,mc=new Ki,qi=new q,jo=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pc,mc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pc,mc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new q,_m=new $t,xm=new $t,Wn=class extends jo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,e){return this.getViewBounds(t,_m,xm),e.subVectors(xm,_m)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_o*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ba=class extends jo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cd=class extends ih{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Cd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qo=class extends Mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var aa=-90,oa=1,sh=class extends Dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(aa,oa,t,e);s.layers=this.layers,this.add(s);let r=new Wn(aa,oa,t,e);r.layers=this.layers,this.add(r);let a=new Wn(aa,oa,t,e);a.layers=this.layers,this.add(a);let l=new Wn(aa,oa,t,e);l.layers=this.layers,this.add(l);let c=new Wn(aa,oa,t,e);c.layers=this.layers,this.add(c);let h=new Wn(aa,oa,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,d]=this.children,v=t.getRenderTarget(),m=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,m,y),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},rh=class extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rf="\\[\\]\\.:\\/",Rx=new RegExp("["+rf+"]","g"),af="[^"+rf+"]",Ix="[^"+rf.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",af),Lx=/(WCOD+)?/.source.replace("WCOD",Ix),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",af),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",af),Ux=new RegExp("^"+Px+Lx+Dx+Nx+"$"),Fx=["material","materials","bones","map"],Rd=class{constructor(t,e,n){let s=n||mn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},mn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rx,"")}static parseTrackName(t){let e=Ux.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=Rd;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jb=new Float32Array(1);var Gs=class extends Lc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var vm=new ze,tl=class{constructor(t,e,n=0,s=1/0){this.ray=new Sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vm),this}intersectObject(t,e=!0,n=[]){return Id(t,this,n,e),n.sort(ym),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Id(t[s],this,n,e);return n.sort(ym),n}};function ym(i,t){return i.distance-t.distance}function Id(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Id(r[a],t,e,!0)}}var Pd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Sm=new q,gc=new q,la=new q,ca=new q,xd=new q,Ox=new q,Bx=new q,el=class{constructor(t=new q,e=new q){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Sm.subVectors(t,this.start),gc.subVectors(this.end,this.start);let n=gc.dot(gc);if(n===0)return 0;let r=gc.dot(Sm)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Ox,n=Bx){let s=10000000000000001e-32,r,a,l=this.start,c=t.start,h=this.end,d=t.end;la.subVectors(h,l),ca.subVectors(d,c),xd.subVectors(l,c);let v=la.dot(la),m=ca.dot(ca),y=ca.dot(xd);if(v<=s&&m<=s)return e.copy(l),n.copy(c),e.sub(n),e.dot(e);if(v<=s)r=0,a=y/m,a=Re(a,0,1);else{let M=la.dot(xd);if(m<=s)a=0,r=Re(-M/v,0,1);else{let I=la.dot(ca),x=v*m-I*I;x!==0?r=Re((I*y-M*m)/x,0,1):r=0,a=(I*r+y)/m,a<0?(a=0,r=Re(-M/v,0,1)):a>1&&(a=1,r=Re((I-M)/v,0,1))}}return e.copy(l).addScaledVector(la,r),n.copy(c).addScaledVector(ca,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function of(i,t,e,n){let s=kx(n);switch(e){case Jd:return i*t;case fh:return i*t/s.components*s.byteLength;case ph:return i*t/s.components*s.byteLength;case Zs:return i*t*2/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case jd:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case gh:return i*t*4/s.components*s.byteLength;case rl:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ol:case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xh:case yh:return Math.max(i,16)*Math.max(t,8)/4;case _h:case vh:return Math.max(i,8)*Math.max(t,8)/2;case Sh:case Mh:case wh:case Eh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bh:case cl:case Th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $h:case Vh:case Hh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gh:case Wh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hl:case Xh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kx(i){switch(i){case ci:case Xd:return{byteLength:1,components:1};case Ta:case qd:case Hi:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case Vi:case hh:case Ti:return{byteLength:4,components:1};case Yd:case Zd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $x(i){let t=new WeakMap;function e(l,c){let h=l.array,d=l.usage,v=h.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,c,h){let d=c.array,v=c.updateRanges;if(i.bindBuffer(h,l),v.length===0)i.bufferSubData(h,0,d);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){let M=v[m],I=v[y];I.start<=M.start+M.count+1?M.count=Math.max(M.count,I.start+I.count-M.start):(++m,v[m]=I)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){let I=v[y];i.bufferSubData(h,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
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
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ev=`#ifdef USE_IRIDESCENCE
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
#endif`,nv=`#ifdef USE_BUMPMAP
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uv=`#define PI 3.141592653589793
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
} // validated`,dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fv=`vec3 transformedNormal = objectNormal;
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
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
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
#endif`,zv=`uniform sampler2D dfgLUT;
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
}`,$v=`
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,Qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
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
#endif`,ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
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
}`,Zy=`#if DEPTH_PACKING == 3200
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
}`,Jy=`#define DISTANCE
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
}`,jy=`#define DISTANCE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`uniform float scale;
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
}`,eS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 diffuse;
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
}`,sS=`#define LAMBERT
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
}`,rS=`#define LAMBERT
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
}`,aS=`#define MATCAP
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
}`,oS=`#define MATCAP
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
}`,lS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,hS=`#define PHONG
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
}`,uS=`#define PHONG
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
}`,dS=`#define STANDARD
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
}`,fS=`#define STANDARD
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
}`,pS=`#define TOON
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
}`,mS=`#define TOON
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
}`,gS=`uniform float size;
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
}`,_S=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,yS=`uniform float rotation;
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
}`,SS=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Vx,alphahash_pars_fragment:Hx,alphamap_fragment:Gx,alphamap_pars_fragment:Wx,alphatest_fragment:Xx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:Zx,batching_pars_vertex:Jx,batching_vertex:jx,begin_vertex:Kx,beginnormal_vertex:Qx,bsdfs:tv,iridescence_fragment:ev,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:sv,clipping_planes_pars_vertex:rv,clipping_planes_vertex:av,color_fragment:ov,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:hv,common:uv,cube_uv_reflection_fragment:dv,defaultnormal_vertex:fv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:gv,emissivemap_pars_fragment:_v,colorspace_fragment:xv,colorspace_pars_fragment:vv,envmap_fragment:yv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Mv,envmap_pars_vertex:bv,envmap_physical_pars_fragment:Nv,envmap_vertex:wv,fog_vertex:Ev,fog_pars_vertex:Tv,fog_fragment:Av,fog_pars_fragment:Cv,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Dv,lights_toon_fragment:Uv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Ov,lights_phong_pars_fragment:Bv,lights_physical_fragment:kv,lights_physical_pars_fragment:zv,lights_fragment_begin:$v,lights_fragment_maps:Vv,lights_fragment_end:Hv,lightprobes_pars_fragment:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:qv,logdepthbuf_vertex:Yv,map_fragment:Zv,map_pars_fragment:Jv,map_particle_fragment:jv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Qv,metalnessmap_pars_fragment:ty,morphinstance_vertex:ey,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:sy,morphtarget_vertex:ry,normal_fragment_begin:ay,normal_fragment_maps:oy,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:hy,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:_y,premultiplied_alpha_fragment:xy,project_vertex:vy,dithering_fragment:yy,dithering_pars_fragment:Sy,roughnessmap_fragment:My,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ey,shadowmap_vertex:Ty,shadowmask_pars_fragment:Ay,skinbase_vertex:Cy,skinning_pars_vertex:Ry,skinning_vertex:Iy,skinnormal_vertex:Py,specularmap_fragment:Ly,specularmap_pars_fragment:Dy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Uy,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:zy,worldpos_vertex:$y,background_vert:Vy,background_frag:Hy,backgroundCube_vert:Gy,backgroundCube_frag:Wy,cube_vert:Xy,cube_frag:qy,depth_vert:Yy,depth_frag:Zy,distance_vert:Jy,distance_frag:jy,equirect_vert:Ky,equirect_frag:Qy,linedashed_vert:tS,linedashed_frag:eS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:sS,meshlambert_frag:rS,meshmatcap_vert:aS,meshmatcap_frag:oS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:hS,meshphong_frag:uS,meshphysical_vert:dS,meshphysical_frag:fS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:gS,points_frag:_S,shadow_vert:xS,shadow_frag:vS,sprite_vert:yS,sprite_frag:SS},Xt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Qn={basic:{uniforms:Xn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Xn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Xn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Xn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Xn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Xn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Xn([Xt.points,Xt.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Xn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Xn([Xt.common,Xt.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Xn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Xn([Xt.sprite,Xt.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Xn([Xt.common,Xt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Xn([Xt.lights,Xt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Qn.physical={uniforms:Xn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Jh={r:0,b:0,g:0},MS=new ze,Ng=new Te;Ng.set(-1,0,0,0,1,0,0,0,1);function bS(i,t,e,n,s,r){let a=new _e(0),l=s===!0?0:1,c,h,d=null,v=0,m=null;function y(B){let k=B.isScene===!0?B.background:null;if(k&&k.isTexture){let R=B.backgroundBlurriness>0;k=t.get(k,R)}return k}function M(B){let k=!1,R=y(B);R===null?x(a,l):R&&R.isColor&&(x(R,1),k=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(B,k){let R=y(k);R&&(R.isCubeTexture||R.mapping===il)?(h===void 0&&(h=new Nn(new va(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Rr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(MS.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ng),h.material.toneMapped=Be.getTransfer(R.colorSpace)!==en,(d!==R||v!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,m=i.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Nn(new Wo(2,2),new Un({name:"BackgroundMaterial",uniforms:Rr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,c.material.toneMapped=Be.getTransfer(R.colorSpace)!==en,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,v=R.version,m=i.toneMapping),c.layers.enableAll(),B.unshift(c,c.geometry,c.material,0,0,null))}function x(B,k){B.getRGB(Jh,sf(i)),e.buffers.color.setClear(Jh.r,Jh.g,Jh.b,k,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(B,k=1){a.set(B),l=k,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(B){l=B,x(a,l)},render:M,addToRenderList:I,dispose:g}}function wS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,a=!1;function l(X,at,ot,Z,et){let ut=!1,pt=v(X,Z,ot,at);r!==pt&&(r=pt,h(r.object)),ut=y(X,Z,ot,et),ut&&M(X,Z,ot,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(ut||a)&&(a=!1,R(X,at,ot,Z),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return i.createVertexArray()}function h(X){return i.bindVertexArray(X)}function d(X){return i.deleteVertexArray(X)}function v(X,at,ot,Z){let et=Z.wireframe===!0,ut=n[at.id];ut===void 0&&(ut={},n[at.id]=ut);let pt=X.isInstancedMesh===!0?X.id:0,At=ut[pt];At===void 0&&(At={},ut[pt]=At);let mt=At[ot.id];mt===void 0&&(mt={},At[ot.id]=mt);let wt=mt[et];return wt===void 0&&(wt=m(c()),mt[et]=wt),wt}function m(X){let at=[],ot=[],Z=[];for(let et=0;et<e;et++)at[et]=0,ot[et]=0,Z[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:ot,attributeDivisors:Z,object:X,attributes:{},index:null}}function y(X,at,ot,Z){let et=r.attributes,ut=at.attributes,pt=0,At=ot.getAttributes();for(let mt in At)if(At[mt].location>=0){let Mt=et[mt],Yt=ut[mt];if(Yt===void 0&&(mt==="instanceMatrix"&&X.instanceMatrix&&(Yt=X.instanceMatrix),mt==="instanceColor"&&X.instanceColor&&(Yt=X.instanceColor)),Mt===void 0||Mt.attribute!==Yt||Yt&&Mt.data!==Yt.data)return!0;pt++}return r.attributesNum!==pt||r.index!==Z}function M(X,at,ot,Z){let et={},ut=at.attributes,pt=0,At=ot.getAttributes();for(let mt in At)if(At[mt].location>=0){let Mt=ut[mt];Mt===void 0&&(mt==="instanceMatrix"&&X.instanceMatrix&&(Mt=X.instanceMatrix),mt==="instanceColor"&&X.instanceColor&&(Mt=X.instanceColor));let Yt={};Yt.attribute=Mt,Mt&&Mt.data&&(Yt.data=Mt.data),et[mt]=Yt,pt++}r.attributes=et,r.attributesNum=pt,r.index=Z}function I(){let X=r.newAttributes;for(let at=0,ot=X.length;at<ot;at++)X[at]=0}function x(X){g(X,0)}function g(X,at){let ot=r.newAttributes,Z=r.enabledAttributes,et=r.attributeDivisors;ot[X]=1,Z[X]===0&&(i.enableVertexAttribArray(X),Z[X]=1),et[X]!==at&&(i.vertexAttribDivisor(X,at),et[X]=at)}function B(){let X=r.newAttributes,at=r.enabledAttributes;for(let ot=0,Z=at.length;ot<Z;ot++)at[ot]!==X[ot]&&(i.disableVertexAttribArray(ot),at[ot]=0)}function k(X,at,ot,Z,et,ut,pt){pt===!0?i.vertexAttribIPointer(X,at,ot,et,ut):i.vertexAttribPointer(X,at,ot,Z,et,ut)}function R(X,at,ot,Z){I();let et=Z.attributes,ut=ot.getAttributes(),pt=at.defaultAttributeValues;for(let At in ut){let mt=ut[At];if(mt.location>=0){let wt=et[At];if(wt===void 0&&(At==="instanceMatrix"&&X.instanceMatrix&&(wt=X.instanceMatrix),At==="instanceColor"&&X.instanceColor&&(wt=X.instanceColor)),wt!==void 0){let Mt=wt.normalized,Yt=wt.itemSize,ee=t.get(wt);if(ee===void 0)continue;let $e=ee.buffer,Pe=ee.type,Oe=ee.bytesPerElement,_t=Pe===i.INT||Pe===i.UNSIGNED_INT||wt.gpuType===hh;if(wt.isInterleavedBufferAttribute){let vt=wt.data,Pt=vt.stride,ae=wt.offset;if(vt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<mt.locationSize;Jt++)g(mt.location+Jt,vt.meshPerAttribute);X.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Jt=0;Jt<mt.locationSize;Jt++)x(mt.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Jt=0;Jt<mt.locationSize;Jt++)k(mt.location+Jt,Yt/mt.locationSize,Pe,Mt,Pt*Oe,(ae+Yt/mt.locationSize*Jt)*Oe,_t)}else{if(wt.isInstancedBufferAttribute){for(let vt=0;vt<mt.locationSize;vt++)g(mt.location+vt,wt.meshPerAttribute);X.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let vt=0;vt<mt.locationSize;vt++)x(mt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let vt=0;vt<mt.locationSize;vt++)k(mt.location+vt,Yt/mt.locationSize,Pe,Mt,Yt*Oe,Yt/mt.locationSize*vt*Oe,_t)}}else if(pt!==void 0){let Mt=pt[At];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(mt.location,Mt);break;case 3:i.vertexAttrib3fv(mt.location,Mt);break;case 4:i.vertexAttrib4fv(mt.location,Mt);break;default:i.vertexAttrib1fv(mt.location,Mt)}}}}B()}function E(){F();for(let X in n){let at=n[X];for(let ot in at){let Z=at[ot];for(let et in Z){let ut=Z[et];for(let pt in ut)d(ut[pt].object),delete ut[pt];delete Z[et]}}delete n[X]}}function O(X){if(n[X.id]===void 0)return;let at=n[X.id];for(let ot in at){let Z=at[ot];for(let et in Z){let ut=Z[et];for(let pt in ut)d(ut[pt].object),delete ut[pt];delete Z[et]}}delete n[X.id]}function G(X){for(let at in n){let ot=n[at];for(let Z in ot){let et=ot[Z];if(et[X.id]===void 0)continue;let ut=et[X.id];for(let pt in ut)d(ut[pt].object),delete ut[pt];delete et[X.id]}}}function A(X){for(let at in n){let ot=n[at],Z=X.isInstancedMesh===!0?X.id:0,et=ot[Z];if(et!==void 0){for(let ut in et){let pt=et[ut];for(let At in pt)d(pt[At].object),delete pt[At];delete et[ut]}delete ot[Z],Object.keys(ot).length===0&&delete n[at]}}}function F(){H(),a=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:x,disableUnusedAttributes:B}}function ES(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function l(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function TS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==Ai&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(G){let A=G===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ci&&G!==Ti&&!A&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=c(h);d!==h&&(ve("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let v=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:B,maxVaryings:k,maxFragmentUniforms:R,maxSamples:E,samples:O}}function AS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fi,l=new Te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){let y=v.length!==0||m||n!==0||s;return s=m,n=v.length,y},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,m){e=d(v,m,0)},this.setState=function(v,m,y){let M=v.clippingPlanes,I=v.clipIntersection,x=v.clipShadows,g=i.get(v);if(!s||M===null||M.length===0||r&&!x)r?d(null):h();else{let B=r?0:n,k=B*4,R=g.clippingState||null;c.value=R,R=d(M,m,k,y);for(let E=0;E!==k;++E)R[E]=e[E];g.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=B}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,m,y,M){let I=v!==null?v.length:0,x=null;if(I!==0){if(x=c.value,M!==!0||x===null){let g=y+I*4,B=m.matrixWorldInverse;l.getNormalMatrix(B),(x===null||x.length<g)&&(x=new Float32Array(g));for(let k=0,R=y;k!==I;++k,R+=4)a.copy(v[k]).applyMatrix4(B,l),a.normal.toArray(x,R),x[R+3]=a.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,x}}var Ra=4,CS=6,RS=20,IS=256,dl=new ba,dg=new _e,lf=null,cf=0,hf=0,uf=!1,PS=new q,Ir=new q,Kh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=PS}=r;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lf,cf,hf),this._renderer.xr.enabled=uf,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Hi,format:Ai,colorSpace:Mo,depthBuffer:!1},s=fg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=LS(r)),this._blurMaterial=NS(r,t,e),this._ggxMaterial=DS(r,t,e)}return s}_compileMaterial(t){let e=new Nn(new Mn,t);this._renderer.compile(e,dl)}_sceneToCubeUV(t,e,n,s,r){let c=new Wn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(dg),v.toneMapping=$i,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new va,new Mr({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,x=I.material,g=!1,B=t.background;B?B.isColor&&(x.color.copy(B),t.background=null,g=!0):(x.color.copy(dg),g=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[k],r.y,r.z)):R===1?(c.up.set(0,0,h[k]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[k],r.z)):(c.up.set(0,h[k],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[k]));let E=this._cubeSize;Ca(s,R*E,k>2?E:0,E,E),v.setRenderTarget(s),g&&v.render(I,c),v.render(t,c)}v.toneMapping=y,v.autoClear=m,t.background=B}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xs||t.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Ca(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,dl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-d*d),m=h*1.25,y=v*m,{_lodMax:M}=this,I=this._sizeLods[n],x=3*I*(n>M-Ra?n-M+Ra:0),g=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=M-e,Ca(r,x,g,3*I,2*I),s.setRenderTarget(r),s.render(l,dl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,Ca(t,x,g,3*I,2*I),s.setRenderTarget(t),s.render(l,dl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-Ra?s-this._lodMax+Ra:0),m=4*(this._cubeSize-d);Ca(e,v,m,3*d,2*d),a.setRenderTarget(e),a.render(c,dl)}};function LS(i){let t=[],e=[],n=i,s=i-Ra+1+CS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],v=6,m=6,y=3,M=new Float32Array(y*m*v),I=new Float32Array(y*m*v);for(let g=0;g<v;g++){let B=g%3*2/3-1,k=g>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];M.set(R,y*m*g);for(let E=0;E<m;E++){let O=d[E*2]*2-1,G=d[E*2+1]*2-1;g===0?Ir.set(1,G,O):g===1?Ir.set(-O,1,-G):g===2?Ir.set(-O,G,1):g===3?Ir.set(-1,G,-O):g===4?Ir.set(-O,-1,G):Ir.set(O,G,-1),Ir.toArray(I,(g*m+E)*y)}}let x=new Mn;x.setAttribute("position",new an(M,y)),x.setAttribute("outputDirection",new an(I,y)),e.push(new Nn(x,null)),n>Ra&&n--}return{lodMeshes:e,sizeLods:t}}function fg(i,t,e){let n=new oi(i,t,e);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function DS(i,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function NS(i,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:RS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function pg(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function mg(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qh=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new No(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new va(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:es});r.uniforms.tEquirect.value=e;let a=new Nn(s,r),l=e.minFilter;return e.minFilter===qs&&(e.minFilter=Bn),new sh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function US(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,y=!1){return m==null?null:y?a(m):r(m)}function r(m){if(m&&m.isTexture){let y=m.mapping;if(y===oh||y===lh)if(t.has(m)){let M=t.get(m).texture;return l(M,m.mapping)}else{let M=m.image;if(M&&M.height>0){let I=new Qh(M.height);return I.fromEquirectangularTexture(i,m),t.set(m,I),m.addEventListener("dispose",h),l(I.texture,m.mapping)}else return null}}return m}function a(m){if(m&&m.isTexture){let y=m.mapping,M=y===oh||y===lh,I=y===Xs||y===Cr;if(M||I){let x=e.get(m),g=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==g)return n===null&&(n=new Kh(i)),x=M?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),x.texture;if(x!==void 0)return x.texture;{let B=m.image;return M&&B&&B.height>0||I&&B&&c(B)?(n===null&&(n=new Kh(i)),x=M?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),m.addEventListener("dispose",d),x.texture):null}}}return m}function l(m,y){return y===oh?m.mapping=Xs:y===lh&&(m.mapping=Cr),m}function c(m){let y=0,M=6;for(let I=0;I<M;I++)m[I]!==void 0&&y++;return y===M}function h(m){let y=m.target;y.removeEventListener("dispose",h);let M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function d(m){let y=m.target;y.removeEventListener("dispose",d);let M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function FS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yr("WebGLRenderer: "+n+" extension not supported."),s}}}function OS(i,t,e,n){let s={},r=new WeakMap;function a(v){let m=v.target;m.index!==null&&t.remove(m.index);for(let M in m.attributes)t.remove(m.attributes[M]);m.removeEventListener("dispose",a),delete s[m.id];let y=r.get(m);y&&(t.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(v,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,e.memory.geometries++),m}function c(v){let m=v.attributes;for(let y in m)t.update(m[y],i.ARRAY_BUFFER)}function h(v){let m=[],y=v.index,M=v.attributes.position,I=0;if(M===void 0)return;if(y!==null){let B=y.array;I=y.version;for(let k=0,R=B.length;k<R;k+=3){let E=B[k+0],O=B[k+1],G=B[k+2];m.push(E,O,O,G,G,E)}}else{let B=M.array;I=M.version;for(let k=0,R=B.length/3-1;k<R;k+=3){let E=k+0,O=k+1,G=k+2;m.push(E,O,O,G,G,E)}}let x=new(M.count>=65535?Ro:Co)(m,1);x.version=I;let g=r.get(v);g&&t.remove(g),r.set(v,x)}function d(v){let m=r.get(v);if(m){let y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return r.get(v)}return{get:l,update:c,getWireframeAttribute:d}}function BS(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function c(v,m){i.drawElements(n,m,r,v*a),e.update(m,n,1)}function h(v,m,y){y!==0&&(i.drawElementsInstanced(n,m,r,v*a,y),e.update(m,n,y))}function d(v,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,v,0,y);let I=0;for(let x=0;x<y;x++)I+=m[x];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function kS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zS(i,t,e){let n=new WeakMap,s=new nn;function r(a,l,c){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,m=n.get(l);if(m===void 0||m.count!==v){let F=function(){G.dispose(),n.delete(l),l.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();let y=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],B=l.morphAttributes.color||[],k=0;y===!0&&(k=1),M===!0&&(k=2),I===!0&&(k=3);let R=l.attributes.position.count*k,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let O=new Float32Array(R*E*4*v),G=new To(O,R,E,v);G.type=Ti,G.needsUpdate=!0;let A=k*4;for(let H=0;H<v;H++){let X=x[H],at=g[H],ot=B[H],Z=R*E*4*H;for(let et=0;et<X.count;et++){let ut=et*A;y===!0&&(s.fromBufferAttribute(X,et),O[Z+ut+0]=s.x,O[Z+ut+1]=s.y,O[Z+ut+2]=s.z,O[Z+ut+3]=0),M===!0&&(s.fromBufferAttribute(at,et),O[Z+ut+4]=s.x,O[Z+ut+5]=s.y,O[Z+ut+6]=s.z,O[Z+ut+7]=0),I===!0&&(s.fromBufferAttribute(ot,et),O[Z+ut+8]=s.x,O[Z+ut+9]=s.y,O[Z+ut+10]=s.z,O[Z+ut+11]=ot.itemSize===4?s.w:1)}}m={count:v,texture:G,size:new $t(R,E)},n.set(l,m),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let M=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function $S(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,v=h.geometry,m=t.get(h,v);if(r.get(m)!==d&&(t.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==d&&(y.update(),r.set(y,d))}return m}function l(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var VS={[Bd]:"LINEAR_TONE_MAPPING",[kd]:"REINHARD_TONE_MAPPING",[zd]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[Hd]:"AGX_TONE_MAPPING",[Gd]:"NEUTRAL_TONE_MAPPING",[Vd]:"CUSTOM_TONE_MAPPING"};function HS(i,t,e,n,s,r){let a=new oi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new Mn;h.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Sn([0,2,0,0,2,0],2));let d=new Gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Nn(h,d),m=new ba(-1,1,1,-1,0,1),y=null,M=null,I=!1,x,g=null,B=[],k=!1;this.setSize=function(R,E){a.setSize(R,E),l!==null&&l.setSize(R,E),c!==null&&c.setSize(R,E);for(let O=0;O<B.length;O++){let G=B[O];G.setSize&&G.setSize(R,E)}},this.setEffects=function(R){B=R,k=B.length>0&&B[0].isRenderPass===!0;let E=a.width,O=a.height;B.length>0&&l===null&&(l=new oi(E,O,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),c=new oi(E,O,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<B.length;G++){let A=B[G];A.setSize&&A.setSize(E,O)}},this.begin=function(R,E){if(I||R.toneMapping===$i&&B.length===0)return!1;if(g=E,E!==null){let O=E.width,G=E.height;(a.width!==O||a.height!==G)&&this.setSize(O,G)}return k===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=$i,!0},this.hasRenderPass=function(){return k},this.end=function(R,E){R.toneMapping=x,I=!0;let O=a,G=l;for(let A=0;A<B.length;A++){let F=B[A];F.enabled!==!1&&(F.render(R,G,O,E),F.needsSwap!==!1&&(O=G,G=G===l?c:l))}if(y!==R.outputColorSpace||M!==R.toneMapping){y=R.outputColorSpace,M=R.toneMapping,d.defines={},Be.getTransfer(y)===en&&(d.defines.SRGB_TRANSFER="");let A=VS[M];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(g),R.render(v,m),g=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Ug=new ai,pf=new zs(1,1),Fg=new To,Og=new Pc,Bg=new No,gg=[],_g=[],xg=new Float32Array(16),vg=new Float32Array(9),yg=new Float32Array(4);function Pa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gg[s];if(r===void 0&&(r=new Float32Array(s),gg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function An(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nu(i,t){let e=_g[t];e===void 0&&(e=new Int32Array(t),_g[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function GS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function WS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tn(e,t))return;i.uniform2fv(this.addr,t),An(e,t)}}function XS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Tn(e,t))return;i.uniform3fv(this.addr,t),An(e,t)}}function qS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tn(e,t))return;i.uniform4fv(this.addr,t),An(e,t)}}function YS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(Tn(e,n))return;yg.set(n),i.uniformMatrix2fv(this.addr,!1,yg),An(e,n)}}function ZS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(Tn(e,n))return;vg.set(n),i.uniformMatrix3fv(this.addr,!1,vg),An(e,n)}}function JS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(Tn(e,n))return;xg.set(n),i.uniformMatrix4fv(this.addr,!1,xg),An(e,n)}}function jS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function KS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tn(e,t))return;i.uniform2iv(this.addr,t),An(e,t)}}function QS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Tn(e,t))return;i.uniform3iv(this.addr,t),An(e,t)}}function tM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tn(e,t))return;i.uniform4iv(this.addr,t),An(e,t)}}function eM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tn(e,t))return;i.uniform2uiv(this.addr,t),An(e,t)}}function iM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Tn(e,t))return;i.uniform3uiv(this.addr,t),An(e,t)}}function sM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tn(e,t))return;i.uniform4uiv(this.addr,t),An(e,t)}}function rM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pf.compareFunction=e.isReversedDepthBuffer()?Zh:Yh,r=pf):r=Ug,e.setTexture2D(t||r,s)}function aM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Og,s)}function oM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bg,s)}function lM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fg,s)}function cM(i){switch(i){case 5126:return GS;case 35664:return WS;case 35665:return XS;case 35666:return qS;case 35674:return YS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return jS;case 35667:case 35671:return KS;case 35668:case 35672:return QS;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return lM}}function hM(i,t){i.uniform1fv(this.addr,t)}function uM(i,t){let e=Pa(t,this.size,2);i.uniform2fv(this.addr,e)}function dM(i,t){let e=Pa(t,this.size,3);i.uniform3fv(this.addr,e)}function fM(i,t){let e=Pa(t,this.size,4);i.uniform4fv(this.addr,e)}function pM(i,t){let e=Pa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mM(i,t){let e=Pa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gM(i,t){let e=Pa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _M(i,t){i.uniform1iv(this.addr,t)}function xM(i,t){i.uniform2iv(this.addr,t)}function vM(i,t){i.uniform3iv(this.addr,t)}function yM(i,t){i.uniform4iv(this.addr,t)}function SM(i,t){i.uniform1uiv(this.addr,t)}function MM(i,t){i.uniform2uiv(this.addr,t)}function bM(i,t){i.uniform3uiv(this.addr,t)}function wM(i,t){i.uniform4uiv(this.addr,t)}function EM(i,t,e){let n=this.cache,s=t.length,r=nu(e,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pf:a=Ug;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function TM(i,t,e){let n=this.cache,s=t.length,r=nu(e,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Og,r[a])}function AM(i,t,e){let n=this.cache,s=t.length,r=nu(e,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bg,r[a])}function CM(i,t,e){let n=this.cache,s=t.length,r=nu(e,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fg,r[a])}function RM(i){switch(i){case 5126:return hM;case 35664:return uM;case 35665:return dM;case 35666:return fM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return bM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}var mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cM(e.type)}},gf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RM(e.type)}},_f=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},df=/(\w+)(\])?(\[|\.)?/g;function Sg(i,t){i.seq.push(t),i.map[t.id]=t}function IM(i,t,e){let n=i.name,s=n.length;for(df.lastIndex=0;;){let r=df.exec(n),a=df.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){Sg(e,h===void 0?new mf(l,i,t):new gf(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new _f(l),Sg(e,v)),e=v}}}var Ia=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);IM(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Mg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var PM=37297,LM=0;function DM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var bg=new Te;function NM(i){Be._getMatrix(bg,Be.workingColorSpace,i);let t=`mat3( ${bg.elements.map(e=>e.toFixed(4))} )`;switch(Be.getTransfer(i)){case bo:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+DM(i.getShaderSource(t),l)}else return r}function UM(i,t){let e=NM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var FM={[Bd]:"Linear",[kd]:"Reinhard",[zd]:"Cineon",[$d]:"ACESFilmic",[Hd]:"AgX",[Gd]:"Neutral",[Vd]:"Custom"};function OM(i,t){let e=FM[t];return e===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jh=new q;function BM(){Be.getLuminanceCoefficients(jh);let i=jh.x.toFixed(4),t=jh.y.toFixed(4),e=jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function zM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $M(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function pl(i){return i!==""}function Eg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(i){return i.replace(VM,GM)}var HM=new Map;function GM(i,t){let e=Ne[t];if(e===void 0){let n=HM.get(t);if(n!==void 0)e=Ne[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xf(e)}var WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(i){return i.replace(WM,XM)}function XM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var qM={[nl]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function YM(i){return qM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ZM={[Xs]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE_UV"};function JM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ZM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var jM={[Cr]:"ENVMAP_MODE_REFRACTION"};function KM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var QM={[ah]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Gm]:"ENVMAP_BLENDING_ADD"};function tb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":QM[i.combine]||"ENVMAP_BLENDING_NONE"}function eb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function nb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=YM(e),h=JM(e),d=KM(e),v=tb(e),m=eb(e),y=kM(e),M=zM(r),I=s.createProgram(),x,g,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(pl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(pl).join(`
`),g.length>0&&(g+=`
`)):(x=[Cg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),g=[Cg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Ne.tonemapping_pars_fragment:"",e.toneMapping!==$i?OM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,UM("linearToOutputTexel",e.outputColorSpace),BM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pl).join(`
`)),a=xf(a),a=Eg(a,e),a=Tg(a,e),l=xf(l),l=Eg(l,e),l=Tg(l,e),a=Ag(a),l=Ag(l),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let k=B+x+a,R=B+g+l,E=Mg(s,s.VERTEX_SHADER,k),O=Mg(s,s.FRAGMENT_SHADER,R);s.attachShader(I,E),s.attachShader(I,O),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(X){if(i.debug.checkShaderErrors){let at=s.getProgramInfoLog(I)||"",ot=s.getShaderInfoLog(E)||"",Z=s.getShaderInfoLog(O)||"",et=at.trim(),ut=ot.trim(),pt=Z.trim(),At=!0,mt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,E,O);else{let wt=wg(s,E,"vertex"),Mt=wg(s,O,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+et+`
`+wt+`
`+Mt)}else et!==""?ve("WebGLProgram: Program Info Log:",et):(ut===""||pt==="")&&(mt=!1);mt&&(X.diagnostics={runnable:At,programLog:et,vertexShader:{log:ut,prefix:x},fragmentShader:{log:pt,prefix:g}})}s.deleteShader(E),s.deleteShader(O),A=new Ia(s,I),F=$M(s,I)}let A;this.getUniforms=function(){return A===void 0&&G(this),A};let F;this.getAttributes=function(){return F===void 0&&G(this),F};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(I,PM)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=E,this.fragmentShader=O,this}var ib=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yf(t),e.set(t,n)),n}},yf=class{constructor(t){this.id=ib++,this.code=t,this.usedTimes=0}};function sb(i){return i===Zs||i===cl||i===hl}function rb(i,t,e,n,s,r){let a=new ga,l=new vf,c=new Set,h=[],d=new Map,v=n.logarithmicDepthBuffer,m=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return c.add(A),A===0?"uv":`uv${A}`}function I(A,F,H,X,at,ot){let Z=X.fog,et=at.geometry,ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,At=t.get(A.envMap||ut,pt),mt=At&&At.mapping===il?At.image.height:null,wt=y[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&ve("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));let Mt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Yt=Mt!==void 0?Mt.length:0,ee=0;et.morphAttributes.position!==void 0&&(ee=1),et.morphAttributes.normal!==void 0&&(ee=2),et.morphAttributes.color!==void 0&&(ee=3);let $e,Pe,Oe,_t;if(wt){let Je=Qn[wt];$e=Je.vertexShader,Pe=Je.fragmentShader}else{$e=A.vertexShader,Pe=A.fragmentShader;let Je=l.getVertexShaderStage(A),Ge=l.getFragmentShaderStage(A);l.update(A,Je,Ge),Oe=Je.id,_t=Ge.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),ae=at.isInstancedMesh===!0,Jt=at.isBatchedMesh===!0,me=!!A.map,se=!!A.matcap,st=!!At,Ct=!!A.aoMap,$=!!A.lightMap,Rt=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,he=!!A.displacementMap,ue=!!A.emissiveMap,de=!!A.metalnessMap,Se=!!A.roughnessMap,W=A.anisotropy>0,Ae=A.clearcoat>0,we=A.dispersion>0,U=A.retroreflectivity>0,w=A.iridescence>0,tt=A.sheen>0,ct=A.transmission>0,dt=W&&!!A.anisotropyMap,yt=Ae&&!!A.clearcoatMap,kt=Ae&&!!A.clearcoatNormalMap,gt=Ae&&!!A.clearcoatRoughnessMap,bt=w&&!!A.iridescenceMap,Gt=w&&!!A.iridescenceThicknessMap,re=tt&&!!A.sheenColorMap,Vt=tt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,oe=!!A.specularColorMap,ge=!!A.specularIntensityMap,Me=ct&&!!A.transmissionMap,K=ct&&!!A.thicknessMap,Ht=!!A.gradientMap,St=!!A.alphaMap,Ft=A.alphaTest>0,qt=!!A.alphaHash,Tt=!!A.extensions,le=$i;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(le=i.toneMapping);let ne={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:$e,fragmentShader:Pe,defines:A.defines,customVertexShaderID:Oe,customFragmentShaderID:_t,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Jt,batchingColor:Jt&&at._colorsTexture!==null,instancing:ae,instancingColor:ae&&at.instanceColor!==null,instancingMorph:ae&&at.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:me,matcap:se,envMap:st,envMapMode:st&&At.mapping,envMapCubeUVHeight:mt,aoMap:Ct,lightMap:$,bumpMap:Rt,normalMap:Bt,displacementMap:he,emissiveMap:ue,normalMapObjectSpace:Bt&&A.normalMapType===qm,normalMapTangentSpace:Bt&&A.normalMapType===qh,packedNormalMap:Bt&&A.normalMapType===qh&&sb(A.normalMap.format),metalnessMap:de,roughnessMap:Se,anisotropy:W,anisotropyMap:dt,clearcoat:Ae,clearcoatMap:yt,clearcoatNormalMap:kt,clearcoatRoughnessMap:gt,dispersion:we,retroreflection:U,iridescence:w,iridescenceMap:bt,iridescenceThicknessMap:Gt,sheen:tt,sheenColorMap:re,sheenRoughnessMap:Vt,specularMap:zt,specularColorMap:oe,specularIntensityMap:ge,transmission:ct,transmissionMap:Me,thicknessMap:K,gradientMap:Ht,opaque:A.transparent===!1&&A.blending===Ea&&A.alphaToCoverage===!1,alphaMap:St,alphaTest:Ft,alphaHash:qt,combine:A.combine,mapUv:me&&M(A.map.channel),aoMapUv:Ct&&M(A.aoMap.channel),lightMapUv:$&&M(A.lightMap.channel),bumpMapUv:Rt&&M(A.bumpMap.channel),normalMapUv:Bt&&M(A.normalMap.channel),displacementMapUv:he&&M(A.displacementMap.channel),emissiveMapUv:ue&&M(A.emissiveMap.channel),metalnessMapUv:de&&M(A.metalnessMap.channel),roughnessMapUv:Se&&M(A.roughnessMap.channel),anisotropyMapUv:dt&&M(A.anisotropyMap.channel),clearcoatMapUv:yt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:kt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&M(A.sheenRoughnessMap.channel),specularMapUv:zt&&M(A.specularMap.channel),specularColorMapUv:oe&&M(A.specularColorMap.channel),specularIntensityMapUv:ge&&M(A.specularIntensityMap.channel),transmissionMapUv:Me&&M(A.transmissionMap.channel),thicknessMapUv:K&&M(A.thicknessMap.channel),alphaMapUv:St&&M(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Bt||W),vertexNormals:!!et.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!et.attributes.uv&&(me||St),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||et.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:at.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:ee,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:me&&A.map.isVideoTexture===!0&&Be.getTransfer(A.map.colorSpace)===en,decodeVideoTextureEmissive:ue&&A.emissiveMap.isVideoTexture===!0&&Be.getTransfer(A.emissiveMap.colorSpace)===en,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ts,flipSided:A.side===Kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Tt&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&A.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function x(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let H in A.defines)F.push(H),F.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(g(F,A),B(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function g(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function B(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function k(A){let F=y[A.type],H;if(F){let X=Qn[F];H=ul.clone(X.uniforms)}else H=A.uniforms;return H}function R(A,F){let H=d.get(F);return H!==void 0?++H.usedTimes:(H=new nb(i,F,A,s),h.push(H),d.set(F,H)),H}function E(A){if(--A.usedTimes===0){let F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function G(){l.dispose()}return{getParameters:I,getProgramCacheKey:x,getUniforms:k,acquireProgram:R,releaseProgram:E,releaseShaderCache:O,programs:h,dispose:G}}function ab(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ob(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ig(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function l(m,y,M,I,x,g){let B=i[t];return B===void 0?(B={id:m.id,object:m,geometry:y,material:M,materialVariant:a(m),groupOrder:I,renderOrder:m.renderOrder,z:x,group:g},i[t]=B):(B.id=m.id,B.object=m,B.geometry=y,B.material=M,B.materialVariant=a(m),B.groupOrder=I,B.renderOrder=m.renderOrder,B.z=x,B.group=g),t++,B}function c(m,y,M,I,x,g,B){B.reversedDepth===!0&&(x=-x);let k=l(m,y,M,I,x,g);M.transmission>0?n.push(k):M.transparent===!0?s.push(k):e.push(k)}function h(m,y,M,I,x,g){let B=l(m,y,M,I,x,g);M.transmission>0?n.unshift(B):M.transparent===!0?s.unshift(B):e.unshift(B)}function d(m,y){e.length>1&&e.sort(m||ob),n.length>1&&n.sort(y||Rg),s.length>1&&s.sort(y||Rg)}function v(){for(let m=t,y=i.length;m<y;m++){let M=i[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:v,sort:d}}function lb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ig,i.set(n,[a])):s>=r.length?(a=new Ig,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new _e};break;case"SpotLight":e={position:new q,direction:new q,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function hb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ub=0;function db(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fb(i){let t=new cb,e=hb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new q);let s=new q,r=new ze,a=new ze;function l(h){let d=0,v=0,m=0;for(let at=0;at<9;at++)n.probe[at].set(0,0,0);let y=0,M=0,I=0,x=0,g=0,B=0,k=0,R=0,E=0,O=0,G=0,A=0,F=0,H=0;h.sort(db);for(let at=0,ot=h.length;at<ot;at++){let Z=h[at],et=Z.color,ut=Z.intensity,pt=Z.distance,At=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===Zs?At=Z.shadow.map.texture:At=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)d+=et.r*ut,v+=et.g*ut,m+=et.b*ut;else if(Z.isLightProbe){for(let mt=0;mt<9;mt++)n.probe[mt].addScaledVector(Z.sh.coefficients[mt],ut);H++}else if(Z.isSunLight){let mt=t.get(Z);if(mt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let wt=Z.shadow,Mt=e.get(Z);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[M]=Mt,n.sunShadowMap[M]=At;let Yt=wt.getViewportCount();for(let ee=0;ee<Yt;ee++)n.sunShadowMatrix[I+ee]=wt.getMatrix(ee),n.sunShadowCascade[I+ee]=wt._cascadeData[ee];I+=Yt,M++}n.sun[y]=mt,y++}else if(Z.isDirectionalLight){let mt=t.get(Z);if(mt.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let wt=Z.shadow,Mt=e.get(Z);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,n.directionalShadow[x]=Mt,n.directionalShadowMap[x]=At,n.directionalShadowMatrix[x]=Z.shadow.matrix,E++}n.directional[x]=mt,x++}else if(Z.isSpotLight){let mt=t.get(Z);mt.position.setFromMatrixPosition(Z.matrixWorld),mt.color.copy(et).multiplyScalar(ut),mt.distance=pt,mt.coneCos=Math.cos(Z.angle),mt.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),mt.decay=Z.decay,n.spot[B]=mt;let wt=Z.shadow;if(Z.map&&(n.spotLightMap[A]=Z.map,A++,wt.updateMatrices(Z),Z.castShadow&&F++),n.spotLightMatrix[B]=wt.matrix,Z.castShadow){let Mt=e.get(Z);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,n.spotShadow[B]=Mt,n.spotShadowMap[B]=At,G++}B++}else if(Z.isRectAreaLight){let mt=t.get(Z);mt.color.copy(et).multiplyScalar(ut),mt.halfWidth.set(Z.width*.5,0,0),mt.halfHeight.set(0,Z.height*.5,0),n.rectArea[k]=mt,k++}else if(Z.isPointLight){let mt=t.get(Z);if(mt.color.copy(Z.color).multiplyScalar(Z.intensity),mt.distance=Z.distance,mt.decay=Z.decay,Z.castShadow){let wt=Z.shadow,Mt=e.get(Z);Mt.shadowIntensity=wt.intensity,Mt.shadowBias=wt.bias,Mt.shadowNormalBias=wt.normalBias,Mt.shadowRadius=wt.radius,Mt.shadowMapSize=wt.mapSize,Mt.shadowCameraNear=wt.camera.near,Mt.shadowCameraFar=wt.camera.far,n.pointShadow[g]=Mt,n.pointShadowMap[g]=At,n.pointShadowMatrix[g]=Z.shadow.matrix,O++}n.point[g]=mt,g++}else if(Z.isHemisphereLight){let mt=t.get(Z);mt.skyColor.copy(Z.color).multiplyScalar(ut),mt.groundColor.copy(Z.groundColor).multiplyScalar(ut),n.hemi[R]=mt,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=m;let X=n.hash;(X.sunLength!==y||X.directionalLength!==x||X.pointLength!==g||X.spotLength!==B||X.rectAreaLength!==k||X.hemiLength!==R||X.numSunShadows!==M||X.numDirectionalShadows!==E||X.numPointShadows!==O||X.numSpotShadows!==G||X.numSpotMaps!==A||X.numLightProbes!==H)&&(n.sun.length=y,n.directional.length=x,n.spot.length=B,n.rectArea.length=k,n.point.length=g,n.hemi.length=R,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=H,X.sunLength=y,X.directionalLength=x,X.pointLength=g,X.spotLength=B,X.rectAreaLength=k,X.hemiLength=R,X.numSunShadows=M,X.numDirectionalShadows=E,X.numPointShadows=O,X.numSpotShadows=G,X.numSpotMaps=A,X.numLightProbes=H,n.version=ub++)}function c(h,d){let v=0,m=0,y=0,M=0,I=0,x=0,g=d.matrixWorldInverse;for(let B=0,k=h.length;B<k;B++){let R=h[B];if(R.isSunLight){let E=n.sun[v];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),v++}else if(R.isDirectionalLight){let E=n.directional[m];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(R.isSpotLight){let E=n.spot[M];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),M++}else if(R.isRectAreaLight){let E=n.rectArea[I];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let E=n.point[y];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),y++}else if(R.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:l,setupView:c,state:n}}function Pg(i){let t=new fb(i),e=[],n=[],s=[];function r(m){v.camera=m,e.length=0,n.length=0,s.length=0}function a(m){e.push(m)}function l(m){n.push(m)}function c(m){s.push(m)}function h(){t.setup(e)}function d(m){t.setupView(e,m)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function pb(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Pg(i),t.set(s,[l])):r>=a.length?(l=new Pg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`,_b=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],xb=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Lg=new ze,fl=new q,ff=new q;function vb(i,t,e){let n=new xa,s=new $t,r=new $t,a=new nn,l=new Wc,c=new Xc,h={},d=e.maxTextureSize,v={[Ws]:Kn,[Kn]:Ws,[ts]:ts},m=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),y=m.clone();y.defines.HORIZONTAL_PASS=1;let M=new Mn;M.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new Nn(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let g=this.type;this.render=function(O,G,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===wm&&(ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nl);let F=i.getRenderTarget(),H=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),at=i.state;at.setBlending(es),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let ot=g!==this.type;ot&&G.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(et=>et.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,et=O.length;Z<et;Z++){let ut=O[Z],pt=ut.shadow;if(pt===void 0){ve("WebGLShadowMap:",ut,"has no shadow.");continue}if(pt.autoUpdate===!1&&pt.needsUpdate===!1)continue;s.copy(pt.mapSize);let At=pt.getFrameExtents();s.multiply(At),r.copy(pt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,pt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,pt.mapSize.y=r.y));let mt=i.state.buffers.depth.getReversed();if(pt.camera._reversedDepth=mt,pt.map===null||ot===!0){if(pt.map!==null&&(pt.map.depthTexture!==null&&(pt.map.depthTexture.dispose(),pt.map.depthTexture=null),pt.map.dispose()),this.type===wa){if(ut.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}pt.map=new oi(s.x,s.y,{format:Zs,type:Hi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),pt.map.texture.name=ut.name+".shadowMap",pt.map.depthTexture=new zs(s.x,s.y,Ti),pt.map.depthTexture.name=ut.name+".shadowMapDepth",pt.map.depthTexture.format=Ji,pt.map.depthTexture.compareFunction=null,pt.map.depthTexture.minFilter=Ln,pt.map.depthTexture.magFilter=Ln}else ut.isPointLight?(pt.map=new Qh(s.x),pt.map.depthTexture=new Oc(s.x,Vi)):(pt.map=new oi(s.x,s.y),pt.map.depthTexture=new zs(s.x,s.y,Vi)),pt.map.depthTexture.name=ut.name+".shadowMap",pt.map.depthTexture.format=Ji,this.type===nl?(pt.map.depthTexture.compareFunction=mt?Zh:Yh,pt.map.depthTexture.minFilter=Bn,pt.map.depthTexture.magFilter=Bn):(pt.map.depthTexture.compareFunction=null,pt.map.depthTexture.minFilter=Ln,pt.map.depthTexture.magFilter=Ln);pt.camera.updateProjectionMatrix()}pt.map.isWebGLCubeRenderTarget!==!0&&(pt.map.width!==s.x||pt.map.height!==s.y)&&pt.map.setSize(s.x,s.y);let wt=pt.map.isWebGLCubeRenderTarget?6:pt.getViewportCount();ut.isPointLight!==!0&&pt.updateMatrices(ut,A);for(let Mt=0;Mt<wt;Mt++){let Yt=pt.getCamera(Mt);if(ut.isPointLight){let ee=pt.camera,$e=pt.matrix,Pe=ut.distance||ee.far;Pe!==ee.far&&(ee.far=Pe,ee.updateProjectionMatrix()),fl.setFromMatrixPosition(ut.matrixWorld),ee.position.copy(fl),ff.copy(ee.position),ff.add(_b[Mt]),ee.up.copy(xb[Mt]),ee.lookAt(ff),ee.updateMatrixWorld(),$e.makeTranslation(-fl.x,-fl.y,-fl.z),Lg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),pt._frustum.setFromProjectionMatrix(Lg,ee.coordinateSystem,ee.reversedDepth)}if(pt.map.isWebGLCubeRenderTarget)i.setRenderTarget(pt.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(pt.map),i.clear());let ee=pt.getViewport(Mt);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),at.viewport(a)}n=pt.getFrustum(Mt),R(G,A,Yt,ut,this.type)}pt.isPointLightShadow!==!0&&this.type===wa&&B(pt,A),pt.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(F,H,X)};function B(O,G){let A=t.update(I);m.defines.VSM_SAMPLES!==O.blurSamples&&(m.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null?O.mapPass=new oi(s.x,s.y,{format:Zs,type:Hi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),m.uniforms.shadow_pass.value=O.map.depthTexture,m.uniforms.resolution.value.set(O.map.width,O.map.height),m.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(G,null,A,m,I,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value.set(O.map.width,O.map.height),y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(G,null,A,y,I,null)}function k(O,G,A,F){let H=null,X=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(X!==void 0)H=X;else if(H=A.isPointLight===!0?c:l,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let at=H.uuid,ot=G.uuid,Z=h[at];Z===void 0&&(Z={},h[at]=Z);let et=Z[ot];et===void 0&&(et=H.clone(),Z[ot]=et,G.addEventListener("dispose",E)),H=et}if(H.visible=G.visible,H.wireframe=G.wireframe,F===wa?H.side=G.shadowSide!==null?G.shadowSide:G.side:H.side=G.shadowSide!==null?G.shadowSide:v[G.side],H.alphaMap=G.alphaMap,H.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,H.map=G.map,H.clipShadows=G.clipShadows,H.clippingPlanes=G.clippingPlanes,H.clipIntersection=G.clipIntersection,H.displacementMap=G.displacementMap,H.displacementScale=G.displacementScale,H.displacementBias=G.displacementBias,H.wireframeLinewidth=G.wireframeLinewidth,H.linewidth=G.linewidth,A.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let at=i.properties.get(H);at.light=A}return H}function R(O,G,A,F,H){if(O.visible===!1)return;if(O.layers.test(G.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&H===wa)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let ot=t.update(O),Z=O.material;if(Array.isArray(Z)){let et=ot.groups;for(let ut=0,pt=et.length;ut<pt;ut++){let At=et[ut],mt=Z[At.materialIndex];if(mt&&mt.visible){let wt=k(O,mt,F,H);O.onBeforeShadow(i,O,G,A,ot,wt,At),i.renderBufferDirect(A,null,ot,wt,O,At),O.onAfterShadow(i,O,G,A,ot,wt,At)}}}else if(Z.visible){let et=k(O,Z,F,H);O.onBeforeShadow(i,O,G,A,ot,et,null),i.renderBufferDirect(A,null,ot,et,O,null),O.onAfterShadow(i,O,G,A,ot,et,null)}}let at=O.children;for(let ot=0,Z=at.length;ot<Z;ot++)R(at[ot],G,A,F,H)}function E(O){O.target.removeEventListener("dispose",E);for(let A in h){let F=h[A],H=O.target.uuid;H in F&&(F[H].dispose(),delete F[H])}}}function yb(i,t){function e(){let K=!1,Ht=new nn,St=null,Ft=new nn(0,0,0,0);return{setMask:function(qt){St!==qt&&!K&&(i.colorMask(qt,qt,qt,qt),St=qt)},setLocked:function(qt){K=qt},setClear:function(qt,Tt,le,ne,Je){Je===!0&&(qt*=ne,Tt*=ne,le*=ne),Ht.set(qt,Tt,le,ne),Ft.equals(Ht)===!1&&(i.clearColor(qt,Tt,le,ne),Ft.copy(Ht))},reset:function(){K=!1,St=null,Ft.set(-1,0,0,0)}}}function n(){let K=!1,Ht=!1,St=null,Ft=null,qt=null;return{setReversed:function(Tt){if(Ht!==Tt){let le=t.get("EXT_clip_control");Tt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Ht=Tt;let ne=qt;qt=null,this.setClear(ne)}},getReversed:function(){return Ht},setTest:function(Tt){Tt?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Tt){St!==Tt&&!K&&(i.depthMask(Tt),St=Tt)},setFunc:function(Tt){if(Ht&&(Tt=sg[Tt]),Ft!==Tt){switch(Tt){case vc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case ua:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=Tt}},setLocked:function(Tt){K=Tt},setClear:function(Tt){qt!==Tt&&(qt=Tt,Ht&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){K=!1,St=null,Ft=null,qt=null,Ht=!1}}}function s(){let K=!1,Ht=null,St=null,Ft=null,qt=null,Tt=null,le=null,ne=null,Je=null;return{setTest:function(Ge){K||(Ge?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Ge){Ht!==Ge&&!K&&(i.stencilMask(Ge),Ht=Ge)},setFunc:function(Ge,Yn,un){(St!==Ge||Ft!==Yn||qt!==un)&&(i.stencilFunc(Ge,Yn,un),St=Ge,Ft=Yn,qt=un)},setOp:function(Ge,Yn,un){(Tt!==Ge||le!==Yn||ne!==un)&&(i.stencilOp(Ge,Yn,un),Tt=Ge,le=Yn,ne=un)},setLocked:function(Ge){K=Ge},setClear:function(Ge){Je!==Ge&&(i.clearStencil(Ge),Je=Ge)},reset:function(){K=!1,Ht=null,St=null,Ft=null,qt=null,Tt=null,le=null,ne=null,Je=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,d={},v={},m={},y=new WeakMap,M=[],I=null,x=!1,g=null,B=null,k=null,R=null,E=null,O=null,G=null,A=new _e(0,0,0),F=0,H=!1,X=null,at=null,ot=null,Z=null,et=null,ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pt=!1,At=0,mt=i.getParameter(i.VERSION);mt.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(mt)[1]),pt=At>=1):mt.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),pt=At>=2);let wt=null,Mt={},Yt=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),$e=new nn().fromArray(Yt),Pe=new nn().fromArray(ee);function Oe(K,Ht,St,Ft){let qt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(K,Tt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<St;le++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ht,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,qt):i.texImage2D(Ht+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qt);return Tt}let _t={};_t[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(ua),Rt(!1),Bt(Ld),vt(i.CULL_FACE),Ct(es);function vt(K){d[K]!==!0&&(i.enable(K),d[K]=!0)}function Pt(K){d[K]!==!1&&(i.disable(K),d[K]=!1)}function ae(K,Ht){return m[K]!==Ht?(i.bindFramebuffer(K,Ht),m[K]=Ht,K===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ht),K===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ht),!0):!1}function Jt(K,Ht){let St=M,Ft=!1;if(K){St=y.get(Ht),St===void 0&&(St=[],y.set(Ht,St));let qt=K.textures;if(St.length!==qt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,le=qt.length;Tt<le;Tt++)St[Tt]=i.COLOR_ATTACHMENT0+Tt;St.length=qt.length,Ft=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(St)}function me(K){return I!==K?(i.useProgram(K),I=K,!0):!1}let se={[Ar]:i.FUNC_ADD,[Tm]:i.FUNC_SUBTRACT,[Am]:i.FUNC_REVERSE_SUBTRACT};se[Cm]=i.MIN,se[Rm]=i.MAX;let st={[Im]:i.ZERO,[Pm]:i.ONE,[Lm]:i.SRC_COLOR,[Fd]:i.SRC_ALPHA,[Bm]:i.SRC_ALPHA_SATURATE,[Fm]:i.DST_COLOR,[Nm]:i.DST_ALPHA,[Dm]:i.ONE_MINUS_SRC_COLOR,[Od]:i.ONE_MINUS_SRC_ALPHA,[Om]:i.ONE_MINUS_DST_COLOR,[Um]:i.ONE_MINUS_DST_ALPHA,[km]:i.CONSTANT_COLOR,[zm]:i.ONE_MINUS_CONSTANT_COLOR,[$m]:i.CONSTANT_ALPHA,[Vm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(K,Ht,St,Ft,qt,Tt,le,ne,Je,Ge){if(K===es){x===!0&&(Pt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),K!==Em){if(K!==g||Ge!==H){if((B!==Ar||E!==Ar)&&(i.blendEquation(i.FUNC_ADD),B=Ar,E=Ar),Ge)switch(K){case Ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dd:i.blendFunc(i.ONE,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ud:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ye("WebGLState: Invalid blending: ",K);break}else switch(K){case Ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nd:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",K);break}k=null,R=null,O=null,G=null,A.set(0,0,0),F=0,g=K,H=Ge}return}qt=qt||Ht,Tt=Tt||St,le=le||Ft,(Ht!==B||qt!==E)&&(i.blendEquationSeparate(se[Ht],se[qt]),B=Ht,E=qt),(St!==k||Ft!==R||Tt!==O||le!==G)&&(i.blendFuncSeparate(st[St],st[Ft],st[Tt],st[le]),k=St,R=Ft,O=Tt,G=le),(ne.equals(A)===!1||Je!==F)&&(i.blendColor(ne.r,ne.g,ne.b,Je),A.copy(ne),F=Je),g=K,H=!1}function $(K,Ht){K.side===ts?Pt(i.CULL_FACE):vt(i.CULL_FACE);let St=K.side===Kn;Ht&&(St=!St),Rt(St),K.blending===Ea&&K.transparent===!1?Ct(es):Ct(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let Ft=K.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(K.stencilWriteMask),l.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),l.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ue(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(K){X!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),X=K)}function Bt(K){K!==Mm?(vt(i.CULL_FACE),K!==at&&(K===Ld?i.cullFace(i.BACK):K===bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),at=K}function he(K){K!==ot&&(pt&&i.lineWidth(K),ot=K)}function ue(K,Ht,St){K?(vt(i.POLYGON_OFFSET_FILL),(Z!==Ht||et!==St)&&(Z=Ht,et=St,a.getReversed()&&(Ht=-Ht),i.polygonOffset(Ht,St))):Pt(i.POLYGON_OFFSET_FILL)}function de(K){K?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Se(K){K===void 0&&(K=i.TEXTURE0+ut-1),wt!==K&&(i.activeTexture(K),wt=K)}function W(K,Ht,St){St===void 0&&(wt===null?St=i.TEXTURE0+ut-1:St=wt);let Ft=Mt[St];Ft===void 0&&(Ft={type:void 0,texture:void 0},Mt[St]=Ft),(Ft.type!==K||Ft.texture!==Ht)&&(wt!==St&&(i.activeTexture(St),wt=St),i.bindTexture(K,Ht||_t[K]),Ft.type=K,Ft.texture=Ht)}function Ae(){let K=Mt[wt];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function we(){try{i.compressedTexImage2D(...arguments)}catch(K){ye("WebGLState:",K)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(K){ye("WebGLState:",K)}}function w(){try{i.texSubImage2D(...arguments)}catch(K){ye("WebGLState:",K)}}function tt(){try{i.texSubImage3D(...arguments)}catch(K){ye("WebGLState:",K)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(K){ye("WebGLState:",K)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(K){ye("WebGLState:",K)}}function yt(){try{i.texStorage2D(...arguments)}catch(K){ye("WebGLState:",K)}}function kt(){try{i.texStorage3D(...arguments)}catch(K){ye("WebGLState:",K)}}function gt(){try{i.texImage2D(...arguments)}catch(K){ye("WebGLState:",K)}}function bt(){try{i.texImage3D(...arguments)}catch(K){ye("WebGLState:",K)}}function Gt(K){return v[K]!==void 0?v[K]:i.getParameter(K)}function re(K,Ht){v[K]!==Ht&&(i.pixelStorei(K,Ht),v[K]=Ht)}function Vt(K){$e.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),$e.copy(K))}function zt(K){Pe.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Pe.copy(K))}function oe(K,Ht){let St=h.get(Ht);St===void 0&&(St=new WeakMap,h.set(Ht,St));let Ft=St.get(K);Ft===void 0&&(Ft=i.getUniformBlockIndex(Ht,K.name),St.set(K,Ft))}function ge(K,Ht){let Ft=h.get(Ht).get(K);c.get(Ht)!==Ft&&(i.uniformBlockBinding(Ht,Ft,K.__bindingPointIndex),c.set(Ht,Ft))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},wt=null,Mt={},m={},y=new WeakMap,M=[],I=null,x=!1,g=null,B=null,k=null,R=null,E=null,O=null,G=null,A=new _e(0,0,0),F=0,H=!1,X=null,at=null,ot=null,Z=null,et=null,$e.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Pt,bindFramebuffer:ae,drawBuffers:Jt,useProgram:me,setBlending:Ct,setMaterial:$,setFlipSided:Rt,setCullFace:Bt,setLineWidth:he,setPolygonOffset:ue,setScissorTest:de,activeTexture:Se,bindTexture:W,unbindTexture:Ae,compressedTexImage2D:we,compressedTexImage3D:U,texImage2D:gt,texImage3D:bt,pixelStorei:re,getParameter:Gt,updateUBOMapping:oe,uniformBlockBinding:ge,texStorage2D:yt,texStorage3D:kt,texSubImage2D:w,texSubImage3D:tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:dt,scissor:Vt,viewport:zt,reset:Me}}function Sb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,d=new WeakMap,v=new Set,m,y=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,w){return M?new OffscreenCanvas(U,w):wo("canvas")}function x(U,w,tt){let ct=1,dt=we(U);if((dt.width>tt||dt.height>tt)&&(ct=tt/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let yt=Math.floor(ct*dt.width),kt=Math.floor(ct*dt.height);m===void 0&&(m=I(yt,kt));let gt=w?I(yt,kt):m;return gt.width=yt,gt.height=kt,gt.getContext("2d").drawImage(U,0,0,yt,kt),ve("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+yt+"x"+kt+")."),gt}else return"data"in U&&ve("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),U;return U}function g(U){return U.generateMipmaps}function B(U){i.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(U,w,tt,ct,dt,yt=!1){if(U!==null){if(i[U]!==void 0)return i[U];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let kt;ct&&(kt=t.get("EXT_texture_norm16"),kt||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=w;if(w===i.RED&&(tt===i.FLOAT&&(gt=i.R32F),tt===i.HALF_FLOAT&&(gt=i.R16F),tt===i.UNSIGNED_BYTE&&(gt=i.R8),tt===i.UNSIGNED_SHORT&&kt&&(gt=kt.R16_EXT),tt===i.SHORT&&kt&&(gt=kt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.R8UI),tt===i.UNSIGNED_SHORT&&(gt=i.R16UI),tt===i.UNSIGNED_INT&&(gt=i.R32UI),tt===i.BYTE&&(gt=i.R8I),tt===i.SHORT&&(gt=i.R16I),tt===i.INT&&(gt=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(gt=i.RG32F),tt===i.HALF_FLOAT&&(gt=i.RG16F),tt===i.UNSIGNED_BYTE&&(gt=i.RG8),tt===i.UNSIGNED_SHORT&&kt&&(gt=kt.RG16_EXT),tt===i.SHORT&&kt&&(gt=kt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),tt===i.UNSIGNED_INT&&(gt=i.RG32UI),tt===i.BYTE&&(gt=i.RG8I),tt===i.SHORT&&(gt=i.RG16I),tt===i.INT&&(gt=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),tt===i.UNSIGNED_INT&&(gt=i.RGB32UI),tt===i.BYTE&&(gt=i.RGB8I),tt===i.SHORT&&(gt=i.RGB16I),tt===i.INT&&(gt=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),tt===i.BYTE&&(gt=i.RGBA8I),tt===i.SHORT&&(gt=i.RGBA16I),tt===i.INT&&(gt=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&kt&&(gt=kt.RGB16_EXT),tt===i.SHORT&&kt&&(gt=kt.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),w===i.RGBA){let bt=yt?bo:Be.getTransfer(dt);tt===i.FLOAT&&(gt=i.RGBA32F),tt===i.HALF_FLOAT&&(gt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(gt=bt===en?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&kt&&(gt=kt.RGBA16_EXT),tt===i.SHORT&&kt&&(gt=kt.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function E(U,w){let tt;return U?w===null||w===Vi||w===Aa?tt=i.DEPTH24_STENCIL8:w===Ti?tt=i.DEPTH32F_STENCIL8:w===Ta&&(tt=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===Aa?tt=i.DEPTH_COMPONENT24:w===Ti?tt=i.DEPTH_COMPONENT32F:w===Ta&&(tt=i.DEPTH_COMPONENT16),tt}function O(U,w){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function G(U){let w=U.target;w.removeEventListener("dispose",G),F(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&v.delete(w)}function A(U){let w=U.target;w.removeEventListener("dispose",A),X(w)}function F(U){let w=n.get(U);if(w.__webglInit===void 0)return;let tt=U.source,ct=y.get(tt);if(ct){let dt=ct[w.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&H(U),Object.keys(ct).length===0&&y.delete(tt)}n.remove(U)}function H(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let tt=U.source,ct=y.get(tt);delete ct[w.__cacheKey],a.memory.textures--}function X(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(w.__webglFramebuffer[ct]))for(let dt=0;dt<w.__webglFramebuffer[ct].length;dt++)i.deleteFramebuffer(w.__webglFramebuffer[ct][dt]);else i.deleteFramebuffer(w.__webglFramebuffer[ct]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ct])}else{if(Array.isArray(w.__webglFramebuffer))for(let ct=0;ct<w.__webglFramebuffer.length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[ct]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ct=0;ct<w.__webglColorRenderbuffer.length;ct++)w.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ct]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let tt=U.textures;for(let ct=0,dt=tt.length;ct<dt;ct++){let yt=n.get(tt[ct]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(tt[ct])}n.remove(U)}let at=0;function ot(){at=0}function Z(){return at}function et(U){at=U}function ut(){let U=at;return U>=s.maxTextures&&ve("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),at+=1,U}function pt(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function At(U,w){let tt=n.get(U);if(U.isVideoTexture&&W(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){let ct=U.image;if(ct===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(tt,U,w);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function mt(U,w){let tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Pt(tt,U,w);return}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function wt(U,w){let tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Pt(tt,U,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function Mt(U,w){let tt=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&tt.__version!==U.version){ae(tt,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}let Yt={[Tc]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},ee={[Ln]:i.NEAREST,[Wm]:i.NEAREST_MIPMAP_NEAREST,[sl]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[ch]:i.LINEAR_MIPMAP_NEAREST,[qs]:i.LINEAR_MIPMAP_LINEAR},$e={[Zm]:i.NEVER,[tg]:i.ALWAYS,[Jm]:i.LESS,[Yh]:i.LEQUAL,[jm]:i.EQUAL,[Zh]:i.GEQUAL,[Km]:i.GREATER,[Qm]:i.NOTEQUAL};function Pe(U,w){if(w.type===Ti&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===ch||w.magFilter===sl||w.magFilter===qs||w.minFilter===Bn||w.minFilter===ch||w.minFilter===sl||w.minFilter===qs)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Yt[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Yt[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Yt[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ee[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,$e[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ln||w.minFilter!==sl&&w.minFilter!==qs||w.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(U,w){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",G));let ct=w.source,dt=y.get(ct);dt===void 0&&(dt={},y.set(ct,dt));let yt=pt(w);if(yt!==U.__cacheKey){dt[yt]===void 0&&(dt[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),dt[yt].usedTimes++;let kt=dt[U.__cacheKey];kt!==void 0&&(dt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&H(w)),U.__cacheKey=yt,U.__webglTexture=dt[yt].texture}return tt}function _t(U,w,tt){return Math.floor(Math.floor(U/tt)/w)}function vt(U,w,tt,ct){let yt=U.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,ct,w.data);else{yt.sort((re,Vt)=>re.start-Vt.start);let kt=0;for(let re=1;re<yt.length;re++){let Vt=yt[kt],zt=yt[re],oe=Vt.start+Vt.count,ge=_t(zt.start,w.width,4),Me=_t(Vt.start,w.width,4);zt.start<=oe+1&&ge===Me&&_t(zt.start+zt.count-1,w.width,4)===ge?Vt.count=Math.max(Vt.count,zt.start+zt.count-Vt.start):(++kt,yt[kt]=zt)}yt.length=kt+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),bt=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let re=0,Vt=yt.length;re<Vt;re++){let zt=yt[re],oe=Math.floor(zt.start/4),ge=Math.ceil(zt.count/4),Me=oe%w.width,K=Math.floor(oe/w.width),Ht=ge,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,Me,K,Ht,St,tt,ct,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function Pt(U,w,tt){let ct=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=i.TEXTURE_3D);let dt=Oe(U,w),yt=w.source;e.bindTexture(ct,U.__webglTexture,i.TEXTURE0+tt);let kt=n.get(yt);if(yt.version!==kt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let St=Be.getPrimaries(Be.workingColorSpace),Ft=w.colorSpace===ws?null:Be.getPrimaries(w.colorSpace),qt=w.colorSpace===ws||St===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let bt=x(w.image,!1,s.maxTextureSize);bt=Ae(w,bt);let Gt=r.convert(w.format,w.colorSpace),re=r.convert(w.type),Vt=R(w.internalFormat,Gt,re,w.normalized,w.colorSpace,w.isVideoTexture);Pe(ct,w);let zt,oe=w.mipmaps,ge=w.isVideoTexture!==!0,Me=kt.__version===void 0||dt===!0,K=yt.dataReady,Ht=O(w,bt);if(w.isDepthTexture)Vt=E(w.format===Ys,w.type),Me&&(ge?e.texStorage2D(i.TEXTURE_2D,1,Vt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,bt.width,bt.height,0,Gt,re,null));else if(w.isDataTexture)if(oe.length>0){ge&&Me&&e.texStorage2D(i.TEXTURE_2D,Ht,Vt,oe[0].width,oe[0].height);for(let St=0,Ft=oe.length;St<Ft;St++)zt=oe[St],ge?K&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,zt.width,zt.height,Gt,re,zt.data):e.texImage2D(i.TEXTURE_2D,St,Vt,zt.width,zt.height,0,Gt,re,zt.data);w.generateMipmaps=!1}else ge?(Me&&e.texStorage2D(i.TEXTURE_2D,Ht,Vt,bt.width,bt.height),K&&vt(w,bt,Gt,re)):e.texImage2D(i.TEXTURE_2D,0,Vt,bt.width,bt.height,0,Gt,re,bt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ge&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Vt,oe[0].width,oe[0].height,bt.depth);for(let St=0,Ft=oe.length;St<Ft;St++)if(zt=oe[St],w.format!==Ai)if(Gt!==null)if(ge){if(K)if(w.layerUpdates.size>0){let qt=of(zt.width,zt.height,w.format,w.type);for(let Tt of w.layerUpdates){let le=zt.data.subarray(Tt*qt/zt.data.BYTES_PER_ELEMENT,(Tt+1)*qt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Tt,zt.width,zt.height,1,Gt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,zt.width,zt.height,bt.depth,Gt,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Vt,zt.width,zt.height,bt.depth,0,zt.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,zt.width,zt.height,bt.depth,Gt,re,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Vt,zt.width,zt.height,bt.depth,0,Gt,re,zt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ge&&Me&&e.texStorage2D(i.TEXTURE_2D,Ht,Vt,oe[0].width,oe[0].height);for(let St=0,Ft=oe.length;St<Ft;St++)zt=oe[St],w.format!==Ai?Gt!==null?ge?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,zt.width,zt.height,Gt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Vt,zt.width,zt.height,0,zt.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?K&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,zt.width,zt.height,Gt,re,zt.data):e.texImage2D(i.TEXTURE_2D,St,Vt,zt.width,zt.height,0,Gt,re,zt.data)}else if(w.isDataArrayTexture)if(ge){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Vt,bt.width,bt.height,bt.depth),K)if(w.layerUpdates.size>0){let St=of(bt.width,bt.height,w.format,w.type);for(let Ft of w.layerUpdates){let qt=bt.data.subarray(Ft*St/bt.data.BYTES_PER_ELEMENT,(Ft+1)*St/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,bt.width,bt.height,1,Gt,re,qt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Gt,re,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,bt.width,bt.height,bt.depth,0,Gt,re,bt.data);else if(w.isData3DTexture)ge?(Me&&e.texStorage3D(i.TEXTURE_3D,Ht,Vt,bt.width,bt.height,bt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Gt,re,bt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,bt.width,bt.height,bt.depth,0,Gt,re,bt.data);else if(w.isFramebufferTexture){if(Me)if(ge)e.texStorage2D(i.TEXTURE_2D,Ht,Vt,bt.width,bt.height);else{let St=bt.width,Ft=bt.height;for(let qt=0;qt<Ht;qt++)e.texImage2D(i.TEXTURE_2D,qt,Vt,St,Ft,0,Gt,re,null),St>>=1,Ft>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),bt.parentNode!==St){St.appendChild(bt),v.add(w),St.onpaint=Ft=>{let qt=Ft.changedElements;for(let Tt of v)qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,bt);else{let qt=i.RGBA,Tt=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,Tt,le,bt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ge&&Me){let St=we(oe[0]);e.texStorage2D(i.TEXTURE_2D,Ht,Vt,St.width,St.height)}for(let St=0,Ft=oe.length;St<Ft;St++)zt=oe[St],ge?K&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Gt,re,zt):e.texImage2D(i.TEXTURE_2D,St,Vt,Gt,re,zt);w.generateMipmaps=!1}else if(ge){if(Me){let St=we(bt);e.texStorage2D(i.TEXTURE_2D,Ht,Vt,St.width,St.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,re,bt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Gt,re,bt);g(w)&&B(ct),kt.__version=yt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ae(U,w,tt){if(w.image.length!==6)return;let ct=Oe(U,w),dt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+tt);let yt=n.get(dt);if(dt.version!==yt.__version||ct===!0){e.activeTexture(i.TEXTURE0+tt);let kt=Be.getPrimaries(Be.workingColorSpace),gt=w.colorSpace===ws?null:Be.getPrimaries(w.colorSpace),bt=w.colorSpace===ws||kt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,Vt=[];for(let Tt=0;Tt<6;Tt++)!Gt&&!re?Vt[Tt]=x(w.image[Tt],!0,s.maxCubemapSize):Vt[Tt]=re?w.image[Tt].image:w.image[Tt],Vt[Tt]=Ae(w,Vt[Tt]);let zt=Vt[0],oe=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Me=R(w.internalFormat,oe,ge,w.normalized,w.colorSpace),K=w.isVideoTexture!==!0,Ht=yt.__version===void 0||ct===!0,St=dt.dataReady,Ft=O(w,zt);Pe(i.TEXTURE_CUBE_MAP,w);let qt;if(Gt){K&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Me,zt.width,zt.height);for(let Tt=0;Tt<6;Tt++){qt=Vt[Tt].mipmaps;for(let le=0;le<qt.length;le++){let ne=qt[le];w.format!==Ai?oe!==null?K?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le,0,0,ne.width,ne.height,oe,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le,Me,ne.width,ne.height,0,ne.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le,0,0,ne.width,ne.height,oe,ge,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le,Me,ne.width,ne.height,0,oe,ge,ne.data)}}}else{if(qt=w.mipmaps,K&&Ht){qt.length>0&&Ft++;let Tt=we(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Me,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(re){K?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Vt[Tt].width,Vt[Tt].height,oe,ge,Vt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Me,Vt[Tt].width,Vt[Tt].height,0,oe,ge,Vt[Tt].data);for(let le=0;le<qt.length;le++){let Je=qt[le].image[Tt].image;K?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le+1,0,0,Je.width,Je.height,oe,ge,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le+1,Me,Je.width,Je.height,0,oe,ge,Je.data)}}else{K?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,oe,ge,Vt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Me,oe,ge,Vt[Tt]);for(let le=0;le<qt.length;le++){let ne=qt[le];K?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le+1,0,0,oe,ge,ne.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,le+1,Me,oe,ge,ne.image[Tt])}}}g(w)&&B(i.TEXTURE_CUBE_MAP),yt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Jt(U,w,tt,ct,dt,yt){let kt=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),bt=R(tt.internalFormat,kt,gt,tt.normalized,tt.colorSpace),Gt=n.get(w),re=n.get(tt);if(re.__renderTarget=w,!Gt.__hasExternalTextures){let Vt=Math.max(1,w.width>>yt),zt=Math.max(1,w.height>>yt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,yt,bt,Vt,zt,w.depth,0,kt,gt,null):e.texImage2D(dt,yt,bt,Vt,zt,0,kt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,dt,re.__webglTexture,0,de(w)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,dt,re.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(U,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let ct=w.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,yt=E(w.stencilBuffer,dt),kt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(w),yt,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(w),yt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,yt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,U)}else{let ct=w.textures;for(let dt=0;dt<ct.length;dt++){let yt=ct[dt],kt=r.convert(yt.format,yt.colorSpace),gt=r.convert(yt.type),bt=R(yt.internalFormat,kt,gt,yt.normalized,yt.colorSpace);Se(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(w),bt,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(w),bt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,bt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(U,w,tt){let ct=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(w.depthTexture);if(dt.__renderTarget=w,(!dt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ct){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,w.depthTexture.addEventListener("dispose",G)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,w.depthTexture);let Gt=r.convert(w.depthTexture.format),re=r.convert(w.depthTexture.type),Vt;w.depthTexture.format===Ji?Vt=i.DEPTH_COMPONENT24:w.depthTexture.format===Ys&&(Vt=i.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Vt,w.width,w.height,0,Gt,re,null)}}else At(w.depthTexture,0);let yt=dt.__webglTexture,kt=de(w),gt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,bt=w.depthTexture.format===Ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ji)Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,gt,yt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,bt,gt,yt,0);else if(w.depthTexture.format===Ys)Se(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,gt,yt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,bt,gt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(U){let w=n.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let ct=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ct){let dt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),w.__depthDisposeCallback=dt}w.__boundDepthTexture=ct}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let ct=0;ct<6;ct++)se(w.__webglFramebuffer[ct],U,ct);else{let ct=U.texture.mipmaps;ct&&ct.length>0?se(w.__webglFramebuffer[0],U,0):se(w.__webglFramebuffer,U,0)}else if(tt){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]===void 0)w.__webglDepthbuffer[ct]=i.createRenderbuffer(),me(w.__webglDepthbuffer[ct],U,!1);else{let dt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=w.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,yt)}}else{let ct=U.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),me(w.__webglDepthbuffer,U,!1);else{let dt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(U,w,tt){let ct=n.get(U);w!==void 0&&Jt(ct.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&st(U)}function $(U){let w=U.texture,tt=n.get(U),ct=n.get(w);U.addEventListener("dispose",A);let dt=U.textures,yt=U.isWebGLCubeRenderTarget===!0,kt=dt.length>1;if(kt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=w.version,a.memory.textures++),yt){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let bt=0;bt<w.mipmaps.length;bt++)tt.__webglFramebuffer[gt][bt]=i.createFramebuffer()}else tt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(kt)for(let gt=0,bt=dt.length;gt<bt;gt++){let Gt=n.get(dt[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Se(U)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){let bt=dt[gt];tt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);let Gt=r.convert(bt.format,bt.colorSpace),re=r.convert(bt.type),Vt=R(bt.internalFormat,Gt,re,bt.normalized,bt.colorSpace,U.isXRRenderTarget===!0),zt=de(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Vt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),me(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)Jt(tt.__webglFramebuffer[gt][bt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else Jt(tt.__webglFramebuffer[gt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(w)&&B(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let gt=0,bt=dt.length;gt<bt;gt++){let Gt=dt[gt],re=n.get(Gt),Vt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Vt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Vt,re.__webglTexture),Pe(Vt,Gt),Jt(tt.__webglFramebuffer,U,Gt,i.COLOR_ATTACHMENT0+gt,Vt,0),g(Gt)&&B(Vt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(gt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),Pe(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)Jt(tt.__webglFramebuffer[bt],U,w,i.COLOR_ATTACHMENT0,gt,bt);else Jt(tt.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,gt,0);g(w)&&B(gt),e.unbindTexture()}U.depthBuffer&&st(U)}function Rt(U){let w=U.textures;for(let tt=0,ct=w.length;tt<ct;tt++){let dt=w[tt];if(g(dt)){let yt=k(U),kt=n.get(dt).__webglTexture;e.bindTexture(yt,kt),B(yt),e.unbindTexture()}}}let Bt=[],he=[];function ue(U){if(U.samples>0){if(Se(U)===!1){let w=U.textures,tt=U.width,ct=U.height,dt=i.COLOR_BUFFER_BIT,yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(U),gt=w.length>1;if(gt)for(let Gt=0;Gt<w.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let bt=U.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Gt=0;Gt<w.length;Gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Gt]);let re=n.get(w[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,dt,i.NEAREST),c===!0&&(Bt.length=0,he.length=0,Bt.push(i.COLOR_ATTACHMENT0+Gt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Bt.push(yt),he.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Gt=0;Gt<w.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Gt]);let re=n.get(w[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function de(U){return Math.min(s.maxSamples,U.samples)}function Se(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(U){let w=a.render.frame;d.get(U)!==w&&(d.set(U,w),U.update())}function Ae(U,w){let tt=U.colorSpace,ct=U.format,dt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Mo&&tt!==ws&&(Be.getTransfer(tt)===en?(ct!==Ai||dt!==ci)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",tt)),w}function we(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=ut,this.resetTextureUnits=ot,this.getTextureUnits=Z,this.setTextureUnits=et,this.setTexture2D=At,this.setTexture2DArray=mt,this.setTexture3D=wt,this.setTextureCube=Mt,this.rebindTextures=Ct,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Mb(i,t){function e(n,s=ws){let r,a=Be.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xd)return i.BYTE;if(n===qd)return i.SHORT;if(n===Ta)return i.UNSIGNED_SHORT;if(n===hh)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===Jd)return i.ALPHA;if(n===jd)return i.RGB;if(n===Ai)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===fh)return i.RED;if(n===ph)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===mh)return i.RG_INTEGER;if(n===gh)return i.RGBA_INTEGER;if(n===rl||n===al||n===ol||n===ll)if(a===en)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_h||n===xh||n===vh||n===yh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===Mh||n===bh||n===wh||n===Eh||n===cl||n===Th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sh||n===Mh)return a===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wh)return r.COMPRESSED_R11_EAC;if(n===Eh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cl)return r.COMPRESSED_RG11_EAC;if(n===Th)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ah||n===Ch||n===Rh||n===Ih||n===Ph||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ah)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ch)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ph)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$h||n===Vh||n===Hh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$h)return a===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gh||n===Wh||n===hl||n===Xh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wb=`
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

}`,Sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:bb,fragmentShader:wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new Wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mf=class extends ji{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,v=null,m=null,y=null,M=null,I=typeof XRWebGLBinding<"u",x=new Sf,g={},B=e.getContextAttributes(),k=null,R=null,E=[],O=[],G=new $t,A=null,F=null,H=new Wn;H.viewport=new nn;let X=new Wn;X.viewport=new nn;let at=[H,X],ot=new rh,Z=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let vt=E[_t];return vt===void 0&&(vt=new _a,E[_t]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(_t){let vt=E[_t];return vt===void 0&&(vt=new _a,E[_t]=vt),vt.getGripSpace()},this.getHand=function(_t){let vt=E[_t];return vt===void 0&&(vt=new _a,E[_t]=vt),vt.getHandSpace()};function ut(_t){let vt=O.indexOf(_t.inputSource);if(vt===-1)return;let Pt=E[vt];Pt!==void 0&&(Pt.update(_t.inputSource,_t.frame,h||a),Pt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function pt(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",pt),s.removeEventListener("inputsourceschange",At);for(let _t=0;_t<E.length;_t++){let vt=O[_t];vt!==null&&(O[_t]=null,E[_t].disconnect(vt))}Z=null,et=null,x.reset();for(let _t in g)delete g[_t];if(t.setRenderTarget(k),y=null,m=null,v=null,s=null,R=null,Oe.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(G.width,G.height,!1),F!==null){let _t=F.camera;_t.fov=F.fov,_t.zoom=F.zoom,_t.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){l=_t,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(k=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",pt),s.addEventListener("inputsourceschange",At),B.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,ae=null,Jt=null;B.depth&&(Jt=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=B.stencil?Ys:Ji,ae=B.stencil?Aa:Vi);let me={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};v=this.getBinding(),m=v.createProjectionLayer(me),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),R=new oi(m.textureWidth,m.textureHeight,{format:Ai,type:ci,depthTexture:new zs(m.textureWidth,m.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Pt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new oi(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function At(_t){for(let vt=0;vt<_t.removed.length;vt++){let Pt=_t.removed[vt],ae=O.indexOf(Pt);ae>=0&&(O[ae]=null,E[ae].disconnect(Pt))}for(let vt=0;vt<_t.added.length;vt++){let Pt=_t.added[vt],ae=O.indexOf(Pt);if(ae===-1){for(let me=0;me<E.length;me++)if(me>=O.length){O.push(Pt),ae=me;break}else if(O[me]===null){O[me]=Pt,ae=me;break}if(ae===-1)break}let Jt=E[ae];Jt&&Jt.connect(Pt)}}let mt=new q,wt=new q;function Mt(_t,vt,Pt){mt.setFromMatrixPosition(vt.matrixWorld),wt.setFromMatrixPosition(Pt.matrixWorld);let ae=mt.distanceTo(wt),Jt=vt.projectionMatrix.elements,me=Pt.projectionMatrix.elements,se=Jt[14]/(Jt[10]-1),st=Jt[14]/(Jt[10]+1),Ct=(Jt[9]+1)/Jt[5],$=(Jt[9]-1)/Jt[5],Rt=(Jt[8]-1)/Jt[0],Bt=(me[8]+1)/me[0],he=se*Rt,ue=se*Bt,de=ae/(-Rt+Bt),Se=de*-Rt;if(vt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Se),_t.translateZ(de),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Jt[10]===-1)_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let W=se+de,Ae=st+de,we=he-Se,U=ue+(ae-Se),w=Ct*st/Ae*W,tt=$*st/Ae*W;_t.projectionMatrix.makePerspective(we,U,w,tt,W,Ae),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function Yt(_t,vt){vt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(vt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let vt=_t.near,Pt=_t.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),ot.near=X.near=H.near=vt,ot.far=X.far=H.far=Pt,(Z!==ot.near||et!==ot.far)&&(s.updateRenderState({depthNear:ot.near,depthFar:ot.far}),Z=ot.near,et=ot.far),ot.layers.mask=_t.layers.mask|6,H.layers.mask=ot.layers.mask&-5,X.layers.mask=ot.layers.mask&-3;let ae=_t.parent,Jt=ot.cameras;Yt(ot,ae);for(let me=0;me<Jt.length;me++)Yt(Jt[me],ae);Jt.length===2?Mt(ot,H,X):ot.projectionMatrix.copy(H.projectionMatrix),F===null&&_t.isPerspectiveCamera&&(F={camera:_t,fov:_t.fov,zoom:_t.zoom}),ee(_t,ot,ae)};function ee(_t,vt,Pt){Pt===null?_t.matrix.copy(vt.matrixWorld):(_t.matrix.copy(Pt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(vt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=pa*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return ot},this.getFoveation=function(){if(!(m===null&&y===null))return c},this.setFoveation=function(_t){c=_t,m!==null&&(m.fixedFoveation=_t),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=_t)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ot)},this.getCameraTexture=function(_t){return g[_t]};let $e=null;function Pe(_t,vt){if(d=vt.getViewerPose(h||a),M=vt,d!==null){let Pt=d.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let ae=!1;Pt.length!==ot.cameras.length&&(ot.cameras.length=0,ae=!0);for(let st=0;st<Pt.length;st++){let Ct=Pt[st],$=null;if(y!==null)$=y.getViewport(Ct);else{let Bt=v.getViewSubImage(m,Ct);$=Bt.viewport,st===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Rt=at[st];Rt===void 0&&(Rt=new Wn,Rt.layers.enable(st),Rt.viewport=new nn,at[st]=Rt),Rt.matrix.fromArray(Ct.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ct.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set($.x,$.y,$.width,$.height),st===0&&(ot.matrix.copy(Rt.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale)),ae===!0&&ot.cameras.push(Rt)}let Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let st=v.getDepthInformation(Pt[0]);st&&st.isValid&&st.texture&&x.init(st,s.renderState)}if(Jt&&Jt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let st=0;st<Pt.length;st++){let Ct=Pt[st].camera;if(Ct){let $=g[Ct];$||($=new Uo,g[Ct]=$);let Rt=v.getCameraImage(Ct);$.sourceTexture=Rt}}}}for(let Pt=0;Pt<E.length;Pt++){let ae=O[Pt],Jt=E[Pt];ae!==null&&Jt!==void 0&&Jt.update(ae,vt,h||a)}$e&&$e(_t,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),M=null}let Oe=new Dg;Oe.setAnimationLoop(Pe),this.setAnimationLoop=function(_t){$e=_t},this.dispose=function(){}}},Eb=new ze,kg=new Te;kg.set(-1,0,0,0,1,0,0,0,1);function Tb(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,sf(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,B,k,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),v(x,g)):g.isMeshPhongMaterial?(r(x,g),d(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),m(x,g),g.isMeshPhysicalMaterial&&y(x,g,R)):g.isMeshMatcapMaterial?(r(x,g),M(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),I(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&l(x,g)):g.isPointsMaterial?c(x,g,B,k):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Kn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Kn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let B=t.get(g),k=B.envMap,R=B.envMapRotation;k&&(x.envMap.value=k,x.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(kg),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function l(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,B,k){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*B,x.scale.value=k*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,B){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,g){g.matcap&&(x.matcap.value=g.matcap)}function I(x,g){let B=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ab(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let O=E.program;n.uniformBlockBinding(R,O)}function h(R,E){let O=s[R.id];O===void 0&&(x(R),O=d(R),s[R.id]=O,R.addEventListener("dispose",B));let G=E.program;n.updateUBOMapping(R,G);let A=t.render.frame;r[R.id]!==A&&(m(R),r[R.id]=A)}function d(R){let E=v();R.__bindingPointIndex=E;let O=i.createBuffer(),G=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,G,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,O),O}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){let E=s[R.id],O=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,F=O.length;A<F;A++){let H=O[A];if(Array.isArray(H))for(let X=0,at=H.length;X<at;X++)y(H[X],A,X,G);else y(H,A,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,E,O,G){if(I(R,E,O,G)===!0){let A=R.__offset,F=R.value;if(Array.isArray(F)){let H=0;for(let X=0;X<F.length;X++){let at=F[X],ot=g(at);M(at,R.__data,H),typeof at!="number"&&typeof at!="boolean"&&!at.isMatrix3&&!ArrayBuffer.isView(at)&&(H+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,R.__data)}}function M(R,E,O){typeof R=="number"||typeof R=="boolean"?E[0]=R:R.isMatrix3?(E[0]=R.elements[0],E[1]=R.elements[1],E[2]=R.elements[2],E[3]=0,E[4]=R.elements[3],E[5]=R.elements[4],E[6]=R.elements[5],E[7]=0,E[8]=R.elements[6],E[9]=R.elements[7],E[10]=R.elements[8],E[11]=0):ArrayBuffer.isView(R)?E.set(new R.constructor(R.buffer,R.byteOffset,E.length)):R.toArray(E,O)}function I(R,E,O,G){let A=R.value,F=E+"_"+O;if(G[F]===void 0)return typeof A=="number"||typeof A=="boolean"?G[F]=A:ArrayBuffer.isView(A)?G[F]=A.slice():G[F]=A.clone(),!0;{let H=G[F];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return G[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(H.equals(A)===!1)return H.copy(A),!0}}return!1}function x(R){let E=R.uniforms,O=0,G=16;for(let F=0,H=E.length;F<H;F++){let X=Array.isArray(E[F])?E[F]:[E[F]];for(let at=0,ot=X.length;at<ot;at++){let Z=X[at],et=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,pt=et.length;ut<pt;ut++){let At=et[ut],mt=g(At),wt=O%G,Mt=wt%mt.boundary,Yt=wt+Mt;O+=Mt,Yt!==0&&G-Yt<mt.storage&&(O+=G-Yt),Z.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=O,O+=mt.storage}}}let A=O%G;return A>0&&(O+=G-A),R.__size=O,R.__cache={},this}function g(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(E.boundary=16,E.storage=R.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",R),E}function B(R){let E=R.target;E.removeEventListener("dispose",B);let O=a.indexOf(E.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:k}}var Cb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function Rb(){return ns===null&&(ns=new Io(Cb,16,16,Zs,Hi),ns.name="DFG_LUT",ns.minFilter=Bn,ns.magFilter=Bn,ns.wrapS=Yi,ns.wrapT=Yi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var tu=class{constructor(t={}){let{canvas:e=eg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=ci}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let I=y,x=new Set([gh,mh,ph]),g=new Set([ci,Vi,Ta,Aa,uh,dh]),B=new Uint32Array(4),k=new Int32Array(4),R=new q,E=null,O=null,G=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,X=!1,at=null,ot=null,Z=null,et=null;this._outputColorSpace=mi;let ut=0,pt=0,At=null,mt=-1,wt=null,Mt=new nn,Yt=new nn,ee=null,$e=new _e(0),Pe=0,Oe=e.width,_t=e.height,vt=1,Pt=null,ae=null,Jt=new nn(0,0,Oe,_t),me=new nn(0,0,Oe,_t),se=!1,st=new xa,Ct=!1,$=!1,Rt=new ze,Bt=new q,he=new nn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Se(){return At===null?vt:1}let W=n;function Ae(C,J){return e.getContext(C,J)}let we,U,w,tt,ct,dt,yt,kt,gt,bt,Gt,re,Vt,zt,oe,ge,Me,K,Ht,St,Ft,qt,Tt;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",Ge,!1),e.addEventListener("webglcontextcreationerror",Yn,!1),W===null){let J="webgl2";if(W=Ae(J,C),W===null)throw Ae(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(C){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",Ge,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),ye("WebGLRenderer: "+C.message),C}function le(){we=new FS(W),we.init(),Ft=new Mb(W,we),U=new TS(W,we,t,Ft),w=new yb(W,we),U.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),ot=W.createFramebuffer(),Z=W.createFramebuffer(),et=W.createFramebuffer(),tt=new kS(W),ct=new ab,dt=new Sb(W,we,w,ct,U,Ft,tt),yt=new US(H),kt=new $x(W),qt=new wS(W,kt),gt=new OS(W,kt,tt,qt),bt=new $S(W,gt,kt,qt,tt),K=new zS(W,U,dt),oe=new AS(ct),Gt=new rb(H,yt,we,U,qt,oe),re=new Tb(H,ct),Vt=new lb,zt=new pb(we),Me=new bS(H,yt,w,bt,M,c),ge=new vb(H,bt,U),Tt=new Ab(W,tt,U,w),Ht=new ES(W,we,tt),St=new BS(W,we,tt),tt.programs=Gt.programs,H.capabilities=U,H.extensions=we,H.properties=ct,H.renderLists=Vt,H.shadowMap=ge,H.state=w,H.info=tt}I!==ci&&(F=new HS(I,e.width,e.height,l,s,r));let ne=new Mf(H,W);this.xr=ne,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(Oe,_t,!1))},this.getSize=function(C){return C.set(Oe,_t)},this.setSize=function(C,J,lt=!0){if(ne.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=C,_t=J,e.width=Math.floor(C*vt),e.height=Math.floor(J*vt),lt===!0&&(e.style.width=C+"px",e.style.height=J+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(Oe*vt,_t*vt).floor()},this.setDrawingBufferSize=function(C,J,lt){Oe=C,_t=J,vt=lt,e.width=Math.floor(C*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,C,J)},this.setEffects=function(C){if(I===ci){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let J=0;J<C.length;J++)if(C[J].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Mt)},this.getViewport=function(C){return C.copy(Jt)},this.setViewport=function(C,J,lt,nt){C.isVector4?Jt.set(C.x,C.y,C.z,C.w):Jt.set(C,J,lt,nt),w.viewport(Mt.copy(Jt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,J,lt,nt){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,J,lt,nt),w.scissor(Yt.copy(me).multiplyScalar(vt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){w.setScissorTest(se=C)},this.setOpaqueSort=function(C){Pt=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,lt=!0){let nt=0;if(C){let Q=!1;if(At!==null){let Ut=At.texture.format;Q=x.has(Ut)}if(Q){let Ut=At.texture.type,Kt=g.has(Ut),It=Me.getClearColor(),jt=Me.getClearAlpha(),Ot=It.r,xt=It.g,Qt=It.b;Kt?(B[0]=Ot,B[1]=xt,B[2]=Qt,B[3]=jt,W.clearBufferuiv(W.COLOR,0,B)):(k[0]=Ot,k[1]=xt,k[2]=Qt,k[3]=jt,W.clearBufferiv(W.COLOR,0,k))}else nt|=W.COLOR_BUFFER_BIT}J&&(nt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(nt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&W.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),at=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",Ge,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),Me.dispose(),Vt.dispose(),zt.dispose(),ct.dispose(),yt.dispose(),bt.dispose(),qt.dispose(),Tt.dispose(),Gt.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Oa),ne.removeEventListener("sessionend",Rs),us.stop()};function Je(C){C.preventDefault(),Eo("WebGLRenderer: Context Lost."),X=!0}function Ge(){Eo("WebGLRenderer: Context Restored."),X=!1;let C=tt.autoReset,J=ge.enabled,lt=ge.autoUpdate,nt=ge.needsUpdate,Q=ge.type;le(),tt.autoReset=C,ge.enabled=J,ge.autoUpdate=lt,ge.needsUpdate=nt,ge.type=Q}function Yn(C){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function un(C){let J=C.target;J.removeEventListener("dispose",un),vi(J)}function vi(C){Ci(C),ct.remove(C)}function Ci(C){let J=ct.get(C).programs;J!==void 0&&(J.forEach(function(lt){Gt.releaseProgram(lt)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,lt,nt,Q,Ut){J===null&&(J=ue);let Kt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,It=ir(C,J,lt,nt,Q);w.setMaterial(nt,Kt);let jt=lt.index,Ot=1;if(nt.wireframe===!0){if(jt=gt.getWireframeAttribute(lt),jt===void 0)return;Ot=2}let xt=lt.drawRange,Qt=lt.attributes.position,Lt=xt.start*Ot,We=(xt.start+xt.count)*Ot;Ut!==null&&(Lt=Math.max(Lt,Ut.start*Ot),We=Math.min(We,(Ut.start+Ut.count)*Ot)),jt!==null?(Lt=Math.max(Lt,0),We=Math.min(We,jt.count)):Qt!=null&&(Lt=Math.max(Lt,0),We=Math.min(We,Qt.count));let _n=We-Lt;if(_n<0||_n===1/0)return;qt.setup(Q,nt,It,lt,jt);let Ye,je=Ht;if(jt!==null&&(Ye=kt.get(jt),je=St,je.setIndex(Ye)),Q.isMesh)nt.wireframe===!0?(w.setLineWidth(nt.wireframeLinewidth*Se()),je.setMode(W.LINES)):je.setMode(W.TRIANGLES);else if(Q.isLine){let xn=nt.linewidth;xn===void 0&&(xn=1),w.setLineWidth(xn*Se()),Q.isLineSegments?je.setMode(W.LINES):Q.isLineLoop?je.setMode(W.LINE_LOOP):je.setMode(W.LINE_STRIP)}else Q.isPoints?je.setMode(W.POINTS):Q.isSprite&&je.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(we.get("WEBGL_multi_draw"))je.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let xn=Q._multiDrawStarts,te=Q._multiDrawCounts,dn=Q._multiDrawCount,ke=jt?kt.get(jt).bytesPerElement:1,ei=ct.get(nt).currentProgram.getUniforms();for(let yi=0;yi<dn;yi++)ei.setValue(W,"_gl_DrawID",yi),je.render(xn[yi]/ke,te[yi])}else if(Q.isInstancedMesh)je.renderInstances(Lt,_n,Q.count);else if(lt.isInstancedBufferGeometry){let xn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,te=Math.min(lt.instanceCount,xn);je.renderInstances(Lt,_n,te)}else je.render(Lt,_n)};function Ks(C,J,lt,nt){at!==null&&C.isNodeMaterial&&at.setObject(nt,C),Ct===!0&&oe.setState(C,lt,!1),C.transparent===!0&&C.side===ts&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,nr(C,J,nt),C.side=Ws,C.needsUpdate=!0,nr(C,J,nt),C.side=ts):nr(C,J,nt)}this.compile=function(C,J,lt=null){lt===null&&(lt=C),at!==null&&at.renderStart(C,J,lt),O=zt.get(lt),O.init(J),A.push(O),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),C!==lt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights(),at!==null&&at.updateLights(O.state.lightsArray),$=this.localClippingEnabled,Ct=oe.init(this.clippingPlanes,$),Ct===!0&&oe.setGlobalState(this.clippingPlanes,J),at!==null&&ge.render(O.state.shadowsArray,lt,J);let nt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ut=Q.material;if(Ut)if(Array.isArray(Ut))for(let Kt=0;Kt<Ut.length;Kt++){let It=Ut[Kt];Ks(It,lt,J,Q),nt.add(It)}else Ks(Ut,lt,J,Q),nt.add(Ut)}),O=A.pop(),at!==null&&at.renderEnd(),nt},this.compileAsync=function(C,J,lt=null){let nt=this.compile(C,J,lt);return new Promise(Q=>{function Ut(){if(nt.forEach(function(Kt){let jt=ct.get(Kt).currentProgram;(jt===void 0||jt.isReady())&&nt.delete(Kt)}),nt.size===0){Q(C);return}setTimeout(Ut,10)}we.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Cs=null;function Fa(C){Cs&&Cs(C)}function Oa(){us.stop()}function Rs(){us.start()}let us=new Dg;us.setAnimationLoop(Fa),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(C){Cs=C,ne.setAnimationLoop(C),C===null?us.stop():us.start()},ne.addEventListener("sessionstart",Oa),ne.addEventListener("sessionend",Rs),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;at!==null&&at.renderStart(C,J);let lt=ne.enabled===!0&&ne.isPresenting===!0,nt=F!==null&&(At===null||lt)&&F.begin(H,At);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(J),J=ne.getCamera()),C.isScene===!0&&C.onBeforeRender(H,C,J,At),O=zt.get(C,A.length),O.init(J),O.state.textureUnits=dt.getTextureUnits(),A.push(O),Rt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),st.setFromProjectionMatrix(Rt,Bi,J.reversedDepth),$=this.localClippingEnabled,Ct=oe.init(this.clippingPlanes,$),E=Vt.get(C,G.length),E.init(),G.push(E),ne.enabled===!0&&ne.isPresenting===!0){let Kt=H.xr.getDepthSensingMesh();Kt!==null&&Qs(Kt,J,-1/0,H.sortObjects)}Qs(C,J,0,H.sortObjects),E.finish(),at!==null&&at.updateLights(O.state.lightsArray),H.sortObjects===!0&&E.sort(Pt,ae),de=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,de&&Me.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ct===!0&&oe.beginShadows();let Q=O.state.shadowsArray;if(ge.render(Q,C,J),Ct===!0&&oe.endShadows(),(nt&&F.hasRenderPass())===!1){let Kt=E.opaque,It=E.transmissive;if(O.setupLights(),J.isArrayCamera){let jt=J.cameras;if(It.length>0)for(let Ot=0,xt=jt.length;Ot<xt;Ot++){let Qt=jt[Ot];tr(Kt,It,C,Qt)}de&&Me.render(C);for(let Ot=0,xt=jt.length;Ot<xt;Ot++){let Qt=jt[Ot];Wi(E,C,Qt,Qt.viewport)}}else It.length>0&&tr(Kt,It,C,J),de&&Me.render(C),Wi(E,C,J)}At!==null&&pt===0&&(dt.updateMultisampleRenderTarget(At),dt.updateRenderTargetMipmap(At)),nt&&F.end(H),C.isScene===!0&&C.onAfterRender(H,C,J),qt.resetDefaultState(),mt=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],dt.setTextureUnits(O.state.textureUnits),Ct===!0&&oe.setGlobalState(H.clippingPlanes,O.state.camera)):O=null,G.pop(),G.length>0?E=G[G.length-1]:E=null,at!==null&&at.renderEnd()};function Qs(C,J,lt,nt){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(st)){nt&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);let Kt=bt.update(C),It=C.material;It.visible&&E.push(C,Kt,It,lt,he.z,null,J)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(st))){let Kt=bt.update(C),It=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),he.copy(Kt.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(It)){let jt=Kt.groups;for(let Ot=0,xt=jt.length;Ot<xt;Ot++){let Qt=jt[Ot],Lt=It[Qt.materialIndex];Lt&&Lt.visible&&E.push(C,Kt,Lt,lt,he.z,Qt,J)}}else It.visible&&E.push(C,Kt,It,lt,he.z,null,J)}}let Ut=C.children;for(let Kt=0,It=Ut.length;Kt<It;Kt++)Qs(Ut[Kt],J,lt,nt)}function Wi(C,J,lt,nt){let{opaque:Q,transmissive:Ut,transparent:Kt}=C;O.setupLightsView(lt),Ct===!0&&oe.setGlobalState(H.clippingPlanes,lt),nt&&w.viewport(Mt.copy(nt)),Q.length>0&&er(Q,J,lt),Ut.length>0&&er(Ut,J,lt),Kt.length>0&&er(Kt,J,lt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function tr(C,J,lt,nt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[nt.id]===void 0){let Lt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[nt.id]=new oi(1,1,{generateMipmaps:!0,type:Lt?Hi:ci,minFilter:qs,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}let Ut=O.state.transmissionRenderTarget[nt.id],Kt=nt.viewport||Mt;Ut.setSize(Kt.z*H.transmissionResolutionScale,Kt.w*H.transmissionResolutionScale);let It=H.getRenderTarget(),jt=H.getActiveCubeFace(),Ot=H.getActiveMipmapLevel();H.setRenderTarget(Ut),H.getClearColor($e),Pe=H.getClearAlpha(),Pe<1&&H.setClearColor(16777215,.5),H.clear(),de&&Me.render(lt);let xt=H.toneMapping;H.toneMapping=$i;let Qt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),O.setupLightsView(nt),Ct===!0&&oe.setGlobalState(H.clippingPlanes,nt),er(C,lt,nt),dt.updateMultisampleRenderTarget(Ut),dt.updateRenderTargetMipmap(Ut),we.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let We=0,_n=J.length;We<_n;We++){let Ye=J[We],{object:je,geometry:xn,material:te,group:dn}=Ye;if(te.side===ts&&je.layers.test(nt.layers)){let ke=te.side;te.side=Kn,te.needsUpdate=!0,Ba(je,lt,nt,xn,te,dn),te.side=ke,te.needsUpdate=!0,Lt=!0}}Lt===!0&&(dt.updateMultisampleRenderTarget(Ut),dt.updateRenderTargetMipmap(Ut))}H.setRenderTarget(It,jt,Ot),H.setClearColor($e,Pe),Qt!==void 0&&(nt.viewport=Qt),H.toneMapping=xt}function er(C,J,lt){let nt=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,Ut=C.length;Q<Ut;Q++){let Kt=C[Q],{object:It,geometry:jt,group:Ot}=Kt,xt=Kt.material;xt.allowOverride===!0&&nt!==null&&(xt=nt),It.layers.test(lt.layers)&&Ba(It,J,lt,jt,xt,Ot)}}function Ba(C,J,lt,nt,Q,Ut){at!==null&&Q.isNodeMaterial&&at.setObject(C,Q),C.onBeforeRender(H,J,lt,nt,Q,Ut),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(H,J,lt,nt,C,Ut),Q.transparent===!0&&Q.side===ts&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,H.renderBufferDirect(lt,J,nt,Q,C,Ut),Q.side=Ws,Q.needsUpdate=!0,H.renderBufferDirect(lt,J,nt,Q,C,Ut),Q.side=ts):H.renderBufferDirect(lt,J,nt,Q,C,Ut),C.onAfterRender(H,J,lt,nt,Q,Ut)}function nr(C,J,lt){J.isScene!==!0&&(J=ue);let nt=ct.get(C),Q=O.state.lights,Ut=O.state.shadowsArray,Kt=Q.state.version,It=Gt.getParameters(C,Q.state,Ut,J,lt,O.state.lightProbeGridArray),jt=Gt.getProgramCacheKey(It),Ot=nt.programs;nt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?J.environment:null,nt.fog=J.fog;let xt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;nt.envMap=yt.get(C.envMap||nt.environment,xt),nt.envMapRotation=nt.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",un),Ot=new Map,nt.programs=Ot);let Qt=Ot.get(jt);if(Qt!==void 0){if(nt.currentProgram===Qt&&nt.lightsStateVersion===Kt)return ka(C,It),Qt}else It.uniforms=Gt.getUniforms(C),at!==null&&C.isNodeMaterial&&at.build(C,lt,It),C.onBeforeCompile(It,H),Qt=Gt.acquireProgram(It,jt),Ot.set(jt,Qt),nt.uniforms=It.uniforms;let Lt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Lt.clippingPlanes=oe.uniform),ka(C,It),nt.needsLights=Su(C),nt.lightsStateVersion=Kt,nt.needsLights&&(Lt.ambientLightColor.value=Q.state.ambient,Lt.lightProbe.value=Q.state.probe,Lt.sunLights.value=Q.state.sun,Lt.sunLightShadows.value=Q.state.sunShadow,Lt.directionalLights.value=Q.state.directional,Lt.directionalLightShadows.value=Q.state.directionalShadow,Lt.spotLights.value=Q.state.spot,Lt.spotLightShadows.value=Q.state.spotShadow,Lt.rectAreaLights.value=Q.state.rectArea,Lt.ltc_1.value=Q.state.rectAreaLTC1,Lt.ltc_2.value=Q.state.rectAreaLTC2,Lt.pointLights.value=Q.state.point,Lt.pointLightShadows.value=Q.state.pointShadow,Lt.hemisphereLights.value=Q.state.hemi,Lt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Lt.sunShadowCascade.value=Q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Q.state.spotLightMatrix,Lt.spotLightMap.value=Q.state.spotLightMap,Lt.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.lightProbeGrid=O.state.lightProbeGridArray.length>0,nt.currentProgram=Qt,nt.uniformsList=null,Qt}function Br(C){if(C.uniformsList===null){let J=C.currentProgram.getUniforms();C.uniformsList=Ia.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function ka(C,J){let lt=ct.get(C);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function Ml(C,J){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(J.matrixWorld);for(let lt=0,nt=C.length;lt<nt;lt++){let Q=C[lt];if(Q.texture!==null&&Q.boundingBox.containsPoint(R))return Q}return null}function ir(C,J,lt,nt,Q){J.isScene!==!0&&(J=ue),dt.resetTextureUnits();let Ut=J.fog,Kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?J.environment:null,It=At===null?H.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Be.workingColorSpace,jt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Ot=yt.get(nt.envMap||Kt,jt),xt=nt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Qt=!!lt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Lt=!!lt.morphAttributes.position,We=!!lt.morphAttributes.normal,_n=!!lt.morphAttributes.color,Ye=$i;nt.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ye=H.toneMapping);let je=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,xn=je!==void 0?je.length:0,te=ct.get(nt),dn=O.state.lights;if(Ct===!0&&($===!0||C!==wt)){let rn=C===wt&&nt.id===mt;oe.setState(nt,C,rn)}let ke=!1;nt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==dn.state.version||te.outputColorSpace!==It||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Ot||nt.fog===!0&&te.fog!==Ut||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==oe.numPlanes||te.numIntersection!==oe.numIntersection)||te.vertexAlphas!==xt||te.vertexTangents!==Qt||te.morphTargets!==Lt||te.morphNormals!==We||te.morphColors!==_n||te.toneMapping!==Ye||te.morphTargetsCount!==xn||!!te.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,te.__version=nt.version);let ei=te.currentProgram;ke===!0&&(ei=nr(nt,J,Q),at&&nt.isNodeMaterial&&at.onUpdateProgram(nt,ei,te));let yi=!1,Xi=!1,Is=!1,Ke=ei.getUniforms(),gn=te.uniforms;if(w.useProgram(ei.program)&&(yi=!0,Xi=!0,Is=!0),nt.id!==mt&&(mt=nt.id,Xi=!0),te.needsLights){let rn=Ml(O.state.lightProbeGridArray,Q);te.lightProbeGrid!==rn&&(te.lightProbeGrid=rn,Xi=!0)}if(yi||wt!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ke.setValue(W,"projectionMatrix",C.projectionMatrix),Ke.setValue(W,"viewMatrix",C.matrixWorldInverse);let ui=Ke.map.cameraPosition;ui!==void 0&&ui.setValue(W,Bt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Ke.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ke.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),wt!==C&&(wt=C,Xi=!0,Is=!0)}if(te.needsLights&&(dn.state.sunShadowMap.length>0&&Ke.setValue(W,"sunShadowMap",dn.state.sunShadowMap,dt),dn.state.directionalShadowMap.length>0&&Ke.setValue(W,"directionalShadowMap",dn.state.directionalShadowMap,dt),dn.state.spotShadowMap.length>0&&Ke.setValue(W,"spotShadowMap",dn.state.spotShadowMap,dt),dn.state.pointShadowMap.length>0&&Ke.setValue(W,"pointShadowMap",dn.state.pointShadowMap,dt)),Q.isSkinnedMesh){Ke.setOptional(W,Q,"bindMatrix"),Ke.setOptional(W,Q,"bindMatrixInverse");let rn=Q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ke.setValue(W,"boneTexture",rn.boneTexture,dt))}Q.isBatchedMesh&&(Ke.setOptional(W,Q,"batchingTexture"),Ke.setValue(W,"batchingTexture",Q._matricesTexture,dt),Ke.setOptional(W,Q,"batchingIdTexture"),Ke.setValue(W,"batchingIdTexture",Q._indirectTexture,dt),Ke.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ke.setValue(W,"batchingColorTexture",Q._colorsTexture,dt));let Ie=lt.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&K.update(Q,lt,ei),(Xi||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Ke.setValue(W,"receiveShadow",Q.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&J.environment!==null&&(gn.envMapIntensity.value=J.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=Rb()),Xi){if(Ke.setValue(W,"toneMappingExposure",H.toneMappingExposure),te.needsLights&&sr(gn,Is),Ut&&nt.fog===!0&&re.refreshFogUniforms(gn,Ut),re.refreshMaterialUniforms(gn,nt,vt,_t,O.state.transmissionRenderTarget[C.id]),te.needsLights&&te.lightProbeGrid){let rn=te.lightProbeGrid;gn.probesSH.value=rn.texture,gn.probesMin.value.copy(rn.boundingBox.min),gn.probesMax.value.copy(rn.boundingBox.max),gn.probesResolution.value.copy(rn.resolution)}Ia.upload(W,Br(te),gn,dt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ia.upload(W,Br(te),gn,dt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ke.setValue(W,"center",Q.center),Ke.setValue(W,"modelViewMatrix",Q.modelViewMatrix),Ke.setValue(W,"normalMatrix",Q.normalMatrix),Ke.setValue(W,"modelMatrix",Q.matrixWorld),nt.uniformsGroups!==void 0){let rn=nt.uniformsGroups;for(let ui=0,Ps=rn.length;ui<Ps;ui++){let kr=rn[ui];Tt.update(kr,ei),Tt.bind(kr,ei)}}return ei}function sr(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.sunLights.needsUpdate=J,C.sunLightShadows.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Su(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return pt},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(C,J,lt){let nt=ct.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),ct.get(C.texture).__webglTexture=J,ct.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:lt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){let lt=ct.get(C);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,lt=0){At=C,ut=J,pt=lt;let nt=null,Q=!1,Ut=!1;if(C){let It=ct.get(C);if(It.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(W.FRAMEBUFFER,It.__webglFramebuffer),Mt.copy(C.viewport),Yt.copy(C.scissor),ee=C.scissorTest,w.viewport(Mt),w.scissor(Yt),w.setScissorTest(ee),mt=-1;return}else if(It.__webglFramebuffer===void 0)dt.setupRenderTarget(C);else if(It.__hasExternalTextures)dt.rebindTextures(C,ct.get(C.texture).__webglTexture,ct.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let xt=C.depthTexture;if(It.__boundDepthTexture!==xt){if(xt!==null&&ct.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(C)}}let jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ut=!0);let Ot=ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ot[J])?nt=Ot[J][lt]:nt=Ot[J],Q=!0):C.samples>0&&dt.useMultisampledRTT(C)===!1?nt=ct.get(C).__webglMultisampledFramebuffer:Array.isArray(Ot)?nt=Ot[lt]:nt=Ot,Mt.copy(C.viewport),Yt.copy(C.scissor),ee=C.scissorTest}else Mt.copy(Jt).multiplyScalar(vt).floor(),Yt.copy(me).multiplyScalar(vt).floor(),ee=se;if(lt!==0&&(nt=ot),w.bindFramebuffer(W.FRAMEBUFFER,nt)&&w.drawBuffers(C,nt),w.viewport(Mt),w.scissor(Yt),w.setScissorTest(ee),Q){let It=ct.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+J,It.__webglTexture,lt)}else if(Ut){let It=J;for(let jt=0;jt<C.textures.length;jt++){let Ot=ct.get(C.textures[jt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+jt,Ot.__webglTexture,lt,It)}}else if(C!==null&&lt!==0){let It=ct.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,It.__webglTexture,lt)}mt=-1};function bl(C){let J=ct.get(C);return(J.__readFormat!==C.format||J.__readType!==C.type)&&(J.__readFormat=C.format,J.__readType=C.type,J.__formatReadable=U.textureFormatReadable(C.format),J.__typeReadable=U.textureTypeReadable(C.type)),J}this.readRenderTargetPixels=function(C,J,lt,nt,Q,Ut,Kt,It=0){if(!(C&&C.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Kt!==void 0&&(jt=jt[Kt]),jt){w.bindFramebuffer(W.FRAMEBUFFER,jt);try{let Ot=C.textures[It],xt=Ot.format,Qt=Ot.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+It);let Lt=bl(Ot);if(Lt.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-nt&&lt>=0&&lt<=C.height-Q&&W.readPixels(J,lt,nt,Q,Ft.convert(xt),Ft.convert(Qt),Ut)}finally{let Ot=At!==null?ct.get(At).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,J,lt,nt,Q,Ut,Kt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Kt!==void 0&&(jt=jt[Kt]),jt)if(J>=0&&J<=C.width-nt&&lt>=0&&lt<=C.height-Q){w.bindFramebuffer(W.FRAMEBUFFER,jt);let Ot=C.textures[It],xt=Ot.format,Qt=Ot.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+It);let Lt=bl(Ot);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.bufferData(W.PIXEL_PACK_BUFFER,Ut.byteLength,W.STREAM_READ),W.readPixels(J,lt,nt,Q,Ft.convert(xt),Ft.convert(Qt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let _n=At!==null?ct.get(At).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,_n);let Ye=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ig(W,Ye,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ut),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(We),W.deleteSync(Ye),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,lt=0){let nt=Math.pow(2,-lt),Q=Math.floor(C.image.width*nt),Ut=Math.floor(C.image.height*nt),Kt=J!==null?J.x:0,It=J!==null?J.y:0;dt.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,lt,0,0,Kt,It,Q,Ut),w.unbindTexture()},this.copyTextureToTexture=function(C,J,lt=null,nt=null,Q=0,Ut=0){let Kt,It,jt,Ot,xt,Qt,Lt,We,_n,Ye=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(lt!==null)Kt=lt.max.x-lt.min.x,It=lt.max.y-lt.min.y,jt=lt.isBox3?lt.max.z-lt.min.z:1,Ot=lt.min.x,xt=lt.min.y,Qt=lt.isBox3?lt.min.z:0;else{let gn=Math.pow(2,-Q);Kt=Math.floor(Ye.width*gn),It=Math.floor(Ye.height*gn),C.isDataArrayTexture?jt=Ye.depth:C.isData3DTexture?jt=Math.floor(Ye.depth*gn):jt=1,Ot=0,xt=0,Qt=0}nt!==null?(Lt=nt.x,We=nt.y,_n=nt.z):(Lt=0,We=0,_n=0);let je=Ft.convert(J.format),xn=Ft.convert(J.type),te;J.isData3DTexture?(dt.setTexture3D(J,0),te=W.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(dt.setTexture2DArray(J,0),te=W.TEXTURE_2D_ARRAY):(dt.setTexture2D(J,0),te=W.TEXTURE_2D),w.activeTexture(W.TEXTURE0),w.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),w.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),w.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);let dn=w.getParameter(W.UNPACK_ROW_LENGTH),ke=w.getParameter(W.UNPACK_IMAGE_HEIGHT),ei=w.getParameter(W.UNPACK_SKIP_PIXELS),yi=w.getParameter(W.UNPACK_SKIP_ROWS),Xi=w.getParameter(W.UNPACK_SKIP_IMAGES);w.pixelStorei(W.UNPACK_ROW_LENGTH,Ye.width),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ye.height),w.pixelStorei(W.UNPACK_SKIP_PIXELS,Ot),w.pixelStorei(W.UNPACK_SKIP_ROWS,xt),w.pixelStorei(W.UNPACK_SKIP_IMAGES,Qt);let Is=C.isDataArrayTexture||C.isData3DTexture,Ke=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){let gn=ct.get(C),Ie=ct.get(J),rn=ct.get(gn.__renderTarget),ui=ct.get(Ie.__renderTarget);w.bindFramebuffer(W.READ_FRAMEBUFFER,rn.__webglFramebuffer),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ps=0;Ps<jt;Ps++)Is&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.get(C).__webglTexture,Q,Qt+Ps),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.get(J).__webglTexture,Ut,_n+Ps)),W.blitFramebuffer(Ot,xt,Kt,It,Lt,We,Kt,It,W.DEPTH_BUFFER_BIT,W.NEAREST);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||ct.has(C)){let gn=ct.get(C),Ie=ct.get(J);w.bindFramebuffer(W.READ_FRAMEBUFFER,Z),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,et);for(let rn=0;rn<jt;rn++)Is?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,gn.__webglTexture,Q,Qt+rn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,gn.__webglTexture,Q),Ke?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ie.__webglTexture,Ut,_n+rn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ie.__webglTexture,Ut),Q!==0?W.blitFramebuffer(Ot,xt,Kt,It,Lt,We,Kt,It,W.COLOR_BUFFER_BIT,W.NEAREST):Ke?W.copyTexSubImage3D(te,Ut,Lt,We,_n+rn,Ot,xt,Kt,It):W.copyTexSubImage2D(te,Ut,Lt,We,Ot,xt,Kt,It);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ke?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(te,Ut,Lt,We,_n,Kt,It,jt,je,xn,Ye.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(te,Ut,Lt,We,_n,Kt,It,jt,je,Ye.data):W.texSubImage3D(te,Ut,Lt,We,_n,Kt,It,jt,je,xn,Ye):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ut,Lt,We,Kt,It,je,xn,Ye.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ut,Lt,We,Ye.width,Ye.height,je,Ye.data):W.texSubImage2D(W.TEXTURE_2D,Ut,Lt,We,Kt,It,je,xn,Ye);w.pixelStorei(W.UNPACK_ROW_LENGTH,dn),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ke),w.pixelStorei(W.UNPACK_SKIP_PIXELS,ei),w.pixelStorei(W.UNPACK_SKIP_ROWS,yi),w.pixelStorei(W.UNPACK_SKIP_IMAGES,Xi),Ut===0&&J.generateMipmaps&&W.generateMipmap(te),w.unbindTexture()},this.initRenderTarget=function(C){ct.get(C).__webglFramebuffer===void 0&&dt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?dt.setTextureCube(C,0):C.isData3DTexture?dt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?dt.setTexture2DArray(C,0):dt.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){ut=0,pt=0,At=null,w.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),e.unpackColorSpace=Be._getUnpackColorSpace()}};var $g=new jn,iu=new q,Gi=class extends Qo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Sn(t,3)),this.setAttribute("uv",new Sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Gs(e,6,1);return this.setAttribute("instanceStart",new zi(n,3,0)),this.setAttribute("instanceEnd",new zi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Gs(e,6,1);return this.setAttribute("instanceColorStart",new zi(n,3,0)),this.setAttribute("instanceColorEnd",new zi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Xo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),$g.setFromBufferAttribute(e),this.boundingBox.union($g))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)iu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(iu)),iu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(iu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Xt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qn.line={uniforms:ul.merge([Xt.common,Xt.fog,Xt.line]),vertexShader:`
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
		`};var is=class extends Un{constructor(t){super({type:"LineMaterial",uniforms:ul.clone(Qn.line.uniforms),vertexShader:Qn.line.vertexShader,fragmentShader:Qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var bf=new nn,Vg=new q,Hg=new q,kn=new nn,zn=new nn,ss=new nn,wf=new q,Ef=new ze,$n=new el,Gg=new q,su=new jn,ru=new li,rs=new nn,as,Pr;function Wg(i,t,e){return rs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),rs.multiplyScalar(1/rs.w),rs.x=Pr/e.width,rs.y=Pr/e.height,rs.applyMatrix4(i.projectionMatrixInverse),rs.multiplyScalar(1/rs.w),Math.abs(Math.max(rs.x,rs.y))}function Ib(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,c=a;l<c;l++){$n.start.fromBufferAttribute(s,l),$n.end.fromBufferAttribute(r,l),$n.applyMatrix4(e);let h=new q,d=new q;as.distanceSqToSegment($n.start,$n.end,d,h),d.distanceTo(h)<Pr*.5&&t.push({point:d,pointOnLine:h,distance:as.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Pb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,c=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),v=-t.near;as.at(1,ss),ss.w=1,ss.applyMatrix4(t.matrixWorldInverse),ss.applyMatrix4(n),ss.multiplyScalar(1/ss.w),ss.x*=r.x/2,ss.y*=r.y/2,ss.z=0,wf.copy(ss),Ef.multiplyMatrices(t.matrixWorldInverse,a);for(let m=0,y=d;m<y;m++){if(kn.fromBufferAttribute(c,m),zn.fromBufferAttribute(h,m),kn.w=1,zn.w=1,kn.applyMatrix4(Ef),zn.applyMatrix4(Ef),kn.z>v&&zn.z>v)continue;if(kn.z>v){let k=kn.z-zn.z,R=(kn.z-v)/k;kn.lerp(zn,R)}else if(zn.z>v){let k=zn.z-kn.z,R=(zn.z-v)/k;zn.lerp(kn,R)}kn.applyMatrix4(n),zn.applyMatrix4(n),kn.multiplyScalar(1/kn.w),zn.multiplyScalar(1/zn.w),kn.x*=r.x/2,kn.y*=r.y/2,zn.x*=r.x/2,zn.y*=r.y/2,$n.start.copy(kn),$n.start.z=0,$n.end.copy(zn),$n.end.z=0;let I=$n.closestPointToPointParameter(wf,!0);$n.at(I,Gg);let x=ef.lerp(kn.z,zn.z,I),g=x>=-1&&x<=1,B=wf.distanceTo(Gg)<Pr*.5;if(g&&B){$n.start.fromBufferAttribute(c,m),$n.end.fromBufferAttribute(h,m),$n.start.applyMatrix4(a),$n.end.applyMatrix4(a);let k=new q,R=new q;as.distanceSqToSegment($n.start,$n.end,R,k),e.push({point:R,pointOnLine:k,distance:as.origin.distanceTo(R),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}var Lr=class extends Nn{constructor(t=new Gi,e=new is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,c=e.count;a<c;a++,l+=2)Vg.fromBufferAttribute(e,a),Hg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Vg.distanceTo(Hg);let r=new Gs(s,2,1);return t.setAttribute("instanceDistanceStart",new zi(r,1,0)),t.setAttribute("instanceDistanceEnd",new zi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;as=t.ray;let a=this.matrixWorld,l=this.geometry,c=this.material;Pr=c.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),ru.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=Pr*.5;else{let v=Math.max(s.near,ru.distanceToPoint(as.origin));h=Wg(s,v,c.resolution)}if(ru.radius+=h,as.intersectsSphere(ru)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),su.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Pr*.5;else{let v=Math.max(s.near,su.distanceToPoint(as.origin));d=Wg(s,v,c.resolution)}su.expandByScalar(d),as.intersectsBox(su)!==!1&&(n?Ib(this,e):Pb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(bf),this.material.uniforms.resolution.value.set(bf.z,bf.w))}};var au=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),os=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Xg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:c,CY:h,mcs:d,q:v,list:m,clamp:y,norm:M,munis:I}=i,x=o=>document.querySelector(o),g=o=>String(o).replace(/[<>&"]/g,u=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[u]),B=(o,u)=>[(o-c)*l,(u-h)*l],k=.06,R=t.segs.map(o=>{let u=[],f=[0];for(let _=0;_<o.length;_+=2){let S=B(o[_],o[_+1]);u.length&&f.push(f[f.length-1]+Math.hypot(S[0]-u[u.length-1][0],S[1]-u[u.length-1][1])),u.push(S)}return{p:u,c:f,L:f[f.length-1]}}),E=t.stops.map(([o,u,f,_])=>({n:o,id:_,w:B(u,f),fams:new Set})),O=t.routes.map(([o,u,f])=>({s:o,l:u,c:f})),G=new Map;(t.bus||[]).forEach(([o,u,f,_])=>{let S={days:new Set(o),name:u,stops:f,times:_};f.forEach((b,P)=>{if(P<f.length-1){let D=G.get(b)||[];D.push([S,P]),G.set(b,D)}})});function A(o,u,f){let _=se(),S=t.days.indexOf(_.ymd),b=[];for(let[P,D]of G.get(o)||[]){if(!P.days.has(S))continue;let L=P.times[D];if(L<u||L>f)continue;let z=P.stops[P.stops.length-1];b.push({sm:L,est:L,dl:0,fam:P.name,dest:E[z].n,destId:E[z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(D)})}return b}let F=(o,u)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),_=u.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(_[1]||"")||(+f[2]||0)-(+_[2]||0)||f[3].localeCompare(_[3])},H=[...new Set(O.map(o=>o.s))].sort(F),X={};O.forEach(o=>{X[o.s]||(X[o.s]=o.c)});let at=t.pats.map(([o,u,f])=>({stops:o,t:u,segs:f})),ot=t.trips.map(([o,u,f,_,S],b)=>({day:o,pat:at[u],fam:O[f].s,c:O[f].c,t0:_,num:S,tid:t.tids[b]})),Z={};H.forEach(o=>Z[o]=new Set),ot.forEach(o=>{o.pat.segs.forEach(u=>Z[o.fam].add(u)),o.pat.stops.forEach(u=>E[u].fams.add(o.fam))});let et=t.days.map((o,u)=>ot.filter(f=>f.day===u)),ut=new Map(ot.map(o=>[o.tid,o])),pt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,mt=3.922*At,wt=-39.705*At;function Mt(o,u){let f=o*At+mt,_=u*At,S=Math.cos(wt),b=Math.sin(wt),P=Math.cos(_),D=Math.cos(f)*P,L=Math.sin(f)*P,z=Math.sin(_),Y=Math.atan2(L,D*S-z*b),p=Math.asin(z*S+D*b),T=Math.sqrt(2/(1+Math.cos(Y)*Math.cos(p))),N=T*Math.cos(p)*Math.sin(Y),V=T*Math.sin(p),[ht,Et,it,ft,j,ce,xe]=pt;return B((Et+ht*N-j)*xe,(ce-(ft-it*V))*xe)}let Yt=new Map(E.map((o,u)=>[o.id,u]));function ee(o){if(o.g)return o.g;let u=[],f=[],_=[0],S=0;return o.segs.forEach((b,P)=>{let D=R[b];D.p.forEach((L,z)=>{P&&!z||(u.push(L),f.push(S+D.c[z]))}),S+=D.L,_.push(S)}),o.g={pts:u,cum:f,stopD:_}}function $e(o,u,f,_){let S=1e18,b=0;for(let P=0;P+1<o.pts.length;P++){if(o.cum[P+1]<f||o.cum[P]>_)continue;let D=o.pts[P],L=o.pts[P+1],z=L[0]-D[0],Y=L[1]-D[1],p=z*z+Y*Y||1e-9,T=Math.max(0,Math.min(1,((u[0]-D[0])*z+(u[1]-D[1])*Y)/p)),N=D[0]+z*T-u[0],V=D[1]+Y*T-u[1],ht=N*N+V*V;ht<S&&(S=ht,b=o.cum[P]+T*(o.cum[P+1]-o.cum[P]))}return{d:b,err:Math.sqrt(S)}}function Pe(o,u){let f=0,_=o.cum.length-1;if(u<=0)return o.pts[0];if(u>=o.cum[_])return o.pts[_];for(;_-f>1;){let D=f+_>>1;o.cum[D]<=u?f=D:_=D}let S=(u-o.cum[f])/(o.cum[_]-o.cum[f]||1),b=o.pts[f],P=o.pts[_];return[b[0]+(P[0]-b[0])*S,b[1]+(P[1]-b[1])*S]}let Oe=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let u={};return _t.formatToParts(o).forEach(f=>u[f.type]=f.value),{ymd:u.year+u.month+u.day,min:+u.hour*60+ +u.minute+ +u.second/60}}let Pt=0,ae=null,Jt=0,me=0;function se(){let o=vt(new Date);if(Pt===0&&ae==null)return{...o,live:!0};let u=ae==null?o.min:Jt+(Pt?(performance.now()-me)/6e4*Pt:0);return{ymd:o.ymd,min:u,live:!1}}let st=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Ct="https://rodalies.erathegameoftime.com",$={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let u=localStorage.getItem("rod_rt");u&&/jhmuyo\.workers\.dev/.test(u)&&(u=Ct,localStorage.setItem("rod_rt",u)),$.url=u||Ct}catch{$.url=Ct}let Rt=(o,u)=>fetch(o+u,{cache:"no-store"}).then(f=>{if(!f.ok)throw new Error("HTTP "+f.status);return f.json()}),Bt=o=>/^51/.test(o||"");async function he(){if(!$.url){we();return}let o=$.url.replace(/\/+$/,""),u=!$.adifAt||Date.now()-$.adifAt>11e4,f=p=>({status:"fulfilled",value:p}),_=p=>({status:"rejected",reason:p}),S,b,P,D,L,z=null;if($.noLive&&Date.now()-$.noLive>30*6e4&&($.noLive=0),!$.noLive)try{z=await Rt(o,"/live.json")}catch(p){/HTTP 404/.test(p.message)?$.noLive=Date.now():z={__fail:p}}if(z&&z.__fail)S=b=P=D=L=_(z.__fail);else if(z&&z.v===1){let p=N=>z[N]&&!z[N].__err?f(z[N]):_(new Error(z[N]&&z[N].__err||"sin dato"));S=p("tu"),b=p("vp"),P=p("al"),D=p("nt"),L=u?p("ad"):_(0);let T=z.rep;T&&Array.isArray(T.items)&&($.rep=T.items,$.repSkew=(T.now||Date.now())-Date.now(),T.tipos&&($.tipos=T.tipos),$.repOk=Date.now(),$.repFail=0)}else(!$.repFail||Date.now()-$.repFail>15*6e4)&&Rt(o,"/reports.json").then(p=>{p&&Array.isArray(p.items)?($.rep=p.items,$.repSkew=(p.now||Date.now())-Date.now(),p.tipos&&($.tipos=p.tipos),$.repOk=Date.now(),$.repFail=0):$.repFail=Date.now()}).catch(()=>{$.repFail=Date.now(),$.repOk=0}),[S,b,P,D,L]=await Promise.allSettled([Rt(o,"/trip_updates.json"),Rt(o,"/vehicle_positions.json"),Rt(o,"/alerts.json"),Rt(o,"/notices.json"),u?Rt(o,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?($.adif=L.value,$.adifAt=Date.now()):u&&($.adifAt=Date.now()-6e4),S.status==="fulfilled"){let p=new Map,T=new Map;for(let N of S.value.entity||[]){let V=N.tripUpdate;if(!V||!V.trip||!Bt(V.trip.tripId))continue;let ht=V.trip.tripId,Et=(V.stopTimeUpdate||[])[0],it=V.delay;it==null&&Et&&(it=(Et.arrival||Et.departure||{}).delay),V.trip.scheduleRelationship==="CANCELED"&&(it="X"),it!=null&&p.set(ht,it),T.set(ht,{next:Et?{sid:Et.stopId,t:+((Et.arrival||Et.departure||{}).time||0)}:null})}$.delays=p,$.tu=T,$.ok=Date.now(),$.feedTs=+((S.value.header||{}).timestamp||0)*1e3,$.err=""}else $.err=S.reason&&S.reason.message||__t(0);if(b.status==="fulfilled"){let p=new Map,T=Date.now()/1e3;for(let N of b.value.entity||[]){let V=N.vehicle;if(!V||!V.trip||!Bt(V.trip.tripId)||!V.position)continue;let ht=V.vehicle&&V.vehicle.label||"",Et=ht.match(/PLATF\.\(([^)]+)\)/),it=$.vp.get(V.trip.tripId),ft={tid:V.trip.tripId,w:Mt(+V.position.longitude,+V.position.latitude),st:V.currentStatus||"",sid:V.stopId||"",ts:+V.timestamp||T,label:ht,plat:Et?Et[1]:"",fam:(ht.split("-")[0]||"").trim(),num:V.vehicle&&V.vehicle.id||""};ft.disp=it?it.disp:null,p.set(ft.tid,ft)}$.vp=p,$.okVP=Date.now()}let Y=[];if(D.status==="fulfilled"&&Array.isArray(D.value.included)){$.okNotices=Date.now();for(let p of D.value.included){let T=new Set((p.lines||[]).map(it=>it.id).filter(it=>X[it])),N=(it,ft)=>{it=it||{},ft=ft||window.__L;let j=it[ft];return ft==="en"&&j&&(j===it.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(j))&&(j=""),(j||it.es||it.ca||"").trim()},V=it=>[N(p.description,it),N(p.title,it)].sort((ft,j)=>j.length-ft.length)[0],ht=V(),Et=V("es");ht&&Y.push({id:"N"+p.externalId,fams:T,stops:new Set,txt:ht,es:Et,when:(p.date||"")+"T"+(p.time||""),src:"Rodalies",core:p.core||""})}}if(P.status==="fulfilled"){let p=+((P.value.header||{}).timestamp||0);if($.alertsTs=p,Date.now()/1e3-p<6*3600)for(let T of P.value.entity||[]){let N=T.alert;if(!N)continue;let V=new Set,ht=new Set;for(let j of N.informedEntity||[])(j.routeId||"").startsWith("51")&&V.add(j.routeId.replace(/^51T\d+/,"")),j.stopId&&Yt.has(j.stopId)&&ht.add(Yt.get(j.stopId));if(!V.size&&!ht.size)continue;let Et=(N.descriptionText||N.headerText||{translation:[]}).translation||[],it=((Et.find(j=>j.language==="es")||Et[0]||{}).text||"").trim(),ft=+((N.activePeriod||[])[0]||{}).start||0;Y.some(j=>j.txt===it)||Y.push({id:T.id,fams:V,stops:ht,txt:it,when:ft?new Date(ft*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if($.adif&&Date.now()-$.adifAt<15*6e4)for(let[p,T]of($.adif.items||[]).entries()){let N=(T.t?T.t+". ":"")+T.txt,V=new Set,ht=new Set,Et=M(N);for(let it of N.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[it[1]]&&V.add(it[1]);E.forEach((it,ft)=>{it.fams.size&&it.n.length>4&&Et.includes(M(it.n))&&(ht.add(ft),V.size||it.fams.forEach(j=>V.add(j)))}),Y.some(it=>it.txt===N)||Y.push({id:"A"+p,fams:V,stops:ht,txt:N,when:$.adif.upd||"",src:"Adif",lvl:T.lvl})}if(D.status==="fulfilled"||P.status==="fulfilled"){$.alerts=Y.sort((p,T)=>T.when>p.when?1:-1);try{H0()}catch{}}we(),Tu(),jt=0,a()}let ue=()=>$.okVP&&Date.now()-$.okVP<10*6e4,de=()=>$.okVP&&Date.now()-$.okVP<9e4,Se={at:0,v:!1},W=()=>{if(!ue()||$.vp.size>0)return!1;if(Date.now()-Se.at>3e4){Se.at=Date.now();let o=vt(new Date),u=t.days.indexOf(o.ymd),f=0;if(u>=0)for(let _ of et[u]){let S=o.min-_.t0;S>_.pat.t[1]+2&&S<_.pat.t[_.pat.t.length-2]-2&&f++}Se.v=f>=6}return Se.v},Ae=()=>ue()&&!W();function we(){let o=x("#rtst"),u=x("#mode");if(u){let _=[...yt].filter(D=>{ja("");let L=Pi.m.get(D);return L&&L[0]>=2}),S=Ja(_),b=!!Ae()&&se().live&&!(_.length&&S.length===_.length);u.classList.toggle("on",b&&de()),u.classList.toggle("pre",!(b&&de())),u.textContent=b&&!de()?__t(1):b?__t(2):tt.cur?__t(3):__t(4),u.classList.toggle("past",!!tt.cur);let P=x("#rcgrab");if(P){let D=P.querySelector(".rdot");D||(D=document.createElement("b"),D.className="rdot",P.insertBefore(D,P.firstChild)),D.className="rdot "+(tt.cur?"past":b&&de()?"on":"pre"),D.title=u.textContent}u.title=tt.cur?`${__t(5)}${tt.cur.sn.t}${__t(6)}`:""}if(!o)return;$.url?$.err?o.textContent=__t(8)+$.err+__t(9):Ae()?o.innerHTML=`${__t(10)}${$.vp.size}${__t(11)}${$.delays.size}${__t(12)}${new Date($.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:W()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=$.err||__t(7);let f=x("#rturl");f&&f._shown!==$.url&&(f.value=$.url,f._shown=$.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){$.err=__t(15),we();return}$.url=o;try{localStorage.setItem("rod_rt",o)}catch{}$.ok=0,$.err="",we(),he()},x("#rtoff").onclick=()=>{$.url=Ct;try{localStorage.removeItem("rod_rt")}catch{}d._h="",he()};let U=0;setInterval(()=>{let o=On.size||Ce;(document.hidden?!o||Date.now()-U<115e3:Date.now()-U<15e3)||(U=Date.now(),he())},2e4),setTimeout(()=>{U=Date.now(),he()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-U>15e3&&(U=Date.now(),he())});let tt={snap:null,key:""};function ct(){let o=se();if(o.live||!Ie.hoy||!Ie.hoy.snaps||Pt&&ae==null)return null;let u=vt(new Date).min;if(o.min>u+1)return null;let f=null;for(let _ of Ie.hoy.snaps){if(!_.d)continue;let S=sp(_.t);S<=o.min+1&&(!f||S>f.m)&&(f={m:S,sn:_})}return f&&o.min-f.m<=25?f:null}let dt=o=>{{let S=Mu(o.num);if(S&&S.cx&&se().live)return"X"}let u=tt.cur;if(u){if(u.sn.x&&u.sn.x.includes(o.tid))return"X";let S=u.sn.d[o.tid];return S??0}if(!Ae())return null;let f=$.delays.get(o.tid),_=$.vp.get(o.tid);return f==="X"?f:_&&_.pre&&_.preDl>=1?Math.max(typeof f=="number"?f:0,_.preDl*60):f??null},yt=new Set(H);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(u=>H.includes(u))&&(yt.clear(),o.forEach(u=>H.includes(u)&&yt.add(u)))}catch{}let kt=new Gi,gt=new Gi,bt=new is({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Gt=new is({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),re=new Lr(kt,bt),Vt=new Lr(gt,Gt);Vt.renderOrder=20,re.renderOrder=21,re.frustumCulled=Vt.frustumCulled=!1,e.add(Vt,re);function zt(o){let u=o[0]/l+c,f=o[1]/l+h;for(let _ of I){if(_._bb===void 0){let b=1e9,P=1e9,D=-1e9,L=-1e9;for(let z of _.rings||[]){let Y=z[0]||[];for(let p=0;p<Y.length;p+=2)Y[p]<b&&(b=Y[p]),Y[p]>D&&(D=Y[p]),Y[p+1]<P&&(P=Y[p+1]),Y[p+1]>L&&(L=Y[p+1])}_._bb=[b,P,D,L]}let S=_._bb;if(!(u<S[0]||u>S[2]||f<S[1]||f>S[3]))for(let b of _.rings||[]){let P=b[0]||[],D=!1;for(let L=0,z=P.length,Y=z-2;L<z;Y=L,L+=2){let p=P[L+1],T=P[Y+1];p>f!=T>f&&u<(P[Y]-P[L])*(f-p)/(T-p)+P[L]&&(D=!D)}if(D)return!0}}return!1}let oe=!1;function ge(){oe||!I.length||(oe=!0,E.forEach(o=>{o.ext=!zt(o.w)}),R.forEach(o=>{o.ext=!zt(o.p[0])&&!zt(o.p[o.p.length-1])&&!zt(o.p[o.p.length>>1])}))}let Me=()=>{let o=new Set(yt.size<=2?yt:[]);try{xt&&xt.fam&&o.add(xt.fam)}catch{}return o},K="";function Ht(){ge();let o=[],u=[],f=new Set,_=new _e,S=new _e("#d2d0d0"),b=Me();K=[...b].join();for(let Y of H)if(yt.has(Y))for(let p of Z[Y]){if(f.has(p))continue;f.add(p);let T=R[p].p;_.set(X[Y]),R[p].ext&&!b.has(Y)&&_.lerp(S,.55);for(let N=0;N+1<T.length;N++)o.push(T[N][0],T[N][1],k,T[N+1][0],T[N+1][1],k),u.push(_.r,_.g,_.b,_.r,_.g,_.b)}o.length||(o.push(0,0,-50,0,0,-50),u.push(0,0,0,0,0,0));let P=new Gi,D=new Gi;P.setPositions(o),P.setColors(u),D.setPositions(o);let L=re.geometry,z=Vt.geometry;re.geometry=P,Vt.geometry=D,L&&L.dispose(),z&&z.dispose(),a()}Ht();let St=o=>new Un({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new _e(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ft=new Mn,qt=E.length,Tt=new Float32Array(qt*3),le=new Float32Array(qt*3),ne=new Float32Array(qt),Je=new Float32Array(qt);E.forEach((o,u)=>{Tt[u*3]=o.w[0],Tt[u*3+1]=o.w[1],Tt[u*3+2]=k,le.set([1,1,1],u*3),ne[u]=6,Je[u]=1.6}),Ft.setAttribute("position",new an(Tt,3)),Ft.setAttribute("fill",new an(le,3)),Ft.setAttribute("size",new an(ne,1)),Ft.setAttribute("bw",new an(Je,1));let Ge=St("#1d2330"),Yn=new wr(Ft,Ge);Yn.renderOrder=22,Yn.frustumCulled=!1,e.add(Yn);function un(){let o=r.dist<45,u=Me();E.forEach((f,_)=>{let S=[...f.fams].some(P=>yt.has(P)),b=f.ext&&![...f.fams].some(P=>u.has(P))&&_!==Qt;ne[_]=S?_===Qt?13:b?3:o?8:5:0,Je[_]=_===Qt?3:1.6}),Ft.attributes.size.needsUpdate=!0,Ft.attributes.bw.needsUpdate=!0}let vi=600,Ci=new Mn,Ks=new Float32Array(vi*3),Cs=new Float32Array(vi*3),Fa=new Float32Array(vi),Oa=new Float32Array(vi);Ci.setAttribute("position",new an(Ks,3)),Ci.setAttribute("fill",new an(Cs,3)),Ci.setAttribute("size",new an(Fa,1)),Ci.setAttribute("bw",new an(Oa,1));let Rs=new Float32Array(vi);Ci.setAttribute("ang",new an(Rs,1));let us=new Un({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new _e("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Qs=new wr(Ci,us);Qs.renderOrder=24,Qs.frustumCulled=!1,e.add(Qs);let Wi=new Mn,tr=new Float32Array(vi*3),er=new Float32Array(vi*3),Ba=new Float32Array(vi),nr=new Float32Array(vi);Wi.setAttribute("position",new an(tr,3)),Wi.setAttribute("fill",new an(er,3)),Wi.setAttribute("size",new an(Ba,1)),Wi.setAttribute("bw",new an(nr,1));let Br=new wr(Wi,St("#ffffff"));Br.renderOrder=23,Br.frustumCulled=!1,e.add(Br);function ka(o,u){let f=R[o],_=u*f.L,S=0,b=f.c.length-1;for(;b-S>1;){let Y=S+b>>1;f.c[Y]<=_?S=Y:b=Y}let P=f.c[b]-f.c[S]||1,D=(_-f.c[S])/P,L=f.p[S],z=f.p[b];return[L[0]+(z[0]-L[0])*D,L[1]+(z[1]-L[1])*D]}let Ml=o=>o*o*(3-2*o)*.35+o*.65;function ir(o,u){let f=o.pat.t,_=o.pat.stops.length,S=f[2*_-2];if(u<f[1]-2||u>S+1)return null;if(u<=f[1])return{w:E[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let b=0;b<_-1;b++){let P=f[2*b+1],D=f[2*b+2],L=f[2*b+3];if(u<=D){let z=D>P?(u-P)/(D-P):1;return{w:ka(o.pat.segs[b],Ml(y(z,0,1))),at:-1,next:b+1,prev:b,moving:!0}}if(u<=L)return{w:E[o.pat.stops[b+1]].w,at:b+1,next:b+1,moving:!1}}return{w:E[o.pat.stops[_-1]].w,at:_-1,next:_-1,moving:!1}}function sr(o){let u=t.days.indexOf(o.ymd),f=[];if(u<0)return{k:u,out:f};let _=(S,b)=>{for(let P of S){if(!yt.has(P.fam))continue;let D=dt(P);if(D==="X")continue;let L=(D||0)/60,z=o.min+b-P.t0-L;if(z<-2||z>P.pat.t[P.pat.t.length-2]+1)continue;let Y=ir(P,z);Y&&f.push({tr:P,p:Y,rel:z,dl:L,live:D!=null})}};return _(et[u],0),u>0&&_(et[u-1],1440),{k:u,out:f}}function Su(o,u,f,_){let S=o.pat.stops[0],b=u.dep0,P=null,D=(z,Y)=>{for(let p of z||[]){let T=p.pat.stops,N=T.length;if(T[N-1]!==S||p===o)continue;let V=p.t0+p.pat.t[2*(N-1)]-Y;if(V>b+5||V<b-120)continue;let ht=ee(p.pat),Et=$e(ht,u.w,-1,1e9);if(Et.err>.6)continue;let it=ht.stopD,ft=p.pat.t,j=it.findIndex(Wt=>Wt>Et.d);j<0&&(j=N-1);let ce=j===0?ft[1]:ft[2*j-1]+(it[j]>it[j-1]?(Et.d-it[j-1])/(it[j]-it[j-1]):1)*(ft[2*j]-ft[2*j-1]),xe=f-(p.t0+ce-Y);xe<-5||xe>120||(!P||Math.abs(xe)<Math.abs(P.prevDl))&&(P={prevTr:p,dPrev:Et.d,prevDl:xe,arrO:V+Math.max(0,xe)})}};if(D(et[_],0),_>0&&D(et[_-1],1440),!P)return{prevTr:null,preDl:0};let L=Math.max(b,P.arrO+3);return{...P,depEst:L,preDl:Math.max(0,L-b)}}function bl(o,u,f){let _=o.pat.t,S=u.length;if(!(f>=0))return f<0?u[0]:null;for(let b=0;b<S;b++)if(f<=_[2*b+1]){if(f>=_[2*b]||b===0)return u[b];let P=_[2*b-1],D=_[2*b];return u[b-1]+(u[b]-u[b-1])*(D>P?(f-P)/(D-P):1)}return u[S-1]}let C=performance.now();function J(){let o=[],u=Date.now()/1e3,f=performance.now(),_=Math.min(1,(f-C)/1e3);C=f;for(let S of $.vp.values()){let b=ut.get(S.tid),P=b?b.fam:S.fam;if(P&&X[P]&&!yt.has(P))continue;let D=$.delays.get(S.tid),L=typeof D=="number"?D/60:0,z=Math.max(0,u-S.ts);S.mvTs!==S.ts&&((!S.mvW||Math.hypot(S.w[0]-S.mvW[0],S.w[1]-S.mvW[1])>.025)&&(S.mvW=S.w,S.mvAt=S.ts),S.mvTs=S.ts),S.still=S.ts-(S.mvAt||S.ts);let Y=S.w,p=-1;if(b){let N=ee(b.pat),V=N.stopD;if(S.dObs==null||S.obsAt!==S.ts){let j=$e(N,S.w,-1,1e9);S.dObs=j.d,S.err=j.err,S.obsAt=S.ts}let ht=se(),Et=t.days.indexOf(ht.ymd),it=b.day===Et-1?1440:0,ft=b.t0+b.pat.t[1]-it;if(S.pre=ht.min+L<ft-1&&(S.dObs>V[0]+.35||S.err>.6)&&!(S.st==="STOPPED_AT"&&S.sid===E[b.pat.stops[0]].id),S.dep0=ft,S.pre){if(S.atStop=-1,S.next=0,p=0,S.disp=null,S.prevAt!==S.ts&&(S.prevAt=S.ts,Object.assign(S,Su(b,S,ht.min,Et))),S.prevTr){let j=ee(S.prevTr.pat);Y=Pe(j,S.dPrev)}}else if(!de()&&b){let j=se(),ce=t.days.indexOf(j.ymd),xe=b.day===ce-1?1440:0,Wt=ir(b,j.min+xe-b.t0-L);Wt?(Y=Wt.w,S.est=!0,p=Wt.next,S.atStop=Wt.moving?-1:Wt.at,S.next=Wt.next,S.before=!1):(S.atStop=-1,S.next=-1)}else if(S.err<=.6){let j=V.findIndex(Wt=>Wt>S.dObs+.08);j<0&&(j=V.length-1);let ce=V.reduce((Wt,Ve,Ee)=>Math.abs(Ve-S.dObs)<Math.abs(V[Wt]-S.dObs)?Ee:Wt,0);S.atStop=Math.abs(V[ce]-S.dObs)<.16?ce:-1;{let Wt=S.st==="STOPPED_AT"&&S.sid?b.pat.stops.findIndex(Ve=>E[Ve].id===S.sid):-1;Wt>=0&&Math.abs(V[Wt]-S.dObs)<.6&&(S.atStop=Wt,j<=Wt&&(j=Math.min(Wt+1,V.length-1)))}S.before=S.atStop>=0&&S.dObs<V[S.atStop]-.15,S.next=j,p=j;let xe=S.dObs;if(S.st==="STOPPED_AT"&&S.atStop>=0)xe=V[S.atStop];else if(j>0){let Wt=(b.pat.t[2*j]-b.pat.t[2*j-1])*60,Ve=Wt>0?(V[j]-V[j-1])/Wt:0,Ee=se(),fe=t.days.indexOf(Ee.ymd),pn=b.day===fe-1?1440:0,De=bl(b,V,Ee.min+pn-b.t0-L),di=S.dObs+Ve*Math.min(z,60);De!=null&&(di=Math.min(di,Math.max(S.dObs,De))),xe=Math.max(S.dObs,Math.min(V[j]-.03,di))}S.disp==null||Math.abs(S.disp-xe)>1.2?S.disp=xe:xe>S.disp&&(S.disp+=(xe-S.disp)*Math.min(1,_*1.5)),Y=Pe(N,S.disp)}else if(S.err>2){let j=se(),ce=t.days.indexOf(j.ymd),xe=b.day===ce-1?1440:0,Wt=ir(b,j.min+xe-b.t0-L);Wt&&(Y=Wt.w,S.est=!0,p=Wt.next),S.atStop=-1,S.next=Wt?Wt.next:-1}else S.atStop=-1,S.next=-1}let T=S.pre?"":S.st==="STOPPED_AT"&&S.atStop>=0||S.atStop>=0&&S.still>30?"st":S.still>=90&&S.atStop<0?"via":"";o.push({tr:b,v:S,w:Y,stop:T,p:{w:Y},fam:P||"?",c:b?b.c:X[P]||"#6b7385",dl:L,live:!0,real:!0,idx:p,age:z,cancel:D==="X"})}return o}let lt=new Map,nt=!1,Q=!1,Ut="",Kt={st:-1},It=[],jt=0,Ot=null,xt=null,Qt=-1,Lt=!1,We=0,_n="";function Ye(o){let u=Pt>0||Ae()&&ae==null||!!xt,f=window.__mapHidden?1e3:u?50:250;if(o-jt<f)return!1;jt=o,[...Me()].join()!==K&&(Ht(),un());{let p=ct(),T=p?p.sn.t:"";tt.cur=p,T!==tt.key&&(tt.key=T,we()),!p&&!se().live&&!Ie.at&&ui()}let _=se(),S=Ae()&&_.live,b=S?{k:t.days.indexOf(_.ymd),out:J()}:sr(_);It=b.out;let P=new _e,D=0,L=0;for(let p of It){if(D>=vi)break;Ks[D*3]=p.p.w[0],Ks[D*3+1]=p.p.w[1],Ks[D*3+2]=k+.02;let T=null;if(p.real&&p.v.pre&&p.v.prevTr)T=Pe(ee(p.v.prevTr.pat),p.v.dPrev+.35);else if(p.real&&p.tr&&!p.v.pre&&p.v.err<=.6&&p.v.disp!=null&&!(p.v.st==="STOPPED_AT"&&p.v.atStop>=0))T=Pe(ee(p.tr.pat),p.v.disp+.35);else if(!p.real&&p.p.moving){let it=p.tr.pat.t,ft=p.p.prev,j=it[2*ft+1],ce=it[2*ft+2],xe=ce>j?(p.rel-j)/(ce-j):1;T=ka(p.tr.pat.segs[ft],Math.min(1,Ml(y(xe,0,1))+.04))}let N=p.real?!!p.stop:!p.p.moving;if(p.broke=Zf(p),p.broke)Rs[D]=85;else if(N)Rs[D]=75;else if(T){let it=wl(p.p.w),ft=wl(T),j=ft[0]-it[0],ce=ft[1]-it[1];Rs[D]=Math.hypot(j,ce)>.05?Math.atan2(j,-ce):99}else Rs[D]=99;P.set(p.c||p.tr.c),Cs[D*3]=P.r,Cs[D*3+1]=P.g,Cs[D*3+2]=P.b;let V=p.tr?p.tr===xt:xt&&xt.vtid===p.v.tid;Fa[D]=V?22:r.dist<45?17:14,Oa[D]=V?3.5:2.2;let ht=p.real&&p.stop==="via"||!!p.broke,Et=p.cancel||p.broke?[.86,.15,.15]:p.dl>10?[.86,.15,.15]:p.dl>5?[.92,.48,.05]:p.dl>=1?[.98,.8,.08]:[.09,.64,.29];(p.live&&p.dl>=5||V||ht)&&(tr[L*3]=p.p.w[0],tr[L*3+1]=p.p.w[1],tr[L*3+2]=k+.01,er.set(V?Et:ht?[.86,.15,.15]:[.98,.45,.09],L*3),Ba[L]=Fa[D]+(V?16+5*Math.sin(o/220):ht?10+3*Math.sin(o/400):8),nr[L]=V?2:3,L++),D++}if(Ci.setDrawRange(0,D),Wi.setDrawRange(0,L),["position","fill","size","bw"].forEach(p=>{Ci.attributes[p].needsUpdate=!0,Wi.attributes[p].needsUpdate=!0}),Ci.attributes.ang.needsUpdate=!0,Ot){let p=It.find(T=>T.tr===Ot);if(p){let T=0,N=innerHeight,V=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ht=x("#rc").getBoundingClientRect();innerWidth<=640&&(V&&(T=V.bottom),N=Math.min(N,ht.top));let Et=T+(N-T)/2,it=Et-innerHeight/2,ft=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=p.p.w[0]-Math.sin(r.yaw)*it*ft,s.ty=p.p.w[1]+Math.cos(r.yaw)*it*ft}else Ae()&&se().live&&(Ot=null)}let z=st(Math.floor(_.min+1e-6));z!==_n&&(_n=z,x("#ctime").textContent=z),x("#ntr").textContent=String(It.length),x("#ntrl").textContent=S?__t(16):__t(17);{let p=yt.size<H.length?[...yt].sort(F).join(", "):"",T=x("#ccount"),N=tt.cur?`\u23EA ${It.length}${__t(18)}${tt.cur.sn.t} \xB7 ${Object.values(tt.cur.sn.d).filter(V=>V>=60).length}${__t(19)}`:!_.live&&_.min<vt(new Date).min-1&&!Pt?`${__t(20)}${Ie.hoy&&Ie.hoy.snaps&&Ie.hoy.snaps.some(V=>V.d)?`${__t(21)}${Ie.hoy.snaps.find(V=>V.d).t}`:__t(22)}`:S&&!de()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${os(Math.round((Date.now()-$.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:S&&!It.some(V=>V.real)&&Ja(yt).length?`\u{1F4E1} ${__t(25)}${p?` <small>\xB7 ${g(p)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${It.length} ${S?__t(27):__t(28)}${p?` <small>\xB7 ${g(p)}</small>`:""}${S&&$.okVP?(()=>{let V=Math.max(0,Math.round((Date.now()-$.okVP)/1e3));return` <small class="fresh${V<3?" new":""}">\u25CF ${__t(29)}${os(V+" s")}</small>`})():""}`;T&&T._t!==N&&(T.innerHTML=N,T._t=N)}{let p=x("#p");p&&p.classList.toggle("ttf",!_.live||!!Pt)}let Y=new Date;if(x("#cdate").textContent=_.live?__t(30):Pt?__t(31)+Pt:wi?__t(32):__t(33),b.k<0?x("#src").innerHTML=`${__t(34)}${Oe(t.days[0])}${__t(35)}${Oe(t.days[t.days.length-1])}${__t(36)}`:S?x("#src").textContent=`${de()?__t(37):__t(38)}${os(au(Math.max(0,Date.now()/1e3-Math.max(...[...$.vp.values()].map(p=>p.ts),0))))}`:W()&&_.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+($.url?__t(41):__t(42))+__t(43),_.live){let p=Math.round(_.min),T=x("#tsl");document.activeElement!==T&&(T.value=p<240?p+1440:p)}{let p=xt?String(xt.num||xt.vtid||""):"";p!==Ye._sk&&(Ye._sk=p,Le(!0))}return Le(),!Ye._sp&&(S||!_.live||W()||!$.url)&&(Ye._sp=1,window.__splashOff&&window.__splashOff()),o-We>3e3&&(xt||Qt>=0||Lt||Q||Ut)&&(We=o,Ue()),we(),!0}let je=-1,xn=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),te=[],dn=document.createElement("button");dn.type="button",dn.id="mbtn",dn.title=__t(44),dn.innerHTML=__t(45),dn.onclick=()=>{xn=!xn;try{localStorage.setItem("rod_mun",xn?"1":"")}catch{}dn.classList.toggle("on",xn),a(),gn()},dn.classList.toggle("on",xn),document.body.appendChild(dn);let ke=I.slice().sort((o,u)=>u.pop-o.pop);function ei(o){if(o._a)return o._a;let u=null,f=0;for(let _ of o.rings||[]){let S=_[0];if(!S)continue;let b=0,P=0,D=0;for(let L=0,z=S.length;L<z;L+=2){let Y=S[L],p=S[L+1],T=S[(L+2)%z],N=S[(L+3)%z],V=Y*N-T*p;b+=V,P+=(Y+T)*V,D+=(p+N)*V}Math.abs(b)>f&&(f=Math.abs(b),u=[P/(3*b),D/(3*b)])}return o._a=u?[(u[0]-c)*l,(u[1]-h)*l]:[o.cx,o.cy]}let yi=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,Xi=[0,7.6,6.7,6,5.4],Is=[0,17,15,13,12],Ke=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function gn(){let o=s.tilt<.06&&r.tilt<.08;dn.classList.toggle("show",o);let u=0;if(xn&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(b=>b.offsetParent!==null||b.style.display==="block").map(b=>{let P=b.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(b=>b[2]>b[0]),_=r.dist,S=_>160?5e4:_>130?2e4:_>105?8e3:_>80?3e3:_>62?800:0;for(let b of ke){let P=yi(b.pop);if(b.pop<S)break;let D=ei(b);if(bn.set(D[0],D[1],k).project(n),Math.abs(bn.x)>1.02||Math.abs(bn.y)>1.02)continue;let L=(bn.x*.5+.5)*innerWidth,z=(-bn.y*.5+.5)*innerHeight,Y=Ke(b.name),p=Y.length*Xi[P]+8,T=Is[P],N=[L-p/2,z-T/2,L+p/2,z+T/2];if(f.some(ht=>N[0]<ht[2]&&ht[0]<N[2]&&N[1]<ht[3]&&ht[1]<N[3]))continue;f.push(N);let V=te[u]||(te[u]=Object.assign(document.createElement("div"),{className:"mlab"}));V.isConnected||document.body.appendChild(V),V._n!==Y&&(V.textContent=Y,V._n=Y),V._t!==P&&(V.className="mlab t"+P,V._t=P),V.style.transform=`translate(${Math.round(L)}px,${Math.round(z)}px) translate(-50%,-50%)`,V.style.display="block",u++}}for(;u<te.length;u++)te[u].style.display="none"}let Ie={at:0,hoy:null,ayer:null,err:""},rn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function ui(){Date.now()-Ie.at<5*6e4||(Ie.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(rn+o+".json",{cache:"no-store"}).then(u=>u.ok?u.json():null).catch(()=>null))).then(([o,u,f])=>{Ie.hoy=o,Ie.ayer=u,Ie.hist=f,Ie.tr=null,Ie.err=o?"":__t(46),Q&&(d._h="",Ue()),Le(!0)}))}function Ps(o){let u={};for(let _ of o&&o.snaps||[])for(let S of _.r||[]){let b=/^\d+[A-Z](\d+)/.exec(S);b&&(u[b[1]]=u[b[1]]||[]).push(Math.max(0,_.d&&_.d[S]||0)/60)}let f={};for(let _ in u){let S=u[_].sort((b,P)=>b-P);f[_]=Math.round(S[S.length>>1])}return f}function kr(o){if(!Ie.tr){let f=new Map;for(let _ of Ie.hist&&Ie.hist.days||[])f.set(_.day,_.tr);for(let _ of[Ie.ayer,Ie.hoy])if(_&&_.day&&!f.has(_.day)){let S=Ps(_);Object.keys(S).length&&f.set(_.day,S)}Ie.tr=f}let u=[...Ie.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return u.length?{n:u.length,late:u.filter(f=>f>=5).length,avg:u.reduce((f,_)=>f+_,0)/u.length}:null}let Ls=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",ds={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Gf=o=>o>10?ds.b:o>5?ds.w:o>=1?ds.y:ds.g,rr=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function za(o,u,f){return`<div class="sbars">${o.map(_=>`<div class="sbar" title="${g(_.tip||"")}"><span class="sl">${_.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(_.w*100))}%;background:${_.c}"></i></span><b class="sv" style="color:${_.c===ds.y?"var(--svy,#a16207)":_.c===ds.w?"var(--svw,#c2410c)":_.c}">${_.val}</b></div>`).join("")}</div>`}function _0(o){if(o=(o||[]).filter(it=>it.n>=10),!o||o.length<2){let it=o&&o[0];return it?`${__t(47)}${it.t}: ${Math.round(it.ok/it.n*100)}${__t(48)}${it.n}${__t(49)}`:__t(50)}let u=it=>{let[ft,j]=it.t.split(":").map(Number);return ft*60+j},f=u(o[0]),_=Math.max(f+60,u(o[o.length-1])),S=300,b=112,P=24,D=it=>P+(it-f)*(S-P-8)/(_-f),L=it=>8+(100-it)/100*(b-26),z=it=>it.n?it.ok/it.n*100:100,Y=o.map(it=>[D(u(it)),L(z(it)),it]),p=it=>it[0].toFixed(1)+","+it[1].toFixed(1),T=[],N=[];Y.forEach((it,ft)=>{ft&&u(it[2])-u(Y[ft-1][2])>45&&(T.push(N),N=[]),N.push(it)}),T.push(N);let V=Y[Y.length-1],ht=[];for(let it=Math.ceil(f/180)*3;it*60<_;it+=3)it*60>f+20&&ht.push(it);let Et=Math.round(o.reduce((it,ft)=>it+ft.ok,0)/Math.max(1,o.reduce((it,ft)=>it+ft.n,0))*100);return`<svg class="schart" viewBox="0 0 ${S} ${b}${__t(51)}${[100,75,50,25].map(it=>`<line x1="${P}" x2="${S-4}" y1="${L(it)}" y2="${L(it)}" class="gl"/><text x="2" y="${L(it)+3}" class="ax">${it}%</text>`).join("")}
      <line x1="${P}" x2="${S-4}" y1="${L(Et)}" y2="${L(Et)}" class="avg"/>
      ${T.filter(it=>it.length).map(it=>`<polygon points="${p([it[0][0],L(0)])} ${it.map(p).join(" ")} ${p([it[it.length-1][0],L(0)])}" class="ar"/><polyline points="${it.map(p).join(" ")}" class="ln"/>`).join("")}
      ${Y.map(([it,ft,j])=>`<circle cx="${it.toFixed(1)}" cy="${ft.toFixed(1)}" r="6" class="hit"><title>${j.t} \xB7 ${Math.round(z(j))}${__t(52)}${j.n}${__t(53)}${j.d5}${__t(54)}${rr(j.avg)}${j.nd?` \xB7 ${j.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${V[0].toFixed(1)}" cy="${V[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(V[0],S-30).toFixed(1)}" y="${(V[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(z(V[2]))}%</text>
      ${ht.map(it=>`<text x="${D(it*60).toFixed(1)}" y="${b-4}" class="ax" text-anchor="middle">${String(it).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${b-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${Et}%)</small>`}function x0(){ui();let o=se(),u=It.filter(D=>D.real&&Ae()&&o.live),f=u.filter(D=>$.delays.has(D.v.tid)),_=f.length,S=u.length-_,b=`${__t(57)}`;if(_){let D=f.filter(ft=>ft.dl<3).length,L=f.filter(ft=>ft.dl>=5).length,z=f.filter(ft=>ft.stop==="via").length,Y=Math.round(D/_*100);b+=`${__t(58)}${_}${__t(59)}${S?` \xB7 ${S}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Ls(Y)}"><b>${Y}${__t(60)}${Ls(100-L/_*100*2)}" title="${Math.round(L/_*100)}${__t(61)}${L}${__t(62)}${z===0?"g":z<=2?"w":"b"}"><b>${z}${__t(63)}`;let p=new Map;f.forEach(ft=>{let j=ft.fam,ce=p.get(j)||{n:0,ok:0,sum:0};ce.n++,ce.ok+=ft.dl<3,ce.sum+=Math.max(0,ft.dl),p.set(j,ce)});let T=[...p].filter(([ft])=>X[ft]).sort((ft,j)=>ft[1].ok/ft[1].n-j[1].ok/j[1].n||j[1].sum/j[1].n-ft[1].sum/ft[1].n),N=T.filter(([,ft])=>ft.ok<ft.n),V=T.filter(([,ft])=>ft.ok===ft.n);b+=`${__t(65)}`+(N.length?"":__t(66))+za(N.map(([ft,j])=>({lab:Cn(ft),w:j.ok/j.n,c:ds[Ls(j.ok/j.n*100)],val:`${Math.round(j.ok/j.n*100)}% <small>${rr(j.sum/j.n)}</small>`,tip:`${ft}: ${j.ok}${__t(67)}${j.n}${__t(68)}${rr(j.sum/j.n)}`})))+(V.length?`${__t(69)}${V.map(([ft])=>Cn(ft)).join(" ")}</p>`:"");let ht=new Map;f.forEach(ft=>{if(!ft.tr||ft.v.next==null||ft.v.next<0||ft.v.pre)return;let j=ft.tr.pat.stops[ft.v.next],ce=ht.get(j)||{n:0,sum:0};ce.n++,ce.sum+=Math.max(0,ft.dl),ht.set(j,ce)});let Et=[...ht].filter(([,ft])=>ft.sum/ft.n>=1).sort((ft,j)=>j[1].sum/j[1].n-ft[1].sum/ft[1].n).slice(0,8),it=Et.length?Et[0][1].sum/Et[0][1].n:1;b+=`${__t(70)}`+(Et.length?za(Et.map(([ft,j])=>({lab:`<span class="sn" data-gs="${ft}">${g(E[ft].n)}</span>`,w:j.sum/j.n/it,c:Gf(j.sum/j.n),val:`${rr(j.sum/j.n)} <small>${j.n} ${j.n===1?"tren":__t(71)}</small>`,tip:`${E[ft].n}: ${j.n}${__t(72)}${rr(j.sum/j.n)}${__t(73)}`}))):__t(74))}else b+=`${__t(75)}`;let P=Ie.hoy;b+=`<button type="button" class="hmore" data-cols>${fn.on?__t(76):__t(77)}</button>`;{ja("");let D=[...Pi.m].filter(([L,z])=>X[L]&&z[0]>=3).map(([L,z])=>[L,z[1]/z[0]]).sort((L,z)=>L[1]-z[1]);D.length&&!Ae()?b+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:D.length&&(b+=`${__t(80)}`+za(D.slice(0,8).map(([L,z])=>({lab:Cn(L),w:z,c:ds[Ls(z*100)],val:`${Math.round(z*100)}%`,tip:`${L}: ${Math.round(z*100)}${__t(81)}`}))))}{let D=(N,V)=>{let ht=(N&&N.snaps||[]).filter(ft=>ft.n&&(!V||ft.t<=V)),Et=ht.reduce((ft,j)=>ft+j.n,0),it=ht.reduce((ft,j)=>ft+j.ok,0);return Et?it/Et*100:null},L=(Ie.hoy&&Ie.hoy.snaps||[]).filter(N=>N.n).map(N=>N.t).pop(),z=D(Ie.hoy),Y=D(Ie.ayer,L),p=z!=null?Math.round(z):null,T=Y!=null?Math.round(Y):null;z!=null&&(b+=`${__t(82)}${Ls(z)}">${Math.round(z)}${__t(83)}${Y!=null?`<span>${L?__t(84):__t(85)} <b class="${Ls(Y)}">${T} %</b></span><span>${p>T?__t(86):p<T?__t(87):__t(88)}</span>`:""}</div>`)}if(b+=`${__t(89)}`,P&&P.snaps){b+=_0(P.snaps);let D=Object.entries(P.st||{}).map(([Y,p])=>[Yt.get(Y),p]).filter(([Y,p])=>Y!=null&&p.n>=3).map(([Y,p])=>[Y,p.sum/p.n/60,p]).filter(Y=>Y[1]>=1).sort((Y,p)=>p[1]-Y[1]).slice(0,8);if(D.length){let Y=D[0][1];b+=`${__t(90)}`+za(D.map(([p,T,N])=>({lab:`<span class="sn" data-gs="${p}">${g(E[p].n)}</span>`,w:T/Y,c:Gf(T),val:`${rr(T)}${__t(91)}${Math.round(N.max/60)}</small>`,tip:`${E[p].n}: ${N.n}${__t(92)}${N.d5}${__t(93)}${Math.round(N.max/60)} min`})))}let L=Object.entries(P.lines||{}).filter(([Y,p])=>X[Y]&&p.n>=3).sort((Y,p)=>Y[1].ok/Y[1].n-p[1].ok/p[1].n);L.length&&(b+=`${__t(94)}`+za(L.map(([Y,p])=>({lab:Cn(Y),w:p.ok/p.n,c:ds[Ls(p.ok/p.n*100)],val:`${Math.round(p.ok/p.n*100)}% <small>${rr(p.sum/p.n/60)}</small>`,tip:`${Y}${__t(95)}${Math.round(p.ok/p.n*100)}${__t(96)}${Math.round(p.max/60)} min`}))));let z=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;b+=`<small class="snote">${z>40?`${__t(98)}${os(z<90?Math.round(z)+" min":z<2160?Math.round(z/60)+" h":Math.round(z/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${g((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else b+=`<p class="snote">${Ie.at?__t(102):__t(103)}</p>`;return b+"</div>"}function v0(o){let u=se(),f=It.filter(T=>(T.fam||T.tr&&T.tr.fam)===o),_=f.filter(T=>T.real),S=f.length,b=f.filter(T=>T.dl>=5).length,P=f.filter(T=>T.dl<3).length,D=f.filter(T=>T.stop==="via"||T.broke).length,L=$.alerts.filter(T=>T.fams.has(o)),z=T=>{let N=T.tr;if(!N)return"";let V=T.v;if(T.real&&V){let Et=V.next>=0?E[N.pat.stops[V.next]].n:"";return V.atStop>=0?`${__t(104)}${E[N.pat.stops[V.atStop]].n}`:Et?`${__t(105)}${Et}`:""}let ht=T.p;return ht&&ht.next!=null&&ht.next>=0?`${__t(105)}${E[N.pat.stops[ht.next]].n}`:""},Y=f.slice().sort((T,N)=>N.dl-T.dl).slice(0,40).map(T=>{let N=T.tr;return`<li class="go${Ga({num:N?N.num:T.v.num,tid:N?N.tid:T.v.tid})?" sel":""}" data-gt="${g(N?N.num:T.v.num)}|${g(T.real?T.v.tid:N?N.tid:"")}"><b>${g(N?N.num:T.v.num)}</b><span>${N?Mi(E[N.pat.stops[N.pat.stops.length-1]].n,o):""} <small>${g(z(T))}</small></span>${T.dl>=1?`<em class="dl ${Ri(T.dl)}">+${Math.round(T.dl)}</em>`:__t(106)}</li>`}).join(""),p=ja(o);return`<div class="tc sts" style="--c:${X[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Cn(o)}${__t(107)}${u.live?`${__t(113)}${S}${__t(114)}${_.length<S?` (${_.length}${__t(115)}`:""}`:`${__t(116)}${st(u.min)}`}</small>
      <div class="kpis"><div class="kpi ${S?Ls(P/S*100):""}"><b>${S?Math.round(P/S*100)+"%":"\u2014"}${__t(108)}${b?b/Math.max(1,S)>.2?"b":"w":"g"}"><b>${b}${__t(109)}${D?"b":"g"}"><b>${D}${__t(110)}${L.length?y0(L):__t(117)}${p<.7?`${__t(118)}${Math.round(p*100)}${__t(119)}`:""}${__t(111)}${Y||__t(120)}${__t(112)}`}let y0=o=>`<div class="al">${o.slice(0,3).map(u=>`<p>\u26A0\uFE0F ${Xa(u)} ${g(u.txt)} <small>${qa(u)}</small></p>`).join("")}</div>`,fn={on:!1,mesh:null};function Wf(){let o=Ie.hoy,u=[];if(o&&o.st)for(let[f,_]of Object.entries(o.st)){let S=Yt.get(f);S!=null&&_.n>=2&&u.push([S,_.sum/_.n/60,_.n])}if(!u.length){let f=new Map;It.forEach(_=>{if(!_.real||!_.tr||_.v.next==null||_.v.next<0||_.v.pre||!$.delays.has(_.v.tid))return;let S=_.tr.pat.stops[_.v.next],b=f.get(S)||[0,0];b[0]+=Math.max(0,_.dl),b[1]++,f.set(S,b)}),f.forEach((_,S)=>u.push([S,_[0]/_[1],_[1]]))}return u}let Xf=()=>Math.min(1,Math.max(.22,r.dist/110));function S0(){if(!fn.mesh||!fn.d)return;let o=Xf();if(Math.abs(o-fn.r)<.04)return;fn.r=o;let u=new ze;fn.d.forEach(([f,_],S)=>{u.makeScale(o,o,.3+Math.min(_,40)*.3),u.setPosition(E[f].w[0],E[f].w[1],k),fn.mesh.setMatrixAt(S,u)}),fn.mesh.instanceMatrix.needsUpdate=!0,a()}function M0(){if(fn.mesh&&(e.remove(fn.mesh),fn.mesh.geometry.dispose(),fn.mesh.material.dispose(),fn.mesh=null),!fn.on){a();return}let o=Wf();if(!o.length){cn(__t(121)),fn.on=!1;return}let u=new Fo(.32,.32,1,16);u.rotateX(Math.PI/2),u.translate(0,0,.5);let f=new Mr({fog:!1}),_=new Lo(u,f,o.length),S=new ze,b=new _e;fn.d=o,fn.r=Xf(),o.forEach(([P,D],L)=>{let z=.3+Math.min(D,40)*.3;S.makeScale(fn.r,fn.r,z),S.setPosition(E[P].w[0],E[P].w[1],k),_.setMatrixAt(L,S),b.set(D>10?"#dc2626":D>5?"#ea7a0c":D>=1?"#eab308":"#16a34a"),_.setColorAt(L,b)}),_.renderOrder=25,_.frustumCulled=!1,e.add(_),fn.mesh=_,s.tilt<.5&&(s.tilt=.85),a()}let zr=document.createElement("button");zr.type="button",zr.id="sbtn",zr.title=__t(122),zr.innerHTML=__t(123),zr.onclick=()=>{Q=!Q,Q&&(nt=Lt=!1,Ie.at=0),d._h="",Ue(),a()},document.body.appendChild(zr);function b0(){r.dist<45!=je<45&&(je=r.dist,un()),S0(),w0(),gn()}let fs=[],bn=new q;function w0(){let o=0;if(fn.on){let f=Wf().sort((S,b)=>b[1]-S[1]),_=[];for(let[S,b]of f){if(o>=30)break;if(bn.set(E[S].w[0],E[S].w[1],k).project(n),bn.z>1||Math.abs(bn.x)>1||Math.abs(bn.y)>1)continue;let P=(bn.x*.5+.5)*innerWidth,D=(-bn.y*.5+.5)*innerHeight;if(_.some(([z,Y])=>Math.abs(z-P)<90&&Math.abs(Y-D)<18))continue;_.push([P,D]);let L=fs[o]||(fs[o]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=E[S].n+" +"+Math.round(b)+"\u2032",L.dataset.i=S,L.style.display="block",L.style.transform=`translate(${Math.round(P+8)}px,${Math.round(D-8)}px)`,o++}for(;o<fs.length;o++)fs[o].style.display="none";return}if(r.dist<30){let f=[];for(let _=0;_<qt;_++)ne[_]<4||(bn.set(E[_].w[0],E[_].w[1],k).project(n),!(bn.z>1||Math.abs(bn.x)>1.05||Math.abs(bn.y)>1.05)&&f.push([_,(bn.x*.5+.5)*innerWidth,(-bn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[_,S,b]of f){let P=fs[o]||(fs[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=E[_].n,P.dataset.i=_,P.style.display="block",P.style.transform=`translate(${Math.round(S+8)}px,${Math.round(b-7)}px)`,o++}}for(;o<fs.length;o++)fs[o].style.display="none"}function wl(o){return bn.set(o[0],o[1],k).project(n),[(bn.x*.5+.5)*innerWidth,(-bn.y*.5+.5)*innerHeight,bn.z]}function qf(o,u,f,_){let S=null,b=f*f;for(let P of It){let[D,L,z]=wl(P.p.w);if(z>1)continue;let Y=(D-o)**2+(L-u)**2;Y<b&&(b=Y,S={a:P})}if(S)return S;b=_*_;for(let P=0;P<qt;P++){if(!ne[P])continue;let[D,L,z]=wl(E[P].w);if(z>1)continue;let Y=(D-o)**2+(L-u)**2;Y<b&&(b=Y,S={s:P})}return S}let ar=!1;window.__rodHide=()=>{ar=!0},document.addEventListener("click",o=>{ar&&!o.target.closest("#mcs, canvas")&&(ar=!1)},!0),window.__rodTap=(o,u)=>{let f=null,_=1e9;for(let b of fs){if(b.style.display==="none")continue;let P=b.getBoundingClientRect();if(o>=P.left-4&&o<=P.right+4&&u>=P.top-4&&u<=P.bottom+4){let D=Math.abs(u-(P.top+P.bottom)/2)*4+(o-P.left);D<_&&(_=D,f=b)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let S=qf(o,u,24,18);return S&&(S.a||S.s!=null)&&(ar=!1),S&&(S.a||S.s!=null)&&(Kt.st=-1),S&&S.a?(nt=!1,Lt=!1,Q=!1,xt=S.a.tr||{vtid:S.a.v.tid},Qt=-1,Ot=null,un(),Ue(),jt=0,a(),!0):S&&S.s!=null?(nt=!1,Lt=!1,Q=!1,Qt=S.s,xt=null,Ot=null,un(),Ue(),a(),!0):!1},window.__rodHover=(o,u)=>{let f=qf(o,u,14,10);if(f&&f.a){let _=f.a,S=_.tr?E[_.tr.pat.stops[_.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${_.c}">\u25A0</span> ${g(_.fam||_.tr&&_.tr.fam||"?")}${__t(124)}${g(_.tr?_.tr.num:_.v.num)}</b><small>${S?__t(105)+g(S):""}${_.real?(_.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(_.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${g(E[f.s].n)}</b><small>${[...E[f.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{Kt.st=-1,ar=!1,nt=Lt=Q=!1,xt=null,Ot=null,Qt=o,un(),d._h="",Ue(),a()};{let o=x("#rc"),u=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(u).observe(o)}catch{}addEventListener("resize",u),setTimeout(u,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,u=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!u||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(_=>_.text()).then(_=>{let S=(_.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];S&&f&&S!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{ui()}catch{}},2500),setInterval(()=>{try{Ie.at=0,ui()}catch{}},15*6e4);let ni={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},$a=matchMedia("(prefers-color-scheme: dark)");function El(){let o=ni.mode==="dark"||ni.mode==="auto"&&$a.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<qt;f++)le.set(o?[.06,.08,.11]:[1,1,1],f*3);Ft.attributes.fill.needsUpdate=!0,Ge.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),or.textContent=ni.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ni.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",or.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ni.mode];let u=document.querySelector("meta[name=theme-color]");u&&(u.content=o?"#0d1119":"#eef1f5"),a()}let or=document.createElement("button");or.type="button",or.id="tbtn",or.onclick=()=>{ni.mode=ni.mode==="auto"?$a.matches?"light":"dark":ni.mode==="dark"?"light":"dark",ni.mode==="dark"===$a.matches&&(ni.mode="auto");try{localStorage.setItem("rod_theme",ni.mode)}catch{}El(),cn(or.title)},document.body.appendChild(or);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}$a.addEventListener&&$a.addEventListener("change",El),El(),window.__rodTick=Ye,window.__rodFrame=b0,window.__rodResize=()=>{bt.resolution.set(innerWidth,innerHeight),Gt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Si={st:-1,f:new Set},Yf=o=>{let u=[...E[o].fams].sort(F);return`<div class="sfc">${u.length>1?`<button type="button" data-sf="" class="${Si.f.size?"":"on"}${__t(133)}`:""}${u.map(f=>`<button type="button" data-sf="${g(f)}" class="ln ${Si.f.size&&!Si.f.has(f)?"off":""}${yt.has(f)?"":" hid"}" style="--c:${X[f]}">${g(f)}</button>`).join("")}</div>${u.some(f=>!yt.has(f))?__t(134):""}`},E0=o=>{let u=(o||"#6b7385").replace("#",""),f=parseInt(u.slice(0,2),16),_=parseInt(u.slice(2,4),16),S=parseInt(u.slice(4,6),16);return(.299*f+.587*_+.114*S)/255>.62?"#1d2330":"#fff"},Mi=(o,u)=>{let f=X[u]||"#6b7385";return`<span class="dst" style="background:${f};color:${E0(f)}" title="${g(u||"")}">${g(o)}</span>`},Tl=o=>{let u=E[o]&&E[o].id;return Qe.st.includes(u)?"\u{1F3E0} ":Xe.st.includes(u)?"\u{1F4BC} ":""},Ri=o=>o>10?"d-hi":o>5?"d-md":"d-lo",T0=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Va={ref:null,m:new Map};function Mu(o){if(Va.ref!==$.alerts){Va.ref=$.alerts,Va.m=new Map;for(let u of $.alerts){if(u.src!=="Rodalies")continue;let f=u.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let _ of(u.es||u.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Va.m.set(_[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:u.txt,when:u.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(u.es||u.txt)})}}return Va.m.get(String(o))||null}let Ha={ref:null,m:new Map};function Zf(o){let u=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!u)return null;if(Ha.ref!==$.alerts){Ha.ref=$.alerts,Ha.m=new Map;for(let _ of $.alerts)if(_.src==="Rodalies"&&T0.test(_.es||_.txt))for(let S of(_.es||_.txt).matchAll(/\b(\d{4,6})\b/g))Ha.m.set(S[1],_)}let f=Ha.m.get(u);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Ga=o=>{try{let u=xt;return u?u.num!=null&&String(u.num)===String(o.num)||o.tid&&(u.tid===o.tid||u.vtid===o.tid):!1}catch{return!1}},Jf=(o,u)=>{let f=A(o,u.min-1,u.min+240).sort((_,S)=>_.est-S.est).slice(0,6);return f.length?`${__t(135)}${f.map(_=>`<li><b>${st(_.est)}</b>${Cn(_.fam)}<span>${Mi(_.dest,_.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Ii=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),A0=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Ii))}catch{}},jf=o=>!!o&&Ii.some(u=>u.num===String(o.num)),Ce=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),ps=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Ce))}catch{}},Al=(o,u)=>!!(Ce&&o&&Ce.num===String(o.num)&&Ce.sid===E[o.pat.stops[u]].id);function Cl(o,u){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}cn(o+" \xB7 "+u),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:u,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:u})).catch(()=>{})}function C0(){if(!Ce||Ce.done)return;let o=se();if(!o.live)return;let u=t.days.indexOf(o.ymd),f=(et[u]||[]).find(L=>String(L.num)===Ce.num)||(et[u-1]||[]).find(L=>String(L.num)===Ce.num);if(!f)return;let _=f.pat.stops.findIndex(L=>E[L].id===Ce.sid);if(_<0)return;let S=dt(f),b=typeof S=="number"?Math.max(0,S/60):0,P=f.day===u-1?1440:0,D=f.t0+f.pat.t[2*_]+b-P;if(D-o.min<-3){Ce.done=!0,ps();return}if(window.__schedAt&&D-2-o.min>.1&&(Ce.sch==null||Math.abs(Ce.sch-D)>=.5)&&(Ce.sch=D,Ce.nat=Date.now()+(D-2-o.min)*6e4,ps(),window.__schedAt(7701,`${__t(136)}${E[f.pat.stops[_]].n}`,__t(137)+` (${st(D)})`+(L=>L?` \xB7 ${__t(138)} ${L.fam} ${__t(139)} ${st(L.est)}${L.plat?__t(140)+L.plat:""}`:"")(Ul.get(Ce.sid)),Date.now()+(D-2-o.min)*6e4)),D-o.min<=2){Ce.done=!0,ps();let L=Ul.get(Ce.sid),z=L?` \xB7 ${L.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${L.fam} ${__t(139)} ${st(L.est)}${L.plat?__t(140)+L.plat:""}`:"",Y=Math.round(D-o.min),T=(Y>=1?`${__t(144)} ${Y}${__t(143)}${st(D)}) \xB7 ${__t(145)}`:`${__t(146)} (${st(D)}) \xB7 ${__t(145)}`)+z;window.__schedAt&&Ce.nat&&Date.now()>=Ce.nat-2e4?document.hidden||Cl(`${__t(136)}${E[f.pat.stops[_]].n}`,T):(window.__schedOff&&window.__schedOff(7701),Cl(`${__t(136)}${E[f.pat.stops[_]].n}`,T))}}function bu(o,u){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),_=et[u]||[],S=(D,L)=>D.t0+D.pat.t[2*L+1],b=null,P=11;for(let D of _){let L=D.pat.stops.findIndex(Y=>E[Y].id===o.sid);if(L<0||L===D.pat.stops.length-1)continue;let z=Math.abs(S(D,L)-f)+(String(D.num)===o.num?-5:0)+(D.fam===o.fam?0:20)+(o.dest&&E[D.pat.stops[D.pat.stops.length-1]].id!==o.dest?3:0);z<P&&(P=z,b=D)}return b}let Rl=new Set;function R0(){if(!Ii.length)return;let o=se();if(!o.live)return;let u=t.days.indexOf(o.ymd);for(let f of Ii){let _=bu(f,u);if(!_)continue;let S=_.pat.stops.findIndex(Y=>E[Y].id===f.sid);if(S<0)continue;let b=_.t0+_.pat.t[2*S+1],P=dt(_),D=typeof P=="number"?P/60:0,L=b-o.min;if(L<-2||L>60)continue;let z=o.ymd+f.num+(P==="X"?"X":D>=10?10:D>=5?5:0);Rl.has(z)||(P==="X"||D>=5?(Rl.add(z),Cl(`${__t(147)}${st(b)} ${P==="X"?__t(148):`${__t(149)}${Math.round(D)} min`}`,`${_.fam} ${_.num}${__t(150)}${E[_.pat.stops[S]].n}${P==="X"?"":`${__t(151)}${st(b+D)}`}`)):L<=20&&!Rl.has(o.ymd+f.num+"ok")&&$.vp.has(_.tid)&&(Rl.add(o.ymd+f.num+"ok"),cn(`${__t(147)}${st(b)}${__t(152)}`)))}}setInterval(()=>{try{C0(),R0()}catch{}},15e3);let Cn=o=>`<span class="ln" style="--c:${X[o]}">${g(o)}</span>`;{let o=f=>{let _=/^#?([0-9a-f]{6})$/i.exec(f||"");return _?[0,2,4].map(S=>{let b=parseInt(_[1].slice(S,S+2),16)/255;return b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4)}).reduce((S,b,P)=>S+b*[.2126,.7152,.0722][P],0):0},u=[...new Set(Object.values(X))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(u){let f=document.createElement("style");f.textContent=u,document.head.appendChild(f)}}function Kf(o,u){return u?o==="X"?__t(154):o>=60?`<span class="st late ${Ri(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function wu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let u=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,_=u?u.getBoundingClientRect().bottom-f+3:150;if(u){let S=u.nextElementSibling||u.parentElement!==o&&u.parentElement.nextElementSibling;S&&(_=Math.min(_,S.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,_)))+"px")}function ms(){try{let o=d,u=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!qe.on||qe.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!u||!u.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(p=>o.style.removeProperty(p)),o._fit=0);return}let S=o.getBoundingClientRect().top,b=u.getBoundingClientRect().top-8,P=Math.max(140,Math.floor(b-S)),D=f&&f.getClientRects().length?f.getBoundingClientRect():null,L=D?Math.max(10,Math.ceil(innerWidth-D.left+8)):10;o._fit=P+"|"+L;let z=o.style,Y={"max-height":P+"px",height:"auto",bottom:"auto",width:"auto",right:L+"px"};for(let p in Y)(z.getPropertyValue(p)!==Y[p]||z.getPropertyPriority(p)!=="important")&&z.setProperty(p,Y[p],"important")}catch{}}setInterval(()=>{qe.on&&qe.cur==="map"&&ms()},700);try{new MutationObserver(()=>ms()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=ms;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let u=_=>{let S=document.querySelector(_);if(!S||!S.getClientRects().length)return"\u2014";let b=S.getBoundingClientRect();return[b.left,b.top,b.right,b.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${qe.on?qe.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${u("#mcs")}
tc ${u("#mcs .tc")}
rc ${u("#rcgrab")} z ${u("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(u){o.textContent="err "+u.message}},1e3)}addEventListener("resize",()=>setTimeout(ms,80));try{new ResizeObserver(()=>ms()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(ms,80));function Ue(){try{I0()}finally{requestAnimationFrame(ms),window.__rodTabSync&&window.__rodTabSync();try{wu()}catch{}}}function I0(){if(!xt&&Qt<0&&!Lt&&!nt&&!Q&&!Ut){ar=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Nu();return}let o=se(),u="",f=Ae()&&o.live,_=(p,T)=>$.alerts.filter(N=>[...N.fams].some(V=>p.has(V))||T!=null&&N.stops.has(T)),S=p=>p.length?`<div class="al">${p.slice(0,4).map(T=>`<p>\u26A0\uFE0F ${Xa(T)} ${[...T.fams].sort(F).slice(0,6).map(Cn).join(" ")} ${g(T.txt)} <small>${qa(T)}</small></p>`).join("")}${p.length>4?`<small>y ${p.length-4}${__t(157)}`:""}</div>`:"",b=xt&&f?It.find(p=>p.real&&(xt.vtid?p.v.tid===xt.vtid:p.tr===xt)):null;if(Ut&&!Q&&!nt&&!Lt&&!xt&&Qt<0)u=v0(Ut);else if(Q)u=x0();else if(nt)u=`${__t(158)}${g(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(160)}${__t(159)}`;else if(Lt){let p=$.alerts.filter(T=>[...T.fams].some(N=>yt.has(N))||!T.fams.size);u=`${__t(161)}${p.length}${__t(162)}${p.map(T=>`<div class="al"><p>${Xa(T)} ${[...T.fams].sort(F).map(Cn).join(" ")} <small>${qa(T)}</small></p><p>${g(T.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${$.alertsTs&&Date.now()/1e3-$.alertsTs<6*3600?__t(165):`${__t(166)}${$.alertsTs?new Date($.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(b){let p=b.v,T=b.tr,N=Ee=>g(E[T.pat.stops[Ee]].n),V=T?T.pat.stops.length:0,ht=Yt.get(p.sid),Et=ht!=null?g(E[ht].n):g(p.sid),it=T&&p.atStop>=0?N(p.atStop):"",ft=T&&p.next>=0?N(p.next):Et,j=T&&p.next>0?N(p.next-1):"",ce=b.broke||Zf(b),xe=ce?`<b class="stopv">\u26A0\uFE0F ${ce.why==="aviso"?__t(167):`${__t(168)}${ce.min} min`}</b>${T&&j?`${__t(169)}${j}${__t(170)}${ft}</b>`:""}`:b.stop==="via"&&T?`${__t(171)}${j?`${__t(173)}${j}${__t(170)}${ft}</b>`:`${__t(174)}${ft}</b>`}${__t(172)}${Math.max(1,Math.round(p.still/60))} min`:p.pre&&T?p.prevTr?`${__t(175)}${g(p.prevTr.num)}${__t(176)}${N(0)}</b>${p.prevDl>=1?`${__t(179)}${Math.round(p.prevDl)} min</b>`:""}${__t(177)}${st(p.arrO)}${__t(178)}${st(p.depEst)}</b>${p.preDl>=1?`${__t(180)}${st(p.dep0)})`:""}`:`${__t(181)}${N(0)}${__t(182)}${st(p.dep0+b.dl)}</b>`:it&&p.before?`Llegando a <b>${it}</b>`:(p.st==="STOPPED_AT"||b.stop==="st")&&it?`${__t(183)}${it}</b>`:it&&p.next>=0&&p.atStop!==p.next?`${__t(184)}${it}${__t(176)}${ft}</b>`:j?`${__t(185)}${j}${__t(170)}${ft}</b>`:`${__t(186)}${ft}</b>`,Wt=T&&p.next>=0&&!p.pre?st(Ka(T,p,p.next,T.t0+T.pat.t[2*p.next]+b.dl)):"",Ve=[];if(T){let Ee=b.idx>=0?b.idx:0,fe=p.pre?Math.max(b.dl,p.preDl||0):b.dl,pn=De=>T.t0+T.pat.t[De]+fe;for(let De=Ee;De<V;De++)Ve.push(`<li class="${Tl(T.pat.stops[De])?"mine":""}${Al(T,De)?" alm":""}"><b>${st(Ka(T,p,De,pn(De===0?1:2*De)))}</b><span title="${N(De)}">${Tl(T.pat.stops[De])}${N(De)}</span>${fe>=1?`<em class="dl ${Ri(fe)}">${p.pre?"\u2248":""}+${Math.round(fe)}</em>`:""}${De>0?`<button type="button" class="abtn" data-alarm="${De}" title="${__t(187)}">${Al(T,De)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}u=`<div class="tc" style="--c:${b.c}"><button class="x" data-cx>\xD7</button><div>${Cn(b.fam)}${__t(188)}${g(T?T.num:p.num)}${__t(189)}${T?`<h3 class="rt"><span class="o" title="${N(0)}">${N(0)}</span><span class="ar">\u2192</span>${Mi(E[T.pat.stops[V-1]].n,T.fam)}</h3>`:""}
        <p>${xe}${Wt?`${__t(190)}${Wt}`:""}${p.plat&&p.st==="STOPPED_AT"&&it?`${__t(191)}${g(p.plat)}</b>`:""}</p><p>${p.pre&&p.prevTr?p.preDl>=1?`${__t(192)}${Math.round(p.preDl)}${__t(193)}`:__t(194):Kf($.delays.get(p.tid),$.delays.has(p.tid))}${(()=>{let Ee=T&&kr(T.num);return Ee&&Ee.n>=2?`${__t(195)}${Ee.n}${__t(196)}${Ee.late?`${__t(197)} <b>${Ee.late} ${__t(198)} ${Ee.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ee.avg<.5?"0":"+"+Math.round(Ee.avg)} min</span>`:""})()}${(()=>{let Ee=T&&Mu(T.num);return Ee?`<span class="why" title="${g(Ee.txt)}">${Ee.why?__t(203)+g(Ee.why):__t(204)}</span>`:""})()}</p>
        <small>${p.pre?`${__t(205)}${os(au(b.age))}`:p.est?__t(206):`${__t(207)}${os(au(b.age))}${b.age>120?__t(208):""}`}</small>
        ${Ve.length?`${b.dl>=1||p.pre&&p.preDl>=1?`${__t(209)}`:""}<ol class="stops">${Ve.join("")}</ol>`:""}${S(_(new Set([b.fam])))}
        ${Ll(T?T.num:p.num,"",b.fam)}${T?`<div class="rtb two"><button type="button" data-fav>${jf(T)?__t(210):__t(211)}</button><button type="button" data-follow>${Nl(T)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(xt&&f&&!xt.pat)u=`${__t(214)}${g(xt.num||xt.vtid||"")}${__t(215)}`;else if(xt){let p=xt,T=p.pat,N=T.stops.length,V=dt(p),ht=typeof V=="number"?V/60:0,Et=t.days.indexOf(o.ymd),it=p.day===Et-1?1440:0,ft=o.min+it-p.t0-ht,j=ir(p,ft),ce=fe=>p.t0+T.t[fe]+ht,xe=fe=>g(E[T.stops[fe]].n),Wt=__t(216);j&&(Wt=j.moving?`${__t(217)}${xe(j.next)}${__t(218)}${st(ce(2*j.next))}`:j.at===N-1?`${__t(219)}${xe(N-1)}</b>`:`${__t(183)}${xe(j.at)}${__t(220)}${st(ce(2*j.at+1))}`);let Ve=j?j.next:0,Ee=[];for(let fe=Ve;fe<N;fe++)Ee.push(`<li class="${Tl(T.stops[fe])?"mine":""}${Al(p,fe)?" alm":""}"><b>${st(Ka(p,null,fe,ce(2*fe)))}</b><span title="${xe(fe)}">${Tl(T.stops[fe])}${xe(fe)}</span>${ht>=1?`<em class="dl ${Ri(ht)}">+${Math.round(ht)}</em>`:""}${fe>0?`<button type="button" class="abtn" data-alarm="${fe}" title="${__t(187)}">${Al(p,fe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);u=`<div class="tc" style="--c:${p.c}"><button class="x" data-cx>\xD7</button><div>${Cn(p.fam)}${__t(188)}${g(p.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${xe(0)}">${xe(0)}</span><span class="ar">\u2192</span>${Mi(E[p.pat.stops[N-1]].n,p.fam)}</h3>
        <p>${Wt}</p><p>${Kf(V,V!=null)}${(()=>{let fe=kr(p.num);return fe&&fe.n>=2?`${__t(195)}${fe.n}${__t(196)}${fe.late?`${__t(197)} <b>${fe.late} ${__t(198)} ${fe.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${fe.avg<.5?"0":"+"+Math.round(fe.avg)} min</span>`:""})()}${__t(221)}${st(p.t0+T.t[1])}${__t(222)}${st(p.t0+T.t[2*N-2])}${__t(223)}${ht>=1?__t(209):""}<ol class="stops">${Ee.join("")}</ol>${Ll(p.num,"",p.fam)}<div class="rtb two"><button type="button" data-fav>${jf(p)?__t(210):__t(211)}</button><button type="button" data-follow>${Nl(p)?__t(212):__t(213)}</button></div></div>`}else{let p=Qt,T=t.days.indexOf(o.ymd),N=[];Si.st!==p&&(Si.st=p,Si.f.clear());let V=j=>(!X[j]||yt.has(j))&&(!Si.f.size||Si.f.has(j));if(T>=0){let j=(ce,xe)=>{for(let Wt of ce){if(!V(Wt.fam))continue;let Ve=Wt.pat.stops.indexOf(p);if(Ve<0||Ve===Wt.pat.stops.length-1)continue;let Ee=dt(Wt),fe=typeof Ee=="number"?Ee/60:0,pn=Wt.t0+Wt.pat.t[2*Ve+1]-xe;pn+fe<o.min-1||pn>o.min+360||N.push({tr:Wt,t:pn,dl:fe,d:Ee,on:$.vp.has(Wt.tid),past:o.min>Wt.t0+Wt.pat.t[1]-xe+2})}};j(et[T],0),T>0&&j(et[T-1],1440)}N.sort((j,ce)=>j.t+j.dl-ce.t-ce.dl);let ht=E[p].id,Et=lt.get(ht),it=(f||W()&&o.live)&&$.url;it&&(!Et||Date.now()-Et.at>np())&&!Et?.loading&&(lt.set(ht,{...Et||{},loading:!0,at:Et?Et.at:0}),Rt($.url.replace(/\/+$/,""),"/departures.json?stationId="+ht).then(j=>{lt.set(ht,{at:Date.now(),d:j}),Qt===p&&(d._h="",Ue())}).catch(()=>lt.set(ht,{at:Date.now(),err:1})));let ft=it&&Et&&Et.d&&Array.isArray(Et.d.trains)&&Et.d.trains.length?Et.d.trains:null;if(ft){let j=new Map([...$.vp.values()].map(Wt=>[String((ut.get(Wt.tid)||{}).num||Wt.num),Wt])),ce=new Map(ii(p).map(Wt=>[String(Wt.num),Wt])),xe=ft.filter(Wt=>V((Wt.line||{}).id||"")).slice(0,40).map(Wt=>{let Ve=String(Wt.commercialNumber||Wt.technicalNumber||""),Ee=ce.get(Ve),fe=Ee?st(Ee.est):(Wt.departureDateHourSelectedStation||"").slice(11,16),pn=(Wt.line||{}).id||"",De=j.get(Ve),di=Ee?Math.round(Ee.dl)*60:De?$.delays.get(De.tid):null,Vl=Ee&&(Ee.gone||!Ee.live&&Ee.est<o.min-1);return`<li class="go${Vl?" old":""}${Ga({num:Ve,tid:De?De.tid:""})?" sel":""}" data-gt="${g(Ve)}|${De?g(De.tid):""}"><b>${g(fe)}</b>${X[pn]?Cn(pn):`<span class="ln" style="--c:#6b7385">${g(pn||"?")}</span>`}<span>${Mi((Wt.destinationStation||{}).name||"",pn)}${Wt.trainObservations?` \xB7 <i>${g(Wt.trainObservations)}</i>`:""}${Vl?` <small class="oldt">${Ee.gone?__t(225):__t(226)}</small>`:""}</span>${Wt.trainCancelled?__t(227):typeof di=="number"&&di>=60?`<em class="dl ${Ri(di/60)}">+${Math.round(di/60)}</em>`:""}${Wt.platformSelectedStation?`${__t(228)}${g(Wt.platformSelectedStation)}</i>`:""}${De?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(E[p].n)}</h3>${Yf(p)}${Ll("",E[p].id,"")}${__t(229)}${xe||__t(231)}</ol>${Jf(p,o)}${S(_(E[p].fams,p))}${__t(230)}`}else u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${g(E[p].n)}</h3>${Yf(p)}${Ll("",E[p].id,"")}
        <small style="margin-top:6px">${f&&$.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${N.slice(0,40).map(j=>`<li class="go${Ga({num:j.tr.num,tid:j.tr.tid})?" sel":""}" data-gt="${g(j.tr.num)}|${g(j.tr.tid)}"><b>${st(j.t+j.dl)}</b>${Cn(j.tr.fam)}<span>${Mi(E[j.tr.pat.stops[j.tr.pat.stops.length-1]].n,j.tr.fam)}</span>${j.d==="X"?__t(227):j.dl>=1?`<em class="dl ${Ri(j.dl)}">+${Math.round(j.dl)}</em>`:""}${f?j.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':j.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${Jf(p,o)}${S(_(E[p].fams,p))}${__t(230)}`}let P=d.scrollTop;if(d._h!==u&&!(d._touch>Date.now())&&(d.innerHTML=u,d._h=u,d.scrollTop=P),d.style.display="flex",d.classList.toggle("min",ar),Nu(),innerWidth<=640){let p=d.querySelector(".tc");if(p&&!p.querySelector(".mn")){let T=document.createElement("button");T.type="button",T.className="mn",T.setAttribute("aria-label",__t(238)),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",T.onclick=V=>{V.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(ms),wu(),T.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let N=p.querySelector(".x");p.insertBefore(T,N?N.nextSibling:p.firstChild)}}else d.classList.remove("peek");let D=x("#rc");if(innerWidth<=640&&!D.classList.contains("min")&&!Ue.done&&(Ue.done=1,x("#rcgrab").click()),innerWidth<=640){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-p-16)+"px"}else if(innerHeight<=500){let p=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-p-20+"px"}else d.style.top="",d.style.width=Q?"390px":"300px",d.style.maxHeight="";ms();let z=d.querySelector("[data-cx]");z&&(z.onclick=p=>{if(p.stopPropagation(),Ue.done=0,Q||nt||Lt||Ut&&!xt&&Qt<0){Q=nt=Lt=!1,xt||Qt>=0||(Ut=""),d._h="",Ue(),a();return}if(xt&&Kt.st>=0){let T=Kt.st;Kt.st=-1,xt=null,Ot=null,Qt=T,un(),d._h="",Ue(),jt=0,a();return}if(xt&&Nl(xt)){let T=xt,N=[...On],V=Ce?{...Ce}:null,ht=d.querySelector("[data-follow]");ht&&ht.click(),setTimeout(()=>cn(`${__t(239)} \xB7 ${T.fam||""} ${T.num}`,{label:__t(240),fn:()=>{N.forEach(([Et,it])=>Ds(Et,it)),V&&!Ce&&(Ce=V,ps()),dr("map"),io({num:String(T.num),tid:T.tid&&$.vp.has(T.tid)?T.tid:"",tr:T}),Ot=xt,d._h="",Ue(),Le(!0),a()}}),0)}Kt.st=-1,Lt=!1,nt=!1,Q=!1,xt=null,Qt=-1,Ot=null,un(),Ue(),jt=0,a()}),ep(d),d.querySelectorAll("[data-alarm]").forEach(p=>p.onclick=T=>{T.stopPropagation();let N=xt&&xt.pat?xt:ut.get(xt&&xt.vtid)||null;if(!N)return;let V=+p.dataset.alarm,ht=E[N.pat.stops[V]].id;Ce&&Ce.num===String(N.num)&&Ce.sid===ht?(Ce=null,window.__schedOff&&window.__schedOff(7701),cn(__t(241))):(Ce={num:String(N.num),sid:ht,at:Date.now()},cn(`${__t(242)}${E[N.pat.stops[V]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),ps(),d._h="",Ue()});{let p=d.querySelector("[data-fav]");p&&(p.onclick=T=>{T.stopPropagation();let N=xt&&xt.pat?xt:ut.get(xt&&xt.vtid)||null;if(!N)return;let V=Ii.findIndex(ht=>ht.num===String(N.num));if(V>=0)Ii.splice(V,1),cn(__t(243));else{let ht=[...Qe.st,...Xe.st,...Dt.st],Et=N.pat.stops.find(it=>ht.includes(E[it].id))??N.pat.stops[0];Ii.push({num:String(N.num),fam:N.fam,sid:E[Et].id,dest:E[N.pat.stops[N.pat.stops.length-1]].id,t:st(N.t0+N.pat.t[2*N.pat.stops.indexOf(Et)+1])}),cn(`${__t(244)}${N.fam}${__t(245)}${Ii[Ii.length-1].t}${__t(150)}${E[Et].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}A0(),d._h="",Ue(),Le(!0)})}{let p=d.querySelector("[data-share]");p&&(p.onclick=()=>{let T=Ut,N=It.filter(it=>(it.fam||it.tr&&it.tr.fam)===T),V=N.filter(it=>it.dl>=5).sort((it,ft)=>ft.dl-it.dl),ht=$.alerts.filter(it=>it.fams.has(T)),Et=`${T}${__t(247)}${st(se().min)}: ${N.length}${__t(248)}${V.length}${__t(249)}${V.length?" ("+V.slice(0,4).map(it=>`${it.tr?it.tr.num:it.v.num} +${Math.round(it.dl)}`).join(", ")+")":""}.${ht.length?__t(250)+ht[0].txt:__t(251)}`;navigator.share?navigator.share({text:Et}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Et),cn(__t(252)+Et.slice(0,60)+"\u2026"))})}{let p=d.querySelector("[data-cols]");p&&(p.onclick=()=>{fn.on=!fn.on,M0(),d._h="",Ue()})}d.querySelectorAll("[data-gs]").forEach(p=>p.onclick=()=>{let T=+p.dataset.gs;Q=!1,window.__rodPickStation(T),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(p=>p.onclick=T=>{T.stopPropagation();let N=p.dataset.sf;N?Si.f.has(N)?Si.f.delete(N):Si.f.add(N):Si.f.clear(),d._h="",Ue()}),d.querySelectorAll("[data-gt]").forEach(p=>p.onclick=()=>{Kt.st=Qt;let[T,N]=p.dataset.gt.split("|"),V=ut.get(N);io({num:T,tid:$.vp.has(N)?N:"",tr:V||null})}),d.querySelectorAll("[data-sethome]").forEach(p=>p.onclick=()=>Ou(Qt,p.dataset.sethome));let Y=d.querySelector("[data-follow]");Y&&(Y.onclick=()=>{let p=Nl(xt);if(Ot=p?null:xt,!p&&xt&&xt.num!=null){let T=xt.pat.stops,N=String(xt.num),V=null,ht=1e9;for(let Et of[Dt,Qe,Xe]){let it=ri(Et);if(it==null||!T.includes(it)||Et===Dt&&!Dt.st.length)continue;let ft=ii(it).find(j=>String(j.num)===N&&!j.gone);ft&&ft.est<ht&&(ht=ft.est,V=Et)}V&&Ds(V.key,N),Le(!0)}if(p&&xt&&xt.num!=null){let T=String(xt.num);[...On].forEach(([N,V])=>{String(V)===T&&Ds(N,null)}),si.num===T&&(si.num=""),Zt.tid===T&&(Zt.tid="",Zt.manual=0,Zt.quiet=Date.now()+10*6e4),Ce&&Ce.num===T&&(Ce=null,ps(),window.__schedOff&&window.__schedOff(7701)),Le(!0)}Ot?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ue(),a()})}window.__rodCard=Ue;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(xt||Qt>=0||Lt||nt)&&(d._h="",Ue())},x("#ver").onclick=()=>{nt=!0,Q=!1,Lt=!1,d._h="",Ue()};let Il={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},P0=["vacio","lleno","petado",__t(253),"calor","abordo"],L0=["gente","retraso","cancel","ascensor","via"],D0={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},Pl=o=>($.tipos||D0)[o]||o,Eu=(o,u)=>($.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||u&&f.sid===String(u)&&!f.num||o&&u&&f.num===String(o)&&f.sid===String(u)),Qf=o=>{let u=Math.round((Date.now()+($.repSkew||0)-o.at)/6e4);return u<1?__t(265):os(u+" min")},Wa=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Ll(o,u,f){if(!$.url||!$.repOk)return"";let _=Eu(o,u),S=o?P0:L0;return`${__t(266)}${_.length?"":__t(268)}</small>${_.map(b=>`<p><span>${Il[b.kind]||"\u2022"} <b>${g(Pl(b.kind))}</b> <small>${b.up>1?b.up+__t(269):""}${Qf(b)}</small></span>${Wa.has(b.id)?"<small>\u2713</small>":`<button type="button" data-rv="${b.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${b.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${o?__t(270):__t(271)}</summary><div class="ckb">${S.map(b=>`<button type="button" data-rk="${b}" data-rn="${g(o||"")}" data-rs="${g(u||"")}" data-rl="${g(f||"")}">${Il[b]} ${g(Pl(b))}</button>`).join("")}${__t(267)}`}async function tp(o,u){try{let _=await(await fetch($.url.replace(/\/+$/,"")+u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!_.ok){cn(_.err||__t(272));return}if(_.id){Wa.add(_.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Wa].slice(-300)))}catch{}}cn(u==="/vote"?__t(273):_.n>1?`${__t(274)}${_.n}${__t(275)}`:__t(276));let S=await Rt($.url.replace(/\/+$/,""),"/reports.json");S&&S.items&&($.rep=S.items),d._h="",Ue(),Le(!0)}catch{cn(__t(277))}}function ep(o){o.querySelectorAll("[data-rk]").forEach(u=>u.onclick=f=>{f.stopPropagation(),u.disabled=!0,tp({kind:u.dataset.rk,num:u.dataset.rn,sid:u.dataset.rs,line:u.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(u=>u.onclick=f=>{f.stopPropagation();let[_,S]=u.dataset.rv.split(":");Wa.add(+_);try{localStorage.setItem("rod_votes",JSON.stringify([...Wa].slice(-300)))}catch{}tp({id:+_,v:+S},"/vote")})}let Dl=0;function cn(o,u){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,u){let _=document.createElement("button");_.type="button",_.className="tact",_.textContent=u.label,_.onclick=S=>{S.stopPropagation(),clearTimeout(Dl),f.className="",u.fn()},f.appendChild(_)}f.className="on",clearTimeout(Dl),Dl=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),f._tap||(f._tap=1,f.onclick=()=>{clearTimeout(Dl),f.className=""})}function Xa(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(278):g(o.src)}</b>`:""}function qa(o){if(!o.when)return"";let[u,f]=o.when.split("T"),_=vt(new Date),S=_.ymd.slice(0,4)+"-"+_.ymd.slice(4,6)+"-"+_.ymd.slice(6,8);if(u===S&&f){let b=Math.round(_.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return b<1?__t(265):b<60?os(b+" min"):`${__t(279)}${f.slice(0,5)}`}return`${u.slice(8,10)}/${u.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Tu(){let o=x("#alr");if(!o)return;let u=$.alerts.filter(f=>[...f.fams].some(_=>yt.has(_))).length;o.hidden=!u,o.textContent=`\u26A0\uFE0F ${u}${u===1?__t(280):__t(281)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{nt=!1,Q=!1,Lt=!0,Ue()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(282)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let _=getSelection();_.removeAllRanges(),_.addRange(f),x("#wcopy").textContent=__t(283)}setTimeout(()=>x("#wcopy").textContent=__t(284),2500)};let N0=Yt.get("71801");function np(){return document.hidden?On.size||Ce?12e4:1e12:3e4}function ip(o,u){let f=E[o].id,_=lt.get(f);!(ue()&&$.url)||_&&(_.loading||Date.now()-_.at<np())||(lt.set(f,{..._||{},loading:!0,at:_?_.at:0}),Rt($.url.replace(/\/+$/,""),"/departures.json?stationId="+f).then(S=>{lt.set(f,{at:Date.now(),d:S}),u&&u()}).catch(()=>lt.set(f,{at:Date.now(),err:1})))}let sp=o=>+o.slice(0,2)*60+ +o.slice(3,5),Ya={k:-2,m:null};function Za(o){let u=t.days.indexOf(se().ymd);if(Ya.k!==u){Ya.k=u,Ya.m=new Map;for(let f of et[u]||[])Ya.m.set(String(f.num),f)}return Ya.m.get(String(o))||null}let Pi={at:0,m:new Map},Ja=o=>Ae()?(ja(""),[...o].filter(u=>{let f=Pi.m.get(u);return f&&f[0]>=2&&f[1]===0}).sort(F)):[];function ja(o){if(Date.now()-Pi.at>6e4||Pi.vp!==$.vp){Pi.at=Date.now(),Pi.vp=$.vp,Pi.m=new Map;let f=se(),_=t.days.indexOf(f.ymd);if(_>=0)for(let S of et[_]){let b=f.min-S.t0;if(b<S.pat.t[1]+3||b>S.pat.t[S.pat.t.length-2]-3)continue;let P=Pi.m.get(S.fam)||[0,0];P[0]++,$.vp.has(S.tid)&&P[1]++,Pi.m.set(S.fam,P)}}let u=Pi.m.get(o);return u&&u[0]>=3?u[1]/u[0]:1}function Ka(o,u,f,_){let S=E[o.pat.stops[f]].id;if([...Qe.st,...Xe.st].includes(S)){let b=ii(o.pat.stops[f]).find(P=>String(P.num)===String(o.num));if(b&&!b.gone)return b.est}return Au(o,u,f,0,_)}function rp(o,u){if(!o||!u||u.pre||u.dObs==null||u.err==null||u.err>.6)return null;let f=Date.now()/1e3-u.ts;if(f>150||f<-30||(u.still||0)>=90)return null;let _=ee(o.pat).stopD,S=o.pat.t,b,P,D=_.reduce((L,z,Y)=>Math.abs(z-u.dObs)<Math.abs(_[L]-u.dObs)?Y:L,0);if(Math.abs(_[D]-u.dObs)<.16||u.atStop===D)b=S[2*D+1]??S[2*D],P=D;else{let L=_.findIndex(Y=>Y>u.dObs);if(L<=0)return null;let z=Math.min(1,Math.max(0,(u.dObs-_[L-1])/(_[L]-_[L-1]||1)));b=S[2*L-1]+z*(S[2*L]-S[2*L-1]),P=L-1}return{t:vt(new Date).min-f/60,tpos:b,j0:P,sd:_}}function Au(o,u,f,_,S){let b=rp(o,u);if(!b||f<=b.j0&&!(f===b.j0&&_===1))return S;let P=o.pat.t,D=b.t+(P[2*f+_]??P[2*f])-b.tpos;if(D-b.t>45)return S;let L=(S%1440+1440)%1440,z=((D-L+720)%1440+1440)%1440-720;return z>=-3&&z<=5?S+z:S}function Yb(o,u,f,_){let S=rp(o,u);if(!S)return null;let b=Au(o,u,f,1,S.t+o.pat.t[2*f+1]-S.tpos);return b-_.min>30||b<_.min-1?null:b}function ii(o,u){let f=se(),_=(Ae()||W())&&f.live&&!u,S=lt.get(E[o].id),b=[],P=new Map([...$.vp.values()].map(L=>[String((ut.get(L.tid)||{}).num||L.num),L]));if(_&&S&&S.d&&Array.isArray(S.d.trains)&&S.d.trains.length)for(let L of S.d.trains){let z=(L.departureDateHourSelectedStation||"").slice(11,16);if(!z)continue;let Y=String(L.commercialNumber||L.technicalNumber||""),p=P.get(Y),T=p?$.delays.get(p.tid):null,N=Math.max(typeof T=="number"?Math.max(0,T/60):0,p&&p.pre&&p.preDl||0),V=sp(z);V<f.min-720&&(V+=1440);let ht=+(L.departureDateHourSelectedStation||"").slice(17,19)||0,Et=V+ht/60,it=p&&ut.get(p.tid)||Za(Y),ft=it?it.pat.stops.indexOf(o):-1,j=ft>=0?(it.t0+it.pat.t[2*ft+1])%1440:null;if(j!=null){for(;j<Et-720;)j+=1440;for(;j>Et+720;)j-=1440;Math.abs(Et-j)>120&&(j=null)}let ce,xe;j==null?(ce=ht||!N?Et:Et+N,xe=ht?0:N):ht||Math.abs(Et-j)>=1?(ce=Et,xe=Math.max(0,Et-j)):(ce=j+N,xe=N);let Wt=!1;if(it&&!p&&ft>0&&!ht){let Ve=t.days.indexOf(f.ymd),Ee=it.day===Ve-1?1440:it.day===Ve+1?-1440:0,fe=it.t0+it.pat.t[1]-Ee;if(f.min<fe){let pn=fe+(it.pat.t[2*ft+1]-it.pat.t[1]);pn>ce+1&&(ce=pn,Wt=!0,j!=null&&(xe=Math.max(0,ce-j)))}}if(j!=null&&(V=Math.round(j)),p&&it&&ft>=0){let Ve=Au(it,p,ft,1,ce);Ve!==ce&&(ce=Math.max(Ve,f.min),j!=null&&(xe=Math.max(0,ce-j)))}b.push({dubious:Wt,rodLive:!!ht,sm:V,est:ce,dl:xe,fam:(L.line||{}).id||"",dest:(L.destinationStation||{}).name||"",destId:(L.destinationStation||{}).id||"",plat:L.platformSelectedStation||"",cancel:!!L.trainCancelled,obs:L.trainObservations||"",live:!!p,num:Y,tid:p?p.tid:"",tr:p&&ut.get(p.tid)||Za(Y),src:"oficial"})}else{let L=t.days.indexOf(f.ymd);if(L<0)return b;let z=(Y,p)=>{for(let T of Y){let N=T.pat.stops.indexOf(o);if(N<0||N===T.pat.stops.length-1)continue;let V=dt(T),ht=typeof V=="number"?Math.max(0,V/60):0,Et=T.t0+T.pat.t[2*N+1]-p;if(Et+ht<f.min-1||Et>f.min+(f.min>1080||f.min<300?600:360))continue;let it=T.pat.stops[T.pat.stops.length-1];b.push({sm:Et,est:Et+ht,dl:ht,fam:T.fam,dest:E[it].n,destId:E[it].id,plat:"",cancel:V==="X",obs:"",live:$.vp.has(T.tid),num:T.num,tid:T.tid,tr:T,src:"horario"})}};z(et[L],0),L>0&&z(et[L-1],1440),L+1<t.days.length&&f.min>1080&&z(et[L+1],-1440)}if(_){let L=new Set(b.map(p=>String(p.num))),z=t.days.indexOf(f.ymd),Y=(p,T)=>{for(let N of p||[]){if(L.has(String(N.num)))continue;let V=N.pat.stops.indexOf(o);if(V<0||V===N.pat.stops.length-1)continue;let ht=N.t0+N.pat.t[2*V+1]-T;if(ht<f.min-45||ht>f.min+1||!$.vp.get(N.tid))continue;let it=$.delays.get(N.tid),ft=typeof it=="number"?Math.max(0,it/60):0,j=N.pat.stops[N.pat.stops.length-1];b.push({sm:ht,est:ht+ft,dl:ft,fam:N.fam,dest:E[j].n,destId:E[j].id,plat:"",cancel:!1,obs:"",live:!0,num:N.num,tid:N.tid,tr:N,src:"horario"})}};z>=0&&(Y(et[z],0),z>0&&Y(et[z-1],1440));for(let p of b){let T=p.tid&&$.vp.get(p.tid),N=p.tr?p.tr.pat.stops.indexOf(o):-1;p.passed=!!(T&&N>=0&&!T.pre&&T.next!=null&&T.next>=0&&T.next>N&&T.atStop!==N),!p.passed&&p.live&&p.est<f.min&&(p.est=f.min,p.late=!0),p.passed&&(p.gone=!0)}}let D=b.filter(L=>L.gone?f.min-L.est<20:L.est>=f.min-.5).sort((L,z)=>L.est-z.est);{let L=D.filter(z=>z.gone);if(L.length>2){let z=new Set(L.slice(0,L.length-2));D=D.filter(Y=>!z.has(Y))}}if(!D.filter(L=>!L.gone).length&&b.length&&b[0].src==="oficial"&&!u)return ii(o,!0);for(let L of D){let z=L.num&&Mu(L.num);z&&z.cx&&(L.cancel=!0,L.cxWhy=z.txt)}if(Ae()&&f.live){let L=t.days.indexOf(f.ymd);for(let z of D){if(z.live||z.cancel||!z.tr)continue;let Y=z.tr.day===L-1?1440:z.tr.day===L+1?-1440:0,p=z.tr.t0+z.tr.pat.t[1]-Y+(z.dl||0);z.noPos=f.min>p+3&&!z.rodLive,z.ghost=z.noPos&&ja(z.fam)>=.7}}if(u||(D=D.concat(A(o,f.min-.5,f.min+360)).sort((L,z)=>L.est-z.est)),!u&&D.some(L=>L.src==="oficial")){let L=b.filter(p=>p.src==="oficial"),z=Math.max(...L.map(p=>p.sm)),Y=new Set(D.map(p=>String(p.num)));D=D.concat(ii(o,!0).filter(p=>!p.gone&&p.sm<=z&&p.est>=f.min-.5&&!Y.has(String(p.num))).map(p=>Object.assign(p,{unconf:!0}))).sort((p,T)=>p.est-T.est)}if(D.some(L=>L.src==="oficial")){let L=Math.max(...D.map(Y=>Y.sm)),z=new Set(D.map(Y=>String(Y.num)));D=D.concat(ii(o,!0).filter(Y=>Y.sm>L&&!z.has(String(Y.num))))}return D}let ap=(o,u,f,_)=>{let S={key:o,ico:u,name:f,st:[],i:0,walk:10,open:!1};try{let b=JSON.parse(localStorage.getItem("rod_"+o)||"null");b&&Object.assign(S,b)}catch{}return!S.st.length&&_&&(S.st=_),S},Qe=ap("home","\u{1F3E0}",__t(285),null),Xe=ap("work","\u{1F4BC}",__t(286),null),Dt={key:"near",ico:"\u{1F4CD}",name:__t(287),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Qa=[Dt,Qe,Xe];try{Dt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Qe.open=!1,Xe.open=!1;function op(o,u){let f=Mt(o,u),_=Mt(o,u+.009);return 1/Math.hypot(_[0]-f[0],_[1]-f[1])}function Cu(o){if(!navigator.geolocation){Dt.err=__t(288),Le(!0);return}navigator.geolocation.getCurrentPosition(u=>{let{longitude:f,latitude:_}=u.coords,S=Mt(f,_),b=op(f,_),P=E.map((Y,p)=>[p,Math.hypot(Y.w[0]-S[0],Y.w[1]-S[1])*b]).filter(([Y])=>E[Y].fams.size).sort((Y,p)=>Y[1]-p[1]),D=P.filter(([,Y],p)=>p===0||Y<Math.max(2.5,P[0][1]*1.6)).slice(0,3),L=Dt.st[0]!==E[D[0][0]].id;Dt.w=S,Dt.k=b,Dt.acc=u.coords.accuracy!=null?u.coords.accuracy:999,Dt.st=D.map(([Y])=>E[Y].id),Dt.dist=Object.fromEntries(D.map(([Y,p])=>[E[Y].id,p])),Dt.fix=Date.now(),Dt.err="",L&&(Dt.i=0);let z=[Qe,Xe].find(Y=>Y.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5);Le(!0)},u=>{Dt.err=u.code===1?__t(289):__t(290),Le(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let lp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Cu(!0),400);let Zt={fixes:[],tid:"",no:new Map,shown:""},si={num:"",until:0};function Nl(o){return!!o&&(Ot===o||o.num!=null&&[...On.values()].some(u=>String(u)===String(o.num)))}let U0=()=>{let o=new Set([...On.values()].map(String));return si.num&&si.until>Date.now()&&o.add(si.num),o};function F0(){let o=Zt.fixes;if(o.length<2)return;let u=o[o.length-1],f=o.slice().reverse().find(N=>u.t-N.t>=8e3&&u.t-N.t<=9e4);if(!f)return;let _=Math.hypot(u.w[0]-f.w[0],u.w[1]-f.w[1])*u.k,S=u.spd!=null&&u.spd>0?u.spd*3.6:_/((u.t-f.t)/36e5);if(u.acc!=null&&u.acc>100)return;if(Zt.tid&&S<8){if(!Zt.slow)Zt.slow=u.t;else if(u.t-Zt.slow>9e4&&E.some(N=>N.w&&Math.hypot(N.w[0]-u.w[0],N.w[1]-u.w[1])*u.k<.35)){Zt.tid="",Zt.manual=0,Zt.slow=0,Zt.quiet=Date.now()+10*6e4,Ot=null,Le(!0);return}}else Zt.slow=0;if(!Zt.tid&&Zt.quiet&&Date.now()<Zt.quiet||Zt.manual&&Date.now()<Zt.manual)return;if(Zt.tid){if(S<22)return;let N=It.find(V=>V.tr&&String(V.tr.num)===Zt.tid)||sr(se()).out.find(V=>V.tr&&String(V.tr.num)===Zt.tid);if(N){if(Math.hypot(N.p.w[0]-u.w[0],N.p.w[1]-u.w[1])*u.k<=5){Zt.far=0;return}if(Zt.far||(Zt.far=u.t),u.t-Zt.far<12e4)return}Zt.far=0}if(S<22||S>200)return;let b=[u.w[0]-f.w[0],u.w[1]-f.w[1]],P=null,D=2.5,L=It.filter(N=>N.real),z=sr(se()).out.filter(N=>N.tr&&!L.some(V=>V.tr&&String(V.tr.num)===String(N.tr.num))),Y=U0();for(let N of[...L,...z]){if(!N.tr||Y.size&&!Y.has(String(N.tr.num)))continue;let V=N.real?2.5:3.5,ht=Math.hypot(N.p.w[0]-u.w[0],N.p.w[1]-u.w[1])*u.k;if(ht>Math.min(D,V)||P&&P.real&&!N.real)continue;let Et=N.real?N.v.next:N.p.next;if(Et==null||Et<0)continue;let it=E[N.tr.pat.stops[Et]].w,ft=[it[0]-N.p.w[0],it[1]-N.p.w[1]];if(ft[0]*b[0]+ft[1]*b[1]<=0)continue;let j=String(N.tr.num);(Zt.no.get(j)||0)>Date.now()||(D=ht,P=N)}if(!P){Zt.cand=null;return}let p=String(P.tr.num);if(Zt.tid===p||u.acc!=null&&u.acc>50)return;if(!Zt.cand||Zt.cand.k!==p){Zt.cand={k:p,t:u.t};return}if(u.t-Zt.cand.t<2e4)return;Zt.cand=null,Zt.tid=p,nt=Lt=Q=!1,Qt=-1,xt=P.tr,Ot=P.tr,Object.assign(s,{tx:P.p.w[0],ty:P.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());{let N=P.tr.pat.stops,V=P.real?P.v.next:P.p.next,ht=[...Qe.st,...Xe.st],Et=N.findIndex((it,ft)=>ft>=V&&ht.includes(E[it].id));Et>0&&!(Ce&&Ce.num===p)&&(Ce={num:p,sid:E[N[Et]].id,at:Date.now()},ps())}un(),d._h="",Ue(),jt=0,a();let T=x("#onb");T||(T=document.createElement("div"),T.id="onb",document.body.appendChild(T)),T.innerHTML=`${__t(291)}${g(P.tr.fam)} ${g(P.tr.num)}${__t(292)}${g(E[P.tr.pat.stops[P.tr.pat.stops.length-1]].n)}${__t(293)}${Ce&&Ce.num===p?`${__t(295)}${g(E[Yt.get(Ce.sid)].n)}`:""}${__t(294)}`,T.className="on",T.querySelector("[data-onb-no]").onclick=()=>{Zt.no.set(p,Date.now()+20*6e4),Zt.tid="",Ot=null,xt=null,d._h="",Ue(),T.className=""},T.querySelector("[data-onb-x]").onclick=()=>{T.className=""},setTimeout(()=>{T.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,u=()=>{o==null&&(o=navigator.geolocation.watchPosition(_=>{let{longitude:S,latitude:b}=_.coords,P={t:_.timestamp||Date.now(),w:Mt(S,b),k:op(S,b),spd:_.coords.speed,acc:_.coords.accuracy};Zt.fixes.push(P),Zt.fixes=Zt.fixes.filter(D=>P.t-D.t<12e4);try{se().live&&F0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},f=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(u,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?f():(Zt.fixes=[],u())})}setInterval(()=>{!document.hidden&&(Date.now()-Dt.fix>11e4||Qa.some(o=>o.goAt))&&Cu(!1)},3e4);let bi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},ri=o=>o.st.length?Yt.get(o.st[o.i]||o.st[0]):null;function cp(o,u,f,_){if(_&&u.bus)return u.bstops.slice(1).some(P=>_.has(P))?"to":"out";if(_&&u.tr){let P=u.tr.pat.stops,D=P.indexOf(o);if(D>=0&&P.slice(D+1).some(L=>_.has(L)))return"to"}if(_&&u.tr)return"out";let S=Yt.get(u.destId)??E.findIndex(P=>P.n===u.dest);if(S<0||S==null||f==null)return"otros";let b=P=>Math.hypot(E[P].w[0]-E[f].w[0],E[P].w[1]-E[f].w[1]);return b(S)<b(o)?"to":"out"}let lr=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),hp=0,O0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,up=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,dp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,to=o=>{let u=o.es||o.txt;return up.test(u)||up.test(o.txt)?3:dp.test(u)||dp.test(o.txt)||o.lvl>=2?2:1},fp=4,Ru=new Map,Ul=new Map;function pp(o,u){let f=t.days.indexOf(se().ymd),_=f+"|"+o+"|"+[...u].join(",");if(Ru.has(_))return Ru.get(_);let S=!1,b=new Set,P=new Set;for(let L of et[f]||[]){let z=L.pat.stops,Y=z.indexOf(o);if(Y>=0)for(let T=Y+1;T<z.length;T++){if(u.has(z[T])){S=!0;break}b.add(z[T])}let p=-1;for(let T=1;T<z.length;T++)if(u.has(z[T])){p=T;break}if(p>0)for(let T=0;T<p;T++)P.add(z[T])}let D=S?null:[...b].filter(L=>P.has(L)&&L!==o&&!u.has(L));return Ru.set(_,D),D}function Iu(o,u,f,_){for(let S of _||ii(o)){if(S.cancel||S.gone||!S.tr||S.est<u-.01)continue;let b=S.tr.pat.stops,P=b.indexOf(o);if(P<0)continue;let D=-1;for(let L=P+1;L<b.length;L++)if(f.has(b[L])){D=L;break}if(!(D<0))return{c:S,fin:S.est+(S.tr.pat.t[2*D]-S.tr.pat.t[2*P+1])}}return null}function B0(o,u,f){let _=Iu(o,u+2,f,ii(o));return _?{c:_.c,fin:_.fin,m:_.c.est-u,lost:!1}:null}function Pu(o,u,f,_,S){let b=null,P=new Map,D=ii(o).filter(L=>!L.cancel&&!L.gone&&L.tr&&L.est-S.min>=_).slice(0,8);for(let L of D){let z=L.tr.pat.stops,Y=z.indexOf(o);if(!(Y<0))for(let p of f){let T=z.indexOf(p);if(T<=Y)continue;let N=L.est+(L.tr.pat.t[2*T]-L.tr.pat.t[2*Y+1]);P.has(p)||P.set(p,ii(p));let V=Iu(p,N+fp,u,P.get(p));V&&(!b||V.fin<b.finAt-.01||Math.abs(V.fin-b.finAt)<.01&&L.est>b.x.est)&&(b={T:p,x:L,finAt:V.fin})}}return b}function k0(o,u,f,_,S){let b=u.T,P=ii(b),D=u.fin,L=[];for(let p of P){if(L.length>=5)break;if(p.cancel||p.gone||!p.tr)continue;let T=p.tr.pat.stops,N=T.indexOf(b),V=-1;for(let it=N+1;it<T.length;it++)if(D.has(T[it])){V=it;break}if(V<0||f.x&&f.x.arr!=null&&p.est<f.x.arr-.01)continue;let ht=p.est+(p.tr.pat.t[2*V]-p.tr.pat.t[2*N+1]),Et=_&&_.c===p;L.push(`<li class="hr${Et?" pin":""}" style="--lc:${X[p.fam]||"#6b7385"}"><span class="hrt"><b>${st(p.est)}</b><small>${f.x&&f.x.arr!=null?p.est-f.x.arr<2?__t(296):Math.floor(p.est-f.x.arr)+" "+__t(297):""}</small></span><span class="hrd">${Mi(p.fam+" \xB7 "+p.dest,p.fam)}<small class="hro">${__t(298)} ${st(ht)}${p.num?" \xB7 "+__t(299)+g(p.num):""}</small></span><span class="hrm">${p.dl>=1?`<em class="dl ${Ri(p.dl)}">+${Math.round(p.dl)}</em>`:""}${p.plat?`${__t(228)}${g(p.plat)}</i>`:""}</span></li>`)}let z=(()=>{let p=[];for(let T of u.cands){let N=Pu(ri(o),D,[T],0,S);N&&p.push([T,N.finAt])}return p.sort((T,N)=>T[1]-N[1]),p.filter(([T,N])=>N<=p[0][1]+30||u.fixed&&T===b).slice(0,4)})(),Y=z.length>1||u.fixed?`<div class="hxst"><span>${__t(300)}:</span><button type="button" data-hxf="${o.key}:" class="${u.fixed?"":"on"}">${__t(301)}</button>${z.map(([p])=>`<button type="button" data-hxf="${o.key}:${g(E[p].id)}" class="${u.fixed&&p===b?"on":""}">${g(E[p].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(300)} ${Mi(E[b].n,_?_.c.fam:"")} \u2192 ${g(u.finName)}</div><ol class="hxl">${L.join("")||`<li class="hr"><span class="hrd">${__t(302)}</span></li>`}</ol>${Y}</div>`}let mp=new Set;function z0(o,u,f){mp.has(o)||(mp.add(o),Ep(u,f,o))}function $0(o,u,f){let _=ri(o);if(o===Dt){if(Zt.tid)return"";if(_==null)return`${__t(303)}${Dt.err?g(Dt.err)+__t(304):__t(305)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Qe,Xe].find(Nt=>Nt.st.includes(Dt.st[0])&&Dt.dist[Dt.st[0]]<1.5)||Date.now()-Dt.fix>10*6e4)return"";o.walk=lp(Dt.dist[o.st[o.i]]||0)}if(_==null){let rt=Dt.st.length?Yt.get(Dt.st[0]):null,Nt=o===Xe?Qe:Xe,ie=rt!=null&&!Nt.st.includes(Dt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${ie?`${__t(306)}${g(E[rt].n)}</b>`:__t(307)}</small></span>${ie?`<button type="button" class="hpick" data-hnear="${o.key}${__t(308)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${ie?__t(309):__t(310)}</button></div></div>`}ip(_,()=>Le(!0));let S=o===Dt?null:o===Qe?Xe:Qe,b=S?ri(S):null,P=b!=null&&b!==_?b:N0,D=b!=null&&b!==_?S===Xe?__t(311):"casa":"Barcelona",L=E[_].fams,z=new Set([...L].filter(rt=>yt.has(rt))),Y=z.size<L.size,p=!1;z.size||(z=new Set(L),Y=!1,p=!0);let T=Dt.w?Math.hypot(E[_].w[0]-Dt.w[0],E[_].w[1]-Dt.w[1])*Dt.k:null,N=T!=null&&Date.now()-Dt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,bi(o));let V=o!==Dt&&!!o.platAt,ht=o===Dt||N&&T>3&&!o.goAt&&!V,Et=V||o!==Dt&&N&&T<.08&&Dt.acc<=40&&!(o===Qe&&Dt.homeW&&Math.hypot(Dt.homeW[0]-Dt.w[0],Dt.homeW[1]-Dt.w[1])*Dt.k<.05),it=o.goAt?(Date.now()-o.goAt)/6e4:null;it!=null&&(it>60||Et)&&(o.goAt=0,bi(o));let ft=!Et&&o!==Dt&&!!o.goAt,j=ft?N&&T<=3?lp(T):Math.max(0,o.walk-it):0,ce=ii(_),xe=ce.filter(rt=>!X[rt.fam]||yt.has(rt.fam)||p),Wt=ht||Et?0:ft?j:o.walk,Ve=$.alerts.filter(rt=>[...rt.fams].some(Nt=>z.has(Nt))||rt.stops&&rt.stops.has(_)),Ee=Ve.some(rt=>O0.test(rt.es||rt.txt)),fe={to:[],out:[],otros:[],all:xe},pn=D!=="Barcelona"?new Set(S.st.map(rt=>Yt.get(rt)).filter(rt=>rt!=null)):null,De=null;if(pn&&o!==Dt){let rt=pp(_,pn);if(rt&&rt.length){let Nt=o.xfer!=null?Yt.get(o.xfer):null,ie=Nt!=null&&rt.includes(Nt)?[Nt]:rt,pe=Pu(_,pn,ie,Wt,u);pe&&(De=Object.assign(pe,{fin:pn,finName:E[P].n,cands:rt,fixed:Nt!=null&&rt.includes(Nt)}),ip(pe.T,()=>Le(!0)),P=pe.T,pn=new Set([pe.T]))}}xe.forEach(rt=>fe[cp(_,rt,P,pn)].push(rt));let di="";if(pn&&!fe.to.length&&xe.length<ce.length){let rt=ce.filter(Nt=>!xe.includes(Nt)&&cp(_,Nt,P,pn)==="to");rt.length&&(fe.to=rt,di=[...new Set(rt.map(Nt=>Nt.fam))].sort(F).join(", "))}let Vl=rt=>{if(rt==="all")return __t(312);let Nt=pe=>(pe.find(In=>In.fam)||{}).fam;if(rt==="to")return __t(313)+Mi(D==="Barcelona"?"Barcelona":E[P].n,Nt(fe.to)||[...z][0])+(()=>{let pe=Y&&!di?[...z].filter(In=>fe.to.some(gs=>gs.fam===In)).sort(F):[];return pe.length?`<span class="hwf" title="${__t(314)}">${pe.map(Cn).join("")}</span>`:""})();let ie=[];for(let pe of fe[rt])ie.some(In=>In[0]===pe.dest)||ie.push([pe.dest,pe.fam]);return ie.length?__t(313)+ie.slice(0,2).map(([pe,In])=>Mi(pe,In)).join(" "):__t(315)},fr=On.get(o.key);fr&&!ce.some(rt=>String(rt.num)===fr&&!rt.gone)&&(si.num=fr,si.until=Date.now()+90*6e4,Ds(o.key,null));let Wr=rt=>{let Nt=fr&&fe[rt].find(hn=>String(hn.num)===fr&&!hn.gone);if(Nt&&Nt.cancel)return{cls:"v-miss",pin:1,x:Nt,big:__t(316),small:`${st(Nt.est)} \xB7 ${Nt.fam}${__t(317)}${Nt.dest}${Nt.num?" \xB7 "+__t(299)+Nt.num:""}`,warn:""};let ie=Nt||fe[rt].find(hn=>!hn.cancel&&!hn.gone&&hn.est-u.min>=Wt);if(!ie){let hn=fe[rt].find(pr=>!pr.cancel);return hn&&!ht?{cls:"v-miss",big:__t(318),small:`${__t(319)}${st(hn.est)}${__t(320)}${lr(hn.est-u.min)}${__t(321)}`}:{cls:"v-no",big:__t(322),small:__t(323)}}let pe=ie.est-u.min-Wt,In=ht||Et?"v-info":ft?pe<1.5?"v-warn":"v-ok":pe<1.5?"v-bad":pe<5?"v-warn":"v-ok",gs=ie.ghost?fe[rt].find(hn=>!hn.cancel&&!hn.ghost&&hn.live&&hn.est>ie.est):null;if(Nt&&pe<0&&!ht&&!Et){let hn=fe[rt].find(pr=>!pr.cancel&&!pr.gone&&!pr.ghost&&pr!==ie&&pr.est-u.min>=Wt);return{cls:"v-miss",pin:1,miss:1,nxt:hn,x:ie,ghost:!!ie.ghost,big:__t(324),small:`${st(ie.est)} \xB7 ${ie.fam}${__t(317)}${ie.dest}${ie.plat?__t(140)+ie.plat:""}${ie.num?" \xB7 "+__t(299)+ie.num:""}`,warn:hn?`\u27A1\uFE0F ${__t(325)}: ${hn.est-u.min-Wt<1?__t(326):__t(327)+" "+lr(hn.est-u.min-Wt)} \xB7 ${st(hn.est)}${hn.arr!=null?" \u2192 "+st(hn.arr):""}${hn.plat?__t(140)+hn.plat:""}${hn.num?" \xB7 "+__t(299)+hn.num:""}`:""}}return{pin:Nt?1:0,cls:In,ghost:!!ie.ghost,big:ht||Et?pe<1?__t(328):__t(329)+lr(pe):ft?pe<1.5?__t(330):__t(331)+lr(pe)+__t(332):pe<1.5?__t(333):__t(334)+lr(pe),warn:ie.unconf?"\u26A0\uFE0F "+__t(335):Nt&&!ie.live&&ie.rodLive&&!ie.ghost?"\u{1F4E1} "+__t(336):!ie.ghost&&ie.noPos&&Nt?"\u{1F4E1} "+__t(337):!ie.ghost&&ie.late&&Nt?__t(338):ie.ghost?`\u26A0\uFE0F ${__t(339)}${gs?`${__t(340)}${st(gs.est)}`:""}`:Ee?__t(341):"",small:`${ie.bus?__t(342):""}${st(ie.est)} \xB7 ${ie.fam}${__t(317)}${ie.dest}${ie.plat?__t(140)+ie.plat:""}${ie.dl>=1?` \xB7 +${Math.round(ie.dl)} min`:""}${ie.arr!=null?`${__t(343)}${st(ie.arr)}`:""}${ie.num?" \xB7 "+__t(299)+ie.num:""}`,x:ie}},r_=pn||new Set([P]),a_=rt=>{let Nt=rt.tr;if(!Nt)return null;let ie=Nt.pat.stops,pe=ie.indexOf(_);if(pe<0)return null;let In=-1;for(let gs=pe+1;gs<ie.length;gs++)if(r_.has(ie[gs])){In=gs;break}return In<0?null:rt.est+(Nt.pat.t[2*In]-Nt.pat.t[2*pe+1])};fe.to.forEach(rt=>{rt.arr=a_(rt)});let Hl=fe.out.length?"out":"otros",tn=Wr("to"),ao=Wr(Hl);if(Et||o===Dt&&Dt.acc<=40&&(Dt.dist[o.st[o.i]]||9)<.08){for(let rt of[tn.x,ao.x].concat(o===Dt?[Wr("all").x]:[]))if(rt&&On.has(o.key)&&String(On.get(o.key))===String(rt.num)&&!rt.cancel&&rt.est-u.min<=2&&rt.est-u.min>-.5){let Nt="w"+rt.num+"|"+Math.round(rt.sm);wp.has(Nt)||(wp.add(Nt),Cl(`${__t(344)}${rt.fam}${__t(317)}${rt.dest}`,`${Math.round(rt.est-u.min)<=1?__t(345):__t(346)+Math.round(rt.est-u.min)+" min"}${__t(317)}${E[_].n}${rt.plat?__t(140)+rt.plat:""}`))}}let Fp=Ae()&&u.live,Op=z.size===1,o_=rt=>{let Nt=rt.est-u.min;return ht?rt.cancel?"cx":Nt<0?"u-miss":"u-info":rt.cancel?"cx":Nt<Wt?"u-miss":Nt<Wt+1.5?"u-now":Nt<Wt+5?"u-soon":"u-ok"},l_=rt=>{if(rt.gone)return`<li class="hr u-gone${rt.live?" on":""}${Ga(rt)?" sel":""} go" data-dk="${f.push(rt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${st(rt.est)}${__t(347)}${os(Math.max(1,Math.round(u.min-rt.est))+" min")}</small></span><span class="hrd">${Mi((Op?"":rt.fam+" \xB7 ")+rt.dest,rt.fam)}${__t(348)}${g(rt.num)}</small></span><span class="hrm">${rt.dl>=1?`<em class="dl ${Ri(rt.dl)}">+${Math.round(rt.dl)}</em>`:""}</span></li>`;let Nt=!rt.cancel&&rt.est-u.min<Wt,ie=Eu(rt.num,"");return`<li class="hr ${o_(rt)}${rt.live?" on":""}${rt.ghost?" gh":""}${Ga(rt)?" sel":""}${fr&&String(rt.num)===fr?" pin":""}${Ii.some(pe=>{let In=bu(pe,t.days.indexOf(u.ymd));return In&&String(In.num)===String(rt.num)})?" fav":""} go" style="--lc:${X[rt.fam]||"#6b7385"}" data-dk="${f.push(rt)-1}" title="${rt.cancel?__t(316):Nt?__t(324):__t(349)}"><span class="hrt"><b>${rt.cancel?"\u2715":Nt?st(rt.est):lr(rt.est-u.min)}</b><small>${rt.cancel?__t(350):rt.late?__t(351):Nt?__t(352):rt.ghost?__t(353):st(rt.est)}</small></span><span class="hrd">${rt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Mi((Op?"":rt.fam+" \xB7 ")+rt.dest,rt.fam)}${ie.length?`<i class="cr" title="${g(ie.map(pe=>Pl(pe.kind)).join(" \xB7 "))}">${ie.slice(0,2).map(pe=>Il[pe.kind]).join("")}</i>`:""}${rt.arr!=null?`${__t(354)}${st(rt.arr)}${rt.num?" \xB7 "+__t(299)+g(rt.num):""}${(()=>{let pe=rt.num&&kr(rt.num);return pe&&pe.n>=3&&pe.late/pe.n>=.5?`${__t(355)}${pe.late}/${pe.n})</b>`:""})()}</small>`:""}${rt.obs?`<small class="hro">${g(rt.obs)}</small>`:""}${rt.unconf?`<small class="hro unc">${__t(356)}</small>`:""}</span><span class="hrm">${!rt.cancel&&rt.dl>=1?`<em class="dl ${Ri(rt.dl)}">+${Math.round(rt.dl)}</em>`:""}${rt.plat?`${__t(228)}${g(rt.plat)}</i>`:""}</span></li>`},oo=(rt,Nt,ie)=>`<div class="hcol"><div class="hdir">${Vl(rt)}${ie?`<button type="button" class="hhide" data-hhide="${o.key}:${ie}" title="${__t(357)}">\u2715</button>`:""}</div><div class="hv ${Nt.cls}${Nt.ghost||Nt.pin&&Nt.x&&Nt.x.noPos&&!Ja([Nt.x.fam]).length?" gh":""}${Nt.x?" go":""}"${Nt.miss&&Nt.nxt&&Nt.nxt.num?` data-pinnext="${o.key}:${g(Nt.nxt.num)}" title="${__t(358)}"`:Nt.x?` data-dk="${f.push(Nt.x)-1}"`:""}><b>${Nt.big}</b>${Nt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(359)}">\u{1F4CC} ${__t(360)} \u2715</button>`:""}<small>${g(Nt.small)}</small>${Nt.pin&&Nt.x&&Nt.x.num?(pe=>pe?`<span class="hwhere">\u{1F4CD} ${g(pe)}</span>`:"")(Fu(Nt.x.num)):""}${Nt.warn?`<span class="hvw">${g(Nt.warn)}</span>`:""}</div><ol>${fe[rt].slice(0,(o.more?rt==="all"||o.hide?20:10:rt==="all"?7:o.hide?8:4)+fe[rt].filter(pe=>pe.gone).length).map(l_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Dt){let rt=Wr("all");var c_=rt.x?`<span class="nw">${rt.big}</span> \xB7 <span class="nw"><b>${st(rt.x.est)}</b> ${g(rt.x.fam)}${__t(361)}${g(rt.x.dest)}${rt.x.plat?'<span class="nw">'+__t(140)+g(rt.x.plat)+"</span>":""}`:rt.big}let Ze=De&&tn.x&&tn.x.arr!=null?B0(De.T,tn.x.arr,De.fin):null;if(Ze){let rt=o._xc;rt&&rt.leg===String(tn.x.num)&&rt.conn!==String(Ze.c.num)&&rt.est<Ze.c.est&&rt.live?(Ze.lost=!0,Ze.missed=rt.est):(!rt||rt.leg!==String(tn.x.num)||!rt.live||rt.conn===String(Ze.c.num))&&(o._xc={leg:String(tn.x.num),conn:String(Ze.c.num),est:Ze.c.est,live:!!($.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}Ze&&(Ul.set(E[De.T].id,{fam:Ze.c.fam,est:Ze.c.est,plat:Ze.c.plat,lost:Ze.lost}),Ze.lost&&On.get(o.key)===String(tn.x.num)&&z0("xf"+tn.x.num+"|"+Ze.c.num,`\u21C4 ${__t(362)} ${E[De.T].n}`,`${__t(363)}: ${Ze.c.fam} ${st(Ze.c.est)} \u2192 ${st(Ze.fin)}${Ze.c.plat?" \xB7 v\xEDa "+Ze.c.plat:""}`));let h_=Ze?`<br><span class="nw hxf ${Ze.lost?"xbad":Ze.m<4?"xwarn":"xok"}">\u21C4 ${Ze.lost?`${__t(364)} ${st(Ze.missed)} \xB7 ${__t(142)} `:`${g(E[De.T].n)} \xB7 `}${Cn(Ze.c.fam)} <b>${st(Ze.c.est)}</b> \u2192 <b>${st(Ze.fin)}</b>${Ze.lost?"":` \xB7 ${Math.floor(Ze.m)} ${__t(365)}`}</span>`:De?`<br><span class="nw hxf xbad">\u21C4 ${__t(366)} ${g(E[De.T].n)}</span>`:"",u_=o===Dt?c_:De&&tn.x?`<span class="nw">${tn.big}${tn.x.plat?__t(140)+g(tn.x.plat):""}</span> \xB7 <span class="nw"><b>${st(tn.x.est)}</b>${tn.x.arr!=null?` \u2192 ${g(E[De.T].n)} <b>${st(tn.x.arr)}</b>`:""}</span>${h_}`:tn.x?`<span class="nw">${tn.big}${tn.x.plat?__t(140)+g(tn.x.plat):""}</span> \xB7 <span class="nw"><b>${st(tn.x.est)}</b>${tn.x.arr!=null?`${__t(368)}${st(tn.x.arr)}</b>`:""}${__t(367)}${g(D)}</span>`:__t(369)+g(D),He=o===Dt?(rt=>rt.pin?rt:null)(Wr("all")):tn.pin?tn:ao.pin?ao:null;He&&He.x&&On.has(o.key)&&Tp(He,E[_].n);let d_=He?o===Dt?"all":He===tn?"to":Hl:"",Xr=!!(He&&(He.ghost||He.x.noPos&&!Ja([He.x.fam]).length||He.x.cancel)),Xu=!!(He&&He.miss),qr=Xr?fe[d_].find(rt=>!rt.cancel&&!rt.ghost&&!rt.gone&&rt.est>He.x.est-.01&&rt!==He.x&&rt.est-u.min>=(ht||Et?0:Wt)):null,f_=Xu?`<span class="nw">${__t(370)} <b>${st(He.x.est)}</b></span>${He.nxt?`<br><span class="nw hnx">${__t(363)} <b>${st(He.nxt.est)}</b>${He.nxt.arr!=null?` \u2192 <b>${st(He.nxt.arr)}</b>`:""}</span>`:""}`:"",p_=Xr?`<span class="nw">\u26A0\uFE0F ${He.x.cancel?__t(316):He.ghost?__t(371):__t(372)}</span>${He.x.cancel?"":` \xB7 <span class="nw"><b>${st(He.x.est)}</b>${He.x.arr!=null?` \u2192 <b>${st(He.x.arr)}</b>`:""}</span>`}${qr?` \xB7 <span class="nw">${__t(142)} <b>${st(qr.est)}</b>${qr.arr!=null?` \u2192 <b>${st(qr.arr)}</b>`:""}${qr.plat?__t(140)+g(qr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${He?" pinned":""}${Xr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${g(E[_].n)}${He&&He.x.num?`<i class="hpn">\u{1F4CC} ${g(He.x.num)}</i>`:""}</b><small class="c${Xu||Xr&&He.x.cancel?"bad":Xr?"warn":Ee?"bad":tn.cls.slice(2)}">${Xr?p_:Xu?f_:u_}</small>${He&&He.x&&He.x.num?(rt=>rt?`<small class="nofit hwh2">\u{1F4CD} ${g(rt)}</small>`:"")(Fu(He.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((rt,Nt)=>{let ie=Yt.get(rt);return ie==null?"":`<button type="button" data-hs="${o.key}:${Nt}" class="${Nt===o.i?"on":""}">${g(E[ie].n)}</button>`}).join("")}</div>`:""}
        ${o===Dt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let rt=Dt.dist[o.st[o.i]]||0;return rt<1?Math.round(rt*100)*10+" m":rt.toFixed(1).replace(".",",")+" km"})()}${__t(374)}${o.walk}${__t(375)}`:""}
        ${V?`<div class="hwalk away">${__t(377)}<a data-hplat="${o.key}${__t(376)}`:Et?`${__t(378)}${o.key}${__t(379)}`:ft?`${__t(380)}${Math.round(j)} min</b>${N&&T<=3?__t(381):""} \xB7 <a data-hgo="${o.key}${__t(376)}`:""}${ht&&o!==Dt?`${__t(382)}${T<10?T.toFixed(1).replace(".",","):Math.round(T)}${__t(383)}`:""}<div class="hwalk"${ht||Et||ft?" hidden":""}><button type="button" class="hgo" data-hgo="${o.key}:1">\u{1F6B6} ${__t(384)}</button><button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(385)}</button><span class="hstep" title="${__t(386)}">${__t(387)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(388)}</span></div>
        ${(()=>{let rt=Ii.filter(Nt=>o.st.includes(Nt.sid));return rt.length?`<div class="hfav">${rt.map(Nt=>{let ie=bu(Nt,t.days.indexOf(u.ymd)),pe=ie&&xe.find(In=>String(In.num)===String(ie.num));return`\u2B50 <b>${Nt.t}</b> ${g(Nt.fam)} ${pe?pe.cancel?__t(389):pe.gone?__t(225):pe.dl>=1?`<em class="dl ${Ri(pe.dl)}">+${Math.round(pe.dl)}${__t(390)}${st(pe.est)}`:__t(391):__t(392)}`}).join("<br>")}</div>`:""})()}
        ${Y&&di?`${__t(393)}${[...z].sort(F).map(Cn).join(" ")}${__t(394)}${D}${__t(395)}${di}${__t(396)}`:p?`${__t(397)}${[...yt].sort(F).slice(0,3).map(Cn).join(" ")}${__t(398)}`:""}
        ${Ve.length?`<div class="hal ${Ee?"bad":""}${ku.v?" open":""}" data-halx>\u26A0\uFE0F ${Xa(Ve[0])} ${g(Ve[0].txt)} <small>${qa(Ve[0])}</small>${Ve.length>1?` <a data-hal>+${Ve.length-1}${__t(399)}`:""}</div>`:`${__t(400)}${[...z].sort(F).join(", ")}</div>`}
        ${(()=>{let rt=o.st.flatMap(Nt=>Eu("",Nt));return rt.length?`<div class="hcr">${rt.slice(0,3).map(Nt=>`${Il[Nt.kind]} <b>${g(Pl(Nt.kind))}</b> <small>${Nt.up>1?Nt.up+__t(269):""}${Qf(Nt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Dt?`<div class="hcols one">${oo("all",Wr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${oo("to",tn)}</div><a class="hshow" data-hshow="${o.key}${__t(401)}`:o.hide==="to"?`<div class="hcols one">${oo(Hl,ao)}</div><a class="hshow" data-hshow="${o.key}${__t(401)}`:`<div class="hcols">${oo("to",tn,"to")}${oo(Hl,ao,"out")}</div>`}
        ${De?k0(o,De,tn,Ze,u):""}
        ${xe.length>(o===Dt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(402):__t(403)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Fp?lt.get(E[_].id)?.d?__t(404):__t(405):__t(406)} \xB7 \u25CF = ${__t(407)}">${Fp?lt.get(E[_].id)?.d?__t(408):__t(409):__t(224)}</span><a data-hmap="${_}${__t(373)}${o===Dt?__t(410):`<a data-hset="${o.key}${__t(411)}`}${o===Xe?`${__t(412)}`:""}</div>
      </div>`:"")+"</div>"}let Li={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},gp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,_p=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,cr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Fl=()=>{let o=new Set;return[...Qe.st,...Xe.st].forEach(u=>{let f=Yt.get(u);f!=null&&E[f].fams.forEach(_=>o.add(_))}),[...o].sort(F)},eo=()=>({stations:[...Qe.st,...Xe.st],lines:Fl().filter(o=>!cr.has(o))}),V0=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),u=>u.charCodeAt(0));async function xp(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function vp(o){let f=await(await fetch($.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...eo()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Lu(){let o=ri(Qe),u=ri(Xe);if(o==null||u==null)return o!=null?Qe:u!=null?Xe:null;if(Dt.w&&Date.now()-Dt.fix<3*36e5){let f=_=>Math.hypot(E[_].w[0]-Dt.w[0],E[_].w[1]-Dt.w[1]);return f(o)<=f(u)?Qe:Xe}return new Date().getHours()<13?Qe:Xe}function yp(o){let u=Lu(),f=u===Qe?Xe:Qe,_=u&&ri(u),S=f&&ri(f);if(_==null||S==null)return!0;let b=(o.es||"")+" "+(o.txt||""),P=t.days.indexOf(se().ymd),D=se(),L=[...new Set([...b.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(Y=>Y[1]))];if(L.length)return L.some(Y=>{let p=Za(Y);if(!p)return!1;let T=p.pat.stops,N=T.indexOf(_),V=T.indexOf(S);if(N<0||V<0||N>V)return!1;let ht=p.t0+p.pat.t[2*N+1];return ht>D.min-60&&ht<D.min+150});let z=b.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(z){let Y=z[1].toLowerCase(),p=E.findIndex(T=>T.n&&Y.startsWith(T.n.toLowerCase()));if(p>=0){let T=(et[P]||[]).find(N=>{let V=N.pat.stops;return V[V.length-1]===p&&V.includes(_)&&V.includes(S)});if(T){let N=T.pat.stops;return N.indexOf(_)<N.indexOf(S)}}}return!0}let Vn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function H0(){let{lines:o,stations:u}=eo(),f=new Set(o),_=new Set(u.map(P=>Yt.get(P))),S=$.alerts.filter(P=>([...P.fams].some(D=>f.has(D))||[...P.stops||[]].some(D=>_.has(D)))&&yp(P));if(!Vn.seen){try{Vn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Vn.seen=new Set}if(!Vn.seen.size){S.forEach(P=>Vn.seen.add(P.id+"|"+P.txt.length)),Sp();return}}let b=S.filter(P=>!Vn.seen.has(P.id+"|"+P.txt.length));if(b.length&&(b.forEach(P=>Vn.seen.add(P.id+"|"+P.txt.length)),Sp(),!(!Vn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of b.slice(0,3)){let D=(P.src==="Adif"?__t(278):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(F).slice(0,4).join(" "):""),L={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(z=>z?z.showNotification(D,L):new Notification(D,L)).catch(()=>{try{new Notification(D,L)}catch{}})}}function Sp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Vn.seen].slice(-400)))}catch{}}async function G0(){if(Vn.on)Vn.on=!1,cn(__t(413));else{if(!("Notification"in window)){cn(gp&&!_p()?__t(414):__t(415));return}if(await Notification.requestPermission()!=="granted"){cn(__t(416));return}Vn.on=!0,cn(__t(417)+eo().lines.join(", ")+__t(418))}try{localStorage.setItem("rod_ln",Vn.on?"1":"")}catch{}Le(!0)}async function W0(){if(!$.repOk)return G0();if(!Li.busy){Li.busy=!0;try{let o=await xp();if(!o){cn(gp&&!_p()?__t(419):__t(420));return}if(await navigator.serviceWorker.ready,Li.on){let u=await o.pushManager.getSubscription();u&&(fetch($.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:u.endpoint})}).catch(()=>{}),await u.unsubscribe().catch(()=>{})),Li.on=!1,cn(__t(413))}else{if(!$.url){cn(__t(421));return}if(await Notification.requestPermission()!=="granted"){cn(__t(416));return}let f=(await Rt($.url.replace(/\/+$/,""),"/push/key")).key,_=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:V0(f)});await vp(_),Li.on=!0,cn(__t(422)+eo().lines.join(", "))}try{localStorage.setItem("rod_push",Li.on?"1":"")}catch{}}catch(o){cn(__t(423)+(o.message||o))}finally{Li.busy=!1,Le(!0)}}}async function Mp(){if(Li.on)try{let o=await xp(),u=o&&await o.pushManager.getSubscription();u&&await vp(u)}catch{}}let Du=!1,bp="";function Nu(){let o=xt?"t"+(xt.tid||xt.vtid):Qt>=0?"s"+Qt:Lt?"a":nt?"n":"";o!==bp&&(Du=!1,bp=o);let u=innerWidth<=640&&!!o&&!Du&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==u&&(f.classList.toggle("compact",u),requestAnimationFrame(()=>{if(d.style.display!=="none"){let _=f.getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-_-16)+"px"}}))}let wp=new Set,Uu=(()=>{let o=vt(new Date).ymd;try{let u=JSON.parse(localStorage.getItem("rod_pn")||"{}");return u.d===o?u:{d:o}}catch{return{d:o}}})();function Ep(o,u,f){if(!(!(Vn.on||Li.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){cn(o+" \xB7 "+u);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(_=>_?_.showNotification(o,{body:u,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:u})).catch(()=>{try{new Notification(o,{body:u})}catch{}})}}function Tp(o,u){let f=o.x,_=se();if(!_.live||f.gone||f.est<_.min-1)return;let S=f.num+"|"+Math.round(f.sm),b=Uu[S]||{},P=`${__t(424)} ${st(f.sm)}`,D=`${f.fam} \u2192 ${f.dest}`,L="",z="";f.cancel?b.c||(b.c=1,L=`\u26A0\uFE0F ${P} ${__t(148)}`,z=`${D}. ${__t(425)}`):o.ghost&&!b.g?(b.g=1,L=`\u26A0\uFE0F ${P} ${__t(426)}`,z=`${D}: ${__t(427)}`):f.dl>=5&&f.dl>=(b.dl||0)+5?(b.dl=Math.round(f.dl),L=`\u23F3 ${P} ${__t(428)} +${b.dl} min`,z=`${D}: ${__t(429)} ${u} ${__t(430)} ${st(f.est)}.`):f.plat&&b.p&&b.p!==String(f.plat)&&(L=`${__t(431)}: ${P}`,z=`${D}: ${__t(432)} ${f.plat} ${__t(433)} ${b.p}).`),f.plat&&(b.p=String(f.plat)),Uu[S]=b;try{localStorage.setItem("rod_pn",JSON.stringify(Uu))}catch{}L&&Ep(L,z,"pin-"+f.num)}let $r={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let u=o.target.closest&&o.target.closest("[data-nowx]");if(!u||o.target.closest("a"))return;let f=u.dataset.nowx?u.dataset.nowx.split("|"):[];if(f.length){if(u.classList.contains("col"))$r.open=!0;else{$r.open=!1,f.forEach(_=>$r.seen.add(_));try{localStorage.setItem("rod_seen",JSON.stringify([...$r.seen].slice(-200)))}catch{}}Le(!0)}});function X0(o){let u=o.lines;if(!u.length&&Dt.st&&Dt.st.length){let p=new Set;Dt.st.forEach(T=>{let N=Yt.get(T);N!=null&&E[N].fams.forEach(V=>p.add(V))}),u=[...p].sort(F)}let f=new Set(u),_=$.alerts.filter(p=>!f.size||[...p.fams].some(T=>f.has(T))),S=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,b=_.reduce((p,T)=>Math.max(p,to(T)),0),P=b===3?"\u26D4 ":b===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",D=`<div class="hnowh"><span class="hnowl"><b>${_.length?P+_.length+(_.length===1?__t(280):__t(281)):__t(434)}</b>${u.length?u.map(Cn).join(""):""}</span>${S}</div>`,L=_.filter(p=>!$r.seen.has(p.id)),z=_.length&&($r.open||L.length>0),Y=_.reduce((p,T)=>Math.max(p,to(T)),0);return`<div class="hnow${Y===3?" bad":Y===2?" warn":Y===1?" info":""}${_.length&&!z?" col":""}" data-nowx="${g(_.map(p=>p.id).join("|"))}">${D}${Cp(o,!0)}${z?_.slice().sort((p,T)=>to(T)-to(p)).map(p=>`<p class="sv${to(p)}">${Xa(p)} ${g(p.txt)} <small>${qa(p)}</small></p>`).join("")+`<small class="hnowt">${__t(435)}</small>`:""}</div>`}let On=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(u=>u[2]===o).map(u=>[u[0],u[1]])}catch{return[]}})());function Ol(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],u=(_,S)=>{_.style.fontSize=S===1?"":(_._f0*S).toFixed(1)+"px",_.querySelectorAll("b").forEach(b=>b.style.fontSize=S===1?"":(_._b0*S).toFixed(1)+"px")},f=1;for(let _ of o){if(_.style.whiteSpace="",u(_,1),!_.clientWidth)continue;_._f0=parseFloat(getComputedStyle(_).fontSize);let S=_.querySelector("b");for(_._b0=S?parseFloat(getComputedStyle(S).fontSize):0;_.scrollWidth>_.clientWidth+1&&f>.86;)f-=.02,u(_,f)}if(f<1)for(let _ of o)_._f0&&u(_,f);for(let _ of o)_.scrollWidth>_.clientWidth+1&&(_.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Ol()}catch{}});let q0=(o,u)=>{let f=o==="work"?Xe:o==="near"?Dt:Qe,_=f&&ri(f);return _==null?null:ii(_).find(S=>String(S.num)===String(u))||null};function Ds(o,u){u?On.set(o,u):On.delete(o);try{let f=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...On].map(([_,S])=>[_,S,f])))}catch{}}let Ap=o=>{let u=o&&o.ts?Date.now()/1e3-o.ts:$.okVP?(Date.now()-$.okVP)/1e3:-1;return u>=0?" \xB7 "+os(au(Math.round(u))):""};function Fu(o){let u=It.find(b=>b.tr&&String(b.tr.num)===String(o));if(!u){let b=Za(o),P=se(),D=t.days.indexOf(P.ymd);if(!b)return"";let L=b.day===D-1?1440:0,z=b.t0+b.pat.t[1]-L;return z>P.min?__t(436)+E[b.pat.stops[0]].n+" ("+st(z)+")":""}let f=u.tr,_=b=>E[f.pat.stops[b]].n;if(u.real){let b=u.v;return b.pre?__t(437):b.atStop>=0&&b.before?__t(438)+_(b.atStop):b.atStop>=0&&(b.st==="STOPPED_AT"||u.stop==="st")?de()?__t(439)+_(b.atStop):__t(440)+_(b.atStop)+Ap(b):!de()&&b.next>0?__t(441)+_(b.next-1)+__t(442)+_(b.next)+Ap(b):b.atStop>=0&&b.next>b.atStop?__t(443)+_(b.atStop)+__t(444)+_(b.next):b.atStop>=0?__t(445)+_(b.atStop):u.stop==="via"&&b.next>0?"\u23F8 "+__t(446)+_(b.next-1)+__t(442)+_(b.next):b.next>0?__t(185)+_(b.next-1)+__t(442)+_(b.next):b.next===0?__t(313)+_(0):""}let S=u.p&&u.p.next;return S>0?__t(447)+_(S-1)+__t(442)+_(S):""}let no={k:"",v:null};function Y0(o){let u=se(),f=t.days.indexOf(u.ymd);if(f<0||!o.length)return null;let _=Lu(),S=(_&&ri(_))??ri(Qe)??ri(Xe),b=u.ymd+o.join()+S;if(no.k===b)return no.v;no.k=b;let P=new Set(o),D=S!=null?p=>et[p].filter(T=>{let N=T.pat.stops.indexOf(S);return N>=0&&N<T.pat.stops.length-1}).length:p=>et[p].filter(T=>P.has(T.fam)).length,L=p=>{let T=new Date(+p.slice(0,4),+p.slice(4,6)-1,+p.slice(6)).getDay();return T===0?0:T===6?6:1},z=D(f),Y=Math.max(0,...t.days.map((p,T)=>T!==f&&L(p)===L(u.ymd)?D(T):0));return no.v=Y>=20&&z<Y*.8?{n:z,ref:Y,pct:Math.round(z/Y*100),st:S!=null?E[S].n:""}:null,no.v}function Cp(o,u){let f=o.lines||[],_=Y0(f);if(!_)return"";let S=$.alerts.some(b=>[...b.fams].some(P=>f.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((b.es||"")+" "+b.txt));return u?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${S?__t(448):__t(449)}</b>: ${_.st?`${__t(450)} ${g(_.st)} ${_.n} ${__t(451)} ${_.ref} ${__t(452)}`:`${__t(453)} ${_.n} ${__t(451)} ${_.ref} ${__t(452)}`} (${_.pct} %). ${S?__t(454):__t(455)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${S?__t(456):__t(457)}</b> \xB7 ${__t(458)}: ${_.st?`${__t(459)} ${g(_.st)} ${__t(460)} ${_.n} ${__t(198)} ${_.ref} ${__t(71)}`:`${_.n} ${__t(198)} ${_.ref} ${__t(461)} ${f.join(", ")}`} (${_.pct} % ${__t(462)}).</div>`}function Z0(o){let u=Ja(o.lines||[]);if(!u.length)return"";let f=[Qe,Xe].some(_=>{let S=ri(_),b=S!=null&&lt.get(E[S].id);return b&&b.d&&Array.isArray(b.d.trains)&&!b.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(463)} ${u.join(", ")}</b> ${__t(464)}${f?" \xB7 "+__t(465):""}: ${__t(466)}</div>`}function J0(o){if(!Dt.w)return[];let u=Dt.k||1;return It.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])*u<3).sort((f,_)=>Math.hypot(f.p.w[0]-Dt.w[0],f.p.w[1]-Dt.w[1])-Math.hypot(_.p.w[0]-Dt.w[0],_.p.w[1]-Dt.w[1])).slice(0,2).map(f=>f.tr)}function j0(o){if(!Zt.tid)return"";let u=It.find(V=>V.tr&&String(V.tr.num)===Zt.tid)||sr(o).out.find(V=>V.tr&&String(V.tr.num)===Zt.tid);if(!u)return"";let f=u.tr,_=f.pat.stops,S=u.real?u.v.next:u.p.next;if(S==null||S<0)return"";let b=dt(f),P=typeof b=="number"?Math.max(0,b/60):0,D=t.days.indexOf(o.ymd),L=f.day===D-1?1440:0,z=Ce&&Ce.num===Zt.tid?_.indexOf(Yt.get(Ce.sid)):-1;z<S&&(z=_.length-1);let Y=Ka(f,u.real?u.v:null,z,f.t0+f.pat.t[2*z]+P-L),p=Y-o.min,T=u.real&&u.v.atStop>=0?u.v.atStop:-1,N=Fu(f.num)||__t(313)+E[_[S]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Cn(f.fam)} ${__t(299)}${g(f.num)}</b><small class="nofit cok">${g(N)} \xB7 <span class="nw">${__t(467)} ${g(E[_[z]].n)}</span> <span class="nw">${p>=1?__t(104)+lr(p)+" \xB7 ":""}<b>${st(Y)}</b>${P>=1?` <em class="dl ${Ri(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(468)}" title="${__t(468)}">\u2715</button>${(V=>V.length&&!(Zt.manual&&Date.now()<Zt.manual)?`<div class="onbch">${V.map(ht=>`<button type="button" class="onbalt" data-onbpick="${g(ht.num)}">${__t(469)} ${g(ht.num)}?</button>`).join("")}</div>`:"")(J0(f))}</div>`}let Bl={until:0};function K0(o){if(o.hasAttribute("data-onbx")){si.num===Zt.tid&&(si.num=""),Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid="",Zt.manual=0,Zt.quiet=Date.now()+10*6e4,Ot=null,Le(!0);return}Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid=o.dataset.onbpick,Zt.manual=Date.now()+90*6e4,[...On].forEach(([f,_])=>{String(_)!==Zt.tid&&Ds(f,null)}),si.num=Zt.tid,si.until=Date.now()+90*6e4;let u=It.find(f=>f.tr&&String(f.tr.num)===Zt.tid);if(u){Ot=u.tr;let f=u.tr.pat.stops,_=u.real?u.v.next:u.p.next,S=[...Qe.st,...Xe.st,...Ul.keys()],b=f.findIndex((P,D)=>D>=_&&S.includes(E[P].id));b>0&&(Ce={num:Zt.tid,sid:E[f[b]].id,at:Date.now()},ps())}cn(`${__t(470)} ${Zt.tid}`),Le(!0)}function Le(o){let u=x("#home");if(!u)return;let f=performance.now();if(!o&&f-hp<4e3||!o&&Bl.until>Date.now())return;hp=f;let _=se(),S=[],b=eo(),P=p=>{let T=ri(p);return T==null||!Dt.w?1:Math.hypot(E[T].w[0]-Dt.w[0],E[T].w[1]-Dt.w[1])},D=[Dt,...[Qe,Xe].sort((p,T)=>P(p)-P(T))],L=(document.documentElement.classList.contains("tabmode")?X0(b):Cp(b))+Z0(b)+j0(_)+D.map(p=>$0(p,_,S)).join("")+(Qa.some(p=>p.open)&&b.lines.length,"");u.className=Qa.some(p=>p.open)?"open":"";let z=x("#bell");z||(z=document.createElement("button"),z.type="button",z.id="bell",z.onclick=W0,x("#inf .more").prepend(z));{let p=$.repOk?Li.on:Vn.on;z.hidden=!b.lines.length,z.className=p?"on":"",z.textContent=(p?__t(478):__t(479))+b.lines.join(", "),z.title=(p?__t(480):__t(481))+__t(67)+b.lines.join(", ")+($.repOk?"":__t(482))}if(u._h===L)return;u._h=L,u.innerHTML=L,Ol(),u._onbDel||(u._onbDel=1,u.addEventListener("pointerdown",()=>{Bl.until=Date.now()+1500},!0),u.addEventListener("pointerup",()=>{Bl.until=Date.now()+400},!0),u.addEventListener("click",p=>{let T=p.target.closest&&p.target.closest("[data-onbx],[data-onbpick]");T&&(p.stopPropagation(),Bl.until=0,K0(T))},!0));{let p=u.querySelector("[data-onbgo]");p&&(p.onclick=T=>{if(T.target.closest("[data-onbx]")){Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid="",Zt.manual=0,Ot=null,Le(!0);return}let N=T.target.closest("[data-onbpick]");if(N){Zt.no.set(Zt.tid,Date.now()+20*6e4),Zt.tid=N.dataset.onbpick,Zt.manual=Date.now()+90*6e4;let ht=It.find(Et=>Et.tr&&String(Et.tr.num)===Zt.tid);if(ht){Ot=ht.tr,xt=ht.tr;let Et=ht.tr.pat.stops,it=ht.real?ht.v.next:ht.p.next,ft=[...Qe.st,...Xe.st],j=Et.findIndex((ce,xe)=>xe>=it&&ft.includes(E[ce].id));j>0&&(Ce={num:Zt.tid,sid:E[Et[j]].id,at:Date.now()},ps()),d._h="",Ue()}Le(!0);return}let V=It.find(ht=>ht.tr&&String(ht.tr.num)===Zt.tid);V&&(nt=Lt=Q=!1,Qt=-1,xt=V.tr,d._h="",Ue())})}{let p=[...u.children].find(T=>T.classList.contains("hplace")&&!T.querySelector(".hnew"));p&&p.classList.add("lead")}let Y=p=>p==="work"?Xe:p==="near"?Dt:Qe;u.querySelectorAll("[data-hloc]").forEach(p=>p.onclick=()=>{Dt.err="",Cu(!0)}),u.querySelectorAll("[data-ht]").forEach(p=>p.onclick=()=>{if(x("#inf").classList.contains("compact")){Du=!0,Nu();return}let T=Y(p.dataset.ht);T.open=!T.open,bi(T),Le(!0),(xt||Qt>=0||Lt||nt)&&(d._h="",Ue())}),u.querySelectorAll("[data-hxf]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hxf.split(":"),ht=Y(N);ht.xfer=V||null,bi(ht),Le(!0)}),u.querySelectorAll("[data-hs]").forEach(p=>p.onclick=()=>{let[T,N]=p.dataset.hs.split(":"),V=Y(T);V.i=+N,bi(V),Le(!0)}),u.querySelectorAll("[data-hw]").forEach(p=>p.onclick=()=>{let[T,N]=p.dataset.hw.split(":"),V=Y(T);V.walk=y(V.walk+ +N,0,60),bi(V),Le(!0)}),u.querySelectorAll("[data-hmap]").forEach(p=>p.onclick=()=>{let T=+p.dataset.hmap;nt=Lt=Q=!1,xt=null,Qt=T,un(),Object.assign(s,{tx:E[T].w[0],ty:E[T].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ue(),a()}),u.querySelectorAll("[data-hset]").forEach(p=>p.onclick=()=>Rp(p.dataset.hset)),u.querySelectorAll("[data-hnear]").forEach(p=>p.onclick=()=>{let T=Yt.get(Dt.st[0]);T!=null&&Ou(T,p.dataset.hnear)}),u.querySelectorAll("[data-hmore]").forEach(p=>p.onclick=()=>{let T=Y(p.dataset.hmore);T.more=!T.more,Le(!0)}),u.querySelectorAll("[data-hhide]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hhide.split(":"),ht=Y(N);ht.hide=V,bi(ht),Le(!0)}),u.querySelectorAll("[data-hshow]").forEach(p=>p.onclick=()=>{let T=Y(p.dataset.hshow);T.hide="",bi(T),Le(!0)}),u.querySelectorAll("[data-hgo]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hgo.split(":"),ht=Y(N);ht.goAt=V==="1"?Date.now():0,ht.goAt&&(ht.platAt=0),bi(ht),Le(!0)}),u.querySelectorAll("[data-hplat]").forEach(p=>p.onclick=T=>{T.stopPropagation();let[N,V]=p.dataset.hplat.split(":"),ht=Y(N);ht.platAt=V==="1"?Date.now():0,ht.platAt&&(ht.goAt=0),bi(ht),Le(!0)}),u.querySelectorAll("[data-hnotst]").forEach(p=>p.onclick=T=>{T.stopPropagation(),Dt.homeW=Dt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Dt.w))}catch{}Le(!0)}),u.querySelectorAll("[data-hdel]").forEach(p=>p.onclick=()=>{Xe.st=[],Xe.open=!1,bi(Xe),Le(!0),Mp()}),u.querySelectorAll("[data-dk]").forEach(p=>p.onclick=()=>{let T=S[+p.dataset.dk];if(p.matches("li.hr, .hv")&&!T.gone&&T.num!=null){let N=p.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(N){let V=On.get(N)===String(T.num);Ds(N,V?null:String(T.num)),V&&si.num===String(T.num)&&(si.num=""),V?xt&&String(xt.num)===String(T.num)&&(xt=null,Ot=null,qe.sk="",d._h="",Ue()):io(T,!0),Le(!0);return}}io(T)}),u.querySelectorAll("[data-pinnext]").forEach(p=>p.onclick=T=>{if(T.target.closest("[data-unpin]"))return;let[N,V]=p.dataset.pinnext.split(":");Ds(N,V);let ht=q0(N,V);ht&&io(ht,!0),Le(!0)}),u.querySelectorAll("[data-unpin]").forEach(p=>p.onclick=T=>{T.stopPropagation(),Ds(p.dataset.unpin,null),Le(!0)}),u.querySelectorAll("[data-hal]").forEach(p=>p.onclick=()=>x("#alr").click()),ep(u)}function io(o,u){if(!o)return;let f=t.days.indexOf(se().ymd),_=It.find(P=>P.real?o.tid&&P.v.tid===o.tid||o.num&&String(P.tr?P.tr.num:P.v.num)===String(o.num):o.tr&&P.tr===o.tr||o.num&&P.tr&&String(P.tr.num)===String(o.num)),S=o.tr||_&&_.tr||(et[f]||[]).find(P=>String(P.num)===String(o.num));if(nt=Lt=Q=!1,Qt=-1,u||void 0,xt=_?_.tr||{vtid:_.v.tid}:S||null,!xt)return;u&&(qe.sk="t"+(xt.num||xt.vtid)),Ot=_&&_.tr?_.tr:null,Ot&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let b=_?_.p.w:null;b&&Object.assign(s,{tx:b[0],ty:b[1],dist:Math.min(s.dist,22)}),un(),d._h="",Ue(),jt=0,a()}let Vr=!1;function Rp(o){Vr=o||!1,v.value="",v.placeholder=o==="work"?__t(483):o==="home"?__t(484):__t(485),document.documentElement.classList.add("srch"),m.style.display="none",v.focus()}let Ip=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>Rp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Ip(),Vr&&!v.value.trim()&&(Vr=!1,v.placeholder=__t(485))},600));function Zb(){}function Ou(o,u){let f=u==="work"?Xe:Qe,_=E[o].id,S=E.filter(b=>b.fams.size&&b!==E[o]&&Math.hypot(b.w[0]-E[o].w[0],b.w[1]-E[o].w[1])<.6).map(b=>b.id);f.st=[_,...S].slice(0,3),f.i=0,f.open=!0,bi(f),Le(!0),Mp()}let kl=x("#lines");kl.innerHTML=`${__t(486)}`+H.map(o=>`<button type="button" style="--c:${X[o]}" data-f="${o}">${o}</button>`).join("");function Pp(){try{Le(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",kl.after(o),o.onclick=()=>{Ut=[...yt][0],Q=nt=Lt=!1,d._h="",Ue()});let u=yt.size===1?[...yt][0]:"";o.hidden=!u,u&&(o.innerHTML=`${__t(487)}${g(u)}${__t(488)}`)}kl.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!yt.has(o.dataset.f))})}kl.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let u=o.dataset.f;u==="*"?H.forEach(f=>yt.add(f)):yt.size===H.length?(yt.clear(),yt.add(u)):yt.has(u)?(yt.delete(u),yt.size||H.forEach(f=>yt.add(f))):yt.add(u);try{localStorage.setItem("rod_lines",JSON.stringify([...yt]))}catch{}Pp(),Ht(),un(),Tu(),jt=0,a()});let Bu=[...document.querySelectorAll("[data-sp]")],wi=0;function Lp(o){let u=se();o&&(Pt===o||wi===o)?Pt?(Jt=u.min,ae=u.min,Pt=0,wi=o):(me=performance.now(),Pt=o,wi=0):o===0?(Pt=0,ae=null,wi=0):(Jt=u.min,me=performance.now(),ae=u.min,Pt=o,wi=0),Bu.forEach(f=>{let _=+f.dataset.sp;f.classList.toggle("on",_===(Pt||wi)||!Pt&&!wi&&ae==null&&_===0),f.classList.toggle("pz",!!wi&&_===wi),f.textContent=_===0?__t(489):wi===_?"\u25B6 \xD7"+_:Pt===_?"\u23F8 \xD7"+_:"\xD7"+_}),jt=0,a()}Bu.forEach(o=>o.onclick=()=>Lp(+o.dataset.sp)),x("#tsl").oninput=o=>{let u=+o.target.value;Jt=u,ae=u,me=performance.now(),Pt===0&&!wi&&Bu.forEach(f=>f.classList.remove("on")),jt=0,a()},setInterval(()=>{ae!=null&&Pt&&Jt+(performance.now()-me)/6e4*Pt>1560&&(Jt=240,me=performance.now())},1e3),window.__rodSearch=o=>{let u=M(o.trim());if(!u){m.style.display="none",m._pick=null;return}let f=[],_=[];E.forEach((D,L)=>{if(!D.fams.size)return;let z=M(D.n);z.startsWith(u)||z.includes(" "+u)||z.includes("-"+u)?f.push(L):z.includes(u)&&_.push(L)});let S=f.concat(_).slice(0,7),b=I.filter(D=>M(D.name).startsWith(u)).sort((D,L)=>L.pop-D.pop).slice(0,3),P=S.map(D=>({h:`\u{1F689} ${g(E[D].n)}<em>${[...E[D].fams].sort(F).slice(0,3).map(L=>`<em class="ls" style="background:${X[L]}">${L}</em>`).join(" ")}</em>`,go:()=>{if(Ip(),Vr){let L=Vr;Vr=!1,v.placeholder=__t(485),Ou(D,L);return}qe.on&&qe.cur!=="map"&&dr("map"),nt=!1,Lt=!1,Q=!1,Qt=D,xt=null,Ot=null,un(),Object.assign(s,{tx:E[D].w[0],ty:E[D].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ue(),a()}})).concat(b.map(D=>({h:`${g(D.name)}${__t(490)}`,go:()=>{Object.assign(s,{tx:D.cx,ty:D.cy,dist:y(D.size*3+14,14,60)}),a()}})));m.innerHTML=P.map((D,L)=>`<li data-i="${L}">${D.h}</li>`).join("")||__t(491),m.style.display="block",m._pick=D=>{P[D]&&(P[D].go(),m.style.display="none",v.value="",v.blur())},m.querySelectorAll("li[data-i]").forEach(D=>D.onclick=()=>m._pick(+D.dataset.i))},Pp(),un();try{let o=new URLSearchParams(location.search).get("st");if(o){let u=M(o),f=-1,_=0;E.forEach((S,b)=>{if(!S.fams.size)return;let P=M(S.n),D=P===u?3:P.startsWith(u)||u.startsWith(P)?2:P.includes(u)||u.includes(P)?1:0;D>_&&(_=D,f=b)}),f>=0&&setTimeout(()=>{Qt=f,un(),Object.assign(s,{tx:E[f].w[0],ty:E[f].w[1],dist:18,tilt:.5}),Ue(),a()},300)}}catch{}let ku={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(ku.v=!ku.v,Le(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&xt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let u=d.querySelector(".mn");u&&(u.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,u=0,f=0,_=0;d.addEventListener("touchstart",S=>{_=innerWidth<=640&&xt&&S.touches.length===1&&!S.target.closest("input")?1:0,_&&(o=S.touches[0].clientX,u=S.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",S=>{if(!_)return;let b=S.touches[0].clientX-o,P=S.touches[0].clientY-u;_===1&&(Math.abs(b)<12&&Math.abs(P)<12||(_=Math.abs(b)>Math.abs(P)*1.3&&b<0?2:0,!_))||(S.preventDefault(),f=Math.min(0,b),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(_!==2){_=0;return}if(_=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let S=d.querySelector("[data-cx]");S&&S.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{_===2&&(d.style.transform="",d.style.opacity=""),_=0})}let qe={on:!1,cur:"now",home:new Map},zl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Rn=document.createElement("nav");Rn.id="tabs";let Q0=[["now","\u{1F552}",__t(489)],["map","\u{1F5FA}\uFE0F",__t(492)],["line","\u{1F4CA}",__t(493)],["set","\u2699\uFE0F",__t(494)]];Rn.innerHTML=Q0.map(([o,u,f])=>`<button type="button" data-tab="${o}"><span>${u}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Rn);let hr=document.createElement("i");hr.className="tind",hr.setAttribute("aria-hidden","true"),Rn.prepend(hr);let Dp=o=>[...Rn.querySelectorAll("[data-tab]")].find(u=>{let f=u.getBoundingClientRect();return o>=f.left&&o<f.right}),zu=o=>{!o||!o.offsetWidth||(hr.style.width=o.offsetWidth+"px",hr.style.height=o.offsetHeight+"px",hr.style.top=o.offsetTop+"px",hr.style.transform=`translateX(${o.offsetLeft}px)`)},Hr=()=>zu(Rn.querySelector("[data-tab].on")),t_=()=>{try{let o=window.Capacitor,u=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;u&&u.selectionChanged().catch(()=>{})}catch{}},Zn={on:!1,b:null,moved:!1,until:0};Rn.addEventListener("pointerdown",o=>{let u=Dp(o.clientX);if(u){Zn.on=!0,Zn.b=u,Zn.moved=!1,Rn.classList.add("drag"),Rn.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),u.classList.add("hov"),zu(u);try{Rn.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,_=f&&f.Plugins&&f.Plugins.Haptics;_&&f.isNativePlatform()&&_.selectionStart().catch(()=>{})}catch{}}}),Rn.addEventListener("pointermove",o=>{if(!Zn.on)return;let u=Dp(o.clientX);u&&u!==Zn.b&&(Zn.b.classList.remove("hov"),u.classList.add("hov"),Zn.b=u,Zn.moved=!0,zu(u),t_())});let Np=o=>{if(Zn.on){Zn.on=!1,Rn.classList.remove("drag"),Rn.querySelectorAll(".hov").forEach(u=>u.classList.remove("hov"));try{let u=window.Capacitor,f=u&&u.Plugins&&u.Plugins.Haptics;f&&u.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&Zn.b?(Zn.until=Date.now()+500,Zn.b.dataset.tab!==qe.cur?dr(Zn.b.dataset.tab):Hr()):Hr()}};Rn.addEventListener("pointerup",()=>Np(!0)),Rn.addEventListener("pointercancel",()=>Np(!1)),addEventListener("resize",()=>setTimeout(Hr,60));try{new ResizeObserver(()=>Hr()).observe(Rn)}catch{}let Gr=document.createElement("div");Gr.id="tabL",document.body.appendChild(Gr);let ur=document.createElement("div");ur.id="tabA",ur.className="box",document.body.appendChild(ur);let $u=(o,u)=>{o&&(qe.home.has(o)||qe.home.set(o,[o.parentNode,o.nextSibling]),u.appendChild(o))},Up=()=>{for(let[o,[u,f]]of qe.home)try{u.insertBefore(o,f&&f.parentNode===u?f:null)}catch{}qe.home.clear()};function Vu(){let o=yt.size===1?[...yt][0]:"",u=$.alerts.filter(_=>[..._.fams].some(S=>yt.has(S))).length,f=[Q,Lt,Ut,nt,o,u].join("|");Gr._k!==f&&(Gr._k=f,Gr.innerHTML=`<button type="button" data-tl="stats" class="${Q?"on":""}">\u{1F4CA} ${__t(495)}</button><button type="button" data-tl="alr" class="${Lt?"on":""}">\u26A0\uFE0F ${u}${u===1?__t(280):__t(281)}</button>${o?`<button type="button" data-tl="line" class="${Ut?"on":""}">\u{1F4CB} ${g(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,Gr.querySelectorAll("[data-tl]").forEach(_=>_.onclick=()=>{let S=_.dataset.tl;Q=S==="stats",Lt=S==="alr",Ut=S==="line"?o:"",nt=!1,xt=null,Qt=-1,Q&&(Ie.at=0),d._h="",Ue(),Vu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let e_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",n_=()=>vt(new Date).ymd.replace(/-/g,"");function so(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(e_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let u;try{u=JSON.parse(o)}catch{return}if(!u||!u.gen||!Array.isArray(u.days)||!u.trips||u.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=n_(),_=t.days.indexOf(f),S=u.days.indexOf(f),b=_<0?0:ot.filter(L=>L.day===_).length,P=0;if(S>=0)for(let L of u.trips)L[0]===S&&P++;let D=S>=0&&b&&(Math.abs(P-b)/b>.1||!P);if(_<0||_>=t.days.length-2||D){try{sessionStorage.setItem("rod_packmsg",D?"1":"")}catch{}location.reload();return}ro.v=!0}).catch(()=>{})}let ro={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&ro.v?(ro.v=!1,ro.reload=!0):!document.hidden&&ro.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>cn("\u{1F5D3}\uFE0F "+__t(496)),1500))}catch{}if(setTimeout(so,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(so.at||0)>6*36e5&&(so.at=Date.now(),so())}),so.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,u=x("#ver");u&&u.firstChild&&u.firstChild.nodeType===3&&(u.firstChild.textContent=u.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function $l(){Up();let o=window.__L||"es",u=ni.mode;ur.innerHTML=`<h3>${__t(494)}</h3>
      <h4>\u{1F310} ${__t(497)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,_])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${_}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(498)}</h4><div class="seg2">${[["auto",__t(301)],["light",__t(499)],["dark",__t(500)]].map(([f,_])=>`<button type="button" data-th="${f}" class="${u===f?"on":""}">${_}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(501)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let _=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(301)],["0","Normal"],["1",__t(502)]].map(([S,b])=>`<button type="button" data-big="${S}" class="${_===S?"on":""}">${b}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(503)}</small>`})()}
      <h4>\u{1F514} ${__t(504)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(505)}</small>${Fl().length?"":`<small class="tabAhint">${__t(506)}</small>`}${(()=>{let f=Fl();return f.length>1?`<small class="tabAhint">${__t(507)}</small><div class="alch">${f.map(_=>`<button type="button" data-al="${g(_)}" class="ln${cr.has(_)?" off":""}" style="--c:${X[_]}">${g(_)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(508)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(509)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,ur.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let _=f.dataset.al,S=Fl();cr.has(_)?cr.delete(_):S.filter(b=>!cr.has(b)).length>1&&cr.add(_);try{localStorage.setItem("rod_aloff",JSON.stringify([...cr]))}catch{}Le(!0),$l()}),ur.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let _=f.dataset.big;try{_==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",_)}catch{}window.__txt&&window.__txt(),$l(),Le(!0)}),ur.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ni.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ni.mode)}catch{}El(),$l()}),$u(x("#bell"),x("#tabAbell")),$u(x("#src"),x("#tabArt")),$u(x("#ver"),x("#tabAinf"))}function dr(o){if(!qe.on)return;let u=qe.cur;if(qe.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",Rn.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),Hr(),o==="line")(xt||Qt>=0)&&(qe.keep={t:xt,s:Qt,sk:qe.sk}),!Q&&!Lt&&!Ut&&!nt&&(Q=!0,Ie.at=0),xt=null,Qt=-1,d._h="",Ue(),Vu();else if(u==="line"){Q=Lt=nt=!1,Ut="";let f=qe.keep;qe.keep=null,f&&o==="map"&&!xt&&Qt<0&&(xt=f.t,Qt=f.s,qe.sk=f.sk),d._h="",Ue()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{wu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&$l(),o==="now"&&(Le(!0),requestAnimationFrame(Ol)),jt=0,a()}Rn.onclick=o=>{if(Date.now()<Zn.until)return;let u=o.target.closest("[data-tab]");u&&dr(u.dataset.tab)},window.__rodTabSync=()=>{if(!qe.on)return;let o=xt?"t"+(xt.num||xt.vtid):Qt>=0?"s"+Qt:"",u=o!==qe.sk;qe.sk=o,o&&u&&qe.cur!=="map"?dr("map"):(Lt||Ut||nt)&&qe.cur!=="line"&&qe.cur!=="map"&&dr("line"),qe.cur==="line"&&Vu()};function Hu(){let o=zl.matches||document.documentElement.classList.contains("cap");if(o!==qe.on)if(qe.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Hr)),o||(window.__mapHidden=!1),o){let u="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(u=f))}catch{}dr(u)}else delete document.documentElement.dataset.tab,Up()}zl.addEventListener?zl.addEventListener("change",Hu):zl.addListener(Hu),Hu();{let o=x("#rc"),u=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(u).observe(o),u()}let Gu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Wu=new RegExp("("+Object.keys(Gu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),i_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Gu[o]||Gu[o+"\uFE0F"]||""}</svg></span>`;function s_(o){let u=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],_;for(;_=u.nextNode();)_.parentElement&&_.parentElement.closest(".ico,script,style,textarea,input")||(Wu.lastIndex=0,Wu.test(_.nodeValue)&&f.push(_));for(let S of f){let b=document.createElement("span");b.innerHTML=g(S.nodeValue).replace(Wu,(P,D)=>i_(D)),S.replaceWith(...b.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(S=>x(S)).filter(Boolean),u=!1,f=()=>{if(!u){u=!0;try{let S=0;o().forEach(b=>{S+=s_(b)}),S&&qe.on&&Ol()}finally{u=!1}}},_=new MutationObserver(()=>{u||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(S=>_.observe(S,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:On,LASTPIN:si,xferCands:pp,bestXfer:Pu,xferFirst:Iu,nowState:se,XMIN:fp,pinNotify:Tp,toast:cn,cardEta:Ka,HOME:Qe,WORK:Xe,ONB:Zt,alertForMe:yp,whereAmI:Lu,departuresFor:ii,DEPS:lt,tripByNum:Za,delayOf:dt,TID:ut,SID:Yt,byDay:et,get days(){return t.days},get hist(){return Ie},get past(){return tt.cur},get cols(){return fn.mesh?fn.mesh.count:-1},get dist(){return r.dist},get follow(){return Ot},get selTrip(){return xt},ST:E,TR:ot,FAM:H,act:()=>It,setSpeed:Lp,RT:$,pollRT:he,nowState:se,posAt:ir,activeTrips:sr,LL:Mt,select:o=>{xt=o,Ue()}}}var Ua=window.__DATA__;var Fe=i=>document.querySelector(i),Ts=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),qn=(i,t,e)=>Math.min(e,Math.max(t,i)),Cf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ti=Fe("#c"),yl=new tu({canvas:ti,antialias:!0});yl.setPixelRatio(Math.min(devicePixelRatio||1,2));var As=new Ao;As.background=new _e(15659509);var gu=35,hs=new Wn(gu,1,2,1500);As.add(new Jo(16777215,9080992,1));var t0=new Ko(16777215,.9);t0.position.set(-40,-70,90);As.add(t0);var ls=100/Ua.w,_l=Ua.w/2,xl=Ua.h/2,yn=[],Rf=new ki;As.add(Rf);var uu=new br({color:16777215,transparent:!0,opacity:.55});for(let i of Ua.m){let t=new ki,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let y of i.g){let M=y.map(x=>{let g=[];for(let B=0;B<x.length;B+=2)g.push(new $t((x[B]-_l)*ls,(x[B+1]-xl)*ls));return g.length>1&&g[0].equals(g[g.length-1])&&g.pop(),g}).filter(x=>x.length>=3);if(!M.length)continue;let I=new Sa(M[0]);for(let x=1;x<M.length;x++)I.holes.push(new Er(M[x]));e.push(I);for(let x of M[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of M)n.push(new Do(new Mn().setFromPoints(x.map(g=>new q(g.x,g.y,0))),uu))}if(!e.length)continue;let c;try{c=new Go(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new qo({color:13421772}),d=new Nn(c,h);t.add(d);let v=new ki;n.forEach(y=>v.add(y)),v.position.z=.04,Rf.add(v),t.scale.z=.01,Rf.add(t);let m={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=m,yn.push(m)}var yT=yn.map(i=>i.mesh),qg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},e0=0,n0=0;for(let i of yn){for(let t of i.rings)e0+=qg(t[0])-t.slice(1).reduce((e,n)=>e+qg(n),0);n0+=i.area}var Lb=Math.sqrt(n0/e0),lu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},i0={"08":__t(510),17:__t(511),25:__t(512),43:__t(513)},Ff="sqrt",Of="pop",Tf=0,If=0,La=1,ml=1,Db={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Pf=i=>Of==="pop"?i.pop:i.pop/i.area,ou=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new _e(i));function Nb(i){i=qn(i,0,1)*(ou.length-1);let t=Math.min(Math.floor(i),ou.length-2);return ou[t].clone().lerp(ou[t+1],i-t)}var Da=i=>i>=100?Ts(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Ub(){If=0;for(let i of yn)If+=i.pop;[...yn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...yn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),a0()}var s0=new _e("#d3d8e2"),r0=new _e("#eceff3");window.__mapTheme=i=>{As.background=new _e(i?856345:15659509),r0.set(i?"#2b3242":"#eceff3"),s0.set(i?"#1a1f29":"#d3d8e2"),uu.color.set(i?856345:16777215),uu.opacity=i?.7:.55,Bf.color.set(i?329483:2764864),kf.color.set(i?9081766:16777215);for(let t of yn)t.base&&_u(t);Fn()};function _u(i){i.mat.color.copy(i.base).lerp(r0,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(s0,.8)}function a0(){La=1,ml=1e12;for(let e of yn){let n=Pf(e);La=Math.max(La,n),ml=Math.min(ml,n)}let i=Math.log10(Math.max(ml,.01)),t=Math.log10(La);for(let e of yn)e.base=Nb((Math.log10(Math.max(Pf(e),.01))-i)/(t-i)),_u(e);Fe("#lmin").textContent=Da(ml),Fe("#lmax").textContent=Da(La),Fe("#lname").textContent=Of==="pop"?__t(514):__t(515),xu()}function xu(){let i=Db[Ff],t=i(La),e=24*Tf;for(let n of yn)n.zt=Tf<=.001?.01:Math.max(.12*Math.min(1,Tf),e*i(Pf(n))/t)*(n.inF?1:.1);Fn()}var Yg=Object.fromEntries(yn.map(i=>[i.code,i])),cu=[],o0=[];for(let i of Ua.bd){let t=Yg[i.a],e=Yg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)o0.push((i.p[n]-_l)*ls,(i.p[n+1]-xl)*ls,0,(i.p[n+2]-_l)*ls,(i.p[n+3]-xl)*ls,0),cu.push(t,e)}var du=new Gi;du.setPositions(o0);var Bf=new is({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),kf=new is({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Bf,kf].forEach((i,t)=>{let e=new Lr(du,i);e.frustumCulled=!1,e.renderOrder=10+t,As.add(e)});function Fb(){let i=du.attributes.instanceStart.data.array;for(let t=0;t<cu.length;t+=2){let e=Math.max(cu[t].z,cu[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}du.attributes.instanceStart.data.needsUpdate=!0}var fu={};for(let i of Object.keys(lu)){let t=yn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,c=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),c=Math.max(c,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=lu[i],h.title=__t(516)+i0[i],h.onclick=()=>qb("pr:"+i),document.body.appendChild(h),fu[i]={el:h,p:new q(n/e,s/e,0),cx:(r+a)/2,cy:(l+c)/2,ext:Math.max(a-r,c-l),ext2:[a-r,c-l],area:e,name:lu[i]}}var Af=new q;function Ob(){for(let i in fu){let t=fu[i];Af.copy(t.p).project(hs),t.el.style.transform=`translate(-50%,-50%) translate(${(Af.x*.5+.5)*innerWidth}px,${(-Af.y*.5+.5)*innerHeight}px)`}}var wn={tilt:0,yaw:0,dist:150,tx:0,ty:0},be={...wn};function Bb(){let i=innerWidth/innerHeight,t=Math.tan(gu*Math.PI/360);return Math.max(Ua.h*ls*1.1,100*1.1/i)/(2*t)}var kb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{be.yaw=Math.round(be.yaw/(2*Math.PI))*2*Math.PI,be.tilt=0,Fn()});function zf(){Object.assign(be,{tilt:0,yaw:0,dist:Bb(),tx:0,ty:0}),Fn()}function zb(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=wn;hs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),hs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),hs.lookAt(n,s,0)}var gl=!0,Zg=performance.now(),vl=new Map;function Fn(){gl=!0}function l0(i){requestAnimationFrame(l0);let t=qn((i-Zg)/1e3,0,.05);Zg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(wn)){let r=be[s]-wn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(wn[s]+=r*e,n=!0):wn[s]=be[s]}for(let s of yn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of vl){let a=(i-r)/1800;a>=1?(vl.delete(s),Or(s)):Or(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(gl=!0),window.__mapHidden){gl=!0;return}if(n||gl){kb.style.transform=`rotate(${wn.yaw}rad) scaleY(${(.55+.45*Math.cos(wn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(be.yaw/2))<.02&&be.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(517):__t(518))}zb(),Fb(),Ob(),window.__rodFrame&&window.__rodFrame(),yl.render(As,hs),gl=n,Fe("#tilt").value=Math.round(be.tilt*180/Math.PI),Fe("#yaw").value=Math.round(((be.yaw*180/Math.PI+180)%360+360)%360-180)}}function c0(){yl.setSize(innerWidth,innerHeight,!1),hs.aspect=innerWidth/innerHeight,hs.updateProjectionMatrix(),Bf.resolution.set(innerWidth,innerHeight),kf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Fn()}addEventListener("resize",()=>{c0(),ln.length&&js()});ti.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;be.yaw+=n*.0035}else i.ctrlKey?be.dist=qn(be.dist*Math.exp(e*.01),6,400):be.tilt=qn(be.tilt+e*.002,0,1.32);Fn()},{passive:!1});ti.addEventListener("contextmenu",i=>i.preventDefault());var cs=new Map,hi=null,Nr=0,Lf=0,Df=0;var pu=null;ti.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),ln.length&&setTimeout(js,50)),ti.setPointerCapture(i.pointerId),cs.set(i.pointerId,{x:i.clientX,y:i.clientY}),cs.size===1&&(hi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),cs.size===2){let[t,e]=[...cs.values()];Nr=Math.hypot(t.x-e.x,t.y-e.y),Lf=Math.atan2(e.y-t.y,e.x-t.x),Df=(t.y+e.y)/2,pu={mode:null,rot:0,sc:0,tl:0},hi&&(hi.multi=!0)}$f()});ti.addEventListener("pointermove",i=>{let t=cs.get(i.pointerId);if(!t){Es={x:i.clientX,y:i.clientY},Nf||(Nf=requestAnimationFrame(Vb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,cs.size===2){let[s,r]=[...cs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=l-Lf;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=Nr?a-Nr:0,v=c-Df,m=pu||(pu={mode:null,rot:0,sc:0,tl:0});m.rot+=h,m.sc+=d,m.tl+=v,m.mode?m.mode==="zoom"&&Math.abs(m.rot)>.45&&(m.mode="rotate"):Math.abs(m.rot)>.3?m.mode="rotate":Math.abs(m.tl)>30&&Math.abs(m.sc)<18?m.mode="tilt":Math.abs(m.sc)>12&&(m.mode="zoom"),(m.mode==="zoom"||m.mode==="rotate")&&Nr&&(be.dist=qn(be.dist*Nr/a,6,400)),m.mode==="rotate"&&(be.yaw+=h,wn.yaw=be.yaw),m.mode==="tilt"&&(be.tilt=qn(be.tilt-v*.006,0,1.32),wn.tilt=be.tilt),Nr=a,Lf=l,Df=c,Fn();return}if(hi.moved+=Math.abs(e)+Math.abs(n),hi.rot||i.altKey)be.yaw+=e*.005,be.tilt=qn(be.tilt+n*.004,0,1.32),wn.yaw=be.yaw,wn.tilt=be.tilt;else{let s=2*wn.dist*Math.tan(gu*Math.PI/360)/innerHeight,r=Math.sin(wn.yaw),a=Math.cos(wn.yaw),l=1/Math.max(Math.cos(wn.tilt),.3);be.tx=qn(be.tx-a*e*s+-r*n*s*l,-70,70),be.ty=qn(be.ty-r*e*s+a*n*s*l,-70,70),wn.tx=be.tx,wn.ty=be.ty}Fn()});var h0=i=>{let t=hi&&!hi.rot&&!hi.multi&&hi.moved<(hi.touch?12:6)&&i.type==="pointerup"&&cs.size===1,e=hi&&hi.touch;cs.delete(i.pointerId),Nr=0,pu=null,cs.size||(hi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ti.addEventListener("pointerup",h0);ti.addEventListener("pointercancel",h0);ti.addEventListener("dblclick",zf);addEventListener("keydown",i=>{i.key==="Alt"&&(ti.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ti.style.cursor="")});addEventListener("blur",()=>{ti.style.cursor=""});var $b=new tl,Jg=new $t,Es=null,Nf=0,Ur=null;function Vb(){if(Nf=0,!Es||hi)return;Jg.set(Es.x/innerWidth*2-1,-(Es.y/innerHeight)*2+1),$b.setFromCamera(Jg,hs);let i=null;if(i!==Ur){let e=Ur;Ur=i,e&&Or(e),i&&Or(i),Fn()}let t=window.__rodHover&&window.__rodHover(Es.x,Es.y);if(t){Dr.innerHTML=t,Dr.style.display="block";let e=Dr.offsetWidth,n=Dr.offsetHeight;Dr.style.left=qn(Es.x+14,6,innerWidth-e-6)+"px",Dr.style.top=qn(Es.y+14,6,innerHeight-n-6)+"px",ti.style.cursor="pointer"}else $f(),ti.style.cursor=""}ti.addEventListener("pointerleave",()=>{if(Es=null,Ur){let i=Ur;Ur=null,Or(i),Fn()}$f()});var Dr=Fe("#tip");function $f(){Dr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Of=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),a0()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Ff=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),xu()});Fe("#yaw").oninput=i=>{be.yaw=+i.target.value*Math.PI/180,Fn()};Fe("#tilt").oninput=i=>{be.tilt=+i.target.value*Math.PI/180,Fn()};Fe("#zin").onclick=()=>{be.dist=qn(be.dist*.75,6,400),Fn()};Fe("#zout").onclick=()=>{be.dist=qn(be.dist/.75,6,400),Fn()};Fe("#rst").onclick=zf;var jg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],ln=[],Kg={},Hb=i=>Kg[i]||(Kg[i]=new br({color:i}));function u0(i,t){i.og.children.forEach(e=>e.material=t?Hb(t):uu)}function Or(i,t=0){let e=i.mat.emissive;i===Ur?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Vf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(gu*Math.PI/360),c=i.length===1?qn(i[0].size*3.2+14,14,120):qn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(be,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Fn()}var Js=Fe("#q"),xi=Fe("#list"),on=Fe("#mcs");function vu(i,t=!0){if(xi.style.display="none",Js.value="",!i.sel){ln.length>=6&&d0(ln[0].o,!0);let e=new Set(ln.map(s=>s.color)),n=jg.find(s=>!e.has(s))||jg[0];i.sel={o:i,color:n,tint:new _e(n).multiplyScalar(.12)},ln.push(i.sel),u0(i,n)}on.classList.contains("min")&&Sl(!1),vl.set(i,performance.now()),Or(i),t&&Vf([i],Math.max(be.tilt,.9)),js()}function d0(i,t){let e=ln.indexOf(i.sel);e>=0&&ln.splice(e,1),i.sel=null,u0(i,null),Or(i),Fn(),t||js()}function f0(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=ln.map(d=>{let v=1e9,m=-1e9,y=1e9,M=-1e9;for(let I of d.o.rings)for(let x=0;x<I[0].length;x+=2)v=Math.min(v,I[0][x]),m=Math.max(m,I[0][x]),y=Math.min(y,I[0][x+1]),M=Math.max(M,I[0][x+1]);return{x0:v,x1:m,y0:y,y1:M}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;ln.forEach((d,v)=>{let m=r[v],y=(m.x0+m.x1)/2,M=(m.y0+m.y1)/2;s.beginPath();for(let I of d.o.rings)for(let x of I)for(let g=0;g<x.length;g+=2){let B=e/2+(x[g]-y)*l,k=n/2-(x[g+1]-M)*l;g?s.lineTo(B,k):s.moveTo(B,k),g===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let c=l/Lb,h=[.5,1,2,5,10,20,50,100].find(d=>d*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function js(){if(!ln.length){on.innerHTML="",on.style.display="none",Sl(!1);return}if(on.style.display="flex",innerWidth<=640){let e=Fe("#inf").getBoundingClientRect().bottom;on.style.top=Math.round(e+8)+"px",on.style.maxHeight=Math.max(110,Math.min(innerHeight*(Fe("#rc").classList.contains("min")?.7:.4),Fe("#rc").getBoundingClientRect().top-e-16))+"px",on.style.width=""}else if(innerHeight<=500){let e=Fe("#inf").getBoundingClientRect().bottom;on.style.top=Math.round(e+8)+"px",on.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",on.style.width="min(290px, 40vw)"}else on.style.top="",on.style.maxHeight="",on.style.width="";window.__fitMcs&&window.__fitMcs();let i=ln.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${lu[s.pr]}</em></div><div class="mb">${Ts(s.pop)}${__t(524)}${Da(s.area)} km\xB2 \xB7 ${Da(s.pop/s.area)}${__t(525)}${s.rankP}${__t(526)}`}).join("");if(ln.length>1){let e=s=>Math.max(...ln.map(s)),n=[[__t(527),s=>s.o.pop,Ts],[__t(528),s=>s.o.area,Da],[__t(529),s=>s.o.pop/s.o.area,Da]];if(i+=`${__t(530)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${ln.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),ln.length===2){let[s,r]=ln.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],c=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(531)}${c(a.pop,l.pop)}${__t(532)}${l.name}${__t(533)}${c(a.area,l.area)}\xD7 ${a.area>=l.area?__t(534):__t(535)}.</small>`}i+="</div>"}on.innerHTML=i,on.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),d0(ln[+e.dataset.x].o)}),on.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Vf([ln[+e.dataset.i].o],Math.max(be.tilt,.9)),e.onmouseenter=()=>{let n=ln[+e.dataset.i].o;vl.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=ln.splice(s,1);ln.splice(r,0,a),js();let l=Fe("#sil");l&&l.classList.add("flash")}}});let t=Fe("#sil");t&&f0(t)}Js.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Js.value);return}let i=Cf(Js.value.trim());if(!i){xi.style.display="none";return}let t=[],e=[];for(let s of yn){let r=Cf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);xi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Ts(s.pop)}</em></li>`).join("")||__t(491),xi.style.display="block",xi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>vu(n[+s.dataset.i])),xi._r=n});Js.addEventListener("keydown",i=>{i.key==="Enter"&&xi._pick?xi._pick(0):i.key==="Enter"&&xi._r&&xi._r[0]&&vu(xi._r[0]),i.key==="Escape"&&(Js.value="",xi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Js&&p0()});var Qg=0;addEventListener("resize",()=>{clearTimeout(Qg),Qg=setTimeout(()=>{let i=Fe("#sil");i&&f0(i)},120)});var mu=null,Uf=Fe("#chip");function Gb(i,t,e=.8){mu={codes:new Set(i.map(n=>n.code)),label:t},yn.forEach(n=>{n.inF=mu.codes.has(n.code),_u(n)}),Uf.innerHTML=`${__t(536)}${t}</b> \xB7 ${i.length}${i.length===1?__t(537):__t(538)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Uf.style.display="flex",Fe("#chx").onclick=p0,xu(),Vf(i,e),i.slice(0,40).forEach(n=>vl.set(n,performance.now()))}function p0(){mu&&(mu=null,yn.forEach(i=>{i.inF=!0,_u(i)}),Uf.style.display="none",xu())}var Wb="prov";function Xb(i){let t=[...yn].sort((a,l)=>l.pop-a.pop),e=[...yn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[yn.filter(a=>a.pr===s),i0[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(539)]:[e.slice(0,10),__t(540)];if(n==="low")return s==="pop"?[t.slice(-10),__t(541)]:[e.slice(-10),__t(542)];if(n==="size")return[yn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Ts(+s)}${__t(543)}`:+s==0?`${__t(544)}${Ts(+r)}${__t(545)}`:`${Ts(+s)} \u2013 ${Ts(+r-1)}${__t(545)}`];if(n==="n50"){let a=0,l=0;for(let c of t)if(a+=c.pop,l++,a>=If/2)break;return[t.slice(0,l),`${__t(546)}`]}return[[],""]}function qb(i){let[t,e]=Xb(i);t.length&&Gb(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Wb=i.dataset.tab,Fe("#dbody").scrollTop=0});var Fr=Fe("#rc"),hu=Fe("#mcstab");function Na(i){Fr.classList.toggle("min",i),Fe("#rcgrab span").textContent=i?__t(588):__t(589),ln.length&&js()}function Sl(i){on.classList.toggle("min",i),on.style.transform="",on.style.opacity="",hu.classList.toggle("on",i&&ln.length>0),i&&(hu.textContent=`\u25B8 ${ln.length} ${ln.length===1?"ficha":"fichas"}`,hu.style.top=on.style.top||"124px")}function Hf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!yu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(l,c)>10&&(s.lock=Math.abs(l)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(l,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Fe("#rcgrab").onclick=()=>Na(!Fr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Na(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var m0=()=>innerWidth>640;Hf(Fr,{axis:"y",onEnd:(i,t)=>{if(!m0())if(t>40&&!Fr.classList.contains("min")){let e=Fe("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Na(!0)}else t<-30&&Fr.classList.contains("min")&&Na(!1)}});Hf(Fr,{axis:"x",onEnd:i=>{m0()&&(i>50?Na(!0):i<-30&&Fr.classList.contains("min")&&Na(!1))}});Hf(on,{axis:"x",onMove:i=>{i<0&&(on.classList.add("sw"),on.style.transform=`translateX(${i}px)`,on.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{on.classList.remove("sw"),i<-60?(Sl(!0),window.__rodHide&&!ln.length&&window.__rodHide()):(on.style.transform="",on.style.opacity="")}});hu.onclick=()=>{Sl(!1),js()};Fe("#dtoggle").onclick=()=>{let i=Fe("#dp").classList.toggle("open");Fe("#rc").classList.toggle("dopen",i),Fe("#dtoggle").textContent=i?yu.matches&&innerWidth<=640?__t(590):__t(591):__t(592),window.__rodCard&&window.__rodCard()};var yu=matchMedia("(max-width:640px), (max-height:500px)");function g0(){let i=Fe("#leg");yu.matches?Fe("#rc").insertBefore(i,Fe("#dtoggle")):document.body.appendChild(i),ln.length&&js()}yu.addEventListener("change",g0);g0();c0();Ub();zf();Object.assign(wn,be);for(let i of yn)i.z=.01;requestAnimationFrame(l0);Xg({scene:As,camera:hs,renderer:yl,goal:be,cur:wn,invalidate:Fn,flyTo:(i,t,e,n)=>{Object.assign(be,{tx:(i-_l)*ls,ty:(t-xl)*ls,dist:e,tilt:n}),Fn()},K:ls,CX:_l,CY:xl,mcs:on,q:Js,list:xi,munis:yn,select:vu,norm:Cf,fmt:Ts,clamp:qn,mcsMin:Sl});window.__app={scene:As,renderer:yl,camera:hs,munis:yn,labs:fu,goal:be,cur:wn,select:vu,get mode(){return Ff}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(598):__t(599)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
