(()=>{var wf=0,ru=1,Ef=2;var to=1,Tf=2,kr=3,vs=0,Hn=1,Fi=2,Oi=0,Vr=1,au=2,ou=3,lu=4,Af=5;var qs=100,Cf=101,Rf=102,If=103,Pf=104,Lf=200,Df=201,Nf=202,Uf=203,cu=204,hu=205,Ff=206,Of=207,Bf=208,zf=209,kf=210,Vf=211,Hf=212,Gf=213,Wf=214,ol=0,ll=1,cl=2,Ar=3,hl=4,ul=5,dl=6,fl=7,Yl=0,$f=1,Xf=2,wi=0,uu=1,du=2,fu=3,pu=4,mu=5,gu=6,_u=7;var xu=300,ys=301,Ys=302,Zl=303,Jl=304,eo=306,pl=1e3,Ii=1001,ml=1002,xn=1003,qf=1004;var no=1005;var Tn=1006,Kl=1007;var Ss=1008;var jn=1009,vu=1010,yu=1011,Hr=1012,jl=1013,Ei=1014,di=1015,Ti=1016,Ql=1017,tc=1018,Gr=1020,Su=35902,Mu=35899,bu=1021,wu=1022,fi=1023,Li=1026,Ms=1027,ec=1028,nc=1029,bs=1030,ic=1031;var sc=1033,io=33776,so=33777,ro=33778,ao=33779,rc=35840,ac=35841,oc=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37488,fc=37489,oo=37490,pc=37491,mc=37808,gc=37809,_c=37810,xc=37811,vc=37812,yc=37813,Sc=37814,Mc=37815,bc=37816,wc=37817,Ec=37818,Tc=37819,Ac=37820,Cc=37821,Rc=36492,Ic=36494,Pc=36495,Lc=36283,Dc=36284,lo=36285,Nc=36286;var ya=2300,gl=2301,rl=2302,Xh=2303,qh=2400,Yh=2401,Zh=2402;var Yf=3200;var Uc=0,Zf=1,is="",ni="srgb",Sa="srgb-linear",Ma="linear",ke="srgb";var al=7680;var Jf=519,Kf=512,jf=513,Qf=514,Fc=515,tp=516,ep=517,Oc=518,np=519,Eu=35044;var Tu="300 es",Si=2e3,Cr=2001;function Gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){let i=ba("canvas");return i.style.display="block",i}var zd={},Rr=null;function wa(...i){let t="THREE."+i.shift();Rr?Rr("log",t,...i):console.log(t,...i)}function sp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function he(...i){i=sp(i);let t="THREE."+i.shift();if(Rr)Rr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=sp(i);let t="THREE."+i.shift();if(Rr)Rr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zs(...i){let t=i.join(" ");t in zd||(zd[t]=!0,he(...i))}function rp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ap={[ol]:ll,[cl]:dl,[hl]:fl,[Ar]:ul,[ll]:ol,[dl]:cl,[fl]:hl,[ul]:Ar},Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,ga=Math.PI/180,Ir=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Au(i,t){return(i%t+t)%t}function $m(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xm(i,t,e){return i!==t?(e-i)/(t-i):0}function _a(i,t,e){return(1-e)*i+e*t}function qm(i,t,e,n){return _a(i,t,1-Math.exp(-e*n))}function Ym(i,t=1){return t-Math.abs(Au(i,t*2)-t)}function Zm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Km(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jm(i,t){return i+Math.random()*(t-i)}function Qm(i){return i*(.5-Math.random())}function tg(i){i!==void 0&&(kd=i);let t=kd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eg(i){return i*ga}function ng(i){return i*Ir}function ig(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ag(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),u=a((t-n)/2),g=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*g,o*h,o*c);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cu={DEG2RAD:ga,RAD2DEG:Ir,generateUUID:Pi,clamp:Se,euclideanModulo:Au,mapLinear:$m,inverseLerp:Xm,lerp:_a,damp:qm,pingpong:Ym,smoothstep:Zm,smootherstep:Jm,randInt:Km,randFloat:jm,randFloatSpread:Qm,seededRandom:tg,degToRad:eg,radToDeg:ng,isPowerOfTwo:ig,ceilPowerOfTwo:sg,floorPowerOfTwo:rg,setQuaternionFromProperEuler:ag,normalize:Ge,denormalize:yi},Lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],g=r[a+1],_=r[a+2],T=r[a+3];if(m!==T||l!==u||c!==g||h!==_){let p=l*u+c*g+h*_+m*T;p<0&&(u=-u,g=-g,_=-_,T=-T,p=-p);let d=1-o;if(p<.9995){let D=Math.acos(p),N=Math.sin(D);d=Math.sin(d*D)/N,o=Math.sin(o*D)/N,l=l*d+u*o,c=c*d+g*o,h=h*d+_*o,m=m*d+T*o}else{l=l*d+u*o,c=c*d+g*o,h=h*d+_*o,m=m*d+T*o;let D=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=D,c*=D,h*=D,m*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],g=r[a+2],_=r[a+3];return t[e]=o*_+h*m+l*g-c*u,t[e+1]=l*_+h*u+c*m-o*g,t[e+2]=c*_+h*g+o*u-l*m,t[e+3]=h*_-o*m-l*u-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m-u*g*_;break;case"YXZ":this._x=u*h*m+c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m+u*g*_;break;case"ZXY":this._x=u*h*m-c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m-u*g*_;break;case"ZYX":this._x=u*h*m-c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m+u*g*_;break;case"YZX":this._x=u*h*m+c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m-u*g*_;break;case"XZY":this._x=u*h*m-c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m+u*g*_;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yh=new z,Vd=new Ni,ve=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],g=n[5],_=n[8],T=s[0],p=s[3],d=s[6],D=s[1],N=s[4],E=s[7],b=s[2],I=s[5],B=s[8];return r[0]=a*T+o*D+l*b,r[3]=a*p+o*N+l*I,r[6]=a*d+o*E+l*B,r[1]=c*T+h*D+m*b,r[4]=c*p+h*N+m*I,r[7]=c*d+h*E+m*B,r[2]=u*T+g*D+_*b,r[5]=u*p+g*N+_*I,r[8]=u*d+g*E+_*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,u=o*l-h*r,g=c*r-a*l,_=e*m+n*u+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return t[0]=m*T,t[1]=(s*c-h*n)*T,t[2]=(o*n-s*a)*T,t[3]=u*T,t[4]=(h*e-s*l)*T,t[5]=(s*r-o*e)*T,t[6]=g*T,t[7]=(n*l-c*e)*T,t[8]=(a*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sh=new ve,Hd=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function og(){let i={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ke&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ke&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sa]:{primaries:t,whitePoint:n,transfer:Ma,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),i}var Re=og();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,_l=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hr===void 0&&(hr=ba("canvas")),hr.width=t.width,hr.height=t.height;let s=hr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ba("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lg=0,Pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mh(s[a].image)):r.push(Mh(s[a]))}else r=Mh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Mh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}var cg=0,bh=new z,Zn=class i extends Di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=Tn,a=Ss,o=fi,l=jn,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Pi(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=xu;Zn.DEFAULT_ANISOTROPY=1;var Ve=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],u=l[1],g=l[5],_=l[9],T=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-T)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+T)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(c+1)/2,E=(g+1)/2,b=(d+1)/2,I=(h+u)/4,B=(m+T)/4,M=(_+p)/4;return N>E&&N>b?N<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(N),s=I/n,r=B/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=B/r,s=M/r),this.set(n,s,r,e),this}let D=Math.sqrt((p-_)*(p-_)+(m-T)*(m-T)+(u-h)*(u-h));return Math.abs(D)<.001&&(D=1),this.x=(p-_)/D,this.y=(m-T)/D,this.z=(u-h)/D,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Zn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ea=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,u,g,_,T,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,u,g,_,T,p)}set(t,e,n,s,r,a,o,l,c,h,m,u,g,_,T,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=m,d[14]=u,d[3]=g,d[7]=_,d[11]=T,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ur.setFromMatrixColumn(t,0).length(),r=1/ur.setFromMatrixColumn(t,1).length(),a=1/ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,g=a*m,_=o*h,T=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=g+_*c,e[5]=u-T*c,e[9]=-o*l,e[2]=T-u*c,e[6]=_+g*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,g=l*m,_=c*h,T=c*m;e[0]=u+T*o,e[4]=_*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=g*o-_,e[6]=T+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,g=l*m,_=c*h,T=c*m;e[0]=u-T*o,e[4]=-a*m,e[8]=_+g*o,e[1]=g+_*o,e[5]=a*h,e[9]=T-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,g=a*m,_=o*h,T=o*m;e[0]=l*h,e[4]=_*c-g,e[8]=u*c+T,e[1]=l*m,e[5]=T*c+u,e[9]=g*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,g=a*c,_=o*l,T=o*c;e[0]=l*h,e[4]=T-u*m,e[8]=_*m+g,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*m+_,e[10]=u-T*m}else if(t.order==="XZY"){let u=a*l,g=a*c,_=o*l,T=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=u*m+T,e[5]=a*h,e[9]=g*m-_,e[2]=_*m-g,e[6]=o*h,e[10]=T*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hg,t,ug)}lookAt(t,e,n){let s=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ls.crossVectors(n,ti),ls.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ls.crossVectors(n,ti)),ls.normalize(),Lo.crossVectors(ti,ls),s[0]=ls.x,s[4]=Lo.x,s[8]=ti.x,s[1]=ls.y,s[5]=Lo.y,s[9]=ti.y,s[2]=ls.z,s[6]=Lo.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],g=n[13],_=n[2],T=n[6],p=n[10],d=n[14],D=n[3],N=n[7],E=n[11],b=n[15],I=s[0],B=s[4],M=s[8],P=s[12],U=s[1],G=s[5],J=s[9],et=s[13],$=s[2],Y=s[6],st=s[10],rt=s[14],St=s[3],ot=s[7],gt=s[11],_t=s[15];return r[0]=a*I+o*U+l*$+c*St,r[4]=a*B+o*G+l*Y+c*ot,r[8]=a*M+o*J+l*st+c*gt,r[12]=a*P+o*et+l*rt+c*_t,r[1]=h*I+m*U+u*$+g*St,r[5]=h*B+m*G+u*Y+g*ot,r[9]=h*M+m*J+u*st+g*gt,r[13]=h*P+m*et+u*rt+g*_t,r[2]=_*I+T*U+p*$+d*St,r[6]=_*B+T*G+p*Y+d*ot,r[10]=_*M+T*J+p*st+d*gt,r[14]=_*P+T*et+p*rt+d*_t,r[3]=D*I+N*U+E*$+b*St,r[7]=D*B+N*G+E*Y+b*ot,r[11]=D*M+N*J+E*st+b*gt,r[15]=D*P+N*et+E*rt+b*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],u=t[10],g=t[14],_=t[3],T=t[7],p=t[11],d=t[15],D=l*g-c*u,N=o*g-c*m,E=o*u-l*m,b=a*g-c*h,I=a*u-l*h,B=a*m-o*h;return e*(T*D-p*N+d*E)-n*(_*D-p*b+d*I)+s*(_*N-T*b+d*B)-r*(_*E-T*I+p*B)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],u=t[10],g=t[11],_=t[12],T=t[13],p=t[14],d=t[15],D=e*o-n*a,N=e*l-s*a,E=e*c-r*a,b=n*l-s*o,I=n*c-r*o,B=s*c-r*l,M=h*T-m*_,P=h*p-u*_,U=h*d-g*_,G=m*p-u*T,J=m*d-g*T,et=u*d-g*p,$=D*et-N*J+E*G+b*U-I*P+B*M;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/$;return t[0]=(o*et-l*J+c*G)*Y,t[1]=(s*J-n*et-r*G)*Y,t[2]=(T*B-p*I+d*b)*Y,t[3]=(u*I-m*B-g*b)*Y,t[4]=(l*U-a*et-c*P)*Y,t[5]=(e*et-s*U+r*P)*Y,t[6]=(p*E-_*B-d*N)*Y,t[7]=(h*B-u*E+g*N)*Y,t[8]=(a*J-o*U+c*M)*Y,t[9]=(n*U-e*J-r*M)*Y,t[10]=(_*I-T*E+d*D)*Y,t[11]=(m*E-h*I-g*D)*Y,t[12]=(o*P-a*G-l*M)*Y,t[13]=(e*G-n*P+s*M)*Y,t[14]=(T*N-_*b-p*D)*Y,t[15]=(h*b-m*N+u*D)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,u=r*c,g=r*h,_=r*m,T=a*h,p=a*m,d=o*m,D=l*c,N=l*h,E=l*m,b=n.x,I=n.y,B=n.z;return s[0]=(1-(T+d))*b,s[1]=(g+E)*b,s[2]=(_-N)*b,s[3]=0,s[4]=(g-E)*I,s[5]=(1-(u+d))*I,s[6]=(p+D)*I,s[7]=0,s[8]=(_+N)*B,s[9]=(p-D)*B,s[10]=(1-(u+T))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),l=ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gi.copy(this);let c=1/a,h=1/o,m=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=m,gi.elements[9]*=m,gi.elements[10]*=m,e.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Si,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),g=(n+s)/(n-s),_,T;if(l)_=r/(a-r),T=a*r/(a-r);else if(o===Si)_=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===Cr)_=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Si,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),g=-(n+s)/(n-s),_,T;if(l)_=1/(a-r),T=a/(a-r);else if(o===Si)_=-2/(a-r),T=-(a+r)/(a-r);else if(o===Cr)_=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ur=new z,gi=new Ue,hg=new z(0,0,0),ug=new z(1,1,1),ls=new z,Lo=new z,ti=new z,Wd=new Ue,$d=new Ni,ns=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $d.setFromEuler(this),this.setFromQuaternion($d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dg=0,Xd=new z,dr=new Ni,Ji=new Ue,Do=new z,la=new z,fg=new z,pg=new Ni,qd=new z(1,0,0),Yd=new z(0,1,0),Zd=new z(0,0,1),Jd={type:"added"},mg={type:"removed"},fr={type:"childadded",child:null},wh={type:"childremoved",child:null},vn=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new ns,n=new Ni,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ve}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(qd,t)}rotateY(t){return this.rotateOnAxis(Yd,t)}rotateZ(t){return this.rotateOnAxis(Zd,t)}translateOnAxis(t,e){return Xd.copy(t).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qd,t)}translateY(t){return this.translateOnAxis(Yd,t)}translateZ(t){return this.translateOnAxis(Zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(la,Do,this.up):Ji.lookAt(Do,la,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ji),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jd),fr.child=t,this.dispatchEvent(fr),fr.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mg),wh.child=t,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jd),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,t,fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,pg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),g=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let T of t.hand.values()){let p=e.getJointPose(T,n),d=this._getHandJoint(c,T);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),g=.02,_=.005;c.inputState.pinching&&u>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},No={h:0,s:0,l:0};function Eh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=Au(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Eh(a,r,t+1/3),this.g=Eh(a,r,t),this.b=Eh(a,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=ni){function n(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){let n=op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Re.workingToColorSpace(Un.copy(this),t),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(Un.copy(this),e);let n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ni){Re.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,s=Un.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(No);let n=_a(cs.h,No.h,e),s=_a(cs.s,No.s,e),r=_a(cs.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new ue;ue.NAMES=op;var Ta=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_i=new z,Ki=new z,Th=new z,ji=new z,pr=new z,mr=new z,Kd=new z,Ah=new z,Ch=new z,Rh=new z,Ih=new Ve,Ph=new Ve,Lh=new Ve,fs=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_i.subVectors(t,e),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_i.subVectors(s,e),Ki.subVectors(n,e),Th.subVectors(t,e);let a=_i.dot(_i),o=_i.dot(Ki),l=_i.dot(Th),c=Ki.dot(Ki),h=Ki.dot(Th),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,g=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ih.setScalar(0),Ph.setScalar(0),Lh.setScalar(0),Ih.fromBufferAttribute(t,e),Ph.fromBufferAttribute(t,n),Lh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ih,r.x),a.addScaledVector(Ph,r.y),a.addScaledVector(Lh,r.z),a}static isFrontFacing(t,e,n,s){return _i.subVectors(n,e),Ki.subVectors(t,e),_i.cross(Ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;pr.subVectors(s,n),mr.subVectors(r,n),Ah.subVectors(t,n);let l=pr.dot(Ah),c=mr.dot(Ah);if(l<=0&&c<=0)return e.copy(n);Ch.subVectors(t,s);let h=pr.dot(Ch),m=mr.dot(Ch);if(h>=0&&m<=h)return e.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(pr,a);Rh.subVectors(t,r);let g=pr.dot(Rh),_=mr.dot(Rh);if(_>=0&&g<=_)return e.copy(r);let T=g*c-l*_;if(T<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(mr,o);let p=h*_-g*m;if(p<=0&&m-h>=0&&g-_>=0)return Kd.subVectors(r,s),o=(m-h)/(m-h+(g-_)),e.copy(s).addScaledVector(Kd,o);let d=1/(p+T+u);return a=T*d,o=u*d,e.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),Fo.subVectors(this.max,ca),gr.subVectors(t.a,ca),_r.subVectors(t.b,ca),xr.subVectors(t.c,ca),hs.subVectors(_r,gr),us.subVectors(xr,_r),Ns.subVectors(gr,xr);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ns.z,Ns.y,hs.z,0,-hs.x,us.z,0,-us.x,Ns.z,0,-Ns.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ns.y,Ns.x,0];return!Dh(e,gr,_r,xr,Fo)||(e=[1,0,0,0,1,0,0,0,1],!Dh(e,gr,_r,xr,Fo))?!1:(Oo.crossVectors(hs,us),e=[Oo.x,Oo.y,Oo.z],Dh(e,gr,_r,xr,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qi=[new z,new z,new z,new z,new z,new z,new z,new z],xi=new z,Uo=new Vn,gr=new z,_r=new z,xr=new z,hs=new z,us=new z,Ns=new z,ca=new z,Fo=new z,Oo=new z,Us=new z;function Dh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=t.dot(Us),c=e.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var un=new z,Bo=new Lt,_g=0,$e=class extends Di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_g++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Aa=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},xg=new Vn,ha=new z,Nh=new z,Kn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);let e=ha.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(Nh)),this.expandByPoint(ha.copy(t.center).sub(Nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vg=0,ui=new Ue,Uh=new vn,vr=new z,ei=new Vn,ua=new Vn,_n=new z,rn=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gm(t)?Ca:Aa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(ei.min,ua.min),ei.expandByPoint(_n),_n.addVectors(ei.max,ua.max),ei.expandByPoint(_n)):(ei.expandByPoint(ua.min),ei.expandByPoint(ua.max))}ei.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_n.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_n));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(vr.fromBufferAttribute(t,c),_n.add(vr)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new z,l[M]=new z;let c=new z,h=new z,m=new z,u=new Lt,g=new Lt,_=new Lt,T=new z,p=new z;function d(M,P,U){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,P),m.fromBufferAttribute(n,U),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,U),h.sub(c),m.sub(c),g.sub(u),_.sub(u);let G=1/(g.x*_.y-_.x*g.y);isFinite(G)&&(T.copy(h).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar(G),p.copy(m).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(G),o[M].add(T),o[P].add(T),o[U].add(T),l[M].add(p),l[P].add(p),l[U].add(p))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let M=0,P=D.length;M<P;++M){let U=D[M],G=U.start,J=U.count;for(let et=G,$=G+J;et<$;et+=3)d(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let N=new z,E=new z,b=new z,I=new z;function B(M){b.fromBufferAttribute(s,M),I.copy(b);let P=o[M];N.copy(P),N.sub(b.multiplyScalar(b.dot(P))).normalize(),E.crossVectors(I,P);let G=E.dot(l[M])<0?-1:1;a.setXYZW(M,N.x,N.y,N.z,G)}for(let M=0,P=D.length;M<P;++M){let U=D[M],G=U.start,J=U.count;for(let et=G,$=G+J;et<$;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,m=new z;if(t)for(let u=0,g=t.count;u<g;u+=3){let _=t.getX(u+0),T=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,p),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,g=e.count;u<g;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),g=0,_=0;for(let T=0,p=l.length;T<p;T++){o.isInterleavedBufferAttribute?g=l[T]*o.data.stride+o.offset:g=l[T]*h;for(let d=0;d<h;d++)u[_++]=c[g++]}return new $e(u,h,m)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],g=t(u,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let g=c[m];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,g=m.length;u<g;u++)h.push(m[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},yl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},kn=new z,bi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fh=new z,yg=new z,Sg=new ve,vi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fh.subVectors(n,e).cross(yg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sg.getNormalMatrix(t),s=this.coplanarPoint(Fh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mg=0,Ui=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Vr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=hu,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ts=new z,Oh=new z,zo=new z,ko=new z,ks=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oh.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),ko.copy(this.origin).sub(Oh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zo),o=ko.dot(this.direction),l=-ko.dot(zo),c=ko.lengthSq(),h=Math.abs(1-a*a),m,u,g,_;if(h>0)if(m=a*l-o,u=a*o-l,_=r*h,m>=0)if(u>=-_)if(u<=_){let T=1/h;m*=T,u*=T,g=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),g=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Oh).addScaledVector(zo,u),g}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,g=t.z-a.z,_=e.x-a.x,T=e.y-a.y,p=e.z-a.z,d=n.x-a.x,D=n.y-a.y,N=n.z-a.z,E=Math.abs(l),b=Math.abs(c),I=Math.abs(h),B,M,P,U,G,J,et,$,Y,st,rt,St;if(E>=b&&E>=I?(P=l,J=m,Y=_,St=d,l>=0?(B=c,M=h,U=u,G=g,et=T,$=p,st=D,rt=N):(B=h,M=c,U=g,G=u,et=p,$=T,st=N,rt=D)):b>=I?(P=c,J=u,Y=T,St=D,c>=0?(B=h,M=l,U=g,G=m,et=p,$=_,st=N,rt=d):(B=l,M=h,U=m,G=g,et=_,$=p,st=d,rt=N)):(P=h,J=g,Y=p,St=N,h>=0?(B=l,M=c,U=m,G=u,et=_,$=T,st=d,rt=D):(B=c,M=l,U=u,G=m,et=T,$=_,st=D,rt=d)),P===0)return null;let ot=B/P,gt=M/P,_t=1/P,Vt=U-ot*J,Ht=G-gt*J,Ne=et-ot*Y,Me=$-gt*Y,Ae=st-ot*St,ht=rt-gt*St,mt=Ae*Me-ht*Ne,Et=Vt*ht-Ht*Ae,te=Ne*Ht-Me*Vt;if(s){if(mt<0||Et<0||te<0)return null}else if((mt<0||Et<0||te<0)&&(mt>0||Et>0||te>0))return null;let zt=mt+Et+te;if(zt===0)return null;let le=_t*(mt*J+Et*Y+te*St);return(zt>0?le<0:le>0)?null:this.at(le/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vs=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jd=new Ue,Fs=new ks,Vo=new Kn,Qd=new z,Ho=new z,Go=new z,Wo=new z,Bh=new z,$o=new z,tf=new z,Xo=new z,yn=class extends vn{constructor(t=new rn,e=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Bh.fromBufferAttribute(m,t),a?$o.addScaledVector(Bh,h):$o.addScaledVector(Bh.sub(e),h))}e.add($o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Vo.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Vo,Qd)===null||Fs.origin.distanceToSquared(Qd)>(t.far-t.near)**2))&&(jd.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(jd),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,T=u.length;_<T;_++){let p=u[_],d=a[p.materialIndex],D=Math.max(p.start,g.start),N=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=D,b=N;E<b;E+=3){let I=o.getX(E),B=o.getX(E+1),M=o.getX(E+2);s=qo(this,d,t,n,c,h,m,I,B,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let p=_,d=T;p<d;p+=3){let D=o.getX(p),N=o.getX(p+1),E=o.getX(p+2);s=qo(this,a,t,n,c,h,m,D,N,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,T=u.length;_<T;_++){let p=u[_],d=a[p.materialIndex],D=Math.max(p.start,g.start),N=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=D,b=N;E<b;E+=3){let I=E,B=E+1,M=E+2;s=qo(this,d,t,n,c,h,m,I,B,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let p=_,d=T;p<d;p+=3){let D=p,N=p+1,E=p+2;s=qo(this,a,t,n,c,h,m,D,N,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function bg(i,t,e,n,s,r,a,o){let l;if(t.side===Hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vs,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xo);return c<e.near||c>e.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ho),i.getVertexPosition(l,Go),i.getVertexPosition(c,Wo);let h=bg(i,t,e,n,Ho,Go,Wo,tf);if(h){let m=new z;fs.getBarycoord(tf,Ho,Go,Wo,m),s&&(h.uv=fs.getInterpolatedAttribute(s,o,l,c,m,new Lt)),r&&(h.uv1=fs.getInterpolatedAttribute(r,o,l,c,m,new Lt)),a&&(h.normal=fs.getInterpolatedAttribute(a,o,l,c,m,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};fs.getNormal(Ho,Go,Wo,u.normal),h.face=u,h.barycoord=m}return h}var Ra=class extends Zn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=xn,h=xn,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ia=class extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yr=new Ue,ef=new Ue,Yo=[],nf=new Vn,wg=new Ue,da=new yn,fa=new Kn,Pa=class extends yn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),nf.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(nf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),fa.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(fa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),t.ray.intersectsSphere(fa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),ef.multiplyMatrices(n,yr),da.matrixWorld=ef,da.raycast(t,Yo);for(let a=0,o=Yo.length;a<o;a++){let l=Yo[a];l.instanceId=r,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ra(new Float32Array(s*this.count),s,this.count,ec,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Os=new Kn,Eg=new Lt(.5,.5),Zo=new z,Nr=class{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],g=r[7],_=r[8],T=r[9],p=r[10],d=r[11],D=r[12],N=r[13],E=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,d-_,b-D).normalize(),s[1].setComponents(c+a,g+h,d+_,b+D).normalize(),s[2].setComponents(c+o,g+m,d+T,b+N).normalize(),s[3].setComponents(c-o,g-m,d-T,b-N).normalize(),n)s[4].setComponents(l,u,p,E).normalize(),s[5].setComponents(c-l,g-u,d-p,b-E).normalize();else if(s[4].setComponents(c-l,g-u,d-p,b-E).normalize(),e===Si)s[5].setComponents(c+l,g+u,d+p,b+E).normalize();else if(e===Cr)s[5].setComponents(l,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=Eg.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zo.x=s.normal.x>0?t.max.x:t.min.x,Zo.y=s.normal.y>0?t.max.y:t.min.y,Zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sl=new z,Ml=new z,sf=new Ue,pa=new ks,Jo=new Kn,zh=new z,rf=new z,bl=class extends vn{constructor(t=new rn,e=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sl.fromBufferAttribute(e,s-1),Ml.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sl.distanceTo(Ml);t.setAttribute("lineDistance",new sn(n,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;sf.copy(s).invert(),pa.copy(t.ray).applyMatrix4(sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let T=g,p=_-1;T<p;T+=c){let d=h.getX(T),D=h.getX(T+1),N=Ko(this,t,pa,l,d,D,T);N&&e.push(N)}if(this.isLineLoop){let T=h.getX(_-1),p=h.getX(g),d=Ko(this,t,pa,l,T,p,_-1);d&&e.push(d)}}else{let g=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let T=g,p=_-1;T<p;T+=c){let d=Ko(this,t,pa,l,T,T+1,T);d&&e.push(d)}if(this.isLineLoop){let T=Ko(this,t,pa,l,_-1,g,_-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ko(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Sl.fromBufferAttribute(o,s),Ml.fromBufferAttribute(o,r),e.distanceSqToSegment(Sl,Ml,zh,rf)>n)return;zh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zh);if(!(c<t.near||c>t.far))return{distance:c,point:rf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var La=class extends bl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},wl=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},af=new Ue,Jh=new ks,jo=new Kn,Qo=new z,Gs=class extends vn{constructor(t=new rn,e=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,t.ray.intersectsSphere(jo)===!1)return;af.copy(s).invert(),Jh.copy(t.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=u,T=g;_<T;_++){let p=c.getX(_);Qo.fromBufferAttribute(m,p),of(Qo,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let _=u,T=g;_<T;_++)Qo.fromBufferAttribute(m,_),of(Qo,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function of(i,t,e,n,s,r,a){let o=Jh.distanceSqToPoint(i);if(o<e){let l=new z;Jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends Zn{constructor(t=[],e=ys,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ps=class extends Zn{constructor(t,e,n=Ei,s,r,a,o=xn,l=xn,c,h=Li,m=1){if(h!==Li&&h!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},El=class extends ps{constructor(t,e=Ei,n=ys,s,r,a=xn,o=xn,l,c=Li){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Na=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ur=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,g=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(m,2));function _(T,p,d,D,N,E,b,I,B,M,P){let U=E/B,G=b/M,J=E/2,et=b/2,$=I/2,Y=B+1,st=M+1,rt=0,St=0,ot=new z;for(let gt=0;gt<st;gt++){let _t=gt*G-et;for(let Vt=0;Vt<Y;Vt++){let Ht=Vt*U-J;ot[T]=Ht*D,ot[p]=_t*N,ot[d]=$,c.push(ot.x,ot.y,ot.z),ot[T]=0,ot[p]=0,ot[d]=I>0?1:-1,h.push(ot.x,ot.y,ot.z),m.push(Vt/B),m.push(1-gt/M),rt+=1}}for(let gt=0;gt<M;gt++)for(let _t=0;_t<B;_t++){let Vt=u+_t+Y*gt,Ht=u+_t+Y*(gt+1),Ne=u+(_t+1)+Y*(gt+1),Me=u+(_t+1)+Y*gt;l.push(Vt,Ht,Me),l.push(Ht,Ne,Me),St+=6}o.addGroup(g,St,P),g+=St,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ua=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],g=[],_=0,T=[],p=n/2,d=0;D(),a===!1&&(t>0&&N(!0),e>0&&N(!1)),this.setIndex(h),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(g,2));function D(){let E=new z,b=new z,I=0,B=(e-t)/n;for(let M=0;M<=r;M++){let P=[],U=M/r,G=U*(e-t)+t;for(let J=0;J<=s;J++){let et=J/s,$=et*l+o,Y=Math.sin($),st=Math.cos($);b.x=G*Y,b.y=-U*n+p,b.z=G*st,m.push(b.x,b.y,b.z),E.set(Y,B,st).normalize(),u.push(E.x,E.y,E.z),g.push(et,1-U),P.push(_++)}T.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){let U=T[P][M],G=T[P+1][M],J=T[P+1][M+1],et=T[P][M+1];(t>0||P!==0)&&(h.push(U,G,et),I+=3),(e>0||P!==r-1)&&(h.push(G,J,et),I+=3)}c.addGroup(d,I,0),d+=I}function N(E){let b=_,I=new Lt,B=new z,M=0,P=E===!0?t:e,U=E===!0?1:-1;for(let J=1;J<=s;J++)m.push(0,p*U,0),u.push(0,U,0),g.push(.5,.5),_++;let G=_;for(let J=0;J<=s;J++){let $=J/s*l+o,Y=Math.cos($),st=Math.sin($);B.x=P*st,B.y=p*U,B.z=P*Y,m.push(B.x,B.y,B.z),u.push(0,U,0),I.x=Y*.5+.5,I.y=st*.5*U+.5,g.push(I.x,I.y),_++}for(let J=0;J<s;J++){let et=b+J,$=G+J;E===!0?h.push($,$+1,et):h.push($+1,$,et),M+=3}c.addGroup(d,M,E===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,g=(a-h)/u;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new Ue;for(let g=0;g<=t;g++){let _=g/t;s[g]=this.getTangentAt(_,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Se(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,_))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Se(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fr=class extends ii{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),u=l-this.aX,g=c-this.aY;l=u*h-g*m+this.aX,c=u*m+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Tl=class extends Fr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ru(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+m)+(l-o)/m;u*=h,g*=h,s(a,o,u,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lf=new z,cf=new z,kh=new Ru,Vh=new Ru,Hh=new Ru,Al=class extends ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(cf.subVectors(s[0],s[1]).add(s[0]),c=cf);let m=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lf),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(m),g),T=Math.pow(m.distanceToSquared(u),g),p=Math.pow(u.distanceToSquared(h),g);T<1e-4&&(T=1),_<1e-4&&(_=T),p<1e-4&&(p=T),kh.initNonuniformCatmullRom(c.x,m.x,u.x,h.x,_,T,p),Vh.initNonuniformCatmullRom(c.y,m.y,u.y,h.y,_,T,p),Hh.initNonuniformCatmullRom(c.z,m.z,u.z,h.z,_,T,p)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(c.x,m.x,u.x,h.x,this.tension),Vh.initCatmullRom(c.y,m.y,u.y,h.y,this.tension),Hh.initCatmullRom(c.z,m.z,u.z,h.z,this.tension));return n.set(kh.calc(l),Vh.calc(l),Hh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Tg(i,t){let e=1-i;return e*e*t}function Ag(i,t){return 2*(1-i)*i*t}function Cg(i,t){return i*i*t}function xa(i,t,e,n){return Tg(i,t)+Ag(i,e)+Cg(i,n)}function Rg(i,t){let e=1-i;return e*e*e*t}function Ig(i,t){let e=1-i;return 3*e*e*i*t}function Pg(i,t){return 3*(1-i)*i*i*t}function Lg(i,t){return i*i*i*t}function va(i,t,e,n,s){return Rg(i,t)+Ig(i,e)+Pg(i,n)+Lg(i,s)}var Fa=class extends ii{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(t,s.x,r.x,a.x,o.x),va(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cl=class extends ii{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(t,s.x,r.x,a.x,o.x),va(t,s.y,r.y,a.y,o.y),va(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oa=class extends ii{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rl=class extends ii{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends ii{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xa(t,s.x,r.x,a.x),xa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends ii{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xa(t,s.x,r.x,a.x),xa(t,s.y,r.y,a.y),xa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(hf(o,l.x,c.x,h.x,m.x),hf(o,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},Kh=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:Al,CubicBezierCurve:Fa,CubicBezierCurve3:Cl,EllipseCurve:Fr,LineCurve:Oa,LineCurve3:Rl,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:Il,SplineCurve:za}),Pl=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Kh[s.type]().fromJSON(s))}return this}},Ws=class extends Pl{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Oa(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ba(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Fa(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new za(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Fr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Or=class extends Ws{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}};function Dg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Bg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,m=l;for(let u=e;u<s;u+=e){let g=i[u],_=i[u+1];g<o&&(o=g),_<l&&(l=_),g>h&&(h=g),_>m&&(m=_)}c=Math.max(h-o,m-l),c=c!==0?32767/c:0}return ka(r,a,e,o,l,c,0),a}function lp(i,t,e,n,s){let r;if(s===Zg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=uf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=uf(a/n|0,i[a],i[a+1],r);return r&&Br(r,r.next)&&(Ha(r),r=r.next),r}function $s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Br(e,e.next)||Qe(e.prev,e,e.next)===0)){if(Ha(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ka(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ug(i,n,s,r):Ng(i)){t.push(l.i,i.i,c.i),Ha(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fg($s(i),t),ka(i,t,e,n,s,r,2)):a===2&&Og(i,t,e,n,s,r):ka($s(i),t,e,n,s,r,1);break}}}function Ng(i){let t=i.prev,e=i,n=i.next;if(Qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),m=Math.min(o,l,c),u=Math.max(s,r,a),g=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=m&&_.y<=g&&ma(s,o,r,l,a,c,_.x,_.y)&&Qe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ug(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Qe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,u=a.y,g=Math.min(o,l,c),_=Math.min(h,m,u),T=Math.max(o,l,c),p=Math.max(h,m,u),d=jh(g,_,t,e,n),D=jh(T,p,t,e,n),N=i.prevZ,E=i.nextZ;for(;N&&N.z>=d&&E&&E.z<=D;){if(N.x>=g&&N.x<=T&&N.y>=_&&N.y<=p&&N!==s&&N!==a&&ma(o,h,l,m,c,u,N.x,N.y)&&Qe(N.prev,N,N.next)>=0||(N=N.prevZ,E.x>=g&&E.x<=T&&E.y>=_&&E.y<=p&&E!==s&&E!==a&&ma(o,h,l,m,c,u,E.x,E.y)&&Qe(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;N&&N.z>=d;){if(N.x>=g&&N.x<=T&&N.y>=_&&N.y<=p&&N!==s&&N!==a&&ma(o,h,l,m,c,u,N.x,N.y)&&Qe(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;E&&E.z<=D;){if(E.x>=g&&E.x<=T&&E.y>=_&&E.y<=p&&E!==s&&E!==a&&ma(o,h,l,m,c,u,E.x,E.y)&&Qe(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Fg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Br(n,s)&&hp(n,e,e.next,s)&&Va(n,s)&&Va(s,n)&&(t.push(n.i,e.i,s.i),Ha(e),Ha(e.next),e=i=s),e=e.next}while(e!==i);return $s(e)}function Og(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xg(a,o)){let l=up(a,o);a=$s(a,a.next),l=$s(l,l.next),ka(a,t,e,n,s,r,0),ka(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Bg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($g(c))}s.sort(zg);for(let r=0;r<s.length;r++)e=kg(s[r],e);return e}function zg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function kg(i,t){let e=Vg(i,t);if(!e)return t;let n=up(e,i);return $s(n,n.next),$s(e,e.next)}function Vg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Br(i,e))return e;do{if(Br(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);Va(e,i)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&Hg(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function Hg(i,t){return Qe(i.prev,i,t.prev)<0&&Qe(t.next,i,i.next)<0}function Gg(i,t,e,n){let s=i;do s.z===0&&(s.z=jh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wg(s)}function Wg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function jh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $g(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ma(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cp(i,t,e,n,s,r,a,o)}function Xg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qg(i,t)&&(Va(i,t)&&Va(t,i)&&Yg(i,t)&&(Qe(i.prev,i,t.prev)||Qe(i,t.prev,t))||Br(i,t)&&Qe(i.prev,i,i.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Br(i,t){return i.x===t.x&&i.y===t.y}function hp(i,t,e,n){let s=el(Qe(i,t,e)),r=el(Qe(i,t,n)),a=el(Qe(e,n,i)),o=el(Qe(e,n,t));return!!(s!==r&&a!==o||s===0&&tl(i,e,t)||r===0&&tl(i,n,t)||a===0&&tl(e,i,n)||o===0&&tl(e,t,n))}function tl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function el(i){return i>0?1:i<0?-1:0}function qg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Va(i,t){return Qe(i.prev,i,i.next)<0?Qe(i,t,i.next)>=0&&Qe(i,i.prev,t)>=0:Qe(i,t,i.prev)<0||Qe(i,i.next,t)<0}function Yg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function up(i,t){let e=Qh(i.i,i.x,i.y),n=Qh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uf(i,t,e,n){let s=Qh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var tu=class{static triangulate(t,e,n=2){return Dg(t,e,n)}},Bs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];df(t),ff(n,t);let a=t.length;e.forEach(df);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ff(n,e[l]);let o=tu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function df(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ff(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ga=class i extends rn{constructor(t=new Or([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new sn(s,3)),this.setAttribute("uv",new sn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,D=e.UVGenerator!==void 0?e.UVGenerator:Jg,N,E=!1,b,I,B,M;if(d){N=d.getSpacedPoints(h),E=!0,u=!1;let it=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(h,it),I=new z,B=new z,M=new z}u||(p=0,g=0,_=0,T=0);let P=o.extractPoints(c),U=P.shape,G=P.holes;if(!Bs.isClockWise(U)){U=U.reverse();for(let it=0,bt=G.length;it<bt;it++){let H=G[it];Bs.isClockWise(H)&&(G[it]=H.reverse())}}function et(it){let H=10000000000000001e-36,wt=it[0];for(let It=1;It<=it.length;It++){let ne=It%it.length,Xt=it[ne],se=Xt.x-wt.x,ie=Xt.y-wt.y,k=se*se+ie*ie,Ie=Math.max(Math.abs(Xt.x),Math.abs(Xt.y),Math.abs(wt.x),Math.abs(wt.y)),Yt=H*Ie*Ie;if(k<=Yt){it.splice(ne,1),It--;continue}wt=Xt}}et(U),G.forEach(et);let $=G.length,Y=U;for(let it=0;it<$;it++){let bt=G[it];U=U.concat(bt)}function st(it,bt,H){return bt||fe("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(bt,H)}let rt=U.length;function St(it,bt,H){let wt,It,ne,Xt=it.x-bt.x,se=it.y-bt.y,ie=H.x-it.x,k=H.y-it.y,Ie=Xt*Xt+se*se,Yt=Xt*k-se*ie;if(Math.abs(Yt)>Number.EPSILON){let R=Math.sqrt(Ie),x=Math.sqrt(ie*ie+k*k),Z=bt.x-se/R,nt=bt.y+Xt/R,at=H.x-k/x,Tt=H.y+ie/x,Rt=((at-Z)*k-(Tt-nt)*ie)/(Xt*k-se*ie);wt=Z+Xt*Rt-it.x,It=nt+se*Rt-it.y;let ct=wt*wt+It*It;if(ct<=2)return new Lt(wt,It);ne=Math.sqrt(ct/2)}else{let R=!1;Xt>Number.EPSILON?ie>Number.EPSILON&&(R=!0):Xt<-Number.EPSILON?ie<-Number.EPSILON&&(R=!0):Math.sign(se)===Math.sign(k)&&(R=!0),R?(wt=-se,It=Xt,ne=Math.sqrt(Ie)):(wt=Xt,It=se,ne=Math.sqrt(Ie/2))}return new Lt(wt/ne,It/ne)}let ot=[];for(let it=0,bt=Y.length,H=bt-1,wt=it+1;it<bt;it++,H++,wt++)H===bt&&(H=0),wt===bt&&(wt=0),ot[it]=St(Y[it],Y[H],Y[wt]);let gt=[],_t,Vt=ot.concat();for(let it=0,bt=$;it<bt;it++){let H=G[it];_t=[];for(let wt=0,It=H.length,ne=It-1,Xt=wt+1;wt<It;wt++,ne++,Xt++)ne===It&&(ne=0),Xt===It&&(Xt=0),_t[wt]=St(H[wt],H[ne],H[Xt]);gt.push(_t),Vt=Vt.concat(_t)}let Ht;if(p===0)Ht=Bs.triangulateShape(Y,G);else{let it=[],bt=[];for(let H=0;H<p;H++){let wt=H/p,It=g*Math.cos(wt*Math.PI/2),ne=_*Math.sin(wt*Math.PI/2)+T;for(let Xt=0,se=Y.length;Xt<se;Xt++){let ie=st(Y[Xt],ot[Xt],ne);Et(ie.x,ie.y,-It),wt===0&&it.push(ie)}for(let Xt=0,se=$;Xt<se;Xt++){let ie=G[Xt];_t=gt[Xt];let k=[];for(let Ie=0,Yt=ie.length;Ie<Yt;Ie++){let R=st(ie[Ie],_t[Ie],ne);Et(R.x,R.y,-It),wt===0&&k.push(R)}wt===0&&bt.push(k)}}Ht=Bs.triangulateShape(it,bt)}let Ne=Ht.length,Me=_+T;for(let it=0;it<rt;it++){let bt=u?st(U[it],Vt[it],Me):U[it];E?(B.copy(b.normals[0]).multiplyScalar(bt.x),I.copy(b.binormals[0]).multiplyScalar(bt.y),M.copy(N[0]).add(B).add(I),Et(M.x,M.y,M.z)):Et(bt.x,bt.y,0)}for(let it=1;it<=h;it++)for(let bt=0;bt<rt;bt++){let H=u?st(U[bt],Vt[bt],Me):U[bt];E?(B.copy(b.normals[it]).multiplyScalar(H.x),I.copy(b.binormals[it]).multiplyScalar(H.y),M.copy(N[it]).add(B).add(I),Et(M.x,M.y,M.z)):Et(H.x,H.y,m/h*it)}for(let it=p-1;it>=0;it--){let bt=it/p,H=g*Math.cos(bt*Math.PI/2),wt=_*Math.sin(bt*Math.PI/2)+T;for(let It=0,ne=Y.length;It<ne;It++){let Xt=st(Y[It],ot[It],wt);Et(Xt.x,Xt.y,m+H)}for(let It=0,ne=G.length;It<ne;It++){let Xt=G[It];_t=gt[It];for(let se=0,ie=Xt.length;se<ie;se++){let k=st(Xt[se],_t[se],wt);E?Et(k.x,k.y+N[h-1].y,N[h-1].x+H):Et(k.x,k.y,m+H)}}}Ae(),ht();function Ae(){let it=s.length/3;if(u){let bt=0,H=rt*bt;for(let wt=0;wt<Ne;wt++){let It=Ht[wt];te(It[2]+H,It[1]+H,It[0]+H)}bt=h+p*2,H=rt*bt;for(let wt=0;wt<Ne;wt++){let It=Ht[wt];te(It[0]+H,It[1]+H,It[2]+H)}}else{for(let bt=0;bt<Ne;bt++){let H=Ht[bt];te(H[2],H[1],H[0])}for(let bt=0;bt<Ne;bt++){let H=Ht[bt];te(H[0]+rt*h,H[1]+rt*h,H[2]+rt*h)}}n.addGroup(it,s.length/3-it,0)}function ht(){let it=s.length/3,bt=0;mt(Y,bt),bt+=Y.length;for(let H=0,wt=G.length;H<wt;H++){let It=G[H];mt(It,bt),bt+=It.length}n.addGroup(it,s.length/3-it,1)}function mt(it,bt){let H=it.length;for(;--H>=0;){let wt=H,It=H-1;It<0&&(It=it.length-1);for(let ne=0,Xt=h+p*2;ne<Xt;ne++){let se=rt*ne,ie=rt*(ne+1),k=bt+wt+se,Ie=bt+It+se,Yt=bt+It+ie,R=bt+wt+ie;zt(k,Ie,Yt,R)}}}function Et(it,bt,H){l.push(it),l.push(bt),l.push(H)}function te(it,bt,H){le(it),le(bt),le(H);let wt=s.length/3,It=D.generateTopUV(n,s,wt-3,wt-2,wt-1);de(It[0]),de(It[1]),de(It[2])}function zt(it,bt,H,wt){le(it),le(bt),le(wt),le(bt),le(H),le(wt);let It=s.length/3,ne=D.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);de(ne[0]),de(ne[1]),de(ne[3]),de(ne[1]),de(ne[2]),de(ne[3])}function le(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function de(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kh[s.type]().fromJSON(s)),new i(n,t.options)}},Jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Lt(r,a),new Lt(o,l),new Lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],u=t[s*3],g=t[s*3+1],_=t[s*3+2],T=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Lt(a,1-l),new Lt(c,1-m),new Lt(u,1-_),new Lt(T,1-d)]:[new Lt(o,1-l),new Lt(h,1-m),new Lt(g,1-_),new Lt(p,1-d)]}};function Kg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wa=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,u=e/l,g=[],_=[],T=[],p=[];for(let d=0;d<h;d++){let D=d*u-a;for(let N=0;N<c;N++){let E=N*m-r;_.push(E,-D,0),T.push(0,0,1),p.push(N/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let D=0;D<o;D++){let N=D+c*d,E=D+c*(d+1),b=D+1+c*(d+1),I=D+1+c*d;g.push(N,E,I),g.push(E,b,I)}this.setIndex(g),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var $a=class extends rn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new z,r=new z;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let m=l[c],u=m.start,g=m.count;for(let _=u,T=u+g;_<T;_+=3)for(let p=0;p<3;p++){let d=o.getX(_+p),D=o.getX(_+(p+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,D),pf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,m),pf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function pf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Zs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mf(s))s.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=Zs(i[e]);for(let s in n)t[s]=n[s]}return t}function mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var co={clone:Zs,merge:On},Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ll=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Xa=class extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Dl=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nl=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Sr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ul=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,o=2*e-n;break;case Zh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:a=t,l=2*n-e;break;case Zh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),T=_*_,p=T*_,d=-u*p+2*u*T-u*_,D=(1+u)*p+(-1.5-2*u)*T+(-.5+u)*_+1,N=(-1-g)*p+(1.5+g)*T+.5*_,E=g*p-g*T;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+D*a[c+b]+N*a[l+b]+E*a[m+b];return r}},Fl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},Ol=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bl=class extends ms{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-e)/(s-e),T=1-_;for(let p=0;p!==o;++p)r[p]=a[c+p]*T+a[l+p]*_;return r}let u=o*2,g=t-1;for(let _=0;_!==o;++_){let T=a[c+_],p=a[l+_],d=g*u+_*2,D=m[d],N=m[d+1],E=t*u+_*2,b=h[E],I=h[E+1],B=n0(n,e,D,b,s);r[_]=dp(B,T,N,I,p)}return r}};function dp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function e0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function n0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=dp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=e0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var si=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Gh(t.settings)&&(n.settings={inTangents:Sr(t.settings.inTangents,Array),outTangents:Sr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Bl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break;case Xh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return he("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return rl;case this.InterpolantFactoryMethodBezier:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Gh(this.settings)&&(gf(this.settings.inTangents,t),gf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(fe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(fe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){fe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){fe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Wm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){fe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,u=m-n,g=m+n;for(let _=0;_!==n;++_){let T=e[m+_];if(T!==e[u+_]||T!==e[g+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let g=0;g!==n;++g)e[u+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=gl;var gs=class extends si{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ya;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};zl.prototype.ValueTypeName="color";var kl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};kl.prototype.ValueTypeName="number";var Vl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},qa=class extends si{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends si{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ya;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Hl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let g=c[m],_=c[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fp=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ya=class extends vn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Za=class extends Ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wh=new Ue,_f=new z,xf=new z,$l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Cr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nl=new z,il=new Ni,Ri=new z,Ja=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nl,il,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nl,il,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new z,vf=new Lt,yf=new Lt,Fn=class extends Ja{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,vf,yf),e.subVectors(yf,vf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ga*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zr=class extends Ja{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eu=class extends $l{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends Ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ja=class extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Mr=-90,br=1,Xl=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Mr,br,t,e);s.layers=this.layers,this.add(s);let r=new Fn(Mr,br,t,e);r.layers=this.layers,this.add(r);let a=new Fn(Mr,br,t,e);a.layers=this.layers,this.add(a);let o=new Fn(Mr,br,t,e);o.layers=this.layers,this.add(o);let l=new Fn(Mr,br,t,e);l.layers=this.layers,this.add(l);let c=new Fn(Mr,br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ql=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pu="\\[\\]\\.:\\/",i0=new RegExp("["+Pu+"]","g"),Lu="[^"+Pu+"]",s0="[^"+Pu.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Lu),a0=/(WCOD+)?/.source.replace("WCOD",s0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),c0=new RegExp("^"+r0+a0+o0+l0+"$"),h0=["material","materials","bones","map"],nu=class{constructor(t,e,n){let s=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){let e=c0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=nu;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ES=new Float32Array(1);var xs=class extends yl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Sf=new Ue,Xs=class{constructor(t,e,n=0,s=1/0){this.ray=new ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):fe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(t,e=!0,n=[]){return iu(t,this,n,e),n.sort(Mf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)iu(t[s],this,n,e);return n.sort(Mf),n}};function Mf(i,t){return i.distance-t.distance}function iu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)iu(r[a],t,e,!0)}}var su=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var bf=new z,sl=new z,wr=new z,Er=new z,$h=new z,u0=new z,d0=new z,Qa=class{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){bf.subVectors(t,this.start),sl.subVectors(this.end,this.start);let n=sl.dot(sl);if(n===0)return 0;let r=sl.dot(bf)/n;return e&&(r=Se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=u0,n=d0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;wr.subVectors(c,o),Er.subVectors(h,l),$h.subVectors(o,l);let m=wr.dot(wr),u=Er.dot(Er),g=Er.dot($h);if(m<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/u,a=Se(a,0,1);else{let _=wr.dot($h);if(u<=s)a=0,r=Se(-_/m,0,1);else{let T=wr.dot(Er),p=m*u-T*T;p!==0?r=Se((T*g-_*u)/p,0,1):r=0,a=(T*r+g)/u,a<0?(a=0,r=Se(-_/m,0,1)):a>1&&(a=1,r=Se((T-_)/m,0,1))}}return e.copy(o).addScaledVector(wr,r),n.copy(l).addScaledVector(Er,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Du(i,t,e,n){let s=f0(n);switch(e){case bu:return i*t;case ec:return i*t/s.components*s.byteLength;case nc:return i*t/s.components*s.byteLength;case bs:return i*t*2/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case wu:return i*t*3/s.components*s.byteLength;case fi:return i*t*4/s.components*s.byteLength;case sc:return i*t*4/s.components*s.byteLength;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(t,8)/4;case rc:case oc:return Math.max(i,8)*Math.max(t,8)/2;case cc:case hc:case dc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uc:case oo:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Ic:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lo:case Nc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(i){switch(i){case jn:case vu:return{byteLength:1,components:1};case Hr:case yu:case Ti:return{byteLength:2,components:1};case Ql:case tc:return{byteLength:2,components:4};case Ei:case jl:case di:return{byteLength:4,components:1};case Su:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Up(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function m0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((g,_)=>g.start-_.start);let u=0;for(let g=1;g<m.length;g++){let _=m[u],T=m[g];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++u,m[u]=T)}m.length=u+1;for(let g=0,_=m.length;g<_;g++){let T=m[g];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,z0=`#define PI 3.141592653589793
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
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#endif`,p_=`uniform sampler2D dfgLUT;
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
}`,m_=`
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`#ifdef USE_MORPHTARGETS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,wx=`#define DISTANCE
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,zx=`#define PHONG
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
}`,kx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Gx=`#define TOON
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
}`,Wx=`uniform float size;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 color;
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
}`,Yx=`uniform float rotation;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:g0,alphahash_pars_fragment:_0,alphamap_fragment:x0,alphamap_pars_fragment:v0,alphatest_fragment:y0,alphatest_pars_fragment:S0,aomap_fragment:M0,aomap_pars_fragment:b0,batching_pars_vertex:w0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:C0,iridescence_fragment:R0,bumpmap_pars_fragment:I0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:N0,color_fragment:U0,color_pars_fragment:F0,color_pars_vertex:O0,color_vertex:B0,common:z0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:V0,displacementmap_pars_vertex:H0,displacementmap_vertex:G0,emissivemap_fragment:W0,emissivemap_pars_fragment:$0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:J0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:l_,envmap_vertex:j0,fog_vertex:Q0,fog_pars_vertex:t_,fog_fragment:e_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:a_,lights_pars_begin:o_,lights_toon_fragment:c_,lights_toon_pars_fragment:h_,lights_phong_fragment:u_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:__,lightprobes_pars_fragment:x_,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:M_,map_fragment:b_,map_pars_fragment:w_,map_particle_fragment:E_,map_particle_pars_fragment:T_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:C_,morphinstance_vertex:R_,morphcolor_vertex:I_,morphnormal_vertex:P_,morphtarget_pars_vertex:L_,morphtarget_vertex:D_,normal_fragment_begin:N_,normal_fragment_maps:U_,normal_pars_fragment:F_,normal_pars_vertex:O_,normal_vertex:B_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:G_,opaque_fragment:W_,packing:$_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:Z_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:j_,shadowmap_pars_vertex:Q_,shadowmap_vertex:tx,shadowmask_pars_fragment:ex,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:sx,skinnormal_vertex:rx,specularmap_fragment:ax,specularmap_pars_fragment:ox,tonemapping_fragment:lx,tonemapping_pars_fragment:cx,transmission_fragment:hx,transmission_pars_fragment:ux,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:_x,backgroundCube_vert:xx,backgroundCube_frag:vx,cube_vert:yx,cube_frag:Sx,depth_vert:Mx,depth_frag:bx,distance_vert:wx,distance_frag:Ex,equirect_vert:Tx,equirect_frag:Ax,linedashed_vert:Cx,linedashed_frag:Rx,meshbasic_vert:Ix,meshbasic_frag:Px,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Nx,meshmatcap_frag:Ux,meshnormal_vert:Fx,meshnormal_frag:Ox,meshphong_vert:Bx,meshphong_frag:zx,meshphysical_vert:kx,meshphysical_frag:Vx,meshtoon_vert:Hx,meshtoon_frag:Gx,points_vert:Wx,points_frag:$x,shadow_vert:Xx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:Zx},Ft={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Gn={basic:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:On([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:On([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ue(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:On([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:On([Ft.points,Ft.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:On([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:On([Ft.common,Ft.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:On([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:On([Ft.sprite,Ft.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:On([Ft.common,Ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:On([Ft.lights,Ft.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Gn.physical={uniforms:On([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};var Bc={r:0,b:0,g:0},Jx=new Ue,Fp=new ve;Fp.set(-1,0,0,0,1,0,0,0,1);function Kx(i,t,e,n,s,r){let a=new ue(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function g(D){let N=D.isScene===!0?D.background:null;if(N&&N.isTexture){let E=D.backgroundBlurriness>0;N=t.get(N,E)}return N}function _(D){let N=!1,E=g(D);E===null?p(a,o):E&&E.isColor&&(p(E,1),N=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(D,N){let E=g(N);E&&(E.isCubeTexture||E.mapping===eo)?(c===void 0&&(c=new yn(new Ur(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Zs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(N.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fp),c.material.toneMapped=Re.getTransfer(E.colorSpace)!==ke,(h!==E||m!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,m=E.version,u=i.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new yn(new Wa(2,2),new Sn({name:"BackgroundMaterial",uniforms:Zs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=Re.getTransfer(E.colorSpace)!==ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||m!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,m=E.version,u=i.toneMapping),l.layers.enableAll(),D.unshift(l,l.geometry,l.material,0,0,null))}function p(D,N){D.getRGB(Bc,Iu(i)),e.buffers.color.setClear(Bc.r,Bc.g,Bc.b,N,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,N=1){a.set(D),o=N,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(D){o=D,p(a,o)},render:_,addToRenderList:T,dispose:d}}function jx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,J,et,$,Y){let st=!1,rt=m(G,$,et,J);r!==rt&&(r=rt,c(r.object)),st=g(G,$,et,Y),st&&_(G,$,et,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,E(G,J,et,$),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function m(G,J,et,$){let Y=$.wireframe===!0,st=n[J.id];st===void 0&&(st={},n[J.id]=st);let rt=G.isInstancedMesh===!0?G.id:0,St=st[rt];St===void 0&&(St={},st[rt]=St);let ot=St[et.id];ot===void 0&&(ot={},St[et.id]=ot);let gt=ot[Y];return gt===void 0&&(gt=u(l()),ot[Y]=gt),gt}function u(G){let J=[],et=[],$=[];for(let Y=0;Y<e;Y++)J[Y]=0,et[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:et,attributeDivisors:$,object:G,attributes:{},index:null}}function g(G,J,et,$){let Y=r.attributes,st=J.attributes,rt=0,St=et.getAttributes();for(let ot in St)if(St[ot].location>=0){let _t=Y[ot],Vt=st[ot];if(Vt===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(Vt=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(Vt=G.instanceColor)),_t===void 0||_t.attribute!==Vt||Vt&&_t.data!==Vt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==$}function _(G,J,et,$){let Y={},st=J.attributes,rt=0,St=et.getAttributes();for(let ot in St)if(St[ot].location>=0){let _t=st[ot];_t===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(_t=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(_t=G.instanceColor));let Vt={};Vt.attribute=_t,_t&&_t.data&&(Vt.data=_t.data),Y[ot]=Vt,rt++}r.attributes=Y,r.attributesNum=rt,r.index=$}function T(){let G=r.newAttributes;for(let J=0,et=G.length;J<et;J++)G[J]=0}function p(G){d(G,0)}function d(G,J){let et=r.newAttributes,$=r.enabledAttributes,Y=r.attributeDivisors;et[G]=1,$[G]===0&&(i.enableVertexAttribArray(G),$[G]=1),Y[G]!==J&&(i.vertexAttribDivisor(G,J),Y[G]=J)}function D(){let G=r.newAttributes,J=r.enabledAttributes;for(let et=0,$=J.length;et<$;et++)J[et]!==G[et]&&(i.disableVertexAttribArray(et),J[et]=0)}function N(G,J,et,$,Y,st,rt){rt===!0?i.vertexAttribIPointer(G,J,et,Y,st):i.vertexAttribPointer(G,J,et,$,Y,st)}function E(G,J,et,$){T();let Y=$.attributes,st=et.getAttributes(),rt=J.defaultAttributeValues;for(let St in st){let ot=st[St];if(ot.location>=0){let gt=Y[St];if(gt===void 0&&(St==="instanceMatrix"&&G.instanceMatrix&&(gt=G.instanceMatrix),St==="instanceColor"&&G.instanceColor&&(gt=G.instanceColor)),gt!==void 0){let _t=gt.normalized,Vt=gt.itemSize,Ht=t.get(gt);if(Ht===void 0)continue;let Ne=Ht.buffer,Me=Ht.type,Ae=Ht.bytesPerElement,ht=Me===i.INT||Me===i.UNSIGNED_INT||gt.gpuType===jl;if(gt.isInterleavedBufferAttribute){let mt=gt.data,Et=mt.stride,te=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<ot.locationSize;zt++)d(ot.location+zt,mt.meshPerAttribute);G.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<ot.locationSize;zt++)p(ot.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let zt=0;zt<ot.locationSize;zt++)N(ot.location+zt,Vt/ot.locationSize,Me,_t,Et*Ae,(te+Vt/ot.locationSize*zt)*Ae,ht)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<ot.locationSize;mt++)d(ot.location+mt,gt.meshPerAttribute);G.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<ot.locationSize;mt++)p(ot.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let mt=0;mt<ot.locationSize;mt++)N(ot.location+mt,Vt/ot.locationSize,Me,_t,Vt*Ae,Vt/ot.locationSize*mt*Ae,ht)}}else if(rt!==void 0){let _t=rt[St];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(ot.location,_t);break;case 3:i.vertexAttrib3fv(ot.location,_t);break;case 4:i.vertexAttrib4fv(ot.location,_t);break;default:i.vertexAttrib1fv(ot.location,_t)}}}}D()}function b(){P();for(let G in n){let J=n[G];for(let et in J){let $=J[et];for(let Y in $){let st=$[Y];for(let rt in st)h(st[rt].object),delete st[rt];delete $[Y]}}delete n[G]}}function I(G){if(n[G.id]===void 0)return;let J=n[G.id];for(let et in J){let $=J[et];for(let Y in $){let st=$[Y];for(let rt in st)h(st[rt].object),delete st[rt];delete $[Y]}}delete n[G.id]}function B(G){for(let J in n){let et=n[J];for(let $ in et){let Y=et[$];if(Y[G.id]===void 0)continue;let st=Y[G.id];for(let rt in st)h(st[rt].object),delete st[rt];delete Y[G.id]}}}function M(G){for(let J in n){let et=n[J],$=G.isInstancedMesh===!0?G.id:0,Y=et[$];if(Y!==void 0){for(let st in Y){let rt=Y[st];for(let St in rt)h(rt[St].object),delete rt[St];delete Y[st]}delete et[$],Object.keys(et).length===0&&delete n[J]}}}function P(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:p,disableUnusedAttributes:D}}function Qx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let g=0;g<h;g++)u+=c[g];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(B){return!(B!==fi&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){let M=B===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==jn&&B!==di&&!M&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(he("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:E,maxSamples:b,samples:I}}function ev(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vi,o=new ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let g=m.length!==0||u||n!==0||s;return s=u,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,g){let _=m.clippingPlanes,T=m.clipIntersection,p=m.clipShadows,d=i.get(m);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let D=r?0:n,N=D*4,E=d.clippingState||null;l.value=E,E=h(_,u,N,g);for(let b=0;b!==N;++b)E[b]=e[b];d.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,g,_){let T=m!==null?m.length:0,p=null;if(T!==0){if(p=l.value,_!==!0||p===null){let d=g+T*4,D=u.matrixWorldInverse;o.getNormalMatrix(D),(p===null||p.length<d)&&(p=new Float32Array(d));for(let N=0,E=g;N!==T;++N,E+=4)a.copy(m[N]).applyMatrix4(D,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,p}}var $r=4,nv=6,iv=20,sv=256,ho=new zr,pp=new ue,Nu=null,Uu=0,Fu=0,Ou=!1,rv=new z,Js=new z,kc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=rv}=r;Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nu,Uu,Fu),this._renderer.xr.enabled=Ou,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ti,format:fi,colorSpace:Sa,depthBuffer:!1},s=mp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=av(r)),this._blurMaterial=lv(r,t,e),this._ggxMaterial=ov(r,t,e)}return s}_compileMaterial(t){let e=new yn(new rn,t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,s,r){let l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,g=m.toneMapping;m.getClearColor(pp),m.toneMapping=wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Ur,new Vs({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,p=T.material,d=!1,D=t.background;D?D.isColor&&(p.color.copy(D),t.background=null,d=!0):(p.color.copy(pp),d=!0);for(let N=0;N<6;N++){let E=N%3;E===0?(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[N],r.y,r.z)):E===1?(l.up.set(0,0,c[N]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[N],r.z)):(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[N]));let b=this._cubeSize;Wr(s,E*b,N>2?b:0,b,b),m.setRenderTarget(s),d&&m.render(T,l),m.render(t,l)}m.toneMapping=g,m.autoClear=u,t.background=D}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ho)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),u=c*1.25,g=m*u,{_lodMax:_}=this,T=this._sizeLods[n],p=3*T*(n>_-$r?n-_+$r:0),d=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,Wr(r,p,d,3*T,2*T),s.setRenderTarget(r),s.render(o,ho),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Wr(t,p,d,3*T,2*T),s.setRenderTarget(t),s.render(o,ho)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-$r?s-this._lodMax+$r:0),u=4*(this._cubeSize-h);Wr(e,m,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ho)}};function av(i){let t=[],e=[],n=i,s=i-$r+1+nv;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,u=6,g=3,_=new Float32Array(g*u*m),T=new Float32Array(g*u*m);for(let d=0;d<m;d++){let D=d%3*2/3-1,N=d>2?0:-1,E=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];_.set(E,g*u*d);for(let b=0;b<u;b++){let I=h[b*2]*2-1,B=h[b*2+1]*2-1;d===0?Js.set(1,B,I):d===1?Js.set(-I,1,-B):d===2?Js.set(-I,B,1):d===3?Js.set(-1,B,-I):d===4?Js.set(-I,-1,B):Js.set(I,B,-1),Js.toArray(T,(d*u+b)*g)}}let p=new rn;p.setAttribute("position",new $e(_,g)),p.setAttribute("outputDirection",new $e(T,g)),e.push(new yn(p,null)),n>$r&&n--}return{lodMeshes:e,sizeLods:t}}function mp(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ov(i,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function lv(i,t,e){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function gp(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function _p(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vc=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Da(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ur(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Oi});r.uniforms.tEquirect.value=e;let a=new yn(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Tn),new Xl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function cv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===Zl||g===Jl)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let T=new Vc(_.height);return T.fromEquirectangularTexture(i,u),t.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let g=u.mapping,_=g===Zl||g===Jl,T=g===ys||g===Ys;if(_||T){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new kc(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let D=u.image;return _&&D&&D.height>0||T&&D&&l(D)?(n===null&&(n=new kc(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,g){return g===Zl?u.mapping=ys:g===Jl&&(u.mapping=Ys),u}function l(u){let g=0,_=6;for(let T=0;T<_;T++)u[T]!==void 0&&g++;return g===_}function c(u){let g=u.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function hv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function uv(i,t,e,n){let s={},r=new WeakMap;function a(m){let u=m.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let g=r.get(u);g&&(t.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(m){let u=m.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER)}function c(m){let u=[],g=m.index,_=m.attributes.position,T=0;if(_===void 0)return;if(g!==null){let D=g.array;T=g.version;for(let N=0,E=D.length;N<E;N+=3){let b=D[N+0],I=D[N+1],B=D[N+2];u.push(b,I,I,B,B,b)}}else{let D=_.array;T=_.version;for(let N=0,E=D.length/3-1;N<E;N+=3){let b=N+0,I=N+1,B=N+2;u.push(b,I,I,B,B,b)}}let p=new(_.count>=65535?Ca:Aa)(u,1);p.version=T;let d=r.get(m);d&&t.remove(d),r.set(m,p)}function h(m){let u=r.get(m);if(u){let g=m.index;g!==null&&u.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function dv(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*a,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let T=0;for(let p=0;p<g;p++)T+=u[p];e.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pv(i,t,e){let n=new WeakMap,s=new Ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let P=function(){B.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],D=o.morphAttributes.color||[],N=0;g===!0&&(N=1),_===!0&&(N=2),T===!0&&(N=3);let E=o.attributes.position.count*N,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let I=new Float32Array(E*b*4*m),B=new Ea(I,E,b,m);B.type=di,B.needsUpdate=!0;let M=N*4;for(let U=0;U<m;U++){let G=p[U],J=d[U],et=D[U],$=E*b*4*U;for(let Y=0;Y<G.count;Y++){let st=Y*M;g===!0&&(s.fromBufferAttribute(G,Y),I[$+st+0]=s.x,I[$+st+1]=s.y,I[$+st+2]=s.z,I[$+st+3]=0),_===!0&&(s.fromBufferAttribute(J,Y),I[$+st+4]=s.x,I[$+st+5]=s.y,I[$+st+6]=s.z,I[$+st+7]=0),T===!0&&(s.fromBufferAttribute(et,Y),I[$+st+8]=s.x,I[$+st+9]=s.y,I[$+st+10]=s.z,I[$+st+11]=et.itemSize===4?s.w:1)}}u={count:m,texture:B,size:new Lt(E,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let T=0;T<c.length;T++)g+=c[T];let _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function mv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var gv={[uu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[fu]:"CINEON_TONE_MAPPING",[pu]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function _v(i,t,e,n,s,r){let a=new Jn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rn;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));let h=new Ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new yn(c,h),u=new zr(-1,1,1,-1,0,1),g=null,_=null,T=!1,p,d=null,D=[],N=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let I=0;I<D.length;I++){let B=D[I];B.setSize&&B.setSize(E,b)}},this.setEffects=function(E){D=E,N=D.length>0&&D[0].isRenderPass===!0;let b=a.width,I=a.height;D.length>0&&o===null&&(o=new Jn(b,I,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(b,I,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<D.length;B++){let M=D[B];M.setSize&&M.setSize(b,I)}},this.begin=function(E,b){if(T||E.toneMapping===wi&&D.length===0)return!1;if(d=b,b!==null){let I=b.width,B=b.height;(a.width!==I||a.height!==B)&&this.setSize(I,B)}return N===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=wi,!0},this.hasRenderPass=function(){return N},this.end=function(E,b){E.toneMapping=p,T=!0;let I=a,B=o;for(let M=0;M<D.length;M++){let P=D[M];P.enabled!==!1&&(P.render(E,B,I,b),P.needsSwap!==!1&&(I=B,B=B===o?l:o))}if(g!==E.outputColorSpace||_!==E.toneMapping){g=E.outputColorSpace,_=E.toneMapping,h.defines={},Re.getTransfer(g)===ke&&(h.defines.SRGB_TRANSFER="");let M=gv[_];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,E.setRenderTarget(d),E.render(m,u),d=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Op=new Zn,ku=new ps(1,1),Bp=new Ea,zp=new vl,kp=new Da,xp=[],vp=[],yp=new Float32Array(16),Sp=new Float32Array(9),Mp=new Float32Array(4);function qr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xp[s];if(r===void 0&&(r=new Float32Array(s),xp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wc(i,t){let e=vp[t];e===void 0&&(e=new Int32Array(t),vp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function Mv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Mp.set(n),i.uniformMatrix2fv(this.addr,!1,Mp),mn(e,n)}}function bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Sp.set(n),i.uniformMatrix3fv(this.addr,!1,Sp),mn(e,n)}}function wv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;yp.set(n),i.uniformMatrix4fv(this.addr,!1,yp),mn(e,n)}}function Ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function Cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function Rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function Lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function Dv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ku.compareFunction=e.isReversedDepthBuffer()?Oc:Fc,r=ku):r=Op,e.setTexture2D(t||r,s)}function Nv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zp,s)}function Uv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kp,s)}function Fv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bp,s)}function Ov(i){switch(i){case 5126:return xv;case 35664:return vv;case 35665:return yv;case 35666:return Sv;case 35674:return Mv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Iv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Fv}}function Bv(i,t){i.uniform1fv(this.addr,t)}function zv(i,t){let e=qr(t,this.size,2);i.uniform2fv(this.addr,e)}function kv(i,t){let e=qr(t,this.size,3);i.uniform3fv(this.addr,e)}function Vv(i,t){let e=qr(t,this.size,4);i.uniform4fv(this.addr,e)}function Hv(i,t){let e=qr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gv(i,t){let e=qr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wv(i,t){let e=qr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $v(i,t){i.uniform1iv(this.addr,t)}function Xv(i,t){i.uniform2iv(this.addr,t)}function qv(i,t){i.uniform3iv(this.addr,t)}function Yv(i,t){i.uniform4iv(this.addr,t)}function Zv(i,t){i.uniform1uiv(this.addr,t)}function Jv(i,t){i.uniform2uiv(this.addr,t)}function Kv(i,t){i.uniform3uiv(this.addr,t)}function jv(i,t){i.uniform4uiv(this.addr,t)}function Qv(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ku:a=Op;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ty(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zp,r[a])}function ey(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kp,r[a])}function ny(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bp,r[a])}function iy(i){switch(i){case 5126:return Bv;case 35664:return zv;case 35665:return kv;case 35666:return Vv;case 35674:return Hv;case 35675:return Gv;case 35676:return Wv;case 5124:case 35670:return $v;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Zv;case 36294:return Jv;case 36295:return Kv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}var Vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ov(e.type)}},Hu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iy(e.type)}},Gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function bp(i,t){i.seq.push(t),i.map[t.id]=t}function sy(i,t,e){let n=i.name,s=n.length;for(Bu.lastIndex=0;;){let r=Bu.exec(n),a=Bu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bp(e,c===void 0?new Vu(o,i,t):new Hu(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Gu(o),bp(e,m)),e=m}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);sy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ry=37297,ay=0;function oy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ep=new ve;function ly(i){Re._getMatrix(Ep,Re.workingColorSpace,i);let t=`mat3( ${Ep.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(i)){case Ma:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+oy(i.getShaderSource(t),o)}else return r}function cy(i,t){let e=ly(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hy={[uu]:"Linear",[du]:"Reinhard",[fu]:"Cineon",[pu]:"ACESFilmic",[gu]:"AgX",[_u]:"Neutral",[mu]:"Custom"};function uy(i,t){let e=hy[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zc=new z;function dy(){Re.getLuminanceCoefficients(zc);let i=zc.x.toFixed(4),t=zc.y.toFixed(4),e=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function py(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function my(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fo(i){return i!==""}function Ap(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(gy,xy)}var _y=new Map;function xy(i,t){let e=we[t];if(e===void 0){let n=_y.get(t);if(n!==void 0)e=we[n],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wu(e)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(i){return i.replace(vy,yy)}function yy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Sy={[to]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function My(i){return Sy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var by={[ys]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};function wy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":by[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ey={[Ys]:"ENVMAP_MODE_REFRACTION"};function Ty(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ey[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ay={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function Cy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ay[i.combine]||"ENVMAP_BLENDING_NONE"}function Ry(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Iy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=My(e),c=wy(e),h=Ty(e),m=Cy(e),u=Ry(e),g=fy(e),_=py(r),T=s.createProgram(),p,d,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fo).join(`
`),d.length>0&&(d+=`
`)):(p=[Ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),d=[Ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?we.tonemapping_pars_fragment:"",e.toneMapping!==wi?uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,cy("linearToOutputTexel",e.outputColorSpace),dy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fo).join(`
`)),a=Wu(a),a=Ap(a,e),a=Cp(a,e),o=Wu(o),o=Ap(o,e),o=Cp(o,e),a=Rp(a),o=Rp(o),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let N=D+p+a,E=D+d+o,b=wp(s,s.VERTEX_SHADER,N),I=wp(s,s.FRAGMENT_SHADER,E);s.attachShader(T,b),s.attachShader(T,I),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function B(G){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(T)||"",et=s.getShaderInfoLog(b)||"",$=s.getShaderInfoLog(I)||"",Y=J.trim(),st=et.trim(),rt=$.trim(),St=!0,ot=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(St=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,b,I);else{let gt=Tp(s,b,"vertex"),_t=Tp(s,I,"fragment");fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+gt+`
`+_t)}else Y!==""?he("WebGLProgram: Program Info Log:",Y):(st===""||rt==="")&&(ot=!1);ot&&(G.diagnostics={runnable:St,programLog:Y,vertexShader:{log:st,prefix:p},fragmentShader:{log:rt,prefix:d}})}s.deleteShader(b),s.deleteShader(I),M=new Xr(s,T),P=my(s,T)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(T,ry)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ay++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=I,this}var Py=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xu(t),e.set(t,n)),n}},Xu=class{constructor(t){this.id=Py++,this.code=t,this.usedTimes=0}};function Ly(i){return i===bs||i===oo||i===lo}function Dy(i,t,e,n,s,r){let a=new Lr,o=new $u,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function T(M,P,U,G,J,et){let $=G.fog,Y=J.geometry,st=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,rt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,St=t.get(M.envMap||st,rt),ot=St&&St.mapping===eo?St.image.height:null,gt=g[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&he("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let _t=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Vt=_t!==void 0?_t.length:0,Ht=0;Y.morphAttributes.position!==void 0&&(Ht=1),Y.morphAttributes.normal!==void 0&&(Ht=2),Y.morphAttributes.color!==void 0&&(Ht=3);let Ne,Me,Ae,ht;if(gt){let Be=Gn[gt];Ne=Be.vertexShader,Me=Be.fragmentShader}else{Ne=M.vertexShader,Me=M.fragmentShader;let Be=o.getVertexShaderStage(M),Fe=o.getFragmentShaderStage(M);o.update(M,Be,Fe),Ae=Be.id,ht=Fe.id}let mt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),te=J.isInstancedMesh===!0,zt=J.isBatchedMesh===!0,le=!!M.map,de=!!M.matcap,it=!!St,bt=!!M.aoMap,H=!!M.lightMap,wt=!!M.bumpMap&&M.wireframe===!1,It=!!M.normalMap,ne=!!M.displacementMap,Xt=!!M.emissiveMap,se=!!M.metalnessMap,ie=!!M.roughnessMap,k=M.anisotropy>0,Ie=M.clearcoat>0,Yt=M.dispersion>0,R=M.retroreflectivity>0,x=M.iridescence>0,Z=M.sheen>0,nt=M.transmission>0,at=k&&!!M.anisotropyMap,Tt=Ie&&!!M.clearcoatMap,Rt=Ie&&!!M.clearcoatNormalMap,ct=Ie&&!!M.clearcoatRoughnessMap,pt=x&&!!M.iridescenceMap,Ut=x&&!!M.iridescenceThicknessMap,jt=Z&&!!M.sheenColorMap,Ot=Z&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,Jt=!!M.specularColorMap,re=!!M.specularIntensityMap,xe=nt&&!!M.transmissionMap,q=nt&&!!M.thicknessMap,Dt=!!M.gradientMap,ft=!!M.alphaMap,At=M.alphaTest>0,Pt=!!M.alphaHash,xt=!!M.extensions,Qt=wi;M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Zt={shaderID:gt,shaderType:M.type,shaderName:M.name,vertexShader:Ne,fragmentShader:Me,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:zt,batchingColor:zt&&J._colorsTexture!==null,instancing:te,instancingColor:te&&J.instanceColor!==null,instancingMorph:te&&J.morphTexture!==null,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:le,matcap:de,envMap:it,envMapMode:it&&St.mapping,envMapCubeUVHeight:ot,aoMap:bt,lightMap:H,bumpMap:wt,normalMap:It,displacementMap:ne,emissiveMap:Xt,normalMapObjectSpace:It&&M.normalMapType===Zf,normalMapTangentSpace:It&&M.normalMapType===Uc,packedNormalMap:It&&M.normalMapType===Uc&&Ly(M.normalMap.format),metalnessMap:se,roughnessMap:ie,anisotropy:k,anisotropyMap:at,clearcoat:Ie,clearcoatMap:Tt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ct,dispersion:Yt,retroreflection:R,iridescence:x,iridescenceMap:pt,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:Jt,specularIntensityMap:re,transmission:nt,transmissionMap:xe,thicknessMap:q,gradientMap:Dt,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:At,alphaHash:Pt,combine:M.combine,mapUv:le&&_(M.map.channel),aoMapUv:bt&&_(M.aoMap.channel),lightMapUv:H&&_(M.lightMap.channel),bumpMapUv:wt&&_(M.bumpMap.channel),normalMapUv:It&&_(M.normalMap.channel),displacementMapUv:ne&&_(M.displacementMap.channel),emissiveMapUv:Xt&&_(M.emissiveMap.channel),metalnessMapUv:se&&_(M.metalnessMap.channel),roughnessMapUv:ie&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:Tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(M.sheenRoughnessMap.channel),specularMapUv:Ct&&_(M.specularMap.channel),specularColorMapUv:Jt&&_(M.specularColorMap.channel),specularIntensityMapUv:re&&_(M.specularIntensityMap.channel),transmissionMapUv:xe&&_(M.transmissionMap.channel),thicknessMapUv:q&&_(M.thicknessMap.channel),alphaMapUv:ft&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(It||k),vertexNormals:!!Y.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Y.attributes.uv&&(le||ft),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Y.attributes.normal===void 0&&It===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Et,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Ht,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:le&&M.map.isVideoTexture===!0&&Re.getTransfer(M.map.colorSpace)===ke,decodeVideoTextureEmissive:Xt&&M.emissiveMap.isVideoTexture===!0&&Re.getTransfer(M.emissiveMap.colorSpace)===ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fi,flipSided:M.side===Hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&M.extensions.multiDraw===!0||zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function p(M){let P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)P.push(U),P.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(d(P,M),D(P,M),P.push(i.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function d(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function D(M,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function N(M){let P=g[M.type],U;if(P){let G=Gn[P];U=co.clone(G.uniforms)}else U=M.uniforms;return U}function E(M,P){let U=h.get(P);return U!==void 0?++U.usedTimes:(U=new Iy(i,P,M,s),c.push(U),h.set(P,U)),U}function b(M){if(--M.usedTimes===0){let P=c.indexOf(M);c[P]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function I(M){o.remove(M)}function B(){o.dispose()}return{getParameters:T,getProgramCacheKey:p,getUniforms:N,acquireProgram:E,releaseProgram:b,releaseShaderCache:I,programs:c,dispose:B}}function Ny(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,_,T,p,d){let D=i[t];return D===void 0?(D={id:u.id,object:u,geometry:g,material:_,materialVariant:a(u),groupOrder:T,renderOrder:u.renderOrder,z:p,group:d},i[t]=D):(D.id=u.id,D.object=u,D.geometry=g,D.material=_,D.materialVariant=a(u),D.groupOrder=T,D.renderOrder=u.renderOrder,D.z=p,D.group=d),t++,D}function l(u,g,_,T,p,d,D){D.reversedDepth===!0&&(p=-p);let N=o(u,g,_,T,p,d);_.transmission>0?n.push(N):_.transparent===!0?s.push(N):e.push(N)}function c(u,g,_,T,p,d){let D=o(u,g,_,T,p,d);_.transmission>0?n.unshift(D):_.transparent===!0?s.unshift(D):e.unshift(D)}function h(u,g){e.length>1&&e.sort(u||Uy),n.length>1&&n.sort(g||Pp),s.length>1&&s.sort(g||Pp)}function m(){for(let u=t,g=i.length;u<g;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function Fy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lp,i.set(n,[a])):s>=r.length?(a=new Lp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new ue};break;case"SpotLight":e={position:new z,direction:new z,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function By(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zy=0;function ky(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vy(i){let t=new Oy,e=By(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Ue,a=new Ue;function o(c){let h=0,m=0,u=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let g=0,_=0,T=0,p=0,d=0,D=0,N=0,E=0,b=0,I=0,B=0,M=0,P=0,U=0;c.sort(ky);for(let J=0,et=c.length;J<et;J++){let $=c[J],Y=$.color,st=$.intensity,rt=$.distance,St=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===bs?St=$.shadow.map.texture:St=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)h+=Y.r*st,m+=Y.g*st,u+=Y.b*st;else if($.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector($.sh.coefficients[ot],st);U++}else if($.isSunLight){let ot=t.get($);if(ot.color.copy($.color).multiplyScalar($.intensity),$.castShadow){let gt=$.shadow,_t=e.get($);_t.shadowIntensity=gt.intensity,_t.shadowBias=gt.bias,_t.shadowNormalBias=gt.normalBias,_t.shadowRadius=gt.radius,_t.shadowMapSize.copy(gt.mapSize).multiply(gt.getFrameExtents()),n.sunShadow[_]=_t,n.sunShadowMap[_]=St;let Vt=gt.getViewportCount();for(let Ht=0;Ht<Vt;Ht++)n.sunShadowMatrix[T+Ht]=gt.getMatrix(Ht),n.sunShadowCascade[T+Ht]=gt._cascadeData[Ht];T+=Vt,_++}n.sun[g]=ot,g++}else if($.isDirectionalLight){let ot=t.get($);if(ot.color.copy($.color).multiplyScalar($.intensity),$.castShadow){let gt=$.shadow,_t=e.get($);_t.shadowIntensity=gt.intensity,_t.shadowBias=gt.bias,_t.shadowNormalBias=gt.normalBias,_t.shadowRadius=gt.radius,_t.shadowMapSize=gt.mapSize,n.directionalShadow[p]=_t,n.directionalShadowMap[p]=St,n.directionalShadowMatrix[p]=$.shadow.matrix,b++}n.directional[p]=ot,p++}else if($.isSpotLight){let ot=t.get($);ot.position.setFromMatrixPosition($.matrixWorld),ot.color.copy(Y).multiplyScalar(st),ot.distance=rt,ot.coneCos=Math.cos($.angle),ot.penumbraCos=Math.cos($.angle*(1-$.penumbra)),ot.decay=$.decay,n.spot[D]=ot;let gt=$.shadow;if($.map&&(n.spotLightMap[M]=$.map,M++,gt.updateMatrices($),$.castShadow&&P++),n.spotLightMatrix[D]=gt.matrix,$.castShadow){let _t=e.get($);_t.shadowIntensity=gt.intensity,_t.shadowBias=gt.bias,_t.shadowNormalBias=gt.normalBias,_t.shadowRadius=gt.radius,_t.shadowMapSize=gt.mapSize,n.spotShadow[D]=_t,n.spotShadowMap[D]=St,B++}D++}else if($.isRectAreaLight){let ot=t.get($);ot.color.copy(Y).multiplyScalar(st),ot.halfWidth.set($.width*.5,0,0),ot.halfHeight.set(0,$.height*.5,0),n.rectArea[N]=ot,N++}else if($.isPointLight){let ot=t.get($);if(ot.color.copy($.color).multiplyScalar($.intensity),ot.distance=$.distance,ot.decay=$.decay,$.castShadow){let gt=$.shadow,_t=e.get($);_t.shadowIntensity=gt.intensity,_t.shadowBias=gt.bias,_t.shadowNormalBias=gt.normalBias,_t.shadowRadius=gt.radius,_t.shadowMapSize=gt.mapSize,_t.shadowCameraNear=gt.camera.near,_t.shadowCameraFar=gt.camera.far,n.pointShadow[d]=_t,n.pointShadowMap[d]=St,n.pointShadowMatrix[d]=$.shadow.matrix,I++}n.point[d]=ot,d++}else if($.isHemisphereLight){let ot=t.get($);ot.skyColor.copy($.color).multiplyScalar(st),ot.groundColor.copy($.groundColor).multiplyScalar(st),n.hemi[E]=ot,E++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let G=n.hash;(G.sunLength!==g||G.directionalLength!==p||G.pointLength!==d||G.spotLength!==D||G.rectAreaLength!==N||G.hemiLength!==E||G.numSunShadows!==_||G.numDirectionalShadows!==b||G.numPointShadows!==I||G.numSpotShadows!==B||G.numSpotMaps!==M||G.numLightProbes!==U)&&(n.sun.length=g,n.directional.length=p,n.spot.length=D,n.rectArea.length=N,n.point.length=d,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,G.sunLength=g,G.directionalLength=p,G.pointLength=d,G.spotLength=D,G.rectAreaLength=N,G.hemiLength=E,G.numSunShadows=_,G.numDirectionalShadows=b,G.numPointShadows=I,G.numSpotShadows=B,G.numSpotMaps=M,G.numLightProbes=U,n.version=zy++)}function l(c,h){let m=0,u=0,g=0,_=0,T=0,p=0,d=h.matrixWorldInverse;for(let D=0,N=c.length;D<N;D++){let E=c[D];if(E.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(d),m++}else if(E.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(E.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(E.isRectAreaLight){let b=n.rectArea[T];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(E.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),T++}else if(E.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),g++}else if(E.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function Dp(i){let t=new Vy(i),e=[],n=[],s=[];function r(u){m.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Hy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dp(i),t.set(s,[o])):r>=a.length?(o=new Dp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`,$y=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Xy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Np=new Ue,uo=new z,zu=new z;function qy(i,t,e){let n=new Nr,s=new Lt,r=new Lt,a=new Ve,o=new Dl,l=new Nl,c={},h=e.maxTextureSize,m={[vs]:Hn,[Hn]:vs,[Fi]:Fi},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Gy,fragmentShader:Wy}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new yn(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let d=this.type;this.render=function(I,B,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;this.type===Tf&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let P=i.getRenderTarget(),U=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Oi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let et=d!==this.type;et&&B.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Y=>Y.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Y=I.length;$<Y;$++){let st=I[$],rt=st.shadow;if(rt===void 0){he("WebGLShadowMap:",st,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let St=rt.getFrameExtents();s.multiply(St),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/St.x),s.x=r.x*St.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/St.y),s.y=r.y*St.y,rt.mapSize.y=r.y));let ot=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=ot,rt.map===null||et===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===kr){if(st.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Jn(s.x,s.y,{format:bs,type:Ti,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),rt.map.texture.name=st.name+".shadowMap",rt.map.depthTexture=new ps(s.x,s.y,di),rt.map.depthTexture.name=st.name+".shadowMapDepth",rt.map.depthTexture.format=Li,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=xn,rt.map.depthTexture.magFilter=xn}else st.isPointLight?(rt.map=new Vc(s.x),rt.map.depthTexture=new El(s.x,Ei)):(rt.map=new Jn(s.x,s.y),rt.map.depthTexture=new ps(s.x,s.y,Ei)),rt.map.depthTexture.name=st.name+".shadowMap",rt.map.depthTexture.format=Li,this.type===to?(rt.map.depthTexture.compareFunction=ot?Oc:Fc,rt.map.depthTexture.minFilter=Tn,rt.map.depthTexture.magFilter=Tn):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=xn,rt.map.depthTexture.magFilter=xn);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let gt=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();st.isPointLight!==!0&&rt.updateMatrices(st,M);for(let _t=0;_t<gt;_t++){let Vt=rt.getCamera(_t);if(st.isPointLight){let Ht=rt.camera,Ne=rt.matrix,Me=st.distance||Ht.far;Me!==Ht.far&&(Ht.far=Me,Ht.updateProjectionMatrix()),uo.setFromMatrixPosition(st.matrixWorld),Ht.position.copy(uo),zu.copy(Ht.position),zu.add($y[_t]),Ht.up.copy(Xy[_t]),Ht.lookAt(zu),Ht.updateMatrixWorld(),Ne.makeTranslation(-uo.x,-uo.y,-uo.z),Np.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Np,Ht.coordinateSystem,Ht.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(rt.map),i.clear());let Ht=rt.getViewport(_t);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),J.viewport(a)}n=rt.getFrustum(_t),E(B,M,Vt,st,this.type)}rt.isPointLightShadow!==!0&&this.type===kr&&D(rt,M),rt.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(P,U,G)};function D(I,B){let M=t.update(T);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null?I.mapPass=new Jn(s.x,s.y,{format:bs,type:Ti}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(B,null,M,u,T,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(B,null,M,g,T,null)}function N(I,B,M,P){let U=null,G=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)U=G;else if(U=M.isPointLight===!0?l:o,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let J=U.uuid,et=B.uuid,$=c[J];$===void 0&&($={},c[J]=$);let Y=$[et];Y===void 0&&(Y=U.clone(),$[et]=Y,B.addEventListener("dispose",b)),U=Y}if(U.visible=B.visible,U.wireframe=B.wireframe,P===kr?U.side=B.shadowSide!==null?B.shadowSide:B.side:U.side=B.shadowSide!==null?B.shadowSide:m[B.side],U.alphaMap=B.alphaMap,U.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,U.map=B.map,U.clipShadows=B.clipShadows,U.clippingPlanes=B.clippingPlanes,U.clipIntersection=B.clipIntersection,U.displacementMap=B.displacementMap,U.displacementScale=B.displacementScale,U.displacementBias=B.displacementBias,U.wireframeLinewidth=B.wireframeLinewidth,U.linewidth=B.linewidth,M.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let J=i.properties.get(U);J.light=M}return U}function E(I,B,M,P,U){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===kr)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);let et=t.update(I),$=I.material;if(Array.isArray($)){let Y=et.groups;for(let st=0,rt=Y.length;st<rt;st++){let St=Y[st],ot=$[St.materialIndex];if(ot&&ot.visible){let gt=N(I,ot,P,U);I.onBeforeShadow(i,I,B,M,et,gt,St),i.renderBufferDirect(M,null,et,gt,I,St),I.onAfterShadow(i,I,B,M,et,gt,St)}}}else if($.visible){let Y=N(I,$,P,U);I.onBeforeShadow(i,I,B,M,et,Y,null),i.renderBufferDirect(M,null,et,Y,I,null),I.onAfterShadow(i,I,B,M,et,Y,null)}}let J=I.children;for(let et=0,$=J.length;et<$;et++)E(J[et],B,M,P,U)}function b(I){I.target.removeEventListener("dispose",b);for(let M in c){let P=c[M],U=I.target.uuid;U in P&&(P[U].dispose(),delete P[U])}}}function Yy(i,t){function e(){let q=!1,Dt=new Ve,ft=null,At=new Ve(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!q&&(i.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,xt,Qt,Zt,Be){Be===!0&&(Pt*=Zt,xt*=Zt,Qt*=Zt),Dt.set(Pt,xt,Qt,Zt),At.equals(Dt)===!1&&(i.clearColor(Pt,xt,Qt,Zt),At.copy(Dt))},reset:function(){q=!1,ft=null,At.set(-1,0,0,0)}}}function n(){let q=!1,Dt=!1,ft=null,At=null,Pt=null;return{setReversed:function(xt){if(Dt!==xt){let Qt=t.get("EXT_clip_control");xt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Dt=xt;let Zt=Pt;Pt=null,this.setClear(Zt)}},getReversed:function(){return Dt},setTest:function(xt){xt?mt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(xt){ft!==xt&&!q&&(i.depthMask(xt),ft=xt)},setFunc:function(xt){if(Dt&&(xt=ap[xt]),At!==xt){switch(xt){case ol:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=xt}},setLocked:function(xt){q=xt},setClear:function(xt){Pt!==xt&&(Pt=xt,Dt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){q=!1,ft=null,At=null,Pt=null,Dt=!1}}}function s(){let q=!1,Dt=null,ft=null,At=null,Pt=null,xt=null,Qt=null,Zt=null,Be=null;return{setTest:function(Fe){q||(Fe?mt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Fe){Dt!==Fe&&!q&&(i.stencilMask(Fe),Dt=Fe)},setFunc:function(Fe,Mn,ai){(ft!==Fe||At!==Mn||Pt!==ai)&&(i.stencilFunc(Fe,Mn,ai),ft=Fe,At=Mn,Pt=ai)},setOp:function(Fe,Mn,ai){(xt!==Fe||Qt!==Mn||Zt!==ai)&&(i.stencilOp(Fe,Mn,ai),xt=Fe,Qt=Mn,Zt=ai)},setLocked:function(Fe){q=Fe},setClear:function(Fe){Be!==Fe&&(i.clearStencil(Fe),Be=Fe)},reset:function(){q=!1,Dt=null,ft=null,At=null,Pt=null,xt=null,Qt=null,Zt=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},u={},g=new WeakMap,_=[],T=null,p=!1,d=null,D=null,N=null,E=null,b=null,I=null,B=null,M=new ue(0,0,0),P=0,U=!1,G=null,J=null,et=null,$=null,Y=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,St=0,ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(St=parseFloat(/^WebGL (\d)/.exec(ot)[1]),rt=St>=1):ot.indexOf("OpenGL ES")!==-1&&(St=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),rt=St>=2);let gt=null,_t={},Vt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Ne=new Ve().fromArray(Vt),Me=new Ve().fromArray(Ht);function Ae(q,Dt,ft,At){let Pt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(q,xt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ft;Qt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Dt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return xt}let ht={};ht[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(Ar),wt(!1),It(ru),mt(i.CULL_FACE),bt(Oi);function mt(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Et(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function te(q,Dt){return u[q]!==Dt?(i.bindFramebuffer(q,Dt),u[q]=Dt,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Dt),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function zt(q,Dt){let ft=_,At=!1;if(q){ft=g.get(Dt),ft===void 0&&(ft=[],g.set(Dt,ft));let Pt=q.textures;if(ft.length!==Pt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Qt=Pt.length;xt<Qt;xt++)ft[xt]=i.COLOR_ATTACHMENT0+xt;ft.length=Pt.length,At=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,At=!0);At&&i.drawBuffers(ft)}function le(q){return T!==q?(i.useProgram(q),T=q,!0):!1}let de={[qs]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Rf]:i.FUNC_REVERSE_SUBTRACT};de[If]=i.MIN,de[Pf]=i.MAX;let it={[Lf]:i.ZERO,[Df]:i.ONE,[Nf]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[hu]:i.ONE_MINUS_SRC_ALPHA,[zf]:i.ONE_MINUS_DST_COLOR,[Of]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(q,Dt,ft,At,Pt,xt,Qt,Zt,Be,Fe){if(q===Oi){p===!0&&(Et(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),q!==Af){if(q!==d||Fe!==U){if((D!==qs||b!==qs)&&(i.blendEquation(i.FUNC_ADD),D=qs,b=qs),Fe)switch(q){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",q);break}else switch(q){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",q);break}N=null,E=null,I=null,B=null,M.set(0,0,0),P=0,d=q,U=Fe}return}Pt=Pt||Dt,xt=xt||ft,Qt=Qt||At,(Dt!==D||Pt!==b)&&(i.blendEquationSeparate(de[Dt],de[Pt]),D=Dt,b=Pt),(ft!==N||At!==E||xt!==I||Qt!==B)&&(i.blendFuncSeparate(it[ft],it[At],it[xt],it[Qt]),N=ft,E=At,I=xt,B=Qt),(Zt.equals(M)===!1||Be!==P)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Be),M.copy(Zt),P=Be),d=q,U=!1}function H(q,Dt){q.side===Fi?Et(i.CULL_FACE):mt(i.CULL_FACE);let ft=q.side===Hn;Dt&&(ft=!ft),wt(ft),q.blending===Vr&&q.transparent===!1?bt(Oi):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let At=q.stencilWrite;o.setTest(At),At&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Xt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(q){G!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),G=q)}function It(q){q!==wf?(mt(i.CULL_FACE),q!==J&&(q===ru?i.cullFace(i.BACK):q===Ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),J=q}function ne(q){q!==et&&(rt&&i.lineWidth(q),et=q)}function Xt(q,Dt,ft){q?(mt(i.POLYGON_OFFSET_FILL),($!==Dt||Y!==ft)&&($=Dt,Y=ft,a.getReversed()&&(Dt=-Dt),i.polygonOffset(Dt,ft))):Et(i.POLYGON_OFFSET_FILL)}function se(q){q?mt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function ie(q){q===void 0&&(q=i.TEXTURE0+st-1),gt!==q&&(i.activeTexture(q),gt=q)}function k(q,Dt,ft){ft===void 0&&(gt===null?ft=i.TEXTURE0+st-1:ft=gt);let At=_t[ft];At===void 0&&(At={type:void 0,texture:void 0},_t[ft]=At),(At.type!==q||At.texture!==Dt)&&(gt!==ft&&(i.activeTexture(ft),gt=ft),i.bindTexture(q,Dt||ht[q]),At.type=q,At.texture=Dt)}function Ie(){let q=_t[gt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(q){fe("WebGLState:",q)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(q){fe("WebGLState:",q)}}function x(){try{i.texSubImage2D(...arguments)}catch(q){fe("WebGLState:",q)}}function Z(){try{i.texSubImage3D(...arguments)}catch(q){fe("WebGLState:",q)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(q){fe("WebGLState:",q)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(q){fe("WebGLState:",q)}}function Tt(){try{i.texStorage2D(...arguments)}catch(q){fe("WebGLState:",q)}}function Rt(){try{i.texStorage3D(...arguments)}catch(q){fe("WebGLState:",q)}}function ct(){try{i.texImage2D(...arguments)}catch(q){fe("WebGLState:",q)}}function pt(){try{i.texImage3D(...arguments)}catch(q){fe("WebGLState:",q)}}function Ut(q){return m[q]!==void 0?m[q]:i.getParameter(q)}function jt(q,Dt){m[q]!==Dt&&(i.pixelStorei(q,Dt),m[q]=Dt)}function Ot(q){Ne.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ne.copy(q))}function Ct(q){Me.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Me.copy(q))}function Jt(q,Dt){let ft=c.get(Dt);ft===void 0&&(ft=new WeakMap,c.set(Dt,ft));let At=ft.get(q);At===void 0&&(At=i.getUniformBlockIndex(Dt,q.name),ft.set(q,At))}function re(q,Dt){let At=c.get(Dt).get(q);l.get(Dt)!==At&&(i.uniformBlockBinding(Dt,At,q.__bindingPointIndex),l.set(Dt,At))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},gt=null,_t={},u={},g=new WeakMap,_=[],T=null,p=!1,d=null,D=null,N=null,E=null,b=null,I=null,B=null,M=new ue(0,0,0),P=0,U=!1,G=null,J=null,et=null,$=null,Y=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Et,bindFramebuffer:te,drawBuffers:zt,useProgram:le,setBlending:bt,setMaterial:H,setFlipSided:wt,setCullFace:It,setLineWidth:ne,setPolygonOffset:Xt,setScissorTest:se,activeTexture:ie,bindTexture:k,unbindTexture:Ie,compressedTexImage2D:Yt,compressedTexImage3D:R,texImage2D:ct,texImage3D:pt,pixelStorei:jt,getParameter:Ut,updateUBOMapping:Jt,uniformBlockBinding:re,texStorage2D:Tt,texStorage3D:Rt,texSubImage2D:x,texSubImage3D:Z,compressedTexSubImage2D:nt,compressedTexSubImage3D:at,scissor:Ot,viewport:Ct,reset:xe}}function Zy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,m=new Set,u,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,x){return _?new OffscreenCanvas(R,x):ba("canvas")}function p(R,x,Z){let nt=1,at=Yt(R);if((at.width>Z||at.height>Z)&&(nt=Z/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Tt=Math.floor(nt*at.width),Rt=Math.floor(nt*at.height);u===void 0&&(u=T(Tt,Rt));let ct=x?T(Tt,Rt):u;return ct.width=Tt,ct.height=Rt,ct.getContext("2d").drawImage(R,0,0,Tt,Rt),he("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Tt+"x"+Rt+")."),ct}else return"data"in R&&he("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function d(R){return R.generateMipmaps}function D(R){i.generateMipmap(R)}function N(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,x,Z,nt,at,Tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Rt;nt&&(Rt=t.get("EXT_texture_norm16"),Rt||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=x;if(x===i.RED&&(Z===i.FLOAT&&(ct=i.R32F),Z===i.HALF_FLOAT&&(ct=i.R16F),Z===i.UNSIGNED_BYTE&&(ct=i.R8),Z===i.UNSIGNED_SHORT&&Rt&&(ct=Rt.R16_EXT),Z===i.SHORT&&Rt&&(ct=Rt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.R8UI),Z===i.UNSIGNED_SHORT&&(ct=i.R16UI),Z===i.UNSIGNED_INT&&(ct=i.R32UI),Z===i.BYTE&&(ct=i.R8I),Z===i.SHORT&&(ct=i.R16I),Z===i.INT&&(ct=i.R32I)),x===i.RG&&(Z===i.FLOAT&&(ct=i.RG32F),Z===i.HALF_FLOAT&&(ct=i.RG16F),Z===i.UNSIGNED_BYTE&&(ct=i.RG8),Z===i.UNSIGNED_SHORT&&Rt&&(ct=Rt.RG16_EXT),Z===i.SHORT&&Rt&&(ct=Rt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ct=i.RG16UI),Z===i.UNSIGNED_INT&&(ct=i.RG32UI),Z===i.BYTE&&(ct=i.RG8I),Z===i.SHORT&&(ct=i.RG16I),Z===i.INT&&(ct=i.RG32I)),x===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),Z===i.UNSIGNED_INT&&(ct=i.RGB32UI),Z===i.BYTE&&(ct=i.RGB8I),Z===i.SHORT&&(ct=i.RGB16I),Z===i.INT&&(ct=i.RGB32I)),x===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ct=i.RGBA32UI),Z===i.BYTE&&(ct=i.RGBA8I),Z===i.SHORT&&(ct=i.RGBA16I),Z===i.INT&&(ct=i.RGBA32I)),x===i.RGB&&(Z===i.UNSIGNED_SHORT&&Rt&&(ct=Rt.RGB16_EXT),Z===i.SHORT&&Rt&&(ct=Rt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),x===i.RGBA){let pt=Tt?Ma:Re.getTransfer(at);Z===i.FLOAT&&(ct=i.RGBA32F),Z===i.HALF_FLOAT&&(ct=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ct=pt===ke?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Rt&&(ct=Rt.RGBA16_EXT),Z===i.SHORT&&Rt&&(ct=Rt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function b(R,x){let Z;return R?x===null||x===Ei||x===Gr?Z=i.DEPTH24_STENCIL8:x===di?Z=i.DEPTH32F_STENCIL8:x===Hr&&(Z=i.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===Gr?Z=i.DEPTH_COMPONENT24:x===di?Z=i.DEPTH_COMPONENT32F:x===Hr&&(Z=i.DEPTH_COMPONENT16),Z}function I(R,x){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==Tn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function B(R){let x=R.target;x.removeEventListener("dispose",B),P(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&m.delete(x)}function M(R){let x=R.target;x.removeEventListener("dispose",M),G(x)}function P(R){let x=n.get(R);if(x.__webglInit===void 0)return;let Z=R.source,nt=g.get(Z);if(nt){let at=nt[x.__cacheKey];at.usedTimes--,at.usedTimes===0&&U(R),Object.keys(nt).length===0&&g.delete(Z)}n.remove(R)}function U(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let Z=R.source,nt=g.get(Z);delete nt[x.__cacheKey],a.memory.textures--}function G(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(x.__webglFramebuffer[nt]))for(let at=0;at<x.__webglFramebuffer[nt].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[nt][at]);else i.deleteFramebuffer(x.__webglFramebuffer[nt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[nt])}else{if(Array.isArray(x.__webglFramebuffer))for(let nt=0;nt<x.__webglFramebuffer.length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[nt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let nt=0;nt<x.__webglColorRenderbuffer.length;nt++)x.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[nt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let Z=R.textures;for(let nt=0,at=Z.length;nt<at;nt++){let Tt=n.get(Z[nt]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(Z[nt])}n.remove(R)}let J=0;function et(){J=0}function $(){return J}function Y(R){J=R}function st(){let R=J;return R>=s.maxTextures&&he("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,R}function rt(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function St(R,x){let Z=n.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){let nt=R.image;if(nt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(Z,R,x);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+x)}function ot(R,x){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Et(Z,R,x);return}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+x)}function gt(R,x){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Et(Z,R,x);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+x)}function _t(R,x){let Z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Z.__version!==R.version){te(Z,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+x)}let Vt={[pl]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},Ht={[xn]:i.NEAREST,[qf]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Kl]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},Ne={[Kf]:i.NEVER,[np]:i.ALWAYS,[jf]:i.LESS,[Fc]:i.LEQUAL,[Qf]:i.EQUAL,[Oc]:i.GEQUAL,[tp]:i.GREATER,[ep]:i.NOTEQUAL};function Me(R,x){if(x.type===di&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Tn||x.magFilter===Kl||x.magFilter===no||x.magFilter===Ss||x.minFilter===Tn||x.minFilter===Kl||x.minFilter===no||x.minFilter===Ss)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Vt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Vt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Vt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ht[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ht[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==no&&x.minFilter!==Ss||x.type===di&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(R,x){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",B));let nt=x.source,at=g.get(nt);at===void 0&&(at={},g.set(nt,at));let Tt=rt(x);if(Tt!==R.__cacheKey){at[Tt]===void 0&&(at[Tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),at[Tt].usedTimes++;let Rt=at[R.__cacheKey];Rt!==void 0&&(at[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&U(x)),R.__cacheKey=Tt,R.__webglTexture=at[Tt].texture}return Z}function ht(R,x,Z){return Math.floor(Math.floor(R/Z)/x)}function mt(R,x,Z,nt){let Tt=R.updateRanges;if(Tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,Z,nt,x.data);else{Tt.sort((jt,Ot)=>jt.start-Ot.start);let Rt=0;for(let jt=1;jt<Tt.length;jt++){let Ot=Tt[Rt],Ct=Tt[jt],Jt=Ot.start+Ot.count,re=ht(Ct.start,x.width,4),xe=ht(Ot.start,x.width,4);Ct.start<=Jt+1&&re===xe&&ht(Ct.start+Ct.count-1,x.width,4)===re?Ot.count=Math.max(Ot.count,Ct.start+Ct.count-Ot.start):(++Rt,Tt[Rt]=Ct)}Tt.length=Rt+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let jt=0,Ot=Tt.length;jt<Ot;jt++){let Ct=Tt[jt],Jt=Math.floor(Ct.start/4),re=Math.ceil(Ct.count/4),xe=Jt%x.width,q=Math.floor(Jt/x.width),Dt=re,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,xe,q,Dt,ft,Z,nt,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function Et(R,x,Z){let nt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=i.TEXTURE_3D);let at=Ae(R,x),Tt=x.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+Z);let Rt=n.get(Tt);if(Tt.version!==Rt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ft=Re.getPrimaries(Re.workingColorSpace),At=x.colorSpace===is?null:Re.getPrimaries(x.colorSpace),Pt=x.colorSpace===is||ft===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let pt=p(x.image,!1,s.maxTextureSize);pt=Ie(x,pt);let Ut=r.convert(x.format,x.colorSpace),jt=r.convert(x.type),Ot=E(x.internalFormat,Ut,jt,x.normalized,x.colorSpace,x.isVideoTexture);Me(nt,x);let Ct,Jt=x.mipmaps,re=x.isVideoTexture!==!0,xe=Rt.__version===void 0||at===!0,q=Tt.dataReady,Dt=I(x,pt);if(x.isDepthTexture)Ot=b(x.format===Ms,x.type),xe&&(re?e.texStorage2D(i.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Ut,jt,null));else if(x.isDataTexture)if(Jt.length>0){re&&xe&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Jt[0].width,Jt[0].height);for(let ft=0,At=Jt.length;ft<At;ft++)Ct=Jt[ft],re?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,Ut,jt,Ct.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ct.width,Ct.height,0,Ut,jt,Ct.data);x.generateMipmaps=!1}else re?(xe&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,pt.width,pt.height),q&&mt(x,pt,Ut,jt)):e.texImage2D(i.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Ut,jt,pt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,Jt[0].width,Jt[0].height,pt.depth);for(let ft=0,At=Jt.length;ft<At;ft++)if(Ct=Jt[ft],x.format!==fi)if(Ut!==null)if(re){if(q)if(x.layerUpdates.size>0){let Pt=Du(Ct.width,Ct.height,x.format,x.type);for(let xt of x.layerUpdates){let Qt=Ct.data.subarray(xt*Pt/Ct.data.BYTES_PER_ELEMENT,(xt+1)*Pt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,xt,Ct.width,Ct.height,1,Ut,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ct.width,Ct.height,pt.depth,Ut,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Ct.width,Ct.height,pt.depth,0,Ct.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ct.width,Ct.height,pt.depth,Ut,jt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Ct.width,Ct.height,pt.depth,0,Ut,jt,Ct.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&xe&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Jt[0].width,Jt[0].height);for(let ft=0,At=Jt.length;ft<At;ft++)Ct=Jt[ft],x.format!==fi?Ut!==null?re?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,Ut,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ot,Ct.width,Ct.height,0,Ct.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,Ut,jt,Ct.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ct.width,Ct.height,0,Ut,jt,Ct.data)}else if(x.isDataArrayTexture)if(re){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,pt.width,pt.height,pt.depth),q)if(x.layerUpdates.size>0){let ft=Du(pt.width,pt.height,x.format,x.type);for(let At of x.layerUpdates){let Pt=pt.data.subarray(At*ft/pt.data.BYTES_PER_ELEMENT,(At+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,pt.width,pt.height,1,Ut,jt,Pt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ut,jt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,Ut,jt,pt.data);else if(x.isData3DTexture)re?(xe&&e.texStorage3D(i.TEXTURE_3D,Dt,Ot,pt.width,pt.height,pt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ut,jt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,Ut,jt,pt.data);else if(x.isFramebufferTexture){if(xe)if(re)e.texStorage2D(i.TEXTURE_2D,Dt,Ot,pt.width,pt.height);else{let ft=pt.width,At=pt.height;for(let Pt=0;Pt<Dt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Ot,ft,At,0,Ut,jt,null),ft>>=1,At>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),pt.parentNode!==ft){ft.appendChild(pt),m.add(x),ft.onpaint=At=>{let Pt=At.changedElements;for(let xt of m)Pt.includes(xt.image)&&(xt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let Pt=i.RGBA,xt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,xt,Qt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(re&&xe){let ft=Yt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,ft.width,ft.height)}for(let ft=0,At=Jt.length;ft<At;ft++)Ct=Jt[ft],re?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ut,jt,Ct):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ut,jt,Ct);x.generateMipmaps=!1}else if(re){if(xe){let ft=Yt(pt);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,ft.width,ft.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,jt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Ut,jt,pt);d(x)&&D(nt),Rt.__version=Tt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function te(R,x,Z){if(x.image.length!==6)return;let nt=Ae(R,x),at=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Z);let Tt=n.get(at);if(at.version!==Tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+Z);let Rt=Re.getPrimaries(Re.workingColorSpace),ct=x.colorSpace===is?null:Re.getPrimaries(x.colorSpace),pt=x.colorSpace===is||Rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ut=x.isCompressedTexture||x.image[0].isCompressedTexture,jt=x.image[0]&&x.image[0].isDataTexture,Ot=[];for(let xt=0;xt<6;xt++)!Ut&&!jt?Ot[xt]=p(x.image[xt],!0,s.maxCubemapSize):Ot[xt]=jt?x.image[xt].image:x.image[xt],Ot[xt]=Ie(x,Ot[xt]);let Ct=Ot[0],Jt=r.convert(x.format,x.colorSpace),re=r.convert(x.type),xe=E(x.internalFormat,Jt,re,x.normalized,x.colorSpace),q=x.isVideoTexture!==!0,Dt=Tt.__version===void 0||nt===!0,ft=at.dataReady,At=I(x,Ct);Me(i.TEXTURE_CUBE_MAP,x);let Pt;if(Ut){q&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,xe,Ct.width,Ct.height);for(let xt=0;xt<6;xt++){Pt=Ot[xt].mipmaps;for(let Qt=0;Qt<Pt.length;Qt++){let Zt=Pt[Qt];x.format!==fi?Jt!==null?q?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,0,0,Zt.width,Zt.height,Jt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,xe,Zt.width,Zt.height,0,Zt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,0,0,Zt.width,Zt.height,Jt,re,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt,xe,Zt.width,Zt.height,0,Jt,re,Zt.data)}}}else{if(Pt=x.mipmaps,q&&Dt){Pt.length>0&&At++;let xt=Yt(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,xe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(jt){q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ot[xt].width,Ot[xt].height,Jt,re,Ot[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,xe,Ot[xt].width,Ot[xt].height,0,Jt,re,Ot[xt].data);for(let Qt=0;Qt<Pt.length;Qt++){let Be=Pt[Qt].image[xt].image;q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,0,0,Be.width,Be.height,Jt,re,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,xe,Be.width,Be.height,0,Jt,re,Be.data)}}else{q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Jt,re,Ot[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,xe,Jt,re,Ot[xt]);for(let Qt=0;Qt<Pt.length;Qt++){let Zt=Pt[Qt];q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,0,0,Jt,re,Zt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Qt+1,xe,Jt,re,Zt.image[xt])}}}d(x)&&D(i.TEXTURE_CUBE_MAP),Tt.__version=at.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function zt(R,x,Z,nt,at,Tt){let Rt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),pt=E(Z.internalFormat,Rt,ct,Z.normalized,Z.colorSpace),Ut=n.get(x),jt=n.get(Z);if(jt.__renderTarget=x,!Ut.__hasExternalTextures){let Ot=Math.max(1,x.width>>Tt),Ct=Math.max(1,x.height>>Tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,Tt,pt,Ot,Ct,x.depth,0,Rt,ct,null):e.texImage2D(at,Tt,pt,Ot,Ct,0,Rt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ie(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,at,jt.__webglTexture,0,se(x)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,at,jt.__webglTexture,Tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,x,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let nt=x.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,Tt=b(x.stencilBuffer,at),Rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(x),Tt,x.width,x.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(x),Tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{let nt=x.textures;for(let at=0;at<nt.length;at++){let Tt=nt[at],Rt=r.convert(Tt.format,Tt.colorSpace),ct=r.convert(Tt.type),pt=E(Tt.internalFormat,Rt,ct,Tt.normalized,Tt.colorSpace);ie(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(x),pt,x.width,x.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(x),pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(R,x,Z){let nt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(x.depthTexture);if(at.__renderTarget=x,(!at.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),nt){if(at.__webglInit===void 0&&(at.__webglInit=!0,x.depthTexture.addEventListener("dispose",B)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Me(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ut=r.convert(x.depthTexture.format),jt=r.convert(x.depthTexture.type),Ot;x.depthTexture.format===Li?Ot=i.DEPTH_COMPONENT24:x.depthTexture.format===Ms&&(Ot=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Ot,x.width,x.height,0,Ut,jt,null)}}else St(x.depthTexture,0);let Tt=at.__webglTexture,Rt=se(x),ct=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,pt=x.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Li)ie(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ct,Tt,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ct,Tt,0);else if(x.depthTexture.format===Ms)ie(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ct,Tt,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ct,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){let x=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let nt=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),nt){let at=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),x.__depthDisposeCallback=at}x.__boundDepthTexture=nt}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(Z)for(let nt=0;nt<6;nt++)de(x.__webglFramebuffer[nt],R,nt);else{let nt=R.texture.mipmaps;nt&&nt.length>0?de(x.__webglFramebuffer[0],R,0):de(x.__webglFramebuffer,R,0)}else if(Z){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]===void 0)x.__webglDepthbuffer[nt]=i.createRenderbuffer(),le(x.__webglDepthbuffer[nt],R,!1);else{let at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=x.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Tt)}}else{let nt=R.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),le(x.__webglDepthbuffer,R,!1);else{let at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,x,Z){let nt=n.get(R);x!==void 0&&zt(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&it(R)}function H(R){let x=R.texture,Z=n.get(R),nt=n.get(x);R.addEventListener("dispose",M);let at=R.textures,Tt=R.isWebGLCubeRenderTarget===!0,Rt=at.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=x.version,a.memory.textures++),Tt){Z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer[ct]=[];for(let pt=0;pt<x.mipmaps.length;pt++)Z.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else Z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)Z.__webglFramebuffer[ct]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ct=0,pt=at.length;ct<pt;ct++){let Ut=n.get(at[ct]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ie(R)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){let pt=at[ct];Z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ct]);let Ut=r.convert(pt.format,pt.colorSpace),jt=r.convert(pt.type),Ot=E(pt.internalFormat,Ut,jt,pt.normalized,pt.colorSpace,R.isXRRenderTarget===!0),Ct=se(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),le(Z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Me(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)zt(Z.__webglFramebuffer[ct][pt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else zt(Z.__webglFramebuffer[ct],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);d(x)&&D(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ct=0,pt=at.length;ct<pt;ct++){let Ut=at[ct],jt=n.get(Ut),Ot=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,jt.__webglTexture),Me(Ot,Ut),zt(Z.__webglFramebuffer,R,Ut,i.COLOR_ATTACHMENT0+ct,Ot,0),d(Ut)&&D(Ot)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,nt.__webglTexture),Me(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)zt(Z.__webglFramebuffer[pt],R,x,i.COLOR_ATTACHMENT0,ct,pt);else zt(Z.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,ct,0);d(x)&&D(ct),e.unbindTexture()}R.depthBuffer&&it(R)}function wt(R){let x=R.textures;for(let Z=0,nt=x.length;Z<nt;Z++){let at=x[Z];if(d(at)){let Tt=N(R),Rt=n.get(at).__webglTexture;e.bindTexture(Tt,Rt),D(Tt),e.unbindTexture()}}}let It=[],ne=[];function Xt(R){if(R.samples>0){if(ie(R)===!1){let x=R.textures,Z=R.width,nt=R.height,at=i.COLOR_BUFFER_BIT,Tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),ct=x.length>1;if(ct)for(let Ut=0;Ut<x.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let pt=R.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ut=0;Ut<x.length;Ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ut]);let jt=n.get(x[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,at,i.NEAREST),l===!0&&(It.length=0,ne.length=0,It.push(i.COLOR_ATTACHMENT0+Ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(It.push(Tt),ne.push(Tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Ut=0;Ut<x.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ut]);let jt=n.get(x[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function se(R){return Math.min(s.maxSamples,R.samples)}function ie(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function k(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ie(R,x){let Z=R.colorSpace,nt=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==Sa&&Z!==is&&(Re.getTransfer(Z)===ke?(nt!==fi||at!==jn)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",Z)),x}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=et,this.getTextureUnits=$,this.setTextureUnits=Y,this.setTexture2D=St,this.setTexture2DArray=ot,this.setTexture3D=gt,this.setTextureCube=_t,this.rebindTextures=bt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Jy(i,t){function e(n,s=is){let r,a=Re.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return i.BYTE;if(n===yu)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===wu)return i.RGB;if(n===fi)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===io||n===so||n===ro||n===ao)if(a===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===ac||n===oc||n===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===oo||n===pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return a===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return r.COMPRESSED_R11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Mc||n===bc||n===wc||n===Ec||n===Tc||n===Ac||n===Cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Ic||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return a===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Dc||n===lo||n===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
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

}`,qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:Ky,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends Di{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,g=null,_=null,T=typeof XRWebGLBinding<"u",p=new qu,d={},D=e.getContextAttributes(),N=null,E=null,b=[],I=[],B=new Lt,M=null,P=null,U=new Fn;U.viewport=new Ve;let G=new Fn;G.viewport=new Ve;let J=[U,G],et=new ql,$=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let mt=b[ht];return mt===void 0&&(mt=new Dr,b[ht]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(ht){let mt=b[ht];return mt===void 0&&(mt=new Dr,b[ht]=mt),mt.getGripSpace()},this.getHand=function(ht){let mt=b[ht];return mt===void 0&&(mt=new Dr,b[ht]=mt),mt.getHandSpace()};function st(ht){let mt=I.indexOf(ht.inputSource);if(mt===-1)return;let Et=b[mt];Et!==void 0&&(Et.update(ht.inputSource,ht.frame,c||a),Et.dispatchEvent({type:ht.type,data:ht.inputSource}))}function rt(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",St);for(let ht=0;ht<b.length;ht++){let mt=I[ht];mt!==null&&(I[ht]=null,b[ht].disconnect(mt))}$=null,Y=null,p.reset();for(let ht in d)delete d[ht];if(t.setRenderTarget(N),g=null,u=null,m=null,s=null,E=null,Ae.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(B.width,B.height,!1),P!==null){let ht=P.camera;ht.fov=P.fov,ht.zoom=P.zoom,ht.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,n.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){o=ht,n.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ht){c=ht},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",St),D.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,te=null,zt=null;D.depth&&(zt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=D.stencil?Ms:Li,te=D.stencil?Gr:Ei);let le={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(le),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Jn(u.textureWidth,u.textureHeight,{format:fi,type:jn,depthTexture:new ps(u.textureWidth,u.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Jn(g.framebufferWidth,g.framebufferHeight,{format:fi,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function St(ht){for(let mt=0;mt<ht.removed.length;mt++){let Et=ht.removed[mt],te=I.indexOf(Et);te>=0&&(I[te]=null,b[te].disconnect(Et))}for(let mt=0;mt<ht.added.length;mt++){let Et=ht.added[mt],te=I.indexOf(Et);if(te===-1){for(let le=0;le<b.length;le++)if(le>=I.length){I.push(Et),te=le;break}else if(I[le]===null){I[le]=Et,te=le;break}if(te===-1)break}let zt=b[te];zt&&zt.connect(Et)}}let ot=new z,gt=new z;function _t(ht,mt,Et){ot.setFromMatrixPosition(mt.matrixWorld),gt.setFromMatrixPosition(Et.matrixWorld);let te=ot.distanceTo(gt),zt=mt.projectionMatrix.elements,le=Et.projectionMatrix.elements,de=zt[14]/(zt[10]-1),it=zt[14]/(zt[10]+1),bt=(zt[9]+1)/zt[5],H=(zt[9]-1)/zt[5],wt=(zt[8]-1)/zt[0],It=(le[8]+1)/le[0],ne=de*wt,Xt=de*It,se=te/(-wt+It),ie=se*-wt;if(mt.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(ie),ht.translateZ(se),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),zt[10]===-1)ht.projectionMatrix.copy(mt.projectionMatrix),ht.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let k=de+se,Ie=it+se,Yt=ne-ie,R=Xt+(te-ie),x=bt*it/Ie*k,Z=H*it/Ie*k;ht.projectionMatrix.makePerspective(Yt,R,x,Z,k,Ie),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function Vt(ht,mt){mt===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(mt.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let mt=ht.near,Et=ht.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),et.near=G.near=U.near=mt,et.far=G.far=U.far=Et,($!==et.near||Y!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),$=et.near,Y=et.far),et.layers.mask=ht.layers.mask|6,U.layers.mask=et.layers.mask&-5,G.layers.mask=et.layers.mask&-3;let te=ht.parent,zt=et.cameras;Vt(et,te);for(let le=0;le<zt.length;le++)Vt(zt[le],te);zt.length===2?_t(et,U,G):et.projectionMatrix.copy(U.projectionMatrix),P===null&&ht.isPerspectiveCamera&&(P={camera:ht,fov:ht.fov,zoom:ht.zoom}),Ht(ht,et,te)};function Ht(ht,mt,Et){Et===null?ht.matrix.copy(mt.matrixWorld):(ht.matrix.copy(Et.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(mt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(mt.projectionMatrix),ht.projectionMatrixInverse.copy(mt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=Ir*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(ht){l=ht,u!==null&&(u.fixedFoveation=ht),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ht)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(et)},this.getCameraTexture=function(ht){return d[ht]};let Ne=null;function Me(ht,mt){if(h=mt.getViewerPose(c||a),_=mt,h!==null){let Et=h.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let te=!1;Et.length!==et.cameras.length&&(et.cameras.length=0,te=!0);for(let it=0;it<Et.length;it++){let bt=Et[it],H=null;if(g!==null)H=g.getViewport(bt);else{let It=m.getViewSubImage(u,bt);H=It.viewport,it===0&&(t.setRenderTargetTextures(E,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(E))}let wt=J[it];wt===void 0&&(wt=new Fn,wt.layers.enable(it),wt.viewport=new Ve,J[it]=wt),wt.matrix.fromArray(bt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(bt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(H.x,H.y,H.width,H.height),it===0&&(et.matrix.copy(wt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),te===!0&&et.cameras.push(wt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let it=m.getDepthInformation(Et[0]);it&&it.isValid&&it.texture&&p.init(it,s.renderState)}if(zt&&zt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let it=0;it<Et.length;it++){let bt=Et[it].camera;if(bt){let H=d[bt];H||(H=new Na,d[bt]=H);let wt=m.getCameraImage(bt);H.sourceTexture=wt}}}}for(let Et=0;Et<b.length;Et++){let te=I[Et],zt=b[Et];te!==null&&zt!==void 0&&zt.update(te,mt,c||a)}Ne&&Ne(ht,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),_=null}let Ae=new Up;Ae.setAnimationLoop(Me),this.setAnimationLoop=function(ht){Ne=ht},this.dispose=function(){}}},Qy=new Ue,Vp=new ve;Vp.set(-1,0,0,0,1,0,0,0,1);function tS(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Iu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,D,N,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),m(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&g(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),T(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,D,N):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Hn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Hn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let D=t.get(d),N=D.envMap,E=D.envMapRotation;N&&(p.envMap.value=N,p.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(E)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vp),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,D,N){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*D,p.scale.value=N*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function m(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,D){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Hn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=D.texture,p.transmissionSamplerSize.value.set(D.width,D.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function T(p,d){let D=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(D.matrixWorld),p.nearDistance.value=D.shadow.camera.near,p.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eS(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let I=b.program;n.uniformBlockBinding(E,I)}function c(E,b){let I=s[E.id];I===void 0&&(p(E),I=h(E),s[E.id]=I,E.addEventListener("dispose",D));let B=b.program;n.updateUBOMapping(E,B);let M=t.render.frame;r[E.id]!==M&&(u(E),r[E.id]=M)}function h(E){let b=m();E.__bindingPointIndex=b;let I=i.createBuffer(),B=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,B,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,I),I}function m(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let b=s[E.id],I=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,P=I.length;M<P;M++){let U=I[M];if(Array.isArray(U))for(let G=0,J=U.length;G<J;G++)g(U[G],M,G,B);else g(U,M,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,b,I,B){if(T(E,b,I,B)===!0){let M=E.__offset,P=E.value;if(Array.isArray(P)){let U=0;for(let G=0;G<P.length;G++){let J=P[G],et=d(J);_(J,E.__data,U),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(U+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(P,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,E.__data)}}function _(E,b,I){typeof E=="number"||typeof E=="boolean"?b[0]=E:E.isMatrix3?(b[0]=E.elements[0],b[1]=E.elements[1],b[2]=E.elements[2],b[3]=0,b[4]=E.elements[3],b[5]=E.elements[4],b[6]=E.elements[5],b[7]=0,b[8]=E.elements[6],b[9]=E.elements[7],b[10]=E.elements[8],b[11]=0):ArrayBuffer.isView(E)?b.set(new E.constructor(E.buffer,E.byteOffset,b.length)):E.toArray(b,I)}function T(E,b,I,B){let M=E.value,P=b+"_"+I;if(B[P]===void 0)return typeof M=="number"||typeof M=="boolean"?B[P]=M:ArrayBuffer.isView(M)?B[P]=M.slice():B[P]=M.clone(),!0;{let U=B[P];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return B[P]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(U.equals(M)===!1)return U.copy(M),!0}}return!1}function p(E){let b=E.uniforms,I=0,B=16;for(let P=0,U=b.length;P<U;P++){let G=Array.isArray(b[P])?b[P]:[b[P]];for(let J=0,et=G.length;J<et;J++){let $=G[J],Y=Array.isArray($.value)?$.value:[$.value];for(let st=0,rt=Y.length;st<rt;st++){let St=Y[st],ot=d(St),gt=I%B,_t=gt%ot.boundary,Vt=gt+_t;I+=_t,Vt!==0&&B-Vt<ot.storage&&(I+=B-Vt),$.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=I,I+=ot.storage}}}let M=I%B;return M>0&&(I+=B-M),E.__size=I,E.__cache={},this}function d(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(b.boundary=16,b.storage=E.byteLength):he("WebGLRenderer: Unsupported uniform value type.",E),b}function D(E){let b=E.target;b.removeEventListener("dispose",D);let I=a.indexOf(b.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function N(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:N}}var nS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function iS(){return Bi===null&&(Bi=new Ra(nS,16,16,bs,Ti),Bi.name="DFG_LUT",Bi.minFilter=Tn,Bi.magFilter=Tn,Bi.wrapS=Ii,Bi.wrapT=Ii,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Hc=class{constructor(t={}){let{canvas:e=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=jn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let T=g,p=new Set([sc,ic,nc]),d=new Set([jn,Ei,Hr,Gr,Ql,tc]),D=new Uint32Array(4),N=new Int32Array(4),E=new z,b=null,I=null,B=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,G=!1,J=null,et=null,$=null,Y=null;this._outputColorSpace=ni;let st=0,rt=0,St=null,ot=-1,gt=null,_t=new Ve,Vt=new Ve,Ht=null,Ne=new ue(0),Me=0,Ae=e.width,ht=e.height,mt=1,Et=null,te=null,zt=new Ve(0,0,Ae,ht),le=new Ve(0,0,Ae,ht),de=!1,it=new Nr,bt=!1,H=!1,wt=new Ue,It=new z,ne=new Ve,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function ie(){return St===null?mt:1}let k=n;function Ie(y,F){return e.getContext(y,F)}let Yt,R,x,Z,nt,at,Tt,Rt,ct,pt,Ut,jt,Ot,Ct,Jt,re,xe,q,Dt,ft,At,Pt,xt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),k===null){let F="webgl2";if(k=Ie(F,y),k===null)throw Ie(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(y){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),fe("WebGLRenderer: "+y.message),y}function Qt(){Yt=new hv(k),Yt.init(),At=new Jy(k,Yt),R=new tv(k,Yt,t,At),x=new Yy(k,Yt),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),et=k.createFramebuffer(),$=k.createFramebuffer(),Y=k.createFramebuffer(),Z=new fv(k),nt=new Ny,at=new Zy(k,Yt,x,nt,R,At,Z),Tt=new cv(U),Rt=new m0(k),Pt=new jx(k,Rt),ct=new uv(k,Rt,Z,Pt),pt=new mv(k,ct,Rt,Pt,Z),q=new pv(k,R,at),Jt=new ev(nt),Ut=new Dy(U,Tt,Yt,R,Pt,Jt),jt=new tS(U,nt),Ot=new Fy,Ct=new Hy(Yt),xe=new Kx(U,Tt,x,pt,_,l),re=new qy(U,pt,R),xt=new eS(k,Z,R,x),Dt=new Qx(k,Yt,Z),ft=new dv(k,Yt,Z),Z.programs=Ut.programs,U.capabilities=R,U.extensions=Yt,U.properties=nt,U.renderLists=Ot,U.shadowMap=re,U.state=x,U.info=Z}T!==jn&&(P=new _v(T,e.width,e.height,o,s,r));let Zt=new Yu(U,k);this.xr=Zt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let y=Yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(y){y!==void 0&&(mt=y,this.setSize(Ae,ht,!1))},this.getSize=function(y){return y.set(Ae,ht)},this.setSize=function(y,F,j=!0){if(Zt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=y,ht=F,e.width=Math.floor(y*mt),e.height=Math.floor(F*mt),j===!0&&(e.style.width=y+"px",e.style.height=F+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Ae*mt,ht*mt).floor()},this.setDrawingBufferSize=function(y,F,j){Ae=y,ht=F,mt=j,e.width=Math.floor(y*j),e.height=Math.floor(F*j),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(T===jn){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(_t)},this.getViewport=function(y){return y.copy(zt)},this.setViewport=function(y,F,j,Q){y.isVector4?zt.set(y.x,y.y,y.z,y.w):zt.set(y,F,j,Q),x.viewport(_t.copy(zt).multiplyScalar(mt).round())},this.getScissor=function(y){return y.copy(le)},this.setScissor=function(y,F,j,Q){y.isVector4?le.set(y.x,y.y,y.z,y.w):le.set(y,F,j,Q),x.scissor(Vt.copy(le).multiplyScalar(mt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(y){x.setScissorTest(de=y)},this.setOpaqueSort=function(y){Et=y},this.setTransparentSort=function(y){te=y},this.getClearColor=function(y){return y.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,j=!0){let Q=0;if(y){let tt=!1;if(St!==null){let Bt=St.texture.format;tt=p.has(Bt)}if(tt){let Bt=St.texture.type,Gt=d.has(Bt),Nt=xe.getClearColor(),qt=xe.getClearAlpha(),Wt=Nt.r,be=Nt.g,Ee=Nt.b;Gt?(D[0]=Wt,D[1]=be,D[2]=Ee,D[3]=qt,k.clearBufferuiv(k.COLOR,0,D)):(N[0]=Wt,N[1]=be,N[2]=Ee,N[3]=qt,k.clearBufferiv(k.COLOR,0,N))}else Q|=k.COLOR_BUFFER_BIT}F&&(Q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),J=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),xe.dispose(),Ot.dispose(),Ct.dispose(),nt.dispose(),Tt.dispose(),pt.dispose(),Pt.dispose(),xt.dispose(),Ut.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Qr),Zt.removeEventListener("sessionend",rr),Ai.stop()};function Be(y){y.preventDefault(),wa("WebGLRenderer: Context Lost."),G=!0}function Fe(){wa("WebGLRenderer: Context Restored."),G=!1;let y=Z.autoReset,F=re.enabled,j=re.autoUpdate,Q=re.needsUpdate,tt=re.type;Qt(),Z.autoReset=y,re.enabled=F,re.autoUpdate=j,re.needsUpdate=Q,re.type=tt}function Mn(y){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ai(y){let F=y.target;F.removeEventListener("dispose",ai),jr(F)}function jr(y){Xi(y),nt.remove(y)}function Xi(y){let F=nt.get(y).programs;F!==void 0&&(F.forEach(function(j){Ut.releaseProgram(j)}),y.isShaderMaterial&&Ut.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,j,Q,tt,Bt){F===null&&(F=Xt);let Gt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Nt=tn(y,F,j,Q,tt);x.setMaterial(Q,Gt);let qt=j.index,Wt=1;if(Q.wireframe===!0){if(qt=ct.getWireframeAttribute(j),qt===void 0)return;Wt=2}let be=j.drawRange,Ee=j.attributes.position,Kt=be.start*Wt,Oe=(be.start+be.count)*Wt;Bt!==null&&(Kt=Math.max(Kt,Bt.start*Wt),Oe=Math.min(Oe,(Bt.start+Bt.count)*Wt)),qt!==null?(Kt=Math.max(Kt,0),Oe=Math.min(Oe,qt.count)):Ee!=null&&(Kt=Math.max(Kt,0),Oe=Math.min(Oe,Ee.count));let en=Oe-Kt;if(en<0||en===1/0)return;Pt.setup(tt,Q,Nt,j,qt);let qe,ze=Dt;if(qt!==null&&(qe=Rt.get(qt),ze=ft,ze.setIndex(qe)),tt.isMesh)Q.wireframe===!0?(x.setLineWidth(Q.wireframeLinewidth*ie()),ze.setMode(k.LINES)):ze.setMode(k.TRIANGLES);else if(tt.isLine){let me=Q.linewidth;me===void 0&&(me=1),x.setLineWidth(me*ie()),tt.isLineSegments?ze.setMode(k.LINES):tt.isLineLoop?ze.setMode(k.LINE_LOOP):ze.setMode(k.LINE_STRIP)}else tt.isPoints?ze.setMode(k.POINTS):tt.isSprite&&ze.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))ze.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let me=tt._multiDrawStarts,$t=tt._multiDrawCounts,ln=tt._multiDrawCount,Pe=qt?Rt.get(qt).bytesPerElement:1,Pn=nt.get(Q).currentProgram.getUniforms();for(let gn=0;gn<ln;gn++)Pn.setValue(k,"_gl_DrawID",gn),ze.render(me[gn]/Pe,$t[gn])}else if(tt.isInstancedMesh)ze.renderInstances(Kt,en,tt.count);else if(j.isInstancedBufferGeometry){let me=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,$t=Math.min(j.instanceCount,me);ze.renderInstances(Kt,en,$t)}else ze.render(Kt,en)};function As(y,F,j,Q){J!==null&&y.isNodeMaterial&&J.setObject(Q,y),bt===!0&&Jt.setState(y,j,!1),y.transparent===!0&&y.side===Fi&&y.forceSinglePass===!1?(y.side=Hn,y.needsUpdate=!0,Rs(y,F,Q),y.side=vs,y.needsUpdate=!0,Rs(y,F,Q),y.side=Fi):Rs(y,F,Q)}this.compile=function(y,F,j=null){j===null&&(j=y),J!==null&&J.renderStart(y,F,j),I=Ct.get(j),I.init(F),M.push(I),j.traverseVisible(function(tt){tt.isLight&&tt.layers.test(F.layers)&&(I.pushLight(tt),tt.castShadow&&I.pushShadow(tt))}),y!==j&&y.traverseVisible(function(tt){tt.isLight&&tt.layers.test(F.layers)&&(I.pushLight(tt),tt.castShadow&&I.pushShadow(tt))}),I.setupLights(),J!==null&&J.updateLights(I.state.lightsArray),H=this.localClippingEnabled,bt=Jt.init(this.clippingPlanes,H),bt===!0&&Jt.setGlobalState(this.clippingPlanes,F),J!==null&&re.render(I.state.shadowsArray,j,F);let Q=new Set;return y.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Bt=tt.material;if(Bt)if(Array.isArray(Bt))for(let Gt=0;Gt<Bt.length;Gt++){let Nt=Bt[Gt];As(Nt,j,F,tt),Q.add(Nt)}else As(Bt,j,F,tt),Q.add(Bt)}),I=M.pop(),J!==null&&J.renderEnd(),Q},this.compileAsync=function(y,F,j=null){let Q=this.compile(y,F,j);return new Promise(tt=>{function Bt(){if(Q.forEach(function(Gt){let qt=nt.get(Gt).currentProgram;(qt===void 0||qt.isReady())&&Q.delete(Gt)}),Q.size===0){tt(y);return}setTimeout(Bt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let sr=null;function yo(y){sr&&sr(y)}function Qr(){Ai.stop()}function rr(){Ai.start()}let Ai=new Up;Ai.setAnimationLoop(yo),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(y){sr=y,Zt.setAnimationLoop(y),y===null?Ai.stop():Ai.start()},Zt.addEventListener("sessionstart",Qr),Zt.addEventListener("sessionend",rr),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;J!==null&&J.renderStart(y,F);let j=Zt.enabled===!0&&Zt.isPresenting===!0,Q=P!==null&&(St===null||j)&&P.begin(U,St);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(F),F=Zt.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,F,St),I=Ct.get(y,M.length),I.init(F),I.state.textureUnits=at.getTextureUnits(),M.push(I),wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),it.setFromProjectionMatrix(wt,Si,F.reversedDepth),H=this.localClippingEnabled,bt=Jt.init(this.clippingPlanes,H),b=Ot.get(y,B.length),b.init(),B.push(b),Zt.enabled===!0&&Zt.isPresenting===!0){let Gt=U.xr.getDepthSensingMesh();Gt!==null&&ar(Gt,F,-1/0,U.sortObjects)}ar(y,F,0,U.sortObjects),b.finish(),J!==null&&J.updateLights(I.state.lightsArray),U.sortObjects===!0&&b.sort(Et,te),se=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,se&&xe.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Jt.beginShadows();let tt=I.state.shadowsArray;if(re.render(tt,y,F),bt===!0&&Jt.endShadows(),(Q&&P.hasRenderPass())===!1){let Gt=b.opaque,Nt=b.transmissive;if(I.setupLights(),F.isArrayCamera){let qt=F.cameras;if(Nt.length>0)for(let Wt=0,be=qt.length;Wt<be;Wt++){let Ee=qt[Wt];ta(Gt,Nt,y,Ee)}se&&xe.render(y);for(let Wt=0,be=qt.length;Wt<be;Wt++){let Ee=qt[Wt];Cs(b,y,Ee,Ee.viewport)}}else Nt.length>0&&ta(Gt,Nt,y,F),se&&xe.render(y),Cs(b,y,F)}St!==null&&rt===0&&(at.updateMultisampleRenderTarget(St),at.updateRenderTargetMipmap(St)),Q&&P.end(U),y.isScene===!0&&y.onAfterRender(U,y,F),Pt.resetDefaultState(),ot=-1,gt=null,M.pop(),M.length>0?(I=M[M.length-1],at.setTextureUnits(I.state.textureUnits),bt===!0&&Jt.setGlobalState(U.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?b=B[B.length-1]:b=null,J!==null&&J.renderEnd()};function ar(y,F,j,Q){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)I.pushLightProbeGrid(y);else if(y.isLight)I.pushLight(y),y.castShadow&&I.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(it)){Q&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(wt);let Gt=pt.update(y),Nt=y.material;Nt.visible&&b.push(y,Gt,Nt,j,ne.z,null,F)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(it))){let Gt=pt.update(y),Nt=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ne.copy(Gt.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(wt)),Array.isArray(Nt)){let qt=Gt.groups;for(let Wt=0,be=qt.length;Wt<be;Wt++){let Ee=qt[Wt],Kt=Nt[Ee.materialIndex];Kt&&Kt.visible&&b.push(y,Gt,Kt,j,ne.z,Ee,F)}}else Nt.visible&&b.push(y,Gt,Nt,j,ne.z,null,F)}}let Bt=y.children;for(let Gt=0,Nt=Bt.length;Gt<Nt;Gt++)ar(Bt[Gt],F,j,Q)}function Cs(y,F,j,Q){let{opaque:tt,transmissive:Bt,transparent:Gt}=y;I.setupLightsView(j),bt===!0&&Jt.setGlobalState(U.clippingPlanes,j),Q&&x.viewport(_t.copy(Q)),tt.length>0&&or(tt,F,j),Bt.length>0&&or(Bt,F,j),Gt.length>0&&or(Gt,F,j),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ta(y,F,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Q.id]===void 0){let Kt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Q.id]=new Jn(1,1,{generateMipmaps:!0,type:Kt?Ti:jn,minFilter:Ss,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let Bt=I.state.transmissionRenderTarget[Q.id],Gt=Q.viewport||_t;Bt.setSize(Gt.z*U.transmissionResolutionScale,Gt.w*U.transmissionResolutionScale);let Nt=U.getRenderTarget(),qt=U.getActiveCubeFace(),Wt=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor(Ne),Me=U.getClearAlpha(),Me<1&&U.setClearColor(16777215,.5),U.clear(),se&&xe.render(j);let be=U.toneMapping;U.toneMapping=wi;let Ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),I.setupLightsView(Q),bt===!0&&Jt.setGlobalState(U.clippingPlanes,Q),or(y,j,Q),at.updateMultisampleRenderTarget(Bt),at.updateRenderTargetMipmap(Bt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Oe=0,en=F.length;Oe<en;Oe++){let qe=F[Oe],{object:ze,geometry:me,material:$t,group:ln}=qe;if($t.side===Fi&&ze.layers.test(Q.layers)){let Pe=$t.side;$t.side=Hn,$t.needsUpdate=!0,So(ze,j,Q,me,$t,ln),$t.side=Pe,$t.needsUpdate=!0,Kt=!0}}Kt===!0&&(at.updateMultisampleRenderTarget(Bt),at.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Nt,qt,Wt),U.setClearColor(Ne,Me),Ee!==void 0&&(Q.viewport=Ee),U.toneMapping=be}function or(y,F,j){let Q=F.isScene===!0?F.overrideMaterial:null;for(let tt=0,Bt=y.length;tt<Bt;tt++){let Gt=y[tt],{object:Nt,geometry:qt,group:Wt}=Gt,be=Gt.material;be.allowOverride===!0&&Q!==null&&(be=Q),Nt.layers.test(j.layers)&&So(Nt,F,j,qt,be,Wt)}}function So(y,F,j,Q,tt,Bt){J!==null&&tt.isNodeMaterial&&J.setObject(y,tt),y.onBeforeRender(U,F,j,Q,tt,Bt),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),tt.onBeforeRender(U,F,j,Q,y,Bt),tt.transparent===!0&&tt.side===Fi&&tt.forceSinglePass===!1?(tt.side=Hn,tt.needsUpdate=!0,U.renderBufferDirect(j,F,Q,tt,y,Bt),tt.side=vs,tt.needsUpdate=!0,U.renderBufferDirect(j,F,Q,tt,y,Bt),tt.side=Fi):U.renderBufferDirect(j,F,Q,tt,y,Bt),y.onAfterRender(U,F,j,Q,tt,Bt)}function Rs(y,F,j){F.isScene!==!0&&(F=Xt);let Q=nt.get(y),tt=I.state.lights,Bt=I.state.shadowsArray,Gt=tt.state.version,Nt=Ut.getParameters(y,tt.state,Bt,F,j,I.state.lightProbeGridArray),qt=Ut.getProgramCacheKey(Nt),Wt=Q.programs;Q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,Q.fog=F.fog;let be=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Q.envMap=Tt.get(y.envMap||Q.environment,be),Q.envMapRotation=Q.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Wt===void 0&&(y.addEventListener("dispose",ai),Wt=new Map,Q.programs=Wt);let Ee=Wt.get(qt);if(Ee!==void 0){if(Q.currentProgram===Ee&&Q.lightsStateVersion===Gt)return $n(y,Nt),Ee}else Nt.uniforms=Ut.getUniforms(y),J!==null&&y.isNodeMaterial&&J.build(y,j,Nt),y.onBeforeCompile(Nt,U),Ee=Ut.acquireProgram(Nt,qt),Wt.set(qt,Ee),Q.uniforms=Nt.uniforms;let Kt=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Kt.clippingPlanes=Jt.uniform),$n(y,Nt),Q.needsLights=pi(y),Q.lightsStateVersion=Gt,Q.needsLights&&(Kt.ambientLightColor.value=tt.state.ambient,Kt.lightProbe.value=tt.state.probe,Kt.sunLights.value=tt.state.sun,Kt.sunLightShadows.value=tt.state.sunShadow,Kt.directionalLights.value=tt.state.directional,Kt.directionalLightShadows.value=tt.state.directionalShadow,Kt.spotLights.value=tt.state.spot,Kt.spotLightShadows.value=tt.state.spotShadow,Kt.rectAreaLights.value=tt.state.rectArea,Kt.ltc_1.value=tt.state.rectAreaLTC1,Kt.ltc_2.value=tt.state.rectAreaLTC2,Kt.pointLights.value=tt.state.point,Kt.pointLightShadows.value=tt.state.pointShadow,Kt.hemisphereLights.value=tt.state.hemi,Kt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Kt.sunShadowCascade.value=tt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=tt.state.spotLightMatrix,Kt.spotLightMap.value=tt.state.spotLightMap,Kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.lightProbeGrid=I.state.lightProbeGridArray.length>0,Q.currentProgram=Ee,Q.uniformsList=null,Ee}function Mo(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=Xr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function $n(y,F){let j=nt.get(y);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function dn(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;E.setFromMatrixPosition(F.matrixWorld);for(let j=0,Q=y.length;j<Q;j++){let tt=y[j];if(tt.texture!==null&&tt.boundingBox.containsPoint(E))return tt}return null}function tn(y,F,j,Q,tt){F.isScene!==!0&&(F=Xt),at.resetTextureUnits();let Bt=F.fog,Gt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?F.environment:null,Nt=St===null?U.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Re.workingColorSpace,qt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Wt=Tt.get(Q.envMap||Gt,qt),be=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ee=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Kt=!!j.morphAttributes.position,Oe=!!j.morphAttributes.normal,en=!!j.morphAttributes.color,qe=wi;Q.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(qe=U.toneMapping);let ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=ze!==void 0?ze.length:0,$t=nt.get(Q),ln=I.state.lights;if(bt===!0&&(H===!0||y!==gt)){let We=y===gt&&Q.id===ot;Jt.setState(Q,y,We)}let Pe=!1;Q.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ln.state.version||$t.outputColorSpace!==Nt||tt.isBatchedMesh&&$t.batching===!1||!tt.isBatchedMesh&&$t.batching===!0||tt.isBatchedMesh&&$t.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&$t.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&$t.instancing===!1||!tt.isInstancedMesh&&$t.instancing===!0||tt.isSkinnedMesh&&$t.skinning===!1||!tt.isSkinnedMesh&&$t.skinning===!0||tt.isInstancedMesh&&$t.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&$t.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&$t.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&$t.instancingMorph===!1&&tt.morphTexture!==null||$t.envMap!==Wt||Q.fog===!0&&$t.fog!==Bt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Jt.numPlanes||$t.numIntersection!==Jt.numIntersection)||$t.vertexAlphas!==be||$t.vertexTangents!==Ee||$t.morphTargets!==Kt||$t.morphNormals!==Oe||$t.morphColors!==en||$t.toneMapping!==qe||$t.morphTargetsCount!==me||!!$t.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,$t.__version=Q.version);let Pn=$t.currentProgram;Pe===!0&&(Pn=Rs(Q,F,tt),J&&Q.isNodeMaterial&&J.onUpdateProgram(Q,Pn,$t));let gn=!1,bn=!1,qi=!1,Ce=Pn.getUniforms(),Ye=$t.uniforms;if(x.useProgram(Pn.program)&&(gn=!0,bn=!0,qi=!0),Q.id!==ot&&(ot=Q.id,bn=!0),$t.needsLights){let We=dn(I.state.lightProbeGridArray,tt);$t.lightProbeGrid!==We&&($t.lightProbeGrid=We,bn=!0)}if(gn||gt!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ce.setValue(k,"projectionMatrix",y.projectionMatrix),Ce.setValue(k,"viewMatrix",y.matrixWorldInverse);let nn=Ce.map.cameraPosition;nn!==void 0&&nn.setValue(k,It.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&Ce.setValue(k,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ce.setValue(k,"isOrthographic",y.isOrthographicCamera===!0),gt!==y&&(gt=y,bn=!0,qi=!0)}if($t.needsLights&&(ln.state.sunShadowMap.length>0&&Ce.setValue(k,"sunShadowMap",ln.state.sunShadowMap,at),ln.state.directionalShadowMap.length>0&&Ce.setValue(k,"directionalShadowMap",ln.state.directionalShadowMap,at),ln.state.spotShadowMap.length>0&&Ce.setValue(k,"spotShadowMap",ln.state.spotShadowMap,at),ln.state.pointShadowMap.length>0&&Ce.setValue(k,"pointShadowMap",ln.state.pointShadowMap,at)),tt.isSkinnedMesh){Ce.setOptional(k,tt,"bindMatrix"),Ce.setOptional(k,tt,"bindMatrixInverse");let We=tt.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ce.setValue(k,"boneTexture",We.boneTexture,at))}tt.isBatchedMesh&&(Ce.setOptional(k,tt,"batchingTexture"),Ce.setValue(k,"batchingTexture",tt._matricesTexture,at),Ce.setOptional(k,tt,"batchingIdTexture"),Ce.setValue(k,"batchingIdTexture",tt._indirectTexture,at),Ce.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ce.setValue(k,"batchingColorTexture",tt._colorsTexture,at));let Ci=j.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&q.update(tt,j,Pn),(bn||$t.receiveShadow!==tt.receiveShadow)&&($t.receiveShadow=tt.receiveShadow,Ce.setValue(k,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&F.environment!==null&&(Ye.envMapIntensity.value=F.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=iS()),bn){if(Ce.setValue(k,"toneMappingExposure",U.toneMappingExposure),$t.needsLights&&Xn(Ye,qi),Bt&&Q.fog===!0&&jt.refreshFogUniforms(Ye,Bt),jt.refreshMaterialUniforms(Ye,Q,mt,ht,I.state.transmissionRenderTarget[y.id]),$t.needsLights&&$t.lightProbeGrid){let We=$t.lightProbeGrid;Ye.probesSH.value=We.texture,Ye.probesMin.value.copy(We.boundingBox.min),Ye.probesMax.value.copy(We.boundingBox.max),Ye.probesResolution.value.copy(We.resolution)}Xr.upload(k,Mo($t),Ye,at)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Xr.upload(k,Mo($t),Ye,at),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ce.setValue(k,"center",tt.center),Ce.setValue(k,"modelViewMatrix",tt.modelViewMatrix),Ce.setValue(k,"normalMatrix",tt.normalMatrix),Ce.setValue(k,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let We=Q.uniformsGroups;for(let nn=0,os=We.length;nn<os;nn++){let bo=We[nn];xt.update(bo,Pn),xt.bind(bo,Pn)}}return Pn}function Xn(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function pi(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return St},this.setRenderTargetTextures=function(y,F,j){let Q=nt.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),nt.get(y.texture).__webglTexture=F,nt.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:j,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let j=nt.get(y);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,j=0){St=y,st=F,rt=j;let Q=null,tt=!1,Bt=!1;if(y){let Nt=nt.get(y);if(Nt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(k.FRAMEBUFFER,Nt.__webglFramebuffer),_t.copy(y.viewport),Vt.copy(y.scissor),Ht=y.scissorTest,x.viewport(_t),x.scissor(Vt),x.setScissorTest(Ht),ot=-1;return}else if(Nt.__webglFramebuffer===void 0)at.setupRenderTarget(y);else if(Nt.__hasExternalTextures)at.rebindTextures(y,nt.get(y.texture).__webglTexture,nt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let be=y.depthTexture;if(Nt.__boundDepthTexture!==be){if(be!==null&&nt.has(be)&&(y.width!==be.image.width||y.height!==be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(y)}}let qt=y.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Bt=!0);let Wt=nt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?Q=Wt[F][j]:Q=Wt[F],tt=!0):y.samples>0&&at.useMultisampledRTT(y)===!1?Q=nt.get(y).__webglMultisampledFramebuffer:Array.isArray(Wt)?Q=Wt[j]:Q=Wt,_t.copy(y.viewport),Vt.copy(y.scissor),Ht=y.scissorTest}else _t.copy(zt).multiplyScalar(mt).floor(),Vt.copy(le).multiplyScalar(mt).floor(),Ht=de;if(j!==0&&(Q=et),x.bindFramebuffer(k.FRAMEBUFFER,Q)&&x.drawBuffers(y,Q),x.viewport(_t),x.scissor(Vt),x.setScissorTest(Ht),tt){let Nt=nt.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Nt.__webglTexture,j)}else if(Bt){let Nt=F;for(let qt=0;qt<y.textures.length;qt++){let Wt=nt.get(y.textures[qt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+qt,Wt.__webglTexture,j,Nt)}}else if(y!==null&&j!==0){let Nt=nt.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nt.__webglTexture,j)}ot=-1};function fn(y){let F=nt.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=R.textureFormatReadable(y.format),F.__typeReadable=R.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,j,Q,tt,Bt,Gt,Nt=0){if(!(y&&y.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt){x.bindFramebuffer(k.FRAMEBUFFER,qt);try{let Wt=y.textures[Nt],be=Wt.format,Ee=Wt.type;y.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt);let Kt=fn(Wt);if(Kt.__formatReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-Q&&j>=0&&j<=y.height-tt&&k.readPixels(F,j,Q,tt,At.convert(be),At.convert(Ee),Bt)}finally{let Wt=St!==null?nt.get(St).__webglFramebuffer:null;x.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(y,F,j,Q,tt,Bt,Gt,Nt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt)if(F>=0&&F<=y.width-Q&&j>=0&&j<=y.height-tt){x.bindFramebuffer(k.FRAMEBUFFER,qt);let Wt=y.textures[Nt],be=Wt.format,Ee=Wt.type;y.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt);let Kt=fn(Wt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Oe),k.bufferData(k.PIXEL_PACK_BUFFER,Bt.byteLength,k.STREAM_READ),k.readPixels(F,j,Q,tt,At.convert(be),At.convert(Ee),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let en=St!==null?nt.get(St).__webglFramebuffer:null;x.bindFramebuffer(k.FRAMEBUFFER,en);let qe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await rp(k,qe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Oe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Bt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Oe),k.deleteSync(qe),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,j=0){let Q=Math.pow(2,-j),tt=Math.floor(y.image.width*Q),Bt=Math.floor(y.image.height*Q),Gt=F!==null?F.x:0,Nt=F!==null?F.y:0;at.setTexture2D(y,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,Gt,Nt,tt,Bt),x.unbindTexture()},this.copyTextureToTexture=function(y,F,j=null,Q=null,tt=0,Bt=0){let Gt,Nt,qt,Wt,be,Ee,Kt,Oe,en,qe=y.isCompressedTexture?y.mipmaps[Bt]:y.image;if(j!==null)Gt=j.max.x-j.min.x,Nt=j.max.y-j.min.y,qt=j.isBox3?j.max.z-j.min.z:1,Wt=j.min.x,be=j.min.y,Ee=j.isBox3?j.min.z:0;else{let Ye=Math.pow(2,-tt);Gt=Math.floor(qe.width*Ye),Nt=Math.floor(qe.height*Ye),y.isDataArrayTexture?qt=qe.depth:y.isData3DTexture?qt=Math.floor(qe.depth*Ye):qt=1,Wt=0,be=0,Ee=0}Q!==null?(Kt=Q.x,Oe=Q.y,en=Q.z):(Kt=0,Oe=0,en=0);let ze=At.convert(F.format),me=At.convert(F.type),$t;F.isData3DTexture?(at.setTexture3D(F,0),$t=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(at.setTexture2DArray(F,0),$t=k.TEXTURE_2D_ARRAY):(at.setTexture2D(F,0),$t=k.TEXTURE_2D),x.activeTexture(k.TEXTURE0),x.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let ln=x.getParameter(k.UNPACK_ROW_LENGTH),Pe=x.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=x.getParameter(k.UNPACK_SKIP_PIXELS),gn=x.getParameter(k.UNPACK_SKIP_ROWS),bn=x.getParameter(k.UNPACK_SKIP_IMAGES);x.pixelStorei(k.UNPACK_ROW_LENGTH,qe.width),x.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe.height),x.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),x.pixelStorei(k.UNPACK_SKIP_ROWS,be),x.pixelStorei(k.UNPACK_SKIP_IMAGES,Ee);let qi=y.isDataArrayTexture||y.isData3DTexture,Ce=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let Ye=nt.get(y),Ci=nt.get(F),We=nt.get(Ye.__renderTarget),nn=nt.get(Ci.__renderTarget);x.bindFramebuffer(k.READ_FRAMEBUFFER,We.__webglFramebuffer),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let os=0;os<qt;os++)qi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nt.get(y).__webglTexture,tt,Ee+os),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nt.get(F).__webglTexture,Bt,en+os)),k.blitFramebuffer(Wt,be,Gt,Nt,Kt,Oe,Gt,Nt,k.DEPTH_BUFFER_BIT,k.NEAREST);x.bindFramebuffer(k.READ_FRAMEBUFFER,null),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||y.isRenderTargetTexture||nt.has(y)){let Ye=nt.get(y),Ci=nt.get(F);x.bindFramebuffer(k.READ_FRAMEBUFFER,$),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,Y);for(let We=0;We<qt;We++)qi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ye.__webglTexture,tt,Ee+We):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ye.__webglTexture,tt),Ce?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ci.__webglTexture,Bt,en+We):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ci.__webglTexture,Bt),tt!==0?k.blitFramebuffer(Wt,be,Gt,Nt,Kt,Oe,Gt,Nt,k.COLOR_BUFFER_BIT,k.NEAREST):Ce?k.copyTexSubImage3D($t,Bt,Kt,Oe,en+We,Wt,be,Gt,Nt):k.copyTexSubImage2D($t,Bt,Kt,Oe,Wt,be,Gt,Nt);x.bindFramebuffer(k.READ_FRAMEBUFFER,null),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ce?y.isDataTexture||y.isData3DTexture?k.texSubImage3D($t,Bt,Kt,Oe,en,Gt,Nt,qt,ze,me,qe.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D($t,Bt,Kt,Oe,en,Gt,Nt,qt,ze,qe.data):k.texSubImage3D($t,Bt,Kt,Oe,en,Gt,Nt,qt,ze,me,qe):y.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Bt,Kt,Oe,Gt,Nt,ze,me,qe.data):y.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Bt,Kt,Oe,qe.width,qe.height,ze,qe.data):k.texSubImage2D(k.TEXTURE_2D,Bt,Kt,Oe,Gt,Nt,ze,me,qe);x.pixelStorei(k.UNPACK_ROW_LENGTH,ln),x.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pe),x.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),x.pixelStorei(k.UNPACK_SKIP_ROWS,gn),x.pixelStorei(k.UNPACK_SKIP_IMAGES,bn),Bt===0&&F.generateMipmaps&&k.generateMipmap($t),x.unbindTexture()},this.initRenderTarget=function(y){nt.get(y).__webglFramebuffer===void 0&&at.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?at.setTextureCube(y,0):y.isData3DTexture?at.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?at.setTexture2DArray(y,0):at.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){st=0,rt=0,St=null,x.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var Gp=new Vn,$c=new z,ss=class extends ja{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new sn(t,3)),this.setAttribute("uv",new sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new xs(e,6,1);return this.setAttribute("instanceStart",new bi(n,3,0)),this.setAttribute("instanceEnd",new bi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new xs(e,6,1);return this.setAttribute("instanceColorStart",new bi(n,3,0)),this.setAttribute("instanceColorEnd",new bi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new $a(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Gp.setFromBufferAttribute(e),this.boundingBox.union(Gp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$c.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($c)),$c.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($c));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ft.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Gn.line={uniforms:co.merge([Ft.common,Ft.fog,Ft.line]),vertexShader:`
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
		`};var zi=class extends Sn{constructor(t){super({type:"LineMaterial",uniforms:co.clone(Gn.line.uniforms),vertexShader:Gn.line.vertexShader,fragmentShader:Gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Zu=new Ve,Wp=new z,$p=new z,An=new Ve,Cn=new Ve,ki=new Ve,Ju=new z,Ku=new Ue,Rn=new Qa,Xp=new z,Xc=new Vn,qc=new Kn,Vi=new Ve,Hi,Ks;function qp(i,t,e){return Vi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Vi.multiplyScalar(1/Vi.w),Vi.x=Ks/e.width,Vi.y=Ks/e.height,Vi.applyMatrix4(i.projectionMatrixInverse),Vi.multiplyScalar(1/Vi.w),Math.abs(Math.max(Vi.x,Vi.y))}function sS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Rn.start.fromBufferAttribute(s,o),Rn.end.fromBufferAttribute(r,o),Rn.applyMatrix4(e);let c=new z,h=new z;Hi.distanceSqToSegment(Rn.start,Rn.end,h,c),h.distanceTo(c)<Ks*.5&&t.push({point:h,pointOnLine:c,distance:Hi.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function rS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),m=-t.near;Hi.at(1,ki),ki.w=1,ki.applyMatrix4(t.matrixWorldInverse),ki.applyMatrix4(n),ki.multiplyScalar(1/ki.w),ki.x*=r.x/2,ki.y*=r.y/2,ki.z=0,Ju.copy(ki),Ku.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,g=h;u<g;u++){if(An.fromBufferAttribute(l,u),Cn.fromBufferAttribute(c,u),An.w=1,Cn.w=1,An.applyMatrix4(Ku),Cn.applyMatrix4(Ku),An.z>m&&Cn.z>m)continue;if(An.z>m){let N=An.z-Cn.z,E=(An.z-m)/N;An.lerp(Cn,E)}else if(Cn.z>m){let N=Cn.z-An.z,E=(Cn.z-m)/N;Cn.lerp(An,E)}An.applyMatrix4(n),Cn.applyMatrix4(n),An.multiplyScalar(1/An.w),Cn.multiplyScalar(1/Cn.w),An.x*=r.x/2,An.y*=r.y/2,Cn.x*=r.x/2,Cn.y*=r.y/2,Rn.start.copy(An),Rn.start.z=0,Rn.end.copy(Cn),Rn.end.z=0;let T=Rn.closestPointToPointParameter(Ju,!0);Rn.at(T,Xp);let p=Cu.lerp(An.z,Cn.z,T),d=p>=-1&&p<=1,D=Ju.distanceTo(Xp)<Ks*.5;if(d&&D){Rn.start.fromBufferAttribute(l,u),Rn.end.fromBufferAttribute(c,u),Rn.start.applyMatrix4(a),Rn.end.applyMatrix4(a);let N=new z,E=new z;Hi.distanceSqToSegment(Rn.start,Rn.end,E,N),e.push({point:E,pointOnLine:N,distance:Hi.origin.distanceTo(E),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var js=class extends yn{constructor(t=new ss,e=new zi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Wp.fromBufferAttribute(e,a),$p.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Wp.distanceTo($p);let r=new xs(s,2,1);return t.setAttribute("instanceDistanceStart",new bi(r,1,0)),t.setAttribute("instanceDistanceEnd",new bi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Hi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ks=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),qc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ks*.5;else{let m=Math.max(s.near,qc.distanceToPoint(Hi.origin));c=qp(s,m,l.resolution)}if(qc.radius+=c,Hi.intersectsSphere(qc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Xc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ks*.5;else{let m=Math.max(s.near,Xc.distanceToPoint(Hi.origin));h=qp(s,m,l.resolution)}Xc.expandByScalar(h),Hi.intersectsBox(Xc)!==!1&&(n?sS(this,e):rS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Zu),this.material.uniforms.resolution.value.set(Zu.z,Zu.w))}};function Yp(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:m,list:u,clamp:g,norm:_,munis:T}=i,p=f=>document.querySelector(f),d=f=>String(f).replace(/[<>&"]/g,v=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[v]),D=(f,v)=>[(f-l)*o,(v-c)*o],N=.06,E=t.segs.map(f=>{let v=[],w=[0];for(let A=0;A<f.length;A+=2){let C=D(f[A],f[A+1]);v.length&&w.push(w[w.length-1]+Math.hypot(C[0]-v[v.length-1][0],C[1]-v[v.length-1][1])),v.push(C)}return{p:v,c:w,L:w[w.length-1]}}),b=t.stops.map(([f,v,w,A])=>({n:f,id:A,w:D(v,w),fams:new Set})),I=t.routes.map(([f,v,w])=>({s:f,l:v,c:w})),B=new Map;(t.bus||[]).forEach(([f,v,w,A])=>{let C={days:new Set(f),name:v,stops:w,times:A};w.forEach((L,W)=>{if(W<w.length-1){let V=B.get(L)||[];V.push([C,W]),B.set(L,V)}})});function M(f,v,w){let A=de(),C=t.days.indexOf(A.ymd),L=[];for(let[W,V]of B.get(f)||[]){if(!W.days.has(C))continue;let X=W.times[V];if(X<v||X>w)continue;let K=W.stops[W.stops.length-1];L.push({sm:X,est:X,dl:0,fam:W.name,dest:b[K].n,destId:b[K].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:W.stops.slice(V)})}return L}let P=(f,v)=>{let w=f.match(/^R([A-Z]*)(\d*)(.*)$/),A=v.match(/^R([A-Z]*)(\d*)(.*)$/);return(w[1]||"").localeCompare(A[1]||"")||(+w[2]||0)-(+A[2]||0)||w[3].localeCompare(A[3])},U=[...new Set(I.map(f=>f.s))].sort(P),G={};I.forEach(f=>{G[f.s]||(G[f.s]=f.c)});let J=t.pats.map(([f,v,w])=>({stops:f,t:v,segs:w})),et=t.trips.map(([f,v,w,A,C],L)=>({day:f,pat:J[v],fam:I[w].s,c:I[w].c,t0:A,num:C,tid:t.tids[L]})),$={};U.forEach(f=>$[f]=new Set),et.forEach(f=>{f.pat.segs.forEach(v=>$[f.fam].add(v)),f.pat.stops.forEach(v=>b[v].fams.add(f.fam))});let Y=t.days.map((f,v)=>et.filter(w=>w.day===v)),st=new Map(et.map(f=>[f.tid,f])),rt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],St=Math.PI/180,ot=3.922*St,gt=-39.705*St;function _t(f,v){let w=f*St+ot,A=v*St,C=Math.cos(gt),L=Math.sin(gt),W=Math.cos(A),V=Math.cos(w)*W,X=Math.sin(w)*W,K=Math.sin(A),lt=Math.atan2(X,V*C-K*L),S=Math.asin(K*C+V*L),O=Math.sqrt(2/(1+Math.cos(lt)*Math.cos(S))),ut=O*Math.cos(S)*Math.sin(lt),dt=O*Math.sin(S),[kt,ae,pe,vt,Mt,oe,ye]=rt;return D((ae+kt*ut-Mt)*ye,(oe-(vt-pe*dt))*ye)}let Vt=new Map(b.map((f,v)=>[f.id,v]));function Ht(f){if(f.g)return f.g;let v=[],w=[],A=[0],C=0;return f.segs.forEach((L,W)=>{let V=E[L];V.p.forEach((X,K)=>{W&&!K||(v.push(X),w.push(C+V.c[K]))}),C+=V.L,A.push(C)}),f.g={pts:v,cum:w,stopD:A}}function Ne(f,v,w,A){let C=1e18,L=0;for(let W=0;W+1<f.pts.length;W++){if(f.cum[W+1]<w||f.cum[W]>A)continue;let V=f.pts[W],X=f.pts[W+1],K=X[0]-V[0],lt=X[1]-V[1],S=K*K+lt*lt||1e-9,O=Math.max(0,Math.min(1,((v[0]-V[0])*K+(v[1]-V[1])*lt)/S)),ut=V[0]+K*O-v[0],dt=V[1]+lt*O-v[1],kt=ut*ut+dt*dt;kt<C&&(C=kt,L=f.cum[W]+O*(f.cum[W+1]-f.cum[W]))}return{d:L,err:Math.sqrt(C)}}function Me(f,v){let w=0,A=f.cum.length-1;if(v<=0)return f.pts[0];if(v>=f.cum[A])return f.pts[A];for(;A-w>1;){let V=w+A>>1;f.cum[V]<=v?w=V:A=V}let C=(v-f.cum[w])/(f.cum[A]-f.cum[w]||1),L=f.pts[w],W=f.pts[A];return[L[0]+(W[0]-L[0])*C,L[1]+(W[1]-L[1])*C]}let Ae=f=>`${f.slice(6,8)}/${f.slice(4,6)}`,ht=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function mt(f){let v={};return ht.formatToParts(f).forEach(w=>v[w.type]=w.value),{ymd:v.year+v.month+v.day,min:+v.hour*60+ +v.minute+ +v.second/60}}let Et=0,te=null,zt=0,le=0;function de(){let f=mt(new Date);if(Et===0&&te==null)return{...f,live:!0};let v=te==null?f.min:zt+(Et?(performance.now()-le)/6e4*Et:0);return{ymd:f.ymd,min:v,live:!1}}let it=f=>(f=(Math.round(f)%1440+1440)%1440,String(Math.floor(f/60)).padStart(2,"0")+":"+String(f%60).padStart(2,"0")),bt="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let f=new URLSearchParams(location.search).get("rt");f&&localStorage.setItem("rod_rt",f);let v=localStorage.getItem("rod_rt");v&&/jhmuyo\.workers\.dev/.test(v)&&(v=bt,localStorage.setItem("rod_rt",v)),H.url=v||bt}catch{H.url=bt}let wt=(f,v)=>fetch(f+v,{cache:"no-store"}).then(w=>{if(!w.ok)throw new Error("HTTP "+w.status);return w.json()}),It=f=>/^51/.test(f||"");async function ne(){if(!H.url){se();return}let f=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&wt(f,"/reports.json").then(X=>{X&&Array.isArray(X.items)?(H.rep=X.items,H.repSkew=(X.now||Date.now())-Date.now(),X.tipos&&(H.tipos=X.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let v=!H.adifAt||Date.now()-H.adifAt>11e4,[w,A,C,L,W]=await Promise.allSettled([wt(f,"/trip_updates.json"),wt(f,"/vehicle_positions.json"),wt(f,"/alerts.json"),wt(f,"/notices.json"),v?wt(f,"/adif.json"):Promise.reject(0)]);if(W.status==="fulfilled"&&W.value&&W.value.ok?(H.adif=W.value,H.adifAt=Date.now()):v&&(H.adifAt=Date.now()-6e4),w.status==="fulfilled"){let X=new Map,K=new Map;for(let lt of w.value.entity||[]){let S=lt.tripUpdate;if(!S||!S.trip||!It(S.trip.tripId))continue;let O=S.trip.tripId,ut=(S.stopTimeUpdate||[])[0],dt=S.delay;dt==null&&ut&&(dt=(ut.arrival||ut.departure||{}).delay),S.trip.scheduleRelationship==="CANCELED"&&(dt="X"),dt!=null&&X.set(O,dt),K.set(O,{next:ut?{sid:ut.stopId,t:+((ut.arrival||ut.departure||{}).time||0)}:null})}H.delays=X,H.tu=K,H.ok=Date.now(),H.feedTs=+((w.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=w.reason&&w.reason.message||"sin respuesta";if(A.status==="fulfilled"){let X=new Map,K=Date.now()/1e3;for(let lt of A.value.entity||[]){let S=lt.vehicle;if(!S||!S.trip||!It(S.trip.tripId)||!S.position)continue;let O=S.vehicle&&S.vehicle.label||"",ut=O.match(/PLATF\.\(([^)]+)\)/),dt=H.vp.get(S.trip.tripId),kt={tid:S.trip.tripId,w:_t(+S.position.longitude,+S.position.latitude),st:S.currentStatus||"",sid:S.stopId||"",ts:+S.timestamp||K,label:O,plat:ut?ut[1]:"",fam:(O.split("-")[0]||"").trim(),num:S.vehicle&&S.vehicle.id||""};kt.disp=dt?dt.disp:null,X.set(kt.tid,kt)}H.vp=X,H.okVP=Date.now()}let V=[];if(L.status==="fulfilled"&&Array.isArray(L.value.included)){H.okNotices=Date.now();for(let X of L.value.included){let K=new Set((X.lines||[]).map(O=>O.id).filter(O=>G[O])),lt=O=>((O||{}).es||(O||{}).ca||"").trim(),S=[lt(X.description),lt(X.title)].sort((O,ut)=>ut.length-O.length)[0];S&&V.push({id:"N"+X.externalId,fams:K,stops:new Set,txt:S,when:(X.date||"")+"T"+(X.time||""),src:"Rodalies",core:X.core||""})}}if(C.status==="fulfilled"){let X=+((C.value.header||{}).timestamp||0);if(H.alertsTs=X,Date.now()/1e3-X<6*3600)for(let K of C.value.entity||[]){let lt=K.alert;if(!lt)continue;let S=new Set,O=new Set;for(let ae of lt.informedEntity||[])(ae.routeId||"").startsWith("51")&&S.add(ae.routeId.replace(/^51T\d+/,"")),ae.stopId&&Vt.has(ae.stopId)&&O.add(Vt.get(ae.stopId));if(!S.size&&!O.size)continue;let ut=(lt.descriptionText||lt.headerText||{translation:[]}).translation||[],dt=((ut.find(ae=>ae.language==="es")||ut[0]||{}).text||"").trim(),kt=+((lt.activePeriod||[])[0]||{}).start||0;V.some(ae=>ae.txt===dt)||V.push({id:K.id,fams:S,stops:O,txt:dt,when:kt?new Date(kt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[X,K]of(H.adif.items||[]).entries()){let lt=(K.t?K.t+". ":"")+K.txt,S=new Set,O=new Set,ut=_(lt);for(let dt of lt.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))G[dt[1]]&&S.add(dt[1]);b.forEach((dt,kt)=>{dt.fams.size&&dt.n.length>4&&ut.includes(_(dt.n))&&(O.add(kt),S.size||dt.fams.forEach(ae=>S.add(ae)))}),V.some(dt=>dt.txt===lt)||V.push({id:"A"+X,fams:S,stops:O,txt:lt,when:H.adif.upd||"",src:"Adif",lvl:K.lvl})}if(L.status==="fulfilled"||C.status==="fulfilled"||H.adif){H.alerts=V.sort((X,K)=>K.when>X.when?1:-1);try{Fm()}catch{}}se(),uh(),pi=0,a()}let Xt=()=>H.okVP&&Date.now()-H.okVP<9e4;function se(){let f=p("#rtst"),v=p("#mode");if(v){let A=!!Xt()&&de().live;v.classList.toggle("on",A),v.classList.toggle("pre",!A),v.textContent=A?"En directo":ie.cur?"Repaso real":"Previsi\xF3n",v.classList.toggle("past",!!ie.cur),v.title=ie.cur?`Retrasos reales de la foto de las ${ie.cur.sn.t} (se toma una cada 15 min)`:""}if(!f)return;H.url?H.err?f.textContent="No se pudo conectar con el puente ("+H.err+"). Se usa el horario.":Xt()?f.innerHTML=`Conectado \xB7 ${H.vp.size} trenes con posici\xF3n real y ${H.delays.size} con retraso \xB7 actualizado a las ${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:f.textContent="Conectando\u2026":f.textContent=H.err||"Sin puente: trenes seg\xFAn horario oficial.";let w=p("#rturl");w&&w._shown!==H.url&&(w.value=H.url,w._shown=H.url)}p("#rtsave").onclick=()=>{let f=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(f&&!/^https?:\/\//.test(f)&&(f="https://"+f),!f){H.err="pega la direcci\xF3n de tu puente",se();return}H.url=f;try{localStorage.setItem("rod_rt",f)}catch{}H.ok=0,H.err="",se(),ne()},p("#rtoff").onclick=()=>{H.url=bt;try{localStorage.removeItem("rod_rt")}catch{}h._h="",ne()},setInterval(ne,2e4),setTimeout(ne,50);let ie={snap:null,key:""};function k(){let f=de();if(f.live||!me.hoy||!me.hoy.snaps||Et&&te==null)return null;let v=mt(new Date).min;if(f.min>v+1)return null;let w=null;for(let A of me.hoy.snaps){if(!A.d)continue;let C=wd(A.t);C<=f.min+1&&(!w||C>w.m)&&(w={m:C,sn:A})}return w&&f.min-w.m<=25?w:null}let Ie=f=>{{let C=oh(f.num);if(C&&C.cx&&de().live)return"X"}let v=ie.cur;if(v){if(v.sn.x&&v.sn.x.includes(f.tid))return"X";let C=v.sn.d[f.tid];return C??0}if(!Xt())return null;let w=H.delays.get(f.tid),A=H.vp.get(f.tid);return w==="X"?w:A&&A.pre&&A.preDl>=1?Math.max(typeof w=="number"?w:0,A.preDl*60):w??null},Yt=new Set(U);try{let f=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(f)&&f.some(v=>U.includes(v))&&(Yt.clear(),f.forEach(v=>U.includes(v)&&Yt.add(v)))}catch{}let R=new ss,x=new ss,Z=new zi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),nt=new zi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),at=new js(R,Z),Tt=new js(x,nt);Tt.renderOrder=20,at.renderOrder=21,at.frustumCulled=Tt.frustumCulled=!1,e.add(Tt,at);let Rt=!1;function ct(){if(Rt||!T.length)return;Rt=!0,e.updateMatrixWorld(!0);let f=new Xs,v=T.map(C=>C.mesh),w=new z(0,0,-1);b.forEach(C=>{f.set(new z(C.w[0],C.w[1],50),w),C.ext=!f.intersectObjects(v,!1).length});let A=(C,L)=>b.findIndex(W=>Math.hypot(W.w[0]-C[0],W.w[1]-C[1])<.05);E.forEach(C=>{let L=A(C.p[0]),W=A(C.p[C.p.length-1]),V=X=>(f.set(new z(X[0],X[1],50),w),!f.intersectObjects(v,!1).length);C.ext=(L>=0?b[L].ext:V(C.p[0]))&&(W>=0?b[W].ext:V(C.p[C.p.length-1]))})}let pt=()=>{let f=new Set(Yt.size<=2?Yt:[]);try{y&&y.fam&&f.add(y.fam)}catch{}return f},Ut="";function jt(){ct();let f=[],v=[],w=new Set,A=new ue,C=new ue("#d2d0d0"),L=pt();Ut=[...L].join();for(let W of U)if(Yt.has(W))for(let V of $[W]){if(w.has(V))continue;w.add(V);let X=E[V].p;A.set(G[W]),E[V].ext&&!L.has(W)&&A.lerp(C,.72);for(let K=0;K+1<X.length;K++)f.push(X[K][0],X[K][1],N,X[K+1][0],X[K+1][1],N),v.push(A.r,A.g,A.b,A.r,A.g,A.b)}f.length||(f.push(0,0,-50,0,0,-50),v.push(0,0,0,0,0,0)),R.setPositions(f),R.setColors(v),x.setPositions(f),a()}jt();let Ot=f=>new Sn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ue(f)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ct=new rn,Jt=b.length,re=new Float32Array(Jt*3),xe=new Float32Array(Jt*3),q=new Float32Array(Jt),Dt=new Float32Array(Jt);b.forEach((f,v)=>{re[v*3]=f.w[0],re[v*3+1]=f.w[1],re[v*3+2]=N,xe.set([1,1,1],v*3),q[v]=6,Dt[v]=1.6}),Ct.setAttribute("position",new $e(re,3)),Ct.setAttribute("fill",new $e(xe,3)),Ct.setAttribute("size",new $e(q,1)),Ct.setAttribute("bw",new $e(Dt,1));let ft=new Gs(Ct,Ot("#1d2330"));ft.renderOrder=22,ft.frustumCulled=!1,e.add(ft);function At(){let f=r.dist<45,v=pt();b.forEach((w,A)=>{let C=[...w.fams].some(W=>Yt.has(W)),L=w.ext&&![...w.fams].some(W=>v.has(W))&&A!==F;q[A]=C?A===F?13:L?3:f?8:5:0,Dt[A]=A===F?3:1.6}),Ct.attributes.size.needsUpdate=!0,Ct.attributes.bw.needsUpdate=!0}let Pt=600,xt=new rn,Qt=new Float32Array(Pt*3),Zt=new Float32Array(Pt*3),Be=new Float32Array(Pt),Fe=new Float32Array(Pt);xt.setAttribute("position",new $e(Qt,3)),xt.setAttribute("fill",new $e(Zt,3)),xt.setAttribute("size",new $e(Be,1)),xt.setAttribute("bw",new $e(Fe,1));let Mn=new Float32Array(Pt);xt.setAttribute("ang",new $e(Mn,1));let ai=new Sn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ue("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),jr=new Gs(xt,ai);jr.renderOrder=24,jr.frustumCulled=!1,e.add(jr);let Xi=new rn,As=new Float32Array(Pt*3),sr=new Float32Array(Pt*3),yo=new Float32Array(Pt),Qr=new Float32Array(Pt);Xi.setAttribute("position",new $e(As,3)),Xi.setAttribute("fill",new $e(sr,3)),Xi.setAttribute("size",new $e(yo,1)),Xi.setAttribute("bw",new $e(Qr,1));let rr=new Gs(Xi,Ot("#ffffff"));rr.renderOrder=23,rr.frustumCulled=!1,e.add(rr);function Ai(f,v){let w=E[f],A=v*w.L,C=0,L=w.c.length-1;for(;L-C>1;){let lt=C+L>>1;w.c[lt]<=A?C=lt:L=lt}let W=w.c[L]-w.c[C]||1,V=(A-w.c[C])/W,X=w.p[C],K=w.p[L];return[X[0]+(K[0]-X[0])*V,X[1]+(K[1]-X[1])*V]}let ar=f=>f*f*(3-2*f)*.35+f*.65;function Cs(f,v){let w=f.pat.t,A=f.pat.stops.length,C=w[2*A-2];if(v<w[1]-2||v>C+1)return null;if(v<=w[1])return{w:b[f.pat.stops[0]].w,at:0,next:0,moving:!1};for(let L=0;L<A-1;L++){let W=w[2*L+1],V=w[2*L+2],X=w[2*L+3];if(v<=V){let K=V>W?(v-W)/(V-W):1;return{w:Ai(f.pat.segs[L],ar(g(K,0,1))),at:-1,next:L+1,prev:L,moving:!0}}if(v<=X)return{w:b[f.pat.stops[L+1]].w,at:L+1,next:L+1,moving:!1}}return{w:b[f.pat.stops[A-1]].w,at:A-1,next:A-1,moving:!1}}function ta(f){let v=t.days.indexOf(f.ymd),w=[];if(v<0)return{k:v,out:w};let A=(C,L)=>{for(let W of C){if(!Yt.has(W.fam))continue;let V=Ie(W);if(V==="X")continue;let X=(V||0)/60,K=f.min+L-W.t0-X;if(K<-2||K>W.pat.t[W.pat.t.length-2]+1)continue;let lt=Cs(W,K);lt&&w.push({tr:W,p:lt,rel:K,dl:X,live:V!=null})}};return A(Y[v],0),v>0&&A(Y[v-1],1440),{k:v,out:w}}function or(f,v,w,A){let C=f.pat.stops[0],L=v.dep0,W=null,V=(K,lt)=>{for(let S of K||[]){let O=S.pat.stops,ut=O.length;if(O[ut-1]!==C||S===f)continue;let dt=S.t0+S.pat.t[2*(ut-1)]-lt;if(dt>L+5||dt<L-120)continue;let kt=Ht(S.pat),ae=Ne(kt,v.w,-1,1e9);if(ae.err>.6)continue;let pe=kt.stopD,vt=S.pat.t,Mt=pe.findIndex(Le=>Le>ae.d);Mt<0&&(Mt=ut-1);let oe=Mt===0?vt[1]:vt[2*Mt-1]+(pe[Mt]>pe[Mt-1]?(ae.d-pe[Mt-1])/(pe[Mt]-pe[Mt-1]):1)*(vt[2*Mt]-vt[2*Mt-1]),ye=w-(S.t0+oe-lt);ye<-5||ye>120||(!W||Math.abs(ye)<Math.abs(W.prevDl))&&(W={prevTr:S,dPrev:ae.d,prevDl:ye,arrO:dt+Math.max(0,ye)})}};if(V(Y[A],0),A>0&&V(Y[A-1],1440),!W)return{prevTr:null,preDl:0};let X=Math.max(L,W.arrO+3);return{...W,depEst:X,preDl:Math.max(0,X-L)}}function So(f,v,w){let A=f.pat.t,C=v.length;if(!(w>=0))return w<0?v[0]:null;for(let L=0;L<C;L++)if(w<=A[2*L+1]){if(w>=A[2*L]||L===0)return v[L];let W=A[2*L-1],V=A[2*L];return v[L-1]+(v[L]-v[L-1])*(V>W?(w-W)/(V-W):1)}return v[C-1]}let Rs=performance.now();function Mo(){let f=[],v=Date.now()/1e3,w=performance.now(),A=Math.min(1,(w-Rs)/1e3);Rs=w;for(let C of H.vp.values()){let L=st.get(C.tid),W=L?L.fam:C.fam;if(W&&G[W]&&!Yt.has(W))continue;let V=H.delays.get(C.tid),X=typeof V=="number"?V/60:0,K=Math.max(0,v-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let lt=C.w,S=-1;if(L){let ut=Ht(L.pat),dt=ut.stopD;if(C.dObs==null||C.obsAt!==C.ts){let Mt=Ne(ut,C.w,-1,1e9);C.dObs=Mt.d,C.err=Mt.err,C.obsAt=C.ts}let kt=de(),ae=t.days.indexOf(kt.ymd),pe=L.day===ae-1?1440:0,vt=L.t0+L.pat.t[1]-pe;if(C.pre=kt.min+X<vt-1&&(C.dObs>dt[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===b[L.pat.stops[0]].id),C.dep0=vt,C.pre){if(C.atStop=-1,C.next=0,S=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,or(L,C,kt.min,ae))),C.prevTr){let Mt=Ht(C.prevTr.pat);lt=Me(Mt,C.dPrev)}}else if(C.err<=.6){let Mt=dt.findIndex(Le=>Le>C.dObs+.08);Mt<0&&(Mt=dt.length-1);let oe=dt.reduce((Le,hn,De)=>Math.abs(hn-C.dObs)<Math.abs(dt[Le]-C.dObs)?De:Le,0);C.atStop=Math.abs(dt[oe]-C.dObs)<.16?oe:-1,C.next=Mt,S=Mt;let ye=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)ye=dt[C.atStop];else if(Mt>0){let Le=(L.pat.t[2*Mt]-L.pat.t[2*Mt-1])*60,hn=Le>0?(dt[Mt]-dt[Mt-1])/Le:0,De=de(),ce=t.days.indexOf(De.ymd),Zi=L.day===ce-1?1440:0,cr=So(L,dt,De.min+Zi-L.t0-X),Dn=C.dObs+hn*Math.min(K,60);cr!=null&&(Dn=Math.min(Dn,Math.max(C.dObs,cr))),ye=Math.max(C.dObs,Math.min(dt[Mt]-.03,Dn))}C.disp==null||Math.abs(C.disp-ye)>1.2?C.disp=ye:ye>C.disp&&(C.disp+=(ye-C.disp)*Math.min(1,A*1.5)),lt=Me(ut,C.disp)}else if(C.err>2){let Mt=de(),oe=t.days.indexOf(Mt.ymd),ye=L.day===oe-1?1440:0,Le=Cs(L,Mt.min+ye-L.t0-X);Le&&(lt=Le.w,C.est=!0,S=Le.next),C.atStop=-1,C.next=Le?Le.next:-1}else C.atStop=-1,C.next=-1}let O=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";f.push({tr:L,v:C,w:lt,stop:O,p:{w:lt},fam:W||"?",c:L?L.c:G[W]||"#6b7385",dl:X,live:!0,real:!0,idx:S,age:K,cancel:V==="X"})}return f}let $n=new Map,dn=!1,tn=!1,Xn=[],pi=0,fn=null,y=null,F=-1,j=!1,Q=0,tt="";function Bt(f){let v=Et>0||Xt()&&te==null||!!y,w=v?50:250;if(f-pi<w)return!1;pi=f,[...pt()].join()!==Ut&&(jt(),At());{let S=k(),O=S?S.sn.t:"";ie.cur=S,O!==ie.key&&(ie.key=O,se()),!S&&!de().live&&!me.at&&ln()}let A=de(),C=Xt()&&A.live,L=C?{k:t.days.indexOf(A.ymd),out:Mo()}:ta(A);Xn=L.out;let W=new ue,V=0,X=0;for(let S of Xn){if(V>=Pt)break;Qt[V*3]=S.p.w[0],Qt[V*3+1]=S.p.w[1],Qt[V*3+2]=N+.02;let O=null;if(S.real&&S.v.pre&&S.v.prevTr)O=Me(Ht(S.v.prevTr.pat),S.v.dPrev+.35);else if(S.real&&S.tr&&!S.v.pre&&S.v.err<=.6&&S.v.disp!=null&&!(S.v.st==="STOPPED_AT"&&S.v.atStop>=0))O=Me(Ht(S.tr.pat),S.v.disp+.35);else if(!S.real&&S.p.moving){let pe=S.tr.pat.t,vt=S.p.prev,Mt=pe[2*vt+1],oe=pe[2*vt+2],ye=oe>Mt?(S.rel-Mt)/(oe-Mt):1;O=Ai(S.tr.pat.segs[vt],Math.min(1,ar(g(ye,0,1))+.04))}let ut=S.real?!!S.stop:!S.p.moving;if(S.broke=_d(S),S.broke)Mn[V]=85;else if(ut)Mn[V]=75;else if(O){let pe=wo(S.p.w),vt=wo(O),Mt=vt[0]-pe[0],oe=vt[1]-pe[1];Mn[V]=Math.hypot(Mt,oe)>.05?Math.atan2(Mt,-oe):99}else Mn[V]=99;W.set(S.c||S.tr.c),Zt[V*3]=W.r,Zt[V*3+1]=W.g,Zt[V*3+2]=W.b;let dt=S.tr?S.tr===y:y&&y.vtid===S.v.tid;Be[V]=dt?22:r.dist<45?17:14,Fe[V]=dt?3.5:2.2;let kt=S.real&&S.stop==="via"||!!S.broke,ae=S.cancel||S.broke?[.86,.15,.15]:S.dl>10?[.86,.15,.15]:S.dl>5?[.92,.48,.05]:S.dl>=1?[.98,.8,.08]:[.09,.64,.29];(S.live&&S.dl>=5||dt||kt)&&(As[X*3]=S.p.w[0],As[X*3+1]=S.p.w[1],As[X*3+2]=N+.01,sr.set(dt?ae:kt?[.86,.15,.15]:[.98,.45,.09],X*3),yo[X]=Be[V]+(dt?16+5*Math.sin(f/220):kt?10+3*Math.sin(f/400):8),Qr[X]=dt?2:3,X++),V++}if(xt.setDrawRange(0,V),Xi.setDrawRange(0,X),["position","fill","size","bw"].forEach(S=>{xt.attributes[S].needsUpdate=!0,Xi.attributes[S].needsUpdate=!0}),xt.attributes.ang.needsUpdate=!0,fn){let S=Xn.find(O=>O.tr===fn);if(S){let O=0,ut=innerHeight,dt=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,kt=p("#rc").getBoundingClientRect();innerWidth<=640&&(dt&&(O=dt.bottom),ut=Math.min(ut,kt.top));let ae=O+(ut-O)/2,pe=ae-innerHeight/2,vt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=S.p.w[0]-Math.sin(r.yaw)*pe*vt,s.ty=S.p.w[1]+Math.cos(r.yaw)*pe*vt}else Xt()&&de().live&&(fn=null)}let K=it(A.min);K!==tt&&(tt=K,p("#ctime").textContent=K),p("#ntr").textContent=String(Xn.length),p("#ntrl").textContent=C?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let S=Yt.size<U.length?[...Yt].sort(P).join(", "):"",O=p("#ccount"),ut=ie.cur?`\u23EA ${Xn.length} trenes con los retrasos reales de las ${ie.cur.sn.t} \xB7 ${Object.values(ie.cur.sn.d).filter(dt=>dt>=60).length} iban con retraso`:!A.live&&A.min<mt(new Date).min-1&&!Et?`\u23EA Hora pasada seg\xFAn horario${me.hoy&&me.hoy.snaps&&me.hoy.snaps.some(dt=>dt.d)?` \xB7 hay retrasos reales desde las ${me.hoy.snaps.find(dt=>dt.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${Xn.length} ${C?"trenes con posici\xF3n real":"trenes previstos"}${S?` <small>\xB7 ${d(S)}</small>`:""}`;O&&O._t!==ut&&(O.innerHTML=ut,O._t=ut)}let lt=new Date;if(p("#cdate").textContent=A.live?"hora actual":Et?"simulaci\xF3n \xD7"+Et:ci?"en pausa":"hora elegida",L.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Ae(t.days[0])} al ${Ae(t.days[t.days.length-1])}: actualiza la app.`:C?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(S=>S.ts),0)))} s`:p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(H.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",A.live){let S=Math.round(A.min),O=p("#tsl");document.activeElement!==O&&(O.value=S<240?S+1440:S)}{let S=y?String(y.num||y.vtid||""):"";S!==Bt._sk&&(Bt._sk=S,cn(!0))}return cn(),f-Q>3e3&&(y||F>=0||j||tn)&&(Q=f,Je()),se(),!0}let Gt=-1,Nt=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),qt=[],Wt=document.createElement("button");Wt.type="button",Wt.id="mbtn",Wt.title="Ver los nombres de los municipios",Wt.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Wt.onclick=()=>{Nt=!Nt;try{localStorage.setItem("rod_mun",Nt?"1":"")}catch{}Wt.classList.toggle("on",Nt),a(),ze()},Wt.classList.toggle("on",Nt),document.body.appendChild(Wt);let be=T.slice().sort((f,v)=>v.pop-f.pop);function Ee(f){if(f._a)return f._a;let v=null,w=0;for(let A of f.rings||[]){let C=A[0];if(!C)continue;let L=0,W=0,V=0;for(let X=0,K=C.length;X<K;X+=2){let lt=C[X],S=C[X+1],O=C[(X+2)%K],ut=C[(X+3)%K],dt=lt*ut-O*S;L+=dt,W+=(lt+O)*dt,V+=(S+ut)*dt}Math.abs(L)>w&&(w=Math.abs(L),v=[W/(3*L),V/(3*L)])}return f._a=v?[(v[0]-l)*o,(v[1]-c)*o]:[f.cx,f.cy]}let Kt=f=>f>=1e5?1:f>=2e4?2:f>=5e3?3:4,Oe=[0,7.6,6.7,6,5.4],en=[0,17,15,13,12],qe=f=>f.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function ze(){let f=s.tilt<.06&&r.tilt<.08;Wt.classList.toggle("show",f);let v=0;if(Nt&&f){let w=[...document.querySelectorAll(".plab, .slab")].filter(L=>L.offsetParent!==null||L.style.display==="block").map(L=>{let W=L.getBoundingClientRect();return[W.left-2,W.top-2,W.right+2,W.bottom+2]}).filter(L=>L[2]>L[0]),A=r.dist,C=A>160?5e4:A>130?2e4:A>105?8e3:A>80?3e3:A>62?800:0;for(let L of be){let W=Kt(L.pop);if(L.pop<C)break;let V=Ee(L);if(zn.set(V[0],V[1],N).project(n),Math.abs(zn.x)>1.02||Math.abs(zn.y)>1.02)continue;let X=(zn.x*.5+.5)*innerWidth,K=(-zn.y*.5+.5)*innerHeight,lt=qe(L.name),S=lt.length*Oe[W]+8,O=en[W],ut=[X-S/2,K-O/2,X+S/2,K+O/2];if(w.some(kt=>ut[0]<kt[2]&&kt[0]<ut[2]&&ut[1]<kt[3]&&kt[1]<ut[3]))continue;w.push(ut);let dt=qt[v]||(qt[v]=Object.assign(document.createElement("div"),{className:"mlab"}));dt.isConnected||document.body.appendChild(dt),dt._n!==lt&&(dt.textContent=lt,dt._n=lt),dt._t!==W&&(dt.className="mlab t"+W,dt._t=W),dt.style.transform=`translate(${Math.round(X)}px,${Math.round(K)}px) translate(-50%,-50%)`,dt.style.display="block",v++}}for(;v<qt.length;v++)qt[v].style.display="none"}let me={at:0,hoy:null,ayer:null,err:""},$t="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function ln(){Date.now()-me.at<5*6e4||(me.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(f=>fetch($t+f+".json",{cache:"no-store"}).then(v=>v.ok?v.json():null).catch(()=>null))).then(([f,v,w])=>{me.hoy=f,me.ayer=v,me.hist=w,me.tr=null,me.err=f?"":"sin datos",tn&&(h._h="",Je()),cn(!0)}))}function Pe(f){let v={};for(let A of f&&f.snaps||[])for(let C of A.r||[]){let L=/^\d+[A-Z](\d+)/.exec(C);L&&(v[L[1]]=v[L[1]]||[]).push(Math.max(0,A.d&&A.d[C]||0)/60)}let w={};for(let A in v){let C=v[A].sort((L,W)=>L-W);w[A]=Math.round(C[C.length>>1])}return w}function Pn(f){if(!me.tr){let w=new Map;for(let A of me.hist&&me.hist.days||[])w.set(A.day,A.tr);for(let A of[me.ayer,me.hoy])if(A&&A.day&&!w.has(A.day)){let C=Pe(A);Object.keys(C).length&&w.set(A.day,C)}me.tr=w}let v=[...me.tr.values()].map(w=>w[String(f)]).filter(w=>w!=null);return v.length?{n:v.length,late:v.filter(w=>w>=5).length,avg:v.reduce((w,A)=>w+A,0)/v.length}:null}let gn=f=>f>=90?"g":f>=80?"y":f>=65?"w":"b",bn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},qi=f=>f>10?bn.b:f>5?bn.w:f>=1?bn.y:bn.g,Ce=f=>(f>=.05?"+":"")+(Math.round(f*10)/10).toString().replace(".",",")+" min";function Ye(f,v,w){return`<div class="sbars">${f.map(A=>`<div class="sbar" title="${d(A.tip||"")}"><span class="sl">${A.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(A.w*100))}%;background:${A.c}"></i></span><b class="sv" style="color:${A.c===bn.y?"#a16207":A.c}">${A.val}</b></div>`).join("")}</div>`}function Ci(f){if(f=(f||[]).filter(V=>V.n>=10),!f||f.length<2){let V=f&&f[0];return V?`<p class="snote">Primera foto del d\xEDa a las ${V.t}: ${Math.round(V.ok/V.n*100)} % puntuales de ${V.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let v=300,w=92,A=22,C=V=>A+V*(v-A-6)/(f.length-1),L=V=>6+(100-V)/100*(w-22),W=f.map((V,X)=>[C(X),L(V.n?V.ok/V.n*100:100),V]);return`<svg class="schart" viewBox="0 0 ${v} ${w}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(V=>`<line x1="${A}" x2="${v-4}" y1="${L(V)}" y2="${L(V)}" class="gl"/><text x="2" y="${L(V)+3}" class="ax">${V}%</text>`).join("")}
      <polyline points="${W.map(V=>V[0].toFixed(1)+","+V[1].toFixed(1)).join(" ")}" class="ln"/>
      ${W.map(([V,X,K])=>`<circle cx="${V.toFixed(1)}" cy="${X.toFixed(1)}" r="5" class="pt"><title>${K.t} \xB7 ${K.n?Math.round(K.ok/K.n*100):100}% puntuales \xB7 ${K.n} trenes \xB7 ${K.d5} con +5 min \xB7 retraso medio ${Ce(K.avg)}${K.nd?` \xB7 ${K.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${A}" y="${w-3}" class="ax">${f[0].t}</text><text x="${v-4}" y="${w-3}" class="ax" text-anchor="end">${f[f.length-1].t}</text></svg>`}function We(){ln();let f=de(),v=Xn.filter(V=>V.real&&Xt()&&f.live),w=v.filter(V=>H.delays.has(V.v.tid)),A=w.length,C=v.length-A,L='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(A){let V=w.filter(vt=>vt.dl<3).length,X=w.filter(vt=>vt.dl>=5).length,K=w.filter(vt=>vt.stop==="via").length,lt=Math.round(V/A*100);L+=`<small>Ahora mismo \xB7 ${A} trenes con retraso publicado por Renfe${C?` \xB7 ${C} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${gn(lt)}"><b>${lt}%</b><span>puntuales</span></div>
        <div class="kpi ${gn(100-X/A*100*2)}" title="${Math.round(X/A*100)} % de los trenes"><b>${X}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${K===0?"g":K<=2?"w":"b"}"><b>${K}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let S=new Map;w.forEach(vt=>{let Mt=vt.fam,oe=S.get(Mt)||{n:0,ok:0,sum:0};oe.n++,oe.ok+=vt.dl<3,oe.sum+=Math.max(0,vt.dl),S.set(Mt,oe)});let O=[...S].filter(([vt])=>G[vt]).sort((vt,Mt)=>vt[1].ok/vt[1].n-Mt[1].ok/Mt[1].n||Mt[1].sum/Mt[1].n-vt[1].sum/vt[1].n),ut=O.filter(([,vt])=>vt.ok<vt.n),dt=O.filter(([,vt])=>vt.ok===vt.n);L+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(ut.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+Ye(ut.map(([vt,Mt])=>({lab:li(vt),w:Mt.ok/Mt.n,c:bn[gn(Mt.ok/Mt.n*100)],val:`${Math.round(Mt.ok/Mt.n*100)}% <small>${Ce(Mt.sum/Mt.n)}</small>`,tip:`${vt}: ${Mt.ok} de ${Mt.n} trenes puntuales \xB7 retraso medio ${Ce(Mt.sum/Mt.n)}`})))+(dt.length?`<p class="snote">Puntuales al 100 %: ${dt.map(([vt])=>li(vt)).join(" ")}</p>`:"");let kt=new Map;w.forEach(vt=>{if(!vt.tr||vt.v.next==null||vt.v.next<0||vt.v.pre)return;let Mt=vt.tr.pat.stops[vt.v.next],oe=kt.get(Mt)||{n:0,sum:0};oe.n++,oe.sum+=Math.max(0,vt.dl),kt.set(Mt,oe)});let ae=[...kt].filter(([,vt])=>vt.sum/vt.n>=1).sort((vt,Mt)=>Mt[1].sum/Mt[1].n-vt[1].sum/vt[1].n).slice(0,8),pe=ae.length?ae[0][1].sum/ae[0][1].n:1;L+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(ae.length?Ye(ae.map(([vt,Mt])=>({lab:`<span class="sn" data-gs="${vt}">${d(b[vt].n)}</span>`,w:Mt.sum/Mt.n/pe,c:qi(Mt.sum/Mt.n),val:`${Ce(Mt.sum/Mt.n)} <small>${Mt.n} ${Mt.n===1?"tren":"trenes"}</small>`,tip:`${b[vt].n}: ${Mt.n} trenes llegando con ${Ce(Mt.sum/Mt.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else L+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let W=me.hoy;L+=`<button type="button" class="hmore" data-cols>${nn.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{Ed("");let V=[...Ps.m].filter(([X,K])=>G[X]&&K[0]>=3).map(([X,K])=>[X,K[1]/K[0]]).sort((X,K)=>X[1]-K[1]);V.length&&(L+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+Ye(V.slice(0,8).map(([X,K])=>({lab:li(X),w:K,c:bn[gn(K*100)],val:`${Math.round(K*100)}%`,tip:`${X}: ${Math.round(K*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let V=lt=>{let S=(lt&&lt.snaps||[]).filter(dt=>dt.n),O=S.reduce((dt,kt)=>dt+kt.n,0),ut=S.reduce((dt,kt)=>dt+kt.ok,0);return O?ut/O*100:null},X=V(me.hoy),K=V(me.ayer);X!=null&&(L+=`<div class="cmp"><span>Hoy <b class="${gn(X)}">${Math.round(X)} %</b> puntuales</span>${K!=null?`<span>Ayer <b class="${gn(K)}">${Math.round(K)} %</b></span><span>${X>=K?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(L+="<h4>Hoy, a lo largo del d\xEDa</h4>",W&&W.snaps){L+=Ci(W.snaps);let V=Object.entries(W.st||{}).map(([lt,S])=>[Vt.get(lt),S]).filter(([lt,S])=>lt!=null&&S.n>=3).map(([lt,S])=>[lt,S.sum/S.n/60,S]).filter(lt=>lt[1]>=1).sort((lt,S)=>S[1]-lt[1]).slice(0,8);if(V.length){let lt=V[0][1];L+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+Ye(V.map(([S,O,ut])=>({lab:`<span class="sn" data-gs="${S}">${d(b[S].n)}</span>`,w:O/lt,c:qi(O),val:`${Ce(O)} <small>m\xE1x +${Math.round(ut.max/60)}</small>`,tip:`${b[S].n}: ${ut.n} mediciones hoy (foto cada 15 min) \xB7 ${ut.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(ut.max/60)} min`})))}let X=Object.entries(W.lines||{}).filter(([lt,S])=>G[lt]&&S.n>=3).sort((lt,S)=>lt[1].ok/lt[1].n-S[1].ok/S[1].n);X.length&&(L+="<h4>L\xEDneas hoy</h4>"+Ye(X.map(([lt,S])=>({lab:li(lt),w:S.ok/S.n,c:bn[gn(S.ok/S.n*100)],val:`${Math.round(S.ok/S.n*100)}% <small>${Ce(S.sum/S.n/60)}</small>`,tip:`${lt} hoy: ${Math.round(S.ok/S.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(S.max/60)} min`}))));let K=W.upd?(Date.now()-Date.parse(W.upd))/6e4:0;L+=`<small class="snote">${K>40?`<b>\xDAltima foto hace ${Math.round(K)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${d((W.upd||"").slice(11,16))} \xB7 ${(W.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else L+=`<p class="snote">${me.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return L+"</div>"}let nn={on:!1,mesh:null};function os(){let f=me.hoy,v=[];if(f&&f.st)for(let[w,A]of Object.entries(f.st)){let C=Vt.get(w);C!=null&&A.n>=2&&v.push([C,A.sum/A.n/60,A.n])}if(!v.length){let w=new Map;Xn.forEach(A=>{if(!A.real||!A.tr||A.v.next==null||A.v.next<0||A.v.pre||!H.delays.has(A.v.tid))return;let C=A.tr.pat.stops[A.v.next],L=w.get(C)||[0,0];L[0]+=Math.max(0,A.dl),L[1]++,w.set(C,L)}),w.forEach((A,C)=>v.push([C,A[0]/A[1],A[1]]))}return v}function bo(){if(nn.mesh&&(e.remove(nn.mesh),nn.mesh.geometry.dispose(),nn.mesh.material.dispose(),nn.mesh=null),!nn.on){a();return}let f=os();if(!f.length){qn("A\xFAn no hay datos de retraso por estaci\xF3n"),nn.on=!1;return}let v=new Ua(.32,.32,1,16);v.rotateX(Math.PI/2),v.translate(0,0,.5);let w=new Vs({fog:!1}),A=new Pa(v,w,f.length),C=new Ue,L=new ue;f.forEach(([W,V],X)=>{let K=.3+Math.min(V,40)*.3;C.makeScale(1,1,K),C.setPosition(b[W].w[0],b[W].w[1],N),A.setMatrixAt(X,C),L.set(V>10?"#dc2626":V>5?"#ea7a0c":V>=1?"#eab308":"#16a34a"),A.setColorAt(X,L)}),A.renderOrder=25,A.frustumCulled=!1,e.add(A),nn.mesh=A,s.tilt<.5&&(s.tilt=.85),a()}let lr=document.createElement("button");lr.type="button",lr.id="sbtn",lr.title="Estad\xEDsticas de puntualidad",lr.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",lr.onclick=()=>{tn=!tn,tn&&(dn=j=!1,me.at=0),h._h="",Je(),a()},document.body.appendChild(lr);function ym(){r.dist<45!=Gt<45&&(Gt=r.dist,At()),Sm(),ze()}let ea=[],zn=new z;function Sm(){let f=r.dist<30,v=0;if(f){let w=[];for(let A=0;A<Jt;A++)q[A]<4||(zn.set(b[A].w[0],b[A].w[1],N).project(n),!(zn.z>1||Math.abs(zn.x)>1.05||Math.abs(zn.y)>1.05)&&w.push([A,(zn.x*.5+.5)*innerWidth,(-zn.y*.5+.5)*innerHeight]));if(w.length<=70)for(let[A,C,L]of w){let W=ea[v]||(ea[v]=Object.assign(document.createElement("div"),{className:"slab"}));W.isConnected||document.body.appendChild(W),W.textContent=b[A].n,W.dataset.i=A,W.style.display="block",W.style.transform=`translate(${Math.round(C+8)}px,${Math.round(L-7)}px)`,v++}}for(;v<ea.length;v++)ea[v].style.display="none"}function wo(f){return zn.set(f[0],f[1],N).project(n),[(zn.x*.5+.5)*innerWidth,(-zn.y*.5+.5)*innerHeight,zn.z]}function md(f,v,w,A){let C=null,L=w*w;for(let W of Xn){let[V,X,K]=wo(W.p.w);if(K>1)continue;let lt=(V-f)**2+(X-v)**2;lt<L&&(L=lt,C={a:W})}if(C)return C;L=A*A;for(let W=0;W<Jt;W++){if(!q[W])continue;let[V,X,K]=wo(b[W].w);if(K>1)continue;let lt=(V-f)**2+(X-v)**2;lt<L&&(L=lt,C={s:W})}return C}window.__rodTap=(f,v)=>{let w=null,A=1e9;for(let L of ea){if(L.style.display==="none")continue;let W=L.getBoundingClientRect();if(f>=W.left-4&&f<=W.right+4&&v>=W.top-4&&v<=W.bottom+4){let V=Math.abs(v-(W.top+W.bottom)/2)*4+(f-W.left);V<A&&(A=V,w=L)}}if(w)return window.__rodPickStation(+w.dataset.i),!0;let C=md(f,v,24,18);return C&&C.a?(dn=!1,j=!1,tn=!1,y=C.a.tr||{vtid:C.a.v.tid},F=-1,fn=null,At(),Je(),pi=0,a(),!0):C&&C.s!=null?(dn=!1,j=!1,tn=!1,F=C.s,y=null,fn=null,At(),Je(),a(),!0):!1},window.__rodHover=(f,v)=>{let w=md(f,v,14,10);if(w&&w.a){let A=w.a,C=A.tr?b[A.tr.pat.stops[A.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${A.c}">\u25A0</span> ${d(A.fam||A.tr&&A.tr.fam||"?")} \xB7 tren ${d(A.tr?A.tr.num:A.v.num)}</b><small>${C?"hacia "+d(C):""}${A.real?(A.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(A.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return w&&w.s!=null?`<b>${d(b[w.s].n)}</b><small>${[...b[w.s].fams].sort(P).join(" \xB7 ")}</small>`:null},window.__rodPickStation=f=>{dn=j=tn=!1,y=null,fn=null,F=f,At(),h._h="",Je(),a()};{let f=p("#rc"),v=()=>{let w=f.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,w-64-10)+"px")};try{new ResizeObserver(v).observe(f)}catch{}addEventListener("resize",v),setTimeout(v,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let f=!1,v=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{v&&!f&&(f=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(w=>{w.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||w.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{ln()}catch{}},2500),setInterval(()=>{try{me.at=0,ln()}catch{}},15*6e4),window.__rodTick=Bt,window.__rodFrame=ym,window.__rodResize=()=>{Z.resolution.set(innerWidth,innerHeight),nt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let oi={st:-1,f:new Set},gd=f=>{let v=[...b[f].fams].sort(P);return`<div class="sfc">${v.length>1?`<button type="button" data-sf="" class="${oi.f.size?"":"on"}">Todas</button>`:""}${v.map(w=>`<button type="button" data-sf="${d(w)}" class="ln ${oi.f.size&&!oi.f.has(w)?"off":""}${Yt.has(w)?"":" hid"}" style="--c:${G[w]}">${d(w)}</button>`).join("")}</div>${v.some(w=>!Yt.has(w))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Mm=f=>{let v=(f||"#6b7385").replace("#",""),w=parseInt(v.slice(0,2),16),A=parseInt(v.slice(2,4),16),C=parseInt(v.slice(4,6),16);return(.299*w+.587*A+.114*C)/255>.62?"#1d2330":"#fff"},Yi=(f,v)=>{let w=G[v]||"#6b7385";return`<span class="dst" style="background:${w};color:${Mm(w)}" title="${d(v||"")}">${d(f)}</span>`},Eo=f=>{let v=b[f]&&b[f].id;return Yn.st.includes(v)?"\u{1F3E0} ":wn.st.includes(v)?"\u{1F4BC} ":""},Is=f=>f>10?"d-hi":f>5?"d-md":"d-lo",bm=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,na={ref:null,m:new Map};function oh(f){if(na.ref!==H.alerts){na.ref=H.alerts,na.m=new Map;for(let v of H.alerts){if(v.src!=="Rodalies")continue;let w=v.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let A of v.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))na.m.set(A[1],{why:w?w[1].trim().replace(/\s+/g," "):"",txt:v.txt,when:v.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(v.txt)})}}return na.m.get(String(f))||null}let ia={ref:null,m:new Map};function _d(f){let v=String(f.tr?f.tr.num:f.v&&f.v.num||"");if(!v)return null;if(ia.ref!==H.alerts){ia.ref=H.alerts,ia.m=new Map;for(let A of H.alerts)if(A.src==="Rodalies"&&bm.test(A.txt))for(let C of A.txt.matchAll(/\b(\d{4,6})\b/g))ia.m.set(C[1],A)}let w=ia.m.get(v);return w?{why:"aviso",txt:w.txt}:f.real&&f.stop==="via"&&f.v.still>=300?{why:"via",min:Math.round(f.v.still/60)}:null}let To=f=>{try{let v=y;return v?v.num!=null&&String(v.num)===String(f.num)||f.tid&&(v.tid===f.tid||v.vtid===f.tid):!1}catch{return!1}},xd=(f,v)=>{let w=M(f,v.min-1,v.min+240).sort((A,C)=>A.est-C.est).slice(0,6);return w.length?`<small style="margin-top:6px">\u{1F68C} Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${w.map(A=>`<li><b>${it(A.est)}</b>${li(A.fam)}<span>${Yi(A.dest,A.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},li=f=>`<span class="ln" style="--c:${G[f]}">${d(f)}</span>`;function vd(f,v){return v?f==="X"?'<span class="st late">Cancelado</span>':f>=60?`<span class="st late ${Is(f/60)}">Retraso de ${Math.round(f/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Je(){if(!y&&F<0&&!j&&!dn&&!tn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),gh();return}let f=de(),v="",w=Xt()&&f.live,A=(S,O)=>H.alerts.filter(ut=>[...ut.fams].some(dt=>S.has(dt))||O!=null&&ut.stops.has(O)),C=S=>S.length?`<div class="al">${S.slice(0,4).map(O=>`<p>\u26A0\uFE0F ${ch(O)} ${[...O.fams].sort(P).slice(0,6).map(li).join(" ")} ${d(O.txt)} <small>${hh(O)}</small></p>`).join("")}${S.length>4?`<small>y ${S.length-4} avisos m\xE1s</small>`:""}</div>`:"",L=y&&w?Xn.find(S=>S.real&&(y.vtid?S.v.tid===y.vtid:S.tr===y)):null;if(tn)v=We();else if(dn)v=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(j){let S=H.alerts.filter(O=>[...O.fams].some(ut=>Yt.has(ut))||!O.fams.size);v=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${S.length} avisos activos para las l\xEDneas que tienes visibles</small>${S.map(O=>`<div class="al"><p>${ch(O)} ${[...O.fams].sort(P).map(li).join(" ")} <small>${hh(O)}</small></p><p>${d(O.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(L){let S=L.v,O=L.tr,ut=ce=>d(b[O.pat.stops[ce]].n),dt=O?O.pat.stops.length:0,kt=Vt.get(S.sid),ae=kt!=null?d(b[kt].n):d(S.sid),pe=O&&S.atStop>=0?ut(S.atStop):"",vt=O&&S.next>=0?ut(S.next):ae,Mt=O&&S.next>0?ut(S.next-1):"",oe=L.broke||_d(L),ye=oe?`<b class="stopv">\u26A0\uFE0F ${oe.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${oe.min} min`}</b>${O&&Mt?` \xB7 entre ${Mt} y <b>${vt}</b>`:""}`:L.stop==="via"&&O?`<b class="stopv">\u23F8 Detenido</b> ${Mt?`entre ${Mt} y <b>${vt}</b>`:`antes de <b>${vt}</b>`} desde hace ${Math.max(1,Math.round(S.still/60))} min`:S.pre&&O?S.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(S.prevTr.num)}</b> hacia <b>${ut(0)}</b>${S.prevDl>=1?` con <b>+${Math.round(S.prevDl)} min</b>`:""}: llega hacia las <b>${it(S.arrO)}</b> y saldr\xEDa hacia las <b>${it(S.depEst)}</b>${S.preDl>=1?` (horario ${it(S.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${ut(0)}</b>, de donde sale a las <b>${it(S.dep0+L.dl)}</b>`:S.st==="STOPPED_AT"&&pe?`Parado en <b>${pe}</b>`:pe&&S.next>=0&&S.atStop!==S.next?`Saliendo de <b>${pe}</b> hacia <b>${vt}</b>`:Mt?`Entre ${Mt} y <b>${vt}</b>`:`Hacia <b>${vt}</b>`,Le=H.tu.get(S.tid),hn=Le&&Le.next&&O&&S.next>=0&&Le.next.sid===b[O.pat.stops[S.next]].id&&Le.next.t?new Date(Le.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",De=[];if(O){let ce=L.idx>=0?L.idx:0,Zi=S.pre?Math.max(L.dl,S.preDl||0):L.dl,cr=Dn=>O.t0+O.pat.t[Dn]+Zi;for(let Dn=ce;Dn<dt;Dn++)De.push(`<li${Eo(O.pat.stops[Dn])?' class="mine"':""}><b>${it(cr(Dn===0?1:2*Dn))}</b><span title="${ut(Dn)}">${Eo(O.pat.stops[Dn])}${ut(Dn)}</span>${Zi>=1?`<em class="dl ${Is(Zi)}">${S.pre?"\u2248":""}+${Math.round(Zi)}</em>`:""}</li>`)}v=`<div class="tc" style="--c:${L.c}"><button class="x" data-cx>\xD7</button><div>${li(L.fam)}<b>Tren ${d(O?O.num:S.num)}</b> <span class="lv">\u25CF en directo</span></div>${O?`<h3 class="rt"><span class="o" title="${ut(0)}">${ut(0)}</span><span class="ar">\u2192</span>${Yi(b[O.pat.stops[dt-1]].n,O.fam)}</h3>`:""}
        <p>${ye}${hn?` \xB7 prevista ${hn}`:""}${S.plat&&S.st==="STOPPED_AT"&&pe?` \xB7 <b>v\xEDa ${d(S.plat)}</b>`:""}</p><p>${S.pre&&S.prevTr?S.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(S.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':vd(H.delays.get(S.tid),H.delays.has(S.tid))}${(()=>{let ce=O&&Pn(O.num);return ce&&ce.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${ce.n} d\xEDas: ${ce.late?`lleg\xF3 con 5 min o m\xE1s <b>${ce.late} de ${ce.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${ce.avg<.5?"0":"+"+Math.round(ce.avg)} min</span>`:""})()}${(()=>{let ce=O&&oh(O.num);return ce?`<span class="why" title="${d(ce.txt)}">${ce.why?"Motivo: "+d(ce.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${S.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(L.age)} s`:S.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(L.age)} s${L.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${De.length?`${L.dl>=1||S.pre&&S.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${De.join("")}</ol>`:""}${C(A(new Set([L.fam])))}
        ${Ro(O?O.num:S.num,"",L.fam)}${O?`<div class="rtb"><button type="button" data-follow>${fn===O?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(y&&w)v=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(y.num||y.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(y){let S=y,O=S.pat,ut=O.stops.length,dt=Ie(S),kt=typeof dt=="number"?dt/60:0,ae=t.days.indexOf(f.ymd),pe=S.day===ae-1?1440:0,vt=f.min+pe-S.t0-kt,Mt=Cs(S,vt),oe=ce=>S.t0+O.t[ce]+kt,ye=ce=>d(b[O.stops[ce]].n),Le="Fuera de servicio ahora";Mt&&(Le=Mt.moving?`Circulando hacia <b>${ye(Mt.next)}</b> \xB7 llega ${it(oe(2*Mt.next))}`:Mt.at===ut-1?`Ha llegado a <b>${ye(ut-1)}</b>`:`Parado en <b>${ye(Mt.at)}</b> \xB7 sale ${it(oe(2*Mt.at+1))}`);let hn=Mt?Mt.next:0,De=[];for(let ce=hn;ce<ut;ce++)De.push(`<li${Eo(O.stops[ce])?' class="mine"':""}><b>${it(oe(2*ce))}</b><span title="${ye(ce)}">${Eo(O.stops[ce])}${ye(ce)}</span>${kt>=1?`<em class="dl ${Is(kt)}">+${Math.round(kt)}</em>`:""}</li>`);v=`<div class="tc" style="--c:${S.c}"><button class="x" data-cx>\xD7</button><div>${li(S.fam)}<b>Tren ${d(S.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${ye(0)}">${ye(0)}</span><span class="ar">\u2192</span>${Yi(b[S.pat.stops[ut-1]].n,S.fam)}</h3>
        <p>${Le}</p><p>${vd(dt,dt!=null)}${(()=>{let ce=Pn(S.num);return ce&&ce.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${ce.n} d\xEDas: ${ce.late?`lleg\xF3 con 5 min o m\xE1s <b>${ce.late} de ${ce.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${ce.avg<.5?"0":"+"+Math.round(ce.avg)} min</span>`:""})()}</p><small>Sale ${it(S.t0+O.t[1])} \xB7 llega ${it(S.t0+O.t[2*ut-2])} (horario)</small>
        ${kt>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${De.join("")}</ol>${Ro(S.num,"",S.fam)}<div class="rtb"><button type="button" data-follow>${fn===S?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let S=F,O=t.days.indexOf(f.ymd),ut=[];oi.st!==S&&(oi.st=S,oi.f.clear());let dt=vt=>(!G[vt]||Yt.has(vt))&&(!oi.f.size||oi.f.has(vt));if(O>=0){let vt=(Mt,oe)=>{for(let ye of Mt){if(!dt(ye.fam))continue;let Le=ye.pat.stops.indexOf(S);if(Le<0||Le===ye.pat.stops.length-1)continue;let hn=Ie(ye),De=typeof hn=="number"?hn/60:0,ce=ye.t0+ye.pat.t[2*Le+1]-oe;ce+De<f.min-1||ce>f.min+360||ut.push({tr:ye,t:ce,dl:De,d:hn,on:H.vp.has(ye.tid),past:f.min>ye.t0+ye.pat.t[1]-oe+2})}};vt(Y[O],0),O>0&&vt(Y[O-1],1440)}ut.sort((vt,Mt)=>vt.t+vt.dl-Mt.t-Mt.dl);let kt=b[S].id,ae=$n.get(kt);w&&H.url&&(!ae||Date.now()-ae.at>3e4)&&!ae?.loading&&($n.set(kt,{...ae||{},loading:!0,at:ae?ae.at:0}),wt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+kt).then(vt=>{$n.set(kt,{at:Date.now(),d:vt}),F===S&&(h._h="",Je())}).catch(()=>$n.set(kt,{at:Date.now(),err:1})));let pe=w&&ae&&ae.d&&Array.isArray(ae.d.trains)?ae.d.trains:null;if(pe){let vt=new Map([...H.vp.values()].map(oe=>[String((st.get(oe.tid)||{}).num||oe.num),oe])),Mt=pe.filter(oe=>dt((oe.line||{}).id||"")).slice(0,40).map(oe=>{let ye=(oe.departureDateHourSelectedStation||"").slice(11,16),Le=(oe.line||{}).id||"",hn=String(oe.commercialNumber||oe.technicalNumber||""),De=vt.get(hn),ce=De?H.delays.get(De.tid):null;return`<li class="go${To({num:hn,tid:De?De.tid:""})?" sel":""}" data-gt="${d(hn)}|${De?d(De.tid):""}"><b>${d(ye)}</b>${G[Le]?li(Le):`<span class="ln" style="--c:#6b7385">${d(Le||"?")}</span>`}<span>${Yi((oe.destinationStation||{}).name||"",Le)}${oe.trainObservations?` \xB7 <i>${d(oe.trainObservations)}</i>`:""}</span>${oe.trainCancelled?"<em>cancelado</em>":typeof ce=="number"&&ce>=60?`<em class="dl ${Is(ce/60)}">+${Math.round(ce/60)}</em>`:""}${oe.platformSelectedStation?`<i class="via">v\xEDa ${d(oe.platformSelectedStation)}</i>`:""}${De?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");v=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[S].n)}</h3>${gd(S)}${Ro("",b[S].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${Mt||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${xd(S,f)}${C(A(b[S].fams,S))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else v=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[S].n)}</h3>${gd(S)}${Ro("",b[S].id,"")}
        <small style="margin-top:6px">${w&&H.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${w?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${ut.slice(0,40).map(vt=>`<li class="go${To({num:vt.tr.num,tid:vt.tr.tid})?" sel":""}" data-gt="${d(vt.tr.num)}|${d(vt.tr.tid)}"><b>${it(vt.t+vt.dl)}</b>${li(vt.tr.fam)}<span>${Yi(b[vt.tr.pat.stops[vt.tr.pat.stops.length-1]].n,vt.tr.fam)}</span>${vt.d==="X"?"<em>cancelado</em>":vt.dl>=1?`<em class="dl ${Is(vt.dl)}">+${Math.round(vt.dl)}</em>`:""}${w?vt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':vt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${xd(S,f)}${C(A(b[S].fams,S))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let W=h.scrollTop;if(h._h!==v&&(h.innerHTML=v,h._h=v,h.scrollTop=W),h.style.display="flex",h.classList.remove("min"),gh(),innerWidth<=640){let S=h.querySelector(".tc");if(S&&!S.querySelector(".mn")){let O=document.createElement("button");O.type="button",O.className="mn",O.setAttribute("aria-label","Encoger o ampliar la ficha"),O.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",O.onclick=ut=>{ut.stopPropagation(),h.classList.toggle("peek"),O.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},S.appendChild(O)}}else h.classList.remove("peek");let V=p("#rc");if(innerWidth<=640&&!V.classList.contains("min")&&!Je.done&&(Je.done=1,p("#rcgrab").click()),innerWidth<=640){let S=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(S+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-S-16)+"px"}else if(innerHeight<=500){let S=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(S+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-S-20+"px"}else h.style.top="",h.style.width=tn?"390px":"300px",h.style.maxHeight="";let K=h.querySelector("[data-cx]");K&&(K.onclick=S=>{if(S.stopPropagation(),Je.done=0,tn||dn||j){tn=dn=j=!1,h._h="",Je(),a();return}j=!1,dn=!1,tn=!1,y=null,F=-1,fn=null,At(),Je(),pi=0,a()}),Md(h);{let S=h.querySelector("[data-cols]");S&&(S.onclick=()=>{nn.on=!nn.on,bo(),h._h="",Je()})}h.querySelectorAll("[data-gs]").forEach(S=>S.onclick=()=>{let O=+S.dataset.gs;tn=!1,window.__rodPickStation(O),Object.assign(s,{tx:b[O].w[0],ty:b[O].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(S=>S.onclick=O=>{O.stopPropagation();let ut=S.dataset.sf;ut?oi.f.has(ut)?oi.f.delete(ut):oi.f.add(ut):oi.f.clear(),h._h="",Je()}),h.querySelectorAll("[data-gt]").forEach(S=>S.onclick=()=>{let[O,ut]=S.dataset.gt.split("|"),dt=st.get(ut);Fd({num:O,tid:H.vp.has(ut)?ut:"",tr:dt||null})}),h.querySelectorAll("[data-sethome]").forEach(S=>S.onclick=()=>_h(F,S.dataset.sethome));let lt=h.querySelector("[data-follow]");lt&&(lt.onclick=()=>{fn=fn===y?null:y,fn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):h.classList.remove("peek"),h._h="",Je(),a()})}window.__rodCard=Je;try{let f=localStorage.getItem("rod_inf");(f==="mini"||f==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let f=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",f?"mini":"")}catch{}(y||F>=0||j||dn)&&(h._h="",Je())},p("#ver").onclick=()=>{dn=!0,tn=!1,j=!1,h._h="",Je()};let Ao={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},wm=["vacio","lleno","petado","parado","calor","abordo"],Em=["gente","retraso","cancel","ascensor","via"],Tm={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Co=f=>(H.tipos||Tm)[f]||f,lh=(f,v)=>(H.rep||[]).filter(w=>f&&w.num===String(f)&&!w.sid||v&&w.sid===String(v)&&!w.num||f&&v&&w.num===String(f)&&w.sid===String(v)),yd=f=>{let v=Math.round((Date.now()+(H.repSkew||0)-f.at)/6e4);return v<1?"ahora":`hace ${v} min`},sa=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Ro(f,v,w){if(!H.url||!H.repOk)return"";let A=lh(f,v),C=f?wm:Em;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${A.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${A.map(L=>`<p><span>${Ao[L.kind]||"\u2022"} <b>${d(Co(L.kind))}</b> <small>${L.up>1?L.up+" viajeros \xB7 ":""}${yd(L)}</small></span>${sa.has(L.id)?"<small>\u2713</small>":`<button type="button" data-rv="${L.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${L.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${f?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${C.map(L=>`<button type="button" data-rk="${L}" data-rn="${d(f||"")}" data-rs="${d(v||"")}" data-rl="${d(w||"")}">${Ao[L]} ${d(Co(L))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function Sd(f,v){try{let A=await(await fetch(H.url.replace(/\/+$/,"")+v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).json();if(!A.ok){qn(A.err||"No se ha podido enviar");return}if(A.id){sa.add(A.id);try{localStorage.setItem("rod_votes",JSON.stringify([...sa].slice(-300)))}catch{}}qn(v==="/vote"?"Gracias, voto guardado":A.n>1?`Gracias \xB7 ya sois ${A.n} avisando de lo mismo`:"Gracias, aviso enviado");let C=await wt(H.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(H.rep=C.items),h._h="",Je(),cn(!0)}catch{qn("Sin conexi\xF3n con el puente")}}function Md(f){f.querySelectorAll("[data-rk]").forEach(v=>v.onclick=w=>{w.stopPropagation(),v.disabled=!0,Sd({kind:v.dataset.rk,num:v.dataset.rn,sid:v.dataset.rs,line:v.dataset.rl},"/report")}),f.querySelectorAll("[data-rv]").forEach(v=>v.onclick=w=>{w.stopPropagation();let[A,C]=v.dataset.rv.split(":");sa.add(+A);try{localStorage.setItem("rod_votes",JSON.stringify([...sa].slice(-300)))}catch{}Sd({id:+A,v:+C},"/vote")})}let bd=0;function qn(f){let v=p("#toast");v||(v=document.createElement("div"),v.id="toast",document.body.appendChild(v)),v.textContent=f,v.className="on",clearTimeout(bd),bd=setTimeout(()=>{v.className=""},2600)}function ch(f){return f.src?`<b class="asrc ${f.src==="Adif"?"adif":""}">${f.src==="Adif"?"Adif \xB7 v\xEDa":d(f.src)}</b>`:""}function hh(f){if(!f.when)return"";let[v,w]=f.when.split("T"),A=mt(new Date),C=A.ymd.slice(0,4)+"-"+A.ymd.slice(4,6)+"-"+A.ymd.slice(6,8);if(v===C&&w){let L=Math.round(A.min-(+w.slice(0,2)*60+ +w.slice(3,5)));return L<1?"ahora":L<60?`hace ${L} min`:`hoy a las ${w.slice(0,5)}`}return`${v.slice(8,10)}/${v.slice(5,7)}${w?" "+w.slice(0,5):""}`}function uh(){let f=p("#alr");if(!f)return;let v=H.alerts.filter(w=>[...w.fams].some(A=>Yt.has(A))).length;f.hidden=!v,f.textContent=`\u26A0\uFE0F ${v} aviso${v===1?"":"s"}`}{let f=p("#alrslot");f&&f.appendChild(p("#alr"))}p("#alr").onclick=()=>{dn=!1,tn=!1,j=!0,Je()},p("#wcopy").onclick=async()=>{let f=p("#wcode").textContent;try{await navigator.clipboard.writeText(f),p("#wcopy").textContent="Copiado \u2713"}catch{let w=document.createRange();w.selectNodeContents(p("#wcode"));let A=getSelection();A.removeAllRanges(),A.addRange(w),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let Am=Vt.get("71801");function Cm(f,v){let w=b[f].id,A=$n.get(w);!(Xt()&&H.url)||A&&(A.loading||Date.now()-A.at<3e4)||($n.set(w,{...A||{},loading:!0,at:A?A.at:0}),wt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+w).then(C=>{$n.set(w,{at:Date.now(),d:C}),v&&v()}).catch(()=>$n.set(w,{at:Date.now(),err:1})))}let wd=f=>+f.slice(0,2)*60+ +f.slice(3,5),ra={k:-2,m:null};function Rm(f){let v=t.days.indexOf(de().ymd);if(ra.k!==v){ra.k=v,ra.m=new Map;for(let w of Y[v]||[])ra.m.set(String(w.num),w)}return ra.m.get(String(f))||null}let Ps={at:0,m:new Map};function Ed(f){if(Date.now()-Ps.at>6e4){Ps.at=Date.now(),Ps.m=new Map;let w=de(),A=t.days.indexOf(w.ymd);if(A>=0)for(let C of Y[A]){let L=w.min-C.t0;if(L<C.pat.t[1]+3||L>C.pat.t[C.pat.t.length-2]-3)continue;let W=Ps.m.get(C.fam)||[0,0];W[0]++,H.vp.has(C.tid)&&W[1]++,Ps.m.set(C.fam,W)}}let v=Ps.m.get(f);return v&&v[0]>=3?v[1]/v[0]:1}function dh(f,v){let w=de(),A=Xt()&&w.live&&!v,C=$n.get(b[f].id),L=[],W=new Map([...H.vp.values()].map(X=>[String((st.get(X.tid)||{}).num||X.num),X]));if(A&&C&&C.d&&Array.isArray(C.d.trains))for(let X of C.d.trains){let K=(X.departureDateHourSelectedStation||"").slice(11,16);if(!K)continue;let lt=String(X.commercialNumber||X.technicalNumber||""),S=W.get(lt),O=S?H.delays.get(S.tid):null,ut=Math.max(typeof O=="number"?Math.max(0,O/60):0,S&&S.pre&&S.preDl||0),dt=wd(K);dt<w.min-720&&(dt+=1440),L.push({sm:dt,est:dt+ut,dl:ut,fam:(X.line||{}).id||"",dest:(X.destinationStation||{}).name||"",destId:(X.destinationStation||{}).id||"",plat:X.platformSelectedStation||"",cancel:!!X.trainCancelled,obs:X.trainObservations||"",live:!!S,num:lt,tid:S?S.tid:"",tr:S&&st.get(S.tid)||Rm(lt),src:"oficial"})}else{let X=t.days.indexOf(w.ymd);if(X<0)return L;let K=(lt,S)=>{for(let O of lt){let ut=O.pat.stops.indexOf(f);if(ut<0||ut===O.pat.stops.length-1)continue;let dt=Ie(O),kt=typeof dt=="number"?Math.max(0,dt/60):0,ae=O.t0+O.pat.t[2*ut+1]-S;if(ae+kt<w.min-1||ae>w.min+360)continue;let pe=O.pat.stops[O.pat.stops.length-1];L.push({sm:ae,est:ae+kt,dl:kt,fam:O.fam,dest:b[pe].n,destId:b[pe].id,plat:"",cancel:dt==="X",obs:"",live:H.vp.has(O.tid),num:O.num,tid:O.tid,tr:O,src:"horario"})}};K(Y[X],0),X>0&&K(Y[X-1],1440),X+1<t.days.length&&w.min>1080&&K(Y[X+1],-1440)}if(A){let X=new Set(L.map(S=>S.num)),K=t.days.indexOf(w.ymd),lt=(S,O)=>{for(let ut of S||[]){if(X.has(String(ut.num)))continue;let dt=ut.pat.stops.indexOf(f);if(dt<0||dt===ut.pat.stops.length-1)continue;let kt=ut.t0+ut.pat.t[2*dt+1]-O;if(kt<w.min-45||kt>w.min+1||!H.vp.get(ut.tid))continue;let pe=H.delays.get(ut.tid),vt=typeof pe=="number"?Math.max(0,pe/60):0,Mt=ut.pat.stops[ut.pat.stops.length-1];L.push({sm:kt,est:kt+vt,dl:vt,fam:ut.fam,dest:b[Mt].n,destId:b[Mt].id,plat:"",cancel:!1,obs:"",live:!0,num:ut.num,tid:ut.tid,tr:ut,src:"horario"})}};K>=0&&(lt(Y[K],0),K>0&&lt(Y[K-1],1440));for(let S of L){let O=S.tid&&H.vp.get(S.tid),ut=S.tr?S.tr.pat.stops.indexOf(f):-1;S.passed=!!(O&&ut>=0&&!O.pre&&O.next!=null&&O.next>=0&&O.next>ut&&O.atStop!==ut),!S.passed&&S.live&&S.est<w.min&&(S.est=w.min,S.late=!0),S.passed&&(S.gone=!0)}}let V=L.filter(X=>X.gone?w.min-X.est<20:X.est>=w.min-.5).sort((X,K)=>X.est-K.est);{let X=V.filter(K=>K.gone);if(X.length>2){let K=new Set(X.slice(0,X.length-2));V=V.filter(lt=>!K.has(lt))}}if(!V.filter(X=>!X.gone).length&&L.length&&L[0].src==="oficial"&&!v)return dh(f,!0);for(let X of V){let K=X.num&&oh(X.num);K&&K.cx&&(X.cancel=!0,X.cxWhy=K.txt)}if(Xt()&&w.live){let X=t.days.indexOf(w.ymd);for(let K of V){if(K.live||K.cancel||!K.tr)continue;let lt=K.tr.day===X-1?1440:K.tr.day===X+1?-1440:0,S=K.tr.t0+K.tr.pat.t[1]-lt+(K.dl||0);K.ghost=w.min>S+3&&Ed(K.fam)>=.7}}if(v||(V=V.concat(M(f,w.min-.5,w.min+360)).sort((X,K)=>X.est-K.est)),V.some(X=>X.src==="oficial")){let X=Math.max(...V.map(lt=>lt.sm)),K=new Set(V.map(lt=>lt.num));V=V.concat(dh(f,!0).filter(lt=>lt.sm>X&&!K.has(String(lt.num))))}return V}let Td=(f,v,w,A)=>{let C={key:f,ico:v,name:w,st:[],i:0,walk:10,open:!1};try{let L=JSON.parse(localStorage.getItem("rod_"+f)||"null");L&&Object.assign(C,L)}catch{}return!C.st.length&&A&&(C.st=A),C},Yn=Td("home","\u{1F3E0}","Casa",["79410","79412"]),wn=Td("work","\u{1F4BC}","Trabajo",null),ge={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Io=[ge,Yn,wn];Yn.open=!1,wn.open=!1;function Im(f,v){let w=_t(f,v),A=_t(f,v+.009);return 1/Math.hypot(A[0]-w[0],A[1]-w[1])}function fh(f){if(!navigator.geolocation){ge.err="Este navegador no da la ubicaci\xF3n",cn(!0);return}navigator.geolocation.getCurrentPosition(v=>{let{longitude:w,latitude:A}=v.coords,C=_t(w,A),L=Im(w,A),W=b.map((lt,S)=>[S,Math.hypot(lt.w[0]-C[0],lt.w[1]-C[1])*L]).filter(([lt])=>b[lt].fams.size).sort((lt,S)=>lt[1]-S[1]),V=W.filter(([,lt],S)=>S===0||lt<Math.max(2.5,W[0][1]*1.6)).slice(0,3),X=ge.st[0]!==b[V[0][0]].id;ge.w=C,ge.k=L,ge.st=V.map(([lt])=>b[lt].id),ge.dist=Object.fromEntries(V.map(([lt,S])=>[b[lt].id,S])),ge.fix=Date.now(),ge.err="",X&&(ge.i=0);let K=[Yn,wn].find(lt=>lt.st.includes(ge.st[0])&&ge.dist[ge.st[0]]<1.5);cn(!0)},v=>{ge.err=v.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",f&&(Yn.open=!!Yn.st.length),cn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Pm=f=>Math.max(1,Math.round(f*1.3/.08));setTimeout(()=>fh(!0),400),setInterval(()=>{document.hidden||fh(!1)},12e4);let Ls=f=>{try{localStorage.setItem("rod_"+f.key,JSON.stringify({st:f.st,i:f.i,walk:f.walk,open:f.open,hide:f.hide||""}))}catch{}},ph=f=>f.st.length?Vt.get(f.st[f.i]||f.st[0]):null;function Lm(f,v,w,A){if(A&&v.bus)return v.bstops.slice(1).some(W=>A.has(W))?"to":"out";if(A&&v.tr){let W=v.tr.pat.stops,V=W.indexOf(f);if(V>=0&&W.slice(V+1).some(X=>A.has(X)))return"to"}if(A&&v.tr)return"out";let C=Vt.get(v.destId)??b.findIndex(W=>W.n===v.dest);if(C<0||C==null||w==null)return"otros";let L=W=>Math.hypot(b[W].w[0]-b[w].w[0],b[W].w[1]-b[w].w[1]);return L(C)<L(f)?"to":"out"}let Po=f=>f<1?"ahora":f<60?Math.round(f)+" min":Math.floor(f/60)+" h "+String(Math.round(f%60)).padStart(2,"0"),Ad=0,Dm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Nm(f,v,w){let A=ph(f);if(f===ge){if(A==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${ge.err?d(ge.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Yn,wn].find(ee=>ee.st.includes(ge.st[0])&&ge.dist[ge.st[0]]<1.5))return"";f.walk=Pm(ge.dist[f.st[f.i]]||0)}if(A==null){let yt=ge.st.length?Vt.get(ge.st[0]):null,ee=f===wn?Yn:wn,He=yt!=null&&!ee.st.includes(ge.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${f.ico}</span><span class="htit"><b>${f.name}</b><small>${He?`Est\xE1s en <b>${d(b[yt].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${He?`<button type="button" class="hpick" data-hnear="${f.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${f.key}">${He?"Otra\u2026":"Elegir"}</button></div></div>`}Cm(A,()=>cn(!0));let C=f===ge?null:f===Yn?wn:Yn,L=C?ph(C):null,W=L!=null&&L!==A?L:Am,V=L!=null&&L!==A?C===wn?"el trabajo":"casa":"Barcelona",X=b[A].fams,K=new Set([...X].filter(yt=>Yt.has(yt))),lt=K.size<X.size,S=ge.w?Math.hypot(b[A].w[0]-ge.w[0],b[A].w[1]-ge.w[1])*ge.k:null,O=f===ge||S!=null&&S>3&&Date.now()-ge.fix<15*6e4,ut=dh(A).filter(yt=>!G[yt.fam]||Yt.has(yt.fam)),dt=O?0:f.walk,kt=H.alerts.filter(yt=>[...yt.fams].some(ee=>K.has(ee))||yt.stops&&yt.stops.has(A)),ae=kt.some(yt=>Dm.test(yt.txt)),pe={to:[],out:[],otros:[],all:ut},vt=V!=="Barcelona"?new Set(C.st.map(yt=>Vt.get(yt)).filter(yt=>yt!=null)):null;ut.forEach(yt=>pe[Lm(A,yt,W,vt)].push(yt));let Mt=yt=>{if(yt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let ee=Ke=>(Ke.find(hi=>hi.fam)||{}).fam;if(yt==="to")return"Hacia "+Yi(V==="Barcelona"?"Barcelona":b[W].n,ee(pe.to)||[...K][0])+(V!=="Barcelona"?` <small>${V}</small>`:"");let He=[];for(let Ke of pe[yt])He.some(hi=>hi[0]===Ke.dest)||He.push([Ke.dest,Ke.fam]);return He.length?"Hacia "+He.slice(0,2).map(([Ke,hi])=>Yi(Ke,hi)).join(" "):"Otros"},oe=yt=>{let ee=pe[yt].find(En=>!En.cancel&&!En.gone&&En.est-v.min>=dt);if(!ee){let En=pe[yt].find(Hm=>!Hm.cancel);return En&&!O?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${it(En.est)}) sale en ${Po(En.est-v.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let He=ee.est-v.min-dt,Ke=O?"v-info":He<1.5?"v-bad":He<5?"v-warn":"v-ok",hi=ee.ghost?pe[yt].find(En=>!En.cancel&&!En.ghost&&En.live&&En.est>ee.est):null;return{cls:Ke,ghost:!!ee.ghost,big:O?He<1?"Sale ahora":"Sale en "+Po(He):He<1.5?"\xA1Sal ya!":"Sal en "+Po(He),warn:ee.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${hi?` \xB7 el siguiente en marcha sale a las ${it(hi.est)}`:""}`:ae?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${ee.bus?"\u{1F68C} autob\xFAs \xB7 ":""}${it(ee.est)} \xB7 ${ee.fam} a ${ee.dest}${ee.plat?" \xB7 v\xEDa "+ee.plat:""}${ee.dl>=1?` \xB7 +${Math.round(ee.dl)} min`:""}${ee.arr!=null?` \xB7 llegas a las ${it(ee.arr)}`:""}`,x:ee}},ye=vt||new Set([W]),Le=yt=>{let ee=yt.tr;if(!ee)return null;let He=ee.pat.stops,Ke=He.indexOf(A);if(Ke<0)return null;let hi=-1;for(let En=Ke+1;En<He.length;En++)if(ye.has(He[En])){hi=En;break}return hi<0?null:yt.est+(ee.pat.t[2*hi]-ee.pat.t[2*Ke+1])};pe.to.forEach(yt=>{yt.arr=Le(yt)});let hn=pe.out.length?"out":"otros",De=oe("to"),ce=oe(hn);!O&&f!==ge&&De.x&&(zm(f,De.x,b[A].n,dt),useLive=Xt()&&v.live);let Zi=K.size===1,cr=yt=>{let ee=yt.est-v.min;return O?yt.cancel?"cx":ee<0?"u-miss":"u-info":yt.cancel?"cx":ee<dt?"u-miss":ee<dt+1.5?"u-now":ee<dt+5?"u-soon":"u-ok"},Dn=yt=>{if(yt.gone)return`<li class="hr u-gone${yt.live?" on":""}${To(yt)?" sel":""} go" data-dk="${w.push(yt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${it(yt.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(v.min-yt.est))} min</small></span><span class="hrd">${Yi((Zi?"":yt.fam+" \xB7 ")+yt.dest,yt.fam)}<small class="hro">tren ${d(yt.num)}</small></span><span class="hrm">${yt.dl>=1?`<em class="dl ${Is(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}</span></li>`;let ee=!yt.cancel&&yt.est-v.min<dt,He=lh(yt.num,"");return`<li class="hr ${cr(yt)}${yt.live?" on":""}${yt.ghost?" gh":""}${To(yt)?" sel":""} go" style="--lc:${G[yt.fam]||"#6b7385"}" data-dk="${w.push(yt)-1}" title="${yt.cancel?"Cancelado":ee?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${yt.cancel?"\u2715":ee?it(yt.est):Po(yt.est-v.min)}</b><small>${yt.cancel?"cancelado":yt.late?"a\xFAn no ha salido":ee?"no llegas":yt.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':it(yt.est)}</small></span><span class="hrd">${yt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Yi((Zi?"":yt.fam+" \xB7 ")+yt.dest,yt.fam)}${He.length?`<i class="cr" title="${d(He.map(Ke=>Co(Ke.kind)).join(" \xB7 "))}">${He.slice(0,2).map(Ke=>Ao[Ke.kind]).join("")}</i>`:""}${yt.arr!=null?`<small class="hro">llegas a las ${it(yt.arr)}${(()=>{let Ke=yt.num&&Pn(yt.num);return Ke&&Ke.n>=3&&Ke.late/Ke.n>=.5?` \xB7 <b class="slate">suele ir tarde (${Ke.late}/${Ke.n})</b>`:""})()}</small>`:""}${yt.obs?`<small class="hro">${d(yt.obs)}</small>`:""}</span><span class="hrm">${!yt.cancel&&yt.dl>=1?`<em class="dl ${Is(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}${yt.plat?`<i class="via">v\xEDa ${d(yt.plat)}</i>`:""}</span></li>`},oa=(yt,ee,He)=>`<div class="hcol"><div class="hdir">${Mt(yt)}${He?`<button type="button" class="hhide" data-hhide="${f.key}:${He}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${ee.cls}${ee.ghost?" gh":""}${ee.x?" go":""}"${ee.x?` data-dk="${w.push(ee.x)-1}"`:""}><b>${ee.big}</b><small>${d(ee.small)}</small>${ee.warn?`<span class="hvw">${d(ee.warn)}</span>`:""}</div><ol>${pe[yt].slice(0,(f.more?yt==="all"||f.hide?20:10:yt==="all"?7:f.hide?8:4)+pe[yt].filter(Ke=>Ke.gone).length).map(Dn).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(f===ge){let yt=oe("all");var km=yt.x?`${yt.big} \xB7 <b>${it(yt.x.est)}</b> ${d(yt.x.fam)} a ${d(yt.x.dest)}${yt.x.plat?" \xB7 v\xEDa "+d(yt.x.plat):""}`:yt.big}let Vm=f===ge?km:De.x?`${De.big} \xB7 <b>${it(De.x.est)}</b>${De.x.arr!=null?` \u2192 llegas a las <b>${it(De.x.arr)}</b>`:""} hacia ${d(V)}${De.x.plat?" \xB7 v\xEDa "+d(De.x.plat):""}`:"Sin trenes hacia "+d(V);return`<div class="hplace ${f.open?"open":""}"><button type="button" class="hhead" data-ht="${f.key}"><span class="hico">${f.ico}</span><span class="htit"><b>${d(b[A].n)}</b><small class="c${ae?"bad":De.cls.slice(2)}">${Vm}</small></span><span class="hchev">\u25BE</span></button>`+(f.open?`
      <div class="hbody">
        ${f.st.length>1?`<div class="hst">${f.st.map((yt,ee)=>{let He=Vt.get(yt);return He==null?"":`<button type="button" data-hs="${f.key}:${ee}" class="${ee===f.i?"on":""}">${d(b[He].n)}</button>`}).join("")}</div>`:""}
        ${f===ge?`<div class="hwalk">\u{1F4CD} A ${(()=>{let yt=ge.dist[f.st[f.i]]||0;return yt<1?Math.round(yt*100)*10+" m":yt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${f.walk} min</b> a pie</div>`:""}
        ${O&&f!==ge?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${S<10?S.toFixed(1).replace(".",","):Math.round(S)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${O?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${f.key}:-1">\u2212</button><b>${dt} min</b><button type="button" data-hw="${f.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${lt?`<div class="hflt">Solo ${[...K].sort(P).map(li).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${kt.length?`<div class="hal ${ae?"bad":""}">\u26A0\uFE0F ${ch(kt[0])} ${d(kt[0].txt)} <small>${hh(kt[0])}</small>${kt.length>1?` <a data-hal>+${kt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...K].sort(P).join(", ")}</div>`}
        ${(()=>{let yt=f.st.flatMap(ee=>lh("",ee));return yt.length?`<div class="hcr">${yt.slice(0,3).map(ee=>`${Ao[ee.kind]} <b>${d(Co(ee.kind))}</b> <small>${ee.up>1?ee.up+" viajeros \xB7 ":""}${yd(ee)}</small>`).join("<br>")}</div>`:""})()}
        ${f===ge?`<div class="hcols one">${oa("all",oe("all"))}</div>`:f.hide==="out"?`<div class="hcols one">${oa("to",De)}</div><a class="hshow" data-hshow="${f.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:f.hide==="to"?`<div class="hcols one">${oa(hn,ce)}</div><a class="hshow" data-hshow="${f.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${oa("to",De,"to")}${oa(hn,ce,"out")}</div>`}
        ${ut.length>(f===ge?7:8)?`<button type="button" class="hmore" data-hmore="${f.key}">${f.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${useLive?$n.get(b[A].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${useLive?$n.get(b[A].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${A}">\u{1F5FA}\uFE0F mapa</a>${f===ge?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${f.key}">\u270E cambiar</a>`}${f===wn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let mi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Cd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Rd=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,aa=()=>{let f=[...Yn.st,...wn.st],v=new Set;return f.forEach(w=>{let A=Vt.get(w);A!=null&&b[A].fams.forEach(C=>v.add(C))}),{stations:f,lines:[...v].sort(P)}},Um=f=>Uint8Array.from(atob(f.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((f.length+3)%4)),v=>v.charCodeAt(0));async function Id(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Pd(f){let w=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:f.toJSON(),...aa()})})).json();if(!w.ok)throw new Error(w.err||"error")}let Ln={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Fm(){let{lines:f,stations:v}=aa(),w=new Set(f),A=new Set(v.map(W=>Vt.get(W))),C=H.alerts.filter(W=>[...W.fams].some(V=>w.has(V))||[...W.stops||[]].some(V=>A.has(V)));if(!Ln.seen){try{Ln.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Ln.seen=new Set}if(!Ln.seen.size){C.forEach(W=>Ln.seen.add(W.id+"|"+W.txt.length)),Ld();return}}let L=C.filter(W=>!Ln.seen.has(W.id+"|"+W.txt.length));if(L.length&&(L.forEach(W=>Ln.seen.add(W.id+"|"+W.txt.length)),Ld(),!(!Ln.on||!("Notification"in window)||Notification.permission!=="granted")))for(let W of L.slice(0,3)){let V=(W.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(W.fams.size?" \xB7 "+[...W.fams].sort(P).slice(0,4).join(" "):""),X={body:W.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+W.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(K=>K?K.showNotification(V,X):new Notification(V,X)).catch(()=>{try{new Notification(V,X)}catch{}})}}function Ld(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Ln.seen].slice(-400)))}catch{}}async function Om(){if(Ln.on)Ln.on=!1,qn("Avisos desactivados");else{if(!("Notification"in window)){qn(Cd&&!Rd()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){qn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Ln.on=!0,qn("Listo: te aviso de incidencias en "+aa().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Ln.on?"1":"")}catch{}cn(!0)}async function Bm(){if(!H.repOk)return Om();if(!mi.busy){mi.busy=!0;try{let f=await Id();if(!f){qn(Cd&&!Rd()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,mi.on){let v=await f.pushManager.getSubscription();v&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:v.endpoint})}).catch(()=>{}),await v.unsubscribe().catch(()=>{})),mi.on=!1,qn("Avisos desactivados")}else{if(!H.url){qn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){qn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let w=(await wt(H.url.replace(/\/+$/,""),"/push/key")).key,A=await f.pushManager.getSubscription()||await f.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Um(w)});await Pd(A),mi.on=!0,qn("Listo: te avisaremos de incidencias en "+aa().lines.join(", "))}try{localStorage.setItem("rod_push",mi.on?"1":"")}catch{}}catch(f){qn("No se han podido activar los avisos: "+(f.message||f))}finally{mi.busy=!1,cn(!0)}}}async function Dd(){if(mi.on)try{let f=await Id(),v=f&&await f.pushManager.getSubscription();v&&await Pd(v)}catch{}}let mh=!1,Nd="";function gh(){let f=y?"t"+(y.tid||y.vtid):F>=0?"s"+F:j?"a":dn?"n":"";f!==Nd&&(mh=!1,Nd=f);let v=innerWidth<=640&&!!f&&!mh,w=p("#inf");w.classList.contains("compact")!==v&&(w.classList.toggle("compact",v),requestAnimationFrame(()=>{if(h.style.display!=="none"){let A=w.getBoundingClientRect().bottom;h.style.top=Math.round(A+8)+"px",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-A-16)+"px"}}))}let Ud=new Set;function zm(f,v,w,A){if(!(Ln.on||mi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=de(),L=v.sm-C.min-A;if(!C.live||v.dl<10||L>40||Ud.has(v.num+"|"+v.sm))return;Ud.add(v.num+"|"+v.sm);let W=`${f.ico} Tu tren de las ${it(v.sm)} va con +${Math.round(v.dl)} min`,V=`${v.fam} a ${v.dest} desde ${w}: saldr\xE1 hacia las ${it(v.est)}. Puedes salir ${Math.round(v.dl)} min m\xE1s tarde.`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(X=>X?X.showNotification(W,{body:V,tag:"rd-"+v.num,icon:"icons/icon-192.png"}):new Notification(W,{body:V})).catch(()=>{try{new Notification(W,{body:V})}catch{}})}function cn(f){let v=p("#home");if(!v)return;let w=performance.now();if(!f&&w-Ad<4e3)return;Ad=w;let A=de(),C=[],L=aa(),W=S=>{let O=ph(S);return O==null||!ge.w?1:Math.hypot(b[O].w[0]-ge.w[0],b[O].w[1]-ge.w[1])},V=[ge,...[Yn,wn].sort((S,O)=>W(S)-W(O))],X=V.map(S=>Nm(S,A,C)).join("")+(Io.some(S=>S.open)&&L.lines.length,"");if(v.className=Io.some(S=>S.open)?"open":"",v._h===X)return;v._h=X,v.innerHTML=X;{let S=[...v.children].find(O=>O.classList.contains("hplace")&&!O.querySelector(".hnew"));S&&S.classList.add("lead")}let K=S=>S==="work"?wn:S==="near"?ge:Yn;v.querySelectorAll("[data-hloc]").forEach(S=>S.onclick=()=>{ge.err="",fh(!0)}),v.querySelectorAll("[data-ht]").forEach(S=>S.onclick=()=>{if(p("#inf").classList.contains("compact")){mh=!0,gh();return}let O=K(S.dataset.ht);O.open=!O.open,Ls(O),cn(!0),(y||F>=0||j||dn)&&(h._h="",Je())}),v.querySelectorAll("[data-hs]").forEach(S=>S.onclick=()=>{let[O,ut]=S.dataset.hs.split(":"),dt=K(O);dt.i=+ut,Ls(dt),cn(!0)}),v.querySelectorAll("[data-hw]").forEach(S=>S.onclick=()=>{let[O,ut]=S.dataset.hw.split(":"),dt=K(O);dt.walk=g(dt.walk+ +ut,0,60),Ls(dt),cn(!0)}),v.querySelectorAll("[data-hmap]").forEach(S=>S.onclick=()=>{let O=+S.dataset.hmap;dn=j=tn=!1,y=null,F=O,At(),Object.assign(s,{tx:b[O].w[0],ty:b[O].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Je(),a()}),v.querySelectorAll("[data-hset]").forEach(S=>S.onclick=()=>{Ds=S.dataset.hset,m.value="",m.placeholder=Ds==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),v.querySelectorAll("[data-hnear]").forEach(S=>S.onclick=()=>{let O=Vt.get(ge.st[0]);O!=null&&_h(O,S.dataset.hnear)}),v.querySelectorAll("[data-hmore]").forEach(S=>S.onclick=()=>{let O=K(S.dataset.hmore);O.more=!O.more,cn(!0)}),v.querySelectorAll("[data-hhide]").forEach(S=>S.onclick=O=>{O.stopPropagation();let[ut,dt]=S.dataset.hhide.split(":"),kt=K(ut);kt.hide=dt,Ls(kt),cn(!0)}),v.querySelectorAll("[data-hshow]").forEach(S=>S.onclick=()=>{let O=K(S.dataset.hshow);O.hide="",Ls(O),cn(!0)}),v.querySelectorAll("[data-hdel]").forEach(S=>S.onclick=()=>{wn.st=[],wn.open=!1,Ls(wn),cn(!0),Dd()}),v.querySelectorAll("[data-dk]").forEach(S=>S.onclick=()=>Fd(C[+S.dataset.dk])),v.querySelectorAll("[data-hal]").forEach(S=>S.onclick=()=>p("#alr").click());let lt=p("#bell");lt||(lt=document.createElement("button"),lt.type="button",lt.id="bell",lt.onclick=Bm,p("#inf .more").prepend(lt));{let S=H.repOk?mi.on:Ln.on;lt.hidden=!L.lines.length,lt.className=S?"on":"",lt.textContent=(S?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+L.lines.join(", "),lt.title=(S?"Avisos activados":"Activar avisos")+" de "+L.lines.join(", ")+(H.repOk?"":" (mientras la app est\xE9 abierta)")}Md(v)}function Fd(f){if(!f)return;let v=t.days.indexOf(de().ymd),w=Xn.find(L=>L.real?f.tid&&L.v.tid===f.tid||f.num&&String(L.tr?L.tr.num:L.v.num)===String(f.num):f.tr&&L.tr===f.tr||f.num&&L.tr&&String(L.tr.num)===String(f.num)),A=f.tr||w&&w.tr||(Y[v]||[]).find(L=>String(L.num)===String(f.num));if(dn=j=tn=!1,F=-1,y=w?w.tr||{vtid:w.v.tid}:A||null,!y)return;fn=w&&w.tr?w.tr:null,fn&&innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=w?w.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),At(),h._h="",Je(),pi=0,a()}let Ds=!1;m.addEventListener("blur",()=>setTimeout(()=>{Ds&&!m.value.trim()&&(Ds=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function wS(){}function _h(f,v){let w=v==="work"?wn:Yn,A=b[f].id,C=b.filter(L=>L.fams.size&&L!==b[f]&&Math.hypot(L.w[0]-b[f].w[0],L.w[1]-b[f].w[1])<.6).map(L=>L.id);w.st=[A,...C].slice(0,3),w.i=0,w.open=!0,Ls(w),cn(!0),Dd()}let xh=p("#lines");xh.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+U.map(f=>`<button type="button" style="--c:${G[f]}" data-f="${f}">${f}</button>`).join("");function Od(){try{cn(!0)}catch{}xh.querySelectorAll("[data-f]").forEach(f=>{f.dataset.f!=="*"&&f.classList.toggle("off",!Yt.has(f.dataset.f))})}xh.querySelectorAll("[data-f]").forEach(f=>f.onclick=()=>{let v=f.dataset.f;v==="*"?U.forEach(w=>Yt.add(w)):Yt.size===U.length?(Yt.clear(),Yt.add(v)):Yt.has(v)?(Yt.delete(v),Yt.size||U.forEach(w=>Yt.add(w))):Yt.add(v);try{localStorage.setItem("rod_lines",JSON.stringify([...Yt]))}catch{}Od(),jt(),At(),uh(),pi=0,a()});let vh=[...document.querySelectorAll("[data-sp]")],ci=0;function Bd(f){let v=de();f&&(Et===f||ci===f)?Et?(zt=v.min,te=v.min,Et=0,ci=f):(le=performance.now(),Et=f,ci=0):f===0?(Et=0,te=null,ci=0):(zt=v.min,le=performance.now(),te=v.min,Et=f,ci=0),vh.forEach(w=>{let A=+w.dataset.sp;w.classList.toggle("on",A===(Et||ci)||!Et&&!ci&&te==null&&A===0),w.classList.toggle("pz",!!ci&&A===ci),w.textContent=A===0?"Ahora":ci===A?"\u25B6 \xD7"+A:Et===A?"\u23F8 \xD7"+A:"\xD7"+A}),pi=0,a()}vh.forEach(f=>f.onclick=()=>Bd(+f.dataset.sp)),p("#tsl").oninput=f=>{let v=+f.target.value;zt=v,te=v,le=performance.now(),Et===0&&!ci&&vh.forEach(w=>w.classList.remove("on")),pi=0,a()},setInterval(()=>{te!=null&&Et&&zt+(performance.now()-le)/6e4*Et>1560&&(zt=240,le=performance.now())},1e3),window.__rodSearch=f=>{let v=_(f.trim());if(!v){u.style.display="none",u._pick=null;return}let w=[],A=[];b.forEach((V,X)=>{if(!V.fams.size)return;let K=_(V.n);K.startsWith(v)||K.includes(" "+v)||K.includes("-"+v)?w.push(X):K.includes(v)&&A.push(X)});let C=w.concat(A).slice(0,7),L=T.filter(V=>_(V.name).startsWith(v)).sort((V,X)=>X.pop-V.pop).slice(0,3),W=C.map(V=>({h:`\u{1F689} ${d(b[V].n)}<em>${[...b[V].fams].sort(P).slice(0,3).map(X=>`<em class="ls" style="background:${G[X]}">${X}</em>`).join(" ")}</em>`,go:()=>{if(Ds){let X=Ds;Ds=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",_h(V,X);return}dn=!1,j=!1,tn=!1,F=V,y=null,fn=null,At(),Object.assign(s,{tx:b[V].w[0],ty:b[V].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Je(),a()}})).concat(L.map(V=>({h:`${d(V.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:V.cx,ty:V.cy,dist:g(V.size*3+14,14,60)}),a()}})));u.innerHTML=W.map((V,X)=>`<li data-i="${X}">${V.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=V=>{W[V]&&(W[V].go(),u.style.display="none",m.value="",m.blur())},u.querySelectorAll("li[data-i]").forEach(V=>V.onclick=()=>u._pick(+V.dataset.i))},Od(),At();try{let f=new URLSearchParams(location.search).get("st");if(f){let v=_(f),w=-1,A=0;b.forEach((C,L)=>{if(!C.fams.size)return;let W=_(C.n),V=W===v?3:W.startsWith(v)||v.startsWith(W)?2:W.includes(v)||v.includes(W)?1:0;V>A&&(A=V,w=L)}),w>=0&&setTimeout(()=>{F=w,At(),Object.assign(s,{tx:b[w].w[0],ty:b[w].w[1],dist:18,tilt:.5}),Je(),a()},300)}}catch{}window.__rod={TID:st,SID:Vt,byDay:Y,get days(){return t.days},get hist(){return me},get past(){return ie.cur},get cols(){return nn.mesh?nn.mesh.count:-1},get dist(){return r.dist},get follow(){return fn},get selTrip(){return y},ST:b,TR:et,FAM:U,act:()=>Xn,setSpeed:Bd,RT:H,pollRT:ne,nowState:de,posAt:Cs,activeTrips:ta,select:f=>{y=f,Je()}}}var Kr=window.__DATA__;var Te=i=>document.querySelector(i),as=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Bn=(i,t,e)=>Math.min(e,Math.max(t,i)),td=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Wn=Te("#c"),xo=new Hc({canvas:Wn,antialias:!0});xo.setPixelRatio(Math.min(devicePixelRatio||1,2));var Es=new Ta;Es.background=new ue(15659509);var ih=35,$i=new Fn(ih,1,2,1500);Es.add(new Za(16777215,9080992,1));var nm=new Ka(16777215,.9);nm.position.set(-40,-70,90);Es.add(nm);var Gi=100/Kr.w,mo=Kr.w/2,go=Kr.h/2,an=[],ed=new Mi;Es.add(ed);var im=new Hs({color:16777215,transparent:!0,opacity:.55});for(let i of Kr.m){let t=new Mi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let _=g.map(p=>{let d=[];for(let D=0;D<p.length;D+=2)d.push(new Lt((p[D]-mo)*Gi,(p[D+1]-go)*Gi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(p=>p.length>=3);if(!_.length)continue;let T=new Or(_[0]);for(let p=1;p<_.length;p++)T.holes.push(new Ws(_[p]));e.push(T);for(let p of _[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of _)n.push(new La(new rn().setFromPoints(p.map(d=>new z(d.x,d.y,0))),im))}if(!e.length)continue;let l;try{l=new Ga(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new Xa({color:13421772}),h=new yn(l,c);t.add(h);let m=new Mi;n.forEach(g=>m.add(g)),m.position.z=.04,ed.add(m),t.scale.z=.01,ed.add(t);let u={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,an.push(u)}var Zw=an.map(i=>i.mesh),Zp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},sm=0,rm=0;for(let i of an){for(let t of i.rings)sm+=Zp(t[0])-t.slice(1).reduce((e,n)=>e+Zp(n),0);rm+=i.area}var aS=Math.sqrt(rm/sm),Zc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},am={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},ld="sqrt",cd="pop",ju=0,nd=0,Yr=1,po=1,oS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},id=i=>cd==="pop"?i.pop:i.pop/i.area,Yc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ue(i));function lS(i){i=Bn(i,0,1)*(Yc.length-1);let t=Math.min(Math.floor(i),Yc.length-2);return Yc[t].clone().lerp(Yc[t+1],i-t)}var Zr=i=>i>=100?as(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function cS(){nd=0;for(let i of an)nd+=i.pop;[...an].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...an].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),om()}var hS=new ue("#d3d8e2"),uS=new ue("#eceff3");function hd(i){i.mat.color.copy(i.base).lerp(uS,.86),i.inF||i.mat.color.lerp(hS,.8)}function om(){Yr=1,po=1e12;for(let e of an){let n=id(e);Yr=Math.max(Yr,n),po=Math.min(po,n)}let i=Math.log10(Math.max(po,.01)),t=Math.log10(Yr);for(let e of an)e.base=lS((Math.log10(Math.max(id(e),.01))-i)/(t-i)),hd(e);Te("#lmin").textContent=Zr(po),Te("#lmax").textContent=Zr(Yr),Te("#lname").textContent=cd==="pop"?"habitantes":"hab./km\xB2",sh()}function sh(){let i=oS[ld],t=i(Yr),e=24*ju;for(let n of an)n.zt=ju<=.001?.01:Math.max(.12*Math.min(1,ju),e*i(id(n))/t)*(n.inF?1:.1);In()}var Jp=Object.fromEntries(an.map(i=>[i.code,i])),Jc=[],lm=[];for(let i of Kr.bd){let t=Jp[i.a],e=Jp[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)lm.push((i.p[n]-mo)*Gi,(i.p[n+1]-go)*Gi,0,(i.p[n+2]-mo)*Gi,(i.p[n+3]-go)*Gi,0),Jc.push(t,e)}var Qc=new ss;Qc.setPositions(lm);var cm=new zi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),hm=new zi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[cm,hm].forEach((i,t)=>{let e=new js(Qc,i);e.frustumCulled=!1,e.renderOrder=10+t,Es.add(e)});function dS(){let i=Qc.attributes.instanceStart.data.array;for(let t=0;t<Jc.length;t+=2){let e=Math.max(Jc[t].z,Jc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Qc.attributes.instanceStart.data.needsUpdate=!0}var th={};for(let i of Object.keys(Zc)){let t=an.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=Zc[i],c.title="Ver solo "+am[i],c.onclick=()=>bS("pr:"+i),document.body.appendChild(c),th[i]={el:c,p:new z(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:Zc[i]}}var Qu=new z;function fS(){for(let i in th){let t=th[i];Qu.copy(t.p).project($i),t.el.style.transform=`translate(-50%,-50%) translate(${(Qu.x*.5+.5)*innerWidth}px,${(-Qu.y*.5+.5)*innerHeight}px)`}}var on={tilt:0,yaw:0,dist:150,tx:0,ty:0},_e={...on};function pS(){let i=innerWidth/innerHeight,t=Math.tan(ih*Math.PI/360);return Math.max(Kr.h*Gi*1.1,100*1.1/i)/(2*t)}var mS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{_e.yaw=Math.round(_e.yaw/(2*Math.PI))*2*Math.PI,_e.tilt=0,In()});function ud(){Object.assign(_e,{tilt:0,yaw:0,dist:pS(),tx:0,ty:0}),In()}function gS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=on;$i.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),$i.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),$i.lookAt(n,s,0)}var Kc=!0,Kp=performance.now(),_o=new Map;function In(){Kc=!0}function um(i){requestAnimationFrame(um);let t=Bn((i-Kp)/1e3,0,.05);Kp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(on)){let r=_e[s]-on[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(on[s]+=r*e,n=!0):on[s]=_e[s]}for(let s of an){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of _o){let a=(i-r)/1800;a>=1?(_o.delete(s),ir(s)):ir(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Kc=!0),n||Kc){mS.style.transform=`rotate(${on.yaw}rad) scaleY(${(.55+.45*Math.cos(on.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(_e.yaw/2))<.02&&_e.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}gS(),dS(),fS(),window.__rodFrame&&window.__rodFrame(),xo.render(Es,$i),Kc=n,Te("#tilt").value=Math.round(_e.tilt*180/Math.PI),Te("#yaw").value=Math.round(((_e.yaw*180/Math.PI+180)%360+360)%360-180)}}function dm(){xo.setSize(innerWidth,innerHeight,!1),$i.aspect=innerWidth/innerHeight,$i.updateProjectionMatrix(),cm.resolution.set(innerWidth,innerHeight),hm.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),In()}addEventListener("resize",()=>{dm(),Ze.length&&Ts()});Wn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;_e.yaw+=n*.0035}else i.ctrlKey?_e.dist=Bn(_e.dist*Math.exp(e*.01),6,400):_e.tilt=Bn(_e.tilt+e*.002,0,1.32);In()},{passive:!1});Wn.addEventListener("contextmenu",i=>i.preventDefault());var Wi=new Map,Qn=null,tr=0,sd=0,rd=0;var eh=null;Wn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Ze.length&&setTimeout(Ts,50)),Wn.setPointerCapture(i.pointerId),Wi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Wi.size===1&&(Qn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Wi.size===2){let[t,e]=[...Wi.values()];tr=Math.hypot(t.x-e.x,t.y-e.y),sd=Math.atan2(e.y-t.y,e.x-t.x),rd=(t.y+e.y)/2,eh={mode:null,rot:0,sc:0,tl:0},Qn&&(Qn.multi=!0)}dd()});Wn.addEventListener("pointermove",i=>{let t=Wi.get(i.pointerId);if(!t){rs={x:i.clientX,y:i.clientY},ad||(ad=requestAnimationFrame(xS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Wi.size===2){let[s,r]=[...Wi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-sd;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=tr?a-tr:0,m=l-rd,u=eh||(eh={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=m,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&tr&&(_e.dist=Bn(_e.dist*tr/a,6,400)),u.mode==="rotate"&&(_e.yaw+=c,on.yaw=_e.yaw),u.mode==="tilt"&&(_e.tilt=Bn(_e.tilt-m*.006,0,1.32),on.tilt=_e.tilt),tr=a,sd=o,rd=l,In();return}if(Qn.moved+=Math.abs(e)+Math.abs(n),Qn.rot||i.altKey)_e.yaw+=e*.005,_e.tilt=Bn(_e.tilt+n*.004,0,1.32),on.yaw=_e.yaw,on.tilt=_e.tilt;else{let s=2*on.dist*Math.tan(ih*Math.PI/360)/innerHeight,r=Math.sin(on.yaw),a=Math.cos(on.yaw),o=1/Math.max(Math.cos(on.tilt),.3);_e.tx=Bn(_e.tx-a*e*s+-r*n*s*o,-70,70),_e.ty=Bn(_e.ty-r*e*s+a*n*s*o,-70,70),on.tx=_e.tx,on.ty=_e.ty}In()});var fm=i=>{let t=Qn&&!Qn.rot&&!Qn.multi&&Qn.moved<(Qn.touch?12:6)&&i.type==="pointerup"&&Wi.size===1,e=Qn&&Qn.touch;Wi.delete(i.pointerId),tr=0,eh=null,Wi.size||(Qn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Wn.addEventListener("pointerup",fm);Wn.addEventListener("pointercancel",fm);Wn.addEventListener("dblclick",ud);addEventListener("keydown",i=>{i.key==="Alt"&&(Wn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Wn.style.cursor="")});addEventListener("blur",()=>{Wn.style.cursor=""});var _S=new Xs,jp=new Lt,rs=null,ad=0,er=null;function xS(){if(ad=0,!rs||Qn)return;jp.set(rs.x/innerWidth*2-1,-(rs.y/innerHeight)*2+1),_S.setFromCamera(jp,$i);let i=null;if(i!==er){let e=er;er=i,e&&ir(e),i&&ir(i),In()}let t=window.__rodHover&&window.__rodHover(rs.x,rs.y);if(t){Qs.innerHTML=t,Qs.style.display="block";let e=Qs.offsetWidth,n=Qs.offsetHeight;Qs.style.left=Bn(rs.x+14,6,innerWidth-e-6)+"px",Qs.style.top=Bn(rs.y+14,6,innerHeight-n-6)+"px",Wn.style.cursor="pointer"}else dd(),Wn.style.cursor=""}Wn.addEventListener("pointerleave",()=>{if(rs=null,er){let i=er;er=null,ir(i),In()}dd()});var Qs=Te("#tip");function dd(){Qs.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{cd=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),om()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{ld=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),sh()});Te("#yaw").oninput=i=>{_e.yaw=+i.target.value*Math.PI/180,In()};Te("#tilt").oninput=i=>{_e.tilt=+i.target.value*Math.PI/180,In()};Te("#zin").onclick=()=>{_e.dist=Bn(_e.dist*.75,6,400),In()};Te("#zout").onclick=()=>{_e.dist=Bn(_e.dist/.75,6,400),In()};Te("#rst").onclick=ud;var Qp=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Ze=[],tm={},vS=i=>tm[i]||(tm[i]=new Hs({color:i}));function pm(i,t){i.og.children.forEach(e=>e.material=t?vS(t):im)}function ir(i,t=0){let e=i.mat.emissive;i===er?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function fd(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(ih*Math.PI/360),l=i.length===1?Bn(i[0].size*3.2+14,14,120):Bn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(_e,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),In()}var ws=Te("#q"),ri=Te("#list"),Xe=Te("#mcs");function rh(i,t=!0){if(ri.style.display="none",ws.value="",!i.sel){Ze.length>=6&&mm(Ze[0].o,!0);let e=new Set(Ze.map(s=>s.color)),n=Qp.find(s=>!e.has(s))||Qp[0];i.sel={o:i,color:n,tint:new ue(n).multiplyScalar(.12)},Ze.push(i.sel),pm(i,n)}Xe.classList.contains("min")&&vo(!1),_o.set(i,performance.now()),ir(i),t&&fd([i],Math.max(_e.tilt,.9)),Ts()}function mm(i,t){let e=Ze.indexOf(i.sel);e>=0&&Ze.splice(e,1),i.sel=null,pm(i,null),ir(i),In(),t||Ts()}function gm(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Ze.map(h=>{let m=1e9,u=-1e9,g=1e9,_=-1e9;for(let T of h.o.rings)for(let p=0;p<T[0].length;p+=2)m=Math.min(m,T[0][p]),u=Math.max(u,T[0][p]),g=Math.min(g,T[0][p+1]),_=Math.max(_,T[0][p+1]);return{x0:m,x1:u,y0:g,y1:_}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Ze.forEach((h,m)=>{let u=r[m],g=(u.x0+u.x1)/2,_=(u.y0+u.y1)/2;s.beginPath();for(let T of h.o.rings)for(let p of T)for(let d=0;d<p.length;d+=2){let D=e/2+(p[d]-g)*o,N=n/2-(p[d+1]-_)*o;d?s.lineTo(D,N):s.moveTo(D,N),d===p.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/aS,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ts(){if(!Ze.length){Xe.innerHTML="",Xe.style.display="none",vo(!1);return}if(Xe.style.display="flex",innerWidth<=640){let e=Te("#inf").getBoundingClientRect().bottom;Xe.style.top=Math.round(e+8)+"px",Xe.style.maxHeight=Math.max(110,Math.min(innerHeight*(Te("#rc").classList.contains("min")?.7:.4),Te("#rc").getBoundingClientRect().top-e-16))+"px",Xe.style.width=""}else if(innerHeight<=500){let e=Te("#inf").getBoundingClientRect().bottom;Xe.style.top=Math.round(e+8)+"px",Xe.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Xe.style.width="min(290px, 40vw)"}else Xe.style.top="",Xe.style.maxHeight="",Xe.style.width="";let i=Ze.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Zc[s.pr]}</em></div><div class="mb">${as(s.pop)} hab.</div><small>${Zr(s.area)} km\xB2 \xB7 ${Zr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Ze.length>1){let e=s=>Math.max(...Ze.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,as],["Superficie (km\xB2)",s=>s.o.area,Zr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Zr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Ze.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Ze.length===2){let[s,r]=Ze.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Xe.innerHTML=i,Xe.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),mm(Ze[+e.dataset.x].o)}),Xe.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>fd([Ze[+e.dataset.i].o],Math.max(_e.tilt,.9)),e.onmouseenter=()=>{let n=Ze[+e.dataset.i].o;_o.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Ze.splice(s,1);Ze.splice(r,0,a),Ts();let o=Te("#sil");o&&o.classList.add("flash")}}});let t=Te("#sil");t&&gm(t)}ws.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(ws.value);return}let i=td(ws.value.trim());if(!i){ri.style.display="none";return}let t=[],e=[];for(let s of an){let r=td(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ri.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${as(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ri.style.display="block",ri.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>rh(n[+s.dataset.i])),ri._r=n});ws.addEventListener("keydown",i=>{i.key==="Enter"&&ri._pick?ri._pick(0):i.key==="Enter"&&ri._r&&ri._r[0]&&rh(ri._r[0]),i.key==="Escape"&&(ws.value="",ri.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==ws&&_m()});var em=0;addEventListener("resize",()=>{clearTimeout(em),em=setTimeout(()=>{let i=Te("#sil");i&&gm(i)},120)});var nh=null,od=Te("#chip");function yS(i,t,e=.8){nh={codes:new Set(i.map(n=>n.code)),label:t},an.forEach(n=>{n.inF=nh.codes.has(n.code),hd(n)}),od.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,od.style.display="flex",Te("#chx").onclick=_m,sh(),fd(i,e),i.slice(0,40).forEach(n=>_o.set(n,performance.now()))}function _m(){nh&&(nh=null,an.forEach(i=>{i.inF=!0,hd(i)}),od.style.display="none",sh())}var SS="prov";function MS(i){let t=[...an].sort((a,o)=>o.pop-a.pop),e=[...an].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[an.filter(a=>a.pr===s),am[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[an.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${as(+s)} o m\xE1s habitantes`:+s==0?`menos de ${as(+r)} habitantes`:`${as(+s)} \u2013 ${as(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=nd/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function bS(i){let[t,e]=MS(i);t.length&&yS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{SS=i.dataset.tab,Te("#dbody").scrollTop=0});var nr=Te("#rc"),jc=Te("#mcstab");function Jr(i){nr.classList.toggle("min",i),Te("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Ze.length&&Ts()}function vo(i){Xe.classList.toggle("min",i),Xe.style.transform="",Xe.style.opacity="",jc.classList.toggle("on",i&&Ze.length>0),i&&(jc.textContent=`\u25B8 ${Ze.length} ${Ze.length===1?"ficha":"fichas"}`,jc.style.top=Xe.style.top||"124px")}function pd(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!ah.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Te("#rcgrab").onclick=()=>Jr(!nr.classList.contains("min"));innerWidth<=640&&Jr(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var xm=()=>innerWidth>640;pd(nr,{axis:"y",onEnd:(i,t)=>{if(!xm())if(t>40&&!nr.classList.contains("min")){let e=Te("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Jr(!0)}else t<-30&&nr.classList.contains("min")&&Jr(!1)}});pd(nr,{axis:"x",onEnd:i=>{xm()&&(i>50?Jr(!0):i<-30&&nr.classList.contains("min")&&Jr(!1))}});pd(Xe,{axis:"x",onMove:i=>{i<0&&(Xe.classList.add("sw"),Xe.style.transform=`translateX(${i}px)`,Xe.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Xe.classList.remove("sw"),i<-60?vo(!0):(Xe.style.transform="",Xe.style.opacity="")}});jc.onclick=()=>{vo(!1),Ts()};Te("#dtoggle").onclick=()=>{let i=Te("#dp").classList.toggle("open");Te("#rc").classList.toggle("dopen",i),Te("#dtoggle").textContent=i?ah.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var ah=matchMedia("(max-width:640px), (max-height:500px)");function vm(){let i=Te("#leg");ah.matches?Te("#rc").insertBefore(i,Te("#dtoggle")):document.body.appendChild(i),Ze.length&&Ts()}ah.addEventListener("change",vm);vm();dm();cS();ud();Object.assign(on,_e);for(let i of an)i.z=.01;requestAnimationFrame(um);Yp({scene:Es,camera:$i,renderer:xo,goal:_e,cur:on,invalidate:In,flyTo:(i,t,e,n)=>{Object.assign(_e,{tx:(i-mo)*Gi,ty:(t-go)*Gi,dist:e,tilt:n}),In()},K:Gi,CX:mo,CY:go,mcs:Xe,q:ws,list:ri,munis:an,select:rh,norm:td,fmt:as,clamp:Bn,mcsMin:vo});window.__app={scene:Es,renderer:xo,camera:$i,munis:an,labs:th,goal:_e,cur:on,select:rh,get mode(){return ld}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
