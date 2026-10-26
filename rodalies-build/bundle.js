(()=>{var vf=0,nu=1,yf=2;var Ka=1,Sf=2,Or=3,ys=0,Wn=1,zi=2,ki=0,Br=1,iu=2,su=3,ru=4,Mf=5;var qs=100,bf=101,wf=102,Ef=103,Tf=104,Af=200,Cf=201,Rf=202,If=203,au=204,ou=205,Pf=206,Lf=207,Df=208,Nf=209,Uf=210,Ff=211,Of=212,Bf=213,zf=214,sl=0,rl=1,al=2,wr=3,ol=4,ll=5,cl=6,hl=7,$l=0,kf=1,Vf=2,Ei=0,lu=1,cu=2,hu=3,uu=4,du=5,fu=6,pu=7;var mu=300,Ss=301,Ys=302,Xl=303,ql=304,ja=306,ul=1e3,Di=1001,dl=1002,Sn=1003,Hf=1004;var Qa=1005;var An=1006,Yl=1007;var Ms=1008;var Qn=1009,gu=1010,_u=1011,zr=1012,Zl=1013,Ti=1014,fi=1015,Ai=1016,Jl=1017,Kl=1018,kr=1020,xu=35902,vu=35899,yu=1021,Su=1022,pi=1023,Ui=1026,bs=1027,jl=1028,Ql=1029,ws=1030,tc=1031;var ec=1033,to=33776,eo=33777,no=33778,io=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37488,hc=37489,so=37490,uc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,_c=37813,xc=37814,vc=37815,yc=37816,Sc=37817,Mc=37818,bc=37819,wc=37820,Ec=37821,Tc=36492,Ac=36494,Cc=36495,Rc=36283,Ic=36284,ro=36285,Pc=36286;var _a=2300,fl=2301,nl=2302,Gh=2303,Wh=2400,$h=2401,Xh=2402;var Gf=3200;var Lc=0,Wf=1,is="",ii="srgb",xa="srgb-linear",va="linear",Ve="srgb";var il=7680;var $f=519,Xf=512,qf=513,Yf=514,Dc=515,Zf=516,Jf=517,Nc=518,Kf=519,Mu=35044;var bu="300 es",Mi=2e3,Er=2001;function Om(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=ya("canvas");return i.style.display="block",i}var Nd={},Tr=null;function Sa(...i){let t="THREE."+i.shift();Tr?Tr("log",t,...i):console.log(t,...i)}function Qf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=Qf(i);let t="THREE."+i.shift();if(Tr)Tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Qf(i);let t="THREE."+i.shift();if(Tr)Tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zs(...i){let t=i.join(" ");t in Nd||(Nd[t]=!0,ae(...i))}function tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ep={[sl]:rl,[al]:cl,[ol]:hl,[wr]:ll,[rl]:sl,[cl]:al,[hl]:ol,[ll]:wr},Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=1234567,fa=Math.PI/180,Ar=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function wu(i,t){return(i%t+t)%t}function zm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function km(i,t,e){return i!==t?(e-i)/(t-i):0}function pa(i,t,e){return(1-e)*i+e*t}function Vm(i,t,e,n){return pa(i,t,1-Math.exp(-e*n))}function Hm(i,t=1){return t-Math.abs(wu(i,t*2)-t)}function Gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $m(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xm(i,t){return i+Math.random()*(t-i)}function qm(i){return i*(.5-Math.random())}function Ym(i){i!==void 0&&(Ud=i);let t=Ud+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zm(i){return i*fa}function Jm(i){return i*Ar}function Km(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function jm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tg(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),u=a((t-n)/2),g=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*g,o*h,o*c);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Eu={DEG2RAD:fa,RAD2DEG:Ar,generateUUID:Ni,clamp:xe,euclideanModulo:wu,mapLinear:zm,inverseLerp:km,lerp:pa,damp:Vm,pingpong:Hm,smoothstep:Gm,smootherstep:Wm,randInt:$m,randFloat:Xm,randFloatSpread:qm,seededRandom:Ym,degToRad:Zm,radToDeg:Jm,isPowerOfTwo:Km,ceilPowerOfTwo:jm,floorPowerOfTwo:Qm,setQuaternionFromProperEuler:tg,normalize:$e,denormalize:Si},Nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],g=r[a+1],_=r[a+2],E=r[a+3];if(m!==E||l!==u||c!==g||h!==_){let f=l*u+c*g+h*_+m*E;f<0&&(u=-u,g=-g,_=-_,E=-E,f=-f);let d=1-o;if(f<.9995){let L=Math.acos(f),N=Math.sin(L);d=Math.sin(d*L)/N,o=Math.sin(o*L)/N,l=l*d+u*o,c=c*d+g*o,h=h*d+_*o,m=m*d+E*o}else{l=l*d+u*o,c=c*d+g*o,h=h*d+_*o,m=m*d+E*o;let L=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=L,c*=L,h*=L,m*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],g=r[a+2],_=r[a+3];return t[e]=o*_+h*m+l*g-c*u,t[e+1]=l*_+h*u+c*m-o*g,t[e+2]=c*_+h*g+o*u-l*m,t[e+3]=h*_-o*m-l*u-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m-u*g*_;break;case"YXZ":this._x=u*h*m+c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m+u*g*_;break;case"ZXY":this._x=u*h*m-c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m-u*g*_;break;case"ZYX":this._x=u*h*m-c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m+u*g*_;break;case"YZX":this._x=u*h*m+c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m-u*g*_;break;case"XZY":this._x=u*h*m-c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m+u*g*_;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_h=new B,Fd=new Oi,ge=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],g=n[5],_=n[8],E=s[0],f=s[3],d=s[6],L=s[1],N=s[4],w=s[7],b=s[2],I=s[5],O=s[8];return r[0]=a*E+o*L+l*b,r[3]=a*f+o*N+l*I,r[6]=a*d+o*w+l*O,r[1]=c*E+h*L+m*b,r[4]=c*f+h*N+m*I,r[7]=c*d+h*w+m*O,r[2]=u*E+g*L+_*b,r[5]=u*f+g*N+_*I,r[8]=u*d+g*w+_*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,u=o*l-h*r,g=c*r-a*l,_=e*m+n*u+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/_;return t[0]=m*E,t[1]=(s*c-h*n)*E,t[2]=(o*n-s*a)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=g*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xh=new ge,Od=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eg(){let i={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ve&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ve&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xa]:{primaries:t,whitePoint:n,transfer:va,toXYZ:Od,fromXYZ:Bd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:n,transfer:Ve,toXYZ:Od,fromXYZ:Bd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}var Re=eg();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var or,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{or===void 0&&(or=ya("canvas")),or.width=t.width,or.height=t.height;let s=or.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=or}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ya("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ng=0,Cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vh(s[a].image)):r.push(vh(s[a]))}else r=vh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var ig=0,yh=new B,Jn=class i extends Fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=An,a=Ms,o=pi,l=Qn,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Ni(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ul:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ul:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=mu;Jn.DEFAULT_ANISOTROPY=1;var He=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],u=l[1],g=l[5],_=l[9],E=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-E)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+E)<.1&&Math.abs(_+f)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(c+1)/2,w=(g+1)/2,b=(d+1)/2,I=(h+u)/4,O=(m+E)/4,S=(_+f)/4;return N>w&&N>b?N<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(N),s=I/n,r=O/n):w>b?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=O/r,s=S/r),this.set(n,s,r,e),this}let L=Math.sqrt((f-_)*(f-_)+(m-E)*(m-E)+(u-h)*(u-h));return Math.abs(L)<.001&&(L=1),this.x=(f-_)/L,this.y=(m-E)/L,this.z=(u-h)/L,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Jn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ma=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,u,g,_,E,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,u,g,_,E,f)}set(t,e,n,s,r,a,o,l,c,h,m,u,g,_,E,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=m,d[14]=u,d[3]=g,d[7]=_,d[11]=E,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),a=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,g=a*m,_=o*h,E=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=g+_*c,e[5]=u-E*c,e[9]=-o*l,e[2]=E-u*c,e[6]=_+g*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,g=l*m,_=c*h,E=c*m;e[0]=u+E*o,e[4]=_*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=g*o-_,e[6]=E+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,g=l*m,_=c*h,E=c*m;e[0]=u-E*o,e[4]=-a*m,e[8]=_+g*o,e[1]=g+_*o,e[5]=a*h,e[9]=E-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,g=a*m,_=o*h,E=o*m;e[0]=l*h,e[4]=_*c-g,e[8]=u*c+E,e[1]=l*m,e[5]=E*c+u,e[9]=g*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,g=a*c,_=o*l,E=o*c;e[0]=l*h,e[4]=E-u*m,e[8]=_*m+g,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*m+_,e[10]=u-E*m}else if(t.order==="XZY"){let u=a*l,g=a*c,_=o*l,E=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=u*m+E,e[5]=a*h,e[9]=g*m-_,e[2]=_*m-g,e[6]=o*h,e[10]=E*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sg,t,rg)}lookAt(t,e,n){let s=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),cs.crossVectors(n,ei),cs.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),cs.crossVectors(n,ei)),cs.normalize(),Ro.crossVectors(ei,cs),s[0]=cs.x,s[4]=Ro.x,s[8]=ei.x,s[1]=cs.y,s[5]=Ro.y,s[9]=ei.y,s[2]=cs.z,s[6]=Ro.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],g=n[13],_=n[2],E=n[6],f=n[10],d=n[14],L=n[3],N=n[7],w=n[11],b=n[15],I=s[0],O=s[4],S=s[8],C=s[12],k=s[1],$=s[5],Z=s[9],J=s[13],V=s[2],K=s[6],st=s[10],rt=s[14],Mt=s[3],at=s[7],ht=s[11],gt=s[15];return r[0]=a*I+o*k+l*V+c*Mt,r[4]=a*O+o*$+l*K+c*at,r[8]=a*S+o*Z+l*st+c*ht,r[12]=a*C+o*J+l*rt+c*gt,r[1]=h*I+m*k+u*V+g*Mt,r[5]=h*O+m*$+u*K+g*at,r[9]=h*S+m*Z+u*st+g*ht,r[13]=h*C+m*J+u*rt+g*gt,r[2]=_*I+E*k+f*V+d*Mt,r[6]=_*O+E*$+f*K+d*at,r[10]=_*S+E*Z+f*st+d*ht,r[14]=_*C+E*J+f*rt+d*gt,r[3]=L*I+N*k+w*V+b*Mt,r[7]=L*O+N*$+w*K+b*at,r[11]=L*S+N*Z+w*st+b*ht,r[15]=L*C+N*J+w*rt+b*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],u=t[10],g=t[14],_=t[3],E=t[7],f=t[11],d=t[15],L=l*g-c*u,N=o*g-c*m,w=o*u-l*m,b=a*g-c*h,I=a*u-l*h,O=a*m-o*h;return e*(E*L-f*N+d*w)-n*(_*L-f*b+d*I)+s*(_*N-E*b+d*O)-r*(_*w-E*I+f*O)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],u=t[10],g=t[11],_=t[12],E=t[13],f=t[14],d=t[15],L=e*o-n*a,N=e*l-s*a,w=e*c-r*a,b=n*l-s*o,I=n*c-r*o,O=s*c-r*l,S=h*E-m*_,C=h*f-u*_,k=h*d-g*_,$=m*f-u*E,Z=m*d-g*E,J=u*d-g*f,V=L*J-N*Z+w*$+b*k-I*C+O*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/V;return t[0]=(o*J-l*Z+c*$)*K,t[1]=(s*Z-n*J-r*$)*K,t[2]=(E*O-f*I+d*b)*K,t[3]=(u*I-m*O-g*b)*K,t[4]=(l*k-a*J-c*C)*K,t[5]=(e*J-s*k+r*C)*K,t[6]=(f*w-_*O-d*N)*K,t[7]=(h*O-u*w+g*N)*K,t[8]=(a*Z-o*k+c*S)*K,t[9]=(n*k-e*Z-r*S)*K,t[10]=(_*I-E*w+d*L)*K,t[11]=(m*w-h*I-g*L)*K,t[12]=(o*C-a*$-l*S)*K,t[13]=(e*$-n*C+s*S)*K,t[14]=(E*N-_*b-f*L)*K,t[15]=(h*b-m*N+u*L)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,u=r*c,g=r*h,_=r*m,E=a*h,f=a*m,d=o*m,L=l*c,N=l*h,w=l*m,b=n.x,I=n.y,O=n.z;return s[0]=(1-(E+d))*b,s[1]=(g+w)*b,s[2]=(_-N)*b,s[3]=0,s[4]=(g-w)*I,s[5]=(1-(u+d))*I,s[6]=(f+L)*I,s[7]=0,s[8]=(_+N)*O,s[9]=(f-L)*O,s[10]=(1-(u+E))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=lr.set(s[0],s[1],s[2]).length(),o=lr.set(s[4],s[5],s[6]).length(),l=lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let c=1/a,h=1/o,m=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=m,_i.elements[9]*=m,_i.elements[10]*=m,e.setFromRotationMatrix(_i),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mi,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),g=(n+s)/(n-s),_,E;if(l)_=r/(a-r),E=a*r/(a-r);else if(o===Mi)_=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Er)_=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mi,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),g=-(n+s)/(n-s),_,E;if(l)_=1/(a-r),E=a/(a-r);else if(o===Mi)_=-2/(a-r),E=-(a+r)/(a-r);else if(o===Er)_=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},lr=new B,_i=new Ue,sg=new B(0,0,0),rg=new B(1,1,1),cs=new B,Ro=new B,ei=new B,zd=new Ue,kd=new Oi,ns=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kd.setFromEuler(this),this.setFromQuaternion(kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ag=0,Vd=new B,cr=new Oi,Ji=new Ue,Io=new B,ra=new B,og=new B,lg=new Oi,Hd=new B(1,0,0),Gd=new B(0,1,0),Wd=new B(0,0,1),$d={type:"added"},cg={type:"removed"},hr={type:"childadded",child:null},Sh={type:"childremoved",child:null},Mn=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new ns,n=new Oi,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ge}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Hd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Wd,t)}translateOnAxis(t,e){return Vd.copy(t).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ra,Io,this.up):Ji.lookAt(Io,ra,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Ji),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($d),hr.child=t,this.dispatchEvent(hr),hr.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cg),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($d),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),g=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new B(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let f=e.getJointPose(E,n),d=this._getHandJoint(c,E);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),g=.02,_=.005;c.inputState.pinching&&u>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Mh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=wu(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mh(a,r,t+1/3),this.g=Mh(a,r,t),this.b=Mh(a,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=ii){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let n=np[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Re.workingToColorSpace(Fn.copy(this),t),Math.round(xe(Fn.r*255,0,255))*65536+Math.round(xe(Fn.g*255,0,255))*256+Math.round(xe(Fn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(Fn.copy(this),e);let n=Fn.r,s=Fn.g,r=Fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=ii){Re.workingToColorSpace(Fn.copy(this),t);let e=Fn.r,n=Fn.g,s=Fn.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+e,hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hs),t.getHSL(Po);let n=pa(hs.h,Po.h,e),s=pa(hs.s,Po.s,e),r=pa(hs.l,Po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new oe;oe.NAMES=np;var ba=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xi=new B,Ki=new B,bh=new B,ji=new B,ur=new B,dr=new B,Xd=new B,wh=new B,Eh=new B,Th=new B,Ah=new He,Ch=new He,Rh=new He,ps=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xi.subVectors(t,e),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xi.subVectors(s,e),Ki.subVectors(n,e),bh.subVectors(t,e);let a=xi.dot(xi),o=xi.dot(Ki),l=xi.dot(bh),c=Ki.dot(Ki),h=Ki.dot(bh),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,g=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ah.setScalar(0),Ch.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(t,e),Ch.fromBufferAttribute(t,n),Rh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Ch,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(t,e,n,s){return xi.subVectors(n,e),Ki.subVectors(t,e),xi.cross(Ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),xi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ur.subVectors(s,n),dr.subVectors(r,n),wh.subVectors(t,n);let l=ur.dot(wh),c=dr.dot(wh);if(l<=0&&c<=0)return e.copy(n);Eh.subVectors(t,s);let h=ur.dot(Eh),m=dr.dot(Eh);if(h>=0&&m<=h)return e.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ur,a);Th.subVectors(t,r);let g=ur.dot(Th),_=dr.dot(Th);if(_>=0&&g<=_)return e.copy(r);let E=g*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(dr,o);let f=h*_-g*m;if(f<=0&&m-h>=0&&g-_>=0)return Xd.subVectors(r,s),o=(m-h)/(m-h+(g-_)),e.copy(s).addScaledVector(Xd,o);let d=1/(f+E+u);return a=E*d,o=u*d,e.copy(n).addScaledVector(ur,a).addScaledVector(dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(aa),Do.subVectors(this.max,aa),fr.subVectors(t.a,aa),pr.subVectors(t.b,aa),mr.subVectors(t.c,aa),us.subVectors(pr,fr),ds.subVectors(mr,pr),Ns.subVectors(fr,mr);let e=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Ns.z,Ns.y,us.z,0,-us.x,ds.z,0,-ds.x,Ns.z,0,-Ns.x,-us.y,us.x,0,-ds.y,ds.x,0,-Ns.y,Ns.x,0];return!Ih(e,fr,pr,mr,Do)||(e=[1,0,0,0,1,0,0,0,1],!Ih(e,fr,pr,mr,Do))?!1:(No.crossVectors(us,ds),e=[No.x,No.y,No.z],Ih(e,fr,pr,mr,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qi=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,Lo=new Gn,fr=new B,pr=new B,mr=new B,us=new B,ds=new B,Ns=new B,aa=new B,Do=new B,No=new B,Us=new B;function Ih(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=t.dot(Us),c=e.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var un=new B,Uo=new Nt,ug=0,Xe=class extends Fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wa=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ea=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},dg=new Gn,oa=new B,Ph=new B,jn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oa.subVectors(t,this.center);let e=oa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(oa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oa.copy(t.center).add(Ph)),this.expandByPoint(oa.copy(t.center).sub(Ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fg=0,di=new Ue,Lh=new Mn,gr=new B,ni=new Gn,la=new Gn,yn=new B,rn=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Om(t)?Ea:wa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ge().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];la.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(ni.min,la.min),ni.expandByPoint(yn),yn.addVectors(ni.max,la.max),ni.expandByPoint(yn)):(ni.expandByPoint(la.min),ni.expandByPoint(la.max))}ni.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)yn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yn.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(t,c),yn.add(gr)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new B,l[S]=new B;let c=new B,h=new B,m=new B,u=new Nt,g=new Nt,_=new Nt,E=new B,f=new B;function d(S,C,k){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,C),m.fromBufferAttribute(n,k),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,k),h.sub(c),m.sub(c),g.sub(u),_.sub(u);let $=1/(g.x*_.y-_.x*g.y);isFinite($)&&(E.copy(h).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar($),f.copy(m).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar($),o[S].add(E),o[C].add(E),o[k].add(E),l[S].add(f),l[C].add(f),l[k].add(f))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let S=0,C=L.length;S<C;++S){let k=L[S],$=k.start,Z=k.count;for(let J=$,V=$+Z;J<V;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let N=new B,w=new B,b=new B,I=new B;function O(S){b.fromBufferAttribute(s,S),I.copy(b);let C=o[S];N.copy(C),N.sub(b.multiplyScalar(b.dot(C))).normalize(),w.crossVectors(I,C);let $=w.dot(l[S])<0?-1:1;a.setXYZW(S,N.x,N.y,N.z,$)}for(let S=0,C=L.length;S<C;++S){let k=L[S],$=k.start,Z=k.count;for(let J=$,V=$+Z;J<V;J+=3)O(t.getX(J+0)),O(t.getX(J+1)),O(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,m=new B;if(t)for(let u=0,g=t.count;u<g;u+=3){let _=t.getX(u+0),E=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,g=e.count;u<g;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),g=0,_=0;for(let E=0,f=l.length;E<f;E++){o.isInterleavedBufferAttribute?g=l[E]*o.data.stride+o.offset:g=l[E]*h;for(let d=0;d<h;d++)u[_++]=c[g++]}return new Xe(u,h,m)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],g=t(u,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let g=c[m];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,g=m.length;u<g;u++)h.push(m[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Hn=new B,wi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dh=new B,pg=new B,mg=new ge,yi=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Dh.subVectors(n,e).cross(pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mg.getNormalMatrix(t),s=this.coplanarPoint(Dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gg=0,Bi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Br,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=ou,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ts=new B,Nh=new B,Fo=new B,Oo=new B,ks=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nh.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(Nh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fo),o=Oo.dot(this.direction),l=-Oo.dot(Fo),c=Oo.lengthSq(),h=Math.abs(1-a*a),m,u,g,_;if(h>0)if(m=a*l-o,u=a*o-l,_=r*h,m>=0)if(u>=-_)if(u<=_){let E=1/h;m*=E,u*=E,g=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),g=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Nh).addScaledVector(Fo,u),g}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,g=t.z-a.z,_=e.x-a.x,E=e.y-a.y,f=e.z-a.z,d=n.x-a.x,L=n.y-a.y,N=n.z-a.z,w=Math.abs(l),b=Math.abs(c),I=Math.abs(h),O,S,C,k,$,Z,J,V,K,st,rt,Mt;if(w>=b&&w>=I?(C=l,Z=m,K=_,Mt=d,l>=0?(O=c,S=h,k=u,$=g,J=E,V=f,st=L,rt=N):(O=h,S=c,k=g,$=u,J=f,V=E,st=N,rt=L)):b>=I?(C=c,Z=u,K=E,Mt=L,c>=0?(O=h,S=l,k=g,$=m,J=f,V=_,st=N,rt=d):(O=l,S=h,k=m,$=g,J=_,V=f,st=d,rt=N)):(C=h,Z=g,K=f,Mt=N,h>=0?(O=l,S=c,k=m,$=u,J=_,V=E,st=d,rt=L):(O=c,S=l,k=u,$=m,J=E,V=_,st=L,rt=d)),C===0)return null;let at=O/C,ht=S/C,gt=1/C,Jt=k-at*Z,Wt=$-ht*Z,Pe=J-at*K,we=V-ht*K,Te=st-at*Mt,nt=rt-ht*Mt,pt=Te*we-nt*Pe,Ut=Jt*nt-Wt*Te,ie=Pe*Wt-we*Jt;if(s){if(pt<0||Ut<0||ie<0)return null}else if((pt<0||Ut<0||ie<0)&&(pt>0||Ut>0||ie>0))return null;let Ct=pt+Ut+ie;if(Ct===0)return null;let Ht=gt*(pt*Z+Ut*K+ie*Mt);return(Ct>0?Ht<0:Ht>0)?null:this.at(Ht/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vs=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qd=new Ue,Fs=new ks,Bo=new jn,Yd=new B,zo=new B,ko=new B,Vo=new B,Uh=new B,Ho=new B,Zd=new B,Go=new B,bn=class extends Mn{constructor(t=new rn,e=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Uh.fromBufferAttribute(m,t),a?Ho.addScaledVector(Uh,h):Ho.addScaledVector(Uh.sub(e),h))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Bo.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Bo,Yd)===null||Fs.origin.distanceToSquared(Yd)>(t.far-t.near)**2))&&(qd.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(qd),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=u.length;_<E;_++){let f=u[_],d=a[f.materialIndex],L=Math.max(f.start,g.start),N=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let w=L,b=N;w<b;w+=3){let I=o.getX(w),O=o.getX(w+1),S=o.getX(w+2);s=Wo(this,d,t,n,c,h,m,I,O,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let f=_,d=E;f<d;f+=3){let L=o.getX(f),N=o.getX(f+1),w=o.getX(f+2);s=Wo(this,a,t,n,c,h,m,L,N,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=u.length;_<E;_++){let f=u[_],d=a[f.materialIndex],L=Math.max(f.start,g.start),N=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let w=L,b=N;w<b;w+=3){let I=w,O=w+1,S=w+2;s=Wo(this,d,t,n,c,h,m,I,O,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let f=_,d=E;f<d;f+=3){let L=f,N=f+1,w=f+2;s=Wo(this,a,t,n,c,h,m,L,N,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function _g(i,t,e,n,s,r,a,o){let l;if(t.side===Wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ys,o),l===null)return null;Go.copy(o),Go.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:i}}function Wo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,zo),i.getVertexPosition(l,ko),i.getVertexPosition(c,Vo);let h=_g(i,t,e,n,zo,ko,Vo,Zd);if(h){let m=new B;ps.getBarycoord(Zd,zo,ko,Vo,m),s&&(h.uv=ps.getInterpolatedAttribute(s,o,l,c,m,new Nt)),r&&(h.uv1=ps.getInterpolatedAttribute(r,o,l,c,m,new Nt)),a&&(h.normal=ps.getInterpolatedAttribute(a,o,l,c,m,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};ps.getNormal(zo,ko,Vo,u.normal),h.face=u,h.barycoord=m}return h}var Ta=class extends Jn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Sn,h=Sn,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=class extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_r=new Ue,Jd=new Ue,$o=[],Kd=new Gn,xg=new Ue,ca=new bn,ha=new jn,Ca=class extends bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_r),Kd.copy(t.boundingBox).applyMatrix4(_r),this.boundingBox.union(Kd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_r),ha.copy(t.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(ha)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),t.ray.intersectsSphere(ha)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Jd.multiplyMatrices(n,_r),ca.matrixWorld=Jd,ca.raycast(t,$o);for(let a=0,o=$o.length;a<o;a++){let l=$o[a];l.instanceId=r,l.object=this,e.push(l)}$o.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ta(new Float32Array(s*this.count),s,this.count,jl,fi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Os=new jn,vg=new Nt(.5,.5),Xo=new B,Pr=class{constructor(t=new yi,e=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],g=r[7],_=r[8],E=r[9],f=r[10],d=r[11],L=r[12],N=r[13],w=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,d-_,b-L).normalize(),s[1].setComponents(c+a,g+h,d+_,b+L).normalize(),s[2].setComponents(c+o,g+m,d+E,b+N).normalize(),s[3].setComponents(c-o,g-m,d-E,b-N).normalize(),n)s[4].setComponents(l,u,f,w).normalize(),s[5].setComponents(c-l,g-u,d-f,b-w).normalize();else if(s[4].setComponents(c-l,g-u,d-f,b-w).normalize(),e===Mi)s[5].setComponents(c+l,g+u,d+f,b+w).normalize();else if(e===Er)s[5].setComponents(l,u,f,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=vg.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xl=new B,vl=new B,jd=new Ue,ua=new ks,qo=new jn,Fh=new B,Qd=new B,yl=class extends Mn{constructor(t=new rn,e=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xl.fromBufferAttribute(e,s-1),vl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xl.distanceTo(vl);t.setAttribute("lineDistance",new sn(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;jd.copy(s).invert(),ua.copy(t.ray).applyMatrix4(jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let E=g,f=_-1;E<f;E+=c){let d=h.getX(E),L=h.getX(E+1),N=Yo(this,t,ua,l,d,L,E);N&&e.push(N)}if(this.isLineLoop){let E=h.getX(_-1),f=h.getX(g),d=Yo(this,t,ua,l,E,f,_-1);d&&e.push(d)}}else{let g=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let E=g,f=_-1;E<f;E+=c){let d=Yo(this,t,ua,l,E,E+1,E);d&&e.push(d)}if(this.isLineLoop){let E=Yo(this,t,ua,l,_-1,g,_-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(xl.fromBufferAttribute(o,s),vl.fromBufferAttribute(o,r),e.distanceSqToSegment(xl,vl,Fh,Qd)>n)return;Fh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fh);if(!(c<t.near||c>t.far))return{distance:c,point:Qd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ra=class extends yl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Sl=class extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tf=new Ue,qh=new ks,Zo=new jn,Jo=new B,Gs=class extends Mn{constructor(t=new rn,e=new Sl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;tf.copy(s).invert(),qh.copy(t.ray).applyMatrix4(tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=u,E=g;_<E;_++){let f=c.getX(_);Jo.fromBufferAttribute(m,f),ef(Jo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let _=u,E=g;_<E;_++)Jo.fromBufferAttribute(m,_),ef(Jo,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ef(i,t,e,n,s,r,a){let o=qh.distanceSqToPoint(i);if(o<e){let l=new B;qh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ia=class extends Jn{constructor(t=[],e=Ss,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ms=class extends Jn{constructor(t,e,n=Ti,s,r,a,o=Sn,l=Sn,c,h=Ui,m=1){if(h!==Ui&&h!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ml=class extends ms{constructor(t,e=Ti,n=Ss,s,r,a=Sn,o=Sn,l,c=Ui){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Pa=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Lr=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,g=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(m,2));function _(E,f,d,L,N,w,b,I,O,S,C){let k=w/O,$=b/S,Z=w/2,J=b/2,V=I/2,K=O+1,st=S+1,rt=0,Mt=0,at=new B;for(let ht=0;ht<st;ht++){let gt=ht*$-J;for(let Jt=0;Jt<K;Jt++){let Wt=Jt*k-Z;at[E]=Wt*L,at[f]=gt*N,at[d]=V,c.push(at.x,at.y,at.z),at[E]=0,at[f]=0,at[d]=I>0?1:-1,h.push(at.x,at.y,at.z),m.push(Jt/O),m.push(1-ht/S),rt+=1}}for(let ht=0;ht<S;ht++)for(let gt=0;gt<O;gt++){let Jt=u+gt+K*ht,Wt=u+gt+K*(ht+1),Pe=u+(gt+1)+K*(ht+1),we=u+(gt+1)+K*ht;l.push(Jt,Wt,we),l.push(Wt,Pe,we),Mt+=6}o.addGroup(g,Mt,C),g+=Mt,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var La=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],g=[],_=0,E=[],f=n/2,d=0;L(),a===!1&&(t>0&&N(!0),e>0&&N(!1)),this.setIndex(h),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(g,2));function L(){let w=new B,b=new B,I=0,O=(e-t)/n;for(let S=0;S<=r;S++){let C=[],k=S/r,$=k*(e-t)+t;for(let Z=0;Z<=s;Z++){let J=Z/s,V=J*l+o,K=Math.sin(V),st=Math.cos(V);b.x=$*K,b.y=-k*n+f,b.z=$*st,m.push(b.x,b.y,b.z),w.set(K,O,st).normalize(),u.push(w.x,w.y,w.z),g.push(J,1-k),C.push(_++)}E.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let k=E[C][S],$=E[C+1][S],Z=E[C+1][S+1],J=E[C][S+1];(t>0||C!==0)&&(h.push(k,$,J),I+=3),(e>0||C!==r-1)&&(h.push($,Z,J),I+=3)}c.addGroup(d,I,0),d+=I}function N(w){let b=_,I=new Nt,O=new B,S=0,C=w===!0?t:e,k=w===!0?1:-1;for(let Z=1;Z<=s;Z++)m.push(0,f*k,0),u.push(0,k,0),g.push(.5,.5),_++;let $=_;for(let Z=0;Z<=s;Z++){let V=Z/s*l+o,K=Math.cos(V),st=Math.sin(V);O.x=C*st,O.y=f*k,O.z=C*K,m.push(O.x,O.y,O.z),u.push(0,k,0),I.x=K*.5+.5,I.y=st*.5*k+.5,g.push(I.x,I.y),_++}for(let Z=0;Z<s;Z++){let J=b+Z,V=$+Z;w===!0?h.push(V,V+1,J):h.push(V+1,V,J),S+=3}c.addGroup(d,S,w===!0?1:2),d+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,g=(a-h)/u;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new Ue;for(let g=0;g<=t;g++){let _=g/t;s[g]=this.getTangentAt(_,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(xe(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,_))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(xe(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Dr=class extends si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),u=l-this.aX,g=c-this.aY;l=u*h-g*m+this.aX,c=u*m+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Dr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+m)+(l-o)/m;u*=h,g*=h,s(a,o,u,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var nf=new B,sf=new B,Oh=new Tu,Bh=new Tu,zh=new Tu,wl=class extends si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(sf.subVectors(s[0],s[1]).add(s[0]),c=sf);let m=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(nf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nf),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(m),g),E=Math.pow(m.distanceToSquared(u),g),f=Math.pow(u.distanceToSquared(h),g);E<1e-4&&(E=1),_<1e-4&&(_=E),f<1e-4&&(f=E),Oh.initNonuniformCatmullRom(c.x,m.x,u.x,h.x,_,E,f),Bh.initNonuniformCatmullRom(c.y,m.y,u.y,h.y,_,E,f),zh.initNonuniformCatmullRom(c.z,m.z,u.z,h.z,_,E,f)}else this.curveType==="catmullrom"&&(Oh.initCatmullRom(c.x,m.x,u.x,h.x,this.tension),Bh.initCatmullRom(c.y,m.y,u.y,h.y,this.tension),zh.initCatmullRom(c.z,m.z,u.z,h.z,this.tension));return n.set(Oh.calc(l),Bh.calc(l),zh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function yg(i,t){let e=1-i;return e*e*t}function Sg(i,t){return 2*(1-i)*i*t}function Mg(i,t){return i*i*t}function ma(i,t,e,n){return yg(i,t)+Sg(i,e)+Mg(i,n)}function bg(i,t){let e=1-i;return e*e*e*t}function wg(i,t){let e=1-i;return 3*e*e*i*t}function Eg(i,t){return 3*(1-i)*i*i*t}function Tg(i,t){return i*i*i*t}function ga(i,t,e,n,s){return bg(i,t)+wg(i,e)+Eg(i,n)+Tg(i,s)}var Da=class extends si{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(t,s.x,r.x,a.x,o.x),ga(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},El=class extends si{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(t,s.x,r.x,a.x,o.x),ga(t,s.y,r.y,a.y,o.y),ga(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends si{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tl=class extends si{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends si{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(t,s.x,r.x,a.x),ma(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends si{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(t,s.x,r.x,a.x),ma(t,s.y,r.y,a.y),ma(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(rf(o,l.x,c.x,h.x,m.x),rf(o,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Yh=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:wl,CubicBezierCurve:Da,CubicBezierCurve3:El,EllipseCurve:Dr,LineCurve:Na,LineCurve3:Tl,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Al,SplineCurve:Fa}),Cl=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}},Ws=class extends Cl{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Na(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ua(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Da(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Dr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nr=class extends Ws{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}};function Ag(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ip(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Lg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,m=l;for(let u=e;u<s;u+=e){let g=i[u],_=i[u+1];g<o&&(o=g),_<l&&(l=_),g>h&&(h=g),_>m&&(m=_)}c=Math.max(h-o,m-l),c=c!==0?32767/c:0}return Oa(r,a,e,o,l,c,0),a}function ip(i,t,e,n,s){let r;if(s===Gg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=af(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=af(a/n|0,i[a],i[a+1],r);return r&&Ur(r,r.next)&&(za(r),r=r.next),r}function $s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||nn(e.prev,e,e.next)===0)){if(za(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Og(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Rg(i,n,s,r):Cg(i)){t.push(l.i,i.i,c.i),za(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ig($s(i),t),Oa(i,t,e,n,s,r,2)):a===2&&Pg(i,t,e,n,s,r):Oa($s(i),t,e,n,s,r,1);break}}}function Cg(i){let t=i.prev,e=i,n=i.next;if(nn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),m=Math.min(o,l,c),u=Math.max(s,r,a),g=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=m&&_.y<=g&&da(s,o,r,l,a,c,_.x,_.y)&&nn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Rg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(nn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,u=a.y,g=Math.min(o,l,c),_=Math.min(h,m,u),E=Math.max(o,l,c),f=Math.max(h,m,u),d=Zh(g,_,t,e,n),L=Zh(E,f,t,e,n),N=i.prevZ,w=i.nextZ;for(;N&&N.z>=d&&w&&w.z<=L;){if(N.x>=g&&N.x<=E&&N.y>=_&&N.y<=f&&N!==s&&N!==a&&da(o,h,l,m,c,u,N.x,N.y)&&nn(N.prev,N,N.next)>=0||(N=N.prevZ,w.x>=g&&w.x<=E&&w.y>=_&&w.y<=f&&w!==s&&w!==a&&da(o,h,l,m,c,u,w.x,w.y)&&nn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;N&&N.z>=d;){if(N.x>=g&&N.x<=E&&N.y>=_&&N.y<=f&&N!==s&&N!==a&&da(o,h,l,m,c,u,N.x,N.y)&&nn(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;w&&w.z<=L;){if(w.x>=g&&w.x<=E&&w.y>=_&&w.y<=f&&w!==s&&w!==a&&da(o,h,l,m,c,u,w.x,w.y)&&nn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Ig(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ur(n,s)&&rp(n,e,e.next,s)&&Ba(n,s)&&Ba(s,n)&&(t.push(n.i,e.i,s.i),za(e),za(e.next),e=i=s),e=e.next}while(e!==i);return $s(e)}function Pg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kg(a,o)){let l=ap(a,o);a=$s(a,a.next),l=$s(l,l.next),Oa(a,t,e,n,s,r,0),Oa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ip(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(zg(c))}s.sort(Dg);for(let r=0;r<s.length;r++)e=Ng(s[r],e);return e}function Dg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ng(i,t){let e=Ug(i,t);if(!e)return t;let n=ap(e,i);return $s(n,n.next),$s(e,e.next)}function Ug(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&sp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);Ba(e,i)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&Fg(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function Fg(i,t){return nn(i.prev,i,t.prev)<0&&nn(t.next,i,i.next)<0}function Og(i,t,e,n){let s=i;do s.z===0&&(s.z=Zh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Zh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function da(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&sp(i,t,e,n,s,r,a,o)}function kg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vg(i,t)&&(Ba(i,t)&&Ba(t,i)&&Hg(i,t)&&(nn(i.prev,i,t.prev)||nn(i,t.prev,t))||Ur(i,t)&&nn(i.prev,i,i.next)>0&&nn(t.prev,t,t.next)>0)}function nn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function rp(i,t,e,n){let s=jo(nn(i,t,e)),r=jo(nn(i,t,n)),a=jo(nn(e,n,i)),o=jo(nn(e,n,t));return!!(s!==r&&a!==o||s===0&&Ko(i,e,t)||r===0&&Ko(i,n,t)||a===0&&Ko(e,i,n)||o===0&&Ko(e,t,n))}function Ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function Vg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ba(i,t){return nn(i.prev,i,i.next)<0?nn(i,t,i.next)>=0&&nn(i,i.prev,t)>=0:nn(i,t,i.prev)<0||nn(i,i.next,t)<0}function Hg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ap(i,t){let e=Jh(i.i,i.x,i.y),n=Jh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function af(i,t,e,n){let s=Jh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function za(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Kh=class{static triangulate(t,e,n=2){return Ag(t,e,n)}},Bs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];of(t),lf(n,t);let a=t.length;e.forEach(of);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,lf(n,e[l]);let o=Kh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function of(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ka=class i extends rn{constructor(t=new Nr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new sn(s,3)),this.setAttribute("uv",new sn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,L=e.UVGenerator!==void 0?e.UVGenerator:Wg,N,w=!1,b,I,O,S;if(d){N=d.getSpacedPoints(h),w=!0,u=!1;let F=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(h,F),I=new B,O=new B,S=new B}u||(f=0,g=0,_=0,E=0);let C=o.extractPoints(c),k=C.shape,$=C.holes;if(!Bs.isClockWise(k)){k=k.reverse();for(let F=0,vt=$.length;F<vt;F++){let wt=$[F];Bs.isClockWise(wt)&&($[F]=wt.reverse())}}function J(F){let wt=10000000000000001e-36,bt=F[0];for(let Et=1;Et<=F.length;Et++){let te=Et%F.length,$t=F[te],le=$t.x-bt.x,he=$t.y-bt.y,U=le*le+he*he,De=Math.max(Math.abs($t.x),Math.abs($t.y),Math.abs(bt.x),Math.abs(bt.y)),Me=wt*De*De;if(U<=Me){F.splice(te,1),Et--;continue}bt=$t}}J(k),$.forEach(J);let V=$.length,K=k;for(let F=0;F<V;F++){let vt=$[F];k=k.concat(vt)}function st(F,vt,wt){return vt||ce("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(vt,wt)}let rt=k.length;function Mt(F,vt,wt){let bt,Et,te,$t=F.x-vt.x,le=F.y-vt.y,he=wt.x-F.x,U=wt.y-F.y,De=$t*$t+le*le,Me=$t*U-le*he;if(Math.abs(Me)>Number.EPSILON){let R=Math.sqrt(De),x=Math.sqrt(he*he+U*U),Y=vt.x-le/R,et=vt.y+$t/R,ot=wt.x-U/x,At=wt.y+he/x,It=((ot-Y)*U-(At-et)*he)/($t*U-le*he);bt=Y+$t*It-F.x,Et=et+le*It-F.y;let lt=bt*bt+Et*Et;if(lt<=2)return new Nt(bt,Et);te=Math.sqrt(lt/2)}else{let R=!1;$t>Number.EPSILON?he>Number.EPSILON&&(R=!0):$t<-Number.EPSILON?he<-Number.EPSILON&&(R=!0):Math.sign(le)===Math.sign(U)&&(R=!0),R?(bt=-le,Et=$t,te=Math.sqrt(De)):(bt=$t,Et=le,te=Math.sqrt(De/2))}return new Nt(bt/te,Et/te)}let at=[];for(let F=0,vt=K.length,wt=vt-1,bt=F+1;F<vt;F++,wt++,bt++)wt===vt&&(wt=0),bt===vt&&(bt=0),at[F]=Mt(K[F],K[wt],K[bt]);let ht=[],gt,Jt=at.concat();for(let F=0,vt=V;F<vt;F++){let wt=$[F];gt=[];for(let bt=0,Et=wt.length,te=Et-1,$t=bt+1;bt<Et;bt++,te++,$t++)te===Et&&(te=0),$t===Et&&($t=0),gt[bt]=Mt(wt[bt],wt[te],wt[$t]);ht.push(gt),Jt=Jt.concat(gt)}let Wt;if(f===0)Wt=Bs.triangulateShape(K,$);else{let F=[],vt=[];for(let wt=0;wt<f;wt++){let bt=wt/f,Et=g*Math.cos(bt*Math.PI/2),te=_*Math.sin(bt*Math.PI/2)+E;for(let $t=0,le=K.length;$t<le;$t++){let he=st(K[$t],at[$t],te);Ut(he.x,he.y,-Et),bt===0&&F.push(he)}for(let $t=0,le=V;$t<le;$t++){let he=$[$t];gt=ht[$t];let U=[];for(let De=0,Me=he.length;De<Me;De++){let R=st(he[De],gt[De],te);Ut(R.x,R.y,-Et),bt===0&&U.push(R)}bt===0&&vt.push(U)}}Wt=Bs.triangulateShape(F,vt)}let Pe=Wt.length,we=_+E;for(let F=0;F<rt;F++){let vt=u?st(k[F],Jt[F],we):k[F];w?(O.copy(b.normals[0]).multiplyScalar(vt.x),I.copy(b.binormals[0]).multiplyScalar(vt.y),S.copy(N[0]).add(O).add(I),Ut(S.x,S.y,S.z)):Ut(vt.x,vt.y,0)}for(let F=1;F<=h;F++)for(let vt=0;vt<rt;vt++){let wt=u?st(k[vt],Jt[vt],we):k[vt];w?(O.copy(b.normals[F]).multiplyScalar(wt.x),I.copy(b.binormals[F]).multiplyScalar(wt.y),S.copy(N[F]).add(O).add(I),Ut(S.x,S.y,S.z)):Ut(wt.x,wt.y,m/h*F)}for(let F=f-1;F>=0;F--){let vt=F/f,wt=g*Math.cos(vt*Math.PI/2),bt=_*Math.sin(vt*Math.PI/2)+E;for(let Et=0,te=K.length;Et<te;Et++){let $t=st(K[Et],at[Et],bt);Ut($t.x,$t.y,m+wt)}for(let Et=0,te=$.length;Et<te;Et++){let $t=$[Et];gt=ht[Et];for(let le=0,he=$t.length;le<he;le++){let U=st($t[le],gt[le],bt);w?Ut(U.x,U.y+N[h-1].y,N[h-1].x+wt):Ut(U.x,U.y,m+wt)}}}Te(),nt();function Te(){let F=s.length/3;if(u){let vt=0,wt=rt*vt;for(let bt=0;bt<Pe;bt++){let Et=Wt[bt];ie(Et[2]+wt,Et[1]+wt,Et[0]+wt)}vt=h+f*2,wt=rt*vt;for(let bt=0;bt<Pe;bt++){let Et=Wt[bt];ie(Et[0]+wt,Et[1]+wt,Et[2]+wt)}}else{for(let vt=0;vt<Pe;vt++){let wt=Wt[vt];ie(wt[2],wt[1],wt[0])}for(let vt=0;vt<Pe;vt++){let wt=Wt[vt];ie(wt[0]+rt*h,wt[1]+rt*h,wt[2]+rt*h)}}n.addGroup(F,s.length/3-F,0)}function nt(){let F=s.length/3,vt=0;pt(K,vt),vt+=K.length;for(let wt=0,bt=$.length;wt<bt;wt++){let Et=$[wt];pt(Et,vt),vt+=Et.length}n.addGroup(F,s.length/3-F,1)}function pt(F,vt){let wt=F.length;for(;--wt>=0;){let bt=wt,Et=wt-1;Et<0&&(Et=F.length-1);for(let te=0,$t=h+f*2;te<$t;te++){let le=rt*te,he=rt*(te+1),U=vt+bt+le,De=vt+Et+le,Me=vt+Et+he,R=vt+bt+he;Ct(U,De,Me,R)}}}function Ut(F,vt,wt){l.push(F),l.push(vt),l.push(wt)}function ie(F,vt,wt){Ht(F),Ht(vt),Ht(wt);let bt=s.length/3,Et=L.generateTopUV(n,s,bt-3,bt-2,bt-1);Le(Et[0]),Le(Et[1]),Le(Et[2])}function Ct(F,vt,wt,bt){Ht(F),Ht(vt),Ht(bt),Ht(vt),Ht(wt),Ht(bt);let Et=s.length/3,te=L.generateSideWallUV(n,s,Et-6,Et-3,Et-2,Et-1);Le(te[0]),Le(te[1]),Le(te[3]),Le(te[1]),Le(te[2]),Le(te[3])}function Ht(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Le(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $g(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yh[s.type]().fromJSON(s)),new i(n,t.options)}},Wg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],u=t[s*3],g=t[s*3+1],_=t[s*3+2],E=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-m),new Nt(u,1-_),new Nt(E,1-d)]:[new Nt(o,1-l),new Nt(h,1-m),new Nt(g,1-_),new Nt(f,1-d)]}};function $g(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Va=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,u=e/l,g=[],_=[],E=[],f=[];for(let d=0;d<h;d++){let L=d*u-a;for(let N=0;N<c;N++){let w=N*m-r;_.push(w,-L,0),E.push(0,0,1),f.push(N/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let L=0;L<o;L++){let N=L+c*d,w=L+c*(d+1),b=L+1+c*(d+1),I=L+1+c*d;g.push(N,w,I),g.push(w,b,I)}this.setIndex(g),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(E,3)),this.setAttribute("uv",new sn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ha=class extends rn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new B,r=new B;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let m=l[c],u=m.start,g=m.count;for(let _=u,E=u+g;_<E;_+=3)for(let f=0;f<3;f++){let d=o.getX(_+f),L=o.getX(_+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,L),cf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,m),cf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function cf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Zs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hf(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Bn(i){let t={};for(let e=0;e<i.length;e++){let n=Zs(i[e]);for(let s in n)t[s]=n[s]}return t}function hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var ao={clone:Zs,merge:Bn},qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new He().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Rl=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ga=class extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=$l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Il=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function kh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=t,o=2*e-n;break;case Xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:a=t,l=2*n-e;break;case Xh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),E=_*_,f=E*_,d=-u*f+2*u*E-u*_,L=(1+u)*f+(-1.5-2*u)*E+(-.5+u)*_+1,N=(-1-g)*f+(1.5+g)*E+.5*_,w=g*f-g*E;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+L*a[c+b]+N*a[l+b]+w*a[m+b];return r}},Dl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},Nl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ul=class extends gs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-e)/(s-e),E=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*E+a[l+f]*_;return r}let u=o*2,g=t-1;for(let _=0;_!==o;++_){let E=a[c+_],f=a[l+_],d=g*u+_*2,L=m[d],N=m[d+1],w=t*u+_*2,b=h[w],I=h[w+1],O=Jg(n,e,L,b,s);r[_]=op(O,E,N,I,f)}return r}};function op(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=op(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Zg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),kh(t.settings)&&(n.settings={inTangents:xr(t.settings.inTangents,Array),outTangents:xr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ul(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _a:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break;case Gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return nl;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;kh(this.settings)&&(uf(this.settings.inTangents,t),uf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Bm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,u=m-n,g=m+n;for(let _=0;_!==n;++_){let E=e[m+_];if(E!==e[u+_]||E!==e[g+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let g=0;g!==n;++g)e[u+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,kh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=fl;var _s=class extends ri{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=_a;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Fl.prototype.ValueTypeName="color";var Ol=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Ol.prototype.ValueTypeName="number";var Bl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wa=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ri{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=_a;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};zl.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let g=c[m],_=c[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lp=new kl,Vl=class{constructor(t){this.manager=t!==void 0?t:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var $a=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xa=class extends $a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Vh=new Ue,df=new B,ff=new B,Hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Vh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Er||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qo=new B,tl=new Oi,Li=new B,qa=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qo,tl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,tl,Li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qo,tl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,tl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new B,pf=new Nt,mf=new Nt,On=class extends qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fr=class extends qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jh=class extends Hl{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends $a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Za=class extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var vr=-90,yr=1,Gl=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(vr,yr,t,e);s.layers=this.layers,this.add(s);let r=new On(vr,yr,t,e);r.layers=this.layers,this.add(r);let a=new On(vr,yr,t,e);a.layers=this.layers,this.add(a);let o=new On(vr,yr,t,e);o.layers=this.layers,this.add(o);let l=new On(vr,yr,t,e);l.layers=this.layers,this.add(l);let c=new On(vr,yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Wl=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cu="\\[\\]\\.:\\/",Kg=new RegExp("["+Cu+"]","g"),Ru="[^"+Cu+"]",jg="[^"+Cu.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Ru),t0=/(WCOD+)?/.source.replace("WCOD",jg),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),i0=new RegExp("^"+Qg+t0+e0+n0+"$"),s0=["material","materials","bones","map"],Qh=class{constructor(t,e,n){let s=n||Je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kg,"")}static parseTrackName(t){let e=i0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);s0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=Qh;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vS=new Float32Array(1);var vs=class extends _l{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var gf=new Ue,Xs=class{constructor(t,e,n=0,s=1/0){this.ray=new ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gf),this}intersectObject(t,e=!0,n=[]){return tu(t,this,n,e),n.sort(_f),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tu(t[s],this,n,e);return n.sort(_f),n}};function _f(i,t){return i.distance-t.distance}function tu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)tu(r[a],t,e,!0)}}var eu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var xf=new B,el=new B,Sr=new B,Mr=new B,Hh=new B,r0=new B,a0=new B,Ja=class{constructor(t=new B,e=new B){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){xf.subVectors(t,this.start),el.subVectors(this.end,this.start);let n=el.dot(el);if(n===0)return 0;let r=el.dot(xf)/n;return e&&(r=xe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=r0,n=a0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Sr.subVectors(c,o),Mr.subVectors(h,l),Hh.subVectors(o,l);let m=Sr.dot(Sr),u=Mr.dot(Mr),g=Mr.dot(Hh);if(m<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/u,a=xe(a,0,1);else{let _=Sr.dot(Hh);if(u<=s)a=0,r=xe(-_/m,0,1);else{let E=Sr.dot(Mr),f=m*u-E*E;f!==0?r=xe((E*g-_*u)/f,0,1):r=0,a=(E*r+g)/u,a<0?(a=0,r=xe(-_/m,0,1)):a>1&&(a=1,r=xe((E-_)/m,0,1))}}return e.copy(o).addScaledVector(Sr,r),n.copy(l).addScaledVector(Mr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Iu(i,t,e,n){let s=o0(n);switch(e){case yu:return i*t;case jl:return i*t/s.components*s.byteLength;case Ql:return i*t/s.components*s.byteLength;case ws:return i*t*2/s.components*s.byteLength;case tc:return i*t*2/s.components*s.byteLength;case Su:return i*t*3/s.components*s.byteLength;case pi:return i*t*4/s.components*s.byteLength;case ec:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(t,8)/2;case ac:case oc:case cc:case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lc:case so:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tc:case Ac:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ro:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(i){switch(i){case Qn:case gu:return{byteLength:1,components:1};case zr:case _u:case Ai:return{byteLength:2,components:1};case Jl:case Kl:return{byteLength:2,components:4};case Ti:case Zl:case fi:return{byteLength:4,components:1};case xu:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ip(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function c0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((g,_)=>g.start-_.start);let u=0;for(let g=1;g<m.length;g++){let _=m[u],E=m[g];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,m[u]=E)}m.length=u+1;for(let g=0,_=m.length;g<_;g++){let E=m[g];i.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,l_=`uniform sampler2D dfgLUT;
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,__=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,S_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,N_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,_x=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,vx=`#define DISTANCE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Rx=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Px=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Dx=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Ux=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,Ox=`#define TOON
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
}`,Bx=`uniform float size;
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:x0,batching_vertex:v0,begin_vertex:y0,beginnormal_vertex:S0,bsdfs:M0,iridescence_fragment:b0,bumpmap_pars_fragment:w0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:C0,color_fragment:R0,color_pars_fragment:I0,color_pars_vertex:P0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:U0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:k0,colorspace_pars_fragment:V0,envmap_fragment:H0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:n_,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:Z0,fog_pars_fragment:J0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:j0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:t_,lights_pars_begin:e_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:r_,lights_phong_pars_fragment:a_,lights_physical_fragment:o_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,lightprobes_pars_fragment:d_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:__,map_pars_fragment:x_,map_particle_fragment:v_,map_particle_pars_fragment:y_,metalnessmap_fragment:S_,metalnessmap_pars_fragment:M_,morphinstance_vertex:b_,morphcolor_vertex:w_,morphnormal_vertex:E_,morphtarget_pars_vertex:T_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:R_,normal_pars_fragment:I_,normal_pars_vertex:P_,normal_vertex:L_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:N_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:O_,opaque_fragment:B_,packing:z_,premultiplied_alpha_fragment:k_,project_vertex:V_,dithering_fragment:H_,dithering_pars_fragment:G_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:J_,skinning_pars_vertex:K_,skinning_vertex:j_,skinnormal_vertex:Q_,specularmap_fragment:tx,specularmap_pars_fragment:ex,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ax,uv_pars_vertex:ox,uv_vertex:lx,worldpos_vertex:cx,background_vert:hx,background_frag:ux,backgroundCube_vert:dx,backgroundCube_frag:fx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:_x,distance_vert:xx,distance_frag:vx,equirect_vert:yx,equirect_frag:Sx,linedashed_vert:Mx,linedashed_frag:bx,meshbasic_vert:wx,meshbasic_frag:Ex,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Cx,meshmatcap_frag:Rx,meshnormal_vert:Ix,meshnormal_frag:Px,meshphong_vert:Lx,meshphong_frag:Dx,meshphysical_vert:Nx,meshphysical_frag:Ux,meshtoon_vert:Fx,meshtoon_frag:Ox,points_vert:Bx,points_frag:zx,shadow_vert:kx,shadow_frag:Vx,sprite_vert:Hx,sprite_frag:Gx},Bt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},$n={basic:{uniforms:Bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Bn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Bn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Bn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Bn([Bt.points,Bt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Bn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Bn([Bt.common,Bt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Bn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Bn([Bt.sprite,Bt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:Bn([Bt.common,Bt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:Bn([Bt.lights,Bt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};$n.physical={uniforms:Bn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};var Uc={r:0,b:0,g:0},Wx=new Ue,Pp=new ge;Pp.set(-1,0,0,0,1,0,0,0,1);function $x(i,t,e,n,s,r){let a=new oe(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function g(L){let N=L.isScene===!0?L.background:null;if(N&&N.isTexture){let w=L.backgroundBlurriness>0;N=t.get(N,w)}return N}function _(L){let N=!1,w=g(L);w===null?f(a,o):w&&w.isColor&&(f(w,1),N=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(L,N){let w=g(N);w&&(w.isCubeTexture||w.mapping===ja)?(c===void 0&&(c=new bn(new Lr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Zs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(N.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pp),c.material.toneMapped=Re.getTransfer(w.colorSpace)!==Ve,(h!==w||m!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,m=w.version,u=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new bn(new Va(2,2),new wn({name:"BackgroundMaterial",uniforms:Zs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=Re.getTransfer(w.colorSpace)!==Ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||m!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,m=w.version,u=i.toneMapping),l.layers.enableAll(),L.unshift(l,l.geometry,l.material,0,0,null))}function f(L,N){L.getRGB(Uc,Au(i)),e.buffers.color.setClear(Uc.r,Uc.g,Uc.b,N,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(L,N=1){a.set(L),o=N,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(L){o=L,f(a,o)},render:_,addToRenderList:E,dispose:d}}function Xx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o($,Z,J,V,K){let st=!1,rt=m($,V,J,Z);r!==rt&&(r=rt,c(r.object)),st=g($,V,J,K),st&&_($,V,J,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,w($,Z,J,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c($){return i.bindVertexArray($)}function h($){return i.deleteVertexArray($)}function m($,Z,J,V){let K=V.wireframe===!0,st=n[Z.id];st===void 0&&(st={},n[Z.id]=st);let rt=$.isInstancedMesh===!0?$.id:0,Mt=st[rt];Mt===void 0&&(Mt={},st[rt]=Mt);let at=Mt[J.id];at===void 0&&(at={},Mt[J.id]=at);let ht=at[K];return ht===void 0&&(ht=u(l()),at[K]=ht),ht}function u($){let Z=[],J=[],V=[];for(let K=0;K<e;K++)Z[K]=0,J[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:V,object:$,attributes:{},index:null}}function g($,Z,J,V){let K=r.attributes,st=Z.attributes,rt=0,Mt=J.getAttributes();for(let at in Mt)if(Mt[at].location>=0){let gt=K[at],Jt=st[at];if(Jt===void 0&&(at==="instanceMatrix"&&$.instanceMatrix&&(Jt=$.instanceMatrix),at==="instanceColor"&&$.instanceColor&&(Jt=$.instanceColor)),gt===void 0||gt.attribute!==Jt||Jt&&gt.data!==Jt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==V}function _($,Z,J,V){let K={},st=Z.attributes,rt=0,Mt=J.getAttributes();for(let at in Mt)if(Mt[at].location>=0){let gt=st[at];gt===void 0&&(at==="instanceMatrix"&&$.instanceMatrix&&(gt=$.instanceMatrix),at==="instanceColor"&&$.instanceColor&&(gt=$.instanceColor));let Jt={};Jt.attribute=gt,gt&&gt.data&&(Jt.data=gt.data),K[at]=Jt,rt++}r.attributes=K,r.attributesNum=rt,r.index=V}function E(){let $=r.newAttributes;for(let Z=0,J=$.length;Z<J;Z++)$[Z]=0}function f($){d($,0)}function d($,Z){let J=r.newAttributes,V=r.enabledAttributes,K=r.attributeDivisors;J[$]=1,V[$]===0&&(i.enableVertexAttribArray($),V[$]=1),K[$]!==Z&&(i.vertexAttribDivisor($,Z),K[$]=Z)}function L(){let $=r.newAttributes,Z=r.enabledAttributes;for(let J=0,V=Z.length;J<V;J++)Z[J]!==$[J]&&(i.disableVertexAttribArray(J),Z[J]=0)}function N($,Z,J,V,K,st,rt){rt===!0?i.vertexAttribIPointer($,Z,J,K,st):i.vertexAttribPointer($,Z,J,V,K,st)}function w($,Z,J,V){E();let K=V.attributes,st=J.getAttributes(),rt=Z.defaultAttributeValues;for(let Mt in st){let at=st[Mt];if(at.location>=0){let ht=K[Mt];if(ht===void 0&&(Mt==="instanceMatrix"&&$.instanceMatrix&&(ht=$.instanceMatrix),Mt==="instanceColor"&&$.instanceColor&&(ht=$.instanceColor)),ht!==void 0){let gt=ht.normalized,Jt=ht.itemSize,Wt=t.get(ht);if(Wt===void 0)continue;let Pe=Wt.buffer,we=Wt.type,Te=Wt.bytesPerElement,nt=we===i.INT||we===i.UNSIGNED_INT||ht.gpuType===Zl;if(ht.isInterleavedBufferAttribute){let pt=ht.data,Ut=pt.stride,ie=ht.offset;if(pt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<at.locationSize;Ct++)d(at.location+Ct,pt.meshPerAttribute);$.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ct=0;Ct<at.locationSize;Ct++)f(at.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ct=0;Ct<at.locationSize;Ct++)N(at.location+Ct,Jt/at.locationSize,we,gt,Ut*Te,(ie+Jt/at.locationSize*Ct)*Te,nt)}else{if(ht.isInstancedBufferAttribute){for(let pt=0;pt<at.locationSize;pt++)d(at.location+pt,ht.meshPerAttribute);$.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<at.locationSize;pt++)f(at.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let pt=0;pt<at.locationSize;pt++)N(at.location+pt,Jt/at.locationSize,we,gt,Jt*Te,Jt/at.locationSize*pt*Te,nt)}}else if(rt!==void 0){let gt=rt[Mt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(at.location,gt);break;case 3:i.vertexAttrib3fv(at.location,gt);break;case 4:i.vertexAttrib4fv(at.location,gt);break;default:i.vertexAttrib1fv(at.location,gt)}}}}L()}function b(){C();for(let $ in n){let Z=n[$];for(let J in Z){let V=Z[J];for(let K in V){let st=V[K];for(let rt in st)h(st[rt].object),delete st[rt];delete V[K]}}delete n[$]}}function I($){if(n[$.id]===void 0)return;let Z=n[$.id];for(let J in Z){let V=Z[J];for(let K in V){let st=V[K];for(let rt in st)h(st[rt].object),delete st[rt];delete V[K]}}delete n[$.id]}function O($){for(let Z in n){let J=n[Z];for(let V in J){let K=J[V];if(K[$.id]===void 0)continue;let st=K[$.id];for(let rt in st)h(st[rt].object),delete st[rt];delete K[$.id]}}}function S($){for(let Z in n){let J=n[Z],V=$.isInstancedMesh===!0?$.id:0,K=J[V];if(K!==void 0){for(let st in K){let rt=K[st];for(let Mt in rt)h(rt[Mt].object),delete rt[Mt];delete K[st]}delete J[V],Object.keys(J).length===0&&delete n[Z]}}}function C(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:k,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:f,disableUnusedAttributes:L}}function qx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let g=0;g<h;g++)u+=c[g];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Yx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(O){return!(O!==pi&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){let S=O===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Qn&&O!==fi&&!S&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:w,maxSamples:b,samples:I}}function Zx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yi,o=new ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let g=m.length!==0||u||n!==0||s;return s=u,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,g){let _=m.clippingPlanes,E=m.clipIntersection,f=m.clipShadows,d=i.get(m);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let L=r?0:n,N=L*4,w=d.clippingState||null;l.value=w,w=h(_,u,N,g);for(let b=0;b!==N;++b)w[b]=e[b];d.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,g,_){let E=m!==null?m.length:0,f=null;if(E!==0){if(f=l.value,_!==!0||f===null){let d=g+E*4,L=u.matrixWorldInverse;o.getNormalMatrix(L),(f===null||f.length<d)&&(f=new Float32Array(d));for(let N=0,w=g;N!==E;++N,w+=4)a.copy(m[N]).applyMatrix4(L,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,f}}var Hr=4,Jx=6,Kx=20,jx=256,oo=new Fr,cp=new oe,Pu=null,Lu=0,Du=0,Nu=!1,Qx=new B,Js=new B,Oc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Qx}=r;Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pu,Lu,Du),this._renderer.xr.enabled=Nu,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ai,format:pi,colorSpace:xa,depthBuffer:!1},s=hp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tv(r)),this._blurMaterial=nv(r,t,e),this._ggxMaterial=ev(r,t,e)}return s}_compileMaterial(t){let e=new bn(new rn,t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s,r){let l=new On(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,g=m.toneMapping;m.getClearColor(cp),m.toneMapping=Ei,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Lr,new Vs({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,f=E.material,d=!1,L=t.background;L?L.isColor&&(f.color.copy(L),t.background=null,d=!0):(f.color.copy(cp),d=!0);for(let N=0;N<6;N++){let w=N%3;w===0?(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[N],r.y,r.z)):w===1?(l.up.set(0,0,c[N]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[N],r.z)):(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[N]));let b=this._cubeSize;Vr(s,w*b,N>2?b:0,b,b),m.setRenderTarget(s),d&&m.render(E,l),m.render(t,l)}m.toneMapping=g,m.autoClear=u,t.background=L}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ss||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),u=c*1.25,g=m*u,{_lodMax:_}=this,E=this._sizeLods[n],f=3*E*(n>_-Hr?n-_+Hr:0),d=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,Vr(r,f,d,3*E,2*E),s.setRenderTarget(r),s.render(o,oo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Vr(t,f,d,3*E,2*E),s.setRenderTarget(t),s.render(o,oo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),u=4*(this._cubeSize-h);Vr(e,m,u,3*h,2*h),a.setRenderTarget(e),a.render(l,oo)}};function tv(i){let t=[],e=[],n=i,s=i-Hr+1+Jx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,u=6,g=3,_=new Float32Array(g*u*m),E=new Float32Array(g*u*m);for(let d=0;d<m;d++){let L=d%3*2/3-1,N=d>2?0:-1,w=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];_.set(w,g*u*d);for(let b=0;b<u;b++){let I=h[b*2]*2-1,O=h[b*2+1]*2-1;d===0?Js.set(1,O,I):d===1?Js.set(-I,1,-O):d===2?Js.set(-I,O,1):d===3?Js.set(-1,O,-I):d===4?Js.set(-I,-1,O):Js.set(I,O,-1),Js.toArray(E,(d*u+b)*g)}}let f=new rn;f.setAttribute("position",new Xe(_,g)),f.setAttribute("outputDirection",new Xe(E,g)),e.push(new bn(f,null)),n>Hr&&n--}return{lodMeshes:e,sizeLods:t}}function hp(i,t,e){let n=new Kn(i,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ev(i,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function nv(i,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function up(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function dp(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ia(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lr(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:ki});r.uniforms.tEquirect.value=e;let a=new bn(s,r),o=e.minFilter;return e.minFilter===Ms&&(e.minFilter=An),new Gl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function iv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===Xl||g===ql)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let E=new Bc(_.height);return E.fromEquirectangularTexture(i,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let g=u.mapping,_=g===Xl||g===ql,E=g===Ss||g===Ys;if(_||E){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Oc(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let L=u.image;return _&&L&&L.height>0||E&&L&&l(L)?(n===null&&(n=new Oc(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,g){return g===Xl?u.mapping=Ss:g===ql&&(u.mapping=Ys),u}function l(u){let g=0,_=6;for(let E=0;E<_;E++)u[E]!==void 0&&g++;return g===_}function c(u){let g=u.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function sv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,t,e,n){let s={},r=new WeakMap;function a(m){let u=m.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let g=r.get(u);g&&(t.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(m){let u=m.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER)}function c(m){let u=[],g=m.index,_=m.attributes.position,E=0;if(_===void 0)return;if(g!==null){let L=g.array;E=g.version;for(let N=0,w=L.length;N<w;N+=3){let b=L[N+0],I=L[N+1],O=L[N+2];u.push(b,I,I,O,O,b)}}else{let L=_.array;E=_.version;for(let N=0,w=L.length/3-1;N<w;N+=3){let b=N+0,I=N+1,O=N+2;u.push(b,I,I,O,O,b)}}let f=new(_.count>=65535?Ea:wa)(u,1);f.version=E;let d=r.get(m);d&&t.remove(d),r.set(m,f)}function h(m){let u=r.get(m);if(u){let g=m.index;g!==null&&u.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function av(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*a,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let E=0;for(let f=0;f<g;f++)E+=u[f];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ov(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lv(i,t,e){let n=new WeakMap,s=new He;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let C=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],L=o.morphAttributes.color||[],N=0;g===!0&&(N=1),_===!0&&(N=2),E===!0&&(N=3);let w=o.attributes.position.count*N,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let I=new Float32Array(w*b*4*m),O=new Ma(I,w,b,m);O.type=fi,O.needsUpdate=!0;let S=N*4;for(let k=0;k<m;k++){let $=f[k],Z=d[k],J=L[k],V=w*b*4*k;for(let K=0;K<$.count;K++){let st=K*S;g===!0&&(s.fromBufferAttribute($,K),I[V+st+0]=s.x,I[V+st+1]=s.y,I[V+st+2]=s.z,I[V+st+3]=0),_===!0&&(s.fromBufferAttribute(Z,K),I[V+st+4]=s.x,I[V+st+5]=s.y,I[V+st+6]=s.z,I[V+st+7]=0),E===!0&&(s.fromBufferAttribute(J,K),I[V+st+8]=s.x,I[V+st+9]=s.y,I[V+st+10]=s.z,I[V+st+11]=J.itemSize===4?s.w:1)}}u={count:m,texture:O,size:new Nt(w,b)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let E=0;E<c.length;E++)g+=c[E];let _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var hv={[lu]:"LINEAR_TONE_MAPPING",[cu]:"REINHARD_TONE_MAPPING",[hu]:"CINEON_TONE_MAPPING",[uu]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function uv(i,t,e,n,s,r){let a=new Kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rn;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));let h=new Rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new bn(c,h),u=new Fr(-1,1,1,-1,0,1),g=null,_=null,E=!1,f,d=null,L=[],N=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let I=0;I<L.length;I++){let O=L[I];O.setSize&&O.setSize(w,b)}},this.setEffects=function(w){L=w,N=L.length>0&&L[0].isRenderPass===!0;let b=a.width,I=a.height;L.length>0&&o===null&&(o=new Kn(b,I,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(b,I,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<L.length;O++){let S=L[O];S.setSize&&S.setSize(b,I)}},this.begin=function(w,b){if(E||w.toneMapping===Ei&&L.length===0)return!1;if(d=b,b!==null){let I=b.width,O=b.height;(a.width!==I||a.height!==O)&&this.setSize(I,O)}return N===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=Ei,!0},this.hasRenderPass=function(){return N},this.end=function(w,b){w.toneMapping=f,E=!0;let I=a,O=o;for(let S=0;S<L.length;S++){let C=L[S];C.enabled!==!1&&(C.render(w,O,I,b),C.needsSwap!==!1&&(I=O,O=O===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,h.defines={},Re.getTransfer(g)===Ve&&(h.defines.SRGB_TRANSFER="");let S=hv[_];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,w.setRenderTarget(d),w.render(m,u),d=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Lp=new Jn,Ou=new ms(1,1),Dp=new Ma,Np=new gl,Up=new Ia,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function Wr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fp[s];if(r===void 0&&(r=new Float32Array(s),fp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vc(i,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function gv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;_p.set(n),i.uniformMatrix2fv(this.addr,!1,_p),gn(e,n)}}function _v(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),gn(e,n)}}function xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),gn(e,n)}}function vv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function bv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function Av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ou.compareFunction=e.isReversedDepthBuffer()?Nc:Dc,r=Ou):r=Lp,e.setTexture2D(t||r,s)}function Cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Np,s)}function Rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Up,s)}function Iv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dp,s)}function Pv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return _v;case 35676:return xv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return bv;case 36294:return wv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Lv(i,t){i.uniform1fv(this.addr,t)}function Dv(i,t){let e=Wr(t,this.size,2);i.uniform2fv(this.addr,e)}function Nv(i,t){let e=Wr(t,this.size,3);i.uniform3fv(this.addr,e)}function Uv(i,t){let e=Wr(t,this.size,4);i.uniform4fv(this.addr,e)}function Fv(i,t){let e=Wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ov(i,t){let e=Wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bv(i,t){let e=Wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zv(i,t){i.uniform1iv(this.addr,t)}function kv(i,t){i.uniform2iv(this.addr,t)}function Vv(i,t){i.uniform3iv(this.addr,t)}function Hv(i,t){i.uniform4iv(this.addr,t)}function Gv(i,t){i.uniform1uiv(this.addr,t)}function Wv(i,t){i.uniform2uiv(this.addr,t)}function $v(i,t){i.uniform3uiv(this.addr,t)}function Xv(i,t){i.uniform4uiv(this.addr,t)}function qv(i,t,e){let n=this.cache,s=t.length,r=Vc(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ou:a=Lp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Yv(i,t,e){let n=this.cache,s=t.length,r=Vc(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Np,r[a])}function Zv(i,t,e){let n=this.cache,s=t.length,r=Vc(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Up,r[a])}function Jv(i,t,e){let n=this.cache,s=t.length,r=Vc(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dp,r[a])}function Kv(i){switch(i){case 5126:return Lv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Wv;case 36295:return $v;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Jv}}var Bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pv(e.type)}},zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kv(e.type)}},ku=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Uu=/(\w+)(\])?(\[|\.)?/g;function xp(i,t){i.seq.push(t),i.map[t.id]=t}function jv(i,t,e){let n=i.name,s=n.length;for(Uu.lastIndex=0;;){let r=Uu.exec(n),a=Uu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xp(e,c===void 0?new Bu(o,i,t):new zu(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new ku(o),xp(e,m)),e=m}}}var Gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);jv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qv=37297,ty=0;function ey(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var yp=new ge;function ny(i){Re._getMatrix(yp,Re.workingColorSpace,i);let t=`mat3( ${yp.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(i)){case va:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ey(i.getShaderSource(t),o)}else return r}function iy(i,t){let e=ny(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var sy={[lu]:"Linear",[cu]:"Reinhard",[hu]:"Cineon",[uu]:"ACESFilmic",[fu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function ry(i,t){let e=sy[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fc=new B;function ay(){Re.getLuminanceCoefficients(Fc);let i=Fc.x.toFixed(4),t=Fc.y.toFixed(4),e=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function ly(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function co(i){return i!==""}function Mp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(i){return i.replace(hy,dy)}var uy=new Map;function dy(i,t){let e=be[t];if(e===void 0){let n=uy.get(t);if(n!==void 0)e=be[n],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vu(e)}var fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(i){return i.replace(fy,py)}function py(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ep(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var my={[Ka]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function gy(i){return my[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _y={[Ss]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function xy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_y[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var vy={[Ys]:"ENVMAP_MODE_REFRACTION"};function yy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sy={[$l]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function My(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[i.combine]||"ENVMAP_BLENDING_NONE"}function by(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=gy(e),c=xy(e),h=yy(e),m=My(e),u=by(e),g=oy(e),_=ly(r),E=s.createProgram(),f,d,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(co).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(co).join(`
`),d.length>0&&(d+=`
`)):(f=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),d=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?be.tonemapping_pars_fragment:"",e.toneMapping!==Ei?ry("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,iy("linearToOutputTexel",e.outputColorSpace),ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),a=Vu(a),a=Mp(a,e),a=bp(a,e),o=Vu(o),o=Mp(o,e),o=bp(o,e),a=wp(a),o=wp(o),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let N=L+f+a,w=L+d+o,b=vp(s,s.VERTEX_SHADER,N),I=vp(s,s.FRAGMENT_SHADER,w);s.attachShader(E,b),s.attachShader(E,I),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O($){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(I)||"",K=Z.trim(),st=J.trim(),rt=V.trim(),Mt=!0,at=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,b,I);else{let ht=Sp(s,b,"vertex"),gt=Sp(s,I,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+K+`
`+ht+`
`+gt)}else K!==""?ae("WebGLProgram: Program Info Log:",K):(st===""||rt==="")&&(at=!1);at&&($.diagnostics={runnable:Mt,programLog:K,vertexShader:{log:st,prefix:f},fragmentShader:{log:rt,prefix:d}})}s.deleteShader(b),s.deleteShader(I),S=new Gr(s,E),C=cy(s,E)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(E,Qv)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ty++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=I,this}var Ey=0,Hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gu(t),e.set(t,n)),n}},Gu=class{constructor(t){this.id=Ey++,this.code=t,this.usedTimes=0}};function Ty(i){return i===ws||i===so||i===ro}function Ay(i,t,e,n,s,r){let a=new Rr,o=new Hu,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function E(S,C,k,$,Z,J){let V=$.fog,K=Z.geometry,st=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?$.environment:null,rt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Mt=t.get(S.envMap||st,rt),at=Mt&&Mt.mapping===ja?Mt.image.height:null,ht=g[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&ae("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Jt=gt!==void 0?gt.length:0,Wt=0;K.morphAttributes.position!==void 0&&(Wt=1),K.morphAttributes.normal!==void 0&&(Wt=2),K.morphAttributes.color!==void 0&&(Wt=3);let Pe,we,Te,nt;if(ht){let Be=$n[ht];Pe=Be.vertexShader,we=Be.fragmentShader}else{Pe=S.vertexShader,we=S.fragmentShader;let Be=o.getVertexShaderStage(S),ze=o.getFragmentShaderStage(S);o.update(S,Be,ze),Te=Be.id,nt=ze.id}let pt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),ie=Z.isInstancedMesh===!0,Ct=Z.isBatchedMesh===!0,Ht=!!S.map,Le=!!S.matcap,F=!!Mt,vt=!!S.aoMap,wt=!!S.lightMap,bt=!!S.bumpMap&&S.wireframe===!1,Et=!!S.normalMap,te=!!S.displacementMap,$t=!!S.emissiveMap,le=!!S.metalnessMap,he=!!S.roughnessMap,U=S.anisotropy>0,De=S.clearcoat>0,Me=S.dispersion>0,R=S.retroreflectivity>0,x=S.iridescence>0,Y=S.sheen>0,et=S.transmission>0,ot=U&&!!S.anisotropyMap,At=De&&!!S.clearcoatMap,It=De&&!!S.clearcoatNormalMap,lt=De&&!!S.clearcoatRoughnessMap,mt=x&&!!S.iridescenceMap,Ft=x&&!!S.iridescenceThicknessMap,Xt=Y&&!!S.sheenColorMap,Lt=Y&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,jt=!!S.specularColorMap,ne=!!S.specularIntensityMap,de=et&&!!S.transmissionMap,W=et&&!!S.thicknessMap,Tt=!!S.gradientMap,ut=!!S.alphaMap,Rt=S.alphaTest>0,zt=!!S.alphaHash,xt=!!S.extensions,Qt=Ei;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Zt={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:we,defines:S.defines,customVertexShaderID:Te,customFragmentShaderID:nt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&Z._colorsTexture!==null,instancing:ie,instancingColor:ie&&Z.instanceColor!==null,instancingMorph:ie&&Z.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:Le,envMap:F,envMapMode:F&&Mt.mapping,envMapCubeUVHeight:at,aoMap:vt,lightMap:wt,bumpMap:bt,normalMap:Et,displacementMap:te,emissiveMap:$t,normalMapObjectSpace:Et&&S.normalMapType===Wf,normalMapTangentSpace:Et&&S.normalMapType===Lc,packedNormalMap:Et&&S.normalMapType===Lc&&Ty(S.normalMap.format),metalnessMap:le,roughnessMap:he,anisotropy:U,anisotropyMap:ot,clearcoat:De,clearcoatMap:At,clearcoatNormalMap:It,clearcoatRoughnessMap:lt,dispersion:Me,retroreflection:R,iridescence:x,iridescenceMap:mt,iridescenceThicknessMap:Ft,sheen:Y,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:Dt,specularColorMap:jt,specularIntensityMap:ne,transmission:et,transmissionMap:de,thicknessMap:W,gradientMap:Tt,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:Rt,alphaHash:zt,combine:S.combine,mapUv:Ht&&_(S.map.channel),aoMapUv:vt&&_(S.aoMap.channel),lightMapUv:wt&&_(S.lightMap.channel),bumpMapUv:bt&&_(S.bumpMap.channel),normalMapUv:Et&&_(S.normalMap.channel),displacementMapUv:te&&_(S.displacementMap.channel),emissiveMapUv:$t&&_(S.emissiveMap.channel),metalnessMapUv:le&&_(S.metalnessMap.channel),roughnessMapUv:he&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:At&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(S.sheenRoughnessMap.channel),specularMapUv:Dt&&_(S.specularMap.channel),specularColorMapUv:jt&&_(S.specularColorMap.channel),specularIntensityMapUv:ne&&_(S.specularIntensityMap.channel),transmissionMapUv:de&&_(S.transmissionMap.channel),thicknessMapUv:W&&_(S.thicknessMap.channel),alphaMapUv:ut&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Et||U),vertexNormals:!!K.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!K.attributes.uv&&(Ht||ut),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||K.attributes.normal===void 0&&Et===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ut,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:Wt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&Re.getTransfer(S.map.colorSpace)===Ve,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&Re.getTransfer(S.emissiveMap.colorSpace)===Ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===Wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function f(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let k in S.defines)C.push(k),C.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(d(C,S),L(C,S),C.push(i.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function d(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numSunLights),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numSunLightShadows),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function L(S,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function N(S){let C=g[S.type],k;if(C){let $=$n[C];k=ao.clone($.uniforms)}else k=S.uniforms;return k}function w(S,C){let k=h.get(C);return k!==void 0?++k.usedTimes:(k=new wy(i,C,S,s),c.push(k),h.set(C,k)),k}function b(S){if(--S.usedTimes===0){let C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function I(S){o.remove(S)}function O(){o.dispose()}return{getParameters:E,getProgramCacheKey:f,getUniforms:N,acquireProgram:w,releaseProgram:b,releaseShaderCache:I,programs:c,dispose:O}}function Cy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ry(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ap(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,_,E,f,d){let L=i[t];return L===void 0?(L={id:u.id,object:u,geometry:g,material:_,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:f,group:d},i[t]=L):(L.id=u.id,L.object=u,L.geometry=g,L.material=_,L.materialVariant=a(u),L.groupOrder=E,L.renderOrder=u.renderOrder,L.z=f,L.group=d),t++,L}function l(u,g,_,E,f,d,L){L.reversedDepth===!0&&(f=-f);let N=o(u,g,_,E,f,d);_.transmission>0?n.push(N):_.transparent===!0?s.push(N):e.push(N)}function c(u,g,_,E,f,d){let L=o(u,g,_,E,f,d);_.transmission>0?n.unshift(L):_.transparent===!0?s.unshift(L):e.unshift(L)}function h(u,g){e.length>1&&e.sort(u||Ry),n.length>1&&n.sort(g||Tp),s.length>1&&s.sort(g||Tp)}function m(){for(let u=t,g=i.length;u<g;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function Iy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ap,i.set(n,[a])):s>=r.length?(a=new Ap,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Py(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new oe};break;case"SpotLight":e={position:new B,direction:new B,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Ly(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Dy=0;function Ny(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Uy(i){let t=new Py,e=Ly(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Ue,a=new Ue;function o(c){let h=0,m=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let g=0,_=0,E=0,f=0,d=0,L=0,N=0,w=0,b=0,I=0,O=0,S=0,C=0,k=0;c.sort(Ny);for(let Z=0,J=c.length;Z<J;Z++){let V=c[Z],K=V.color,st=V.intensity,rt=V.distance,Mt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ws?Mt=V.shadow.map.texture:Mt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)h+=K.r*st,m+=K.g*st,u+=K.b*st;else if(V.isLightProbe){for(let at=0;at<9;at++)n.probe[at].addScaledVector(V.sh.coefficients[at],st);k++}else if(V.isSunLight){let at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ht=V.shadow,gt=e.get(V);gt.shadowIntensity=ht.intensity,gt.shadowBias=ht.bias,gt.shadowNormalBias=ht.normalBias,gt.shadowRadius=ht.radius,gt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[_]=gt,n.sunShadowMap[_]=Mt;let Jt=ht.getViewportCount();for(let Wt=0;Wt<Jt;Wt++)n.sunShadowMatrix[E+Wt]=ht.getMatrix(Wt),n.sunShadowCascade[E+Wt]=ht._cascadeData[Wt];E+=Jt,_++}n.sun[g]=at,g++}else if(V.isDirectionalLight){let at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ht=V.shadow,gt=e.get(V);gt.shadowIntensity=ht.intensity,gt.shadowBias=ht.bias,gt.shadowNormalBias=ht.normalBias,gt.shadowRadius=ht.radius,gt.shadowMapSize=ht.mapSize,n.directionalShadow[f]=gt,n.directionalShadowMap[f]=Mt,n.directionalShadowMatrix[f]=V.shadow.matrix,b++}n.directional[f]=at,f++}else if(V.isSpotLight){let at=t.get(V);at.position.setFromMatrixPosition(V.matrixWorld),at.color.copy(K).multiplyScalar(st),at.distance=rt,at.coneCos=Math.cos(V.angle),at.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),at.decay=V.decay,n.spot[L]=at;let ht=V.shadow;if(V.map&&(n.spotLightMap[S]=V.map,S++,ht.updateMatrices(V),V.castShadow&&C++),n.spotLightMatrix[L]=ht.matrix,V.castShadow){let gt=e.get(V);gt.shadowIntensity=ht.intensity,gt.shadowBias=ht.bias,gt.shadowNormalBias=ht.normalBias,gt.shadowRadius=ht.radius,gt.shadowMapSize=ht.mapSize,n.spotShadow[L]=gt,n.spotShadowMap[L]=Mt,O++}L++}else if(V.isRectAreaLight){let at=t.get(V);at.color.copy(K).multiplyScalar(st),at.halfWidth.set(V.width*.5,0,0),at.halfHeight.set(0,V.height*.5,0),n.rectArea[N]=at,N++}else if(V.isPointLight){let at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),at.distance=V.distance,at.decay=V.decay,V.castShadow){let ht=V.shadow,gt=e.get(V);gt.shadowIntensity=ht.intensity,gt.shadowBias=ht.bias,gt.shadowNormalBias=ht.normalBias,gt.shadowRadius=ht.radius,gt.shadowMapSize=ht.mapSize,gt.shadowCameraNear=ht.camera.near,gt.shadowCameraFar=ht.camera.far,n.pointShadow[d]=gt,n.pointShadowMap[d]=Mt,n.pointShadowMatrix[d]=V.shadow.matrix,I++}n.point[d]=at,d++}else if(V.isHemisphereLight){let at=t.get(V);at.skyColor.copy(V.color).multiplyScalar(st),at.groundColor.copy(V.groundColor).multiplyScalar(st),n.hemi[w]=at,w++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let $=n.hash;($.sunLength!==g||$.directionalLength!==f||$.pointLength!==d||$.spotLength!==L||$.rectAreaLength!==N||$.hemiLength!==w||$.numSunShadows!==_||$.numDirectionalShadows!==b||$.numPointShadows!==I||$.numSpotShadows!==O||$.numSpotMaps!==S||$.numLightProbes!==k)&&(n.sun.length=g,n.directional.length=f,n.spot.length=L,n.rectArea.length=N,n.point.length=d,n.hemi.length=w,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=k,$.sunLength=g,$.directionalLength=f,$.pointLength=d,$.spotLength=L,$.rectAreaLength=N,$.hemiLength=w,$.numSunShadows=_,$.numDirectionalShadows=b,$.numPointShadows=I,$.numSpotShadows=O,$.numSpotMaps=S,$.numLightProbes=k,n.version=Dy++)}function l(c,h){let m=0,u=0,g=0,_=0,E=0,f=0,d=h.matrixWorldInverse;for(let L=0,N=c.length;L<N;L++){let w=c[L];if(w.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(d),m++}else if(w.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(w.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(w.isRectAreaLight){let b=n.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(w.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(d),g++}else if(w.isHemisphereLight){let b=n.hemi[f];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function Cp(i){let t=new Uy(i),e=[],n=[],s=[];function r(u){m.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Cp(i),t.set(s,[o])):r>=a.length?(o=new Cp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
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
}`,zy=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],ky=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Rp=new Ue,lo=new B,Fu=new B;function Vy(i,t,e){let n=new Pr,s=new Nt,r=new Nt,a=new He,o=new Il,l=new Pl,c={},h=e.maxTextureSize,m={[ys]:Wn,[Wn]:ys,[zi]:zi},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Oy,fragmentShader:By}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new bn(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let d=this.type;this.render=function(I,O,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||I.length===0)return;this.type===Sf&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ka);let C=i.getRenderTarget(),k=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ki),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let J=d!==this.type;J&&O.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(K=>K.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,K=I.length;V<K;V++){let st=I[V],rt=st.shadow;if(rt===void 0){ae("WebGLShadowMap:",st,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let Mt=rt.getFrameExtents();s.multiply(Mt),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,rt.mapSize.y=r.y));let at=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=at,rt.map===null||J===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Or){if(st.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Kn(s.x,s.y,{format:ws,type:Ai,minFilter:An,magFilter:An,generateMipmaps:!1}),rt.map.texture.name=st.name+".shadowMap",rt.map.depthTexture=new ms(s.x,s.y,fi),rt.map.depthTexture.name=st.name+".shadowMapDepth",rt.map.depthTexture.format=Ui,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=Sn,rt.map.depthTexture.magFilter=Sn}else st.isPointLight?(rt.map=new Bc(s.x),rt.map.depthTexture=new Ml(s.x,Ti)):(rt.map=new Kn(s.x,s.y),rt.map.depthTexture=new ms(s.x,s.y,Ti)),rt.map.depthTexture.name=st.name+".shadowMap",rt.map.depthTexture.format=Ui,this.type===Ka?(rt.map.depthTexture.compareFunction=at?Nc:Dc,rt.map.depthTexture.minFilter=An,rt.map.depthTexture.magFilter=An):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=Sn,rt.map.depthTexture.magFilter=Sn);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let ht=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();st.isPointLight!==!0&&rt.updateMatrices(st,S);for(let gt=0;gt<ht;gt++){let Jt=rt.getCamera(gt);if(st.isPointLight){let Wt=rt.camera,Pe=rt.matrix,we=st.distance||Wt.far;we!==Wt.far&&(Wt.far=we,Wt.updateProjectionMatrix()),lo.setFromMatrixPosition(st.matrixWorld),Wt.position.copy(lo),Fu.copy(Wt.position),Fu.add(zy[gt]),Wt.up.copy(ky[gt]),Wt.lookAt(Fu),Wt.updateMatrixWorld(),Pe.makeTranslation(-lo.x,-lo.y,-lo.z),Rp.multiplyMatrices(Wt.projectionMatrix,Wt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Rp,Wt.coordinateSystem,Wt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(rt.map),i.clear());let Wt=rt.getViewport(gt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),Z.viewport(a)}n=rt.getFrustum(gt),w(O,S,Jt,st,this.type)}rt.isPointLightShadow!==!0&&this.type===Or&&L(rt,S),rt.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(C,k,$)};function L(I,O){let S=t.update(E);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null?I.mapPass=new Kn(s.x,s.y,{format:ws,type:Ai}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(O,null,S,u,E,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(O,null,S,g,E,null)}function N(I,O,S,C){let k=null,$=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if($!==void 0)k=$;else if(k=S.isPointLight===!0?l:o,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let Z=k.uuid,J=O.uuid,V=c[Z];V===void 0&&(V={},c[Z]=V);let K=V[J];K===void 0&&(K=k.clone(),V[J]=K,O.addEventListener("dispose",b)),k=K}if(k.visible=O.visible,k.wireframe=O.wireframe,C===Or?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:m[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let Z=i.properties.get(k);Z.light=S}return k}function w(I,O,S,C,k){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&k===Or)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let J=t.update(I),V=I.material;if(Array.isArray(V)){let K=J.groups;for(let st=0,rt=K.length;st<rt;st++){let Mt=K[st],at=V[Mt.materialIndex];if(at&&at.visible){let ht=N(I,at,C,k);I.onBeforeShadow(i,I,O,S,J,ht,Mt),i.renderBufferDirect(S,null,J,ht,I,Mt),I.onAfterShadow(i,I,O,S,J,ht,Mt)}}}else if(V.visible){let K=N(I,V,C,k);I.onBeforeShadow(i,I,O,S,J,K,null),i.renderBufferDirect(S,null,J,K,I,null),I.onAfterShadow(i,I,O,S,J,K,null)}}let Z=I.children;for(let J=0,V=Z.length;J<V;J++)w(Z[J],O,S,C,k)}function b(I){I.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],k=I.target.uuid;k in C&&(C[k].dispose(),delete C[k])}}}function Hy(i,t){function e(){let W=!1,Tt=new He,ut=null,Rt=new He(0,0,0,0);return{setMask:function(zt){ut!==zt&&!W&&(i.colorMask(zt,zt,zt,zt),ut=zt)},setLocked:function(zt){W=zt},setClear:function(zt,xt,Qt,Zt,Be){Be===!0&&(zt*=Zt,xt*=Zt,Qt*=Zt),Tt.set(zt,xt,Qt,Zt),Rt.equals(Tt)===!1&&(i.clearColor(zt,xt,Qt,Zt),Rt.copy(Tt))},reset:function(){W=!1,ut=null,Rt.set(-1,0,0,0)}}}function n(){let W=!1,Tt=!1,ut=null,Rt=null,zt=null;return{setReversed:function(xt){if(Tt!==xt){let Qt=t.get("EXT_clip_control");xt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=xt;let Zt=zt;zt=null,this.setClear(Zt)}},getReversed:function(){return Tt},setTest:function(xt){xt?pt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(xt){ut!==xt&&!W&&(i.depthMask(xt),ut=xt)},setFunc:function(xt){if(Tt&&(xt=ep[xt]),Rt!==xt){switch(xt){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){zt!==xt&&(zt=xt,Tt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){W=!1,ut=null,Rt=null,zt=null,Tt=!1}}}function s(){let W=!1,Tt=null,ut=null,Rt=null,zt=null,xt=null,Qt=null,Zt=null,Be=null;return{setTest:function(ze){W||(ze?pt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(ze){Tt!==ze&&!W&&(i.stencilMask(ze),Tt=ze)},setFunc:function(ze,kn,_n){(ut!==ze||Rt!==kn||zt!==_n)&&(i.stencilFunc(ze,kn,_n),ut=ze,Rt=kn,zt=_n)},setOp:function(ze,kn,_n){(xt!==ze||Qt!==kn||Zt!==_n)&&(i.stencilOp(ze,kn,_n),xt=ze,Qt=kn,Zt=_n)},setLocked:function(ze){W=ze},setClear:function(ze){Be!==ze&&(i.clearStencil(ze),Be=ze)},reset:function(){W=!1,Tt=null,ut=null,Rt=null,zt=null,xt=null,Qt=null,Zt=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},u={},g=new WeakMap,_=[],E=null,f=!1,d=null,L=null,N=null,w=null,b=null,I=null,O=null,S=new oe(0,0,0),C=0,k=!1,$=null,Z=null,J=null,V=null,K=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,Mt=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(at)[1]),rt=Mt>=1):at.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),rt=Mt>=2);let ht=null,gt={},Jt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),Pe=new He().fromArray(Jt),we=new He().fromArray(Wt);function Te(W,Tt,ut,Rt){let zt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(W,xt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ut;Qt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Tt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return xt}let nt={};nt[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(wr),bt(!1),Et(nu),pt(i.CULL_FACE),vt(ki);function pt(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function Ut(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function ie(W,Tt){return u[W]!==Tt?(i.bindFramebuffer(W,Tt),u[W]=Tt,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Ct(W,Tt){let ut=_,Rt=!1;if(W){ut=g.get(Tt),ut===void 0&&(ut=[],g.set(Tt,ut));let zt=W.textures;if(ut.length!==zt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Qt=zt.length;xt<Qt;xt++)ut[xt]=i.COLOR_ATTACHMENT0+xt;ut.length=zt.length,Rt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(ut)}function Ht(W){return E!==W?(i.useProgram(W),E=W,!0):!1}let Le={[qs]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};Le[Ef]=i.MIN,Le[Tf]=i.MAX;let F={[Af]:i.ZERO,[Cf]:i.ONE,[Rf]:i.SRC_COLOR,[au]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[ou]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(W,Tt,ut,Rt,zt,xt,Qt,Zt,Be,ze){if(W===ki){f===!0&&(Ut(i.BLEND),f=!1);return}if(f===!1&&(pt(i.BLEND),f=!0),W!==Mf){if(W!==d||ze!==k){if((L!==qs||b!==qs)&&(i.blendEquation(i.FUNC_ADD),L=qs,b=qs),ze)switch(W){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case iu:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case iu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case su:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",W);break}N=null,w=null,I=null,O=null,S.set(0,0,0),C=0,d=W,k=ze}return}zt=zt||Tt,xt=xt||ut,Qt=Qt||Rt,(Tt!==L||zt!==b)&&(i.blendEquationSeparate(Le[Tt],Le[zt]),L=Tt,b=zt),(ut!==N||Rt!==w||xt!==I||Qt!==O)&&(i.blendFuncSeparate(F[ut],F[Rt],F[xt],F[Qt]),N=ut,w=Rt,I=xt,O=Qt),(Zt.equals(S)===!1||Be!==C)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Be),S.copy(Zt),C=Be),d=W,k=!1}function wt(W,Tt){W.side===zi?Ut(i.CULL_FACE):pt(i.CULL_FACE);let ut=W.side===Wn;Tt&&(ut=!ut),bt(ut),W.blending===Br&&W.transparent===!1?vt(ki):vt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Rt=W.stencilWrite;o.setTest(Rt),Rt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),$t(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(W){$!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),$=W)}function Et(W){W!==vf?(pt(i.CULL_FACE),W!==Z&&(W===nu?i.cullFace(i.BACK):W===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),Z=W}function te(W){W!==J&&(rt&&i.lineWidth(W),J=W)}function $t(W,Tt,ut){W?(pt(i.POLYGON_OFFSET_FILL),(V!==Tt||K!==ut)&&(V=Tt,K=ut,a.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ut))):Ut(i.POLYGON_OFFSET_FILL)}function le(W){W?pt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function he(W){W===void 0&&(W=i.TEXTURE0+st-1),ht!==W&&(i.activeTexture(W),ht=W)}function U(W,Tt,ut){ut===void 0&&(ht===null?ut=i.TEXTURE0+st-1:ut=ht);let Rt=gt[ut];Rt===void 0&&(Rt={type:void 0,texture:void 0},gt[ut]=Rt),(Rt.type!==W||Rt.texture!==Tt)&&(ht!==ut&&(i.activeTexture(ut),ht=ut),i.bindTexture(W,Tt||nt[W]),Rt.type=W,Rt.texture=Tt)}function De(){let W=gt[ht];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(W){ce("WebGLState:",W)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(W){ce("WebGLState:",W)}}function x(){try{i.texSubImage2D(...arguments)}catch(W){ce("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){ce("WebGLState:",W)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ce("WebGLState:",W)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ce("WebGLState:",W)}}function At(){try{i.texStorage2D(...arguments)}catch(W){ce("WebGLState:",W)}}function It(){try{i.texStorage3D(...arguments)}catch(W){ce("WebGLState:",W)}}function lt(){try{i.texImage2D(...arguments)}catch(W){ce("WebGLState:",W)}}function mt(){try{i.texImage3D(...arguments)}catch(W){ce("WebGLState:",W)}}function Ft(W){return m[W]!==void 0?m[W]:i.getParameter(W)}function Xt(W,Tt){m[W]!==Tt&&(i.pixelStorei(W,Tt),m[W]=Tt)}function Lt(W){Pe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Pe.copy(W))}function Dt(W){we.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),we.copy(W))}function jt(W,Tt){let ut=c.get(Tt);ut===void 0&&(ut=new WeakMap,c.set(Tt,ut));let Rt=ut.get(W);Rt===void 0&&(Rt=i.getUniformBlockIndex(Tt,W.name),ut.set(W,Rt))}function ne(W,Tt){let Rt=c.get(Tt).get(W);l.get(Tt)!==Rt&&(i.uniformBlockBinding(Tt,Rt,W.__bindingPointIndex),l.set(Tt,Rt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},ht=null,gt={},u={},g=new WeakMap,_=[],E=null,f=!1,d=null,L=null,N=null,w=null,b=null,I=null,O=null,S=new oe(0,0,0),C=0,k=!1,$=null,Z=null,J=null,V=null,K=null,Pe.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Ut,bindFramebuffer:ie,drawBuffers:Ct,useProgram:Ht,setBlending:vt,setMaterial:wt,setFlipSided:bt,setCullFace:Et,setLineWidth:te,setPolygonOffset:$t,setScissorTest:le,activeTexture:he,bindTexture:U,unbindTexture:De,compressedTexImage2D:Me,compressedTexImage3D:R,texImage2D:lt,texImage3D:mt,pixelStorei:Xt,getParameter:Ft,updateUBOMapping:jt,uniformBlockBinding:ne,texStorage2D:At,texStorage3D:It,texSubImage2D:x,texSubImage3D:Y,compressedTexSubImage2D:et,compressedTexSubImage3D:ot,scissor:Lt,viewport:Dt,reset:de}}function Gy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,m=new Set,u,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,x){return _?new OffscreenCanvas(R,x):ya("canvas")}function f(R,x,Y){let et=1,ot=Me(R);if((ot.width>Y||ot.height>Y)&&(et=Y/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let At=Math.floor(et*ot.width),It=Math.floor(et*ot.height);u===void 0&&(u=E(At,It));let lt=x?E(At,It):u;return lt.width=At,lt.height=It,lt.getContext("2d").drawImage(R,0,0,At,It),ae("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+At+"x"+It+")."),lt}else return"data"in R&&ae("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function d(R){return R.generateMipmaps}function L(R){i.generateMipmap(R)}function N(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,x,Y,et,ot,At=!1){if(R!==null){if(i[R]!==void 0)return i[R];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let It;et&&(It=t.get("EXT_texture_norm16"),It||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=x;if(x===i.RED&&(Y===i.FLOAT&&(lt=i.R32F),Y===i.HALF_FLOAT&&(lt=i.R16F),Y===i.UNSIGNED_BYTE&&(lt=i.R8),Y===i.UNSIGNED_SHORT&&It&&(lt=It.R16_EXT),Y===i.SHORT&&It&&(lt=It.R16_SNORM_EXT)),x===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(lt=i.R8UI),Y===i.UNSIGNED_SHORT&&(lt=i.R16UI),Y===i.UNSIGNED_INT&&(lt=i.R32UI),Y===i.BYTE&&(lt=i.R8I),Y===i.SHORT&&(lt=i.R16I),Y===i.INT&&(lt=i.R32I)),x===i.RG&&(Y===i.FLOAT&&(lt=i.RG32F),Y===i.HALF_FLOAT&&(lt=i.RG16F),Y===i.UNSIGNED_BYTE&&(lt=i.RG8),Y===i.UNSIGNED_SHORT&&It&&(lt=It.RG16_EXT),Y===i.SHORT&&It&&(lt=It.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(lt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(lt=i.RG16UI),Y===i.UNSIGNED_INT&&(lt=i.RG32UI),Y===i.BYTE&&(lt=i.RG8I),Y===i.SHORT&&(lt=i.RG16I),Y===i.INT&&(lt=i.RG32I)),x===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),Y===i.UNSIGNED_INT&&(lt=i.RGB32UI),Y===i.BYTE&&(lt=i.RGB8I),Y===i.SHORT&&(lt=i.RGB16I),Y===i.INT&&(lt=i.RGB32I)),x===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(lt=i.RGBA32UI),Y===i.BYTE&&(lt=i.RGBA8I),Y===i.SHORT&&(lt=i.RGBA16I),Y===i.INT&&(lt=i.RGBA32I)),x===i.RGB&&(Y===i.UNSIGNED_SHORT&&It&&(lt=It.RGB16_EXT),Y===i.SHORT&&It&&(lt=It.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),x===i.RGBA){let mt=At?va:Re.getTransfer(ot);Y===i.FLOAT&&(lt=i.RGBA32F),Y===i.HALF_FLOAT&&(lt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(lt=mt===Ve?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&It&&(lt=It.RGBA16_EXT),Y===i.SHORT&&It&&(lt=It.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(R,x){let Y;return R?x===null||x===Ti||x===kr?Y=i.DEPTH24_STENCIL8:x===fi?Y=i.DEPTH32F_STENCIL8:x===zr&&(Y=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===kr?Y=i.DEPTH_COMPONENT24:x===fi?Y=i.DEPTH_COMPONENT32F:x===zr&&(Y=i.DEPTH_COMPONENT16),Y}function I(R,x){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==An?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function O(R){let x=R.target;x.removeEventListener("dispose",O),C(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&m.delete(x)}function S(R){let x=R.target;x.removeEventListener("dispose",S),$(x)}function C(R){let x=n.get(R);if(x.__webglInit===void 0)return;let Y=R.source,et=g.get(Y);if(et){let ot=et[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&k(R),Object.keys(et).length===0&&g.delete(Y)}n.remove(R)}function k(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let Y=R.source,et=g.get(Y);delete et[x.__cacheKey],a.memory.textures--}function $(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let ot=0;ot<x.__webglFramebuffer[et].length;ot++)i.deleteFramebuffer(x.__webglFramebuffer[et][ot]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let Y=R.textures;for(let et=0,ot=Y.length;et<ot;et++){let At=n.get(Y[et]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),a.memory.textures--),n.remove(Y[et])}n.remove(R)}let Z=0;function J(){Z=0}function V(){return Z}function K(R){Z=R}function st(){let R=Z;return R>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,R}function rt(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Mt(R,x){let Y=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let et=R.image;if(et===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(Y,R,x);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+x)}function at(R,x){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Ut(Y,R,x);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+x)}function ht(R,x){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Ut(Y,R,x);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+x)}function gt(R,x){let Y=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Y.__version!==R.version){ie(Y,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+x)}let Jt={[ul]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},Wt={[Sn]:i.NEAREST,[Hf]:i.NEAREST_MIPMAP_NEAREST,[Qa]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[Ms]:i.LINEAR_MIPMAP_LINEAR},Pe={[Xf]:i.NEVER,[Kf]:i.ALWAYS,[qf]:i.LESS,[Dc]:i.LEQUAL,[Yf]:i.EQUAL,[Nc]:i.GEQUAL,[Zf]:i.GREATER,[Jf]:i.NOTEQUAL};function we(R,x){if(x.type===fi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===An||x.magFilter===Yl||x.magFilter===Qa||x.magFilter===Ms||x.minFilter===An||x.minFilter===Yl||x.minFilter===Qa||x.minFilter===Ms)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Jt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Jt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Jt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Wt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Wt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Sn||x.minFilter!==Qa&&x.minFilter!==Ms||x.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Te(R,x){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",O));let et=x.source,ot=g.get(et);ot===void 0&&(ot={},g.set(et,ot));let At=rt(x);if(At!==R.__cacheKey){ot[At]===void 0&&(ot[At]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ot[At].usedTimes++;let It=ot[R.__cacheKey];It!==void 0&&(ot[R.__cacheKey].usedTimes--,It.usedTimes===0&&k(x)),R.__cacheKey=At,R.__webglTexture=ot[At].texture}return Y}function nt(R,x,Y){return Math.floor(Math.floor(R/Y)/x)}function pt(R,x,Y,et){let At=R.updateRanges;if(At.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,Y,et,x.data);else{At.sort((Xt,Lt)=>Xt.start-Lt.start);let It=0;for(let Xt=1;Xt<At.length;Xt++){let Lt=At[It],Dt=At[Xt],jt=Lt.start+Lt.count,ne=nt(Dt.start,x.width,4),de=nt(Lt.start,x.width,4);Dt.start<=jt+1&&ne===de&&nt(Dt.start+Dt.count-1,x.width,4)===ne?Lt.count=Math.max(Lt.count,Dt.start+Dt.count-Lt.start):(++It,At[It]=Dt)}At.length=It+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Xt=0,Lt=At.length;Xt<Lt;Xt++){let Dt=At[Xt],jt=Math.floor(Dt.start/4),ne=Math.ceil(Dt.count/4),de=jt%x.width,W=Math.floor(jt/x.width),Tt=ne,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,de),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,de,W,Tt,ut,Y,et,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function Ut(R,x,Y){let et=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=i.TEXTURE_3D);let ot=Te(R,x),At=x.source;e.bindTexture(et,R.__webglTexture,i.TEXTURE0+Y);let It=n.get(At);if(At.version!==It.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ut=Re.getPrimaries(Re.workingColorSpace),Rt=x.colorSpace===is?null:Re.getPrimaries(x.colorSpace),zt=x.colorSpace===is||ut===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let mt=f(x.image,!1,s.maxTextureSize);mt=De(x,mt);let Ft=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),Lt=w(x.internalFormat,Ft,Xt,x.normalized,x.colorSpace,x.isVideoTexture);we(et,x);let Dt,jt=x.mipmaps,ne=x.isVideoTexture!==!0,de=It.__version===void 0||ot===!0,W=At.dataReady,Tt=I(x,mt);if(x.isDepthTexture)Lt=b(x.format===bs,x.type),de&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Lt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,mt.width,mt.height,0,Ft,Xt,null));else if(x.isDataTexture)if(jt.length>0){ne&&de&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,jt[0].width,jt[0].height);for(let ut=0,Rt=jt.length;ut<Rt;ut++)Dt=jt[ut],ne?W&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Dt.width,Dt.height,Ft,Xt,Dt.data):e.texImage2D(i.TEXTURE_2D,ut,Lt,Dt.width,Dt.height,0,Ft,Xt,Dt.data);x.generateMipmaps=!1}else ne?(de&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,mt.width,mt.height),W&&pt(x,mt,Ft,Xt)):e.texImage2D(i.TEXTURE_2D,0,Lt,mt.width,mt.height,0,Ft,Xt,mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ne&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Lt,jt[0].width,jt[0].height,mt.depth);for(let ut=0,Rt=jt.length;ut<Rt;ut++)if(Dt=jt[ut],x.format!==pi)if(Ft!==null)if(ne){if(W)if(x.layerUpdates.size>0){let zt=Iu(Dt.width,Dt.height,x.format,x.type);for(let xt of x.layerUpdates){let Qt=Dt.data.subarray(xt*zt/Dt.data.BYTES_PER_ELEMENT,(xt+1)*zt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,xt,Dt.width,Dt.height,1,Ft,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Dt.width,Dt.height,mt.depth,Ft,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Lt,Dt.width,Dt.height,mt.depth,0,Dt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Dt.width,Dt.height,mt.depth,Ft,Xt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Lt,Dt.width,Dt.height,mt.depth,0,Ft,Xt,Dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ne&&de&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,jt[0].width,jt[0].height);for(let ut=0,Rt=jt.length;ut<Rt;ut++)Dt=jt[ut],x.format!==pi?Ft!==null?ne?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Lt,Dt.width,Dt.height,0,Dt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Dt.width,Dt.height,Ft,Xt,Dt.data):e.texImage2D(i.TEXTURE_2D,ut,Lt,Dt.width,Dt.height,0,Ft,Xt,Dt.data)}else if(x.isDataArrayTexture)if(ne){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Lt,mt.width,mt.height,mt.depth),W)if(x.layerUpdates.size>0){let ut=Iu(mt.width,mt.height,x.format,x.type);for(let Rt of x.layerUpdates){let zt=mt.data.subarray(Rt*ut/mt.data.BYTES_PER_ELEMENT,(Rt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,mt.width,mt.height,1,Ft,Xt,zt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ft,Xt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,mt.width,mt.height,mt.depth,0,Ft,Xt,mt.data);else if(x.isData3DTexture)ne?(de&&e.texStorage3D(i.TEXTURE_3D,Tt,Lt,mt.width,mt.height,mt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ft,Xt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,mt.width,mt.height,mt.depth,0,Ft,Xt,mt.data);else if(x.isFramebufferTexture){if(de)if(ne)e.texStorage2D(i.TEXTURE_2D,Tt,Lt,mt.width,mt.height);else{let ut=mt.width,Rt=mt.height;for(let zt=0;zt<Tt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Lt,ut,Rt,0,Ft,Xt,null),ut>>=1,Rt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),mt.parentNode!==ut){ut.appendChild(mt),m.add(x),ut.onpaint=Rt=>{let zt=Rt.changedElements;for(let xt of m)zt.includes(xt.image)&&(xt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let zt=i.RGBA,xt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,xt,Qt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(ne&&de){let ut=Me(jt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Lt,ut.width,ut.height)}for(let ut=0,Rt=jt.length;ut<Rt;ut++)Dt=jt[ut],ne?W&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ft,Xt,Dt):e.texImage2D(i.TEXTURE_2D,ut,Lt,Ft,Xt,Dt);x.generateMipmaps=!1}else if(ne){if(de){let ut=Me(mt);e.texStorage2D(i.TEXTURE_2D,Tt,Lt,ut.width,ut.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,Xt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Ft,Xt,mt);d(x)&&L(et),It.__version=At.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ie(R,x,Y){if(x.image.length!==6)return;let et=Te(R,x),ot=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);let At=n.get(ot);if(ot.version!==At.__version||et===!0){e.activeTexture(i.TEXTURE0+Y);let It=Re.getPrimaries(Re.workingColorSpace),lt=x.colorSpace===is?null:Re.getPrimaries(x.colorSpace),mt=x.colorSpace===is||It===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Xt=x.image[0]&&x.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!Ft&&!Xt?Lt[xt]=f(x.image[xt],!0,s.maxCubemapSize):Lt[xt]=Xt?x.image[xt].image:x.image[xt],Lt[xt]=De(x,Lt[xt]);let Dt=Lt[0],jt=r.convert(x.format,x.colorSpace),ne=r.convert(x.type),de=w(x.internalFormat,jt,ne,x.normalized,x.colorSpace),W=x.isVideoTexture!==!0,Tt=At.__version===void 0||et===!0,ut=ot.dataReady,Rt=I(x,Dt);we(i.TEXTURE_CUBE_MAP,x);let zt;if(Ft){W&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,de,Dt.width,Dt.height);for(let xt=0;xt<6;xt++){zt=Lt[xt].mipmaps;for(let Qt=0;Qt<zt.length;Qt++){let Zt=zt[Qt];x.format!==pi?jt!==null?W?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,0,0,Zt.width,Zt.height,jt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,de,Zt.width,Zt.height,0,Zt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,0,0,Zt.width,Zt.height,jt,ne,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,de,Zt.width,Zt.height,0,jt,ne,Zt.data)}}}else{if(zt=x.mipmaps,W&&Tt){zt.length>0&&Rt++;let xt=Me(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Xt){W?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,jt,ne,Lt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Lt[xt].width,Lt[xt].height,0,jt,ne,Lt[xt].data);for(let Qt=0;Qt<zt.length;Qt++){let Be=zt[Qt].image[xt].image;W?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,0,0,Be.width,Be.height,jt,ne,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,de,Be.width,Be.height,0,jt,ne,Be.data)}}else{W?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,ne,Lt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,jt,ne,Lt[xt]);for(let Qt=0;Qt<zt.length;Qt++){let Zt=zt[Qt];W?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,0,0,jt,ne,Zt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,de,jt,ne,Zt.image[xt])}}}d(x)&&L(i.TEXTURE_CUBE_MAP),At.__version=ot.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ct(R,x,Y,et,ot,At){let It=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),mt=w(Y.internalFormat,It,lt,Y.normalized,Y.colorSpace),Ft=n.get(x),Xt=n.get(Y);if(Xt.__renderTarget=x,!Ft.__hasExternalTextures){let Lt=Math.max(1,x.width>>At),Dt=Math.max(1,x.height>>At);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,At,mt,Lt,Dt,x.depth,0,It,lt,null):e.texImage2D(ot,At,mt,Lt,Dt,0,It,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,Xt.__webglTexture,0,le(x)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,Xt.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,x,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let et=x.depthTexture,ot=et&&et.isDepthTexture?et.type:null,At=b(x.stencilBuffer,ot),It=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),At,x.width,x.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{let et=x.textures;for(let ot=0;ot<et.length;ot++){let At=et[ot],It=r.convert(At.format,At.colorSpace),lt=r.convert(At.type),mt=w(At.internalFormat,It,lt,At.normalized,At.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),mt,x.width,x.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,x,Y){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(x.depthTexture);if(ot.__renderTarget=x,(!ot.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,x.depthTexture.addEventListener("dispose",O)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),we(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ft=r.convert(x.depthTexture.format),Xt=r.convert(x.depthTexture.type),Lt;x.depthTexture.format===Ui?Lt=i.DEPTH_COMPONENT24:x.depthTexture.format===bs&&(Lt=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Lt,x.width,x.height,0,Ft,Xt,null)}}else Mt(x.depthTexture,0);let At=ot.__webglTexture,It=le(x),lt=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,mt=x.depthTexture.format===bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ui)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,lt,At,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,mt,lt,At,0);else if(x.depthTexture.format===bs)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,lt,At,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,mt,lt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(R){let x=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let et=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=et}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(Y)for(let et=0;et<6;et++)Le(x.__webglFramebuffer[et],R,et);else{let et=R.texture.mipmaps;et&&et.length>0?Le(x.__webglFramebuffer[0],R,0):Le(x.__webglFramebuffer,R,0)}else if(Y){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=i.createRenderbuffer(),Ht(x.__webglDepthbuffer[et],R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,At)}}else{let et=R.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ht(x.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,At)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(R,x,Y){let et=n.get(R);x!==void 0&&Ct(et.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&F(R)}function wt(R){let x=R.texture,Y=n.get(R),et=n.get(x);R.addEventListener("dispose",S);let ot=R.textures,At=R.isWebGLCubeRenderTarget===!0,It=ot.length>1;if(It||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=x.version,a.memory.textures++),At){Y.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer[lt]=[];for(let mt=0;mt<x.mipmaps.length;mt++)Y.__webglFramebuffer[lt][mt]=i.createFramebuffer()}else Y.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)Y.__webglFramebuffer[lt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(It)for(let lt=0,mt=ot.length;lt<mt;lt++){let Ft=n.get(ot[lt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&he(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let lt=0;lt<ot.length;lt++){let mt=ot[lt];Y.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[lt]);let Ft=r.convert(mt.format,mt.colorSpace),Xt=r.convert(mt.type),Lt=w(mt.internalFormat,Ft,Xt,mt.normalized,mt.colorSpace,R.isXRRenderTarget===!0),Dt=le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),we(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)Ct(Y.__webglFramebuffer[lt][mt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else Ct(Y.__webglFramebuffer[lt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);d(x)&&L(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let lt=0,mt=ot.length;lt<mt;lt++){let Ft=ot[lt],Xt=n.get(Ft),Lt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Xt.__webglTexture),we(Lt,Ft),Ct(Y.__webglFramebuffer,R,Ft,i.COLOR_ATTACHMENT0+lt,Lt,0),d(Ft)&&L(Lt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),we(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)Ct(Y.__webglFramebuffer[mt],R,x,i.COLOR_ATTACHMENT0,lt,mt);else Ct(Y.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,lt,0);d(x)&&L(lt),e.unbindTexture()}R.depthBuffer&&F(R)}function bt(R){let x=R.textures;for(let Y=0,et=x.length;Y<et;Y++){let ot=x[Y];if(d(ot)){let At=N(R),It=n.get(ot).__webglTexture;e.bindTexture(At,It),L(At),e.unbindTexture()}}}let Et=[],te=[];function $t(R){if(R.samples>0){if(he(R)===!1){let x=R.textures,Y=R.width,et=R.height,ot=i.COLOR_BUFFER_BIT,At=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),lt=x.length>1;if(lt)for(let Ft=0;Ft<x.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let mt=R.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ft=0;Ft<x.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);let Xt=n.get(x[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,Y,et,0,0,Y,et,ot,i.NEAREST),l===!0&&(Et.length=0,te.length=0,Et.push(i.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Et.push(At),te.push(At),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ft=0;Ft<x.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);let Xt=n.get(x[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function le(R){return Math.min(s.maxSamples,R.samples)}function he(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function De(R,x){let Y=R.colorSpace,et=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==xa&&Y!==is&&(Re.getTransfer(Y)===Ve?(et!==pi||ot!==Qn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",Y)),x}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=J,this.getTextureUnits=V,this.setTextureUnits=K,this.setTexture2D=Mt,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=gt,this.rebindTextures=vt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wy(i,t){function e(n,s=is){let r,a=Re.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===_u)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===yu)return i.ALPHA;if(n===Su)return i.RGB;if(n===pi)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===ec)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(a===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc||n===cc||n===hc||n===so||n===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Mc||n===bc||n===wc||n===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===Ac||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tc)return a===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Ic||n===ro||n===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`,Wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Pa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:$y,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new Va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends Fi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,g=null,_=null,E=typeof XRWebGLBinding<"u",f=new Wu,d={},L=e.getContextAttributes(),N=null,w=null,b=[],I=[],O=new Nt,S=null,C=null,k=new On;k.viewport=new He;let $=new On;$.viewport=new He;let Z=[k,$],J=new Wl,V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=b[nt];return pt===void 0&&(pt=new Ir,b[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=b[nt];return pt===void 0&&(pt=new Ir,b[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=b[nt];return pt===void 0&&(pt=new Ir,b[nt]=pt),pt.getHandSpace()};function st(nt){let pt=I.indexOf(nt.inputSource);if(pt===-1)return;let Ut=b[pt];Ut!==void 0&&(Ut.update(nt.inputSource,nt.frame,c||a),Ut.dispatchEvent({type:nt.type,data:nt.inputSource}))}function rt(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",Mt);for(let nt=0;nt<b.length;nt++){let pt=I[nt];pt!==null&&(I[nt]=null,b[nt].disconnect(pt))}V=null,K=null,f.reset();for(let nt in d)delete d[nt];if(t.setRenderTarget(N),g=null,u=null,m=null,s=null,w=null,Te.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(O.width,O.height,!1),C!==null){let nt=C.camera;nt.fov=C.fov,nt.zoom=C.zoom,nt.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",Mt),L.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,ie=null,Ct=null;L.depth&&(Ct=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=L.stencil?bs:Ui,ie=L.stencil?kr:Ti);let Ht={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Kn(u.textureWidth,u.textureHeight,{format:pi,type:Qn,depthTexture:new ms(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ut={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Kn(g.framebufferWidth,g.framebufferHeight,{format:pi,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Mt(nt){for(let pt=0;pt<nt.removed.length;pt++){let Ut=nt.removed[pt],ie=I.indexOf(Ut);ie>=0&&(I[ie]=null,b[ie].disconnect(Ut))}for(let pt=0;pt<nt.added.length;pt++){let Ut=nt.added[pt],ie=I.indexOf(Ut);if(ie===-1){for(let Ht=0;Ht<b.length;Ht++)if(Ht>=I.length){I.push(Ut),ie=Ht;break}else if(I[Ht]===null){I[Ht]=Ut,ie=Ht;break}if(ie===-1)break}let Ct=b[ie];Ct&&Ct.connect(Ut)}}let at=new B,ht=new B;function gt(nt,pt,Ut){at.setFromMatrixPosition(pt.matrixWorld),ht.setFromMatrixPosition(Ut.matrixWorld);let ie=at.distanceTo(ht),Ct=pt.projectionMatrix.elements,Ht=Ut.projectionMatrix.elements,Le=Ct[14]/(Ct[10]-1),F=Ct[14]/(Ct[10]+1),vt=(Ct[9]+1)/Ct[5],wt=(Ct[9]-1)/Ct[5],bt=(Ct[8]-1)/Ct[0],Et=(Ht[8]+1)/Ht[0],te=Le*bt,$t=Le*Et,le=ie/(-bt+Et),he=le*-bt;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(he),nt.translateZ(le),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let U=Le+le,De=F+le,Me=te-he,R=$t+(ie-he),x=vt*F/De*U,Y=wt*F/De*U;nt.projectionMatrix.makePerspective(Me,R,x,Y,U,De),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Jt(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let pt=nt.near,Ut=nt.far;f.texture!==null&&(f.depthNear>0&&(pt=f.depthNear),f.depthFar>0&&(Ut=f.depthFar)),J.near=$.near=k.near=pt,J.far=$.far=k.far=Ut,(V!==J.near||K!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),V=J.near,K=J.far),J.layers.mask=nt.layers.mask|6,k.layers.mask=J.layers.mask&-5,$.layers.mask=J.layers.mask&-3;let ie=nt.parent,Ct=J.cameras;Jt(J,ie);for(let Ht=0;Ht<Ct.length;Ht++)Jt(Ct[Ht],ie);Ct.length===2?gt(J,k,$):J.projectionMatrix.copy(k.projectionMatrix),C===null&&nt.isPerspectiveCamera&&(C={camera:nt,fov:nt.fov,zoom:nt.zoom}),Wt(nt,J,ie)};function Wt(nt,pt,Ut){Ut===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(Ut.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ar*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(nt){l=nt,u!==null&&(u.fixedFoveation=nt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=nt)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(J)},this.getCameraTexture=function(nt){return d[nt]};let Pe=null;function we(nt,pt){if(h=pt.getViewerPose(c||a),_=pt,h!==null){let Ut=h.views;g!==null&&(t.setRenderTargetFramebuffer(w,g.framebuffer),t.setRenderTarget(w));let ie=!1;Ut.length!==J.cameras.length&&(J.cameras.length=0,ie=!0);for(let F=0;F<Ut.length;F++){let vt=Ut[F],wt=null;if(g!==null)wt=g.getViewport(vt);else{let Et=m.getViewSubImage(u,vt);wt=Et.viewport,F===0&&(t.setRenderTargetTextures(w,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(w))}let bt=Z[F];bt===void 0&&(bt=new On,bt.layers.enable(F),bt.viewport=new He,Z[F]=bt),bt.matrix.fromArray(vt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(vt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(wt.x,wt.y,wt.width,wt.height),F===0&&(J.matrix.copy(bt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ie===!0&&J.cameras.push(bt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=n.getBinding();let F=m.getDepthInformation(Ut[0]);F&&F.isValid&&F.texture&&f.init(F,s.renderState)}if(Ct&&Ct.includes("camera-access")&&E){t.state.unbindTexture(),m=n.getBinding();for(let F=0;F<Ut.length;F++){let vt=Ut[F].camera;if(vt){let wt=d[vt];wt||(wt=new Pa,d[vt]=wt);let bt=m.getCameraImage(vt);wt.sourceTexture=bt}}}}for(let Ut=0;Ut<b.length;Ut++){let ie=I[Ut],Ct=b[Ut];ie!==null&&Ct!==void 0&&Ct.update(ie,pt,c||a)}Pe&&Pe(nt,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),_=null}let Te=new Ip;Te.setAnimationLoop(we),this.setAnimationLoop=function(nt){Pe=nt},this.dispose=function(){}}},qy=new Ue,Fp=new ge;Fp.set(-1,0,0,0,1,0,0,0,1);function Yy(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Au(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,L,N,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),m(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&g(f,d,w)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),E(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,L,N):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Wn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Wn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let L=t.get(d),N=L.envMap,w=L.envMapRotation;N&&(f.envMap.value=N,f.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(w)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Fp),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,L,N){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*L,f.scale.value=N*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function m(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function g(f,d,L){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wn&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=L.texture,f.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function E(f,d){let L=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(L.matrixWorld),f.nearDistance.value=L.shadow.camera.near,f.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let I=b.program;n.uniformBlockBinding(w,I)}function c(w,b){let I=s[w.id];I===void 0&&(f(w),I=h(w),s[w.id]=I,w.addEventListener("dispose",L));let O=b.program;n.updateUBOMapping(w,O);let S=t.render.frame;r[w.id]!==S&&(u(w),r[w.id]=S)}function h(w){let b=m();w.__bindingPointIndex=b;let I=i.createBuffer(),O=w.__size,S=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,O,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,I),I}function m(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let b=s[w.id],I=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,C=I.length;S<C;S++){let k=I[S];if(Array.isArray(k))for(let $=0,Z=k.length;$<Z;$++)g(k[$],S,$,O);else g(k,S,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,b,I,O){if(E(w,b,I,O)===!0){let S=w.__offset,C=w.value;if(Array.isArray(C)){let k=0;for(let $=0;$<C.length;$++){let Z=C[$],J=d(Z);_(Z,w.__data,k),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,w.__data)}}function _(w,b,I){typeof w=="number"||typeof w=="boolean"?b[0]=w:w.isMatrix3?(b[0]=w.elements[0],b[1]=w.elements[1],b[2]=w.elements[2],b[3]=0,b[4]=w.elements[3],b[5]=w.elements[4],b[6]=w.elements[5],b[7]=0,b[8]=w.elements[6],b[9]=w.elements[7],b[10]=w.elements[8],b[11]=0):ArrayBuffer.isView(w)?b.set(new w.constructor(w.buffer,w.byteOffset,b.length)):w.toArray(b,I)}function E(w,b,I,O){let S=w.value,C=b+"_"+I;if(O[C]===void 0)return typeof S=="number"||typeof S=="boolean"?O[C]=S:ArrayBuffer.isView(S)?O[C]=S.slice():O[C]=S.clone(),!0;{let k=O[C];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return O[C]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function f(w){let b=w.uniforms,I=0,O=16;for(let C=0,k=b.length;C<k;C++){let $=Array.isArray(b[C])?b[C]:[b[C]];for(let Z=0,J=$.length;Z<J;Z++){let V=$[Z],K=Array.isArray(V.value)?V.value:[V.value];for(let st=0,rt=K.length;st<rt;st++){let Mt=K[st],at=d(Mt),ht=I%O,gt=ht%at.boundary,Jt=ht+gt;I+=gt,Jt!==0&&O-Jt<at.storage&&(I+=O-Jt),V.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=I,I+=at.storage}}}let S=I%O;return S>0&&(I+=O-S),w.__size=I,w.__cache={},this}function d(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(b.boundary=16,b.storage=w.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",w),b}function L(w){let b=w.target;b.removeEventListener("dispose",L);let I=a.indexOf(b.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function N(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:N}}var Jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function Ky(){return Vi===null&&(Vi=new Ta(Jy,16,16,ws,Ai),Vi.name="DFG_LUT",Vi.minFilter=An,Vi.magFilter=An,Vi.wrapS=Di,Vi.wrapT=Di,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var zc=class{constructor(t={}){let{canvas:e=jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Qn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let E=g,f=new Set([ec,tc,Ql]),d=new Set([Qn,Ti,zr,kr,Jl,Kl]),L=new Uint32Array(4),N=new Int32Array(4),w=new B,b=null,I=null,O=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,$=!1,Z=null,J=null,V=null,K=null;this._outputColorSpace=ii;let st=0,rt=0,Mt=null,at=-1,ht=null,gt=new He,Jt=new He,Wt=null,Pe=new oe(0),we=0,Te=e.width,nt=e.height,pt=1,Ut=null,ie=null,Ct=new He(0,0,Te,nt),Ht=new He(0,0,Te,nt),Le=!1,F=new Pr,vt=!1,wt=!1,bt=new Ue,Et=new B,te=new He,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function he(){return Mt===null?pt:1}let U=n;function De(M,H){return e.getContext(M,H)}let Me,R,x,Y,et,ot,At,It,lt,mt,Ft,Xt,Lt,Dt,jt,ne,de,W,Tt,ut,Rt,zt,xt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",kn,!1),U===null){let H="webgl2";if(U=De(H,M),U===null)throw De(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(M){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),ce("WebGLRenderer: "+M.message),M}function Qt(){Me=new sv(U),Me.init(),Rt=new Wy(U,Me),R=new Yx(U,Me,t,Rt),x=new Hy(U,Me),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),J=U.createFramebuffer(),V=U.createFramebuffer(),K=U.createFramebuffer(),Y=new ov(U),et=new Cy,ot=new Gy(U,Me,x,et,R,Rt,Y),At=new iv(k),It=new c0(U),zt=new Xx(U,It),lt=new rv(U,It,Y,zt),mt=new cv(U,lt,It,zt,Y),W=new lv(U,R,ot),jt=new Zx(et),Ft=new Ay(k,At,Me,R,zt,jt),Xt=new Yy(k,et),Lt=new Iy,Dt=new Fy(Me),de=new $x(k,At,x,mt,_,l),ne=new Vy(k,mt,R),xt=new Zy(U,Y,R,x),Tt=new qx(U,Me,Y),ut=new av(U,Me,Y),Y.programs=Ft.programs,k.capabilities=R,k.extensions=Me,k.properties=et,k.renderLists=Lt,k.shadowMap=ne,k.state=x,k.info=Y}E!==Qn&&(C=new uv(E,e.width,e.height,o,s,r));let Zt=new $u(k,U);this.xr=Zt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(M){M!==void 0&&(pt=M,this.setSize(Te,nt,!1))},this.getSize=function(M){return M.set(Te,nt)},this.setSize=function(M,H,it=!0){if(Zt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=M,nt=H,e.width=Math.floor(M*pt),e.height=Math.floor(H*pt),it===!0&&(e.style.width=M+"px",e.style.height=H+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(Te*pt,nt*pt).floor()},this.setDrawingBufferSize=function(M,H,it){Te=M,nt=H,pt=it,e.width=Math.floor(M*it),e.height=Math.floor(H*it),this.setViewport(0,0,M,H)},this.setEffects=function(M){if(E===Qn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let H=0;H<M.length;H++)if(M[H].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(gt)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,H,it,j){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,H,it,j),x.viewport(gt.copy(Ct).multiplyScalar(pt).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,H,it,j){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,H,it,j),x.scissor(Jt.copy(Ht).multiplyScalar(pt).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(M){x.setScissorTest(Le=M)},this.setOpaqueSort=function(M){Ut=M},this.setTransparentSort=function(M){ie=M},this.getClearColor=function(M){return M.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,it=!0){let j=0;if(M){let Q=!1;if(Mt!==null){let Ot=Mt.texture.format;Q=f.has(Ot)}if(Q){let Ot=Mt.texture.type,Gt=d.has(Ot),Pt=de.getClearColor(),qt=de.getClearAlpha(),Kt=Pt.r,ve=Pt.g,Ee=Pt.b;Gt?(L[0]=Kt,L[1]=ve,L[2]=Ee,L[3]=qt,U.clearBufferuiv(U.COLOR,0,L)):(N[0]=Kt,N[1]=ve,N[2]=Ee,N[3]=qt,U.clearBufferiv(U.COLOR,0,N))}else j|=U.COLOR_BUFFER_BIT}H&&(j|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),Z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),de.dispose(),Lt.dispose(),Dt.dispose(),et.dispose(),At.dispose(),mt.dispose(),zt.dispose(),xt.dispose(),Ft.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Kr),Zt.removeEventListener("sessionend",jr),oi.stop()};function Be(M){M.preventDefault(),Sa("WebGLRenderer: Context Lost."),$=!0}function ze(){Sa("WebGLRenderer: Context Restored."),$=!1;let M=Y.autoReset,H=ne.enabled,it=ne.autoUpdate,j=ne.needsUpdate,Q=ne.type;Qt(),Y.autoReset=M,ne.enabled=H,ne.autoUpdate=it,ne.needsUpdate=j,ne.type=Q}function kn(M){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _n(M){let H=M.target;H.removeEventListener("dispose",_n),sr(H)}function sr(M){_o(M),et.remove(M)}function _o(M){let H=et.get(M).programs;H!==void 0&&(H.forEach(function(it){Ft.releaseProgram(it)}),M.isShaderMaterial&&Ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,it,j,Q,Ot){H===null&&(H=$t);let Gt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Pt=mi(M,H,it,j,Q);x.setMaterial(j,Gt);let qt=it.index,Kt=1;if(j.wireframe===!0){if(qt=lt.getWireframeAttribute(it),qt===void 0)return;Kt=2}let ve=it.drawRange,Ee=it.attributes.position,Yt=ve.start*Kt,ke=(ve.start+ve.count)*Kt;Ot!==null&&(Yt=Math.max(Yt,Ot.start*Kt),ke=Math.min(ke,(Ot.start+Ot.count)*Kt)),qt!==null?(Yt=Math.max(Yt,0),ke=Math.min(ke,qt.count)):Ee!=null&&(Yt=Math.max(Yt,0),ke=Math.min(ke,Ee.count));let tn=ke-Yt;if(tn<0||tn===1/0)return;zt.setup(Q,j,Pt,it,qt);let fe,Ge=Tt;if(qt!==null&&(fe=It.get(qt),Ge=ut,Ge.setIndex(fe)),Q.isMesh)j.wireframe===!0?(x.setLineWidth(j.wireframeLinewidth*he()),Ge.setMode(U.LINES)):Ge.setMode(U.TRIANGLES);else if(Q.isLine){let dn=j.linewidth;dn===void 0&&(dn=1),x.setLineWidth(dn*he()),Q.isLineSegments?Ge.setMode(U.LINES):Q.isLineLoop?Ge.setMode(U.LINE_LOOP):Ge.setMode(U.LINE_STRIP)}else Q.isPoints?Ge.setMode(U.POINTS):Q.isSprite&&Ge.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Ge.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let dn=Q._multiDrawStarts,kt=Q._multiDrawCounts,Ke=Q._multiDrawCount,Ce=qt?It.get(qt).bytesPerElement:1,cn=et.get(j).currentProgram.getUniforms();for(let Dn=0;Dn<Ke;Dn++)cn.setValue(U,"_gl_DrawID",Dn),Ge.render(dn[Dn]/Ce,kt[Dn])}else if(Q.isInstancedMesh)Ge.renderInstances(Yt,tn,Q.count);else if(it.isInstancedBufferGeometry){let dn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,kt=Math.min(it.instanceCount,dn);Ge.renderInstances(Yt,tn,kt)}else Ge.render(Yt,tn)};function Zr(M,H,it,j){Z!==null&&M.isNodeMaterial&&Z.setObject(j,M),vt===!0&&jt.setState(M,it,!1),M.transparent===!0&&M.side===zi&&M.forceSinglePass===!1?(M.side=Wn,M.needsUpdate=!0,Ln(M,H,j),M.side=ys,M.needsUpdate=!0,Ln(M,H,j),M.side=zi):Ln(M,H,j)}this.compile=function(M,H,it=null){it===null&&(it=M),Z!==null&&Z.renderStart(M,H,it),I=Dt.get(it),I.init(H),S.push(I),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),M!==it&&M.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights(),Z!==null&&Z.updateLights(I.state.lightsArray),wt=this.localClippingEnabled,vt=jt.init(this.clippingPlanes,wt),vt===!0&&jt.setGlobalState(this.clippingPlanes,H),Z!==null&&ne.render(I.state.shadowsArray,it,H);let j=new Set;return M.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ot=Q.material;if(Ot)if(Array.isArray(Ot))for(let Gt=0;Gt<Ot.length;Gt++){let Pt=Ot[Gt];Zr(Pt,it,H,Q),j.add(Pt)}else Zr(Ot,it,H,Q),j.add(Ot)}),I=S.pop(),Z!==null&&Z.renderEnd(),j},this.compileAsync=function(M,H,it=null){let j=this.compile(M,H,it);return new Promise(Q=>{function Ot(){if(j.forEach(function(Gt){let qt=et.get(Gt).currentProgram;(qt===void 0||qt.isReady())&&j.delete(Gt)}),j.size===0){Q(M);return}setTimeout(Ot,10)}Me.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let rr=null;function Jr(M){rr&&rr(M)}function Kr(){oi.stop()}function jr(){oi.start()}let oi=new Ip;oi.setAnimationLoop(Jr),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){rr=M,Zt.setAnimationLoop(M),M===null?oi.stop():oi.start()},Zt.addEventListener("sessionstart",Kr),Zt.addEventListener("sessionend",jr),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;Z!==null&&Z.renderStart(M,H);let it=Zt.enabled===!0&&Zt.isPresenting===!0,j=C!==null&&(Mt===null||it)&&C.begin(k,Mt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(H),H=Zt.getCamera()),M.isScene===!0&&M.onBeforeRender(k,M,H,Mt),I=Dt.get(M,S.length),I.init(H),I.state.textureUnits=ot.getTextureUnits(),S.push(I),bt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),F.setFromProjectionMatrix(bt,Mi,H.reversedDepth),wt=this.localClippingEnabled,vt=jt.init(this.clippingPlanes,wt),b=Lt.get(M,O.length),b.init(),O.push(b),Zt.enabled===!0&&Zt.isPresenting===!0){let Gt=k.xr.getDepthSensingMesh();Gt!==null&&ar(Gt,H,-1/0,k.sortObjects)}ar(M,H,0,k.sortObjects),b.finish(),Z!==null&&Z.updateLights(I.state.lightsArray),k.sortObjects===!0&&b.sort(Ut,ie),le=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,le&&de.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&jt.beginShadows();let Q=I.state.shadowsArray;if(ne.render(Q,M,H),vt===!0&&jt.endShadows(),(j&&C.hasRenderPass())===!1){let Gt=b.opaque,Pt=b.transmissive;if(I.setupLights(),H.isArrayCamera){let qt=H.cameras;if(Pt.length>0)for(let Kt=0,ve=qt.length;Kt<ve;Kt++){let Ee=qt[Kt];vo(Gt,Pt,M,Ee)}le&&de.render(M);for(let Kt=0,ve=qt.length;Kt<ve;Kt++){let Ee=qt[Kt];xo(b,M,Ee,Ee.viewport)}}else Pt.length>0&&vo(Gt,Pt,M,H),le&&de.render(M),xo(b,M,H)}Mt!==null&&rt===0&&(ot.updateMultisampleRenderTarget(Mt),ot.updateRenderTargetMipmap(Mt)),j&&C.end(k),M.isScene===!0&&M.onAfterRender(k,M,H),zt.resetDefaultState(),at=-1,ht=null,S.pop(),S.length>0?(I=S[S.length-1],ot.setTextureUnits(I.state.textureUnits),vt===!0&&jt.setGlobalState(k.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?b=O[O.length-1]:b=null,Z!==null&&Z.renderEnd()};function ar(M,H,it,j){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)it=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLightProbeGrid)I.pushLightProbeGrid(M);else if(M.isLight)I.pushLight(M),M.castShadow&&I.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(F)){j&&te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);let Gt=mt.update(M),Pt=M.material;Pt.visible&&b.push(M,Gt,Pt,it,te.z,null,H)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(F))){let Gt=mt.update(M),Pt=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),te.copy(M.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),te.copy(Gt.boundingSphere.center)),te.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(Pt)){let qt=Gt.groups;for(let Kt=0,ve=qt.length;Kt<ve;Kt++){let Ee=qt[Kt],Yt=Pt[Ee.materialIndex];Yt&&Yt.visible&&b.push(M,Gt,Yt,it,te.z,Ee,H)}}else Pt.visible&&b.push(M,Gt,Pt,it,te.z,null,H)}}let Ot=M.children;for(let Gt=0,Pt=Ot.length;Gt<Pt;Gt++)ar(Ot[Gt],H,it,j)}function xo(M,H,it,j){let{opaque:Q,transmissive:Ot,transparent:Gt}=M;I.setupLightsView(it),vt===!0&&jt.setGlobalState(k.clippingPlanes,it),j&&x.viewport(gt.copy(j)),Q.length>0&&Cs(Q,H,it),Ot.length>0&&Cs(Ot,H,it),Gt.length>0&&Cs(Gt,H,it),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function vo(M,H,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[j.id]===void 0){let Yt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[j.id]=new Kn(1,1,{generateMipmaps:!0,type:Yt?Ai:Qn,minFilter:Ms,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let Ot=I.state.transmissionRenderTarget[j.id],Gt=j.viewport||gt;Ot.setSize(Gt.z*k.transmissionResolutionScale,Gt.w*k.transmissionResolutionScale);let Pt=k.getRenderTarget(),qt=k.getActiveCubeFace(),Kt=k.getActiveMipmapLevel();k.setRenderTarget(Ot),k.getClearColor(Pe),we=k.getClearAlpha(),we<1&&k.setClearColor(16777215,.5),k.clear(),le&&de.render(it);let ve=k.toneMapping;k.toneMapping=Ei;let Ee=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),I.setupLightsView(j),vt===!0&&jt.setGlobalState(k.clippingPlanes,j),Cs(M,it,j),ot.updateMultisampleRenderTarget(Ot),ot.updateRenderTargetMipmap(Ot),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ke=0,tn=H.length;ke<tn;ke++){let fe=H[ke],{object:Ge,geometry:dn,material:kt,group:Ke}=fe;if(kt.side===zi&&Ge.layers.test(j.layers)){let Ce=kt.side;kt.side=Wn,kt.needsUpdate=!0,yo(Ge,it,j,dn,kt,Ke),kt.side=Ce,kt.needsUpdate=!0,Yt=!0}}Yt===!0&&(ot.updateMultisampleRenderTarget(Ot),ot.updateRenderTargetMipmap(Ot))}k.setRenderTarget(Pt,qt,Kt),k.setClearColor(Pe,we),Ee!==void 0&&(j.viewport=Ee),k.toneMapping=ve}function Cs(M,H,it){let j=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Ot=M.length;Q<Ot;Q++){let Gt=M[Q],{object:Pt,geometry:qt,group:Kt}=Gt,ve=Gt.material;ve.allowOverride===!0&&j!==null&&(ve=j),Pt.layers.test(it.layers)&&yo(Pt,H,it,qt,ve,Kt)}}function yo(M,H,it,j,Q,Ot){Z!==null&&Q.isNodeMaterial&&Z.setObject(M,Q),M.onBeforeRender(k,H,it,j,Q,Ot),M.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Q.onBeforeRender(k,H,it,j,M,Ot),Q.transparent===!0&&Q.side===zi&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,k.renderBufferDirect(it,H,j,Q,M,Ot),Q.side=ys,Q.needsUpdate=!0,k.renderBufferDirect(it,H,j,Q,M,Ot),Q.side=zi):k.renderBufferDirect(it,H,j,Q,M,Ot),M.onAfterRender(k,H,it,j,Q,Ot)}function Ln(M,H,it){H.isScene!==!0&&(H=$t);let j=et.get(M),Q=I.state.lights,Ot=I.state.shadowsArray,Gt=Q.state.version,Pt=Ft.getParameters(M,Q.state,Ot,H,it,I.state.lightProbeGridArray),qt=Ft.getProgramCacheKey(Pt),Kt=j.programs;j.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;let ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;j.envMap=At.get(M.envMap||j.environment,ve),j.envMapRotation=j.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Kt===void 0&&(M.addEventListener("dispose",_n),Kt=new Map,j.programs=Kt);let Ee=Kt.get(qt);if(Ee!==void 0){if(j.currentProgram===Ee&&j.lightsStateVersion===Gt)return je(M,Pt),Ee}else Pt.uniforms=Ft.getUniforms(M),Z!==null&&M.isNodeMaterial&&Z.build(M,it,Pt),M.onBeforeCompile(Pt,k),Ee=Ft.acquireProgram(Pt,qt),Kt.set(qt,Ee),j.uniforms=Pt.uniforms;let Yt=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Yt.clippingPlanes=jt.uniform),je(M,Pt),j.needsLights=Se(M),j.lightsStateVersion=Gt,j.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.sunLights.value=Q.state.sun,Yt.sunLightShadows.value=Q.state.sunShadow,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Yt.sunShadowCascade.value=Q.state.sunShadowCascade,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=I.state.lightProbeGridArray.length>0,j.currentProgram=Ee,j.uniformsList=null,Ee}function ln(M){if(M.uniformsList===null){let H=M.currentProgram.getUniforms();M.uniformsList=Gr.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function je(M,H){let it=et.get(M);it.outputColorSpace=H.outputColorSpace,it.batching=H.batching,it.batchingColor=H.batchingColor,it.instancing=H.instancing,it.instancingColor=H.instancingColor,it.instancingMorph=H.instancingMorph,it.skinning=H.skinning,it.morphTargets=H.morphTargets,it.morphNormals=H.morphNormals,it.morphColors=H.morphColors,it.morphTargetsCount=H.morphTargetsCount,it.numClippingPlanes=H.numClippingPlanes,it.numIntersection=H.numClipIntersection,it.vertexAlphas=H.vertexAlphas,it.vertexTangents=H.vertexTangents,it.toneMapping=H.toneMapping}function qn(M,H){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;w.setFromMatrixPosition(H.matrixWorld);for(let it=0,j=M.length;it<j;it++){let Q=M[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(w))return Q}return null}function mi(M,H,it,j,Q){H.isScene!==!0&&(H=$t),ot.resetTextureUnits();let Ot=H.fog,Gt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,Pt=Mt===null?k.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Re.workingColorSpace,qt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Kt=At.get(j.envMap||Gt,qt),ve=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ee=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Yt=!!it.morphAttributes.position,ke=!!it.morphAttributes.normal,tn=!!it.morphAttributes.color,fe=Ei;j.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(fe=k.toneMapping);let Ge=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,dn=Ge!==void 0?Ge.length:0,kt=et.get(j),Ke=I.state.lights;if(vt===!0&&(wt===!0||M!==ht)){let Fe=M===ht&&j.id===at;jt.setState(j,M,Fe)}let Ce=!1;j.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ke.state.version||kt.outputColorSpace!==Pt||Q.isBatchedMesh&&kt.batching===!1||!Q.isBatchedMesh&&kt.batching===!0||Q.isBatchedMesh&&kt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&kt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||Q.isInstancedMesh&&kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&kt.instancingMorph===!1&&Q.morphTexture!==null||kt.envMap!==Kt||j.fog===!0&&kt.fog!==Ot||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==jt.numPlanes||kt.numIntersection!==jt.numIntersection)||kt.vertexAlphas!==ve||kt.vertexTangents!==Ee||kt.morphTargets!==Yt||kt.morphNormals!==ke||kt.morphColors!==tn||kt.toneMapping!==fe||kt.morphTargetsCount!==dn||!!kt.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,kt.__version=j.version);let cn=kt.currentProgram;Ce===!0&&(cn=Ln(j,H,Q),Z&&j.isNodeMaterial&&Z.onUpdateProgram(j,cn,kt));let Dn=!1,Ci=!1,os=!1,ye=cn.getUniforms(),en=kt.uniforms;if(x.useProgram(cn.program)&&(Dn=!0,Ci=!0,os=!0),j.id!==at&&(at=j.id,Ci=!0),kt.needsLights){let Fe=qn(I.state.lightProbeGridArray,Q);kt.lightProbeGrid!==Fe&&(kt.lightProbeGrid=Fe,Ci=!0)}if(Dn||ht!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ye.setValue(U,"projectionMatrix",M.projectionMatrix),ye.setValue(U,"viewMatrix",M.matrixWorldInverse);let Ii=ye.map.cameraPosition;Ii!==void 0&&Ii.setValue(U,Et.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ye.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),ht!==M&&(ht=M,Ci=!0,os=!0)}if(kt.needsLights&&(Ke.state.sunShadowMap.length>0&&ye.setValue(U,"sunShadowMap",Ke.state.sunShadowMap,ot),Ke.state.directionalShadowMap.length>0&&ye.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,ot),Ke.state.spotShadowMap.length>0&&ye.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,ot),Ke.state.pointShadowMap.length>0&&ye.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,ot)),Q.isSkinnedMesh){ye.setOptional(U,Q,"bindMatrix"),ye.setOptional(U,Q,"bindMatrixInverse");let Fe=Q.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ye.setValue(U,"boneTexture",Fe.boneTexture,ot))}Q.isBatchedMesh&&(ye.setOptional(U,Q,"batchingTexture"),ye.setValue(U,"batchingTexture",Q._matricesTexture,ot),ye.setOptional(U,Q,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",Q._indirectTexture,ot),ye.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",Q._colorsTexture,ot));let Ri=it.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&W.update(Q,it,cn),(Ci||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,ye.setValue(U,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Ky()),Ci){if(ye.setValue(U,"toneMappingExposure",k.toneMappingExposure),kt.needsLights&&xn(en,os),Ot&&j.fog===!0&&Xt.refreshFogUniforms(en,Ot),Xt.refreshMaterialUniforms(en,j,pt,nt,I.state.transmissionRenderTarget[M.id]),kt.needsLights&&kt.lightProbeGrid){let Fe=kt.lightProbeGrid;en.probesSH.value=Fe.texture,en.probesMin.value.copy(Fe.boundingBox.min),en.probesMax.value.copy(Fe.boundingBox.max),en.probesResolution.value.copy(Fe.resolution)}Gr.upload(U,ln(kt),en,ot)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Gr.upload(U,ln(kt),en,ot),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ye.setValue(U,"center",Q.center),ye.setValue(U,"modelViewMatrix",Q.modelViewMatrix),ye.setValue(U,"normalMatrix",Q.normalMatrix),ye.setValue(U,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let Fe=j.uniformsGroups;for(let Ii=0,li=Fe.length;Ii<li;Ii++){let vn=Fe[Ii];xt.update(vn,cn),xt.bind(vn,cn)}}return cn}function xn(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.sunLights.needsUpdate=H,M.sunLightShadows.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Se(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(M,H,it){let j=et.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(M.texture).__webglTexture=H,et.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){let it=et.get(M);it.__webglFramebuffer=H,it.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,it=0){Mt=M,st=H,rt=it;let j=null,Q=!1,Ot=!1;if(M){let Pt=et.get(M);if(Pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Pt.__webglFramebuffer),gt.copy(M.viewport),Jt.copy(M.scissor),Wt=M.scissorTest,x.viewport(gt),x.scissor(Jt),x.setScissorTest(Wt),at=-1;return}else if(Pt.__webglFramebuffer===void 0)ot.setupRenderTarget(M);else if(Pt.__hasExternalTextures)ot.rebindTextures(M,et.get(M.texture).__webglTexture,et.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ve=M.depthTexture;if(Pt.__boundDepthTexture!==ve){if(ve!==null&&et.has(ve)&&(M.width!==ve.image.width||M.height!==ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(M)}}let qt=M.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ot=!0);let Kt=et.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Kt[H])?j=Kt[H][it]:j=Kt[H],Q=!0):M.samples>0&&ot.useMultisampledRTT(M)===!1?j=et.get(M).__webglMultisampledFramebuffer:Array.isArray(Kt)?j=Kt[it]:j=Kt,gt.copy(M.viewport),Jt.copy(M.scissor),Wt=M.scissorTest}else gt.copy(Ct).multiplyScalar(pt).floor(),Jt.copy(Ht).multiplyScalar(pt).floor(),Wt=Le;if(it!==0&&(j=J),x.bindFramebuffer(U.FRAMEBUFFER,j)&&x.drawBuffers(M,j),x.viewport(gt),x.scissor(Jt),x.setScissorTest(Wt),Q){let Pt=et.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,it)}else if(Ot){let Pt=H;for(let qt=0;qt<M.textures.length;qt++){let Kt=et.get(M.textures[qt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,it,Pt)}}else if(M!==null&&it!==0){let Pt=et.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,it)}at=-1};function Qe(M){let H=et.get(M);return(H.__readFormat!==M.format||H.__readType!==M.type)&&(H.__readFormat=M.format,H.__readType=M.type,H.__formatReadable=R.textureFormatReadable(M.format),H.__typeReadable=R.textureTypeReadable(M.type)),H}this.readRenderTargetPixels=function(M,H,it,j,Q,Ot,Gt,Pt=0){if(!(M&&M.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt){x.bindFramebuffer(U.FRAMEBUFFER,qt);try{let Kt=M.textures[Pt],ve=Kt.format,Ee=Kt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);let Yt=Qe(Kt);if(Yt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-j&&it>=0&&it<=M.height-Q&&U.readPixels(H,it,j,Q,Rt.convert(ve),Rt.convert(Ee),Ot)}finally{let Kt=Mt!==null?et.get(Mt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(M,H,it,j,Q,Ot,Gt,Pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt)if(H>=0&&H<=M.width-j&&it>=0&&it<=M.height-Q){x.bindFramebuffer(U.FRAMEBUFFER,qt);let Kt=M.textures[Pt],ve=Kt.format,Ee=Kt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);let Yt=Qe(Kt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.bufferData(U.PIXEL_PACK_BUFFER,Ot.byteLength,U.STREAM_READ),U.readPixels(H,it,j,Q,Rt.convert(ve),Rt.convert(Ee),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let tn=Mt!==null?et.get(Mt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,tn);let fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await tp(U,fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ot),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ke),U.deleteSync(fe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,it=0){let j=Math.pow(2,-it),Q=Math.floor(M.image.width*j),Ot=Math.floor(M.image.height*j),Gt=H!==null?H.x:0,Pt=H!==null?H.y:0;ot.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,it,0,0,Gt,Pt,Q,Ot),x.unbindTexture()},this.copyTextureToTexture=function(M,H,it=null,j=null,Q=0,Ot=0){let Gt,Pt,qt,Kt,ve,Ee,Yt,ke,tn,fe=M.isCompressedTexture?M.mipmaps[Ot]:M.image;if(it!==null)Gt=it.max.x-it.min.x,Pt=it.max.y-it.min.y,qt=it.isBox3?it.max.z-it.min.z:1,Kt=it.min.x,ve=it.min.y,Ee=it.isBox3?it.min.z:0;else{let en=Math.pow(2,-Q);Gt=Math.floor(fe.width*en),Pt=Math.floor(fe.height*en),M.isDataArrayTexture?qt=fe.depth:M.isData3DTexture?qt=Math.floor(fe.depth*en):qt=1,Kt=0,ve=0,Ee=0}j!==null?(Yt=j.x,ke=j.y,tn=j.z):(Yt=0,ke=0,tn=0);let Ge=Rt.convert(H.format),dn=Rt.convert(H.type),kt;H.isData3DTexture?(ot.setTexture3D(H,0),kt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ot.setTexture2DArray(H,0),kt=U.TEXTURE_2D_ARRAY):(ot.setTexture2D(H,0),kt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);let Ke=x.getParameter(U.UNPACK_ROW_LENGTH),Ce=x.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=x.getParameter(U.UNPACK_SKIP_PIXELS),Dn=x.getParameter(U.UNPACK_SKIP_ROWS),Ci=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Kt),x.pixelStorei(U.UNPACK_SKIP_ROWS,ve),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee);let os=M.isDataArrayTexture||M.isData3DTexture,ye=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){let en=et.get(M),Ri=et.get(H),Fe=et.get(en.__renderTarget),Ii=et.get(Ri.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Fe.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let li=0;li<qt;li++)os&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get(M).__webglTexture,Q,Ee+li),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get(H).__webglTexture,Ot,tn+li)),U.blitFramebuffer(Kt,ve,Gt,Pt,Yt,ke,Gt,Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||M.isRenderTargetTexture||et.has(M)){let en=et.get(M),Ri=et.get(H);x.bindFramebuffer(U.READ_FRAMEBUFFER,V),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,K);for(let Fe=0;Fe<qt;Fe++)os?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,Q,Ee+Fe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,Q),ye?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ri.__webglTexture,Ot,tn+Fe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ri.__webglTexture,Ot),Q!==0?U.blitFramebuffer(Kt,ve,Gt,Pt,Yt,ke,Gt,Pt,U.COLOR_BUFFER_BIT,U.NEAREST):ye?U.copyTexSubImage3D(kt,Ot,Yt,ke,tn+Fe,Kt,ve,Gt,Pt):U.copyTexSubImage2D(kt,Ot,Yt,ke,Kt,ve,Gt,Pt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ye?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(kt,Ot,Yt,ke,tn,Gt,Pt,qt,Ge,dn,fe.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,Ot,Yt,ke,tn,Gt,Pt,qt,Ge,fe.data):U.texSubImage3D(kt,Ot,Yt,ke,tn,Gt,Pt,qt,Ge,dn,fe):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ot,Yt,ke,Gt,Pt,Ge,dn,fe.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ot,Yt,ke,fe.width,fe.height,Ge,fe.data):U.texSubImage2D(U.TEXTURE_2D,Ot,Yt,ke,Gt,Pt,Ge,dn,fe);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ce),x.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),x.pixelStorei(U.UNPACK_SKIP_ROWS,Dn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ci),Ot===0&&H.generateMipmaps&&U.generateMipmap(kt),x.unbindTexture()},this.initRenderTarget=function(M){et.get(M).__webglFramebuffer===void 0&&ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ot.setTextureCube(M,0):M.isData3DTexture?ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ot.setTexture2DArray(M,0):ot.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){st=0,rt=0,Mt=null,x.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var Bp=new Gn,Hc=new B,ss=class extends Za{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new sn(t,3)),this.setAttribute("uv",new sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new vs(e,6,1);return this.setAttribute("instanceStart",new wi(n,3,0)),this.setAttribute("instanceEnd",new wi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new vs(e,6,1);return this.setAttribute("instanceColorStart",new wi(n,3,0)),this.setAttribute("instanceColorEnd",new wi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ha(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Bp.setFromBufferAttribute(e),this.boundingBox.union(Bp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Hc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Hc)),Hc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Hc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:ao.merge([Bt.common,Bt.fog,Bt.line]),vertexShader:`
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
		`};var Hi=class extends wn{constructor(t){super({type:"LineMaterial",uniforms:ao.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Xu=new He,zp=new B,kp=new B,Cn=new He,Rn=new He,Gi=new He,qu=new B,Yu=new Ue,In=new Ja,Vp=new B,Gc=new Gn,Wc=new jn,Wi=new He,$i,Ks;function Hp(i,t,e){return Wi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Wi.multiplyScalar(1/Wi.w),Wi.x=Ks/e.width,Wi.y=Ks/e.height,Wi.applyMatrix4(i.projectionMatrixInverse),Wi.multiplyScalar(1/Wi.w),Math.abs(Math.max(Wi.x,Wi.y))}function jy(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){In.start.fromBufferAttribute(s,o),In.end.fromBufferAttribute(r,o),In.applyMatrix4(e);let c=new B,h=new B;$i.distanceSqToSegment(In.start,In.end,h,c),h.distanceTo(c)<Ks*.5&&t.push({point:h,pointOnLine:c,distance:$i.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Qy(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),m=-t.near;$i.at(1,Gi),Gi.w=1,Gi.applyMatrix4(t.matrixWorldInverse),Gi.applyMatrix4(n),Gi.multiplyScalar(1/Gi.w),Gi.x*=r.x/2,Gi.y*=r.y/2,Gi.z=0,qu.copy(Gi),Yu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,g=h;u<g;u++){if(Cn.fromBufferAttribute(l,u),Rn.fromBufferAttribute(c,u),Cn.w=1,Rn.w=1,Cn.applyMatrix4(Yu),Rn.applyMatrix4(Yu),Cn.z>m&&Rn.z>m)continue;if(Cn.z>m){let N=Cn.z-Rn.z,w=(Cn.z-m)/N;Cn.lerp(Rn,w)}else if(Rn.z>m){let N=Rn.z-Cn.z,w=(Rn.z-m)/N;Rn.lerp(Cn,w)}Cn.applyMatrix4(n),Rn.applyMatrix4(n),Cn.multiplyScalar(1/Cn.w),Rn.multiplyScalar(1/Rn.w),Cn.x*=r.x/2,Cn.y*=r.y/2,Rn.x*=r.x/2,Rn.y*=r.y/2,In.start.copy(Cn),In.start.z=0,In.end.copy(Rn),In.end.z=0;let E=In.closestPointToPointParameter(qu,!0);In.at(E,Vp);let f=Eu.lerp(Cn.z,Rn.z,E),d=f>=-1&&f<=1,L=qu.distanceTo(Vp)<Ks*.5;if(d&&L){In.start.fromBufferAttribute(l,u),In.end.fromBufferAttribute(c,u),In.start.applyMatrix4(a),In.end.applyMatrix4(a);let N=new B,w=new B;$i.distanceSqToSegment(In.start,In.end,w,N),e.push({point:w,pointOnLine:N,distance:$i.origin.distanceTo(w),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var js=class extends bn{constructor(t=new ss,e=new Hi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)zp.fromBufferAttribute(e,a),kp.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+zp.distanceTo(kp);let r=new vs(s,2,1);return t.setAttribute("instanceDistanceStart",new wi(r,1,0)),t.setAttribute("instanceDistanceEnd",new wi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;$i=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ks=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Wc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ks*.5;else{let m=Math.max(s.near,Wc.distanceToPoint($i.origin));c=Hp(s,m,l.resolution)}if(Wc.radius+=c,$i.intersectsSphere(Wc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Gc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ks*.5;else{let m=Math.max(s.near,Gc.distanceToPoint($i.origin));h=Hp(s,m,l.resolution)}Gc.expandByScalar(h),$i.intersectsBox(Gc)!==!1&&(n?jy(this,e):Qy(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Xu),this.material.uniforms.resolution.value.set(Xu.z,Xu.w))}};function Gp(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:m,list:u,clamp:g,norm:_,munis:E}=i,f=p=>document.querySelector(p),d=p=>String(p).replace(/[<>&"]/g,y=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[y]),L=(p,y)=>[(p-l)*o,(y-c)*o],N=.06,w=t.segs.map(p=>{let y=[],T=[0];for(let A=0;A<p.length;A+=2){let P=L(p[A],p[A+1]);y.length&&T.push(T[T.length-1]+Math.hypot(P[0]-y[y.length-1][0],P[1]-y[y.length-1][1])),y.push(P)}return{p:y,c:T,L:T[T.length-1]}}),b=t.stops.map(([p,y,T,A])=>({n:p,id:A,w:L(y,T),fams:new Set})),I=t.routes.map(([p,y,T])=>({s:p,l:y,c:T})),O=(p,y)=>{let T=p.match(/^R([A-Z]*)(\d*)(.*)$/),A=y.match(/^R([A-Z]*)(\d*)(.*)$/);return(T[1]||"").localeCompare(A[1]||"")||(+T[2]||0)-(+A[2]||0)||T[3].localeCompare(A[3])},S=[...new Set(I.map(p=>p.s))].sort(O),C={};I.forEach(p=>{C[p.s]||(C[p.s]=p.c)});let k=t.pats.map(([p,y,T])=>({stops:p,t:y,segs:T})),$=t.trips.map(([p,y,T,A,P],D)=>({day:p,pat:k[y],fam:I[T].s,c:I[T].c,t0:A,num:P,tid:t.tids[D]})),Z={};S.forEach(p=>Z[p]=new Set),$.forEach(p=>{p.pat.segs.forEach(y=>Z[p.fam].add(y)),p.pat.stops.forEach(y=>b[y].fams.add(p.fam))});let J=t.days.map((p,y)=>$.filter(T=>T.day===y)),V=new Map($.map(p=>[p.tid,p])),K=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],st=Math.PI/180,rt=3.922*st,Mt=-39.705*st;function at(p,y){let T=p*st+rt,A=y*st,P=Math.cos(Mt),D=Math.sin(Mt),q=Math.cos(A),G=Math.cos(T)*q,X=Math.sin(T)*q,tt=Math.sin(A),ct=Math.atan2(X,G*P-tt*D),v=Math.asin(tt*P+G*D),z=Math.sqrt(2/(1+Math.cos(ct)*Math.cos(v))),dt=z*Math.cos(v)*Math.sin(ct),ft=z*Math.sin(v),[Vt,se,ue,_t,yt,re,_e]=K;return L((se+Vt*dt-yt)*_e,(re-(_t-ue*ft))*_e)}let ht=new Map(b.map((p,y)=>[p.id,y]));function gt(p){if(p.g)return p.g;let y=[],T=[],A=[0],P=0;return p.segs.forEach((D,q)=>{let G=w[D];G.p.forEach((X,tt)=>{q&&!tt||(y.push(X),T.push(P+G.c[tt]))}),P+=G.L,A.push(P)}),p.g={pts:y,cum:T,stopD:A}}function Jt(p,y,T,A){let P=1e18,D=0;for(let q=0;q+1<p.pts.length;q++){if(p.cum[q+1]<T||p.cum[q]>A)continue;let G=p.pts[q],X=p.pts[q+1],tt=X[0]-G[0],ct=X[1]-G[1],v=tt*tt+ct*ct||1e-9,z=Math.max(0,Math.min(1,((y[0]-G[0])*tt+(y[1]-G[1])*ct)/v)),dt=G[0]+tt*z-y[0],ft=G[1]+ct*z-y[1],Vt=dt*dt+ft*ft;Vt<P&&(P=Vt,D=p.cum[q]+z*(p.cum[q+1]-p.cum[q]))}return{d:D,err:Math.sqrt(P)}}function Wt(p,y){let T=0,A=p.cum.length-1;if(y<=0)return p.pts[0];if(y>=p.cum[A])return p.pts[A];for(;A-T>1;){let G=T+A>>1;p.cum[G]<=y?T=G:A=G}let P=(y-p.cum[T])/(p.cum[A]-p.cum[T]||1),D=p.pts[T],q=p.pts[A];return[D[0]+(q[0]-D[0])*P,D[1]+(q[1]-D[1])*P]}let Pe=p=>`${p.slice(6,8)}/${p.slice(4,6)}`,we=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Te(p){let y={};return we.formatToParts(p).forEach(T=>y[T.type]=T.value),{ymd:y.year+y.month+y.day,min:+y.hour*60+ +y.minute+ +y.second/60}}let nt=0,pt=null,Ut=0,ie=0;function Ct(){let p=Te(new Date);if(nt===0&&pt==null)return{...p,live:!0};let y=pt==null?p.min:Ut+(nt?(performance.now()-ie)/6e4*nt:0);return{ymd:p.ymd,min:y,live:!1}}let Ht=p=>(p=(Math.round(p)%1440+1440)%1440,String(Math.floor(p/60)).padStart(2,"0")+":"+String(p%60).padStart(2,"0")),Le="https://rodalies.erathegameoftime.com",F={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let p=new URLSearchParams(location.search).get("rt");p&&localStorage.setItem("rod_rt",p);let y=localStorage.getItem("rod_rt");y&&/jhmuyo\.workers\.dev/.test(y)&&(y=Le,localStorage.setItem("rod_rt",y)),F.url=y||Le}catch{F.url=Le}let vt=(p,y)=>fetch(p+y,{cache:"no-store"}).then(T=>{if(!T.ok)throw new Error("HTTP "+T.status);return T.json()}),wt=p=>/^51/.test(p||"");async function bt(){if(!F.url){te();return}let p=F.url.replace(/\/+$/,"");(!F.repFail||Date.now()-F.repFail>15*6e4)&&vt(p,"/reports.json").then(X=>{X&&Array.isArray(X.items)?(F.rep=X.items,F.repSkew=(X.now||Date.now())-Date.now(),X.tipos&&(F.tipos=X.tipos),F.repOk=Date.now(),F.repFail=0):F.repFail=Date.now()}).catch(()=>{F.repFail=Date.now(),F.repOk=0});let y=!F.adifAt||Date.now()-F.adifAt>11e4,[T,A,P,D,q]=await Promise.allSettled([vt(p,"/trip_updates.json"),vt(p,"/vehicle_positions.json"),vt(p,"/alerts.json"),vt(p,"/notices.json"),y?vt(p,"/adif.json"):Promise.reject(0)]);if(q.status==="fulfilled"&&q.value&&q.value.ok?(F.adif=q.value,F.adifAt=Date.now()):y&&(F.adifAt=Date.now()-6e4),T.status==="fulfilled"){let X=new Map,tt=new Map;for(let ct of T.value.entity||[]){let v=ct.tripUpdate;if(!v||!v.trip||!wt(v.trip.tripId))continue;let z=v.trip.tripId,dt=(v.stopTimeUpdate||[])[0],ft=v.delay;ft==null&&dt&&(ft=(dt.arrival||dt.departure||{}).delay),v.trip.scheduleRelationship==="CANCELED"&&(ft="X"),ft!=null&&X.set(z,ft),tt.set(z,{next:dt?{sid:dt.stopId,t:+((dt.arrival||dt.departure||{}).time||0)}:null})}F.delays=X,F.tu=tt,F.ok=Date.now(),F.feedTs=+((T.value.header||{}).timestamp||0)*1e3,F.err=""}else F.err=T.reason&&T.reason.message||"sin respuesta";if(A.status==="fulfilled"){let X=new Map,tt=Date.now()/1e3;for(let ct of A.value.entity||[]){let v=ct.vehicle;if(!v||!v.trip||!wt(v.trip.tripId)||!v.position)continue;let z=v.vehicle&&v.vehicle.label||"",dt=z.match(/PLATF\.\(([^)]+)\)/),ft=F.vp.get(v.trip.tripId),Vt={tid:v.trip.tripId,w:at(+v.position.longitude,+v.position.latitude),st:v.currentStatus||"",sid:v.stopId||"",ts:+v.timestamp||tt,label:z,plat:dt?dt[1]:"",fam:(z.split("-")[0]||"").trim(),num:v.vehicle&&v.vehicle.id||""};Vt.disp=ft?ft.disp:null,X.set(Vt.tid,Vt)}F.vp=X,F.okVP=Date.now()}let G=[];if(D.status==="fulfilled"&&Array.isArray(D.value.included)){F.okNotices=Date.now();for(let X of D.value.included){let tt=new Set((X.lines||[]).map(z=>z.id).filter(z=>C[z])),ct=z=>((z||{}).es||(z||{}).ca||"").trim(),v=[ct(X.description),ct(X.title)].sort((z,dt)=>dt.length-z.length)[0];v&&G.push({id:"N"+X.externalId,fams:tt,stops:new Set,txt:v,when:(X.date||"")+"T"+(X.time||""),src:"Rodalies",core:X.core||""})}}if(P.status==="fulfilled"){let X=+((P.value.header||{}).timestamp||0);if(F.alertsTs=X,Date.now()/1e3-X<6*3600)for(let tt of P.value.entity||[]){let ct=tt.alert;if(!ct)continue;let v=new Set,z=new Set;for(let se of ct.informedEntity||[])(se.routeId||"").startsWith("51")&&v.add(se.routeId.replace(/^51T\d+/,"")),se.stopId&&ht.has(se.stopId)&&z.add(ht.get(se.stopId));if(!v.size&&!z.size)continue;let dt=(ct.descriptionText||ct.headerText||{translation:[]}).translation||[],ft=((dt.find(se=>se.language==="es")||dt[0]||{}).text||"").trim(),Vt=+((ct.activePeriod||[])[0]||{}).start||0;G.some(se=>se.txt===ft)||G.push({id:tt.id,fams:v,stops:z,txt:ft,when:Vt?new Date(Vt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(F.adif&&Date.now()-F.adifAt<15*6e4)for(let[X,tt]of(F.adif.items||[]).entries()){let ct=(tt.t?tt.t+". ":"")+tt.txt,v=new Set,z=new Set,dt=_(ct);for(let ft of ct.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))C[ft[1]]&&v.add(ft[1]);b.forEach((ft,Vt)=>{ft.fams.size&&ft.n.length>4&&dt.includes(_(ft.n))&&(z.add(Vt),v.size||ft.fams.forEach(se=>v.add(se)))}),G.some(ft=>ft.txt===ct)||G.push({id:"A"+X,fams:v,stops:z,txt:ct,when:F.adif.upd||"",src:"Adif",lvl:tt.lvl})}if(D.status==="fulfilled"||P.status==="fulfilled"||F.adif){F.alerts=G.sort((X,tt)=>tt.when>X.when?1:-1);try{Im()}catch{}}te(),lh(),mi=0,a()}let Et=()=>F.okVP&&Date.now()-F.okVP<9e4;function te(){let p=f("#rtst"),y=f("#mode");if(y){let A=!!Et()&&Ct().live;y.classList.toggle("on",A),y.classList.toggle("pre",!A),y.textContent=A?"En directo":$t.cur?"Repaso real":"Previsi\xF3n",y.classList.toggle("past",!!$t.cur),y.title=$t.cur?`Retrasos reales de la foto de las ${$t.cur.sn.t} (se toma una cada 15 min)`:""}if(!p)return;F.url?F.err?p.textContent="No se pudo conectar con el puente ("+F.err+"). Se usa el horario.":Et()?p.innerHTML=`Conectado \xB7 ${F.vp.size} trenes con posici\xF3n real y ${F.delays.size} con retraso \xB7 actualizado a las ${new Date(F.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:p.textContent="Conectando\u2026":p.textContent=F.err||"Sin puente: trenes seg\xFAn horario oficial.";let T=f("#rturl");T&&T._shown!==F.url&&(T.value=F.url,T._shown=F.url)}f("#rtsave").onclick=()=>{let p=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(p&&!/^https?:\/\//.test(p)&&(p="https://"+p),!p){F.err="pega la direcci\xF3n de tu puente",te();return}F.url=p;try{localStorage.setItem("rod_rt",p)}catch{}F.ok=0,F.err="",te(),bt()},f("#rtoff").onclick=()=>{F.url=Le;try{localStorage.removeItem("rod_rt")}catch{}h._h="",bt()},setInterval(bt,2e4),setTimeout(bt,50);let $t={snap:null,key:""};function le(){let p=Ct();if(p.live||!fe.hoy||!fe.hoy.snaps||nt&&pt==null)return null;let y=Te(new Date).min;if(p.min>y+1)return null;let T=null;for(let A of fe.hoy.snaps){if(!A.d)continue;let P=yd(A.t);P<=p.min+1&&(!T||P>T.m)&&(T={m:P,sn:A})}return T&&p.min-T.m<=25?T:null}let he=p=>{{let P=sh(p.num);if(P&&P.cx&&Ct().live)return"X"}let y=$t.cur;if(y){if(y.sn.x&&y.sn.x.includes(p.tid))return"X";let P=y.sn.d[p.tid];return P??0}if(!Et())return null;let T=F.delays.get(p.tid),A=F.vp.get(p.tid);return T==="X"?T:A&&A.pre&&A.preDl>=1?Math.max(typeof T=="number"?T:0,A.preDl*60):T??null},U=new Set(S);try{let p=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(p)&&p.some(y=>S.includes(y))&&(U.clear(),p.forEach(y=>S.includes(y)&&U.add(y)))}catch{}let De=new ss,Me=new ss,R=new Hi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),x=new Hi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),Y=new js(De,R),et=new js(Me,x);et.renderOrder=20,Y.renderOrder=21,Y.frustumCulled=et.frustumCulled=!1,e.add(et,Y);let ot=!1;function At(){if(ot||!E.length)return;ot=!0,e.updateMatrixWorld(!0);let p=new Xs,y=E.map(P=>P.mesh),T=new B(0,0,-1);b.forEach(P=>{p.set(new B(P.w[0],P.w[1],50),T),P.ext=!p.intersectObjects(y,!1).length});let A=(P,D)=>b.findIndex(q=>Math.hypot(q.w[0]-P[0],q.w[1]-P[1])<.05);w.forEach(P=>{let D=A(P.p[0]),q=A(P.p[P.p.length-1]),G=X=>(p.set(new B(X[0],X[1],50),T),!p.intersectObjects(y,!1).length);P.ext=(D>=0?b[D].ext:G(P.p[0]))&&(q>=0?b[q].ext:G(P.p[P.p.length-1]))})}let It=()=>{let p=new Set(U.size<=2?U:[]);try{Se&&Se.fam&&p.add(Se.fam)}catch{}return p},lt="";function mt(){At();let p=[],y=[],T=new Set,A=new oe,P=new oe("#d2d0d0"),D=It();lt=[...D].join();for(let q of S)if(U.has(q))for(let G of Z[q]){if(T.has(G))continue;T.add(G);let X=w[G].p;A.set(C[q]),w[G].ext&&!D.has(q)&&A.lerp(P,.72);for(let tt=0;tt+1<X.length;tt++)p.push(X[tt][0],X[tt][1],N,X[tt+1][0],X[tt+1][1],N),y.push(A.r,A.g,A.b,A.r,A.g,A.b)}p.length||(p.push(0,0,-50,0,0,-50),y.push(0,0,0,0,0,0)),De.setPositions(p),De.setColors(y),Me.setPositions(p),a()}mt();let Ft=p=>new wn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe(p)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Xt=new rn,Lt=b.length,Dt=new Float32Array(Lt*3),jt=new Float32Array(Lt*3),ne=new Float32Array(Lt),de=new Float32Array(Lt);b.forEach((p,y)=>{Dt[y*3]=p.w[0],Dt[y*3+1]=p.w[1],Dt[y*3+2]=N,jt.set([1,1,1],y*3),ne[y]=6,de[y]=1.6}),Xt.setAttribute("position",new Xe(Dt,3)),Xt.setAttribute("fill",new Xe(jt,3)),Xt.setAttribute("size",new Xe(ne,1)),Xt.setAttribute("bw",new Xe(de,1));let W=new Gs(Xt,Ft("#1d2330"));W.renderOrder=22,W.frustumCulled=!1,e.add(W);function Tt(){let p=r.dist<45,y=It();b.forEach((T,A)=>{let P=[...T.fams].some(q=>U.has(q)),D=T.ext&&![...T.fams].some(q=>y.has(q))&&A!==Qe;ne[A]=P?A===Qe?13:D?3:p?8:5:0,de[A]=A===Qe?3:1.6}),Xt.attributes.size.needsUpdate=!0,Xt.attributes.bw.needsUpdate=!0}let ut=600,Rt=new rn,zt=new Float32Array(ut*3),xt=new Float32Array(ut*3),Qt=new Float32Array(ut),Zt=new Float32Array(ut);Rt.setAttribute("position",new Xe(zt,3)),Rt.setAttribute("fill",new Xe(xt,3)),Rt.setAttribute("size",new Xe(Qt,1)),Rt.setAttribute("bw",new Xe(Zt,1));let Be=new Float32Array(ut);Rt.setAttribute("ang",new Xe(Be,1));let ze=new wn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),kn=new Gs(Rt,ze);kn.renderOrder=24,kn.frustumCulled=!1,e.add(kn);let _n=new rn,sr=new Float32Array(ut*3),_o=new Float32Array(ut*3),Zr=new Float32Array(ut),rr=new Float32Array(ut);_n.setAttribute("position",new Xe(sr,3)),_n.setAttribute("fill",new Xe(_o,3)),_n.setAttribute("size",new Xe(Zr,1)),_n.setAttribute("bw",new Xe(rr,1));let Jr=new Gs(_n,Ft("#ffffff"));Jr.renderOrder=23,Jr.frustumCulled=!1,e.add(Jr);function Kr(p,y){let T=w[p],A=y*T.L,P=0,D=T.c.length-1;for(;D-P>1;){let ct=P+D>>1;T.c[ct]<=A?P=ct:D=ct}let q=T.c[D]-T.c[P]||1,G=(A-T.c[P])/q,X=T.p[P],tt=T.p[D];return[X[0]+(tt[0]-X[0])*G,X[1]+(tt[1]-X[1])*G]}let jr=p=>p*p*(3-2*p)*.35+p*.65;function oi(p,y){let T=p.pat.t,A=p.pat.stops.length,P=T[2*A-2];if(y<T[1]-2||y>P+1)return null;if(y<=T[1])return{w:b[p.pat.stops[0]].w,at:0,next:0,moving:!1};for(let D=0;D<A-1;D++){let q=T[2*D+1],G=T[2*D+2],X=T[2*D+3];if(y<=G){let tt=G>q?(y-q)/(G-q):1;return{w:Kr(p.pat.segs[D],jr(g(tt,0,1))),at:-1,next:D+1,prev:D,moving:!0}}if(y<=X)return{w:b[p.pat.stops[D+1]].w,at:D+1,next:D+1,moving:!1}}return{w:b[p.pat.stops[A-1]].w,at:A-1,next:A-1,moving:!1}}function ar(p){let y=t.days.indexOf(p.ymd),T=[];if(y<0)return{k:y,out:T};let A=(P,D)=>{for(let q of P){if(!U.has(q.fam))continue;let G=he(q);if(G==="X")continue;let X=(G||0)/60,tt=p.min+D-q.t0-X;if(tt<-2||tt>q.pat.t[q.pat.t.length-2]+1)continue;let ct=oi(q,tt);ct&&T.push({tr:q,p:ct,rel:tt,dl:X,live:G!=null})}};return A(J[y],0),y>0&&A(J[y-1],1440),{k:y,out:T}}function xo(p,y,T,A){let P=p.pat.stops[0],D=y.dep0,q=null,G=(tt,ct)=>{for(let v of tt||[]){let z=v.pat.stops,dt=z.length;if(z[dt-1]!==P||v===p)continue;let ft=v.t0+v.pat.t[2*(dt-1)]-ct;if(ft>D+5||ft<D-120)continue;let Vt=gt(v.pat),se=Jt(Vt,y.w,-1,1e9);if(se.err>.6)continue;let ue=Vt.stopD,_t=v.pat.t,yt=ue.findIndex(Ie=>Ie>se.d);yt<0&&(yt=dt-1);let re=yt===0?_t[1]:_t[2*yt-1]+(ue[yt]>ue[yt-1]?(se.d-ue[yt-1])/(ue[yt]-ue[yt-1]):1)*(_t[2*yt]-_t[2*yt-1]),_e=T-(v.t0+re-ct);_e<-5||_e>120||(!q||Math.abs(_e)<Math.abs(q.prevDl))&&(q={prevTr:v,dPrev:se.d,prevDl:_e,arrO:ft+Math.max(0,_e)})}};if(G(J[A],0),A>0&&G(J[A-1],1440),!q)return{prevTr:null,preDl:0};let X=Math.max(D,q.arrO+3);return{...q,depEst:X,preDl:Math.max(0,X-D)}}function vo(p,y,T){let A=p.pat.t,P=y.length;if(!(T>=0))return T<0?y[0]:null;for(let D=0;D<P;D++)if(T<=A[2*D+1]){if(T>=A[2*D]||D===0)return y[D];let q=A[2*D-1],G=A[2*D];return y[D-1]+(y[D]-y[D-1])*(G>q?(T-q)/(G-q):1)}return y[P-1]}let Cs=performance.now();function yo(){let p=[],y=Date.now()/1e3,T=performance.now(),A=Math.min(1,(T-Cs)/1e3);Cs=T;for(let P of F.vp.values()){let D=V.get(P.tid),q=D?D.fam:P.fam;if(q&&C[q]&&!U.has(q))continue;let G=F.delays.get(P.tid),X=typeof G=="number"?G/60:0,tt=Math.max(0,y-P.ts);P.mvTs!==P.ts&&((!P.mvW||Math.hypot(P.w[0]-P.mvW[0],P.w[1]-P.mvW[1])>.025)&&(P.mvW=P.w,P.mvAt=P.ts),P.mvTs=P.ts),P.still=P.ts-(P.mvAt||P.ts);let ct=P.w,v=-1;if(D){let dt=gt(D.pat),ft=dt.stopD;if(P.dObs==null||P.obsAt!==P.ts){let yt=Jt(dt,P.w,-1,1e9);P.dObs=yt.d,P.err=yt.err,P.obsAt=P.ts}let Vt=Ct(),se=t.days.indexOf(Vt.ymd),ue=D.day===se-1?1440:0,_t=D.t0+D.pat.t[1]-ue;if(P.pre=Vt.min+X<_t-1&&(P.dObs>ft[0]+.35||P.err>.6)&&!(P.st==="STOPPED_AT"&&P.sid===b[D.pat.stops[0]].id),P.dep0=_t,P.pre){if(P.atStop=-1,P.next=0,v=0,P.disp=null,P.prevAt!==P.ts&&(P.prevAt=P.ts,Object.assign(P,xo(D,P,Vt.min,se))),P.prevTr){let yt=gt(P.prevTr.pat);ct=Wt(yt,P.dPrev)}}else if(P.err<=.6){let yt=ft.findIndex(Ie=>Ie>P.dObs+.08);yt<0&&(yt=ft.length-1);let re=ft.reduce((Ie,hn,Oe)=>Math.abs(hn-P.dObs)<Math.abs(ft[Ie]-P.dObs)?Oe:Ie,0);P.atStop=Math.abs(ft[re]-P.dObs)<.16?re:-1,P.next=yt,v=yt;let _e=P.dObs;if(P.st==="STOPPED_AT"&&P.atStop>=0)_e=ft[P.atStop];else if(yt>0){let Ie=(D.pat.t[2*yt]-D.pat.t[2*yt-1])*60,hn=Ie>0?(ft[yt]-ft[yt-1])/Ie:0,Oe=Ct(),Ne=t.days.indexOf(Oe.ymd),Zi=D.day===Ne-1?1440:0,Ds=vo(D,ft,Oe.min+Zi-D.t0-X),Nn=P.dObs+hn*Math.min(tt,60);Ds!=null&&(Nn=Math.min(Nn,Math.max(P.dObs,Ds))),_e=Math.max(P.dObs,Math.min(ft[yt]-.03,Nn))}P.disp==null||Math.abs(P.disp-_e)>1.2?P.disp=_e:_e>P.disp&&(P.disp+=(_e-P.disp)*Math.min(1,A*1.5)),ct=Wt(dt,P.disp)}else if(P.err>2){let yt=Ct(),re=t.days.indexOf(yt.ymd),_e=D.day===re-1?1440:0,Ie=oi(D,yt.min+_e-D.t0-X);Ie&&(ct=Ie.w,P.est=!0,v=Ie.next),P.atStop=-1,P.next=Ie?Ie.next:-1}else P.atStop=-1,P.next=-1}let z=P.pre?"":P.st==="STOPPED_AT"&&P.atStop>=0||P.atStop>=0&&P.still>30?"st":P.still>=90?"via":"";p.push({tr:D,v:P,w:ct,stop:z,p:{w:ct},fam:q||"?",c:D?D.c:C[q]||"#6b7385",dl:X,live:!0,real:!0,idx:v,age:tt,cancel:G==="X"})}return p}let Ln=new Map,ln=!1,je=!1,qn=[],mi=0,xn=null,Se=null,Qe=-1,M=!1,H=0,it="";function j(p){let y=nt>0||Et()&&pt==null||!!Se,T=y?50:250;if(p-mi<T)return!1;mi=p,[...It()].join()!==lt&&(mt(),Tt());{let v=le(),z=v?v.sn.t:"";$t.cur=v,z!==$t.key&&($t.key=z,te()),!v&&!Ct().live&&!fe.at&&dn()}let A=Ct(),P=Et()&&A.live,D=P?{k:t.days.indexOf(A.ymd),out:yo()}:ar(A);qn=D.out;let q=new oe,G=0,X=0;for(let v of qn){if(G>=ut)break;zt[G*3]=v.p.w[0],zt[G*3+1]=v.p.w[1],zt[G*3+2]=N+.02;let z=null;if(v.real&&v.v.pre&&v.v.prevTr)z=Wt(gt(v.v.prevTr.pat),v.v.dPrev+.35);else if(v.real&&v.tr&&!v.v.pre&&v.v.err<=.6&&v.v.disp!=null&&!(v.v.st==="STOPPED_AT"&&v.v.atStop>=0))z=Wt(gt(v.tr.pat),v.v.disp+.35);else if(!v.real&&v.p.moving){let ue=v.tr.pat.t,_t=v.p.prev,yt=ue[2*_t+1],re=ue[2*_t+2],_e=re>yt?(v.rel-yt)/(re-yt):1;z=Kr(v.tr.pat.segs[_t],Math.min(1,jr(g(_e,0,1))+.04))}let dt=v.real?!!v.stop:!v.p.moving;if(v.broke=pd(v),v.broke)Be[G]=85;else if(dt)Be[G]=75;else if(z){let ue=So(v.p.w),_t=So(z),yt=_t[0]-ue[0],re=_t[1]-ue[1];Be[G]=Math.hypot(yt,re)>.05?Math.atan2(yt,-re):99}else Be[G]=99;q.set(v.c||v.tr.c),xt[G*3]=q.r,xt[G*3+1]=q.g,xt[G*3+2]=q.b;let ft=v.tr?v.tr===Se:Se&&Se.vtid===v.v.tid;Qt[G]=ft?22:r.dist<45?17:14,Zt[G]=ft?3.5:2.2;let Vt=v.real&&v.stop==="via"||!!v.broke,se=v.cancel||v.broke?[.86,.15,.15]:v.dl>10?[.86,.15,.15]:v.dl>5?[.92,.48,.05]:v.dl>=1?[.98,.8,.08]:[.09,.64,.29];(v.live&&v.dl>=5||ft||Vt)&&(sr[X*3]=v.p.w[0],sr[X*3+1]=v.p.w[1],sr[X*3+2]=N+.01,_o.set(ft?se:Vt?[.86,.15,.15]:[.98,.45,.09],X*3),Zr[X]=Qt[G]+(ft?16+5*Math.sin(p/220):Vt?10+3*Math.sin(p/400):8),rr[X]=ft?2:3,X++),G++}if(Rt.setDrawRange(0,G),_n.setDrawRange(0,X),["position","fill","size","bw"].forEach(v=>{Rt.attributes[v].needsUpdate=!0,_n.attributes[v].needsUpdate=!0}),Rt.attributes.ang.needsUpdate=!0,xn){let v=qn.find(z=>z.tr===xn);if(v){let z=0,dt=innerHeight,ft=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,Vt=f("#rc").getBoundingClientRect();innerWidth<=640&&(ft&&(z=ft.bottom),dt=Math.min(dt,Vt.top));let se=z+(dt-z)/2,ue=se-innerHeight/2,_t=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=v.p.w[0]-Math.sin(r.yaw)*ue*_t,s.ty=v.p.w[1]+Math.cos(r.yaw)*ue*_t}else Et()&&Ct().live&&(xn=null)}let tt=Ht(A.min);tt!==it&&(it=tt,f("#ctime").textContent=tt),f("#ntr").textContent=String(qn.length),f("#ntrl").textContent=P?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let v=U.size<S.length?[...U].sort(O).join(", "):"",z=f("#ccount"),dt=$t.cur?`\u23EA ${qn.length} trenes con los retrasos reales de las ${$t.cur.sn.t} \xB7 ${Object.values($t.cur.sn.d).filter(ft=>ft>=60).length} iban con retraso`:!A.live&&A.min<Te(new Date).min-1&&!nt?`\u23EA Hora pasada seg\xFAn horario${fe.hoy&&fe.hoy.snaps&&fe.hoy.snaps.some(ft=>ft.d)?` \xB7 hay retrasos reales desde las ${fe.hoy.snaps.find(ft=>ft.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${qn.length} ${P?"trenes con posici\xF3n real":"trenes previstos"}${v?` <small>\xB7 ${d(v)}</small>`:""}`;z&&z._t!==dt&&(z.innerHTML=dt,z._t=dt)}let ct=new Date;if(f("#cdate").textContent=A.live?"hora actual":nt?"simulaci\xF3n \xD7"+nt:hi?"en pausa":"hora elegida",D.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Pe(t.days[0])} al ${Pe(t.days[t.days.length-1])}: actualiza la app.`:P?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...F.vp.values()].map(v=>v.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(F.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",A.live){let v=Math.round(A.min),z=f("#tsl");document.activeElement!==z&&(z.value=v<240?v+1440:v)}{let v=Se?String(Se.num||Se.vtid||""):"";v!==j._sk&&(j._sk=v,fn(!0))}return fn(),p-H>3e3&&(Se||Qe>=0||M||je)&&(H=p,Ze()),te(),!0}let Q=-1,Ot=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Gt=[],Pt=document.createElement("button");Pt.type="button",Pt.id="mbtn",Pt.title="Ver los nombres de los municipios",Pt.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Pt.onclick=()=>{Ot=!Ot;try{localStorage.setItem("rod_mun",Ot?"1":"")}catch{}Pt.classList.toggle("on",Ot),a(),tn()},Pt.classList.toggle("on",Ot),document.body.appendChild(Pt);let qt=E.slice().sort((p,y)=>y.pop-p.pop);function Kt(p){if(p._a)return p._a;let y=null,T=0;for(let A of p.rings||[]){let P=A[0];if(!P)continue;let D=0,q=0,G=0;for(let X=0,tt=P.length;X<tt;X+=2){let ct=P[X],v=P[X+1],z=P[(X+2)%tt],dt=P[(X+3)%tt],ft=ct*dt-z*v;D+=ft,q+=(ct+z)*ft,G+=(v+dt)*ft}Math.abs(D)>T&&(T=Math.abs(D),y=[q/(3*D),G/(3*D)])}return p._a=y?[(y[0]-l)*o,(y[1]-c)*o]:[p.cx,p.cy]}let ve=p=>p>=1e5?1:p>=2e4?2:p>=5e3?3:4,Ee=[0,7.6,6.7,6,5.4],Yt=[0,17,15,13,12],ke=p=>p.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function tn(){let p=s.tilt<.06&&r.tilt<.08;Pt.classList.toggle("show",p);let y=0;if(Ot&&p){let T=[...document.querySelectorAll(".plab, .slab")].filter(D=>D.offsetParent!==null||D.style.display==="block").map(D=>{let q=D.getBoundingClientRect();return[q.left-2,q.top-2,q.right+2,q.bottom+2]}).filter(D=>D[2]>D[0]),A=r.dist,P=A>160?5e4:A>130?2e4:A>105?8e3:A>80?3e3:A>62?800:0;for(let D of qt){let q=ve(D.pop);if(D.pop<P)break;let G=Kt(D);if(vn.set(G[0],G[1],N).project(n),Math.abs(vn.x)>1.02||Math.abs(vn.y)>1.02)continue;let X=(vn.x*.5+.5)*innerWidth,tt=(-vn.y*.5+.5)*innerHeight,ct=ke(D.name),v=ct.length*Ee[q]+8,z=Yt[q],dt=[X-v/2,tt-z/2,X+v/2,tt+z/2];if(T.some(Vt=>dt[0]<Vt[2]&&Vt[0]<dt[2]&&dt[1]<Vt[3]&&Vt[1]<dt[3]))continue;T.push(dt);let ft=Gt[y]||(Gt[y]=Object.assign(document.createElement("div"),{className:"mlab"}));ft.isConnected||document.body.appendChild(ft),ft._n!==ct&&(ft.textContent=ct,ft._n=ct),ft._t!==q&&(ft.className="mlab t"+q,ft._t=q),ft.style.transform=`translate(${Math.round(X)}px,${Math.round(tt)}px) translate(-50%,-50%)`,ft.style.display="block",y++}}for(;y<Gt.length;y++)Gt[y].style.display="none"}let fe={at:0,hoy:null,ayer:null,err:""},Ge="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function dn(){Date.now()-fe.at<5*6e4||(fe.at=Date.now(),Promise.all(["hoy","ayer"].map(p=>fetch(Ge+p+".json",{cache:"no-store"}).then(y=>y.ok?y.json():null).catch(()=>null))).then(([p,y])=>{fe.hoy=p,fe.ayer=y,fe.err=p?"":"sin datos",je&&(h._h="",Ze())}))}let kt=p=>p>=90?"g":p>=80?"y":p>=65?"w":"b",Ke={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Ce=p=>p>10?Ke.b:p>5?Ke.w:p>=1?Ke.y:Ke.g,cn=p=>(p>=.05?"+":"")+(Math.round(p*10)/10).toString().replace(".",",")+" min";function Dn(p,y,T){return`<div class="sbars">${p.map(A=>`<div class="sbar" title="${d(A.tip||"")}"><span class="sl">${A.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(A.w*100))}%;background:${A.c}"></i></span><b class="sv" style="color:${A.c===Ke.y?"#a16207":A.c}">${A.val}</b></div>`).join("")}</div>`}function Ci(p){if(p=(p||[]).filter(G=>G.n>=10),!p||p.length<2){let G=p&&p[0];return G?`<p class="snote">Primera foto del d\xEDa a las ${G.t}: ${Math.round(G.ok/G.n*100)} % puntuales de ${G.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let y=300,T=92,A=22,P=G=>A+G*(y-A-6)/(p.length-1),D=G=>6+(100-G)/100*(T-22),q=p.map((G,X)=>[P(X),D(G.n?G.ok/G.n*100:100),G]);return`<svg class="schart" viewBox="0 0 ${y} ${T}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(G=>`<line x1="${A}" x2="${y-4}" y1="${D(G)}" y2="${D(G)}" class="gl"/><text x="2" y="${D(G)+3}" class="ax">${G}%</text>`).join("")}
      <polyline points="${q.map(G=>G[0].toFixed(1)+","+G[1].toFixed(1)).join(" ")}" class="ln"/>
      ${q.map(([G,X,tt])=>`<circle cx="${G.toFixed(1)}" cy="${X.toFixed(1)}" r="5" class="pt"><title>${tt.t} \xB7 ${tt.n?Math.round(tt.ok/tt.n*100):100}% puntuales \xB7 ${tt.n} trenes \xB7 ${tt.d5} con +5 min \xB7 retraso medio ${cn(tt.avg)}${tt.nd?` \xB7 ${tt.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${A}" y="${T-3}" class="ax">${p[0].t}</text><text x="${y-4}" y="${T-3}" class="ax" text-anchor="end">${p[p.length-1].t}</text></svg>`}function os(){dn();let p=Ct(),y=qn.filter(G=>G.real&&Et()&&p.live),T=y.filter(G=>F.delays.has(G.v.tid)),A=T.length,P=y.length-A,D='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(A){let G=T.filter(_t=>_t.dl<3).length,X=T.filter(_t=>_t.dl>=5).length,tt=T.filter(_t=>_t.stop==="via").length,ct=Math.round(G/A*100);D+=`<small>Ahora mismo \xB7 ${A} trenes con retraso publicado por Renfe${P?` \xB7 ${P} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${kt(ct)}"><b>${ct}%</b><span>puntuales</span></div>
        <div class="kpi ${kt(100-X/A*100*2)}" title="${Math.round(X/A*100)} % de los trenes"><b>${X}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${tt===0?"g":tt<=2?"w":"b"}"><b>${tt}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let v=new Map;T.forEach(_t=>{let yt=_t.fam,re=v.get(yt)||{n:0,ok:0,sum:0};re.n++,re.ok+=_t.dl<3,re.sum+=Math.max(0,_t.dl),v.set(yt,re)});let z=[...v].filter(([_t])=>C[_t]).sort((_t,yt)=>_t[1].ok/_t[1].n-yt[1].ok/yt[1].n||yt[1].sum/yt[1].n-_t[1].sum/_t[1].n),dt=z.filter(([,_t])=>_t.ok<_t.n),ft=z.filter(([,_t])=>_t.ok===_t.n);D+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(dt.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+Dn(dt.map(([_t,yt])=>({lab:gi(_t),w:yt.ok/yt.n,c:Ke[kt(yt.ok/yt.n*100)],val:`${Math.round(yt.ok/yt.n*100)}% <small>${cn(yt.sum/yt.n)}</small>`,tip:`${_t}: ${yt.ok} de ${yt.n} trenes puntuales \xB7 retraso medio ${cn(yt.sum/yt.n)}`})))+(ft.length?`<p class="snote">Puntuales al 100 %: ${ft.map(([_t])=>gi(_t)).join(" ")}</p>`:"");let Vt=new Map;T.forEach(_t=>{if(!_t.tr||_t.v.next==null||_t.v.next<0||_t.v.pre)return;let yt=_t.tr.pat.stops[_t.v.next],re=Vt.get(yt)||{n:0,sum:0};re.n++,re.sum+=Math.max(0,_t.dl),Vt.set(yt,re)});let se=[...Vt].filter(([,_t])=>_t.sum/_t.n>=1).sort((_t,yt)=>yt[1].sum/yt[1].n-_t[1].sum/_t[1].n).slice(0,8),ue=se.length?se[0][1].sum/se[0][1].n:1;D+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(se.length?Dn(se.map(([_t,yt])=>({lab:`<span class="sn" data-gs="${_t}">${d(b[_t].n)}</span>`,w:yt.sum/yt.n/ue,c:Ce(yt.sum/yt.n),val:`${cn(yt.sum/yt.n)} <small>${yt.n} ${yt.n===1?"tren":"trenes"}</small>`,tip:`${b[_t].n}: ${yt.n} trenes llegando con ${cn(yt.sum/yt.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else D+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let q=fe.hoy;D+=`<button type="button" class="hmore" data-cols>${ye.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{Sd("");let G=[...Is.m].filter(([X,tt])=>C[X]&&tt[0]>=3).map(([X,tt])=>[X,tt[1]/tt[0]]).sort((X,tt)=>X[1]-tt[1]);G.length&&(D+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+Dn(G.slice(0,8).map(([X,tt])=>({lab:gi(X),w:tt,c:Ke[kt(tt*100)],val:`${Math.round(tt*100)}%`,tip:`${X}: ${Math.round(tt*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let G=ct=>{let v=(ct&&ct.snaps||[]).filter(ft=>ft.n),z=v.reduce((ft,Vt)=>ft+Vt.n,0),dt=v.reduce((ft,Vt)=>ft+Vt.ok,0);return z?dt/z*100:null},X=G(fe.hoy),tt=G(fe.ayer);X!=null&&(D+=`<div class="cmp"><span>Hoy <b class="${kt(X)}">${Math.round(X)} %</b> puntuales</span>${tt!=null?`<span>Ayer <b class="${kt(tt)}">${Math.round(tt)} %</b></span><span>${X>=tt?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(D+="<h4>Hoy, a lo largo del d\xEDa</h4>",q&&q.snaps){D+=Ci(q.snaps);let G=Object.entries(q.st||{}).map(([ct,v])=>[ht.get(ct),v]).filter(([ct,v])=>ct!=null&&v.n>=3).map(([ct,v])=>[ct,v.sum/v.n/60,v]).filter(ct=>ct[1]>=1).sort((ct,v)=>v[1]-ct[1]).slice(0,8);if(G.length){let ct=G[0][1];D+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+Dn(G.map(([v,z,dt])=>({lab:`<span class="sn" data-gs="${v}">${d(b[v].n)}</span>`,w:z/ct,c:Ce(z),val:`${cn(z)} <small>m\xE1x +${Math.round(dt.max/60)}</small>`,tip:`${b[v].n}: ${dt.n} mediciones hoy (foto cada 15 min) \xB7 ${dt.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(dt.max/60)} min`})))}let X=Object.entries(q.lines||{}).filter(([ct,v])=>C[ct]&&v.n>=3).sort((ct,v)=>ct[1].ok/ct[1].n-v[1].ok/v[1].n);X.length&&(D+="<h4>L\xEDneas hoy</h4>"+Dn(X.map(([ct,v])=>({lab:gi(ct),w:v.ok/v.n,c:Ke[kt(v.ok/v.n*100)],val:`${Math.round(v.ok/v.n*100)}% <small>${cn(v.sum/v.n/60)}</small>`,tip:`${ct} hoy: ${Math.round(v.ok/v.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(v.max/60)} min`}))));let tt=q.upd?(Date.now()-Date.parse(q.upd))/6e4:0;D+=`<small class="snote">${tt>40?`<b>\xDAltima foto hace ${Math.round(tt)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${d((q.upd||"").slice(11,16))} \xB7 ${(q.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else D+=`<p class="snote">${fe.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return D+"</div>"}let ye={on:!1,mesh:null};function en(){let p=fe.hoy,y=[];if(p&&p.st)for(let[T,A]of Object.entries(p.st)){let P=ht.get(T);P!=null&&A.n>=2&&y.push([P,A.sum/A.n/60,A.n])}if(!y.length){let T=new Map;qn.forEach(A=>{if(!A.real||!A.tr||A.v.next==null||A.v.next<0||A.v.pre||!F.delays.has(A.v.tid))return;let P=A.tr.pat.stops[A.v.next],D=T.get(P)||[0,0];D[0]+=Math.max(0,A.dl),D[1]++,T.set(P,D)}),T.forEach((A,P)=>y.push([P,A[0]/A[1],A[1]]))}return y}function Ri(){if(ye.mesh&&(e.remove(ye.mesh),ye.mesh.geometry.dispose(),ye.mesh.material.dispose(),ye.mesh=null),!ye.on){a();return}let p=en();if(!p.length){Yn("A\xFAn no hay datos de retraso por estaci\xF3n"),ye.on=!1;return}let y=new La(.32,.32,1,16);y.rotateX(Math.PI/2),y.translate(0,0,.5);let T=new Vs({fog:!1}),A=new Ca(y,T,p.length),P=new Ue,D=new oe;p.forEach(([q,G],X)=>{let tt=.3+Math.min(G,40)*.3;P.makeScale(1,1,tt),P.setPosition(b[q].w[0],b[q].w[1],N),A.setMatrixAt(X,P),D.set(G>10?"#dc2626":G>5?"#ea7a0c":G>=1?"#eab308":"#16a34a"),A.setColorAt(X,D)}),A.renderOrder=25,A.frustumCulled=!1,e.add(A),ye.mesh=A,s.tilt<.5&&(s.tilt=.85),a()}let Fe=document.createElement("button");Fe.type="button",Fe.id="sbtn",Fe.title="Estad\xEDsticas de puntualidad",Fe.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",Fe.onclick=()=>{je=!je,je&&(ln=M=!1,fe.at=0),h._h="",Ze(),a()},document.body.appendChild(Fe);function Ii(){r.dist<45!=Q<45&&(Q=r.dist,Tt()),mm(),tn()}let li=[],vn=new B;function mm(){let p=r.dist<30,y=0;if(p){let T=[];for(let A=0;A<Lt;A++)ne[A]<4||(vn.set(b[A].w[0],b[A].w[1],N).project(n),!(vn.z>1||Math.abs(vn.x)>1.05||Math.abs(vn.y)>1.05)&&T.push([A,(vn.x*.5+.5)*innerWidth,(-vn.y*.5+.5)*innerHeight]));if(T.length<=70)for(let[A,P,D]of T){let q=li[y]||(li[y]=Object.assign(document.createElement("div"),{className:"slab"}));q.isConnected||document.body.appendChild(q),q.textContent=b[A].n,q.dataset.i=A,q.style.display="block",q.style.transform=`translate(${Math.round(P+8)}px,${Math.round(D-7)}px)`,y++}}for(;y<li.length;y++)li[y].style.display="none"}function So(p){return vn.set(p[0],p[1],N).project(n),[(vn.x*.5+.5)*innerWidth,(-vn.y*.5+.5)*innerHeight,vn.z]}function dd(p,y,T,A){let P=null,D=T*T;for(let q of qn){let[G,X,tt]=So(q.p.w);if(tt>1)continue;let ct=(G-p)**2+(X-y)**2;ct<D&&(D=ct,P={a:q})}if(P)return P;D=A*A;for(let q=0;q<Lt;q++){if(!ne[q])continue;let[G,X,tt]=So(b[q].w);if(tt>1)continue;let ct=(G-p)**2+(X-y)**2;ct<D&&(D=ct,P={s:q})}return P}window.__rodTap=(p,y)=>{let T=null,A=1e9;for(let D of li){if(D.style.display==="none")continue;let q=D.getBoundingClientRect();if(p>=q.left-4&&p<=q.right+4&&y>=q.top-4&&y<=q.bottom+4){let G=Math.abs(y-(q.top+q.bottom)/2)*4+(p-q.left);G<A&&(A=G,T=D)}}if(T)return window.__rodPickStation(+T.dataset.i),!0;let P=dd(p,y,24,18);return P&&P.a?(ln=!1,M=!1,je=!1,Se=P.a.tr||{vtid:P.a.v.tid},Qe=-1,xn=null,Tt(),Ze(),mi=0,a(),!0):P&&P.s!=null?(ln=!1,M=!1,je=!1,Qe=P.s,Se=null,xn=null,Tt(),Ze(),a(),!0):!1},window.__rodHover=(p,y)=>{let T=dd(p,y,14,10);if(T&&T.a){let A=T.a,P=A.tr?b[A.tr.pat.stops[A.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${A.c}">\u25A0</span> ${d(A.fam||A.tr&&A.tr.fam||"?")} \xB7 tren ${d(A.tr?A.tr.num:A.v.num)}</b><small>${P?"hacia "+d(P):""}${A.real?(A.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(A.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return T&&T.s!=null?`<b>${d(b[T.s].n)}</b><small>${[...b[T.s].fams].sort(O).join(" \xB7 ")}</small>`:null},window.__rodPickStation=p=>{ln=M=je=!1,Se=null,xn=null,Qe=p,Tt(),h._h="",Ze(),a()};{let p=f("#rc"),y=()=>{let T=p.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,T-64-10)+"px")};try{new ResizeObserver(y).observe(p)}catch{}addEventListener("resize",y),setTimeout(y,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let p=!1,y=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{y&&!p&&(p=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(T=>{T.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||T.update().catch(()=>{})})}).catch(()=>{})}window.__rodTick=j,window.__rodFrame=Ii,window.__rodResize=()=>{R.resolution.set(innerWidth,innerHeight),x.resolution.set(innerWidth,innerHeight)},window.__rodResize();let ci={st:-1,f:new Set},fd=p=>{let y=[...b[p].fams].sort(O);return`<div class="sfc">${y.length>1?`<button type="button" data-sf="" class="${ci.f.size?"":"on"}">Todas</button>`:""}${y.map(T=>`<button type="button" data-sf="${d(T)}" class="ln ${ci.f.size&&!ci.f.has(T)?"off":""}${U.has(T)?"":" hid"}" style="--c:${C[T]}">${d(T)}</button>`).join("")}</div>${y.some(T=>!U.has(T))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},gm=p=>{let y=(p||"#6b7385").replace("#",""),T=parseInt(y.slice(0,2),16),A=parseInt(y.slice(2,4),16),P=parseInt(y.slice(4,6),16);return(.299*T+.587*A+.114*P)/255>.62?"#1d2330":"#fff"},ls=(p,y)=>{let T=C[y]||"#6b7385";return`<span class="dst" style="background:${T};color:${gm(T)}" title="${d(y||"")}">${d(p)}</span>`},Mo=p=>{let y=b[p]&&b[p].id;return Zn.st.includes(y)?"\u{1F3E0} ":En.st.includes(y)?"\u{1F4BC} ":""},Rs=p=>p>10?"d-hi":p>5?"d-md":"d-lo",_m=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Qr={ref:null,m:new Map};function sh(p){if(Qr.ref!==F.alerts){Qr.ref=F.alerts,Qr.m=new Map;for(let y of F.alerts){if(y.src!=="Rodalies")continue;let T=y.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let A of y.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Qr.m.set(A[1],{why:T?T[1].trim().replace(/\s+/g," "):"",txt:y.txt,when:y.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(y.txt)})}}return Qr.m.get(String(p))||null}let ta={ref:null,m:new Map};function pd(p){let y=String(p.tr?p.tr.num:p.v&&p.v.num||"");if(!y)return null;if(ta.ref!==F.alerts){ta.ref=F.alerts,ta.m=new Map;for(let A of F.alerts)if(A.src==="Rodalies"&&_m.test(A.txt))for(let P of A.txt.matchAll(/\b(\d{4,6})\b/g))ta.m.set(P[1],A)}let T=ta.m.get(y);return T?{why:"aviso",txt:T.txt}:p.real&&p.stop==="via"&&p.v.still>=300?{why:"via",min:Math.round(p.v.still/60)}:null}let bo=p=>{try{let y=Se;return y?y.num!=null&&String(y.num)===String(p.num)||p.tid&&(y.tid===p.tid||y.vtid===p.tid):!1}catch{return!1}},gi=p=>`<span class="ln" style="--c:${C[p]}">${d(p)}</span>`;function md(p,y){return y?p==="X"?'<span class="st late">Cancelado</span>':p>=60?`<span class="st late ${Rs(p/60)}">Retraso de ${Math.round(p/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Ze(){if(!Se&&Qe<0&&!M&&!ln&&!je){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),fh();return}let p=Ct(),y="",T=Et()&&p.live,A=(v,z)=>F.alerts.filter(dt=>[...dt.fams].some(ft=>v.has(ft))||z!=null&&dt.stops.has(z)),P=v=>v.length?`<div class="al">${v.slice(0,4).map(z=>`<p>\u26A0\uFE0F ${ah(z)} ${[...z.fams].sort(O).slice(0,6).map(gi).join(" ")} ${d(z.txt)} <small>${oh(z)}</small></p>`).join("")}${v.length>4?`<small>y ${v.length-4} avisos m\xE1s</small>`:""}</div>`:"",D=Se&&T?qn.find(v=>v.real&&(Se.vtid?v.v.tid===Se.vtid:v.tr===Se)):null;if(je)y=os();else if(ln)y=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(M){let v=F.alerts.filter(z=>[...z.fams].some(dt=>U.has(dt))||!z.fams.size);y=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${v.length} avisos activos para las l\xEDneas que tienes visibles</small>${v.map(z=>`<div class="al"><p>${ah(z)} ${[...z.fams].sort(O).map(gi).join(" ")} <small>${oh(z)}</small></p><p>${d(z.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${F.alertsTs&&Date.now()/1e3-F.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${F.alertsTs?new Date(F.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(D){let v=D.v,z=D.tr,dt=Ne=>d(b[z.pat.stops[Ne]].n),ft=z?z.pat.stops.length:0,Vt=ht.get(v.sid),se=Vt!=null?d(b[Vt].n):d(v.sid),ue=z&&v.atStop>=0?dt(v.atStop):"",_t=z&&v.next>=0?dt(v.next):se,yt=z&&v.next>0?dt(v.next-1):"",re=D.broke||pd(D),_e=re?`<b class="stopv">\u26A0\uFE0F ${re.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${re.min} min`}</b>${z&&yt?` \xB7 entre ${yt} y <b>${_t}</b>`:""}`:D.stop==="via"&&z?`<b class="stopv">\u23F8 Detenido</b> ${yt?`entre ${yt} y <b>${_t}</b>`:`antes de <b>${_t}</b>`} desde hace ${Math.max(1,Math.round(v.still/60))} min`:v.pre&&z?v.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(v.prevTr.num)}</b> hacia <b>${dt(0)}</b>${v.prevDl>=1?` con <b>+${Math.round(v.prevDl)} min</b>`:""}: llega hacia las <b>${Ht(v.arrO)}</b> y saldr\xEDa hacia las <b>${Ht(v.depEst)}</b>${v.preDl>=1?` (horario ${Ht(v.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${dt(0)}</b>, de donde sale a las <b>${Ht(v.dep0+D.dl)}</b>`:v.st==="STOPPED_AT"&&ue?`Parado en <b>${ue}</b>`:ue&&v.next>=0&&v.atStop!==v.next?`Saliendo de <b>${ue}</b> hacia <b>${_t}</b>`:yt?`Entre ${yt} y <b>${_t}</b>`:`Hacia <b>${_t}</b>`,Ie=F.tu.get(v.tid),hn=Ie&&Ie.next&&z&&v.next>=0&&Ie.next.sid===b[z.pat.stops[v.next]].id&&Ie.next.t?new Date(Ie.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",Oe=[];if(z){let Ne=D.idx>=0?D.idx:0,Zi=v.pre?Math.max(D.dl,v.preDl||0):D.dl,Ds=Nn=>z.t0+z.pat.t[Nn]+Zi;for(let Nn=Ne;Nn<ft;Nn++)Oe.push(`<li${Mo(z.pat.stops[Nn])?' class="mine"':""}><b>${Ht(Ds(Nn===0?1:2*Nn))}</b><span title="${dt(Nn)}">${Mo(z.pat.stops[Nn])}${dt(Nn)}</span>${Zi>=1?`<em class="dl ${Rs(Zi)}">${v.pre?"\u2248":""}+${Math.round(Zi)}</em>`:""}</li>`)}y=`<div class="tc" style="--c:${D.c}"><button class="x" data-cx>\xD7</button><div>${gi(D.fam)}<b>Tren ${d(z?z.num:v.num)}</b> <span class="lv">\u25CF en directo</span></div>${z?`<h3 class="rt"><span class="o" title="${dt(0)}">${dt(0)}</span><span class="ar">\u2192</span>${ls(b[z.pat.stops[ft-1]].n,z.fam)}</h3>`:""}
        <p>${_e}${hn?` \xB7 prevista ${hn}`:""}${v.plat&&v.st==="STOPPED_AT"&&ue?` \xB7 <b>v\xEDa ${d(v.plat)}</b>`:""}</p><p>${v.pre&&v.prevTr?v.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(v.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':md(F.delays.get(v.tid),F.delays.has(v.tid))}${(()=>{let Ne=z&&sh(z.num);return Ne?`<span class="why" title="${d(Ne.txt)}">${Ne.why?"Motivo: "+d(Ne.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${v.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(D.age)} s`:v.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(D.age)} s${D.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${Oe.length?`${D.dl>=1||v.pre&&v.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Oe.join("")}</ol>`:""}${P(A(new Set([D.fam])))}
        ${To(z?z.num:v.num,"",D.fam)}${z?`<div class="rtb"><button type="button" data-follow>${xn===z?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(Se&&T)y=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(Se.num||Se.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(Se){let v=Se,z=v.pat,dt=z.stops.length,ft=he(v),Vt=typeof ft=="number"?ft/60:0,se=t.days.indexOf(p.ymd),ue=v.day===se-1?1440:0,_t=p.min+ue-v.t0-Vt,yt=oi(v,_t),re=Ne=>v.t0+z.t[Ne]+Vt,_e=Ne=>d(b[z.stops[Ne]].n),Ie="Fuera de servicio ahora";yt&&(Ie=yt.moving?`Circulando hacia <b>${_e(yt.next)}</b> \xB7 llega ${Ht(re(2*yt.next))}`:yt.at===dt-1?`Ha llegado a <b>${_e(dt-1)}</b>`:`Parado en <b>${_e(yt.at)}</b> \xB7 sale ${Ht(re(2*yt.at+1))}`);let hn=yt?yt.next:0,Oe=[];for(let Ne=hn;Ne<dt;Ne++)Oe.push(`<li${Mo(z.stops[Ne])?' class="mine"':""}><b>${Ht(re(2*Ne))}</b><span title="${_e(Ne)}">${Mo(z.stops[Ne])}${_e(Ne)}</span>${Vt>=1?`<em class="dl ${Rs(Vt)}">+${Math.round(Vt)}</em>`:""}</li>`);y=`<div class="tc" style="--c:${v.c}"><button class="x" data-cx>\xD7</button><div>${gi(v.fam)}<b>Tren ${d(v.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${_e(0)}">${_e(0)}</span><span class="ar">\u2192</span>${ls(b[v.pat.stops[dt-1]].n,v.fam)}</h3>
        <p>${Ie}</p><p>${md(ft,ft!=null)}</p><small>Sale ${Ht(v.t0+z.t[1])} \xB7 llega ${Ht(v.t0+z.t[2*dt-2])} (horario)</small>
        ${Vt>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Oe.join("")}</ol>${To(v.num,"",v.fam)}<div class="rtb"><button type="button" data-follow>${xn===v?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let v=Qe,z=t.days.indexOf(p.ymd),dt=[];ci.st!==v&&(ci.st=v,ci.f.clear());let ft=_t=>(!C[_t]||U.has(_t))&&(!ci.f.size||ci.f.has(_t));if(z>=0){let _t=(yt,re)=>{for(let _e of yt){if(!ft(_e.fam))continue;let Ie=_e.pat.stops.indexOf(v);if(Ie<0||Ie===_e.pat.stops.length-1)continue;let hn=he(_e),Oe=typeof hn=="number"?hn/60:0,Ne=_e.t0+_e.pat.t[2*Ie+1]-re;Ne+Oe<p.min-1||Ne>p.min+360||dt.push({tr:_e,t:Ne,dl:Oe,d:hn,on:F.vp.has(_e.tid),past:p.min>_e.t0+_e.pat.t[1]-re+2})}};_t(J[z],0),z>0&&_t(J[z-1],1440)}dt.sort((_t,yt)=>_t.t+_t.dl-yt.t-yt.dl);let Vt=b[v].id,se=Ln.get(Vt);T&&F.url&&(!se||Date.now()-se.at>3e4)&&!se?.loading&&(Ln.set(Vt,{...se||{},loading:!0,at:se?se.at:0}),vt(F.url.replace(/\/+$/,""),"/departures.json?stationId="+Vt).then(_t=>{Ln.set(Vt,{at:Date.now(),d:_t}),Qe===v&&(h._h="",Ze())}).catch(()=>Ln.set(Vt,{at:Date.now(),err:1})));let ue=T&&se&&se.d&&Array.isArray(se.d.trains)?se.d.trains:null;if(ue){let _t=new Map([...F.vp.values()].map(re=>[String((V.get(re.tid)||{}).num||re.num),re])),yt=ue.filter(re=>ft((re.line||{}).id||"")).slice(0,40).map(re=>{let _e=(re.departureDateHourSelectedStation||"").slice(11,16),Ie=(re.line||{}).id||"",hn=String(re.commercialNumber||re.technicalNumber||""),Oe=_t.get(hn),Ne=Oe?F.delays.get(Oe.tid):null;return`<li class="go${bo({num:hn,tid:Oe?Oe.tid:""})?" sel":""}" data-gt="${d(hn)}|${Oe?d(Oe.tid):""}"><b>${d(_e)}</b>${C[Ie]?gi(Ie):`<span class="ln" style="--c:#6b7385">${d(Ie||"?")}</span>`}<span>${ls((re.destinationStation||{}).name||"",Ie)}${re.trainObservations?` \xB7 <i>${d(re.trainObservations)}</i>`:""}</span>${re.trainCancelled?"<em>cancelado</em>":typeof Ne=="number"&&Ne>=60?`<em class="dl ${Rs(Ne/60)}">+${Math.round(Ne/60)}</em>`:""}${re.platformSelectedStation?`<i class="via">v\xEDa ${d(re.platformSelectedStation)}</i>`:""}${Oe?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");y=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[v].n)}</h3>${fd(v)}${To("",b[v].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${yt||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${P(A(b[v].fams,v))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else y=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[v].n)}</h3>${fd(v)}${To("",b[v].id,"")}
        <small style="margin-top:6px">${T&&F.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${T?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${dt.slice(0,40).map(_t=>`<li class="go${bo({num:_t.tr.num,tid:_t.tr.tid})?" sel":""}" data-gt="${d(_t.tr.num)}|${d(_t.tr.tid)}"><b>${Ht(_t.t+_t.dl)}</b>${gi(_t.tr.fam)}<span>${ls(b[_t.tr.pat.stops[_t.tr.pat.stops.length-1]].n,_t.tr.fam)}</span>${_t.d==="X"?"<em>cancelado</em>":_t.dl>=1?`<em class="dl ${Rs(_t.dl)}">+${Math.round(_t.dl)}</em>`:""}${T?_t.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':_t.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${P(A(b[v].fams,v))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let q=h.scrollTop;if(h._h!==y&&(h.innerHTML=y,h._h=y,h.scrollTop=q),h.style.display="flex",h.classList.remove("min"),fh(),innerWidth<=640){let v=h.querySelector(".tc");if(v&&!v.querySelector(".mn")){let z=document.createElement("button");z.type="button",z.className="mn",z.setAttribute("aria-label","Encoger o ampliar la ficha"),z.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",z.onclick=dt=>{dt.stopPropagation(),h.classList.toggle("peek"),z.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},v.appendChild(z)}}else h.classList.remove("peek");let G=f("#rc");if(innerWidth<=640&&!G.classList.contains("min")&&!Ze.done&&(Ze.done=1,f("#rcgrab").click()),innerWidth<=640){let v=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(v+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-v-16)+"px"}else if(innerHeight<=500){let v=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(v+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-v-20+"px"}else h.style.top="",h.style.width=je?"390px":"300px",h.style.maxHeight="";let tt=h.querySelector("[data-cx]");tt&&(tt.onclick=v=>{if(v.stopPropagation(),Ze.done=0,je||ln||M){je=ln=M=!1,h._h="",Ze(),a();return}M=!1,ln=!1,je=!1,Se=null,Qe=-1,xn=null,Tt(),Ze(),mi=0,a()}),xd(h);{let v=h.querySelector("[data-cols]");v&&(v.onclick=()=>{ye.on=!ye.on,Ri(),h._h="",Ze()})}h.querySelectorAll("[data-gs]").forEach(v=>v.onclick=()=>{let z=+v.dataset.gs;je=!1,window.__rodPickStation(z),Object.assign(s,{tx:b[z].w[0],ty:b[z].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(v=>v.onclick=z=>{z.stopPropagation();let dt=v.dataset.sf;dt?ci.f.has(dt)?ci.f.delete(dt):ci.f.add(dt):ci.f.clear(),h._h="",Ze()}),h.querySelectorAll("[data-gt]").forEach(v=>v.onclick=()=>{let[z,dt]=v.dataset.gt.split("|"),ft=V.get(dt);Pd({num:z,tid:F.vp.has(dt)?dt:"",tr:ft||null})}),h.querySelectorAll("[data-sethome]").forEach(v=>v.onclick=()=>ph(Qe,v.dataset.sethome));let ct=h.querySelector("[data-follow]");ct&&(ct.onclick=()=>{xn=xn===Se?null:Se,xn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",Ze(),a()})}window.__rodCard=Ze;try{let p=localStorage.getItem("rod_inf");(p==="mini"||p==null)&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let p=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",p?"mini":"")}catch{}(Se||Qe>=0||M||ln)&&(h._h="",Ze())},f("#ver").onclick=()=>{ln=!0,je=!1,M=!1,h._h="",Ze()};let wo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},xm=["vacio","lleno","petado","parado","calor","abordo"],vm=["gente","retraso","cancel","ascensor","via"],ym={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Eo=p=>(F.tipos||ym)[p]||p,rh=(p,y)=>(F.rep||[]).filter(T=>p&&T.num===String(p)&&!T.sid||y&&T.sid===String(y)&&!T.num||p&&y&&T.num===String(p)&&T.sid===String(y)),gd=p=>{let y=Math.round((Date.now()+(F.repSkew||0)-p.at)/6e4);return y<1?"ahora":`hace ${y} min`},ea=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function To(p,y,T){if(!F.url||!F.repOk)return"";let A=rh(p,y),P=p?xm:vm;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${A.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${A.map(D=>`<p><span>${wo[D.kind]||"\u2022"} <b>${d(Eo(D.kind))}</b> <small>${D.up>1?D.up+" viajeros \xB7 ":""}${gd(D)}</small></span>${ea.has(D.id)?"<small>\u2713</small>":`<button type="button" data-rv="${D.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${D.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${p?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${P.map(D=>`<button type="button" data-rk="${D}" data-rn="${d(p||"")}" data-rs="${d(y||"")}" data-rl="${d(T||"")}">${wo[D]} ${d(Eo(D))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function _d(p,y){try{let A=await(await fetch(F.url.replace(/\/+$/,"")+y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).json();if(!A.ok){Yn(A.err||"No se ha podido enviar");return}if(A.id){ea.add(A.id);try{localStorage.setItem("rod_votes",JSON.stringify([...ea].slice(-300)))}catch{}}Yn(y==="/vote"?"Gracias, voto guardado":A.n>1?`Gracias \xB7 ya sois ${A.n} avisando de lo mismo`:"Gracias, aviso enviado");let P=await vt(F.url.replace(/\/+$/,""),"/reports.json");P&&P.items&&(F.rep=P.items),h._h="",Ze(),fn(!0)}catch{Yn("Sin conexi\xF3n con el puente")}}function xd(p){p.querySelectorAll("[data-rk]").forEach(y=>y.onclick=T=>{T.stopPropagation(),y.disabled=!0,_d({kind:y.dataset.rk,num:y.dataset.rn,sid:y.dataset.rs,line:y.dataset.rl},"/report")}),p.querySelectorAll("[data-rv]").forEach(y=>y.onclick=T=>{T.stopPropagation();let[A,P]=y.dataset.rv.split(":");ea.add(+A);try{localStorage.setItem("rod_votes",JSON.stringify([...ea].slice(-300)))}catch{}_d({id:+A,v:+P},"/vote")})}let vd=0;function Yn(p){let y=f("#toast");y||(y=document.createElement("div"),y.id="toast",document.body.appendChild(y)),y.textContent=p,y.className="on",clearTimeout(vd),vd=setTimeout(()=>{y.className=""},2600)}function ah(p){return p.src?`<b class="asrc ${p.src==="Adif"?"adif":""}">${p.src==="Adif"?"Adif \xB7 v\xEDa":d(p.src)}</b>`:""}function oh(p){if(!p.when)return"";let[y,T]=p.when.split("T"),A=Te(new Date),P=A.ymd.slice(0,4)+"-"+A.ymd.slice(4,6)+"-"+A.ymd.slice(6,8);if(y===P&&T){let D=Math.round(A.min-(+T.slice(0,2)*60+ +T.slice(3,5)));return D<1?"ahora":D<60?`hace ${D} min`:`hoy a las ${T.slice(0,5)}`}return`${y.slice(8,10)}/${y.slice(5,7)}${T?" "+T.slice(0,5):""}`}function lh(){let p=f("#alr");if(!p)return;let y=F.alerts.filter(T=>[...T.fams].some(A=>U.has(A))).length;p.hidden=!y,p.textContent=`\u26A0\uFE0F ${y} aviso${y===1?"":"s"}`}{let p=f("#alrslot");p&&p.appendChild(f("#alr"))}f("#alr").onclick=()=>{ln=!1,je=!1,M=!0,Ze()},f("#wcopy").onclick=async()=>{let p=f("#wcode").textContent;try{await navigator.clipboard.writeText(p),f("#wcopy").textContent="Copiado \u2713"}catch{let T=document.createRange();T.selectNodeContents(f("#wcode"));let A=getSelection();A.removeAllRanges(),A.addRange(T),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let Sm=ht.get("71801");function Mm(p,y){let T=b[p].id,A=Ln.get(T);!(Et()&&F.url)||A&&(A.loading||Date.now()-A.at<3e4)||(Ln.set(T,{...A||{},loading:!0,at:A?A.at:0}),vt(F.url.replace(/\/+$/,""),"/departures.json?stationId="+T).then(P=>{Ln.set(T,{at:Date.now(),d:P}),y&&y()}).catch(()=>Ln.set(T,{at:Date.now(),err:1})))}let yd=p=>+p.slice(0,2)*60+ +p.slice(3,5),na={k:-2,m:null};function bm(p){let y=t.days.indexOf(Ct().ymd);if(na.k!==y){na.k=y,na.m=new Map;for(let T of J[y]||[])na.m.set(String(T.num),T)}return na.m.get(String(p))||null}let Is={at:0,m:new Map};function Sd(p){if(Date.now()-Is.at>6e4){Is.at=Date.now(),Is.m=new Map;let T=Ct(),A=t.days.indexOf(T.ymd);if(A>=0)for(let P of J[A]){let D=T.min-P.t0;if(D<P.pat.t[1]+3||D>P.pat.t[P.pat.t.length-2]-3)continue;let q=Is.m.get(P.fam)||[0,0];q[0]++,F.vp.has(P.tid)&&q[1]++,Is.m.set(P.fam,q)}}let y=Is.m.get(p);return y&&y[0]>=3?y[1]/y[0]:1}function ch(p,y){let T=Ct(),A=Et()&&T.live&&!y,P=Ln.get(b[p].id),D=[],q=new Map([...F.vp.values()].map(X=>[String((V.get(X.tid)||{}).num||X.num),X]));if(A&&P&&P.d&&Array.isArray(P.d.trains))for(let X of P.d.trains){let tt=(X.departureDateHourSelectedStation||"").slice(11,16);if(!tt)continue;let ct=String(X.commercialNumber||X.technicalNumber||""),v=q.get(ct),z=v?F.delays.get(v.tid):null,dt=Math.max(typeof z=="number"?Math.max(0,z/60):0,v&&v.pre&&v.preDl||0),ft=yd(tt);ft<T.min-720&&(ft+=1440),D.push({sm:ft,est:ft+dt,dl:dt,fam:(X.line||{}).id||"",dest:(X.destinationStation||{}).name||"",destId:(X.destinationStation||{}).id||"",plat:X.platformSelectedStation||"",cancel:!!X.trainCancelled,obs:X.trainObservations||"",live:!!v,num:ct,tid:v?v.tid:"",tr:v&&V.get(v.tid)||bm(ct),src:"oficial"})}else{let X=t.days.indexOf(T.ymd);if(X<0)return D;let tt=(ct,v)=>{for(let z of ct){let dt=z.pat.stops.indexOf(p);if(dt<0||dt===z.pat.stops.length-1)continue;let ft=he(z),Vt=typeof ft=="number"?Math.max(0,ft/60):0,se=z.t0+z.pat.t[2*dt+1]-v;if(se+Vt<T.min-1||se>T.min+360)continue;let ue=z.pat.stops[z.pat.stops.length-1];D.push({sm:se,est:se+Vt,dl:Vt,fam:z.fam,dest:b[ue].n,destId:b[ue].id,plat:"",cancel:ft==="X",obs:"",live:F.vp.has(z.tid),num:z.num,tid:z.tid,tr:z,src:"horario"})}};tt(J[X],0),X>0&&tt(J[X-1],1440),X+1<t.days.length&&T.min>1080&&tt(J[X+1],-1440)}if(A){let X=new Set(D.map(v=>v.num)),tt=t.days.indexOf(T.ymd),ct=(v,z)=>{for(let dt of v||[]){if(X.has(String(dt.num)))continue;let ft=dt.pat.stops.indexOf(p);if(ft<0||ft===dt.pat.stops.length-1)continue;let Vt=dt.t0+dt.pat.t[2*ft+1]-z;if(Vt<T.min-45||Vt>T.min+1||!F.vp.get(dt.tid))continue;let ue=F.delays.get(dt.tid),_t=typeof ue=="number"?Math.max(0,ue/60):0,yt=dt.pat.stops[dt.pat.stops.length-1];D.push({sm:Vt,est:Vt+_t,dl:_t,fam:dt.fam,dest:b[yt].n,destId:b[yt].id,plat:"",cancel:!1,obs:"",live:!0,num:dt.num,tid:dt.tid,tr:dt,src:"horario"})}};tt>=0&&(ct(J[tt],0),tt>0&&ct(J[tt-1],1440));for(let v of D){let z=v.tid&&F.vp.get(v.tid),dt=v.tr?v.tr.pat.stops.indexOf(p):-1;v.passed=!!(z&&dt>=0&&!z.pre&&z.next!=null&&z.next>=0&&z.next>dt&&z.atStop!==dt),!v.passed&&v.live&&v.est<T.min&&(v.est=T.min,v.late=!0),v.passed&&(v.gone=!0)}}let G=D.filter(X=>X.gone?T.min-X.est<20:X.est>=T.min-.5).sort((X,tt)=>X.est-tt.est);{let X=G.filter(tt=>tt.gone);if(X.length>2){let tt=new Set(X.slice(0,X.length-2));G=G.filter(ct=>!tt.has(ct))}}if(!G.filter(X=>!X.gone).length&&D.length&&D[0].src==="oficial"&&!y)return ch(p,!0);for(let X of G){let tt=X.num&&sh(X.num);tt&&tt.cx&&(X.cancel=!0,X.cxWhy=tt.txt)}if(Et()&&T.live){let X=t.days.indexOf(T.ymd);for(let tt of G){if(tt.live||tt.cancel||!tt.tr)continue;let ct=tt.tr.day===X-1?1440:tt.tr.day===X+1?-1440:0,v=tt.tr.t0+tt.tr.pat.t[1]-ct+(tt.dl||0);tt.ghost=T.min>v+3&&Sd(tt.fam)>=.7}}if(G.some(X=>X.src==="oficial")){let X=Math.max(...G.map(ct=>ct.sm)),tt=new Set(G.map(ct=>ct.num));G=G.concat(ch(p,!0).filter(ct=>ct.sm>X&&!tt.has(String(ct.num))))}return G}let Md=(p,y,T,A)=>{let P={key:p,ico:y,name:T,st:[],i:0,walk:10,open:!1};try{let D=JSON.parse(localStorage.getItem("rod_"+p)||"null");D&&Object.assign(P,D)}catch{}return!P.st.length&&A&&(P.st=A),P},Zn=Md("home","\u{1F3E0}","Casa",["79410","79412"]),En=Md("work","\u{1F4BC}","Trabajo",null),pe={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Ao=[pe,Zn,En];Zn.open=!1,En.open=!1;function wm(p,y){let T=at(p,y),A=at(p,y+.009);return 1/Math.hypot(A[0]-T[0],A[1]-T[1])}function hh(p){if(!navigator.geolocation){pe.err="Este navegador no da la ubicaci\xF3n",fn(!0);return}navigator.geolocation.getCurrentPosition(y=>{let{longitude:T,latitude:A}=y.coords,P=at(T,A),D=wm(T,A),q=b.map((ct,v)=>[v,Math.hypot(ct.w[0]-P[0],ct.w[1]-P[1])*D]).filter(([ct])=>b[ct].fams.size).sort((ct,v)=>ct[1]-v[1]),G=q.filter(([,ct],v)=>v===0||ct<Math.max(2.5,q[0][1]*1.6)).slice(0,3),X=pe.st[0]!==b[G[0][0]].id;pe.w=P,pe.k=D,pe.st=G.map(([ct])=>b[ct].id),pe.dist=Object.fromEntries(G.map(([ct,v])=>[b[ct].id,v])),pe.fix=Date.now(),pe.err="",X&&(pe.i=0);let tt=[Zn,En].find(ct=>ct.st.includes(pe.st[0])&&pe.dist[pe.st[0]]<1.5);fn(!0)},y=>{pe.err=y.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",p&&(Zn.open=!!Zn.st.length),fn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Em=p=>Math.max(1,Math.round(p*1.3/.08));setTimeout(()=>hh(!0),400),setInterval(()=>{document.hidden||hh(!1)},12e4);let Ps=p=>{try{localStorage.setItem("rod_"+p.key,JSON.stringify({st:p.st,i:p.i,walk:p.walk,open:p.open,hide:p.hide||""}))}catch{}},uh=p=>p.st.length?ht.get(p.st[p.i]||p.st[0]):null;function Tm(p,y,T,A){if(A&&y.tr){let q=y.tr.pat.stops,G=q.indexOf(p);if(G>=0&&q.slice(G+1).some(X=>A.has(X)))return"to"}if(A&&y.tr)return"out";let P=ht.get(y.destId)??b.findIndex(q=>q.n===y.dest);if(P<0||P==null||T==null)return"otros";let D=q=>Math.hypot(b[q].w[0]-b[T].w[0],b[q].w[1]-b[T].w[1]);return D(P)<D(p)?"to":"out"}let Co=p=>p<1?"ahora":p<60?Math.round(p)+" min":Math.floor(p/60)+" h "+String(Math.round(p%60)).padStart(2,"0"),bd=0,Am=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Cm(p,y,T){let A=uh(p);if(p===pe){if(A==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${pe.err?d(pe.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Zn,En].find(ee=>ee.st.includes(pe.st[0])&&pe.dist[pe.st[0]]<1.5))return"";p.walk=Em(pe.dist[p.st[p.i]]||0)}if(A==null){let St=pe.st.length?ht.get(pe.st[0]):null,ee=p===En?Zn:En,We=St!=null&&!ee.st.includes(pe.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${p.ico}</span><span class="htit"><b>${p.name}</b><small>${We?`Est\xE1s en <b>${d(b[St].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${We?`<button type="button" class="hpick" data-hnear="${p.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${p.key}">${We?"Otra\u2026":"Elegir"}</button></div></div>`}Mm(A,()=>fn(!0));let P=p===pe?null:p===Zn?En:Zn,D=P?uh(P):null,q=D!=null&&D!==A?D:Sm,G=D!=null&&D!==A?P===En?"el trabajo":"casa":"Barcelona",X=b[A].fams,tt=new Set([...X].filter(St=>U.has(St))),ct=tt.size<X.size,v=pe.w?Math.hypot(b[A].w[0]-pe.w[0],b[A].w[1]-pe.w[1])*pe.k:null,z=p===pe||v!=null&&v>3&&Date.now()-pe.fix<15*6e4,dt=ch(A).filter(St=>!C[St.fam]||U.has(St.fam)),ft=z?0:p.walk,Vt=F.alerts.filter(St=>[...St.fams].some(ee=>tt.has(ee))||St.stops&&St.stops.has(A)),se=Vt.some(St=>Am.test(St.txt)),ue={to:[],out:[],otros:[],all:dt},_t=G!=="Barcelona"?new Set(P.st.map(St=>ht.get(St)).filter(St=>St!=null)):null;dt.forEach(St=>ue[Tm(A,St,q,_t)].push(St));let yt=St=>{if(St==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let ee=pn=>(pn.find(ui=>ui.fam)||{}).fam;if(St==="to")return"Hacia "+ls(G==="Barcelona"?"Barcelona":b[q].n,ee(ue.to)||[...tt][0])+(G!=="Barcelona"?` <small>${G}</small>`:"");let We=[];for(let pn of ue[St])We.some(ui=>ui[0]===pn.dest)||We.push([pn.dest,pn.fam]);return We.length?"Hacia "+We.slice(0,2).map(([pn,ui])=>ls(pn,ui)).join(" "):"Otros"},re=St=>{let ee=ue[St].find(Tn=>!Tn.cancel&&!Tn.gone&&Tn.est-y.min>=ft);if(!ee){let Tn=ue[St].find(Fm=>!Fm.cancel);return Tn&&!z?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Ht(Tn.est)}) sale en ${Co(Tn.est-y.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let We=ee.est-y.min-ft,pn=z?"v-info":We<1.5?"v-bad":We<5?"v-warn":"v-ok",ui=ee.ghost?ue[St].find(Tn=>!Tn.cancel&&!Tn.ghost&&Tn.live&&Tn.est>ee.est):null;return{cls:pn,ghost:!!ee.ghost,big:z?We<1?"Sale ahora":"Sale en "+Co(We):We<1.5?"\xA1Sal ya!":"Sal en "+Co(We),warn:ee.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${ui?` \xB7 el siguiente en marcha sale a las ${Ht(ui.est)}`:""}`:se?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${Ht(ee.est)} \xB7 ${ee.fam} a ${ee.dest}${ee.plat?" \xB7 v\xEDa "+ee.plat:""}${ee.dl>=1?` \xB7 +${Math.round(ee.dl)} min`:""}${ee.arr!=null?` \xB7 llegas a las ${Ht(ee.arr)}`:""}`,x:ee}},_e=_t||new Set([q]),Ie=St=>{let ee=St.tr;if(!ee)return null;let We=ee.pat.stops,pn=We.indexOf(A);if(pn<0)return null;let ui=-1;for(let Tn=pn+1;Tn<We.length;Tn++)if(_e.has(We[Tn])){ui=Tn;break}return ui<0?null:St.est+(ee.pat.t[2*ui]-ee.pat.t[2*pn+1])};ue.to.forEach(St=>{St.arr=Ie(St)});let hn=ue.out.length?"out":"otros",Oe=re("to"),Ne=re(hn),Zi=Et()&&y.live,Ds=tt.size===1,Nn=St=>{let ee=St.est-y.min;return z?St.cancel?"cx":ee<0?"u-miss":"u-info":St.cancel?"cx":ee<ft?"u-miss":ee<ft+1.5?"u-now":ee<ft+5?"u-soon":"u-ok"},Dm=St=>{if(St.gone)return`<li class="hr u-gone${St.live?" on":""}${bo(St)?" sel":""} go" data-dk="${T.push(St)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${Ht(St.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(y.min-St.est))} min</small></span><span class="hrd">${ls((Ds?"":St.fam+" \xB7 ")+St.dest,St.fam)}<small class="hro">tren ${d(St.num)}</small></span><span class="hrm">${St.dl>=1?`<em class="dl ${Rs(St.dl)}">+${Math.round(St.dl)}</em>`:""}</span></li>`;let ee=!St.cancel&&St.est-y.min<ft,We=rh(St.num,"");return`<li class="hr ${Nn(St)}${St.live?" on":""}${St.ghost?" gh":""}${bo(St)?" sel":""} go" style="--lc:${C[St.fam]||"#6b7385"}" data-dk="${T.push(St)-1}" title="${St.cancel?"Cancelado":ee?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${St.cancel?"\u2715":ee?Ht(St.est):Co(St.est-y.min)}</b><small>${St.cancel?"cancelado":St.late?"a\xFAn no ha salido":ee?"no llegas":St.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':Ht(St.est)}</small></span><span class="hrd">${ls((Ds?"":St.fam+" \xB7 ")+St.dest,St.fam)}${We.length?`<i class="cr" title="${d(We.map(pn=>Eo(pn.kind)).join(" \xB7 "))}">${We.slice(0,2).map(pn=>wo[pn.kind]).join("")}</i>`:""}${St.arr!=null?`<small class="hro">llegas a las ${Ht(St.arr)}</small>`:""}${St.obs?`<small class="hro">${d(St.obs)}</small>`:""}</span><span class="hrm">${!St.cancel&&St.dl>=1?`<em class="dl ${Rs(St.dl)}">+${Math.round(St.dl)}</em>`:""}${St.plat?`<i class="via">v\xEDa ${d(St.plat)}</i>`:""}</span></li>`},sa=(St,ee,We)=>`<div class="hcol"><div class="hdir">${yt(St)}${We?`<button type="button" class="hhide" data-hhide="${p.key}:${We}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${ee.cls}${ee.ghost?" gh":""}${ee.x?" go":""}"${ee.x?` data-dk="${T.push(ee.x)-1}"`:""}><b>${ee.big}</b><small>${d(ee.small)}</small>${ee.warn?`<span class="hvw">${d(ee.warn)}</span>`:""}</div><ol>${ue[St].slice(0,(p.more?St==="all"||p.hide?20:10:St==="all"?7:p.hide?8:4)+ue[St].filter(pn=>pn.gone).length).map(Dm).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(p===pe){let St=re("all");var Nm=St.x?`${St.big} \xB7 <b>${Ht(St.x.est)}</b> ${d(St.x.fam)} a ${d(St.x.dest)}${St.x.plat?" \xB7 v\xEDa "+d(St.x.plat):""}`:St.big}let Um=p===pe?Nm:Oe.x?`${Oe.big} \xB7 <b>${Ht(Oe.x.est)}</b>${Oe.x.arr!=null?` \u2192 llegas a las <b>${Ht(Oe.x.arr)}</b>`:""} hacia ${d(G)}${Oe.x.plat?" \xB7 v\xEDa "+d(Oe.x.plat):""}`:"Sin trenes hacia "+d(G);return`<div class="hplace ${p.open?"open":""}"><button type="button" class="hhead" data-ht="${p.key}"><span class="hico">${p.ico}</span><span class="htit"><b>${d(b[A].n)}</b><small class="c${se?"bad":Oe.cls.slice(2)}">${Um}</small></span><span class="hchev">\u25BE</span></button>`+(p.open?`
      <div class="hbody">
        ${p.st.length>1?`<div class="hst">${p.st.map((St,ee)=>{let We=ht.get(St);return We==null?"":`<button type="button" data-hs="${p.key}:${ee}" class="${ee===p.i?"on":""}">${d(b[We].n)}</button>`}).join("")}</div>`:""}
        ${p===pe?`<div class="hwalk">\u{1F4CD} A ${(()=>{let St=pe.dist[p.st[p.i]]||0;return St<1?Math.round(St*100)*10+" m":St.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${p.walk} min</b> a pie</div>`:""}
        ${z&&p!==pe?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${v<10?v.toFixed(1).replace(".",","):Math.round(v)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${z?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${p.key}:-1">\u2212</button><b>${ft} min</b><button type="button" data-hw="${p.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${ct?`<div class="hflt">Solo ${[...tt].sort(O).map(gi).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${Vt.length?`<div class="hal ${se?"bad":""}">\u26A0\uFE0F ${ah(Vt[0])} ${d(Vt[0].txt)} <small>${oh(Vt[0])}</small>${Vt.length>1?` <a data-hal>+${Vt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...tt].sort(O).join(", ")}</div>`}
        ${(()=>{let St=p.st.flatMap(ee=>rh("",ee));return St.length?`<div class="hcr">${St.slice(0,3).map(ee=>`${wo[ee.kind]} <b>${d(Eo(ee.kind))}</b> <small>${ee.up>1?ee.up+" viajeros \xB7 ":""}${gd(ee)}</small>`).join("<br>")}</div>`:""})()}
        ${p===pe?`<div class="hcols one">${sa("all",re("all"))}</div>`:p.hide==="out"?`<div class="hcols one">${sa("to",Oe)}</div><a class="hshow" data-hshow="${p.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:p.hide==="to"?`<div class="hcols one">${sa(hn,Ne)}</div><a class="hshow" data-hshow="${p.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${sa("to",Oe,"to")}${sa(hn,Ne,"out")}</div>`}
        ${dt.length>(p===pe?7:8)?`<button type="button" class="hmore" data-hmore="${p.key}">${p.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Zi?Ln.get(b[A].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${Zi?Ln.get(b[A].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${A}">\u{1F5FA}\uFE0F mapa</a>${p===pe?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${p.key}">\u270E cambiar</a>`}${p===En?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let Pi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},wd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ed=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,ia=()=>{let p=[...Zn.st,...En.st],y=new Set;return p.forEach(T=>{let A=ht.get(T);A!=null&&b[A].fams.forEach(P=>y.add(P))}),{stations:p,lines:[...y].sort(O)}},Rm=p=>Uint8Array.from(atob(p.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((p.length+3)%4)),y=>y.charCodeAt(0));async function Td(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Ad(p){let T=await(await fetch(F.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:p.toJSON(),...ia()})})).json();if(!T.ok)throw new Error(T.err||"error")}let Vn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Im(){let{lines:p,stations:y}=ia(),T=new Set(p),A=new Set(y.map(q=>ht.get(q))),P=F.alerts.filter(q=>[...q.fams].some(G=>T.has(G))||[...q.stops||[]].some(G=>A.has(G)));if(!Vn.seen){try{Vn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Vn.seen=new Set}if(!Vn.seen.size){P.forEach(q=>Vn.seen.add(q.id+"|"+q.txt.length)),Cd();return}}let D=P.filter(q=>!Vn.seen.has(q.id+"|"+q.txt.length));if(D.length&&(D.forEach(q=>Vn.seen.add(q.id+"|"+q.txt.length)),Cd(),!(!Vn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let q of D.slice(0,3)){let G=(q.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(q.fams.size?" \xB7 "+[...q.fams].sort(O).slice(0,4).join(" "):""),X={body:q.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+q.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(tt=>tt?tt.showNotification(G,X):new Notification(G,X)).catch(()=>{try{new Notification(G,X)}catch{}})}}function Cd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Vn.seen].slice(-400)))}catch{}}async function Pm(){if(Vn.on)Vn.on=!1,Yn("Avisos desactivados");else{if(!("Notification"in window)){Yn(wd&&!Ed()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Yn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Vn.on=!0,Yn("Listo: te aviso de incidencias en "+ia().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Vn.on?"1":"")}catch{}fn(!0)}async function Lm(){if(!F.repOk)return Pm();if(!Pi.busy){Pi.busy=!0;try{let p=await Td();if(!p){Yn(wd&&!Ed()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Pi.on){let y=await p.pushManager.getSubscription();y&&(fetch(F.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:y.endpoint})}).catch(()=>{}),await y.unsubscribe().catch(()=>{})),Pi.on=!1,Yn("Avisos desactivados")}else{if(!F.url){Yn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Yn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let T=(await vt(F.url.replace(/\/+$/,""),"/push/key")).key,A=await p.pushManager.getSubscription()||await p.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Rm(T)});await Ad(A),Pi.on=!0,Yn("Listo: te avisaremos de incidencias en "+ia().lines.join(", "))}try{localStorage.setItem("rod_push",Pi.on?"1":"")}catch{}}catch(p){Yn("No se han podido activar los avisos: "+(p.message||p))}finally{Pi.busy=!1,fn(!0)}}}async function Rd(){if(Pi.on)try{let p=await Td(),y=p&&await p.pushManager.getSubscription();y&&await Ad(y)}catch{}}let dh=!1,Id="";function fh(){let p=Se?"t"+(Se.tid||Se.vtid):Qe>=0?"s"+Qe:M?"a":ln?"n":"";p!==Id&&(dh=!1,Id=p);let y=innerWidth<=640&&!!p&&!dh,T=f("#inf");T.classList.contains("compact")!==y&&(T.classList.toggle("compact",y),requestAnimationFrame(()=>{if(h.style.display!=="none"){let A=T.getBoundingClientRect().bottom;h.style.top=Math.round(A+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-A-16)+"px"}}))}function fn(p){let y=f("#home");if(!y)return;let T=performance.now();if(!p&&T-bd<4e3)return;bd=T;let A=Ct(),P=[],D=ia(),q=v=>{let z=uh(v);return z==null||!pe.w?1:Math.hypot(b[z].w[0]-pe.w[0],b[z].w[1]-pe.w[1])},G=[pe,...[Zn,En].sort((v,z)=>q(v)-q(z))],X=G.map(v=>Cm(v,A,P)).join("")+(Ao.some(v=>v.open)&&D.lines.length,"");if(y.className=Ao.some(v=>v.open)?"open":"",y._h===X)return;y._h=X,y.innerHTML=X;{let v=[...y.children].find(z=>z.classList.contains("hplace")&&!z.querySelector(".hnew"));v&&v.classList.add("lead")}let tt=v=>v==="work"?En:v==="near"?pe:Zn;y.querySelectorAll("[data-hloc]").forEach(v=>v.onclick=()=>{pe.err="",hh(!0)}),y.querySelectorAll("[data-ht]").forEach(v=>v.onclick=()=>{if(f("#inf").classList.contains("compact")){dh=!0,fh();return}let z=tt(v.dataset.ht);z.open=!z.open,Ps(z),fn(!0),(Se||Qe>=0||M||ln)&&(h._h="",Ze())}),y.querySelectorAll("[data-hs]").forEach(v=>v.onclick=()=>{let[z,dt]=v.dataset.hs.split(":"),ft=tt(z);ft.i=+dt,Ps(ft),fn(!0)}),y.querySelectorAll("[data-hw]").forEach(v=>v.onclick=()=>{let[z,dt]=v.dataset.hw.split(":"),ft=tt(z);ft.walk=g(ft.walk+ +dt,0,60),Ps(ft),fn(!0)}),y.querySelectorAll("[data-hmap]").forEach(v=>v.onclick=()=>{let z=+v.dataset.hmap;ln=M=je=!1,Se=null,Qe=z,Tt(),Object.assign(s,{tx:b[z].w[0],ty:b[z].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Ze(),a()}),y.querySelectorAll("[data-hset]").forEach(v=>v.onclick=()=>{Ls=v.dataset.hset,m.value="",m.placeholder=Ls==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),y.querySelectorAll("[data-hnear]").forEach(v=>v.onclick=()=>{let z=ht.get(pe.st[0]);z!=null&&ph(z,v.dataset.hnear)}),y.querySelectorAll("[data-hmore]").forEach(v=>v.onclick=()=>{let z=tt(v.dataset.hmore);z.more=!z.more,fn(!0)}),y.querySelectorAll("[data-hhide]").forEach(v=>v.onclick=z=>{z.stopPropagation();let[dt,ft]=v.dataset.hhide.split(":"),Vt=tt(dt);Vt.hide=ft,Ps(Vt),fn(!0)}),y.querySelectorAll("[data-hshow]").forEach(v=>v.onclick=()=>{let z=tt(v.dataset.hshow);z.hide="",Ps(z),fn(!0)}),y.querySelectorAll("[data-hdel]").forEach(v=>v.onclick=()=>{En.st=[],En.open=!1,Ps(En),fn(!0),Rd()}),y.querySelectorAll("[data-dk]").forEach(v=>v.onclick=()=>Pd(P[+v.dataset.dk])),y.querySelectorAll("[data-hal]").forEach(v=>v.onclick=()=>f("#alr").click());let ct=f("#bell");ct||(ct=document.createElement("button"),ct.type="button",ct.id="bell",ct.onclick=Lm,f("#inf .more").prepend(ct));{let v=F.repOk?Pi.on:Vn.on;ct.hidden=!D.lines.length,ct.className=v?"on":"",ct.textContent=(v?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+D.lines.join(", "),ct.title=(v?"Avisos activados":"Activar avisos")+" de "+D.lines.join(", ")+(F.repOk?"":" (mientras la app est\xE9 abierta)")}xd(y)}function Pd(p){if(!p)return;let y=t.days.indexOf(Ct().ymd),T=qn.find(D=>D.real?p.tid&&D.v.tid===p.tid||p.num&&String(D.tr?D.tr.num:D.v.num)===String(p.num):p.tr&&D.tr===p.tr||p.num&&D.tr&&String(D.tr.num)===String(p.num)),A=p.tr||T&&T.tr||(J[y]||[]).find(D=>String(D.num)===String(p.num));if(ln=M=je=!1,Qe=-1,Se=T?T.tr||{vtid:T.v.tid}:A||null,!Se)return;xn=T&&T.tr?T.tr:null,xn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let P=T?T.p.w:null;P&&Object.assign(s,{tx:P[0],ty:P[1],dist:Math.min(s.dist,22)}),Tt(),h._h="",Ze(),mi=0,a()}let Ls=!1;m.addEventListener("blur",()=>setTimeout(()=>{Ls&&!m.value.trim()&&(Ls=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function xS(){}function ph(p,y){let T=y==="work"?En:Zn,A=b[p].id,P=b.filter(D=>D.fams.size&&D!==b[p]&&Math.hypot(D.w[0]-b[p].w[0],D.w[1]-b[p].w[1])<.6).map(D=>D.id);T.st=[A,...P].slice(0,3),T.i=0,T.open=!0,Ps(T),fn(!0),Rd()}let mh=f("#lines");mh.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+S.map(p=>`<button type="button" style="--c:${C[p]}" data-f="${p}">${p}</button>`).join("");function Ld(){try{fn(!0)}catch{}mh.querySelectorAll("[data-f]").forEach(p=>{p.dataset.f!=="*"&&p.classList.toggle("off",!U.has(p.dataset.f))})}mh.querySelectorAll("[data-f]").forEach(p=>p.onclick=()=>{let y=p.dataset.f;y==="*"?S.forEach(T=>U.add(T)):U.size===S.length?(U.clear(),U.add(y)):U.has(y)?(U.delete(y),U.size||S.forEach(T=>U.add(T))):U.add(y);try{localStorage.setItem("rod_lines",JSON.stringify([...U]))}catch{}Ld(),mt(),Tt(),lh(),mi=0,a()});let gh=[...document.querySelectorAll("[data-sp]")],hi=0;function Dd(p){let y=Ct();p&&(nt===p||hi===p)?nt?(Ut=y.min,pt=y.min,nt=0,hi=p):(ie=performance.now(),nt=p,hi=0):p===0?(nt=0,pt=null,hi=0):(Ut=y.min,ie=performance.now(),pt=y.min,nt=p,hi=0),gh.forEach(T=>{let A=+T.dataset.sp;T.classList.toggle("on",A===(nt||hi)||!nt&&!hi&&pt==null&&A===0),T.classList.toggle("pz",!!hi&&A===hi),T.textContent=A===0?"Ahora":hi===A?"\u25B6 \xD7"+A:nt===A?"\u23F8 \xD7"+A:"\xD7"+A}),mi=0,a()}gh.forEach(p=>p.onclick=()=>Dd(+p.dataset.sp)),f("#tsl").oninput=p=>{let y=+p.target.value;Ut=y,pt=y,ie=performance.now(),nt===0&&!hi&&gh.forEach(T=>T.classList.remove("on")),mi=0,a()},setInterval(()=>{pt!=null&&nt&&Ut+(performance.now()-ie)/6e4*nt>1560&&(Ut=240,ie=performance.now())},1e3),window.__rodSearch=p=>{let y=_(p.trim());if(!y){u.style.display="none",u._pick=null;return}let T=[],A=[];b.forEach((G,X)=>{if(!G.fams.size)return;let tt=_(G.n);tt.startsWith(y)||tt.includes(" "+y)||tt.includes("-"+y)?T.push(X):tt.includes(y)&&A.push(X)});let P=T.concat(A).slice(0,7),D=E.filter(G=>_(G.name).startsWith(y)).sort((G,X)=>X.pop-G.pop).slice(0,3),q=P.map(G=>({h:`\u{1F689} ${d(b[G].n)}<em>${[...b[G].fams].sort(O).slice(0,3).map(X=>`<em class="ls" style="background:${C[X]}">${X}</em>`).join(" ")}</em>`,go:()=>{if(Ls){let X=Ls;Ls=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",ph(G,X);return}ln=!1,M=!1,je=!1,Qe=G,Se=null,xn=null,Tt(),Object.assign(s,{tx:b[G].w[0],ty:b[G].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ze(),a()}})).concat(D.map(G=>({h:`${d(G.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:G.cx,ty:G.cy,dist:g(G.size*3+14,14,60)}),a()}})));u.innerHTML=q.map((G,X)=>`<li data-i="${X}">${G.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=G=>{q[G]&&(q[G].go(),u.style.display="none",m.value="",m.blur())},u.querySelectorAll("li[data-i]").forEach(G=>G.onclick=()=>u._pick(+G.dataset.i))},Ld(),Tt();try{let p=new URLSearchParams(location.search).get("st");if(p){let y=_(p),T=-1,A=0;b.forEach((P,D)=>{if(!P.fams.size)return;let q=_(P.n),G=q===y?3:q.startsWith(y)||y.startsWith(q)?2:q.includes(y)||y.includes(q)?1:0;G>A&&(A=G,T=D)}),T>=0&&setTimeout(()=>{Qe=T,Tt(),Object.assign(s,{tx:b[T].w[0],ty:b[T].w[1],dist:18,tilt:.5}),Ze(),a()},300)}}catch{}window.__rod={TID:V,SID:ht,byDay:J,get days(){return t.days},get hist(){return fe},get past(){return $t.cur},get cols(){return ye.mesh?ye.mesh.count:-1},get dist(){return r.dist},get follow(){return xn},get selTrip(){return Se},ST:b,TR:$,FAM:S,act:()=>qn,setSpeed:Dd,RT:F,pollRT:bt,nowState:Ct,posAt:oi,activeTrips:ar,select:p=>{Se=p,Ze()}}}var Yr=window.__DATA__;var Ae=i=>document.querySelector(i),as=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),zn=(i,t,e)=>Math.min(e,Math.max(t,i)),Ku=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Xn=Ae("#c"),mo=new zc({canvas:Xn,antialias:!0});mo.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ts=new ba;Ts.background=new oe(15659509);var th=35,Yi=new On(th,1,2,1500);Ts.add(new Xa(16777215,9080992,1));var Kp=new Ya(16777215,.9);Kp.position.set(-40,-70,90);Ts.add(Kp);var Xi=100/Yr.w,uo=Yr.w/2,fo=Yr.h/2,an=[],ju=new bi;Ts.add(ju);var jp=new Hs({color:16777215,transparent:!0,opacity:.55});for(let i of Yr.m){let t=new bi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let _=g.map(f=>{let d=[];for(let L=0;L<f.length;L+=2)d.push(new Nt((f[L]-uo)*Xi,(f[L+1]-fo)*Xi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!_.length)continue;let E=new Nr(_[0]);for(let f=1;f<_.length;f++)E.holes.push(new Ws(_[f]));e.push(E);for(let f of _[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of _)n.push(new Ra(new rn().setFromPoints(f.map(d=>new B(d.x,d.y,0))),jp))}if(!e.length)continue;let l;try{l=new ka(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new Ga({color:13421772}),h=new bn(l,c);t.add(h);let m=new bi;n.forEach(g=>m.add(g)),m.position.z=.04,ju.add(m),t.scale.z=.01,ju.add(t);let u={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,an.push(u)}var Gw=an.map(i=>i.mesh),Wp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Qp=0,tm=0;for(let i of an){for(let t of i.rings)Qp+=Wp(t[0])-t.slice(1).reduce((e,n)=>e+Wp(n),0);tm+=i.area}var tS=Math.sqrt(tm/Qp),Xc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},em={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},rd="sqrt",ad="pop",Zu=0,Qu=0,$r=1,ho=1,eS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},td=i=>ad==="pop"?i.pop:i.pop/i.area,$c=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new oe(i));function nS(i){i=zn(i,0,1)*($c.length-1);let t=Math.min(Math.floor(i),$c.length-2);return $c[t].clone().lerp($c[t+1],i-t)}var Xr=i=>i>=100?as(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function iS(){Qu=0;for(let i of an)Qu+=i.pop;[...an].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...an].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),nm()}var sS=new oe("#d3d8e2"),rS=new oe("#eceff3");function od(i){i.mat.color.copy(i.base).lerp(rS,.86),i.inF||i.mat.color.lerp(sS,.8)}function nm(){$r=1,ho=1e12;for(let e of an){let n=td(e);$r=Math.max($r,n),ho=Math.min(ho,n)}let i=Math.log10(Math.max(ho,.01)),t=Math.log10($r);for(let e of an)e.base=nS((Math.log10(Math.max(td(e),.01))-i)/(t-i)),od(e);Ae("#lmin").textContent=Xr(ho),Ae("#lmax").textContent=Xr($r),Ae("#lname").textContent=ad==="pop"?"habitantes":"hab./km\xB2",eh()}function eh(){let i=eS[rd],t=i($r),e=24*Zu;for(let n of an)n.zt=Zu<=.001?.01:Math.max(.12*Math.min(1,Zu),e*i(td(n))/t)*(n.inF?1:.1);Pn()}var $p=Object.fromEntries(an.map(i=>[i.code,i])),qc=[],im=[];for(let i of Yr.bd){let t=$p[i.a],e=$p[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)im.push((i.p[n]-uo)*Xi,(i.p[n+1]-fo)*Xi,0,(i.p[n+2]-uo)*Xi,(i.p[n+3]-fo)*Xi,0),qc.push(t,e)}var Jc=new ss;Jc.setPositions(im);var sm=new Hi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),rm=new Hi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[sm,rm].forEach((i,t)=>{let e=new js(Jc,i);e.frustumCulled=!1,e.renderOrder=10+t,Ts.add(e)});function aS(){let i=Jc.attributes.instanceStart.data.array;for(let t=0;t<qc.length;t+=2){let e=Math.max(qc[t].z,qc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Jc.attributes.instanceStart.data.needsUpdate=!0}var Kc={};for(let i of Object.keys(Xc)){let t=an.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=Xc[i],c.title="Ver solo "+em[i],c.onclick=()=>_S("pr:"+i),document.body.appendChild(c),Kc[i]={el:c,p:new B(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:Xc[i]}}var Ju=new B;function oS(){for(let i in Kc){let t=Kc[i];Ju.copy(t.p).project(Yi),t.el.style.transform=`translate(-50%,-50%) translate(${(Ju.x*.5+.5)*innerWidth}px,${(-Ju.y*.5+.5)*innerHeight}px)`}}var on={tilt:0,yaw:0,dist:150,tx:0,ty:0},me={...on};function lS(){let i=innerWidth/innerHeight,t=Math.tan(th*Math.PI/360);return Math.max(Yr.h*Xi*1.1,100*1.1/i)/(2*t)}var cS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{me.yaw=Math.round(me.yaw/(2*Math.PI))*2*Math.PI,me.tilt=0,Pn()});function ld(){Object.assign(me,{tilt:0,yaw:0,dist:lS(),tx:0,ty:0}),Pn()}function hS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=on;Yi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Yi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Yi.lookAt(n,s,0)}var Yc=!0,Xp=performance.now(),po=new Map;function Pn(){Yc=!0}function am(i){requestAnimationFrame(am);let t=zn((i-Xp)/1e3,0,.05);Xp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(on)){let r=me[s]-on[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(on[s]+=r*e,n=!0):on[s]=me[s]}for(let s of an){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of po){let a=(i-r)/1800;a>=1?(po.delete(s),ir(s)):ir(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Yc=!0),n||Yc){cS.style.transform=`rotate(${on.yaw}rad) scaleY(${(.55+.45*Math.cos(on.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(me.yaw/2))<.02&&me.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}hS(),aS(),oS(),window.__rodFrame&&window.__rodFrame(),mo.render(Ts,Yi),Yc=n,Ae("#tilt").value=Math.round(me.tilt*180/Math.PI),Ae("#yaw").value=Math.round(((me.yaw*180/Math.PI+180)%360+360)%360-180)}}function om(){mo.setSize(innerWidth,innerHeight,!1),Yi.aspect=innerWidth/innerHeight,Yi.updateProjectionMatrix(),sm.resolution.set(innerWidth,innerHeight),rm.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Pn()}addEventListener("resize",()=>{om(),Ye.length&&As()});Xn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;me.yaw+=n*.0035}else i.ctrlKey?me.dist=zn(me.dist*Math.exp(e*.01),6,400):me.tilt=zn(me.tilt+e*.002,0,1.32);Pn()},{passive:!1});Xn.addEventListener("contextmenu",i=>i.preventDefault());var qi=new Map,ti=null,tr=0,ed=0,nd=0;var jc=null;Xn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Ye.length&&setTimeout(As,50)),Xn.setPointerCapture(i.pointerId),qi.set(i.pointerId,{x:i.clientX,y:i.clientY}),qi.size===1&&(ti={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),qi.size===2){let[t,e]=[...qi.values()];tr=Math.hypot(t.x-e.x,t.y-e.y),ed=Math.atan2(e.y-t.y,e.x-t.x),nd=(t.y+e.y)/2,jc={mode:null,rot:0,sc:0,tl:0},ti&&(ti.multi=!0)}cd()});Xn.addEventListener("pointermove",i=>{let t=qi.get(i.pointerId);if(!t){rs={x:i.clientX,y:i.clientY},id||(id=requestAnimationFrame(dS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,qi.size===2){let[s,r]=[...qi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-ed;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=tr?a-tr:0,m=l-nd,u=jc||(jc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=m,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&tr&&(me.dist=zn(me.dist*tr/a,6,400)),u.mode==="rotate"&&(me.yaw+=c,on.yaw=me.yaw),u.mode==="tilt"&&(me.tilt=zn(me.tilt-m*.006,0,1.32),on.tilt=me.tilt),tr=a,ed=o,nd=l,Pn();return}if(ti.moved+=Math.abs(e)+Math.abs(n),ti.rot||i.altKey)me.yaw+=e*.005,me.tilt=zn(me.tilt+n*.004,0,1.32),on.yaw=me.yaw,on.tilt=me.tilt;else{let s=2*on.dist*Math.tan(th*Math.PI/360)/innerHeight,r=Math.sin(on.yaw),a=Math.cos(on.yaw),o=1/Math.max(Math.cos(on.tilt),.3);me.tx=zn(me.tx-a*e*s+-r*n*s*o,-70,70),me.ty=zn(me.ty-r*e*s+a*n*s*o,-70,70),on.tx=me.tx,on.ty=me.ty}Pn()});var lm=i=>{let t=ti&&!ti.rot&&!ti.multi&&ti.moved<(ti.touch?12:6)&&i.type==="pointerup"&&qi.size===1,e=ti&&ti.touch;qi.delete(i.pointerId),tr=0,jc=null,qi.size||(ti=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Xn.addEventListener("pointerup",lm);Xn.addEventListener("pointercancel",lm);Xn.addEventListener("dblclick",ld);addEventListener("keydown",i=>{i.key==="Alt"&&(Xn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Xn.style.cursor="")});addEventListener("blur",()=>{Xn.style.cursor=""});var uS=new Xs,qp=new Nt,rs=null,id=0,er=null;function dS(){if(id=0,!rs||ti)return;qp.set(rs.x/innerWidth*2-1,-(rs.y/innerHeight)*2+1),uS.setFromCamera(qp,Yi);let i=null;if(i!==er){let e=er;er=i,e&&ir(e),i&&ir(i),Pn()}let t=window.__rodHover&&window.__rodHover(rs.x,rs.y);if(t){Qs.innerHTML=t,Qs.style.display="block";let e=Qs.offsetWidth,n=Qs.offsetHeight;Qs.style.left=zn(rs.x+14,6,innerWidth-e-6)+"px",Qs.style.top=zn(rs.y+14,6,innerHeight-n-6)+"px",Xn.style.cursor="pointer"}else cd(),Xn.style.cursor=""}Xn.addEventListener("pointerleave",()=>{if(rs=null,er){let i=er;er=null,ir(i),Pn()}cd()});var Qs=Ae("#tip");function cd(){Qs.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{ad=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),nm()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{rd=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),eh()});Ae("#yaw").oninput=i=>{me.yaw=+i.target.value*Math.PI/180,Pn()};Ae("#tilt").oninput=i=>{me.tilt=+i.target.value*Math.PI/180,Pn()};Ae("#zin").onclick=()=>{me.dist=zn(me.dist*.75,6,400),Pn()};Ae("#zout").onclick=()=>{me.dist=zn(me.dist/.75,6,400),Pn()};Ae("#rst").onclick=ld;var Yp=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Ye=[],Zp={},fS=i=>Zp[i]||(Zp[i]=new Hs({color:i}));function cm(i,t){i.og.children.forEach(e=>e.material=t?fS(t):jp)}function ir(i,t=0){let e=i.mat.emissive;i===er?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function hd(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(th*Math.PI/360),l=i.length===1?zn(i[0].size*3.2+14,14,120):zn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(me,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),Pn()}var Es=Ae("#q"),ai=Ae("#list"),qe=Ae("#mcs");function nh(i,t=!0){if(ai.style.display="none",Es.value="",!i.sel){Ye.length>=6&&hm(Ye[0].o,!0);let e=new Set(Ye.map(s=>s.color)),n=Yp.find(s=>!e.has(s))||Yp[0];i.sel={o:i,color:n,tint:new oe(n).multiplyScalar(.12)},Ye.push(i.sel),cm(i,n)}qe.classList.contains("min")&&go(!1),po.set(i,performance.now()),ir(i),t&&hd([i],Math.max(me.tilt,.9)),As()}function hm(i,t){let e=Ye.indexOf(i.sel);e>=0&&Ye.splice(e,1),i.sel=null,cm(i,null),ir(i),Pn(),t||As()}function um(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Ye.map(h=>{let m=1e9,u=-1e9,g=1e9,_=-1e9;for(let E of h.o.rings)for(let f=0;f<E[0].length;f+=2)m=Math.min(m,E[0][f]),u=Math.max(u,E[0][f]),g=Math.min(g,E[0][f+1]),_=Math.max(_,E[0][f+1]);return{x0:m,x1:u,y0:g,y1:_}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Ye.forEach((h,m)=>{let u=r[m],g=(u.x0+u.x1)/2,_=(u.y0+u.y1)/2;s.beginPath();for(let E of h.o.rings)for(let f of E)for(let d=0;d<f.length;d+=2){let L=e/2+(f[d]-g)*o,N=n/2-(f[d+1]-_)*o;d?s.lineTo(L,N):s.moveTo(L,N),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/tS,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function As(){if(!Ye.length){qe.innerHTML="",qe.style.display="none",go(!1);return}if(qe.style.display="flex",innerWidth<=640){let e=Ae("#inf").getBoundingClientRect().bottom;qe.style.top=Math.round(e+8)+"px",qe.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ae("#rc").classList.contains("min")?.7:.4),Ae("#rc").getBoundingClientRect().top-e-16))+"px",qe.style.width=""}else if(innerHeight<=500){let e=Ae("#inf").getBoundingClientRect().bottom;qe.style.top=Math.round(e+8)+"px",qe.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",qe.style.width="min(290px, 40vw)"}else qe.style.top="",qe.style.maxHeight="",qe.style.width="";let i=Ye.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Xc[s.pr]}</em></div><div class="mb">${as(s.pop)} hab.</div><small>${Xr(s.area)} km\xB2 \xB7 ${Xr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Ye.length>1){let e=s=>Math.max(...Ye.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,as],["Superficie (km\xB2)",s=>s.o.area,Xr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Xr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Ye.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Ye.length===2){let[s,r]=Ye.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}qe.innerHTML=i,qe.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),hm(Ye[+e.dataset.x].o)}),qe.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>hd([Ye[+e.dataset.i].o],Math.max(me.tilt,.9)),e.onmouseenter=()=>{let n=Ye[+e.dataset.i].o;po.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Ye.splice(s,1);Ye.splice(r,0,a),As();let o=Ae("#sil");o&&o.classList.add("flash")}}});let t=Ae("#sil");t&&um(t)}Es.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Es.value);return}let i=Ku(Es.value.trim());if(!i){ai.style.display="none";return}let t=[],e=[];for(let s of an){let r=Ku(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ai.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${as(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ai.style.display="block",ai.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>nh(n[+s.dataset.i])),ai._r=n});Es.addEventListener("keydown",i=>{i.key==="Enter"&&ai._pick?ai._pick(0):i.key==="Enter"&&ai._r&&ai._r[0]&&nh(ai._r[0]),i.key==="Escape"&&(Es.value="",ai.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Es&&dm()});var Jp=0;addEventListener("resize",()=>{clearTimeout(Jp),Jp=setTimeout(()=>{let i=Ae("#sil");i&&um(i)},120)});var Qc=null,sd=Ae("#chip");function pS(i,t,e=.8){Qc={codes:new Set(i.map(n=>n.code)),label:t},an.forEach(n=>{n.inF=Qc.codes.has(n.code),od(n)}),sd.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,sd.style.display="flex",Ae("#chx").onclick=dm,eh(),hd(i,e),i.slice(0,40).forEach(n=>po.set(n,performance.now()))}function dm(){Qc&&(Qc=null,an.forEach(i=>{i.inF=!0,od(i)}),sd.style.display="none",eh())}var mS="prov";function gS(i){let t=[...an].sort((a,o)=>o.pop-a.pop),e=[...an].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[an.filter(a=>a.pr===s),em[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[an.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${as(+s)} o m\xE1s habitantes`:+s==0?`menos de ${as(+r)} habitantes`:`${as(+s)} \u2013 ${as(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Qu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function _S(i){let[t,e]=gS(i);t.length&&pS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{mS=i.dataset.tab,Ae("#dbody").scrollTop=0});var nr=Ae("#rc"),Zc=Ae("#mcstab");function qr(i){nr.classList.toggle("min",i),Ae("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Ye.length&&As()}function go(i){qe.classList.toggle("min",i),qe.style.transform="",qe.style.opacity="",Zc.classList.toggle("on",i&&Ye.length>0),i&&(Zc.textContent=`\u25B8 ${Ye.length} ${Ye.length===1?"ficha":"fichas"}`,Zc.style.top=qe.style.top||"124px")}function ud(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!ih.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ae("#rcgrab").onclick=()=>qr(!nr.classList.contains("min"));innerWidth<=640&&qr(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var fm=()=>innerWidth>640;ud(nr,{axis:"y",onEnd:(i,t)=>{if(!fm())if(t>40&&!nr.classList.contains("min")){let e=Ae("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&qr(!0)}else t<-30&&nr.classList.contains("min")&&qr(!1)}});ud(nr,{axis:"x",onEnd:i=>{fm()&&(i>50?qr(!0):i<-30&&nr.classList.contains("min")&&qr(!1))}});ud(qe,{axis:"x",onMove:i=>{i<0&&(qe.classList.add("sw"),qe.style.transform=`translateX(${i}px)`,qe.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{qe.classList.remove("sw"),i<-60?go(!0):(qe.style.transform="",qe.style.opacity="")}});Zc.onclick=()=>{go(!1),As()};Ae("#dtoggle").onclick=()=>{let i=Ae("#dp").classList.toggle("open");Ae("#rc").classList.toggle("dopen",i),Ae("#dtoggle").textContent=i?ih.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var ih=matchMedia("(max-width:640px), (max-height:500px)");function pm(){let i=Ae("#leg");ih.matches?Ae("#rc").insertBefore(i,Ae("#dtoggle")):document.body.appendChild(i),Ye.length&&As()}ih.addEventListener("change",pm);pm();om();iS();ld();Object.assign(on,me);for(let i of an)i.z=.01;requestAnimationFrame(am);Gp({scene:Ts,camera:Yi,renderer:mo,goal:me,cur:on,invalidate:Pn,flyTo:(i,t,e,n)=>{Object.assign(me,{tx:(i-uo)*Xi,ty:(t-fo)*Xi,dist:e,tilt:n}),Pn()},K:Xi,CX:uo,CY:fo,mcs:qe,q:Es,list:ai,munis:an,select:nh,norm:Ku,fmt:as,clamp:zn,mcsMin:go});window.__app={scene:Ts,renderer:mo,camera:Yi,munis:an,labs:Kc,goal:me,cur:on,select:nh,get mode(){return rd}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
